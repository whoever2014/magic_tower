main.floors.phant_8=
{
    "floorId": "phant_8",
    "title": "幻境",
    "name": "8",
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
        "6,4": [
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
        "10,1": {
            "floorId": "phant_2",
            "loc": [
                11,
                1
            ],
            "time": 500
        },
        "4,4": {
            "floorId": "phant_9",
            "loc": [
                7,
                11
            ],
            "time": 500
        },
        "2,9": {
            "floorId": "phant_6",
            "loc": [
                1,
                10
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "11,11": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage8')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage8",
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
                                8,
                                11
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
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_8",
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4, 28,  4, 28,225,  0,  0, 31,  4,340,416,  0,  4],
    [  4,  0,  4,  4,  4,  4,212,340,  4,  4,340,  0,  4],
    [  4,  0,219,340,  0,  0,  0,  0,  4,  0,  0,  0,  4],
    [  4,  0,  4,340,414,  0,611,  4,340,  0,219,  0,  4],
    [  4,  0,340,  4,340,  0,340,  4,  0,  0,340,  0,  4],
    [  4,  0,  4, 31,220,  0,  4,340,  0,  4,340,  0,  4],
    [  4,  0,340,  4,  0,  0,  0,  0, 32,  4,  4,  0,  4],
    [  4,  0,340,  4,  0,  4,  4,  0,  4,  4,340,  0,  4],
    [  4,  0,415,340,  4,  4, 27,212,  4,219,  0,  0,  4],
    [  4,  0,340,  4,220,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  0,  0,  0, 27,220,340,340,236,  0,  0,337,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [],
    "fgmap": []
}