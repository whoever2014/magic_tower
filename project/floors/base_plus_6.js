main.floors.base_plus_6=
{
    "floorId": "base_plus_6",
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
    [  1,  1,  1,  1,  0,  1,363,  1,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,227,  1,226,  1,227,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,227,  0,227,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  0,232,  0,232,  0,  1,  1,  1,  1],
    [  1,  1,  1,  0,232,  0,  0,  0,232,  0,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1, 28,  0, 21,  1,  0,  0,  0,  1, 31,224,  0,  1],
    [  1, 32,  0,  0,  1,  0,  0,  0,  1,389,  0,  0,  1],
    [  1, 27,  0,227, 82,  0,  0,  0, 82,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,2": [
            "\t[骑士队长,yellowKnight]你放走了我的奴隶。\n按骑士的规矩，我该给你一个公平的了断。",
            {
                "type": "playSound",
                "name": "swordC.mp3"
            },
            "\t[骑士队长,yellowKnight]……可惜，我早已不配谈规矩了。骑士团，列阵！",
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        3
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
                        3
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
                "floorId": "base_plus_15",
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
        "8,7": {
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
            "\t[骑士队长,yellowKnight]你怎么从这里出来了？……来人，列阵迎敌！",
            {
                "type": "show",
                "loc": [
                    [
                        4,
                        3
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
        ],
        "4,3": {
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
        "6,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": "base_plus_5",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": "base_plus_7",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "7,4": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedRedKnight==3",
                        "true": [
                            "\t[骑士队长,yellowKnight]铁骑士，上前！",
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
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==7",
                        "true": [
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                        "condition": "flag:killedRedKnight==3",
                        "true": [
                            "\t[骑士队长,yellowKnight]铁骑士，上前！",
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
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==7",
                        "true": [
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    9
                                ],
                                "time": 300,
                                "keep": true,
                                "steps": [
                                    "up",
                                    "up"
                                ]
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    9
                                ],
                                "time": 300,
                                "keep": true,
                                "steps": [
                                    "up",
                                    "up"
                                ]
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    9
                                ],
                                "time": 300,
                                "keep": true,
                                "steps": [
                                    "up",
                                    "up"
                                ]
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    8
                                ]
                            },
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    9
                                ],
                                "time": 300,
                                "keep": true,
                                "steps": [
                                    "up",
                                    "up"
                                ]
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
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
            "\t[骑士领主,darkKnight]……又是这一剑。我明明知道它会来，却还是躲不开。\n你是个合格的战士。去吧……把我的奴隶，都放了吧。",
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
                "floorId": "base_plus_15",
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
                "value": "core.material.enemys.soldier.atk+132"
            },
            {
                "type": "setEnemy",
                "id": "soldier",
                "name": "def",
                "value": "core.material.enemys.soldier.def+172"
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
                "value": "core.material.enemys.ghostSkeleton.atk+140"
            },
            {
                "type": "setEnemy",
                "id": "ghostSkeleton",
                "name": "def",
                "value": "core.material.enemys.ghostSkeleton.def+180"
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
                "value": "core.material.enemys.steelRock.atk+132"
            },
            {
                "type": "setEnemy",
                "id": "steelRock",
                "name": "def",
                "value": "core.material.enemys.steelRock.def+172"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "hp",
                "value": "core.material.enemys.slimeMan.hp+384"
            },
            {
                "type": "setEnemy",
                "id": "slimeMan",
                "name": "atk",
                "value": "core.material.enemys.slimeMan.atk+132"
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
                "value": "core.material.enemys.great_magician.def+172"
            },
            {
                "type": "setEnemy",
                "id": "redWizard",
                "name": "hp",
                "value": "core.material.enemys.redWizard.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "redWizard",
                "name": "def",
                "value": "core.material.enemys.redWizard.def+172"
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
                "value": "core.material.enemys.brownWizard.def+172"
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
                "value": "core.material.enemys.blackMagician.def+172"
            }
        ],
        "2,10": [
            {
                "type": "if",
                "condition": "flag:redDoorB11==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:killedRedKnight==3",
                        "true": [
                            "\t[骑士领主,darkKnight]铁骑士，上前！",
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
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==7",
                        "true": [
                            "\t[骑士领主,darkKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                        "condition": "flag:killedRedKnight==3",
                        "true": [
                            "\t[骑士队长,yellowKnight]铁骑士，上前！",
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
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==7",
                        "true": [
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
                        "condition": "flag:killedRedKnight==3",
                        "true": [
                            "\t[骑士队长,yellowKnight]铁骑士，上前！",
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
                                "name": "flag:killedRedKnight",
                                "value": "1"
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:killedKnight==7",
                        "true": [
                            "\t[骑士队长,yellowKnight]够了，都退下。\n剩下的，由我亲自领教——一对一。",
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
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": false,
    "bgmap": [],
    "fgmap": [],
    "upFloor": [
        11,
        11
    ]
}