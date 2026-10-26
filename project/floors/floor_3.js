main.floors.floor_3=
{
    "floorId": "floor_3",
    "title": "主塔  3F",
    "name": "3",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 22,  0,  1,  7,131,  8,  1, 31,  0, 27,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1,  0,253,  0,  1],
    [  1,  0,253,  0,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,  1, 81,  1,  1,  0,209,  0,  1,  0,  0, 21,  1],
    [  1,  0,  0,  0,202,  0,  0,  0,205,  0,  1,  1,  1],
    [  1, 87,  0,  0,  1,  1,201,  1,  1,  0,  0, 21,  1],
    [  1,  0,  0,  0,  1,  0,245,  0,  1,  1, 81,  1,  1],
    [  1,  1,329,  1,  1,  0,246,  0,  1,  0,209,  0,  1],
    [  1,  0,201,  0,  1,246,  0,246,  1, 31,  0, 28,  1],
    [  1,  0,  0,  0,  1,  1,246,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  1,  0,  0,  0,  0,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,9": [
            {
                "type": "playSound",
                "name": "darkN.mp3"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 500
            },
            "\b[up]\t[魔王Zeno,redKing]欢迎来到魔塔，你是第一百零一位挑战者。\n打倒我所有的手下，我会和你一对一决斗。",
            "\b[up]\t[勇士,hero]一百零一？那第一百位是……",
            "\b[up]\t[魔王Zeno,redKing]……这把剑，我认得。\n好。我等的人，终于来了。",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        8
                    ],
                    [
                        5,
                        9
                    ],
                    [
                        7,
                        9
                    ],
                    [
                        6,
                        10
                    ]
                ],
                "time": 500
            },
            "\b[up]\t[勇士,hero]什么？",
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 1000,
                "keep": true,
                "async": true
            },
            {
                "type": "playSound",
                "name": "magicN.mp3"
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "playSound",
                "name": "magicN.mp3"
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "playSound",
                "name": "magicN.mp3"
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "playSound",
                "name": "magicN.mp3"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ],
                    [
                        6,
                        8
                    ],
                    [
                        5,
                        9
                    ],
                    [
                        7,
                        9
                    ],
                    [
                        6,
                        10
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "Math.max(10, status:atk-120)"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "Math.max(10, status:def-120)"
            },
            {
                "type": "function",
                "function": "function(){\ncore.removeFlag('curWeapon');\ncore.removeFlag('curArmor');\ncore.removeFlag('startGear');\ncore.status.hero.battleAnimate = 'hand';\ncore.updateStatusBar();\n}"
            },
            {
                "type": "sleep",
                "time": 800
            },
            "\b[up]------",
            "\b[up]------ 喂！",
            "\b[up]------ 喂！醒醒！",
            {
                "type": "setBlock",
                "number": "123",
                "loc": [
                    [
                        8,
                        11
                    ]
                ]
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    8,
                    11
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "left",
                    "left",
                    "up"
                ]
            },
            "\b[up]\t[杰克,thief]你可算醒了！刚才那个就是魔王，他一抬手你就倒下了。\n还好他没下杀手……看来他是真想跟你“一对一决斗”。",
            "\b[up]\t[勇士,hero]……头好晕。等等，我的剑和盾呢？！",
            "\b[up]\t[杰克,thief]被魔王拿走了。那可是好东西，他不会轻易还你的。",
            "\b[up]\t[勇士,hero]那是队长留给我的……我一定会拿回来。",
            "\b[up]\t[杰克,thief]队长？……第一百位挑战者？那人我见过，是个了不起的家伙。",
            "\b[up]\t[勇士,hero]我进塔，就是为了找他。\n这件事我还没跟任何人说过，你也替我保密。",
            "\b[up]\t[杰克,thief]放心，嘴严是我们这行的规矩。",
            "\b[up]\t[杰克,thief]听好了：铁剑在4楼，铁盾在9楼，你得先把它们弄到手。",
            "\b[up]\t[杰克,thief]这把黄钥匙给你，算是见面礼。\n先往上走吧，打倒他的手下，他总会再露面的。",
            {
                "type": "addValue",
                "name": "item:yellowKey",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    10
                ],
                "time": 300,
                "steps": [
                    "down",
                    "right",
                    "right",
                    "right",
                    "right"
                ]
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "6,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,1": [
            {
                "type": "if",
                "condition": "core.getBlockCls(6,3)=='terrains'",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[贪婪之神,blueShop]开门仅要500金币！",
                        "choices": [
                            {
                                "text": "开门",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:money>=500",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "value": "status:money-500"
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    6,
                                                    3
                                                ]
                                            },
                                            {
                                                "type": "exit"
                                            }
                                        ],
                                        "false": [
                                            "\t[贪婪之神,blueShop]真穷！算了，少收你点钱吧。",
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "value": "0"
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    6,
                                                    3
                                                ]
                                            },
                                            {
                                                "type": "exit"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "离开",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "choices",
                "text": "\t[贪婪之神,blueShop]年轻的勇者啊，如果你可以供奉金币的话，我可以提升你的能力！",
                "choices": [
                    {
                        "text": "攻击+1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "value": "status:atk+1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-20"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[贪婪之神,blueShop]你的金币不足！"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "防御+2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "value": "status:def+2"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-20"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[贪婪之神,blueShop]你的金币不足！"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,2": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "floor_4",
            "loc": [
                1,
                6
            ]
        },
        "11,11": {
            "floorId": "floor_2",
            "loc": [
                11,
                11
            ]
        },
        "1,11": {
            "floorId": "floor_4",
            "loc": [
                1,
                11
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "upFloor": [
        1,
        6
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}