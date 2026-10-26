main.floors.magic_2=
{
    "floorId": "magic_2",
    "title": "幻境",
    "name": "2",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,7": [
            "\t[小偷,thief]你清醒了吗？你被押到监狱时还昏迷着，魔法警卫把你扔进了我这间牢房。\n你运气真好，我刚挖完逃跑的暗道你就醒了。一起越狱吧！",
            {
                "type": "setBlock",
                "number": "0",
                "loc": [
                    [
                        2,
                        7
                    ]
                ]
            },
            {
                "type": "move",
                "time": 200,
                "keep": true,
                "steps": [
                    "left",
                    "left",
                    "down",
                    "down"
                ]
            },
            "\t[小偷,thief]我们终于逃出来了。你的剑和盾被警卫拿走了，得先找到武器。\n我知道铁剑在5楼，铁盾在9楼，你最好先把它们拿到手。我还有事，先走了，再见！",
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        9
                    ]
                ],
                "time": 300
            },
            "\t[勇士,hero]被魔王夺走剑和盾，在牢房里醒来，被小偷带出去……\n这就是队长当年走过的路。他跟我讲这段的时候，还在笑。"
        ],
        "11,7": [
            {
                "type": "choices",
                "text": "\t[商人,woman]谢谢你救了我。我能用祝福魔法，把你的攻击力和防御力提升 3%。现在就提升吗？",
                "choices": [
                    {
                        "text": "现在提升",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            },
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "value": "status:atk+Math.round(status:atk*0.03)"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "value": "status:def+Math.round(status:def*0.03)"
                            },
                            {
                                "type": "tip",
                                "text": "你受到了祝福，攻击和防御都提升了3%"
                            },
                            {
                                "type": "hide",
                                "time": 500
                            }
                        ]
                    },
                    {
                        "text": "等会再说",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "magic_1",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": "magic_3",
            "loc": [
                1,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,2": [
            {
                "type": "if",
                "condition": "flag:2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:2",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,2": [
            {
                "type": "if",
                "condition": "flag:2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            5
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            8
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            11
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:2",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0, 82,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  0,608,  0,608,  0,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1, 21, 21,  1,  0,  0,  0,  1,  0,121,  1],
    [  1,  0,  1, 21,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1,123,  0,  1,  0,  0,  0,  1,  0,122,  1],
    [  1,  0,  1,  0,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1, 32, 32,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1, 87,  1, 32,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [],
    "fgmap": []
}