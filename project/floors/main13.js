main.floors.main13=
{
    "floorId": "main13",
    "title": "主塔  13F",
    "name": "13",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,214,  0,214,  1, 28, 32, 21,  0,203, 21, 21,  1],
    [  1,  0,  1,  0,  1,  0,214,  0,  1,  1,  1, 27,  1],
    [  1,214,  0,214,  1,  1, 81,  1,  1,218, 31,206,  1],
    [  1,  1, 82,  1,  1, 31,  0, 27,  1, 81,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,213,  0,217,203, 21, 21,  1],
    [  1,203,  1,203,  1,  1, 81,  1,  1, 82,  1,  1,  1],
    [  1,  0,  0,  0,  1,367,  0,  0,  0,  0,  0,121,  1],
    [  1,  1, 81,  1,  1,  0,  0, 31,  1,  0,203,  0,  1],
    [  1,  0,206,  0,  1,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,206, 81,  0,  0,  0,  0,203,  0,  0,  1],
    [  1, 31,  0,  0,  1,  0, 87,  0,  1,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "11,7": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[老人,man]和法师作战很头痛把？银盾可以减少魔法伤害。"
            ]
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": "main14",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": "main12",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "1,1": [
            {
                "type": "if",
                "condition": "flag:redKeyF13==3",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyF13",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,3": [
            {
                "type": "if",
                "condition": "flag:redKeyF13==3",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyF13",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,1": [
            {
                "type": "if",
                "condition": "flag:redKeyF13==3",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyF13",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,3": [
            {
                "type": "if",
                "condition": "flag:redKeyF13==3",
                "true": [
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "32",
                        "loc": [
                            [
                                2,
                                6
                            ]
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:redKeyF13",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "addValue",
                "name": "flag:doorF14_1",
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
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}