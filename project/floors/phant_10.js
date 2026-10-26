main.floors.phant_10=
{
    "floorId": "phant_10",
    "title": "幻境",
    "name": "10",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,7": [
            "\t[大法师,blackMagician]你走到了这里。用的是他一百轮都没用完的勇气。",
            "\t[勇士,hero]放了他。",
            "\t[大法师,blackMagician]先打倒我的影子们吧，孩子。真正的我，你未必认得出。",
            {
                "type": "setBlock",
                "number": "star",
                "loc": [
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "2,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "10,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "10,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "6,10": {
            "floorId": "phant_2",
            "loc": [
                6,
                11
            ],
            "time": 500
        },
        "6,2": {
            "floorId": "floor_20",
            "loc": [
                6,
                6
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]……你赢了。",
            "\t[大法师,blackMagician]我让英雄永远是英雄，让世界永远安全。这有什么错？",
            "\t[勇士,hero]那是他的执念，不是他的人生。",
            "\t[大法师,blackMagician]执念……也是他唯一剩下的东西了。孩子，你会后悔的。",
            "\t[勇士,hero]那就让我后悔。",
            {
                "type": "waitAsync"
            },
            {
                "type": "addValue",
                "name": "flag:beatDarkMage",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "door.mp3",
                "stop": true
            },
            {
                "type": "setEnemy",
                "id": "redKnight",
                "name": "hp",
                "value": "core.material.enemys.redKnight.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "redKnight",
                "name": "atk",
                "value": "core.material.enemys.redKnight.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "redKnight",
                "name": "def",
                "value": "core.material.enemys.redKnight.def+100"
            },
            {
                "type": "setEnemy",
                "id": "blueKnight",
                "name": "hp",
                "value": "core.material.enemys.blueKnight.hp*2-2"
            },
            {
                "type": "setEnemy",
                "id": "blueKnight",
                "name": "atk",
                "value": "core.material.enemys.blueKnight.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "blueKnight",
                "name": "def",
                "value": "core.material.enemys.blueKnight.def+100"
            },
            {
                "type": "setEnemy",
                "id": "swordsman",
                "name": "hp",
                "value": "core.material.enemys.swordsman.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "swordsman",
                "name": "atk",
                "value": "core.material.enemys.swordsman.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "swordsman",
                "name": "def",
                "value": "core.material.enemys.swordsman.def+120"
            },
            {
                "type": "setEnemy",
                "id": "blueGuard",
                "name": "hp",
                "value": "core.material.enemys.blueGuard.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "blueGuard",
                "name": "atk",
                "value": "core.material.enemys.blueGuard.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "blueGuard",
                "name": "def",
                "value": "core.material.enemys.blueGuard.def+140"
            },
            {
                "type": "setEnemy",
                "id": "darkKnight",
                "name": "hp",
                "value": "core.material.enemys.darkKnight.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "darkKnight",
                "name": "atk",
                "value": "core.material.enemys.darkKnight.atk+220"
            },
            {
                "type": "setEnemy",
                "id": "darkKnight",
                "name": "def",
                "value": "core.material.enemys.darkKnight.def+120"
            },
            {
                "type": "setEnemy",
                "id": "swordsmanBlue",
                "name": "hp",
                "value": "core.material.enemys.swordsmanBlue.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "swordsmanBlue",
                "name": "atk",
                "value": "core.material.enemys.swordsmanBlue.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "swordsmanBlue",
                "name": "def",
                "value": "core.material.enemys.swordsmanBlue.def+100"
            },
            {
                "type": "setEnemy",
                "id": "E370",
                "name": "hp",
                "value": "core.material.enemys.E370.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "E370",
                "name": "atk",
                "value": "core.material.enemys.E370.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "E370",
                "name": "def",
                "value": "core.material.enemys.E370.def+100"
            },
            {
                "type": "setEnemy",
                "id": "swordsmanRed",
                "name": "hp",
                "value": "core.material.enemys.swordsmanRed.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "swordsmanRed",
                "name": "atk",
                "value": "core.material.enemys.swordsmanRed.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "swordsmanRed",
                "name": "def",
                "value": "core.material.enemys.swordsmanRed.def+100"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        1,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        3,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        9,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        11,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        1,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        1,
                        10
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        9,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "90",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        3,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        2,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        10,
                        11
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        11,
                        10
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        11,
                        9
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        8
                    ]
                ],
                "floorId": "phant_1",
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
                "floorId": "phant_1",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        10
                    ]
                ],
                "floorId": "phant_2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        9,
                        10
                    ]
                ],
                "floorId": "phant_3",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        4
                    ]
                ],
                "floorId": "phant_5",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "floorId": "phant_6",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        7
                    ]
                ],
                "floorId": "phant_6",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "floorId": "phant_7",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        8
                    ]
                ],
                "floorId": "phant_7",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        4
                    ]
                ],
                "floorId": "phant_7",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "floorId": "phant_8",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        4
                    ]
                ],
                "floorId": "floor_20",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "floorId": "floor_20",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "floorId": "floor_20",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        8
                    ]
                ],
                "floorId": "floor_20",
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('killedDarkMage',1);\ncore.plugin.updateEnemyData();\n}"
            }
        ],
        "5,5": [
            {
                "type": "show",
                "loc": [
                    [
                        2,
                        8
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]你下手很重……和他第一次登塔时一模一样。",
            {
                "type": "waitAsync"
            }
        ],
        "2,8": [
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]你以为你在救他。可你问过他吗？在梦里，他每一次都赢。",
            {
                "type": "waitAsync"
            }
        ],
        "10,8": [
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]最后一道影子也没了。……来吧，这一次是我。",
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "money",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "blackMagician",
                "name": "experience",
                "value": "3"
            },
            {
                "type": "waitAsync"
            }
        ],
        "10,4": [
            {
                "type": "show",
                "loc": [
                    [
                        10,
                        8
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]魔王只有在轮回里，才能一次次被打倒。梦醒了，谁来打倒他？你吗？",
            {
                "type": "waitAsync"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,340,340,340,  4,  4,  4,  4,  4],
    [  4,  4,  0,  0,  4,  0,  0,  0,  4,  0,  0,  4,  4],
    [340,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,340,  0,  0,  0,340,  0,  0,  0,340],
    [  4,340,  0,  4,  4,  4,  0,  4,340,340,247,  4,  4],
    [  4,  4,  0,  0,340,247,  0,  0,  4,  0,  0,  4,  4],
    [  4,  4,  4,  0,  0,  0,247,  0,  0,  0,  4,  4,  4],
    [340,  4,  0,  0,  4,  0,  0,  0,340,  0,  0,  4,  4],
    [  4,  4,247,  4,340,  4,  0,340,  4,  4,247,340,  4],
    [  4,  0,  0,  0,340,  0,  0,  0,340,  0,  0,  0,  4],
    [  4,  0,  0,  0,  4,  0, 90,  0,340,  0,  0,  0,  4],
    [  4,  4,  0,  0,340,  0,  0,  0,  4,  0,  0,  4,  4],
    [  4,  4,  4,  4,  4,  4,340,  4,  4,  4,  4,  4,340]
],
    "bgmap": [
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351],
    [351,351,351,351,351,351,351,351,351,351,351,351,351]
],
    "fgmap": [

]
}