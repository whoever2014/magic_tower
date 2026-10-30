function editor() {
    this.version = "2.0";
    this.brushMod = "line";//["line","rectangle","tileset"]
    this.layerMod = "map";//["fgmap","map","bgmap"]
    this.isMobile = false;

    this.dom={
        body:document.body,
        eui:document.getElementById('eui'),
        euiCtx:document.getElementById('eui').getContext('2d'),
        efgCtx:document.getElementById('efg').getContext('2d'),
        mid:document.getElementById('mid'),
        mapEdit:document.getElementById('mapEdit'),
        selectFloor:document.getElementById('selectFloor'),
        iconExpandBtn :document.getElementById('iconExpandBtn'),
        dataSelection : document.getElementById('dataSelection'),
        iconLib:document.getElementById('iconLib'),
        midMenu:document.getElementById('midMenu'),
        extraEvent: document.getElementById('extraEvent'),
        chooseThis : document.getElementById('chooseThis'),
        chooseInRight : document.getElementById('chooseInRight'),
        copyLoc : document.getElementById('copyLoc'),
        moveLoc : document.getElementById('moveLoc'),
        clearEvent : document.getElementById('clearEvent'),
        clearLoc : document.getElementById('clearLoc'),
        brushMod:document.getElementById('brushMod'),
        brushMod2:document.getElementById('brushMod2'),
        brushMod3:document.getElementById('brushMod3'),
        bgc : document.getElementById('bg'),
        bgCtx : document.getElementById('bg').getContext('2d'),
        fgc : document.getElementById('fg'),
        fgCtx : document.getElementById('fg').getContext('2d'),
        evc : document.getElementById('event'),
        evCtx : document.getElementById('event').getContext('2d'),
        ev2c : document.getElementById('event2'),
        ev2Ctx : document.getElementById('event2').getContext('2d'),
        layerMod:document.getElementById('layerMod'),
        layerMod2:document.getElementById('layerMod2'),
        layerMod3:document.getElementById('layerMod3'),
        viewportButtons:document.getElementById('viewportButtons'),
        appendPicCanvas : document.getElementById('appendPicCanvas'),
        bg : document.getElementById('appendPicCanvas').children[0],
        source : document.getElementById('appendPicCanvas').children[1],
        picClick : document.getElementById('appendPicCanvas').children[2],
        sprite : document.getElementById('appendPicCanvas').children[3],
        sourceCtx:document.getElementById('appendPicCanvas').children[1].getContext('2d'),
        spriteCtx:document.getElementById('appendPicCanvas').children[3].getContext('2d'),
        appendPicSelection : document.getElementById('appendPicSelection'),
        selectAppend : document.getElementById('selectAppend'),
        selectFileBtn :document.getElementById('selectFileBtn'),
        changeFloorId :document.getElementById('changeFloorId'),
        left1 : document.getElementById('left1'),
        editModeSelect :document.getElementById('editModeSelect'),
        mid2 : document.getElementById('mid2'),
        lastUsedDiv: document.getElementById('lastUsedDiv'),
        lastUsed: document.getElementById('lastUsed'),
        lastUsedCtx: document.getElementById('lastUsed').getContext('2d'),
    };

    this.uivalues={
        // 绘制区拖动有关
        holdingPath : 0,
        stepPostfix : null,//用于存放寻路检测的第一个点之后的后续移动
        mouseOutCheck : 2,
        startPos:null,
        endPos:null,
        // 撤销/恢复
        preMapData : [],
        preMapMax: 10,
        postMapData: [],
        //
        shortcut:{},
        copyedInfo : null,
        // 折叠素材
        scrollBarHeight :0,
        folded:false,
        foldPerCol: 50,
        // 画图区菜单
        lastRightButtonPos:[{x:0,y:0},{x:0,y:0}],
        lastCopyedInfo : [null, null],
        //
        ratio : 1,
        // blockly转义
        disableBlocklyReplace: false,

        // 绑定机关门事件相关
        bindSpecialDoor: {
            loc: null,
            n: -1,
            enemys: []
        },

        // 复制怪物或道具属性
        copyEnemyItem : {
            type: null,
            data: {}
        },

        // tile
        tileSize: [1,1],

        // 最近使用的图块
        lastUsed: [],
    };

    window.onerror = function (msg, url, lineNo, columnNo, error) {
        var string = msg.toLowerCase();
        var substring = "script error";
        var message;
        if (string.indexOf(substring) > -1){
            message = 'Script Error: See Browser Console for Detail';
        } else {
            if (url) url = url.substring(url.lastIndexOf('/')+1);
            message = [
                'Message: ' + msg,
                'URL: ' + url,
                'Line: ' + lineNo,
                'Column: ' + columnNo,
                'Error object: ' + JSON.stringify(error)
            ].join(' - ');
            // alert(message);
        }
        try {
            printe(message)
        } catch (e) {
            alert(message);
        }
        return false;
    };
}

