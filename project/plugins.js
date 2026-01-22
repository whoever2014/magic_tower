var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {

	console.log("插件编写测试");

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
		height: 128,
		left: 8,
		top: 96
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
			if (keycode == 81) {
				var enemy = core.status.hero.battle_enemy;
				core.status.route.push("rt:" + core.status.hero.hp + ":" + core.status.hero.money + ":" + core.status.hero.experience + ":" + enemy.id);
				core.insertAction({
					"type": "break"
				});
				core.battle_exit();
				return true;
			}
			if (keycode == 80) {
				if (flags.battleSpeed != 9) flags.battleSpeed = 9;
				else flags.battleSpeed = 30;
				return true;
			}
		}
	}, 51);

	core.registerAction('onclick', '_battle_onclick_lockControl', function (x, y) {
		if ((core.status.hero || {}).battleStatus == "afterBattle") {
			core.status.hero.battleStatus = "end";
			//return true;
		} else if ((core.status.hero || {}).isBattling) {
			if (x >= 10 && x <= 12 && y == 6) {
				var enemy = core.status.hero.battle_enemy;
				core.status.route.push("rt:" + core.status.hero.hp + ":" + core.status.hero.money + ":" + core.status.hero.experience + ":" + enemy.id);
				core.insertAction({ "type": "break" });
				core.battle_exit();
			}
			if (x >= 5 && x <= 7 && y == 6) {
				if (flags.battleSpeed != 9) flags.battleSpeed = 9;
				else flags.battleSpeed = 30;
			}
			//return true;
		}
	}, 51);

	this.updateFg = function () {};

	this.battle_drawUI = function () {
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top;
		var ctx = core.getContextByName("__battle__") || core.createCanvas("__battle__", left, top, width, height, 66);

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
		var fontSize = 15;
		// 字体是否加粗
		var isBold = false;
		// 字体是否是斜体
		var isItalic = false;
		// 颜色
		var ncolor = "white";
		// 勇士跟怪物的box
		// 勇士：

		// 坐标 box的尺寸
		var bx = 42,
			by = 20 + fontSize * 3 / 4,
			size = 28;
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
		core.fillText(ctx, "VS", ctx.canvas.width / 2, by - fontSize * 3 / 4, "white", "italic bold 17px myFont1");
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
		var textFontSize = 14;
		var isBold = false;
		var isItalic = false;
		var textFont = (isItalic ? "italic " : "") + (isBold ? "bold " : "") + textFontSize + "px myFont1";

		// 绘制的能力项 可以仿照增加 格式为"勇士属性英文": "勇士属性名"
		var toDraw = {
			"hp": "体力",
			"atk": "攻击力",
			"def": "防御力",
			"agi": "敏捷"
		};

		// 绘制行距
		var lineHeight = 10;

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
		core.fillText(ctx, text2, width / 2, ty + offsetY, "white", "16px myFont1");
		core.setTextAlign(ctx, "left");
		var bx2 = width - bx - size;
		// 撤退(Q)
		var hp = (core.status.hero.battle_enemy || {}).hp == null ? 1 : (core.status.hero.battle_enemy || {}).hp;
		if (core.status.hero.hp <= 0) {
			core.playSound("gameover.mp3");
			return core.lose("战斗失败");
		}
		if (!core.status.hero.isBattling && hp > 0) {
			core.fillText(ctx, " 撤退(Q)", bx2, ty + offsetY, "yellow", "14px myFont1"); //yzm：原为"italic bold 16px myFont1"
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
		// 是否闪避成功
		var dodge = false;
		// 攻击次数
		var times = 1;
		var hero_def = core.getRealStatusOrDefault(hero, "def");
		var hero_atk = core.getRealStatusOrDefault(hero, "atk");
		var hero_agi = core.getRealStatusOrDefault(hero, "agi");
		// 伤害计算
		var mon_atk = enemy.atk,
			mon_def = enemy.def,
			mon_cri = enemy.cri,
			mon_agi = enemy.agi,
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

		if (hero_agi != null && hero_agi > 0) {
			per_damage -= Math.ceil(per_damage*hero_agi/100);
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
		// 是否闪避成功
		var dodge = false;
		// 攻击次数
		var times = 1;
		// 动画
		var animate = core.status.hero.battleAnimate;
		var originAnimate = animate;
		// 勇士属性
		var hero_agi = core.getRealStatusOrDefault(hero, "agi"),
			hero_cri = core.getRealStatusOrDefault(hero, "cri"),
			hero_atk = core.getRealStatusOrDefault(hero, "atk"),
			hero_def = core.getRealStatusOrDefault(hero, "def");

		var mon_atk = enemy.atk,
			mon_def = enemy.def,
			mon_cri = enemy.cri,
			mon_agi = enemy.agi,
			mon_special = enemy.special;

		// 魔攻
		if (core.hasSpecial(mon_special, 2) && core.getFlag('antimage3',0)==1){
			mon_def = Math.ceil(mon_def/2);
		}

		var atkm = core.getFlag('atkm', 0),
			defm = core.getFlag('defm', 0); //录入攻防临界

		var hpd = Math.max(0, hero_atk - mon_def);
		var hero_per_damage = Math.max(0, hero_atk - mon_def);

		var jf = Math.max(0, hero_atk - mon_def * 0.23 - hpd) * 1;

		//十字架
		if (core.getFlag('hasCross',0)==1) {		
			if(enemy.id == "zombie" || enemy.id == "zombieKnight" || enemy.id == "vampire"){
 				hero_per_damage += mon_def;
			}
		}

		//攻击临界
		var crit = false, extra = false;
		if (hero_per_damage <= 0 && (hero_atk + atkm >= mon_def)) {
			hero_per_damage = 0;
		}
		if (core.getFlag('proof') == 'proof_brave' || core.getFlag('proof')=='proof_brave_sage'){
			crit = true;
	            hero_per_damage += Math.ceil(0.25*hero_per_damage);		    
		}
		if (core.getFlag('proof') == 'proof_brave' || core.getFlag('proof')=='proof_brave_sage'){
			if(core.getFlag('proof_lv') > 1) {
				times = 2;
			}
		}

		if(core.getFlag('hasDevine',0)==0){
			if (mon_agi != null && mon_agi > 0) {
				hero_per_damage -= Math.ceil(hero_per_damage*mon_agi/100);
				dodge = true;
			}
		}

		if (core.getFlag('proof') == 'proof_brave'|| core.getFlag('proof')=='proof_brave_sage') {
			if(core.getFlag('proof_lv') == 3){
				var extraDamage = Math.ceil(hero_atk*0.08);
				hero_per_damage += extraDamage;
				extra = true;
			}
		}


		if (dodge) animate = "miss";

		else if (hero_per_damage == 0) animate = "block";
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
		var info = core.plugin.battleInfo;
		var width = info.width,
			height = info.height,
			left = info.left,
			top = info.top,
			bx = info.bx,
			by = info.by,
			size = info.size;
		if (name != "hero") bx = width - bx - size;
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
					"function": "function(){core.status.hero.battle_enemy.hp = Math.max(0, core.status.hero.battle_enemy.hp - " + hero_per_damage + ");core.battle_battling_draw(null, core.status.hero.battle_enemy);}"
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
		// 一回合攻击times次
		var maxEnemyHp = flags.enemyHp;
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
						"function": "function(){core.status.hero.hp -= " + per_damage + ";core.battle_battling_draw(null,core.status.hero.battle_enemy);\nif (core.status.hero.hp < 0) {\n\tif (core.hasItem(\"cross\")) {\n\t\tcore.removeItem(\"cross\", 1);\n\t\tcore.status.hero.hp += 2000;\n\t}\n\tif (core.status.hero.hp <= 0) {\n\t\tcore.status.hero.hp = 0;\n\t\tcore.updateStatusBar();\n\t\tcore.status.hero.isBattling = false;\n\t\tcore.insertAction([{\n\t\t\t\"type\": \"animate\",\n\t\t\t\"name\": " + core.status.hero.battleAnimate + ",\n\t\t\t\"loc\": [" + heroBox_x + ", " + heroBox_y + "]\n\t\t}, {\n\t\t\t\"type\": \"exit\"\n\t\t}], null, null, function () {\n\t\t\tcore.battle_battling_draw(null, core.status.hero.battle_enemy);\n\t\t});\n\t}\n}\n}"
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



			if (type == 'proof_brave' && per_damage == 0 && core.getFlag("xinjing", 0) == 1) {
				todo.push({ "type": "stopSound" })
				todo.push({
					"type": "animate",
					"name": bfAnimate,
					"async": true,
					"loc": [heroBox_x, heroBox_y]
				});

			}

			if (type == 'proof_sage' || type == 'proof_brave_sage') {
				if (per_damage == 0) {
					todo.push({ "type": "stopSound" })
					todo.push({
						"type": "animate",
						"name": sfAnimate,
						"async": true,
						"loc": [heroBox_x, heroBox_y]
					});
				}
				if (lv == 1) {
					per_damage = Math.floor(per_damage*0.75);
					todo.push({
						"type": "animate",
						"name": sanlAnimate,
						"async": true,
						"loc": [heroBox_x, heroBox_y]
					});
				} else if (lv == 2) {
                              if(!flags.sageShield && times==1){
                                    flags.sageShield = 1;
						per_damage = -Math.ceil(0.2*per_damage);
						//per_damage = 0;
						animate = "miss";
						todo.push({ "type": "stopSound" })
						todo.push({
							"type": "animate",
							"name": shAnimate,
							"async": true,
							"loc": [heroBox_x, heroBox_y]
						});
                              }
					else {
						per_damage = Math.floor(per_damage*0.75);
						todo.push({
							"type": "animate",
							"name": sanlAnimate,
							"async": true,
							"loc": [heroBox_x, heroBox_y]
						});
					}
				} else if (lv == 3) {
					if(flags.sageShield == 0 & times == 1){
                              		flags.sageShield = 1;
						if (enemy.hp <= Math.ceil(maxEnemyHp/3)) {
							per_damage = -Math.ceil(0.2*per_damage) - Math.ceil(enemy.hp/2);
							enemy.hp = 0;
						} else{ 
							per_damage = -Math.ceil(0.2*per_damage) - Math.ceil(maxEnemyHp/6);
							enemy.hp -= Math.ceil(maxEnemyHp/3);
						}
						animate = "miss";
						todo.push({ "type": "stopSound" })
						todo.push({
							"type": "animate",
							"name": shAnimate,
							"async": true,
							"loc": [heroBox_x, heroBox_y]
						});
                            	}else {
						per_damage = Math.floor(per_damage*0.75);
						todo.push({
							"type": "animate",
							"name": sanlAnimate,
							"async": true,
							"loc": [heroBox_x, heroBox_y]
						});
					}
				}
			} else if (type == 'proof_tyrant') {
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
						tyrantDamage = Math.ceil(0.25*per_damage_phy)+Math.ceil(0.06*mon_atk);
						//tyrantDamage = Math.min(Math.ceil(0.12*core.status.hero.def),tyrantDamage);
						if (enemy.hp <= tyrantDamage) {
							enemy.hp = 0;
								//return attackEnd();
						} else enemy.hp -= tyrantDamage;
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
						tyrantDamage = Math.ceil(0.25*per_damage_phy);
						//tyrantDamage = Math.min(Math.ceil(0.12*core.status.hero.def),tyrantDamage);
						todo.push({
							"type": "animate",
							"name": proofAnimate,
							"async": true,
							"loc": [enemyBox_x, enemyBox_y]
						});
						if (enemy.hp <= tyrantDamage) {
							enemy.hp = 0;
							//return attackEnd();
						} else enemy.hp -= tyrantDamage;
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
						"def": Math.ceil(core.status.hero.def * 1.16)
					}, enemy).per_damage;
					if (per_damage == 0 && (hpd > 0 || tyrantDamage >0)) {
						enemy.hp = 0;
					}
				}

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
			if (per_damage == 0 && hpd > 0) {
				enemy.hp = 0;
			}
			todo.push({
				"type": "function",
				"function": "function(){core.battle_damageAnimate(null, " + per_damage + ")}"
			})
			times--;
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

	////// 战斗 //////
	core.events.battle = function (id, x, y, force, callback) {
		core.saveAndStopAutomaticRoute();
		id = id || core.getBlockId(x, y);
		if (!id) return core.clearContinueAutomaticRoute(callback);
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
	}
}