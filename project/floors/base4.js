main.floors.base4=
{
    "floorId": "base4",
    "title": "地下  4F",
    "name": "-4",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 4,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,374, 81, 21, 21,  1, 32,  1],
    [  1,  0, 39,  0,  1,  0,  1,  1,  1,  1,  1,374,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,372,  0,  0,  0,  1],
    [  1,  1, 85,  1,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1, 27,  0,  0,  1, 31,  0, 21,  1,  0,373,  0,  1],
    [  1,  0,  0,372, 81,  0,  1,  0,  1, 21, 21, 21,  1],
    [  1, 28,  0,  0,  1,  0,372,  0,  1,  1,  1,  1,  1],
    [  1,  1, 85,  1,  1,  1, 81,  1,  1,  0,374,  0,  1],
    [  1,  0,  0,  0,  1,121,  0,  0,  1,372,  1,372,  1],
    [  1,  0, 40,  0,  1,  0,  0,  0, 81,  0, 82,  0,  1],
    [  1,  0,  0,  0,  1,  0, 88,  0,  1,  0,  1, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "5,9": [
            "\t[老人,man]骑士剑及其的锋利，而骑士盾上的尖刺可以辅助进攻。"
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": "base3",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": "base5",
            "loc": [
                6,
                11
            ],
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "downFloor": null,
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "underGround": true,
    "bgmap": [

],
    "fgmap": [

]
}