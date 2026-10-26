main.floors.floor_2=
{
    "floorId": "floor_2",
    "title": "主塔  2F",
    "name": "2",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,121,  0,  1,  0,  1,  0,  0,  0, 82,  0, 88,  1],
    [  1,122,  0, 86,  0,  1,222,  0,222,  1,  0,  0,  1],
    [  1,  1,  1,  1,  0,  1,  1, 86,  1,  1,  1,  0,  1],
    [  1,122,  0,  1,  0,  1,223,  0,  0,223,  1,  0,  1],
    [  1,121,  0, 86,  0, 86,  0,  1,  1,  1,  1,  0,  1],
    [  1,  1,  1,  1,  0,  1,  0,  1,  0,123,  1,  0,  1],
    [  1,122,  0, 86,  0, 86,  0,  1,  0,  0,  1,  0,  1],
    [  1,121,  0,  1,  0,  1,  0,  1, 86,  1,  1,  0,  1],
    [  1,  1,  1,  1,  0,  1,223,  0,  0,223,  1,  0,  1],
    [  1,121,  0, 86,  0,  1,  1, 86,  1,  1,  1,  0,  1],
    [  1,122,  0,  1,  0,  1, 21, 21, 21,123,  1, 87,  1],
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
                "\t[杰克,thief]刚好我刚挖开这面墙。",
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
                "\t[杰克,thief]我听说地下也有很多宝物呢。我要去挖开通往地下的路。",
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            4
                        ]
                    ],
                    "floorId": "floor_0",
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
        "1,1": [
            "\t[老人,man]感谢你救了我，我帮你提升8点攻击力。",
            {
                "type": "addValue",
                "name": "status:atk",
                "value": "8"
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        1
                    ]
                ],
                "time": 500
            }
        ],
        "1,8": [
            "\t[老人,man]感谢你救了我，我帮你提升8点防御力。",
            {
                "type": "addValue",
                "name": "status:def",
                "value": "8"
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        8
                    ]
                ],
                "time": 500
            }
        ],
        "1,4": [
            "\t[商人,woman]感谢你救了我，这里是1000金币。",
            {
                "type": "addValue",
                "name": "status:money",
                "value": "1000"
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "time": 500
            }
        ],
        "1,11": [
            "\t[商人,woman]感谢你救了我，我这里有5个蓝血瓶。",
            {
                "type": "addValue",
                "name": "status:hp",
                "value": "1000"
            },
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        11
                    ]
                ],
                "time": 500
            }
        ],
        "9,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "1,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[老人,man]感谢你救了我，我帮你提升32点攻击力。",
                {
                    "type": "addValue",
                    "name": "status:atk",
                    "value": "32"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            5
                        ]
                    ],
                    "time": 500
                }
            ]
        },
        "1,2": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[商人,woman]感谢你救了我，我这里有一瓶圣水，可以恢复8000生命。",
                {
                    "type": "addValue",
                    "name": "status:hp",
                    "value": "8000"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            2
                        ]
                    ],
                    "time": 500
                }
            ]
        },
        "1,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[商人,woman]感谢你救了我，这里是4000金币。",
                {
                    "type": "addValue",
                    "name": "status:money",
                    "value": "4000"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            7
                        ]
                    ],
                    "time": 500
                }
            ]
        },
        "1,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[老人,man]感谢你救了我，我帮你提升32点防御力。",
                {
                    "type": "addValue",
                    "name": "status:def",
                    "value": "32"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            10
                        ]
                    ],
                    "time": 500
                }
            ]
        },
        "8,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                {
                    "type": "closeDoor",
                    "id": "stealDoor",
                    "loc": [
                        10,
                        6
                    ]
                },
                {
                    "type": "hide",
                    "time": 0
                }
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
        },
        "9,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[杰克,thief]完工！",
                "\t[杰克,thief]这座塔的墙可真硬，我挖得手都磨破了。\n这把镐子给你，挡路的墙，敲开就是。",
                {
                    "type": "addValue",
                    "name": "item:pickaxe",
                    "value": "1"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "tip",
                    "text": "获得 锄头 ×1"
                },
                "\t[杰克,thief]我去前面探探路，回见！",
                {
                    "type": "hide",
                    "time": 500
                }
            ]
        }
    },
    "changeFloor": {
        "11,1": {
            "floorId": "floor_1",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "floor_3",
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
                            7,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            8
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
                            7,
                            10
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            8
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
                        "type": "openDoor",
                        "loc": [
                            7,
                            10
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
                    },
                    {
                        "type": "closeDoor",
                        "id": "steelDoor",
                        "loc": [
                            10,
                            6
                        ]
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
                        "type": "openDoor",
                        "loc": [
                            7,
                            10
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
                    },
                    {
                        "type": "closeDoor",
                        "id": "steelDoor",
                        "loc": [
                            10,
                            6
                        ]
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
                        "type": "openDoor",
                        "loc": [
                            7,
                            10
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
                    },
                    {
                        "type": "closeDoor",
                        "id": "steelDoor",
                        "loc": [
                            10,
                            6
                        ]
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
                        "type": "openDoor",
                        "loc": [
                            7,
                            10
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
                    },
                    {
                        "type": "closeDoor",
                        "id": "steelDoor",
                        "loc": [
                            10,
                            6
                        ]
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