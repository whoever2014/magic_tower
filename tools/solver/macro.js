'use strict';
// 宏动作求解器：决策 = "去拿某件属性道具"（宏内部用最短路），血瓶房在需要时精确分支，成对交换剪枝，队长为终结宏。
// 用法：node --max-old-space-size=8000 tools/solver/macro.js [--secs 300] [--no-exchange]
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const { battle } = require('./battle');
const fs = require('fs');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const SECS = +arg('--secs', '300'), EXCHANGE = !process.argv.includes('--no-exchange');
const INCUMBENT = +arg('--incumbent', '-Infinity');
const OUT = arg('--out', __dirname + '/macro_route.json');
const BEAM = +arg('--beam', '200'), BRANCH = +arg('--branch', '10'), NEAR = +arg('--near', '200'), USE_DFS = process.argv.includes('--dfs');
const HP0 = +arg('--hp', '0'), ATK0 = +arg('--atk', '0'), DEF0 = +arg('--def', '0');
const heroPatch = {}; if (HP0) heroPatch.hp = HP0; if (ATK0) heroPatch.atk = ATK0; if (DEF0) heroPatch.def = DEF0;
const world = buildWorld(Object.keys(heroPatch).length ? { heroPatch } : {});
const S = makeSolver(world, { lazyDefer: false });
const I = S._internals;
const { blockers, items, compOf, nComp, enemys, FLAG, groups } = world;
const nB = blockers.length, NODES = nComp + nB;
const TRIG = FLAG.TRIG, CAPDEAD = FLAG.CAPDEAD;
const closure = S.closure, cloneState = I.cloneState, rebuild = I.rebuild, root = I.root, applyAction = I.applyAction, frontier = I.frontier, upperBound = I.upperBound;
function find(par, i) { while (par[i] !== i) { par[i] = par[par[i]]; i = par[i]; } return i; }
const enemyOf = b => enemys[blockers[b].enemyId];
const resolvedNow = (st, b) => st.res.get(b) && !(blockers[b].reclosable && (st.flags & TRIG) && !(st.flags & CAPDEAD));
const keyOf = (st, c) => c === 'yellow' ? st.yk : c === 'blue' ? st.bk : st.rk;
const compAdj = Array.from({ length: nComp }, () => []);
for (let b = 0; b < nB; b++) for (const c of blockers[b].compNb) compAdj[c].push(b);
const statItems = items.filter(it => (it.atk || it.def) && !it.cond);
const resItems = items.filter(it => (it.hp || it.yk || it.bk || it.rk) && !it.cond);
const captain = world.captain, trigComp = compOf[world.triggerCell];
const arenaGroup = groups.find(g => g.opens.some(d => blockers[d].floor === 'floor_10'));
const PEN = { yellow: 60, blue: 120, red: 240 };

