main.floors.phant_plus_1=
{
    "floorId": "phant_plus_1",
    "title": "幻境",
    "name": "1",
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
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": "phant_plus_2",
            "loc": [
                11,
                11
            ],
            "time": 500
        },
        "6,8": {
            "floorId": "phant_plus_3",
            "loc": [
                8,
                6
            ],
            "time": 500
        },
        "11,1": {
            "floorId": "phant_plus_8",
            "loc": [
                4,
                4
            ],
            "time": 500
        },
        "11,11": {
            "floorId": "phant_plus_3",
            "loc": [
                11,
                10
            ],
            "time": 500
        },
        "1,11": {
            "floorId": "phant_plus_7",
            "loc": [
                2,
                5
            ],
            "time": 500
        },
        "1,6": {
            "floorId": "phant_plus_1",
            "loc": [
                11,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "8,4": [
            {
                "type": "if",
                "condition": "flag:doorM1==1",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorM1",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,6": [
            {
                "type": "if",
                "condition": "flag:doorM1==1",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorM1",
                        "value": "1"
                    }
                ]
            }
        ],
        "10,3": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage1')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage1",
                        "value": "1"
                    },
                    {
                        "type": "addValue",
                        "name": "flag:sealBroken",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                10,
                                6
                            ]
                        ],
                        "floorId": "phant_plus_2",
                        "remove": true,
                        "time": 0
                    },
                    {
                        "type": "sleep",
                        "time": 600
                    },
                    {
                        "type": "if",
                        "condition": "flag:sealBroken>=9",
                        "true": [
                            {
                                "type": "tip",
                                "text": "幻境二层的封印彻底解开了！"
                            }
                        ],
                        "false": [
                            {
                                "type": "tip",
                                "text": "红衣大法师倒下了，幻境二层封印的光芒减弱了（${flag:sealBroken}/9）"
                            }
                        ]
                    }
                ],
                "false": []
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_plus_1",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
            },
            {
                "type": "sleep",
                "time": 600
            },
            {
                "type": "tip",
                "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,340,  4,  4,  4,  4,340,  4,  4,  4,  4,  4],
    [  4,415,  0,  4,  0,  0,  0,220,  0,  4,  0,414,  4],
    [  4,  4, 31,216,  0,219,  0,  0,  0,212,  0,  0,  4],
    [  4,  4,  4,  4,340,  4,340,  4,340,340,337,  0,340],
    [  4,212,  4,  4,  0,  0,  0,  4,247,  0,  0,236,  4],
    [  4,  0, 31,  4,  0, 41,  0,340,  0,  0,  4,340,  4],
    [340,417,  0,340,  0,  0,  0,  4,247,  0,  0,219,  4],
    [  4,  4,  0,340,  4,  4,  4,340,  0,  0,  0,  0,  4],
    [  4, 27,216,  0,219,  4,417,  0,  0,  4,340,  0,  4],
    [  4,216,  0,  0, 32,340,340,  0,340,340,  4,  0,  4],
    [  4,  0,  4,220,  4,340,  0,  0,  4,212,  0,  0,  4],
    [340,416,  4,  4,340,  0,  0,340,340, 28,  4,417,  4],
    [  4,  4,  4,340,340,  4,  4,  4,  4,340,  4,  4,  4]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,351,351,  0,  0,  0,351,  0,  0,  0,  0,  0,  0],
    [  0,  0,351,  0,  0,  0,351,  0,  0,  0,  0,  0,  0],
    [  0,351,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}