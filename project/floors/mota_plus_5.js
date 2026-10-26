main.floors.mota_plus_5=
{
    "floorId": "mota_plus_5",
    "title": "魔塔  5F",
    "name": "0",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  0,322,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,323,  0,  0,  0,  0,  0,  0,  0,321,  0,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  0, 90,  0,  3,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    10
                ]
            ]
        }
    ],
    "events": {
        "6,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                {
                    "type": "if",
                    "condition": "flag:round2==1",
                    "true": [
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    1
                                ]
                            ],
                            "floorId": "floor_plus_20",
                            "remove": true,
                            "time": 0
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "floor_plus_20",
                            "loc": [
                                6,
                                2
                            ],
                            "direction": "down",
                            "time": 500
                        }
                    ],
                    "false": [
                        {
                            "type": "changeFloor",
                            "floorId": "floor_0",
                            "loc": [
                                6,
                                5
                            ],
                            "time": 500
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {
        "7,7": null,
        "5,7": null,
        "2,6": [
            {
                "type": "setBlock",
                "number": "3",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "3",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "if",
                "condition": "flag:round2==1",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:r2MotaDone",
                        "value": "1"
                    }
                ],
                "false": []
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "440"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "atk",
                "value": "448"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "144"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "special",
                "value": "[2,15]"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "value",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "money",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "experience",
                "value": "2"
            }
        ],
        "10,6": [
            {
                "type": "setBlock",
                "number": "3",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "3",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "if",
                "condition": "flag:round2==1",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:r2MotaDone",
                        "value": "1"
                    }
                ],
                "false": []
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "440"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "atk",
                "value": "448"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "144"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "special",
                "value": "[2,15]"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "value",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "money",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "experience",
                "value": "2"
            }
        ],
        "6,2": [
            {
                "type": "setBlock",
                "number": "3",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "3",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "if",
                "condition": "flag:round2==1",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:r2MotaDone",
                        "value": "1"
                    }
                ],
                "false": []
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "440"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "atk",
                "value": "448"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "144"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "special",
                "value": "[2,15]"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "value",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "money",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "experience",
                "value": "2"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        11
    ],
    "downFloor": [
        6,
        11
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flag:round2==1 && (core.hasItem('proof_tyrant') || String(core.getFlag('proof', '')).indexOf('tyrant') >= 0) && core.getBlockId(6,2) == 'proof_tyrant'",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            2
                        ]
                    ],
                    "remove": true,
                    "time": 0
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "flag:round2==1 && (core.hasItem('proof_sage') || String(core.getFlag('proof', '')).indexOf('sage') >= 0) && core.getBlockId(2,6) == 'proof_sage'",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            6
                        ]
                    ],
                    "remove": true,
                    "time": 0
                }
            ],
            "false": []
        },
        {
            "type": "if",
            "condition": "flag:round2==1 && (core.hasItem('proof_brave') || String(core.getFlag('proof', '')).indexOf('brave') >= 0) && core.getBlockId(10,6) == 'proof_brave'",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            6
                        ]
                    ],
                    "remove": true,
                    "time": 0
                }
            ],
            "false": []
        }
    ]
}