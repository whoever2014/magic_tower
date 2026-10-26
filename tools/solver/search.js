'use strict';
// 最优路线搜索。
// 状态键 = (已解决阻挡物集合 res, 标志位 flags)；给定键，atk/def/钥匙由自动收集唯一决定，只有 hp 需要比较。
// 搜索：按 |res| 分层的 DP（res 只增 → 键图是 DAG，每个键只展开一次，保留该键的最大 hp）。
// 自动动作（闭包）只包含"现在做不比任何时候做差"的零代价动作：
//   捡道具 / 撞暗门(walldoor2) / NPC 与计数事件 / 伤害为 0 的怪 / 开门后闭包内直接拿回 ≥1 把同色钥匙的门。
// 任何会掉血的怪、任何净耗钥匙的门，一律进入分支。
const { battle } = require('./battle');

class Bits {
  constructor(n, words) { this.n = n; this.w = words || new Uint32Array((n + 31) >>> 5); }
  clone() { return new Bits(this.n, new Uint32Array(this.w)); }
  get(i) { return (this.w[i >>> 5] >>> (i & 31)) & 1; }
  set(i) { this.w[i >>> 5] |= (1 << (i & 31)) >>> 0; }
  count() { let c = 0; for (let i = 0; i < this.w.length; i++) { let v = this.w[i]; while (v) { v &= v - 1; c++; } } return c; }
  key() { let s = ''; for (let i = 0; i < this.w.length; i++) s += this.w[i].toString(36) + '.'; return s; }
}

const GOALF = 1 << 30; // "到达目标格"伪标志（floor 子集验证模式用）

