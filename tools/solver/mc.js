'use strict';
// 蒙特卡洛可行性探针：随机化贪心 rollout，看初始 hp 下能否打死队长。
// 用法：node tools/solver/mc.js [--secs 60] [--hp 1000] [--temp 40]
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const SECS = parseFloat(arg('--secs', '60')), HP0 = parseInt(arg('--hp', '0')), TEMP = parseFloat(arg('--temp', '40'));
const world = buildWorld(HP0 ? { heroPatch: { hp: HP0 } } : {});
const S = makeSolver(world, { lazyDefer: false });
const { expand, rebuild, root, signature } = S._internals;
const blockers = world.blockers;
function succ(st) {
  rebuild(st); const r = root(st);
  return expand(st, r, signature(st, r)).map(x => {
    const a = x.a, bl = a.b != null ? blockers[a.b] : null;
    const rec = { type: a.type, b: a.b, floor: bl ? bl.floor : 'floor_10', x: bl ? bl.x : 6, y: bl ? bl.y : 7,
      label: a.type === 'trigger' ? '踩(6,7)触发' : (a.type === 'kill' ? bl.enemyId : bl.doorType + 'Door'),
      dmg: a.dmg || 0, hpAfter: x.st.hp, atkAfter: x.st.atk, defAfter: x.st.def, hpAtKill: x.terminalHp };
    return { st: x.st, rec };
  });
}
function score(st, x) { // 越大越好
  const rec = x.rec, s2 = x.st;
  const dhp = s2.hp - st.hp;                       // 含闭包自动捡的血瓶
  const dstat = (s2.atk - st.atk) * 70 + (s2.def - st.def) * 55;
  const dkey = (s2.yk - st.yk) * 25 + (s2.bk - st.bk) * 60 + (s2.rk - st.rk) * 120;
  return dhp + dstat + dkey + (rec.type === 'trigger' ? 0 : 0);
}
function rollout(policy) {
  let st = S.initState(); S.closure(st, []);
  const path = [];
  for (let step = 0; step < 400; step++) {
    const xs = succ(st);
    if (!xs.length) return { ok: false, path, hp: st.hp, step };
    let pick;
    if (policy === 'cheap') { xs.sort((a, b) => a.rec.dmg - b.rec.dmg || score(st, b) - score(st, a)); pick = xs[0]; }
    else {
      const sc = xs.map(x => score(st, x));
      const mx = Math.max(...sc);
      const w = sc.map(v => Math.exp((v - mx) / TEMP));
      let r = Math.random() * w.reduce((a, b) => a + b, 0), i = 0;
      while (i < w.length - 1 && (r -= w[i]) > 0) i++;
      pick = xs[i];
    }
    path.push(pick.rec); st = pick.st;
    if (pick.rec.hpAtKill != null) return { ok: true, path, hp: pick.rec.hpAtKill, step };
  }
  return { ok: false, path, hp: st.hp, step: 400 };
}
const T0 = Date.now(); let n = 0, feas = 0, best = null, bestDead = null;
const g = rollout('cheap'); n++; if (g.ok) { feas++; best = g; } else bestDead = g;
console.log(`贪心(最便宜优先): ${g.ok ? '可行，队长死亡时 hp ' + g.hp : '失败于第 ' + g.step + ' 步，hp ' + g.hp + '，最后动作 ' + (g.path.at(-1) ? g.path.at(-1).floor + '(' + g.path.at(-1).x + ',' + g.path.at(-1).y + ') ' + g.path.at(-1).label : '-')}`);
while (Date.now() - T0 < SECS * 1000) {
  const r = rollout('soft'); n++;
  if (r.ok) { feas++; if (!best || r.hp > best.hp) best = r; }
  else if (!bestDead || r.step > bestDead.step) bestDead = r;
}
console.log(`rollouts=${n} 可行=${feas} 用时 ${((Date.now() - T0) / 1000).toFixed(0)}s`);
if (best) {
  console.log(`最佳可行：队长死亡时 hp ${best.hp}，动作 ${best.path.length} 步`);
  require('fs').writeFileSync(__dirname + '/mc_best.json', JSON.stringify(best.path.map(a => ({ type: a.type, b: a.b, floor: a.floor, x: a.x, y: a.y, label: a.label, dmg: a.dmg, hpAfter: a.hpAfter, atk: a.atkAfter, def: a.defAfter })), null, 0));
  for (const a of best.path) console.log(`  ${a.floor} (${a.x},${a.y}) ${a.label} -${a.dmg} -> ${a.hpAfter} [${a.atkAfter}/${a.defAfter}]`);
} else if (bestDead) {
  console.log(`走得最远的失败 rollout：${bestDead.step} 步，hp ${bestDead.hp}；最后 8 步：`);
  for (const a of bestDead.path.slice(-8)) console.log(`  ${a.floor} (${a.x},${a.y}) ${a.label} -${a.dmg} -> ${a.hpAfter} [${a.atkAfter}/${a.defAfter}]`);
}
