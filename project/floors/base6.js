main.floors.base6=
{
    "floorId": "base6",
    "title": "地下  6F",
    "name": "-6",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  0,  0,  1, 87,  1,  0,  0,  1,  1,  1],
    [  1,  1,  1,  1,  0,  1,  0,  1,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,227,  1,228,  1,227,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,226,  0,226,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,226,  0,227,  0,226,  1,  1,  1,  1],
    [  1,  1,  1,  1,  0,232,  0,232,  0,  1,  1,  1,  1],
    [  1,  1,  1,  0,232,  0,  0,  0,232,  0,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1, 28,  0, 21,  1,  0,232,  0,  1, 31,224,  0,  1],
    [  1, 32,  0,  0,  1,  0,  0,  0,  1,373,  0,  0,  1],
    [  1, 27,  0,227, 82,  0,  0,226, 82,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,2": [
            "\t[骑士领主,darkKnight]你放走了我的奴隶。我很愤怒，我决定在这里了结你。",
            {
                "type": "playSound",
                "name": "swordC.mp3"
            },
            "\t[骑士领主,darkKnight]你确实有两下子。准备迎敌！",
            {
                "type": "setEnemy",
                "id": "yellowKnight",
                "name": "special",
                "value": "1"
            },
            {
                "type": "setEnemy",
                "id": "darkKnight",
                "name": "special",
                "value": "1"
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        5
                    ],
                    [
                        5,
                        4
                    ],
                    [
                        7,
                        4
                    ],
                    [
                        8,
                        5
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
                "type": "openDoor",
                "loc": [
                    4,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    11
                ]
            },
            {
                "type": "move",
                "loc": [
                    3,
                    11
                ],
                "time": 0,
                "keep": true,
                "async": true,
                "steps": [
                    "up"
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    9
                ],
                "time": 0,
                "keep": true,
                "async": true,
                "steps": [
                    "down",
                    "down",
                    "left",
                    "left",
                    "left"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    11
                ],
                "time": 0,
                "keep": true,
                "async": true,
                "steps": [
                    "right",
                    "right"
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 0,
                "keep": true,
                "async": true,
                "steps": [
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down",
                    "down"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "setEnemy",
                "id": "blueKnight",
                "name": "special",
                "value": "1"
            },
            {
                "type": "setEnemy",
                "id": "redKnight",
                "name": "special",
                "value": "1"
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
                    4,
                    11
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    8,
                    11
                ]
            },
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "floorId": "base15",
                "time": 500
            }
        ],
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "4,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "8,3": {
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
        "4,7": {
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
        "8,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "4,3": {
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
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:redDoorB11",
                "value": "1"
            },
            "\t[骑士领主,darkKnight]你怎么从这里出来了？来人，准备迎敌！",
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        3
                    ],
                    [
                        6,
                        5
                    ],
                    [
                        8,
                        3
                    ]
                ],
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        5
                    ],
                    [
                        5,
                        4
                    ],
                    [
                        7,
                        4
                    ],
                    [
                        8,
                        5
                    ]
                ],
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        7
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
                        8,
                        7
                    ]
                ],
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 0,
                "keep": true,
                "steps": [
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
                    3
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "base5",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": "base7",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "4,5": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedYellowKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]铁骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        7
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
                                        8,
                                        7
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedYellowKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedYellowKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]铁骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        7
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
                                        8,
                                        7
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedYellowKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedYellowKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]铁骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        7
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
                                        8,
                                        7
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedYellowKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedYellowKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]铁骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        7
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
                                        8,
                                        7
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedYellowKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,7": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedBlueKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]近卫骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        3
                                    ],
                                    [
                                        6,
                                        5
                                    ],
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedBlueKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedBlueKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]近卫骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        3
                                    ],
                                    [
                                        6,
                                        5
                                    ],
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedBlueKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedBlueKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]近卫骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        3
                                    ],
                                    [
                                        6,
                                        5
                                    ],
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedBlueKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedBlueKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]近卫骑士给我上！",
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        4,
                                        3
                                    ],
                                    [
                                        6,
                                        5
                                    ],
                                    [
                                        8,
                                        3
                                    ]
                                ],
                                "time": 500
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedBlueKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "4,3": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedRedKnight==2",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedRedKnight==2",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,3": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedRedKnight==2",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==10",
                        "true": [
                            "\t[骑士领主,darkKnight]你果然有两下子，来和我一对一决斗！",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    3
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "addValue",
                                "name": "flag:killedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "6,10": [
            "\t[骑士领主,darkKnight]是我小看你了，你是个合格的战士！",
            {
                "type": "addValue",
                "name": "flag:beatDarkKnight",
                "value": "1"
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    11
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    11
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
                "number": "27",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        11,
                        2
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
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
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
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        6
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
                "number": "21",
                "loc": [
                    [
                        1,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
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
                "type": "show",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "floorId": "base15",
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "hp",
                "value": "core.material.enemys.soldier.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "atk",
                "value": "core.material.enemys.soldier.atk+16"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "def",
                "value": "core.material.enemys.soldier.def+16"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "hp",
                "value": "core.material.enemys.ghostSkeleton.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "atk",
                "value": "core.material.enemys.ghostSkeleton.atk+24"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "def",
                "value": "core.material.enemys.ghostSkeleton.def+24"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "hp",
                "value": "core.material.enemys.steelRock.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "atk",
                "value": "core.material.enemys.steelRock.atk+16"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "def",
                "value": "core.material.enemys.steelRock.def+16"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "hp",
                "value": "core.material.enemys.slimeMan.hp+32"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "atk",
                "value": "core.material.enemys.slimeMan.atk+16"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "core.material.enemys.great_magician.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "core.material.enemys.great_magician.def+16"
            },
            {
                "type": "setEnemy",
                "id": "brownWizard",
                "name": "hp",
                "value": "core.material.enemys.brownWizard.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "brownWizard",
                "name": "def",
                "value": "core.material.enemys.brownWizard.def+16"
            },
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "hp",
                "value": "core.material.enemys.blackMagician.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "def",
                "value": "core.material.enemys.blackMagician.def+16"
            }
        ],
        "6,2": [
            "\t[骑士领主,darkKnight]是我小看你了，你是个合格的战士！",
            {
                "type": "addValue",
                "name": "flag:beatDarkKnight",
                "value": "1"
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "hide",
                "time": 0
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
                "number": "27",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        11,
                        2
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
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
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
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        6
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
                "number": "21",
                "loc": [
                    [
                        1,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
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
                "type": "show",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "floorId": "base15",
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "hp",
                "value": "core.material.enemys.soldier.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "atk",
                "value": "core.material.enemys.soldier.atk+24"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "def",
                "value": "core.material.enemys.soldier.def+24"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "hp",
                "value": "core.material.enemys.ghostSkeleton.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "atk",
                "value": "core.material.enemys.ghostSkeleton.atk+24"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "def",
                "value": "core.material.enemys.ghostSkeleton.def+24"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "hp",
                "value": "core.material.enemys.steelRock.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "atk",
                "value": "core.material.enemys.steelRock.atk+24"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "def",
                "value": "core.material.enemys.steelRock.def+24"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "hp",
                "value": "core.material.enemys.slimeMan.hp+64"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "atk",
                "value": "core.material.enemys.slimeMan.atk+16"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "core.material.enemys.great_magician.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "core.material.enemys.great_magician.def+24"
            },
            {
                "type": "setEnemy",
                "id": "brownWizard",
                "name": "hp",
                "value": "core.material.enemys.brownWizard.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "brownWizard",
                "name": "def",
                "value": "core.material.enemys.brownWizard.def+24"
            },
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "hp",
                "value": "core.material.enemys.blackMagician.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "def",
                "value": "core.material.enemys.blackMagician.def+24"
            }
        ],
        "3,11": [
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "core.material.enemys.great_magician.def+4"
            },
            {
                "type": "setEnemy",
                "id": "brownWizard",
                "name": "def",
                "value": "core.material.enemys.brownWizard.def+4"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "def",
                "value": "core.material.enemys.soldier.def+4"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "def",
                "value": "core.material.enemys.ghostSkeleton.def+4"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "def",
                "value": "core.material.enemys.steelRock.def+4"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "hp",
                "value": "core.material.enemys.slimeMan.hp+8"
            },
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "def",
                "value": "core.material.enemys.blackMagician.def+4"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "atk",
                "value": "core.material.enemys.soldier.atk+4"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "atk",
                "value": "core.material.enemys.ghostSkeleton.atk+4"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "atk",
                "value": "core.material.enemys.steelRock.atk+4"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "atk",
                "value": "core.material.enemys.slimeMan.atk+4"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": false,
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        11,
        11
    ]
}