// 二周目和一周目的差异：只记二周目不一样的地方（格子、事件、楼层属性）。
// 由脚本从原来的 *_plus_* 楼层生成；在编辑器里切到“二周目”保存时也会写回这里。
main.rounds = main.rounds || {};
main.rounds[2] = {
 "base_1": {
  "map": {
   "1,10": 0
  },
  "events": {
   "1,10": null
  }
 },
 "base_10": {
  "map": {
   "1,1": 356
  },
  "events": {
   "10,11": [
    {
     "type": "hide",
     "loc": [
      [
       10,
       11
      ]
     ],
     "time": 0
    },
    {
     "type": "hide",
     "loc": [
      [
       11,
       10
      ]
     ],
     "time": 0
    }
   ],
   "11,10": [
    {
     "type": "hide",
     "loc": [
      [
       10,
       11
      ]
     ],
     "time": 0
    },
    {
     "type": "hide",
     "loc": [
      [
       11,
       10
      ]
     ],
     "time": 0
    }
   ]
  },
  "props": {
   "upFloor": [
    11,
    1
   ],
   "downFloor": [
    11,
    1
   ]
  }
 },
 "base_11": {
  "map": {
   "10,5": 0,
   "10,7": 0,
   "11,11": 0
  },
  "events": {
   "10,5": null,
   "10,11": null
  },
  "changeFloor": {
   "6,1": {
    "floorId": "floor_0",
    "loc": [
     6,
     11
    ],
    "time": 500
   }
  }
 },
 "base_13": {
  "map": {
   "5,2": 0
  },
  "events": {
   "5,2": null,
   "10,1": null
  }
 },
 "base_15": {
  "map": {
   "11,1": 0
  },
  "events": {
   "11,1": null
  }
 },
 "base_3": {
  "map": {
   "1,1": 0
  },
  "events": {
   "1,1": null
  },
  "afterBattle": {
   "5,7": null,
   "5,5": null,
   "5,6": null,
   "6,5": null,
   "7,5": null,
   "7,6": null,
   "7,7": null,
   "6,7": null,
   "6,6": null
  }
 },
 "base_4": {
  "map": {
   "5,9": 0
  },
  "events": {
   "5,9": null
  }
 },
 "base_5": {
  "map": {
   "7,1": 0,
   "2,10": 0,
   "10,10": 0,
   "10,11": 0,
   "10,12": 93
  },
  "events": {
   "5,6": null,
   "7,6": null,
   "2,10": null,
   "9,10": null,
   "10,11": null,
   "7,1": null,
   "6,3": null,
   "10,12": null
  },
  "autoEvent": {
   "2,10": null
  },
  "changeFloor": {
   "10,12": {
    "floorId": "base_11",
    "loc": [
     10,
     12
    ],
    "direction": "up",
    "time": 500
   }
  }
 },
 "base_6": {
  "map": {
   "8,11": 82
  },
  "events": {
   "6,2": [
    "\t[骑士队长,yellowKnight]你放走了我的奴隶。\n按骑士的规矩，我该给你一个公平的了断。",
    {
     "type": "playSound",
     "name": "swordC.mp3"
    },
    "\t[骑士队长,yellowKnight]……可惜，我早已不配谈规矩了。骑士团，列阵！",
    {
     "type": "show",
     "loc": [
      [
       4,
       3
      ],
      [
       5,
       4
      ],
      [
       7,
       4
      ],
      [
       8,
       3
      ]
     ],
     "time": 500
    },
    {
     "type": "openDoor",
     "loc": [
      6,
      8
     ]
    },
    {
     "type": "openDoor",
     "loc": [
      4,
      11
     ]
    },
    {
     "type": "openDoor",
     "loc": [
      8,
      11
     ]
    },
    {
     "type": "move",
     "loc": [
      6,
      3
     ],
     "time": 0,
     "keep": true,
     "async": true,
     "steps": [
      "down",
      "down",
      "down",
      "down",
      "down",
      "down"
     ]
    },
    {
     "type": "waitAsync"
    },
    {
     "type": "setEnemy",
     "id": "blueKnight",
     "name": "special",
     "value": "1"
    },
    {
     "type": "setEnemy",
     "id": "redKnight",
     "name": "special",
     "value": "1"
    },
    {
     "type": "closeDoor",
     "id": "specialDoor",
     "loc": [
      6,
      8
     ]
    },
    {
     "type": "closeDoor",
     "id": "specialDoor",
     "loc": [
      4,
      11
     ]
    },
    {
     "type": "closeDoor",
     "id": "specialDoor",
     "loc": [
      8,
      11
     ]
    },
    {
     "type": "hide",
     "time": 0
    },
    {
     "type": "hide",
     "loc": [
      [
       6,
       7
      ]
     ],
     "time": 0
    },
    {
     "type": "show",
     "loc": [
      [
       8,
       4
      ]
     ],
     "floorId": "base_15",
     "time": 500
    }
   ]
  }
 },
 "base_7": {
  "map": {
   "9,3": 370,
   "9,11": 0
  },
  "events": {
   "9,11": null,
   "1,11": null
  }
 },
 "base_8": {
  "map": {
   "5,2": 165
  },
  "events": {
   "2,6": [
    {
     "type": "setBlock",
     "number": "yellowWall",
     "loc": [
      [
       2,
       5
      ]
     ]
    },
    {
     "type": "hide",
     "loc": [
      [
       2,
       6
      ]
     ],
     "time": 0
    },
    {
     "type": "setBlock",
     "number": "swordsmanRed",
     "loc": [
      [
       2,
       7
      ]
     ]
    },
    {
     "type": "hide",
     "loc": [
      [
       2,
       8
      ]
     ],
     "time": 0
    },
    {
     "type": "waitAsync"
    }
   ],
   "5,2": null,
   "2,8": [
    {
     "type": "setBlock",
     "number": "yellowWall",
     "loc": [
      [
       2,
       5
      ]
     ]
    },
    {
     "type": "hide",
     "loc": [
      [
       2,
       6
      ]
     ],
     "time": 0
    },
    {
     "type": "setBlock",
     "number": "swordsmanRed",
     "loc": [
      [
       2,
       7
      ]
     ]
    },
    {
     "type": "hide",
     "loc": [
      [
       2,
       8
      ]
     ],
     "time": 0
    },
    {
     "type": "waitAsync"
    }
   ]
  }
 },
 "base_9": {
  "map": {
   "3,1": 0,
   "9,1": 0,
   "11,1": 0,
   "1,3": 0,
   "11,3": 0,
   "7,4": 64,
   "7,5": 31,
   "1,6": 0,
   "11,6": 0,
   "1,9": 0,
   "11,9": 0,
   "1,11": 0,
   "3,11": 0,
   "9,11": 0
  },
  "events": {
   "1,11": null
  }
 },
 "floor_0": {
  "map": {
   "11,1": 0,
   "2,4": 0
  },
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
     "value": "1000"
    },
    {
     "type": "setValue",
     "name": "status:atk",
     "value": "10"
    },
    {
     "type": "setValue",
     "name": "status:def",
     "value": "10"
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
     "type": "setValue",
     "name": "flag:hasCross",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:cross",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:hammer",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:pickaxe",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:shoes",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:Lvupfly",
     "value": "2"
    },
    {
     "type": "setValue",
     "name": "item:keydoor",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:coin",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "item:fly",
     "value": "1"
    },
    {
     "type": "setValue",
     "name": "flag:braveBadge",
     "value": "1"
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
   "9,3": null,
   "6,5": null,
   "7,6": null,
   "11,1": null,
   "2,4": null
  },
  "afterGetItem": {
   "3,5": null
  },
  "afterOpenDoor": {
   "7,6": null
  },
  "changeFloor": {
   "6,1": {
    "floorId": "floor_1",
    "loc": [
     6,
     1
    ],
    "time": 500
   }
  },
  "props": {
   "title": "主塔 0 层",
   "item_ratio": 3,
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
    },
    {
     "type": "if",
     "condition": "flag:round2==1 && !core.hasFlag('proof')",
     "true": [
      "\t[老人,man]二周目的勇者啊，上一次的旅程为你留下了一枚章。\\n选一枚带上吧，它会伴随你整段路。",
      {
       "type": "choices",
       "text": "\t[选择你的章]勇者：攻击伤害增加25%；贤者：每场战斗第一次受到的伤害减少50%，之后减少25%；霸者：受击时防御按“当前防御 + 攻击的25%”计算（对魔法无效）。",
       "choices": [
        {
         "text": "勇者之章（镶有红宝石）",
         "action": [
          {
           "type": "setValue",
           "name": "item:proof_brave",
           "value": "1"
          },
          {
           "type": "hide",
           "loc": [
            [
             10,
             6
            ]
           ],
           "floorId": "mota_5",
           "remove": true,
           "time": 0
          },
          {
           "type": "function",
           "function": "function(){\ncore.plugin.useProof('proof_brave')\n}"
          },
          {
           "type": "setHeroIcon",
           "name": "hero1.png"
          },
          {
           "type": "playSound",
           "name": "item.mp3"
          },
          {
           "type": "tip",
           "text": "章的能力已激活，已晋升为勇者",
           "icon": "proof_brave"
          }
         ]
        },
        {
         "text": "贤者之章（镶有钻石）",
         "action": [
          {
           "type": "setValue",
           "name": "item:proof_sage",
           "value": "1"
          },
          {
           "type": "hide",
           "loc": [
            [
             2,
             6
            ]
           ],
           "floorId": "mota_5",
           "remove": true,
           "time": 0
          },
          {
           "type": "function",
           "function": "function(){\ncore.plugin.useProof('proof_sage')\n}"
          },
          {
           "type": "setHeroIcon",
           "name": "hero2.png"
          },
          {
           "type": "playSound",
           "name": "item.mp3"
          },
          {
           "type": "tip",
           "text": "章的能力已激活，已晋升为贤者",
           "icon": "proof_sage"
          }
         ]
        },
        {
         "text": "霸者之章（镶有黑珍珠）",
         "action": [
          {
           "type": "setValue",
           "name": "item:proof_tyrant",
           "value": "1"
          },
          {
           "type": "hide",
           "loc": [
            [
             6,
             2
            ]
           ],
           "floorId": "mota_5",
           "remove": true,
           "time": 0
          },
          {
           "type": "function",
           "function": "function(){\ncore.plugin.useProof('proof_tyrant')\n}"
          },
          {
           "type": "setHeroIcon",
           "name": "hero3.png"
          },
          {
           "type": "playSound",
           "name": "item.mp3"
          },
          {
           "type": "tip",
           "text": "章的能力已激活，已晋升为霸者",
           "icon": "proof_tyrant"
          }
         ]
        }
       ]
      }
     ]
    }
   ],
   "downFloor": "__delete__",
   "upFloor": "__delete__",
   "bgm": "__delete__",
   "eachArrive": [],
   "parallelDo": ""
  }
 },
 "floor_1": {
  "map": {
   "1,1": 0,
   "2,1": 0,
   "3,1": 0,
   "2,2": 0,
   "6,3": 0,
   "11,4": 201,
   "11,5": 202,
   "11,6": 201,
   "9,9": 357,
   "1,11": 31,
   "2,11": 0
  },
  "events": {
   "1,11": null,
   "2,1": null
  },
  "afterBattle": {
   "2,2": null,
   "3,1": null,
   "1,1": null
  }
 },
 "floor_10": {
  "map": {
   "1,4": 0,
   "2,4": 0,
   "3,4": 0,
   "9,4": 0,
   "10,4": 0,
   "11,4": 0,
   "2,5": 0,
   "4,5": 0,
   "5,5": 210,
   "6,5": 211,
   "7,5": 210,
   "8,5": 0,
   "10,5": 0,
   "5,6": 210,
   "6,6": 210,
   "7,6": 210,
   "5,7": 210,
   "7,7": 210,
   "2,11": 0
  },
  "events": {
   "6,7": [
    "\t[骷髅队长,skeletonCaptain]哈哈哈！小子，你的好日子到头了！\n早就听说有个愣头青在塔里横冲直撞——老子的骷髅军团等你很久了！\n弟兄们，给我上！",
    "\t[骷髅队长,skeletonCaptain]哼，前一个闯到这里的家伙运气好。\n……怪了，老子怎么总觉得，这话说过不止一回？",
    {
     "type": "closeDoor",
     "id": "specialDoor",
     "loc": [
      6,
      8
     ]
    },
    {
     "type": "show",
     "loc": [
      [
       5,
       7
      ]
     ],
     "time": 500,
     "async": true
    },
    {
     "type": "show",
     "loc": [
      [
       5,
       5
      ]
     ],
     "time": 500,
     "async": true
    },
    {
     "type": "show",
     "loc": [
      [
       7,
       5
      ]
     ],
     "time": 500,
     "async": true
    },
    {
     "type": "show",
     "loc": [
      [
       7,
       7
      ]
     ],
     "time": 500,
     "async": true
    },
    {
     "type": "show",
     "loc": [
      [
       6,
       6
      ]
     ],
     "time": 500,
     "async": true
    },
    {
     "type": "waitAsync"
    },
    {
     "type": "move",
     "loc": [
      6,
      5
     ],
     "time": 500,
     "keep": true,
     "steps": [
      "up",
      "up",
      "up"
     ]
    },
    {
     "type": "hide",
     "time": 500
    }
   ],
   "6,3": null,
   "2,11": null,
   "5,5": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   },
   "7,5": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   },
   "5,7": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   },
   "6,6": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   },
   "7,7": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   },
   "5,6": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   },
   "7,6": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": true,
    "data": []
   }
  },
  "afterBattle": {
   "6,2": [
    "\t[骷髅队长,skeletonCaptain]咳咳……输了就是输了，老子认。\n小子，身手不赖。上面那位伯爵可没老子这么讲道理，当心点。",
    "\t[骷髅队长,skeletonCaptain]当年那个家伙……一个人就把我们打穿了。\n一回，两回……老子记不清了。你和他……还真像啊。",
    {
     "type": "addValue",
     "name": "flag:beat10F",
     "value": "1"
    },
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
     "type": "openDoor",
     "loc": [
      6,
      8
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       8,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       9,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       10,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       11,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       1,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       2,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       3,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       4,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       1,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       2,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       3,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       4,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       8,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       9,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       10,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       11,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       11,
       2
      ]
     ]
    },
    {
     "type": "waitAsync"
    }
   ],
   "3,4": null,
   "1,4": null,
   "2,4": null,
   "2,5": null,
   "9,4": null,
   "10,4": null,
   "11,4": null,
   "10,5": null
  }
 },
 "floor_11": {
  "map": {
   "5,2": 0,
   "6,3": 0
  },
  "events": {
   "5,2": null
  }
 },
 "floor_12": {
  "map": {
   "10,8": 0,
   "10,9": 0,
   "11,10": 0,
   "3,11": 0
  },
  "events": {
   "10,8": null,
   "11,10": null
  },
  "afterBattle": {
   "5,1": [
    {
     "type": "if",
     "condition": "flag:fireF12==3",
     "true": [
      {
       "type": "hide",
       "loc": [
        [
         6,
         9
        ]
       ],
       "floorId": "floor_20",
       "time": 500
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:fireF12",
       "value": "1"
      }
     ]
    }
   ],
   "7,3": [
    {
     "type": "if",
     "condition": "flag:fireF12==3",
     "true": [
      {
       "type": "hide",
       "loc": [
        [
         6,
         9
        ]
       ],
       "floorId": "floor_20",
       "time": 500
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:fireF12",
       "value": "1"
      }
     ]
    }
   ],
   "5,3": [
    {
     "type": "if",
     "condition": "flag:fireF12==3",
     "true": [
      {
       "type": "hide",
       "loc": [
        [
         6,
         9
        ]
       ],
       "floorId": "floor_20",
       "time": 500
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:fireF12",
       "value": "1"
      }
     ]
    }
   ],
   "7,1": [
    {
     "type": "if",
     "condition": "flag:fireF12==3",
     "true": [
      {
       "type": "hide",
       "loc": [
        [
         6,
         9
        ]
       ],
       "floorId": "floor_20",
       "time": 500
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:fireF12",
       "value": "1"
      }
     ]
    }
   ]
  }
 },
 "floor_13": {
  "map": {
   "2,4": 81,
   "11,7": 0
  },
  "events": {
   "11,7": null
  },
  "afterBattle": {
   "1,1": [
    {
     "type": "if",
     "condition": "flag:redKeyF13==3",
     "true": [
      {
       "type": "setBlock",
       "number": "32",
       "loc": [
        [
         2,
         6
        ]
       ]
      },
      {
       "type": "setBlock",
       "number": "23",
       "loc": [
        [
         2,
         2
        ]
       ]
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:redKeyF13",
       "value": "1"
      }
     ]
    }
   ],
   "1,3": [
    {
     "type": "if",
     "condition": "flag:redKeyF13==3",
     "true": [
      {
       "type": "setBlock",
       "number": "32",
       "loc": [
        [
         2,
         6
        ]
       ]
      },
      {
       "type": "setBlock",
       "number": "23",
       "loc": [
        [
         2,
         2
        ]
       ]
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:redKeyF13",
       "value": "1"
      }
     ]
    }
   ],
   "3,1": [
    {
     "type": "if",
     "condition": "flag:redKeyF13==3",
     "true": [
      {
       "type": "setBlock",
       "number": "32",
       "loc": [
        [
         2,
         6
        ]
       ]
      },
      {
       "type": "setBlock",
       "number": "23",
       "loc": [
        [
         2,
         2
        ]
       ]
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:redKeyF13",
       "value": "1"
      }
     ]
    }
   ],
   "3,3": [
    {
     "type": "if",
     "condition": "flag:redKeyF13==3",
     "true": [
      {
       "type": "setBlock",
       "number": "32",
       "loc": [
        [
         2,
         6
        ]
       ]
      },
      {
       "type": "setBlock",
       "number": "23",
       "loc": [
        [
         2,
         2
        ]
       ]
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:redKeyF13",
       "value": "1"
      }
     ]
    }
   ],
   "5,7": [
    {
     "type": "addValue",
     "name": "flag:doorF14_1",
     "value": "1"
    }
   ]
  }
 },
 "floor_14": {
  "map": {
   "11,2": 0,
   "11,3": 21,
   "9,10": 0,
   "11,10": 0,
   "9,11": 21,
   "10,11": 0,
   "11,11": 21
  },
  "events": {
   "10,11": null,
   "2,3": [
    {
     "type": "if",
     "condition": "flag:doorF14_1>=2",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        2,
        3
       ]
      }
     ],
     "false": []
    }
   ]
  },
  "afterBattle": {
   "1,5": [
    {
     "type": "addValue",
     "name": "flag:doorF14_2",
     "value": "1"
    },
    {
     "type": "if",
     "condition": "flag:doorF14_2==2",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        2,
        6
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ]
    }
   ],
   "3,5": [
    {
     "type": "addValue",
     "name": "flag:doorF14_2",
     "value": "1"
    },
    {
     "type": "if",
     "condition": "flag:doorF14_2==2",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        2,
        6
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ]
    }
   ],
   "1,8": [
    {
     "type": "addValue",
     "name": "flag:doorF14_2",
     "value": "1"
    },
    {
     "type": "if",
     "condition": "flag:doorF14_2==4",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        2,
        9
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ]
    }
   ],
   "3,8": [
    {
     "type": "addValue",
     "name": "flag:doorF14_2",
     "value": "1"
    },
    {
     "type": "if",
     "condition": "flag:doorF14_2==4",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        2,
        9
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ]
    }
   ]
  }
 },
 "floor_15": {
  "bgmap": {
   "2,8": 351
  }
 },
 "floor_16": {
  "map": {
   "9,1": 0,
   "1,10": 0,
   "3,10": 0,
   "3,11": 28
  },
  "bgmap": {
   "5,6": 1,
   "6,6": 1
  },
  "afterBattle": {
   "5,8": [
    {
     "type": "addValue",
     "name": "flag:doorF14_1",
     "value": "1"
    }
   ]
  }
 },
 "floor_18": {
  "afterBattle": {
   "1,1": [
    {
     "type": "if",
     "condition": "flag:cross2==3",
     "true": [
      {
       "type": "playSound",
       "name": "door.mp3"
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         7
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         7
        ]
       ],
       "time": 0
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:cross2",
       "value": "1"
      }
     ]
    }
   ],
   "11,11": [
    {
     "type": "if",
     "condition": "flag:cross2==3",
     "true": [
      {
       "type": "playSound",
       "name": "door.mp3"
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         7
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         7
        ]
       ],
       "time": 0
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:cross2",
       "value": "1"
      }
     ]
    }
   ],
   "11,1": [
    {
     "type": "if",
     "condition": "flag:cross2==3",
     "true": [
      {
       "type": "playSound",
       "name": "door.mp3"
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         7
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         7
        ]
       ],
       "time": 0
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:cross2",
       "value": "1"
      }
     ]
    }
   ],
   "1,11": [
    {
     "type": "if",
     "condition": "flag:cross2==3",
     "true": [
      {
       "type": "playSound",
       "name": "door.mp3"
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         5
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         3,
         7
        ]
       ],
       "time": 0
      },
      {
       "type": "hide",
       "loc": [
        [
         9,
         7
        ]
       ],
       "time": 0
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:cross2",
       "value": "1"
      }
     ]
    }
   ]
  },
  "props": {
   "firstArrive": [
    "四角的石像在黑暗里注视着你。这一次，它们和墙壁一样惨白，几乎分不出来。\n中央那堵墙后面，有什么在发光。"
   ]
  }
 },
 "floor_19": {
  "map": {
   "1,1": 0,
   "7,1": 21,
   "4,2": 0,
   "8,10": 1
  },
  "events": {
   "1,1": null,
   "7,10": null,
   "6,10": null
  }
 },
 "floor_2": {
  "map": {
   "1,1": 0,
   "1,2": 0,
   "1,4": 0,
   "1,5": 0,
   "4,6": 1,
   "9,6": 0,
   "1,7": 0,
   "1,8": 0,
   "1,10": 0,
   "1,11": 0,
   "6,11": 0,
   "7,11": 0,
   "8,11": 0,
   "9,11": 0
  },
  "events": {
   "11,6": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": false,
    "data": [
     "\t[小偷,thief]刚好我刚挖开这面墙。",
     {
      "type": "hide",
      "loc": [
       [
        10,
        6
       ]
      ],
      "time": 0
     },
     "\t[小偷,thief]我听说地下也有很多宝物呢。我要去挖开通往地下的路。",
     {
      "type": "show",
      "loc": [
       [
        2,
        4
       ]
      ],
      "floorId": "floor_0",
      "time": 0
     },
     {
      "type": "move",
      "loc": [
       9,
       6
      ],
      "time": 0,
      "steps": [
       "right",
       "right",
       "up"
      ]
     },
     {
      "type": "hide",
      "loc": [
       [
        9,
        6
       ]
      ],
      "time": 0
     },
     {
      "type": "hide",
      "time": 0
     }
    ]
   },
   "1,1": null,
   "1,8": null,
   "1,4": null,
   "1,11": null,
   "9,6": null,
   "1,5": null,
   "1,2": null,
   "1,7": null,
   "1,10": null,
   "8,6": null,
   "9,11": null,
   "7,11": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": false,
    "data": [
     "\t[小偷,thief]完工！"
    ]
   }
  },
  "afterBattle": {
   "6,2": [
    {
     "type": "if",
     "condition": "flag:doorF2==1",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        7,
        3
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        9
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        6
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        10
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        2
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:doorF2",
       "value": "1"
      }
     ]
    }
   ],
   "8,2": [
    {
     "type": "if",
     "condition": "flag:doorF2==1",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        7,
        3
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        9
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        6
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        10
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        2
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:doorF2",
       "value": "1"
      }
     ]
    }
   ],
   "9,4": [
    {
     "type": "if",
     "condition": "flag:doorF2==3",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        7,
        3
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        9
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        6
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        10
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        2
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        10,
        6
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:doorF2",
       "value": "1"
      }
     ]
    }
   ],
   "6,4": [
    {
     "type": "if",
     "condition": "flag:doorF2==3",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        7,
        3
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        9
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        6
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        10
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        2
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        10,
        6
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:doorF2",
       "value": "1"
      }
     ]
    }
   ],
   "9,9": [
    {
     "type": "if",
     "condition": "flag:doorF2==3",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        7,
        3
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        5
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        7
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        9
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        6
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        10
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        7
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        5
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        2
       ]
      },
      {
       "type": "openDoor",
       "loc": [
        10,
        6
       ]
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:doorF2",
       "value": "1"
      }
     ]
    }
   ],
   "6,9": [
    {
     "type": "if",
     "condition": "flag:doorF2==3",
     "true": [
      {
       "type": "openDoor",
       "loc": [
        7,
        3
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        5,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        9
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        7,
        6
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        10
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        7
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        5
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        3,
        2
       ],
       "async": true
      },
      {
       "type": "openDoor",
       "loc": [
        10,
        6
       ],
       "async": true
      },
      {
       "type": "waitAsync"
      }
     ],
     "false": [
      {
       "type": "addValue",
       "name": "flag:doorF2",
       "value": "1"
      }
     ]
    }
   ]
  }
 },
 "floor_20": {
  "events": {
   "6,9": [
    {
     "type": "if",
     "condition": "core.hasFlag('proof') && ((core.hasFlag('beatSlaveMaster') && !core.hasFlag('enteredB11Altar')) || core.hasFlag('beatDarkKnight'))",
     "true": [
      "\t[勇士,hero]章在发光！",
      {
       "type": "show",
       "loc": [
        [
         4,
         4
        ],
        [
         4,
         8
        ],
        [
         8,
         4
        ],
        [
         8,
         8
        ]
       ],
       "time": 500
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
      }
     ],
     "false": [
      {
       "type": "if",
       "condition": "core.hasFlag('proof') && core.getFlag('glowWeakShown', 0) != core.getFlag('proof_lv', 0)",
       "true": [
        "\t[勇士,hero]章在微微发热……可光芒还太弱了。\n也许，该回去找仙子，让它再成长一些。",
        {
         "type": "setValue",
         "name": "flag:glowWeakShown",
         "value": "core.getFlag('proof_lv', 0)"
        }
       ],
       "false": []
      }
     ]
    }
   ]
  },
  "afterBattle": {
   "6,6": [
    "\t[吸血鬼,vampire]不可思议……千年来从未有人能伤我分毫。\n你确实有些本事，但也仅此而已。\n大法师的力量远超于我，以你现在的状态，不过是去送死罢了。",
    "\t[吸血鬼,vampire]你在找那个人？……他最后去了大法师那里。\n想见他，就去幻境吧——如果你还认得出他的话。",
    {
     "type": "addValue",
     "name": "flag:beat20F",
     "value": "1"
    },
    {
     "type": "waitAsync"
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       7,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       7,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       5,
       1
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "27",
     "loc": [
      [
       5,
       2
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       2,
       5
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       1,
       5
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       2,
       7
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "28",
     "loc": [
      [
       1,
       7
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       11,
       5
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       10,
       5
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       11,
       7
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "32",
     "loc": [
      [
       10,
       7
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       5,
       11
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       7,
       11
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       5,
       10
      ]
     ]
    },
    {
     "type": "setBlock",
     "number": "21",
     "loc": [
      [
       7,
       10
      ]
     ]
    },
    {
     "type": "playSound",
     "name": "door.mp3",
     "stop": true
    },
    {
     "type": "waitAsync"
    },
    "\t[吸血鬼,vampire]我身后便是幻境的入口……\n不过，我倒很期待看到你在大法师面前绝望的表情。",
    "\t[大法师,blackMagician]我知道你在想什么，但你最好就此收手。\n如果魔王复活，世界又会陷入混乱与黑暗。",
    "\t[大法师,blackMagician]希望你能听懂。",
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
    "\t[勇士,hero]伯爵身后亮起了一座法阵……通往的却不是幻境，是那座只存在于记忆里的塔。",
    {
     "type": "show",
     "loc": [
      [
       6,
       11
      ]
     ],
     "time": 500
    },
    {
     "type": "hide",
     "loc": [
      [
       2,
       3
      ]
     ],
     "floorId": "floor_0",
     "time": 500
    }
   ]
  },
  "autoEvent": {
   "4,8": null,
   "8,4": null
  },
  "changeFloor": {
   "6,1": {
    "floorId": "mota_5",
    "loc": [
     6,
     11
    ],
    "direction": "up",
    "time": 500
   }
  }
 },
 "floor_3": {
  "map": {
   "2,1": 21,
   "6,1": 209,
   "3,2": 22,
   "6,3": 0,
   "6,4": 0,
   "6,7": 0,
   "6,8": 0,
   "5,9": 0,
   "7,9": 0,
   "6,10": 0
  },
  "bgmap": {
   "3,8": 351
  },
  "events": {
   "6,9": null,
   "6,7": null,
   "6,8": null,
   "5,9": null,
   "7,9": null,
   "6,10": null,
   "6,1": null,
   "6,2": null
  }
 },
 "floor_4": {
  "map": {
   "1,1": 28,
   "2,1": 0,
   "3,1": 31,
   "10,1": 0,
   "1,2": 0,
   "3,2": 0,
   "11,10": 28,
   "10,11": 21
  },
  "events": {
   "10,1": null,
   "2,1": null
  }
 },
 "floor_5": {
  "map": {
   "3,3": 0,
   "3,4": 202,
   "3,5": 0,
   "11,5": 21,
   "6,7": 0,
   "2,8": 0,
   "3,8": 202,
   "4,8": 253
  },
  "events": {
   "6,7": null
  },
  "props": {
   "firstArrive": []
  }
 },
 "floor_7": {
  "map": {
   "2,2": 0,
   "6,9": 0,
   "9,11": 0
  },
  "events": {
   "6,9": null,
   "2,2": null,
   "9,11": null
  },
  "afterBattle": {
   "5,1": null,
   "5,3": null
  }
 },
 "floor_8": {
  "map": {
   "10,10": 0
  },
  "events": {
   "10,10": null
  }
 },
 "floor_9": {
  "map": {
   "1,1": 1,
   "11,9": 0
  },
  "bgmap": {
   "1,1": 0
  },
  "events": {
   "1,2": null,
   "1,1": null,
   "11,9": null,
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
  "afterBattle": {
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
   ],
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
   ]
  },
  "changeFloor": {
   "1,1": null
  }
 },
 "mota_5": {
  "events": {
   "6,11": {
    "trigger": null,
    "enable": false,
    "noPass": null,
    "displayDamage": false,
    "data": [
     {
      "type": "if",
      "condition": "flag:round2==1",
      "true": [
       {
        "type": "hide",
        "loc": [
         [
          6,
          1
         ]
        ],
        "floorId": "floor_20",
        "remove": true,
        "time": 0
       },
       {
        "type": "changeFloor",
        "floorId": "floor_20",
        "loc": [
         6,
         2
        ],
        "direction": "down",
        "time": 500
       }
      ],
      "false": [
       {
        "type": "changeFloor",
        "floorId": "floor_0",
        "loc": [
         6,
         5
        ],
        "time": 500
       }
      ]
     }
    ]
   }
  }
 },
 "phant_1": {
  "map": {
   "12,7": 4,
   "5,11": 0
  },
  "events": {
   "5,11": null
  },
  "afterBattle": {
   "11,4": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_1",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_2": {
  "afterBattle": {
   "6,5": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_2",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_3": {
  "afterBattle": {
   "3,11": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_3",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_4": {
  "map": {
   "8,5": 0
  },
  "events": {
   "8,5": null
  },
  "afterBattle": {
   "1,11": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_4",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_5": {
  "map": {
   "10,8": 0
  },
  "events": {
   "10,8": null
  },
  "afterBattle": {
   "4,6": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_5",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_6": {
  "map": {
   "7,7": 0
  },
  "events": {
   "7,7": null
  },
  "afterBattle": {
   "2,1": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_6",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_7": {
  "map": {
   "5,5": 0
  },
  "afterBattle": {
   "5,9": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_7",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_8": {
  "map": {
   "6,4": 0
  },
  "events": {
   "6,4": null
  },
  "afterBattle": {
   "8,11": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_8",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "phant_9": {
  "afterBattle": {
   "8,7": [
    {
     "type": "setValue",
     "name": "flag:steel_phant_plus_9",
     "value": "1"
    },
    {
     "type": "function",
     "function": "function(){\ncore.updateCheckBlock();\ncore.updateDamage();\n}"
    },
    {
     "type": "sleep",
     "time": 600
    },
    {
     "type": "tip",
     "text": "铁怪倒下了：这一层的领域消失，怪物也不再复活"
    }
   ]
  }
 },
 "base_16": {
  "map": {
   "19,3": 0,
   "1,11": 0,
   "2,13": 0,
   "17,17": 0,
   "18,17": 0,
   "19,17": 0,
   "18,18": 0,
   "17,19": 0,
   "35,22": 0,
   "34,28": 0,
   "34,29": 0
  },
  "events": {
   "1,11": null,
   "19,3": null,
   "2,13": null,
   "20,17": null,
   "35,22": null,
   "34,29": null,
   "33,29": null
  }
 },
 "base_17": {
  "map": {
   "29,2": 0
  }
 }
};