editor.prototype.uifunctions={};

/* 
editor.loc
editor.pos
editor.info
始终是最后一次点击的结果
注意editor.info可能因为点击其他地方而被清空
*/

/////////// 数据相关 ///////////

editor.prototype.init = function (callback) {
    
    var useCompress = main.useCompress;
    main.useCompress = false;
    editor.airwallImg = new Image();
    editor.airwallImg.src = './project/images/airwall.png';

    main.init('editor', function () {
        editor_util_wrapper(editor);
        editor_game_wrapper(editor, main, core);
        editor_file_wrapper(editor);
        editor_table_wrapper(editor);
        editor_ui_wrapper(editor);
        editor_mappanel_wrapper(editor);
        editor_datapanel_wrapper(editor);
        editor_materialpanel_wrapper(editor);
        editor_listen_wrapper(editor);
        editor.printe=printe;
        afterMainInit();
    });

    var afterMainInit = function () {
        editor.game.fixFunctionInGameData();
        editor.main = main;
        editor.core = core;
        editor.fs = fs;
        editor_file = editor_file(editor, function () {
            editor.file = editor_file;
            editor_mode = editor_mode(editor);
            editor.mode = editor_mode;
            core.resetGame(core.firstData.hero, null, core.firstData.floorId, core.clone(core.initStatus.maps));
            var lastFloorId = core.getLocalStorage('editorLastFloorId', core.status.floorId);
            if (core.floorIds.indexOf(lastFloorId) < 0) lastFloorId = core.status.floorId;
            core.changeFloor(lastFloorId, null, core.firstData.hero.loc, null, function () {
                afterCoreReset();
            }, true);
            core.events.setInitData(null);
        });
    }

    var afterCoreReset = function () {
        
        editor.game.idsInit(core.maps, core.icons.icons); // 初始化图片素材信息
        editor.drawInitData(core.icons.icons); // 初始化绘图

        editor.game.fetchMapFromCore();
        editor.updateMap();
        editor.buildMark();
        editor.drawEventBlock();
        
        editor.pos = {x: 0, y: 0};
        editor.mode.loc();
        editor.info = editor.ids[editor.indexs[201]];
        editor.mode.enemyitem();
        editor.mode.floor();
        editor.mode.tower();
        editor.mode.functions();
        editor.mode.commonevent();
        editor.mode.showMode('tower');
        
        editor_multi = editor_multi();
        editor_blockly = editor_blockly();

        // --- 所有用到的flags
        editor.used_flags = {};
        for (var floorId in editor.main.floors) {
            editor.addUsedFlags(JSON.stringify(editor.main.floors[floorId]));
        }
        if (events_c12a15a8_c380_4b28_8144_256cba95f760.commonEvent) {
            for (var name in events_c12a15a8_c380_4b28_8144_256cba95f760.commonEvent) {
                editor.addUsedFlags(JSON.stringify(events_c12a15a8_c380_4b28_8144_256cba95f760.commonEvent[name]));
            }
        }

        if (editor.useCompress == null) editor.useCompress = useCompress;
        if (Boolean(callback)) callback();

    }

    
}

