'use strict';
// 读取 project/ 下的地图、怪物、道具数据，构造 main0-main10 的统一图模型。
// 只读 project 文件，不做任何修改。
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const FLOORS = ['floor_0', 'floor_1', 'floor_2', 'floor_3', 'floor_4', 'floor_5', 'floor_6', 'floor_7', 'floor_8', 'floor_9', 'floor_10'];
const W = 13, H = 13, FSZ = W * H;

function loadVarObject(file) {
  const src = fs.readFileSync(file, 'utf8');
  const i = src.indexOf('=');
  return eval('(' + src.slice(i + 1).trim().replace(/;\s*$/, '') + ')');
}
function loadFloor(id) {
  const src = fs.readFileSync(path.join(ROOT, 'project/floors', id + '.js'), 'utf8');
  const main = { floors: {} };
  new Function('main', src)(main);
  return main.floors[id];
}

const ITEM_EFFECTS = { // project/items.js itemEffect（ratio=item_ratio）
  yellowKey: { yk: 1 }, blueKey: { bk: 1 }, redKey: { rk: 1 },
  redJewel: { atk: 1, ratio: true }, blueJewel: { def: 1, ratio: true },
  redPotion: { hp: 50, ratio: true }, bluePotion: { hp: 200, ratio: true },
  sword1: { atk: 10 }, shield1: { def: 10 },
};

// 手工编码的事件（坐标均已对照 project/floors/*.js 核实）
const EVENT_SPEC = {
  // 禁入 / 当作墙处理的格子
  walls: [
    ['floor_3', 6, 1], ['floor_3', 6, 2], // 贪婪之神商店 + 锁门陷阱
    ['floor_3', 6, 3],                  // 商店前蓝门：后面只有商店，等同无用
  ],
  // 额外加入的阻挡物（地图上是 0 但事件会放东西）
  extraBlockers: [
    { floor: 'floor_10', x: 6, y: 4, kind: 'door', doorType: 'special', note: '踩(6,7)后关上的机关门，8 骷髅全灭开' },
    { floor: 'floor_10', x: 6, y: 2, kind: 'enemy', enemyId: 'skeletonCaptain', fightable: true, note: '队长移动后的位置' },
  ],
  // 怪物死亡计数类事件（afterBattle 的 flag:doorFx 计数 → openDoor）
  groups: [
    { name: 'floor_2 两中级守卫→开铁门', floor: 'floor_2', enemies: [[6, 2], [8, 2]],
      opens: [[7, 3], [5, 5], [5, 7], [7, 10], [8, 8], [3, 10], [3, 7], [3, 5], [3, 2]] },
    { name: 'floor_5 两双剑骷髅→开(10,3)', floor: 'floor_5', enemies: [[9, 4], [11, 4]], opens: [[10, 3]] },
    { name: 'floor_7 两双剑骷髅→开(4,2)', floor: 'floor_7', enemies: [[5, 1], [5, 3]], opens: [[4, 2]] },
    { name: 'floor_9 两初级守卫→开(8,2)', floor: 'floor_9', enemies: [[7, 1], [7, 3]], opens: [[8, 2]] },
    { name: 'floor_10 8 骷髅→开(6,4)', floor: 'floor_10',
      enemies: [[1, 4], [2, 4], [3, 4], [2, 5], [9, 4], [10, 4], [11, 4], [10, 5]], opens: [[6, 4]] },
  ],
  // NPC 对话事件：勇士与 NPC 相邻（可达）且条件满足时自动触发
  npcTalks: [
    { name: 'floor_1 小偷：开(11,2)+2黄钥匙', floor: 'floor_1', npc: [2, 1], needDead: [[1, 1], [3, 1], [2, 2]],
      opens: [[11, 2]], reward: { yk: 2 } },
    { name: 'floor_7 老人：开(4,2)', floor: 'floor_7', npc: [2, 2], opens: [[4, 2]] },

    { name: 'floor_2 老人：攻+8', floor: 'floor_2', npc: [1, 1], reward: { atk: 8 } },
    { name: 'floor_2 老人：防+8', floor: 'floor_2', npc: [1, 8], reward: { def: 8 } },
    { name: 'floor_2 商人：血+1000', floor: 'floor_2', npc: [1, 11], reward: { hp: 1000 } },
    { name: 'floor_2 商人：金+1000', floor: 'floor_2', npc: [1, 4], reward: { money: 1000 } },
  ],
  // main10 剧情
  main10: {
    triggerCell: [6, 7],
    captain0: [6, 6],       // 触发前的队长位置（不可战，触发时移走）
    captain: [6, 2],        // 触发后的队长位置
    specialOpenOnTrigger: [[4, 5], [8, 5]],
    redDoorReclosed: [6, 8], // 触发后变为机关门，队长死后重开
    spawnAfterCaptain: [
      [27, 8, 1], [27, 9, 1], [27, 10, 1], [27, 11, 1],
      [28, 1, 1], [28, 2, 1], [28, 3, 1], [28, 4, 1],
      [32, 8, 2], [32, 9, 2], [32, 10, 2], [32, 11, 2],
      [21, 1, 2], [21, 2, 2], [21, 3, 2], [21, 4, 2],
    ],
  },
};

