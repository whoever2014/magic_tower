main.floors.floor_plus_11=
{
    "floorId": "floor_plus_11",
    "title": "主塔  11F",
    "name": "11",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 32, 81,213,  1,  0, 88,  0,  1,  0, 21, 21,  1],
    [  1,206,  1, 28,  1,  0,  0,  0, 81,203,  0, 21,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  0,  0, 21,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1,205,  1,  1,  1,  1, 81,  1,  1,  0,206,  0,  1],
    [  1,  0,  0,  1,  0,  1,206,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0, 81,213,  1,  0,203,  1,213,  0,213,  1],
    [  1,  0,  0,  1,  0,  1,  1, 81,  1,  1, 85,  1,  1],
    [  1,205,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,206,  1,  1,217, 82,  0, 38,  0,  1],
    [  1, 87,  0,  1, 27,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": "floor_plus_10",
            "loc": [
                6,
                1
            ]
        },
        "1,11": {
            "floorId": "floor_plus_12",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "9,7": [
            {
                "type": "if",
                "condition": "flag:doorF11==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF11",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "if",
                "condition": "flag:doorF11==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF11",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "10,10": [
            {
                "type": "openDoor",
                "loc": [
                    10,
                    8
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}