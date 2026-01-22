main.floors.main1=
{
    "floorId": "main1",
    "title": "主塔  1F",
    "name": "1",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,201,123,201,  1,  0, 88,  0,  1, 21,  1, 87,  1],
    [  1,  0,202,  0, 81, 22,  0, 21,  1, 31,  1, 85,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1, 28,  1, 21,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1, 27,  1, 21,  1],
    [  1, 31,210, 21,  1,  0,  1,  1,  1, 81,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0, 81,205,253,205,  1,  0,  1],
    [  1,  0,  0, 21,  1,  0,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,209,  0,  1,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1,  1, 81,  1,  1,  0,  1,  0,  1,  1, 81,  1,  1],
    [  1,  0,  0,209, 81,  0,  1,  0,  1,  0,205,  0,  1],
    [  1,122, 31,  0,  1,  0,  0,  0,  1,202, 32,202,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "1,11": [
            "\t[商人,woman]你需要金币嘛？如果你有抵押物的话我可以借给你...",
            {
                "type": "if",
                "condition": "item:moneyPocket>=1",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]这个金块可以抵押1000金币！",
                        "choices": [
                            {
                                "text": "抵押",
                                "action": [
                                    {
                                        "type": "addValue",
                                        "name": "status:money",
                                        "value": "1000"
                                    },
                                    {
                                        "type": "addValue",
                                        "name": "item:moneyPocket",
                                        "value": "-1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "shop.mp3"
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
                    }
                ],
                "false": []
            }
        ],
        "2,1": [
            {
                "type": "if",
                "condition": "flag:doorF1==3",
                "true": [
                    "\t[小偷,thief]感谢你救了我。现在我帮你打开第一层的门。",
                    {
                        "type": "openDoor",
                        "loc": [
                            11,
                            2
                        ]
                    },
                    "\t[小偷,thief]我听说铁剑在4层。铁盾在9层。你会需要这两件装备的。",
                    "\t[小偷,thief]我这里有两把钥匙，你拿着。",
                    {
                        "type": "addValue",
                        "name": "item:yellowKey",
                        "value": "2"
                    },
                    "\t[小偷,thief]后会有期。",
                    {
                        "type": "hide",
                        "time": 500
                    }
                ],
                "false": [
                    "\t[小偷,thief]快救我！"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "main0",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": "main2",
            "stair": "downFloor"
        }
    },
    "afterBattle": {
        "2,2": [
            {
                "type": "addValue",
                "name": "flag:doorF1",
                "value": "1"
            }
        ],
        "3,1": [
            {
                "type": "addValue",
                "name": "flag:doorF1",
                "value": "1"
            }
        ],
        "1,1": [
            {
                "type": "addValue",
                "name": "flag:doorF1",
                "value": "1"
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