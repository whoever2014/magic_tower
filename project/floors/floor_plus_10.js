main.floors.floor_plus_10=
{
    "floorId": "floor_plus_10",
    "title": "主塔  10F",
    "name": "10",
    "canFlyTo": true,
    "canUseQuickShop": false,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  1,  0,  1,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,210,211,210,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,210,210,210,  1,  1,  1,  1,  1],
    [  1,209, 27,209,  1,210,  0,210,  1,209, 28,209,  1],
    [  1,  0,209,  0,  1,  1, 83,  1,  1,  0,209,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1, 88,  0, 81,253,  0,  0,  0,253, 81,  0, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        },
        "6,7": [
            "\t[骷髅队长,skeletonCaptain]哈哈哈！小子，你的好日子到头了！\n早就听说有个愣头青在塔里横冲直撞——老子的骷髅军团等你很久了！\n弟兄们，给我上！",
            "\t[骷髅队长,skeletonCaptain]哼，前一个闯到这里的家伙运气好。\n……怪了，老子怎么总觉得，这话说过不止一回？",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 500,
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "up",
                    "up",
                    "up"
                ]
            },
            {
                "type": "hide",
                "time": 500
            }
        ],
        "5,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,5": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "5,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "7,6": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": "floor_plus_9",
            "loc": [
                1,
                11
            ]
        },
        "6,1": {
            "floorId": "floor_plus_11",
            "loc": [
                6,
                1
            ]
        }
    },
    "afterBattle": {
        "6,2": [
            "\t[骷髅队长,skeletonCaptain]咳咳……输了就是输了，老子认。\n小子，身手不赖。上面那位伯爵可没老子这么讲道理，当心点。",
            "\t[骷髅队长,skeletonCaptain]当年那个家伙……一个人就把我们打穿了。\n一回，两回……老子记不清了。你和他……还真像啊。",
            {
                "type": "addValue",
                "name": "flag:beat10F",
                "value": "1"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        1
                    ]
                ],
                "time": 500
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        8,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        9,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        10,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        11,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        1,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        4,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        1,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        2,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        3,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        4,
                        1
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        8,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        11,
                        2
                    ]
                ]
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
        1,
        11
    ],
    "upFloor": [
        6,
        1
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}