main.floors.MOTA8=
{
    "floorId": "MOTA8",
    "title": "魔塔  8F",
    "name": "0",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3, 17, 17, 17,  3,  3,  3,  3,  3],
    [  3,  0,  3,  0,  3,  3,128,  3,  3,  0,  3,  0,  3],
    [  3,  3,  0,  3,  0,  3, 83,  3,  0,  3,  0,  3,  3],
    [  3,  0,  3,  0,  3,  3, 83,  3,  3,  0,  3,  0,  3],
    [  3,  3,  0,  3,  0,  3, 83,  3,  0,  3,  0,  3,  3],
    [  3,  0,  3,  0,  3,  3,233,  3,  3,  0,  3,  0,  3],
    [  3,  3,  0,  3,  0,  3,248,  3,  0,  3,  0,  3,  3],
    [  3,  0,  3,  0,  3,  3,204,  3,  3,  0,  3,  0,  3],
    [  3,  3,  0,  3,  0,  3,203,  3,  0,  3,  0,  3,  3],
    [  3,  0,  3,  0,  3,  3,202,  3,  3,  0,  3,  0,  3],
    [  3,  3,  0,  3,  0,  3,201,  3,  0,  3,  0,  3,  3],
    [  3,  0,  3,  0,  3,  4,  0,  4,  3,  0,  3,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": null,
    "events": {
        "6,1": [
            "\t[公主,princess]太好了……终于有人来到了这里……\n这个星期……过得好辛苦啊……",
            "\t[勇士,hero]不用怕，我是来救你的！",
            "（公主晕了过去。）",
            "\t[勇士,hero]看来一切都结束了……\n公主的身体似乎很虚弱，还是先逃出去再说吧。",
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 2000
            },
            {
                "type": "showImage",
                "code": 3,
                "image": "plot.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "showImage",
                "code": 4,
                "image": "plotEndTrue.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "setCurtain",
                "time": 1000
            },
            {
                "type": "wait"
            },
            {
                "type": "hideImage",
                "code": 4,
                "time": 1000
            },
            {
                "type": "if",
                "condition": "flags.useBattleAnimate",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('xinjing')>0",
                        "true": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('proof')=='proof_brave'",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "勇者通关（经典模式）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('proof')=='proof_sage'",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "贤者通关（经典模式）"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('proof')=='proof_tyrant'",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "霸者通关（经典模式）"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "无章通关（经典模式）"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('proof')=='proof_brave'",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "勇者之证（随机）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('proof')=='proof_sage'",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "贤者之证（随机）"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('proof')=='proof_tyrant'",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "霸者之证（随机）"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "无章通关（随机）"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('xinji')>0",
                        "true": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('proof')=='proof_brave'",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "勇者通关（极速模式）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('proof')=='proof_sage'",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "贤者通关（极速模式）"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('proof')=='proof_tyrant'",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "霸者通关（极速模式）"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "无章通关（极速模式）"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "core.getFlag('proof')=='proof_brave'",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "勇者之证"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "core.getFlag('proof')=='proof_sage'",
                                        "true": [
                                            {
                                                "type": "win",
                                                "reason": "贤者之证"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "core.getFlag('proof')=='proof_tyrant'",
                                                "true": [
                                                    {
                                                        "type": "win",
                                                        "reason": "霸者之证"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "win",
                                                        "reason": "无章通关"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "choices",
                "text": "\t[流浪者,man]选择剑或者盾",
                "choices": [
                    {
                        "text": "生命值",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "status:hp",
                                "value": "1000"
                            }
                        ]
                    },
                    {
                        "text": "黄蓝钥匙",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "item:yellowKey",
                                "value": "4"
                            },
                            {
                                "type": "addValue",
                                "name": "item:blueKey",
                                "value": "2"
                            }
                        ]
                    },
                    {
                        "text": "红钥匙",
                        "action": [
                            {
                                "type": "addValue",
                                "name": "item:redKey",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "text": "离开",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
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