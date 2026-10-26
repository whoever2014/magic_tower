main.floors.floor_10=
{
    "floorId": "floor_10",
    "title": "主塔  10F",
    "name": "10",
    "canFlyTo": true,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,209,209,209,  1,  1,  0,  1,  1,209,209,209,  1],
    [  1,  0,210,  0, 85,  0,  0,  0, 85,  0,210,  0,  1],
    [  1,  1,  1,  1,  1,  0,211,  0,  1,  1,  1,  1,  1],
    [  1,209, 27,209,  1,  0,  0,  0,  1,209, 28,209,  1],
    [  1,  0,209,  0,  1,  1, 83,  1,  1,  0,209,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1, 88,123, 81,253,  0,  0,  0,253, 81,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,7": [
            "\t[骷髅队长,skeletonCaptain]哈哈哈！小子，你的好日子到头了！\n早就听说有个愣头青在塔里横冲直撞——老子的骷髅军团等你很久了！\n弟兄们，给我上！",
            "\t[勇士,hero]……队长！？",
            "\t[骷髅队长,skeletonCaptain]哈？老子就是骷髅队长！你小子在找谁呢！",
            "\t[骷髅队长,skeletonCaptain]哼，前一个闯到这里的家伙运气好。\n……怪了，老子怎么总觉得，这话说过不止一回？",
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 0,
                "keep": true,
                "steps": [
                    "up",
                    "up",
                    "up",
                    "up"
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    5
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    5
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,3": [
            "\t[骷髅队长,skeletonCaptain]什……什么！？弟兄们全趴下了！？\n好，好小子！老子亲自来会会你！",
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:atk10F",
                "value": "core.status.hero.atk"
            },
            {
                "type": "setValue",
                "name": "flag:def10F",
                "value": "core.status.hero.def"
            }
        ],
        "2,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": "floor_9",
            "loc": [
                1,
                11
            ]
        },
        "6,1": {
            "floorId": "floor_11",
            "loc": [
                6,
                1
            ]
        }
    },
    "afterBattle": {
        "6,2": [
            "\t[骷髅队长,skeletonCaptain]咳咳……输了就是输了，老子认。\n小子，身手不赖。上面那位伯爵可没老子这么讲道理，当心点。",
            "\t[骷髅队长,skeletonCaptain]当年那个家伙……一个人就把我们打穿了。\n一回，两回……老子记不清了。你和他……还真像啊。",
            {
                "type": "addValue",
                "name": "flag:beat10F",
                "value": "1"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "time": 500
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        8,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        9,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        3,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        8,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        4,
                        2
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        2,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    2,
                    11
                ],
                "time": 0,
                "keep": true,
                "steps": [
                    "right",
                    "right",
                    "right",
                    "right"
                ]
            },
            "\t[杰克,thief]这些骷髅可真难缠。总算是结束了，我在楼上等你。",
            {
                "type": "waitAsync"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    11
                ],
                "time": 0,
                "steps": [
                    "up",
                    "up",
                    "up"
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
        1,
        11
    ],
    "upFloor": [
        6,
        1
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}