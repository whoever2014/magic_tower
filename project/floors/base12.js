main.floors.base12=
{
    "floorId": "base12",
    "title": "地下  12F",
    "name": "-12",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 27,  1,  0,  0, 21,  1, 21, 21, 28,  1],
    [  1,  0,  0,  0, 81,224,  0,  0, 81,232,  0, 31,  1],
    [  1,  0,374,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 81,  1,  1,224,  1,232,  1,226,  1,227,  1],
    [  1,  0,  0,  0,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  1, 81,  1,  1,227,  1,226,  1,224,  1,232,  1],
    [  1,  0,224,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,226,  1,  0, 81,224,  0,  0, 81,227,  0, 27,  1],
    [  1, 32,232,  0,  1,  0, 87,  0,  1, 21, 21, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "base11",
            "loc": [
                6,
                11
            ]
        },
        "1,1": {
            "floorId": "base13",
            "loc": [
                1,
                1
            ]
        }
    },
    "afterBattle": {
        "11,8": [
            {
                "type": "if",
                "condition": "flag:redKeyB15==0",
                "true": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:redKeyB15==4",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    4
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        6,
                                        2
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "blueKey",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "blueKey",
                                "loc": [
                                    [
                                        6,
                                        1
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "redKey",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "floorId": "base15"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "if",
                "condition": "flag:redKeyB15==0",
                "true": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:redKeyB15==4",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    6,
                                    4
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        6,
                                        2
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "blueKey",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "blueKey",
                                "loc": [
                                    [
                                        6,
                                        1
                                    ]
                                ],
                                "floorId": "base15"
                            },
                            {
                                "type": "setBlock",
                                "number": "redKey",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "floorId": "base15"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "if",
                "condition": "flag:redKeyB15==1",
                "true": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:redKeyB15==3",
                        "true": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "if",
                "condition": "flag:redKeyB15==1",
                "true": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:redKeyB15==3",
                        "true": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "5,8": [
            {
                "type": "if",
                "condition": "flag:redKeyB15==2",
                "true": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1000"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "flag:redKeyB15==2",
                "true": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyB15",
                        "value": "1000"
                    }
                ]
            }
        ],
        "5,4": [
            {
                "type": "addValue",
                "name": "flag:redKeyB15",
                "value": "1000"
            }
        ],
        "9,8": [
            {
                "type": "addValue",
                "name": "flag:redKeyB15",
                "value": "1000"
            }
        ]
    },
    "afterGetItem": {
        "3,1": [
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
            }
        ],
        "11,10": [
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
            }
        ],
        "11,1": [
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
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
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