main.floors.base5=
{
    "floorId": "base5",
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
    [  1,373,373,373,  1,  0,  0,  0,  1,374,374,374,  1],
    [  1,373,373,373, 85,  0,254,  0, 85,374,374,374,  1],
    [  1,373,373,373,  1,  0,  0,  0,  1,374,374,374,  1],
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
                    "\t[奴隶,E373]他救了小奴隶！我们要造反了！",
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
                    "\t[奴隶,E374]他救了小奴隶！我们要造反了！",
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
                    "\t[仙子,fairy]我是本塔的守护精灵。现在我来为你开启通往魔塔的法阵。",
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                1
                            ]
                        ],
                        "floorId": "main9",
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
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.hasItem('proof_brave')",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]这是一阶勇者，他可以使你在战斗中提升小幅度的伤害。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]现在是二阶勇者，他可以增加你在战斗中的攻击次数。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==3",
                        "true": [
                            "\t[仙子,fairy]现在是三阶勇者，你可以在战斗中造成无视敌人防御的伤害。"
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.hasItem('proof_sage')",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]这是一阶贤者，他可以使你在战斗中降低一部分收到的伤害。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]现在是二阶贤者，它的护盾效果可以免疫你第一次收到的伤害。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==3",
                        "true": [
                            "\t[仙子,fairy]现在是三阶勇者，你可以在战斗中造成无视敌人防御的伤害。"
                        ]
                    }
                ]
            },
            {
                "type": "if",
                "condition": "core.hasItem('proof_tyrant')",
                "true": [
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==1",
                        "true": [
                            "\t[仙子,fairy]这是一阶贤者，他可以使你在战斗中降低一部分收到的伤害。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==2",
                        "true": [
                            "\t[仙子,fairy]现在是二阶贤者，它的护盾效果可以免疫你第一次收到的伤害。"
                        ]
                    },
                    {
                        "type": "if",
                        "condition": "core.getFlag('proof_lv')==3",
                        "true": [
                            "\t[仙子,fairy]现在是三阶勇者，你可以在战斗中造成无视敌人防御的伤害。"
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
                    "\t[小偷,thief]我来挖开这面墙。",
                    "\t[小偷,thief]这条路可以通往地下11层，我们在那里见。",
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
                            "\t[小偷,thief]我刚一下来就被奴隶们抓住了，感谢你救了我。现在我要去楼下探索一下。",
                            "\t[小偷,thief]我找到了一个金块，不知道有什么用，看起来很值钱。",
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
                    "\t[小偷,thief]楼下有骑士领主布置的陷阱，不到万不得已千万不能下去。也许还有更好的方法可以下一区域。",
                    "\t[小偷,thief]我去周围逛一逛，看看有没有别的方法。",
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
                        "floorId": "base11",
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
            "floorId": "base4",
            "loc": [
                6,
                11
            ]
        },
        "6,1": {
            "floorId": "base6",
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
            "\t[奴隶主,redSwordsman]不！！！！",
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
            "\t[奴隶主,redSwordsman]骑士老爷会制裁你的！",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base4",
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
                "floorId": "base3",
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
                "floorId": "base3",
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
                "floorId": "base3",
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
                "floorId": "base3",
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
                "floorId": "base3",
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
                "floorId": "base2",
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
                "floorId": "base2",
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
                "floorId": "base2",
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
                "floorId": "base2",
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
                "floorId": "base2",
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
                "floorId": "base2",
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
                "floorId": "base2",
                "time": 500
            },
            {
                "type": "openDoor",
                "loc": [
                    2,
                    3
                ],
                "floorId": "base2"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "base1",
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
                "floorId": "base1",
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
                "floorId": "base1",
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
                "floorId": "base1",
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
                "floorId": "base1",
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
                "floorId": "base1",
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
                "floorId": "base1",
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
                "floorId": "base1",
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
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}