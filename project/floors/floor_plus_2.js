main.floors.floor_plus_2=
{
    "floorId": "floor_plus_2",
    "title": "主塔  2F",
    "name": "2",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  1,  0,  1,  0,  0,  0, 82,  0, 88,  1],
    [  1,  0,  0, 86,  0,  1,222,  0,222,  1,  0,  0,  1],
    [  1,  1,  1,  1,  0,  1,  1, 86,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  0,  1,223,  0,  0,223,  1,  0,  1],
    [  1,  0,  0, 86,  0, 86,  0,  1,  1,  1,  1,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  0, 86,  0, 86,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  0,  1,  0,  1,  0,  1, 86,  1,  1,  0,  1],
    [  1,  1,  1,  1,  0,  1,223,  0,  0,223,  1,  0,  1],
    [  1,  0,  0, 86,  0,  1,  1, 86,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "11,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[小偷,thief]刚好我刚挖开这面墙。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            6
                        ]
                    ],
                    "time": 0
                },
                "\t[小偷,thief]我听说地下也有很多宝物呢。我要去挖开通往地下的路。",
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            4
                        ]
                    ],
                    "floorId": "floor_plus_0",
                    "time": 0
                },
                {
                    "type": "move",
                    "loc": [
                        9,
                        6
                    ],
                    "time": 0,
                    "steps": [
                        "right",
                        "right",
                        "up"
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            6
                        ]
                    ],
                    "time": 0
                },
                {
                    "type": "hide",
                    "time": 0
                }
            ]
        },
        "9,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[小偷,thief]完工！"
            ]
        },
        "6,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "11,1": {
            "floorId": "floor_plus_1",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "floor_plus_3",
            "loc": [
                11,
                11
            ]
        }
    },
    "afterBattle": {
        "6,2": [
            {
                "type": "if",
                "condition": "flag:doorF2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF2",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,2": [
            {
                "type": "if",
                "condition": "flag:doorF2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF2",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "if",
                "condition": "flag:doorF2==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF2",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "flag:doorF2==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF2",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,9": [
            {
                "type": "if",
                "condition": "flag:doorF2==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            5
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            2
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF2",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,9": [
            {
                "type": "if",
                "condition": "flag:doorF2==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            3
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            7
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            2
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF2",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": [
        11,
        11
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}