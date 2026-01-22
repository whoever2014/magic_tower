main.floors.mainplus14=
{
    "floorId": "mainplus14",
    "title": "主塔  14F",
    "name": "14",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 87,  0, 27,  2,  0, 87,  0,  2,  0,  0, 28,  2],
    [  2,  0,  0,  0,  2,  0,  0,  0, 81,213,  0, 21,  2],
    [  2,  2, 85,  2,  2,  0,203,  0,  2,  0,218,  0,  2],
    [  2,  0,  0,  0,  2,  2, 82,  2,  2,  2, 81,  2,  2],
    [  2,367,  0,367,  2, 31,  0,  0,  2,  0,206,  0,  2],
    [  2,  2, 85,  2,  2,  0,214,  0, 81,  0,  0,  0,  2],
    [  2,  0,  0,  0,  2,  0,  0, 21,  2,  0,214, 32,  2],
    [  2,367,  0,367,  2,  2, 81,  2,  2,  2, 81,  2,  2],
    [  2,  2, 85,  2,  2,  0,203,  0,  2,  0,217,  0,  2],
    [  2,  0,  0,  0,  2,  0,  0,  0,  2, 21,  0, 21,  2],
    [  2,  0, 37,  0,  2,  0, 88,  0,  2,  0,  0,  0,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {
        "2,3": [
            {
                "type": "if",
                "condition": "flag:doorF14_1>=2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "mainplus15",
            "loc": [
                6,
                1
            ]
        },
        "6,11": {
            "floorId": "mainplus13",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": "mainplus15",
            "loc": [
                1,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "1,5": [
            {
                "type": "if",
                "condition": "flag:doorF14_2==1",
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
                        "name": "flag:doorF14_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "if",
                "condition": "flag:doorF14_2==1",
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
                        "name": "flag:doorF14_2",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "if",
                "condition": "flag:doorF14_3==1",
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
                        "name": "flag:doorF14_3",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "if",
                "condition": "flag:doorF14_3==1",
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
                        "name": "flag:doorF14_3",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
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
        1
    ]
}