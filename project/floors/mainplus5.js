main.floors.mainplus5=
{
    "floorId": "mainplus5",
    "title": "主塔  5F",
    "name": "5",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 87,  0,  0,  0,202, 31, 31,  2, 27,  0, 28,  2],
    [  2,  0,  2, 81,  2,  2,  2,  2,  2, 31,  0, 31,  2],
    [  2,  0,  2, 81,  2, 21, 81,209,  2,  2, 85,  2,  2],
    [  2,210,  2,  0,  2,  0,  2, 22,  2,366,  0,366,  2],
    [  2,209,  2,202,  2,253,  2,  2,  2,  0,  0, 21,  2],
    [  2,  0, 81,  0,  2,  0,  0,  0,  2,  2, 81,  2,  2],
    [  2,  0,  2,  2,  2,  0,  0,  0, 81,205,  0,  0,  2],
    [  2,  0,202,253,  0,  0,  0,  0,  2,  0,205,  0,  2],
    [  2, 81,  2,  2,  2,  2,  0,  2,  2,  2, 81,  2,  2],
    [  2,202, 21,  2,  2,  0,  0, 21,  2,  0,209,  0,  2],
    [  2, 21, 21, 81, 81,  0, 88,  0,  2, 21, 21, 28,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": "mainplus6",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "mainplus4",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "9,4": [
            {
                "type": "if",
                "condition": "flag:doorF5==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF5",
                        "value": "1"
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "if",
                "condition": "flag:doorF5==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "addValue",
                        "name": "flag:doorF5",
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