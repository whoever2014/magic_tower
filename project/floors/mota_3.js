main.floors.mota_3=
{
    "floorId": "mota_3",
    "title": "魔塔  3F",
    "name": "0",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0, 90,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  0,  0,  0,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,254,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  3,  0,  0,  0,  3,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "firstArrive": [],
    "events": {
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
            "floorId": "mota_4",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {
        "6,6": [
            "\t[奴隶主,redSwordsman]不！！！",
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
                "type": "setEnemy",
                "id": "badHero",
                "name": "hp",
                "value": "core.status.hero.hp"
            },
            {
                "type": "setEnemy",
                "id": "badHero",
                "name": "atk",
                "value": "flag:atk9F"
            },
            {
                "type": "setEnemy",
                "id": "badHero",
                "name": "def",
                "value": "flag:def9F"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "flag:atk9F"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "value": "flag:def9F"
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