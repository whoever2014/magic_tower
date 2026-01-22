main.floors.mainplus0=
{
    "floorId": "mainplus0",
    "title": "主塔 0 层",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "images": [],
    "item_ratio": 3,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 500
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "Math.ceil(core.status.hero.hp/28);"
            },
            {
                "type": "addValue",
                "name": "status:atk",
                "value": "-576"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "Math.ceil(core.status.hero.atk/28);"
            },
            {
                "type": "addValue",
                "name": "status:def",
                "value": "-496"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "Math.ceil(core.status.hero.def/28);"
            },
            {
                "type": "addValue",
                "name": "flag:antimage",
                "value": "-1"
            },
            {
                "type": "addValue",
                "name": "flag:antimage2",
                "value": "-1"
            },
            {
                "type": "addValue",
                "name": "flag:antimage3",
                "value": "-1"
            },
            {
                "type": "addValue",
                "name": "flag:antimage4",
                "value": "-1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('proof_lv',1)\n}"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 500
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "6,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": false,
            "data": []
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": "mainplus1",
            "loc": [
                6,
                1
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2],
    [  2, 88,  0,  0,  2,  0, 87,  0,  2,  0,  0,122,  2],
    [  2,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,  2],
    [  2,  2,  2,  2,  2,  2,201,  2,  2,  2, 86,  2,  2],
    [  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2],
    [  2,  0,  2,  2,  2,  0,  0,  0,  2,  2,  2,  0,  2],
    [  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2],
    [  2,  2,  2,  2,  2,  2,  0,  2,  2,  2,  2,  2,  2],
    [  2,  0,  0,  0,  0,  2, 86,  2,  0,  0,  0,  0,  2],
    [  2,  0,  2,  0,  0,  2,245,  2,  0,  0,  2,  0,  2],
    [  2,  0,  2,  2,  0,  2,  0,  2,  0,  2,  2,  0,  2],
    [  2,  0,  0,  0,  0,  2,  0,  2,  0,  0,  0,  0,  2],
    [  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2]
],
    "bgmap": [

],
    "fgmap": [

]
}