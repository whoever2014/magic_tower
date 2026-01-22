main.floors.mainplus9=
{
    "floorId": "mainplus9",
    "title": "主塔  9F",
    "name": "9",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 90,  2, 31, 21,  2,  0,221,  2, 21,  0, 31,  2],
    [  2,  2,  2,  0,253, 81,  0,  0, 85,  0, 23,  0,  2],
    [  2, 32,  2,  0,  0,  2,  0,221,  2, 21,  0, 32,  2],
    [  2, 81,  2, 81,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2,  0,  0,  0,  0,  0,  0,209,  0,  0, 28, 21,  2],
    [  2,  0,  2,  2, 81,  2,  2,  2,  2,  2, 81,  2,  2],
    [  2,  0,  2, 27,209,  2,201, 81,  0,  0,205,  0,  2],
    [  2, 82,  2,  0,  0,  2,  0,  2,  2,  2,  0,209,  2],
    [  2,  0, 81,210, 21,  2,  0, 81,  0,  2, 82,  2,  2],
    [  2,  0,  2,  2, 81,  2,  2,  2,  0,  2,  0,  0,  2],
    [  2, 87,  2, 31,  0,210, 36,  0,201, 81,  0, 88,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {
        "1,2": [
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
                "type": "setBlock",
                "number": "whiteWall",
                "loc": [
                    [
                        1,
                        3
                    ]
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
            "floorId": "mainplus10",
            "loc": [
                1,
                11
            ],
            "time": 500
        },
        "11,11": {
            "floorId": "mainplus8",
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
    [  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}