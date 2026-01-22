main.floors.base1=
{
    "floorId": "base1",
    "title": "地下  1F",
    "name": "-1",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 22,  1, 27,  1, 21, 22, 21,  1, 28,  1],
    [  1,  0,  0, 21,  1, 21,  1,  0,374,  0,  1, 21,  1],
    [  1,  1,  0,  1,  1,373,  1,  1, 81,  1,  1,374,  1],
    [  1,372,  0,372,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1, 82,  1,  1,  1, 81,  1],
    [  1,372,  0,372,  1,  0,  1,372, 28, 21,  1,373,  1],
    [  1,  1,  0,  1,  1,372,  1, 32, 27,372,  1, 21,  1],
    [  1, 31,  0,  0,  1,  0,  1,  1,  1, 81,  1, 21,  1],
    [  1,  1,  1,  0,  1,  0, 81,  0,373,  0,  1, 21,  1],
    [  1,121,  1,372, 81,  0,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,372,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "1,10": [
            "\t[老人,man]地下层的是由奴隶们建造的，可怜的奴隶们被压榨没有任何资产。"
        ],
        "2,4": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    2,
                    3
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    2,
                    7
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        4
                    ]
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": "base2",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": "main0",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "1,4": [
            {
                "type": "if",
                "condition": "flag:doorB1==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB1",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "if",
                "condition": "flag:doorB1==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB1",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,6": [
            {
                "type": "if",
                "condition": "flag:doorB1==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB1",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,6": [
            {
                "type": "if",
                "condition": "flag:doorB1==3",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            7
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorB1",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

],
    "underGround": true
}