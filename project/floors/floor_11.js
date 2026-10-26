main.floors.floor_11=
{
    "floorId": "floor_11",
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
    [  1,206,  1, 28,  1,123,  0,  0, 81,203,  0, 21,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1,  0,  0, 21,  1],
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
    "events": {
        "5,2": [
            {
                "type": "if",
                "condition": "flag:npc11_times==0",
                "true": [
                    "\t[杰克,thief]这里是第二区域，有很多丧尸和魔法师",
                    "\t[杰克,thief]这里是吸血鬼伯爵的地盘。丧尸是他的家畜，术士是他的祭司。",
                    "\t[杰克,thief]小心那些大蝙蝠，一回合咬你两口，防御再高也要掉两次血。",
                    "\t[杰克,thief]我听说银剑在14层。如你所见，银盾在11层。你会需要这两件装备的。",
                    "\t[杰克,thief]我要去在这里收拾一下我的工具箱，如果你需要钥匙的话，可以找我。",
                    {
                        "type": "addValue",
                        "name": "flag:npc11_times",
                        "value": "1"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flag:npc11_times<2",
                        "true": [
                            {
                                "type": "choices",
                                "text": "\t[杰克,thief]你需要什么钥匙？",
                                "choices": [
                                    {
                                        "text": "黄钥匙",
                                        "action": [
                                            {
                                                "type": "addValue",
                                                "name": "item:yellowKey",
                                                "value": "1"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "flag:npc11_times",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "蓝钥匙",
                                        "action": [
                                            {
                                                "type": "addValue",
                                                "name": "item:blueKey",
                                                "value": "1"
                                            },
                                            {
                                                "type": "addValue",
                                                "name": "flag:npc11_times",
                                                "value": "1"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "离开",
                                        "action": [
                                            {
                                                "type": "exit"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "revisit"
                            }
                        ],
                        "false": [
                            "\t[杰克,thief]我弄好了。我先去周围转转，看看有什么宝物，回见！",
                            {
                                "type": "move",
                                "loc": [
                                    5,
                                    2
                                ],
                                "time": 500,
                                "steps": [
                                    "up",
                                    "right"
                                ]
                            },
                            {
                                "type": "show",
                                "loc": [
                                    [
                                        9,
                                        6
                                    ]
                                ],
                                "floorId": "floor_2",
                                "time": 500
                            },
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ]
                                ],
                                "floorId": "floor_19",
                                "time": 500
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "floor_10",
            "loc": [
                6,
                1
            ]
        },
        "1,11": {
            "floorId": "floor_12",
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