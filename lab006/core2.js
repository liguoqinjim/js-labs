(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    }
    ;
    NEJ.P = function(ED9u) {
        if (!ED9u || !ED9u.length)
            return null;
        var US3x = window;
        for (var a = ED9u.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; US3x = US3x[a[i]] = US3x[a[i]] || {},
            i++)
            ;
        return US3x
    }
    ;
    NEJ.Q = function(bL9C, ED9u) {
        bL9C = bL9C || NEJ.O;
        var bs9j = ED9u.split(".");
        for (var i = 0, l = bs9j.length; i < l; i++) {
            bL9C = bL9C[bs9j[i]];
            if (!bL9C)
                break
        }
        return bL9C
    }
    ;
    NEJ.C = function() {
        var brv9m = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var brA9r = function(A9r, bv9m) {
            for (var x in bv9m)
                if (A9r == bv9m[x])
                    return x;
            return null
        };
        var bjc7V = {
            cl9c: 0,
            bk9b: 1,
            bD9u: 2,
            bR9I: 3,
            bJ9A: 4,
            eY0x: 5,
            jZ2x: 6,
            ej0x: 7
        }
            , tK5P = {
            cs9j: 0,
            bl9c: 1,
            bH9y: 2,
            cc9T: 3,
            bM9D: 4,
            gw1x: 5,
            kP2x: 6,
            fO1x: 7
        };
        return function() {
            var fj1x = function() {
                this.bsv0x();
                return this.cl9c.apply(this, arguments)
            };
            fj1x.prototype.bsv0x = NEJ.F;
            fj1x.prototype.cl9c = NEJ.F;
            fj1x.O9F = function(yH7A, bsO0x) {
                if (brv9m(yH7A))
                    return;
                if (bsO0x == null || !!bsO0x)
                    NEJ.X(this, yH7A, brv9m);
                this.ckC1x = yH7A;
                this.cg9X = yH7A.prototype;
                var bA9r = function() {};
                bA9r.prototype = yH7A.prototype;
                this.prototype = new bA9r;
                var Ew9n = this.prototype;
                Ew9n.constructor = this;
                var dP0x;
                for (var x in bjc7V) {
                    dP0x = brA9r(bjc7V[x], tK5P);
                    if (!dP0x || !this.cg9X[x])
                        continue;
                    Ew9n[x] = function(T9K) {
                        return function() {
                            this[T9K].apply(this, arguments)
                        }
                    }(dP0x)
                }
                var Eu9l = {};
                for (var x in tK5P) {
                    dP0x = brA9r(tK5P[x], bjc7V);
                    if (!dP0x || !this.cg9X[dP0x])
                        continue;
                    Eu9l[dP0x] = yH7A;
                    Ew9n[x] = function(T9K) {
                        return function() {
                            var m8e, bA9r = this.baF5K[T9K], ZA5F = bA9r.prototype[T9K];
                            this.baF5K[T9K] = bA9r.ckC1x || yH7A;
                            if (!!ZA5F)
                                m8e = ZA5F.apply(this, arguments);
                            this.baF5K[T9K] = yH7A;
                            return m8e
                        }
                    }(dP0x)
                }
                Ew9n.bsv0x = function() {
                    this.baF5K = NEJ.X({}, Eu9l)
                }
                ;
                Ew9n.cxz4D = Ew9n.cs9j;
                return Ew9n
            }
            ;
            return fj1x
        }
    }();
    NEJ.X = function(gd1x, bN9E, dE0x) {
        if (!gd1x || !bN9E)
            return gd1x;
        dE0x = dE0x || NEJ.F;
        for (var x in bN9E) {
            if (bN9E.hasOwnProperty(x) && !dE0x(bN9E[x], x))
                gd1x[x] = bN9E[x]
        }
        return gd1x
    }
    ;
    NEJ.EX = function(gd1x, bN9E) {
        if (!gd1x || !bN9E)
            return gd1x;
        for (var x in gd1x) {
            if (gd1x.hasOwnProperty(x) && bN9E[x] != null)
                gd1x[x] = bN9E[x]
        }
        return gd1x
    }
    ;
    var ID0x = Function.prototype;
    ID0x.ef0x = function(lV2x, bbt6n) {
        var f = NEJ.F
            , bbt6n = bbt6n || f
            , lV2x = lV2x || f
            , dc0x = this;
        return function() {
            var d8f = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lV2x(d8f);
            if (!d8f.stopped) {
                d8f.value = dc0x.apply(this, d8f.args);
                bbt6n(d8f)
            }
            return d8f.value
        }
    }
    ;
    ID0x.g8c = function() {
        var bg9X = arguments
            , gd1x = arguments[0]
            , bkp8h = this;
        return function() {
            var tZ6T = NEJ.R.slice.call(bg9X, 1);
            NEJ.R.push.apply(tZ6T, arguments);
            return bkp8h.apply(gd1x || window, tZ6T)
        }
    }
    ;
    ID0x.dW0x = function() {
        var bg9X = arguments
            , gd1x = NEJ.R.shift.call(bg9X)
            , bkp8h = this;
        return function() {
            NEJ.R.push.apply(arguments, bg9X);
            return bkp8h.apply(gd1x || window, arguments)
        }
    }
    ;
    var ID0x = String.prototype;
    if (!ID0x.trim) {
        ID0x.trim = function() {
            var cP0x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(cP0x, "")
            }
        }()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , M9D = c8g("nej.p")
        , Zq5v = window.navigator.platform
        , sV5a = window.navigator.userAgent;
    var kb2x = {
        mac: Zq5v,
        win: Zq5v,
        linux: Zq5v,
        ipad: sV5a,
        ipod: sV5a,
        iphone: Zq5v,
        android: sV5a
    };
    M9D.Kh0x = kb2x;
    for (var x in kb2x)
        kb2x[x] = (new RegExp(x,"i")).test(kb2x[x]);
    kb2x.ios = kb2x.ipad || kb2x.iphone || kb2x.ipod;
    kb2x.tablet = kb2x.ipad;
    kb2x.desktop = kb2x.mac || kb2x.win || kb2x.linux && !kb2x.android;
    var hD1x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    M9D.cS0x = hD1x;
    if (/msie\s+(.*?);/i.test(sV5a) || /trident\/.+rv:([\d\.]+)/i.test(sV5a)) {
        hD1x.engine = "trident";
        hD1x.browser = "ie";
        hD1x.version = RegExp.$1;
        hD1x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var oa3x = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hD1x.release = oa3x[document.documentMode] || oa3x[parseInt(hD1x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sV5a)) {
        hD1x.engine = "webkit";
        hD1x.release = RegExp.$1 || "";
        hD1x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sV5a)) {
        hD1x.engine = "gecko";
        hD1x.release = RegExp.$1 || "";
        hD1x.browser = "firefox";
        hD1x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(sV5a))
            hD1x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sV5a)) {
        hD1x.engine = "presto";
        hD1x.release = RegExp.$1 || "";
        hD1x.browser = "opera";
        hD1x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(sV5a))
            hD1x.version = RegExp.$1 || ""
    }
    if (hD1x.browser == "unknow") {
        var oa3x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = oa3x.length, T9K; i < l; i++) {
            T9K = oa3x[i] == "safari" ? "version" : oa3x[i];
            if ((new RegExp(T9K + "/(.*?)(?=\\s|$)","i")).test(sV5a)) {
                hD1x.browser = oa3x[i];
                hD1x.version = RegExp.$1.trim();
                break
            }
        }
    }
    M9D.btT0x = {};
    var Zb5g = hD1x.engine != "trident";
    M9D.mq3x = {
        gecko: hD1x.engine != "gecko",
        webkit: hD1x.engine != "webkit",
        presto: hD1x.engine != "presto",
        trident0: Zb5g || hD1x.release > "2.0",
        trident1: Zb5g || hD1x.release < "6.0",
        trident2: Zb5g || hD1x.release > "3.0",
        trident: Zb5g || hD1x.release >= "6.0"
    }
})();
(function() {
    var iC2x = NEJ.P("nej.c")
        , R9I = {};
    var bkx8p = function() {
        var cP0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V9M) {
            V9M = V9M || "";
            if (cP0x.test(V9M))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Kn0x = function() {
        var bup0x = function(i8a, bv9m) {
            if (!i8a || !i8a.length)
                return;
            for (var i = 0, l = i8a.length, kL2x; i < l; i++) {
                kL2x = i8a[i];
                if (kL2x.indexOf("://") > 0)
                    bv9m[bkx8p(kL2x)] = kL2x
            }
        };
        var bc9T = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bN9E) {
            iC2x.Hp0x("root", bN9E.root || "/res/");
            var bhd7W, fv1x = iC2x.x9o("root");
            for (var x in bc9T) {
                bhd7W = bc9T[x];
                iC2x.Hp0x(x, bN9E[bhd7W.name] || fv1x + bhd7W.dft)
            }
            var zj7c = bN9E.p_csrf;
            if (zj7c == !0) {
                zj7c = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iC2x.Hp0x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, zj7c));
            R9I.frames = {};
            bup0x(bN9E.p_frame, R9I.frames);
            R9I.flashs = {};
            bup0x(bN9E.p_flash, R9I.flashs)
        }
    }();
    iC2x.Hp0x = function(J9A, A9r) {
        R9I[J9A] = A9r
    }
    ;
    iC2x.x9o = function(J9A) {
        return R9I[J9A]
    }
    ;
    iC2x.ccc9T = function(V9M) {
        var vp6j = bkx8p(V9M);
        return R9I.frames[vp6j] || vp6j + "/res/nej_proxy_frame.html"
    }
    ;
    iC2x.ciZ0x = function(V9M) {
        return R9I.flashs[bkx8p(V9M)]
    }
    ;
    Kn0x(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c8g = NEJ.P
        , M9D = c8g("nej.p")
        , iC2x = c8g("nej.c")
        , bN9E = window.NEJ_CONF || NEJ.O;
    if (M9D.mq3x.trident)
        return;
    iC2x.Hp0x("storage.swf", bN9E.storage || iC2x.x9o("root") + "nej_storage.swf");
    if (M9D.cS0x.release < "4.0") {
        iC2x.Hp0x("blank.png", bN9E.blank || iC2x.x9o("root") + "nej_blank.gif")
    }
    var i8a = bN9E.xdr
        , fZ1x = /^(https?:\/\/.*?)(?=\/|$)/i
        , jr2x = /[\/?=&]/i;
    var buU0x = function(V9M) {
        return (fZ1x.test(V9M) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i8a && !!i8a.length)
        for (var i = i8a.length - 1, V9M, J9A; i >= 0; i--) {
            V9M = i8a[i];
            J9A = buU0x(V9M);
            if (!!J9A)
                iC2x.Hp0x(J9A, V9M)
        }
    iC2x.cxm4q = function(V9M) {
        var J9A = buU0x(V9M);
        if (!J9A) {
            if (jr2x.test(V9M)) {
                J9A = location.protocol + "//" + location.host
            } else if (V9M.indexOf("://") < 0) {
                J9A = location.protocol + "//" + V9M
            } else {
                J9A = V9M
            }
        }
        return iC2x.x9o(J9A) || J9A + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c8g = NEJ.P
        , iC2x = c8g("nej.c")
        , M9D = c8g("nej.g")
        , fX1x = +(new Date);
    M9D.cxi4m = 1e4 - fX1x;
    M9D.bgR7K = 10001 - fX1x;
    M9D.cxh4l = 10002 - fX1x;
    M9D.bvT0x = 10003 - fX1x;
    M9D.bRd6X = 10004 - fX1x;
    M9D.cxb4f = 10005 - fX1x;
    M9D.bkw8o = 10006 - fX1x;
    M9D.bSU7N = 10007 - fX1x;
    M9D.xj7c = "Content-Type";
    M9D.cwW3x = "text/plain";
    M9D.DB9s = "multipart/form-data";
    M9D.bTD7w = "application/x-www-form-urlencoded";
    M9D.bpj9a = iC2x.x9o("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c8g = NEJ.P
        , eU0x = NEJ.R
        , M9D = c8g("nej.p")
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , k8c = c8g("nej.u")
        , ba9R = c8g("nej.h");
    var lf2x = M9D.cS0x.prefix
        , bwN1x = M9D.btT0x
        , bXy8q = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    }
        , cbX9O = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    }
        , Mv1x = {
        transition: !0,
        transform: !0,
        animation: !0,
        keyframes: !0,
        box: !0,
        "box-pack": !0,
        "box-flex": !0,
        marquee: !0,
        "border-radius": !0,
        "user-select": !0
    };
    var Kn0x = function() {
        var rg4k = ba9R.byZ1x();
        bwN1x.css3d = !!rg4k && rg4k.m41 != null;
        var cP0x = /-([a-z])/g;
        for (var x in Mv1x) {
            Mv1x[bzh1x(x)] = Mv1x[x]
        }
    };
    var bzh1x = function() {
        var cP0x = /-([a-z])/g;
        return function(T9K) {
            T9K = T9K || "";
            return T9K.replace(cP0x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bzO1x = function(T9K) {
        return (!bwN1x.css3d ? bXy8q : cbX9O)[T9K]
    };
    var bzP1x = function() {
        var cP0x = /\s+/;
        return function(fj1x) {
            fj1x = (fj1x || "").trim();
            return !!fj1x ? fj1x.split(cP0x) : null
        }
    }();
    var Wt4x = function(E9v, t8l, fj1x) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return;
        k8c.be9V(bzP1x(fj1x), function(dJ0x) {
            E9v.classList[t8l](dJ0x)
        })
    };
    ba9R.FX9O = function(i8a) {
        return eU0x.slice.call(i8a, 0)
    }
    ;
    ba9R.bmf8X = function(E9v) {
        return ba9R.FX9O(E9v.children)
    }
    ;
    ba9R.bnc8U = function(E9v, fj1x) {
        return ba9R.FX9O(E9v.getElementsByClassName(fj1x))
    }
    ;
    ba9R.bnW9N = function(E9v, Gl9c) {
        Wt4x(E9v, "add", Gl9c)
    }
    ;
    ba9R.boP9G = function(E9v, GZ0x) {
        Wt4x(E9v, "remove", GZ0x)
    }
    ;
    ba9R.Nb1x = function(E9v, GZ0x, Gl9c) {
        Wt4x(E9v, "remove", GZ0x);
        Wt4x(E9v, "add", Gl9c)
    }
    ;
    ba9R.bbs6m = function(E9v, fj1x) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return !1;
        var i8a = E9v.classList;
        if (!i8a || !i8a.length)
            return !1;
        return k8c.cV0x(bzP1x(fj1x), function(dJ0x) {
            return i8a.contains(dJ0x)
        }) >= 0
    }
    ;
    ba9R.bbz6t = function(E9v, dJ0x) {}
    ;
    ba9R.bbF6z = function(E9v) {}
    ;
    ba9R.bdc6W = function(fF1x, mZ3x) {
        fF1x.selectionEnd = mZ3x.end || 0;
        fF1x.selectionStart = mZ3x.start || 0;
        fF1x.focus()
    }
    ;
    ba9R.bdr6l = function(fF1x) {
        return {
            end: fF1x.selectionEnd,
            start: fF1x.selectionStart
        }
    }
    ;
    ba9R.bec6W = function() {
        var Dl8d = function(dJ0x, d8f) {
            var E9v = h8b.U9L(d8f);
            if (!E9v.value)
                a7h.w9n(E9v, dJ0x)
        };
        var Il0x = function(dJ0x, d8f) {
            a7h.y9p(h8b.U9L(d8f), dJ0x)
        };
        return function(E9v, eC0x, dJ0x) {
            if (eC0x == 1) {
                h8b.q8i(E9v, "blur", Dl8d.g8c(null, dJ0x))
            }
            if (eC0x == 1 || eC0x == -1) {
                h8b.q8i(E9v, "focus", Il0x.g8c(null, dJ0x))
            }
        }
    }();
    ba9R.bhm7f = function(G9x) {
        return (new XMLSerializer).serializeToString(G9x) || ""
    }
    ;
    ba9R.bii7b = function(yp7i) {
        var fv1x = (new DOMParser).parseFromString(yp7i, "text/xml").documentElement;
        return fv1x.nodeName == "parsererror" ? null : fv1x
    }
    ;
    ba9R.biX7Q = function(E9v) {}
    ;
    ba9R.mK3x = function(E9v) {
        return null
    }
    ;
    ba9R.bjD8v = function(E9v) {
        return null
    }
    ;
    ba9R.bjG8y = function(dG0x) {}
    ;
    ba9R.bkl8d = function() {
        var bg9X = ba9R.FX9O(arguments);
        bg9X[0] = a7h.x9o(bg9X[0]);
        if (!bg9X[0])
            return null;
        bg9X[1] = (bg9X[1] || "").toLowerCase();
        if (!bg9X[1])
            return null;
        return bg9X
    }
    ;
    ba9R.yr7k = function() {
        var uE6y = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
            , iw1x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var clp1x = function(t8l) {
            return (lf2x.evt || lf2x.pro) + t8l
        };
        return function() {
            var bg9X = ba9R.bkl8d.apply(ba9R, arguments);
            if (!bg9X)
                return;
            var VF3x = iw1x[bg9X[1]]
                , VD3x = uE6y[bg9X[1]];
            if (!!VF3x) {
                bg9X[4] = bg9X[1];
                bg9X[1] = clp1x(VF3x)
            } else if (!!VD3x) {
                var T9K = "on" + bg9X[1];
                if (!(T9K in bg9X[0])) {
                    bg9X[4] = bg9X[1];
                    bg9X[1] = VD3x
                }
            }
            return bg9X
        }
    }();
    ba9R.blQ8I = function() {
        var bg9X = arguments;
        bg9X[0].addEventListener(bg9X[1], bg9X[2], !!bg9X[3])
    }
    ;
    ba9R.VC3x = function() {
        var bg9X = arguments;
        bg9X[0].removeEventListener(bg9X[1], bg9X[2], !!bg9X[3])
    }
    ;
    ba9R.blZ8R = function(E9v, t8l, e8e) {
        var d8f = document.createEvent("Event");
        d8f.initEvent(t8l, !0, !0);
        NEJ.X(d8f, e8e);
        E9v.dispatchEvent(d8f)
    }
    ;
    ba9R.byZ1x = function() {
        var fZ1x = /\((.*?)\)/
            , jr2x = /\s*,\s*/
            , i8a = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var VB3x = function(rg4k) {
            var ie1x = {};
            if (fZ1x.test(rg4k || "")) {
                k8c.be9V(RegExp.$1.split(jr2x), function(A9r, s8k) {
                    ie1x[i8a[s8k]] = A9r || ""
                })
            }
            return ie1x
        };
        return function(rg4k) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(rg4k);
            var T9K = lf2x.clz + "CSSMatrix";
            if (!!window[T9K])
                return new window[T9K](rg4k || "");
            return VB3x(rg4k)
        }
    }();
    ba9R.bzQ1x = function() {
        var cP0x = /\{(.*?)\}/g;
        return function(T9K, bv9m) {
            bv9m = bv9m || o;
            var pD4H = bzO1x(T9K);
            return !pD4H ? "" : pD4H.replace(cP0x, function($1, $2) {
                var bs9j = $2.split("|");
                return bv9m[bs9j[0]] || bs9j[1] || "0"
            })
        }
    }();
    ba9R.bpd9U = function(E9v, T9K, A9r) {
        E9v.style[ba9R.bzR1x(T9K)] = A9r
    }
    ;
    ba9R.bzR1x = function() {
        var cP0x = /^[a-z]/
            , bqn9e = lf2x.css;
        var cmd1x = function(T9K) {
            return T9K.replace(cP0x, function($1) {
                return bqn9e + $1.toUpperCase()
            })
        };
        return function(T9K) {
            T9K = bzh1x(T9K);
            var cnv1x = ba9R.cnI1x(T9K, Mv1x);
            return cnv1x ? cmd1x(T9K) : T9K
        }
    }();
    ba9R.cnI1x = function() {
        var cP0x = /^([a-z]+?)[A-Z]/;
        return function(T9K, bv9m) {
            if (!bv9m[T9K]) {
                if (cP0x.test(T9K))
                    T9K = RegExp.$1
            }
            return !!bv9m[T9K]
        }
    }();
    ba9R.cnK1x = function() {
        var cP0x = /\$<(.*?)>/gi
            , bqn9e = "-" + lf2x.css.toLowerCase() + "-";
        return function(ju2x) {
            return ju2x.replace(cP0x, function($1, $2) {
                var eL0x = $2
                    , bs9j = eL0x.split("|")
                    , pD4H = bzO1x(bs9j[0]);
                if (!!pD4H) {
                    return ba9R.bzQ1x(bs9j[0], k8c.hi1x(bs9j[1]))
                }
                return !ba9R.bOO5T(eL0x, Mv1x) ? eL0x : bqn9e + eL0x
            })
        }
    }();
    ba9R.bOO5T = function(T9K, bv9m) {
        return !!bv9m[T9K]
    }
    ;
    ba9R.bbM6G = function(cd9U, ju2x) {
        cd9U.textContent = ju2x
    }
    ;
    ba9R.bde6Y = function(cd9U, ju2x) {
        var wr6l = cd9U.sheet
            , bo9f = wr6l.cssRules.length;
        wr6l.insertRule(ju2x, bo9f);
        return wr6l.cssRules[bo9f]
    }
    ;
    ba9R.cvX3x = function(E9v, e8e) {}
    ;
    ba9R.Vc3x = function(UW3x) {
        return (UW3x || "").toLowerCase() != "transparent"
    }
    ;
    ba9R.bPB5G = function(E9v) {}
    ;
    ba9R.bfV7O = function(E9v, T9K) {
        if (!!E9v.getAttribute)
            return E9v.getAttribute(T9K);
        return ""
    }
    ;
    ba9R.UU3x = function(fa0x) {
        a7h.cF0x(fa0x)
    }
    ;
    Kn0x()
})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , M9D = c8g("nej.p")
        , ba9R = c8g("nej.h");
    if (M9D.mq3x.trident0)
        return;
    var fX1x = +(new Date);
    R9I = {};
    ba9R.bbz6t = ba9R.bbz6t.ef0x(function(d8f) {
        d8f.stopped = !0;
        var bg9X = d8f.args
            , C9t = a7h.kp2x(bg9X[0])
            , J9A = "hover-" + C9t;
        if (!C9t || !!R9I[J9A])
            return;
        R9I[J9A] = !0;
        h8b.q8i(C9t, "mouseenter", a7h.y9p.g8c(a7h, C9t, bg9X[1]));
        h8b.q8i(C9t, "mouseleave", a7h.w9n.g8c(a7h, C9t, bg9X[1]))
    });
    ba9R.bbF6z = function() {
        var cvR3x = function() {};
        return ba9R.bbF6z.ef0x(function(d8f) {
            d8f.stopped = !0;
            var E9v = d8f.args[0]
                , C9t = "fixed-" + a7h.kp2x(E9v);
            if (!!R9I[C9t])
                return;
            var bc9T = {};
            R9I[C9t] = bc9T
        })
    }();
    ba9R.biX7Q = ba9R.biX7Q.ef0x(function(d8f) {
        d8f.stopped = !0;
        var E9v = d8f.args[0]
            , cd9U = E9v.style
            , bBQ2x = a7h.oq3x();
        cd9U.width = bBQ2x.scrollWidth + "px";
        cd9U.height = bBQ2x.scrollHeight + "px"
    });
    ba9R.mK3x = ba9R.mK3x.ef0x(function(d8f) {
        d8f.stopped = !0;
        var E9v = d8f.args[0]
            , km2x = R9I[E9v.msk];
        if (!km2x) {
            E9v.msk = fX1x++;
            km2x = a7h.cU0x("iframe");
            km2x.style.position = "absolute";
            R9I[E9v.msk] = km2x
        }
        d8f.value = km2x;
        var cd9U = km2x.style;
        cd9U.top = (parseInt(a7h.db0x(E9v, "top")) || 0) + "px";
        cd9U.left = (parseInt(a7h.db0x(E9v, "left")) || 0) + "px";
        cd9U.width = E9v.offsetWidth + "px";
        cd9U.height = E9v.offsetHeight + "px";
        E9v.insertAdjacentElement("beforeBegin", km2x)
    });
    ba9R.bjD8v = ba9R.bjD8v.ef0x(function(d8f) {
        d8f.stopped = !0;
        var km2x = R9I[d8f.args[0].msk];
        if (!!km2x)
            a7h.mc3x(km2x)
    })
})();
(function() {
    var c8g = NEJ.P
        , M9D = c8g("nej.p")
        , a7h = c8g("nej.e")
        , ba9R = c8g("nej.h");
    if (M9D.mq3x.trident1)
        return;
    ba9R.yr7k = function() {
        var uE6y = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return ba9R.yr7k.ef0x(function(d8f) {
            var bg9X = ba9R.bkl8d.apply(ba9R, d8f.args);
            if (!bg9X) {
                d8f.stopped = !0;
                return
            }
            var t8l = uE6y[bg9X[1]];
            if (!!t8l && ("on" + t8l).toLowerCase()in bg9X[0]) {
                bg9X[4] = bg9X[1];
                bg9X[1] = t8l;
                d8f.stopped = !0;
                d8f.value = bg9X
            }
        })
    }();
    ba9R.Vc3x = function(UW3x) {
        return !0
    }
    ;
    ba9R.UU3x = ba9R.UU3x.ef0x(function(d8f) {
        d8f.stopped = !0;
        var fa0x = d8f.args[0];
        a7h.X9O(fa0x, "display", "none");
        try {
            fa0x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , M9D = c8g("nej.p")
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , k8c = c8g("nej.u")
        , ba9R = c8g("nej.h")
        , bjz8r = {};
    if (M9D.mq3x.trident)
        return;
    ba9R.FX9O = ba9R.FX9O.ef0x(function(d8f) {
        d8f.stopped = !0;
        var i8a = d8f.args[0];
        if (!i8a) {
            d8f.value = null;
            return
        }
        var s8k = 0
            , m8e = [];
        while (!!i8a[s8k]) {
            m8e.push(i8a[s8k++])
        }
        d8f.value = m8e
    });
    ba9R.bmf8X = ba9R.bmf8X.ef0x(function(d8f) {
        d8f.stopped = !0;
        var bs9j = [];
        k8c.be9V(d8f.args[0].childNodes, function(f8d) {
            if (f8d.nodeType == 1)
                bs9j.push(f8d)
        });
        d8f.value = bs9j
    });
    ba9R.bnc8U = ba9R.bnc8U.ef0x(function(d8f) {
        var E9v = d8f.args[0];
        if (!!E9v.getElementsByClassName)
            return;
        d8f.stopped = !0;
        var m8e = []
            , bjF8x = new RegExp("(\\s|^)(?:" + d8f.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k8c.be9V(E9v.getElementsByTagName("*"), function(f8d) {
            if (bjF8x.test(f8d.className))
                m8e.push(f8d)
        });
        d8f.value = m8e
    });
    ba9R.bdc6W = ba9R.bdc6W.ef0x(function(d8f) {
        var fF1x = d8f.args[0]
            , mZ3x = d8f.args[1];
        if (fF1x.selectionStart == null) {
            d8f.stopped = !0;
            var cH0x = fF1x.createTextRange();
            cH0x.collapse(!0);
            cH0x.moveStart("character", mZ3x.start);
            cH0x.moveEnd("character", mZ3x.end - mZ3x.start);
            cH0x.select();
            fF1x.focus()
        }
    });
    ba9R.bdr6l = ba9R.bdr6l.ef0x(function(d8f) {
        var fF1x = d8f.args[0];
        fF1x.focus();
        if (fF1x.selectionStart == null) {
            d8f.stopped = !0;
            var bBS2x = document.selection.createRange();
            var bBU2x = fF1x.createTextRange();
            bBU2x.moveToBookmark(bBS2x.getBookmark());
            var bki8a = fF1x.createTextRange();
            bki8a.collapse(!0);
            bki8a.setEndPoint("EndToStart", bBU2x);
            var is1x = bki8a.text.length;
            d8f.value = {
                start: is1x,
                end: is1x + bBS2x.text.length
            }
        }
    });
    ba9R.bhm7f = ba9R.bhm7f.ef0x(function(d8f) {
        if (!!window.XMLSerializer)
            return;
        d8f.stopped = !0;
        var E9v = d8f.args[0];
        d8f.value = E9v.xml != null ? E9v.xml : E9v.outHTML
    });
    ba9R.bii7b = function() {
        var NY1x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bPT5Y = function() {
            try {
                for (var i = 0, l = NY1x.length; i < l; i++)
                    return new ActiveXObject(NY1x[i])
            } catch (ex) {
                return null
            }
        };
        return ba9R.bii7b.ef0x(function(d8f) {
            if (!!window.DOMParser)
                return;
            d8f.stopped = !0;
            var CL8D = bPT5Y();
            if (!!CL8D && CL8D.loadXML(d8f.args[0]) && !CL8D.parseError.errorCode)
                d8f.value = CL8D.documentElement
        })
    }();
    ba9R.yr7k = function() {
        var iw1x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iw1x)
            bjz8r[iw1x[x]] = !0;
        var bPV5a = function(E9v, t8l) {
            if ("on" + t8l in E9v)
                return null;
            return iw1x[t8l] || ""
        };
        var bPY5d = function(t8l, dc0x) {
            var dr0x = dc0x;
            switch (t8l) {
                case "readystatechange":
                    dr0x = function(d8f) {
                        var E9v = h8b.U9L(d8f) || this;
                        if (E9v.readyState == "loaded" || E9v.readyState == "complete") {
                            d8f.target = E9v;
                            dc0x.call(E9v, d8f)
                        }
                    }
                    ;
                    break;
                case "propertychange":
                    dr0x = function(d8f) {
                        var E9v = h8b.U9L(d8f) || this;
                        if ("value"in E9v && d8f.propertyName == "value") {
                            d8f.target = E9v;
                            dc0x.call(E9v, d8f)
                        }
                    }
                    ;
                    break
            }
            return dr0x
        };
        return ba9R.yr7k.ef0x(function(d8f) {
            var bg9X = ba9R.bkl8d.apply(ba9R, d8f.args);
            if (!bg9X) {
                d8f.stopped = !0;
                return
            }
            var t8l = bPV5a(bg9X[0], bg9X[1]);
            if (!!t8l) {
                d8f.stopped = !0;
                bg9X[4] = bg9X[1];
                bg9X[1] = t8l;
                if (!!bg9X[2]) {
                    bg9X[5] = bg9X[2];
                    bg9X[2] = bPY5d(bg9X[1], bg9X[2])
                }
                d8f.value = bg9X
            }
        }, function(d8f) {
            var bg9X = d8f.value;
            if (!bg9X[0] || !k8c.gf1x(bg9X[2]))
                return;
            if (!k8c.gf1x(bg9X[5]))
                bg9X[5] = bg9X[2];
            bg9X[2] = bg9X[2].g8c(bg9X[0])
        })
    }();
    ba9R.blQ8I = ba9R.blQ8I.ef0x(function(d8f) {
        var bg9X = d8f.args;
        if (!!bjz8r[bg9X[1]] || !document.addEventListener) {
            d8f.stopped = !0;
            bg9X[0].attachEvent("on" + bg9X[1], bg9X[2])
        }
    });
    ba9R.VC3x = ba9R.VC3x.ef0x(function(d8f) {
        var bg9X = d8f.args;
        if (!!bjz8r[bg9X[1]] || !document.removeEventListener) {
            d8f.stopped = !0;
            bg9X[0].detachEvent("on" + bg9X[1], bg9X[2])
        }
    });
    ba9R.blZ8R = ba9R.blZ8R.ef0x(function(d8f) {
        if (!document.createEvent) {
            d8f.stopped = !0;
            var bg9X = d8f.args
                , bBX2x = document.createEventObject();
            NEJ.X(bBX2x, bg9X[2]);
            try {
                bg9X[0].fireEvent("on" + bg9X[1], bBX2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    ba9R.bpd9U = ba9R.bpd9U.ef0x(function(d8f) {
        var bg9X = d8f.args
            , T9K = bg9X[1].toLowerCase();
        if (T9K == "opacity" && !(T9K in document.body.style)) {
            bg9X[1] = "filter";
            bg9X[2] = "alpha(opacity=" + bg9X[2] * 100 + ")"
        }
    });
    ba9R.bbM6G = function() {
        var fb0x = 30;
        return ba9R.bbM6G.ef0x(function(d8f) {
            var E9v = d8f.args[0];
            if (!E9v.styleSheet)
                return;
            d8f.stopped = !0;
            var ju2x = d8f.args[1];
            var i8a = document.styleSheets;
            if (i8a.length > fb0x) {
                E9v = i8a[fb0x];
                ju2x = E9v.cssText + ju2x
            } else {
                E9v = E9v.styleSheet
            }
            E9v.cssText = ju2x
        })
    }();
    ba9R.bde6Y = ba9R.bde6Y.ef0x(function(d8f) {
        var bg9X = d8f.args
            , wr6l = bg9X[0].sheet;
        if (!!wr6l)
            return;
        d8f.stopped = !0;
        var wr6l = bg9X[0].styleSheet
            , bo9f = wr6l.rules.length
            , bs9j = bg9X[1].split(/[\{\}]/);
        wr6l.addRule(bs9j[0], bs9j[1], bo9f);
        d8f.value = wr6l.rules[bo9f]
    });
    ba9R.bec6W = function() {
        var Dl8d = function(dJ0x, d8f) {
            a7h.w9n(h8b.U9L(d8f), dJ0x)
        };
        return ba9R.bec6W.ef0x(function(d8f) {
            if (M9D.cS0x.release >= "4.0")
                return;
            var bg9X = d8f.args;
            if (bg9X[1] != 1) {
                h8b.q8i(bg9X[0], "blur", Dl8d.g8c(null, bg9X[2]));
                bg9X[1] = -1
            }
        })
    }();
    ba9R.Vc3x = function(UW3x) {
        return !0
    }
    ;
    ba9R.bfV7O = ba9R.bfV7O.ef0x(function(d8f) {
        var bg9X = d8f.args
            , f8d = (bg9X[0].attributes || Y9P)[bg9X[1]];
        if (!!f8d) {
            d8f.stopped = !0;
            d8f.value = f8d.value
        }
    }, function(d8f) {
        var bg9X = d8f.args;
        if (bg9X[1] == "maxlength" && d8f.value == 2147483647)
            d8f.value = ""
    });
    if (M9D.cS0x.release < 5) {
        ba9R.bjG8y = function() {
            var eZ0x, fa0x, js2x = [], bnn8f = "cb-" + +(new Date), bi9Z = '<script>parent.nej.h["' + bnn8f + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCm2x = function() {
                eZ0x = window.clearTimeout(eZ0x);
                if (!js2x.length)
                    return;
                var dG0x = js2x.shift();
                try {
                    var uL6F = fa0x.contentWindow.document;
                    uL6F.open();
                    uL6F.write("<head><title>");
                    uL6F.write(document.title);
                    uL6F.write("</title>");
                    uL6F.write(bi9Z.replace("#<HASH>", encodeURIComponent(dG0x)));
                    uL6F.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        uL6F.domain = document.domain;
                    uL6F.close();
                    ba9R[bnn8f] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    js2x.unshift(dG0x)
                }
                eZ0x = window.setTimeout(bCm2x, 50)
            };
            return ba9R.bjG8y.ef0x(function(d8f) {
                d8f.stopped = !0;
                var dG0x = d8f.args[0];
                if (!!ba9R[bnn8f] || !fa0x && !dG0x)
                    return;
                js2x.push(dG0x);
                if (!fa0x)
                    fa0x = a7h.Ug3x();
                bCm2x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var c8g = NEJ.P
        , h8b = c8g("nej.v")
        , ba9R = c8g("nej.h")
        , M9D = c8g("nej.p")
        , Ub3x = M9D.btT0x;
    if (M9D.mq3x.gecko)
        return;
    var Kn0x = function() {
        Ub3x.css3d = Ub3x.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function(hW1x, E9v) {
                if (!hW1x || !E9v)
                    return;
                switch (hW1x) {
                    case "beforeEnd":
                        this.appendChild(E9v);
                        return;
                    case "beforeBegin":
                        this.parentNode.insertBefore(E9v, this);
                        return;
                    case "afterBegin":
                        !this.firstChild ? this.appendChild(E9v) : this.insertBefore(E9v, this.firstChild);
                        return;
                    case "afterEnd":
                        !this.nextSibling ? this.parentNode.appendChild(E9v) : this.parentNode.insertBefore(E9v, this.nextSibling);
                        return
                }
            }
            ;
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bi9Z) {
                this.textContent = bi9Z
            })
        }
    };
    ba9R.yr7k = function() {
        var fZ1x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return ba9R.yr7k.ef0x(function(d8f) {
            var bg9X = d8f.args;
            if (fZ1x.test(bg9X[1] || "")) {
                d8f.stopped = !0;
                d8f.value = bg9X
            }
        })
    }();
    ba9R.bPB5G = function() {
        var bRu6o = function(d8f) {
            h8b.bh9Y(d8f);
            h8b.U9L(d8f).control.click()
        };
        return function(E9v) {
            h8b.q8i(E9v, "click", bRu6o)
        }
    }();
    Kn0x()
})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , ba9R = c8g("nej.h");
    var TP3x = function() {
        var oa3x = !!document.body.classList;
        return function() {
            return oa3x
        }
    }();
    var bCE2x = function() {
        var cP0x = /\s+/g;
        return function(fj1x) {
            fj1x = (fj1x || "").trim();
            return !fj1x ? null : new RegExp("(\\s|^)(?:" + fj1x.replace(cP0x, "|") + ")(?=\\s|$)","g")
        }
    }();
    ba9R.Nb1x = ba9R.Nb1x.ef0x(function(d8f) {
        if (TP3x())
            return;
        d8f.stopped = !0;
        var bg9X = d8f.args
            , E9v = a7h.x9o(bg9X[0]);
        if (!E9v || !bg9X[1] && !bg9X[2])
            return;
        var fj1x = E9v.className || "";
        var Gl9c = " " + (bg9X[2] || "")
            , GZ0x = bCE2x((bg9X[1] || "") + Gl9c);
        !!GZ0x && (fj1x = fj1x.replace(GZ0x, "$1"));
        E9v.className = (fj1x + Gl9c).replace(/\s+/g, " ").trim()
    });
    ba9R.bnW9N = ba9R.bnW9N.ef0x(function(d8f) {
        if (TP3x())
            return;
        d8f.stopped = !0;
        var bg9X = d8f.args;
        ba9R.Nb1x(bg9X[0], "", bg9X[1])
    });
    ba9R.boP9G = ba9R.boP9G.ef0x(function(d8f) {
        if (TP3x())
            return;
        d8f.stopped = !0;
        var bg9X = d8f.args;
        ba9R.Nb1x(bg9X[0], bg9X[1], "")
    });
    ba9R.bbs6m = ba9R.bbs6m.ef0x(function(d8f) {
        if (TP3x())
            return;
        d8f.stopped = !0;
        var bg9X = d8f.args
            , E9v = a7h.x9o(bg9X[0]);
        if (!E9v) {
            d8f.value = !1;
            return
        }
        var cP0x = bCE2x(bg9X[1]);
        d8f.value = !cP0x ? !1 : cP0x.test(E9v.className || "")
    })
})();
(function() {
    var c8g = NEJ.P
        , M9D = c8g("nej.p")
        , ba9R = c8g("nej.h");
    if (M9D.mq3x.webkit)
        return;
    ba9R.Vc3x = function(UW3x) {
        return !0
    }
})();
(function() {
    var c8g = NEJ.P
        , ba9R = c8g("nej.h")
        , a7h = c8g("nej.e")
        , k8c = c8g("nej.u")
        , h8b = c8g("nej.v")
        , cL0x = c8g("nej.x")
        , R9I = {};
    var bCR2x = function(E9v) {
        E9v = a7h.x9o(E9v);
        if (!E9v || !R9I[E9v.id])
            return;
        var TM3x = !0
            , C9t = E9v.id;
        k8c.ed0x(R9I[C9t], function() {
            TM3x = !1;
            return !0
        });
        if (TM3x)
            delete R9I[C9t]
    };
    h8b.q8i = cL0x.q8i = function() {
        var bSl6f = function() {
            var bg9X = ba9R.yr7k.apply(ba9R, arguments);
            if (!bg9X || !bg9X[2])
                return;
            var sE4I = a7h.kp2x(bg9X[0])
                , nP3x = R9I[sE4I] || {};
            R9I[sE4I] = nP3x;
            sE4I = bg9X[4] || bg9X[1];
            var zU8M = nP3x[sE4I] || [];
            nP3x[sE4I] = zU8M;
            zU8M.push({
                type: bg9X[1],
                func: bg9X[2],
                capt: !!bg9X[3],
                sfun: bg9X[5] || bg9X[2]
            });
            return bg9X.slice(0, 4)
        };
        return function() {
            var bg9X = bSl6f.apply(null, arguments);
            if (!!bg9X)
                ba9R.blQ8I.apply(ba9R, bg9X);
            return this
        }
    }();
    h8b.ms3x = cL0x.ms3x = function() {
        var bSH7A = function() {
            var tZ6T = arguments
                , sE4I = a7h.kp2x(tZ6T[0])
                , nP3x = R9I[sE4I]
                , t8l = (tZ6T[1] || "").toLowerCase()
                , d8f = tZ6T[2];
            if (!nP3x || !t8l || !d8f)
                return;
            nP3x = nP3x[t8l];
            if (!nP3x)
                return;
            var bSS7L = !!tZ6T[3]
                , s8k = k8c.cV0x(nP3x, function(iw1x) {
                return d8f == iw1x.sfun && bSS7L == iw1x.capt
            });
            if (s8k < 0)
                return;
            var iw1x = nP3x.splice(s8k, 1)[0];
            return !iw1x ? null : [a7h.x9o(sE4I), iw1x.type, iw1x.func, iw1x.capt]
        };
        return function() {
            var bg9X = bSH7A.apply(null, arguments);
            if (!!bg9X) {
                ba9R.VC3x.apply(ba9R, bg9X);
                bCR2x(bg9X[0])
            }
            return this
        }
    }();
    h8b.iB2x = cL0x.iB2x = function() {
        var bDH2x = function() {
            var tZ6T = arguments
                , sE4I = a7h.kp2x(tZ6T[0])
                , nP3x = R9I[sE4I]
                , zU8M = (tZ6T[1] || "").toLowerCase();
            if (!nP3x || !zU8M)
                return;
            var E9v = a7h.x9o(sE4I);
            k8c.mu3x(nP3x[zU8M], function(iw1x, s8k, i8a) {
                ba9R.VC3x(E9v, iw1x.type, iw1x.func, iw1x.capt);
                i8a.splice(s8k, 1)
            });
            delete nP3x[zU8M]
        };
        var bUv7o = function(E9v) {
            E9v = a7h.x9o(E9v);
            if (!E9v)
                return;
            var C9t = E9v.id;
            k8c.ed0x(R9I[C9t], function(i8a, t8l) {
                bDH2x(C9t, t8l)
            });
            delete R9I[C9t]
        };
        return function(E9v, t8l) {
            !t8l ? bUv7o(E9v) : bDH2x(E9v, t8l);
            bCR2x(E9v);
            return this
        }
    }();
    h8b.U9L = function() {
        var bfr6l;
        var IB0x = function(T9K, E9v) {
            var bs9j = T9K.split(":");
            if (bs9j.length > 1) {
                if (!bfr6l)
                    bfr6l = {
                        c: a7h.by9p,
                        d: a7h.u8m,
                        a: a7h.gl1x
                    };
                var IK0x = bfr6l[bs9j[0]];
                if (!!IK0x)
                    return !!IK0x(E9v, bs9j[1]);
                T9K = bs9j[1]
            }
            return !!a7h.gl1x(E9v, T9K) || !!a7h.u8m(E9v, T9K) || a7h.by9p(E9v, T9K)
        };
        return function(d8f) {
            if (!d8f)
                return null;
            var E9v = d8f.target || d8f.srcElement
                , dE0x = arguments[1];
            if (!dE0x)
                return E9v;
            if (k8c.fe1x(dE0x))
                dE0x = IB0x.g8c(null, dE0x);
            if (k8c.gf1x(dE0x)) {
                while (E9v) {
                    if (!!dE0x(E9v))
                        return E9v;
                    E9v = E9v.parentNode
                }
                return null
            }
            return E9v
        }
    }();
    h8b.bh9Y = function(d8f) {
        h8b.rD4H(d8f);
        h8b.ce9V(d8f);
        return this
    }
    ;
    h8b.rD4H = function(d8f) {
        if (!!d8f) {
            !!d8f.stopPropagation ? d8f.stopPropagation() : d8f.cancelBubble = !0
        }
        return this
    }
    ;
    h8b.ce9V = function(d8f) {
        if (!!d8f) {
            !!d8f.preventDefault ? d8f.preventDefault() : d8f.returnValue = !1
        }
        return this
    }
    ;
    h8b.cvq3x = function() {
        var oW3x = !1;
        var bUz7s = function() {
            if (oW3x)
                return;
            oW3x = !0;
            h8b.q8i(document, "click", bUJ7C, !0)
        };
        var bUJ7C = function(d8f) {
            var E9v = h8b.U9L(d8f)
                , bUO7H = a7h.u8m(E9v, "stopped");
            if (bUO7H == "true") {
                h8b.bh9Y(d8f);
                a7h.u8m(E9v, "stopped", "false")
            }
        };
        return function(d8f) {
            if (!d8f)
                return;
            if (d8f.type == "click") {
                h8b.bh9Y(d8f);
                return
            }
            bUz7s();
            a7h.u8m(h8b.U9L(d8f), "stopped", "true")
        }
    }();
    h8b.kv2x = function(d8f) {
        return d8f.pageX != null ? d8f.pageX : d8f.clientX + a7h.oq3x().scrollLeft
    }
    ;
    h8b.nO3x = function(d8f) {
        return d8f.pageY != null ? d8f.pageY : d8f.clientY + a7h.oq3x().scrollTop
    }
    ;
    h8b.z9q = cL0x.z9q = function(E9v, t8l, e8e) {
        var bg9X = ba9R.yr7k(E9v, t8l);
        if (!!bg9X)
            ba9R.blZ8R(bg9X[0], bg9X[1], e8e);
        return this
    }
    ;
    c8g("dbg").dumpEV = function() {
        return R9I
    }
    ;
    cL0x.isChange = !0
})();
(function() {
    var o = !0
        , w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify
                        , b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                                return 1
                            }
                        ).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) {}
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) {}
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }
        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify,
            k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor
                    , J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                    , z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty))
                p = function(a) {
                    var f = {}, c;
                    if ((f.__proto__ = w,
                            f.__proto__ = {
                                toString: 1
                            },
                            f).toString != m)
                        p = function(a) {
                            var f = this.__proto__
                                , a = a in (this.__proto__ = w,
                                this);
                            this.__proto__ = f;
                            return a
                        }
                        ;
                    else {
                        c = f.constructor;
                        p = function(a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                }
                ;
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0, b, h, n;
                (b = function() {
                        this.valueOf = 0
                    }
                ).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function(a, f) {
                            var c = {}, b = m.call(a) == "[object Function]", d;
                            for (d in a)
                                !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                        }
                        : function(a, f) {
                            var c = m.call(a) == "[object Function]", b, d;
                            for (b in a)
                                !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                            (d || p.call(a, b = "constructor")) && f(b)
                        }
                    ;
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b))
                            ;
                    }
                }
                c(a, f)
            }
            ;
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                    , u = function(a, f) {
                    return ("000000" + (f || 0)).slice(-a)
                }
                    , G = function(a) {
                    var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                f = f + L[e];
                                break;
                            default:
                                if (e < 32) {
                                    f = f + ("\\u00" + u(2, e.toString(16)));
                                    break
                                }
                                f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }
                    , E = function(a, b, c, d, h, n, e) {
                    var g = b[a], i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON"))
                            if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++)
                                        ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++)
                                        ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else
                                g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                            g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w)
                        return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]")
                        return "" + g;
                    if (i == "[object Number]")
                        return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]")
                        return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--; )
                            if (e[a] === g)
                                throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o),
                                j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++],
                            (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1))
                                ;
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ")
                                    ;
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {},
                        i[""] = a,
                        i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, b, A, j = function() {
                    b = A = w;
                    throw SyntaxError()
                }, q = function() {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
                        e = a.charCodeAt(b);
                        switch (e) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                c = s ? a.charAt(b) : a[b];
                                b++;
                                return c;
                            case 34:
                                c = "@";
                                for (b++; b < f; ) {
                                    e = a.charCodeAt(b);
                                    if (e < 32)
                                        j();
                                    else if (e == 92) {
                                        e = a.charCodeAt(++b);
                                        switch (e) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                c = c + N[e];
                                                b++;
                                                break;
                                            case 117:
                                                d = ++b;
                                                for (h = b + 4; b < h; b++) {
                                                    e = a.charCodeAt(b);
                                                    e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                }
                                                c = c + M("0x" + a.slice(d, b));
                                                break;
                                            default:
                                                j()
                                        }
                                    } else {
                                        if (e == 34)
                                            break;
                                        e = a.charCodeAt(b);
                                        for (d = b; e >= 32 && e != 92 && e != 34; )
                                            e = a.charCodeAt(++b);
                                        c = c + a.slice(d, b)
                                    }
                                }
                                if (a.charCodeAt(b) == 34) {
                                    b++;
                                    return c
                                }
                                j();
                            default:
                                d = b;
                                if (e == 45) {
                                    k = o;
                                    e = a.charCodeAt(++b)
                                }
                                if (e >= 48 && e <= 57) {
                                    for (e == 48 && (e = a.charCodeAt(b + 1),
                                    e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b),
                                    e >= 48 && e <= 57); b++)
                                        ;
                                    if (a.charCodeAt(b) == 46) {
                                        for (h = ++b; h < f && (e = a.charCodeAt(h),
                                        e >= 48 && e <= 57); h++)
                                            ;
                                        h == b && j();
                                        b = h
                                    }
                                    e = a.charCodeAt(b);
                                    if (e == 101 || e == 69) {
                                        e = a.charCodeAt(++b);
                                        (e == 43 || e == 45) && b++;
                                        for (h = b; h < f && (e = a.charCodeAt(h),
                                        e >= 48 && e <= 57); h++)
                                            ;
                                        h == b && j();
                                        b = h
                                    }
                                    return +a.slice(d, b)
                                }
                                k && j();
                                if (a.slice(b, b + 4) == "true") {
                                    b = b + 4;
                                    return o
                                }
                                if (a.slice(b, b + 5) == "false") {
                                    b = b + 5;
                                    return false
                                }
                                if (a.slice(b, b + 4) == "null") {
                                    b = b + 4;
                                    return w
                                }
                                j()
                        }
                    }
                    return "$"
                }, F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")
                            return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else
                                        j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else
                                        j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function(a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)
                        if (m.call(d) == "[object Array]")
                            for (h = d.length; h--; )
                                I(d, h, c);
                        else
                            C(d, function(a) {
                                I(d, a, c)
                            });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                        d[""] = c,
                        d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var c8g = NEJ.P
        , M9D = c8g("nej.p");
    if (M9D.mq3x.trident0)
        return;
    JSON.parse = JSON.parse.ef0x(function(d8f) {
        var cM0x = d8f.args[0] || "";
        if (cM0x.length >= 5e5) {
            d8f.stopped = !0;
            d8f.value = eval("(" + cM0x + ")")
        }
    })
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, dO0x = c8g("nej.g"), a7h = c8g("nej.e"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), ba9R = c8g("nej.h"), cL0x = c8g("nej.x"), EH9y, bjS8K = {}, R9I = document.createDocumentFragment();
    a7h.kp2x = cL0x.kp2x = function(E9v) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return;
        var C9t = !!E9v.id ? E9v.id : "auto-id-" + k8c.Sl3x(16);
        E9v.id = C9t;
        if (a7h.x9o(C9t) != E9v)
            bjS8K[C9t] = E9v;
        return C9t
    }
    ;
    a7h.x9o = cL0x.x9o = function(E9v) {
        var f8d = bjS8K["" + E9v];
        if (!!f8d)
            return f8d;
        if (!k8c.fe1x(E9v) && !k8c.uU6O(E9v))
            return E9v;
        return document.getElementById(E9v)
    }
    ;
    a7h.cQ0x = cL0x.cQ0x = function(E9v, dJ0x) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return null;
        var i8a = ba9R.bmf8X(E9v);
        if (!!dJ0x)
            k8c.mu3x(i8a, function(f8d, s8k) {
                if (!a7h.by9p(f8d, dJ0x))
                    i8a.splice(s8k, 1)
            });
        return i8a
    }
    ;
    a7h.I9z = cL0x.I9z = function(E9v, fj1x) {
        E9v = a7h.x9o(E9v);
        return !E9v ? null : ba9R.bnc8U(E9v, fj1x.trim())
    }
    ;
    a7h.bEo2x = cL0x.bEo2x = function(E9v) {
        E9v = a7h.x9o(E9v);
        if (!!E9v) {
            E9v = E9v.parentNode;
            while (!!E9v) {
                if (E9v.scrollHeight > E9v.clientHeight)
                    break;
                E9v = E9v.parentNode
            }
            if (!!E9v)
                return E9v
        }
        var nP3x = document.body.scrollHeight
            , zU8M = document.documentElement.scrollHeight;
        return zU8M >= nP3x ? document.documentElement : document.body
    }
    ;
    a7h.oq3x = function() {
        var bEp2x = function(i8a) {
            var m8e = 0;
            k8c.be9V(i8a, function(gk1x) {
                if (!gk1x)
                    return;
                if (!m8e) {
                    m8e = gk1x
                } else {
                    m8e = Math.min(m8e, gk1x)
                }
            });
            return m8e
        };
        return function(uL6F) {
            var Gp9g = uL6F || document
                , zK7D = Gp9g.body
                , zO8G = Gp9g.documentElement
                , m8e = {
                scrollTop: Math.max(zK7D.scrollTop, zO8G.scrollTop),
                scrollLeft: Math.max(zK7D.scrollLeft, zO8G.scrollLeft),
                clientWidth: bEp2x([zK7D.clientWidth, zK7D.offsetWidth, zO8G.clientWidth, zO8G.offsetWidth]),
                clientHeight: bEp2x([zK7D.clientHeight, zK7D.offsetHeight, zO8G.clientHeight, zO8G.offsetHeight])
            };
            m8e.scrollWidth = Math.max(m8e.clientWidth, zK7D.scrollWidth, zO8G.scrollWidth);
            m8e.scrollHeight = Math.max(m8e.clientHeight, zK7D.scrollHeight, zO8G.scrollHeight);
            return m8e
        }
    }();
    a7h.cvj3x = function(fb0x, nN3x) {
        var m8e = NEJ.X({}, nN3x)
            , bEr2x = fb0x.width / fb0x.height
            , bad5i = nN3x.width / nN3x.height;
        if (bEr2x > bad5i && nN3x.height > fb0x.height) {
            m8e.height = fb0x.height;
            m8e.width = m8e.height * bad5i
        }
        if (bEr2x < bad5i && nN3x.width > fb0x.width) {
            m8e.width = fb0x.width;
            m8e.height = m8e.width / bad5i
        }
        return m8e
    }
    ;
    a7h.cvh3x = function() {
        var cP0x = /\s+/;
        var tP5U = {
            left: function() {
                return 0
            },
            center: function(gK1x, nN3x) {
                return (gK1x.width - nN3x.width) / 2
            },
            right: function(gK1x, nN3x) {
                return gK1x.width - nN3x.width
            },
            top: function() {
                return 0
            },
            middle: function(gK1x, nN3x) {
                return (gK1x.height - nN3x.height) / 2
            },
            bottom: function(gK1x, nN3x) {
                return gK1x.height - nN3x.height
            }
        };
        return function(gK1x, nN3x, mJ3x) {
            var m8e = {}
                , bs9j = (mJ3x || "").split(cP0x)
                , gi1x = tP5U[bs9j[1]] || tP5U.middle
                , gI1x = tP5U[bs9j[0]] || tP5U.center;
            m8e.top = gi1x(gK1x, nN3x);
            m8e.left = gI1x(gK1x, nN3x);
            return m8e
        }
    }();
    a7h.rh4l = cL0x.rh4l = function(E9v, dJ0x) {
        ba9R.bbz6t(E9v, dJ0x || a7h.u8m(E9v, "hover") || "js-hover");
        return this
    }
    ;
    a7h.GV0x = cL0x.GV0x = function(E9v) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return;
        ba9R.bbF6z(E9v)
    }
    ;
    a7h.bVj7c = cL0x.bVj7c = function() {
        var R9I = {}
            , bEw2x = 2;
        var bVn7g = function(C9t, dJ0x, d8f) {
            R9I[C9t] = [h8b.kv2x(d8f), h8b.nO3x(d8f)];
            a7h.y9p(C9t, dJ0x)
        };
        var bVE7x = function(C9t, dJ0x, d8f) {
            var bE9v = R9I[C9t];
            if (!k8c.el0x(bE9v))
                return;
            var bVK7D = Math.abs(h8b.kv2x(d8f) - bE9v[0])
                , bWo7h = Math.abs(h8b.nO3x(d8f) - bE9v[1]);
            if (bVK7D > bEw2x || bWo7h > bEw2x)
                bbg5l(C9t, dJ0x)
        };
        var bbg5l = function(C9t, dJ0x) {
            if (k8c.el0x(R9I[C9t])) {
                R9I[C9t] = -1;
                a7h.w9n(C9t, dJ0x)
            }
        };
        return function(E9v, dJ0x) {
            var C9t = a7h.kp2x(E9v);
            if (!C9t || R9I[C9t] != null)
                return;
            R9I[C9t] = -1;
            dJ0x = dJ0x || a7h.u8m(C9t, "highlight") || "js-highlight";
            h8b.q8i(C9t, "touchstart", bVn7g.g8c(null, C9t, dJ0x));
            h8b.q8i(document, "touchmove", bVE7x.g8c(null, C9t, dJ0x));
            h8b.q8i(document, "touchend", bbg5l.g8c(null, C9t, dJ0x));
            h8b.q8i(document, "touchcancel", bbg5l.g8c(null, C9t, dJ0x))
        }
    }();
    a7h.Ak8c = cL0x.Ak8c = function() {
        var bXR8J = function(C9t, dJ0x, bXS8K) {
            var E9v = a7h.x9o(C9t)
                , d8f = {
                clazz: dJ0x,
                target: E9v
            };
            if (a7h.by9p(E9v, dJ0x)) {
                d8f.toggled = !1;
                a7h.w9n(E9v, dJ0x)
            } else {
                d8f.toggled = !0;
                a7h.y9p(E9v, dJ0x)
            }
            bXS8K.call(null, d8f)
        };
        return function(E9v, e8e) {
            E9v = a7h.x9o(E9v);
            if (!!E9v) {
                var ie1x = {
                    ontoggle: bm9d,
                    clazz: "js-toggle",
                    element: E9v.parentNode
                };
                if (k8c.fe1x(e8e)) {
                    var f8d = a7h.x9o(e8e);
                    !!f8d ? ie1x.element = f8d : ie1x.clazz = e8e
                } else {
                    NEJ.EX(ie1x, e8e);
                    ie1x.element = a7h.x9o(ie1x.element)
                }
                var C9t = a7h.kp2x(ie1x.element);
                h8b.q8i(E9v, "click", bXR8J.g8c(null, C9t, ie1x.clazz, ie1x.ontoggle || bm9d))
            }
            return this
        }
    }();
    a7h.lU2x = cL0x.lU2x = function(E9v, e8e) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return;
        var eC0x = 0
            , dJ0x = "js-focus";
        if (k8c.uU6O(e8e)) {
            eC0x = e8e
        } else if (k8c.fe1x(e8e)) {
            dJ0x = e8e
        } else if (k8c.kg2x(e8e)) {
            eC0x = e8e.mode || eC0x;
            dJ0x = e8e.clazz || dJ0x
        }
        var A9r = parseInt(a7h.u8m(E9v, "mode"));
        if (!isNaN(A9r))
            eC0x = A9r;
        A9r = a7h.u8m(E9v, "focus");
        if (!!A9r)
            dJ0x = A9r;
        ba9R.bec6W(E9v, eC0x, dJ0x);
        return this
    }
    ;
    a7h.cU0x = function() {
        var bv9m = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(eV0x, fj1x, bA9r) {
            var E9v = document.createElement(eV0x);
            NEJ.X(E9v, bv9m[eV0x.toLowerCase()]);
            if (!!fj1x)
                E9v.className = fj1x;
            bA9r = a7h.x9o(bA9r);
            if (!!bA9r)
                bA9r.appendChild(E9v);
            return E9v
        }
    }();
    a7h.Ug3x = function() {
        var caM8E = function() {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cbw9n = function(T9K) {
            T9K = T9K.trim();
            if (!T9K)
                return a7h.cU0x("iframe");
            var fa0x;
            try {
                fa0x = document.createElement('<iframe name="' + T9K + '"></iframe>');
                fa0x.frameBorder = 0
            } catch (e) {
                fa0x = a7h.cU0x("iframe");
                fa0x.name = T9K
            }
            return fa0x
        };
        return function(e8e) {
            e8e = e8e || Y9P;
            var fa0x = cbw9n(e8e.name || "");
            if (!e8e.visible)
                fa0x.style.display = "none";
            if (k8c.gf1x(e8e.onload))
                h8b.q8i(fa0x, "load", function(d8f) {
                    if (!fa0x.src)
                        return;
                    h8b.iB2x(fa0x, "load");
                    e8e.onload(d8f)
                });
            var bA9r = e8e.parent;
            if (k8c.gf1x(bA9r)) {
                try {
                    bA9r(fa0x)
                } catch (e) {}
            } else {
                (a7h.x9o(bA9r) || document.body).appendChild(fa0x)
            }
            var dv0x = e8e.src || caM8E();
            window.setTimeout(function() {
                fa0x.src = dv0x
            }, 0);
            return fa0x
        }
    }();
    a7h.cF0x = cL0x.cF0x = function() {
        var bHu3x = function(QY2x) {
            QY2x.src = dO0x.bpj9a
        };
        var bHz3x = function(ua6U) {
            ua6U.src = "about:blank"
        };
        return function(E9v, cdh9Y) {
            E9v = a7h.x9o(E9v);
            if (!E9v)
                return this;
            if (!cdh9Y)
                h8b.iB2x(E9v);
            delete bjS8K[E9v.id];
            var eV0x = E9v.tagName;
            if (eV0x == "IFRAME") {
                bHz3x(E9v)
            } else if (eV0x == "IMG") {
                bHu3x(E9v)
            } else if (!!E9v.getElementsByTagName) {
                k8c.be9V(E9v.getElementsByTagName("img"), bHu3x);
                k8c.be9V(E9v.getElementsByTagName("iframe"), bHz3x)
            }
            if (!!E9v.parentNode) {
                E9v.parentNode.removeChild(E9v)
            }
            return this
        }
    }();
    a7h.mc3x = cL0x.mc3x = function(E9v) {
        E9v = a7h.x9o(E9v);
        if (!!E9v)
            R9I.appendChild(E9v);
        return this
    }
    ;
    a7h.bHS3x = cL0x.bHS3x = function(E9v) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return;
        k8c.mu3x(E9v.childNodes, function(f8d) {
            a7h.cF0x(f8d)
        })
    }
    ;
    a7h.EV9M = cL0x.EV9M = function() {
        var dJ0x, fZ1x = /\s+/;
        var cfe9V = function() {
            if (!!dJ0x)
                return;
            dJ0x = a7h.rO4S(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a7h.bIU3x()
        };
        return function(E9v, e8e) {
            E9v = a7h.x9o(E9v);
            if (!E9v)
                return;
            cfe9V();
            e8e = e8e || Y9P;
            var bA9r = E9v.parentNode;
            if (!a7h.by9p(bA9r, dJ0x)) {
                bA9r = a7h.cU0x("span", dJ0x);
                E9v.insertAdjacentElement("beforeBegin", bA9r);
                bA9r.appendChild(E9v)
            }
            var bIW3x = e8e.nid || ""
                , f8d = a7h.I9z(bA9r, bIW3x || dJ0x + "-show")[0];
            if (!f8d) {
                var dD0x = ((e8e.clazz || "") + " " + bIW3x).trim();
                dD0x = dJ0x + "-show" + (!dD0x ? "" : " ") + dD0x;
                f8d = a7h.cU0x(e8e.tag || "span", dD0x);
                bA9r.appendChild(f8d)
            }
            var dD0x = e8e.clazz;
            if (!!dD0x) {
                dD0x = (dD0x || "").trim().split(fZ1x)[0] + "-parent";
                a7h.y9p(bA9r, dD0x)
            }
            return f8d
        }
    }();
    a7h.u8m = cL0x.u8m = function() {
        var bgq7j = {}
            , eV0x = "data-"
            , cP0x = /\-(.{1})/gi;
        var Be8W = function(E9v) {
            var C9t = a7h.kp2x(E9v);
            if (!!bgq7j[C9t])
                return;
            var bv9m = {};
            k8c.be9V(E9v.attributes, function(f8d) {
                var J9A = f8d.nodeName;
                if (J9A.indexOf(eV0x) != 0)
                    return;
                J9A = J9A.replace(eV0x, "").replace(cP0x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bv9m[J9A] = f8d.nodeValue || ""
            });
            bgq7j[C9t] = bv9m
        };
        return function(E9v, J9A, A9r) {
            E9v = a7h.x9o(E9v);
            if (!E9v)
                return null;
            var Ta3x = E9v.dataset;
            if (!Ta3x) {
                Be8W(E9v);
                Ta3x = bgq7j[E9v.id]
            }
            if (A9r !== undefined)
                Ta3x[J9A] = A9r;
            return Ta3x[J9A]
        }
    }();
    a7h.gl1x = cL0x.gl1x = function(E9v, T9K, A9r) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return "";
        if (A9r !== undefined && !!E9v.setAttribute)
            E9v.setAttribute(T9K, A9r);
        return ba9R.bfV7O(E9v, T9K)
    }
    ;
    a7h.mT3x = function(ds0x) {
        var qM4Q = document.createElement("div");
        qM4Q.innerHTML = ds0x;
        var i8a = a7h.cQ0x(qM4Q);
        return i8a.length > 1 ? qM4Q : i8a[0]
    }
    ;
    a7h.cgp0x = cL0x.cgp0x = function(E9v) {
        E9v = a7h.x9o(E9v);
        return !E9v ? "" : ba9R.bhm7f(E9v)
    }
    ;
    a7h.bIZ3x = function(yp7i) {
        yp7i = (yp7i || "").trim();
        return !yp7i ? null : ba9R.bii7b(yp7i)
    }
    ;
    a7h.cgK0x = function(da0x, t8l) {
        da0x = da0x || "";
        switch (t8l) {
            case "xml":
                da0x = a7h.bIZ3x(da0x);
                break;
            case "json":
                try {
                    da0x = JSON.parse(da0x)
                } catch (ex) {
                    da0x = null
                }
                break
        }
        return da0x
    }
    ;
    a7h.hL1x = cL0x.hL1x = function() {
        var cgN0x = function(E9v) {
            return E9v == document.body || E9v == document.documentElement
        };
        return function(dK0x, nK3x) {
            dK0x = a7h.x9o(dK0x);
            if (!dK0x)
                return null;
            nK3x = a7h.x9o(nK3x) || null;
            var m8e = {
                x: 0,
                y: 0
            }, bjx7q, dh0x, To3x;
            while (!!dK0x && dK0x != nK3x) {
                bjx7q = cgN0x(dK0x);
                dh0x = bjx7q ? 0 : dK0x.scrollLeft;
                To3x = parseInt(a7h.db0x(dK0x, "borderLeftWidth")) || 0;
                m8e.x += dK0x.offsetLeft + To3x - dh0x;
                dh0x = bjx7q ? 0 : dK0x.scrollTop;
                To3x = parseInt(a7h.db0x(dK0x, "borderTopWidth")) || 0;
                m8e.y += dK0x.offsetTop + To3x - dh0x;
                dK0x = dK0x.offsetParent
            }
            return m8e
        }
    }();
    a7h.mR3x = cL0x.mR3x = function(E9v) {
        var bj9a = a7h.hL1x(E9v);
        window.scrollTo(bj9a.x, bj9a.y);
        return this
    }
    ;
    a7h.cua3x = function(rg4k) {
        rg4k = (rg4k || "").trim();
        return ba9R.byZ1x(rg4k)
    }
    ;
    a7h.chg0x = cL0x.chg0x = function(E9v, T9K, bv9m) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return this;
        var A9r = ba9R.bzQ1x(T9K, bv9m);
        if (!A9r)
            return this;
        a7h.X9O(E9v, "transform", A9r);
        return this
    }
    ;
    a7h.fz1x = cL0x.fz1x = function(E9v, bv9m) {
        E9v = a7h.x9o(E9v);
        if (!!E9v)
            k8c.ed0x(bv9m, function(A9r, T9K) {
                a7h.X9O(E9v, T9K, A9r)
            });
        return this
    }
    ;
    a7h.chy0x = cL0x.chy0x = function(fF1x, e8e) {
        fF1x = a7h.x9o(fF1x);
        if (!fF1x)
            return {
                start: 0,
                end: 0
            };
        if (k8c.uU6O(e8e))
            e8e = {
                start: e8e,
                end: e8e
            };
        if (e8e != null) {
            if (e8e.end == null)
                e8e.end = e8e.start || 0;
            ba9R.bdc6W(fF1x, e8e)
        } else {
            e8e = ba9R.bdr6l(fF1x)
        }
        return e8e
    }
    ;
    a7h.X9O = cL0x.X9O = function(E9v, T9K, A9r) {
        E9v = a7h.x9o(E9v);
        if (!!E9v)
            ba9R.bpd9U(E9v, T9K, A9r);
        return this
    }
    ;
    a7h.db0x = cL0x.db0x = function(E9v, T9K) {
        E9v = a7h.x9o(E9v);
        if (!E9v)
            return "";
        var gn1x = !window.getComputedStyle ? E9v.currentStyle || Y9P : window.getComputedStyle(E9v, null);
        return gn1x[ba9R.bzR1x(T9K)] || ""
    }
    ;
    a7h.bJA4E = function() {
        var cP0x = /[\s\r\n]+/gi;
        return function(cd9U) {
            cd9U = (cd9U || "").trim().replace(cP0x, " ");
            if (!cd9U)
                return;
            var f8d = a7h.cU0x("style");
            document.head.appendChild(f8d);
            ba9R.bbM6G(f8d, ba9R.cnK1x(cd9U));
            return f8d
        }
    }();
    a7h.bJB4F = function(xo7h) {
        try {
            xo7h = xo7h.trim();
            if (!!xo7h)
                return (new Function(xo7h))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
    ;
    a7h.rO4S = function() {
        var cP0x = /#<.*?>/g
            , fX1x = +(new Date);
        return function(ju2x) {
            if (!EH9y)
                EH9y = [];
            var fj1x = "auto-" + fX1x++;
            EH9y.push(ju2x.replace(cP0x, fj1x));
            return fj1x
        }
    }();
    a7h.bIU3x = function() {
        if (!!EH9y) {
            a7h.bJA4E(EH9y.join(""));
            EH9y = null
        }
        return this
    }
    ;
    a7h.ctV3x = function(cd9U, ju2x) {
        cd9U = a7h.x9o(cd9U);
        return !cd9U ? null : ba9R.bde6Y(cd9U, ju2x)
    }
    ;
    a7h.y9p = cL0x.y9p = function() {
        ba9R.bnW9N.apply(ba9R, arguments);
        return this
    }
    ;
    a7h.w9n = cL0x.w9n = function() {
        ba9R.boP9G.apply(ba9R, arguments);
        return this
    }
    ;
    a7h.ev0x = cL0x.ev0x = function() {
        ba9R.Nb1x.apply(ba9R, arguments);
        return this
    }
    ;
    a7h.by9p = cL0x.by9p = function() {
        return ba9R.bbs6m.apply(ba9R, arguments)
    }
    ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    cL0x.isChange = !0
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , eU0x = NEJ.R
        , bm9d = NEJ.F
        , a7h = c8g("nej.e")
        , ba9R = c8g("nej.h")
        , k8c = c8g("nej.u");
    var AL8D = function(j8b, t8l) {
        try {
            t8l = t8l.toLowerCase();
            if (j8b === null)
                return t8l == "null";
            if (j8b === undefined)
                return t8l == "undefined";
            return Y9P.toString.call(j8b).toLowerCase() == "[object " + t8l + "]"
        } catch (e) {
            return !1
        }
    };
    k8c.gf1x = function(j8b) {
        return AL8D(j8b, "function")
    }
    ;
    k8c.fe1x = function(j8b) {
        return AL8D(j8b, "string")
    }
    ;
    k8c.uU6O = function(j8b) {
        return AL8D(j8b, "number")
    }
    ;
    k8c.ctU3x = function(j8b) {
        return AL8D(j8b, "boolean")
    }
    ;
    k8c.Iq0x = function(j8b) {
        return AL8D(j8b, "date")
    }
    ;
    k8c.el0x = function(j8b) {
        return AL8D(j8b, "array")
    }
    ;
    k8c.kg2x = function(j8b) {
        return AL8D(j8b, "object")
    }
    ;
    k8c.fi1x = function() {
        var cP0x = /[^\x00-\xfff]/g;
        return function(bi9Z) {
            return ("" + (bi9Z || "")).replace(cP0x, "**").length
        }
    }();
    k8c.cV0x = function(i8a, r8j) {
        var dE0x = k8c.gf1x(r8j) ? r8j : function(A9r) {
            return A9r === r8j
        }
            , s8k = k8c.ed0x(i8a, dE0x);
        return s8k != null ? s8k : -1
    }
    ;
    k8c.ctN3x = function() {
        var bKv4z;
        var Oh1x = function(i8a, nH3x, nG3x) {
            if (nH3x > nG3x)
                return -1;
            var AI8A = Math.ceil((nH3x + nG3x) / 2)
                , m8e = bKv4z(i8a[AI8A], AI8A, i8a);
            if (m8e == 0)
                return AI8A;
            if (m8e < 0)
                return Oh1x(i8a, nH3x, AI8A - 1);
            return Oh1x(i8a, AI8A + 1, nG3x)
        };
        return function(i8a, IK0x) {
            bKv4z = IK0x || bm9d;
            return Oh1x(i8a, 0, i8a.length - 1)
        }
    }();
    k8c.mu3x = function(i8a, dr0x, ig1x) {
        if (!i8a || !i8a.length || !k8c.gf1x(dr0x))
            return null;
        for (var i = i8a.length - 1; i >= 0; i--)
            if (!!dr0x.call(ig1x, i8a[i], i, i8a))
                return i;
        return null
    }
    ;
    k8c.be9V = function(i8a, dr0x, ig1x) {
        if (!i8a || !i8a.length || !k8c.gf1x(dr0x))
            return this;
        if (!!i8a.forEach) {
            i8a.forEach(dr0x, ig1x);
            return this
        }
        for (var i = 0, l = i8a.length; i < l; i++)
            dr0x.call(ig1x, i8a[i], i, i8a);
        return this
    }
    ;
    k8c.ed0x = function(i8a, dr0x, ig1x) {
        if (!i8a || !k8c.gf1x(dr0x))
            return null;
        if (i8a.length != null) {
            if (i8a.length > 0)
                for (var i = 0, l = i8a.length; i < l; i++)
                    if (!!dr0x.call(ig1x, i8a[i], i, i8a))
                        return i
        }
        if (k8c.kg2x(i8a)) {
            for (var x in i8a)
                if (i8a.hasOwnProperty(x) && !!dr0x.call(ig1x, i8a[x], x, i8a))
                    return x
        }
        return null
    }
    ;
    k8c.ckt1x = function(if1x, ckH1x, e8e) {
        if1x = if1x || [];
        e8e = e8e || Y9P;
        var bLT4X = !!e8e.union
            , uz6t = !!e8e.begin
            , VR4V = e8e.compare
            , cox2x = bLT4X && uz6t ? k8c.mu3x : k8c.be9V;
        cox2x(ckH1x, function(r8j) {
            if (!!VR4V)
                VR4V = VR4V.dW0x(r8j);
            var s8k = k8c.cV0x(if1x, VR4V || r8j);
            if (s8k >= 0)
                if1x.splice(s8k, 1);
            if (bLT4X)
                if1x[uz6t ? "unshift" : "push"](r8j)
        });
        return if1x
    }
    ;
    k8c.Bh8Z = function(bv9m, bi9Z) {
        if (!bv9m || !bi9Z || !bi9Z.replace)
            return bi9Z || "";
        return bi9Z.replace(bv9m.r, function($1) {
            var m8e = bv9m[!bv9m.i ? $1.toLowerCase() : $1];
            return m8e != null ? m8e : $1
        })
    }
    ;
    k8c.dM0x = function() {
        var bv9m = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bi9Z) {
            return k8c.Bh8Z(bv9m, bi9Z)
        }
    }();
    k8c.Nn1x = function() {
        var bv9m = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bi9Z) {
            return k8c.Bh8Z(bv9m, bi9Z)
        }
    }();
    k8c.iS2x = function() {
        var bv9m = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
            , cpc2x = ["上午", "下午"]
            , cqn2x = ["A.M.", "P.M."]
            , bbm5r = ["日", "一", "二", "三", "四", "五", "六"]
            , cqY2x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
            , csA3x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Mf1x = function(fq1x) {
            fq1x = parseInt(fq1x) || 0;
            return (fq1x < 10 ? "0" : "") + fq1x
        };
        var csD3x = function(oM3x) {
            return oM3x < 12 ? 0 : 1
        };
        return function(bB9s, Gc9T, cte3x) {
            if (!bB9s || !Gc9T)
                return "";
            bB9s = k8c.Xf4j(bB9s);
            bv9m.yyyy = bB9s.getFullYear();
            bv9m.yy = ("" + bv9m.yyyy).substr(2);
            bv9m.M = bB9s.getMonth() + 1;
            bv9m.MM = Mf1x(bv9m.M);
            bv9m.eM = csA3x[bv9m.M - 1];
            bv9m.cM = cqY2x[bv9m.M - 1];
            bv9m.d = bB9s.getDate();
            bv9m.dd = Mf1x(bv9m.d);
            bv9m.H = bB9s.getHours();
            bv9m.HH = Mf1x(bv9m.H);
            bv9m.m = bB9s.getMinutes();
            bv9m.mm = Mf1x(bv9m.m);
            bv9m.s = bB9s.getSeconds();
            bv9m.ss = Mf1x(bv9m.s);
            bv9m.ms = bB9s.getMilliseconds();
            bv9m.w = bbm5r[bB9s.getDay()];
            var bNA4E = csD3x(bv9m.H);
            bv9m.ct = cpc2x[bNA4E];
            bv9m.et = cqn2x[bNA4E];
            if (!!cte3x) {
                bv9m.H = bv9m.H % 12
            }
            return k8c.Bh8Z(bv9m, Gc9T)
        }
    }();
    k8c.Xf4j = function(bB9s) {
        var cD0x = bB9s;
        if (k8c.fe1x(bB9s))
            cD0x = new Date(Date.parse(bB9s));
        if (!k8c.Iq0x(bB9s))
            cD0x = new Date(bB9s);
        return cD0x
    }
    ;
    k8c.GV0x = function(csV3x, csT3x) {
        return (new Number(csV3x)).toFixed(csT3x)
    }
    ;
    k8c.bdo6i = function() {
        var fZ1x = /([^\/:])\/.*$/
            , jr2x = /\/[^\/]+$/
            , Ct8l = /[#\?]/
            , bdv6p = location.href.split(/[?#]/)[0]
            , rR4V = document.createElement("a");
        var beb6V = function(lz2x) {
            return (lz2x || "").indexOf("://") > 0
        };
        var bNw4A = function(lz2x) {
            return (lz2x || "").split(Ct8l)[0].replace(jr2x, "/")
        };
        var csP3x = function(lz2x, fv1x) {
            if (lz2x.indexOf("/") == 0)
                return fv1x.replace(fZ1x, "$1") + lz2x;
            return bNw4A(fv1x) + lz2x
        };
        bdv6p = bNw4A(bdv6p);
        return function(lz2x, fv1x) {
            lz2x = (lz2x || "").trim();
            if (!beb6V(fv1x))
                fv1x = bdv6p;
            if (!lz2x)
                return fv1x;
            if (beb6V(lz2x))
                return lz2x;
            lz2x = csP3x(lz2x, fv1x);
            rR4V.href = lz2x;
            lz2x = rR4V.href;
            return beb6V(lz2x) ? lz2x : rR4V.getAttribute("href", 4)
        }
    }();
    k8c.csK3x = function() {
        var cP0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V9M) {
            if (cP0x.test(V9M || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k8c.bNs4w = function(G9x, ie1x) {
        if (!G9x)
            return ie1x;
        var T9K = G9x.tagName.toLowerCase()
            , i8a = a7h.cQ0x(G9x);
        if (!i8a || !i8a.length) {
            ie1x[T9K] = G9x.textContent || G9x.text || "";
            return ie1x
        }
        var dP0x = {};
        ie1x[T9K] = dP0x;
        k8c.be9V(i8a, function(f8d) {
            k8c.bNs4w(f8d, dP0x)
        });
        return ie1x
    }
    ;
    k8c.cti3x = function(yp7i) {
        try {
            return k8c.bNs4w(a7h.bIZ3x(yp7i), {})
        } catch (ex) {
            return null
        }
    }
    ;
    k8c.bNq4u = function(hH1x, Lq1x) {
        var ie1x = {};
        k8c.be9V((hH1x || "").split(Lq1x), function(T9K) {
            var XZ4d = T9K.split("=");
            if (!XZ4d || !XZ4d.length)
                return;
            var J9A = XZ4d.shift();
            if (!J9A)
                return;
            ie1x[decodeURIComponent(J9A)] = decodeURIComponent(XZ4d.join("="))
        });
        return ie1x
    }
    ;
    k8c.uS6M = function(gd1x, Lq1x, csG3x) {
        if (!gd1x)
            return "";
        var bs9j = [];
        for (var x in gd1x) {
            bs9j.push(encodeURIComponent(x) + "=" + (!!csG3x ? encodeURIComponent(gd1x[x]) : gd1x[x]))
        }
        return bs9j.join(Lq1x || ",")
    }
    ;
    k8c.hi1x = function(bC9t) {
        return k8c.bNq4u(bC9t, "&")
    }
    ;
    k8c.df0x = function(gd1x) {
        return k8c.uS6M(gd1x, "&", !0)
    }
    ;
    k8c.ctk3x = function(gd1x) {
        return ba9R.FX9O(gd1x)
    }
    ;
    k8c.ctl3x = function(i8a, dE0x) {
        var m8e = {};
        k8c.be9V(i8a, function(r8j) {
            var J9A = r8j;
            if (!!dE0x) {
                J9A = dE0x(r8j)
            }
            m8e[J9A] = r8j
        });
        return m8e
    }
    ;
    k8c.ctm3x = function(fq1x, fY1x) {
        var csz3x = ("" + fq1x).length
            , csy2x = Math.max(1, parseInt(fY1x) || 0)
            , dh0x = csy2x - csz3x;
        if (dh0x > 0) {
            fq1x = (new Array(dh0x + 1)).join("0") + fq1x
        }
        return "" + fq1x
    }
    ;
    k8c.YM4Q = function(gd1x, T9K) {
        if (!k8c.el0x(T9K)) {
            try {
                delete gd1x[T9K]
            } catch (e) {
                gd1x[T9K] = undefined
            }
            return this
        }
        k8c.be9V(T9K, k8c.YM4Q.g8c(k8c, gd1x));
        return this
    }
    ;
    k8c.Sl3x = function() {
        var bNo4s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bo9f) {
            bo9f = bo9f || 10;
            var m8e = [];
            for (var i = 0, bNn4r; i < bo9f; ++i) {
                bNn4r = Math.floor(Math.random() * bNo4s.length);
                m8e.push(bNo4s.charAt(bNn4r))
            }
            return m8e.join("")
        }
    }();
    k8c.Kw0x = function(fH1x, fb0x) {
        return Math.floor(Math.random() * (fb0x - fH1x) + fH1x)
    }
    ;
    k8c.mP3x = function(bo9f) {
        bo9f = Math.max(0, Math.min(bo9f || 8, 30));
        var fH1x = Math.pow(10, bo9f - 1)
            , fb0x = fH1x * 10;
        return k8c.Kw0x(fH1x, fb0x).toString()
    }
    ;
    k8c.YP4T = function() {
        var fX1x = +(new Date);
        return function() {
            return "" + fX1x++
        }
    }()
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, eU0x = NEJ.R, bm9d = NEJ.F, h8b = c8g("nej.v"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), nD3x;
    if (!!M9D.cz9q)
        return;
    M9D.cz9q = NEJ.C();
    nD3x = M9D.cz9q.prototype;
    M9D.cz9q.B9s = function(e8e) {
        e8e = e8e || {};
        var cq9h = !!this.As8k && this.As8k.shift();
        if (!cq9h) {
            cq9h = new this(e8e);
            this.csv2x = (this.csv2x || 0) + 1
        }
        cq9h.bk9b(e8e);
        return cq9h
    }
    ;
    M9D.cz9q.S9J = function() {
        var Km0x = function(r8j, s8k, i8a) {
            r8j.S9J();
            i8a.splice(s8k, 1)
        };
        return function(cq9h) {
            if (!cq9h)
                return null;
            if (!k8c.el0x(cq9h)) {
                if (!(cq9h instanceof this)) {
                    var fj1x = cq9h.constructor;
                    if (!!fj1x.S9J)
                        fj1x.S9J(cq9h);
                    return null
                }
                if (cq9h == this.eJ0x)
                    delete this.eJ0x;
                if (cq9h == this.zv7o)
                    delete this.zv7o;
                cq9h.bD9u();
                if (!this.As8k)
                    this.As8k = [];
                if (k8c.cV0x(this.As8k, cq9h) < 0) {
                    this.As8k.push(cq9h)
                }
                return null
            }
            k8c.mu3x(cq9h, Km0x, this)
        }
    }();
    M9D.cz9q.fV1x = function(e8e) {
        e8e = e8e || {};
        if (!this.eJ0x)
            this.eJ0x = this.B9s(e8e);
        return this.eJ0x
    }
    ;
    M9D.cz9q.csu2x = function(e8e, qI4M) {
        e8e = e8e || {};
        if (!!qI4M && !!this.zv7o) {
            this.zv7o.S9J();
            delete this.zv7o
        }
        if (!this.zv7o) {
            this.zv7o = this.B9s(e8e)
        } else {
            this.zv7o.bk9b(e8e)
        }
        return this.zv7o
    }
    ;
    nD3x.cl9c = function() {
        var fX1x = +(new Date);
        return function() {
            this.id = fX1x++;
            this.kO2x = {};
            this.bNi4m = {}
        }
    }();
    nD3x.bk9b = function(e8e) {
        this.bli8a(e8e)
    }
    ;
    nD3x.bD9u = function() {
        this.iB2x();
        this.Ia0x()
    }
    ;
    nD3x.bU9L = function() {
        var fX1x = +(new Date);
        var crY2x = function(bg9X) {
            if (!bg9X || bg9X.length < 3)
                return;
            this.bNi4m["de-" + fX1x++] = bg9X;
            h8b.q8i.apply(h8b, bg9X)
        };
        return function(i8a) {
            k8c.be9V(i8a, crY2x, this)
        }
    }();
    nD3x.Ia0x = function() {
        var crX2x = function(bg9X, J9A, bv9m) {
            delete bv9m[J9A];
            h8b.ms3x.apply(h8b, bg9X)
        };
        return function() {
            k8c.ed0x(this.bNi4m, crX2x)
        }
    }();
    nD3x.ctq3x = function(dE0x) {
        dE0x = dE0x || bm9d;
        k8c.ed0x(this, function(DH9y, J9A, bv9m) {
            if (!!DH9y && !!DH9y.S9J && !dE0x(DH9y)) {
                delete bv9m[J9A];
                DH9y.S9J()
            }
        })
    }
    ;
    nD3x.S9J = function() {
        this.constructor.S9J(this)
    }
    ;
    nD3x.bNf4j = function(t8l) {
        var d8f = this.kO2x[t8l.toLowerCase()];
        return !!d8f && d8f !== bm9d
    }
    ;
    nD3x.q8i = function(t8l, d8f) {
        this.ux6r.apply(this, arguments);
        return this
    }
    ;
    nD3x.ms3x = function(t8l, d8f) {
        var t8l = (t8l || "").toLowerCase()
            , dI0x = this.kO2x[t8l];
        if (!k8c.el0x(dI0x)) {
            if (dI0x == d8f)
                delete this.kO2x[t8l];
            return
        }
        k8c.mu3x(dI0x, function(eH0x, s8k, i8a) {
            if (eH0x == d8f)
                i8a.splice(s8k, 1)
        })
    }
    ;
    nD3x.ux6r = function(t8l, d8f) {
        if (!!t8l && k8c.gf1x(d8f))
            this.kO2x[t8l.toLowerCase()] = d8f;
        return this
    }
    ;
    nD3x.bli8a = function() {
        var crT2x = function(d8f, t8l) {
            this.ux6r(t8l, d8f)
        };
        return function(dI0x) {
            k8c.ed0x(dI0x, crT2x, this);
            return this
        }
    }();
    nD3x.iB2x = function() {
        var bmW8O = function(d8f, t8l) {
            this.iB2x(t8l)
        };
        return function(t8l) {
            var t8l = (t8l || "").toLowerCase();
            if (!!t8l) {
                delete this.kO2x[t8l]
            } else {
                k8c.ed0x(this.kO2x, bmW8O, this)
            }
            return this
        }
    }();
    nD3x.bna8S = function(t8l, d8f) {
        if (!t8l || !k8c.gf1x(d8f))
            return this;
        t8l = t8l.toLowerCase();
        var dI0x = this.kO2x[t8l];
        if (!dI0x) {
            this.kO2x[t8l] = d8f;
            return this
        }
        if (!k8c.el0x(dI0x)) {
            this.kO2x[t8l] = [dI0x]
        }
        this.kO2x[t8l].push(d8f);
        return this
    }
    ;
    nD3x.z9q = function(t8l) {
        var d8f = this.kO2x[(t8l || "").toLowerCase()];
        if (!d8f)
            return this;
        var bg9X = eU0x.slice.call(arguments, 1);
        if (!k8c.el0x(d8f))
            return d8f.apply(this, bg9X);
        k8c.be9V(d8f, function(dc0x) {
            try {
                dc0x.apply(this, bg9X)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
    ;
    M9D.ZI5N = function() {
        var R9I = {};
        return function(C9t, fj1x, e8e) {
            var eI0x = fj1x.crS2x;
            if (!eI0x) {
                eI0x = k8c.Sl3x(10);
                fj1x.crS2x = eI0x
            }
            var J9A = C9t + "-" + eI0x
                , cq9h = R9I[J9A];
            if (!!e8e && !cq9h) {
                cq9h = fj1x.B9s(e8e);
                cq9h.S9J = cq9h.S9J.ef0x(function(d8f) {
                    delete R9I[J9A];
                    delete cq9h.S9J
                });
                R9I[J9A] = cq9h
            }
            return cq9h
        }
    }()
})();
(function() {
    var o = NEJ.O
        , u = NEJ.P("nej.u")
        , j = NEJ.P("nej.j");
    j.gG1x = function() {
        var cD0x = new Date
            , crR2x = +cD0x
            , boq9h = 864e5;
        var crO2x = function(T9K) {
            var qV4Z = document.cookie
                , rN4R = "\\b" + T9K + "="
                , RI2x = qV4Z.search(rN4R);
            if (RI2x < 0)
                return "";
            RI2x += rN4R.length - 2;
            var xX7Q = qV4Z.indexOf(";", RI2x);
            if (xX7Q < 0)
                xX7Q = qV4Z.length;
            return qV4Z.substring(RI2x, xX7Q) || ""
        };
        return function(T9K, j8b) {
            if (j8b === undefined)
                return crO2x(T9K);
            if (u.fe1x(j8b)) {
                if (!!j8b) {
                    document.cookie = T9K + "=" + j8b + ";";
                    return j8b
                }
                j8b = {
                    expires: -100
                }
            }
            j8b = j8b || o;
            var qV4Z = T9K + "=" + (j8b.value || "") + ";";
            delete j8b.value;
            if (j8b.expires !== undefined) {
                cD0x.setTime(crR2x + j8b.expires * boq9h);
                j8b.expires = cD0x.toGMTString()
            }
            qV4Z += u.uS6M(j8b, ";");
            document.cookie = qV4Z
        }
    }()
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, iC2x = c8g("nej.c"), dO0x = c8g("nej.g"), a7h = c8g("nej.e"), v9m = c8g("nej.j"), H9y = c8g("nej.ut"), M9D = c8g("nej.ut.j"), k8c = c8g("nej.u"), b8h;
    if (!!M9D.Ja0x)
        return;
    M9D.Ja0x = NEJ.C();
    b8h = M9D.Ja0x.O9F(H9y.cz9q);
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.od3x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.od3x, e8e);
        var zj7c = iC2x.x9o("csrf");
        if ((/^\/[^\/]/.test(this.od3x.url) || this.od3x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!zj7c.cookie && !!zj7c.param) {
            var bC9t = encodeURIComponent(zj7c.param) + "=" + encodeURIComponent(v9m.gG1x(zj7c.cookie) || "")
                , Lq1x = this.od3x.url.indexOf("?") < 0 ? "?" : "&";
            this.od3x.url += Lq1x + bC9t
        }
        this.bac5h = e8e.headers || {};
        var bi9Z = this.bac5h[dO0x.xj7c];
        if (bi9Z == null)
            this.bac5h[dO0x.xj7c] = dO0x.bTD7w
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        delete this.zx7q;
        delete this.od3x;
        delete this.bac5h
    }
    ;
    b8h.crN2x = function(bi9Z) {
        var bv9m = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.od3x.noescape) {
            return k8c.Bh8Z(bv9m, bi9Z)
        } else {
            return bi9Z
        }
    }
    ;
    b8h.sz4D = function(d8f) {
        var dY0x = d8f.status;
        if (dY0x == -1) {
            this.z9q("onerror", {
                code: dO0x.bvT0x,
                message: "请求[" + this.od3x.url + "]超时！"
            });
            return
        }
        if (("" + dY0x).indexOf("2") != 0) {
            this.z9q("onerror", {
                data: dY0x,
                code: dO0x.bkw8o,
                message: "服务器返回异常状态[" + dY0x + "]!",
                extData: d8f.result
            });
            return
        }
        this.z9q("onload", a7h.cgK0x(this.crN2x(d8f.result), this.od3x.type))
    }
    ;
    b8h.ck9b = bm9d;
    b8h.bbo6i = function(j8b) {
        var V9M = this.od3x.url;
        if (!V9M) {
            this.z9q("onerror", {
                code: dO0x.bgR7K,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.od3x.data = j8b == null ? null : j8b;
            var d8f = {
                request: this.od3x,
                headers: this.bac5h
            };
            try {
                this.z9q("onbeforerequest", d8f)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ck9b(d8f)
        } catch (e) {
            this.z9q("onerror", {
                code: dO0x.bkw8o,
                message: "请求[" + V9M + "]失败:" + e.message + "！"
            })
        }
        return this
    }
    ;
    b8h.jj2x = bm9d
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, ba9R = c8g("nej.h"), dO0x = c8g("nej.g"), k8c = c8g("nej.u"), M9D = c8g("nej.ut.j"), R9I = {}, Jv0x;
    if (!!M9D.ZY5d)
        return;
    M9D.ZY5d = NEJ.C();
    Jv0x = M9D.ZY5d.O9F(M9D.Ja0x);
    Jv0x.bD9u = function() {
        this.bH9y();
        window.clearTimeout(this.dL0x);
        delete this.dL0x;
        try {
            this.qz4D.onreadystatechange = bm9d;
            this.qz4D.abort()
        } catch (e) {}
        delete this.qz4D
    }
    ;
    Jv0x.ck9b = function() {
        var crJ2x = function(A9r, J9A) {
            this.qz4D.setRequestHeader(J9A, A9r)
        };
        return function(e8e) {
            var fC1x = e8e.request
                , ny3x = e8e.headers;
            this.qz4D = ba9R.bcC6w();
            if (ny3x[dO0x.xj7c] === dO0x.DB9s) {
                delete ny3x[dO0x.xj7c];
                this.qz4D.upload.onprogress = this.hj1x.g8c(this, 1);
                if (fC1x.data.tagName === "FORM")
                    fC1x.data = new FormData(fC1x.data)
            }
            this.qz4D.onreadystatechange = this.hj1x.g8c(this, 2);
            if (fC1x.timeout != 0) {
                this.dL0x = window.setTimeout(this.hj1x.g8c(this, 3), fC1x.timeout)
            }
            this.qz4D.open(fC1x.method, fC1x.url, !fC1x.sync);
            k8c.ed0x(ny3x, crJ2x, this);
            if (!!this.od3x.cookie && "withCredentials"in this.qz4D)
                this.qz4D.withCredentials = !0;
            this.qz4D.send(fC1x.data)
        }
    }();
    Jv0x.hj1x = function(t8l) {
        switch (t8l) {
            case 1:
                this.z9q("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qz4D.readyState == 4)
                    this.sz4D({
                        status: this.qz4D.status,
                        result: this.qz4D.responseText || ""
                    });
                break;
            case 3:
                this.sz4D({
                    status: -1
                });
                break
        }
    }
    ;
    Jv0x.jj2x = function() {
        this.sz4D({
            status: 0
        });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var JC0x = {}, ZP5U = [], bNc4g = /\s+/g, fX1x = +(new Date), Iv0x, bN9E, ls2x;
    var DQ9H = function() {
        var fZ1x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
            , jr2x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
            , Ct8l = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
            , bdn6h = /^new\s+/
            , crC2x = /['"]/;
        var crz2x = function(A9r) {
            if (fZ1x.test(A9r))
                return;
            A9r = A9r.split(".")[0].trim();
            if (!A9r || crC2x.test(A9r))
                return;
            A9r = A9r.replace(bdn6h, "");
            try {
                if (Ct8l.test(A9r))
                    return;
                ls2x[A9r] = 1
            } catch (e) {}
        };
        return function(bi9Z) {
            bi9Z = bi9Z || "";
            if (!bi9Z || fZ1x.test(bi9Z))
                return;
            var bs9j = bi9Z.split(jr2x);
            for (var i = 0, l = bs9j.length; i < l; i++)
                crz2x(bs9j[i])
        }
    }();
    var cry2x = function(dk0x) {
        if (dk0x[2] != "in")
            throw "bad for loop statement: " + dk0x.join(" ");
        ZP5U.push(dk0x[1]);
        DQ9H(dk0x[3]);
        return "var __HASH__" + dk0x[1] + " = " + dk0x[3] + "," + dk0x[1] + "," + dk0x[1] + "_count=0;" + "if (!!__HASH__" + dk0x[1] + ")" + "for(var " + dk0x[1] + "_key in __HASH__" + dk0x[1] + "){" + dk0x[1] + " = __HASH__" + dk0x[1] + "[" + dk0x[1] + "_key];" + "if (typeof(" + dk0x[1] + ')=="function") continue;' + dk0x[1] + "_count++;"
    };
    var crv2x = function() {
        var dk0x = ZP5U[ZP5U.length - 1];
        return "}; if(!__HASH__" + dk0x + "||!" + dk0x + "_count){"
    };
    var crs2x = function() {
        ZP5U.pop();
        return "};"
    };
    var crr2x = function(dk0x) {
        if (dk0x[2] != "as")
            throw "bad for list loop statement: " + dk0x.join(" ");
        var Kc0x = dk0x[1].split("..");
        if (Kc0x.length > 1) {
            DQ9H(Kc0x[0]);
            DQ9H(Kc0x[1]);
            return "for(var " + dk0x[3] + "," + dk0x[3] + "_index=0," + dk0x[3] + "_beg=" + Kc0x[0] + "," + dk0x[3] + "_end=" + Kc0x[1] + "," + dk0x[3] + "_length=parseInt(" + dk0x[3] + "_end-" + dk0x[3] + "_beg+1);" + dk0x[3] + "_index<" + dk0x[3] + "_length;" + dk0x[3] + "_index++){" + dk0x[3] + " = " + dk0x[3] + "_beg+" + dk0x[3] + "_index;"
        } else {
            DQ9H(dk0x[1]);
            return "for(var __LIST__" + dk0x[3] + " = " + dk0x[1] + "," + dk0x[3] + "," + dk0x[3] + "_index=0," + dk0x[3] + "_length=__LIST__" + dk0x[3] + ".length;" + dk0x[3] + "_index<" + dk0x[3] + "_length;" + dk0x[3] + "_index++){" + dk0x[3] + " = __LIST__" + dk0x[3] + "[" + dk0x[3] + "_index];"
        }
    };
    var crm2x = function(dk0x) {
        if (!dk0x || !dk0x.length)
            return;
        dk0x.shift();
        var T9K = dk0x[0].split("(")[0];
        return "var " + T9K + " = function" + dk0x.join("").replace(T9K, "") + "{var __OUT=[];"
    };
    var crl2x = function(dk0x) {
        if (!dk0x[1])
            throw "bad include statement: " + dk0x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var beo6i = function(lf2x, dk0x) {
        DQ9H(dk0x.slice(1).join(" "));
        return lf2x
    };
    var cri2x = function(dk0x) {
        return beo6i("if(", dk0x)
    };
    var crh2x = function(dk0x) {
        return beo6i("}else if(", dk0x)
    };
    var crg2x = function(dk0x) {
        return beo6i("var ", dk0x)
    };
    bN9E = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cri2x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: crh2x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cry2x,
                pmin: 3
            },
            forelse: {
                pfix: crv2x
            },
            "/for": {
                pfix: crs2x
            },
            list: {
                pfix: crr2x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: crg2x,
                sfix: ";"
            },
            macro: {
                pfix: crm2x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    Iv0x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    Iv0x = null
                }
            },
            inline: {
                pfix: crl2x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(lf2x) {
                return (lf2x || "") + "" + fX1x
            },
            "default": function(A9r, ku2x) {
                return A9r || ku2x
            }
        }
    };
    var cqZ2x = function() {
        var cqV2x = /\\([\{\}])/g;
        return function(bi9Z, iL2x) {
            bi9Z = bi9Z.replace(cqV2x, "$1");
            var dk0x = bi9Z.slice(1, -1).split(bNc4g)
                , bc9T = bN9E.def[dk0x[0]];
            if (!bc9T) {
                YK4O(bi9Z, iL2x);
                return
            }
            if (!!bc9T.pmin && bc9T.pmin >= dk0x.length)
                throw "Statement needs more parameters:" + bi9Z;
            iL2x.push(!!bc9T.pfix && typeof bc9T.pfix != "string" ? bc9T.pfix(dk0x) : bc9T.pfix || "");
            if (!!bc9T.sfix) {
                if (dk0x.length <= 1) {
                    if (!!bc9T.pdft)
                        iL2x.push(bc9T.pdft)
                } else {
                    for (var i = 1, l = dk0x.length; i < l; i++) {
                        if (i > 1)
                            iL2x.push(" ");
                        iL2x.push(dk0x[i])
                    }
                }
                iL2x.push(bc9T.sfix)
            }
        }
    }();
    var bMN4R = function(Hu0x, iL2x) {
        if (!Hu0x || !Hu0x.length)
            return;
        if (Hu0x.length == 1) {
            var bgf7Y = Hu0x.pop();
            DQ9H(bgf7Y);
            iL2x.push(bgf7Y == "" ? '""' : bgf7Y);
            return
        }
        var bgg7Z = Hu0x.pop().split(":");
        iL2x.push("__MDF['" + bgg7Z.shift() + "'](");
        bMN4R(Hu0x, iL2x);
        if (bgg7Z.length > 0) {
            var bg9X = bgg7Z.join(":");
            DQ9H(bg9X);
            iL2x.push("," + bg9X)
        }
        iL2x.push(")")
    };
    var YK4O = function(bi9Z, iL2x) {
        if (!bi9Z)
            return;
        var vh6b = bi9Z.split("\n");
        if (!vh6b || !vh6b.length)
            return;
        for (var i = 0, l = vh6b.length, he1x; i < l; i++) {
            he1x = vh6b[i];
            if (!!Iv0x) {
                he1x = he1x.trim();
                if (!he1x)
                    continue
            }
            cqK2x(he1x, iL2x);
            if (!!Iv0x && i < l - 1)
                iL2x.push("__OUT.push('\\n');")
        }
    };
    var cqK2x = function() {
        var cqJ2x = /\|\|/g
            , cqI2x = /#@@#/g;
        return function(bi9Z, iL2x) {
            var KZ1x = "}", Lf1x = -1, bo9f = bi9Z.length, uz6t, gy1x, GP9G, Ya4e, Lo1x;
            while (Lf1x + KZ1x.length < bo9f) {
                uz6t = "${";
                gy1x = "}";
                GP9G = bi9Z.indexOf(uz6t, Lf1x + KZ1x.length);
                if (GP9G < 0)
                    break;
                if (bi9Z.charAt(GP9G + 2) == "%") {
                    uz6t = "${%";
                    gy1x = "%}"
                }
                Ya4e = bi9Z.indexOf(gy1x, GP9G + uz6t.length);
                if (Ya4e < 0)
                    break;
                XY4c(bi9Z.substring(Lf1x + KZ1x.length, GP9G), iL2x);
                Lo1x = bi9Z.substring(GP9G + uz6t.length, Ya4e).replace(cqJ2x, "#@@#").split("|");
                for (var i = 0, l = Lo1x.length; i < l; Lo1x[i] = Lo1x[i].replace(cqI2x, "||"),
                    i++)
                    ;
                iL2x.push("__OUT.push(");
                bMN4R(Lo1x, iL2x);
                iL2x.push(");");
                KZ1x = gy1x;
                Lf1x = Ya4e
            }
            XY4c(bi9Z.substring(Lf1x + KZ1x.length), iL2x)
        }
    }();
    var XY4c = function() {
        var bv9m = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cqH2x = function(bi9Z) {
            return (bi9Z || "").replace(bv9m.r, function($1) {
                return bv9m[$1] || $1
            })
        };
        return function(bi9Z, iL2x) {
            if (!bi9Z)
                return;
            iL2x.push("__OUT.push('" + cqH2x(bi9Z) + "');")
        }
    }();
    var cqD2x = function() {
        var cqA2x = /\t/g
            , cqy2x = /\n/g
            , cqx2x = /\r\n?/g;
        var bMK4O = function(bi9Z, uz6t) {
            var s8k = bi9Z.indexOf("}", uz6t + 1);
            while (bi9Z.charAt(s8k - 1) == "\\") {
                s8k = bi9Z.indexOf("}", s8k + 1)
            }
            return s8k
        };
        var cqv2x = function() {
            var bs9j = []
                , Cv8n = arguments[0];
            for (var x in Cv8n) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bs9j.push(x + "=$v('" + x + "')")
            }
            return bs9j.length > 0 ? "var " + bs9j.join(",") + ";" : ""
        };
        return function(bi9Z) {
            ls2x = {};
            bi9Z = bi9Z.replace(cqx2x, "\n").replace(cqA2x, "    ");
            var qJ4N = ["if(!__CTX) return '';", ""];
            qJ4N.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qJ4N.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qJ4N.push("__OUT=[];");
            var Cj8b = -1
                , bo9f = bi9Z.length;
            var mj3x, Ge9V, Mk1x, Mr1x, yZ7S, MB1x, bjO8G, MQ1x;
            while (Cj8b + 1 < bo9f) {
                mj3x = Cj8b;
                mj3x = bi9Z.indexOf("{", mj3x + 1);
                while (mj3x >= 0) {
                    Ge9V = bMK4O(bi9Z, mj3x);
                    Mk1x = bi9Z.substring(mj3x, Ge9V);
                    Mr1x = Mk1x.match(bN9E.blk);
                    if (!!Mr1x) {
                        yZ7S = Mr1x[1].length + 1;
                        MB1x = bi9Z.indexOf("}", mj3x + yZ7S);
                        if (MB1x >= 0) {
                            bjO8G = MB1x - mj3x - yZ7S <= 0 ? "{/" + Mr1x[1] + "}" : Mk1x.substr(yZ7S + 1);
                            yZ7S = bi9Z.indexOf(bjO8G, MB1x + 1);
                            if (yZ7S >= 0) {
                                YK4O(bi9Z.substring(Cj8b + 1, mj3x), qJ4N);
                                MQ1x = bi9Z.substring(MB1x + 1, yZ7S);
                                switch (Mr1x[1]) {
                                    case "cdata":
                                        XY4c(MQ1x, qJ4N);
                                        break;
                                    case "minify":
                                        XY4c(MQ1x.replace(cqy2x, " ").replace(bNc4g, " "), qJ4N);
                                        break;
                                    case "eval":
                                        if (!!MQ1x)
                                            qJ4N.push("__OUT.push((function(){" + MQ1x + "})());");
                                        break
                                }
                                mj3x = Cj8b = yZ7S + bjO8G.length - 1
                            }
                        }
                    } else if (bi9Z.charAt(mj3x - 1) != "$" && bi9Z.charAt(mj3x - 1) != "\\" && Mk1x.substr(Mk1x.charAt(1) == "/" ? 2 : 1).search(bN9E.tag) == 0) {
                        break
                    }
                    mj3x = bi9Z.indexOf("{", mj3x + 1)
                }
                if (mj3x < 0)
                    break;
                Ge9V = bMK4O(bi9Z, mj3x);
                if (Ge9V < 0)
                    break;
                YK4O(bi9Z.substring(Cj8b + 1, mj3x), qJ4N);
                cqZ2x(bi9Z.substring(mj3x, Ge9V + 1), qJ4N);
                Cj8b = Ge9V
            }
            YK4O(bi9Z.substring(Cj8b + 1), qJ4N);
            qJ4N.push(';return __OUT.join("");');
            qJ4N[1] = cqv2x(ls2x);
            ls2x = null;
            return new Function("__CTX","__MDF",qJ4N.join(""))
        }
    }();
    TrimPath.seed = function() {
        return fX1x
    }
    ;
    TrimPath.merge = function() {
        var MT1x = {};
        TrimPath.dump = function() {
            return {
                func: MT1x,
                text: JC0x
            }
        }
        ;
        return function(eI0x, j8b, jd2x) {
            try {
                j8b = j8b || {};
                if (!MT1x[eI0x] && !JC0x[eI0x])
                    return "";
                if (!MT1x[eI0x]) {
                    MT1x[eI0x] = cqD2x(JC0x[eI0x]);
                    delete JC0x[eI0x]
                }
                if (!!jd2x) {
                    for (var x in bN9E.ext)
                        if (!jd2x[x])
                            jd2x[x] = bN9E.ext[x]
                }
                return MT1x[eI0x](j8b, jd2x || bN9E.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cqu2x = +(new Date);
        return function(bi9Z, eI0x) {
            if (!bi9Z)
                return "";
            eI0x = eI0x || "ck_" + cqu2x++;
            JC0x[eI0x] = bi9Z;
            return eI0x
        }
    }()
})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , k8c = c8g("nej.u")
        , ff1x = {};
    a7h.Fp9g = TrimPath.seed;
    a7h.bP9G = function() {
        var bMI4M = function(C9t) {
            return !a7h.hX1x ? "" : a7h.hX1x(C9t)
        };
        return function(eI0x, j8b, jd2x) {
            j8b = j8b || {};
            j8b.inline = bMI4M;
            jd2x = NEJ.X(NEJ.X({}, ff1x), jd2x);
            jd2x.rand = k8c.mP3x;
            jd2x.format = k8c.iS2x;
            jd2x.escape = k8c.dM0x;
            jd2x.inline = bMI4M;
            return TrimPath.merge(eI0x, j8b, jd2x)
        }
    }();
    a7h.em0x = function(bi9Z, cqp2x) {
        if (!bi9Z)
            return "";
        var eI0x, E9v = a7h.x9o(bi9Z);
        if (!!E9v) {
            eI0x = E9v.id;
            bi9Z = E9v.value || E9v.innerText;
            if (!cqp2x)
                a7h.cF0x(E9v)
        }
        return TrimPath.parse(bi9Z, eI0x)
    }
    ;
    a7h.dT0x = function(bA9r, eI0x, j8b, jd2x) {
        bA9r = a7h.x9o(bA9r);
        if (!!bA9r)
            bA9r.innerHTML = a7h.bP9G(eI0x, j8b, jd2x);
        return this
    }
    ;
    a7h.cts3x = function(bv9m) {
        NEJ.X(ff1x, bv9m)
    }
    ;
    c8g("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var cK0x = NEJ.P("nej.p")
        , M9D = window
        , kb2x = cK0x.Kh0x
        , bMB4F = kb2x.ipad || kb2x.iphone;
    if (!bMB4F && !!M9D.requestAnimationFrame && !!M9D.cancelRequestAnimationFrame)
        return;
    var lf2x = cK0x.cS0x.prefix.pro;
    if (!bMB4F && !!M9D[lf2x + "RequestAnimationFrame"] && !!M9D[lf2x + "CancelRequestAnimationFrame"]) {
        M9D.requestAnimationFrame = M9D[lf2x + "RequestAnimationFrame"];
        M9D.cancelRequestAnimationFrame = M9D[lf2x + "CancelRequestAnimationFrame"];
        return
    }
    var We4i = kb2x.desktop ? 80 : kb2x.ios ? 50 : 30;
    M9D.requestAnimationFrame = function(dr0x) {
        return window.setTimeout(function() {
            try {
                dr0x(+(new Date))
            } catch (ex) {}
        }, 1e3 / We4i)
    }
    ;
    M9D.cancelRequestAnimationFrame = function(C9t) {
        window.clearTimeout(C9t);
        return this
    }
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, k8c = c8g("nej.u"), a7h = c8g("nej.e"), h8b = c8g("nej.v"), ba9R = c8g("nej.h"), cL0x = c8g("nej.x"), Wd4h = c8g("nej.ut.j.cb"), gc1x;
    if (!!a7h.qd4h)
        return;
    a7h.qd4h = cL0x.qd4h = function() {
        var R9I = {}
            , fZ1x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d8f) {
            var C9t = decodeURIComponent(d8f.target)
                , t8l = d8f.type.toLowerCase();
            var dc0x = R9I[C9t + "-on" + t8l];
            if (!!dc0x) {
                try {
                    dc0x(d8f)
                } catch (e) {}
                return
            }
            var cI0x = R9I[C9t + "-tgt"];
            if (!!cI0x && fZ1x.test(t8l)) {
                bMA4E(cI0x, d8f)
            }
        }
        ;
        var bmd8V = function(e8e) {
            var bA9r = a7h.x9o(e8e.parent) || document.body
                , ds0x = a7h.bP9G(gc1x, e8e);
            bA9r.insertAdjacentHTML(!e8e.hidden ? "beforeEnd" : "afterBegin", ds0x)
        };
        var bMA4E = function(C9t, d8f) {
            var t8l = d8f.type.toLowerCase();
            requestAnimationFrame(function() {
                h8b.z9q(C9t, t8l)
            })
        };
        var cqb2x = function(hb1x) {
            return !!hb1x && !!hb1x.inited && !!hb1x.inited()
        };
        var Nv1x = function(C9t) {
            var bs9j = [document.embeds[C9t], a7h.x9o(C9t), document[C9t], window[C9t]]
                , s8k = k8c.ed0x(bs9j, cqb2x)
                , hb1x = bs9j[s8k]
                , bmV8N = C9t + "-count";
            R9I[bmV8N]++;
            if (!!hb1x || R9I[bmV8N] > 100) {
                R9I[C9t](hb1x);
                delete R9I[C9t];
                delete R9I[bmV8N];
                return
            }
            window.setTimeout(Nv1x.g8c(null, C9t), 300)
        };
        var cqa2x = function(e8e) {
            var C9t = e8e.id
                , fR1x = e8e.params;
            if (!fR1x) {
                fR1x = {};
                e8e.params = fR1x
            }
            var ls2x = fR1x.flashvars || "";
            ls2x += (!ls2x ? "" : "&") + ("id=" + C9t);
            if (!e8e.hidden && (!!e8e.target || ba9R.Vc3x(fR1x.wmode))) {
                var hf1x = a7h.kp2x(e8e.target) || a7h.kp2x(e8e.parent)
                    , VQ4U = k8c.YP4T();
                Wd4h["cb" + VQ4U] = bMA4E.g8c(null, hf1x);
                ls2x += "&onevent=nej.ut.j.cb.cb" + VQ4U;
                R9I[C9t + "-tgt"] = hf1x
            }
            fR1x.flashvars = ls2x;
            k8c.ed0x(e8e, function(A9r, J9A) {
                if (k8c.gf1x(A9r) && J9A != "onready") {
                    R9I[C9t + "-" + J9A] = A9r
                }
            })
        };
        return function(e8e) {
            e8e = NEJ.X({}, e8e);
            if (!e8e.src)
                return;
            var C9t = "flash_" + k8c.YP4T();
            e8e.id = C9t;
            cqa2x(e8e);
            bmd8V(e8e);
            if (!e8e.onready)
                return;
            R9I[C9t] = e8e.onready;
            R9I[C9t + "-count"] = 0;
            Nv1x(C9t)
        }
    }();
    gc1x = a7h.em0x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cL0x.isChange = !0
})();
(function() {
    var c8g = NEJ.P, iC2x = c8g("nej.c"), a7h = c8g("nej.e"), k8c = c8g("nej.u"), M9D = c8g("nej.ut.j"), Wd4h = c8g("nej.ut.j.cb"), R9I = {}, fX1x = +(new Date), bny8q;
    if (!!M9D.bnz8r)
        return;
    Wd4h["ld" + fX1x] = function(J9A, da0x) {
        var iU2x = R9I[J9A];
        if (!iU2x)
            return;
        delete R9I[J9A];
        iU2x.sz4D({
            status: 200,
            result: da0x
        })
    }
    ;
    Wd4h["er" + fX1x] = function(J9A, dY0x) {
        var iU2x = R9I[J9A];
        if (!iU2x)
            return;
        delete R9I[J9A];
        iU2x.sz4D({
            status: dY0x || 0
        })
    }
    ;
    M9D.bnz8r = NEJ.C();
    bny8q = M9D.bnz8r.O9F(M9D.Ja0x);
    bny8q.ck9b = function(e8e) {
        var hb1x = R9I.flash;
        if (k8c.el0x(hb1x)) {
            hb1x.push(this.ck9b.g8c(this, e8e));
            return
        }
        if (!hb1x) {
            R9I.flash = [this.ck9b.g8c(this, e8e)];
            a7h.qd4h({
                hidden: !0,
                src: iC2x.x9o("ajax.swf"),
                onready: function(hb1x) {
                    if (!hb1x)
                        return;
                    var i8a = R9I.flash;
                    R9I.flash = hb1x;
                    k8c.mu3x(i8a, function(dc0x) {
                        try {
                            dc0x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.zx7q = "swf-" + k8c.mP3x();
        R9I[this.zx7q] = this;
        var j8b = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e8e.request);
        j8b.key = this.zx7q;
        j8b.headers = e8e.headers;
        j8b.onerror = "nej.ut.j.cb.er" + fX1x;
        j8b.onloaded = "nej.ut.j.cb.ld" + fX1x;
        var bMx4B = iC2x.ciZ0x(j8b.url);
        if (!!bMx4B)
            j8b.policyURL = bMx4B;
        hb1x.request(j8b)
    }
    ;
    bny8q.jj2x = function() {
        delete R9I[this.zx7q];
        this.sz4D({
            status: 0
        });
        return this
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , ba9R = c8g("nej.h");
    ba9R.bMw4A = function() {
        var cP0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(hG1x) {
            hG1x = hG1x || "";
            if (cP0x.test(hG1x))
                return RegExp.$1;
            return "*"
        }
    }();
    ba9R.boi9Z = function(j8b) {
        return j8b
    }
    ;
    ba9R.bom9d = function(bMu4y, e8e) {
        if (!bMu4y.postMessage)
            return;
        e8e = e8e || Y9P;
        bMu4y.postMessage(ba9R.boi9Z(e8e.data), ba9R.bMw4A(e8e.origin))
    }
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), b8h;
    if (!!M9D.ft1x)
        return;
    M9D.ft1x = NEJ.C();
    b8h = M9D.ft1x.O9F(M9D.cz9q);
    b8h.cl9c = function() {
        this.P9G = {};
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.Nz1x = a7h.x9o(e8e.element) || window;
        this.bMt4x(e8e.event);
        this.cpL2x();
        this.z9q("oninit")
    }
    ;
    b8h.bD9u = function() {
        var AS8K = function(A9r, J9A, bv9m) {
            if (!k8c.el0x(A9r)) {
                k8c.YM4Q(this.Nz1x, J9A)
            }
            delete bv9m[J9A]
        };
        return function() {
            this.bH9y();
            k8c.ed0x(this.P9G, AS8K, this);
            delete this.Nz1x
        }
    }();
    b8h.VK3x = function(E9v, t8l) {
        E9v = a7h.x9o(E9v);
        return E9v == this.Nz1x && (!t8l || !!this.P9G["on" + t8l])
    }
    ;
    b8h.bMt4x = function(d8f) {
        if (k8c.fe1x(d8f)) {
            var T9K = "on" + d8f;
            if (!this.P9G[T9K]) {
                this.P9G[T9K] = this.cpH2x.g8c(this, d8f)
            }
            this.bMr4v(d8f);
            return
        }
        if (k8c.el0x(d8f)) {
            k8c.be9V(d8f, this.bMt4x, this)
        }
    }
    ;
    b8h.bMr4v = function(t8l) {
        var d8f = "on" + t8l
            , dc0x = this.Nz1x[d8f]
            , bMq4u = this.P9G[d8f];
        if (dc0x != bMq4u) {
            this.UL3x(t8l);
            if (!!dc0x && dc0x != bm9d)
                this.bMo4s(t8l, dc0x);
            this.Nz1x[d8f] = bMq4u
        }
    }
    ;
    b8h.bMo4s = function(t8l, dc0x, cpA2x) {
        var i8a = this.P9G[t8l];
        if (!i8a) {
            i8a = [];
            this.P9G[t8l] = i8a
        }
        if (k8c.gf1x(dc0x)) {
            !cpA2x ? i8a.push(dc0x) : i8a.unshift(dc0x)
        }
    }
    ;
    b8h.UL3x = function(t8l, dc0x) {
        var i8a = this.P9G[t8l];
        if (!i8a || !i8a.length)
            return;
        if (!dc0x) {
            delete this.P9G[t8l];
            return
        }
        k8c.mu3x(i8a, function(A9r, s8k, HZ0x) {
            if (dc0x === A9r) {
                HZ0x.splice(s8k, 1);
                return !0
            }
        })
    }
    ;
    b8h.cpH2x = function(t8l, d8f) {
        d8f = d8f || {
            noargs: !0
        };
        d8f.type = t8l;
        this.z9q("ondispatch", d8f);
        if (!!d8f.stopped)
            return;
        k8c.be9V(this.P9G[t8l], function(dc0x) {
            try {
                dc0x(d8f)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
    ;
    b8h.cpL2x = function() {
        var baH5M = function(d8f) {
            var bg9X = d8f.args
                , t8l = bg9X[1].toLowerCase();
            if (this.VK3x(bg9X[0], t8l)) {
                d8f.stopped = !0;
                this.bMr4v(t8l);
                this.bMo4s(t8l, bg9X[2], bg9X[3]);
                this.z9q("oneventadd", {
                    type: t8l,
                    listener: bg9X[2]
                })
            }
        };
        var cpz2x = function(d8f) {
            var bg9X = d8f.args
                , t8l = bg9X[1].toLowerCase();
            if (this.VK3x(bg9X[0], t8l)) {
                d8f.stopped = !0;
                this.UL3x(t8l, bg9X[2])
            }
        };
        var bmW8O = function(d8f) {
            var bg9X = d8f.args
                , t8l = (bg9X[1] || "").toLowerCase();
            if (this.VK3x(bg9X[0])) {
                if (!!t8l) {
                    this.UL3x(t8l);
                    return
                }
                k8c.ed0x(this.P9G, function(A9r, J9A) {
                    if (k8c.el0x(A9r)) {
                        this.UL3x(J9A)
                    }
                }, this)
            }
        };
        var cps2x = function(d8f) {
            var bg9X = d8f.args
                , t8l = bg9X[1].toLowerCase();
            if (this.VK3x(bg9X[0], t8l)) {
                d8f.stopped = !0;
                bg9X[0]["on" + t8l].apply(bg9X[0], bg9X.slice(2))
            }
        };
        return function() {
            if (!!this.cpr2x)
                return;
            this.cpr2x = true;
            h8b.q8i = h8b.q8i.ef0x(baH5M.g8c(this));
            h8b.ms3x = h8b.ms3x.ef0x(cpz2x.g8c(this));
            h8b.iB2x = h8b.iB2x.ef0x(bmW8O.g8c(this));
            h8b.z9q = h8b.z9q.ef0x(cps2x.g8c(this))
        }
    }()
})();
(function() {
    var c8g = NEJ.P
        , M9D = c8g("nej.p")
        , ba9R = c8g("nej.h")
        , k8c = c8g("nej.u")
        , h8b = c8g("nej.v")
        , H9y = c8g("nej.ut");
    if (M9D.mq3x.trident)
        return;
    if (!!window.postMessage) {
        ba9R.boi9Z = ba9R.boi9Z.ef0x(function(d8f) {
            d8f.stopped = !0;
            d8f.value = JSON.stringify(d8f.args[0])
        });
        return
    }
    var J9A = "MSG|"
        , js2x = [];
    var cpq2x = function() {
        var T9K = unescape(window.name || "").trim();
        if (!T9K || T9K.indexOf(J9A) != 0)
            return;
        window.name = "";
        var m8e = k8c.bNq4u(T9K.replace(J9A, ""), "|")
            , hG1x = (m8e.origin || "").toLowerCase();
        if (!!hG1x && hG1x != "*" && location.href.toLowerCase().indexOf(hG1x) != 0)
            return;
        h8b.z9q(window, "message", {
            data: JSON.parse(m8e.data || "null"),
            source: window.frames[m8e.self] || m8e.self,
            origin: ba9R.bMw4A(m8e.ref || document.referrer)
        })
    };
    var cpk2x = function() {
        var TX3x;
        var cpj2x = function(bv9m, s8k, i8a) {
            if (k8c.cV0x(TX3x, bv9m.w) < 0) {
                TX3x.push(bv9m.w);
                i8a.splice(s8k, 1);
                bv9m.w.name = bv9m.d
            }
        };
        return function() {
            TX3x = [];
            k8c.mu3x(js2x, cpj2x);
            TX3x = null
        }
    }();
    ba9R.bom9d = function() {
        var coY2x = function(j8b) {
            var m8e = {};
            j8b = j8b || Y9P;
            m8e.origin = j8b.origin || "";
            m8e.ref = location.href;
            m8e.self = j8b.source;
            m8e.data = JSON.stringify(j8b.data);
            return J9A + k8c.uS6M(m8e, "|", !0)
        };
        return ba9R.bom9d.ef0x(function(d8f) {
            d8f.stopped = !0;
            var bg9X = d8f.args;
            js2x.unshift({
                w: bg9X[0],
                d: escape(coY2x(bg9X[1]))
            })
        })
    }();
    H9y.ft1x.B9s({
        element: window,
        event: "message"
    });
    window.setInterval(cpk2x, 100);
    window.setInterval(cpq2x, 20)
})();
(function() {
    var c8g = NEJ.P
        , ba9R = c8g("nej.h")
        , a7h = c8g("nej.e")
        , v9m = c8g("nej.j");
    v9m.coT2x = function() {
        var im1x = window.name || "_parent"
            , coS2x = {
            gi1x: window.top,
            im1x: window,
            bA9r: window.parent
        };
        return function(cI0x, e8e) {
            if (typeof cI0x == "string") {
                cI0x = coS2x[cI0x] || window.frames[cI0x];
                if (!cI0x)
                    return this
            }
            var j8b = NEJ.X({
                origin: "*",
                source: im1x
            }, e8e);
            ba9R.bom9d(cI0x, j8b);
            return this
        }
    }()
})();
(function() {
    var c8g = NEJ.P, iC2x = c8g("nej.c"), a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), M9D = c8g("nej.ut.j"), R9I = {}, TL3x;
    if (!!M9D.bbL6F)
        return;
    M9D.bbL6F = NEJ.C();
    TL3x = M9D.bbL6F.O9F(M9D.Ja0x);
    TL3x.cl9c = function() {
        var ey0x = "NEJ-AJAX-DATA:"
            , Be8W = !1;
        var bcd6X = function(d8f) {
            var j8b = d8f.data;
            if (j8b.indexOf(ey0x) != 0)
                return;
            j8b = JSON.parse(j8b.replace(ey0x, ""));
            var iU2x = R9I[j8b.key];
            if (!iU2x)
                return;
            delete R9I[j8b.key];
            j8b.result = decodeURIComponent(j8b.result || "");
            iU2x.sz4D(j8b)
        };
        var bci6c = function() {
            if (!Be8W) {
                Be8W = !0;
                h8b.q8i(window, "message", bcd6X)
            }
        };
        return function() {
            this.cs9j();
            bci6c()
        }
    }();
    TL3x.ck9b = function(e8e) {
        var fC1x = e8e.request
            , iU2x = iC2x.ccc9T(fC1x.url)
            , ua6U = R9I[iU2x];
        if (k8c.el0x(ua6U)) {
            ua6U.push(this.ck9b.g8c(this, e8e));
            return
        }
        if (!ua6U) {
            R9I[iU2x] = [this.ck9b.g8c(this, e8e)];
            a7h.Ug3x({
                src: iU2x,
                visible: !1,
                onload: function(d8f) {
                    var i8a = R9I[iU2x];
                    R9I[iU2x] = h8b.U9L(d8f).contentWindow;
                    k8c.mu3x(i8a, function(dc0x) {
                        try {
                            dc0x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.zx7q = "frm-" + k8c.mP3x();
        R9I[this.zx7q] = this;
        var j8b = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fC1x);
        j8b.key = this.zx7q;
        j8b.headers = e8e.headers;
        v9m.coT2x(R9I[iU2x], {
            data: j8b
        })
    }
    ;
    TL3x.jj2x = function() {
        delete R9I[this.zx7q];
        this.sz4D({
            status: 0
        });
        return this
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, dO0x = c8g("nej.g"), a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), M9D = c8g("nej.ut.j"), R9I = {}, Ha0x;
    if (!!M9D.bcp6j)
        return;
    M9D.bcp6j = NEJ.C();
    Ha0x = M9D.bcp6j.O9F(M9D.Ja0x);
    Ha0x.cl9c = function() {
        var ey0x = "NEJ-UPLOAD-RESULT:"
            , Be8W = !1;
        var bcd6X = function(d8f) {
            var j8b = d8f.data;
            if (j8b.indexOf(ey0x) != 0)
                return;
            j8b = JSON.parse(j8b.replace(ey0x, ""));
            var iU2x = R9I[j8b.key];
            if (!iU2x)
                return;
            delete R9I[j8b.key];
            iU2x.sz4D(decodeURIComponent(j8b.result))
        };
        var bci6c = function() {
            if (!Be8W) {
                Be8W = !0;
                h8b.q8i(window, "message", bcd6X)
            }
        };
        return function() {
            this.cs9j();
            bci6c()
        }
    }();
    Ha0x.bD9u = function() {
        this.bH9y();
        a7h.cF0x(this.bcB6v);
        delete this.bcB6v;
        window.clearTimeout(this.dL0x);
        delete this.dL0x
    }
    ;
    Ha0x.sz4D = function(da0x) {
        var Q9H;
        try {
            Q9H = JSON.parse(da0x);
            this.z9q("onload", Q9H)
        } catch (e) {
            this.z9q("onerror", {
                code: dO0x.bRd6X,
                message: da0x
            })
        }
    }
    ;
    Ha0x.ck9b = function() {
        var coO2x = function() {
            var lG2x, da0x;
            try {
                var lG2x = this.bcB6v.contentWindow.document.body
                    , da0x = lG2x.innerText || lG2x.textContent
            } catch (e) {
                return
            }
            this.sz4D(da0x)
        };
        var bcM6G = function(V9M, eC0x, qV4Z) {
            v9m.bp9g(V9M, {
                type: "json",
                method: "POST",
                cookie: qV4Z,
                mode: parseInt(eC0x) || 0,
                onload: function(j8b) {
                    if (!this.dL0x)
                        return;
                    this.z9q("onuploading", j8b);
                    this.dL0x = window.setTimeout(bcM6G.g8c(this, V9M, eC0x, qV4Z), 1e3)
                }
                    .g8c(this),
                onerror: function(bQ9H) {
                    if (!this.dL0x)
                        return;
                    this.dL0x = window.setTimeout(bcM6G.g8c(this, V9M, eC0x, qV4Z), 1e3)
                }
                    .g8c(this)
            })
        };
        return function(e8e) {
            var fC1x = e8e.request
                , ny3x = e8e.headers
                , eE0x = fC1x.data
                , T9K = "fom-" + k8c.mP3x();
            R9I[T9K] = this;
            eE0x.target = T9K;
            eE0x.method = "POST";
            eE0x.enctype = dO0x.DB9s;
            eE0x.encoding = dO0x.DB9s;
            var V9M = eE0x.action || ""
                , lB2x = V9M.indexOf("?") <= 0 ? "?" : "&";
            eE0x.action = V9M + lB2x + "_proxy_=form";
            this.bcB6v = a7h.Ug3x({
                name: T9K,
                onload: function(d8f) {
                    var ua6U = h8b.U9L(d8f);
                    h8b.q8i(ua6U, "load", coO2x.g8c(this));
                    eE0x.submit();
                    var bMj4n = (eE0x.nej_query || Y9P).value;
                    if (!bMj4n)
                        return;
                    var eC0x = (eE0x.nej_mode || Y9P).value
                        , qV4Z = (eE0x.nej_cookie || Y9P).value == "true";
                    this.dL0x = window.setTimeout(bcM6G.g8c(this, bMj4n, eC0x, qV4Z), 100)
                }
                    .g8c(this)
            })
        }
    }();
    Ha0x.jj2x = function() {
        this.z9q("onerror", {
            code: dO0x.bSU7N,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , ba9R = c8g("nej.h")
        , M9D = c8g("nej.ut.j");
    ba9R.bcC6w = function() {
        return new XMLHttpRequest
    }
    ;
    ba9R.bdm6g = function(eC0x, TD3x, e8e) {
        var bv9m = !!TD3x ? {
            2: M9D.bcp6j
        } : {
            2: M9D.bbL6F,
            3: M9D.bnz8r
        };
        return (bv9m[eC0x] || M9D.ZY5d).B9s(e8e)
    }
})();
(function() {
    var c8g = NEJ.P
        , M9D = c8g("nej.p")
        , ba9R = c8g("nej.h");
    if (M9D.mq3x.trident)
        return;
    ba9R.bcC6w = function() {
        var NY1x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var coI2x = function() {
            for (var i = 0, l = NY1x.length; i < l; i++) {
                try {
                    return new ActiveXObject(NY1x[i])
                } catch (e) {}
            }
            return null
        };
        return ba9R.bcC6w.ef0x(function(d8f) {
            if (!!window.XMLHttpRequest)
                return;
            d8f.stopped = !0;
            d8f.value = coI2x()
        })
    }();
    ba9R.bdm6g = function() {
        var Eu9l = {
            0: 2,
            1: 3
        };
        return ba9R.bdm6g.ef0x(function(d8f) {
            var bg9X = d8f.args
                , eC0x = bg9X[0] || 0;
            bg9X[0] = !!bg9X[1] ? 2 : Eu9l[eC0x] || eC0x
        })
    }()
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , bm9d = NEJ.F
        , ba9R = c8g("nej.h")
        , dO0x = c8g("nej.g")
        , k8c = c8g("nej.u")
        , v9m = c8g("nej.j")
        , M9D = c8g("nej.ut.j")
        , mC3x = {}
        , IB0x = bm9d;
    v9m.jj2x = function(eI0x) {
        var R9I = mC3x[eI0x];
        if (!R9I)
            return this;
        R9I.req.jj2x();
        return this
    }
    ;
    v9m.Tx3x = function(dE0x) {
        IB0x = dE0x || bm9d;
        return this
    }
    ;
    v9m.bp9g = function() {
        var iM2x = (location.protocol + "//" + location.host).toLowerCase();
        var coH2x = function(V9M) {
            var hG1x = k8c.csK3x(V9M);
            return !!hG1x && hG1x != iM2x
        };
        var coE2x = function(ny3x) {
            return (ny3x || Y9P)[dO0x.xj7c] == dO0x.DB9s
        };
        var coB2x = function(e8e) {
            var TD3x = coE2x(e8e.headers);
            if (!coH2x(e8e.url) && !TD3x)
                return M9D.ZY5d.B9s(e8e);
            return ba9R.bdm6g(e8e.mode, TD3x, e8e)
        };
        var AS8K = function(eI0x) {
            var R9I = mC3x[eI0x];
            if (!R9I)
                return;
            if (!!R9I.req)
                R9I.req.S9J();
            delete mC3x[eI0x]
        };
        var bMh4l = function(eI0x, t8l) {
            var R9I = mC3x[eI0x];
            if (!R9I)
                return;
            AS8K(eI0x);
            try {
                var d8f = {
                    type: t8l,
                    result: arguments[2]
                };
                IB0x(d8f);
                if (!d8f.stopped)
                    (R9I[t8l] || bm9d)(d8f.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var wJ7C = function(eI0x, j8b) {
            bMh4l(eI0x, "onload", j8b)
        };
        var zc7V = function(eI0x, bQ9H) {
            bMh4l(eI0x, "onerror", bQ9H)
        };
        return function(V9M, e8e) {
            e8e = e8e || {};
            var eI0x = k8c.mP3x()
                , R9I = {
                onload: e8e.onload || bm9d,
                onerror: e8e.onerror || bm9d
            };
            mC3x[eI0x] = R9I;
            e8e.onload = wJ7C.g8c(null, eI0x);
            e8e.onerror = zc7V.g8c(null, eI0x);
            if (!!e8e.query) {
                var lB2x = V9M.indexOf("?") < 0 ? "?" : "&"
                    , bC9t = e8e.query;
                if (k8c.kg2x(bC9t))
                    bC9t = k8c.df0x(bC9t);
                if (!!bC9t)
                    V9M += lB2x + bC9t
            }
            e8e.url = V9M;
            R9I.req = coB2x(e8e);
            R9I.req.bbo6i(e8e.data);
            return eI0x
        }
    }();
    v9m.ga1x = function(eE0x, e8e) {
        var gu1x = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gu1x, e8e);
        gu1x.data = eE0x;
        gu1x.method = "POST";
        gu1x.timeout = 0;
        gu1x.headers[dO0x.xj7c] = dO0x.DB9s;
        return v9m.bp9g(eE0x.action, gu1x)
    }
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, dO0x = c8g("nej.g"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), M9D = c8g("nej.ut.j"), lw2x, jq2x = 6e4;
    if (!!M9D.PU2x)
        return;
    M9D.PU2x = NEJ.C();
    lw2x = M9D.PU2x.O9F(H9y.cz9q);
    lw2x.cl9c = function() {
        this.cs9j();
        this.Qd2x = {
            onerror: this.coz2x.g8c(this),
            onloaded: this.coy2x.g8c(this)
        };
        if (!this.constructor.P9G)
            this.constructor.P9G = {
                loaded: {}
            }
    }
    ;
    lw2x.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.EO9F = e8e.version;
        this.bfA7t = e8e.timeout;
        this.Qd2x.version = this.EO9F;
        this.Qd2x.timeout = this.bfA7t
    }
    ;
    lw2x.bMg4k = function(J9A) {
        delete this.constructor.P9G[J9A]
    }
    ;
    lw2x.yz7s = function(J9A) {
        return this.constructor.P9G[J9A]
    }
    ;
    lw2x.bMd4h = function(J9A, j8b) {
        this.constructor.P9G[J9A] = j8b
    }
    ;
    lw2x.SA3x = bm9d;
    lw2x.bMb4f = function(fC1x) {
        h8b.iB2x(fC1x)
    }
    ;
    lw2x.bgi7b = function(fC1x) {
        fC1x.src = this.kK2x;
        document.head.appendChild(fC1x)
    }
    ;
    lw2x.yj7c = function() {
        var R9I = this.yz7s(this.kK2x);
        if (!R9I)
            return;
        window.clearTimeout(R9I.timer);
        this.bMb4f(R9I.request);
        delete R9I.bind;
        delete R9I.timer;
        delete R9I.request;
        this.bMg4k(this.kK2x);
        this.yz7s("loaded")[this.kK2x] = !0
    }
    ;
    lw2x.RY2x = function(T9K) {
        var R9I = this.yz7s(this.kK2x);
        if (!R9I)
            return;
        var i8a = R9I.bind;
        this.yj7c();
        if (!!i8a && i8a.length > 0) {
            var cq9h;
            while (i8a.length) {
                cq9h = i8a.shift();
                try {
                    cq9h.z9q(T9K, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cq9h.S9J()
            }
        }
    }
    ;
    lw2x.eo0x = function(bQ9H) {
        this.RY2x("onerror", bQ9H)
    }
    ;
    lw2x.bLY4c = function() {
        this.RY2x("onloaded")
    }
    ;
    lw2x.cnY1x = function(V9M) {
        this.constructor.B9s(this.Qd2x).Ic0x(V9M)
    }
    ;
    lw2x.bLW4a = function(bQ9H) {
        var R9I = this.yz7s(this.uK6E);
        if (!R9I)
            return;
        if (!!bQ9H)
            R9I.error++;
        R9I.loaded++;
        if (R9I.loaded < R9I.total)
            return;
        this.bMg4k(this.uK6E);
        this.z9q(R9I.error > 0 ? "onerror" : "onloaded")
    }
    ;
    lw2x.coz2x = function(bQ9H) {
        this.bLW4a(!0)
    }
    ;
    lw2x.coy2x = function() {
        this.bLW4a()
    }
    ;
    lw2x.Ic0x = function(V9M) {
        V9M = k8c.bdo6i(V9M);
        if (!V9M) {
            this.z9q("onerror", {
                code: dO0x.bgR7K,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kK2x = V9M;
        if (!!this.EO9F)
            this.kK2x += (this.kK2x.indexOf("?") < 0 ? "?" : "&") + this.EO9F;
        if (this.yz7s("loaded")[this.kK2x]) {
            try {
                this.z9q("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S9J();
            return this
        }
        var R9I = this.yz7s(this.kK2x), fC1x;
        if (!!R9I) {
            R9I.bind.unshift(this);
            R9I.timer = window.clearTimeout(R9I.timer)
        } else {
            fC1x = this.SA3x();
            R9I = {
                request: fC1x,
                bind: [this]
            };
            this.bMd4h(this.kK2x, R9I);
            h8b.q8i(fC1x, "load", this.bLY4c.g8c(this));
            h8b.q8i(fC1x, "error", this.eo0x.g8c(this, {
                code: dO0x.bkw8o,
                message: "无法加载指定资源文件[" + this.kK2x + "]！"
            }))
        }
        if (this.bfA7t != 0)
            R9I.timer = window.setTimeout(this.eo0x.g8c(this, {
                code: dO0x.bvT0x,
                message: "指定资源文件[" + this.kK2x + "]载入超时！"
            }), this.bfA7t || jq2x);
        if (!!fC1x)
            this.bgi7b(fC1x);
        this.z9q("onloading");
        return this
    }
    ;
    lw2x.bLV4Z = function(i8a) {
        if (!i8a || !i8a.length) {
            this.z9q("onerror", {
                code: dO0x.bgR7K,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.uK6E = k8c.mP3x();
        var R9I = {
            error: 0,
            loaded: 0,
            total: i8a.length
        };
        this.bMd4h(this.uK6E, R9I);
        for (var i = 0, l = i8a.length; i < l; i++) {
            if (!i8a[i]) {
                R9I.total--;
                continue
            }
            this.cnY1x(i8a[i])
        }
        this.z9q("onloading");
        return this
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), ba9R = c8g("nej.h"), M9D = c8g("nej.ut.j"), Rc2x;
    if (!!M9D.bhg7Z)
        return;
    M9D.bhg7Z = NEJ.C();
    Rc2x = M9D.bhg7Z.O9F(M9D.PU2x);
    Rc2x.SA3x = function() {
        var fa0x = a7h.cU0x("iframe");
        fa0x.width = 0;
        fa0x.height = 0;
        fa0x.style.display = "none";
        return fa0x
    }
    ;
    Rc2x.bgi7b = function(fC1x) {
        fC1x.src = this.kK2x;
        document.body.appendChild(fC1x)
    }
    ;
    Rc2x.eo0x = function(bQ9H) {
        var fa0x = (this.yz7s(this.kK2x) || Y9P).request;
        this.RY2x("onerror", bQ9H);
        ba9R.UU3x(fa0x)
    }
    ;
    Rc2x.bLY4c = function() {
        var lG2x = null
            , fa0x = (this.yz7s(this.kK2x) || Y9P).request;
        try {
            lG2x = fa0x.contentWindow.document.body
        } catch (ex) {}
        this.RY2x("onloaded", lG2x);
        ba9R.UU3x(fa0x)
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), M9D = c8g("nej.ut.j"), bhh7a;
    if (!!M9D.RG2x)
        return;
    M9D.RG2x = NEJ.C();
    bhh7a = M9D.RG2x.O9F(M9D.PU2x);
    bhh7a.SA3x = function() {
        return a7h.cU0x("link")
    }
    ;
    bhh7a.bgi7b = function(fC1x) {
        fC1x.href = this.kK2x;
        document.head.appendChild(fC1x)
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), M9D = c8g("nej.ut.j"), RF2x;
    if (!!M9D.Rv2x)
        return;
    M9D.Rv2x = NEJ.C();
    RF2x = M9D.Rv2x.O9F(M9D.PU2x);
    RF2x.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.bLU4Y = e8e.async;
        this.bic7V = e8e.charset;
        this.Qd2x.async = !1;
        this.Qd2x.charset = this.bic7V
    }
    ;
    RF2x.SA3x = function() {
        var fC1x = a7h.cU0x("script");
        if (this.bLU4Y != null)
            fC1x.async = !!this.bLU4Y;
        if (this.bic7V != null)
            fC1x.charset = this.bic7V;
        return fC1x
    }
    ;
    RF2x.bMb4f = function(fC1x) {
        a7h.cF0x(fC1x)
    }
})();
(function() {
    var c8g = NEJ.P
        , v9m = c8g("nej.j")
        , M9D = c8g("nej.ut.j");
    v9m.cnO1x = function(V9M, e8e) {
        M9D.Rv2x.B9s(e8e).Ic0x(V9M);
        return this
    }
    ;
    v9m.cnN1x = function(i8a, e8e) {
        M9D.Rv2x.B9s(e8e).bLV4Z(i8a);
        return this
    }
    ;
    v9m.cty3x = function(V9M, e8e) {
        M9D.RG2x.B9s(e8e).Ic0x(V9M);
        return this
    }
    ;
    v9m.cnL1x = function(i8a, e8e) {
        M9D.RG2x.B9s(e8e).bLV4Z(i8a);
        return this
    }
    ;
    v9m.bLR4V = function(V9M, e8e) {
        M9D.bhg7Z.B9s(e8e).Ic0x(V9M);
        return this
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , k8c = c8g("nej.u")
        , v9m = c8g("nej.j")
        , H9y = c8g("nej.ut")
        , R9I = {}
        , rf4j = +(new Date) + "-";
    a7h.cE0x = function() {
        var ct9k = 0;
        var Rg2x = function() {
            if (ct9k > 0)
                return;
            ct9k = 0;
            h8b.z9q(document, "templateready");
            h8b.iB2x(document, "templateready")
        };
        var RO2x = function(fF1x, e8e) {
            var dv0x = a7h.u8m(fF1x, "src");
            if (!dv0x)
                return;
            e8e = e8e || Y9P;
            var fv1x = e8e.root;
            if (!fv1x) {
                fv1x = fF1x.ownerDocument.location.href
            } else {
                fv1x = k8c.bdo6i(fv1x)
            }
            dv0x = dv0x.split(",");
            k8c.be9V(dv0x, function(A9r, s8k, i8a) {
                i8a[s8k] = k8c.bdo6i(A9r, fv1x)
            });
            return dv0x
        };
        var cnE1x = function(fF1x, e8e) {
            if (!fF1x)
                return;
            var dv0x = RO2x(fF1x, e8e);
            if (!!dv0x)
                v9m.cnL1x(dv0x, {
                    version: a7h.u8m(fF1x, "version")
                });
            a7h.bJA4E(fF1x.value)
        };
        var cnD1x = function(A9r) {
            ct9k--;
            a7h.bJB4F(A9r);
            Rg2x()
        };
        var cnC1x = function(fF1x, e8e) {
            if (!fF1x)
                return;
            var dv0x = RO2x(fF1x, e8e)
                , eL0x = fF1x.value;
            if (!!dv0x) {
                ct9k++;
                var e8e = {
                    version: a7h.u8m(fF1x, "version"),
                    onloaded: cnD1x.g8c(null, eL0x)
                };
                window.setTimeout(v9m.cnN1x.g8c(v9m, dv0x, e8e), 0);
                return
            }
            a7h.bJB4F(eL0x)
        };
        var cnB1x = function(lG2x) {
            ct9k--;
            a7h.cE0x(lG2x);
            Rg2x()
        };
        var cnA1x = function(fF1x, e8e) {
            if (!fF1x)
                return;
            var dv0x = RO2x(fF1x, e8e)[0];
            if (!!dv0x) {
                ct9k++;
                var e8e = {
                    version: a7h.u8m(fF1x, "version"),
                    onloaded: cnB1x
                };
                window.setTimeout(v9m.bLR4V.g8c(v9m, dv0x, e8e), 0)
            }
        };
        var cnx1x = function(C9t, da0x) {
            ct9k--;
            a7h.FB9s(C9t, da0x || "");
            Rg2x()
        };
        var cnw1x = function(fF1x, e8e) {
            if (!fF1x || !fF1x.id)
                return;
            var C9t = fF1x.id
                , dv0x = RO2x(fF1x, e8e)[0];
            if (!!dv0x) {
                ct9k++;
                var V9M = dv0x + (dv0x.indexOf("?") < 0 ? "?" : "&") + (a7h.u8m(fF1x, "version") || "")
                    , e8e = {
                    type: "text",
                    method: "GET",
                    onload: cnx1x.g8c(null, C9t)
                };
                window.setTimeout(v9m.bp9g.g8c(v9m, V9M, e8e), 0)
            }
        };
        var cnn1x = function(f8d, e8e) {
            var t8l = f8d.name.toLowerCase();
            switch (t8l) {
                case "jst":
                    a7h.em0x(f8d, !0);
                    return;
                case "txt":
                    a7h.FB9s(f8d.id, f8d.value || "");
                    return;
                case "ntp":
                    a7h.hM1x(f8d.value || "", f8d.id);
                    return;
                case "js":
                    cnC1x(f8d, e8e);
                    return;
                case "css":
                    cnE1x(f8d, e8e);
                    return;
                case "html":
                    cnA1x(f8d, e8e);
                    return;
                case "res":
                    cnw1x(f8d, e8e);
                    return
            }
        };
        H9y.ft1x.B9s({
            element: document,
            event: "templateready",
            oneventadd: Rg2x
        });
        return function(E9v, e8e) {
            E9v = a7h.x9o(E9v);
            if (!!E9v) {
                var i8a = E9v.tagName == "TEXTAREA" ? [E9v] : E9v.getElementsByTagName("textarea");
                k8c.be9V(i8a, function(f8d) {
                    cnn1x(f8d, e8e)
                });
                a7h.cF0x(E9v, !0)
            }
            Rg2x();
            return this
        }
    }();
    a7h.FB9s = function(J9A, A9r) {
        R9I[J9A] = A9r || "";
        return this
    }
    ;
    a7h.hX1x = function(J9A) {
        return R9I[J9A] || ""
    }
    ;
    a7h.hM1x = function(E9v, J9A) {
        J9A = J9A || k8c.mP3x();
        E9v = a7h.x9o(E9v) || E9v;
        a7h.FB9s(rf4j + J9A, E9v);
        a7h.mc3x(E9v);
        return J9A
    }
    ;
    a7h.dq0x = function(J9A) {
        if (!J9A)
            return null;
        J9A = rf4j + J9A;
        var A9r = a7h.hX1x(J9A);
        if (!A9r)
            return null;
        if (k8c.fe1x(A9r)) {
            A9r = a7h.mT3x(A9r);
            a7h.FB9s(J9A, A9r)
        }
        return A9r.cloneNode(!0)
    }
    ;
    a7h.yP7I = function() {
        var IB0x = function(A9r, J9A) {
            return J9A == "offset" || J9A == "limit"
        };
        return function(i8a, r8j, e8e) {
            var bs9j = [];
            if (!i8a || !i8a.length || !r8j)
                return bs9j;
            e8e = e8e || Y9P;
            var dF0x = i8a.length
                , iQ2x = parseInt(e8e.offset) || 0
                , gy1x = Math.min(dF0x, iQ2x + (parseInt(e8e.limit) || dF0x))
                , cm9d = {
                total: i8a.length,
                range: [iQ2x, gy1x]
            };
            NEJ.X(cm9d, e8e, IB0x);
            for (var i = iQ2x, cq9h; i < gy1x; i++) {
                cm9d.index = i;
                cm9d.data = i8a[i];
                cq9h = r8j.B9s(cm9d);
                var C9t = cq9h.Cg8Y();
                R9I[C9t] = cq9h;
                cq9h.S9J = cq9h.S9J.ef0x(function(C9t, cq9h) {
                    delete R9I[C9t];
                    delete cq9h.S9J
                }
                    .g8c(null, C9t, cq9h));
                bs9j.push(cq9h)
            }
            return bs9j
        }
    }();
    a7h.bLI4M = function(C9t) {
        return R9I[C9t]
    }
    ;
    a7h.ctz3x = function(dD0x, e8e) {
        e8e = e8e || Y9P;
        a7h.cE0x(e8e.tid || "template-box");
        h8b.q8i(document, "templateready", function() {
            dD0x.B9s().z9q("onshow", e8e)
        })
    }
    ;
    c8g("dbg").dumpTC = function() {
        return R9I
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), M9D = c8g("nej.ui"), b8h;
    if (!!M9D.et0x)
        return;
    M9D.et0x = NEJ.C();
    b8h = M9D.et0x.O9F(H9y.cz9q);
    b8h.cl9c = function() {
        this.cs9j();
        a7h.bIU3x();
        this.bZ9Q();
        this.bR9I()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.cni1x(e8e.clazz);
        this.bLG4K(e8e.parent)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        this.bLF4J();
        delete this.fE1x;
        a7h.mc3x(this.o8g);
        a7h.w9n(this.o8g, this.blv8n);
        delete this.blv8n
    }
    ;
    b8h.bZ9Q = bm9d;
    b8h.bR9I = function() {
        if (!this.ca9R)
            this.SL3x();
        this.o8g = a7h.dq0x(this.ca9R);
        if (!this.o8g)
            this.o8g = a7h.cU0x("div", this.lb2x);
        a7h.y9p(this.o8g, this.lb2x)
    }
    ;
    b8h.SL3x = bm9d;
    b8h.cni1x = function(dJ0x) {
        this.blv8n = dJ0x || "";
        a7h.y9p(this.o8g, this.blv8n)
    }
    ;
    b8h.cmY1x = function() {
        if (!this.lb2x)
            return;
        a7h.y9p(this.fE1x, this.lb2x + "-parent")
    }
    ;
    b8h.bLF4J = function() {
        if (!this.lb2x)
            return;
        a7h.w9n(this.fE1x, this.lb2x + "-parent")
    }
    ;
    b8h.kA2x = function() {
        return this.o8g
    }
    ;
    b8h.bLG4K = function(bA9r) {
        if (!this.o8g)
            return this;
        this.bLF4J();
        if (k8c.gf1x(bA9r)) {
            this.fE1x = bA9r(this.o8g)
        } else {
            this.fE1x = a7h.x9o(bA9r);
            if (!!this.fE1x)
                this.fE1x.appendChild(this.o8g)
        }
        this.cmY1x();
        return this
    }
    ;
    b8h.N9E = function() {
        if (!this.fE1x || !this.o8g || this.o8g.parentNode == this.fE1x)
            return this;
        this.fE1x.appendChild(this.o8g);
        return this
    }
    ;
    b8h.bq9h = function() {
        a7h.mc3x(this.o8g);
        return this
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), k8c = c8g("nej.u"), ba9R = c8g("nej.h"), M9D = c8g("nej.ui"), ut6n, bLC4G;
    if (!!M9D.PS2x)
        return;
    M9D.PS2x = NEJ.C();
    ut6n = M9D.PS2x.O9F(M9D.et0x);
    bLC4G = M9D.PS2x.cg9X;
    ut6n.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.ux6r("oncontentready", e8e.oncontentready || this.cmU1x.g8c(this));
        this.cmR1x = !!e8e.nohack;
        this.cmQ1x = !!e8e.destroyable;
        this.Iw0x(e8e.content)
    }
    ;
    ut6n.bD9u = function() {
        this.z9q("onbeforerecycle");
        this.bH9y();
        this.SW3x();
        this.Iw0x("");
        a7h.fz1x(this.o8g, {
            top: "",
            left: ""
        })
    }
    ;
    ut6n.cmU1x = bm9d;
    ut6n.Ip0x = bm9d;
    ut6n.SW3x = function() {
        a7h.mc3x(this.o8g);
        if (!!this.mK3x) {
            this.mK3x = ba9R.bjD8v(this.o8g);
            delete this.mK3x
        }
    }
    ;
    ut6n.Iw0x = function(bi9Z) {
        if (!this.o8g || !this.xU7N || bi9Z == null)
            return this;
        bi9Z = bi9Z || "";
        k8c.fe1x(bi9Z) ? this.xU7N.innerHTML = bi9Z : this.xU7N.appendChild(bi9Z);
        this.z9q("oncontentready", this.xU7N);
        return this
    }
    ;
    ut6n.fU1x = function(bj9a) {
        var A9r = bj9a.top;
        if (A9r != null) {
            A9r += "px";
            a7h.X9O(this.o8g, "top", A9r);
            a7h.X9O(this.mK3x, "top", A9r)
        }
        var A9r = bj9a.left;
        if (A9r != null) {
            A9r += "px";
            a7h.X9O(this.o8g, "left", A9r);
            a7h.X9O(this.mK3x, "left", A9r)
        }
        return this
    }
    ;
    ut6n.N9E = function() {
        a7h.X9O(this.o8g, "visibility", "hidden");
        bLC4G.N9E.apply(this, arguments);
        this.Ip0x();
        a7h.X9O(this.o8g, "visibility", "");
        if (!this.cmR1x) {
            this.mK3x = ba9R.mK3x(this.o8g)
        }
        return this
    }
    ;
    ut6n.bq9h = function() {
        this.cmQ1x ? this.S9J() : this.SW3x();
        return this
    }
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, k8c = c8g("nej.u"), a7h = c8g("nej.e"), M9D = c8g("nej.ui"), xR7K;
    if (!!M9D.Th3x)
        return;
    M9D.Th3x = NEJ.C();
    xR7K = M9D.Th3x.O9F(M9D.et0x);
    xR7K.bk9b = function(e8e) {
        this.Pq2x();
        this.bl9c(this.cmP1x(e8e));
        this.bS9J.onbeforerecycle = this.S9J.g8c(this);
        this.nn3x = this.bnZ9Q()
    }
    ;
    xR7K.bD9u = function() {
        this.z9q("onbeforerecycle");
        this.bH9y();
        delete this.bS9J;
        a7h.mc3x(this.o8g);
        var zV8N = this.nn3x;
        if (!!zV8N) {
            delete this.nn3x;
            zV8N.S9J()
        }
    }
    ;
    xR7K.bnZ9Q = bm9d;
    xR7K.cmP1x = function(e8e) {
        var m8e = {};
        k8c.ed0x(e8e, function(r8j, J9A) {
            this.bS9J.hasOwnProperty(J9A) ? this.bS9J[J9A] = r8j : m8e[J9A] = r8j
        }, this);
        return m8e
    }
    ;
    xR7K.Pq2x = function() {
        this.bS9J = {
            clazz: "",
            parent: null,
            content: this.o8g,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
    ;
    xR7K.N9E = function() {
        if (!!this.nn3x)
            this.nn3x.N9E();
        this.z9q("onaftershow");
        return this
    }
    ;
    xR7K.bq9h = function() {
        if (!!this.nn3x)
            this.nn3x.bq9h();
        return this
    }
})();
(function() {
    var c8g = NEJ.P, dO0x = c8g("nej.g"), ba9R = c8g("nej.h"), a7h = c8g("nej.e"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), M9D = c8g("nej.ui"), Pg2x, bLB4F;
    if (!!M9D.FP9G)
        return;
    var hP1x = a7h.rO4S(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dO0x.bpj9a + ");}");
    M9D.FP9G = NEJ.C();
    Pg2x = M9D.FP9G.O9F(M9D.et0x);
    bLB4F = M9D.FP9G.cg9X;
    Pg2x.bk9b = function(e8e) {
        this.bl9c(e8e);
        var bi9Z = e8e.content || "&nbsp;";
        k8c.fe1x(bi9Z) ? this.o8g.innerHTML = bi9Z : this.o8g.appendChild(bi9Z)
    }
    ;
    Pg2x.bD9u = function() {
        this.bH9y();
        this.o8g.innerHTML = "&nbsp;"
    }
    ;
    Pg2x.bZ9Q = function() {
        this.lb2x = hP1x
    }
    ;
    Pg2x.N9E = function() {
        ba9R.biX7Q(this.o8g);
        bLB4F.N9E.apply(this, arguments);
        return this
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), M9D = c8g("nej.ut"), uY6S;
    if (!!M9D.wh6b)
        return;
    M9D.wh6b = NEJ.C();
    uY6S = M9D.wh6b.O9F(M9D.cz9q);
    uY6S.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.cmN1x = !!e8e.overflow;
        this.o8g = a7h.x9o(e8e.body);
        this.zq7j = a7h.x9o(e8e.view) || a7h.bEo2x(this.o8g);
        this.bLA4E = a7h.x9o(e8e.mbar) || this.o8g;
        this.TS3x = parseInt(e8e.direction) || 0;
        if (!!e8e.isRelative) {
            this.o8g.style.position = "relative";
            this.bpk9b = true;
            this.bpS9J()
        }
        this.bU9L([[document, "mouseup", this.bqh9Y.g8c(this)], [document, "mousemove", this.bqm9d.g8c(this)], [this.bLA4E, "mousedown", this.OI2x.g8c(this)]])
    }
    ;
    uY6S.bpS9J = function() {
        if (!!this.bpk9b) {
            this.EY9P = a7h.hL1x(this.o8g, this.zq7j);
            this.EY9P.x -= parseInt(a7h.db0x(this.o8g, "left")) || 0;
            this.EY9P.y -= parseInt(a7h.db0x(this.o8g, "top")) || 0
        }
    }
    ;
    uY6S.bD9u = function() {
        this.bH9y();
        delete this.o8g;
        delete this.bLA4E;
        delete this.zq7j
    }
    ;
    uY6S.bqM9D = function() {
        return {
            x: Math.max(this.zq7j.clientWidth, this.zq7j.scrollWidth) - this.o8g.offsetWidth,
            y: Math.max(this.zq7j.clientHeight, this.zq7j.scrollHeight) - this.o8g.offsetHeight
        }
    }
    ;
    uY6S.OI2x = function(d8f) {
        h8b.bh9Y(d8f);
        if (!!this.hV1x)
            return;
        this.hV1x = {
            x: h8b.kv2x(d8f),
            y: h8b.nO3x(d8f)
        };
        this.bLz4D = this.bqM9D();
        this.z9q("ondragstart", d8f)
    }
    ;
    uY6S.bqm9d = function(d8f) {
        if (!this.hV1x)
            return;
        var bj9a = {
            x: h8b.kv2x(d8f),
            y: h8b.nO3x(d8f)
        };
        var sb4f = bj9a.x - this.hV1x.x
            , sf4j = bj9a.y - this.hV1x.y
            , A9r = {
            top: (parseInt(a7h.db0x(this.o8g, "top")) || 0) + sf4j,
            left: (parseInt(a7h.db0x(this.o8g, "left")) || 0) + sb4f
        };
        if (this.bpk9b) {
            this.bpS9J();
            A9r.top = A9r.top + this.EY9P.y;
            A9r.left = A9r.left + this.EY9P.x
        }
        this.hV1x = bj9a;
        this.fU1x(A9r)
    }
    ;
    uY6S.bqh9Y = function(d8f) {
        if (!this.hV1x)
            return;
        delete this.bLz4D;
        delete this.hV1x;
        this.z9q("ondragend", this.baD5I())
    }
    ;
    uY6S.fU1x = function(d8f) {
        if (!this.cmN1x) {
            var bLy4C = this.bLz4D || this.bqM9D();
            d8f.top = Math.min(bLy4C.y, Math.max(0, d8f.top));
            d8f.left = Math.min(bLy4C.x, Math.max(0, d8f.left))
        }
        var cd9U = this.o8g.style;
        if (this.bpk9b) {
            this.bpS9J();
            d8f.top = d8f.top - this.EY9P.y;
            d8f.left = d8f.left - this.EY9P.x
        }
        if (this.TS3x == 0 || this.TS3x == 2)
            cd9U.top = d8f.top + "px";
        if (this.TS3x == 0 || this.TS3x == 1)
            cd9U.left = d8f.left + "px";
        this.z9q("onchange", d8f);
        return this
    }
    ;
    uY6S.baD5I = function() {
        return {
            left: parseInt(a7h.db0x(this.o8g, "left")) || 0,
            top: parseInt(a7h.db0x(this.o8g, "top")) || 0
        }
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = NEJ.P("nej.e"), h8b = NEJ.P("nej.v"), k8c = NEJ.P("nej.u"), H9y = NEJ.P("nej.ut"), M9D = NEJ.P("nej.ui"), hP1x, gc1x, b8h, K9B;
    if (!!M9D.Un3x)
        return;
    M9D.Un3x = NEJ.C();
    b8h = M9D.Un3x.O9F(M9D.PS2x);
    K9B = M9D.Un3x.cg9X;
    b8h.cl9c = function() {
        this.qW4a = {};
        this.jI2x = {
            onchange: this.bqm9d.g8c(this)
        };
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.cmC1x(e8e.mask);
        this.cmB1x(e8e.align);
        this.yw7p(e8e.title);
        if (!e8e.draggable)
            return;
        this.iY2x = H9y.wh6b.B9s(this.jI2x)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        delete this.oO3x;
        delete this.On1x;
        if (!!this.yo7h) {
            this.yo7h.S9J();
            delete this.yo7h
        }
        if (!!this.iY2x) {
            this.iY2x.S9J();
            delete this.iY2x
        }
    }
    ;
    b8h.bZ9Q = function() {
        this.lb2x = hP1x;
        this.ca9R = gc1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.cQ0x(this.o8g);
        this.xU7N = i8a[1];
        this.jI2x.mbar = i8a[0];
        this.jI2x.body = this.o8g;
        h8b.q8i(i8a[2], "mousedown", this.cmy1x.g8c(this));
        h8b.q8i(this.jI2x.mbar, "mousedown", this.OI2x.g8c(this));
        this.bLu4y = a7h.cQ0x(this.jI2x.mbar)[0]
    }
    ;
    b8h.cmy1x = function(d8f) {
        h8b.bh9Y(d8f);
        this.z9q("onclose", d8f);
        if (!d8f.stopped) {
            this.bq9h()
        }
    }
    ;
    b8h.OI2x = function(d8f) {
        h8b.z9q(document, "click")
    }
    ;
    b8h.bqm9d = function(d8f) {
        if (!this.mK3x)
            return;
        a7h.fz1x(this.mK3x, {
            top: d8f.top + "px",
            left: d8f.left + "px"
        })
    }
    ;
    b8h.Ip0x = function() {
        var eH0x = [function() {
            return 0
        }
            , function(ng3x, CR8J, bj9a, J9A) {
                if (J9A == "top" && window.top != window.self) {
                    var UP3x = 0
                        , CW8O = 0;
                    if (top.g_topBarHeight)
                        UP3x = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight)
                        CW8O = top.g_bottomBarHeight;
                    if (ng3x.top <= UP3x) {
                        var bcv6p = Math.max(0, (CR8J.height - (UP3x - ng3x.top) - CW8O - bj9a.height) / 2);
                        return bcv6p + UP3x
                    } else {
                        var bcv6p = Math.max(0, (CR8J.height - CW8O - bj9a.height) / 2);
                        return bcv6p + ng3x.top
                    }
                }
                return Math.max(0, ng3x[J9A] + (CR8J[hF1x[J9A]] - bj9a[hF1x[J9A]]) / 2)
            }
            , function(ng3x, CR8J, bj9a, J9A) {
                return ng3x[J9A] + (CR8J[hF1x[J9A]] - bj9a[hF1x[J9A]])
            }
        ]
            , cmo1x = ["left", "top"]
            , hF1x = {
            left: "width",
            top: "height"
        };
        return function() {
            var A9r = {}
                , cd9U = this.o8g.style
                , iE2x = a7h.oq3x()
                , ng3x = {
                left: iE2x.scrollLeft,
                top: iE2x.scrollTop
            }
                , CR8J = {
                width: iE2x.clientWidth,
                height: iE2x.clientHeight
            }
                , bj9a = {
                width: this.o8g.offsetWidth,
                height: this.o8g.offsetHeight
            }
                , dh0x = {
                left: iE2x.clientWidth - this.o8g.offsetWidth,
                top: iE2x.clientHeight - this.o8g.offsetHeight
            };
            k8c.be9V(cmo1x, function(J9A, s8k) {
                var dc0x = eH0x[this.oO3x[s8k]];
                if (!dc0x)
                    return;
                A9r[J9A] = dc0x(ng3x, CR8J, bj9a, J9A)
            }, this);
            this.fU1x(A9r)
        }
    }();
    b8h.cmm1x = function() {
        if (!this.yo7h) {
            if (!this.On1x)
                return;
            this.qW4a.parent = this.fE1x;
            this.yo7h = this.On1x.B9s(this.qW4a)
        }
        this.yo7h.N9E()
    }
    ;
    b8h.SW3x = function() {
        if (!!this.yo7h)
            this.yo7h.bq9h();
        K9B.SW3x.apply(this, arguments)
    }
    ;
    b8h.cmC1x = function(km2x) {
        if (!!km2x) {
            if (km2x instanceof M9D.FP9G) {
                this.yo7h = km2x;
                return
            }
            if (k8c.gf1x(km2x)) {
                this.On1x = km2x;
                return
            }
            this.On1x = M9D.FP9G;
            if (k8c.fe1x(km2x))
                this.qW4a.clazz = km2x;
            return
        }
        this.On1x = null
    }
    ;
    b8h.yw7p = function(eG0x, ds0x) {
        if (!!this.bLu4y) {
            var ZA5F = !ds0x ? "innerText" : "innerHTML";
            this.bLu4y[ZA5F] = eG0x || "标题"
        }
        return this
    }
    ;
    b8h.cmB1x = function() {
        var cP0x = /\s+/
            , cml1x = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        }
            , cmk1x = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(mJ3x) {
            this.oO3x = (mJ3x || "").split(cP0x);
            var dP0x = cml1x[this.oO3x[0]];
            if (dP0x == null)
                dP0x = 1;
            this.oO3x[0] = dP0x;
            var dP0x = cmk1x[this.oO3x[1]];
            if (dP0x == null)
                dP0x = 1;
            this.oO3x[1] = dP0x;
            return this
        }
    }();
    b8h.N9E = function() {
        K9B.N9E.apply(this, arguments);
        this.cmm1x();
        return this
    }
    ;
    hP1x = a7h.rO4S(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gc1x = a7h.hM1x('<div class="' + hP1x + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c8g = NEJ.P, k8c = c8g("nej.u"), M9D = c8g("nej.ui"), bcS6M;
    if (!!M9D.VI3x)
        return;
    M9D.VI3x = NEJ.C();
    bcS6M = M9D.VI3x.O9F(M9D.Th3x);
    bcS6M.bnZ9Q = function() {
        return M9D.Un3x.B9s(this.bS9J)
    }
    ;
    bcS6M.Pq2x = function() {
        M9D.VI3x.cg9X.Pq2x.apply(this, arguments);
        this.bS9J.mask = null;
        this.bS9J.title = "标题";
        this.bS9J.align = "";
        this.bS9J.draggable = !1;
        this.bS9J.onclose = null
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), bd9U = c8g("nej.ui"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.dV0x = NEJ.C();
    b8h = n8f.dV0x.O9F(bd9U.VI3x);
    b8h.bk9b = function(e8e) {
        e8e.clazz = "m-layer z-show " + (e8e.clazz || "");
        e8e.nohack = true;
        e8e.draggable = true;
        this.bl9c(e8e)
    }
    ;
    b8h.dy0x = function(f8d, bF9w) {
        if (!f8d)
            return;
        a7h.X9O(f8d, "display", !bF9w ? "none" : "");
        f8d.lastChild.innerText = bF9w || ""
    }
    ;
    b8h.dN0x = function(gh1x, cC0x, NC1x, Nx1x) {
        var dD0x = "js-lock";
        if (cC0x === undefined)
            return a7h.by9p(gh1x, dD0x);
        !cC0x ? a7h.w9n(gh1x, dD0x) : a7h.y9p(gh1x, dD0x);
        gh1x.firstChild.innerText = !cC0x ? NC1x : Nx1x
    }
    ;
    n8f.dV0x.N9E = function(e8e) {
        e8e = e8e || {};
        if (e8e.mask === undefined)
            e8e.mask = "m-mask";
        if (e8e.parent === undefined)
            e8e.parent = document.body;
        if (e8e.draggable === undefined)
            e8e.draggable = true;
        !!this.eJ0x && this.eJ0x.S9J();
        this.eJ0x = this.B9s(e8e);
        this.eJ0x.N9E(e8e);
        return this.eJ0x
    }
    ;
    n8f.dV0x.bq9h = function() {
        !!this.eJ0x && this.eJ0x.S9J()
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.bdO6I = NEJ.C();
    b8h = n8f.bdO6I.O9F(n8f.dV0x);
    K9B = n8f.bdO6I.cg9X;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        if (e8e.bubble === undefined)
            e8e.bubble = true;
        this.Np1x = e8e.bubble;
        this.pM4Q = e8e.message || ""
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = a7h.hM1x('<div class="lyct f-cb f-tc"></div>')
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        h8b.q8i(this.o8g, "click", this.cx9o.g8c(this))
    }
    ;
    b8h.cx9o = function(d8f) {
        var f8d = h8b.U9L(d8f, "d:action");
        if (!f8d)
            return;
        if (f8d.href)
            h8b.ce9V(d8f);
        if (a7h.u8m(f8d, "action") == "close")
            this.bq9h();
        if (this.Np1x === !1)
            h8b.rD4H(d8f);
        this.z9q("onaction", a7h.u8m(f8d, "action"))
    }
    ;
    b8h.N9E = function() {
        K9B.N9E.call(this);
        this.o8g.innerHTML = this.pM4Q
    }
    ;
    var fX1x = a7h.em0x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l8d.mm3x = function() {
        var eZ0x;
        var cq9h;
        var bef6Z = function(ge1x, W9N) {
            if (k8c.gf1x(ge1x, "function") && ge1x(W9N) != -1)
                cq9h.S9J()
        };
        var yc7V = function() {
            !!cq9h && cq9h.bq9h()
        };
        return function(e8e) {
            clearTimeout(eZ0x);
            e8e = e8e || {};
            e8e.title = e8e.title || "提示";
            e8e.clazz = e8e.clazz || "";
            e8e.parent = e8e.parent || document.body;
            e8e.buttons = e8e.buttons || [];
            e8e.message = a7h.bP9G(fX1x, e8e);
            e8e.onaction = bef6Z.g8c(null, e8e.action);
            if (e8e.mask === undefined)
                e8e.mask = true;
            if (e8e.draggable === undefined)
                e8e.draggable = true;
            !!cq9h && cq9h.S9J();
            cq9h = n8f.bdO6I.B9s(e8e);
            cq9h.N9E();
            if (e8e.autoclose)
                eZ0x = setTimeout(yc7V.g8c(null), 2e3);
            return cq9h
        }
    }();
    l8d.fc0x = function(e8e) {
        e8e = e8e || {};
        e8e.clazz = e8e.clazz || "m-layer-w1";
        e8e.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e8e.btntxt || "确定"
        }];
        var cq9h = l8d.mm3x(e8e);
        return cq9h
    }
    ;
    l8d.gP1x = function(e8e) {
        e8e = e8e || {};
        e8e.clazz = e8e.clazz || "m-layer-w2";
        e8e.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e8e.btnok || "确定",
            style: e8e.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e8e.btncc || "取消",
            style: e8e.ccstyle || ""
        }];
        var cq9h = l8d.mm3x(e8e);
        return cq9h
    }
})();
(function() {
    var c8g = NEJ.P
        , bm9d = NEJ.F
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , k8c = c8g("nej.u");
    a7h.cmj1x = function() {
        var fZ1x = /[\r\n]/gi
            , R9I = {};
        var cmi1x = function(cM0x) {
            return (cM0x || "").replace(fZ1x, "aa").length
        };
        var bLs4w = function(C9t) {
            var bc9T = R9I[C9t]
                , bLr4v = a7h.x9o(C9t)
                , wK7D = a7h.x9o(C9t + "-counter");
            if (!bLr4v || !bc9T)
                return;
            var d8f = {
                input: bLr4v.value
            };
            d8f.length = bc9T.onlength(d8f.input);
            d8f.delta = bc9T.max - d8f.length;
            bc9T.onchange(d8f);
            wK7D.innerHTML = d8f.value || "剩余" + d8f.delta + "个字"
        };
        return function(E9v, e8e) {
            var C9t = a7h.kp2x(E9v);
            if (!C9t || !!R9I[C9t])
                return;
            var bc9T = NEJ.X({}, e8e);
            bc9T.onchange = bc9T.onchange || bm9d;
            bc9T.onlength = cmi1x;
            if (!bc9T.max) {
                var bLq4u = parseInt(a7h.gl1x(C9t, "maxlength"))
                    , bLp4t = parseInt(a7h.u8m(C9t, "maxLength"));
                bc9T.max = bLq4u || bLp4t || 100;
                if (!bLq4u && !!bLp4t)
                    bc9T.onlength = k8c.fi1x
            }
            R9I[C9t] = bc9T;
            h8b.q8i(C9t, "input", bLs4w.g8c(null, C9t));
            var f8d = a7h.EV9M(C9t, {
                nid: bc9T.nid || "js-counter",
                clazz: bc9T.clazz
            });
            bc9T.xid = C9t + "-counter";
            f8d.id = bc9T.xid;
            bLs4w(C9t)
        }
    }()
})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , ba9R = c8g("nej.h");
    ba9R.bfN7G = function(E9v, dJ0x) {}
})();
(function() {
    var c8g = NEJ.P
        , bm9d = NEJ.F
        , M9D = c8g("nej.p")
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , ba9R = c8g("nej.h");
    if (M9D.mq3x.trident)
        return;
    ba9R.bfN7G = function() {
        var R9I = {};
        var Il0x = function(d8f) {
            var cO0x = h8b.U9L(d8f);
            if (!!cO0x.value)
                return;
            a7h.X9O(a7h.EV9M(cO0x), "display", "none")
        };
        var Dl8d = function(d8f) {
            var cO0x = h8b.U9L(d8f);
            if (!!cO0x.value)
                return;
            a7h.X9O(a7h.EV9M(cO0x), "display", "")
        };
        var cma1x = function(cO0x, dJ0x) {
            var C9t = a7h.kp2x(cO0x)
                , jM2x = a7h.EV9M(cO0x, {
                tag: "label",
                clazz: dJ0x
            });
            jM2x.htmlFor = C9t;
            var da0x = a7h.gl1x(cO0x, "placeholder") || "";
            jM2x.innerText = da0x == "null" ? "" : da0x;
            var cp9g = cO0x.offsetHeight + "px";
            a7h.fz1x(jM2x, {
                left: 0,
                display: !cO0x.value ? "" : "none"
            })
        };
        return ba9R.bfN7G.ef0x(function(d8f) {
            d8f.stopped = !0;
            var bg9X = d8f.args
                , cO0x = a7h.x9o(bg9X[0]);
            if (!!R9I[cO0x.id])
                return;
            cma1x(cO0x, bg9X[1]);
            R9I[cO0x.id] = !0;
            h8b.q8i(cO0x, "blur", Dl8d.g8c(null));
            h8b.q8i(cO0x, "focus", Il0x.g8c(null))
        })
    }()
})();
(function() {
    var c8g = NEJ.P
        , ba9R = c8g("nej.h")
        , a7h = c8g("nej.e")
        , cL0x = c8g("nej.x");
    a7h.fD1x = cL0x.fD1x = function(E9v, dJ0x) {
        ba9R.bfN7G(E9v, a7h.u8m(E9v, "holder") || dJ0x || "js-placeholder");
        return this
    }
    ;
    cL0x.isChange = !0
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), ha1x;
    if (!!M9D.MU1x)
        return;
    M9D.MU1x = NEJ.C();
    ha1x = M9D.MU1x.O9F(M9D.cz9q);
    ha1x.cl9c = function() {
        this.cs9j();
        this.Dq8i = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    }
    ;
    ha1x.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.fL1x = document.forms[e8e.form] || a7h.x9o(e8e.form);
        this.bU9L([[this.fL1x, "keypress", this.clZ1x.g8c(this)]]);
        this.pM4Q = e8e.message || {};
        this.pM4Q.pass = this.pM4Q.pass || "&nbsp;";
        var eC0x = this.og3x(this.fL1x, "focusMode", 1);
        if (!isNaN(eC0x)) {
            this.bLl4p = {
                mode: eC0x,
                clazz: e8e.focus
            }
        }
        this.zW8O = e8e.holder;
        this.Dq8i.tp.clazz = "js-mhd " + (e8e.tip || "js-tip");
        this.Dq8i.ok.clazz = "js-mhd " + (e8e.pass || "js-pass");
        this.Dq8i.er.clazz = "js-mhd " + (e8e.error || "js-error");
        this.bLk4o = e8e.invalid || "js-invalid";
        this.clT1x(e8e);
        this.fS1x();
        if (!!this.zJ7C)
            this.zJ7C.focus()
    }
    ;
    ha1x.bD9u = function() {
        this.bH9y();
        delete this.pM4Q;
        delete this.zJ7C;
        delete this.Dv9m;
        delete this.fL1x;
        delete this.bLi4m;
        delete this.Mz1x
    }
    ;
    ha1x.og3x = function(f8d, Dx9o, t8l) {
        var A9r = a7h.u8m(f8d, Dx9o);
        switch (t8l) {
            case 1:
                return parseInt(A9r);
            case 2:
                return (A9r || "").toLowerCase() == "true";
            case 3:
                return this.bho7h(A9r)
        }
        return A9r
    }
    ;
    ha1x.yu7n = function(A9r, t8l) {
        if (t8l == "date")
            return this.bho7h(A9r);
        return parseInt(A9r)
    }
    ;
    ha1x.WP4T = function() {
        var jr2x = /^button|submit|reset|image|hidden|file$/i;
        return function(f8d) {
            f8d = this.x9o(f8d) || f8d;
            var t8l = f8d.type;
            return !!f8d.name && !jr2x.test(f8d.type || "")
        }
    }();
    ha1x.clQ1x = function() {
        var jr2x = /^hidden$/i;
        return function(f8d) {
            if (this.WP4T(f8d))
                return !0;
            f8d = this.x9o(f8d) || f8d;
            var t8l = f8d.type || "";
            return jr2x.test(t8l)
        }
    }();
    ha1x.bho7h = function() {
        var cP0x = /[-\/]/;
        var clP1x = function(A9r) {
            if (!A9r)
                return "";
            A9r = A9r.split(cP0x);
            A9r.push(A9r.shift());
            return A9r.join("/")
        };
        return function(A9r) {
            if ((A9r || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(clP1x(A9r))
        }
    }();
    ha1x.clZ1x = function(d8f) {
        if (d8f.keyCode != 13)
            return;
        this.z9q("onenter", d8f)
    }
    ;
    ha1x.clH1x = function(C9t, T9K) {
        var qL4P = this.Mz1x[T9K]
            , A9r = this.og3x(C9t, T9K);
        if (!A9r || !qL4P)
            return;
        this.WS4W(C9t, qL4P);
        this.bij7c(C9t, T9K, A9r)
    }
    ;
    ha1x.clG1x = function(C9t, T9K) {
        try {
            var bLd4h = this.og3x(C9t, T9K);
            if (!bLd4h)
                return;
            var A9r = new RegExp(bLd4h);
            this.bij7c(C9t, T9K, A9r);
            this.WS4W(C9t, this.Mz1x[T9K])
        } catch (e) {}
    }
    ;
    ha1x.clD1x = function(C9t, T9K) {
        var qL4P = this.Mz1x[T9K];
        if (!!qL4P && this.og3x(C9t, T9K, 2))
            this.WS4W(C9t, qL4P)
    }
    ;
    ha1x.bip7i = function(C9t, T9K, A9r) {
        A9r = parseInt(A9r);
        if (isNaN(A9r))
            return;
        this.bij7c(C9t, T9K, A9r);
        this.WS4W(C9t, this.Mz1x[T9K])
    }
    ;
    ha1x.bLb4f = function(C9t, T9K) {
        this.bip7i(C9t, T9K, this.og3x(C9t, T9K))
    }
    ;
    ha1x.bLa4e = function(C9t, T9K) {
        this.bip7i(C9t, T9K, a7h.gl1x(C9t, T9K))
    }
    ;
    ha1x.bKZ4d = function(C9t, T9K, t8l) {
        var A9r = this.yu7n(this.og3x(C9t, T9K), this.og3x(C9t, "type"));
        this.bip7i(C9t, T9K, A9r)
    }
    ;
    ha1x.clv1x = function() {
        var fZ1x = /^input|textarea$/i;
        var Il0x = function(d8f) {
            this.oG3x(h8b.U9L(d8f))
        };
        var Dl8d = function(d8f) {
            var f8d = h8b.U9L(d8f);
            if (!this.og3x(f8d, "ignore", 2)) {
                this.bKY4c(f8d)
            }
        };
        return function(f8d) {
            if (this.og3x(f8d, "autoFocus", 2))
                this.zJ7C = f8d;
            var pB4F = a7h.gl1x(f8d, "placeholder");
            if (!!pB4F && pB4F != "null")
                a7h.fD1x(f8d, this.zW8O);
            if (!!this.bLl4p && fZ1x.test(f8d.tagName))
                a7h.lU2x(f8d, this.bLl4p);
            var C9t = a7h.kp2x(f8d);
            this.clD1x(C9t, "required");
            this.clH1x(C9t, "type");
            this.clG1x(C9t, "pattern");
            this.bLa4e(C9t, "maxlength");
            this.bLa4e(C9t, "minlength");
            this.bLb4f(C9t, "maxLength");
            this.bLb4f(C9t, "minLength");
            this.bKZ4d(C9t, "min");
            this.bKZ4d(C9t, "max");
            var T9K = f8d.name;
            this.pM4Q[T9K + "-tip"] = this.og3x(f8d, "tip");
            this.pM4Q[T9K + "-error"] = this.og3x(f8d, "message");
            this.oG3x(f8d);
            var bt9k = this.Dv9m[C9t]
                , j8b = (bt9k || Y9P).data || Y9P
                , Lx1x = this.og3x(f8d, "counter", 2);
            if (Lx1x && (j8b.maxlength || j8b.maxLength)) {
                a7h.cmj1x(C9t, {
                    nid: this.Dq8i.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bt9k && fZ1x.test(f8d.tagName)) {
                this.bU9L([[f8d, "focus", Il0x.g8c(this)], [f8d, "blur", Dl8d.g8c(this)]])
            } else if (this.og3x(f8d, "focus", 2)) {
                this.bU9L([[f8d, "focus", Il0x.g8c(this)]])
            }
        }
    }();
    ha1x.clT1x = function() {
        var DO9F = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bho7h(v))
            }
        };
        var clt1x = {
            required: function(f8d) {
                var t8l = f8d.type
                    , cls1x = !f8d.value
                    , clm1x = (t8l == "checkbox" || t8l == "radio") && !f8d.checked;
                if (clm1x || cls1x)
                    return -1
            },
            type: function(f8d, e8e) {
                var cP0x = this.bLi4m[e8e.type]
                    , eL0x = f8d.value.trim()
                    , cli1x = !!cP0x.test && !cP0x.test(eL0x)
                    , clg1x = k8c.gf1x(cP0x) && !cP0x.call(this, eL0x);
                if (cli1x || clg1x)
                    return -2
            },
            pattern: function(f8d, e8e) {
                if (!e8e.pattern.test(f8d.value))
                    return -3
            },
            maxlength: function(f8d, e8e) {
                if (f8d.value.length > e8e.maxlength)
                    return -4
            },
            minlength: function(f8d, e8e) {
                if (f8d.value.length < e8e.minlength)
                    return -5
            },
            maxLength: function(f8d, e8e) {
                if (k8c.fi1x(f8d.value) > e8e.maxLength)
                    return -4
            },
            minLength: function(f8d, e8e) {
                if (k8c.fi1x(f8d.value) < e8e.minLength)
                    return -5
            },
            min: function(f8d, e8e) {
                var fq1x = this.yu7n(f8d.value, e8e.type);
                if (isNaN(fq1x) || fq1x < e8e.min)
                    return -6
            },
            max: function(f8d, e8e) {
                var fq1x = this.yu7n(f8d.value, e8e.type);
                if (isNaN(fq1x) || fq1x > e8e.max)
                    return -7
            }
        };
        return function(e8e) {
            this.bLi4m = NEJ.X(NEJ.X({}, DO9F), e8e.type);
            this.Mz1x = NEJ.X(NEJ.X({}, clt1x), e8e.attr)
        }
    }();
    ha1x.WS4W = function(C9t, xq7j) {
        if (!k8c.gf1x(xq7j))
            return;
        var bt9k = this.Dv9m[C9t];
        if (!bt9k || !bt9k.func) {
            bt9k = bt9k || {};
            bt9k.func = [];
            this.Dv9m[C9t] = bt9k
        }
        bt9k.func.push(xq7j)
    }
    ;
    ha1x.bij7c = function(C9t, T9K, A9r) {
        if (!T9K)
            return;
        var bt9k = this.Dv9m[C9t];
        if (!bt9k || !bt9k.data) {
            bt9k = bt9k || {};
            bt9k.data = {};
            this.Dv9m[C9t] = bt9k
        }
        bt9k.data[T9K] = A9r
    }
    ;
    ha1x.bKY4c = function(f8d) {
        f8d = this.x9o(f8d) || f8d;
        var bt9k = this.Dv9m[a7h.kp2x(f8d)];
        if (!f8d || !bt9k || !this.WP4T(f8d))
            return !0;
        var m8e;
        k8c.ed0x(bt9k.func, function(eH0x) {
            m8e = eH0x.call(this, f8d, bt9k.data);
            return m8e != null
        }, this);
        if (m8e == null) {
            var d8f = {
                target: f8d,
                form: this.fL1x
            };
            this.z9q("oncheck", d8f);
            m8e = d8f.value
        }
        var d8f = {
            target: f8d,
            form: this.fL1x
        };
        if (m8e != null) {
            d8f.code = m8e;
            this.z9q("oninvalid", d8f);
            if (!d8f.stopped) {
                this.clf1x(f8d, d8f.value || this.pM4Q[f8d.name + m8e])
            }
        } else {
            this.z9q("onvalid", d8f);
            if (!d8f.stopped)
                this.cle1x(f8d, d8f.value)
        }
        return m8e == null
    }
    ;
    ha1x.xs7l = function() {
        var clb1x = function(VF3x, VD3x) {
            return VF3x == VD3x ? "block" : "none"
        };
        var cla1x = function(f8d, t8l, bF9w) {
            var pB4F = bKO4S.call(this, f8d, t8l);
            if (!pB4F && !!bF9w)
                pB4F = a7h.EV9M(f8d, this.Dq8i[t8l]);
            return pB4F
        };
        var bKO4S = function(f8d, t8l) {
            var pB4F;
            if (t8l == "tp")
                pB4F = a7h.x9o(f8d.name + "-tip");
            if (!pB4F)
                pB4F = a7h.I9z(f8d.parentNode, this.Dq8i[t8l].nid)[0];
            return pB4F
        };
        return function(f8d, bF9w, t8l) {
            f8d = this.x9o(f8d) || f8d;
            if (!f8d)
                return;
            t8l == "er" ? a7h.y9p(f8d, this.bLk4o) : a7h.w9n(f8d, this.bLk4o);
            var pB4F = cla1x.call(this, f8d, t8l, bF9w);
            if (!!pB4F && !!bF9w)
                pB4F.innerHTML = bF9w;
            k8c.ed0x(this.Dq8i, function(A9r, J9A) {
                a7h.X9O(bKO4S.call(this, f8d, J9A), "display", clb1x(t8l, J9A))
            }, this)
        }
    }();
    ha1x.oG3x = function(f8d, bF9w) {
        this.xs7l(f8d, bF9w || this.pM4Q[f8d.name + "-tip"], "tp");
        return this
    }
    ;
    ha1x.cle1x = function(f8d, bF9w) {
        this.xs7l(f8d, bF9w || this.pM4Q[f8d.name + "-pass"] || this.pM4Q.pass, "ok");
        return this
    }
    ;
    ha1x.clf1x = function(f8d, bF9w) {
        this.xs7l(f8d, bF9w || this.pM4Q[f8d.name + "-error"], "er");
        return this
    }
    ;
    ha1x.hS1x = function() {
        var fZ1x = /^(?:radio|checkbox)$/i;
        var ckX1x = function(A9r) {
            return A9r == null ? "" : A9r
        };
        var bKN4R = function(A9r, f8d) {
            if (fZ1x.test(f8d.type || "")) {
                f8d.checked = A9r == f8d.value
            } else {
                f8d.value = ckX1x(A9r)
            }
        };
        return function(T9K, A9r) {
            var f8d = this.x9o(T9K);
            if (!f8d)
                return this;
            if (f8d.tagName == "SELECT" || !f8d.length) {
                bKN4R(A9r, f8d)
            } else {
                k8c.be9V(f8d, bKN4R.g8c(null, A9r))
            }
            return this
        }
    }();
    ha1x.x9o = function(T9K) {
        return this.fL1x.elements[T9K]
    }
    ;
    ha1x.ctC3x = function() {
        return this.fL1x
    }
    ;
    ha1x.Yi4m = function() {
        var fZ1x = /^radio|checkbox$/i
            , jr2x = /^number|date$/;
        var ckR1x = function(bv9m, f8d) {
            var T9K = f8d.name
                , A9r = f8d.value
                , bt9k = bv9m[T9K]
                , t8l = this.og3x(f8d, "type");
            if (jr2x.test(t8l))
                A9r = this.yu7n(A9r, t8l);
            if (fZ1x.test(f8d.type) && !f8d.checked) {
                A9r = this.og3x(f8d, "value");
                if (!A9r)
                    return
            }
            if (!!bt9k) {
                if (!k8c.el0x(bt9k)) {
                    bt9k = [bt9k];
                    bv9m[T9K] = bt9k
                }
                bt9k.push(A9r)
            } else {
                bv9m[T9K] = A9r
            }
        };
        return function() {
            var m8e = {};
            k8c.be9V(this.fL1x.elements, function(f8d) {
                if (this.clQ1x(f8d))
                    ckR1x.call(this, m8e, f8d)
            }, this);
            return m8e
        }
    }();
    ha1x.Yr4v = function() {
        var ckQ1x = function(f8d) {
            if (this.WP4T(f8d))
                this.oG3x(f8d)
        };
        return function() {
            this.fL1x.reset();
            k8c.be9V(this.fL1x.elements, ckQ1x, this);
            return this
        }
    }();
    ha1x.ctE3x = function() {
        this.fL1x.submit();
        return this
    }
    ;
    ha1x.fS1x = function() {
        var ckO1x = function(f8d) {
            if (this.WP4T(f8d))
                this.clv1x(f8d)
        };
        return function() {
            this.Dv9m = {};
            k8c.be9V(this.fL1x.elements, ckO1x, this);
            return this
        }
    }();
    ha1x.ckN1x = function(f8d) {
        f8d = this.x9o(f8d) || f8d;
        if (!!f8d)
            return this.bKY4c(f8d);
        var m8e = !0;
        k8c.be9V(this.fL1x.elements, function(f8d) {
            var kc2x = this.ckN1x(f8d);
            m8e = m8e && kc2x
        }, this);
        return m8e
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), H9y = c8g("nej.ut"), k8c = c8g("nej.u"), l8d = c8g("nm.x"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.Yy4C = NEJ.C();
    b8h = n8f.Yy4C.O9F(n8f.dV0x);
    K9B = n8f.Yy4C.cg9X;
    b8h.bR9I = function() {
        this.cc9T();
        h8b.q8i(this.o8g, "click", this.cx9o.g8c(this));
        h8b.q8i(document, "mousewheel", this.AD8v.g8c(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.AD8v.g8c(this))
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        if (e8e.jst) {
            this.o8g.innerHTML = a7h.bP9G(e8e.jst, e8e.data)
        } else if (e8e.ntp) {
            this.o8g.appendChild(a7h.dq0x(e8e.ntp))
        } else if (e8e.txt) {
            this.o8g.innerHTML = a7h.hX1x(e8e.txt)
        } else if (e8e.html) {
            this.o8g.innerHTML = e8e.html
        }
        var KK1x = this.o8g.getElementsByTagName("form");
        if (KK1x.length) {
            this.fL1x = H9y.MU1x.B9s({
                form: KK1x[0]
            })
        }
        this.Eh9Y = a7h.cQ0x(this.o8g)[0]
    }
    ;
    b8h.bD9u = function() {
        this.z9q("ondestroy");
        this.bH9y();
        this.o8g.innerHTML = "";
        delete this.Eh9Y
    }
    ;
    b8h.cx9o = function(d8f) {
        var f8d = h8b.U9L(d8f, "d:action")
            , j8b = this.fL1x ? this.fL1x.Yi4m() : null
            , d8f = {
            action: a7h.u8m(f8d, "action")
        };
        if (j8b)
            d8f.data = j8b;
        if (d8f.action) {
            this.z9q("onaction", d8f);
            if (d8f.stopped)
                return;
            this.bq9h()
        }
    }
    ;
    b8h.AD8v = function(d8f) {
        if (!this.Eh9Y)
            return;
        h8b.bh9Y(d8f);
        var dh0x = d8f.wheelDelta || -d8f.detail;
        this.Eh9Y.scrollTop -= dh0x
    }
    ;
    l8d.jk2x = function(e8e) {
        e8e.destroyable = e8e.destroyable || true;
        e8e.title = e8e.title || "提示";
        e8e.draggable = true;
        e8e.parent = document.body;
        e8e.mask = e8e.mask || true;
        var zV8N = n8f.Yy4C.B9s(e8e);
        zV8N.N9E();
        return zV8N
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bKI4M = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        , KG1x = {}
        , Ej9a = {};
    for (var i = 0, l = bKI4M.length, c; i < l; i++) {
        c = bKI4M.charAt(i);
        KG1x[i] = c;
        Ej9a[c] = i
    }
    var ckL1x = function(iJ2x) {
        var s8k = 0, c, m8e = [];
        while (s8k < iJ2x.length) {
            c = iJ2x[s8k];
            if (c < 128) {
                m8e.push(String.fromCharCode(c));
                s8k++
            } else if (c > 191 && c < 224) {
                m8e.push(String.fromCharCode((c & 31) << 6 | iJ2x[s8k + 1] & 63));
                s8k += 2
            } else {
                m8e.push(String.fromCharCode((c & 15) << 12 | (iJ2x[s8k + 1] & 63) << 6 | iJ2x[s8k + 2] & 63));
                s8k += 3
            }
        }
        return m8e.join("")
    };
    var ckJ1x = function() {
        var he1x = /\r\n/g;
        return function(j8b) {
            j8b = j8b.replace(he1x, "\n");
            var m8e = []
                , oa3x = String.fromCharCode(237);
            if (oa3x.charCodeAt(0) < 0)
                for (var i = 0, l = j8b.length, c; i < l; i++) {
                    c = j8b.charCodeAt(i);
                    c > 0 ? m8e.push(c) : m8e.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = j8b.length, c; i < l; i++) {
                    c = j8b.charCodeAt(i);
                    if (c < 128)
                        m8e.push(c);
                    else if (c > 127 && c < 2048)
                        m8e.push(c >> 6 | 192, c & 63 | 128);
                    else
                        m8e.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return m8e
        }
    }();
    var FN9E = function(iJ2x) {
        var s8k = 0
            , m8e = []
            , eC0x = iJ2x.length % 3;
        if (eC0x == 1)
            iJ2x.push(0, 0);
        if (eC0x == 2)
            iJ2x.push(0);
        while (s8k < iJ2x.length) {
            m8e.push(KG1x[iJ2x[s8k] >> 2], KG1x[(iJ2x[s8k] & 3) << 4 | iJ2x[s8k + 1] >> 4], KG1x[(iJ2x[s8k + 1] & 15) << 2 | iJ2x[s8k + 2] >> 6], KG1x[iJ2x[s8k + 2] & 63]);
            s8k += 3
        }
        if (eC0x == 1)
            m8e[m8e.length - 1] = m8e[m8e.length - 2] = "=";
        if (eC0x == 2)
            m8e[m8e.length - 1] = "=";
        return m8e.join("")
    };
    var ckI1x = function() {
        var qI4M = /\n|\r|=/g;
        return function(j8b) {
            var s8k = 0
                , m8e = [];
            j8b = j8b.replace(qI4M, "");
            for (var i = 0, l = j8b.length; i < l; i += 4)
                m8e.push(Ej9a[j8b.charAt(i)] << 2 | Ej9a[j8b.charAt(i + 1)] >> 4, (Ej9a[j8b.charAt(i + 1)] & 15) << 4 | Ej9a[j8b.charAt(i + 2)] >> 2, (Ej9a[j8b.charAt(i + 2)] & 3) << 6 | Ej9a[j8b.charAt(i + 3)]);
            var bo9f = m8e.length
                , eC0x = j8b.length % 4;
            if (eC0x == 2)
                m8e = m8e.slice(0, bo9f - 2);
            if (eC0x == 3)
                m8e = m8e.slice(0, bo9f - 1);
            return m8e
        }
    }();
    p.ctF3x = function(j8b) {
        return ckL1x(ckI1x(j8b))
    }
    ;
    p.ckF1x = function(j8b) {
        try {
            return window.btoa(j8b)
        } catch (ex) {
            return FN9E(ckJ1x(j8b))
        }
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, h8b = c8g("nej.v"), a7h = c8g("nej.e"), v9m = c8g("nej.j"), M9D = c8g("nej.p"), k8c = c8g("nej.u"), n8f = c8g("nm.l"), D9u = c8g("nm.w"), bI9z = c8g("nej.ui"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), b8h, K9B;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n8f.bKF4J = NEJ.C();
    b8h = n8f.bKF4J.O9F(n8f.dV0x);
    b8h.bZ9Q = function() {
        this.ca9R = "m-download-layer"
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.I9z(this.o8g, "j-flag");
        this.bnj8b = i8a[0];
        this.bnm8e = i8a[1];
        this.bKE4I = i8a[2];
        v9m.bp9g("/client/version/get", {
            type: "json",
            onload: this.ckB1x.g8c(this)
        });
        if (M9D.Kh0x.mac) {
            a7h.w9n(this.bnj8b.parentNode, "f-hide");
            a7h.y9p(this.bnm8e.parentNode, "f-hide");
            a7h.y9p(this.bKE4I, "f-hide")
        } else {
            a7h.y9p(this.bnj8b.parentNode, "f-hide");
            a7h.w9n(this.bnm8e.parentNode, "f-hide");
            a7h.w9n(this.bKE4I, "f-hide")
        }
    }
    ;
    b8h.bk9b = function(e8e) {
        e8e.clazz = " m-layer-down";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "下载";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bl9c(e8e);
        this.bU9L([[this.o8g, "click", this.bO9F.g8c(this)]]);
        this.es0x = TYPE_MAP[e8e.type];
        this.gv1x = e8e.id
    }
    ;
    b8h.bD9u = function() {
        this.bH9y()
    }
    ;
    b8h.zX8P = function() {
        this.bq9h()
    }
    ;
    b8h.Em9d = function(d8f) {
        this.z9q("onok", A9r);
        this.bq9h()
    }
    ;
    b8h.bO9F = function(d8f) {
        var f8d = h8b.U9L(d8f, "d:action");
        switch (a7h.u8m(f8d, "action")) {
            case "download":
                this.bq9h();
                window.open(a7h.u8m(f8d, "src"));
                break;
            case "orpheus":
                this.bq9h();
                location.href = "orpheus://" + k8c.ckF1x(JSON.stringify({
                    type: this.es0x,
                    id: this.gv1x,
                    cmd: "download"
                }));
                break
        }
    }
    ;
    b8h.ckB1x = function(d8f) {
        if ((d8f || Y9P).code == 200) {
            this.EO9F = d8f.data;
            this.bnj8b.innerText = "V" + this.EO9F.mac;
            this.bnm8e.innerText = "V" + this.EO9F.pc
        }
    }
    ;
    l8d.Zc5h = function(e8e) {
        n8f.bKF4J.B9s(e8e).N9E()
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , k8c = c8g("nej.u")
        , p8h = c8g("nm.d")
        , bN9E = {};
    p8h.x9o = function(J9A) {
        return bN9E[J9A]
    }
    ;
    p8h.on3x = function(J9A, bc9T) {
        bN9E[J9A] = bc9T
    }
    ;
    p8h.eQ0x = function(j8b) {
        k8c.ed0x(j8b, function(r8j, J9A) {
            var bc9T = bN9E[J9A] || {};
            NEJ.X(bc9T, r8j);
            bN9E[J9A] = bc9T
        })
    }
})();
(function() {
    var c8g = NEJ.P
        , bm9d = NEJ.F
        , ba9R = c8g("nej.h");
    ba9R.Ze5j = function(J9A) {
        return localStorage.getItem(J9A)
    }
    ;
    ba9R.Zf5k = function(J9A, A9r) {
        localStorage.setItem(J9A, A9r)
    }
    ;
    ba9R.boA9r = function(J9A) {
        localStorage.removeItem(J9A)
    }
    ;
    ba9R.boB9s = function() {
        localStorage.clear()
    }
    ;
    ba9R.ckA1x = function() {
        var m8e = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            m8e.push(localStorage.key(i));
        return m8e
    }
    ;
    ba9R.boH9y = function() {
        (document.onstorageready || bm9d)()
    }
    ;
    ba9R.boI9z = function() {
        return !0
    }
})();
(function() {
    var c8g = NEJ.P, M9D = c8g("nej.p"), iC2x = c8g("nej.c"), ba9R = c8g("nej.h"), rQ4U;
    if (M9D.mq3x.trident || !!window.localStorage)
        return;
    var ckz1x = function() {
        var qM4Q, eZ0x;
        var bmd8V = function() {
            qM4Q = document.createElement("div");
            NEJ.X(qM4Q.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qM4Q);
            qM4Q.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iC2x.x9o("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Nv1x = function() {
            eZ0x = window.clearTimeout(eZ0x);
            var hb1x = qM4Q.getElementsByTagName("object")[0];
            if (!!hb1x.initStorage) {
                delete qM4Q;
                rQ4U = hb1x;
                rQ4U.initStorage("nej-storage");
                (document.onstorageready || bm9d)();
                return
            }
            eZ0x = window.setTimeout(Nv1x, 500)
        };
        return function() {
            if (!!rQ4U)
                return;
            bmd8V();
            Nv1x()
        }
    }();
    ba9R.Ze5j = ba9R.Ze5j.ef0x(function(d8f) {
        d8f.stopped = !0;
        if (!rQ4U)
            return;
        d8f.value = rQ4U.getItem(d8f.args[0])
    });
    ba9R.Zf5k = ba9R.Zf5k.ef0x(function(d8f) {
        d8f.stopped = !0;
        if (!rQ4U)
            return;
        var bg9X = d8f.args;
        rQ4U.setItem(bg9X[0], bg9X[1])
    });
    ba9R.boA9r = ba9R.boA9r.ef0x(function(d8f) {
        d8f.stopped = !0;
        if (!rQ4U)
            return;
        rQ4U.removeItem(d8f.args[0])
    });
    ba9R.boB9s = ba9R.boB9s.ef0x(function(d8f) {
        d8f.stopped = !0;
        if (!!rQ4U)
            rQ4U.clear()
    });
    ba9R.boH9y = ba9R.boH9y.ef0x(function(d8f) {
        d8f.stopped = !0;
        ckz1x()
    });
    ba9R.boI9z = ba9R.boI9z.ef0x(function(d8f) {
        d8f.stopped = !0;
        d8f.value = !!rQ4U
    })
})();
(function() {
    var c8g = NEJ.P
        , k8c = c8g("nej.u")
        , h8b = c8g("nej.v")
        , ba9R = c8g("nej.h")
        , v9m = c8g("nej.j")
        , H9y = c8g("nej.ut")
        , R9I = {};
    v9m.uk6e = function(J9A, A9r) {
        var bKD4H = JSON.stringify(A9r);
        try {
            ba9R.Zf5k(J9A, bKD4H)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKD4H != ba9R.Ze5j(J9A))
            R9I[J9A] = A9r;
        return this
    }
    ;
    v9m.sX5c = function(J9A) {
        var j8b = JSON.parse(ba9R.Ze5j(J9A) || "null");
        return j8b == null ? R9I[J9A] : j8b
    }
    ;
    v9m.bKC4G = function(J9A, A9r) {
        var j8b = v9m.sX5c(J9A);
        if (j8b == null) {
            j8b = A9r;
            v9m.uk6e(J9A, j8b)
        }
        return j8b
    }
    ;
    v9m.JT0x = function(J9A) {
        delete R9I[J9A];
        ba9R.boA9r(J9A);
        return this
    }
    ;
    v9m.ctG3x = function() {
        var bpv9m = function(r8j, J9A, bv9m) {
            delete bv9m[J9A]
        };
        return function() {
            k8c.ed0x(R9I, bpv9m);
            ba9R.boB9s();
            return this
        }
    }();
    v9m.ctH3x = function(m8e) {
        m8e = m8e || {};
        k8c.be9V(ba9R.ckA1x(), function(J9A) {
            m8e[J9A] = v9m.sX5c(J9A)
        });
        return m8e
    }
    ;
    H9y.ft1x.B9s({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (ba9R.boI9z()) {
                document.onstorageready()
            }
        }
    });
    var ckr1x = function() {
        var ckn1x = function(A9r, J9A, bv9m) {
            ba9R.Zf5k(J9A, JSON.stringify(A9r));
            delete bv9m[J9A]
        };
        return function() {
            k8c.ed0x(R9I, ckn1x)
        }
    }();
    h8b.q8i(document, "storageready", ckr1x);
    ba9R.boH9y()
})();
(function() {
    var c8g = NEJ.P, h8b = c8g("nej.v"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), Jj0x;
    if (!!M9D.bqb9S)
        return;
    M9D.bqb9S = NEJ.C();
    Jj0x = M9D.bqb9S.O9F(M9D.cz9q);
    Jj0x.cl9c = function() {
        var fX1x = +(new Date)
            , mv3x = "dat-" + fX1x;
        return function() {
            this.cs9j();
            var R9I = this.constructor[mv3x];
            if (!R9I) {
                R9I = {};
                this.constructor[mv3x] = R9I
            }
            this.P9G = R9I
        }
    }();
    Jj0x.x9o = function(J9A) {
        return this.P9G[J9A]
    }
    ;
    Jj0x.on3x = function(J9A, A9r) {
        var lv2x = this.P9G[J9A];
        this.P9G[J9A] = A9r;
        h8b.z9q(localCache, "cachechange", {
            key: J9A,
            type: "set",
            oldValue: lv2x,
            newValue: A9r
        });
        return this
    }
    ;
    Jj0x.cF0x = function(J9A) {
        var lv2x = this.P9G[J9A];
        k8c.YM4Q(this.P9G, J9A);
        h8b.z9q(localCache, "cachechange", {
            key: J9A,
            type: "delete",
            oldValue: lv2x,
            newValue: undefined
        });
        return lv2x
    }
    ;
    Jj0x.ZF5K = function(ED9u) {
        return NEJ.Q(this.P9G, ED9u)
    }
    ;
    window.localCache = M9D.bqb9S.B9s();
    M9D.ft1x.B9s({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var c8g = NEJ.P, eU0x = NEJ.R, bm9d = NEJ.F, k8c = c8g("nej.u"), v9m = c8g("nej.j"), M9D = c8g("nej.ut"), mv3x = "dat-" + +(new Date), mk3x;
    if (!!M9D.bqI9z)
        return;
    M9D.bqI9z = NEJ.C();
    mk3x = M9D.bqI9z.O9F(M9D.cz9q);
    mk3x.cl9c = function() {
        this.cs9j();
        this.P9G = this.constructor[mv3x];
        if (!this.P9G) {
            this.P9G = {};
            this.P9G[mv3x + "-l"] = {};
            this.constructor[mv3x] = this.P9G
        }
    }
    ;
    mk3x.qk4o = function(J9A) {
        return this.P9G[J9A]
    }
    ;
    mk3x.oE3x = function(J9A, A9r) {
        this.P9G[J9A] = A9r
    }
    ;
    mk3x.kw2x = function(J9A, ku2x) {
        var j8b = this.qk4o(J9A);
        if (j8b == null) {
            j8b = ku2x;
            this.oE3x(J9A, j8b)
        }
        return j8b
    }
    ;
    mk3x.ckk1x = function(J9A) {
        if (J9A != null) {
            delete this.P9G[J9A];
            return
        }
        k8c.ed0x(this.P9G, function(r8j, J9A) {
            if (J9A == mv3x + "-l")
                return;
            this.ckk1x(J9A)
        }, this)
    }
    ;
    mk3x.ctK3x = function(J9A) {
        if (!!v9m.JT0x)
            return v9m.JT0x(J9A)
    }
    ;
    mk3x.cki1x = function(J9A) {
        if (!!v9m.sX5c)
            return v9m.sX5c(J9A)
    }
    ;
    mk3x.ckf1x = function(J9A, A9r) {
        if (!!v9m.uk6e)
            v9m.uk6e(J9A, A9r)
    }
    ;
    mk3x.EB9s = function(J9A, ku2x) {
        var j8b = this.JI0x(J9A);
        if (j8b == null) {
            j8b = ku2x;
            this.uf6Z(J9A, j8b)
        }
        return j8b
    }
    ;
    mk3x.JI0x = function(J9A) {
        var j8b = this.qk4o(J9A);
        if (j8b != null)
            return j8b;
        j8b = this.cki1x(J9A);
        if (j8b != null)
            this.oE3x(J9A, j8b);
        return j8b
    }
    ;
    mk3x.uf6Z = function(J9A, A9r) {
        this.ckf1x(J9A, A9r);
        this.oE3x(J9A, A9r)
    }
    ;
    mk3x.bKt4x = function(J9A) {
        if (J9A != null) {
            delete this.P9G[J9A];
            if (!!v9m.JT0x)
                v9m.JT0x(J9A);
            return
        }
        k8c.ed0x(this.P9G, function(r8j, J9A) {
            if (J9A == mv3x + "-l")
                return;
            this.bKt4x(J9A)
        }, this)
    }
    ;
    mk3x.ctL3x = function() {
        this.bKt4x();
        return this
    }
    ;
    mk3x.ctM3x = function(J9A) {
        var j8b = this.P9G[mv3x + "-l"];
        delete j8b[J9A]
    }
    ;
    mk3x.baR5W = function(J9A) {
        var j8b = this.P9G[mv3x + "-l"]
            , bg9X = eU0x.slice.call(arguments, 1);
        k8c.be9V(j8b[J9A], function(dr0x) {
            try {
                dr0x.apply(null, bg9X)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j8b[J9A]
    }
    ;
    mk3x.baS5X = function(J9A, dr0x) {
        dr0x = dr0x || bm9d;
        var i8a = this.P9G[mv3x + "-l"][J9A];
        if (!i8a) {
            i8a = [dr0x];
            this.P9G[mv3x + "-l"][J9A] = i8a;
            return !1
        }
        i8a.push(dr0x);
        return !0
    }
    ;
    mk3x.cjZ1x = function(i8a, bj9a, fY1x) {
        if (!i8a)
            return !1;
        bj9a = parseInt(bj9a) || 0;
        fY1x = parseInt(fY1x) || 0;
        if (!fY1x) {
            if (!i8a.loaded)
                return !1;
            fY1x = i8a.length
        }
        if (!!i8a.loaded)
            fY1x = Math.min(fY1x, i8a.length - bj9a);
        for (var i = 0; i < fY1x; i++)
            if (!i8a[bj9a + i])
                return !1;
        return !0
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, k8c = c8g("nej.u"), M9D = c8g("nej.ut"), b8h, K9B;
    if (!!M9D.Jp0x)
        return;
    M9D.Jp0x = NEJ.C();
    b8h = M9D.Jp0x.O9F(M9D.bqI9z);
    K9B = M9D.Jp0x.cg9X;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.uK6E = e8e.key || "id";
        this.bb9S = e8e.data || Y9P;
        this.cjY1x = !!e8e.autogc;
        this.cjW1x(e8e.id)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        if (!!this.dL0x) {
            this.bKq4u()
        }
    }
    ;
    b8h.cjW1x = function(C9t) {
        var R9I;
        if (!!C9t) {
            R9I = this.P9G[C9t];
            if (!R9I) {
                R9I = {};
                this.P9G[C9t] = R9I
            }
        }
        R9I = R9I || this.P9G;
        R9I.hash = R9I.hash || {};
        this.Ju0x = R9I
    }
    ;
    b8h.bKq4u = function() {
        this.dL0x = window.clearTimeout(this.dL0x);
        var bv9m = {};
        k8c.ed0x(this.Ju0x, function(i8a, J9A) {
            if (J9A == "hash")
                return;
            if (!k8c.el0x(i8a))
                return;
            k8c.be9V(i8a, function(r8j) {
                if (!r8j)
                    return;
                bv9m[r8j[this.uK6E]] = !0
            }, this)
        }, this);
        k8c.ed0x(this.ZW5b(), function(r8j, C9t, dG0x) {
            if (!bv9m[C9t]) {
                delete dG0x[C9t]
            }
        })
    }
    ;
    b8h.cjT1x = function() {
        if (!!this.dL0x) {
            this.dL0x = window.clearTimeout(this.dL0x)
        }
        this.dL0x = window.setTimeout(this.bKq4u.g8c(this), 150)
    }
    ;
    b8h.Aa8S = function(r8j, ZS5X) {
        r8j = this.bKp4t(r8j, ZS5X) || r8j;
        if (!r8j)
            return null;
        var J9A = r8j[this.uK6E];
        if (J9A != null) {
            var hx1x = this.ZW5b()[J9A];
            if (!!hx1x)
                r8j = NEJ.X(hx1x, r8j);
            this.ZW5b()[J9A] = r8j
        }
        delete r8j.bKo4s;
        return r8j
    }
    ;
    b8h.bKp4t = bm9d;
    b8h.bbR6L = function(J9A, r8j) {
        if (!r8j)
            return;
        if (!k8c.el0x(r8j)) {
            var i8a = this.gN1x(J9A)
                , r8j = this.Aa8S(r8j, J9A);
            if (!!r8j)
                i8a.unshift(r8j);
            return
        }
        k8c.mu3x(r8j, this.bbR6L.g8c(this, J9A))
    }
    ;
    b8h.JG0x = function(J9A, co9f) {
        var i8a = this.gN1x(J9A);
        i8a.length = Math.max(i8a.length, co9f);
        this.bcn6h(J9A);
        return this
    }
    ;
    b8h.jG2x = function(J9A) {
        return this.gN1x(J9A).length
    }
    ;
    b8h.bcn6h = function(J9A, nV3x) {
        this.gN1x(J9A).loaded = nV3x != !1;
        return this
    }
    ;
    b8h.ZK5P = function(J9A) {
        return !!this.gN1x(J9A).loaded
    }
    ;
    b8h.rr4v = function(J9A, i8a) {
        this.tA5F(J9A);
        this.bcH6B({
            key: J9A,
            offset: 0,
            limit: i8a.length + 1
        }, {
            list: i8a,
            total: i8a.length
        })
    }
    ;
    b8h.gN1x = function() {
        var Ez9q = function(J9A) {
            return (J9A || "") + (!J9A ? "" : "-") + "list"
        };
        return function(J9A) {
            var J9A = Ez9q(J9A)
                , i8a = this.Ju0x[J9A];
            if (!i8a) {
                i8a = [];
                this.Ju0x[J9A] = i8a
            }
            return i8a
        }
    }();
    b8h.ZW5b = function() {
        var dG0x = this.Ju0x.hash;
        if (!dG0x) {
            dG0x = {};
            this.Ju0x.hash = dG0x
        }
        return dG0x
    }
    ;
    b8h.bcJ6D = function() {
        var Ez9q = function(e8e) {
            return "r-" + e8e.key
        };
        return function(e8e) {
            var hU1x = NEJ.X({}, e8e)
                , nb3x = Ez9q(hU1x);
            if (!this.baS5X(nb3x, this.z9q.g8c(this))) {
                hU1x.rkey = nb3x;
                hU1x.onload = this.cjM1x.g8c(this, hU1x);
                this.z9q("dopullrefresh", hU1x)
            }
            return this
        }
    }();
    b8h.cjM1x = function(e8e, i8a) {
        this.bbR6L(e8e.key, i8a);
        this.baR5W(e8e.rkey, "onpullrefresh", e8e)
    }
    ;
    b8h.nQ3x = function() {
        var Ez9q = function(e8e) {
            return "r-" + e8e.key + "-" + e8e.offset + "-" + e8e.limit
        };
        return function(e8e) {
            e8e = e8e || Y9P;
            var hU1x = {
                key: "" + e8e.key || "",
                ext: e8e.ext || null,
                data: e8e.data || null,
                offset: parseInt(e8e.offset) || 0,
                limit: parseInt(e8e.limit) || 0
            }
                , i8a = this.gN1x(hU1x.key);
            if (this.cjZ1x(i8a, hU1x.offset, hU1x.limit)) {
                this.z9q("onlistload", hU1x);
                return this
            }
            var nb3x = Ez9q(hU1x);
            if (!this.baS5X(nb3x, this.z9q.g8c(this))) {
                hU1x.rkey = nb3x;
                hU1x.onload = this.bcH6B.g8c(this, hU1x);
                this.z9q("doloadlist", hU1x)
            }
            return this
        }
    }();
    b8h.bcH6B = function() {
        var AS8K = function(r8j, s8k, i8a) {
            if (!!r8j) {
                return !0
            }
            i8a.splice(s8k, 1)
        };
        return function(e8e, m8e) {
            e8e = e8e || Y9P;
            var J9A = e8e.key
                , bj9a = e8e.offset
                , bKm4q = this.gN1x(J9A);
            var i8a = m8e || [];
            if (!k8c.el0x(i8a)) {
                i8a = m8e.result || m8e.list || [];
                var co9f = parseInt(m8e.total);
                if (!isNaN(co9f) || co9f > i8a.length) {
                    this.JG0x(J9A, co9f)
                }
            }
            k8c.be9V(i8a, function(r8j, s8k) {
                bKm4q[bj9a + s8k] = this.Aa8S(r8j, J9A)
            }, this);
            if (i8a.length < e8e.limit) {
                this.bcn6h(J9A);
                k8c.mu3x(bKm4q, AS8K)
            }
            this.baR5W(e8e.rkey, "onlistload", e8e)
        }
    }();
    b8h.tA5F = function() {
        var AS8K = function(r8j, s8k, i8a) {
            i8a.splice(s8k, 1)
        };
        return function(J9A) {
            var i8a = this.gN1x(J9A);
            k8c.mu3x(i8a, AS8K);
            this.bcn6h(J9A, !1);
            if (this.cjY1x) {
                this.cjT1x()
            }
            return this
        }
    }();
    b8h.bKl4p = function(r8j, ZS5X) {
        return !r8j.bKo4s
    }
    ;
    b8h.eh0x = function(C9t) {
        return this.ZW5b()[C9t]
    }
    ;
    b8h.ctQ3x = function(C9t) {
        var r8j = this.eh0x(C9t);
        if (!!r8j)
            r8j.bKo4s = !0
    }
    ;
    b8h.ZD5I = function() {
        var Ez9q = function(e8e) {
            return "r-" + e8e.key + "-" + e8e.id
        };
        return function(e8e) {
            e8e = e8e || Y9P;
            var C9t = e8e[this.uK6E]
                , hU1x = {
                id: C9t,
                ext: e8e.ext,
                data: e8e.data || {},
                key: "" + e8e.key || ""
            };
            r8j = this.eh0x(C9t);
            hU1x.data[this.uK6E] = C9t;
            if (!!r8j && this.bKl4p(r8j, hU1x.key)) {
                this.z9q("onitemload", hU1x);
                return this
            }
            var nb3x = Ez9q(hU1x);
            if (!this.baS5X(nb3x, this.z9q.g8c(this))) {
                hU1x.rkey = nb3x;
                hU1x.onload = this.cjG1x.g8c(this, hU1x);
                this.z9q("doloaditem", hU1x)
            }
            return this
        }
    }();
    b8h.cjG1x = function(e8e, r8j) {
        e8e = e8e || Y9P;
        this.Aa8S(r8j, e8e.key);
        this.baR5W(e8e.rkey, "onitemload", e8e)
    }
    ;
    b8h.iG2x = function(e8e) {
        e8e = NEJ.X({}, e8e);
        e8e.onload = this.xN7G.g8c(this, e8e);
        this.z9q("doadditem", e8e)
    }
    ;
    b8h.xN7G = function(e8e, r8j) {
        var J9A = e8e.key;
        r8j = this.Aa8S(r8j, J9A);
        if (!!r8j) {
            var ey0x = 0
                , i8a = this.gN1x(J9A);
            if (!e8e.push) {
                ey0x = -1;
                var bj9a = e8e.offset || 0;
                i8a.splice(bj9a, 0, r8j)
            } else if (i8a.loaded) {
                ey0x = 1;
                i8a.push(r8j)
            } else {
                i8a.length++
            }
        }
        var d8f = {
            key: J9A,
            flag: ey0x,
            data: r8j,
            action: "add",
            ext: e8e.ext
        };
        this.z9q("onitemadd", d8f);
        return d8f
    }
    ;
    b8h.Ji0x = function(e8e) {
        e8e = NEJ.X({}, e8e);
        e8e.onload = this.bdC6w.g8c(this, e8e);
        this.z9q("dodeleteitem", e8e)
    }
    ;
    b8h.bdC6w = function(e8e, bKk4o) {
        var r8j, J9A = e8e.key;
        if (!!bKk4o) {
            r8j = this.eh0x(e8e.id) || null;
            var C9t = e8e.id
                , cjE1x = this.uK6E
                , i8a = this.gN1x(J9A)
                , s8k = k8c.cV0x(i8a, function(hx1x) {
                return !!hx1x && hx1x[cjE1x] == C9t
            });
            if (s8k >= 0)
                i8a.splice(s8k, 1)
        }
        var d8f = {
            key: J9A,
            data: r8j,
            action: "delete",
            ext: e8e.ext
        };
        this.z9q("onitemdelete", d8f);
        return d8f
    }
    ;
    b8h.Zy5D = function(e8e) {
        e8e = NEJ.X({}, e8e);
        e8e.onload = this.cjD1x.g8c(this, e8e);
        this.z9q("doupdateitem", e8e)
    }
    ;
    b8h.cjD1x = function(e8e, r8j) {
        var J9A = e8e.key;
        if (!!r8j)
            r8j = this.Aa8S(r8j, J9A);
        var d8f = {
            key: J9A,
            data: r8j,
            action: "update",
            ext: e8e.ext
        };
        this.z9q("onitemupdate", d8f);
        return d8f
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, k8c = c8g("nej.u"), M9D = c8g("nej.ut"), b8h;
    if (!!M9D.bdP6J)
        return;
    M9D.bdP6J = NEJ.C();
    b8h = M9D.bdP6J.O9F(M9D.Jp0x);
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.bli8a({
            doloadlist: this.Zx5C.g8c(this),
            doloaditem: this.bdW6Q.g8c(this),
            doadditem: this.bKj4n.g8c(this),
            dodeleteitem: this.Zw5B.g8c(this),
            doupdateitem: this.Zr5w.g8c(this),
            dopullrefresh: this.bKi4m.g8c(this)
        })
    }
    ;
    b8h.Zx5C = bm9d;
    b8h.bKi4m = bm9d;
    b8h.bdW6Q = bm9d;
    b8h.bKj4n = bm9d;
    b8h.Zw5B = bm9d;
    b8h.Zr5w = bm9d
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, k8c = c8g("nej.u"), h8b = c8g("nej.v"), v9m = c8g("nej.j"), H9y = c8g("nej.ut"), l8d = c8g("nm.x"), p8h = c8g("nm.d"), b8h, K9B;
    p8h.gZ1x = NEJ.C();
    b8h = p8h.gZ1x.O9F(H9y.bdP6J);
    b8h.ck9b = function() {
        var Kd0x = location.protocol + "//" + location.host;
        var cjA0x = function(bs9j, j8b) {
            var bv9m = {
                conf: {},
                data: {},
                urls: []
            };
            k8c.be9V(bs9j, function(J9A, s8k, i8a) {
                var bc9T = p8h.x9o(J9A);
                if (!bc9T)
                    return;
                var ber6l = bKh4l(bc9T.url, j8b[J9A]);
                bv9m.urls.push(ber6l);
                bv9m.conf[ber6l] = bc9T;
                bv9m.data[ber6l] = JSON.stringify(j8b[J9A] == null ? "" : j8b[J9A])
            });
            return bv9m
        };
        var bKh4l = function(V9M, j8b) {
            return V9M.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j8b[$2] || $1
            })
        };
        var bKg4k = function(bc9T, e8e, d8f) {
            h8b.z9q(window, "requesterror", d8f);
            if (!!d8f.stopped)
                return;
            var HF0x = bc9T.onerror || e8e.onerror;
            if (k8c.fe1x(HF0x)) {
                this.z9q(HF0x, d8f, e8e)
            } else {
                (HF0x || bm9d).call(this, d8f, e8e)
            }
            var d8f = {
                result: d8f,
                option: e8e
            };
            this.z9q("onerror", d8f);
            if (!d8f.stopped)
                (bc9T.onmessage || bm9d).call(this, d8f.result.code, d8f.result)
        };
        var bKf4j = function(Q9H, bc9T, e8e) {
            var m8e = Q9H;
            if (k8c.gf1x(bc9T.format)) {
                m8e = bc9T.format.call(this, Q9H, e8e)
            }
            return m8e
        };
        var wJ7C = function(Q9H, bc9T, e8e, tK5P) {
            if (k8c.gf1x(bc9T.beforeload)) {
                bc9T.beforeload.call(this, Q9H, e8e, bc9T)
            }
            if (Q9H && Q9H.code != null && Q9H.code != 200) {
                bKg4k.call(this, bc9T, e8e, {
                    key: e8e.key,
                    code: Q9H.code,
                    message: Q9H.message || "",
                    captchaId: Q9H.captchaId,
                    ext: Q9H
                });
                return
            }
            var m8e = Q9H;
            if (!tK5P) {
                m8e = bKf4j.call(this, Q9H, bc9T, e8e)
            } else if (k8c.gf1x(bc9T.format)) {
                var beN6H = [];
                k8c.be9V(tK5P.urls, function(V9M) {
                    beN6H.push(bKf4j.call(this, Q9H[V9M], tK5P.conf[V9M], e8e))
                }, this);
                beN6H.push(e8e);
                m8e = bc9T.format.apply(this, beN6H)
            }
            var sQ5V = bc9T.onload || e8e.onload
                , bKe4i = bc9T.finaly || e8e.finaly || bm9d;
            if (k8c.fe1x(sQ5V)) {
                bKe4i.call(this, this.z9q(sQ5V, m8e), e8e)
            } else {
                bKe4i.call(this, (sQ5V || bm9d).call(this, m8e), e8e)
            }
        };
        var zc7V = function(bc9T, e8e, bQ9H) {
            bKg4k.call(this, bc9T, e8e, {
                key: e8e.key,
                code: bQ9H.code || -1,
                message: bQ9H.message || ""
            })
        };
        return function(bc9T, e8e) {
            if (k8c.fe1x(bc9T)) {
                bc9T = p8h.x9o(bc9T)
            }
            delete e8e.value;
            (bc9T.filter || bm9d).call(this, e8e, bc9T);
            var Q9H = e8e.value;
            if (!!Q9H) {
                wJ7C.call(this, Q9H, bc9T, e8e);
                return
            }
            var V9M, j8b = e8e.data || Y9P, xH7A = {
                cookie: !0,
                type: bc9T.rtype || "json",
                method: bc9T.type || "POST",
                onerror: zc7V.g8c(this, bc9T, e8e),
                noescape: bc9T.noescape
            };
            if (k8c.el0x(bc9T.url)) {
                var tK5P = cjA0x(bc9T.url, j8b);
                V9M = Kd0x + "/api/batch";
                xH7A.data = k8c.df0x(tK5P.data);
                xH7A.onload = wJ7C.dW0x(this, bc9T, e8e, tK5P);
                xH7A.headers = {
                    "batch-method": "POST"
                };
                delete tK5P.data
            } else {
                var lf2x = bc9T.url.indexOf(":") < 0 ? Kd0x : "";
                V9M = bKh4l(lf2x + bc9T.url, j8b);
                xH7A.data = k8c.df0x(e8e.data);
                xH7A.onload = wJ7C.dW0x(this, bc9T, e8e)
            }
            if (xH7A.method == "GET")
                xH7A.query = xH7A.data;
            return v9m.bp9g(V9M, xH7A)
        }
    }();
    b8h.Er9i = function() {
        var fZ1x = /^get|list|pull$/i;
        return function(bKc4g, e8e) {
            var J9A = e8e.key
                , bc9T = p8h.x9o(J9A.split("-")[0] + "-" + bKc4g);
            if (fZ1x.test(bKc4g) && J9A.indexOf("post-") < 0)
                bc9T.type = "GET";
            this.ck9b(bc9T, e8e)
        }
    }();
    b8h.ctR3x = function(J9A, i8a) {
        var co9f = i8a.length;
        this.bcH6B({
            key: J9A,
            offset: 0,
            limit: co9f + 1
        }, {
            list: i8a,
            total: co9f
        })
    }
    ;
    b8h.Zx5C = function(e8e) {
        this.Er9i("list", e8e)
    }
    ;
    b8h.bdW6Q = function(e8e) {
        this.Er9i("get", e8e)
    }
    ;
    b8h.bKi4m = function(e8e) {
        this.Er9i("pull", e8e)
    }
    ;
    b8h.bKj4n = function(e8e) {
        this.Er9i("add", e8e)
    }
    ;
    b8h.Zw5B = function(e8e) {
        this.Er9i("del", e8e)
    }
    ;
    b8h.Zr5w = function(e8e) {
        this.Er9i("update", e8e)
    }
    ;
    b8h.cjk0x = function(r8j) {
        this.Aa8S(r8j)
    }
    ;
    H9y.ft1x.B9s({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, h8b = c8g("nej.v"), H9y = c8g("nej.ut"), p8h = c8g("nm.d"), bfF7y = {}, b8h, K9B;
    var sN4R = function(m8e, e8e) {
        m8e.conf = e8e.conf;
        return m8e
    };
    p8h.eQ0x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q9H, e8e) {
                return sN4R({
                    mv: Q9H
                }, e8e)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m8e, e8e) {
                if (!!m8e.songs && m8e.songs.length > 0)
                    m8e.song = m8e.songs[0];
                else
                    m8e.song = bfF7y;
                delete m8e.songs;
                return sN4R(m8e, e8e)
            },
            filter: function(e8e) {
                e8e.data.ids = "[" + e8e.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: sN4R
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: sN4R
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m8e, e8e) {
                m8e.playlist = m8e.result;
                delete m8e.result;
                return sN4R(m8e, e8e)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: sN4R
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: sN4R
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: sN4R
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e8e) {
                var i8a = e8e.data.id.split("-");
                e8e.data.radioId = i8a[0];
                e8e.data.asc = i8a[1] == 2;
                e8e.data.limit = 1e3;
                delete e8e.data.id
            },
            format: function(Q9H, e8e) {
                var cjj0x = {
                    id: e8e.data.radioId,
                    programs: Q9H.programs
                };
                return sN4R({
                    djradio: cjj0x
                }, e8e)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: sN4R
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e8e) {
                e8e.data.lv = 0;
                e8e.data.tv = 0
            },
            format: function(m8e, e8e) {
                var uC6w = {
                    lyric: "",
                    nolyric: true
                };
                if (m8e.code == 200 && m8e.lrc && m8e.lrc.lyric) {
                    uC6w.lyric = m8e.lrc.lyric;
                    uC6w.nolyric = false
                } else {
                    uC6w.nolyric = true
                }
                return sN4R({
                    lyric: uC6w
                }, e8e)
            }
        }
    });
    p8h.uJ6D = NEJ.C();
    b8h = p8h.uJ6D.O9F(p8h.gZ1x);
    b8h.cji0x = function(t8l, cG0x) {
        return this.qk4o(this.Zh5m(t8l, cG0x))
    }
    ;
    b8h.Kl0x = function(t8l, cG0x, e8e) {
        e8e = e8e || {};
        var j8b = this.qk4o(this.Zh5m(t8l, cG0x));
        if (j8b && (t8l != 13 && t8l != 19 || e8e.conf && e8e.conf.useCache)) {
            this.z9q("onresourceload", t8l, cG0x, j8b, e8e.conf);
            return
        }
        e8e.data = {
            id: cG0x
        };
        e8e.onload = this.cjh0x.g8c(this, t8l, cG0x);
        e8e.onerror = this.cjg0x.g8c(this, t8l, cG0x);
        this.ck9b("res-" + this.AF8x(t8l) + "-get", e8e)
    }
    ;
    b8h.cjh0x = function(t8l, cG0x, m8e) {
        var j8b = m8e[this.AF8x(t8l)];
        this.oE3x(this.Zh5m(t8l, cG0x), j8b);
        this.z9q("onresourceload", t8l, cG0x, j8b, m8e.conf)
    }
    ;
    b8h.cjg0x = function(t8l, cG0x, m8e, e8e) {
        if (m8e.code != 404) {
            this.z9q("onresourceerror", t8l, cG0x, m8e.code);
            return
        }
        this.oE3x(this.Zh5m(t8l, cG0x), bfF7y);
        this.z9q("onresourceload", t8l, cG0x, bfF7y, e8e.conf)
    }
    ;
    b8h.ctS3x = function(t8l, e8e) {
        this.ck9b("res-" + this.AF8x(t8l) + "-play", e8e)
    }
    ;
    b8h.Zh5m = function(t8l, cG0x) {
        return "res-" + this.AF8x(t8l) + "-" + cG0x
    }
    ;
    b8h.AF8x = function(t8l) {
        var bv9m = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv9m[t8l]
    }
    ;
    p8h.uJ6D.IM0x = function(t8l, cG0x) {
        if (!this.eJ0x)
            this.eJ0x = p8h.uJ6D.B9s({});
        return this.eJ0x.cji0x(t8l, cG0x)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), p8h = c8g("nm.d"), bgw7p = /^[1-9][0-9]*$/, b8h, K9B;
    var LOCAL_LOG_KEY = "local-log";
    p8h.eQ0x({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    p8h.hK1x = NEJ.C();
    b8h = p8h.hK1x.O9F(p8h.gZ1x);
    b8h.gg1x = function(W9N, bc9T) {
        if (!W9N || !bc9T)
            return;
        if (k8c.fe1x(bc9T)) {
            try {
                bc9T = JSON.parse(bc9T)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a7h)
                }
            }
        }
        if (!k8c.kg2x(bc9T))
            return;
        this.ck9b("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W9N,
                    json: bc9T
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W9N + ", json=" + JSON.stringify(bc9T))
        }
    }
    ;
    b8h.Zd5i = function(mD3x) {
        if (!k8c.el0x(mD3x))
            return;
        this.ck9b("bi-batch-log", {
            data: {
                logs: JSON.stringify(mD3x)
            }
        })
    }
    ;
    b8h.bKb4f = function(bc9T) {
        if (!bc9T || !bc9T.type || !bc9T.rid)
            return;
        var mE3x = bc9T.type;
        if (bgw7p.test(mE3x)) {
            mE3x = this.AF8x(mE3x)
        }
        if (!mE3x)
            return;
        if (mE3x == "playlist")
            mE3x = "list";
        this.gg1x("search", {
            type: mE3x,
            id: bc9T.rid || null,
            keyword: bc9T.keyword || null
        })
    }
    ;
    b8h.Ko0x = function() {
        var ciT0x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bc9T) {
            if (!bc9T || !bc9T.type || !bc9T.rid)
                return;
            if (bc9T.play === undefined)
                bc9T.play = true;
            var mE3x = bc9T.type;
            if (bgw7p.test(mE3x)) {
                mE3x = this.AF8x(mE3x)
            }
            if (!mE3x)
                return;
            if (mE3x == "playlist")
                mE3x = "list";
            var Q9H = {
                id: bc9T.rid,
                type: mE3x
            };
            if (mE3x == "song" && bc9T.source) {
                Q9H.source = this.bJU4Y(bc9T.source);
                if (!!bc9T.sourceid)
                    Q9H.sourceid = bc9T.sourceid
            }
            this.gg1x(!bc9T.play ? "addto" : "play", Q9H);
            if (mE3x == "song" && bc9T.hash && bc9T.hash.match(ciT0x)) {
                this.gg1x(!bc9T.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b8h.bhf7Y = function(C9t, bB9s, dK0x, El9c) {
        var Q9H = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var ciP0x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q9H.id = C9t;
        Q9H.time = Math.round(bB9s);
        Q9H.end = k8c.fe1x(El9c) ? El9c : ciP0x[El9c] || "";
        if (dK0x && dK0x.fid) {
            Q9H.source = this.bJU4Y(dK0x.fid);
            Q9H.sourceId = dK0x.fdata
        }
        this.gg1x("play", Q9H)
    }
    ;
    b8h.bJR4V = function(t8l, cG0x) {
        if (!t8l || !cG0x)
            return;
        if (bgw7p.test(t8l))
            t8l = this.AF8x(t8l);
        if (t8l != "playlist" && t8l != "dj")
            return;
        var bc9T = p8h.x9o("plus-" + t8l + "-count");
        if (!bc9T)
            return !1;
        this.ck9b(bc9T, {
            data: {
                id: cG0x
            }
        });
        var R9I = this.kw2x("play-hist-" + t8l, []);
        if (k8c.cV0x(R9I, cG0x) < 0) {
            R9I.push(cG0x);
            return !0
        }
        return !1
    }
    ;
    b8h.AF8x = function(t8l) {
        var bv9m = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bv9m[t8l]
    }
    ;
    b8h.bJU4Y = function(GL9C) {
        var bv9m = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv9m[GL9C]
    }
    ;
    b8h.ciK0x = function(gO1x) {
        var mD3x = this.EB9s(LOCAL_LOG_KEY, []);
        mD3x.unshift(gO1x);
        if (mD3x.length > 200) {
            mD3x.length = 200
        }
        this.uf6Z(LOCAL_LOG_KEY, mD3x)
    }
    ;
    b8h.ciG0x = function() {
        return this.JI0x(LOCAL_LOG_KEY)
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , bm9d = NEJ.F
        , h8b = c8g("nej.v")
        , v9m = c8g("nej.j")
        , H9y = c8g("nej.ut")
        , a7h = c8g("nej.e")
        , k8c = c8g("nej.u")
        , n8f = c8g("nm.l")
        , l8d = c8g("nm.x")
        , p8h = c8g("nm.d");
    if (!p8h.uJ6D)
        return;
    var R9I = p8h.uJ6D.B9s({
        onresourceload: ciE0x
    });
    var xE7x = p8h.hK1x.fV1x();
    function ciE0x(t8l, cG0x, j8b, bc9T) {
        var i8a = [];
        switch (parseInt(t8l)) {
            case 2:
                i8a = j8b;
                break;
            case 13:
                i8a = j8b.tracks;
                break;
            case 18:
                i8a.push(j8b);
                break;
            case 19:
                i8a = j8b.songs;
                break;
            case 21:
                if (j8b.mp && j8b.mp.fee && j8b.mp.pl <= 0) {
                    l8d.bhP7I(j8b.data.id, j8b.mp.fee);
                    return
                }
                break
        }
        if (l8d.HW0x(i8a, true, null, t8l == 19 ? {
                source: "album",
                sourceid: cG0x
            } : null) == 0) {
            return
        }
        l8d.fc0x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bc9T.message
        })
    }
    function ciC0x(d8f, qp4t, xD7w, ff1x) {
        ff1x = ff1x || {};
        if (d8f.action == "ok") {
            if (xD7w) {
                location.dispatch2("/payfee?songId=" + xD7w)
            } else {
                location.dispatch2("/payfee?fee=" + qp4t || 1)
            }
            xE7x.gg1x("click", {
                type: "tobuyvip",
                name: "box",
                source: ff1x.source || "song",
                sourceid: ff1x.sourceid || xD7w || 0
            })
        } else if (d8f.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + xD7w);
            xE7x.gg1x("click", {
                type: "tobuyone",
                name: "box",
                source: ff1x.source || "song",
                sourceid: ff1x.sourceid || xD7w || 0
            })
        }
    }
    function Kt0x(bF9w) {
        l8d.fc0x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF9w,
            btntxt: "知道了"
        })
    }
    function Ku0x(bF9w, Q9H) {
        Kt0x((Q9H || Y9P).toast || bF9w)
    }
    l8d.hR1x = function(bF9w, C9t, t8l, ciA0x, bf9W) {
        bF9w = bF9w || "由于版权保护，您所在的地区暂时无法使用。";
        if (ciA0x && bf9W && bf9W.privilege && bf9W.privilege.toast) {
            v9m.bp9g("/api/song/toast", {
                query: {
                    id: bf9W.id
                },
                type: "json",
                onload: Ku0x.g8c(this, bF9w),
                onerror: Ku0x.g8c(this, bF9w)
            })
        } else if (C9t && t8l) {
            R9I.Kl0x(t8l, C9t, {
                conf: {
                    message: bF9w,
                    useCache: t8l != 18
                }
            })
        } else {
            Kt0x(bF9w)
        }
    }
    ;
    l8d.sv4z = function(qp4t, xD7w, t8l, ff1x, mi3x) {
        var bN9E, pD4H = "m-popup-info", bir7k = "单首购买", biA7t = "马上去开通", cA9r = "唱片公司要求，当前歌曲须付费使用。", bJO4S = true;
        try {
            bN9E = top.api.feeMessage || {}
        } catch (e) {
            bN9E = {}
        }
        if (qp4t == 1 || qp4t == 8 || qp4t == 16) {
            if (t8l == "song") {
                pD4H = "m-popup-song-buy";
                cA9r = bN9E["vip2"] || cA9r;
                biA7t = bN9E["vip2button"] || "包月购买";
                bir7k = bN9E["vip2link"] || bir7k;
                if (mi3x && mi3x.flag !== undefined) {
                    var bs9j = mi3x.flag.toString(2).split("");
                    if (parseInt(bs9j.pop(), 10) == 1) {
                        bJO4S = false
                    }
                }
            } else {
                cA9r = bN9E["vip"] || cA9r
            }
        } else if (qp4t == 4) {
            cA9r = bN9E["album"] || cA9r;
            biA7t = "立即订购"
        } else {
            cA9r = bN9E["unknow"] || cA9r
        }
        l8d.jk2x({
            clazz: "m-layer-w5",
            html: a7h.bP9G(pD4H, {
                songTxt: bir7k,
                tip: cA9r,
                oktext: biA7t,
                cctext: "以后再说",
                showSongText: bJO4S
            }),
            onaction: ciC0x.dW0x(null, qp4t, xD7w, ff1x)
        })
    }
    ;
    l8d.bJN4R = function(hm1x, gW1x) {
        l8d.gP1x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(t8l) {
                if (t8l == "ok") {
                    l8d.Zc5h({
                        id: hm1x,
                        type: gW1x
                    })
                }
            }
        })
    }
    ;
    l8d.bhP7I = function(nk3x, qp4t) {
        var bN9E, cA9r = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bN9E = top.api.feeMessage || {}
        } catch (e) {
            bN9E = {}
        }
        if (qp4t == 1 || qp4t == 8) {
            cA9r = bN9E["vip"] || cA9r
        } else if (qp4t == 4) {
            cA9r = bN9E["album"] || cA9r
        } else {
            cA9r = bN9E["unknow"] || cA9r
        }
        return l8d.jk2x({
            clazz: "m-layer-w5",
            html: a7h.bP9G("m-popup-info", {
                tip: cA9r,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d8f) {
                if (d8f.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nk3x);
                    xE7x.gg1x("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: nk3x || 0
                    })
                }
            }
        })
    }
    ;
    l8d.HW0x = function() {
        function compareFee(ciw0x, civ0x) {
            var bv9m = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bv9m[ciw0x] || 0) - (bv9m[civ0x] || 0)
        }
        return function(i8a, cA9r, st4x, ff1x) {
            st4x = st4x || {};
            var xq7j = []
                , GX0x = {}
                , bJM4Q = 0
                , bJL4P = 0
                , Ht0x = null;
            if (!i8a || !i8a.length)
                return xq7j;
            k8c.be9V(i8a, function(bf9W) {
                var eT0x = l8d.oB3x(bf9W);
                if (eT0x == 0) {
                    xq7j.push(bf9W)
                } else if (eT0x == 10) {
                    if (bf9W.privilege) {
                        bf9W.fee = bf9W.privilege.fee
                    }
                    if (compareFee(bf9W.fee, GX0x.fee) > 0) {
                        GX0x = bf9W
                    }
                } else if (eT0x == 11) {
                    ++bJM4Q;
                    if (!st4x.play)
                        xq7j.push(bf9W)
                } else if (eT0x == 1e3) {
                    ++bJL4P;
                    if (!st4x.download)
                        xq7j.push(bf9W)
                } else if (eT0x == 100) {
                    Ht0x = bf9W
                }
            });
            if (xq7j.length == 0 && cA9r) {
                if (bJM4Q == i8a.length) {
                    var rZ4d = i8a[0].privilege || {};
                    if (rZ4d.payed) {
                        l8d.hR1x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l8d.sv4z(rZ4d.fee, null, null, ff1x)
                    }
                } else if (bJL4P == i8a.length) {
                    l8d.hR1x("因版权方要求，该歌曲不支持下载")
                } else if (GX0x.id) {
                    l8d.sv4z(GX0x.fee, GX0x.id, null, ff1x, GX0x.privilege)
                } else {
                    if (Ht0x && i8a.length == 1 && Ht0x.privilege && Ht0x.privilege.st < 0 && Ht0x.privilege.toast) {
                        l8d.hR1x(null, null, null, true, Ht0x)
                    } else {
                        l8d.hR1x()
                    }
                }
            }
            return xq7j
        }
    }();
    l8d.oB3x = function(bf9W) {
        if (!bf9W)
            return 0;
        var eT0x = bf9W.privilege;
        if (bf9W.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (eT0x) {
            if (eT0x.st != null && eT0x.st < 0) {
                return 100
            }
            if (eT0x.fee > 0 && eT0x.fee != 8 && eT0x.payed == 0 && eT0x.pl <= 0)
                return 10;
            if (eT0x.fee == 16)
                return 11;
            if ((eT0x.fee == 0 || eT0x.payed) && eT0x.pl > 0 && eT0x.dl == 0)
                return 1e3;
            if (eT0x.pl == 0 && eT0x.dl == 0)
                return 100;
            return 0
        } else {
            var dY0x = bf9W.status != null ? bf9W.status : bf9W.st != null ? bf9W.st : 0;
            if (bf9W.status >= 0)
                return 0;
            if (bf9W.fee > 0)
                return 10;
            return 100
        }
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, h8b = c8g("nej.v"), a7h = c8g("nej.e"), M9D = c8g("nej.ui"), b8h;
    if (!!M9D.YE4I)
        return;
    var hP1x = a7h.rO4S(".#<uispace>{position:absolute;background:#fff;}");
    M9D.YE4I = NEJ.C();
    b8h = M9D.YE4I.O9F(M9D.PS2x);
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.bU9L([[document, "click", this.sc4g.g8c(this)]]);
        this.cir0x = !!e8e.nostop;
        this.bJK4O = {
            top: e8e.top,
            left: e8e.left
        }
    }
    ;
    b8h.bD9u = function() {
        delete this.xC7v;
        delete this.bjU8M;
        delete this.oO3x;
        delete this.bJJ4N;
        delete this.YC4G;
        delete this.bJK4O;
        this.bH9y()
    }
    ;
    b8h.bZ9Q = function() {
        this.lb2x = hP1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        this.xU7N = this.o8g;
        h8b.q8i(this.o8g, "click", this.cim0x.g8c(this))
    }
    ;
    b8h.sc4g = function(d8f) {
        if (d8f.button != 2)
            this.bq9h()
    }
    ;
    b8h.cim0x = function(d8f) {
        if (this.cir0x)
            return;
        h8b.rD4H(d8f);
        var E9v = h8b.U9L(d8f);
        if (E9v.tagName == "A")
            h8b.ce9V(d8f)
    }
    ;
    b8h.cil0x = function() {
        var cP0x = /\s+/i;
        return function(mJ3x) {
            mJ3x = (mJ3x || "").trim().toLowerCase().split(cP0x);
            mJ3x[0] = mJ3x[0] || "bottom";
            mJ3x[1] = mJ3x[1] || "left";
            this.oO3x = mJ3x
        }
    }();
    b8h.cif0x = function(mJ3x) {
        var m8e = {}
            , mA3x = this.bjU8M
            , ctT3x = a7h.oq3x()
            , dm0x = this.o8g.offsetWidth
            , cp9g = this.o8g.offsetHeight;
        switch (mJ3x[0]) {
            case "top":
                m8e.top = mA3x.top - cp9g;
                m8e.left = mJ3x[1] == "right" ? mA3x.left + mA3x.width - dm0x : mA3x.left;
                break;
            case "left":
                m8e.left = mA3x.left - dm0x;
                m8e.top = mJ3x[1] == "bottom" ? mA3x.top + mA3x.height - cp9g : mA3x.top;
                break;
            case "right":
                m8e.left = mA3x.left + mA3x.width;
                m8e.top = mJ3x[1] == "bottom" ? mA3x.top + mA3x.height - cp9g : mA3x.top;
                break;
            default:
                m8e.top = mA3x.top + mA3x.height;
                m8e.left = mJ3x[1] == "right" ? mA3x.left + mA3x.width - dm0x : mA3x.left;
                break
        }
        return m8e
    }
    ;
    b8h.Ip0x = function() {
        if (!this.bJJ4N) {
            this.fU1x(this.bJK4O);
            return
        }
        if (!!this.YC4G) {
            this.fU1x(this.xC7v);
            return
        }
        if (!!this.bjU8M)
            this.fU1x(this.cif0x(this.oO3x))
    }
    ;
    b8h.chF0x = function(E9v, dh0x, d8f) {
        dh0x = dh0x || Y9P;
        var bJu4y = a7h.oq3x()
            , cL0x = h8b.kv2x(d8f) + (dh0x.left || 0)
            , gE1x = h8b.nO3x(d8f) + (dh0x.top || 0)
            , dm0x = E9v.offsetWidth + (dh0x.right || 0)
            , cp9g = E9v.offsetHeight + (dh0x.bottom || 0)
            , Jf0x = bJu4y.scrollWidth
            , bkC8u = bJu4y.scrollHeight
            , bkH8z = cL0x + dm0x
            , bkJ8B = gE1x + cp9g;
        switch (this.oO3x[0]) {
            case "top":
                gE1x = bkJ8B > bkC8u ? gE1x - cp9g : gE1x;
                if (this.oO3x[1] == "right") {
                    cL0x = cL0x - dm0x < 0 ? 0 : cL0x - dm0x
                } else {
                    cL0x = bkH8z > Jf0x ? Jf0x - dm0x : cL0x
                }
                break;
            case "left":
                cL0x = bkH8z > Jf0x ? Jf0x - dm0x : cL0x;
                if (this.oO3x[1] == "top") {
                    gE1x = bkJ8B > bkC8u ? gE1x - cp9g : gE1x
                } else {
                    gE1x = gE1x - cp9g < 0 ? gE1x : gE1x - cp9g
                }
                break;
            case "right":
                cL0x = cL0x - dm0x < 0 ? 0 : cL0x - dm0x;
                if (this.oO3x[1] == "top") {
                    gE1x = bkJ8B > bkC8u ? gE1x - cp9g : gE1x
                } else {
                    gE1x = gE1x - cp9g < 0 ? gE1x : gE1x - cp9g
                }
                break;
            default:
                gE1x = gE1x - cp9g < 0 ? gE1x : gE1x - cp9g;
                if (this.oO3x[1] == "left") {
                    cL0x = bkH8z > Jf0x ? Jf0x - dm0x : cL0x
                } else {
                    cL0x = cL0x - dm0x < 0 ? 0 : cL0x - dm0x
                }
                break
        }
        return {
            top: gE1x,
            left: cL0x
        }
    }
    ;
    b8h.bkQ8I = function() {
        var chz0x = function(E9v, dh0x) {
            E9v = a7h.x9o(E9v);
            if (!E9v)
                return;
            dh0x = dh0x || Y9P;
            var bj9a = a7h.hL1x(E9v);
            return {
                top: bj9a.y - (dh0x.top || 0),
                left: bj9a.x - (dh0x.left || 0),
                width: E9v.offsetWidth + (dh0x.right || 0),
                height: E9v.offsetHeight + (dh0x.bottom || 0)
            }
        };
        return function(e8e) {
            e8e = e8e || Y9P;
            this.YC4G = e8e.event;
            this.cil0x(e8e.align);
            if (!!this.YC4G)
                this.xC7v = this.chF0x(e8e.target, e8e.delta, this.YC4G);
            this.bjU8M = chz0x(e8e.target, e8e.delta);
            this.bJJ4N = !!e8e.fitable;
            this.N9E();
            return this
        }
    }()
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), M9D = c8g("nej.ui"), b8h, K9B;
    if (!!M9D.yg7Z)
        return;
    M9D.yg7Z = NEJ.C();
    b8h = M9D.yg7Z.O9F(M9D.Th3x);
    K9B = M9D.yg7Z.cg9X;
    M9D.yg7Z.ctY3x = function() {
        var cho0x = function(d8f, C9t, fj1x, jl2x, KR1x) {
            var cq9h, J9A = C9t + "-i", R9I = fj1x.xy7r, bJp4t = !!jl2x.noclear, bJn3x = !!jl2x.toggled;
            if (k8c.gf1x(jl2x.onbeforeclick)) {
                var Yt4x = jl2x.noclear
                    , chi0x = jl2x.toggled;
                try {
                    jl2x.onbeforeclick(jl2x)
                } catch (e) {}
                bJp4t = !!jl2x.noclear;
                bJn3x = !!jl2x.toggled;
                jl2x.toggled = chi0x;
                jl2x.noclear = Yt4x
            }
            var DH9y = R9I[J9A];
            if (bJn3x && !!DH9y) {
                DH9y.bq9h();
                return
            }
            h8b.bh9Y(d8f);
            if (!bJp4t) {
                h8b.z9q(document, "click");
                cq9h = fj1x.B9s(jl2x)
            } else {
                cq9h = fj1x.csu2x(jl2x, !0)
            }
            R9I[J9A] = cq9h;
            cq9h.ux6r("onbeforerecycle", function() {
                delete R9I[J9A]
            });
            cq9h.bkQ8I(KR1x)
        };
        return function(f8d, e8e) {
            f8d = a7h.x9o(f8d);
            if (!f8d)
                return this;
            if (!this.xy7r)
                this.xy7r = {};
            var C9t = a7h.kp2x(f8d);
            if (!!this.xy7r[C9t])
                return this;
            e8e = NEJ.X({}, e8e);
            var KR1x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e8e);
            KR1x.target = C9t;
            e8e.destroyable = !0;
            if (!e8e.fixed) {
                KR1x.fitable = !0;
                e8e.parent = document.body
            }
            this.xy7r[C9t] = [C9t, e8e.event || "click", cho0x.dW0x(null, C9t, this, e8e, KR1x)];
            h8b.q8i.apply(h8b, this.xy7r[C9t]);
            return this
        }
    }();
    M9D.yg7Z.ctZ3x = function(f8d) {
        if (!this.xy7r)
            return this;
        var C9t = a7h.kp2x(f8d)
            , d8f = this.xy7r[C9t];
        if (!d8f)
            return this;
        delete this.xy7r[C9t];
        h8b.ms3x.apply(h8b, d8f);
        var cq9h = this.xy7r[C9t + "-i"];
        if (!!cq9h)
            cq9h.bq9h();
        return this
    }
    ;
    b8h.bnZ9Q = function() {
        return M9D.YE4I.B9s(this.bS9J)
    }
    ;
    b8h.Pq2x = function() {
        K9B.Pq2x.apply(this, arguments);
        this.bS9J.top = null;
        this.bS9J.left = null;
        this.bS9J.nostop = !1
    }
    ;
    b8h.bkQ8I = function(e8e) {
        if (!!this.nn3x)
            this.nn3x.bkQ8I(e8e);
        return this
    }
})();
(function() {
    var c8g = NEJ.P, bd9U = c8g("nej.ui"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.blY8Q = NEJ.C();
    b8h = n8f.blY8Q.O9F(bd9U.yg7Z);
    b8h.bk9b = function(e8e) {
        e8e.nohack = true;
        this.bl9c(e8e)
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.Z9Q = NEJ.C();
    b8h = n8f.Z9Q.O9F(n8f.blY8Q);
    K9B = n8f.Z9Q.cg9X;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.es0x = e8e.type || 1
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        this.o8g = a7h.mT3x(this.chf0x());
        var i8a = a7h.cQ0x(this.o8g);
        this.pt3x = i8a[0];
        this.ci9Z = i8a[1]
    }
    ;
    b8h.chf0x = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
    ;
    b8h.Ip0x = function() {
        var A9r = {}
            , cd9U = this.o8g.style
            , iE2x = a7h.oq3x()
            , ng3x = {
            left: iE2x.scrollLeft,
            top: iE2x.scrollTop
        }
            , dh0x = {
            left: iE2x.clientWidth - this.o8g.offsetWidth,
            top: iE2x.clientHeight - this.o8g.offsetHeight
        };
        A9r.top = Math.max(0, ng3x.top + dh0x.top / 2);
        A9r.left = Math.max(0, ng3x.left + dh0x.left / 2);
        this.nn3x.fU1x(A9r)
    }
    ;
    b8h.N9E = function(e8e) {
        K9B.N9E.call(this);
        this.Ip0x();
        this.es0x == 1 ? a7h.ev0x(this.pt3x, "u-icn-32", "u-icn-31") : a7h.ev0x(this.pt3x, "u-icn-31", "u-icn-32");
        this.ci9Z.innerHTML = e8e.tip || ""
    }
    ;
    n8f.Z9Q.N9E = function() {
        var eZ0x;
        return function(e8e) {
            clearTimeout(eZ0x);
            if (e8e.parent === undefined)
                e8e.parent = document.body;
            if (e8e.autoclose === undefined)
                e8e.autoclose = true;
            e8e.clazz = "m-sysmsg";
            !!this.eJ0x && this.eJ0x.S9J();
            this.eJ0x = this.B9s(e8e);
            this.eJ0x.N9E(e8e);
            if (e8e.autoclose)
                eZ0x = setTimeout(this.bq9h.g8c(this), 2e3)
        }
    }();
    n8f.Z9Q.bq9h = function() {
        !!this.eJ0x && this.eJ0x.bq9h()
    }
})();
(function() {
    var c8g = NEJ.P
        , v9m = c8g("nej.j")
        , k8c = c8g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v9m.bp9g = v9m.bp9g.ef0x(function(d8f) {
            e8e = d8f.args[1];
            e8e.query = e8e.query || {};
            if (k8c.fe1x(e8e.query))
                e8e.query = k8c.hi1x(e8e.query);
            e8e.query.ref = "mail"
        })
    }
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, eU0x = NEJ.R, H9y = c8g("nej.ut"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), v9m = c8g("nej.j"), p8h = c8g("nm.d"), n8f = c8g("nm.l"), J9A = "playlist-tracks_", b8h;
    p8h.eQ0x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q9H, e8e) {
                this.chd0x(Q9H.playlist);
                return {
                    total: 0,
                    list: eU0x
                }
            },
            onerror: function() {
                this.z9q("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q9H, e8e) {
                var iK2x = Q9H.playlist;
                iK2x.creator = GUser;
                iK2x.isHost = !0;
                iK2x.typeFlag = "playlist";
                return iK2x
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.hh1x, "listchange", d8f)
            },
            onmessage: function() {
                var lm2x = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cb9S) {
                    n8f.Z9Q.N9E({
                        tip: lm2x[cb9S] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e8e) {
                e8e.id = e8e.data.pid
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.hh1x, "listchange", d8f)
            },
            onmessage: function() {
                var lm2x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cb9S) {
                    n8f.Z9Q.N9E({
                        tip: lm2x[cb9S] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e8e) {
                var ff1x = e8e.ext || {};
                e8e.ext = NEJ.X(ff1x, e8e.data);
                e8e.data = {
                    id: e8e.ext.id
                }
            },
            format: function(Q9H, e8e) {
                n8f.Z9Q.N9E({
                    tip: "收藏成功" + (Q9H.point > 0 ? ' 获得<em class="s-fc6">' + Q9H.point + "积分</em>" : "")
                });
                var r8j = e8e.ext;
                r8j.subscribedCount++;
                return r8j
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.cha0x, "listchange", d8f);
                h8b.z9q(p8h.cha0x, "itemchange", {
                    attr: "subscribedCount",
                    data: d8f.data
                })
            },
            onmessage: function() {
                var lm2x = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(cb9S) {
                    n8f.Z9Q.N9E({
                        type: 2,
                        tip: lm2x[cb9S] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e8e) {
                e8e.id = e8e.data.id = e8e.data.pid
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.hh1x, "listchange", d8f)
            },
            onmessage: function() {
                var lm2x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cb9S) {
                    n8f.Z9Q.N9E({
                        tip: lm2x[cb9S],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e8e) {
                var j8b = e8e.data
                    , Yg4k = {};
                Yg4k["playlist-update-name"] = {
                    id: j8b.id,
                    name: j8b.name
                };
                Yg4k["playlist-update-tag"] = {
                    id: j8b.id,
                    tags: j8b.tags.join(";")
                };
                Yg4k["playlist-update-desc"] = {
                    id: j8b.id,
                    desc: j8b.description
                };
                e8e.data = Yg4k;
                e8e.ext = j8b
            },
            format: function(T9K, pu3x, Li1x, e8e) {
                if (T9K.code == 200 && pu3x.code == 200 && Li1x.code == 200) {
                    e8e.ext.allSuccess = true;
                    n8f.Z9Q.N9E({
                        tip: "保存成功"
                    })
                } else if (T9K.code == 407 || pu3x.code == 407 || Li1x.code == 407) {
                    e8e.ext.allSuccess = false;
                    n8f.Z9Q.N9E({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e8e.ext.allSuccess = false;
                    n8f.Z9Q.N9E({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eh0x(e8e.ext.id)
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.hh1x, "listchange", d8f)
            },
            onmessage: function(cb9S) {
                n8f.Z9Q.N9E({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q9H, e8e) {
                var r8j = this.eh0x(e8e.ext.id);
                if (Q9H.code == 200)
                    r8j.name = e8e.ext.name;
                return Q9H
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q9H, e8e) {
                var r8j = this.eh0x(e8e.ext.id);
                if (Q9H.code == 200)
                    r8j.tags = e8e.ext.tags;
                return Q9H
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q9H, e8e) {
                var r8j = this.eh0x(e8e.ext.id);
                if (Q9H.code == 200)
                    r8j.description = e8e.ext.description;
                return Q9H
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e8e) {
                e8e.url = e8e.data.url;
                delete e8e.data.url
            },
            format: function(Q9H, e8e) {
                n8f.Z9Q.N9E({
                    tip: "保存成功"
                });
                var r8j = this.eh0x(e8e.data.id);
                r8j.coverImgUrl = e8e.url;
                e8e.ext = r8j;
                return r8j
            },
            onmessage: function(cb9S) {
                n8f.Z9Q.N9E({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.hh1x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e8e.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q9H, e8e) {
                var iK2x = this.eh0x(e8e.data.id);
                if (!iK2x)
                    return;
                iK2x.playCount++;
                h8b.z9q(p8h.hh1x, "itemchange", {
                    attr: "playcount",
                    data: iK2x
                })
            }
        }
    });
    p8h.hh1x = NEJ.C();
    b8h = p8h.hh1x.O9F(p8h.gZ1x);
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bJj3x = function() {
        var cT0x = GUser.userId;
        this.nQ3x({
            limit: 1001,
            key: "playlist_my-" + cT0x,
            data: {
                offset: 0,
                limit: 1001,
                uid: cT0x
            }
        })
    }
    ;
    b8h.chd0x = function(i8a) {
        var cT0x = GUser.userId
            , iN2x = []
            , bJh3x = [];
        k8c.be9V(i8a, function(r8j) {
            r8j.typeFlag = "playlist";
            if (r8j.creator && r8j.creator.userId == cT0x) {
                if (r8j.specialType == 5)
                    r8j.name = "我喜欢的音乐";
                r8j.isHost = !0;
                iN2x.push(r8j)
            } else {
                bJh3x.push(r8j)
            }
        });
        this.rr4v("playlist_new-" + cT0x, iN2x);
        this.rr4v("playlist_fav-" + cT0x, bJh3x)
    }
    ;
    b8h.cgT0x = function(j8b) {
        this.ck9b("playlist-update-cover", {
            data: j8b
        })
    }
    ;
    b8h.cuc3x = function() {
        var Ln1x = this.cgz0x.x9o("host-plist");
        if (Ln1x.length == 0) {
            return
        }
        if (Ln1x.length == 1 && Ln1x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Ln1x.length; i < len; i++) {
            var r8j = Ln1x[i];
            if (r8j.trackCount > 0)
                return r8j.id
        }
        return this.cgz0x.x9o("host-plist")[0].id
    }
    ;
    b8h.cgx0x = function(C9t) {
        if (GUser && GUser.userId > 0) {
            this.ck9b("playlist-upcount", {
                data: {
                    id: C9t
                }
            })
        }
    }
    ;
    b8h.DP9G = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b8h.cud3x = function() {
        return GUser.userId
    }
    ;
    b8h.bnU9L = function(r8j) {
        if (r8j.userId == GUser.userId && r8j.specialType == 5)
            r8j.name = "我喜欢的音乐";
        h8b.z9q(this.constructor, "itemchange", {
            data: this.Aa8S(r8j)
        });
        return r8j
    }
    ;
    H9y.ft1x.B9s({
        element: p8h.hh1x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var c8g = NEJ.P, eU0x = NEJ.R, bm9d = NEJ.F, Y9P = NEJ.O, H9y = c8g("nej.ut"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), l8d = c8g("nm.x"), p8h = c8g("nm.d"), n8f = c8g("nm.l"), b8h, K9B;
    p8h.eQ0x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q9H) {
                return Q9H.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e8e) {
                e8e.data.limit = 1e3;
                delete e8e.data.id
            },
            format: function(Q9H, e8e) {
                var bJb3x = []
                    , za7T = Q9H.programs;
                if (za7T) {
                    for (var i = 0, l = za7T.length; i < l; i++) {
                        if (za7T[i].programFeeType < 10 || za7T[i].buyed) {
                            bJb3x.push(za7T[i])
                        }
                    }
                }
                return bJb3x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q9H, e8e) {
                return Q9H.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e8e) {
                e8e.ext = e8e.data;
                e8e.data = {
                    id: e8e.ext.id
                };
                e8e.id = e8e.data.id
            },
            format: function(Q9H, e8e) {
                n8f.Z9Q.N9E({
                    tip: "收藏成功"
                });
                var r8j = e8e.ext;
                r8j.subscribedCount++;
                r8j.subscribed = !0;
                return r8j
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.pw3x, "listchange", d8f)
            },
            onmessage: function() {
                var lm2x = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(cb9S) {
                    n8f.Z9Q.N9E({
                        type: 2,
                        tip: lm2x[cb9S] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.pw3x, "listchange", d8f)
            },
            onmessage: function() {
                var lm2x = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(cb9S) {
                    l8d.bob9S({
                        txt: lm2x[cb9S] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e8e) {
                var r8j = this.eh0x(e8e.data.id) || Y9P;
                e8e.ext = (r8j.listenerCount || 0) + 1
            },
            format: function(Q9H, e8e) {
                var r8j = this.eh0x(e8e.data.id);
                if (!!r8j) {
                    r8j.listenerCount = Math.max(e8e.ext, r8j.listenerCount || 0)
                }
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.pw3x, "itemchange", {
                    attr: "playCount",
                    data: this.eh0x(e8e.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e8e) {
                e8e.data = {
                    threadId: "A_DJ_1_" + e8e.id
                }
            },
            format: function(Q9H, e8e) {
                var r8j = e8e.ext.data || this.eh0x(e8e.id);
                r8j.liked = true;
                r8j.likedCount++;
                e8e.ext.data = r8j;
                try {
                    top.player.setLike(r8j)
                } catch (e) {}
                return r8j
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.pw3x, "itemchange", {
                    attr: "likedCount",
                    data: e8e.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e8e) {
                e8e.data = {
                    threadId: "A_DJ_1_" + e8e.id
                }
            },
            format: function(Q9H, e8e) {
                var r8j = e8e.ext.data || this.eh0x(e8e.id);
                r8j.liked = false;
                r8j.likedCount--;
                e8e.ext.data = r8j;
                try {
                    top.player.setLike(r8j)
                } catch (e) {}
                return r8j
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.pw3x, "itemchange", {
                    attr: "likedCount",
                    data: e8e.ext.data
                })
            }
        }
    });
    p8h.pw3x = NEJ.C();
    b8h = p8h.pw3x.O9F(p8h.gZ1x);
    b8h.cuf3x = function() {
        var cT0x = GUser.userId;
        this.nQ3x({
            limit: 1001,
            key: "program_fav-" + cT0x,
            data: {
                offset: 0,
                limit: 1e3,
                uid: cT0x
            }
        })
    }
    ;
    b8h.cug3x = function(cR0x) {
        var oe3x = cR0x[this.uK6E];
        l8d.cgl0x(4, function(R9I) {
            R9I.rr4v("track_program-" + oe3x, cR0x.songs)
        });
        delete cR0x.songs;
        var bK9B = cR0x.mainSong;
        l8d.cgl0x(4, function(R9I) {
            R9I.rr4v("track_program_main-" + oe3x, !bK9B ? [] : [bK9B])
        });
        cR0x.mainSong = (bK9B || Y9P).id
    }
    ;
    b8h.cui3x = function(C9t) {
        var cR0x = this.eh0x(C9t)
            , cT0x = localCache.ZF5K("host.profile.userId");
        return !!cR0x && cR0x.dj.userId == cT0x
    }
    ;
    b8h.cuj3x = function(C9t) {
        return !1
    }
    ;
    b8h.bnU9L = function(r8j) {
        h8b.z9q(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Aa8S(r8j)
        });
        return r8j
    }
    ;
    b8h.cgx0x = function(C9t) {
        this.ck9b("program-update-count", {
            data: {
                id: C9t
            }
        })
    }
    ;
    l8d.bIT3x = function(e8e) {
        var R9I = p8h.pw3x.B9s({
            onitemadd: function() {
                (e8e.onsuccess || bm9d)()
            },
            onerror: function() {
                (e8e.onerror || bm9d)()
            }
        });
        if (e8e.data.liked) {
            R9I.Lw1x(e8e.data)
        } else {
            R9I.uw6q(e8e.data)
        }
    }
    ;
    b8h.uw6q = function(cR0x) {
        if (!l8d.gY1x())
            return;
        var cm9d = {
            ext: {}
        };
        if (k8c.kg2x(cR0x)) {
            cm9d.id = cR0x.id;
            cm9d.ext.data = cR0x
        } else {
            cm9d.id = cR0x
        }
        this.ck9b("program-like", cm9d)
    }
    ;
    b8h.Lw1x = function(cR0x) {
        if (!l8d.gY1x())
            return;
        var cm9d = {
            ext: {}
        };
        if (k8c.kg2x(cR0x)) {
            cm9d.id = cR0x.id;
            cm9d.ext.data = cR0x
        } else {
            cm9d.id = cR0x
        }
        this.ck9b("program-unlike", cm9d)
    }
    ;
    H9y.ft1x.B9s({
        element: p8h.pw3x,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, eU0x = NEJ.R, H9y = c8g("nej.ut"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), v9m = c8g("nej.j"), p8h = c8g("nm.d"), n8f = c8g("nm.l"), l8d = c8g("nm.x"), J9A = "playlist-tracks_", l8d = c8g("nm.x"), b8h;
    p8h.eQ0x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e8e) {
                e8e.data.c = JSON.stringify([{
                    id: e8e.data.id
                }])
            },
            format: function(Q9H, e8e) {
                var bf9W = l8d.DN9E(Q9H.songs[0]);
                bf9W.privilege = Q9H.privileges[0];
                return bf9W
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e8e) {
                e8e.data.n = 1e3
            },
            format: function(Q9H, e8e) {
                var gC1x = [];
                this.rL4P.bnU9L(Q9H.playlist);
                k8c.be9V(Q9H.playlist.tracks, function(bK9B, s8k) {
                    var bIS3x = l8d.DN9E(bK9B);
                    bIS3x.privilege = Q9H.privileges[s8k];
                    gC1x.push(bIS3x)
                }, this);
                return gC1x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q9H, e8e) {
                var gC1x = [];
                k8c.be9V(Q9H.songs, function(bf9W) {
                    gC1x.push(l8d.DN9E(bf9W))
                });
                return gC1x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e8e) {
                var bv9m = {}
                    , j8b = e8e.data
                    , cgc0x = this.gN1x(e8e.key) || [];
                DL9C = [];
                k8c.be9V(cgc0x, function(bK9B) {
                    var C9t = k8c.kg2x(bK9B) ? bK9B.id : bK9B;
                    bv9m[C9t] = true
                });
                e8e.ext = [];
                k8c.be9V(j8b.tracks, function(bK9B) {
                    var C9t = k8c.kg2x(bK9B) ? bK9B.id : bK9B;
                    if (!bv9m[C9t]) {
                        DL9C.push(C9t);
                        bv9m[C9t] = true;
                        e8e.ext.push(bK9B)
                    }
                });
                j8b.trackIds = JSON.stringify(DL9C);
                j8b.op = "add";
                if (!DL9C.length) {
                    e8e.value = {
                        code: 502
                    }
                }
            },
            format: function(Q9H, e8e) {
                n8f.Z9Q.N9E({
                    tip: "已添加至歌单"
                });
                var iK2x = this.rL4P.eh0x(e8e.data.pid);
                if (!!Q9H.coverImgUrl)
                    iK2x.coverImgUrl = Q9H.coverImgUrl;
                k8c.mu3x(e8e.ext, function(bK9B) {
                    this.xN7G(e8e, k8c.kg2x(bK9B) ? bK9B : null);
                    if (!!iK2x)
                        iK2x.trackCount++
                }, this);
                h8b.z9q(p8h.hh1x, "itemchange", {
                    data: iK2x || {},
                    cmd: "add"
                });
                this.z9q("onaddsuccess");
                return null
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.uH6B, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                });
                var oe3x = e8e.data.pid
                    , co9f = this.jG2x(e8e.key)
            },
            onmessage: function() {
                var lm2x = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(cb9S) {
                    setTimeout(function() {
                        n8f.Z9Q.N9E({
                            tip: lm2x[cb9S] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e8e) {
                var j8b = e8e.data;
                e8e.ext = j8b.trackIds;
                j8b.trackIds = JSON.stringify(j8b.trackIds);
                j8b.op = "del"
            },
            format: function(Q9H, e8e) {
                var iK2x = this.rL4P.eh0x(e8e.data.pid);
                k8c.be9V(e8e.ext, function(C9t) {
                    this.bdC6w({
                        id: C9t,
                        key: "track_playlist-" + e8e.data.pid
                    }, !0);
                    if (!!iK2x)
                        iK2x.trackCount = Math.max(0, iK2x.trackCount - 1)
                }, this);
                h8b.z9q(p8h.hh1x, "itemchange", {
                    data: iK2x || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d8f, e8e) {
                h8b.z9q(p8h.uH6B, "listchange", {
                    key: e8e.key,
                    action: "refresh"
                })
            },
            onmessage: function(cb9S) {
                l8d.bob9S({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q9H, e8e) {
                return this.bIR3x.bnU9L(Q9H.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q9H, e8e) {
                var i8a = [];
                if (e8e.data.type == -1) {
                    if (Q9H.weekData && Q9H.weekData.length) {
                        e8e.data.type = 1
                    } else {
                        e8e.data.type = 0
                    }
                }
                if (e8e.data.type == 1) {
                    i8a = this.bIQ3x(Q9H.weekData)
                } else {
                    i8a = this.bIQ3x(Q9H.allData)
                }
                return i8a
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q9H) {
                var mD3x = [];
                k8c.be9V(Q9H.recommend, function(bf9W, s8k) {
                    mD3x.push({
                        action: "recommendimpress",
                        json: {
                            alg: bf9W.alg,
                            scene: "user-song",
                            position: s8k,
                            id: bf9W.id
                        }
                    })
                });
                this.kz2x.Zd5i(mD3x);
                return Q9H.recommend
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e8e) {
                e8e.data.lv = 0;
                e8e.data.tv = 0
            },
            format: function(m8e, e8e) {
                return m8e
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p8h.uH6B = NEJ.C();
    b8h = p8h.uH6B.O9F(p8h.gZ1x);
    b8h.cl9c = function() {
        this.cs9j();
        this.rL4P = p8h.hh1x.B9s();
        this.bIR3x = p8h.pw3x.B9s();
        this.kz2x = p8h.hK1x.B9s()
    }
    ;
    b8h.bIQ3x = function(i8a) {
        var m8e = []
            , fb0x = 0;
        k8c.be9V(i8a, function(r8j, s8k) {
            var bf9W = l8d.DN9E(r8j.song);
            if (s8k == 0) {
                fb0x = r8j.score
            }
            bf9W.max = fb0x;
            bf9W.playCount = r8j.playCount;
            bf9W.score = r8j.score;
            m8e.push(bf9W)
        });
        return m8e
    }
    ;
    H9y.ft1x.B9s({
        element: p8h.uH6B,
        event: ["listchange"]
    })
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d
        , d = (new J).d
        , e = (new J).d
        , f = (new J).d
        , g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")]
            , J = [g("YPU7UcUUUlYkU0VkUU")]
            , b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")]
            , c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")]
            , Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15]
                            , l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]], g = b[74], e = [];
                    if (l == a[541])
                        l = h[c],
                            d = a[15],
                            e.push(f[l >>> a[16] & a[153]]),
                            e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                            e.push(g),
                            e.push(g);
                    else if (l == a[16])
                        l = h[c],
                            d = h[c + a[541]],
                            h = a[15],
                            e.push(f[l >>> a[16] & a[153]]),
                            e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                            e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                            e.push(g);
                    else if (l == a[19])
                        l = h[c],
                            d = h[c + a[541]],
                            h = h[c + a[16]],
                            e.push(f[l >>> a[16] & a[153]]),
                            e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                            e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                            e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23]
                            , g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                                g.appendChild(k),
                                c.height = k.offsetHeight,
                                c.width = k.offsetWidth,
                                g[b[307]](k),
                                c
                        }
                        var d = [c[21], c[141], B[6]]
                            , l = []
                            , f = c[139]
                            , e = b[327]
                            , g = C[b[258]]
                            , k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f])
                                    , g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null
                            , h = null
                            , d = [];
                        try {
                            h = C[b[167]](c[79]),
                                a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76]
                                , l = b[240]
                                , g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]]()
                                , X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                                h[b[341]](la),
                                h[b[177]](t, X),
                                h[b[177]](t, la),
                                h[c[45]](t),
                                h[b[309]](t),
                                t.n = h[c[92]](t, b[205]),
                                t.m = h[c[62]](t, c[29]),
                                h[c[74]](t.o),
                                h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                                h[J[0]](t.m, a[541], a[541]),
                                h[b[139]](h[b[259]], a[15], g.l),
                                M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155])
                            , d = []
                            , f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                    h.style.color = f[l],
                                    d.push(f[l]),
                                    d.push(window[c[154]](h).getPropertyValue(c[36])),
                                    C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79])
                                , d = h[B[7]](b[354])
                                , f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]]
                            , d = []
                            , f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a),
                                    a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++)
                                    ;
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }
                    var z = Array.prototype.forEach
                        , I = Array.prototype.map
                        , n = {
                        e: M,
                        j: !0,
                        i: !0,
                        h: !0,
                        b: !0,
                        a: !0
                    };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b),
                    null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = []
                            , l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                    n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]],
                            typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))),
                            u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))),
                            u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f; )
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                            ++m,
                            k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                            k = k << a[56] | k >>> a[60],
                            k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                            e ^= k,
                            e = e << a[50] | e >>> a[64],
                            e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                            e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299],
                                k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                                k = k << a[56] | k >>> a[60],
                                k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                                e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0])
                                    , p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                    E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++,
                                    w += v) : (u++,
                                    H += v) : (u++,
                                    H += C)
                            } catch (A) {
                                u++,
                                    H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                            d.push(h),
                            d.push(U(N, b[35]).join(b[0])),
                            d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta
                            , f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]]
                        , e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262], k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date,
                        a = new Date(f),
                        f = a[b[215]](),
                        g.push(c[91]),
                        g.push(b[172]),
                        g.push(b[305]),
                        g.push(b[325]),
                        g.push(b[319]),
                        g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]),
                        g.push(b[152]),
                        g.push(b[234]),
                        g.push(b[260]),
                        g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d),
                                Ha(V, d))
                        }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0
                        , t = {
                        v: b[227]
                    }
                        , l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa
                        , r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]),
                            t[b[159]] = b[42],
                            h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                            t[b[159]] = b[42],
                            h = !1
                    }
                    try {
                        var v = l = Ca(t)
                            , t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y)
                            , p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301]
                                , z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length
                                , J = a[15]
                                , J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha
                                , z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E)
                                , ja = f(xa)
                                , ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length; )
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)),
                                            R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                            h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67],b[13]), new m(b[330],b[14]), new m(c[6],b[11]), new m(c[65],b[12]), new m(c[140],b[10]), new m(b[257],b[9]), new m(b[2],b[19]), new m(b[235],b[22]), new m(c[119],b[6]), new m(c[89],c[164]), new m(c[58],c[162]), new m(b[320],c[163]), new m(B[2],c[159]), new m(c[16],c[161]), new m(c[30],c[156]), new m(b[342],c[158]), new m(c[172],c[165]), new m(b[171],c[168]), new m(b[253],c[128],!1), new m(b[294],c[129],!1), new m(b[168],c[126],!1), new m(b[311],c[127],!1), new m(b[265],c[144],!1)]
                    , Qa = da() ? !1 : !0
                    , Wa = window && window[c[65]] && window[c[65]].host || b[353]
                    , C = window[b[330]]
                    , y = window[c[6]]
                    , N = a[16]
                    , T = a[16]
                    , aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]]
                    , La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]]
                    , Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]]
                    , F = a[158]
                    , L = a[158]
                    , ha = a[23]
                    , va = a[23]
                    , d = function(b, c) {
                    if (null == b)
                        return null;
                    for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                        e.push(Y(b[g], d++));
                    return e
                }
                    , Za = b[345]
                    , S = b[299]
                    , V = c[100]
                    , fa = a[91]
                    , ea = b[275]
                    , Ta = ea.length
                    , sa = a[444]
                    , ta = a[396]
                    , Ya = !1
                    , Xa = !1
                    , O = window && window[c[65]] && window[c[65]][b[310]] || c[95]
                    , A = c[56]
                    , A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                        return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g))
                            return e[f]
                    }
                    return null
                }(O, A)
                    , pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                    , qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                    , K = function(c) {
                    var d = [];
                    if (!c)
                        return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++)
                        f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e,
                            d.push(e));
                    return d
                }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a),
                                c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()),
                    Ea(ra()),
                    O = Va(),
                window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var bIP3x;
    var td5i = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cfQ0x = 0;
    var bIO3x = 0;
    var bIN3x = 1;
    var bIM3x = 0;
    var bpJ9A = "";
    var bIK3x = "";
    var bIJ3x = "";
    var XO4S = "";
    var XM4Q = "";
    var bpT9K = "";
    var bIH3x = 0;
    var bIG3x = "";
    var Ir0x = "";
    var DK9B = 0;
    var bqo9f = ntes_get_domain();
    var bqB9s = null;
    var cuk3x = "//analytics.163.com";
    var cfA9r = function() {};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqo9f
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqo9f
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqo9f
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
            , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cfz9q = 0;
    var LI1x = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * LI1x))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << LI1x) - 1;
        for (var b = 0; b < d.length * LI1x; b += LI1x) {
            c[b >> 5] |= (d.charCodeAt(b / LI1x) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cfz9q ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        XO4S = "-";
        bpT9K = "-";
        XM4Q = "-";
        var c = window.self
            , b = window.screen
            , a = window.navigator;
        if (c.screen) {
            XO4S = b.width + "x" + b.height;
            bpT9K = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                XO4S = f.width + "x" + f.height
            }
        }
        if (a.language) {
            XM4Q = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                XM4Q = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bIH3x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cul3x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cfA9r;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        }
        ;
        a.onerror = function() {
            window[e] = null;
            d()
        }
        ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bIP3x;
        bpJ9A = escape(a || document.location);
        bIK3x = escape(m || document.title);
        bIJ3x = l === true ? "" : escape(l || document.referrer);
        bIG3x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqB9s == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqB9s = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpJ9A.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqB9s) {
                td5i = fetch_visitor_hash();
                bIO3x = 1;
                ntes_set_cookie_long("_ntes_nnid", td5i + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", td5i)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            td5i = h.substr(0, o);
            DK9B = h.substr(o + 1, p - o - 1);
            if (DK9B == 0) {
                DK9B = (new Date).getTime();
                f = true
            }
            if (!td5i) {
                td5i = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", td5i + "," + DK9B);
                ntes_set_cookie_long("_ntes_nuid", td5i)
            }
            if (DK9B != 0 && b - DK9B > 365 * 86400 * 1e3) {
                DK9B = 0;
                ntes_set_cookie_long("_ntes_nnid", td5i + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", td5i)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
                , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Ir0x = c("P_INFO", "P_OINFO");
        Ir0x = Ir0x ? Ir0x.substr(0, Ir0x.indexOf("|")) : "";
        bIM3x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", td5i, "&_nvtm=", cfQ0x, "&_nvsf=", bIN3x, "&_nvfi=", bIO3x, "&_nlag=", XM4Q, "&_nlmf=", bIH3x, "&_nres=", XO4S, "&_nscd=", bpT9K, "&_nstm=", bIM3x, "&_nurl=", bpJ9A, "&_ntit=", bIK3x, "&_nref=", bIJ3x, "&_nfla=", bIG3x, "&_nssn=", Ir0x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bIN3x = 0;
        neteaseTracker.callback = null
    }
    bIP3x = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {}
        , l = d.lib = {}
        , s = function() {}
        , t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                }
            );
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a)
                a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
        , r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words
                , e = a.words
                , j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4)
                for (var k = 0; k < a; k++)
                    c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length)
                for (k = 0; k < a; k += 4)
                    c[j + k >>> 2] = e[k >>> 2];
            else
                c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words
                , c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4)
                c.push(4294967296 * u.random() | 0);
            return new r.init(c,a)
        }
    })
        , w = d.enc = {}
        , v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2)
                e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e,c / 2)
        }
    }
        , b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++)
                e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++)
                e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e,c)
        }
    }
        , x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }
        , q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.j8b = new r.init;
            this.bIE3x = 0
        },
        XB4F: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.j8b.concat(a);
            this.bIE3x += a.sigBytes
        },
        yD7w: function(a) {
            var c = this.j8b
                , e = c.words
                , j = c.sigBytes
                , k = this.blockSize
                , b = j / (4 * k)
                , b = a ? u.ceil(b) : u.max((b | 0) - this.bIF3x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this.bID3x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.j8b = this.j8b.clone();
            return a
        },
        bIF3x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bat5y()
        },
        update: function(a) {
            this.XB4F(a);
            this.yD7w();
            return this
        },
        finalize: function(a) {
            a && this.XB4F(a);
            return this.Xx4B()
        },
        blockSize: 16,
        bar5w: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cfs9j: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS
        , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words
                , p = d.sigBytes
                , t = this.bv9m;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4; )
                    d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length
                , s = this.bv9m
                , t = s.charAt(64);
            t && (t = d.indexOf(t),
            -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                        , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bv9m: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bat5y: function() {
            this.dG0x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bID3x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                    , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dG0x.words
                , c = q[n + 0]
                , e = q[n + 1]
                , j = q[n + 2]
                , k = q[n + 3]
                , z = q[n + 4]
                , r = q[n + 5]
                , t = q[n + 6]
                , w = q[n + 7]
                , v = q[n + 8]
                , A = q[n + 9]
                , B = q[n + 10]
                , C = q[n + 11]
                , u = q[n + 12]
                , D = q[n + 13]
                , E = q[n + 14]
                , x = q[n + 15]
                , f = a[0]
                , m = a[1]
                , g = a[2]
                , h = a[3]
                , f = p(f, m, g, h, c, 7, b[0])
                , h = p(h, f, m, g, e, 12, b[1])
                , g = p(g, h, f, m, j, 17, b[2])
                , m = p(m, g, h, f, k, 22, b[3])
                , f = p(f, m, g, h, z, 7, b[4])
                , h = p(h, f, m, g, r, 12, b[5])
                , g = p(g, h, f, m, t, 17, b[6])
                , m = p(m, g, h, f, w, 22, b[7])
                , f = p(f, m, g, h, v, 7, b[8])
                , h = p(h, f, m, g, A, 12, b[9])
                , g = p(g, h, f, m, B, 17, b[10])
                , m = p(m, g, h, f, C, 22, b[11])
                , f = p(f, m, g, h, u, 7, b[12])
                , h = p(h, f, m, g, D, 12, b[13])
                , g = p(g, h, f, m, E, 17, b[14])
                , m = p(m, g, h, f, x, 22, b[15])
                , f = d(f, m, g, h, e, 5, b[16])
                , h = d(h, f, m, g, t, 9, b[17])
                , g = d(g, h, f, m, C, 14, b[18])
                , m = d(m, g, h, f, c, 20, b[19])
                , f = d(f, m, g, h, r, 5, b[20])
                , h = d(h, f, m, g, B, 9, b[21])
                , g = d(g, h, f, m, x, 14, b[22])
                , m = d(m, g, h, f, z, 20, b[23])
                , f = d(f, m, g, h, A, 5, b[24])
                , h = d(h, f, m, g, E, 9, b[25])
                , g = d(g, h, f, m, k, 14, b[26])
                , m = d(m, g, h, f, v, 20, b[27])
                , f = d(f, m, g, h, D, 5, b[28])
                , h = d(h, f, m, g, j, 9, b[29])
                , g = d(g, h, f, m, w, 14, b[30])
                , m = d(m, g, h, f, u, 20, b[31])
                , f = l(f, m, g, h, r, 4, b[32])
                , h = l(h, f, m, g, v, 11, b[33])
                , g = l(g, h, f, m, C, 16, b[34])
                , m = l(m, g, h, f, E, 23, b[35])
                , f = l(f, m, g, h, e, 4, b[36])
                , h = l(h, f, m, g, z, 11, b[37])
                , g = l(g, h, f, m, w, 16, b[38])
                , m = l(m, g, h, f, B, 23, b[39])
                , f = l(f, m, g, h, D, 4, b[40])
                , h = l(h, f, m, g, c, 11, b[41])
                , g = l(g, h, f, m, k, 16, b[42])
                , m = l(m, g, h, f, t, 23, b[43])
                , f = l(f, m, g, h, A, 4, b[44])
                , h = l(h, f, m, g, u, 11, b[45])
                , g = l(g, h, f, m, x, 16, b[46])
                , m = l(m, g, h, f, j, 23, b[47])
                , f = s(f, m, g, h, c, 6, b[48])
                , h = s(h, f, m, g, w, 10, b[49])
                , g = s(g, h, f, m, E, 15, b[50])
                , m = s(m, g, h, f, r, 21, b[51])
                , f = s(f, m, g, h, u, 6, b[52])
                , h = s(h, f, m, g, k, 10, b[53])
                , g = s(g, h, f, m, B, 15, b[54])
                , m = s(m, g, h, f, e, 21, b[55])
                , f = s(f, m, g, h, v, 6, b[56])
                , h = s(h, f, m, g, x, 10, b[57])
                , g = s(g, h, f, m, t, 15, b[58])
                , m = s(m, g, h, f, D, 21, b[59])
                , f = s(f, m, g, h, z, 6, b[60])
                , h = s(h, f, m, g, C, 10, b[61])
                , g = s(g, h, f, m, j, 15, b[62])
                , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        Xx4B: function() {
            var b = this.j8b
                , n = b.words
                , a = 8 * this.bIE3x
                , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.yD7w();
            b = this.dG0x;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                    n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dG0x = this.dG0x.clone();
            return b
        }
    });
    t.MD5 = v.bar5w(r);
    t.HmacMD5 = v.cfs9j(r)
})(Math);
(function() {
    var u = CryptoJS
        , p = u.lib
        , d = p.Base
        , l = p.WordArray
        , p = u.algo
        , s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)
                    n = s.finalize(n),
                        s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS
        , d = p.lib
        , l = d.Base
        , s = d.WordArray
        , t = d.BufferedBlockAlgorithm
        , r = p.enc.Base64
        , w = p.algo.EvpKDF
        , v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.bay5D, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.cfr9i, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bIC3x = e;
            this.J9A = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.bat5y()
        },
        process: function(e) {
            this.XB4F(e);
            return this.yD7w()
        },
        finalize: function(e) {
            e && this.XB4F(e);
            return this.Xx4B()
        },
        keySize: 4,
        ivSize: 4,
        bay5D: 1,
        cfr9i: 2,
        bar5w: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        Xx4B: function() {
            return this.yD7w(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
        , x = function(e, a, b) {
        var c = this.bIA3x;
        c ? this.bIA3x = u : c = this.bIz3x;
        for (var d = 0; d < b; d++)
            e[a + d] ^= c[d]
    }
        , q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bIv3x = e;
            this.bIA3x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bIv3x
                , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bIz3x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bIv3x
                , c = b.blockSize
                , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bIz3x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg
                , b = a.iv
                , a = a.mode;
            if (this.bIC3x == this.bay5D)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                    this.bIF3x = 1;
            this.eC0x = c.call(a, this, b && b.words)
        },
        bID3x: function(a, b) {
            this.eC0x.processBlock(a, b)
        },
        Xx4B: function() {
            var a = this.cfg.padding;
            if (this.bIC3x == this.bay5D) {
                a.pad(this.j8b, this.blockSize);
                var b = this.yD7w(!0)
            } else
                b = this.yD7w(!0),
                    a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    })
        , b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    }
        , a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.VB3x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        VB3x: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    })
        , p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    }
        , c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.VB3x(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
            , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
            , F = a[z]
            , G = a[F]
            , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
            j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
        , d = d.AES = p.extend({
        bat5y: function() {
            for (var a = this.J9A, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.ceV9M = d + 6) + 1), e = this.ceT9K = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                        k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                        k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this.ceO9F = [];
            for (d = 0; d < a; d++)
                j = a - d,
                    k = d % 4 ? e[j] : e[j - 4],
                    c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bIu3x(a, b, this.ceT9K, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bIu3x(a, c, this.ceO9F, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bIu3x: function(a, b, c, d, e, j, l, f) {
            for (var m = this.ceV9M, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                 var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                     , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                     , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                     , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                     , g = q
                     , h = s
                     , k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p.bar5w(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
        this.d = biFromHex(b),
        this.m = biFromHex(c),
        this.chunkSize = 2 * biHighIndex(this.m),
        this.radix = 16,
        this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e; )
        c[e] = b.charCodeAt(e),
            e++;
    for (; 0 != c.length % a.chunkSize; )
        c[e++] = 0;
    for (f = c.length,
             g = "",
             e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
                 h = 0,
                 i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
                j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
            l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
            g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
                 g = a.barrett.powMod(h, a.d),
                 f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
        d
}
function setMaxDigits(a) {
    maxDigits = a,
        ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
        bigOne = new BigInt,
        bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
        this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c); )
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
                 f = e % dpl10,
             0 == f && (f = dpl10),
                 d = biFromNumber(Number(a.substr(c, f))),
                 c += f; c < a.length; )
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
                c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
        b.isNeg = a.isNeg,
        b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
             a = Math.abs(a),
             c = 0; a > 0; )
        b.digits[c++] = a & maxDigitVal,
            a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
             d = biDivideModulo(a, c),
             e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero); )
        d = biDivideModulo(d[0], c),
            digit = d[1].digits[0],
            e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
             c = biDivideModulo(a, b),
             d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero); )
        c = biDivideModulo(c[0], b),
            d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15
        , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
            a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
             d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
            b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
             e = 0; d > 0; d -= 4,
             ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
             g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
            i = charToHex(h),
            j = biMultiplyDigit(f, i),
            e = biAdd(e, j),
            f = biMultiplyDigit(f, b);
    return e.isNeg = c,
        e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biSubtract(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
                 d = 0,
                 f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
                c.digits[f] = 65535 & e,
                d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biAdd(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
                 e = 0,
                 f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
                c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
                     f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                    c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                    e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; )
        --b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
                 i = k,
                 j = 0; e >= j; ++j,
                 ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
                c.digits[i] = h & maxDigitVal,
                d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
        c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
             c = biHighIndex(a),
             d = 0,
             f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
            result.digits[f] = e & maxDigitVal,
            d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
        result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
             h = d; f > g; ++g,
             ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
             e = b % bitsPerDigit,
             f = bitsPerDigit - e,
             g = d.digits.length - 1,
             h = g - 1; g > 0; --g,
             --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
        d.isNeg = a.isNeg,
        d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
             e = b % bitsPerDigit,
             f = bitsPerDigit - e,
             g = 0,
             h = g + 1; g < d.digits.length - 1; ++g,
             ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
        d.isNeg = a.isNeg,
        d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
        c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
        c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
        c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
            f.isNeg = !b.isNeg,
            a.isNeg = !1,
            b.isNeg = !1,
            g = biSubtract(b, a),
            a.isNeg = !0,
            b.isNeg = e) : (f = new BigInt,
            g = biCopy(a)),
            new Array(f,g);
    for (f = new BigInt,
             g = a,
             h = Math.ceil(d / bitsPerDigit) - 1,
             i = 0; b.digits[h] < biHalfRadix; )
        b = biShiftLeft(b, 1),
            ++i,
            ++d,
            h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
             c += i,
             j = Math.ceil(c / bitsPerDigit) - 1,
             k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k); )
        ++f.digits[j - h],
            g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
                 n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
                 o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
                 p = h >= b.digits.length ? 0 : b.digits[h],
                 q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
                 f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
                 r = f.digits[l - h - 1] * (p * biRadix + q),
                 s = m * biRadixSquared + (n * biRadix + o); r > s; )
            --f.digits[l - h - 1],
                r = f.digits[l - h - 1] * (p * biRadix | q),
                s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
            g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k),
            --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
        f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
        b = biShiftRight(b, i),
        g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
        new Array(f,g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ; ) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
                b >>= 1,
            0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ; ) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
                f = biShiftRight(f, 1),
            0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
        this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
        this.mu = biDivide(b, this.modulus),
        this.bkplus1 = new BigInt,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = BarrettMu_modulo,
        this.multiplyMod = BarrettMu_multiplyMod,
        this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
             i = biCompare(h, this.modulus) >= 0; i; )
        h = biSubtract(h, this.modulus),
            i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
             d = a,
             e = b; ; ) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
                e = biShiftRight(e, 1),
            0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20),
    dpl10 = 15,
    lr10 = biFromNumber(1e15),
    hexatrigesimalToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"),
    hexToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),
    highBitMasks = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),
    lowBitMasks = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
                e = Math.floor(e),
                c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
            , d = CryptoJS.enc.Utf8.parse("0102030405060708")
            , e = CryptoJS.enc.Utf8.parse(a)
            , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
            d = new RSAKeyPair(b,"",c),
            e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
            , i = a(16);
        return h.encText = b(d, g),
            h.encText = b(h.encText, i),
            h.encSecKey = c(i, e, f),
            h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
            f
    }
    window.asrsea = d,
        window.ecnonasr = e
}();
(function() {
    var c8g = NEJ.P
        , dO0x = c8g("nej.g")
        , v9m = c8g("nej.j")
        , k8c = c8g("nej.u")
        , LT1x = c8g("nm.x.ek");
    LT1x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    LT1x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c8g = NEJ.P
        , dO0x = c8g("nej.g")
        , v9m = c8g("nej.j")
        , k8c = c8g("nej.u")
        , LT1x = c8g("nm.x.ek")
        , l8d = c8g("nm.x");
    if (v9m.bp9g.redefine)
        return;
    window.GEnc = true;
    var baT5Y = function(ceN9E) {
        var m8e = [];
        k8c.be9V(ceN9E, function(ceM9D) {
            m8e.push(LT1x.emj[ceM9D])
        });
        return m8e.join("")
    };
    var ceJ9A = v9m.bp9g;
    v9m.bp9g = function(V9M, e8e) {
        var j8b = {}
            , e8e = NEJ.X({}, e8e)
            , lB2x = V9M.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V9M) && !(e8e.headers && e8e.headers[dO0x.xj7c] == dO0x.DB9s) && !e8e.noEnc) {
            if (lB2x != -1) {
                j8b = k8c.hi1x(V9M.substring(lB2x + 1));
                V9M = V9M.substring(0, lB2x)
            }
            if (e8e.query) {
                j8b = NEJ.X(j8b, k8c.fe1x(e8e.query) ? k8c.hi1x(e8e.query) : e8e.query)
            }
            if (e8e.data) {
                j8b = NEJ.X(j8b, k8c.fe1x(e8e.data) ? k8c.hi1x(e8e.data) : e8e.data)
            }
            j8b["csrf_token"] = v9m.gG1x("__csrf");
            V9M = V9M.replace("api", "weapi");
            e8e.method = "post";
            delete e8e.query;
            var bIn3x = window.asrsea(JSON.stringify(j8b), baT5Y(["流泪", "强"]), baT5Y(LT1x.md), baT5Y(["爱心", "女孩", "惊恐", "大笑"]));
            e8e.data = k8c.df0x({
                params: bIn3x.encText,
                encSecKey: bIn3x.encSecKey
            })
        }
        ceJ9A(V9M, e8e)
    }
    ;
    v9m.bp9g.redefine = true
})();
(function() {
    window.setTimeout(function() {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function() {})();
(function() {})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , cK0x = c8g("nej.p")
        , k8c = c8g("nej.u")
        , h8b = c8g("nej.v")
        , v9m = c8g("nej.j")
        , di0x = c8g("nm.u")
        , l8d = c8g("nm.x")
        , p8h = c8g("nm.d")
        , n8f = c8g("nm.l")
        , bbe5j = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
        , j8b = {
        "大笑": "86",
        "可爱": "85",
        "憨笑": "359",
        "色": "95",
        "亲亲": "363",
        "惊恐": "96",
        "流泪": "356",
        "亲": "362",
        "呆": "352",
        "哀伤": "342",
        "呲牙": "343",
        "吐舌": "348",
        "撇嘴": "353",
        "怒": "361",
        "奸笑": "341",
        "汗": "97",
        "痛苦": "346",
        "惶恐": "354",
        "生病": "350",
        "口罩": "351",
        "大哭": "357",
        "晕": "355",
        "发怒": "115",
        "开心": "360",
        "鬼脸": "94",
        "皱眉": "87",
        "流感": "358",
        "爱心": "33",
        "心碎": "34",
        "钟情": "303",
        "星星": "309",
        "生气": "314",
        "便便": "89",
        "强": "13",
        "弱": "372",
        "拜": "14",
        "牵手": "379",
        "跳舞": "380",
        "禁止": "374",
        "这边": "262",
        "爱意": "106",
        "示爱": "376",
        "嘴唇": "367",
        "狗": "81",
        "猫": "78",
        "猪": "100",
        "兔子": "459",
        "小鸡": "450",
        "公鸡": "461",
        "幽灵": "116",
        "圣诞": "411",
        "外星": "101",
        "钻石": "52",
        "礼物": "107",
        "男孩": "0",
        "女孩": "1",
        "蛋糕": "337",
        18: "186",
        "圈": "312",
        "叉": "313"
    }
        , ceF9w = function() {
        if (h8b && h8b.z9q) {
            h8b.dispatchEventalias = h8b.z9q
        }
    };
    ceF9w();
    l8d.bbi5n = function(bK9B) {
        if (!bK9B || bK9B.copyrightId === undefined || !!bK9B.program)
            return false;
        if (window.GAbroad) {
            bK9B.fee = 0;
            return true
        }
        if (bK9B.status < 0)
            return true;
        var Mg1x;
        if (typeof GCopyrights !== "undefined")
            Mg1x = GCopyrights;
        try {
            if (!Mg1x && !!top.GCopyrights)
                Mg1x = top.GCopyrights
        } catch (e) {}
        if (Mg1x) {
            var s8k = k8c.cV0x(Mg1x, bK9B.copyrightId);
            if (s8k >= 0)
                return true
        }
        return false
    }
    ;
    l8d.bbn5s = function() {
        var zM8E = /^\/m\/(song|album|artist|playlist|dj|search)\?/
            , uE6y = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }
            , ceD9u = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var ceB9s = function(J9A, j8b, Mh1x) {
            switch (J9A) {
                case "event":
                    j8b = j8b.split("|");
                    return "/event?id=" + j8b[0] + "&uid=" + j8b[1];
                case "searchsong":
                case "searchlyric":
                    var t8l = J9A == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j8b) + "&type=" + t8l;
                case "toplist":
                    return "/discover/toplist?id=" + j8b + "&_hash=songlist-" + Mh1x;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Mh1x;
                    ;
                case "record":
                    j8b = j8b.split("|");
                    return "/user/songs/rank?id=" + j8b[0] + "&cat=" + j8b[1];
                    break;
                default:
                    return "/" + J9A + "?id=" + j8b + "&_hash=songlist-" + Mh1x
            }
        };
        return function(dK0x, Mh1x) {
            if (!dK0x)
                return null;
            var GL9C = dK0x.fid || (dK0x.type != 18 ? dK0x.type : null)
                , bbw6q = dK0x.fdata || dK0x.rid
                , bIg3x = dK0x.page || dK0x.fhref;
            var J9A = uE6y[GL9C];
            if (!J9A) {
                var xf7Y = (bIg3x || "").match(zM8E);
                if (xf7Y)
                    J9A = xf7Y[1]
            }
            if (!J9A)
                return null;
            return {
                title: ceD9u[J9A],
                link: !uE6y[GL9C] ? bIg3x : ceB9s(J9A, bbw6q, Mh1x),
                fid: GL9C,
                fdata: bbw6q
            }
        }
    }();
    l8d.Xa4e = function(ku2x) {
        var du0x = ku2x;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            du0x = GUser;
        return du0x
    }
    ;
    l8d.gY1x = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
    ;
    l8d.Gx9o = function() {
        var zM8E = /#(.*?)$/;
        return function(gi1x) {
            var iM2x = gi1x === false ? location : top.location;
            return zM8E.test(iM2x.href) ? RegExp.$1 : ""
        }
    }();
    l8d.Ab8T = function() {
        var bIc3x = l8d.bbY6S().supported
            , Ai8a = a7h.cU0x("audio")
            , bIb3x = Ai8a.canPlayType && Ai8a.canPlayType("audio/mpeg");
        if (cK0x.Kh0x.mac) {
            if (bIb3x)
                return 2;
            if (bIc3x)
                return 1;
            return 0
        } else {
            if (bIc3x)
                return 1;
            if (bIb3x)
                return 2;
            return 0
        }
    }
    ;
    l8d.bbY6S = function() {
        var gd1x, bbZ6T = !1, bcc6W = "";
        if (cK0x.cS0x.browser == "ie") {
            try {
                gd1x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gd1x = null
            }
            if (gd1x) {
                bbZ6T = !0;
                bcc6W = gd1x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gd1x = navigator.plugins["Shockwave Flash"];
                if (gd1x) {
                    bbZ6T = !0;
                    bcc6W = gd1x.description
                }
            }
        }
        return {
            supported: bbZ6T,
            version: bcc6W
        }
    }
    ;
    l8d.qE4I = function() {
        return "网易云音乐"
    }
    ;
    l8d.cdZ9Q = function() {
        return j8b
    }
    ;
    l8d.bIa3x = function(da0x) {
        var C9t = j8b[da0x];
        return C9t == null ? "" : bbe5j.replace("{ID}", C9t)
    }
    ;
    l8d.tw5B = function(bi9Z, dD0x, Hr0x) {
        if (!bi9Z)
            return "";
        if (!!Hr0x) {
            bi9Z = l8d.cdW9N(bi9Z)
        }
        return l8d.bcs6m(l8d.cdU9L(bi9Z, dD0x))
    }
    ;
    l8d.bcu6o = function() {
        var Mj1x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
            , bcw6q = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }
            , cdP9G = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }
            , cdM9D = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cdK9B = function(dl0x, bcG6A) {
            dl0x = HL0x(dl0x);
            if (!!bcG6A) {
                dl0x = dl0x.replace(Mj1x.MLINE, "\n\n").replace(Mj1x.LING, "</br>")
            }
            dl0x = l8d.bcs6m(dl0x);
            return dl0x
        };
        var HL0x = function(bi9Z) {
            return k8c.Bh8Z(cdP9G, bi9Z)
        };
        return function(dl0x, e8e, eb0x) {
            e8e = e8e || {};
            eb0x = eb0x || {};
            eb0x.actHash = {};
            var cdJ9A = !!e8e.parseLink
                , cdG9x = !!e8e.parseAct
                , cdF9w = e8e.linkTpl || bcw6q.LINK
                , cdD9u = e8e.atTpl || bcw6q.AT
                , cdC9t = e8e.actTpl || bcw6q.ACT
                , bcG6A = !!e8e.keepSpace
                , bcT6N = e8e.linkKlass || "s-fc7";
            cuo3x = e8e.actBiJson || "";
            if (!dl0x)
                return "";
            dl0x = dl0x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kt2x = cdM9D[cdJ9A + 2 * cdG9x]
                , cP0x = Mj1x[kt2x]
                , bs9j = null
                , lg2x = null
                , gz1x = 0
                , cup3x = ""
                , cuq3x = "";
            var yk7d = [];
            cP0x.lastIndex = 0;
            while (bs9j = cP0x.exec(dl0x)) {
                var fI1x = {
                    html: "",
                    before: bs9j.index - 1,
                    after: bs9j.index + bs9j[0].length
                };
                if (bs9j[1]) {
                    var lg2x = bs9j[2].replace(/[^\x00-\xff]/g, "**");
                    if (lg2x.length < 4 || lg2x.length > 32) {} else {
                        var Mt1x = a7h.em0x(cdD9u);
                        fI1x.html = a7h.bP9G(Mt1x, {
                            value: HL0x(bs9j[2]),
                            url: encodeURI("/user/home?nickname=" + bs9j[2]),
                            klass: bcT6N
                        });
                        yk7d.push(fI1x)
                    }
                } else if (bs9j.length > 8 && bs9j[4]) {
                    var Mt1x = a7h.em0x(cdF9w);
                    fI1x.html = a7h.bP9G(Mt1x, {
                        value: HL0x(bs9j[4]),
                        url: encodeURI(bs9j[4]),
                        klass: bcT6N
                    });
                    yk7d.push(fI1x)
                } else {
                    var bHR3x = kt2x == "ACT_NOLINK" ? 4 : 9;
                    var Mt1x = a7h.em0x(cdC9t);
                    fI1x.html = a7h.bP9G(Mt1x, {
                        value: HL0x(bs9j[bHR3x]),
                        klass: bcT6N
                    });
                    yk7d.push(fI1x);
                    eb0x.actHash[bs9j[bHR3x].slice(1, -1)] = true
                }
            }
            var cds9j = yk7d.length
                , ku2x = {
                before: dl0x.length - 1,
                after: 0
            }
                , bdt6n = "";
            for (var i = 0; i <= cds9j; i++) {
                var is1x, gy1x;
                is1x = (yk7d[i - 1] || ku2x).after;
                gy1x = (yk7d[i] || ku2x).before;
                if (gy1x >= is1x && is1x >= 0 && gy1x <= dl0x.length - 1) {
                    bdt6n += cdK9B(dl0x.substring(is1x, gy1x + 1), bcG6A)
                }
                if (yk7d[i]) {
                    bdt6n += yk7d[i].html
                }
            }
            return bdt6n
        }
    }();
    l8d.cdW9N = function() {
        var cP0x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?","g");
        return function(bi9Z) {
            return (bi9Z || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cP0x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l8d.cdU9L = function() {
        var cP0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eH0x = function(lg2x, dD0x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lg2x) + '" class="' + (dD0x || "") + '">@' + lg2x + "</a>"
        };
        return function(bi9Z, dD0x) {
            return (bi9Z || "").replace(cP0x, function($0, $1) {
                return eH0x($1, dD0x)
            })
        }
    }();
    l8d.bcs6m = function() {
        var cP0x = /\[(.*?)\]/g;
        return function(bi9Z) {
            return (bi9Z || "").replace(cP0x, function($1, $2) {
                var V9M = l8d.bIa3x($2);
                return !V9M ? $1 : '<img src="' + V9M + '"/>'
            })
        }
    }();
    l8d.Ak8c = function(E9v, dD0x) {
        a7h.by9p(E9v, dD0x) ? a7h.w9n(E9v, dD0x) : a7h.y9p(E9v, dD0x)
    }
    ;
    l8d.My1x = function(cI0x, hG1x) {
        cI0x = a7h.x9o(cI0x);
        hG1x = a7h.x9o(hG1x);
        if (!cI0x || !hG1x)
            return !1;
        for (hG1x = hG1x.parentNode; !!hG1x && hG1x != cI0x; hG1x = hG1x.parentNode)
            ;
        return hG1x == cI0x
    }
    ;
    l8d.lN2x = function() {
        var bHQ3x = function(fq1x) {
            return (fq1x < 10 ? "0" : "") + fq1x
        };
        return function(jS2x) {
            jS2x = parseInt(jS2x) || 0;
            if (!jS2x)
                return "00:00";
            var MI1x = Math.floor(jS2x % 60)
                , cdo9f = Math.floor(jS2x / 60);
            return bHQ3x(cdo9f) + ":" + bHQ3x(MI1x)
        }
    }();
    l8d.wV7O = function(fo1x, ve6Y) {
        if (!fo1x || fo1x.length == 0)
            return "";
        ve6Y = ve6Y || "/";
        var bs9j = [];
        for (var i = fo1x.length - 1; i >= 0; i--) {
            bs9j.unshift(fo1x[i].name)
        }
        return bs9j.join(ve6Y)
    }
    ;
    l8d.pO4S = function() {
        var MO1x = function(hn1x, dD0x, cI0x) {
            if (!hn1x || !hn1x.name)
                return "";
            if (!hn1x.id)
                return '<span class="' + dD0x + '">' + k8c.dM0x(hn1x.name) + "</span>";
            return "<a" + (cI0x ? ' target="_blank"' : "") + ' class="' + dD0x + '" href="/artist?id=' + hn1x.id + '" hidefocus="true">' + k8c.dM0x(hn1x.name) + "</a>"
        };
        return function(fo1x, T9K, ve6Y, cI0x, bHM3x) {
            if (!fo1x || !fo1x.length)
                return "";
            ve6Y = ve6Y || "/";
            T9K = T9K || "";
            Jk0x = "";
            var eG0x = [];
            for (var i = 0, i8a = [], rd4h = [], fh1x; i < fo1x.length; ++i) {
                eG0x.push(fo1x[i].name);
                if (!fo1x[i] || fo1x[i].id <= 0) {
                    rd4h.push(fo1x[i]);
                    continue
                }
                if (k8c.gf1x(T9K)) {
                    fh1x = T9K(fo1x[i])
                } else {
                    fh1x = MO1x(fo1x[i], T9K, cI0x)
                }
                if (fh1x && bHM3x && fo1x[i].tns && fo1x[i].tns.length > 0) {
                    Jk0x = k8c.dM0x(fo1x[i].tns[0]);
                    fh1x += '<span class="s-fc8" title="' + Jk0x + '"> - (' + Jk0x + ")</span>"
                }
                !!fh1x && i8a.push(fh1x)
            }
            for (var i = 0, fh1x; i < rd4h.length; ++i) {
                if (k8c.gf1x(T9K)) {
                    fh1x = T9K(rd4h[i])
                } else {
                    fh1x = MO1x(rd4h[i], T9K, cI0x)
                }
                if (fh1x && bHM3x && rd4h[i].tns && rd4h[i].tns.length > 0) {
                    Jk0x = k8c.dM0x(rd4h[i].tns[0]);
                    fh1x += '<span class="s-fc8" title="' + Jk0x + '"> - (' + Jk0x + ")</span>"
                }
                !!fh1x && i8a.push(fh1x)
            }
            return '<span title="' + eG0x.join(ve6Y) + '">' + i8a.join(ve6Y) + "</span>"
        }
    }();
    l8d.wR7K = function(eS0x) {
        return !!eS0x && /^[0-9]{11}$/.test(eS0x)
    }
    ;
    l8d.cur3x = function(eS0x) {
        if (!l8d.wR7K(eS0x))
            return eS0x;
        return eS0x.substring(0, 3) + "****" + eS0x.substr(7)
    }
    ;
    l8d.ja2x = function() {
        var cP0x = /^\s+$/g;
        return function(hH1x) {
            return !hH1x || cP0x.test(hH1x)
        }
    }();
    l8d.Fh9Y = function() {
        var beD6x = /[^\x00-\xfff]/g;
        return function(hH1x) {
            var cdg9X = hH1x.match(beD6x) || []
                , dF0x = cdg9X.length;
            return hH1x.length + dF0x
        }
    }();
    l8d.zQ8I = function() {
        var beD6x = /[^\x00-\xfff]/;
        return function(hH1x, gk1x) {
            for (var i = 0, len = hH1x.length; i < len && gk1x > 0; i++) {
                if (beD6x.test(hH1x.charAt(i))) {
                    gk1x -= 2;
                    if (gk1x < 0) {
                        break
                    }
                } else {
                    gk1x -= 1
                }
            }
            return hH1x.substring(0, i)
        }
    }();
    l8d.Dt9k = function(hH1x, gk1x, Lx1x) {
        gk1x = gk1x || 10;
        Lx1x = Lx1x || nej.p.cS0x.engine == "trident" && parseInt(nej.p.cS0x.release) < 5;
        if (Lx1x && l8d.Fh9Y(hH1x) > gk1x) {
            return l8d.zQ8I(hH1x, gk1x) + "..."
        } else {
            return hH1x
        }
    }
    ;
    l8d.bHL3x = function(f8d) {
        return f8d === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f8d.type || f8d.href || ~f8d.tabIndex)
    }
    ;
    l8d.cde9V = function(d8f, cI0x) {
        if (!d8f || !cI0x)
            return !0;
        var f8d, t8l = d8f.type.toLowerCase();
        if (t8l == "mouseout") {
            f8d = d8f.relatedTarget || d8f.toElement
        } else if (t8l == "mouseover") {
            f8d = d8f.relatedTarget || d8f.fromElement
        }
        return !f8d || f8d !== cI0x && !l8d.My1x(cI0x, f8d)
    }
    ;
    l8d.rh4l = function() {
        R9I = {};
        return function(f8d, dJ0x) {
            var C9t = a7h.kp2x(f8d)
                , J9A = "hover-" + C9t;
            if (!dJ0x || !C9t || !!R9I[J9A])
                return;
            R9I[J9A] = !0;
            h8b.q8i(C9t, "mouseover", function() {
                var bfd6X = a7h.I9z(f8d, "hshow") || [];
                var bfg6a = a7h.I9z(f8d, "icn-dislike") || [];
                a7h.y9p(C9t, "z-hover");
                a7h.X9O(bfd6X[0], "display", "block");
                a7h.X9O(bfg6a[0], "display", "block")
            });
            h8b.q8i(C9t, "mouseout", function() {
                var bfd6X = a7h.I9z(f8d, "hshow") || [];
                var bfg6a = a7h.I9z(f8d, "icn-dislike") || [];
                a7h.w9n(C9t, "z-hover");
                a7h.X9O(bfd6X[0], "display", "none");
                a7h.X9O(bfg6a[0], "display", "none")
            })
        }
    }();
    l8d.bHK3x = function() {
        var bv9m = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(hH1x) {
            return k8c.Bh8Z(bv9m, hH1x)
        }
    }();
    l8d.tT5Y = function(bB9s) {
        if (k8c.Iq0x(bB9s))
            bB9s = bB9s.getTime();
        var fN1x = new Date
            , mM3x = fN1x.getTime() - bB9s;
        if (mM3x <= 6e4)
            return "刚刚";
        var qR4V = fN1x.getHours() * 36e5 + fN1x.getMinutes() * 6e4 + fN1x.getSeconds() * 1e3;
        if (mM3x <= qR4V) {
            if (mM3x < 36e5) {
                var MR1x = Math.floor(mM3x / 6e4);
                return MR1x + "分钟前"
            }
            return k8c.iS2x(bB9s, "HH:mm")
        } else {
            if (mM3x < qR4V + 864e5) {
                return "昨天" + k8c.iS2x(bB9s, "HH:mm")
            } else {
                var gj1x = fN1x.getFullYear()
                    , bfG7z = new Date(gj1x,0,1);
                var qR4V = fN1x.getTime() - bfG7z.getTime();
                if (mM3x < qR4V) {
                    return k8c.iS2x(bB9s, "M月d日 HH:mm")
                }
                return k8c.iS2x(bB9s, "yyyy年M月d日")
            }
        }
    }
    ;
    l8d.cda9R = function(bB9s) {
        if (k8c.Iq0x(bB9s))
            bB9s = bB9s.getTime();
        var fN1x = new Date
            , mM3x = fN1x.getTime() - bB9s;
        var qR4V = fN1x.getHours() * 36e5 + fN1x.getMinutes() * 6e4 + fN1x.getSeconds() * 1e3;
        if (mM3x <= qR4V) {
            return "今天" + k8c.iS2x(bB9s, "HH:mm")
        } else {
            if (mM3x < qR4V + 864e5) {
                return "昨天" + k8c.iS2x(bB9s, "HH:mm")
            } else {
                return k8c.iS2x(bB9s, "yy-MM-dd HH:mm")
            }
        }
    }
    ;
    l8d.ccY9P = function(bB9s) {
        if (k8c.Iq0x(bB9s))
            bB9s = bB9s.getTime();
        var fN1x = new Date
            , mM3x = fN1x.getTime() - bB9s;
        if (mM3x <= 6e4)
            return "刚刚";
        var qR4V = fN1x.getHours() * 36e5 + fN1x.getMinutes() * 6e4 + fN1x.getSeconds() * 1e3;
        if (mM3x <= qR4V) {
            if (mM3x < 36e5) {
                var MR1x = Math.floor(mM3x / 6e4);
                return MR1x + "分钟前"
            }
            return k8c.iS2x(bB9s, "HH:mm")
        } else {
            if (mM3x < qR4V + 864e5) {
                return "昨天" + k8c.iS2x(bB9s, "HH:mm")
            } else if (mM3x < qR4V + 864e5 * 6) {
                var gj1x = fN1x.getFullYear()
                    , bfG7z = new Date(gj1x,0,1);
                var qR4V = fN1x.getTime() - bfG7z.getTime();
                if (mM3x < qR4V) {
                    return k8c.iS2x(bB9s, "M月d日 HH:mm")
                }
                return k8c.iS2x(bB9s, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    }
    ;
    l8d.MV1x = function() {
        var cP0x = /\{(.*?)\}/gi;
        return function(pD4H, j8b) {
            return (pD4H || "").replace(cP0x, function($1, $2) {
                var A9r = j8b[$2];
                return A9r == null ? $1 : A9r
            })
        }
    }();
    l8d.eQ0x = function() {
        var bg9X = Array.prototype.slice.call(arguments, 0)
            , pD4H = bg9X.shift();
        if (pD4H) {
            return pD4H.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bg9X.length ? bg9X[$2] : $1
            })
        }
        return ""
    }
    ;
    l8d.Go9f = function(i8a, dD0x, lf2x) {
        return "";
        lf2x = lf2x || " - ";
        if (i8a && i8a.length) {
            return lf2x + (!!dD0x ? '<span class="' + dD0x + '">' + i8a[0] + "</span>" : i8a[0])
        }
        return ""
    }
    ;
    l8d.bHG3x = function() {
        if (window.getSelection) {
            var qQ4U = window.getSelection();
            if (qQ4U && qQ4U.focusNode && qQ4U.focusNode.tagName) {
                var Aj8b = a7h.cQ0x(qQ4U.focusNode);
                for (var i = 0, wP7I; i < Aj8b.length; ++i) {
                    wP7I = Aj8b[i].tagName;
                    if (!wP7I)
                        continue;
                    wP7I = wP7I.toLowerCase();
                    if (wP7I == "textarea" || wP7I == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var cH0x = document.selection.createRange();
            if (cH0x) {
                var f8d = cH0x.parentElement();
                if (f8d && f8d.tagName) {
                    var wP7I = f8d.tagName.toLowerCase();
                    if (wP7I == "textarea" || wP7I == "input")
                        return !0
                }
            }
        }
        return !1
    }
    ;
    l8d.Ar8j = function(fp1x) {
        if (/^[A-Z]\:\\/i.test(fp1x)) {
            fp1x = fp1x.split("\\")
        } else {
            fp1x = fp1x.split("/")
        }
        fp1x = fp1x[fp1x.length - 1];
        return fp1x
    }
    ;
    l8d.ccV9M = function() {
        var DO9F = [13, 17, 34, 19, 18, 21];
        return function(C9t) {
            var bs9j = (C9t || "").split("_");
            return {
                type: DO9F[bs9j[2]] || -1,
                id: bs9j[3] || ""
            }
        }
    }();
    l8d.bgj7c = function(du0x) {
        if (4 == du0x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (du0x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (du0x.expertTags && du0x.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
    ;
    l8d.Na1x = function(fq1x) {
        fq1x += "";
        if (fq1x) {
            return fq1x.substr(0, 3) + "****" + fq1x.substr(fq1x.length - 4)
        }
    }
    ;
    l8d.cus3x = function(s8k, co9f) {
        return (s8k % co9f + co9f) % co9f
    }
    ;
    l8d.bHF3x = function() {
        var DO9F = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function(C9t) {
            var bs9j = (C9t || "").split("_")
                , m8e = {
                type: DO9F[bs9j[2]] || -1,
                id: bs9j[3] || ""
            };
            if (m8e.type == "event") {
                m8e.uid = bs9j[4] || "";
                return "/" + m8e.type + "?id=" + m8e.id + "&uid=" + m8e.uid
            }
            return "/" + m8e.type + "?id=" + m8e.id
        }
    }();
    l8d.bHE3x = function() {
        var DO9F = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"];
        return function(C9t) {
            var bs9j = (C9t || "").split("_");
            return DO9F[bs9j[2]] || "资源"
        }
    }();
    l8d.ccR9I = function(bC9t) {
        var qs = bC9t.length > 0 ? bC9t.substring(1) : ""
            , args = {}
            , items = qs.length ? qs.split("&") : []
            , item = null
            , name = null
            , value = null
            , i = 0
            , len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    }
    ;
    l8d.bHD3x = function(wM7F, Nc1x) {
        var Wa4e = 0
            , dY0x = new Array;
        k8c.be9V(wM7F, function(V9M, s8k) {
            var cZ0x = a7h.cU0x("img");
            cZ0x.src = V9M;
            h8b.q8i(cZ0x, "load", function(s8k, d8f) {
                dY0x[s8k] = 1;
                Wa4e++;
                if (Wa4e == wM7F.length)
                    Nc1x(wM7F, dY0x)
            }
                .g8c(this, s8k));
            h8b.q8i(cZ0x, "error", function(d8f, s8k) {
                dY0x[s8k] = 0;
                Wa4e++;
                if (Wa4e == wM7F.length)
                    Nc1x(wM7F, dY0x)
            }
                .g8c(this, s8k))
        })
    }
    ;
    l8d.VZ4d = function(i8a, dE0x) {
        var m8e = [];
        k8c.be9V(i8a, function(r8j, s8k, ig1x) {
            m8e.push(dE0x(r8j, s8k, ig1x))
        });
        return m8e
    }
    ;
    l8d.Tx3x = function(i8a, dE0x, ig1x) {
        var m8e = [];
        k8c.be9V(i8a, function(r8j, s8k) {
            if (dE0x.call(ig1x, r8j, s8k, i8a)) {
                m8e.push(r8j)
            }
        });
        return m8e
    }
    ;
    l8d.ccO9F = function(bi9Z) {
        return k8c.dM0x((bi9Z || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    l8d.bgP7I = function(bf9W) {
        if (bf9W.transNames && bf9W.transNames.length) {
            return bf9W.transNames[0]
        } else if (bf9W.alias && bf9W.alias.length) {
            return bf9W.alias[0]
        }
    }
    ;
    l8d.bHC3x = function(Li1x) {
        if (Li1x) {
            return Li1x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
    ;
    l8d.bgU7N = function(f8d) {
        var f8d = a7h.x9o(f8d)
            , da0x = f8d && f8d.getElementsByTagName("textarea")[0]
            , J9A = a7h.u8m(f8d, "key")
            , bgV7O = a7h.u8m(f8d, "simple") == "1"
            , bHB3x = p8h.uH6B.fV1x();
        if (!(f8d && da0x && J9A))
            return;
        if (bgV7O) {
            bHB3x.rr4v(J9A, l8d.DN9E(JSON.parse(da0x.value)))
        } else {
            bHB3x.rr4v(J9A, JSON.parse(da0x.value || da0x.defaultValue))
        }
        f8d.innerHTML = "";
        return J9A
    }
    ;
    l8d.ccL9C = function(oC3x) {
        if (!oC3x.onbeforelistload) {
            oC3x.onbeforelistload = function(d8f) {
                d8f.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oC3x.onemptylist) {
            oC3x.onemptylist = function(d8f) {
                d8f.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oC3x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oC3x
    }
    ;
    l8d.DN9E = function(hu1x) {
        if (k8c.el0x(hu1x)) {
            var eb0x = [];
            k8c.be9V(hu1x, function(bgV7O) {
                eb0x.push(bHA3x(bgV7O))
            });
            return eb0x
        } else {
            return bHA3x(hu1x)
        }
        function bHA3x(hu1x) {
            if (!hu1x)
                return null;
            var eb0x = {
                album: hu1x.al,
                alias: hu1x.alia || hu1x.ala || [],
                artists: hu1x.ar || [],
                commentThreadId: "R_SO_4_" + hu1x.id,
                copyrightId: hu1x.cp || 0,
                duration: hu1x.dt || 0,
                id: hu1x.id,
                mvid: hu1x.mv || 0,
                name: hu1x.name || "",
                cd: hu1x.cd,
                position: hu1x.no || 0,
                ringtone: hu1x.rt,
                rtUrl: hu1x.rtUrl,
                status: hu1x.st || 0,
                pstatus: hu1x.pst || 0,
                fee: hu1x.fee || 0,
                version: hu1x.v || 0,
                eq: hu1x.eq,
                songType: hu1x.t || 0,
                mst: hu1x.mst,
                score: hu1x.pop || 0,
                ftype: hu1x.ftype,
                rtUrls: hu1x.rtUrls,
                transNames: hu1x.tns,
                privilege: hu1x.privilege,
                lyrics: hu1x.lyrics
            };
            return eb0x
        }
    }
    ;
    l8d.cut3x = function() {
        var f8d = a7h.mT3x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f8d);
        h8b.q8i(f8d, "click", function(d8f) {
            h8b.bh9Y(d8f);
            a7h.cF0x(f8d)
        })
    }
    ;
    l8d.lk2x = function(ct9k) {
        if (ct9k < 1e5) {
            return ct9k
        } else {
            return Math.floor(ct9k / 1e4) + "万"
        }
    }
    ;
    l8d.uA6u = function(ct9k, da0x) {
        return "<i>" + (ct9k ? "(" + ct9k + ")" : da0x) + "</i>"
    }
    ;
    l8d.bHy3x = function(t8l, hl1x) {
        var e8e = {};
        if (!k8c.kg2x(hl1x)) {
            return e8e
        }
        switch (parseInt(t8l)) {
            case 17:
                e8e.title = hl1x.name;
                e8e.author = (hl1x.radio || []).name;
                e8e.picUrl = hl1x.coverUrl;
                e8e.category = hl1x.radio.category;
                break;
            case 19:
                e8e.title = hl1x.name;
                e8e.author = l8d.wV7O(hl1x.artists);
                e8e.authors = l8d.wV7O(hl1x.artists, " / ");
                e8e.picUrl = hl1x.picUrl;
                break;
            case 13:
                e8e.title = hl1x.name;
                e8e.author = (hl1x.creator || []).nickname;
                e8e.picUrl = hl1x.coverImgUrl;
                break;
            case 18:
                e8e.title = hl1x.name;
                e8e.author = l8d.wV7O(hl1x.artists);
                e8e.picUrl = (hl1x.album || []).picUrl;
                break;
            case 20:
                e8e.title = hl1x.name;
                e8e.author = "";
                e8e.picUrl = hl1x.img1v1Url;
                break;
            case 21:
                e8e.title = hl1x.name;
                e8e.author = hl1x.artistName;
                e8e.authors = l8d.wV7O(hl1x.artists, " / ");
                e8e.picUrl = hl1x.newCover || hl1x.cover;
                break;
            case 70:
                e8e.title = hl1x.name;
                e8e.author = (hl1x.dj || []).nickname;
                e8e.picUrl = hl1x.picUrl;
                e8e.category = hl1x.category;
                break;
            default:
                break
        }
        return e8e
    }
    ;
    l8d.bHx3x = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
    ;
    l8d.ccG9x = function(eH0x, uB6v, e8e) {
        var bL9C, bg9X, m8e;
        var jq2x = null;
        var Nq1x = 0;
        if (!e8e)
            e8e = {};
        var VT4X = function() {
            Nq1x = e8e.leading === false ? 0 : +(new Date);
            jq2x = null;
            m8e = eH0x.apply(bL9C, bg9X);
            if (!jq2x)
                bL9C = bg9X = null
        };
        return function() {
            var fN1x = +(new Date);
            if (!Nq1x && e8e.leading === false)
                Nq1x = fN1x;
            var bhK7D = uB6v - (fN1x - Nq1x);
            bL9C = this;
            bg9X = arguments;
            if (bhK7D <= 0 || bhK7D > uB6v) {
                if (jq2x) {
                    clearTimeout(jq2x);
                    jq2x = null
                }
                Nq1x = fN1x;
                m8e = eH0x.apply(bL9C, bg9X);
                if (!jq2x)
                    bL9C = bg9X = null
            } else if (!jq2x && e8e.trailing !== false) {
                jq2x = setTimeout(VT4X, bhK7D)
            }
            return m8e
        }
    }
    ;
    l8d.bHw3x = function(eH0x, uB6v, pS4W) {
        var jq2x, bg9X, bL9C, Nt1x, m8e;
        var VT4X = function() {
            var gz1x = new Date - Nt1x;
            if (gz1x < uB6v && gz1x >= 0) {
                jq2x = setTimeout(VT4X, uB6v - gz1x)
            } else {
                jq2x = null;
                if (!pS4W) {
                    m8e = eH0x.apply(bL9C, bg9X);
                    if (!jq2x)
                        bL9C = bg9X = null
                }
            }
        };
        return function() {
            bL9C = this;
            bg9X = arguments;
            Nt1x = new Date;
            var bhR7K = pS4W && !jq2x;
            if (!jq2x)
                jq2x = setTimeout(VT4X, uB6v);
            if (bhR7K) {
                m8e = eH0x.apply(bL9C, bg9X);
                bL9C = bg9X = null
            }
            return m8e
        }
    }
    ;
    l8d.Nw1x = function(f8d, iq1x) {
        if (f8d) {
            var f8d = f8d.firstElementChild;
            if (f8d) {
                f8d.firstElementChild && (f8d = f8d.firstElementChild);
                f8d.setAttribute("xlink:href", "/style/pc/svg/" + iq1x)
            }
        }
    }
    ;
    l8d.bHv3x = function(eG0x) {
        if (!eG0x || !eG0x.length) {
            return
        }
        eG0x = /^#(.+?)#$/.exec(eG0x)[1];
        eG0x = eG0x.replace(/\s/g, " ");
        v9m.bp9g("/api/act/detail", {
            type: "json",
            method: "post",
            data: k8c.df0x({
                actname: eG0x
            }),
            onload: function(Q9H) {
                if (!Q9H || Q9H.code != 200 || !Q9H.act) {
                    n8f.Z9Q.N9E({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q9H.act.actId)
                }
            },
            onerror: function(bQ9H) {
                n8f.Z9Q.N9E({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
    ;
    l8d.bib7U = function(NB1x, wD6x) {
        if (!NB1x || !wD6x)
            return false;
        if (NB1x == wD6x)
            return true;
        return l8d.bib7U(NB1x, wD6x.parentNode)
    }
    ;
    a7h.fA1x = function(bA9r, kU2x) {
        if (!bA9r)
            return null;
        if (!kU2x)
            return bA9r.firstChild;
        return a7h.I9z(bA9r, kU2x)[0]
    }
    ;
    l8d.ccD9u = function(hH1x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hH1x)
    }
    ;
    l8d.cuu3x = function(tq5v) {
        if (!tq5v) {
            return "0b"
        }
        var ccz9q = ["Bytes", "KB", "MB", "GB"];
        var bd9U = Math.floor(Math.log(tq5v) / Math.log(1024));
        return (tq5v / Math.pow(1024, Math.floor(bd9U))).toFixed(bd9U == 1 ? 0 : 1) + ccz9q[bd9U]
    }
    ;
    l8d.bHq3x = function(dl0x, fb0x, ccl9c) {
        if (!dl0x)
            return dl0x;
        var dF0x = k8c.fi1x(dl0x);
        if (dF0x <= fb0x)
            return dl0x;
        var bis7l = dF0x - dl0x.length
            , biu7n = dl0x.length - bis7l;
        var fH1x = Math.ceil(fb0x / 2)
            , cck9b = fb0x
            , bHf3x = 0;
        if (bis7l < fH1x)
            fH1x = fb0x - bis7l;
        if (biu7n < fb0x)
            fb0x = biu7n + Math.ceil((fb0x - biu7n) / 2);
        while (fH1x <= fb0x) {
            bHf3x = k8c.fi1x(dl0x.substr(0, fH1x));
            var biE7x = cck9b - bHf3x;
            if (biE7x == 0)
                break;
            if (biE7x == 1) {
                var cca9R = k8c.fi1x(dl0x.charAt(fH1x));
                if (cca9R == 1) {
                    fH1x++;
                    break
                } else {
                    break
                }
            }
            fH1x += Math.floor(biE7x / 2)
        }
        return dl0x.substr(0, fH1x) + (!!ccl9c ? "" : "...")
    }
})();
(function() {
    function cbW9N() {
        var zk7d = function(jn2x) {
            if (jn2x < -128) {
                return zk7d(128 - (-128 - jn2x))
            } else if (jn2x >= -128 && jn2x <= 127) {
                return jn2x
            } else if (jn2x > 127) {
                return zk7d(-129 + jn2x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cbT9K = function(jn2x, bj9a) {
            return zk7d(jn2x + bj9a)
        };
        var cbS9J = function(Vx3x, biY7R) {
            if (Vx3x == null) {
                return null
            }
            if (biY7R == null) {
                return Vx3x
            }
            var pE4I = [];
            var cbR9I = biY7R.length;
            for (var i = 0, bo9f = Vx3x.length; i < bo9f; i++) {
                pE4I[i] = cbT9K(Vx3x[i], biY7R[i % cbR9I])
            }
            return pE4I
        };
        var cbN9E = function(Vv3x) {
            if (Vv3x == null) {
                return Vv3x
            }
            var pE4I = [];
            var cbM9D = Vv3x.length;
            for (var i = 0, bo9f = cbM9D; i < bo9f; i++) {
                pE4I[i] = zk7d(0 - Vv3x[i])
            }
            return pE4I
        };
        var cbL9C = function(bjr7k, NM1x) {
            bjr7k = zk7d(bjr7k);
            NM1x = zk7d(NM1x);
            return zk7d(bjr7k ^ NM1x)
        };
        var bGZ3x = function(NR1x, bjA8s) {
            if (NR1x == null || bjA8s == null || NR1x.length != bjA8s.length) {
                return NR1x
            }
            var pE4I = [];
            var cbJ9A = NR1x.length;
            for (var i = 0, bo9f = cbJ9A; i < bo9f; i++) {
                pE4I[i] = cbL9C(NR1x[i], bjA8s[i])
            }
            return pE4I
        };
        var bGX3x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cbE9v = function(cK0x) {
            var Fr9i = [];
            Fr9i.push(bGX3x[cK0x >>> 4 & 15]);
            Fr9i.push(bGX3x[cK0x & 15]);
            return Fr9i.join("")
        };
        var cbD9u = function(tq5v) {
            var bo9f = tq5v.length;
            if (tq5v == null || bo9f < 0) {
                return new String("")
            }
            var Fr9i = [];
            for (var i = 0; i < bo9f; i++) {
                Fr9i.push(cbE9v(tq5v[i]))
            }
            return Fr9i.join("")
        };
        var bGW3x = function(Vl3x) {
            if (Vl3x == null || Vl3x.length == 0) {
                return Vl3x
            }
            var bjR8J = new String(Vl3x);
            var pE4I = [];
            var bo9f = bjR8J.length / 2;
            var bj9a = 0;
            for (var i = 0; i < bo9f; i++) {
                var nG3x = parseInt(bjR8J.charAt(bj9a++), 16) << 4;
                var nH3x = parseInt(bjR8J.charAt(bj9a++), 16);
                pE4I[i] = zk7d(nG3x + nH3x)
            }
            return pE4I
        };
        var cbA9r = function(cM0x) {
            if (cM0x == null || cM0x == undefined) {
                return cM0x
            }
            var NV1x = encodeURIComponent(cM0x);
            var tq5v = [];
            var bGU3x = NV1x.length;
            for (var i = 0; i < bGU3x; i++) {
                if (NV1x.charAt(i) == "%") {
                    if (i + 2 < bGU3x) {
                        tq5v.push(bGW3x(NV1x.charAt(++i) + "" + NV1x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tq5v.push(NV1x.charCodeAt(i))
                }
            }
            return tq5v
        };
        var cby9p = function(vm6g) {
            var bd9U = 0;
            bd9U += (vm6g[0] & 255) << 24;
            bd9U += (vm6g[1] & 255) << 16;
            bd9U += (vm6g[2] & 255) << 8;
            bd9U += vm6g[3] & 255;
            return bd9U
        };
        var cux3x = function(bd9U) {
            var vm6g = [];
            vm6g[0] = bd9U >>> 24 & 255;
            vm6g[1] = bd9U >>> 16 & 255;
            vm6g[2] = bd9U >>> 8 & 255;
            vm6g[3] = bd9U & 255;
            return vm6g
        };
        var cbr8j = function(dv0x, bkc8U, bo9f) {
            var eb0x = [];
            if (dv0x == null || dv0x.length == 0) {
                return eb0x
            }
            if (dv0x.length < bo9f) {
                throw new Error("1003")
            }
            for (var i = 0; i < bo9f; i++) {
                eb0x[i] = dv0x[bkc8U + i]
            }
            return eb0x
        };
        var bkg8Y = function(dv0x, bkc8U, qm4q, cbp8h, bo9f) {
            if (dv0x == null || dv0x.length == 0) {
                return qm4q
            }
            if (qm4q == null) {
                throw new Error("1004")
            }
            if (dv0x.length < bo9f) {
                throw new Error("1003")
            }
            for (var i = 0; i < bo9f; i++) {
                qm4q[cbp8h + i] = dv0x[bkc8U + i]
            }
            return qm4q
        };
        var cbi8a = function(bo9f) {
            var bs9j = [];
            for (var i = 0; i < bo9f; i++) {
                bs9j[i] = 0
            }
            return bs9j
        };
        var cbc8U = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var Gr9i = 64;
        var Vh3x = 64;
        var bGN3x = 4;
        var caW8O = function(pz4D) {
            var bGK3x = [];
            if (pz4D == null || pz4D == undefined || pz4D.length == 0) {
                return cbi8a(Vh3x)
            }
            if (pz4D.length >= Vh3x) {
                return cbr8j(pz4D, 0, Vh3x)
            } else {
                for (var i = 0; i < Vh3x; i++) {
                    bGK3x[i] = pz4D[i % pz4D.length]
                }
            }
            return bGK3x
        };
        var caS8K = function(Vf3x) {
            if (Vf3x == null || Vf3x.length % Gr9i != 0) {
                throw new Error("1005")
            }
            var bkI8A = [];
            var bj9a = 0;
            var caQ8I = Vf3x.length / Gr9i;
            for (var i = 0; i < caQ8I; i++) {
                bkI8A[i] = [];
                for (var j = 0; j < Gr9i; j++) {
                    bkI8A[i][j] = Vf3x[bj9a++]
                }
            }
            return bkI8A
        };
        var caO8G = function(bGH3x) {
            var nG3x = bGH3x >>> 4 & 15;
            var nH3x = bGH3x & 15;
            var bj9a = nG3x * 16 + nH3x;
            return cbc8U[bj9a]
        };
        var bGG3x = function(bkU8M) {
            if (bkU8M == null) {
                return null
            }
            var bGF3x = [];
            for (var i = 0, bo9f = bkU8M.length; i < bo9f; i++) {
                bGF3x[i] = caO8G(bkU8M[i])
            }
            return bGF3x
        };
        var caC8u = function(Hm0x, pz4D) {
            if (Hm0x == null) {
                return null
            }
            if (Hm0x.length == 0) {
                return []
            }
            if (Hm0x.length % Gr9i != 0) {
                throw new Error("1005")
            }
            pz4D = caW8O(pz4D);
            var blf8X = pz4D;
            var blg8Y = caS8K(Hm0x);
            var NW1x = [];
            var car8j = blg8Y.length;
            for (var i = 0; i < car8j; i++) {
                var blm8e = bGG3x(blg8Y[i]);
                blm8e = bGG3x(blm8e);
                var blo8g = bGZ3x(blm8e, blf8X);
                var caq8i = cbS9J(blo8g, cbN9E(blf8X));
                blo8g = bGZ3x(caq8i, pz4D);
                bkg8Y(blo8g, 0, NW1x, i * Gr9i, Gr9i);
                blf8X = blg8Y[i]
            }
            var bGA3x = [];
            bkg8Y(NW1x, NW1x.length - bGN3x, bGA3x, 0, bGN3x);
            var bo9f = cby9p(bGA3x);
            if (bo9f > NW1x.length) {
                throw new Error("1006")
            }
            var pE4I = [];
            bkg8Y(NW1x, 0, pE4I, 0, bo9f);
            return pE4I
        };
        var cao8g = function(UN3x, J9A) {
            if (UN3x == null) {
                return null
            }
            var bGw3x = new String(UN3x);
            if (bGw3x.length == 0) {
                return []
            }
            var Hm0x = bGW3x(bGw3x);
            if (J9A == null || J9A == undefined) {
                throw new Error("1007")
            }
            var pz4D = cbA9r(J9A);
            return caC8u(Hm0x, pz4D)
        };
        this.cac8U = function(UN3x, J9A) {
            var bZZ8R = cao8g(UN3x, J9A);
            var blP8H = new String(cbD9u(bZZ8R));
            var UK3x = [];
            var bZX8P = blP8H.length / 2;
            var bj9a = 0;
            for (var i = 0; i < bZX8P; i++) {
                UK3x.push("%");
                UK3x.push(blP8H.charAt(bj9a++));
                UK3x.push(blP8H.charAt(bj9a++))
            }
            return UK3x.join("")
        }
    }
    window.settmusic = (new cbW9N).cac8U
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, H9y = c8g("nej.ut"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), v9m = c8g("nej.j"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), J9A = "Search-tracks_", b8h;
    p8h.eQ0x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q9H) {
                return Q9H
            },
            onerror: function(Q9H, e8e) {
                if (Q9H.code == 407) {
                    e8e.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e8e, bc9T) {
                window.log && window.log("searchkeywordclient", {
                    type: this.bZU8M(parseInt(e8e.data.type)) || "suggest",
                    keyword: e8e.data.s,
                    offset: e8e.offset
                })
            },
            format: function(Q9H, e8e) {
                if (Q9H.abroad) {
                    try {
                        Q9H.result = JSON.parse(decodeURIComponent(settmusic(Q9H.result, p8h.sk)))
                    } catch (e) {}
                }
                Q9H.result = Q9H.result || {};
                var i8a, co9f, jw2x = [], su4y = e8e.data.s || "", fY1x = e8e.data.limit, t8l = parseInt(e8e.data.type) || 1, m8e = Q9H.result;
                switch (t8l) {
                    case 1:
                        i8a = this.bGt3x(m8e.songs, e8e.data.hlpretag, e8e.data.hlposttag);
                        co9f = m8e.songCount;
                        break;
                    case 10:
                        i8a = m8e.albums;
                        co9f = m8e.albumCount;
                        break;
                    case 100:
                        i8a = m8e.artists;
                        co9f = m8e.artistCount;
                        break;
                    case 1e3:
                        i8a = m8e.playlists;
                        co9f = m8e.playlistCount;
                        break;
                    case 1002:
                        i8a = m8e.userprofiles;
                        co9f = m8e.userprofileCount;
                        break;
                    case 1004:
                        i8a = m8e.mvs;
                        co9f = m8e.mvCount;
                        break;
                    case 1006:
                        i8a = this.bGt3x(m8e.songs, e8e.data.hlpretag, e8e.data.hlposttag);
                        co9f = m8e.songCount;
                        break;
                    case 1009:
                        var pr3x = m8e.djRadios;
                        if (!!pr3x) {
                            k8c.be9V(pr3x, function(A9r, s8k, bZO8G) {
                                A9r.xid = A9r.id;
                                A9r.id = A9r.id + "_rad"
                            });
                            if (pr3x.length) {
                                this.rr4v("radio_search-" + e8e.data.s, pr3x)
                            }
                        }
                        co9f = Math.min(m8e.djprogramCount, 500);
                        i8a = m8e.djprograms || [];
                        if (e8e.data.isPub) {
                            k8c.mu3x(pr3x, function(A9r, s8k, bZO8G) {
                                A9r.stype = 1;
                                i8a.unshift(A9r)
                            });
                            co9f = Math.min(i8a.length, 500)
                        }
                        break
                }
                this.z9q("onsearchload", Q9H);
                if (i8a && i8a.length) {
                    for (var i = 0; i < fY1x; i++) {
                        if (i < i8a.length) {
                            jw2x.push(i8a[i])
                        } else {
                            jw2x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(co9f || 0, su4y.length < 3 ? 500 : 5e3),
                    list: jw2x
                }
            },
            onerror: function(Q9H, e8e) {
                e8e.onload(e8e, []);
                if (k8c.gf1x(e8e.onerror)) {
                    e8e.onerror(Q9H)
                }
            }
        }
    });
    p8h.CM8E = NEJ.C();
    b8h = p8h.CM8E.O9F(p8h.gZ1x);
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bZL8D = function(J9A, e8e) {
        if (!J9A)
            return;
        if (!!this.bGr3x)
            v9m.jj2x(this.bGr3x);
        this.bGr3x = this.ck9b("search-suggest", NEJ.X({
            data: {
                s: J9A,
                limit: 8
            }
        }, e8e))
    }
    ;
    b8h.bZJ8B = function(J9A, e8e) {
        if (!J9A)
            return;
        this.ck9b("search-multimatch", NEJ.X({
            data: {
                s: J9A
            }
        }, e8e))
    }
    ;
    b8h.bGt3x = function() {
        var bZI8A = function(he1x, bGp3x, bGo3x) {
            var bZy8q = he1x.match(new RegExp(bGp3x + "(.+?)" + bGo3x,"gi"))
                , ct9k = 0;
            k8c.be9V(bZy8q, function(r8j) {
                ct9k += r8j.replace(new RegExp(bGp3x,"g"), "").replace(new RegExp(bGo3x,"g"), "").length
            });
            return ct9k
        };
        return function(iy1x, bZu8m, bZq8i) {
            var bGl3x = [];
            k8c.be9V(iy1x, function(bf9W, bd9U) {
                bf9W = l8d.DN9E(bf9W);
                var Uw3x = bf9W.lyrics || [], dF0x = Uw3x.length, iQ2x = 0, co9f = 4, Uv3x = {
                    l: 0,
                    v: 0
                }, bnh8Z;
                if (dF0x > 4) {
                    k8c.be9V(Uw3x, function(he1x, s8k) {
                        var bGk3x = bZI8A(he1x, bZu8m, bZq8i);
                        if (bGk3x > Uv3x.v) {
                            Uv3x.v = bGk3x;
                            Uv3x.l = s8k
                        }
                    });
                    iQ2x = Uv3x.l;
                    iQ2x = Math.max(iQ2x, 0);
                    bnh8Z = dF0x - iQ2x - 4;
                    if (bnh8Z < 0)
                        iQ2x += bnh8Z;
                    bf9W.lrcAbstractEnd = iQ2x + co9f - 1
                } else {
                    bf9W.lrcAbstractEnd = dF0x - 1
                }
                bf9W.lrcAbstractStart = iQ2x;
                bf9W.indexId = (Uw3x && Uw3x.length ? "L" : "NL") + bf9W.id;
                bGl3x.push(bf9W)
            });
            return bGl3x
        }
    }();
    b8h.bZU8M = function(t8l) {
        switch (t8l) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), v9m = c8g("nej.j"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), F9w = c8g("nm.m"), n8f = c8g("nm.l"), cX0x = c8g("nm.i"), L9C = c8g("nm.m.sch"), b8h, K9B;
    var bnx8p = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3
    };
    L9C.Ou2x = NEJ.C();
    b8h = L9C.Ou2x.O9F(H9y.cz9q);
    b8h.cl9c = function(f8d) {
        this.cs9j();
        this.bR9I(f8d);
        this.P9G = p8h.CM8E.fV1x()
    }
    ;
    b8h.bR9I = function(f8d) {
        this.o8g = f8d;
        var i8a = a7h.I9z(f8d, "j-flag");
        this.ex0x = i8a[0];
        this.bnB8t = i8a[1];
        this.cf9W = i8a[2];
        this.mw3x = i8a[3];
        h8b.q8i(this.ex0x, "input", this.fx1x.g8c(this));
        h8b.q8i(this.ex0x, "keyup", this.fx1x.g8c(this));
        h8b.q8i(this.ex0x, "focus", this.fW1x.g8c(this));
        h8b.q8i(this.bnB8t, "click", this.fW1x.g8c(this));
        h8b.q8i(this.ex0x, "blur", this.bnM9D.g8c(this));
        h8b.q8i(this.cf9W, "click", this.Um3x.g8c(this));
        h8b.q8i(this.o8g, "keydown", this.bnV9M.g8c(this));
        h8b.q8i(this.o8g, "keypress", this.Uk3x.g8c(this));
        h8b.q8i(this.mw3x, "mouseover", this.Oy2x.g8c(this));
        h8b.q8i(this.mw3x, "mouseout", this.Oy2x.g8c(this));
        if (this.ex0x.value) {
            this.ex0x.value = ""
        }
        if (this.ex0x.style.opacity != null) {
            this.ex0x.style.opacity = 1
        }
    }
    ;
    b8h.fx1x = function(d8f) {
        if (d8f.type == "keyup" && d8f.keyCode == 8 || d8f.keyCode == 46) {
            this.AG8y()
        } else if (d8f.type == "input" || d8f.type == "propertychange") {
            setTimeout(this.AG8y.g8c(this), 0)
        }
    }
    ;
    b8h.fW1x = function() {
        this.wk6e(this.bnB8t, !1);
        a7h.y9p(this.o8g, "m-srch-fcs");
        this.ex0x.focus();
        this.AG8y();
        a7h.y9p(a7h.I9z("g-topbar", "j-showoff")[0], "f-hide")
    }
    ;
    b8h.bnM9D = function() {
        if (!this.ex0x.value) {
            this.wk6e(this.bnB8t, !0)
        }
        var CE8w = a7h.I9z(this.mw3x, "slt");
        if (this.Ue3x(this.mw3x) && CE8w.length > 0 && a7h.u8m(CE8w[0], "type")) {
            var iq1x = CE8w[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(iq1x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.ex0x.value
                })
            }
            this.bof9W(CE8w[0].href)
        }
        this.wk6e(this.mw3x, !1);
        a7h.w9n(this.o8g, "m-srch-fcs")
    }
    ;
    b8h.wk6e = function(f8d, lh2x) {
        a7h.X9O(f8d, "display", !lh2x ? "none" : "")
    }
    ;
    b8h.Ue3x = function(f8d) {
        return a7h.db0x(f8d, "display") != "none"
    }
    ;
    b8h.AG8y = function() {
        var CC8u = function(sr4v, da0x) {
            if (!da0x)
                return;
            return da0x.replace(new RegExp(l8d.bHK3x(sr4v),"gi"), function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var bZl8d = function(hH1x) {
            var gk1x = this.o8g.clientWidth > 250 ? 41 : 17;
            if (l8d.Fh9Y(hH1x) > gk1x) {
                return l8d.zQ8I(hH1x, gk1x) + "..."
            } else {
                return hH1x
            }
        };
        var Ud3x = function(m8e) {
            return m8e.songs && m8e.songs.length || m8e.albums && m8e.albums.length || m8e.artists && m8e.artists.length || m8e.playlists && m8e.playlists.length
        };
        var sQ5V = function(sr4v, d8f) {
            if (!l8d.bHL3x(this.ex0x) || l8d.ja2x(this.ex0x.value)) {
                this.wk6e(this.mw3x, !1);
                return
            }
            d8f.keyword = k8c.dM0x(sr4v);
            var ds0x = a7h.bP9G("m-search-suggest", d8f, {
                mark: CC8u.g8c(this, sr4v),
                cutStr: bZl8d.g8c(this)
            })
                , ss4w = d8f.result.order;
            this.mw3x.innerHTML = ds0x;
            this.wk6e(this.mw3x, Ud3x(d8f.result) ? !0 : !1);
            if (!!ss4w && !!ss4w.length) {
                this.bor9i = {
                    keyword: sr4v,
                    type: bnx8p[ss4w[0]]
                }
            }
        };
        var bZk8c = function() {
            this.wk6e(this.mw3x, !1);
            return
        };
        return function() {
            var A9r = this.ex0x.value;
            if (l8d.ja2x(A9r)) {
                this.wk6e(this.mw3x, !1);
                return
            }
            this.P9G.bZL8D(A9r, {
                onload: sQ5V.g8c(this, A9r),
                onForbidden: bZk8c.g8c(this)
            })
        }
    }();
    b8h.Uk3x = function(d8f) {
        if (d8f.keyCode != 13)
            return;
        var CE8w = a7h.I9z(this.mw3x, "slt");
        if (this.Ue3x(this.mw3x) && CE8w.length > 0) {
            this.bof9W(CE8w[0].href);
            this.wk6e(this.mw3x, !1);
            return
        }
        this.Um3x();
        this.wk6e(this.mw3x, !1)
    }
    ;
    b8h.bnV9M = function(d8f) {
        if (!this.Ue3x(this.mw3x))
            return;
        var i8a = a7h.I9z(this.mw3x, "xtag")
            , dF0x = i8a.length
            , s8k = k8c.cV0x(i8a, function(r8j) {
            return a7h.by9p(r8j, "slt")
        });
        switch (d8f.keyCode) {
            case 38:
                if (s8k >= 0)
                    a7h.w9n(i8a[s8k], "slt");
                a7h.y9p(i8a[s8k <= 0 ? dF0x - 1 : s8k - 1], "slt");
                break;
            case 40:
                if (s8k >= 0)
                    a7h.w9n(i8a[s8k], "slt");
                a7h.y9p(i8a[(s8k + 1) % dF0x], "slt");
                break
        }
    }
    ;
    b8h.Oy2x = function(d8f) {
        if (!this.Ue3x(this.mw3x))
            return;
        var OG2x, E9v = h8b.U9L(d8f), i8a = a7h.I9z(this.mw3x, "xtag");
        if (E9v.tagName.toLowerCase() == "a")
            OG2x = E9v;
        else if (E9v.parentNode.tagName.toLowerCase() == "a")
            OG2x = E9v.parentNode;
        if (!OG2x)
            return;
        k8c.be9V(i8a, function(r8j) {
            a7h.w9n(r8j, "slt");
            a7h.u8m(r8j, "type", "")
        });
        if (d8f.type == "mouseout")
            return;
        a7h.y9p(OG2x, "slt");
        a7h.u8m(OG2x, "type", "mouse")
    }
    ;
    b8h.Um3x = function() {
        var dG0x = location.hash
            , s8k = dG0x.indexOf("?")
            , bC9t = k8c.hi1x(dG0x.substring(s8k + 1));
        bC9t.s = this.ex0x.value;
        if (l8d.ja2x(bC9t.s))
            return;
        if (!bC9t.type && this.bor9i && this.bor9i.keyword == bC9t.s) {
            bC9t.type = this.bor9i.type
        }
        this.bof9W("/search/#/?" + k8c.df0x(bC9t));
        this.ex0x.blur()
    }
    ;
    b8h.bof9W = function(V9M) {
        if (location.dispatch2) {
            location.dispatch2(V9M)
        } else {
            location.href = V9M
        }
    }
    ;
    L9C.Ou2x.bZj8b = function() {
        var i8a = a7h.I9z(document.body, "j-suggest");
        k8c.be9V(i8a, function(r8j) {
            new L9C.Ou2x(r8j)
        })
    }
    ;
    L9C.Ou2x.bZj8b()
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, H9y = c8g("nej.ut"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), v9m = c8g("nej.j"), p8h = c8g("nm.d"), b8h;
    p8h.eQ0x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q9H) {
                return {
                    total: Q9H.size || 0,
                    list: Q9H.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q9H) {
                return {
                    total: Q9H.size || 0,
                    list: Q9H.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q9H) {
                return Q9H.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q9H, e8e) {
                if (e8e.offset == 0) {
                    var oc3x = Q9H.data[0];
                    this.z9q("onfirstload", oc3x);
                    Q9H.data.splice(0, 1);
                    return Q9H.data
                } else {
                    return Q9H.data
                }
            }
        }
    });
    p8h.CA8s = NEJ.C();
    b8h = p8h.CA8s.O9F(p8h.gZ1x);
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.OH2x = function() {
        var rf4j = "LOCAL_FLAG";
        return function(t8l, bZi8a) {
            var j8b = this.EB9s(rf4j, {});
            if (j8b[t8l]) {
                return true
            } else {
                if (!bZi8a) {
                    j8b[t8l] = true;
                    this.uf6Z(rf4j, j8b)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), boM9D;
    if (!!M9D.nl3x)
        return;
    M9D.nl3x = NEJ.C();
    boM9D = M9D.nl3x.O9F(M9D.cz9q);
    boM9D.bk9b = function() {
        var bZd8V = function(d8f) {
            d8f.matched = d8f.source == d8f.target
        };
        return function(e8e) {
            e8e.oncheck = e8e.oncheck || bZd8V;
            this.bl9c(e8e);
            this.bV9M = e8e.list;
            this.ic1x = e8e.dataset || "id";
            this.jO2x = e8e.selected || "js-selected"
        }
    }();
    boM9D.nm3x = function(A9r) {
        var E9v, d8f = {
            target: A9r
        };
        k8c.be9V(this.bV9M, function(f8d) {
            delete d8f.matched;
            d8f.source = a7h.u8m(f8d, this.ic1x);
            this.z9q("oncheck", d8f);
            if (!d8f.matched) {
                a7h.w9n(f8d, this.jO2x)
            } else {
                E9v = f8d;
                a7h.y9p(f8d, this.jO2x)
            }
        }, this);
        return E9v
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), M9D = c8g("nej.ut"), oF3x;
    if (!!M9D.cN0x)
        return;
    M9D.cN0x = NEJ.C();
    oF3x = M9D.cN0x.O9F(M9D.cz9q);
    oF3x.cl9c = function() {
        this.iz2x = {};
        this.cs9j();
        this.bJ9A()
    }
    ;
    oF3x.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.bpf9W = e8e.umi || "";
        this.zw7p = e8e.dispatcher;
        this.Fq9h = e8e.composite || Y9P;
        this.bli8a({
            onshow: this.eY0x.g8c(this),
            onhide: this.jZ2x.g8c(this),
            onrefresh: this.ej0x.g8c(this),
            onmessage: this.qj4n.g8c(this),
            onbeforehide: this.bZc8U.g8c(this)
        })
    }
    ;
    oF3x.bD9u = function() {
        delete this.bpf9W;
        this.iz2x = {};
        this.bH9y()
    }
    ;
    oF3x.sy4C = function(d8f) {
        if (!!d8f)
            d8f.stopped = !0
    }
    ;
    oF3x.bJ9A = bm9d;
    oF3x.eY0x = bm9d;
    oF3x.jZ2x = bm9d;
    oF3x.ej0x = bm9d;
    oF3x.qj4n = bm9d;
    oF3x.bZc8U = bm9d;
    oF3x.pe3x = function(nK3x, bF9w, eC0x) {
        this.zw7p.bpC9t({
            to: nK3x,
            mode: eC0x || 0,
            data: bF9w,
            from: this.bpf9W
        })
    }
    ;
    oF3x.cuC3x = function(t8l, j8b) {
        this.zw7p.zE7x(t8l, {
            from: this.bpf9W,
            data: j8b
        })
    }
    ;
    oF3x.cuE3x = function() {
        this.zw7p.lE2x.apply(this.zw7p, arguments)
    }
    ;
    oF3x.bYW8O = function() {
        return this.iz2x
    }
    ;
    a7h.TO3x = function() {
        if (!!window.dispatcher) {
            dispatcher.bGf3x.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var c8g = NEJ.P, bm9d = NEJ.F, Y9P = NEJ.O, a7h = c8g("nej.e"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), vZ6T;
    if (!!M9D.do0x)
        return;
    M9D.do0x = NEJ.C();
    vZ6T = M9D.do0x.O9F(M9D.cN0x);
    vZ6T.bYU8M = function(e8e) {
        var bA9r;
        if (!bA9r) {
            var j8b = e8e.input || Y9P;
            bA9r = a7h.x9o(j8b.parent)
        }
        if (!bA9r) {
            var j8b = e8e.data || Y9P;
            bA9r = a7h.x9o(j8b.parent)
        }
        if (!bA9r) {
            bA9r = a7h.x9o(e8e.parent)
        }
        return bA9r
    }
    ;
    vZ6T.eY0x = function(e8e) {
        var bA9r = this.bYU8M(e8e);
        if (!!bA9r && !!this.o8g)
            bA9r.appendChild(this.o8g);
        this.gw1x(e8e);
        this.bGe3x("onshow", e8e);
        this.ej0x(e8e)
    }
    ;
    vZ6T.ej0x = function(e8e) {
        this.fO1x(e8e);
        this.bGe3x("onrefresh", e8e)
    }
    ;
    vZ6T.jZ2x = function() {
        this.kP2x();
        this.bYS8K();
        a7h.mc3x(this.o8g)
    }
    ;
    vZ6T.bGd3x = function() {
        var fZ1x = /^onshow|onrefresh|delay$/;
        return function(bX9O) {
            return fZ1x.test(bX9O)
        }
    }();
    vZ6T.bGc3x = bm9d;
    vZ6T.bGe3x = function() {
        var bFY3x = function(bC9t, e8e, bX9O, oe3x) {
            if (this.bGd3x(oe3x))
                return;
            if (!!bC9t)
                bX9O += (bX9O.indexOf("?") > 1 ? "&" : "?") + bC9t;
            var cO0x = this.bGc3x(oe3x, e8e) || {};
            cO0x.location = e8e;
            cO0x.parent = this.iz2x[oe3x];
            this.zw7p.ib1x(bX9O, {
                input: cO0x
            })
        };
        return function(t8l, e8e) {
            if (!e8e.nodelay) {
                if (!!this.Fq9h.delay)
                    return;
                var bFX3x = this.Fq9h[t8l] || Y9P;
                if (bFX3x.delay)
                    return
            }
            var bC9t = k8c.df0x(e8e.param) || "";
            if (t8l == "onrefresh") {
                k8c.ed0x(this.Fq9h, bFY3x.g8c(this, bC9t, e8e))
            }
            k8c.ed0x(bFX3x, bFY3x.g8c(this, bC9t, e8e))
        }
    }();
    vZ6T.bYS8K = function() {
        var yc7V = function(bX9O, oe3x) {
            if (!this.bGd3x(oe3x))
                this.zw7p.bq9h(bX9O)
        };
        return function() {
            k8c.ed0x(this.Fq9h, yc7V, this);
            k8c.ed0x(this.Fq9h.onshow, yc7V, this);
            k8c.ed0x(this.Fq9h.onrefresh, yc7V, this)
        }
    }()
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), H9y = c8g("nej.ut"), v9m = c8g("nej.j"), k8c = c8g("nej.u"), F9w = c8g("nm.m"), l8d = c8g("nm.x"), p8h = c8g("nm.d"), b8h, K9B;
    F9w.Pj2x = NEJ.C();
    b8h = F9w.Pj2x.O9F(H9y.cz9q);
    b8h.cl9c = function() {
        this.cs9j();
        this.o8g = a7h.x9o("g-topbar");
        var i8a = a7h.I9z(this.o8g, "j-tflag");
        this.bqO9F = i8a[0];
        this.Gs9j = i8a[1];
        this.sH4L = i8a[2];
        this.bFV3x = i8a[3];
        this.bqZ9Q = i8a[4];
        this.bYC8u = H9y.nl3x.B9s({
            list: this.bqO9F.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.brg9X = H9y.nl3x.B9s({
            list: this.bqZ9Q.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bU9L([[this.Gs9j, "click", this.cx9o.g8c(this)], [this.Gs9j, "mouseout", this.bFU3x.g8c(this, 0)], [this.Gs9j, "mouseover", this.bFU3x.g8c(this, 1)]]);
        window.scrollTopbar = this.bYA8s.g8c(this);
        window.matchNav = this.bFT3x.g8c(this);
        window.polling = this.pY4c.g8c(this);
        this.Pk2x = p8h.CA8s.B9s();
        this.bYx8p();
        this.GR9I();
        var bC9t = k8c.hi1x(location.href.split("?")[1]) || {};
        if (bC9t.market) {
            a7h.x9o("topbar-download-link").href = "/download?market=" + bC9t.market
        }
        var bau5z = a7h.I9z(this.o8g, "j-showoff");
        if (bau5z && !this.Pk2x.OH2x("newMvSearch")) {
            a7h.w9n(bau5z[0], "f-hide");
            window.setTimeout(function() {
                a7h.y9p(bau5z[0], "f-hide")
            }, 5e3)
        }
    }
    ;
    b8h.pY4c = function(d8f) {
        var dG0x = l8d.Gx9o();
        if (!/^\/msg/.test(dG0x)) {
            var GT9K = 0;
            GT9K += d8f.comment;
            GT9K += d8f.forward;
            GT9K += d8f.msg;
            GT9K += d8f.notice;
            if (GT9K > 0) {
                this.sH4L.innerHTML = a7h.bP9G("m-topbar-mesg-count", {
                    count: GT9K
                })
            } else {
                this.sH4L.innerHTML = ""
            }
            var ew0x = "/at";
            if (d8f.notice)
                ew0x = "/notify";
            if (d8f.comment)
                ew0x = "/comment";
            if (d8f.msg > 0)
                ew0x = "/private";
            if (d8f.forward > 0)
                ew0x = "/at";
            this.sH4L.href = "/msg/#" + ew0x
        } else {
            this.sH4L.innerHTML = ""
        }
        var i8a = a7h.I9z(this.bqO9F, "j-t");
        if (!/^\/friend/.test(dG0x)) {
            if (i8a && i8a.length) {
                a7h.X9O(i8a[0], "display", d8f.event > 0 ? "" : "none")
            }
        } else {
            a7h.X9O(i8a[0], "display", "none")
        }
    }
    ;
    b8h.cx9o = function(d8f) {
        var f8d = h8b.U9L(d8f, "d:action");
        if (f8d) {
            switch (a7h.u8m(f8d, "action")) {
                case "login":
                    h8b.ce9V(d8f);
                    var t8l = a7h.u8m(f8d, "type");
                    if (t8l) {
                        if (t8l == "sina" || t8l == "tencent")
                            top.open(f8d.href);
                        else
                            top.login(t8l == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h8b.ce9V(d8f);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.Pk2x.OH2x("storeNew")) {
                        a7h.y9p(this.baz5E, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.Pk2x.OH2x("levelNew")) {
                        a7h.y9p(this.baA5F, "f-vhide")
                    }
                    break
            }
        }
    }
    ;
    b8h.bFU3x = function(Ag8Y, d8f) {
        if (this.bFR3x) {
            this.bFR3x.style.display = !Ag8Y ? "none" : ""
        }
    }
    ;
    b8h.bYA8s = function(fQ1x) {
        a7h.X9O(this.o8g, "top", -fQ1x + "px")
    }
    ;
    b8h.bFT3x = function(ew0x, bYv8n) {
        this.bYC8u.nm3x(ew0x);
        if (ew0x == "discover") {
            a7h.y9p(this.bFV3x, "f-hide");
            a7h.w9n(this.bqZ9Q, "f-hide");
            window.g_topBarHeight = 105;
            this.brg9X.nm3x(bYv8n)
        } else {
            a7h.w9n(this.bFV3x, "f-hide");
            a7h.y9p(this.bqZ9Q, "f-hide");
            window.g_topBarHeight = 75
        }
    }
    ;
    b8h.bYx8p = function() {
        var ua6U = a7h.x9o("g_iframe");
        if (!ua6U)
            return;
        var gi1x = ua6U.contentWindow.document.getElementById("g_top");
        this.bFT3x(a7h.u8m(gi1x, "module"), a7h.u8m(gi1x, "sub"))
    }
    ;
    b8h.GR9I = function() {
        var du0x = GUser || {}
            , bYm8e = GUserAcc || {};
        if (du0x && du0x.userId) {
            a7h.dT0x(this.Gs9j, "m-topbar-user-login", NEJ.X(du0x, bYm8e));
            a7h.X9O(this.sH4L, "display", "")
        } else {
            this.Gs9j.innerHTML = a7h.hX1x("m-topbar-user-unlogin");
            this.sH4L.innerHTML = "";
            var i8a = a7h.I9z(this.bqO9F, "j-t");
            a7h.X9O(i8a[0], "display", "none");
            a7h.X9O(this.sH4L, "display", "none")
        }
        var i8a = a7h.I9z(this.Gs9j, "j-uflag");
        this.bFR3x = i8a[0];
        this.cuK3x = i8a[1];
        this.baA5F = i8a[2];
        this.baz5E = i8a[3];
        if (!this.Pk2x.OH2x("storeNew", true)) {
            a7h.w9n(this.baz5E, "f-vhide")
        } else {
            a7h.y9p(this.baz5E, "f-vhide")
        }
        if (!this.Pk2x.OH2x("levelNew", true)) {
            a7h.w9n(this.baA5F, "f-vhide")
        } else {
            a7h.y9p(this.baA5F, "f-vhide")
        }
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, h8b = c8g("nej.v"), H9y = c8g("nej.ut"), p8h = c8g("nm.d"), b8h, K9B;
    p8h.eQ0x({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q9H) {
                h8b.z9q(p8h.rP4T, "message", Q9H)
            }
        }
    });
    p8h.rP4T = NEJ.C();
    b8h = p8h.rP4T.O9F(p8h.gZ1x);
    b8h.Tm3x = function() {
        this.ck9b("polling-get", {})
    }
    ;
    b8h.tX6R = function() {
        var eZ0x;
        return function() {
            if (!!eZ0x)
                return;
            eZ0x = window.setInterval(this.Tm3x.g8c(this), 1e5);
            this.Tm3x()
        }
    }();
    H9y.ft1x.B9s({
        event: "message",
        element: p8h.rP4T
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || "")
                , uri = {}
                , i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        }
        ;
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol
                , host = uri.host
                , port = uri.port;
            if ("document"in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        }
        ;
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || "")
                , components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        }
        ;
        util.chunkQuery = function(qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        }
        ;
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document"in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        }
        ;
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        }
        ;
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        }
        ;
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        }
        ;
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        }
        ;
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        }
        ;
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        }
        ;
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
        ;
        util.intersect = function(arr, arr2) {
            var ret = []
                , longest = arr.length > arr2.length ? arr : arr2
                , shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        }
        ;
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        }
        ;
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        }
        ;
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        }
        ;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        }
        ;
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        }
        ;
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        }
        ;
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        }
        ;
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
        ;
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON
            , indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type)
                , id = packet.id || ""
                , endpoint = packet.endpoint || ""
                , ack = packet.ack
                , data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : ""
                        , adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "")
                        data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "")
                        data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs)
                        data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        }
        ;
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        }
        ;
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || ""
                , data = pieces[5] || ""
                , packet = {
                type: packets[pieces[1]],
                endpoint: pieces[4] || ""
            };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        }
        ;
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        }
        ;
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        }
        ;
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        }
        ;
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
        ;
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        }
        ;
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        }
        ;
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        }
        ;
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        }
        ;
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        }
        ;
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        }
        ;
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        }
        ;
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        }
        ;
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        }
        ;
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document"in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this,name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        }
        ;
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        }
        ;
        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this
                , options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0]
                    , script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                }
                ;
                xhr.send(null)
            }
        }
        ;
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this,this.sessionid)
                }
            }
            return null
        }
        ;
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        }
        ;
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        }
        ;
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        }
        ;
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        }
        ;
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        }
        ;
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        }
        ;
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        }
        ;
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        }
        ;
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        }
        ;
        Socket.prototype.onOpen = function() {
            this.open = true
        }
        ;
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        ;
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        }
        ;
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        }
        ;
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected
                , wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        }
        ;
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this
                , maxAttempts = this.options["max reconnection attempts"]
                , tryMultiple = this.options["try multiple transports"]
                , limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this,"json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        }
        ;
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        }
        ;
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1)
                , lastArg = args[args.length - 1]
                , packet = {
                type: "event",
                name: name
            };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        }
        ;
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data")
                        params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        }
        ;
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        }
        ;
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            }
            ;
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            }
            ;
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            }
            ;
            this.websocket.onerror = function(e) {
                self.onError(e)
            }
            ;
            return this
        }
        ;
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        }
        ;
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        }
        ;
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        }
        ;
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        }
        ;
        WS.check = function() {
            return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
        }
        ;
        WS.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this
                , args = arguments;
            WebSocket.Tk3x(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.send = function() {
            var self = this
                , args = arguments;
            WebSocket.Tk3x(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.close = function() {
            WebSocket.Pv2x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        }
        ;
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options
                    , port = options["flash policy port"]
                    , path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.baU5Z();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        }
        ;
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize"in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        }
        ;
        Flashsocket.xdomainCheck = function() {
            return true
        }
        ;
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function() {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
                    , ah = t.userAgent.toLowerCase()
                    , Y = t.platform.toLowerCase()
                    , ae = Y ? /win/.test(Y) : /win/.test(ah)
                    , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
                    , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
                    , X = !+"1"
                    , ag = [0, 0, 0]
                    , ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(), k = function() {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if (M.wk) {
                        (function() {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                    s(f)
                }
            }();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn"
                        , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv
                    , X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function() {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gv1x = WebSocket.bYh8Z++;
            WebSocket.bFM3x[self.gv1x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kO2x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Tk3x(function() {
                    WebSocket.oK3x.create(self.gv1x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
        ;
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oK3x.send(this.gv1x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        }
        ;
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oK3x.close(this.gv1x)
        }
        ;
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.kO2x)) {
                this.kO2x[type] = []
            }
            this.kO2x[type].push(listener)
        }
        ;
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.kO2x))
                return;
            var events = this.kO2x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
        ;
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.kO2x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
        ;
        WebSocket.prototype.bYf8X = function(flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFL3x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFL3x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bYd8V("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
        ;
        WebSocket.prototype.bFL3x = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.prototype.bYd8V = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oK3x = null;
        WebSocket.bFM3x = {};
        WebSocket.Pv2x = [];
        WebSocket.bYh8Z = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Tk3x(function() {
                WebSocket.oK3x.loadManualPolicyFile(url)
            })
        }
        ;
        WebSocket.baU5Z = function() {
            if (WebSocket.oK3x)
                return;
            if (WebSocket.bYa8S) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bYa8S
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bXZ8R()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        }
        ;
        WebSocket.cuM3x = function() {
            setTimeout(function() {
                WebSocket.oK3x = document.getElementById("webSocketFlash");
                WebSocket.oK3x.setCallerUrl(location.href);
                WebSocket.oK3x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Pv2x.length; ++i) {
                    WebSocket.Pv2x[i]()
                }
                WebSocket.Pv2x = []
            }, 0)
        }
        ;
        WebSocket.cuO3x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.oK3x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFM3x[events[i].webSocketId].bYf8X(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
        ;
        WebSocket.cuQ3x = function(message) {
            console.log(decodeURIComponent(message))
        }
        ;
        WebSocket.dy0x = function(message) {
            console.error(decodeURIComponent(message))
        }
        ;
        WebSocket.Tk3x = function(task) {
            if (WebSocket.oK3x) {
                task()
            } else {
                WebSocket.Pv2x.push(task)
            }
        }
        ;
        WebSocket.bXZ8R = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        }
        ;
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.baU5Z()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.baU5Z()
                })
            }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        }
        ;
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        }
        ;
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        }
        ;
        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        }
        ;
        XHR.prototype.close = function() {
            this.onClose();
            return this
        }
        ;
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain())
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        }
        ;
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        }
        ;
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain)
                    , usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest
                    , socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:"
                    , isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        }
        ;
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        }
        ;
        HTMLFile.prototype.c8g = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        }
        ;
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        }
        ;
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        }
        ;
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        }
        ;
        HTMLFile.xdomainCheck = function() {
            return false
        }
        ;
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        }
        ;
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        }
        ;
        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen)
                return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        }
        ;
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        }
        ;
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        }
        ;
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c8g(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        }
        ;
        JSONPPolling.prototype.get = function() {
            var self = this
                , script = document.createElement("script")
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            }
            ;
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        }
        ;
        JSONPPolling.prototype.c8g = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        }
        ;
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        }
        ;
        JSONPPolling.check = function() {
            return "document"in global
        }
        ;
        JSONPPolling.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.dI0x)
            this.dI0x = {};
        this.bFH3x = n
    }
    ;
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dI0x || !this.dI0x.error || isArray(this.dI0x.error) && !this.dI0x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1]instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dI0x)
            return false;
        var handler = this.dI0x[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++)
                        args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dI0x)
            this.dI0x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dI0x[type]) {
            this.dI0x[type] = listener
        } else if (isArray(this.dI0x[type])) {
            this.dI0x[type].push(listener)
        } else {
            this.dI0x[type] = [this.dI0x[type], listener]
        }
        if (isArray(this.dI0x[type]) && !this.dI0x[type].warned) {
            var m;
            if (this.bFH3x !== undefined) {
                m = this.bFH3x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dI0x[type].length > m) {
                this.dI0x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dI0x[type].length);
                console.trace()
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dI0x || !this.dI0x[type])
            return this;
        var list = this.dI0x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dI0x[type]
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.dI0x = {};
            return this
        }
        var events = this.dI0x && this.dI0x[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dI0x[type] = null
        }
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        if (!this.dI0x)
            this.dI0x = {};
        if (!this.dI0x[type])
            this.dI0x[type] = [];
        if (!isArray(this.dI0x[type])) {
            this.dI0x[type] = [this.dI0x[type]]
        }
        return this.dI0x[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    }
    ;
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    }
    ;
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    }
    ;
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    }
    ;
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    }
    ;
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    }
    ;
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    }
    ;
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), l8d = c8g("nm.x"), di0x = c8g("nm.u"), p8h = c8g("nm.d"), PF2x = c8g("pomelo"), dn0x = 0, b8h, K9B;
    p8h.eQ0x({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q9H) {
                dn0x = 2;
                var rK4O = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }
                    , j8b = Q9H.account || Y9P
                    , cT0x = GUser.userId;
                PF2x.init(rK4O.host, rK4O.port, true, this.bXT8L.g8c(this, {
                    user: cT0x,
                    nonce: j8b.nonce,
                    domain: rK4O.domain,
                    productKey: rK4O.key,
                    signature: j8b.signature,
                    expire_time: j8b.expireTime
                }))
            },
            onerror: function() {
                return this.bbq6k()
            }
        }
    });
    p8h.xV7O = NEJ.C();
    b8h = p8h.xV7O.O9F(p8h.gZ1x);
    b8h.cl9c = function() {
        var oW3x = !1;
        return function(e8e) {
            if (!oW3x) {
                oW3x = !0
            }
            this.cs9j(e8e);
            PF2x.on("specify", this.qj4n.g8c(this));
            PF2x.on("broadcast", this.qj4n.g8c(this))
        }
    }();
    b8h.qj4n = function(d8f) {
        k8c.be9V(d8f, function(bF9w) {
            h8b.z9q(p8h.xV7O, "message", bF9w)
        }, this)
    }
    ;
    b8h.bbq6k = function() {
        var bB9s = 500;
        return function() {
            dn0x = 0;
            PF2x.disconnect();
            if (bB9s > 6e4)
                bB9s = 500;
            bB9s *= 2
        }
    }();
    b8h.bXT8L = function(e8e, bQ9H) {
        if (!!bQ9H) {
            return this.bbq6k()
        }
        dn0x = 3;
        PF2x.registerAndBind(e8e, function(m8e) {
            if (m8e.code != 200) {
                return this.bbq6k()
            }
            dn0x = 4
        }
            .g8c(this))
    }
    ;
    b8h.cuS3x = function() {
        di0x.bXQ8I.fV1x().cuT3x()
    }
    ;
    b8h.cuU3x = function() {
        di0x.bXQ8I.fV1x().cuV3x()
    }
    ;
    b8h.bbC6w = function() {
        var oW3x = !1;
        return function() {
            if (oW3x)
                return;
            oW3x = !0;
            this.ck9b("polling-init", {})
        }
    }();
    H9y.ft1x.B9s({
        event: "message",
        element: p8h.xV7O
    })
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), v9m = c8g("nej.j"), cK0x = c8g("nej.p"), k8c = c8g("nej.u"), n8f = c8g("nm.l"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), dj0x = c8g("api"), b8h, K9B;
    var gc1x = a7h.hM1x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n8f.bbJ6D = NEJ.C();
    b8h = n8f.bbJ6D.O9F(n8f.dV0x);
    K9B = n8f.bbJ6D.cg9X;
    b8h.bk9b = function(e8e) {
        e8e.title = "意见反馈";
        this.bl9c(e8e)
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = gc1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        this.gF1x = {};
        var Is0x = a7h.I9z;
        var Cn8f = h8b.q8i;
        this.gF1x.submit_btn = Is0x(this.o8g, "u-btn2")[0];
        this.gF1x.cancle_btn = Is0x(this.o8g, "u-btn2")[1];
        this.gF1x.prompt_msg = Is0x(this.o8g, "u-err")[0];
        this.gF1x.zs = Is0x(this.o8g, "zs")[0];
        a7h.X9O(this.gF1x.zs, "display", "none");
        this.gF1x.fb_txt = Is0x(this.o8g, "u-txt")[0];
        this.gF1x.contact = Is0x(this.o8g, "u-txt")[1];
        a7h.fD1x(this.gF1x.fb_txt, "holder");
        a7h.fD1x(this.gF1x.contact, "holder");
        if (a7h.by9p(this.gF1x.fb_txt.parentNode, "holder-parent")) {
            a7h.X9O(this.gF1x.fb_txt.parentNode, "display", "block")
        }
        if (a7h.by9p(this.gF1x.contact.parentNode, "holder-parent")) {
            a7h.X9O(this.gF1x.contact.parentNode, "display", "block")
        }
        Cn8f(this.gF1x.submit_btn, "click", this.bXN8F.g8c(this));
        Cn8f(this.gF1x.cancle_btn, "click", this.bXM8E.g8c(this));
        Cn8f(this.gF1x.prompt_msg, "msgShow", this.bXL8D.g8c(this));
        Cn8f(this.gF1x.fb_txt, "keyup", this.sY5d.g8c(this));
        Cn8f(this.gF1x.fb_txt, "input", this.fl1x.g8c(this));
        Cn8f(this.gF1x.contact, "keyup", this.bXK8C.g8c(this));
        Cn8f(this.gF1x.contact, "input", this.bFF3x.g8c(this));
        this.kz2x = p8h.hK1x.B9s()
    }
    ;
    b8h.bXN8F = function(d8f) {
        h8b.bh9Y(d8f);
        if (this.cu9l())
            return;
        var bi9Z = this.gF1x.fb_txt.value.trim();
        var bo9f = bi9Z.length;
        var e8e = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bFE3x = this.gF1x.contact.value.trim();
        var SS3x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l8d.bbY6S(),
            contact: bFE3x
        };
        var j8b = {
            content: bi9Z,
            client: "web",
            xInfo: JSON.stringify(SS3x)
        }
            , mD3x = this.kz2x.ciG0x();
        if (mD3x && mD3x.length) {
            j8b.log = mD3x.join("\n")
        }
        if (bo9f == 0) {
            this.gF1x.prompt_msg.innerHTML = "反馈内容不能为空";
            a7h.X9O(this.gF1x.prompt_msg, "display", "block");
            return
        }
        if (bFE3x.length > 100) {
            this.gF1x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a7h.X9O(this.gF1x.prompt_msg, "display", "block");
            return
        }
        this.cu9l(true);
        e8e.data = k8c.df0x(j8b);
        e8e.onload = this.bXE8w.g8c(this);
        e8e.onerror = this.hO1x.g8c(this);
        v9m.bp9g("/api/feedback/web", e8e)
    }
    ;
    b8h.fl1x = function(d8f) {
        var bo9f = this.gF1x.fb_txt.value.trim().length;
        if (bo9f > 0)
            a7h.X9O(this.gF1x.prompt_msg, "display", "none");
        cK0x.cS0x.browser == "ie" && cK0x.cS0x.version < "7.0" ? setTimeout(this.fx1x.g8c(this), 0) : this.fx1x()
    }
    ;
    b8h.sY5d = function(d8f) {
        if (d8f.keyCode === 8)
            this.fx1x()
    }
    ;
    b8h.fx1x = function() {
        var bo9f = this.gF1x.fb_txt.value.trim().length;
        this.gF1x.zs.innerHTML = !bo9f ? "0/140" : bo9f + "/140"
    }
    ;
    b8h.bFF3x = function(d8f) {
        var bo9f = this.gF1x.contact.value.trim().length;
        if (bo9f > 0)
            a7h.X9O(this.gF1x.prompt_msg, "display", "none")
    }
    ;
    b8h.bXK8C = function(d8f) {
        if (d8f.keyCode === 8)
            this.bFF3x()
    }
    ;
    b8h.bXM8E = function(d8f) {
        h8b.ce9V(d8f);
        this.bq9h()
    }
    ;
    b8h.bXL8D = function(d8f) {
        var f8d = h8b.U9L(d8f);
        f8d.innerHTML = "请输入反馈内容"
    }
    ;
    b8h.cuW3x = function(cuX3x) {
        var f8d = h8b.U9L(d8f);
        f8d.innerHTML = ""
    }
    ;
    b8h.bXE8w = function(m8e) {
        this.cu9l(false);
        this.bq9h();
        n8f.Z9Q.N9E({
            tip: "意见发送成功",
            autoclose: true
        })
    }
    ;
    b8h.hO1x = function(m8e) {
        this.cu9l(false);
        n8f.Z9Q.N9E({
            tip: "意见发送失败",
            autoclose: true
        })
    }
    ;
    b8h.cu9l = function(cC0x) {
        return this.dN0x(this.gF1x.submit_btn, cC0x, "发送意见", "发送中...")
    }
    ;
    b8h.N9E = function() {
        K9B.N9E.call(this);
        this.cu9l(false);
        this.gF1x.fb_txt.value = "";
        this.gF1x.contact.value = "";
        a7h.X9O(this.gF1x.prompt_msg, "display", "none");
        this.fx1x()
    }
    ;
    l8d.bXz8r = function(e8e) {
        e8e = e8e || {};
        if (e8e.title === undefined)
            e8e.title = "意见反馈";
        n8f.bbJ6D.N9E(e8e)
    }
    ;
    dj0x.feedback = l8d.feedback = l8d.bXz8r
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, M9D = c8g("nej.ui"), b8h;
    if (!!M9D.vO6I)
        return;
    M9D.vO6I = NEJ.C();
    b8h = M9D.vO6I.O9F(M9D.et0x);
    b8h.cl9c = function() {
        this.gv1x = this.bFy3x();
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.cn9e = e8e.index;
        this.fT1x = e8e.total;
        this.gD1x = e8e.range;
        this.fS1x(e8e.data)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        delete this.bb9S;
        delete this.cn9e;
        delete this.fT1x;
        delete this.gD1x
    }
    ;
    b8h.hp1x = bm9d;
    b8h.bFy3x = function() {
        var fX1x = +(new Date);
        return function() {
            return "itm-" + ++fX1x
        }
    }();
    b8h.Cg8Y = function() {
        return this.gv1x
    }
    ;
    b8h.hk1x = function() {
        return this.bb9S
    }
    ;
    b8h.fS1x = function(j8b) {
        this.bb9S = j8b || {};
        this.hp1x(this.bb9S)
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), M9D = c8g("nej.ui"), b8h, K9B;
    if (!!M9D.rC4G)
        return;
    M9D.rC4G = NEJ.C();
    b8h = M9D.rC4G.O9F(M9D.vO6I);
    K9B = M9D.rC4G.cg9X;
    b8h.bk9b = function(e8e) {
        this.bXx8p = e8e.pkey || "id";
        this.bl9c(e8e)
    }
    ;
    b8h.Ci8a = function(j8b) {
        this.z9q("ondelete", {
            ext: j8b,
            id: this.Cg8Y(),
            data: this.hk1x(),
            body: this.kA2x()
        })
    }
    ;
    b8h.Qc2x = function(j8b) {
        this.z9q("onupdate", {
            ext: j8b,
            id: this.Cg8Y(),
            data: this.hk1x(),
            body: this.kA2x()
        })
    }
    ;
    b8h.fS1x = function(j8b) {
        K9B.fS1x.apply(this, arguments);
        this.gv1x = this.bb9S[this.bXx8p] || this.bFy3x()
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, eU0x = NEJ.R, a7h = c8g("nej.e"), k8c = c8g("nej.u"), M9D = c8g("nej.ui"), b8h, hP1x, bcD6x;
    if (!!M9D.bcE6y)
        return;
    M9D.bcE6y = NEJ.C();
    b8h = M9D.bcE6y.O9F(M9D.et0x);
    b8h.bk9b = function(e8e) {
        this.SG3x = NEJ.X({}, e8e);
        this.fB1x = NEJ.X({}, e8e);
        delete this.SG3x.onchange;
        this.fB1x.onchange = this.gt1x.g8c(this);
        this.bl9c(e8e);
        this.bXw8o({
            number: e8e.number,
            label: e8e.label || Y9P
        })
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        if (!!this.jW2x) {
            this.jW2x.S9J();
            delete this.jW2x
        }
        delete this.SG3x;
        delete this.fB1x;
        this.bXv8n();
        this.o8g.innerHTML = "&nbsp;"
    }
    ;
    b8h.bZ9Q = function() {
        this.lb2x = hP1x
    }
    ;
    b8h.bXw8o = function(j8b) {
        a7h.dT0x(this.o8g, bcD6x, j8b);
        var fX1x = a7h.Fp9g();
        this.fB1x.list = a7h.I9z(this.o8g, "js-i-" + fX1x);
        this.fB1x.pbtn = (a7h.I9z(this.o8g, "js-p-" + fX1x) || eU0x)[0];
        this.fB1x.nbtn = (a7h.I9z(this.o8g, "js-n-" + fX1x) || eU0x)[0]
    }
    ;
    b8h.bR9I = function() {
        this.cc9T()
    }
    ;
    b8h.cuY3x = function(j8b) {
        return a7h.bP9G(bcD6x, j8b)
    }
    ;
    b8h.gt1x = function(d8f) {
        if (this.Qu2x)
            return;
        var s8k = d8f.index
            , co9f = d8f.total;
        this.Qu2x = !0;
        this.Qv2x(s8k, co9f);
        k8c.be9V(this.Ss3x, function(rv4z) {
            rv4z.Qv2x(s8k, co9f)
        });
        this.Qu2x = !1;
        this.z9q("onchange", d8f)
    }
    ;
    b8h.g8c = function(bA9r) {
        bA9r = a7h.x9o(bA9r);
        if (!bA9r)
            return this;
        var cm9d = NEJ.X({}, this.SG3x);
        cm9d.parent = bA9r;
        cm9d.index = this.ru4y();
        cm9d.total = this.jG2x();
        var rv4z = this.constructor.B9s(cm9d);
        rv4z.ux6r("onchange", this.fB1x.onchange);
        if (!this.Ss3x)
            this.Ss3x = [];
        this.Ss3x.push(rv4z);
        return this
    }
    ;
    b8h.bXv8n = function() {
        var bpv9m = function(rv4z, s8k, i8a) {
            rv4z.S9J();
            i8a.splice(s8k, 1)
        };
        return function() {
            k8c.mu3x(this.Ss3x, bpv9m)
        }
    }();
    b8h.jJ2x = function(s8k) {
        if (!this.jW2x)
            return;
        this.jW2x.jJ2x(s8k)
    }
    ;
    b8h.ru4y = function() {
        if (!this.jW2x)
            return 1;
        return this.jW2x.ru4y()
    }
    ;
    b8h.jG2x = function() {
        if (!this.jW2x)
            return 1;
        return this.jW2x.jG2x()
    }
    ;
    b8h.Qv2x = function(s8k, co9f) {
        if (!this.jW2x)
            return;
        this.jW2x.Qv2x(s8k, co9f)
    }
    ;
    b8h.bdd6X = function(co9f) {
        if (!this.jW2x)
            return;
        this.jW2x.bdd6X(co9f)
    }
    ;
    hP1x = a7h.rO4S(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcD6x = a7h.em0x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), M9D = c8g("nej.ut"), b8h;
    if (!!M9D.Sr3x)
        return;
    M9D.Sr3x = NEJ.C();
    b8h = M9D.Sr3x.O9F(M9D.cz9q);
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.Sq3x = e8e.pbtn;
        this.cf9W = e8e.nbtn;
        this.Sp3x = e8e.sbtn;
        this.So3x = e8e.ebtn;
        this.ic1x = e8e.event || "click";
        this.jO2x = e8e.selected || "js-selected";
        this.mV3x = e8e.disabled || "js-disabled";
        this.bXt8l(e8e.list);
        this.Qv2x(e8e.index || 1, e8e.total || 1)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        delete this.bV9M;
        delete this.ic1x;
        delete this.Sq3x;
        delete this.cf9W;
        delete this.Sp3x;
        delete this.So3x;
        delete this.bFv3x;
        delete this.fT1x;
        delete this.cn9e;
        delete this.jO2x;
        delete this.mV3x
    }
    ;
    b8h.bXt8l = function() {
        var bdq6k = function(f8d) {
            this.bV9M.push(f8d);
            this.bU9L([[f8d, this.ic1x, this.cJ0x.dW0x(this, 0)]])
        };
        return function(i8a) {
            this.bV9M = [];
            this.bU9L([[this.Sq3x, "click", this.cJ0x.dW0x(this, -1)], [this.cf9W, "click", this.cJ0x.dW0x(this, 1)], [this.Sp3x, "click", this.cJ0x.dW0x(this, -2)], [this.So3x, "click", this.cJ0x.dW0x(this, 2)]]);
            k8c.be9V(i8a, bdq6k, this)
        }
    }();
    b8h.Cb8T = function(f8d, s8k) {
        if (s8k == null) {
            f8d.innerText = "";
            a7h.X9O(f8d, "display", "none");
            a7h.w9n(f8d, this.jO2x)
        } else {
            f8d.innerText = s8k;
            a7h.X9O(f8d, "display", "");
            s8k == this.cn9e ? a7h.y9p(f8d, this.jO2x) : a7h.w9n(f8d, this.jO2x)
        }
    }
    ;
    b8h.bdu6o = function() {
        if (this.cn9e <= 1) {
            a7h.y9p(this.Sq3x, this.mV3x);
            a7h.y9p(this.Sp3x, this.mV3x)
        } else {
            a7h.w9n(this.Sq3x, this.mV3x);
            a7h.w9n(this.Sp3x, this.mV3x)
        }
        if (this.cn9e >= this.fT1x) {
            a7h.y9p(this.cf9W, this.mV3x);
            a7h.y9p(this.So3x, this.mV3x)
        } else {
            a7h.w9n(this.cf9W, this.mV3x);
            a7h.w9n(this.So3x, this.mV3x)
        }
    }
    ;
    b8h.Se3x = bm9d;
    b8h.bdy6s = function() {
        this.Se3x();
        this.bdu6o();
        this.z9q("onchange", {
            last: this.bFv3x,
            total: this.fT1x,
            index: this.cn9e,
            ext: this.bdz6t
        })
    }
    ;
    b8h.bFu3x = function(s8k) {
        s8k = parseInt(s8k);
        if (isNaN(s8k) || this.fT1x == null)
            return !1;
        s8k = Math.max(1, Math.min(s8k, this.fT1x));
        this.bFv3x = this.cn9e;
        this.cn9e = s8k;
        return !0
    }
    ;
    b8h.bdD6x = function(co9f) {
        co9f = parseInt(co9f);
        if (isNaN(co9f) || co9f < 1)
            return !1;
        this.fT1x = co9f;
        return !0
    }
    ;
    b8h.cJ0x = function(d8f, ey0x) {
        h8b.ce9V(d8f);
        var E9v = h8b.U9L(d8f);
        if (!E9v || a7h.by9p(E9v, this.jO2x) || a7h.by9p(E9v, this.mV3x))
            return;
        var s8k = E9v.innerText;
        switch (ey0x) {
            case 1:
            case -1:
                s8k = this.cn9e + ey0x;
                break;
            case 2:
                s8k = this.fT1x;
                break;
            case -2:
                s8k = 1;
                break
        }
        this.jJ2x(s8k)
    }
    ;
    b8h.ru4y = function() {
        return this.cn9e
    }
    ;
    b8h.jJ2x = function(s8k) {
        var bXn8f = this.cn9e;
        this.bFu3x(s8k);
        if (bXn8f != this.cn9e)
            this.bdy6s();
        return this
    }
    ;
    b8h.jG2x = function() {
        return this.fT1x
    }
    ;
    b8h.JG0x = function(co9f) {
        if (this.bdD6x(co9f) && this.cn9e != null) {
            this.cn9e = 1;
            this.bdy6s()
        }
        return this
    }
    ;
    b8h.bdd6X = function(co9f) {
        if (this.bdD6x(co9f)) {
            this.Se3x();
            this.bdu6o()
        }
        return this
    }
    ;
    b8h.Qv2x = function(s8k, co9f) {
        if (!this.bdD6x(co9f) || !this.bFu3x(s8k))
            return this;
        this.bdy6s();
        return this
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), k8c = c8g("nej.u"), cL0x = c8g("nej.x"), M9D = c8g("nej.ut"), b8h;
    if (!!M9D.QC2x)
        return;
    M9D.QC2x = NEJ.C();
    b8h = M9D.QC2x.O9F(M9D.Sr3x);
    b8h.cl9c = function() {
        this.cs9j();
        var f8d = a7h.cU0x("span", "zdot");
        f8d.innerText = "...";
        this.Sb2x = [f8d.cloneNode(true), f8d]
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        this.bFt3x()
    }
    ;
    b8h.bFt3x = function() {
        a7h.mc3x(this.Sb2x[0]);
        a7h.mc3x(this.Sb2x[1])
    }
    ;
    b8h.Se3x = function() {
        this.bdz6t = {
            last: !1,
            first: !1,
            list: this.bV9M
        };
        this.bFt3x();
        this.Cb8T(this.bV9M[0], 1);
        var bE9v = 1
            , bo9f = this.bV9M.length;
        if (this.fT1x < bo9f) {
            for (var oP3x; bE9v < bo9f; bE9v++) {
                oP3x = bE9v + 1;
                this.Cb8T(this.bV9M[bE9v], oP3x > this.fT1x ? null : oP3x)
            }
            return
        }
        if (this.cn9e > 1) {
            var ct9k = Math.floor((bo9f - 2) / 2)
                , bXk8c = this.fT1x - bo9f + 2
                , is1x = Math.max(2, this.cn9e - ct9k);
            if (this.fT1x >= bo9f) {
                is1x = Math.min(is1x, bXk8c)
            }
            if (is1x > 2) {
                this.bV9M[0].insertAdjacentElement("afterEnd", this.Sb2x[0]);
                this.bdz6t.first = !0
            }
            for (var s8k; ; bE9v++) {
                s8k = is1x + bE9v - 1;
                if (s8k > this.cn9e)
                    break;
                this.Cb8T(this.bV9M[bE9v], s8k)
            }
        }
        if (this.cn9e < this.fT1x) {
            var s8k, is1x = this.cn9e + 1;
            for (var i = 0, l = bo9f - 2; ; i++,
                bE9v++) {
                s8k = is1x + i;
                if (bE9v > l || s8k > this.fT1x)
                    break;
                this.Cb8T(this.bV9M[bE9v], s8k)
            }
            if (s8k < this.fT1x) {
                this.bV9M[bE9v].insertAdjacentElement("beforeBegin", this.Sb2x[1]);
                this.bdz6t.last = !0
            }
            if (s8k <= this.fT1x) {
                this.Cb8T(this.bV9M[bE9v++], this.fT1x)
            }
        }
        for (; bE9v < bo9f; bE9v++) {
            this.Cb8T(this.bV9M[bE9v])
        }
    }
    ;
    a7h.bXj8b = cL0x.bXj8b = function(bA9r, e8e) {
        var C9t = a7h.kp2x(bA9r);
        if (!C9t)
            return null;
        if (!M9D.ZI5N(C9t, M9D.QC2x)) {
            e8e = e8e || {};
            var i8a = !e8e.clazz ? a7h.cQ0x(C9t) : a7h.I9z(C9t, e8e.clazz);
            e8e.pbtn = i8a.shift();
            e8e.nbtn = i8a.pop();
            e8e.list = i8a;
            delete e8e.clazz
        }
        return M9D.ZI5N(C9t, M9D.QC2x, e8e || Y9P)
    }
    ;
    cL0x.isChange = !0
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, eU0x = NEJ.R, a7h = c8g("nej.e"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), M9D = c8g("nej.ui"), b8h, K9B, gc1x;
    if (!!M9D.QH2x)
        return;
    M9D.QH2x = NEJ.C();
    b8h = M9D.QH2x.O9F(M9D.bcE6y);
    K9B = M9D.QH2x.cg9X;
    b8h.bk9b = function(e8e) {
        e8e.number = parseInt(e8e.number) || 9;
        this.bl9c(e8e);
        this.jW2x = H9y.QC2x.B9s(this.fB1x)
    }
    ;
    b8h.gt1x = function(d8f) {
        if (!!this.SG3x.noend) {
            var bFs3x = d8f.ext || Y9P
                , i8a = bFs3x.list || eU0x;
            if (bFs3x.last) {
                a7h.X9O(i8a[i8a.length - 1], "display", "none")
            }
        }
        K9B.gt1x.apply(this, arguments)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), bd9U = c8g("nej.ui"), M9D = c8g("nej.ut"), b8h;
    if (!!M9D.RZ2x)
        return;
    M9D.RZ2x = NEJ.C();
    b8h = M9D.RZ2x.O9F(M9D.cz9q);
    b8h.bk9b = function(e8e) {
        this.iv1x = {};
        this.bl9c(e8e);
        this.ia1x = a7h.x9o(e8e.parent);
        this.eM0x = {
            parent: this.ia1x
        };
        this.qB4F = parseInt(e8e.limit) || 10;
        this.vA6u = parseInt(e8e.first) || this.qB4F;
        this.bXf8X(e8e.item);
        this.bXe8W(e8e.cache || Y9P);
        this.bWZ8R(e8e.pager || Y9P);
        this.fS1x()
    }
    ;
    b8h.bD9u = function() {
        this.z9q("onbeforerecycle");
        this.QO2x();
        this.bH9y();
        if (this.iv1x.clear) {
            this.P9G.tA5F(this.iv1x.key)
        }
        this.P9G.S9J();
        if (!!this.in1x) {
            this.in1x.S9J();
            delete this.in1x
        }
        delete this.bFn3x;
        delete this.fB1x;
        delete this.RT2x;
        delete this.P9G;
        delete this.ia1x;
        delete this.QT2x;
        delete this.eM0x;
        delete this.iv1x
    }
    ;
    b8h.bFk3x = function() {
        var cP0x = /\{(.*?)\}/gi
            , bWU7N = function(pD4H, j8b) {
            return (pD4H || "{id}{seed}").replace(cP0x, function($1, $2) {
                var A9r = j8b[$2];
                return A9r == null ? $1 : A9r
            })
        };
        return function(C9t) {
            var J9A = bWU7N(this.eM0x.jstIdTempalte, {
                id: C9t,
                seed: a7h.Fp9g()
            });
            if (!this.eM0x.jstIdType) {
                return a7h.x9o(J9A)
            } else if (this.eM0x.jstIdType == 1) {
                return (a7h.I9z(this.ia1x, J9A) || [])[0]
            }
        }
    }();
    b8h.zC7v = function(bE9v, bj9a, fY1x, bo9f) {
        var m8e = {
            index: 1,
            total: 1
        };
        if (bj9a >= bE9v) {
            m8e.index = Math.floor((bj9a - bE9v) / fY1x) + 2
        }
        if (bo9f > bE9v) {
            m8e.total = Math.ceil((bo9f - bE9v) / fY1x) + 1
        }
        return m8e
    }
    ;
    b8h.bFj3x = function(J9A) {
        delete this.QT2x;
        this.Gj9a = J9A;
        this.bU9L([[this.ia1x, "click", this.bWS7L.g8c(this)]])
    }
    ;
    b8h.bXf8X = function(r8j) {
        if (k8c.fe1x(r8j)) {
            this.bFj3x(r8j);
            return
        }
        NEJ.X(this.eM0x, r8j);
        var dD0x = this.eM0x.klass;
        delete this.eM0x.klass;
        if (k8c.fe1x(dD0x)) {
            this.bFj3x(dD0x);
            return
        }
        delete this.Gj9a;
        this.QT2x = dD0x;
        this.eM0x.ondelete = this.z9q.g8c(this, "ondelete");
        this.eM0x.onupdate = this.z9q.g8c(this, "onupdate")
    }
    ;
    b8h.bXe8W = function(R9I) {
        var dD0x = R9I.klass
            , jl2x = NEJ.X({}, R9I);
        this.iv1x.key = jl2x.lkey;
        this.iv1x.data = jl2x.data || {};
        this.iv1x.clear = !!jl2x.clear;
        this.eM0x.pkey = jl2x.key || "id";
        jl2x.onlistload = this.beX6R.g8c(this);
        jl2x.onpullrefresh = this.bWR7K.g8c(this);
        if (!!dD0x && "onlistchange"in dD0x) {
            this.bU9L([[dD0x, "listchange", this.bfa6U.g8c(this)]])
        } else {
            jl2x.onitemadd = this.RR2x.g8c(this);
            jl2x.onitemdelete = this.RQ2x.g8c(this);
            jl2x.onitemupdate = this.bFi3x.g8c(this)
        }
        this.P9G = (dD0x || M9D.Jp0x).B9s(jl2x);
        if (R9I.total != null) {
            this.P9G.JG0x(this.iv1x.key, R9I.total)
        }
        if (!!R9I.list) {
            this.P9G.rr4v(this.iv1x.key, R9I.list)
        }
    }
    ;
    b8h.bWZ8R = function(rv4z) {
        this.bFn3x = rv4z.klass || bd9U.QH2x;
        this.fB1x = NEJ.X({}, rv4z);
        if (k8c.el0x(rv4z.parent)) {
            this.fB1x.parent = rv4z.parent[0];
            this.QZ2x = rv4z.parent.slice(1);
            if (!this.QZ2x || !this.QZ2x.length) {
                delete this.QZ2x
            }
        }
        delete this.fB1x.klass
    }
    ;
    b8h.QO2x = function() {
        var fZ1x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z9q("onbeforelistclear", {
                parent: this.ia1x
            });
            if (!!this.fd1x && this.fd1x.length > 0) {
                this.fd1x = this.QT2x.S9J(this.fd1x);
                delete this.fd1x
            }
            if (fZ1x.test(this.ia1x.tagName)) {
                a7h.bHS3x(this.ia1x)
            } else {
                this.ia1x.innerHTML = ""
            }
        }
    }();
    b8h.bfl6f = function(RN2x) {
        if (!!this.fB1x.fixed)
            return;
        a7h.X9O(this.fB1x.parent, "display", RN2x);
        k8c.be9V(this.QZ2x, function(bA9r) {
            a7h.X9O(bA9r, "display", RN2x)
        }, this)
    }
    ;
    b8h.bfo6i = function() {
        var s8k = this.fB1x.index || 1;
        delete this.fB1x.index;
        if (!!this.in1x) {
            s8k = this.in1x.ru4y()
        }
        this.zL7E({
            last: s8k,
            index: s8k
        })
    }
    ;
    b8h.zL7E = function(d8f) {
        this.z9q("onpagechange", d8f)
    }
    ;
    b8h.bFh3x = function(bj9a) {
        this.iv1x.offset = bj9a;
        this.Zx5C()
    }
    ;
    b8h.bFg3x = function(e8e) {
        return e8e
    }
    ;
    b8h.Zx5C = function() {
        this.Rb2x();
        var j8b = this.iv1x.data;
        j8b.offset = this.iv1x.offset;
        var oc3x = j8b.offset == 0;
        j8b.total = oc3x;
        this.iv1x.limit = oc3x ? this.vA6u : this.qB4F;
        j8b.limit = this.iv1x.limit;
        this.P9G.nQ3x(this.bFg3x(NEJ.X({}, this.iv1x)))
    }
    ;
    b8h.beX6R = function(e8e) {
        if (e8e.key != this.iv1x.key || e8e.offset != this.iv1x.offset)
            return;
        this.RL2x();
        var i8a = this.P9G.gN1x(e8e.key);
        if (!i8a || !i8a.length) {
            this.bfD7w();
            return
        }
        var fY1x = e8e.limit
            , bj9a = e8e.offset;
        if (this.bfE7x(i8a, bj9a, fY1x))
            return;
        this.z9q("onbeforelistrender", {
            list: i8a,
            offset: bj9a,
            parent: this.ia1x
        });
        if (!!this.Gj9a) {
            this.eM0x.xlist = i8a;
            this.eM0x.beg = bj9a;
            this.eM0x.end = Math.min(i8a.length, bj9a + fY1x) - 1;
            this.eM0x.act = "list";
            var ds0x = a7h.bP9G(this.Gj9a, this.eM0x);
            this.Rf2x(ds0x)
        } else {
            this.eM0x.limit = fY1x;
            this.eM0x.offset = bj9a;
            var gx1x = a7h.yP7I(i8a, this.QT2x, this.eM0x);
            this.Rm2x(gx1x)
        }
        this.z9q("onafterlistrender", {
            list: i8a,
            offset: bj9a,
            parent: this.ia1x
        })
    }
    ;
    b8h.bWR7K = function(e8e) {
        if (!this.RT2x)
            return;
        delete this.RT2x;
        this.RL2x("onafterpullrefresh");
        this.fS1x()
    }
    ;
    b8h.bFf3x = function(s8k, co9f) {
        if (!!this.in1x) {
            var xX7Q = this.in1x.ru4y()
                , bWH7A = this.in1x.jG2x();
            if (xX7Q > co9f || co9f != bWH7A) {
                this.in1x.S9J();
                delete this.in1x;
                this.zL7E({
                    last: xX7Q,
                    index: Math.min(s8k, co9f)
                });
                return !0
            }
        } else {
            this.fB1x.index = s8k;
            this.fB1x.total = co9f;
            this.in1x = this.bFn3x.B9s(this.fB1x);
            this.in1x.ux6r("onchange", this.zL7E.g8c(this));
            k8c.be9V(this.QZ2x, function(bA9r) {
                this.in1x.g8c(bA9r)
            }, this)
        }
    }
    ;
    b8h.RE2x = function() {
        var fX1x = +(new Date);
        return function(j8b) {
            var C9t = j8b[this.eM0x.pkey];
            if (!C9t) {
                j8b["dirty-data"] = !0;
                j8b[this.eM0x.pkey] = "dirty-" + fX1x++
            }
            return j8b
        }
    }();
    b8h.RC2x = function(j8b) {
        var C9t = j8b[this.eM0x.pkey];
        if (!!j8b["dirty-data"]) {
            delete j8b["dirty-data"];
            delete j8b[this.eM0x.pkey]
        }
        return C9t
    }
    ;
    b8h.RB2x = function() {
        var bWG7z = function(jA2x, lG2x) {
            this.ia1x.insertAdjacentElement(jA2x, lG2x)
        };
        return function(jA2x, j8b) {
            var HZ0x = [j8b];
            if (!!this.Gj9a) {
                this.eM0x.xlist = HZ0x;
                this.eM0x.beg = 0;
                this.eM0x.end = 0;
                this.eM0x.act = "add";
                this.Rf2x(a7h.bP9G(this.Gj9a, this.eM0x), jA2x)
            } else {
                this.eM0x.limit = 1;
                this.eM0x.offset = 0;
                this.eM0x.parent = bWG7z.g8c(this, jA2x);
                var gx1x = a7h.yP7I(HZ0x, this.QT2x, this.eM0x);
                this.eM0x.parent = this.ia1x;
                this.Rm2x(gx1x)
            }
        }
    }();
    b8h.Rb2x = bm9d;
    b8h.RL2x = function(T9K) {
        var d8f = {
            parent: this.ia1x
        };
        this.z9q(T9K || "onafterlistload", d8f);
        if (!d8f.stopped) {
            a7h.mc3x(this.ci9Z)
        }
    }
    ;
    b8h.bfE7x = bm9d;
    b8h.RA2x = function(bF9w, jA2x) {
        if (k8c.fe1x(bF9w)) {
            if (!this.ci9Z)
                this.ci9Z = a7h.cU0x("div");
            this.ci9Z.innerHTML = bF9w
        } else {
            this.ci9Z = bF9w
        }
        this.ia1x.insertAdjacentElement(jA2x || "beforeEnd", this.ci9Z)
    }
    ;
    b8h.xs7l = function(T9K, ku2x, jA2x) {
        var d8f = {
            parent: this.ia1x
        };
        this.z9q(T9K, d8f);
        if (!d8f.stopped) {
            this.RA2x(d8f.value || ku2x, jA2x)
        }
    }
    ;
    b8h.bfD7w = bm9d;
    b8h.Rf2x = bm9d;
    b8h.Rm2x = bm9d;
    b8h.bWS7L = function() {
        var fZ1x = /^(?:delete|update)$/;
        return function(d8f) {
            var f8d = h8b.U9L(d8f, "d:action");
            if (!f8d)
                return;
            var W9N = a7h.u8m(f8d, "action");
            if (!fZ1x.test(W9N))
                return;
            var C9t = a7h.u8m(f8d, "id");
            if (!C9t)
                return;
            var r8j = this.P9G.eh0x(C9t);
            if (!r8j)
                return;
            h8b.bh9Y(d8f);
            this.z9q("on" + W9N, {
                data: r8j,
                id: r8j[this.eM0x.pkey],
                body: a7h.x9o(this.bFk3x(C9t))
            })
        }
    }();
    b8h.RR2x = bm9d;
    b8h.Zw5B = function(d8f) {
        var j8b = d8f.data || {}
            , e8e = {
            data: j8b,
            key: this.iv1x.key,
            id: j8b[this.eM0x.pkey]
        };
        this.z9q("onbeforedelete", e8e);
        this.P9G.Ji0x(e8e)
    }
    ;
    b8h.RQ2x = bm9d;
    b8h.Zr5w = function(d8f) {
        var j8b = d8f.data || {}
            , e8e = {
            data: j8b,
            key: this.iv1x.key
        };
        this.z9q("onbeforeupdate", e8e);
        this.P9G.Zy5D(e8e)
    }
    ;
    b8h.bFi3x = function(d8f) {
        this.Rp2x(d8f, "onafterupdate");
        if (d8f.stopped)
            return;
        var C9t = d8f.data[this.eM0x.pkey];
        if (!!this.fd1x) {
            var r8j = a7h.bLI4M(C9t);
            if (!!r8j)
                r8j.fS1x(d8f.data)
        } else {
            var f8d = a7h.x9o(C9t + "" + a7h.Fp9g());
            if (!f8d)
                return;
            var i8a = this.P9G.gN1x(d8f.key)
                , s8k = k8c.cV0x(i8a, d8f.data);
            if (s8k < 0)
                return;
            this.eM0x.list = i8a;
            this.eM0x.beg = s8k;
            this.eM0x.end = s8k;
            this.eM0x.act = "update";
            var ds0x = a7h.bP9G(this.Gj9a, this.eM0x);
            f8d.insertAdjacentHTML("afterEnd", ds0x);
            a7h.cF0x(f8d)
        }
    }
    ;
    b8h.Rp2x = function(d8f, T9K) {
        var r8j = d8f.data;
        if (!r8j || r8j[this.eM0x.pkey] == null) {
            this.z9q("onerror", d8f);
            d8f.stopped = !0
        }
        if (!d8f.stopped) {
            this.z9q(T9K, d8f)
        }
    }
    ;
    b8h.bfW7P = bm9d;
    b8h.bgc7V = bm9d;
    b8h.bfa6U = function(d8f) {
        if (d8f.key != this.iv1x.key)
            return;
        switch (d8f.action) {
            case "add":
                this.RR2x(d8f);
                break;
            case "delete":
                this.RQ2x(d8f);
                break;
            case "update":
                this.bFi3x(d8f);
                break;
            case "refresh":
                this.fS1x();
                break;
            case "unshift":
                this.bgc7V(d8f.offset, d8f.limit);
                break;
            case "append":
                this.bfW7P(d8f.offset, d8f.limit);
                break
        }
    }
    ;
    b8h.oI3x = function(r8j) {
        this.Zr5w({
            data: r8j
        })
    }
    ;
    b8h.lR2x = function(r8j) {
        this.Zw5B({
            data: r8j
        })
    }
    ;
    b8h.re4i = function(r8j) {
        this.P9G.iG2x({
            data: r8j,
            key: this.iv1x.key
        })
    }
    ;
    b8h.rc4g = function() {
        return this.P9G
    }
    ;
    b8h.bgk7d = function(j8b) {
        this.RB2x("afterBegin", this.RE2x(j8b));
        return this.RC2x(j8b)
    }
    ;
    b8h.bFd3x = function(j8b) {
        this.RB2x("beforeEnd", this.RE2x(j8b));
        return this.RC2x(j8b)
    }
    ;
    b8h.fS1x = function() {
        this.QO2x();
        this.bfo6i()
    }
    ;
    b8h.cuZ3x = function() {
        this.P9G.tA5F(this.iv1x.key);
        this.fS1x()
    }
    ;
    b8h.bcJ6D = function() {
        if (!!this.RT2x)
            return;
        this.RT2x = !0;
        this.xs7l("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.P9G.bcJ6D({
            key: this.iv1x.key,
            data: this.iv1x.data
        })
    }
    ;
    b8h.jG2x = function() {
        return this.P9G.jG2x(this.iv1x.key)
    }
    ;
    b8h.bFb3x = function() {
        return this.in1x
    }
    ;
    b8h.ZK5P = function() {
        return this.P9G.ZK5P(this.iv1x.key)
    }
    ;
    b8h.bWs7l = function() {
        return this.fd1x
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, eU0x = NEJ.R, k8c = c8g("nej.u"), a7h = c8g("nej.e"), M9D = c8g("nej.ut"), b8h, K9B;
    if (!!M9D.it1x)
        return;
    M9D.it1x = NEJ.C();
    b8h = M9D.it1x.O9F(M9D.RZ2x);
    K9B = M9D.it1x.cg9X;
    b8h.zC7v = function(bj9a, bo9f) {
        return K9B.zC7v.call(this, this.vA6u, bj9a, this.qB4F, bo9f)
    }
    ;
    b8h.bgt7m = function(s8k) {
        var bj9a = 0;
        if (s8k > 1)
            bj9a = this.vA6u + (s8k - 2) * this.qB4F;
        return bj9a
    }
    ;
    b8h.zL7E = function(d8f) {
        K9B.zL7E.apply(this, arguments);
        if (!d8f.stopped) {
            this.bFh3x(this.bgt7m(d8f.index))
        }
    }
    ;
    b8h.Rb2x = function() {
        this.QO2x();
        this.xs7l("onbeforelistload", "列表加载中...")
    }
    ;
    b8h.RL2x = function() {
        K9B.RL2x.apply(this, arguments);
        this.QO2x()
    }
    ;
    b8h.bfE7x = function(i8a, bj9a, fY1x) {
        var bt9k = this.zC7v(bj9a, i8a.length);
        if (this.bFf3x(bt9k.index, bt9k.total))
            return !0;
        this.bfl6f(bt9k.total > 1 ? "" : "none")
    }
    ;
    b8h.bfD7w = function() {
        this.xs7l("onemptylist", "没有列表数据！")
    }
    ;
    b8h.RA2x = function(bF9w, jA2x) {
        if (!jA2x && k8c.fe1x(bF9w)) {
            this.ia1x.innerHTML = bF9w;
            return
        }
        K9B.RA2x.apply(this, arguments)
    }
    ;
    b8h.Rf2x = function(ds0x) {
        this.ia1x.innerHTML = ds0x
    }
    ;
    b8h.Rm2x = function(gx1x) {
        this.fd1x = gx1x
    }
    ;
    b8h.RR2x = function(d8f) {
        this.Rp2x(d8f, "onafteradd");
        if (!d8f.stopped)
            this.fS1x()
    }
    ;
    b8h.RQ2x = function(d8f) {
        this.Rp2x(d8f, "onafterdelete");
        if (!d8f.stopped)
            this.fS1x()
    }
    ;
    b8h.bfW7P = function(bj9a, fY1x) {
        var s8k = 1;
        if (!!this.in1x) {
            s8k = this.in1x.ru4y()
        }
        var iQ2x = this.bgt7m(s8k)
            , gy1x = iQ2x + (s8k > 1 ? this.qB4F : this.vA6u);
        if (bj9a >= gy1x && !!this.in1x) {
            var bt9k = this.zC7v(0, this.jG2x());
            this.in1x.bdd6X(bt9k.total);
            this.bfl6f(bt9k.total > 1 ? "" : "none")
        } else {
            this.fS1x()
        }
    }
    ;
    b8h.bgc7V = function(bj9a, fY1x) {
        var s8k = 1;
        if (!!this.in1x) {
            s8k = this.in1x.ru4y()
        }
        var iQ2x = this.bgt7m(s8k)
            , bt9k = this.zC7v(iQ2x, this.jG2x());
        this.zL7E({
            last: s8k,
            index: bt9k.index
        })
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), H9y = c8g("nej.ut"), k8c = c8g("nej.u"), l8d = c8g("nm.x"), p8h = c8g("nm.d"), D9u = c8g("nm.w"), fb0x = 40, b8h, K9B;
    D9u.Rw2x = NEJ.C();
    b8h = D9u.Rw2x.O9F(H9y.cz9q);
    K9B = D9u.Rw2x.cg9X;
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.Rq2x = e8e.inputer;
        this.bgx7q = e8e.tipper;
        this.bU9L([[this.Rq2x, "input", this.fl1x.g8c(this)]])
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        this.Hs0x(null, null)
    }
    ;
    b8h.fl1x = function(d8f) {
        if (d8f && d8f.type == "keyup" && (d8f.keyCode != 8 || d8f.keyCode != 68))
            return;
        var T9K = this.Rq2x.value, cva3x;
        if (l8d.Fh9Y(T9K) > fb0x) {
            this.Rq2x.value = l8d.zQ8I(T9K, fb0x);
            this.Hs0x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g8c(this))
        } else if (T9K.indexOf("#") >= 0 || T9K.indexOf("@") >= 0) {
            this.Hs0x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Hs0x(null, null);
            this.z9q("onchange", {
                value: T9K
            })
        }
    }
    ;
    b8h.bWm7f = function() {
        this.fl1x()
    }
    ;
    b8h.Hs0x = function() {
        var C9t = 0;
        return function(dl0x, bEW3x) {
            if (!!C9t)
                window.clearTimeout(C9t);
            if (!dl0x) {
                a7h.y9p(this.bgx7q, "f-vhide");
                this.bES2x = !1;
                return
            }
            this.bgx7q.innerHTML = '<i class="u-icn u-icn-25"></i>' + dl0x;
            a7h.w9n(this.bgx7q, "f-vhide");
            this.bES2x = !0;
            if (k8c.gf1x(bEW3x))
                C9t = window.setTimeout(function() {
                    this.Hs0x(null, null);
                    bEW3x()
                }
                    .g8c(this), 1e3)
        }
    }();
    b8h.bEQ2x = function() {
        if (this.bES2x)
            return !1;
        if (l8d.ja2x(this.Rq2x.value)) {
            this.Hs0x("歌单名不能为空");
            return !1
        }
        return !0
    }
    ;
    b8h.fs1x = function() {
        return this.Rq2x.value
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, h8b = c8g("nej.v"), a7h = c8g("nej.e"), v9m = c8g("nej.j"), n8f = c8g("nm.l"), D9u = c8g("nm.w"), bI9z = c8g("nej.ui"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), b8h, K9B;
    n8f.Ry2x = NEJ.C();
    b8h = n8f.Ry2x.O9F(n8f.dV0x);
    K9B = n8f.Ry2x.cg9X;
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.I9z(this.o8g, "j-flag");
        this.RD2x = {
            inputer: i8a[0],
            tipper: i8a[1]
        };
        this.gM1x = {
            onerror: this.bEN2x.g8c(this),
            onitemadd: this.bEN2x.g8c(this)
        };
        this.oQ3x = i8a[2];
        h8b.q8i(i8a[2], "click", this.BM8E.g8c(this));
        h8b.q8i(i8a[3], "click", this.zX8P.g8c(this));
        h8b.q8i(this.o8g, "keypress", this.bEM2x.g8c(this))
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = "m-wgt-create"
    }
    ;
    b8h.bk9b = function(e8e) {
        e8e.clazz = " m-layer-w2";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "新建歌单";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bl9c(e8e);
        this.RD2x.inputer.value = e8e.name || "";
        this.tB5G = D9u.Rw2x.B9s(this.RD2x);
        this.tB5G.bWm7f();
        this.P9G = p8h.hh1x.B9s(this.gM1x);
        setTimeout(function() {
            this.RD2x.inputer.focus()
        }
            .g8c(this), 0)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        if (this.tB5G) {
            this.tB5G.S9J();
            delete this.tB5G
        }
        this.rs4w(!1);
        this.RD2x.inputer.value = ""
    }
    ;
    b8h.rs4w = function(Rj2x) {
        this.no3x = Rj2x;
        if (Rj2x) {
            this.oQ3x.innerHTML = "<i>新建中...</i>";
            a7h.y9p(this.oQ3x, "u-btn2-dis")
        } else {
            this.oQ3x.innerHTML = "<i>新 建</i>";
            a7h.w9n(this.oQ3x, "u-btn2-dis")
        }
    }
    ;
    b8h.BM8E = function() {
        if (this.no3x || !this.tB5G.bEQ2x())
            return;
        var cm9d = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.tB5G.fs1x()
            },
            offset: 1
        };
        this.P9G.iG2x(cm9d);
        this.rs4w(!0)
    }
    ;
    b8h.bEN2x = function(d8f) {
        var cb9S = (d8f.result || Y9P).code;
        if (!cb9S) {
            this.z9q("onsuccess", d8f.data)
        } else {
            this.z9q("onerror", d8f)
        }
        this.bq9h()
    }
    ;
    b8h.zX8P = function() {
        this.bq9h()
    }
    ;
    b8h.bEM2x = function(d8f) {
        if (d8f.keyCode == 13)
            this.BM8E()
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), v9m = c8g("nej.j"), l8d = c8g("nm.x"), p8h = c8g("nm.d"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.bhi7b = NEJ.C();
    b8h = n8f.bhi7b.O9F(n8f.dV0x);
    K9B = n8f.bhi7b.cg9X;
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.I9z(this.o8g, "j-flag");
        this.hJ1x = {
            limit: 301,
            parent: i8a[1],
            cache: {
                klass: p8h.hh1x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bhk7d.g8c(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l8d.Dt9k,
                escape: k8c.dM0x
            }
        };
        this.gM1x = {
            onsuccess: this.RM2x.g8c(this),
            onerror: this.eo0x.g8c(this)
        };
        h8b.q8i(i8a[0], "click", this.BM8E.g8c(this));
        h8b.q8i(i8a[1], "click", this.lp2x.g8c(this))
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = "m-wgt-subscribe"
    }
    ;
    b8h.bk9b = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        e8e.clazz = " m-layer-w2";
        e8e.title = "添加到歌单";
        e8e.draggable = !0;
        e8e.mask = !0;
        this.bl9c(e8e);
        this.RP2x = (e8e.tracks || []).reverse();
        this.hJ1x.item.size = this.RP2x.length;
        this.gM1x.name = e8e.name || "";
        this.bEL2x = p8h.uH6B.B9s({
            onaddsuccess: this.Ax8p.g8c(this)
        });
        this.rL4P = p8h.hh1x.B9s({
            onlistload: this.bVV7O.g8c(this)
        });
        this.rL4P.bJj3x();
        k8c.be9V(this.RP2x, function(r8j, s8k, i8a) {
            if (!k8c.kg2x(r8j)) {
                i8a[s8k] = this.bEL2x.eh0x(r8j) || r8j
            }
        }, this)
    }
    ;
    b8h.bVV7O = function() {
        if (this.dt0x)
            this.dt0x.S9J();
        this.dt0x = H9y.it1x.B9s(this.hJ1x)
    }
    ;
    b8h.BM8E = function() {
        this.bq9h();
        if (this.BG8y)
            this.BG8y.S9J();
        this.BG8y = n8f.Ry2x.B9s(this.gM1x);
        this.BG8y.N9E()
    }
    ;
    b8h.lp2x = function() {
        var bVU7N = function(f8d) {
            while (f8d && f8d != document) {
                if (f8d.tagName.toLowerCase() == "li") {
                    return f8d
                }
                f8d = f8d.parentNode
            }
        };
        return function(d8f) {
            h8b.ce9V(d8f);
            var E9v = h8b.U9L(d8f)
                , bhI7B = bVU7N(E9v);
            if (!!bhI7B && !a7h.by9p(bhI7B, "dis")) {
                this.RM2x({
                    id: a7h.u8m(bhI7B, "id")
                })
            }
        }
    }();
    b8h.RM2x = function(d8f) {
        var C9t = d8f.id;
        if (!C9t || !this.RP2x.length)
            return;
        this.bEL2x.iG2x({
            key: "track_playlist-" + C9t,
            data: {
                tracks: this.RP2x,
                pid: C9t
            }
        });
        this.bq9h()
    }
    ;
    b8h.Ax8p = function() {
        this.z9q("onsuccess");
        n8f.Z9Q.N9E({
            tip: "收藏成功"
        })
    }
    ;
    b8h.eo0x = function(d8f) {
        this.bq9h();
        this.z9q("onerror", d8f);
        var cA9r = "收藏失败";
        switch (d8f.code) {
            case 405:
                cA9r = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cA9r = "歌单数量超过限制";
                break;
            case 502:
                cA9r = "歌曲已经存在"
        }
        n8f.Z9Q.N9E({
            tip: cA9r,
            type: 2
        })
    }
    ;
    b8h.bhk7d = function() {
        this.bq9h();
        n8f.Z9Q.N9E({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
    ;
    l8d.lE2x = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n8f.bhi7b.N9E(e8e)
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , bm9d = NEJ.F
        , cK0x = c8g("nej.p")
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , v9m = c8g("nej.j")
        , k8c = c8g("nej.u")
        , l8d = c8g("nm.x");
    var bhJ7C, nV3x, V9M = decodeURIComponent(location.href), iU2x = /.+(http:\/\/.+\/proxy.html)/.test(V9M) ? RegExp.$1 : "";
    if (!!iU2x) {
        v9m.uk6e("mail_proxy_url", iU2x)
    } else {
        iU2x = v9m.sX5c("mail_proxy_url") || "about:blank"
    }
    bhJ7C = a7h.Ug3x({
        src: iU2x,
        onload: function() {
            nV3x = true
        }
    });
    var bEK2x = function() {
        v9m.gG1x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var bVS7L = function() {
        if (cK0x.cS0x.browser == "ie" && parseInt(cK0x.cS0x.version) < 9) {
            l8d.fc0x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l8d.RS2x = function(t8l, C9t, W9N) {
        if (!bVS7L())
            return;
        bEK2x();
        if (W9N == "stop") {
            if (!nV3x)
                throw "proxy not loaded";
            bEK2x();
            bhJ7C.contentWindow.location.replace(iU2x + "#" + k8c.df0x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bhJ7C.contentWindow.location.replace(iU2x + "#" + k8c.df0x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t8l,
                    id: C9t,
                    s: +(new Date),
                    action: W9N
                })
            }))
        }
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , bm9d = NEJ.F
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , v9m = c8g("nej.j")
        , k8c = c8g("nej.u")
        , l8d = c8g("nm.x")
        , n8f = c8g("nm.l")
        , p8h = c8g("nm.d");
    var kz2x = p8h.hK1x.B9s();
    var np3x = p8h.uH6B.B9s({
        onlistload: bVR7K,
        onitemload: bVN7G,
        onerror: eo0x
    });
    var BF8x = p8h.pw3x.B9s({
        onlistload: bVI7B,
        onitemload: bVH7A,
        onerror: eo0x
    });
    var bEG2x = {};
    function ur6l(d8f) {
        var f8d = h8b.U9L(d8f, "d:resAction")
            , W9N = a7h.u8m(f8d, "resAction");
        if (f8d && (W9N == "play" || W9N == "addto")) {
            bEE2x({
                action: W9N,
                type: parseInt(a7h.u8m(f8d, "resType")),
                id: a7h.u8m(f8d, "resId"),
                from: a7h.u8m(f8d, "resFrom"),
                data: a7h.u8m(f8d, "resData"),
                order: a7h.u8m(f8d, "resOrder")
            });
            bVB7u(f8d)
        }
    }
    function bEE2x(bN9E) {
        var W9N = bN9E.action
            , t8l = bN9E.type
            , C9t = bN9E.id
            , dK0x = bN9E.from
            , j8b = bN9E.data
            , ss4w = bN9E.order
            , e8e = {
            limit: 1e3,
            offset: 0,
            data: {
                id: C9t
            },
            ext: {
                id: C9t,
                action: W9N,
                type: t8l,
                from: dK0x,
                data: j8b
            }
        };
        if (W9N != "play" && W9N != "addto" || !t8l)
            return;
        if (window.GRef && GRef == "mail") {
            l8d.RS2x(t8l, C9t, W9N);
            return
        }
        switch (t8l) {
            case 13:
                e8e.key = "track_playlist-" + C9t;
                np3x.nQ3x(e8e);
                if (W9N == "play") {
                    v9m.bp9g("/api/playlist/update/playcount", {
                        query: {
                            id: C9t
                        }
                    })
                }
                break;
            case 17:
                e8e.key = "program";
                e8e.id = C9t;
                BF8x.ZD5I(e8e);
                if (W9N == "play") {
                    v9m.bp9g("/api/dj/program/listen", {
                        query: {
                            id: C9t
                        }
                    })
                }
                break;
            case 18:
                e8e.key = "track";
                e8e.id = C9t;
                np3x.ZD5I(e8e);
                break;
            case 19:
                e8e.key = "track_album-" + C9t;
                np3x.nQ3x(e8e);
                break;
            case 24:
                e8e.key = "track_day";
                np3x.nQ3x(e8e);
                break;
            case 2:
                e8e.key = "track_artist_top-" + C9t;
                np3x.nQ3x(e8e);
                break;
            case 70:
                e8e.key = "program_djradio-" + C9t + "-" + ss4w;
                e8e.data.radioId = C9t;
                e8e.data.asc = ss4w == 2;
                BF8x.nQ3x(e8e);
                break
        }
    }
    function bED2x(i8a) {
        var m8e = [];
        k8c.be9V(i8a, function(r8j) {
            if (r8j.mainSong) {
                r8j.mainSong.program = r8j;
                m8e.push(r8j.mainSong);
                r8j.localupdatetime = +(new Date);
                np3x.cjk0x(r8j.mainSong);
                r8j.mainTrackId = r8j.mainSong.id;
                delete r8j.mainSong
            } else {
                var bEC2x = np3x.eh0x(r8j.mainTrackId);
                bEC2x && m8e.push(bEC2x)
            }
        });
        return m8e
    }
    function RW2x(i8a, e8e) {
        var qI4M = e8e.action == "play" && e8e.type != 17 && e8e.type != 18
            , eW0x = e8e.action == "play";
        if (!i8a.length)
            return;
        if (e8e.type == 19) {
            i8a = l8d.HW0x(i8a, true, {
                play: true
            }, {
                source: "album",
                sourceid: e8e.id
            })
        } else {
            i8a = l8d.HW0x(i8a, true, {
                play: true
            })
        }
        k8c.be9V(i8a, function(r8j) {
            r8j.source = l8d.bbn5s({
                fid: e8e.from,
                fdata: e8e.data,
                type: e8e.type,
                rid: e8e.id
            }, r8j.id)
        });
        top.player.addTo(i8a, qI4M, eW0x);
        kz2x.Ko0x({
            rid: e8e.id,
            type: e8e.type,
            hash: l8d.Gx9o(),
            play: eW0x,
            source: e8e.from,
            sourceid: e8e.data
        })
    }
    function bVR7K(d8f) {
        var i8a = np3x.gN1x(d8f.key);
        RW2x(i8a, d8f.ext)
    }
    function bVN7G(d8f) {
        var i8a = [np3x.eh0x(d8f.id)]
            , bf9W = i8a[0]
            , oZ3x = l8d.oB3x(bf9W)
            , rZ4d = bf9W.privilege || {};
        if (oZ3x == 10) {
            l8d.sv4z(rZ4d.fee || bf9W.fee, bf9W.id, "song", null, rZ4d)
        } else if (oZ3x == 100) {
            l8d.hR1x(null, null, null, true, bf9W)
        } else if (oZ3x == 11) {
            l8d.bJN4R(bf9W.id, 18)
        } else {
            RW2x(i8a, d8f.ext)
        }
    }
    function bVI7B(d8f) {
        var i8a = bED2x(BF8x.gN1x(d8f.key));
        RW2x(i8a, d8f.ext)
    }
    function bVH7A(d8f) {
        var i8a = bED2x([BF8x.eh0x(d8f.id)]);
        RW2x(i8a, d8f.ext)
    }
    function eo0x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bVB7u(f8d) {
        var t8l = a7h.u8m(f8d, "resType")
            , C9t = a7h.u8m(f8d, "resId")
            , J9A = t8l + "-" + C9t;
        if (bEG2x[J9A])
            return;
        var bEB2x = a7h.x9o("play-count")
            , bio7h = a7h.I9z(f8d.parentNode, "nb")
            , QI2x = null;
        if (bEB2x) {
            QI2x = bEB2x
        } else {
            QI2x = !!bio7h && !!bio7h[0] ? bio7h[0] : null
        }
        if (QI2x) {
            var ct9k = QI2x.innerHTML;
            if (/^\d+$/.test(ct9k)) {
                QI2x.innerText = +ct9k + 1
            }
            bEG2x[J9A] = true
        }
    }
    l8d.bVw7p = function(f8d) {
        h8b.q8i(f8d || document.body, "click", ur6l.g8c(this))
    }
    ;
    l8d.bVv7o = function(W9N, t8l, C9t) {
        bEE2x({
            action: W9N,
            type: t8l,
            id: C9t
        })
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), H9y = c8g("nej.ut"), p8h = c8g("nm.d"), b8h, K9B;
    p8h.eQ0x({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m8e, e8e) {
                this.bVq7j(m8e, e8e)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m8e, e8e) {
                this.z9q("onshareall", e8e.result)
            },
            onerror: function(m8e, e8e) {
                this.z9q("onshareall", e8e.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(m8e, e8e) {
                e8e.options.picUrl = m8e.picUrl;
                this.bEy2x(e8e.options, e8e.result)
            },
            onerror: function(m8e, e8e) {
                this.z9q("onshareall", e8e.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q9H, e8e) {
                this.oE3x("vid_info-" + e8e.data.nosKey, Q9H);
                return Q9H
            }
        }
    });
    p8h.biv7o = NEJ.C();
    b8h = p8h.biv7o.O9F(p8h.gZ1x);
    b8h.bVk7d = function() {
        var sB4F = function(Q9H, e8e) {
            e8e.times++;
            if (e8e.times > 10) {
                this.z9q("onvinfoerror", e8e.key, Q9H)
            } else {
                setTimeout(eH0x.g8c(this, e8e), e8e.times * 1e3)
            }
        };
        var wa6U = function(Q9H, e8e) {
            this.z9q("onvinfo", e8e.key, Q9H)
        };
        var eH0x = function(e8e) {
            var V9M = e8e.url;
            v9m.bp9g(V9M + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: wa6U.dW0x(this, e8e),
                onerror: sB4F.dW0x(this, e8e)
            })
        };
        return function(e8e) {
            e8e.times = 0;
            eH0x.call(this, e8e)
        }
    }();
    b8h.cvg3x = function() {
        var Qx2x;
        var sB4F = function(Q9H, e8e) {
            if (Q9H.code > 0) {
                clearInterval(this.Bz8r);
                this.z9q("onviderror", e8e.data.nosKey)
            }
        };
        var wa6U = function(J9A, Q9H) {
            if (Q9H.vid && Q9H.covers) {
                clearInterval(this.Bz8r);
                this.z9q("onvid", J9A, Q9H)
            }
        };
        var eH0x = function(e8e) {
            if (+(new Date) - Qx2x > 60 * 60 * 1e3) {
                clearInterval(this.Bz8r);
                this.z9q("onviderror", e8e.data.nosKey);
                return
            }
            e8e.onload = wa6U.g8c(this, e8e.data.nosKey);
            e8e.onerror = sB4F.g8c(this);
            this.ck9b("vid-get", e8e)
        };
        return function(e8e) {
            if (!e8e || !e8e.data)
                return;
            Qx2x = +(new Date);
            this.Bz8r = clearInterval(this.Bz8r);
            this.Bz8r = setInterval(eH0x.g8c(this, e8e), 1e4);
            eH0x.apply(this, arguments)
        }
    }();
    b8h.bVh7a = function() {
        this.Bz8r = clearInterval(this.Bz8r)
    }
    ;
    b8h.bVq7j = function(m8e, na3x) {
        if (m8e.event && na3x.snsTypes) {
            if (na3x.pics) {
                var bEv2x = [];
                for (var i = 0, len = na3x.pics.length; i < len; i++) {
                    bEv2x[i] = na3x.pics[i].originId
                }
                this.ck9b("share_img_compound", {
                    data: {
                        picIds: bEv2x.join(",")
                    },
                    options: na3x,
                    result: m8e
                })
            } else {
                na3x.picUrl = na3x.picUrl;
                this.bEy2x(na3x, m8e)
            }
        } else {
            this.z9q("onshareall", m8e)
        }
        var xE7x = p8h.hK1x.B9s();
        xE7x.gg1x(na3x.isPub ? "pubevent" : "shareevent", {
            id: m8e.id
        })
    }
    ;
    b8h.bEy2x = function(na3x, m8e) {
        var cm9d = {};
        cm9d.eventid = m8e.event.id;
        cm9d.eventtype = m8e.event.type;
        na3x.picUrl && (cm9d.picUrl = na3x.picUrl);
        cm9d.snsTypes = na3x.snsTypes;
        cm9d.msg = na3x.data.msg || "";
        cm9d.type = na3x.data.type;
        na3x.data.id && (cm9d.id = na3x.data.id);
        this.ck9b("share-sns", {
            data: cm9d,
            result: m8e
        })
    }
    ;
    b8h.bVf7Y = function(e8e) {
        var j8b = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k8c.mP3x(5)
        };
        j8b = NEJ.EX(j8b, e8e);
        if (!(j8b.id > 0)) {
            delete j8b.id;
            j8b.type = "noresource"
        }
        if (!j8b.threadId) {
            delete j8b.threadId
        }
        if (!j8b.actId) {
            delete j8b.actId
        }
        if (!j8b.pics) {
            delete j8b.pics
        } else {
            j8b.pics = JSON.stringify(j8b.pics)
        }
        this.ck9b("share-all", {
            data: j8b,
            snsTypes: e8e.snsTypes,
            picUrl: e8e.picUrl,
            pics: e8e.pics,
            isPub: e8e.isPub
        })
    }
    ;
    b8h.bVc7V = function(e8e) {
        this.ck9b("share-private", e8e)
    }
    ;
    b8h.bVa7T = function(e8e) {
        this.ck9b("share-all", e8e)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), b8h, K9B;
    var bUX7Q = {
        40: !0
    };
    p8h.eQ0x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e8e) {
                e8e.data.getcounts = true;
                e8e.data.pagesize = e8e.data.limit;
                if (e8e.data.offset == 0) {
                    e8e.data.lasttime = -1
                }
                delete e8e.data.offset
            },
            format: function(Q9H, e8e) {
                Q9H.event = l8d.Tx3x(Q9H.event, function(r8j, s8k) {
                    return !bUX7Q[r8j.type]
                });
                this.bUT7M(Q9H.event);
                e8e.data.lasttime = Q9H.lasttime;
                if (Q9H.event.length) {
                    Q9H.event.length = e8e.limit
                }
                return {
                    list: Q9H.event,
                    total: Q9H.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q9H, e8e) {
                return {
                    list: Q9H.events,
                    total: Q9H.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e8e) {
                e8e.data.pagesize = 20
            },
            format: function(Q9H, e8e) {
                return Q9H.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e8e) {
                e8e.data.time = -1;
                e8e.data.getcounts = true
            },
            format: function(Q9H, e8e) {
                Q9H.events.length = e8e.limit;
                return {
                    list: Q9H.events,
                    total: Q9H.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m8e, e8e) {
                m8e.conf = e8e.conf;
                return m8e
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e8e, bc9T) {
                if (e8e.like) {
                    if (e8e.comment) {
                        bc9T.url = "/api/v1/comment/like"
                    } else {
                        bc9T.url = "/api/resource/like"
                    }
                    bc9T.onload = "oneventlike";
                    bc9T.onerror = "oneventlikeerr"
                } else {
                    if (e8e.comment) {
                        bc9T.url = "/api/v1/comment/unlike"
                    } else {
                        bc9T.url = "/api/resource/unlike"
                    }
                    bc9T.onload = "oneventunlike";
                    bc9T.onerror = "oneventunlikeerr"
                }
            },
            format: function(m8e, e8e) {
                m8e.eid = e8e.eid;
                m8e.origin = e8e.origin;
                m8e.ext = e8e.ext;
                return m8e
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m8e, e8e) {
                m8e.id = e8e.data.id;
                return m8e
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e8e, bc9T) {
                if (e8e.data.type == "nointer") {
                    bc9T.url = "/api/event/rcmd/reject"
                } else if (e8e.data.transcoding) {
                    bc9T.url = "/api/event/video/transcoding/delete"
                } else {
                    bc9T.url = "/api/event/delete"
                }
            },
            format: function(m8e, e8e) {
                m8e.id = e8e.data.id;
                return m8e
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m8e, e8e) {
                m8e.id = e8e.data.id;
                return m8e
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e8e) {
                e8e.data.lasttime = e8e.data.lasttime || -1;
                e8e.data.pagesize = e8e.data.limit;
                e8e.data.getcounts = true;
                delete e8e.data.offset
            },
            format: function(Q9H, e8e) {
                e8e.data.lasttime = Q9H.lasttime;
                var i8a = Q9H.events;
                if (Q9H.more)
                    i8a = this.bUS7L(i8a, e8e.data.pagesize);
                return {
                    list: i8a,
                    total: Q9H.size
                }
            },
            onerror: "onlisterror"
        }
    });
    p8h.yn7g = NEJ.C();
    b8h = p8h.yn7g.O9F(p8h.gZ1x);
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.biZ7S = function(t8l, cG0x) {
        return t8l + "-" + cG0x
    }
    ;
    b8h.cvk3x = function(e8e) {
        this.ck9b("ievent-get", e8e)
    }
    ;
    b8h.cvl3x = function(e8e) {
        this.ck9b("ievent-new-get", e8e)
    }
    ;
    b8h.cvm3x = function(e8e) {
        this.ck9b("ievent-user-get", e8e)
    }
    ;
    b8h.cvn3x = function(t8l, cG0x) {
        return this.qk4o(this.biZ7S(t8l, cG0x))
    }
    ;
    b8h.cvo3x = function(Jc0x, e8e) {
        if (!Jc0x || !Jc0x.length)
            return;
        e8e = e8e || {};
        var bv9m = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, DL9C = [], bEj2x = [], j8b; i < Jc0x.length; ++i) {
            j8b = Jc0x[i];
            j8b = this.qk4o(this.biZ7S(j8b.type, j8b.id));
            if (!j8b) {
                DL9C.push(Jc0x[i].id);
                bEj2x.push(bv9m[Jc0x[i].type] || 0)
            }
        }
        if (!DL9C.length) {
            this.z9q("oneventresload", e8e.conf);
            return
        }
        e8e.data = {
            ids: JSON.stringify(DL9C),
            types: JSON.stringify(bEj2x)
        };
        e8e.onload = this.bUE7x.g8c(this);
        this.ck9b("ievent-res-get", e8e)
    }
    ;
    b8h.bUE7x = function(m8e) {
        if (m8e.code != 200) {
            this.z9q("oneventreserror", m8e.code);
            return
        }
        var bv9m = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i8a = m8e.results; i < i8a.length; ++i) {
            this.oE3x(this.biZ7S(bv9m[i8a[i].type], i8a[i].id), i8a[i])
        }
        this.z9q("oneventresload", m8e.conf)
    }
    ;
    b8h.bEi2x = function(j8b) {
        var J9A = "event-list";
        this.bbR6L(J9A, j8b);
        this.z9q("onitemadd", {
            key: J9A,
            action: "add",
            data: j8b,
            flag: -1
        })
    }
    ;
    b8h.uw6q = function(e8e) {
        this.ck9b("ievent-like", e8e)
    }
    ;
    b8h.lR2x = function(e8e) {
        this.ck9b("ievent-delete", e8e)
    }
    ;
    b8h.bUS7L = function(i8a, fY1x) {
        for (var i = i8a.length; i < fY1x; i++)
            i8a.push(null);
        return i8a
    }
    ;
    b8h.bUT7M = function(i8a) {
        var m8e = [];
        if (!i8a || !i8a.length)
            return;
        k8c.be9V(i8a, function(d8f) {
            d8f.biData = this.bEh2x(d8f)
        }, this)
    }
    ;
    b8h.bEh2x = function() {
        var bnx8p = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
            , bUy7r = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d8f) {
            var Q9H = {
                id: d8f.id,
                sourceid: d8f.user.userId,
                alg: d8f.rcmdInfo ? d8f.rcmdInfo.alg : null,
                contentType: bnx8p[d8f.type] || (k8c.cV0x(bUy7r, d8f.type) != -1 ? "user_event" : "other")
            };
            return Q9H
        }
    }();
    b8h.Bs8k = function(bUx7q, d8f) {
        var Q9H = this.bEh2x(d8f);
        Q9H.actionType = bUx7q;
        if (window.log)
            log("eventclick", Q9H)
    }
    ;
    b8h.cvr3x = function(e8e) {
        this.ck9b("event_latest-list", e8e)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), bI9z = c8g("nej.ui"), l8d = c8g("nm.x"), L9C = c8g("nm.w"), b8h, K9B;
    L9C.Sy3x = NEJ.C();
    b8h = L9C.Sy3x.O9F(bI9z.et0x);
    K9B = L9C.Sy3x.cg9X;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        var gK1x = e8e.box || Y9P;
        a7h.fz1x(this.o8g, {
            position: "absolute",
            width: gK1x.width + "px",
            height: gK1x.height + "px",
            top: gK1x.top + "px",
            left: gK1x.left + "px"
        });
        window.uploader = this
    }
    ;
    b8h.bD9u = function() {
        this.bH9y()
    }
    ;
    b8h.lp2x = function(d8f) {
        this.z9q("onselect", d8f);
        console.log("select", d8f)
    }
    ;
    b8h.rY4c = function(d8f) {
        this.z9q("onprogress", d8f);
        console.log("progress", d8f)
    }
    ;
    b8h.sn4r = function(d8f) {
        if (d8f.code == 200) {
            this.z9q("oncomplete", d8f)
        } else {
            this.eo0x(d8f)
        }
        console.log("complete", d8f)
    }
    ;
    b8h.eo0x = function(d8f) {
        this.z9q("onerror", d8f);
        console.log("error", d8f)
    }
    ;
    b8h.ga1x = bm9d;
    b8h.bUu7n = bm9d
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), bI9z = c8g("nej.ui"), l8d = c8g("nm.x"), L9C = c8g("nm.w"), ge1x = c8g("cb"), b8h, K9B;
    L9C.bjE8w = NEJ.C();
    b8h = L9C.bjE8w.O9F(L9C.Sy3x);
    K9B = L9C.bjE8w.cg9X;
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        var J9A = k8c.mP3x(8)
            , jf2x = "onselect" + J9A
            , jo2x = "onprogress" + J9A
            , bEd2x = "oncomplete" + J9A
            , bQ9H = "onerror" + J9A;
        ge1x[jf2x] = this.lp2x.g8c(this);
        ge1x[jo2x] = this.rY4c.g8c(this);
        ge1x[bEd2x] = this.sn4r.g8c(this);
        ge1x[bQ9H] = this.eo0x.g8c(this);
        var bUk7d = "/style/swf/MusicUpload.swf?v=20150202"
            , bv9m = {
            music: "音频(*.mp3,*.m4a,*.x-m4a)",
            image: "*.jpg;*.jpeg;*.png;*.gif;"
        }
            , ls2x = {
            url: e8e.api,
            token: e8e.token,
            filter: bv9m[e8e.accept] || e8e.accept || e8e.flashAccept || "",
            multiple: e8e.multiple,
            error: "cb." + bQ9H,
            select: "cb." + jf2x,
            progress: "cb." + jo2x,
            complete: "cb." + bEd2x
        };
        this.oK3x = a7h.qd4h({
            src: bUk7d,
            hidden: false,
            parent: this.o8g,
            onready: this.Qk2x.g8c(this),
            width: e8e.box.width,
            height: e8e.box.height,
            params: {
                flashvars: k8c.uS6M(ls2x, "&", false),
                allowscriptaccess: "always",
                wmode: "transparent"
            }
        })
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        this.o8g.innerHTML = ""
    }
    ;
    b8h.Qk2x = function(hb1x) {
        this.oK3x = hb1x
    }
    ;
    b8h.ga1x = function(il1x) {
        this.oK3x.upload(il1x)
    }
    ;
    b8h.bUu7n = function() {
        this.oK3x.cancle()
    }
    ;
    b8h.qa4e = function(Bm8e) {
        this.oK3x.disable(Bm8e)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, dO0x = c8g("nej.g"), a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), bI9z = c8g("nej.ui"), l8d = c8g("nm.x"), L9C = c8g("nm.w"), b8h, K9B;
    var hP1x = a7h.rO4S(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var gc1x = a7h.hM1x('<div class="' + hP1x + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L9C.bjT8L = NEJ.C();
    b8h = L9C.bjT8L.O9F(L9C.Sy3x);
    K9B = L9C.bjT8L.cg9X;
    b8h.bZ9Q = function() {
        this.lb2x = hP1x;
        this.ca9R = gc1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var bn9e = a7h.cQ0x(this.o8g);
        this.bw9n = bn9e[0];
        h8b.q8i(this.bw9n.uploadfile, "change", this.qg4k.g8c(this))
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.bUb7U = e8e.api || "";
        this.SC3x = e8e.multiple;
        this.bw9n.multiple = this.SC3x ? "coverImgUrl" : "";
        this.bw9n.reset();
        this.SF3x = [];
        this.SH3x = {};
        var bv9m = {
            music: "audio/mp3,audio/x-m4a,audio/m4a",
            image: "image/*"
        };
        if (e8e.accept || e8e.htmlAccept) {
            this.bw9n.uploadfile.accept = bv9m[e8e.accept] || e8e.accept || e8e.htmlAccept
        }
        if (e8e.tipTitle) {
            this.bw9n.uploadfile.title = e8e.tipTitle
        }
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        this.bkf8X();
        this.bw9n.reset();
        delete this.SF3x;
        delete this.SH3x;
        this.bw9n.uploadfile.accept = "*"
    }
    ;
    b8h.qg4k = function(d8f) {
        var bDR2x = this.bw9n.uploadfile.files
            , bDO2x = [];
        if (!this.SC3x) {
            this.SF3x = [];
            this.SH3x = {}
        }
        for (var i = 0, ii = bDR2x.length; i < ii; i++) {
            var SI3x = this.bTR7K(bDR2x[i]);
            this.SF3x.push(SI3x);
            this.SH3x[SI3x.uuid] = SI3x;
            bDO2x.push(SI3x);
            if (!this.SC3x)
                break
        }
        this.lp2x(bDO2x);
        this.bw9n.reset()
    }
    ;
    b8h.bkf8X = function() {
        if (this.bDK2x) {
            this.bDJ2x = true;
            v9m.jj2x(this.Fa9R);
            this.bDJ2x = false;
            delete this.bDK2x;
            delete this.Fa9R
        }
    }
    ;
    b8h.bTR7K = function(dz0x) {
        return {
            uuid: "file-" + +(new Date) + k8c.mP3x(5),
            name: dz0x.name,
            size: dz0x.size,
            refernce: dz0x
        }
    }
    ;
    b8h.ga1x = function(il1x) {
        this.bkf8X();
        var dz0x = this.SC3x ? this.SH3x[il1x] : this.SF3x[0]
            , j8b = new FormData
            , ny3x = {};
        if (dz0x) {
            ny3x[dO0x.xj7c] = dO0x.DB9s;
            j8b.append("fileupload", dz0x.refernce);
            this.bDK2x = dz0x;
            this.Fa9R = v9m.bp9g(this.bUb7U, {
                type: "json",
                method: "post",
                headers: ny3x,
                data: j8b,
                timeout: 0,
                onload: this.yL7E.g8c(this, il1x),
                onerror: this.yL7E.g8c(this, il1x),
                onuploading: this.bTI7B.g8c(this, il1x)
            })
        }
    }
    ;
    b8h.yL7E = function(il1x, d8f) {
        d8f.uuid = il1x;
        if (d8f.code == 200) {
            this.sn4r(d8f)
        } else {
            if (!this.bDJ2x) {
                this.eo0x(d8f)
            }
        }
    }
    ;
    b8h.bTI7B = function(il1x, d8f) {
        d8f.uuid = il1x;
        this.rY4c(d8f)
    }
    ;
    b8h.bTG7z = function() {
        this.bkf8X()
    }
    ;
    b8h.qa4e = function(Bm8e) {
        if (Bm8e) {
            this.bq9h()
        } else {
            this.N9E()
        }
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , L9C = c8g("nm.w")
        , bTC7v = typeof FormData != "undefined";
    L9C.Bj8b = NEJ.C();
    L9C.Bj8b.O9F(bTC7v ? L9C.bjT8L : L9C.bjE8w)
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), dO0x = c8g("nej.g"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), fh1x = c8g("nej.n"), H9y = c8g("nej.ut"), bd9U = c8g("nej.ui"), D9u = c8g("nm.w"), n8f = c8g("nm.l"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), L9C = c8g("nm.x.f"), b8h, K9B, bky8q = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, bkz8r = 5 * 1024 * 1024, cvs3x = 80, bTz7s = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D9u.bDG2x = NEJ.C();
    b8h = D9u.bDG2x.O9F(H9y.wh6b);
    b8h.bqM9D = function() {
        return {
            x: this.zq7j.clientWidth - this.o8g.offsetWidth,
            y: this.zq7j.clientHeight - this.o8g.offsetHeight
        }
    }
    ;
    D9u.bkE8w = NEJ.C();
    b8h = D9u.bkE8w.O9F(bd9U.et0x);
    b8h.bZ9Q = function() {
        this.ca9R = "m-xwgt-share-upload"
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.I9z(this.o8g, "j-flag");
        this.SO3x = i8a.shift();
        this.Bi8a = i8a.shift();
        this.PW2x = i8a.shift();
        this.bTx7q = {
            onselect: this.bDD2x.dW0x(this, 0),
            onerror: this.eo0x.g8c(this),
            oncomplete: this.sn4r.g8c(this),
            multiple: true,
            parent: this.Bi8a,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 60,
                height: 60,
                top: 0,
                left: 0
            },
            tipTitle: "上传图片"
        };
        this.bDC2x = {
            onselect: this.bDD2x.dW0x(this, 1),
            onerror: this.eo0x.g8c(this),
            oncomplete: this.sn4r.g8c(this),
            multiple: true,
            parent: this.Bi8a,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 20,
                height: 20,
                top: 0,
                left: 0
            },
            tipTitle: "上传图片"
        };
        this.bTo7h = D9u.Bj8b.B9s(this.bTx7q)
    }
    ;
    b8h.bD9u = function() {
        h8b.iB2x(this.rI4M, "click");
        if (!!this.fm1x) {
            for (var i = this.fm1x.length - 1; i >= 0; i--) {
                a7h.cF0x(this.fm1x[i].element, false);
                if (this.fm1x[i].dragger)
                    this.fm1x[i].dragger.S9J()
            }
        }
        this.fm1x = [];
        this.SR3x = {};
        if (this.yV7O) {
            clearTimeout(this.yV7O)
        }
        this.yV7O = 0;
        this.FA9r && this.FA9r.S9J();
        delete this.FA9r;
        this.bH9y()
    }
    ;
    b8h.bDD2x = function(i8a, s8k) {
        if (!i8a)
            return;
        for (var i = 0, len = i8a.length; i < len; i++) {
            if (!bTz7s.test(i8a[i].name)) {
                this.bld8V({
                    path: i8a[i].name,
                    index: s8k,
                    uuid: i8a[i].uuid,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (i8a[i].size > bkz8r) {
                this.ble8W(-3);
                this.bld8V({
                    path: i8a[i].name,
                    index: s8k,
                    uuid: i8a[i].uuid,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bld8V({
                    path: i8a[i].name,
                    index: s8k,
                    uuid: i8a[i].uuid,
                    status: 0
                })
            }
        }
    }
    ;
    b8h.eo0x = function(d8f) {
        var dz0x = this.SR3x[d8f.uuid];
        dz0x.status = -4;
        dz0x.fail = "上传<br>失败";
        this.bDA2x(dz0x);
        this.yX7Q()
    }
    ;
    b8h.sn4r = function(d8f) {
        var dz0x = this.SR3x[d8f.uuid];
        dz0x.status = 2;
        var bt9k = NEJ.X({}, d8f.picInfo);
        bt9k.originId = bt9k.originIdStr;
        bt9k.squareId = bt9k.squareIdStr;
        bt9k.rectangleId = bt9k.rectangleIdStr;
        bt9k.pcSquareId = bt9k.pcSquareIdStr;
        bt9k.pcRectangleId = bt9k.pcRectangleIdStr;
        bt9k.originJpgId = bt9k.originJpgIdStr || bt9k.originJpgId;
        dz0x.picInfo = bt9k;
        dz0x.picUrl = d8f.picInfo.pcSquareUrl;
        this.bDA2x(dz0x);
        this.yX7Q()
    }
    ;
    b8h.bld8V = function(dz0x) {
        if (this.fm1x.length >= 9) {
            this.ble8W(-10, 3e3, this.bDz2x.g8c(this));
            return
        }
        this.bTd7W(dz0x);
        this.fm1x.push(dz0x);
        this.SR3x[dz0x.uuid] = dz0x;
        if (!!this.fm1x.length) {
            this.o8g.style.display = ""
        }
        if (this.fm1x.length >= 9) {
            this.Bi8a.style.display = "none"
        } else {
            this.Bi8a.style.display = ""
        }
        this.yX7Q()
    }
    ;
    b8h.yX7Q = function() {
        var blj8b = -1
            , bDw2x = 0;
        for (var i = 0, l = this.fm1x.length; i < l; i++) {
            if (this.fm1x[i].status == 1) {
                return
            }
            if (this.fm1x[i].status == 0 && blj8b < 0) {
                blj8b = i
            }
            if (this.fm1x[i].status == 2 || this.fm1x[i].status < 0) {
                bDw2x++
            }
        }
        var r8j = this.fm1x[blj8b];
        if (r8j) {
            (r8j.index == 0 ? this.bTo7h : this.FA9r).ga1x(r8j.uuid);
            r8j.status = 1;
            this.z9q("onstartupload", {})
        } else if (bDw2x == this.fm1x.length) {
            this.z9q("onfinishupload", {})
        }
    }
    ;
    b8h.ble8W = function(s8k, jS2x, ge1x) {
        if (this.PR2x < s8k) {
            return
        }
        if (this.yV7O) {
            clearTimeout(this.yV7O);
            this.yV7O = 0
        }
        if (jS2x) {
            this.PW2x.innerText = bky8q[s8k * 1];
            this.PR2x = s8k;
            this.yV7O = setTimeout(this.SU3x.g8c(this, s8k, ge1x), jS2x)
        } else {
            this.PW2x.innerText = bky8q[s8k];
            this.PR2x = s8k
        }
        this.PW2x.style.display = ""
    }
    ;
    b8h.SU3x = function(s8k, ge1x) {
        if (s8k && this.PR2x !== s8k) {
            return
        }
        this.PR2x = 0;
        this.PW2x.innerText = bky8q[0];
        this.PW2x.style.display = "none";
        ge1x && ge1x()
    }
    ;
    b8h.bTd7W = function(dz0x) {
        var j8b = {};
        if (dz0x.fail) {
            j8b.fail = dz0x.fail
        }
        var ds0x = a7h.bP9G("m-xwgt-share-upload-preview", j8b);
        dz0x.element = a7h.mT3x(ds0x);
        h8b.q8i(a7h.I9z(dz0x.element, "del")[0], "mousedown", this.bTa7T.g8c(this, dz0x), false);
        this.SO3x.insertBefore(dz0x.element, this.SO3x.lastElementChild);
        dz0x.dragger = D9u.bDG2x.B9s({
            view: this.SO3x.parentNode,
            body: dz0x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.OI2x.g8c(this, dz0x),
            onchange: this.bSX7Q.g8c(this, dz0x),
            ondragend: this.bqh9Y.g8c(this, dz0x)
        })
    }
    ;
    b8h.bDA2x = function(dz0x) {
        if (!dz0x || !dz0x.element) {
            return false
        }
        var j8b = {};
        if (dz0x.fail) {
            j8b.fail = dz0x.fail
        } else {
            j8b.url = dz0x.picUrl
        }
        a7h.y9p(dz0x.element, "z-fail");
        dz0x.element.firstChild.outerHTML = a7h.bP9G("m-xwgt-share-upload-preview-img", j8b)
    }
    ;
    b8h.OI2x = function(r8j, jA2x) {
        a7h.y9p(r8j.element, "z-sel")
    }
    ;
    b8h.bSX7Q = function(r8j, jA2x) {
        var cvt3x, gz1x = this.fm1x.length - 1, oy3x;
        for (var i = gz1x; i >= 0; i--) {
            a7h.w9n(this.fm1x[i].element, "z-jump");
            if (this.fm1x[i] == r8j) {
                oy3x = i
            } else {
                a7h.fz1x(this.fm1x[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var PL2x = {
            x: 46 + 92 * (oy3x % 5) + jA2x.left,
            y: 46 + 92 * (oy3x / 5 >> 0) + jA2x.top
        };
        var blz8r = PL2x.x / 92 >> 0
            , blC8u = PL2x.y / 92 >> 0
            , wG7z = Math.max(0, Math.min(gz1x, blC8u * 5 + blz8r));
        if (wG7z == oy3x) {
            return
        }
        var bSJ7C = wG7z < oy3x;
        for (var i = Math.min(wG7z, oy3x); i <= Math.max(wG7z, oy3x); i++) {
            if (i !== oy3x) {
                var bDn2x = i % 5;
                if (bSJ7C) {
                    if (bDn2x == 4) {
                        a7h.fz1x(this.fm1x[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a7h.fz1x(this.fm1x[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDn2x == 0) {
                        a7h.fz1x(this.fm1x[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a7h.fz1x(this.fm1x[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
    ;
    b8h.bqh9Y = function(r8j, jA2x) {
        var cvv3x, gz1x = this.fm1x.length - 1, oy3x;
        for (var i = gz1x; i >= 0; i--) {
            a7h.fz1x(this.fm1x[i].element, {
                left: "",
                top: ""
            });
            if (this.fm1x[i] == r8j) {
                oy3x = i
            }
        }
        a7h.w9n(r8j.element, "z-sel");
        var PL2x = {
            x: 46 + 92 * (oy3x % 5) + jA2x.left,
            y: 46 + 92 * (oy3x / 5 >> 0) + jA2x.top
        };
        var blz8r = PL2x.x / 92 >> 0
            , blC8u = PL2x.y / 92 >> 0
            , wG7z = Math.max(0, Math.min(gz1x, blC8u * 5 + blz8r));
        if (wG7z == oy3x) {
            return
        }
        this.SO3x.insertBefore(r8j.element, (this.fm1x[wG7z + (wG7z > oy3x ? 1 : 0)] || {}).element || this.Bi8a);
        this.fm1x.splice(oy3x, 1);
        this.fm1x.splice(wG7z, 0, r8j)
    }
    ;
    b8h.bTa7T = function(r8j, d8f) {
        a7h.cF0x(r8j.element, false);
        if (r8j.dragger)
            r8j.dragger.S9J();
        delete r8j.dragger;
        var s8k = -1;
        for (var i = this.fm1x.length - 1; i >= 0; i--) {
            if (this.fm1x[i] == r8j) {
                s8k = i;
                break
            }
        }
        this.fm1x.splice(s8k, s8k >= 0 ? 1 : 0);
        delete r8j;
        if (this.fm1x.length >= 9) {
            this.Bi8a.style.display = "none"
        } else {
            this.Bi8a.style.display = ""
        }
        if (!this.fm1x.length) {
            this.o8g.style.display = "none";
            this.SU3x(0)
        } else {
            this.bDz2x()
        }
        this.yX7Q()
    }
    ;
    b8h.bDz2x = function() {
        var bDm2x = false;
        for (var i = 0, len = this.fm1x.length; i < len; i++) {
            if (this.fm1x[i].status == -3) {
                bDm2x = true
            }
        }
        if (bDm2x) {
            this.ble8W(-3)
        } else {
            this.SU3x(-3)
        }
    }
    ;
    b8h.PH2x = function() {
        var eb0x = [];
        for (var i = this.fm1x.length - 1; i >= 0; i--) {
            if (this.fm1x[i].status == 2) {
                eb0x.unshift(this.fm1x[i].picInfo)
            }
        }
        return eb0x
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.bDC2x.parent = e8e.button;
        this.FA9r && this.FA9r.S9J();
        this.FA9r = D9u.Bj8b.B9s(this.bDC2x);
        this.o8g.style.display = "none";
        if (!!this.fm1x) {
            for (var i = this.fm1x.length - 1; i >= 0; i--) {
                a7h.cF0x(this.fm1x[i].element, false);
                if (this.fm1x[i].dragger)
                    this.fm1x[i].dragger.S9J()
            }
        }
        this.fm1x = [];
        this.SR3x = {};
        if (this.yV7O) {
            clearTimeout(this.yV7O)
        }
        this.SU3x(0);
        this.PR2x = 0
    }
    ;
    H9y.ft1x.B9s({
        element: D9u.bkE8w,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, eU0x = NEJ.R, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), bd9U = c8g("nej.ui"), M9D = c8g("nej.ut"), b8h, K9B;
    if (!!M9D.mI3x)
        return;
    M9D.mI3x = NEJ.C();
    b8h = M9D.mI3x.O9F(M9D.RZ2x);
    K9B = M9D.mI3x.cg9X;
    b8h.bk9b = function(e8e) {
        this.bSD7w(e8e.more);
        this.Td3x = a7h.x9o(e8e.sbody);
        this.bU9L([[this.Td3x, "scroll", this.bSC7v.g8c(this)]]);
        var dh0x = e8e.delta;
        if (dh0x == null)
            dh0x = 30;
        this.PC2x = Math.max(0, dh0x);
        var ct9k = parseInt(e8e.count) || 0;
        this.iH2x = Math.max(0, ct9k);
        var fq1x = parseInt(e8e.number) || 0;
        if (fq1x > 1 && fq1x <= ct9k) {
            this.yu7n = fq1x
        }
        this.bl9c(e8e)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        delete this.zm7f;
        delete this.Td3x;
        delete this.rk4o;
        delete this.Tf3x
    }
    ;
    b8h.zC7v = function(bj9a, bo9f) {
        var bE9v = this.vA6u + (this.iH2x - 1) * this.qB4F
            , fY1x = this.iH2x * this.qB4F;
        return K9B.zC7v.call(this, bE9v, bj9a, fY1x, bo9f)
    }
    ;
    b8h.bSD7w = function(Tn3x) {
        this.zm7f = a7h.x9o(Tn3x);
        this.bU9L([[this.zm7f, "click", this.nq3x.g8c(this)]])
    }
    ;
    b8h.bmj8b = function(E9v) {
        E9v = E9v || {};
        if (this.rk4o || !E9v)
            return;
        if (!E9v.scrollHeight)
            E9v = a7h.oq3x();
        var bj9a = a7h.hL1x(this.ia1x)
            , dh0x = bj9a.y + this.ia1x.offsetHeight - E9v.scrollTop - E9v.clientHeight
            , bmq8i = E9v.scrollHeight <= E9v.clientHeight;
        if (dh0x <= this.PC2x || bmq8i && !this.rk4o) {
            this.nq3x()
        }
    }
    ;
    b8h.bSC7v = function(d8f) {
        if (this.rk4o)
            return;
        this.bmj8b(h8b.U9L(d8f))
    }
    ;
    b8h.zL7E = function(d8f) {
        K9B.zL7E.apply(this, arguments);
        if (!d8f.stopped) {
            this.QO2x();
            var bj9a = 0;
            if (d8f.index > 1) {
                bj9a = this.vA6u + ((d8f.index - 1) * this.iH2x - 1) * this.qB4F
            }
            this.hV1x = bj9a;
            this.nq3x()
        }
    }
    ;
    b8h.bFg3x = function(e8e) {
        if (!!this.yu7n) {
            var dh0x = e8e.offset > 0 ? this.qB4F : this.vA6u
                , fY1x = dh0x + this.qB4F * (this.yu7n - 1);
            this.hV1x = e8e.offset + fY1x;
            e8e.data.limit = fY1x;
            e8e.limit = fY1x;
            delete this.yu7n
        }
        return e8e
    }
    ;
    b8h.beX6R = function(e8e) {
        delete this.Tf3x;
        K9B.beX6R.apply(this, arguments);
        this.bDk2x()
    }
    ;
    b8h.bfa6U = function(d8f) {
        if (d8f.key != this.iv1x.key)
            return;
        switch (d8f.action) {
            case "refresh":
            case "append":
                delete this.Tf3x;
                break
        }
        K9B.bfa6U.apply(this, arguments)
    }
    ;
    b8h.Rb2x = function() {
        this.xs7l("onbeforelistload", "列表加载中...");
        a7h.X9O(this.zm7f, "display", "none")
    }
    ;
    b8h.bfE7x = function(i8a, bj9a, fY1x) {
        var bo9f = i8a.length
            , bms8k = i8a.loaded ? bj9a + fY1x >= bo9f : bj9a + fY1x > bo9f;
        this.hV1x = Math.min(this.hV1x, bo9f);
        a7h.X9O(this.zm7f, "display", bms8k ? "none" : "");
        if (bms8k)
            this.rk4o = !0;
        if (this.iH2x > 0) {
            var bt9k = this.zC7v(bj9a, i8a.length);
            if (this.bFf3x(bt9k.index, bt9k.total))
                return !0;
            var dh0x = this.vA6u - this.qB4F
                , fq1x = this.iH2x * this.qB4F;
            this.rk4o = (bj9a + fY1x - dh0x) % fq1x == 0 || bms8k;
            a7h.X9O(this.zm7f, "display", this.rk4o ? "none" : "");
            this.bfl6f(this.rk4o && bt9k.total > 1 ? "" : "none")
        }
    }
    ;
    b8h.bfD7w = function() {
        this.hV1x = 0;
        this.rk4o = !0;
        this.xs7l("onemptylist", "没有列表数据！")
    }
    ;
    b8h.Rf2x = function(ds0x, jA2x) {
        this.ia1x.insertAdjacentHTML(jA2x || "beforeEnd", ds0x)
    }
    ;
    b8h.Rm2x = function(gx1x) {
        this.fd1x = this.fd1x || [];
        if (k8c.el0x(gx1x)) {
            eU0x.push.apply(this.fd1x, gx1x)
        } else {
            this.fd1x.push(gx1x)
        }
    }
    ;
    b8h.RR2x = function(d8f) {
        a7h.mc3x(this.ci9Z);
        this.Rp2x(d8f, "onafteradd");
        var ey0x = d8f.flag;
        if (d8f.stopped || !ey0x)
            return;
        if (this.iH2x > 0) {
            this.bfo6i();
            return
        }
        this.hV1x += 1;
        ey0x == -1 ? this.bgk7d(d8f.data) : this.bFd3x(d8f.data)
    }
    ;
    b8h.RQ2x = function(d8f) {
        this.Rp2x(d8f, "onafterdelete");
        if (d8f.stopped)
            return;
        if (this.iH2x > 0) {
            this.bfo6i();
            return
        }
        var C9t = d8f.data[this.eM0x.pkey];
        if (!!this.fd1x) {
            var r8j = a7h.bLI4M(C9t)
                , s8k = k8c.cV0x(this.fd1x, r8j);
            if (s8k >= 0) {
                this.fd1x.splice(s8k, 1);
                this.hV1x -= 1
            }
            if (!!r8j)
                r8j.S9J()
        } else {
            var f8d = a7h.x9o(this.bFk3x(C9t));
            if (!!f8d)
                this.hV1x -= 1;
            a7h.cF0x(f8d)
        }
        if (this.hV1x <= 0)
            this.nq3x()
    }
    ;
    b8h.bfW7P = function(bj9a, fY1x) {
        if (bj9a != this.hV1x)
            return;
        if (this.ZK5P()) {
            this.rk4o = !1;
            this.bDk2x()
        }
    }
    ;
    b8h.bgc7V = function(bj9a, fY1x) {
        if (bj9a != 0)
            return;
        var HZ0x = this.P9G.gN1x(this.iv1x.key);
        for (var i = fY1x - 1; i >= 0; i--) {
            this.bgk7d(HZ0x[i])
        }
    }
    ;
    b8h.bDk2x = function() {
        var E9v = this.Td3x;
        if (!E9v || this.rk4o)
            return;
        this.bmj8b(this.Td3x)
    }
    ;
    b8h.fS1x = function() {
        delete this.rk4o;
        K9B.fS1x.apply(this, arguments)
    }
    ;
    b8h.nq3x = function() {
        if (!!this.Tf3x)
            return;
        this.Tf3x = !0;
        var bj9a = this.hV1x;
        this.hV1x += bj9a == 0 ? this.vA6u : this.qB4F;
        this.bFh3x(bj9a)
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), cL0x = c8g("nej.x"), M9D = c8g("nej.ut"), b8h;
    if (!!M9D.Bc8U)
        return;
    M9D.Bc8U = NEJ.C();
    b8h = M9D.Bc8U.O9F(M9D.cz9q);
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.ic1x = e8e.event || "click";
        this.jO2x = e8e.selected || "js-selected";
        this.mV3x = e8e.disabled || "js-disabled";
        this.bDj2x = !!e8e.inverse;
        this.bSw6q(e8e.list);
        this.Gw9n(e8e.index || 0)
    }
    ;
    b8h.bD9u = function() {
        var bSq6k = function(f8d) {
            this.bmM8E(f8d, !1)
        };
        return function() {
            this.bH9y();
            k8c.be9V(this.bV9M, bSq6k, this);
            delete this.bV9M;
            delete this.ic1x;
            delete this.cn9e;
            delete this.mV3x;
            delete this.jO2x;
            delete this.bDj2x
        }
    }();
    b8h.bSw6q = function() {
        var bdq6k = function(r8j) {
            if (!r8j)
                return;
            this.bV9M.push(r8j);
            var s8k = this.bV9M.length - 1
                , dc0x = this.bmN8F[s8k];
            if (!dc0x) {
                dc0x = this.Gw9n.g8c(this, s8k);
                this.bmN8F[s8k] = dc0x
            }
            this.bU9L([[r8j, this.ic1x, dc0x]])
        };
        return function(i8a) {
            this.bV9M = [];
            if (!this.bmN8F)
                this.bmN8F = [];
            k8c.be9V(i8a, bdq6k, this)
        }
    }();
    b8h.bmM8E = function(E9v, bSn6h) {
        !!bSn6h && !this.bDj2x ? a7h.y9p(E9v, this.jO2x) : a7h.w9n(E9v, this.jO2x)
    }
    ;
    b8h.Gw9n = function(s8k, Pi2x, j8b) {
        var E9v = this.bV9M[s8k];
        if (Pi2x != !0 && (s8k == this.cn9e || !E9v || a7h.by9p(E9v, this.mV3x))) {
            h8b.ce9V(arguments[1]);
            return this
        }
        var d8f = {
            index: s8k,
            last: this.cn9e,
            list: this.nQ3x(),
            data: j8b || a7h.u8m(E9v, "value")
        };
        this.cn9e = s8k;
        E9v = this.bV9M[d8f.last];
        if (!!E9v)
            this.bmM8E(E9v, !1);
        E9v = this.bV9M[this.cn9e];
        this.bmM8E(E9v, !0);
        this.z9q("onchange", d8f);
        if (!d8f.nostop)
            h8b.ce9V(arguments[1]);
        return this
    }
    ;
    b8h.ru4y = function() {
        return this.cn9e
    }
    ;
    b8h.nQ3x = function() {
        return this.bV9M
    }
    ;
    a7h.bSm6g = cL0x.bSm6g = function(bA9r, e8e) {
        var C9t = a7h.kp2x(bA9r);
        if (!C9t)
            return null;
        if (!M9D.ZI5N(C9t, M9D.Bc8U)) {
            e8e = e8e || {};
            e8e.list = !e8e.clazz ? a7h.cQ0x(C9t) : a7h.I9z(C9t, e8e.clazz);
            delete e8e.clazz
        }
        return M9D.ZI5N(C9t, M9D.Bc8U, e8e || Y9P)
    }
    ;
    cL0x.isChange = !0
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , k8c = c8g("nej.u")
        , v9m = c8g("nej.j")
        , l8d = c8g("nm.x");
    var SETTING_KEY = "player-setting";
    var mh3x = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mh3x = v9m.sX5c(SETTING_KEY) || mh3x;
    l8d.bmX8P = function() {
        return mh3x
    }
    ;
    l8d.GE9v = function(Ba8S) {
        if (Ba8S) {
            mh3x = Ba8S;
            v9m.uk6e(SETTING_KEY, Ba8S)
        }
    }
})();
(function() {
    var c8g = NEJ.P
        , Y9P = NEJ.O
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , k8c = c8g("nej.u")
        , H9y = c8g("nej.ut")
        , l8d = c8g("nm.x")
        , p8h = c8g("nm.d")
        , gO1x = c8g("nm.w.player.log");
    var kz2x = p8h.hK1x.B9s();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var md3x = function(t8l, bF9w, oZ3x) {
        var da0x = l8d.eQ0x("{0} {1} {2}", k8c.iS2x(new Date, "yyyy-MM-dd HH:mm:ss"), t8l, bF9w);
        if (oZ3x == LogLevel.ERROR) {
            kz2x.gg1x("playerror", {
                message: bF9w
            })
        }
        if (oZ3x >= LogLevel.INFO) {
            kz2x.ciK0x(da0x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(da0x)
        }
    };
    gO1x.bT9K = function() {
        md3x("PLAY_ERROR", l8d.eQ0x.apply(null, arguments), LogLevel.ERROR)
    }
    ;
    gO1x.op3x = function() {
        md3x("PLAY_INFO", l8d.eQ0x.apply(null, arguments), LogLevel.INFO)
    }
    ;
    gO1x.cvw3x = function() {
        md3x("PLAY_DEBUG", l8d.eQ0x.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , H9y = c8g("nej.ut")
        , k8c = c8g("nej.u")
        , D9u = c8g("nm.w")
        , ge1x = c8g("flash.cb");
    var dI0x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var AY8Q, TG3x, tS5X;
    D9u.bSk6e = function(t8l, dr0x) {
        if (t8l != "flash") {
            if (!AY8Q) {
                AY8Q = a7h.cU0x("audio");
                k8c.be9V(dI0x, function(t8l) {
                    h8b.q8i(AY8Q, t8l, onMediaCallBack)
                })
            }
            if (AY8Q && AY8Q.canPlayType && AY8Q.canPlayType("audio/mpeg")) {
                dr0x(new MediaWrap("audio"));
                return
            }
        }
        if (!TG3x) {
            a7h.qd4h({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hb1x) {
                    TG3x = hb1x;
                    k8c.be9V(dI0x, function(t8l) {
                        ge1x[t8l] = onMediaCallBack;
                        TG3x.addCallback(t8l, "flash.cb." + t8l)
                    });
                    dr0x(new MediaWrap("flash"))
                }
                    .g8c(this)
            })
        } else {
            dr0x(new MediaWrap("flash"))
        }
    }
    ;
    function MediaWrap(AX8P) {
        var lA2x;
        H9y.ft1x.B9s({
            element: this,
            event: dI0x.concat(["interrupt", "recover"])
        });
        lA2x = AX8P == "audio" ? AY8Q : TG3x;
        this.type = AX8P;
        this.destroy = function() {}
        ;
        this.setSrc = function(V9M) {
            if (tS5X != this) {
                var gz1x = tS5X;
                if (gz1x) {
                    gz1x.interrupt()
                }
                tS5X = this
            }
            if (AX8P == "flash") {
                lA2x.setSrc(V9M)
            } else {
                lA2x.src = V9M
            }
        }
        ;
        this.play = function() {
            if (tS5X != this) {
                var gz1x = tS5X;
                if (gz1x) {
                    gz1x.interrupt();
                    tS5X = this;
                    this.recover()
                } else {
                    tS5X = this
                }
            }
            if (AX8P == "flash") {
                lA2x.as_play()
            } else {
                lA2x.play()
            }
        }
        ;
        this.pause = function() {
            if (tS5X != this)
                return;
            if (AX8P == "flash") {
                lA2x.as_pause()
            } else {
                lA2x.pause()
            }
        }
        ;
        this.load = function() {
            if (tS5X != this)
                return;
            if (AX8P == "flash") {
                lA2x.as_load()
            } else {
                lA2x.load()
            }
        }
        ;
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        }
        ;
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        }
        ;
        this.getMedia = function() {
            return lA2x
        }
        ;
        var nr3x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k8c.be9V(nr3x, function(T9K) {
            var OW2x = "get" + T9K
                , OV2x = "set" + T9K;
            if (AX8P == "flash") {
                if (!this[OW2x]) {
                    this[OW2x] = function() {
                        return lA2x[OW2x]()
                    }
                }
                if (!this[OV2x]) {
                    this[OV2x] = function(value) {
                        lA2x[OV2x](value)
                    }
                }
            } else {
                var bDa2x = T9K.slice(0, 1).toLowerCase() + T9K.slice(1);
                if (!this[OW2x]) {
                    this[OW2x] = function() {
                        return lA2x[bDa2x]
                    }
                }
                if (!this[OV2x]) {
                    this[OV2x] = function(value) {
                        lA2x[bDa2x] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d8f) {
        if (tS5X) {
            h8b.z9q(tS5X, d8f.type, d8f)
        }
    }
})();
(function() {
    var c8g = NEJ.P, h8b = c8g("nej.v"), v9m = c8g("nej.j"), H9y = c8g("nej.ut"), cK0x = c8g("nej.p"), D9u = c8g("nm.w"), l8d = c8g("nm.x"), gO1x = c8g("nm.w.player.log"), b8h;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bCZ2x = false;
    D9u.fn1x = NEJ.C();
    b8h = D9u.fn1x.O9F(H9y.cz9q);
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.cr9i = {};
        this.TN3x(e8e.media);
        v9m.bp9g("/api/cdns", {
            type: "json",
            onload: function(d8f) {
                if (d8f.code) {
                    this.pN4R = d8f.data
                }
            }
                .g8c(this)
        })
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        delete this.cr9i
    }
    ;
    b8h.TT3x = function(bf9W) {
        if (!bf9W)
            return;
        var zI7B = this.cr9i.volume;
        if (this.dC0x) {
            this.dC0x.pause()
        }
        this.cr9i = {
            time: 0,
            id: bf9W.id,
            duration: bf9W.duration / 1e3,
            play: this.cr9i.play,
            stalledRetryCount: 0
        };
        if (zI7B != null) {
            this.cr9i.volume = zI7B
        }
        this.cr9i.loadState = LoadState.LOAD_START;
        this.bCY2x(bf9W.id);
        gO1x.op3x("play song id: {0}", bf9W.id)
    }
    ;
    b8h.eN0x = function() {
        if (this.cr9i.error) {
            this.cr9i.error = null;
            if (this.cr9i.error == ErrorType.INFO_GET_ERR || this.bCX2x()) {
                this.bCW2x()
            } else {
                this.OK2x()
            }
        } else {
            if (this.dC0x) {
                this.dC0x.play()
            }
        }
        this.cr9i.play = true;
        this.oz3x("play")
    }
    ;
    b8h.fu1x = function() {
        if (this.dC0x) {
            this.dC0x.pause()
        }
        this.cr9i.play = false;
        this.oz3x("pause")
    }
    ;
    b8h.ns3x = function(bB9s) {
        if (this.dC0x) {
            this.dC0x.setCurrentTime(bB9s)
        }
        this.cr9i.time = bB9s;
        gO1x.op3x("seek to: {0}", bB9s)
    }
    ;
    b8h.bon9e = function() {
        return this.cr9i.duration || 0
    }
    ;
    b8h.vt6n = function() {
        return !!this.cr9i.play
    }
    ;
    b8h.lT2x = function(OF2x) {
        this.cr9i.volume = OF2x;
        if (this.dC0x) {
            this.dC0x.setVolume(OF2x)
        }
    }
    ;
    b8h.boy9p = function() {
        return this.cr9i.time
    }
    ;
    b8h.TN3x = function(t8l) {
        D9u.bSk6e(t8l, function(lA2x) {
            this.dC0x = lA2x;
            gO1x.op3x("media loaded: {0}", lA2x.type);
            this.bU9L([[this.dC0x, "loadedmetadata", this.bSd6X.g8c(this)], [this.dC0x, "ended", this.bSb6V.g8c(this)], [this.dC0x, "waiting", this.xl7e.g8c(this)], [this.dC0x, "play", this.tg5l.g8c(this)], [this.dC0x, "pause", this.boF9w.g8c(this)], [this.dC0x, "playing", this.OD2x.g8c(this)], [this.dC0x, "timeupdate", this.bRZ6T.g8c(this)], [this.dC0x, "progress", this.rY4c.g8c(this)], [this.dC0x, "stalled", this.boK9B.g8c(this)], [this.dC0x, "interrupt", this.fu1x.g8c(this)], [this.dC0x, "recover", this.bRX6R.g8c(this)], [this.dC0x, "error", this.eo0x.g8c(this)]]);
            if (this.cr9i) {
                if (this.cr9i.loadState == LoadState.LOAD_START || this.cr9i.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.boO9F();
                    if (this.cr9i.volume != null) {
                        this.dC0x.setVolume(this.cr9i.volume)
                    }
                }
            }
        }
            .g8c(this))
    }
    ;
    b8h.bRW6Q = function(t8l) {
        this.Ia0x();
        this.dC0x.destroy();
        this.cr9i.loadState = LoadState.IN_SWITCH_MEDIA;
        this.xl7e();
        this.TN3x(t8l);
        gO1x.op3x("switch media")
    }
    ;
    b8h.cvx3x = function() {
        return this.dC0x
    }
    ;
    b8h.bCY2x = function() {
        this.xl7e();
        v9m.bp9g("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cr9i.id]),
                br: DEFAULT_BR
            },
            onload: this.bCQ2x.g8c(this),
            onerror: this.bCQ2x.g8c(this)
        })
    }
    ;
    b8h.bCQ2x = function(d8f) {
        if (d8f.code == 200 && d8f.data && d8f.data.length) {
            var bt9k = d8f.data[0];
            if (!bt9k.url) {
                this.cr9i.error = ErrorType.INFO_GET_ERR;
                this.oz3x("error", {
                    code: this.cr9i.error
                });
                return
            }
            this.cr9i.playUrl = bt9k.url;
            this.cr9i.expireTime = (new Date).getTime() + bt9k.expi * 1e3;
            this.boO9F()
        } else {
            this.cr9i.error = ErrorType.INFO_GET_ERR;
            this.oz3x("error", {
                code: this.cr9i.error
            });
            gO1x.bT9K("info load error")
        }
    }
    ;
    b8h.boO9F = function() {
        if (this.dC0x) {
            var V9M = this.cr9i.playUrl;
            if (this.cr9i.time > 0 && (this.cr9i.loadState == LoadState.IN_RE_GET_URL || this.cr9i.loadState == LoadState.IN_RE_GET_URL)) {
                V9M += "#t=" + this.cr9i.time
            }
            this.dC0x.setSrc(V9M);
            gO1x.op3x("load mp3: {0},loadState: {1}.", V9M, this.cr9i.loadState)
        }
    }
    ;
    b8h.bCM2x = function() {
        if (/#t=(\d+)$/.test(this.dC0x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
    ;
    b8h.OK2x = function() {
        var bB9s = parseInt(this.cr9i.time) || 0
            , bRO6I = this.bCM2x();
        if (bB9s === bRO6I) {
            this.dC0x.load()
        } else {
            this.dC0x.setSrc(this.cr9i.playUrl + "#t=" + bB9s)
        }
        this.cr9i.loadState = LoadState.IN_RELOAD;
        this.xl7e();
        gO1x.op3x("reload from: {0}", bB9s)
    }
    ;
    b8h.bCW2x = function() {
        this.cr9i.loadState = LoadState.IN_RE_GET_URL;
        this.bCY2x()
    }
    ;
    b8h.bCK2x = function() {
        var vp6j = getHost(this.cr9i.playUrl);
        if (vp6j) {
            for (var i = 0; i < this.pN4R.length; i++) {
                var jB2x = this.pN4R[i] || []
                    , s8k = jB2x.indexOf(vp6j);
                if (s8k >= 0 && jB2x.length > 1) {
                    return jB2x[(s8k + 1) % jB2x.length]
                }
            }
        }
        function getHost(V9M) {
            if (CDN_HOST_REG.test(V9M))
                return RegExp.$1
        }
    }
    ;
    b8h.bRJ6D = function() {
        this.cr9i.playUrl = this.cr9i.playUrl.replace(CDN_HOST_REG, this.bCK2x());
        this.cr9i.loadState = LoadState.IN_SWITCH_CDN;
        this.boO9F();
        this.xl7e()
    }
    ;
    b8h.bSd6X = function() {
        if (this.cr9i.loadState == LoadState.LOAD_START) {
            this.cr9i.loadState = LoadState.LOADED_META;
            if (this.dC0x.type == "audio") {
                this.cr9i.duration = this.dC0x.getDuration()
            }
            this.oz3x("loadedmeta", {
                duration: this.cr9i.duration
            })
        } else {
            this.cr9i.loadState = LoadState.LOADED_META
        }
        if (this.cr9i.play) {
            this.dC0x.play()
        } else {
            this.dC0x.pause()
        }
        if (this.cr9i.time && parseInt(this.cr9i.time) != this.bCM2x()) {
            this.dC0x.setCurrentTime(this.cr9i.time)
        }
        this.HR0x();
        this.OD2x();
        bCZ2x = true;
        gO1x.op3x("loaded meta")
    }
    ;
    b8h.bSb6V = function() {
        this.cr9i.ended = true;
        this.oz3x("ended")
    }
    ;
    b8h.xl7e = function() {
        if (!this.cr9i.waiting) {
            this.cr9i.waiting = true;
            this.cr9i.waitTimestamp = +(new Date);
            this.oz3x("waiting")
        }
    }
    ;
    b8h.OD2x = function() {
        this.cr9i.waiting = false;
        this.cr9i.waitTimestamp = 0;
        this.oz3x("playing")
    }
    ;
    b8h.tg5l = function() {
        this.oz3x("play")
    }
    ;
    b8h.boF9w = function() {
        this.oz3x("pause")
    }
    ;
    b8h.bRZ6T = function() {
        if (this.cr9i.loadState != LoadState.LOADED_META)
            return;
        var bB9s = this.dC0x.getCurrentTime();
        if (this.cr9i.waiting && bB9s > this.cr9i.time) {
            this.OD2x()
        }
        this.cr9i.time = bB9s;
        this.oz3x("timeupdate", {
            time: this.cr9i.time,
            duration: this.cr9i.duration
        })
    }
    ;
    b8h.rY4c = function(d8f) {
        if (this.cr9i.loadState != LoadState.LOADED_META)
            return;
        var m8e = {};
        if (d8f.data) {
            m8e.total = d8f.data.total;
            m8e.loaded = d8f.data.loaded
        } else {
            var xx7q = this.dC0x.getBuffered()
                , bB9s = this.dC0x.getCurrentTime()
                , nV3x = 0;
            for (var i = 0; i < xx7q.length; i++) {
                if (bB9s > xx7q.start(i) && bB9s < xx7q.end(i)) {
                    nV3x = xx7q.end(i);
                    break
                }
            }
            m8e.total = this.cr9i.duration;
            m8e.loaded = Math.min(nV3x, m8e.total)
        }
        this.oz3x("progress", m8e)
    }
    ;
    b8h.HR0x = function() {
        if (this.cr9i.retry) {
            clearTimeout(this.cr9i.retry.tid);
            this.cr9i.retry = null
        }
    }
    ;
    b8h.eo0x = function() {
        var bQ9H = this.dC0x.getError();
        gO1x.bT9K("media error code: {0}, netState: {1}", bQ9H.code, this.dC0x.getNetworkState());
        if (bQ9H.code == MediaError.MEDIA_ERR_NETWORK || bQ9H.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Ba8S = l8d.bmX8P();
            if (!this.cr9i.retry) {
                this.cr9i.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cr9i.retry.tid)
            }
            if (this.cr9i.retry.level == RetryLevel.NONE) {
                if (this.bCX2x()) {
                    this.cr9i.retry.level = RetryLevel.GET_URL;
                    this.bCW2x();
                    gO1x.op3x("Url expired, get url.")
                } else {
                    this.cr9i.retry.level = RetryLevel.RELOAD;
                    this.cr9i.retry.tid = setTimeout(this.OK2x.g8c(this), 3e3);
                    gO1x.op3x("Reload mp3 3s later.")
                }
            } else if (this.cr9i.retry.level == RetryLevel.GET_URL) {
                this.cr9i.retry.level = RetryLevel.RELOAD;
                this.cr9i.retry.tid = setTimeout(this.OK2x.g8c(this), 3e3);
                gO1x.op3x("Reload mp3 3s later.")
            } else if (this.cr9i.retry.level == RetryLevel.RELOAD) {
                this.cr9i.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCK2x()) {
                    this.cr9i.retry.tid = setTimeout(this.bRJ6D.g8c(this), 5e3);
                    gO1x.op3x("Switch CDN 5s later.")
                } else {
                    this.cr9i.retry.tid = setTimeout(this.OK2x.g8c(this), 5e3);
                    gO1x.op3x("Reload mp3 5s later.")
                }
            } else if (!bCZ2x && this.dC0x.type == "audio" && !Ba8S.useFlash && !cK0x.Kh0x.mac && l8d.bbY6S().supported) {
                Ba8S.useFlash = true;
                l8d.GE9v(Ba8S);
                this.bRW6Q("flash")
            } else {
                this.HR0x();
                this.fu1x();
                this.cr9i.error = ErrorType.NET_ERR;
                this.oz3x("error", {
                    code: this.cr9i.error
                });
                gO1x.bT9K("error can not retry.")
            }
        } else {
            this.HR0x();
            this.fu1x();
            this.cr9i.error = ErrorType.UNKNOWN_ERR;
            this.oz3x("error", {
                code: this.cr9i.error
            });
            gO1x.bT9K("error can not retry.")
        }
    }
    ;
    b8h.boK9B = function() {
        var hf1x = 0
            , bCG2x = 5e3;
        return function() {
            this.xl7e();
            clearTimeout(hf1x);
            setTimeout(function() {
                var fN1x = +(new Date);
                if (this.cr9i.waiting && fN1x - this.cr9i.waitTimestamp >= bCG2x && this.cr9i.stalledRetryCount < MAX_STALLED_RETRY) {
                    gO1x.op3x("stalled too long retry.");
                    this.cr9i.stalledRetryCount++;
                    this.OK2x()
                }
            }
                .g8c(this), bCG2x);
            gO1x.op3x("stalled")
        }
    }();
    b8h.bCX2x = function() {
        var fN1x = +(new Date);
        return fN1x > this.cr9i.expireTime
    }
    ;
    b8h.bRX6R = function() {
        var bB9s = parseInt(this.cr9i.time) || 0;
        this.dC0x.setSrc(this.cr9i.playUrl + "#t=" + bB9s);
        this.cr9i.loadState = LoadState.IN_RELOAD;
        this.xl7e();
        gO1x.op3x("recover from: {0}", bB9s)
    }
    ;
    b8h.oz3x = function(W9N, j8b) {
        h8b.z9q(D9u.fn1x, "playaction", {
            action: W9N,
            data: j8b || {}
        })
    }
    ;
    H9y.ft1x.B9s({
        element: D9u.fn1x,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c8g = NEJ.P, h8b = c8g("nej.v"), H9y = c8g("nej.ut"), D9u = c8g("nm.w"), b8h;
    D9u.AM8E = NEJ.C();
    b8h = D9u.AM8E.O9F(D9u.fn1x);
    K9B = D9u.AM8E.cg9X;
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bRH6B = function(bK9B) {
        this.TT3x(bK9B);
        this.eN0x()
    }
    ;
    b8h.bpn9e = function() {
        this.fu1x()
    }
    ;
    b8h.ur6l = function(d8f) {
        if (d8f.action == "play") {
            this.fu1x()
        }
    }
    ;
    b8h.oz3x = function(W9N, j8b) {
        h8b.z9q(D9u.AM8E, "tmpplayaction", {
            action: W9N,
            data: j8b || {},
            tmp: true
        })
    }
    ;
    b8h.sh4l = function() {
        return this.cr9i
    }
    ;
    H9y.ft1x.B9s({
        element: D9u.AM8E,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), fh1x = c8g("nej.n"), v9m = c8g("nej.j"), H9y = c8g("nej.ut"), bd9U = c8g("nej.ui"), D9u = c8g("nm.w"), n8f = c8g("nm.l"), jC2x = c8g("nm.c"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), b8h, K9B, Up3x = [{
        item: "m-publish-search-single",
        type: 1
    }, {
        item: "m-publish-search-artist",
        type: 100
    }, {
        item: "m-publish-search-album",
        type: 10
    }, {
        item: "m-publish-search-mv",
        type: 1004
    }, {
        item: "m-publish-search-playlist",
        type: 1e3
    }, {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var bpx9o = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    D9u.bpy9p = NEJ.C();
    b8h = D9u.bpy9p.O9F(bd9U.et0x);
    b8h.cl9c = function(e8e) {
        this.cs9j(e8e);
        var i8a = a7h.I9z(this.o8g, "j-flag");
        this.cvz3x = i8a.shift();
        this.bRC6w = i8a.shift();
        this.If0x = i8a.shift();
        this.bpF9w = i8a.shift();
        this.bpI9z = [i8a.shift(), i8a.shift(), i8a.shift(), i8a.shift(), i8a.shift(), i8a.shift()];
        this.Ur3x = i8a.shift();
        this.bCC2x = i8a.shift();
        this.qq4u = {
            list: this.bpI9z,
            selected: "z-curr",
            onchange: this.bCA2x.g8c(this)
        };
        h8b.q8i(this.If0x, "input", this.UA3x.g8c(this));
        h8b.q8i(this.If0x, "propertychange", this.UA3x.g8c(this));
        h8b.q8i(this.If0x, "keyup", this.UA3x.g8c(this));
        h8b.q8i(this.bRC6w, "click", this.UA3x.g8c(this));
        h8b.q8i(this.Ur3x, "click", this.cx9o.g8c(this));
        h8b.q8i(this.bCC2x, "click", function() {
            this.z9q("oncancel", {})
        }
            .g8c(this));
        this.P9G = p8h.CM8E.fV1x();
        this.Ol1x = top.nm.w.AM8E.fV1x();
        H9y.ft1x.B9s({
            element: top.nm.w.AM8E,
            event: ["tmpplayaction"]
        });
        this.qW4a = {
            limit: 100,
            offset: 0,
            parent: this.Ur3x,
            onbeforelistload: this.pb3x.g8c(this)
        };
        p8h.sk = "fuck" + a7h.u8m(this.bpF9w, "xname") + "458";
        h8b.q8i(top.nm.w.AM8E, "tmpplayaction", this.ur6l.g8c(this))
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = "m-xwgt-publish-search"
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        if (!!this.Au8m) {
            this.Au8m.S9J();
            delete this.Au8m
        }
        this.qq4u.index = bpx9o[e8e.type || "song"];
        this.Au8m = H9y.Bc8U.B9s(this.qq4u);
        this.If0x.value = "";
        this.If0x.focus();
        this.sP5U = "";
        this.cxU4Y = 0;
        if (e8e.showMV == true) {
            this.bpI9z[bpx9o["mv"]].parentNode.style.display = "";
            a7h.y9p(this.bpF9w, "srchtab-1")
        } else {
            this.bpI9z[bpx9o["mv"]].parentNode.style.display = "none";
            a7h.w9n(this.bpF9w, "srchtab-1")
        }
        if (!!this.dt0x) {
            this.dt0x = this.dt0x.S9J()
        }
        if (e8e.hideBack) {
            a7h.y9p(this.bCC2x.parentNode, "f-hide")
        }
    }
    ;
    b8h.bD9u = function() {
        this.Ol1x.bpn9e();
        this.bH9y()
    }
    ;
    b8h.UA3x = function() {
        var value = this.If0x.value.trim();
        if (value && value.length) {
            if (value != this.sP5U) {
                this.sP5U = value;
                this.bCA2x({
                    index: this.Au8m.ru4y()
                })
            }
        } else {
            if (this.dt0x) {
                this.dt0x = this.dt0x.S9J()
            }
        }
        this.sP5U = value
    }
    ;
    b8h.cx9o = function() {
        var bRt6n = function(E9v) {
            return a7h.by9p(E9v, "sitm") || a7h.by9p(E9v, "itm") || a7h.by9p(E9v, "mv-item")
        }
            , bRq6k = function(E9v) {
            return a7h.by9p(E9v, "ply")
        }
            , bCw2x = function() {
            n8f.Z9Q.N9E({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }
            , bRo6i = function() {
            n8f.Z9Q.N9E({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }
            , bqy9p = function(bf9W) {
            if (bf9W && bf9W.privilege && bf9W.privilege.toast) {
                v9m.bp9g("/api/song/toast", {
                    query: {
                        id: bf9W.id
                    },
                    type: "json",
                    onload: Ku0x.g8c(this),
                    onerror: Ku0x.g8c(this)
                })
            } else {
                Kt0x()
            }
        }
            , Ku0x = function(Q9H) {
            Kt0x((Q9H || Y9P).toast)
        }
            , Kt0x = function(bF9w) {
            n8f.Z9Q.N9E({
                type: 2,
                tip: bF9w || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d8f) {
            var AJ8B = h8b.U9L(d8f, bRq6k)
                , i8a = h8b.U9L(d8f, bRt6n)
                , dY0x = this.Ol1x.sh4l();
            if (!!i8a) {
                h8b.bh9Y(d8f);
                this.Og1x = a7h.u8m(i8a, "id");
                this.Oe1x = a7h.u8m(i8a, "type");
                if (this.Oe1x == 18) {
                    var bK9B = this.P9G.eh0x(this.Og1x)
                        , oZ3x = l8d.oB3x(bK9B);
                    if (!AJ8B) {
                        if (oZ3x == 10) {
                            bCw2x();
                            return
                        } else if (oZ3x == 100) {
                            bqy9p(bK9B);
                            return
                        }
                    } else {
                        if (oZ3x == 10) {
                            bCw2x();
                            return
                        } else if (oZ3x == 100) {
                            bqy9p(bK9B);
                            return
                        } else if (oZ3x == 11) {
                            bRo6i();
                            return
                        } else {
                            a7h.w9n(this.AB8t, "z-pause z-loading");
                            if (AJ8B == this.AB8t && dY0x.play && !dY0x.ended) {
                                this.Ol1x.bpn9e()
                            } else {
                                this.AB8t = AJ8B;
                                this.Ol1x.bRH6B(bK9B)
                            }
                            return
                        }
                    }
                } else if (this.Oe1x == 70) {
                    if (a7h.by9p(i8a, "z-noprogram")) {
                        n8f.Z9Q.N9E({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.bRm6g()
            }
        }
    }();
    b8h.bRm6g = function() {
        var hl1x = this.P9G.eh0x(this.Og1x)
            , rB4F = l8d.bHy3x(this.Oe1x, hl1x);
        rB4F.title = rB4F.title || "";
        rB4F.author = rB4F.author || "";
        rB4F.picUrl = rB4F.picUrl || "";
        rB4F.authors = rB4F.authors || "";
        if (this.Oe1x == 70) {
            this.Og1x = this.Og1x.slice(0, -4)
        }
        this.z9q("onfinish", {
            id: this.Og1x,
            type: this.Oe1x,
            data: rB4F
        })
    }
    ;
    b8h.ur6l = function(d8f) {
        var j8b = d8f.data;
        if (!this.AB8t) {
            return
        }
        switch (d8f.action) {
            case "play":
                a7h.ev0x(this.AB8t, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a7h.w9n(this.AB8t, "z-pause z-loading");
                break;
            case "error":
                n8f.Z9Q.N9E({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a7h.w9n(this.AB8t, "z-pause z-loading");
                break;
            case "playing":
                a7h.ev0x(this.AB8t, "z-loading", "z-pause");
                break;
            case "waiting":
                a7h.ev0x(this.AB8t, "z-pause", "z-loading");
                break
        }
    }
    ;
    b8h.bRk6e = function(d8f) {
        if (d8f.result.code == 407) {
            this.Ur3x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Ur3x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
    ;
    b8h.bCA2x = function(d8f) {
        if (!this.sP5U || d8f.index < 0 || d8f.index > 5) {
            return
        }
        this.Ol1x.bpn9e();
        var bc9T = Up3x[d8f.index]
            , e8e = NEJ.X({}, this.qW4a);
        e8e.cache = {
            klass: p8h.CM8E,
            clear: true,
            onerror: this.bRk6e.g8c(this)
        };
        e8e.cache.lkey = "search-publish-" + bc9T.type + "-" + this.sP5U;
        e8e.item = {
            klass: bc9T.item,
            getRestrictLevel: l8d.oB3x,
            dur2time: l8d.lN2x
        };
        if (!e8e.cache.data) {
            e8e.cache.data = {}
        }
        e8e.cache.data.s = this.sP5U;
        e8e.cache.data.type = bc9T.type;
        e8e.cache.data.isPub = true;
        if (bc9T.type == 1) {
            e8e.cache.data.hlpretag = '<span class="s-fc7">';
            e8e.cache.data.hlposttag = "</span>"
        }
        e8e.onemptylist = this.bRj6d.g8c(this, this.sP5U);
        if (!!this.AH8z)
            this.P9G.tA5F(this.AH8z);
        if (!!this.dt0x) {
            this.dt0x = this.dt0x.S9J()
        }
        this.dt0x = H9y.mI3x.B9s(e8e);
        this.AH8z = e8e.cache.lkey
    }
    ;
    b8h.pb3x = function(d8f) {
        d8f.value = a7h.hX1x("m-publish-search-loading")
    }
    ;
    b8h.bRj6d = function(J9A, d8f) {
        a7h.dT0x(d8f.parent, "m-publish-emtpy-message", {
            key: J9A
        });
        d8f.stopped = true
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), cK0x = c8g("nej.p"), v9m = c8g("nej.j"), ch9Y = c8g("nej.ut"), bI9z = c8g("nej.ui"), D9u = c8g("nm.w"), b8h, K9B;
    var bRi6c = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D9u.CF8x = NEJ.C();
    b8h = D9u.CF8x.O9F(bI9z.et0x);
    var gc1x = a7h.em0x("m-wgt-receiverInput");
    var bRg6a = a7h.em0x("m-wgt-receiverList");
    var hP1x = a7h.rO4S(bRi6c);
    var bRf6Z = a7h.em0x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b8h.cl9c = function(e8e) {
        this.bb9S = [];
        this.up6j = e8e.receiver || null;
        this.bRe6Y = e8e.unique || false;
        this.lZ3x = e8e.err;
        this.bCs2x(this.bCr2x, e8e.uid);
        this.cs9j(e8e)
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.NT1x();
        this.NO1x();
        this.Vt3x();
        if (e8e.receiver)
            this.bap5u(e8e.receiver.nickname, e8e.receiver.userId);
        a7h.X9O(this.zW8O, "display", "block");
        a7h.X9O(this.baq5v, "cursor", "text");
        a7h.X9O(this.zW8O, "cursor", "text")
    }
    ;
    b8h.bZ9Q = function() {
        var j8b = this.bCq2x();
        this.ca9R = a7h.hM1x(a7h.bP9G(gc1x, {
            receiver: this.up6j,
            users: j8b
        }));
        this.lb2x = hP1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var bx9o = a7h.I9z(this.o8g, "j-flag");
        var gx1x = a7h.I9z(this.o8g, "j-item");
        this.baq5v = bx9o[0];
        this.bCp2x = bx9o[1];
        this.dH0x = bx9o[2];
        this.zW8O = bx9o[3];
        this.VH3x = bx9o[4];
        this.baw5B = bx9o[5];
        this.fd1x = gx1x;
        a7h.y9p(this.fd1x[0], "j-selected");
        h8b.q8i(this.dH0x, "keyup", this.bax5C.g8c(this));
        h8b.q8i(this.dH0x, "keydown", this.ND1x.g8c(this));
        h8b.q8i(this.dH0x, "focus", this.ki2x.g8c(this));
        h8b.q8i(this.VH3x, "click", this.bQZ6T.g8c(this));
        h8b.q8i(this.baq5v, "click", this.bQW6Q.g8c(this));
        h8b.q8i(document.body, "click", this.nu3x.g8c(this));
        h8b.q8i(this.dH0x, "input", this.fl1x.g8c(this));
        h8b.q8i(this.dH0x, "blur", this.oN3x.g8c(this))
    }
    ;
    b8h.bD9u = function(e8e) {
        h8b.ms3x(document.body, "click", this.nu3x.g8c(this));
        this.bH9y();
        this.Vt3x();
        this.bQV6P();
        this.nu3x()
    }
    ;
    b8h.bax5C = function(d8f) {
        h8b.bh9Y(d8f);
        var iP2x = d8f.keyCode || d8f.which;
        var bi9Z = this.dH0x.value;
        var bo9f = this.fd1x.length;
        var qS4W = a7h.I9z(this.o8g, "j-selected")[0];
        switch (iP2x) {
            case 13:
                var jX2x = a7h.gl1x(qS4W, "data-username");
                var hs1x = a7h.gl1x(qS4W, "data-userId");
                this.bap5u(jX2x, hs1x);
                this.nu3x();
                this.dH0x.value = "";
                break;
            case 38:
                var s8k = a7h.gl1x(qS4W, "data-index") - 1 < 0 ? bo9f - 1 : a7h.gl1x(qS4W, "data-index") - 1;
                a7h.w9n(qS4W, "j-selected");
                a7h.y9p(this.fd1x[s8k], "j-selected");
                break;
            case 40:
                var s8k = parseInt(a7h.gl1x(qS4W, "data-index")) + 1 >= bo9f ? 0 : parseInt(a7h.gl1x(qS4W, "data-index")) + 1;
                a7h.w9n(qS4W, "j-selected");
                a7h.y9p(this.fd1x[s8k], "j-selected");
                break;
            default:
                this.vb6V()
        }
    }
    ;
    b8h.ND1x = function(d8f) {
        var iP2x = d8f.keyCode || d8f.which;
        var bi9Z = this.dH0x.value;
        var s8k = a7h.I9z(this.o8g, "j-receiver").length - 1;
        if (iP2x === 8 && bi9Z === "")
            this.bQT6N(s8k)
    }
    ;
    b8h.fl1x = function(d8f) {
        var bi9Z = this.dH0x.value;
        if (bi9Z.length > 10) {
            this.dH0x.value = bi9Z.substring(0, 10);
            return
        }
        cK0x.cS0x.browser == "ie" && cK0x.cS0x.version < "7.0" ? setTimeout(this.baN5S.g8c(this), 0) : this.baN5S();
        this.NO1x()
    }
    ;
    b8h.ki2x = function() {
        if (this.bb9S[0])
            this.vb6V();
        else
            this.bCs2x(this.bQR6L);
        a7h.X9O(this.zW8O, "display", "none")
    }
    ;
    b8h.oN3x = function() {
        var bo9f = a7h.I9z(this.o8g, "j-receiver").length;
        if (this.dH0x.value.trim() == "" && bo9f <= 0)
            a7h.X9O(this.zW8O, "display", "block")
    }
    ;
    b8h.bap5u = function(jX2x, hs1x) {
        var Jg0x = this.Nu1x();
        if (Jg0x.length >= 10) {
            this.dy0x();
            return
        }
        var bd9U;
        for (bd9U = 0; bd9U < Jg0x.length; bd9U++) {
            if (Jg0x[bd9U] == hs1x) {
                this.nu3x();
                return
            }
        }
        if (!jX2x || !hs1x)
            return;
        var f8d = a7h.dq0x(a7h.hM1x(a7h.bP9G(bRf6Z, {
            username: jX2x,
            userId: hs1x
        })));
        var bA9r = this.bCp2x.parentNode;
        if (this.bRe6Y) {
            this.Vt3x()
        }
        bA9r.insertBefore(f8d, this.bCp2x);
        this.dH0x.value = "";
        var bo9f = a7h.I9z(this.o8g, "j-receiver").length;
        if (bo9f > 1)
            a7h.X9O(this.zW8O, "display", "none");
        this.baN5S();
        this.NO1x()
    }
    ;
    b8h.Vt3x = function() {
        var Ns1x = a7h.I9z(this.o8g, "j-receiver");
        var bd9U;
        if (Ns1x.length > 0) {
            for (bd9U = 0; bd9U < Ns1x.length; bd9U++) {
                a7h.cF0x(Ns1x[bd9U], false)
            }
        }
    }
    ;
    b8h.bQV6P = function() {
        this.dH0x.value = ""
    }
    ;
    b8h.bQT6N = function(s8k) {
        this.dy0x(!0);
        var Ns1x = a7h.I9z(this.o8g, "j-receiver");
        a7h.cF0x(Ns1x[s8k], false);
        this.NO1x()
    }
    ;
    b8h.vb6V = function() {
        var bi9Z = this.dH0x.value;
        var bC9t = bi9Z.trim().toLowerCase();
        var j8b;
        bC9t = bC9t.replace(/\[/g, "\\[");
        bC9t = bC9t.replace(/\]/g, "\\]");
        j8b = this.bCq2x(bC9t);
        this.bQQ6K(j8b)
    }
    ;
    b8h.nu3x = function(d8f) {
        a7h.X9O(this.VH3x, "display", "none")
    }
    ;
    b8h.dy0x = function(gu1x) {
        if (gu1x && this.lZ3x) {
            a7h.X9O(this.lZ3x, "display", "none");
            return
        }
        if (this.lZ3x)
            a7h.X9O(this.lZ3x, "display", "block")
    }
    ;
    b8h.bQZ6T = function(d8f) {
        h8b.ce9V(d8f);
        var dd0x = d8f.target || d8f.srcElement;
        if (a7h.by9p(dd0x, "j-flag"))
            return;
        var bA9r = dd0x.nodeName.toLowerCase() == "a" ? dd0x.parentNode : dd0x.parentNode.parentNode;
        var jX2x = a7h.gl1x(bA9r, "data-username");
        var hs1x = a7h.gl1x(bA9r, "data-userId");
        this.bap5u(jX2x, hs1x);
        this.nu3x();
        a7h.X9O(this.zW8O, "display", "none")
    }
    ;
    b8h.bQW6Q = function(d8f) {
        h8b.bh9Y(d8f);
        var dd0x = d8f.target || d8f.srcElement;
        if (a7h.by9p(dd0x.parentNode, "j-receiver")) {
            a7h.cF0x(dd0x.parentNode, false);
            this.dy0x(!0);
            this.NO1x()
        } else
            this.dH0x.focus()
    }
    ;
    b8h.baN5S = function() {
        this.baw5B.innerHTML = this.dH0x.value;
        var dm0x = this.baw5B.offsetWidth + 2;
        a7h.X9O(this.dH0x, "width", dm0x + "px")
    }
    ;
    b8h.NO1x = function() {
        var VW4a = a7h.hL1x(this.dH0x, this.o8g).y;
        var bCn2x = Math.floor((VW4a - 8) / 27);
        if (bCn2x < 0)
            return;
        a7h.X9O(this.baq5v, "height", 19 + bCn2x * 29 + "px")
    }
    ;
    b8h.NT1x = function() {
        var pL4P = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pL4P.length; i++) {
            a7h.X9O(this.baw5B, pL4P[i], a7h.db0x(this.dH0x, pL4P[i]))
        }
    }
    ;
    b8h.bCs2x = function(dr0x, C9t) {
        var cT0x = C9t ? C9t : window.GUser.userId;
        var V9M = "/api/user/getfollows/" + cT0x;
        var fC1x = v9m.bp9g(V9M, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dr0x.g8c(this),
            onerror: function(j8b) {
                this.bb9S = []
            },
            onbeforerequest: function(j8b) {}
        })
    }
    ;
    b8h.bCr2x = function(j8b) {
        this.bb9S = JSON.parse(j8b).follow || [];
        var C9t = GUser.userId;
        for (var i = 0; i < this.bb9S.length; i++) {
            if (this.bb9S[i].userId == C9t) {
                this.bb9S.splice(i, 1);
                continue
            }
            this.bb9S[i].avatarUrl = this.bb9S[i].avatarUrl + "?param=30y30"
        }
    }
    ;
    b8h.bQR6L = function(j8b) {
        if (this.bb9S[0])
            return;
        this.bCr2x(j8b);
        this.vb6V()
    }
    ;
    b8h.bCq2x = function(bC9t) {
        var bC9t = bC9t ? bC9t : "";
        this.bb9S = this.bb9S[0] ? this.bb9S : [];
        var bo9f = this.bb9S.length;
        var No1x = this.Nu1x();
        var rJ4N = [];
        var Nm1x, Nl1x, bbf5k;
        if (!this.bb9S[0])
            return rJ4N;
        for (var bd9U = 0; bd9U < bo9f; bd9U++) {
            bbf5k = false;
            for (var v9m = 0; v9m < No1x.length; v9m++) {
                if (this.bb9S[bd9U].userId == No1x[v9m]) {
                    bbf5k = true;
                    break
                }
            }
            if (bbf5k)
                continue;
            Nm1x = this.bb9S[bd9U].nickname.toLowerCase().search(bC9t);
            Nl1x = this.bb9S[bd9U].py ? this.bb9S[bd9U].py.toLowerCase().search(bC9t) : -1;
            if (Nm1x !== -1 || Nl1x != -1)
                rJ4N.push(this.bb9S[bd9U])
        }
        return rJ4N
    }
    ;
    b8h.bQQ6K = function(j8b) {
        a7h.dT0x(this.VH3x, bRg6a, {
            users: j8b
        });
        a7h.y9p(a7h.I9z(this.o8g, "j-item")[0], "j-selected");
        this.fd1x = a7h.I9z(this.o8g, "j-item");
        a7h.X9O(this.VH3x, "display", "block")
    }
    ;
    b8h.Nu1x = function() {
        var rJ4N = a7h.I9z(this.o8g, "j-receiver") || [];
        var hs1x = [];
        for (var i = 0; i < rJ4N.length; i++) {
            hs1x.push(a7h.gl1x(rJ4N[i], "data-id"))
        }
        return hs1x
    }
    ;
    b8h.cvB3x = function() {
        var hs1x = this.Nu1x();
        var rJ4N = [];
        for (var i = 0; i < hs1x.length; i++) {
            for (var j = 0; j < this.bb9S.length; j++) {
                if (hs1x[i] == this.bb9S[j].userId)
                    rJ4N.push(this.bb9S[j])
            }
        }
        return rJ4N
    }
    ;
    b8h.bQJ6D = function() {
        this.Vt3x()
    }
    ;
    D9u.CF8x.N9E = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n8f.nv3x.N9E({
                title: "登录"
            });
            return
        }
        e8e = e8e || {};
        if (e8e.parent === undefined)
            e8e.parent = document.body;
        !!this.eJ0x && this.eJ0x.S9J();
        this.eJ0x = this.B9s(e8e)
    }
    ;
    D9u.CF8x.bq9h = function() {
        !!this.eJ0x && this.eJ0x.S9J()
    }
    ;
    D9u.CF8x.EL9C = function() {
        return this.nu3x()
    }
    ;
    D9u.CF8x.cvE3x = function() {
        return this.vb6V()
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), k8c = c8g("nej.u"), h8b = c8g("nej.v"), l8d = c8g("nm.x"), n8f = c8g("nm.l"), b8h, K9B;
    n8f.EN9E = NEJ.C();
    b8h = n8f.EN9E.O9F(n8f.blY8Q);
    K9B = n8f.EN9E.cg9X;
    b8h.bk9b = function() {
        var Bo8g;
        var bQF6z = function(A9r, J9A) {
            Bo8g = Bo8g || [];
            if (J9A != "18")
                Bo8g.push({
                    key: J9A,
                    value: A9r
                })
        };
        return function(e8e) {
            this.bl9c(e8e);
            if (e8e.upwards) {
                a7h.y9p(this.o8g, "m-emts-up")
            } else {
                a7h.w9n(this.o8g, "m-emts-up")
            }
            if (!Bo8g) {
                var bv9m = l8d.cdZ9Q();
                k8c.ed0x(bv9m, bQF6z)
            }
            var bo9f = Bo8g.length;
            Bo8g.splice(bo9f - 2, 0, {
                key: "18",
                value: "186"
            });
            this.Wc4g = Bo8g
        }
    }();
    b8h.bZ9Q = function() {
        this.ca9R = "ntp-portrait"
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.I9z(this.o8g, "j-flag");
        this.bG9x = i8a[0];
        this.bQE6y = i8a[1];
        this.bQD6x = i8a[2];
        this.bQC5H = i8a[3];
        h8b.q8i(this.bG9x, "click", this.wf6Z.g8c(this));
        h8b.q8i(this.bQE6y, "click", this.Bu8m.g8c(this, 1));
        h8b.q8i(this.bQC5H, "click", this.Bu8m.g8c(this, 2))
    }
    ;
    b8h.bbv6p = function(s8k) {
        this.Wf4j = s8k;
        var bj9a = (s8k - 1) * 50;
        var i8a = this.Wc4g.slice(bj9a, Math.min(bj9a + 50, this.Wc4g.length));
        this.bG9x.innerHTML = a7h.bP9G("jst-portrait", {
            plist: i8a
        }, {
            purl: l8d.bIa3x
        });
        this.bQD6x.innerText = s8k + "/" + Math.ceil(this.Wc4g.length / 50)
    }
    ;
    b8h.Bu8m = function(s8k) {
        var bQB5G = Math.ceil(this.Wc4g.length / 50);
        if (s8k == 1 && this.Wf4j == 1 || s8k == 2 && this.Wf4j == bQB5G)
            return;
        s8k == 1 ? this.bbv6p(this.Wf4j - 1) : this.bbv6p(this.Wf4j + 1)
    }
    ;
    b8h.wf6Z = function(d8f) {
        var E9v = h8b.U9L(d8f, "d:text");
        if (!E9v)
            return;
        var d8f = {
            url: a7h.u8m(E9v, "url"),
            text: a7h.u8m(E9v, "text")
        };
        this.z9q("onselect", d8f);
        if (!d8f.stopped)
            this.bq9h()
    }
    ;
    b8h.N9E = function() {
        K9B.N9E.call(this);
        this.bbv6p(1)
    }
})();
(function() {
    var c8g = NEJ.P
        , h8b = c8g("nej.v")
        , k8c = c8g("nej.u")
        , cK0x = c8g("nej.p")
        , ba9R = c8g("nej.h")
        , H9y = c8g("nej.ut")
        , jr2x = /^[#?]+/
        , Ct8l = /#(.*?)$/
        , wd6X = window
        , bbB6v = !history.pushState || cK0x.Kh0x.android || !history.auto;
    var Wg4k = function(V9M, bbD6x) {
        wd6X.history[!bbD6x ? "pushState" : "replaceState"](null, document.title, V9M)
    };
    var Wh4l = function() {
        return location.parse(wd6X.location.href)
    };
    Wg4k = Wg4k.ef0x(function(d8f) {
        if (!bbB6v)
            return;
        var bg9X = d8f.args;
        d8f.stopped = !0;
        V9M = bg9X[0].replace(jr2x, "");
        !bg9X[1] ? wd6X.location.hash = V9M : wd6X.location.replace("#" + V9M)
    });
    Wh4l = Wh4l.ef0x(function(d8f) {
        if (!bbB6v)
            return;
        d8f.stopped = !0;
        var dG0x = Ct8l.test(wd6X.location.href) ? RegExp.$1 : "";
        d8f.value = location.parse(dG0x.replace(jr2x, ""))
    });
    location.redirect = function(V9M, bbD6x) {
        Wg4k(V9M, bbD6x);
        return this
    }
    ;
    location.active = function() {
        var eZ0x, V9M, iM2x, cC0x, Nc1x;
        var bbH6B = function(iq1x) {
            if (!!cC0x) {
                cC0x = !1;
                return
            }
            var d8f = {
                oldValue: iM2x,
                newValue: Wh4l()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h8b.z9q(location, "beforeurlchange", d8f);
                if (d8f.stopped) {
                    if (!!iM2x) {
                        cC0x = !0;
                        Wg4k(iM2x.href, !0)
                    }
                    return
                }
            }
            V9M = wd6X.location.href;
            iM2x = d8f.newValue;
            h8b.z9q(location, "urlchange", iM2x);
            ba9R.bjG8y(iM2x.href)
        };
        var bCj2x = function() {
            if (V9M != wd6X.location.href)
                bbH6B();
            eZ0x = requestAnimationFrame(bCj2x)
        };
        return function(bL9C) {
            if (!!Nc1x)
                return this;
            Nc1x = !0;
            wd6X = bL9C || window;
            if (bbB6v && "onhashchange"in window && cK0x.mq3x.trident2) {
                h8b.q8i(wd6X, "hashchange", bbH6B);
                bbH6B()
            } else if (!eZ0x) {
                eZ0x = requestAnimationFrame(bCj2x)
            }
            return this
        }
    }();
    location.parse = function() {
        var fZ1x = /^https?:\/\/.*?\//i
            , jr2x = /[?#]/;
        return function(V9M) {
            var m8e = {
                href: V9M
            };
            V9M = (V9M || "").replace(fZ1x, "/").split(jr2x);
            var ct9k = 1;
            if (V9M[0] == "/" && (V9M[1] || "").indexOf("/") == 0)
                ct9k = 2;
            m8e.path = V9M.splice(0, ct9k).join("?");
            m8e.query = k8c.hi1x(V9M.join("&"));
            return m8e
        }
    }();
    location.same = function(V9M) {
        return Wh4l().href == V9M
    }
    ;
    H9y.ft1x.B9s({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var c8g = NEJ.P
        , a7h = c8g("nej.e")
        , h8b = c8g("nej.v")
        , fJ1x = c8g("nm.ut");
    fJ1x.sG4K = function(ez0x) {
        var gp1x = {
            text: "",
            start: 0,
            end: 0
        };
        if (ez0x.setSelectionRange) {
            gp1x.start = ez0x.selectionStart;
            gp1x.end = ez0x.selectionEnd;
            gp1x.text = gp1x.start != gp1x.end ? ez0x.value.substring(gp1x.start, gp1x.end) : ""
        } else if (document.selection) {
            var i, Wi4m = document.selection.createRange(), vN6H = document.body.createTextRange();
            vN6H.moveToElementText(ez0x);
            gp1x.text = Wi4m.text;
            gp1x.bookmark = Wi4m.getBookmark();
            for (i = 0; vN6H.compareEndPoints("StartToStart", Wi4m) < 0 && Wi4m.moveStart("character", -1) !== 0; i++) {
                if (ez0x.value.charAt(i) == "\n") {
                    i++
                }
            }
            gp1x.start = i;
            gp1x.end = gp1x.text.length + gp1x.start
        }
        return gp1x
    }
    ;
    fJ1x.Wk4o = function(ez0x, gp1x) {
        var vN6H;
        if (!gp1x) {
            gp1x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ez0x.focus();
        if (ez0x.setSelectionRange) {
            ez0x.setSelectionRange(gp1x.start, gp1x.end)
        } else if (ez0x.createTextRange) {
            vN6H = ez0x.createTextRange();
            if (ez0x.value.length === gp1x.start) {
                vN6H.collapse(false);
                vN6H.select()
            } else {
                vN6H.moveToBookmark(gp1x.bookmark);
                vN6H.select()
            }
        }
    }
    ;
    fJ1x.Fj9a = function(ez0x, gp1x, da0x) {
        var gp1x = gp1x || {
            text: "",
            start: 0,
            end: 0
        };
        var bbV6P, bCi2x, vN6H, MX1x, bCh2x, bCf2x, BJ8B;
        this.Wk4o(ez0x, gp1x);
        if (ez0x.setSelectionRange) {
            bbV6P = ez0x.value;
            bCi2x = bbV6P.substring(0, gp1x.start) + da0x + bbV6P.substring(gp1x.end);
            bCh2x = bCf2x = gp1x.start + da0x.length;
            BJ8B = ez0x.scrollTop;
            ez0x.value = bCi2x;
            if (ez0x.scrollTop != BJ8B) {
                ez0x.scrollTop = BJ8B
            }
            ez0x.setSelectionRange(bCh2x, bCf2x)
        } else if (ez0x.createTextRange) {
            MX1x = document.selection.createRange();
            MX1x.text = da0x;
            MX1x.setEndPoint("StartToEnd", MX1x);
            MX1x.select()
        }
        h8b.z9q(ez0x, "keyup")
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), cK0x = c8g("nej.p"), k8c = c8g("nej.u"), ch9Y = c8g("nej.ut"), D9u = c8g("nm.w"), fJ1x = c8g("nm.ut"), b8h;
    D9u.bCe2x = NEJ.C();
    b8h = D9u.bCe2x.O9F(ch9Y.cz9q);
    b8h.cl9c = function(e8e) {
        this.cs9j(e8e)
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.fK1x = e8e.txt;
        this.BL8D = e8e.sgtsContainer;
        this.bCd2x = e8e.sgtsList[0];
        this.Wq4u = e8e.sgtsItem;
        this.nw3x = e8e.rangeData;
        this.Fu9l = e8e.atIndex;
        a7h.y9p(this.Wq4u[0], "selected-item");
        this.MS1x()
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        h8b.ms3x(document.body, "keyup", this.bCb2x.g8c(this));
        h8b.ms3x(document.body, "click", this.bBZ2x.g8c(this))
    }
    ;
    b8h.MS1x = function() {
        this.bU9L([[document.body, "keyup", this.bCb2x.g8c(this)], [document.body, "click", this.bBZ2x.g8c(this)], [this.fK1x, "keydown", this.bBV2x.g8c(this)], [this.fK1x, "keypress", this.bBV2x.g8c(this)], [this.bCd2x, "click", this.bBT2x.g8c(this)], [this.bCd2x, "mouseover", this.BQ8I.g8c(this)]])
    }
    ;
    b8h.BQ8I = function(d8f) {
        var dd0x = h8b.U9L(d8f);
        var r8j = a7h.I9z(this.BL8D, "selected-item");
        if (a7h.by9p(dd0x, "j-sgt")) {
            a7h.w9n(r8j[0], "selected-item");
            a7h.y9p(dd0x, "selected-item")
        }
    }
    ;
    b8h.bCb2x = function(d8f) {
        var r8j = a7h.I9z(this.BL8D, "selected-item");
        var bo9f = this.Wq4u.length;
        var iP2x = d8f.keyCode || d8f.which;
        var s8k, j8b;
        switch (iP2x) {
            case 38:
                s8k = a7h.gl1x(r8j[0], "data-index") - 1 < 0 ? bo9f - 1 : a7h.gl1x(r8j[0], "data-index") - 1;
                a7h.w9n(r8j[0], "selected-item");
                a7h.y9p(this.Wq4u[s8k], "selected-item");
                break;
            case 40:
                s8k = parseInt(a7h.gl1x(r8j[0], "data-index")) + 1 >= bo9f ? 0 : parseInt(a7h.gl1x(r8j[0], "data-index")) + 1;
                a7h.w9n(r8j[0], "selected-item");
                a7h.y9p(this.Wq4u[s8k], "selected-item");
                break;
            case 13:
                this.bBT2x(d8f);
                break;
            case 27:
                this.nu3x();
                break;
            case 32:
                var bi9Z = this.fK1x.value;
                var s8k = fJ1x.sG4K(this.fK1x);
                if (bi9Z.charAt(s8k.start - 1) !== " ")
                    return;
                this.nu3x();
                break
        }
    }
    ;
    b8h.bBV2x = function(d8f) {
        var iP2x = d8f.keyCode || d8f.which;
        if (iP2x === 13 || iP2x === 38 || iP2x === 40) {
            h8b.ce9V(d8f);
            d8f.keyCode = 0;
            d8f.which = 0;
            d8f.returnvalue = false
        }
    }
    ;
    b8h.bBZ2x = function(d8f) {
        var dd0x = d8f.target || d8f.srcElement;
        if (dd0x === this.fK1x)
            return;
        this.nu3x()
    }
    ;
    b8h.bBT2x = function(d8f) {
        h8b.bh9Y(d8f);
        var r8j = a7h.I9z(this.BL8D, "selected-item")[0];
        var qS4W = d8f.target || d8f.srcElement;
        var t8l = d8f.type;
        if (a7h.by9p(qS4W, "lst"))
            return;
        if (t8l == "click") {
            a7h.w9n(r8j, "selected-item");
            a7h.y9p(qS4W, "selected-item")
        } else
            qS4W = r8j;
        var j8b = qS4W.innerHTML + " ";
        this.nu3x();
        var gp1x = this.nw3x;
        gp1x.start = this.Fu9l + 1;
        if (cK0x.cS0x.browser == "ie" && cK0x.cS0x.version < "9.0") {
            this.fK1x.value = this.fK1x.value.substring(0, gp1x.start) + this.fK1x.value.substring(gp1x.end, this.fK1x.value.length);
            gp1x.end = gp1x.start
        }
        fJ1x.Fj9a(this.fK1x, gp1x, j8b);
        h8b.z9q(this.fK1x, "keyup")
    }
    ;
    b8h.nu3x = function(d8f) {
        if (!!this.BL8D)
            a7h.X9O(this.BL8D, "display", "none");
        this.S9J()
    }
    ;
    b8h.vb6V = function(d8f) {
        if (!!this.BL8D)
            a7h.X9O(this.BL8D, "display", "block")
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), D9u = c8g("nm.w"), ch9Y = c8g("nej.ut"), bI9z = c8g("nej.ui"), b8h;
    var bPP5U = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bPN5S = a7h.em0x("m-wgt-atlist");
    var hP1x = a7h.rO4S(bPP5U);
    D9u.bBR2x = NEJ.C();
    b8h = D9u.bBR2x.O9F(bI9z.et0x);
    b8h.cl9c = function(e8e) {
        this.fB1x = {};
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.fB1x.txt = a7h.x9o(e8e.target);
        this.fB1x.data = e8e.data;
        this.fB1x.offset = e8e.offset;
        this.fB1x.rangeData = e8e.rangeData;
        this.fB1x.atIndex = e8e.atIndex;
        this.bPJ5O(e8e);
        this.bl9c(e8e);
        this.fB1x.sgtsContainer = this.o8g;
        this.fB1x.sgtsList = a7h.I9z(this.o8g, "lst");
        this.fB1x.sgtsItem = a7h.I9z(this.o8g, "f-thide");
        this.Yr4v(e8e);
        this.bPI5N = D9u.bCe2x.B9s(this.fB1x)
    }
    ;
    b8h.bD9u = function(e8e) {
        this.bH9y();
        this.bPI5N.S9J()
    }
    ;
    b8h.bZ9Q = function() {
        this.lb2x = hP1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T()
    }
    ;
    b8h.bPJ5O = function(e8e) {
        this.o8g = a7h.dq0x(a7h.hM1x(a7h.bP9G(bPN5S, e8e.data)))
    }
    ;
    b8h.Yr4v = function(e8e) {
        var bBP2x = a7h.I9z(this.o8g, "selected-item")[0];
        if (bBP2x)
            a7h.w9n(bBP2x, "selected-item");
        var cL0x = e8e.offset.x + "px";
        var gE1x = e8e.offset.y + "px";
        a7h.X9O(this.o8g, "left", cL0x);
        a7h.X9O(this.o8g, "top", gE1x)
    }
})();
(function() {
    var c8g = NEJ.P
        , v9m = c8g("nej.j")
        , fJ1x = c8g("nm.ut");
    fJ1x.bBO2x = function(bi9Z) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var cP0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var FH9y = bi9Z.match(cP0x) || [];
        for (var bd9U = 0; bd9U < FH9y.length; bd9U++) {
            FH9y[bd9U] = FH9y[bd9U].split("@")[1]
        }
        FH9y = FH9y.reverse();
        var hs1x = GUser.userId;
        var bPF5K = v9m.sX5c("mentioners" + hs1x) || [];
        var jb2x = FH9y.concat(bPF5K);
        if (jb2x.length > 10)
            jb2x = jb2x.slice(0, 10);
        v9m.uk6e("mentioners" + hs1x, jb2x)
    }
    ;
    fJ1x.bPD5I = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var hs1x = GUser.userId;
        return v9m.sX5c("mentioners" + hs1x) || []
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), cK0x = c8g("nej.p"), v9m = c8g("nej.j"), k8c = c8g("nej.u"), ch9Y = c8g("nej.ut"), D9u = c8g("nm.w"), fJ1x = c8g("nm.ut"), b8h;
    D9u.bBM2x = NEJ.C();
    b8h = D9u.bBM2x.O9F(ch9Y.cz9q);
    b8h.cl9c = function(e8e) {
        this.cs9j(e8e);
        this.bBL2x()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.fK1x = e8e.txt;
        this.o8g = e8e.body;
        this.bBK2x = e8e.before;
        this.Qu2x = e8e.flag;
        this.bPo5t = e8e.after;
        this.oU3x = [];
        if (cK0x.cS0x.browser != "ie") {
            setTimeout(function() {
                this.kQ2x()
            }
                .g8c(this), 0)
        }
        this.MS1x()
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        if (this.tu5z)
            this.tu5z.S9J();
        delete this.tu5z
    }
    ;
    b8h.MS1x = function() {
        this.bU9L([[this.fK1x, "keyup", this.bBG2x.g8c(this, this.fK1x)], [this.fK1x, "click", this.bBG2x.g8c(this, this.fK1x)], [this.fK1x, "focus", this.kQ2x.g8c(this)]])
    }
    ;
    b8h.kQ2x = function(d8f) {
        this.nw3x = fJ1x.sG4K(this.fK1x)
    }
    ;
    b8h.bBL2x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cT0x = window.GUser.userId;
        var V9M = "/api/user/getfollows/" + cT0x;
        var fC1x = v9m.bp9g(V9M, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j8b) {
                window.GFollowers = JSON.parse(j8b).follow
            }
                .g8c(this),
            onerror: function(j8b) {},
            onbeforerequest: function(j8b) {}
        })
    }
    ;
    b8h.bBF2x = function(index) {
        var A9r = this.fK1x.value, bj9a, bda6U, bdb6V, Mq1x;
        this.bBK2x.innerHTML = k8c.dM0x(A9r.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var oa3x = a7h.I9z(this.bBK2x, "j-test");
        for (var bd9U = 0; bd9U < oa3x.length; bd9U++) {
            oa3x[bd9U].innerText = " "
        }
        this.Qu2x.innerHTML = A9r.charAt(index);
        this.bPo5t.innerHTML = k8c.dM0x(A9r.substr(index + 1, A9r.length));
        Mq1x = parseInt(a7h.db0x(this.fK1x, "lineHeight"));
        a7h.X9O(this.o8g, "display", "block");
        bda6U = a7h.hL1x(this.Qu2x, this.o8g);
        bdb6V = a7h.hL1x(this.fK1x);
        a7h.X9O(this.o8g, "display", "none");
        var cL0x = bda6U.x + bdb6V.x;
        var gE1x = bda6U.y + bdb6V.y + Mq1x;
        bj9a = {
            x: cL0x,
            y: gE1x
        };
        this.bPj5o(bj9a)
    }
    ;
    b8h.bBG2x = function(ez0x, d8f) {
        h8b.ce9V(d8f);
        var ez0x = ez0x;
        var A9r = ez0x.value;
        var bo9f = A9r.length;
        var s8k = fJ1x.sG4K(ez0x).start;
        var bBD2x = 0;
        var iP2x = d8f.keyCode || d8f.which;
        var jb2x;
        this.nw3x = fJ1x.sG4K(ez0x);
        var bBC2x = false;
        for (var i = 1; i < 20; i++) {
            jb2x = s8k - i;
            if (A9r.charAt(jb2x) === " ")
                break;
            if (A9r.charAt(jb2x) === "@") {
                bBC2x = true;
                this.Fu9l = bBD2x = jb2x;
                break
            }
        }
        if (bBC2x && d8f.shiftKey === false && iP2x !== 38 && iP2x !== 40) {
            if (iP2x !== 27 && iP2x !== 13) {
                this.tu5z ? this.tu5z.S9J() : null;
                this.bBF2x(bBD2x)
            }
        } else if (iP2x !== 38 && iP2x !== 40 && d8f.keyCode !== 32) {
            this.tu5z ? this.tu5z.S9J() : null
        }
    }
    ;
    b8h.bPj5o = function(bj9a) {
        var bj9a = bj9a;
        var j8b = this.FW9N();
        var e8e = {
            parent: document.body,
            offset: bj9a,
            data: j8b,
            target: this.fK1x,
            rangeData: this.nw3x,
            atIndex: this.Fu9l
        };
        this.tu5z ? this.tu5z.S9J() : null;
        this.tu5z = D9u.bBR2x.B9s(e8e)
    }
    ;
    b8h.FW9N = function() {
        var bOX5c = fJ1x.sG4K(this.fK1x).start;
        var bOU5Z = this.Fu9l + 1;
        var bBw2x = fJ1x.bPD5I() || [];
        var bBv2x = [];
        var bC9t = this.fK1x.value.substring(bOU5Z, bOX5c).toLowerCase();
        bC9t = bC9t.replace(/\[/g, "\\[");
        bC9t = bC9t.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.oU3x = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.oU3x = [];
        if (!this.oU3x[0])
            this.bBL2x();
        for (var bd9U = 0; bd9U < bBw2x.length; bd9U++) {
            for (var v9m = 0; v9m < this.oU3x.length; v9m++) {
                if (this.oU3x[v9m].nickname == bBw2x[bd9U])
                    bBv2x.push(this.oU3x[v9m])
            }
        }
        this.oU3x = k8c.ckt1x(this.oU3x, bBv2x, {
            union: true,
            begin: true
        });
        var bOL5Q = this.oU3x.length;
        var Xc4g = [];
        var Nm1x, Nl1x;
        if (!this.oU3x[0])
            return {
                suggests: Xc4g
            };
        for (var i = 0; i < bOL5Q; i++) {
            Nm1x = this.oU3x[i].nickname.toLowerCase().search(bC9t);
            Nl1x = this.oU3x[i].py ? this.oU3x[i].py.toLowerCase().search(bC9t) : -1;
            if (Nm1x !== -1 || Nl1x != -1)
                Xc4g.push(this.oU3x[i]);
            if (Xc4g.length === 10)
                break
        }
        return {
            suggests: Xc4g
        }
    }
    ;
    b8h.Md1x = function() {
        var gp1x = this.nw3x || {
            text: "",
            start: 0,
            end: 0
        };
        h8b.z9q(this.fK1x, "focus");
        fJ1x.Fj9a(this.fK1x, gp1x, "@");
        this.nw3x = fJ1x.sG4K(this.fK1x);
        this.Fu9l = gp1x.start;
        this.bBF2x(this.Fu9l)
    }
    ;
    b8h.EL9C = function() {
        if (this.tu5z)
            this.tu5z.S9J()
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), v9m = c8g("nej.j"), D9u = c8g("nm.w"), ch9Y = c8g("nej.ut"), bI9z = c8g("nej.ui"), b8h;
    var bOD5I = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bOC5H = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gc1x = a7h.hM1x(bOC5H);
    var hP1x = a7h.rO4S(bOD5I);
    D9u.Ma1x = NEJ.C();
    b8h = D9u.Ma1x.O9F(bI9z.et0x);
    b8h.cl9c = function(e8e) {
        this.fB1x = {};
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e);
        this.fB1x.txt = a7h.x9o(e8e.target);
        this.NT1x();
        this.LV1x = D9u.bBM2x.B9s(this.fB1x)
    }
    ;
    b8h.bD9u = function(e8e) {
        this.bH9y();
        this.LV1x.S9J()
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = gc1x;
        this.lb2x = hP1x
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.cQ0x(a7h.x9o(this.o8g));
        this.fB1x.body = this.o8g;
        this.fB1x.before = i8a[0];
        this.fB1x.flag = i8a[1];
        this.fB1x.after = i8a[2]
    }
    ;
    b8h.NT1x = function() {
        var pL4P = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pL4P.length; i++) {
            if (pL4P[i] === "width" && a7h.db0x(this.fB1x.txt, pL4P[i]) == "100%") {
                a7h.X9O(this.o8g, pL4P[i], this.fB1x.txt.offsetWidth + "px");
                continue
            }
            a7h.X9O(this.o8g, pL4P[i], a7h.db0x(this.fB1x.txt, pL4P[i]))
        }
    }
    ;
    b8h.Md1x = function() {
        this.LV1x.Md1x()
    }
    ;
    b8h.EL9C = function() {
        this.LV1x.EL9C()
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, eU0x = NEJ.R, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), jC2x = c8g("nm.c"), R9I = {}, b8h;
    if (!!jC2x.bdx6r)
        return;
    jC2x.bdx6r = NEJ.C();
    b8h = jC2x.bdx6r.O9F(H9y.cz9q);
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y()
    }
    ;
    b8h.Gh9Y = function(eI0x, dr0x) {
        if (R9I[eI0x]) {
            this.hr1x("register commonJST[" + eI0x + "] duplicate");
            return
        }
        if (!k8c.gf1x(dr0x)) {
            dr0x = ctl.comJST.bOs5x(eI0x, dr0x)
        }
        R9I[eI0x] = dr0x
    }
    ;
    b8h.bOr5w = function(Xl4p) {
        if (k8c.el0x(Xl4p)) {
            k8c.be9V(Xl4p, function(r8j) {
                ctl.comJST.Gh9Y.apply(this, r8j)
            }, this)
        } else if (k8c.kg2x(Xl4p)) {
            k8c.ed0x(Xl4p, function(eL0x, J9A) {
                ctl.comJST.Gh9Y(J9A, eL0x)
            })
        }
    }
    ;
    b8h.bOs5x = function(eI0x, tU5Z, bBh2x) {
        tU5Z = tU5Z || {};
        NEJ.X(tU5Z, {
            comJST: this.oX3x
        });
        if (tU5Z.resetDataName && !k8c.el0x(tU5Z.resetDataName)) {
            tU5Z.resetDataName = [tU5Z.resetDataName]
        }
        return function() {
            var j8b = arguments[0]
                , jd2x = arguments[1];
            if (tU5Z.resetDataName) {
                var jb2x = {};
                for (var i = 0, ii = tU5Z.resetDataName.length; i < ii; i++) {
                    jb2x[tU5Z.resetDataName[i]] = arguments[i]
                }
                j8b = jb2x;
                jd2x = arguments[ii]
            }
            NEJ.X(j8b, tU5Z, dE0x);
            if (bBh2x) {
                jd2x = jd2x || {};
                NEJ.X(jd2x, bBh2x)
            }
            return a7h.bP9G(eI0x, j8b, jd2x)
        }
    }
    ;
    b8h.oX3x = function(eI0x) {
        if (!R9I[eI0x]) {
            this.hr1x("commonJST[" + eI0x + "] is unregister");
            return ""
        } else {
            return R9I[eI0x].apply(null, eU0x.slice.call(arguments, 1))
        }
    }
    ;
    b8h.dump = function() {
        return R9I
    }
    ;
    b8h.hr1x = function(bOp5u) {
        if (console && console.log) {
            console.log(bOp5u)
        }
    }
    ;
    var dE0x = function(eL0x, J9A) {
        return J9A == "resetDataName"
    };
    c8g("ctl").comJST = jC2x.bdx6r.fV1x()
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, bm9d = NEJ.F, eU0x = NEJ.R, a7h = c8g("nej.e"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), jC2x = c8g("nm.c"), R9I = {}, b8h;
    if (!!jC2x.bdI6C)
        return;
    jC2x.bdI6C = NEJ.C();
    b8h = jC2x.bdI6C.O9F(H9y.cz9q);
    b8h.cl9c = function() {
        this.cs9j();
        var e8e = {
            "com-mv-artists": function(fo1x, dJ0x, CC8u, bdJ6D) {
                return a7h.bP9G("com-mv-artists", {
                    artists: fo1x,
                    clazz: dJ0x,
                    boxClazz: bdJ6D,
                    mark: CC8u || function(cM0x) {
                        return cM0x
                    }
                    ,
                    escape: k8c.dM0x,
                    comJST: ctl.comJST.oX3x
                })
            },
            "com-album-artists": function(fo1x, dJ0x, CC8u, bdJ6D) {
                return a7h.bP9G("com-album-artists", {
                    artists: fo1x,
                    clazz: dJ0x,
                    boxClazz: bdJ6D,
                    mark: CC8u || function(cM0x) {
                        return cM0x
                    }
                    ,
                    escape: k8c.dM0x,
                    comJST: ctl.comJST.oX3x
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k8c.dM0x
            }
        };
        for (var C9t in e8e) {
            ctl.comJST.Gh9Y(C9t, e8e[C9t])
        }
    }
    ;
    b8h.bk9b = function(e8e) {
        this.bl9c(e8e)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y()
    }
    ;
    c8g("ctl").comJSTUtil = jC2x.bdI6C.fV1x()
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, a7h = c8g("nej.e"), cK0x = c8g("nej.p"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), v9m = c8g("nej.j"), D9u = c8g("nm.w"), fJ1x = c8g("nm.ut"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), n8f = c8g("nm.l"), Xp4t = [2, 3], dD0x = ["sn", "db"], b8h, K9B, bOj5o = {
        13: "playlist",
        17: "djprogram",
        18: "song",
        19: "album",
        20: "artist",
        21: "mv",
        24: "topic",
        25: "activity",
        70: "djradio",
        38: "concert",
        39: "video"
    }, Xq4u = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频"
    }, bBe2x = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by "
    }, bOh5m = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, Co8g = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    };
    n8f.vU6O = NEJ.C();
    b8h = n8f.vU6O.O9F(n8f.dV0x);
    K9B = n8f.vU6O.cg9X;
    b8h.bk9b = function(e8e) {
        if (e8e.onclose === undefined) {
            e8e.onclose = this.bBd2x.g8c(this)
        }
        this.bl9c(e8e);
        this.AA8s = e8e.isPub;
        this.jD2x = e8e.rid || -1;
        this.es0x = e8e.type || -1;
        this.bdX6R = e8e.purl;
        this.XA4E = e8e.name || "";
        this.LK1x = e8e.author || "";
        this.bea6U = e8e.authors || "";
        this.XI4M = e8e.actId;
        this.XK4O = e8e.actName;
        this.bAZ2x = e8e.title;
        this.XN4R = {};
        this.bNW5b = e8e.mesg || "";
        this.bNV5a = e8e.placeholder || "说点什么吧";
        this.bek6e = e8e.hideTip;
        var i8a, fN1x = +(new Date);
        try {
            i8a = top.localCache.x9o("user") || {}
        } catch (e) {
            i8a = {}
        }
        for (var i = 0, i8a = i8a.bindings || [], er0x; i < i8a.length; ++i) {
            er0x = !i8a[i].tokenJsonStr ? null : JSON.parse(i8a[i].tokenJsonStr);
            if (!er0x || er0x.expires_in === undefined)
                continue;
            var XU4Y = parseInt(er0x.expires_in)
                , XW4a = parseInt(i8a[i].refreshTime)
                , bNU5Z = (XU4Y + XW4a) * 1e3 - 5 * 60 * 1e3;
            if (bNU5Z > fN1x)
                this.XN4R[i8a[i].type] = !0
        }
        this.up6j = D9u.CF8x.B9s({
            parent: this.XX4b,
            err: this.bAW2x
        });
        if (this.hc1x) {
            this.hc1x.S9J()
        }
        this.hc1x = D9u.Ma1x.B9s({
            parent: document.body,
            target: this.eP0x
        });
        if (this.es0x == 24 || this.es0x == 21 || this.sF4J()) {
            this.wg6a.style.display = "none"
        } else {
            this.wg6a.style.display = "";
            this.nx3x = D9u.bkE8w.B9s({
                parent: this.beF6z,
                button: this.wg6a,
                onstartupload: this.bAV2x.g8c(this, true),
                onfinishupload: this.bAV2x.g8c(this, false)
            })
        }
        if (this.sF4J()) {
            this.of3x.innerText = "";
            a7h.y9p(this.of3x, "info-video");
            this.GJ9A = D9u.bAU2x.B9s({
                parent: this.of3x,
                windowBody: this.o8g,
                onstepping: this.bNO5T.g8c(this),
                oncancel: function() {
                    this.bq9h()
                }
                    .g8c(this)
            });
            if (e8e.extError) {
                this.GJ9A.beO6I({
                    agent: e8e.videoUploadAgent,
                    errorCode: -600
                })
            } else {
                this.GJ9A.Gw9n({
                    agent: e8e.videoUploadAgent,
                    fileName: e8e.videoFileName
                })
            }
            a7h.y9p(this.beP6J, "f-hide")
        } else {
            a7h.w9n(this.beP6J, "f-hide")
        }
    }
    ;
    b8h.bD9u = function() {
        this.bH9y();
        if (this.up6j) {
            this.up6j.S9J();
            delete this.up6j
        }
        if (this.hc1x) {
            this.hc1x.S9J();
            delete this.hc1x
        }
        if (this.nx3x) {
            this.nx3x.S9J();
            delete this.nx3x
        }
        if (this.lQ2x) {
            this.lQ2x.S9J();
            delete this.lQ2x
        }
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = "m-wgt-sharewin"
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        this.bAT2x = a7h.cQ0x(this.o8g)[0];
        var bn9e = a7h.I9z(this.o8g, "j-flag");
        this.pl3x = bn9e.shift();
        this.bAW2x = bn9e.shift();
        this.XX4b = bn9e.shift();
        this.eP0x = bn9e.shift();
        this.of3x = bn9e.shift();
        this.beV6P = bn9e.shift();
        this.bNI5N = bn9e.shift();
        this.wg6a = bn9e.shift();
        this.ci9Z = bn9e.shift();
        this.beF6z = bn9e.shift();
        this.yR7K = bn9e.shift();
        this.cwd3x = bn9e.shift();
        this.beP6J = bn9e.shift();
        this.ee0x = bn9e.shift();
        this.GQ9H = a7h.I9z(this.beP6J, "j-t");
        this.Au8m = H9y.Bc8U.B9s({
            list: a7h.cQ0x(this.pl3x),
            selected: "z-slt",
            onchange: this.bfb6V.g8c(this)
        });
        if (cK0x.cS0x.browser == "ie" && cK0x.cS0x.version < "8.0") {
            a7h.X9O(this.XX4b, "position", "relative");
            a7h.X9O(this.XX4b, "zIndex", "10")
        }
        h8b.q8i(window, "snsbind", this.Lm1x.g8c(this));
        h8b.q8i(this.eP0x, "input", this.fl1x.g8c(this));
        h8b.q8i(this.eP0x, "keyup", this.sY5d.g8c(this));
        h8b.q8i(this.o8g, "click", this.cx9o.g8c(this));
        this.P9G = p8h.biv7o.B9s();
        this.P9G.q8i("onshareall", this.Yb4f.g8c(this, 0));
        this.P9G.q8i("onshareerror", this.hO1x.g8c(this));
        this.P9G.q8i("onshareprivate", this.Yb4f.g8c(this, 1));
        this.Ye4i = p8h.yn7g.B9s();
        this.hr1x = p8h.hK1x.B9s();
        try {
            this.Lj1x = top.api.sharePermission
        } catch (e) {}
        if (!this.Lj1x) {
            this.Lj1x = Co8g;
            v9m.bp9g("/api/event/user/permission", {
                type: "json",
                onload: function(d8f) {
                    if (d8f.code == 200) {
                        this.Lj1x = NEJ.EX(Co8g, d8f)
                    }
                }
                    .g8c(this)
            })
        }
    }
    ;
    b8h.bfb6V = function(d8f) {
        d8f.index == 0 ? a7h.w9n(this.bAT2x, "m-plshare") : a7h.y9p(this.bAT2x, "m-plshare");
        this.XX4b.style.display = d8f.index == 0 ? "none" : "";
        this.bNI5N.style.display = d8f.index == 0 ? "" : "none";
        this.wg6a.style.display = d8f.index == 0 ? "" : "none";
        if (this.es0x == 24 || this.es0x == 21) {
            this.wg6a.style.display = "none"
        }
        this.bAW2x.style.display = "none";
        this.eP0x.value = "";
        this.bT9K();
        this.CK8C();
        if (d8f.index == 0) {
            var dm0x = a7h.db0x(this.eP0x, "width");
            if (dm0x == "auto" || !dm0x) {
                return
            } else {
                if (this.hc1x) {
                    this.hc1x.S9J()
                }
                this.hc1x = D9u.Ma1x.B9s({
                    parent: document.body,
                    target: this.eP0x
                })
            }
            this.beF6z.style.display = ""
        } else {
            if (this.hc1x) {
                this.hc1x.S9J();
                delete this.hc1x
            }
            this.beF6z.style.display = "none"
        }
    }
    ;
    b8h.cx9o = function(d8f) {
        var f8d = h8b.U9L(d8f, "d:action");
        if (!f8d)
            return;
        if (a7h.u8m(f8d, "action") == "search") {
            if (!this.sF4J()) {
                h8b.ce9V(d8f)
            }
        } else if (a7h.u8m(f8d, "default") === undefined) {
            h8b.ce9V(d8f)
        }
        switch (a7h.u8m(f8d, "action")) {
            case "txt":
                this.kQ2x();
                break;
            case "search":
                if (this.sF4J()) {} else if (this.AA8s && this.es0x != 24) {
                    if (this.lQ2x) {
                        this.lQ2x.S9J()
                    }
                    this.lQ2x = D9u.bpy9p.B9s({
                        parent: this.o8g.parentNode,
                        onfinish: this.bfj6d.g8c(this),
                        oncancel: this.bNC4G.g8c(this)
                    });
                    this.bfm6g = true;
                    this.o8g.style.display = "none";
                    this.yf7Y(this.jD2x > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case "at":
                h8b.rD4H(d8f);
                !!this.gQ1x && this.gQ1x.bq9h();
                this.hc1x.Md1x();
                this.fx1x();
                break;
            case "emot":
                h8b.rD4H(d8f);
                !!this.hc1x && this.hc1x.EL9C();
                if (!this.gQ1x) {
                    this.gQ1x = n8f.EN9E.B9s({
                        parent: this.beV6P
                    });
                    this.gQ1x.q8i("onselect", this.wf6Z.g8c(this))
                }
                this.gQ1x.N9E();
                break;
            case "upload":
                break;
            case "sns":
                h8b.bh9Y(d8f);
                var bfq6k, bC9t, t8l = a7h.u8m(f8d, "type");
                if (!this.XN4R[t8l]) {
                    bfq6k = f8d.href.split("?");
                    bC9t = k8c.hi1x(bfq6k[1]);
                    bC9t["csrf_token"] = v9m.gG1x("__csrf");
                    top.open(bfq6k[0] + "?" + k8c.df0x(bC9t));
                    return
                }
                var bv9m = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l8d.Ak8c(f8d, "u-slg-" + bv9m[t8l] + "-gray");
                break;
            case "close":
                !!this.gQ1x && this.gQ1x.bq9h();
                this.bBd2x();
                break;
            case "share":
                h8b.bh9Y(d8f);
                if (this.sF4J()) {
                    if (!a7h.by9p(f8d, "u-btn2-2-dis")) {
                        this.csW3x()
                    }
                } else if (a7h.by9p(f8d, "u-btn2-2-dis")) {
                    if (!this.Lj1x.pubEventWithoutResource && !(this.jD2x > 0)) {
                        this.csU3x()
                    } else {}
                } else if (!(this.jD2x > 0) && !this.eP0x.value && this.nx3x && this.nx3x.PH2x().length == 0) {
                    n8f.Z9Q.N9E({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.csS3x()
                }
                break
        }
    }
    ;
    b8h.csU3x = function() {
        var rV4Z = 0, bfy7r = function() {
            if (rV4Z % 2) {
                a7h.w9n(this.of3x, "z-show")
            } else {
                a7h.y9p(this.of3x, "z-show")
            }
            rV4Z++;
            if (rV4Z > 5) {
                clearInterval(eZ0x)
            }
        }, eZ0x;
        return function() {
            rV4Z = 0;
            clearInterval(eZ0x);
            eZ0x = setInterval(bfy7r.g8c(this), 200)
        }
    }();
    b8h.Lm1x = function(m8e) {
        m8e = m8e.result;
        this.XN4R[m8e.type] = !0;
        var s8k = k8c.cV0x(Xp4t, m8e.type)
            , cd9U = "u-slg-" + dD0x[s8k] + "-gray";
        a7h.w9n(this.GQ9H[s8k], cd9U)
    }
    ;
    b8h.bfj6d = function(bt9k) {
        var j8b = bt9k.data;
        this.jD2x = bt9k.id;
        this.es0x = bt9k.type;
        this.o8g.style.display = "";
        this.yf7Y(this.bAZ2x);
        this.lQ2x && this.lQ2x.S9J();
        this.bfm6g = false;
        this.bdX6R = j8b.picUrl;
        this.XA4E = j8b.title || "";
        this.LK1x = j8b.author || "";
        this.bea6U = j8b.authors || "";
        this.csL3x();
        this.Ld1x()
    }
    ;
    b8h.bNO5T = function(e8e) {
        this.bdX6R = e8e.coverUrl;
        this.Lc1x = e8e;
        this.Ld1x()
    }
    ;
    b8h.bNC4G = function() {
        this.lQ2x && this.lQ2x.S9J();
        this.o8g.style.display = "";
        this.yf7Y(this.bAZ2x);
        this.bfm6g = false;
        this.Ld1x()
    }
    ;
    b8h.wf6Z = function(d8f) {
        var bi9Z = "[" + d8f.text + "]";
        fJ1x.Fj9a(this.eP0x, this.nw3x, bi9Z);
        this.fx1x()
    }
    ;
    b8h.fl1x = function(d8f) {
        cK0x.cS0x.browser == "ie" && cK0x.cS0x.version < "7.0" ? setTimeout(this.fx1x.g8c(this), 0) : this.fx1x()
    }
    ;
    b8h.sY5d = function(d8f) {
        this.kQ2x();
        if (d8f.keyCode == 8)
            this.fx1x()
    }
    ;
    b8h.fx1x = function() {
        this.kQ2x();
        this.CK8C()
    }
    ;
    b8h.CK8C = function() {
        var bo9f = Math.ceil(k8c.fi1x(this.eP0x.value.trim()) / 2);
        this.ci9Z.innerText = 140 - bo9f;
        bo9f > 140 ? a7h.ev0x(this.ci9Z, "s-fc4", "s-fc6") : a7h.ev0x(this.ci9Z, "s-fc6", "s-fc4")
    }
    ;
    b8h.csS3x = function() {
        if (this.cu9l())
            return;
        if (k8c.fi1x(this.eP0x.value.trim()) > 280) {
            this.bT9K("字数超过140个字符");
            return
        }
        var t8l = this.Au8m.ru4y(), j8b;
        if (t8l == 0) {
            for (var i = 0, xT7M = []; i < this.GQ9H.length; ++i) {
                if (!a7h.by9p(this.GQ9H[i], "u-slg-" + dD0x[i] + "-gray"))
                    xT7M.push(Xp4t[i])
            }
            this.cu9l(!0);
            j8b = {
                id: this.jD2x,
                msg: this.eP0x.value.trim(),
                type: this.Ym4q(this.es0x),
                picUrl: this.bdX6R,
                snsTypes: xT7M.join(","),
                isPub: this.AA8s
            };
            if (this.XI4M > 0) {
                j8b.actId = this.XI4M;
                if (this.XK4O) {
                    j8b.msg = "#" + this.XK4O + "#" + j8b.msg
                }
            }
            var mU3x = this.nx3x && this.nx3x.PH2x();
            if (mU3x && mU3x.length) {
                j8b.pics = mU3x
            }
            this.P9G.bVf7Y(j8b)
        } else {
            var rJ4N = this.up6j.Nu1x();
            if (rJ4N.length <= 0) {
                this.bT9K("请至少选择一位好友");
                return
            }
            this.P9G.bVc7V({
                data: {
                    id: this.jD2x,
                    msg: this.eP0x.value.trim(),
                    type: this.Ym4q(this.es0x),
                    userIds: "[" + rJ4N.join(",") + "]"
                }
            })
        }
    }
    ;
    b8h.csW3x = function() {
        if (this.cu9l()) {
            return
        }
        this.hr1x.gg1x("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k8c.fi1x(this.eP0x.value.trim()) > 280) {
            this.bT9K("字数超过140个字符");
            return
        }
        for (var i = 0, xT7M = []; i < this.GQ9H.length; ++i) {
            if (!a7h.by9p(this.GQ9H[i], "u-slg-" + dD0x[i] + "-gray"))
                xT7M.push(Xp4t[i])
        }
        this.cu9l(!0);
        var vs6m = this.Lc1x.fileInfo
            , j8b = {
            msg: this.eP0x.value.trim(),
            type: "video"
        }
            , csJ3x = {
            vid: vs6m.vid,
            coverId: this.Lc1x.coverId,
            nosKey: vs6m.objectKey,
            size: vs6m.size,
            duration: Math.floor(vs6m.duration / 1e3),
            width: vs6m.width,
            height: vs6m.height
        };
        if (this.XI4M > 0) {
            j8b.actId = this.XI4M;
            if (this.XK4O) {
                j8b.msg = "#" + this.XK4O + "#" + j8b.msg
            }
        }
        j8b.videoinfo = JSON.stringify(csJ3x);
        this.P9G.bVa7T({
            data: j8b,
            snsTypes: ""
        })
    }
    ;
    b8h.Yb4f = function(t8l, m8e) {
        this.cu9l(!1);
        this.bq9h();
        if (!this.bek6e) {
            if (this.sF4J()) {
                n8f.Z9Q.N9E({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n8f.Z9Q.N9E({
                    tip: "分享成功" + (m8e.point > 0 ? ' 获得<em class="s-fc6">' + m8e.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h8b.z9q(n8f.vU6O, "sharesuccess", {
            isPrivate: t8l,
            rid: this.jD2x,
            rtype: this.es0x,
            data: m8e.event
        });
        this.z9q("onshare")
    }
    ;
    b8h.hO1x = function(m8e) {
        this.cu9l(!1);
        var bF9w = "分享失败";
        if (m8e.code) {
            switch (m8e.code) {
                case 404:
                    bF9w = "分享的资源不存在";
                    break;
                case 407:
                    bF9w = "输入内容包含有关键字";
                    break;
                case 408:
                    bF9w = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF9w = m8e.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l8d.fc0x({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.bT9K(bF9w)
    }
    ;
    b8h.kQ2x = function() {
        this.nw3x = fJ1x.sG4K(this.eP0x)
    }
    ;
    b8h.bT9K = function(bF9w) {
        this.dy0x(this.ee0x, bF9w)
    }
    ;
    b8h.cu9l = function(cC0x) {
        return this.dN0x(this.yR7K, cC0x, "分享", "分享中...")
    }
    ;
    b8h.Ym4q = function(jn2x) {
        return bOj5o[jn2x] || ""
    }
    ;
    b8h.csi2x = function() {
        var ez0x, sT5Y = this.Ym4q(this.es0x);
        this.of3x.style.display = "";
        if (this.jD2x <= 0) {
            this.of3x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.XA4E) {
                this.of3x.style.display = "none";
                return
            }
            var Yp4t = this.AA8s && this.es0x != 24;
            ez0x = (Xq4u[sT5Y] ? Xq4u[sT5Y] + "：" : "") + this.XA4E + (bBe2x[sT5Y] || " ") + (sT5Y == "mv" || sT5Y == "album" ? this.bea6U || this.LK1x : this.LK1x);
            a7h.dT0x(this.of3x, "m-xwgt-share-infobar", {
                canChange: Yp4t,
                info: ez0x
            });
            if (Yp4t) {
                a7h.w9n(this.of3x, "z-dis")
            } else {
                a7h.y9p(this.of3x, "z-dis")
            }
        }
        a7h.w9n(this.of3x, "info-video")
    }
    ;
    b8h.csL3x = function() {
        var sT5Y = this.Ym4q(this.es0x)
            , ez0x = (Xq4u[sT5Y] ? Xq4u[sT5Y] + "：" : "") + this.XA4E + (bBe2x[sT5Y] || " ") + (sT5Y == "mv" || sT5Y == "album" ? this.bea6U || this.LK1x : this.LK1x);
        Yp4t = this.AA8s && this.es0x != 24;
        if (this.sF4J()) {
            a7h.y9p(this.of3x, "info-video")
        } else {
            a7h.w9n(this.of3x, "info-video");
            a7h.dT0x(this.of3x, "m-xwgt-share-infobar", {
                canChange: Yp4t,
                isPub: this.AA8s,
                info: ez0x
            })
        }
    }
    ;
    b8h.bAI2x = function() {
        var Hn0x = this.eP0x.value;
        if (this.AA8s) {
            if (!!this.bfm6g) {
                return !!Hn0x && !!Hn0x.length || !!this.nx3x && this.nx3x.PH2x().length > 0
            } else {
                return this.jD2x > 0 || !!Hn0x && !!Hn0x.length || !!this.nx3x && this.nx3x.PH2x().length > 0
            }
        } else {
            return !!Hn0x && !!Hn0x.length || !!this.nx3x && this.nx3x.PH2x().length > 0
        }
    }
    ;
    b8h.Ld1x = function() {
        var bfP7I = false;
        if (this.sF4J()) {
            if (this.Lc1x && this.Lc1x.fileInfo && this.Lc1x.coverId) {
                bfP7I = true
            }
        } else if (!this.AA8s || this.Lj1x.pubEventWithoutResource || this.jD2x > 0) {
            bfP7I = true
        }
        if (bfP7I) {
            a7h.w9n(this.yR7K, "u-btn2-2-dis")
        } else {
            a7h.y9p(this.yR7K, "u-btn2-2-dis")
        }
    }
    ;
    b8h.bAV2x = function(bfQ7J) {
        if (bfQ7J) {
            a7h.y9p(this.yR7K, "u-btn2-2-dis")
        } else {
            this.Ld1x()
        }
    }
    ;
    b8h.bBd2x = function(d8f) {
        if (d8f) {
            d8f.stopped = true
        }
        if (this.sF4J()) {
            this.hr1x.gg1x("click", {
                target: d8f ? "cross" : "cancel",
                targetid: "button",
                page: "sharevideo"
            });
            this.GJ9A.crZ2x(this.bAI2x())
        } else if (this.bAI2x()) {
            l8d.gP1x({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(W9N) {
                    if (W9N == "ok") {
                        this.bq9h()
                    }
                }
                    .g8c(this)
            })
        } else {
            this.bq9h()
        }
    }
    ;
    b8h.yf7Y = function(eG0x, ds0x) {
        this.nn3x.yw7p(eG0x, ds0x)
    }
    ;
    b8h.Ys4w = function(t8l) {
        this.hr1x.gg1x("page", {
            type: t8l
        })
    }
    ;
    b8h.sF4J = function() {
        return this.es0x == 39
    }
    ;
    b8h.N9E = function() {
        var crU2x = function(r8j, s8k) {
            var cd9U = "u-slg-" + dD0x[s8k] + "-gray";
            !this.XN4R[Xp4t[s8k]] ? a7h.y9p(r8j, cd9U) : a7h.w9n(r8j, cd9U)
        };
        return function() {
            if (this.sF4J()) {
                this.yf7Y("添加视频")
            }
            K9B.N9E.call(this);
            this.o8g.style.display = "";
            this.bT9K();
            this.cu9l(!1);
            this.Au8m.Gw9n(0);
            this.eP0x.focus();
            this.eP0x.value = this.bNW5b || "";
            this.eP0x.placeholder = this.bNV5a || "";
            if (!this.sF4J()) {
                this.csi2x()
            }
            this.fx1x();
            this.up6j.bQJ6D();
            k8c.be9V(this.GQ9H, crU2x, this);
            this.kQ2x();
            if (this.AA8s) {
                this.pl3x.style.display = "none"
            } else {
                this.pl3x.style.display = ""
            }
            this.Ld1x()
        }
    }();
    b8h.bq9h = function(d8f) {
        K9B.bq9h.call(this);
        !!this.gQ1x && this.gQ1x.bq9h();
        if (this.up6j) {
            this.up6j.S9J();
            delete this.up6j
        }
        if (this.hc1x) {
            this.hc1x.S9J();
            delete this.hc1x
        }
        if (this.nx3x) {
            this.nx3x.S9J();
            delete this.nx3x
        }
        if (this.GJ9A) {
            this.GJ9A = this.GJ9A.S9J()
        }
        if (this.lQ2x) {
            this.lQ2x.S9J();
            delete this.lQ2x
        }
    }
    ;
    l8d.lP2x = function(e8e) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e8e.title === undefined) {
            e8e.title = "分享"
        }
        if (e8e.actId && e8e.type != 39) {
            var t8l = bOh5m[e8e.resourceType], dw0x = e8e.resourceJson, hl1x;
            if (k8c.fe1x(dw0x)) {
                try {
                    dw0x = JSON.parse(dw0x)
                } catch (e) {}
            }
            if (t8l) {
                hl1x = l8d.bHy3x(t8l, dw0x);
                e8e.name = hl1x.title;
                e8e.author = hl1x.author;
                e8e.picUrl = hl1x.picUrl;
                e8e.type = t8l;
                e8e.rid = (dw0x || []).id
            }
        }
        n8f.vU6O.N9E(e8e)
    }
    ;
    H9y.ft1x.B9s({
        element: n8f.vU6O,
        event: ["sharesuccess"]
    })
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, h8b = c8g("nej.v"), a7h = c8g("nej.e"), v9m = c8g("nej.j"), n8f = c8g("nm.l"), D9u = c8g("nm.w"), bI9z = c8g("nej.ui"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), b8h, K9B;
    n8f.Yu4y = NEJ.C();
    b8h = n8f.Yu4y.O9F(n8f.dV0x);
    K9B = n8f.Yu4y.cg9X;
    b8h.cl9c = function() {
        this.cs9j()
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        var i8a = a7h.I9z(this.o8g, "j-flag");
        h8b.q8i(i8a[0], "click", this.Em9d.g8c(this))
    }
    ;
    b8h.bZ9Q = function() {
        this.ca9R = "m-import-ok"
    }
    ;
    b8h.bk9b = function(e8e) {
        e8e.parent = e8e.parent || document.body;
        e8e.title = "歌曲同步完成";
        this.bl9c(e8e)
    }
    ;
    b8h.bD9u = function() {
        this.bH9y()
    }
    ;
    b8h.Em9d = function(d8f) {
        this.bq9h();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
    ;
    b8h.zX8P = function() {
        this.bq9h()
    }
    ;
    b8h.bEM2x = function(d8f) {
        if (d8f.keyCode == 13)
            this.BM8E()
    }
})();
(function() {
    var c8g = NEJ.P, Y9P = NEJ.O, h8b = c8g("nej.v"), a7h = c8g("nej.e"), v9m = c8g("nej.j"), M9D = c8g("nej.p"), k8c = c8g("nej.u"), n8f = c8g("nm.l"), D9u = c8g("nm.w"), bI9z = c8g("nej.ui"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), b8h, K9B;
    n8f.bAG2x = NEJ.C();
    b8h = n8f.bAG2x.O9F(n8f.dV0x);
    b8h.bZ9Q = function() {
        this.ca9R = "m-programtips-layer"
    }
    ;
    b8h.bR9I = function() {
        this.cc9T();
        this.bV9M = a7h.I9z(this.o8g, "j-flag")
    }
    ;
    b8h.bk9b = function(e8e) {
        e8e.clazz = " m-layer-programtips";
        e8e.parent = e8e.parent || document.body;
        e8e.title = "付费内容提示";
        e8e.draggable = !0;
        e8e.destroyalbe = !0;
        e8e.mask = true;
        this.bl9c(e8e);
        this.gv1x = e8e.id;
        this.crI2x = e8e.radiotype;
        this.kK2x = location.protocol + "//" + (this.crG2x() || "music.163.com") + "/m/" + this.crI2x + "?id=" + this.gv1x;
        this.crE2x()
    }
    ;
    b8h.bD9u = function() {
        this.bH9y()
    }
    ;
    b8h.zX8P = function() {
        this.bq9h()
    }
    ;
    b8h.Em9d = function(d8f) {
        this.z9q("onok", A9r);
        this.bq9h()
    }
    ;
    l8d.bAF2x = function(e8e) {
        n8f.bAG2x.B9s(e8e).N9E()
    }
    ;
    b8h.crE2x = function() {
        v9m.bp9g("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k8c.df0x({
                url: this.kK2x,
                size: 180
            }),
            onload: function(j8b) {
                if (j8b.code == 200) {
                    this.crw2x(j8b.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
                .g8c(this)
        })
    }
    ;
    b8h.crG2x = function() {
        var cru2x = location.host;
        if (cru2x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
    ;
    b8h.crw2x = function(jR2x) {
        this.bV9M[0].style.backgroundImage = "url(" + jR2x + ")"
    }
})();
(function() {
    var c8g = NEJ.P, a7h = c8g("nej.e"), cK0x = c8g("nej.p"), h8b = c8g("nej.v"), k8c = c8g("nej.u"), H9y = c8g("nej.ut"), v9m = c8g("nej.j"), p8h = c8g("nm.d"), l8d = c8g("nm.x"), F9w = c8g("nm.m"), n8f = c8g("nm.l"), L9C = c8g("nm.m.f"), b8h, K9B;
    F9w.cN0x = NEJ.C();
    b8h = F9w.cN0x.O9F(H9y.do0x);
    b8h.bJ9A = function() {
        var oW3x = !1;
        return function() {
            if (oW3x)
                return;
            oW3x = !0;
            this.bM9D();
            if (top == self) {
                return
            }
            this.rG4K = a7h.x9o("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bAE1x()
            }
            H9y.ft1x.B9s({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bU9L([[window, "scroll", this.zz7s.g8c(this)], [document, "keyup", this.crj2x.g8c(this)], [document.body, "click", this.sc4g.g8c(this)], [document, "mouseup", this.crc2x.g8c(this)], [this.rG4K, "click", this.KI1x.g8c(this)], [p8h.rP4T, "message", this.pY4c.g8c(this)]]);
            l8d.bVw7p(document.body);
            this.zz7s();
            if (this.yT7M !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                p8h.rP4T.fV1x().tX6R();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cK0x.cS0x.browser == "ie" && parseInt(cK0x.cS0x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gn1x = top.player.getPlaying();
                    if (gn1x && gn1x.track && gn1x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gn1x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.wE7x.g8c(this);
            this.kd2x = p8h.hK1x.B9s();
            window.log = this.md3x.g8c(this);
            var rN4R = location.search;
            if (rN4R) {
                var bC9t = rN4R.substr(rN4R.indexOf("?") + 1)
                    , gd1x = k8c.hi1x(bC9t);
                if (gd1x && gd1x["_hash"])
                    location.hash = gd1x["_hash"]
            }
        }
    }();
    b8h.crj2x = function(d8f) {
        var f8d = h8b.U9L(d8f);
        try {
            if (d8f.keyCode == 80 && l8d.bHG3x() || ["textarea", "input"].indexOf(f8d.tagName.toLowerCase()) >= 0)
                return;
            h8b.z9q(top.document, "keyup", {
                ctrlKey: d8f.ctrlKey,
                keyCode: d8f.keyCode
            })
        } catch (e) {}
    }
    ;
    b8h.sc4g = function(d8f) {
        var f8d = h8b.U9L(d8f);
        if (f8d && f8d.tagName == "INPUT")
            return;
        var f8d = h8b.U9L(d8f, "d:pid");
        if (f8d) {
            h8b.ce9V(d8f);
            var oe3x = a7h.u8m(f8d, "pid")
                , AE8w = a7h.u8m(f8d, "ptype")
                , W9N = a7h.u8m(f8d, "action") || "play";
            switch (W9N) {
                case "subscribe":
                    l8d.lE2x({
                        tracks: [oe3x]
                    });
                    break
            }
        }
        f8d = h8b.U9L(d8f, "d:resAction");
        if (f8d && f8d.className.indexOf("-dis") == -1) {
            var cG0x = a7h.u8m(f8d, "resId")
                , t8l = a7h.u8m(f8d, "resType")
                , bgr7k = a7h.u8m(f8d, "resRadiotype")
                , bgs7l = a7h.u8m(f8d, "resRadioid")
                , dK0x = a7h.u8m(f8d, "resFrom")
                , j8b = a7h.u8m(f8d, "resData")
                , W9N = a7h.u8m(f8d, "resAction")
                , bqy9p = a7h.u8m(f8d, "resCopyright")
                , YL4P = a7h.u8m(f8d, "resAuditstatus");
            if (W9N != "log" && W9N != "bilog")
                h8b.ce9V(d8f);
            switch (W9N) {
                case "log":
                    j8b = (j8b || "").split("|");
                    if (!!j8b[0]) {
                        var bc9T = {
                            id: cG0x,
                            alg: j8b[2] || "itembased",
                            scene: j8b[3],
                            position: j8b[1] || 0
                        };
                        if (!!j8b[4])
                            bc9T.srcid = j8b[4];
                        window.log(j8b[0], bc9T)
                    }
                    break;
                case "bilog":
                    var cqF2x = a7h.u8m(f8d, "logAction")
                        , cqC2x = a7h.u8m(f8d, "logJson");
                    window.log(cqF2x, cqC2x);
                    break;
                case "share":
                    if (YL4P && YL4P == 1) {
                        l8d.hR1x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cG0x, t8l, a7h.u8m(f8d, "resPic"), a7h.u8m(f8d, "resName"), a7h.u8m(f8d, "resAuthor"), a7h.u8m(f8d, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (t8l == 18) {
                        var oZ3x = a7h.u8m(f8d, "resLevel")
                            , qp4t = a7h.u8m(f8d, "resFee");
                        if (oZ3x == 10) {
                            l8d.sv4z(qp4t, cG0x, "song");
                            break
                        }
                        l8d.lE2x({
                            tracks: [cG0x]
                        })
                    }
                    break;
                case "download":
                    l8d.Zc5h({
                        id: cG0x,
                        type: t8l
                    });
                    break;
                case "programtips":
                    if (YL4P && YL4P == 1) {
                        l8d.hR1x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l8d.bAF2x({
                            id: bgs7l,
                            radiotype: bgr7k
                        })
                    }
                    break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d8f)
        } catch (e) {}
    }
    ;
    b8h.crc2x = function(d8f) {
        try {
            h8b.z9q(top.document, "mouseup")
        } catch (e) {}
    }
    ;
    b8h.zz7s = function() {
        var cqj2x = function() {
            var cp9g = window.innerHeight;
            if (!k8c.uU6O(cp9g))
                cp9g = (document.documentElement || document.body).clientHeight;
            return cp9g
        };
        return function(d8f) {
            if (!this.rG4K)
                return;
            var YS5X = cqj2x()
                , fQ1x = document.documentElement.scrollTop || document.body.scrollTop;
            a7h.X9O(this.rG4K, "display", fQ1x > 0 ? "" : "none");
            if (cK0x.cS0x.browser == "ie" && cK0x.cS0x.version < "7.0") {
                var gi1x = Math.min(document.body.clientHeight, YS5X + fQ1x) - 204;
                a7h.X9O(this.rG4K, "top", gi1x + "px")
            }
        }
    }();
    b8h.KI1x = function(d8f) {
        h8b.ce9V(d8f);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    ;
    b8h.wE7x = function() {
        var bgy7r = function(d8f) {
            h8b.z9q(window, "share", d8f)
        };
        return function(cG0x, t8l, Dp8h, T9K, Kq0x, Kp0x) {
            l8d.lP2x({
                rid: cG0x,
                type: t8l,
                purl: Dp8h,
                name: T9K,
                author: Kq0x,
                authors: Kp0x,
                onshare: bgy7r.g8c(this)
            })
        }
    }();
    b8h.md3x = function(W9N, bc9T) {
        try {
            top.log(W9N, bc9T)
        } catch (e) {
            switch (W9N) {
                case "play":
                    this.kd2x.eN0x(bc9T);
                    break;
                case "search":
                    this.kd2x.bKb4f(bc9T);
                    break;
                default:
                    this.kd2x.gg1x(W9N, bc9T)
            }
        }
    }
    ;
    b8h.bAE1x = function() {
        var YY5d, bgH7A = false, bs9j = [45, 60];
        var cqi2x = function(bF9w) {
            if (bF9w.title != "MailBoxImport")
                return;
            var Q9H = JSON.parse(bF9w.content || "null") || Y9P;
            if (Q9H.status == 10) {
                n8f.Yu4y.B9s().N9E();
                window.clearTimeout(YY5d)
            }
        };
        var sQ5V = function(d8f) {
            if (d8f.code == 200) {
                if (d8f.status == 1) {
                    h8b.q8i(p8h.xV7O, "message", cqi2x.g8c(this));
                    p8h.xV7O.B9s().bbC6w();
                    bgH7A = true
                } else {
                    if (bgH7A) {
                        if (d8f.status == 10) {
                            n8f.Yu4y.B9s().N9E();
                            h8b.iB2x(p8h.xV7O, "message");
                            window.clearTimeout(YY5d);
                            bgH7A = false
                        }
                    } else {
                        window.clearTimeout(YY5d)
                    }
                }
            }
        };
        return function() {
            var rb4f = bs9j.shift() * 1e3;
            v9m.bp9g("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: sQ5V.g8c(this)
            });
            if (rb4f) {
                YY5d = window.setTimeout(arguments.callee, rb4f)
            }
        }
    }();
    b8h.pY4c = function(d8f) {
        try {
            top.polling(d8f)
        } catch (e) {}
    }
})()
