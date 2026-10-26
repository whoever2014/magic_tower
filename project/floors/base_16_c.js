main.floors.base_16_c=
{
    "floorId": "base_16_c",
    "title": "地下  16F",
    "name": "-16",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,231,  0,  1,  0,  0,  1],
    [  1,  0,  1,  0,  1,  1, 81,  1, 21,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,204,  1,  1,  1,  0,  0,  1],
    [  0,  0,  1,  1,  1,  0,  0,  1, 87,  1,  1,  0,  1],
    [  1,  1,  1,246,  1,246,123,246,  0, 32,  1,  1,  1],
    [  0,  0,  0,  0, 82,  0,245,  0,  0,  0,  0,204,  0],
    [  1,  1,  1,246,  1,121,  0,  0,  0,207,  1,  1,  1],
    [  0,  0,  1,  1,  1,  1, 81,  1,  1,  1,  1,  0,  1],
    [  1,  0,  1, 28,395,  0,207, 21, 22, 27,  1,  0,  1],
    [  1,  0,  1,  1, 21,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1, 22,  1,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "8,5": [
            "\t[杰克,thief]放开我！",
            {
                "type": "setValue",
                "name": "flag:doorF2",
                "value": "0"
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        11
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        2
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        5
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        7
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        10
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        6
                    ]
                ],
                "floorId": "floor_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        7
                    ]
                ],
                "floorId": "floor_2",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        5
                    ]
                ],
                "floorId": "floor_2",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        7
                    ]
                ],
                "floorId": "floor_2",
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        3,
                        2
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        3,
                        5
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        3,
                        10
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        7,
                        3
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "steelDoor",
                "loc": [
                    [
                        7,
                        10
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        8,
                        1
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "yellowWall",
                "loc": [
                    [
                        9,
                        1
                    ]
                ],
                "floorId": "floor_2"
            },
            {
                "type": "setBlock",
                "number": "yellowWall",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "floorId": "floor_2"
            },
            "\t[魔王Zeno,redKing]把他关起来。别弄伤他——他还有用。",
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        5
                    ],
                    [
                        7,
                        5
                    ]
                ],
                "time": 500
            },
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
                "type": "hide",
                "loc": [
                    [
                        8,
                        5
                    ]
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": "base_16_n",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "base_16_w",
            "loc": [
                12,
                6
            ],
            "time": 500
        },
        "8,4": {
            "floorId": "base_15",
            "loc": [
                8,
                4
            ],
            "time": 500
        },
        "0,4": {
            "floorId": "base_16_w",
            "loc": [
                12,
                4
            ],
            "time": 500
        },
        "0,8": {
            "floorId": "base_16_w",
            "loc": [
                12,
                8
            ],
            "time": 500
        },
        "2,12": {
            "floorId": "base_16_s",
            "loc": [
                2,
                0
            ],
            "time": 500
        },
        "11,0": {
            "floorId": "base_16_n",
            "loc": [
                11,
                12
            ],
            "time": 500
        },
        "12,6": {
            "floorId": "base_16_e",
            "loc": [
                0,
                6
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "upFloor": [
        8,
        4
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [
        [
            375,
            375,
            375,
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            351,
            375,
            0
        ],
        [
            375,
            375,
            375,
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            375,
            375,
            0
        ],
        [
            375,
            375,
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            375,
            375,
            0
        ],
        [
            375,
            375,
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            375,
            375,
            0
        ],
        [
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            375,
            375,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            375,
            375,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            375,
            375,
            0
        ],
        [
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            375,
            0
        ],
        [
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            351,
            0,
            375,
            0
        ],
        [
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            351,
            0,
            375,
            0
        ],
        [
            375,
            375,
            375,
            0,
            0,
            0,
            375,
            375,
            375,
            375,
            375,
            375,
            0
        ],
        [
            375,
            375,
            375,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    ],
    "fgmap": [],
    "underGround": true
}