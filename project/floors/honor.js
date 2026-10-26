main.floors.honor=
{
    "floorId": "honor",
    "title": "荣誉之地",
    "name": "荣誉",
    "canFlyTo": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "defaultGround": "ground",
    "images": [],
    "item_ratio": 1,
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,431,  4,433,  4,482,  4,483,  4,484,  4,485,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,432,  4,  0,  4,472,  4,473,  4,  0,  4,438,  4],
    [  4,  4,460,  0,474,  4,470,  4,461,  0,462,  4,  4],
    [  4,463,  4,  0,  4,  0,  0,  0,  4,  0,  4,465,  4],
    [  4,351,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0,  4],
    [  4,464,  4,  0,  4,468,  4,467,  4,  0,  4,466,  4],
    [  4,  4,  4,  0,  0,  4,469,  4,  0,  0,  4,  4,  4],
    [  4,  4,435,  4,  0,  0,  0,  0,  0,  4,487,  4,  4],
    [  4,  0,  0,  0,  0,  4,  0,  4,  0,  0,  0,  0,  4],
    [  4,436,  4,434,  4,430,  0,475,  4,476,  4,477,  4],
    [  4,  4,  4,  4,  4,  4, 93,  4,  4,  4,  4,  4,  4]
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
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.plugin.achRefreshHonor();\n}"
        },
        "\t[荣誉之地,blueShop]这里是荣誉之地。\n每一块石牌记录着一项成就，点亮的已经达成。\n走到石牌前可以查看详情，下方的出口可以查看成就点数并离开。"
    ],
    "events": {
        "2,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(12);\n}"
            }
        ],
        "6,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(22);\n}"
            }
        ],
        "10,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(14);\n}"
            }
        ],
        "1,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(15);\n}"
            }
        ],
        "11,5": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(17);\n}"
            }
        ],
        "1,7": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(16);\n}"
            }
        ],
        "5,7": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(20);\n}"
            }
        ],
        "7,7": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(19);\n}"
            }
        ],
        "11,7": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(18);\n}"
            }
        ],
        "6,8": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(21);\n}"
            }
        ],
        "2,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(5);\n}"
            }
        ],
        "10,9": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(23);\n}"
            }
        ],
        "1,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(6);\n}"
            }
        ],
        "3,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(4);\n}"
            }
        ],
        "5,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(0);\n}"
            }
        ],
        "7,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(27);\n}"
            }
        ],
        "9,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(28);\n}"
            }
        ],
        "11,11": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(29);\n}"
            }
        ],
        "6,12": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achStatue();\n}"
            }
        ],
        "1,1": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(1);\n}"
            }
        ],
        "5,1": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(9);\n}"
            }
        ],
        "11,1": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(10);\n}"
            }
        ],
        "9,1": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(11);\n}"
            }
        ],
        "1,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(2);\n}"
            }
        ],
        "5,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(24);\n}"
            }
        ],
        "7,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(25);\n}"
            }
        ],
        "11,3": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(8);\n}"
            }
        ],
        "8,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(13);\n}"
            }
        ],
        "4,4": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(26);\n}"
            }
        ],
        "3,1": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(3);\n}"
            }
        ],
        "7,1": [
            {
                "type": "function",
                "function": "function(){\ncore.plugin.achInfo(7);\n}"
            }
        ]
    },
    "changeFloor": {},
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