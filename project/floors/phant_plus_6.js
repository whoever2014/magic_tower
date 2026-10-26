main.floors.phant_plus_6=
{
    "floorId": "phant_plus_6",
    "title": "幻境",
    "name": "6",
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
        "6,8": {
            "floorId": "phant_plus_8",
            "loc": [
                10,
                1
            ],
            "time": 500
        },
        "11,3": {
            "floorId": "phant_plus_8",
            "loc": [
                2,
                9
            ],
            "time": 500
        },
        "1,10": {
            "floorId": "phant_plus_3",
            "loc": [
                5,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "2,4": [
            {
                "type": "if",
                "condition": "!core.hasFlag('sealMage6')",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:sealMage6",
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
                                10
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
        "2,1": [
            {
                "type": "setValue",
                "name": "flag:steel_phant_plus_6",
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
    [  4,  4,236,  4,  0,  0,  0,  0,225,  0, 31,  4,  4],
    [  4,  0,  0,  0,  0,  4,340,  0,225,  4,340,340,  4],
    [  4,  4,  4,  0,  0,340,  4,  0,  4,  4,340,415,  4],
    [  4,  4,337,  0,  0,  0,  0,  0, 31,  0,340,  0,  4],
    [  4,340,  4,340,  0,340,  0,340,  0,  0,  4,216,  4],
    [  4,340,  4,225,  0,340,216,340,340,  0,  0,  0,  4],
    [  4, 32,  0,225,340,340,  0,  0,340,216,  0,  0,  4],
    [  4,  4,  0,  4,340,340,416,340,  4,  4,  4,  0,  4],
    [  4,340,340,  4, 27,340,340,  4,  4,  0,  0,  0,  4],
    [  4,415,340,  0, 32,340,220,  0,212,212,  4,  0,  4],
    [  4,  0,212,225,  0,340,  4, 28,  4,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

]
}