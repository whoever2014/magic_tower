main.floors.base_5=
{
    "floorId": "base_5",
    "title": "地下  5F",
    "name": "-5",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0, 88,123,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,404,404,404,  1,  0,  0,  0,  1,407,407,407,  1],
    [  1,404,404,404, 85,  0,254,  0, 85,407,407,407,  1],
    [  1,404,404,404,  1,  0,  0,  0,  1,407,407,407,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,124,  0, 85,  0,  0,  0, 85,  0,123,  0,  1],
    [  1,  0,  0,  0,  1,  0, 87,  0,  1,  0,123,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,7": [
            "\t[奴隶主,redSwordsman]你的好日子到头了！你中埋伏了！弟兄们给我上！",
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 0,
                "keep": true,
                "steps": [
                    "up",
                    "up",
                    "up",
                    "up"
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "setValue",
                "name": "flag:atkB5",
                "value": "core.status.hero.atk"
            },
            {
                "type": "setValue",
                "name": "flag:defB5",
                "value": "core.status.hero.def"
            }
        ],
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "5,6": [
            {
                "type": "if",
                "condition": "flag:savedSlave==1",
                "true": [
                    "\t[奴隶,slave_1]他救了小奴隶！我们要造反了！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                1,
                                5
                            ],
                            [
                                2,
                                5
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                1,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                10,
                                7
                            ],
                            [
                                11,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ],
        "7,6": [
            {
                "type": "if",
                "condition": "flag:savedSlave==1",
                "true": [
                    "\t[奴隶,slave_3]他救了小奴隶！我们要造反了！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                1,
                                5
                            ],
                            [
                                2,
                                5
                            ],
                            [
                                3,
                                5
                            ],
                            [
                                1,
                                6
                            ],
                            [
                                2,
                                6
                            ],
                            [
                                3,
                                6
                            ],
                            [
                                1,
                                7
                            ],
                            [
                                2,
                                7
                            ],
                            [
                                3,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                9,
                                5
                            ],
                            [
                                10,
                                5
                            ],
                            [
                                11,
                                5
                            ],
                            [
                                9,
                                6
                            ],
                            [
                                10,
                                6
                            ],
                            [
                                11,
                                6
                            ],
                            [
                                9,
                                7
                            ],
                            [
                                10,
                                7
                            ],
                            [
                                11,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                6
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0
                    }
                ]
            }
        ],
        "2,10": [
            {
                "type": "if",
                "condition": "flag:openMOTA==0",
                "true": [
                    {
                        "type": "if",
                        "condition": "flag:metFairy17==1",
                        "true": [
                            "\t[仙子,fairy]又见面了。17 层那次我说等的不是你……现在是了。"
                        ]
                    },
                    "\t[仙子,fairy]我是守护这座塔的精灵。塔分两半：上半塔是伯爵的，下半塔是骑士领主的。但他们都不是塔的主人。",
                    "\t[仙子,fairy]真正的主人在幻境深处，自称大法师。塔里的每一个怪物，都是替他挡路的。",
                    "\t[仙子,fairy]想走到他面前，你需要一枚章。章不在这座塔里，在“魔塔”里，那是一座只存在于记忆中的塔。",
                    "\t[仙子,fairy]我现在为你开启通往魔塔的法阵，入口在主塔 9 层。进去以后，你会被迫面对过去的自己。战胜你自己，才拿得到章。",
                    "\t[仙子,fairy]拿到章，先去 14 层找那位老人鉴定。然后回来，我会把章的力量一阶一阶交给你。",
                    "\t[仙子,fairy]每打倒一位塔主，骑士领主或者大法师，章就多醒一分。先打谁由你定，但另一位会因此变强。",
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                1
                            ]
                        ],
                        "floorId": "floor_9",
                        "time": 500
                    },
                    {
                        "type": "addValue",
                        "name": "flag:openMOTA",
                        "value": "1"
                    },
                    {
                        "type": "exit"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:beatDarkKnight+flag:beatDarkMage >= 1",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]你带回了一位塔主的败亡。章在颤动……把手伸出来。",
                            "\t[仙子,fairy]现在我来提升你的力量！",
                            {
                                "type": "function",
                                "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                            },
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            },
                            {
                                "type": "if",
                                "condition": "core.hasItem('proof_brave')",
                                "true": [
                                    {
                                        "type": "tip",
                                        "text": "章的能力已激活，已晋升为二阶勇者",
                                        "icon": "proof_brave"
                                    }
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "core.hasItem('proof_sage')",
                                "true": [
                                    {
                                        "type": "tip",
                                        "text": "章的能力已激活，已晋升为二阶贤者",
                                        "icon": "proof_sage"
                                    }
                                ]
                            },
                            {
                                "type": "if",
                                "condition": "core.hasItem('proof_tyrant')",
                                "true": [
                                    {
                                        "type": "tip",
                                        "text": "章的能力已激活，已晋升为二阶霸者",
                                        "icon": "proof_tyrant"
                                    }
                                ]
                            },
                            {
                                "type": "update"
                            },
                            "\t[仙子,fairy]二阶的力量不是我给的，是你自己走出来的。去吧，另一位在等你。",
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "flag:beatDarkKnight+flag:beatDarkMage >= 2",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]两位塔主都倒下了。这座塔里，再没有东西挡在你和大法师之间。",
                            "\t[仙子,fairy]现在我来提升你的力量！",
                            {
                                "type": "function",
                                "function": "function(){\ncore.setFlag('proof_lv',core.getFlag('proof_lv')+1)\n}"
                            },
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            },
                            {
                                "type": "if",
                                "condition": "core.hasItem('proof_brave')",
                                "true": [
                                    {
                                        "type": "tip",
                                        "text": "章的能力已激活，已晋升为三阶勇者",
                                        "icon": "proof_brave"
                                    }
                                ]
                            },
                            {
                                "type": "update"
                            },
                            "\t[仙子,fairy]这是章的最后一阶。往后的路，我帮不了你了。",
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "!core.hasFlag('proof')",
                "true": [
                    "\t[仙子,fairy]章还没有在你身上醒来。先去魔塔拿到它，再找 14 层的老人。"
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('proof')=='proof_brave' || core.getFlag('proof')=='proof_brave_sage'",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]你现在是【一阶勇者】。\n效果：战斗中每次攻击伤害增加25%。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]你现在是【二阶勇者】。\n效果：战斗中攻击次数翻倍。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==3",
                        "true": [
                            "\t[仙子,fairy]你现在是【三阶勇者】。\n效果：每次攻击额外造成攻击力12%的伤害（无视防御）。"
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('proof')=='proof_sage' || core.getFlag('proof')=='proof_brave_sage'",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]你现在是【一阶贤者】。\n效果：生命护盾——每场战斗第一次受到的伤害减少50%；之后受到的伤害减少25%。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]你现在是【二阶贤者】。\n效果：生命护盾（每场战斗第一次受到的攻击被抵消，并对怪物造成其当前生命25%的伤害）；之后受到的伤害减少25%。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==3",
                        "true": [
                            "\t[仙子,fairy]你现在是【三阶贤者】。\n效果：生命护盾×2（每场战斗前两次受到的攻击被抵消，并各对怪物造成其当前生命25%的伤害）；之后受到的伤害减少25%。"
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.getFlag('proof')=='proof_tyrant'",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]你现在是【一阶霸者】。\n效果：受击时防御力按“当前防御 + 攻击的25%”计算。对魔法攻击无效。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]你现在是【二阶霸者】。\n效果：受击时防御力按“当前防御 + 攻击的25%”计算，每次受击反击自身攻击力的25%。对魔法攻击无效。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==3",
                        "true": [
                            "\t[仙子,fairy]你现在是【三阶霸者】。\n效果：受击时防御力按“当前防御 + 攻击的25%”计算，每次受击反击自身攻击力的35%。对魔法攻击无效。"
                        ]
                    }
                ]
            }
        ],
        "9,10": [
            {
                "type": "if",
                "condition": "core.hasFlag('proof')",
                "true": [
                    "\t[杰克,thief]我来挖开这面墙。",
                    "\t[杰克,thief]这条路可以通往地下11层，我们在那里见。",
                    {
                        "type": "setBlock",
                        "number": "downPortal",
                        "loc": [
                            [
                                10,
                                12
                            ]
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            10,
                            11
                        ],
                        "time": 0,
                        "steps": [
                            "down"
                        ]
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:thiefB5==0",
                        "true": [
                            "\t[杰克,thief]我刚一下来就被奴隶们抓住了，感谢你救了我。现在我要去楼下探索一下。",
                            "\t[杰克,thief]我找到了一个金块，不知道有什么用，看起来很值钱。",
                            {
                                "type": "addValue",
                                "name": "item:moneyPocket",
                                "value": "1"
                            },
                            {
                                "type": "move",
                                "loc": [
                                    10,
                                    10
                                ],
                                "time": 0,
                                "steps": [
                                    "left",
                                    "left",
                                    "left",
                                    "left",
                                    "up"
                                ]
                            },
                            {
                                "type": "setValue",
                                "name": "flag:thiefB5",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "10,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "7,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,3": [
            {
                "type": "if",
                "condition": "flag:thiefB5==1",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            1
                        ],
                        "time": 0,
                        "keep": true,
                        "steps": [
                            "down",
                            "down"
                        ]
                    },
                    "\t[杰克,thief]楼下有骑士领主布置的陷阱，不到万不得已千万不能下去。也许还有更好的方法可以下一区域。",
                    "\t[杰克,thief]我去周围逛一逛，看看有没有别的方法。",
                    {
                        "type": "move",
                        "loc": [
                            7,
                            3
                        ],
                        "time": 0,
                        "steps": [
                            "left",
                            "down",
                            "down"
                        ]
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            }
        ],
        "10,12": [
            {
                "type": "if",
                "condition": "core.getBlockId(10,12)=='downPortal'",
                "true": [
                    {
                        "type": "changeFloor",
                        "floorId": "base_11",
                        "loc": [
                            10,
                            12
                        ],
                        "direction": "up",
                        "time": 500
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": "base_4",
            "loc": [
                6,
                11
            ]
        },
        "6,1": {
            "floorId": "base_6",
            "loc": [
                6,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "2,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,6": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "if",
                "condition": "flag:doorB5==17",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB5",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,2": [
            "\t[奴隶主,redSwordsman]不……又是这样！我做梦都梦见这一天！",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    10
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    10
                ]
            },
            {
                "type": "hide",
                "time": 0
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "time": 500
            },
            "\t[奴隶主,redSwordsman]你、你给我等着！骑士老爷会制裁你的！",
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        3
                    ],
                    [
                        2,
                        3
                    ],
                    [
                        3,
                        3
                    ],
                    [
                        4,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
                        1
                    ],
                    [
                        2,
                        1
                    ],
                    [
                        3,
                        1
                    ],
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        8,
                        1
                    ],
                    [
                        9,
                        1
                    ],
                    [
                        10,
                        1
                    ],
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        8,
                        3
                    ],
                    [
                        9,
                        3
                    ],
                    [
                        10,
                        3
                    ],
                    [
                        11,
                        3
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        3
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        2
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        5
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        8
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        9
                    ]
                ],
                "floorId": "base_4",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "floorId": "base_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        6
                    ]
                ],
                "floorId": "base_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        10
                    ]
                ],
                "floorId": "base_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        6
                    ]
                ],
                "floorId": "base_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        5
                    ],
                    [
                        5,
                        6
                    ],
                    [
                        5,
                        7
                    ],
                    [
                        6,
                        5
                    ],
                    [
                        6,
                        6
                    ],
                    [
                        6,
                        7
                    ],
                    [
                        7,
                        5
                    ],
                    [
                        7,
                        6
                    ],
                    [
                        7,
                        7
                    ]
                ],
                "floorId": "base_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        7
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        7
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        2
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        2
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        4
                    ]
                ],
                "floorId": "base_2",
                "time": 500
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    3
                ],
                "floorId": "base_2"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        3
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        2
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        3
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        6
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        7
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        9
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        11,
                        6
                    ]
                ],
                "floorId": "base_1",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {
        "2,10": {
            "0": null,
            "1": null,
            "2": null
        }
    },
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}