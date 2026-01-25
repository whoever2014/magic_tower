main.floors.base16_7=
{
    "floorId": "base16_7",
    "title": "地下  16F",
    "name": "-23",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 8,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1,  1,  1],
    [  1, 32, 21,  1,  0, 23,  0,  1,231,  0,  0,  0,  1],
    [  1,  0, 21,  1,  0,  0,  0,  1,  1,  1,  1,  0,  1],
    [  1, 81,  1,  1,  1, 85,  1,  1,  0,246, 81,  0,  1],
    [  1,231,  0,  1,230,  0,230,  1, 81,  1,  1,  0,  1],
    [  1,  0,  0,  1,  0,  0,  0,  1,231, 31,  1,207,  1],
    [  1,  1, 81,  1,  1, 85,  1,  1, 21, 28,  1,  0,  1],
    [  1,  0, 21,  1,246,  0,246,  1,  1,  1,  1,204,  1],
    [  1,207,  0,  1,  0,  0,  0,  0,204,  0,  0,  0,  1],
    [  1, 81,  1,  1,  0,  1,  0,  0,  1,  1,  1,  1,  1],
    [  1,  0,  0,  1,  0,  1,  1,  1,  1, 27, 21,122,  1],
    [  1,  0,207, 81,  0, 81,204,  0, 81,207,  0, 32,  1],
    [  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {},
    "changeFloor": {
        "4,12": {
            "floorId": "base16_6",
            "loc": [
                4,
                0
            ],
            "time": 500
        },
        "9,0": {
            "floorId": "base16_8",
            "loc": [
                9,
                12
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "4,4": [
            {
                "type": "if",
                "condition": "flag:doorB16_7_yellowKing==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_7_yellowKing",
                        "value": "1"
                    }
                ]
            }
        ],
        "6,4": [
            {
                "type": "if",
                "condition": "flag:doorB16_7_yellowKing==1",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setValue",
                        "name": "flag:doorB16_7_yellowKing",
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
    "bgmap": [

],
    "fgmap": [

]
}