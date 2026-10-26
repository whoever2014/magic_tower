main.floors.floor_plus_9=
{
    "floorId": "floor_plus_9",
    "title": "主塔  9F",
    "name": "9",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1, 31, 21,  1,  0,221,  1, 21,  0, 31,  1],
    [  1,  1,  1,  0,253, 81,  0,  0, 85,  0, 23,  0,  1],
    [  1, 32,  1,  0,  0,  1,  0,221,  1, 21,  0, 32,  1],
    [  1, 81,  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,209,  0,  0, 28, 21,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1,  0,  1, 27,209,  1,201, 81,  0,  0,205,  0,  1],
    [  1, 82,  1,  0,  0,  1,  0,  1,  1, 82,  1,  1,  1],
    [  1,  0, 81,210, 21,  1,  0, 81,  0,  0,  1,  0,  1],
    [  1,  0,  1,  1, 81,  1,  1,  1,  1,  0,  0,  0,  1],
    [  1, 87,  1, 31,  0,210, 36,329,201,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "6,1": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,3": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": "floor_plus_10",
            "loc": [
                1,
                11
            ],
            "time": 500
        },
        "11,11": {
            "floorId": "floor_plus_8",
            "loc": [
                11,
                11
            ]
        }
    },
    "afterBattle": {
        "7,3": [
            {
                "type": "addValue",
                "name": "flag:doorF9",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorF9==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            2
                        ]
                    }
                ]
            }
        ],
        "7,1": [
            {
                "type": "addValue",
                "name": "flag:doorF9",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flag:doorF9==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            2
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "upFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "bgmap": [

],
    "fgmap": [

]
}