/**
 * 魔塔最优路径搜索算法
 * 找出0-10层的最优通关路线
 *
 * 关键策略：先收集宝石，再打怪物
 */

const fs = require('fs');
const path = require('path');

// ==================== 数据加载 ====================

function loadEnemys() {
    const content = fs.readFileSync(path.join(__dirname, '../project/enemys.js'), 'utf8');
    const match = content.match(/var\s+\w+\s*=\s*(\{[\s\S]*\})/);
    return eval('(' + match[1] + ')');
}

function loadFloorMap(floorId) {
    const content = fs.readFileSync(path.join(__dirname, `../project/floors/${floorId}.js`), 'utf8');
    const mapMatch = content.match(/"map":\s*\[([\s\S]*?)\],\s*"firstArrive"/);
    if (!mapMatch) return null;
    return eval('[' + mapMatch[1] + ']');
}

const enemys = loadEnemys();

// ==================== 常量定义 ====================

// 物品数值（来自 items.js 和 data.js）
const VALUES = {
    redJewel: 1,      // 红宝石 ATK+1
    blueJewel: 1,     // 蓝宝石 DEF+1
    redPotion: 50,    // 伤药 HP+50
    bluePotion: 200,  // 高级伤药 HP+200
    sword1: 10,       // 铁剑 ATK+10
    shield1: 10,      // 铁盾 DEF+10
};

const ITEM_IDS = {
    21: 'yellowKey', 22: 'blueKey', 23: 'redKey',
    27: 'redJewel', 28: 'blueJewel',
    31: 'redPotion', 32: 'bluePotion',
    35: 'sword1', 36: 'shield1',
};

const ENEMY_MAP = {
    201: 'greenSlime', 202: 'redSlime', 205: 'bat',
    209: 'skeleton', 210: 'skeletonSoilder', 211: 'skeletonCaptain',
    253: 'grayPriest', 221: 'yellowGuard', 222: 'blueGuard',
    223: 'redGuard', 366: 'skeletonSwordsman',
};

// ==================== 战斗计算 ====================

function calcDamage(heroAtk, heroDef, enemyId) {
    const e = enemys[enemyId];
    if (!e || !e.hp) return { damage: 0, canFight: true, name: 'unknown' };

    const heroPerDamage = Math.max(heroAtk - e.def, 0);
    if (heroPerDamage <= 0) {
        return { damage: Infinity, canFight: false, name: e.name, reason: `ATK${heroAtk} <= DEF${e.def}` };
    }

    // 计算怪物每回合伤害
    let perDamage;
    const special = Array.isArray(e.special) ? e.special[0] : e.special;

    if (special === 2) {
        // 魔法攻击，无视防御
        perDamage = e.atk;
    } else {
        perDamage = Math.max(e.atk - heroDef, 0);
    }

    // 暴击加成
    if (e.cri > 0) {
        perDamage += Math.ceil(e.cri / 100 * perDamage);
    }

    // 多重攻击
    let monTurn = 1;
    if (special === 4) monTurn = 2;
    if (special === 5) monTurn = 3;
    if (special === 6) monTurn = 4;

    // 计算回合数和总伤害
    const turns = Math.ceil(e.hp / heroPerDamage);

    // 先攻怪物多打一回合
    const damage = special === 1
        ? perDamage * monTurn * turns
        : perDamage * monTurn * (turns - 1);

    return {
        damage,
        canFight: true,
        name: e.name,
        turns,
        perDamage: perDamage * monTurn,
        enemyHp: e.hp,
        enemyAtk: e.atk,
        enemyDef: e.def
    };
}

// ==================== 地图分析 ====================

function analyzeFloor(floorId) {
    const map = loadFloorMap(floorId);
    if (!map) return null;

    const items = [];
    const monsters = [];
    const doors = { yellow: 0, blue: 0, red: 0 };

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[0].length; x++) {
            const tile = map[y][x];

            if (ITEM_IDS[tile]) {
                items.push({ x, y, id: tile, type: ITEM_IDS[tile] });
            }
            if (ENEMY_MAP[tile]) {
                monsters.push({ x, y, id: tile, enemyId: ENEMY_MAP[tile] });
            }
            if (tile === 81) doors.yellow++;
            if (tile === 82) doors.blue++;
            if (tile === 83) doors.red++;
        }
    }

    return { floorId, items, monsters, doors };
}

// ==================== 主模拟 ====================

