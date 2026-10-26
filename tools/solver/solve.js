#!/usr/bin/env node
'use strict';
// 入口：node tools/solver/solve.js [--budget 秒] [--beam N] [--no-sens]
// 输出 tools/solver/result.md（中文）并在 stdout 打印主结果。
const fs = require('fs');
const path = require('path');
const { buildWorld, FLOORS } = require('./world');
const { makeSolver } = require('./search');
const { battle } = require('./battle');

const argv = process.argv.slice(2);
const arg = (name, def) => { const i = argv.indexOf(name); return i >= 0 && argv[i + 1] != null ? argv[i + 1] : def; };
const BUDGET_S = parseInt(arg('--budget', '240'));
const BEAM = parseInt(arg('--beam', '400'));
const NO_SENS = argv.includes('--no-sens');
const LAZY = !argv.includes('--no-lazy'); // 懒惰房延后规则（见假设清单）
const MODE_A = arg('--modeA', 'dfs');     // 阶段 A：dfs（分支定界，anytime）或 beam（分层 beam）
const MODE_B = arg('--modeB', 'layered'); // 阶段 B：layered（精确分层 DP）或 dfs
const SENS_LIMIT_MS = 60000;

function fmtT(ms) { return (ms / 1000).toFixed(1) + 's'; }
function log(s) { console.log(s); }

// ---------- 0. 公式用例 ----------
const world = buildWorld();
const gs = battle(world.enemys.greenSlime, 10, 10).damage, sk = battle(world.enemys.skeleton, 10, 10).damage;
if (gs !== 36 || sk !== 250) { console.error(`公式用例失败：greenSlime=${gs}(期望36) skeleton=${sk}(期望250)`); process.exit(1); }
log(`公式用例：10/10 打 greenSlime=${gs}，skeleton=${sk}（通过）`);
if (world.warnings.length) log('建模警告：' + world.warnings.join('；'));

// ---------- 1. 求解 ----------
function runSolve(w, o) {
  const s = makeSolver(w, Object.assign({ lazyDefer: LAZY }, o));
  const r = s.solve();
  return { s, r };
}
const T0 = Date.now();
const budgetA = Math.min(90000, Math.floor(BUDGET_S * 1000 / 3));
log(`阶段 A：${MODE_A === 'dfs' ? 'DFS 分支定界' : 'beam=' + BEAM}${LAZY ? '，懒惰房延后' : ''} 预算 ${fmtT(budgetA)} 求初始解…`);
const A = runSolve(world, MODE_A === 'dfs' ? { mode: 'dfs', timeBudgetMs: budgetA } : { beam: BEAM, timeBudgetMs: budgetA });
log(`  A: 队长死亡时 hp=${A.r.best.hpAtKill}, 收完 hp=${A.r.best.hpAfter}, 展开 ${A.r.stats.expanded}, 键 ${A.r.stats.keys}, 用时 ${fmtT(A.r.stats.elapsedMs)}, 穷尽=${A.r.stats.exhaustive}`);
const budgetB = Math.max(10000, BUDGET_S * 1000 - (Date.now() - T0) - 5000);
log(`阶段 B：${MODE_B === 'dfs' ? 'DFS 分支定界' : '精确分层 DP'}（以 A 为上界剪枝）预算 ${fmtT(budgetB)}…`);
const B = runSolve(world, { mode: MODE_B === 'dfs' ? 'dfs' : undefined, timeBudgetMs: budgetB, incumbent: A.r.best.hpAtKill });
log(`  B: 更优解 ${B.r.best.actions ? 'hp=' + B.r.best.hpAtKill : '无（未超过 A）'}, 展开 ${B.r.stats.expanded}, 键 ${B.r.stats.keys}, 用时 ${fmtT(B.r.stats.elapsedMs)}, 穷尽=${B.r.stats.exhaustive}${B.r.stats.timedOut ? '（超时）' : ''}`);

