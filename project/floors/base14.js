main.floors.base14=
{
    "floorId": "base14",
    "title": "地下  14F",
    "name": "-14",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 27, 82,373,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1, 28,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  1],
    [  1, 81,  1,  1,  0, 81,  0, 81,  0,  1,  1,  1,  1],
    [  1,232,  0,226,  0,  1,  0,  1,226, 81, 21, 32,  1],
    [  1,  0, 21,  0,226,  1,  0,  1,  0,  1,  0, 21,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  0,  1,  1,  1,  1],
    [  1, 21, 21, 21, 21,  1,  0,  1,  0,  1, 21, 22,  1],
    [  1,  0,  0,  0, 22,  1,  0,  1,227, 81,  0, 21,  1],
    [  1,  1, 85,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,222,  0,222,  1,  0,  0,  0, 81,374,  1, 27,  1],
    [  1,  0,  0,  0,  0,  0, 88,  0,  1,373, 21, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": "base13",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "base15",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "1,10": [
            {
                "type": "if",
                "condition": "flag:doorB14==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB14",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,10": [
            {
                "type": "if",
                "condition": "flag:doorB14==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB14",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,11": [
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
    "afterGetItem": {
        "2,1": [
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
        "1,2": [
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
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}