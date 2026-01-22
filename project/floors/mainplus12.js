main.floors.mainplus12=
{
    "floorId": "mainplus12",
    "title": "主塔  12F",
    "name": "12",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 21, 21,  0,  2,218,  0,218,  2, 21,  0, 27,  2],
    [  2, 22, 21,  0,  2,  0,  1,  0,  2,  0,217,  0,  2],
    [  2,  0,213,  0,  2,218,  0,218,  2,  2, 81,  2,  2],
    [  2,  2, 81,  2,  2,  2, 81,  2,  2,  0,  0, 21,  2],
    [  2, 28,  0,  0, 81,  0,  0,  0, 81,206,  0,  0,  2],
    [  2,  0,203, 21,  2,214, 21,  0,  2,  0,  0, 31,  2],
    [  2,  2, 82,  2,  2, 81,  2,  2,  2,  2,  2,  2,  2],
    [  2, 31,  0,  0,  0,  0,  0,  0,  2,  9,214, 10,  2],
    [  2,  2,203,  2,  2,206,  2,205,  2,  2,  0,  2,  2],
    [  2,  0,  0,  0,  2,  0,  2, 81,  2,  0,  0,  0,  2],
    [  2, 88,  0, 21,  2,  0,  0,205,  0,  0,  0, 87,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": "mainplus11",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "mainplus13",
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
                                10,
                                9
                            ]
                        ],
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
                                10,
                                9
                            ]
                        ],
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
                                10,
                                9
                            ]
                        ],
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
                                10,
                                9
                            ]
                        ],
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