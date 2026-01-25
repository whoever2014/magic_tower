main.floors.base9=
{
    "floorId": "base9",
    "title": "地下  9F",
    "name": "-9",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,  0,  1, 21, 32, 21, 31,  1, 27, 28,  1],
    [  1,  0,  1,  0,  1,  1,  1, 22,  1,  1,  1, 27,  1],
    [  1,  0,  0,  0,  0,  0,  1, 31,  1, 23,  1,  1,  1],
    [  1,  1,  1,  0,  1,  0,  1,  1,  1,  1,  1, 31,  1],
    [  1, 32,  1,  0,  0,  0,  0,  0,  1, 31, 21, 31,  1],
    [  1, 21,  1,  1,  1,  0,121,  0,  1,  1,  1, 27,  1],
    [  1, 31, 31, 21,  1,  0,  0,  0,  0,  0,  1, 21,  1],
    [  1, 31,  1,  1,  1,  1,  1,  0,  1,  0,  1,  1,  1],
    [  1,  1,  1, 65,  1, 21,  1,  0,  0,  0,  0,  0,  1],
    [  1, 27,  1,  1,  1, 32,  1,  1,  1,  0,  1,  0,  1],
    [  1, 28, 28,  1, 28, 21, 31, 22,  1,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,6": [
            "\t[老人,man]水之宝石可以让你在水中自由移动。\n想要取得水之宝石，需要获得宝石镐。"
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": "base8",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": "base10",
            "loc": [
                11,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "3,9": [
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        11
                    ]
                ],
                "floorId": "base16_1",
                "time": 500
            }
        ]
    },
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