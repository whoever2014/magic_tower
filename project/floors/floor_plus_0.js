main.floors.floor_plus_0=
{
    "floorId": "floor_plus_0",
    "title": "主塔 0 层",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 3,
    "defaultGround": "ground",
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
        },
        {
            "type": "if",
            "condition": "flag:round2==1 && !core.hasFlag('proof')",
            "true": [
                "\t[老人,man]二周目的勇者啊，上一次的旅程为你留下了一枚章。\\n选一枚带上吧，它会伴随你整段路。",
                {
                    "type": "choices",
                    "text": "\t[选择你的章]勇者：攻击伤害增加25%；贤者：每场战斗第一次受到的伤害减少50%，之后减少25%；霸者：受击时防御按“当前防御 + 攻击的25%”计算（对魔法无效）。",
                    "choices": [
                        {
                            "text": "勇者之章（镶有红宝石）",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "item:proof_brave",
                                    "value": "1"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            10,
                                            6
                                        ]
                                    ],
                                    "floorId": "mota_plus_5",
                                    "remove": true,
                                    "time": 0
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.plugin.useProof('proof_brave')\n}"
                                },
                                {
                                    "type": "setHeroIcon",
                                    "name": "hero1.png"
                                },
                                {
                                    "type": "playSound",
                                    "name": "item.mp3"
                                },
                                {
                                    "type": "tip",
                                    "text": "章的能力已激活，已晋升为勇者",
                                    "icon": "proof_brave"
                                }
                            ]
                        },
                        {
                            "text": "贤者之章（镶有钻石）",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "item:proof_sage",
                                    "value": "1"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            2,
                                            6
                                        ]
                                    ],
                                    "floorId": "mota_plus_5",
                                    "remove": true,
                                    "time": 0
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.plugin.useProof('proof_sage')\n}"
                                },
                                {
                                    "type": "setHeroIcon",
                                    "name": "hero2.png"
                                },
                                {
                                    "type": "playSound",
                                    "name": "item.mp3"
                                },
                                {
                                    "type": "tip",
                                    "text": "章的能力已激活，已晋升为贤者",
                                    "icon": "proof_sage"
                                }
                            ]
                        },
                        {
                            "text": "霸者之章（镶有黑珍珠）",
                            "action": [
                                {
                                    "type": "setValue",
                                    "name": "item:proof_tyrant",
                                    "value": "1"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            6,
                                            2
                                        ]
                                    ],
                                    "floorId": "mota_plus_5",
                                    "remove": true,
                                    "time": 0
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.plugin.useProof('proof_tyrant')\n}"
                                },
                                {
                                    "type": "setHeroIcon",
                                    "name": "hero3.png"
                                },
                                {
                                    "type": "playSound",
                                    "name": "item.mp3"
                                },
                                {
                                    "type": "tip",
                                    "text": "章的能力已激活，已晋升为霸者",
                                    "icon": "proof_tyrant"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 500
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "10"
            },
            {
                "type": "addValue",
                "name": "flag:antimage",
                "value": "-1"
            },
            {
                "type": "addValue",
                "name": "flag:antimage2",
                "value": "-1"
            },
            {
                "type": "addValue",
                "name": "flag:antimage3",
                "value": "-1"
            },
            {
                "type": "addValue",
                "name": "flag:antimage4",
                "value": "-1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('proof_lv',1)\n}"
            },
            {
                "type": "setValue",
                "name": "flag:hasCross",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:cross",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:hammer",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:pickaxe",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:shoes",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:Lvupfly",
                "value": "2"
            },
            {
                "type": "setValue",
                "name": "item:keydoor",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:coin",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:fly",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:braveBadge",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "base_plus_1",
            "loc": [
                1,
                1
            ],
            "time": 500
        },
        "6,1": {
            "floorId": "floor_plus_1",
            "loc": [
                6,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  1,  0, 87,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,201,  1,  1,  1,  0,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  1,  1,  0,  1,  0,  1,  0,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}