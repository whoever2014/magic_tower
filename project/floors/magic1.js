main.floors.magic1=
{
    "floorId": "magic1",
    "title": "幻境",
    "name": "1",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "images": [],
    "item_ratio": 4,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "3,6": [
            "\t[老人,man] 还记得12楼老人说的话吗？仔细观察魔物法典吧。"
        ],
        "9,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "0"
            }
        ]
    },
    "changeFloor": {
        "4,4": {
            "floorId": "magic1",
            "loc": [
                4,
                4
            ],
            "time": 500
        },
        "9,5": {
            "floorId": "main20",
            "loc": [
                6,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "if",
                "condition": "flag:killedWrongMagic==0",
                "true": [
                    {
                        "type": "hide",
                        "loc": [
                            [
                                3,
                                4
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setBlock",
                        "number": "90",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                11,
                                6
                            ]
                        ],
                        "floorId": "main2",
                        "time": 0
                    },
                    {
                        "type": "setValue",
                        "name": "flag:beenToMagic",
                        "value": "1"
                    }
                ]
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "8,10": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "5,1": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:killedWrongMagic",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [340,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,340],
    [  4,220,  0,  4,340,220,340,  4,340,  0,  0,220,  4],
    [  4,  4,  0,340,220,  0,  0,  0,  0,  0,  4,340,  4],
    [  4,340,  0,  4,340,340,  4,220,  0,220,  4,340,  4],
    [  4,220,  0,  0, 90,340,  4,  4,  0,  0,  0,220,  4],
    [  4,340,  0,  4,  4,  4,220,  0,  0, 90,  0,  4,  4],
    [  4,  4,  0,121,  4,  0,  0,  0,220,340,  0,220,  4],
    [  4,220,  0,  0,340,  0,  4,  4,340,  4,  0,  4,  4],
    [340,  4,  4,  0,  4,337,340,220,  4,220,  0,  4,  4],
    [  4,  4,  4,  0,340,  4,  4,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,220,  4,  0,  4,  4],
    [  4,220,  4,220,  4,220,  4,220,  4,  4,  0,220,  4],
    [340,  4,  4,  4,340,  4,  4,  4,  4,340,  4,  4,  4]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,351,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,351,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "weather": null
}