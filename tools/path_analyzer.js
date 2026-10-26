/**
 * 魔塔路径分析器
 * 分析从入口到出口的最短路径，找出必须击败的怪物
 */

const fs = require('fs');
const path = require('path');

// 加载地图
function loadFloorMap(floorId) {
    const content = fs.readFileSync(path.join(__dirname, `../project/floors/${floorId}.js`), 'utf8');
    const mapMatch = content.match(/"map":\s*\[([\s\S]*?)\],\s*"firstArrive"/);
    if (!mapMatch) return null;
    return eval('[' + mapMatch[1] + ']');
}

// 图块类型
const TILES = {
    WALL: 1,
    YELLOW_DOOR: 81,
    BLUE_DOOR: 82,
    RED_DOOR: 83,
    SPECIAL_DOOR: 85,
    STAIR_UP: 87,
    STAIR_DOWN: 88,
};

// 怪物ID映射
const ENEMY_IDS = {
    201: '绿史莱姆', 202: '红史莱姆', 205: '小蝙蝠',
    209: '骷髅', 210: '骷髅士兵', 211: '骷髅队长',
    253: '雷术士', 221: '初级守卫', 222: '中级守卫',
    223: '高级守卫', 366: '双剑骷髅',
};

// 物品ID映射
const ITEM_IDS = {
    21: '黄钥匙', 22: '蓝钥匙', 23: '红钥匙',
    27: '红宝石', 28: '蓝宝石',
    31: '伤药', 32: '高级伤药',
    35: '铁剑', 36: '铁盾',
};

// 判断图块是否可通行（假设有足够钥匙）
function isPassable(tile) {
    if (tile === 0) return true;  // 空地
    if (tile === TILES.STAIR_UP || tile === TILES.STAIR_DOWN) return true;  // 楼梯
    if (ITEM_IDS[tile]) return true;  // 物品（可捡起）
    if (ENEMY_IDS[tile]) return true;  // 怪物（可击败）
    if (tile === TILES.YELLOW_DOOR || tile === TILES.BLUE_DOOR || tile === TILES.RED_DOOR) return true;  // 门（有钥匙可开）
    if (tile === TILES.SPECIAL_DOOR) return true;  // 特殊门（假设可通过事件打开）
    if (tile >= 121 && tile <= 140) return true;  // NPC（可对话后通过）
    return false;
}

// BFS寻找最短路径
function findShortestPath(map, startX, startY, endX, endY) {
    const height = map.length;
    const width = map[0].length;
    const visited = new Set();
    const queue = [{
        x: startX,
        y: startY,
        path: [],
        monsters: [],
        doors: { yellow: 0, blue: 0, red: 0, special: 0 },
        items: []
    }];

    while (queue.length > 0) {
        const current = queue.shift();
        const key = `${current.x},${current.y}`;

        if (visited.has(key)) continue;
        visited.add(key);

        // 到达终点
        if (current.x === endX && current.y === endY) {
            return current;
        }

        // 四个方向
        const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        for (const [dx, dy] of dirs) {
            const nx = current.x + dx;
            const ny = current.y + dy;

            if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
            if (visited.has(`${nx},${ny}`)) continue;

            const tile = map[ny][nx];
            if (!isPassable(tile)) continue;

            const newState = {
                x: nx,
                y: ny,
                path: [...current.path, { x: nx, y: ny, tile }],
                monsters: [...current.monsters],
                doors: { ...current.doors },
                items: [...current.items]
            };

            // 记录经过的怪物
            if (ENEMY_IDS[tile]) {
                newState.monsters.push({ x: nx, y: ny, id: tile, name: ENEMY_IDS[tile] });
            }

            // 记录经过的门
            if (tile === TILES.YELLOW_DOOR) newState.doors.yellow++;
            if (tile === TILES.BLUE_DOOR) newState.doors.blue++;
            if (tile === TILES.RED_DOOR) newState.doors.red++;
            if (tile === TILES.SPECIAL_DOOR) newState.doors.special = (newState.doors.special || 0) + 1;

            // 记录经过的物品
            if (ITEM_IDS[tile]) {
                newState.items.push({ x: nx, y: ny, id: tile, name: ITEM_IDS[tile] });
            }

            queue.push(newState);
        }
    }

    return null;  // 无法到达
}