let winner, winnerLabel, exhaustive = B.r.stats.exhaustive;
if (B.r.best.actions && (B.r.best.hpAtKill > A.r.best.hpAtKill || (B.r.best.hpAtKill === A.r.best.hpAtKill && B.r.best.hpAfter > A.r.best.hpAfter))) { winner = B; winnerLabel = `精确 DP（${exhaustive ? '穷尽' : '预算内非穷尽'}）`; }
else { winner = A; const an = MODE_A === 'dfs' ? 'DFS 分支定界' : `beam=${BEAM}`; winnerLabel = exhaustive ? `${an} 初始解（阶段 B 已穷尽且未找到更优 → 即最优）` : `${an}（阶段 B 未在预算内穷尽 → 非穷尽）`; }
// ---------- 1b. 若 1000 初始 hp 下无解：探测最低可行初始 hp（同样方法，非穷尽） ----------
let infeasible = null;
if (!winner.r.best.actions) {
  log('\n在初始 hp=1000 下未找到任何可行路线。改为探测"最低可行初始 hp"：先在初始 hp=3000 下求一条路线（beam=1000，预算 150s），取其全程最低点推出所需初始 hp，再以该值为新起点重复，直到不再下降…');
  const probes = [];
  let hp0 = 3000;
  for (let round = 0; round < 4; round++) {
    const w2 = buildWorld({ heroPatch: { hp: hp0 } });
    const R = runSolve(w2, { beam: 1000, timeBudgetMs: 150000 });
    const ok = !!R.r.best.actions;
    let need = null, verified = false;
    if (ok) {
      const rp = R.s.replay(R.r.best.actions); let minHp = Infinity; for (const a of rp.route) if (a.type === 'kill') minHp = Math.min(minHp, a.hpBefore - a.dmg); need = hp0 - minHp + 1;
      try { makeSolver(buildWorld({ heroPatch: { hp: need } }), {}).replay(R.r.best.actions); verified = true; } catch (e) { verified = false; }
    }
    probes.push({ hp0, ok, hpAtKill: R.r.best.hpAtKill, need, verified, R, w2 });
    log(`  初始 hp=${hp0}: ${ok ? '可行，队长死亡时 hp=' + R.r.best.hpAtKill + '，该路线最低需初始 hp ' + need + '（以 ' + need + ' 起点回放' + (verified ? '通过' : '失败') + '）' : '未找到'}（${fmtT(R.r.stats.elapsedMs)}）`);
    if (!ok) break;
    if (need >= hp0) break;
    hp0 = need;
  }
  const okProbes = probes.filter(p => p.ok && p.verified);
  const first = okProbes.length ? okProbes.reduce((a, b) => (b.need < a.need ? b : a)) : null;
  if (!first) { console.error('即使初始 hp=3000 也未找到路线，模型可能有误'); process.exit(2); }
  infeasible = { probes, first };
  winner = first.R; winnerLabel = `初始 hp=1000 未找到路线；以下为初始 hp=${first.hp0} 下 beam=1000 找到的路线（非穷尽），该路线最低需初始 hp ${first.need}`;
  exhaustive = false;
}
const solver = winner.s;
const { route, final } = solver.replay(winner.r.best.actions);
const START_HP = infeasible ? infeasible.first.hp0 : world.hero0.hp;
const capRec = route.find(a => a.hpAtKill != null);
const hpAtKill = capRec.hpAtKill, hpAfter = final.hp;
log(`\n主结果${infeasible ? '（初始 hp=' + START_HP + '）' : ''}：骷髅队长死亡时 hp=${hpAtKill}；收完 main10 可达道具后 hp=${hpAfter}；最终 atk=${final.atk} def=${final.def} 钥匙 黄${final.yk} 蓝${final.bk} 红${final.rk}`);
log(`路线动作数 ${route.length - 1}，来源：${winnerLabel}`);

