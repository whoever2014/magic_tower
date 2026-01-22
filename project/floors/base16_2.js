main.floors.base16_2=
{
    "floorId": "base16_2",
    "title": "地下  16F",
    "name": "-18",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1, 63,  0, 63,  1,246,  0,246,  1],
    [  1,  0, 26,  0,  1,  0,  1,  0,  1,  0,  0,  0,  0],
    [  1,  0,  0,  0,  1, 63,  0,  0,  1,246,  0,246,  1],
    [  1,  1, 86,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,223,  0,223,  1,  0, 32, 21, 81,204,  0,  0,  1],
    [  1,  0,  0,  0,  1,230, 27, 28,  1,  0,204, 31,  1],
    [  1,  0,  0,  0,  1, 81,  1,  1,  1,  1, 81,  1,  1],
    [  1,  1, 81,  1,  1,325,  1,  0,  0,  0,  0,  0,  0],
    [  1,  0,204,  0,  1, 81,  1,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  1,  0,  1,204,  1,  0,207,  0,  1],
    [  1,121,  0,204, 81,  0,  0,  0,  1, 21, 32, 21,  1],
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
        ],
        "1,11": [
            "\t[老人,man]本层存放着解开地下7层谜题的必要道具。"
        ]
    },
    "changeFloor": {
        "12,8": {
            "floorId": "base16_1",
            "loc": [
                0,
                8
            ],
            "time": 500
        },
        "12,2": {
            "floorId": "base16_1",
            "loc": [
                0,
                2
            ],
            "time": 500
        },
        "7,12": {
            "floorId": "base16_3",
            "loc": [
                7,
                0
            ],
            "time": 500
        }
    },
    "afterBattle": {},
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