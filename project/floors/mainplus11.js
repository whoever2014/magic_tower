main.floors.mainplus11=
{
    "floorId": "mainplus11",
    "title": "主塔  11F",
    "name": "11",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 2,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 32, 81,213,  2,  0, 88,  0,  2,  0, 21, 21,  2],
    [  2,206,  2, 28,  2,  0,  0,  0, 81,203, 21, 21,  2],
    [  2, 81,  2,  2,  2,  2, 81,  2,  2,  0,  0,  0,  2],
    [  2,  0,  0,  0,  0,  0,  0,  0,  2,  2, 82,  2,  2],
    [  2,205,  2,  2,  2,  2, 81,  2,  2,  0,217,  0,  2],
    [  2,  0, 21,  2,  0,  2,206,  0,  2,  0,  0,  0,  2],
    [  2,  0,  0, 81,213,  2,  0,206,  2,213,  0,213,  2],
    [  2,  0, 21,  2,  0,  2,  2, 81,  2,  2, 85,  2,  2],
    [  2,  0,  2,  2,  0, 81,  0,  0,  2,  0,  0,  0,  2],
    [  2,205,  0,  2,206,  2,  2,218, 81,  0, 38,  0,  2],
    [  2, 87,205,  2, 27,  0,  0,  0,  2,  0,  0,  0,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": "mainplus10",
            "loc": [
                6,
                1
            ]
        },
        "1,11": {
            "floorId": "mainplus12",
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