main.floors.base7=
{
    "floorId": "base7",
    "title": "地下  7F",
    "name": "-7",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81,  1,  0,  0, 88,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81, 82,  0,  0,  0,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81,  1,373,  0, 21,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81,  1,  1, 81,  1,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81,  1,  0,  0,226,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81,  1,232,  1, 27,  1],
    [  1, 81, 81, 81, 81, 81, 81, 81,  1,  0,  0,232,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  1,226, 28,227,  1,  0,227,  0,  1],
    [  1,224,  1,  0, 81,  0,  1,  0, 81,  0,  0,  0,  1],
    [  1, 31,224,  0,  1,  0,232,  0,  1,121, 31, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "9,11": [
            "\t[老人,man]当你有了足够多的黄钥匙，就可以解开这一层的谜题，从而获得空间移动宝物。"
        ],
        "9,2": [
            {
                "type": "if",
                "condition": "flag:hasCenterFly==0 && core.getBlockId(1,1)!=\"yellowDoor\"&& core.getBlockId(1,2)!=\"yellowDoor\"&& core.getBlockId(1,3)!=\"yellowDoor\"&& core.getBlockId(1,4)!=\"yellowDoor\"&& core.getBlockId(1,5)==\"yellowDoor\"&& core.getBlockId(1,6)==\"yellowDoor\"&& core.getBlockId(1,7)==\"yellowDoor\"&& core.getBlockId(2,1)!=\"yellowDoor\"&& core.getBlockId(2,2)!=\"yellowDoor\"&& core.getBlockId(2,3)==\"yellowDoor\"&& core.getBlockId(2,4)==\"yellowDoor\"&& core.getBlockId(2,5)==\"yellowDoor\"&& core.getBlockId(2,6)!=\"yellowDoor\"&& core.getBlockId(2,7)==\"yellowDoor\"&& core.getBlockId(3,1)==\"yellowDoor\"&& core.getBlockId(3,2)==\"yellowDoor\"&& core.getBlockId(3,3)==\"yellowDoor\"&& core.getBlockId(3,4)==\"yellowDoor\"&& core.getBlockId(3,5)==\"yellowDoor\"&& core.getBlockId(3,6)==\"yellowDoor\"&& core.getBlockId(3,7)==\"yellowDoor\"&& core.getBlockId(4,1)==\"yellowDoor\"&& core.getBlockId(4,2)==\"yellowDoor\"&& core.getBlockId(4,3)==\"yellowDoor\"&& core.getBlockId(4,4)==\"yellowDoor\"&& core.getBlockId(4,5)!=\"yellowDoor\"&& core.getBlockId(4,6)!=\"yellowDoor\"&& core.getBlockId(4,7)!=\"yellowDoor\"&& core.getBlockId(5,1)==\"yellowDoor\"&& core.getBlockId(5,2)==\"yellowDoor\"&& core.getBlockId(5,3)==\"yellowDoor\"&& core.getBlockId(5,4)!=\"yellowDoor\"&& core.getBlockId(5,5)!=\"yellowDoor\"&& core.getBlockId(5,6)!=\"yellowDoor\"&& core.getBlockId(5,7)!=\"yellowDoor\"&& core.getBlockId(6,1)==\"yellowDoor\"&& core.getBlockId(6,2)==\"yellowDoor\"&& core.getBlockId(6,3)!=\"yellowDoor\"&& core.getBlockId(6,4)!=\"yellowDoor\"&& core.getBlockId(6,5)!=\"yellowDoor\"&& core.getBlockId(6,6)!=\"yellowDoor\"&& core.getBlockId(6,7)!=\"yellowDoor\"&& core.getBlockId(7,1)==\"yellowDoor\"&& core.getBlockId(7,2)!=\"yellowDoor\"&& core.getBlockId(7,3)!=\"yellowDoor\"&& core.getBlockId(7,4)!=\"yellowDoor\"&& core.getBlockId(7,5)!=\"yellowDoor\"&& core.getBlockId(7,6)!=\"yellowDoor\"&& core.getBlockId(7,7)!=\"yellowDoor\"",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "Lvupfly",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:hasCenterFly",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:hasUpFly==0 && core.getBlockId(1,1)!=\"yellowDoor\"&& core.getBlockId(1,2)!=\"yellowDoor\"&& core.getBlockId(1,3)!=\"yellowDoor\"&& core.getBlockId(1,4)!=\"yellowDoor\"&& core.getBlockId(1,5)==\"yellowDoor\"&& core.getBlockId(1,6)==\"yellowDoor\"&& core.getBlockId(1,7)==\"yellowDoor\"&& core.getBlockId(2,1)!=\"yellowDoor\"&& core.getBlockId(2,2)!=\"yellowDoor\"&& core.getBlockId(2,3)==\"yellowDoor\"&& core.getBlockId(2,4)==\"yellowDoor\"&& core.getBlockId(2,5)==\"yellowDoor\"&& core.getBlockId(2,6)!=\"yellowDoor\"&& core.getBlockId(2,7)==\"yellowDoor\"&& core.getBlockId(3,1)==\"yellowDoor\"&& core.getBlockId(3,2)==\"yellowDoor\"&& core.getBlockId(3,3)==\"yellowDoor\"&& core.getBlockId(3,4)==\"yellowDoor\"&& core.getBlockId(3,5)==\"yellowDoor\"&& core.getBlockId(3,6)==\"yellowDoor\"&& core.getBlockId(3,7)==\"yellowDoor\"&& core.getBlockId(4,1)==\"yellowDoor\"&& core.getBlockId(4,2)==\"yellowDoor\"&& core.getBlockId(4,3)==\"yellowDoor\"&& core.getBlockId(4,4)==\"yellowDoor\"&& core.getBlockId(4,5)!=\"yellowDoor\"&& core.getBlockId(4,6)!=\"yellowDoor\"&& core.getBlockId(4,7)!=\"yellowDoor\"&& core.getBlockId(5,1)==\"yellowDoor\"&& core.getBlockId(5,2)==\"yellowDoor\"&& core.getBlockId(5,3)==\"yellowDoor\"&& core.getBlockId(5,4)!=\"yellowDoor\"&& core.getBlockId(5,5)==\"yellowDoor\"&& core.getBlockId(5,6)!=\"yellowDoor\"&& core.getBlockId(5,7)!=\"yellowDoor\"&& core.getBlockId(6,1)==\"yellowDoor\"&& core.getBlockId(6,2)==\"yellowDoor\"&& core.getBlockId(6,3)!=\"yellowDoor\"&& core.getBlockId(6,4)==\"yellowDoor\"&& core.getBlockId(6,5)==\"yellowDoor\"&& core.getBlockId(6,6)==\"yellowDoor\"&& core.getBlockId(6,7)==\"yellowDoor\"&& core.getBlockId(7,1)==\"yellowDoor\"&& core.getBlockId(7,2)!=\"yellowDoor\"&& core.getBlockId(7,3)!=\"yellowDoor\"&& core.getBlockId(7,4)!=\"yellowDoor\"&& core.getBlockId(7,5)==\"yellowDoor\"&& core.getBlockId(7,6)!=\"yellowDoor\"&& core.getBlockId(7,7)!=\"yellowDoor\"",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "upFly",
                        "loc": [
                            [
                                2,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:hasUpFly",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:hasDownFly==0 && core.getBlockId(1,1)!=\"yellowDoor\"&& core.getBlockId(1,2)!=\"yellowDoor\"&& core.getBlockId(1,3)!=\"yellowDoor\"&& core.getBlockId(1,4)!=\"yellowDoor\"&& core.getBlockId(1,5)==\"yellowDoor\"&& core.getBlockId(1,6)==\"yellowDoor\"&& core.getBlockId(1,7)==\"yellowDoor\"&& core.getBlockId(2,1)!=\"yellowDoor\"&& core.getBlockId(2,2)!=\"yellowDoor\"&& core.getBlockId(2,3)==\"yellowDoor\"&& core.getBlockId(2,4)==\"yellowDoor\"&& core.getBlockId(2,5)==\"yellowDoor\"&& core.getBlockId(2,6)!=\"yellowDoor\"&& core.getBlockId(2,7)==\"yellowDoor\"&& core.getBlockId(3,1)==\"yellowDoor\"&& core.getBlockId(3,2)==\"yellowDoor\"&& core.getBlockId(3,3)==\"yellowDoor\"&& core.getBlockId(3,4)==\"yellowDoor\"&& core.getBlockId(3,5)==\"yellowDoor\"&& core.getBlockId(3,6)==\"yellowDoor\"&& core.getBlockId(3,7)==\"yellowDoor\"&& core.getBlockId(4,1)==\"yellowDoor\"&& core.getBlockId(4,2)==\"yellowDoor\"&& core.getBlockId(4,3)==\"yellowDoor\"&& core.getBlockId(4,4)==\"yellowDoor\"&& core.getBlockId(4,5)!=\"yellowDoor\"&& core.getBlockId(4,6)!=\"yellowDoor\"&& core.getBlockId(4,7)!=\"yellowDoor\"&& core.getBlockId(5,1)==\"yellowDoor\"&& core.getBlockId(5,2)==\"yellowDoor\"&& core.getBlockId(5,3)==\"yellowDoor\"&& core.getBlockId(5,4)!=\"yellowDoor\"&& core.getBlockId(5,5)!=\"yellowDoor\"&& core.getBlockId(5,6)==\"yellowDoor\"&& core.getBlockId(5,7)!=\"yellowDoor\"&& core.getBlockId(6,1)==\"yellowDoor\"&& core.getBlockId(6,2)==\"yellowDoor\"&& core.getBlockId(6,3)!=\"yellowDoor\"&& core.getBlockId(6,4)==\"yellowDoor\"&& core.getBlockId(6,5)==\"yellowDoor\"&& core.getBlockId(6,6)==\"yellowDoor\"&& core.getBlockId(6,7)==\"yellowDoor\"&& core.getBlockId(7,1)==\"yellowDoor\"&& core.getBlockId(7,2)!=\"yellowDoor\"&& core.getBlockId(7,3)!=\"yellowDoor\"&& core.getBlockId(7,4)!=\"yellowDoor\"&& core.getBlockId(7,5)!=\"yellowDoor\"&& core.getBlockId(7,6)==\"yellowDoor\"&& core.getBlockId(7,7)!=\"yellowDoor\"",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "downFly",
                        "loc": [
                            [
                                6,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:hasDownFly",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    2,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    3,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    4,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    5,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    1
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    2
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    5
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    6
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "yellowDoor",
                "loc": [
                    1,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": "base8",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "base6",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "6,9": [
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
        "11,6": [
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
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0, 90, 90, 90, 90, 90,  0,  0,  0,  0,  0],
    [  0,  0,  0, 90, 90, 90, 90,  0,  0,  0,  0,  0,  0],
    [  0,  0, 90, 90, 90, 90,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0, 90, 90, 90,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0, 90, 90, 90,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0, 90,  0, 90,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0, 90, 90, 90,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "underGround": true
}