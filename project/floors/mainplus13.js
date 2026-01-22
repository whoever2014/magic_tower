main.floors.mainplus13=
{
    "floorId": "mainplus13",
    "title": "主塔  13F",
    "name": "13",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,214,  0,214,  2, 28, 32, 21,  0,203, 21, 21,  2],
    [  2,  0,  1,  0,  2,  0,214,  0,  2,  2,  2, 27,  2],
    [  2,214,  0,214,  2,  2, 81,  2,  2,218, 31,206,  2],
    [  2,  2, 82,  2,  2, 31,  0, 27,  2, 81,  2,  2,  2],
    [  2,  0,  0,  0,  0,  0,213,  0,217,203, 21, 21,  2],
    [  2,203,  1,203,  2,  2, 81,  2,  2, 82,  2,  2,  2],
    [  2,  0,  0,  0,  2,367,  0,  0,  0,  0,  0,  0,  2],
    [  2,  2, 81,  2,  2,  0,  0, 31,  2,  0,203,  0,  2],
    [  2,  0,206,  0,  2,  2,  2,  2,  2,  2, 81,  2,  2],
    [  2,  0,  0,206, 81,  0,  0,  0,  0,203,  0,  0,  2],
    [  2, 31,  0,  0,  2,  0, 87,  0,  2,  0,  0, 88,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "mainplus14",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": "mainplus12",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}