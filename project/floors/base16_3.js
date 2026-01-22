main.floors.base16_3=
{
    "floorId": "base16_3",
    "title": "地下  19F",
    "name": "-19",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  7,131,  8,  1,204,  1,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  0, 81,  0,  0,  0,207,  1,  0,  0,  1],
    [  1, 21,  0, 31,  1,  0,  0,207, 27,  1,  0,  0,  1],
    [  1,  1, 82,  1,  1,  1,  1, 81,  1,  1,  1,  0,  0],
    [  1,  0,  0,  0,204,  0,  0,  0,  0,  0,  1,  1,  1],
    [  1,  0,  1, 81,  1,  1,  1,  1,  1,  0,  0,  0,  0],
    [  1,204,  1,231, 21, 28, 27,246,  1,  0,  1,  1,  1],
    [  1, 81,  1,  1,  1,  1,  1, 82,  1,207,  1,  0,  0],
    [  1,  0,  0,  0, 31, 31,204,  0,  0,  0,  1,  0,  1],
    [  1,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,246,  0,  0,  0,246, 21, 21,  1,  0,  0,  0,  1],
    [  1,  1,  0,  1,  1,  1,  1,  1,  1,  0,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "2,1": [
            {
                "type": "choices",
                "text": "\t[祭坛,blueShop]年轻的勇者啊，如果你可以供奉${(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20}金币的话，我可以提升你的能力！",
                "choices": [
                    {
                        "text": "攻击+16",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "value": "status:atk+16"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:buyTimeB11",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[祭坛,blueShop]你的金币不足！",
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "防御+32",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "value": "status:def+32"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:buyTimeB11",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[祭坛,blueShop]你的金币不足！",
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "revisit"
            }
        ],
        "2,11": [
            {
                "type": "if",
                "condition": "core.getBlockCls(4,11)==null",
                "true": [
                    {
                        "type": "move",
                        "loc": [
                            5,
                            11
                        ],
                        "time": 500,
                        "keep": true,
                        "steps": [
                            "left",
                            "left"
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowWall",
                        "loc": [
                            [
                                3,
                                10
                            ]
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                10
                            ]
                        ],
                        "time": 0
                    }
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        11
                    ]
                ],
                "time": 500
            }
        ],
        "3,2": [
            {
                "type": "move",
                "loc": [
                    5,
                    1
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down"
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "base16_0",
            "loc": [
                0,
                6
            ],
            "time": 500
        },
        "2,12": {
            "floorId": "base16_4",
            "loc": [
                2,
                0
            ],
            "time": 500
        },
        "7,0": {
            "floorId": "base16_2",
            "loc": [
                7,
                12
            ],
            "time": 500
        },
        "12,4": {
            "floorId": "base16_0",
            "loc": [
                0,
                4
            ],
            "time": 500
        },
        "12,8": {
            "floorId": "base16_0",
            "loc": [
                0,
                8
            ],
            "time": 500
        },
        "9,12": {
            "floorId": "base16_4",
            "loc": [
                9,
                0
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,375,375,375,375,375],
    [  0,  0,  0,  0,  0,  0,  0,  0,375,375,375,375,375]
],
    "fgmap": [

]
}