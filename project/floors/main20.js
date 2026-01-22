main.floors.main20=
{
    "floorId": "main20",
    "title": "主塔  20F",
    "name": "20",
    "canFlyTo": true,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [340,340,340,340,340,340,340,340,340,340,340,340,340],
    [340,340,340,340,340,  0, 90,  0,340,340,340,340,340],
    [340,340,340,340,340,  0,  0,  0,340,340,340,340,340],
    [340,340,340,  1,  1,  1,  0,  1,  1,  1,340,340,340],
    [340,340,340,  1, 90,  0,  0,  0, 90,  1,340,340,340],
    [340,  0,  0,  1,  0,206,206,206,  0,  1,  0,  0,340],
    [340,  0,  0,  0,  0,206,208,206,  0,  0,  0,  0,340],
    [340,  0,  0,  1,  0,206,206,206,  0,  1,  0,  0,340],
    [340,340,340,  1, 90,  0,  0,  0, 90,  1,340,340,340],
    [340,340,340,  1,  1,  1,  0,  1,  1,  1,340,340,340],
    [340,340,340,340,340,  0,  0,  0,340,340,340,340,340],
    [340,340,340,340,340,  0, 88,  0,340,340,340,340,340],
    [340,340,340,340,340,340,340,340,340,340,340,340,340]
],
    "firstArrive": null,
    "events": {
        "6,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,8": [
            {
                "type": "hide",
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
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "time": 0
            },
            "\t[吸血鬼,vampire]很好 你打败了骷髅族 但别想象藐视骷髅人那样藐视我 我对于你就像是神一样 是不可战胜的 来吧",
            {
                "type": "setValue",
                "name": "flag:atk20F",
                "value": "core.status.hero.atk"
            },
            {
                "type": "setValue",
                "name": "flag:def20F",
                "value": "core.status.hero.def"
            }
        ],
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,9": [
            {
                "type": "if",
                "condition": "core.hasFlag('proof')",
                "true": [
                    "\t[勇士,hero]章在发光！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                4,
                                4
                            ],
                            [
                                4,
                                8
                            ],
                            [
                                8,
                                4
                            ],
                            [
                                8,
                                8
                            ]
                        ],
                        "time": 500
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
                    }
                ]
            }
        ],
        "8,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "4,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "4,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "8,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": "main19",
            "loc": [
                6,
                11
            ]
        },
        "6,1": {
            "floorId": "magic1",
            "loc": [
                4,
                4
            ],
            "time": 500
        },
        "4,4": {
            "floorId": "moyu8",
            "loc": [
                4,
                4
            ],
            "time": 500
        },
        "8,4": {
            "floorId": "moyu5",
            "loc": [
                11,
                6
            ],
            "time": 500
        },
        "4,8": {
            "floorId": "moyu1",
            "loc": [
                6,
                8
            ],
            "time": 500
        },
        "8,8": {
            "floorId": "moyu6",
            "loc": [
                6,
                8
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,6": [
            "\t[吸血鬼,vampire]上帝啊 我做梦也没想到我会被别人打败 毫无疑问你是比我强 但以你现在的状态对于大法师来说又太弱了 你仅仅取得了一个暂时的胜利",
            {
                "type": "addValue",
                "name": "flag:beat20F",
                "value": "1"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        7,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        7,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        5,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        5,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        2,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        5,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        7,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        5,
                        10
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        7,
                        10
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "playSound",
                "name": "door.mp3",
                "stop": true
            },
            {
                "type": "waitAsync"
            },
            "\t[吸血鬼,vampire]我身后是大法师所在的魔域，但我相信你不敢进去。",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
        6,
        11
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}