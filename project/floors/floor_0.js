main.floors.floor_0=
{
    "floorId": "floor_0",
    "title": "主塔  入口",
    "name": "0",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  1,  0, 87,  0,  1,  0,  0,121,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,201,  1,  1,  1,  0,  1,  1],
    [  1,  0,123,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  1,  1,  1,  0,  0,  0,  1,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,  1,  1,  0,  1,  0,  1,  0,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [
        {
            "type": "setText",
            "position": "down",
            "offset": 5
        },
        {
            "type": "setValue",
            "name": "flag:customStatusBarHidden",
            "value": "false"
        },
        {
            "type": "showHero"
        }
    ],
    "events": {
        "6,10": [
            "\t[勇士,hero]队长……当年救出公主的英雄。他打倒了魔王，却再也没有回来。\n听说，他被封印在了这座魔塔里。\n这把剑和盾，是他留给我的。……就是这里了，进去吧！",
            {
                "type": "hide",
                "time": 0
            }
        ],
        "9,3": null,
        "6,5": null,
        "7,6": null,
        "11,1": [
            "\t[老人,man]唉……又一个年轻的冒险者。\n这些年来，我见过太多人踏入这座塔，却再也没能走出来。",
            "\t[老人,man]……这里，就是封印当年那位勇士的地方。\n你这把剑……我见过。孩子，我希望你能平安回来。",
            "\t[老人,man]当年他进塔前，也站在这里跟我说过话。\n他说：“等我回来，请你喝一杯。”……这一等，就是好多年。",
            "\t[老人,man]去吧，年轻人。愿你不要成为下一个让我叹息的亡魂。",
            {
                "type": "hide",
                "time": 500
            }
        ],
        "2,4": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": [
                "\t[杰克,thief]完工！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            3
                        ]
                    ],
                    "time": 0
                },
                "\t[杰克,thief]我先走了！",
                {
                    "type": "move",
                    "loc": [
                        2,
                        4
                    ],
                    "time": 500,
                    "steps": [
                        "up",
                        "up",
                        "up",
                        "left"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": "floor_1",
            "stair": "downFloor"
        },
        "1,1": {
            "floorId": "base_1",
            "loc": [
                1,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {
        "3,5": null
    },
    "afterOpenDoor": {
        "7,6": null
    },
    "cannotMove": {},
    "downFloor": null,
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

],
    "bgm": null
}