main.floors.main5=
{
    "floorId": "main5",
    "title": "主塔  5F",
    "name": "5",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  0,202, 31, 31,  1, 27,  0, 28,  1],
    [  1,  0,  1, 81,  1,  1,  1,  1,  1, 31,  0, 31,  1],
    [  1,  0,  1, 81,  1, 21, 81,209,  1,  1, 85,  1,  1],
    [  1,210,  1,  0,  1,  0,  1, 22,  1,366,  0,366,  1],
    [  1,209,  1,202,  1,253,  1,  1,  1,  0,  0, 21,  1],
    [  1,  0, 81,  0,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1,  0,  1,  1,  1,  0,121,  0, 81,205,  0,  0,  1],
    [  1,  0,202,253,  0,  0,  0,  0,  1,  0,205,  0,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1, 81,  1,  1],
    [  1,202, 21,  1,  1,  0,  0, 21,  1,  0,209,  0,  1],
    [  1, 21, 21, 81, 81,  0, 88,  0,  1, 21, 21, 28,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,7": [
            "\t[老人,man]你注意到史莱姆守着的墙了吗？快回3楼看看吧！"
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "main6",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "main4",
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