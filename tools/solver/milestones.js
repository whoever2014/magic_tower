'use strict';
// 分段求解：铁剑 → 铁盾 → 队长。每段 DFS 分支定界，从上一段的最优前缀继续。
// 用法：node --max-old-space-size=8000 tools/solver/milestones.js [--s1 60] [--s2 60] [--s3 180] [--lazy]
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const fs = require('fs');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const S1 = +arg('--s1', '60'), S2 = +arg('--s2', '60'), S3 = +arg('--s3', '180');
const LAZY = process.argv.includes('--lazy');
const T0 = Date.now(); const t = () => ((Date.now() - T0) / 1000).toFixed(0) + 's';
const stages = [
  { name: '铁剑 main4(2,9)', goal: { floor: 'floor_4', x: 2, y: 9 }, secs: S1 },
  { name: '铁盾 main9(6,11)', goal: { floor: 'floor_9', x: 6, y: 11 }, secs: S2 },
  { name: '骷髅队长', goal: null, secs: S3 },
];
let prefix = [];
const summary = [];
for (const sg of stages) {
  const world = buildWorld(sg.goal ? { goalCell: sg.goal } : {});
  const S = makeSolver(world, { mode: 'dfs', timeBudgetMs: sg.secs * 1000, lazyDefer: LAZY, startActions: prefix });
  const R = S.solve();
  const ok = R.best.actions != null;
  console.log(`[${t()}] 阶段「${sg.name}」: ${ok ? '到达时 hp ' + R.best.hpAtKill : '未找到'} | expanded ${R.stats.expanded} | exhaustive ${R.stats.exhaustive}`);
  summary.push({ stage: sg.name, hp: R.best.hpAtKill, exhaustive: R.stats.exhaustive, expanded: R.stats.expanded });
  if (!ok) break;
  prefix = prefix.concat(R.best.actions);
}
// 从头回放全部前缀做验证
const world0 = buildWorld({});
const S0 = makeSolver(world0, {});
let rp = null;
try { rp = S0.replay(prefix); } catch (e) { console.log('回放失败：' + e.message); }
if (rp) {
  const kill = rp.route.find(a => a.hpAtKill != null);
  console.log(`[${t()}] 全路线回放：动作 ${prefix.length} 步，${kill ? '队长死亡时 hp ' + kill.hpAtKill + '，' : ''}终态 hp ${rp.final.hp} atk/def ${rp.final.atk}/${rp.final.def}`);
  fs.writeFileSync(__dirname + '/milestone_route.json', JSON.stringify({ summary, actions: prefix, route: rp.route.map(a => ({ floor: a.floor, x: a.x, y: a.y, label: a.label, dmg: a.dmg, hpAfter: a.hpAfter, atk: a.atkAfter, def: a.defAfter, keys: a.keys, auto: a.auto, hpAtKill: a.hpAtKill })) }, null, 0));
  let lo = Infinity, loAt = null;
  for (const a of rp.route) { if (a.hpAfter - 0 < lo) { lo = a.hpAfter; loAt = a; } }
  console.log(`最低点 hp ${lo} 在 ${loAt.floor} (${loAt.x},${loAt.y}) ${loAt.label}`);
  console.log('--- 路线（仅显示损血>0 或拿装备的步骤）---');
  for (const a of rp.route) { const eq = (a.auto || []).filter(x => /sword1|shield1/.test(x)).join(','); if (a.dmg > 0 || eq || a.hpAtKill != null) console.log(`${a.floor} (${a.x},${a.y}) ${a.label} -${a.dmg} -> ${a.hpAfter} [${a.atkAfter}/${a.defAfter}]${eq ? ' ' + eq : ''}${a.hpAtKill != null ? ' ←队长' : ''}`); }
}
