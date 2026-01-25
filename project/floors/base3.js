main.floors.base3=
{
    "floorId": "base3",
    "title": "地下  3F",
    "name": "-3",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 3,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,121,  0,  0,  0,  0,355,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,373,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1,  0,  1,  1,  0,  0,  0,  0,  0,  1,  1,  0,  1],
    [  1,  0,  0,  1,  0,214,214,214,  0,  1,  0,  0,  1],
    [  1,  0,373, 81,  0,214,372,214,  0, 81,373,  0,  1],
    [  1,  0,  0,  1,  0,214,214,214,  0,  1,  0,  0,  1],
    [  1,  0,  1,  1,  0,  0,  0,  0,  0,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,373,  0,  1,  0,  0,  0,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  0,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "1,1": [
            "\t[老人,man]这里是斗兽场，可怜的奴隶正在和丧尸武士大战。"
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": "base4",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": "base2",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,7": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,5": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,5": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,7": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "if",
                "condition": "flag:zombieB3==7 && flag:killedSlave == 0",
                "true": [
                    "\t[小奴隶,E372]感谢你救了我。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:savedSlave",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:zombieB3",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,6": [
            {
                "type": "addValue",
                "name": "flag:killedSlave",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
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