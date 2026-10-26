main.floors.bestiary_2=
{
    "floorId": "bestiary_2",
    "title": "怪物图鉴 · 第二展厅（地下与深处）",
    "name": "怪物图鉴 · 第二展厅（地下与深处）",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
],
    "images": [],
    "item_ratio": 1,
    "firstArrive": [
        {
            "type": "setText",
            "position": "down",
            "offset": 5
        },
        {
            "type": "setValue",
            "name": "flag:customStatusBarHidden",
            "value": "false"
        },
        {
            "type": "showHero"
        }
    ],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.bestiaryRefresh();\n}"
        },
        "\t[怪物图鉴]怪物图鉴 · 第二展厅（地下与深处）\n走到雕像前，可以查看这只怪物的介绍。"
    ],
    "events": {
        "1,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slave_0');\n}"
            }
        ],
        "3,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slave_5');\n}"
            }
        ],
        "5,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slave_1');\n}"
            }
        ],
        "7,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slave_2');\n}"
            }
        ],
        "9,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slave_3');\n}"
            }
        ],
        "11,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slave_4');\n}"
            }
        ],
        "1,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redSwordsman');\n}"
            }
        ],
        "3,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('swordsman');\n}"
            }
        ],
        "5,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('swordsmanBlue');\n}"
            }
        ],
        "7,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('swordsmanRed');\n}"
            }
        ],
        "9,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('E370');\n}"
            }
        ],
        "11,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('yellowKnight');\n}"
            }
        ],
        "1,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redKnight');\n}"
            }
        ],
        "3,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('blueKnight');\n}"
            }
        ],
        "5,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('darkKnight');\n}"
            }
        ],
        "7,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('whiteKing');\n}"
            }
        ],
        "9,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('whiteKing2');\n}"
            }
        ],
        "11,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('greenKing');\n}"
            }
        ],
        "1,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('yellowKing');\n}"
            }
        ],
        "3,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redKing');\n}"
            }
        ],
        "5,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slimelord');\n}"
            }
        ],
        "7,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redBat');\n}"
            }
        ],
        "9,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('bigBatRed');\n}"
            }
        ],
        "11,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('magicDragon');\n}"
            }
        ],
        "1,10": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('octopus');\n}"
            }
        ],
        "3,10": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('badHero');\n}"
            }
        ],
        "6,12": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryExit();\n}"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "bestiary_1",
            "loc": [
                2,
                1
            ],
            "time": 300
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}