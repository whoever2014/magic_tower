main.floors.floor_1=
{
    "floorId": "floor_1",
    "title": "主塔  1F",
    "name": "1",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,201,123,201,  1,  0, 88,  0, 81,205,  1, 87,  1],
    [  1,  0,202,  0,  0,  0,  0,  0,  1,253,  1,  0,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1,205,  1,  0,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1, 81,  1,  0,  1],
    [  1, 31,210, 21,  1,  0,  1,  1,  1, 28,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  1, 21, 27, 31,  1,  0,  1],
    [  1,  0,  0, 21,  1,  0,  1,  1,  1,  1,  1,  0,  1],
    [  1,  0,209,  0,  1,  0,  1,202, 32,202,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  1,  0,205,  0,  1,  0,  1],
    [  1,  0,  0,209, 81,  0,  1,  1, 81,  1,  1,  0,  1],
    [  1,122, 31,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "1,11": [
            "\t[商人,woman]哟，又一个想往上爬的勇士。\n这座塔里，金币可比性命还金贵。",
            "\t[商人,woman]我这儿可不做白送的买卖……\n不过你要是有值钱的抵押物，我倒是可以借你一笔。",
            {
                "type": "if",
                "condition": "item:moneyPocket>=1",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[商人,woman]嗯？让我瞧瞧……成色十足的金块！\n押给我，换你1000金币，童叟无欺。",
                        "choices": [
                            {
                                "text": "抵押（金块 → 1000金币）",
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
                                    },
                                    "\t[商人,woman]成交！拿好你的金币。\n楼上商店的东西可不便宜，花在刀刃上。",
                                    {
                                        "type": "if",
                                        "condition": "item:moneyPocket>=1",
                                        "true": [
                                            "\t[商人,woman]你身上还有金块？想再押的话，随时来找我。"
                                        ],
                                        "false": []
                                    }
                                ]
                            },
                            {
                                "text": "离开",
                                "action": [
                                    "\t[商人,woman]舍不得？也好，想通了随时回来。\n反正我哪儿也去不了。",
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[商人,woman]空着手可不行。\n听说这座塔里藏着金块，找到了就带来给我看看。"
                ]
            }
        ],
        "2,1": [
            {
                "type": "if",
                "condition": "flag:doorF1==3",
                "true": [
                    "\t[小偷,thief]感谢你救了我！我叫杰克，是个……呃，到处找宝贝的冒险家。",
                    "\t[杰克,thief]对了，塔里的卫兵正满世界抓我。\n要是看到不显示伤害的“怪物”，说不定就是我扮的，可别动手啊。",
                    "\t[杰克,thief]现在我帮你打开第一层的门。",
                    "\t[杰克,thief]我听说铁剑在4层。铁盾在9层。你会需要这两件装备的。",
                    "\t[杰克,thief]我这里有一把钥匙，你拿着。",
                    {
                        "type": "addValue",
                        "name": "item:yellowKey",
                        "value": "1"
                    },
                    "\t[杰克,thief]后会有期。",
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
            "floorId": "floor_0",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": "floor_2",
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