'use strict';
// 手工路线逐步核算：node tools/solver/walk.js "剑+4红+4蓝" "4F(6,7) 4F(6,8) 4F(6,9)" [--options 5F(1,1)]
// 前缀关键字：thief=救小偷, sword=铁剑, 4red, 4blue；之后用 楼层(x,y) 逐个解决阻挡物（怪/门），道具自动捡。
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const { battle } = require('./battle');
const STRICT = process.argv.includes('--strict');
const HARG = process.argv.indexOf('--hero'); const heroPatch = {}; if (HARG >= 0) { const [h, a, d] = process.argv[HARG + 1].split(',').map(Number); if (h) heroPatch.hp = h; if (a) heroPatch.atk = a; if (d) heroPatch.def = d; }
const world = buildWorld(Object.keys(heroPatch).length ? { heroPatch } : {}); const S = makeSolver(world, { lazyDefer: false, noFreeDoors: STRICT }); const I = S._internals;
const { blockers, items, compOf, nComp, enemys } = world;
const enemyOf = b => enemys[blockers[b].enemyId];
const keyOf = (st, c) => c === 'yellow' ? st.yk : c === 'blue' ? st.bk : st.rk;
const findB = (f, x, y) => blockers.findIndex(b => b.floor === 'floor_' + f && b.x === x && b.y === y);
function fmt(st) { return `hp ${st.hp} 攻/防 ${st.atk}/${st.def} 钥匙 黄${st.yk} 蓝${st.bk} 红${st.rk}`; }
let st = S.initState(); S.closure(st, null);
function doStep(b, log) {
  const bl = blockers[b]; I.rebuild(st); const fr = I.frontier(st, I.root(st));
  if (fr.indexOf(b) < 0) { if (st.res.get(b)) { log.push(`  (${bl.floor}(${bl.x},${bl.y}) 已解决，跳过)`); return true; } log.push(`  !! ${bl.floor}(${bl.x},${bl.y}) 现在不可达`); return false; }
  const before = { hp: st.hp, yk: st.yk, bk: st.bk, rk: st.rk, atk: st.atk, def: st.def };
  if (bl.kind === 'enemy') { const bt = battle(enemyOf(b), st.atk, st.def); if (!bt.ok) { log.push(`  !! ${bl.enemyId} 打不动`); return false; } if (bt.damage >= st.hp) { log.push(`  !! ${bl.enemyId} 伤害 ${bt.damage} ≥ hp`); return false; } I.applyAction(st, { type: 'kill', b, dmg: bt.damage }, null); }
  else if (bl.kind === 'door') { if (bl.doorType !== 'hidden' && bl.doorType !== 'special' && keyOf(st, bl.doorType) <= 0) { log.push(`  !! 没有${bl.doorType}钥匙`); return false; } if (bl.doorType === 'special') { log.push('  !! 机关门不能直接开'); return false; } I.applyAction(st, { type: 'open', b }, null); }
  else { log.push('  !! NPC 不是动作'); return false; }
  const auto = []; S.closure(st, auto);
  const dmg = before.hp - st.hp;
  log.push(`  ${bl.floor.replace('floor_', '')}F(${bl.x},${bl.y}) ${bl.kind === 'enemy' ? '杀 ' + bl.enemyId + ' -' + battle(enemyOf(b), before.atk, before.def).damage : '开' + bl.doorType + '门'} → ${fmt(st)}${auto.length ? '  | 自动: ' + auto.join('; ') : ''}`);
  return true;
}
const presets = {
  thief: () => { for (const [x, y] of [[6, 3]]) doStep(findB(0, x, y), []); for (const [x, y] of [[4, 2], [2, 2], [1, 1], [3, 1]]) doStep(findB(1, x, y), []); },
  sword: () => { for (const [x, y] of [[7, 8], [6, 6], [4, 5], [3, 5], [2, 9]]) doStep(findB(3, x, y), []); doStep(findB(4, 2, 10), []); },
  '4red': () => { for (const [x, y] of [[2, 4], [2, 3], [4, 1], [5, 1]]) doStep(findB(4, x, y), []); },
  '4blue': () => { for (const [x, y] of [[3, 6], [4, 6], [8, 4], [8, 3]]) doStep(findB(4, x, y), []); },
};
const args = process.argv.slice(2);
const pre = (args[0] || '').split('+').map(s => s.trim()).filter(Boolean);
for (const p of pre) { const k = { '剑': 'sword', '4红': '4red', '4蓝': '4blue', '小偷': 'thief' }[p] || p; if (!presets[k]) { console.log('未知前缀 ' + p); process.exit(1); } if (k !== 'thief' && !pre.includes('thief') && !pre.includes('小偷')) presets.thief(); presets[k](); }
console.log('前缀后：' + fmt(st));
const log = [];
for (const tok of (args[1] || '').split(/\s+/).filter(Boolean)) { const m = tok.match(/^(\d+)F\((\d+),(\d+)\)$/); if (!m) { console.log('格式错误 ' + tok); continue; }
  if (world.cellOf('floor_' + m[1], +m[2], +m[3]) === world.triggerCell) { const auto = []; I.applyAction(st, { type: 'trigger' }, null); S.closure(st, auto); log.push(`  ${m[1]}F(${m[2]},${m[3]}) 踩机关 → ${fmt(st)}${auto.length ? '  | 自动: ' + auto.join('; ') : ''}`); continue; }
  const b = findB(+m[1], +m[2], +m[3]); if (b < 0) { console.log('  !! ' + tok + ' 不是阻挡物（可能是空地/道具，道具会自动捡）'); continue; } if (!doStep(b, log)) break; }
