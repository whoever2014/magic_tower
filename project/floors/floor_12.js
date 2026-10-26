main.floors.floor_12=
{
    "floorId": "floor_12",
    "title": "主塔  12F",
    "name": "12",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21, 21, 21,  1,218,  0,218,  1, 21,  0, 28,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  1,  0,217,  0,  1],
    [  1,  0,213,  0,  1,218,  0,218,  1,  1, 81,  1,  1],
    [  1,  1, 81,  1,  1,  1, 81,  1,  1,  0,  0, 21,  1],
    [  1, 27,  0,  0, 81,  0,  0,  0, 81,206,  0,  0,  1],
    [  1,  0,203, 21,  1,214, 21, 32,  1,  0,  0, 31,  1],
    [  1,  1, 82,  1,  1, 81,  1,  1,  1,  1,  1,  1,  1],
    [  1, 31,  0,  0,  0,  0,  0,  0,  1,  9,130, 10,  1],
    [  1,  1,203,  1,  1,  0,  1,205,  1,  1, 11,  1,  1],
    [  1,  0,  0,  0,  1,206,  1, 81,  1,  0,  0,121,  1],
    [  1, 88,  0, 21,  1,  0,  0,205,  0,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,8": [
            {
                "type": "choices",
                "text": "\t[战斗之神,pinkShop]勇者啊！如果你供奉40经验的话，我就可以提升你的战斗力！",
                "choices": [
                    {
                        "text": "攻击+4",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:experience>=40",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "value": "status:atk+4"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:experience",
                                        "value": "status:experience-40"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "item.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[战斗之神,pinkShop]你的经验不足！",
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "防御+8",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:experience>=40",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "value": "status:def+8"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:experience",
                                        "value": "status:experience-40"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "item.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[战斗之神,pinkShop]你的经验不足！",
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
        "11,10": [
            "\t[老人,man]火系魔法师擅长封印魔法。你必须击败所有的施法者才能破解。"
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": "floor_11",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "floor_13",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,1": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                9
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
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
    "bgmap": [

],
    "fgmap": [

]
}