editor.prototype.mapInit = function () {
    var ec = editor.dom.evCtx;
    ec.clearRect(0, 0, core.bigmap.width*32, core.bigmap.height*32);
    editor.dom.ev2Ctx.clearRect(0, 0, core.bigmap.width*32, core.bigmap.height*32);
    editor.map = [];
    var sy=editor.currentFloorData.map.length,sx=editor.currentFloorData.map[0].length;
    for (var y = 0; y < sy; y++) {
        editor.map[y] = [];
        for (var x = 0; x < sx; x++) {
            editor.map[y][x] = 0;
        }
    }
    editor.fgmap=JSON.parse(JSON.stringify(editor.map));
    editor.bgmap=JSON.parse(JSON.stringify(editor.map));
    editor.currentFloorData.map = editor.map;
    editor.currentFloorData.fgmap = editor.fgmap;
    editor.currentFloorData.bgmap = editor.bgmap;
    editor.currentFloorData.firstArrive = [];
    editor.currentFloorData.eachArrive = [];
    editor.currentFloorData.events = {};
    editor.currentFloorData.changeFloor = {};
    editor.currentFloorData.afterBattle = {};
    editor.currentFloorData.afterGetItem = {};
    editor.currentFloorData.afterOpenDoor = {};
    editor.currentFloorData.cannotMove = {};
}

editor.prototype.changeFloor = function (floorId, callback) {
    for(var ii=0,name;name=['map','bgmap','fgmap'][ii];ii++){
        var mapArray=editor[name].map(function (v) {
            return v.map(function (v) {
                return v.idnum || v || 0
            })
        });
        editor.currentFloorData[name]=mapArray;
    }
    editor.uivalues.preMapData = [];
    editor.uivalues.postMapData = [];
    editor.uifunctions._extraEvent_bindSpecialDoor_doAction(true);
    core.changeFloor(floorId, null, {"x": 0, "y": 0, "direction": "up"}, null, function () {
        editor.game.fetchMapFromCore();
        editor.updateMap();
        editor_mode.floor();
        editor.drawEventBlock();

        editor.viewportLoc = editor.viewportLoc || {};
        var loc = editor.viewportLoc[floorId] || [], x = loc[0] || 0, y = loc[1] || 0;
        editor.setViewport(x, y);

        core.setLocalStorage('editorLastFloorId', floorId);
        if (callback) callback();
    });
}

/////////// 游戏绘图相关 ///////////

editor.prototype.drawEventBlock = function () {
    var fg=editor.dom.efgCtx;

    fg.clearRect(0, 0, core.__PIXELS__, core.__PIXELS__);
    var firstData = editor.game.getFirstData();
    for (var i=0;i<core.__SIZE__;i++) {
        for (var j=0;j<core.__SIZE__;j++) {
            var color=[];
            var loc=(i+core.bigmap.offsetX/32)+","+(j+core.bigmap.offsetY/32);
            if (editor.currentFloorId == firstData.floorId
                && loc == firstData.hero.loc.x + "," + firstData.hero.loc.y) {
                fg.textAlign = 'center';
                editor.game.doCoreFunc('fillBoldText', fg, 'S',
                    32 * i + 16, 32 * j + 28, '#FFFFFF', 'bold 30px Verdana');
            }
            if (editor.currentFloorData.events[loc])
                color.push('#FF0000');
            if (editor.currentFloorData.autoEvent[loc]) {
                var x = editor.currentFloorData.autoEvent[loc];
                for (var index in x) {
                    if (x[index] && x[index].data) {
                        color.push('#FFA500');
                        break;
                    }
                }
            }
            if (editor.currentFloorData.afterBattle[loc])
                color.push('#FFFF00');
            if (editor.currentFloorData.changeFloor[loc])
                color.push('#00FF00');
            if (editor.currentFloorData.afterGetItem[loc])
                color.push('#00FFFF');
            if (editor.currentFloorData.cannotMove[loc])
                color.push('#0000FF');
            if (editor.currentFloorData.afterOpenDoor[loc])
                color.push('#FF00FF');
            for(var kk=0,cc;cc=color[kk];kk++){
                fg.fillStyle = cc;
                fg.fillRect(32*i+8*kk, 32*j+32-8, 8, 8);
            }
            var index = editor.uivalues.bindSpecialDoor.enemys.indexOf(loc);
            if (index >= 0) {
                fg.textAlign = 'right';
                editor.game.doCoreFunc("fillBoldText", fg, index + 1,
                    32 * i + 28, 32 * j + 15, '#FF7F00', '14px Verdana');
            }
        }
    }
}

