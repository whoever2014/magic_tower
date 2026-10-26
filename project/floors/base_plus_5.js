main.floors.base_plus_5=
{
    "floorId": "base_plus_5",
    "title": "地下  5F",
    "name": "-5",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0, 88,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,404,404,404,  1,  0,  0,  0,  1,407,407,407,  1],
    [  1,404,404,404, 85,  0,254,  0, 85,407,407,407,  1],
    [  1,404,404,404,  1,  0,  0,  0,  1,407,407,407,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0, 85,  0,  0,  0, 85,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0, 87,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 93,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,7": [
            "\t[奴隶主,redSwordsman]你的好日子到头了！你中埋伏了！弟兄们给我上！",
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
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:atkB5",
                "value": "core.status.hero.atk"
            },
            {
                "type": "setValue",
                "name": "flag:defB5",
                "value": "core.status.hero.def"
            }
        ],
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": "base_plus_4",
            "loc": [
                6,
                11
            ]
        },
        "6,1": {
            "floorId": "base_plus_6",
            "loc": [
                6,
                1
            ],
            "time": 500
        },
        "10,12": {
            "floorId": "base_plus_11",
            "loc": [
                10,
                12
            ],
            "direction": "up",
            "time": 500
        }
    },
    "afterBattle": {
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
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
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,2": [
            "\t[奴隶主,redSwordsman]不……又是这样！我做梦都梦见这一天！",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    10
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    10
                ]
            },
            {
                "type": "hide",
                "time": 0
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
            "\t[奴隶主,redSwordsman]你、你给我等着！骑士老爷会制裁你的！",
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        3
                    ],
                    [
                        2,
                        3
                    ],
                    [
                        3,
                        3
                    ],
                    [
                        4,
                        3
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
                    ],
                    [
                        2,
                        1
                    ],
                    [
                        3,
                        1
                    ],
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        8,
                        1
                    ],
                    [
                        9,
                        1
                    ],
                    [
                        10,
                        1
                    ],
                    [
                        11,
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
                        3
                    ],
                    [
                        9,
                        3
                    ],
                    [
                        10,
                        3
                    ],
                    [
                        11,
                        3
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        3
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        2
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        5
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        8
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        9
                    ]
                ],
                "floorId": "base_plus_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "floorId": "base_plus_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        6
                    ]
                ],
                "floorId": "base_plus_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        10
                    ]
                ],
                "floorId": "base_plus_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        6
                    ]
                ],
                "floorId": "base_plus_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        5
                    ],
                    [
                        5,
                        6
                    ],
                    [
                        5,
                        7
                    ],
                    [
                        6,
                        5
                    ],
                    [
                        6,
                        6
                    ],
                    [
                        6,
                        7
                    ],
                    [
                        7,
                        5
                    ],
                    [
                        7,
                        6
                    ],
                    [
                        7,
                        7
                    ]
                ],
                "floorId": "base_plus_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        7
                    ]
                ],
                "floorId": "base_plus_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        7
                    ]
                ],
                "floorId": "base_plus_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        2
                    ]
                ],
                "floorId": "base_plus_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "floorId": "base_plus_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "floorId": "base_plus_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "floorId": "base_plus_2",
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
                "floorId": "base_plus_2",
                "time": 500
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    3
                ],
                "floorId": "base_plus_2"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        3
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        2
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        3
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        7
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        9
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        6
                    ]
                ],
                "floorId": "base_plus_1",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}