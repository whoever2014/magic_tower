main.floors.mota_1=
{
    "floorId": "mota_1",
    "title": "魔塔  1F",
    "name": "1",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0, 90,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  0,  0,  0,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  3,  0,  3,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  0,211,  0,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  3,  0,  3,  3,  0,  0,  0,  3],
    [  3,  3,  0,  3,  3,  0,  0,  0,  3,  3,  0,  3,  3],
    [  3,  0,  0,  3,  0,  0,  0,  0,  0,  3,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": null,
    "events": {
        "9,2": null,
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": "mota_2",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,6": [
            "\t[骷髅队长,skeletonCaptain]你还会遇到更多强大的对手。",
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
                "type": "hide",
                "loc": [
                    [
                        1,
                        3
                    ]
                ],
                "floorId": "floor_9",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        1
                    ]
                ],
                "floorId": "floor_9",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        2
                    ]
                ],
                "floorId": "floor_9",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        4
                    ]
                ],
                "floorId": "floor_9",
                "time": 0
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "flag:atk20F"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "flag:def20F"
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "ground",
                "loc": [
                    [
                        1,
                        1
                    ]
                ],
                "floorId": "floor_9"
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