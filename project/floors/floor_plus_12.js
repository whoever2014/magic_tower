main.floors.floor_plus_12=
{
    "floorId": "floor_plus_12",
    "title": "主塔  12F",
    "name": "12",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21, 21, 21,  1,218,  0,218,  1, 21,  0, 28,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  1,  0,217,  0,  1],
    [  1,  0,213,  0,  1,218,  0,218,  1,  1, 81,  1,  1],
    [  1,  1, 81,  1,  1,  1, 81,  1,  1,  0,  0, 21,  1],
    [  1, 27,  0,  0, 81,  0,  0,  0, 81,206,  0,  0,  1],
    [  1,  0,203, 21,  1,214, 21, 32,  1,  0,  0, 31,  1],
    [  1,  1, 82,  1,  1, 81,  1,  1,  1,  1,  1,  1,  1],
    [  1, 31,  0,  0,  0,  0,  0,  0,  1,  9,  0, 10,  1],
    [  1,  1,203,  1,  1,  0,  1,205,  1,  1,  0,  1,  1],
    [  1,  0,  0,  0,  1,206,  1, 81,  1,  0,  0,  0,  1],
    [  1, 88,  0,  0,  1,  0,  0,205,  0,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": "floor_plus_11",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "floor_plus_13",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "5,1": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "floorId": "floor_plus_20",
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,3": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "floorId": "floor_plus_20",
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
                        "value": "1"
                    }
                ]
            }
        ],
        "5,3": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "floorId": "floor_plus_20",
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
                        "value": "1"
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "if",
                "condition": "flag:fireF12==3",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                9
                            ]
                        ],
                        "floorId": "floor_plus_20",
                        "time": 500
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:fireF12",
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

]
}