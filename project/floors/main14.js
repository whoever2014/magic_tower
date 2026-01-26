main.floors.main14=
{
    "floorId": "main14",
    "title": "主塔  14F",
    "name": "14",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 27,  1,  0, 87,  0,  1,  0,  0, 28,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0, 81,213,  0, 21,  1],
    [  1,  1, 85,  1,  1,  0,203,  0,  1,  0,218,  0,  1],
    [  1,  0,  0,  0,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,367,  0,367,  1, 31,  0,  0,  1,  0,206,  0,  1],
    [  1,  1, 85,  1,  1,  0,214,  0, 81,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0, 21,  1,  0,214, 32,  1],
    [  1,367,  0,367,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  1, 85,  1,  1,  0,203,  0,  1,  0,217,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1, 21,  0, 21,  1],
    [  1,  0, 37,  0,  1,  0, 88,  0,  1,  0,121,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,11": [
            "\t[老人,man]我是一名古董鉴定师。\\n听说塔下的地底世界藏有传说中的宝物……\\n可惜现在通往地下的道路已经封闭了。"
        ],
        "2,3": [
            {
                "type": "if",
                "condition": "flag:doorF14_1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "main15",
            "loc": [
                6,
                1
            ]
        },
        "6,11": {
            "floorId": "main13",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": "main15",
            "loc": [
                1,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorF14_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorF14_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "if",
                "condition": "flag:doorF14_3==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_3",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "if",
                "condition": "flag:doorF14_3==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF14_3",
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
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        1
    ]
}