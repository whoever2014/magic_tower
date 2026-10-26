main.floors.magic2=
{
    "floorId": "magic2",
    "title": "幻境",
    "name": "1",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,6": [
            "\t[老人,man] 还记得12楼老人说的话吗？仔细观察魔物法典吧。"
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "0"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        2,
                        1
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        2,
                        2
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        11,
                        9
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        1,
                        10
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        3,
                        10
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        2,
                        6
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        6,
                        10
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        10,
                        5
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        9,
                        1
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "31",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "31",
                "loc": [
                    [
                        3,
                        9
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "31",
                "loc": [
                    [
                        7,
                        9
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "31",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "31",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "31",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        5,
                        2
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        8,
                        2
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        7
                    ]
                ],
                "floorId": "magic_1"
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        11
                    ]
                ],
                "floorId": "magic_1"
            }
        ],
        "9,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "4,4": {
            "floorId": "magic_1",
            "loc": [
                4,
                4
            ],
            "time": 500
        },
        "9,5": {
            "floorId": "floor_20",
            "loc": [
                6,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "if",
                "condition": "flag:killedWrongMagic==0",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "floorId": "magic_1",
                        "time": 500
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "floorId": "magic_1",
                        "time": 500
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ],
                        "floorId": "magic_1",
                        "time": 500
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "90",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "90",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "floorId": "magic_1"
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                11,
                                6
                            ]
                        ],
                        "floorId": "floor_2",
                        "time": 0
                    },
                    {
                        "type": "setValue",
                        "name": "flag:beenToMagic",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "8,10": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "5,1": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [340,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,340],
    [  4,220, 27,  4,340,220,340,  4,340, 28,  0,220,  4],
    [  4,  4, 27,340,220, 32, 27,  0, 32,  0,  4,340,  4],
    [  4,340,  0,  4,340,340,  4,220,  0,220,  4,340,  4],
    [  4,220,  0,  0, 90,340,  4,  4, 31,  0,  0,220,  4],
    [  4,340,  0,  4,  4,  4,220, 31,  0, 90, 28,  4,  4],
    [  4,  4, 28,121,  4,  0, 31,  0,220,340,  0,220,  4],
    [  4,220,  0, 28,340, 31,  4,  4,340,  4, 32,  4,  4],
    [340,  4,  4,  0,  4,337,340,220,  4,220,  0,  4,  4],
    [  4,  4,  4, 31,340,  4,  4, 31,  0, 28,  0, 27,  4],
    [  4, 27,  0, 27,  0,  0, 28,  0,220,  4,  0,  4,  4],
    [  4,220,  4,220,  4,220,  4,220,  4,  4, 32,220,  4],
    [340,  4,  4,  4,340,  4,  4,  4,  4,340,  4,  4,  4]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,351,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}