main.floors.base_14=
{
    "floorId": "base_14",
    "title": "地下  14F",
    "name": "-14",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 27, 82,224,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1, 28,  0,  1,  1,  1,  0,  1,  1,  1,  0,  0,  1],
    [  1, 81,  1,  1,  0, 81,  0, 81,  0,  1,  1,  1,  1],
    [  1,232,  0,389,  0,  1,  0,  1,224, 81, 21, 32,  1],
    [  1,  0, 21,  0,224,  1,  0,  1,  0,  1,  0, 21,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  0,  1,  1,  1,  1],
    [  1, 21, 21, 21, 21,  1,  0,  1,  0,  1, 21, 22,  1],
    [  1,  0,  0,  0, 22,  1,  0,  1,227, 81,  0, 21,  1],
    [  1,  1, 85,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,222,  0,222,  1,  0,  0,  0,  0,370,  1, 21,  1],
    [  1,  0,  0,  0,  0,  0, 88,  1,389, 27, 21, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": "base_13",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "base_15",
            "stair": "upFloor"
        }
    },
    "afterBattle": {
        "1,10": [
            {
                "type": "if",
                "condition": "flag:doorB14==1",
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
                        "name": "flag:doorB14",
                        "value": "1"
                    }
                ]
            }
        ],
        "3,10": [
            {
                "type": "if",
                "condition": "flag:doorB14==1",
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
                        "name": "flag:doorB14",
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
    "underGround": true,
    "bgmap": [],
    "fgmap": []
}