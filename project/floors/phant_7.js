main.floors.phant_7=
{
    "floorId": "phant_7",
    "title": "幻境",
    "name": "7",
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
        "5,1": {
            "floorId": "phant_2",
            "loc": [
                4,
                9
            ],
            "time": 500
        },
        "11,6": {
            "floorId": "phant_9",
            "loc": [
                2,
                5
            ],
            "time": 500
        },
        "7,6": {
            "floorId": "phant_5",
            "loc": [
                1,
                11
            ],
            "time": 500
        },
        "2,5": {
            "floorId": "phant_7",
            "loc": [
                4,
                11
            ],
            "time": 500
        },
        "4,11": {
            "floorId": "phant_4",
            "loc": [
                10,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "3,8": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage7')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage7",
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
                                11
                            ]
                        ],
                        "floorId": "phant_2",
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
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_7",
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
    [  4, 28,  0, 31,340,417,  0,  0,  0,219,  4,  4,  4],
    [  4,  4,  0,219,  4,340,  0,220,  0,  0,  0,216,  4],
    [  4,340,  0,  4,  4,  4,  0,  4,340,340,216, 32,  4],
    [  4,  0,  0,  0,  4,  0,  0,  4, 42,340,  4,  4,  4],
    [  4,  0,416,  0,340,611,340,  4,  0,  0,  4,340,  4],
    [  4,  0,340,  4,  4,  4,340, 90,  0,  0,  4,414,  4],
    [  4,  0,  0,  0,  0,  0,340,340,340,  4,  4,  0,  4],
    [  4,  4,  0,337,  4,  0,  4,340,  4,  0,  0,  0,  4],
    [  4, 27,  0,340,  4,236,  4, 32,  4,212,  4,  0,  4],
    [  4,  0,219,  0,  4,340,  4,216,340,225,  4,216,  4],
    [  4,  0,  0,  0,416,  4,  4,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [],
    "fgmap": []
}