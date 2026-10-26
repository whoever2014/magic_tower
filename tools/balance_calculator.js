/**
 * 魔塔0-10层平衡计算器
 * 计算最优路线和精确HP消耗
 */

const fs = require('fs');
const path = require('path');

// ==================== 数据加载 ====================

// 加载怪物数据
const enemysPath = path.join(__dirname, '../project/enemys.js');
const enemysContent = fs.readFileSync(enemysPath, 'utf8');
const enemysMatch = enemysContent.match(/var\s+\w+\s*=\s*(\{[\s\S]*\})/);
const enemys = eval('(' + enemysMatch[1] + ')');

// 加载物品效果
const itemsPath = path.join(__dirname, '../project/items.js');
const itemsContent = fs.readFileSync(itemsPath, 'utf8');

// 加载data.js获取初始属性和values
const dataPath = path.join(__dirname, '../project/data.js');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// 提取values
const valuesMatch = dataContent.match(/"values":\s*(\{[^}]+\})/);
const values = eval('(' + valuesMatch[1] + ')');

// 初始属性
const INIT_HERO = {
    hp: 1000,
    atk: 10,
    def: 10,
    mdef: 0,
    yellowKey: 0,
    blueKey: 0,
    redKey: 0
};

// 物品效果
const ITEM_EFFECTS = {
    27: { type: 'atk', value: values.redJewel },      // 红宝石
    28: { type: 'def', value: values.blueJewel },      // 蓝宝石
    31: { type: 'hp', value: values.redPotion },       // 伤药
    32: { type: 'hp', value: values.bluePotion },      // 高级伤药
    35: { type: 'atk', value: 10 },                    // 铁剑
    36: { type: 'def', value: 10 },                    // 铁盾
    21: { type: 'yellowKey', value: 1 },               // 黄钥匙
    22: { type: 'blueKey', value: 1 },                 // 蓝钥匙
    23: { type: 'redKey', value: 1 },                  // 红钥匙
};

// 门类型
const DOORS = {
    81: 'yellowKey',  // 黄门
    82: 'blueKey',    // 蓝门
    83: 'redKey',     // 红门
};

// 怪物ID映射
const ENEMY_MAP = {
    201: 'greenSlime',
    202: 'redSlime',
    205: 'bat',
    209: 'skeleton',
    210: 'skeletonSoilder',
    211: 'skeletonCaptain',
    253: 'grayPriest',
    221: 'yellowGuard',
    222: 'blueGuard',
    223: 'redGuard',
    366: 'E367',
};

// ==================== 战斗计算 ====================

function calculateDamage(hero, enemy) {
    const enemyData = typeof enemy === 'string' ? enemys[enemy] : enemy;

    if (!enemyData || !enemyData.hp) {
        return { damage: 0, turns: 0, canFight: false };
    }

    const heroAtk = hero.atk;
    const heroDef = hero.def;
    const monHp = enemyData.hp;
    const monAtk = enemyData.atk;
    const monDef = enemyData.def;
    const special = enemyData.special;
    const monCri = enemyData.cri || 0;

    // 勇士每回合伤害
    const heroPerDamage = Math.max(heroAtk - monDef, 0);

    // 无法战斗
    if (heroPerDamage <= 0) {
        return { damage: Infinity, turns: Infinity, canFight: false };
    }

    // 怪物每回合伤害
    let perDamage;
    if (special === 2) {
        // 魔法攻击，无视防御
        perDamage = monAtk;
    } else {
        perDamage = Math.max(monAtk - heroDef, 0);
    }

    // 暴击加成
    if (monCri > 0) {
        perDamage += Math.ceil(monCri / 100 * perDamage);
    }

    // 连击
    let monTurn = 1;
    if (special === 4) monTurn = 2;
    if (special === 5) monTurn = 3;
    if (special === 6) monTurn = 4;

    // 回合数
    const turns = Math.ceil(monHp / heroPerDamage);

    // 总伤害 (勇士先攻，最后一回合杀死怪物不受伤)
    let totalDamage;
    if (special === 1) {
        // 先攻怪物
        totalDamage = perDamage * monTurn * turns;
    } else {
        totalDamage = perDamage * monTurn * (turns - 1);
    }

    return {
        damage: totalDamage,
        turns: turns,
        canFight: true,
        heroPerDamage,
        perDamage,
        monTurn
    };
}

