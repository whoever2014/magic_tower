main.floors.main7=
{
    "floorId": "main7",
    "title": "主塔  7F",
    "name": "7",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 27,  0, 21,  1,366,  0,  1,209,  0,  1, 21,  1],
    [  1,  0,121,  0, 85,  0,  0, 81,  0,  0, 81,  0,  1],
    [  1, 28,  0, 31,  1,366,  0,  1,209,  0,  1,  0,  1],
    [  1,  1,329,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,201,  0,  1, 31,  0,  0,  0,  0,  0,  0,  1],
    [  1, 87,  0,  0, 81,  0,210,  0,  1,  1,  1, 81,  1],
    [  1,  0,  0,  0,  1,  0,  0, 21,  1, 21,202,  0,  1],
    [  1,  1, 81,  1,  1,  1,  1,  1,  1,205,  0,  0,  1],
    [  1,  0,366,  0,  1,  9,130, 10,  1,  1,  1, 81,  1],
    [  1,  1,  1,  0,  1,  0,  0,  0,  1, 31,  0,  0,  1],
    [  1, 21, 21, 22,  1,  0, 88,  0,  1,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,9": [
            {
                "type": "if",
                "condition": "flag:beat10F==1",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[战斗之神,pinkShop]你是个合格的勇者。如果你供奉40经验的话，我就可以提升你的战斗力！",
                        "choices": [
                            {
                                "text": "攻击+2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:experience>=40",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "value": "status:atk+2"
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
                                "text": "防御+4",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:experience>=40",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "value": "status:def+4"
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
                "false": [
                    {
                        "type": "choices",
                        "text": "\t[战斗之神,pinkShop]年轻的勇者啊，如果你供奉20经验的话，我就可以提升你的战斗力！",
                        "choices": [
                            {
                                "text": "攻击+1",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:experience>=40",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:atk",
                                                "value": "status:atk+1"
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
                                            "\t[战斗之神,pinkShop]你的经验不足！"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "防御+2",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:experience>=40",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:def",
                                                "value": "status:def+2"
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
                                            "\t[战斗之神,pinkShop]你的经验不足！"
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
                    }
                ]
            }
        ],
        "2,2": [
            "\t[老人,man]大部分机关门需要击败守卫才能够打开。",
            {
                "type": "openDoor",
                "loc": [
                    4,
                    2
                ]
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "main8",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "main6",
            "loc": [
                6,
                11
            ]
        },
        "11,11": {
            "floorId": "main6",
            "loc": [
                11,
                11
            ]
        }
    },
    "afterBattle": {
        "5,1": [
            {
                "type": "if",
                "condition": "flag:doorF7==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            2
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF7",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "if",
                "condition": "flag:doorF7==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            4,
                            2
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF7",
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
        11
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}