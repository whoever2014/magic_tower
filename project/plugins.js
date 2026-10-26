var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {

	console.log("插件编写测试");

	// 旧存档兼容：2026-10 楼层改名（main→floor_、mainplus→floor_plus_、base→base_、moyu/magic1→phant_、MOTA→mota_ 等），
	// 读取存档时把旧楼层名换成新名，已删除的楼层直接丢弃。
	(function () {
		var DIR = ['c', 'n', 'nw', 'w', 'sw', 's', 'se', 'e', 'ne'];
		var DELETED = { magic_0: 1, base18: 1, base22: 1, base25: 1, baseplus18: 1, baseplus22: 1, baseplus24: 1, baseplus25: 1, MOTA6: 1, MOTA7: 1, MOTA8: 1 };
		function rename(id) {
			var m;
			if (typeof id !== 'string') return id;
			if ((m = id.match(/^main(\d+)$/))) return 'floor_' + m[1];
			if ((m = id.match(/^mainplus(\d+)$/))) return 'floor_plus_' + m[1];
			if ((m = id.match(/^base(16|17)_(\d)$/))) return 'base_' + m[1] + '_' + DIR[+m[2]];
			if ((m = id.match(/^baseplus(16|17)_(\d)$/))) return 'base_plus_' + m[1] + '_' + DIR[+m[2]];
			if (id === 'base24') return 'test';
			if ((m = id.match(/^base(\d+)$/))) return 'base_' + m[1];
			if ((m = id.match(/^baseplus(\d+)$/))) return 'base_plus_' + m[1];
			if (id === 'magic1' || id === 'phant_0') return 'magic_1';
			if ((m = id.match(/^moyu(\d+)$/))) return 'phant_' + m[1];
			if ((m = id.match(/^MOTA([1-5])$/))) return 'mota_' + m[1];
			return id;
		}
		function isOld(id) { return typeof id === 'string' && (DELETED[id] || rename(id) !== id); }
		function migrate(v) {
			if (v instanceof Array) return v.map(migrate);
			if (!v || typeof v !== 'object' || !v.floorId || !v.maps) return v;
			if (!isOld(v.floorId) && !Object.keys(v.maps).some(isOld)) return v;
			var walk = function (o) {
				if (o instanceof Array) return o.map(walk);
				if (o && typeof o === 'object') {
					var r = {};
					for (var k in o) { if (DELETED[k]) continue; r[rename(k)] = walk(o[k]); }
					return r;
				}
				return rename(o);
			};
			console.log('旧存档楼层名已转换：' + v.floorId + ' -> ' + rename(v.floorId));
			return walk(v);
		}
		// 引擎自带的 LZW 压缩在编码超过 65535 后会回绕，录像很长的存档会被写坏（读档报“无效的存档”）。
		// 修复：字典满 65536 后不再增长，编码和解码两边一致；小存档的结果与原算法完全相同。
		window.lzw_encode = function (s) {
			var dict = {}, data = (s + "").split(""), out = [], phrase = data[0], code = 256;
			for (var i = 1; i < data.length; i++) {
				var c = data[i];
				if (dict[phrase + c] != null) { phrase += c; continue; }
				out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
				if (code < 65536) dict[phrase + c] = code++;
				phrase = c;
			}
			out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
			for (var j = 0; j < out.length; j++) out[j] = String.fromCharCode(out[j]);
			return out.join("");
		};
		window.lzw_decode = function (s) {
			var dict = {}, data = (s + "").split(""), currChar = data[0], oldPhrase = currChar, out = [currChar], code = 256, phrase;
			for (var i = 1; i < data.length; i++) {
				var cc = data[i].charCodeAt(0);
				if (cc < 256) phrase = data[i];
				else phrase = dict[cc] ? dict[cc] : (oldPhrase + currChar);
				out.push(phrase);
				currChar = phrase.charAt(0);
				if (code < 65536) dict[code++] = oldPhrase + currChar;
				oldPhrase = phrase;
			}
			return out.join("");
		};
		// 抢救被旧算法写坏的存档：损坏只发生在末尾的录像段，录像之前的数据（勇士、地图）完好。
		// 丢弃录像，其余字段用当前默认值补齐，并用修好的算法写回。
		function repair(raw) {
			if (typeof raw !== 'string') return null;
			var text, i;
			try { text = lzw_decode(raw); } catch (e) { return null; }
			if ((i = text.indexOf(',"route":"')) < 0) return null;
			try {
				var obj = JSON.parse(text.substring(0, i) + '}');
				if (!obj.hero || !obj.maps || !obj.floorId) return null;
				obj.route = core.encodeRoute(['N']);
				obj.values = core.clone(core.data.values);
				obj.shops = core.clone(core.status.shops || {});
				obj.version = core.firstData.version;
				obj.time = Date.now();
				delete obj.hashCode;
				return obj;
			} catch (e) { return null; }
		}
		var _get = core.utils.getLocalForage;
		core.utils.getLocalForage = function (key, defaultValue, successCallback, errorCallback) {
			return _get.call(core.utils, key, defaultValue, function (data) {
				if (data == null && core.platform.useLocalForage && /^(save\d+|autoSave)$/.test(key)) {
					return localforage.getItem(core.firstData.name + "_" + key, function (err, raw) {
						var fixed = err ? null : repair(raw);
						if (fixed) {
							console.log('已抢救损坏的存档 ' + key + '（录像已丢弃）');
							core.utils.setLocalForage(key, fixed);
						}
						if (successCallback) successCallback(fixed ? migrate(fixed) : data);
					});
				}
				if (successCallback) successCallback(migrate(data));
			}, errorCallback);
		};

		// 旧存档里可能记着已删除怪物的属性改动（flag:enemyInfo），读取时跳过不存在的怪物。
		core.enemys.getEnemys = function () {
			var enemys = core.clone(this.enemys);
			var enemyInfo = core.getFlag('enemyInfo');
			if (enemyInfo) {
				for (var id in enemyInfo) {
					if (!enemys[id]) continue;
					for (var name in enemyInfo[id]) enemys[id][name] = core.clone(enemyInfo[id][name]);
				}
			}
			return enemys;
		};
	})();

	// 在这里写的代码将会在【资源加载前】被执行，此时图片等资源尚未被加载。请勿在这里对包括bgm，图片等资源进行操作。

	this._afterLoadResources = function () {
		// 本函数将在所有资源加载完毕后，游戏开启前被执行，可以在这个函数里面对资源进行一些操作，比如切分图片等。

		// 这是一个将assets.png拆分成若干个32x32像素的小图片并保存的样例。
		// var arr = core.splitImage("assets.png", 32, 32);
		// for (var i = 0; i < arr.length; i++) {core.material.images.images["asset"+i+".png"] = arr[i];}

	};

	this.setBackground = function () {
		var hero = core.status.hero || {};
		if (hero.atk > 10 && hero.def > 10) core.setFlag("gameStart", 1); // 旧存档兼容
		core.dom.statusBar.style.background = "url('project/images/ground.png') repeat";
		if (core.getFlag("gameStart")) {
			if (core.domStyle.isVertical) {
				core.dom.statusBar.style.background = "url('project/images/menu_mobile.png') 0px 0px / 100% 100% no-repeat";
			} else {
				core.dom.statusBar.style.background = "url('project/images/menu_pc.png') 0px 0px / 100% 100% no-repeat";
			}
		}
	};

	this.formatBigNumber = function (x, digits) {
		if (digits === true) digits = 5; // 兼容旧版onMap参数
		if (!digits || digits < 5) digits = 6; // 连同负号、小数点和后缀字母在内的总位数，至少需为5，默认为6
		x = Math.trunc(parseFloat(x)); // 尝试识别为小数，然后向0取整
		if (x == null || !Number.isFinite(x)) return '???'; // 无法识别的数或正负无穷大，显示'???'
		var units = [ // 单位及其后缀字母，可自定义，如改成千进制下的K、M、G、T、P
			{ "val": 1e4, "suffix": "w" },
			{ "val": 1e8, "suffix": "e" },
			{ "val": 1e12, "suffix": "z" },
			{ "val": 1e16, "suffix": "j" },
			{ "val": 1e20, "suffix": "g" },
		];
		if (Math.abs(x) > 1e20 * Math.pow(10, digits - 2))
			return x.toExponential(0); // 绝对值过大以致于失去精度的数，直接使用科学记数法，系数只保留整数
		var sign = x < 0 ? '-' : '';
		if (sign) --digits; // 符号位单独处理，负号要占一位
		x = Math.abs(x);

		if (x < Math.pow(10, digits)) return sign + x;

		for (var i = 0; i < units.length; ++i) {
			var each = units[i];
			var u = (x / each.val).toFixed(digits).substring(0, digits);
			if (u.indexOf('.') < 0) continue;
			u = u.substring(0, u[u.length - 2] == '.' ? u.length - 2 : u.length - 1);
			return sign + u + each.suffix;
		}
		return sign + x.toExponential(0);
	}

	core.registerResize("StatusBarBackground", this.setBackground);

	core.dom.statusCanvas.onclick = function (e) {
		try {
			e.preventDefault();
			core.onStatusBarClick(e);
		} catch (err) {
			main.log(err);
		}
	};
	core.registerResize("showStatusBar", function () {
		core.dom.statusCanvas.style.display = "block";
		if (!core.domStyle.isVertical) core.dom.toolBar.style.display = "none";
		else core.dom.toolBar.style.display = "block";
	});
	this.onStatusBarClick = function (e) {
		if (!core.isPlaying()) return false;
		var left = core.dom.gameGroup.offsetLeft + 3;
		var top = core.dom.gameGroup.offsetTop + 3;
		var px = parseInt((e.clientX - left) / core.domStyle.scale),
			py = parseInt((e.clientY - top) / core.domStyle.scale);
		return core.sys_onStatusBarClick(Math.max(px, 0), Math.max(py, 0), core.domStyle.isVertical);
	};

	this.sys_onStatusBarClick = function (px, py, vertical) {
		if (core.actions.actionsdata.onStatusBarClick)
			return core.actions.actionsdata.onStatusBarClick(px, py, vertical);
	};

	core.dom.toolBar.onclick = function (e) {
		try {
			e.preventDefault();
			core.onToolBarClick(e);
		} catch (err) {
			main.log(err);
		}
	};

	this.onToolBarClick = function (e) {
		if (!core.isPlaying()) return false;
		var left = core.dom.gameGroup.offsetLeft + 3;
		var top = core.dom.gameGroup.offsetTop + core.dom.statusBar.offsetHeight + core.dom.gameDraw.offsetHeight + 3;
		var px = parseInt((e.clientX - left) / core.domStyle.scale),
			py = parseInt((e.clientY - top) / core.domStyle.scale);
		return core.sys_onToolBarClick(Math.max(px, 0), Math.max(py, 0), core.domStyle.isVertical);
	};

	this.sys_onToolBarClick = function (px, py, vertical) {
		if (core.actions.actionsdata.onStatusBarClick)
			return core.actions.actionsdata.onToolBarClick(px, py, vertical);
	};


	////// 战斗动画 //////
	// 宽高以及绘制的左上角坐标left top
	core.plugin.battleInfo = {
		width: core.__PIXELS__ - 16,
		height: 132,
		left: 8,
		top: 100
	};


	////// 解锁状态栏 //////
	core.control.unLockControl = function () {
		if (!((core.status.hero || {}).isBattling || (core.status.hero || {}).battleStatus == "afterBattle")) core.status.lockControl = false;
	};

	core.registerReplayAction('rt:', function (action) {
		if (action.indexOf('rt:') != 0) return false;
		var arr = action.slice(3).split(":");
		var hp = parseInt(arr[0]),
			money = parseInt(arr[1]),
			exp = parseInt(arr[2]),
			id = arr[3];
		core.status.hero.hp = hp;
		core.status.hero.money = money;
		core.status.hero.experience = exp;
		core.setBlock(id, core.nextX(), core.nextY());
		core.status.route.push(action);
		setTimeout(core.replay);
		return true;
	});

	core.registerAction('onkeyUp', '_battle_onkeyUp_lockControl', function (e) {
		var keycode = e.keyCode;
		if (keycode == 13 && (core.status.hero || {}).battleStatus == "afterBattle") {
			core.status.hero.battleStatus = "end";
			return true;
		} else if ((core.status.hero || {}).isBattling && !(core.status.hero || {}).battleStatus) {
			// 不再切换速度：固定加速（地图战斗时看不到切换按钮，容易误触变慢）
		}
	}, 51);

	core.registerAction('onclick', '_battle_onclick_lockControl', function (x, y) {
		if ((core.status.hero || {}).battleStatus == "afterBattle") {
			core.status.hero.battleStatus = "end";
			//return true;
		} else if ((core.status.hero || {}).isBattling) {
			// 不再切换速度：固定加速（地图战斗时看不到切换按钮，容易误触变慢）
			//return true;
		}
	}, 51);

	this.updateFg = function () {};

	// 战斗直接在地图上进行：动画和伤害数字出现在勇士/怪物所在格子，不弹战斗框与胜利下拉框
	this.mapBattleOn = function () { return core.getFlag('mapBattle', 1) != 0; };

	this.battle_drawUI = function () {
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top;
		var ctx = core.getContextByName("__battle__") || core.createCanvas("__battle__", left, top, width, height, 66);
		// 地图战斗（仿 50 层）：战斗框照常生成以维持回合/加速/撤退逻辑，但不显示
		if (core.plugin.mapBattleOn()) ctx.canvas.style.display = "none";

		core.setAlpha(ctx, 1);
		ctx.canvas.style.backgroundColor = "gray";
		ctx.canvas.style.backgroundImage = "url(project/images/ground.png)";
		ctx.canvas.style.fontFamily = "myFont1";
		//core.fillRect(ctx, left, top, width, height, core.material.groundPattern);

		// 背景框的线宽,颜色
		var lineWidth = 4,
			strokeStyle = "#40E0D0";
		core.plugin.battleInfo.lineWidth = lineWidth;
		core.strokeRect(ctx, lineWidth / 2, lineWidth / 2, width - lineWidth, height - lineWidth, strokeStyle, lineWidth);


		// 战斗角色名字的字体大小
		var fontSize = 19;
		// 字体是否加粗
		var isBold = false;
		// 字体是否是斜体
		var isItalic = false;
		// 颜色
		var ncolor = "white";
		// 勇士跟怪物的box
		// 勇士：

		// 坐标 box的尺寸
		var bx = 30,
			by = 28 + fontSize * 3 / 4,
			size = 44;
		core.plugin.battleInfo.bx = bx;
		core.plugin.battleInfo.by = by;
		core.plugin.battleInfo.size = size;

		var bx2 = width - bx - size;
		var hero = core.material.images.hero;
		var h_width = core.material.icons.hero.width || 32,
			h_height = core.material.icons.hero.height;
		// 怪物每隔xms动一次
		var speed = core.values.animateSpeed - 50;

		// 勇士4帧 这里只用第2 4帧 全用上很鬼畜……
		// 新新里的勇士不会动所以关掉
		var heroAnimate = false;
		// 先绘制上第一帧 防止由于定时器导致box闪一下才出来
		core.drawImage(ctx, hero, 0, 0, h_width, h_height, bx2, by, size, size);
		core.strokeRect(ctx, bx2, by, size, size, strokeStyle, 2);

		var enemy = core.status.hero.battle_enemy || {};
		var enemyName = "敌人";
		enemyName = core.material.enemys[enemy.id].name;

		var font = (isItalic ? "italic " : "") + (isBold ? "bold " : "") + fontSize + "px myFont1";
		core.setTextAlign(ctx, "center");
		core.fillText(ctx, enemyName, bx + size / 2, by - fontSize * 3 / 4, ncolor, font);
		core.fillText(ctx, "勇者", bx2 + size / 2, by - fontSize * 3 / 4, ncolor, font);

		// VS标志
		core.fillText(ctx, "VS", ctx.canvas.width / 2, by - fontSize * 3 / 4, "white", "italic bold 22px myFont1");
		core.setTextAlign(ctx, "left");

		if (heroAnimate) {
			var animate = 4,
				a = 4;
			if (!(core.isReplaying() || main.replayChecking)) {
				var box_hero = window.setInterval(function () {
					core.clearMap(ctx, bx2 - 2, by - 2, size + 4, size + 4);
					if (!core.status.hero.isBattling) clearInterval(box_hero);
					core.drawImage(ctx, hero, (a - 1) * h_width, 0, h_width, h_height, bx2, by, 32, h_height);
					core.strokeRect(ctx, bx2, by, size, size, strokeStyle, 2);
					a += 2;
					if (a > animate) a = 2;
				}, speed);
			}
		}

		var block = core.getBlockInfo(enemy.id || "greenSlime");
		var b_width = 32,
			b_height = block.height;
		var animate = block.animate,
			aa = 1;
		var enemyType = "enemys";
		if (b_height == 48) enemyType = "enemy48";
		var b_pos = block.posY;
		var enemyImage = core.material.images[enemyType];

		// 绘制第一帧 理由同上
		core.drawImage(ctx, enemyImage, (aa - 1) * b_width, b_pos * b_height, b_width, b_height, bx, by, size, size);
		core.strokeRect(ctx, bx, by, size, size, strokeStyle, 2);
		aa++;

		if (!(core.isReplaying() || main.replayChecking)) {
			var box_enemy = window.setInterval(function () {
				core.clearMap(ctx, bx - 2, by - 2, size + 4, size + 4);
				if (!core.status.hero.isBattling) {
					clearInterval(box_enemy);
				}
				core.drawImage(ctx, enemyImage, (aa - 1) * b_width, b_pos * b_height, b_width, b_height, bx, by, size, size);
				core.strokeRect(ctx, bx, by, size, size, strokeStyle, 2);
				aa++;
				if (aa > animate) aa = 1;
			}, speed);
		}
		core.battle_battling_draw(null, enemy);
	};

	this.battle_battling_draw = function (hero, enemy) {
		if (typeof enemy == "string") enemy = core.material.enemys[enemy];
		if (!hero) hero = core.status.hero;

		var ctx = core.getContextByName("__battle__");
		if (main.replayChecking) {
			if (core.status.hero.hp > 0 && core.status.hero.battle_enemy.hp <= 0) {
				core.insertAction({
					"type": "break"
				});

				var battleEnd = function () {
					var damage = core.status.hero.hp - core.status.battle_heroHp;
					core.status.hero.statistics.battleDamage += damage;
					core.material.enemys.__testMonster__ = core.clone(enemy);
					var testEnemy = core.material.enemys.__testMonster__;
					if (core.hasSpecial(testEnemy, 13)) {
						if (!core.status.hero.battle_triggerWeak || flags.poison) {
							if (testEnemy.special instanceof Array) {
								testEnemy.special.splice(testEnemy.special.indexOf(13), 1);
							} else testEnemy.special = null;
						}
					}
					if (core.hasSpecial(testEnemy, 12)) {
						if (!core.status.hero.battle_triggerPoison || flags.weak) {
							if (testEnemy.special instanceof Array) {
								testEnemy.special.splice(testEnemy.special.indexOf(12), 1);
							} else testEnemy.special = null;
						}
					}
					var id = "__testMonster__";
					var x = flags.__loc__[0];
					var y = flags.__loc__[1];
					// 战后事件
					core.afterBattle(id, x, y, flags.__callback__);
				};
				// 录像直接跳过
				if (core.isReplaying()) {
					var enemy = core.status.hero.battle_enemy;
					if (enemy == null) return;
					battleEnd();
					return core.battle_exit();
				}
			}
		}
		if (!ctx) return;
		core.setAlpha(ctx, 1);

		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top,
			bx = info.bx,
			by = info.by,
			size = info.size,
			lineWidth = info.lineWidth;
		core.setTextAlign(ctx, "left");
		var bx2 = width - bx - size;
		ctx.clearRect(bx + size + 2, by - 4, bx2 - (bx + size + 2) - 1, height - by);

		// 字体设置 同上
		var textFontSize = 18;
		var isBold = false;
		var isItalic = false;
		var textFont = (isItalic ? "italic " : "") + (isBold ? "bold " : "") + textFontSize + "px myFont1";

		// 绘制的能力项 可以仿照增加 格式为"勇士属性英文": "勇士属性名"
		var toDraw = {
			"hp": "体力",
			"atk": "攻击力",
			"def": "防御力"
		};

		// 绘制行距
		var lineHeight = 12;

		var text = "";
		var offsetY = 0;
		var tx = bx + size + 8,
			ty = by + textFontSize * 3 / 4;
		for (var status in toDraw) {
			core.fillText(ctx, toDraw[status] + ": " + (enemy[status] || 0), tx, ty + offsetY, "white", textFont);
			offsetY += textFontSize + lineHeight;
		}
		offsetY = 0;
		core.setTextAlign(ctx, "right");
		for (var status in toDraw) {
			core.fillText(ctx, (core.getRealStatusOrDefault(hero, status) || 0) + " :" + toDraw[status], width - tx, ty + offsetY, "white", textFont);
			offsetY += textFontSize + lineHeight;
		}
		offsetY -= textFontSize + lineHeight;
		core.setTextAlign(ctx, "center");
		var text2 = flags.battleSpeed == 9 ? "[减速(P)]" : "[加速(P)]";
		// 放在顶行 VS 与“勇者”之间（字号放大后第三行中间已放不下）
		var speedX = Math.round(width * 0.69), speedY = by - 19 * 3 / 4;
		ctx.clearRect(speedX - 42, speedY - 18, 84, 22);
		core.fillText(ctx, text2, speedX, speedY, "white", "16px myFont1");
		core.setTextAlign(ctx, "left");
		var bx2 = width - bx - size;
		// 撤退(Q)
		var hp = (core.status.hero.battle_enemy || {}).hp == null ? 1 : (core.status.hero.battle_enemy || {}).hp;
		if (core.status.hero.hp <= 0) {
			core.playSound("gameover.mp3");
			return core.lose("战斗失败");
		}
		if (!core.status.hero.isBattling && hp > 0) {
			core.fillText(ctx, " 撤退(Q)", bx2, ty + offsetY, "yellow", "17px myFont1"); //yzm：原为"italic bold 16px myFont1"
		} else if (core.status.hero.hp > 0 && core.status.hero.battle_enemy.hp <= 0) {
			// 退出时显示下拉框和enter退出
			var w = core.calWidth(ctx, " 撤退(Q)", "italic bold 16px myFont1");
			core.clearMap(ctx, bx2 - 1, ty + offsetY - 16, w + 3, 20);
			core.fillText(ctx, "-Enter-", bx2, ty + offsetY, "white", "16px verdana");
			core.insertAction({
				"type": "break"
			});

			var battleEnd = function () {
				var damage = core.status.hero.hp - core.status.battle_heroHp;
				core.status.hero.statistics.battleDamage += damage;
				core.material.enemys.__testMonster__ = core.clone(enemy);
				var testEnemy = core.material.enemys.__testMonster__;
				if (core.hasSpecial(testEnemy, 13)) {
					if (!core.status.hero.battle_triggerWeak || flags.poison) {
						if (testEnemy.special instanceof Array) {
							testEnemy.special.splice(testEnemy.special.indexOf(13), 1);
						} else testEnemy.special = null;
					}
				}
				if (core.hasSpecial(testEnemy, 12)) {
					if (!core.status.hero.battle_triggerPoison || flags.weak) {
						if (testEnemy.special instanceof Array) {
							testEnemy.special.splice(testEnemy.special.indexOf(12), 1);
						} else testEnemy.special = null;
					}
				}
				var id = "__testMonster__";
				var x = flags.__loc__[0];
				var y = flags.__loc__[1];
				// 战后事件
				core.afterBattle(id, x, y, flags.__callback__);
			}
			// 录像直接跳过
			if (core.isReplaying()) {
				var enemy = core.status.hero.battle_enemy;
				if (enemy == null) return;
				battleEnd();
				return core.battle_exit();
			}
			core.status.hero.battleStatus = "afterBattle";
			if (core.plugin.mapBattleOn()) {
				var _money = core.hasItem('coin') ? 2 * enemy.money : enemy.money;
				var _name = (core.material.enemys[enemy.id] || enemy).name;
				var _loc = flags.__loc__ || [];
				var _revived = core.plugin.isRevivedKill(enemy.id, _loc[0], _loc[1]);
				core.lockControl();
				core.playSound("slide.mp3");   // 原胜利下拉框的音效
				// 和原来的胜利框一样：等本场战斗事件退出后再结算战后事件，
				// 否则战后剧情会插进战斗事件中间，剧情触发的战斗会卡住
				setTimeout(function () {
					battleEnd();
					core.battle_exit();
					if (_revived) core.drawTip(_name + " 又被打败了（复活的不再掉落）");
					else core.drawTip(_name + " 被打败了，获得 " + _money + " 金币、" + (enemy.experience || 0) + " 经验");
				}, 0);
				return;
			}
			var ch = 0;
			var canvas = ctx.canvas;
			var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
			core.lockControl();
			core.playSound("slide.mp3");
			// 战斗结束后的下拉框
			if (!core.isReplaying()) {
				var winText = setInterval(function () {
					ch += 4;
					core.resizeCanvas("__battle__", width, height + ch);
					ctx.putImageData(data, 0, 0);
					if (ch > 32) {
						if (flags.battleAutoEnds) core.status.hero.battleStatus = "end";
						clearInterval(winText);
					}
					core.fillText(ctx, "胜利!!", 10, height + 23 + lineWidth / 2, "white", "bold 28px myFont1");
					core.fillText(ctx, "经 验 值：" + enemy.experience, 105, height + 20 + lineWidth / 2, "white", "bold 17px myFont1");
					if (core.hasItem('coin')) core.fillText(ctx, "金 币：" + 2*enemy.money, 255, height + 20 + lineWidth / 2, "white", "bold 17px myFont1");
					else core.fillText(ctx, "金 币：" + enemy.money, 255, height + 20 + lineWidth / 2, "white", "bold 17px myFont1");					
					core.drawLine(ctx, lineWidth / 2, height + ch, width - lineWidth / 2, height + ch, "#40E0D0", lineWidth);
					core.drawLine(ctx, lineWidth / 2, height, lineWidth / 2, height + ch, "#40E0D0", lineWidth);
					core.drawLine(ctx, width - lineWidth / 2, height, width - lineWidth / 2, height + ch, "#40E0D0", lineWidth);
				}, 50);
				var frame = 0;
				core.fillText(ctx, "-Enter-", bx2, ty + offsetY, "white", "16px verdana");
				var slashText = setInterval(function () {
					if (ch <= 32) return;
					frame++;
					if (frame > 8) frame = 1;
					if (core.status.hero.battleStatus == "end") {
						core.setAlpha(ctx, 1);
						clearInterval(slashText);
						clearInterval(winText);
						battleEnd();
						core.battle_exit();
					}
					if (frame != 1 && frame != 5) return;
					core.setAlpha(ctx, Math.ceil(frame / 4) * 0.5);
					var w = core.calWidth(ctx, "-Enter-", "16px verdana");
					core.clearMap(ctx, bx2 - 1, ty + offsetY - 14, w + 3, 16);
					core.fillText(ctx, "-Enter-", bx2, ty + offsetY, "white", "16px verdana");
					core.setAlpha(ctx, 1);
				}, 100);
			}
		}
	};

	this.battle_enemyInfo = function (hero, enemy) {
		if (!hero) hero = core.status.hero;
		// 回合前动画处理

		var animate = enemy.animate || "hand";
		var originAnimate = animate;
		// 攻击次数
		var times = 1;
		var hero_def = core.getRealStatusOrDefault(hero, "def");
		var hero_atk = core.getRealStatusOrDefault(hero, "atk");
		// 伤害计算
		var mon_atk = enemy.atk,
			mon_def = enemy.def,
			mon_cri = enemy.cri,
			mon_special = enemy.special;

		var ma = mon_atk;
		md = mon_def;
		hdd = hero_def;
		var atkm = core.getFlag('atkm', 0),
			defm = core.getFlag('defm', 0); //录入攻防临界


		//if (per_damage <= 0 && (mon_atk + defm >= hero_def)) per_damage = 0; //防御临界


		var per_damage_phy = Math.max(0, mon_atk - hero_def);
		var per_damage_mage = mon_atk;
            if(core.getFlag('antimage',0)==1){
			per_damage_mage = Math.ceil(mon_atk/2);
		}
            if(core.getFlag('antimage2',0)==1){
			per_damage_mage = Math.ceil(mon_atk/4);
		}              
		if(core.getFlag('antimage4',0)==1){
			per_damage_mage = 0;//Math.ceil(mon_atk/16);
		}
		var per_damage;
		if (core.hasSpecial(mon_special, 2)) {
			per_damage_phy = 0;
			per_damage = per_damage_mage;
		}else	if (enemy.id=='whiteKing' || enemy.id=='greenKing' || enemy.id=='yellowKing'){
			per_damage = per_damage_mage + per_damage_phy;
		}else{
			per_damage_mage = 0;
			per_damage = per_damage_phy;
		}

		// 反击
		if (core.hasSpecial(mon_special, 8)) {
			per_damage += hero_atk * 0.008;
		}

		// 二连击
		if (core.hasSpecial(mon_special, 4)) times = 2;

		// 三连击
		if (core.hasSpecial(mon_special, 5)) times = 3;

		// n连击
		if (core.hasSpecial(mon_special, 6)) times = enemy.n || 4;
		var isCri = false;
		if (mon_cri != null && mon_cri > 0) {
			per_damage += Math.ceil(mon_cri/100*per_damage);
			isCri = true;
		}

		var anis = animate;

		if (per_damage == 0) { animate = "block"; } else animate = animate + (isCri ? "C" : "N");

		return {
			"per_damage": per_damage,
			"per_damage_phy": per_damage_phy,
			"per_damage_mage": per_damage_mage,
			"animate": animate,
			"anis": anis,
			"times": times
		};
	};

	this.battle_heroInfo = function (hero, enemy) {
		if (!hero) hero = core.status.hero;
		// 攻击次数
		var times = 1;
		// 动画
		var animate = core.status.hero.battleAnimate;
		var originAnimate = animate;
		// 勇士属性
		var hero_cri = core.getRealStatusOrDefault(hero, "cri"),
			hero_atk = core.getRealStatusOrDefault(hero, "atk"),
			hero_def = core.getRealStatusOrDefault(hero, "def");

		var mon_atk = enemy.atk,
			mon_def = enemy.def,
			mon_cri = enemy.cri,
			mon_special = enemy.special;

		// 魔攻
		if (core.hasSpecial(mon_special, 2) && core.getFlag('antimage3',0)==1){
			mon_def = Math.ceil(mon_def/2);
		}

		var atkm = core.getFlag('atkm', 0),
			defm = core.getFlag('defm', 0); //录入攻防临界

		//十字架：对丧尸系和吸血鬼无视防御（与 functions.js 的伤害计算一致）
		if (core.getFlag('hasCross',0)==1) {
			if(enemy.id == "zombie" || enemy.id == "zombieKnight" || enemy.id == "vampire"){
				mon_def = 0;
			}
		}

		var hpd = Math.max(0, hero_atk - mon_def);
		var hero_per_damage = Math.max(0, hero_atk - mon_def);

		var jf = Math.max(0, hero_atk - mon_def * 0.23 - hpd) * 1;

		//攻击临界
		var crit = false, extra = false;
		if (hero_per_damage <= 0 && (hero_atk + atkm >= mon_def)) {
			hero_per_damage = 0;
		}
		if (core.plugin.hasProof('brave')){
			crit = true;
	            hero_per_damage += Math.ceil(0.25*hero_per_damage);
		}
		if (core.plugin.hasProof('brave')){
			if(core.getFlag('proof_lv') > 1) {
				times = 2;
			}
		}

		if (core.plugin.hasProof('brave')) {
			if(core.getFlag('proof_lv') == 3){
				var extraDamage = Math.ceil(hero_atk*0.12);
				hero_per_damage += extraDamage;
				extra = true;
			}
		}


		if (hero_per_damage == 0) animate = "block";
		else animate = animate + (crit ? "C" : "N");

            //hero_per_damage += Math.ceil(hero_cri*hero_per_damage/100);

		return {
			"mon_atk": mon_atk,
			"extraDamage": extraDamage,
			"hpd": hpd,
			"hero_per_damage": hero_per_damage,
			"jf": jf,
			"animate": animate,
			"times": times,
			"extra": extra
		};
	};

	this.battle_exit = function () {
		core.status.hero.isBattling = false;
		core.status.hero.battle_enemy = null;
		core.status.hero.battleStatus = null;
		core.status.hero.battle_triggerWeak = null;
		core.status.hero.battle_triggerPoison = null;
		core.status.hero.battle_randNum = null;
		core.clearMap("__battle__");
		core.deleteCanvas("__battle__");
		core.unLockControl();
		delete flags.__callback__;
		delete flags.__loc__;
	};


	this.battle_missAnimate = function (name) {
		core.playSound("miss.mp3");
		// miss动画
		if (flags.inMiss) return;
		if (core.isReplaying()) return;
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top,
			bx = info.bx,
			by = info.by,
			lineWidth = info.lineWidth,
			size = info.size;
		var bx2 = width - bx - size;
		var ctx = core.createCanvas("__battleAnimate__", left, top, width, height, 67);
		var offsetY = 0;
		ctx.textBaseline = "bottom";
		var x = lineWidth + 3;
		if (name == "hero") {
			x = width - 3;
			ctx.textAlign = "right";
		}
		//core.fillText(ctx, "MISS!!", x, by + size + lineWidth, "rgb(228,0,0)", "italic 27px myFont");
		var animate = setInterval(function () {
			flags.inMiss = true;
			offsetY += 2;
			core.relocateCanvas("__battleAnimate__", left, top - offsetY);
			if (offsetY > 8) {
				clearInterval(animate);
				delete core.animateFrame.asyncId[animate];
				flags.inMiss = false;
				core.clearMap("__battleAnimate__");
				core.deleteCanvas("__battleAnimate__");
			}
		}, 40);
		core.animateFrame.asyncId[animate] = true;
	};

	this.battle_damageAnimate = function (name, damage) {
		damage = parseInt(damage);
		if (core.isReplaying()) return;
		if (core.plugin.mapBattleOn()) return; // 地图战斗不显示伤害数字
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top,
			bx = info.bx,
			by = info.by,
			size = info.size;
		if (name != "hero") bx = width - bx - size;
		if (core.plugin.mapBattleOn()) {
			// 'hero' 表示勇士造成的伤害，飘在怪物身上；否则飘在勇士身上
			var _t = name == "hero" ? (flags.__loc__ || [0, 0]) : [core.getHeroLoc('x'), core.getHeroLoc('y')];
			left = 0; top = 0; width = core.__PIXELS__; height = core.__PIXELS__;
			bx = _t[0] * 32; by = _t[1] * 32; size = 32;
		}
		var ctx = core.createCanvas("__battleDamage__", left, top, width, height, 71);
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		var frame = 13;
		var mode = core.applyEasing("easeIn");
		var animate = setInterval(function () {
			frame--;
			if (frame > 0) {
				var x = bx + 5,
					y = by + size - 10;
				core.clearMap(ctx);
				if (frame >= 8) {
					var upFrame = 13 - frame;
					x += (size / 2 - 5) * upFrame / 5;
					y -= (size - 10) * upFrame / 5;
				} else {
					var downFrame = 8 - frame;
					x = bx + size / 2 + (size / 2 - 5) * (downFrame / 8);
					y = by + (size + 18) * (downFrame / 8);
				}
				var rgb = Math.floor(255 - 255 * mode((13 - frame) / 13)),
					font = "bold " + Math.floor(9 + 18 * (13 - frame) / 13) + "px myFont";
                        if (damage >=0) {
					core.fillText(ctx, damage, x, y, "rgb(255," + rgb + "," + rgb + ")", font);
				}else {
					core.fillText(ctx, -damage, x, y, "rgb(" + rgb + ",255," + rgb + ")", font);
				}
				//core.relocateCanvas("__battleAnimate__", left, top - offsetY);
			} else {
				if (frame > -10) return delete core.animateFrame.asyncId[animate];;
				clearInterval(animate);
				core.clearMap("__battleDamage__");
			}
		}, flags.battleSpeed > 20 ? 20 : 10);
		core.animateFrame.asyncId[animate] = true;
	}
	////// 变速移动 //////
	this.applyEasing = function (name) {
		var list = {
			"easeIn": function (t) {
				return Math.pow(t, 3);
			},
			"easeOut": function (t) {
				return 1 - Math.pow(1 - t, 3);
			},
			"easeInOut": function (t) {
				// easeInOut试了一下感觉二次方效果明显点
				if (t < 0.5) return Math.pow(t, 2) * 2;
				else return 1 - Math.pow(1 - t, 2) * 2;
			},
			"linear": function (t) {
				return t
			}
		}
		return list[name] || list.linear;
	}

	this.battle_heroAttack = function () {
		if (core.status.hero.battleAnimate == null) core.status.hero.battleAnimate = "hand";
		// 回合开始 设置战斗动画
		var enemy = core.status.hero.battle_enemy;
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top,
			bx = info.bx,
			by = info.by,
			size = info.size;
		var bx2 = width - bx - size;
		core.status.hero.battle_heroTurn++;
		var info = core.battle_heroInfo(null, enemy);
		var times = info.times;
		var attackTimes = 0;
		var heroBox_x = (bx2 + left + size / 2) / 32 - 0.5,
			heroBox_y = (by + top + size / 2 - 4) / 32 - 0.5;
		var enemyBox_x = (bx + left + size / 2) / 32 - 0.5,
			enemyBox_y = (by + top + size / 2 - 4) / 32 - 0.5;
		if (core.plugin.mapBattleOn()) {
			var _loc = flags.__loc__ || [0, 0];
			enemyBox_x = _loc[0]; enemyBox_y = _loc[1];
			heroBox_x = core.getHeroLoc('x'); heroBox_y = core.getHeroLoc('y');
		}
		// 回合结束 执行该回合战斗
		while (times > 0) {
			var todo = [];
			attackTimes++;
			var info = core.battle_heroInfo(null, enemy);

			var hero_per_damage = info.hero_per_damage,
				animate = info.animate;
			if (animate == "miss") {
				todo.push({
					"type": "function",
					"function": "function(){core.battle_missAnimate();}"
				});
			} else {
				todo.push({
					"type": "animate",
					"name": animate,
					"async": true,
					"loc": [enemyBox_x, enemyBox_y]
				});
			}
			if (info.extra) {
				todo.push({
					"type": "animate",
					"name": "mega",
					"async": true,
					"loc": [heroBox_x, heroBox_y]
				});
			}

			todo.push({
				"type": "function",
				"function": "function(){core.battle_damageAnimate('hero', " + hero_per_damage + ")}"
			})
			times--;
			if (todo.length > 0) {
				todo.push({
					"type": "while",
					"condition": "!core.same({},core.animateFrame.asyncId)",
					"data": [{
						"type": "sleep",
						"time": 10
					}, ],
				}, {
					"type": "waitAsync"
				}, {
					"type": "function",
					"function": "function(){core.plugin.sageHeroHit(" + hero_per_damage + ");core.battle_battling_draw(null, core.status.hero.battle_enemy);}"
				});
				core.insertAction(todo);
			}
		}
	};

	this.battle_enemyAttack = function () {
		if (core.status.hero.battleAnimate_enemy == null) core.status.hero.battleAnimate_enemy = "hand";
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top,
			bx = info.bx,
			by = info.by,
			size = info.size;
		var bx2 = width - bx - size;

		// 回合开始
		var enemy = core.status.hero.battle_enemy;
		core.status.hero.battle_enemyTurn++;
		var info = core.battle_enemyInfo(null, enemy);
		var times = info.times;
		var attackTimes = 0;

		// 回合结束 执行该回合战斗
		var heroBox_x = (bx2 + left + size / 2) / 32 - 0.5,
			heroBox_y = (by + top + size / 2 - 4) / 32 - 0.5;
		var enemyBox_x = (bx + left + size / 2) / 32 - 0.5,
			enemyBox_y = (by + top + size / 2 - 4) / 32 - 0.5;
		if (core.plugin.mapBattleOn()) {
			var _loc = flags.__loc__ || [0, 0];
			enemyBox_x = _loc[0]; enemyBox_y = _loc[1];
			heroBox_x = core.getHeroLoc('x'); heroBox_y = core.getHeroLoc('y');
		}
		// 一回合攻击times次
		var maxEnemyHp = flags.enemyHp;
		var simEnemyHp = enemy.hp; // 按出手顺序模拟怪物血量：怪物在哪一击倒下，本回合就停在哪一击
		while (times > 0) {
			var todo = [];
			attackTimes++;
			var info = core.battle_enemyInfo(null, enemy);


			function attackEnd() {
				if (todo.length > 0) {
					if (type) {
						if (animate == "bossC")
							core.playSound("bossC.mp3")
						if (animate == "bossN")
							core.playSound("bossNn.mp3")
					}
					todo.push({
						"type": "while",
						"condition": "!core.same({},core.animateFrame.asyncId)",
						"data": [{
							"type": "sleep",
							"time": 10
						}, ],
					}, {
						"type": "waitAsync"
					}, {
						"type": "function",
						"function": "function(){core.status.hero.hp -= " + per_damage + ";core.updateStatusBar();core.battle_battling_draw(null,core.status.hero.battle_enemy);\nif (core.status.hero.hp < 0) {\n\tif (core.hasItem(\"cross\")) {\n\t\tcore.removeItem(\"cross\", 1);\n\t\tcore.status.hero.hp += 2000;\n\t}\n\tif (core.status.hero.hp <= 0) {\n\t\tcore.status.hero.hp = 0;\n\t\tcore.updateStatusBar();\n\t\tcore.status.hero.isBattling = false;\n\t\tcore.insertAction([{\n\t\t\t\"type\": \"animate\",\n\t\t\t\"name\": " + core.status.hero.battleAnimate + ",\n\t\t\t\"loc\": [" + heroBox_x + ", " + heroBox_y + "]\n\t\t}, {\n\t\t\t\"type\": \"exit\"\n\t\t}], null, null, function () {\n\t\t\tcore.battle_battling_draw(null, core.status.hero.battle_enemy);\n\t\t});\n\t}\n}\n}"
					});
				}
				core.insertAction(todo);
			}


			var per_damage = info.per_damage,
				per_damage_phy = info.per_damage_phy,
				animate = info.animate,
				anis = info.anis;

			var pdd = per_damage;

			var info = core.battle_heroInfo(null, enemy);
			var jf = info.jf;
			var extraDamage = info.extraDamage,
				mon_atk = info.mon_atk,
				hero_per_damage = info.hero_per_damage,
				hpd = info.hpd;


			// 三个章 贤者sage 勇者brave 霸者tyrant
			// 啊这 地狱般的ifelse 我自己也看不懂了 // yzm：我更看不懂了，修你猫猫头，不修了
			var type = core.getFlag('proof');
			var proofAnimate = "mage";
			var proovAnimate = "sword";
			var prooaAnimate = "tyrantfang";
			var lv = core.getFlag('proof_lv', 0);
			var bfAnimate = "bravefang";
			var sfAnimate = "sagefang";
			var shAnimate = "sagehp";

			var sfanAnimate = "sagefan";
			var sanlAnimate = "mega";
			var smiao = 0;



			if (core.plugin.hasProof('brave') && per_damage == 0 && core.getFlag("xinjing", 0) == 1) {
				todo.push({ "type": "stopSound" })
				todo.push({
					"type": "animate",
					"name": bfAnimate,
					"async": true,
					"loc": [heroBox_x, heroBox_y]
				});

			}

			if (core.plugin.hasProof('tyrant')) {
				proofAnimate = "tyrant";
				prooaAnimate = "tyrantfang";
				proovAnimate = "bzz2";
				var tyrantDamage;
				if (per_damage == 0) {
					todo.push({ "type": "stopSound" })			
					todo.push({
							"type": "animate",
							"name": prooaAnimate,
							"async": true,
							"loc": [heroBox_x, heroBox_y]
					});
				}
				if (lv == 3) {
					if (!core.hasSpecial(enemy, 2)) {
						tyrantDamage = Math.ceil(0.25*core.getRealStatus('atk'))+Math.ceil(0.1*core.getRealStatus('atk'));
						simEnemyHp = Math.max(0, simEnemyHp - tyrantDamage);
						todo.push({ "type": "function", "function": "function(){var e=core.status.hero.battle_enemy;if(e)e.hp=Math.max(0,e.hp-" + tyrantDamage + ");}" });
						todo.push({
							"type": "animate",
							"name": proovAnimate,
							"async": true,
							"loc": [enemyBox_x, enemyBox_y]
						});
					}
				}
				else if (lv == 2) {
					if (!core.hasSpecial(enemy, 2)) {
						tyrantDamage = Math.ceil(0.25*core.getRealStatus('atk'));
						//tyrantDamage = Math.min(Math.ceil(0.12*core.status.hero.def),tyrantDamage);
						todo.push({
							"type": "animate",
							"name": proofAnimate,
							"async": true,
							"loc": [enemyBox_x, enemyBox_y]
						});
						simEnemyHp = Math.max(0, simEnemyHp - tyrantDamage);
						todo.push({ "type": "function", "function": "function(){var e=core.status.hero.battle_enemy;if(e)e.hp=Math.max(0,e.hp-" + tyrantDamage + ");}" });
					}
				}
				if (!core.hasSpecial(enemy, 2)) {
					todo.push({
						"type": "animate",
						"name": prooaAnimate,
						"async": true,
						"loc": [heroBox_x, heroBox_y]
					});
					per_damage = core.battle_enemyInfo({
						"def": Math.ceil(core.status.hero.def + core.getRealStatus('atk') * 0.25)
					}, enemy).per_damage;
					if (per_damage == 0 && (hpd > 0 || tyrantDamage >0)) {
						enemy.hp = 0; simEnemyHp = 0;
					}
				}

			}
			var rawHit = per_damage;
			if (core.plugin.hasProof('sage')) {
				// 贤者：生命护盾（本场第一次受到的伤害减少 50%），之后受到的伤害 ×0.75
				if (per_damage == 0) {
					todo.push({ "type": "stopSound" })
					todo.push({ "type": "animate", "name": sfAnimate, "async": true, "loc": [heroBox_x, heroBox_y] });
				}
				var sageHealHit = false; // 二阶起护盾触发的这一击（用护盾音效）
				if ((flags.sageShield || 0) < (lv >= 3 ? 2 : 1)) {
					// 生命护盾：本场战斗前 1 次（三阶前 2 次）受击时触发。一阶：这一击伤害减少 50%；二阶起：抵消这一击，并对怪物造成其当前生命 25% 的伤害（不吸取、不回复）
					flags.sageShield = (flags.sageShield || 0) + 1;
					var sageRaw = per_damage;
					per_damage = Math.floor(sageRaw * 0.5);
					if (lv >= 2) {
						per_damage = 0;
						sageHealHit = true;
						var sageHurt = Math.ceil(simEnemyHp * 0.25);
						simEnemyHp -= sageHurt;
						todo.push({ "type": "function", "function": "function(){var e=core.status.hero.battle_enemy;if(e)e.hp=Math.max(0,e.hp-" + sageHurt + ");}" });
						todo.push({ "type": "animate", "name": shAnimate, "async": true, "loc": [heroBox_x, heroBox_y] });
					}
					if (per_damage == 0) animate = "miss";
				} else {
					per_damage = Math.floor(per_damage*0.75);
				}
				// 非护盾的受击：各阶音效都与一阶一样
				if (!sageHealHit) todo.push({ "type": "animate", "name": sanlAnimate, "async": true, "loc": [heroBox_x, heroBox_y] });
			}

			if (animate == "miss") {
				todo.push({
					"type": "function",
					"function": "function(){\ncore.battle_missAnimate(\"hero\");\n}"
				});
			} else {
				todo.push({
					"type": "animate",
					"name": animate,
					"async": true,
					"loc": [heroBox_x, heroBox_y]
				});
			}
			if (rawHit == 0 && hpd > 0) {
				enemy.hp = 0; simEnemyHp = 0;
			}
			todo.push({
				"type": "function",
				"function": "function(){core.battle_damageAnimate(null, " + per_damage + ")}"
			})
			times--;
			if (simEnemyHp <= 0) times = 0;
			attackEnd();
		}
	};

	////// 回放 //////
	core.control.replay = function (force) {
		if (!core.isPlaying() || !core.isReplaying() ||
			core.status.replay.animate || core.status.event.id) return;
		if (core.status.replay.pausing && !force) return;
		if (flags.waitNext) {
			core.status.route.push(flags.waitNext);
			delete flags.waitNext;
		}
		if (core.status.replay.toReplay.length == 0)
			return this._replay_finished();
		this._replay_save();
		var action = core.status.replay.toReplay.shift();

		var nextAction = (core.status.replay.toReplay || [])[0] || "",
			next2Action = (core.status.replay.toReplay || [])[1] || "";
		if (next2Action == 'key:81') {
			var num = parseInt(nextAction.split('random:')[1]);
			var randRatio = 100;
			var randTimes = num * randRatio;
			for (var i = 0; i < randTimes; i++) {
				core.rand();
			}
			core.status.route.push(action);
			core.status.route.push(nextAction);
			core.status.route.push(next2Action);
			core.status.replay.toReplay.splice(0, 2);
			return core.replay();
		} else if (nextAction.indexOf('random:') == 0) {
			var num = parseInt(nextAction.split('random:')[1]);
			var randRatio = 100;
			var randTimes = num * randRatio;
			for (var ii = 0; ii < randTimes; ii++) { //yzm把变量名改成了ii
				core.rand();
			}
			core.status.replay.toReplay.shift();
			flags.waitNext = nextAction;
		}
		if (this._doReplayAction(action)) {
			return;
		}
		this._replay_error(action);
	};

	////// 幻境：进入时存下全部状态，离开时恢复；在幻境里任何死法都会醒来 //////
	this.inMagic = function (floorId) { return /^magic_\d+$/.test(floorId || core.status.floorId || ''); };
	var MAGIC_FLAGS = ['curWeapon', 'curArmor', 'battleAnimate', 'hasCross', 'startGear'];
	this.magicSnapshot = function () {
		var h = core.status.hero, snap = { hero: {}, flags: {} };
		['hp', 'hpmax', 'atk', 'def', 'mdef', 'money', 'experience', 'lv', 'mana', 'manamax'].forEach(function (k) { snap.hero[k] = h[k]; });
		snap.items = core.clone(h.items);
		snap.equipment = core.clone(h.equipment);
		MAGIC_FLAGS.forEach(function (k) { snap.flags[k] = core.clone(core.getFlag(k, null)); });
		core.setFlag('__magicSnap__', snap);
	};
	this.magicRestore = function () {
		var snap = core.getFlag('__magicSnap__');
		if (!snap) return;
		var h = core.status.hero;
		for (var k in snap.hero) h[k] = snap.hero[k];
		h.items = core.clone(snap.items);
		h.equipment = core.clone(snap.equipment);
		MAGIC_FLAGS.forEach(function (k) { core.setFlag(k, snap.flags[k]); });
		core.setFlag('__magicSnap__', null);
		core.setFlag('magicDone', 1); // 幻境只能进一次
		// 第一次从幻境出来：杰克回到 2 楼，勇士走到墙边就挖通地道
		if (!core.getFlag('thief2Free')) {
			core.setFlag('thief2Free', 1);
			core.showBlock(9, 6, 'floor_2');
			core.showBlock(11, 6, 'floor_2'); // 走到墙边 (11,6) 时杰克挖通地道
			core.hideBlock(5, 2, 'floor_11');
			core.hideBlock(6, 10, 'floor_19');
		}
		// 幻境是一场轮回：出来以后，下次进去一切从头开始
		core.floorIds.forEach(function (id) {
			if (core.plugin.inMagic(id) && core.status.maps[id]) core.status.maps[id] = core.maps.loadFloor(id);
		});
	};
	// 进入幻境时的状态：照 50 层魔塔开局（1000 血、100 攻防、神圣剑、神圣盾），另外多给 1 把黄钥匙，保证总能走到会死的地方
	this.magicEnterState = function () {
		var h = core.status.hero;
		h.hp = 1000; h.atk = 100; h.def = 100; h.mdef = 0; h.money = 0; h.experience = 0;
		h.items = { keys: { yellowKey: 1, blueKey: 0, redKey: 0 }, constants: { book: 1 }, tools: {}, equips: {} };
		h.equipment = [];
		core.setFlag('curWeapon', 'sword5');
		core.setFlag('curArmor', 'shield5');
		core.setFlag('battleAnimate', 'sword');
	};
	// 幻境里打怪照 50 层魔塔原版：不进回合制，撞上去“砰”一声直接结算
	var bangImg = null;
	this.magicBang = function (x, y) {
		core.playSound('bang.mp3');
		if (x == null || y == null) return;
		if (!bangImg) { bangImg = new Image(); bangImg.src = 'project/images/bang.png'; }
		var draw = function () {
			core.drawImage('animate', bangImg, 32 * x, 32 * y, 32, 32);
			setTimeout(function () { core.clearMap('animate', 32 * x, 32 * y, 32, 32); }, 100);
		};
		if (bangImg.complete) draw(); else bangImg.onload = draw;
	};
	this.magicBattle = function (id, x, y, force, callback) {
		core.saveAndStopAutomaticRoute();
		id = id || core.getBlockId(x, y);
		if (!id) return core.clearContinueAutomaticRoute(callback);
		var dmg = core.getDamage(id, x, y);
		if (dmg == null && !force) {
			core.drawTip(((core.material.enemys[id] || {}).name || "怪物") + "的防御太高，不可攻击");
			core.playSound("warning.mp3");
			return core.clearContinueAutomaticRoute(callback);
		}
		if (!core.status.event.id) core.autosave(true);
		if (!core.beforeBattle(id, x, y)) return core.clearContinueAutomaticRoute(callback);
		core.plugin.magicBang(x, y);
		if (dmg == null || dmg >= core.status.hero.hp) {
			core.status.hero.hp = 0;
			core.updateStatusBar();
			return core.events.lose("战斗失败");
		}
		core.plugin.__bang = true;
		try { core.afterBattle(id, x, y, callback); } finally { core.plugin.__bang = false; }
	};
	// 地下 6 楼：骑士队长打不过勇士，骑士领主现身，亲手处决骑士队长，再和勇士决斗
	// （写在插件里，避免编辑器清理空地上的战后事件）
	var _afterBattleLord = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleLord.apply(this, arguments);
		if (/^base_(plus_)?6$/.test(core.status.floorId) && rid == 'yellowKnight' && !core.hasFlag('lordSummoned') && x != null && y != null) {
			core.setFlag('lordSummoned', 1);
			// 从红门（楼下）进来：骑士队长打输后战斗结束，发放战利品，先出现楼梯，队长从楼梯逃走，
			// 骑士领主不出现；结束后打开所有机关门
			if (core.getFlag('redDoorB11', 0) == 1) {
				var loot = ((core.floors[core.status.floorId].afterBattle || {})['6,10'] || []).filter(function (e) {
					return e && typeof e == 'object' && e.type != 'setEnemy' && e.name != 'flag:beatDarkKnight'
						&& e.type != 'openDoor' && !(e.type == 'show' && !e.floorId && JSON.stringify(e.loc) == '[[6,1]]');
				});
				// 结束以后打开所有机关门
				var doors = [[6, 3], [6, 8], [4, 11], [8, 11]].map(function (d) {
					return { "type": "if", "condition": "core.getBlockId(" + d[0] + "," + d[1] + ") == 'specialDoor'",
						"true": [{ "type": "openDoor", "loc": d }], "false": [] };
				});
				core.setFlag('captainFled', 1);
				core.insertAction([
					{ "type": "sleep", "time": 50 },
					{ "type": "setBlock", "number": "yellowKnight", "loc": [[x, y]] },
					{ "type": "show", "loc": [[x, y]], "time": 0 },
					"\t[骑士队长,yellowKnight]咳……可恶，骑士团……竟然全败了……"
				].concat(loot).concat([
					{ "type": "show", "loc": [[6, 1]], "time": 500 },
					"\t[骑士队长,yellowKnight]撤、撤退！这种鬼地方，谁爱守谁守！",
					{ "type": "move", "loc": [x, y], "time": 200, "keep": false, "steps": x == 6 && y == 2 ? ["up"] : [] },
					{ "type": "hide", "loc": [[x, y]], "remove": true, "time": 0 },
					"\t[勇士,hero]……临阵脱逃？骑士的规矩，也不过如此。"
				]).concat(doors));
				return r;
			}
			// 主线：队长从 (6,9) 上前两步在 (6,7) 和勇士决斗，输了退回两步，骑士领主在他身后的 (6,10) 现身
			var back = (y == 7 && x == 6) ? ["down", "down"] : [];
			var cx = x, cy = y + back.length;
			core.insertAction([
				{ "type": "sleep", "time": 50 }, // 等战斗收尾把怪物移除后，再把队长放回来
				{ "type": "setBlock", "number": "yellowKnight", "loc": [[x, y]] },
				{ "type": "show", "loc": [[x, y]], "time": 0 },
				"\t[骑士队长,yellowKnight]咳……怎么可能……\n骑士团……竟然败给了一个人……",
				"\t[骑士队长,yellowKnight]不、不行……先撤！",
				{ "type": "move", "loc": [x, y], "time": 400, "keep": true, "steps": back },
				{ "type": "setBlock", "number": "darkKnight", "loc": [[6, 10]] },
				{ "type": "show", "loc": [[6, 10]], "time": 800 },
				"\t[骑士领主,darkKnight]想逃？……没用的东西。",
				"\t[骑士队长,yellowKnight]领、领主大人！属下……属下还能再战——",
				"\t[骑士领主,darkKnight]败给一个闯塔的人，骑士团的脸都被你丢尽了。\n来人，给我杀了他！",
				{ "type": "sleep", "time": 800 },
				"\t[骑士领主,darkKnight]……哼，一个能动手的都没有了。",
				{ "type": "playSound", "name": "swordC.mp3" },
				{ "type": "animate", "name": "swordC", "loc": [cx, cy] },
				{ "type": "hide", "loc": [[cx, cy]], "remove": true, "time": 300 },
				"\t[勇士,hero]……他是你的部下。",
				"\t[骑士领主,darkKnight]输了的人，就不配做我的部下。\n现在，轮到你了。按骑士的规矩——一对一。"
			]);
		}
		return r;
	};
	// 怪物手册的临界：只看“勇士需要攻击几次”。攻击力加到能少打一次的那个值才算一个临界，
	// 章、反击等其他效果带来的伤害变化不算临界（临界减伤里仍按完整伤害计算）。
	core.enemys.nextCriticals = function (enemy, number, x, y, floorId) {
		if (typeof enemy == 'string') enemy = core.material.enemys[enemy];
		number = number || 1;
		if (this.hasSpecial(enemy.special, 10)) return []; // 模仿
		var self = this, baseAtk = core.status.hero.atk;
		var infoAt = function (atk) {
			var i = self.getDamageInfo(enemy, { "atk": atk }, x, y, floorId);
			return (i == null || typeof i == 'number') ? null : i;
		};
		var info = this.getDamageInfo(enemy, null, x, y, floorId);
		var LIMIT = baseAtk + 100000;
		// 打不破防：找到刚好能打动的攻击
		if (info == null || typeof info == 'number' || this.hasSpecial(enemy.special, 3)) {
			if (info != null && typeof info != 'number') return [];
			var lo = baseAtk + 1, hi = LIMIT;
			if (infoAt(hi) == null) return [['?', '?']];
			while (lo < hi) { var mid = Math.floor((lo + hi) / 2); if (infoAt(mid) != null) hi = mid; else lo = mid + 1; }
			return [[lo - baseAtk, '?']];
		}
		// 只看“攻击次数（回合数）”：找回合数刚好变少的最低攻击（直接用实际伤害计算，章和装备效果都算进去）
		var list = [], curTurn = info.turn, from = baseAtk + 1;
		while (list.length < number && curTurn > 1) {
			var lo = from, hi = LIMIT, t = curTurn;
			var top = infoAt(hi);
			if (top == null || top.turn >= t) break;
			while (lo < hi) {
				var mid = Math.floor((lo + hi) / 2), m = infoAt(mid);
				if (m != null && m.turn < t) hi = mid; else lo = mid + 1;
			}
			var n = infoAt(lo);
			list.push([lo - baseAtk, Math.floor(info.damage - n.damage)]);
			curTurn = n.turn; from = lo + 1;
		}
		if (list.length == 0) list.push([0, 0]);
		return list;
	};
	// 幻境 1–9 层的怪（铁怪、黑暗大法师除外）：第一次打倒有金币和经验；离开这一层再回来就复活，复活后再打不掉落。
	// 这一层的铁怪被打倒后（铁怪格子的战后事件会设置 flag:steel_楼层名），这一层的怪不再复活。
	// 不复活的怪：铁怪、黑暗大法师
	var NO_REVIVE = ['steelRock', 'blackMagician'];
	var reviveOn = function (id, floorId) {
		return /^phant_(plus_)?[1-9]$/.test(floorId || '') && NO_REVIVE.indexOf(id) < 0 && !core.hasFlag('steel_' + floorId)
			&& !!core.material.enemys[id];
	};
	this.isRevivedKill = function (id, x, y) {
		return /^phant_(plus_)?[1-9]$/.test(core.status.floorId || '') && NO_REVIVE.indexOf(id) < 0 && x != null
			&& !!(core.getFlag('reviveSeen', {})[core.status.floorId + '@' + x + ',' + y]);
	};
	var _afterBattleRevive = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		if (!/^phant_(plus_)?[1-9]$/.test(core.status.floorId || '') || NO_REVIVE.indexOf(rid) >= 0 || x == null || y == null) return _afterBattleRevive.apply(this, arguments);
		var key = core.status.floorId + '@' + x + ',' + y;
		var seen = core.clone(core.getFlag('reviveSeen', {})), repeat = !!seen[key];
		var m0 = core.status.hero.money, e0 = core.status.hero.experience;
		var r = _afterBattleRevive.apply(this, arguments);
		if (repeat) { core.status.hero.money = m0; core.status.hero.experience = e0; core.updateStatusBar(); }
		seen[key] = rid; core.setFlag('reviveSeen', seen);
		if (reviveOn(rid, core.status.floorId)) { var dead = core.clone(core.getFlag('reviveDead', {})); dead[key] = rid; core.setFlag('reviveDead', dead); }
		return r;
	};
	this.reviveFloor = function (floorId) {
		var dead = core.clone(core.getFlag('reviveDead', {})), changed = false;
		for (var k in dead) {
			var p = k.split('@'); if (p[0] !== floorId) continue;
			if (core.hasFlag('steel_' + floorId) || NO_REVIVE.indexOf(dead[k]) >= 0) { delete dead[k]; changed = true; continue; } // 旧存档里记下的黑暗大法师也不复活
			var xy = p[1].split(',').map(Number);
			if (core.getBlockId(xy[0], xy[1], floorId) == null) {
				core.setBlock(dead[k], xy[0], xy[1], floorId);
				core.showBlock(xy[0], xy[1], floorId);
			}
			delete dead[k]; changed = true;
		}
		if (changed) core.setFlag('reviveDead', dead);
	};
	// 红门路线：骑士队长逃到地下 15 层，被骑士领主处决；在地下 15 层打倒骑士领主后，结算“打倒塔主”、
	// 幻境怪物加强（取地下 6 层骑士领主战后事件里的加强部分），并打开去地下 16 层的楼梯
	var _afterBattleB15 = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleB15.apply(this, arguments);
		if (/^base_(plus_)?15$/.test(core.status.floorId) && rid == 'darkKnight' && core.hasFlag('lordAtB15') && !core.hasFlag('beatDarkKnight')) {
			var buffs = ((core.floors[core.status.floorId.replace('15', '6')].afterBattle || {})['6,10'] || []).filter(function (e) {
				return e && typeof e == 'object' && e.type == 'setEnemy';
			});
			core.insertAction([
				{ "type": "sleep", "time": 50 },
				"\t[骑士领主,darkKnight]……又是这一剑。我明明知道它会来，却还是躲不开。\n你是个合格的战士。去吧……把我的奴隶，都放了吧。",
				{ "type": "addValue", "name": "flag:beatDarkKnight", "value": "1" },
				{ "type": "show", "loc": [[8, 4]], "time": 500 }
			].concat(buffs));
		}
		return r;
	};
	// 二周目：在地下层打倒黑暗骑士（骑士领主）后，章升到二阶（章的阶数是共用的，身上两枚章一起升）
	var _afterBattleR2Knight = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleR2Knight.apply(this, arguments);
		if (core.getFlag('round2', 0) == 1 && rid == 'darkKnight' && /^base_plus_/.test(core.status.floorId || '')
			&& core.hasFlag('proof') && core.getFlag('proof_lv', 1) < 2) {
			core.insertAction([
				{ "type": "function", "function": "function(){\ncore.setFlag('proof_lv', 2);\n}" },
				{ "type": "playSound", "name": "item.mp3" },
				{ "type": "tip", "text": "章提升到二阶" }
			], null, null, null, true);
		}
		return r;
	};
	// 二周目：在幻境最上层打倒黑暗大法师本体（phant_plus_10 的 (6,6)）后，章升到三阶
	var _afterBattleR2Mage = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleR2Mage.apply(this, arguments);
		if (core.getFlag('round2', 0) == 1 && rid == 'blackMagician' && core.status.floorId == 'phant_plus_10' && x == 6 && y == 6
			&& core.hasFlag('proof') && core.getFlag('proof_lv', 1) < 3) {
			core.insertAction([
				{ "type": "function", "function": "function(){\ncore.setFlag('proof_lv', 3);\n}" },
				{ "type": "playSound", "name": "item.mp3" },
				{ "type": "tip", "text": "章提升到三阶" }
			], null, null, null, true);
		}
		return r;
	};
	// 地下 4 层的骑士剑 (2,2)、骑士盾 (2,10)：从地下 5 层走暗道去地下 11 层以后才出现（两周目一样）
	this.showKnightGear = function (floorId) {
		[[2, 2], [2, 10]].forEach(function (p) {
			var b = core.getBlock(p[0], p[1], floorId, true);
			if (b && b.block.disable) core.showBlock(p[0], p[1], floorId);
		});
	};
	// 打败奴隶主（地下 5 层）：记下 flag，二周目 20 层四角法阵要用
	var _afterBattleSlaveMaster = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		if (rid == 'redSwordsman' && /^base_(plus_)?5$/.test(core.status.floorId || '')) core.setFlag('beatSlaveMaster', 1);
		return _afterBattleSlaveMaster.apply(this, arguments);
	};
	// 章：持有的章同时生效。至少激活过一枚章（flag:proof）后，身上持有的每一枚章都算数
	this.hasProof = function (kind) {
		var p = core.getFlag('proof', null);
		if (!p) return false;
		if (String(p).indexOf(kind) >= 0) return true;
		return core.hasItem('proof_' + kind);
	};
	// 勇士每打一下结算伤害
	this.sageHeroHit = function (base) {
		var e = core.status.hero.battle_enemy;
		if (e) e.hp = Math.max(0, e.hp - base);
	};
	// 幻境（phant 层）：每打倒一只怪，同种类的怪攻击 +4、防御 +4、生命 +16（复活后再打倒也算）；打倒黑暗大法师后不再变强。
	// 两种红衣法师（红衣大法师 great_magician、红衣巫师 redWizard）算同一种。
	// 单独设定的成长：幽灵 生命 +32、防御不变；灵骷髅 攻击 +8、防御不变；铁怪 生命不变
	var GROW_STATS = {
		slimeMan: { hp: 32, atk: 4, def: 0 },
		ghostSkeleton: { hp: 16, atk: 8, def: 0 },
		steelRock: { hp: 0, atk: 4, def: 4 }
	};
	var GROW_GROUP = { great_magician: ['great_magician', 'redWizard'], redWizard: ['great_magician', 'redWizard'] };
	var _afterBattleGrow = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleGrow.apply(this, arguments);
		if (/^phant_(plus_)?\d+$/.test(core.status.floorId || '') && core.material.enemys[rid] && !core.getFlag('beatDarkMage', 0)) { // 打倒黑暗大法师后不再变强
			var todo = [];
			(GROW_GROUP[rid] || [rid]).forEach(function (id) {
				if (!core.material.enemys[id]) return;
				var e = "core.material.enemys." + id + ".";
				// 默认：生命 +16、攻击 +4、防御 +4；GROW_STATS 里的单独定
				var g = GROW_STATS[id] || { hp: 16, atk: 4, def: 4 };
				// 法师（魔攻怪）攻击不变
				var atk = core.enemys.hasSpecial(core.material.enemys[id].special, 2) ? 0 : g.atk;
				if (g.hp) todo.push({ "type": "setEnemy", "id": id, "name": "hp", "value": e + "hp+" + g.hp });
				if (g.def) todo.push({ "type": "setEnemy", "id": id, "name": "def", "value": e + "def+" + g.def });
				if (atk) todo.push({ "type": "setEnemy", "id": id, "name": "atk", "value": e + "atk+" + atk });
			});
			core.insertAction(todo);
		}
		return r;
	};
	var _changingFloor = core.events.changingFloor;
	core.events.changingFloor = function (floorId, heroLoc, fromLoad) {
		if (main.mode != 'play') return _changingFloor.apply(this, arguments); // 编辑器里不改地图
		if (!fromLoad && core.status.floorId && core.status.floorId != floorId) core.plugin.reviveFloor(core.status.floorId);
		if (!fromLoad) {
			var from = core.status.floorId, toMagic = core.plugin.inMagic(floorId), fromMagic = core.plugin.inMagic(from);
			if (toMagic && !fromMagic) { core.plugin.magicSnapshot(); core.plugin.magicEnterState(); }
			else if (!toMagic && fromMagic) core.plugin.magicRestore();
		}
		// 已经走过暗道（旧存档、或上次没刷出来）时，进地下 4 层补上骑士剑盾
		if (!fromLoad && /^base_(plus_)?4$/.test(floorId) && core.hasFlag('enteredB11Altar')) {
			try { core.plugin.showKnightGear(floorId); } catch (e) { }
		}
		// 二周目：从地下 5 层走暗道（传送点）去地下 11 层，记为“走了暗道”；还没打败黑暗骑士的话，20 层四角的法阵重新熄灭
		if (!fromLoad && /^base_(plus_)?11$/.test(floorId) && core.status.floorId == floorId.replace('11', '5')) {
			core.setFlag('enteredB11Altar', 1);
			core.plugin.showKnightGear(floorId.replace('11', '4')); // 走暗道 = 选择先打骑士区域：地下 4 层的骑士剑、骑士盾出现
			// 一周目：章还没到二阶时，20 层的幻境入口关掉（落地就生效，不用等走到杰克那一格）
			if (core.getFlag('round2', 0) != 1 && core.getFlag('proof_lv', 0) < 2) {
				[[4, 4], [4, 8], [8, 4], [8, 8]].forEach(function (p) { core.hideBlock(p[0], p[1], 'floor_20'); });
				core.showBlock(6, 9, 'floor_20');
			}
		}
		if (!fromLoad && core.getFlag('round2', 0) == 1 && floorId == 'base_plus_11' && core.status.floorId == 'base_plus_5') {
			if (!core.hasFlag('beatDarkKnight')) {
				[[4, 4], [4, 8], [8, 4], [8, 8]].forEach(function (p) { core.hideBlock(p[0], p[1], 'floor_plus_20'); });
				core.showBlock(6, 9, 'floor_plus_20');
			}
		}
		// 最终战（地下 17 层中央）旧存档兼容：以前按 8 面计数。进层时按上下左右四格是否已清空重新计数，四面都清空就补上封印
		var d17 = floorId == 'base_17' ? 12 : 0; // 一周目地下 17 层已拼成大地图，中央块偏移 12
		if (/^base_(plus_)?17(_c)?$/.test(floorId) && core.hasFlag('diceShown') && !core.hasFlag('zenoSealed') && core.status.maps && core.status.maps[floorId]) {
			var dm = core.status.maps[floorId], cleared = 0;
			[[6, 5], [5, 6], [7, 6], [6, 7]].forEach(function (p) {
				var still = (dm.blocks || []).some(function (b) { return b.x == p[0] + d17 && b.y == p[1] + d17 && !b.disable && b.event && b.event.id == 'yellowKing'; });
				if (!still) cleared++;
			});
			core.setFlag('diceCross', Math.max(core.getFlag('diceCross', 0), cleared));
			if (cleared >= 4) {
				core.setFlag('zenoSealed', 1);
				['hp', 'atk', 'def'].forEach(function (k) {
					core.events.setEnemy('redKing', k, Math.ceil(core.material.enemys.redKing[k] / 10));
				});
			}
		}
		// 冰冻徽章（shoes）：持有时所有熔岩网（lavaNet）都可以通行
		core.plugin.applyShoes(floorId);
		// 二周目地下 5 层已去掉所有 NPC（杰克、仙子）。旧存档里存过的这层地图还带着它们，进层时清掉
		if (floorId == 'base_plus_5' && core.status.maps && core.status.maps[floorId]) {
			// 只改地图数据，不调用 removeBlock（读档时动画层还没准备好，调用会报错）
			var m5 = core.status.maps[floorId];
			m5.blocks = (m5.blocks || []).filter(function (b) {
				return !(b && b.event && (b.event.id == 'thief' || b.event.id == 'fairy'));
			});
		}
		// 二周目 20 层：打倒伯爵后、还没拿第二枚章时，法阵 (6,1) 一定在（兼容打倒伯爵时还没有这段事件的旧存档）
		if (floorId == 'floor_plus_20' && core.getFlag('round2', 0) == 1 && core.hasFlag('beat20F') && !core.hasFlag('r2MotaDone')) {
			try {
				var pb = core.getBlock(6, 1, floorId, true);
				if (pb && pb.block.disable) core.showBlock(6, 1, floorId);
			} catch (e) { }
		}
		return _changingFloor.apply(this, arguments);
	};
	// 二周目只保留怪物的台词（NPC、勇士、剧情旁白、到达楼层的旁白都跳过）；选项、提示（tip）照常
	['_action_text', '_action_autoText', '_action_scrollText'].forEach(function (name) {
		var orig = core.events[name];
		core.events[name] = function () {
			// 在道具栏点章查看能力的说明照常显示
			// 二周目只显示怪物说的话（说话人头像是怪物，奴隶除外）；勇士、NPC、旁白都跳过
			var t0 = arguments[0] && arguments[0].text, sp = String(t0 || '').match(/\t\[[^,\]]+,([^\]]+)\]/);
			var byMonster = sp && core.material.enemys[sp[1]] && !/^slave/.test(sp[1]);
			if (core.getFlag('round2', 0) == 1 && !byMonster && !(core.plugin._allowText > 0)) { core.doAction(); return; }
			if (core.plugin._allowText > 0) core.plugin._allowText--;
			return orig.apply(this, arguments);
		};
	});
	// 二周目：幻境等两周目共用的楼层，出口若指向一周目楼层（floor_N / base_N），改去二周目对应楼层
	var B16_OFF = { nw: [0, 0], n: [12, 0], ne: [24, 0], w: [0, 12], c: [12, 12], e: [24, 12], sw: [0, 24], s: [12, 24], se: [24, 24] }; // 相邻块共用边墙，步长 12
	var _changeFloorR2 = core.events.changeFloor;
	core.events.changeFloor = function (floorId, stair, heroLoc, time, callback, fromLoad) {
		if (main.mode != 'play') return _changeFloorR2.apply(this, arguments); // 编辑器里不做任何换算
		if (!fromLoad && core.getFlag('round2', 0) == 1 && typeof floorId == 'string') {
			var m = floorId.match(/^(floor|base)_(.+)$/);
			if (m && core.floors[m[1] + '_plus_' + m[2]]) floorId = m[1] + '_plus_' + m[2];
		}
		// 一周目地下 16、17 层已各拼成一张大地图（base_16 / base_17）：去旧的 9 块小地图的，一律换算到大地图上
		var m16 = !fromLoad && typeof floorId == 'string' && floorId.match(/^base_(16|17)_(nw|n|ne|w|c|e|sw|s|se)$/);
		if (m16 && m16[1] == '17' && !core.plugin.b17Open()) m16 = null; // 地下 17 层：打败魔王前只有中央小地图
		if (m16 && core.floors['base_' + m16[1]]) {
			var o16 = B16_OFF[m16[2]];
			var big = 'base_' + m16[1];
			floorId = big;
			if (heroLoc && heroLoc.x != null) heroLoc = { x: heroLoc.x + o16[0], y: heroLoc.y + o16[1], direction: heroLoc.direction };
			else { heroLoc = big == 'base_16' ? { x: 20, y: 16 } : { x: 18, y: 18 }; stair = null; }
		}
		return _changeFloorR2.call(this, floorId, stair, heroLoc, time, callback, fromLoad);
	};
	// 冰冻徽章：持有时把这一层的熔岩网改成可通行（只改地图数据；拿到徽章时当前层立即生效）
	this.applyShoes = function (floorId) {
		floorId = floorId || core.status.floorId;
		if (!floorId || !core.hasItem('shoes') || !core.status.maps || !core.status.maps[floorId]) return;
		(core.status.maps[floorId].blocks || []).forEach(function (b) {
			if (b && b.event && b.event.id == 'lavaNet' && b.event.noPass) {
				b.event = core.clone(b.event); b.event.noPass = false;
			}
		});
	};
	var _getItemShoes = core.events.afterGetItem;
	core.events.afterGetItem = function (id, x, y, isGentleClick) {
		var r = _getItemShoes.apply(this, arguments);
		if (id == 'shoes') core.plugin.applyShoes();
		// 地下 7 层解谜奖励的空间传送器（10,6）：一次给 3 次使用（两周目一样）
		if (id == 'Lvupfly' && /^base_(plus_)?7$/.test(core.status.floorId || '') && x == 10 && y == 6) {
			core.addItem('Lvupfly', 2);
			core.drawTip('空间传送器 ×3');
		}
		return r;
	};
	// ====== 幻境（phant）剧情：大法师的牢笼 ======
	// 第一次踏进幻境：大法师现身说明；四条路的入口层各有一段队长的记忆；九位红衣法师倒下 3/6/9 位时大法师开口
	var PHANT_STORY = {
		intro: [
			"\t[勇士,hero]……星空？脚下什么都没有，可我站得很稳。",
			"\t[大法师,blackMagician]孩子，你还是来了。",
			"\t[大法师,blackMagician]这里是我的幻境。你要找的人，在一个梦里：他人生最好的那一天。",
			"\t[大法师,blackMagician]他每一次登上这座塔，都是第一次。每一次打倒魔王，每一次救出公主。然后，一切重新开始。",
			"\t[勇士,hero]……魔王说我是第一百零一个挑战者。前面那一百个，都是他？",
			"\t[大法师,blackMagician]你很聪明。所以你也该明白：叫醒他，他就只剩一个打完了仗、什么都没有的明天。",
			"\t[大法师,blackMagician]九位红衣法师替我守着这个梦的九个角。别去碰他们，孩子。留下来吧。",
			"\t[勇士,hero]我是来带他回家的。"
		],
		memory: {
			phant_1: ["\t[记忆]塔下的村子。一个年轻人系紧剑带：\n“等我回来。我会是救出公主的那个人。”", "\t[勇士,hero]这是他出发的那天。"],
			phant_5: ["\t[记忆]三层。魔王抬手，他倒下。醒来时，剑和盾都不见了。\n“下一次，我不会再倒下。”", "\t[勇士,hero]“下一次”……他自己记得吗？"],
			phant_6: ["\t[记忆]骑士领主的剑停在半空：“你怎么知道我要砍哪里？”\n他答不上来。他只是知道。", "\t[勇士,hero]不是天赋。是他已经打过太多次了。"],
			phant_8: ["\t[记忆]塔顶。公主的手很凉。他说：“结束了。”\n话音未落，星光倒卷，他又站在了塔下。", "\t[勇士,hero]……每一次，都停在这一刻。"]
		},
		seal: {
			3: ["\t[大法师,blackMagician]你在拆他的梦，孩子。每倒下一位，他的星空就暗一角。"],
			6: ["\t[大法师,blackMagician]他今天在三层醒来时，第一次问了一句：“我是不是来过这里？”\n你满意了吗？"],
			9: ["\t[大法师,blackMagician]……好吧。九个角都碎了。上来吧，我在最上面等你。"]
		}
	};
	// 地下 17 层（一周目）：打败魔王前只有中央小地图 base_17_c；打败后展开成 37×37 大地图 base_17
	this.b17Open = function () {
		if (core.hasFlag('zenoBeaten')) return true;
		var c = core.status.maps && core.status.maps.base_17_c;
		// 旧存档：魔王已经不在了（打败过）
		return !!(c && core.hasFlag('diceShown') && !(c.blocks || []).some(function (b) { return b.event && b.event.id == 'redKing' && !b.disable; }));
	};
	// 进地下 17 层的目标：传入大地图坐标，返回 {id,x,y}；打败魔王前只有中央那块能去
	this.b17Target = function (x, y) {
		if (core.plugin.b17Open()) return { id: 'base_17', x: x, y: y };
		if (x >= 12 && x <= 24 && y >= 12 && y <= 24) return { id: 'base_17_c', x: x - 12, y: y - 12 };
		return null;
	};
	this.openB17 = function () {
		if (core.status.floorId != 'base_17_c' || core.getFlag('round2', 0) == 1) return;
		core.setFlag('zenoBeaten', 1);
		var B = core.status.maps.base_17, C = core.status.maps.base_17_c;
		if (!B || !C) return;
		// 中央这块当前的样子原样搬进大地图（打掉的魔将、物资、开着的门都保留）
		B.blocks = (B.blocks || []).filter(function (b) { return !(b.x >= 12 && b.x <= 24 && b.y >= 12 && b.y <= 24); })
			.concat((C.blocks || []).map(function (b) { var n = core.clone(b); n.x += 12; n.y += 12; return n; }));
		var h = core.status.hero.loc;
		core.changeFloor('base_17', null, { x: h.x + 12, y: h.y + 12, direction: h.direction }, 0);
	};
	var _afterBattleZeno = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleZeno.apply(this, arguments);
		if (rid == 'redKing' && core.status.floorId == 'base_17_c' && core.getFlag('round2', 0) != 1)
			core.insertAction([{ "type": "sleep", "time": 300 }, { "type": "function", "function": "function(){\ncore.plugin.openB17();\n}" }], null, null, null, true);
		return r;
	};
	var _afterChangeFloorB16 = core.events.afterChangeFloor;
	core.events.afterChangeFloor = function (floorId, fromLoad) {
		var r = _afterChangeFloorB16.apply(this, arguments);
		if (main.mode != 'play') return r;
		var m = fromLoad && typeof floorId == 'string' && floorId.match(/^base_(16|17)_(nw|n|ne|w|c|e|sw|s|se)$/);
		if (m && m[1] == '17' && !core.plugin.b17Open()) m = null;
		if (m && core.floors['base_' + m[1]]) {
			var o = B16_OFF[m[2]], h = core.status.hero.loc, big = 'base_' + m[1];
			setTimeout(function () { core.changeFloor(big, null, { x: h.x + o[0], y: h.y + o[1], direction: h.direction }, 0); }, 100);
		}
		return r;
	};
	var _afterChangeFloorPhant = core.events.afterChangeFloor;
	core.events.afterChangeFloor = function (floorId, fromLoad) {
		var r = _afterChangeFloorPhant.apply(this, arguments);
		if (main.mode != 'play') return r;
		if (!fromLoad && /^phant_\d+$/.test(floorId || '') && core.getFlag('round2', 0) != 1) {
			var todo = [];
			if (!core.hasFlag('phantIntro')) { core.setFlag('phantIntro', 1); todo = todo.concat(PHANT_STORY.intro); }
			if (PHANT_STORY.memory[floorId] && !core.hasFlag('phantMem_' + floorId)) {
				core.setFlag('phantMem_' + floorId, 1);
				todo = todo.concat(PHANT_STORY.memory[floorId]);
			}
			if (todo.length) core.insertAction(todo);
		}
		return r;
	};
	this.phantSealLine = function () {
		var n = core.getFlag('sealBroken', 0), shown = core.getFlag('sealLineShown', 0);
		var lines = [];
		[3, 6, 9].forEach(function (k) { if (n >= k && shown < k) { lines = lines.concat(PHANT_STORY.seal[k]); shown = k; } });
		if (lines.length) { core.setFlag('sealLineShown', shown); core.insertAction(lines); }
	};
	var _afterBattleSealLine = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y, callback) {
		var rid = enemyId == '__testMonster__' ? ((core.material.enemys.__testMonster__ || {}).id || enemyId) : enemyId;
		var r = _afterBattleSealLine.apply(this, arguments);
		if (/^phant_\d+$/.test(core.status.floorId || '') && (rid == 'great_magician' || rid == 'redWizard') && core.getFlag('round2', 0) != 1)
			core.insertAction([{ "type": "function", "function": "function(){\ncore.plugin.phantSealLine();\n}" }], null, null, null, true);
		return r;
	};
	var _lose = core.events.lose;
	core.events.lose = function (reason) {
		if (!core.plugin.inMagic() || core.isReplaying()) return _lose.apply(this, arguments);
		// 在幻境里死去 = 在现实中醒来
		if (core.status.hero.isBattling || core.status.hero.battle_enemy) core.battle_exit();
		core.status.gameOver = false;
		core.status.hero.hp = 1;
		core.ui.closePanel();
		core.setFlag('magicDeaths', core.getFlag('magicDeaths', 0) + 1);
		core.insertAction([
			{ "type": "setCurtain", "color": [0, 0, 0, 1], "time": 1200, "keep": true },
			{ "type": "changeFloor", "floorId": "floor_20", "loc": [6, 2], "direction": "down", "time": 0 },
			{ "type": "sleep", "time": 600 },
			{ "type": "setCurtain", "time": 1200 },
			"\t[勇士,hero]……我，醒了？\n剑还在，盾也还在。刚才那些……都是假的？",
			"\t[勇士,hero]第一百位挑战者、魔王的埋伏、牢房里的小偷……\n那是队长讲给我听过的故事。那是他的塔，他的记忆。",
			{ "type": "hide", "loc": [[6, 1]], "floorId": "floor_20", "time": 1000 },
			"\t[大法师,blackMagician]……你竟然自己醒过来了。\n可惜，那扇门不会再为你打开第二次。",
			"\t[大法师,blackMagician]他还在里面，一遍，又一遍。\n而你，再也回不去了。",
			"\t[勇士,hero]……队长，你一直被困在那样的地方吗？\n在幻境里死去，就能醒来。可你在自己的记忆里，从来没有输过……",
			"\t[勇士,hero]等着我。我会找到别的路。"
		]);
	};

	////// 战斗 //////
	core.events.battle = function (id, x, y, force, callback) {
		if (core.plugin.inMagic()) return core.plugin.magicBattle(id, x, y, force, callback);
		core.saveAndStopAutomaticRoute();
		id = id || core.getBlockId(x, y);
		if (!id) return core.clearContinueAutomaticRoute(callback);
		// 巨龙：没有勇者徽章不能挑战
		if (id == 'magicDragon' && !force && !core.hasFlag('braveBadge')) {
			core.drawTip('巨龙的鳞片坚不可摧……没有勇者徽章，无法挑战巨龙');
			core.playSound('warning.mp3');
			return core.clearContinueAutomaticRoute(callback);
		}
		// 打不过的怪不能攻击（剧情强制战斗 force 除外）
		if (!force) {
			var _dmg = core.getDamage(id, x, y);
			var _name = (core.material.enemys[id] || {}).name || "怪物";
			if (_dmg == null) {
				core.drawTip(_name + "的防御太高，无法攻击");
				core.playSound("warning.mp3");
				return core.clearContinueAutomaticRoute(callback);
			}
			if (_dmg >= core.status.hero.hp && !core.plugin.inMagic()) { // 幻境里打不过也可以打：死了就会醒
				core.drawTip("打不过" + _name + "，进攻会导致死亡");
				core.playSound("warning.mp3");
				return core.clearContinueAutomaticRoute(callback);
			}
		}
		// 自动存档
		if (!core.status.event.id) core.autosave(true);
		// 战前事件
		if (!core.beforeBattle(id, x, y))
			return core.clearContinueAutomaticRoute(flags.__callback__);
		if (flags.useBattleAnimate) {

			// 拷贝怪物数据
			var enemy = core.clone(core.material.enemys[id]);
			// 仿攻
			if (core.hasSpecial(enemy.special, 10)) enemy.atk = Math.max(enemy.atk, core.getRealStatus("atk"));
			// 坚固
			if (core.hasSpecial(enemy.special, 3)) enemy.def = Math.max(enemy.def, core.getRealStatus("atk") - 1);
			core.status.hero.battle_enemy = enemy;

			// 生成一个随机数供随机功能使用
			// rand为10代表(1/10的概率读档读到相同的结果)
			var rand;
			if (core.isReplaying()) {
				var nextAction = (core.status.replay.toReplay || [])[0] || "";
				if (nextAction.indexOf('random:') != 0) rand = 0;
				else rand = core.rand2(10);
			} else rand = core.rand2(10);
			// randRatio为100代表先进行rand*100次roll 代表随机性 越大越不容易在多次roll中获取到相同的值
			// 不懂的话举例 如果rand=core.rand2(10) randRatio=2
			// 假设第一次roll得到rand=2 读档重新roll 得到rand=3
			// 第一次先进行2*randRatio(2)次rand操作 从随机数种子的第四个值开始获取
			// 5,6,7读三次后读到了随机数的第7个值
			// 读档后先进行6次rand 从6开始读 得到7 即与上一次操作的值重复了
			// a few days later 我都写了啥玩意(
			var randRatio = 100;
			var randTimes = rand * randRatio;
			for (var i = 0; i < randTimes; i++) {
				core.rand();
			}
			core.status.hero.battle_randNum = rand * randRatio;

			core.battle_drawUI();

			core.status.hero.isBattling = true;
			flags.battleSpeed = 9;
			flags.sageShield = 0; // 贤者之证：每场战斗重新计算第一击
			flags.enemyHp = (core.status.hero.battle_enemy || {}).hp; // 贤者三阶按怪物满血的 1/3 计算
			// 回合数
			core.status.hero.battle_heroTurn = 0;
			core.status.hero.battle_enemyTurn = 0;

			// 计算先攻权
			var first = 0;
			if (core.hasSpecial(enemy, 1)) first = 1;

			flags.__callback__ = callback;
			flags.__loc__ = [x, y];

			core.status.battle_heroHp = core.status.hero.hp;
			var hp = core.status.hero.hp;
			// 事件流跑战斗过程
			var enemyEvent = [{
				"type": "function",
				"function": "function(){core.battle_enemyAttack();}"
			}];
			var heroEvent = [{
				"type": "function",
				"function": "function(){core.battle_heroAttack()}"
			}];
			var battleEvent = heroEvent.concat(enemyEvent);
			if (first) battleEvent = enemyEvent.concat(heroEvent);
			core.insertAction([{
				"type": "while",
				"condition": "core.status.hero.isBattling",
				"data": battleEvent,
			}]);
		} else {
			// 非强制战斗
			if (!core.enemys.canBattle(id, x, y) && !force && !core.status.event.id) {
				core.drawTip("你打不过此怪物！", null, true);
				return core.clearContinueAutomaticRoute(callback);
			}
			// 战后事件
			core.afterBattle(id, x, y, callback);
		}
	};
	////// 战斗动画结束 //////

	////// 绘制前景层 //////
	core.maps.drawFg = function (floorId, ctx) {
		floorId = floorId || core.status.floorId;
		var onMap = ctx == null;
		if (onMap) {
			ctx = core.canvas.fg;
			core.status.floorAnimateObjs = this._getFloorImages(floorId);
		}
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制背景图块；后绘制的覆盖先绘制的。
		this._drawFloorImages(floorId, ctx, 'fg');
		this._drawBgFgMap(floorId, ctx, 'fg', onMap);
		//core.strokeRect(ctx, 30, 30, 356, 356, "rgb(68,204,210)", 4);
		var t = ctx.textAlign;
		ctx.textAlign = "left";
		///core.fillText(ctx, core.floors[floorId].title, 166, 20, "white", "18px verdana");
		ctx.textAlign = t;
	};

	var _useEquipment = function (itemId, name, type) { // 具体的装备使用效果
		if (itemId.indexOf(name) == 0) {
			var now = core.getFlag(name, name + "0");

			if (typeof core.values[now] == 'number') {
				core.status.hero[type] -= core.values[now];
			} else {
				core.status.hero.atk -= core.values[now].atk || 0;
				core.status.hero.def -= core.values[now].def || 0;
				core.status.hero.mdef -= core.values[now].mdef || 0;
			}

			if (typeof core.values[itemId] == 'number') {
				core.status.hero[type] += core.values[itemId];
			} else {
				core.status.hero.atk += core.values[itemId].atk || 0;
				core.status.hero.def += core.values[itemId].def || 0;
				core.status.hero.mdef += core.values[itemId].mdef || 0;
			}

			core.setItem(now, 1);
			core.setItem(itemId, 0);
			core.setFlag(name, itemId);
			core.drawTip("已装备" + core.material.items[itemId].name);
		}
	};

	this.useEquipment = function (itemId) { // 使用装备
		_useEquipment(itemId, "sword", "atk");
		_useEquipment(itemId, "shield", "def");
	};
	this.afterLoadData = function () {
		// 样板差异 我直接补上 应该没事吧…… //yzm觉得应该没事
		core.material.items.proof_brave.name = core.material.items.proof_brave.text;
		core.material.items.proof_tyrant.name = core.material.items.proof_tyrant.text;
		core.material.items.proof_sage.name = core.material.items.proof_sage.text;
		if (core.hasFlag('proof')) {
			core.material.items.proof_brave.name = '勇者之证';
			core.material.items.proof_tyrant.name = '霸者之证';
			core.material.items.proof_sage.name = '贤者之证';
		}
	};


	// 在道具栏点章：查看身上每一枚章各阶的能力（当前阶标出来）
	var PROOF_INFO = {
		brave: { name: '勇者之证', lv: [
			'每次攻击伤害增加25%。',
			'每次攻击伤害增加25%；每回合攻击两次。',
			'每次攻击伤害增加25%，再额外造成攻击力12%的伤害（无视防御）；每回合攻击两次。'] },
		sage: { name: '贤者之证', lv: [
			'生命护盾：每场战斗第一次受到的伤害减少50%；之后受到的伤害减少25%。',
			'生命护盾：每场战斗第一次受到的攻击被抵消，并对怪物造成其当前生命25%的伤害；之后受到的伤害减少25%。',
			'生命护盾×2：每场战斗前两次受到的攻击被抵消，并各对怪物造成其当前生命25%的伤害；之后受到的伤害减少25%。'] },
		tyrant: { name: '霸者之证', lv: [
			'受击时防御力按“当前防御 + 攻击的25%”计算。对魔法攻击无效。',
			'受击时防御力按“当前防御 + 攻击的25%”计算；每次受击反击自身攻击力的25%。对魔法攻击无效。',
			'受击时防御力按“当前防御 + 攻击的25%”计算；每次受击反击自身攻击力的35%。对魔法攻击无效。'] }
	};
	this.showProofInfo = function (itemId) {
		if (!core.hasFlag('proof')) {
			core.plugin._allowText = 1;
			core.insertAction(["\t[" + core.material.items[itemId].name + "," + itemId + "]这枚章还没有被鉴定。\n去主塔 14 层找老人鉴定以后，才能知道它的能力。"]);
			return;
		}
		var lv = Math.max(1, Math.min(3, core.getFlag('proof_lv', 1))), CN = ['一', '二', '三'], list = [];
		['brave', 'sage', 'tyrant'].forEach(function (k) {
			if (!core.plugin.hasProof(k)) return;
			var info = PROOF_INFO[k], lines = [];
			for (var i = 0; i < 3; i++)
				lines.push((i + 1 == lv ? '\r[#FFD700]▶ ' : '\r[#AAAAAA]　 ') + CN[i] + '阶：' + info.lv[i] + '\r');
			list.push("\t[" + info.name + "（当前" + CN[lv - 1] + "阶）,proof_" + k + "]" + lines.join('\n'));
		});
		if (list.length == 0) list.push("\t[章]你身上没有已生效的章。");
		core.plugin._allowText = list.length;
		core.insertAction(list);
	};
	this.useProof = function (itemId) {
		if (itemId == 'proof_brave_sage') {
			core.setFlag('proof', 'proof_brave_sage');
			core.afterLoadData();
			return;
		}
		if (itemId == 'proof_brave') {
			core.setFlag('proof', 'proof_brave');
			core.afterLoadData();
			core.drawTip("已装备" + core.material.items[itemId].name);
			return;
		}
		if (itemId == 'proof_tyrant') {
			core.setFlag('proof', 'proof_tyrant');
			core.afterLoadData();
			core.drawTip("已装备" + core.material.items[itemId].name);
			return;
		}
		if (itemId === 'proof_sage') {
			core.setFlag('proof', 'proof_sage');
			core.afterLoadData();
			core.drawTip("已装备" + core.material.items[itemId].name);
			return;
		}
	};
	////// 加载音频 //////
	core.loader._loadMusic = function () {
		core.bgms.forEach(function (t) {
			core.loader.loadOneMusic(t);
		});

		if (main.useCompress && core.musicStatus.audioContext) {
			core.unzip('project/sounds/sounds.zip?v=' + main.version, function (data) {
				for (var name in data) {
					if (core.sounds.indexOf(name) >= 0) {
						core.loader._loadOneSound_decodeData(name, data[name]);
					}
				}
			});
		} else {
			core.sounds.forEach(function (t) {
				core.loader.loadOneSound(t);
			});
		}
		// 直接开始播放
		core.playBgm("bgm.mp3");
	};

	//this.getBlockId = function (x, y, floorId, needEnable) {
	//	return core.getBlockId(x, y, floorId, needEnable);
	//}

	// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为 core.plugin.xxx();
	// 从V2.6开始，插件中用this.XXX方式定义的函数也会被转发到core中，详见文档-脚本-函数的转发。
},
    "drawLight": function () {

		// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
		// 【参数说明】
		// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
		// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
		// lights：可选，一个数组，定义了每个独立的灯光。
		//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
		// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
		//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
		// 【调用样例】
		// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
		// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
		// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
		// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
		// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，且40%后才开始衰减。
		this.drawLight = function (name, color, lights, lightDec) {

			// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
			var ctx = core.getContextByName(name);
			if (ctx == null) {
				if (typeof name == 'string')
					ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 98);
				else return;
			}

			ctx.mozImageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;

			core.clearMap(name);
			// 绘制色调层，默认不透明度
			if (color == null) color = 0.9;
			ctx.fillStyle = "rgba(0,0,0," + color + ")";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			lightDec = core.clamp(lightDec, 0, 1);

			// 绘制每个灯光效果
			ctx.globalCompositeOperation = 'destination-out';
			lights.forEach(function (light) {
				// 坐标，半径，中心不透明度
				var x = light[0],
					y = light[1],
					r = light[2];
				// 计算衰减距离
				var decDistance = parseInt(r * lightDec);
				// 正方形区域的直径和左上角坐标
				var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
				grd.addColorStop(0, "rgba(0,0,0,1)");
				grd.addColorStop(1, "rgba(0,0,0,0)");
				ctx.beginPath();
				ctx.fillStyle = grd;
				ctx.arc(x, y, r, 0, 2 * Math.PI);
				ctx.fill();
			});
			ctx.globalCompositeOperation = 'source-over';
			// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
		}
	},
    "itemShop": function () {
		// 道具商店相关的插件
		// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

		var shopId = null; // 当前商店ID
		var type = 0; // 当前正在选中的类型，0买入1卖出
		var selectItem = 0; // 当前正在选中的道具
		var selectCount = 0; // 当前已经选中的数量
		var page = 0;
		var totalPage = 0;
		var totalMoney = 0;
		var list = [];

		var bigFont = core.ui._buildFont(20, false),
			middleFont = core.ui._buildFont(18, false);

		this.drawItemShop = function () {
			// 绘制道具商店

			// Step 1: 背景和固定的几个文字
			core.ui._createUIEvent();
			core.clearMap('uievent');
			core.ui._uievent_drawSelector({
				"code": 1
			});
			core.ui._uievent_drawSelector({
				"code": 2
			});
			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'top');
			core.fillRect('uievent', 0, 0, 416, 416, 'black');
			core.ui._uievent_drawBackground({
				background: 'winskin.png',
				x: 0,
				y: 0,
				width: 416,
				height: 56
			});
			core.ui._uievent_drawBackground({
				background: 'winskin.png',
				x: 0,
				y: 56,
				width: 312,
				height: 56
			});
			core.ui._uievent_drawBackground({
				background: 'winskin.png',
				x: 0,
				y: 112,
				width: 312,
				height: 304
			});
			core.ui._uievent_drawBackground({
				background: 'winskin.png',
				x: 312,
				y: 56,
				width: 104,
				height: 56
			});
			core.ui._uievent_drawBackground({
				background: 'winskin.png',
				x: 312,
				y: 112,
				width: 104,
				height: 304
			});
			core.setFillStyle('uievent', 'white');
			core.setStrokeStyle('uievent', 'white');
			core.fillText("uievent", "购买", 32, 74, 'white', bigFont);
			core.fillText("uievent", "卖出", 132, 74);
			core.fillText("uievent", "离开", 232, 74);
			core.fillText("uievent", "当前金币", 324, 66, null, middleFont);
			core.setTextAlign("uievent", "right");
			core.fillText("uievent", core.formatBigNumber(core.status.hero.money), 405, 89);
			core.setTextAlign("uievent", "left");
			core.ui._uievent_drawSelector({
				"type": "drawSelector",
				"image": "winskin.png",
				"code": 2,
				"x": 22 + 100 * type,
				"y": 66,
				"width": 60,
				"height": 33
			});
			if (selectItem != null) {
				core.setTextAlign('uievent', 'center');
				core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 364, 320, null, bigFont);
				core.fillText("uievent", "◀   " + selectCount + "   ▶", 364, 350);
				core.fillText("uievent", "确定", 364, 380);
			}

			// Step 2：获得列表并展示
			var choices = core.status.shops[shopId].choices;
			list = choices.filter(function (one) {
				if (one.condition != null) {
					try {
						if (!core.calValue(one.condition)) return false;
					} catch (e) { }
				}
				return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
			});
			var per_page = 6;
			totalPage = Math.ceil(list.length / per_page);
			page = Math.floor((selectItem || 0) / per_page) + 1;

			// 绘制分页
			if (totalPage > 1) {
				var half = 156;
				core.setTextAlign('uievent', 'center');
				core.fillText('uievent', page + " / " + totalPage, half, 388, null, middleFont);
				if (page > 1) core.fillText('uievent', '上一页', half - 80, 388);
				if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 388);
			}
			core.setTextAlign('uievent', 'left');

			// 绘制每一项
			var start = (page - 1) * per_page;
			for (var i = 0; i < per_page; ++i) {
				var curr = start + i;
				if (curr >= list.length) break;
				var item = list[curr];
				core.drawIcon('uievent', item.id, 10, 125 + i * 40);
				core.setTextAlign('uievent', 'left');
				core.fillText('uievent', core.material.items[item.id].name, 50, 132 + i * 40, null, bigFont);
				core.setTextAlign('uievent', 'right');
				core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + "金币/个", 300, 133 + i * 40, null, middleFont);
				core.setTextAlign("uievent", "left");
				if (curr == selectItem) {
					// 绘制描述，文字自动放缩
					var text = core.material.items[item.id].text || "该道具暂无描述";
					try {
						text = core.replaceText(text);
					} catch (e) { }
					for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
						var config = {
							left: 10,
							fontSize: fontSize,
							maxWidth: 403,
							lineHeight: 1.4
						};
						var height = core.getTextContentHeight(text, config);
						if (height <= 50) {
							config.top = (56 - height) / 2;
							core.drawTextContent("uievent", text, config);
							break;
						}
					}
					core.ui._uievent_drawSelector({
						"type": "drawSelector",
						"image": "winskin.png",
						"code": 1,
						"x": 8,
						"y": 120 + i * 40,
						"width": 295,
						"height": 40
					});
					if (type == 0 && item.number != null) {
						core.fillText("uievent", "存货", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", item.number, 406, 132, null, null, 40);
					} else if (type == 1) {
						core.fillText("uievent", "数量", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", core.itemCount(item.id), 406, 132, null, null, 40);
					}
					core.setTextAlign("uievent", "left");
					core.fillText("uievent", "预计金额", 324, 250);
					core.setTextAlign("uievent", "right");
					totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
					core.fillText("uievent", core.formatBigNumber(totalMoney), 405, 280);

					core.setTextAlign("uievent", "left");
					core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 324, 170);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 405, 200);
				}
			}

			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'alphabetic');
		}

		var _add = function (item, delta) {
			if (item == null) return;
			selectCount = core.clamp(
				selectCount + delta, 0,
				Math.min(type == 0 ? Math.floor(core.status.hero.money / core.calValue(item.money)) : core.itemCount(item.id),
					type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
			);
		}

		var _confirm = function (item) {
			if (item == null || selectCount == 0) return;
			if (type == 0) {
				core.status.hero.money -= totalMoney;
				core.getItem(item.id, selectCount);
				if (item.number != null) item.number -= selectCount;
				item.money_count = (item.money_count || 0) + selectCount;
			} else {
				core.status.hero.money += totalMoney;
				core.removeItem(item.id, selectCount);
				core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
				if (item.number != null) item.number += selectCount;
				item.sell_count = (item.sell_count || 0) + selectCount;
			}
			selectCount = 0;
		}

		this._performItemShopKeyBoard = function (keycode) {
			var item = list[selectItem] || null;
			// 键盘操作
			switch (keycode) {
				case 38: // up
					if (selectItem == null) break;
					if (selectItem == 0) selectItem = null;
					else selectItem--;
					selectCount = 0;
					break;
				case 37: // left
					if (selectItem == null) {
						if (type > 0) type--;
						break;
					}
					_add(item, -1);
					break;
				case 39: // right
					if (selectItem == null) {
						if (type < 2) type++;
						break;
					}
					_add(item, 1);
					break;
				case 40: // down
					if (selectItem == null) {
						if (list.length > 0) selectItem = 0;
						break;
					}
					if (list.length == 0) break;
					selectItem = Math.min(selectItem + 1, list.length - 1);
					selectCount = 0;
					break;
				case 13:
				case 32: // Enter/Space
					if (selectItem == null) {
						if (type == 2)
							core.insertAction({
								"type": "break"
							});
						else if (list.length > 0)
							selectItem = 0;
						break;
					}
					_confirm(item);
					break;
				case 27: // ESC
					if (selectItem == null) {
						core.insertAction({
							"type": "break"
						});
						break;
					}
					selectItem = null;
					break;
			}
		}

		this._performItemShopClick = function (px, py) {
			var item = list[selectItem] || null;
			// 鼠标操作
			if (px >= 22 && px <= 82 && py >= 71 && py <= 102) {
				// 买
				if (type != 0) {
					type = 0;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 122 && px <= 182 && py >= 71 && py <= 102) {
				// 卖
				if (type != 1) {
					type = 1;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 222 && px <= 282 && py >= 71 && py <= 102) // 离开
				return core.insertAction({
					"type": "break"
				});
			// ◀，▶
			if (px >= 318 && px <= 341 && py >= 348 && py <= 376)
				return _add(item, -1);
			if (px >= 388 && px <= 416 && py >= 348 && py <= 376)
				return _add(item, 1);
			// 确定
			if (px >= 341 && px <= 387 && py >= 380 && py <= 407)
				return _confirm(item);

			// 上一页/下一页
			if (px >= 45 && px <= 105 && py >= 388) {
				if (page > 1) selectItem -= 6;
				return;
			}
			if (px >= 208 && px <= 268 && py >= 388) {
				if (page < totalPage) selectItem = Math.min(selectItem + 6, list.length - 1);
				return;
			}

			// 实际区域
			if (px >= 9 && px <= 300 && py >= 120 && py < 360) {
				if (list.length == 0) return;
				var index = parseInt((py - 120) / 40);
				var newItem = 6 * (page - 1) + index;
				if (newItem >= list.length) newItem = list.length - 1;
				if (newItem != selectItem) {
					selectItem = newItem;
					selectCount = 0;
				}
				return;
			}
		}

		this.performItemShopAction = function () {
			if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
			else return this._performItemShopClick(flags.px, flags.py);
		}

		this.openItemShop = function (itemShopId) {
			shopId = itemShopId;
			type = 0;
			page = 0;
			selectItem = null;
			selectCount = 0;
			core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [{
					"type": "function",
					"function": "function () { core.drawItemShop(); }"
				}, {
					"type": "wait"
				}, {
					"type": "function",
					"function": "function() { core.performItemShopAction(); }"
				}]
			}, {
				"type": "function",
				"function": "function () { " +
					"core.deleteCanvas('uievent'); " +
					"core.ui._uievent_drawSelector({ \"code\": 1 }); " +
					"core.ui._uievent_drawSelector({ \"code\": 2 }); " +
					"}"
			}]);
		}

		// Write item number to save
		core.control.saveData = function () {
			var data = this.controldata.saveData();
			for (var shopId in core.status.shops) {
				if (core.status.shops[shopId].item) {
					data.shops[shopId].choices = core.status.shops[shopId].choices.map(function (t) {
						return {
							number: t.number,
							money_count: t.money_count || 0,
							sell_count: t.sell_count || 0
						}
					});
				}
			}
			return data;
		}

		core.control.loadData = function (data, callback) {
			this.controldata.loadData(data, callback);
			for (var shopId in data.shops) {
				if (data.shops[shopId].choices) {
					for (var i = 0; i < data.shops[shopId].choices.length; ++i) {
						core.status.shops[shopId].choices[i].number = data.shops[shopId].choices[i].number;
						core.status.shops[shopId].choices[i].money_count = data.shops[shopId].choices[i].money_count;
						core.status.shops[shopId].choices[i].sell_count = data.shops[shopId].choices[i].sell_count;
					}
				}
			}
		}

	},
    "smoothCamera": function () {

		// 是否启用本插件，默认不启用
		this.__enableSmoothCamera = false;
		if (!this.__enableSmoothCamera) return;

		this.Camera = function () {

			// 下面这个变量决定本插件的开关
			// 你可以在游戏中使用core.setFlag('smoothCamera',false)来关闭本插件的功能
			// 同时也可以core.setFlag('smoothCamera',true)重新开启
			// 此项默认为true
			// 
			this.__switchName = 'smoothCamera';

			// 初始化成员变量
			this._cameraNeedRefresh = true;
			this._nowOffsetX = 0;
			this._nowOffsetY = 0;
			this._targetOffsetX = 0;
			this._targetOffsetY = 0;
			this._currentFloorId = null;

			// 重置镜头，在楼层变更时使用
			this.resetCamera = function () {
				this._targetOffsetX = core.bigmap.offsetX;
				this._targetOffsetY = core.bigmap.offsetY;
				this._nowOffsetX = this._targetOffsetX;
				this._nowOffsetY = this._targetOffsetY;
				this._cameraNeedRefresh = true;
			};

			// 设置焦点坐标，目前没有用
			this.setTarget = function (x, y) {
				this._targetOffsetX = x;
				this._targetOffsetY = y;
			};

			// 请求镜头更新
			this.requestCameraUpdate = function () {
				this._cameraNeedRefresh = true;
			};

			// 更新焦点坐标，目前仅根据大地图偏移决定
			this.updateTargetPosition = function () {
				this._targetOffsetX = core.bigmap.offsetX;
				this._targetOffsetY = core.bigmap.offsetY;
			};

			// 更新额外的刷新条件，即镜头未指向焦点时
			this.updateRefreshFlag = function () {
				if (this._nowOffsetX != this._targetOffsetX || this._nowOffsetY != this._targetOffsetY) {
					this._cameraNeedRefresh = true;
				}
			};

			// 判断是否禁止了弹性滚动
			this.canDirectMove = function () {
				return !core.getFlag(this.__switchName, true);
			};

			// 更新镜头坐标
			this.updateCameraPosition = function () {
				if (this._cameraNeedRefresh) {
					this._cameraNeedRefresh = false;
					var disX = this._targetOffsetX - this._nowOffsetX;
					var disY = this._targetOffsetY - this._nowOffsetY;
					if (Math.abs(disX) <= 2 && Math.abs(disY) <= 2 || this.canDirectMove()) {
						this._nowOffsetX = this._targetOffsetX;
						this._nowOffsetY = this._targetOffsetY;
					} else {
						this._nowOffsetX += disX / 10;
						this._nowOffsetY += disY / 10;
					}
					var x = -Math.floor(this._nowOffsetX);
					var y = -Math.floor(this._nowOffsetY);
					core.bigmap.canvas.forEach(function (cn) {
						core.control.setGameCanvasTranslate(cn, x, y);
					});
					core.relocateCanvas('route', core.status.automaticRoute.offsetX + x, core.status.automaticRoute.offsetY + y);
					core.setGameCanvasTranslate('hero', x + this._targetOffsetX, y + this._targetOffsetY);
				}
			};

			// 更新逻辑主体
			this.update = function () {
				this.updateTargetPosition();
				this.updateRefreshFlag();
				this.updateCameraPosition();
			};
		};

		// 其实只注释了最后一行，只能这样了
		control.drawHero = function (status, offset) {
			if (!core.isPlaying() || !core.status.floorId || core.status.gameOver) return;
			var x = core.getHeroLoc('x'),
				y = core.getHeroLoc('y'),
				direction = core.getHeroLoc('direction');
			status = status || 'stop';
			offset = offset || 0;
			var way = core.utils.scan[direction];
			var dx = way.x,
				dy = way.y,
				offsetX = dx * offset,
				offsetY = dy * offset;
			core.bigmap.offsetX = core.clamp((x - core.__HALF_SIZE__) * 32 + offsetX, 0, 32 * core.bigmap.width - core.__PIXELS__);
			core.bigmap.offsetY = core.clamp((y - core.__HALF_SIZE__) * 32 + offsetY, 0, 32 * core.bigmap.height - core.__PIXELS__);
			core.clearAutomaticRouteNode(x + dx, y + dy);
			core.clearMap('hero');

			if (!core.hasFlag('hideHero')) {
				this._drawHero_getDrawObjs(direction, x, y, status, offset).forEach(function (block) {
					core.drawImage('hero', block.img, block.heroIcon[block.status] * block.width,
						block.heroIcon.loc * block.height, block.width, block.height,
						block.posx + (32 - block.width) / 2, block.posy + 32 - block.height, block.width, block.height);
				});
			}

			core.control.updateViewport();
			//core.setGameCanvasTranslate('hero', 0, 0);
		};

		// 复写转发
		core.drawHero = function (status, offset) {
			return core.control.drawHero(status, offset);
		};

		// 创建摄像机对象
		this.camera = new this.Camera();

		// 帧事件 更新摄像机
		this.updateCameraEx = function () {
			this.camera.update();
		};

		// 代理原本的镜头事件
		control.updateViewport = function () {
			core.plugin.camera.requestCameraUpdate();
		};

		// 更变楼层的行为追加，重置镜头
		events.prototype.changingFloor = function (floorId, heroLoc, fromLoad) {
			this.eventdata.changingFloor(floorId, heroLoc, fromLoad);
			core.plugin.camera.resetCamera();
		};

		// 注册帧事件
		core.registerAnimationFrame('smoothCameraFlash', true, this.updateCameraEx.bind(this));
	},
    "fitScreen": function () {
	// 画面按窗口大小等比放大（原版最多 1 倍，大窗口里只占中间一小块）。
	// 布局沿用引擎原逻辑，只去掉缩放上限。
	// 放大时使用浏览器默认的平滑缩放（最近邻在非整数倍下像素感太重）

	var FIT = 0.7; // 撑满窗口的比例，1 为贴边
	core.control.resize = function () {
		if (main.mode == 'editor') return;
		var clientWidth = main.dom.body.clientWidth, clientHeight = main.dom.body.clientHeight;
		var CANVAS_WIDTH = core.__PIXELS__ + 6, BAR_WIDTH = Math.round(core.__PIXELS__ * 0.31) + 3;
		if (clientWidth >= CANVAS_WIDTH + BAR_WIDTH || (clientWidth > clientHeight && clientHeight < CANVAS_WIDTH)) {
			core.domStyle.isVertical = false;
			core.domStyle.scale = FIT * Math.min(clientHeight / CANVAS_WIDTH, clientWidth / (CANVAS_WIDTH + BAR_WIDTH));
		} else {
			core.domStyle.isVertical = true;
			var col0 = core.flags.statusCanvas ? (core.flags.statusCanvasRowsOnMobile || 3) : 3;
			// 竖屏：宽度撑满，同时整体高度（状态栏 + 地图 + 工具栏）不超过窗口
			var h = CANVAS_WIDTH + (32 * col0 + 6) + 6 + 44 + 6;
			core.domStyle.scale = Math.min(clientWidth / CANVAS_WIDTH, clientHeight / h); // 竖屏（手机）照旧撑满宽度
		}
		var statusDisplayArr = this._shouldDisplayStatus(), count = statusDisplayArr.length;
		var statusCanvas = core.flags.statusCanvas, statusCanvasRows = core.flags.statusCanvasRowsOnMobile || 3;
		var col = statusCanvas ? statusCanvasRows : Math.ceil(count / 3);
		var globalAttribute = core.status.globalAttribute || core.initStatus.globalAttribute;
		var obj = {
			clientWidth: clientWidth,
			clientHeight: clientHeight,
			CANVAS_WIDTH: CANVAS_WIDTH,
			BAR_WIDTH: BAR_WIDTH,
			outerSize: core.__PIXELS__ * core.domStyle.scale + 6, // 边框固定 3px，内框正好等于地图大小
			globalAttribute: globalAttribute,
			border: '3px ' + globalAttribute.borderColor + ' solid',
			statusDisplayArr: statusDisplayArr,
			count: count,
			col: col,
			statusBarHeightInVertical: core.domStyle.isVertical ? (32 * col + 6) * core.domStyle.scale + 6 : 0,
			toolbarHeightInVertical: core.domStyle.isVertical ? 44 * core.domStyle.scale + 6 : 0,
			is15x15: core.__SIZE__ == 15
		};
		this._doResize(obj);
		if (!core.domStyle.isVertical) {
			// 总宽 = 左栏 + 地图外框，避免两者之间出现缝隙
			var total = BAR_WIDTH * core.domStyle.scale + obj.outerSize;
			core.dom.gameGroup.style.width = total + 'px';
			core.dom.gameGroup.style.left = (clientWidth - total) / 2 + 'px';
		}
		this.setToolbarButton();
		core.updateStatusBar();
	};
},
    "achievements": function () {
	// 成就系统（仿魔塔黑曜石）：成就记录在全局变量里，不跟存档；达成时弹提示。
	// 得过任意成就后，开局选项出现“荣誉”，进入荣誉之地查看。
	var ACH = [
		{ id: 'firstWin', name: '初出茅庐', desc: '第一次战斗胜利', pt: 3, icon: 'greenSlime' },
		{ id: 'captain', name: '骷髅队长', desc: '击败 10 层骷髅队长', pt: 5, icon: 'skeletonCaptain' },
		{ id: 'cross', name: '圣光庇护', desc: '获得十字架', pt: 3, icon: 'cross' },
		{ id: 'vampire', name: '吸血鬼', desc: '击败 20 层吸血鬼', pt: 5, icon: 'vampire' },
		{ id: 'brave', name: '勇者之证', desc: '获得勇者之章', pt: 3, icon: 'proof_brave' },
		{ id: 'sage', name: '贤者之证', desc: '获得贤者之章', pt: 3, icon: 'proof_sage' },
		{ id: 'tyrant', name: '霸者之证', desc: '获得霸者之章', pt: 3, icon: 'proof_tyrant' },
		{ id: 'darkKnight', name: '黑暗骑士', desc: '击败黑暗骑士', pt: 5 },
		{ id: 'deep', name: '地底深处', desc: '到达地下 15 层', pt: 3, icon: 'fly' },
		{ id: 'slaveMaster', name: '奴隶主', desc: '击败奴隶主', pt: 5 },
		{ id: 'demonKing', name: '魔王', desc: '击败魔王Zeno', pt: 15 },
		{ id: 'archMage', name: '大法师', desc: '击败大法师', pt: 5 },
		{ id: 'doorYellow', name: '开门大吉', desc: '打开第一扇黄门', pt: 3 },
		{ id: 'doorBlue', name: '蓝门之后', desc: '打开第一扇蓝门', pt: 3 },
		{ id: 'doorRed', name: '红门之后', desc: '打开第一扇红门', pt: 5 },
		{ id: 'sword1', name: '铁剑在手', desc: '获得铁剑', pt: 3 },
		{ id: 'shield1', name: '铁盾护身', desc: '获得铁盾', pt: 3 },
		{ id: 'swordMax', name: '神兵', desc: '获得最强的剑', pt: 5 },
		{ id: 'shieldMax', name: '神盾', desc: '获得最强的盾', pt: 5 },
		{ id: 'fly', name: '御风而行', desc: '使用楼层传送器', pt: 3 },
		{ id: 'kill100', name: '百战', desc: '累计击败 100 只怪物', pt: 5 },
		{ id: 'kill300', name: '千锤百炼', desc: '累计击败 300 只怪物', pt: 15 },
		{ id: 'lowHp', name: '九死一生', desc: '战斗胜利后体力不超过 10', pt: 3 },
		{ id: 'skeletonSlayer', name: '骷髅终结者', desc: '击败第一区域（主塔 0-10 层）的所有骷髅，包括之后才出现的', pt: 15 },
		{ id: 'hp5000', name: '不灭之躯', desc: '体力达到 5000', pt: 5 },
		{ id: 'atk100', name: '力拔山河', desc: '攻击达到 100', pt: 5 },
		{ id: 'def100', name: '铜墙铁壁', desc: '防御达到 100', pt: 5 },
		{ id: 'crossVampire', name: '圣光审判', desc: '带着十字架击败吸血鬼', pt: 5 },
		{ id: 'magicSword', name: '魔剑士', desc: '同时拥有两枚章', pt: 15 },
		{ id: 'finalWin', name: '魔塔之主', desc: '通关游戏', pt: 15 }
	];
	// 每个成就一块石牌浮雕（images/terrains.png）：ach_<id> 为达成，ach_<id>_off 为未达成（暗灰）。
	// 石牌在荣誉之地的位置由 floors/honor.js 里调用 achInfo(i) 的事件决定，可在编辑器里随意挪动。
	var spotsOf = function () {
		var ev = (core.floors.honor || {}).events || {}, r = [];
		for (var k in ev) {
			var m = JSON.stringify(ev[k]).match(/achInfo\((\d+)\)/);
			if (m) r.push([+k.split(',')[0], +k.split(',')[1], +m[1]]);
		}
		return r;
	};

	// 用 getLocalStorage 而不是 getGlobal：getGlobal 每调用一次都会往录像里记一条，状态栏每帧检查成就会让录像无限膨胀。
	var has = function (a) { return !!core.getLocalStorage('ach_' + a.id, false); };
	var total = function () { return ACH.reduce(function (s, a) { return s + a.pt; }, 0); };
	var got = function () { return ACH.reduce(function (s, a) { return s + (has(a) ? a.pt : 0); }, 0); };

	this.achUnlock = function (id) {
		if (core.isReplaying() || core.status.floorId == 'honor') return;
		var a = ACH.filter(function (x) { return x.id == id; })[0];
		if (!a || has(a)) return;
		core.setGlobal('ach_' + a.id, true);
		core.setGlobal('achAny', 1);
		core.playSound('confirm.mp3');
		core.insertAction(['\t[达成成就-' + a.name + ',ach_' + a.id + ']' + a.desc + '\n成就点数：' + a.pt]);
	};

	// 状态类成就：每次刷新状态栏时检查（开销很小）
	var check = function () {
		if (!core.isPlaying() || !core.status.hero || core.isReplaying()) return;
		var f = core.status.floorId || '';
		if (f == 'honor') return;
		if (core.getFlag('hasCross', 0) == 1) core.plugin.achUnlock('cross');
		if (core.hasFlag('proof')) {
			if (core.hasItem('proof_brave')) core.plugin.achUnlock('brave');
			if (core.hasItem('proof_sage')) core.plugin.achUnlock('sage');
			if (core.hasItem('proof_tyrant')) core.plugin.achUnlock('tyrant');
		}
		if (f == 'base_15' || f == 'base_plus_15') core.plugin.achUnlock('deep');
		var w = core.getFlag('curWeapon', null), ar = core.getFlag('curArmor', null);
		var sg = core.hasFlag('startGear');   // 开局的勇者之剑/盾不算
		if (w && !sg) core.plugin.achUnlock('sword1');
		if (ar && !sg) core.plugin.achUnlock('shield1');
		if (w == 'sword5' && !sg) core.plugin.achUnlock('swordMax');
		if (ar == 'shield5' && !sg) core.plugin.achUnlock('shieldMax');
		if (core.status.hero.hp >= 5000) core.plugin.achUnlock('hp5000');
		if (core.status.hero.atk >= 100 && !sg) core.plugin.achUnlock('atk100');
		if (core.status.hero.def >= 100 && !sg) core.plugin.achUnlock('def100');
		if (['proof_brave', 'proof_sage', 'proof_tyrant'].filter(function (p) { return core.hasItem(p); }).length >= 2) core.plugin.achUnlock('magicSword');
	};
	var _update = core.control.updateStatusBar;
	core.control.updateStatusBar = function () {
		var r = _update.apply(this, arguments);
		try { check(); } catch (e) { main.log(e); }
		return r;
	};
	// 战斗类成就
	// 骷髅终结者：第一区域（本周目的主塔 0-10 层）原始地图里所有骷髅（含隐藏的）都要击败。
	// 按“楼层 + 怪物种类”计数而不是按坐标，因为骷髅队长会移动位置。
	var isSkel = function (id) { var e = core.material.enemys[id]; return !!(e && /骷髅/.test(e.name)); };
	var skelFloors = function () {
		var pre = core.getFlag('round2', 0) == 1 ? 'floor_plus_' : 'floor_', r = [];
		for (var i = 0; i <= 10; i++) r.push(pre + i);
		return r;
	};
	var skelTarget = function () {
		var t = {};
		skelFloors().forEach(function (f) {
			var fl = core.floors[f]; if (!fl) return;
			fl.map.forEach(function (row) {
				row.forEach(function (n) {
					var b = core.maps.blocksInfo[n];
					if (b && b.cls == 'enemys' && isSkel(b.id)) { t[f] = t[f] || {}; t[f][b.id] = (t[f][b.id] || 0) + 1; }
				});
			});
		});
		return t;
	};
	this.achSkelProgress = function () {
		var t = skelTarget(), k = core.getFlag('skelKills', {}), need = 0, done = 0;
		for (var f in t) for (var id in t[f]) { need += t[f][id]; done += Math.min(t[f][id], ((k[f] || {})[id] || 0)); }
		return [done, need];
	};
	var _afterBattle = core.events.eventdata.afterBattle;
	core.events.eventdata.afterBattle = function (rawId, x, y) {
		var r = _afterBattle.apply(this, arguments);   // 原逻辑仍用原始 id（临时怪物带着本场战斗实际生效的属性）
		// 经典模式（战斗动画）下传进来的是临时 id，成就判断换回真实怪物 id
		var enemyId = rawId;
		if (enemyId == '__testMonster__') enemyId = ((core.material.enemys.__testMonster__ || {}).id) || ((core.status.hero.battle_enemy || {}).id) || enemyId;
		try {
			var f0 = core.status.floorId;
			if (isSkel(enemyId) && skelFloors().indexOf(f0) >= 0) {
				var k = core.getFlag('skelKills', {});
				k[f0] = k[f0] || {}; k[f0][enemyId] = (k[f0][enemyId] || 0) + 1;
				core.setFlag('skelKills', k);
				var p = core.plugin.achSkelProgress();
				if (p[1] > 0 && p[0] >= p[1]) core.plugin.achUnlock('skeletonSlayer');
			}
			core.plugin.achUnlock('firstWin');
			if (enemyId == 'skeletonCaptain') core.plugin.achUnlock('captain');
			if (enemyId == 'vampire') core.plugin.achUnlock('vampire');
			if (enemyId == 'vampire' && core.getFlag('hasCross', 0) == 1) core.plugin.achUnlock('crossVampire');
			if (enemyId == 'redSwordsman') core.plugin.achUnlock('slaveMaster');
			if (enemyId == 'darkKnight') core.plugin.achUnlock('darkKnight');
			if (enemyId == 'blackMagician') core.plugin.achUnlock('archMage');
			if (enemyId == 'vamp') core.plugin.achUnlock('demonKing');
			if (core.status.hero.hp > 0 && core.status.hero.hp <= 10) core.plugin.achUnlock('lowHp');
			if (!core.isReplaying()) {
				var n = core.getLocalStorage('achKills', 0) + 1;   // 累计击杀跨存档计数
				core.setGlobal('achKills', n);
				if (n >= 100) core.plugin.achUnlock('kill100');
				if (n >= 300) core.plugin.achUnlock('kill300');
			}
		} catch (e) { main.log(e); }
		return r;
	};

	var _afterOpenDoor = core.events.eventdata.afterOpenDoor;
	core.events.eventdata.afterOpenDoor = function (doorId, x, y) {
		var r = _afterOpenDoor.apply(this, arguments);
		try {
			if (doorId == 'yellowDoor') core.plugin.achUnlock('doorYellow');
			if (doorId == 'blueDoor') core.plugin.achUnlock('doorBlue');
			if (doorId == 'redDoor') core.plugin.achUnlock('doorRed');
		} catch (e) { main.log(e); }
		return r;
	};
	var _flyTo = core.control.controldata.flyTo;
	core.control.controldata.flyTo = function (toId, callback) {
		var r = _flyTo.apply(this, arguments);
		try { if (r !== false) core.plugin.achUnlock('fly'); } catch (e) { main.log(e); }
		return r;
	};
	var _win = core.events.eventdata.win;
	core.events.eventdata.win = function (reason) {
		// 通关时可能马上结束游戏，不弹提示框，只记录
		try { if (!core.isReplaying()) { core.setGlobal('ach_finalWin', true); core.setGlobal('achAny', 1); } } catch (e) { main.log(e); }
		return _win.apply(this, arguments);
	};

	// 旧存档没有记录当前武器/防具（左栏装备槽会显示“无”）：读档后按“地图上已被拿走的剑盾”推断一次。
	var inferEquip = function () {
		if (!core.isPlaying() || core.hasFlag('equipInferred')) return;
		if (core.plugin.inMagic && core.plugin.inMagic()) return; // 幻境里剑盾被魔王拿走是剧情，不要补
		core.setFlag('equipInferred', true);
		if (core.hasFlag('curWeapon') && core.hasFlag('curArmor')) return;
		var best = { sword: 0, shield: 0, roundShield: false };
		core.floorIds.forEach(function (f) {
			var fl = core.floors[f], st = core.status.maps[f];
			if (!fl || !st || !st.blocks) return;
			var now = {};
			st.blocks.forEach(function (b) { if (!b.disable && b.event) now[b.x + ',' + b.y] = b.event.id; });
			fl.map.forEach(function (row, y) {
				row.forEach(function (n, x) {
					var b = core.maps.blocksInfo[n]; if (!b || b.cls != 'items') return;
					var ev = (fl.events || {})[x + ',' + y];
					if (ev && ev.enable === false) return;          // 原本隐藏的不算
					if (now[x + ',' + y] == b.id) return;            // 还在地图上，没被拿走
					var m = b.id.match(/^(sword|shield)(\d+)$/);
					if (m) best[m[1]] = Math.max(best[m[1]], +m[2]);
					if (b.id == 'roundShield') best.roundShield = true;
				});
			});
		});
		if (!core.hasFlag('curWeapon') && best.sword > 0) core.setFlag('curWeapon', 'sword' + best.sword);
		if (!core.hasFlag('curArmor')) {
			if (best.shield > 0) core.setFlag('curArmor', 'shield' + best.shield);
			else if (best.roundShield) core.setFlag('curArmor', 'roundShield');
		}
	};
	var _loadData = core.control.controldata.loadData;
	core.control.controldata.loadData = function (data, callback) {
		return _loadData.call(this, data, function () {
			try { core.removeFlag('equipInferred'); inferEquip(); core.updateStatusBar(); } catch (e) { main.log(e); }
			if (callback) callback.apply(this, arguments);
		});
	};

	// ---------- 荣誉之地 ----------
	this.achRefreshHonor = function () {
		spotsOf().forEach(function (p) {
			var a = ACH[p[2]]; if (!a) return;
			core.setBlock(core.getNumberById('ach_' + a.id + (has(a) ? '' : '_off')), p[0], p[1]);
		});
	};
	this.achInfo = function (i) {
		var a = ACH[i]; if (!a) return;
		core.insertAction(has(a)
			? ['\t[' + a.name + '（已达成）,ach_' + a.id + ']' + a.desc + '\n成就点数：' + a.pt]
			: ['\t[' + a.name + '（未达成）,ach_' + a.id + '_off]' + a.desc + '\n成就点数：' + a.pt]);
	};
	this.achStatue = function () {
		var n = ACH.filter(has).length;
		core.insertAction([{
			type: 'choices',
			text: '\t[荣誉之门,blueShop]已达成 ' + n + '/' + ACH.length + ' 项成就\n成就点数：' + got() + '/' + total() + '\n你想要做什么？',
			choices: [
				{ text: '查看全部成就', action: [ACH.map(function (a) { return (has(a) ? '★ ' : '☆ ') + a.name + '（' + a.pt + '）：' + a.desc; }).join('\n')] },
				{ text: '返回标题', action: [{ type: 'restart' }] },
				{ text: '清除所有成就记录', color: [255, 80, 80, 1], action: [{
					type: 'choices', text: '\t[魔神石像,blueShop]真的要清除所有成就吗？清除后需要重新达成。',
					choices: [
						{ text: '确定清除', action: [{ type: 'function', function: 'function(){ core.plugin.achClear(); }' }, { type: 'restart' }] },
						{ text: '算了', action: [] }
					]
				}] },
				{ text: '留下来看看', action: [] }
			]
		}]);
	};
	this.achClear = function () {
		ACH.forEach(function (a) { core.setGlobal('ach_' + a.id, false); });
		core.setGlobal('achAny', 0);
		core.setGlobal('achKills', 0);
	};
},
    "bestiary": function () {
	// 怪物图鉴（仿荣誉之地）：在任何楼层第一次见到某只怪即解锁，击败次数另计；
	// 记录在全局变量里，不跟存档。展厅为 floors/bestiary_1.js、bestiary_2.js。
	var LORE = {
	  "greenSlime": "魔塔里最常见的居民，软乎乎的，据说是魔力渗进泥土长出来的。",
	  "redSlime": "比绿色的脾气更冲一点，碰到就会烫手。",
	  "blackSlime": "在伯爵的领地里吸饱了暗影，变得又硬又沉。",
	  "bat": "成群结队地在塔里乱飞，最喜欢偷袭迷路的冒险者。",
	  "bigBat": "一回合能咬你两口，防御再高也要掉两次血。",
	  "skeleton": "骷髅军团里最普通的士兵，骨头脆，嗓门大。",
	  "skeletonSoilder": "拿着盾的骷髅兵，比普通骷髅耐打一些。",
	  "skeletonCaptain": "第一区域的头目，自称\"骷髅队长\"。可惜，不是勇士要找的那位队长。",
	  "grayPriest": "会用雷电魔法的术士，伤害不高，但每回合都会电你一下。",
	  "bluePriest": "伯爵的祭司之一，用寒冰魔法守着第二区域。",
	  "redPriest": "擅长火焰与封印的术士，打倒所有施法者才能解开他们的封印。",
	  "zombie": "伯爵豢养的\"家畜\"，行动迟缓，咬人很疼。",
	  "zombieKnight": "穿上了铠甲的丧尸，力气大得惊人。十字架能让它的防御形同虚设。",
	  "yellowGuard": "魔塔的初级守卫，守着机关门，打倒他们门就会打开。",
	  "blueGuard": "中级守卫，铠甲厚重，一般的剑砍上去只会冒火星。",
	  "redGuard": "高级守卫，几乎是魔塔里最坚固的看门人。",
	  "rock": "会动的石头，攻击不高，防御却硬得离谱。",
	  "vampire": "第二区域的主人，千年来没有人伤得了他——直到有人带着十字架上楼。",
	  "ghostSkeleton": "在幻境里游荡的亡灵骷髅，没人知道它们生前是谁。",
	  "soldier": "幻境中的冥战士，据说是被困在美梦里太久，忘了自己是谁的人。",
	  "brownWizard": "大法师的学徒，笑容和善，招待你的时候从不还手……真的吗？",
	  "redWizard": "幻境里的巫师。对他们出手之前，最好先想一想。",
	  "great_magician": "红衣大法师，幻境里唯一真实的施法者。",
	  "blackMagician": "幻境的主人。他说留在这里，就再也不用受苦了。",
	  "slimeMan": "半透明的幽灵，穿过它的时候会觉得有点冷。",
	  "steelRock": "铁铸的石怪，防御高得能让人怀疑人生。",
	  "slave_0": "被魔王抓来干苦力的奴隶，眼神空洞，只会听命行事。",
	  "slave_5": "另一种被抓来的奴隶，身上的盔甲不知是从哪个冒险者那里扒来的。",
	  "slave_1": "拿起了剑的奴隶，据说表现好的能当上奴隶士兵。",
	  "slave_2": "更能打的奴隶士兵，手上的剑磨得发亮。",
	  "slave_3": "一手剑一手盾的奴隶士兵，盾是从骷髅兵那里捡来的。",
	  "slave_4": "身披灵骷髅兵铠甲的奴隶士兵，已经分不清是人还是亡灵了。",
	  "redSwordsman": "奴隶们的监工，头盔上的 V 字装饰是他最得意的东西。",
	  "swordsman": "地下的步兵，盔甲朴素，但出手毫不含糊。",
	  "swordsmanBlue": "双剑刺客，一回合能砍你好几刀。",
	  "swordsmanRed": "红甲武士，骑士领主麾下的精锐，奉命镇守下半塔。",
	  "E370": "躲在远处放箭的弓兵，总能抢先出手。",
	  "yellowKnight": "魔塔的骑士，黄金铠甲在黑暗里格外显眼。",
	  "redKnight": "红甲骑士，盾上的十字纹是骑士团的徽记。",
	  "blueKnight": "铁骑士，头盔上刻着同色的十字。和蓝门是一个颜色。",
	  "darkKnight": "骑士领主，地下骑士们的首领，铠甲黑得发亮。",
	  "whiteKing": "魔法警卫，魔王手下的精锐。就是他们把勇士围在了 3 楼。",
	  "whiteKing2": "魔法警卫的另一种装束，头盔不变，身形更像魔王。",
	  "greenKing": "魔法元帅，统领魔法警卫的将军。",
	  "yellowKing": "魔王Zeno的部将，穿着和主人相似的长袍，常被闯塔的人错认成魔王。",
	  "redKing": "魔王Zeno，这座塔的主人。他欢迎每一位挑战者，还记得每一个挑战者的名字。",
	  "slimelord": "史莱姆们的王，体型大到能堵住整条走廊。",
	  "redBat": "吸血的红蝙蝠，一口下去连防御都挡不住。",
	  "bigBatRed": "红蝙蝠里个头最大的一只，翅膀张开能遮住半个房间。",
	  "magicDragon": "盘踞在地下的巨龙，杰克说可以挖条暗道绕过去。",
	  "octopus": "堵在湖底的巨型八爪鱼，八条腿各管各的。",
	  "badHero": "另一个你。打倒他，才能拿到真正的力量。"
	};
	var seen = function () { return core.getLocalStorage('bestiarySeen', null) || {}; };
	var kills = function () { return core.getLocalStorage('bestiaryKills', null) || {}; };
	this.bestiaryCount = function () { var s = seen(), n = 0; for (var k in LORE) if (s[k]) n++; return n + '/' + Object.keys(LORE).length; };

	// 见到即解锁：每次刷新状态栏时扫一遍当前楼层可见的怪
	var scan = function () {
		if (!core.isPlaying() || core.isReplaying() || !core.status.thisMap) return;
		var f = core.status.floorId || '';
		if (/^bestiary|^honor$|^test$/.test(f)) return;
		var s = null;
		core.status.thisMap.blocks.forEach(function (b) {
			if (b.disable || !b.event || b.event.cls != 'enemys') return;
			var id = b.event.id; if (!LORE[id]) return;
			var cur = s || seen(); if (cur[id]) return;
			s = cur; s[id] = 1;
		});
		if (s) { core.setGlobal('bestiarySeen', s); core.setGlobal('bestiaryAny', 1); }
	};
	var _update = core.control.updateStatusBar;
	core.control.updateStatusBar = function () {
		var r = _update.apply(this, arguments);
		try { scan(); } catch (e) { main.log(e); }
		return r;
	};
	// 击败次数
	var _afterBattle = core.events.eventdata.afterBattle;
	core.events.eventdata.afterBattle = function (rawId, x, y) {
		var r = _afterBattle.apply(this, arguments);
		try {
			var id = rawId;
			if (id == '__testMonster__') id = ((core.material.enemys.__testMonster__ || {}).id) || ((core.status.hero.battle_enemy || {}).id) || id;
			if (LORE[id] && !core.isReplaying()) {
				var k = kills(); k[id] = (k[id] || 0) + 1; core.setGlobal('bestiaryKills', k);
				var s = seen(); if (!s[id]) { s[id] = 1; core.setGlobal('bestiarySeen', s); core.setGlobal('bestiaryAny', 1); }
			}
		} catch (e) { main.log(e); }
		return r;
	};

	// ---------- 展厅 ----------
	var spotsOf = function () {
		var ev = (core.floors[core.status.floorId] || {}).events || {}, r = [];
		for (var k in ev) {
			var m = JSON.stringify(ev[k]).match(/bestiaryInfo\('(\w+)'\)/);
			if (m) r.push([+k.split(',')[0], +k.split(',')[1], m[1]]);
		}
		return r;
	};
	// 图鉴默认全部开放：所有雕像都显示真身
	this.bestiaryRefresh = function () {
		spotsOf().forEach(function (p) {
			var n = core.getNumberById('bst_' + p[2]);
			if (n) core.setBlock(n, p[0], p[1]);
		});
	};
	this.bestiaryInfo = function (id) {
		var e = core.material.enemys[id]; if (!e) return;
		core.insertAction(['\t[' + e.name + ',' + id + ']' + (LORE[id] || '')]);
	};
	this.bestiaryExit = function () {
		core.insertAction([{
			type: 'choices', text: '\t[怪物图鉴]共收录 ' + Object.keys(LORE).length + ' 种怪物。',
			choices: [{ text: '返回标题', action: [{ type: 'restart' }] }, { text: '再看看', action: [] }]
		}]);
	};
}
}
