main.floors.floor_4=
{
    "floorId": "floor_4",
    "title": "主塔  4F",
    "name": "4",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,121,  0,  1,  0, 27,  0,  1,  0,122,  0,  1],
    [  1, 28,  0, 21,  1, 21,  0, 31,  1,  0,  0,  0,  1],
    [  1,  0,205,  0,  1,  0,253,  0,  1,  0,201,  0,  1],
    [  1,  1, 81,  1,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,202,  0,  1],
    [  1, 88,  0,  0,201,  0,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,205,  0, 81,205,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,202, 35,202,  1,  0,202,  0,  1,  0,210,  0,  1],
    [  1,  0,202,  0,  1,  0,  0,  0,  1, 31,  0, 21,  1],
    [  1, 88,  0,  0,  1,  0, 87,  0,  1,  0, 28,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,1": [
            {
                "type": "if",
                "condition": "flag:buyYellowKey4F==1",
                "true": [
                    "\t[商人,woman]钥匙已经给你了，路上小心。",
                    {
                        "type": "hide",
                        "time": 500
                    }
                ],
                "false": [
                    "\t[商人,woman]勇士，钥匙不够用了吧？\n我这儿还剩两把黄钥匙，20金币都给你。",
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]20金币，买两把黄钥匙？",
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
                                                "name": "item:yellowKey",
                                                "value": "2"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:buyYellowKey4F",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            },
                                            "\t[商人,woman]拿好了，两把黄钥匙。",
                                            {
                                                "type": "hide",
                                                "time": 500
                                            }
                                        ],
                                        "false": [
                                            "\t[商人,woman]金币不够啦，凑够20金币再来吧。"
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
        "2,1": [
            "\t[老人,man]温馨提示，三层的商店里有陷阱。",
            {
                "type": "hide",
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "floor_3",
            "loc": [
                1,
                6
            ]
        },
        "1,11": {
            "floorId": "floor_3",
            "loc": [
                1,
                11
            ]
        },
        "6,11": {
            "floorId": "floor_5",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
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