editor.prototype.drawPosSelection = function () {
    this.drawEventBlock();
    var fg=editor.dom.efgCtx;
    fg.strokeStyle = 'rgba(255,255,255,0.7)';
    fg.lineWidth = 4;
    fg.strokeRect(32*editor.pos.x - core.bigmap.offsetX + 4, 32*editor.pos.y - core.bigmap.offsetY + 4, 24, 24);
}

editor.prototype.updateMap = function () {
    var blocks =  core.maps._mapIntoBlocks(editor.map.map(function (v) {
        return v.map(function (v) {
            try {
                return v.idnum || v || 0
            }
            catch (e) {
                console.log("Unable to read idnum from "+v);
                return 0;
            }
        });
    }), {'events': editor.currentFloorData.events}, editor.currentFloorId);
    core.status.thisMap.blocks = blocks;

    var updateMap = function () {
        core.removeGlobalAnimate();
        core.clearMap('bg');
        core.clearMap('event');
        core.clearMap('event2');
        core.clearMap('fg');
        core.maps._drawMap_drawAll();
    }
    updateMap();

    var drawTile = function (ctx, x, y, tileInfo) { // 绘制一个普通块

        //ctx.clearRect(x*32, y*32, 32, 32);
        if (tileInfo == 0) return;

        if (typeof(tileInfo) == typeof([][0]) || !Object.prototype.hasOwnProperty.call(tileInfo, 'idnum')) {//未定义块画红块
            if (typeof(tileInfo) != typeof([][0]) && Object.prototype.hasOwnProperty.call(tileInfo, 'images') && core.material.images[tileInfo.images]) {
                ctx.drawImage(core.material.images[tileInfo.images], 0, tileInfo.y * 32, 32, 32, x * 32, y * 32, 32, 32);
            }
            ctx.strokeStyle = 'red';
            var OFFSET = 2;
            ctx.lineWidth = OFFSET;
            ctx.strokeRect(x * 32 + OFFSET, y * 32 + OFFSET, 32 - OFFSET * 2, 32 - OFFSET * 2);
            ctx.font = "30px Verdana";
            ctx.textAlign = 'center';
            ctx.fillStyle = 'red';
            ctx.fillText("?", x * 32 + 16, y * 32 + 27);
            return;
        }
        //ctx.drawImage(core.material.images[tileInfo.images], 0, tileInfo.y*32, 32, 32, x*32, y*32, 32, 32);
    }
    // 绘制地图 start
    for (var y = 0; y < editor.map.length; y++) {
        for (var x = 0; x < editor.map[0].length; x++) {
            var tileInfo = editor.map[y][x];
            drawTile(editor.dom.evCtx, x, y, tileInfo);
            tileInfo = editor.fgmap[y][x];
            drawTile(editor.dom.fgCtx, x, y, tileInfo);
            tileInfo = editor.bgmap[y][x];
            drawTile(editor.dom.bgCtx, x, y, tileInfo);
        }
    }
    // 绘制地图 end

    this.updateLastUsedMap();
}

editor.prototype.updateLastUsedMap = function () {
    // 绘制最近使用事件
    var ctx = editor.dom.lastUsedCtx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = 'rgba(255,128,0,0.85)';
    ctx.lineWidth = 4;
    for (var i = 0; i < editor.uivalues.lastUsed.length; ++i) {
        var x = i % core.__SIZE__, y = parseInt(i / core.__SIZE__);
        var info = editor.uivalues.lastUsed[i];
        if (!info || !info.images) continue;
        // 最近使用列表里可能存着已经删除/改名的素材，找不到就跳过，不要让整个编辑器崩掉
        var img = info.isTile ? (core.material.images.tilesets || {})[info.images]
            : info.images == 'autotile' ? (core.material.images.autotile || {})[info.id]
            : core.material.images[info.images];
        if (!img) continue;
        if (info.isTile) {
            ctx.drawImage(img, 32 * info.x, 32 * info.y, 32, 32, x*32, y*32, 32, 32);
        } else if (info.images == 'autotile') {
            ctx.drawImage(img, 0, 0, 32, 32, x * 32, y * 32, 32, 32);
        } else {
            var per_height = info.images.endsWith('48') ? 48 : 32;
            ctx.drawImage(img, 0, info.y * per_height, 32, per_height, x * 32, y * 32, 32, 32);
        }
        if (selectBox.isSelected() && editor.info.id == info.id) {
            ctx.strokeRect(32 * x + 2, 32 * y + 2, 28, 28);
        }
    }
}