// ---------- 2. 逐层表 ----------
const fi = {}; FLOORS.forEach((f, i) => fi[f] = i);
const cn = f => f === 'floor_0' ? '入口(0F)' : f.replace('floor_', '') + 'F';
const segments = [];
for (let i = 1; i < route.length; i++) {
  const a = route[i];
  const last = segments[segments.length - 1];
  if (!last || last.floor !== a.floor) segments.push({ floor: a.floor, first: a, last: a, acts: [a] });
  else { last.last = a; last.acts.push(a); }
}
const killsByFloor = {}; FLOORS.forEach(f => killsByFloor[f] = []);
for (const a of route) {
  if (a.type === 'kill') killsByFloor[a.floor].push(`${a.label}(${a.x},${a.y})-${a.dmg}`);
  for (const l of a.auto) { const m = l.match(/零伤击杀 (\w+) (floor_\d+)\((\d+),(\d+)\)/); if (m) killsByFloor[m[2]].push(`${m[1]}(${m[3]},${m[4]})-0`); }
}
const skippedByFloor = {};
for (const f of FLOORS) skippedByFloor[f] = world.blockers.filter(b => b.kind === 'enemy' && b.floor === f && !final.res.get(b.idx) && !b.isCaptain0).map(b => `${b.enemyId}(${b.x},${b.y})`);

// ---------- 3. 敏感度 ----------
let sens = null, sensNote = '';
if (!NO_SENS) {
  const baseMs = winner.r.stats.elapsedMs;
  const reopt = baseMs <= SENS_LIMIT_MS && !infeasible;
  const types = world.enemyIdsSeen.filter(id => world.blockers.some(b => b.enemyId === id && b.fightable !== false));
  sens = [];
  const deltas = [['atk', 1], ['def', 1], ['hp', 10]];
  for (const id of types) {
    const row = { id, name: world.enemys[id].name, base: world.enemys[id], cells: [] };
    for (const [k, d] of deltas) {
      const patch = { [id]: { [k]: world.enemys[id][k] + d } };
      const w2 = buildWorld({ enemyPatch: patch, heroPatch: { hp: START_HP } });
      let val, note = '';
      if (reopt) {
        const o = infeasible ? { beam: 300, timeBudgetMs: SENS_LIMIT_MS } : winner === B ? { mode: MODE_B === 'dfs' ? 'dfs' : undefined, timeBudgetMs: SENS_LIMIT_MS } : (MODE_A === 'dfs' ? { mode: 'dfs', timeBudgetMs: SENS_LIMIT_MS } : { beam: BEAM, timeBudgetMs: SENS_LIMIT_MS });
        const R = runSolve(w2, o);
        val = R.r.best.hpAtKill; if (!R.r.stats.exhaustive) note = '*';
      } else {
        try { const rp = makeSolver(w2, {}).replay(winner.r.best.actions); val = rp.route.find(a => a.hpAtKill != null).hpAtKill; }
        catch (e) { val = null; note = '路线失效'; }
      }
      row.cells.push({ k, d, val, note });
    }
    sens.push(row);
  }
  sensNote = reopt ? `每格为重新求解（同基准方法，单次预算 ${SENS_LIMIT_MS / 1000}s；* 表示该次非穷尽）后的最优"队长死亡时 hp"相对基准的变化。`
    : `${infeasible ? '基准为"初始 hp=1000 无解"，无法按原定义重新求解；' : `基准求解耗时 ${fmtT(baseMs)} > 60s，按要求跳过逐项重新求解；`}下表改为**固定基准路线回放**（怪物属性变动后按同一动作序列重算伤害，不重新优化）的"队长死亡时 hp"变化，仅反映路线不变时的影响，"路线失效"表示该路线在新属性下某步打不动/血不够。`;
}