// ---------- 宏内部：Dijkstra ----------
function blockerCost(st, b, keyMode, allowCaptain, forbid) {
  const bl = blockers[b];
  if (forbid && forbid.has(b)) return Infinity;
  if (resolvedNow(st, b)) return 0;
  if (bl.kind === 'npc') return Infinity;
  if (bl.kind === 'enemy') {
    if (!bl.fightable || bl.isCaptain0) return Infinity;
    if (bl.isCaptain && !allowCaptain) return Infinity;
    const bt = battle(enemyOf(b), st.atk, st.def); return bt.ok ? bt.damage : Infinity;
  }
  if (bl.doorType === 'hidden') return 0;
  if (bl.doorType === 'special') return Infinity;
  if (keyMode === 'none') return Infinity;
  return keyMode === 'pen' ? PEN[bl.doorType] : 0;
}
function dijkstra(st, targets, keyMode, allowCaptain, forbid) {
  rebuild(st); const r = root(st), par = st.par;
  const dist = new Float64Array(NODES).fill(Infinity), prev = new Int32Array(NODES).fill(-1), done = new Uint8Array(NODES);
  const heap = []; const push = (d, n) => { heap.push([d, n]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { let l = 2 * i + 1, rr = l + 1, m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (rr < heap.length && heap[rr][0] < heap[m][0]) m = rr; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  for (let n = 0; n < NODES; n++) if (find(par, n) === r) { dist[n] = 0; push(0, n); }
  let hit = -1;
  while (heap.length) {
    const [d, u] = pop(); if (done[u]) continue; done[u] = 1;
    if (targets.has(u)) { hit = u; break; }
    const relax = (v, w) => { if (w === Infinity) return; const nd = d + w; if (nd < dist[v]) { dist[v] = nd; prev[v] = u; push(nd, v); } };
    if (u < nComp) { for (const b of compAdj[u]) relax(nComp + b, blockerCost(st, b, keyMode, allowCaptain, forbid)); }
    else { const bl = blockers[u - nComp]; for (const c of bl.compNb) relax(c, 0); for (const nb of bl.blkNb) relax(nComp + nb, blockerCost(st, nb, keyMode, allowCaptain, forbid)); }
  }
  dijkstra.lastDist = dist; dijkstra.lastPrev = prev;
  if (hit < 0) return null;
  const path = []; for (let n = hit; n >= 0; n = prev[n]) { if (n >= nComp && !resolvedNow(st, n - nComp)) path.push(n - nComp); }
  path.reverse();
  let dmg = 0; for (const b of path) if (blockers[b].kind === 'enemy') dmg += battle(enemyOf(b), st.atk, st.def).damage;
  return { path, dmg };
}
// 按路径逐个执行；stopOnStat：捡到属性道具就停
function applyPath(st, path, stopOnStat, steps) {
  const atk0 = st.atk, def0 = st.def;
  for (const b of path) {
    if (resolvedNow(st, b)) continue;
    rebuild(st); const fr = frontier(st, root(st));
    if (fr.indexOf(b) < 0) { applyPath.failed = b; return false; }
    const bl = blockers[b];
    if (bl.kind === 'enemy') { const bt = battle(enemyOf(b), st.atk, st.def); if (!bt.ok || bt.damage >= st.hp) { applyPath.failed = b; return false; } applyAction(st, { type: 'kill', b, dmg: bt.damage }, null); steps.push({ b, label: bl.enemyId, floor: bl.floor, x: bl.x, y: bl.y, dmg: bt.damage }); }
    else { if (keyOf(st, bl.doorType) <= 0) { applyPath.failed = b; return false; } applyAction(st, { type: 'open', b }, null); steps.push({ b, label: bl.doorType + 'Door', floor: bl.floor, x: bl.x, y: bl.y, dmg: 0 }); }
    closure(st, null); Object.assign(steps[steps.length - 1], { hpAfter: st.hp, atk: st.atk, def: st.def, yk: st.yk, bk: st.bk, rk: st.rk });
    if (stopOnStat && (st.atk !== atk0 || st.def !== def0)) return true;
  }
  return true;
}
const resKey = st => st.res.key() + ':' + st.flags;
// 规划并执行：失败就禁掉失败的阻挡物重新规划
// 带取钥匙的组合规划：路上某扇门缺钥匙 → 先去取该颜色最近的钥匙，再回来继续
let DBG = false; let blockedColors = new Set();
function routeToWithKeys(st, targets, keyMode, allowCaptain, stopOnStat, keyBudget) {
  let cur = cloneState(st); let steps = []; const forbid = new Set(); let fetches = 0;
  for (let tries = 0; tries < 14; tries++) {
    const d = dijkstra(cur, targets, keyMode, allowCaptain, forbid); if (!d) { if (DBG) console.log('    [规划无路] forbid=' + [...forbid].map(b => blockers[b].floor + '(' + blockers[b].x + ',' + blockers[b].y + ')').join(',')); return null; }
    const st2 = cloneState(cur); const stp = []; applyPath.failed = null;
    if (applyPath(st2, d.path, stopOnStat, stp)) return { st: st2, steps: steps.concat(stp), path: d.path, fetches };
    const fb = applyPath.failed; cur = st2; steps = steps.concat(stp);
    if (DBG) console.log(`    [执行失败] 在 ${fb != null ? blockers[fb].floor + '(' + blockers[fb].x + ',' + blockers[fb].y + ')' + (blockers[fb].enemyId || blockers[fb].doorType) : '?'}，当前 hp ${cur.hp} 钥匙 ${cur.yk}/${cur.bk}，已走 ${steps.length} 步`);
    if (fb == null) return null;
    const bl = blockers[fb];
    if (bl.kind === 'door' && keyOf(cur, bl.doorType) <= 0) blockedColors.add(bl.doorType);
    if (bl.kind === 'door' && keyOf(cur, bl.doorType) <= 0 && fetches < keyBudget) {
      const color = bl.doorType; let best = null;
      for (const km of ['none', 'pen']) {
        for (const it of items) {
          if (it.cond || cur.col.get(it.idx)) continue;
          const give = color === 'yellow' ? it.yk : color === 'blue' ? it.bk : it.rk; if (!give) continue;
          const dk = dijkstra(cur, new Set([compOf[it.cell]]), km, false, null);
          if (dk && dk.dmg < cur.hp && (!best || dk.dmg < best.d.dmg)) best = { it, d: dk };
        }
        if (best) break;
      }
      if (!best) { if (DBG) console.log('    [无可取钥匙] 颜色 ' + color); return null; }
      if (DBG) console.log(`    [取钥匙] ${best.it.id}@${best.it.floor}(${best.it.x},${best.it.y}) 代价 ${best.d.dmg}`);
      const st3 = cloneState(cur); const stp3 = []; applyPath.failed = null;
      if (!applyPath(st3, best.d.path, false, stp3)) { if (DBG) console.log('    [取钥匙执行失败]'); return null; }
      if (keyOf(st3, color) <= 0) { if (DBG) console.log('    [取了钥匙仍为0]'); return null; } // 取了还是没有（钥匙被路上的门抵消）
      cur = st3; steps = steps.concat(stp3); fetches++; continue;
    }
    forbid.add(fb);
  }
  return null;
}
function routeTo(st, targets, keyMode, allowCaptain, stopOnStat) {
  const forbid = new Set();
  for (let tries = 0; tries < 5; tries++) {
    const d = dijkstra(st, targets, keyMode, allowCaptain, forbid); if (!d) return null;
    const st2 = cloneState(st); const steps = [];
    if (applyPath(st2, d.path, stopOnStat, steps)) return { st: st2, steps, path: d.path };
    if (applyPath.failed == null) return null;
    forbid.add(applyPath.failed); applyPath.failed = null;
  }
  return null;
}
// ---------- 带钥匙资源约束的最短路：状态 =（节点，黄钥匙数，蓝钥匙数），门消耗钥匙、进入新区域得到钥匙 ----------
const KCAP = 9, BCAP = 3;
const itemsOfComp = Array.from({ length: nComp }, () => []);
for (const it of items) itemsOfComp[compOf[it.cell]].push(it);
const DOOR_EPS = { yellow: 0.5, blue: 3, red: 0 };
// 预计算"绕路"：从区域 u 沿一条没有分叉、最终是死胡同的阻挡物链（门/怪可直接相邻）进去收钥匙再原路返回。
// 只登记确认为死胡同的链（含其每个前缀），这样主路径不可能再进这些区域，钥匙不会重复计数。
const compHasKey = new Uint8Array(nComp); for (const it of items) if (!it.cond && (it.yk || it.bk)) compHasKey[compOf[it.cell]] = 1;
const pocketsOf = Array.from({ length: nComp }, () => []);
for (let u = 0; u < nComp; u++) for (const b0 of compAdj[u]) {
  const chain = [b0], enter = [-1]; const tentative = []; let fromComp = u, fromBlk = -1, b = b0, ok = false;
  for (let step = 0; step < 5; step++) {
    const bl = blockers[b];
    const cc = bl.compNb.filter(c => c !== fromComp), bb = bl.blkNb.filter(x => x !== fromBlk);
    if (cc.length + bb.length !== 1) break;
    if (cc.length) { const c = cc[0]; enter[enter.length - 1] = c;
      if (compHasKey[c]) tentative.push({ chain: chain.slice(), enter: enter.slice() });
      const exits = compAdj[c].filter(x => x !== b);
      if (!exits.length) { ok = true; break; }
      if (exits.length !== 1) break;
      fromComp = c; fromBlk = -1; b = exits[0]; chain.push(b); enter.push(-1);
    } else { const nb = bb[0]; fromBlk = b; fromComp = -1; b = nb; chain.push(b); enter.push(-1); }
  }
  if (ok) for (const pk of tentative) pocketsOf[u].push(pk);
}
const pocketList = []; for (let u = 0; u < nComp; u++) for (const pk of pocketsOf[u]) { pk.id = pocketList.length; pocketList.push(pk); }
function dijkstraKeysAll(st, allowCaptain, forbid) {
  rebuild(st); const r = root(st), par = st.par;
  const gainY = new Int8Array(nComp), gainB = new Int8Array(nComp);
  for (let c = 0; c < nComp; c++) { if (find(par, c) === r) continue; let y = 0, b = 0; for (const it of itemsOfComp[c]) { if (it.cond || st.col.get(it.idx)) continue; y += it.yk; b += it.bk; } gainY[c] = y; gainB[c] = b; }
  const Y = KCAP + 1, B = BCAP + 1, NS = NODES * Y * B;
  const sid = (n, y, b) => (n * Y + y) * B + b;
  const dist = new Float64Array(NS).fill(Infinity), prev = new Int32Array(NS).fill(-1), done = new Uint8Array(NS), via = new Int32Array(NS).fill(-1);
  let hd = new Float64Array(1 << 16), hn = new Int32Array(1 << 16), hl = 0;
  const push = (d, n) => { if (hl === hd.length) { const d2 = new Float64Array(hl * 2); d2.set(hd); hd = d2; const n2 = new Int32Array(hl * 2); n2.set(hn); hn = n2; } let i = hl++; while (i > 0) { const p = (i - 1) >> 1; if (hd[p] <= d) break; hd[i] = hd[p]; hn[i] = hn[p]; i = p; } hd[i] = d; hn[i] = n; };
  const pop = () => { const td = hd[0], tn = hn[0]; hl--; if (hl > 0) { const d = hd[hl], n = hn[hl]; let i = 0; for (;;) { let l = 2 * i + 1; if (l >= hl) break; let m = l; if (l + 1 < hl && hd[l + 1] < hd[l]) m = l + 1; if (hd[m] >= d) break; hd[i] = hd[m]; hn[i] = hn[m]; i = m; } hd[i] = d; hn[i] = n; } return [td, tn]; };
  const y0 = Math.min(st.yk, KCAP), b0 = Math.min(st.bk, BCAP);
  for (let n = 0; n < NODES; n++) if (find(par, n) === r) { const s0 = sid(n, y0, b0); dist[s0] = 0; push(0, s0); }
  const ecost = new Float64Array(nB); // 本状态下每个阻挡物的代价（-1 不可过）
  for (let b = 0; b < nB; b++) { const bl = blockers[b]; let c = -1;
    if (forbid && forbid.has(b)) c = -1; else if (resolvedNow(st, b)) c = 0; else if (bl.kind === 'npc') c = -1;
    else if (bl.kind === 'enemy') { if (!bl.fightable || bl.isCaptain0 || (bl.isCaptain && !allowCaptain)) c = -1; else { const bt = battle(enemyOf(b), st.atk, st.def); c = bt.ok ? bt.damage : -1; } }
    else if (bl.doorType === 'hidden') c = 0; else if (bl.doorType === 'special') c = -1; else if (bl.doorType === 'yellow') c = DOOR_EPS.yellow; else if (bl.doorType === 'blue') c = DOOR_EPS.blue; else if (bl.doorType === 'red') c = st.rk > 0 ? 0 : -1;
    ecost[b] = c; }
  let CY = 0, CB = 0;
  const cross = (b, y, bb) => { // 过阻挡物 b：返回代价（<0 不可过），钥匙结果写到 CY/CB
    const c = ecost[b]; if (c < 0) return -1; CY = y; CB = bb;
    if (resolvedNow(st, b)) return 0;
    const dt = blockers[b].doorType; if (dt === 'yellow') { if (y <= 0) return -1; CY = y - 1; } else if (dt === 'blue') { if (bb <= 0) return -1; CB = bb - 1; }
    return c;
  };
  while (hl > 0) {
    const [d, s0] = pop(); if (done[s0]) continue; done[s0] = 1;
    const n = Math.floor(s0 / (Y * B)), y = Math.floor(s0 / B) % Y, bb = s0 % B;
    const relax = (s2, w) => { const nd = d + w; if (nd < dist[s2]) { dist[s2] = nd; prev[s2] = s0; via[s2] = -1; push(nd, s2); } };
    const ps = prev[s0]; const pn = ps >= 0 ? Math.floor(ps / (Y * B)) : -1; // 上一个节点
    if (n < nComp) { for (const b of compAdj[n]) { if (nComp + b === pn) continue; const c = cross(b, y, bb); if (c >= 0) relax(sid(nComp + b, CY, CB), c); }
      for (const pk of pocketsOf[n]) { // 绕路：进去收钥匙再原路出来，只计一次代价
        if (nComp + pk.chain[0] === pn) continue;
        if (find(par, pk.enter[pk.enter.length - 1]) === r) continue;
        let y2 = y, b2 = bb, cost = 0, bad = false;
        for (let i = 0; i < pk.chain.length; i++) { const c = cross(pk.chain[i], y2, b2); if (c < 0) { bad = true; break; } cost += c; y2 = CY; b2 = CB; const cc = pk.enter[i]; if (cc >= 0) { y2 = Math.min(KCAP, y2 + gainY[cc]); b2 = Math.min(BCAP, b2 + gainB[cc]); } }
        if (!bad && (y2 > y || b2 > bb)) { const s2 = sid(n, y2, b2); const nd = d + cost; if (nd < dist[s2]) { dist[s2] = nd; prev[s2] = s0; via[s2] = pk.id; push(nd, s2); } }
      } }
    else { const bl = blockers[n - nComp];
      for (const c of bl.compNb) { if (c === pn) continue; relax(sid(c, Math.min(KCAP, y + gainY[c]), Math.min(BCAP, bb + gainB[c])), 0); }
      for (const nb of bl.blkNb) { if (nComp + nb === pn) continue; const c = cross(nb, y, bb); if (c >= 0) relax(sid(nComp + nb, CY, CB), c); } }
  }
  return { dist, prev, via, Y, B };
}
// 到目标集合中最省血的（节点，钥匙）状态，回溯路径
function dijkstraKeys(st, targets, allowCaptain, forbid) {
  let all; if (!forbid && st._rcsp && st._rcsp.cap === allowCaptain) all = st._rcsp; else { all = dijkstraKeysAll(st, allowCaptain, forbid); all.cap = allowCaptain; if (!forbid) st._rcsp = all; }
  const { dist, prev, via, Y, B } = all; let hit = -1, bd = Infinity;
  for (const n of targets) for (let y = 0; y < Y; y++) for (let b = 0; b < B; b++) { const s2 = (n * Y + y) * B + b; if (dist[s2] < bd) { bd = dist[s2]; hit = s2; } }
  if (hit < 0) return null;
  const raw = []; for (let s2 = hit; s2 >= 0; s2 = prev[s2]) { if (via[s2] >= 0) { const ch = pocketList[via[s2]].chain; for (let i = ch.length - 1; i >= 0; i--) if (!resolvedNow(st, ch[i])) raw.push(ch[i]); continue; } const n = Math.floor(s2 / (Y * B)); if (n >= nComp && !resolvedNow(st, n - nComp)) raw.push(n - nComp); }
  raw.reverse(); const seen = new Set(); const path = []; for (const b of raw) if (!seen.has(b)) { seen.add(b); path.push(b); }
  let dmg = 0; for (const b of path) if (blockers[b].kind === 'enemy') dmg += battle(enemyOf(b), st.atk, st.def).damage;
  return { path, dmg };
}
// 规划→执行；执行失败（钥匙被实际情况打乱 / 血不够）就从已走到的状态重新规划
function routeToKeys(st, targets, allowCaptain, stopOnStat) {
  let cur = cloneState(st); let steps = []; const forbid = new Set(); let lastFail = -1;
  for (let tries = 0; tries < 8; tries++) {
    const d = dijkstraKeys(tries === 0 ? st : cur, targets, allowCaptain, forbid.size ? forbid : null); if (!d) return null;
    const st2 = cloneState(cur); const stp = []; applyPath.failed = null;
    if (applyPath(st2, d.path, stopOnStat, stp)) return { st: st2, steps: steps.concat(stp), path: d.path };
    const fb = applyPath.failed; if (fb == null) return null;
    cur = st2; steps = steps.concat(stp);
    if (blockers[fb].kind === 'enemy' || fb === lastFail) forbid.add(fb);
    lastFail = fb;
  }
  return null;
}
function keyBatch(st, maxPerKey, maxRounds) {
  let cur = cloneState(st); let steps = []; let got = 0;
  for (let round = 0; round < (maxRounds || 8); round++) {
    let bestK = null; const cand = [];
    for (const km of ['none', 'free']) {
      dijkstra(cur, new Set(), km, false, null); const dist = dijkstra.lastDist, prev = dijkstra.lastPrev;
      const seenComp = new Set();
      for (const it of items) { if (it.cond || cur.col.get(it.idx) || !(it.yk || it.bk)) continue; const c = compOf[it.cell]; if (seenComp.has(c)) continue; seenComp.add(c);
        const dd = dist[c]; if (!(dd < Infinity) || dd === 0 || dd >= cur.hp) continue;
        const path = []; for (let n = c; n >= 0; n = prev[n]) if (n >= nComp && !resolvedNow(cur, n - nComp)) path.push(n - nComp); path.reverse();
        let doors = 0, dmg = 0; for (const b of path) { const bl = blockers[b]; if (bl.kind === 'door' && bl.doorType !== 'hidden') doors += bl.doorType === 'blue' ? 2 : 1; else if (bl.kind === 'enemy') dmg += battle(enemyOf(b), cur.atk, cur.def).damage; }
        let gain = 0; for (const x of itemsOfComp[c]) if (!x.cond && !cur.col.get(x.idx)) gain += x.yk + 2 * x.bk;
        const net = gain - doors; if (net <= 0) continue; const per = dmg / net; if (per > maxPerKey) continue;
        cand.push({ per, net, path, dmg }); }
    }
    cand.sort((a, b) => a.per - b.per || b.net - a.net);
    for (const cd of cand.slice(0, 4)) {
      const t = cloneState(cur); const stp = []; applyPath.failed = null; if (!applyPath(t, cd.path, false, stp)) continue;
      if (t.atk !== cur.atk || t.def !== cur.def) continue; // 顺路拿到属性道具的交给属性宏
      const net = (t.yk - cur.yk) + 2 * (t.bk - cur.bk); if (net <= 0) continue;
      const per = cd.dmg / net; if (per > maxPerKey) continue;
      if (!bestK || per < bestK.per || (per === bestK.per && net > bestK.net)) bestK = { per, net, t, stp };
    }
    if (!bestK) break;
    cur = bestK.t; steps = steps.concat(bestK.stp); got += bestK.net;
  }
  return got ? { st: cur, steps, got } : null;
}
function statMacro(st, it, keyMode, rush) {
  const tg = new Set([compOf[it.cell]]);
  const r = keyMode === 'rcsp' ? routeToKeys(st, tg, false, !rush) : routeToWithKeys(st, tg, keyMode, false, !rush, rush ? 12 : 3); if (!r) return null;
  const st2 = r.st, steps = r.steps;
  const got = statItems.filter(x => st2.col.get(x.idx) && !st.col.get(x.idx)).map(x => x.id);
  if (!got.length) return null;
  return { st: st2, steps, label: (rush ? '直奔 ' + it.id + '：' : '') + (keyMode === 'rcsp' ? '钥匙规划→' : '') + (r.fetches ? '取钥匙×' + r.fetches + '→' : '') + '拿 ' + got.join('+') + (!rush && it.id !== got[0] ? '（目标 ' + it.id + '）' : ''), target: it.idx, kind: 'stat' };
}
function resMacro(st, it, keyMode) {
  const r = routeTo(st, new Set([compOf[it.cell]]), keyMode || 'none', false, false); if (!r || !r.path.length) return null;
  const st2 = r.st, steps = r.steps;
  if (st2.col.count() === st.col.count()) return null;
  if (st2.hp <= st.hp && st2.yk <= st.yk && st2.bk <= st.bk && st2.rk <= st.rk) return null; // 净亏血又不给钥匙：无意义
  const hasDoor = r.path.some(b => blockers[b].kind === 'door' && blockers[b].doorType !== 'hidden');
  return { st: st2, steps, label: '取资源 ' + it.id + '@' + it.floor + '(' + it.x + ',' + it.y + ')', kind: 'res', hasDoor };
}
function captainMacro(st) {
  if (!statsComplete(st)) return null; // 约束：队长只在 30/30 时打
  let st2 = cloneState(st); let steps = [];
  const go = (targets, allowCap) => { const r = routeToWithKeys(st2, targets, 'free', allowCap, false, 2); if (!r) return false; st2 = r.st; steps = steps.concat(r.steps); return true; };
  if (!(st2.flags & TRIG)) {
    if (!go(new Set([trigComp]), false)) return null;
    applyAction(st2, { type: 'trigger' }, null); closure(st2, null); steps.push({ label: '踩(6,7)触发', floor: 'floor_10', x: 6, y: 7, dmg: 0, hpAfter: st2.hp });
  }
  for (const e of arenaGroup.enemies) { if (resolvedNow(st2, e)) continue; if (!go(new Set([nComp + e]), false)) return null; }
  if (!go(new Set([nComp + captain]), true)) return null;
  if (!(st2.flags & CAPDEAD)) return null;
  // 队长死亡瞬间的血：上一步收完后的血 − 队长伤害（不含死后自动收的东西）
  const ci = steps.length - 1; const hpAtKill = (ci > 0 ? steps[ci - 1].hpAfter : st.hp) - steps[ci].dmg;
  closure(st2, null);
  return { st: st2, steps, label: '终结：骷髅队长', kind: 'captain', hpAtKill };
}
const statsComplete = st => statItems.every(it => st.col.get(it.idx));
// 终局变体：守卫前收血瓶时钥匙按 keyValue 计价（守卫门还要钥匙），守卫后钥匙不值钱
function endgameVariant(st, keyValue, guardsFirst) {
  let st2 = cloneState(st); let steps = []; let labels = [];
  const collect = kv => { for (let k = 0; k < 60; k++) { let bestR = null;
      for (const it of resItems) { if (!it.hp || st2.col.get(it.idx)) continue; const m = resMacro(st2, it, 'free'); if (!m) continue;
        const gain = m.st.hp - st2.hp + kv * (m.st.yk - st2.yk) + 2 * kv * (m.st.bk - st2.bk); if (gain <= 0) continue;
        if (!bestR || gain > bestR.gain) bestR = { m, gain }; }
      if (!bestR) break; st2 = bestR.m.st; steps = steps.concat(bestR.m.steps); labels.push(bestR.m.label.replace('取资源 ', '')); } };
  const gev = eventList.find(e => guardGroup && e.needDead === guardGroup.enemies);
  const guards = () => { if (!gev) return true; const m = eventMacro(st2, gev); if (!m) return !gev.needDead.some(e => !resolvedNow(st2, e)); st2 = m.st; steps = steps.concat(m.steps); labels.push(m.label); return true; };
  if (guardsFirst) { if (!guards()) return null; collect(0); } else { collect(keyValue); if (!guards()) return null; collect(0); }
  const cap = captainMacro(st2); if (!cap) return null;
  steps = steps.concat(cap.steps);
  return { st: cap.st, steps, label: '终局(' + (guardsFirst ? '守卫先' : '钥匙价' + keyValue) + ')：收血瓶(' + labels.length + ')→队长', kind: 'captain', hpAtKill: cap.hpAtKill };
}
function endgameMacro(st) {
  if (!statsComplete(st)) return null;
  let bestE = null;
  for (const [kv, gf] of [[60, false], [30, false], [120, false], [0, false], [0, true]]) { const m = endgameVariant(st, kv, gf); if (m && (!bestE || m.hpAtKill > bestE.hpAtKill)) bestE = m; }
  return bestE;
}
const guardGroup = groups.find(g => g.name.indexOf('floor_9') >= 0);
const eventList = groups.filter(g => g !== arenaGroup).map(g => ({ name: g.name, needDead: g.enemies, opens: g.opens, flag: 0 })).concat(world.npcTalks.filter(t => t.needDead.length).map(t => ({ name: t.name, needDead: t.needDead, opens: t.opens, flag: t.flag })));
function eventMacro(st, ev) {
  if (ev.needDead.every(e => resolvedNow(st, e))) return null;
  if (ev.flag && (st.flags & ev.flag)) return null;
  if (ev.opens.length && ev.opens.every(d => st.res.get(d))) return null; // 门已经开了（如老人开门）
  if (guardGroup && ev.needDead === guardGroup.enemies && !statsComplete(st)) return null; // 约束：守卫只在 30/30 时打
  let st2 = cloneState(st); let steps = [];
  for (const e of ev.needDead) { if (resolvedNow(st2, e)) continue; const r = routeToWithKeys(st2, new Set([nComp + e]), 'free', false, false, 2); if (!r) return null; st2 = r.st; steps = steps.concat(r.steps); }
  closure(st2, null);
  return { st: st2, steps, label: '事件：' + ev.name, kind: 'event', ev };
}
// ---------- 候选生成 ----------
const PROF = { stat: 0, rush: 0, kb: 0, ev: 0, ex: 0, n: 0 };
function candidates(st) {
  const out = []; const seen = new Set(); blockedColors = new Set(); let tp = Date.now(); PROF.n++;
  const add = m => { if (!m) return; const k = resKey(m.st) + '#' + m.st.hp; if (seen.has(k)) return; seen.add(k); out.push(m); };
  const batches = { 12: keyBatch(st, 12), 30: keyBatch(st, 30) }; PROF.kb += Date.now() - tp; tp = Date.now();
  for (const it of statItems) { if (st.col.get(it.idx)) continue; for (const km of ['free', 'none', 'rcsp']) add(statMacro(st, it, km));
    if (/sword|shield/.test(it.id)) { add(statMacro(st, it, 'rcsp', true));
      for (const thr of [12, 30]) { const kb = batches[thr]; if (!kb) continue; const m = statMacro(kb.st, it, 'rcsp', true); if (!m) continue; m.steps = kb.steps.concat(m.steps); m.label = '收钥匙(≤' + thr + '/把,+' + kb.got + ')→' + m.label; add(m); } } }
  for (const thr of [12, 30]) { const kb = batches[thr]; if (kb) add({ st: kb.st, steps: kb.steps, label: '收钥匙批(≤' + thr + '/把,+' + kb.got + ')', kind: 'key' }); }
  PROF.stat += Date.now() - tp; tp = Date.now();
  if (statsComplete(st)) { const eg = endgameMacro(st); PROF.ev += Date.now() - tp; return eg ? [eg] : []; }
  for (const ev of eventList) add(eventMacro(st, ev));
  const cap = captainMacro(st); if (cap) out.push(cap); PROF.ev += Date.now() - tp; tp = Date.now();
  const anyStruct = out.length > 0;
  if (!anyStruct) for (const it of resItems) { if (st.col.get(it.idx)) continue; add(resMacro(st, it, 'none')); add(resMacro(st, it, 'pen')); }
  else if (blockedColors.size) for (const it of resItems) { // 有属性宏因缺钥匙失败：该色钥匙房进候选，由外层决定收哪些
    if (st.col.get(it.idx)) continue;
    const gives = (blockedColors.has('yellow') && it.yk) || (blockedColors.has('blue') && it.bk) || (blockedColors.has('red') && it.rk);
    if (!gives) continue; const m = resMacro(st, it, 'none'); if (m) { m.label = '收钥匙 ' + it.id + '@' + it.floor + '(' + it.x + ',' + it.y + ')'; m.kind = 'key'; add(m); }
  }
  // 成对交换剪枝
  if (EXCHANGE) {
    for (const m of out) m.score = scoreMacro(st, m);
    const stats = out.filter(m => m.kind === 'stat').sort((a, b) => b.score - a.score).slice(0, 8);
    const dominated = new Set();
    const subset = (a, b) => { for (let i = 0; i < a.w.length; i++) if ((a.w[i] & ~b.w[i]) >>> 0) return false; return true; };
    // A 支配 B：A 做的事是 B 的子集（少做的以后做只会更便宜）、标志相同、血和钥匙都不少
    const better = (A, B) => A.st.flags === B.st.flags && subset(A.st.res, B.st.res) && A.st.hp >= B.st.hp && A.st.yk >= B.st.yk && A.st.bk >= B.st.bk && A.st.rk >= B.st.rk;
    // 1) 属性宏 X 对 属性宏 Y：按血量降序逐个考察，只和已保住的比，保证至少留一个、不出环
    const order = stats.slice().sort((a, b) => b.st.hp - a.st.hp);
    const kept = [];
    for (const X of order) {
      let dom = false;
      for (const Y of kept) {
        if (X.target === Y.target) continue;
        const itX = statItems.find(i => i.idx === X.target), itY = statItems.find(i => i.idx === Y.target);
        const YX = statMacro(Y.st, itX, 'free') || statMacro(Y.st, itX, 'rcsp'), XY = statMacro(X.st, itY, 'free') || statMacro(X.st, itY, 'rcsp');
        if (!YX || !XY) continue;
        if (better(YX, XY)) { dom = true; break; }
      }
      if (dom) dominated.add(X); else kept.push(X);
    }
    // 2) 事件宏 E（守卫组/小偷）对 属性宏 Y：先拿 Y 再做 E 不差 → 现在做 E 被支配
    for (const E of out.filter(m => m.kind === 'event')) {
      for (const Y of kept) {
        const itY = statItems.find(i => i.idx === Y.target);
        const YE = eventMacro(Y.st, E.ev), EY = statMacro(E.st, itY, 'free') || statMacro(E.st, itY, 'rcsp');
        if (!YE || !EY) continue;
        if (better(YE, EY)) { dominated.add(E); break; }
      }
    }
    // 3) 终结宏 对 属性宏 Y：先拿 Y 再打队长剩血不少 → 现在打队长被支配
    for (const C of out.filter(m => m.kind === 'captain')) {
      for (const Y of kept) {
        const YC = captainMacro(Y.st);
        if (YC && YC.hpAtKill >= C.hpAtKill) { dominated.add(C); break; }
      }
    }
    PROF.ex += Date.now() - tp;
    return out.filter(m => !dominated.has(m));
  }
  return out;
}
// 更紧的上界：hp + 未拿血瓶 − (必经怪 ∪ 守着未拿属性道具的怪) 在 30/30 下的代价
const cutoffItems = I.cutoffItems; const mandSet = new Set(S.mandatory);
const guardsOfStat = new Map(); // 阻挡物 b -> 它独占截断的属性道具 idx 列表
for (let b = 0; b < nB; b++) { const c = cutoffItems[b]; if (!c) continue; const si = c.filter(i => items[i] && (items[i].atk || items[i].def) && !items[i].cond); if (si.length) guardsOfStat.set(b, si); }
const cost30 = new Float64Array(nB); for (let b = 0; b < nB; b++) { const bl = blockers[b]; cost30[b] = (bl.kind === 'enemy' && bl.fightable) ? (battle(enemyOf(b), 30, 30).ok ? battle(enemyOf(b), 30, 30).damage : 1e6) : 0; }
function keysFeasible(st) {
  const need = { yellow: 0, blue: 0, red: 0 }, avail = { yellow: st.yk, blue: st.bk, red: st.rk };
  for (const it of items) if (!st.col.get(it.idx) && !it.cond) { avail.yellow += it.yk; avail.blue += it.bk; avail.red += it.rk; }
  for (let b = 0; b < nB; b++) {
    const bl = blockers[b]; if (bl.kind !== 'door' || st.res.get(b) || need[bl.doorType] == null) continue;
    let req = mandSet.has(b); if (!req) { const si = guardsOfStat.get(b); if (si && si.some(i => !st.col.get(i))) req = true; }
    if (req) need[bl.doorType]++;
  }
  return need.yellow <= avail.yellow && need.blue <= avail.blue && need.red <= avail.red;
}
function upperBound2(st) {
  if (!keysFeasible(st)) return -Infinity;
  let hp = st.hp;
  for (const it of items) if (!st.col.get(it.idx) && it.hp && !it.cond) hp += it.hp;
  let cost = 0;
  for (let b = 0; b < nB; b++) {
    if (resolvedNow(st, b) || blockers[b].kind !== 'enemy') continue;
    let need = mandSet.has(b);
    if (!need) { const si = guardsOfStat.get(b); if (si && si.some(i => !st.col.get(i))) need = true; }
    if (need) cost += cost30[b];
  }
  return hp - cost;
}
// ---------- 外层 DFS ----------
const memo = new Map(); const T0 = Date.now(); const deadline = T0 + SECS * 1000;
let best = { hp: INCUMBENT, route: null }, nodes = 0, pruneB = 0, pruneM = 0, timedOut = false, maxDepth = 0;
const t = () => ((Date.now() - T0) / 1000).toFixed(1) + 's';
const ATK_TH = [21, 23, 26, 27, 30], DEF_TH = [22, 24, 30];
const nextTh = (v, th) => { for (const t of th) if (t > v) return t; return v; };
const CAPV = 600; const vcost = x => x.ok ? Math.min(x.damage, CAPV) : CAPV;
// 当前状态下"必打怪"集合：必经 + 守着未拿属性道具的怪
function requiredEnemies(st) {
  const out = [];
  for (let b = 0; b < nB; b++) { const bl = blockers[b]; if (resolvedNow(st, b) || bl.kind !== 'enemy' || !bl.fightable || bl.isCaptain0) continue;
    let need = mandSet.has(b); if (!need) { const si = guardsOfStat.get(b); if (si && si.some(i => !st.col.get(i))) need = true; } if (need) out.push(b); }
  return out;
}
// 净收益：属性提升在必打怪上立刻省的血 − 这一步战斗相对"下一临界点属性"的溢价
function netBenefit(st, s) {
  const req = requiredEnemies(st); let save = 0;
  if (s.st.atk !== st.atk || s.st.def !== st.def) for (const b of req) { if (resolvedNow(s.st, b)) continue; const e = enemyOf(b); save += Math.max(0, vcost(battle(e, st.atk, st.def)) - vcost(battle(e, s.st.atk, s.st.def))); }
  const aN = nextTh(st.atk, ATK_TH), dN = nextTh(st.def, DEF_TH); let prem = 0;
  for (const x of s.steps) if (x.dmg > 0 && x.b != null) { const e = enemyOf(x.b); const later = battle(e, aN, dN); prem += x.dmg - (later.ok ? Math.min(later.damage, x.dmg) : x.dmg); }
  return save - prem;
}
function statValue(st) { return [0, 0]; }
// "下一个里程碑之前的必打怪"：把门当免费、按当前属性损血 ≤ NEAR 能到的必打怪
function nearRequired(st) {
  const req = requiredEnemies(st); if (!req.length) return [];
  dijkstra(st, new Set(), 'free', false, null); const dist = dijkstra.lastDist;
  return req.filter(b => dist[nComp + b] <= NEAR);
}
function netBenefit2(st, s) {
  let save = 0;
  if (s.st.atk !== st.atk || s.st.def !== st.def) for (const b of nearRequired(st)) { if (resolvedNow(s.st, b)) continue; const e = enemyOf(b); save += Math.max(0, vcost(battle(e, st.atk, st.def)) - vcost(battle(e, s.st.atk, s.st.def))); }
  const aN = nextTh(st.atk, ATK_TH), dN = nextTh(st.def, DEF_TH); let prem = 0;
  for (const x of s.steps) if (x.dmg > 0 && x.b != null) { const e = enemyOf(x.b); const later = battle(e, aN, dN); prem += x.dmg - (later.ok ? Math.min(later.damage, x.dmg) : x.dmg); }
  return save - prem;
}
// 候选分：−这一步损血 + 近期必打怪省血 − 溢价；血瓶和零代价钥匙不计分
function scoreMacro(st, s) {
  if (s.kind === 'captain') return Infinity;
  const dmg = s.steps.reduce((a, x) => a + x.dmg, 0);
  let sc = -dmg + netBenefit2(st, s);
  if (s.kind === 'res') sc -= 1e6;
  return sc;
}
const stack = []; const prefixRoute = [];
const TRACE = +arg('--trace', '0'); let traced = 0;
const TRACE_BEST = process.argv.includes('--trace-best'); let bestProg = { n: -1, hp: -1, stack: null, st: null };
const nStat = st => statItems.reduce((a, it) => a + (st.col.get(it.idx) ? 1 : 0), 0);
function dumpStack(reason, st) {
  console.log(`\n--- 路线样本 ${++traced}（${reason}，深度 ${stack.length}，当前 hp ${st.hp} 攻/防 ${st.atk}/${st.def} 钥匙 ${st.yk}/${st.bk}/${st.rk}）---`);
  for (const m of stack) { const d = m.steps.reduce((a, x) => a + x.dmg, 0); const last = m.steps[m.steps.length - 1]; console.log(`  ${m.label.padEnd(34)} 损血 ${String(d).padStart(4)} -> hp ${last ? last.hpAfter : '?'}   [${m.steps.filter(x => x.dmg > 0 || /Door/.test(x.label)).map(x => x.floor.replace('floor_', '') + 'F(' + x.x + ',' + x.y + ')' + (/Door/.test(x.label) ? '门' : x.label + '-' + x.dmg)).join(' ')}]`); }
  if (traced >= TRACE) { console.log('\n（trace 结束）'); process.exit(0); }
}
function dfs(st, depth) {
  if (timedOut) return; if (Date.now() > deadline) { timedOut = true; return; }
  const k = resKey(st); const m = memo.get(k); if (m != null && m >= st.hp) { pruneM++; return; } memo.set(k, st.hp);
  const ub = Math.min(upperBound(st), upperBound2(st)); if (ub < 1 || ub <= best.hp) { pruneB++; if (TRACE && depth >= 12) dumpStack('上界 ' + ub + ' < 1，被剪', st); return; }
  nodes++; if (depth > maxDepth) maxDepth = depth;
  if (TRACE_BEST) { const n = nStat(st); if (n > bestProg.n || (n === bestProg.n && st.hp > bestProg.hp)) bestProg = { n, hp: st.hp, stack: stack.map(x => x), st: cloneState(st) }; }
  if (nodes % 200 === 0) console.log(`  节点 ${nodes} memo ${memo.size} 最优 ${best.hp} 深度 ${depth} 上界剪 ${pruneB} 记忆剪 ${pruneM} 用时 ${t()}`);
  const succ = candidates(st);
  if (process.env.DBG_HP && st.hp === +process.env.DBG_HP) { console.log(`  [DBG] 展开 hp ${st.hp} [${st.atk}/${st.def}] 钥匙 ${st.yk}/${st.bk}/${st.rk} col ${st.col.count()} res ${st.res.count()} flags ${st.flags} 深度 ${depth} 候选: ` + succ.map(c => c.label + (c.hpAtKill != null ? ' 队长死时 ' + c.hpAtKill : ' hp ' + c.st.hp)).join(' | '));
    const gev = eventList.find(e => guardGroup && e.needDead === guardGroup.enemies); const em = eventMacro(st, gev); console.log('  [DBG] 守卫事件:', em ? 'ok hp ' + em.st.hp : 'null', '| 队长宏:', (() => { const c = captainMacro(em ? em.st : st); return c ? 'ok ' + c.hpAtKill : 'null'; })(), '| 变体:', ['gain', 'dmg'].map(o => [false, true].map(g => { const v = endgameVariant(st, o, g); return v ? v.hpAtKill : 'null'; }).join('/')).join(' '));
    DBG = true; const r = resMacro(st, resItems.find(i => i.floor === 'floor_6' && i.x === 1 && i.y === 10), 'free'); DBG = false; console.log('  [DBG] 6F(1,10) 蓝药宏:', r ? 'ok hp ' + r.st.hp : 'null'); }
  if (TRACE && !succ.length && depth >= 6) dumpStack('无可行动作，死路', st);
  const [vA, vD] = statValue(st);
  for (const s of succ) s.score = scoreMacro(st, s);
  succ.sort((a, b) => b.score - a.score);
  for (const s of succ) {
    if (timedOut) return;
    stack.push(s);
    if (s.kind === 'captain') { if (s.hpAtKill > best.hp) { best = { hp: s.hpAtKill, hpAfter: s.st.hp, atk: s.st.atk, def: s.st.def, keys: [s.st.yk, s.st.bk, s.st.rk], route: prefixRoute.concat(stack).map(x => ({ label: x.label, steps: x.steps })) }; console.log(`  新最优：队长死亡时 hp=${best.hp}（收完 ${best.hpAfter}，攻/防 ${best.atk}/${best.def}）节点 ${nodes} 用时 ${t()}`); } }
    else dfs(s.st, depth + 1);
    stack.pop();
  }
}
if (process.argv.includes('--debug-keys2')) {
  let st = S.initState(); closure(st, null);
  st = eventMacro(st, eventList.find(e => e.name.indexOf('小偷') >= 0)).st;
  st = statMacro(st, statItems.find(i => i.id === 'sword1'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'redJewel' && i.floor === 'floor_4'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'blueJewel' && i.floor === 'floor_4' && i.x === 5), 'free').st;
  console.log('起点：hp', st.hp, '攻/防', st.atk + '/' + st.def, '钥匙', st.yk + '/' + st.bk + '/' + st.rk);
  const sh = statItems.find(i => i.id === 'shield1');
  const PENS = [0, 60, 150, 400, 2000];
  for (const pen of PENS) {
    PEN.yellow = pen; PEN.blue = pen * 2; PEN.red = pen * 4;
    const d = dijkstra(st, new Set([compOf[sh.cell]]), pen === 0 ? 'free' : 'pen', false, null);
    if (!d) { console.log(`门罚分 ${pen}：规划无路`); continue; }
    const doors = d.path.filter(b => blockers[b].kind === 'door' && blockers[b].doorType === 'yellow').length, bdoors = d.path.filter(b => blockers[b].kind === 'door' && blockers[b].doorType === 'blue').length;
    const byFloor = {}; for (const b of d.path) { const bl = blockers[b]; const f = bl.floor.replace('floor_', '') + 'F'; byFloor[f] = byFloor[f] || []; byFloor[f].push(bl.kind === 'door' ? '门' : bl.enemyId + '-' + (battle(enemyOf(b), st.atk, st.def).damage)); }
    console.log(`门罚分 ${pen}：损血 ${d.dmg}，黄门 ${doors} 蓝门 ${bdoors}  | ` + Object.entries(byFloor).map(([f, a]) => f + ':' + a.join(',')).join('  '));
  }
  PEN.yellow = 60; PEN.blue = 120; PEN.red = 240;
  // 当前可达的黄钥匙房：每把钥匙的取得代价（不开门 / 允许开门）
  console.log('\n当前位置可取的黄钥匙（不开门能到的）:');
  const rows = [];
  for (const it of items) { if (it.cond || st.col.get(it.idx) || !it.yk) continue; const d = dijkstra(st, new Set([compOf[it.cell]]), 'none', false, null); if (!d) continue; rows.push({ it, d }); }
  rows.sort((a, b) => a.d.dmg - b.d.dmg);
  for (const r of rows) console.log(`  ${r.it.floor.replace('floor_', '')}F(${r.it.x},${r.it.y}) 损血 ${r.d.dmg}  [${r.d.path.map(b => blockers[b].enemyId || blockers[b].doorType).join(' ')}]`);
  process.exit(0);
}
if (process.argv.includes('--debug-keys')) {
  let st = S.initState(); closure(st, null);
  st = eventMacro(st, eventList.find(e => e.name.indexOf('小偷') >= 0)).st;
  st = statMacro(st, statItems.find(i => i.id === 'sword1'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'redJewel' && i.floor === 'floor_4'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'blueJewel' && i.floor === 'floor_4' && i.x === 5), 'free').st;
  console.log('起点：hp', st.hp, '攻/防', st.atk + '/' + st.def, '钥匙', st.yk + '/' + st.bk + '/' + st.rk);
  // 扫钥匙模拟：反复取"开门数最少、损血最少"的黄钥匙房，直到盾可达或没有可取的
  let cur = cloneState(st); const log = [];
  const sh = statItems.find(i => i.id === 'shield1');
  for (let round = 0; round < 40; round++) {
    // 盾是否可达（free 模式规划 + 执行）
    const r = routeTo(cur, new Set([compOf[sh.cell]]), 'free', false, false);
    if (r) { log.push(`→ 直奔铁盾：损血 ${r.steps.reduce((a, x) => a + x.dmg, 0)}，开门 ${r.steps.filter(x => /Door/.test(x.label)).length}，到达时 hp ${r.st.hp} 攻/防 ${r.st.atk}/${r.st.def} 钥匙 ${r.st.yk}/${r.st.bk}/${r.st.rk}`); for (const x of r.steps) log.push(`     ${x.floor.replace('floor_', '')}F (${x.x},${x.y}) ${/Door/.test(x.label) ? '开门' : '杀 ' + x.label + ' -' + x.dmg} -> ${x.hpAfter} 钥匙 ${x.yk}`); cur = r.st; break; }
    // 候选钥匙房
    let best = null;
    for (const it of items) { if (it.cond || cur.col.get(it.idx) || !it.yk) continue;
      for (const km of ['none', 'pen']) { const d = dijkstra(cur, new Set([compOf[it.cell]]), km, false, null); if (!d || d.dmg >= cur.hp) continue; const doors = d.path.filter(b => blockers[b].kind === 'door' && blockers[b].doorType !== 'hidden').length; const sc = d.dmg + 60 * doors; if (!best || sc < best.sc) best = { it, d, doors, sc }; } }
    if (!best) { log.push('没有可取的钥匙了'); break; }
    const st2 = cloneState(cur); const stp = []; if (!applyPath(st2, best.d.path, false, stp)) { log.push('取钥匙执行失败 ' + best.it.floor); break; }
    const gained = st2.yk - cur.yk; cur = st2;
    log.push(`取钥匙 ${best.it.floor.replace('floor_', '')}F(${best.it.x},${best.it.y})：损血 ${best.d.dmg}，开门 ${best.doors}，黄钥匙 ${cur.yk - gained}→${cur.yk}，hp ${cur.hp}  [${stp.filter(x => x.dmg > 0).map(x => x.label + '-' + x.dmg).join(' ')}]`);
  }
  console.log(log.join('\n'));
  process.exit(0);
}
if (arg('--debug-follow', null)) { // 沿一条已知路线逐宏检查：新的 candidates() 能否生成同样的状态
  const ref = JSON.parse(fs.readFileSync(arg('--debug-follow', null), 'utf8'));
  let st = S.initState(); closure(st, null);
  const fb = (f, x, y) => blockers.findIndex(b => b.floor === f && b.x === x && b.y === y);
  if (arg('--start', null)) { for (const tok of fs.readFileSync(arg('--start', null), 'utf8').split(/\s+/).filter(Boolean)) { const mm = tok.match(/^(\d+)F\((\d+),(\d+)\)$/); const b = fb('floor_' + mm[1], +mm[2], +mm[3]); if (b < 0 || resolvedNow(st, b)) continue; const bl = blockers[b]; if (bl.kind === 'enemy') { const bt = battle(enemyOf(b), st.atk, st.def); applyAction(st, { type: 'kill', b, dmg: bt.damage }, null); } else applyAction(st, { type: 'open', b }, null); closure(st, null); } console.log('前缀后 hp', st.hp, st.atk + '/' + st.def, '钥匙', st.yk + '/' + st.bk); }
  let k = 0;
  for (const m of ref.route) { if (/^前缀/.test(m.label)) continue;
    k++;
    // 目标状态：把参考宏的步骤直接执行
    const tgt = cloneState(st); for (const x of m.steps) { if (x.b == null) { if (/触发/.test(x.label)) { applyAction(tgt, { type: 'trigger' }, null); closure(tgt, null); } continue; } if (resolvedNow(tgt, x.b)) continue; const bl = blockers[x.b]; if (bl.kind === 'enemy') { const bt = battle(enemyOf(x.b), tgt.atk, tgt.def); applyAction(tgt, { type: 'kill', b: x.b, dmg: bt.damage }, null); } else applyAction(tgt, { type: 'open', b: x.b }, null); closure(tgt, null); }
    const want = resKey(tgt);
    const cs = candidates(st); const hit = cs.find(c => resKey(c.st) === want);
    const sup = cs.filter(c => { const a = c.st.res, b = tgt.res; for (let i = 0; i < a.w.length; i++) if ((b.w[i] & ~a.w[i]) >>> 0) return false; return true; });
    console.log(`${String(k).padStart(2)}. ${m.label.padEnd(40)} 参考后 hp ${tgt.hp} [${tgt.atk}/${tgt.def}] 钥匙 ${tgt.yk}/${tgt.bk} 上界 ${upperBound(tgt)}/${upperBound2(tgt)} 秩 ${heurRank(tgt).toFixed(0)} | 候选 ${cs.length} 个，${hit ? '有相同状态 hp ' + hit.st.hp : '无相同状态'}${sup.length ? '，超集 ' + sup.length + ' 个: ' + sup.slice(0, 3).map(c => c.label + '(hp ' + c.st.hp + ')').join(' | ') : ''}`);
    if (!hit && !sup.length) console.log('     候选：' + cs.map(c => c.label + '(hp ' + c.st.hp + ')').join(' | ').slice(0, 600));
    st = tgt;
  }
  process.exit(0);
}
if (process.argv.includes('--debug-rush2')) {
  let st = S.initState(); closure(st, null);
  st = eventMacro(st, eventList.find(e => e.name.indexOf('小偷') >= 0)).st;
  st = statMacro(st, statItems.find(i => i.id === 'sword1'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'redJewel' && i.floor === 'floor_4'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'blueJewel' && i.floor === 'floor_4' && i.x === 5), 'free').st;
  const fb = (f, x, y) => blockers.findIndex(b => b.floor === 'floor_' + f && b.x === x && b.y === y);
  const stp0 = []; applyPath(st, [fb(4, 10, 5), fb(4, 10, 4), fb(4, 10, 3)], false, stp0);
  console.log('收完 4F 钥匙房：hp', st.hp, '攻/防', st.atk + '/' + st.def, '钥匙', st.yk + '/' + st.bk + '/' + st.rk);
  const d55 = fb(6, 5, 5), b54 = fb(6, 5, 4); console.log('6F(5,5) door idx', d55, JSON.stringify({ compNb: blockers[d55].compNb, blkNb: blockers[d55].blkNb }), '| 6F(5,4) bat', JSON.stringify({ compNb: blockers[b54].compNb, blkNb: blockers[b54].blkNb }));
  const chains = pocketList.filter(pk => pk.chain.indexOf(d55) >= 0); console.log('含 6F(5,5) 的绕路链', chains.length, chains.slice(0, 6).map(pk => '[' + pk.chain.map(b => blockers[b].floor.replace('floor_', '') + '(' + blockers[b].x + ',' + blockers[b].y + ')').join('>') + ' enter ' + pk.enter.join(',') + ']').join(' '));
  const keyComp = compOf[items.find(i => i.floor === 'floor_6' && i.yk && i.y <= 4 && i.x <= 6 && i.x >= 4).cell]; console.log('6F 蝙蝠房钥匙所在区域', keyComp, 'compAdj', JSON.stringify(compAdj[keyComp].map(b => blockers[b].x + ',' + blockers[b].y)));
  const sh = statItems.find(i => i.id === 'shield1');
  { // 规划器眼中的状态序列（节点，黄，蓝）
    const all = dijkstraKeysAll(st, false, null); const { dist, prev, via, Y, B } = all; const tc = compOf[sh.cell]; let hit = -1, bd = Infinity;
    for (let y = 0; y < Y; y++) for (let b = 0; b < B; b++) { const s2 = (tc * Y + y) * B + b; if (dist[s2] < bd) { bd = dist[s2]; hit = s2; } }
    const seq = []; for (let s2 = hit; s2 >= 0; s2 = prev[s2]) seq.push(s2); seq.reverse();
    const compName = new Array(nComp).fill(''); for (let c = 0; c < compOf.length; c++) { const k = compOf[c]; if (k >= 0 && !compName[k]) { const p = world.cellPos(c); compName[k] = p.floor.replace('floor_', '') + 'F(' + p.x + ',' + p.y + ')'; } }
    const cells = c => compName[c];
    console.log('规划序列（代价 ' + bd.toFixed(1) + '）：'); let line = [];
    for (const s2 of seq) { const n = Math.floor(s2 / (Y * B)), y = Math.floor(s2 / B) % Y, bb = s2 % B; const tag = n < nComp ? 'C' + n + (cells(n) ? '@' + cells(n) : '') : (blockers[n - nComp].floor.replace('floor_', '') + 'F(' + blockers[n - nComp].x + ',' + blockers[n - nComp].y + ')' + (blockers[n - nComp].enemyId || blockers[n - nComp].doorType)); line.push(tag + '[' + y + '/' + bb + ']' + (via[s2] >= 0 ? '{绕路' + pocketList[via[s2]].chain.map(b => '(' + blockers[b].x + ',' + blockers[b].y + ')').join('') + '}' : '')); }
    console.log('  ' + line.join(' > '));
  }
  const m = statMacro(st, sh, 'rcsp', true);
  if (!m) console.log('不可行'); else { console.log(`直奔铁盾(rcsp)：→ hp ${m.st.hp} 攻/防 ${m.st.atk}/${m.st.def} 钥匙 ${m.st.yk}/${m.st.bk}，损血 ${m.steps.reduce((a, x) => a + x.dmg, 0)}`); let i = 0; for (const x of m.steps) { i++; console.log(`  ${String(i).padStart(2)} ${x.floor.replace('floor_', '').padStart(2)}F (${x.x},${x.y}) ${(/Door/.test(x.label) ? '开' + x.label.replace('Door', '门') : '杀 ' + x.label).padEnd(20)} -${String(x.dmg).padStart(3)} -> hp ${x.hpAfter} 钥匙 ${x.yk}/${x.bk}`); } }
  process.exit(0);
}
if (process.argv.includes('--debug-rush')) {
  let st = S.initState(); closure(st, null);
  st = eventMacro(st, eventList.find(e => e.name.indexOf('小偷') >= 0)).st;
  st = statMacro(st, statItems.find(i => i.id === 'sword1'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'redJewel' && i.floor === 'floor_4'), 'free').st;
  st = statMacro(st, statItems.find(i => i.id === 'blueJewel' && i.floor === 'floor_4' && i.x === 5), 'free').st;
  console.log('起点（剑+4层红+4层蓝）：hp', st.hp, '攻/防', st.atk + '/' + st.def, '钥匙', st.yk + '/' + st.bk + '/' + st.rk, '| 绕路链', pocketList.length);
  const sh = statItems.find(i => i.id === 'shield1');
  for (const km of ['rcsp', 'kb12', 'kb30']) {
    const t0 = Date.now(); let m; if (km === 'rcsp') m = statMacro(st, sh, 'rcsp', true); else { const kb = keyBatch(st, +km.slice(2)); if (kb) { m = statMacro(kb.st, sh, 'rcsp', true); if (m) { m.steps = kb.steps.concat(m.steps); m.label = '收钥匙(+' + kb.got + ')→' + m.label; } } } const ms = Date.now() - t0;
    if (!m) { console.log('直奔铁盾(' + km + ')：不可行 ' + ms + 'ms'); continue; }
    console.log(`\n直奔铁盾(${km})：${m.label} → hp ${m.st.hp} 攻/防 ${m.st.atk}/${m.st.def} 钥匙 ${m.st.yk}/${m.st.bk}/${m.st.rk}，共 ${m.steps.length} 步，损血 ${m.steps.reduce((a, x) => a + x.dmg, 0)}，${ms}ms`);
    { let i = 0; for (const x of m.steps) { i++; console.log(`  ${String(i).padStart(2)} ${x.floor.replace('floor_', '').padStart(2)}F (${x.x},${x.y}) ${(/Door/.test(x.label) ? '开' + x.label.replace('Door', '门') : '杀 ' + x.label).padEnd(20)} -${String(x.dmg).padStart(3)} -> hp ${x.hpAfter} [${x.atk}/${x.def}] 钥匙 ${x.yk}/${x.bk}/${x.rk}`); } }
  }
  { const t0 = Date.now(); const cs = candidates(st); const ms = Date.now() - t0; console.log(`\ncandidates(): ${cs.length} 个，${ms}ms`, JSON.stringify(PROF)); for (const c of cs) c.score = scoreMacro(st, c); cs.sort((a, b) => b.score - a.score); for (const c of cs.slice(0, 12)) console.log(`  ${String(Math.round(c.score)).padStart(6)}  ${c.label}  损血 ${c.steps.reduce((a, x) => a + x.dmg, 0)} → hp ${c.st.hp} [${c.st.atk}/${c.st.def}] 钥匙 ${c.st.yk}/${c.st.bk}`); }
  process.exit(0);
}
if (process.argv.includes('--debug-after4f')) {
  let st = S.initState(); closure(st, null);
  st = eventMacro(st, eventList.find(e => e.name.indexOf('小偷') >= 0)).st;
  st = statMacro(st, statItems.find(i => i.id === 'sword1'), 'free').st;
  const r4 = statItems.find(i => i.id === 'redJewel' && i.floor === 'floor_4'); st = statMacro(st, r4, 'free').st;
  console.log('拿完剑和4层红宝石：hp', st.hp, '攻/防', st.atk + '/' + st.def, '钥匙', st.yk + '/' + st.bk + '/' + st.rk);
  const rows = [];
  for (const it of statItems) { if (st.col.get(it.idx)) continue;
    let bestM = null; for (const km of ['free', 'none', 'pen']) { const m = statMacro(st, it, km); if (m && (!bestM || m.st.hp > bestM.st.hp)) bestM = m; }
    if (!bestM) { rows.push({ it, txt: '现在拿不到' }); continue; }
    const fights = bestM.steps.filter(x => x.dmg > 0); const doors = bestM.steps.filter(x => /Door/.test(x.label)).length;
    const now = fights.reduce((a, x) => a + x.dmg, 0); const base = fights.reduce((a, x) => { const b = battle(enemyOf(x.b), 30, 30); return a + (b.ok ? b.damage : 0); }, 0);
    rows.push({ it, now, base, prem: now - base, doors, got: bestM.label, fights: fights.map(x => x.floor.replace('floor_', '') + 'F' + x.label + '-' + x.dmg).join(' ') });
  }
  rows.sort((a, b) => (a.prem == null ? 1e9 : a.prem) - (b.prem == null ? 1e9 : b.prem));
  console.log('道具 | 位置 | 现在代价 | 底价(30/30) | 溢价 | 开门 | 路上的怪');
  for (const r of rows) console.log(`${r.it.id.padEnd(10)} ${(r.it.floor.replace('floor_', '') + 'F(' + r.it.x + ',' + r.it.y + ')').padEnd(10)} ${r.txt || String(r.now).padStart(4) + ' | ' + String(r.base).padStart(4) + ' | ' + String(r.prem).padStart(4) + ' | ' + r.doors + '扇 | ' + r.fights}`);
  process.exit(0);
}
if (process.argv.includes('--debug-sword')) {
  let st = S.initState(); closure(st, null);
  const ev = eventList.find(e => e.name.indexOf('小偷') >= 0); st = eventMacro(st, ev).st;
  const sw = statItems.find(i => i.id === 'sword1'); st = statMacro(st, sw, 'free').st;
  console.log('拿剑后：hp', st.hp, '攻/防', st.atk, st.def, '钥匙', st.yk, st.bk, st.rk);
  const sh = statItems.find(i => i.id === 'shield1');
  for (const km of ['free', 'pen', 'none']) { applyPath.failed = null; const d = dijkstra(st, new Set([compOf[sh.cell]]), km, false); if (!d) { console.log(`  铁盾 ${km}: 规划无路`); continue; }
    const st2 = cloneState(st); const steps = []; const ok = applyPath(st2, d.path, true, steps);
    console.log(`  铁盾 ${km}: 规划损血 ${d.dmg}，门 ${d.path.filter(b => blockers[b].kind === 'door').length} 扇，执行${ok ? '成功' : '失败于 ' + (applyPath.failed != null ? blockers[applyPath.failed].floor + '(' + blockers[applyPath.failed].x + ',' + blockers[applyPath.failed].y + ')' + (blockers[applyPath.failed].enemyId || blockers[applyPath.failed].doorType) : '?')}，走了 ${steps.length} 步${ok ? '，到达时 hp ' + st2.hp + ' 攻/防 ' + st2.atk + '/' + st2.def + ' 钥匙 ' + st2.yk : ''}`);
    console.log('    路径: ' + d.path.map(b => blockers[b].floor.replace('floor_', '') + 'F(' + blockers[b].x + ',' + blockers[b].y + ')' + (blockers[b].enemyId || blockers[b].doorType)).join(' > ')); }
  const m = statMacro(st, sh, 'free'); console.log('  statMacro(铁盾) =', m ? m.label + ' hp ' + m.st.hp : 'null（不是候选）');
  DBG = false; for (const km of ['free', 'pen']) { const mr = statMacro(st, sh, km, true); console.log('  直奔铁盾 ' + km + ' =', mr ? mr.label + ' hp ' + mr.st.hp + ' 攻/防 ' + mr.st.atk + '/' + mr.st.def + ' 钥匙 ' + mr.st.yk + ' 步数 ' + mr.steps.length + ' 开门 ' + mr.steps.filter(x => /Door/.test(x.label)).length : 'null'); }
  const cs = candidates(st); console.log('  候选:', cs.map(c => c.label + '|hp' + c.st.hp).join('  '));
  process.exit(0);
}
if (process.argv.includes('--debug-root')) {
  const st0 = S.initState(); closure(st0, null);
  console.log('根状态 hp', st0.hp, 'atk/def', st0.atk, st0.def, 'keys', st0.yk, st0.bk, st0.rk, 'ub', upperBound(st0));
  { rebuild(st0); const r = root(st0); let n0 = 0; for (let n = 0; n < NODES; n++) if (find(st0.par, n) === r) n0++;
    const slime = blockers.findIndex(b => b.floor === 'floor_0' && b.x === 6 && b.y === 3);
    console.log('  root', r, 'start nodes', n0, 'NODES', NODES, '| slime idx', slime, 'compNb', JSON.stringify(blockers[slime].compNb), 'cost', blockerCost(st0, slime, 'free', false), '| compAdj sizes', compAdj.filter(a => a.length).length);
    const sw = statItems.find(i => i.id === 'sword1'); console.log('  sword comp', compOf[sw.cell], 'cell', sw.cell);
    const d = dijkstra(st0, new Set([compOf[sw.cell]]), 'free', false); console.log('  dij sword:', d ? 'cost ' + d.dmg + ' path ' + d.path.map(b => blockers[b].floor + '(' + blockers[b].x + ',' + blockers[b].y + ')' + (blockers[b].enemyId || blockers[b].doorType)).join(' > ') : 'null');
    const door = blockers.findIndex(b => b.floor === 'floor_1' && b.x === 6 && b.y === 3); const dd = dijkstra.lastDist;
    console.log('  main1(6,3) door idx', door, JSON.stringify({ kind: blockers[door].kind, doorType: blockers[door].doorType, compNb: blockers[door].compNb, blkNb: blockers[door].blkNb }), 'cost', blockerCost(st0, door, 'free', false), 'dist(node)', dd[nComp + door], 'dist(comps)', blockers[door].compNb.map(c => dd[c]));
    const near = blockers.map((b, i) => ({ i, b })).filter(x => x.b.floor === 'floor_1' && dd[nComp + x.i] < Infinity).map(x => x.b.x + ',' + x.b.y + (x.b.enemyId || x.b.doorType) + '=' + dd[nComp + x.i]); console.log('  main1 可达阻挡物:', near.join(' '));
    const rc = resItems.filter(i => i.floor === 'floor_0' || i.floor === 'floor_1').slice(0, 3); for (const it of rc) { const d2 = dijkstra(st0, new Set([compOf[it.cell]]), 'free', false); console.log('  dij', it.id, it.floor, it.x, it.y, ':', d2 ? 'cost ' + d2.dmg + ' len ' + d2.path.length : 'null'); }
  }
  for (const it of statItems) { if (st0.col.get(it.idx)) continue; const d = dijkstra(st0, new Set([compOf[it.cell]]), 'free', false); const m = statMacro(st0, it, 'free'); console.log(`  ${it.id}@${it.floor}(${it.x},${it.y}) dij=${d ? 'cost ' + d.dmg + ' path ' + d.path.length : 'null'} macro=${m ? m.label + ' hp ' + m.st.hp : 'null'}`); }
  const cap = captainMacro(st0); console.log('  captain macro:', cap ? cap.hpAtKill : 'null');
  const cs = candidates(st0); console.log('  根候选', cs.length, ':', cs.map(c => c.kind + '|' + c.label + '|hp' + c.st.hp).join('  '));
  if (cs.length) { const c1 = cs[0]; const cs2 = candidates(c1.st); console.log('  第二层候选', cs2.length, ':', cs2.slice(0, 15).map(c => c.kind + '|' + c.label + '|hp' + c.st.hp).join('  ')); }
  process.exit(0);
}
console.log(`初始 hp ${world.hero0 ? world.hero0.hp : '?'}，死胡同链 ${pocketList.length} 条`);
console.log(`宏动作求解：属性道具 ${statItems.length} 件，资源道具 ${resItems.length} 件，交换剪枝=${EXCHANGE}，约束=终局30/30（22件全拿，守卫/队长只在集齐后打），预算 ${SECS}s`);
{ const st0 = S.initState(); closure(st0, null); console.log(`根上界：旧 ${upperBound(st0)}，新 ${upperBound2(st0)}`); }
const st0 = S.initState(); closure(st0, null);
const START = arg('--start', null);
if (START) {
  const toks = fs.readFileSync(START, 'utf8').split(/\s+/).filter(Boolean); let n = 0;
  for (const tok of toks) { const m = tok.match(/^(\d+)F\((\d+),(\d+)\)$/); if (!m) { console.log('前缀格式错误 ' + tok); process.exit(1); }
    const b = blockers.findIndex(x => x.floor === 'floor_' + m[1] && x.x === +m[2] && x.y === +m[3]); if (b < 0) continue;
    if (resolvedNow(st0, b)) continue;
    rebuild(st0); const fr = frontier(st0, root(st0)); if (fr.indexOf(b) < 0) { console.log('前缀 ' + tok + ' 现在不可达'); process.exit(1); }
    const bl = blockers[b];
    if (bl.kind === 'enemy') { const bt = battle(enemyOf(b), st0.atk, st0.def); if (!bt.ok || bt.damage >= st0.hp) { console.log('前缀 ' + tok + ' 打不过'); process.exit(1); } applyAction(st0, { type: 'kill', b, dmg: bt.damage }, null); stack.push({ label: '前缀 ' + tok, steps: [{ b, label: bl.enemyId, floor: bl.floor, x: bl.x, y: bl.y, dmg: bt.damage, hpAfter: st0.hp - bt.damage }] }); }
    else { if (bl.doorType !== 'hidden' && keyOf(st0, bl.doorType) <= 0) { console.log('前缀 ' + tok + ' 没钥匙'); process.exit(1); } applyAction(st0, { type: 'open', b }, null); stack.push({ label: '前缀 ' + tok, steps: [{ b, label: bl.doorType + 'Door', floor: bl.floor, x: bl.x, y: bl.y, dmg: 0, hpAfter: st0.hp }] }); }
    closure(st0, null); n++;
  }
  console.log(`前缀 ${n} 步后：hp ${st0.hp} 攻/防 ${st0.atk}/${st0.def} 钥匙 ${st0.yk}/${st0.bk}/${st0.rk} 属性道具 ${nStat(st0)}/${statItems.length} 上界 ${Math.min(upperBound(st0), upperBound2(st0))}`);
  const pre = stack.length; prefixRoute.push(...stack); stack.length = 0; stack.prefixCount = pre;
}
// ---------- 外层束搜索：按已拿属性道具数分层 ----------
const rankOf = st => Math.min(upperBound(st), upperBound2(st));
function heurRank(st) { // 排序用：hp + 剩余血瓶 − 剩余必打怪的估计代价（当前属性与 30/30 的平均）
  let hp = st.hp; for (const it of items) if (!st.col.get(it.idx) && it.hp && !it.cond) hp += it.hp;
  let cost = 0;
  for (const b of requiredEnemies(st)) { const now = battle(enemyOf(b), st.atk, st.def); cost += 0.5 * (now.ok ? Math.min(now.damage, 600) : 600) + 0.5 * cost30[b]; }
  return hp - cost;
}
let deepest = { l: -1, rec: null };
function beamSearch(st0) {
  const L = statItems.length; const layers = Array.from({ length: L + 1 }, () => new Map());
  const subset = (a, b) => { for (let i = 0; i < a.w.length; i++) if ((a.w[i] & ~b.w[i]) >>> 0) return false; return true; };
  const push = rec => { const k = resKey(rec.st); const m = memo.get(k); if (m != null && m >= rec.st.hp) { pruneM++; return false; } memo.set(k, rec.st.hp);
    const ub = rankOf(rec.st); if (ub < 1 || ub <= best.hp) { pruneB++; return false; } rec.ub = ub; rec.rank = heurRank(rec.st); layers[nStat(rec.st)].set(k, rec); return true; };
  push({ st: st0, route: [] });
  const byRank = (a, b) => b.rank - a.rank || b.st.hp - a.st.hp;
  for (let l = 0; l <= L; l++) {
    if (timedOut) break;
    const pool = [...layers[l].values()].sort(byRank); if (!pool.length) continue;
    const kept = []; // 子集支配：少做的事、血和钥匙都不少、标志相同 → 多做的被支配
    for (const r of pool) { let dom = false; for (const k of kept) if (k.st.flags === r.st.flags && k.st.hp >= r.st.hp && k.st.yk >= r.st.yk && k.st.bk >= r.st.bk && k.st.rk >= r.st.rk && subset(k.st.res, r.st.res)) { dom = true; break; } if (!dom) kept.push(r); if (kept.length >= BEAM * 3) break; }
    const top = kept[0], keptN = kept.length; const queue = kept; const processed = new Set(); let expanded = 0, pushed = 0;
    while (queue.length && expanded < BEAM) {
      if (Date.now() > deadline) { timedOut = true; break; }
      queue.sort(byRank); const rec = queue.shift(); const k = resKey(rec.st); if (processed.has(k)) continue; processed.add(k);
      if (rec.ub <= best.hp) continue;
      expanded++; nodes++;
      if (l > deepest.l || (l === deepest.l && rec.st.hp > deepest.rec.st.hp)) deepest = { l, rec };
      const succ = candidates(rec.st);
      for (const s of succ) s.score = scoreMacro(rec.st, s);
      succ.sort((a, b) => b.score - a.score);
      let taken = 0;
      for (const s of succ) {
        if (s.kind === 'captain') { if (s.hpAtKill > best.hp) { best = { hp: s.hpAtKill, hpAfter: s.st.hp, atk: s.st.atk, def: s.st.def, keys: [s.st.yk, s.st.bk, s.st.rk], route: prefixRoute.concat(rec.route, [{ label: s.label, steps: s.steps }]).map(x => ({ label: x.label, steps: x.steps })) }; console.log(`  新最优：队长死亡时 hp=${best.hp}（收完 ${best.hpAfter}，攻/防 ${best.atk}/${best.def}）层 ${l} 节点 ${nodes} 用时 ${t()}`); } continue; }
        if (taken >= BRANCH) break; taken++;
        const r2 = { st: s.st, route: rec.route.concat([{ label: s.label, steps: s.steps }]) };
        if (!push(r2)) continue; pushed++;
        if (nStat(s.st) === l) queue.push(r2);
      }
      if (nodes % 50 === 0) console.log(`  层 ${l} 展开 ${expanded} 本层候选 ${queue.length} 推入 ${pushed} 最优 ${best.hp} 上界剪 ${pruneB} 记忆剪 ${pruneM} 用时 ${t()}`);
    }
    console.log(`层 ${l}（${l} 件属性道具）：池 ${pool.length} 支配后 ${keptN} 展开 ${expanded} | 最高秩 ${top ? top.rank : '-'} hp ${top ? top.st.hp : '-'} 攻/防 ${top ? top.st.atk + '/' + top.st.def : '-'} | 下层池 ${l < L ? layers[l + 1].size : '-'} | 用时 ${t()}`);
  }
}
if (USE_DFS) dfs(st0, 0); else beamSearch(st0);
if (!USE_DFS && deepest.rec) { const rec = deepest.rec, st = rec.st; console.log(`\n--- 束搜索走得最远：层 ${deepest.l}，hp ${st.hp}，攻/防 ${st.atk}/${st.def}，钥匙 ${st.yk}/${st.bk}/${st.rk} ---`);
  for (const m of rec.route) { const d = m.steps.reduce((a, x) => a + x.dmg, 0); const last = m.steps[m.steps.length - 1]; console.log(`  ${m.label.padEnd(34)} 损血 ${String(d).padStart(4)} -> hp ${last ? last.hpAfter : '?'} [${last ? last.atk + '/' + last.def : ''}]`); } }
if (TRACE_BEST && bestProg.stack) { const st = bestProg.st; console.log(`\n--- 走得最远的分支：属性道具 ${bestProg.n}/22，hp ${st.hp}，攻/防 ${st.atk}/${st.def}，钥匙 ${st.yk}/${st.bk}/${st.rk} ---`);
  for (const m of bestProg.stack) { const d = m.steps.reduce((a, x) => a + x.dmg, 0); const last = m.steps[m.steps.length - 1]; console.log(`  ${m.label.padEnd(34)} 损血 ${String(d).padStart(4)} -> hp ${last ? last.hpAfter : '?'}   [${m.steps.filter(x => x.dmg > 0 || /Door/.test(x.label)).map(x => x.floor.replace('floor_', '') + 'F(' + x.x + ',' + x.y + ')' + (/Door/.test(x.label) ? '门' : x.label + '-' + x.dmg)).join(' ')}]`); }
  const missing = statItems.filter(it => !st.col.get(it.idx)).map(it => it.id + '@' + it.floor + '(' + it.x + ',' + it.y + ')'); console.log('  还没拿到：' + missing.join(' '));
  fs.writeFileSync(__dirname + '/best_branch.json', JSON.stringify({ n: bestProg.n, hp: st.hp, atk: st.atk, def: st.def, keys: [st.yk, st.bk, st.rk], stack: bestProg.stack.map(m => ({ label: m.label, kind: m.kind, steps: m.steps })) }, null, 0)); }
console.log('PROF', JSON.stringify(PROF));
if (arg('--check-visited', null)) { // 搜索结束后：参考路线的每个状态是否被访问过（memo 里的 hp）
  const ref = JSON.parse(fs.readFileSync(arg('--check-visited', null), 'utf8')); let st = cloneState(st0); let k = 0;
  for (const m of ref.route) { if (/^前缀/.test(m.label)) continue; k++;
    for (const x of m.steps) { if (x.b == null) { if (/触发/.test(x.label)) { applyAction(st, { type: 'trigger' }, null); closure(st, null); } continue; } if (resolvedNow(st, x.b)) continue; const bl = blockers[x.b]; if (bl.kind === 'enemy') { const bt = battle(enemyOf(x.b), st.atk, st.def); applyAction(st, { type: 'kill', b: x.b, dmg: bt.damage }, null); } else applyAction(st, { type: 'open', b: x.b }, null); closure(st, null); }
    const v = memo.get(resKey(st)); console.log(`  ${String(k).padStart(2)}. ${m.label.padEnd(36)} 参考 hp ${st.hp} | 搜索访问: ${v == null ? '未访问' : 'hp ' + v}`); if (m.kind === 'captain' || /队长/.test(m.label)) break; }
}
console.log(`\n结果：${best.route ? '队长死亡时 hp ' + best.hp + '，收完 ' + best.hpAfter + '，攻/防 ' + best.atk + '/' + best.def + '，钥匙 ' + best.keys.join('/') : '未找到可行路线'} | 节点 ${nodes} memo ${memo.size} | 穷尽=${!timedOut} | 用时 ${t()}`);
if (best.route) {
  fs.writeFileSync(OUT, JSON.stringify(best, null, 0)); console.log('路线已写入 ' + OUT);
  console.log('--- 宏动作序列 ---');
  for (const m of best.route) { const dmg = m.steps.reduce((a, s) => a + s.dmg, 0); const last = m.steps[m.steps.length - 1]; console.log(`${m.label}  损血 ${dmg} -> hp ${last ? last.hpAfter : '?'}  [${m.steps.filter(s => s.dmg > 0).map(s => s.floor.replace('floor_', '') + 'F(' + s.x + ',' + s.y + ')' + s.label + '-' + s.dmg).join(' ')}]`); }
}
