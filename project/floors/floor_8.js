main.floors.floor_8=
{
    "floorId": "floor_8",
    "title": "主塔  8F",
    "name": "8",
    "canFlyTo": true,
    "canUseQuickShop": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21,  0,  1,  0, 21, 81,  0,  0,  1, 21, 27,  1],
    [  1,  0,  0, 81,205,  0,  1,202,253, 82, 28, 22,  1],
    [  1,  0,  0,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1],
    [  1,  1,209,  1,202,201,  0,  0,  1, 21, 22, 31,  1],
    [  1,  0,  0,  1,201,  1,  1,  1,  1,  1, 81,  1,  1],
    [  1, 88,  0,  1,  0,  1, 21, 21, 21,  1,210,  0,  1],
    [  1,  0,  0, 81,  0,  1,  0,201,  0,  1,  0,209,  1],
    [  1,  1,  0,  1,  1,  1,  1,329,  1,  1,  1, 81,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,121,  0,  1],
    [  1, 21, 27, 31,210, 81,  0,  0,209,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "firstArrive": [],
    "events": {
        "10,10": [
            "\t[神秘老人,man]真了不起，你竟然能来到这层。",
            "\t[神秘老人,man]你是来找你的队长的吧？别急，他就在这座塔的深处，一直在等你。",
            "\t[神秘老人,man]这个送给你，往上走会快一些。",
            {
                "type": "setValue",
                "name": "flag:metFakeOldMan",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:fly",
                "value": "item:fly+1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        10
                    ]
                ],
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,6": {
            "floorId": "floor_7",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": "floor_9",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
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