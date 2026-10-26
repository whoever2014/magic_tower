main.floors.floor_7=
{
    "floorId": "floor_7",
    "title": "主塔  7F",
    "name": "7",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 27,  0, 21,  1,210,  0,  1,209,  0,  1, 21,  1],
    [  1,  0,121,  0, 85,  0,  0, 81,  0,  0, 81,  0,  1],
    [  1, 28,  0, 31,  1,210,  0,  1,209,  0,  1,  0,  1],
    [  1,  1,329,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,201,  0,  1, 31,  0,  0,  0,  0,  0,  0,  1],
    [  1, 87,  0,  0, 81,  0,210,  0,  1,  1,  1,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0, 21,  1, 21,202,  0,  1],
    [  1,  1, 81,  1,  1,  1,  1,  1,  1,205,  0,  0,  1],
    [  1,  0,210,  0,  1,  9,130, 10,  1,  1,  1,  0,  1],
    [  1,  1,  1,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1, 21, 31, 22,  1,  0, 88,  0,  1,122,  0, 88,  1],
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
                        "text": "\t[战斗之神,pinkShop]年轻的勇者啊，如果你供奉40经验的话，我就可以提升你的战斗力！",
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
            "\t[老人,man]年轻人，你可知道？魔塔分为若干个区域，每个区域都有一个头目镇守。\n不击败这一区的头目，你就去不了下一个区域。",
            "\t[老人,man]这一区的头目是骷髅队长，就在10楼。\n他手下有一整支骷髅军团，你可要准备好。",
            "\t[老人,man]还有，一般来说，机关门需要击败守卫才能打开。\n这扇门，老朽就先帮你打开吧。",
            {
                "type": "openDoor",
                "loc": [
                    4,
                    2
                ]
            },
            {
                "type": "hide",
                "time": 500
            }
        ],
        "9,11": [
            {
                "type": "if",
                "condition": "flag:buyBlueKey7F==1",
                "true": [
                    "\t[商人,woman]蓝钥匙只有那一把，已经卖给你啦。",
                    {
                        "type": "hide",
                        "time": 500
                    }
                ],
                "false": [
                    "\t[商人,woman]我这儿有一把蓝钥匙，前面的蓝门正用得上。\n只要50金币，要不要？",
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]50金币，买一把蓝钥匙？",
                        "choices": [
                            {
                                "text": "购买（50金币）",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:money>=50",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "status:money",
                                                "value": "-50"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "item:blueKey",
                                                "value": "1"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:buyBlueKey7F",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            "\t[商人,woman]成交！拿好你的蓝钥匙。",
                                            {
                                                "type": "hide",
                                                "time": 500
                                            }
                                        ],
                                        "false": [
                                            "\t[商人,woman]你的金币不够啊，凑够50金币再来吧。"
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
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "floor_8",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "floor_6",
            "loc": [
                6,
                11
            ]
        },
        "11,11": {
            "floorId": "floor_6",
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