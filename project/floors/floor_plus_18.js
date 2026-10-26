main.floors.floor_plus_18=
{
    "floorId": "floor_plus_18",
    "title": "主塔  18F",
    "name": "18",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,215,  0,206,217,  0,  0,  0,217,206,  0,215,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  0,  0,203,  0,  0,  0,  0,  0,203,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1, 88,  1,  0,  0,  0, 55,  0,  0,  0,  1, 87,  1],
    [  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,203,  0,  0,  0,  0,  0,203,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,215,  0,206,217,  0,  0,  0,217,206,  0,215,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [
        "四角的石像在黑暗里注视着你。这一次，它们和墙壁一样惨白，几乎分不出来。\n中央那堵墙后面，有什么在发光。"
    ],
    "events": {
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
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
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
            "floorId": "floor_plus_17",
            "loc": [
                1,
                6
            ]
        },
        "11,6": {
            "floorId": "floor_plus_19",
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
                "condition": "flag:cross2==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross2",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "if",
                "condition": "flag:cross2==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross2",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "flag:cross2==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross2",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,11": [
            {
                "type": "if",
                "condition": "flag:cross2==3",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                7
                            ]
                        ],
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:cross2",
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
            },
            "\t[勇士,hero]十字架在发烫。丧尸、丧尸武士……还有那位伯爵，应该都怕它。"
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
    [  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0],
    [  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": []
}