editor.prototype.setViewport=function (x, y) {
    core.bigmap.offsetX = core.clamp(x, 0, 32*core.bigmap.width-core.__PIXELS__);
    core.bigmap.offsetY = core.clamp(y, 0, 32*core.bigmap.height-core.__PIXELS__);
    editor.viewportLoc = editor.viewportLoc || {};
    editor.viewportLoc[editor.currentFloorId] = [core.bigmap.offsetX, core.bigmap.offsetY];
    core.control.updateViewport();
    editor.buildMark();
    editor.drawPosSelection();
}

editor.prototype.moveViewport=function(x,y){
    editor.setViewport(core.bigmap.offsetX+32*x, core.bigmap.offsetY+32*y);
}

/////////// 界面交互相关 ///////////

editor.prototype.drawInitData = function (icons) {
    var ratio = 1;
    var images = core.material.images;
    var maxHeight = 700;
    var sumWidth = 0;
    editor.widthsX = {};
    editor.uivalues.folded = core.getLocalStorage('folded', false);
    editor.uivalues.foldPerCol = core.getLocalStorage('foldPerCol', 50);
    editor.uivalues.lastUsed = core.getLocalStorage("lastUsed", []);

    // ===== 素材区按“列”组装 =====
    // 每一列取某张素材图里的若干行（rows 省略 = 整张图），按顺序排在一起；点选时用 widthsX[key][4] 把显示的行号换算回素材图里的行号。
    // 不在这里列出的素材（enemy48、npc48、autotile 大块草地/水面/石头、tilesets 如 magictower.png、
    // NPC 第 12 行以后的天使/元素生物，以及下面 HIDE 表里的图块）只是不在素材区显示，地图上已经用到的照常渲染。
    var range = function (a, b) { var r = []; for (var i = a; i < b; i++) r.push(i); return r; };
    // 素材区里不显示的图块（按名字；地图上已经放了的照常渲染）。以后要隐藏，往这里加名字即可
    var HIDE = {
        terrains: ['greenDoor'],
        animates: ['A384', 'portal', 'A385', 'poisonNet', 'weakNet', 'curseNet', 'upPortal', 'water'],
        enemys: ['skeletonSwordsman', 'ghostSkeletonRed', 'soldierYellow', 'soldierRed']
    };
    var hiddenRows = function (img) {
        var ic = (icons || core.icons.icons)[img] || {};
        return (HIDE[img] || []).map(function (id) { return ic[id]; }).filter(function (r) { return r != null; });
    };
    var pick = function (img, a, b) {
        var hide = hiddenRows(img);
        return range(a || 0, b == null ? images[img].height / (img.endsWith('48') ? 48 : 32) : b).filter(function (r) { return hide.indexOf(r) < 0; });
    };
    var cols = [
        { key: 'terrains', img: 'terrains', rows: pick('terrains', 0, 46) },   // 地形（成就、图鉴另外放在最右）
        { key: 'animates', img: 'animates', rows: pick('animates') },
        { key: 'enemys', img: 'enemys', rows: pick('enemys') },
        { key: 'items', img: 'items' },
        { key: 'npcs', img: 'npcs', rows: range(0, 12) },                     // 老人、商人、小偷、仙子、商店
        { key: 'terrains#ach', img: 'terrains', rows: range(46, 116) },        // 成就
        { key: 'terrains#bst', img: 'terrains', rows: range(116, images.terrains.height / 32) } // 怪物图鉴
    ];
    var colImage = function (c) {
        var src = images[c.img];
        if (!c.rows) return src;
        var cv = document.createElement('canvas'), h = c.img.endsWith('48') ? 48 : 32;
        cv.width = src.width; cv.height = c.rows.length * h;
        var ctx = cv.getContext('2d');
        c.rows.forEach(function (r, i) { ctx.drawImage(src, 0, r * h, src.width, h, 0, i * h, src.width, h); });
        cv.style.position = 'absolute'; // 和素材区里的 <img> 一样绝对定位
        return cv;
    };
    cols.forEach(function (c) { c.image = colImage(c); });

    cols.forEach(function (c) {
        var width = c.image.width, height = c.image.height, mh = height;
        if (editor.uivalues.folded) {
            var per_height = c.img.endsWith('48') ? 48 : 32;
            width = Math.ceil(height / per_height / editor.uivalues.foldPerCol) * 32;
            if (width > 32) mh = per_height * editor.uivalues.foldPerCol;
        }
        editor.widthsX[c.key] = [c.img, sumWidth / 32, (sumWidth + width) / 32, height, c.rows || null];
        sumWidth += width;
        maxHeight = Math.max(maxHeight, mh + 64);
    });

    var fullWidth = ~~(sumWidth * ratio);
    var fullHeight = ~~(maxHeight * ratio);
    var iconImages = document.getElementById('iconImages');
    iconImages.innerHTML = '';
    iconImages.style.width = (iconImages.width = fullWidth) / ratio + 'px';
    iconImages.style.height = (iconImages.height = fullHeight) / ratio + 'px';
    var drawImage = function (image, x, y) {
        image.style.left = x + 'px';
        image.style.top = y + 'px';
        iconImages.appendChild(image);
    }

    var nowx = 0;
    cols.forEach(function (c) {
        if (c.key == 'terrains') {
            // 第 0 格是“清除”，第 1 格是空气墙，地形从第 2 格开始
            (function (image, nowx) {
                if (!image) return;
                if (image.complete) {
                    drawImage(image, nowx, 32);
                    core.material.images.airwall = image;
                    delete (editor.airwallImg);
                } else image.onload = function () {
                    drawImage(image, nowx, 32);
                    core.material.images.airwall = image;
                    delete (editor.airwallImg);
                    editor.updateMap();
                }
            })(editor.airwallImg, nowx);
            if (editor.uivalues.folded) {
                var subimgs = core.splitImage(c.image, 32, editor.uivalues.foldPerCol * 32);
                var frames = c.image.width / 32;
                for (var i = 0; i < subimgs.length; i += frames) {
                    drawImage(subimgs[i], nowx, i == 0 ? 2 * 32 : 0);
                    nowx += 32;
                }
            } else {
                drawImage(c.image, nowx, 32 * 2);
                nowx += c.image.width;
            }
            return;
        }
        if (editor.uivalues.folded) {
            var per_height = c.img.endsWith('48') ? 48 : 32;
            var subimgs = core.splitImage(c.image, 32, editor.uivalues.foldPerCol * per_height);
            var frames = c.image.width / 32;
            for (var i = 0; i < subimgs.length; i += frames) {
                drawImage(subimgs[i], nowx, 0);
                nowx += 32;
            }
        } else {
            drawImage(c.image, nowx, 0);
            nowx += c.image.width;
        }
    });
}