console.log(log.join('\n'));
const ski = args.indexOf('--setkeys'); if (ski >= 0) { const [y, b2, r2] = args[ski + 1].split(',').map(Number); st.yk = y; st.bk = b2; st.rk = r2; }
const shp = args.indexOf('--sethp'); if (shp >= 0) st.hp = +args[shp + 1];
console.log('现在：' + fmt(st));
const si = args.indexOf('--stats');
if (si >= 0) { // 当前状态下所有未拿属性道具：最省血路线的损血、开门数、路上的怪
  const compAdj = Array.from({ length: nComp }, () => []); for (let b = 0; b < blockers.length; b++) for (const c of blockers[b].compNb) compAdj[c].push(b);
  function find(par, i) { while (par[i] !== i) { par[i] = par[par[i]]; i = par[i]; } return i; }
  const rows = [];
  for (const it of items) { if (it.cond || st.col.get(it.idx) || !(it.atk || it.def)) continue;
    I.rebuild(st); const r = I.root(st), par = st.par, N = nComp + blockers.length;
    const dist = new Float64Array(N).fill(Infinity), prev = new Int32Array(N).fill(-1), done = new Uint8Array(N); const heap = [];
    for (let n = 0; n < N; n++) if (find(par, n) === r) { dist[n] = 0; heap.push([0, n]); }
    const cost = b => { const bl = blockers[b]; if (st.res.get(b)) return 0; if (bl.kind === 'npc') return Infinity; if (bl.kind === 'enemy') { if (!bl.fightable || bl.isCaptain || bl.isCaptain0) return Infinity; const bt = battle(enemyOf(b), st.atk, st.def); return bt.ok ? bt.damage : Infinity; } if (bl.doorType === 'hidden') return 0; if (bl.doorType === 'special') return Infinity; return 60; };
    let hit = -1; const target = compOf[it.cell];
    while (heap.length) { heap.sort((a, b) => a[0] - b[0]); const [d, u] = heap.shift(); if (done[u]) continue; done[u] = 1; if (u === target) { hit = u; break; }
      const relax = (v, w) => { if (w === Infinity) return; if (d + w < dist[v]) { dist[v] = d + w; prev[v] = u; heap.push([d + w, v]); } };
      if (u < nComp) { for (const b of compAdj[u]) relax(nComp + b, cost(b)); } else { const bl = blockers[u - nComp]; for (const c of bl.compNb) relax(c, 0); for (const nb of bl.blkNb) relax(nComp + nb, cost(nb)); } }
    if (hit < 0) { rows.push({ it, txt: '不可达' }); continue; }
    const path = []; for (let n = hit; n >= 0; n = prev[n]) if (n >= nComp && !st.res.get(n - nComp)) path.push(n - nComp); path.reverse();
    const dmg = path.reduce((a, b) => a + (blockers[b].kind === 'enemy' ? battle(enemyOf(b), st.atk, st.def).damage : 0), 0), doors = path.filter(b => blockers[b].kind === 'door' && blockers[b].doorType !== 'hidden').length;
    rows.push({ it, dmg, doors, path: path.map(b => blockers[b].kind === 'enemy' ? blockers[b].floor.replace('floor_', '') + 'F' + blockers[b].enemyId + '-' + battle(enemyOf(b), st.atk, st.def).damage : '门').join('>') });
  }
  rows.sort((a, b) => (a.dmg == null ? 1e9 : a.dmg + a.doors * 60) - (b.dmg == null ? 1e9 : b.dmg + b.doors * 60));
  console.log('未拿的属性道具（从当前位置）：'); for (const r of rows) console.log(`  ${r.it.id.padEnd(10)} ${(r.it.floor.replace('floor_', '') + 'F(' + r.it.x + ',' + r.it.y + ')').padEnd(10)} ${r.txt || '损血 ' + String(r.dmg).padStart(3) + ' 开门 ' + r.doors + '  [' + r.path + ']'}`);
}
const ki = args.indexOf('--keys');
if (ki >= 0) { // 列出黄钥匙房：从当前位置拿到每把钥匙的代价（允许开门，门按 60 罚分排序）
  const compAdj = Array.from({ length: nComp }, () => []); for (let b = 0; b < blockers.length; b++) for (const c of blockers[b].compNb) compAdj[c].push(b);
  function find(par, i) { while (par[i] !== i) { par[i] = par[par[i]]; i = par[i]; } return i; }
  const rows = [];
  for (const it of items) { if (it.cond || st.col.get(it.idx) || !(it.yk || it.bk || it.rk || it.hp)) continue; if (args[ki + 1] !== 'all' && it.floor !== 'floor_' + args[ki + 1]) continue;
    I.rebuild(st); const r = I.root(st), par = st.par, N = nComp + blockers.length;
    const dist = new Float64Array(N).fill(Infinity), prev = new Int32Array(N).fill(-1), done = new Uint8Array(N); const heap = [];
    for (let n = 0; n < N; n++) if (find(par, n) === r) { dist[n] = 0; heap.push([0, n]); }
    const cost = b => { const bl = blockers[b]; if (st.res.get(b)) return 0; if (bl.kind === 'npc') return Infinity; if (bl.kind === 'enemy') { if (!bl.fightable || bl.isCaptain || bl.isCaptain0) return Infinity; const bt = battle(enemyOf(b), st.atk, st.def); return bt.ok ? bt.damage : Infinity; } if (bl.doorType === 'hidden') return 0; if (bl.doorType === 'special') return Infinity; return 60; };
    let hit = -1; const target = compOf[it.cell];
    while (heap.length) { heap.sort((a, b) => a[0] - b[0]); const [d, u] = heap.shift(); if (done[u]) continue; done[u] = 1; if (u === target) { hit = u; break; }
      const relax = (v, w) => { if (w === Infinity) return; if (d + w < dist[v]) { dist[v] = d + w; prev[v] = u; heap.push([d + w, v]); } };
      if (u < nComp) { for (const b of compAdj[u]) relax(nComp + b, cost(b)); } else { const bl = blockers[u - nComp]; for (const c of bl.compNb) relax(c, 0); for (const nb of bl.blkNb) relax(nComp + nb, cost(nb)); } }
    if (hit < 0) { rows.push({ it, txt: '不可达' }); continue; }
    const path = []; for (let n = hit; n >= 0; n = prev[n]) if (n >= nComp && !st.res.get(n - nComp)) path.push(n - nComp); path.reverse();
    const dmg = path.reduce((a, b) => a + (blockers[b].kind === 'enemy' ? battle(enemyOf(b), st.atk, st.def).damage : 0), 0), doors = path.filter(b => blockers[b].kind === 'door' && blockers[b].doorType !== 'hidden').length;
    rows.push({ it, dmg, doors, path: path.map(b => blockers[b].kind === 'enemy' ? blockers[b].enemyId + '-' + battle(enemyOf(b), st.atk, st.def).damage : '门').join('>') });
  }
  rows.sort((a, b) => (a.doors * 60 + a.dmg) - (b.doors * 60 + b.dmg));
  console.log(`${args[ki + 1]}F 的钥匙与血瓶：`); for (const r of rows) console.log(`  ${r.it.id.padEnd(10)} ${(r.it.floor.replace('floor_', '') + 'F(' + r.it.x + ',' + r.it.y + ')').padEnd(10)}  ${r.txt || '损血 ' + r.dmg + ' 开门 ' + r.doors + '  [' + r.path + ']'}`);
}
const oi = args.indexOf('--options');
if (oi >= 0) { // 列出到目标格的候选路线（按开门数分档）
  const m = args[oi + 1].match(/^(\d+)F\((\d+),(\d+)\)$/); const cell = world.cellOf('floor_' + m[1], +m[2], +m[3]);
  // 简单 Dijkstra（复用 macro.js 的思路：门罚分几档）
  const compAdj = Array.from({ length: nComp }, () => []); for (let b = 0; b < blockers.length; b++) for (const c of blockers[b].compNb) compAdj[c].push(b);
  function find(par, i) { while (par[i] !== i) { par[i] = par[par[i]]; i = par[i]; } return i; }
  for (const pen of [0, 60, 200, 5000]) {
    I.rebuild(st); const r = I.root(st), par = st.par, N = nComp + blockers.length;
    const dist = new Float64Array(N).fill(Infinity), prev = new Int32Array(N).fill(-1), done = new Uint8Array(N); const heap = [];
    for (let n = 0; n < N; n++) if (find(par, n) === r) { dist[n] = 0; heap.push([0, n]); }
    const cost = b => { const bl = blockers[b]; if (st.res.get(b)) return 0; if (bl.kind === 'npc') return Infinity; if (bl.kind === 'enemy') { if (!bl.fightable || bl.isCaptain || bl.isCaptain0) return Infinity; const bt = battle(enemyOf(b), st.atk, st.def); return bt.ok ? bt.damage : Infinity; } if (bl.doorType === 'hidden') return 0; if (bl.doorType === 'special') return Infinity; return pen; };
    let hit = -1; const target = compOf[cell];
    while (heap.length) { heap.sort((a, b) => a[0] - b[0]); const [d, u] = heap.shift(); if (done[u]) continue; done[u] = 1; if (u === target) { hit = u; break; }
      const relax = (v, w) => { if (w === Infinity) return; if (d + w < dist[v]) { dist[v] = d + w; prev[v] = u; heap.push([d + w, v]); } };
      if (u < nComp) { for (const b of compAdj[u]) relax(nComp + b, cost(b)); } else { const bl = blockers[u - nComp]; for (const c of bl.compNb) relax(c, 0); for (const nb of bl.blkNb) relax(nComp + nb, cost(nb)); } }
    if (hit < 0) { console.log(`门罚分 ${pen}: 无路`); continue; }
    const path = []; for (let n = hit; n >= 0; n = prev[n]) if (n >= nComp && !st.res.get(n - nComp)) path.push(n - nComp); path.reverse();
    const dmg = path.reduce((a, b) => a + (blockers[b].kind === 'enemy' ? battle(enemyOf(b), st.atk, st.def).damage : 0), 0), doors = path.filter(b => blockers[b].kind === 'door' && blockers[b].doorType !== 'hidden').length;
    console.log(`门罚分 ${pen}: 损血 ${dmg} 开门 ${doors} | ` + path.map(b => blockers[b].floor.replace('floor_', '') + 'F(' + blockers[b].x + ',' + blockers[b].y + ')' + (blockers[b].kind === 'enemy' ? blockers[b].enemyId + '-' + battle(enemyOf(b), st.atk, st.def).damage : blockers[b].doorType === 'hidden' ? '暗门' : '门')).join(' > '));
  }
}
