main.floors.base_15=
{
    "floorId": "base_15",
    "title": "地下  15F",
    "name": "-15",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0, 21, 21,  1, 82,  1, 28,389,  0,121,  1],
    [  1,370,  0, 21, 21,  1, 82,  1,370,  0,  0,  0,  1],
    [  1,  0,227,  1,  1,  1, 83,  1, 81,  1,  0,  0,  1],
    [  1,  0,  0, 81, 27,  1, 82,  1, 88,  1,  0,389,  1],
    [  1, 81,  1,  1,  1,  1, 82,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,224,  0,  0,  0,  0,  0,224,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,  1, 28,  1,389,  1, 22, 81,  0,  0,  1],
    [  1,  0,  0,  1, 81,  1,224,  1,  1,  1,  0,  0,  1],
    [  1,232,  0,  0,227,  1,  0,  1, 21, 21,232,  0,  1],
    [  1, 32,389,  0,  0,  1, 87,  1, 21, 21,  0,224,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "11,1": [
            "\t[老人,man]地下12层的骑士们守护着隐藏的红钥匙。"
        ],
        "8,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,10": [
            {
                "type": "if",
                "condition": "core.hasFlag('captainFled') && !core.hasFlag('lordAtB15')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:lordAtB15",
                        "value": "1"
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKnight",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 300
                    },
                    "\t[骑士队长,yellowKnight]呼……呼……总算甩掉了……\n你、你怎么追到这里来了！",
                    {
                        "type": "setBlock",
                        "number": "darkKnight",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 800
                    },
                    "\t[骑士领主,darkKnight]临阵脱逃的东西，也配穿骑士团的铠甲？",
                    "\t[骑士队长,yellowKnight]领、领主大人！属下……属下只是想回来报信——",
                    "\t[骑士领主,darkKnight]败给一个闯塔的人，还丢下阵地逃跑。骑士团的脸都被你丢尽了。\n来人，给我杀了他！",
                    {
                        "type": "sleep",
                        "time": 800
                    },
                    "\t[骑士领主,darkKnight]……哼，一个能动手的都没有了。那就我亲自来。",
                    {
                        "type": "playSound",
                        "name": "swordC.mp3"
                    },
                    {
                        "type": "animate",
                        "name": "swordC",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    "\t[骑士队长,yellowKnight]领主……大人……",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "remove": true,
                        "time": 300
                    },
                    "\t[勇士,hero]……他是你的部下。",
                    "\t[骑士领主,darkKnight]输了的人，就不配做我的部下。\n现在，轮到你了。按骑士的规矩——一对一。",
                    {
                        "type": "move",
                        "loc": [
                            7,
                            6
                        ],
                        "time": 300,
                        "keep": true,
                        "steps": [
                            "left"
                        ]
                    }
                ],
                "false": []
            }
        ],
        "6,7": [
            {
                "type": "if",
                "condition": "core.hasFlag('captainFled') && !core.hasFlag('lordAtB15')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:lordAtB15",
                        "value": "1"
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowKnight",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 300
                    },
                    "\t[骑士队长,yellowKnight]呼……呼……总算甩掉了……\n你、你怎么追到这里来了！",
                    {
                        "type": "setBlock",
                        "number": "darkKnight",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 800
                    },
                    "\t[骑士领主,darkKnight]临阵脱逃的东西，也配穿骑士团的铠甲？",
                    "\t[骑士队长,yellowKnight]领、领主大人！属下……属下只是想回来报信——",
                    "\t[骑士领主,darkKnight]败给一个闯塔的人，还丢下阵地逃跑。骑士团的脸都被你丢尽了。\n来人，给我杀了他！",
                    {
                        "type": "sleep",
                        "time": 800
                    },
                    "\t[骑士领主,darkKnight]……哼，一个能动手的都没有了。那就我亲自来。",
                    {
                        "type": "playSound",
                        "name": "swordC.mp3"
                    },
                    {
                        "type": "animate",
                        "name": "swordC",
                        "loc": [
                            6,
                            6
                        ]
                    },
                    "\t[骑士队长,yellowKnight]领主……大人……",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 300
                    },
                    "\t[勇士,hero]……他是你的部下。",
                    "\t[骑士领主,darkKnight]输了的人，就不配做我的部下。\n现在，轮到你了。按骑士的规矩——一对一。",
                    {
                        "type": "move",
                        "loc": [
                            7,
                            6
                        ],
                        "time": 300,
                        "keep": true,
                        "steps": [
                            "left"
                        ]
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.hasFlag('beatDarkKnight')",
                        "true": [
                            {
                                "type": "hide",
                                "time": 0
                            }
                        ],
                        "false": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": "base_14",
            "stair": "downFloor"
        },
        "8,4": {
            "floorId": "base_16",
            "loc": [
                20,
                16
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [],
    "fgmap": []
}