// ==================== 地图解析 ====================

function loadFloor(floorId) {
    const floorPath = path.join(__dirname, `../project/floors/${floorId}.js`);
    const content = fs.readFileSync(floorPath, 'utf8');

    // 提取map数组
    const mapMatch = content.match(/"map":\s*\[([\s\S]*?)\],\s*"firstArrive"/);
    if (!mapMatch) return null;

    const mapStr = '[' + mapMatch[1] + ']';
    const map = eval(mapStr);

    // 提取events
    let events = {};
    const eventsMatch = content.match(/"events":\s*(\{[\s\S]*?\}),\s*"changeFloor"/);
    if (eventsMatch) {
        try {
            // 简化处理，只提取位置信息
            const eventsStr = eventsMatch[1];
            const eventLocations = eventsStr.match(/"(\d+,\d+)":/g);
            if (eventLocations) {
                eventLocations.forEach(loc => {
                    const coords = loc.match(/(\d+),(\d+)/);
                    if (coords) {
                        events[`${coords[1]},${coords[2]}`] = true;
                    }
                });
            }
        } catch (e) {}
    }

    return { map, events, floorId };
}

// ==================== 分析每层 ====================

function analyzeFloor(floorData) {
    const { map, floorId } = floorData;
    const height = map.length;
    const width = map[0].length;

    const items = [];
    const monsters = [];
    const doors = [];
    const stairs = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const tile = map[y][x];

            // 物品
            if (ITEM_EFFECTS[tile]) {
                items.push({ x, y, id: tile, effect: ITEM_EFFECTS[tile] });
            }

            // 怪物
            if (ENEMY_MAP[tile]) {
                const enemyId = ENEMY_MAP[tile];
                const enemyData = enemys[enemyId];
                monsters.push({
                    x, y,
                    id: tile,
                    enemyId,
                    name: enemyData?.name || enemyId,
                    hp: enemyData?.hp,
                    atk: enemyData?.atk,
                    def: enemyData?.def,
                    special: enemyData?.special
                });
            }

            // 门
            if (DOORS[tile]) {
                doors.push({ x, y, id: tile, keyType: DOORS[tile] });
            }

            // 楼梯
            if (tile === 87 || tile === 88) {
                stairs.push({ x, y, type: tile === 87 ? 'down' : 'up' });
            }
        }
    }

    return { floorId, items, monsters, doors, stairs, width, height };
}

// ==================== 主分析 ====================

