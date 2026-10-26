'use strict';
// 战斗公式：复刻 project/plugins.js battle_enemyInfo / battle_heroInfo / battle_heroAttack / battle_enemyAttack
// 适用范围：无 proof 章、无 antimage*、无 hasCross、atkm 临界无实际效果（代码里只把 <=0 归 0）。
// 流程（plugins.js 1206-1223 行）：while(isBattling){ 勇士攻击; 怪物攻击 }，怪物血量<=0 时 battle_battling_draw 插入 break，
// 本回合怪物不再反击；勇士 hp<=0 直接 lose，所以要求 总伤 < 当前 hp。

function hasSpecial(special, test) {
  if (special == null) return false;
  if (Array.isArray(special)) return special.indexOf(test) >= 0;
  if (typeof special === 'number') return special === test;
  return false;
}

// 返回 { ok, hpd, per, times, rounds, damage }
function battle(enemy, atk, def) {
  const hpd = Math.max(0, atk - enemy.def);            // battle_heroInfo: hero_per_damage
  if (hpd <= 0) return { ok: false, hpd: 0, per: 0, times: 0, rounds: Infinity, damage: Infinity };
  let per;
  if (hasSpecial(enemy.special, 2)) per = enemy.atk;   // 魔攻：无视防御
  else per = Math.max(0, enemy.atk - def);             // 物攻
  if (hasSpecial(enemy.special, 8)) per += atk * 0.008; // 反击（1-10 层无）
  let times = 1;
  if (hasSpecial(enemy.special, 4)) times = 2;
  if (hasSpecial(enemy.special, 5)) times = 3;
  if (hasSpecial(enemy.special, 6)) times = enemy.n || 4;
  if (enemy.cri != null && enemy.cri > 0) per += Math.ceil(enemy.cri / 100 * per);
  const rounds = Math.ceil(enemy.hp / hpd);            // 勇士需要出手的回合数
  const damage = (rounds - 1) * per * times;           // 最后一回合怪物已死，不反击
  return { ok: true, hpd, per, times, rounds, damage };
}

module.exports = { battle, hasSpecial };
