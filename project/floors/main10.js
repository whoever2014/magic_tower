main.floors.main10=
{
    "floorId": "main10",
    "title": "主塔  10F",
    "name": "10",
    "canFlyTo": true,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,209,209,209,  1,  1,  0,  1,  1,209,209,209,  1],
    [  1,  0,366,  0, 85,  0,  0,  0, 85,  0,210,  0,  1],
    [  1,  1,  1,  1,  1,  0,211,  0,  1,  1,  1,  1,  1],
    [  1,209, 27,209,  1,  0,  0,  0,  1,209, 28,209,  1],
    [  1,  0,209,  0,  1,  1, 83,  1,  1,  0,209,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1, 88,123, 81,253,  0,  0,  0,253, 81,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,7": [
            "\t[骷髅队长,skeletonCaptain]你的好日子到头了！你中埋伏了！弟兄们给我上！",
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 0,
                "keep": true,
                "steps": [
                    "up",
                    "up",
                    "up",
                    "up"
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    5
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    5
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,3": [
            "\t[骷髅队长,skeletonCaptain]你怎么能突出重围？我要和你决斗！",
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:atk10F",
                "value": "core.status.hero.atk"
            },
            {
                "type": "setValue",
                "name": "flag:def10F",
                "value": "core.status.hero.def"
            }
        ],
        "2,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": "main9",
            "loc": [
                1,
                11
            ]
        },
        "6,1": {
            "floorId": "main11",
            "loc": [
                6,
                1
            ]
        }
    },
    "afterBattle": {
        "6,2": [
            "\t[骷髅队长,skeletonCaptain]你还会遇到更多强大的对手。",
            {
                "type": "addValue",
                "name": "flag:beat10F",
                "value": "1"
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
                    8
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        8,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        9,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        3,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        8,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        4,
                        2
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        2,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    2,
                    11
                ],
                "time": 0,
                "keep": true,
                "steps": [
                    "right",
                    "right",
                    "right",
                    "right"
                ]
            },
            "\t[小偷,thief]这些骷髅可真难缠。总算是结束了，我在楼上等你。",
            {
                "type": "waitAsync"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    11
                ],
                "time": 0,
                "steps": [
                    "up",
                    "up",
                    "up"
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "if",
                "condition": "flag:doorF10==7",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF10",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
        1,
        11
    ],
    "upFloor": [
        6,
        1
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}