main.floors.base11=
{
    "floorId": "base11",
    "title": "地下  11F",
    "name": "-11",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0, 81, 28, 90,373, 81,  0,  0, 87,  1],
    [  1,226,  0,226,  1, 22,  0, 21,  1,224,  0,  0,  1],
    [  1,  1,  0,  1,  1,  1, 85,  1,  1, 31,224,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,232,  0,232,  1,308,309,310,  1,  7,131,  8,  1],
    [  1,  1,  0,  1,  1,311,312,313,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,314,257,315,  1,  1, 81,  1,  1],
    [  1,227,  0,227,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  0,  1,  1,  1, 83,  1,  1,  0,  1,373,  1],
    [  1, 27,  0, 28,  1,  0,  0,  0, 82,374,  1,  0,  1],
    [  1,  0, 32,  0,  1,  0, 88,  0,  1,  0,  0,123,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 93,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,5": [
            {
                "type": "choices",
                "text": "\t[祭坛,blueShop]年轻的勇者啊，如果你可以供奉${(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20}金币的话，我可以提升你的能力！",
                "choices": [
                    {
                        "text": "攻击+8",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "value": "status:atk+8"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:buyTimeB11",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[祭坛,blueShop]你的金币不足！",
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "防御+16",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "value": "status:def+16"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:buyTimeB11",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[祭坛,blueShop]你的金币不足！",
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
            },
            {
                "type": "revisit"
            }
        ],
        "3,1": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    4,
                    1
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "10,11": [
            "\t[小偷,thief]这里是骑士领主所在的区域，它的结构与一座著名的塔的结构。",
            "\t[小偷,thief]我听说有守护骑士盾的守卫在地下14层，守护骑士剑的守卫在地下8层。",
            "\t[小偷,thief]地下很危险，一定要小心。后会有期。",
            {
                "type": "move",
                "loc": [
                    11,
                    11
                ],
                "time": 0,
                "steps": [
                    "left",
                    "down"
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,8": [
            {
                "type": "openDoor",
                "loc": [
                    4,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    1
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowWall",
                "loc": [
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowWall",
                "loc": [
                    [
                        8,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowWall",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
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
            "floorId": "base12",
            "loc": [
                6,
                11
            ]
        },
        "11,1": {
            "floorId": "base10",
            "stair": "downFloor"
        },
        "10,12": {
            "floorId": "base5",
            "loc": [
                10,
                12
            ],
            "direction": "up",
            "time": 500
        },
        "6,1": {
            "floorId": "mainplus0",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "7,1": [
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
        ],
        "1,8": [
            {
                "type": "if",
                "condition": "flag:doorB11==5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
                    },
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
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB11",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "if",
                "condition": "flag:doorB11==5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
                    },
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
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB11",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorB11==5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
                    },
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
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB11",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorB11==5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
                    },
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
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB11",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,2": [
            {
                "type": "if",
                "condition": "flag:doorB11==5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
                    },
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
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB11",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,2": [
            {
                "type": "if",
                "condition": "flag:doorB11==5",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
                    },
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
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB11",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
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
                    3
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        5
                    ]
                ],
                "floorId": "base16_8",
                "time": 0
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}