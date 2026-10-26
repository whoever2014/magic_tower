main.floors.phant_plus_9=
{
    "floorId": "phant_plus_9",
    "title": "幻境",
    "name": "9",
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
        "7,11": {
            "floorId": "phant_plus_5",
            "loc": [
                2,
                3
            ],
            "time": 500
        },
        "2,5": {
            "floorId": "phant_plus_1",
            "loc": [
                11,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "7,8": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage9')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage9",
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
                                7,
                                11
                            ]
                        ],
                        "floorId": "phant_plus_2",
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
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_plus_9",
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
    [  4,  4,  0,  0,212,  0,212,  0,  0,  0,  4,  0,  4],
    [  4,  0,  0,220,  4,  4,  4,  4, 28,  0,  0,  0,  4],
    [  4,340,  0,340,  4,  0, 31,340,  4,  0,340,  4,  4],
    [  4,  0,  0,  0,340,  0,340,  4,220,  0,  0,  0,  4],
    [  4,  0,414,  0,  0,  0,  4,  0,  0,  0,340,  0,  4],
    [  4,  0,  0,  0,  4,  0,  4,  0,  4,  4,  4,  0,  4],
    [  4,340,  0,220,  4,225,  0,  0,236,  4,  4,  0,  4],
    [  4,  4,  4,340,  4,340,  0,337,  4,  4,  0,  0,  4],
    [  4,  0,  0,  0, 31,  4,  0,  4,340,  4,219,  0,  4],
    [  4,  0,220,  0,  0,216,  0,  0,  0,  4,  0,  0,  4],
    [  4, 27,  4,  4,216,  0,  4,414,  4,  4, 32,219,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}