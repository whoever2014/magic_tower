main.floors.moyu10=
{
    "floorId": "moyu10",
    "title": "魔域    10F",
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
            "\t[暗黑大法师,blackMagician]这场勇者闹剧该结束了！",
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
        "3,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,8": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "9,4": {
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
        }
    },
    "changeFloor": {
        "6,10": {
            "floorId": "moyu2",
            "loc": [
                6,
                11
            ],
            "time": 500
        },
        "6,2": {
            "floorId": "main20",
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
            "\t[大法师,blackMagician]我输了。你的确很强。",
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
                "id": "yellowKnight",
                "name": "hp",
                "value": "core.material.enemys.yellowKnight.hp*2-2"
            },
            {
                "type": "setEnemy",
                "id": "yellowKnight",
                "name": "atk",
                "value": "core.material.enemys.yellowKnight.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "yellowKnight",
                "name": "def",
                "value": "core.material.enemys.yellowKnight.def+100"
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
                "id": "E368",
                "name": "hp",
                "value": "core.material.enemys.E368.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "E368",
                "name": "atk",
                "value": "core.material.enemys.E368.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "E368",
                "name": "def",
                "value": "core.material.enemys.E368.def+140"
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
                "id": "E373",
                "name": "hp",
                "value": "core.material.enemys.E373.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "E373",
                "name": "atk",
                "value": "core.material.enemys.E373.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "E373",
                "name": "def",
                "value": "core.material.enemys.E373.def+120"
            },
            {
                "type": "setEnemy",
                "id": "E374",
                "name": "hp",
                "value": "core.material.enemys.E374.hp*2"
            },
            {
                "type": "setEnemy",
                "id": "E374",
                "name": "atk",
                "value": "core.material.enemys.E374.atk+160"
            },
            {
                "type": "setEnemy",
                "id": "E374",
                "name": "def",
                "value": "core.material.enemys.E374.def+120"
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        2,
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
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        3,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        10,
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
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        10,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        2,
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        2,
                        10
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        10,
                        10
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
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        3,
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
                        9
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        9,
                        10
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        10,
                        9
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        5
                    ]
                ],
                "floorId": "moyu1",
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
                "floorId": "moyu1",
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
                "floorId": "moyu2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        10
                    ]
                ],
                "floorId": "moyu2",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        3,
                        10
                    ]
                ],
                "floorId": "moyu2",
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
                "floorId": "moyu3",
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
                "floorId": "moyu5",
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
                "floorId": "moyu6",
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
                "floorId": "moyu6",
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
                "floorId": "moyu7",
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
                "floorId": "moyu7",
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
                "floorId": "moyu7",
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
                "floorId": "moyu8",
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
                "floorId": "main20",
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
                "floorId": "main20",
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
                "floorId": "main20",
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
                "floorId": "main20",
                "time": 500
            },
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('killedDarkMage',1);\ncore.plugin.updateEnemyData();\n}"
            }
        ],
        "3,8": [
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        4
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]还不够！",
            {
                "type": "waitAsync"
            }
        ],
        "9,8": [
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
            "\t[暗黑大法师,blackMagician]你只不过是击败了一个我的分身而已！",
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
        "9,4": [
            {
                "type": "show",
                "loc": [
                    [
                        9,
                        8
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]你就这点本事嘛？",
            {
                "type": "waitAsync"
            }
        ],
        "5,5": [
            {
                "type": "show",
                "loc": [
                    [
                        3,
                        8
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[大法师,blackMagician]我还没有倒下！",
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
    [  4,  4,340,340,  4,340,340,  4,  4,  4,  4,340,  4],
    [  4,  4,  0,  0,  4,  0,  0,  0,  4,  0,  0,  4,  4],
    [  4,  4,  0,  0,340,  0,  0,  0,340,  0,  0,  4,  4],
    [  4,340,  4,  0,  4,  4,340,  4,340,247,340,  4,  4],
    [  4,  4,  4,  0,340,247,  0,  0,  4,  0,340,  4,  4],
    [  4,340,  4,  0,  0,  0,247,  0,  0,  0,  4,340,  4],
    [  4,  4,  4,  0,  4,  0,  0,  0,340,  0,340,  4,  4],
    [  4,  4,  4,247,340,  4,  0,340,  4,247,  4,340,  4],
    [  4,  4,  0,  0,340,  0,  0,  0,340,  0,  0,  4,  4],
    [  4,  4,  0,  0,  4,  0, 90,  0,  4,  0,  0,  4,  4],
    [  4,340,  4,340,  4,  4,340,340,  4,340,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,351,351,  4,351,351,351,  4,351,351,  4,  4],
    [  4,  4,351,351,351,351,351,351,351,351,351,  4,  4],
    [  4,  4,  4,351,  4,  4,351,  4,  4,351,  4,  4,  4],
    [  4,  4,  4,351,  4,351,351,351,  4,351,  4,  4,  4],
    [  4,  4,  4,351,351,351,351,351,351,351,  4,  4,  4],
    [  4,  4,  4,351,  4,351,351,351,  4,351,  4,  4,  4],
    [  4,  4,  4,351,  4,  4,351,  4,  4,351,  4,  4,  4],
    [  4,  4,351,351,351,351,351,351,351,351,351,  4,  4],
    [  4,  4,351,351,  4,351,351,351,  4,351,351,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "fgmap": [

]
}