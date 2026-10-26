main.floors.base_17_c=
{
    "floorId": "base_17_c",
    "title": "地下  17F",
    "name": "-25",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  0,  1,  0,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1,  0,  1,  1,  0,230,230,230,  0,  1,  0,  0,  1],
    [ 85,  0,  0,  1,  0,230,245,230,  0,  1,  0,  0, 85],
    [  1,  0,  0,  1,  0,230,230,230,  0,  1,  1,  0,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  1],
    [  1,  0,  0,  1,  0,  1, 83,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,3": [
            {
                "type": "if",
                "condition": "!core.hasFlag('diceShown')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:diceShown",
                        "value": "1"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 800
                    },
                    "\t[魔王Zeno,redKing]……又一个闯到这里的人。",
                    "\t[勇士,hero]魔王！？你怎么会在这里——",
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                5
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                7,
                                6
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ]
                        ],
                        "time": 800
                    },
                    "\t[魔王Zeno,redKing]看清楚，这是一枚骰子。\n八个面由我的部将镇守，正中那一点，是我。",
                    "\t[魔王Zeno,redKing]想见我，就把骰子掀翻吧。一面，一面地来。"
                ],
                "false": []
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        3
                    ],
                    [
                        6,
                        8
                    ]
                ],
                "time": 0
            }
        ],
        "6,8": [
            {
                "type": "if",
                "condition": "!core.hasFlag('diceShown')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:diceShown",
                        "value": "1"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 800
                    },
                    "\t[魔王Zeno,redKing]……又一个闯到这里的人。",
                    "\t[勇士,hero]魔王！？你怎么会在这里——",
                    {
                        "type": "show",
                        "loc": [
                            [
                                5,
                                5
                            ],
                            [
                                6,
                                5
                            ],
                            [
                                7,
                                5
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                7,
                                6
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ]
                        ],
                        "time": 800
                    },
                    "\t[魔王Zeno,redKing]看清楚，这是一枚骰子。\n八个面由我的部将镇守，正中那一点，是我。",
                    "\t[魔王Zeno,redKing]想见我，就把骰子掀翻吧。一面，一面地来。"
                ],
                "false": []
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        3
                    ],
                    [
                        6,
                        8
                    ]
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {
        "6,6": [
            "\t[魔王Zeno,redKing]这枚“骰子”，是大法师替我准备的封印。\n每一面都由一名部将镇守——只要还有一面立着，我就离不开这里。",
            "\t[勇士,hero]你被封在这里？那三楼的你……",
            "\t[魔王Zeno,redKing]那只是我掷出去的一道影子。\n真正的我，一直困在这枚骰子里，等着有人替我把它掷开。",
            "\t[魔王Zeno,redKing]……可惜，还差一点。骰子的点数，还没有掷完。",
            "\t[勇士,hero]“掷完”？你到底在说什么？",
            "\t[魔王Zeno,redKing]等你走到最后，自然会明白。\n这座塔里被困住的，从来不只是他一个。",
            "\t[魔王Zeno,redKing]……替我向你的队长问好。",
            "\t[魔王Zeno,redKing]拿走吧，这是你应得的。我们，还会再见。",
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        5
                    ],
                    [
                        7,
                        5
                    ],
                    [
                        5,
                        7
                    ],
                    [
                        7,
                        7
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        3,
                        4
                    ],
                    [
                        4,
                        4
                    ],
                    [
                        5,
                        4
                    ],
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        8,
                        3
                    ],
                    [
                        8,
                        4
                    ],
                    [
                        8,
                        5
                    ],
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        9,
                        8
                    ],
                    [
                        8,
                        8
                    ],
                    [
                        7,
                        8
                    ],
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        4,
                        9
                    ],
                    [
                        4,
                        8
                    ],
                    [
                        4,
                        7
                    ],
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        3
                    ],
                    [
                        6,
                        8
                    ]
                ],
                "time": 0
            },
            {
                "type": "tip",
                "text": "魔王的骰子封印解开了"
            },
            {
                "type": "openDoor",
                "loc": [
                    0,
                    6
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    0
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    12,
                    6
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    12
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,5": [
            {
                "type": "addValue",
                "name": "flag:diceCross",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:diceCross<4",
                "true": [
                    {
                        "type": "tip",
                        "text": "魔王的骰子封印，翻倒了一面（${flag:diceCross}/4）"
                    }
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==2",
                "true": [
                    "\t[魔王Zeno,redKing]一半了。你知道吗？上一个掀翻这枚骰子的人，是你的队长。",
                    "\t[勇士,hero]……队长也来过这里？",
                    "\t[魔王Zeno,redKing]来过一百次。每一次都掀翻它，每一次，骰子又会重新立起来。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==3",
                "true": [
                    "\t[魔王Zeno,redKing]最后一面了。\n掀翻它吧——然后你就会明白，为什么他再也没有回去。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross>=4 && !core.hasFlag('zenoSealed')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:zenoSealed",
                        "value": "1"
                    },
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    "\t[魔王Zeno,redKing]……四面都倒了。骰子立不住，封印反过来压在了我身上。",
                    "\t[魔王Zeno,redKing]现在的我，只剩一成的力量。来吧，趁现在。",
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "hp",
                        "value": "Math.ceil(core.material.enemys.redKing.hp/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "atk",
                        "value": "Math.ceil(core.material.enemys.redKing.atk/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "def",
                        "value": "Math.ceil(core.material.enemys.redKing.def/10)"
                    },
                    {
                        "type": "tip",
                        "text": "魔王被封印了，功力只剩一成"
                    }
                ],
                "false": []
            }
        ],
        "5,6": [
            {
                "type": "addValue",
                "name": "flag:diceCross",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:diceCross<4",
                "true": [
                    {
                        "type": "tip",
                        "text": "魔王的骰子封印，翻倒了一面（${flag:diceCross}/4）"
                    }
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==2",
                "true": [
                    "\t[魔王Zeno,redKing]一半了。你知道吗？上一个掀翻这枚骰子的人，是你的队长。",
                    "\t[勇士,hero]……队长也来过这里？",
                    "\t[魔王Zeno,redKing]来过一百次。每一次都掀翻它，每一次，骰子又会重新立起来。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==3",
                "true": [
                    "\t[魔王Zeno,redKing]最后一面了。\n掀翻它吧——然后你就会明白，为什么他再也没有回去。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross>=4 && !core.hasFlag('zenoSealed')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:zenoSealed",
                        "value": "1"
                    },
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    "\t[魔王Zeno,redKing]……四面都倒了。骰子立不住，封印反过来压在了我身上。",
                    "\t[魔王Zeno,redKing]现在的我，只剩一成的力量。来吧，趁现在。",
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "hp",
                        "value": "Math.ceil(core.material.enemys.redKing.hp/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "atk",
                        "value": "Math.ceil(core.material.enemys.redKing.atk/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "def",
                        "value": "Math.ceil(core.material.enemys.redKing.def/10)"
                    },
                    {
                        "type": "tip",
                        "text": "魔王被封印了，功力只剩一成"
                    }
                ],
                "false": []
            }
        ],
        "7,6": [
            {
                "type": "addValue",
                "name": "flag:diceCross",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:diceCross<4",
                "true": [
                    {
                        "type": "tip",
                        "text": "魔王的骰子封印，翻倒了一面（${flag:diceCross}/4）"
                    }
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==2",
                "true": [
                    "\t[魔王Zeno,redKing]一半了。你知道吗？上一个掀翻这枚骰子的人，是你的队长。",
                    "\t[勇士,hero]……队长也来过这里？",
                    "\t[魔王Zeno,redKing]来过一百次。每一次都掀翻它，每一次，骰子又会重新立起来。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==3",
                "true": [
                    "\t[魔王Zeno,redKing]最后一面了。\n掀翻它吧——然后你就会明白，为什么他再也没有回去。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross>=4 && !core.hasFlag('zenoSealed')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:zenoSealed",
                        "value": "1"
                    },
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    "\t[魔王Zeno,redKing]……四面都倒了。骰子立不住，封印反过来压在了我身上。",
                    "\t[魔王Zeno,redKing]现在的我，只剩一成的力量。来吧，趁现在。",
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "hp",
                        "value": "Math.ceil(core.material.enemys.redKing.hp/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "atk",
                        "value": "Math.ceil(core.material.enemys.redKing.atk/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "def",
                        "value": "Math.ceil(core.material.enemys.redKing.def/10)"
                    },
                    {
                        "type": "tip",
                        "text": "魔王被封印了，功力只剩一成"
                    }
                ],
                "false": []
            }
        ],
        "6,7": [
            {
                "type": "addValue",
                "name": "flag:diceCross",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:diceCross<4",
                "true": [
                    {
                        "type": "tip",
                        "text": "魔王的骰子封印，翻倒了一面（${flag:diceCross}/4）"
                    }
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==2",
                "true": [
                    "\t[魔王Zeno,redKing]一半了。你知道吗？上一个掀翻这枚骰子的人，是你的队长。",
                    "\t[勇士,hero]……队长也来过这里？",
                    "\t[魔王Zeno,redKing]来过一百次。每一次都掀翻它，每一次，骰子又会重新立起来。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross==3",
                "true": [
                    "\t[魔王Zeno,redKing]最后一面了。\n掀翻它吧——然后你就会明白，为什么他再也没有回去。"
                ],
                "false": []
            },
            {
                "type": "if",
                "condition": "flag:diceCross>=4 && !core.hasFlag('zenoSealed')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:zenoSealed",
                        "value": "1"
                    },
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    "\t[魔王Zeno,redKing]……四面都倒了。骰子立不住，封印反过来压在了我身上。",
                    "\t[魔王Zeno,redKing]现在的我，只剩一成的力量。来吧，趁现在。",
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "hp",
                        "value": "Math.ceil(core.material.enemys.redKing.hp/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "atk",
                        "value": "Math.ceil(core.material.enemys.redKing.atk/10)"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redKing",
                        "name": "def",
                        "value": "Math.ceil(core.material.enemys.redKing.def/10)"
                    },
                    {
                        "type": "tip",
                        "text": "魔王被封印了，功力只剩一成"
                    }
                ],
                "false": []
            }
        ]
    },
    "afterGetItem": {
        "7,4": null
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [
    [375,375,375,375,375,375,375,375,375,375,375,375,375],
    [375,375,375,375,375,375,375,375,375,375,375,375,375],
    [375,375,375,375,375,375,375,  0,  0,  0,375,375,375],
    [375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [375,375,375,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [375,375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [375,375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [375,375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [375,375,375,  0,  0,  0,375,375,375,375,375,375,375],
    [375,375,375,375,375,375,375,375,375,375,375,375,375],
    [375,375,375,375,375,375,375,375,375,375,375,375,375]
],
    "fgmap": [

]
}