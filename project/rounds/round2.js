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
   "1,1": 0
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
  }
 },
 "base_13": {
  "map": {
   "4,3": 0
  },
  "events": {
   "4,3": null
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
 "base_7": {
  "map": {
   "9,3": 0,
   "9,11": 0
  },
  "events": {
   "9,11": null,
   "1,11": null
  }
 },
 "base_8": {
  "map": {
   "5,2": 0
  },
  "events": {
   "5,2": null
  }
 },
 "base_9": {
  "map": {
   "1,11": 0
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
   "11,1": null,
   "2,4": null
  },
  "props": {
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
   ]
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
   "1,11": 0
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
   "2,11": 0
  },
  "events": {
   "2,11": null,
   "6,7": [
    "\t[骷髅队长,skeletonCaptain]哈哈哈！小子，你的好日子到头了！\n早就听说有个愣头青在塔里横冲直撞——老子的骷髅军团等你很久了！\n弟兄们，给我上！",
    "\t[骷髅队长,skeletonCaptain]哼，前一个闯到这里的家伙运气好。\n……怪了，老子怎么总觉得，这话说过不止一回？",
    {
     "type": "move",
     "loc": [
      6,
      6
     ],
     "time": 0,
     "keep": true,
     "steps": [
      "up",
      "up",
      "up",
      "up"
     ]
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
      6,
      4
     ]
    },
    {
     "type": "openDoor",
     "loc": [
      4,
      5
     ]
    },
    {
     "type": "openDoor",
     "loc": [
      8,
      5
     ]
    },
    {
     "type": "hide",
     "time": 0
    }
   ]
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
     "type": "waitAsync"
    }
   ]
  }
 },
 "floor_11": {
  "map": {
   "5,2": 0
  },
  "events": {
   "5,2": null
  }
 },
 "floor_12": {
  "map": {
   "10,8": 0,
   "10,9": 0,
   "11,10": 0
  },
  "events": {
   "10,8": null,
   "11,10": null
  }
 },
 "floor_13": {
  "map": {
   "11,7": 0
  },
  "events": {
   "11,7": null
  }
 },
 "floor_14": {
  "map": {
   "10,11": 0
  },
  "events": {
   "10,11": null
  }
 },
 "floor_16": {
  "map": {
   "9,1": 0
  }
 },
 "floor_18": {
  "props": {
   "firstArrive": [
    "四角的石像在黑暗里注视着你。这一次，它们和墙壁一样惨白，几乎分不出来。\n中央那堵墙后面，有什么在发光。"
   ]
  }
 },
 "floor_19": {
  "map": {
   "1,1": 0
  },
  "events": {
   "1,1": null
  }
 },
 "floor_2": {
  "map": {
   "1,1": 0,
   "1,2": 0,
   "1,4": 0,
   "1,5": 0,
   "9,6": 0,
   "1,7": 0,
   "1,8": 0,
   "1,10": 0,
   "1,11": 0,
   "9,11": 0
  },
  "events": {
   "11,6": null,
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
   "9,11": null
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
   "6,1": 209,
   "6,3": 0,
   "6,4": 0,
   "6,7": 0,
   "6,8": 0,
   "5,9": 0,
   "7,9": 0,
   "6,10": 0
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
   "2,1": 0,
   "9,1": 0
  },
  "events": {
   "2,1": null,
   "9,1": null
  }
 },
 "floor_5": {
  "map": {
   "6,7": 0
  },
  "events": {
   "6,7": null
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
   "11,9": null
  },
  "changeFloor": {
   "1,1": null
  }
 },
 "phant_1": {
  "map": {
   "5,11": 0
  },
  "events": {
   "5,11": null
  }
 },
 "phant_4": {
  "map": {
   "8,5": 0
  },
  "events": {
   "8,5": null
  }
 },
 "phant_5": {
  "map": {
   "10,8": 0
  },
  "events": {
   "10,8": null
  }
 },
 "phant_6": {
  "map": {
   "7,7": 0
  },
  "events": {
   "7,7": null
  }
 },
 "phant_7": {
  "map": {
   "5,5": 0
  }
 },
 "phant_8": {
  "map": {
   "6,4": 0
  },
  "events": {
   "6,4": null
  }
 },
 "base_16": {
  "map": {
   "19,3": 0,
   "18,5": 0,
   "1,11": 0,
   "2,13": 0,
   "17,17": 0,
   "18,17": 0,
   "19,17": 0,
   "18,18": 0,
   "16,19": 0,
   "35,22": 0,
   "34,28": 0,
   "33,29": 0
  },
  "events": {
   "1,11": null,
   "19,3": null,
   "2,13": null,
   "20,17": null,
   "35,22": null,
   "33,29": null
  }
 },
 "base_17": {
  "map": {
   "29,2": 0
  },
  "events": {
   "29,2": null
  }
 },
 "magic_2": {
  "map": {
   "11,4": 0,
   "3,7": 0,
   "11,7": 0
  },
  "events": {
   "3,7": null
  }
 },
 "magic_3": {
  "map": {
   "11,4": 0
  }
 }
};