function makeSolver(world, opts) {
  opts = opts || {};
  const { blockers, items, compOf, nComp, FLAG, enemys, groups, groupOfEnemy, npcTalks } = world;
  const nB = blockers.length, nI = items.length;
  const NODES = nComp + nB;
  const TRIG = FLAG.TRIG, CAPDEAD = FLAG.CAPDEAD;
  const anchorStart = compOf[world.startCell];
  const anchorTrig = world.triggerCell != null ? compOf[world.triggerCell] : -1;
  const goalComp = world.goalCell != null ? compOf[world.goalCell] : -1; // reach 模式
  const captainMode = world.captain != null && goalComp < 0;
  const enemyOf = b => enemys[blockers[b].enemyId];
  const verbose = !!opts.verbose;

  // ---------- 状态 ----------
  function initState() {
    const h = world.hero0;
    const st = { res: new Bits(nB), col: new Bits(nI), flags: 0, hp: h.hp, atk: h.atk, def: h.def,
      yk: h.items.keys.yellowKey || 0, bk: h.items.keys.blueKey || 0, rk: h.items.keys.redKey || 0, money: h.money || 0, par: null };
    rebuild(st);
    if (opts.startActions && opts.startActions.length) { // 从已知前缀继续
      let r = closure(st, null);
      for (const a of opts.startActions) {
        if (a.type === 'trigger') applyAction(st, { type: 'trigger' }, null);
        else {
          const bl = blockers[a.b];
          if (!adjacent(st, r, a.b)) throw new Error('前缀不可达 ' + bl.floor + '(' + bl.x + ',' + bl.y + ')');
          if (a.type === 'kill') { const bt = battle(enemyOf(a.b), st.atk, st.def); if (!bt.ok || bt.damage >= st.hp) throw new Error('前缀战斗不可行 ' + bl.enemyId); applyAction(st, { type: 'kill', b: a.b, dmg: bt.damage }, null); }
          else { if (keyOf(st, bl.doorType) <= 0) throw new Error('前缀无钥匙'); applyAction(st, { type: 'open', b: a.b }, null); }
        }
        r = closure(st, null);
      }
    }
    return st;
  }
  function cloneState(st) {
    return { res: st.res.clone(), col: st.col.clone(), flags: st.flags, hp: st.hp, atk: st.atk, def: st.def,
      yk: st.yk, bk: st.bk, rk: st.rk, money: st.money, par: st.par ? new Int32Array(st.par) : null };
  }
  function stripState(st) { return { res: st.res, col: st.col, flags: st.flags, hp: st.hp, atk: st.atk, def: st.def, yk: st.yk, bk: st.bk, rk: st.rk, money: st.money, par: null }; }
  function isResolved(st, b) {
    const bl = blockers[b];
    if (bl.kind === 'npc' || !st.res.get(b)) return false;
    if (bl.reclosable && (st.flags & TRIG) && !(st.flags & CAPDEAD)) return false;
    return true;
  }
  function find(par, i) { while (par[i] !== i) { par[i] = par[par[i]]; i = par[i]; } return i; }
  function union(par, a, b) { a = find(par, a); b = find(par, b); if (a !== b) par[a] = b; }
  function linkBlocker(st, b) {
    const bl = blockers[b], par = st.par;
    for (const c of bl.compNb) union(par, nComp + b, c);
    for (const nb of bl.blkNb) if (isResolved(st, nb)) union(par, nComp + b, nComp + nb);
  }
  function rebuild(st) {
    if (!st.par) st.par = new Int32Array(NODES);
    const par = st.par; for (let i = 0; i < NODES; i++) par[i] = i;
    for (let b = 0; b < nB; b++) if (isResolved(st, b)) linkBlocker(st, b);
  }
  function root(st) { return find(st.par, (st.flags & TRIG) ? anchorTrig : anchorStart); }
  function adjacent(st, r, b) {
    const bl = blockers[b];
    for (const c of bl.compNb) if (find(st.par, c) === r) return true;
    for (const nb of bl.blkNb) if (isResolved(st, nb) && find(st.par, nComp + nb) === r) return true;
    return false;
  }
  function setResolved(st, b) { if (st.res.get(b)) return; st.res.set(b); if (isResolved(st, b)) linkBlocker(st, b); }
  function applyReward(st, rw) {
    if (rw.hp) st.hp += rw.hp; if (rw.atk) st.atk += rw.atk; if (rw.def) st.def += rw.def;
    if (rw.yk) st.yk += rw.yk; if (rw.bk) st.bk += rw.bk; if (rw.rk) st.rk += rw.rk; if (rw.money) st.money += rw.money;
  }
  function afterKill(st, b, log) {
    setResolved(st, b);
    const bl = blockers[b];
    if (bl.isCaptain) { st.flags |= CAPDEAD; rebuild(st); if (log) log.push('队长死亡：(6,8)重开，(6,1)楼梯出现，刷出 4红宝石/4蓝宝石/4蓝瓶/4黄钥匙'); }
    const gi = groupOfEnemy.get(b);
    if (gi != null) {
      const g = groups[gi];
      if (g.enemies.every(e => st.res.get(e))) { for (const d of g.opens) setResolved(st, d); if (log) log.push('事件：' + g.name); }
    }
  }
  function doOpen(st, b) {
    const bl = blockers[b];
    if (bl.doorType === 'yellow') st.yk--; else if (bl.doorType === 'blue') st.bk--; else if (bl.doorType === 'red') st.rk--;
    setResolved(st, b);
  }
  function doTrigger(st, log) {
    st.flags |= TRIG; st.res.set(world.captain0); for (const d of world.trigDoors) st.res.set(d); rebuild(st);
    if (log) log.push('队长移至(6,2)，(6,8)(6,4)关闭，(4,5)(8,5)打开');
  }
  function applyAction(st, a, log) {
    if (a.type === 'kill') { st.hp -= a.dmg; afterKill(st, a.b, log); }
    else if (a.type === 'open') doOpen(st, a.b);
    else doTrigger(st, log);
  }

  // 基础闭包：捡道具 / 暗门 / 零伤怪 / NPC 事件（全部零代价）
  function basicClosure(st, log) {
    for (let iter = 0; ; iter++) {
      let r = root(st), changed = false;
      const picked = {};
      for (let i = 0; i < nI; i++) {
        const it = items[i];
        if (st.col.get(i) || (it.cond && !(st.flags & it.cond))) continue;
        if (find(st.par, compOf[it.cell]) !== r) continue;
        st.col.set(i); st.hp += it.hp; st.atk += it.atk; st.def += it.def; st.yk += it.yk; st.bk += it.bk; st.rk += it.rk;
        changed = true; picked[it.id] = (picked[it.id] || 0) + 1;
      }
      if (log) for (const id in picked) log.push(`捡 ${id}×${picked[id]}`);
      for (let b = 0; b < nB; b++) {
        if (st.res.get(b)) continue;
        const bl = blockers[b];
        if (bl.kind === 'npc' || !adjacent(st, r, b)) continue;
        if (bl.kind === 'door' && bl.doorType === 'hidden') { doOpen(st, b); changed = true; r = root(st); if (log) log.push(`撞开暗门 ${bl.floor}(${bl.x},${bl.y})`); }
        else if (bl.kind === 'enemy' && bl.fightable && !bl.isCaptain) {
          const bt = battle(enemyOf(b), st.atk, st.def);
          if (bt.ok && bt.damage === 0) { afterKill(st, b, log); changed = true; r = root(st); if (log) log.push(`零伤击杀 ${bl.enemyId} ${bl.floor}(${bl.x},${bl.y})`); }
        }
      }
      for (const t of npcTalks) {
        if (st.flags & t.flag) continue;
        if (!t.needDead.every(e => st.res.get(e))) continue;
        if (!adjacent(st, r, t.npc)) continue;
        st.flags |= t.flag; changed = true;
        for (const d of t.opens) setResolved(st, d);
        applyReward(st, t.reward);
        if (log) log.push('事件：' + t.name);
        r = root(st);
      }
      if (!changed) return r;
      if (iter > 60) throw new Error('closure 不收敛');
    }
  }
  function frontier(st, r) {
    const fr = [];
    for (let b = 0; b < nB; b++) if (!st.res.get(b) && blockers[b].kind !== 'npc' && adjacent(st, r, b)) fr.push(b);
    return fr;
  }
  function keyOf(st, color) { return color === 'yellow' ? st.yk : color === 'blue' ? st.bk : st.rk; }
  // 完整闭包：基础闭包 + "开门后立刻拿回同色钥匙"的门（零代价）
  function closure(st, log) {
    let r = basicClosure(st, log);
    if (opts.noFreeDoors) return r; // 严格模式：不自动开"门后就是钥匙"的门
    for (let iter = 0; ; iter++) {
      let committed = false;
      for (const b of frontier(st, r)) {
        const bl = blockers[b];
        if (bl.kind !== 'door' || bl.doorType === 'special' || keyOf(st, bl.doorType) <= 0) continue;
        const t = cloneState(st); const tlog = [];
        doOpen(t, b); basicClosure(t, tlog);
        if (keyOf(t, bl.doorType) >= keyOf(st, bl.doorType)) {
          if (log) log.push(`[零代价开门] ${bl.doorType} ${bl.floor}(${bl.x},${bl.y}) → ` + tlog.join('; '));
          Object.assign(st, t); committed = true; r = root(st); break;
        }
      }
      if (!committed) return r;
      if (iter > 400) throw new Error('closure2 不收敛');
    }
  }
  function candidate(st, b) {
    const bl = blockers[b];
    if (bl.kind === 'enemy') {
      if (!bl.fightable) return null;
      const bt = battle(enemyOf(b), st.atk, st.def);
      if (!bt.ok || bt.damage >= st.hp) return null;
      return { type: 'kill', b, dmg: bt.damage };
    }
    if (bl.doorType === 'special' || bl.doorType === 'hidden') return null;
    return keyOf(st, bl.doorType) > 0 ? { type: 'open', b, dmg: 0 } : null;
  }
  function signature(st, r) {
    let comps = 0; for (let c = 0; c < nComp; c++) if (find(st.par, c) === r) comps++;
    return { comps, fr: frontier(st, r), col: st.col.count(), flags: st.flags, resCount: st.res.count() };
  }
  const eventEnemies = new Set();
  for (const g of groups) for (const e of g.enemies) eventEnemies.add(e);
  for (const t of npcTalks) for (const e of t.needDead) eventEnemies.add(e);
  // "有潜力"的阻挡物：守着东西（静态截断集合非空）、必经、事件怪、门（门后可能有路）、队长相关
  let potentialCache = null;
  function potential(b) {
    if (!potentialCache) {
      potentialCache = new Uint8Array(nB);
      const mset = new Set(mandatory);
      for (let i = 0; i < nB; i++) {
        const bl = blockers[i];
        if (bl.kind === 'npc') continue;
        if (bl.kind === 'door' || mset.has(i) || eventEnemies.has(i) || bl.isCaptain || bl.isCaptain0 || bl.reclosable || (cutoffItems[i] && cutoffItems[i].length)) potentialCache[i] = 1;
      }
    }
    return potentialCache[b] === 1;
  }
  // 动态一步前瞻：在状态 st 下假设立刻解决 b（不计代价），是否捡到东西 / 触发事件 / 到达目标 / 露出静态有潜力的新边界
  function potentialDyn(st, r, b) {
    const bl = blockers[b];
    if (bl.kind === 'npc' || bl.isCaptain0) return false;
    if (bl.kind === 'door' && (bl.doorType === 'special')) return false;
    const st2 = cloneState(st);
    if (bl.kind === 'enemy') { if (!bl.fightable) return false; applyAction(st2, { type: 'kill', b, dmg: 0 }, null); }
    else applyAction(st2, { type: 'open', b }, null);
    const r2 = closure(st2, null);
    if (st2.col.count() > st.col.count() || st2.flags !== st.flags) return true;
    if (goalComp >= 0 && find(st2.par, goalComp) === r2) return true;
    const oldFr = new Set(frontier(st, r));
    for (const b2 of frontier(st2, r2)) if (!oldFr.has(b2) && potential(b2)) return true;
    return false;
  }
  function hasGain(before, after, killedB, stAfter, rAfter) {
    if (killedB != null && eventEnemies.has(killedB)) return true;
    if (after.flags !== before.flags) return true;
    if (after.col !== before.col) return true;           // 捡到了东西
    const old = new Set(before.fr);
    for (const b of after.fr) if (!old.has(b) && (potential(b) || (stAfter && potentialDyn(stAfter, rAfter, b)))) return true; // 露出了有潜力的新边界
    return false;                                        // 只是多看到一块地或几只守着空气的怪 → 多余动作，判死
  }

  // ---------- 静态分析：必杀怪、每个阻挡物的"截断区域"、上界 ----------
  const targetComp = captainMode ? compOf[world.cellOf('floor_10', 6, 3)] : goalComp;
  function reachWithout(exclude, fromComp) {
    const st = { res: new Bits(nB), flags: 0, par: null };
    for (let b = 0; b < nB; b++) if (!exclude.has(b) && blockers[b].kind !== 'npc') st.res.set(b);
    rebuild(st);
    const r = find(st.par, fromComp == null ? anchorStart : fromComp);
    return { st, r };
  }
  const mandatory = (() => {
    const set = new Set();
    const ok = (ex) => { const { st, r } = reachWithout(ex); return find(st.par, targetComp) === r; };
    for (let e = 0; e < nB; e++) { const bl = blockers[e]; if (bl.kind === 'enemy' && bl.fightable && !ok(new Set([e]))) set.add(e); }
    for (const g of groups) if (!ok(new Set(g.opens))) for (const e of g.enemies) set.add(e);
    for (const t of npcTalks) if (t.opens.length && !ok(new Set(t.opens))) for (const e of t.needDead) set.add(e);
    if (captainMode) set.add(world.captain);
    return [...set];
  })();
  // cutoff[b] = 只有解决 b 才能到达的道具集合（其余全部解决时仍不可达的道具）
  const cutoffItems = new Array(nB).fill(null);
  for (let b = 0; b < nB; b++) {
    const bl = blockers[b];
    if (bl.kind === 'npc') continue;
    const { st, r } = reachWithout(new Set([b]));
    const arr = [];
    for (let i = 0; i < nI; i++) if (find(st.par, compOf[items[i].cell]) !== r) arr.push(i);
    cutoffItems[b] = arr;
  }
  // 结构性阻挡物：截断区域含属性道具/事件怪/目标，或不构成割点（环路）；其余为"懒惰房"（只有血瓶/钥匙的死胡同）
  const statItemIdx = new Set(items.map((it, i) => i).filter(i => items[i].atk > 0 || items[i].def > 0));
  const eventEnemySet = new Set(); for (const g of groups) for (const e of g.enemies) eventEnemySet.add(e); for (const t of npcTalks) for (const e of t.needDead) eventEnemySet.add(e);
  const structural = new Array(nB).fill(true);
  const baseline = reachWithout(new Set());
  const baseReach = []; for (let c = 0; c < nComp; c++) if (find(baseline.st.par, c) === baseline.r) baseReach.push(c);
  for (let b = 0; b < nB; b++) {
    const bl = blockers[b];
    if (bl.kind === 'npc') continue;
    if (bl.isCaptain || bl.isCaptain0 || bl.reclosable || eventEnemySet.has(b)) continue;
    const { st, r } = reachWithout(new Set([b]));
    if (find(st.par, targetComp) !== r) continue;            // 挡住目标 → 结构性
    const behind = c => find(st.par, c) !== r;
    let cut = cutoffItems[b].length > 0 || baseReach.some(behind);
    if (!cut) continue;                                        // 非割点（环路/捷径）→ 结构性
    let hasStat = cutoffItems[b].some(i => statItemIdx.has(i));
    let hasEvent = [...eventEnemySet].some(e => e !== b && blockers[e].compNb.length && blockers[e].compNb.every(behind));
    let hasNpc = npcTalks.some(t => (t.reward.atk || t.reward.def || t.reward.hp) && blockers[t.npc].compNb.length && blockers[t.npc].compNb.every(behind));
    if (!hasStat && !hasEvent && !hasNpc) structural[b] = false;
  }
  const nStructural = structural.filter((v, b) => v && blockers[b].kind !== 'npc').length;
  // 血瓶房：用"最外层怪"的最低代价给血瓶收益打折。对每个血瓶取一个覆盖它的怪物阻挡物（优先截断集合最大的，避免重复扣减）
  const potionIdx = items.map((it, i) => i).filter(i => items[i].hp > 0);
  const guardOfPotion = new Map(); // potion idx -> blocker b（enemy）或 null
  const enemyBlockers = []; for (let b = 0; b < nB; b++) if (blockers[b].kind === 'enemy' && blockers[b].fightable && cutoffItems[b] && cutoffItems[b].length) enemyBlockers.push(b);
  enemyBlockers.sort((a, b) => cutoffItems[b].length - cutoffItems[a].length);
  for (const i of potionIdx) { let g = null; for (const b of enemyBlockers) if (cutoffItems[b].indexOf(i) >= 0 && !blockers[b].isCaptain) { g = b; break; } guardOfPotion.set(i, g); }
  const potionsOfGuard = new Map(); for (const [i, g] of guardOfPotion) if (g != null) { if (!potionsOfGuard.has(g)) potionsOfGuard.set(g, []); potionsOfGuard.get(g).push(i); }
  // 触发后（队长未死）只能拿竞技场内的血瓶
  const arenaItems = new Set();
  if (captainMode) {
    const st = { res: new Bits(nB), flags: TRIG, par: null };
    for (let b = 0; b < nB; b++) if (blockers[b].kind !== 'npc') st.res.set(b);
    rebuild(st); const r = find(st.par, anchorTrig);
    for (let i = 0; i < nI; i++) if (find(st.par, compOf[items[i].cell]) === r) arenaItems.add(i);
  }
  const atkItems = items.filter(i => i.atk > 0), defItems = items.filter(i => i.def > 0);
  const npcAtk = npcTalks.filter(t => t.reward.atk), npcDef = npcTalks.filter(t => t.reward.def), npcHp = npcTalks.filter(t => t.reward.hp);
  function upperBound(st) { // 对"终局 hp"（队长死亡时 / 到达目标时）的上界
    let atkMax = st.atk, defMax = st.def;
    for (const it of atkItems) if (!st.col.get(it.idx)) atkMax += it.atk;
    for (const it of defItems) if (!st.col.get(it.idx)) defMax += it.def;
    for (const t of npcAtk) if (!(st.flags & t.flag)) atkMax += t.reward.atk;
    for (const t of npcDef) if (!(st.flags & t.flag)) defMax += t.reward.def;
    let hpMax = st.hp;
    const inArena = (st.flags & TRIG) && !(st.flags & CAPDEAD);
    const usable = i => !st.col.get(i) && !(items[i].cond & CAPDEAD) && (!inArena || arenaItems.has(i));
    const counted = new Set();
    for (const [g, ps] of potionsOfGuard) {
      if (st.res.get(g)) continue;
      let sum = 0; for (const i of ps) if (usable(i)) { sum += items[i].hp; counted.add(i); }
      if (sum === 0) continue;
      const bt = battle(enemyOf(g), atkMax, defMax);
      hpMax += Math.max(0, sum - (bt.ok ? bt.damage : Infinity));
    }
    for (const i of potionIdx) if (!counted.has(i) && usable(i)) hpMax += items[i].hp;
    for (const t of npcHp) if (!(st.flags & t.flag)) hpMax += t.reward.hp;
    let cost = 0;
    for (const e of mandatory) {
      if (st.res.get(e)) continue;
      const bt = battle(enemyOf(e), atkMax, defMax);
      if (!bt.ok) return -Infinity;
      cost += bt.damage;
    }
    return hpMax - cost;
  }

  function cappedCost(e, atk, def) {
    const en = enemyOf(e);
    const hpd = Math.max(1, atk - en.def);
    const per = (en.special === 2 || (Array.isArray(en.special) && en.special.indexOf(2) >= 0)) ? en.atk : Math.max(0, en.atk - def);
    const times = en.special === 4 ? 2 : 1;
    return Math.min(3000, (Math.ceil(en.hp / hpd) - 1) * per * times);
  }
  const VAL = { atk: 40, def: 40, yk: 25, bk: 80, rk: 200 };
  const itemValue = it => it.hp + VAL.atk * it.atk + VAL.def * it.def + VAL.yk * it.yk + VAL.bk * it.bk + VAL.rk * it.rk;
  // 每个道具的守怪链（所有把它截断的怪）
  const guardsOfItem = items.map((it, i) => { const g = []; for (let b = 0; b < nB; b++) if (blockers[b].kind === 'enemy' && blockers[b].fightable && !blockers[b].isCaptain && cutoffItems[b] && cutoffItems[b].indexOf(i) >= 0) g.push(b); return g; });
  function beamScore(st) { // 层内排序：hp + 按当前属性"能收获的净价值"（房间=相同守怪链的道具组）− 必杀怪在满属性下的代价
    const inArena = (st.flags & TRIG) && !(st.flags & CAPDEAD);
    const rooms = new Map();
    for (let i = 0; i < nI; i++) {
      const it = items[i];
      if (st.col.get(i) || (it.cond && !(st.flags & it.cond)) || (inArena && !arenaItems.has(i))) continue;
      const g = guardsOfItem[i].filter(b => !st.res.get(b));
      const key = g.join(',');
      if (!rooms.has(key)) rooms.set(key, { g, v: 0 });
      rooms.get(key).v += itemValue(it);
    }
    let harvest = 0;
    for (const { g, v } of rooms.values()) {
      let c = 0, ok = true;
      for (const b of g) { const bt = battle(enemyOf(b), st.atk, st.def); if (!bt.ok || bt.damage >= st.hp) { ok = false; break; } c += bt.damage; }
      if (ok) harvest += Math.max(0, v - c);
    }
    let atkMax = st.atk, defMax = st.def;
    for (const it of atkItems) if (!st.col.get(it.idx)) atkMax += it.atk;
    for (const it of defItems) if (!st.col.get(it.idx)) defMax += it.def;
    let mc = 0; for (const e of mandatory) if (!st.res.get(e)) mc += cappedCost(e, atkMax, defMax);
    return st.hp + harvest - mc + VAL.yk * st.yk + VAL.bk * st.bk + VAL.rk * st.rk;
  }

  // ---------- 展开 ----------
  function expand(st, r, sigBefore, withLog) {
    const out = [];
    const structuralActs = [], lazyActs = [];
    for (const b of sigBefore.fr) { const a = candidate(st, b); if (!a) continue; if (opts.lazyDefer && !structural[b]) lazyActs.push(a); else structuralActs.push(a); }
    if (captainMode && !(st.flags & TRIG) && find(st.par, anchorTrig) === r) structuralActs.push({ type: 'trigger', dmg: 0 });
    const tryActs = (actions) => {
      for (const a of actions) {
        const st2 = cloneState(st);
        const log = withLog ? [] : null;
        applyAction(st2, a, log);
        let terminalHp = null;
        if (a.type === 'kill' && blockers[a.b].isCaptain) terminalHp = st2.hp;
        const r2 = closure(st2, log);
        if (!captainMode && find(st2.par, goalComp) === r2) { terminalHp = st2.hp; st2.flags |= GOALF; }
        if (terminalHp == null && !hasGain(sigBefore, signature(st2, r2), a.type === 'kill' ? a.b : null, st2, r2)) { stats.pruneUseless++; continue; }
        out.push({ st: st2, a, terminalHp, log, r: r2 });
      }
    };
    tryActs(structuralActs);
    if (!out.length) tryActs(lazyActs); // 结构性动作全部不可行/无收益时才进懒惰房
    else if (lazyActs.length) { // 角落：某个结构动作会把血压到打不起某懒惰房守怪，则该懒惰房现在也允许进
      let hpMin = Infinity; for (const x of out) if (x.st.hp < hpMin) hpMin = x.st.hp;
      tryActs(lazyActs.filter(a => a.dmg >= hpMin));
    }
    return out;
  }

  const stats = { expanded: 0, generated: 0, keys: 0, pruneBound: 0, pruneUseless: 0, pruneBeam: 0, maxLayer: 0, exhaustive: true, timedOut: false, startTime: Date.now() };

  // ---------- 分层 DP ----------
  function solve() {
    const beam = opts.beam || Infinity;
    const budgetMs = opts.timeBudgetMs == null ? 240000 : opts.timeBudgetMs;
    const deadline = Date.now() + budgetMs;
    const st0 = initState();
    closure(st0, null);
    const layers = new Map(); // layer -> Map(key -> state)
    const parents = new Map(); // key -> {p: parentKey, t: type, b, hk: terminalHp}
    const keyOfState = st => st.res.key() + st.flags;
    function put(st, parentKey, a, terminalHp) {
      const key = keyOfState(st);
      const L = st.res.count();
      let m = layers.get(L); if (!m) { m = new Map(); layers.set(L, m); }
      const old = m.get(key);
      if (old && old.hp >= st.hp) return;
      m.set(key, stripState(st));
      parents.set(key, { p: parentKey, t: a ? a.type : 'start', b: a ? a.b : null, hk: terminalHp });
      if (!old) stats.keys++;
      stats.generated++;
    }
    put(st0, null, null, null);
    const best = { hpAtKill: opts.incumbent != null ? opts.incumbent : -Infinity, hpAfter: -Infinity, key: null, final: null };
    const consider = (st) => {
      const hk = parents.get(keyOfState(st)).hk;
      if (hk > best.hpAtKill || (hk === best.hpAtKill && st.hp > best.hpAfter)) { best.hpAtKill = hk; best.hpAfter = st.hp; best.key = keyOfState(st); best.final = st; }
    };
    let L = 0;
    while (layers.size) {
      const maxL = Math.max(...layers.keys());
      if (!layers.has(L)) { L++; if (L > maxL) break; continue; }
      const m = layers.get(L); layers.delete(L);
      stats.maxLayer = L;
      let entries = [...m.values()];
      if (entries.length > beam) {
        stats.exhaustive = false; stats.pruneBeam += entries.length - beam;
        const score = s => (s.flags & (CAPDEAD | GOALF)) ? Infinity : beamScore(s);
        entries.sort((a, b) => score(b) - score(a));
        entries = entries.slice(0, beam);
      }
      if (opts.onLayer) opts.onLayer(L, entries);
      if (verbose) console.error(`  层 ${L}: ${entries.length} 状态, 累计键 ${stats.keys}, 当前最优 ${best.hpAtKill}, 用时 ${((Date.now() - stats.startTime) / 1000).toFixed(1)}s`);
      for (const st of entries) {
        if (Date.now() > deadline) { stats.exhaustive = false; stats.timedOut = true; break; }
        if (st.flags & (CAPDEAD | GOALF)) { consider(st); continue; }
        { const ub = upperBound(st); if (ub < 1 || ub <= best.hpAtKill) { stats.pruneBound++; continue; } }
        rebuild(st);
        const r = root(st);
        stats.expanded++;
        const key = keyOfState(st);
        for (const s of expand(st, r, signature(st, r), false)) put(s.st, key, s.a, s.terminalHp);
      }
      L++;
      if (stats.timedOut) { for (const m2 of layers.values()) for (const st of m2.values()) if (st.flags & (CAPDEAD | GOALF)) consider(st); break; }
    }
    stats.elapsedMs = Date.now() - stats.startTime;
    stats.memoKeys = parents.size;
    const actions = [];
    for (let k = best.key; k; ) { const p = parents.get(k); if (p.t !== 'start') actions.push({ type: p.t, b: p.b }); k = p.p; }
    actions.reverse();
    stats.nStructural = nStructural; stats.lazyDefer = !!opts.lazyDefer;
    return { best: { hpAtKill: best.hpAtKill, hpAfter: best.hpAfter, actions: best.key ? actions : null, final: best.final }, stats, mandatory };
  }

  // ---------- DFS 分支定界（anytime：先用启发式顺序深入得到完整路线，再回溯改进；预算到即停） ----------
  function solveDFS() {
    const budgetMs = opts.timeBudgetMs == null ? 240000 : opts.timeBudgetMs;
    const deadline = Date.now() + budgetMs;
    const memo = new Map();
    const best = { hpAtKill: opts.incumbent != null ? opts.incumbent : -Infinity, hpAfter: -Infinity, actions: null, final: null };
    const path = [];
    let timedOut = false;
    const keyOfState = st => st.res.key() + st.flags;
    function dfs(st, r, depth) {
      let ub2;
      if (timedOut) return;
      if ((stats.expanded & 255) === 0 && Date.now() > deadline) { timedOut = true; return; }
      const key = keyOfState(st);
      const seen = memo.get(key);
      if (seen != null && seen >= st.hp) { stats.pruneMemo = (stats.pruneMemo || 0) + 1; return; }
      memo.set(key, st.hp);
      { const ub = upperBound(st); if (ub < 1 || ub <= best.hpAtKill) { stats.pruneBound++; return; } }
      stats.expanded++;
      if (verbose && stats.expanded % 20000 === 0) console.error(`  DFS 展开 ${stats.expanded}, memo ${memo.size}, 最优 ${best.hpAtKill}, 深度 ${depth}, 用时 ${((Date.now() - stats.startTime) / 1000).toFixed(1)}s`);
      const succ = expand(st, r, signature(st, r), false);
      stats.generated += succ.length;
      const CAPV = 600; let vAtk = 0, vDef = 0;
      for (let b = 0; b < nB; b++) {
        const bl = blockers[b]; if (st.res.get(b) || bl.kind !== 'enemy' || !bl.fightable || bl.isCaptain0) continue;
        const e = enemyOf(b); const c0 = battle(e, st.atk, st.def), c1 = battle(e, st.atk + 1, st.def), c2 = battle(e, st.atk, st.def + 1);
        const v = x => x.ok ? Math.min(x.damage, CAPV) : CAPV;
        vAtk += Math.max(0, v(c0) - v(c1)); vDef += Math.max(0, v(c0) - v(c2));
      }
      for (const x of succ) x.score = x.terminalHp != null ? Infinity : x.st.hp + vAtk * (x.st.atk - st.atk) + vDef * (x.st.def - st.def) + 20 * ((x.st.yk - st.yk) + 2 * (x.st.bk - st.bk) + 4 * (x.st.rk - st.rk));
      succ.sort((a, b) => b.score - a.score);
      for (const x of succ) {
        if (timedOut) return;
        path.push(x.a);
        if (x.terminalHp != null) {
          const ks = x.st.yk + 2 * x.st.bk + 4 * x.st.rk, bks = best.final ? best.final.yk + 2 * best.final.bk + 4 * best.final.rk : -1;
          if (x.terminalHp > best.hpAtKill || (x.terminalHp === best.hpAtKill && (x.st.hp > best.hpAfter || (x.st.hp === best.hpAfter && ks > bks)))) {
            best.hpAtKill = x.terminalHp; best.hpAfter = x.st.hp; best.actions = path.slice(); best.final = x.st;
            if (verbose) console.error(`  新最优：队长死亡时 hp=${best.hpAtKill}（收完 ${best.hpAfter}），展开 ${stats.expanded}，用时 ${((Date.now() - stats.startTime) / 1000).toFixed(1)}s`);
          }
        } else if ((ub2 = upperBound(x.st)) >= 1 && ub2 > best.hpAtKill) dfs(x.st, x.r, depth + 1);
        else stats.pruneBound++;
        path.pop();
      }
    }
    const st0 = initState();
    const r0 = closure(st0, null);
    dfs(st0, r0, 0);
    stats.elapsedMs = Date.now() - stats.startTime; stats.memoKeys = memo.size; stats.keys = memo.size;
    stats.exhaustive = !timedOut; stats.timedOut = timedOut; stats.nStructural = nStructural; stats.lazyDefer = !!opts.lazyDefer; stats.mode = 'dfs';
    return { best, stats, mandatory };
  }

  // ---------- 回放：把动作序列重新执行一遍，生成带细节的路线（独立于搜索过程重新计算伤害） ----------
  function replay(actions) {
    const st = initState();
    const log0 = [];
    let r = closure(st, log0);
    const route = [{ type: 'start', floor: 'floor_0', x: world.hero0.loc.x, y: world.hero0.loc.y, label: '出发', dmg: 0,
      hpBefore: world.hero0.hp, atk: world.hero0.atk, def: world.hero0.def, hpAfter: st.hp, atkAfter: st.atk, defAfter: st.def, keys: [st.yk, st.bk, st.rk], auto: log0 }];
    for (const a of actions) {
      const rec = { type: a.type, hpBefore: st.hp, atk: st.atk, def: st.def, dmg: 0 };
      const log = [];
      if (a.type === 'trigger') { rec.floor = 'floor_10'; rec.x = 6; rec.y = 7; rec.label = '踩(6,7)触发队长剧情'; applyAction(st, { type: 'trigger' }, log); }
      else {
        const bl = blockers[a.b]; rec.b = a.b; rec.floor = bl.floor; rec.x = bl.x; rec.y = bl.y;
        if (!adjacent(st, r, a.b)) throw new Error('回放失败：动作目标不可达 ' + JSON.stringify(rec));
        if (a.type === 'kill') {
          const bt = battle(enemyOf(a.b), st.atk, st.def);
          if (!bt.ok || bt.damage >= st.hp) throw new Error('回放失败：战斗不可行 ' + JSON.stringify(rec));
          rec.label = bl.enemyId; rec.dmg = bt.damage; rec.battle = bt;
          applyAction(st, { type: 'kill', b: a.b, dmg: bt.damage }, log);
          if (bl.isCaptain) rec.hpAtKill = st.hp;
        } else {
          if (keyOf(st, bl.doorType) <= 0) throw new Error('回放失败：无钥匙 ' + JSON.stringify(rec));
          rec.label = bl.doorType + 'Door'; applyAction(st, { type: 'open', b: a.b }, log);
        }
      }
      r = closure(st, log);
      rec.auto = log; rec.hpAfter = st.hp; rec.atkAfter = st.atk; rec.defAfter = st.def; rec.keys = [st.yk, st.bk, st.rk];
      route.push(rec);
    }
    return { route, final: st };
  }

  return { solve: opts.mode === 'dfs' ? solveDFS : solve, solveDFS, solveLayered: solve, replay, initState, closure, mandatory, stats, battleOf: (b, atk, def) => battle(enemyOf(b), atk, def),
    _internals: { expand, cloneState, rebuild, root, signature, candidate, frontier, upperBound, applyAction, basicClosure, cutoffItems, structural } };
}

module.exports = { makeSolver, Bits, GOALF };