// 分析单层
function analyzeFloor(floorId, entryX, entryY, exitX, exitY) {
    const map = loadFloorMap(floorId);
    if (!map) return null;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`${floorId} 路径分析`);
    console.log(`入口: (${entryX}, ${entryY}) → 出口: (${exitX}, ${exitY})`);
    console.log('='.repeat(60));

    const result = findShortestPath(map, entryX, entryY, exitX, exitY);

    if (!result) {
        console.log('❌ 无法找到路径！');
        return null;
    }

    console.log(`\n路径长度: ${result.path.length} 步`);

    if (result.monsters.length > 0) {
        console.log(`\n必须击败的怪物 (${result.monsters.length}只):`);
        result.monsters.forEach(m => {
            console.log(`  - ${m.name} @ (${m.x}, ${m.y})`);
        });
    } else {
        console.log('\n✓ 无需击败任何怪物即可通过！');
    }

    const totalDoors = result.doors.yellow + result.doors.blue + result.doors.red + (result.doors.special || 0);
    if (totalDoors > 0) {
        console.log(`\n需要的钥匙: 黄${result.doors.yellow} 蓝${result.doors.blue} 红${result.doors.red} 特${result.doors.special || 0}`);
    }

    if (result.items.length > 0) {
        console.log(`\n路径上的物品:`);
        result.items.forEach(item => {
            console.log(`  - ${item.name} @ (${item.x}, ${item.y})`);
        });
    }

    return result;
}

// 主程序：分析0-10层
function main() {
    console.log('魔塔 0-10层 最短路径分析');
    console.log('找出从入口到出口必须击败的怪物\n');

    // 楼层配置：[floorId, entryX, entryY, exitX, exitY]
    // 根据 changeFloor 数据确定正确的入口出口
    const floors = [
        ['main0', 6, 11, 6, 1],     // 0层：游戏开始(6,11) → (6,1)去main1
        ['main1', 6, 1, 11, 1],     // 1层：(6,1)来自main0 → (11,1)去main2
        ['main2', 11, 1, 11, 11],   // 2层：(11,1)来自main1 → (11,11)去main3
        ['main3', 11, 11, 1, 6],    // 3层：(11,11)来自main2 → (1,6)去main4
        ['main4', 1, 6, 6, 11],     // 4层：(1,6)来自main3 → (6,11)去main5
        ['main5', 6, 11, 1, 1],     // 5层：(6,11)来自main4 → (1,1)去main6
        ['main6', 1, 1, 11, 11],    // 6层：(1,1)来自main5 → (11,11)去main7
        ['main7', 11, 11, 1, 6],    // 7层：(11,11)来自main6 → (1,6)去main8
        ['main8', 1, 6, 11, 11],    // 8层：(1,6)来自main7 → (11,11)去main9
        ['main9', 11, 11, 1, 11],   // 9层：(11,11)来自main8 → (1,11)去main10
        ['main10', 1, 11, 6, 6],    // 10层：(1,11)来自main9 → (6,6)boss
    ];

    let totalMonsters = [];
    let totalDoors = { yellow: 0, blue: 0, red: 0, special: 0 };

    for (const [floorId, ex, ey, xx, xy] of floors) {
        const result = analyzeFloor(floorId, ex, ey, xx, xy);
        if (result) {
            totalMonsters.push(...result.monsters.map(m => ({ ...m, floor: floorId })));
            totalDoors.yellow += result.doors.yellow;
            totalDoors.blue += result.doors.blue;
            totalDoors.red += result.doors.red;
            totalDoors.special += result.doors.special || 0;
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('汇总：通关最少需要击败的怪物');
    console.log('='.repeat(60));

    // 按怪物类型统计
    const monsterCount = {};
    totalMonsters.forEach(m => {
        if (!monsterCount[m.name]) {
            monsterCount[m.name] = { count: 0, locations: [] };
        }
        monsterCount[m.name].count++;
        monsterCount[m.name].locations.push(`${m.floor}(${m.x},${m.y})`);
    });

    console.log(`\n总计: ${totalMonsters.length} 只怪物\n`);
    for (const [name, data] of Object.entries(monsterCount)) {
        console.log(`${name}: ${data.count}只`);
        console.log(`  位置: ${data.locations.join(', ')}`);
    }

    console.log(`\n总计需要钥匙: 黄${totalDoors.yellow} 蓝${totalDoors.blue} 红${totalDoors.red} 特${totalDoors.special}`);
}

main();