editor.prototype.buildMark = function(){
    // 生成定位编号
    var arrColMark=document.getElementById('arrColMark');
    var arrRowMark=document.getElementById('arrRowMark');
    var mapColMark=document.getElementById('mapColMark');
    var mapRowMark=document.getElementById('mapRowMark');
    var buildMark = function (offsetX,offsetY) {
        var colNum = ' ';
        for (var i = 0; i < core.__SIZE__; i++) {
            var tpl = '<td>' + (i+offsetX) + '<div class="colBlock" style="left:' + (i * 32 + 1) + 'px;"></div></td>';
            colNum += tpl;
        }
        arrColMark.innerHTML = '<tr>' + colNum + '</tr>';
        mapColMark.innerHTML = '<tr>' + colNum + '</tr>';
        var rowNum = ' ';
        for (var i = 0; i < core.__SIZE__; i++) {
            var tpl = '<tr><td>' + (i+offsetY) + '<div class="rowBlock" style="top:' + (i * 32 + 1) + 'px;"></div></td></tr>';
            rowNum += tpl;
        }
        arrRowMark.innerHTML = rowNum;
        mapRowMark.innerHTML = rowNum;
    }
    var buildMark_mobile = function (offsetX,offsetY) {
        var colNum = ' ';
        for (var i = 0; i < core.__SIZE__; i++) {
            var tpl = '<td>' + (' '+i).slice(-2).replace(' ','&nbsp;') + '<div class="colBlock" style="left:' + (i * 96/core.__SIZE__) + 'vw;"></div></td>';
            colNum += tpl;
        }
        arrColMark.innerHTML = '<tr>' + colNum + '</tr>';
        //mapColMark.innerHTML = '<tr>' + colNum + '</tr>';
        var rowNum = ' ';
        for (var i = 0; i < core.__SIZE__; i++) {
            var tpl = '<tr><td>' + (' '+i).slice(-2).replace(' ','&nbsp;') + '<div class="rowBlock" style="top:' + (i * 96/core.__SIZE__) + 'vw;"></div></td></tr>';
            rowNum += tpl;
        }
        arrRowMark.innerHTML = rowNum;
        //mapRowMark.innerHTML = rowNum;
        //=====
        var colNum = ' ';
        for (var i = 0; i < core.__SIZE__; i++) {
            var tpl = '<div class="coltd" style="left:' + (i * 96/core.__SIZE__) + 'vw;"><div class="coltext">' + (' '+(i+offsetX)).slice(-2).replace(' ','&nbsp;') + '</div><div class="colBlock"></div></div>';
            colNum += tpl;
        }
        mapColMark.innerHTML = '<div class="coltr">' + colNum + '</div>';
        var rowNum = ' ';
        for (var i = 0; i < core.__SIZE__; i++) {
            var tpl = '<div class="rowtr"><div class="rowtd"  style="top:' + (i * 96/core.__SIZE__) + 'vw;"><div class="rowtext">' + (' '+(i+offsetY)).slice(-2).replace(' ','&nbsp;') + '</div><div class="rowBlock"></div></div></div>';
            rowNum += tpl;
        }
        mapRowMark.innerHTML = rowNum;
    }
    if(editor.isMobile){
        buildMark_mobile(core.bigmap.offsetX/32,core.bigmap.offsetY/32);
    } else {
        buildMark(core.bigmap.offsetX/32,core.bigmap.offsetY/32);
    }
}

