main.floors.MOTA5=
{
    "floorId": "MOTA5",
    "title": "魔塔  5F",
    "name": "0",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,322,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,323,  0,  0,  0,  0,  0,  0,  0,321,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0, 90,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    10
                ]
            ]
        }
    ],
    "events": {
        "6,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": "main0",
            "loc": [
                6,
                5
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "7,7": null,
        "5,7": null,
        "2,6": [
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "440"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "atk",
                "value": "448"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "144"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "special",
                "value": "[2,15]"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "value",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "money",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "experience",
                "value": "2"
            }
        ],
        "10,6": [
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "440"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "atk",
                "value": "448"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "144"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "special",
                "value": "[2,15]"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "value",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "money",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "experience",
                "value": "2"
            }
        ],
        "6,2": [
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "1",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 500
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "hp",
                "value": "440"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "atk",
                "value": "448"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "def",
                "value": "144"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "special",
                "value": "[2,15]"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "value",
                "value": "100"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "money",
                "value": "45"
            },
            {
                "type": "setEnemy",
                "id": "great_magician",
                "name": "experience",
                "value": "2"
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

],
    "upFloor": [
        6,
        11
    ],
    "downFloor": [
        6,
        11
    ]
}