main.floors.floor_plus_14=
{
    "floorId": "floor_plus_14",
    "title": "主塔  14F",
    "name": "14",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0, 28,  1,  0, 87,  0,  1,  0,  0, 27,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0, 81,213,  0,  0,  1],
    [  1,  1, 85,  1,  1,  0,203,  0,  1,  0,218, 21,  1],
    [  1,  0,  0,  0,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,221,  0,221,  1, 31,  0,  0,  1,  0,206,  0,  1],
    [  1,  1, 85,  1,  1,  0,214,  0, 81,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0, 21,  1,  0,214, 32,  1],
    [  1,221,  0,221,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  1, 85,  1,  1,  0,203,  0,  1,  0,217,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0, 37,  0,  1,  0, 88,  0,  1, 21,  0, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
            "floorId": "floor_plus_15",
            "loc": [
                6,
                1
            ]
        },
        "6,11": {
            "floorId": "floor_plus_13",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": "floor_plus_15",
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
                "type": "addValue",
                "name": "flag:doorF14_2",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorF14_2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "addValue",
                "name": "flag:doorF14_2",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorF14_2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ],
        "1,8": [
            {
                "type": "addValue",
                "name": "flag:doorF14_2",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorF14_2==4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "addValue",
                "name": "flag:doorF14_2",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorF14_2==4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
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