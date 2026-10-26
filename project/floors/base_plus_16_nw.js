main.floors.base_plus_16_nw=
{
    "floorId": "base_plus_16_nw",
    "title": "地下  16F",
    "name": "-18",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 26,  0,  1, 63,  0, 63,  1,246,  0,246,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,  0],
    [  1,  1, 85,  1,  1, 63,  0,  0,  1,246,  0,246,  1],
    [  1,223,  0,223,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1, 32,  0, 21, 81,204,  0,  0,  1],
    [  1,  1, 85,  1,  1,  0, 27, 28,  1,  0,204, 31,  1],
    [  1,223,  0,223,  1,230,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  1, 81,  1,  0,  0,  0,  0,  0,  0],
    [  1,  1, 81,  1,  1,325,  1,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  1, 81,  1,204,  1,  0,395,  0,  1],
    [  1,  0,  0,395, 81,  0,  0,  0,  1, 21, 32, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1]
],
    "firstArrive": null,
    "events": {
        "10,2": [
            {
                "type": "if",
                "condition": " core.getBlockId(5,1)==\"moneyPocket\" && core.getBlockId(5,3)==\"moneyPocket\" && core.getBlockId(7,3)==\"moneyPocket\" && core.getBlockId(7,1)==\"moneyPocket\"",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                1
                            ],
                            [
                                5,
                                3
                            ],
                            [
                                7,
                                1
                            ],
                            [
                                7,
                                3
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "setBlock",
                        "number": "coin",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowWall",
                        "loc": [
                            [
                                6,
                                4
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                2
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                8,
                                2
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "12,8": {
            "floorId": "base_plus_16_n",
            "loc": [
                0,
                8
            ],
            "time": 500
        },
        "12,2": {
            "floorId": "base_plus_16_n",
            "loc": [
                0,
                2
            ],
            "time": 500
        },
        "7,12": {
            "floorId": "base_plus_16_w",
            "loc": [
                7,
                0
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "3,4": [
            {
                "type": "if",
                "condition": "flag:doorB16_nw_guard==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_nw_guard",
                        "value": "2"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "flag:doorB16_nw_guard==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_nw_guard",
                        "value": "2"
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "if",
                "condition": "flag:doorB16_nw_guard==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_nw_guard",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "if",
                "condition": "flag:doorB16_nw_guard==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_nw_guard",
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
        11,
        9
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}