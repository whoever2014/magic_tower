main.floors.phant_plus_8=
{
    "floorId": "phant_plus_8",
    "title": "幻境",
    "name": "8",
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
        "10,1": {
            "floorId": "phant_plus_2",
            "loc": [
                11,
                1
            ],
            "time": 500
        },
        "4,4": {
            "floorId": "phant_plus_9",
            "loc": [
                7,
                11
            ],
            "time": 500
        },
        "2,9": {
            "floorId": "phant_plus_6",
            "loc": [
                1,
                10
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "11,11": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage8')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage8",
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
                                8,
                                11
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
        "8,11": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_plus_8",
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
    [  4, 28,  4, 28,225,  0,  0, 31,  4,340,416,  0,  4],
    [  4,  0,  4,  4,  4,  4,212,340,  4,  4,340,  0,  4],
    [  4,  0,219,340,  0,  0,  0,  0,  4,  0,  0,  0,  4],
    [  4,  0,  4,340,414,  0,  0,  4,340,  0,219,  0,  4],
    [  4,  0,340,  4,340,  0,340,  4,  0,  0,340,  0,  4],
    [  4,  0,  4, 31,220,  0,  4,340,  0,  4,340,  0,  4],
    [  4,  0,340,  4,  0,  0,  0,  0, 32,  4,  4,  0,  4],
    [  4,  0,340,  4,  0,  4,  4,  0,  4,  4,340,  0,  4],
    [  4,  0,415,340,  4,  4, 27,212,  4,219,  0,  0,  4],
    [  4,  0,340,  4,220,  4,  4,  4,  4,  4,  0,  4,  4],
    [  4,  0,  0,  0, 27,220,340,340,236,  0,  0,337,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}