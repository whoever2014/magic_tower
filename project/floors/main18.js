main.floors.main18=
{
    "floorId": "main18",
    "title": "主塔  18F",
    "name": "18",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,215,  0,206,217, 81,  0, 81,217,206,  0,215,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0, 86,  0,  0, 86,  0, 86,  0,  0, 86,  0,  1],
    [  1,  0,  1,203, 21,  1,  0,  1, 21,203,  1,  0,  1],
    [  1,  0,  1,  0,  1,  1,  1,  1,  1,  0,  1,  0,  1],
    [  1, 88,  1,  0,  1,  0, 55,  0,  1,  0,  1, 87,  1],
    [  1,  0,  1,  0,  1,  1,  1,  1,  1,  0,  1,  0,  1],
    [  1,  0,  1,203, 21,  1,  0,  1, 21,203,  1,  0,  1],
    [  1,  0, 86,  0,  0, 86,  0, 86,  0,  0, 86,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,215,  0,206,217, 81,  0, 81,217,206,  0,215,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "1,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "2,1": [
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        1
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "10,1": [
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        11,
                        1
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "10,11": [
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground",
                "loc": [
                    [
                        11,
                        11
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        11,
                        11
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "1,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "2,11": [
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground",
                "loc": [
                    [
                        1,
                        11
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        11
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "5,6": [
            {
                "type": "show",
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
                        7,
                        6
                    ]
                ],
                "time": 0
            }
        ],
        "7,6": [
            {
                "type": "show",
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
                        7,
                        6
                    ]
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "main17",
            "loc": [
                1,
                6
            ]
        },
        "11,6": {
            "floorId": "main19",
            "loc": [
                11,
                6
            ]
        }
    },
    "afterBattle": {
        "1,1": [
            {
                "type": "if",
                "condition": "flag:cross==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "if",
                "condition": "flag:cross==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "flag:cross==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,11": [
            {
                "type": "if",
                "condition": "flag:cross==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                2,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                10,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main17"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main16"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBlock",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "floorId": "main19"
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                6
                            ]
                        ]
                    },
                    {
                        "type": "setBgFgBlock",
                        "name": "bg",
                        "number": "whiteWall",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                4,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                6
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:hasCross",
                "value": "1"
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
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  1,  1,  1,  0,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}