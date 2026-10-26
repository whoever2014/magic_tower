main.floors.base_8=
{
    "floorId": "base_8",
    "title": "地下  8F",
    "name": "-8",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 83,  0,  0,  0,  0,224, 81,  0, 87,  1],
    [  1,  0,  0,  1,  0,122, 21,  0,  0,  1,  0,  0,  1],
    [  1,370,  1,  1,  1,  1,  1, 81,  1,  1,  1, 81,  1],
    [  1,  0,  0,224,  0,  0,  1,  0,  1, 21,  1,  0,  1],
    [  1,  1,  0,  1,  1, 82,  1,389,  1, 21,  1,224,  1],
    [  1,  0,  0,  0, 82, 82,  1,232,  1, 21,  1,  0,  1],
    [  1,  0, 40,  0,  1,  1,  1, 21,  1,  0,227,  0,  1],
    [  1,  0,  0,  0,  1, 28, 27, 31,  1,  1,  1, 82,  1],
    [  1,  1, 85,  1,  1,  1,  1,  1,  1,  0,  0,227,  1],
    [  1,222,  0,222,  1,  0,  0,  0,  1,  0,224,  0,  1],
    [  1,  0,  0,  0, 81,389,  0,224, 81,232,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,1": [
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        2
                    ]
                ],
                "time": 0
            },
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
        "11,2": [
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        2
                    ]
                ],
                "time": 0
            },
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
        "2,6": [
            {
                "type": "setBlock",
                "number": "yellowWall",
                "loc": [
                    [
                        2,
                        5
                    ]
                ]
            },
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "swordsmanRed",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        8
                    ]
                ],
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ],
        "5,2": [
            {
                "type": "while",
                "condition": "true",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]我有许多黄钥匙，100个金币一把，你要吗？",
                        "choices": [
                            {
                                "text": "我太需要了",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:money>=100",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "value": "status:money-100"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:yellowKey",
                                                "value": "item:yellowKey+1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "tip",
                                                "text": "你的金币不足100枚，无法交易！"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "下次再说",
                                "action": [
                                    {
                                        "type": "break"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": "base_7",
            "stair": "downFloor"
        },
        "1,1": {
            "floorId": "base_9",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "2,7": [
            {
                "type": "openDoor",
                "loc": [
                    2,
                    8
                ],
                "floorId": "base_4"
            }
        ],
        "1,10": [
            {
                "type": "if",
                "condition": "flag:guardB8>=1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:guardB8",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,10": [
            {
                "type": "if",
                "condition": "flag:guardB8>=1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:guardB8",
                        "value": "1"
                    }
                ]
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