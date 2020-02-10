﻿/*
lihaibin  20140606/  动态加载表格
参数说明
{
            id:展示数据table 的id
	        param: { "参数框id": { cname: "参数存储的类型", type: "参数名称", value: "参数默认值"} } 可多个
	        pagenav: 分页控件id 默认为“PageCont”
	        miniPageNav: 小分页控件id 默认为 “miniPageNav”
	        sort: { id: "排序字段", desc: 是否逆序（true|false）, multiple: 多字段排序（示例：Fields1,Fields2,Fields3|Fields1SortRule,Fields2SortRule,Fields3SortRule， SortRule规则：0升序 1降序） }
	        cells: 展示字段{ "n": "表头名称" ,"s":"排序字段"，w:宽度} 可多个
            cellcount 默认可不填，在多行多行表头时使用，传入实际数据的列数
	        dataurl: 请求数据地址  "http://datainterface.eastmoney.com/EM_DataCenter/JS.aspx?type=FD&sty=SRB&st={sortType}&sr={sortRule}&p={page}&ps={pageSize}&js=var {jsname}={pages:(pc),data:[(x)]}{param}",
	        pagesize: 每页行数,
	        beforedisplay: function () { }, 加载数据后展示数据前函数
	        beforeupdate: function () { },加载数据前函数
	        afterdisplay: function () { }，展示数据后函数
	        minWidth: 950, 表格最小宽度，默认为950（用于浮动头部左右滚动）
	        autoWidit: false 表格是否为自动宽度 默认为false （用于重绘浮动表头的宽度，当表格宽度为自适应时，窗口宽度改变时要重绘浮动表头）
            scrollState:true 加载时自动定位到表格
            autoScrollRun:true 加载时自动定位到表格
            pageScrollRun: true,
            sortScrollRun: true,
            theadfloat:false 是否固定表格头部
            theadTop:32 表格头部上边距
            paramNoValueAdd: 参数为空时是否要在接口传这个参数,
}
*/
var Class = {
    create: function () {
        return function () {
            this.initialize.apply(this, arguments)
        }
    }
};
Object.extend = function (destination, source) {
    for (property in source) {
        destination[property] = source[property]
    }
    return destination
};
var LoadTable = Class.create();
Object.extend(LoadTable.prototype, {
    initialize: function (opt) {
        var _t = this;
        _t.starttime = (new Date).getTime();
        var options = {
            id: "dt_1",
            table: null,
            tbody: null,
            thead: null,
            param: {},
            pagenav: "PageCont",
            miniPageNav: "miniPageNav",
            doZoomNav: "autofontDiv",
            sort: {
                id: "2",
                desc: true
            },
            page: 1,
            cells: 8,
            dataurl: "http://datainterface.eastmoney.com/EM_DataCenter/JS.aspx?type=FD&sty=SRB&st={sortType}&sr={sortRule}&p={page}&ps={pageSize}&js=var {jsname}={pages:(pc),data:[(x)]}{param}",
            pagesize: 50,
            pages: 1,
            isTheadPadding: false,
            mininterval: 100,
            loadtime: 1404194135127,
            theadfloat: true,
            theadTop: 32,
            beforedisplay: function () { if (_t.options && _t.options.nodetemp) _t.options.nodetemp.style.position = "relative"; },
            beforeupdate: function () { },
            afterdisplay: function () { },
            checkdata: function (data) { return true; },
            minWidth: 950,
            autoWidit: false,
            scrollState:true,
            autoScrollRun: true,
            pageScrollRun: true,
            sortScrollRun: true,
            selectiscol: true,
            paramNoValueAdd: true,
            charset: "utf-8"
        };
        if ('\v' == 'v') {
            document.execCommand("BackgroundImageCache", false, true)
        }
        Object.extend(options, opt || {});
        _t.options = options;
        var _table = document.getElementById(_t.options.id);
        if (!_table) {
            alert("数据显示容器未找到");
            return
        } else { }
        _t.maketr = _t.options.maketr;
        _t.options.table = _table;
        _t.options.tbody = _table.getElementsByTagName("tbody")[0];
        _t.options.thead = _table.getElementsByTagName("thead")[0];
        _t.tableXY = _t.findPos(_table);
        _t.contentY = 0;
        if (!_t.options.cellcount) _t.options.cellcount = _t.options.cells.length;
        _t.initUserUpdate();
        _t.getNewCells();
        var defJson = opt.defjson;
        var isrr = _t.initparam();
        if (defJson && isrr && defJson.data && defJson.data.length > 0) {
            _t.options.data = defJson;
            _t.loadThead();
            _t.display()
        } else {
            setTimeout(function () {
                _t.update(),
                    20
            })
        }
    },

    display: function () {
        var _t = this;
        try {
            if (_t.options.data.font && _t.options.data.font.WoffUrl) {
                _t.options.font = _t.options.data.font;
            } else {
                //设置默认
                _t.options.font = {
                    EotUrl: "/font/datacenter.eot",
                    FontMapping: [{ code: "&#xEEC5;", value: 1 },
                    { code: "&#xECEA;", value: 2 },
                    { code: "&#xEA5D;", value: 3 },
                    { code: "&#xF78F;", value: 4 },
                    { code: "&#xEBED;", value: 5 },
                    { code: "&#xF2FF;", value: 6 },
                    { code: "&#xF4CD;", value: 7 },
                    { code: "&#xF2F8;", value: 8 },
                    { code: "&#xE4E5;", value: 9 },
                    { code: "&#xE268;", value: 0 }],
                    WoffUrl: "/font/datacenter.woff"
                }
            }
            if ('\v' !== 'v') {
                _t.loadFontFace();
            }
            _t.options.beforedisplay(_t);
            if (_t.options.data.pages > 0 && _t.options.page > _t.options.data.pages)
                _t.options.page = _t.options.data.pages;
            var _d = _t.options.data.data,
                _c = _t.options.cellcount,
                _p = _t.options.page || 1,
                _ps = _t.options.pagesize || 50,
                _body = _t.options.tbody;
            var trs = _body.childNodes;
            for (var i = trs.length - 1; i >= 0; i--) {
                _body.removeChild(trs[i])
            }
            var rowTp = _body.insertRow(-1);
            for (var i = 0; i < _c; i++) {
                var cell = rowTp.insertCell(i)
            }
            if (_d && _d.length && _d[0].stats == undefined) {
                for (var i = 0; i < _d.length; i++) {
                    var data;
                    if (typeof (_d[i]) == "object") data = _d[i];
                    else data = _d[i].split(",");
                    var row = rowTp.cloneNode(true);
                    _body.appendChild(row);
                    _t.uncrypt(data)
                    _t.maketr(row, data, i, ((_p - 1) * _ps + 1 + i));
                    //对>ie8的浏览器加密
                    //去掉加密功能 20190422
                    if ('\v' !== 'v') {
                        _t.crypt(row)
                    }
                    if (_t.options.selectiscol && _t.options.sort.rowindex != 'undefined' && _t.options.sort.rowindex >= 0 && _t.options.sort.rowindex < _t.options.cellcount)
                        if (row && row.cells[_t.options.sort.rowindex])
                            row.cells[_t.options.sort.rowindex].className = "col"
                }
                _body.removeChild(rowTp);
            } else {
                _t.showNoData()
            }
            //_body.removeChild(rowTp);

            if (rowTp.parentNode) {
                rowTp.parentNode.removeChild(rowTp);
            }

            _t.pageit();

            //判断当前浏览器是否是IE6
            var isIE6 = !-[1,] && !window.XMLHttpRequest;
            //浮动表头
            if (!isIE6 && _t.options.theadfloat) _t.floatHeader();

            _t.options.afterdisplay(_t)
        } catch (err) {
            console && console.log(err)
            _t.showNoData();
        }
    },
    //筛选出需要加密的列
    getNewCells: function () {
        var _t = this;
        var cells = _t.options.cells;
        var newCells = [];
        _t.cryptIndex = [];

        for (var i = 0; i < cells.length; i++) {
            var item = cells[i];
            var _c = item.cells;

            if (_c && _c.length > 0) {
                for (var j = 0; j < _c.length; j++) {
                    newCells.push(_c[j])
                }
            } else {
                newCells.push(item)
            }
        }
        for (var i = 0; i < newCells.length; i++) {
            if (newCells[i].c === true) {
                _t.cryptIndex.push(i)
            }
        }



    },
    loadFontFace: function () {
        var _t = this;
        if (_t.cryptIndex.length > 0 && _t.options.font) {
            var css = "@font-face { font-family: stonefont;" +
                "src: url('" + _t.options.font.EotUrl + "');" +
                "src: url('" + _t.options.font.EotUrl + "?#iefix') format('embedded-opentype'),url('" + _t.options.font.WoffUrl + "') format('woff');}" +
                ".stonefont { font-family: stonefont; }  body #page .maincont table td,body #page .maincont table td span { font-family: stonefont !important;}"

            _t.loadStylesString(css);
        }

    },
    //加载css
    loadStylesString: function (css) {
        var _t = this;
        if (_t.style) {
            _t.style.parentNode.removeChild(_t.style);
        }
        _t.style = document.createElement('style');
        if (typeof _t.style.styleSheet == 'object') {
            document.getElementsByTagName('head')[0].appendChild(_t.style);
            _t.style.setAttribute('type', 'text/css');
            _t.style.styleSheet.cssText = css;
        } else {
            _t.style.innerHTML = css;
            document.getElementsByTagName('head')[0].appendChild(_t.style);
        }
    },

    //解密：将接口中的数据解密成数字以进行述职计算
    uncrypt: function (data) {
        //console.log(data)
        var _t = this;
        try {
            for (var key in data) {
                var html = data[key];
                data[key] = _t.getToStr(html);
            }
        } catch (err) {

        }
    },
    //加密：将需要加密的列中的文字进行替换
    crypt: function (row) {
        var _t = this;
        if (_t.cryptIndex && _t.cryptIndex.length > 0) {
            for (var i = 0; i < _t.cryptIndex.length; i++) {
                var item = _t.cryptIndex[i];
                var html = row.cells[item].innerHTML;
                row.cells[item].innerHTML = _t.replacenum(html)
            }
        }
    },
    //加密替换
    replacenum: function (n) {
        try {
            var str = n.toString();
            var ret = "";
            for (var i = 0; i < str.length; i++) {
                ret += this.getonenum(str.substring(i, i + 1));
            }
            return ret;
        } catch (err) {
            return n;
        }
    },
    //解密方法
    getToStr: function (str) {
        //console.log(str)
        var _t = this;
        try {

            if (_t.options.font && _t.options.font.FontMapping && _t.options.font.FontMapping.length) {
                var data = _t.options.font.FontMapping;
                str = str.toString();
                for (var i = 0; i < data.length; i++) {
                    var re = new RegExp(data[i].code, "g");
                    str = str.replace(re, data[i].value)
                }
                return str;
            } else {
                return str;
            }
        } catch (err) {
            return str
        }

    },
    //加密方法
    getonenum: function (n) {
        var _t = this;
        try {
            if (_t.options.font && _t.options.font.FontMapping && _t.options.font.FontMapping.length) {
                var data = _t.options.font.FontMapping;
                n = n.toString();
                var obj = {};
                for (var i = 0; i < data.length; i++) {
                    obj[data[i].value] = data[i].code;
                }

                var res = obj[n] || n;
                //console.log(res)

                return obj[n] || n
            } else {
                return n
            }
        } catch (err) { return n }

    },
    showLoading: function () {
        var _t = this;
        var _c = _t.options.theadcount || _t.options.cellcount,
            _body = _t.options.tbody;
        if (_body.innerHTML.indexOf('td') < 0) {
            var rowTp = _body.insertRow(-1);
            var cell = rowTp.insertCell(0);
            cell.setAttribute("colSpan", _c);
            cell.innerHTML = "<div style=\"color:#666;height:200px;line-height:200px;\">数据初始化...</div>";
            _body.appendChild(rowTp)
        }
        if (typeof (_t.options.load_div) == "undefined") {
            var load_div = document.createElement("DIV");
            var nodetemp = document.getElementById("zzdiv");
            if (!nodetemp) {
                nodetemp = _t.options.table;
                while (nodetemp = nodetemp.parentNode) {
                    if (nodetemp.className == "content") break
                }
            }
            _t.contentY = _t.findPos(nodetemp).y;
            load_div.style.width = nodetemp.clientWidth + "px";
            nodetemp.style.position = "relative";
            load_div.innerHTML = '<img src="http://datapic.eastmoney.com/img/loading.gif" style=" padding-top: 100px;">';
            if (_t.tools.browser.ie) {
                load_div.style.cssText = "top:0px;left:0px;position: absolute; width: 100%;background-color: #fff;z-index: 9999;filter: alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5; text-align: center;min-height: 300px; ";
                load_div.style.height = nodetemp.offsetHeight + "px"
            } else load_div.setAttribute("style", "top:0px;left:0px;position: absolute; width: 100%;height: 100%;background-color: #fff;z-index: 9999;filter: alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5; text-align: center;min-height: 300px; ");
            nodetemp.insertBefore(load_div, nodetemp.firstChild);
            _t.options.load_div = load_div;
            _t.options.nodetemp = nodetemp
        } else {
            if (_t.tools.browser.ie) {
                _t.options.load_div.style.height = _t.options.nodetemp.offsetHeight + "px"
            }
            _t.options.nodetemp.style.position = "relative";
        }
        _t.options.load_div.style.display = "block"
    },
    showNoData: function () {
        var _t = this,
            _c = _t.options.theadcount || _t.options.cellcount,
            _body = _t.options.tbody;
        ///_body.innerHTML = '';//清空表格  已改成下方方式兼容低版本ie
        var trs = _body.getElementsByTagName("tr");
        for (var i = trs.length - 1; i >= 0; i--) {
            _body.removeChild(trs[i])
        }
        var _h = _body.offsetHeight;
        _h = (_h < 200) ? 200 : _h;
        var rowTp = _body.insertRow(-1);
        var cell = rowTp.insertCell(0);
        cell.setAttribute("colSpan", _c);
        cell.innerHTML = "<div style=\"color:#666;height:" + _h + "px;line-height:200px;\">没有相关数据...</div>";
        _body.appendChild(rowTp);
        if (typeof (_t.options.load_div) != "undefined") {
            _t.options.load_div.style.display = "none"
        }
    },
    getCode: function (num) {
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var codes = str.split('');
        num = num || 6;
        var code = "";
        for (var i = 0; i < num; i++) {
            code += codes[Math.floor(Math.random() * 52)]
        }
        return code
    },
    parperUrl: function () {
        var _t = this,
            _param = _t.options.param;
        var param = "";
        var tempfilter = [];
        for (var key in _param) {
            if (_t.options.paramNoValueAdd || _param[key].value != "") {
                if (_param[key].filter) {
                    if (_param[key].value != "")
                        tempfilter.push(_param[key].value);
                }
                else
                    param += ("&" + _param[key].type + "=" + _param[key].value);
            }
        }
        if (tempfilter != "")
            param += ("&filter=(" + tempfilter.join(" and ") + ")");
        _url = _t.options.dataurl;
        var _sort = "1";
        _url = _url.replace("{pageSize}", _t.options.pagesize);
        _url = _url.replace("{page}", _t.options.page);
        if (_t.options.sort.multiple) {
            try {
                var sArr = _t.options.sort.multiple.split('|'),
                    srArr = sArr[1].split(',');
                _url = _url.replace("{sortType}", sArr[0]);
                _url = _url.replace("{sortRule}", parseInt(srArr.reverse().join(''), 2));//二进制转十进制
            }
            catch (ex) {
                _url = _url.replace("{sortType}", _t.options.sort.id);
                _url = _url.replace("{sortRule}", _t.options.sort.desc ? "-1" : "1");
            }
        }
        else {
            _url = _url.replace("{sortType}", _t.options.sort.id);
            _url = _url.replace("{sortRule}", _t.options.sort.desc ? "-1" : "1");
            _url = _url.replace("{sortDirection}", _t.options.sort.desc ? "desc" : "asc");
        }
        _url = _url.replace("{param}", param);
        return _url
    },
    update: function () {
        var _t = this;
        if (_t.options.beforeupdate(_t))
            return;

        var jsname = _t.getCode(8),
            _url = _t.parperUrl();
        _t.options.code = jsname;
        _url = _url.replace("{jsname}", jsname);
        _url += (_url.indexOf('?') > -1) ? "&rt=" : "?rt=";
        _url += parseInt(parseInt(new Date().getTime()) / 30000);
        _t.getNewCells();
        _t.loadThead();
        _t.scorllTop();
        _t.showLoading();
        var stime = (new Date).getTime();
        _t.tools.loadJs(_url, _t.options.charset,
            function () {
                if (typeof (_t.options.load_div) != "undefined") {
                    if (_t.options && _t.options.nodetemp) {
                        _t.options.nodetemp.style.position = "";
                    }
                    _t.options.load_div.style.display = "none"
                }
                if (!(eval("typeof " + jsname) == "undefined") || eval("typeof " + jsname == null)) {
                    var loaddata = eval(jsname);
                    if (jsname != _t.options.code) {
                        return
                    }
                    if (_t.options.checkdata(loaddata) === false) {
                        return
                    }
                    _t.options.data = loaddata;

                    _t.display()
                    if ((new Date).getTime() - _t.starttime > 3000)
                        _t.sendloadcilck(stime);
                } else {
                    // alert("数据加载失败，请刷新页面重新尝试！")
                    if (console && console.log) {
                        console.log("tools.loadJs Err");
                    }
                }
            })
    },
    initUserUpdate: function () {
        var updateBtn = this.options.id + "_update",
            _t = this;
        if (document.getElementById(updateBtn)) {
            document.getElementById(updateBtn).onclick = function () {
                _t.update()
            }
        }
    },
    autoUpdate: function () {
        var _t = this;
        var interval = function () {
            var now = new Date();
            try {
                now = Eastmoney.Time.now()
            } catch (e) { }
            k = parseInt(_t.tools.dataFormat(now, "HHmm") * 1);
            var g = now.getDay();
            if (!(k <= 924 || (k >= 1145 && k <= 1259) || k >= 1515 || g > 5)) {
                try {
                    setTimeout(function () {
                        _t.update()
                    },
                        100)
                } catch (e) { }
            }
        };
        setInterval(interval, 1000 * 60 * 2)
    },
    initparam: function () {
        var _t = this,
            _param = _t.options.param,
            _isp = false;
        var _st = _t.tools.GetQueryStr("st");
        if (_st) {
            _t.options.sort.id = _st;
            _isp = true
        }
        var _sr = _t.tools.GetQueryStr("sr");
        if (_sr) {
            _t.options.sort.desc = (_sr == "0" || _sr == "false");
            _isp = true
        }
        for (var key in _param) {
            var _p = document.getElementById(key);
            var p = _param[key];
            if (_p) {
                if (_t.tools.GetQueryStr(p.type) != null) {
                    _t.options.param[key].value = _t.tools.GetQueryStr(p.type);
                    _isp = true
                }
                if (p.cname == 'option') {
                    _t.tools.OptionValue(_p, _t.options.param[key].value);
                    _p.onchange = function (_p, k) {
                        var _v = _p.options[_p.selectedIndex].value;
                        if (_v.toLowerCase() == _t.options.param[k].value.toLowerCase()) return;
                        _t.options.param[k].value = _v;
                        _t.options.page = 1;
                        _t.update()
                    }.bind(this, _p, key)
                } else {
                    var _list = _p.getElementsByTagName(p.cname);
                    var _totle = _list.length;
                    for (var i = 0; i < _totle; i++) {
                        var _l = _list[i],
                            _v = _l.getAttribute("data");
                        if (_v == null)
                            continue;
                        if (_v.toLowerCase() == _t.options.param[key].value.toLowerCase() || decodeURIComponent(_v).toLowerCase() == _t.options.param[key].value.toLowerCase()) {
                            _l.className = _t.options.param[key].cssclass || "at"
                        } else {
                            _l.className = ""
                        }
                        if (_l.getAttribute("disclick") != "1") _l.onclick = function (o, c, par, index, pdata) {
                            var _ov = o.getAttribute("data");
                            if (_ov == null)
                                return;
                            if (_ov.toLowerCase() == _t.options.param[index].value.toLowerCase() || decodeURIComponent(_ov).toLowerCase() == _t.options.param[index].value.toLowerCase()) return;
                            var _lis = par.getElementsByTagName(pdata.cname);
                            for (var j = 0; j < _lis.length; j++) {
                                if (_lis[j] == o) {
                                    _lis[j].className = _t.options.param[index].cssclass || "at";
                                    _t.options.param[index].value = c
                                } else {
                                    _lis[j].className = ""
                                }
                            }
                            _t.options.page = 1;
                            _t.update()
                        }.bind(this, _l, _v, _p, key, p)
                    }
                }
            }
        }
        return !_isp
    },
    loadThead: function () {
        var _t = this,
            _thead = _t.options.thead,
            _cells = _t.options.cells;
        if (_t.options.scrollTable && _t.options.scrollTable.parentNode) _t.options.scrollTable.parentNode.removeChild(_t.options.scrollTable);
        var trs = _thead.getElementsByTagName("tr");
        for (var i = trs.length - 1; i >= 0; i--) {
            _thead.removeChild(trs[i])
        }//清空表头

        _t.options.thIndex = 0;
        _t.loadTheadTr(_thead, _cells);
        trs = _thead.getElementsByTagName("tr");
        if (trs.length > 0) { //设置表格的rowspan和colspan
            for (var i = trs.length - 1; i >= 0; i--) {
                var ths = trs[i].getElementsByTagName("th");
                for (var j = 0; j < ths.length; j++) {
                    var th = ths[j],
                        cellCount = th.getAttribute("cellCount") || 1,
                        hasChild = th.getAttribute("hasChild"),
                        parentIndex = th.getAttribute("parentIndex");
                    if (hasChild == "1")
                        th.colSpan = cellCount;
                    else if (trs.length - i != 1)
                        th.rowSpan = trs.length - i;
                    if (null != parentIndex && "undefined" != parentIndex) {
                        var parent = trs[i - 1].getElementsByTagName("th")[parentIndex];
                        cellCount = parseInt(cellCount) + parseInt(parent.getAttribute("cellCount") || 0);
                        parent.setAttribute("cellCount", cellCount);
                    }
                    th.removeAttribute("cellCount"), th.removeAttribute("hasChild"), th.removeAttribute("parentIndex");
                }
            }
        }

        var count = 0;
        var setSortIndex = function (cells) {
            if (cells && cells.length > 0) {
                for (var i = 0; i < cells.length; i++) {
                    var c = cells[i].cells;
                    if (_t.options.sort.id == cells[i].s) {
                        _t.options.sort.rowindex = count;
                        return -1;
                    }
                    if (c && c.length > 0) {
                        if (setSortIndex(c) == -1)
                            return -1;//终止循环
                    }
                    else
                        count++;
                }
            }
        };

        setSortIndex(_cells);

    },
    loadTheadTr: function (thead, cells) {
        var _t = this,
            tr = thead.insertRow(-1),
            childCells = [];
        for (var i = 0; i < cells.length; i++) {
            var cell = document.createElement("TH"),
                obj = cells[i];
            cell.innerHTML = obj.n;
            if (!_t.options.isTheadPadding) {
                cell.style.padding = "0px";
            }
            obj.parentIndex && cell.setAttribute("parentIndex", obj.parentIndex);

            if (obj.w && obj.w > 0) cell.style.width = obj.w + "px";
            if (obj.s) {
                var _img = '';
                if (_t.options.sort.id.toLowerCase() == obj.s.toLowerCase()) {
                    var _img = (_t.options.sort.desc) ? "<img src=\"http://data.eastmoney.com/images/down.gif\" />" : "<img src=\"http://data.eastmoney.com/images/up.gif\" />";
                    _t.options.sort.rowindex = _t.options.thIndex;
                }
                if (_t.options.theadmoreurl)
                    cell.innerHTML = '<a target="_blank" href="' + _t.options.theadmoreurl.replace(/{key}/g, obj.s) + '">' + obj.n + "" + _img + '</a>';
                else if (/&img/.test(obj.n))
                    cell.innerHTML = "<span class=\"clickspan\">" + obj.n.replace('&img', _img) + "</span>";
                else
                    cell.innerHTML = "<span class=\"clickspan\">" + obj.n + "" + _img + "</span>";
                if (!_t.options.theadmoreurl)
                cell.onclick = function (cellIndex, sortCont) {
                    var event = window.event || arguments.callee.caller.arguments[0];
                    //target 就是这个对象
                    var target = event.srcElement || event.target
                    if (target.nodeName == "SELECT")
                        return false;

                    _t.options.sort.multiple = null;
                    if (_t.options.sort.id.toLowerCase() == sortCont.toLowerCase()) _t.options.sort.desc = !_t.options.sort.desc;
                    else _t.options.sort.id = sortCont,
                        _t.options.sort.desc = true;
                    _t.options.page = 1;
                    _t.options.autoScrollRun = true;//排序以后自动定位到表格
                    _t.update()
                }.bind(this, i, obj.s)
            }

            var c = obj.cells;
            if (c && c.length > 0) {
                for (var j = 0; j < c.length; j++) {
                    c[j].parentIndex = i.toString();
                    childCells.push(c[j]);
                }
                cell.setAttribute("hasChild", "1");
            }
            else {
                if (_t.options.sort.id == obj.s) {
                    _t.options.sort.rowindex = _t.options.thIndex;
                }
                _t.options.thIndex++;
            }
            tr.appendChild(cell);
        }
        if (childCells.length > 0) {
            _t.loadTheadTr(thead, childCells);
        }
    },
    floatHeader: function () {
        var _t = this;
        setTimeout(function () {
            var scroll_div = document.getElementById(_t.options.id + "-scroll-table");
            if (!scroll_div) {
                var scroll_div = document.createElement("DIV");
            }
            scroll_div.innerHTML = "";
            _t.options.scrollTable = _t.options.table.cloneNode(false);
            if (_t.tools.browser.ie) {
                _t.options.scrollTable.style.zoom = 1
            }
            _t.options.scrollTable.style.display = "none";
            _t.options.scrollTable.style.zIndex = "999";
            _t.options.scrollTableId = _t.options.scrollTable.id = _t.options.id + "-scroll";
            _t.options.scrollTable.style.width = _t.options.table.clientWidth + "px";
            scroll_div.id = _t.options.id + "-scroll-table";
            scroll_div.appendChild(_t.options.scrollTable);

            _t.options.table.parentNode.insertBefore(scroll_div, _t.options.table.parentNode.firstChild);
            var scrollTHead = _t.options.thead.cloneNode(true);
            var oldCells = _t.options.thead.getElementsByTagName("th");
            _t.options.scrollTable.appendChild(scrollTHead);
            var scrolth = scrollTHead.getElementsByTagName("th");
            for (var k = 0; k < oldCells.length; k++) {
                scrolth[k].style.width = oldCells[k].clientWidth + "px";
                scrolth[k].onclick = oldCells[k].onclick
            }
            _t.setScrollTBTop()
        },
            200)
    },
    pageit: function () {
        var _t = this,
            p = _t.options.page || 1,
            pages = _t.options.data.pages || 1;
        var _pn = _t.options.pagenav;
        if (_pn == null) {
            return
        }
        p = isNaN(p) ? 1 : parseInt(p);
        var _minipn = _t.options.miniPageNav;
        if (document.getElementById(_minipn)) {
            document.getElementById(_minipn).style.display = "block";
            var mini_bs = document.getElementById(_minipn).getElementsByTagName("b");
            if (mini_bs.length == 4) {
                mini_bs[3].innerHTML = "共<span class=\"red\">" + pages + "</span>页";
                mini_bs[1].innerHTML = "上一页";
                mini_bs[2].innerHTML = "下一页";
                if (p <= 1) {
                    mini_bs[1].className = "n1";
                    mini_bs[1].onclick = null;
                    mini_bs[1].setAttribute("title", "")
                } else {
                    mini_bs[1].className = "n2";
                    mini_bs[1].setAttribute("title", "转到第" + (p - 1) + "页");
                    mini_bs[1].onclick = function (n) {
                        _t.go(p - 1)
                    }
                }
                if (p >= pages) {
                    mini_bs[2].className = "n1";
                    mini_bs[2].setAttribute("title", "");
                    mini_bs[2].onclick = null
                } else {
                    mini_bs[2].className = "n2";
                    mini_bs[2].setAttribute("title", "转到第" + (p + 1) + "页");
                    mini_bs[2].onclick = function (n) {
                        _t.go(p + 1)
                    }
                }
                mini_bs[0].innerHTML = "当前第<span class=\"red\">" + p + "</span>页"
            }
            else if (mini_bs.length == 6) {
                mini_bs[5].innerHTML = "共<span class=\"red\">" + pages + "</span>页";
                mini_bs[1].innerHTML = "首页";
                mini_bs[2].innerHTML = "上一页";
                mini_bs[3].innerHTML = "下一页";
                mini_bs[4].innerHTML = "尾页";
                if (p <= 1) {
                    mini_bs[2].className = mini_bs[1].className = "n1";
                    mini_bs[2].onclick = mini_bs[1].onclick = null;
                    mini_bs[2].setAttribute("title", "");
                    mini_bs[1].setAttribute("title", "");
                } else {
                    mini_bs[2].className = mini_bs[1].className = "n2";
                    mini_bs[2].setAttribute("title", "转到第" + (p - 1) + "页");
                    mini_bs[1].setAttribute("title", "转到首页");
                    mini_bs[2].onclick = function (n) {
                        _t.go(p - 1);
                    }
                    mini_bs[1].onclick = function (n) {
                        _t.go(1);
                    }
                }
                if (p >= pages) {
                    mini_bs[3].className = mini_bs[4].className = "n1";
                    mini_bs[3].setAttribute("title", "");
                    mini_bs[4].setAttribute("title", "");
                    mini_bs[3].onclick = mini_bs[4].onclick = null
                } else {
                    mini_bs[3].className = mini_bs[4].className = "n2";
                    mini_bs[3].setAttribute("title", "转到第" + (p + 1) + "页");
                    mini_bs[4].setAttribute("title", "转到尾页");
                    mini_bs[3].onclick = function (n) {
                        _t.go(p + 1);
                    }
                    mini_bs[4].onclick = function (n) {
                        _t.go(pages);
                    }
                }
                mini_bs[0].innerHTML = "当前第<span class=\"red\">" + p + "</span>页";
            }

        }
        _pn = document.getElementById(_pn);
        if (!_pn) return;
        _pn.innerHTML = "";
        if (_t.options.data.pages == 0 || p == pages && pages == 1) {
            _pn.parentNode.style.display = "none";
            return
        } else {
            _pn.parentNode.style.display = ""
        }
        var _a = document.createElement("a");
        _pn.appendChild(_a);
        _a.setAttribute("href", "javascript:void(0);");
        _a.setAttribute("target", "_self");
        _a.innerHTML = "上一页";
        if (p == 1) {
            _a.className = "nolink";
            _a.onclick = function () {
                return false
            }
        } else {
            _a.className = "";
            _a.setAttribute("href", "javascript:void(0);");
            _a.setAttribute("target", "_self");
            _a.setAttribute("title", "转到第" + (p - 1) + "页");
            _a.onclick = function () {
                _t.go(p - 1)
            }
        }
        var start = (p > 3) ? p - 2 : 1;
        start = (p > pages - 3 && pages > 4) ? pages - 4 : start;
        var end = (start == 1) ? 5 : start + 4;
        end = (end > pages) ? pages : end;
        if (start > 1) {
            var pre = ((start - 3) < 1) ? 1 : (start - 3);
            var _pre = ((start - 3) > pages) ? pages : (next + 3);
            _a = document.createElement("a");
            _pn.appendChild(_a);
            _a.setAttribute("href", "javascript:void(0);");
            _a.setAttribute("target", "_self");
            _a.setAttribute("title", "转到第一页");
            _a.onclick = function () {
                _t.go(1)
            };
            _a.innerHTML = 1;
            if (pre > 1) {
                _a = document.createElement("a");
                _pn.appendChild(_a);
                _a.setAttribute("href", "javascript:void(0);");
                _a.setAttribute("target", "_self");
                _a.setAttribute("title", "转到上一组");
                _a.onclick = function () {
                    _t.go(pre)
                };
                _a.className = "next";
                _a.innerHTML = "..."
            }
        }
        for (var i = start; i <= end; i++) {
            if (p == i) {
                _a = document.createElement("span");
                _pn.appendChild(_a);
                _a.className = "at";
                _a.innerHTML = i
            } else {
                _a = document.createElement("a");
                _pn.appendChild(_a);
                _a.setAttribute("href", "javascript:void(0);");
                _a.setAttribute("target", "_self");
                _a.setAttribute("title", "转到第" + i + "页");
                _a.onclick = function (n) {
                    _t.go(n)
                }.bind(this, i);
                _a.innerHTML = i
            }
        }
        if (pages > end) {
            var next = ((end + 3) > pages) ? pages : (end + 3);
            var _nex = ((next + 3) > pages) ? pages : (next + 3);
            _a = document.createElement("a");
            _pn.appendChild(_a);
            _a.setAttribute("href", "javascript:void(0);");
            _a.setAttribute("target", "_self");
            _a.setAttribute("title", "转到下一组");
            _a.onclick = function () {
                _t.go(next)
            };
            _a.className = "next";
            _a.innerHTML = "...";
            if (next < pages) {
                _a = document.createElement("a");
                _pn.appendChild(_a);
                _a.setAttribute("href", "javascript:void(0);");
                _a.setAttribute("target", "_self");
                _a.setAttribute("title", "转到最后一页");
                _a.onclick = function () {
                    _t.go(pages)
                };
                _a.innerHTML = pages
            }
        }
        _a = document.createElement("a");
        _pn.appendChild(_a);
        _a.setAttribute("href", "javascript:void(0);");
        _a.setAttribute("target", "_self");
        if (p == pages) {
            _a.className = "nolink";
            _a.innerHTML = "下一页";
            _a.onclick = function () {
                return false
            }
        } else {
            _a.innerHTML = "下一页";
            _a.onclick = function () {
                _t.go(p + 1)
            };
            _a.setAttribute("title", "转到" + (p + 1) + "页")
        }
        _a = document.createElement("span");
        _pn.appendChild(_a);
        _a.className = "txt";
        _a.innerHTML = "&nbsp;&nbsp;转到";
        _a = document.createElement("input");
        _pn.appendChild(_a);
        _a.className = "txt";
        _a.id = _t.options.pagenav + "gopage";
        _a.value = p;
        _a = document.createElement("a");
        _pn.appendChild(_a);
        _a.className = "btn_link";
        _a.onclick = function () {
            if (document.getElementById(_t.options.pagenav + "gopage")) {
                var p = document.getElementById(_t.options.pagenav + "gopage").value;
                if (isNaN(p) || parseInt(p) < 0) {
                    p = 1
                }
                _t.go(p)
            }
        };
        _a.innerHTML = "Go"
    },
    go: function (p) {
        var _t = this;
        p = (p > _t.options.data.pages) ? _t.options.data.pages : p;
        p = (p < 1) ? 1 : p;
        _t.options.page = p;
        setTimeout(function () {
            _t.options.autoScrollRun = true;//翻页以后自动定位到表格
            _t.update()
        },
            0)
    },
    scorllTop: function () {
        var next = true,
            _this = this,
            _topnode = document.getElementById("datatitle") || document.getElementById(_this.options.id) || document.body;
        _rect = this.tools.rect(_topnode),
            _top = _rect.top - 50,
            tmp_top = this.tools.getScrollTop();
        _this.tools.wheel(function () {
            next = false
        });
        var s = function (b, e) {
            var _t = this;
            _t.b = b;
            _t.e = e;
            _t.c = _t.e - _t.b;
            _t.d = ('\v' == 'v') ? 30 : 60;
            _t.t = 1;
            _t.w = function (t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b
            };
            function run() {
                _tmp = _t.w(_t.t, _t.b, _t.c, _t.d);
                window.scrollTo(0, _tmp);
                if (_t.t < _t.d) {
                    _t.t++;
                    setTimeout(run, 10)
                } else {
                    _this.tools.wheel(function () {
                        next = true
                    })
                }
            }

            run()
        };
        if (_this.options.autoScrollRun && _this.options.scrollState)
            new s(tmp_top, _top)
    },
    setScrollTBTop: function () {
        this.options.scrollTable = document.getElementById(this.options.scrollTableId);
        this.options.table = document.getElementById(this.options.id);
        var _t = this;
        var isIE6 = this.tools.browser.ie6;
        var isIE7 = this.tools.browser.ie7;
        var isIE = this.tools.browser.msie;
        if (isIE6) {
            var _body = document.getElementsByTagName('body')[0];
            var _html = document.getElementsByTagName('html')[0];
            if (_body.style.backgroundAttachment != "fixed") {
                _html.style.backgroundImage = "url(about:blank)";
                _html.style.backgroundAttachment = "fixed"
            }
        }
        if (window.innerWidth) _t.options.winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth)) _t.options.winWidth = document.body.clientWidth;
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            _t.options.winWidth = document.documentElement.clientWidth
        }
        _t.tools.addEvent(window, "scroll", function () {
            var scrollXY = _t.getScroll();
            //获取表格相对于window的位置
            var pos = _t.getElementPos(_t.options.id);
            var _t_scrollTable = _t.options.scrollTable;

            if (_t_scrollTable) {
                if (scrollXY.y >= pos.y) {
                    if (isIE6) {
                        var temptop = document.documentElement.scrollTop || document.body.scrollTop;
                        //temptop = temptop - _t.contentY;
                        _t_scrollTable.style.display = "block";
                        _t_scrollTable.style.position = "absolute";
                        if (document.getElementById("alllink")) {
                            //有左侧导航的页面
                            _t_scrollTable.style.top = (temptop + 67).toString() + "px";
                        } else {
                            //无左侧导航的页面
                            _t_scrollTable.style.top = (temptop + 33).toString() + "px";
                        }
                    } else {
                        _t_scrollTable.style.display = "block";
                        _t_scrollTable.style.position = "fixed";
                        if (_t.options.scrolltop) _t_scrollTable.style.top = _t.options.scrolltop + "px";
                        else _t_scrollTable.style.top = _t.options.theadTop + "px"
                    }
                } else {
                    _t_scrollTable.style.display = "none"
                }
                if (_t.options.winWidth < _t.options.minWidth) {
                    if (isIE6) {
                        _t_scrollTable.style.left = "auto";
                        //_t_scrollTable.style.left = pos.x + (-document.body.scrollLeft || -document.documentElement.scrollLeft) + "px";
                    } else if (isIE7) {
                        _t_scrollTable.style.left = pos.x + (-document.body.scrollLeft || -document.documentElement.scrollLeft) - 2 + "px";
                    } else {
                        //_t_scrollTable.style.left = "auto"
                        _t_scrollTable.style.left = pos.x + (-document.body.scrollLeft || -document.documentElement.scrollLeft) + "px";
                    }
                } else {
                    if (isIE6) {
                        _t_scrollTable.style.left = "auto";
                    } else if (isIE7) {
                        _t_scrollTable.style.left = pos.x + (-document.body.scrollLeft || -document.documentElement.scrollLeft) - 2 + "px";
                    } else {
                        _t_scrollTable.style.left = pos.x + (-document.body.scrollLeft || -document.documentElement.scrollLeft) + "px";
                    }
                }

                //浮动表头相对于显示器左上角的位置
                var _t_scrollTable_offsetTop = 0;
                if (_t_scrollTable.style.top) {
                    if (isIE) {
                        _t_scrollTable_offsetTop = parseInt((_t_scrollTable.style.top).replace("px", "")) + scrollXY.y;
                        if (isIE6) {
                            _t_scrollTable_offsetTop = parseInt((_t_scrollTable.style.top).replace("px", ""));
                        }
                        else if (isIE7) {
                            _t_scrollTable_offsetTop += 2;
                        }
                    }
                    else {
                        _t_scrollTable_offsetTop = _t.getElementPos(_t_scrollTable.id).y;
                    }
                }

                //表格的高度
                var table_height = _t.options.table.clientHeight;
                var scrollTable_thead_height = 0;
                if (_t_scrollTable && _t_scrollTable.getElementsByTagName("thead")[0]) {
                    scrollTable_thead_height = _t_scrollTable.getElementsByTagName("thead")[0].offsetHeight;
                }
                //浮动表头滚动到表格的最下方隐藏
                if (_t_scrollTable_offsetTop && table_height && (_t_scrollTable_offsetTop > (pos.y + table_height - scrollTable_thead_height))) {
                    _t_scrollTable.style.display = "none";
                }
            }
        });

        _t.tools.addEvent(window, "resize", function () {
            if (window.innerWidth) _t.options.winWidth = window.innerWidth;
            else if ((document.body) && (document.body.clientWidth)) _t.options.winWidth = document.body.clientWidth;
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                _t.options.winWidth = document.documentElement.clientWidth
            }
            //window.onscroll();
            if (_t.options.autoWidit) {
                _t.options.scrollTable.style.width = _t.options.table.clientWidth + "px";
                var oldCells = _t.options.thead.getElementsByTagName("th");
                var scrolth = _t.options.scrollTable.getElementsByTagName("thead")[0].getElementsByTagName("th");
                for (var k = 0; k < oldCells.length; k++) {
                    scrolth[k].style.width = oldCells[k].clientWidth + "px"
                }
            }
            if (document.getElementById("mainflow")) {
                if (_t.options.winWidth < _t.options.minWidth)
                    document.getElementById("mainflow").style.width = "100%";
                else
                    document.getElementById("mainflow").style.width = "96%";
            }
        });
    },
    getElementPos: function (elementId) {
        var ua = navigator.userAgent.toLowerCase();
        var isOpera = (ua.indexOf('opera') != -1);
        var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
        var el = document.getElementById(elementId);
        if (!el || !(el.parentNode) || el.parentNode === null || el.style.display == 'none') {
            return false;
        }
        var parent = null;
        var pos = [];
        var box;
        if (el.getBoundingClientRect)    //IE
        {
            box = el.getBoundingClientRect();
            var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            return { x: box.left + scrollLeft, y: box.top + scrollTop };
        } else if (document.getBoxObjectFor)    // gecko    
        {
            box = document.getBoxObjectFor(el);
            var borderLeft = (el.style.borderLeftWidth) ? parseInt(el.style.borderLeftWidth) : 0;
            var borderTop = (el.style.borderTopWidth) ? parseInt(el.style.borderTopWidth) : 0;
            pos = [box.x - borderLeft, box.y - borderTop];
        } else    // safari & opera    
        {
            pos = [el.offsetLeft, el.offsetTop];
            parent = el.offsetParent;
            if (parent != el) {
                while (parent) {
                    pos[0] += parent.offsetLeft;
                    pos[1] += parent.offsetTop;
                    parent = parent.offsetParent;
                }
            }
            if (ua.indexOf('opera') != -1 || (ua.indexOf('safari') != -1 && el.style.position == 'absolute')) {
                pos[0] -= document.body.offsetLeft;
                pos[1] -= document.body.offsetTop;
            }
        }
        if (el.parentNode) {
            parent = el.parentNode;
        } else {
            parent = null;
        }
        while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
            pos[0] -= parent.scrollLeft;
            pos[1] -= parent.scrollTop;
            if (parent.parentNode) {
                parent = parent.parentNode;
            } else {
                parent = null;
            }
        }
        return { x: pos[0], y: pos[1] };
    },


    getFromat: function (v0, v1, c0) {
        if (v0 > c0) {
            return "<span class=\"red\">" + v1 + "</span>"
        } else if (v0 < c0) {
            return "<span class=\"green\">" + v1 + "</span>"
        } else {
            return "<span>" + v1 + "</span>"
        }
    },
    getScroll: function (node) {
        var doc = node ? node.ownerDocument : document;
        var top = doc.documentElement.scrollTop || doc.body.scrollTop;
        var left = doc.documentElement.scrollLeft || doc.body.scrollLeft;
        return {
            "x": left,
            "y": top
        }
    },
    findPos: function (obj) {
        var curleft = obj.offsetLeft || 0;
        var curtop = obj.offsetTop || 0;
        while (obj = obj.offsetParent) {
            curleft += eval(obj.offsetLeft);
            curtop += obj.offsetTop
        }
        return {
            "x": curleft,
            "y": curtop
        }
    },
    tools: {
        loadJs: function (url, charset, callback) {
            var _js = document.createElement('script');
            var _this = this;
            if (!(charset == null || charset == '')) {
                _js.setAttribute('charset', charset)
            }
            _js.setAttribute('type', 'text/javascript');
            _js.setAttribute('src', url);
            document.getElementsByTagName('head')[0].appendChild(_js);
            _js.onload = _js.onreadystatechange = function () {
                if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                    callback(_js);
                    _this.removeJs(_js)
                } else { }
            }
        },
        removeJs: function (o) {
            var _js = (typeof o == "string") ? document.getElementById(o) : o;
            _js.onload = _js.onreadystatechange = null;
            try {
                _js.parentNode.removeChild(_js)
            } catch (e) { }
        },
        dataFormat: function (date, part) {
            if (typeof date == "undefined") date = new Date();
            var datecopy;
            var redate = "";
            part = (part == null) ? "yyyy-MM-dd HH:mm:ss" : part;
            var y = date.getFullYear();
            var M = date.getMonth() + 1;
            var d = date.getDate();
            var H = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var MM = (M > 9) ? M : "0" + M;
            var dd = (d > 9) ? d : "0" + d;
            var HH = (H > 9) ? H : "0" + H;
            var mm = (m > 9) ? m : "0" + m;
            var ss = (s > 9) ? s : "0" + s;
            redate = part.replace("yyyy", y).replace("MM", MM).replace("dd", dd).replace("HH", HH).replace("mm", mm).replace("ss", ss).replace("M", M).replace("d", d).replace("H", H).replace("m", m).replace("s", s);
            return redate
        },
        browser: (function () {
            var ua = window.navigator.userAgent.toLowerCase();
            var b = {
                msie: /msie/.test(ua) && !/opera/.test(ua),
                opera: /opera/.test(ua),
                safari: /webkit/.test(ua) && !/chrome/.test(ua),
                firefox: /firefox/.test(ua),
                chrome: /chrome/.test(ua)
            };
            var vMark = "";
            for (var i in b) {
                if (b[i]) {
                    vMark = "safari" == i ? "version" : i;
                    break
                }
            }
            b.version = vMark && RegExp("(?:" + vMark + ")[\\/: ]([\\d.]+)").test(ua) ? RegExp.$1 : "0";
            b.ie = b.msie;
            b.ie6 = b.msie && parseInt(b.version, 10) == 6;
            b.ie7 = b.msie && parseInt(b.version, 10) == 7;
            b.ie8 = b.msie && parseInt(b.version, 10) == 8;
            return b
        })(),
        getScrollTop: function (node) {
            var doc = node ? node.ownerDocument : document;
            return doc.documentElement.scrollTop || doc.body.scrollTop
        },
        getScrollLeft: function (node) {
            var doc = node ? node.ownerDocument : document;
            return doc.documentElement.scrollLeft || doc.body.scrollLeft
        },
        contains: document.defaultView ?
            function (a, b) {
                return !!(a.compareDocumentPosition(b) & 16)
            } : function (a, b) {
                return a != b && a.contains(b)
            },
        rect: function (node) {
            var left = 0,
                top = 0,
                right = 0,
                bottom = 0,
                B = this.browser,
                D = this;
            if (!node.getBoundingClientRect || B.ie8) {
                var n = node;
                while (n) {
                    left += n.offsetLeft,
                        top += n.offsetTop;
                    n = n.offsetParent
                };
                right = left + node.offsetWidth;
                bottom = top + node.offsetHeight
            } else {
                var rect = node.getBoundingClientRect();
                left = right = D.getScrollLeft(node);
                top = bottom = D.getScrollTop(node);
                left += rect.left;
                right += rect.right;
                top += rect.top;
                bottom += rect.bottom
            };
            return {
                "left": left,
                "top": top,
                "right": right,
                "bottom": bottom
            }
        },
        wheel: function (callback) {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', callback, false)
            } else {
                window.onmousewheel = document.onmousewheel = callback
            }
        },
        GetQueryStr: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]);
            return null
        },
        OptionValue: function (s, v) {
            for (var i = 0; i < s.options.length; i++) {
                if ((s.options[i].value.indexOf(v)) != -1 && v != '') {
                    s.options[i].selected = true;
                    break
                }
            }
        },
        addEvent: function (obj, type, fn) {
            if (obj.attachEvent) {
                obj['e' + type + fn] = fn;
                obj[type + fn] = function () { obj['e' + type + fn](window.event); }
                obj.attachEvent('on' + type, obj[type + fn]);
            } else
                obj.addEventListener(type, fn, false);
        }

    },
    sendloadcilck: function (stime) {
        //加埋点
        try {
            //WebSiteStat("view") 
            //网站埋点
            var bid = "", uid = "";
            var bid_t = document.cookie.match(new RegExp("(^| )qgqp_b_id=([^;]*)(;|$)"));
            var uid_t = document.cookie.match(new RegExp("(^| )uidal=([^;]*)(;|$)"));
            if (null != bid_t)
                bid = decodeURIComponent(bid_t[2]);
            if (null != uid_t)
                uid = decodeURIComponent(uid_t[2]).substring(0, 16);
            var mdparam = '{"lastModifyTime":"_lastModifyTime_","type":"view","uid":"' + uid + '","bid":"' + bid + '","referer":"' + document.referrer.substring(0, 400) + '","pagetype":"","pageitem":"","browser_height":' + document.documentElement.clientHeight + ',"url":"' + self.location.href.substring(0, 400) + '","loadtime":' + ((new Date).getTime() - stime) + ',"domainId":"' + self.location.host + '"}'
            var timg = document.createElement("img");
            timg.src = "//huaxiang.eastmoney.com/CommonRecommend.png?json=" + encodeURIComponent(mdparam),
                timg.style.display = "none",
                document.body.appendChild(timg),
                setTimeout(function () {
                    document.body.removeChild(timg)
                }, 2000)
            //大数据埋点
            window.emtjLaunch && window.emtjLaunch();
        } catch (error) {
        }
    }
});
Function.prototype.bind = function () {
    var __m = this,
        object = arguments[0],
        args = new Array();
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    return function () {
        return __m.apply(object, args);
    }
};

// 获取沪深股市市场（上证股票1|股证股票2）
function GetMktByCode(code) {
    if (code.Length < 3)
        return "sh";
    var one = code.substr(0, 1);
    var three = code.substr(0, 3);
    if (one == "5" || one == "6" || one == "9") {
        return "sh";
    }
    else {
        if (three == "009" || three == "126" || three == "110" || three == "201" || three == "202" || three == "203" || three == "204") {
            return "sh";
        }
        else {
            return "sz";
        }
    }
}