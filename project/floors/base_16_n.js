main.floors.base_16_n=
{
    "floorId": "base_16_n",
    "title": "地下  16F",
    "name": "-17",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 32,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  0,  0,395, 82,  0,  1,  1,  1,  1,  1,231,  0,  1],
    [  1,  0,  0,  1,  0,  1,  9,130, 10,  1,  1, 81,  1],
    [  1,  1,  1,  1,  0,  1,  0,  0,  0,  1, 21,204,  1],
    [  1, 28,231, 81,  0,  1, 82,  1,  1,  1,204, 27,  1],
    [  1, 21, 21,  1,  0,  1,  0,  1, 32,  1, 81,  1,  1],
    [  1,  1,  1,  1,  0,207,  0,  1,395,  1,  0,  0,  0],
    [  0,  0,  1,  0,  0,  1,  0,  1,  0, 81,204,  0,  1],
    [  1,  0, 81,204,  0, 81,  0,  1,  0,  1, 21, 22,  1],
    [  1,  0,  1,  1,  0,  1,  0,  1,  0,  1,  1,  1,  1],
    [  1,  0, 82,  0,  0,  1,  0,  1,  0,204,329,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1]
],
    "firstArrive": [],
    "events": {
        "7,3": [
            {
                "type": "while",
                "condition": "1",
                "data": [
                    {
                        "type": "choices",
                        "text": "\t[战斗之神,pinkShop]如果供奉20经验, 便可以增加你的力量, 你想要什么呢…",
                        "choices": [
                            {
                                "text": "攻击+4",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:experience>=20",
                                        "true": [
                                            {
                                                "type": "playSound",
                                                "name": "item.mp3"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "status:atk",
                                                "value": "4"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "status:experience",
                                                "value": "-20"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "tip",
                                                "text": "你的经验不足！"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "continue"
                                    }
                                ]
                            },
                            {
                                "text": "防御+8",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:experience>=20",
                                        "true": [
                                            {
                                                "type": "playSound",
                                                "name": "item.mp3"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "status:def",
                                                "value": "8"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "status:experience",
                                                "value": "-20"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "tip",
                                                "text": "你的经验不足！"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "continue"
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
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "base_16_c",
            "loc": [
                6,
                0
            ]
        },
        "0,8": {
            "floorId": "base_16_nw",
            "loc": [
                12,
                8
            ],
            "time": 500
        },
        "0,2": {
            "floorId": "base_16_nw",
            "loc": [
                12,
                2
            ],
            "time": 500
        },
        "12,7": {
            "floorId": "base_16_ne",
            "loc": [
                0,
                7
            ],
            "time": 500
        },
        "11,12": {
            "floorId": "base_16_c",
            "loc": [
                11,
                0
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": [
        9,
        11
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,351,351,351,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,351,375,  0]
],
    "fgmap": [

]
}