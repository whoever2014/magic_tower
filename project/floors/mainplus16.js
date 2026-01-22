main.floors.mainplus16=
{
    "floorId": "mainplus16",
    "title": "主塔  16F",
    "name": "16",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 31,  0, 21,  2,  0, 87,  0,  2,  0,  0, 87,  2],
    [  2,  0,  0,206, 81,  0,  0,  0,  2, 31,  0,  0,  2],
    [  2,  2, 81,  2,  2,203,  2, 82,  2,  2,  0,218,  2],
    [  2,  0,  0,  0,  2, 22,  2,  0,  0,  2,  2, 81,  2],
    [  2,213,  0,213,  2,  2,  2,  2,206,  2,  0,217,  2],
    [  2,  2, 85,  2,  2,  2,  2,  2,  0,  2, 21,  2,  2],
    [  2,  0,  0,  0,  2,  2,  2,  2,206,  2,  0,217,  2],
    [  2,214,  0,214,  2,367,  0,  0,  0,  2,  2, 81,  2],
    [  2,  2, 85,  2,  2,  2, 81,  2,  2,  2,  0,213,  2],
    [  2, 28,  0, 31,  2,  0,  0,  0,  2, 31,  0,  0,  2],
    [  2, 27,  0, 21,  2,  0, 88,  0,  2, 27,  0, 88,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "mainplus15",
            "loc": [
                6,
                11
            ]
        },
        "11,11": {
            "floorId": "mainplus15",
            "loc": [
                11,
                11
            ]
        },
        "6,1": {
            "floorId": "mainplus17",
            "loc": [
                6,
                1
            ]
        },
        "11,1": {
            "floorId": "mainplus17",
            "loc": [
                11,
                1
            ]
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "addValue",
                "name": "flag:doorF14_1",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorF16_1==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF16_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorF16_1==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF16_1",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "if",
                "condition": "flag:doorF16_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF16_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "if",
                "condition": "flag:doorF16_2==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF16_2",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
        6,
        11
    ],
    "upFloor": [
        6,
        1
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}