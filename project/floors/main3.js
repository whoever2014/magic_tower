main.floors.main3=
{
    "floorId": "main3",
    "title": "主塔  3F",
    "name": "3",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 22,  0,  1,  7,131,  8,  1, 31, 21, 27,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1,  0,253,  0,  1],
    [  1,  0,253,  0,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,  1, 81,  1,  1,  0,209,  0,  1,  0,  0, 21,  1],
    [  1,  0,  0,202, 81,  0,  0,  0, 81,205,  1,  1,  1],
    [  1, 87,  0,  0,  1,  1, 81,  1,  1,  0,  0, 21,  1],
    [  1,  0,  0, 21,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1,  1,329,  1,  1,201,  1,201,  1,  0,209,  0,  1],
    [  1,  0,201,  0,  1,  0,  0,  0,  1, 31, 21, 28,  1],
    [  1,  0,  0,  0,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  1, 21,  0,  0,  0,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,1": [
            {
                "type": "if",
                "condition": "core.getBlockCls(6,3)=='terrains'",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[贪婪之神,blueShop]开门仅要500金币！",
                        "choices": [
                            {
                                "text": "开门",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:money>=500",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "value": "status:money-500"
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    6,
                                                    3
                                                ]
                                            },
                                            {
                                                "type": "exit"
                                            }
                                        ],
                                        "false": [
                                            "\t[贪婪之神,blueShop]真穷！算了，少收你点钱吧。",
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "value": "0"
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    6,
                                                    3
                                                ]
                                            },
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
            {
                "type": "choices",
                "text": "\t[贪婪之神,blueShop]年轻的勇者啊，如果你可以供奉金币的话，我可以提升你的能力！",
                "choices": [
                    {
                        "text": "攻击+1",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:atk",
                                        "value": "status:atk+1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-20"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[贪婪之神,blueShop]你的金币不足！"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "防御+2",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=20",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:def",
                                        "value": "status:def+2"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-20"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[贪婪之神,blueShop]你的金币不足！"
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
        ],
        "6,2": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "main4",
            "loc": [
                1,
                6
            ]
        },
        "11,11": {
            "floorId": "main2",
            "loc": [
                11,
                11
            ]
        },
        "1,11": {
            "floorId": "main4",
            "loc": [
                1,
                11
            ]
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "upFloor": [
        1,
        6
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}