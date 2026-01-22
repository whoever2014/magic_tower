main.floors.main14=
{
    "floorId": "main14",
    "title": "主塔  14F",
    "name": "14",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 27,  1,  0, 87,  0,  1,  0,  0, 28,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0, 81,213,  0, 21,  1],
    [  1,  1, 85,  1,  1,  0,203,  0,  1,  0,218,  0,  1],
    [  1,  0,  0,  0,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,367,  0,367,  1, 31,  0,  0,  1,  0,206,  0,  1],
    [  1,  1, 85,  1,  1,  0,214,  0, 81,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0, 21,  1,  0,214, 32,  1],
    [  1,367,  0,367,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  1, 85,  1,  1,  0,203,  0,  1,  0,217,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1, 21,  0, 21,  1],
    [  1,  0, 37,  0,  1,  0, 88,  0,  1,  0,121,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,11": [
            {
                "type": "if",
                "condition": "flag:npc13_times==0",
                "true": [
                    "\t[老人,man]啊！——\n你的剑，你的盾，都是古董呢！！",
                    "\t[勇士,hero]咦？你懂得鉴定吗？",
                    "\t[老人,man]鉴定这么简单的事情怎么难得到我？",
                    "\t[勇士,hero]那我有东西请你鉴定一下，请你等一下。",
                    "\t[老人,man]随时恭候。",
                    {
                        "type": "setValue",
                        "name": "flag:npc13_times",
                        "value": "flag:npc13_times+1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.hasItem('proof_brave') && core.hasItem('proof_sage') && !core.hasFlag('proof')",
                        "true": [
                            "\t[勇士,hero]老伯，您看看这个。",
                            "\t[老人,man]嗯……\n这红宝石……这形状……\n错不了了！是勇者之证！",
                            "\t[勇士,hero]老伯，那这一个呢？",
                            "\t[老人,man]啊！是一颗珍贵的钻石！还有……！\n错不了了！是贤者之证！",
                            "\t[老人,man]你居然有两个章，它们混合在一起可以晋升为魔剑士。",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        10,
                                        11
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        10,
                                        10
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.useProof('proof_brave_sage')\n}"
                            },
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            },
                            {
                                "type": "tip",
                                "text": "章的能力已激活，已晋升为魔剑士",
                                "icon": "proof_brave"
                            },
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.hasItem('proof_brave') && !core.hasFlag('proof')",
                        "true": [
                            "\t[勇士,hero]老伯，您看看这个。",
                            "\t[老人,man]嗯……\n这红宝石……这形状……\n错不了了！是勇者之证！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        10,
                                        11
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        10,
                                        10
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
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
                            },
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.hasItem('proof_tyrant') && !core.hasFlag('proof')",
                        "true": [
                            "\t[勇士,hero]老伯，您看看这个。",
                            "\t[老人,man]啊！是黑珍珠！不用看了！是霸者之证！",
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.useProof('proof_tyrant')\n}"
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        10,
                                        11
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        10,
                                        10
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
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
                            },
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.hasItem('proof_sage') && !core.hasFlag('proof')",
                        "true": [
                            "\t[勇士,hero]老伯，您看看这个。",
                            "\t[老人,man]啊！是一颗珍贵的钻石！还有……！\n错不了了！是贤者之证！",
                            {
                                "type": "function",
                                "function": "function(){\ncore.plugin.useProof('proof_sage')\n}"
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        10,
                                        10
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        10,
                                        11
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "floorId": "base5",
                                "time": 500
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
                            },
                            {
                                "type": "exit"
                            }
                        ]
                    },
                    "\t[老人,man]请出示要鉴定的东西吧！"
                ]
            }
        ],
        "2,3": [
            {
                "type": "if",
                "condition": "flag:doorF14_1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "main15",
            "loc": [
                6,
                1
            ]
        },
        "6,11": {
            "floorId": "main13",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": "main15",
            "loc": [
                1,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorF14_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorF14_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "if",
                "condition": "flag:doorF14_3==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_3",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "if",
                "condition": "flag:doorF14_3==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_3",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        1
    ]
}