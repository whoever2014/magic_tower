'use strict';
// 单目标搜索：从开局到指定格子，血量最大化。用法：node tools/solver/goal.js --floor main4 --x 2 --y 9 --secs 180 [--lazy]
const { buildWorld } = require('./world');
const { makeSolver } = require('./search');
const fs = require('fs');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const goal = { floor: arg('--floor', 'floor_4'), x: +arg('--x', '2'), y: +arg('--y', '9') };
const SECS = +arg('--secs', '180'), LAZY = process.argv.includes('--lazy');
const floorsArg = arg('--floors', '');
const floors = floorsArg ? (/^floor_(\d+)-floor_(\d+)$/.test(floorsArg) ? (m => Array.from({ length: +m[2] - +m[1] + 1 }, (_, i) => 'floor_' + (+m[1] + i)))(floorsArg.match(/^floor_(\d+)-floor_(\d+)$/)) : floorsArg.split(',')) : null;
const world = buildWorld(Object.assign({ goalCell: goal }, floors ? { floors } : {}));
if (floors) console.log('限定楼层：' + floors.join(','));
const T0 = Date.now();
console.log(`目标 ${goal.floor}(${goal.x},${goal.y})，DFS 分支定界 ${SECS}s，懒惰房延后=${LAZY}`);
const S = makeSolver(world, { mode: 'dfs', timeBudgetMs: SECS * 1000, lazyDefer: LAZY, verbose: true });
const R = S.solve();
console.log(`\n结果：${R.best.actions ? '到达时 hp ' + R.best.hpAtKill : '未找到'} | 展开 ${R.stats.expanded} | memo ${R.stats.keys} | 穷尽=${R.stats.exhaustive} | 用时 ${((Date.now() - T0) / 1000).toFixed(0)}s`);
if (R.best.actions) {
  const rp = S.replay(R.best.actions);
  fs.writeFileSync(__dirname + '/goal_route.json', JSON.stringify({ goal, hp: R.best.hpAtKill, exhaustive: R.stats.exhaustive, actions: R.best.actions }, null, 0));
  console.log('--- 路线 ---');
  for (const a of rp.route) { if (a.type === 'start') continue; console.log(`${a.floor} (${a.x},${a.y}) ${a.label} -${a.dmg} -> hp ${a.hpAfter} [${a.atkAfter}/${a.defAfter}] 钥匙 ${a.keys.join('/')}${a.auto && a.auto.length ? '  | ' + a.auto.join('; ') : ''}`); }
  console.log(`终态 hp ${rp.final.hp} atk/def ${rp.final.atk}/${rp.final.def} 钥匙 ${rp.final.yk}/${rp.final.bk}/${rp.final.rk}`);
}
