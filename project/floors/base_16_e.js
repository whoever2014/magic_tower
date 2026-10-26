main.floors.base_16_e=
{
    "floorId": "base_16_e",
    "title": "地下  16F",
    "name": "-23",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1,  1],
    [  1, 32, 21,  1,  0, 23,  0,  1,231,  0,  0,  0,  1],
    [  1, 21,  0,  1,  0,  0,  0,  1,  1,  1,  1,  0,  1],
    [  1,  0,  0,  1,  1, 85,  1,  1,  0,246, 81,  0,  1],
    [  1, 81,  1,  1,230,  0,230,  1, 81,  1,  1,  0,  1],
    [  1,231,  0,  1,  0,  0,  0,  1,231, 31,  1,395,  1],
    [  0,  0,  0,  1,  1,  0,  1,  1, 21, 28,  1,  0,  1],
    [  1,  0,  0,  1,  0,  0,  0,  1,  1,  1,  1,204,  1],
    [  1,207,  0,  1,  0,  0,  0,  0,204,  0,  0,  0,  1],
    [  1, 81,  1,  1,  0,  1,  0,  0,  1,  1,  1,  1,  1],
    [  1, 21,  0,  1,  0,  1,  1,  1,  1, 27, 21,122,  1],
    [  1,  0,207, 81,  0, 81,204,  0, 81,395,  0, 32,  1],
    [  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "11,10": [
            "\t[商人,woman]哟，能走到这里的人可不多。\n我这儿有一颗水之宝石，带着它就能在水里自由来去。",
            {
                "type": "choices",
                "text": "\t[商人,woman]2000金币，要不要？",
                "choices": [
                    {
                        "text": "买（2000金币）",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=2000",
                                "true": [
                                    {
                                        "type": "addValue",
                                        "name": "status:money",
                                        "value": "-2000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:hammer",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    },
                                    {
                                        "type": "tip",
                                        "text": "获得 水之宝石"
                                    },
                                    "\t[商人,woman]成交！下水的时候小心点。",
                                    {
                                        "type": "hide",
                                        "time": 500
                                    }
                                ],
                                "false": [
                                    "\t[商人,woman]金币不够啊，凑够2000金币再来吧。"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "再想想",
                        "action": []
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "4,12": {
            "floorId": "base_16_se",
            "loc": [
                4,
                0
            ],
            "time": 500
        },
        "9,0": {
            "floorId": "base_16_ne",
            "loc": [
                9,
                12
            ],
            "time": 500
        },
        "0,6": {
            "floorId": "base_16_c",
            "loc": [
                12,
                6
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "4,4": [
            {
                "type": "if",
                "condition": "flag:doorB16_7_yellowKing==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_7_yellowKing",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "flag:doorB16_7_yellowKing==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_7_yellowKing",
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