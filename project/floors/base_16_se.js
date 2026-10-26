main.floors.base_16_se=
{
    "floorId": "base_16_se",
    "title": "地下  16F",
    "name": "-22",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1],
    [  0,  0,204,  0,  0,  1,  0,  0,  1,246,  0,246,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  0, 24,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  1,246,  0,246,  1],
    [  1,  1,  1,  1,395,  1,  0,  0,  1,  1, 85,  1,  1],
    [  0,  0,  1,  0,  0,  1,  0,  1,  1,  0,122,  0,  1],
    [  1,  0,  1,  1,  0,  1,  0,  0,  1,  1,  0,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,  0,  0,  1,  1,246,  1],
    [  0,  0,  1,  0,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  1,  1,  1,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1, 21, 31,  1,204,  1,  1,  1,  1,  1,  1,204,  1],
    [  1, 28,230, 81,  0,  0,207,  0,  0, 81,204,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": null,
    "events": {
        "9,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "11,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "10,5": [
            {
                "type": "choices",
                "text": "\t[商人,woman]本塔唯一宝石锄头，仅售4000金币。",
                "choices": [
                    {
                        "text": "购买",
                        "action": [
                            {
                                "type": "if",
                                "condition": "status:money>=4000",
                                "true": [
                                    {
                                        "type": "move",
                                        "loc": [
                                            10,
                                            5
                                        ],
                                        "time": 500,
                                        "keep": true,
                                        "steps": [
                                            "left"
                                        ]
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "value": "status:money-4000"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            10,
                                            4
                                        ]
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
                                    }
                                ],
                                "false": [
                                    "\t[商人,woman]你的金币不足！",
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
            },
            {
                "type": "revisit"
            }
        ],
        "9,5": [
            "\t[商人,woman]宝石锄头不能在地下15层以下使用！"
        ]
    },
    "changeFloor": {
        "0,1": {
            "floorId": "base_16_s",
            "loc": [
                12,
                1
            ],
            "time": 500
        },
        "4,0": {
            "floorId": "base_16_e",
            "loc": [
                4,
                12
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "10,2": [
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        1
                    ],
                    [
                        9,
                        3
                    ],
                    [
                        11,
                        1
                    ],
                    [
                        11,
                        3
                    ]
                ],
                "time": 500
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,375,375,  0,  0,  0,  0,  0],
    [  1,  0,  0,  0,  0,  0,375,375,  0,  0,  0,  0,  0],
    [  1,  0,  0,  0,  0,  0,375,375,  0,  0,  0,  0,  0],
    [  1,  0,  0,  0,  0,  0,375,375,  0,  0,  0,  0,  0],
    [375,375,  0,  0,  0,  0,375,  0,  0,  0,  0,  0,  0],
    [  0,375,  0,  0,  0,  0,375,375,  0,  0,  0,  0,  0],
    [  0,375,  0,  0,  0,  0,375,375,375,  0,  0,  0,  0],
    [375,375,  0,  0,  0,  0,375,375,375,375,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,375,  0,375,375,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}