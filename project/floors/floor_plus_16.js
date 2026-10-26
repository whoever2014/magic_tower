main.floors.floor_plus_16=
{
    "floorId": "floor_plus_16",
    "title": "主塔  16F",
    "name": "16",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 31,  0,  0,  1,  0, 87,  0,  1,  0,  0, 87,  1],
    [  1,  0,  0,206, 81,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1, 81,  1,  1,203,  1,206,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1, 31,  1,  0,  0,  1,  1,217,  1],
    [  1,213,  0,213,  1,  1,  1,  1,  0,  1,  0,  0,  1],
    [  1,  1, 85,  1,  1,  1,  1,  1,206,  1, 21,  1,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  0,  1,  0,  0,  1],
    [  1,214,  0,214,  1,221,  0,  0,  0,  1,  1,213,  1],
    [  1,  1, 85,  1,  1,  1, 81,  1,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1, 31,  0,  0,  1],
    [  1, 27,  0, 28,  1,  0, 88,  0,  1, 27,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "floor_plus_15",
            "loc": [
                6,
                11
            ]
        },
        "11,11": {
            "floorId": "floor_plus_15",
            "loc": [
                11,
                11
            ]
        },
        "6,1": {
            "floorId": "floor_plus_17",
            "loc": [
                6,
                1
            ]
        },
        "11,1": {
            "floorId": "floor_plus_17",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

]
}