main.floors.phant_1=
{
    "floorId": "phant_1",
    "title": "幻境",
    "name": "1",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,11": [
            {
                "type": "choices",
                "text": "\t[精灵,spirit]你好呀，勇者。献给我${(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20}金币，我就把星光的力量分给你。",
                "choices": [
                    {
                        "text": "攻击+8",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "value": "status:atk+8"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-((flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20)"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:buyTimeB11",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    "\t[精灵,spirit]谢谢你，勇者。星光会一直陪着你的。",
                                    {
                                        "type": "hide",
                                        "time": 500
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    "\t[精灵,spirit]你的金币不够呢，再攒一攒吧。",
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
                                "condition": "status:money>=(flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "value": "status:def+8"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-((flag:buyTimeB11+6)*(flag:buyTimeB11+7)*10+20)"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "flag:buyTimeB11",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    "\t[精灵,spirit]谢谢你，勇者。星光会一直陪着你的。",
                                    {
                                        "type": "hide",
                                        "time": 500
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    "\t[精灵,spirit]你的金币不够呢，再攒一攒吧。",
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
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "phant_2",
            "loc": [
                11,
                11
            ],
            "time": 500
        },
        "6,8": {
            "floorId": "phant_3",
            "loc": [
                8,
                6
            ],
            "time": 500
        },
        "11,1": {
            "floorId": "phant_8",
            "loc": [
                4,
                4
            ],
            "time": 500
        },
        "11,11": {
            "floorId": "phant_3",
            "loc": [
                11,
                10
            ],
            "time": 500
        },
        "1,11": {
            "floorId": "phant_7",
            "loc": [
                2,
                5
            ],
            "time": 500
        },
        "1,6": {
            "floorId": "phant_1",
            "loc": [
                11,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "8,4": [
            {
                "type": "if",
                "condition": "flag:doorM1==1",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorM1",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,6": [
            {
                "type": "if",
                "condition": "flag:doorM1==1",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorM1",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,3": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage1')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage1",
                        "value": "1"
                    },
                    {
                        "type": "addValue",
                        "name": "flag:sealBroken",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ],
                        "floorId": "phant_2",
                        "remove": true,
                        "time": 0
                    },
                    {
                        "type": "sleep",
                        "time": 600
                    },
                    {
                        "type": "if",
                        "condition": "flag:sealBroken>=9",
                        "true": [
                            {
                                "type": "tip",
                                "text": "幻境二层的封印彻底解开了！"
                            }
                        ],
                        "false": [
                            {
                                "type": "tip",
                                "text": "红衣大法师倒下了，幻境二层封印的光芒减弱了（${flag:sealBroken}/9）"
                            }
                        ]
                    }
                ],
                "false": []
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_1",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
            },
            {
                "type": "sleep",
                "time": 600
            },
            {
                "type": "tip",
                "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,340,  4,  4,  4,  4,340,  4,  4,  4,  4,  4],
    [  4,415,  0,  4,  0,  0,  0,220,  0,  4,  0,414,  4],
    [  4,  4, 31,216,  0,219,  0,  0,  0,212,  0,  0,  4],
    [  4,  4,  4,  4,340,  4,340,  4,340,340,337,  0,340],
    [  4,212,  4,  4,  0,  0,  0,  4,247,  0,  0,236,  4],
    [  4,  0, 31,  4,  0, 41,  0,340,  0,  0,  4,340,  4],
    [340,417,  0,340,  0,  0,  0,  4,247,  0,  0,219,  4],
    [  4,  4,  0,340,  4,  4,  4,340,  0,  0,  0,  0,  4],
    [  4, 27,216,  0,219,  4,417,  0,  0,  4,340,  0,  4],
    [  4,216,  0,  0, 32,340,340,  0,340,340,  4,  0,  4],
    [  4,  0,  4,220,  4,340,  0,  0,  4,212,  0,  0,  4],
    [340,416,  4,  4,340,611,  0,340,340, 28,  4,417,  4],
    [  4,  4,  4,340,340,  4,  4,  4,  4,340,  4,  4,  4]
],
    "bgmap": [
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
            0,
            0,
            0
        ],
        [
            0,
            351,
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
            351,
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
            351,
            351,
            0,
            0,
            0,
            351,
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
            351,
            0,
            0,
            0,
            351,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            351,
            351,
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
            0,
            0,
            0
        ]
    ],
    "fgmap": []
}