main.floors.base16_0=
{
    "floorId": "base16_0",
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
    [  1,  1,  1,246,  1,223,123,223,  0,  0,  1,  0,  1],
    [  0,  0,  0,  0, 82,  0,245,  0,  0,204,  1,  0,  1],
    [  1,  1,  1,246,  1,121,  0,  0,207, 27,  1,  0,  1],
    [  0,  0,  1,  1,  1,  1, 81,  1,  1,  1,  1,  0,  1],
    [  1,  0,  1, 28,207, 81,207, 21, 21, 32,  1,  0,  1],
    [  1,  0,  1,  1, 21,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1, 21,  1,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "8,5": [
            "\t[小偷,thief]放开我！",
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
                        8
                    ]
                ],
                "floorId": "main2",
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
                "floorId": "main2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        11
                    ]
                ],
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
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
                "floorId": "main2",
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        3,
                        2
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        3,
                        5
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        3,
                        7
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        3,
                        10
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        7,
                        3
                    ]
                ],
                "floorId": "main2"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        7,
                        9
                    ]
                ],
                "floorId": "main2"
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
                "floorId": "main2"
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
                "floorId": "main2"
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
                "floorId": "main2"
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
                "floorId": "main2"
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
                "floorId": "main2"
            },
            "\t[魔王,redKing]卫兵，把他带到监狱去，严加看管！",
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
            "floorId": "base16_1",
            "loc": [
                6,
                12
            ]
        },
        "0,6": {
            "floorId": "base16_3",
            "loc": [
                12,
                6
            ],
            "time": 500
        },
        "8,4": {
            "floorId": "base15",
            "loc": [
                8,
                4
            ],
            "time": 500
        },
        "0,4": {
            "floorId": "base16_3",
            "loc": [
                12,
                4
            ],
            "time": 500
        },
        "0,8": {
            "floorId": "base16_3",
            "loc": [
                12,
                8
            ],
            "time": 500
        },
        "2,12": {
            "floorId": "base16_5",
            "loc": [
                2,
                0
            ],
            "time": 500
        },
        "11,0": {
            "floorId": "base16_1",
            "loc": [
                11,
                12
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
    [375,375,375,375,375,  0,  0,  0,  0,  0,351,375,  0],
    [375,375,375,375,375,  0,  0,  0,  0,  0,375,375,  0],
    [375,375,375,375,  0,  0,  0,  0,  0,  0,375,375,  0],
    [375,375,375,375,  0,  0,  0,  0,  0,  0,375,375,  0],
    [375,375,  0,  0,  0,  0,  0,  0,  0,  0,375,375,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375,  0],
    [375,375,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,  0],
    [375,375,  0,  0,  0,  0,  0,  0,  0,351,  0,375,  0],
    [375,375,  0,  0,  0,  0,  0,  0,  0,351,  0,375,  0],
    [375,375,375,  0,  0,  0,375,375,375,375,375,375,  0],
    [375,375,375,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "underGround": true
}