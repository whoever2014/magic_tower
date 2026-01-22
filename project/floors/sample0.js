main.floors.sample0=
{
    "floorId": "sample0",
    "title": "",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "showImage",
            "code": 8,
            "image": "plotStart.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 0,
            "time": 1
        },
        {
            "type": "moveImage",
            "code": 8,
            "to": [
                0,
                0
            ],
            "opacity": 1,
            "time": 1000
        },
        {
            "type": "wait",
            "data": [
                {
                    "case": "keyboard",
                    "keycode": 13,
                    "action": []
                },
                {
                    "case": "keyboard",
                    "keycode": 32,
                    "action": []
                },
                {
                    "case": "keyboard",
                    "keycode": 67,
                    "action": []
                },
                {
                    "case": "mouse",
                    "px": [
                        0,
                        416
                    ],
                    "py": [
                        0,
                        416
                    ],
                    "action": []
                }
            ]
        },
        {
            "type": "hideImage",
            "code": 8,
            "time": 1000
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  3,  3,  3,  3,  3, 17, 17, 17,  3,  3,  3,  3,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,340,340,340,340,340,340,340,340,340,340,340,  3],
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3]
],
    "bgmap": [

],
    "fgmap": [

]
}