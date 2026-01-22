main.floors.main9=
{
    "floorId": "main9",
    "title": "主塔  9F",
    "name": "9",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 90,  1, 31, 21,  1,  0,221,  1, 21,  0, 31,  1],
    [  1,  1,  1,  0,253, 81,  0,  0, 85,  0, 23,  0,  1],
    [  1, 32,  1,  0,  0,  1,  0,221,  1, 21,  0, 32,  1],
    [  1, 81,  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,209,  0,  0, 28, 21,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  1, 27,209,  1,201, 81,  0,  0,205,  0,  1],
    [  1, 82,  1,  0,  0,  1,  0,  1,  1,  1,  0,209,  1],
    [  1,  0, 81,210, 21,  1,  0, 81,  0,  1, 82,  1,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  0,  1,  0,122,  1],
    [  1, 87,  1, 31,  0,210, 36,  0,201, 81,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "11,10": [
            "\t[商人,woman]当你进入到下一区域，本区战斗之神的能力值也会增加。"
        ],
        "1,2": [
            {
                "type": "if",
                "condition": "flag:openMOTA==1",
                "true": [
                    "\t[神秘的声音]只有战胜你自己，才能获得力量！",
                    {
                        "type": "setValue",
                        "name": "flag:atk9F",
                        "value": "core.status.hero.atk"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:def9F",
                        "value": "core.status.hero.def"
                    },
                    {
                        "type": "setEnemy",
                        "id": "skeletonCaptain",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "skeletonCaptain",
                        "name": "experience",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "vampire",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "vampire",
                        "name": "experience",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redSwordsman",
                        "name": "money",
                        "value": "0"
                    },
                    {
                        "type": "setEnemy",
                        "id": "redSwordsman",
                        "name": "experience",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "status:atk",
                        "value": "flag:atk10F"
                    },
                    {
                        "type": "setValue",
                        "name": "status:def",
                        "value": "flag:def10F"
                    },
                    {
                        "type": "hide",
                        "time": 500
                    }
                ]
            }
        ],
        "1,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": "main10",
            "loc": [
                1,
                11
            ],
            "time": 500
        },
        "11,11": {
            "floorId": "main8",
            "loc": [
                11,
                11
            ]
        },
        "1,1": {
            "floorId": "MOTA1",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "7,1": [
            {
                "type": "if",
                "condition": "flag:doorF9==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            2
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF9",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "if",
                "condition": "flag:doorF9==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            2
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF9",
                        "value": "1"
                    }
                ]
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
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}