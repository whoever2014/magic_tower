main.floors.base22=
{
    "floorId": "base22",
    "title": "地下  22F",
    "name": "-22",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3, 17, 17, 17,  3,  3,  3,  3,  3],
    [  3, 23,  1, 27,235,254,  0,234,235, 28,  1, 84,  3],
    [  3,236,  1,  1,254,  1,  0,  1,234,  1,  1, 84,  3],
    [  3, 28,  1,  0,  0,  1,  0,  0,  0,121,  1, 84,  3],
    [  3, 81,  1,  1,  0,  1,  0,  1,  0,  1,  1, 84,  3],
    [  3,  0,234,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  1,256,  1,256,  1,  0,  1,  1,  1,  0,  1,  3],
    [  3,  0,234,  0,  0,  0, 87,  0,  0,  0,236,  0,  3],
    [  3, 81,  1,  1,  1,  1,  0,  1,  0,  1,  1, 81,  3],
    [  3, 27,  1, 31,256,  0,  0,  0,234, 22,  1,236,  3],
    [  3,228,  1,  1,  0,  1,  0,  1,235,  1,  1, 28,  3],
    [  3, 27,  1, 31,256,  0,  0,  0,234, 21,  1, 88,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": null,
    "events": {
        "9,3": [
            "\t[老人,man]这层的四道障碍需要用四把宝石锄头打开。"
        ],
        "11,1": [
            {
                "type": "if",
                "condition": "(core.hasItem('magicKey') && 'flower'==core.getBlockId(11,1))",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:doNotPlaySoundWhileChangingFloor",
                        "value": "true"
                    },
                    {
                        "type": "playSound",
                        "name": "teleport.mp3"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MOTA9",
                        "loc": [
                            6,
                            11
                        ],
                        "time": 500
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,7": {
            "floorId": "base21",
            "stair": "downFloor"
        },
        "11,11": {
            "floorId": "base23",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "11,1": [
            {
                "type": "setBlock",
                "number": 168,
                "loc": [
                    11,
                    1
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        11,
                        1
                    ]
                ],
                "time": 500
            }
        ]
    },
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