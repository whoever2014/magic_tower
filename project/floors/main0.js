main.floors.main0=
{
    "floorId": "main0",
    "title": "主塔  入口",
    "name": "0",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0, 87,  0,  1,  0,  0,121,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,201,  1,  1,  1,  0,  1,  1],
    [  1,  0,123,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  1,  1,  0,  1,  0,  1,  0,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [
        {
            "type": "setText",
            "position": "down",
            "offset": 5
        },
        {
            "type": "setValue",
            "name": "flag:customStatusBarHidden",
            "value": "false"
        },
        {
            "type": "showHero"
        }
    ],
    "events": {
        "6,10": [
            "\t[勇士,hero]就是这里了……\n攻进去！",
            {
                "type": "hide",
                "time": 0
            }
        ],
        "9,3": null,
        "6,5": null,
        "7,6": null,
        "11,1": [
            {
                "type": "if",
                "condition": "flag:beatDarkKnight+flag:beatDarkMage >= 1&&core.hasItem('proof_brave')&&core.getFlag('proof_lv')==1",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[老人,man]一阶勇者？我有个能让你变强的增幅器，但我不能把它送给你。\n不过，如果你肯付我500金币的话……",
                        "choices": [
                            {
                                "text": "是",
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
                                                "type": "function",
                                                "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                                            },
                                            {
                                                "type": "update"
                                            },
                                            "章的等级升为${core.getFlag('proof_lv')}",
                                            {
                                                "type": "playSound",
                                                "name": "shop.mp3"
                                            }
                                        ],
                                        "false": [
                                            "\t[老人,man]你没有足够的金币。"
                                        ]
                                    }
                                ]
                            },
                            {
                                "text": "否",
                                "action": [
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[老人,man]又是挑战者吗？\n希望你能活着回去，嘻嘻嘻……"
                ]
            }
        ],
        "2,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[小偷,thief]完工！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            3
                        ]
                    ],
                    "time": 0
                },
                "\t[小偷,thief]我先走了！",
                {
                    "type": "move",
                    "loc": [
                        2,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "up",
                        "up",
                        "up",
                        "left"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": "main1",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "3,5": null
    },
    "afterOpenDoor": {
        "7,6": null
    },
    "cannotMove": {},
    "downFloor": null,
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

],
    "bgm": null
}