main.floors.base_plus_11=
{
    "floorId": "base_plus_11",
    "title": "地下  11F",
    "name": "-11",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0, 81, 28, 90,389, 81,  0,  0, 87,  1],
    [  1,  0,  1,  0,  1,  0,  0, 21,  1,224,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 85,  1,  1, 31,370,  0,  1],
    [  1,  1,  0,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,232,  0,232,  1,308,309,310,  1,  7,  0,  8,  1],
    [  1,  0,  0,  0,  1,311,312,313,  1,  0,  0,  0,  1],
    [  1,227,  0,227,  1,314,257,315,  1,  1,  0,  1,  1],
    [  1,  1,  0,  1,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1, 27,  0, 28,  1,  1, 83,  1,  1,  0,  1,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,224, 81,  0,  1,  0,  1],
    [  1, 32,  0, 21,  1,  0, 88,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 93,  1,  1]
],
    "firstArrive": [],
    "events": {
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
            "floorId": "base_plus_12",
            "loc": [
                6,
                11
            ]
        },
        "11,1": {
            "floorId": "base_plus_10",
            "stair": "downFloor"
        },
        "10,12": {
            "floorId": "base_plus_5",
            "loc": [
                10,
                12
            ],
            "direction": "up",
            "time": 500
        },
        "6,1": {
            "floorId": "floor_plus_0",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
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
                "floorId": "base_plus_16_ne",
                "time": 0
            }
        ],
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorB11==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
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
        "1,7": [
            {
                "type": "if",
                "condition": "flag:doorB11==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
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
        "3,7": [
            {
                "type": "if",
                "condition": "flag:doorB11==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
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
                "condition": "flag:doorB11==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            1
                        ]
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