'use strict';
// 逐个去掉路线里的一场战斗，重放；如果仍能打死队长且剩血更多 → 这场战斗是多余的
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const { battle } = require('./battle');
const fs = require('fs');
const toks = fs.readFileSync(process.argv[2], 'utf8').split(/\s+/).filter(Boolean);
const world = buildWorld({}); const S = makeSolver(world, { lazyDefer: false }); const I = S._internals;
const { blockers } = world; const enemyOf = b => world.enemys[blockers[b].enemyId];
const keyOf = (st, c) => c === 'yellow' ? st.yk : c === 'blue' ? st.bk : st.rk;
const findB = (f, x, y) => blockers.findIndex(b => b.floor === 'floor_' + f && b.x === x && b.y === y);
function replay(skip) {
  let st = S.initState(); S.closure(st, null); let capHp = null;
  for (let i = 0; i < toks.length; i++) {
    if (skip.has(i)) continue;
    const m = toks[i].match(/^(\d+)F\((\d+),(\d+)\)$/); const f = +m[1], x = +m[2], y = +m[3];
    if (world.cellOf('floor_' + f, x, y) === world.triggerCell) { I.applyAction(st, { type: 'trigger' }, null); S.closure(st, null); continue; }
    const b = findB(f, x, y); if (b < 0) continue;
    if (st.res.get(b)) continue;
    I.rebuild(st); if (I.frontier(st, I.root(st)).indexOf(b) < 0) return { ok: false, why: '不可达 ' + toks[i] };
    const bl = blockers[b];
    if (bl.kind === 'enemy') { const bt = battle(enemyOf(b), st.atk, st.def); if (!bt.ok || bt.damage >= st.hp) return { ok: false, why: '打不过 ' + toks[i] }; const hp0 = st.hp; I.applyAction(st, { type: 'kill', b, dmg: bt.damage }, null); if (bl.isCaptain) capHp = hp0 - bt.damage; }
    else { if (bl.doorType !== 'hidden' && keyOf(st, bl.doorType) <= 0) return { ok: false, why: '缺钥匙 ' + toks[i] }; I.applyAction(st, { type: 'open', b }, null); }
    S.closure(st, null);
  }
  return { ok: capHp != null, capHp, atk: st.atk, def: st.def };
}
const base = replay(new Set()); console.log('原路线：', JSON.stringify(base)); if (!base.ok) process.exit(1);
const out = [];
for (let i = 0; i < toks.length; i++) {
  const m = toks[i].match(/^(\d+)F\((\d+),(\d+)\)$/); const b = findB(+m[1], +m[2], +m[3]); if (b < 0 || blockers[b].kind !== 'enemy' || blockers[b].isCaptain) continue;
  const r = replay(new Set([i]));
  if (r.ok && r.capHp > base.capHp && r.atk >= 30 && r.def >= 30) out.push(`${toks[i]} ${blockers[b].enemyId}：去掉后 队长死时 ${r.capHp}（+${r.capHp - base.capHp}）`);
}
console.log(out.length ? '可以去掉的战斗：\n  ' + out.join('\n  ') : '没有任何一场战斗可以单独去掉（去掉任何一场都会导致后面打不过、缺钥匙、走不到，或者属性不够 30/30）');
// 成对去掉：两场战斗一起去掉（例如为了拿钥匙打的怪 + 用那把钥匙开的门后面的怪）
if (process.argv.includes('--pairs')) {
  const fights = [];
  for (let i = 0; i < toks.length; i++) { const m = toks[i].match(/^(\d+)F\((\d+),(\d+)\)$/); const b = findB(+m[1], +m[2], +m[3]); if (b >= 0 && !blockers[b].isCaptain) fights.push(i); }
  const res = [];
  for (let a = 0; a < fights.length; a++) for (let c = a + 1; c < fights.length; c++) {
    const r = replay(new Set([fights[a], fights[c]]));
    if (r.ok && r.capHp > base.capHp && r.atk >= 30 && r.def >= 30) res.push(`${toks[fights[a]]} + ${toks[fights[c]]} → ${r.capHp}`);
  }
  console.log(res.length ? '成对去掉更好：\n  ' + res.join('\n  ') : '成对去掉（战斗或门，任意两步）也没有更好的');
}
