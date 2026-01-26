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
    [  1, 88,  0,  0,  1,  0, 87,  0,  1,  0,  0,121,  1],
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
                    {
                        "type": "if",
                        "condition": "flag:talkedToOldMan==1",
                        "true": [
                            "\t[老人,man]记住，按X键查看怪物手册。\\n不懂得计算的人，早已化作枯骨。"
                        ],
                        "false": [
                            "\t[老人,man]唉……又一个年轻的冒险者。\\n这些年来，我见过太多人踏入这座塔，却再也没能走出来。",
                            "\t[老人,man]听老朽一言：战斗在这塔中无处不在，全凭你的攻击与防御。\\n攻击越高，伤害越大；防御越高，受伤越少。",
                            "\t[老人,man]黄、蓝、红三色钥匙对应三色门，这是常识。\\n但更重要的是——善用怪物手册。",
                            "\t[老人,man]按X键可以查看手册，它会告诉你击败每个怪物需要付出多少代价。\\n不懂得计算的人，早已化作这塔中的枯骨。",
                            "\t[老人,man]去吧，年轻人。愿你不要成为下一个让我叹息的亡魂。",
                            {
                                "type": "setValue",
                                "name": "flag:talkedToOldMan",
                                "value": "1"
                            }
                        ]
                    }
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
        },
        "1,1": {
            "floorId": "base1",
            "loc": [
                1,
                1
            ],
            "time": 500
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