// ---------- 4. 写 result.md ----------
const L = [];
L.push('# 新新魔塔 main0→main10 最优路线求解结果');
L.push('');
L.push(`生成时间：${new Date().toISOString()}；命令：\`node tools/solver/solve.js${argv.length ? ' ' + argv.join(' ') : ''}\``);
L.push('');
L.push('## 1. 主结果');
L.push('');
if (infeasible) {
  L.push(`- **结论：在本模型与约束（不用商店、不用传送器）下，初始 hp=1000 时未找到任何能打死骷髅队长的路线**（阶段 A/B 共展开 ${A.r.stats.expanded + B.r.stats.expanded} 个状态，均非穷尽，故这是"未找到"而非"证明不存在"）。`);
  L.push(`- 探测（beam=1000，每轮 150s）：${infeasible.probes.map(p => `初始 hp=${p.hp0}→${p.ok ? '可行(队长死亡时 hp ' + p.hpAtKill + '，该路线最低需初始 hp ' + p.need + ')' : '未找到'}`).join('；')}。`);
  L.push(`- 下面的路线来自初始 hp=${START_HP}（beam=1000，非穷尽）；按该路线全程最低点推算，**最低需要初始 hp ${infeasible.first.need}** 才能保证每场战斗后 hp≥1（以 ${infeasible.first.need} 为起点回放该路线：${infeasible.first.verified ? '通过' : '失败'}）。这只是"存在性"证据：更低的初始 hp 是否可行未被证明或证伪。`);
}
L.push(`- **骷髅队长死亡那一刻剩余 hp：${hpAtKill}**${infeasible ? `（初始 hp=${START_HP} 起算；折算到初始 hp=1000 为 ${hpAtKill - (START_HP - 1000)}，即不可行）` : ''}`);
L.push(`- **收完 main10 所有可达道具（含战后刷出的 4 蓝瓶、4 红宝石、4 蓝宝石、4 黄钥匙）后 hp：${hpAfter}**`);
L.push(`- 最终 atk=${final.atk}，def=${final.def}，剩余钥匙：黄 ${final.yk} / 蓝 ${final.bk} / 红 ${final.rk}`);
L.push(`- 求解状态：${winnerLabel}；懒惰房延后规则=${LAZY ? '开' : '关'}。阶段 A（${MODE_A === 'dfs' ? 'DFS 分支定界' : 'beam=' + BEAM}）：展开 ${A.r.stats.expanded} 态、${A.r.stats.keys} 键、${fmtT(A.r.stats.elapsedMs)}；阶段 B（${MODE_B === 'dfs' ? 'DFS 分支定界' : '精确分层 DP'}，预算 ${fmtT(budgetB)}）：展开 ${B.r.stats.expanded} 态、${B.r.stats.keys} 键、${fmtT(B.r.stats.elapsedMs)}，穷尽=${B.r.stats.exhaustive}${B.r.stats.timedOut ? '（超时）' : ''}，上界剪枝 ${B.r.stats.pruneBound} 次，无收益剪枝 ${B.r.stats.pruneUseless} 次。`);
if (!exhaustive) L.push(`- **注意：搜索未穷尽**，上述为预算内找到的最优，不保证全局最优。`);
L.push('');
L.push('## 2. 逐层表');
L.push('');
L.push('按路线中"连续停留在同一层的动作段"列出（有跨层回头时同一层会出现多次）。进入/离开数值为该段第一个动作前 / 最后一个动作（含其自动收集）后的 hp/atk/def。');
L.push('');
L.push('| 段 | 楼层 | 进入 hp/atk/def | 离开 hp/atk/def | 本段显式击杀（怪(x,y)-损血） |');
L.push('|---|---|---|---|---|');
segments.forEach((sg, i) => {
  const kills = sg.acts.filter(a => a.type === 'kill').map(a => `${a.label}(${a.x},${a.y})-${a.dmg}`).join('、') || '—';
  L.push(`| ${i + 1} | ${cn(sg.floor)} | ${sg.first.hpBefore}/${sg.first.atk}/${sg.first.def} | ${sg.last.hpAfter}/${sg.last.atkAfter}/${sg.last.defAfter} | ${kills} |`);
});
L.push('');
L.push('每层汇总（含闭包中零伤自动击杀，标 -0）：');
L.push('');
L.push('| 楼层 | 击杀 | 未杀（跳过） |');
L.push('|---|---|---|');
for (const f of FLOORS) L.push(`| ${cn(f)} | ${killsByFloor[f].join('、') || '—'} | ${skippedByFloor[f].join('、') || '—'} |`);
L.push('');
L.push('## 3. 路线（动作序列）');
L.push('');
L.push('"自动"列是该动作之后闭包自动完成的事：捡道具、撞暗门、零伤击杀、零代价开门（门后直接拿回同色钥匙）、NPC/计数事件。');
L.push('');
L.push('| # | 楼层 | 坐标 | 动作 | 损血 | 步后 hp | atk/def | 钥匙(黄/蓝/红) | 自动 |');
L.push('|---|---|---|---|---|---|---|---|---|');
route.forEach((a, i) => {
  const act = a.type === 'kill' ? `打 ${a.label}（${world.enemys[a.label].name}）${a.hpAtKill != null ? ' **←队长死亡**' : ''}` : a.type === 'open' ? `开${a.label}` : a.label;
  L.push(`| ${i} | ${cn(a.floor)} | (${a.x},${a.y}) | ${act} | ${a.dmg} | ${a.hpAfter} | ${a.atkAfter}/${a.defAfter} | ${a.keys.join('/')} | ${a.auto.join('；').replace(/\|/g, '/') || '—'} |`);
});
L.push('');
L.push('## 4. 敏感度');
L.push('');
if (sens) {
  L.push(sensNote);
  L.push('');
  L.push(`基准：队长死亡时 hp=${hpAtKill}。`);
  L.push('');
  L.push('| 怪物 | 基准(hp/atk/def) | atk+1 | def+1 | hp+10 |');
  L.push('|---|---|---|---|---|');
  for (const r of sens) {
    const c = r.cells.map(c => c.val == null ? c.note : `${c.val - hpAtKill >= 0 ? '+' : ''}${c.val - hpAtKill}${c.note}`);
    L.push(`| ${r.id}（${r.name}） | ${r.base.hp}/${r.base.atk}/${r.base.def} | ${c.join(' | ')} |`);
  }
} else L.push('已跳过（--no-sens）。');
L.push('');
L.push('## 5. 求解所依据的文件状态');
L.push('');
L.push('求解器每次运行都直接读取 project/ 下的当前文件。本次会话期间 project/floors 下多个楼层文件在被实时编辑（mtime 在运行当天），因此结果只对下列文件状态有效：');
L.push('');
L.push('| 文件 | md5 | 修改时间 |');
L.push('|---|---|---|');
{
  const crypto = require('crypto');
  for (const f of FLOORS.map(x => `project/floors/${x}.js`).concat(['project/enemys.js', 'project/items.js', 'project/data.js'])) {
    const fp = path.join(__dirname, '..', '..', f);
    const buf = fs.readFileSync(fp); const st = fs.statSync(fp);
    L.push(`| ${f} | ${crypto.createHash('md5').update(buf).digest('hex')} | ${st.mtime.toISOString()} |`);
  }
}
L.push('');
L.push('## 6. 建模假设与未覆盖项');
L.push('');
[
  '战斗公式按 project/plugins.js 的 battle_enemyInfo/battle_heroInfo/主循环复刻：勇士先手；每回合勇士打 max(atk−怪def,0)，为 0 则不可战；怪物血量≤0 立即 break（不反击）；怪物每击伤害 = 魔攻(special 含 2)时为怪 atk，否则 max(怪atk−def,0)；每回合次数：special 含 4→2、含 5→3、含 6→enemy.n||4、否则 1；总伤 = (ceil(怪hp/勇士每击)−1)×每击×次数。战斗中勇士 hp≤0 判负，因此要求总伤 < 当前 hp（严格）。',
  'atkm/defm（攻防临界）在实战代码中无效（defm 行被注释，atkm 只把 ≤0 归 0），cri 在 1-10 层全为 0，proof 章/antimage/十字架均未获得，故忽略。预览公式 getDamageInfo 在此条件下与实战一致。',
  '道具效果按 items.js itemEffect：红/蓝宝石 ±1（item_ratio 全为 1），红瓶 +50，蓝瓶 +200，铁剑 atk+10，铁盾 def+10；金币与经验不建模（商店均不使用）。',
  '可达区域内的道具一律自动拾取；walldoor2 暗门自动撞开；楼梯按各层 changeFloor 免费双向连通（含 stair:"upFloor/downFloor" 的自动定位）；通往 base1/MOTA1 的出口不纳入。',
  '自动执行的仅限零代价动作：伤害为 0 的怪、开门后闭包内直接拿回 ≥1 把同色钥匙的门、捡道具/暗门/NPC 对话。任何掉血的怪、净耗钥匙的门都进入分支搜索。',
  '事件编码：main1 小偷（3 史莱姆全灭后开 (11,2) +2 黄钥匙）；main2 两中级守卫全灭开 9 扇铁门，门后 4 NPC 给 +8 攻/+8 防/+1000 血/+1000 金；main5 (9,4)(11,4) 全灭开 (10,3)；main7 (5,1)(5,3) 全灭或老人 (2,2) 对话开 (4,2)；main9 (7,1)(7,3) 全灭开 (8,2)；main10 踩 (6,7) 触发（队长 (6,6)→(6,2)，(6,8)(6,4) 变机关门，(4,5)(8,5) 开），8 怪全灭开 (6,4)，队长死后开 (6,8)、现 (6,1) 楼梯、刷 4 红宝石/4 蓝宝石/4 蓝瓶/4 黄钥匙。enable:false 的块（main2 高级守卫与隐藏 NPC、main0/main10 小偷、main9 星门等）视为不存在。',
  '禁入：main3 (6,1)(6,2) 当墙，(6,3) 蓝门视为无用也当墙；main7 (6,9) 战斗之神不使用；main8 (10,10) 老人只给传送器，忽略；楼层传送器不使用。',
  '懒惰房延后规则（默认开，--no-lazy 关闭）：把"截断区域里只有血瓶/钥匙、没有属性道具/事件怪/目标"的阻挡物记为懒惰房，仅当没有任何结构性动作可行时才进入。依据是怪物代价随攻防单调下降而血瓶/钥匙价值恒定，推迟进入不吃亏；唯一例外是"某结构性动作做完后该懒惰房变得打不起"，此规则会漏掉这种先拿瓶再打的次序，因此开启该规则时结果不保证全局最优（报告中标明）。',
  '搜索：状态键=(已解决阻挡物集合, 标志位)，同键只保留最大 hp（atk/def/钥匙由集合唯一决定）；按 |集合| 分层的 DP 保证每键只展开一次；上界剪枝 = 当前 hp + 未拿血瓶（按守怪在满属性下的最低代价打折）− 必杀怪在满属性下的最低代价。无收益动作（不新增可达格/道具/前沿/事件进度）剪掉。若报告标注"非穷尽"，说明精确 DP 未在时间预算内跑完，结果来自 beam 搜索（每层按 hp+40×(atk+def) 保留前 N 个状态）。',
  '中级守卫（def 148）在 1-10 层属性下打不动，main2 NPC 奖励实际不可达；高级守卫隐藏不出现。',
  '未建模：怪物支援/光环等高级机制（1-10 层无）、金币/经验、队长死后再用新钥匙开 main10 剩余门（"收完可达道具"只含无需再开门/再战斗即可到达的道具）。',
].forEach(s => L.push('- ' + s));
L.push('');
const out = path.join(__dirname, 'result.md');
fs.writeFileSync(out, L.join('\n'));
log(`\n已写入 ${out}`);
