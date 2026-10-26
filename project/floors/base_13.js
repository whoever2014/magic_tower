main.floors.base_13=
{
    "floorId": "base_13",
    "title": "地下  13F",
    "name": "-13",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 81,224,  0,  0, 81,  0,  0,  0, 88,  1],
    [  1,  0,  0,  1,  0,121,  0,  1, 81,  1,  1,  1,  1],
    [  1, 82,  1,  1, 31,  0, 21,  1,  0,  0,  0, 32,  1],
    [  1,370, 28,  1,  1, 81,  1,  1,  1,  1,  0,  1,  1],
    [  1,  0,  0,  1,  0,  0,224,  0,  1,227,  0,232,  1],
    [  1,  0,389, 81,  0,  1,  1, 81,  1,  0,  0,  0,  1],
    [  1,224,  0,  1,  0,389,  0,  0,  1,232,  0,227,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1],
    [  1,  0,  0,  0,  1,  0,227,  0,  1,  0,  0,  0,  1],
    [  1,224,  1,  0,  1, 31,  1,224,  0,  0, 39,  0,  1],
    [  1, 27,  1,224, 82,  0, 81,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "5,2": [
            "\t[老人,man]东边那条走廊看着好走，其实是个陷阱。\n黄骑士和铁骑士分列两侧，一旦踏进去就会被关在里面。",
            "\t[老人,man]想出来，就得把黄、蓝两组骑士全部打倒，门才会重新打开。\n量力而行。"
        ],
        "10,5": [
            "\t[勇士,hero]糟糕，是陷阱！",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
                    4
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
                    8
                ]
            },
            "\t[勇士,hero]看来不解决掉这四个骑士是出不去了。",
            {
                "type": "hide",
                "time": 0
            }
        ],
        "10,1": [
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        1
                    ]
                ],
                "time": 0
            }
        ],
        "10,9": [
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "swordsmanRed",
                "loc": [
                    [
                        10,
                        10
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        10
                    ]
                ],
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ],
        "9,10": [
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "swordsmanRed",
                "loc": [
                    [
                        10,
                        10
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        10
                    ]
                ],
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "base_12",
            "loc": [
                1,
                1
            ]
        },
        "11,1": {
            "floorId": "base_14",
            "loc": [
                11,
                1
            ]
        }
    },
    "afterBattle": {
        "9,5": [
            {
                "type": "addValue",
                "name": "flag:base13Knights",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:base13Knights==4",
                "true": [
                    "\t[勇士,hero]四个骑士都倒下了，门开了。",
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "addValue",
                "name": "flag:base13Knights",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:base13Knights==4",
                "true": [
                    "\t[勇士,hero]四个骑士都倒下了，门开了。",
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "addValue",
                "name": "flag:base13Knights",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:base13Knights==4",
                "true": [
                    "\t[勇士,hero]四个骑士都倒下了，门开了。",
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "addValue",
                "name": "flag:base13Knights",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:base13Knights==4",
                "true": [
                    "\t[勇士,hero]四个骑士都倒下了，门开了。",
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ]
            }
        ],
        "10,10": [
            {
                "type": "openDoor",
                "loc": [
                    2,
                    4
                ],
                "floorId": "base_4"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [],
    "fgmap": []
}