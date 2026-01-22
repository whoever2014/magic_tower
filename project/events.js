var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "setValue",
				"name": "flag:ahCycle",
				"value": "true"
			},
			{
				"type": "setValue",
				"name": "flag:ahChosen",
				"value": "0"
			},
			{
				"type": "comment",
				"text": "ah 1头像 2状态 3属性 4经典极速模式"
			},
			{
				"type": "switch",
				"condition": "flag:ah",
				"caseList": [
					{
						"case": "1",
						"action": [
							{
								"type": "if",
								"condition": "item:proof_sage>0||item:proof_brave>0||item:proof_tyrant>0",
								"true": [
									{
										"type": "if",
										"condition": "item:proof_sage>0",
										"true": [
											{
												"type": "showImage",
												"code": 31,
												"image": "hint_sage.png",
												"loc": [
													0,
													0
												],
												"opacity": 1,
												"time": 0
											},
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "8"
											}
										]
									},
									{
										"type": "if",
										"condition": "item:proof_tyrant>0",
										"true": [
											{
												"type": "showImage",
												"code": 31,
												"image": "hint_tyrant.png",
												"loc": [
													0,
													0
												],
												"opacity": 1,
												"time": 0
											},
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "7"
											}
										]
									},
									{
										"type": "if",
										"condition": "item:proof_brave>0",
										"true": [
											{
												"type": "showImage",
												"code": 31,
												"image": "hint_brave.png",
												"loc": [
													0,
													0
												],
												"opacity": 1,
												"time": 0
											},
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "6"
											}
										]
									}
								],
								"false": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_proof.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									},
									{
										"type": "setValue",
										"name": "flag:ahChosen",
										"value": "5"
									}
								]
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "showImage",
								"code": 31,
								"image": "hint_status3.png",
								"loc": [
									0,
									0
								],
								"opacity": 1,
								"time": 0
							},
							{
								"type": "setValue",
								"name": "flag:ahChosen",
								"value": "3"
							}
						]
					},
					{
						"case": "3",
						"action": [
							{
								"type": "showImage",
								"code": 31,
								"image": "hint_status1.png",
								"loc": [
									0,
									0
								],
								"opacity": 1,
								"time": 0
							},
							{
								"type": "setValue",
								"name": "flag:ahChosen",
								"value": "1"
							}
						]
					},
					{
						"case": "4",
						"action": [
							{
								"type": "showImage",
								"code": 31,
								"image": "hint_mode.png",
								"loc": [
									0,
									0
								],
								"opacity": 1,
								"time": 0
							},
							{
								"type": "setValue",
								"name": "flag:ahChosen",
								"value": "4"
							}
						]
					},
					{
						"case": "default",
						"action": [
							{
								"type": "showImage",
								"code": 31,
								"image": "instructions.png",
								"loc": [
									0,
									0
								],
								"opacity": 1,
								"time": 0
							},
							{
								"type": "setValue",
								"name": "flag:ahChosen",
								"value": "0"
							}
						]
					}
				]
			},
			{
				"type": "hideImage",
				"code": 31,
				"time": 0
			},
			{
				"type": "while",
				"condition": "flag:ahCycle",
				"data": [
					{
						"type": "switch",
						"condition": "flag:ahChosen",
						"caseList": [
							{
								"case": "1",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_status1.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "2",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_status2.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "3",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_status3.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "4",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_mode.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "5",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_proof.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "6",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_brave.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "7",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_tyrant.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "8",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "hint_sage.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							},
							{
								"case": "default",
								"action": [
									{
										"type": "showImage",
										"code": 31,
										"image": "instructions.png",
										"loc": [
											0,
											0
										],
										"opacity": 1,
										"time": 0
									}
								]
							}
						]
					},
					{
						"type": "wait",
						"data": [
							{
								"case": "keyboard",
								"keycode": 13,
								"action": [
									{
										"type": "comment",
										"text": "回车"
									},
									{
										"type": "playSound",
										"name": "confirm.mp3"
									},
									{
										"type": "setValue",
										"name": "flag:ahCycle",
										"value": "false"
									},
									{
										"type": "hideImage",
										"code": 31,
										"time": 0
									},
									{
										"type": "break"
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": 32,
								"action": [
									{
										"type": "comment",
										"text": "空格"
									},
									{
										"type": "playSound",
										"name": "confirm.mp3"
									},
									{
										"type": "setValue",
										"name": "flag:ahCycle",
										"value": "false"
									},
									{
										"type": "hideImage",
										"code": 31,
										"time": 0
									},
									{
										"type": "break"
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									105,
									311
								],
								"py": [
									0,
									416
								],
								"action": [
									{
										"type": "comment",
										"text": "点中间"
									},
									{
										"type": "playSound",
										"name": "confirm.mp3"
									},
									{
										"type": "setValue",
										"name": "flag:ahCycle",
										"value": "false"
									},
									{
										"type": "hideImage",
										"code": 31,
										"time": 0
									},
									{
										"type": "break"
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									312,
									416
								],
								"py": [
									0,
									416
								],
								"action": [
									{
										"type": "comment",
										"text": "右边"
									},
									{
										"type": "playSound",
										"name": "cursor.mp3"
									},
									{
										"type": "addValue",
										"name": "flag:ahChosen",
										"value": "1"
									},
									{
										"type": "if",
										"condition": "flag:ahChosen>8",
										"true": [
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "0"
											}
										]
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": 39,
								"action": [
									{
										"type": "comment",
										"text": "右边"
									},
									{
										"type": "playSound",
										"name": "cursor.mp3"
									},
									{
										"type": "addValue",
										"name": "flag:ahChosen",
										"value": "1"
									},
									{
										"type": "if",
										"condition": "flag:ahChosen>8",
										"true": [
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "0"
											}
										]
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									0,
									104
								],
								"py": [
									0,
									416
								],
								"action": [
									{
										"type": "comment",
										"text": "左边"
									},
									{
										"type": "playSound",
										"name": "cursor.mp3"
									},
									{
										"type": "addValue",
										"name": "flag:ahChosen",
										"value": "-1"
									},
									{
										"type": "if",
										"condition": "flag:ahChosen<0",
										"true": [
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "8"
											}
										]
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": 37,
								"action": [
									{
										"type": "comment",
										"text": "左边"
									},
									{
										"type": "playSound",
										"name": "cursor.mp3"
									},
									{
										"type": "addValue",
										"name": "flag:ahChosen",
										"value": "-1"
									},
									{
										"type": "if",
										"condition": "flag:ahChosen<0",
										"true": [
											{
												"type": "setValue",
												"name": "flag:ahChosen",
												"value": "8"
											}
										]
									}
								]
							}
						]
					},
					{
						"type": "hideImage",
						"code": 31,
						"time": 0
					}
				]
			},
			{
				"type": "if",
				"condition": "false",
				"true": [
					{
						"type": "choices",
						"text": "通过传参，flag:arg1 表示当前应该的加点数值",
						"choices": [
							{
								"text": "攻击+${1*flag:arg1}",
								"action": [
									{
										"type": "setValue",
										"name": "status:atk",
										"value": "status:atk+1*flag:arg1"
									}
								]
							}
						]
					}
				]
			}
		],
		"毒衰咒处理": [
			{
				"type": "comment",
				"text": "获得毒衰咒效果，flag:arg1 为要获得的类型"
			},
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "comment",
								"text": "获得毒效果"
							},
							{
								"type": "if",
								"condition": "!flag:poison",
								"true": [
									{
										"type": "setValue",
										"name": "flag:poison",
										"value": "true"
									},
									{
										"type": "if",
										"condition": "flag:weak",
										"true": [
											{
												"type": "setValue",
												"name": "flag:weak",
												"value": "false"
											},
											{
												"type": "if",
												"condition": "core.values.weakValue>1",
												"true": [
													{
														"type": "addValue",
														"name": "status:atk",
														"value": "core.values.weakValue"
													},
													{
														"type": "addValue",
														"name": "status:def",
														"value": "core.values.weakValue"
													}
												],
												"false": [
													{
														"type": "function",
														"function": "function(){\ncore.setBuff(\"atk\", core.getBuff(\"atk\") + core.values.weakValue);\n}"
													},
													{
														"type": "function",
														"function": "function(){\ncore.setBuff(\"def\", core.getBuff(\"def\") + core.values.weakValue);\n}"
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "comment",
								"text": "获得衰效果"
							},
							{
								"type": "if",
								"condition": "!flag:weak",
								"true": [
									{
										"type": "if",
										"condition": "flag:poison",
										"true": [
											{
												"type": "setValue",
												"name": "flag:poison",
												"value": "false"
											}
										]
									},
									{
										"type": "setValue",
										"name": "flag:weak",
										"value": "true"
									},
									{
										"type": "if",
										"condition": "core.values.weakValue>1",
										"true": [
											{
												"type": "addValue",
												"name": "status:atk",
												"value": "-core.values.weakValue"
											},
											{
												"type": "addValue",
												"name": "status:def",
												"value": "-core.values.weakValue"
											}
										],
										"false": [
											{
												"type": "function",
												"function": "function(){\ncore.setBuff(\"atk\", core.getBuff(\"atk\") - core.values.weakValue);\n}"
											},
											{
												"type": "function",
												"function": "function(){\ncore.setBuff(\"def\", core.getBuff(\"def\") - core.values.weakValue);\n}"
											}
										]
									}
								]
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "comment",
								"text": "获得咒效果"
							},
							{
								"type": "if",
								"condition": "!flag:curse",
								"true": [
									{
										"type": "setValue",
										"name": "flag:curse",
										"value": "true"
									}
								],
								"false": []
							}
						]
					}
				]
			}
		],
		"滑冰事件": [
			{
				"type": "comment",
				"text": "公共事件：滑冰事件"
			},
			{
				"type": "if",
				"condition": "core.canMoveHero()",
				"true": [
					{
						"type": "comment",
						"text": "检测下一个点是否可通行"
					},
					{
						"type": "setValue",
						"name": "flag:nx",
						"value": "core.nextX()"
					},
					{
						"type": "setValue",
						"name": "flag:ny",
						"value": "core.nextY()"
					},
					{
						"type": "if",
						"condition": "core.noPass(flag:nx, flag:ny)",
						"true": [
							{
								"type": "comment",
								"text": "不可通行，触发下一个点的事件"
							},
							{
								"type": "trigger",
								"loc": [
									"flag:nx",
									"flag:ny"
								]
							}
						],
						"false": [
							{
								"type": "comment",
								"text": "可通行，先移动到下个点，然后检查阻激夹域，并尝试触发该点事件"
							},
							{
								"type": "moveHero",
								"time": 80,
								"steps": [
									"forward"
								]
							},
							{
								"type": "function",
								"function": "function(){\ncore.checkBlock();\n}"
							},
							{
								"type": "comment",
								"text": "【触发事件】如果该点存在事件则会立刻结束当前事件"
							},
							{
								"type": "trigger",
								"loc": [
									"flag:nx",
									"flag:ny"
								]
							},
							{
								"type": "comment",
								"text": "如果该点不存在事件，则继续检测该点是否是滑冰点"
							},
							{
								"type": "if",
								"condition": "core.getBgNumber() == 167",
								"true": [
									{
										"type": "function",
										"function": "function(){\ncore.insertAction(\"滑冰事件\",null,null,null,true)\n}"
									}
								],
								"false": []
							}
						]
					}
				],
				"false": []
			}
		],
		"回收钥匙商店": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,woman]有多余的钥匙吗？\n我愿意大量收购！",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey>=1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"value": "item:yellowKey-1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"value": "status:money+10"
											},
											{
												"type": "playSound",
												"name": "shop.mp3"
											}
										],
										"false": [
											"\t[商人,woman]你已经没有黄钥匙了！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（40金币）",
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey>=1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"value": "item:blueKey-1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"value": "status:money+40"
											},
											{
												"type": "playSound",
												"name": "shop.mp3"
											}
										],
										"false": [
											"\t[商人,woman]你已经没有蓝钥匙了！"
										]
									}
								]
							},
							{
								"text": "红钥匙（250金币）",
								"action": [
									{
										"type": "if",
										"condition": "item:redKey>=1",
										"true": [
											{
												"type": "setValue",
												"name": "item:redKey",
												"value": "item:redKey-1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"value": "status:money+250"
											},
											{
												"type": "playSound",
												"name": "shop.mp3"
											}
										],
										"false": [
											"\t[商人,woman]你已经没有红钥匙了！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					}
				]
			}
		],
		"战斗动画": null
	}
}