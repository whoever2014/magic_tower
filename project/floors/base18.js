main.floors.base18=
{
    "floorId": "base18",
    "title": "地下  18F",
    "name": "-18",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3, 17, 17, 17,  3,  3,  3,  3,  3],
    [  3,254, 86,255,  0,  1, 56,  1,  0,255, 86,254,  3],
    [  3,  1,  1,  9,  0,  1, 85,  1,  0, 11,  1,  1,  3],
    [  3, 88,  0,  0, 11,227,248,227,  7,  0,  8, 88,  3],
    [  3,220,  0,  0,  9,121, 10, 11,  0,  0,  0,220,  3],
    [  3,  0,  9,  0, 10, 21,  0, 22,  0,  0,  0,  0,  3],
    [  3,  0,236,  0,  0,  0,223,  7,  0,  8,236,  0,  3],
    [  3,  0,  7,  0,  8, 22,  0, 21,  0,  0,  0,  0,  3],
    [  3,220,  0,  9,122, 10,  0,  0,  9,  0, 10,220,  3],
    [  3, 88,  0,  0,  0,  0, 87,  0, 11,  0,  0, 88,  3],
    [  3,  1,  1, 11,  0,  0,  0,  7,  0,  8,  1,  1,  3],
    [  3,254, 86,227,  0,  0,  0,  0, 11,227, 86,254,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": null,
    "events": {
        "4,8": [
            {
                "type": "if",
                "condition": "flag:npcb17times!=0",
                "true": [
                    "\t[商人,woman]我记的10F的确是有密道的，不过需要很多任意门……",
                    {
                        "type": "setValue",
                        "name": "flag:npcb17times",
                        "value": "+1"
                    },
                    {
                        "type": "setBlock",
                        "number": "330",
                        "loc": [
                            [
                                2,
                                1
                            ],
                            [
                                2,
                                2
                            ],
                            [
                                2,
                                3
                            ],
                            [
                                2,
                                4
                            ],
                            [
                                2,
                                5
                            ],
                            [
                                2,
                                6
                            ]
                        ],
                        "floorId": "main10"
                    }
                ],
                "false": [
                    "\t[商人,woman]看到了吧，这里到处都是神的尸体，如果你实力不够的话我建议四处探索一下。"
                ]
            }
        ],
        "5,4": [
            "\t[老人,man]剑王的攻击很快，一回合可以攻击四次。\n如果你有霸者之证的话对付他们会更容易一些。",
            {
                "type": "if",
                "condition": "flag:doorB18<4",
                "true": [
                    "\t[老人,man]想要获得前方房间中的圣水，就必须消灭本层四个角落上的剑王。"
                ]
            }
        ],
        "6,2": [
            {
                "type": "if",
                "condition": "flag:doorB18==4",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            2
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "6,9": {
            "floorId": "base17",
            "stair": "downFloor"
        },
        "1,9": {
            "floorId": "base19",
            "loc": [
                1,
                9
            ]
        },
        "1,3": {
            "floorId": "base19",
            "loc": [
                1,
                3
            ]
        },
        "11,3": {
            "floorId": "base19",
            "loc": [
                11,
                3
            ]
        },
        "11,9": {
            "floorId": "base19",
            "loc": [
                11,
                9
            ]
        },
        "5,3": null,
        "7,3": null
    },
    "afterBattle": {
        "7,3": null,
        "5,3": null,
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:doorB18",
                "value": "flag:doorB18+1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:doorB18",
                "value": "flag:doorB18+1"
            }
        ],
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:doorB18",
                "value": "flag:doorB18+1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:doorB18",
                "value": "flag:doorB18+1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": [
        11,
        9
    ],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}