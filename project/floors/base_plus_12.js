main.floors.base_plus_12=
{
    "floorId": "base_plus_12",
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
    [  1,  0,  0,  0, 81,370,  0,  0, 81,232,  0, 31,  1],
    [  1,  0,224,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1, 81,  1,  1,224,  1,232,  1,224,  1,227,  1],
    [  1,  0,  0,  0,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1, 81,  1, 81,  1, 81,  1],
    [  1,  1, 81,  1,  1,227,  1,232,  1,232,  1,232,  1],
    [  1,  0,370,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,224,  1,  0, 81,224,  0,  0, 81,227,  0, 27,  1],
    [  1, 32,232,  0,  1,  0, 87,  0,  1, 21, 21, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "base_plus_11",
            "loc": [
                6,
                11
            ]
        },
        "1,1": {
            "floorId": "base_plus_13",
            "loc": [
                1,
                1
            ]
        }
    },
    "afterBattle": {
        "11,8": [
            {
                "type": "switch",
                "condition": "flag:redKeyB15",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1000"
                            }
                        ]
                    },
                    {
                        "case": "3",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "redKey",
                                "loc": [
                                    [
                                        2,
                                        6
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "switch",
                "condition": "flag:redKeyB15",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1000"
                            }
                        ]
                    },
                    {
                        "case": "3",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "redKey",
                                "loc": [
                                    [
                                        2,
                                        6
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "switch",
                "condition": "flag:redKeyB15",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1000"
                            }
                        ]
                    },
                    {
                        "case": "3",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "redKey",
                                "loc": [
                                    [
                                        2,
                                        6
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "addValue",
                "name": "flag:redKeyB15",
                "value": "1000"
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
                "type": "switch",
                "condition": "flag:redKeyB15",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1000"
                            }
                        ]
                    },
                    {
                        "case": "3",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "flag:redKeyB15",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "case": "4",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        5
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        1,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "yellowKey",
                                "loc": [
                                    [
                                        3,
                                        7
                                    ]
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "redKey",
                                "loc": [
                                    [
                                        2,
                                        6
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [],
    "fgmap": []
}