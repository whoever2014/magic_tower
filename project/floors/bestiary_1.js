main.floors.bestiary_1=
{
    "floorId": "bestiary_1",
    "title": "怪物图鉴 · 第一展厅（主塔与幻境）",
    "name": "怪物图鉴 · 第一展厅（主塔与幻境）",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
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
        "\t[怪物图鉴]怪物图鉴 · 第一展厅（主塔与幻境）\n走到雕像前，可以查看这只怪物的介绍。"
    ],
    "events": {
        "1,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('greenSlime');\n}"
            }
        ],
        "3,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redSlime');\n}"
            }
        ],
        "5,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('blackSlime');\n}"
            }
        ],
        "7,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('bat');\n}"
            }
        ],
        "9,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('bigBat');\n}"
            }
        ],
        "11,2": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('skeleton');\n}"
            }
        ],
        "1,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('skeletonSoilder');\n}"
            }
        ],
        "3,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('skeletonCaptain');\n}"
            }
        ],
        "5,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('grayPriest');\n}"
            }
        ],
        "7,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('bluePriest');\n}"
            }
        ],
        "9,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redPriest');\n}"
            }
        ],
        "11,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('zombie');\n}"
            }
        ],
        "1,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('zombieKnight');\n}"
            }
        ],
        "3,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('yellowGuard');\n}"
            }
        ],
        "5,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('blueGuard');\n}"
            }
        ],
        "7,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redGuard');\n}"
            }
        ],
        "9,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('rock');\n}"
            }
        ],
        "11,6": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('vampire');\n}"
            }
        ],
        "1,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('ghostSkeleton');\n}"
            }
        ],
        "3,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('soldier');\n}"
            }
        ],
        "5,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('brownWizard');\n}"
            }
        ],
        "7,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('redWizard');\n}"
            }
        ],
        "9,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('great_magician');\n}"
            }
        ],
        "11,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('blackMagician');\n}"
            }
        ],
        "1,10": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('slimeMan');\n}"
            }
        ],
        "3,10": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.bestiaryInfo('steelRock');\n}"
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
            "floorId": "bestiary_2",
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