editor.prototype.setSelectBoxFromInfo=function(thisevent){
    var pos={x: 0, y: 0, images: "terrains"};
    var ysize = 32;
    if(thisevent==0){
    } else if (thisevent.idnum==17){
        pos.y=1;
    } else {
        pos.x=editor.widthsX[thisevent.images][1];
        pos.y=thisevent.y;
        if(thisevent.x)pos.x+=thisevent.x;
        ysize = thisevent.images.endsWith('48') ? 48 : 32;
        if (editor.uivalues.folded && core.tilesets.indexOf(thisevent.images)==-1) {
            pos.x += Math.floor(pos.y / editor.uivalues.foldPerCol);
            pos.y %= editor.uivalues.foldPerCol;
        }
        if(pos.x == 0) pos.y+=2;
    }
    editor.dom.dataSelection.style.left = pos.x * 32 + 'px';
    editor.dom.dataSelection.style.top = pos.y * ysize + 'px';
    editor.dom.dataSelection.style.height = ysize - 6 + 'px';
    setTimeout(function(){
        selectBox.isSelected(true);
        editor.updateLastUsedMap();
    });
    editor.info = JSON.parse(JSON.stringify(thisevent));
    tip.infos(JSON.parse(JSON.stringify(thisevent)));
    editor.pos=pos;
    editor_mode.onmode('nextChange');
    editor_mode.onmode('enemyitem');
}

editor.prototype.addUsedFlags = function (s) {
    s.replace(/flag:([a-zA-Z0-9_\u4E00-\u9FCC]+)/g, function (s0, s1) {
        editor.used_flags[s1] = true; return s0;
    });
    s.replace(/flags\.([a-zA-Z_]\w*)/g, function (s0, s1) {
        editor.used_flags[s1] = true; return s0;
    });
    if (window.flags) {
        for (var s in editor.used_flags) {
            if (!(s in window.flags)) {
                window.flags[s] = null;
            }
        }
    }
}

editor.prototype.listen = function () {
    // 移动至 editor_listen.js
}//绑定事件

editor.prototype.mobile_listen=function(){
    // 移动至 editor_listen.js
}




editor = new editor();