function analyzeGame() {
    console.log('='.repeat(60));
    console.log('魔塔 0-10层 精确分析');
    console.log('='.repeat(60));

    // 统计所有资源
    let totalItems = {
        redJewel: 0,    // 27
        blueJewel: 0,   // 28
        redPotion: 0,   // 31
        bluePotion: 0,  // 32
        sword: 0,       // 35
        shield: 0,      // 36
        yellowKey: 0,   // 21
        blueKey: 0,     // 22
        redKey: 0,      // 23
    };

    let allMonsters = [];
    let allDoors = { yellow: 0, blue: 0, red: 0 };

    const floors = [];

    for (let i = 0; i <= 10; i++) {
        const floorId = `main${i}`;
        const floorData = loadFloor(floorId);
        if (!floorData) continue;

        const analysis = analyzeFloor(floorData);
        floors.push(analysis);

        console.log(`\n--- ${floorId.toUpperCase()} ---`);

        // 统计物品
        analysis.items.forEach(item => {
            switch(item.id) {
                case 27: totalItems.redJewel++; break;
                case 28: totalItems.blueJewel++; break;
                case 31: totalItems.redPotion++; break;
                case 32: totalItems.bluePotion++; break;
                case 35: totalItems.sword++; break;
                case 36: totalItems.shield++; break;
                case 21: totalItems.yellowKey++; break;
                case 22: totalItems.blueKey++; break;
                case 23: totalItems.redKey++; break;
            }
        });

        // 统计门
        analysis.doors.forEach(door => {
            switch(door.id) {
                case 81: allDoors.yellow++; break;
                case 82: allDoors.blue++; break;
                case 83: allDoors.red++; break;
            }
        });

        // 怪物列表
        if (analysis.monsters.length > 0) {
            console.log('怪物:');
            const monsterCount = {};
            analysis.monsters.forEach(m => {
                monsterCount[m.name] = (monsterCount[m.name] || 0) + 1;
                allMonsters.push(m);
            });
            Object.entries(monsterCount).forEach(([name, count]) => {
                console.log(`  ${name}: ${count}`);
            });
        }

        // 物品列表
        if (analysis.items.length > 0) {
            console.log('物品:');
            const itemCount = {};
            const itemNames = {
                27: '红宝石', 28: '蓝宝石', 31: '伤药', 32: '高级伤药',
                35: '铁剑', 36: '铁盾', 21: '黄钥匙', 22: '蓝钥匙', 23: '红钥匙'
            };
            analysis.items.forEach(item => {
                const name = itemNames[item.id] || `ID:${item.id}`;
                itemCount[name] = (itemCount[name] || 0) + 1;
            });
            Object.entries(itemCount).forEach(([name, count]) => {
                console.log(`  ${name}: ${count}`);
            });
        }

        // 门列表
        if (analysis.doors.length > 0) {
            const doorCount = { yellow: 0, blue: 0, red: 0 };
            analysis.doors.forEach(d => {
                if (d.id === 81) doorCount.yellow++;
                if (d.id === 82) doorCount.blue++;
                if (d.id === 83) doorCount.red++;
            });
            console.log(`门: 黄${doorCount.yellow} 蓝${doorCount.blue} 红${doorCount.red}`);
        }
    }

    // ==================== 总结 ====================

    console.log('\n' + '='.repeat(60));
    console.log('资源总计');
    console.log('='.repeat(60));

    console.log(`\n物品总计:`);
    console.log(`  红宝石: ${totalItems.redJewel} (ATK +${totalItems.redJewel * values.redJewel})`);
    console.log(`  蓝宝石: ${totalItems.blueJewel} (DEF +${totalItems.blueJewel * values.blueJewel})`);
    console.log(`  伤药: ${totalItems.redPotion} (HP +${totalItems.redPotion * values.redPotion})`);
    console.log(`  高级伤药: ${totalItems.bluePotion} (HP +${totalItems.bluePotion * values.bluePotion})`);
    console.log(`  铁剑: ${totalItems.sword} (ATK +${totalItems.sword * 10})`);
    console.log(`  铁盾: ${totalItems.shield} (DEF +${totalItems.shield * 10})`);

    console.log(`\n钥匙总计:`);
    console.log(`  黄钥匙: ${totalItems.yellowKey}`);
    console.log(`  蓝钥匙: ${totalItems.blueKey}`);
    console.log(`  红钥匙: ${totalItems.redKey}`);

    console.log(`\n门总计:`);
    console.log(`  黄门: ${allDoors.yellow}`);
    console.log(`  蓝门: ${allDoors.blue}`);
    console.log(`  红门: ${allDoors.red}`);

    console.log(`\n钥匙盈余:`);
    console.log(`  黄钥匙: ${totalItems.yellowKey - allDoors.yellow} (${totalItems.yellowKey} - ${allDoors.yellow})`);
    console.log(`  蓝钥匙: ${totalItems.blueKey - allDoors.blue} (${totalItems.blueKey} - ${allDoors.blue})`);
    console.log(`  红钥匙: ${totalItems.redKey - allDoors.red} (${totalItems.redKey} - ${allDoors.red})`);

    // ==================== 最终属性计算 ====================

    const finalAtk = INIT_HERO.atk + totalItems.redJewel * values.redJewel + totalItems.sword * 10;
    const finalDef = INIT_HERO.def + totalItems.blueJewel * values.blueJewel + totalItems.shield * 10;
    const totalHpGain = totalItems.redPotion * values.redPotion + totalItems.bluePotion * values.bluePotion;
    const maxHp = INIT_HERO.hp + totalHpGain;

    console.log('\n' + '='.repeat(60));
    console.log('属性计算 (获得所有物品后)');
    console.log('='.repeat(60));
    console.log(`ATK: ${INIT_HERO.atk} + ${totalItems.redJewel}×${values.redJewel} + ${totalItems.sword}×10 = ${finalAtk}`);
    console.log(`DEF: ${INIT_HERO.def} + ${totalItems.blueJewel}×${values.blueJewel} + ${totalItems.shield}×10 = ${finalDef}`);
    console.log(`HP:  ${INIT_HERO.hp} + ${totalItems.redPotion}×${values.redPotion} + ${totalItems.bluePotion}×${values.bluePotion} = ${maxHp}`);

    // ==================== 战斗伤害计算 ====================

    console.log('\n' + '='.repeat(60));
    console.log('战斗伤害分析 (使用最终属性)');
    console.log('='.repeat(60));

    const hero = { atk: finalAtk, def: finalDef };

    // 按怪物类型分组
    const monstersByType = {};
    allMonsters.forEach(m => {
        if (!monstersByType[m.enemyId]) {
            monstersByType[m.enemyId] = { count: 0, monster: m };
        }
        monstersByType[m.enemyId].count++;
    });

    let totalDamage = 0;
    let impossibleMonsters = [];

    console.log('\n怪物类型 | 数量 | 单次伤害 | 总伤害 | 回合数');
    console.log('-'.repeat(60));

    Object.entries(monstersByType).forEach(([enemyId, data]) => {
        const result = calculateDamage(hero, enemyId);

        if (!result.canFight) {
            impossibleMonsters.push({ enemyId, count: data.count, monster: data.monster });
            console.log(`${data.monster.name.padEnd(12)} | ${data.count.toString().padStart(2)} | 无法战斗 (ATK ${hero.atk} <= DEF ${data.monster.def})`);
        } else {
            const subtotal = result.damage * data.count;
            totalDamage += subtotal;
            console.log(`${data.monster.name.padEnd(12)} | ${data.count.toString().padStart(2)} | ${result.damage.toString().padStart(8)} | ${subtotal.toString().padStart(8)} | ${result.turns}`);
        }
    });

    console.log('-'.repeat(60));
    console.log(`总计伤害: ${totalDamage}`);
    console.log(`可用HP: ${maxHp}`);
    console.log(`剩余HP: ${maxHp - totalDamage}`);

    if (impossibleMonsters.length > 0) {
        console.log('\n⚠️  无法击败的怪物:');
        impossibleMonsters.forEach(m => {
            console.log(`  - ${m.monster.name} x${m.count} (需要ATK > ${m.monster.def})`);
        });
    }

    // ==================== 阶段性分析 ====================

    console.log('\n' + '='.repeat(60));
    console.log('阶段性伤害分析 (模拟实际游戏进程)');
    console.log('='.repeat(60));

    // 模拟各阶段
    const stages = [
        { name: '1-3层', floors: [1,2,3], atk: 10 + 3, def: 10 + 3 },  // 约3个宝石
        { name: '4-6层', floors: [4,5,6], atk: 10 + 6 + 10, def: 10 + 4 },  // 铁剑+宝石
        { name: '7-9层', floors: [7,8,9], atk: 10 + 8 + 10, def: 10 + 5 + 10 },  // 铁盾+宝石
        { name: '10层', floors: [10], atk: finalAtk, def: finalDef },
    ];

    stages.forEach(stage => {
        console.log(`\n--- ${stage.name} (ATK:${stage.atk}, DEF:${stage.def}) ---`);
        const stageHero = { atk: stage.atk, def: stage.def };

        let stageDamage = 0;
        stage.floors.forEach(floorNum => {
            const floorMonsters = allMonsters.filter(m => {
                const floorAnalysis = floors.find(f => f.floorId === `main${floorNum}`);
                return floorAnalysis && floorAnalysis.monsters.some(fm => fm.x === m.x && fm.y === m.y);
            });

            // 重新从floors获取怪物
            const floorAnalysis = floors.find(f => f.floorId === `main${floorNum}`);
            if (floorAnalysis) {
                floorAnalysis.monsters.forEach(m => {
                    const result = calculateDamage(stageHero, m.enemyId);
                    if (result.canFight) {
                        stageDamage += result.damage;
                        if (result.damage > 0) {
                            console.log(`  ${m.name}: ${result.damage} (${result.turns}回合)`);
                        }
                    } else {
                        console.log(`  ${m.name}: 无法战斗!`);
                    }
                });
            }
        });

        console.log(`  阶段总伤害: ${stageDamage}`);
    });

    return { floors, totalItems, allMonsters, totalDamage, maxHp };
}

// 运行分析
analyzeGame();
