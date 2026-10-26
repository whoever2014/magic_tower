main.floors.phant_plus_5=
{
    "floorId": "phant_plus_5",
    "title": "幻境",
    "name": "5",
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
        "2,3": {
            "floorId": "phant_plus_4",
            "loc": [
                2,
                1
            ],
            "time": 500
        },
        "11,6": {
            "floorId": "phant_plus_1",
            "loc": [
                1,
                1
            ],
            "time": 500
        },
        "11,2": {
            "floorId": "phant_plus_7",
            "loc": [
                5,
                1
            ],
            "time": 500
        },
        "1,11": {
            "floorId": "phant_plus_7",
            "loc": [
                7,
                6
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "1,9": [
            {
                "type": "if",
                "condition": "flag:moyu5_path==1",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                10
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:moyu5_path",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,9": [
            {
                "type": "if",
                "condition": "flag:moyu5_path==1",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                10
                            ]
                        ],
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:moyu5_path",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage5')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage5",
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
                                9,
                                9
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
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_plus_5",
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,340,  4, 32,212,212,  0,  0,  0,  4,  4,340,  4],
    [  4,  4,340,  4,  4,  4,  4,  0,  4,  4,  0,417,  4],
    [  4,  4,414,  4, 32,337,  4,  0,  0,  0,  0,  4,  4],
    [  4,340,  0,  0,  0,  0,  4,  4,  4,  4,220,  4,  4],
    [  4,  4,  4,340,  4,  0,  0,  0,340,  4,  4,  4,  4],
    [  4, 27,  4,  4,236,  0,340,  0,  0,340,  4,415,  4],
    [  4,216,  0,  4,  4,  4,  4,  0,  0,225,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,216,  0,  4,  4,  0,225,  4],
    [  4,247,  0,247,  0,  4,  4,  0,340,340,  4, 28,  4],
    [  4,340,340,  4,340,  4,220,  0,  4,  4,340,  4,  4],
    [  4, 90,  0,  0,  4,340,  4,  0,  0, 31, 32,340,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}