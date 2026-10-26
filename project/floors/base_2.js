main.floors.base_2=
{
    "floorId": "base_2",
    "title": "地下  2F",
    "name": "-2",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 32,  0,  1,  0,373,  0,  1,  0,  0, 23,  1],
    [  1, 27,  0, 28,  1,393,  1,372,  1,  0,  0,  0,  1],
    [  1,  1, 85,  1,  1,  0,  1,  0,  1,  1, 85,  1,  1],
    [  1,374,  0,374,  1,  0, 82,  0,  1,373,  0,373,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,393,  1,373,  0,  0, 81,372,  0,  0,  1,393,  1],
    [  1, 28,  1,  0, 31, 31,  1, 21, 21,372,  1, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0, 32,  0,  1,  0,  0,  0,  1],
    [  1, 88,  0,  0, 81,393,  0,393, 81,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    1,
                    1
                ]
            ]
        }
    ],
    "events": {
        "12,0": [
            {
                "type": "switch",
                "condition": "flag:npcb2times",
                "caseList": [
                    {
                        "case": "0",
                        "action": [
                            "\t[妖精,fairy]勇者哟～你是来拯救公主的吧？\n这层之后的怪物会变得更强，以你现在的实力是绝对——绝对——绝对赢不了的！\n",
                            "\t[勇者,hero]是吗……\n那我该怎么办呢？",
                            "\t[妖精,fairy]嗯……我想想……\n我还是建议你先去17F的密室中取到宝物。\n这个你拿去吧，拿到宝物后再回来这里找我，到时候你将会实力大增～",
                            {
                                "type": "setValue",
                                "name": "item:magicKey",
                                "value": "item:magicKey+1"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:npcb2times",
                                "value": "flag:npcb2times+1"
                            }
                        ]
                    },
                    {
                        "case": "1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "core.hasItem('proof_brave')||core.hasItem('proof_tyrant')||core.hasItem('proof_sage')",
                                "true": [
                                    {
                                        "type": "if",
                                        "condition": "!flag:proof",
                                        "true": [
                                            "\t[勇者,hero]我拿到宝物了，谢谢你！",
                                            "\t[妖精,fairy]你的勇气让我十分敬佩，不过谢我这种事还是等你救出公主再说吧。\n加油，我看好你哟～"
                                        ],
                                        "false": [
                                            "\t[勇者,hero]我拿到宝物了，我的力量真的增加了不少！\n谢谢你！",
                                            "\t[妖精,fairy]这种事还是等你救出公主再说吧。\n加油，我看好你哟～"
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "88",
                                        "loc": [
                                            [
                                                1,
                                                1
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "show",
                                        "loc": [
                                            [
                                                1,
                                                1
                                            ]
                                        ],
                                        "time": 500
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:npcb2times",
                                        "value": "flag:npcb2times+1"
                                    }
                                ],
                                "false": [
                                    "\t[妖精,fairy]快去17F的密室取宝物啦！\n救不了公主我可饶不了你！"
                                ]
                            }
                        ]
                    },
                    {
                        "case": "2",
                        "action": [
                            "\t[妖精,fairy]既然得到了章那就快去救出公主啦！\n救不了公主我可饶不了你！"
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": "base_1",
            "stair": "downFloor"
        },
        "1,11": {
            "floorId": "base_3",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "9,4": [
            {
                "type": "if",
                "condition": "flag:doorB2_1==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB2_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "flag:doorB2_1==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB2_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "flag:doorB2_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB2_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,4": [
            {
                "type": "if",
                "condition": "flag:doorB2_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB2_2",
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