const FLAG = { TRIG: 1, CAPDEAD: 2, EVBASE: 4 };

function buildWorld(opts) {
  opts = opts || {};
  const FLOORS = opts.floors || module.exports.FLOORS;
  const hasFloor = f => FLOORS.indexOf(f) >= 0;
  const enemys = loadVarObject(path.join(ROOT, 'project/enemys.js'));
  if (opts.enemyPatch) for (const id in opts.enemyPatch) Object.assign(enemys[id], opts.enemyPatch[id]);
  const maps = loadVarObject(path.join(ROOT, 'project/maps.js'));
  const data = loadVarObject(path.join(ROOT, 'project/data.js'));
  const hero0 = data.firstData.hero;
  if (opts.heroPatch) Object.assign(hero0, opts.heroPatch);
  const floors = {};
  for (const f of FLOORS) floors[f] = loadFloor(f);

  const fidx = {}; FLOORS.forEach((f, i) => fidx[f] = i);
  const cellOf = (f, x, y) => fidx[f] * FSZ + y * W + x;
  const cellPos = c => ({ floor: FLOORS[Math.floor(c / FSZ)], x: (c % FSZ) % W, y: Math.floor((c % FSZ) / W) });

  const kind = new Array(FLOORS.length * FSZ).fill('wall'); // 'free' | 'wall' | 'blocker'
  const blockers = []; // {idx, cell, floor, x, y, kind:'enemy'|'door'|'npc', enemyId, doorType}
  const blockerAt = new Map();
  const items = []; // {idx, cell, floor, x, y, id, cond}
  const warnings = [];
  const ratio = {};

  function addBlocker(b) { b.idx = blockers.length; blockers.push(b); blockerAt.set(b.cell, b.idx); kind[b.cell] = 'blocker'; return b; }
  function addItem(f, x, y, id, cond) {
    const r = ratio[f] || 1, e = ITEM_EFFECTS[id];
    if (!e) { warnings.push(`未知道具 ${id} @${f}(${x},${y})`); return; }
    const it = { idx: items.length, cell: cellOf(f, x, y), floor: f, x, y, id, cond: cond || 0,
      hp: e.ratio ? (e.hp || 0) * r : (e.hp || 0), atk: e.ratio ? (e.atk || 0) * r : (e.atk || 0),
      def: e.ratio ? (e.def || 0) * r : (e.def || 0), yk: e.yk || 0, bk: e.bk || 0, rk: e.rk || 0 };
    items.push(it); kind[it.cell] = 'free';
  }

  const wallSet = new Set(EVENT_SPEC.walls.map(([f, x, y]) => cellOf(f, x, y)));
  const enemyIdsSeen = new Set();

  for (const f of FLOORS) {
    const fl = floors[f];
    ratio[f] = parseInt(fl.item_ratio) || 1;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const c = cellOf(f, x, y);
      const num = fl.map[y][x];
      const ev = (fl.events || {})[`${x},${y}`];
      const disabled = ev && !Array.isArray(ev) && ev.enable === false;
      if (wallSet.has(c)) { kind[c] = 'wall'; continue; }
      if (num === 0) { kind[c] = 'free'; continue; }
      if (disabled) { kind[c] = 'free'; continue; } // enable:false 的块在游戏里不存在
      const info = maps[num];
      if (!info) { warnings.push(`未知图块 ${num} @${f}(${x},${y})`); continue; }
      if (info.cls === 'enemys' || info.cls === 'enemy48') {
        if (!enemys[info.id]) { warnings.push(`怪物数据缺失 ${info.id}`); continue; }
        enemyIdsSeen.add(info.id);
        addBlocker({ cell: c, floor: f, x, y, kind: 'enemy', enemyId: info.id, fightable: true });
      } else if (info.cls === 'items') {
        addItem(f, x, y, info.id, 0);
      } else if (info.id === 'yellowDoor' || info.id === 'blueDoor' || info.id === 'redDoor') {
        addBlocker({ cell: c, floor: f, x, y, kind: 'door', doorType: info.id.replace('Door', '') });
      } else if (info.id === 'specialDoor' || info.id === 'steelDoor') {
        addBlocker({ cell: c, floor: f, x, y, kind: 'door', doorType: 'special' });
      } else if (info.id === 'walldoor2') {
        addBlocker({ cell: c, floor: f, x, y, kind: 'door', doorType: 'hidden' });
      } else if (info.id === 'upFloor' || info.id === 'downFloor') {
        kind[c] = 'free';
      } else if (info.cls === 'npcs') {
        if (info.id === 'pinkShop' || info.id === 'blueShop') kind[c] = 'wall'; // 商店不使用
        else addBlocker({ cell: c, floor: f, x, y, kind: 'npc', npcId: info.id });
      } else if (info.cls === 'terrains' || info.cls === 'animates') {
        kind[c] = 'wall'; // yellowWall / shop 边饰等
      } else {
        warnings.push(`图块按墙处理 ${num}(${info.cls}/${info.id}) @${f}(${x},${y})`);
      }
    }
  }
  for (const eb of EVENT_SPEC.extraBlockers) {
    if (!hasFloor(eb.floor)) continue;
    const c = cellOf(eb.floor, eb.x, eb.y);
    if (kind[c] !== 'free') warnings.push(`extraBlocker 位置非空地 ${eb.floor}(${eb.x},${eb.y})`);
    addBlocker(Object.assign({ cell: c }, eb));
  }
  let captain0 = null, captain = null, redDoor68 = null, trigDoors = [], triggerCell = null;
  if (hasFloor('floor_10')) {
    for (const [num, x, y] of EVENT_SPEC.main10.spawnAfterCaptain) addItem('floor_10', x, y, maps[num].id, FLAG.CAPDEAD);
    const m10 = EVENT_SPEC.main10;
    captain0 = blockerAt.get(cellOf('floor_10', m10.captain0[0], m10.captain0[1]));
    captain = blockerAt.get(cellOf('floor_10', m10.captain[0], m10.captain[1]));
    blockers[captain0].fightable = false; blockers[captain0].isCaptain0 = true;
    blockers[captain].isCaptain = true;
    redDoor68 = blockerAt.get(cellOf('floor_10', m10.redDoorReclosed[0], m10.redDoorReclosed[1]));
    blockers[redDoor68].reclosable = true;
    trigDoors = m10.specialOpenOnTrigger.map(([x, y]) => blockerAt.get(cellOf('floor_10', x, y)));
    triggerCell = cellOf('floor_10', m10.triggerCell[0], m10.triggerCell[1]);
  }

  // 楼梯连通
  const links = [];
  for (const f of FLOORS) {
    const fl = floors[f];
    for (const key in fl.changeFloor || {}) {
      const cf = fl.changeFloor[key];
      if (!fidx.hasOwnProperty(cf.floorId)) continue; // base1 / MOTA1 不纳入
      const [x, y] = key.split(',').map(Number);
      let tx, ty;
      if (cf.loc) [tx, ty] = cf.loc;
      else if (cf.stair) {
        const tf = floors[cf.floorId];
        if (tf[cf.stair]) [tx, ty] = tf[cf.stair];
        else { // libs/events.js _changeFloor_getHeroLoc：找第一个同 id 的块
          const want = cf.stair === 'upFloor' ? 87 : 88;
          outer: for (let yy = 0; yy < H; yy++) for (let xx = 0; xx < W; xx++) if (tf.map[yy][xx] === want) { tx = xx; ty = yy; break outer; }
        }
      }
      if (tx == null) { warnings.push(`楼梯目标未知 ${f}(${x},${y})`); continue; }
      links.push([cellOf(f, x, y), cellOf(cf.floorId, tx, ty)]);
    }
  }

  // 基础连通分量（不含阻挡物）
  const N = FLOORS.length * FSZ;
  const parent = new Int32Array(N); for (let i = 0; i < N; i++) parent[i] = i;
  const find = i => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  const union = (a, b) => { a = find(a); b = find(b); if (a !== b) parent[a] = b; };
  const nb4 = c => { const { floor, x, y } = cellPos(c); const r = [];
    if (x > 0) r.push(c - 1); if (x < W - 1) r.push(c + 1); if (y > 0) r.push(c - W); if (y < H - 1) r.push(c + W); return r; };
  for (let c = 0; c < N; c++) if (kind[c] === 'free') for (const d of nb4(c)) if (kind[d] === 'free') union(c, d);
  for (const [a, b] of links) { if (kind[a] !== 'free' || kind[b] !== 'free') { warnings.push('楼梯格非空地 ' + JSON.stringify(cellPos(a))); continue; } union(a, b); }
  const compOf = new Int32Array(N).fill(-1); let nComp = 0; const rootToComp = new Map();
  for (let c = 0; c < N; c++) if (kind[c] === 'free') { const r = find(c); if (!rootToComp.has(r)) rootToComp.set(r, nComp++); compOf[c] = rootToComp.get(r); }
  for (const b of blockers) {
    b.compNb = []; b.blkNb = [];
    for (const d of nb4(b.cell)) {
      if (kind[d] === 'free') { if (!b.compNb.includes(compOf[d])) b.compNb.push(compOf[d]); }
      else if (kind[d] === 'blocker') b.blkNb.push(blockerAt.get(d));
    }
  }
  const compCells = new Array(nComp).fill(0); for (let c = 0; c < N; c++) if (compOf[c] >= 0) compCells[compOf[c]]++;

  // 事件编译
  const groups = EVENT_SPEC.groups.filter(g => hasFloor(g.floor)).map((g, i) => ({
    name: g.name, floor: g.floor,
    enemies: g.enemies.map(([x, y]) => { const b = blockerAt.get(cellOf(g.floor, x, y)); if (b == null || blockers[b].kind !== 'enemy') warnings.push('group 怪物缺失 ' + g.name); return b; }),
    opens: g.opens.map(([x, y]) => blockerAt.get(cellOf(g.floor, x, y))).filter(b => b != null && blockers[b].kind === 'door'),
  }));
  const groupOfEnemy = new Map();
  groups.forEach((g, gi) => g.enemies.forEach(e => groupOfEnemy.set(e, gi)));
  const npcTalks = EVENT_SPEC.npcTalks.filter(t => hasFloor(t.floor)).map((t, i) => ({
    name: t.name, floor: t.floor, flag: FLAG.EVBASE << i,
    npc: blockerAt.get(cellOf(t.floor, t.npc[0], t.npc[1])),
    needDead: (t.needDead || []).map(([x, y]) => blockerAt.get(cellOf(t.floor, x, y))),
    opens: (t.opens || []).map(([x, y]) => blockerAt.get(cellOf(t.floor, x, y))).filter(b => b != null),
    reward: t.reward || {},
  }));
  for (const t of npcTalks) if (t.npc == null || blockers[t.npc].kind !== 'npc') warnings.push('npcTalk NPC 缺失 ' + t.name);

  return {
    FLOORS, W, H, enemys, floors, hero0, kind, blockers, blockerAt, items, links, warnings,
    cellOf, cellPos, compOf, nComp, compCells, groups, groupOfEnemy, npcTalks, FLAG,
    captain0, captain, redDoor68, trigDoors, triggerCell,
    startCell: cellOf(data.firstData.floorId, hero0.loc.x, hero0.loc.y),
    goalCell: opts.goalCell ? cellOf(opts.goalCell.floor, opts.goalCell.x, opts.goalCell.y) : null,
    enemyIdsSeen: [...enemyIdsSeen],
  };
}

module.exports = { buildWorld, FLOORS, EVENT_SPEC, FLAG };
