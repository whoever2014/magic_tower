'use strict';
// 精确求解驱动：阶段 A DFS 分支定界找初始解 → 阶段 B 分层 DP（以 A 为下界）。带可行性剪枝。
// 用法：node --max-old-space-size=12000 tools/solver/run_exact.js [--dfs 秒] [--dp 秒] [--no-lazy] [--hp 初始血]
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const fs = require('fs');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const DFS_S = parseInt(arg('--dfs', '240')), DP_S = parseInt(arg('--dp', '1200'));
const LAZY = !process.argv.includes('--no-lazy');
const HP0 = parseInt(arg('--hp', '0'));
const world = buildWorld(HP0 ? { heroPatch: { hp: HP0 } } : {});
const T0 = Date.now(); const t = () => ((Date.now() - T0) / 1000).toFixed(0) + 's';
console.log(`[${t()}] 初始 hp=${world.hero0.hp} lazy=${LAZY} | 阶段 A DFS ${DFS_S}s`);
const A = makeSolver(world, { mode: 'dfs', timeBudgetMs: DFS_S * 1000, lazyDefer: LAZY, verbose: true }).solve();
console.log(`[${t()}] A: hpAtKill=${A.best.hpAtKill} expanded=${A.stats.expanded} pruneBound=${A.stats.pruneBound} exhaustive=${A.stats.exhaustive}`);
console.log(`[${t()}] 阶段 B 分层 DP ${DP_S}s（incumbent=${A.best.hpAtKill}）`);
const B = makeSolver(world, { timeBudgetMs: DP_S * 1000, incumbent: A.best.hpAtKill, lazyDefer: LAZY, verbose: true }).solve();
console.log(`[${t()}] B: hpAtKill=${B.best.hpAtKill} expanded=${B.stats.expanded} keys=${B.stats.keys} pruneBound=${B.stats.pruneBound} exhaustive=${B.stats.exhaustive}`);
const W = (B.best.hpAtKill >= A.best.hpAtKill) ? B : A;
const out = { hp0: world.hero0.hp, lazy: LAZY, A: { hpAtKill: A.best.hpAtKill, stats: A.stats }, B: { hpAtKill: B.best.hpAtKill, stats: B.stats },
  best: { hpAtKill: W.best.hpAtKill, hpAfter: W.best.hpAfter, actions: W.best.actions } };
fs.writeFileSync(__dirname + '/exact_result.json', JSON.stringify(out, null, 1));
if (W.best.actions) {
  console.log('--- 路线 ---');
  for (const a of W.best.actions) console.log(`${a.floor} (${a.x},${a.y}) ${a.label} -${a.dmg} -> hp ${a.hpAfter} atk/def ${a.atkAfter}/${a.defAfter}${a.hpAtKill != null ? ' ←队长死亡 hp ' + a.hpAtKill : ''}`);
} else console.log('未找到可行路线');
