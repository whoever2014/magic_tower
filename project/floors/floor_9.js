main.floors.floor_9=
{
    "floorId": "floor_9",
    "title": "主塔  9F",
    "name": "9",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 90,  1, 31, 21,  1,  0,221,  1, 21,  0, 31,  1],
    [  1,  1,  1,  0,253, 81,  0,  0, 85,  0, 23,  0,  1],
    [  1, 32,  1,  0,  0,  1,  0,221,  1, 21,  0, 32,  1],
    [  1, 81,  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,209,  0,  0, 28, 21,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  1, 27,209,  1,201, 81,  0,  0,205,  0,  1],
    [  1, 82,  1,  0,  0,  1,  0,  1,  1, 82,  1,  1,  1],
    [  1,  0, 81,210, 21,  1,  0, 81,  0,  0,  1,122,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  0,  0,  0,  1],
    [  1, 87,  1, 31,  0,210, 36,329,201,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "1,2": [
            {
                "type": "if",
                "condition": "flag:openMOTA==1",
                "true": [
                    "\t[神秘的声音]只有战胜你自己，才能获得力量！",
                    {
                        "type": "hide",
                        "time": 500
                    },
                    {
                        "type": "setValue",
                        "name": "flag:atk9F",
                        "value": "core.status.hero.atk"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:def9F",
                        "value": "core.status.hero.def"
                    },
                    {
                        "type": "setEnemy",
                        "id": "skeletonCaptain",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "skeletonCaptain",
                        "name": "experience",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "vampire",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "vampire",
                        "name": "experience",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redSwordsman",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redSwordsman",
                        "name": "experience",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "value": "flag:atk10F"
                    },
                    {
                        "type": "setValue",
                        "name": "status:def",
                        "value": "flag:def10F"
                    },
                    {
                        "type": "setBlock",
                        "number": "yellowWall",
                        "loc": [
                            [
                                1,
                                4
                            ]
                        ]
                    }
                ]
            }
        ],
        "1,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "11,9": [
            {
                "type": "if",
                "condition": "flag:buyBluePotion9F==1",
                "true": [
                    "\t[商人,woman]蓝血瓶只有那一瓶，已经卖给你啦。\n楼上就是骷髅队长的地盘，祝你好运。",
                    {
                        "type": "hide",
                        "time": 500
                    }
                ],
                "false": [
                    "\t[商人,woman]楼上就是骷髅队长的地盘了。\n我这儿有一瓶蓝血瓶，能回复200点体力，只要20金币，要不要？",
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]20金币，买一瓶蓝血瓶（体力+200）？",
                        "choices": [
                            {
                                "text": "购买（20金币）",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "status:money>=20",
                                        "true": [
                                            {
                                                "type": "addValue",
                                                "name": "status:money",
                                                "value": "-20"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "status:hp",
                                                "value": "200"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:buyBluePotion9F",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            "\t[商人,woman]成交！体力回复了200点。",
                                            {
                                                "type": "hide",
                                                "time": 500
                                            }
                                        ],
                                        "false": [
                                            "\t[商人,woman]你的金币不够啊，凑够20金币再来吧。"
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
        "1,11": {
            "floorId": "floor_10",
            "loc": [
                1,
                11
            ],
            "time": 500
        },
        "11,11": {
            "floorId": "floor_8",
            "loc": [
                11,
                11
            ]
        },
        "1,1": {
            "floorId": "mota_1",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "7,1": [
            {
                "type": "if",
                "condition": "flag:doorF9==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            2
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF9",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "if",
                "condition": "flag:doorF9==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            2
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF9",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}