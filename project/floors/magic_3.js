main.floors.magic_3=
{
    "floorId": "magic_3",
    "title": "幻境",
    "name": "3",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,9": [
            {
                "type": "addValue",
                "name": "flag:ambush3",
                "value": "1"
            },
            {
                "type": "setBlock",
                "number": "m51_redKing",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 500
            },
            "\t[魔王Zeno,redKing]欢迎来到魔塔，你是第一百位挑战者。\n你若能打败我所有的手下，我就与你一对一地决斗。现在，你必须接受我的安排。",
            {
                "type": "setBlock",
                "number": "m51_whiteKing",
                "loc": [
                    [
                        5,
                        8
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        6,
                        9
                    ],
                    [
                        5,
                        10
                    ]
                ],
                "time": 500
            },
            {
                "type": "if",
                "condition": "flag:ambush3>=2",
                "true": [
                    "\t[勇士,hero]……又是这句话。又是这个位置。",
                    {
                        "type": "if",
                        "condition": "flag:ambush3>=3",
                        "true": [
                            "\t[勇士,hero]队长……你是不是也这样，一遍，又一遍？\n每一次都以为是第一次？"
                        ],
                        "false": []
                    }
                ],
                "false": [
                    "\t[勇士,hero]什么？"
                ]
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 1000,
                "keep": true,
                "async": true
            },
            {
                "type": "playSound",
                "name": "magicN.mp3"
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "playSound",
                "name": "magicN.mp3"
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "playSound",
                "name": "darkN.mp3"
            },
            {
                "type": "sleep",
                "time": 300
            },
            {
                "type": "playSound",
                "name": "darkN.mp3"
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "400"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "flag:curWeapon",
                "value": "null"
            },
            {
                "type": "setValue",
                "name": "flag:curArmor",
                "value": "null"
            },
            {
                "type": "setValue",
                "name": "flag:battleAnimate",
                "value": "'hand'"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ],
                    [
                        5,
                        8
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        6,
                        9
                    ],
                    [
                        5,
                        10
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "changeFloor",
                "floorId": "magic_2",
                "loc": [
                    3,
                    8
                ],
                "direction": "down",
                "time": 0
            },
            {
                "type": "sleep",
                "time": 500
            },
            "……",
            "……喂！",
            "……喂！醒醒！",
            {
                "type": "setCurtain",
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": "magic_2",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21, 28,  1, 21, 32, 21,  1,  0,  1,  0, 31,  1],
    [  1,  0, 31,  1, 32, 21, 32,  1,  0, 81,602,  0,  1],
    [  1,606,  0,  1, 21, 22, 21,  1,  0,  1,  1,  1,  1],
    [  1, 81,  1,  1,  1,  0,  1,  1,  0,  1,  0,121,  1],
    [  1,  0,  0,602,  0,  0,  0,600,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
    [  1,603,  0,  1,  1,358,  1,  1,  0,  1,  0, 31,  1],
    [  1,  0, 21,  1,  0,  0,  0,  1,  0, 81,606, 21,  1],
    [  1, 31, 27,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,  1,  1,601,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  1,  0, 81,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [],
    "fgmap": []
}