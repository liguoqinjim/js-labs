(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    }
    ;
    NEJ.P = function(Eg1x) {
        if (!Eg1x || !Eg1x.length)
            return null;
        var Xg7Z = window;
        for (var a = Eg1x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Xg7Z = Xg7Z[a[i]] = Xg7Z[a[i]] || {},
        i++)
            ;
        return Xg7Z
    }
    ;
    NEJ.Q = function(bJ1x, Eg1x) {
        bJ1x = bJ1x || NEJ.O;
        var bs1x = Eg1x.split(".");
        for (var i = 0, l = bs1x.length; i < l; i++) {
            bJ1x = bJ1x[bs1x[i]];
            if (!bJ1x)
                break
        }
        return bJ1x
    }
    ;
    NEJ.C = function() {
        var bJy7r = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bDZ6T = function(D1x, bz1x) {
            for (var x in bz1x)
                if (D1x == bz1x[x])
                    return x;
            return null
        };
        var bxV4Z = {
            cx1x: 0,
            bl1x: 1,
            bC1x: 2,
            bW1x: 3,
            bL1x: 4,
            eY3x: 5,
            kt5y: 6,
            eE3x: 7
        }
          , uA8s = {
            cE2x: 0,
            bn1x: 1,
            bF1x: 2,
            ci1x: 3,
            bQ1x: 4,
            gG3x: 5,
            ls5x: 6,
            gj3x: 7
        };
        return function() {
            var fK3x = function() {
                this.bEB6v();
                return this.cx1x.apply(this, arguments)
            };
            fK3x.prototype.bEB6v = NEJ.F;
            fK3x.prototype.cx1x = NEJ.F;
            fK3x.N1x = function(Dw0x, bJX7Q) {
                if (bJy7r(Dw0x))
                    return;
                if (bJX7Q == null || !!bJX7Q)
                    NEJ.X(this, Dw0x, bJy7r);
                this.bWe1x = Dw0x;
                this.cs1x = Dw0x.prototype;
                var bI1x = function() {};
                bI1x.prototype = Dw0x.prototype;
                this.prototype = new bI1x;
                var HX2x = this.prototype;
                HX2x.constructor = this;
                var cl1x;
                for (var x in bxV4Z) {
                    cl1x = bDZ6T(bxV4Z[x], uA8s);
                    if (!cl1x || !this.cs1x[x])
                        continue;
                    HX2x[x] = function(V1x) {
                        return function() {
                            this[V1x].apply(this, arguments)
                        }
                    }(cl1x)
                }
                var GS1x = {};
                for (var x in uA8s) {
                    cl1x = bDZ6T(uA8s[x], bxV4Z);
                    if (!cl1x || !this.cs1x[cl1x])
                        continue;
                    GS1x[cl1x] = Dw0x;
                    HX2x[x] = function(V1x) {
                        return function() {
                            var m1x, bI1x = this.bxT4X[V1x], bcf9W = bI1x.prototype[V1x];
                            this.bxT4X[V1x] = bI1x.bWe1x || Dw0x;
                            if (!!bcf9W)
                                m1x = bcf9W.apply(this, arguments);
                            this.bxT4X[V1x] = Dw0x;
                            return m1x
                        }
                    }(cl1x)
                }
                HX2x.bEB6v = function() {
                    this.bxT4X = NEJ.X({}, GS1x)
                }
                ;
                HX2x.cKd0x = HX2x.cE2x;
                return HX2x
            }
            ;
            return fK3x
        }
    }();
    NEJ.X = function(gv3x, bR1x, dZ3x) {
        if (!gv3x || !bR1x)
            return gv3x;
        dZ3x = dZ3x || NEJ.F;
        for (var x in bR1x) {
            if (bR1x.hasOwnProperty(x) && !dZ3x(bR1x[x], x))
                gv3x[x] = bR1x[x]
        }
        return gv3x
    }
    ;
    NEJ.EX = function(gv3x, bR1x) {
        if (!gv3x || !bR1x)
            return gv3x;
        for (var x in gv3x) {
            if (gv3x.hasOwnProperty(x) && bR1x[x] != null)
                gv3x[x] = bR1x[x]
        }
        return gv3x
    }
    ;
    var Ij2x = Function.prototype;
    Ij2x.eH3x = function(lL5Q, xt9k) {
        var f = NEJ.F
          , xt9k = xt9k || f
          , lL5Q = lL5Q || f
          , dx2x = this;
        return function() {
            var d1x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lL5Q(d1x);
            if (!d1x.stopped) {
                d1x.value = dx2x.apply(this, d1x.args);
                xt9k(d1x)
            }
            return d1x.value
        }
    }
    ;
    Ij2x.f1x = function() {
        var bf1x = arguments
          , gv3x = arguments[0]
          , bxP4T = this;
        return function() {
            var tb7U = NEJ.R.slice.call(bf1x, 1);
            NEJ.R.push.apply(tb7U, arguments);
            return bxP4T.apply(gv3x || window, tb7U)
        }
    }
    ;
    Ij2x.ew3x = function() {
        var bf1x = arguments
          , gv3x = NEJ.R.shift.call(bf1x)
          , bxP4T = this;
        return function() {
            NEJ.R.push.apply(arguments, bf1x);
            return bxP4T.apply(gv3x || window, arguments)
        }
    }
    ;
    var Ij2x = String.prototype;
    if (!Ij2x.trim) {
        Ij2x.trim = function() {
            var df2x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(df2x, "")
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
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , O1x = c0x("nej.p")
      , uP8H = window.navigator.platform
      , vK8C = window.navigator.userAgent;
    var lk5p = {
        mac: uP8H,
        win: uP8H,
        linux: uP8H,
        ipad: vK8C,
        ipod: vK8C,
        iphone: uP8H,
        android: vK8C
    };
    O1x.Ik2x = lk5p;
    for (var x in lk5p)
        lk5p[x] = (new RegExp(x,"i")).test(lk5p[x]);
    lk5p.ios = lk5p.ipad || lk5p.iphone || lk5p.ipod;
    lk5p.tablet = lk5p.ipad;
    lk5p.desktop = lk5p.mac || lk5p.win || lk5p.linux && !lk5p.android;
    var iD4H = {
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
    O1x.dt2x = iD4H;
    if (/msie\s+(.*?);/i.test(vK8C) || /trident\/.+rv:([\d\.]+)/i.test(vK8C)) {
        iD4H.engine = "trident";
        iD4H.browser = "ie";
        iD4H.version = RegExp.$1;
        iD4H.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mB5G = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iD4H.release = mB5G[document.documentMode] || mB5G[parseInt(iD4H.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vK8C)) {
        iD4H.engine = "webkit";
        iD4H.release = RegExp.$1 || "";
        iD4H.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vK8C)) {
        iD4H.engine = "gecko";
        iD4H.release = RegExp.$1 || "";
        iD4H.browser = "firefox";
        iD4H.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(vK8C))
            iD4H.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vK8C)) {
        iD4H.engine = "presto";
        iD4H.release = RegExp.$1 || "";
        iD4H.browser = "opera";
        iD4H.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(vK8C))
            iD4H.version = RegExp.$1 || ""
    }
    if (iD4H.browser == "unknow") {
        var mB5G = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mB5G.length, V1x; i < l; i++) {
            V1x = mB5G[i] == "safari" ? "version" : mB5G[i];
            if ((new RegExp(V1x + "/(.*?)(?=\\s|$)","i")).test(vK8C)) {
                iD4H.browser = mB5G[i];
                iD4H.version = RegExp.$1.trim();
                break
            }
        }
    }
    O1x.bLO8G = {};
    var beB0x = iD4H.engine != "trident";
    O1x.nq5v = {
        gecko: iD4H.engine != "gecko",
        webkit: iD4H.engine != "webkit",
        presto: iD4H.engine != "presto",
        trident0: beB0x || iD4H.release > "2.0",
        trident1: beB0x || iD4H.release < "6.0",
        trident2: beB0x || iD4H.release > "3.0",
        trident: beB0x || iD4H.release >= "6.0"
    }
}
)();
(function() {
    var iv4z = NEJ.P("nej.c")
      , R1x = {};
    var bxE4I = function() {
        var df2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(X1x) {
            X1x = X1x || "";
            if (df2x.test(X1x))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Ou4y = function() {
        var bOs8k = function(i1x, bz1x) {
            if (!i1x || !i1x.length)
                return;
            for (var i = 0, l = i1x.length, jO4S; i < l; i++) {
                jO4S = i1x[i];
                if (jO4S.indexOf("://") > 0)
                    bz1x[bxE4I(jO4S)] = jO4S
            }
        };
        var bh1x = {
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
        return function(bR1x) {
            iv4z.Iq2x("root", bR1x.root || "/res/");
            var bxs4w, gb3x = iv4z.B1x("root");
            for (var x in bh1x) {
                bxs4w = bh1x[x];
                iv4z.Iq2x(x, bR1x[bxs4w.name] || gb3x + bxs4w.dft)
            }
            var CB0x = bR1x.p_csrf;
            if (CB0x == !0) {
                CB0x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iv4z.Iq2x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, CB0x));
            R1x.frames = {};
            bOs8k(bR1x.p_frame, R1x.frames);
            R1x.flashs = {};
            bOs8k(bR1x.p_flash, R1x.flashs)
        }
    }();
    iv4z.Iq2x = function(K1x, D1x) {
        R1x[K1x] = D1x
    }
    ;
    iv4z.B1x = function(K1x) {
        return R1x[K1x]
    }
    ;
    iv4z.bWf1x = function(X1x) {
        var tB8t = bxE4I(X1x);
        return R1x.frames[tB8t] || tB8t + "/res/nej_proxy_frame.html"
    }
    ;
    iv4z.bWn1x = function(X1x) {
        return R1x.flashs[bxE4I(X1x)]
    }
    ;
    Ou4y(window.NEJ_CONF || NEJ.O)
}
)();
(function() {
    var c0x = NEJ.P
      , O1x = c0x("nej.p")
      , iv4z = c0x("nej.c")
      , bR1x = window.NEJ_CONF || NEJ.O;
    if (O1x.nq5v.trident)
        return;
    iv4z.Iq2x("storage.swf", bR1x.storage || iv4z.B1x("root") + "nej_storage.swf");
    if (O1x.dt2x.release < "4.0") {
        iv4z.Iq2x("blank.png", bR1x.blank || iv4z.B1x("root") + "nej_blank.gif")
    }
    var i1x = bR1x.xdr
      , gH3x = /^(https?:\/\/.*?)(?=\/|$)/i
      , kz5E = /[\/?=&]/i;
    var bJz7s = function(X1x) {
        return (gH3x.test(X1x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i1x && !!i1x.length)
        for (var i = i1x.length - 1, X1x, K1x; i >= 0; i--) {
            X1x = i1x[i];
            K1x = bJz7s(X1x);
            if (!!K1x)
                iv4z.Iq2x(K1x, X1x)
        }
    iv4z.cJY0x = function(X1x) {
        var K1x = bJz7s(X1x);
        if (!K1x) {
            if (kz5E.test(X1x)) {
                K1x = location.protocol + "//" + location.host
            } else if (X1x.indexOf("://") < 0) {
                K1x = location.protocol + "//" + X1x
            } else {
                K1x = X1x
            }
        }
        return iv4z.B1x(K1x) || K1x + "/res/nej_xdomain.html"
    }
}
)();
(function() {
    var c0x = NEJ.P
      , iv4z = c0x("nej.c")
      , O1x = c0x("nej.g")
      , gK3x = +(new Date);
    O1x.cJX0x = 1e4 - gK3x;
    O1x.bxg4k = 10001 - gK3x;
    O1x.cJV0x = 10002 - gK3x;
    O1x.bSv0x = 10003 - gK3x;
    O1x.bWq1x = 10004 - gK3x;
    O1x.cJT0x = 10005 - gK3x;
    O1x.bwZ4d = 10006 - gK3x;
    O1x.bWs1x = 10007 - gK3x;
    O1x.zA9r = "Content-Type";
    O1x.cJP0x = "text/plain";
    O1x.Gw1x = "multipart/form-data";
    O1x.bWw1x = "application/x-www-form-urlencoded";
    O1x.bwK4O = iv4z.B1x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
}
)();
(function() {
    var c0x = NEJ.P
      , fA3x = NEJ.R
      , O1x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , k1x = c0x("nej.u")
      , be1x = c0x("nej.h");
    var kw5B = O1x.dt2x.prefix
      , bPc8U = O1x.bLO8G
      , bWz1x = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    }
      , bWA1x = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    }
      , Sy6s = {
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
    var Ou4y = function() {
        var ue8W = be1x.bBD5I();
        bPc8U.css3d = !!ue8W && ue8W.m41 != null;
        var df2x = /-([a-z])/g;
        for (var x in Sy6s) {
            Sy6s[bBF5K(x)] = Sy6s[x]
        }
    };
    var bBF5K = function() {
        var df2x = /-([a-z])/g;
        return function(V1x) {
            V1x = V1x || "";
            return V1x.replace(df2x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bBN5S = function(V1x) {
        return (!bPc8U.css3d ? bWz1x : bWA1x)[V1x]
    };
    var bCr5w = function() {
        var df2x = /\s+/;
        return function(fK3x) {
            fK3x = (fK3x || "").trim();
            return !!fK3x ? fK3x.split(df2x) : null
        }
    }();
    var YR8J = function(F1x, u1x, fK3x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return;
        k1x.bd1x(bCr5w(fK3x), function(ed3x) {
            F1x.classList[u1x](ed3x)
        })
    };
    be1x.Iv2x = function(i1x) {
        return fA3x.slice.call(i1x, 0)
    }
    ;
    be1x.bwq4u = function(F1x) {
        return be1x.Iv2x(F1x.children)
    }
    ;
    be1x.bwp4t = function(F1x, fK3x) {
        return be1x.Iv2x(F1x.getElementsByClassName(fK3x))
    }
    ;
    be1x.bwn4r = function(F1x, Iw2x) {
        YR8J(F1x, "add", Iw2x)
    }
    ;
    be1x.bwj4n = function(F1x, Ix2x) {
        YR8J(F1x, "remove", Ix2x)
    }
    ;
    be1x.UF6z = function(F1x, Ix2x, Iw2x) {
        YR8J(F1x, "remove", Ix2x);
        YR8J(F1x, "add", Iw2x)
    }
    ;
    be1x.bvY4c = function(F1x, fK3x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return !1;
        var i1x = F1x.classList;
        if (!i1x || !i1x.length)
            return !1;
        return k1x.di2x(bCr5w(fK3x), function(ed3x) {
            return i1x.contains(ed3x)
        }) >= 0
    }
    ;
    be1x.bvX4b = function(F1x, ed3x) {}
    ;
    be1x.bvT4X = function(F1x) {}
    ;
    be1x.bvS4W = function(gm3x, ov6p) {
        gm3x.selectionEnd = ov6p.end || 0;
        gm3x.selectionStart = ov6p.start || 0;
        gm3x.focus()
    }
    ;
    be1x.bvO4S = function(gm3x) {
        return {
            end: gm3x.selectionEnd,
            start: gm3x.selectionStart
        }
    }
    ;
    be1x.bvN4R = function() {
        var GM1x = function(ed3x, d1x) {
            var F1x = h1x.W1x(d1x);
            if (!F1x.value)
                a9j.x1x(F1x, ed3x)
        };
        var Iz2x = function(ed3x, d1x) {
            a9j.y1x(h1x.W1x(d1x), ed3x)
        };
        return function(F1x, ff3x, ed3x) {
            if (ff3x == 1) {
                h1x.s1x(F1x, "blur", GM1x.f1x(null, ed3x))
            }
            if (ff3x == 1 || ff3x == -1) {
                h1x.s1x(F1x, "focus", Iz2x.f1x(null, ed3x))
            }
        }
    }();
    be1x.bvL4P = function(G1x) {
        return (new XMLSerializer).serializeToString(G1x) || ""
    }
    ;
    be1x.bvH4L = function(Bf0x) {
        var gb3x = (new DOMParser).parseFromString(Bf0x, "text/xml").documentElement;
        return gb3x.nodeName == "parsererror" ? null : gb3x
    }
    ;
    be1x.bvG4K = function(F1x) {}
    ;
    be1x.od6X = function(F1x) {
        return null
    }
    ;
    be1x.bvz4D = function(F1x) {
        return null
    }
    ;
    be1x.bvu4y = function(dR2x) {}
    ;
    be1x.bvr4v = function() {
        var bf1x = be1x.Iv2x(arguments);
        bf1x[0] = a9j.B1x(bf1x[0]);
        if (!bf1x[0])
            return null;
        bf1x[1] = (bf1x[1] || "").toLowerCase();
        if (!bf1x[1])
            return null;
        return bf1x
    }
    ;
    be1x.AS0x = function() {
        var wi8a = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
          , jm4q = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bWB1x = function(u1x) {
            return (kw5B.evt || kw5B.pro) + u1x
        };
        return function() {
            var bf1x = be1x.bvr4v.apply(be1x, arguments);
            if (!bf1x)
                return;
            var ZE8w = jm4q[bf1x[1]]
              , bfp0x = wi8a[bf1x[1]];
            if (!!ZE8w) {
                bf1x[4] = bf1x[1];
                bf1x[1] = bWB1x(ZE8w)
            } else if (!!bfp0x) {
                var V1x = "on" + bf1x[1];
                if (!(V1x in bf1x[0])) {
                    bf1x[4] = bf1x[1];
                    bf1x[1] = bfp0x
                }
            }
            return bf1x
        }
    }();
    be1x.buO4S = function() {
        var bf1x = arguments;
        bf1x[0].addEventListener(bf1x[1], bf1x[2], !!bf1x[3])
    }
    ;
    be1x.baF8x = function() {
        var bf1x = arguments;
        bf1x[0].removeEventListener(bf1x[1], bf1x[2], !!bf1x[3])
    }
    ;
    be1x.buA4E = function(F1x, u1x, e1x) {
        var d1x = document.createEvent("Event");
        d1x.initEvent(u1x, !0, !0);
        NEJ.X(d1x, e1x);
        F1x.dispatchEvent(d1x)
    }
    ;
    be1x.bBD5I = function() {
        var gH3x = /\((.*?)\)/
          , kz5E = /\s*,\s*/
          , i1x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bcp9g = function(ue8W) {
            var io4s = {};
            if (gH3x.test(ue8W || "")) {
                k1x.bd1x(RegExp.$1.split(kz5E), function(D1x, r1x) {
                    io4s[i1x[r1x]] = D1x || ""
                })
            }
            return io4s
        };
        return function(ue8W) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(ue8W);
            var V1x = kw5B.clz + "CSSMatrix";
            if (!!window[V1x])
                return new window[V1x](ue8W || "");
            return bcp9g(ue8W)
        }
    }();
    be1x.bFM6G = function() {
        var df2x = /\{(.*?)\}/g;
        return function(V1x, bz1x) {
            bz1x = bz1x || o;
            var oP6J = bBN5S(V1x);
            return !oP6J ? "" : oP6J.replace(df2x, function($1, $2) {
                var bs1x = $2.split("|");
                return bz1x[bs1x[0]] || bs1x[1] || "0"
            })
        }
    }();
    be1x.but3x = function(F1x, V1x, D1x) {
        F1x.style[be1x.bJl7e(V1x)] = D1x
    }
    ;
    be1x.bJl7e = function() {
        var df2x = /^[a-z]/
          , bup3x = kw5B.css;
        var bWD1x = function(V1x) {
            return V1x.replace(df2x, function($1) {
                return bup3x + $1.toUpperCase()
            })
        };
        return function(V1x) {
            V1x = bBF5K(V1x);
            var bWJ1x = be1x.bWK1x(V1x, Sy6s);
            return bWJ1x ? bWD1x(V1x) : V1x
        }
    }();
    be1x.bWK1x = function() {
        var df2x = /^([a-z]+?)[A-Z]/;
        return function(V1x, bz1x) {
            if (!bz1x[V1x]) {
                if (df2x.test(V1x))
                    V1x = RegExp.$1
            }
            return !!bz1x[V1x]
        }
    }();
    be1x.bWN1x = function() {
        var df2x = /\$<(.*?)>/gi
          , bup3x = "-" + kw5B.css.toLowerCase() + "-";
        return function(kv5A) {
            return kv5A.replace(df2x, function($1, $2) {
                var fz3x = $2
                  , bs1x = fz3x.split("|")
                  , oP6J = bBN5S(bs1x[0]);
                if (!!oP6J) {
                    return be1x.bFM6G(bs1x[0], k1x.hq4u(bs1x[1]))
                }
                return !be1x.bWT1x(fz3x, Sy6s) ? fz3x : bup3x + fz3x
            })
        }
    }();
    be1x.bWT1x = function(V1x, bz1x) {
        return !!bz1x[V1x]
    }
    ;
    be1x.bul3x = function(cj1x, kv5A) {
        cj1x.textContent = kv5A
    }
    ;
    be1x.bui3x = function(cj1x, kv5A) {
        var Ah9Y = cj1x.sheet
          , bq1x = Ah9Y.cssRules.length;
        Ah9Y.insertRule(kv5A, bq1x);
        return Ah9Y.cssRules[bq1x]
    }
    ;
    be1x.cJC0x = function(F1x, e1x) {}
    ;
    be1x.bdN9E = function(WF7y) {
        return (WF7y || "").toLowerCase() != "transparent"
    }
    ;
    be1x.bWZ1x = function(F1x) {}
    ;
    be1x.btW3x = function(F1x, V1x) {
        if (!!F1x.getAttribute)
            return F1x.getAttribute(V1x);
        return ""
    }
    ;
    be1x.WU7N = function(eO3x) {
        a9j.cK2x(eO3x)
    }
    ;
    Ou4y()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , O1x = c0x("nej.p")
      , be1x = c0x("nej.h");
    if (O1x.nq5v.trident0)
        return;
    var gK3x = +(new Date);
    R1x = {};
    be1x.bvX4b = be1x.bvX4b.eH3x(function(d1x) {
        d1x.stopped = !0;
        var bf1x = d1x.args
          , C1x = a9j.lK5P(bf1x[0])
          , K1x = "hover-" + C1x;
        if (!C1x || !!R1x[K1x])
            return;
        R1x[K1x] = !0;
        h1x.s1x(C1x, "mouseenter", a9j.y1x.f1x(a9j, C1x, bf1x[1]));
        h1x.s1x(C1x, "mouseleave", a9j.x1x.f1x(a9j, C1x, bf1x[1]))
    });
    be1x.bvT4X = function() {
        var cJA0x = function() {};
        return be1x.bvT4X.eH3x(function(d1x) {
            d1x.stopped = !0;
            var F1x = d1x.args[0]
              , C1x = "fixed-" + a9j.lK5P(F1x);
            if (!!R1x[C1x])
                return;
            var bh1x = {};
            R1x[C1x] = bh1x
        })
    }();
    be1x.bvG4K = be1x.bvG4K.eH3x(function(d1x) {
        d1x.stopped = !0;
        var F1x = d1x.args[0]
          , cj1x = F1x.style
          , bFy6s = a9j.ow6q();
        cj1x.width = bFy6s.scrollWidth + "px";
        cj1x.height = bFy6s.scrollHeight + "px"
    });
    be1x.od6X = be1x.od6X.eH3x(function(d1x) {
        d1x.stopped = !0;
        var F1x = d1x.args[0]
          , lo5t = R1x[F1x.msk];
        if (!lo5t) {
            F1x.msk = gK3x++;
            lo5t = a9j.dj2x("iframe");
            lo5t.style.position = "absolute";
            R1x[F1x.msk] = lo5t
        }
        d1x.value = lo5t;
        var cj1x = lo5t.style;
        cj1x.top = (parseInt(a9j.dh2x(F1x, "top")) || 0) + "px";
        cj1x.left = (parseInt(a9j.dh2x(F1x, "left")) || 0) + "px";
        cj1x.width = F1x.offsetWidth + "px";
        cj1x.height = F1x.offsetHeight + "px";
        F1x.insertAdjacentElement("beforeBegin", lo5t)
    });
    be1x.bvz4D = be1x.bvz4D.eH3x(function(d1x) {
        d1x.stopped = !0;
        var lo5t = R1x[d1x.args[0].msk];
        if (!!lo5t)
            a9j.mG5L(lo5t)
    })
}
)();
(function() {
    var c0x = NEJ.P
      , O1x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h");
    if (O1x.nq5v.trident1)
        return;
    be1x.AS0x = function() {
        var wi8a = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be1x.AS0x.eH3x(function(d1x) {
            var bf1x = be1x.bvr4v.apply(be1x, d1x.args);
            if (!bf1x) {
                d1x.stopped = !0;
                return
            }
            var u1x = wi8a[bf1x[1]];
            if (!!u1x && ("on" + u1x).toLowerCase()in bf1x[0]) {
                bf1x[4] = bf1x[1];
                bf1x[1] = u1x;
                d1x.stopped = !0;
                d1x.value = bf1x
            }
        })
    }();
    be1x.bdN9E = function(WF7y) {
        return !0
    }
    ;
    be1x.WU7N = be1x.WU7N.eH3x(function(d1x) {
        d1x.stopped = !0;
        var eO3x = d1x.args[0];
        a9j.ba1x(eO3x, "display", "none");
        try {
            eO3x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , O1x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , k1x = c0x("nej.u")
      , be1x = c0x("nej.h")
      , btU3x = {};
    if (O1x.nq5v.trident)
        return;
    be1x.Iv2x = be1x.Iv2x.eH3x(function(d1x) {
        d1x.stopped = !0;
        var i1x = d1x.args[0];
        if (!i1x) {
            d1x.value = null;
            return
        }
        var r1x = 0
          , m1x = [];
        while (!!i1x[r1x]) {
            m1x.push(i1x[r1x++])
        }
        d1x.value = m1x
    });
    be1x.bwq4u = be1x.bwq4u.eH3x(function(d1x) {
        d1x.stopped = !0;
        var bs1x = [];
        k1x.bd1x(d1x.args[0].childNodes, function(g1x) {
            if (g1x.nodeType == 1)
                bs1x.push(g1x)
        });
        d1x.value = bs1x
    });
    be1x.bwp4t = be1x.bwp4t.eH3x(function(d1x) {
        var F1x = d1x.args[0];
        if (!!F1x.getElementsByClassName)
            return;
        d1x.stopped = !0;
        var m1x = []
          , Qp5u = new RegExp("(\\s|^)(?:" + d1x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k1x.bd1x(F1x.getElementsByTagName("*"), function(g1x) {
            if (Qp5u.test(g1x.className))
                m1x.push(g1x)
        });
        d1x.value = m1x
    });
    be1x.bvS4W = be1x.bvS4W.eH3x(function(d1x) {
        var gm3x = d1x.args[0]
          , ov6p = d1x.args[1];
        if (gm3x.selectionStart == null) {
            d1x.stopped = !0;
            var dd2x = gm3x.createTextRange();
            dd2x.collapse(!0);
            dd2x.moveStart("character", ov6p.start);
            dd2x.moveEnd("character", ov6p.end - ov6p.start);
            dd2x.select();
            gm3x.focus()
        }
    });
    be1x.bvO4S = be1x.bvO4S.eH3x(function(d1x) {
        var gm3x = d1x.args[0];
        gm3x.focus();
        if (gm3x.selectionStart == null) {
            d1x.stopped = !0;
            var bMy8q = document.selection.createRange();
            var bOb8T = gm3x.createTextRange();
            bOb8T.moveToBookmark(bMy8q.getBookmark());
            var btQ3x = gm3x.createTextRange();
            btQ3x.collapse(!0);
            btQ3x.setEndPoint("EndToStart", bOb8T);
            var hx4B = btQ3x.text.length;
            d1x.value = {
                start: hx4B,
                end: hx4B + bMy8q.text.length
            }
        }
    });
    be1x.bvL4P = be1x.bvL4P.eH3x(function(d1x) {
        if (!!window.XMLSerializer)
            return;
        d1x.stopped = !0;
        var F1x = d1x.args[0];
        d1x.value = F1x.xml != null ? F1x.xml : F1x.outHTML
    });
    be1x.bvH4L = function() {
        var QA5F = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bXa1x = function() {
            try {
                for (var i = 0, l = QA5F.length; i < l; i++)
                    return new ActiveXObject(QA5F[i])
            } catch (ex) {
                return null
            }
        };
        return be1x.bvH4L.eH3x(function(d1x) {
            if (!!window.DOMParser)
                return;
            d1x.stopped = !0;
            var os6m = bXa1x();
            if (!!os6m && os6m.loadXML(d1x.args[0]) && !os6m.parseError.errorCode)
                d1x.value = os6m.documentElement
        })
    }();
    be1x.AS0x = function() {
        var jm4q = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jm4q)
            btU3x[jm4q[x]] = !0;
        var bXt1x = function(F1x, u1x) {
            if ("on" + u1x in F1x)
                return null;
            return jm4q[u1x] || ""
        };
        var bXL1x = function(u1x, dx2x) {
            var cA1x = dx2x;
            switch (u1x) {
            case "readystatechange":
                cA1x = function(d1x) {
                    var F1x = h1x.W1x(d1x) || this;
                    if (F1x.readyState == "loaded" || F1x.readyState == "complete") {
                        d1x.target = F1x;
                        dx2x.call(F1x, d1x)
                    }
                }
                ;
                break;
            case "propertychange":
                cA1x = function(d1x) {
                    var F1x = h1x.W1x(d1x) || this;
                    if ("value"in F1x && d1x.propertyName == "value") {
                        d1x.target = F1x;
                        dx2x.call(F1x, d1x)
                    }
                }
                ;
                break
            }
            return cA1x
        };
        return be1x.AS0x.eH3x(function(d1x) {
            var bf1x = be1x.bvr4v.apply(be1x, d1x.args);
            if (!bf1x) {
                d1x.stopped = !0;
                return
            }
            var u1x = bXt1x(bf1x[0], bf1x[1]);
            if (!!u1x) {
                d1x.stopped = !0;
                bf1x[4] = bf1x[1];
                bf1x[1] = u1x;
                if (!!bf1x[2]) {
                    bf1x[5] = bf1x[2];
                    bf1x[2] = bXL1x(bf1x[1], bf1x[2])
                }
                d1x.value = bf1x
            }
        }, function(d1x) {
            var bf1x = d1x.value;
            if (!bf1x[0] || !k1x.gF3x(bf1x[2]))
                return;
            if (!k1x.gF3x(bf1x[5]))
                bf1x[5] = bf1x[2];
            bf1x[2] = bf1x[2].f1x(bf1x[0])
        })
    }();
    be1x.buO4S = be1x.buO4S.eH3x(function(d1x) {
        var bf1x = d1x.args;
        if (!!btU3x[bf1x[1]] || !document.addEventListener) {
            d1x.stopped = !0;
            bf1x[0].attachEvent("on" + bf1x[1], bf1x[2])
        }
    });
    be1x.baF8x = be1x.baF8x.eH3x(function(d1x) {
        var bf1x = d1x.args;
        if (!!btU3x[bf1x[1]] || !document.removeEventListener) {
            d1x.stopped = !0;
            bf1x[0].detachEvent("on" + bf1x[1], bf1x[2])
        }
    });
    be1x.buA4E = be1x.buA4E.eH3x(function(d1x) {
        if (!document.createEvent) {
            d1x.stopped = !0;
            var bf1x = d1x.args
              , bTL0x = document.createEventObject();
            NEJ.X(bTL0x, bf1x[2]);
            try {
                bf1x[0].fireEvent("on" + bf1x[1], bTL0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be1x.but3x = be1x.but3x.eH3x(function(d1x) {
        var bf1x = d1x.args
          , V1x = bf1x[1].toLowerCase();
        if (V1x == "opacity" && !(V1x in document.body.style)) {
            bf1x[1] = "filter";
            bf1x[2] = "alpha(opacity=" + bf1x[2] * 100 + ")"
        }
    });
    be1x.bul3x = function() {
        var fr3x = 30;
        return be1x.bul3x.eH3x(function(d1x) {
            var F1x = d1x.args[0];
            if (!F1x.styleSheet)
                return;
            d1x.stopped = !0;
            var kv5A = d1x.args[1];
            var i1x = document.styleSheets;
            if (i1x.length > fr3x) {
                F1x = i1x[fr3x];
                kv5A = F1x.cssText + kv5A
            } else {
                F1x = F1x.styleSheet
            }
            F1x.cssText = kv5A
        })
    }();
    be1x.bui3x = be1x.bui3x.eH3x(function(d1x) {
        var bf1x = d1x.args
          , Ah9Y = bf1x[0].sheet;
        if (!!Ah9Y)
            return;
        d1x.stopped = !0;
        var Ah9Y = bf1x[0].styleSheet
          , bq1x = Ah9Y.rules.length
          , bs1x = bf1x[1].split(/[\{\}]/);
        Ah9Y.addRule(bs1x[0], bs1x[1], bq1x);
        d1x.value = Ah9Y.rules[bq1x]
    });
    be1x.bvN4R = function() {
        var GM1x = function(ed3x, d1x) {
            a9j.x1x(h1x.W1x(d1x), ed3x)
        };
        return be1x.bvN4R.eH3x(function(d1x) {
            if (O1x.dt2x.release >= "4.0")
                return;
            var bf1x = d1x.args;
            if (bf1x[1] != 1) {
                h1x.s1x(bf1x[0], "blur", GM1x.f1x(null, bf1x[2]));
                bf1x[1] = -1
            }
        })
    }();
    be1x.bdN9E = function(WF7y) {
        return !0
    }
    ;
    be1x.btW3x = be1x.btW3x.eH3x(function(d1x) {
        var bf1x = d1x.args
          , g1x = (bf1x[0].attributes || bb1x)[bf1x[1]];
        if (!!g1x) {
            d1x.stopped = !0;
            d1x.value = g1x.value
        }
    }, function(d1x) {
        var bf1x = d1x.args;
        if (bf1x[1] == "maxlength" && d1x.value == 2147483647)
            d1x.value = ""
    });
    if (O1x.dt2x.release < 5) {
        be1x.bvu4y = function() {
            var ei3x, eO3x, km5r = [], btN3x = "cb-" + +(new Date), bo1x = '<script>parent.nej.h["' + btN3x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bBP5U = function() {
                ei3x = window.clearTimeout(ei3x);
                if (!km5r.length)
                    return;
                var dR2x = km5r.shift();
                try {
                    var wT9K = eO3x.contentWindow.document;
                    wT9K.open();
                    wT9K.write("<head><title>");
                    wT9K.write(document.title);
                    wT9K.write("</title>");
                    wT9K.write(bo1x.replace("#<HASH>", encodeURIComponent(dR2x)));
                    wT9K.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        wT9K.domain = document.domain;
                    wT9K.close();
                    be1x[btN3x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    km5r.unshift(dR2x)
                }
                ei3x = window.setTimeout(bBP5U, 50)
            };
            return be1x.bvu4y.eH3x(function(d1x) {
                d1x.stopped = !0;
                var dR2x = d1x.args[0];
                if (!!be1x[btN3x] || !eO3x && !dR2x)
                    return;
                km5r.push(dR2x);
                if (!eO3x)
                    eO3x = a9j.Xe7X();
                bBP5U()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
}
)();
(function() {
    var c0x = NEJ.P
      , h1x = c0x("nej.v")
      , be1x = c0x("nej.h")
      , O1x = c0x("nej.p")
      , Xp7i = O1x.bLO8G;
    if (O1x.nq5v.gecko)
        return;
    var Ou4y = function() {
        Xp7i.css3d = Xp7i.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function(iV4Z, F1x) {
                if (!iV4Z || !F1x)
                    return;
                switch (iV4Z) {
                case "beforeEnd":
                    this.appendChild(F1x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F1x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F1x) : this.insertBefore(F1x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F1x) : this.parentNode.insertBefore(F1x, this.nextSibling);
                    return
                }
            }
            ;
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bo1x) {
                this.textContent = bo1x
            })
        }
    };
    be1x.AS0x = function() {
        var gH3x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be1x.AS0x.eH3x(function(d1x) {
            var bf1x = d1x.args;
            if (gH3x.test(bf1x[1] || "")) {
                d1x.stopped = !0;
                d1x.value = bf1x
            }
        })
    }();
    be1x.bWZ1x = function() {
        var bXS1x = function(d1x) {
            h1x.bg1x(d1x);
            h1x.W1x(d1x).control.click()
        };
        return function(F1x) {
            h1x.s1x(F1x, "click", bXS1x)
        }
    }();
    Ou4y()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h");
    var XJ7C = function() {
        var mB5G = !!document.body.classList;
        return function() {
            return mB5G
        }
    }();
    var bFo6i = function() {
        var df2x = /\s+/g;
        return function(fK3x) {
            fK3x = (fK3x || "").trim();
            return !fK3x ? null : new RegExp("(\\s|^)(?:" + fK3x.replace(df2x, "|") + ")(?=\\s|$)","g")
        }
    }();
    be1x.UF6z = be1x.UF6z.eH3x(function(d1x) {
        if (XJ7C())
            return;
        d1x.stopped = !0;
        var bf1x = d1x.args
          , F1x = a9j.B1x(bf1x[0]);
        if (!F1x || !bf1x[1] && !bf1x[2])
            return;
        var fK3x = F1x.className || "";
        var Iw2x = " " + (bf1x[2] || "")
          , Ix2x = bFo6i((bf1x[1] || "") + Iw2x);
        !!Ix2x && (fK3x = fK3x.replace(Ix2x, "$1"));
        F1x.className = (fK3x + Iw2x).replace(/\s+/g, " ").trim()
    });
    be1x.bwn4r = be1x.bwn4r.eH3x(function(d1x) {
        if (XJ7C())
            return;
        d1x.stopped = !0;
        var bf1x = d1x.args;
        be1x.UF6z(bf1x[0], "", bf1x[1])
    });
    be1x.bwj4n = be1x.bwj4n.eH3x(function(d1x) {
        if (XJ7C())
            return;
        d1x.stopped = !0;
        var bf1x = d1x.args;
        be1x.UF6z(bf1x[0], bf1x[1], "")
    });
    be1x.bvY4c = be1x.bvY4c.eH3x(function(d1x) {
        if (XJ7C())
            return;
        d1x.stopped = !0;
        var bf1x = d1x.args
          , F1x = a9j.B1x(bf1x[0]);
        if (!F1x) {
            d1x.value = !1;
            return
        }
        var df2x = bFo6i(bf1x[1]);
        d1x.value = !df2x ? !1 : df2x.test(F1x.className || "")
    })
}
)();
(function() {
    var c0x = NEJ.P
      , O1x = c0x("nej.p")
      , be1x = c0x("nej.h");
    if (O1x.nq5v.webkit)
        return;
    be1x.bdN9E = function(WF7y) {
        return !0
    }
}
)();
(function() {
    var c0x = NEJ.P
      , be1x = c0x("nej.h")
      , a9j = c0x("nej.e")
      , k1x = c0x("nej.u")
      , h1x = c0x("nej.v")
      , cZ2x = c0x("nej.x")
      , R1x = {};
    var bFz6t = function(F1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x || !R1x[F1x.id])
            return;
        var XK7D = !0
          , C1x = F1x.id;
        k1x.eI3x(R1x[C1x], function() {
            XK7D = !1;
            return !0
        });
        if (XK7D)
            delete R1x[C1x]
    };
    h1x.s1x = cZ2x.s1x = function() {
        var bYf2x = function() {
            var bf1x = be1x.AS0x.apply(be1x, arguments);
            if (!bf1x || !bf1x[2])
                return;
            var vW8O = a9j.lK5P(bf1x[0])
              , pq6k = R1x[vW8O] || {};
            R1x[vW8O] = pq6k;
            vW8O = bf1x[4] || bf1x[1];
            var AA0x = pq6k[vW8O] || [];
            pq6k[vW8O] = AA0x;
            AA0x.push({
                type: bf1x[1],
                func: bf1x[2],
                capt: !!bf1x[3],
                sfun: bf1x[5] || bf1x[2]
            });
            return bf1x.slice(0, 4)
        };
        return function() {
            var bf1x = bYf2x.apply(null, arguments);
            if (!!bf1x)
                be1x.buO4S.apply(be1x, bf1x);
            return this
        }
    }();
    h1x.mU5Z = cZ2x.mU5Z = function() {
        var bYO2x = function() {
            var tb7U = arguments
              , vW8O = a9j.lK5P(tb7U[0])
              , pq6k = R1x[vW8O]
              , u1x = (tb7U[1] || "").toLowerCase()
              , d1x = tb7U[2];
            if (!pq6k || !u1x || !d1x)
                return;
            pq6k = pq6k[u1x];
            if (!pq6k)
                return;
            var bYZ2x = !!tb7U[3]
              , r1x = k1x.di2x(pq6k, function(jm4q) {
                return d1x == jm4q.sfun && bYZ2x == jm4q.capt
            });
            if (r1x < 0)
                return;
            var jm4q = pq6k.splice(r1x, 1)[0];
            return !jm4q ? null : [a9j.B1x(vW8O), jm4q.type, jm4q.func, jm4q.capt]
        };
        return function() {
            var bf1x = bYO2x.apply(null, arguments);
            if (!!bf1x) {
                be1x.baF8x.apply(be1x, bf1x);
                bFz6t(bf1x[0])
            }
            return this
        }
    }();
    h1x.hc4g = cZ2x.hc4g = function() {
        var bKh7a = function() {
            var tb7U = arguments
              , vW8O = a9j.lK5P(tb7U[0])
              , pq6k = R1x[vW8O]
              , AA0x = (tb7U[1] || "").toLowerCase();
            if (!pq6k || !AA0x)
                return;
            var F1x = a9j.B1x(vW8O);
            k1x.nz5E(pq6k[AA0x], function(jm4q, r1x, i1x) {
                be1x.baF8x(F1x, jm4q.type, jm4q.func, jm4q.capt);
                i1x.splice(r1x, 1)
            });
            delete pq6k[AA0x]
        };
        var bZd2x = function(F1x) {
            F1x = a9j.B1x(F1x);
            if (!F1x)
                return;
            var C1x = F1x.id;
            k1x.eI3x(R1x[C1x], function(i1x, u1x) {
                bKh7a(C1x, u1x)
            });
            delete R1x[C1x]
        };
        return function(F1x, u1x) {
            !u1x ? bZd2x(F1x) : bKh7a(F1x, u1x);
            bFz6t(F1x);
            return this
        }
    }();
    h1x.W1x = function() {
        var btB3x;
        var Jb2x = function(V1x, F1x) {
            var bs1x = V1x.split(":");
            if (bs1x.length > 1) {
                if (!btB3x)
                    btB3x = {
                        c: a9j.bE1x,
                        d: a9j.t1x,
                        a: a9j.gN3x
                    };
                var Jc2x = btB3x[bs1x[0]];
                if (!!Jc2x)
                    return !!Jc2x(F1x, bs1x[1]);
                V1x = bs1x[1]
            }
            return !!a9j.gN3x(F1x, V1x) || !!a9j.t1x(F1x, V1x) || a9j.bE1x(F1x, V1x)
        };
        return function(d1x) {
            if (!d1x)
                return null;
            var F1x = d1x.target || d1x.srcElement
              , dZ3x = arguments[1];
            if (!dZ3x)
                return F1x;
            if (k1x.fG3x(dZ3x))
                dZ3x = Jb2x.f1x(null, dZ3x);
            if (k1x.gF3x(dZ3x)) {
                while (F1x) {
                    if (!!dZ3x(F1x))
                        return F1x;
                    F1x = F1x.parentNode
                }
                return null
            }
            return F1x
        }
    }();
    h1x.bg1x = function(d1x) {
        h1x.tm7f(d1x);
        h1x.cn1x(d1x);
        return this
    }
    ;
    h1x.tm7f = function(d1x) {
        if (!!d1x) {
            !!d1x.stopPropagation ? d1x.stopPropagation() : d1x.cancelBubble = !0
        }
        return this
    }
    ;
    h1x.cn1x = function(d1x) {
        if (!!d1x) {
            !!d1x.preventDefault ? d1x.preventDefault() : d1x.returnValue = !1
        }
        return this
    }
    ;
    h1x.cJq0x = function() {
        var qX7Q = !1;
        var bZg2x = function() {
            if (qX7Q)
                return;
            qX7Q = !0;
            h1x.s1x(document, "click", bZu2x, !0)
        };
        var bZu2x = function(d1x) {
            var F1x = h1x.W1x(d1x)
              , bZG2x = a9j.t1x(F1x, "stopped");
            if (bZG2x == "true") {
                h1x.bg1x(d1x);
                a9j.t1x(F1x, "stopped", "false")
            }
        };
        return function(d1x) {
            if (!d1x)
                return;
            if (d1x.type == "click") {
                h1x.bg1x(d1x);
                return
            }
            bZg2x();
            a9j.t1x(h1x.W1x(d1x), "stopped", "true")
        }
    }();
    h1x.jH4L = function(d1x) {
        return d1x.pageX != null ? d1x.pageX : d1x.clientX + a9j.ow6q().scrollLeft
    }
    ;
    h1x.mc5h = function(d1x) {
        return d1x.pageY != null ? d1x.pageY : d1x.clientY + a9j.ow6q().scrollTop
    }
    ;
    h1x.z1x = cZ2x.z1x = function(F1x, u1x, e1x) {
        var bf1x = be1x.AS0x(F1x, u1x);
        if (!!bf1x)
            be1x.buA4E(bf1x[0], bf1x[1], e1x);
        return this
    }
    ;
    c0x("dbg").dumpEV = function() {
        return R1x
    }
    ;
    cZ2x.isChange = !0
}
)();
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
    }
    )(this)
}
)();
(function() {
    var c0x = NEJ.P
      , O1x = c0x("nej.p");
    if (O1x.nq5v.trident0)
        return;
    JSON.parse = JSON.parse.eH3x(function(d1x) {
        var cM2x = d1x.args[0] || "";
        if (cM2x.length >= 5e5) {
            d1x.stopped = !0;
            d1x.value = eval("(" + cM2x + ")")
        }
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, em3x = c0x("nej.g"), a9j = c0x("nej.e"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), be1x = c0x("nej.h"), cZ2x = c0x("nej.x"), Je2x, btk3x = {}, R1x = document.createDocumentFragment();
    a9j.lK5P = cZ2x.lK5P = function(F1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return;
        var C1x = !!F1x.id ? F1x.id : "auto-id-" + k1x.Sj6d(16);
        F1x.id = C1x;
        if (a9j.B1x(C1x) != F1x)
            btk3x[C1x] = F1x;
        return C1x
    }
    ;
    a9j.B1x = cZ2x.B1x = function(F1x) {
        var g1x = btk3x["" + F1x];
        if (!!g1x)
            return g1x;
        if (!k1x.fG3x(F1x) && !k1x.tc7V(F1x))
            return F1x;
        return document.getElementById(F1x)
    }
    ;
    a9j.dm2x = cZ2x.dm2x = function(F1x, ed3x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return null;
        var i1x = be1x.bwq4u(F1x);
        if (!!ed3x)
            k1x.nz5E(i1x, function(g1x, r1x) {
                if (!a9j.bE1x(g1x, ed3x))
                    i1x.splice(r1x, 1)
            });
        return i1x
    }
    ;
    a9j.H1x = cZ2x.H1x = function(F1x, fK3x) {
        F1x = a9j.B1x(F1x);
        return !F1x ? null : be1x.bwp4t(F1x, fK3x.trim())
    }
    ;
    a9j.bET6N = cZ2x.bET6N = function(F1x) {
        F1x = a9j.B1x(F1x);
        if (!!F1x) {
            F1x = F1x.parentNode;
            while (!!F1x) {
                if (F1x.scrollHeight > F1x.clientHeight)
                    break;
                F1x = F1x.parentNode
            }
            if (!!F1x)
                return F1x
        }
        var pq6k = document.body.scrollHeight
          , AA0x = document.documentElement.scrollHeight;
        return AA0x >= pq6k ? document.documentElement : document.body
    }
    ;
    a9j.ow6q = function() {
        var bFm6g = function(i1x) {
            var m1x = 0;
            k1x.bd1x(i1x, function(eF3x) {
                if (!eF3x)
                    return;
                if (!m1x) {
                    m1x = eF3x
                } else {
                    m1x = Math.min(m1x, eF3x)
                }
            });
            return m1x
        };
        return function(wT9K) {
            var Jh2x = wT9K || document
              , AG0x = Jh2x.body
              , AH0x = Jh2x.documentElement
              , m1x = {
                scrollTop: Math.max(AG0x.scrollTop, AH0x.scrollTop),
                scrollLeft: Math.max(AG0x.scrollLeft, AH0x.scrollLeft),
                clientWidth: bFm6g([AG0x.clientWidth, AG0x.offsetWidth, AH0x.clientWidth, AH0x.offsetWidth]),
                clientHeight: bFm6g([AG0x.clientHeight, AG0x.offsetHeight, AH0x.clientHeight, AH0x.offsetHeight])
            };
            m1x.scrollWidth = Math.max(m1x.clientWidth, AG0x.scrollWidth, AH0x.scrollWidth);
            m1x.scrollHeight = Math.max(m1x.clientHeight, AG0x.scrollHeight, AH0x.scrollHeight);
            return m1x
        }
    }();
    a9j.cJk0x = function(fr3x, ps6m) {
        var m1x = NEJ.X({}, ps6m)
          , bHi7b = fr3x.width / fr3x.height
          , ZC8u = ps6m.width / ps6m.height;
        if (bHi7b > ZC8u && ps6m.height > fr3x.height) {
            m1x.height = fr3x.height;
            m1x.width = m1x.height * ZC8u
        }
        if (bHi7b < ZC8u && ps6m.width > fr3x.width) {
            m1x.width = fr3x.width;
            m1x.height = m1x.width / ZC8u
        }
        return m1x
    }
    ;
    a9j.cJj0x = function() {
        var df2x = /\s+/;
        var vY8Q = {
            left: function() {
                return 0
            },
            center: function(hy4C, ps6m) {
                return (hy4C.width - ps6m.width) / 2
            },
            right: function(hy4C, ps6m) {
                return hy4C.width - ps6m.width
            },
            top: function() {
                return 0
            },
            middle: function(hy4C, ps6m) {
                return (hy4C.height - ps6m.height) / 2
            },
            bottom: function(hy4C, ps6m) {
                return hy4C.height - ps6m.height
            }
        };
        return function(hy4C, ps6m, nK6E) {
            var m1x = {}
              , bs1x = (nK6E || "").split(df2x)
              , gA3x = vY8Q[bs1x[1]] || vY8Q.middle
              , gZ4d = vY8Q[bs1x[0]] || vY8Q.center;
            m1x.top = gA3x(hy4C, ps6m);
            m1x.left = gZ4d(hy4C, ps6m);
            return m1x
        }
    }();
    a9j.tV8N = cZ2x.tV8N = function(F1x, ed3x) {
        be1x.bvX4b(F1x, ed3x || a9j.t1x(F1x, "hover") || "js-hover");
        return this
    }
    ;
    a9j.Jj2x = cZ2x.Jj2x = function(F1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return;
        be1x.bvT4X(F1x)
    }
    ;
    a9j.bZY2x = cZ2x.bZY2x = function() {
        var R1x = {}
          , bKJ7C = 2;
        var caz2x = function(C1x, ed3x, d1x) {
            R1x[C1x] = [h1x.jH4L(d1x), h1x.mc5h(d1x)];
            a9j.y1x(C1x, ed3x)
        };
        var caA2x = function(C1x, ed3x, d1x) {
            var bM1x = R1x[C1x];
            if (!k1x.eL3x(bM1x))
                return;
            var cbj2x = Math.abs(h1x.jH4L(d1x) - bM1x[0])
              , cbp2x = Math.abs(h1x.mc5h(d1x) - bM1x[1]);
            if (cbj2x > bKJ7C || cbp2x > bKJ7C)
                bsR3x(C1x, ed3x)
        };
        var bsR3x = function(C1x, ed3x) {
            if (k1x.eL3x(R1x[C1x])) {
                R1x[C1x] = -1;
                a9j.x1x(C1x, ed3x)
            }
        };
        return function(F1x, ed3x) {
            var C1x = a9j.lK5P(F1x);
            if (!C1x || R1x[C1x] != null)
                return;
            R1x[C1x] = -1;
            ed3x = ed3x || a9j.t1x(C1x, "highlight") || "js-highlight";
            h1x.s1x(C1x, "touchstart", caz2x.f1x(null, C1x, ed3x));
            h1x.s1x(document, "touchmove", caA2x.f1x(null, C1x, ed3x));
            h1x.s1x(document, "touchend", bsR3x.f1x(null, C1x, ed3x));
            h1x.s1x(document, "touchcancel", bsR3x.f1x(null, C1x, ed3x))
        }
    }();
    a9j.AN0x = cZ2x.AN0x = function() {
        var cbr2x = function(C1x, ed3x, cbH2x) {
            var F1x = a9j.B1x(C1x)
              , d1x = {
                clazz: ed3x,
                target: F1x
            };
            if (a9j.bE1x(F1x, ed3x)) {
                d1x.toggled = !1;
                a9j.x1x(F1x, ed3x)
            } else {
                d1x.toggled = !0;
                a9j.y1x(F1x, ed3x)
            }
            cbH2x.call(null, d1x)
        };
        return function(F1x, e1x) {
            F1x = a9j.B1x(F1x);
            if (!!F1x) {
                var io4s = {
                    ontoggle: br1x,
                    clazz: "js-toggle",
                    element: F1x.parentNode
                };
                if (k1x.fG3x(e1x)) {
                    var g1x = a9j.B1x(e1x);
                    !!g1x ? io4s.element = g1x : io4s.clazz = e1x
                } else {
                    NEJ.EX(io4s, e1x);
                    io4s.element = a9j.B1x(io4s.element)
                }
                var C1x = a9j.lK5P(io4s.element);
                h1x.s1x(F1x, "click", cbr2x.f1x(null, C1x, io4s.clazz, io4s.ontoggle || br1x))
            }
            return this
        }
    }();
    a9j.mw5B = cZ2x.mw5B = function(F1x, e1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return;
        var ff3x = 0
          , ed3x = "js-focus";
        if (k1x.tc7V(e1x)) {
            ff3x = e1x
        } else if (k1x.fG3x(e1x)) {
            ed3x = e1x
        } else if (k1x.lQ5V(e1x)) {
            ff3x = e1x.mode || ff3x;
            ed3x = e1x.clazz || ed3x
        }
        var D1x = parseInt(a9j.t1x(F1x, "mode"));
        if (!isNaN(D1x))
            ff3x = D1x;
        D1x = a9j.t1x(F1x, "focus");
        if (!!D1x)
            ed3x = D1x;
        be1x.bvN4R(F1x, ff3x, ed3x);
        return this
    }
    ;
    a9j.dj2x = function() {
        var bz1x = {
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
        return function(fw3x, fK3x, bI1x) {
            var F1x = document.createElement(fw3x);
            NEJ.X(F1x, bz1x[fw3x.toLowerCase()]);
            if (!!fK3x)
                F1x.className = fK3x;
            bI1x = a9j.B1x(bI1x);
            if (!!bI1x)
                bI1x.appendChild(F1x);
            return F1x
        }
    }();
    a9j.Xe7X = function() {
        var cbY2x = function() {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ccJ3x = function(V1x) {
            V1x = V1x.trim();
            if (!V1x)
                return a9j.dj2x("iframe");
            var eO3x;
            try {
                eO3x = document.createElement('<iframe name="' + V1x + '"></iframe>');
                eO3x.frameBorder = 0
            } catch (e) {
                eO3x = a9j.dj2x("iframe");
                eO3x.name = V1x
            }
            return eO3x
        };
        return function(e1x) {
            e1x = e1x || bb1x;
            var eO3x = ccJ3x(e1x.name || "");
            if (!e1x.visible)
                eO3x.style.display = "none";
            if (k1x.gF3x(e1x.onload))
                h1x.s1x(eO3x, "load", function(d1x) {
                    if (!eO3x.src)
                        return;
                    h1x.hc4g(eO3x, "load");
                    e1x.onload(d1x)
                });
            var bI1x = e1x.parent;
            if (k1x.gF3x(bI1x)) {
                try {
                    bI1x(eO3x)
                } catch (e) {}
            } else {
                (a9j.B1x(bI1x) || document.body).appendChild(eO3x)
            }
            var cS2x = e1x.src || cbY2x();
            window.setTimeout(function() {
                eO3x.src = cS2x
            }, 0);
            return eO3x
        }
    }();
    a9j.cK2x = cZ2x.cK2x = function() {
        var bTd0x = function(Ao0x) {
            Ao0x.src = em3x.bwK4O
        };
        var bTV1x = function(en3x) {
            en3x.src = "about:blank"
        };
        return function(F1x, cdc3x) {
            F1x = a9j.B1x(F1x);
            if (!F1x)
                return this;
            if (!cdc3x)
                h1x.hc4g(F1x);
            delete btk3x[F1x.id];
            var fw3x = F1x.tagName;
            if (fw3x == "IFRAME") {
                bTV1x(F1x)
            } else if (fw3x == "IMG") {
                bTd0x(F1x)
            } else if (!!F1x.getElementsByTagName) {
                k1x.bd1x(F1x.getElementsByTagName("img"), bTd0x);
                k1x.bd1x(F1x.getElementsByTagName("iframe"), bTV1x)
            }
            if (!!F1x.parentNode) {
                F1x.parentNode.removeChild(F1x)
            }
            return this
        }
    }();
    a9j.mG5L = cZ2x.mG5L = function(F1x) {
        F1x = a9j.B1x(F1x);
        if (!!F1x)
            R1x.appendChild(F1x);
        return this
    }
    ;
    a9j.bVs1x = cZ2x.bVs1x = function(F1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return;
        k1x.nz5E(F1x.childNodes, function(g1x) {
            a9j.cK2x(g1x)
        })
    }
    ;
    a9j.Jq2x = cZ2x.Jq2x = function() {
        var ed3x, gH3x = /\s+/;
        var cdm3x = function() {
            if (!!ed3x)
                return;
            ed3x = a9j.tA8s(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a9j.bzL5Q()
        };
        return function(F1x, e1x) {
            F1x = a9j.B1x(F1x);
            if (!F1x)
                return;
            cdm3x();
            e1x = e1x || bb1x;
            var bI1x = F1x.parentNode;
            if (!a9j.bE1x(bI1x, ed3x)) {
                bI1x = a9j.dj2x("span", ed3x);
                F1x.insertAdjacentElement("beforeBegin", bI1x);
                bI1x.appendChild(F1x)
            }
            var bBi5n = e1x.nid || ""
              , g1x = a9j.H1x(bI1x, bBi5n || ed3x + "-show")[0];
            if (!g1x) {
                var eb3x = ((e1x.clazz || "") + " " + bBi5n).trim();
                eb3x = ed3x + "-show" + (!eb3x ? "" : " ") + eb3x;
                g1x = a9j.dj2x(e1x.tag || "span", eb3x);
                bI1x.appendChild(g1x)
            }
            var eb3x = e1x.clazz;
            if (!!eb3x) {
                eb3x = (eb3x || "").trim().split(gH3x)[0] + "-parent";
                a9j.y1x(bI1x, eb3x)
            }
            return g1x
        }
    }();
    a9j.t1x = cZ2x.t1x = function() {
        var bsC3x = {}
          , fw3x = "data-"
          , df2x = /\-(.{1})/gi;
        var EO1x = function(F1x) {
            var C1x = a9j.lK5P(F1x);
            if (!!bsC3x[C1x])
                return;
            var bz1x = {};
            k1x.bd1x(F1x.attributes, function(g1x) {
                var K1x = g1x.nodeName;
                if (K1x.indexOf(fw3x) != 0)
                    return;
                K1x = K1x.replace(fw3x, "").replace(df2x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bz1x[K1x] = g1x.nodeValue || ""
            });
            bsC3x[C1x] = bz1x
        };
        return function(F1x, K1x, D1x) {
            F1x = a9j.B1x(F1x);
            if (!F1x)
                return null;
            var bbq9h = F1x.dataset;
            if (!bbq9h) {
                EO1x(F1x);
                bbq9h = bsC3x[F1x.id]
            }
            if (D1x !== undefined)
                bbq9h[K1x] = D1x;
            return bbq9h[K1x]
        }
    }();
    a9j.gN3x = cZ2x.gN3x = function(F1x, V1x, D1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return "";
        if (D1x !== undefined && !!F1x.setAttribute)
            F1x.setAttribute(V1x, D1x);
        return be1x.btW3x(F1x, V1x)
    }
    ;
    a9j.oc6W = function(dV2x) {
        var sE7x = document.createElement("div");
        sE7x.innerHTML = dV2x;
        var i1x = a9j.dm2x(sE7x);
        return i1x.length > 1 ? sE7x : i1x[0]
    }
    ;
    a9j.cdH3x = cZ2x.cdH3x = function(F1x) {
        F1x = a9j.B1x(F1x);
        return !F1x ? "" : be1x.bvL4P(F1x)
    }
    ;
    a9j.bDQ6K = function(Bf0x) {
        Bf0x = (Bf0x || "").trim();
        return !Bf0x ? null : be1x.bvH4L(Bf0x)
    }
    ;
    a9j.cdQ3x = function(cI2x, u1x) {
        cI2x = cI2x || "";
        switch (u1x) {
        case "xml":
            cI2x = a9j.bDQ6K(cI2x);
            break;
        case "json":
            try {
                cI2x = JSON.parse(cI2x)
            } catch (ex) {
                cI2x = null
            }
            break
        }
        return cI2x
    }
    ;
    a9j.hO4S = cZ2x.hO4S = function() {
        var ceU3x = function(F1x) {
            return F1x == document.body || F1x == document.documentElement
        };
        return function(ee3x, nn5s) {
            ee3x = a9j.B1x(ee3x);
            if (!ee3x)
                return null;
            nn5s = a9j.B1x(nn5s) || null;
            var m1x = {
                x: 0,
                y: 0
            }, bsm3x, dp2x, bbG9x;
            while (!!ee3x && ee3x != nn5s) {
                bsm3x = ceU3x(ee3x);
                dp2x = bsm3x ? 0 : ee3x.scrollLeft;
                bbG9x = parseInt(a9j.dh2x(ee3x, "borderLeftWidth")) || 0;
                m1x.x += ee3x.offsetLeft + bbG9x - dp2x;
                dp2x = bsm3x ? 0 : ee3x.scrollTop;
                bbG9x = parseInt(a9j.dh2x(ee3x, "borderTopWidth")) || 0;
                m1x.y += ee3x.offsetTop + bbG9x - dp2x;
                ee3x = ee3x.offsetParent
            }
            return m1x
        }
    }();
    a9j.nl5q = cZ2x.nl5q = function(F1x) {
        var bi1x = a9j.hO4S(F1x);
        window.scrollTo(bi1x.x, bi1x.y);
        return this
    }
    ;
    a9j.cII0x = function(ue8W) {
        ue8W = (ue8W || "").trim();
        return be1x.bBD5I(ue8W)
    }
    ;
    a9j.ceV3x = cZ2x.ceV3x = function(F1x, V1x, bz1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return this;
        var D1x = be1x.bFM6G(V1x, bz1x);
        if (!D1x)
            return this;
        a9j.ba1x(F1x, "transform", D1x);
        return this
    }
    ;
    a9j.fb3x = cZ2x.fb3x = function(F1x, bz1x) {
        F1x = a9j.B1x(F1x);
        if (!!F1x)
            k1x.eI3x(bz1x, function(D1x, V1x) {
                a9j.ba1x(F1x, V1x, D1x)
            });
        return this
    }
    ;
    a9j.ceZ3x = cZ2x.ceZ3x = function(gm3x, e1x) {
        gm3x = a9j.B1x(gm3x);
        if (!gm3x)
            return {
                start: 0,
                end: 0
            };
        if (k1x.tc7V(e1x))
            e1x = {
                start: e1x,
                end: e1x
            };
        if (e1x != null) {
            if (e1x.end == null)
                e1x.end = e1x.start || 0;
            be1x.bvS4W(gm3x, e1x)
        } else {
            e1x = be1x.bvO4S(gm3x)
        }
        return e1x
    }
    ;
    a9j.ba1x = cZ2x.ba1x = function(F1x, V1x, D1x) {
        F1x = a9j.B1x(F1x);
        if (!!F1x)
            be1x.but3x(F1x, V1x, D1x);
        return this
    }
    ;
    a9j.dh2x = cZ2x.dh2x = function(F1x, V1x) {
        F1x = a9j.B1x(F1x);
        if (!F1x)
            return "";
        var hj4n = !window.getComputedStyle ? F1x.currentStyle || bb1x : window.getComputedStyle(F1x, null);
        return hj4n[be1x.bJl7e(V1x)] || ""
    }
    ;
    a9j.bHB7u = function() {
        var df2x = /[\s\r\n]+/gi;
        return function(cj1x) {
            cj1x = (cj1x || "").trim().replace(df2x, " ");
            if (!cj1x)
                return;
            var g1x = a9j.dj2x("style");
            document.head.appendChild(g1x);
            be1x.bul3x(g1x, be1x.bWN1x(cj1x));
            return g1x
        }
    }();
    a9j.bHJ7C = function(zU9L) {
        try {
            zU9L = zU9L.trim();
            if (!!zU9L)
                return (new Function(zU9L))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
    ;
    a9j.tA8s = function() {
        var df2x = /#<.*?>/g
          , gK3x = +(new Date);
        return function(kv5A) {
            if (!Je2x)
                Je2x = [];
            var fK3x = "auto-" + gK3x++;
            Je2x.push(kv5A.replace(df2x, fK3x));
            return fK3x
        }
    }();
    a9j.bzL5Q = function() {
        if (!!Je2x) {
            a9j.bHB7u(Je2x.join(""));
            Je2x = null
        }
        return this
    }
    ;
    a9j.cIF0x = function(cj1x, kv5A) {
        cj1x = a9j.B1x(cj1x);
        return !cj1x ? null : be1x.bui3x(cj1x, kv5A)
    }
    ;
    a9j.y1x = cZ2x.y1x = function() {
        be1x.bwn4r.apply(be1x, arguments);
        return this
    }
    ;
    a9j.x1x = cZ2x.x1x = function() {
        be1x.bwj4n.apply(be1x, arguments);
        return this
    }
    ;
    a9j.fj3x = cZ2x.fj3x = function() {
        be1x.UF6z.apply(be1x, arguments);
        return this
    }
    ;
    a9j.bE1x = cZ2x.bE1x = function() {
        return be1x.bvY4c.apply(be1x, arguments)
    }
    ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    cZ2x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , fA3x = NEJ.R
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h")
      , k1x = c0x("nej.u");
    var DO1x = function(j1x, u1x) {
        try {
            u1x = u1x.toLowerCase();
            if (j1x === null)
                return u1x == "null";
            if (j1x === undefined)
                return u1x == "undefined";
            return bb1x.toString.call(j1x).toLowerCase() == "[object " + u1x + "]"
        } catch (e) {
            return !1
        }
    };
    k1x.gF3x = function(j1x) {
        return DO1x(j1x, "function")
    }
    ;
    k1x.fG3x = function(j1x) {
        return DO1x(j1x, "string")
    }
    ;
    k1x.tc7V = function(j1x) {
        return DO1x(j1x, "number")
    }
    ;
    k1x.cIE0x = function(j1x) {
        return DO1x(j1x, "boolean")
    }
    ;
    k1x.Ex1x = function(j1x) {
        return DO1x(j1x, "date")
    }
    ;
    k1x.eL3x = function(j1x) {
        return DO1x(j1x, "array")
    }
    ;
    k1x.lQ5V = function(j1x) {
        return DO1x(j1x, "object")
    }
    ;
    k1x.fy3x = function() {
        var df2x = /[^\x00-\xfff]/g;
        return function(bo1x) {
            return ("" + (bo1x || "")).replace(df2x, "**").length
        }
    }();
    k1x.di2x = function(i1x, p1x) {
        var dZ3x = k1x.gF3x(p1x) ? p1x : function(D1x) {
            return D1x === p1x
        }
          , r1x = k1x.eI3x(i1x, dZ3x);
        return r1x != null ? r1x : -1
    }
    ;
    k1x.cIA0x = function() {
        var bKE7x;
        var Ty6s = function(i1x, pb6V, oZ6T) {
            if (pb6V > oZ6T)
                return -1;
            var Gg1x = Math.ceil((pb6V + oZ6T) / 2)
              , m1x = bKE7x(i1x[Gg1x], Gg1x, i1x);
            if (m1x == 0)
                return Gg1x;
            if (m1x < 0)
                return Ty6s(i1x, pb6V, Gg1x - 1);
            return Ty6s(i1x, Gg1x + 1, oZ6T)
        };
        return function(i1x, Jc2x) {
            bKE7x = Jc2x || br1x;
            return Ty6s(i1x, 0, i1x.length - 1)
        }
    }();
    k1x.nz5E = function(i1x, cA1x, P1x) {
        if (!i1x || !i1x.length || !k1x.gF3x(cA1x))
            return null;
        for (var i = i1x.length - 1; i >= 0; i--)
            if (!!cA1x.call(P1x, i1x[i], i, i1x))
                return i;
        return null
    }
    ;
    k1x.bd1x = function(i1x, cA1x, P1x) {
        if (!i1x || !i1x.length || !k1x.gF3x(cA1x))
            return this;
        if (!!i1x.forEach) {
            i1x.forEach(cA1x, P1x);
            return this
        }
        for (var i = 0, l = i1x.length; i < l; i++)
            cA1x.call(P1x, i1x[i], i, i1x);
        return this
    }
    ;
    k1x.eI3x = function(i1x, cA1x, P1x) {
        if (!i1x || !k1x.gF3x(cA1x))
            return null;
        if (i1x.length != null) {
            if (i1x.length > 0)
                for (var i = 0, l = i1x.length; i < l; i++)
                    if (!!cA1x.call(P1x, i1x[i], i, i1x))
                        return i
        }
        if (k1x.lQ5V(i1x)) {
            for (var x in i1x)
                if (i1x.hasOwnProperty(x) && !!cA1x.call(P1x, i1x[x], x, i1x))
                    return x
        }
        return null
    }
    ;
    k1x.cfU3x = function(jq4u, cgc3x, e1x) {
        jq4u = jq4u || [];
        e1x = e1x || bb1x;
        var bOA8s = !!e1x.union
          , wj8b = !!e1x.begin
          , beA0x = e1x.compare
          , cgl3x = bOA8s && wj8b ? k1x.nz5E : k1x.bd1x;
        cgl3x(cgc3x, function(p1x) {
            if (!!beA0x)
                beA0x = beA0x.ew3x(p1x);
            var r1x = k1x.di2x(jq4u, beA0x || p1x);
            if (r1x >= 0)
                jq4u.splice(r1x, 1);
            if (bOA8s)
                jq4u[wj8b ? "unshift" : "push"](p1x)
        });
        return jq4u
    }
    ;
    k1x.AT0x = function(bz1x, bo1x) {
        if (!bz1x || !bo1x || !bo1x.replace)
            return bo1x || "";
        return bo1x.replace(bz1x.r, function($1) {
            var m1x = bz1x[!bz1x.i ? $1.toLowerCase() : $1];
            return m1x != null ? m1x : $1
        })
    }
    ;
    k1x.dG2x = function() {
        var bz1x = {
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
        return function(bo1x) {
            return k1x.AT0x(bz1x, bo1x)
        }
    }();
    k1x.AU0x = function() {
        var bz1x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bo1x) {
            return k1x.AT0x(bz1x, bo1x)
        }
    }();
    k1x.ig4k = function() {
        var bz1x = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
          , cgz4D = ["上午", "下午"]
          , cgR4V = ["A.M.", "P.M."]
          , bqZ3x = ["日", "一", "二", "三", "四", "五", "六"]
          , cgW4a = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
          , chA4E = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Vw7p = function(ha4e) {
            ha4e = parseInt(ha4e) || 0;
            return (ha4e < 10 ? "0" : "") + ha4e
        };
        var chI4M = function(pO6I) {
            return pO6I < 12 ? 0 : 1
        };
        return function(bA1x, JG2x, chS4W) {
            if (!bA1x || !JG2x)
                return "";
            bA1x = k1x.WW7P(bA1x);
            bz1x.yyyy = bA1x.getFullYear();
            bz1x.yy = ("" + bz1x.yyyy).substr(2);
            bz1x.M = bA1x.getMonth() + 1;
            bz1x.MM = Vw7p(bz1x.M);
            bz1x.eM = chA4E[bz1x.M - 1];
            bz1x.cM = cgW4a[bz1x.M - 1];
            bz1x.d = bA1x.getDate();
            bz1x.dd = Vw7p(bz1x.d);
            bz1x.H = bA1x.getHours();
            bz1x.HH = Vw7p(bz1x.H);
            bz1x.m = bA1x.getMinutes();
            bz1x.mm = Vw7p(bz1x.m);
            bz1x.s = bA1x.getSeconds();
            bz1x.ss = Vw7p(bz1x.s);
            bz1x.ms = bA1x.getMilliseconds();
            bz1x.w = bqZ3x[bA1x.getDay()];
            var bzw5B = chI4M(bz1x.H);
            bz1x.ct = cgz4D[bzw5B];
            bz1x.et = cgR4V[bzw5B];
            if (!!chS4W) {
                bz1x.H = bz1x.H % 12
            }
            return k1x.AT0x(bz1x, JG2x)
        }
    }();
    k1x.WW7P = function(bA1x) {
        var da2x = bA1x;
        if (k1x.fG3x(bA1x))
            da2x = new Date(Date.parse(bA1x));
        if (!k1x.Ex1x(bA1x))
            da2x = new Date(bA1x);
        return da2x
    }
    ;
    k1x.Jj2x = function(chT4X, cig4k) {
        return (new Number(chT4X)).toFixed(cig4k)
    }
    ;
    k1x.bqF3x = function() {
        var gH3x = /([^\/:])\/.*$/
          , kz5E = /\/[^\/]+$/
          , Fj1x = /[#\?]/
          , bqz3x = location.href.split(/[?#]/)[0]
          , sS7L = document.createElement("a");
        var bqy3x = function(ji4m) {
            return (ji4m || "").indexOf("://") > 0
        };
        var bBQ5V = function(ji4m) {
            return (ji4m || "").split(Fj1x)[0].replace(kz5E, "/")
        };
        var ciz4D = function(ji4m, gb3x) {
            if (ji4m.indexOf("/") == 0)
                return gb3x.replace(gH3x, "$1") + ji4m;
            return bBQ5V(gb3x) + ji4m
        };
        bqz3x = bBQ5V(bqz3x);
        return function(ji4m, gb3x) {
            ji4m = (ji4m || "").trim();
            if (!bqy3x(gb3x))
                gb3x = bqz3x;
            if (!ji4m)
                return gb3x;
            if (bqy3x(ji4m))
                return ji4m;
            ji4m = ciz4D(ji4m, gb3x);
            sS7L.href = ji4m;
            ji4m = sS7L.href;
            return bqy3x(ji4m) ? ji4m : sS7L.getAttribute("href", 4)
        }
    }();
    k1x.ciE4I = function() {
        var df2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(X1x) {
            if (df2x.test(X1x || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k1x.bCC5H = function(G1x, io4s) {
        if (!G1x)
            return io4s;
        var V1x = G1x.tagName.toLowerCase()
          , i1x = a9j.dm2x(G1x);
        if (!i1x || !i1x.length) {
            io4s[V1x] = G1x.textContent || G1x.text || "";
            return io4s
        }
        var cl1x = {};
        io4s[V1x] = cl1x;
        k1x.bd1x(i1x, function(g1x) {
            k1x.bCC5H(g1x, cl1x)
        });
        return io4s
    }
    ;
    k1x.cId0x = function(Bf0x) {
        try {
            return k1x.bCC5H(a9j.bDQ6K(Bf0x), {})
        } catch (ex) {
            return null
        }
    }
    ;
    k1x.Nn3x = function(hZ4d, Nw4A) {
        var io4s = {};
        k1x.bd1x((hZ4d || "").split(Nw4A), function(V1x) {
            var Yk7d = V1x.split("=");
            if (!Yk7d || !Yk7d.length)
                return;
            var K1x = Yk7d.shift();
            if (!K1x)
                return;
            io4s[decodeURIComponent(K1x)] = decodeURIComponent(Yk7d.join("="))
        });
        return io4s
    }
    ;
    k1x.ut8l = function(gv3x, Nw4A, cjY4c) {
        if (!gv3x)
            return "";
        var bs1x = [];
        for (var x in gv3x) {
            bs1x.push(encodeURIComponent(x) + "=" + (!!cjY4c ? encodeURIComponent(gv3x[x]) : gv3x[x]))
        }
        return bs1x.join(Nw4A || ",")
    }
    ;
    k1x.hq4u = function(bv1x) {
        return k1x.Nn3x(bv1x, "&")
    }
    ;
    k1x.cF2x = function(gv3x) {
        return k1x.ut8l(gv3x, "&", !0)
    }
    ;
    k1x.cIb0x = function(gv3x) {
        return be1x.Iv2x(gv3x)
    }
    ;
    k1x.cIa0x = function(i1x, dZ3x) {
        var m1x = {};
        k1x.bd1x(i1x, function(p1x) {
            var K1x = p1x;
            if (!!dZ3x) {
                K1x = dZ3x(p1x)
            }
            m1x[K1x] = p1x
        });
        return m1x
    }
    ;
    k1x.cHZ0x = function(ha4e, gd3x) {
        var cjZ4d = ("" + ha4e).length
          , ckg4k = Math.max(1, parseInt(gd3x) || 0)
          , dp2x = ckg4k - cjZ4d;
        if (dp2x > 0) {
            ha4e = (new Array(dp2x + 1)).join("0") + ha4e
        }
        return "" + ha4e
    }
    ;
    k1x.YC7v = function(gv3x, V1x) {
        if (!k1x.eL3x(V1x)) {
            try {
                delete gv3x[V1x]
            } catch (e) {
                gv3x[V1x] = undefined
            }
            return this
        }
        k1x.bd1x(V1x, k1x.YC7v.f1x(k1x, gv3x));
        return this
    }
    ;
    k1x.Sj6d = function() {
        var bGf6Z = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bq1x) {
            bq1x = bq1x || 10;
            var m1x = [];
            for (var i = 0, bGh6b; i < bq1x; ++i) {
                bGh6b = Math.floor(Math.random() * bGf6Z.length);
                m1x.push(bGf6Z.charAt(bGh6b))
            }
            return m1x.join("")
        }
    }();
    k1x.Bj0x = function(fC3x, fr3x) {
        return Math.floor(Math.random() * (fr3x - fC3x) + fC3x)
    }
    ;
    k1x.nS6M = function(bq1x) {
        bq1x = Math.max(0, Math.min(bq1x || 8, 30));
        var fC3x = Math.pow(10, bq1x - 1)
          , fr3x = fC3x * 10;
        return k1x.Bj0x(fC3x, fr3x).toString()
    }
    ;
    k1x.YG8y = function() {
        var gK3x = +(new Date);
        return function() {
            return "" + gK3x++
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fA3x = NEJ.R, br1x = NEJ.F, h1x = c0x("nej.v"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), oI6C;
    if (!!O1x.cJ2x)
        return;
    O1x.cJ2x = NEJ.C();
    oI6C = O1x.cJ2x.prototype;
    O1x.cJ2x.A1x = function(e1x) {
        e1x = e1x || {};
        var cD2x = !!this.Bk0x && this.Bk0x.shift();
        if (!cD2x) {
            cD2x = new this(e1x);
            this.ckl4p = (this.ckl4p || 0) + 1
        }
        cD2x.bl1x(e1x);
        return cD2x
    }
    ;
    O1x.cJ2x.T1x = function() {
        var Oe4i = function(p1x, r1x, i1x) {
            p1x.T1x();
            i1x.splice(r1x, 1)
        };
        return function(cD2x) {
            if (!cD2x)
                return null;
            if (!k1x.eL3x(cD2x)) {
                if (!(cD2x instanceof this)) {
                    var fK3x = cD2x.constructor;
                    if (!!fK3x.T1x)
                        fK3x.T1x(cD2x);
                    return null
                }
                if (cD2x == this.fk3x)
                    delete this.fk3x;
                if (cD2x == this.Bm0x)
                    delete this.Bm0x;
                cD2x.bC1x();
                if (!this.Bk0x)
                    this.Bk0x = [];
                if (k1x.di2x(this.Bk0x, cD2x) < 0) {
                    this.Bk0x.push(cD2x)
                }
                return null
            }
            k1x.nz5E(cD2x, Oe4i, this)
        }
    }();
    O1x.cJ2x.gg3x = function(e1x) {
        e1x = e1x || {};
        if (!this.fk3x)
            this.fk3x = this.A1x(e1x);
        return this.fk3x
    }
    ;
    O1x.cJ2x.bJW7P = function(e1x, rx7q) {
        e1x = e1x || {};
        if (!!rx7q && !!this.Bm0x) {
            this.Bm0x.T1x();
            delete this.Bm0x
        }
        if (!this.Bm0x) {
            this.Bm0x = this.A1x(e1x)
        } else {
            this.Bm0x.bl1x(e1x)
        }
        return this.Bm0x
    }
    ;
    oI6C.cx1x = function() {
        var gK3x = +(new Date);
        return function() {
            this.id = gK3x++;
            this.ma5f = {};
            this.bKx7q = {}
        }
    }();
    oI6C.bl1x = function(e1x) {
        this.bpw2x(e1x)
    }
    ;
    oI6C.bC1x = function() {
        this.hc4g();
        this.Kh2x()
    }
    ;
    oI6C.bX1x = function() {
        var gK3x = +(new Date);
        var cky4C = function(bf1x) {
            if (!bf1x || bf1x.length < 3)
                return;
            this.bKx7q["de-" + gK3x++] = bf1x;
            h1x.s1x.apply(h1x, bf1x)
        };
        return function(i1x) {
            k1x.bd1x(i1x, cky4C, this)
        }
    }();
    oI6C.Kh2x = function() {
        var ckO5T = function(bf1x, K1x, bz1x) {
            delete bz1x[K1x];
            h1x.mU5Z.apply(h1x, bf1x)
        };
        return function() {
            k1x.eI3x(this.bKx7q, ckO5T)
        }
    }();
    oI6C.cHS0x = function(dZ3x) {
        dZ3x = dZ3x || br1x;
        k1x.eI3x(this, function(FW1x, K1x, bz1x) {
            if (!!FW1x && !!FW1x.T1x && !dZ3x(FW1x)) {
                delete bz1x[K1x];
                FW1x.T1x()
            }
        })
    }
    ;
    oI6C.T1x = function() {
        this.constructor.T1x(this)
    }
    ;
    oI6C.bpr2x = function(u1x) {
        var d1x = this.ma5f[u1x.toLowerCase()];
        return !!d1x && d1x !== br1x
    }
    ;
    oI6C.s1x = function(u1x, d1x) {
        this.wv8n.apply(this, arguments);
        return this
    }
    ;
    oI6C.mU5Z = function(u1x, d1x) {
        var u1x = (u1x || "").toLowerCase()
          , ef3x = this.ma5f[u1x];
        if (!k1x.eL3x(ef3x)) {
            if (ef3x == d1x)
                delete this.ma5f[u1x];
            return
        }
        k1x.nz5E(ef3x, function(ex3x, r1x, i1x) {
            if (ex3x == d1x)
                i1x.splice(r1x, 1)
        })
    }
    ;
    oI6C.wv8n = function(u1x, d1x) {
        if (!!u1x && k1x.gF3x(d1x))
            this.ma5f[u1x.toLowerCase()] = d1x;
        return this
    }
    ;
    oI6C.bpw2x = function() {
        var cmi5n = function(d1x, u1x) {
            this.wv8n(u1x, d1x)
        };
        return function(ef3x) {
            k1x.eI3x(ef3x, cmi5n, this);
            return this
        }
    }();
    oI6C.hc4g = function() {
        var bpm2x = function(d1x, u1x) {
            this.hc4g(u1x)
        };
        return function(u1x) {
            var u1x = (u1x || "").toLowerCase();
            if (!!u1x) {
                delete this.ma5f[u1x]
            } else {
                k1x.eI3x(this.ma5f, bpm2x, this)
            }
            return this
        }
    }();
    oI6C.bpi2x = function(u1x, d1x) {
        if (!u1x || !k1x.gF3x(d1x))
            return this;
        u1x = u1x.toLowerCase();
        var ef3x = this.ma5f[u1x];
        if (!ef3x) {
            this.ma5f[u1x] = d1x;
            return this
        }
        if (!k1x.eL3x(ef3x)) {
            this.ma5f[u1x] = [ef3x]
        }
        this.ma5f[u1x].push(d1x);
        return this
    }
    ;
    oI6C.z1x = function(u1x) {
        var d1x = this.ma5f[(u1x || "").toLowerCase()];
        if (!d1x)
            return this;
        var bf1x = fA3x.slice.call(arguments, 1);
        if (!k1x.eL3x(d1x))
            return d1x.apply(this, bf1x);
        k1x.bd1x(d1x, function(dx2x) {
            try {
                dx2x.apply(this, bf1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
    ;
    O1x.bab8T = function() {
        var R1x = {};
        return function(C1x, fK3x, e1x) {
            var fg3x = fK3x.cnj5o;
            if (!fg3x) {
                fg3x = k1x.Sj6d(10);
                fK3x.cnj5o = fg3x
            }
            var K1x = C1x + "-" + fg3x
              , cD2x = R1x[K1x];
            if (!!e1x && !cD2x) {
                cD2x = fK3x.A1x(e1x);
                cD2x.T1x = cD2x.T1x.eH3x(function(d1x) {
                    delete R1x[K1x];
                    delete cD2x.T1x
                });
                R1x[K1x] = cD2x
            }
            return cD2x
        }
    }()
}
)();
(function() {
    var o = NEJ.O
      , u = NEJ.P("nej.u")
      , j = NEJ.P("nej.j");
    j.gw3x = function() {
        var da2x = new Date
          , cnD5I = +da2x
          , boT2x = 864e5;
        var cog5l = function(V1x) {
            var sd7W = document.cookie
              , sZ7S = "\\b" + V1x + "="
              , bau8m = sd7W.search(sZ7S);
            if (bau8m < 0)
                return "";
            bau8m += sZ7S.length - 2;
            var wx8p = sd7W.indexOf(";", bau8m);
            if (wx8p < 0)
                wx8p = sd7W.length;
            return sd7W.substring(bau8m, wx8p) || ""
        };
        return function(V1x, j1x) {
            if (j1x === undefined)
                return cog5l(V1x);
            if (u.fG3x(j1x)) {
                if (!!j1x) {
                    document.cookie = V1x + "=" + j1x + ";";
                    return j1x
                }
                j1x = {
                    expires: -100
                }
            }
            j1x = j1x || o;
            var sd7W = V1x + "=" + (j1x.value || "") + ";";
            delete j1x.value;
            if (j1x.expires !== undefined) {
                da2x.setTime(cnD5I + j1x.expires * boT2x);
                j1x.expires = da2x.toGMTString()
            }
            sd7W += u.ut8l(j1x, ";");
            document.cookie = sd7W
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, iv4z = c0x("nej.c"), em3x = c0x("nej.g"), a9j = c0x("nej.e"), v1x = c0x("nej.j"), I1x = c0x("nej.ut"), O1x = c0x("nej.ut.j"), k1x = c0x("nej.u"), b0x;
    if (!!O1x.Km2x)
        return;
    O1x.Km2x = NEJ.C();
    b0x = O1x.Km2x.N1x(I1x.cJ2x);
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.pE6y = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pE6y, e1x);
        var CB0x = iv4z.B1x("csrf");
        if ((/^\/[^\/]/.test(this.pE6y.url) || this.pE6y.url.indexOf(location.protocol + "//" + location.host) == 0) && !!CB0x.cookie && !!CB0x.param) {
            var bv1x = encodeURIComponent(CB0x.param) + "=" + encodeURIComponent(v1x.gw3x(CB0x.cookie) || "")
              , Nw4A = this.pE6y.url.indexOf("?") < 0 ? "?" : "&";
            this.pE6y.url += Nw4A + bv1x
        }
        this.bay8q = e1x.headers || {};
        var bo1x = this.bay8q[em3x.zA9r];
        if (bo1x == null)
            this.bay8q[em3x.zA9r] = em3x.bWw1x
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.Bs0x;
        delete this.pE6y;
        delete this.bay8q
    }
    ;
    b0x.cov5A = function(bo1x) {
        var bz1x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pE6y.noescape) {
            return k1x.AT0x(bz1x, bo1x)
        } else {
            return bo1x
        }
    }
    ;
    b0x.vp8h = function(d1x) {
        var eA3x = d1x.status;
        if (eA3x == -1) {
            this.z1x("onerror", {
                code: em3x.bSv0x,
                message: "请求[" + this.pE6y.url + "]超时！"
            });
            return
        }
        if (("" + eA3x).indexOf("2") != 0) {
            this.z1x("onerror", {
                data: eA3x,
                code: em3x.bwZ4d,
                message: "服务器返回异常状态[" + eA3x + "]!",
                extData: d1x.result
            });
            return
        }
        this.z1x("onload", a9j.cdQ3x(this.cov5A(d1x.result), this.pE6y.type))
    }
    ;
    b0x.cq1x = br1x;
    b0x.boF2x = function(j1x) {
        var X1x = this.pE6y.url;
        if (!X1x) {
            this.z1x("onerror", {
                code: em3x.bxg4k,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pE6y.data = j1x == null ? null : j1x;
            var d1x = {
                request: this.pE6y,
                headers: this.bay8q
            };
            try {
                this.z1x("onbeforerequest", d1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cq1x(d1x)
        } catch (e) {
            this.z1x("onerror", {
                code: em3x.bwZ4d,
                message: "请求[" + X1x + "]失败:" + e.message + "！"
            })
        }
        return this
    }
    ;
    b0x.kn5s = br1x
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, be1x = c0x("nej.h"), em3x = c0x("nej.g"), k1x = c0x("nej.u"), O1x = c0x("nej.ut.j"), R1x = {}, OB4F;
    if (!!O1x.bbC9t)
        return;
    O1x.bbC9t = NEJ.C();
    OB4F = O1x.bbC9t.N1x(O1x.Km2x);
    OB4F.bC1x = function() {
        this.bF1x();
        window.clearTimeout(this.eh3x);
        delete this.eh3x;
        try {
            this.rV7O.onreadystatechange = br1x;
            this.rV7O.abort()
        } catch (e) {}
        delete this.rV7O
    }
    ;
    OB4F.cq1x = function() {
        var cow5B = function(D1x, K1x) {
            this.rV7O.setRequestHeader(K1x, D1x)
        };
        return function(e1x) {
            var gf3x = e1x.request
              , oA6u = e1x.headers;
            this.rV7O = be1x.bov2x();
            if (oA6u[em3x.zA9r] === em3x.Gw1x) {
                delete oA6u[em3x.zA9r];
                this.rV7O.upload.onprogress = this.gn3x.f1x(this, 1);
                if (gf3x.data.tagName === "FORM")
                    gf3x.data = new FormData(gf3x.data)
            }
            this.rV7O.onreadystatechange = this.gn3x.f1x(this, 2);
            if (gf3x.timeout != 0) {
                this.eh3x = window.setTimeout(this.gn3x.f1x(this, 3), gf3x.timeout)
            }
            this.rV7O.open(gf3x.method, gf3x.url, !gf3x.sync);
            k1x.eI3x(oA6u, cow5B, this);
            if (!!this.pE6y.cookie && "withCredentials"in this.rV7O)
                this.rV7O.withCredentials = !0;
            this.rV7O.send(gf3x.data)
        }
    }();
    OB4F.gn3x = function(u1x) {
        switch (u1x) {
        case 1:
            this.z1x("onuploading", arguments[1]);
            break;
        case 2:
            if (this.rV7O.readyState == 4)
                this.vp8h({
                    status: this.rV7O.status,
                    result: this.rV7O.responseText || ""
                });
            break;
        case 3:
            this.vp8h({
                status: -1
            });
            break
        }
    }
    ;
    OB4F.kn5s = function() {
        this.vp8h({
            status: 0
        });
        return this
    }
}
)();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var ON4R = {}, bbQ9H = [], bDG6A = /\s+/g, gK3x = +(new Date), Kw2x, bR1x, hK4O;
    var FV1x = function() {
        var gH3x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
          , kz5E = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
          , Fj1x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
          , bor2x = /^new\s+/
          , coA5F = /['"]/;
        var coW6Q = function(D1x) {
            if (gH3x.test(D1x))
                return;
            D1x = D1x.split(".")[0].trim();
            if (!D1x || coA5F.test(D1x))
                return;
            D1x = D1x.replace(bor2x, "");
            try {
                if (Fj1x.test(D1x))
                    return;
                hK4O[D1x] = 1
            } catch (e) {}
        };
        return function(bo1x) {
            bo1x = bo1x || "";
            if (!bo1x || gH3x.test(bo1x))
                return;
            var bs1x = bo1x.split(kz5E);
            for (var i = 0, l = bs1x.length; i < l; i++)
                coW6Q(bs1x[i])
        }
    }();
    var coY6S = function(dJ2x) {
        if (dJ2x[2] != "in")
            throw "bad for loop statement: " + dJ2x.join(" ");
        bbQ9H.push(dJ2x[1]);
        FV1x(dJ2x[3]);
        return "var __HASH__" + dJ2x[1] + " = " + dJ2x[3] + "," + dJ2x[1] + "," + dJ2x[1] + "_count=0;" + "if (!!__HASH__" + dJ2x[1] + ")" + "for(var " + dJ2x[1] + "_key in __HASH__" + dJ2x[1] + "){" + dJ2x[1] + " = __HASH__" + dJ2x[1] + "[" + dJ2x[1] + "_key];" + "if (typeof(" + dJ2x[1] + ')=="function") continue;' + dJ2x[1] + "_count++;"
    };
    var cpa6U = function() {
        var dJ2x = bbQ9H[bbQ9H.length - 1];
        return "}; if(!__HASH__" + dJ2x + "||!" + dJ2x + "_count){"
    };
    var cpc6W = function() {
        bbQ9H.pop();
        return "};"
    };
    var cpd6X = function(dJ2x) {
        if (dJ2x[2] != "as")
            throw "bad for list loop statement: " + dJ2x.join(" ");
        var Pb4f = dJ2x[1].split("..");
        if (Pb4f.length > 1) {
            FV1x(Pb4f[0]);
            FV1x(Pb4f[1]);
            return "for(var " + dJ2x[3] + "," + dJ2x[3] + "_index=0," + dJ2x[3] + "_beg=" + Pb4f[0] + "," + dJ2x[3] + "_end=" + Pb4f[1] + "," + dJ2x[3] + "_length=parseInt(" + dJ2x[3] + "_end-" + dJ2x[3] + "_beg+1);" + dJ2x[3] + "_index<" + dJ2x[3] + "_length;" + dJ2x[3] + "_index++){" + dJ2x[3] + " = " + dJ2x[3] + "_beg+" + dJ2x[3] + "_index;"
        } else {
            FV1x(dJ2x[1]);
            return "for(var __LIST__" + dJ2x[3] + " = " + dJ2x[1] + "," + dJ2x[3] + "," + dJ2x[3] + "_index=0," + dJ2x[3] + "_length=__LIST__" + dJ2x[3] + ".length;" + dJ2x[3] + "_index<" + dJ2x[3] + "_length;" + dJ2x[3] + "_index++){" + dJ2x[3] + " = __LIST__" + dJ2x[3] + "[" + dJ2x[3] + "_index];"
        }
    };
    var cpe6Y = function(dJ2x) {
        if (!dJ2x || !dJ2x.length)
            return;
        dJ2x.shift();
        var V1x = dJ2x[0].split("(")[0];
        return "var " + V1x + " = function" + dJ2x.join("").replace(V1x, "") + "{var __OUT=[];"
    };
    var cpf6Z = function(dJ2x) {
        if (!dJ2x[1])
            throw "bad include statement: " + dJ2x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var boc2x = function(kw5B, dJ2x) {
        FV1x(dJ2x.slice(1).join(" "));
        return kw5B
    };
    var cph6b = function(dJ2x) {
        return boc2x("if(", dJ2x)
    };
    var cpo6i = function(dJ2x) {
        return boc2x("}else if(", dJ2x)
    };
    var cps6m = function(dJ2x) {
        return boc2x("var ", dJ2x)
    };
    bR1x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cph6b,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cpo6i,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: coY6S,
                pmin: 3
            },
            forelse: {
                pfix: cpa6U
            },
            "/for": {
                pfix: cpc6W
            },
            list: {
                pfix: cpd6X,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cps6m,
                sfix: ";"
            },
            macro: {
                pfix: cpe6Y
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    Kw2x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    Kw2x = null
                }
            },
            inline: {
                pfix: cpf6Z,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(kw5B) {
                return (kw5B || "") + "" + gK3x
            },
            "default": function(D1x, ky5D) {
                return D1x || ky5D
            }
        }
    };
    var cpw6q = function() {
        var cpy6s = /\\([\{\}])/g;
        return function(bo1x, jC4G) {
            bo1x = bo1x.replace(cpy6s, "$1");
            var dJ2x = bo1x.slice(1, -1).split(bDG6A)
              , bh1x = bR1x.def[dJ2x[0]];
            if (!bh1x) {
                bdc9T(bo1x, jC4G);
                return
            }
            if (!!bh1x.pmin && bh1x.pmin >= dJ2x.length)
                throw "Statement needs more parameters:" + bo1x;
            jC4G.push(!!bh1x.pfix && typeof bh1x.pfix != "string" ? bh1x.pfix(dJ2x) : bh1x.pfix || "");
            if (!!bh1x.sfix) {
                if (dJ2x.length <= 1) {
                    if (!!bh1x.pdft)
                        jC4G.push(bh1x.pdft)
                } else {
                    for (var i = 1, l = dJ2x.length; i < l; i++) {
                        if (i > 1)
                            jC4G.push(" ");
                        jC4G.push(dJ2x[i])
                    }
                }
                jC4G.push(bh1x.sfix)
            }
        }
    }();
    var bHR7K = function(KF2x, jC4G) {
        if (!KF2x || !KF2x.length)
            return;
        if (KF2x.length == 1) {
            var bnF2x = KF2x.pop();
            FV1x(bnF2x);
            jC4G.push(bnF2x == "" ? '""' : bnF2x);
            return
        }
        var bnE2x = KF2x.pop().split(":");
        jC4G.push("__MDF['" + bnE2x.shift() + "'](");
        bHR7K(KF2x, jC4G);
        if (bnE2x.length > 0) {
            var bf1x = bnE2x.join(":");
            FV1x(bf1x);
            jC4G.push("," + bf1x)
        }
        jC4G.push(")")
    };
    var bdc9T = function(bo1x, jC4G) {
        if (!bo1x)
            return;
        var wH8z = bo1x.split("\n");
        if (!wH8z || !wH8z.length)
            return;
        for (var i = 0, l = wH8z.length, hv4z; i < l; i++) {
            hv4z = wH8z[i];
            if (!!Kw2x) {
                hv4z = hv4z.trim();
                if (!hv4z)
                    continue
            }
            cpO6I(hv4z, jC4G);
            if (!!Kw2x && i < l - 1)
                jC4G.push("__OUT.push('\\n');")
        }
    };
    var cpO6I = function() {
        var cpS6M = /\|\|/g
          , cpV6P = /#@@#/g;
        return function(bo1x, jC4G) {
            var PA5F = "}", PB5G = -1, bq1x = bo1x.length, wj8b, fR3x, KO2x, bez0x, PM5R;
            while (PB5G + PA5F.length < bq1x) {
                wj8b = "${";
                fR3x = "}";
                KO2x = bo1x.indexOf(wj8b, PB5G + PA5F.length);
                if (KO2x < 0)
                    break;
                if (bo1x.charAt(KO2x + 2) == "%") {
                    wj8b = "${%";
                    fR3x = "%}"
                }
                bez0x = bo1x.indexOf(fR3x, KO2x + wj8b.length);
                if (bez0x < 0)
                    break;
                beM0x(bo1x.substring(PB5G + PA5F.length, KO2x), jC4G);
                PM5R = bo1x.substring(KO2x + wj8b.length, bez0x).replace(cpS6M, "#@@#").split("|");
                for (var i = 0, l = PM5R.length; i < l; PM5R[i] = PM5R[i].replace(cpV6P, "||"),
                i++)
                    ;
                jC4G.push("__OUT.push(");
                bHR7K(PM5R, jC4G);
                jC4G.push(");");
                PA5F = fR3x;
                PB5G = bez0x
            }
            beM0x(bo1x.substring(PB5G + PA5F.length), jC4G)
        }
    }();
    var beM0x = function() {
        var bz1x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cpZ6T = function(bo1x) {
            return (bo1x || "").replace(bz1x.r, function($1) {
                return bz1x[$1] || $1
            })
        };
        return function(bo1x, jC4G) {
            if (!bo1x)
                return;
            jC4G.push("__OUT.push('" + cpZ6T(bo1x) + "');")
        }
    }();
    var cqh6b = function() {
        var cqi6c = /\t/g
          , cqj6d = /\n/g
          , cqk6e = /\r\n?/g;
        var bNl8d = function(bo1x, wj8b) {
            var r1x = bo1x.indexOf("}", wj8b + 1);
            while (bo1x.charAt(r1x - 1) == "\\") {
                r1x = bo1x.indexOf("}", r1x + 1)
            }
            return r1x
        };
        var cqo6i = function() {
            var bs1x = []
              , EF1x = arguments[0];
            for (var x in EF1x) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bs1x.push(x + "=$v('" + x + "')")
            }
            return bs1x.length > 0 ? "var " + bs1x.join(",") + ";" : ""
        };
        return function(bo1x) {
            hK4O = {};
            bo1x = bo1x.replace(cqk6e, "\n").replace(cqi6c, "    ");
            var sx7q = ["if(!__CTX) return '';", ""];
            sx7q.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sx7q.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sx7q.push("__OUT=[];");
            var ET1x = -1
              , bq1x = bo1x.length;
            var nD5I, KS3x, Qd5i, Qf5k, BV0x, Ql5q, bmK2x, Qv5A;
            while (ET1x + 1 < bq1x) {
                nD5I = ET1x;
                nD5I = bo1x.indexOf("{", nD5I + 1);
                while (nD5I >= 0) {
                    KS3x = bNl8d(bo1x, nD5I);
                    Qd5i = bo1x.substring(nD5I, KS3x);
                    Qf5k = Qd5i.match(bR1x.blk);
                    if (!!Qf5k) {
                        BV0x = Qf5k[1].length + 1;
                        Ql5q = bo1x.indexOf("}", nD5I + BV0x);
                        if (Ql5q >= 0) {
                            bmK2x = Ql5q - nD5I - BV0x <= 0 ? "{/" + Qf5k[1] + "}" : Qd5i.substr(BV0x + 1);
                            BV0x = bo1x.indexOf(bmK2x, Ql5q + 1);
                            if (BV0x >= 0) {
                                bdc9T(bo1x.substring(ET1x + 1, nD5I), sx7q);
                                Qv5A = bo1x.substring(Ql5q + 1, BV0x);
                                switch (Qf5k[1]) {
                                case "cdata":
                                    beM0x(Qv5A, sx7q);
                                    break;
                                case "minify":
                                    beM0x(Qv5A.replace(cqj6d, " ").replace(bDG6A, " "), sx7q);
                                    break;
                                case "eval":
                                    if (!!Qv5A)
                                        sx7q.push("__OUT.push((function(){" + Qv5A + "})());");
                                    break
                                }
                                nD5I = ET1x = BV0x + bmK2x.length - 1
                            }
                        }
                    } else if (bo1x.charAt(nD5I - 1) != "$" && bo1x.charAt(nD5I - 1) != "\\" && Qd5i.substr(Qd5i.charAt(1) == "/" ? 2 : 1).search(bR1x.tag) == 0) {
                        break
                    }
                    nD5I = bo1x.indexOf("{", nD5I + 1)
                }
                if (nD5I < 0)
                    break;
                KS3x = bNl8d(bo1x, nD5I);
                if (KS3x < 0)
                    break;
                bdc9T(bo1x.substring(ET1x + 1, nD5I), sx7q);
                cpw6q(bo1x.substring(nD5I, KS3x + 1), sx7q);
                ET1x = KS3x
            }
            bdc9T(bo1x.substring(ET1x + 1), sx7q);
            sx7q.push(';return __OUT.join("");');
            sx7q[1] = cqo6i(hK4O);
            hK4O = null;
            return new Function("__CTX","__MDF",sx7q.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gK3x
    }
    ;
    TrimPath.merge = function() {
        var QF5K = {};
        TrimPath.dump = function() {
            return {
                func: QF5K,
                text: ON4R
            }
        }
        ;
        return function(fg3x, j1x, jV4Z) {
            try {
                j1x = j1x || {};
                if (!QF5K[fg3x] && !ON4R[fg3x])
                    return "";
                if (!QF5K[fg3x]) {
                    QF5K[fg3x] = cqh6b(ON4R[fg3x]);
                    delete ON4R[fg3x]
                }
                if (!!jV4Z) {
                    for (var x in bR1x.ext)
                        if (!jV4Z[x])
                            jV4Z[x] = bR1x.ext[x]
                }
                return QF5K[fg3x](j1x, jV4Z || bR1x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cqp6j = +(new Date);
        return function(bo1x, fg3x) {
            if (!bo1x)
                return "";
            fg3x = fg3x || "ck_" + cqp6j++;
            ON4R[fg3x] = bo1x;
            return fg3x
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , k1x = c0x("nej.u")
      , ez3x = {}
      , bSD0x = {};
    a9j.Lb3x = TrimPath.seed;
    a9j.cc1x = function() {
        var bTf0x = function(C1x) {
            return !a9j.iE4I ? "" : a9j.iE4I(C1x)
        };
        return function(fg3x, j1x, jV4Z) {
            j1x = NEJ.X(NEJ.X({}, bSD0x), j1x);
            j1x.inline = bTf0x;
            jV4Z = NEJ.X(NEJ.X({}, ez3x), jV4Z);
            jV4Z.rand = k1x.nS6M;
            jV4Z.format = k1x.ig4k;
            jV4Z.escape = k1x.dG2x;
            jV4Z.inline = bTf0x;
            return TrimPath.merge(fg3x, j1x, jV4Z)
        }
    }();
    a9j.eB3x = function(bo1x, cqt6n) {
        if (!bo1x)
            return "";
        var fg3x, F1x = a9j.B1x(bo1x);
        if (!!F1x) {
            fg3x = F1x.id;
            bo1x = F1x.value || F1x.innerText;
            if (!cqt6n)
                a9j.cK2x(F1x)
        }
        return TrimPath.parse(bo1x, fg3x)
    }
    ;
    a9j.dz2x = function(bI1x, fg3x, j1x, jV4Z) {
        bI1x = a9j.B1x(bI1x);
        if (!!bI1x)
            bI1x.innerHTML = a9j.cc1x(fg3x, j1x, jV4Z);
        return this
    }
    ;
    a9j.cHf0x = function(bz1x) {
        NEJ.X(ez3x, bz1x)
    }
    ;
    a9j.crg6a = function(bz1x) {
        NEJ.X(bSD0x, bz1x)
    }
    ;
    c0x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
}
)();
(function() {
    var dy2x = NEJ.P("nej.p")
      , O1x = window
      , lk5p = dy2x.Ik2x
      , bUL1x = lk5p.ipad || lk5p.iphone;
    if (!bUL1x && !!O1x.requestAnimationFrame && !!O1x.cancelRequestAnimationFrame)
        return;
    var kw5B = dy2x.dt2x.prefix.pro;
    if (!bUL1x && !!O1x[kw5B + "RequestAnimationFrame"] && !!O1x[kw5B + "CancelRequestAnimationFrame"]) {
        O1x.requestAnimationFrame = O1x[kw5B + "RequestAnimationFrame"];
        O1x.cancelRequestAnimationFrame = O1x[kw5B + "CancelRequestAnimationFrame"];
        return
    }
    var Xl7e = lk5p.desktop ? 80 : lk5p.ios ? 50 : 30;
    O1x.requestAnimationFrame = function(cA1x) {
        return window.setTimeout(function() {
            try {
                cA1x(+(new Date))
            } catch (ex) {}
        }, 1e3 / Xl7e)
    }
    ;
    O1x.cancelRequestAnimationFrame = function(C1x) {
        window.clearTimeout(C1x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, k1x = c0x("nej.u"), a9j = c0x("nej.e"), h1x = c0x("nej.v"), be1x = c0x("nej.h"), cZ2x = c0x("nej.x"), Xm7f = c0x("nej.ut.j.cb"), ge3x;
    if (!!a9j.sI7B)
        return;
    a9j.sI7B = cZ2x.sI7B = function() {
        var R1x = {}
          , gH3x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d1x) {
            var C1x = decodeURIComponent(d1x.target)
              , u1x = d1x.type.toLowerCase();
            var dx2x = R1x[C1x + "-on" + u1x];
            if (!!dx2x) {
                try {
                    dx2x(d1x)
                } catch (e) {}
                return
            }
            var cO2x = R1x[C1x + "-tgt"];
            if (!!cO2x && gH3x.test(u1x)) {
                bzA5F(cO2x, d1x)
            }
        }
        ;
        var bmb1x = function(e1x) {
            var bI1x = a9j.B1x(e1x.parent) || document.body
              , dV2x = a9j.cc1x(ge3x, e1x);
            bI1x.insertAdjacentHTML(!e1x.hidden ? "beforeEnd" : "afterBegin", dV2x)
        };
        var bzA5F = function(C1x, d1x) {
            var u1x = d1x.type.toLowerCase();
            requestAnimationFrame(function() {
                h1x.z1x(C1x, u1x)
            })
        };
        var crl6f = function(hN4R) {
            return !!hN4R && !!hN4R.inited && !!hN4R.inited()
        };
        var Rk5p = function(C1x) {
            var bs1x = [document.embeds[C1x], a9j.B1x(C1x), document[C1x], window[C1x]]
              , r1x = k1x.eI3x(bs1x, crl6f)
              , hN4R = bs1x[r1x]
              , blU1x = C1x + "-count";
            R1x[blU1x]++;
            if (!!hN4R || R1x[blU1x] > 100) {
                R1x[C1x](hN4R);
                delete R1x[C1x];
                delete R1x[blU1x];
                return
            }
            window.setTimeout(Rk5p.f1x(null, C1x), 300)
        };
        var cru6o = function(e1x) {
            var C1x = e1x.id
              , cm1x = e1x.params;
            if (!cm1x) {
                cm1x = {};
                e1x.params = cm1x
            }
            var hK4O = cm1x.flashvars || "";
            hK4O += (!hK4O ? "" : "&") + ("id=" + C1x);
            if (!e1x.hidden && (!!e1x.target || be1x.bdN9E(cm1x.wmode))) {
                var hQ4U = a9j.lK5P(e1x.target) || a9j.lK5P(e1x.parent)
                  , XA7t = k1x.YG8y();
                Xm7f["cb" + XA7t] = bzA5F.f1x(null, hQ4U);
                hK4O += "&onevent=nej.ut.j.cb.cb" + XA7t;
                R1x[C1x + "-tgt"] = hQ4U
            }
            cm1x.flashvars = hK4O;
            k1x.eI3x(e1x, function(D1x, K1x) {
                if (k1x.gF3x(D1x) && K1x != "onready") {
                    R1x[C1x + "-" + K1x] = D1x
                }
            })
        };
        return function(e1x) {
            e1x = NEJ.X({}, e1x);
            if (!e1x.src)
                return;
            var C1x = "flash_" + k1x.YG8y();
            e1x.id = C1x;
            cru6o(e1x);
            bmb1x(e1x);
            if (!e1x.onready)
                return;
            R1x[C1x] = e1x.onready;
            R1x[C1x + "-count"] = 0;
            Rk5p(C1x)
        }
    }();
    ge3x = a9j.eB3x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cZ2x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P, iv4z = c0x("nej.c"), a9j = c0x("nej.e"), k1x = c0x("nej.u"), O1x = c0x("nej.ut.j"), Xm7f = c0x("nej.ut.j.cb"), R1x = {}, gK3x = +(new Date), blP1x;
    if (!!O1x.blN1x)
        return;
    Xm7f["ld" + gK3x] = function(K1x, cI2x) {
        var jY4c = R1x[K1x];
        if (!jY4c)
            return;
        delete R1x[K1x];
        jY4c.vp8h({
            status: 200,
            result: cI2x
        })
    }
    ;
    Xm7f["er" + gK3x] = function(K1x, eA3x) {
        var jY4c = R1x[K1x];
        if (!jY4c)
            return;
        delete R1x[K1x];
        jY4c.vp8h({
            status: eA3x || 0
        })
    }
    ;
    O1x.blN1x = NEJ.C();
    blP1x = O1x.blN1x.N1x(O1x.Km2x);
    blP1x.cq1x = function(e1x) {
        var hN4R = R1x.flash;
        if (k1x.eL3x(hN4R)) {
            hN4R.push(this.cq1x.f1x(this, e1x));
            return
        }
        if (!hN4R) {
            R1x.flash = [this.cq1x.f1x(this, e1x)];
            a9j.sI7B({
                hidden: !0,
                src: iv4z.B1x("ajax.swf"),
                onready: function(hN4R) {
                    if (!hN4R)
                        return;
                    var i1x = R1x.flash;
                    R1x.flash = hN4R;
                    k1x.nz5E(i1x, function(dx2x) {
                        try {
                            dx2x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Bs0x = "swf-" + k1x.nS6M();
        R1x[this.Bs0x] = this;
        var j1x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e1x.request);
        j1x.key = this.Bs0x;
        j1x.headers = e1x.headers;
        j1x.onerror = "nej.ut.j.cb.er" + gK3x;
        j1x.onloaded = "nej.ut.j.cb.ld" + gK3x;
        var bCs5x = iv4z.bWn1x(j1x.url);
        if (!!bCs5x)
            j1x.policyURL = bCs5x;
        hN4R.request(j1x)
    }
    ;
    blP1x.kn5s = function() {
        delete R1x[this.Bs0x];
        this.vp8h({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , be1x = c0x("nej.h");
    be1x.bCB5G = function() {
        var df2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(kO5T) {
            kO5T = kO5T || "";
            if (df2x.test(kO5T))
                return RegExp.$1;
            return "*"
        }
    }();
    be1x.blM1x = function(j1x) {
        return j1x
    }
    ;
    be1x.blH1x = function(XT7M, e1x) {
        if (!XT7M.postMessage)
            return;
        e1x = e1x || bb1x;
        XT7M.postMessage(be1x.blM1x(e1x.data), be1x.bCB5G(e1x.origin))
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), b0x;
    if (!!O1x.fI3x)
        return;
    O1x.fI3x = NEJ.C();
    b0x = O1x.fI3x.N1x(O1x.cJ2x);
    b0x.cx1x = function() {
        this.S1x = {};
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.Rv5A = a9j.B1x(e1x.element) || window;
        this.bEA6u(e1x.event);
        this.crH6B();
        this.z1x("oninit")
    }
    ;
    b0x.bC1x = function() {
        var DR1x = function(D1x, K1x, bz1x) {
            if (!k1x.eL3x(D1x)) {
                k1x.YC7v(this.Rv5A, K1x)
            }
            delete bz1x[K1x]
        };
        return function() {
            this.bF1x();
            k1x.eI3x(this.S1x, DR1x, this);
            delete this.Rv5A
        }
    }();
    b0x.Yd7W = function(F1x, u1x) {
        F1x = a9j.B1x(F1x);
        return F1x == this.Rv5A && (!u1x || !!this.S1x["on" + u1x])
    }
    ;
    b0x.bEA6u = function(d1x) {
        if (k1x.fG3x(d1x)) {
            var V1x = "on" + d1x;
            if (!this.S1x[V1x]) {
                this.S1x[V1x] = this.crI6C.f1x(this, d1x)
            }
            this.bEJ6D(d1x);
            return
        }
        if (k1x.eL3x(d1x)) {
            k1x.bd1x(d1x, this.bEA6u, this)
        }
    }
    ;
    b0x.bEJ6D = function(u1x) {
        var d1x = "on" + u1x
          , dx2x = this.Rv5A[d1x]
          , bEK6E = this.S1x[d1x];
        if (dx2x != bEK6E) {
            this.Yg7Z(u1x);
            if (!!dx2x && dx2x != br1x)
                this.bFc6W(u1x, dx2x);
            this.Rv5A[d1x] = bEK6E
        }
    }
    ;
    b0x.bFc6W = function(u1x, dx2x, crK6E) {
        var i1x = this.S1x[u1x];
        if (!i1x) {
            i1x = [];
            this.S1x[u1x] = i1x
        }
        if (k1x.gF3x(dx2x)) {
            !crK6E ? i1x.push(dx2x) : i1x.unshift(dx2x)
        }
    }
    ;
    b0x.Yg7Z = function(u1x, dx2x) {
        var i1x = this.S1x[u1x];
        if (!i1x || !i1x.length)
            return;
        if (!dx2x) {
            delete this.S1x[u1x];
            return
        }
        k1x.nz5E(i1x, function(D1x, r1x, Ly3x) {
            if (dx2x === D1x) {
                Ly3x.splice(r1x, 1);
                return !0
            }
        })
    }
    ;
    b0x.crI6C = function(u1x, d1x) {
        d1x = d1x || {
            noargs: !0
        };
        d1x.type = u1x;
        this.z1x("ondispatch", d1x);
        if (!!d1x.stopped)
            return;
        k1x.bd1x(this.S1x[u1x], function(dx2x) {
            try {
                dx2x(d1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
    ;
    b0x.crH6B = function() {
        var blo1x = function(d1x) {
            var bf1x = d1x.args
              , u1x = bf1x[1].toLowerCase();
            if (this.Yd7W(bf1x[0], u1x)) {
                d1x.stopped = !0;
                this.bEJ6D(u1x);
                this.bFc6W(u1x, bf1x[2], bf1x[3]);
                this.z1x("oneventadd", {
                    type: u1x,
                    listener: bf1x[2]
                })
            }
        };
        var crM6G = function(d1x) {
            var bf1x = d1x.args
              , u1x = bf1x[1].toLowerCase();
            if (this.Yd7W(bf1x[0], u1x)) {
                d1x.stopped = !0;
                this.Yg7Z(u1x, bf1x[2])
            }
        };
        var bpm2x = function(d1x) {
            var bf1x = d1x.args
              , u1x = (bf1x[1] || "").toLowerCase();
            if (this.Yd7W(bf1x[0])) {
                if (!!u1x) {
                    this.Yg7Z(u1x);
                    return
                }
                k1x.eI3x(this.S1x, function(D1x, K1x) {
                    if (k1x.eL3x(D1x)) {
                        this.Yg7Z(K1x)
                    }
                }, this)
            }
        };
        var crQ6K = function(d1x) {
            var bf1x = d1x.args
              , u1x = bf1x[1].toLowerCase();
            if (this.Yd7W(bf1x[0], u1x)) {
                d1x.stopped = !0;
                bf1x[0]["on" + u1x].apply(bf1x[0], bf1x.slice(2))
            }
        };
        return function() {
            if (!!this.csu6o)
                return;
            this.csu6o = true;
            h1x.s1x = h1x.s1x.eH3x(blo1x.f1x(this));
            h1x.mU5Z = h1x.mU5Z.eH3x(crM6G.f1x(this));
            h1x.hc4g = h1x.hc4g.eH3x(bpm2x.f1x(this));
            h1x.z1x = h1x.z1x.eH3x(crQ6K.f1x(this))
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , O1x = c0x("nej.p")
      , be1x = c0x("nej.h")
      , k1x = c0x("nej.u")
      , h1x = c0x("nej.v")
      , I1x = c0x("nej.ut");
    if (O1x.nq5v.trident)
        return;
    if (!!window.postMessage) {
        be1x.blM1x = be1x.blM1x.eH3x(function(d1x) {
            d1x.stopped = !0;
            d1x.value = JSON.stringify(d1x.args[0])
        });
        return
    }
    var K1x = "MSG|"
      , km5r = [];
    var ctI7B = function() {
        var V1x = unescape(window.name || "").trim();
        if (!V1x || V1x.indexOf(K1x) != 0)
            return;
        window.name = "";
        var m1x = k1x.Nn3x(V1x.replace(K1x, ""), "|")
          , kO5T = (m1x.origin || "").toLowerCase();
        if (!!kO5T && kO5T != "*" && location.href.toLowerCase().indexOf(kO5T) != 0)
            return;
        h1x.z1x(window, "message", {
            data: JSON.parse(m1x.data || "null"),
            source: window.frames[m1x.self] || m1x.self,
            origin: be1x.bCB5G(m1x.ref || document.referrer)
        })
    };
    var cud7W = function() {
        var YX8P;
        var cux7q = function(bz1x, r1x, i1x) {
            if (k1x.di2x(YX8P, bz1x.w) < 0) {
                YX8P.push(bz1x.w);
                i1x.splice(r1x, 1);
                bz1x.w.name = bz1x.d
            }
        };
        return function() {
            YX8P = [];
            k1x.nz5E(km5r, cux7q);
            YX8P = null
        }
    }();
    be1x.blH1x = function() {
        var cuO7H = function(j1x) {
            var m1x = {};
            j1x = j1x || bb1x;
            m1x.origin = j1x.origin || "";
            m1x.ref = location.href;
            m1x.self = j1x.source;
            m1x.data = JSON.stringify(j1x.data);
            return K1x + k1x.ut8l(m1x, "|", !0)
        };
        return be1x.blH1x.eH3x(function(d1x) {
            d1x.stopped = !0;
            var bf1x = d1x.args;
            km5r.unshift({
                w: bf1x[0],
                d: escape(cuO7H(bf1x[1]))
            })
        })
    }();
    I1x.fI3x.A1x({
        element: window,
        event: "message"
    });
    window.setInterval(cud7W, 100);
    window.setInterval(ctI7B, 20)
}
)();
(function() {
    var c0x = NEJ.P
      , be1x = c0x("nej.h")
      , a9j = c0x("nej.e")
      , v1x = c0x("nej.j");
    v1x.cvb7U = function() {
        var gO3x = window.name || "_parent"
          , cve7X = {
            gA3x: window.top,
            gO3x: window,
            bI1x: window.parent
        };
        return function(cO2x, e1x) {
            if (typeof cO2x == "string") {
                cO2x = cve7X[cO2x] || window.frames[cO2x];
                if (!cO2x)
                    return this
            }
            var j1x = NEJ.X({
                origin: "*",
                source: gO3x
            }, e1x);
            be1x.blH1x(cO2x, j1x);
            return this
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, iv4z = c0x("nej.c"), a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), O1x = c0x("nej.ut.j"), R1x = {}, Zj8b;
    if (!!O1x.bkM1x)
        return;
    O1x.bkM1x = NEJ.C();
    Zj8b = O1x.bkM1x.N1x(O1x.Km2x);
    Zj8b.cx1x = function() {
        var eZ3x = "NEJ-AJAX-DATA:"
          , EO1x = !1;
        var bkL1x = function(d1x) {
            var j1x = d1x.data;
            if (j1x.indexOf(eZ3x) != 0)
                return;
            j1x = JSON.parse(j1x.replace(eZ3x, ""));
            var jY4c = R1x[j1x.key];
            if (!jY4c)
                return;
            delete R1x[j1x.key];
            j1x.result = decodeURIComponent(j1x.result || "");
            jY4c.vp8h(j1x)
        };
        var bkI1x = function() {
            if (!EO1x) {
                EO1x = !0;
                h1x.s1x(window, "message", bkL1x)
            }
        };
        return function() {
            this.cE2x();
            bkI1x()
        }
    }();
    Zj8b.cq1x = function(e1x) {
        var gf3x = e1x.request
          , jY4c = iv4z.bWf1x(gf3x.url)
          , en3x = R1x[jY4c];
        if (k1x.eL3x(en3x)) {
            en3x.push(this.cq1x.f1x(this, e1x));
            return
        }
        if (!en3x) {
            R1x[jY4c] = [this.cq1x.f1x(this, e1x)];
            a9j.Xe7X({
                src: jY4c,
                visible: !1,
                onload: function(d1x) {
                    var i1x = R1x[jY4c];
                    R1x[jY4c] = h1x.W1x(d1x).contentWindow;
                    k1x.nz5E(i1x, function(dx2x) {
                        try {
                            dx2x()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.Bs0x = "frm-" + k1x.nS6M();
        R1x[this.Bs0x] = this;
        var j1x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gf3x);
        j1x.key = this.Bs0x;
        j1x.headers = e1x.headers;
        v1x.cvb7U(R1x[jY4c], {
            data: j1x
        })
    }
    ;
    Zj8b.kn5s = function() {
        delete R1x[this.Bs0x];
        this.vp8h({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, em3x = c0x("nej.g"), a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), O1x = c0x("nej.ut.j"), R1x = {}, LF3x;
    if (!!O1x.bkE1x)
        return;
    O1x.bkE1x = NEJ.C();
    LF3x = O1x.bkE1x.N1x(O1x.Km2x);
    LF3x.cx1x = function() {
        var eZ3x = "NEJ-UPLOAD-RESULT:"
          , EO1x = !1;
        var bkL1x = function(d1x) {
            var j1x = d1x.data;
            if (j1x.indexOf(eZ3x) != 0)
                return;
            j1x = JSON.parse(j1x.replace(eZ3x, ""));
            var jY4c = R1x[j1x.key];
            if (!jY4c)
                return;
            delete R1x[j1x.key];
            jY4c.vp8h(decodeURIComponent(j1x.result))
        };
        var bkI1x = function() {
            if (!EO1x) {
                EO1x = !0;
                h1x.s1x(window, "message", bkL1x)
            }
        };
        return function() {
            this.cE2x();
            bkI1x()
        }
    }();
    LF3x.bC1x = function() {
        this.bF1x();
        a9j.cK2x(this.bkA1x);
        delete this.bkA1x;
        window.clearTimeout(this.eh3x);
        delete this.eh3x
    }
    ;
    LF3x.vp8h = function(cI2x) {
        var Q1x;
        try {
            Q1x = JSON.parse(cI2x);
            this.z1x("onload", Q1x)
        } catch (e) {
            this.z1x("onerror", {
                code: em3x.bWq1x,
                message: cI2x
            })
        }
    }
    ;
    LF3x.cq1x = function() {
        var cvk7d = function() {
            var mJ5O, cI2x;
            try {
                var mJ5O = this.bkA1x.contentWindow.document.body
                  , cI2x = mJ5O.innerText || mJ5O.textContent
            } catch (e) {
                return
            }
            this.vp8h(cI2x)
        };
        var bkr1x = function(X1x, ff3x, sd7W) {
            v1x.bm1x(X1x, {
                type: "json",
                method: "POST",
                cookie: sd7W,
                mode: parseInt(ff3x) || 0,
                onload: function(j1x) {
                    if (!this.eh3x)
                        return;
                    this.z1x("onuploading", j1x);
                    this.eh3x = window.setTimeout(bkr1x.f1x(this, X1x, ff3x, sd7W), 1e3)
                }
                .f1x(this),
                onerror: function(bZ1x) {
                    if (!this.eh3x)
                        return;
                    this.eh3x = window.setTimeout(bkr1x.f1x(this, X1x, ff3x, sd7W), 1e3)
                }
                .f1x(this)
            })
        };
        return function(e1x) {
            var gf3x = e1x.request
              , oA6u = e1x.headers
              , fh3x = gf3x.data
              , V1x = "fom-" + k1x.nS6M();
            R1x[V1x] = this;
            fh3x.target = V1x;
            fh3x.method = "POST";
            fh3x.enctype = em3x.Gw1x;
            fh3x.encoding = em3x.Gw1x;
            var X1x = fh3x.action || ""
              , lR5W = X1x.indexOf("?") <= 0 ? "?" : "&";
            fh3x.action = X1x + lR5W + "_proxy_=form";
            this.bkA1x = a9j.Xe7X({
                name: V1x,
                onload: function(d1x) {
                    var en3x = h1x.W1x(d1x);
                    h1x.s1x(en3x, "load", cvk7d.f1x(this));
                    fh3x.submit();
                    var bKq7j = (fh3x.nej_query || bb1x).value;
                    if (!bKq7j)
                        return;
                    var ff3x = (fh3x.nej_mode || bb1x).value
                      , sd7W = (fh3x.nej_cookie || bb1x).value == "true";
                    this.eh3x = window.setTimeout(bkr1x.f1x(this, bKq7j, ff3x, sd7W), 100)
                }
                .f1x(this)
            })
        }
    }();
    LF3x.kn5s = function() {
        this.z1x("onerror", {
            code: em3x.bWs1x,
            message: "客户端终止文件上传"
        });
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , be1x = c0x("nej.h")
      , O1x = c0x("nej.ut.j");
    be1x.bov2x = function() {
        return new XMLHttpRequest
    }
    ;
    be1x.bko1x = function(ff3x, ZH8z, e1x) {
        var bz1x = !!ZH8z ? {
            2: O1x.bkE1x
        } : {
            2: O1x.bkM1x,
            3: O1x.blN1x
        };
        return (bz1x[ff3x] || O1x.bbC9t).A1x(e1x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , O1x = c0x("nej.p")
      , be1x = c0x("nej.h");
    if (O1x.nq5v.trident)
        return;
    be1x.bov2x = function() {
        var QA5F = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cvT7M = function() {
            for (var i = 0, l = QA5F.length; i < l; i++) {
                try {
                    return new ActiveXObject(QA5F[i])
                } catch (e) {}
            }
            return null
        };
        return be1x.bov2x.eH3x(function(d1x) {
            if (!!window.XMLHttpRequest)
                return;
            d1x.stopped = !0;
            d1x.value = cvT7M()
        })
    }();
    be1x.bko1x = function() {
        var GS1x = {
            0: 2,
            1: 3
        };
        return be1x.bko1x.eH3x(function(d1x) {
            var bf1x = d1x.args
              , ff3x = bf1x[0] || 0;
            bf1x[0] = !!bf1x[1] ? 2 : GS1x[ff3x] || ff3x
        })
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , be1x = c0x("nej.h")
      , em3x = c0x("nej.g")
      , k1x = c0x("nej.u")
      , v1x = c0x("nej.j")
      , O1x = c0x("nej.ut.j")
      , nP6J = {}
      , Jb2x = br1x;
    v1x.kn5s = function(fg3x) {
        var R1x = nP6J[fg3x];
        if (!R1x)
            return this;
        R1x.req.kn5s();
        return this
    }
    ;
    v1x.bac8U = function(dZ3x) {
        Jb2x = dZ3x || br1x;
        return this
    }
    ;
    v1x.bm1x = function() {
        var jJ4N = (location.protocol + "//" + location.host).toLowerCase();
        var cvY7R = function(X1x) {
            var kO5T = k1x.ciE4I(X1x);
            return !!kO5T && kO5T != jJ4N
        };
        var cwa7T = function(oA6u) {
            return (oA6u || bb1x)[em3x.zA9r] == em3x.Gw1x
        };
        var cwf7Y = function(e1x) {
            var ZH8z = cwa7T(e1x.headers);
            if (!cvY7R(e1x.url) && !ZH8z)
                return O1x.bbC9t.A1x(e1x);
            return be1x.bko1x(e1x.mode, ZH8z, e1x)
        };
        var DR1x = function(fg3x) {
            var R1x = nP6J[fg3x];
            if (!R1x)
                return;
            if (!!R1x.req)
                R1x.req.T1x();
            delete nP6J[fg3x]
        };
        var bNd8V = function(fg3x, u1x) {
            var R1x = nP6J[fg3x];
            if (!R1x)
                return;
            DR1x(fg3x);
            try {
                var d1x = {
                    type: u1x,
                    result: arguments[2]
                };
                Jb2x(d1x);
                if (!d1x.stopped)
                    (R1x[u1x] || br1x)(d1x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yw9n = function(fg3x, j1x) {
            bNd8V(fg3x, "onload", j1x)
        };
        var Cq0x = function(fg3x, bZ1x) {
            bNd8V(fg3x, "onerror", bZ1x)
        };
        return function(X1x, e1x) {
            e1x = e1x || {};
            var fg3x = k1x.nS6M()
              , R1x = {
                onload: e1x.onload || br1x,
                onerror: e1x.onerror || br1x
            };
            nP6J[fg3x] = R1x;
            e1x.onload = yw9n.f1x(null, fg3x);
            e1x.onerror = Cq0x.f1x(null, fg3x);
            if (!!e1x.query) {
                var lR5W = X1x.indexOf("?") < 0 ? "?" : "&"
                  , bv1x = e1x.query;
                if (k1x.lQ5V(bv1x))
                    bv1x = k1x.cF2x(bv1x);
                if (!!bv1x)
                    X1x += lR5W + bv1x
            }
            e1x.url = X1x;
            R1x.req = cwf7Y(e1x);
            R1x.req.boF2x(e1x.data);
            return fg3x
        }
    }();
    v1x.hV4Z = function(fh3x, e1x) {
        var dM2x = {
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
        NEJ.EX(dM2x, e1x);
        dM2x.data = fh3x;
        dM2x.method = "POST";
        dM2x.timeout = 0;
        dM2x.headers[em3x.zA9r] = em3x.Gw1x;
        return v1x.bm1x(fh3x.action, dM2x)
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, em3x = c0x("nej.g"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), O1x = c0x("nej.ut.j"), mo5t, gQ3x = 6e4;
    if (!!O1x.SU6O)
        return;
    O1x.SU6O = NEJ.C();
    mo5t = O1x.SU6O.N1x(I1x.cJ2x);
    mo5t.cx1x = function() {
        this.cE2x();
        this.SW6Q = {
            onerror: this.cwg7Z.f1x(this),
            onloaded: this.cwh7a.f1x(this)
        };
        if (!this.constructor.S1x)
            this.constructor.S1x = {
                loaded: {}
            }
    }
    ;
    mo5t.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.LV3x = e1x.version;
        this.bjJ1x = e1x.timeout;
        this.SW6Q.version = this.LV3x;
        this.SW6Q.timeout = this.bjJ1x
    }
    ;
    mo5t.bRF0x = function(K1x) {
        delete this.constructor.S1x[K1x]
    }
    ;
    mo5t.Cu0x = function(K1x) {
        return this.constructor.S1x[K1x]
    }
    ;
    mo5t.bRO0x = function(K1x, j1x) {
        this.constructor.S1x[K1x] = j1x
    }
    ;
    mo5t.baK8C = br1x;
    mo5t.bRR0x = function(gf3x) {
        h1x.hc4g(gf3x)
    }
    ;
    mo5t.bjz1x = function(gf3x) {
        gf3x.src = this.kJ5O;
        document.head.appendChild(gf3x)
    }
    ;
    mo5t.Cx0x = function() {
        var R1x = this.Cu0x(this.kJ5O);
        if (!R1x)
            return;
        window.clearTimeout(R1x.timer);
        this.bRR0x(R1x.request);
        delete R1x.bind;
        delete R1x.timer;
        delete R1x.request;
        this.bRF0x(this.kJ5O);
        this.Cu0x("loaded")[this.kJ5O] = !0
    }
    ;
    mo5t.baM8E = function(V1x) {
        var R1x = this.Cu0x(this.kJ5O);
        if (!R1x)
            return;
        var i1x = R1x.bind;
        this.Cx0x();
        if (!!i1x && i1x.length > 0) {
            var cD2x;
            while (i1x.length) {
                cD2x = i1x.shift();
                try {
                    cD2x.z1x(V1x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cD2x.T1x()
            }
        }
    }
    ;
    mo5t.dP2x = function(bZ1x) {
        this.baM8E("onerror", bZ1x)
    }
    ;
    mo5t.bSP0x = function() {
        this.baM8E("onloaded")
    }
    ;
    mo5t.cwj7c = function(X1x) {
        this.constructor.A1x(this.SW6Q).Md3x(X1x)
    }
    ;
    mo5t.bTg0x = function(bZ1x) {
        var R1x = this.Cu0x(this.xb9S);
        if (!R1x)
            return;
        if (!!bZ1x)
            R1x.error++;
        R1x.loaded++;
        if (R1x.loaded < R1x.total)
            return;
        this.bRF0x(this.xb9S);
        this.z1x(R1x.error > 0 ? "onerror" : "onloaded")
    }
    ;
    mo5t.cwg7Z = function(bZ1x) {
        this.bTg0x(!0)
    }
    ;
    mo5t.cwh7a = function() {
        this.bTg0x()
    }
    ;
    mo5t.Md3x = function(X1x) {
        X1x = k1x.bqF3x(X1x);
        if (!X1x) {
            this.z1x("onerror", {
                code: em3x.bxg4k,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kJ5O = X1x;
        if (!!this.LV3x)
            this.kJ5O += (this.kJ5O.indexOf("?") < 0 ? "?" : "&") + this.LV3x;
        if (this.Cu0x("loaded")[this.kJ5O]) {
            try {
                this.z1x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T1x();
            return this
        }
        var R1x = this.Cu0x(this.kJ5O), gf3x;
        if (!!R1x) {
            R1x.bind.unshift(this);
            R1x.timer = window.clearTimeout(R1x.timer)
        } else {
            gf3x = this.baK8C();
            R1x = {
                request: gf3x,
                bind: [this]
            };
            this.bRO0x(this.kJ5O, R1x);
            h1x.s1x(gf3x, "load", this.bSP0x.f1x(this));
            h1x.s1x(gf3x, "error", this.dP2x.f1x(this, {
                code: em3x.bwZ4d,
                message: "无法加载指定资源文件[" + this.kJ5O + "]！"
            }))
        }
        if (this.bjJ1x != 0)
            R1x.timer = window.setTimeout(this.dP2x.f1x(this, {
                code: em3x.bSv0x,
                message: "指定资源文件[" + this.kJ5O + "]载入超时！"
            }), this.bjJ1x || gQ3x);
        if (!!gf3x)
            this.bjz1x(gf3x);
        this.z1x("onloading");
        return this
    }
    ;
    mo5t.bTE0x = function(i1x) {
        if (!i1x || !i1x.length) {
            this.z1x("onerror", {
                code: em3x.bxg4k,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.xb9S = k1x.nS6M();
        var R1x = {
            error: 0,
            loaded: 0,
            total: i1x.length
        };
        this.bRO0x(this.xb9S, R1x);
        for (var i = 0, l = i1x.length; i < l; i++) {
            if (!i1x[i]) {
                R1x.total--;
                continue
            }
            this.cwj7c(i1x[i])
        }
        this.z1x("onloading");
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), be1x = c0x("nej.h"), O1x = c0x("nej.ut.j"), Tw6q;
    if (!!O1x.bje1x)
        return;
    O1x.bje1x = NEJ.C();
    Tw6q = O1x.bje1x.N1x(O1x.SU6O);
    Tw6q.baK8C = function() {
        var eO3x = a9j.dj2x("iframe");
        eO3x.width = 0;
        eO3x.height = 0;
        eO3x.style.display = "none";
        return eO3x
    }
    ;
    Tw6q.bjz1x = function(gf3x) {
        gf3x.src = this.kJ5O;
        document.body.appendChild(gf3x)
    }
    ;
    Tw6q.dP2x = function(bZ1x) {
        var eO3x = (this.Cu0x(this.kJ5O) || bb1x).request;
        this.baM8E("onerror", bZ1x);
        be1x.WU7N(eO3x)
    }
    ;
    Tw6q.bSP0x = function() {
        var mJ5O = null
          , eO3x = (this.Cu0x(this.kJ5O) || bb1x).request;
        try {
            mJ5O = eO3x.contentWindow.document.body
        } catch (ex) {}
        this.baM8E("onloaded", mJ5O);
        be1x.WU7N(eO3x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), O1x = c0x("nej.ut.j"), biZ1x;
    if (!!O1x.bbo9f)
        return;
    O1x.bbo9f = NEJ.C();
    biZ1x = O1x.bbo9f.N1x(O1x.SU6O);
    biZ1x.baK8C = function() {
        return a9j.dj2x("link")
    }
    ;
    biZ1x.bjz1x = function(gf3x) {
        gf3x.href = this.kJ5O;
        document.head.appendChild(gf3x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), O1x = c0x("nej.ut.j"), bbt9k;
    if (!!O1x.bbu9l)
        return;
    O1x.bbu9l = NEJ.C();
    bbt9k = O1x.bbu9l.N1x(O1x.SU6O);
    bbt9k.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.bUK1x = e1x.async;
        this.biO1x = e1x.charset;
        this.SW6Q.async = !1;
        this.SW6Q.charset = this.biO1x
    }
    ;
    bbt9k.baK8C = function() {
        var gf3x = a9j.dj2x("script");
        if (this.bUK1x != null)
            gf3x.async = !!this.bUK1x;
        if (this.biO1x != null)
            gf3x.charset = this.biO1x;
        return gf3x
    }
    ;
    bbt9k.bRR0x = function(gf3x) {
        a9j.cK2x(gf3x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , v1x = c0x("nej.j")
      , O1x = c0x("nej.ut.j");
    v1x.cwk7d = function(X1x, e1x) {
        O1x.bbu9l.A1x(e1x).Md3x(X1x);
        return this
    }
    ;
    v1x.cwl7e = function(i1x, e1x) {
        O1x.bbu9l.A1x(e1x).bTE0x(i1x);
        return this
    }
    ;
    v1x.cFZ9Q = function(X1x, e1x) {
        O1x.bbo9f.A1x(e1x).Md3x(X1x);
        return this
    }
    ;
    v1x.cxf7Y = function(i1x, e1x) {
        O1x.bbo9f.A1x(e1x).bTE0x(i1x);
        return this
    }
    ;
    v1x.byY5d = function(X1x, e1x) {
        O1x.bje1x.A1x(e1x).Md3x(X1x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , k1x = c0x("nej.u")
      , v1x = c0x("nej.j")
      , I1x = c0x("nej.ut")
      , R1x = {}
      , tn7g = +(new Date) + "-";
    a9j.cX2x = function() {
        var cz1x = 0;
        var TL6F = function() {
            if (cz1x > 0)
                return;
            cz1x = 0;
            h1x.z1x(document, "templateready");
            h1x.hc4g(document, "templateready")
        };
        var bbI9z = function(gm3x, e1x) {
            var cS2x = a9j.t1x(gm3x, "src");
            if (!cS2x)
                return;
            e1x = e1x || bb1x;
            var gb3x = e1x.root;
            if (!gb3x) {
                gb3x = gm3x.ownerDocument.location.href
            } else {
                gb3x = k1x.bqF3x(gb3x)
            }
            cS2x = cS2x.split(",");
            k1x.bd1x(cS2x, function(D1x, r1x, i1x) {
                i1x[r1x] = k1x.bqF3x(D1x, gb3x)
            });
            return cS2x
        };
        var cxo7h = function(gm3x, e1x) {
            if (!gm3x)
                return;
            var cS2x = bbI9z(gm3x, e1x);
            if (!!cS2x)
                v1x.cxf7Y(cS2x, {
                    version: a9j.t1x(gm3x, "version")
                });
            a9j.bHB7u(gm3x.value)
        };
        var cxp7i = function(D1x) {
            cz1x--;
            a9j.bHJ7C(D1x);
            TL6F()
        };
        var cxs7l = function(gm3x, e1x) {
            if (!gm3x)
                return;
            var cS2x = bbI9z(gm3x, e1x)
              , fz3x = gm3x.value;
            if (!!cS2x) {
                cz1x++;
                var e1x = {
                    version: a9j.t1x(gm3x, "version"),
                    onloaded: cxp7i.f1x(null, fz3x)
                };
                window.setTimeout(v1x.cwl7e.f1x(v1x, cS2x, e1x), 0);
                return
            }
            a9j.bHJ7C(fz3x)
        };
        var cxu7n = function(mJ5O) {
            cz1x--;
            a9j.cX2x(mJ5O);
            TL6F()
        };
        var cxv7o = function(gm3x, e1x) {
            if (!gm3x)
                return;
            var cS2x = bbI9z(gm3x, e1x)[0];
            if (!!cS2x) {
                cz1x++;
                var e1x = {
                    version: a9j.t1x(gm3x, "version"),
                    onloaded: cxu7n
                };
                window.setTimeout(v1x.byY5d.f1x(v1x, cS2x, e1x), 0)
            }
        };
        var cxw7p = function(C1x, cI2x) {
            cz1x--;
            a9j.Mn3x(C1x, cI2x || "");
            TL6F()
        };
        var cxx7q = function(gm3x, e1x) {
            if (!gm3x || !gm3x.id)
                return;
            var C1x = gm3x.id
              , cS2x = bbI9z(gm3x, e1x)[0];
            if (!!cS2x) {
                cz1x++;
                var X1x = cS2x + (cS2x.indexOf("?") < 0 ? "?" : "&") + (a9j.t1x(gm3x, "version") || "")
                  , e1x = {
                    type: "text",
                    method: "GET",
                    onload: cxw7p.f1x(null, C1x)
                };
                window.setTimeout(v1x.bm1x.f1x(v1x, X1x, e1x), 0)
            }
        };
        var cxU8M = function(g1x, e1x) {
            var u1x = g1x.name.toLowerCase();
            switch (u1x) {
            case "jst":
                a9j.eB3x(g1x, !0);
                return;
            case "txt":
                a9j.Mn3x(g1x.id, g1x.value || "");
                return;
            case "ntp":
                a9j.jj4n(g1x.value || "", g1x.id);
                return;
            case "js":
                cxs7l(g1x, e1x);
                return;
            case "css":
                cxo7h(g1x, e1x);
                return;
            case "html":
                cxv7o(g1x, e1x);
                return;
            case "res":
                cxx7q(g1x, e1x);
                return
            }
        };
        I1x.fI3x.A1x({
            element: document,
            event: "templateready",
            oneventadd: TL6F
        });
        return function(F1x, e1x) {
            F1x = a9j.B1x(F1x);
            if (!!F1x) {
                var i1x = F1x.tagName == "TEXTAREA" ? [F1x] : F1x.getElementsByTagName("textarea");
                k1x.bd1x(i1x, function(g1x) {
                    cxU8M(g1x, e1x)
                });
                a9j.cK2x(F1x, !0)
            }
            TL6F();
            return this
        }
    }();
    a9j.Mn3x = function(K1x, D1x) {
        R1x[K1x] = D1x || "";
        return this
    }
    ;
    a9j.iE4I = function(K1x) {
        return R1x[K1x] || ""
    }
    ;
    a9j.jj4n = function(F1x, K1x) {
        K1x = K1x || k1x.nS6M();
        F1x = a9j.B1x(F1x) || F1x;
        a9j.Mn3x(tn7g + K1x, F1x);
        a9j.mG5L(F1x);
        return K1x
    }
    ;
    a9j.dC2x = function(K1x) {
        if (!K1x)
            return null;
        K1x = tn7g + K1x;
        var D1x = a9j.iE4I(K1x);
        if (!D1x)
            return null;
        if (k1x.fG3x(D1x)) {
            D1x = a9j.oc6W(D1x);
            a9j.Mn3x(K1x, D1x)
        }
        return D1x.cloneNode(!0)
    }
    ;
    a9j.CF0x = function() {
        var Jb2x = function(D1x, K1x) {
            return K1x == "offset" || K1x == "limit"
        };
        return function(i1x, p1x, e1x) {
            var bs1x = [];
            if (!i1x || !i1x.length || !p1x)
                return bs1x;
            e1x = e1x || bb1x;
            var ds2x = i1x.length
              , jW4a = parseInt(e1x.offset) || 0
              , fR3x = Math.min(ds2x, jW4a + (parseInt(e1x.limit) || ds2x))
              , ct1x = {
                total: i1x.length,
                range: [jW4a, fR3x]
            };
            NEJ.X(ct1x, e1x, Jb2x);
            for (var i = jW4a, cD2x; i < fR3x; i++) {
                ct1x.index = i;
                ct1x.data = i1x[i];
                cD2x = p1x.A1x(ct1x);
                var C1x = cD2x.Fx1x();
                R1x[C1x] = cD2x;
                cD2x.T1x = cD2x.T1x.eH3x(function(C1x, cD2x) {
                    delete R1x[C1x];
                    delete cD2x.T1x
                }
                .f1x(null, C1x, cD2x));
                bs1x.push(cD2x)
            }
            return bs1x
        }
    }();
    a9j.bCw5B = function(C1x) {
        return R1x[C1x]
    }
    ;
    a9j.cFJ9A = function(eb3x, e1x) {
        e1x = e1x || bb1x;
        a9j.cX2x(e1x.tid || "template-box");
        h1x.s1x(document, "templateready", function() {
            eb3x.A1x().z1x("onshow", e1x)
        })
    }
    ;
    c0x("dbg").dumpTC = function() {
        return R1x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), O1x = c0x("nej.ui"), b0x;
    if (!!O1x.ej3x)
        return;
    O1x.ej3x = NEJ.C();
    b0x = O1x.ej3x.N1x(I1x.cJ2x);
    b0x.cx1x = function() {
        this.cE2x();
        a9j.bzL5Q();
        this.ch1x();
        this.bW1x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.cxW8O(e1x.clazz);
        this.bDa6U(e1x.parent)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        this.bDz6t();
        delete this.gl3x;
        a9j.mG5L(this.o1x);
        a9j.x1x(this.o1x, this.biu1x);
        delete this.biu1x
    }
    ;
    b0x.ch1x = br1x;
    b0x.bW1x = function() {
        if (!this.cg1x)
            this.Mr3x();
        this.o1x = a9j.dC2x(this.cg1x);
        if (!this.o1x)
            this.o1x = a9j.dj2x("div", this.mn5s);
        a9j.y1x(this.o1x, this.mn5s)
    }
    ;
    b0x.Mr3x = br1x;
    b0x.cxW8O = function(ed3x) {
        this.biu1x = ed3x || "";
        a9j.y1x(this.o1x, this.biu1x)
    }
    ;
    b0x.czC8u = function() {
        if (!this.mn5s)
            return;
        a9j.y1x(this.gl3x, this.mn5s + "-parent")
    }
    ;
    b0x.bDz6t = function() {
        if (!this.mn5s)
            return;
        a9j.x1x(this.gl3x, this.mn5s + "-parent")
    }
    ;
    b0x.lw5B = function() {
        return this.o1x
    }
    ;
    b0x.bDa6U = function(bI1x) {
        if (!this.o1x)
            return this;
        this.bDz6t();
        if (k1x.gF3x(bI1x)) {
            this.gl3x = bI1x(this.o1x)
        } else {
            this.gl3x = a9j.B1x(bI1x);
            if (!!this.gl3x)
                this.gl3x.appendChild(this.o1x)
        }
        this.czC8u();
        return this
    }
    ;
    b0x.J1x = function() {
        if (!this.gl3x || !this.o1x || this.o1x.parentNode == this.gl3x)
            return this;
        this.gl3x.appendChild(this.o1x);
        return this
    }
    ;
    b0x.bt1x = function() {
        a9j.mG5L(this.o1x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), k1x = c0x("nej.u"), be1x = c0x("nej.h"), O1x = c0x("nej.ui"), xe9V, bEP6J;
    if (!!O1x.Uh6b)
        return;
    O1x.Uh6b = NEJ.C();
    xe9V = O1x.Uh6b.N1x(O1x.ej3x);
    bEP6J = O1x.Uh6b.cs1x;
    xe9V.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.wv8n("oncontentready", e1x.oncontentready || this.czF8x.f1x(this));
        this.cAa8S = !!e1x.nohack;
        this.cAf8X = !!e1x.destroyable;
        this.Mu3x(e1x.content)
    }
    ;
    xe9V.bC1x = function() {
        this.z1x("onbeforerecycle");
        this.bF1x();
        this.bcu9l();
        this.Mu3x("");
        a9j.fb3x(this.o1x, {
            top: "",
            left: ""
        })
    }
    ;
    xe9V.czF8x = br1x;
    xe9V.Mv3x = br1x;
    xe9V.bcu9l = function() {
        a9j.mG5L(this.o1x);
        if (!!this.od6X) {
            this.od6X = be1x.bvz4D(this.o1x);
            delete this.od6X
        }
    }
    ;
    xe9V.Mu3x = function(bo1x) {
        if (!this.o1x || !this.CG0x || bo1x == null)
            return this;
        bo1x = bo1x || "";
        k1x.fG3x(bo1x) ? this.CG0x.innerHTML = bo1x : this.CG0x.appendChild(bo1x);
        this.z1x("oncontentready", this.CG0x);
        return this
    }
    ;
    xe9V.gI3x = function(bi1x) {
        var D1x = bi1x.top;
        if (D1x != null) {
            D1x += "px";
            a9j.ba1x(this.o1x, "top", D1x);
            a9j.ba1x(this.od6X, "top", D1x)
        }
        var D1x = bi1x.left;
        if (D1x != null) {
            D1x += "px";
            a9j.ba1x(this.o1x, "left", D1x);
            a9j.ba1x(this.od6X, "left", D1x)
        }
        return this
    }
    ;
    xe9V.J1x = function() {
        a9j.ba1x(this.o1x, "visibility", "hidden");
        bEP6J.J1x.apply(this, arguments);
        this.Mv3x();
        a9j.ba1x(this.o1x, "visibility", "");
        if (!this.cAa8S) {
            this.od6X = be1x.od6X(this.o1x)
        }
        return this
    }
    ;
    xe9V.bt1x = function() {
        this.cAf8X ? this.T1x() : this.bcu9l();
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, k1x = c0x("nej.u"), a9j = c0x("nej.e"), O1x = c0x("nej.ui"), CK0x;
    if (!!O1x.bcz9q)
        return;
    O1x.bcz9q = NEJ.C();
    CK0x = O1x.bcz9q.N1x(O1x.ej3x);
    CK0x.bl1x = function(e1x) {
        this.Uo6i();
        this.bn1x(this.cAk8c(e1x));
        this.cf1x.onbeforerecycle = this.T1x.f1x(this);
        this.oH6B = this.bib1x()
    }
    ;
    CK0x.bC1x = function() {
        this.z1x("onbeforerecycle");
        this.bF1x();
        delete this.cf1x;
        a9j.mG5L(this.o1x);
        var CM0x = this.oH6B;
        if (!!CM0x) {
            delete this.oH6B;
            CM0x.T1x()
        }
    }
    ;
    CK0x.bib1x = br1x;
    CK0x.cAk8c = function(e1x) {
        var m1x = {};
        k1x.eI3x(e1x, function(p1x, K1x) {
            this.cf1x.hasOwnProperty(K1x) ? this.cf1x[K1x] = p1x : m1x[K1x] = p1x
        }, this);
        return m1x
    }
    ;
    CK0x.Uo6i = function() {
        this.cf1x = {
            clazz: "",
            parent: null,
            content: this.o1x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
    ;
    CK0x.J1x = function() {
        if (!!this.oH6B)
            this.oH6B.J1x();
        this.z1x("onaftershow");
        return this
    }
    ;
    CK0x.bt1x = function() {
        if (!!this.oH6B)
            this.oH6B.bt1x();
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, em3x = c0x("nej.g"), be1x = c0x("nej.h"), a9j = c0x("nej.e"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), O1x = c0x("nej.ui"), Uq6k, bGX6R;
    if (!!O1x.Mw3x)
        return;
    var iT4X = a9j.tA8s(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em3x.bwK4O + ");}");
    O1x.Mw3x = NEJ.C();
    Uq6k = O1x.Mw3x.N1x(O1x.ej3x);
    bGX6R = O1x.Mw3x.cs1x;
    Uq6k.bl1x = function(e1x) {
        this.bn1x(e1x);
        var bo1x = e1x.content || "&nbsp;";
        k1x.fG3x(bo1x) ? this.o1x.innerHTML = bo1x : this.o1x.appendChild(bo1x)
    }
    ;
    Uq6k.bC1x = function() {
        this.bF1x();
        this.o1x.innerHTML = "&nbsp;"
    }
    ;
    Uq6k.ch1x = function() {
        this.mn5s = iT4X
    }
    ;
    Uq6k.J1x = function() {
        be1x.bvG4K(this.o1x);
        bGX6R.J1x.apply(this, arguments);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h1x = c0x("nej.v"), O1x = c0x("nej.ut"), xj9a;
    if (!!O1x.uS8K)
        return;
    O1x.uS8K = NEJ.C();
    xj9a = O1x.uS8K.N1x(O1x.cJ2x);
    xj9a.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.cAG8y = !!e1x.overflow;
        this.o1x = a9j.B1x(e1x.body);
        this.CR0x = a9j.B1x(e1x.view) || a9j.bET6N(this.o1x);
        this.bJa7T = a9j.B1x(e1x.mbar) || this.o1x;
        this.bcS9J = parseInt(e1x.direction) || 0;
        if (!!e1x.isRelative) {
            this.o1x.style.position = "relative";
            this.bhP0x = true;
            this.bhJ0x()
        }
        this.bX1x([[document, "mouseup", this.bhG0x.f1x(this)], [document, "mousemove", this.bhE0x.f1x(this)], [this.bJa7T, "mousedown", this.UD6x.f1x(this)]])
    }
    ;
    xj9a.bhJ0x = function() {
        if (!!this.bhP0x) {
            this.MC3x = a9j.hO4S(this.o1x, this.CR0x);
            this.MC3x.x -= parseInt(a9j.dh2x(this.o1x, "left")) || 0;
            this.MC3x.y -= parseInt(a9j.dh2x(this.o1x, "top")) || 0
        }
    }
    ;
    xj9a.bC1x = function() {
        this.bF1x();
        delete this.o1x;
        delete this.bJa7T;
        delete this.CR0x
    }
    ;
    xj9a.bhn0x = function() {
        return {
            x: Math.max(this.CR0x.clientWidth, this.CR0x.scrollWidth) - this.o1x.offsetWidth,
            y: Math.max(this.CR0x.clientHeight, this.CR0x.scrollHeight) - this.o1x.offsetHeight
        }
    }
    ;
    xj9a.UD6x = function(d1x) {
        h1x.bg1x(d1x);
        if (!!this.hP4T)
            return;
        this.hP4T = {
            x: h1x.jH4L(d1x),
            y: h1x.mc5h(d1x)
        };
        this.bJZ7S = this.bhn0x();
        this.z1x("ondragstart", d1x)
    }
    ;
    xj9a.bhE0x = function(d1x) {
        if (!this.hP4T)
            return;
        var bi1x = {
            x: h1x.jH4L(d1x),
            y: h1x.mc5h(d1x)
        };
        var px6r = bi1x.x - this.hP4T.x
          , pv6p = bi1x.y - this.hP4T.y
          , D1x = {
            top: (parseInt(a9j.dh2x(this.o1x, "top")) || 0) + pv6p,
            left: (parseInt(a9j.dh2x(this.o1x, "left")) || 0) + px6r
        };
        if (this.bhP0x) {
            this.bhJ0x();
            D1x.top = D1x.top + this.MC3x.y;
            D1x.left = D1x.left + this.MC3x.x
        }
        this.hP4T = bi1x;
        this.gI3x(D1x)
    }
    ;
    xj9a.bhG0x = function(d1x) {
        if (!this.hP4T)
            return;
        delete this.bJZ7S;
        delete this.hP4T;
        this.z1x("ondragend", this.bhi0x())
    }
    ;
    xj9a.gI3x = function(d1x) {
        if (!this.cAG8y) {
            var bKD7w = this.bJZ7S || this.bhn0x();
            d1x.top = Math.min(bKD7w.y, Math.max(0, d1x.top));
            d1x.left = Math.min(bKD7w.x, Math.max(0, d1x.left))
        }
        var cj1x = this.o1x.style;
        if (this.bhP0x) {
            this.bhJ0x();
            d1x.top = d1x.top - this.MC3x.y;
            d1x.left = d1x.left - this.MC3x.x
        }
        if (this.bcS9J == 0 || this.bcS9J == 2)
            cj1x.top = d1x.top + "px";
        if (this.bcS9J == 0 || this.bcS9J == 1)
            cj1x.left = d1x.left + "px";
        this.z1x("onchange", d1x);
        return this
    }
    ;
    xj9a.bhi0x = function() {
        return {
            left: parseInt(a9j.dh2x(this.o1x, "left")) || 0,
            top: parseInt(a9j.dh2x(this.o1x, "top")) || 0
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = NEJ.P("nej.e"), h1x = NEJ.P("nej.v"), k1x = NEJ.P("nej.u"), I1x = NEJ.P("nej.ut"), O1x = NEJ.P("nej.ui"), iT4X, ge3x, b0x, L1x;
    if (!!O1x.bdz9q)
        return;
    O1x.bdz9q = NEJ.C();
    b0x = O1x.bdz9q.N1x(O1x.Uh6b);
    L1x = O1x.bdz9q.cs1x;
    b0x.cx1x = function() {
        this.sD7w = {};
        this.kC5H = {
            onchange: this.bhE0x.f1x(this)
        };
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.cBk8c(e1x.mask);
        this.cBs8k(e1x.align);
        this.CU0x(e1x.title);
        if (!e1x.draggable)
            return;
        this.jh4l = I1x.uS8K.A1x(this.kC5H)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.rw7p;
        delete this.UP6J;
        if (!!this.CV0x) {
            this.CV0x.T1x();
            delete this.CV0x
        }
        if (!!this.jh4l) {
            this.jh4l.T1x();
            delete this.jh4l
        }
    }
    ;
    b0x.ch1x = function() {
        this.mn5s = iT4X;
        this.cg1x = ge3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.dm2x(this.o1x);
        this.CG0x = i1x[1];
        this.kC5H.mbar = i1x[0];
        this.kC5H.body = this.o1x;
        h1x.s1x(i1x[2], "mousedown", this.cBK8C.f1x(this));
        h1x.s1x(this.kC5H.mbar, "mousedown", this.UD6x.f1x(this));
        this.bNH8z = a9j.dm2x(this.kC5H.mbar)[0]
    }
    ;
    b0x.cBK8C = function(d1x) {
        h1x.bg1x(d1x);
        this.z1x("onclose", d1x);
        if (!d1x.stopped) {
            this.bt1x()
        }
    }
    ;
    b0x.UD6x = function(d1x) {
        h1x.z1x(document, "click")
    }
    ;
    b0x.bhE0x = function(d1x) {
        if (!this.od6X)
            return;
        a9j.fb3x(this.od6X, {
            top: d1x.top + "px",
            left: d1x.left + "px"
        })
    }
    ;
    b0x.Mv3x = function() {
        var ex3x = [function() {
            return 0
        }
        , function(oj6d, mQ5V, bi1x, K1x) {
            if (K1x == "top" && window.top != window.self) {
                var bdM9D = 0
                  , Eq1x = 0;
                if (top.g_topBarHeight)
                    bdM9D = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight)
                    Eq1x = top.g_bottomBarHeight;
                if (oj6d.top <= bdM9D) {
                    var bgV0x = Math.max(0, (mQ5V.height - (bdM9D - oj6d.top) - Eq1x - bi1x.height) / 2);
                    return bgV0x + bdM9D
                } else {
                    var bgV0x = Math.max(0, (mQ5V.height - Eq1x - bi1x.height) / 2);
                    return bgV0x + oj6d.top
                }
            }
            return Math.max(0, oj6d[K1x] + (mQ5V[iw4A[K1x]] - bi1x[iw4A[K1x]]) / 2)
        }
        , function(oj6d, mQ5V, bi1x, K1x) {
            return oj6d[K1x] + (mQ5V[iw4A[K1x]] - bi1x[iw4A[K1x]])
        }
        ]
          , cCb9S = ["left", "top"]
          , iw4A = {
            left: "width",
            top: "height"
        };
        return function() {
            var D1x = {}
              , cj1x = this.o1x.style
              , jE4I = a9j.ow6q()
              , oj6d = {
                left: jE4I.scrollLeft,
                top: jE4I.scrollTop
            }
              , mQ5V = {
                width: jE4I.clientWidth,
                height: jE4I.clientHeight
            }
              , bi1x = {
                width: this.o1x.offsetWidth,
                height: this.o1x.offsetHeight
            }
              , dp2x = {
                left: jE4I.clientWidth - this.o1x.offsetWidth,
                top: jE4I.clientHeight - this.o1x.offsetHeight
            };
            k1x.bd1x(cCb9S, function(K1x, r1x) {
                var dx2x = ex3x[this.rw7p[r1x]];
                if (!dx2x)
                    return;
                D1x[K1x] = dx2x(oj6d, mQ5V, bi1x, K1x)
            }, this);
            this.gI3x(D1x)
        }
    }();
    b0x.cCg9X = function() {
        if (!this.CV0x) {
            if (!this.UP6J)
                return;
            this.sD7w.parent = this.gl3x;
            this.CV0x = this.UP6J.A1x(this.sD7w)
        }
        this.CV0x.J1x()
    }
    ;
    b0x.bcu9l = function() {
        if (!!this.CV0x)
            this.CV0x.bt1x();
        L1x.bcu9l.apply(this, arguments)
    }
    ;
    b0x.cBk8c = function(lo5t) {
        if (!!lo5t) {
            if (lo5t instanceof O1x.Mw3x) {
                this.CV0x = lo5t;
                return
            }
            if (k1x.gF3x(lo5t)) {
                this.UP6J = lo5t;
                return
            }
            this.UP6J = O1x.Mw3x;
            if (k1x.fG3x(lo5t))
                this.sD7w.clazz = lo5t;
            return
        }
        this.UP6J = null
    }
    ;
    b0x.CU0x = function(eq3x, dV2x) {
        if (!!this.bNH8z) {
            var bcf9W = !dV2x ? "innerText" : "innerHTML";
            this.bNH8z[bcf9W] = eq3x || "标题"
        }
        return this
    }
    ;
    b0x.cBs8k = function() {
        var df2x = /\s+/
          , cCh9Y = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        }
          , cCi9Z = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(nK6E) {
            this.rw7p = (nK6E || "").split(df2x);
            var cl1x = cCh9Y[this.rw7p[0]];
            if (cl1x == null)
                cl1x = 1;
            this.rw7p[0] = cl1x;
            var cl1x = cCi9Z[this.rw7p[1]];
            if (cl1x == null)
                cl1x = 1;
            this.rw7p[1] = cl1x;
            return this
        }
    }();
    b0x.J1x = function() {
        L1x.J1x.apply(this, arguments);
        this.cCg9X();
        return this
    }
    ;
    iT4X = a9j.tA8s(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    ge3x = a9j.jj4n('<div class="' + iT4X + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
}
)();
(function() {
    var c0x = NEJ.P, k1x = c0x("nej.u"), O1x = c0x("nej.ui"), bgR0x;
    if (!!O1x.bdQ9H)
        return;
    O1x.bdQ9H = NEJ.C();
    bgR0x = O1x.bdQ9H.N1x(O1x.bcz9q);
    bgR0x.bib1x = function() {
        return O1x.bdz9q.A1x(this.cf1x)
    }
    ;
    bgR0x.Uo6i = function() {
        O1x.bdQ9H.cs1x.Uo6i.apply(this, arguments);
        this.cf1x.mask = null;
        this.cf1x.title = "标题";
        this.cf1x.align = "";
        this.cf1x.draggable = !1;
        this.cf1x.onclose = null
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bc1x = c0x("nej.ui"), n1x = c0x("nm.l"), b0x, L1x;
    n1x.ep3x = NEJ.C();
    b0x = n1x.ep3x.N1x(bc1x.bdQ9H);
    b0x.bl1x = function(e1x) {
        e1x.clazz = "m-layer z-show " + (e1x.clazz || "");
        e1x.nohack = true;
        e1x.draggable = true;
        this.bn1x(e1x)
    }
    ;
    b0x.dY3x = function(g1x, bG1x) {
        if (!g1x)
            return;
        a9j.ba1x(g1x, "display", !bG1x ? "none" : "");
        g1x.lastChild.innerText = bG1x || ""
    }
    ;
    b0x.dW2x = function(gE3x, db2x, UW6Q, UX6R) {
        var eb3x = "js-lock";
        if (db2x === undefined)
            return a9j.bE1x(gE3x, eb3x);
        !db2x ? a9j.x1x(gE3x, eb3x) : a9j.y1x(gE3x, eb3x);
        gE3x.firstChild.innerText = !db2x ? UW6Q : UX6R
    }
    ;
    n1x.ep3x.J1x = function(e1x) {
        e1x = e1x || {};
        if (e1x.mask === undefined)
            e1x.mask = "m-mask";
        if (e1x.parent === undefined)
            e1x.parent = document.body;
        if (e1x.draggable === undefined)
            e1x.draggable = true;
        !!this.fk3x && this.fk3x.T1x();
        this.fk3x = this.A1x(e1x);
        this.fk3x.J1x(e1x);
        return this.fk3x
    }
    ;
    n1x.ep3x.bt1x = function() {
        !!this.fk3x && this.fk3x.T1x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), n1x = c0x("nm.l"), b0x, L1x;
    n1x.bgK0x = NEJ.C();
    b0x = n1x.bgK0x.N1x(n1x.ep3x);
    L1x = n1x.bgK0x.cs1x;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        if (e1x.bubble === undefined)
            e1x.bubble = true;
        this.Vb6V = e1x.bubble;
        this.rh7a = e1x.message || ""
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = a9j.jj4n('<div class="lyct f-cb f-tc"></div>')
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        h1x.s1x(this.o1x, "click", this.cL2x.f1x(this))
    }
    ;
    b0x.cL2x = function(d1x) {
        var g1x = h1x.W1x(d1x, "d:action");
        if (!g1x)
            return;
        if (g1x.href)
            h1x.cn1x(d1x);
        if (a9j.t1x(g1x, "action") == "close")
            this.bt1x();
        if (this.Vb6V === !1)
            h1x.tm7f(d1x);
        this.z1x("onaction", a9j.t1x(g1x, "action"))
    }
    ;
    b0x.J1x = function() {
        L1x.J1x.call(this);
        this.o1x.innerHTML = this.rh7a
    }
    ;
    var gK3x = a9j.eB3x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l1x.na5f = function() {
        var ei3x;
        var cD2x;
        var bgH0x = function(eN3x, U1x) {
            if (k1x.gF3x(eN3x, "function") && eN3x(U1x) != -1)
                cD2x.T1x()
        };
        var Di0x = function() {
            !!cD2x && cD2x.bt1x()
        };
        return function(e1x) {
            clearTimeout(ei3x);
            e1x = e1x || {};
            e1x.title = e1x.title || "提示";
            e1x.clazz = e1x.clazz || "";
            e1x.parent = e1x.parent || document.body;
            e1x.buttons = e1x.buttons || [];
            e1x.message = a9j.cc1x(gK3x, e1x);
            e1x.onaction = bgH0x.f1x(null, e1x.action);
            if (e1x.mask === undefined)
                e1x.mask = true;
            if (e1x.draggable === undefined)
                e1x.draggable = true;
            !!cD2x && cD2x.T1x();
            cD2x = n1x.bgK0x.A1x(e1x);
            cD2x.J1x();
            if (e1x.autoclose)
                ei3x = setTimeout(Di0x.f1x(null), 2e3);
            return cD2x
        }
    }();
    l1x.fs3x = function(e1x) {
        e1x = e1x || {};
        e1x.clazz = e1x.clazz || "m-layer-w1";
        e1x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e1x.btntxt || "确定"
        }];
        var cD2x = l1x.na5f(e1x);
        return cD2x
    }
    ;
    l1x.ho4s = function(e1x) {
        e1x = e1x || {};
        e1x.clazz = e1x.clazz || "m-layer-w2";
        e1x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e1x.btnok || "确定",
            style: e1x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e1x.btncc || "取消",
            style: e1x.ccstyle || ""
        }];
        var cD2x = l1x.na5f(e1x);
        return cD2x
    }
}
)();
(function() {
    var c0x = NEJ.P
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , k1x = c0x("nej.u");
    a9j.cCn9e = function() {
        var gH3x = /[\r\n]/gi
          , R1x = {};
        var cCt9k = function(cM2x) {
            return (cM2x || "").replace(gH3x, "aa").length
        };
        var bVj1x = function(C1x) {
            var bh1x = R1x[C1x]
              , bVq1x = a9j.B1x(C1x)
              , rd7W = a9j.B1x(C1x + "-counter");
            if (!bVq1x || !bh1x)
                return;
            var d1x = {
                input: bVq1x.value
            };
            d1x.length = bh1x.onlength(d1x.input);
            d1x.delta = bh1x.max - d1x.length;
            bh1x.onchange(d1x);
            rd7W.innerHTML = d1x.value || "剩余" + d1x.delta + "个字"
        };
        return function(F1x, e1x) {
            var C1x = a9j.lK5P(F1x);
            if (!C1x || !!R1x[C1x])
                return;
            var bh1x = NEJ.X({}, e1x);
            bh1x.onchange = bh1x.onchange || br1x;
            bh1x.onlength = cCt9k;
            if (!bh1x.max) {
                var bVI1x = parseInt(a9j.gN3x(C1x, "maxlength"))
                  , byj4n = parseInt(a9j.t1x(C1x, "maxLength"));
                bh1x.max = bVI1x || byj4n || 100;
                if (!bVI1x && !!byj4n)
                    bh1x.onlength = k1x.fy3x
            }
            R1x[C1x] = bh1x;
            h1x.s1x(C1x, "input", bVj1x.f1x(null, C1x));
            var g1x = a9j.Jq2x(C1x, {
                nid: bh1x.nid || "js-counter",
                clazz: bh1x.clazz
            });
            bh1x.xid = C1x + "-counter";
            g1x.id = bh1x.xid;
            bVj1x(C1x)
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , be1x = c0x("nej.h");
    be1x.bgE0x = function(F1x, ed3x) {}
}
)();
(function() {
    var c0x = NEJ.P
      , br1x = NEJ.F
      , O1x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , be1x = c0x("nej.h");
    if (O1x.nq5v.trident)
        return;
    be1x.bgE0x = function() {
        var R1x = {};
        var Iz2x = function(d1x) {
            var dn2x = h1x.W1x(d1x);
            if (!!dn2x.value)
                return;
            a9j.ba1x(a9j.Jq2x(dn2x), "display", "none")
        };
        var GM1x = function(d1x) {
            var dn2x = h1x.W1x(d1x);
            if (!!dn2x.value)
                return;
            a9j.ba1x(a9j.Jq2x(dn2x), "display", "")
        };
        var cCw9n = function(dn2x, ed3x) {
            var C1x = a9j.lK5P(dn2x)
              , je4i = a9j.Jq2x(dn2x, {
                tag: "label",
                clazz: ed3x
            });
            je4i.htmlFor = C1x;
            var cI2x = a9j.gN3x(dn2x, "placeholder") || "";
            je4i.innerText = cI2x == "null" ? "" : cI2x;
            var ce1x = dn2x.offsetHeight + "px";
            a9j.fb3x(je4i, {
                left: 0,
                display: !dn2x.value ? "" : "none"
            })
        };
        return be1x.bgE0x.eH3x(function(d1x) {
            d1x.stopped = !0;
            var bf1x = d1x.args
              , dn2x = a9j.B1x(bf1x[0]);
            if (!!R1x[dn2x.id])
                return;
            cCw9n(dn2x, bf1x[1]);
            R1x[dn2x.id] = !0;
            h1x.s1x(dn2x, "blur", GM1x.f1x(null));
            h1x.s1x(dn2x, "focus", Iz2x.f1x(null))
        })
    }()
}
)();
(function() {
    var c0x = NEJ.P
      , be1x = c0x("nej.h")
      , a9j = c0x("nej.e")
      , cZ2x = c0x("nej.x");
    a9j.gr3x = cZ2x.gr3x = function(F1x, ed3x) {
        be1x.bgE0x(F1x, a9j.t1x(F1x, "holder") || ed3x || "js-placeholder");
        return this
    }
    ;
    cZ2x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), hU4Y;
    if (!!O1x.Vf7Y)
        return;
    O1x.Vf7Y = NEJ.C();
    hU4Y = O1x.Vf7Y.N1x(O1x.cJ2x);
    hU4Y.cx1x = function() {
        this.cE2x();
        this.GP1x = {
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
    hU4Y.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.gs3x = document.forms[e1x.form] || a9j.B1x(e1x.form);
        this.bX1x([[this.gs3x, "keypress", this.cCA9r.f1x(this)]]);
        this.rh7a = e1x.message || {};
        this.rh7a.pass = this.rh7a.pass || "&nbsp;";
        var ff3x = this.pK6E(this.gs3x, "focusMode", 1);
        if (!isNaN(ff3x)) {
            this.bAa5f = {
                mode: ff3x,
                clazz: e1x.focus
            }
        }
        this.Dm0x = e1x.holder;
        this.GP1x.tp.clazz = "js-mhd " + (e1x.tip || "js-tip");
        this.GP1x.ok.clazz = "js-mhd " + (e1x.pass || "js-pass");
        this.GP1x.er.clazz = "js-mhd " + (e1x.error || "js-error");
        this.bAo5t = e1x.invalid || "js-invalid";
        this.cCJ9A(e1x);
        this.gD3x();
        if (!!this.Dn0x)
            this.Dn0x.focus()
    }
    ;
    hU4Y.bC1x = function() {
        this.bF1x();
        delete this.rh7a;
        delete this.Dn0x;
        delete this.Hn2x;
        delete this.gs3x;
        delete this.bBm5r;
        delete this.Vj7c
    }
    ;
    hU4Y.pK6E = function(g1x, xw9n, u1x) {
        var D1x = a9j.t1x(g1x, xw9n);
        switch (u1x) {
        case 1:
            return parseInt(D1x);
        case 2:
            return (D1x || "").toLowerCase() == "true";
        case 3:
            return this.bgk0x(D1x)
        }
        return D1x
    }
    ;
    hU4Y.Ds0x = function(D1x, u1x) {
        if (u1x == "date")
            return this.bgk0x(D1x);
        return parseInt(D1x)
    }
    ;
    hU4Y.beo0x = function() {
        var kz5E = /^button|submit|reset|image|hidden|file$/i;
        return function(g1x) {
            g1x = this.B1x(g1x) || g1x;
            var u1x = g1x.type;
            return !!g1x.name && !kz5E.test(g1x.type || "")
        }
    }();
    hU4Y.cCN9E = function() {
        var kz5E = /^hidden$/i;
        return function(g1x) {
            if (this.beo0x(g1x))
                return !0;
            g1x = this.B1x(g1x) || g1x;
            var u1x = g1x.type || "";
            return kz5E.test(u1x)
        }
    }();
    hU4Y.bgk0x = function() {
        var df2x = /[-\/]/;
        var cDC9t = function(D1x) {
            if (!D1x)
                return "";
            D1x = D1x.split(df2x);
            D1x.push(D1x.shift());
            return D1x.join("/")
        };
        return function(D1x) {
            if ((D1x || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(cDC9t(D1x))
        }
    }();
    hU4Y.cCA9r = function(d1x) {
        if (d1x.keyCode != 13)
            return;
        this.z1x("onenter", d1x)
    }
    ;
    hU4Y.cDK9B = function(C1x, V1x) {
        var si7b = this.Vj7c[V1x]
          , D1x = this.pK6E(C1x, V1x);
        if (!D1x || !si7b)
            return;
        this.beF0x(C1x, si7b);
        this.bfX0x(C1x, V1x, D1x)
    }
    ;
    hU4Y.cDM9D = function(C1x, V1x) {
        try {
            var bCy5D = this.pK6E(C1x, V1x);
            if (!bCy5D)
                return;
            var D1x = new RegExp(bCy5D);
            this.bfX0x(C1x, V1x, D1x);
            this.beF0x(C1x, this.Vj7c[V1x])
        } catch (e) {}
    }
    ;
    hU4Y.cDT9K = function(C1x, V1x) {
        var si7b = this.Vj7c[V1x];
        if (!!si7b && this.pK6E(C1x, V1x, 2))
            this.beF0x(C1x, si7b)
    }
    ;
    hU4Y.bfU0x = function(C1x, V1x, D1x) {
        D1x = parseInt(D1x);
        if (isNaN(D1x))
            return;
        this.bfX0x(C1x, V1x, D1x);
        this.beF0x(C1x, this.Vj7c[V1x])
    }
    ;
    hU4Y.bCF5K = function(C1x, V1x) {
        this.bfU0x(C1x, V1x, this.pK6E(C1x, V1x))
    }
    ;
    hU4Y.bCM5R = function(C1x, V1x) {
        this.bfU0x(C1x, V1x, a9j.gN3x(C1x, V1x))
    }
    ;
    hU4Y.bCP5U = function(C1x, V1x, u1x) {
        var D1x = this.Ds0x(this.pK6E(C1x, V1x), this.pK6E(C1x, "type"));
        this.bfU0x(C1x, V1x, D1x)
    }
    ;
    hU4Y.cDY9P = function() {
        var gH3x = /^input|textarea$/i;
        var Iz2x = function(d1x) {
            this.pN6H(h1x.W1x(d1x))
        };
        var GM1x = function(d1x) {
            var g1x = h1x.W1x(d1x);
            if (!this.pK6E(g1x, "ignore", 2)) {
                this.bCW6Q(g1x)
            }
        };
        return function(g1x) {
            if (this.pK6E(g1x, "autoFocus", 2))
                this.Dn0x = g1x;
            var qK7D = a9j.gN3x(g1x, "placeholder");
            if (!!qK7D && qK7D != "null")
                a9j.gr3x(g1x, this.Dm0x);
            if (!!this.bAa5f && gH3x.test(g1x.tagName))
                a9j.mw5B(g1x, this.bAa5f);
            var C1x = a9j.lK5P(g1x);
            this.cDT9K(C1x, "required");
            this.cDK9B(C1x, "type");
            this.cDM9D(C1x, "pattern");
            this.bCM5R(C1x, "maxlength");
            this.bCM5R(C1x, "minlength");
            this.bCF5K(C1x, "maxLength");
            this.bCF5K(C1x, "minLength");
            this.bCP5U(C1x, "min");
            this.bCP5U(C1x, "max");
            var V1x = g1x.name;
            this.rh7a[V1x + "-tip"] = this.pK6E(g1x, "tip");
            this.rh7a[V1x + "-error"] = this.pK6E(g1x, "message");
            this.pN6H(g1x);
            var bx1x = this.Hn2x[C1x]
              , j1x = (bx1x || bb1x).data || bb1x
              , VC7v = this.pK6E(g1x, "counter", 2);
            if (VC7v && (j1x.maxlength || j1x.maxLength)) {
                a9j.cCn9e(C1x, {
                    nid: this.GP1x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bx1x && gH3x.test(g1x.tagName)) {
                this.bX1x([[g1x, "focus", Iz2x.f1x(this)], [g1x, "blur", GM1x.f1x(this)]])
            } else if (this.pK6E(g1x, "focus", 2)) {
                this.bX1x([[g1x, "focus", Iz2x.f1x(this)]])
            }
        }
    }();
    hU4Y.cCJ9A = function() {
        var DN1x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bgk0x(v))
            }
        };
        var cDZ9Q = {
            required: function(g1x) {
                var u1x = g1x.type
                  , cEf9W = !g1x.value
                  , cEi9Z = (u1x == "checkbox" || u1x == "radio") && !g1x.checked;
                if (cEi9Z || cEf9W)
                    return -1
            },
            type: function(g1x, e1x) {
                var df2x = this.bBm5r[e1x.type]
                  , fz3x = g1x.value.trim()
                  , cEk9b = !!df2x.test && !df2x.test(fz3x)
                  , cEE9v = k1x.gF3x(df2x) && !df2x.call(this, fz3x);
                if (cEk9b || cEE9v)
                    return -2
            },
            pattern: function(g1x, e1x) {
                if (!e1x.pattern.test(g1x.value))
                    return -3
            },
            maxlength: function(g1x, e1x) {
                if (g1x.value.length > e1x.maxlength)
                    return -4
            },
            minlength: function(g1x, e1x) {
                if (g1x.value.length < e1x.minlength)
                    return -5
            },
            maxLength: function(g1x, e1x) {
                if (k1x.fy3x(g1x.value) > e1x.maxLength)
                    return -4
            },
            minLength: function(g1x, e1x) {
                if (k1x.fy3x(g1x.value) < e1x.minLength)
                    return -5
            },
            min: function(g1x, e1x) {
                var ha4e = this.Ds0x(g1x.value, e1x.type);
                if (isNaN(ha4e) || ha4e < e1x.min)
                    return -6
            },
            max: function(g1x, e1x) {
                var ha4e = this.Ds0x(g1x.value, e1x.type);
                if (isNaN(ha4e) || ha4e > e1x.max)
                    return -7
            }
        };
        return function(e1x) {
            this.bBm5r = NEJ.X(NEJ.X({}, DN1x), e1x.type);
            this.Vj7c = NEJ.X(NEJ.X({}, cDZ9Q), e1x.attr)
        }
    }();
    hU4Y.beF0x = function(C1x, yA9r) {
        if (!k1x.gF3x(yA9r))
            return;
        var bx1x = this.Hn2x[C1x];
        if (!bx1x || !bx1x.func) {
            bx1x = bx1x || {};
            bx1x.func = [];
            this.Hn2x[C1x] = bx1x
        }
        bx1x.func.push(yA9r)
    }
    ;
    hU4Y.bfX0x = function(C1x, V1x, D1x) {
        if (!V1x)
            return;
        var bx1x = this.Hn2x[C1x];
        if (!bx1x || !bx1x.data) {
            bx1x = bx1x || {};
            bx1x.data = {};
            this.Hn2x[C1x] = bx1x
        }
        bx1x.data[V1x] = D1x
    }
    ;
    hU4Y.bCW6Q = function(g1x) {
        g1x = this.B1x(g1x) || g1x;
        var bx1x = this.Hn2x[a9j.lK5P(g1x)];
        if (!g1x || !bx1x || !this.beo0x(g1x))
            return !0;
        var m1x;
        k1x.eI3x(bx1x.func, function(ex3x) {
            m1x = ex3x.call(this, g1x, bx1x.data);
            return m1x != null
        }, this);
        if (m1x == null) {
            var d1x = {
                target: g1x,
                form: this.gs3x
            };
            this.z1x("oncheck", d1x);
            m1x = d1x.value
        }
        var d1x = {
            target: g1x,
            form: this.gs3x
        };
        if (m1x != null) {
            d1x.code = m1x;
            this.z1x("oninvalid", d1x);
            if (!d1x.stopped) {
                this.cEJ9A(g1x, d1x.value || this.rh7a[g1x.name + m1x])
            }
        } else {
            this.z1x("onvalid", d1x);
            if (!d1x.stopped)
                this.cEI9z(g1x, d1x.value)
        }
        return m1x == null
    }
    ;
    hU4Y.zu9l = function() {
        var cEH9y = function(ZE8w, bfp0x) {
            return ZE8w == bfp0x ? "block" : "none"
        };
        var cEG9x = function(g1x, u1x, bG1x) {
            var qK7D = bES6M.call(this, g1x, u1x);
            if (!qK7D && !!bG1x)
                qK7D = a9j.Jq2x(g1x, this.GP1x[u1x]);
            return qK7D
        };
        var bES6M = function(g1x, u1x) {
            var qK7D;
            if (u1x == "tp")
                qK7D = a9j.B1x(g1x.name + "-tip");
            if (!qK7D)
                qK7D = a9j.H1x(g1x.parentNode, this.GP1x[u1x].nid)[0];
            return qK7D
        };
        return function(g1x, bG1x, u1x) {
            g1x = this.B1x(g1x) || g1x;
            if (!g1x)
                return;
            u1x == "er" ? a9j.y1x(g1x, this.bAo5t) : a9j.x1x(g1x, this.bAo5t);
            var qK7D = cEG9x.call(this, g1x, u1x, bG1x);
            if (!!qK7D && !!bG1x)
                qK7D.innerHTML = bG1x;
            k1x.eI3x(this.GP1x, function(D1x, K1x) {
                a9j.ba1x(bES6M.call(this, g1x, K1x), "display", cEH9y(u1x, K1x))
            }, this)
        }
    }();
    hU4Y.pN6H = function(g1x, bG1x) {
        this.zu9l(g1x, bG1x || this.rh7a[g1x.name + "-tip"], "tp");
        return this
    }
    ;
    hU4Y.cEI9z = function(g1x, bG1x) {
        this.zu9l(g1x, bG1x || this.rh7a[g1x.name + "-pass"] || this.rh7a.pass, "ok");
        return this
    }
    ;
    hU4Y.cEJ9A = function(g1x, bG1x) {
        this.zu9l(g1x, bG1x || this.rh7a[g1x.name + "-error"], "er");
        return this
    }
    ;
    hU4Y.jb4f = function() {
        var gH3x = /^(?:radio|checkbox)$/i;
        var cEF9w = function(D1x) {
            return D1x == null ? "" : D1x
        };
        var bFf6Z = function(D1x, g1x) {
            if (gH3x.test(g1x.type || "")) {
                g1x.checked = D1x == g1x.value
            } else {
                g1x.value = cEF9w(D1x)
            }
        };
        return function(V1x, D1x) {
            var g1x = this.B1x(V1x);
            if (!g1x)
                return this;
            if (g1x.tagName == "SELECT" || !g1x.length) {
                bFf6Z(D1x, g1x)
            } else {
                k1x.bd1x(g1x, bFf6Z.f1x(null, D1x))
            }
            return this
        }
    }();
    hU4Y.B1x = function(V1x) {
        return this.gs3x.elements[V1x]
    }
    ;
    hU4Y.cEL9C = function() {
        return this.gs3x
    }
    ;
    hU4Y.bfe0x = function() {
        var gH3x = /^radio|checkbox$/i
          , kz5E = /^number|date$/;
        var cED9u = function(bz1x, g1x) {
            var V1x = g1x.name
              , D1x = g1x.value
              , bx1x = bz1x[V1x]
              , u1x = this.pK6E(g1x, "type");
            if (kz5E.test(u1x))
                D1x = this.Ds0x(D1x, u1x);
            if (gH3x.test(g1x.type) && !g1x.checked) {
                D1x = this.pK6E(g1x, "value");
                if (!D1x)
                    return
            }
            if (!!bx1x) {
                if (!k1x.eL3x(bx1x)) {
                    bx1x = [bx1x];
                    bz1x[V1x] = bx1x
                }
                bx1x.push(D1x)
            } else {
                bz1x[V1x] = D1x
            }
        };
        return function() {
            var m1x = {};
            k1x.bd1x(this.gs3x.elements, function(g1x) {
                if (this.cCN9E(g1x))
                    cED9u.call(this, m1x, g1x)
            }, this);
            return m1x
        }
    }();
    hU4Y.VP7I = function() {
        var cEC9t = function(g1x) {
            if (this.beo0x(g1x))
                this.pN6H(g1x)
        };
        return function() {
            this.gs3x.reset();
            k1x.bd1x(this.gs3x.elements, cEC9t, this);
            return this
        }
    }();
    hU4Y.cHv0x = function() {
        this.gs3x.submit();
        return this
    }
    ;
    hU4Y.gD3x = function() {
        var cEp9g = function(g1x) {
            if (this.beo0x(g1x))
                this.cDY9P(g1x)
        };
        return function() {
            this.Hn2x = {};
            k1x.bd1x(this.gs3x.elements, cEp9g, this);
            return this
        }
    }();
    hU4Y.cEo9f = function(g1x) {
        g1x = this.B1x(g1x) || g1x;
        if (!!g1x)
            return this.bCW6Q(g1x);
        var m1x = !0;
        k1x.bd1x(this.gs3x.elements, function(g1x) {
            var jw4A = this.cEo9f(g1x);
            m1x = m1x && jw4A
        }, this);
        return m1x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h1x = c0x("nej.v"), I1x = c0x("nej.ut"), k1x = c0x("nej.u"), l1x = c0x("nm.x"), n1x = c0x("nm.l"), b0x, L1x;
    n1x.bfi0x = NEJ.C();
    b0x = n1x.bfi0x.N1x(n1x.ep3x);
    L1x = n1x.bfi0x.cs1x;
    b0x.bW1x = function() {
        this.ci1x();
        h1x.s1x(this.o1x, "click", this.cL2x.f1x(this));
        h1x.s1x(document, "mousewheel", this.Dy0x.f1x(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.Dy0x.f1x(this))
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        if (e1x.jst) {
            this.o1x.innerHTML = a9j.cc1x(e1x.jst, e1x.data)
        } else if (e1x.ntp) {
            this.o1x.appendChild(a9j.dC2x(e1x.ntp))
        } else if (e1x.txt) {
            this.o1x.innerHTML = a9j.iE4I(e1x.txt)
        } else if (e1x.html) {
            this.o1x.innerHTML = e1x.html
        }
        var VL7E = this.o1x.getElementsByTagName("form");
        if (VL7E.length) {
            this.gs3x = I1x.Vf7Y.A1x({
                form: VL7E[0]
            })
        }
        this.EB1x = a9j.dm2x(this.o1x)[0]
    }
    ;
    b0x.bC1x = function() {
        this.z1x("ondestroy");
        this.bF1x();
        this.o1x.innerHTML = "";
        delete this.EB1x
    }
    ;
    b0x.cL2x = function(d1x) {
        var g1x = h1x.W1x(d1x, "d:action")
          , j1x = this.gs3x ? this.gs3x.bfe0x() : null
          , d1x = {
            action: a9j.t1x(g1x, "action")
        };
        if (j1x)
            d1x.data = j1x;
        if (d1x.action) {
            this.z1x("onaction", d1x);
            if (d1x.stopped)
                return;
            this.bt1x()
        }
    }
    ;
    b0x.Dy0x = function(d1x) {
        if (!this.EB1x)
            return;
        h1x.bg1x(d1x);
        var dp2x = d1x.wheelDelta || -d1x.detail;
        this.EB1x.scrollTop -= dp2x
    }
    ;
    l1x.kf4j = function(e1x) {
        e1x.destroyable = e1x.destroyable || true;
        e1x.title = e1x.title || "提示";
        e1x.draggable = true;
        e1x.parent = e1x.parent || document.body;
        e1x.mask = e1x.mask || true;
        var CM0x = n1x.bfi0x.A1x(e1x);
        CM0x.J1x();
        return CM0x
    }
}
)();
(function() {
    var p = NEJ.P("nej.u");
    var bGt6n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , VJ7C = {}
      , EJ1x = {};
    for (var i = 0, l = bGt6n.length, c; i < l; i++) {
        c = bGt6n.charAt(i);
        VJ7C[i] = c;
        EJ1x[c] = i
    }
    var cEn9e = function(ix4B) {
        var r1x = 0, c, m1x = [];
        while (r1x < ix4B.length) {
            c = ix4B[r1x];
            if (c < 128) {
                m1x.push(String.fromCharCode(c));
                r1x++
            } else if (c > 191 && c < 224) {
                m1x.push(String.fromCharCode((c & 31) << 6 | ix4B[r1x + 1] & 63));
                r1x += 2
            } else {
                m1x.push(String.fromCharCode((c & 15) << 12 | (ix4B[r1x + 1] & 63) << 6 | ix4B[r1x + 2] & 63));
                r1x += 3
            }
        }
        return m1x.join("")
    };
    var cEj9a = function() {
        var hv4z = /\r\n/g;
        return function(j1x) {
            j1x = j1x.replace(hv4z, "\n");
            var m1x = []
              , mB5G = String.fromCharCode(237);
            if (mB5G.charCodeAt(0) < 0)
                for (var i = 0, l = j1x.length, c; i < l; i++) {
                    c = j1x.charCodeAt(i);
                    c > 0 ? m1x.push(c) : m1x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = j1x.length, c; i < l; i++) {
                    c = j1x.charCodeAt(i);
                    if (c < 128)
                        m1x.push(c);
                    else if (c > 127 && c < 2048)
                        m1x.push(c >> 6 | 192, c & 63 | 128);
                    else
                        m1x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return m1x
        }
    }();
    var MT3x = function(ix4B) {
        var r1x = 0
          , m1x = []
          , ff3x = ix4B.length % 3;
        if (ff3x == 1)
            ix4B.push(0, 0);
        if (ff3x == 2)
            ix4B.push(0);
        while (r1x < ix4B.length) {
            m1x.push(VJ7C[ix4B[r1x] >> 2], VJ7C[(ix4B[r1x] & 3) << 4 | ix4B[r1x + 1] >> 4], VJ7C[(ix4B[r1x + 1] & 15) << 2 | ix4B[r1x + 2] >> 6], VJ7C[ix4B[r1x + 2] & 63]);
            r1x += 3
        }
        if (ff3x == 1)
            m1x[m1x.length - 1] = m1x[m1x.length - 2] = "=";
        if (ff3x == 2)
            m1x[m1x.length - 1] = "=";
        return m1x.join("")
    };
    var bHf7Y = function() {
        var rx7q = /\n|\r|=/g;
        return function(j1x) {
            var r1x = 0
              , m1x = [];
            j1x = j1x.replace(rx7q, "");
            for (var i = 0, l = j1x.length; i < l; i += 4)
                m1x.push(EJ1x[j1x.charAt(i)] << 2 | EJ1x[j1x.charAt(i + 1)] >> 4, (EJ1x[j1x.charAt(i + 1)] & 15) << 4 | EJ1x[j1x.charAt(i + 2)] >> 2, (EJ1x[j1x.charAt(i + 2)] & 3) << 6 | EJ1x[j1x.charAt(i + 3)]);
            var bq1x = m1x.length
              , ff3x = j1x.length % 4;
            if (ff3x == 2)
                m1x = m1x.slice(0, bq1x - 2);
            if (ff3x == 3)
                m1x = m1x.slice(0, bq1x - 1);
            return m1x
        }
    }();
    p.cEO9F = function(j1x) {
        return cEn9e(bHf7Y(j1x))
    }
    ;
    p.cEe9V = function(j1x) {
        var ix4B = bHf7Y(j1x), ds2x = ix4B.length, iv4z;
        var r1x = 0;
        while (iv4z = ix4B[r1x]) {
            if (iv4z > 128) {
                ix4B[r1x] = iv4z - 256
            }
            r1x++
        }
        return ix4B
    }
    ;
    p.cEd9U = function(j1x) {
        try {
            return window.btoa(j1x)
        } catch (ex) {
            return MT3x(cEj9a(j1x))
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h1x = c0x("nej.v"), a9j = c0x("nej.e"), v1x = c0x("nej.j"), O1x = c0x("nej.p"), k1x = c0x("nej.u"), n1x = c0x("nm.l"), w1x = c0x("nm.w"), bD1x = c0x("nej.ui"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), b0x, L1x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n1x.bIf7Y = NEJ.C();
    b0x = n1x.bIf7Y.N1x(n1x.ep3x);
    b0x.ch1x = function() {
        this.cg1x = "m-download-layer"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.H1x(this.o1x, "j-flag");
        this.bfN0x = i1x[0];
        this.bfO0x = i1x[1];
        this.bIY7R = i1x[2];
        v1x.bm1x("/client/version/get", {
            type: "json",
            onload: this.cEc9T.f1x(this)
        });
        if (O1x.Ik2x.mac) {
            a9j.x1x(this.bfN0x.parentNode, "f-hide");
            a9j.y1x(this.bfO0x.parentNode, "f-hide");
            a9j.y1x(this.bIY7R, "f-hide")
        } else {
            a9j.y1x(this.bfN0x.parentNode, "f-hide");
            a9j.x1x(this.bfO0x.parentNode, "f-hide");
            a9j.x1x(this.bIY7R, "f-hide")
        }
    }
    ;
    b0x.bl1x = function(e1x) {
        e1x.clazz = " m-layer-down";
        e1x.parent = e1x.parent || document.body;
        e1x.title = "下载";
        e1x.draggable = !0;
        e1x.destroyalbe = !0;
        e1x.mask = true;
        this.bn1x(e1x);
        this.bX1x([[this.o1x, "click", this.bT1x.f1x(this)]]);
        this.ev3x = TYPE_MAP[e1x.type];
        this.gS3x = e1x.id
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.Du0x = function() {
        this.bt1x()
    }
    ;
    b0x.FH1x = function(d1x) {
        this.z1x("onok", D1x);
        this.bt1x()
    }
    ;
    b0x.bT1x = function(d1x) {
        var g1x = h1x.W1x(d1x, "d:action");
        switch (a9j.t1x(g1x, "action")) {
        case "download":
            this.bt1x();
            window.open(a9j.t1x(g1x, "src"));
            break;
        case "orpheus":
            this.bt1x();
            location.href = "orpheus://" + k1x.cEd9U(JSON.stringify({
                type: this.ev3x,
                id: this.gS3x,
                cmd: "download"
            }));
            break
        }
    }
    ;
    b0x.cEc9T = function(d1x) {
        if ((d1x || bb1x).code == 200) {
            this.LV3x = d1x.data;
            this.bfN0x.innerText = "V" + this.LV3x.mac;
            this.bfO0x.innerText = "V" + this.LV3x.pc
        }
    }
    ;
    l1x.MQ3x = function(e1x) {
        n1x.bIf7Y.A1x(e1x).J1x()
    }
}
)();
(function() {
    var c0x = NEJ.P
      , l1x = c0x("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1]in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l1x.FL1x = FullscreenApi
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , k1x = c0x("nej.u")
      , q1x = c0x("nm.d")
      , bR1x = {};
    q1x.B1x = function(K1x) {
        return bR1x[K1x]
    }
    ;
    q1x.nA5F = function(K1x, bh1x) {
        bR1x[K1x] = bh1x
    }
    ;
    q1x.fq3x = function(j1x) {
        k1x.eI3x(j1x, function(p1x, K1x) {
            var bh1x = bR1x[K1x] || {};
            NEJ.X(bh1x, p1x);
            bR1x[K1x] = bh1x
        })
    }
}
)();
(function() {
    var c0x = NEJ.P
      , br1x = NEJ.F
      , be1x = c0x("nej.h");
    be1x.beJ0x = function(K1x) {
        return localStorage.getItem(K1x)
    }
    ;
    be1x.beI0x = function(K1x, D1x) {
        localStorage.setItem(K1x, D1x)
    }
    ;
    be1x.bfZ0x = function(K1x) {
        localStorage.removeItem(K1x)
    }
    ;
    be1x.bga0x = function() {
        localStorage.clear()
    }
    ;
    be1x.cEb9S = function() {
        var m1x = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            m1x.push(localStorage.key(i));
        return m1x
    }
    ;
    be1x.bgf0x = function() {
        (document.onstorageready || br1x)()
    }
    ;
    be1x.bgi0x = function() {
        return !0
    }
}
)();
(function() {
    var c0x = NEJ.P, O1x = c0x("nej.p"), iv4z = c0x("nej.c"), be1x = c0x("nej.h"), sK7D;
    if (O1x.nq5v.trident || !!window.localStorage)
        return;
    var cEa9R = function() {
        var sE7x, ei3x;
        var bmb1x = function() {
            sE7x = document.createElement("div");
            NEJ.X(sE7x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", sE7x);
            sE7x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iv4z.B1x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Rk5p = function() {
            ei3x = window.clearTimeout(ei3x);
            var hN4R = sE7x.getElementsByTagName("object")[0];
            if (!!hN4R.initStorage) {
                delete sE7x;
                sK7D = hN4R;
                sK7D.initStorage("nej-storage");
                (document.onstorageready || br1x)();
                return
            }
            ei3x = window.setTimeout(Rk5p, 500)
        };
        return function() {
            if (!!sK7D)
                return;
            bmb1x();
            Rk5p()
        }
    }();
    be1x.beJ0x = be1x.beJ0x.eH3x(function(d1x) {
        d1x.stopped = !0;
        if (!sK7D)
            return;
        d1x.value = sK7D.getItem(d1x.args[0])
    });
    be1x.beI0x = be1x.beI0x.eH3x(function(d1x) {
        d1x.stopped = !0;
        if (!sK7D)
            return;
        var bf1x = d1x.args;
        sK7D.setItem(bf1x[0], bf1x[1])
    });
    be1x.bfZ0x = be1x.bfZ0x.eH3x(function(d1x) {
        d1x.stopped = !0;
        if (!sK7D)
            return;
        sK7D.removeItem(d1x.args[0])
    });
    be1x.bga0x = be1x.bga0x.eH3x(function(d1x) {
        d1x.stopped = !0;
        if (!!sK7D)
            sK7D.clear()
    });
    be1x.bgf0x = be1x.bgf0x.eH3x(function(d1x) {
        d1x.stopped = !0;
        cEa9R()
    });
    be1x.bgi0x = be1x.bgi0x.eH3x(function(d1x) {
        d1x.stopped = !0;
        d1x.value = !!sK7D
    })
}
)();
(function() {
    var c0x = NEJ.P
      , k1x = c0x("nej.u")
      , h1x = c0x("nej.v")
      , be1x = c0x("nej.h")
      , v1x = c0x("nej.j")
      , I1x = c0x("nej.ut")
      , R1x = {};
    v1x.vb8T = function(K1x, D1x) {
        var bKX7Q = JSON.stringify(D1x);
        try {
            be1x.beI0x(K1x, bKX7Q)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKX7Q != be1x.beJ0x(K1x))
            R1x[K1x] = D1x;
        return this
    }
    ;
    v1x.tt7m = function(K1x) {
        var j1x = JSON.parse(be1x.beJ0x(K1x) || "null");
        return j1x == null ? R1x[K1x] : j1x
    }
    ;
    v1x.bLv8n = function(K1x, D1x) {
        var j1x = v1x.tt7m(K1x);
        if (j1x == null) {
            j1x = D1x;
            v1x.vb8T(K1x, j1x)
        }
        return j1x
    }
    ;
    v1x.MJ3x = function(K1x) {
        delete R1x[K1x];
        be1x.bfZ0x(K1x);
        return this
    }
    ;
    v1x.cEQ9H = function() {
        var bgl0x = function(p1x, K1x, bz1x) {
            delete bz1x[K1x]
        };
        return function() {
            k1x.eI3x(R1x, bgl0x);
            be1x.bga0x();
            return this
        }
    }();
    v1x.cER9I = function(m1x) {
        m1x = m1x || {};
        k1x.bd1x(be1x.cEb9S(), function(K1x) {
            m1x[K1x] = v1x.tt7m(K1x)
        });
        return m1x
    }
    ;
    I1x.fI3x.A1x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (be1x.bgi0x()) {
                document.onstorageready()
            }
        }
    });
    var cDX9O = function() {
        var cDV9M = function(D1x, K1x, bz1x) {
            be1x.beI0x(K1x, JSON.stringify(D1x));
            delete bz1x[K1x]
        };
        return function() {
            k1x.eI3x(R1x, cDV9M)
        }
    }();
    h1x.s1x(document, "storageready", cDX9O);
    be1x.bgf0x()
}
)();
(function() {
    var c0x = NEJ.P, h1x = c0x("nej.v"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), MI3x;
    if (!!O1x.bgt0x)
        return;
    O1x.bgt0x = NEJ.C();
    MI3x = O1x.bgt0x.N1x(O1x.cJ2x);
    MI3x.cx1x = function() {
        var gK3x = +(new Date)
          , nk5p = "dat-" + gK3x;
        return function() {
            this.cE2x();
            var R1x = this.constructor[nk5p];
            if (!R1x) {
                R1x = {};
                this.constructor[nk5p] = R1x
            }
            this.S1x = R1x
        }
    }();
    MI3x.B1x = function(K1x) {
        return this.S1x[K1x]
    }
    ;
    MI3x.nA5F = function(K1x, D1x) {
        var ni5n = this.S1x[K1x];
        this.S1x[K1x] = D1x;
        h1x.z1x(localCache, "cachechange", {
            key: K1x,
            type: "set",
            oldValue: ni5n,
            newValue: D1x
        });
        return this
    }
    ;
    MI3x.cK2x = function(K1x) {
        var ni5n = this.S1x[K1x];
        k1x.YC7v(this.S1x, K1x);
        h1x.z1x(localCache, "cachechange", {
            key: K1x,
            type: "delete",
            oldValue: ni5n,
            newValue: undefined
        });
        return ni5n
    }
    ;
    MI3x.beg0x = function(Eg1x) {
        return NEJ.Q(this.S1x, Eg1x)
    }
    ;
    window.localCache = O1x.bgt0x.A1x();
    O1x.fI3x.A1x({
        element: localCache,
        event: "cachechange"
    })
}
)();
(function() {
    var c0x = NEJ.P, fA3x = NEJ.R, br1x = NEJ.F, k1x = c0x("nej.u"), v1x = c0x("nej.j"), O1x = c0x("nej.ut"), nk5p = "dat-" + +(new Date), nh5m;
    if (!!O1x.bgB0x)
        return;
    O1x.bgB0x = NEJ.C();
    nh5m = O1x.bgB0x.N1x(O1x.cJ2x);
    nh5m.cx1x = function() {
        this.cE2x();
        this.S1x = this.constructor[nk5p];
        if (!this.S1x) {
            this.S1x = {};
            this.S1x[nk5p + "-l"] = {};
            this.constructor[nk5p] = this.S1x
        }
    }
    ;
    nh5m.rD7w = function(K1x) {
        return this.S1x[K1x]
    }
    ;
    nh5m.qb6V = function(K1x, D1x) {
        this.S1x[K1x] = D1x
    }
    ;
    nh5m.lB5G = function(K1x, ky5D) {
        var j1x = this.rD7w(K1x);
        if (j1x == null) {
            j1x = ky5D;
            this.qb6V(K1x, j1x)
        }
        return j1x
    }
    ;
    nh5m.cDU9L = function(K1x) {
        if (K1x != null) {
            delete this.S1x[K1x];
            return
        }
        k1x.eI3x(this.S1x, function(p1x, K1x) {
            if (K1x == nk5p + "-l")
                return;
            this.cDU9L(K1x)
        }, this)
    }
    ;
    nh5m.cES9J = function(K1x) {
        if (!!v1x.MJ3x)
            return v1x.MJ3x(K1x)
    }
    ;
    nh5m.cDP9G = function(K1x) {
        if (!!v1x.tt7m)
            return v1x.tt7m(K1x)
    }
    ;
    nh5m.cDO9F = function(K1x, D1x) {
        if (!!v1x.vb8T)
            v1x.vb8T(K1x, D1x)
    }
    ;
    nh5m.Hk1x = function(K1x, ky5D) {
        var j1x = this.UU6O(K1x);
        if (j1x == null) {
            j1x = ky5D;
            this.xu9l(K1x, j1x)
        }
        return j1x
    }
    ;
    nh5m.UU6O = function(K1x) {
        var j1x = this.rD7w(K1x);
        if (j1x != null)
            return j1x;
        j1x = this.cDP9G(K1x);
        if (j1x != null)
            this.qb6V(K1x, j1x);
        return j1x
    }
    ;
    nh5m.xu9l = function(K1x, D1x) {
        this.cDO9F(K1x, D1x);
        this.qb6V(K1x, D1x)
    }
    ;
    nh5m.bRn0x = function(K1x) {
        if (K1x != null) {
            delete this.S1x[K1x];
            if (!!v1x.MJ3x)
                v1x.MJ3x(K1x);
            return
        }
        k1x.eI3x(this.S1x, function(p1x, K1x) {
            if (K1x == nk5p + "-l")
                return;
            this.bRn0x(K1x)
        }, this)
    }
    ;
    nh5m.cET9K = function() {
        this.bRn0x();
        return this
    }
    ;
    nh5m.cEU9L = function(K1x) {
        var j1x = this.S1x[nk5p + "-l"];
        delete j1x[K1x]
    }
    ;
    nh5m.bgW0x = function(K1x) {
        var j1x = this.S1x[nk5p + "-l"]
          , bf1x = fA3x.slice.call(arguments, 1);
        k1x.bd1x(j1x[K1x], function(cA1x) {
            try {
                cA1x.apply(null, bf1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j1x[K1x]
    }
    ;
    nh5m.bgY0x = function(K1x, cA1x) {
        cA1x = cA1x || br1x;
        var i1x = this.S1x[nk5p + "-l"][K1x];
        if (!i1x) {
            i1x = [cA1x];
            this.S1x[nk5p + "-l"][K1x] = i1x;
            return !1
        }
        i1x.push(cA1x);
        return !0
    }
    ;
    nh5m.cDJ9A = function(i1x, bi1x, gd3x) {
        if (!i1x)
            return !1;
        bi1x = parseInt(bi1x) || 0;
        gd3x = parseInt(gd3x) || 0;
        if (!gd3x) {
            if (!i1x.loaded)
                return !1;
            gd3x = i1x.length
        }
        if (!!i1x.loaded)
            gd3x = Math.min(gd3x, i1x.length - bi1x);
        for (var i = 0; i < gd3x; i++)
            if (!i1x[bi1x + i])
                return !1;
        return !0
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, k1x = c0x("nej.u"), O1x = c0x("nej.ut"), b0x, L1x;
    if (!!O1x.UR6L)
        return;
    O1x.UR6L = NEJ.C();
    b0x = O1x.UR6L.N1x(O1x.bgB0x);
    L1x = O1x.UR6L.cs1x;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.xb9S = e1x.key || "id";
        this.bk1x = e1x.data || bb1x;
        this.cDI9z = !!e1x.autogc;
        this.cDG9x(e1x.id)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (!!this.eh3x) {
            this.bSu0x()
        }
    }
    ;
    b0x.cDG9x = function(C1x) {
        var R1x;
        if (!!C1x) {
            R1x = this.S1x[C1x];
            if (!R1x) {
                R1x = {};
                this.S1x[C1x] = R1x
            }
        }
        R1x = R1x || this.S1x;
        R1x.hash = R1x.hash || {};
        this.UQ6K = R1x
    }
    ;
    b0x.bSu0x = function() {
        this.eh3x = window.clearTimeout(this.eh3x);
        var bz1x = {};
        k1x.eI3x(this.UQ6K, function(i1x, K1x) {
            if (K1x == "hash")
                return;
            if (!k1x.eL3x(i1x))
                return;
            k1x.bd1x(i1x, function(p1x) {
                if (!p1x)
                    return;
                bz1x[p1x[this.xb9S]] = !0
            }, this)
        }, this);
        k1x.eI3x(this.bdE9v(), function(p1x, C1x, dR2x) {
            if (!bz1x[C1x]) {
                delete dR2x[C1x]
            }
        })
    }
    ;
    b0x.cDF9w = function() {
        if (!!this.eh3x) {
            this.eh3x = window.clearTimeout(this.eh3x)
        }
        this.eh3x = window.setTimeout(this.bSu0x.f1x(this), 150)
    }
    ;
    b0x.Dk0x = function(p1x, bdw9n) {
        p1x = this.bSN0x(p1x, bdw9n) || p1x;
        if (!p1x)
            return null;
        var K1x = p1x[this.xb9S];
        if (K1x != null) {
            var hY4c = this.bdE9v()[K1x];
            if (!!hY4c)
                p1x = NEJ.X(hY4c, p1x);
            this.bdE9v()[K1x] = p1x
        }
        delete p1x.bSQ0x;
        return p1x
    }
    ;
    b0x.bSN0x = br1x;
    b0x.bhj0x = function(K1x, p1x) {
        if (!p1x)
            return;
        if (!k1x.eL3x(p1x)) {
            var i1x = this.hF4J(K1x)
              , p1x = this.Dk0x(p1x, K1x);
            if (!!p1x)
                i1x.unshift(p1x);
            return
        }
        k1x.nz5E(p1x, this.bhj0x.f1x(this, K1x))
    }
    ;
    b0x.UH6B = function(K1x, cB1x) {
        var i1x = this.hF4J(K1x);
        i1x.length = Math.max(i1x.length, cB1x);
        this.bhk0x(K1x);
        return this
    }
    ;
    b0x.kA5F = function(K1x) {
        return this.hF4J(K1x).length
    }
    ;
    b0x.bhk0x = function(K1x, oV6P) {
        this.hF4J(K1x).loaded = oV6P != !1;
        return this
    }
    ;
    b0x.bdp9g = function(K1x) {
        return !!this.hF4J(K1x).loaded
    }
    ;
    b0x.vm8e = function(K1x, i1x) {
        this.vA8s(K1x);
        this.bhm0x({
            key: K1x,
            offset: 0,
            limit: i1x.length + 1
        }, {
            list: i1x,
            total: i1x.length
        })
    }
    ;
    b0x.hF4J = function() {
        var DU1x = function(K1x) {
            return (K1x || "") + (!K1x ? "" : "-") + "list"
        };
        return function(K1x) {
            var K1x = DU1x(K1x)
              , i1x = this.UQ6K[K1x];
            if (!i1x) {
                i1x = [];
                this.UQ6K[K1x] = i1x
            }
            return i1x
        }
    }();
    b0x.bdE9v = function() {
        var dR2x = this.UQ6K.hash;
        if (!dR2x) {
            dR2x = {};
            this.UQ6K.hash = dR2x
        }
        return dR2x
    }
    ;
    b0x.bho0x = function() {
        var DU1x = function(e1x) {
            return "r-" + e1x.key
        };
        return function(e1x) {
            var iP4T = NEJ.X({}, e1x)
              , nO6I = DU1x(iP4T);
            if (!this.bgY0x(nO6I, this.z1x.f1x(this))) {
                iP4T.rkey = nO6I;
                iP4T.onload = this.cDE9v.f1x(this, iP4T);
                this.z1x("dopullrefresh", iP4T)
            }
            return this
        }
    }();
    b0x.cDE9v = function(e1x, i1x) {
        this.bhj0x(e1x.key, i1x);
        this.bgW0x(e1x.rkey, "onpullrefresh", e1x)
    }
    ;
    b0x.lP5U = function() {
        var DU1x = function(e1x) {
            return "r-" + e1x.key + "-" + e1x.offset + "-" + e1x.limit
        };
        return function(e1x) {
            e1x = e1x || bb1x;
            var iP4T = {
                key: "" + e1x.key || "",
                ext: e1x.ext || null,
                data: e1x.data || null,
                offset: parseInt(e1x.offset) || 0,
                limit: parseInt(e1x.limit) || 0
            }
              , i1x = this.hF4J(iP4T.key);
            if (this.cDJ9A(i1x, iP4T.offset, iP4T.limit)) {
                this.z1x("onlistload", iP4T);
                return this
            }
            var nO6I = DU1x(iP4T);
            if (!this.bgY0x(nO6I, this.z1x.f1x(this))) {
                iP4T.rkey = nO6I;
                iP4T.onload = this.bhm0x.f1x(this, iP4T);
                this.z1x("doloadlist", iP4T)
            }
            return this
        }
    }();
    b0x.bhm0x = function() {
        var DR1x = function(p1x, r1x, i1x) {
            if (!!p1x) {
                return !0
            }
            i1x.splice(r1x, 1)
        };
        return function(e1x, m1x) {
            e1x = e1x || bb1x;
            var K1x = e1x.key
              , bi1x = e1x.offset
              , bVB1x = this.hF4J(K1x);
            var i1x = m1x || [];
            if (!k1x.eL3x(i1x)) {
                i1x = m1x.result || m1x.list || [];
                var cB1x = parseInt(m1x.total);
                if (!isNaN(cB1x) || cB1x > i1x.length) {
                    this.UH6B(K1x, cB1x)
                }
            }
            k1x.bd1x(i1x, function(p1x, r1x) {
                bVB1x[bi1x + r1x] = this.Dk0x(p1x, K1x)
            }, this);
            if (i1x.length < e1x.limit) {
                this.bhk0x(K1x);
                k1x.nz5E(bVB1x, DR1x)
            }
            this.bgW0x(e1x.rkey, "onlistload", e1x)
        }
    }();
    b0x.vA8s = function() {
        var DR1x = function(p1x, r1x, i1x) {
            i1x.splice(r1x, 1)
        };
        return function(K1x) {
            var i1x = this.hF4J(K1x);
            k1x.nz5E(i1x, DR1x);
            this.bhk0x(K1x, !1);
            if (this.cDI9z) {
                this.cDF9w()
            }
            return this
        }
    }();
    b0x.bVG1x = function(p1x, bdw9n) {
        return !p1x.bSQ0x
    }
    ;
    b0x.eJ3x = function(C1x) {
        return this.bdE9v()[C1x]
    }
    ;
    b0x.cEV9M = function(C1x) {
        var p1x = this.eJ3x(C1x);
        if (!!p1x)
            p1x.bSQ0x = !0
    }
    ;
    b0x.bda9R = function() {
        var DU1x = function(e1x) {
            return "r-" + e1x.key + "-" + e1x.id
        };
        return function(e1x) {
            e1x = e1x || bb1x;
            var C1x = e1x[this.xb9S]
              , iP4T = {
                id: C1x,
                ext: e1x.ext,
                data: e1x.data || {},
                key: "" + e1x.key || ""
            };
            p1x = this.eJ3x(C1x);
            iP4T.data[this.xb9S] = C1x;
            if (!!p1x && this.bVG1x(p1x, iP4T.key)) {
                this.z1x("onitemload", iP4T);
                return this
            }
            var nO6I = DU1x(iP4T);
            if (!this.bgY0x(nO6I, this.z1x.f1x(this))) {
                iP4T.rkey = nO6I;
                iP4T.onload = this.cDB9s.f1x(this, iP4T);
                this.z1x("doloaditem", iP4T)
            }
            return this
        }
    }();
    b0x.cDB9s = function(e1x, p1x) {
        e1x = e1x || bb1x;
        this.Dk0x(p1x, e1x.key);
        this.bgW0x(e1x.rkey, "onitemload", e1x)
    }
    ;
    b0x.jK4O = function(e1x) {
        e1x = NEJ.X({}, e1x);
        e1x.onload = this.Ak0x.f1x(this, e1x);
        this.z1x("doadditem", e1x)
    }
    ;
    b0x.Ak0x = function(e1x, p1x) {
        var K1x = e1x.key;
        p1x = this.Dk0x(p1x, K1x);
        if (!!p1x) {
            var eZ3x = 0
              , i1x = this.hF4J(K1x);
            if (!e1x.push) {
                eZ3x = -1;
                var bi1x = e1x.offset || 0;
                i1x.splice(bi1x, 0, p1x)
            } else if (i1x.loaded) {
                eZ3x = 1;
                i1x.push(p1x)
            } else {
                i1x.length++
            }
        }
        var d1x = {
            key: K1x,
            flag: eZ3x,
            data: p1x,
            action: "add",
            ext: e1x.ext
        };
        this.z1x("onitemadd", d1x);
        return d1x
    }
    ;
    b0x.Mx3x = function(e1x) {
        e1x = NEJ.X({}, e1x);
        e1x.onload = this.bhT0x.f1x(this, e1x);
        this.z1x("dodeleteitem", e1x)
    }
    ;
    b0x.bhT0x = function(e1x, bzq5v) {
        var p1x, K1x = e1x.key;
        if (!!bzq5v) {
            p1x = this.eJ3x(e1x.id) || null;
            var C1x = e1x.id
              , cDA9r = this.xb9S
              , i1x = this.hF4J(K1x)
              , r1x = k1x.di2x(i1x, function(hY4c) {
                return !!hY4c && hY4c[cDA9r] == C1x
            });
            if (r1x >= 0)
                i1x.splice(r1x, 1)
        }
        var d1x = {
            key: K1x,
            data: p1x,
            action: "delete",
            ext: e1x.ext
        };
        this.z1x("onitemdelete", d1x);
        return d1x
    }
    ;
    b0x.bcN9E = function(e1x) {
        e1x = NEJ.X({}, e1x);
        e1x.onload = this.cDy9p.f1x(this, e1x);
        this.z1x("doupdateitem", e1x)
    }
    ;
    b0x.cDy9p = function(e1x, p1x) {
        var K1x = e1x.key;
        if (!!p1x)
            p1x = this.Dk0x(p1x, K1x);
        var d1x = {
            key: K1x,
            data: p1x,
            action: "update",
            ext: e1x.ext
        };
        this.z1x("onitemupdate", d1x);
        return d1x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, k1x = c0x("nej.u"), O1x = c0x("nej.ut"), b0x;
    if (!!O1x.bhZ1x)
        return;
    O1x.bhZ1x = NEJ.C();
    b0x = O1x.bhZ1x.N1x(O1x.UR6L);
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.bpw2x({
            doloadlist: this.bcI9z.f1x(this),
            doloaditem: this.bif1x.f1x(this),
            doadditem: this.bzH5M.f1x(this),
            dodeleteitem: this.bcG9x.f1x(this),
            doupdateitem: this.bcF9w.f1x(this),
            dopullrefresh: this.bzX5c.f1x(this)
        })
    }
    ;
    b0x.bcI9z = br1x;
    b0x.bzX5c = br1x;
    b0x.bif1x = br1x;
    b0x.bzH5M = br1x;
    b0x.bcG9x = br1x;
    b0x.bcF9w = br1x
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, k1x = c0x("nej.u"), h1x = c0x("nej.v"), v1x = c0x("nej.j"), I1x = c0x("nej.ut"), l1x = c0x("nm.x"), q1x = c0x("nm.d"), b0x, L1x;
    q1x.hJ4N = NEJ.C();
    b0x = q1x.hJ4N.N1x(I1x.bhZ1x);
    b0x.cq1x = function() {
        var Df0x = location.protocol + "//" + location.host;
        var cDx9o = function(bs1x, j1x) {
            var bz1x = {
                conf: {},
                data: {},
                urls: []
            };
            k1x.bd1x(bs1x, function(K1x, r1x, i1x) {
                var bh1x = q1x.B1x(K1x);
                if (!bh1x)
                    return;
                var bik1x = bAu5z(bh1x.url, j1x[K1x]);
                bz1x.urls.push(bik1x);
                bz1x.conf[bik1x] = bh1x;
                bz1x.data[bik1x] = JSON.stringify(j1x[K1x] == null ? "" : j1x[K1x])
            });
            return bz1x
        };
        var bAu5z = function(X1x, j1x) {
            return X1x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j1x[$2] || $1
            })
        };
        var bAz5E = function(bh1x, e1x, d1x) {
            h1x.z1x(window, "requesterror", d1x);
            if (!!d1x.stopped)
                return;
            var De0x = bh1x.onerror || e1x.onerror;
            if (k1x.fG3x(De0x)) {
                this.z1x(De0x, d1x, e1x)
            } else {
                (De0x || br1x).call(this, d1x, e1x)
            }
            var d1x = {
                result: d1x,
                option: e1x
            };
            this.z1x("onerror", d1x);
            if (!d1x.stopped)
                (bh1x.onmessage || br1x).call(this, d1x.result.code, d1x.result)
        };
        var bAT5Y = function(Q1x, bh1x, e1x) {
            var m1x = Q1x;
            if (k1x.gF3x(bh1x.format)) {
                m1x = bh1x.format.call(this, Q1x, e1x)
            }
            return m1x
        };
        var yw9n = function(Q1x, bh1x, e1x, uA8s) {
            if (k1x.gF3x(bh1x.beforeload)) {
                bh1x.beforeload.call(this, Q1x, e1x, bh1x)
            }
            if (Q1x && Q1x.code != null && Q1x.code != 200) {
                bAz5E.call(this, bh1x, e1x, {
                    key: e1x.key,
                    code: Q1x.code,
                    message: Q1x.message || "",
                    captchaId: Q1x.captchaId,
                    ext: Q1x
                });
                return
            }
            var m1x = Q1x;
            if (!uA8s) {
                m1x = bAT5Y.call(this, Q1x, bh1x, e1x)
            } else if (k1x.gF3x(bh1x.format)) {
                var bil1x = [];
                k1x.bd1x(uA8s.urls, function(X1x) {
                    bil1x.push(bAT5Y.call(this, Q1x[X1x], uA8s.conf[X1x], e1x))
                }, this);
                bil1x.push(e1x);
                m1x = bh1x.format.apply(this, bil1x)
            }
            var ob6V = bh1x.onload || e1x.onload
              , bBl5q = bh1x.finaly || e1x.finaly || br1x;
            if (k1x.fG3x(ob6V)) {
                bBl5q.call(this, this.z1x(ob6V, m1x), e1x)
            } else {
                bBl5q.call(this, (ob6V || br1x).call(this, m1x), e1x)
            }
        };
        var Cq0x = function(bh1x, e1x, bZ1x) {
            bAz5E.call(this, bh1x, e1x, {
                key: e1x.key,
                code: bZ1x.code || -1,
                message: bZ1x.message || ""
            })
        };
        return function(bh1x, e1x) {
            if (k1x.fG3x(bh1x)) {
                bh1x = q1x.B1x(bh1x)
            }
            delete e1x.value;
            (bh1x.filter || br1x).call(this, e1x, bh1x);
            var Q1x = e1x.value;
            if (!!Q1x) {
                yw9n.call(this, Q1x, bh1x, e1x);
                return
            }
            var X1x, j1x = e1x.data || bb1x, Aj0x = {
                cookie: !0,
                type: bh1x.rtype || "json",
                method: bh1x.type || "POST",
                onerror: Cq0x.f1x(this, bh1x, e1x),
                noescape: bh1x.noescape
            };
            if (k1x.eL3x(bh1x.url)) {
                var uA8s = cDx9o(bh1x.url, j1x);
                X1x = Df0x + "/api/batch";
                Aj0x.data = k1x.cF2x(uA8s.data);
                Aj0x.onload = yw9n.ew3x(this, bh1x, e1x, uA8s);
                Aj0x.headers = {
                    "batch-method": "POST"
                };
                delete uA8s.data
            } else {
                var kw5B = bh1x.url.indexOf(":") < 0 ? Df0x : "";
                X1x = bAu5z(kw5B + bh1x.url, j1x);
                Aj0x.data = k1x.cF2x(e1x.data);
                Aj0x.onload = yw9n.ew3x(this, bh1x, e1x)
            }
            if (Aj0x.method == "GET")
                Aj0x.query = Aj0x.data;
            return v1x.bm1x(X1x, Aj0x)
        }
    }();
    b0x.EP1x = function() {
        var gH3x = /^get|list|pull$/i;
        return function(bBz5E, e1x) {
            var K1x = e1x.key
              , bh1x = q1x.B1x(K1x.split("-")[0] + "-" + bBz5E);
            if (gH3x.test(bBz5E) && K1x.indexOf("post-") < 0)
                bh1x.type = "GET";
            this.cq1x(bh1x, e1x)
        }
    }();
    b0x.cEW9N = function(K1x, i1x) {
        var cB1x = i1x.length;
        this.bhm0x({
            key: K1x,
            offset: 0,
            limit: cB1x + 1
        }, {
            list: i1x,
            total: cB1x
        })
    }
    ;
    b0x.bcI9z = function(e1x) {
        this.EP1x("list", e1x)
    }
    ;
    b0x.bif1x = function(e1x) {
        this.EP1x("get", e1x)
    }
    ;
    b0x.bzX5c = function(e1x) {
        this.EP1x("pull", e1x)
    }
    ;
    b0x.bzH5M = function(e1x) {
        this.EP1x("add", e1x)
    }
    ;
    b0x.bcG9x = function(e1x) {
        this.EP1x("del", e1x)
    }
    ;
    b0x.bcF9w = function(e1x) {
        this.EP1x("update", e1x)
    }
    ;
    b0x.cDs9j = function(p1x) {
        this.Dk0x(p1x)
    }
    ;
    I1x.fI3x.A1x({
        element: window,
        event: "requesterror"
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h1x = c0x("nej.v"), I1x = c0x("nej.ut"), q1x = c0x("nm.d"), bim1x = {}, b0x, L1x;
    var vj8b = function(m1x, e1x) {
        m1x.conf = e1x.conf;
        return m1x
    };
    q1x.fq3x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q1x, e1x) {
                return vj8b({
                    mv: Q1x
                }, e1x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m1x, e1x) {
                if (!!m1x.songs && m1x.songs.length > 0)
                    m1x.song = m1x.songs[0];
                else
                    m1x.song = bim1x;
                delete m1x.songs;
                return vj8b(m1x, e1x)
            },
            filter: function(e1x) {
                e1x.data.ids = "[" + e1x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: vj8b
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: vj8b
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m1x, e1x) {
                m1x.playlist = m1x.result;
                delete m1x.result;
                return vj8b(m1x, e1x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: vj8b
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: vj8b
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: vj8b
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e1x) {
                var i1x = e1x.data.id.split("-");
                e1x.data.radioId = i1x[0];
                e1x.data.asc = i1x[1] == 2;
                e1x.data.limit = 1e3;
                delete e1x.data.id
            },
            format: function(Q1x, e1x) {
                var cDr9i = {
                    id: e1x.data.radioId,
                    programs: Q1x.programs
                };
                return vj8b({
                    djradio: cDr9i
                }, e1x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: vj8b
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e1x) {
                e1x.data.lv = 0;
                e1x.data.tv = 0
            },
            format: function(m1x, e1x) {
                var xo9f = {
                    lyric: "",
                    nolyric: true
                };
                if (m1x.code == 200 && m1x.lrc && m1x.lrc.lyric) {
                    xo9f.lyric = m1x.lrc.lyric;
                    xo9f.nolyric = false
                } else {
                    xo9f.nolyric = true
                }
                return vj8b({
                    lyric: xo9f
                }, e1x)
            }
        }
    });
    q1x.xn9e = NEJ.C();
    b0x = q1x.xn9e.N1x(q1x.hJ4N);
    b0x.cDp9g = function(u1x, cW2x) {
        return this.rD7w(this.bci9Z(u1x, cW2x))
    }
    ;
    b0x.TY6S = function(u1x, cW2x, e1x) {
        e1x = e1x || {};
        var j1x = this.rD7w(this.bci9Z(u1x, cW2x));
        if (j1x && (u1x != 13 && u1x != 19 || e1x.conf && e1x.conf.useCache)) {
            this.z1x("onresourceload", u1x, cW2x, j1x, e1x.conf);
            return
        }
        e1x.data = {
            id: cW2x
        };
        e1x.onload = this.cDo9f.f1x(this, u1x, cW2x);
        e1x.onerror = this.cDn9e.f1x(this, u1x, cW2x);
        this.cq1x("res-" + this.Da0x(u1x) + "-get", e1x)
    }
    ;
    b0x.cDo9f = function(u1x, cW2x, m1x) {
        var j1x = m1x[this.Da0x(u1x)];
        this.qb6V(this.bci9Z(u1x, cW2x), j1x);
        this.z1x("onresourceload", u1x, cW2x, j1x, m1x.conf)
    }
    ;
    b0x.cDn9e = function(u1x, cW2x, m1x, e1x) {
        if (m1x.code != 404) {
            this.z1x("onresourceerror", u1x, cW2x, m1x.code);
            return
        }
        this.qb6V(this.bci9Z(u1x, cW2x), bim1x);
        this.z1x("onresourceload", u1x, cW2x, bim1x, e1x.conf)
    }
    ;
    b0x.cEX9O = function(u1x, e1x) {
        this.cq1x("res-" + this.Da0x(u1x) + "-play", e1x)
    }
    ;
    b0x.bci9Z = function(u1x, cW2x) {
        return "res-" + this.Da0x(u1x) + "-" + cW2x
    }
    ;
    b0x.Da0x = function(u1x) {
        var bz1x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz1x[u1x]
    }
    ;
    q1x.xn9e.Mo3x = function(u1x, cW2x) {
        if (!this.fk3x)
            this.fk3x = q1x.xn9e.A1x({});
        return this.fk3x.cDp9g(u1x, cW2x)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), bix1x = /^[1-9][0-9]*$/, b0x, L1x;
    var LOCAL_LOG_KEY = "local-log";
    q1x.fq3x({
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
    q1x.hS4W = NEJ.C();
    b0x = q1x.hS4W.N1x(q1x.hJ4N);
    b0x.eU3x = function(U1x, bh1x) {
        if (!U1x || !bh1x)
            return;
        if (k1x.fG3x(bh1x)) {
            try {
                bh1x = JSON.parse(bh1x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a9j)
                }
            }
        }
        if (!k1x.lQ5V(bh1x))
            return;
        this.cq1x("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: U1x,
                    json: bh1x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U1x + ", json=" + JSON.stringify(bh1x))
        }
    }
    ;
    b0x.bbR9I = function(ok6e) {
        if (!k1x.eL3x(ok6e))
            return;
        this.cq1x("bi-batch-log", {
            data: {
                logs: JSON.stringify(ok6e)
            }
        })
    }
    ;
    b0x.bCV6P = function(bh1x) {
        if (!bh1x || !bh1x.type || !bh1x.rid)
            return;
        var ol6f = bh1x.type;
        if (bix1x.test(ol6f)) {
            ol6f = this.Da0x(ol6f)
        }
        if (!ol6f)
            return;
        if (ol6f == "playlist")
            ol6f = "list";
        this.eU3x("search", {
            type: ol6f,
            id: bh1x.rid || null,
            keyword: bh1x.keyword || null
        })
    }
    ;
    b0x.TS6M = function() {
        var cDi9Z = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bh1x) {
            if (!bh1x || !bh1x.type || !bh1x.rid)
                return;
            if (bh1x.play === undefined)
                bh1x.play = true;
            var ol6f = bh1x.type;
            if (bix1x.test(ol6f)) {
                ol6f = this.Da0x(ol6f)
            }
            if (!ol6f)
                return;
            if (ol6f == "playlist")
                ol6f = "list";
            var Q1x = {
                id: bh1x.rid,
                type: ol6f
            };
            if (ol6f == "song" && bh1x.source) {
                Q1x.source = this.bDv6p(bh1x.source);
                if (!!bh1x.sourceid)
                    Q1x.sourceid = bh1x.sourceid
            }
            this.eU3x(!bh1x.play ? "addto" : "play", Q1x);
            if (ol6f == "song" && bh1x.hash && bh1x.hash.match(cDi9Z)) {
                this.eU3x(!bh1x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b0x.biD1x = function(C1x, bA1x, ee3x, Gd1x) {
        var Q1x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cDf9W = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q1x.id = C1x;
        Q1x.time = Math.round(bA1x);
        Q1x.end = k1x.fG3x(Gd1x) ? Gd1x : cDf9W[Gd1x] || "";
        if (ee3x && ee3x.fid) {
            Q1x.source = this.bDv6p(ee3x.fid);
            Q1x.sourceId = ee3x.fdata
        }
        this.eU3x("play", Q1x)
    }
    ;
    b0x.bDI6C = function(u1x, cW2x) {
        if (!u1x || !cW2x)
            return;
        if (bix1x.test(u1x))
            u1x = this.Da0x(u1x);
        if (u1x != "playlist" && u1x != "dj")
            return;
        var bh1x = q1x.B1x("plus-" + u1x + "-count");
        if (!bh1x)
            return !1;
        this.cq1x(bh1x, {
            data: {
                id: cW2x
            }
        });
        var R1x = this.lB5G("play-hist-" + u1x, []);
        if (k1x.di2x(R1x, cW2x) < 0) {
            R1x.push(cW2x);
            return !0
        }
        return !1
    }
    ;
    b0x.Da0x = function(u1x) {
        var bz1x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz1x[u1x]
    }
    ;
    b0x.bDv6p = function(Ml3x) {
        var bz1x = {
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
        return bz1x[Ml3x]
    }
    ;
    b0x.bDW6Q = function(hi4m) {
        var ok6e = this.Hk1x(LOCAL_LOG_KEY, []);
        ok6e.unshift(hi4m);
        if (ok6e.length > 200) {
            ok6e.length = 200
        }
        this.xu9l(LOCAL_LOG_KEY, ok6e)
    }
    ;
    b0x.cDd9U = function() {
        return this.UU6O(LOCAL_LOG_KEY)
    }
    ;
    b0x.eo3x = function(Q1x) {
        this.eU3x("play", Q1x)
    }
    ;
    var bEr6l = q1x.hS4W.gg3x();
    l1x.sF7y = function() {
        bEr6l.eU3x.apply(bEr6l, arguments)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , h1x = c0x("nej.v")
      , v1x = c0x("nej.j")
      , I1x = c0x("nej.ut")
      , a9j = c0x("nej.e")
      , k1x = c0x("nej.u")
      , n1x = c0x("nm.l")
      , l1x = c0x("nm.x")
      , q1x = c0x("nm.d");
    var FullscreenApi = l1x.FL1x || {};
    if (!q1x.xn9e)
        return;
    var R1x = q1x.xn9e.A1x({
        onresourceload: cDb9S
    });
    var vi8a = q1x.hS4W.gg3x();
    function cDb9S(u1x, cW2x, j1x, bh1x) {
        var i1x = [];
        switch (parseInt(u1x)) {
        case 2:
            i1x = j1x;
            break;
        case 13:
            i1x = j1x.tracks;
            break;
        case 18:
            i1x.push(j1x);
            break;
        case 19:
            i1x = j1x.songs;
            break;
        case 21:
            if (j1x.mp && j1x.mp.fee && j1x.mp.pl <= 0) {
                l1x.TI6C(j1x.data.id, j1x.mp.fee);
                return
            }
            break
        }
        if (l1x.Mj3x(i1x, true, null, u1x == 19 ? {
            source: "album",
            sourceid: cW2x
        } : null) == 0) {
            return
        }
        l1x.fs3x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bh1x.message
        })
    }
    function cDa9R(d1x, nL6F, yU9L, ez3x) {
        ez3x = ez3x || {};
        if (d1x.action == "ok") {
            if (yU9L) {
                location.dispatch2("/payfee?songId=" + yU9L)
            } else {
                location.dispatch2("/payfee?fee=" + nL6F || 1)
            }
            vi8a.eU3x("click", {
                type: "tobuyvip",
                name: "box",
                source: ez3x.source || "song",
                sourceid: ez3x.sourceid || yU9L || 0
            })
        } else if (d1x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yU9L);
            vi8a.eU3x("click", {
                type: "tobuyone",
                name: "box",
                source: ez3x.source || "song",
                sourceid: ez3x.sourceid || yU9L || 0
            })
        }
    }
    function TG6A(bG1x) {
        l1x.fs3x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bG1x,
            btntxt: "知道了"
        })
    }
    function TE6y(bG1x, Q1x) {
        TG6A((Q1x || bb1x).toast || bG1x)
    }
    l1x.iz4D = function(bG1x, C1x, u1x, cCY9P, bj1x) {
        bG1x = bG1x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cCY9P && bj1x && bj1x.privilege && bj1x.privilege.toast) {
            v1x.bm1x("/api/song/toast", {
                query: {
                    id: bj1x.id
                },
                type: "json",
                onload: TE6y.f1x(this, bG1x),
                onerror: TE6y.f1x(this, bG1x)
            })
        } else if (C1x && u1x) {
            R1x.TY6S(u1x, C1x, {
                conf: {
                    message: bG1x,
                    useCache: u1x != 18
                }
            })
        } else {
            TG6A(bG1x)
        }
    }
    ;
    l1x.vJ8B = function(nL6F, yU9L, u1x, ez3x, nj5o) {
        var bR1x, oP6J = "m-popup-info", biR1x = "单首购买", biT1x = "马上去开通", cV2x = "唱片公司要求，当前歌曲须付费使用。", bFp6j = true;
        try {
            bR1x = top.api.feeMessage || {}
        } catch (e) {
            bR1x = {}
        }
        if (nL6F == 1 || nL6F == 8 || nL6F == 16) {
            if (u1x == "song") {
                oP6J = "m-popup-song-buy";
                cV2x = bR1x["vip2"] || cV2x;
                biT1x = bR1x["vip2button"] || "包月购买";
                biR1x = bR1x["vip2link"] || biR1x;
                if (nj5o && nj5o.flag !== undefined) {
                    var bs1x = nj5o.flag.toString(2).split("");
                    if (parseInt(bs1x.pop(), 10) == 1) {
                        bFp6j = false
                    }
                }
            } else {
                cV2x = bR1x["vip"] || cV2x
            }
        } else if (nL6F == 4) {
            cV2x = bR1x["album"] || cV2x;
            biT1x = "立即订购"
        } else {
            cV2x = bR1x["unknow"] || cV2x
        }
        l1x.kf4j({
            clazz: "m-layer-w5",
            html: a9j.cc1x(oP6J, {
                songTxt: biR1x,
                tip: cV2x,
                oktext: biT1x,
                cctext: "以后再说",
                showSongText: bFp6j
            }),
            onaction: cDa9R.ew3x(null, nL6F, yU9L, ez3x)
        })
    }
    ;
    l1x.bFq6k = function(hC4G, gk3x) {
        l1x.ho4s({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u1x) {
                if (u1x == "ok") {
                    l1x.MQ3x({
                        id: hC4G,
                        type: gk3x
                    })
                }
            }
        })
    }
    ;
    l1x.TI6C = function(ks5x, nL6F) {
        var bR1x, cV2x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR1x = top.api.feeMessage || {}
        } catch (e) {
            bR1x = {}
        }
        if (nL6F == 1 || nL6F == 8) {
            cV2x = bR1x["vip"] || cV2x
        } else if (nL6F == 4) {
            cV2x = bR1x["album"] || cV2x
        } else {
            cV2x = bR1x["unknow"] || cV2x
        }
        return l1x.kf4j({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a9j.cc1x("m-popup-info", {
                tip: cV2x,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d1x) {
                if (d1x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + ks5x);
                    vi8a.eU3x("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: ks5x || 0
                    })
                }
            }
        })
    }
    ;
    l1x.Mj3x = function() {
        function compareFee(cCX9O, cCU9L) {
            var bz1x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz1x[cCX9O] || 0) - (bz1x[cCU9L] || 0)
        }
        return function(i1x, cV2x, sA7t, ez3x) {
            sA7t = sA7t || {};
            var yA9r = []
              , Mi3x = {}
              , bFN6H = 0
              , bFR6L = 0
              , Mh3x = null;
            if (!i1x || !i1x.length)
                return yA9r;
            k1x.bd1x(i1x, function(bj1x) {
                var fv3x = l1x.pJ6D(bj1x);
                if (fv3x == 0) {
                    yA9r.push(bj1x)
                } else if (fv3x == 10) {
                    if (bj1x.privilege) {
                        bj1x.fee = bj1x.privilege.fee
                    }
                    if (compareFee(bj1x.fee, Mi3x.fee) > 0) {
                        Mi3x = bj1x
                    }
                } else if (fv3x == 11) {
                    ++bFN6H;
                    if (!sA7t.play)
                        yA9r.push(bj1x)
                } else if (fv3x == 1e3) {
                    ++bFR6L;
                    if (!sA7t.download)
                        yA9r.push(bj1x)
                } else if (fv3x == 100) {
                    Mh3x = bj1x
                }
            });
            if (yA9r.length == 0 && cV2x) {
                if (bFN6H == i1x.length) {
                    var sP7I = i1x[0].privilege || {};
                    if (sP7I.payed) {
                        l1x.iz4D("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l1x.vJ8B(sP7I.fee, null, null, ez3x)
                    }
                } else if (bFR6L == i1x.length) {
                    l1x.iz4D("因版权方要求，该歌曲不支持下载")
                } else if (Mi3x.id) {
                    l1x.vJ8B(Mi3x.fee, Mi3x.id, null, ez3x, Mi3x.privilege)
                } else {
                    if (Mh3x && i1x.length == 1 && Mh3x.privilege && Mh3x.privilege.st < 0 && Mh3x.privilege.toast) {
                        l1x.iz4D(null, null, null, true, Mh3x)
                    } else {
                        l1x.iz4D()
                    }
                }
            }
            return yA9r
        }
    }();
    l1x.pJ6D = function(bj1x) {
        if (!bj1x)
            return 0;
        var fv3x = bj1x.privilege;
        if (bj1x.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (fv3x) {
            if (fv3x.st != null && fv3x.st < 0) {
                return 100
            }
            if (fv3x.fee > 0 && fv3x.fee != 8 && fv3x.payed == 0 && fv3x.pl <= 0)
                return 10;
            if (fv3x.fee == 16)
                return 11;
            if ((fv3x.fee == 0 || fv3x.payed) && fv3x.pl > 0 && fv3x.dl == 0)
                return 1e3;
            if (fv3x.pl == 0 && fv3x.dl == 0)
                return 100;
            return 0
        } else {
            var eA3x = bj1x.status != null ? bj1x.status : bj1x.st != null ? bj1x.st : 0;
            if (bj1x.status >= 0)
                return 0;
            if (bj1x.fee > 0)
                return 10;
            return 100
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, fA3x = NEJ.R, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), w1x = c0x("nm.w"), b0x;
    if (!!w1x.bGi6c)
        return;
    var cl1x = ~[];
    cl1x = {
        bGl6f: ++cl1x,
        cCS9J: (![] + "")[cl1x],
        ko5t: ++cl1x,
        Mf3x: (![] + "")[cl1x],
        bbl9c: (cl1x[cl1x] + "")[cl1x],
        bGJ6D: ++cl1x,
        cEZ9Q: ({} + "")[cl1x],
        cCP9G: (cl1x[cl1x] + "")[cl1x],
        cCO9F: (![] + "")[cl1x],
        Tx6r: ++cl1x,
        bbg9X: (!"" + "")[cl1x],
        cFa9R: ++cl1x,
        CO0x: ++cl1x,
        bHl7e: ({} + "")[cl1x],
        xh9Y: ++cl1x,
        cCL9C: ++cl1x,
        cFb9S: ++cl1x,
        cFc9T: ++cl1x
    };
    cl1x.Mc3x = (cl1x.Mc3x = cl1x + "")[cl1x.CO0x] + (cl1x.Mb3x = cl1x.Mc3x[cl1x.ko5t]) + (cl1x.baN8F = (cl1x.DF0x + "")[cl1x.ko5t]) + (!cl1x + "")[cl1x.Tx6r] + (cl1x.DG0x = cl1x.Mc3x[cl1x.xh9Y]) + (cl1x.DF0x = (!"" + "")[cl1x.ko5t]) + (cCG9x = (!"" + "")[cl1x.bGJ6D]) + cl1x.Mc3x[cl1x.CO0x] + cl1x.DG0x + cl1x.Mb3x + cl1x.DF0x;
    cl1x.baN8F = cl1x.DF0x + (!"" + "")[cl1x.Tx6r] + cl1x.DG0x + cCG9x + cl1x.DF0x + cl1x.baN8F;
    cl1x.DF0x = cl1x.bGl6f[cl1x.Mc3x][cl1x.Mc3x];
    w1x.bGi6c = cl1x
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h1x = c0x("nej.v"), a9j = c0x("nej.e"), O1x = c0x("nej.ui"), b0x;
    if (!!O1x.baG8y)
        return;
    var iT4X = a9j.tA8s(".#<uispace>{position:absolute;background:#fff;}");
    O1x.baG8y = NEJ.C();
    b0x = O1x.baG8y.N1x(O1x.Uh6b);
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.bX1x([[document, "click", this.sV7O.f1x(this)]]);
        this.cCE9v = !!e1x.nostop;
        this.bJw7p = {
            top: e1x.top,
            left: e1x.left
        }
    }
    ;
    b0x.bC1x = function() {
        delete this.As0x;
        delete this.bjM1x;
        delete this.rw7p;
        delete this.bJA7t;
        delete this.baz8r;
        delete this.bJw7p;
        this.bF1x()
    }
    ;
    b0x.ch1x = function() {
        this.mn5s = iT4X
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.CG0x = this.o1x;
        h1x.s1x(this.o1x, "click", this.cCD9u.f1x(this))
    }
    ;
    b0x.sV7O = function(d1x) {
        if (d1x.button != 2)
            this.bt1x()
    }
    ;
    b0x.cCD9u = function(d1x) {
        if (this.cCE9v)
            return;
        h1x.tm7f(d1x);
        var F1x = h1x.W1x(d1x);
        if (F1x.tagName == "A")
            h1x.cn1x(d1x)
    }
    ;
    b0x.cCC9t = function() {
        var df2x = /\s+/i;
        return function(nK6E) {
            nK6E = (nK6E || "").trim().toLowerCase().split(df2x);
            nK6E[0] = nK6E[0] || "bottom";
            nK6E[1] = nK6E[1] || "left";
            this.rw7p = nK6E
        }
    }();
    b0x.cCB9s = function(nK6E) {
        var m1x = {}
          , nx5C = this.bjM1x
          , cFd9U = a9j.ow6q()
          , cC2x = this.o1x.offsetWidth
          , ce1x = this.o1x.offsetHeight;
        switch (nK6E[0]) {
        case "top":
            m1x.top = nx5C.top - ce1x;
            m1x.left = nK6E[1] == "right" ? nx5C.left + nx5C.width - cC2x : nx5C.left;
            break;
        case "left":
            m1x.left = nx5C.left - cC2x;
            m1x.top = nK6E[1] == "bottom" ? nx5C.top + nx5C.height - ce1x : nx5C.top;
            break;
        case "right":
            m1x.left = nx5C.left + nx5C.width;
            m1x.top = nK6E[1] == "bottom" ? nx5C.top + nx5C.height - ce1x : nx5C.top;
            break;
        default:
            m1x.top = nx5C.top + nx5C.height;
            m1x.left = nK6E[1] == "right" ? nx5C.left + nx5C.width - cC2x : nx5C.left;
            break
        }
        return m1x
    }
    ;
    b0x.Mv3x = function() {
        if (!this.bJA7t) {
            this.gI3x(this.bJw7p);
            return
        }
        if (!!this.baz8r) {
            this.gI3x(this.As0x);
            return
        }
        if (!!this.bjM1x)
            this.gI3x(this.cCB9s(this.rw7p))
    }
    ;
    b0x.cCz9q = function(F1x, dp2x, d1x) {
        dp2x = dp2x || bb1x;
        var bKw7p = a9j.ow6q()
          , cZ2x = h1x.jH4L(d1x) + (dp2x.left || 0)
          , hE4I = h1x.mc5h(d1x) + (dp2x.top || 0)
          , cC2x = F1x.offsetWidth + (dp2x.right || 0)
          , ce1x = F1x.offsetHeight + (dp2x.bottom || 0)
          , LQ3x = bKw7p.scrollWidth
          , bjY1x = bKw7p.scrollHeight
          , bka1x = cZ2x + cC2x
          , bkd1x = hE4I + ce1x;
        switch (this.rw7p[0]) {
        case "top":
            hE4I = bkd1x > bjY1x ? hE4I - ce1x : hE4I;
            if (this.rw7p[1] == "right") {
                cZ2x = cZ2x - cC2x < 0 ? 0 : cZ2x - cC2x
            } else {
                cZ2x = bka1x > LQ3x ? LQ3x - cC2x : cZ2x
            }
            break;
        case "left":
            cZ2x = bka1x > LQ3x ? LQ3x - cC2x : cZ2x;
            if (this.rw7p[1] == "top") {
                hE4I = bkd1x > bjY1x ? hE4I - ce1x : hE4I
            } else {
                hE4I = hE4I - ce1x < 0 ? hE4I : hE4I - ce1x
            }
            break;
        case "right":
            cZ2x = cZ2x - cC2x < 0 ? 0 : cZ2x - cC2x;
            if (this.rw7p[1] == "top") {
                hE4I = bkd1x > bjY1x ? hE4I - ce1x : hE4I
            } else {
                hE4I = hE4I - ce1x < 0 ? hE4I : hE4I - ce1x
            }
            break;
        default:
            hE4I = hE4I - ce1x < 0 ? hE4I : hE4I - ce1x;
            if (this.rw7p[1] == "left") {
                cZ2x = bka1x > LQ3x ? LQ3x - cC2x : cZ2x
            } else {
                cZ2x = cZ2x - cC2x < 0 ? 0 : cZ2x - cC2x
            }
            break
        }
        return {
            top: hE4I,
            left: cZ2x
        }
    }
    ;
    b0x.bke1x = function() {
        var cCx9o = function(F1x, dp2x) {
            F1x = a9j.B1x(F1x);
            if (!F1x)
                return;
            dp2x = dp2x || bb1x;
            var bi1x = a9j.hO4S(F1x);
            return {
                top: bi1x.y - (dp2x.top || 0),
                left: bi1x.x - (dp2x.left || 0),
                width: F1x.offsetWidth + (dp2x.right || 0),
                height: F1x.offsetHeight + (dp2x.bottom || 0)
            }
        };
        return function(e1x) {
            e1x = e1x || bb1x;
            this.baz8r = e1x.event;
            this.cCC9t(e1x.align);
            if (!!this.baz8r)
                this.As0x = this.cCz9q(e1x.target, e1x.delta, this.baz8r);
            this.bjM1x = cCx9o(e1x.target, e1x.delta);
            this.bJA7t = !!e1x.fitable;
            this.J1x();
            return this
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), O1x = c0x("nej.ui"), b0x, L1x;
    if (!!O1x.CJ0x)
        return;
    O1x.CJ0x = NEJ.C();
    b0x = O1x.CJ0x.N1x(O1x.bcz9q);
    L1x = O1x.CJ0x.cs1x;
    O1x.CJ0x.cFe9V = function() {
        var cCv9m = function(d1x, C1x, fK3x, kx5C, SI6C) {
            var cD2x, K1x = C1x + "-i", R1x = fK3x.zb9S, bLT8L = !!kx5C.noclear, bMv8n = !!kx5C.toggled;
            if (k1x.gF3x(kx5C.onbeforeclick)) {
                var ZQ8I = kx5C.noclear
                  , cCu9l = kx5C.toggled;
                try {
                    kx5C.onbeforeclick(kx5C)
                } catch (e) {}
                bLT8L = !!kx5C.noclear;
                bMv8n = !!kx5C.toggled;
                kx5C.toggled = cCu9l;
                kx5C.noclear = ZQ8I
            }
            var FW1x = R1x[K1x];
            if (bMv8n && !!FW1x) {
                FW1x.bt1x();
                return
            }
            h1x.bg1x(d1x);
            if (!bLT8L) {
                h1x.z1x(document, "click");
                cD2x = fK3x.A1x(kx5C)
            } else {
                cD2x = fK3x.bJW7P(kx5C, !0)
            }
            R1x[K1x] = cD2x;
            cD2x.wv8n("onbeforerecycle", function() {
                delete R1x[K1x]
            });
            cD2x.bke1x(SI6C)
        };
        return function(g1x, e1x) {
            g1x = a9j.B1x(g1x);
            if (!g1x)
                return this;
            if (!this.zb9S)
                this.zb9S = {};
            var C1x = a9j.lK5P(g1x);
            if (!!this.zb9S[C1x])
                return this;
            e1x = NEJ.X({}, e1x);
            var SI6C = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e1x);
            SI6C.target = C1x;
            e1x.destroyable = !0;
            if (!e1x.fixed) {
                SI6C.fitable = !0;
                e1x.parent = document.body
            }
            this.zb9S[C1x] = [C1x, e1x.event || "click", cCv9m.ew3x(null, C1x, this, e1x, SI6C)];
            h1x.s1x.apply(h1x, this.zb9S[C1x]);
            return this
        }
    }();
    O1x.CJ0x.cFf9W = function(g1x) {
        if (!this.zb9S)
            return this;
        var C1x = a9j.lK5P(g1x)
          , d1x = this.zb9S[C1x];
        if (!d1x)
            return this;
        delete this.zb9S[C1x];
        h1x.mU5Z.apply(h1x, d1x);
        var cD2x = this.zb9S[C1x + "-i"];
        if (!!cD2x)
            cD2x.bt1x();
        return this
    }
    ;
    b0x.bib1x = function() {
        return O1x.baG8y.A1x(this.cf1x)
    }
    ;
    b0x.Uo6i = function() {
        L1x.Uo6i.apply(this, arguments);
        this.cf1x.top = null;
        this.cf1x.left = null;
        this.cf1x.nostop = !1
    }
    ;
    b0x.bke1x = function(e1x) {
        if (!!this.oH6B)
            this.oH6B.bke1x(e1x);
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bc1x = c0x("nej.ui"), n1x = c0x("nm.l"), b0x, L1x;
    n1x.bkj1x = NEJ.C();
    b0x = n1x.bkj1x.N1x(bc1x.CJ0x);
    b0x.bl1x = function(e1x) {
        e1x.nohack = true;
        this.bn1x(e1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), n1x = c0x("nm.l"), l1x = c0x("nm.x"), b0x, L1x;
    var FullscreenApi = l1x.FL1x || {};
    n1x.Z1x = NEJ.C();
    b0x = n1x.Z1x.N1x(n1x.bkj1x);
    L1x = n1x.Z1x.cs1x;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.ev3x = e1x.type || 1
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.o1x = a9j.oc6W(this.cCr9i());
        var i1x = a9j.dm2x(this.o1x);
        this.ri7b = i1x[0];
        this.cv1x = i1x[1]
    }
    ;
    b0x.cCr9i = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
    ;
    b0x.Mv3x = function() {
        var D1x = {}
          , cj1x = this.o1x.style
          , jE4I = a9j.ow6q()
          , oj6d = {
            left: jE4I.scrollLeft,
            top: jE4I.scrollTop
        }
          , dp2x = {
            left: jE4I.clientWidth - this.o1x.offsetWidth,
            top: jE4I.clientHeight - this.o1x.offsetHeight
        };
        D1x.top = Math.max(0, oj6d.top + dp2x.top / 2);
        D1x.left = Math.max(0, oj6d.left + dp2x.left / 2);
        this.oH6B.gI3x(D1x)
    }
    ;
    b0x.J1x = function(e1x) {
        L1x.J1x.call(this);
        this.Mv3x();
        this.ev3x == 1 ? a9j.fj3x(this.ri7b, "u-icn-32", "u-icn-31") : a9j.fj3x(this.ri7b, "u-icn-31", "u-icn-32");
        this.cv1x.innerHTML = e1x.tip || ""
    }
    ;
    window.g_showTipCard = n1x.Z1x.J1x = function() {
        var ei3x;
        return function(e1x) {
            clearTimeout(ei3x);
            if (e1x.parent === undefined)
                e1x.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e1x.autoclose === undefined)
                e1x.autoclose = true;
            e1x.clazz = "m-sysmsg";
            !!this.fk3x && this.fk3x.T1x();
            this.fk3x = this.A1x(e1x);
            this.fk3x.J1x(e1x);
            if (e1x.autoclose)
                ei3x = setTimeout(this.bt1x.f1x(this), 2e3)
        }
        .f1x(n1x.Z1x)
    }();
    n1x.Z1x.bt1x = function() {
        !!this.fk3x && this.fk3x.bt1x()
    }
}
)();
(function() {
    var c0x = NEJ.P
      , v1x = c0x("nej.j")
      , k1x = c0x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v1x.bm1x = v1x.bm1x.eH3x(function(d1x) {
            e1x = d1x.args[1];
            e1x.query = e1x.query || {};
            if (k1x.fG3x(e1x.query))
                e1x.query = k1x.hq4u(e1x.query);
            e1x.query.ref = "mail"
        })
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, fA3x = NEJ.R, I1x = c0x("nej.ut"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), v1x = c0x("nej.j"), q1x = c0x("nm.d"), n1x = c0x("nm.l"), K1x = "playlist-tracks_", b0x;
    q1x.fq3x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q1x, e1x) {
                this.cCq9h(Q1x.playlist);
                return {
                    total: 0,
                    list: fA3x
                }
            },
            onerror: function() {
                this.z1x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q1x, e1x) {
                var nF6z = Q1x.playlist;
                nF6z.creator = GUser;
                nF6z.isHost = !0;
                nF6z.typeFlag = "playlist";
                return nF6z
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.ii4m, "listchange", d1x)
            },
            onmessage: function() {
                var lT5Y = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY1x) {
                    n1x.Z1x.J1x({
                        tip: lT5Y[bY1x] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e1x) {
                e1x.id = e1x.data.pid
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.ii4m, "listchange", d1x)
            },
            onmessage: function() {
                var lT5Y = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY1x) {
                    n1x.Z1x.J1x({
                        tip: lT5Y[bY1x] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e1x) {
                var ez3x = e1x.ext || {};
                e1x.ext = NEJ.X(ez3x, e1x.data);
                e1x.data = {
                    id: e1x.ext.id
                }
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.J1x({
                    tip: "收藏成功" + (Q1x.point > 0 ? ' 获得<em class="s-fc6">' + Q1x.point + "积分</em>" : "")
                });
                var p1x = e1x.ext;
                p1x.subscribedCount++;
                return p1x
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.cCp9g, "listchange", d1x);
                h1x.z1x(q1x.cCp9g, "itemchange", {
                    attr: "subscribedCount",
                    data: d1x.data
                })
            },
            onmessage: function() {
                var lT5Y = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(bY1x) {
                    n1x.Z1x.J1x({
                        type: 2,
                        tip: lT5Y[bY1x] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e1x) {
                e1x.id = e1x.data.id = e1x.data.pid
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.ii4m, "listchange", d1x)
            },
            onmessage: function() {
                var lT5Y = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY1x) {
                    n1x.Z1x.J1x({
                        tip: lT5Y[bY1x],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e1x) {
                var j1x = e1x.data
                  , ZL8D = {};
                ZL8D["playlist-update-name"] = {
                    id: j1x.id,
                    name: j1x.name
                };
                ZL8D["playlist-update-tag"] = {
                    id: j1x.id,
                    tags: j1x.tags.join(";")
                };
                ZL8D["playlist-update-desc"] = {
                    id: j1x.id,
                    desc: j1x.description
                };
                e1x.data = ZL8D;
                e1x.ext = j1x
            },
            format: function(V1x, rg7Z, SD6x, e1x) {
                if (V1x.code == 200 && rg7Z.code == 200 && SD6x.code == 200) {
                    e1x.ext.allSuccess = true;
                    n1x.Z1x.J1x({
                        tip: "保存成功"
                    })
                } else if (V1x.code == 407 || rg7Z.code == 407 || SD6x.code == 407) {
                    e1x.ext.allSuccess = false;
                    n1x.Z1x.J1x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e1x.ext.allSuccess = false;
                    n1x.Z1x.J1x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eJ3x(e1x.ext.id)
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.ii4m, "listchange", d1x)
            },
            onmessage: function(bY1x) {
                n1x.Z1x.J1x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q1x, e1x) {
                var p1x = this.eJ3x(e1x.ext.id);
                if (Q1x.code == 200)
                    p1x.name = e1x.ext.name;
                return Q1x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q1x, e1x) {
                var p1x = this.eJ3x(e1x.ext.id);
                if (Q1x.code == 200)
                    p1x.tags = e1x.ext.tags;
                return Q1x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q1x, e1x) {
                var p1x = this.eJ3x(e1x.ext.id);
                if (Q1x.code == 200)
                    p1x.description = e1x.ext.description;
                return Q1x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e1x) {
                e1x.url = e1x.data.url;
                delete e1x.data.url
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.J1x({
                    tip: "保存成功"
                });
                var p1x = this.eJ3x(e1x.data.id);
                p1x.coverImgUrl = e1x.url;
                e1x.ext = p1x;
                return p1x
            },
            onmessage: function(bY1x) {
                n1x.Z1x.J1x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.ii4m, "itemchange", {
                    attr: "coverImgUrl",
                    data: e1x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q1x, e1x) {
                var nF6z = this.eJ3x(e1x.data.id);
                if (!nF6z)
                    return;
                nF6z.playCount++;
                h1x.z1x(q1x.ii4m, "itemchange", {
                    attr: "playcount",
                    data: nF6z
                })
            }
        }
    });
    q1x.ii4m = NEJ.C();
    b0x = q1x.ii4m.N1x(q1x.hJ4N);
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.bPA9r = function() {
        var do2x = GUser.userId;
        this.lP5U({
            limit: 1001,
            key: "playlist_my-" + do2x,
            data: {
                offset: 0,
                limit: 1001,
                uid: do2x
            }
        })
    }
    ;
    b0x.cCq9h = function(i1x) {
        var do2x = GUser.userId
          , iR4V = []
          , bPZ9Q = [];
        k1x.bd1x(i1x, function(p1x) {
            p1x.typeFlag = "playlist";
            if (p1x.creator && p1x.creator.userId == do2x) {
                if (p1x.specialType == 5)
                    p1x.name = "我喜欢的音乐";
                p1x.isHost = !0;
                iR4V.push(p1x)
            } else {
                bPZ9Q.push(p1x)
            }
        });
        this.vm8e("playlist_new-" + do2x, iR4V);
        this.vm8e("playlist_fav-" + do2x, bPZ9Q)
    }
    ;
    b0x.cCo9f = function(j1x) {
        this.cq1x("playlist-update-cover", {
            data: j1x
        })
    }
    ;
    b0x.cFg9X = function() {
        var SB6v = this.cCm9d.B1x("host-plist");
        if (SB6v.length == 0) {
            return
        }
        if (SB6v.length == 1 && SB6v[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = SB6v.length; i < len; i++) {
            var p1x = SB6v[i];
            if (p1x.trackCount > 0)
                return p1x.id
        }
        return this.cCm9d.B1x("host-plist")[0].id
    }
    ;
    b0x.cCl9c = function(C1x) {
        if (GUser && GUser.userId > 0) {
            this.cq1x("playlist-upcount", {
                data: {
                    id: C1x
                }
            })
        }
    }
    ;
    b0x.Fg1x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b0x.cFh9Y = function() {
        return GUser.userId
    }
    ;
    b0x.Fh1x = function(p1x) {
        if (p1x.userId == GUser.userId && p1x.specialType == 5)
            p1x.name = "我喜欢的音乐";
        h1x.z1x(this.constructor, "itemchange", {
            data: this.Dk0x(p1x)
        });
        return p1x
    }
    ;
    I1x.fI3x.A1x({
        element: q1x.ii4m,
        event: ["listchange", "playcountchange", "itemchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P, fA3x = NEJ.R, br1x = NEJ.F, bb1x = NEJ.O, I1x = c0x("nej.ut"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), l1x = c0x("nm.x"), q1x = c0x("nm.d"), n1x = c0x("nm.l"), b0x, L1x;
    q1x.fq3x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q1x) {
                return Q1x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e1x) {
                e1x.data.limit = 1e3;
                delete e1x.data.id
            },
            format: function(Q1x, e1x) {
                var bQZ0x = []
                  , pM6G = Q1x.programs;
                if (pM6G) {
                    for (var i = 0, l = pM6G.length; i < l; i++) {
                        if (pM6G[i].programFeeType < 10 || pM6G[i].buyed) {
                            bQZ0x.push(pM6G[i])
                        }
                    }
                }
                return bQZ0x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q1x, e1x) {
                return Q1x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e1x) {
                e1x.ext = e1x.data;
                e1x.data = {
                    id: e1x.ext.id
                };
                e1x.id = e1x.data.id
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.J1x({
                    tip: "收藏成功"
                });
                var p1x = e1x.ext;
                p1x.subscribedCount++;
                p1x.subscribed = !0;
                return p1x
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.rc7V, "listchange", d1x)
            },
            onmessage: function() {
                var lT5Y = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(bY1x) {
                    n1x.Z1x.J1x({
                        type: 2,
                        tip: lT5Y[bY1x] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.rc7V, "listchange", d1x)
            },
            onmessage: function() {
                var lT5Y = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(bY1x) {
                    l1x.bkq1x({
                        txt: lT5Y[bY1x] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e1x) {
                var p1x = this.eJ3x(e1x.data.id) || bb1x;
                e1x.ext = (p1x.listenerCount || 0) + 1
            },
            format: function(Q1x, e1x) {
                var p1x = this.eJ3x(e1x.data.id);
                if (!!p1x) {
                    p1x.listenerCount = Math.max(e1x.ext, p1x.listenerCount || 0)
                }
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.rc7V, "itemchange", {
                    attr: "playCount",
                    data: this.eJ3x(e1x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e1x) {
                e1x.data = {
                    threadId: "A_DJ_1_" + e1x.id
                }
            },
            format: function(Q1x, e1x) {
                var p1x = e1x.ext.data || this.eJ3x(e1x.id);
                p1x.liked = true;
                p1x.likedCount++;
                e1x.ext.data = p1x;
                try {
                    top.player.setLike(p1x)
                } catch (e) {}
                return p1x
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.rc7V, "itemchange", {
                    attr: "likedCount",
                    data: e1x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e1x) {
                e1x.data = {
                    threadId: "A_DJ_1_" + e1x.id
                }
            },
            format: function(Q1x, e1x) {
                var p1x = e1x.ext.data || this.eJ3x(e1x.id);
                p1x.liked = false;
                p1x.likedCount--;
                e1x.ext.data = p1x;
                try {
                    top.player.setLike(p1x)
                } catch (e) {}
                return p1x
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.rc7V, "itemchange", {
                    attr: "likedCount",
                    data: e1x.ext.data
                })
            }
        }
    });
    q1x.rc7V = NEJ.C();
    b0x = q1x.rc7V.N1x(q1x.hJ4N);
    b0x.cFi9Z = function() {
        var do2x = GUser.userId;
        this.lP5U({
            limit: 1001,
            key: "program_fav-" + do2x,
            data: {
                offset: 0,
                limit: 1e3,
                uid: do2x
            }
        })
    }
    ;
    b0x.cFj9a = function(de2x) {
        var pQ6K = de2x[this.xb9S];
        l1x.cCf9W(4, function(R1x) {
            R1x.vm8e("track_program-" + pQ6K, de2x.songs)
        });
        delete de2x.songs;
        var bO1x = de2x.mainSong;
        l1x.cCf9W(4, function(R1x) {
            R1x.vm8e("track_program_main-" + pQ6K, !bO1x ? [] : [bO1x])
        });
        de2x.mainSong = (bO1x || bb1x).id
    }
    ;
    b0x.cFl9c = function(C1x) {
        var de2x = this.eJ3x(C1x)
          , do2x = localCache.beg0x("host.profile.userId");
        return !!de2x && de2x.dj.userId == do2x
    }
    ;
    b0x.cFm9d = function(C1x) {
        return !1
    }
    ;
    b0x.Fh1x = function(p1x) {
        h1x.z1x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Dk0x(p1x)
        });
        return p1x
    }
    ;
    b0x.cCl9c = function(C1x) {
        this.cq1x("program-update-count", {
            data: {
                id: C1x
            }
        })
    }
    ;
    l1x.bRZ0x = function(e1x) {
        var R1x = q1x.rc7V.A1x({
            onitemadd: function() {
                (e1x.onsuccess || br1x)()
            },
            onerror: function() {
                (e1x.onerror || br1x)()
            }
        });
        if (e1x.data.liked) {
            R1x.vl8d(e1x.data)
        } else {
            R1x.oU6O(e1x.data)
        }
    }
    ;
    b0x.oU6O = function(de2x) {
        if (!l1x.gR3x())
            return;
        var ct1x = {
            ext: {}
        };
        if (k1x.lQ5V(de2x)) {
            ct1x.id = de2x.id;
            ct1x.ext.data = de2x
        } else {
            ct1x.id = de2x
        }
        this.cq1x("program-like", ct1x)
    }
    ;
    b0x.vl8d = function(de2x) {
        if (!l1x.gR3x())
            return;
        var ct1x = {
            ext: {}
        };
        if (k1x.lQ5V(de2x)) {
            ct1x.id = de2x.id;
            ct1x.ext.data = de2x
        } else {
            ct1x.id = de2x
        }
        this.cq1x("program-unlike", ct1x)
    }
    ;
    I1x.fI3x.A1x({
        element: q1x.rc7V,
        event: ["listchange", "itemchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, fA3x = NEJ.R, I1x = c0x("nej.ut"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), v1x = c0x("nej.j"), q1x = c0x("nm.d"), n1x = c0x("nm.l"), l1x = c0x("nm.x"), K1x = "playlist-tracks_", l1x = c0x("nm.x"), b0x;
    q1x.fq3x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e1x) {
                e1x.data.c = JSON.stringify([{
                    id: e1x.data.id
                }])
            },
            format: function(Q1x, e1x) {
                var bj1x = l1x.FO1x(Q1x.songs[0]);
                bj1x.privilege = Q1x.privileges[0];
                return bj1x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e1x) {
                e1x.data.n = 1e3
            },
            format: function(Q1x, e1x) {
                var hB4F = [];
                this.tu7n.Fh1x(Q1x.playlist);
                k1x.bd1x(Q1x.playlist.tracks, function(bO1x, r1x) {
                    var bSM0x = l1x.FO1x(bO1x);
                    bSM0x.privilege = Q1x.privileges[r1x];
                    hB4F.push(bSM0x)
                }, this);
                return hB4F
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q1x, e1x) {
                var hB4F = [];
                k1x.bd1x(Q1x.songs, function(bj1x) {
                    hB4F.push(l1x.FO1x(bj1x))
                });
                return hB4F
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e1x) {
                var bz1x = {}
                  , j1x = e1x.data
                  , cBT8L = this.hF4J(e1x.key) || [];
                FT1x = [];
                k1x.bd1x(cBT8L, function(bO1x) {
                    var C1x = k1x.lQ5V(bO1x) ? bO1x.id : bO1x;
                    bz1x[C1x] = true
                });
                e1x.ext = [];
                k1x.bd1x(j1x.tracks, function(bO1x) {
                    var C1x = k1x.lQ5V(bO1x) ? bO1x.id : bO1x;
                    if (!bz1x[C1x]) {
                        FT1x.push(C1x);
                        bz1x[C1x] = true;
                        e1x.ext.push(bO1x)
                    }
                });
                j1x.trackIds = JSON.stringify(FT1x);
                j1x.op = "add";
                if (!FT1x.length) {
                    e1x.value = {
                        code: 502
                    }
                }
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.J1x({
                    tip: "已添加至歌单"
                });
                var nF6z = this.tu7n.eJ3x(e1x.data.pid);
                if (!!Q1x.coverImgUrl)
                    nF6z.coverImgUrl = Q1x.coverImgUrl;
                k1x.nz5E(e1x.ext, function(bO1x) {
                    this.Ak0x(e1x, k1x.lQ5V(bO1x) ? bO1x : null);
                    if (!!nF6z)
                        nF6z.trackCount++
                }, this);
                h1x.z1x(q1x.ii4m, "itemchange", {
                    data: nF6z || {},
                    cmd: "add"
                });
                this.z1x("onaddsuccess");
                return null
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.xc9T, "listchange", {
                    key: e1x.key,
                    action: "refresh"
                });
                var pQ6K = e1x.data.pid
                  , cB1x = this.kA5F(e1x.key)
            },
            onmessage: function() {
                var lT5Y = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(bY1x) {
                    setTimeout(function() {
                        n1x.Z1x.J1x({
                            tip: lT5Y[bY1x] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e1x) {
                var j1x = e1x.data;
                e1x.ext = j1x.trackIds;
                j1x.trackIds = JSON.stringify(j1x.trackIds);
                j1x.op = "del"
            },
            format: function(Q1x, e1x) {
                var nF6z = this.tu7n.eJ3x(e1x.data.pid);
                k1x.bd1x(e1x.ext, function(C1x) {
                    this.bhT0x({
                        id: C1x,
                        key: "track_playlist-" + e1x.data.pid
                    }, !0);
                    if (!!nF6z)
                        nF6z.trackCount = Math.max(0, nF6z.trackCount - 1)
                }, this);
                h1x.z1x(q1x.ii4m, "itemchange", {
                    data: nF6z || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(q1x.xc9T, "listchange", {
                    key: e1x.key,
                    action: "refresh"
                })
            },
            onmessage: function(bY1x) {
                l1x.bkq1x({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q1x, e1x) {
                return this.bSV0x.Fh1x(Q1x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q1x, e1x) {
                var i1x = [];
                if (e1x.data.type == -1) {
                    if (Q1x.weekData && Q1x.weekData.length) {
                        e1x.data.type = 1
                    } else {
                        e1x.data.type = 0
                    }
                }
                if (e1x.data.type == 1) {
                    i1x = this.bSX0x(Q1x.weekData)
                } else {
                    i1x = this.bSX0x(Q1x.allData)
                }
                return i1x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q1x, e1x) {
                var ok6e = []
                  , i1x = Q1x.recommend || [];
                k1x.bd1x(i1x, function(bj1x, r1x) {
                    ok6e.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj1x.alg,
                            scene: "user-song",
                            position: r1x,
                            id: bj1x.id
                        }
                    })
                });
                this.kH5M.bbR9I(ok6e);
                e1x.limit = i1x.length;
                return i1x
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e1x) {
                e1x.data.lv = 0;
                e1x.data.tv = 0
            },
            format: function(m1x, e1x) {
                return m1x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q1x.xc9T = NEJ.C();
    b0x = q1x.xc9T.N1x(q1x.hJ4N);
    b0x.cx1x = function() {
        this.cE2x();
        this.tu7n = q1x.ii4m.A1x();
        this.bSV0x = q1x.rc7V.A1x();
        this.kH5M = q1x.hS4W.A1x()
    }
    ;
    b0x.bSX0x = function(i1x) {
        var m1x = []
          , fr3x = 0;
        k1x.bd1x(i1x, function(p1x, r1x) {
            var bj1x = l1x.FO1x(p1x.song);
            if (r1x == 0) {
                fr3x = p1x.score
            }
            bj1x.max = fr3x;
            bj1x.playCount = p1x.playCount;
            bj1x.score = p1x.score;
            m1x.push(bj1x)
        });
        return m1x
    }
    ;
    I1x.fI3x.A1x({
        element: q1x.xc9T,
        event: ["listchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , cw1x = c0x("nm.pc");
    var bkv1x = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qR7K = function(bR1x) {
        var Df0x = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bR1x), Df0x)
    };
    var cBS8K = function(lU5Z) {
        var kO5T = "http://" + location.host + "/"
          , St6n = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/
          , dQ2x = St6n.exec(lU5Z);
        if (!dQ2x)
            return cBR8J(lU5Z);
        var gk3x = dQ2x[2]
          , hC4G = dQ2x[3]
          , do2x = dQ2x[4] || ""
          , jk4o = "";
        switch (gk3x) {
        case "album":
            jk4o = "#/m/album/comment/?rid=" + bkv1x[gk3x] + hC4G + "&id=" + hC4G;
            break;
        case "playlist":
            jk4o = "#/m/playlist/comment/?rid=" + bkv1x[gk3x] + hC4G + "&id=" + hC4G;
            break;
        case "song":
        case "dj":
        case "program":
            jk4o = "#/m/song?rid=" + bkv1x[gk3x] + hC4G;
            break;
        case "event":
            jk4o = "#/m/friend/event/?id=" + hC4G + "&uid=" + do2x;
            break;
        case "user/home":
            jk4o = "#/m/personal/?uid=" + hC4G;
            break;
        case "mv":
            jk4o = "#/m2/mv/?id=" + hC4G;
            break;
        case "activity":
            jk4o = "#/m/friend/activity?id=" + hC4G;
            break;
        case "video":
            jk4o = "#/m2/mv/?id=" + hC4G + "&type=1";
            break;
        default:
            jk4o = "#/m/" + gk3x + "/?id=" + hC4G
        }
        return kO5T + jk4o
    };
    var cBR8J = function(lU5Z) {
        var cBO8G = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dQ2x = cBO8G.exec(lU5Z);
        if (dQ2x)
            return "http://v.youku.com/v_show/id_" + dQ2x[1];
        return lU5Z
    };
    cw1x.eo3x = function(gk3x, hC4G) {
        qR7K({
            name: "play",
            args: {
                type: gk3x,
                id: hC4G
            }
        })
    }
    ;
    cw1x.fF3x = function() {
        qR7K({
            name: "pause"
        })
    }
    ;
    cw1x.Cy0x = function(lU5Z) {
        qR7K({
            name: "open",
            args: {
                link: cBS8K(lU5Z)
            }
        })
    }
    ;
    cw1x.kI5N = function(gk3x, hC4G, cI2x) {
        qR7K({
            name: "share",
            args: {
                type: gk3x,
                id: hC4G,
                shareContent: cI2x
            }
        })
    }
    ;
    cw1x.bVd1x = function(gk3x, hC4G) {
        qR7K({
            name: "comment",
            args: {
                type: gk3x,
                id: hC4G
            }
        })
    }
    ;
    cw1x.cBN8F = function() {
        qR7K({
            name: "init"
        })
    }
    ;
    cw1x.Cw0x = function(ce1x) {
        qR7K({
            name: "setHeight",
            args: {
                height: ce1x
            }
        })
    }
    ;
    cw1x.il4p = function(bG1x, Y1x) {
        qR7K({
            name: "toast",
            args: {
                message: bG1x || "",
                state: Y1x
            }
        })
    }
    ;
    cw1x.GB1x = function(lU5Z) {
        qR7K({
            name: "login",
            args: {
                link: lU5Z
            }
        })
    }
    ;
    cw1x.bVC1x = function(Cv0x) {
        qR7K({
            name: "topbar",
            args: {
                show: !!Cv0x
            }
        })
    }
    ;
    cw1x.cBM8E = function(bx1x) {
        qR7K({
            name: "refreshtopbar",
            args: {
                info: bx1x
            }
        })
    }
    ;
    cw1x.cBJ8B = function(bs1x, r1x) {
        qR7K({
            name: "big",
            args: {
                arr: bs1x,
                index: r1x
            }
        })
    }
    ;
    cw1x.MQ3x = function(cy1x) {
        qR7K({
            name: "download",
            args: {
                img: cy1x
            }
        })
    }
    ;
    cw1x.bym4q = function(cBH8z) {
        qR7K({
            name: "scrollable",
            args: {
                scrollable: cBH8z
            }
        })
    }
}
)();
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
                }
                )(S) > a[541] && Ia();
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
                }
                )() ? (Da(Q()),
                Ea(ra()),
                O = Va(),
                window[b[124]] && window[b[124]](ua, O)) : ua()
            }
            )()
        }
        )()
    }
    )()
}
)();
(function() {}
)();
(function() {
    var byt4x;
    var um8e = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cBG8y = 0;
    var byJ5O = 0;
    var byM5R = 1;
    var byW5b = 0;
    var bkH1x = "";
    var bzf5k = "";
    var bzg5l = "";
    var Zq8i = "";
    var Zn8f = "";
    var bkR1x = "";
    var bzu5z = 0;
    var bzv5A = "";
    var LC3x = "";
    var Ha1x = 0;
    var bkT1x = ntes_get_domain();
    var bkV1x = null;
    var cFp9g = "//analytics.163.com";
    var cBz8r = function() {};
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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bkT1x
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bkT1x
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bkT1x
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
    var cBy8q = 0;
    var Sg6a = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Sg6a))
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
        var a = (1 << Sg6a) - 1;
        for (var b = 0; b < d.length * Sg6a; b += Sg6a) {
            c[b >> 5] |= (d.charCodeAt(b / Sg6a) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cBy8q ? "0123456789ABCDEF" : "0123456789abcdef";
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
        Zq8i = "-";
        bkR1x = "-";
        Zn8f = "-";
        var c = window.self
          , b = window.screen
          , a = window.navigator;
        if (c.screen) {
            Zq8i = b.width + "x" + b.height;
            bkR1x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Zq8i = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Zn8f = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Zn8f = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bzu5z = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cFq9h(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cBz8r;
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
        var e = k || byt4x;
        bkH1x = escape(a || document.location);
        bzf5k = escape(m || document.title);
        bzg5l = l === true ? "" : escape(l || document.referrer);
        bzv5A = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bkV1x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bkV1x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bkH1x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bkV1x) {
                um8e = fetch_visitor_hash();
                byJ5O = 1;
                ntes_set_cookie_long("_ntes_nnid", um8e + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", um8e)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            um8e = h.substr(0, o);
            Ha1x = h.substr(o + 1, p - o - 1);
            if (Ha1x == 0) {
                Ha1x = (new Date).getTime();
                f = true
            }
            if (!um8e) {
                um8e = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", um8e + "," + Ha1x);
                ntes_set_cookie_long("_ntes_nuid", um8e)
            }
            if (Ha1x != 0 && b - Ha1x > 365 * 86400 * 1e3) {
                Ha1x = 0;
                ntes_set_cookie_long("_ntes_nnid", um8e + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", um8e)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
              , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        LC3x = c("P_INFO", "P_OINFO");
        LC3x = LC3x ? LC3x.substr(0, LC3x.indexOf("|")) : "";
        byW5b = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", um8e, "&_nvtm=", cBG8y, "&_nvsf=", byM5R, "&_nvfi=", byJ5O, "&_nlag=", Zn8f, "&_nlmf=", bzu5z, "&_nres=", Zq8i, "&_nscd=", bkR1x, "&_nstm=", byW5b, "&_nurl=", bkH1x, "&_ntit=", bzf5k, "&_nref=", bzg5l, "&_nfla=", bzv5A, "&_nssn=", LC3x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        byM5R = 0;
        neteaseTracker.callback = null
    }
    byt4x = "iad";
    neteaseTracker()
}
)();
(function() {}
)();
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
            this.j1x = new r.init;
            this.bAi5n = 0
        },
        YY8Q: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.j1x.concat(a);
            this.bAi5n += a.sigBytes
        },
        Cr0x: function(a) {
            var c = this.j1x
              , e = c.words
              , j = c.sigBytes
              , k = this.blockSize
              , b = j / (4 * k)
              , b = a ? u.ceil(b) : u.max((b | 0) - this.bAh5m, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this.bAn5s(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.j1x = this.j1x.clone();
            return a
        },
        bAh5m: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bkY1x()
        },
        update: function(a) {
            this.YY8Q(a);
            this.Cr0x();
            return this
        },
        finalize: function(a) {
            a && this.YY8Q(a);
            return this.YS8K()
        },
        blockSize: 16,
        bkX1x: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cBr8j: function(a) {
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
              , t = this.bz1x;
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
              , s = this.bz1x
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
        bz1x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)();
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
        bkY1x: function() {
            this.dR2x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bAn5s: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                  , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR2x.words
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
        YS8K: function() {
            var b = this.j1x
              , n = b.words
              , a = 8 * this.bAi5n
              , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Cr0x();
            b = this.dR2x;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dR2x = this.dR2x.clone();
            return b
        }
    });
    t.MD5 = v.bkX1x(r);
    t.HmacMD5 = v.cBr8j(r)
}
)(Math);
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
}
)();
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
            return this.create(this.bkZ1x, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.cBi8a, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bAK5P = e;
            this.K1x = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.bkY1x()
        },
        process: function(e) {
            this.YY8Q(e);
            return this.Cr0x()
        },
        finalize: function(e) {
            e && this.YY8Q(e);
            return this.YS8K()
        },
        keySize: 4,
        ivSize: 4,
        bkZ1x: 1,
        cBi8a: 2,
        bkX1x: function(e) {
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
        YS8K: function() {
            return this.Cr0x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
      , x = function(e, a, b) {
        var c = this.bAM5R;
        c ? this.bAM5R = u : c = this.bAP5U;
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
            this.bAR5W = e;
            this.bAM5R = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAR5W
              , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bAP5U = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAR5W
              , c = b.blockSize
              , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bAP5U = d
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
            if (this.bAK5P == this.bkZ1x)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                this.bAh5m = 1;
            this.ff3x = c.call(a, this, b && b.words)
        },
        bAn5s: function(a, b) {
            this.ff3x.processBlock(a, b)
        },
        YS8K: function() {
            var a = this.cfg.padding;
            if (this.bAK5P == this.bkZ1x) {
                a.pad(this.j1x, this.blockSize);
                var b = this.Cr0x(!0)
            } else
                b = this.Cr0x(!0),
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
            b = this.bcp9g(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        bcp9g: function(a, b) {
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
            c = this.bcp9g(c, l.format);
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
        bkY1x: function() {
            for (var a = this.K1x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cBg8Y = d + 6) + 1), e = this.cBf8X = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                    k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                    k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this.cBe8W = [];
            for (d = 0; d < a; d++)
                j = a - d,
                k = d % 4 ? e[j] : e[j - 4],
                c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bAS5X(a, b, this.cBf8X, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bAS5X(a, c, this.cBe8W, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bAS5X: function(a, b, c, d, e, j, l, f) {
            for (var m = this.cBg8Y, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
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
    u.AES = p.bkX1x(d)
}
)();
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
    var c0x = NEJ.P
      , em3x = c0x("nej.g")
      , v1x = c0x("nej.j")
      , k1x = c0x("nej.u")
      , Sa6U = c0x("nm.x.ek");
    Sa6U.emj = {
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
    Sa6U.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
}
)();
(function() {
    var c0x = NEJ.P
      , em3x = c0x("nej.g")
      , v1x = c0x("nej.j")
      , k1x = c0x("nej.u")
      , Sa6U = c0x("nm.x.ek")
      , l1x = c0x("nm.x");
    if (v1x.bm1x.redefine)
        return;
    window.GEnc = true;
    var bli1x = function(cBc8U) {
        var m1x = [];
        k1x.bd1x(cBc8U, function(cBb8T) {
            m1x.push(Sa6U.emj[cBb8T])
        });
        return m1x.join("")
    };
    var cBa8S = v1x.bm1x;
    v1x.bm1x = function(X1x, e1x) {
        var j1x = {}
          , e1x = NEJ.X({}, e1x)
          , lR5W = X1x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(X1x) && !(e1x.headers && e1x.headers[em3x.zA9r] == em3x.Gw1x) && !e1x.noEnc) {
            if (lR5W != -1) {
                j1x = k1x.hq4u(X1x.substring(lR5W + 1));
                X1x = X1x.substring(0, lR5W)
            }
            if (e1x.query) {
                j1x = NEJ.X(j1x, k1x.fG3x(e1x.query) ? k1x.hq4u(e1x.query) : e1x.query)
            }
            if (e1x.data) {
                j1x = NEJ.X(j1x, k1x.fG3x(e1x.data) ? k1x.hq4u(e1x.data) : e1x.data)
            }
            j1x["csrf_token"] = v1x.gw3x("__csrf");
            X1x = X1x.replace("api", "weapi");
            e1x.method = "post";
            delete e1x.query;
            var bBo5t = window.asrsea(JSON.stringify(j1x), bli1x(["流泪", "强"]), bli1x(Sa6U.md), bli1x(["爱心", "女孩", "惊恐", "大笑"]));
            e1x.data = k1x.cF2x({
                params: bBo5t.encText,
                encSecKey: bBo5t.encSecKey
            })
        }
        cBa8S(X1x, e1x)
    }
    ;
    v1x.bm1x.redefine = true
}
)();
(function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi))
            return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue)
                return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow")
            return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href)
            canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL)
            canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
}
)();
(function() {}
)();
(function() {}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , dy2x = c0x("nej.p")
      , k1x = c0x("nej.u")
      , h1x = c0x("nej.v")
      , v1x = c0x("nej.j")
      , dE2x = c0x("nm.u")
      , l1x = c0x("nm.x")
      , q1x = c0x("nm.d")
      , n1x = c0x("nm.l")
      , cw1x = c0x("nm.pc")
      , bln1x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
      , j1x = {
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
      , cAW8O = function() {
        if (h1x && h1x.z1x) {
            h1x.dispatchEventalias = h1x.z1x
        }
    };
    cAW8O();
    l1x.blp1x = function(bO1x) {
        if (!bO1x || bO1x.copyrightId === undefined || !!bO1x.program)
            return false;
        if (window.GAbroad) {
            bO1x.fee = 0;
            return true
        }
        if (bO1x.status < 0)
            return true;
        var RP6J;
        if (typeof GCopyrights !== "undefined")
            RP6J = GCopyrights;
        try {
            if (!RP6J && !!top.GCopyrights)
                RP6J = top.GCopyrights
        } catch (e) {}
        if (RP6J) {
            var r1x = k1x.di2x(RP6J, bO1x.copyrightId);
            if (r1x >= 0)
                return true
        }
        return false
    }
    ;
    l1x.blq1x = function() {
        var Cm0x = /^\/m\/(song|album|artist|playlist|dj|search)\?/
          , wi8a = {
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
          , cAR8J = {
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
        var cAQ8I = function(K1x, j1x, RK6E) {
            switch (K1x) {
            case "event":
                j1x = j1x.split("|");
                return "/event?id=" + j1x[0] + "&uid=" + j1x[1];
            case "searchsong":
            case "searchlyric":
                var u1x = K1x == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(j1x) + "&type=" + u1x;
            case "toplist":
                return "/discover/toplist?id=" + j1x + "&_hash=songlist-" + RK6E;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + RK6E;
                ;
            case "record":
                j1x = j1x.split("|");
                return "/user/songs/rank?id=" + j1x[0] + "&cat=" + j1x[1];
                break;
            default:
                return "/" + K1x + "?id=" + j1x + "&_hash=songlist-" + RK6E
            }
        };
        return function(ee3x, RK6E) {
            if (!ee3x)
                return null;
            var Ml3x = ee3x.fid || (ee3x.type != 18 ? ee3x.type : null)
              , blr1x = ee3x.fdata || ee3x.rid
              , bCp5u = ee3x.page || ee3x.fhref;
            var K1x = wi8a[Ml3x];
            if (!K1x) {
                var yN9E = (bCp5u || "").match(Cm0x);
                if (yN9E)
                    K1x = yN9E[1]
            }
            if (!K1x)
                return null;
            return {
                title: cAR8J[K1x],
                link: !wi8a[Ml3x] ? bCp5u : cAQ8I(K1x, blr1x, RK6E),
                fid: Ml3x,
                fdata: blr1x
            }
        }
    }();
    l1x.Yq7j = function(ky5D) {
        var dq2x = ky5D;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            dq2x = GUser;
        return dq2x
    }
    ;
    l1x.gR3x = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
    ;
    l1x.Lt3x = function() {
        var Cm0x = /#(.*?)$/;
        return function(gA3x) {
            var jJ4N = gA3x === false ? location : top.location;
            return Cm0x.test(jJ4N.href) ? RegExp.$1 : ""
        }
    }();
    l1x.Cl0x = function() {
        var Ck0x = a9j.dj2x("audio")
          , cAN8F = Ck0x.canPlayType && Ck0x.canPlayType("audio/mpeg");
        if (cAN8F)
            return 2;
        var cAL8D = l1x.blw1x().supported;
        if (cAL8D)
            return 1;
        return 0
    }
    ;
    l1x.blw1x = function() {
        var gv3x, blx1x = !1, bly1x = "";
        if (dy2x.dt2x.browser == "ie") {
            try {
                gv3x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gv3x = null
            }
            if (gv3x) {
                blx1x = !0;
                bly1x = gv3x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gv3x = navigator.plugins["Shockwave Flash"];
                if (gv3x) {
                    blx1x = !0;
                    bly1x = gv3x.description
                }
            }
        }
        return {
            supported: blx1x,
            version: bly1x
        }
    }
    ;
    l1x.sG7z = function() {
        return "网易云音乐"
    }
    ;
    l1x.cAK8C = function() {
        return j1x
    }
    ;
    l1x.bCU6O = function(cI2x) {
        var C1x = j1x[cI2x];
        return C1x == null ? "" : bln1x.replace("{ID}", C1x)
    }
    ;
    l1x.wR9I = function(bo1x, eb3x, Cj0x) {
        if (!bo1x)
            return "";
        if (!!Cj0x) {
            bo1x = l1x.cAJ8B(bo1x)
        }
        return l1x.XW7P(l1x.cAI8A(bo1x, eb3x))
    }
    ;
    l1x.XV7O = function() {
        var St6n = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
          , blA1x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }
          , cAH8z = {
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
          , cAD8v = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cAA8s = function(dL2x, blC1x) {
            dL2x = Lo3x(dL2x);
            if (!!blC1x) {
                dL2x = dL2x.replace(St6n.MLINE, "\n\n").replace(St6n.LING, "</br>")
            }
            dL2x = l1x.XW7P(dL2x);
            return dL2x
        };
        var Lo3x = function(bo1x) {
            return k1x.AT0x(cAH8z, bo1x)
        };
        return function(dL2x, e1x, dF2x) {
            e1x = e1x || {};
            dF2x = dF2x || {};
            dF2x.actHash = {};
            var cAu8m = !!e1x.parseLink
              , cAp8h = !!e1x.parseAct
              , cAo8g = e1x.linkTpl || blA1x.LINK
              , cAn8f = e1x.atTpl || blA1x.AT
              , cAm8e = e1x.atUrl || "/user/home?nickname="
              , cAl8d = e1x.actTpl || blA1x.ACT
              , blC1x = !!e1x.keepSpace
              , blD1x = e1x.linkKlass || "s-fc7";
            cFz9q = e1x.actBiJson || "";
            if (!dL2x)
                return "";
            dL2x = dL2x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lI5N = cAD8v[cAu8m + 2 * cAp8h]
              , df2x = St6n[lI5N]
              , bs1x = null
              , jR4V = null
              , gu3x = 0
              , cFA9r = ""
              , cFB9s = "";
            var qc6W = [];
            df2x.lastIndex = 0;
            while (bs1x = df2x.exec(dL2x)) {
                var dQ2x = {
                    html: "",
                    before: bs1x.index - 1,
                    after: bs1x.index + bs1x[0].length
                };
                if (bs1x[1]) {
                    var jR4V = bs1x[2].replace(/[^\x00-\xff]/g, "**");
                    if (jR4V.length < 4 || jR4V.length > 32) {} else {
                        var EE1x = a9j.eB3x(cAn8f);
                        dQ2x.html = a9j.cc1x(EE1x, {
                            value: Lo3x(bs1x[2]),
                            url: encodeURI(cAm8e + bs1x[2]),
                            klass: blD1x
                        });
                        qc6W.push(dQ2x)
                    }
                } else if (bs1x.length > 8 && bs1x[4]) {
                    var EE1x = a9j.eB3x(cAo8g);
                    dQ2x.html = a9j.cc1x(EE1x, {
                        value: Lo3x(bs1x[4]),
                        url: bs1x[4],
                        klass: blD1x
                    });
                    qc6W.push(dQ2x)
                } else {
                    var bEN6H = lI5N == "ACT_NOLINK" ? 4 : 9;
                    var EE1x = a9j.eB3x(cAl8d);
                    dQ2x.html = a9j.cc1x(EE1x, {
                        value: Lo3x(bs1x[bEN6H]),
                        klass: blD1x
                    });
                    qc6W.push(dQ2x);
                    dF2x.actHash[bs1x[bEN6H].slice(1, -1)] = true
                }
            }
            var blI1x = qc6W.length
              , ky5D = {
                before: dL2x.length - 1,
                after: 0
            }
              , blJ1x = "";
            for (var i = 0; i <= blI1x; i++) {
                var hx4B, fR3x;
                hx4B = (qc6W[i - 1] || ky5D).after;
                fR3x = (qc6W[i] || ky5D).before;
                if (fR3x >= hx4B && hx4B >= 0 && fR3x <= dL2x.length - 1) {
                    blJ1x += cAA8s(dL2x.substring(hx4B, fR3x + 1), blC1x)
                }
                if (qc6W[i]) {
                    blJ1x += qc6W[i].html
                }
            }
            return blJ1x
        }
    }();
    l1x.cAJ8B = function() {
        var df2x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?","g");
        return function(bo1x) {
            return (bo1x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(df2x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l1x.cAI8A = function() {
        var df2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ex3x = function(jR4V, eb3x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(jR4V) + '" class="' + (eb3x || "") + '">@' + jR4V + "</a>"
        };
        return function(bo1x, eb3x) {
            return (bo1x || "").replace(df2x, function($0, $1) {
                return ex3x($1, eb3x)
            })
        }
    }();
    l1x.XW7P = function() {
        var df2x = /\[(.*?)\]/g;
        return function(bo1x) {
            return (bo1x || "").replace(df2x, function($1, $2) {
                var X1x = l1x.bCU6O($2);
                return !X1x ? $1 : '<img src="' + X1x + '"/>'
            })
        }
    }();
    l1x.AN0x = function(F1x, eb3x) {
        a9j.bE1x(F1x, eb3x) ? a9j.x1x(F1x, eb3x) : a9j.y1x(F1x, eb3x)
    }
    ;
    l1x.Ln3x = function(cO2x, kO5T) {
        cO2x = a9j.B1x(cO2x);
        kO5T = a9j.B1x(kO5T);
        if (!cO2x || !kO5T)
            return !1;
        for (kO5T = kO5T.parentNode; !!kO5T && kO5T != cO2x; kO5T = kO5T.parentNode)
            ;
        return kO5T == cO2x
    }
    ;
    l1x.lr5w = function() {
        var bFb6V = function(ha4e) {
            return (ha4e < 10 ? "0" : "") + ha4e
        };
        return function(kP5U) {
            kP5U = parseInt(kP5U) || 0;
            if (!kP5U)
                return "00:00";
            var xS9J = Math.floor(kP5U % 60)
              , cAb8T = Math.floor(kP5U / 60);
            return bFb6V(cAb8T) + ":" + bFb6V(xS9J)
        }
    }();
    l1x.xV9M = function(fO3x, wN8F) {
        if (!fO3x || fO3x.length == 0)
            return "";
        wN8F = wN8F || "/";
        var bs1x = [];
        for (var i = fO3x.length - 1; i >= 0; i--) {
            bs1x.unshift(fO3x[i].name)
        }
        return bs1x.join(wN8F)
    }
    ;
    l1x.sm7f = function() {
        var Rr5w = function(ic4g, eb3x, cO2x, XI7B) {
            var ex3x = XI7B ? l1x.blO1x : k1x.dG2x;
            if (!ic4g || !ic4g.name)
                return "";
            if (!ic4g.id)
                return '<span class="' + eb3x + '">' + ex3x(ic4g.name) + "</span>";
            return "<a" + (cO2x ? ' target="_blank"' : "") + ' class="' + eb3x + '" href="/artist?id=' + ic4g.id + '" hidefocus="true">' + ex3x(ic4g.name) + "</a>"
        };
        return function(fO3x, V1x, wN8F, cO2x, bFC6w, XI7B) {
            if (!fO3x || !fO3x.length)
                return "";
            wN8F = wN8F || "/";
            V1x = V1x || "";
            Lm3x = "";
            var eq3x = [];
            for (var i = 0, i1x = [], ug8Y = [], fM3x; i < fO3x.length; ++i) {
                eq3x.push(fO3x[i].name);
                if (!fO3x[i] || fO3x[i].id <= 0) {
                    ug8Y.push(fO3x[i]);
                    continue
                }
                if (k1x.gF3x(V1x)) {
                    fM3x = V1x(fO3x[i])
                } else {
                    fM3x = Rr5w(fO3x[i], V1x, cO2x, XI7B)
                }
                if (fM3x && bFC6w && fO3x[i].tns && fO3x[i].tns.length > 0) {
                    Lm3x = k1x.dG2x(fO3x[i].tns[0]);
                    fM3x += '<span class="s-fc8" title="' + Lm3x + '"> - (' + Lm3x + ")</span>"
                }
                !!fM3x && i1x.push(fM3x)
            }
            for (var i = 0, fM3x; i < ug8Y.length; ++i) {
                if (k1x.gF3x(V1x)) {
                    fM3x = V1x(ug8Y[i])
                } else {
                    fM3x = Rr5w(ug8Y[i], V1x, cO2x, XI7B)
                }
                if (fM3x && bFC6w && ug8Y[i].tns && ug8Y[i].tns.length > 0) {
                    Lm3x = k1x.dG2x(ug8Y[i].tns[0]);
                    fM3x += '<span class="s-fc8" title="' + Lm3x + '"> - (' + Lm3x + ")</span>"
                }
                !!fM3x && i1x.push(fM3x)
            }
            return '<span title="' + eq3x.join(wN8F) + '">' + i1x.join(wN8F) + "</span>"
        }
    }();
    l1x.yk9b = function(fu3x, qn6h) {
        qn6h = qn6h || "86";
        return !!fu3x && (qn6h == "86" ? /^\d{11}$/ : /^\d+$/).test(fu3x)
    }
    ;
    l1x.cFC9t = function(fu3x) {
        if (!l1x.yk9b(fu3x))
            return fu3x;
        return fu3x.substring(0, 3) + "****" + fu3x.substr(7)
    }
    ;
    l1x.kl5q = function() {
        var df2x = /^\s+$/g;
        return function(hZ4d) {
            return !hZ4d || df2x.test(hZ4d)
        }
    }();
    l1x.Rn5s = function() {
        var blQ1x = /[^\x00-\xfff]/g;
        return function(hZ4d) {
            var czZ8R = hZ4d.match(blQ1x) || []
              , ds2x = czZ8R.length;
            return hZ4d.length + ds2x
        }
    }();
    l1x.BZ0x = function() {
        var blQ1x = /[^\x00-\xfff]/;
        return function(hZ4d, eF3x) {
            for (var i = 0, len = hZ4d.length; i < len && eF3x > 0; i++) {
                if (blQ1x.test(hZ4d.charAt(i))) {
                    eF3x -= 2;
                    if (eF3x < 0) {
                        break
                    }
                } else {
                    eF3x -= 1
                }
            }
            return hZ4d.substring(0, i)
        }
    }();
    l1x.DB0x = function(hZ4d, eF3x, VC7v) {
        eF3x = eF3x || 10;
        VC7v = VC7v || nej.p.dt2x.engine == "trident" && parseInt(nej.p.dt2x.release) < 5;
        if (VC7v && l1x.Rn5s(hZ4d) > eF3x) {
            return l1x.BZ0x(hZ4d, eF3x) + "..."
        } else {
            return hZ4d
        }
    }
    ;
    l1x.bGr6l = function(g1x) {
        return g1x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g1x.type || g1x.href || ~g1x.tabIndex)
    }
    ;
    l1x.czX8P = function(d1x, cO2x) {
        if (!d1x || !cO2x)
            return !0;
        var g1x, u1x = d1x.type.toLowerCase();
        if (u1x == "mouseout") {
            g1x = d1x.relatedTarget || d1x.toElement
        } else if (u1x == "mouseover") {
            g1x = d1x.relatedTarget || d1x.fromElement
        }
        return !g1x || g1x !== cO2x && !l1x.Ln3x(cO2x, g1x)
    }
    ;
    l1x.tV8N = function() {
        R1x = {};
        return function(g1x, ed3x) {
            var C1x = a9j.lK5P(g1x)
              , K1x = "hover-" + C1x;
            if (!ed3x || !C1x || !!R1x[K1x])
                return;
            R1x[K1x] = !0;
            h1x.s1x(C1x, "mouseover", function() {
                var blW1x = a9j.H1x(g1x, "hshow") || [];
                var blX1x = a9j.H1x(g1x, "icn-dislike") || [];
                a9j.y1x(C1x, "z-hover");
                a9j.ba1x(blW1x[0], "display", "block");
                a9j.ba1x(blX1x[0], "display", "block")
            });
            h1x.s1x(C1x, "mouseout", function() {
                var blW1x = a9j.H1x(g1x, "hshow") || [];
                var blX1x = a9j.H1x(g1x, "icn-dislike") || [];
                a9j.x1x(C1x, "z-hover");
                a9j.ba1x(blW1x[0], "display", "none");
                a9j.ba1x(blX1x[0], "display", "none")
            })
        }
    }();
    l1x.bGF6z = function() {
        var bz1x = {
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
        return function(hZ4d) {
            return k1x.AT0x(bz1x, hZ4d)
        }
    }();
    l1x.yI9z = function(bA1x) {
        if (k1x.Ex1x(bA1x))
            bA1x = bA1x.getTime();
        var eV3x = new Date
          , kp5u = eV3x.getTime() - bA1x;
        if (kp5u <= 6e4)
            return "刚刚";
        var nI6C = eV3x.getHours() * 36e5 + eV3x.getMinutes() * 6e4 + eV3x.getSeconds() * 1e3;
        if (kp5u <= nI6C) {
            if (kp5u < 36e5) {
                var FY1x = Math.floor(kp5u / 6e4);
                return FY1x + "分钟前"
            }
            return k1x.ig4k(bA1x, "HH:mm")
        } else {
            if (kp5u < nI6C + 864e5) {
                return "昨天" + k1x.ig4k(bA1x, "HH:mm")
            } else {
                var gB3x = eV3x.getFullYear()
                  , Ri5n = new Date(gB3x,0,1);
                var nI6C = eV3x.getTime() - Ri5n.getTime();
                if (kp5u < nI6C) {
                    return k1x.ig4k(bA1x, "M月d日 HH:mm")
                }
                return k1x.ig4k(bA1x, "yyyy年M月d日")
            }
        }
    }
    ;
    l1x.czW8O = function(bA1x) {
        if (k1x.Ex1x(bA1x))
            bA1x = bA1x.getTime();
        var eV3x = new Date
          , kp5u = eV3x.getTime() - bA1x;
        var nI6C = eV3x.getHours() * 36e5 + eV3x.getMinutes() * 6e4 + eV3x.getSeconds() * 1e3;
        if (kp5u <= nI6C) {
            return "今天" + k1x.ig4k(bA1x, "HH:mm")
        } else {
            if (kp5u < nI6C + 864e5) {
                return "昨天" + k1x.ig4k(bA1x, "HH:mm")
            } else {
                return k1x.ig4k(bA1x, "yy-MM-dd HH:mm")
            }
        }
    }
    ;
    l1x.czV8N = function(bA1x) {
        if (k1x.Ex1x(bA1x))
            bA1x = bA1x.getTime();
        var eV3x = new Date
          , kp5u = eV3x.getTime() - bA1x;
        if (kp5u <= 6e4)
            return "刚刚";
        var nI6C = eV3x.getHours() * 36e5 + eV3x.getMinutes() * 6e4 + eV3x.getSeconds() * 1e3;
        if (kp5u <= nI6C) {
            if (kp5u < 36e5) {
                var FY1x = Math.floor(kp5u / 6e4);
                return FY1x + "分钟前"
            }
            return k1x.ig4k(bA1x, "HH:mm")
        } else {
            if (kp5u < nI6C + 864e5) {
                return "昨天" + k1x.ig4k(bA1x, "HH:mm")
            } else if (kp5u < nI6C + 864e5 * 6) {
                var gB3x = eV3x.getFullYear()
                  , Ri5n = new Date(gB3x,0,1);
                var nI6C = eV3x.getTime() - Ri5n.getTime();
                if (kp5u < nI6C) {
                    return k1x.ig4k(bA1x, "M月d日 HH:mm")
                }
                return k1x.ig4k(bA1x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    }
    ;
    l1x.Xv7o = function() {
        var df2x = /\{(.*?)\}/gi;
        return function(oP6J, j1x) {
            return (oP6J || "").replace(df2x, function($1, $2) {
                var D1x = j1x[$2];
                return D1x == null ? $1 : D1x
            })
        }
    }();
    l1x.fq3x = function() {
        var bf1x = Array.prototype.slice.call(arguments, 0)
          , oP6J = bf1x.shift();
        if (oP6J) {
            return oP6J.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bf1x.length ? bf1x[$2] : $1
            })
        }
        return ""
    }
    ;
    l1x.Lk3x = function(i1x, eb3x, kw5B) {
        return "";
        kw5B = kw5B || " - ";
        if (i1x && i1x.length) {
            return kw5B + (!!eb3x ? '<span class="' + eb3x + '">' + i1x[0] + "</span>" : i1x[0])
        }
        return ""
    }
    ;
    l1x.bHE7x = function() {
        if (window.getSelection) {
            var rQ7J = window.getSelection();
            if (rQ7J && rQ7J.focusNode && rQ7J.focusNode.tagName) {
                var BT0x = a9j.dm2x(rQ7J.focusNode);
                for (var i = 0, zg9X; i < BT0x.length; ++i) {
                    zg9X = BT0x[i].tagName;
                    if (!zg9X)
                        continue;
                    zg9X = zg9X.toLowerCase();
                    if (zg9X == "textarea" || zg9X == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var dd2x = document.selection.createRange();
            if (dd2x) {
                var g1x = dd2x.parentElement();
                if (g1x && g1x.tagName) {
                    var zg9X = g1x.tagName.toLowerCase();
                    if (zg9X == "textarea" || zg9X == "input")
                        return !0
                }
            }
        }
        return !1
    }
    ;
    l1x.BS0x = function(fB3x) {
        if (/^[A-Z]\:\\/i.test(fB3x)) {
            fB3x = fB3x.split("\\")
        } else {
            fB3x = fB3x.split("/")
        }
        fB3x = fB3x[fB3x.length - 1];
        return fB3x
    }
    ;
    l1x.czU8M = function() {
        var DN1x = [13, 17, 34, 19, 18, 21];
        return function(C1x) {
            var bs1x = (C1x || "").split("_");
            return {
                type: DN1x[bs1x[2]] || -1,
                id: bs1x[3] || ""
            }
        }
    }();
    l1x.bIQ7J = function(gv3x) {
        if (!gv3x) {
            return true
        }
        for (var k in gv3x) {
            return false
        }
        return true
    }
    ;
    l1x.blZ1x = function(dq2x) {
        if (!dq2x) {
            return ""
        }
        if (4 == dq2x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dq2x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dq2x.expertTags && dq2x.expertTags.length || !l1x.bIQ7J(dq2x.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
    ;
    l1x.Rc5h = function(hM4Q) {
        if (!hM4Q)
            return "";
        var ds2x = hM4Q.length
          , ip4t = [];
        ip4t[0] = ds2x / 3 | 0;
        ip4t[1] = ip4t[0] + ((ds2x - ip4t[0]) / 2 | 0);
        return hM4Q.substring(0, ip4t[0]) + hM4Q.substring(ip4t[0], ip4t[1]).replace(/\d/g, "*") + hM4Q.substring(ip4t[1], ds2x)
    }
    ;
    l1x.cFD9u = function(r1x, cB1x) {
        return (r1x % cB1x + cB1x) % cB1x
    }
    ;
    l1x.bmh1x = function() {
        var DN1x = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(C1x) {
            var bs1x = (C1x || "").split("_")
              , m1x = {
                type: DN1x[bs1x[2]] || -1,
                id: bs1x[3] || ""
            };
            if (m1x.type == "event") {
                m1x.uid = bs1x[4] || "";
                return "/" + m1x.type + "?id=" + m1x.id + "&uid=" + m1x.uid
            }
            return "/" + m1x.type + "?id=" + m1x.id
        }
    }();
    l1x.bmj1x = function() {
        var DN1x = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(C1x) {
            var bs1x = (C1x || "").split("_");
            return DN1x[bs1x[2]] || "资源"
        }
    }();
    l1x.czR8J = function(bv1x) {
        var qs = bv1x.length > 0 ? bv1x.substring(1) : ""
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
    l1x.bmk2x = function(nV6P, QS5X) {
        var WY7R = 0
          , eA3x = new Array;
        k1x.bd1x(nV6P, function(X1x, r1x) {
            var cy1x = a9j.dj2x("img");
            cy1x.src = X1x;
            h1x.s1x(cy1x, "load", function(r1x, d1x) {
                eA3x[r1x] = 1;
                WY7R++;
                if (WY7R == nV6P.length)
                    QS5X(nV6P, eA3x)
            }
            .f1x(this, r1x));
            h1x.s1x(cy1x, "error", function(d1x, r1x) {
                eA3x[r1x] = 0;
                WY7R++;
                if (WY7R == nV6P.length)
                    QS5X(nV6P, eA3x)
            }
            .f1x(this, r1x))
        })
    }
    ;
    l1x.Ld3x = function(i1x, dZ3x) {
        var m1x = [];
        k1x.bd1x(i1x, function(p1x, r1x, P1x) {
            m1x.push(dZ3x(p1x, r1x, P1x))
        });
        return m1x
    }
    ;
    l1x.bac8U = function(i1x, dZ3x, P1x) {
        var m1x = [];
        k1x.bd1x(i1x, function(p1x, r1x) {
            if (dZ3x.call(P1x, p1x, r1x, i1x)) {
                m1x.push(p1x)
            }
        });
        return m1x
    }
    ;
    l1x.bJH7A = function(bo1x) {
        return k1x.dG2x((bo1x || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    var czO8G = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l1x.czN8F = function(bo1x) {
        return k1x.AT0x(czO8G, bo1x)
    }
    ;
    l1x.bmo2x = function(bj1x) {
        if (bj1x.transNames && bj1x.transNames.length) {
            return bj1x.transNames[0]
        } else if (bj1x.alias && bj1x.alias.length) {
            return bj1x.alias[0]
        }
    }
    ;
    l1x.bmp2x = function(SD6x) {
        if (SD6x) {
            return SD6x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
    ;
    l1x.bmq2x = function(g1x) {
        var g1x = a9j.B1x(g1x)
          , cI2x = g1x && g1x.getElementsByTagName("textarea")[0]
          , K1x = a9j.t1x(g1x, "key")
          , bmv2x = a9j.t1x(g1x, "simple") == "1"
          , czM8E = a9j.t1x(g1x, "pvnamed") == "1"
          , czL8D = q1x.xc9T.gg3x();
        if (!(g1x && cI2x && K1x))
            return;
        var Wy7r, bmE2x, Wu7n;
        Wy7r = a9j.H1x(a9j.B1x("m-playlist"), "j-img");
        k1x.bd1x(Wy7r, function(iZ4d) {
            if (!Wu7n && a9j.t1x(iZ4d, "key")) {
                Wu7n = a9j.t1x(iZ4d, "key");
                iZ4d.removeAttribute("data-key")
            }
        });
        Wy7r = a9j.H1x(a9j.B1x("m-playlist"), "m-info");
        k1x.bd1x(Wy7r, function(iZ4d) {
            if (!bmE2x && iZ4d.id && iZ4d.id.indexOf("auto-id-") == 0) {
                bmE2x = iZ4d.id.slice(8, 12)
            }
        });
        var D1x = cI2x.value || cI2x.defaultValue;
        if (Wu7n) {
            D1x = decodeURIComponent(k1x.czK8C(D1x, "param=" + bmE2x + Wu7n))
        }
        D1x = JSON.parse(D1x);
        if (czM8E) {
            l1x.czH8z(D1x)
        }
        if (bmv2x) {
            D1x = l1x.FO1x(D1x)
        }
        czL8D.vm8e(K1x, D1x);
        g1x.innerHTML = "";
        return K1x
    }
    ;
    l1x.czG8y = function(pL6F) {
        if (!pL6F.onbeforelistload) {
            pL6F.onbeforelistload = function(d1x) {
                d1x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pL6F.onemptylist) {
            pL6F.onemptylist = function(d1x) {
                d1x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pL6F.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pL6F
    }
    ;
    l1x.czH8z = function(hB4F) {
        k1x.bd1x(hB4F, function(bO1x) {
            bO1x.privilege = bO1x.pv;
            delete bO1x.pv
        })
    }
    ;
    l1x.FO1x = function(im4q) {
        if (k1x.eL3x(im4q)) {
            var dF2x = [];
            k1x.bd1x(im4q, function(bmv2x) {
                dF2x.push(bLp8h(bmv2x))
            });
            return dF2x
        } else {
            return bLp8h(im4q)
        }
        function bLp8h(im4q) {
            if (!im4q)
                return null;
            var dF2x = {
                album: im4q.al,
                alias: im4q.alia || im4q.ala || [],
                artists: im4q.ar || [],
                commentThreadId: "R_SO_4_" + im4q.id,
                copyrightId: im4q.cp || 0,
                duration: im4q.dt || 0,
                id: im4q.id,
                mvid: im4q.mv || 0,
                name: im4q.name || "",
                cd: im4q.cd,
                position: im4q.no || 0,
                ringtone: im4q.rt,
                rtUrl: im4q.rtUrl,
                status: im4q.st || 0,
                pstatus: im4q.pst || 0,
                fee: im4q.fee || 0,
                version: im4q.v || 0,
                eq: im4q.eq,
                songType: im4q.t || 0,
                mst: im4q.mst,
                score: im4q.pop || 0,
                ftype: im4q.ftype,
                rtUrls: im4q.rtUrls,
                transNames: im4q.tns,
                privilege: im4q.privilege,
                lyrics: im4q.lyrics
            };
            return dF2x
        }
    }
    ;
    l1x.cFE9v = function() {
        var g1x = a9j.oc6W('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g1x);
        h1x.s1x(g1x, "click", function(d1x) {
            h1x.bg1x(d1x);
            a9j.cK2x(g1x)
        })
    }
    ;
    l1x.iJ4N = function(cz1x) {
        if (cz1x < 1e5) {
            return cz1x
        } else if (cz1x < 1e8) {
            return Math.floor(cz1x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cz1x / 1e7) / 10 + "亿"
        }
    }
    ;
    l1x.vF8x = function(cz1x, cI2x) {
        return "<i>" + (cz1x ? "(" + cz1x + ")" : cI2x) + "</i>"
    }
    ;
    l1x.bLR8J = function(u1x, id4h) {
        var e1x = {};
        if (!k1x.lQ5V(id4h)) {
            return e1x
        }
        switch (parseInt(u1x)) {
        case 17:
            e1x.title = id4h.name;
            e1x.author = (id4h.radio || []).name;
            e1x.picUrl = id4h.coverUrl;
            e1x.category = id4h.radio.category;
            break;
        case 19:
            e1x.title = id4h.name;
            e1x.author = l1x.xV9M(id4h.artists);
            e1x.authors = l1x.xV9M(id4h.artists, " / ");
            e1x.picUrl = id4h.picUrl;
            break;
        case 13:
            e1x.title = id4h.name;
            e1x.author = (id4h.creator || []).nickname;
            e1x.picUrl = id4h.coverImgUrl;
            break;
        case 18:
            e1x.title = id4h.name;
            e1x.author = l1x.xV9M(id4h.artists);
            e1x.picUrl = (id4h.album || []).picUrl;
            break;
        case 20:
            e1x.title = id4h.name;
            e1x.author = "";
            e1x.picUrl = id4h.img1v1Url;
            break;
        case 21:
            e1x.title = id4h.name;
            e1x.author = id4h.artistName;
            e1x.authors = l1x.xV9M(id4h.artists, " / ");
            e1x.picUrl = id4h.newCover || id4h.cover;
            break;
        case 70:
            e1x.title = id4h.name;
            e1x.author = (id4h.dj || []).nickname;
            e1x.picUrl = id4h.picUrl;
            e1x.category = id4h.category;
            break;
        default:
            break
        }
        return e1x
    }
    ;
    l1x.bMd8V = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
    ;
    l1x.Qs5x = function(ex3x, nM6G, e1x) {
        var bJ1x, bf1x, m1x;
        var gQ3x = null;
        var vL8D = 0;
        if (!e1x)
            e1x = {};
        var xP9G = function() {
            vL8D = e1x.leading === false ? 0 : +(new Date);
            gQ3x = null;
            m1x = ex3x.apply(bJ1x, bf1x);
            if (!gQ3x)
                bJ1x = bf1x = null
        };
        return function() {
            var eV3x = +(new Date);
            if (!vL8D && e1x.leading === false)
                vL8D = eV3x;
            var Hz2x = nM6G - (eV3x - vL8D);
            bJ1x = this;
            bf1x = arguments;
            if (Hz2x <= 0 || Hz2x > nM6G) {
                if (gQ3x) {
                    clearTimeout(gQ3x);
                    gQ3x = null
                }
                vL8D = eV3x;
                m1x = ex3x.apply(bJ1x, bf1x);
                if (!gQ3x)
                    bJ1x = bf1x = null
            } else if (!gQ3x && e1x.trailing !== false) {
                gQ3x = setTimeout(xP9G, Hz2x)
            }
            return m1x
        }
    }
    ;
    l1x.KX3x = function(ex3x, nM6G, oL6F) {
        var gQ3x, bf1x, bJ1x, BL0x, m1x;
        var xP9G = function() {
            var gu3x = new Date - BL0x;
            if (gu3x < nM6G && gu3x >= 0) {
                gQ3x = setTimeout(xP9G, nM6G - gu3x)
            } else {
                gQ3x = null;
                if (!oL6F) {
                    m1x = ex3x.apply(bJ1x, bf1x);
                    if (!gQ3x)
                        bJ1x = bf1x = null
                }
            }
        };
        return function() {
            bJ1x = this;
            bf1x = arguments;
            BL0x = new Date;
            var Qq5v = oL6F && !gQ3x;
            if (!gQ3x)
                gQ3x = setTimeout(xP9G, nM6G);
            if (Qq5v) {
                m1x = ex3x.apply(bJ1x, bf1x);
                bJ1x = bf1x = null
            }
            return m1x
        }
    }
    ;
    l1x.Qo5t = function(g1x, hu4y) {
        if (g1x) {
            var g1x = g1x.firstElementChild;
            if (g1x) {
                g1x.firstElementChild && (g1x = g1x.firstElementChild);
                g1x.setAttribute("xlink:href", "/style/pc/svg/" + hu4y)
            }
        }
    }
    ;
    l1x.bNt8l = function(eq3x) {
        if (!eq3x || !eq3x.length) {
            return
        }
        eq3x = /^#(.+?)#$/.exec(eq3x)[1];
        eq3x = eq3x.replace(/\s/g, " ");
        v1x.bm1x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k1x.cF2x({
                actname: eq3x
            }),
            onload: function(Q1x) {
                if (!Q1x || Q1x.code != 200 || !Q1x.act) {
                    n1x.Z1x.J1x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q1x.act.actId)
                }
            },
            onerror: function(bZ1x) {
                n1x.Z1x.J1x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
    ;
    l1x.czE8w = function(eq3x) {
        if (!eq3x || !eq3x.length) {
            return
        }
        var Qn5s = location.host;
        eq3x = /^#(.+?)#$/.exec(eq3x)[1];
        eq3x = eq3x.replace(/\s/g, " ");
        v1x.bm1x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k1x.cF2x({
                actname: eq3x
            }),
            onload: function(Q1x) {
                if (!Q1x || Q1x.code != 200 || !Q1x.act) {
                    cw1x.il4p("该话题暂未创建")
                } else {
                    cw1x.Cy0x(Qn5s + "/activity?id=" + Q1x.act.actId)
                }
            },
            onerror: function(bZ1x) {
                cw1x.il4p("操作失败，请稍后再试")
            }
        })
    }
    ;
    l1x.bmJ2x = function(ya9R, rX7Q) {
        if (!ya9R || !rX7Q)
            return false;
        if (ya9R == rX7Q)
            return true;
        return l1x.bmJ2x(ya9R, rX7Q.parentNode)
    }
    ;
    a9j.cH2x = function(bI1x, iO4S) {
        if (!bI1x)
            return null;
        if (!iO4S)
            return bI1x.firstChild;
        return a9j.H1x(bI1x, iO4S)[0]
    }
    ;
    l1x.bOt8l = function(hZ4d) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hZ4d)
    }
    ;
    l1x.bOy8q = function(hZ4d, Qm5r) {
        Qm5r = Qm5r || "86";
        if (Qm5r == "86")
            return /^\d{11}$/.test(hZ4d);
        return /^\d+$/.test(hZ4d)
    }
    ;
    l1x.cFF9w = function(wa8S) {
        if (!wa8S) {
            return "0b"
        }
        var czB8t = ["Bytes", "KB", "MB", "GB"];
        var bc1x = Math.floor(Math.log(wa8S) / Math.log(1024));
        return (wa8S / Math.pow(1024, Math.floor(bc1x))).toFixed(bc1x == 1 ? 0 : 1) + czB8t[bc1x]
    }
    ;
    l1x.bPx9o = function(dL2x, fr3x, czA8s) {
        if (!dL2x)
            return dL2x;
        var ds2x = k1x.fy3x(dL2x);
        if (ds2x <= fr3x)
            return dL2x;
        var bmL2x = ds2x - dL2x.length
          , bmN2x = dL2x.length - bmL2x;
        var fC3x = Math.ceil(fr3x / 2)
          , czy8q = fr3x
          , bPX9O = 0;
        if (bmL2x < fC3x)
            fC3x = fr3x - bmL2x;
        if (bmN2x < fr3x)
            fr3x = bmN2x + Math.ceil((fr3x - bmN2x) / 2);
        while (fC3x <= fr3x) {
            bPX9O = k1x.fy3x(dL2x.substr(0, fC3x));
            var bmO2x = czy8q - bPX9O;
            if (bmO2x == 0)
                break;
            if (bmO2x == 1) {
                var czx8p = k1x.fy3x(dL2x.charAt(fC3x));
                if (czx8p == 1) {
                    fC3x++;
                    break
                } else {
                    break
                }
            }
            fC3x += Math.floor(bmO2x / 2)
        }
        return dL2x.substr(0, fC3x) + (!!czA8s ? "" : "...")
    }
    ;
    l1x.czv8n = function(bq1x) {
        bq1x = bq1x || 10;
        var cM2x = "";
        for (var i = 0; i < bq1x; i++) {
            cM2x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cM2x
    }
    ;
    var czu8m = /([A-Za-z0-9 \.\-\(\)\!\?])/
      , czt8l = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/
      , czs8k = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQI0x = function(czr8j) {
        var bq1x = k1x.Bj0x(1, 5)
          , czq8i = Math.random() < .5
          , iR4V = "";
        if (czr8j) {
            if (czq8i) {
                while (bq1x >= 0) {
                    iR4V += czs8k[k1x.Bj0x(0, 500)];
                    bq1x--
                }
            } else {
                iR4V = l1x.czv8n(bq1x)
            }
        } else {
            iR4V = k1x.Sj6d(bq1x)
        }
        return '<div class="soil">' + iR4V + "</div>"
    };
    l1x.blO1x = function(er3x) {
        er3x = k1x.AU0x(er3x);
        try {
            var bq1x = er3x.length
              , r1x = k1x.Bj0x(1, bq1x - 1);
            while (r1x < bq1x) {
                if (czt8l.test(er3x.charAt(r1x))) {
                    return k1x.dG2x(er3x.slice(0, r1x)) + bQI0x(true) + k1x.dG2x(er3x.slice(r1x))
                } else if (czu8m.test(er3x.charAt(r1x))) {
                    return k1x.dG2x(er3x.slice(0, r1x)) + bQI0x() + k1x.dG2x(er3x.slice(r1x))
                } else {
                    r1x++
                }
            }
            return k1x.dG2x(er3x)
        } catch (e) {
            return k1x.dG2x(er3x)
        }
    }
    ;
    l1x.bfk0x = function(lp5u, mu5z) {
        return "//nos.netease.com/" + lp5u + "/" + mu5z
    }
    ;
    l1x.czo8g = function(fB3x) {
        var dQ2x = /(.+)(\.[^\.]+$)/.exec(fB3x);
        return dQ2x ? {
            filename: dQ2x[1],
            suffix: dQ2x[2]
        } : {
            filename: fB3x || "",
            suffix: ""
        }
    }
    ;
    l1x.bRa0x = function(bs1x, czl8d) {
        var dF2x = [];
        k1x.bd1x(bs1x, function(hY4c) {
            dF2x.push(czl8d(hY4c))
        });
        return dF2x
    }
    ;
    var czk8c = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l1x.bRh0x = function(ys9j) {
        var j1x = NEJ.X({}, ys9j);
        k1x.eI3x(ys9j, function(p1x, K1x) {
            var bRp0x = czk8c[K1x];
            if (bRp0x) {
                j1x[bRp0x] = p1x
            }
        });
        var PT5Y = ys9j.creator || [];
        if (!k1x.eL3x(PT5Y)) {
            PT5Y = [PT5Y]
        }
        if (PT5Y) {
            j1x.artists = [];
            k1x.bd1x(PT5Y, function(p1x) {
                j1x.artists.push({
                    name: p1x.nickname || p1x.userName,
                    id: p1x.userId
                })
            })
        }
        if (!!ys9j.aliaName) {
            j1x.alias = [ys9j.aliaName]
        }
        if (!!ys9j.transName) {
            j1x.transNames = [ys9j.transName]
        }
        return j1x
    }
    ;
    l1x.czi8a = function(X1x) {
        return (X1x || "").replace(/^https?:/, "")
    }
    ;
    l1x.Fh1x = function(cM2x) {
        if (!k1x.fG3x(cM2x))
            return cM2x;
        var dF2x = null;
        try {
            dF2x = JSON.parse(cM2x)
        } catch (_e) {}
        return dF2x
    }
    ;
    var czf8X = '<span class="s-fc7 f-tdn">${value}</span>';
    l1x.cze8W = function(cI2x, tx7q, e1x) {
        e1x = e1x || {};
        if (!tx7q) {
            return k1x.dG2x(cI2x)
        }
        cI2x = k1x.AU0x(cI2x);
        var qc6W = []
          , bs1x = null
          , Qp5u = new RegExp(l1x.bGF6z(tx7q),"gi")
          , oP6J = e1x.tpl || czf8X;
        while (bs1x = Qp5u.exec(cI2x)) {
            var dQ2x = {
                html: "",
                before: bs1x.index - 1,
                after: bs1x.index + bs1x[0].length
            };
            var EE1x = a9j.eB3x(oP6J);
            dQ2x.html = a9j.cc1x(EE1x, {
                value: k1x.dG2x(bs1x[0])
            });
            qc6W.push(dQ2x)
        }
        var blI1x = qc6W.length
          , ky5D = {
            before: cI2x.length - 1,
            after: 0
        }
          , dF2x = "";
        for (var i = 0; i <= blI1x; i++) {
            var hx4B, fR3x;
            hx4B = (qc6W[i - 1] || ky5D).after;
            fR3x = (qc6W[i] || ky5D).before;
            if (fR3x >= hx4B && hx4B >= 0 && fR3x <= cI2x.length - 1) {
                dF2x += k1x.dG2x(cI2x.substring(hx4B, fR3x + 1))
            }
            if (qc6W[i]) {
                dF2x += qc6W[i].html
            }
        }
        return dF2x
    }
    ;
    l1x.qg6a = function() {
        if (!window.WM) {
            var g1x = document.createElement("script");
            a9j.gN3x(g1x, "type", "text/javascript");
            a9j.gN3x(g1x, "src", "https://acstatic-dun.126.net/tool.min.js");
            g1x.onload = function(data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function(instance) {
                        window.WM = instance
                    }
                })
            }
            ;
            document.body.appendChild(g1x)
        }
    }
    ;
    l1x.wD8v = function(ob6V) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", ob6V)
        }
    }
    ;
    l1x.BE0x = function(ob6V) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", ob6V)
        }
    }
}
)();
(function() {
    var k1x = NEJ.P("nej.u");
    function czb8T() {
        var BD0x = function(ia4e) {
            if (ia4e < -128) {
                return BD0x(128 - (-128 - ia4e))
            } else if (ia4e >= -128 && ia4e <= 127) {
                return ia4e
            } else if (ia4e > 127) {
                return BD0x(-129 + ia4e - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cza8S = function(ia4e, bi1x) {
            return BD0x(ia4e + bi1x)
        };
        var cyZ8R = function(beW0x, bmW2x) {
            if (beW0x == null) {
                return null
            }
            if (bmW2x == null) {
                return beW0x
            }
            var qS7L = [];
            var cyY8Q = bmW2x.length;
            for (var i = 0, bq1x = beW0x.length; i < bq1x; i++) {
                qS7L[i] = cza8S(beW0x[i], bmW2x[i % cyY8Q])
            }
            return qS7L
        };
        var cyX8P = function(beQ0x) {
            if (beQ0x == null) {
                return beQ0x
            }
            var qS7L = [];
            var cyU8M = beQ0x.length;
            for (var i = 0, bq1x = cyU8M; i < bq1x; i++) {
                qS7L[i] = BD0x(0 - beQ0x[i])
            }
            return qS7L
        };
        var cyR8J = function(bmY2x, PO5T) {
            bmY2x = BD0x(bmY2x);
            PO5T = BD0x(PO5T);
            return BD0x(bmY2x ^ PO5T)
        };
        var bTa0x = function(PN5S, bna2x) {
            if (PN5S == null || bna2x == null || PN5S.length != bna2x.length) {
                return PN5S
            }
            var qS7L = [];
            var cyQ8I = PN5S.length;
            for (var i = 0, bq1x = cyQ8I; i < bq1x; i++) {
                qS7L[i] = cyR8J(PN5S[i], bna2x[i])
            }
            return qS7L
        };
        var bTp0x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cyP8H = function(dy2x) {
            var KN2x = [];
            KN2x.push(bTp0x[dy2x >>> 4 & 15]);
            KN2x.push(bTp0x[dy2x & 15]);
            return KN2x.join("")
        };
        var bTx0x = function(wa8S) {
            var bq1x = wa8S.length;
            if (wa8S == null || bq1x < 0) {
                return new String("")
            }
            var KN2x = [];
            for (var i = 0; i < bq1x; i++) {
                KN2x.push(cyP8H(wa8S[i]))
            }
            return KN2x.join("")
        };
        var bTB0x = function(ben0x) {
            if (ben0x == null || ben0x.length == 0) {
                return ben0x
            }
            var bno2x = new String(ben0x);
            var qS7L = [];
            var bq1x = bno2x.length / 2;
            var bi1x = 0;
            for (var i = 0; i < bq1x; i++) {
                var oZ6T = parseInt(bno2x.charAt(bi1x++), 16) << 4;
                var pb6V = parseInt(bno2x.charAt(bi1x++), 16);
                qS7L[i] = BD0x(oZ6T + pb6V)
            }
            return qS7L
        };
        var bTM0x = function(cM2x) {
            if (cM2x == null || cM2x == undefined) {
                return cM2x
            }
            var PG5L = encodeURIComponent(cM2x);
            var wa8S = [];
            var bTU1x = PG5L.length;
            for (var i = 0; i < bTU1x; i++) {
                if (PG5L.charAt(i) == "%") {
                    if (i + 2 < bTU1x) {
                        wa8S.push(bTB0x(PG5L.charAt(++i) + "" + PG5L.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    wa8S.push(PG5L.charCodeAt(i))
                }
            }
            return wa8S
        };
        var cyM8E = function(wA8s) {
            var bc1x = 0;
            bc1x += (wA8s[0] & 255) << 24;
            bc1x += (wA8s[1] & 255) << 16;
            bc1x += (wA8s[2] & 255) << 8;
            bc1x += wA8s[3] & 255;
            return bc1x
        };
        var cFH9y = function(bc1x) {
            var wA8s = [];
            wA8s[0] = bc1x >>> 24 & 255;
            wA8s[1] = bc1x >>> 16 & 255;
            wA8s[2] = bc1x >>> 8 & 255;
            wA8s[3] = bc1x & 255;
            return wA8s
        };
        var cyI8A = function(cS2x, bnz2x, bq1x) {
            var dF2x = [];
            if (cS2x == null || cS2x.length == 0) {
                return dF2x
            }
            if (cS2x.length < bq1x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq1x; i++) {
                dF2x[i] = cS2x[bnz2x + i]
            }
            return dF2x
        };
        var bnA2x = function(cS2x, bnz2x, rJ7C, cyD8v, bq1x) {
            if (cS2x == null || cS2x.length == 0) {
                return rJ7C
            }
            if (rJ7C == null) {
                throw new Error("1004")
            }
            if (cS2x.length < bq1x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq1x; i++) {
                rJ7C[cyD8v + i] = cS2x[bnz2x + i]
            }
            return rJ7C
        };
        var cyA8s = function(bq1x) {
            var bs1x = [];
            for (var i = 0; i < bq1x; i++) {
                bs1x[i] = 0
            }
            return bs1x
        };
        var cyz8r = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var KH2x = 64;
        var bdJ9A = 64;
        var bVm1x = 4;
        var cyy8q = function(qZ7S) {
            var bVt1x = [];
            if (qZ7S == null || qZ7S == undefined || qZ7S.length == 0) {
                return cyA8s(bdJ9A)
            }
            if (qZ7S.length >= bdJ9A) {
                return cyI8A(qZ7S, 0, bdJ9A)
            } else {
                for (var i = 0; i < bdJ9A; i++) {
                    bVt1x[i] = qZ7S[i % qZ7S.length]
                }
            }
            return bVt1x
        };
        var cyx8p = function(bdI9z) {
            if (bdI9z == null || bdI9z.length % KH2x != 0) {
                throw new Error("1005")
            }
            var bnC2x = [];
            var bi1x = 0;
            var cyw8o = bdI9z.length / KH2x;
            for (var i = 0; i < cyw8o; i++) {
                bnC2x[i] = [];
                for (var j = 0; j < KH2x; j++) {
                    bnC2x[i][j] = bdI9z[bi1x++]
                }
            }
            return bnC2x
        };
        var cyv8n = function(bVM1x) {
            var oZ6T = bVM1x >>> 4 & 15;
            var pb6V = bVM1x & 15;
            var bi1x = oZ6T * 16 + pb6V;
            return cyz8r[bi1x]
        };
        var bVQ1x = function(bnH2x) {
            if (bnH2x == null) {
                return null
            }
            var byh4l = [];
            for (var i = 0, bq1x = bnH2x.length; i < bq1x; i++) {
                byh4l[i] = cyv8n(bnH2x[i])
            }
            return byh4l
        };
        var byi4m = function(KE2x, qZ7S) {
            if (KE2x == null) {
                return null
            }
            if (KE2x.length == 0) {
                return []
            }
            if (KE2x.length % KH2x != 0) {
                throw new Error("1005")
            }
            qZ7S = cyy8q(qZ7S);
            var bnM2x = qZ7S;
            var bnN2x = cyx8p(KE2x);
            var Pm4q = [];
            var cyu8m = bnN2x.length;
            for (var i = 0; i < cyu8m; i++) {
                var bnP2x = bVQ1x(bnN2x[i]);
                bnP2x = bVQ1x(bnP2x);
                var bnR2x = bTa0x(bnP2x, bnM2x);
                var cyt8l = cyZ8R(bnR2x, cyX8P(bnM2x));
                bnR2x = bTa0x(cyt8l, qZ7S);
                bnA2x(bnR2x, 0, Pm4q, i * KH2x, KH2x);
                bnM2x = bnN2x[i]
            }
            var byV5a = [];
            bnA2x(Pm4q, Pm4q.length - bVm1x, byV5a, 0, bVm1x);
            var bq1x = cyM8E(byV5a);
            if (bq1x > Pm4q.length) {
                throw new Error("1006")
            }
            var qS7L = [];
            bnA2x(Pm4q, 0, qS7L, 0, bq1x);
            return qS7L
        };
        var cys8k = function(bcT9K, K1x) {
            if (bcT9K == null) {
                return null
            }
            var byZ5e = new String(bcT9K);
            if (byZ5e.length == 0) {
                return []
            }
            var KE2x = bTB0x(byZ5e);
            if (K1x == null || K1x == undefined) {
                throw new Error("1007")
            }
            var qZ7S = bTM0x(K1x);
            return byi4m(KE2x, qZ7S)
        };
        this.cyr8j = function(bcT9K, K1x) {
            var boa2x = cys8k(bcT9K, K1x);
            var FA1x = new String(bTx0x(boa2x));
            var zO9F = [];
            var bob2x = FA1x.length / 2;
            var bi1x = 0;
            for (var i = 0; i < bob2x; i++) {
                zO9F.push("%");
                zO9F.push(FA1x.charAt(bi1x++));
                zO9F.push(FA1x.charAt(bi1x++))
            }
            return zO9F.join("")
        }
        ;
        k1x.czK8C = function(boe2x, K1x) {
            return k1x.cyq8i(k1x.cEe9V(boe2x), K1x)
        }
        ;
        k1x.cyq8i = function(boe2x, K1x) {
            var boa2x = byi4m(boe2x, bTM0x(K1x));
            var FA1x = new String(bTx0x(boa2x));
            var zO9F = [];
            var bob2x = FA1x.length / 2;
            var bi1x = 0;
            for (var i = 0; i < bob2x; i++) {
                zO9F.push("%");
                zO9F.push(FA1x.charAt(bi1x++));
                zO9F.push(FA1x.charAt(bi1x++))
            }
            return zO9F.join("")
        }
    }
    window.settmusic = (new czb8T).cyr8j
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, I1x = c0x("nej.ut"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), v1x = c0x("nej.j"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), K1x = "Search-tracks_", b0x;
    q1x.fq3x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q1x) {
                return Q1x
            },
            onerror: function(Q1x, e1x) {
                if (Q1x.code == 407) {
                    e1x.onForbidden()
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
            filter: function(e1x, bh1x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cyp8h(parseInt(e1x.data.type)) || "suggest",
                    keyword: e1x.data.s,
                    offset: e1x.offset
                })
            },
            format: function(Q1x, e1x) {
                if (Q1x.abroad) {
                    try {
                        Q1x.result = JSON.parse(decodeURIComponent(settmusic(Q1x.result, q1x.sk)))
                    } catch (e) {}
                }
                Q1x.result = Q1x.result || {};
                var i1x, cB1x, hH4L = [], pH6B = e1x.data.s || "", gd3x = e1x.data.limit, u1x = parseInt(e1x.data.type) || 1, m1x = Q1x.result;
                switch (u1x) {
                case 1:
                    i1x = this.bzC5H(m1x.songs, e1x.data.hlpretag, e1x.data.hlposttag);
                    cB1x = m1x.songCount;
                    break;
                case 10:
                    i1x = m1x.albums;
                    cB1x = m1x.albumCount;
                    break;
                case 100:
                    i1x = m1x.artists;
                    cB1x = m1x.artistCount;
                    break;
                case 1e3:
                    i1x = m1x.playlists;
                    cB1x = m1x.playlistCount;
                    break;
                case 1002:
                    i1x = m1x.userprofiles;
                    cB1x = m1x.userprofileCount;
                    break;
                case 1004:
                    i1x = m1x.mvs;
                    cB1x = m1x.mvCount;
                    break;
                case 1014:
                    i1x = l1x.bRa0x(m1x.videos, l1x.bRh0x);
                    cB1x = m1x.videoCount;
                    break;
                case 1006:
                    i1x = this.bzC5H(m1x.songs, e1x.data.hlpretag, e1x.data.hlposttag);
                    cB1x = m1x.songCount;
                    break;
                case 1009:
                    var rf7Y = m1x.djRadios;
                    if (!!rf7Y) {
                        k1x.bd1x(rf7Y, function(D1x, r1x, cyo8g) {
                            D1x.xid = D1x.id;
                            D1x.id = D1x.id + "_rad"
                        });
                        if (rf7Y.length) {
                            this.vm8e("radio_search-" + e1x.data.s, rf7Y)
                        }
                    }
                    cB1x = Math.min(m1x.djprogramCount, 500);
                    i1x = m1x.djprograms || [];
                    if (e1x.data.isPub) {
                        k1x.nz5E(rf7Y, function(D1x, r1x, cyo8g) {
                            D1x.stype = 1;
                            i1x.unshift(D1x)
                        });
                        cB1x = Math.min(i1x.length, 500)
                    }
                    break
                }
                this.z1x("onsearchload", Q1x);
                if (i1x && i1x.length) {
                    for (var i = 0; i < gd3x; i++) {
                        if (i < i1x.length) {
                            hH4L.push(i1x[i])
                        } else {
                            hH4L.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cB1x || 0, pH6B.length < 3 ? 500 : 5e3),
                    list: hH4L
                }
            },
            onerror: function(Q1x, e1x) {
                e1x.onload(e1x, []);
                if (k1x.gF3x(e1x.onerror)) {
                    e1x.onerror(Q1x)
                }
            }
        }
    });
    q1x.FQ1x = NEJ.C();
    b0x = q1x.FQ1x.N1x(q1x.hJ4N);
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.cyn8f = function(K1x, e1x) {
        if (!K1x)
            return;
        if (!!this.bzJ5O)
            v1x.kn5s(this.bzJ5O);
        this.bzJ5O = this.cq1x("search-suggest", NEJ.X({
            data: {
                s: K1x,
                limit: 8
            }
        }, e1x))
    }
    ;
    b0x.cyk8c = function(K1x, e1x) {
        if (!K1x)
            return;
        this.cq1x("search-multimatch", NEJ.X({
            data: {
                s: K1x
            }
        }, e1x))
    }
    ;
    b0x.bzC5H = function() {
        var cyj8b = function(hv4z, bzO5T, bzR5W) {
            var cyi8a = hv4z.match(new RegExp(bzO5T + "(.+?)" + bzR5W,"gi"))
              , cz1x = 0;
            k1x.bd1x(cyi8a, function(p1x) {
                cz1x += p1x.replace(new RegExp(bzO5T,"g"), "").replace(new RegExp(bzR5W,"g"), "").length
            });
            return cz1x
        };
        return function(jz4D, cyh8Z, cyg8Y) {
            var bAe5j = [];
            k1x.bd1x(jz4D, function(bj1x, bc1x) {
                bj1x = l1x.FO1x(bj1x);
                var bck9b = bj1x.lyrics || [], ds2x = bck9b.length, jW4a = 0, cB1x = 4, bcj9a = {
                    l: 0,
                    v: 0
                }, bol2x;
                if (ds2x > 4) {
                    k1x.bd1x(bck9b, function(hv4z, r1x) {
                        var bAk5p = cyj8b(hv4z, cyh8Z, cyg8Y);
                        if (bAk5p > bcj9a.v) {
                            bcj9a.v = bAk5p;
                            bcj9a.l = r1x
                        }
                    });
                    jW4a = bcj9a.l;
                    jW4a = Math.max(jW4a, 0);
                    bol2x = ds2x - jW4a - 4;
                    if (bol2x < 0)
                        jW4a += bol2x;
                    bj1x.lrcAbstractEnd = jW4a + cB1x - 1
                } else {
                    bj1x.lrcAbstractEnd = ds2x - 1
                }
                bj1x.lrcAbstractStart = jW4a;
                bj1x.indexId = (bck9b && bck9b.length ? "L" : "NL") + bj1x.id;
                bAe5j.push(bj1x)
            });
            return bAe5j
        }
    }();
    b0x.cyp8h = function(u1x) {
        switch (u1x) {
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
        case 1014:
            return "video";
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
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), v1x = c0x("nej.j"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), E1x = c0x("nm.m"), n1x = c0x("nm.l"), dv2x = c0x("nm.i"), M1x = c0x("nm.m.sch"), b0x, L1x;
    var bcg9X = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M1x.OV4Z = NEJ.C();
    b0x = M1x.OV4Z.N1x(I1x.cJ2x);
    b0x.cx1x = function(g1x) {
        this.cE2x();
        this.bW1x(g1x);
        this.S1x = q1x.FQ1x.gg3x()
    }
    ;
    b0x.bW1x = function(g1x) {
        this.o1x = g1x;
        var i1x = a9j.H1x(g1x, "j-flag");
        this.eW3x = i1x[0];
        this.boq2x = i1x[1];
        this.cr1x = i1x[2];
        this.nv5A = i1x[3];
        h1x.s1x(this.eW3x, "input", this.gi3x.f1x(this));
        h1x.s1x(this.eW3x, "keyup", this.gi3x.f1x(this));
        h1x.s1x(this.eW3x, "focus", this.gP3x.f1x(this));
        h1x.s1x(this.boq2x, "click", this.gP3x.f1x(this));
        h1x.s1x(this.eW3x, "blur", this.bos2x.f1x(this));
        h1x.s1x(this.cr1x, "click", this.bbU9L.f1x(this));
        h1x.s1x(this.o1x, "keydown", this.boy2x.f1x(this));
        h1x.s1x(this.o1x, "keypress", this.bbA9r.f1x(this));
        h1x.s1x(this.nv5A, "mouseover", this.OK4O.f1x(this));
        h1x.s1x(this.nv5A, "mouseout", this.OK4O.f1x(this));
        if (this.eW3x.value) {
            this.eW3x.value = ""
        }
        if (this.eW3x.style.opacity != null) {
            this.eW3x.style.opacity = 1
        }
    }
    ;
    b0x.gi3x = function(d1x) {
        if (d1x.type == "keyup" && d1x.keyCode == 8 || d1x.keyCode == 46) {
            this.GA1x()
        } else if (d1x.type == "input" || d1x.type == "propertychange") {
            setTimeout(this.GA1x.f1x(this), 0)
        }
    }
    ;
    b0x.gP3x = function() {
        this.xY9P(this.boq2x, !1);
        a9j.y1x(this.o1x, "m-srch-fcs");
        this.eW3x.focus();
        this.GA1x();
        a9j.y1x((a9j.H1x("g-topbar", "j-showoff") || [])[0], "f-hide")
    }
    ;
    b0x.bos2x = function() {
        if (!this.eW3x.value) {
            this.xY9P(this.boq2x, !0)
        }
        var GD1x = a9j.H1x(this.nv5A, "slt");
        if (this.bbv9m(this.nv5A) && GD1x.length > 0 && a9j.t1x(GD1x[0], "type")) {
            var hu4y = GD1x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hu4y)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eW3x.value
                })
            }
            this.boB2x(GD1x[0].href)
        }
        this.xY9P(this.nv5A, !1);
        a9j.x1x(this.o1x, "m-srch-fcs")
    }
    ;
    b0x.xY9P = function(g1x, mf5k) {
        a9j.ba1x(g1x, "display", !mf5k ? "none" : "")
    }
    ;
    b0x.bbv9m = function(g1x) {
        return a9j.dh2x(g1x, "display") != "none"
    }
    ;
    b0x.GA1x = function() {
        var cyf8X = function(hZ4d) {
            hZ4d = k1x.AU0x(hZ4d);
            var eF3x = this.o1x.clientWidth > 250 ? 41 : 17;
            if (l1x.Rn5s(hZ4d) > eF3x) {
                hZ4d = l1x.BZ0x(hZ4d, eF3x) + "..."
            }
            return k1x.dG2x(hZ4d)
        };
        var bbr9i = function(m1x) {
            return m1x.songs && m1x.songs.length || m1x.albums && m1x.albums.length || m1x.artists && m1x.artists.length || m1x.playlists && m1x.playlists.length
        };
        var ob6V = function(tx7q, d1x) {
            if (!l1x.bGr6l(this.eW3x) || l1x.kl5q(this.eW3x.value)) {
                this.xY9P(this.nv5A, !1);
                return
            }
            d1x.keyword = k1x.dG2x(tx7q);
            var dV2x = a9j.cc1x("m-search-suggest", d1x, {
                mark: l1x.cze8W.ew3x(this, tx7q),
                cutStr: cyf8X.f1x(this)
            })
              , sR7K = d1x.result.order;
            this.nv5A.innerHTML = dV2x;
            this.xY9P(this.nv5A, bbr9i(d1x.result) ? !0 : !1);
            if (!!sR7K && !!sR7K.length && bcg9X[sR7K[0]]) {
                this.boC2x = {
                    keyword: tx7q,
                    type: bcg9X[sR7K[0]]
                }
            }
        };
        var cye8W = function() {
            this.xY9P(this.nv5A, !1);
            return
        };
        return function() {
            var D1x = this.eW3x.value;
            if (l1x.kl5q(D1x)) {
                this.xY9P(this.nv5A, !1);
                return
            }
            this.S1x.cyn8f(D1x, {
                onload: ob6V.f1x(this, D1x),
                onForbidden: cye8W.f1x(this)
            })
        }
    }();
    b0x.bbA9r = function(d1x) {
        if (d1x.keyCode != 13)
            return;
        var GD1x = a9j.H1x(this.nv5A, "slt");
        if (this.bbv9m(this.nv5A) && GD1x.length > 0) {
            this.boB2x(GD1x[0].href);
            this.xY9P(this.nv5A, !1);
            return
        }
        this.bbU9L();
        this.xY9P(this.nv5A, !1)
    }
    ;
    b0x.boy2x = function(d1x) {
        if (!this.bbv9m(this.nv5A))
            return;
        var i1x = a9j.H1x(this.nv5A, "xtag")
          , ds2x = i1x.length
          , r1x = k1x.di2x(i1x, function(p1x) {
            return a9j.bE1x(p1x, "slt")
        });
        switch (d1x.keyCode) {
        case 38:
            if (r1x >= 0)
                a9j.x1x(i1x[r1x], "slt");
            a9j.y1x(i1x[r1x <= 0 ? ds2x - 1 : r1x - 1], "slt");
            break;
        case 40:
            if (r1x >= 0)
                a9j.x1x(i1x[r1x], "slt");
            a9j.y1x(i1x[(r1x + 1) % ds2x], "slt");
            break
        }
    }
    ;
    b0x.OK4O = function(d1x) {
        if (!this.bbv9m(this.nv5A))
            return;
        var OH4L, F1x = h1x.W1x(d1x), i1x = a9j.H1x(this.nv5A, "xtag");
        if (F1x.tagName.toLowerCase() == "a")
            OH4L = F1x;
        else if (F1x.parentNode.tagName.toLowerCase() == "a")
            OH4L = F1x.parentNode;
        if (!OH4L)
            return;
        k1x.bd1x(i1x, function(p1x) {
            a9j.x1x(p1x, "slt");
            a9j.t1x(p1x, "type", "")
        });
        if (d1x.type == "mouseout")
            return;
        a9j.y1x(OH4L, "slt");
        a9j.t1x(OH4L, "type", "mouse")
    }
    ;
    b0x.bbU9L = function() {
        var dR2x = location.hash
          , r1x = dR2x.indexOf("?")
          , bv1x = k1x.hq4u(dR2x.substring(r1x + 1));
        bv1x.s = this.eW3x.value;
        if (l1x.kl5q(bv1x.s))
            return;
        if (!bv1x.type && this.boC2x && this.boC2x.keyword == bv1x.s) {
            bv1x.type = this.boC2x.type
        }
        this.boB2x("/search/#/?" + k1x.cF2x(bv1x));
        this.eW3x.blur()
    }
    ;
    b0x.boB2x = function(X1x) {
        if (location.dispatch2) {
            location.dispatch2(X1x)
        } else {
            location.href = X1x
        }
    }
    ;
    M1x.OV4Z.cyd8V = function() {
        var i1x = a9j.H1x(document.body, "j-suggest");
        k1x.bd1x(i1x, function(p1x) {
            new M1x.OV4Z(p1x)
        })
    }
    ;
    M1x.OV4Z.cyd8V()
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, I1x = c0x("nej.ut"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), v1x = c0x("nej.j"), q1x = c0x("nm.d"), b0x;
    q1x.fq3x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q1x) {
                return {
                    total: Q1x.size || 0,
                    list: Q1x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q1x) {
                return {
                    total: Q1x.size || 0,
                    list: Q1x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q1x) {
                return Q1x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q1x, e1x) {
                if (e1x.offset == 0) {
                    var pT6N = Q1x.data[0];
                    this.z1x("onfirstload", pT6N);
                    Q1x.data.splice(0, 1);
                    return Q1x.data
                } else {
                    return Q1x.data
                }
            }
        }
    });
    q1x.GQ1x = NEJ.C();
    b0x = q1x.GQ1x.N1x(q1x.hJ4N);
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.boD2x = function() {
        var tn7g = "LOCAL_FLAG";
        return function(u1x, cyb8T) {
            var j1x = this.Hk1x(tn7g, {});
            if (j1x[u1x]) {
                return true
            } else {
                if (!cyb8T) {
                    j1x[u1x] = true;
                    this.xu9l(tn7g, j1x)
                }
                return false
            }
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), boE2x;
    if (!!O1x.nY6S)
        return;
    O1x.nY6S = NEJ.C();
    boE2x = O1x.nY6S.N1x(O1x.cJ2x);
    boE2x.bl1x = function() {
        var cya8S = function(d1x) {
            d1x.matched = d1x.source == d1x.target
        };
        return function(e1x) {
            e1x.oncheck = e1x.oncheck || cya8S;
            this.bn1x(e1x);
            this.bU1x = e1x.list;
            this.js4w = e1x.dataset || "id";
            this.kD5I = e1x.selected || "js-selected"
        }
    }();
    boE2x.nN6H = function(D1x) {
        var F1x, d1x = {
            target: D1x
        };
        k1x.bd1x(this.bU1x, function(g1x) {
            delete d1x.matched;
            d1x.source = a9j.t1x(g1x, this.js4w);
            this.z1x("oncheck", d1x);
            if (!d1x.matched) {
                a9j.x1x(g1x, this.kD5I)
            } else {
                F1x = g1x;
                a9j.y1x(g1x, this.kD5I)
            }
        }, this);
        return F1x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), O1x = c0x("nej.ut"), qr6l;
    if (!!O1x.dg2x)
        return;
    O1x.dg2x = NEJ.C();
    qr6l = O1x.dg2x.N1x(O1x.cJ2x);
    qr6l.cx1x = function() {
        this.iS4W = {};
        this.cE2x();
        this.bL1x()
    }
    ;
    qr6l.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.boG2x = e1x.umi || "";
        this.Bi0x = e1x.dispatcher;
        this.Kp2x = e1x.composite || bb1x;
        this.bpw2x({
            onshow: this.eY3x.f1x(this),
            onhide: this.kt5y.f1x(this),
            onrefresh: this.eE3x.f1x(this),
            onmessage: this.qv6p.f1x(this),
            onbeforehide: this.cxZ8R.f1x(this)
        })
    }
    ;
    qr6l.bC1x = function() {
        delete this.boG2x;
        this.iS4W = {};
        this.bF1x()
    }
    ;
    qr6l.un8f = function(d1x) {
        if (!!d1x)
            d1x.stopped = !0
    }
    ;
    qr6l.bL1x = br1x;
    qr6l.eY3x = br1x;
    qr6l.kt5y = br1x;
    qr6l.eE3x = br1x;
    qr6l.qv6p = br1x;
    qr6l.cxZ8R = br1x;
    qr6l.ne5j = function(nn5s, bG1x, ff3x) {
        this.Bi0x.boJ2x({
            to: nn5s,
            mode: ff3x || 0,
            data: bG1x,
            from: this.boG2x
        })
    }
    ;
    qr6l.cFI9z = function(u1x, j1x) {
        this.Bi0x.Be0x(u1x, {
            from: this.boG2x,
            data: j1x
        })
    }
    ;
    qr6l.cFK9B = function() {
        this.Bi0x.mP5U.apply(this.Bi0x, arguments)
    }
    ;
    qr6l.cxT8L = function() {
        return this.iS4W
    }
    ;
    a9j.baI8A = function() {
        if (!!window.dispatcher) {
            dispatcher.bDB6v.apply(dispatcher, arguments)
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, br1x = NEJ.F, bb1x = NEJ.O, a9j = c0x("nej.e"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), yG9x;
    if (!!O1x.du2x)
        return;
    O1x.du2x = NEJ.C();
    yG9x = O1x.du2x.N1x(O1x.dg2x);
    yG9x.cxS8K = function(e1x) {
        var bI1x;
        if (!bI1x) {
            var j1x = e1x.input || bb1x;
            bI1x = a9j.B1x(j1x.parent)
        }
        if (!bI1x) {
            var j1x = e1x.data || bb1x;
            bI1x = a9j.B1x(j1x.parent)
        }
        if (!bI1x) {
            bI1x = a9j.B1x(e1x.parent)
        }
        return bI1x
    }
    ;
    yG9x.eY3x = function(e1x) {
        var bI1x = this.cxS8K(e1x);
        if (!!bI1x && !!this.o1x)
            bI1x.appendChild(this.o1x);
        this.gG3x(e1x);
        this.bDJ6D("onshow", e1x);
        this.eE3x(e1x)
    }
    ;
    yG9x.eE3x = function(e1x) {
        this.gj3x(e1x);
        this.bDJ6D("onrefresh", e1x)
    }
    ;
    yG9x.kt5y = function() {
        this.ls5x();
        this.cxR8J();
        a9j.mG5L(this.o1x)
    }
    ;
    yG9x.bDN6H = function() {
        var gH3x = /^onshow|onrefresh|delay$/;
        return function(ck1x) {
            return gH3x.test(ck1x)
        }
    }();
    yG9x.bDR6L = br1x;
    yG9x.bDJ6D = function() {
        var bDS6M = function(bv1x, e1x, ck1x, pQ6K) {
            if (this.bDN6H(pQ6K))
                return;
            if (!!bv1x)
                ck1x += (ck1x.indexOf("?") > 1 ? "&" : "?") + bv1x;
            var dn2x = this.bDR6L(pQ6K, e1x) || {};
            dn2x.location = e1x;
            dn2x.parent = this.iS4W[pQ6K];
            this.Bi0x.iy4C(ck1x, {
                input: dn2x
            })
        };
        return function(u1x, e1x) {
            if (!e1x.nodelay) {
                if (!!this.Kp2x.delay)
                    return;
                var bDX6R = this.Kp2x[u1x] || bb1x;
                if (bDX6R.delay)
                    return
            }
            var bv1x = k1x.cF2x(e1x.param) || "";
            if (u1x == "onrefresh") {
                k1x.eI3x(this.Kp2x, bDS6M.f1x(this, bv1x, e1x))
            }
            k1x.eI3x(bDX6R, bDS6M.f1x(this, bv1x, e1x))
        }
    }();
    yG9x.cxR8J = function() {
        var Di0x = function(ck1x, pQ6K) {
            if (!this.bDN6H(pQ6K))
                this.Bi0x.bt1x(ck1x)
        };
        return function() {
            k1x.eI3x(this.Kp2x, Di0x, this);
            k1x.eI3x(this.Kp2x.onshow, Di0x, this);
            k1x.eI3x(this.Kp2x.onrefresh, Di0x, this)
        }
    }()
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), I1x = c0x("nej.ut"), v1x = c0x("nej.j"), k1x = c0x("nej.u"), E1x = c0x("nm.m"), l1x = c0x("nm.x"), q1x = c0x("nm.d"), b0x, L1x;
    E1x.Ow4A = NEJ.C();
    b0x = E1x.Ow4A.N1x(I1x.cJ2x);
    b0x.cx1x = function() {
        this.cE2x();
        this.o1x = a9j.B1x("g-topbar");
        var i1x = a9j.H1x(this.o1x, "j-tflag");
        this.boM2x = i1x[0];
        this.HJ2x = i1x[1];
        this.bEe6Y = i1x[2];
        this.boP2x = i1x[3];
        this.cxQ8I = I1x.nY6S.A1x({
            list: this.boM2x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.boQ2x = I1x.nY6S.A1x({
            list: this.boP2x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX1x([[this.o1x, "click", this.Ot4x.f1x(this)], [this.HJ2x, "click", this.cL2x.f1x(this)], [this.HJ2x, "mouseout", this.bEs6m.f1x(this, 0)], [this.HJ2x, "mouseover", this.bEs6m.f1x(this, 1)]]);
        window.scrollTopbar = this.cxP8H.f1x(this);
        window.matchNav = this.bEx6r.f1x(this);
        window.polling = this.uC8u.f1x(this);
        this.boY2x = q1x.GQ1x.A1x();
        this.cxO8G();
        this.Kl2x();
        var bv1x = k1x.hq4u(location.href.split("?")[1]) || {};
        if (bv1x.market) {
            a9j.B1x("topbar-download-link").href = "/download?market=" + bv1x.market
        }
        var bpb2x = a9j.H1x(this.o1x, "j-showoff");
        if (bpb2x && !this.boY2x.boD2x("newMvSearch")) {
            a9j.x1x(bpb2x[0], "f-hide");
            window.setTimeout(function() {
                a9j.y1x(bpb2x[0], "f-hide")
            }, 5e3)
        }
        l1x.qg6a()
    }
    ;
    b0x.uC8u = function(d1x) {
        var dR2x = l1x.Lt3x();
        if (!/^\/msg/.test(dR2x)) {
            var wm8e = 0;
            wm8e += d1x.comment;
            wm8e += d1x.forward;
            wm8e += d1x.msg;
            wm8e += d1x.notice;
            if (wm8e > 0) {
                wm8e = wm8e > 99 ? "99+" : wm8e;
                this.Oo4s.innerText = wm8e;
                this.Kk2x.innerText = wm8e;
                a9j.x1x(this.Oo4s, "f-hide");
                a9j.x1x(this.Kk2x, "f-hide");
                this.baf8X = true
            } else {
                a9j.y1x(this.Oo4s, "f-hide");
                a9j.y1x(this.Kk2x, "f-hide");
                this.baf8X = false
            }
            var eS3x = "/at";
            if (d1x.notice)
                eS3x = "/notify";
            if (d1x.comment)
                eS3x = "/comment";
            if (d1x.msg > 0)
                eS3x = "/private";
            if (d1x.forward > 0)
                eS3x = "/at";
            this.Kk2x.parentNode.href = "/msg/#" + eS3x
        } else {
            this.Kk2x.parentNode.href = "javascript:;";
            a9j.y1x(this.Oo4s, "f-hide");
            a9j.y1x(this.Kk2x, "f-hide");
            this.baf8X = false
        }
        var i1x = a9j.H1x(this.boM2x, "j-t");
        if (!/^\/friend/.test(dR2x)) {
            if (i1x && i1x.length) {
                a9j.ba1x(i1x[0], "display", d1x.event > 0 ? "" : "none")
            }
        } else {
            a9j.ba1x(i1x[0], "display", "none")
        }
    }
    ;
    b0x.cL2x = function(d1x) {
        var g1x = h1x.W1x(d1x, "d:action");
        if (g1x) {
            switch (a9j.t1x(g1x, "action")) {
            case "login":
                h1x.cn1x(d1x);
                var u1x = a9j.t1x(g1x, "type");
                if (u1x) {
                    if (u1x == "sina" || u1x == "tencent") {
                        this.AX0x = g1x.href;
                        l1x.BE0x(this.la5f.f1x(this))
                    } else
                        top.login(u1x == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h1x.cn1x(d1x);
                top.logout();
                break;
            case "viewStore":
                if (!this.boY2x.boD2x("storeNew")) {
                    a9j.y1x(this.cFL9C, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.boY2x.boD2x("levelNew")) {
                    a9j.y1x(this.cFM9D, "f-vhide")
                }
                break
            }
        }
    }
    ;
    b0x.la5f = function(cR2x) {
        this.AX0x += "&checkToken=" + cR2x || "";
        top.open(this.AX0x)
    }
    ;
    b0x.Ot4x = function(d1x) {
        var g1x = h1x.W1x(d1x, "d:action");
        if (!g1x)
            return;
        var U1x = a9j.t1x(g1x, "action");
        switch (U1x) {
        case "bilog":
            var bpo2x = a9j.t1x(g1x, "logAction")
              , bpt2x = a9j.t1x(g1x, "logJson");
            window.log(bpo2x, bpt2x);
            break
        }
    }
    ;
    b0x.bEs6m = function(Kg2x, d1x) {
        if (this.bpy2x) {
            this.bpy2x.style.display = !Kg2x ? "none" : "";
            (Kg2x || !this.baf8X ? a9j.y1x : a9j.x1x).call(window, this.Oo4s, "f-hide")
        }
    }
    ;
    b0x.cxP8H = function(gc3x) {
        a9j.ba1x(this.o1x, "top", -gc3x + "px")
    }
    ;
    b0x.bEx6r = function(eS3x, cxL8D) {
        this.cxQ8I.nN6H(eS3x);
        if (eS3x == "discover") {
            a9j.y1x(this.bEe6Y, "f-hide");
            a9j.x1x(this.boP2x, "f-hide");
            window.g_topBarHeight = 105;
            this.boQ2x.nN6H(cxL8D)
        } else {
            a9j.x1x(this.bEe6Y, "f-hide");
            a9j.y1x(this.boP2x, "f-hide");
            window.g_topBarHeight = 75
        }
    }
    ;
    b0x.cxO8G = function() {
        var en3x = a9j.B1x("g_iframe");
        if (!en3x)
            return;
        var gA3x = en3x.contentWindow.document.getElementById("g_top");
        this.bEx6r(a9j.t1x(gA3x, "module"), a9j.t1x(gA3x, "sub"))
    }
    ;
    var ZF8x = {}
      , bFn6h = /\/\/\w+/
      , cxK8C = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bFn6h, "") !== b.replace(bFn6h, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b0x.cxG8y = function(ZD8v) {
        var nT6N = k1x.di2x(cxK8C, function(D1x, K1x) {
            if (k1x.gF3x(D1x)) {
                return D1x(ZD8v[K1x], ZF8x[K1x])
            } else {
                return ZD8v[K1x] !== ZF8x[K1x]
            }
        });
        ZF8x = ZD8v;
        return ZD8v[nT6N]
    }
    ;
    b0x.Kl2x = function() {
        var dq2x = GUser || {}
          , cxF8x = GUserAcc || {};
        if (dq2x && dq2x.userId) {
            var bFA6u = NEJ.X(dq2x, cxF8x);
            if (this.cxG8y(bFA6u)) {
                a9j.dz2x(this.HJ2x, "m-topbar-user-login", bFA6u)
            }
        } else {
            ZF8x = {};
            this.HJ2x.innerHTML = a9j.iE4I("m-topbar-user-unlogin");
            var i1x = a9j.H1x(this.boM2x, "j-t");
            a9j.ba1x(i1x[0], "display", "none")
        }
        a9j.x1x(this.HJ2x, "f-hide");
        this.baf8X = false;
        var i1x = a9j.H1x(this.HJ2x, "j-uflag");
        if (dq2x && dq2x.userId) {
            this.Oo4s = i1x.shift();
            this.bpy2x = i1x.shift();
            this.Kk2x = i1x.shift()
        } else {
            this.bpy2x = i1x.shift()
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h1x = c0x("nej.v"), I1x = c0x("nej.ut"), q1x = c0x("nm.d"), b0x, L1x;
    q1x.fq3x({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q1x) {
                h1x.z1x(q1x.te7X, "message", Q1x)
            }
        }
    });
    q1x.te7X = NEJ.C();
    b0x = q1x.te7X.N1x(q1x.hJ4N);
    b0x.Zu8m = function() {
        this.cq1x("polling-get", {})
    }
    ;
    b0x.uR8J = function() {
        var ei3x;
        return function() {
            if (!!ei3x)
                return;
            ei3x = window.setInterval(this.Zu8m.f1x(this), 1e5);
            this.Zu8m()
        }
    }();
    I1x.fI3x.A1x({
        event: "message",
        element: q1x.te7X
    })
}
)();
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
    }
    )("object" === typeof module ? module.exports : this.io = {}, this);
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
    }
    )("undefined" != typeof io ? io : module.exports, this);
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
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
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
    }
    )("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
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
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
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
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
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
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
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
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
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
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
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
            WebSocket.Zr8j(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.send = function() {
            var self = this
              , args = arguments;
            WebSocket.Zr8j(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.close = function() {
            WebSocket.NU4Y.length = 0;
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
                    WebSocket.bpH2x();
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
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
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
                            }
                            )()
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
                        }
                        )()
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
                    }
                    )()
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
                        }
                        )()
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
                    }
                    )()
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
                        }
                        )()
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
            self.gS3x = WebSocket.cxE8w++;
            WebSocket.bFQ6K[self.gS3x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.ma5f = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Zr8j(function() {
                    WebSocket.pt6n.create(self.gS3x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
        ;
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pt6n.send(this.gS3x, encodeURIComponent(data));
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
            WebSocket.pt6n.close(this.gS3x)
        }
        ;
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.ma5f)) {
                this.ma5f[type] = []
            }
            this.ma5f[type].push(listener)
        }
        ;
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.ma5f))
                return;
            var events = this.ma5f[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
        ;
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.ma5f[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
        ;
        WebSocket.prototype.cxD7w = function(flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFU6O(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFU6O("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cxA7t("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
        ;
        WebSocket.prototype.bFU6O = function(type) {
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
        WebSocket.prototype.cxA7t = function(type, data) {
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
        WebSocket.pt6n = null;
        WebSocket.bFQ6K = {};
        WebSocket.NU4Y = [];
        WebSocket.cxE8w = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Zr8j(function() {
                WebSocket.pt6n.loadManualPolicyFile(url)
            })
        }
        ;
        WebSocket.bpH2x = function() {
            if (WebSocket.pt6n)
                return;
            if (WebSocket.cxz7s) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cxz7s
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cxy7r()) {
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
        WebSocket.cFN9E = function() {
            setTimeout(function() {
                WebSocket.pt6n = document.getElementById("webSocketFlash");
                WebSocket.pt6n.setCallerUrl(location.href);
                WebSocket.pt6n.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.NU4Y.length; ++i) {
                    WebSocket.NU4Y[i]()
                }
                WebSocket.NU4Y = []
            }, 0)
        }
        ;
        WebSocket.cFO9F = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.pt6n.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFQ6K[events[i].webSocketId].cxD7w(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
        ;
        WebSocket.cFP9G = function(message) {
            console.log(decodeURIComponent(message))
        }
        ;
        WebSocket.dY3x = function(message) {
            console.error(decodeURIComponent(message))
        }
        ;
        WebSocket.Zr8j = function(task) {
            if (WebSocket.pt6n) {
                task()
            } else {
                WebSocket.NU4Y.push(task)
            }
        }
        ;
        WebSocket.cxy7r = function() {
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
                    WebSocket.bpH2x()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bpH2x()
                })
            }
        }
    }
    )();
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
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
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
        HTMLFile.prototype.c0x = function(data, doc) {
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
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
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
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c0x(msg)
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
        JSONPPolling.prototype.c0x = function(msg) {
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
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
}
)();
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
        if (!this.ef3x)
            this.ef3x = {};
        this.bGb6V = n
    }
    ;
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ef3x || !this.ef3x.error || isArray(this.ef3x.error) && !this.ef3x.error.length) {
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
        if (!this.ef3x)
            return false;
        var handler = this.ef3x[type];
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
        if (!this.ef3x)
            this.ef3x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ef3x[type]) {
            this.ef3x[type] = listener
        } else if (isArray(this.ef3x[type])) {
            this.ef3x[type].push(listener)
        } else {
            this.ef3x[type] = [this.ef3x[type], listener]
        }
        if (isArray(this.ef3x[type]) && !this.ef3x[type].warned) {
            var m;
            if (this.bGb6V !== undefined) {
                m = this.bGb6V
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ef3x[type].length > m) {
                this.ef3x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ef3x[type].length);
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
        if (!this.ef3x || !this.ef3x[type])
            return this;
        var list = this.ef3x[type];
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
            delete this.ef3x[type]
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.ef3x = {};
            return this
        }
        var events = this.ef3x && this.ef3x[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ef3x[type] = null
        }
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        if (!this.ef3x)
            this.ef3x = {};
        if (!this.ef3x[type])
            this.ef3x[type] = [];
        if (!isArray(this.ef3x[type])) {
            this.ef3x[type] = [this.ef3x[type]]
        }
        return this.ef3x[type]
    }
}
)();
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
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), l1x = c0x("nm.x"), dE2x = c0x("nm.u"), q1x = c0x("nm.d"), NR4V = c0x("pomelo"), Y1x = 0, b0x, L1x;
    q1x.fq3x({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q1x) {
                Y1x = 2;
                var tk7d = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }
                  , j1x = Q1x.account || bb1x
                  , do2x = GUser.userId;
                NR4V.init(tk7d.host, tk7d.port, true, this.cxt7m.f1x(this, {
                    user: do2x,
                    nonce: j1x.nonce,
                    domain: tk7d.domain,
                    productKey: tk7d.key,
                    signature: j1x.signature,
                    expire_time: j1x.expireTime
                }))
            },
            onerror: function() {
                return this.bpI2x()
            }
        }
    });
    q1x.AR0x = NEJ.C();
    b0x = q1x.AR0x.N1x(q1x.hJ4N);
    b0x.cx1x = function() {
        var qX7Q = !1;
        return function(e1x) {
            if (!qX7Q) {
                qX7Q = !0
            }
            this.cE2x(e1x);
            NR4V.on("specify", this.qv6p.f1x(this));
            NR4V.on("broadcast", this.qv6p.f1x(this))
        }
    }();
    b0x.qv6p = function(d1x) {
        k1x.bd1x(d1x, function(bG1x) {
            h1x.z1x(q1x.AR0x, "message", bG1x)
        }, this)
    }
    ;
    b0x.bpI2x = function() {
        var bA1x = 500;
        return function() {
            Y1x = 0;
            NR4V.disconnect();
            if (bA1x > 6e4)
                bA1x = 500;
            bA1x *= 2
        }
    }();
    b0x.cxt7m = function(e1x, bZ1x) {
        if (!!bZ1x) {
            return this.bpI2x()
        }
        Y1x = 3;
        NR4V.registerAndBind(e1x, function(m1x) {
            if (m1x.code != 200) {
                return this.bpI2x()
            }
            Y1x = 4
        }
        .f1x(this))
    }
    ;
    b0x.cFR9I = function() {
        dE2x.cxq7j.gg3x().cFS9J()
    }
    ;
    b0x.cFT9K = function() {
        dE2x.cxq7j.gg3x().cFU9L()
    }
    ;
    b0x.bpQ2x = function() {
        var qX7Q = !1;
        return function() {
            if (qX7Q)
                return;
            qX7Q = !0;
            this.cq1x("polling-init", {})
        }
    }();
    I1x.fI3x.A1x({
        event: "message",
        element: q1x.AR0x
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h1x = c0x("nej.v"), v1x = c0x("nej.j"), dy2x = c0x("nej.p"), k1x = c0x("nej.u"), n1x = c0x("nm.l"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), cw1x = c0x("api"), b0x, L1x;
    var ge3x = a9j.jj4n('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n1x.bpR2x = NEJ.C();
    b0x = n1x.bpR2x.N1x(n1x.ep3x);
    L1x = n1x.bpR2x.cs1x;
    b0x.bl1x = function(e1x) {
        e1x.title = "意见反馈";
        this.bn1x(e1x)
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = ge3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.hz4D = {};
        var JZ2x = a9j.H1x;
        var Es1x = h1x.s1x;
        this.hz4D.submit_btn = JZ2x(this.o1x, "u-btn2")[0];
        this.hz4D.cancle_btn = JZ2x(this.o1x, "u-btn2")[1];
        this.hz4D.prompt_msg = JZ2x(this.o1x, "u-err")[0];
        this.hz4D.zs = JZ2x(this.o1x, "zs")[0];
        a9j.ba1x(this.hz4D.zs, "display", "none");
        this.hz4D.fb_txt = JZ2x(this.o1x, "u-txt")[0];
        this.hz4D.contact = JZ2x(this.o1x, "u-txt")[1];
        a9j.gr3x(this.hz4D.fb_txt, "holder");
        a9j.gr3x(this.hz4D.contact, "holder");
        if (a9j.bE1x(this.hz4D.fb_txt.parentNode, "holder-parent")) {
            a9j.ba1x(this.hz4D.fb_txt.parentNode, "display", "block")
        }
        if (a9j.bE1x(this.hz4D.contact.parentNode, "holder-parent")) {
            a9j.ba1x(this.hz4D.contact.parentNode, "display", "block")
        }
        Es1x(this.hz4D.submit_btn, "click", this.cxm7f.f1x(this));
        Es1x(this.hz4D.cancle_btn, "click", this.cxl7e.f1x(this));
        Es1x(this.hz4D.prompt_msg, "msgShow", this.cxk7d.f1x(this));
        Es1x(this.hz4D.fb_txt, "keyup", this.vh8Z.f1x(this));
        Es1x(this.hz4D.fb_txt, "input", this.fP3x.f1x(this));
        Es1x(this.hz4D.contact, "keyup", this.cxj7c.f1x(this));
        Es1x(this.hz4D.contact, "input", this.bHk7d.f1x(this));
        this.kH5M = q1x.hS4W.A1x()
    }
    ;
    b0x.cxm7f = function(d1x) {
        h1x.bg1x(d1x);
        if (this.cP2x())
            return;
        var bo1x = this.hz4D.fb_txt.value.trim();
        var bq1x = bo1x.length;
        var e1x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bHn7g = this.hz4D.contact.value.trim();
        var Yy7r = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l1x.blw1x(),
            contact: bHn7g
        };
        var j1x = {
            content: bo1x,
            client: "web",
            xInfo: JSON.stringify(Yy7r)
        }
          , ok6e = this.kH5M.cDd9U();
        if (ok6e && ok6e.length) {
            j1x.log = ok6e.join("\n")
        }
        if (bq1x == 0) {
            this.hz4D.prompt_msg.innerHTML = "反馈内容不能为空";
            a9j.ba1x(this.hz4D.prompt_msg, "display", "block");
            return
        }
        if (bHn7g.length > 100) {
            this.hz4D.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a9j.ba1x(this.hz4D.prompt_msg, "display", "block");
            return
        }
        this.cP2x(true);
        e1x.data = k1x.cF2x(j1x);
        e1x.onload = this.cxi7b.f1x(this);
        e1x.onerror = this.iY4c.f1x(this);
        v1x.bm1x("/api/feedback/web", e1x)
    }
    ;
    b0x.fP3x = function(d1x) {
        var bq1x = this.hz4D.fb_txt.value.trim().length;
        if (bq1x > 0)
            a9j.ba1x(this.hz4D.prompt_msg, "display", "none");
        dy2x.dt2x.browser == "ie" && dy2x.dt2x.version < "7.0" ? setTimeout(this.gi3x.f1x(this), 0) : this.gi3x()
    }
    ;
    b0x.vh8Z = function(d1x) {
        if (d1x.keyCode === 8)
            this.gi3x()
    }
    ;
    b0x.gi3x = function() {
        var bq1x = this.hz4D.fb_txt.value.trim().length;
        this.hz4D.zs.innerHTML = !bq1x ? "0/140" : bq1x + "/140"
    }
    ;
    b0x.bHk7d = function(d1x) {
        var bq1x = this.hz4D.contact.value.trim().length;
        if (bq1x > 0)
            a9j.ba1x(this.hz4D.prompt_msg, "display", "none")
    }
    ;
    b0x.cxj7c = function(d1x) {
        if (d1x.keyCode === 8)
            this.bHk7d()
    }
    ;
    b0x.cxl7e = function(d1x) {
        h1x.cn1x(d1x);
        this.bt1x()
    }
    ;
    b0x.cxk7d = function(d1x) {
        var g1x = h1x.W1x(d1x);
        g1x.innerHTML = "请输入反馈内容"
    }
    ;
    b0x.cFW9N = function(cFX9O) {
        var g1x = h1x.W1x(d1x);
        g1x.innerHTML = ""
    }
    ;
    b0x.cxi7b = function(m1x) {
        this.cP2x(false);
        this.bt1x();
        n1x.Z1x.J1x({
            tip: "意见发送成功",
            autoclose: true
        })
    }
    ;
    b0x.iY4c = function(m1x) {
        this.cP2x(false);
        n1x.Z1x.J1x({
            tip: "意见发送失败",
            autoclose: true
        })
    }
    ;
    b0x.cP2x = function(db2x) {
        return this.dW2x(this.hz4D.submit_btn, db2x, "发送意见", "发送中...")
    }
    ;
    b0x.J1x = function() {
        L1x.J1x.call(this);
        this.cP2x(false);
        this.hz4D.fb_txt.value = "";
        this.hz4D.contact.value = "";
        a9j.ba1x(this.hz4D.prompt_msg, "display", "none");
        this.gi3x()
    }
    ;
    l1x.cxd7W = function(e1x) {
        e1x = e1x || {};
        if (e1x.title === undefined)
            e1x.title = "意见反馈";
        n1x.bpR2x.J1x(e1x)
    }
    ;
    cw1x.feedback = l1x.feedback = l1x.cxd7W
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, O1x = c0x("nej.ui"), b0x;
    if (!!O1x.Ac9T)
        return;
    O1x.Ac9T = NEJ.C();
    b0x = O1x.Ac9T.N1x(O1x.ej3x);
    b0x.cx1x = function() {
        this.gS3x = this.bHU7N();
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.cp1x = e1x.index;
        this.gz3x = e1x.total;
        this.hD4H = e1x.range;
        this.gD3x(e1x.data)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.bk1x;
        delete this.cp1x;
        delete this.gz3x;
        delete this.hD4H
    }
    ;
    b0x.iu4y = br1x;
    b0x.bHU7N = function() {
        var gK3x = +(new Date);
        return function() {
            return "itm-" + ++gK3x
        }
    }();
    b0x.Fx1x = function() {
        return this.gS3x
    }
    ;
    b0x.if4j = function() {
        return this.bk1x
    }
    ;
    b0x.gD3x = function(j1x) {
        this.bk1x = j1x || {};
        this.iu4y(this.bk1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), O1x = c0x("nej.ui"), b0x, L1x;
    if (!!O1x.vr8j)
        return;
    O1x.vr8j = NEJ.C();
    b0x = O1x.vr8j.N1x(O1x.Ac9T);
    L1x = O1x.vr8j.cs1x;
    b0x.bl1x = function(e1x) {
        this.cxc7V = e1x.pkey || "id";
        this.bn1x(e1x)
    }
    ;
    b0x.ER1x = function(j1x) {
        this.z1x("ondelete", {
            ext: j1x,
            id: this.Fx1x(),
            data: this.if4j(),
            body: this.lw5B()
        })
    }
    ;
    b0x.tz8r = function(j1x) {
        this.z1x("onupdate", {
            ext: j1x,
            id: this.Fx1x(),
            data: this.if4j(),
            body: this.lw5B()
        })
    }
    ;
    b0x.gD3x = function(j1x) {
        L1x.gD3x.apply(this, arguments);
        this.gS3x = this.bk1x[this.cxc7V] || this.bHU7N()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fA3x = NEJ.R, a9j = c0x("nej.e"), k1x = c0x("nej.u"), O1x = c0x("nej.ui"), b0x, iT4X, bqg2x;
    if (!!O1x.bqk2x)
        return;
    O1x.bqk2x = NEJ.C();
    b0x = O1x.bqk2x.N1x(O1x.ej3x);
    b0x.bl1x = function(e1x) {
        this.XR7K = NEJ.X({}, e1x);
        this.fT3x = NEJ.X({}, e1x);
        delete this.XR7K.onchange;
        this.fT3x.onchange = this.fY3x.f1x(this);
        this.bn1x(e1x);
        this.cxb7U({
            number: e1x.number,
            label: e1x.label || bb1x
        })
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (!!this.ln5s) {
            this.ln5s.T1x();
            delete this.ln5s
        }
        delete this.XR7K;
        delete this.fT3x;
        this.cxa7T();
        this.o1x.innerHTML = "&nbsp;"
    }
    ;
    b0x.ch1x = function() {
        this.mn5s = iT4X
    }
    ;
    b0x.cxb7U = function(j1x) {
        a9j.dz2x(this.o1x, bqg2x, j1x);
        var gK3x = a9j.Lb3x();
        this.fT3x.list = a9j.H1x(this.o1x, "js-i-" + gK3x);
        this.fT3x.pbtn = (a9j.H1x(this.o1x, "js-p-" + gK3x) || fA3x)[0];
        this.fT3x.nbtn = (a9j.H1x(this.o1x, "js-n-" + gK3x) || fA3x)[0]
    }
    ;
    b0x.bW1x = function() {
        this.ci1x()
    }
    ;
    b0x.cGa9R = function(j1x) {
        return a9j.cc1x(bqg2x, j1x)
    }
    ;
    b0x.fY3x = function(d1x) {
        if (this.Np3x)
            return;
        var r1x = d1x.index
          , cB1x = d1x.total;
        this.Np3x = !0;
        this.No3x(r1x, cB1x);
        k1x.bd1x(this.XF7y, function(tF8x) {
            tF8x.No3x(r1x, cB1x)
        });
        this.Np3x = !1;
        this.z1x("onchange", d1x)
    }
    ;
    b0x.f1x = function(bI1x) {
        bI1x = a9j.B1x(bI1x);
        if (!bI1x)
            return this;
        var ct1x = NEJ.X({}, this.XR7K);
        ct1x.parent = bI1x;
        ct1x.index = this.tG8y();
        ct1x.total = this.kA5F();
        var tF8x = this.constructor.A1x(ct1x);
        tF8x.wv8n("onchange", this.fT3x.onchange);
        if (!this.XF7y)
            this.XF7y = [];
        this.XF7y.push(tF8x);
        return this
    }
    ;
    b0x.cxa7T = function() {
        var bgl0x = function(tF8x, r1x, i1x) {
            tF8x.T1x();
            i1x.splice(r1x, 1)
        };
        return function() {
            k1x.nz5E(this.XF7y, bgl0x)
        }
    }();
    b0x.le5j = function(r1x) {
        if (!this.ln5s)
            return;
        this.ln5s.le5j(r1x)
    }
    ;
    b0x.tG8y = function() {
        if (!this.ln5s)
            return 1;
        return this.ln5s.tG8y()
    }
    ;
    b0x.kA5F = function() {
        if (!this.ln5s)
            return 1;
        return this.ln5s.kA5F()
    }
    ;
    b0x.No3x = function(r1x, cB1x) {
        if (!this.ln5s)
            return;
        this.ln5s.No3x(r1x, cB1x)
    }
    ;
    b0x.bql2x = function(cB1x) {
        if (!this.ln5s)
            return;
        this.ln5s.bql2x(cB1x)
    }
    ;
    iT4X = a9j.tA8s(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bqg2x = a9j.eB3x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), O1x = c0x("nej.ut"), b0x;
    if (!!O1x.XC7v)
        return;
    O1x.XC7v = NEJ.C();
    b0x = O1x.XC7v.N1x(O1x.cJ2x);
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.Xy7r = e1x.pbtn;
        this.cr1x = e1x.nbtn;
        this.Xx7q = e1x.sbtn;
        this.Xk7d = e1x.ebtn;
        this.js4w = e1x.event || "click";
        this.kD5I = e1x.selected || "js-selected";
        this.oh6b = e1x.disabled || "js-disabled";
        this.cwY7R(e1x.list);
        this.No3x(e1x.index || 1, e1x.total || 1)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.bU1x;
        delete this.js4w;
        delete this.Xy7r;
        delete this.cr1x;
        delete this.Xx7q;
        delete this.Xk7d;
        delete this.bKO7H;
        delete this.gz3x;
        delete this.cp1x;
        delete this.kD5I;
        delete this.oh6b
    }
    ;
    b0x.cwY7R = function() {
        var bqI3x = function(g1x) {
            this.bU1x.push(g1x);
            this.bX1x([[g1x, this.js4w, this.cu1x.ew3x(this, 0)]])
        };
        return function(i1x) {
            this.bU1x = [];
            this.bX1x([[this.Xy7r, "click", this.cu1x.ew3x(this, -1)], [this.cr1x, "click", this.cu1x.ew3x(this, 1)], [this.Xx7q, "click", this.cu1x.ew3x(this, -2)], [this.Xk7d, "click", this.cu1x.ew3x(this, 2)]]);
            k1x.bd1x(i1x, bqI3x, this)
        }
    }();
    b0x.Fy1x = function(g1x, r1x) {
        if (r1x == null) {
            g1x.innerText = "";
            a9j.ba1x(g1x, "display", "none");
            a9j.x1x(g1x, this.kD5I)
        } else {
            g1x.innerText = r1x;
            a9j.ba1x(g1x, "display", "");
            r1x == this.cp1x ? a9j.y1x(g1x, this.kD5I) : a9j.x1x(g1x, this.kD5I)
        }
    }
    ;
    b0x.bqL3x = function() {
        if (this.cp1x <= 1) {
            a9j.y1x(this.Xy7r, this.oh6b);
            a9j.y1x(this.Xx7q, this.oh6b)
        } else {
            a9j.x1x(this.Xy7r, this.oh6b);
            a9j.x1x(this.Xx7q, this.oh6b)
        }
        if (this.cp1x >= this.gz3x) {
            a9j.y1x(this.cr1x, this.oh6b);
            a9j.y1x(this.Xk7d, this.oh6b)
        } else {
            a9j.x1x(this.cr1x, this.oh6b);
            a9j.x1x(this.Xk7d, this.oh6b)
        }
    }
    ;
    b0x.WQ7J = br1x;
    b0x.bqQ3x = function() {
        this.WQ7J();
        this.bqL3x();
        this.z1x("onchange", {
            last: this.bKO7H,
            total: this.gz3x,
            index: this.cp1x,
            ext: this.bqR3x
        })
    }
    ;
    b0x.bLG8y = function(r1x) {
        r1x = parseInt(r1x);
        if (isNaN(r1x) || this.gz3x == null)
            return !1;
        r1x = Math.max(1, Math.min(r1x, this.gz3x));
        this.bKO7H = this.cp1x;
        this.cp1x = r1x;
        return !0
    }
    ;
    b0x.bqS3x = function(cB1x) {
        cB1x = parseInt(cB1x);
        if (isNaN(cB1x) || cB1x < 1)
            return !1;
        this.gz3x = cB1x;
        return !0
    }
    ;
    b0x.cu1x = function(d1x, eZ3x) {
        h1x.cn1x(d1x);
        var F1x = h1x.W1x(d1x);
        if (!F1x || a9j.bE1x(F1x, this.kD5I) || a9j.bE1x(F1x, this.oh6b))
            return;
        var r1x = F1x.innerText;
        switch (eZ3x) {
        case 1:
        case -1:
            r1x = this.cp1x + eZ3x;
            break;
        case 2:
            r1x = this.gz3x;
            break;
        case -2:
            r1x = 1;
            break
        }
        this.le5j(r1x)
    }
    ;
    b0x.tG8y = function() {
        return this.cp1x
    }
    ;
    b0x.le5j = function(r1x) {
        var cwX7Q = this.cp1x;
        this.bLG8y(r1x);
        if (cwX7Q != this.cp1x)
            this.bqQ3x();
        return this
    }
    ;
    b0x.kA5F = function() {
        return this.gz3x
    }
    ;
    b0x.UH6B = function(cB1x) {
        if (this.bqS3x(cB1x) && this.cp1x != null) {
            this.cp1x = 1;
            this.bqQ3x()
        }
        return this
    }
    ;
    b0x.bql2x = function(cB1x) {
        if (this.bqS3x(cB1x)) {
            this.WQ7J();
            this.bqL3x()
        }
        return this
    }
    ;
    b0x.No3x = function(r1x, cB1x) {
        if (!this.bqS3x(cB1x) || !this.bLG8y(r1x))
            return this;
        this.bqQ3x();
        return this
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), k1x = c0x("nej.u"), cZ2x = c0x("nej.x"), O1x = c0x("nej.ut"), b0x;
    if (!!O1x.VG7z)
        return;
    O1x.VG7z = NEJ.C();
    b0x = O1x.VG7z.N1x(O1x.XC7v);
    b0x.cx1x = function() {
        this.cE2x();
        var g1x = a9j.dj2x("span", "zdot");
        g1x.innerText = "...";
        this.WB7u = [g1x.cloneNode(true), g1x]
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        this.bMn8f()
    }
    ;
    b0x.bMn8f = function() {
        a9j.mG5L(this.WB7u[0]);
        a9j.mG5L(this.WB7u[1])
    }
    ;
    b0x.WQ7J = function() {
        this.bqR3x = {
            last: !1,
            first: !1,
            list: this.bU1x
        };
        this.bMn8f();
        this.Fy1x(this.bU1x[0], 1);
        var bM1x = 1
          , bq1x = this.bU1x.length;
        if (this.gz3x < bq1x) {
            for (var qF7y; bM1x < bq1x; bM1x++) {
                qF7y = bM1x + 1;
                this.Fy1x(this.bU1x[bM1x], qF7y > this.gz3x ? null : qF7y)
            }
            return
        }
        if (this.cp1x > 1) {
            var cz1x = Math.floor((bq1x - 2) / 2)
              , cwW7P = this.gz3x - bq1x + 2
              , hx4B = Math.max(2, this.cp1x - cz1x);
            if (this.gz3x >= bq1x) {
                hx4B = Math.min(hx4B, cwW7P)
            }
            if (hx4B > 2) {
                this.bU1x[0].insertAdjacentElement("afterEnd", this.WB7u[0]);
                this.bqR3x.first = !0
            }
            for (var r1x; ; bM1x++) {
                r1x = hx4B + bM1x - 1;
                if (r1x > this.cp1x)
                    break;
                this.Fy1x(this.bU1x[bM1x], r1x)
            }
        }
        if (this.cp1x < this.gz3x) {
            var r1x, hx4B = this.cp1x + 1;
            for (var i = 0, l = bq1x - 2; ; i++,
            bM1x++) {
                r1x = hx4B + i;
                if (bM1x > l || r1x > this.gz3x)
                    break;
                this.Fy1x(this.bU1x[bM1x], r1x)
            }
            if (r1x < this.gz3x) {
                this.bU1x[bM1x].insertAdjacentElement("beforeBegin", this.WB7u[1]);
                this.bqR3x.last = !0
            }
            if (r1x <= this.gz3x) {
                this.Fy1x(this.bU1x[bM1x++], this.gz3x)
            }
        }
        for (; bM1x < bq1x; bM1x++) {
            this.Fy1x(this.bU1x[bM1x])
        }
    }
    ;
    a9j.cwV7O = cZ2x.cwV7O = function(bI1x, e1x) {
        var C1x = a9j.lK5P(bI1x);
        if (!C1x)
            return null;
        if (!O1x.bab8T(C1x, O1x.VG7z)) {
            e1x = e1x || {};
            var i1x = !e1x.clazz ? a9j.dm2x(C1x) : a9j.H1x(C1x, e1x.clazz);
            e1x.pbtn = i1x.shift();
            e1x.nbtn = i1x.pop();
            e1x.list = i1x;
            delete e1x.clazz
        }
        return O1x.bab8T(C1x, O1x.VG7z, e1x || bb1x)
    }
    ;
    cZ2x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fA3x = NEJ.R, a9j = c0x("nej.e"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), O1x = c0x("nej.ui"), b0x, L1x, ge3x;
    if (!!O1x.VB7u)
        return;
    O1x.VB7u = NEJ.C();
    b0x = O1x.VB7u.N1x(O1x.bqk2x);
    L1x = O1x.VB7u.cs1x;
    b0x.bl1x = function(e1x) {
        e1x.number = parseInt(e1x.number) || 9;
        this.bn1x(e1x);
        this.ln5s = I1x.VG7z.A1x(this.fT3x)
    }
    ;
    b0x.fY3x = function(d1x) {
        if (!!this.XR7K.noend) {
            var bMA8s = d1x.ext || bb1x
              , i1x = bMA8s.list || fA3x;
            if (bMA8s.last) {
                a9j.ba1x(i1x[i1x.length - 1], "display", "none")
            }
        }
        L1x.fY3x.apply(this, arguments)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), bc1x = c0x("nej.ui"), O1x = c0x("nej.ut"), b0x;
    if (!!O1x.Wx7q)
        return;
    O1x.Wx7q = NEJ.C();
    b0x = O1x.Wx7q.N1x(O1x.cJ2x);
    b0x.bl1x = function(e1x) {
        this.iQ4U = {};
        this.bn1x(e1x);
        this.iq4u = a9j.B1x(e1x.parent);
        this.fe3x = {
            parent: this.iq4u
        };
        this.pm6g = parseInt(e1x.limit) || 10;
        this.yl9c = parseInt(e1x.first) || this.pm6g;
        this.cwU7N(e1x.item);
        this.cwT7M(e1x.cache || bb1x);
        this.cwS7L(e1x.pager || bb1x);
        this.gD3x()
    }
    ;
    b0x.bC1x = function() {
        this.z1x("onbeforerecycle");
        this.Vo7h();
        this.bF1x();
        if (this.iQ4U.clear) {
            this.S1x.vA8s(this.iQ4U.key)
        }
        this.S1x.T1x();
        if (!!this.jx4B) {
            this.jx4B.T1x();
            delete this.jx4B
        }
        delete this.bNP8H;
        delete this.fT3x;
        delete this.Wa7T;
        delete this.S1x;
        delete this.iq4u;
        delete this.US6M;
        delete this.fe3x;
        delete this.iQ4U
    }
    ;
    b0x.bOc8U = function() {
        var df2x = /\{(.*?)\}/gi
          , cwR7K = function(oP6J, j1x) {
            return (oP6J || "{id}{seed}").replace(df2x, function($1, $2) {
                var D1x = j1x[$2];
                return D1x == null ? $1 : D1x
            })
        };
        return function(C1x) {
            var K1x = cwR7K(this.fe3x.jstIdTempalte, {
                id: C1x,
                seed: a9j.Lb3x()
            });
            if (!this.fe3x.jstIdType) {
                return a9j.B1x(K1x)
            } else if (this.fe3x.jstIdType == 1) {
                return (a9j.H1x(this.iq4u, K1x) || [])[0]
            }
        }
    }();
    b0x.AJ0x = function(bM1x, bi1x, gd3x, bq1x) {
        var m1x = {
            index: 1,
            total: 1
        };
        if (bi1x >= bM1x) {
            m1x.index = Math.floor((bi1x - bM1x) / gd3x) + 2
        }
        if (bq1x > bM1x) {
            m1x.total = Math.ceil((bq1x - bM1x) / gd3x) + 1
        }
        return m1x
    }
    ;
    b0x.bOm8e = function(K1x) {
        delete this.US6M;
        this.JD2x = K1x;
        this.bX1x([[this.iq4u, "click", this.cwQ7J.f1x(this)]])
    }
    ;
    b0x.cwU7N = function(p1x) {
        if (k1x.fG3x(p1x)) {
            this.bOm8e(p1x);
            return
        }
        NEJ.X(this.fe3x, p1x);
        var eb3x = this.fe3x.klass;
        delete this.fe3x.klass;
        if (k1x.fG3x(eb3x)) {
            this.bOm8e(eb3x);
            return
        }
        delete this.JD2x;
        this.US6M = eb3x;
        this.fe3x.ondelete = this.z1x.f1x(this, "ondelete");
        this.fe3x.onupdate = this.z1x.f1x(this, "onupdate")
    }
    ;
    b0x.cwT7M = function(R1x) {
        var eb3x = R1x.klass
          , kx5C = NEJ.X({}, R1x);
        this.iQ4U.key = kx5C.lkey;
        this.iQ4U.data = kx5C.data || {};
        this.iQ4U.clear = !!kx5C.clear;
        this.fe3x.pkey = kx5C.key || "id";
        kx5C.onlistload = this.bre3x.f1x(this);
        kx5C.onpullrefresh = this.cwP7I.f1x(this);
        if (!!eb3x && "onlistchange"in eb3x) {
            this.bX1x([[eb3x, "listchange", this.brn3x.f1x(this)]])
        } else {
            kx5C.onitemadd = this.beY0x.f1x(this);
            kx5C.onitemdelete = this.beL0x.f1x(this);
            kx5C.onitemupdate = this.bPd8V.f1x(this)
        }
        this.S1x = (eb3x || O1x.UR6L).A1x(kx5C);
        if (R1x.total != null) {
            this.S1x.UH6B(this.iQ4U.key, R1x.total)
        }
        if (!!R1x.list) {
            this.S1x.vm8e(this.iQ4U.key, R1x.list)
        }
    }
    ;
    b0x.cwS7L = function(tF8x) {
        this.bNP8H = tF8x.klass || bc1x.VB7u;
        this.fT3x = NEJ.X({}, tF8x);
        if (k1x.eL3x(tF8x.parent)) {
            this.fT3x.parent = tF8x.parent[0];
            this.Uv6p = tF8x.parent.slice(1);
            if (!this.Uv6p || !this.Uv6p.length) {
                delete this.Uv6p
            }
        }
        delete this.fT3x.klass
    }
    ;
    b0x.Vo7h = function() {
        var gH3x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z1x("onbeforelistclear", {
                parent: this.iq4u
            });
            if (!!this.fJ3x && this.fJ3x.length > 0) {
                this.fJ3x = this.US6M.T1x(this.fJ3x);
                delete this.fJ3x
            }
            if (gH3x.test(this.iq4u.tagName)) {
                a9j.bVs1x(this.iq4u)
            } else {
                this.iq4u.innerHTML = ""
            }
        }
    }();
    b0x.bru3x = function(bey0x) {
        if (!!this.fT3x.fixed)
            return;
        a9j.ba1x(this.fT3x.parent, "display", bey0x);
        k1x.bd1x(this.Uv6p, function(bI1x) {
            a9j.ba1x(bI1x, "display", bey0x)
        }, this)
    }
    ;
    b0x.brx3x = function() {
        var r1x = this.fT3x.index || 1;
        delete this.fT3x.index;
        if (!!this.jx4B) {
            r1x = this.jx4B.tG8y()
        }
        this.AE0x({
            last: r1x,
            index: r1x
        })
    }
    ;
    b0x.AE0x = function(d1x) {
        this.z1x("onpagechange", d1x)
    }
    ;
    b0x.bPS9J = function(bi1x) {
        this.iQ4U.offset = bi1x;
        this.bcI9z()
    }
    ;
    b0x.bPT9K = function(e1x) {
        return e1x
    }
    ;
    b0x.bcI9z = function() {
        this.Uj6d();
        var j1x = this.iQ4U.data;
        j1x.offset = this.iQ4U.offset;
        var pT6N = j1x.offset == 0;
        j1x.total = pT6N;
        this.iQ4U.limit = pT6N ? this.yl9c : this.pm6g;
        j1x.limit = this.iQ4U.limit;
        this.S1x.lP5U(this.bPT9K(NEJ.X({}, this.iQ4U)))
    }
    ;
    b0x.bre3x = function(e1x) {
        if (e1x.key != this.iQ4U.key || e1x.offset != this.iQ4U.offset)
            return;
        this.bdT0x();
        var i1x = this.S1x.hF4J(e1x.key);
        if (!i1x || !i1x.length) {
            this.brL3x();
            return
        }
        var gd3x = e1x.limit
          , bi1x = e1x.offset;
        if (this.brM3x(i1x, bi1x, gd3x))
            return;
        this.z1x("onbeforelistrender", {
            list: i1x,
            offset: bi1x,
            parent: this.iq4u
        });
        if (!!this.JD2x) {
            this.fe3x.xlist = i1x;
            this.fe3x.beg = bi1x;
            this.fe3x.end = Math.min(i1x.length, bi1x + gd3x) - 1;
            this.fe3x.act = "list";
            var dV2x = a9j.cc1x(this.JD2x, this.fe3x);
            this.TT6N(dV2x)
        } else {
            this.fe3x.limit = gd3x;
            this.fe3x.offset = bi1x;
            var hr4v = a9j.CF0x(i1x, this.US6M, this.fe3x);
            this.TQ6K(hr4v)
        }
        this.z1x("onafterlistrender", {
            list: i1x,
            offset: bi1x,
            parent: this.iq4u
        })
    }
    ;
    b0x.cwP7I = function(e1x) {
        if (!this.Wa7T)
            return;
        delete this.Wa7T;
        this.bdT0x("onafterpullrefresh");
        this.gD3x()
    }
    ;
    b0x.bQF0x = function(r1x, cB1x) {
        if (!!this.jx4B) {
            var wx8p = this.jx4B.tG8y()
              , cwN7G = this.jx4B.kA5F();
            if (wx8p > cB1x || cB1x != cwN7G) {
                this.jx4B.T1x();
                delete this.jx4B;
                this.AE0x({
                    last: wx8p,
                    index: Math.min(r1x, cB1x)
                });
                return !0
            }
        } else {
            this.fT3x.index = r1x;
            this.fT3x.total = cB1x;
            this.jx4B = this.bNP8H.A1x(this.fT3x);
            this.jx4B.wv8n("onchange", this.AE0x.f1x(this));
            k1x.bd1x(this.Uv6p, function(bI1x) {
                this.jx4B.f1x(bI1x)
            }, this)
        }
    }
    ;
    b0x.bdx9o = function() {
        var gK3x = +(new Date);
        return function(j1x) {
            var C1x = j1x[this.fe3x.pkey];
            if (!C1x) {
                j1x["dirty-data"] = !0;
                j1x[this.fe3x.pkey] = "dirty-" + gK3x++
            }
            return j1x
        }
    }();
    b0x.bdj9a = function(j1x) {
        var C1x = j1x[this.fe3x.pkey];
        if (!!j1x["dirty-data"]) {
            delete j1x["dirty-data"];
            delete j1x[this.fe3x.pkey]
        }
        return C1x
    }
    ;
    b0x.bdf9W = function() {
        var cwM7F = function(kY5d, mJ5O) {
            this.iq4u.insertAdjacentElement(kY5d, mJ5O)
        };
        return function(kY5d, j1x) {
            var Ly3x = [j1x];
            if (!!this.JD2x) {
                this.fe3x.xlist = Ly3x;
                this.fe3x.beg = 0;
                this.fe3x.end = 0;
                this.fe3x.act = "add";
                this.TT6N(a9j.cc1x(this.JD2x, this.fe3x), kY5d)
            } else {
                this.fe3x.limit = 1;
                this.fe3x.offset = 0;
                this.fe3x.parent = cwM7F.f1x(this, kY5d);
                var hr4v = a9j.CF0x(Ly3x, this.US6M, this.fe3x);
                this.fe3x.parent = this.iq4u;
                this.TQ6K(hr4v)
            }
        }
    }();
    b0x.Uj6d = br1x;
    b0x.bdT0x = function(V1x) {
        var d1x = {
            parent: this.iq4u
        };
        this.z1x(V1x || "onafterlistload", d1x);
        if (!d1x.stopped) {
            a9j.mG5L(this.cv1x)
        }
    }
    ;
    b0x.brM3x = br1x;
    b0x.bdd9U = function(bG1x, kY5d) {
        if (k1x.fG3x(bG1x)) {
            if (!this.cv1x)
                this.cv1x = a9j.dj2x("div");
            this.cv1x.innerHTML = bG1x
        } else {
            this.cv1x = bG1x
        }
        this.iq4u.insertAdjacentElement(kY5d || "beforeEnd", this.cv1x)
    }
    ;
    b0x.zu9l = function(V1x, ky5D, kY5d) {
        var d1x = {
            parent: this.iq4u
        };
        this.z1x(V1x, d1x);
        if (!d1x.stopped) {
            this.bdd9U(d1x.value || ky5D, kY5d)
        }
    }
    ;
    b0x.brL3x = br1x;
    b0x.TT6N = br1x;
    b0x.TQ6K = br1x;
    b0x.cwQ7J = function() {
        var gH3x = /^(?:delete|update)$/;
        return function(d1x) {
            var g1x = h1x.W1x(d1x, "d:action");
            if (!g1x)
                return;
            var U1x = a9j.t1x(g1x, "action");
            if (!gH3x.test(U1x))
                return;
            var C1x = a9j.t1x(g1x, "id");
            if (!C1x)
                return;
            var p1x = this.S1x.eJ3x(C1x);
            if (!p1x)
                return;
            h1x.bg1x(d1x);
            this.z1x("on" + U1x, {
                data: p1x,
                id: p1x[this.fe3x.pkey],
                body: a9j.B1x(this.bOc8U(C1x))
            })
        }
    }();
    b0x.beY0x = br1x;
    b0x.bcG9x = function(d1x) {
        var j1x = d1x.data || {}
          , e1x = {
            data: j1x,
            key: this.iQ4U.key,
            id: j1x[this.fe3x.pkey]
        };
        this.z1x("onbeforedelete", e1x);
        this.S1x.Mx3x(e1x)
    }
    ;
    b0x.beL0x = br1x;
    b0x.bcF9w = function(d1x) {
        var j1x = d1x.data || {}
          , e1x = {
            data: j1x,
            key: this.iQ4U.key
        };
        this.z1x("onbeforeupdate", e1x);
        this.S1x.bcN9E(e1x)
    }
    ;
    b0x.bPd8V = function(d1x) {
        this.TH6B(d1x, "onafterupdate");
        if (d1x.stopped)
            return;
        var C1x = d1x.data[this.fe3x.pkey];
        if (!!this.fJ3x) {
            var p1x = a9j.bCw5B(C1x);
            if (!!p1x)
                p1x.gD3x(d1x.data)
        } else {
            var g1x = a9j.B1x(C1x + "" + a9j.Lb3x());
            if (!g1x)
                return;
            var i1x = this.S1x.hF4J(d1x.key)
              , r1x = k1x.di2x(i1x, d1x.data);
            if (r1x < 0)
                return;
            this.fe3x.list = i1x;
            this.fe3x.beg = r1x;
            this.fe3x.end = r1x;
            this.fe3x.act = "update";
            var dV2x = a9j.cc1x(this.JD2x, this.fe3x);
            g1x.insertAdjacentHTML("afterEnd", dV2x);
            a9j.cK2x(g1x)
        }
    }
    ;
    b0x.TH6B = function(d1x, V1x) {
        var p1x = d1x.data;
        if (!p1x || p1x[this.fe3x.pkey] == null) {
            this.z1x("onerror", d1x);
            d1x.stopped = !0
        }
        if (!d1x.stopped) {
            this.z1x(V1x, d1x)
        }
    }
    ;
    b0x.brW3x = br1x;
    b0x.brY3x = br1x;
    b0x.brn3x = function(d1x) {
        if (d1x.key != this.iQ4U.key)
            return;
        switch (d1x.action) {
        case "add":
            this.beY0x(d1x);
            break;
        case "delete":
            this.beL0x(d1x);
            break;
        case "update":
            this.bPd8V(d1x);
            break;
        case "refresh":
            this.gD3x();
            break;
        case "unshift":
            this.brY3x(d1x.offset, d1x.limit);
            break;
        case "append":
            this.brW3x(d1x.offset, d1x.limit);
            break
        }
    }
    ;
    b0x.qs6m = function(p1x) {
        this.bcF9w({
            data: p1x
        })
    }
    ;
    b0x.ms5x = function(p1x) {
        this.bcG9x({
            data: p1x
        })
    }
    ;
    b0x.td7W = function(p1x) {
        this.S1x.jK4O({
            data: p1x,
            key: this.iQ4U.key
        })
    }
    ;
    b0x.ti7b = function() {
        return this.S1x
    }
    ;
    b0x.brZ3x = function(j1x) {
        this.bdf9W("afterBegin", this.bdx9o(j1x));
        return this.bdj9a(j1x)
    }
    ;
    b0x.bRs0x = function(j1x) {
        this.bdf9W("beforeEnd", this.bdx9o(j1x));
        return this.bdj9a(j1x)
    }
    ;
    b0x.gD3x = function() {
        this.Vo7h();
        this.brx3x()
    }
    ;
    b0x.cGb9S = function() {
        this.S1x.vA8s(this.iQ4U.key);
        this.gD3x()
    }
    ;
    b0x.bho0x = function() {
        if (!!this.Wa7T)
            return;
        this.Wa7T = !0;
        this.zu9l("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var i1x = this.S1x.hF4J(this.iQ4U.key);
        if (i1x && i1x[0]) {
            this.iQ4U.data.aftertime = i1x[0].eventTime || ""
        }
        this.S1x.bho0x({
            key: this.iQ4U.key,
            data: this.iQ4U.data
        })
    }
    ;
    b0x.kA5F = function() {
        return this.S1x.kA5F(this.iQ4U.key)
    }
    ;
    b0x.bRB0x = function() {
        return this.jx4B
    }
    ;
    b0x.bdp9g = function() {
        return this.S1x.bdp9g(this.iQ4U.key)
    }
    ;
    b0x.cwK7D = function() {
        return this.fJ3x
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fA3x = NEJ.R, k1x = c0x("nej.u"), a9j = c0x("nej.e"), O1x = c0x("nej.ut"), b0x, L1x;
    if (!!O1x.kB5G)
        return;
    O1x.kB5G = NEJ.C();
    b0x = O1x.kB5G.N1x(O1x.Wx7q);
    L1x = O1x.kB5G.cs1x;
    b0x.AJ0x = function(bi1x, bq1x) {
        return L1x.AJ0x.call(this, this.yl9c, bi1x, this.pm6g, bq1x)
    }
    ;
    b0x.bsa3x = function(r1x) {
        var bi1x = 0;
        if (r1x > 1)
            bi1x = this.yl9c + (r1x - 2) * this.pm6g;
        return bi1x
    }
    ;
    b0x.AE0x = function(d1x) {
        L1x.AE0x.apply(this, arguments);
        if (!d1x.stopped) {
            this.bPS9J(this.bsa3x(d1x.index))
        }
    }
    ;
    b0x.Uj6d = function() {
        this.Vo7h();
        this.zu9l("onbeforelistload", "列表加载中...")
    }
    ;
    b0x.bdT0x = function() {
        L1x.bdT0x.apply(this, arguments);
        this.Vo7h()
    }
    ;
    b0x.brM3x = function(i1x, bi1x, gd3x) {
        var bx1x = this.AJ0x(bi1x, i1x.length);
        if (this.bQF0x(bx1x.index, bx1x.total))
            return !0;
        this.bru3x(bx1x.total > 1 ? "" : "none")
    }
    ;
    b0x.brL3x = function() {
        this.zu9l("onemptylist", "没有列表数据！")
    }
    ;
    b0x.bdd9U = function(bG1x, kY5d) {
        if (!kY5d && k1x.fG3x(bG1x)) {
            this.iq4u.innerHTML = bG1x;
            return
        }
        L1x.bdd9U.apply(this, arguments)
    }
    ;
    b0x.TT6N = function(dV2x) {
        this.iq4u.innerHTML = dV2x
    }
    ;
    b0x.TQ6K = function(hr4v) {
        this.fJ3x = hr4v
    }
    ;
    b0x.beY0x = function(d1x) {
        this.TH6B(d1x, "onafteradd");
        if (!d1x.stopped)
            this.gD3x()
    }
    ;
    b0x.beL0x = function(d1x) {
        this.TH6B(d1x, "onafterdelete");
        if (!d1x.stopped)
            this.gD3x()
    }
    ;
    b0x.brW3x = function(bi1x, gd3x) {
        var r1x = 1;
        if (!!this.jx4B) {
            r1x = this.jx4B.tG8y()
        }
        var jW4a = this.bsa3x(r1x)
          , fR3x = jW4a + (r1x > 1 ? this.pm6g : this.yl9c);
        if (bi1x >= fR3x && !!this.jx4B) {
            var bx1x = this.AJ0x(0, this.kA5F());
            this.jx4B.bql2x(bx1x.total);
            this.bru3x(bx1x.total > 1 ? "" : "none")
        } else {
            this.gD3x()
        }
    }
    ;
    b0x.brY3x = function(bi1x, gd3x) {
        var r1x = 1;
        if (!!this.jx4B) {
            r1x = this.jx4B.tG8y()
        }
        var jW4a = this.bsa3x(r1x)
          , bx1x = this.AJ0x(jW4a, this.kA5F());
        this.AE0x({
            last: r1x,
            index: bx1x.index
        })
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h1x = c0x("nej.v"), I1x = c0x("nej.ut"), k1x = c0x("nej.u"), l1x = c0x("nm.x"), q1x = c0x("nm.d"), w1x = c0x("nm.w"), fr3x = 40, b0x, L1x;
    w1x.bcl9c = NEJ.C();
    b0x = w1x.bcl9c.N1x(I1x.cJ2x);
    L1x = w1x.bcl9c.cs1x;
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.Tn6h = e1x.inputer;
        this.bse3x = e1x.tipper;
        this.bX1x([[this.Tn6h, "input", this.fP3x.f1x(this)]])
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        this.Jr2x(null, null)
    }
    ;
    b0x.fP3x = function(d1x) {
        if (d1x && d1x.type == "keyup" && (d1x.keyCode != 8 || d1x.keyCode != 68))
            return;
        var V1x = this.Tn6h.value, cGc9T;
        if (l1x.Rn5s(V1x) > fr3x) {
            this.Tn6h.value = l1x.BZ0x(V1x, fr3x);
            this.Jr2x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f1x(this))
        } else if (V1x.indexOf("#") >= 0 || V1x.indexOf("@") >= 0) {
            this.Jr2x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Jr2x(null, null);
            this.z1x("onchange", {
                value: V1x
            })
        }
    }
    ;
    b0x.cwI7B = function() {
        this.fP3x()
    }
    ;
    b0x.Jr2x = function() {
        var C1x = 0;
        return function(dL2x, bSk0x) {
            if (!!C1x)
                window.clearTimeout(C1x);
            if (!dL2x) {
                a9j.y1x(this.bse3x, "f-vhide");
                this.bSr0x = !1;
                return
            }
            this.bse3x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dL2x;
            a9j.x1x(this.bse3x, "f-vhide");
            this.bSr0x = !0;
            if (k1x.gF3x(bSk0x))
                C1x = window.setTimeout(function() {
                    this.Jr2x(null, null);
                    bSk0x()
                }
                .f1x(this), 1e3)
        }
    }();
    b0x.bSt0x = function() {
        if (this.bSr0x)
            return !1;
        if (l1x.kl5q(this.Tn6h.value)) {
            this.Jr2x("歌单名不能为空");
            return !1
        }
        return !0
    }
    ;
    b0x.fX3x = function() {
        return this.Tn6h.value
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h1x = c0x("nej.v"), a9j = c0x("nej.e"), v1x = c0x("nej.j"), n1x = c0x("nm.l"), w1x = c0x("nm.w"), bD1x = c0x("nej.ui"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), b0x, L1x;
    n1x.bbO9F = NEJ.C();
    b0x = n1x.bbO9F.N1x(n1x.ep3x);
    L1x = n1x.bbO9F.cs1x;
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.H1x(this.o1x, "j-flag");
        this.bbN9E = {
            inputer: i1x[0],
            tipper: i1x[1]
        };
        this.iI4M = {
            onerror: this.bSB0x.f1x(this),
            onitemadd: this.bSB0x.f1x(this)
        };
        this.lG5L = i1x[2];
        h1x.s1x(i1x[2], "click", this.Hm2x.f1x(this));
        h1x.s1x(i1x[3], "click", this.Du0x.f1x(this));
        h1x.s1x(this.o1x, "keypress", this.bSL0x.f1x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = "m-wgt-create"
    }
    ;
    b0x.bl1x = function(e1x) {
        e1x.clazz = " m-layer-w2";
        e1x.parent = e1x.parent || document.body;
        e1x.title = "新建歌单";
        e1x.draggable = !0;
        e1x.destroyalbe = !0;
        e1x.mask = true;
        this.bn1x(e1x);
        this.bbN9E.inputer.value = e1x.name || "";
        this.vo8g = w1x.bcl9c.A1x(this.bbN9E);
        this.vo8g.cwI7B();
        this.S1x = q1x.ii4m.A1x(this.iI4M);
        setTimeout(function() {
            this.bbN9E.inputer.focus()
        }
        .f1x(this), 0)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (this.vo8g) {
            this.vo8g.T1x();
            delete this.vo8g
        }
        this.tU8M(!1);
        this.bbN9E.inputer.value = ""
    }
    ;
    b0x.tU8M = function(Ti6c) {
        this.pp6j = Ti6c;
        if (Ti6c) {
            this.lG5L.innerHTML = "<i>新建中...</i>";
            a9j.y1x(this.lG5L, "u-btn2-dis")
        } else {
            this.lG5L.innerHTML = "<i>新 建</i>";
            a9j.x1x(this.lG5L, "u-btn2-dis")
        }
    }
    ;
    b0x.Hm2x = function() {
        if (this.pp6j || !this.vo8g.bSt0x())
            return;
        var ct1x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vo8g.fX3x()
            },
            offset: 1
        };
        this.S1x.jK4O(ct1x);
        this.tU8M(!0)
    }
    ;
    b0x.bSB0x = function(d1x) {
        var bY1x = (d1x.result || bb1x).code;
        if (!bY1x) {
            this.z1x("onsuccess", d1x.data)
        } else {
            this.z1x("onerror", d1x)
        }
        this.bt1x()
    }
    ;
    b0x.Du0x = function() {
        this.bt1x()
    }
    ;
    b0x.bSL0x = function(d1x) {
        if (d1x.keyCode == 13)
            this.Hm2x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), v1x = c0x("nej.j"), l1x = c0x("nm.x"), q1x = c0x("nm.d"), n1x = c0x("nm.l"), b0x, L1x;
    n1x.bsk3x = NEJ.C();
    b0x = n1x.bsk3x.N1x(n1x.ep3x);
    L1x = n1x.bsk3x.cs1x;
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.H1x(this.o1x, "j-flag");
        this.iM4Q = {
            limit: 301,
            parent: i1x[1],
            cache: {
                klass: q1x.ii4m,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bsy3x.f1x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l1x.DB0x,
                escape: k1x.dG2x
            }
        };
        this.iI4M = {
            onsuccess: this.bba9R.f1x(this),
            onerror: this.dP2x.f1x(this)
        };
        h1x.s1x(i1x[0], "click", this.Hm2x.f1x(this));
        h1x.s1x(i1x[1], "click", this.kV5a.f1x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = "m-wgt-subscribe"
    }
    ;
    b0x.bl1x = function(e1x) {
        e1x.parent = e1x.parent || document.body;
        e1x.clazz = " m-layer-w2";
        e1x.title = "添加到歌单";
        e1x.draggable = !0;
        e1x.mask = !0;
        this.bn1x(e1x);
        this.baV8N = (e1x.tracks || []).reverse();
        this.iM4Q.item.size = this.baV8N.length;
        this.iI4M.name = e1x.name || "";
        this.bTl0x = q1x.xc9T.A1x({
            onaddsuccess: this.Az0x.f1x(this)
        });
        this.tu7n = q1x.ii4m.A1x({
            onlistload: this.cwH7A.f1x(this)
        });
        this.tu7n.bPA9r();
        k1x.bd1x(this.baV8N, function(p1x, r1x, i1x) {
            if (!k1x.lQ5V(p1x)) {
                i1x[r1x] = this.bTl0x.eJ3x(p1x) || p1x
            }
        }, this)
    }
    ;
    b0x.cwH7A = function() {
        if (this.dK2x)
            this.dK2x.T1x();
        this.dK2x = I1x.kB5G.A1x(this.iM4Q)
    }
    ;
    b0x.Hm2x = function() {
        this.bt1x();
        if (this.HD2x)
            this.HD2x.T1x();
        this.HD2x = n1x.bbO9F.A1x(this.iI4M);
        this.HD2x.J1x()
    }
    ;
    b0x.kV5a = function() {
        var cwF7y = function(g1x) {
            while (g1x && g1x != document) {
                if (g1x.tagName.toLowerCase() == "li") {
                    return g1x
                }
                g1x = g1x.parentNode
            }
        };
        return function(d1x) {
            h1x.cn1x(d1x);
            var F1x = h1x.W1x(d1x)
              , zx9o = cwF7y(F1x);
            if (!!zx9o && !a9j.bE1x(zx9o, "dis")) {
                this.bba9R({
                    id: a9j.t1x(zx9o, "id")
                })
            }
        }
    }();
    b0x.bba9R = function(d1x) {
        var C1x = d1x.id;
        if (!C1x || !this.baV8N.length)
            return;
        this.bTl0x.jK4O({
            key: "track_playlist-" + C1x,
            data: {
                tracks: this.baV8N,
                pid: C1x
            }
        });
        this.bt1x()
    }
    ;
    b0x.Az0x = function() {
        this.z1x("onsuccess");
        n1x.Z1x.J1x({
            tip: "收藏成功"
        })
    }
    ;
    b0x.dP2x = function(d1x) {
        this.bt1x();
        this.z1x("onerror", d1x);
        var cV2x = "收藏失败";
        switch (d1x.code) {
        case 405:
            cV2x = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cV2x = "歌单数量超过限制";
            break;
        case 502:
            cV2x = "歌曲已经存在"
        }
        n1x.Z1x.J1x({
            tip: cV2x,
            type: 2
        })
    }
    ;
    b0x.bsy3x = function() {
        this.bt1x();
        n1x.Z1x.J1x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
    ;
    l1x.mP5U = function(e1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n1x.bsk3x.J1x(e1x)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , dy2x = c0x("nej.p")
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , v1x = c0x("nej.j")
      , k1x = c0x("nej.u")
      , l1x = c0x("nm.x");
    var bsH3x, oV6P, X1x = decodeURIComponent(location.href), jY4c = /.+(https?:\/\/.+\/proxy.html)/.test(X1x) ? RegExp.$1 : "";
    if (!!jY4c) {
        v1x.vb8T("mail_proxy_url", jY4c)
    } else {
        jY4c = v1x.tt7m("mail_proxy_url") || "about:blank"
    }
    bsH3x = a9j.Xe7X({
        src: jY4c,
        onload: function() {
            oV6P = true
        }
    });
    var bTJ0x = function() {
        v1x.gw3x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cwE7x = function() {
        if (dy2x.dt2x.browser == "ie" && parseInt(dy2x.dt2x.version) < 9) {
            l1x.fs3x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l1x.Jo2x = function(u1x, C1x, U1x) {
        if (!cwE7x())
            return;
        bTJ0x();
        if (U1x == "stop") {
            if (!oV6P)
                throw "proxy not loaded";
            bTJ0x();
            bsH3x.contentWindow.location.replace(jY4c + "#" + k1x.cF2x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bsH3x.contentWindow.location.replace(jY4c + "#" + k1x.cF2x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u1x,
                    id: C1x,
                    s: +(new Date),
                    action: U1x
                })
            }))
        }
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , v1x = c0x("nej.j")
      , k1x = c0x("nej.u")
      , l1x = c0x("nm.x")
      , n1x = c0x("nm.l")
      , q1x = c0x("nm.d");
    var kH5M = q1x.hS4W.A1x();
    var oF6z = q1x.xc9T.A1x({
        onlistload: cwD7w,
        onitemload: cwC7v,
        onerror: dP2x
    });
    var HP2x = q1x.rc7V.A1x({
        onlistload: cwB7u,
        onitemload: cwA7t,
        onerror: dP2x
    });
    var bUi1x = {};
    function xa9R(d1x) {
        var g1x = h1x.W1x(d1x, "d:resAction")
          , U1x = a9j.t1x(g1x, "resAction");
        if (g1x && (U1x == "play" || U1x == "addto")) {
            var u1x = parseInt(a9j.t1x(g1x, "resType"));
            bUo1x({
                action: U1x,
                type: u1x,
                id: a9j.t1x(g1x, "resId"),
                from: a9j.t1x(g1x, "resFrom"),
                data: a9j.t1x(g1x, "resData"),
                order: a9j.t1x(g1x, "resOrder"),
                node: g1x
            });
            if (u1x != 13)
                bUp1x(g1x)
        }
    }
    function bUo1x(bR1x) {
        var U1x = bR1x.action
          , u1x = bR1x.type
          , C1x = bR1x.id
          , ee3x = bR1x.from
          , j1x = bR1x.data
          , sR7K = bR1x.order
          , e1x = {
            limit: 1e3,
            offset: 0,
            data: {
                id: C1x
            },
            ext: {
                id: C1x,
                action: U1x,
                type: u1x,
                from: ee3x,
                data: j1x,
                node: bR1x.node
            }
        };
        if (U1x != "play" && U1x != "addto" || !u1x)
            return;
        if (window.GRef && GRef == "mail") {
            l1x.Jo2x(u1x, C1x, U1x);
            return
        }
        switch (u1x) {
        case 13:
            e1x.key = "track_playlist-" + C1x;
            oF6z.lP5U(e1x);
            break;
        case 17:
            e1x.key = "program";
            e1x.id = C1x;
            HP2x.bda9R(e1x);
            if (U1x == "play") {
                v1x.bm1x("/api/dj/program/listen", {
                    query: {
                        id: C1x
                    }
                })
            }
            break;
        case 18:
            e1x.key = "track";
            e1x.id = C1x;
            oF6z.bda9R(e1x);
            break;
        case 19:
            e1x.key = "track_album-" + C1x;
            oF6z.lP5U(e1x);
            break;
        case 24:
            e1x.key = "track_day";
            oF6z.lP5U(e1x);
            break;
        case 2:
            e1x.key = "track_artist_top-" + C1x;
            oF6z.lP5U(e1x);
            break;
        case 70:
            e1x.key = "program_djradio-" + C1x + "-" + sR7K;
            e1x.data.radioId = C1x;
            e1x.data.asc = sR7K == 2;
            HP2x.lP5U(e1x);
            break
        }
    }
    function bUs1x(i1x) {
        var m1x = [];
        k1x.bd1x(i1x, function(p1x) {
            if (p1x.mainSong) {
                p1x.mainSong.program = p1x;
                m1x.push(p1x.mainSong);
                p1x.localupdatetime = +(new Date);
                oF6z.cDs9j(p1x.mainSong);
                p1x.mainTrackId = p1x.mainSong.id;
                delete p1x.mainSong
            } else {
                var bUv1x = oF6z.eJ3x(p1x.mainTrackId);
                bUv1x && m1x.push(bUv1x)
            }
        });
        return m1x
    }
    function ZY8Q(i1x, e1x) {
        var rx7q = e1x.action == "play" && e1x.type != 17 && e1x.type != 18
          , fV3x = e1x.action == "play";
        if (!i1x.length)
            return;
        if (e1x.type == 19) {
            i1x = l1x.Mj3x(i1x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e1x.id
            })
        } else {
            i1x = l1x.Mj3x(i1x, true, {
                play: true
            })
        }
        k1x.bd1x(i1x, function(p1x) {
            p1x.source = l1x.blq1x({
                fid: e1x.from,
                fdata: e1x.data,
                type: e1x.type,
                rid: e1x.id
            }, p1x.id)
        });
        top.player.addTo(i1x, rx7q, fV3x);
        kH5M.TS6M({
            rid: e1x.id,
            type: e1x.type,
            hash: l1x.Lt3x(),
            play: fV3x,
            source: e1x.from,
            sourceid: e1x.data
        })
    }
    function cwD7w(d1x) {
        var ez3x = d1x.ext || {};
        i1x = oF6z.hF4J(d1x.key);
        ZY8Q(i1x, ez3x);
        if (ez3x.type == 13 && ez3x.action == "play" && i1x && i1x.length > 0) {
            bUp1x(ez3x.node);
            v1x.bm1x("/api/playlist/update/playcount", {
                query: {
                    id: ez3x.id
                }
            })
        }
    }
    function cwC7v(d1x) {
        var i1x = [oF6z.eJ3x(d1x.id)]
          , bj1x = i1x[0]
          , qY7R = l1x.pJ6D(bj1x)
          , sP7I = bj1x.privilege || {};
        if (qY7R == 10) {
            l1x.vJ8B(sP7I.fee || bj1x.fee, bj1x.id, "song", null, sP7I)
        } else if (qY7R == 100) {
            l1x.iz4D(null, null, null, true, bj1x)
        } else if (qY7R == 11) {
            l1x.bFq6k(bj1x.id, 18)
        } else {
            ZY8Q(i1x, d1x.ext)
        }
    }
    function cwB7u(d1x) {
        var i1x = bUs1x(HP2x.hF4J(d1x.key));
        ZY8Q(i1x, d1x.ext)
    }
    function cwA7t(d1x) {
        var i1x = bUs1x([HP2x.eJ3x(d1x.id)]);
        ZY8Q(i1x, d1x.ext)
    }
    function dP2x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bUp1x(g1x) {
        var u1x = a9j.t1x(g1x, "resType")
          , C1x = a9j.t1x(g1x, "resId")
          , K1x = u1x + "-" + C1x;
        if (bUi1x[K1x])
            return;
        var bUH1x = a9j.B1x("play-count")
          , bta3x = a9j.H1x(g1x.parentNode, "nb")
          , SE6y = null;
        if (bUH1x) {
            SE6y = bUH1x
        } else {
            SE6y = !!bta3x && !!bta3x[0] ? bta3x[0] : null
        }
        if (SE6y) {
            var cz1x = SE6y.innerHTML;
            if (/^\d+$/.test(cz1x)) {
                SE6y.innerText = +cz1x + 1
            }
            bUi1x[K1x] = true
        }
    }
    l1x.cwz7s = function(g1x) {
        h1x.s1x(g1x || document.body, "click", xa9R.f1x(this))
    }
    ;
    l1x.cwy7r = function(U1x, u1x, C1x) {
        bUo1x({
            action: U1x,
            type: u1x,
            id: C1x
        })
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), I1x = c0x("nej.ut"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), b0x, L1x;
    q1x.fq3x({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m1x, e1x) {
                this.cww7p(m1x, e1x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m1x, e1x) {
                this.z1x("onshareall", e1x.result)
            },
            onerror: function(m1x, e1x) {
                this.z1x("onshareall", e1x.result)
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
            format: function(m1x, e1x) {
                e1x.options.picUrl = m1x.picUrl;
                this.bVc1x(e1x.options, e1x.result)
            },
            onerror: function(m1x, e1x) {
                this.z1x("onshareall", e1x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q1x, e1x) {
                this.qb6V("vid_info-" + e1x.data.nosKey, Q1x);
                return Q1x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e1x) {},
            format: function(m1x, e1x) {
                e1x.data = e1x.data2;
                this.cq1x("share-all", e1x)
            },
            onerror: "onshareerror"
        }
    });
    q1x.bth3x = NEJ.C();
    b0x = q1x.bth3x.N1x(q1x.hJ4N);
    b0x.cwv7o = function() {
        var vc8U = function(Q1x, e1x) {
            e1x.times++;
            if (e1x.times > 10) {
                this.z1x("onvinfoerror", e1x.key, Q1x)
            } else {
                setTimeout(ex3x.f1x(this, e1x), e1x.times * 1e3)
            }
        };
        var zN9E = function(Q1x, e1x) {
            this.z1x("onvinfo", e1x.key, Q1x)
        };
        var ex3x = function(e1x) {
            var X1x = e1x.url;
            v1x.bm1x(X1x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: zN9E.ew3x(this, e1x),
                onerror: vc8U.ew3x(this, e1x)
            })
        };
        return function(e1x) {
            e1x.times = 0;
            ex3x.call(this, e1x)
        }
    }();
    b0x.cGe9V = function() {
        var Ie2x;
        var vc8U = function(Q1x, e1x) {
            if (Q1x.code > 0) {
                clearInterval(this.If2x);
                this.z1x("onviderror", e1x.data.nosKey)
            }
        };
        var zN9E = function(K1x, Q1x) {
            if (Q1x.vid && Q1x.covers) {
                clearInterval(this.If2x);
                this.z1x("onvid", K1x, Q1x)
            }
        };
        var ex3x = function(e1x) {
            if (+(new Date) - Ie2x > 60 * 60 * 1e3) {
                clearInterval(this.If2x);
                this.z1x("onviderror", e1x.data.nosKey);
                return
            }
            e1x.onload = zN9E.f1x(this, e1x.data.nosKey);
            e1x.onerror = vc8U.f1x(this);
            this.cq1x("vid-get", e1x)
        };
        return function(e1x) {
            if (!e1x || !e1x.data)
                return;
            Ie2x = +(new Date);
            this.If2x = clearInterval(this.If2x);
            this.If2x = setInterval(ex3x.f1x(this, e1x), 1e4);
            ex3x.apply(this, arguments)
        }
    }();
    b0x.cws7l = function() {
        this.If2x = clearInterval(this.If2x)
    }
    ;
    b0x.cww7p = function(m1x, nX6R) {
        if (m1x.event && nX6R.snsTypes) {
            if (nX6R.pics) {
                var bVA1x = [];
                for (var i = 0, len = nX6R.pics.length; i < len; i++) {
                    bVA1x[i] = nX6R.pics[i].originId
                }
                this.cq1x("share_img_compound", {
                    data: {
                        picIds: bVA1x.join(",")
                    },
                    options: nX6R,
                    result: m1x
                })
            } else {
                nX6R.picUrl = nX6R.picUrl;
                this.bVc1x(nX6R, m1x)
            }
        } else {
            this.z1x("onshareall", m1x)
        }
        var vi8a = q1x.hS4W.A1x();
        vi8a.eU3x(nX6R.isPub ? "pubevent" : "shareevent", {
            id: m1x.id
        })
    }
    ;
    b0x.bVc1x = function(nX6R, m1x) {
        var ct1x = {}
          , d1x = m1x.event || {};
        ct1x.eventid = d1x.id;
        ct1x.eventtype = d1x.type;
        nX6R.picUrl && (ct1x.picUrl = nX6R.picUrl);
        ct1x.snsTypes = nX6R.snsTypes;
        ct1x.msg = nX6R.data.msg || "";
        ct1x.type = nX6R.data.type;
        nX6R.data.id && (ct1x.id = nX6R.data.id);
        if (ct1x.eventtype == 41) {
            var Q1x = l1x.Fh1x(d1x.json);
            ct1x.eventtype = 39;
            if (ct1x.msg) {
                ct1x.msg += "  "
            }
            ct1x.msg += "分享" + Q1x.video.creator.nickname + "的视频《" + Q1x.video.title + "》";
            delete ct1x.id
        }
        this.cq1x("share-sns", {
            data: ct1x,
            result: m1x
        })
    }
    ;
    b0x.cwr7k = function(e1x) {
        var j1x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k1x.nS6M(5)
        };
        j1x = NEJ.EX(j1x, e1x);
        if (j1x.id < 0) {
            delete j1x.id;
            j1x.type = "noresource"
        }
        if (!j1x.threadId) {
            delete j1x.threadId
        }
        if (!j1x.actId) {
            delete j1x.actId
        }
        if (!j1x.pics) {
            delete j1x.pics
        } else {
            j1x.pics = JSON.stringify(j1x.pics)
        }
        this.cq1x("share-all", {
            data: j1x,
            snsTypes: e1x.snsTypes,
            picUrl: e1x.picUrl,
            pics: e1x.pics,
            isPub: e1x.isPub
        })
    }
    ;
    b0x.cwq7j = function(e1x) {
        this.cq1x("share-private", e1x)
    }
    ;
    b0x.cwo7h = function(e1x) {
        this.cq1x("video-submit", e1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), n1x = c0x("nm.l"), b0x, L1x;
    var cwn7g = {
        40: !0
    };
    q1x.fq3x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e1x) {
                e1x.data.getcounts = true;
                e1x.data.pagesize = e1x.data.limit;
                if (e1x.data.offset == 0) {
                    e1x.data.lasttime = -1
                }
                delete e1x.data.offset
            },
            format: function(Q1x, e1x) {
                Q1x.event = l1x.bac8U(Q1x.event, function(p1x, r1x) {
                    return !cwn7g[p1x.type]
                });
                this.cwm7f(Q1x.event);
                e1x.data.lasttime = Q1x.lasttime;
                if (Q1x.event.length) {
                    Q1x.event.length = e1x.limit
                }
                return {
                    list: Q1x.event,
                    total: Q1x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q1x, e1x) {
                return {
                    list: Q1x.events,
                    total: Q1x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e1x) {
                e1x.data.pagesize = 20
            },
            format: function(Q1x, e1x) {
                return Q1x.event
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
            filter: function(e1x) {
                if (e1x.data.offset == 0) {
                    e1x.data.time = -1
                }
                delete e1x.data.offset;
                e1x.data.getcounts = true
            },
            format: function(Q1x, e1x) {
                e1x.data.time = Q1x.lasttime;
                var i1x = Q1x.events;
                if (Q1x.more && i1x.length < e1x.data.limit) {
                    i1x = this.Ja2x(i1x, e1x.data.limit)
                }
                return {
                    list: i1x,
                    total: Q1x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m1x, e1x) {
                m1x.conf = e1x.conf;
                return m1x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e1x, bh1x) {
                if (e1x.like) {
                    if (e1x.comment) {
                        bh1x.url = "/api/v1/comment/like"
                    } else {
                        bh1x.url = "/api/resource/like"
                    }
                    bh1x.onload = "oneventlike";
                    bh1x.onerror = "oneventlikeerr"
                } else {
                    if (e1x.comment) {
                        bh1x.url = "/api/v1/comment/unlike"
                    } else {
                        bh1x.url = "/api/resource/unlike"
                    }
                    bh1x.onload = "oneventunlike";
                    bh1x.onerror = "oneventunlikeerr"
                }
            },
            format: function(m1x, e1x) {
                m1x.eid = e1x.eid;
                m1x.origin = e1x.origin;
                m1x.ext = e1x.ext;
                return m1x
            },
            onmessage: function(bY1x, m1x) {
                if (bY1x == 250) {
                    n1x.Z1x.J1x({
                        tip: m1x.message || m1x.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m1x, e1x) {
                m1x.id = e1x.data.id;
                return m1x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e1x, bh1x) {
                if (e1x.data.type == "nointer") {
                    bh1x.url = "/api/event/rcmd/reject"
                } else if (e1x.data.transcoding) {
                    bh1x.url = "/api/event/video/transcoding/delete"
                } else {
                    bh1x.url = "/api/event/delete"
                }
            },
            format: function(m1x, e1x) {
                m1x.id = e1x.data.id;
                return m1x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m1x, e1x) {
                m1x.id = e1x.data.id;
                return m1x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e1x) {
                e1x.data.lasttime = e1x.data.lasttime || -1;
                e1x.data.pagesize = e1x.data.limit;
                e1x.data.getcounts = true;
                delete e1x.data.offset
            },
            format: function(Q1x, e1x) {
                e1x.data.lasttime = Q1x.lasttime;
                var i1x = Q1x.events;
                if (Q1x.more)
                    i1x = this.Ja2x(i1x, e1x.data.pagesize);
                return {
                    list: i1x,
                    total: Q1x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q1x.zV9M = NEJ.C();
    b0x = q1x.zV9M.N1x(q1x.hJ4N);
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.btz3x = function(u1x, cW2x) {
        return u1x + "-" + cW2x
    }
    ;
    b0x.cGf9W = function(e1x) {
        this.cq1x("ievent-get", e1x)
    }
    ;
    b0x.cGh0x = function(e1x) {
        this.cq1x("ievent-new-get", e1x)
    }
    ;
    b0x.cGi0x = function(e1x) {
        this.cq1x("ievent-user-get", e1x)
    }
    ;
    b0x.cGj0x = function(u1x, cW2x) {
        return this.rD7w(this.btz3x(u1x, cW2x))
    }
    ;
    b0x.cGk0x = function(IX2x, e1x) {
        if (!IX2x || !IX2x.length)
            return;
        e1x = e1x || {};
        var bz1x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, FT1x = [], byv4z = [], j1x; i < IX2x.length; ++i) {
            j1x = IX2x[i];
            j1x = this.rD7w(this.btz3x(j1x.type, j1x.id));
            if (!j1x) {
                FT1x.push(IX2x[i].id);
                byv4z.push(bz1x[IX2x[i].type] || 0)
            }
        }
        if (!FT1x.length) {
            this.z1x("oneventresload", e1x.conf);
            return
        }
        e1x.data = {
            ids: JSON.stringify(FT1x),
            types: JSON.stringify(byv4z)
        };
        e1x.onload = this.cwe7X.f1x(this);
        this.cq1x("ievent-res-get", e1x)
    }
    ;
    b0x.cwe7X = function(m1x) {
        if (m1x.code != 200) {
            this.z1x("oneventreserror", m1x.code);
            return
        }
        var bz1x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i1x = m1x.results; i < i1x.length; ++i) {
            this.qb6V(this.btz3x(bz1x[i1x[i].type], i1x[i].id), i1x[i])
        }
        this.z1x("oneventresload", m1x.conf)
    }
    ;
    b0x.byy4C = function(j1x) {
        var K1x = "event-list";
        this.bhj0x(K1x, j1x);
        this.z1x("onitemadd", {
            key: K1x,
            action: "add",
            data: j1x,
            flag: -1
        })
    }
    ;
    b0x.oU6O = function(e1x) {
        this.cq1x("ievent-like", e1x)
    }
    ;
    b0x.ms5x = function(e1x) {
        this.cq1x("ievent-delete", e1x)
    }
    ;
    b0x.Ja2x = function(i1x, gd3x) {
        for (var i = i1x.length; i < gd3x; i++)
            i1x.push(null);
        return i1x
    }
    ;
    b0x.cwm7f = function(i1x) {
        var m1x = [];
        if (!i1x || !i1x.length)
            return;
        k1x.bd1x(i1x, function(d1x) {
            d1x.biData = this.byB4F(d1x)
        }, this)
    }
    ;
    b0x.byB4F = function() {
        var bcg9X = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
          , cwc7V = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d1x) {
            var Q1x = {
                id: d1x.id,
                sourceid: d1x.user.userId,
                alg: d1x.rcmdInfo ? d1x.rcmdInfo.alg : null,
                contentType: bcg9X[d1x.type] || (k1x.di2x(cwc7V, d1x.type) != -1 ? "user_event" : "other")
            };
            return Q1x
        }
    }();
    b0x.DS1x = function(cvZ7S, d1x) {
        var Q1x = this.byB4F(d1x);
        Q1x.actionType = cvZ7S;
        if (window.log)
            log("eventclick", Q1x)
    }
    ;
    b0x.cGm0x = function(e1x) {
        this.cq1x("event_latest-list", e1x)
    }
}
)();
(function(factory) {
    window.SparkMD5 = factory()
}
)(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    }
      , hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0]
          , b = x[1]
          , c = x[2]
          , d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535)
              , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this,begin,num);
                targetArray.set(sourceArray);
                return target
            }
        }
        )()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    }
    ;
    SparkMD5.prototype.appendBinary = function(contents) {
        this.sp7i += contents;
        this.bq1x += contents.length;
        var length = this.sp7i.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR2x, md5blk(this.sp7i.substring(i - 64, i)))
        }
        this.sp7i = this.sp7i.substring(i - 64);
        return this
    }
    ;
    SparkMD5.prototype.end = function(raw) {
        var buff = this.sp7i, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.pi6c(tail, length);
        ret = hex(this.dR2x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.prototype.reset = function() {
        this.sp7i = "";
        this.bq1x = 0;
        this.dR2x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.sp7i,
            length: this.bq1x,
            hash: this.dR2x
        }
    }
    ;
    SparkMD5.prototype.setState = function(state) {
        this.sp7i = state.buff;
        this.bq1x = state.length;
        this.dR2x = state.hash;
        return this
    }
    ;
    SparkMD5.prototype.destroy = function() {
        delete this.dR2x;
        delete this.sp7i;
        delete this.bq1x
    }
    ;
    SparkMD5.prototype.pi6c = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR2x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq1x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR2x, tail)
    }
    ;
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    }
    ;
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content)
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    }
    ;
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.sp7i.buffer, arr, true), length = buff.length, i;
        this.bq1x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR2x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.sp7i = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.sp7i, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.pi6c(tail, length);
        ret = hex(this.dR2x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.sp7i = new Uint8Array(0);
        this.bq1x = 0;
        this.dR2x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    }
    ;
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    }
    ;
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.pi6c = SparkMD5.prototype.pi6c;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr))
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    return SparkMD5
});
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , br1x = NEJ.F
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , v1x = c0x("nej.j")
      , em3x = c0x("nej.g")
      , k1x = c0x("nej.u")
      , fM3x = c0x("nej.n")
      , I1x = c0x("nej.ut")
      , l1x = c0x("nm.x")
      , q1x = c0x("nm.d")
      , iK4O = c0x("nm.x.nos")
      , w1x = c0x("nm.w");
    var cvX7Q = 1024 * 256
      , cvW7P = 1024 * 1024 * 2
      , qE7x = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    }
      , bzi5n = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br1x
      , qC7v = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    }
      , jF4J = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var nP6J = {};
    var vi8a = q1x.hS4W.A1x();
    iK4O.cGn0x = function() {
        return jF4J
    }
    ;
    var cvS7L = function() {
        return k1x.nS6M(6) + +(new Date)
    };
    var IV2x = function(iF4J, e1x) {
        if (!nP6J[e1x.taskId]) {
            return
        }
        (e1x.onuploading || br1x).call(this, iF4J)
    };
    var btF3x = function(R1x) {
        var cvR7K = R1x.md5
          , cU2x = R1x.file
          , cvQ7J = cvR7K + cU2x.size;
        return "nos_file_hash_" + cvQ7J
    };
    var cvP7I = function(R1x) {
        var K1x = btF3x(R1x)
          , j1x = v1x.bLv8n(K1x, "{}");
        try {
            j1x = JSON.parse(j1x)
        } catch (e) {
            j1x = {}
        }
        return j1x
    };
    var cvO7H = function(R1x, e1x) {
        if (!R1x.md5) {
            return
        }
        var K1x = btF3x(R1x)
          , j1x = v1x.bLv8n(K1x, "{}");
        try {
            j1x = JSON.parse(j1x)
        } catch (e) {
            j1x = {}
        }
        NEJ.X(j1x, e1x);
        v1x.vb8T(K1x, JSON.stringify(j1x))
    };
    var cvN7G = function(R1x) {
        var K1x = btF3x(R1x);
        v1x.MJ3x(K1x)
    };
    var cvL7E = function(R1x, eN3x) {
        var X1x = R1x.urls[Math.min(R1x.urlIndex, R1x.urls.length - 1)]
          , cU2x = R1x.file
          , lp5u = R1x.bucket
          , mu5z = R1x.objectKey
          , cR2x = R1x.token
          , bJ1x = R1x.context
          , oA6u = {}
          , QU5Z = bzi5n.call(cU2x, R1x.beg, R1x.end)
          , bv1x = {
            offset: R1x.beg,
            complete: R1x.lastChunk || false,
            version: "1.0"
        };
        if (bJ1x) {
            bv1x.context = bJ1x
        }
        oA6u["x-nos-token"] = cR2x;
        oA6u[em3x.zA9r] = cU2x.type;
        R1x.reqId = v1x.bm1x(X1x + "/" + lp5u + "/" + mu5z, {
            type: "json",
            method: "POST",
            headers: oA6u,
            query: bv1x,
            data: QU5Z,
            onload: eN3x.onload,
            onerror: eN3x.onerror
        })
    };
    var cvK7D = function(m1x, R1x, e1x) {
        m1x = {
            code: 200,
            fileName: e1x.file.name,
            size: e1x.file.size,
            type: e1x.file.type,
            bucket: R1x.bucket,
            docId: R1x.docId,
            objectKey: R1x.objectKey,
            url: "//nos.netease.com/" + R1x.bucket + "/" + R1x.objectKey
        };
        cvN7G(R1x);
        if (!nP6J[e1x.taskId]) {
            return
        }
        delete nP6J[e1x.taskId];
        vi8a.eU3x("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m1x)
        });
        (e1x.onsuccess || br1x).call(this, m1x)
    };
    var cvJ7C = function(m1x, e1x) {
        (e1x.onerror || br1x).call(this, m1x)
    };
    var cvG7z = function(m1x, R1x, e1x) {
        R1x.context = m1x.context;
        R1x.beg = m1x.offset;
        var iF4J = R1x.beg / R1x.file.size;
        cvO7H(R1x, {
            bucket: R1x.bucket,
            objectKey: R1x.objectKey,
            token: R1x.token,
            context: R1x.context,
            beg: R1x.beg,
            updateTime: +(new Date)
        });
        iF4J = qC7v.DNS_GET + (qC7v.UPLOADED - qC7v.DNS_GET) * iF4J;
        IV2x(iF4J, e1x);
        if (R1x.lastChunk) {
            cvK7D(m1x, R1x, e1x)
        } else {
            Xh7a(R1x, e1x)
        }
    };
    var cvF7y = function(m1x, R1x, e1x) {
        vi8a.eU3x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m1x.data,
            body: m1x.extData,
            ext: JSON.stringify(R1x),
            timging: +(new Date) - R1x.chuckUploadStartTime
        });
        if (R1x.urlIndex < Math.max(R1x.urls.length - 1, 5)) {
            R1x.urlIndex++;
            Xh7a(R1x, e1x)
        } else {
            cvJ7C(m1x, e1x)
        }
    };
    var Xh7a = function(R1x, e1x) {
        if (!R1x || R1x.step == -1) {
            return
        }
        R1x.end = R1x.beg + cvX7Q;
        if (R1x.end >= R1x.file.size) {
            R1x.end = R1x.file.size;
            R1x.lastChunk = true
        }
        R1x.chuckUploadStartTime = +(new Date);
        cvL7E(R1x, {
            onload: cvG7z.ew3x(this, R1x, e1x),
            onerror: cvF7y.ew3x(this, R1x, e1x)
        })
    };
    var cvD7w = function(m1x, R1x, e1x) {
        R1x.beg = m1x.offset;
        var iF4J = R1x.beg / R1x.file.size;
        iF4J = qC7v.DNS_GET + (qC7v.UPLOADED - qC7v.DNS_GET) * iF4J;
        IV2x(iF4J, e1x);
        Xh7a(R1x, e1x)
    };
    var cvC7v = function(m1x, R1x, e1x) {
        R1x.beg = 0;
        delete R1x.context;
        btS3x(R1x, e1x)
    };
    var bAc5h = function(Qj5o, R1x, e1x) {
        R1x.lastChunk = false;
        R1x.urls = Qj5o;
        R1x.urlIndex = 0;
        IV2x(qC7v.DNS_GET, e1x);
        if (R1x.fromExist) {
            delete R1x.fromExist;
            var X1x = R1x.urls[Math.min(R1x.urlIndex, R1x.urls.length - 1)]
              , lp5u = R1x.bucket
              , mu5z = R1x.objectKey
              , cR2x = R1x.token
              , bJ1x = R1x.context
              , oA6u = {}
              , bv1x = {
                context: bJ1x,
                version: "1.0"
            };
            oA6u["x-nos-token"] = cR2x;
            R1x.reqId = v1x.bm1x(X1x + "/" + lp5u + "/" + mu5z + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: oA6u,
                query: bv1x,
                onload: cvD7w.ew3x(this, R1x, e1x),
                onerror: cvC7v.ew3x(this, R1x, e1x)
            })
        } else {
            R1x.beg = 0;
            Xh7a(R1x, e1x)
        }
    };
    var cvx7q = function(m1x, R1x, e1x) {
        m1x.code = qE7x.DNS_ERROR;
        (e1x.onerror || br1x).call(this, m1x)
    };
    var bAg5l = function(j1x, e1x) {
        var m1x = j1x.result || {}
          , lp5u = m1x.bucket
          , mu5z = m1x.objectKey
          , cR2x = m1x.token
          , R1x = nP6J[e1x.taskId];
        if (!lp5u || !mu5z || !cR2x || !R1x) {
            m1x.code = qE7x.TOKEN_ERROR;
            (e1x.onerror || br1x).call(this, m1x);
            return
        }
        R1x.bucket = lp5u;
        R1x.objectKey = mu5z;
        R1x.docId = m1x.docId;
        R1x.token = cR2x;
        IV2x(qC7v.TOKEN_GET, e1x);
        if (location.protocol == "https:") {
            bAc5h(["//nosup-hz1.127.net"], R1x, e1x)
        } else {
            R1x.reqId = iK4O.cvw7p({
                bucket: lp5u,
                onload: bAc5h.ew3x(this, R1x, e1x),
                onerror: cvx7q.ew3x(this, R1x, e1x)
            })
        }
        R1x.step = 1
    };
    var cvv7o = function(m1x, e1x) {
        m1x.code = qE7x.TOKEN_ERROR;
        (e1x.onerror || br1x).call(this, m1x)
    };
    var btS3x = function(R1x, e1x) {
        var cU2x = e1x.file
          , eM3x = cU2x.name || ""
          , ez3x = eM3x.split(".").pop();
        iK4O.Wf7Y(NEJ.X({
            filename: eM3x,
            ext: ez3x,
            onload: bAg5l.ew3x(this, e1x),
            onerror: cvv7o.ew3x(this, e1x)
        }, e1x, function(p1x) {
            return k1x.gF3x(p1x) || k1x.lQ5V(p1x)
        }))
    };
    var cvu7n = function(R1x, e1x) {
        if (!R1x || R1x.step == -1) {
            return
        }
        R1x.md5 = R1x.spark.end();
        var IP2x = cvP7I(R1x) || {}
          , lp5u = IP2x.bucket
          , mu5z = IP2x.objectKey
          , cR2x = IP2x.token;
        if (!lp5u || !mu5z || !cR2x) {
            btS3x(R1x, e1x)
        } else {
            R1x.context = IP2x.context;
            R1x.beg = IP2x.beg;
            R1x.fromExist = true;
            bAg5l({
                result: IP2x
            }, e1x)
        }
    };
    var cvt7m = function(EG1x, R1x, e1x) {
        if (!R1x || R1x.step == -1) {
            return
        }
        R1x.beg = R1x.end;
        var iF4J = R1x.beg / R1x.file.size;
        iF4J = 0 + qC7v.MD5_DONE * iF4J;
        IV2x(iF4J, e1x);
        R1x.spark.append(EG1x.result);
        if (R1x.lastChunk) {
            cvu7n(R1x, e1x)
        } else {
            bAB5G(R1x, e1x)
        }
    };
    var cvs7l = function(m1x, R1x, e1x) {
        R1x.md5 = "";
        btS3x(R1x, e1x)
    };
    var bAB5G = function(R1x, e1x) {
        if (!R1x || R1x.step == -1) {
            return
        }
        R1x.end = R1x.beg + cvW7P;
        if (R1x.end >= R1x.file.size) {
            R1x.end = R1x.file.size;
            R1x.lastChunk = true
        }
        var EG1x = new FileReader;
        EG1x.onload = cvt7m.f1x(this, EG1x, R1x, e1x);
        EG1x.onerror = cvs7l.f1x(this, EG1x, R1x, e1x);
        EG1x.readAsArrayBuffer(bzi5n.call(R1x.file, R1x.beg, R1x.end))
    };
    iK4O.hV4Z = function(e1x) {
        var cU2x = e1x.file
          , eM3x = cU2x.name || ""
          , ez3x = eM3x.split(".").pop()
          , EI1x = cvS7L();
        e1x.taskId = EI1x;
        nP6J[EI1x] = {
            step: 0
        };
        IV2x(0, e1x);
        var R1x = nP6J[EI1x];
        R1x.id = EI1x;
        R1x.file = cU2x;
        R1x.beg = 0;
        R1x.lastChunk = false;
        R1x.spark = new SparkMD5.ArrayBuffer;
        var cvq7j = e1x.onerror || br1x;
        e1x.onerror = function() {
            if (!nP6J[EI1x]) {
                return
            }
            delete nP6J[EI1x];
            cvq7j.apply(this, arguments)
        }
        ;
        vi8a.eU3x("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bAB5G(R1x, e1x);
        return EI1x
    }
    ;
    iK4O.kn5s = function(C1x) {
        var R1x = nP6J[C1x];
        if (R1x) {
            if (R1x.step == 0) {
                delete nP6J[C1x]
            } else {
                R1x.step = -1;
                if (R1x.reqId) {
                    v1x.kn5s(R1x.reqId)
                }
                delete nP6J[C1x]
            }
        }
    }
    ;
    iK4O.Wf7Y = function() {
        var yw9n = function(m1x, e1x) {
            (e1x.onload || br1x).call(this, m1x)
        };
        var Cq0x = function(m1x, e1x) {
            (e1x.onerror || br1x).call(this, m1x)
        };
        var bAL5Q = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e1x) {
            var VY7R = e1x.returnBody || bAL5Q;
            if (k1x.lQ5V(VY7R)) {
                try {
                    JSON.stringify(VY7R)
                } catch (e) {
                    VY7R = bAL5Q
                }
            }
            return v1x.bm1x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e1x.filename || "",
                    ext: e1x.ext || "",
                    type: e1x.type || jF4J.OTHER,
                    bucket: e1x.bucket || "",
                    local: e1x.local || false,
                    nos_product: e1x.nosProduct || 0,
                    return_body: VY7R
                },
                onload: yw9n.ew3x(this, e1x),
                onerror: Cq0x.ew3x(this, e1x)
            })
        }
    }();
    iK4O.cvw7p = function() {
        var cvm7f = "//wanproxy.127.net/lbs";
        var yw9n = function(m1x, e1x) {
            if (m1x.lbs) {}
            var Qj5o = m1x.upload;
            if (!Qj5o || !Qj5o.length) {
                Cq0x(m1x, e1x)
            }
            (e1x.onload || br1x).call(this, Qj5o)
        };
        var Cq0x = function(m1x, e1x) {
            (e1x.onerror || br1x).call(this, m1x)
        };
        return function(e1x) {
            var lp5u = e1x.bucket;
            return v1x.bm1x(cvm7f, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lp5u
                },
                onload: yw9n.ew3x(this, e1x),
                onerror: Cq0x.ew3x(this, e1x)
            })
        }
    }();
    iK4O.VT7M = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), cd1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), iK4O = c0x("nm.x.nos"), E1x = c0x("nm.m"), n1x = c0x("nm.l"), w1x = c0x("nm.w"), b0x, L1x;
    var ge3x = a9j.jj4n('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w1x.IN2x = NEJ.C();
    b0x = w1x.IN2x.N1x(bD1x.ej3x);
    b0x.ch1x = function() {
        this.cg1x = ge3x
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.bH1x = this.o1x;
        this.hA4E = a9j.H1x(this.o1x, "j-file")[0];
        h1x.s1x(this.hA4E, "change", this.py6s.f1x(this))
    }
    ;
    b0x.bl1x = function(e1x) {
        e1x = e1x || {};
        this.bn1x(e1x);
        this.hA4E.id = e1x.inputId || "";
        this.hA4E.accept = e1x.accept || "*";
        this.wl8d = e1x
    }
    ;
    b0x.beT0x = function() {
        return a9j.lK5P(this.hA4E)
    }
    ;
    b0x.py6s = function(d1x) {
        if (this.hA4E.value == "")
            return;
        var kG5L = this.hA4E.value.split("\\")
          , eM3x = kG5L.length > 0 ? kG5L[kG5L.length - 1] : kG5L[0]
          , oR6L = (this.hA4E.files || [{}])[0];
        var cm1x = {
            files: this.hA4E.files,
            filename: eM3x,
            size: oR6L.size,
            cancelUpload: false
        };
        this.z1x("onchange", cm1x);
        if (cm1x.cancelUpload) {
            this.hA4E.value = "";
            return
        }
        if (cm1x.stopped) {
            return
        }
        this.Pw4A()
    }
    ;
    b0x.Pw4A = function() {
        if (this.hA4E.value == "")
            return;
        var kG5L = this.hA4E.value.split("\\")
          , eM3x = kG5L.length > 0 ? kG5L[kG5L.length - 1] : kG5L[0]
          , ez3x = (eM3x.split(".") || []).pop()
          , oR6L = (this.hA4E.files || [{}])[0]
          , EW1x = (oR6L.type || "").split("/").shift();
        if (oR6L.size > 100 * 1024 * 1024) {
            return this.me5j("onerror", {
                code: -200
            })
        }
        this.z1x("onuploading", 0);
        this.bBw5B = iK4O.Wf7Y(NEJ.X({
            onload: this.Pt4x.ew3x(this, eM3x),
            onerror: this.me5j.f1x(this)
        }, this.wl8d, function(p1x) {
            return k1x.gF3x(p1x) || k1x.lQ5V(p1x)
        }))
    }
    ;
    b0x.Pt4x = function(bN1x, eM3x) {
        var m1x = bN1x.result || {}
          , lp5u = m1x.bucket
          , mu5z = m1x.objectKey
          , cR2x = m1x.token;
        if (!lp5u || !mu5z || !cR2x) {
            bN1x.code = -100;
            this.me5j.call(this, bN1x);
            return
        }
        var oR6L = (this.hA4E.files || [{}])[0];
        var hH4L = a9j.dm2x(this.bH1x);
        hH4L[0].value = mu5z;
        hH4L[1].value = cR2x;
        hH4L[2].value = "json";
        if (oR6L.type && oR6L.type.indexOf("audio") == 0) {
            hH4L[3].value = "audio/mpeg"
        } else {
            hH4L[3].value = oR6L.type || ""
        }
        this.bH1x.action = "//nos.netease.com/" + lp5u;
        this.Fa1x = m1x;
        this.rq7j = eM3x;
        this.z1x("onuploading", .2);
        this.hV4Z()
    }
    ;
    b0x.hV4Z = function() {
        this.bBw5B = v1x.hV4Z(this.bH1x, {
            type: "json",
            onload: this.ux8p.f1x(this),
            onerror: this.me5j.f1x(this),
            onuploading: this.bew0x.f1x(this)
        })
    }
    ;
    b0x.kn5s = function() {
        v1x.kn5s(this.bBw5B);
        this.bH1x.reset()
    }
    ;
    b0x.ux8p = function(bN1x) {
        var cR2x = this.Fa1x
          , eM3x = this.rq7j
          , oR6L = (this.hA4E.files || [{}])[0]
          , ky5D = {
            code: 200,
            fileName: eM3x,
            size: oR6L.size,
            bucket: cR2x.bucket,
            docId: cR2x.docId,
            objectKey: cR2x.objectKey,
            url: "//nos.netease.com/" + cR2x.bucket + "/" + cR2x.objectKey
        };
        if (!bN1x) {
            bN1x = ky5D
        }
        if (!bN1x.code || bN1x.code == 200) {
            this.z1x("onsuccess", NEJ.X(ky5D, bN1x))
        } else {
            this.z1x("onerror", bN1x)
        }
        this.bH1x.reset()
    }
    ;
    b0x.me5j = function(bN1x) {
        this.z1x("onerror", bN1x);
        this.bH1x.reset()
    }
    ;
    b0x.bew0x = function(iF4J) {
        this.z1x("onuploading", .2 + iF4J.loaded / iF4J.total * .8)
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), cd1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), iK4O = c0x("nm.x.nos"), E1x = c0x("nm.m"), n1x = c0x("nm.l"), w1x = c0x("nm.w"), b0x, L1x;
    w1x.Ps4w = NEJ.C();
    b0x = w1x.Ps4w.N1x(cd1x.cJ2x);
    b0x.bl1x = function(e1x) {
        e1x = e1x || {};
        this.bn1x(e1x);
        this.bdW0x = w1x.IN2x.A1x(NEJ.X({
            parent: e1x.parent,
            onchange: this.py6s.f1x(this),
            onuploading: this.z1x.f1x(this, "onuploading"),
            onsuccess: this.z1x.f1x(this, "onsuccess"),
            onerror: this.z1x.f1x(this, "onerror")
        }, e1x, function(p1x) {
            return k1x.gF3x(p1x) || k1x.lQ5V(p1x)
        }));
        if (e1x.multiple && iK4O.VT7M()) {
            a9j.gN3x(this.bdW0x.beT0x(), "multiple", true)
        }
        this.wl8d = e1x
    }
    ;
    b0x.py6s = function(e1x) {
        var eM3x = e1x.filename
          , ez3x = (eM3x.split(".") || []).pop();
        this.bBR5W = (e1x.files || [{}])[0];
        this.z1x("onchange", e1x);
        if (iK4O.VT7M() && !e1x.stopped && !e1x.cancelUpload) {
            this.Pw4A(true);
            e1x.stopped = true
        }
    }
    ;
    b0x.beT0x = function() {
        return this.bdW0x.beT0x()
    }
    ;
    b0x.cvl7e = function() {
        return this.bBR5W
    }
    ;
    b0x.Pw4A = function(eZ3x, cU2x) {
        cU2x = cU2x || this.bBR5W;
        if (iK4O.VT7M()) {
            this.bBZ5e = iK4O.hV4Z(NEJ.X({
                file: cU2x,
                local: this.wl8d.bucket && this.wl8d.bucket.length,
                onuploading: this.z1x.f1x(this, "onuploading"),
                onsuccess: this.z1x.f1x(this, "onsuccess"),
                onerror: this.z1x.f1x(this, "onerror")
            }, this.wl8d, function(p1x) {
                return k1x.gF3x(p1x) || k1x.lQ5V(p1x)
            }));
            return this.bBZ5e
        } else if (!eZ3x) {
            this.bdW0x.Pw4A()
        }
    }
    ;
    b0x.kn5s = function(C1x) {
        C1x = C1x || this.bBZ5e;
        if (C1x) {
            iK4O.kn5s(C1x)
        }
        this.bdW0x.kn5s()
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), em3x = c0x("nej.g"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), fM3x = c0x("nej.n"), I1x = c0x("nej.ut"), bc1x = c0x("nej.ui"), w1x = c0x("nm.w"), n1x = c0x("nm.l"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), M1x = c0x("nm.x.f"), iK4O = c0x("nm.x.nos"), b0x, L1x, buh3x = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, buk3x = 5 * 1024 * 1024, cGo0x = 80, bdC9t = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w1x.bCm5r = NEJ.C();
    b0x = w1x.bCm5r.N1x(I1x.uS8K);
    b0x.bhn0x = function() {
        return {
            x: this.CR0x.clientWidth - this.o1x.offsetWidth,
            y: this.CR0x.clientHeight - this.o1x.offsetHeight
        }
    }
    ;
    w1x.buv3x = NEJ.C();
    b0x = w1x.buv3x.N1x(bc1x.ej3x);
    b0x.ch1x = function() {
        this.cg1x = "m-xwgt-share-upload"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.H1x(this.o1x, "j-flag");
        this.bdb9S = i1x.shift();
        this.IM2x = i1x.shift();
        this.OQ4U = i1x.shift();
        this.bCt5y = {
            onchange: this.bCv5A.ew3x(this, 0),
            onerror: this.dP2x.f1x(this),
            onsuccess: this.sB7u.f1x(this),
            multiple: true,
            parent: this.IM2x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.buL4P = {
            onchange: this.bCv5A.ew3x(this, 1),
            onerror: this.dP2x.f1x(this),
            onsuccess: this.sB7u.f1x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cvj7c = w1x.Ps4w.A1x(this.bCt5y)
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.buL4P.parent = e1x.button;
        this.II2x && this.II2x.T1x();
        this.II2x = w1x.Ps4w.A1x(this.buL4P);
        this.o1x.style.display = "none";
        if (!!this.fd3x) {
            for (var i = this.fd3x.length - 1; i >= 0; i--) {
                a9j.cK2x(this.fd3x[i].element, false);
                if (this.fd3x[i].dragger)
                    this.fd3x[i].dragger.T1x()
            }
        }
        this.fd3x = [];
        if (this.Bn0x) {
            clearTimeout(this.Bn0x)
        }
        this.bap8h(0);
        this.Om4q = 0;
        this.bX1x([[this.bCt5y.parent, "click", this.bCN5S.f1x(this)], [this.buL4P.parent, "click", this.bCN5S.f1x(this)]])
    }
    ;
    b0x.bC1x = function() {
        h1x.hc4g(this.sX7Q, "click");
        if (!!this.fd3x) {
            for (var i = this.fd3x.length - 1; i >= 0; i--) {
                a9j.cK2x(this.fd3x[i].element, false);
                if (this.fd3x[i].dragger)
                    this.fd3x[i].dragger.T1x()
            }
        }
        this.fd3x = [];
        if (this.Bn0x) {
            clearTimeout(this.Bn0x)
        }
        this.Bn0x = 0;
        this.II2x && this.II2x.T1x();
        delete this.II2x;
        this.bF1x()
    }
    ;
    b0x.bCN5S = function(d1x) {
        if (!iK4O.VT7M() && this.fd3x.doing) {
            h1x.bg1x(d1x)
        }
    }
    ;
    b0x.bCv5A = function(e1x, r1x) {
        var nE6y = e1x.files, gX4b;
        e1x.stopped = true;
        if (!nE6y) {
            if (e1x.filename) {
                nE6y = [{
                    name: e1x.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = nE6y.length; i < len; i++) {
            if (!bdC9t.test(nE6y[i].name)) {
                this.buQ4U({
                    path: nE6y[i].name,
                    index: r1x,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (nE6y[i].size > buk3x) {
                this.buU4Y(-3);
                this.buQ4U({
                    path: nE6y[i].name,
                    index: r1x,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.buQ4U({
                    path: nE6y[i].name,
                    file: nE6y[i],
                    index: r1x,
                    status: 0
                })
            }
        }
    }
    ;
    b0x.buQ4U = function(tl7e) {
        if (this.fd3x.length >= 9) {
            this.buU4Y(-10, 3e3, this.bCX6R.f1x(this));
            return
        }
        this.cvi7b(tl7e);
        this.fd3x.push(tl7e);
        if (!!this.fd3x.length) {
            this.o1x.style.display = ""
        }
        if (this.fd3x.length >= 9) {
            this.IM2x.style.display = "none"
        } else {
            this.IM2x.style.display = ""
        }
        this.IG2x()
    }
    ;
    b0x.IG2x = function() {
        var buV4Z = -1
          , bDe6Y = 0;
        for (var i = 0, l = this.fd3x.length; i < l; i++) {
            if (this.fd3x[i].status == 1) {
                return
            }
            if (this.fd3x[i].status == 0 && buV4Z < 0) {
                buV4Z = i
            }
            if (this.fd3x[i].status == 2 || this.fd3x[i].status < 0) {
                bDe6Y++
            }
        }
        var p1x = this.fd3x[buV4Z];
        if (p1x) {
            (p1x.index == 0 ? this.cvj7c : this.II2x).Pw4A(false, p1x.file);
            p1x.status = 1;
            this.fd3x.doing = p1x;
            this.z1x("onstartupload", {})
        } else if (bDe6Y == this.fd3x.length) {
            this.z1x("onfinishupload", {})
        }
    }
    ;
    b0x.buW4a = function() {
        return this.fd3x.doing || {}
    }
    ;
    b0x.dP2x = function(d1x) {
        var tl7e = this.buW4a();
        tl7e.status = -4;
        tl7e.fail = "上传<br>失败";
        this.bDi6c(tl7e);
        this.fd3x.doing = null;
        this.IG2x()
    }
    ;
    b0x.sB7u = function(d1x) {
        var tl7e = this.buW4a()
          , dQ2x = d1x.fileName.match(bdC9t);
        tl7e.picUrl = d1x.url;
        v1x.bm1x("/upload/event/img/v1", {
            query: {
                imgid: d1x.docId,
                format: dQ2x[1]
            },
            type: "json",
            onload: this.bDj6d.f1x(this),
            onerror: this.bDj6d.f1x(this)
        })
    }
    ;
    b0x.bDj6d = function(d1x) {
        if (d1x && d1x.code == 200 && d1x.picInfo) {
            var tl7e = this.buW4a();
            tl7e.status = 2;
            var bx1x = NEJ.X({}, d1x.picInfo);
            bx1x.originId = bx1x.originIdStr;
            bx1x.squareId = bx1x.squareIdStr;
            bx1x.rectangleId = bx1x.rectangleIdStr;
            bx1x.pcSquareId = bx1x.pcSquareIdStr;
            bx1x.pcRectangleId = bx1x.pcRectangleIdStr;
            bx1x.originJpgId = bx1x.originJpgIdStr || bx1x.originJpgId;
            tl7e.picInfo = bx1x;
            this.bDi6c(tl7e);
            this.fd3x.doing = null;
            this.IG2x()
        } else {
            this.dP2x(d1x)
        }
    }
    ;
    b0x.buU4Y = function(r1x, kP5U, eN3x) {
        if (this.Om4q < r1x) {
            return
        }
        if (this.Bn0x) {
            clearTimeout(this.Bn0x);
            this.Bn0x = 0
        }
        if (kP5U) {
            this.OQ4U.innerText = buh3x[r1x * 1];
            this.Om4q = r1x;
            this.Bn0x = setTimeout(this.bap8h.f1x(this, r1x, eN3x), kP5U)
        } else {
            this.OQ4U.innerText = buh3x[r1x];
            this.Om4q = r1x
        }
        this.OQ4U.style.display = ""
    }
    ;
    b0x.bap8h = function(r1x, eN3x) {
        if (r1x && this.Om4q !== r1x) {
            return
        }
        this.Om4q = 0;
        this.OQ4U.innerText = buh3x[0];
        this.OQ4U.style.display = "none";
        eN3x && eN3x()
    }
    ;
    b0x.cvi7b = function(cU2x) {
        var j1x = {};
        if (cU2x.fail) {
            j1x.fail = cU2x.fail
        }
        var dV2x = a9j.cc1x("m-xwgt-share-upload-preview", j1x);
        cU2x.element = a9j.oc6W(dV2x);
        h1x.s1x(a9j.H1x(cU2x.element, "del")[0], "mousedown", this.cvh7a.f1x(this, cU2x), false);
        this.bdb9S.insertBefore(cU2x.element, this.bdb9S.lastElementChild);
        cU2x.dragger = w1x.bCm5r.A1x({
            view: this.bdb9S.parentNode,
            body: cU2x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.UD6x.f1x(this, cU2x),
            onchange: this.cvf7Y.f1x(this, cU2x),
            ondragend: this.bhG0x.f1x(this, cU2x)
        })
    }
    ;
    b0x.bDi6c = function(cU2x) {
        if (!cU2x || !cU2x.element) {
            return false
        }
        var j1x = {};
        if (cU2x.fail) {
            j1x.fail = cU2x.fail
        } else {
            j1x.url = cU2x.picUrl
        }
        a9j.y1x(cU2x.element, "z-fail");
        cU2x.element.firstChild.outerHTML = a9j.cc1x("m-xwgt-share-upload-preview-img", j1x)
    }
    ;
    b0x.UD6x = function(p1x, kY5d) {
        a9j.y1x(p1x.element, "z-sel")
    }
    ;
    b0x.cvf7Y = function(p1x, kY5d) {
        var cGp0x, gu3x = this.fd3x.length - 1, nT6N;
        for (var i = gu3x; i >= 0; i--) {
            a9j.x1x(this.fd3x[i].element, "z-jump");
            if (this.fd3x[i] == p1x) {
                nT6N = i
            } else {
                a9j.fb3x(this.fd3x[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var Od4h = {
            x: 46 + 92 * (nT6N % 5) + kY5d.left,
            y: 46 + 92 * (nT6N / 5 >> 0) + kY5d.top
        };
        var buY4c = Od4h.x / 92 >> 0
          , buZ4d = Od4h.y / 92 >> 0
          , yF9w = Math.max(0, Math.min(gu3x, buZ4d * 5 + buY4c));
        if (yF9w == nT6N) {
            return
        }
        var cvc7V = yF9w < nT6N;
        for (var i = Math.min(yF9w, nT6N); i <= Math.max(yF9w, nT6N); i++) {
            if (i !== nT6N) {
                var bDF6z = i % 5;
                if (cvc7V) {
                    if (bDF6z == 4) {
                        a9j.fb3x(this.fd3x[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a9j.fb3x(this.fd3x[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDF6z == 0) {
                        a9j.fb3x(this.fd3x[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a9j.fb3x(this.fd3x[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
    ;
    b0x.bhG0x = function(p1x, kY5d) {
        var cGq0x, gu3x = this.fd3x.length - 1, nT6N;
        for (var i = gu3x; i >= 0; i--) {
            a9j.fb3x(this.fd3x[i].element, {
                left: "",
                top: ""
            });
            if (this.fd3x[i] == p1x) {
                nT6N = i
            }
        }
        a9j.x1x(p1x.element, "z-sel");
        var Od4h = {
            x: 46 + 92 * (nT6N % 5) + kY5d.left,
            y: 46 + 92 * (nT6N / 5 >> 0) + kY5d.top
        };
        var buY4c = Od4h.x / 92 >> 0
          , buZ4d = Od4h.y / 92 >> 0
          , yF9w = Math.max(0, Math.min(gu3x, buZ4d * 5 + buY4c));
        if (yF9w == nT6N) {
            return
        }
        this.bdb9S.insertBefore(p1x.element, (this.fd3x[yF9w + (yF9w > nT6N ? 1 : 0)] || {}).element || this.IM2x);
        this.fd3x.splice(nT6N, 1);
        this.fd3x.splice(yF9w, 0, p1x)
    }
    ;
    b0x.cvh7a = function(p1x, d1x) {
        a9j.cK2x(p1x.element, false);
        if (p1x.dragger)
            p1x.dragger.T1x();
        delete p1x.dragger;
        var r1x = -1;
        for (var i = this.fd3x.length - 1; i >= 0; i--) {
            if (this.fd3x[i] == p1x) {
                r1x = i;
                break
            }
        }
        this.fd3x.splice(r1x, r1x >= 0 ? 1 : 0);
        delete p1x;
        if (this.fd3x.length >= 9) {
            this.IM2x.style.display = "none"
        } else {
            this.IM2x.style.display = ""
        }
        if (!this.fd3x.length) {
            this.o1x.style.display = "none";
            this.bap8h(0)
        } else {
            this.bCX6R()
        }
        if (this.fd3x.doing == p1x) {
            this.fd3x.doing = null
        }
        this.IG2x()
    }
    ;
    b0x.bCX6R = function() {
        var bDH6B = false;
        for (var i = 0, len = this.fd3x.length; i < len; i++) {
            if (this.fd3x[i].status == -3) {
                bDH6B = true
            }
        }
        if (bDH6B) {
            this.buU4Y(-3)
        } else {
            this.bap8h(-3)
        }
    }
    ;
    b0x.NY4c = function() {
        var dF2x = [];
        for (var i = this.fd3x.length - 1; i >= 0; i--) {
            if (this.fd3x[i].status == 2) {
                dF2x.unshift(this.fd3x[i].picInfo)
            }
        }
        return dF2x
    }
    ;
    I1x.fI3x.A1x({
        element: w1x.buv3x,
        event: ["onstartupload", "onfinishupload"]
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, fA3x = NEJ.R, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), bc1x = c0x("nej.ui"), O1x = c0x("nej.ut"), b0x, L1x;
    if (!!O1x.nH6B)
        return;
    O1x.nH6B = NEJ.C();
    b0x = O1x.nH6B.N1x(O1x.Wx7q);
    L1x = O1x.nH6B.cs1x;
    b0x.bl1x = function(e1x) {
        this.cuZ7S(e1x.more);
        this.FM1x = a9j.B1x(e1x.sbody);
        this.cuX7Q = e1x.fixScrollPosition;
        this.bX1x([[this.FM1x, "scroll", this.cuW7P.f1x(this)]]);
        var dp2x = e1x.delta;
        if (dp2x == null)
            dp2x = 30;
        this.Nx4B = Math.max(0, dp2x);
        var cz1x = parseInt(e1x.count) || 0;
        this.jL4P = Math.max(0, cz1x);
        var ha4e = parseInt(e1x.number) || 0;
        if (ha4e > 1 && ha4e <= cz1x) {
            this.Ds0x = ha4e
        }
        this.bn1x(e1x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.BJ0x;
        delete this.FM1x;
        delete this.tI8A;
        delete this.Yn7g
    }
    ;
    b0x.AJ0x = function(bi1x, bq1x) {
        var bM1x = this.yl9c + (this.jL4P - 1) * this.pm6g
          , gd3x = this.jL4P * this.pm6g;
        return L1x.AJ0x.call(this, bM1x, bi1x, gd3x, bq1x)
    }
    ;
    b0x.cuZ7S = function(Yl7e) {
        this.BJ0x = a9j.B1x(Yl7e);
        this.bX1x([[this.BJ0x, "click", this.oY6S.f1x(this)]])
    }
    ;
    b0x.bvk4o = function(F1x) {
        F1x = F1x || {};
        if (this.tI8A || !F1x)
            return;
        if (!F1x.scrollHeight)
            F1x = a9j.ow6q();
        var bi1x = a9j.hO4S(this.iq4u, this.cuX7Q ? F1x : null)
          , dp2x = bi1x.y + this.iq4u.offsetHeight - F1x.scrollTop - F1x.clientHeight
          , bvl4p = F1x.scrollHeight <= F1x.clientHeight;
        if (dp2x <= this.Nx4B || bvl4p && !this.tI8A) {
            this.oY6S()
        }
    }
    ;
    b0x.cuW7P = function(d1x) {
        if (this.tI8A)
            return;
        this.bvk4o(h1x.W1x(d1x))
    }
    ;
    b0x.AE0x = function(d1x) {
        L1x.AE0x.apply(this, arguments);
        if (!d1x.stopped) {
            this.Vo7h();
            var bi1x = 0;
            if (d1x.index > 1) {
                bi1x = this.yl9c + ((d1x.index - 1) * this.jL4P - 1) * this.pm6g
            }
            this.hP4T = bi1x;
            this.oY6S()
        }
    }
    ;
    b0x.bPT9K = function(e1x) {
        if (!!this.Ds0x) {
            var dp2x = e1x.offset > 0 ? this.pm6g : this.yl9c
              , gd3x = dp2x + this.pm6g * (this.Ds0x - 1);
            this.hP4T = e1x.offset + gd3x;
            e1x.data.limit = gd3x;
            e1x.limit = gd3x;
            delete this.Ds0x
        }
        return e1x
    }
    ;
    b0x.bre3x = function(e1x) {
        delete this.Yn7g;
        L1x.bre3x.apply(this, arguments);
        this.bEg6a()
    }
    ;
    b0x.brn3x = function(d1x) {
        if (d1x.key != this.iQ4U.key)
            return;
        switch (d1x.action) {
        case "refresh":
        case "append":
            delete this.Yn7g;
            break
        }
        L1x.brn3x.apply(this, arguments)
    }
    ;
    b0x.Uj6d = function() {
        this.zu9l("onbeforelistload", "列表加载中...");
        a9j.ba1x(this.BJ0x, "display", "none")
    }
    ;
    b0x.brM3x = function(i1x, bi1x, gd3x) {
        var bq1x = i1x.length
          , bvm4q = i1x.loaded ? bi1x + gd3x >= bq1x : bi1x + gd3x > bq1x;
        this.hP4T = Math.min(this.hP4T, bq1x);
        a9j.ba1x(this.BJ0x, "display", bvm4q ? "none" : "");
        if (bvm4q)
            this.tI8A = !0;
        if (this.jL4P > 0) {
            var bx1x = this.AJ0x(bi1x, i1x.length);
            if (this.bQF0x(bx1x.index, bx1x.total))
                return !0;
            var dp2x = this.yl9c - this.pm6g
              , ha4e = this.jL4P * this.pm6g;
            this.tI8A = (bi1x + gd3x - dp2x) % ha4e == 0 || bvm4q;
            a9j.ba1x(this.BJ0x, "display", this.tI8A ? "none" : "");
            this.bru3x(this.tI8A && bx1x.total > 1 ? "" : "none")
        }
    }
    ;
    b0x.brL3x = function() {
        this.hP4T = 0;
        this.tI8A = !0;
        this.zu9l("onemptylist", "没有列表数据！")
    }
    ;
    b0x.TT6N = function(dV2x, kY5d) {
        this.iq4u.insertAdjacentHTML(kY5d || "beforeEnd", dV2x)
    }
    ;
    b0x.TQ6K = function(hr4v) {
        this.fJ3x = this.fJ3x || [];
        if (k1x.eL3x(hr4v)) {
            fA3x.push.apply(this.fJ3x, hr4v)
        } else {
            this.fJ3x.push(hr4v)
        }
    }
    ;
    b0x.beY0x = function(d1x) {
        a9j.mG5L(this.cv1x);
        this.TH6B(d1x, "onafteradd");
        var eZ3x = d1x.flag;
        if (d1x.stopped || !eZ3x)
            return;
        if (this.jL4P > 0) {
            this.brx3x();
            return
        }
        this.hP4T += 1;
        eZ3x == -1 ? this.brZ3x(d1x.data) : this.bRs0x(d1x.data)
    }
    ;
    b0x.beL0x = function(d1x) {
        this.TH6B(d1x, "onafterdelete");
        if (d1x.stopped)
            return;
        if (this.jL4P > 0) {
            this.brx3x();
            return
        }
        var C1x = d1x.data[this.fe3x.pkey];
        if (!!this.fJ3x) {
            var p1x = a9j.bCw5B(C1x)
              , r1x = k1x.di2x(this.fJ3x, p1x);
            if (r1x >= 0) {
                this.fJ3x.splice(r1x, 1);
                this.hP4T -= 1
            }
            if (!!p1x)
                p1x.T1x()
        } else {
            var g1x = a9j.B1x(this.bOc8U(C1x));
            if (!!g1x)
                this.hP4T -= 1;
            a9j.cK2x(g1x)
        }
        if (this.hP4T <= 0)
            this.oY6S()
    }
    ;
    b0x.brW3x = function(bi1x, gd3x) {
        if (bi1x != this.hP4T)
            return;
        if (this.bdp9g()) {
            this.tI8A = !1;
            this.bEg6a()
        }
    }
    ;
    b0x.brY3x = function(bi1x, gd3x) {
        if (bi1x != 0)
            return;
        var Ly3x = this.S1x.hF4J(this.iQ4U.key);
        for (var i = gd3x - 1; i >= 0; i--) {
            this.brZ3x(Ly3x[i])
        }
    }
    ;
    b0x.bEg6a = function() {
        var F1x = this.FM1x;
        if (!F1x || this.tI8A)
            return;
        this.bvk4o(this.FM1x)
    }
    ;
    b0x.gD3x = function() {
        delete this.tI8A;
        L1x.gD3x.apply(this, arguments)
    }
    ;
    b0x.oY6S = function() {
        if (!!this.Yn7g)
            return;
        this.Yn7g = !0;
        var bi1x = this.hP4T;
        this.hP4T += bi1x == 0 ? this.yl9c : this.pm6g;
        this.bPS9J(bi1x)
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), cZ2x = c0x("nej.x"), O1x = c0x("nej.ut"), b0x;
    if (!!O1x.FZ1x)
        return;
    O1x.FZ1x = NEJ.C();
    b0x = O1x.FZ1x.N1x(O1x.cJ2x);
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.js4w = e1x.event || "click";
        this.kD5I = e1x.selected || "js-selected";
        this.oh6b = e1x.disabled || "js-disabled";
        this.bEm6g = !!e1x.inverse;
        this.cuT7M(e1x.list);
        this.Nj3x(e1x.index || 0)
    }
    ;
    b0x.bC1x = function() {
        var cuS7L = function(g1x) {
            this.bvF4J(g1x, !1)
        };
        return function() {
            this.bF1x();
            k1x.bd1x(this.bU1x, cuS7L, this);
            delete this.bU1x;
            delete this.js4w;
            delete this.cp1x;
            delete this.oh6b;
            delete this.kD5I;
            delete this.bEm6g
        }
    }();
    b0x.cuT7M = function() {
        var bqI3x = function(p1x) {
            if (!p1x)
                return;
            this.bU1x.push(p1x);
            var r1x = this.bU1x.length - 1
              , dx2x = this.bvM4Q[r1x];
            if (!dx2x) {
                dx2x = this.Nj3x.f1x(this, r1x);
                this.bvM4Q[r1x] = dx2x
            }
            this.bX1x([[p1x, this.js4w, dx2x]])
        };
        return function(i1x) {
            this.bU1x = [];
            if (!this.bvM4Q)
                this.bvM4Q = [];
            k1x.bd1x(i1x, bqI3x, this)
        }
    }();
    b0x.bvF4J = function(F1x, cuR7K) {
        !!cuR7K && !this.bEm6g ? a9j.y1x(F1x, this.kD5I) : a9j.x1x(F1x, this.kD5I)
    }
    ;
    b0x.Nj3x = function(r1x, Vn7g, j1x) {
        var F1x = this.bU1x[r1x];
        if (Vn7g != !0 && (r1x == this.cp1x || !F1x || a9j.bE1x(F1x, this.oh6b))) {
            h1x.cn1x(arguments[1]);
            return this
        }
        var d1x = {
            index: r1x,
            last: this.cp1x,
            list: this.lP5U(),
            data: j1x || a9j.t1x(F1x, "value")
        };
        this.cp1x = r1x;
        F1x = this.bU1x[d1x.last];
        if (!!F1x)
            this.bvF4J(F1x, !1);
        F1x = this.bU1x[this.cp1x];
        this.bvF4J(F1x, !0);
        this.z1x("onchange", d1x);
        if (!d1x.nostop)
            h1x.cn1x(arguments[1]);
        return this
    }
    ;
    b0x.tG8y = function() {
        return this.cp1x
    }
    ;
    b0x.lP5U = function() {
        return this.bU1x
    }
    ;
    a9j.cuQ7J = cZ2x.cuQ7J = function(bI1x, e1x) {
        var C1x = a9j.lK5P(bI1x);
        if (!C1x)
            return null;
        if (!O1x.bab8T(C1x, O1x.FZ1x)) {
            e1x = e1x || {};
            e1x.list = !e1x.clazz ? a9j.dm2x(C1x) : a9j.H1x(C1x, e1x.clazz);
            delete e1x.clazz
        }
        return O1x.bab8T(C1x, O1x.FZ1x, e1x || bb1x)
    }
    ;
    cZ2x.isChange = !0
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , k1x = c0x("nej.u")
      , v1x = c0x("nej.j")
      , l1x = c0x("nm.x");
    var SETTING_KEY = "player-setting";
    var mY5d = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mY5d = v1x.tt7m(SETTING_KEY) || mY5d;
    l1x.bwc4g = function() {
        return mY5d
    }
    ;
    l1x.Gi1x = function(Gj1x) {
        if (Gj1x) {
            mY5d = Gj1x;
            v1x.vb8T(SETTING_KEY, Gj1x)
        }
    }
}
)();
(function() {
    var c0x = NEJ.P
      , bb1x = NEJ.O
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , k1x = c0x("nej.u")
      , I1x = c0x("nej.ut")
      , l1x = c0x("nm.x")
      , q1x = c0x("nm.d")
      , hi4m = c0x("nm.w.player.log");
    var kH5M = q1x.hS4W.A1x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var hh4l = function(u1x, bG1x, qY7R) {
        var cI2x = l1x.fq3x("{0} {1} {2}", k1x.ig4k(new Date, "yyyy-MM-dd HH:mm:ss"), u1x, bG1x);
        if (qY7R == LogLevel.ERROR) {
            kH5M.eU3x("playerror", {
                message: bG1x
            })
        }
        if (qY7R >= LogLevel.INFO) {
            kH5M.bDW6Q(cI2x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cI2x)
        }
    };
    hi4m.cb1x = function() {
        hh4l("PLAY_ERROR", l1x.fq3x.apply(null, arguments), LogLevel.ERROR)
    }
    ;
    hi4m.qh6b = function() {
        hh4l("PLAY_INFO", l1x.fq3x.apply(null, arguments), LogLevel.INFO)
    }
    ;
    hi4m.cGr0x = function() {
        hh4l("PLAY_DEBUG", l1x.fq3x.apply(null, arguments), LogLevel.DEBUG)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , I1x = c0x("nej.ut")
      , k1x = c0x("nej.u")
      , w1x = c0x("nm.w")
      , eN3x = c0x("flash.cb");
    var ef3x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Go1x, bcA9r, vU8M;
    w1x.cuM7F = function(u1x, cA1x) {
        if (u1x != "flash") {
            if (!Go1x) {
                Go1x = a9j.dj2x("audio");
                k1x.bd1x(ef3x, function(u1x) {
                    h1x.s1x(Go1x, u1x, onMediaCallBack)
                })
            }
            if (Go1x && Go1x.canPlayType && Go1x.canPlayType("audio/mpeg")) {
                cA1x(new MediaWrap("audio"));
                return
            }
        }
        if (!bcA9r) {
            a9j.sI7B({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hN4R) {
                    bcA9r = hN4R;
                    k1x.bd1x(ef3x, function(u1x) {
                        eN3x[u1x] = onMediaCallBack;
                        bcA9r.addCallback(u1x, "flash.cb." + u1x)
                    });
                    cA1x(new MediaWrap("flash"))
                }
                .f1x(this)
            })
        } else {
            cA1x(new MediaWrap("flash"))
        }
    }
    ;
    function MediaWrap(Gs1x) {
        var gM3x;
        I1x.fI3x.A1x({
            element: this,
            event: ef3x.concat(["interrupt", "recover"])
        });
        gM3x = Gs1x == "audio" ? Go1x : bcA9r;
        this.type = Gs1x;
        this.destroy = function() {}
        ;
        this.setSrc = function(X1x) {
            if (vU8M != this) {
                var gu3x = vU8M;
                if (gu3x) {
                    gu3x.interrupt()
                }
                vU8M = this
            }
            if (Gs1x == "flash") {
                gM3x.setSrc(X1x)
            } else {
                gM3x.src = X1x
            }
        }
        ;
        this.play = function() {
            if (vU8M != this) {
                var gu3x = vU8M;
                if (gu3x) {
                    gu3x.interrupt();
                    vU8M = this;
                    this.recover()
                } else {
                    vU8M = this
                }
            }
            if (Gs1x == "flash") {
                gM3x.as_play()
            } else {
                gM3x.play()
            }
        }
        ;
        this.pause = function() {
            if (vU8M != this)
                return;
            if (Gs1x == "flash") {
                gM3x.as_pause()
            } else {
                gM3x.pause()
            }
        }
        ;
        this.load = function() {
            if (vU8M != this)
                return;
            if (Gs1x == "flash") {
                gM3x.as_load()
            } else {
                gM3x.load()
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
            return gM3x
        }
        ;
        var pg6a = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k1x.bd1x(pg6a, function(V1x) {
            var Tm6g = "get" + V1x
              , Tc6W = "set" + V1x;
            if (Gs1x == "flash") {
                if (!this[Tm6g]) {
                    this[Tm6g] = function() {
                        return gM3x[Tm6g]()
                    }
                }
                if (!this[Tc6W]) {
                    this[Tc6W] = function(value) {
                        gM3x[Tc6W](value)
                    }
                }
            } else {
                var bFg6a = V1x.slice(0, 1).toLowerCase() + V1x.slice(1);
                if (!this[Tm6g]) {
                    this[Tm6g] = function() {
                        return gM3x[bFg6a]
                    }
                }
                if (!this[Tc6W]) {
                    this[Tc6W] = function(value) {
                        gM3x[bFg6a] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d1x) {
        if (vU8M) {
            h1x.z1x(vU8M, d1x.type, d1x)
        }
    }
}
)();
(function() {
    var c0x = NEJ.P, h1x = c0x("nej.v"), v1x = c0x("nej.j"), I1x = c0x("nej.ut"), dy2x = c0x("nej.p"), w1x = c0x("nm.w"), l1x = c0x("nm.x"), hi4m = c0x("nm.w.player.log"), b0x;
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
    var bFh6b = false;
    w1x.fS3x = NEJ.C();
    b0x = w1x.fS3x.N1x(I1x.cJ2x);
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.cN2x = {};
        this.bam8e(e1x.media);
        v1x.bm1x("/api/cdns", {
            type: "json",
            onload: function(d1x) {
                if (d1x.code) {
                    this.qI7B = d1x.data
                }
            }
            .f1x(this)
        })
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        delete this.cN2x
    }
    ;
    b0x.ZW8O = function(bj1x) {
        if (!bj1x)
            return;
        var wU9L = this.cN2x.volume;
        if (this.dT2x) {
            this.dT2x.pause()
        }
        this.cN2x = {
            time: 0,
            id: bj1x.id,
            duration: bj1x.duration / 1e3,
            play: this.cN2x.play,
            stalledRetryCount: 0
        };
        if (wU9L != null) {
            this.cN2x.volume = wU9L
        }
        this.cN2x.loadState = LoadState.LOAD_START;
        this.bFu6o(bj1x.id);
        hi4m.qh6b("play song id: {0}", bj1x.id)
    }
    ;
    b0x.eo3x = function() {
        if (this.cN2x.error) {
            this.cN2x.error = null;
            if (this.cN2x.error == ErrorType.INFO_GET_ERR || this.bFv6p()) {
                this.bFw6q()
            } else {
                this.SY6S()
            }
        } else {
            if (this.dT2x) {
                this.dT2x.play()
            }
        }
        this.cN2x.play = true;
        this.pC6w("play")
    }
    ;
    b0x.fF3x = function() {
        if (this.dT2x) {
            this.dT2x.pause()
        }
        this.cN2x.play = false;
        this.pC6w("pause")
    }
    ;
    b0x.oM6G = function(bA1x) {
        if (this.dT2x) {
            this.dT2x.setCurrentTime(bA1x)
        }
        this.cN2x.time = bA1x;
        hi4m.qh6b("seek to: {0}", bA1x)
    }
    ;
    b0x.bwD4H = function() {
        return this.cN2x.duration || 0
    }
    ;
    b0x.uo8g = function() {
        return !!this.cN2x.play
    }
    ;
    b0x.mx5C = function(SS6M) {
        this.cN2x.volume = SS6M;
        if (this.dT2x) {
            this.dT2x.setVolume(SS6M)
        }
    }
    ;
    b0x.ZG8y = function() {
        return this.cN2x.time
    }
    ;
    b0x.bam8e = function(u1x) {
        w1x.cuM7F(u1x, function(gM3x) {
            this.dT2x = gM3x;
            hi4m.qh6b("media loaded: {0}", gM3x.type);
            this.bX1x([[this.dT2x, "loadedmetadata", this.cuL7E.f1x(this)], [this.dT2x, "ended", this.cuK7D.f1x(this)], [this.dT2x, "waiting", this.zD9u.f1x(this)], [this.dT2x, "play", this.vR8J.f1x(this)], [this.dT2x, "pause", this.bwI4M.f1x(this)], [this.dT2x, "playing", this.RG6A.f1x(this)], [this.dT2x, "timeupdate", this.cuI7B.f1x(this)], [this.dT2x, "progress", this.rb7U.f1x(this)], [this.dT2x, "stalled", this.bwS4W.f1x(this)], [this.dT2x, "interrupt", this.fF3x.f1x(this)], [this.dT2x, "recover", this.cuH7A.f1x(this)], [this.dT2x, "error", this.dP2x.f1x(this)]]);
            if (this.cN2x) {
                if (this.cN2x.loadState == LoadState.LOAD_START || this.cN2x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bxf4j();
                    if (this.cN2x.volume != null) {
                        this.dT2x.setVolume(this.cN2x.volume)
                    }
                }
            }
        }
        .f1x(this))
    }
    ;
    b0x.cuF7y = function(u1x) {
        this.Kh2x();
        this.dT2x.destroy();
        this.cN2x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zD9u();
        this.bam8e(u1x);
        hi4m.qh6b("switch media")
    }
    ;
    b0x.cGs0x = function() {
        return this.dT2x
    }
    ;
    b0x.bFu6o = function() {
        this.zD9u();
        v1x.bm1x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cN2x.id]),
                br: DEFAULT_BR
            },
            onload: this.bGd6X.f1x(this),
            onerror: this.bGd6X.f1x(this)
        })
    }
    ;
    b0x.bGd6X = function(d1x) {
        if (d1x.code == 200 && d1x.data && d1x.data.length) {
            var bx1x = d1x.data[0];
            if (!bx1x.url) {
                this.cN2x.error = ErrorType.INFO_GET_ERR;
                this.pC6w("error", {
                    code: this.cN2x.error
                });
                return
            }
            this.cN2x.playUrl = bx1x.url;
            this.cN2x.expireTime = (new Date).getTime() + bx1x.expi * 1e3;
            this.bxf4j()
        } else {
            this.cN2x.error = ErrorType.INFO_GET_ERR;
            this.pC6w("error", {
                code: this.cN2x.error
            });
            hi4m.cb1x("info load error")
        }
    }
    ;
    b0x.bxf4j = function() {
        if (this.dT2x) {
            var X1x = this.cN2x.playUrl;
            if (this.cN2x.time > 0 && (this.cN2x.loadState == LoadState.IN_RE_GET_URL || this.cN2x.loadState == LoadState.IN_RE_GET_URL)) {
                X1x += "#t=" + this.cN2x.time
            }
            this.dT2x.setSrc(X1x);
            hi4m.qh6b("load mp3: {0},loadState: {1}.", X1x, this.cN2x.loadState)
        }
    }
    ;
    b0x.bGe6Y = function() {
        if (/#t=(\d+)$/.test(this.dT2x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
    ;
    b0x.SY6S = function() {
        var bA1x = parseInt(this.cN2x.time) || 0
          , cuD7w = this.bGe6Y();
        if (bA1x === cuD7w) {
            this.dT2x.load()
        } else {
            this.dT2x.setSrc(this.cN2x.playUrl + "#t=" + bA1x)
        }
        this.cN2x.loadState = LoadState.IN_RELOAD;
        this.zD9u();
        hi4m.qh6b("reload from: {0}", bA1x)
    }
    ;
    b0x.bFw6q = function() {
        this.cN2x.loadState = LoadState.IN_RE_GET_URL;
        this.bFu6o()
    }
    ;
    b0x.bGg6a = function() {
        var tB8t = getHost(this.cN2x.playUrl);
        if (tB8t) {
            for (var i = 0; i < this.qI7B.length; i++) {
                var ip4t = this.qI7B[i] || []
                  , r1x = ip4t.indexOf(tB8t);
                if (r1x >= 0 && ip4t.length > 1) {
                    return ip4t[(r1x + 1) % ip4t.length]
                }
            }
        }
        function getHost(X1x) {
            if (CDN_HOST_REG.test(X1x))
                return RegExp.$1
        }
    }
    ;
    b0x.cuC7v = function() {
        this.cN2x.playUrl = this.cN2x.playUrl.replace(CDN_HOST_REG, this.bGg6a());
        this.cN2x.loadState = LoadState.IN_SWITCH_CDN;
        this.bxf4j();
        this.zD9u()
    }
    ;
    b0x.cuL7E = function() {
        if (this.cN2x.loadState == LoadState.LOAD_START) {
            this.cN2x.loadState = LoadState.LOADED_META;
            if (this.dT2x.type == "audio") {
                this.cN2x.duration = this.dT2x.getDuration()
            }
            this.pC6w("loadedmeta", {
                duration: this.cN2x.duration
            })
        } else {
            this.cN2x.loadState = LoadState.LOADED_META
        }
        if (this.cN2x.play) {
            this.dT2x.play()
        } else {
            this.dT2x.pause()
        }
        if (this.cN2x.time && parseInt(this.cN2x.time) != this.bGe6Y()) {
            this.dT2x.setCurrentTime(this.cN2x.time)
        }
        this.Is2x();
        this.RG6A();
        bFh6b = true;
        hi4m.qh6b("loaded meta")
    }
    ;
    b0x.cuK7D = function() {
        this.cN2x.ended = true;
        this.pC6w("ended")
    }
    ;
    b0x.zD9u = function() {
        if (!this.cN2x.waiting) {
            this.cN2x.waiting = true;
            this.cN2x.waitTimestamp = +(new Date);
            this.pC6w("waiting")
        }
    }
    ;
    b0x.RG6A = function() {
        this.cN2x.waiting = false;
        this.cN2x.waitTimestamp = 0;
        this.pC6w("playing")
    }
    ;
    b0x.vR8J = function() {
        this.pC6w("play")
    }
    ;
    b0x.bwI4M = function() {
        this.pC6w("pause")
    }
    ;
    b0x.cuI7B = function() {
        if (this.cN2x.loadState != LoadState.LOADED_META)
            return;
        var bA1x = this.dT2x.getCurrentTime();
        if (this.cN2x.waiting && bA1x > this.cN2x.time) {
            this.RG6A()
        }
        this.cN2x.time = bA1x;
        this.pC6w("timeupdate", {
            time: this.cN2x.time,
            duration: this.cN2x.duration
        })
    }
    ;
    b0x.rb7U = function(d1x) {
        if (this.cN2x.loadState != LoadState.LOADED_META)
            return;
        var m1x = {};
        if (d1x.data) {
            m1x.total = d1x.data.total;
            m1x.loaded = d1x.data.loaded
        } else {
            var yS9J = this.dT2x.getBuffered()
              , bA1x = this.dT2x.getCurrentTime()
              , oV6P = 0;
            for (var i = 0; i < yS9J.length; i++) {
                if (bA1x > yS9J.start(i) && bA1x < yS9J.end(i)) {
                    oV6P = yS9J.end(i);
                    break
                }
            }
            m1x.total = this.cN2x.duration;
            m1x.loaded = Math.min(oV6P, m1x.total)
        }
        this.pC6w("progress", m1x)
    }
    ;
    b0x.Is2x = function() {
        if (this.cN2x.retry) {
            clearTimeout(this.cN2x.retry.tid);
            this.cN2x.retry = null
        }
    }
    ;
    b0x.dP2x = function() {
        var bZ1x = this.dT2x.getError();
        hi4m.cb1x("media error code: {0}, netState: {1}", bZ1x.code, this.dT2x.getNetworkState());
        if (bZ1x.code == MediaError.MEDIA_ERR_NETWORK || bZ1x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gj1x = l1x.bwc4g();
            if (!this.cN2x.retry) {
                this.cN2x.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cN2x.retry.tid)
            }
            if (this.cN2x.retry.level == RetryLevel.NONE) {
                if (this.bFv6p()) {
                    this.cN2x.retry.level = RetryLevel.GET_URL;
                    this.bFw6q();
                    hi4m.qh6b("Url expired, get url.")
                } else {
                    this.cN2x.retry.level = RetryLevel.RELOAD;
                    this.cN2x.retry.tid = setTimeout(this.SY6S.f1x(this), 3e3);
                    hi4m.qh6b("Reload mp3 3s later.")
                }
            } else if (this.cN2x.retry.level == RetryLevel.GET_URL) {
                this.cN2x.retry.level = RetryLevel.RELOAD;
                this.cN2x.retry.tid = setTimeout(this.SY6S.f1x(this), 3e3);
                hi4m.qh6b("Reload mp3 3s later.")
            } else if (this.cN2x.retry.level == RetryLevel.RELOAD) {
                this.cN2x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bGg6a()) {
                    this.cN2x.retry.tid = setTimeout(this.cuC7v.f1x(this), 5e3);
                    hi4m.qh6b("Switch CDN 5s later.")
                } else {
                    this.cN2x.retry.tid = setTimeout(this.SY6S.f1x(this), 5e3);
                    hi4m.qh6b("Reload mp3 5s later.")
                }
            } else if (!bFh6b && this.dT2x.type == "audio" && !Gj1x.useFlash && !dy2x.Ik2x.mac && l1x.blw1x().supported) {
                Gj1x.useFlash = true;
                l1x.Gi1x(Gj1x);
                this.cuF7y("flash")
            } else {
                this.Is2x();
                this.fF3x();
                this.cN2x.error = ErrorType.NET_ERR;
                this.pC6w("error", {
                    code: this.cN2x.error
                });
                hi4m.cb1x("error can not retry.")
            }
        } else {
            this.Is2x();
            this.fF3x();
            this.cN2x.error = ErrorType.UNKNOWN_ERR;
            this.pC6w("error", {
                code: this.cN2x.error
            });
            hi4m.cb1x("error can not retry.")
        }
    }
    ;
    b0x.bwS4W = function() {
        var hQ4U = 0
          , bGm6g = 5e3;
        return function() {
            this.zD9u();
            clearTimeout(hQ4U);
            setTimeout(function() {
                var eV3x = +(new Date);
                if (this.cN2x.waiting && eV3x - this.cN2x.waitTimestamp >= bGm6g && this.cN2x.stalledRetryCount < MAX_STALLED_RETRY) {
                    hi4m.qh6b("stalled too long retry.");
                    this.cN2x.stalledRetryCount++;
                    this.SY6S()
                }
            }
            .f1x(this), bGm6g);
            hi4m.qh6b("stalled")
        }
    }();
    b0x.bFv6p = function() {
        var eV3x = +(new Date);
        return eV3x > this.cN2x.expireTime
    }
    ;
    b0x.cuH7A = function() {
        var bA1x = parseInt(this.cN2x.time) || 0;
        this.dT2x.setSrc(this.cN2x.playUrl + "#t=" + bA1x);
        this.cN2x.loadState = LoadState.IN_RELOAD;
        this.zD9u();
        hi4m.qh6b("recover from: {0}", bA1x)
    }
    ;
    b0x.pC6w = function(U1x, j1x) {
        h1x.z1x(w1x.fS3x, "playaction", {
            action: U1x,
            data: j1x || {}
        })
    }
    ;
    I1x.fI3x.A1x({
        element: w1x.fS3x,
        event: ["playaction"]
    })
}
)();
(function() {
    if (!(window == top)) {
        return
    }
    var c0x = NEJ.P, h1x = c0x("nej.v"), I1x = c0x("nej.ut"), w1x = c0x("nm.w"), b0x;
    w1x.Hd1x = NEJ.C();
    b0x = w1x.Hd1x.N1x(w1x.fS3x);
    L1x = w1x.Hd1x.cs1x;
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.cuB7u = function(bO1x) {
        this.ZW8O(bO1x);
        this.eo3x()
    }
    ;
    b0x.bxt4x = function() {
        this.fF3x()
    }
    ;
    b0x.xa9R = function(d1x) {
        if (d1x.action == "play") {
            this.fF3x()
        }
    }
    ;
    b0x.pC6w = function(U1x, j1x) {
        h1x.z1x(w1x.Hd1x, "tmpplayaction", {
            action: U1x,
            data: j1x || {},
            tmp: true
        })
    }
    ;
    b0x.sW7P = function() {
        return this.cN2x
    }
    ;
    I1x.fI3x.A1x({
        element: w1x.Hd1x,
        event: ["tmpplayaction"]
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), fM3x = c0x("nej.n"), v1x = c0x("nej.j"), I1x = c0x("nej.ut"), bc1x = c0x("nej.ui"), w1x = c0x("nm.w"), n1x = c0x("nm.l"), lc5h = c0x("nm.c"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), b0x, L1x, Zb8T = [{
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
    var bxx4B = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w1x.bxz4D = NEJ.C();
    b0x = w1x.bxz4D.N1x(bc1x.ej3x);
    b0x.cx1x = function(e1x) {
        this.cE2x(e1x);
        var i1x = a9j.H1x(this.o1x, "j-flag");
        this.cGt0x = i1x.shift();
        this.cuy7r = i1x.shift();
        this.In2x = i1x.shift();
        this.bxB4F = i1x.shift();
        this.bxC4G = [i1x.shift(), i1x.shift(), i1x.shift(), i1x.shift(), i1x.shift(), i1x.shift()];
        this.bdv9m = i1x.shift();
        this.bGY6S = i1x.shift();
        this.sH7A = {
            list: this.bxC4G,
            selected: "z-curr",
            onchange: this.bHe7X.f1x(this)
        };
        h1x.s1x(this.In2x, "input", this.bcv9m.f1x(this));
        h1x.s1x(this.In2x, "propertychange", this.bcv9m.f1x(this));
        h1x.s1x(this.In2x, "keyup", this.bcv9m.f1x(this));
        h1x.s1x(this.cuy7r, "click", this.bcv9m.f1x(this));
        h1x.s1x(this.bdv9m, "click", this.cL2x.f1x(this));
        h1x.s1x(this.bGY6S, "click", function() {
            this.z1x("oncancel", {})
        }
        .f1x(this));
        this.S1x = q1x.FQ1x.gg3x();
        this.Nl3x = top.nm.w.Hd1x.gg3x();
        I1x.fI3x.A1x({
            element: top.nm.w.Hd1x,
            event: ["tmpplayaction"]
        });
        this.sD7w = {
            limit: 100,
            offset: 0,
            parent: this.bdv9m,
            onbeforelistload: this.ru7n.f1x(this)
        };
        q1x.sk = "fuck" + a9j.t1x(this.bxB4F, "xname") + "458";
        h1x.s1x(top.nm.w.Hd1x, "tmpplayaction", this.xa9R.f1x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = "m-xwgt-publish-search"
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        if (!!this.CY0x) {
            this.CY0x.T1x();
            delete this.CY0x
        }
        this.sH7A.index = bxx4B[e1x.type || "song"];
        this.CY0x = I1x.FZ1x.A1x(this.sH7A);
        this.In2x.value = "";
        this.In2x.focus();
        this.us8k = "";
        this.cGu0x = 0;
        if (e1x.showMV == true) {
            this.bxC4G[bxx4B["mv"]].parentNode.style.display = "";
            a9j.y1x(this.bxB4F, "srchtab-1")
        } else {
            this.bxC4G[bxx4B["mv"]].parentNode.style.display = "none";
            a9j.x1x(this.bxB4F, "srchtab-1")
        }
        if (!!this.dK2x) {
            this.dK2x = this.dK2x.T1x()
        }
        if (e1x.hideBack) {
            a9j.y1x(this.bGY6S.parentNode, "f-hide")
        }
    }
    ;
    b0x.bC1x = function() {
        this.Nl3x.bxt4x();
        this.bF1x()
    }
    ;
    b0x.bcv9m = function() {
        var value = this.In2x.value.trim();
        if (value && value.length) {
            if (value != this.us8k) {
                this.us8k = value;
                this.bHe7X({
                    index: this.CY0x.tG8y()
                })
            }
        } else {
            if (this.dK2x) {
                this.dK2x = this.dK2x.T1x()
            }
        }
        this.us8k = value
    }
    ;
    b0x.cL2x = function() {
        var cuw7p = function(F1x) {
            return a9j.bE1x(F1x, "sitm") || a9j.bE1x(F1x, "itm") || a9j.bE1x(F1x, "mv-item")
        }
          , cuv7o = function(F1x) {
            return a9j.bE1x(F1x, "ply")
        }
          , bHw7p = function() {
            n1x.Z1x.J1x({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }
          , cuu7n = function() {
            n1x.Z1x.J1x({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }
          , bxG4K = function(bj1x) {
            if (bj1x && bj1x.privilege && bj1x.privilege.toast) {
                v1x.bm1x("/api/song/toast", {
                    query: {
                        id: bj1x.id
                    },
                    type: "json",
                    onload: TE6y.f1x(this),
                    onerror: TE6y.f1x(this)
                })
            } else {
                TG6A()
            }
        }
          , TE6y = function(Q1x) {
            TG6A((Q1x || bb1x).toast)
        }
          , TG6A = function(bG1x) {
            n1x.Z1x.J1x({
                type: 2,
                tip: bG1x || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d1x) {
            var Hy2x = h1x.W1x(d1x, cuv7o)
              , i1x = h1x.W1x(d1x, cuw7p)
              , eA3x = this.Nl3x.sW7P();
            if (!!i1x) {
                h1x.bg1x(d1x);
                this.UA6u = a9j.t1x(i1x, "id");
                this.TX6R = a9j.t1x(i1x, "type");
                if (this.TX6R == 18) {
                    var bO1x = this.S1x.eJ3x(this.UA6u)
                      , qY7R = l1x.pJ6D(bO1x);
                    if (!Hy2x) {
                        if (qY7R == 10) {
                            bHw7p();
                            return
                        } else if (qY7R == 100) {
                            bxG4K(bO1x);
                            return
                        }
                    } else {
                        if (qY7R == 10) {
                            bHw7p();
                            return
                        } else if (qY7R == 100) {
                            bxG4K(bO1x);
                            return
                        } else if (qY7R == 11) {
                            cuu7n();
                            return
                        } else {
                            a9j.x1x(this.Dd0x, "z-pause z-loading");
                            if (Hy2x == this.Dd0x && eA3x.play && !eA3x.ended) {
                                this.Nl3x.bxt4x()
                            } else {
                                this.Dd0x = Hy2x;
                                this.Nl3x.cuB7u(bO1x)
                            }
                            return
                        }
                    }
                } else if (this.TX6R == 70) {
                    if (a9j.bE1x(i1x, "z-noprogram")) {
                        n1x.Z1x.J1x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cur7k()
            }
        }
    }();
    b0x.cur7k = function() {
        var id4h = this.S1x.eJ3x(this.UA6u)
          , sY7R = l1x.bLR8J(this.TX6R, id4h);
        sY7R.title = sY7R.title || "";
        sY7R.author = sY7R.author || "";
        sY7R.picUrl = sY7R.picUrl || "";
        sY7R.authors = sY7R.authors || "";
        if (this.TX6R == 70) {
            this.UA6u = this.UA6u.slice(0, -4)
        }
        this.z1x("onfinish", {
            id: this.UA6u,
            type: this.TX6R,
            data: sY7R
        })
    }
    ;
    b0x.xa9R = function(d1x) {
        var j1x = d1x.data;
        if (!this.Dd0x) {
            return
        }
        switch (d1x.action) {
        case "play":
            a9j.fj3x(this.Dd0x, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a9j.x1x(this.Dd0x, "z-pause z-loading");
            break;
        case "error":
            n1x.Z1x.J1x({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a9j.x1x(this.Dd0x, "z-pause z-loading");
            break;
        case "playing":
            a9j.fj3x(this.Dd0x, "z-loading", "z-pause");
            break;
        case "waiting":
            a9j.fj3x(this.Dd0x, "z-pause", "z-loading");
            break
        }
    }
    ;
    b0x.cup7i = function(d1x) {
        if (d1x.result.code == 407) {
            this.bdv9m.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.bdv9m.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
    ;
    b0x.bHe7X = function(d1x) {
        if (!this.us8k || d1x.index < 0 || d1x.index > 5) {
            return
        }
        this.Nl3x.bxt4x();
        var bh1x = Zb8T[d1x.index]
          , e1x = NEJ.X({}, this.sD7w);
        e1x.cache = {
            klass: q1x.FQ1x,
            clear: true,
            onerror: this.cup7i.f1x(this)
        };
        e1x.cache.lkey = "search-publish-" + bh1x.type + "-" + this.us8k;
        e1x.item = {
            klass: bh1x.item,
            getRestrictLevel: l1x.pJ6D,
            dur2time: l1x.lr5w
        };
        if (!e1x.cache.data) {
            e1x.cache.data = {}
        }
        e1x.cache.data.s = this.us8k;
        e1x.cache.data.type = bh1x.type;
        e1x.cache.data.isPub = true;
        if (bh1x.type == 1) {
            e1x.cache.data.hlpretag = '<span class="s-fc7">';
            e1x.cache.data.hlposttag = "</span>"
        }
        e1x.onemptylist = this.cuo7h.f1x(this, this.us8k);
        if (!!this.HF2x)
            this.S1x.vA8s(this.HF2x);
        if (!!this.dK2x) {
            this.dK2x = this.dK2x.T1x()
        }
        this.dK2x = I1x.nH6B.A1x(e1x);
        this.HF2x = e1x.cache.lkey
    }
    ;
    b0x.ru7n = function(d1x) {
        d1x.value = a9j.iE4I("m-publish-search-loading")
    }
    ;
    b0x.cuo7h = function(K1x, d1x) {
        a9j.dz2x(d1x.parent, "m-publish-emtpy-message", {
            key: K1x
        });
        d1x.stopped = true
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), dy2x = c0x("nej.p"), v1x = c0x("nej.j"), cd1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), w1x = c0x("nm.w"), b0x, L1x;
    var cum7f = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w1x.HG2x = NEJ.C();
    b0x = w1x.HG2x.N1x(bD1x.ej3x);
    var ge3x = a9j.eB3x("m-wgt-receiverInput");
    var cua7T = a9j.eB3x("m-wgt-receiverList");
    var iT4X = a9j.tA8s(cum7f);
    var ctX7Q = a9j.eB3x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b0x.cx1x = function(e1x) {
        this.bk1x = [];
        this.xs9j = e1x.receiver || null;
        this.ctV7O = e1x.unique || false;
        this.nc5h = e1x.err;
        this.bIT7M(this.bIV7O, e1x.uid);
        this.cE2x(e1x)
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.Rl5q();
        this.Py4C();
        this.ZO8G();
        if (e1x.receiver)
            this.bxO4S(e1x.receiver.nickname, e1x.receiver.userId);
        a9j.ba1x(this.Dm0x, "display", "block");
        a9j.ba1x(this.bxR4V, "cursor", "text");
        a9j.ba1x(this.Dm0x, "cursor", "text")
    }
    ;
    b0x.ch1x = function() {
        var j1x = this.bJh7a();
        this.cg1x = a9j.jj4n(a9j.cc1x(ge3x, {
            receiver: this.xs9j,
            users: j1x
        }));
        this.mn5s = iT4X
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var bS1x = a9j.H1x(this.o1x, "j-flag");
        var hr4v = a9j.H1x(this.o1x, "j-item");
        this.bxR4V = bS1x[0];
        this.bJs7l = bS1x[1];
        this.eg3x = bS1x[2];
        this.Dm0x = bS1x[3];
        this.Wo7h = bS1x[4];
        this.bxS4W = bS1x[5];
        this.fJ3x = hr4v;
        a9j.y1x(this.fJ3x[0], "j-selected");
        h1x.s1x(this.eg3x, "keyup", this.bxU4Y.f1x(this));
        h1x.s1x(this.eg3x, "keydown", this.Nm3x.f1x(this));
        h1x.s1x(this.eg3x, "focus", this.lt5y.f1x(this));
        h1x.s1x(this.Wo7h, "click", this.ctU7N.f1x(this));
        h1x.s1x(this.bxR4V, "click", this.ctT7M.f1x(this));
        h1x.s1x(document.body, "click", this.pd6X.f1x(this));
        h1x.s1x(this.eg3x, "input", this.fP3x.f1x(this));
        h1x.s1x(this.eg3x, "blur", this.of6Z.f1x(this))
    }
    ;
    b0x.bC1x = function(e1x) {
        h1x.mU5Z(document.body, "click", this.pd6X.f1x(this));
        this.bF1x();
        this.ZO8G();
        this.ctQ7J();
        this.pd6X()
    }
    ;
    b0x.bxU4Y = function(d1x) {
        h1x.bg1x(d1x);
        var jS4W = d1x.keyCode || d1x.which;
        var bo1x = this.eg3x.value;
        var bq1x = this.fJ3x.length;
        var rC7v = a9j.H1x(this.o1x, "j-selected")[0];
        switch (jS4W) {
        case 13:
            var lj5o = a9j.gN3x(rC7v, "data-username");
            var ir4v = a9j.gN3x(rC7v, "data-userId");
            this.bxO4S(lj5o, ir4v);
            this.pd6X();
            this.eg3x.value = "";
            break;
        case 38:
            var r1x = a9j.gN3x(rC7v, "data-index") - 1 < 0 ? bq1x - 1 : a9j.gN3x(rC7v, "data-index") - 1;
            a9j.x1x(rC7v, "j-selected");
            a9j.y1x(this.fJ3x[r1x], "j-selected");
            break;
        case 40:
            var r1x = parseInt(a9j.gN3x(rC7v, "data-index")) + 1 >= bq1x ? 0 : parseInt(a9j.gN3x(rC7v, "data-index")) + 1;
            a9j.x1x(rC7v, "j-selected");
            a9j.y1x(this.fJ3x[r1x], "j-selected");
            break;
        default:
            this.xC9t()
        }
    }
    ;
    b0x.Nm3x = function(d1x) {
        var jS4W = d1x.keyCode || d1x.which;
        var bo1x = this.eg3x.value;
        var r1x = a9j.H1x(this.o1x, "j-receiver").length - 1;
        if (jS4W === 8 && bo1x === "")
            this.ctP7I(r1x)
    }
    ;
    b0x.fP3x = function(d1x) {
        var bo1x = this.eg3x.value;
        if (bo1x.length > 10) {
            this.eg3x.value = bo1x.substring(0, 10);
            return
        }
        dy2x.dt2x.browser == "ie" && dy2x.dt2x.version < "7.0" ? setTimeout(this.bxY4c.f1x(this), 0) : this.bxY4c();
        this.Py4C()
    }
    ;
    b0x.lt5y = function() {
        if (this.bk1x[0])
            this.xC9t();
        else
            this.bIT7M(this.ctM7F);
        a9j.ba1x(this.Dm0x, "display", "none")
    }
    ;
    b0x.of6Z = function() {
        var bq1x = a9j.H1x(this.o1x, "j-receiver").length;
        if (this.eg3x.value.trim() == "" && bq1x <= 0)
            a9j.ba1x(this.Dm0x, "display", "block")
    }
    ;
    b0x.bxO4S = function(lj5o, ir4v) {
        var Kx2x = this.Ol4p();
        if (Kx2x.length >= 10) {
            this.dY3x();
            return
        }
        var bc1x;
        for (bc1x = 0; bc1x < Kx2x.length; bc1x++) {
            if (Kx2x[bc1x] == ir4v) {
                this.pd6X();
                return
            }
        }
        if (!lj5o || !ir4v)
            return;
        var g1x = a9j.dC2x(a9j.jj4n(a9j.cc1x(ctX7Q, {
            username: lj5o,
            userId: ir4v
        })));
        var bI1x = this.bJs7l.parentNode;
        if (this.ctV7O) {
            this.ZO8G()
        }
        bI1x.insertBefore(g1x, this.bJs7l);
        this.eg3x.value = "";
        var bq1x = a9j.H1x(this.o1x, "j-receiver").length;
        if (bq1x > 1)
            a9j.ba1x(this.Dm0x, "display", "none");
        this.bxY4c();
        this.Py4C()
    }
    ;
    b0x.ZO8G = function() {
        var OD4H = a9j.H1x(this.o1x, "j-receiver");
        var bc1x;
        if (OD4H.length > 0) {
            for (bc1x = 0; bc1x < OD4H.length; bc1x++) {
                a9j.cK2x(OD4H[bc1x], false)
            }
        }
    }
    ;
    b0x.ctQ7J = function() {
        this.eg3x.value = ""
    }
    ;
    b0x.ctP7I = function(r1x) {
        this.dY3x(!0);
        var OD4H = a9j.H1x(this.o1x, "j-receiver");
        a9j.cK2x(OD4H[r1x], false);
        this.Py4C()
    }
    ;
    b0x.xC9t = function() {
        var bo1x = this.eg3x.value;
        var bv1x = bo1x.trim().toLowerCase();
        var j1x;
        bv1x = bv1x.replace(/\[/g, "\\[");
        bv1x = bv1x.replace(/\]/g, "\\]");
        j1x = this.bJh7a(bv1x);
        this.ctL7E(j1x)
    }
    ;
    b0x.pd6X = function(d1x) {
        a9j.ba1x(this.Wo7h, "display", "none")
    }
    ;
    b0x.dY3x = function(dM2x) {
        if (dM2x && this.nc5h) {
            a9j.ba1x(this.nc5h, "display", "none");
            return
        }
        if (this.nc5h)
            a9j.ba1x(this.nc5h, "display", "block")
    }
    ;
    b0x.ctU7N = function(d1x) {
        h1x.cn1x(d1x);
        var bP1x = d1x.target || d1x.srcElement;
        if (a9j.bE1x(bP1x, "j-flag"))
            return;
        var bI1x = bP1x.nodeName.toLowerCase() == "a" ? bP1x.parentNode : bP1x.parentNode.parentNode;
        var lj5o = a9j.gN3x(bI1x, "data-username");
        var ir4v = a9j.gN3x(bI1x, "data-userId");
        this.bxO4S(lj5o, ir4v);
        this.pd6X();
        a9j.ba1x(this.Dm0x, "display", "none")
    }
    ;
    b0x.ctT7M = function(d1x) {
        h1x.bg1x(d1x);
        var bP1x = d1x.target || d1x.srcElement;
        if (a9j.bE1x(bP1x.parentNode, "j-receiver")) {
            a9j.cK2x(bP1x.parentNode, false);
            this.dY3x(!0);
            this.Py4C()
        } else
            this.eg3x.focus()
    }
    ;
    b0x.bxY4c = function() {
        this.bxS4W.innerHTML = this.eg3x.value;
        var cC2x = this.bxS4W.offsetWidth + 2;
        a9j.ba1x(this.eg3x, "width", cC2x + "px")
    }
    ;
    b0x.Py4C = function() {
        var Wj7c = a9j.hO4S(this.eg3x, this.o1x).y;
        var bKV7O = Math.floor((Wj7c - 8) / 27);
        if (bKV7O < 0)
            return;
        a9j.ba1x(this.bxR4V, "height", 19 + bKV7O * 29 + "px")
    }
    ;
    b0x.Rl5q = function() {
        var qk6e = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qk6e.length; i++) {
            a9j.ba1x(this.bxS4W, qk6e[i], a9j.dh2x(this.eg3x, qk6e[i]))
        }
    }
    ;
    b0x.bIT7M = function(cA1x, C1x) {
        var do2x = C1x ? C1x : window.GUser.userId;
        var X1x = "/api/user/getfollows/" + do2x;
        var gf3x = v1x.bm1x(X1x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cA1x.f1x(this),
            onerror: function(j1x) {
                this.bk1x = []
            },
            onbeforerequest: function(j1x) {}
        })
    }
    ;
    b0x.bIV7O = function(j1x) {
        this.bk1x = JSON.parse(j1x).follow || [];
        var C1x = GUser.userId;
        for (var i = 0; i < this.bk1x.length; i++) {
            if (this.bk1x[i].userId == C1x) {
                this.bk1x.splice(i, 1);
                continue
            }
            this.bk1x[i].avatarUrl = this.bk1x[i].avatarUrl + "?param=30y30"
        }
    }
    ;
    b0x.ctM7F = function(j1x) {
        if (this.bk1x[0])
            return;
        this.bIV7O(j1x);
        this.xC9t()
    }
    ;
    b0x.bJh7a = function(bv1x) {
        var bv1x = bv1x ? bv1x : "";
        this.bk1x = this.bk1x[0] ? this.bk1x : [];
        var bq1x = this.bk1x.length;
        var OO4S = this.Ol4p();
        var tC8u = [];
        var PP5U, Vx7q, bxX4b;
        if (!this.bk1x[0])
            return tC8u;
        for (var bc1x = 0; bc1x < bq1x; bc1x++) {
            bxX4b = false;
            for (var v1x = 0; v1x < OO4S.length; v1x++) {
                if (this.bk1x[bc1x].userId == OO4S[v1x]) {
                    bxX4b = true;
                    break
                }
            }
            if (bxX4b)
                continue;
            PP5U = this.bk1x[bc1x].nickname.toLowerCase().search(bv1x);
            Vx7q = this.bk1x[bc1x].py ? this.bk1x[bc1x].py.toLowerCase().search(bv1x) : -1;
            if (PP5U !== -1 || Vx7q != -1)
                tC8u.push(this.bk1x[bc1x])
        }
        return tC8u
    }
    ;
    b0x.ctL7E = function(j1x) {
        a9j.dz2x(this.Wo7h, cua7T, {
            users: j1x
        });
        a9j.y1x(a9j.H1x(this.o1x, "j-item")[0], "j-selected");
        this.fJ3x = a9j.H1x(this.o1x, "j-item");
        a9j.ba1x(this.Wo7h, "display", "block")
    }
    ;
    b0x.Ol4p = function() {
        var tC8u = a9j.H1x(this.o1x, "j-receiver") || [];
        var ir4v = [];
        for (var i = 0; i < tC8u.length; i++) {
            ir4v.push(a9j.gN3x(tC8u[i], "data-id"))
        }
        return ir4v
    }
    ;
    b0x.cGx0x = function() {
        var ir4v = this.Ol4p();
        var tC8u = [];
        for (var i = 0; i < ir4v.length; i++) {
            for (var j = 0; j < this.bk1x.length; j++) {
                if (ir4v[i] == this.bk1x[j].userId)
                    tC8u.push(this.bk1x[j])
            }
        }
        return tC8u
    }
    ;
    b0x.ctJ7C = function() {
        this.ZO8G()
    }
    ;
    w1x.HG2x.J1x = function(e1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n1x.oX6R.J1x({
                title: "登录"
            });
            return
        }
        e1x = e1x || {};
        if (e1x.parent === undefined)
            e1x.parent = document.body;
        !!this.fk3x && this.fk3x.T1x();
        this.fk3x = this.A1x(e1x)
    }
    ;
    w1x.HG2x.bt1x = function() {
        !!this.fk3x && this.fk3x.T1x()
    }
    ;
    w1x.HG2x.HR2x = function() {
        return this.pd6X()
    }
    ;
    w1x.HG2x.cGy0x = function() {
        return this.xC9t()
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k1x = c0x("nej.u"), h1x = c0x("nej.v"), l1x = c0x("nm.x"), n1x = c0x("nm.l"), b0x, L1x;
    n1x.KB2x = NEJ.C();
    b0x = n1x.KB2x.N1x(n1x.bkj1x);
    L1x = n1x.KB2x.cs1x;
    b0x.bl1x = function() {
        var HQ2x;
        var ctF7y = function(D1x, K1x) {
            HQ2x = HQ2x || [];
            if (K1x != "18")
                HQ2x.push({
                    key: K1x,
                    value: D1x
                })
        };
        return function(e1x) {
            this.bn1x(e1x);
            if (e1x.upwards) {
                a9j.y1x(this.o1x, "m-emts-up")
            } else {
                a9j.x1x(this.o1x, "m-emts-up")
            }
            if (e1x.rightwards) {
                a9j.y1x(this.o1x, "m-emts-right")
            } else {
                a9j.x1x(this.o1x, "m-emts-right")
            }
            if (!HQ2x) {
                var bz1x = l1x.cAK8C();
                k1x.eI3x(bz1x, ctF7y)
            }
            var bq1x = HQ2x.length;
            HQ2x.splice(bq1x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.XG7z = HQ2x;
            this.ctC7v = !!e1x.autoHide
        }
    }();
    b0x.ch1x = function() {
        this.cg1x = "ntp-portrait"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.H1x(this.o1x, "j-flag");
        this.bK1x = i1x[0];
        this.ctA7t = i1x[1];
        this.ctz7s = i1x[2];
        this.ctw7p = i1x[3];
        h1x.s1x(this.bK1x, "click", this.yn9e.f1x(this));
        h1x.s1x(this.ctA7t, "click", this.HK2x.f1x(this, 1));
        h1x.s1x(this.ctw7p, "click", this.HK2x.f1x(this, 2))
    }
    ;
    b0x.bxN4R = function(r1x) {
        this.bcb9S = r1x;
        var bi1x = (r1x - 1) * 50;
        var i1x = this.XG7z.slice(bi1x, Math.min(bi1x + 50, this.XG7z.length));
        this.bK1x.innerHTML = a9j.cc1x("jst-portrait", {
            plist: i1x
        }, {
            purl: l1x.bCU6O
        });
        this.ctz7s.innerText = r1x + "/" + Math.ceil(this.XG7z.length / 50)
    }
    ;
    b0x.HK2x = function(r1x) {
        var ctv7o = Math.ceil(this.XG7z.length / 50);
        if (r1x == 1 && this.bcb9S == 1 || r1x == 2 && this.bcb9S == ctv7o)
            return;
        r1x == 1 ? this.bxN4R(this.bcb9S - 1) : this.bxN4R(this.bcb9S + 1)
    }
    ;
    b0x.yn9e = function(d1x) {
        var F1x = h1x.W1x(d1x, "d:text");
        if (!F1x)
            return;
        var d1x = {
            url: a9j.t1x(F1x, "url"),
            text: a9j.t1x(F1x, "text")
        };
        this.z1x("onselect", d1x);
        if (this.ctC7v && !d1x.stopped) {
            this.bt1x()
        }
    }
    ;
    b0x.J1x = function() {
        L1x.J1x.call(this);
        this.bxN4R(1)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , h1x = c0x("nej.v")
      , k1x = c0x("nej.u")
      , dy2x = c0x("nej.p")
      , be1x = c0x("nej.h")
      , I1x = c0x("nej.ut")
      , kz5E = /^[#?]+/
      , Fj1x = /#(.*?)$/
      , xN9E = window
      , bxL4P = !history.pushState || dy2x.Ik2x.android || !history.auto;
    var bfl0x = function(X1x, bxK4O) {
        xN9E.history[!bxK4O ? "pushState" : "replaceState"](null, document.title, X1x)
    };
    var bax8p = function() {
        return location.parse(xN9E.location.href)
    };
    bfl0x = bfl0x.eH3x(function(d1x) {
        if (!bxL4P)
            return;
        var bf1x = d1x.args;
        d1x.stopped = !0;
        X1x = bf1x[0].replace(kz5E, "");
        !bf1x[1] ? xN9E.location.hash = X1x : xN9E.location.replace("#" + X1x)
    });
    bax8p = bax8p.eH3x(function(d1x) {
        if (!bxL4P)
            return;
        d1x.stopped = !0;
        var dR2x = Fj1x.test(xN9E.location.href) ? RegExp.$1 : "";
        d1x.value = location.parse(dR2x.replace(kz5E, ""))
    });
    location.redirect = function(X1x, bxK4O) {
        bfl0x(X1x, bxK4O);
        return this
    }
    ;
    location.active = function() {
        var ei3x, X1x, jJ4N, db2x, QS5X;
        var bxH4L = function(hu4y) {
            if (!!db2x) {
                db2x = !1;
                return
            }
            var d1x = {
                oldValue: jJ4N,
                newValue: bax8p()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h1x.z1x(location, "beforeurlchange", d1x);
                if (d1x.stopped) {
                    if (!!jJ4N) {
                        db2x = !0;
                        bfl0x(jJ4N.href, !0)
                    }
                    return
                }
            }
            X1x = xN9E.location.href;
            jJ4N = d1x.newValue;
            h1x.z1x(location, "urlchange", jJ4N);
            be1x.bvu4y(jJ4N.href)
        };
        var bJe7X = function() {
            if (X1x != xN9E.location.href)
                bxH4L();
            ei3x = requestAnimationFrame(bJe7X)
        };
        return function(bJ1x) {
            if (!!QS5X)
                return this;
            QS5X = !0;
            xN9E = bJ1x || window;
            if (bxL4P && "onhashchange"in window && dy2x.nq5v.trident2) {
                h1x.s1x(xN9E, "hashchange", bxH4L);
                bxH4L()
            } else if (!ei3x) {
                ei3x = requestAnimationFrame(bJe7X)
            }
            return this
        }
    }();
    location.parse = function() {
        var gH3x = /^https?:\/\/.*?\//i
          , kz5E = /[?#]/;
        return function(X1x) {
            var m1x = {
                href: X1x
            };
            X1x = (X1x || "").replace(gH3x, "/").split(kz5E);
            var cz1x = 1;
            if (X1x[0] == "/" && (X1x[1] || "").indexOf("/") == 0)
                cz1x = 2;
            m1x.path = X1x.splice(0, cz1x).join("?");
            m1x.query = k1x.hq4u(X1x.join("&"));
            return m1x
        }
    }();
    location.same = function(X1x) {
        return bax8p().href == X1x
    }
    ;
    I1x.fI3x.A1x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
}
)();
(function() {
    var c0x = NEJ.P
      , a9j = c0x("nej.e")
      , h1x = c0x("nej.v")
      , gt3x = c0x("nm.ut");
    gt3x.ve8W = function(er3x) {
        var hf4j = {
            text: "",
            start: 0,
            end: 0
        };
        if (er3x.setSelectionRange) {
            hf4j.start = er3x.selectionStart;
            hf4j.end = er3x.selectionEnd;
            hf4j.text = hf4j.start != hf4j.end ? er3x.value.substring(hf4j.start, hf4j.end) : ""
        } else if (document.selection) {
            var i, Ys7l = document.selection.createRange(), zs9j = document.body.createTextRange();
            zs9j.moveToElementText(er3x);
            hf4j.text = Ys7l.text;
            hf4j.bookmark = Ys7l.getBookmark();
            for (i = 0; zs9j.compareEndPoints("StartToStart", Ys7l) < 0 && Ys7l.moveStart("character", -1) !== 0; i++) {
                if (er3x.value.charAt(i) == "\n") {
                    i++
                }
            }
            hf4j.start = i;
            hf4j.end = hf4j.text.length + hf4j.start
        }
        return hf4j
    }
    ;
    gt3x.ZJ8B = function(er3x, hf4j) {
        var zs9j;
        if (!hf4j) {
            hf4j = {
                text: "",
                start: 0,
                end: 0
            }
        }
        er3x.focus();
        if (er3x.setSelectionRange) {
            er3x.setSelectionRange(hf4j.start, hf4j.end)
        } else if (er3x.createTextRange) {
            zs9j = er3x.createTextRange();
            if (er3x.value.length === hf4j.start) {
                zs9j.collapse(false);
                zs9j.select()
            } else {
                zs9j.moveToBookmark(hf4j.bookmark);
                zs9j.select()
            }
        }
    }
    ;
    gt3x.Il2x = function(er3x, hf4j, cI2x) {
        var hf4j = hf4j || {
            text: "",
            start: 0,
            end: 0
        };
        var bxF4J, bOd8V, zs9j, MW3x, bOg8Y, bOh8Z, Hw2x;
        this.ZJ8B(er3x, hf4j);
        if (er3x.setSelectionRange) {
            bxF4J = er3x.value;
            bOd8V = bxF4J.substring(0, hf4j.start) + cI2x + bxF4J.substring(hf4j.end);
            bOg8Y = bOh8Z = hf4j.start + cI2x.length;
            Hw2x = er3x.scrollTop;
            er3x.value = bOd8V;
            if (er3x.scrollTop != Hw2x) {
                er3x.scrollTop = Hw2x
            }
            er3x.setSelectionRange(bOg8Y, bOh8Z)
        } else if (er3x.createTextRange) {
            MW3x = document.selection.createRange();
            MW3x.text = cI2x;
            MW3x.setEndPoint("StartToEnd", MW3x);
            MW3x.select()
        }
        h1x.z1x(er3x, "keyup")
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), dy2x = c0x("nej.p"), k1x = c0x("nej.u"), cd1x = c0x("nej.ut"), w1x = c0x("nm.w"), gt3x = c0x("nm.ut"), b0x;
    w1x.bOl8d = NEJ.C();
    b0x = w1x.bOl8d.N1x(cd1x.cJ2x);
    b0x.cx1x = function(e1x) {
        this.cE2x(e1x)
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.gq3x = e1x.txt;
        this.Hr2x = e1x.sgtsContainer;
        this.bOq8i = e1x.sgtsList[0];
        this.bcQ9H = e1x.sgtsItem;
        this.oN6H = e1x.rangeData;
        this.Im2x = e1x.atIndex;
        a9j.y1x(this.bcQ9H[0], "selected-item");
        this.NW4a()
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        h1x.mU5Z(document.body, "keyup", this.bOD8v.f1x(this));
        h1x.mU5Z(document.body, "click", this.bOL8D.f1x(this))
    }
    ;
    b0x.NW4a = function() {
        this.bX1x([[document.body, "keyup", this.bOD8v.f1x(this)], [document.body, "click", this.bOL8D.f1x(this)], [this.gq3x, "keydown", this.bOX8P.f1x(this)], [this.gq3x, "keypress", this.bOX8P.f1x(this)], [this.bOq8i, "click", this.bOY8Q.f1x(this)], [this.bOq8i, "mouseover", this.Ho2x.f1x(this)]])
    }
    ;
    b0x.Ho2x = function(d1x) {
        var bP1x = h1x.W1x(d1x);
        var p1x = a9j.H1x(this.Hr2x, "selected-item");
        if (a9j.bE1x(bP1x, "j-sgt")) {
            a9j.x1x(p1x[0], "selected-item");
            a9j.y1x(bP1x, "selected-item")
        }
    }
    ;
    b0x.bOD8v = function(d1x) {
        var p1x = a9j.H1x(this.Hr2x, "selected-item");
        var bq1x = this.bcQ9H.length;
        var jS4W = d1x.keyCode || d1x.which;
        var r1x, j1x;
        switch (jS4W) {
        case 38:
            r1x = a9j.gN3x(p1x[0], "data-index") - 1 < 0 ? bq1x - 1 : a9j.gN3x(p1x[0], "data-index") - 1;
            a9j.x1x(p1x[0], "selected-item");
            a9j.y1x(this.bcQ9H[r1x], "selected-item");
            break;
        case 40:
            r1x = parseInt(a9j.gN3x(p1x[0], "data-index")) + 1 >= bq1x ? 0 : parseInt(a9j.gN3x(p1x[0], "data-index")) + 1;
            a9j.x1x(p1x[0], "selected-item");
            a9j.y1x(this.bcQ9H[r1x], "selected-item");
            break;
        case 13:
            this.bOY8Q(d1x);
            break;
        case 27:
            this.pd6X();
            break;
        case 32:
            var bo1x = this.gq3x.value;
            var r1x = gt3x.ve8W(this.gq3x);
            if (bo1x.charAt(r1x.start - 1) !== " ")
                return;
            this.pd6X();
            break
        }
    }
    ;
    b0x.bOX8P = function(d1x) {
        var jS4W = d1x.keyCode || d1x.which;
        if (jS4W === 13 || jS4W === 38 || jS4W === 40) {
            h1x.cn1x(d1x);
            d1x.keyCode = 0;
            d1x.which = 0;
            d1x.returnvalue = false
        }
    }
    ;
    b0x.bOL8D = function(d1x) {
        var bP1x = d1x.target || d1x.srcElement;
        if (bP1x === this.gq3x)
            return;
        this.pd6X()
    }
    ;
    b0x.bOY8Q = function(d1x) {
        h1x.bg1x(d1x);
        var p1x = a9j.H1x(this.Hr2x, "selected-item")[0];
        var rC7v = d1x.target || d1x.srcElement;
        var u1x = d1x.type;
        if (a9j.bE1x(rC7v, "lst"))
            return;
        if (u1x == "click") {
            a9j.x1x(p1x, "selected-item");
            a9j.y1x(rC7v, "selected-item")
        } else
            rC7v = p1x;
        var j1x = rC7v.innerHTML + " ";
        this.pd6X();
        var hf4j = this.oN6H;
        hf4j.start = this.Im2x + 1;
        if (dy2x.dt2x.browser == "ie" && dy2x.dt2x.version < "9.0") {
            this.gq3x.value = this.gq3x.value.substring(0, hf4j.start) + this.gq3x.value.substring(hf4j.end, this.gq3x.value.length);
            hf4j.end = hf4j.start
        }
        gt3x.Il2x(this.gq3x, hf4j, j1x);
        h1x.z1x(this.gq3x, "keyup")
    }
    ;
    b0x.pd6X = function(d1x) {
        if (!!this.Hr2x)
            a9j.ba1x(this.Hr2x, "display", "none");
        this.T1x()
    }
    ;
    b0x.xC9t = function(d1x) {
        if (!!this.Hr2x)
            a9j.ba1x(this.Hr2x, "display", "block")
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), w1x = c0x("nm.w"), cd1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), b0x;
    var ctu7n = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ctt7m = a9j.eB3x("m-wgt-atlist");
    var iT4X = a9j.tA8s(ctu7n);
    w1x.bPe8W = NEJ.C();
    b0x = w1x.bPe8W.N1x(bD1x.ej3x);
    b0x.cx1x = function(e1x) {
        this.fT3x = {};
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.fT3x.txt = a9j.B1x(e1x.target);
        this.fT3x.data = e1x.data;
        this.fT3x.offset = e1x.offset;
        this.fT3x.rangeData = e1x.rangeData;
        this.fT3x.atIndex = e1x.atIndex;
        this.cts7l(e1x);
        this.bn1x(e1x);
        this.fT3x.sgtsContainer = this.o1x;
        this.fT3x.sgtsList = a9j.H1x(this.o1x, "lst");
        this.fT3x.sgtsItem = a9j.H1x(this.o1x, "f-thide");
        this.VP7I(e1x);
        this.ctp7i = w1x.bOl8d.A1x(this.fT3x)
    }
    ;
    b0x.bC1x = function(e1x) {
        this.bF1x();
        this.ctp7i.T1x()
    }
    ;
    b0x.ch1x = function() {
        this.mn5s = iT4X
    }
    ;
    b0x.bW1x = function() {
        this.ci1x()
    }
    ;
    b0x.cts7l = function(e1x) {
        this.o1x = a9j.dC2x(a9j.jj4n(a9j.cc1x(ctt7m, e1x.data)))
    }
    ;
    b0x.VP7I = function(e1x) {
        var bPh8Z = a9j.H1x(this.o1x, "selected-item")[0];
        if (bPh8Z)
            a9j.x1x(bPh8Z, "selected-item");
        var cZ2x = e1x.offset.x + "px";
        var hE4I = e1x.offset.y + "px";
        a9j.ba1x(this.o1x, "left", cZ2x);
        a9j.ba1x(this.o1x, "top", hE4I)
    }
}
)();
(function() {
    var c0x = NEJ.P
      , v1x = c0x("nej.j")
      , gt3x = c0x("nm.ut");
    gt3x.bPv9m = function(bo1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var df2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Io2x = bo1x.match(df2x) || [];
        for (var bc1x = 0; bc1x < Io2x.length; bc1x++) {
            Io2x[bc1x] = Io2x[bc1x].split("@")[1]
        }
        Io2x = Io2x.reverse();
        var ir4v = GUser.userId;
        var cto7h = v1x.tt7m("mentioners" + ir4v) || [];
        var jP4T = Io2x.concat(cto7h);
        if (jP4T.length > 10)
            jP4T = jP4T.slice(0, 10);
        v1x.vb8T("mentioners" + ir4v, jP4T)
    }
    ;
    gt3x.ctn7g = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var ir4v = GUser.userId;
        return v1x.tt7m("mentioners" + ir4v) || []
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), dy2x = c0x("nej.p"), v1x = c0x("nej.j"), k1x = c0x("nej.u"), cd1x = c0x("nej.ut"), w1x = c0x("nm.w"), gt3x = c0x("nm.ut"), l1x = c0x("nm.x"), b0x;
    var FullscreenApi = l1x.FL1x || {};
    w1x.bPI9z = NEJ.C();
    b0x = w1x.bPI9z.N1x(cd1x.cJ2x);
    b0x.cx1x = function(e1x) {
        this.cE2x(e1x);
        this.bPK9B()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.gq3x = e1x.txt;
        this.o1x = e1x.body;
        this.bPO9F = e1x.before;
        this.Np3x = e1x.flag;
        this.ctl7e = e1x.after;
        this.rs7l = [];
        if (dy2x.dt2x.browser != "ie") {
            setTimeout(function() {
                this.mj5o()
            }
            .f1x(this), 0)
        }
        this.NW4a()
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (this.vf8X)
            this.vf8X.T1x();
        delete this.vf8X
    }
    ;
    b0x.NW4a = function() {
        this.bX1x([[this.gq3x, "keyup", this.bPV9M.f1x(this, this.gq3x)], [this.gq3x, "click", this.bPV9M.f1x(this, this.gq3x)], [this.gq3x, "focus", this.mj5o.f1x(this)]])
    }
    ;
    b0x.mj5o = function(d1x) {
        this.oN6H = gt3x.ve8W(this.gq3x)
    }
    ;
    b0x.bPK9B = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do2x = window.GUser.userId;
        var X1x = "/api/user/getfollows/" + do2x;
        var gf3x = v1x.bm1x(X1x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j1x) {
                window.GFollowers = JSON.parse(j1x).follow
            }
            .f1x(this),
            onerror: function(j1x) {},
            onbeforerequest: function(j1x) {}
        })
    }
    ;
    b0x.bPW9N = function(index) {
        var D1x = this.gq3x.value, bi1x, bxv4z, bxu4y, PF5K;
        this.bPO9F.innerHTML = k1x.dG2x(D1x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mB5G = a9j.H1x(this.bPO9F, "j-test");
        for (var bc1x = 0; bc1x < mB5G.length; bc1x++) {
            mB5G[bc1x].innerText = " "
        }
        this.Np3x.innerHTML = D1x.charAt(index);
        this.ctl7e.innerHTML = k1x.dG2x(D1x.substr(index + 1, D1x.length));
        PF5K = parseInt(a9j.dh2x(this.gq3x, "lineHeight"));
        a9j.ba1x(this.o1x, "display", "block");
        bxv4z = a9j.hO4S(this.Np3x, this.o1x);
        bxu4y = a9j.hO4S(this.gq3x);
        a9j.ba1x(this.o1x, "display", "none");
        var cZ2x = bxv4z.x + bxu4y.x;
        var hE4I = bxv4z.y + bxu4y.y + PF5K;
        bi1x = {
            x: cZ2x,
            y: hE4I
        };
        this.ctj6d(bi1x)
    }
    ;
    b0x.bPV9M = function(er3x, d1x) {
        h1x.cn1x(d1x);
        var er3x = er3x;
        var D1x = er3x.value;
        var bq1x = D1x.length;
        var r1x = gt3x.ve8W(er3x).start;
        var bQg9X = 0;
        var jS4W = d1x.keyCode || d1x.which;
        var jP4T;
        this.oN6H = gt3x.ve8W(er3x);
        var bQn9e = false;
        for (var i = 1; i < 20; i++) {
            jP4T = r1x - i;
            if (D1x.charAt(jP4T) === " ")
                break;
            if (D1x.charAt(jP4T) === "@") {
                bQn9e = true;
                this.Im2x = bQg9X = jP4T;
                break
            }
        }
        if (bQn9e && d1x.shiftKey === false && jS4W !== 38 && jS4W !== 40) {
            if (jS4W !== 27 && jS4W !== 13) {
                this.vf8X ? this.vf8X.T1x() : null;
                this.bPW9N(bQg9X)
            }
        } else if (jS4W !== 38 && jS4W !== 40 && d1x.keyCode !== 32) {
            this.vf8X ? this.vf8X.T1x() : null
        }
    }
    ;
    b0x.ctj6d = function(bi1x) {
        var bi1x = bi1x;
        var j1x = this.vE8w();
        var e1x = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi1x,
            data: j1x,
            target: this.gq3x,
            rangeData: this.oN6H,
            atIndex: this.Im2x
        };
        this.vf8X ? this.vf8X.T1x() : null;
        this.vf8X = w1x.bPe8W.A1x(e1x)
    }
    ;
    b0x.vE8w = function() {
        var cti6c = gt3x.ve8W(this.gq3x).start;
        var ctg6a = this.Im2x + 1;
        var bQu9l = gt3x.ctn7g() || [];
        var bQv9m = [];
        var bv1x = this.gq3x.value.substring(ctg6a, cti6c).toLowerCase();
        bv1x = bv1x.replace(/\[/g, "\\[");
        bv1x = bv1x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.rs7l = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.rs7l = [];
        if (!this.rs7l[0])
            this.bPK9B();
        for (var bc1x = 0; bc1x < bQu9l.length; bc1x++) {
            for (var v1x = 0; v1x < this.rs7l.length; v1x++) {
                if (this.rs7l[v1x].nickname == bQu9l[bc1x])
                    bQv9m.push(this.rs7l[v1x])
            }
        }
        this.rs7l = k1x.cfU3x(this.rs7l, bQv9m, {
            union: true,
            begin: true
        });
        var ctf6Z = this.rs7l.length;
        var baq8i = [];
        var PP5U, Vx7q;
        if (!this.rs7l[0])
            return {
                suggests: baq8i
            };
        for (var i = 0; i < ctf6Z; i++) {
            PP5U = this.rs7l[i].nickname.toLowerCase().search(bv1x);
            Vx7q = this.rs7l[i].py ? this.rs7l[i].py.toLowerCase().search(bv1x) : -1;
            if (PP5U !== -1 || Vx7q != -1)
                baq8i.push(this.rs7l[i]);
            if (baq8i.length === 10)
                break
        }
        return {
            suggests: baq8i
        }
    }
    ;
    b0x.QB5G = function() {
        var hf4j = this.oN6H || {
            text: "",
            start: 0,
            end: 0
        };
        h1x.z1x(this.gq3x, "focus");
        gt3x.Il2x(this.gq3x, hf4j, "@");
        this.oN6H = gt3x.ve8W(this.gq3x);
        this.Im2x = hf4j.start;
        this.bPW9N(this.Im2x)
    }
    ;
    b0x.HR2x = function() {
        if (this.vf8X)
            this.vf8X.T1x()
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), v1x = c0x("nej.j"), w1x = c0x("nm.w"), cd1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), b0x;
    var ctd6X = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var ctc6W = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var ge3x = a9j.jj4n(ctc6W);
    var iT4X = a9j.tA8s(ctd6X);
    w1x.QJ5O = NEJ.C();
    b0x = w1x.QJ5O.N1x(bD1x.ej3x);
    b0x.cx1x = function(e1x) {
        this.fT3x = {};
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x);
        this.fT3x.txt = a9j.B1x(e1x.target);
        this.Rl5q();
        this.Ra5f = w1x.bPI9z.A1x(this.fT3x)
    }
    ;
    b0x.bC1x = function(e1x) {
        this.bF1x();
        this.Ra5f.T1x()
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = ge3x;
        this.mn5s = iT4X
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.dm2x(a9j.B1x(this.o1x));
        this.fT3x.body = this.o1x;
        this.fT3x.before = i1x[0];
        this.fT3x.flag = i1x[1];
        this.fT3x.after = i1x[2]
    }
    ;
    b0x.Rl5q = function() {
        var qk6e = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qk6e.length; i++) {
            if (qk6e[i] === "width" && a9j.dh2x(this.fT3x.txt, qk6e[i]) == "100%") {
                var ctb6V = this.fT3x.txt.offsetWidth;
                if (!ctb6V) {
                    setTimeout(function() {
                        a9j.ba1x(this.o1x, qk6e[i], this.fT3x.txt.offsetWidth + "px")
                    }
                    .f1x(this), 300)
                } else {
                    a9j.ba1x(this.o1x, qk6e[i], this.fT3x.txt.offsetWidth + "px")
                }
                continue
            }
            a9j.ba1x(this.o1x, qk6e[i], a9j.dh2x(this.fT3x.txt, qk6e[i]))
        }
    }
    ;
    b0x.QB5G = function() {
        this.Ra5f.QB5G()
    }
    ;
    b0x.HR2x = function() {
        this.Ra5f.HR2x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, fA3x = NEJ.R, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), lc5h = c0x("nm.c"), R1x = {}, b0x;
    if (!!lc5h.bxp4t)
        return;
    lc5h.bxp4t = NEJ.C();
    b0x = lc5h.bxp4t.N1x(I1x.cJ2x);
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.Hb1x = function(fg3x, cA1x, bcW9N) {
        if (R1x[fg3x]) {
            this.gy3x("register commonJST[" + fg3x + "] duplicate");
            return
        }
        if (!k1x.gF3x(cA1x)) {
            cA1x = ctl.comJST.csS6M(fg3x, cA1x, bcW9N)
        }
        R1x[fg3x] = cA1x
    }
    ;
    b0x.csQ6K = function(beP0x) {
        if (k1x.eL3x(beP0x)) {
            k1x.bd1x(beP0x, function(p1x) {
                ctl.comJST.Hb1x.apply(this, p1x)
            }, this)
        } else if (k1x.lQ5V(beP0x)) {
            k1x.eI3x(beP0x, function(fz3x, K1x) {
                ctl.comJST.Hb1x(K1x, fz3x)
            })
        }
    }
    ;
    b0x.csS6M = function(fg3x, uj8b, bcW9N) {
        uj8b = uj8b || {};
        NEJ.X(uj8b, {
            comJST: this.nG6A
        });
        if (uj8b.resetDataName && !k1x.eL3x(uj8b.resetDataName)) {
            uj8b.resetDataName = [uj8b.resetDataName]
        }
        return function() {
            var j1x = arguments[0]
              , jV4Z = arguments[1];
            if (uj8b.resetDataName) {
                var jP4T = {};
                for (var i = 0, ii = uj8b.resetDataName.length; i < ii; i++) {
                    jP4T[uj8b.resetDataName[i]] = arguments[i]
                }
                j1x = jP4T;
                jV4Z = arguments[ii]
            }
            NEJ.X(j1x, uj8b, dZ3x);
            if (bcW9N) {
                jV4Z = jV4Z || {};
                NEJ.X(jV4Z, bcW9N)
            }
            return a9j.cc1x(fg3x, j1x, jV4Z)
        }
    }
    ;
    b0x.nG6A = function(fg3x) {
        if (!R1x[fg3x]) {
            this.gy3x("commonJST[" + fg3x + "] is unregister");
            return ""
        } else {
            return R1x[fg3x].apply(null, fA3x.slice.call(arguments, 1))
        }
    }
    ;
    b0x.dump = function() {
        return R1x
    }
    ;
    b0x.gy3x = function(csM6G) {
        if (console && console.log) {
            console.log(csM6G)
        }
    }
    ;
    var dZ3x = function(fz3x, K1x) {
        return K1x == "resetDataName"
    };
    c0x("ctl").comJST = lc5h.bxp4t.gg3x();
    a9j.crg6a({
        comJST: c0x("ctl").comJST.nG6A
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, br1x = NEJ.F, fA3x = NEJ.R, a9j = c0x("nej.e"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), lc5h = c0x("nm.c"), l1x = c0x("nm.x"), R1x = {}, b0x;
    if (!!lc5h.bxc4g)
        return;
    lc5h.bxc4g = NEJ.C();
    b0x = lc5h.bxc4g.N1x(I1x.cJ2x);
    b0x.cx1x = function() {
        this.cE2x();
        var e1x = {
            "com-mv-artists": function(fO3x, ed3x, RB5G, bwX4b) {
                return a9j.cc1x("com-mv-artists", {
                    artists: fO3x,
                    clazz: ed3x,
                    boxClazz: bwX4b,
                    mark: RB5G || function(cM2x) {
                        return cM2x
                    }
                    ,
                    escape: k1x.dG2x,
                    comJST: ctl.comJST.nG6A
                })
            },
            "com-album-artists": function(fO3x, ed3x, RB5G, bwX4b) {
                return a9j.cc1x("com-album-artists", {
                    artists: fO3x,
                    clazz: ed3x,
                    boxClazz: bwX4b,
                    mark: RB5G || function(cM2x) {
                        return cM2x
                    }
                    ,
                    escape: k1x.dG2x,
                    comJST: ctl.comJST.nG6A
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k1x.dG2x
            },
            "com-user-type": function(dq2x, ed3x, lL5Q, xt9k, bRr0x) {
                return a9j.cc1x("com-user-type", {
                    x: dq2x,
                    clazz: ed3x || "",
                    clazz2: typeof bRr0x == "undefined" ? "icn" : bRr0x,
                    before: lL5Q || "",
                    after: xt9k || "",
                    isEmptyObject: l1x.bIQ7J
                })
            }
        };
        for (var C1x in e1x) {
            ctl.comJST.Hb1x(C1x, e1x[C1x])
        }
    }
    ;
    b0x.bl1x = function(e1x) {
        this.bn1x(e1x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    c0x("ctl").comJSTUtil = lc5h.bxc4g.gg3x()
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, a9j = c0x("nej.e"), dy2x = c0x("nej.p"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), v1x = c0x("nej.j"), w1x = c0x("nm.w"), gt3x = c0x("nm.ut"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), n1x = c0x("nm.l"), bwV4Z = [2, 3], eb3x = ["sn", "db"], b0x, L1x, csL6F = {
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
        39: "video",
        41: "cloudvideo"
    }, WA7t = {
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
        video: "视频",
        cloudvideo: "视频"
    }, bRw0x = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by ",
        cloudvideo: " by "
    }, csH6B = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, GV1x = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    }, FullscreenApi = l1x.FL1x || {};
    n1x.oB6v = NEJ.C();
    b0x = n1x.oB6v.N1x(n1x.ep3x);
    L1x = n1x.oB6v.cs1x;
    b0x.bl1x = function(e1x) {
        if (e1x.onclose === undefined) {
            e1x.onclose = this.bRJ0x.f1x(this)
        }
        this.bn1x(e1x);
        this.CC0x = e1x.isPub;
        this.jI4M = e1x.rid || -1;
        this.ev3x = e1x.type || -1;
        this.bwP4T = e1x.purl;
        this.RS6M = e1x.name || "";
        this.Sf6Z = e1x.author || "";
        this.bwO4S = e1x.authors || "";
        this.Ya7T = e1x.actId;
        this.Ye7X = e1x.actName;
        this.bSq0x = e1x.title;
        this.Yh7a = {};
        this.csG6A = e1x.mesg || "";
        this.csF6z = e1x.placeholder || "说点什么吧";
        this.bwL4P = e1x.hideTip;
        this.csE6y = e1x.videoJumpUrl;
        var i1x, eV3x = +(new Date);
        try {
            i1x = top.localCache.B1x("user") || {}
        } catch (e) {
            i1x = {}
        }
        for (var i = 0, i1x = i1x.bindings || [], cR2x; i < i1x.length; ++i) {
            cR2x = !i1x[i].tokenJsonStr ? null : JSON.parse(i1x[i].tokenJsonStr);
            if (!cR2x || cR2x.expires_in === undefined)
                continue;
            var Yx7q = parseInt(cR2x.expires_in)
              , YO8G = parseInt(i1x[i].refreshTime)
              , csD6x = (Yx7q + YO8G) * 1e3 - 5 * 60 * 1e3;
            if (csD6x > eV3x)
                this.Yh7a[i1x[i].type] = !0
        }
        this.xs9j = w1x.HG2x.A1x({
            parent: this.Za8S,
            err: this.bSI0x
        });
        if (this.hw4A) {
            this.hw4A.T1x()
        }
        this.hw4A = w1x.QJ5O.A1x({
            parent: document.body,
            target: this.ey3x
        });
        if (this.ev3x == 24 || this.ev3x == 21 || this.ev3x == 41 || this.GL1x()) {
            this.zS9J.style.display = "none"
        } else {
            this.zS9J.style.display = "";
            this.oJ6D = w1x.buv3x.A1x({
                parent: this.bwA4E,
                button: this.zS9J,
                onstartupload: this.bSS0x.f1x(this, true),
                onfinishupload: this.bSS0x.f1x(this, false)
            })
        }
        if (this.GL1x()) {
            this.pD6x.innerText = "";
            a9j.y1x(this.pD6x, "info-video");
            a9j.y1x(this.bwx4B, "f-hide")
        } else {
            a9j.x1x(this.bwx4B, "f-hide")
        }
    }
    ;
    b0x.bC1x = function() {
        this.bF1x();
        if (this.xs9j) {
            this.xs9j.T1x();
            delete this.xs9j
        }
        if (this.hw4A) {
            this.hw4A.T1x();
            delete this.hw4A
        }
        if (this.oJ6D) {
            this.oJ6D.T1x();
            delete this.oJ6D
        }
        if (this.mT5Y) {
            this.mT5Y.T1x();
            delete this.mT5Y
        }
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = "m-wgt-sharewin"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.bTb0x = a9j.dm2x(this.o1x)[0];
        var bu1x = a9j.H1x(this.o1x, "j-flag");
        this.qB7u = bu1x.shift();
        this.bSI0x = bu1x.shift();
        this.Za8S = bu1x.shift();
        this.ey3x = bu1x.shift();
        this.pD6x = bu1x.shift();
        this.bww4A = bu1x.shift();
        this.csC6w = bu1x.shift();
        this.zS9J = bu1x.shift();
        this.cv1x = bu1x.shift();
        this.bwA4E = bu1x.shift();
        this.Cg0x = bu1x.shift();
        this.cGB0x = bu1x.shift();
        this.bwx4B = bu1x.shift();
        this.el3x = bu1x.shift();
        this.baE8w = a9j.H1x(this.bwx4B, "j-t");
        this.CY0x = I1x.FZ1x.A1x({
            list: a9j.dm2x(this.qB7u),
            selected: "z-slt",
            onchange: this.bwk4o.f1x(this)
        });
        if (dy2x.dt2x.browser == "ie" && dy2x.dt2x.version < "8.0") {
            a9j.ba1x(this.Za8S, "position", "relative");
            a9j.ba1x(this.Za8S, "zIndex", "10")
        }
        h1x.s1x(window, "snsbind", this.Uc6W.f1x(this));
        h1x.s1x(this.ey3x, "input", this.fP3x.f1x(this));
        h1x.s1x(this.ey3x, "keyup", this.vh8Z.f1x(this));
        h1x.s1x(this.o1x, "click", this.cL2x.f1x(this));
        this.S1x = q1x.bth3x.A1x();
        this.S1x.s1x("onshareall", this.bcq9h.f1x(this, 0));
        this.S1x.s1x("onshareerror", this.iY4c.f1x(this));
        this.S1x.s1x("onshareprivate", this.bcq9h.f1x(this, 1));
        this.bcr9i = q1x.zV9M.A1x();
        this.gy3x = q1x.hS4W.A1x();
        try {
            this.Ue6Y = top.api.sharePermission
        } catch (e) {}
        if (!this.Ue6Y) {
            this.Ue6Y = GV1x;
            v1x.bm1x("/api/event/user/permission", {
                type: "json",
                onload: function(d1x) {
                    if (d1x.code == 200) {
                        this.Ue6Y = NEJ.EX(GV1x, d1x)
                    }
                }
                .f1x(this)
            })
        }
    }
    ;
    b0x.bwk4o = function(d1x) {
        d1x.index == 0 ? a9j.x1x(this.bTb0x, "m-plshare") : a9j.y1x(this.bTb0x, "m-plshare");
        this.Za8S.style.display = d1x.index == 0 ? "none" : "";
        this.csC6w.style.display = d1x.index == 0 ? "" : "none";
        this.zS9J.style.display = d1x.index == 0 ? "" : "none";
        if (this.ev3x == 24 || this.ev3x == 21) {
            this.zS9J.style.display = "none"
        }
        this.bSI0x.style.display = "none";
        this.ey3x.value = "";
        this.cb1x();
        this.Gp1x();
        if (d1x.index == 0) {
            var cC2x = a9j.dh2x(this.ey3x, "width");
            if (cC2x == "auto" || !cC2x) {
                return
            } else {
                if (this.hw4A) {
                    this.hw4A.T1x()
                }
                this.hw4A = w1x.QJ5O.A1x({
                    parent: document.body,
                    target: this.ey3x
                })
            }
            this.bwA4E.style.display = ""
        } else {
            if (this.hw4A) {
                this.hw4A.T1x();
                delete this.hw4A
            }
            this.bwA4E.style.display = "none"
        }
    }
    ;
    b0x.cL2x = function(d1x) {
        var g1x = h1x.W1x(d1x, "d:action");
        if (!g1x)
            return;
        if (a9j.t1x(g1x, "action") == "search") {
            h1x.cn1x(d1x)
        } else if (a9j.t1x(g1x, "default") === undefined) {
            h1x.cn1x(d1x)
        }
        switch (a9j.t1x(g1x, "action")) {
        case "txt":
            this.mj5o();
            break;
        case "search":
            if (this.GL1x()) {
                top.location.href = this.csE6y
            } else if (this.CC0x && this.ev3x != 24) {
                if (this.mT5Y) {
                    this.mT5Y.T1x()
                }
                this.mT5Y = w1x.bxz4D.A1x({
                    parent: this.o1x.parentNode,
                    onfinish: this.bwi4m.f1x(this),
                    oncancel: this.csw6q.f1x(this)
                });
                this.bwg4k = true;
                this.o1x.style.display = "none";
                this.Gn1x(this.jI4M < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h1x.tm7f(d1x);
            !!this.hn4r && this.hn4r.bt1x();
            this.hw4A.QB5G();
            this.gi3x();
            break;
        case "emot":
            h1x.tm7f(d1x);
            !!this.hw4A && this.hw4A.HR2x();
            if (!this.hn4r) {
                this.hn4r = n1x.KB2x.A1x({
                    parent: this.bww4A
                });
                this.hn4r.s1x("onselect", this.yn9e.f1x(this))
            }
            this.hn4r.J1x();
            break;
        case "upload":
            break;
        case "sns":
            h1x.bg1x(d1x);
            var bwb4f, bv1x, u1x = a9j.t1x(g1x, "type");
            if (!this.Yh7a[u1x]) {
                bwb4f = g1x.href.split("?");
                bv1x = k1x.hq4u(bwb4f[1]);
                bv1x["csrf_token"] = v1x.gw3x("__csrf");
                top.open(bwb4f[0] + "?" + k1x.cF2x(bv1x));
                return
            }
            var bz1x = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l1x.AN0x(g1x, "u-slg-" + bz1x[u1x] + "-gray");
            break;
        case "close":
            !!this.hn4r && this.hn4r.bt1x();
            this.bRJ0x();
            break;
        case "share":
            h1x.bg1x(d1x);
            if (this.GL1x()) {
                if (!a9j.bE1x(g1x, "u-btn2-2-dis")) {
                    this.csv6p()
                }
            } else if (a9j.bE1x(g1x, "u-btn2-2-dis")) {
                if (!this.Ue6Y.pubEventWithoutResource && this.jI4M < 0) {
                    this.cst6n()
                } else {}
            } else if (this.jI4M < 0 && !this.ey3x.value && this.oJ6D && this.oJ6D.NY4c().length == 0) {
                n1x.Z1x.J1x({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.css6m()
            }
            break
        }
    }
    ;
    b0x.cst6n = function() {
        var uf8X = 0, bvU4Y = function() {
            if (uf8X % 2) {
                a9j.x1x(this.pD6x, "z-show")
            } else {
                a9j.y1x(this.pD6x, "z-show")
            }
            uf8X++;
            if (uf8X > 5) {
                clearInterval(ei3x)
            }
        }, ei3x;
        return function() {
            uf8X = 0;
            clearInterval(ei3x);
            ei3x = setInterval(bvU4Y.f1x(this), 200)
        }
    }();
    b0x.Uc6W = function(m1x) {
        m1x = m1x.result;
        this.Yh7a[m1x.type] = !0;
        var r1x = k1x.di2x(bwV4Z, m1x.type)
          , cj1x = "u-slg-" + eb3x[r1x] + "-gray";
        a9j.x1x(this.baE8w[r1x], cj1x)
    }
    ;
    b0x.bwi4m = function(bx1x) {
        var j1x = bx1x.data;
        this.jI4M = bx1x.id;
        this.ev3x = bx1x.type;
        this.o1x.style.display = "";
        this.Gn1x(this.bSq0x);
        this.mT5Y && this.mT5Y.T1x();
        this.bwg4k = false;
        this.bwP4T = j1x.picUrl;
        this.RS6M = j1x.title || "";
        this.Sf6Z = j1x.author || "";
        this.bwO4S = j1x.authors || "";
        this.csr6l();
        this.bfm0x()
    }
    ;
    b0x.csw6q = function() {
        this.mT5Y && this.mT5Y.T1x();
        this.o1x.style.display = "";
        this.Gn1x(this.bSq0x);
        this.bwg4k = false;
        this.bfm0x()
    }
    ;
    b0x.yn9e = function(d1x) {
        var bo1x = "[" + d1x.text + "]";
        gt3x.Il2x(this.ey3x, this.oN6H, bo1x);
        this.gi3x()
    }
    ;
    b0x.fP3x = function(d1x) {
        dy2x.dt2x.browser == "ie" && dy2x.dt2x.version < "7.0" ? setTimeout(this.gi3x.f1x(this), 0) : this.gi3x()
    }
    ;
    b0x.vh8Z = function(d1x) {
        this.mj5o();
        if (d1x.keyCode == 8)
            this.gi3x()
    }
    ;
    b0x.gi3x = function() {
        this.mj5o();
        this.Gp1x()
    }
    ;
    b0x.Gp1x = function() {
        var bq1x = Math.ceil(k1x.fy3x(this.ey3x.value.trim()) / 2);
        this.cv1x.innerText = 140 - bq1x;
        bq1x > 140 ? a9j.fj3x(this.cv1x, "s-fc4", "s-fc6") : a9j.fj3x(this.cv1x, "s-fc6", "s-fc4")
    }
    ;
    b0x.css6m = function() {
        if (this.cP2x())
            return;
        if (k1x.fy3x(this.ey3x.value.trim()) > 280) {
            this.cb1x("字数超过140个字符");
            return
        }
        var u1x = this.CY0x.tG8y(), j1x;
        if (u1x == 0) {
            for (var i = 0, Iy2x = []; i < this.baE8w.length; ++i) {
                if (!a9j.bE1x(this.baE8w[i], "u-slg-" + eb3x[i] + "-gray"))
                    Iy2x.push(bwV4Z[i])
            }
            this.cP2x(!0);
            j1x = {
                id: this.jI4M,
                msg: this.ey3x.value.trim(),
                type: this.We7X(this.ev3x),
                picUrl: this.bwP4T,
                snsTypes: Iy2x.join(","),
                isPub: this.CC0x
            };
            if (this.Ya7T > 0) {
                j1x.actId = this.Ya7T;
                if (this.Ye7X) {
                    j1x.msg = "#" + this.Ye7X + "#" + j1x.msg
                }
            }
            var on6h = this.oJ6D && this.oJ6D.NY4c();
            if (on6h && on6h.length) {
                j1x.pics = on6h
            }
            this.S1x.cwr7k(j1x)
        } else {
            var tC8u = this.xs9j.Ol4p();
            if (tC8u.length <= 0) {
                this.cb1x("请至少选择一位好友");
                return
            }
            this.S1x.cwq7j({
                data: {
                    id: this.jI4M,
                    msg: this.ey3x.value.trim(),
                    type: this.We7X(this.ev3x == 41 ? 39 : this.ev3x),
                    userIds: "[" + tC8u.join(",") + "]"
                }
            })
        }
    }
    ;
    b0x.csv6p = function() {
        if (this.cP2x()) {
            return
        }
        this.gy3x.eU3x("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k1x.fy3x(this.ey3x.value.trim()) > 280) {
            this.cb1x("字数超过140个字符");
            return
        }
        this.cP2x(!0);
        var j1x = {
            msg: this.ey3x.value.trim() || "",
            type: "video"
        }
          , csp6j = {
            videoId: this.jI4M
        };
        if (this.Ya7T > 0) {
            j1x.actId = this.Ya7T;
            if (this.Ye7X) {
                j1x.msg = "#" + this.Ye7X + "#" + j1x.msg
            }
        }
        j1x.videoinfo = JSON.stringify(csp6j);
        this.S1x.cwo7h({
            data: {
                videoId: this.jI4M,
                commit: true
            },
            data2: j1x,
            snsTypes: ""
        })
    }
    ;
    b0x.bcq9h = function(u1x, m1x) {
        this.cP2x(!1);
        this.bt1x();
        if (!this.bwL4P) {
            if (this.GL1x()) {
                n1x.Z1x.J1x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n1x.Z1x.J1x({
                    tip: "分享成功" + (m1x.point > 0 ? ' 获得<em class="s-fc6">' + m1x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h1x.z1x(n1x.oB6v, "sharesuccess", {
            isPrivate: u1x,
            rid: this.jI4M,
            rtype: this.ev3x,
            data: m1x.event
        });
        this.z1x("onshare")
    }
    ;
    b0x.iY4c = function(m1x) {
        this.cP2x(!1);
        var bG1x = "分享失败";
        if (m1x.code) {
            switch (m1x.code) {
            case 404:
                bG1x = "分享的资源不存在";
                break;
            case 407:
                bG1x = "输入内容包含有关键字";
                break;
            case 408:
                bG1x = "分享太快了，过会再分享吧";
                break;
            case 315:
                bG1x = m1x.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l1x.fs3x({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.cb1x(bG1x)
    }
    ;
    b0x.mj5o = function() {
        this.oN6H = gt3x.ve8W(this.ey3x)
    }
    ;
    b0x.cb1x = function(bG1x) {
        this.dY3x(this.el3x, bG1x)
    }
    ;
    b0x.cP2x = function(db2x) {
        return this.dW2x(this.Cg0x, db2x, "分享", "分享中...")
    }
    ;
    b0x.We7X = function(ia4e) {
        return csL6F[ia4e] || ""
    }
    ;
    b0x.csn6h = function() {
        var er3x, uV8N = this.We7X(this.ev3x);
        this.pD6x.style.display = "";
        if (this.jI4M < 0) {
            this.pD6x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.RS6M) {
                this.pD6x.style.display = "none";
                return
            }
            var Wp7i = this.CC0x && this.ev3x != 24;
            er3x = (WA7t[uV8N] ? WA7t[uV8N] + "：" : "") + this.RS6M + (bRw0x[uV8N] || " ") + (uV8N == "mv" || uV8N == "album" ? this.bwO4S || this.Sf6Z : this.Sf6Z);
            a9j.dz2x(this.pD6x, "m-xwgt-share-infobar", {
                canChange: Wp7i,
                info: er3x
            });
            if (Wp7i) {
                a9j.x1x(this.pD6x, "z-dis")
            } else {
                a9j.y1x(this.pD6x, "z-dis")
            }
        }
        a9j.x1x(this.pD6x, "info-video")
    }
    ;
    b0x.csr6l = function() {
        var uV8N = this.We7X(this.ev3x)
          , er3x = (WA7t[uV8N] ? WA7t[uV8N] + "：" : "") + this.RS6M + (bRw0x[uV8N] || " ") + (uV8N == "mv" || uV8N == "album" ? this.bwO4S || this.Sf6Z : this.Sf6Z);
        Wp7i = this.CC0x && this.ev3x != 24;
        if (this.GL1x()) {} else {
            a9j.x1x(this.pD6x, "info-video");
            a9j.dz2x(this.pD6x, "m-xwgt-share-infobar", {
                canChange: Wp7i,
                isPub: this.CC0x,
                info: er3x
            })
        }
    }
    ;
    b0x.csm6g = function() {
        var IB2x = this.ey3x.value;
        if (this.CC0x) {
            if (!!this.bwg4k) {
                return !!IB2x && !!IB2x.length || !!this.oJ6D && this.oJ6D.NY4c().length > 0
            } else {
                return !(this.jI4M < 0) || !!IB2x && !!IB2x.length || !!this.oJ6D && this.oJ6D.NY4c().length > 0
            }
        } else {
            return !!IB2x && !!IB2x.length || !!this.oJ6D && this.oJ6D.NY4c().length > 0
        }
    }
    ;
    b0x.bfm0x = function() {
        var bUN1x = false;
        if (!this.CC0x || this.Ue6Y.pubEventWithoutResource || !(this.jI4M < 0)) {
            bUN1x = true
        }
        if (bUN1x) {
            a9j.x1x(this.Cg0x, "u-btn2-2-dis")
        } else {
            a9j.y1x(this.Cg0x, "u-btn2-2-dis")
        }
    }
    ;
    b0x.bSS0x = function(bvx4B) {
        if (bvx4B) {
            a9j.y1x(this.Cg0x, "u-btn2-2-dis")
        } else {
            this.bfm0x()
        }
    }
    ;
    b0x.bRJ0x = function(d1x) {
        if (d1x) {
            d1x.stopped = true
        }
        if (this.csm6g()) {
            l1x.ho4s({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(U1x) {
                    if (U1x == "ok") {
                        this.z1x("forceclose", {});
                        this.bt1x();
                        h1x.z1x(n1x.oB6v, "shareclose", {})
                    }
                }
                .f1x(this)
            })
        } else {
            this.z1x("forceclose", {});
            this.bt1x();
            h1x.z1x(n1x.oB6v, "shareclose", {})
        }
    }
    ;
    b0x.Gn1x = function(eq3x, dV2x) {
        this.oH6B.CU0x(eq3x, dV2x)
    }
    ;
    b0x.WK7D = function(u1x) {
        this.gy3x.eU3x("page", {
            type: u1x
        })
    }
    ;
    b0x.GL1x = function() {
        return this.ev3x == 39
    }
    ;
    b0x.J1x = function() {
        var csl6f = function(p1x, r1x) {
            var cj1x = "u-slg-" + eb3x[r1x] + "-gray";
            !this.Yh7a[bwV4Z[r1x]] ? a9j.y1x(p1x, cj1x) : a9j.x1x(p1x, cj1x)
        };
        return function() {
            L1x.J1x.call(this);
            this.o1x.style.display = "";
            this.cb1x();
            this.cP2x(!1);
            this.CY0x.Nj3x(0);
            this.ey3x.focus();
            this.ey3x.value = this.csG6A || "";
            this.ey3x.placeholder = this.csF6z || "";
            if (!this.GL1x()) {
                this.csn6h()
            } else {
                a9j.y1x(this.pD6x, "info-video");
                a9j.dz2x(this.pD6x, "m-xwgt-share-videobar", {
                    title: this.RS6M,
                    picUrl: this.bwP4T
                })
            }
            this.gi3x();
            this.xs9j.ctJ7C();
            k1x.bd1x(this.baE8w, csl6f, this);
            this.mj5o();
            if (this.CC0x) {
                this.qB7u.style.display = "none"
            } else {
                this.qB7u.style.display = ""
            }
            this.bfm0x()
        }
    }();
    b0x.bt1x = function(d1x) {
        L1x.bt1x.call(this);
        !!this.hn4r && this.hn4r.bt1x();
        if (this.xs9j) {
            this.xs9j.T1x();
            delete this.xs9j
        }
        if (this.hw4A) {
            this.hw4A.T1x();
            delete this.hw4A
        }
        if (this.oJ6D) {
            this.oJ6D.T1x();
            delete this.oJ6D
        }
        if (this.bVa1x) {
            this.bVa1x = this.bVa1x.T1x()
        }
        if (this.mT5Y) {
            this.mT5Y.T1x();
            delete this.mT5Y
        }
    }
    ;
    l1x.kI5N = function(e1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e1x.title === undefined) {
            e1x.title = "分享"
        }
        if (e1x.actId && e1x.type != 39) {
            var u1x = csH6B[e1x.resourceType], bV1x = e1x.resourceJson, id4h;
            if (k1x.fG3x(bV1x)) {
                try {
                    bV1x = JSON.parse(bV1x)
                } catch (e) {}
            }
            if (u1x) {
                id4h = l1x.bLR8J(u1x, bV1x);
                e1x.name = id4h.title;
                e1x.author = id4h.author;
                e1x.picUrl = id4h.picUrl;
                e1x.type = u1x;
                e1x.rid = (bV1x || []).id
            }
        }
        n1x.oB6v.J1x(e1x)
    }
    ;
    I1x.fI3x.A1x({
        element: n1x.oB6v,
        event: ["sharesuccess", "shareclose"]
    })
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h1x = c0x("nej.v"), a9j = c0x("nej.e"), v1x = c0x("nej.j"), n1x = c0x("nm.l"), w1x = c0x("nm.w"), bD1x = c0x("nej.ui"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), b0x, L1x;
    n1x.WV7O = NEJ.C();
    b0x = n1x.WV7O.N1x(n1x.ep3x);
    L1x = n1x.WV7O.cs1x;
    b0x.cx1x = function() {
        this.cE2x()
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        var i1x = a9j.H1x(this.o1x, "j-flag");
        h1x.s1x(i1x[0], "click", this.FH1x.f1x(this))
    }
    ;
    b0x.ch1x = function() {
        this.cg1x = "m-import-ok"
    }
    ;
    b0x.bl1x = function(e1x) {
        e1x.parent = e1x.parent || document.body;
        e1x.title = "歌曲同步完成";
        this.bn1x(e1x)
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.FH1x = function(d1x) {
        this.bt1x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
    ;
    b0x.Du0x = function() {
        this.bt1x()
    }
    ;
    b0x.bSL0x = function(d1x) {
        if (d1x.keyCode == 13)
            this.Hm2x()
    }
}
)();
(function() {
    var c0x = NEJ.P, bb1x = NEJ.O, h1x = c0x("nej.v"), a9j = c0x("nej.e"), v1x = c0x("nej.j"), O1x = c0x("nej.p"), k1x = c0x("nej.u"), n1x = c0x("nm.l"), w1x = c0x("nm.w"), bD1x = c0x("nej.ui"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), b0x, L1x;
    n1x.bVh1x = NEJ.C();
    b0x = n1x.bVh1x.N1x(n1x.ep3x);
    b0x.ch1x = function() {
        this.cg1x = "m-programtips-layer"
    }
    ;
    b0x.bW1x = function() {
        this.ci1x();
        this.bU1x = a9j.H1x(this.o1x, "j-flag")
    }
    ;
    b0x.bl1x = function(e1x) {
        if (e1x.inner) {
            var innerNode = a9j.H1x(this.o1x, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e1x.inner
            }
        }
        e1x.clazz = " m-layer-programtips " + (e1x.clazz || "");
        e1x.parent = e1x.parent || document.body;
        e1x.title = e1x.title || "付费内容提示";
        e1x.draggable = !0;
        e1x.destroyalbe = !0;
        e1x.mask = true;
        this.bn1x(e1x);
        this.gS3x = e1x.id;
        this.csk6e = e1x.radiotype;
        this.kJ5O = location.protocol + "//" + (this.bvq4u() || "music.163.com") + "/m/" + this.csk6e + "?id=" + this.gS3x;
        this.kJ5O = e1x.url || this.kJ5O;
        this.csj6d()
    }
    ;
    b0x.bC1x = function() {
        this.bF1x()
    }
    ;
    b0x.Du0x = function() {
        this.bt1x()
    }
    ;
    b0x.FH1x = function(d1x) {
        this.z1x("onok", D1x);
        this.bt1x()
    }
    ;
    l1x.bvo4s = function(e1x) {
        n1x.bVh1x.A1x(e1x).J1x()
    }
    ;
    b0x.csj6d = function() {
        v1x.bm1x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k1x.cF2x({
                url: this.kJ5O,
                size: 180
            }),
            onload: function(j1x) {
                if (j1x.code == 200) {
                    this.csd6X(j1x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
            .f1x(this)
        })
    }
    ;
    b0x.bvq4u = function() {
        var Qn5s = location.host;
        if (Qn5s.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
    ;
    b0x.csd6X = function(ka4e) {
        this.bU1x[0].style.backgroundImage = "url(" + ka4e + ")"
    }
}
)();
(function() {
    var c0x = NEJ.P, a9j = c0x("nej.e"), dy2x = c0x("nej.p"), h1x = c0x("nej.v"), k1x = c0x("nej.u"), I1x = c0x("nej.ut"), v1x = c0x("nej.j"), q1x = c0x("nm.d"), l1x = c0x("nm.x"), E1x = c0x("nm.m"), n1x = c0x("nm.l"), M1x = c0x("nm.m.f"), b0x, L1x;
    E1x.dg2x = NEJ.C();
    b0x = E1x.dg2x.N1x(I1x.du2x);
    b0x.bL1x = function() {
        var qX7Q = !1;
        return function() {
            if (qX7Q)
                return;
            qX7Q = !0;
            this.bQ1x();
            if (top == self) {
                return
            }
            this.tS8K = a9j.B1x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bVx1x()
            }
            I1x.fI3x.A1x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX1x([[window, "scroll", this.BP0x.f1x(this)], [document, "keyup", this.csa6U.f1x(this)], [document.body, "click", this.sV7O.f1x(this)], [document, "mouseup", this.crZ6T.f1x(this)], [this.tS8K, "click", this.Ns3x.f1x(this)], [q1x.te7X, "message", this.uC8u.f1x(this)]]);
            l1x.cwz7s(document.body);
            this.BP0x();
            if (this.BO0x !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                q1x.te7X.gg3x().uR8J();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dy2x.dt2x.browser == "ie" && parseInt(dy2x.dt2x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hj4n = top.player.getPlaying();
                    if (hj4n && hj4n.track && hj4n.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hj4n.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.Ai9Z.f1x(this);
            this.kh4l = q1x.hS4W.A1x();
            window.log = this.hh4l.f1x(this);
            var sZ7S = location.search;
            if (sZ7S) {
                var bv1x = sZ7S.substr(sZ7S.indexOf("?") + 1)
                  , gv3x = k1x.hq4u(bv1x);
                if (gv3x && gv3x["_hash"])
                    location.hash = gv3x["_hash"]
            }
        }
    }();
    b0x.csa6U = function(d1x) {
        var g1x = h1x.W1x(d1x);
        try {
            if (d1x.keyCode == 80 && l1x.bHE7x() || ["textarea", "input"].indexOf(g1x.tagName.toLowerCase()) >= 0)
                return;
            h1x.z1x(top.document, "keyup", {
                ctrlKey: d1x.ctrlKey,
                keyCode: d1x.keyCode
            })
        } catch (e) {}
    }
    ;
    b0x.sV7O = function(d1x) {
        var g1x = h1x.W1x(d1x);
        if (g1x && g1x.tagName == "INPUT")
            return;
        var g1x = h1x.W1x(d1x, "d:pid");
        if (g1x) {
            h1x.cn1x(d1x);
            var pQ6K = a9j.t1x(g1x, "pid")
              , BH0x = a9j.t1x(g1x, "ptype")
              , U1x = a9j.t1x(g1x, "action") || "play";
            switch (U1x) {
            case "subscribe":
                l1x.mP5U({
                    tracks: [pQ6K]
                });
                break
            }
        }
        g1x = h1x.W1x(d1x, "d:resAction");
        if (g1x && g1x.className.indexOf("-dis") == -1) {
            var cW2x = a9j.t1x(g1x, "resId")
              , u1x = a9j.t1x(g1x, "resType")
              , bvj4n = a9j.t1x(g1x, "resRadiotype")
              , bvi4m = a9j.t1x(g1x, "resRadioid")
              , ee3x = a9j.t1x(g1x, "resFrom")
              , j1x = a9j.t1x(g1x, "resData")
              , U1x = a9j.t1x(g1x, "resAction")
              , bxG4K = a9j.t1x(g1x, "resCopyright")
              , Yu7n = a9j.t1x(g1x, "resAuditstatus");
            if (U1x != "log" && U1x != "bilog")
                h1x.cn1x(d1x);
            switch (U1x) {
            case "log":
                j1x = (j1x || "").split("|");
                if (!!j1x[0]) {
                    var bh1x = {
                        id: cW2x,
                        alg: j1x[2] || "itembased",
                        scene: j1x[3],
                        position: j1x[1] || 0
                    };
                    if (!!j1x[4])
                        bh1x.srcid = j1x[4];
                    window.log(j1x[0], bh1x)
                }
                break;
            case "bilog":
                var bpo2x = a9j.t1x(g1x, "logAction")
                  , bpt2x = a9j.t1x(g1x, "logJson");
                window.log(bpo2x, bpt2x);
                break;
            case "share":
                if (Yu7n && Yu7n == 1) {
                    l1x.iz4D("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cW2x, u1x, a9j.t1x(g1x, "resPic"), a9j.t1x(g1x, "resName"), a9j.t1x(g1x, "resAuthor"), a9j.t1x(g1x, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (u1x == 18) {
                    var qY7R = a9j.t1x(g1x, "resLevel")
                      , nL6F = a9j.t1x(g1x, "resFee");
                    if (qY7R == 10) {
                        l1x.vJ8B(nL6F, cW2x, "song");
                        break
                    }
                    l1x.mP5U({
                        tracks: [cW2x]
                    })
                }
                break;
            case "download":
                l1x.MQ3x({
                    id: cW2x,
                    type: u1x
                });
                break;
            case "programtips":
                if (Yu7n && Yu7n == 1) {
                    l1x.iz4D("由于版权问题，该节目暂时无法分享。")
                } else {
                    l1x.bvo4s({
                        id: bvi4m,
                        radiotype: bvj4n
                    })
                }
                break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d1x)
        } catch (e) {}
    }
    ;
    b0x.crZ6T = function(d1x) {
        try {
            h1x.z1x(top.document, "mouseup")
        } catch (e) {}
    }
    ;
    b0x.BP0x = function() {
        var crY6S = function() {
            var ce1x = window.innerHeight;
            if (!k1x.tc7V(ce1x))
                ce1x = (document.documentElement || document.body).clientHeight;
            return ce1x
        };
        return function(d1x) {
            if (!this.tS8K)
                return;
            var Yz7s = crY6S()
              , gc3x = document.documentElement.scrollTop || document.body.scrollTop;
            a9j.ba1x(this.tS8K, "display", gc3x > 0 ? "" : "none");
            if (dy2x.dt2x.browser == "ie" && dy2x.dt2x.version < "7.0") {
                var gA3x = Math.min(document.body.clientHeight, Yz7s + gc3x) - 204;
                a9j.ba1x(this.tS8K, "top", gA3x + "px")
            }
        }
    }();
    b0x.Ns3x = function(d1x) {
        h1x.cn1x(d1x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    ;
    b0x.Ai9Z = function() {
        var bvh4l = function(d1x) {
            h1x.z1x(window, "share", d1x)
        };
        return function(cW2x, u1x, yv9m, V1x, FK1x, FJ1x) {
            l1x.kI5N({
                rid: cW2x,
                type: u1x,
                purl: yv9m,
                name: V1x,
                author: FK1x,
                authors: FJ1x,
                onshare: bvh4l.f1x(this)
            })
        }
    }();
    b0x.hh4l = function(U1x, bh1x) {
        try {
            top.log(U1x, bh1x)
        } catch (e) {
            if (U1x.indexOf("new|") == 0) {
                return this.kh4l.eU3x(U1x.slice(4), bh1x)
            }
            switch (U1x) {
            case "play":
                this.kh4l.eo3x(bh1x);
                break;
            case "search":
                this.kh4l.bCV6P(bh1x);
                break;
            default:
                this.kh4l.eU3x(U1x, bh1x)
            }
        }
    }
    ;
    b0x.bVx1x = function() {
        var YZ8R, bvc4g = false, bs1x = [45, 60];
        var crX6R = function(bG1x) {
            if (bG1x.title != "MailBoxImport")
                return;
            var Q1x = JSON.parse(bG1x.content || "null") || bb1x;
            if (Q1x.status == 10) {
                n1x.WV7O.A1x().J1x();
                window.clearTimeout(YZ8R)
            }
        };
        var ob6V = function(d1x) {
            if (d1x.code == 200) {
                if (d1x.status == 1) {
                    h1x.s1x(q1x.AR0x, "message", crX6R.f1x(this));
                    q1x.AR0x.A1x().bpQ2x();
                    bvc4g = true
                } else {
                    if (bvc4g) {
                        if (d1x.status == 10) {
                            n1x.WV7O.A1x().J1x();
                            h1x.hc4g(q1x.AR0x, "message");
                            window.clearTimeout(YZ8R);
                            bvc4g = false
                        }
                    } else {
                        window.clearTimeout(YZ8R)
                    }
                }
            }
        };
        return function() {
            var tw7p = bs1x.shift() * 1e3;
            v1x.bm1x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: ob6V.f1x(this)
            });
            if (tw7p) {
                YZ8R = window.setTimeout(arguments.callee, tw7p)
            }
        }
    }();
    b0x.uC8u = function(d1x) {
        try {
            top.polling(d1x)
        } catch (e) {}
    }
}
)()
