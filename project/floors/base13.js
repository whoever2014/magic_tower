main.floors.base13=
{
    "floorId": "base13",
    "title": "地下  13F",
    "name": "-13",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 81,224,  0,  0, 81,  0,  0,  0, 88,  1],
    [  1,  0,  0,  1,  0,121,  0,  1, 81,  1,  1,  1,  1],
    [  1, 82,  1,  1, 31,  0, 21,  1,  0,  0,  0, 32,  1],
    [  1,373, 28,  1,  1, 81,  1,  1,  1,  1,  0,  1,  1],
    [  1,  0,  0,  1,  0,  0,224,  0,  1,226,  0,226,  1],
    [  1,  0,373, 81,  0,  1,  1, 81,  1,  0,  0,  0,  1],
    [  1,224,  0,  1,  0,226,  0,  0,  1,232,  0,232,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1],
    [  1,  0,  0,  0,  1,  0,232,  0,  1,368,  0,368,  1],
    [  1,224,  1,  0,  1, 31,  1,224,  0,  0,  0,  0,  1],
    [  1, 27,  1,226, 82,  0, 81,  0,  1,  0,368,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,1": [
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
                "type": "hide",
                "loc": [
                    [
                        10,
                        1
                    ]
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "base12",
            "loc": [
                1,
                1
            ]
        },
        "11,1": {
            "floorId": "base14",
            "loc": [
                11,
                1
            ]
        }
    },
    "afterBattle": {
        "9,9": [
            {
                "type": "if",
                "condition": "flag:doorB4_1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ],
                        "floorId": "base4"
                    },
                    {
                        "type": "setEnemy",
                        "id": "great_magician",
                        "name": "def",
                        "value": "core.material.enemys.great_magician.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "brownWizard",
                        "name": "def",
                        "value": "core.material.enemys.brownWizard.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "soldier",
                        "name": "def",
                        "value": "core.material.enemys.soldier.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "ghostSkeleton",
                        "name": "def",
                        "value": "core.material.enemys.ghostSkeleton.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "steelRock",
                        "name": "def",
                        "value": "core.material.enemys.steelRock.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "slimeMan",
                        "name": "hp",
                        "value": "core.material.enemys.slimeMan.hp+120"
                    },
                    {
                        "type": "setEnemy",
                        "id": "blackMagician",
                        "name": "def",
                        "value": "core.material.enemys.blackMagician.def+60"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB4_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,11": [
            {
                "type": "if",
                "condition": "flag:doorB4_1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ],
                        "floorId": "base4"
                    },
                    {
                        "type": "setEnemy",
                        "id": "great_magician",
                        "name": "def",
                        "value": "core.material.enemys.great_magician.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "brownWizard",
                        "name": "def",
                        "value": "core.material.enemys.brownWizard.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "soldier",
                        "name": "def",
                        "value": "core.material.enemys.soldier.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "ghostSkeleton",
                        "name": "def",
                        "value": "core.material.enemys.ghostSkeleton.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "steelRock",
                        "name": "def",
                        "value": "core.material.enemys.steelRock.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "slimeMan",
                        "name": "hp",
                        "value": "core.material.enemys.slimeMan.hp+120"
                    },
                    {
                        "type": "setEnemy",
                        "id": "blackMagician",
                        "name": "def",
                        "value": "core.material.enemys.blackMagician.def+60"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB4_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,9": [
            {
                "type": "if",
                "condition": "flag:doorB4_1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ],
                        "floorId": "base4"
                    },
                    {
                        "type": "setEnemy",
                        "id": "great_magician",
                        "name": "def",
                        "value": "core.material.enemys.great_magician.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "brownWizard",
                        "name": "def",
                        "value": "core.material.enemys.brownWizard.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "soldier",
                        "name": "def",
                        "value": "core.material.enemys.soldier.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "ghostSkeleton",
                        "name": "def",
                        "value": "core.material.enemys.ghostSkeleton.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "steelRock",
                        "name": "def",
                        "value": "core.material.enemys.steelRock.def+60"
                    },
                    {
                        "type": "setEnemy",
                        "id": "slimeMan",
                        "name": "hp",
                        "value": "core.material.enemys.slimeMan.hp+120"
                    },
                    {
                        "type": "setEnemy",
                        "id": "blackMagician",
                        "name": "def",
                        "value": "core.material.enemys.blackMagician.def+60"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB4_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,4": [
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
    "afterGetItem": {
        "1,11": [
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
        ]
    },
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