function simulateOptimalPath() {
    console.log('='.repeat(70));
    console.log('魔塔 0-10层 最优路径分析');
    console.log('策略：先收集所有宝石和装备，再按最优顺序打怪');
    console.log('='.repeat(70));

    // 收集所有楼层数据
    const floors = [];
    for (let i = 0; i <= 10; i++) {
        floors[i] = analyzeFloor(`main${i}`);
    }

    // ==================== 第一步：统计所有资源 ====================
    console.log('\n【第一步】统计0-10层所有资源\n');

    let totalItems = {
        redJewel: 0, blueJewel: 0,
        redPotion: 0, bluePotion: 0,
        sword1: 0, shield1: 0,
        yellowKey: 0, blueKey: 0, redKey: 0
    };

    let allMonsters = [];

    for (let i = 0; i <= 10; i++) {
        const f = floors[i];

        f.items.forEach(item => {
            if (totalItems[item.type] !== undefined) {
                totalItems[item.type]++;
            }
        });

        f.monsters.forEach(m => {
            // 跳过2F的中级/高级守卫（可选路线）
            if (i === 2 && (m.enemyId === 'blueGuard' || m.enemyId === 'redGuard')) {
                return;
            }
            allMonsters.push({ ...m, floor: i });
        });

        console.log(`Main${i}: 红${f.items.filter(x=>x.type==='redJewel').length}蓝${f.items.filter(x=>x.type==='blueJewel').length}宝石, ` +
                    `伤药${f.items.filter(x=>x.type==='redPotion').length}+高级${f.items.filter(x=>x.type==='bluePotion').length}, ` +
                    `怪物${f.monsters.length}只, 门:黄${f.doors.yellow}蓝${f.doors.blue}红${f.doors.red}`);
    }

    console.log('\n资源汇总:');
    console.log(`  红宝石: ${totalItems.redJewel} (ATK+${totalItems.redJewel})`);
    console.log(`  蓝宝石: ${totalItems.blueJewel} (DEF+${totalItems.blueJewel})`);
    console.log(`  伤药: ${totalItems.redPotion} (HP+${totalItems.redPotion * VALUES.redPotion})`);
    console.log(`  高级伤药: ${totalItems.bluePotion} (HP+${totalItems.bluePotion * VALUES.bluePotion})`);
    console.log(`  铁剑: ${totalItems.sword1} (ATK+${totalItems.sword1 * VALUES.sword1})`);
    console.log(`  铁盾: ${totalItems.shield1} (DEF+${totalItems.shield1 * VALUES.shield1})`);
    console.log(`  必打怪物: ${allMonsters.length}只`);

    // ==================== 第二步：计算最终属性 ====================
    console.log('\n【第二步】计算最终属性\n');

    const finalAtk = 10 + totalItems.redJewel * VALUES.redJewel + totalItems.sword1 * VALUES.sword1;
    const finalDef = 10 + totalItems.blueJewel * VALUES.blueJewel + totalItems.shield1 * VALUES.shield1;
    const maxHp = 1000 + totalItems.redPotion * VALUES.redPotion + totalItems.bluePotion * VALUES.bluePotion;

    console.log(`初始: ATK=10, DEF=10, HP=1000`);
    console.log(`最终: ATK=${finalAtk}, DEF=${finalDef}, MaxHP=${maxHp}`);

    // ==================== 第三步：模拟渐进式收集 ====================
    console.log('\n【第三步】渐进式属性增长模拟\n');
    console.log('假设：每层先尽量收集宝石，再打能打的怪物\n');

    // 模拟渐进收集
    let currentAtk = 10;
    let currentDef = 10;
    let collectedRed = 0;
    let collectedBlue = 0;
    let hasSword = false;
    let hasShield = false;

    // 记录每层结束时的属性
    const statsPerFloor = [];

    for (let i = 0; i <= 10; i++) {
        const f = floors[i];

        // 收集该层宝石
        f.items.forEach(item => {
            if (item.type === 'redJewel') collectedRed++;
            if (item.type === 'blueJewel') collectedBlue++;
            if (item.type === 'sword1') hasSword = true;
            if (item.type === 'shield1') hasShield = true;
        });

        currentAtk = 10 + collectedRed + (hasSword ? 10 : 0);
        currentDef = 10 + collectedBlue + (hasShield ? 10 : 0);

        statsPerFloor[i] = { atk: currentAtk, def: currentDef };
        console.log(`Main${i}结束: ATK=${currentAtk}, DEF=${currentDef}` +
                    (hasSword && i === 4 ? ' (获得铁剑)' : '') +
                    (hasShield && i === 9 ? ' (获得铁盾)' : ''));
    }

    // ==================== 第四步：计算所有战斗伤害 ====================
    console.log('\n【第四步】战斗伤害计算\n');
    console.log('使用最终属性计算所有怪物伤害（最优情况）:\n');

    let totalDamage = 0;
    let impossibleMonsters = [];
    const damageByType = {};

    // 按怪物类型统计
    allMonsters.forEach(m => {
        const result = calcDamage(finalAtk, finalDef, m.enemyId);

        if (!result.canFight) {
            impossibleMonsters.push({ ...m, ...result });
        } else {
            totalDamage += result.damage;

            const key = result.name;
            if (!damageByType[key]) {
                damageByType[key] = { count: 0, totalDamage: 0, perMonster: result.damage };
            }
            damageByType[key].count++;
            damageByType[key].totalDamage += result.damage;
        }
    });

    // 显示按怪物类型的伤害统计
    console.log('怪物伤害统计（最终属性 ATK=' + finalAtk + ', DEF=' + finalDef + '）:\n');
    console.log('怪物名称        数量    单体伤害    总伤害');
    console.log('-'.repeat(50));

    const sortedTypes = Object.entries(damageByType).sort((a, b) => b[1].totalDamage - a[1].totalDamage);
    for (const [name, data] of sortedTypes) {
        console.log(`${name.padEnd(12)}    ${String(data.count).padStart(3)}    ${String(data.perMonster).padStart(8)}    ${String(data.totalDamage).padStart(8)}`);
    }
    console.log('-'.repeat(50));
    console.log(`${'合计'.padEnd(12)}    ${String(allMonsters.length).padStart(3)}                ${String(totalDamage).padStart(8)}`);

    if (impossibleMonsters.length > 0) {
        console.log('\n⚠️ 无法击败的怪物（即使最终属性）:');
        impossibleMonsters.forEach(m => {
            console.log(`  - ${m.name} (Main${m.floor}): ${m.reason}`);
        });
    }

    // ==================== 第五步：考虑打怪顺序的真实伤害 ====================
    console.log('\n【第五步】考虑属性增长的真实伤害计算\n');

    // 重新计算：假设每层打完怪才能上楼
    let realTotalDamage = 0;
    let realImpossible = [];

    console.log('按楼层顺序计算（每层打完怪后获得该层宝石）:\n');

    let runningAtk = 10;
    let runningDef = 10;

    for (let i = 0; i <= 10; i++) {
        const f = floors[i];
        const floorMonsters = allMonsters.filter(m => m.floor === i);

        if (floorMonsters.length === 0) {
            // 收集宝石
            f.items.forEach(item => {
                if (item.type === 'redJewel') runningAtk++;
                if (item.type === 'blueJewel') runningDef++;
                if (item.type === 'sword1') runningAtk += 10;
                if (item.type === 'shield1') runningDef += 10;
            });
            continue;
        }

        // 先收集本层宝石（假设可以绕过怪物拿到）
        f.items.forEach(item => {
            if (item.type === 'redJewel') runningAtk++;
            if (item.type === 'blueJewel') runningDef++;
            if (item.type === 'sword1') runningAtk += 10;
            if (item.type === 'shield1') runningDef += 10;
        });

        let floorDamage = 0;
        let floorImpossible = [];

        floorMonsters.forEach(m => {
            const result = calcDamage(runningAtk, runningDef, m.enemyId);
            if (!result.canFight) {
                floorImpossible.push({ name: result.name, reason: result.reason });
                realImpossible.push({ floor: i, ...result });
            } else {
                floorDamage += result.damage;
            }
        });

        realTotalDamage += floorDamage;

        const status = floorImpossible.length > 0 ? '⚠️' : '✓';
        console.log(`Main${String(i).padStart(2)} (ATK=${runningAtk}, DEF=${runningDef}): ` +
                    `怪物${floorMonsters.length}只, 伤害${floorDamage} ${status}`);

        if (floorImpossible.length > 0) {
            floorImpossible.forEach(m => console.log(`       无法击败: ${m.name} - ${m.reason}`));
        }
    }

    // ==================== 最终结果 ====================
    console.log('\n' + '='.repeat(70));
    console.log('最终结果');
    console.log('='.repeat(70));

    console.log(`\n最终属性: ATK=${finalAtk}, DEF=${finalDef}`);
    console.log(`最大HP: ${maxHp} (1000 + ${totalItems.redPotion}×50 + ${totalItems.bluePotion}×200)`);
    console.log(`\n总伤害（先拿宝石再打怪）: ${realTotalDamage}`);

    const remainingHp = maxHp - realTotalDamage;
    console.log(`\n通关剩余HP: ${maxHp} - ${realTotalDamage} = ${remainingHp}`);

    if (realImpossible.length > 0) {
        console.log(`\n❌ 存在无法击败的怪物！`);
    } else if (remainingHp <= 0) {
        console.log(`\n❌ 无法通关！HP不足 ${-remainingHp}`);
    } else if (remainingHp < 100) {
        console.log(`\n✅ 紧张通关！剩余HP: ${remainingHp}`);
    } else {
        console.log(`\n✅ 可以通关！剩余HP: ${remainingHp}`);
    }

    return { totalDamage: realTotalDamage, maxHp, remainingHp, finalAtk, finalDef, impossibleMonsters: realImpossible };
}

simulateOptimalPath();
