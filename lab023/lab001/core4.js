(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (GF1x) {
        if (!GF1x || !GF1x.length) return null;
        var beE9v = window;
        for (var a = GF1x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; beE9v = beE9v[a[i]] = beE9v[a[i]] || {}, i++) ;
        return beE9v
    };
    NEJ.Q = function (bJ0x, GF1x) {
        bJ0x = bJ0x || NEJ.O;
        var bs0x = GF1x.split(".");
        for (var i = 0, l = bs0x.length; i < l; i++) {
            bJ0x = bJ0x[bs0x[i]];
            if (!bJ0x) break
        }
        return bJ0x
    };
    NEJ.C = function () {
        var byr4v = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var byB4F = function (D9u, bz0x) {
            for (var x in bz0x) if (D9u == bz0x[x]) return x;
            return null
        };
        var bjw0x = {cy0x: 0, bl0x: 1, bC0x: 2, bW0x: 3, bL0x: 4, fa2x: 5, ko3x: 6, eE1x: 7},
            ul7e = {cE0x: 0, bn0x: 1, bF0x: 2, ci0x: 3, bQ0x: 4, gG2x: 5, lj3x: 6, ge2x: 7};
        return function () {
            var fM2x = function () {
                this.bze4i();
                return this.cy0x.apply(this, arguments)
            };
            fM2x.prototype.bze4i = NEJ.F;
            fM2x.prototype.cy0x = NEJ.F;
            fM2x.N9E = function (Dy0x, bAd4h) {
                if (byr4v(Dy0x)) return;
                if (bAd4h == null || !!bAd4h) NEJ.X(this, Dy0x, byr4v);
                this.czi8a = Dy0x;
                this.cs0x = Dy0x.prototype;
                var bH0x = function () {
                };
                bH0x.prototype = Dy0x.prototype;
                this.prototype = new bH0x;
                var HM1x = this.prototype;
                HM1x.constructor = this;
                var ck0x;
                for (var x in bjw0x) {
                    ck0x = byB4F(bjw0x[x], ul7e);
                    if (!ck0x || !this.cs0x[x]) continue;
                    HM1x[x] = function (V0x) {
                        return function () {
                            this[V0x].apply(this, arguments)
                        }
                    }(ck0x)
                }
                var GJ1x = {};
                for (var x in ul7e) {
                    ck0x = byB4F(ul7e[x], bjw0x);
                    if (!ck0x || !this.cs0x[ck0x]) continue;
                    GJ1x[ck0x] = Dy0x;
                    HM1x[x] = function (V0x) {
                        return function () {
                            var m9d, bH0x = this.bfJ9A[V0x], bfl9c = bH0x.prototype[V0x];
                            this.bfJ9A[V0x] = bH0x.czi8a || Dy0x;
                            if (!!bfl9c) m9d = bfl9c.apply(this, arguments);
                            this.bfJ9A[V0x] = Dy0x;
                            return m9d
                        }
                    }(ck0x)
                }
                HM1x.bze4i = function () {
                    this.bfJ9A = NEJ.X({}, GJ1x)
                };
                HM1x.cJN1x = HM1x.cE0x;
                return HM1x
            };
            return fM2x
        }
    }();
    NEJ.X = function (go2x, bR0x, dZ1x) {
        if (!go2x || !bR0x) return go2x;
        dZ1x = dZ1x || NEJ.F;
        for (var x in bR0x) {
            if (bR0x.hasOwnProperty(x) && !dZ1x(bR0x[x], x)) go2x[x] = bR0x[x]
        }
        return go2x
    };
    NEJ.EX = function (go2x, bR0x) {
        if (!go2x || !bR0x) return go2x;
        for (var x in go2x) {
            if (go2x.hasOwnProperty(x) && bR0x[x] != null) go2x[x] = bR0x[x]
        }
        return go2x
    };
    var Im1x = Function.prototype;
    Im1x.eG1x = function (lL4P, xi8a) {
        var f = NEJ.F, xi8a = xi8a || f, lL4P = lL4P || f, dy1x = this;
        return function () {
            var d9g = {args: NEJ.R.slice.call(arguments, 0)};
            lL4P(d9g);
            if (!d9g.stopped) {
                d9g.value = dy1x.apply(this, d9g.args);
                xi8a(d9g)
            }
            return d9g.value
        }
    };
    Im1x.f9e = function () {
        var bf0x = arguments, go2x = arguments[0], bqs2x = this;
        return function () {
            var td6X = NEJ.R.slice.call(bf0x, 1);
            NEJ.R.push.apply(td6X, arguments);
            return bqs2x.apply(go2x || window, td6X)
        }
    };
    Im1x.ev1x = function () {
        var bf0x = arguments, go2x = NEJ.R.shift.call(bf0x), bqs2x = this;
        return function () {
            NEJ.R.push.apply(arguments, bf0x);
            return bqs2x.apply(go2x || window, arguments)
        }
    };
    var Im1x = String.prototype;
    if (!Im1x.trim) {
        Im1x.trim = function () {
            var df1x = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(df1x, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, O9F = c9h("nej.p"), wg7Z = window.navigator.platform,
        wf7Y = window.navigator.userAgent;
    var lo4s = {mac: wg7Z, win: wg7Z, linux: wg7Z, ipad: wf7Y, ipod: wf7Y, iphone: wg7Z, android: wf7Y};
    O9F.In1x = lo4s;
    for (var x in lo4s) lo4s[x] = (new RegExp(x, "i")).test(lo4s[x]);
    lo4s.ios = lo4s.ipad || lo4s.iphone || lo4s.ipod;
    lo4s.tablet = lo4s.ipad;
    lo4s.desktop = lo4s.mac || lo4s.win || lo4s.linux && !lo4s.android;
    var iD3x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    O9F.dt1x = iD3x;
    if (/msie\s+(.*?);/i.test(wf7Y) || /trident\/.+rv:([\d\.]+)/i.test(wf7Y)) {
        iD3x.engine = "trident";
        iD3x.browser = "ie";
        iD3x.version = RegExp.$1;
        iD3x.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var mr4v = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        iD3x.release = mr4v[document.documentMode] || mr4v[parseInt(iD3x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(wf7Y)) {
        iD3x.engine = "webkit";
        iD3x.release = RegExp.$1 || "";
        iD3x.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(wf7Y)) {
        iD3x.engine = "gecko";
        iD3x.release = RegExp.$1 || "";
        iD3x.browser = "firefox";
        iD3x.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(wf7Y)) iD3x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(wf7Y)) {
        iD3x.engine = "presto";
        iD3x.release = RegExp.$1 || "";
        iD3x.browser = "opera";
        iD3x.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(wf7Y)) iD3x.version = RegExp.$1 || ""
    }
    if (iD3x.browser == "unknow") {
        var mr4v = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mr4v.length, V0x; i < l; i++) {
            V0x = mr4v[i] == "safari" ? "version" : mr4v[i];
            if ((new RegExp(V0x + "/(.*?)(?=\\s|$)", "i")).test(wf7Y)) {
                iD3x.browser = mr4v[i];
                iD3x.version = RegExp.$1.trim();
                break
            }
        }
    }
    O9F.bAX5c = {};
    var bfh9Y = iD3x.engine != "trident";
    O9F.na4e = {
        gecko: iD3x.engine != "gecko",
        webkit: iD3x.engine != "webkit",
        presto: iD3x.engine != "presto",
        trident0: bfh9Y || iD3x.release > "2.0",
        trident1: bfh9Y || iD3x.release < "6.0",
        trident2: bfh9Y || iD3x.release > "3.0",
        trident: bfh9Y || iD3x.release >= "6.0"
    }
})();
(function () {
    var iw3x = NEJ.P("nej.c"), R9I = {};
    var bhL0x = function () {
        var df1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (X0x) {
            X0x = X0x || "";
            if (df1x.test(X0x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Qu4y = function () {
        var bBb5g = function (i9b, bz0x) {
            if (!i9b || !i9b.length) return;
            for (var i = 0, l = i9b.length, jY3x; i < l; i++) {
                jY3x = i9b[i];
                if (jY3x.indexOf("://") > 0) bz0x[bhL0x(jY3x)] = jY3x
            }
        };
        var bg0x = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bR0x) {
            iw3x.Ip1x("root", bR0x.root || "/res/");
            var brG2x, ga2x = iw3x.B9s("root");
            for (var x in bg0x) {
                brG2x = bg0x[x];
                iw3x.Ip1x(x, bR0x[brG2x.name] || ga2x + brG2x.dft)
            }
            var Di0x = bR0x.p_csrf;
            if (Di0x == !0) {
                Di0x = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            iw3x.Ip1x("csrf", NEJ.EX({cookie: "", param: ""}, Di0x));
            R9I.frames = {};
            bBb5g(bR0x.p_frame, R9I.frames);
            R9I.flashs = {};
            bBb5g(bR0x.p_flash, R9I.flashs)
        }
    }();
    iw3x.Ip1x = function (K9B, D9u) {
        R9I[K9B] = D9u
    };
    iw3x.B9s = function (K9B) {
        return R9I[K9B]
    };
    iw3x.cjy4C = function (X0x) {
        var tq6k = bhL0x(X0x);
        return R9I.frames[tq6k] || tq6k + "/res/nej_proxy_frame.html"
    };
    iw3x.cti7b = function (X0x) {
        return R9I.flashs[bhL0x(X0x)]
    };
    Qu4y(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p"), iw3x = c9h("nej.c"), bR0x = window.NEJ_CONF || NEJ.O;
    if (O9F.na4e.trident) return;
    iw3x.Ip1x("storage.swf", bR0x.storage || iw3x.B9s("root") + "nej_storage.swf");
    if (O9F.dt1x.release < "4.0") {
        iw3x.Ip1x("blank.png", bR0x.blank || iw3x.B9s("root") + "nej_blank.gif")
    }
    var i9b = bR0x.xdr, gF2x = /^(https?:\/\/.*?)(?=\/|$)/i, kp3x = /[\/?=&]/i;
    var bCe5j = function (X0x) {
        return (gF2x.test(X0x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i9b && !!i9b.length) for (var i = i9b.length - 1, X0x, K9B; i >= 0; i--) {
        X0x = i9b[i];
        K9B = bCe5j(X0x);
        if (!!K9B) iw3x.Ip1x(K9B, X0x)
    }
    iw3x.cJz1x = function (X0x) {
        var K9B = bCe5j(X0x);
        if (!K9B) {
            if (kp3x.test(X0x)) {
                K9B = location.protocol + "//" + location.host
            } else if (X0x.indexOf("://") < 0) {
                K9B = location.protocol + "//" + X0x
            } else {
                K9B = X0x
            }
        }
        return iw3x.B9s(K9B) || K9B + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c9h = NEJ.P, iw3x = c9h("nej.c"), O9F = c9h("nej.g"), gK2x = +(new Date);
    O9F.cJv1x = 1e4 - gK2x;
    O9F.bwY4c = 10001 - gK2x;
    O9F.cJu1x = 10002 - gK2x;
    O9F.bCJ5O = 10003 - gK2x;
    O9F.bYt2x = 10004 - gK2x;
    O9F.cJo1x = 10005 - gK2x;
    O9F.biR0x = 10006 - gK2x;
    O9F.ceZ3x = 10007 - gK2x;
    O9F.zU9L = "Content-Type";
    O9F.cJj0x = "text/plain";
    O9F.GS1x = "multipart/form-data";
    O9F.ciz4D = "application/x-www-form-urlencoded";
    O9F.bmn1x = iw3x.B9s("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c9h = NEJ.P, fz2x = NEJ.R, O9F = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        be0x = c9h("nej.h");
    var kt3x = O9F.dt1x.prefix, bEM6G = O9F.bAX5c,
        cme5j = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, cmA5F = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, OZ4d = {
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
    var Qu4y = function () {
        var tD6x = be0x.bFM6G();
        bEM6G.css3d = !!tD6x && tD6x.m41 != null;
        var df1x = /-([a-z])/g;
        for (var x in OZ4d) {
            OZ4d[bGR6L(x)] = OZ4d[x]
        }
    };
    var bGR6L = function () {
        var df1x = /-([a-z])/g;
        return function (V0x) {
            V0x = V0x || "";
            return V0x.replace(df1x, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bHD6x = function (V0x) {
        return (!bEM6G.css3d ? cme5j : cmA5F)[V0x]
    };
    var bHF6z = function () {
        var df1x = /\s+/;
        return function (fM2x) {
            fM2x = (fM2x || "").trim();
            return !!fM2x ? fM2x.split(df1x) : null
        }
    }();
    var beL9C = function (F9w, u9l, fM2x) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return;
        k9b.bd0x(bHF6z(fM2x), function (eb1x) {
            F9w.classList[u9l](eb1x)
        })
    };
    be0x.Ix1x = function (i9b) {
        return fz2x.slice.call(i9b, 0)
    };
    be0x.bke0x = function (F9w) {
        return be0x.Ix1x(F9w.children)
    };
    be0x.bkf0x = function (F9w, fM2x) {
        return be0x.Ix1x(F9w.getElementsByClassName(fM2x))
    };
    be0x.bkk0x = function (F9w, Iy1x) {
        beL9C(F9w, "add", Iy1x)
    };
    be0x.blP1x = function (F9w, Iz1x) {
        beL9C(F9w, "remove", Iz1x)
    };
    be0x.Rb5g = function (F9w, Iz1x, Iy1x) {
        beL9C(F9w, "remove", Iz1x);
        beL9C(F9w, "add", Iy1x)
    };
    be0x.boW2x = function (F9w, fM2x) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return !1;
        var i9b = F9w.classList;
        if (!i9b || !i9b.length) return !1;
        return k9b.dj1x(bHF6z(fM2x), function (eb1x) {
            return i9b.contains(eb1x)
        }) >= 0
    };
    be0x.bpK2x = function (F9w, eb1x) {
    };
    be0x.bpW2x = function (F9w) {
    };
    be0x.bqc2x = function (gk2x, ot5y) {
        gk2x.selectionEnd = ot5y.end || 0;
        gk2x.selectionStart = ot5y.start || 0;
        gk2x.focus()
    };
    be0x.brY2x = function (gk2x) {
        return {end: gk2x.selectionEnd, start: gk2x.selectionStart}
    };
    be0x.btx3x = function () {
        var Fb0x = function (eb1x, d9g) {
            var F9w = h9c.W0x(d9g);
            if (!F9w.value) a8i.x9o(F9w, eb1x)
        };
        var IC1x = function (eb1x, d9g) {
            a8i.y9p(h9c.W0x(d9g), eb1x)
        };
        return function (F9w, fe2x, eb1x) {
            if (fe2x == 1) {
                h9c.s9j(F9w, "blur", Fb0x.f9e(null, eb1x))
            }
            if (fe2x == 1 || fe2x == -1) {
                h9c.s9j(F9w, "focus", IC1x.f9e(null, eb1x))
            }
        }
    }();
    be0x.bfQ9H = function (G9x) {
        return (new XMLSerializer).serializeToString(G9x) || ""
    };
    be0x.bgm9d = function (CT9K) {
        var ga2x = (new DOMParser).parseFromString(CT9K, "text/xml").documentElement;
        return ga2x.nodeName == "parsererror" ? null : ga2x
    };
    be0x.bgW0x = function (F9w) {
    };
    be0x.nR4V = function (F9w) {
        return null
    };
    be0x.bhZ0x = function (F9w) {
        return null
    };
    be0x.bic0x = function (dR1x) {
    };
    be0x.biq0x = function () {
        var bf0x = be0x.Ix1x(arguments);
        bf0x[0] = a8i.B9s(bf0x[0]);
        if (!bf0x[0]) return null;
        bf0x[1] = (bf0x[1] || "").toLowerCase();
        if (!bf0x[1]) return null;
        return bf0x
    };
    be0x.CS9J = function () {
        var xo8g = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, ji3x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cCg9X = function (u9l) {
            return (kt3x.evt || kt3x.pro) + u9l
        };
        return function () {
            var bf0x = be0x.biq0x.apply(be0x, arguments);
            if (!bf0x) return;
            var beB9s = ji3x[bf0x[1]], beA9r = xo8g[bf0x[1]];
            if (!!beB9s) {
                bf0x[4] = bf0x[1];
                bf0x[1] = cCg9X(beB9s)
            } else if (!!beA9r) {
                var V0x = "on" + bf0x[1];
                if (!(V0x in bf0x[0])) {
                    bf0x[4] = bf0x[1];
                    bf0x[1] = beA9r
                }
            }
            return bf0x
        }
    }();
    be0x.bjT0x = function () {
        var bf0x = arguments;
        bf0x[0].addEventListener(bf0x[1], bf0x[2], !!bf0x[3])
    };
    be0x.bey9p = function () {
        var bf0x = arguments;
        bf0x[0].removeEventListener(bf0x[1], bf0x[2], !!bf0x[3])
    };
    be0x.bka0x = function (F9w, u9l, e9f) {
        var d9g = document.createEvent("Event");
        d9g.initEvent(u9l, !0, !0);
        NEJ.X(d9g, e9f);
        F9w.dispatchEvent(d9g)
    };
    be0x.bFM6G = function () {
        var gF2x = /\((.*?)\)/, kp3x = /\s*,\s*/, i9b = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bex9o = function (tD6x) {
            var in3x = {};
            if (gF2x.test(tD6x || "")) {
                k9b.bd0x(RegExp.$1.split(kp3x), function (D9u, r9i) {
                    in3x[i9b[r9i]] = D9u || ""
                })
            }
            return in3x
        };
        return function (tD6x) {
            if (!!window.CSSMatrix) return new CSSMatrix(tD6x);
            var V0x = kt3x.clz + "CSSMatrix";
            if (!!window[V0x]) return new window[V0x](tD6x || "");
            return bex9o(tD6x)
        }
    }();
    be0x.bHH6B = function () {
        var df1x = /\{(.*?)\}/g;
        return function (V0x, bz0x) {
            bz0x = bz0x || o;
            var oQ5V = bHD6x(V0x);
            return !oQ5V ? "" : oQ5V.replace(df1x, function ($1, $2) {
                var bs0x = $2.split("|");
                return bz0x[bs0x[0]] || bs0x[1] || "0"
            })
        }
    }();
    be0x.bmq1x = function (F9w, V0x, D9u) {
        F9w.style[be0x.bHI6C(V0x)] = D9u
    };
    be0x.bHI6C = function () {
        var df1x = /^[a-z]/, bmG1x = kt3x.css;
        var cCl9c = function (V0x) {
            return V0x.replace(df1x, function ($1) {
                return bmG1x + $1.toUpperCase()
            })
        };
        return function (V0x) {
            V0x = bGR6L(V0x);
            var cCo9f = be0x.cCs9j(V0x, OZ4d);
            return cCo9f ? cCl9c(V0x) : V0x
        }
    }();
    be0x.cCs9j = function () {
        var df1x = /^([a-z]+?)[A-Z]/;
        return function (V0x, bz0x) {
            if (!bz0x[V0x]) {
                if (df1x.test(V0x)) V0x = RegExp.$1
            }
            return !!bz0x[V0x]
        }
    }();
    be0x.cDg9X = function () {
        var df1x = /\$<(.*?)>/gi, bmG1x = "-" + kt3x.css.toLowerCase() + "-";
        return function (kf3x) {
            return kf3x.replace(df1x, function ($1, $2) {
                var fu2x = $2, bs0x = fu2x.split("|"), oQ5V = bHD6x(bs0x[0]);
                if (!!oQ5V) {
                    return be0x.bHH6B(bs0x[0], k9b.ht2x(bs0x[1]))
                }
                return !be0x.cDD9u(fu2x, OZ4d) ? fu2x : bmG1x + fu2x
            })
        }
    }();
    be0x.cDD9u = function (V0x, bz0x) {
        return !!bz0x[V0x]
    };
    be0x.bqi2x = function (cj0x, kf3x) {
        cj0x.textContent = kf3x
    };
    be0x.brB2x = function (cj0x, kf3x) {
        var zp8h = cj0x.sheet, bq0x = zp8h.cssRules.length;
        zp8h.insertRule(kf3x, bq0x);
        return zp8h.cssRules[bq0x]
    };
    be0x.cIg0x = function (F9w, e9f) {
    };
    be0x.bet9k = function (bes9j) {
        return (bes9j || "").toLowerCase() != "transparent"
    };
    be0x.bWs1x = function (F9w) {
    };
    be0x.bwq4u = function (F9w, V0x) {
        if (!!F9w.getAttribute) return F9w.getAttribute(V0x);
        return ""
    };
    be0x.beo9f = function (eP2x) {
        a8i.cM0x(eP2x)
    };
    Qu4y()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), O9F = c9h("nej.p"), be0x = c9h("nej.h");
    if (O9F.na4e.trident0) return;
    var gK2x = +(new Date);
    R9I = {};
    be0x.bpK2x = be0x.bpK2x.eG1x(function (d9g) {
        d9g.stopped = !0;
        var bf0x = d9g.args, C9t = a8i.lD4H(bf0x[0]), K9B = "hover-" + C9t;
        if (!C9t || !!R9I[K9B]) return;
        R9I[K9B] = !0;
        h9c.s9j(C9t, "mouseenter", a8i.y9p.f9e(a8i, C9t, bf0x[1]));
        h9c.s9j(C9t, "mouseleave", a8i.x9o.f9e(a8i, C9t, bf0x[1]))
    });
    be0x.bpW2x = function () {
        var cIe0x = function () {
        };
        return be0x.bpW2x.eG1x(function (d9g) {
            d9g.stopped = !0;
            var F9w = d9g.args[0], C9t = "fixed-" + a8i.lD4H(F9w);
            if (!!R9I[C9t]) return;
            var bg0x = {};
            R9I[C9t] = bg0x
        })
    }();
    be0x.bgW0x = be0x.bgW0x.eG1x(function (d9g) {
        d9g.stopped = !0;
        var F9w = d9g.args[0], cj0x = F9w.style, bIi6c = a8i.ox5C();
        cj0x.width = bIi6c.scrollWidth + "px";
        cj0x.height = bIi6c.scrollHeight + "px"
    });
    be0x.nR4V = be0x.nR4V.eG1x(function (d9g) {
        d9g.stopped = !0;
        var F9w = d9g.args[0], lh3x = R9I[F9w.msk];
        if (!lh3x) {
            F9w.msk = gK2x++;
            lh3x = a8i.di1x("iframe");
            lh3x.style.position = "absolute";
            R9I[F9w.msk] = lh3x
        }
        d9g.value = lh3x;
        var cj0x = lh3x.style;
        cj0x.top = (parseInt(a8i.dh1x(F9w, "top")) || 0) + "px";
        cj0x.left = (parseInt(a8i.dh1x(F9w, "left")) || 0) + "px";
        cj0x.width = F9w.offsetWidth + "px";
        cj0x.height = F9w.offsetHeight + "px";
        F9w.insertAdjacentElement("beforeBegin", lh3x)
    });
    be0x.bhZ0x = be0x.bhZ0x.eG1x(function (d9g) {
        d9g.stopped = !0;
        var lh3x = R9I[d9g.args[0].msk];
        if (!!lh3x) a8i.mB4F(lh3x)
    })
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p"), a8i = c9h("nej.e"), be0x = c9h("nej.h");
    if (O9F.na4e.trident1) return;
    be0x.CS9J = function () {
        var xo8g = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be0x.CS9J.eG1x(function (d9g) {
            var bf0x = be0x.biq0x.apply(be0x, d9g.args);
            if (!bf0x) {
                d9g.stopped = !0;
                return
            }
            var u9l = xo8g[bf0x[1]];
            if (!!u9l && ("on" + u9l).toLowerCase() in bf0x[0]) {
                bf0x[4] = bf0x[1];
                bf0x[1] = u9l;
                d9g.stopped = !0;
                d9g.value = bf0x
            }
        })
    }();
    be0x.bet9k = function (bes9j) {
        return !0
    };
    be0x.beo9f = be0x.beo9f.eG1x(function (d9g) {
        d9g.stopped = !0;
        var eP2x = d9g.args[0];
        a8i.ba0x(eP2x, "display", "none");
        try {
            eP2x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, O9F = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        be0x = c9h("nej.h"), bhI0x = {};
    if (O9F.na4e.trident) return;
    be0x.Ix1x = be0x.Ix1x.eG1x(function (d9g) {
        d9g.stopped = !0;
        var i9b = d9g.args[0];
        if (!i9b) {
            d9g.value = null;
            return
        }
        var r9i = 0, m9d = [];
        while (!!i9b[r9i]) {
            m9d.push(i9b[r9i++])
        }
        d9g.value = m9d
    });
    be0x.bke0x = be0x.bke0x.eG1x(function (d9g) {
        d9g.stopped = !0;
        var bs0x = [];
        k9b.bd0x(d9g.args[0].childNodes, function (g9d) {
            if (g9d.nodeType == 1) bs0x.push(g9d)
        });
        d9g.value = bs0x
    });
    be0x.bkf0x = be0x.bkf0x.eG1x(function (d9g) {
        var F9w = d9g.args[0];
        if (!!F9w.getElementsByClassName) return;
        d9g.stopped = !0;
        var m9d = [], UE6y = new RegExp("(\\s|^)(?:" + d9g.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k9b.bd0x(F9w.getElementsByTagName("*"), function (g9d) {
            if (UE6y.test(g9d.className)) m9d.push(g9d)
        });
        d9g.value = m9d
    });
    be0x.bqc2x = be0x.bqc2x.eG1x(function (d9g) {
        var gk2x = d9g.args[0], ot5y = d9g.args[1];
        if (gk2x.selectionStart == null) {
            d9g.stopped = !0;
            var de1x = gk2x.createTextRange();
            de1x.collapse(!0);
            de1x.moveStart("character", ot5y.start);
            de1x.moveEnd("character", ot5y.end - ot5y.start);
            de1x.select();
            gk2x.focus()
        }
    });
    be0x.brY2x = be0x.brY2x.eG1x(function (d9g) {
        var gk2x = d9g.args[0];
        gk2x.focus();
        if (gk2x.selectionStart == null) {
            d9g.stopped = !0;
            var bIj6d = document.selection.createRange();
            var bIk6e = gk2x.createTextRange();
            bIk6e.moveToBookmark(bIj6d.getBookmark());
            var biG0x = gk2x.createTextRange();
            biG0x.collapse(!0);
            biG0x.setEndPoint("EndToStart", bIk6e);
            var hy2x = biG0x.text.length;
            d9g.value = {start: hy2x, end: hy2x + bIj6d.text.length}
        }
    });
    be0x.bfQ9H = be0x.bfQ9H.eG1x(function (d9g) {
        if (!!window.XMLSerializer) return;
        d9g.stopped = !0;
        var F9w = d9g.args[0];
        d9g.value = F9w.xml != null ? F9w.xml : F9w.outHTML
    });
    be0x.bgm9d = function () {
        var Vg6a = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bWE1x = function () {
            try {
                for (var i = 0, l = Vg6a.length; i < l; i++) return new ActiveXObject(Vg6a[i])
            } catch (ex) {
                return null
            }
        };
        return be0x.bgm9d.eG1x(function (d9g) {
            if (!!window.DOMParser) return;
            d9g.stopped = !0;
            var nL4P = bWE1x();
            if (!!nL4P && nL4P.loadXML(d9g.args[0]) && !nL4P.parseError.errorCode) d9g.value = nL4P.documentElement
        })
    }();
    be0x.CS9J = function () {
        var ji3x = {input: "propertychange", load: "readystatechange"};
        for (var x in ji3x) bhI0x[ji3x[x]] = !0;
        var bXK1x = function (F9w, u9l) {
            if ("on" + u9l in F9w) return null;
            return ji3x[u9l] || ""
        };
        var bXO1x = function (u9l, dy1x) {
            var cA0x = dy1x;
            switch (u9l) {
                case"readystatechange":
                    cA0x = function (d9g) {
                        var F9w = h9c.W0x(d9g) || this;
                        if (F9w.readyState == "loaded" || F9w.readyState == "complete") {
                            d9g.target = F9w;
                            dy1x.call(F9w, d9g)
                        }
                    };
                    break;
                case"propertychange":
                    cA0x = function (d9g) {
                        var F9w = h9c.W0x(d9g) || this;
                        if ("value" in F9w && d9g.propertyName == "value") {
                            d9g.target = F9w;
                            dy1x.call(F9w, d9g)
                        }
                    };
                    break
            }
            return cA0x
        };
        return be0x.CS9J.eG1x(function (d9g) {
            var bf0x = be0x.biq0x.apply(be0x, d9g.args);
            if (!bf0x) {
                d9g.stopped = !0;
                return
            }
            var u9l = bXK1x(bf0x[0], bf0x[1]);
            if (!!u9l) {
                d9g.stopped = !0;
                bf0x[4] = bf0x[1];
                bf0x[1] = u9l;
                if (!!bf0x[2]) {
                    bf0x[5] = bf0x[2];
                    bf0x[2] = bXO1x(bf0x[1], bf0x[2])
                }
                d9g.value = bf0x
            }
        }, function (d9g) {
            var bf0x = d9g.value;
            if (!bf0x[0] || !k9b.gJ2x(bf0x[2])) return;
            if (!k9b.gJ2x(bf0x[5])) bf0x[5] = bf0x[2];
            bf0x[2] = bf0x[2].f9e(bf0x[0])
        })
    }();
    be0x.bjT0x = be0x.bjT0x.eG1x(function (d9g) {
        var bf0x = d9g.args;
        if (!!bhI0x[bf0x[1]] || !document.addEventListener) {
            d9g.stopped = !0;
            bf0x[0].attachEvent("on" + bf0x[1], bf0x[2])
        }
    });
    be0x.bey9p = be0x.bey9p.eG1x(function (d9g) {
        var bf0x = d9g.args;
        if (!!bhI0x[bf0x[1]] || !document.removeEventListener) {
            d9g.stopped = !0;
            bf0x[0].detachEvent("on" + bf0x[1], bf0x[2])
        }
    });
    be0x.bka0x = be0x.bka0x.eG1x(function (d9g) {
        if (!document.createEvent) {
            d9g.stopped = !0;
            var bf0x = d9g.args, bKC7v = document.createEventObject();
            NEJ.X(bKC7v, bf0x[2]);
            try {
                bf0x[0].fireEvent("on" + bf0x[1], bKC7v)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be0x.bmq1x = be0x.bmq1x.eG1x(function (d9g) {
        var bf0x = d9g.args, V0x = bf0x[1].toLowerCase();
        if (V0x == "opacity" && !(V0x in document.body.style)) {
            bf0x[1] = "filter";
            bf0x[2] = "alpha(opacity=" + bf0x[2] * 100 + ")"
        }
    });
    be0x.bqi2x = function () {
        var fq2x = 30;
        return be0x.bqi2x.eG1x(function (d9g) {
            var F9w = d9g.args[0];
            if (!F9w.styleSheet) return;
            d9g.stopped = !0;
            var kf3x = d9g.args[1];
            var i9b = document.styleSheets;
            if (i9b.length > fq2x) {
                F9w = i9b[fq2x];
                kf3x = F9w.cssText + kf3x
            } else {
                F9w = F9w.styleSheet
            }
            F9w.cssText = kf3x
        })
    }();
    be0x.brB2x = be0x.brB2x.eG1x(function (d9g) {
        var bf0x = d9g.args, zp8h = bf0x[0].sheet;
        if (!!zp8h) return;
        d9g.stopped = !0;
        var zp8h = bf0x[0].styleSheet, bq0x = zp8h.rules.length, bs0x = bf0x[1].split(/[\{\}]/);
        zp8h.addRule(bs0x[0], bs0x[1], bq0x);
        d9g.value = zp8h.rules[bq0x]
    });
    be0x.btx3x = function () {
        var Fb0x = function (eb1x, d9g) {
            a8i.x9o(h9c.W0x(d9g), eb1x)
        };
        return be0x.btx3x.eG1x(function (d9g) {
            if (O9F.dt1x.release >= "4.0") return;
            var bf0x = d9g.args;
            if (bf0x[1] != 1) {
                h9c.s9j(bf0x[0], "blur", Fb0x.f9e(null, bf0x[2]));
                bf0x[1] = -1
            }
        })
    }();
    be0x.bet9k = function (bes9j) {
        return !0
    };
    be0x.bwq4u = be0x.bwq4u.eG1x(function (d9g) {
        var bf0x = d9g.args, g9d = (bf0x[0].attributes || bb0x)[bf0x[1]];
        if (!!g9d) {
            d9g.stopped = !0;
            d9g.value = g9d.value
        }
    }, function (d9g) {
        var bf0x = d9g.args;
        if (bf0x[1] == "maxlength" && d9g.value == 2147483647) d9g.value = ""
    });
    if (O9F.dt1x.release < 5) {
        be0x.bic0x = function () {
            var ei1x, eP2x, ki3x = [], blH1x = "cb-" + +(new Date),
                bo0x = '<script>parent.nej.h["' + blH1x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bKH7A = function () {
                ei1x = window.clearTimeout(ei1x);
                if (!ki3x.length) return;
                var dR1x = ki3x.shift();
                try {
                    var xE8w = eP2x.contentWindow.document;
                    xE8w.open();
                    xE8w.write("<head><title>");
                    xE8w.write(document.title);
                    xE8w.write("</title>");
                    xE8w.write(bo0x.replace("#<HASH>", encodeURIComponent(dR1x)));
                    xE8w.write("</head><body></body>");
                    if (location.hostname != document.domain) xE8w.domain = document.domain;
                    xE8w.close();
                    be0x[blH1x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    ki3x.unshift(dR1x)
                }
                ei1x = window.setTimeout(bKH7A, 50)
            };
            return be0x.bic0x.eG1x(function (d9g) {
                d9g.stopped = !0;
                var dR1x = d9g.args[0];
                if (!!be0x[blH1x] || !eP2x && !dR1x) return;
                ki3x.push(dR1x);
                if (!eP2x) eP2x = a8i.bdX9O();
                bKH7A()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), be0x = c9h("nej.h"), O9F = c9h("nej.p"), bdW9N = O9F.bAX5c;
    if (O9F.na4e.gecko) return;
    var Qu4y = function () {
        bdW9N.css3d = bdW9N.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iN3x, F9w) {
            if (!iN3x || !F9w) return;
            switch (iN3x) {
                case"beforeEnd":
                    this.appendChild(F9w);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(F9w, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(F9w) : this.insertBefore(F9w, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F9w) : this.parentNode.insertBefore(F9w, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bo0x) {
                this.textContent = bo0x
            })
        }
    };
    be0x.CS9J = function () {
        var gF2x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be0x.CS9J.eG1x(function (d9g) {
            var bf0x = d9g.args;
            if (gF2x.test(bf0x[1] || "")) {
                d9g.stopped = !0;
                d9g.value = bf0x
            }
        })
    }();
    be0x.bWs1x = function () {
        var cbK2x = function (d9g) {
            h9c.bh0x(d9g);
            h9c.W0x(d9g).control.click()
        };
        return function (F9w) {
            h9c.s9j(F9w, "click", cbK2x)
        }
    }();
    Qu4y()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), be0x = c9h("nej.h");
    var bdR9I = function () {
        var mr4v = !!document.body.classList;
        return function () {
            return mr4v
        }
    }();
    var bKL7E = function () {
        var df1x = /\s+/g;
        return function (fM2x) {
            fM2x = (fM2x || "").trim();
            return !fM2x ? null : new RegExp("(\\s|^)(?:" + fM2x.replace(df1x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be0x.Rb5g = be0x.Rb5g.eG1x(function (d9g) {
        if (bdR9I()) return;
        d9g.stopped = !0;
        var bf0x = d9g.args, F9w = a8i.B9s(bf0x[0]);
        if (!F9w || !bf0x[1] && !bf0x[2]) return;
        var fM2x = F9w.className || "";
        var Iy1x = " " + (bf0x[2] || ""), Iz1x = bKL7E((bf0x[1] || "") + Iy1x);
        !!Iz1x && (fM2x = fM2x.replace(Iz1x, "$1"));
        F9w.className = (fM2x + Iy1x).replace(/\s+/g, " ").trim()
    });
    be0x.bkk0x = be0x.bkk0x.eG1x(function (d9g) {
        if (bdR9I()) return;
        d9g.stopped = !0;
        var bf0x = d9g.args;
        be0x.Rb5g(bf0x[0], "", bf0x[1])
    });
    be0x.blP1x = be0x.blP1x.eG1x(function (d9g) {
        if (bdR9I()) return;
        d9g.stopped = !0;
        var bf0x = d9g.args;
        be0x.Rb5g(bf0x[0], bf0x[1], "")
    });
    be0x.boW2x = be0x.boW2x.eG1x(function (d9g) {
        if (bdR9I()) return;
        d9g.stopped = !0;
        var bf0x = d9g.args, F9w = a8i.B9s(bf0x[0]);
        if (!F9w) {
            d9g.value = !1;
            return
        }
        var df1x = bKL7E(bf0x[1]);
        d9g.value = !df1x ? !1 : df1x.test(F9w.className || "")
    })
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p"), be0x = c9h("nej.h");
    if (O9F.na4e.webkit) return;
    be0x.bet9k = function (bes9j) {
        return !0
    }
})();
(function () {
    var c9h = NEJ.P, be0x = c9h("nej.h"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        cY1x = c9h("nej.x"), R9I = {};
    var bKN7G = function (F9w) {
        F9w = a8i.B9s(F9w);
        if (!F9w || !R9I[F9w.id]) return;
        var bdN9E = !0, C9t = F9w.id;
        k9b.eH1x(R9I[C9t], function () {
            bdN9E = !1;
            return !0
        });
        if (bdN9E) delete R9I[C9t]
    };
    h9c.s9j = cY1x.s9j = function () {
        var ccf2x = function () {
            var bf0x = be0x.CS9J.apply(be0x, arguments);
            if (!bf0x || !bf0x[2]) return;
            var ux7q = a8i.lD4H(bf0x[0]), pa5f = R9I[ux7q] || {};
            R9I[ux7q] = pa5f;
            ux7q = bf0x[4] || bf0x[1];
            var Cw9n = pa5f[ux7q] || [];
            pa5f[ux7q] = Cw9n;
            Cw9n.push({type: bf0x[1], func: bf0x[2], capt: !!bf0x[3], sfun: bf0x[5] || bf0x[2]});
            return bf0x.slice(0, 4)
        };
        return function () {
            var bf0x = ccf2x.apply(null, arguments);
            if (!!bf0x) be0x.bjT0x.apply(be0x, bf0x);
            return this
        }
    }();
    h9c.mI4M = cY1x.mI4M = function () {
        var ccN3x = function () {
            var td6X = arguments, ux7q = a8i.lD4H(td6X[0]), pa5f = R9I[ux7q], u9l = (td6X[1] || "").toLowerCase(),
                d9g = td6X[2];
            if (!pa5f || !u9l || !d9g) return;
            pa5f = pa5f[u9l];
            if (!pa5f) return;
            var cdp3x = !!td6X[3], r9i = k9b.dj1x(pa5f, function (ji3x) {
                return d9g == ji3x.sfun && cdp3x == ji3x.capt
            });
            if (r9i < 0) return;
            var ji3x = pa5f.splice(r9i, 1)[0];
            return !ji3x ? null : [a8i.B9s(ux7q), ji3x.type, ji3x.func, ji3x.capt]
        };
        return function () {
            var bf0x = ccN3x.apply(null, arguments);
            if (!!bf0x) {
                be0x.bey9p.apply(be0x, bf0x);
                bKN7G(bf0x[0])
            }
            return this
        }
    }();
    h9c.hi2x = cY1x.hi2x = function () {
        var bLz7s = function () {
            var td6X = arguments, ux7q = a8i.lD4H(td6X[0]), pa5f = R9I[ux7q], Cw9n = (td6X[1] || "").toLowerCase();
            if (!pa5f || !Cw9n) return;
            var F9w = a8i.B9s(ux7q);
            k9b.nj4n(pa5f[Cw9n], function (ji3x, r9i, i9b) {
                be0x.bey9p(F9w, ji3x.type, ji3x.func, ji3x.capt);
                i9b.splice(r9i, 1)
            });
            delete pa5f[Cw9n]
        };
        var cdz3x = function (F9w) {
            F9w = a8i.B9s(F9w);
            if (!F9w) return;
            var C9t = F9w.id;
            k9b.eH1x(R9I[C9t], function (i9b, u9l) {
                bLz7s(C9t, u9l)
            });
            delete R9I[C9t]
        };
        return function (F9w, u9l) {
            !u9l ? cdz3x(F9w) : bLz7s(F9w, u9l);
            bKN7G(F9w);
            return this
        }
    }();
    h9c.W0x = function () {
        var bvI3x;
        var IO1x = function (V0x, F9w) {
            var bs0x = V0x.split(":");
            if (bs0x.length > 1) {
                if (!bvI3x) bvI3x = {c: a8i.bE0x, d: a8i.t9k, a: a8i.gO2x};
                var IQ1x = bvI3x[bs0x[0]];
                if (!!IQ1x) return !!IQ1x(F9w, bs0x[1]);
                V0x = bs0x[1]
            }
            return !!a8i.gO2x(F9w, V0x) || !!a8i.t9k(F9w, V0x) || a8i.bE0x(F9w, V0x)
        };
        return function (d9g) {
            if (!d9g) return null;
            var F9w = d9g.target || d9g.srcElement, dZ1x = arguments[1];
            if (!dZ1x) return F9w;
            if (k9b.fD2x(dZ1x)) dZ1x = IO1x.f9e(null, dZ1x);
            if (k9b.gJ2x(dZ1x)) {
                while (F9w) {
                    if (!!dZ1x(F9w)) return F9w;
                    F9w = F9w.parentNode
                }
                return null
            }
            return F9w
        }
    }();
    h9c.bh0x = function (d9g) {
        h9c.tS7L(d9g);
        h9c.cn0x(d9g);
        return this
    };
    h9c.tS7L = function (d9g) {
        if (!!d9g) {
            !!d9g.stopPropagation ? d9g.stopPropagation() : d9g.cancelBubble = !0
        }
        return this
    };
    h9c.cn0x = function (d9g) {
        if (!!d9g) {
            !!d9g.preventDefault ? d9g.preventDefault() : d9g.returnValue = !1
        }
        return this
    };
    h9c.cHD0x = function () {
        var qI5N = !1;
        var cdK3x = function () {
            if (qI5N) return;
            qI5N = !0;
            h9c.s9j(document, "click", ceV3x, !0)
        };
        var ceV3x = function (d9g) {
            var F9w = h9c.W0x(d9g), ceY3x = a8i.t9k(F9w, "stopped");
            if (ceY3x == "true") {
                h9c.bh0x(d9g);
                a8i.t9k(F9w, "stopped", "false")
            }
        };
        return function (d9g) {
            if (!d9g) return;
            if (d9g.type == "click") {
                h9c.bh0x(d9g);
                return
            }
            cdK3x();
            a8i.t9k(h9c.W0x(d9g), "stopped", "true")
        }
    }();
    h9c.jJ3x = function (d9g) {
        return d9g.pageX != null ? d9g.pageX : d9g.clientX + a8i.ox5C().scrollLeft
    };
    h9c.mn4r = function (d9g) {
        return d9g.pageY != null ? d9g.pageY : d9g.clientY + a8i.ox5C().scrollTop
    };
    h9c.z9q = cY1x.z9q = function (F9w, u9l, e9f) {
        var bf0x = be0x.CS9J(F9w, u9l);
        if (!!bf0x) be0x.bka0x(bf0x[0], bf0x[1], e9f);
        return this
    };
    c9h("dbg").dumpEV = function () {
        return R9I
    };
    cY1x.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m) p = function (a) {
                    var f = this.__proto__, a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b)) ;
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }, G = function (a) {
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
                    }, E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++) ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++) ;
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
                            } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
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
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1)) ;
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ") ;
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
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
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j(); else if (e == 92) {
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
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
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
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++) ;
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
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
                    }, F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function (a, b, c) {
                        var d = a[b], h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c); else C(d, function (a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p");
    if (O9F.na4e.trident0) return;
    JSON.parse = JSON.parse.eG1x(function (d9g) {
        var cN0x = d9g.args[0] || "";
        if (cN0x.length >= 5e5) {
            d9g.stopped = !0;
            d9g.value = eval("(" + cN0x + ")")
        }
    })
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, en1x = c9h("nej.g"), a8i = c9h("nej.e"), k9b = c9h("nej.u"),
        h9c = c9h("nej.v"), be0x = c9h("nej.h"), cY1x = c9h("nej.x"), IS1x, bil0x = {},
        R9I = document.createDocumentFragment();
    a8i.lD4H = cY1x.lD4H = function (F9w) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return;
        var C9t = !!F9w.id ? F9w.id : "auto-id-" + k9b.Ph4l(16);
        F9w.id = C9t;
        if (a8i.B9s(C9t) != F9w) bil0x[C9t] = F9w;
        return C9t
    };
    a8i.B9s = cY1x.B9s = function (F9w) {
        var g9d = bil0x["" + F9w];
        if (!!g9d) return g9d;
        if (!k9b.fD2x(F9w) && !k9b.tJ7C(F9w)) return F9w;
        return document.getElementById(F9w)
    };
    a8i.dk1x = cY1x.dk1x = function (F9w, eb1x) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return null;
        var i9b = be0x.bke0x(F9w);
        if (!!eb1x) k9b.nj4n(i9b, function (g9d, r9i) {
            if (!a8i.bE0x(g9d, eb1x)) i9b.splice(r9i, 1)
        });
        return i9b
    };
    a8i.H9y = cY1x.H9y = function (F9w, fM2x) {
        F9w = a8i.B9s(F9w);
        return !F9w ? null : be0x.bkf0x(F9w, fM2x.trim())
    };
    a8i.bMf8X = cY1x.bMf8X = function (F9w) {
        F9w = a8i.B9s(F9w);
        if (!!F9w) {
            F9w = F9w.parentNode;
            while (!!F9w) {
                if (F9w.scrollHeight > F9w.clientHeight) break;
                F9w = F9w.parentNode
            }
            if (!!F9w) return F9w
        }
        var pa5f = document.body.scrollHeight, Cw9n = document.documentElement.scrollHeight;
        return Cw9n >= pa5f ? document.documentElement : document.body
    };
    a8i.ox5C = function () {
        var bMg8Y = function (i9b) {
            var m9d = 0;
            k9b.bd0x(i9b, function (eF1x) {
                if (!eF1x) return;
                if (!m9d) {
                    m9d = eF1x
                } else {
                    m9d = Math.min(m9d, eF1x)
                }
            });
            return m9d
        };
        return function (xE8w) {
            var IX1x = xE8w || document, BV9M = IX1x.body, BS9J = IX1x.documentElement, m9d = {
                scrollTop: Math.max(BV9M.scrollTop, BS9J.scrollTop),
                scrollLeft: Math.max(BV9M.scrollLeft, BS9J.scrollLeft),
                clientWidth: bMg8Y([BV9M.clientWidth, BV9M.offsetWidth, BS9J.clientWidth, BS9J.offsetWidth]),
                clientHeight: bMg8Y([BV9M.clientHeight, BV9M.offsetHeight, BS9J.clientHeight, BS9J.offsetHeight])
            };
            m9d.scrollWidth = Math.max(m9d.clientWidth, BV9M.scrollWidth, BS9J.scrollWidth);
            m9d.scrollHeight = Math.max(m9d.clientHeight, BV9M.scrollHeight, BS9J.scrollHeight);
            return m9d
        }
    }();
    a8i.cHw0x = function (fq2x, pi5n) {
        var m9d = NEJ.X({}, pi5n), bMk8c = fq2x.width / fq2x.height, bdu9l = pi5n.width / pi5n.height;
        if (bMk8c > bdu9l && pi5n.height > fq2x.height) {
            m9d.height = fq2x.height;
            m9d.width = m9d.height * bdu9l
        }
        if (bMk8c < bdu9l && pi5n.width > fq2x.width) {
            m9d.width = fq2x.width;
            m9d.height = m9d.width / bdu9l
        }
        return m9d
    };
    a8i.cHu0x = function () {
        var df1x = /\s+/;
        var vS7L = {
            left: function () {
                return 0
            }, center: function (hx2x, pi5n) {
                return (hx2x.width - pi5n.width) / 2
            }, right: function (hx2x, pi5n) {
                return hx2x.width - pi5n.width
            }, top: function () {
                return 0
            }, middle: function (hx2x, pi5n) {
                return (hx2x.height - pi5n.height) / 2
            }, bottom: function (hx2x, pi5n) {
                return hx2x.height - pi5n.height
            }
        };
        return function (hx2x, pi5n, oq4u) {
            var m9d = {}, bs0x = (oq4u || "").split(df1x), gx2x = vS7L[bs0x[1]] || vS7L.middle,
                gZ2x = vS7L[bs0x[0]] || vS7L.center;
            m9d.top = gx2x(hx2x, pi5n);
            m9d.left = gZ2x(hx2x, pi5n);
            return m9d
        }
    }();
    a8i.ts6m = cY1x.ts6m = function (F9w, eb1x) {
        be0x.bpK2x(F9w, eb1x || a8i.t9k(F9w, "hover") || "js-hover");
        return this
    };
    a8i.Ja1x = cY1x.Ja1x = function (F9w) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return;
        be0x.bpW2x(F9w)
    };
    a8i.cfj3x = cY1x.cfj3x = function () {
        var R9I = {}, bMl8d = 2;
        var cfl3x = function (C9t, eb1x, d9g) {
            R9I[C9t] = [h9c.jJ3x(d9g), h9c.mn4r(d9g)];
            a8i.y9p(C9t, eb1x)
        };
        var cfm3x = function (C9t, eb1x, d9g) {
            var bM0x = R9I[C9t];
            if (!k9b.eJ1x(bM0x)) return;
            var cfu3x = Math.abs(h9c.jJ3x(d9g) - bM0x[0]), chD4H = Math.abs(h9c.mn4r(d9g) - bM0x[1]);
            if (cfu3x > bMl8d || chD4H > bMl8d) bpJ2x(C9t, eb1x)
        };
        var bpJ2x = function (C9t, eb1x) {
            if (k9b.eJ1x(R9I[C9t])) {
                R9I[C9t] = -1;
                a8i.x9o(C9t, eb1x)
            }
        };
        return function (F9w, eb1x) {
            var C9t = a8i.lD4H(F9w);
            if (!C9t || R9I[C9t] != null) return;
            R9I[C9t] = -1;
            eb1x = eb1x || a8i.t9k(C9t, "highlight") || "js-highlight";
            h9c.s9j(C9t, "touchstart", cfl3x.f9e(null, C9t, eb1x));
            h9c.s9j(document, "touchmove", cfm3x.f9e(null, C9t, eb1x));
            h9c.s9j(document, "touchend", bpJ2x.f9e(null, C9t, eb1x));
            h9c.s9j(document, "touchcancel", bpJ2x.f9e(null, C9t, eb1x))
        }
    }();
    a8i.BB9s = cY1x.BB9s = function () {
        var chW4a = function (C9t, eb1x, cjz4D) {
            var F9w = a8i.B9s(C9t), d9g = {clazz: eb1x, target: F9w};
            if (a8i.bE0x(F9w, eb1x)) {
                d9g.toggled = !1;
                a8i.x9o(F9w, eb1x)
            } else {
                d9g.toggled = !0;
                a8i.y9p(F9w, eb1x)
            }
            cjz4D.call(null, d9g)
        };
        return function (F9w, e9f) {
            F9w = a8i.B9s(F9w);
            if (!!F9w) {
                var in3x = {ontoggle: br0x, clazz: "js-toggle", element: F9w.parentNode};
                if (k9b.fD2x(e9f)) {
                    var g9d = a8i.B9s(e9f);
                    !!g9d ? in3x.element = g9d : in3x.clazz = e9f
                } else {
                    NEJ.EX(in3x, e9f);
                    in3x.element = a8i.B9s(in3x.element)
                }
                var C9t = a8i.lD4H(in3x.element);
                h9c.s9j(F9w, "click", chW4a.f9e(null, C9t, in3x.clazz, in3x.ontoggle || br0x))
            }
            return this
        }
    }();
    a8i.mw4A = cY1x.mw4A = function (F9w, e9f) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return;
        var fe2x = 0, eb1x = "js-focus";
        if (k9b.tJ7C(e9f)) {
            fe2x = e9f
        } else if (k9b.fD2x(e9f)) {
            eb1x = e9f
        } else if (k9b.lv4z(e9f)) {
            fe2x = e9f.mode || fe2x;
            eb1x = e9f.clazz || eb1x
        }
        var D9u = parseInt(a8i.t9k(F9w, "mode"));
        if (!isNaN(D9u)) fe2x = D9u;
        D9u = a8i.t9k(F9w, "focus");
        if (!!D9u) eb1x = D9u;
        be0x.btx3x(F9w, fe2x, eb1x);
        return this
    };
    a8i.di1x = function () {
        var bz0x = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fx2x, fM2x, bH0x) {
            var F9w = document.createElement(fx2x);
            NEJ.X(F9w, bz0x[fx2x.toLowerCase()]);
            if (!!fM2x) F9w.className = fM2x;
            bH0x = a8i.B9s(bH0x);
            if (!!bH0x) bH0x.appendChild(F9w);
            return F9w
        }
    }();
    a8i.bdX9O = function () {
        var ckB4F = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ckT5Y = function (V0x) {
            V0x = V0x.trim();
            if (!V0x) return a8i.di1x("iframe");
            var eP2x;
            try {
                eP2x = document.createElement('<iframe name="' + V0x + '"></iframe>');
                eP2x.frameBorder = 0
            } catch (e) {
                eP2x = a8i.di1x("iframe");
                eP2x.name = V0x
            }
            return eP2x
        };
        return function (e9f) {
            e9f = e9f || bb0x;
            var eP2x = ckT5Y(e9f.name || "");
            if (!e9f.visible) eP2x.style.display = "none";
            if (k9b.gJ2x(e9f.onload)) h9c.s9j(eP2x, "load", function (d9g) {
                if (!eP2x.src) return;
                h9c.hi2x(eP2x, "load");
                e9f.onload(d9g)
            });
            var bH0x = e9f.parent;
            if (k9b.gJ2x(bH0x)) {
                try {
                    bH0x(eP2x)
                } catch (e) {
                }
            } else {
                (a8i.B9s(bH0x) || document.body).appendChild(eP2x)
            }
            var cS0x = e9f.src || ckB4F();
            window.setTimeout(function () {
                eP2x.src = cS0x
            }, 0);
            return eP2x
        }
    }();
    a8i.cM0x = cY1x.cM0x = function () {
        var bOU8M = function (yh8Z) {
            yh8Z.src = en1x.bmn1x
        };
        var bPb8T = function (em1x) {
            em1x.src = "about:blank"
        };
        return function (F9w, cmZ5e) {
            F9w = a8i.B9s(F9w);
            if (!F9w) return this;
            if (!cmZ5e) h9c.hi2x(F9w);
            delete bil0x[F9w.id];
            var fx2x = F9w.tagName;
            if (fx2x == "IFRAME") {
                bPb8T(F9w)
            } else if (fx2x == "IMG") {
                bOU8M(F9w)
            } else if (!!F9w.getElementsByTagName) {
                k9b.bd0x(F9w.getElementsByTagName("img"), bOU8M);
                k9b.bd0x(F9w.getElementsByTagName("iframe"), bPb8T)
            }
            if (!!F9w.parentNode) {
                F9w.parentNode.removeChild(F9w)
            }
            return this
        }
    }();
    a8i.mB4F = cY1x.mB4F = function (F9w) {
        F9w = a8i.B9s(F9w);
        if (!!F9w) R9I.appendChild(F9w);
        return this
    };
    a8i.bPU9L = cY1x.bPU9L = function (F9w) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return;
        k9b.nj4n(F9w.childNodes, function (g9d) {
            a8i.cM0x(g9d)
        })
    };
    a8i.Jh1x = cY1x.Jh1x = function () {
        var eb1x, gF2x = /\s+/;
        var coZ6T = function () {
            if (!!eb1x) return;
            eb1x = a8i.th6b(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a8i.bQb9S()
        };
        return function (F9w, e9f) {
            F9w = a8i.B9s(F9w);
            if (!F9w) return;
            coZ6T();
            e9f = e9f || bb0x;
            var bH0x = F9w.parentNode;
            if (!a8i.bE0x(bH0x, eb1x)) {
                bH0x = a8i.di1x("span", eb1x);
                F9w.insertAdjacentElement("beforeBegin", bH0x);
                bH0x.appendChild(F9w)
            }
            var bQd9U = e9f.nid || "", g9d = a8i.H9y(bH0x, bQd9U || eb1x + "-show")[0];
            if (!g9d) {
                var ed1x = ((e9f.clazz || "") + " " + bQd9U).trim();
                ed1x = eb1x + "-show" + (!ed1x ? "" : " ") + ed1x;
                g9d = a8i.di1x(e9f.tag || "span", ed1x);
                bH0x.appendChild(g9d)
            }
            var ed1x = e9f.clazz;
            if (!!ed1x) {
                ed1x = (ed1x || "").trim().split(gF2x)[0] + "-parent";
                a8i.y9p(bH0x, ed1x)
            }
            return g9d
        }
    }();
    a8i.t9k = cY1x.t9k = function () {
        var bxJ4N = {}, fx2x = "data-", df1x = /\-(.{1})/gi;
        var Eo0x = function (F9w) {
            var C9t = a8i.lD4H(F9w);
            if (!!bxJ4N[C9t]) return;
            var bz0x = {};
            k9b.bd0x(F9w.attributes, function (g9d) {
                var K9B = g9d.nodeName;
                if (K9B.indexOf(fx2x) != 0) return;
                K9B = K9B.replace(fx2x, "").replace(df1x, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bz0x[K9B] = g9d.nodeValue || ""
            });
            bxJ4N[C9t] = bz0x
        };
        return function (F9w, K9B, D9u) {
            F9w = a8i.B9s(F9w);
            if (!F9w) return null;
            var bcY9P = F9w.dataset;
            if (!bcY9P) {
                Eo0x(F9w);
                bcY9P = bxJ4N[F9w.id]
            }
            if (D9u !== undefined) bcY9P[K9B] = D9u;
            return bcY9P[K9B]
        }
    }();
    a8i.gO2x = cY1x.gO2x = function (F9w, V0x, D9u) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return "";
        if (D9u !== undefined && !!F9w.setAttribute) F9w.setAttribute(V0x, D9u);
        return be0x.bwq4u(F9w, V0x)
    };
    a8i.ow5B = function (dW1x) {
        var rX6R = document.createElement("div");
        rX6R.innerHTML = dW1x;
        var i9b = a8i.dk1x(rX6R);
        return i9b.length > 1 ? rX6R : i9b[0]
    };
    a8i.cph6b = cY1x.cph6b = function (F9w) {
        F9w = a8i.B9s(F9w);
        return !F9w ? "" : be0x.bfQ9H(F9w)
    };
    a8i.bQf9W = function (CT9K) {
        CT9K = (CT9K || "").trim();
        return !CT9K ? null : be0x.bgm9d(CT9K)
    };
    a8i.cpk6e = function (cJ0x, u9l) {
        cJ0x = cJ0x || "";
        switch (u9l) {
            case"xml":
                cJ0x = a8i.bQf9W(cJ0x);
                break;
            case"json":
                try {
                    cJ0x = JSON.parse(cJ0x)
                } catch (ex) {
                    cJ0x = null
                }
                break
        }
        return cJ0x
    };
    a8i.hS2x = cY1x.hS2x = function () {
        var cpv6p = function (F9w) {
            return F9w == document.body || F9w == document.documentElement
        };
        return function (ee1x, mV4Z) {
            ee1x = a8i.B9s(ee1x);
            if (!ee1x) return null;
            mV4Z = a8i.B9s(mV4Z) || null;
            var m9d = {x: 0, y: 0}, bhN0x, dq1x, bcM9D;
            while (!!ee1x && ee1x != mV4Z) {
                bhN0x = cpv6p(ee1x);
                dq1x = bhN0x ? 0 : ee1x.scrollLeft;
                bcM9D = parseInt(a8i.dh1x(ee1x, "borderLeftWidth")) || 0;
                m9d.x += ee1x.offsetLeft + bcM9D - dq1x;
                dq1x = bhN0x ? 0 : ee1x.scrollTop;
                bcM9D = parseInt(a8i.dh1x(ee1x, "borderTopWidth")) || 0;
                m9d.y += ee1x.offsetTop + bcM9D - dq1x;
                ee1x = ee1x.offsetParent
            }
            return m9d
        }
    }();
    a8i.nq4u = cY1x.nq4u = function (F9w) {
        var bi0x = a8i.hS2x(F9w);
        window.scrollTo(bi0x.x, bi0x.y);
        return this
    };
    a8i.cGo0x = function (tD6x) {
        tD6x = (tD6x || "").trim();
        return be0x.bFM6G(tD6x)
    };
    a8i.cpz6t = cY1x.cpz6t = function (F9w, V0x, bz0x) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return this;
        var D9u = be0x.bHH6B(V0x, bz0x);
        if (!D9u) return this;
        a8i.ba0x(F9w, "transform", D9u);
        return this
    };
    a8i.eY2x = cY1x.eY2x = function (F9w, bz0x) {
        F9w = a8i.B9s(F9w);
        if (!!F9w) k9b.eH1x(bz0x, function (D9u, V0x) {
            a8i.ba0x(F9w, V0x, D9u)
        });
        return this
    };
    a8i.cpB6v = cY1x.cpB6v = function (gk2x, e9f) {
        gk2x = a8i.B9s(gk2x);
        if (!gk2x) return {start: 0, end: 0};
        if (k9b.tJ7C(e9f)) e9f = {start: e9f, end: e9f};
        if (e9f != null) {
            if (e9f.end == null) e9f.end = e9f.start || 0;
            be0x.bqc2x(gk2x, e9f)
        } else {
            e9f = be0x.brY2x(gk2x)
        }
        return e9f
    };
    a8i.ba0x = cY1x.ba0x = function (F9w, V0x, D9u) {
        F9w = a8i.B9s(F9w);
        if (!!F9w) be0x.bmq1x(F9w, V0x, D9u);
        return this
    };
    a8i.dh1x = cY1x.dh1x = function (F9w, V0x) {
        F9w = a8i.B9s(F9w);
        if (!F9w) return "";
        var he2x = !window.getComputedStyle ? F9w.currentStyle || bb0x : window.getComputedStyle(F9w, null);
        return he2x[be0x.bHI6C(V0x)] || ""
    };
    a8i.bQt9k = function () {
        var df1x = /[\s\r\n]+/gi;
        return function (cj0x) {
            cj0x = (cj0x || "").trim().replace(df1x, " ");
            if (!cj0x) return;
            var g9d = a8i.di1x("style");
            document.head.appendChild(g9d);
            be0x.bqi2x(g9d, be0x.cDg9X(cj0x));
            return g9d
        }
    }();
    a8i.bQu9l = function (yU8M) {
        try {
            yU8M = yU8M.trim();
            if (!!yU8M) return (new Function(yU8M))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a8i.th6b = function () {
        var df1x = /#<.*?>/g, gK2x = +(new Date);
        return function (kf3x) {
            if (!IS1x) IS1x = [];
            var fM2x = "auto-" + gK2x++;
            IS1x.push(kf3x.replace(df1x, fM2x));
            return fM2x
        }
    }();
    a8i.bQb9S = function () {
        if (!!IS1x) {
            a8i.bQt9k(IS1x.join(""));
            IS1x = null
        }
        return this
    };
    a8i.cGj0x = function (cj0x, kf3x) {
        cj0x = a8i.B9s(cj0x);
        return !cj0x ? null : be0x.brB2x(cj0x, kf3x)
    };
    a8i.y9p = cY1x.y9p = function () {
        be0x.bkk0x.apply(be0x, arguments);
        return this
    };
    a8i.x9o = cY1x.x9o = function () {
        be0x.blP1x.apply(be0x, arguments);
        return this
    };
    a8i.fm2x = cY1x.fm2x = function () {
        be0x.Rb5g.apply(be0x, arguments);
        return this
    };
    a8i.bE0x = cY1x.bE0x = function () {
        return be0x.boW2x.apply(be0x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cY1x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, fz2x = NEJ.R, br0x = NEJ.F, a8i = c9h("nej.e"), be0x = c9h("nej.h"),
        k9b = c9h("nej.u");
    var Eq0x = function (j9a, u9l) {
        try {
            u9l = u9l.toLowerCase();
            if (j9a === null) return u9l == "null";
            if (j9a === undefined) return u9l == "undefined";
            return bb0x.toString.call(j9a).toLowerCase() == "[object " + u9l + "]"
        } catch (e) {
            return !1
        }
    };
    k9b.gJ2x = function (j9a) {
        return Eq0x(j9a, "function")
    };
    k9b.fD2x = function (j9a) {
        return Eq0x(j9a, "string")
    };
    k9b.tJ7C = function (j9a) {
        return Eq0x(j9a, "number")
    };
    k9b.cGc0x = function (j9a) {
        return Eq0x(j9a, "boolean")
    };
    k9b.ET0x = function (j9a) {
        return Eq0x(j9a, "date")
    };
    k9b.eJ1x = function (j9a) {
        return Eq0x(j9a, "array")
    };
    k9b.lv4z = function (j9a) {
        return Eq0x(j9a, "object")
    };
    k9b.fw2x = function () {
        var df1x = /[^\x00-\xfff]/g;
        return function (bo0x) {
            return ("" + (bo0x || "")).replace(df1x, "**").length
        }
    }();
    k9b.dj1x = function (i9b, p9g) {
        var dZ1x = k9b.gJ2x(p9g) ? p9g : function (D9u) {
            return D9u === p9g
        }, r9i = k9b.eH1x(i9b, dZ1x);
        return r9i != null ? r9i : -1
    };
    k9b.cFX0x = function () {
        var bQC9t;
        var Tm5r = function (i9b, pq5v, pp5u) {
            if (pq5v > pp5u) return -1;
            var FY0x = Math.ceil((pq5v + pp5u) / 2), m9d = bQC9t(i9b[FY0x], FY0x, i9b);
            if (m9d == 0) return FY0x;
            if (m9d < 0) return Tm5r(i9b, pq5v, FY0x - 1);
            return Tm5r(i9b, FY0x + 1, pp5u)
        };
        return function (i9b, IQ1x) {
            bQC9t = IQ1x || br0x;
            return Tm5r(i9b, 0, i9b.length - 1)
        }
    }();
    k9b.nj4n = function (i9b, cA0x, P9G) {
        if (!i9b || !i9b.length || !k9b.gJ2x(cA0x)) return null;
        for (var i = i9b.length - 1; i >= 0; i--) if (!!cA0x.call(P9G, i9b[i], i, i9b)) return i;
        return null
    };
    k9b.bd0x = function (i9b, cA0x, P9G) {
        if (!i9b || !i9b.length || !k9b.gJ2x(cA0x)) return this;
        if (!!i9b.forEach) {
            i9b.forEach(cA0x, P9G);
            return this
        }
        for (var i = 0, l = i9b.length; i < l; i++) cA0x.call(P9G, i9b[i], i, i9b);
        return this
    };
    k9b.eH1x = function (i9b, cA0x, P9G) {
        if (!i9b || !k9b.gJ2x(cA0x)) return null;
        if (i9b.length != null) {
            if (i9b.length > 0) for (var i = 0, l = i9b.length; i < l; i++) if (!!cA0x.call(P9G, i9b[i], i, i9b)) return i
        }
        if (k9b.lv4z(i9b)) {
            for (var x in i9b) if (i9b.hasOwnProperty(x) && !!cA0x.call(P9G, i9b[x], x, i9b)) return x
        }
        return null
    };
    k9b.crf6Z = function (jk3x, csb6V, e9f) {
        jk3x = jk3x || [];
        e9f = e9f || bb0x;
        var bRx0x = !!e9f.union, wR8J = !!e9f.begin, bcB8t = e9f.compare, csx6r = bRx0x && wR8J ? k9b.nj4n : k9b.bd0x;
        csx6r(csb6V, function (p9g) {
            if (!!bcB8t) bcB8t = bcB8t.ev1x(p9g);
            var r9i = k9b.dj1x(jk3x, bcB8t || p9g);
            if (r9i >= 0) jk3x.splice(r9i, 1);
            if (bRx0x) jk3x[wR8J ? "unshift" : "push"](p9g)
        });
        return jk3x
    };
    k9b.AU9L = function (bz0x, bo0x) {
        if (!bz0x || !bo0x || !bo0x.replace) return bo0x || "";
        return bo0x.replace(bz0x.r, function ($1) {
            var m9d = bz0x[!bz0x.i ? $1.toLowerCase() : $1];
            return m9d != null ? m9d : $1
        })
    };
    k9b.dG1x = function () {
        var bz0x = {
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
        return function (bo0x) {
            return k9b.AU9L(bz0x, bo0x)
        }
    }();
    k9b.AR9I = function () {
        var bz0x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bo0x) {
            return k9b.AU9L(bz0x, bo0x)
        }
    }();
    k9b.hY2x = function () {
        var bz0x = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, csK6E = ["上午", "下午"],
            csY6S = ["A.M.", "P.M."], bpU2x = ["日", "一", "二", "三", "四", "五", "六"],
            ctN7G = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cuf7Y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var TA5F = function (gT2x) {
            gT2x = parseInt(gT2x) || 0;
            return (gT2x < 10 ? "0" : "") + gT2x
        };
        var cvV7O = function (qc5h) {
            return qc5h < 12 ? 0 : 1
        };
        return function (bA0x, Jz1x, cwp7i) {
            if (!bA0x || !Jz1x) return "";
            bA0x = k9b.bcn8f(bA0x);
            bz0x.yyyy = bA0x.getFullYear();
            bz0x.yy = ("" + bz0x.yyyy).substr(2);
            bz0x.M = bA0x.getMonth() + 1;
            bz0x.MM = TA5F(bz0x.M);
            bz0x.eM = cuf7Y[bz0x.M - 1];
            bz0x.cM = ctN7G[bz0x.M - 1];
            bz0x.d = bA0x.getDate();
            bz0x.dd = TA5F(bz0x.d);
            bz0x.H = bA0x.getHours();
            bz0x.HH = TA5F(bz0x.H);
            bz0x.m = bA0x.getMinutes();
            bz0x.mm = TA5F(bz0x.m);
            bz0x.s = bA0x.getSeconds();
            bz0x.ss = TA5F(bz0x.s);
            bz0x.ms = bA0x.getMilliseconds();
            bz0x.w = bpU2x[bA0x.getDay()];
            var bTp0x = cvV7O(bz0x.H);
            bz0x.ct = csK6E[bTp0x];
            bz0x.et = csY6S[bTp0x];
            if (!!cwp7i) {
                bz0x.H = bz0x.H % 12
            }
            return k9b.AU9L(bz0x, Jz1x)
        }
    }();
    k9b.bcn8f = function (bA0x) {
        var cZ1x = bA0x;
        if (k9b.fD2x(bA0x)) cZ1x = new Date(Date.parse(bA0x));
        if (!k9b.ET0x(bA0x)) cZ1x = new Date(bA0x);
        return cZ1x
    };
    k9b.Ja1x = function (cxh8Z, cxi8a) {
        return (new Number(cxh8Z)).toFixed(cxi8a)
    };
    k9b.bts3x = function () {
        var gF2x = /([^\/:])\/.*$/, kp3x = /\/[^\/]+$/, Fi0x = /[#\?]/, bty3x = location.href.split(/[?#]/)[0],
            sU6O = document.createElement("a");
        var btQ3x = function (js3x) {
            return (js3x || "").indexOf("://") > 0
        };
        var bUq1x = function (js3x) {
            return (js3x || "").split(Fi0x)[0].replace(kp3x, "/")
        };
        var cCA9r = function (js3x, ga2x) {
            if (js3x.indexOf("/") == 0) return ga2x.replace(gF2x, "$1") + js3x;
            return bUq1x(ga2x) + js3x
        };
        bty3x = bUq1x(bty3x);
        return function (js3x, ga2x) {
            js3x = (js3x || "").trim();
            if (!btQ3x(ga2x)) ga2x = bty3x;
            if (!js3x) return ga2x;
            if (btQ3x(js3x)) return js3x;
            js3x = cCA9r(js3x, ga2x);
            sU6O.href = js3x;
            js3x = sU6O.href;
            return btQ3x(js3x) ? js3x : sU6O.getAttribute("href", 4)
        }
    }();
    k9b.cDh9Y = function () {
        var df1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (X0x) {
            if (df1x.test(X0x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k9b.bVN1x = function (G9x, in3x) {
        if (!G9x) return in3x;
        var V0x = G9x.tagName.toLowerCase(), i9b = a8i.dk1x(G9x);
        if (!i9b || !i9b.length) {
            in3x[V0x] = G9x.textContent || G9x.text || "";
            return in3x
        }
        var ck0x = {};
        in3x[V0x] = ck0x;
        k9b.bd0x(i9b, function (g9d) {
            k9b.bVN1x(g9d, ck0x)
        });
        return in3x
    };
    k9b.cET9K = function (CT9K) {
        try {
            return k9b.bVN1x(a8i.bQf9W(CT9K), {})
        } catch (ex) {
            return null
        }
    };
    k9b.VG6A = function (ii3x, VI6C) {
        var in3x = {};
        k9b.bd0x((ii3x || "").split(VI6C), function (V0x) {
            var bcg8Y = V0x.split("=");
            if (!bcg8Y || !bcg8Y.length) return;
            var K9B = bcg8Y.shift();
            if (!K9B) return;
            in3x[decodeURIComponent(K9B)] = decodeURIComponent(bcg8Y.join("="))
        });
        return in3x
    };
    k9b.vb7U = function (go2x, VI6C, cEi9Z) {
        if (!go2x) return "";
        var bs0x = [];
        for (var x in go2x) {
            bs0x.push(encodeURIComponent(x) + "=" + (!!cEi9Z ? encodeURIComponent(go2x[x]) : go2x[x]))
        }
        return bs0x.join(VI6C || ",")
    };
    k9b.ht2x = function (bv0x) {
        return k9b.VG6A(bv0x, "&")
    };
    k9b.cD0x = function (go2x) {
        return k9b.vb7U(go2x, "&", !0)
    };
    k9b.cEP9G = function (go2x) {
        return be0x.Ix1x(go2x)
    };
    k9b.cEO9F = function (i9b, dZ1x) {
        var m9d = {};
        k9b.bd0x(i9b, function (p9g) {
            var K9B = p9g;
            if (!!dZ1x) {
                K9B = dZ1x(p9g)
            }
            m9d[K9B] = p9g
        });
        return m9d
    };
    k9b.cHy0x = function (gT2x, fZ2x) {
        var cEL9C = ("" + gT2x).length, cEK9B = Math.max(1, parseInt(fZ2x) || 0), dq1x = cEK9B - cEL9C;
        if (dq1x > 0) {
            gT2x = (new Array(dq1x + 1)).join("0") + gT2x
        }
        return "" + gT2x
    };
    k9b.bbZ8R = function (go2x, V0x) {
        if (!k9b.eJ1x(V0x)) {
            try {
                delete go2x[V0x]
            } catch (e) {
                go2x[V0x] = undefined
            }
            return this
        }
        k9b.bd0x(V0x, k9b.bbZ8R.f9e(k9b, go2x));
        return this
    };
    k9b.Ph4l = function () {
        var byb4f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq0x) {
            bq0x = bq0x || 10;
            var m9d = [];
            for (var i = 0, bVV1x; i < bq0x; ++i) {
                bVV1x = Math.floor(Math.random() * byb4f.length);
                m9d.push(byb4f.charAt(bVV1x))
            }
            return m9d.join("")
        }
    }();
    k9b.AA9r = function (fF2x, fq2x) {
        return Math.floor(Math.random() * (fq2x - fF2x) + fF2x)
    };
    k9b.nW4a = function (bq0x) {
        bq0x = Math.max(0, Math.min(bq0x || 8, 30));
        var fF2x = Math.pow(10, bq0x - 1), fq2x = fF2x * 10;
        return k9b.AA9r(fF2x, fq2x).toString()
    };
    k9b.bbY8Q = function () {
        var gK2x = +(new Date);
        return function () {
            return "" + gK2x++
        }
    }()
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, fz2x = NEJ.R, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        O9F = c9h("nej.ut"), pc5h;
    if (!!O9F.cK0x) return;
    O9F.cK0x = NEJ.C();
    pc5h = O9F.cK0x.prototype;
    O9F.cK0x.A9r = function (e9f) {
        e9f = e9f || {};
        var cC0x = !!this.Ay9p && this.Ay9p.shift();
        if (!cC0x) {
            cC0x = new this(e9f);
            this.cEH9y = (this.cEH9y || 0) + 1
        }
        cC0x.bl0x(e9f);
        return cC0x
    };
    O9F.cK0x.T0x = function () {
        var Na2x = function (p9g, r9i, i9b) {
            p9g.T0x();
            i9b.splice(r9i, 1)
        };
        return function (cC0x) {
            if (!cC0x) return null;
            if (!k9b.eJ1x(cC0x)) {
                if (!(cC0x instanceof this)) {
                    var fM2x = cC0x.constructor;
                    if (!!fM2x.T0x) fM2x.T0x(cC0x);
                    return null
                }
                if (cC0x == this.fj2x) delete this.fj2x;
                if (cC0x == this.Az9q) delete this.Az9q;
                cC0x.bC0x();
                if (!this.Ay9p) this.Ay9p = [];
                if (k9b.dj1x(this.Ay9p, cC0x) < 0) {
                    this.Ay9p.push(cC0x)
                }
                return null
            }
            k9b.nj4n(cC0x, Na2x, this)
        }
    }();
    O9F.cK0x.gf2x = function (e9f) {
        e9f = e9f || {};
        if (!this.fj2x) this.fj2x = this.A9r(e9f);
        return this.fj2x
    };
    O9F.cK0x.bVU1x = function (e9f, rJ6D) {
        e9f = e9f || {};
        if (!!rJ6D && !!this.Az9q) {
            this.Az9q.T0x();
            delete this.Az9q
        }
        if (!this.Az9q) {
            this.Az9q = this.A9r(e9f)
        } else {
            this.Az9q.bl0x(e9f)
        }
        return this.Az9q
    };
    pc5h.cy0x = function () {
        var gK2x = +(new Date);
        return function () {
            this.id = gK2x++;
            this.mg4k = {};
            this.bVT1x = {}
        }
    }();
    pc5h.bl0x = function (e9f) {
        this.bjK0x(e9f)
    };
    pc5h.bC0x = function () {
        this.hi2x();
        this.JR1x()
    };
    pc5h.bX0x = function () {
        var gK2x = +(new Date);
        var cEE9v = function (bf0x) {
            if (!bf0x || bf0x.length < 3) return;
            this.bVT1x["de-" + gK2x++] = bf0x;
            h9c.s9j.apply(h9c, bf0x)
        };
        return function (i9b) {
            k9b.bd0x(i9b, cEE9v, this)
        }
    }();
    pc5h.JR1x = function () {
        var cEm9d = function (bf0x, K9B, bz0x) {
            delete bz0x[K9B];
            h9c.mI4M.apply(h9c, bf0x)
        };
        return function () {
            k9b.eH1x(this.bVT1x, cEm9d)
        }
    }();
    pc5h.cEU9L = function (dZ1x) {
        dZ1x = dZ1x || br0x;
        k9b.eH1x(this, function (Gr0x, K9B, bz0x) {
            if (!!Gr0x && !!Gr0x.T0x && !dZ1x(Gr0x)) {
                delete bz0x[K9B];
                Gr0x.T0x()
            }
        })
    };
    pc5h.T0x = function () {
        this.constructor.T0x(this)
    };
    pc5h.bkd0x = function (u9l) {
        var d9g = this.mg4k[u9l.toLowerCase()];
        return !!d9g && d9g !== br0x
    };
    pc5h.s9j = function (u9l, d9g) {
        this.xF8x.apply(this, arguments);
        return this
    };
    pc5h.mI4M = function (u9l, d9g) {
        var u9l = (u9l || "").toLowerCase(), eg1x = this.mg4k[u9l];
        if (!k9b.eJ1x(eg1x)) {
            if (eg1x == d9g) delete this.mg4k[u9l];
            return
        }
        k9b.nj4n(eg1x, function (ex1x, r9i, i9b) {
            if (ex1x == d9g) i9b.splice(r9i, 1)
        })
    };
    pc5h.xF8x = function (u9l, d9g) {
        if (!!u9l && k9b.gJ2x(d9g)) this.mg4k[u9l.toLowerCase()] = d9g;
        return this
    };
    pc5h.bjK0x = function () {
        var cEg9X = function (d9g, u9l) {
            this.xF8x(u9l, d9g)
        };
        return function (eg1x) {
            k9b.eH1x(eg1x, cEg9X, this);
            return this
        }
    }();
    pc5h.hi2x = function () {
        var bkB1x = function (d9g, u9l) {
            this.hi2x(u9l)
        };
        return function (u9l) {
            var u9l = (u9l || "").toLowerCase();
            if (!!u9l) {
                delete this.mg4k[u9l]
            } else {
                k9b.eH1x(this.mg4k, bkB1x, this)
            }
            return this
        }
    }();
    pc5h.bkQ1x = function (u9l, d9g) {
        if (!u9l || !k9b.gJ2x(d9g)) return this;
        u9l = u9l.toLowerCase();
        var eg1x = this.mg4k[u9l];
        if (!eg1x) {
            this.mg4k[u9l] = d9g;
            return this
        }
        if (!k9b.eJ1x(eg1x)) {
            this.mg4k[u9l] = [eg1x]
        }
        this.mg4k[u9l].push(d9g);
        return this
    };
    pc5h.z9q = function (u9l) {
        var d9g = this.mg4k[(u9l || "").toLowerCase()];
        if (!d9g) return this;
        var bf0x = fz2x.slice.call(arguments, 1);
        if (!k9b.eJ1x(d9g)) return d9g.apply(this, bf0x);
        k9b.bd0x(d9g, function (dy1x) {
            try {
                dy1x.apply(this, bf0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    O9F.bbR8J = function () {
        var R9I = {};
        return function (C9t, fM2x, e9f) {
            var fl2x = fM2x.cEf9W;
            if (!fl2x) {
                fl2x = k9b.Ph4l(10);
                fM2x.cEf9W = fl2x
            }
            var K9B = C9t + "-" + fl2x, cC0x = R9I[K9B];
            if (!!e9f && !cC0x) {
                cC0x = fM2x.A9r(e9f);
                cC0x.T0x = cC0x.T0x.eG1x(function (d9g) {
                    delete R9I[K9B];
                    delete cC0x.T0x
                });
                R9I[K9B] = cC0x
            }
            return cC0x
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gz2x = function () {
        var cZ1x = new Date, cEe9V = +cZ1x, bme1x = 864e5;
        var cEc9T = function (V0x) {
            console.log("liguoqinjim cEc9T:" + V0x);
            var sH6B = document.cookie, sP6J = "\\b" + V0x + "=", bbK8C = sH6B.search(sP6J);
            if (bbK8C < 0) return "";
            bbK8C += sP6J.length - 2;
            var xy8q = sH6B.indexOf(";", bbK8C);
            if (xy8q < 0) xy8q = sH6B.length;

            //liguoqinjim
            var lResult = sH6B.substring(bbK8C, xy8q) || "";
            console.log("liguoqinjim cEc9T result1:" + sH6B);
            console.log("liguoqinjim cEc9T result2:" + bbK8C);
            console.log("liguoqinjim cEc9T result3:" + xy8q);
            console.log("liguoqinjim cEc9T result:" + lResult);

            return lResult
        };
        return function (V0x, j9a) {
            if (j9a === undefined){ 
                console.log("liguoqinjim return j9a undefined");
                return cEc9T(V0x);
            }else{
                console.log("liguoqinjim return j9a :" + j9a);
            }
            if (u.fD2x(j9a)) {
                if (!!j9a) {
                    document.cookie = V0x + "=" + j9a + ";";
                    return j9a
                }
                j9a = {expires: -100}
            }
            j9a = j9a || o;
            var sH6B = V0x + "=" + (j9a.value || "") + ";";
            delete j9a.value;
            if (j9a.expires !== undefined) {
                cZ1x.setTime(cEe9V + j9a.expires * bme1x);
                j9a.expires = cZ1x.toGMTString()
            }
            sH6B += u.vb7U(j9a, ";");
            document.cookie = sH6B
        }
    }()
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, iw3x = c9h("nej.c"), en1x = c9h("nej.g"), a8i = c9h("nej.e"), v9m = c9h("nej.j"),
        I9z = c9h("nej.ut"), O9F = c9h("nej.ut.j"), k9b = c9h("nej.u"), b9i;
    if (!!O9F.JX2x) return;
    O9F.JX2x = NEJ.C();
    b9i = O9F.JX2x.N9E(I9z.cK0x);
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.pE5J = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.pE5J, e9f);
        var Di0x = iw3x.B9s("csrf");
        if ((/^\/[^\/]/.test(this.pE5J.url) || this.pE5J.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Di0x.cookie && !!Di0x.param) {
            var bv0x = encodeURIComponent(Di0x.param) + "=" + encodeURIComponent(v9m.gz2x(Di0x.cookie) || ""),
                VI6C = this.pE5J.url.indexOf("?") < 0 ? "?" : "&";
            this.pE5J.url += VI6C + bv0x
        }
        this.bbH8z = e9f.headers || {};
        var bo0x = this.bbH8z[en1x.zU9L];
        if (bo0x == null) this.bbH8z[en1x.zU9L] = en1x.ciz4D
    };
    b9i.bC0x = function () {
        this.bF0x();
        delete this.AE9v;
        delete this.pE5J;
        delete this.bbH8z
    };
    b9i.cEb9S = function (bo0x) {
        var bz0x = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.pE5J.noescape) {
            return k9b.AU9L(bz0x, bo0x)
        } else {
            return bo0x
        }
    };
    b9i.uL7E = function (d9g) {
        var ey1x = d9g.status;
        if (ey1x == -1) {
            this.z9q("onerror", {code: en1x.bCJ5O, message: "请求[" + this.pE5J.url + "]超时！"});
            return
        }
        if (("" + ey1x).indexOf("2") != 0) {
            this.z9q("onerror", {
                data: ey1x,
                code: en1x.biR0x,
                message: "服务器返回异常状态[" + ey1x + "]!",
                extData: d9g.result
            });
            return
        }
        this.z9q("onload", a8i.cpk6e(this.cEb9S(d9g.result), this.pE5J.type))
    };
    b9i.cq0x = br0x;
    b9i.bpN2x = function (j9a) {
        var X0x = this.pE5J.url;
        if (!X0x) {
            this.z9q("onerror", {code: en1x.bwY4c, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.pE5J.data = j9a == null ? null : j9a;
            var d9g = {request: this.pE5J, headers: this.bbH8z};
            try {
                this.z9q("onbeforerequest", d9g)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cq0x(d9g)
        } catch (e) {
            this.z9q("onerror", {code: en1x.biR0x, message: "请求[" + X0x + "]失败:" + e.message + "！"})
        }
        return this
    };
    b9i.kl3x = br0x
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, be0x = c9h("nej.h"), en1x = c9h("nej.g"), k9b = c9h("nej.u"), O9F = c9h("nej.ut.j"),
        R9I = {}, Nv3x;
    if (!!O9F.bbF8x) return;
    O9F.bbF8x = NEJ.C();
    Nv3x = O9F.bbF8x.N9E(O9F.JX2x);
    Nv3x.bC0x = function () {
        this.bF0x();
        window.clearTimeout(this.ef1x);
        delete this.ef1x;
        try {
            this.sp6j.onreadystatechange = br0x;
            this.sp6j.abort()
        } catch (e) {
        }
        delete this.sp6j
    };
    Nv3x.cq0x = function () {
        var cEa9R = function (D9u, K9B) {
            this.sp6j.setRequestHeader(K9B, D9u)
        };
        return function (e9f) {
            var gm2x = e9f.request, oX5c = e9f.headers;
            this.sp6j = be0x.bqZ2x();
            if (oX5c[en1x.zU9L] === en1x.GS1x) {
                delete oX5c[en1x.zU9L];
                this.sp6j.upload.onprogress = this.gs2x.f9e(this, 1);
                if (gm2x.data.tagName === "FORM") gm2x.data = new FormData(gm2x.data)
            }
            this.sp6j.onreadystatechange = this.gs2x.f9e(this, 2);
            if (gm2x.timeout != 0) {
                this.ef1x = window.setTimeout(this.gs2x.f9e(this, 3), gm2x.timeout)
            }
            this.sp6j.open(gm2x.method, gm2x.url, !gm2x.sync);
            k9b.eH1x(oX5c, cEa9R, this);
            if (!!this.pE5J.cookie && "withCredentials" in this.sp6j) this.sp6j.withCredentials = !0;
            this.sp6j.send(gm2x.data)
        }
    }();
    Nv3x.gs2x = function (u9l) {
        switch (u9l) {
            case 1:
                this.z9q("onuploading", arguments[1]);
                break;
            case 2:
                if (this.sp6j.readyState == 4) this.uL7E({
                    status: this.sp6j.status,
                    result: this.sp6j.responseText || ""
                });
                break;
            case 3:
                this.uL7E({status: -1});
                break
        }
    };
    Nv3x.kl3x = function () {
        this.uL7E({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Ny3x = {}, bbD8v = [], bVK1x = /\s+/g, gK2x = +(new Date), JY2x, bR0x, hI2x;
    var GC1x = function () {
        var gF2x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, kp3x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Fi0x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bsQ3x = /^new\s+/,
            cDW9N = /['"]/;
        var cDS9J = function (D9u) {
            if (gF2x.test(D9u)) return;
            D9u = D9u.split(".")[0].trim();
            if (!D9u || cDW9N.test(D9u)) return;
            D9u = D9u.replace(bsQ3x, "");
            try {
                if (Fi0x.test(D9u)) return;
                hI2x[D9u] = 1
            } catch (e) {
            }
        };
        return function (bo0x) {
            bo0x = bo0x || "";
            if (!bo0x || gF2x.test(bo0x)) return;
            var bs0x = bo0x.split(kp3x);
            for (var i = 0, l = bs0x.length; i < l; i++) cDS9J(bs0x[i])
        }
    }();
    var cDR9I = function (dL1x) {
        if (dL1x[2] != "in") throw"bad for loop statement: " + dL1x.join(" ");
        bbD8v.push(dL1x[1]);
        GC1x(dL1x[3]);
        return "var __HASH__" + dL1x[1] + " = " + dL1x[3] + "," + dL1x[1] + "," + dL1x[1] + "_count=0;" + "if (!!__HASH__" + dL1x[1] + ")" + "for(var " + dL1x[1] + "_key in __HASH__" + dL1x[1] + "){" + dL1x[1] + " = __HASH__" + dL1x[1] + "[" + dL1x[1] + "_key];" + "if (typeof(" + dL1x[1] + ')=="function") continue;' + dL1x[1] + "_count++;"
    };
    var cDL9C = function () {
        var dL1x = bbD8v[bbD8v.length - 1];
        return "}; if(!__HASH__" + dL1x + "||!" + dL1x + "_count){"
    };
    var cDI9z = function () {
        bbD8v.pop();
        return "};"
    };
    var cDH9y = function (dL1x) {
        if (dL1x[2] != "as") throw"bad for list loop statement: " + dL1x.join(" ");
        var NP3x = dL1x[1].split("..");
        if (NP3x.length > 1) {
            GC1x(NP3x[0]);
            GC1x(NP3x[1]);
            return "for(var " + dL1x[3] + "," + dL1x[3] + "_index=0," + dL1x[3] + "_beg=" + NP3x[0] + "," + dL1x[3] + "_end=" + NP3x[1] + "," + dL1x[3] + "_length=parseInt(" + dL1x[3] + "_end-" + dL1x[3] + "_beg+1);" + dL1x[3] + "_index<" + dL1x[3] + "_length;" + dL1x[3] + "_index++){" + dL1x[3] + " = " + dL1x[3] + "_beg+" + dL1x[3] + "_index;"
        } else {
            GC1x(dL1x[1]);
            return "for(var __LIST__" + dL1x[3] + " = " + dL1x[1] + "," + dL1x[3] + "," + dL1x[3] + "_index=0," + dL1x[3] + "_length=__LIST__" + dL1x[3] + ".length;" + dL1x[3] + "_index<" + dL1x[3] + "_length;" + dL1x[3] + "_index++){" + dL1x[3] + " = __LIST__" + dL1x[3] + "[" + dL1x[3] + "_index];"
        }
    };
    var cDE9v = function (dL1x) {
        if (!dL1x || !dL1x.length) return;
        dL1x.shift();
        var V0x = dL1x[0].split("(")[0];
        return "var " + V0x + " = function" + dL1x.join("").replace(V0x, "") + "{var __OUT=[];"
    };
    var cDB9s = function (dL1x) {
        if (!dL1x[1]) throw"bad include statement: " + dL1x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var buS3x = function (kt3x, dL1x) {
        GC1x(dL1x.slice(1).join(" "));
        return kt3x
    };
    var cDA9r = function (dL1x) {
        return buS3x("if(", dL1x)
    };
    var cDv9m = function (dL1x) {
        return buS3x("}else if(", dL1x)
    };
    var cDu9l = function (dL1x) {
        return buS3x("var ", dL1x)
    };
    bR0x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cDA9r, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cDv9m, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cDR9I, pmin: 3},
            forelse: {pfix: cDL9C},
            "/for": {pfix: cDI9z},
            list: {pfix: cDH9y, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cDu9l, sfix: ";"},
            macro: {pfix: cDE9v},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    JY2x = !0
                }
            },
            "/trim": {
                pfix: function () {
                    JY2x = null
                }
            },
            inline: {pfix: cDB9s, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (kt3x) {
                return (kt3x || "") + "" + gK2x
            }, "default": function (D9u, kh3x) {
                return D9u || kh3x
            }
        }
    };
    var cDr9i = function () {
        var cDq9h = /\\([\{\}])/g;
        return function (bo0x, jH3x) {
            bo0x = bo0x.replace(cDq9h, "$1");
            var dL1x = bo0x.slice(1, -1).split(bVK1x), bg0x = bR0x.def[dL1x[0]];
            if (!bg0x) {
                bbn8f(bo0x, jH3x);
                return
            }
            if (!!bg0x.pmin && bg0x.pmin >= dL1x.length) throw"Statement needs more parameters:" + bo0x;
            jH3x.push(!!bg0x.pfix && typeof bg0x.pfix != "string" ? bg0x.pfix(dL1x) : bg0x.pfix || "");
            if (!!bg0x.sfix) {
                if (dL1x.length <= 1) {
                    if (!!bg0x.pdft) jH3x.push(bg0x.pdft)
                } else {
                    for (var i = 1, l = dL1x.length; i < l; i++) {
                        if (i > 1) jH3x.push(" ");
                        jH3x.push(dL1x[i])
                    }
                }
                jH3x.push(bg0x.sfix)
            }
        }
    }();
    var bVB1x = function (Ka2x, jH3x) {
        if (!Ka2x || !Ka2x.length) return;
        if (Ka2x.length == 1) {
            var bxe4i = Ka2x.pop();
            GC1x(bxe4i);
            jH3x.push(bxe4i == "" ? '""' : bxe4i);
            return
        }
        var bxf4j = Ka2x.pop().split(":");
        jH3x.push("__MDF['" + bxf4j.shift() + "'](");
        bVB1x(Ka2x, jH3x);
        if (bxf4j.length > 0) {
            var bf0x = bxf4j.join(":");
            GC1x(bf0x);
            jH3x.push("," + bf0x)
        }
        jH3x.push(")")
    };
    var bbn8f = function (bo0x, jH3x) {
        if (!bo0x) return;
        var xr8j = bo0x.split("\n");
        if (!xr8j || !xr8j.length) return;
        for (var i = 0, l = xr8j.length, hA2x; i < l; i++) {
            hA2x = xr8j[i];
            if (!!JY2x) {
                hA2x = hA2x.trim();
                if (!hA2x) continue
            }
            cDi9Z(hA2x, jH3x);
            if (!!JY2x && i < l - 1) jH3x.push("__OUT.push('\\n');")
        }
    };
    var cDi9Z = function () {
        var cDe9V = /\|\|/g, cCV9M = /#@@#/g;
        return function (bo0x, jH3x) {
            var Oj3x = "}", Ok3x = -1, bq0x = bo0x.length, wR8J, fT2x, Kk2x, baQ8I, Ot3x;
            while (Ok3x + Oj3x.length < bq0x) {
                wR8J = "${";
                fT2x = "}";
                Kk2x = bo0x.indexOf(wR8J, Ok3x + Oj3x.length);
                if (Kk2x < 0) break;
                if (bo0x.charAt(Kk2x + 2) == "%") {
                    wR8J = "${%";
                    fT2x = "%}"
                }
                baQ8I = bo0x.indexOf(fT2x, Kk2x + wR8J.length);
                if (baQ8I < 0) break;
                baM8E(bo0x.substring(Ok3x + Oj3x.length, Kk2x), jH3x);
                Ot3x = bo0x.substring(Kk2x + wR8J.length, baQ8I).replace(cDe9V, "#@@#").split("|");
                for (var i = 0, l = Ot3x.length; i < l; Ot3x[i] = Ot3x[i].replace(cCV9M, "||"), i++) ;
                jH3x.push("__OUT.push(");
                bVB1x(Ot3x, jH3x);
                jH3x.push(");");
                Oj3x = fT2x;
                Ok3x = baQ8I
            }
            baM8E(bo0x.substring(Ok3x + Oj3x.length), jH3x)
        }
    }();
    var baM8E = function () {
        var bz0x = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cCT9K = function (bo0x) {
            return (bo0x || "").replace(bz0x.r, function ($1) {
                return bz0x[$1] || $1
            })
        };
        return function (bo0x, jH3x) {
            if (!bo0x) return;
            jH3x.push("__OUT.push('" + cCT9K(bo0x) + "');")
        }
    }();
    var cCS9J = function () {
        var cCR9I = /\t/g, cCQ9H = /\n/g, cCM9D = /\r\n?/g;
        var bVs1x = function (bo0x, wR8J) {
            var r9i = bo0x.indexOf("}", wR8J + 1);
            while (bo0x.charAt(r9i - 1) == "\\") {
                r9i = bo0x.indexOf("}", r9i + 1)
            }
            return r9i
        };
        var cCH9y = function () {
            var bs0x = [], EZ0x = arguments[0];
            for (var x in EZ0x) {
                x = (x || "").trim();
                if (!x) continue;
                bs0x.push(x + "=$v('" + x + "')")
            }
            return bs0x.length > 0 ? "var " + bs0x.join(",") + ";" : ""
        };
        return function (bo0x) {
            hI2x = {};
            bo0x = bo0x.replace(cCM9D, "\n").replace(cCR9I, "    ");
            var rY6S = ["if(!__CTX) return '';", ""];
            rY6S.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            rY6S.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            rY6S.push("__OUT=[];");
            var Fg0x = -1, bq0x = bo0x.length;
            var nz4D, Ks2x, OK4O, OM4Q, AL9C, ON4R, biE0x, OQ4U;
            while (Fg0x + 1 < bq0x) {
                nz4D = Fg0x;
                nz4D = bo0x.indexOf("{", nz4D + 1);
                while (nz4D >= 0) {
                    Ks2x = bVs1x(bo0x, nz4D);
                    OK4O = bo0x.substring(nz4D, Ks2x);
                    OM4Q = OK4O.match(bR0x.blk);
                    if (!!OM4Q) {
                        AL9C = OM4Q[1].length + 1;
                        ON4R = bo0x.indexOf("}", nz4D + AL9C);
                        if (ON4R >= 0) {
                            biE0x = ON4R - nz4D - AL9C <= 0 ? "{/" + OM4Q[1] + "}" : OK4O.substr(AL9C + 1);
                            AL9C = bo0x.indexOf(biE0x, ON4R + 1);
                            if (AL9C >= 0) {
                                bbn8f(bo0x.substring(Fg0x + 1, nz4D), rY6S);
                                OQ4U = bo0x.substring(ON4R + 1, AL9C);
                                switch (OM4Q[1]) {
                                    case"cdata":
                                        baM8E(OQ4U, rY6S);
                                        break;
                                    case"minify":
                                        baM8E(OQ4U.replace(cCQ9H, " ").replace(bVK1x, " "), rY6S);
                                        break;
                                    case"eval":
                                        if (!!OQ4U) rY6S.push("__OUT.push((function(){" + OQ4U + "})());");
                                        break
                                }
                                nz4D = Fg0x = AL9C + biE0x.length - 1
                            }
                        }
                    } else if (bo0x.charAt(nz4D - 1) != "$" && bo0x.charAt(nz4D - 1) != "\\" && OK4O.substr(OK4O.charAt(1) == "/" ? 2 : 1).search(bR0x.tag) == 0) {
                        break
                    }
                    nz4D = bo0x.indexOf("{", nz4D + 1)
                }
                if (nz4D < 0) break;
                Ks2x = bVs1x(bo0x, nz4D);
                if (Ks2x < 0) break;
                bbn8f(bo0x.substring(Fg0x + 1, nz4D), rY6S);
                cDr9i(bo0x.substring(nz4D, Ks2x + 1), rY6S);
                Fg0x = Ks2x
            }
            bbn8f(bo0x.substring(Fg0x + 1), rY6S);
            rY6S.push(';return __OUT.join("");');
            rY6S[1] = cCH9y(hI2x);
            hI2x = null;
            return new Function("__CTX", "__MDF", rY6S.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gK2x
    };
    TrimPath.merge = function () {
        var OS4W = {};
        TrimPath.dump = function () {
            return {func: OS4W, text: Ny3x}
        };
        return function (fl2x, j9a, jU3x) {
            try {
                j9a = j9a || {};
                if (!OS4W[fl2x] && !Ny3x[fl2x]) return "";
                if (!OS4W[fl2x]) {
                    OS4W[fl2x] = cCS9J(Ny3x[fl2x]);
                    delete Ny3x[fl2x]
                }
                if (!!jU3x) {
                    for (var x in bR0x.ext) if (!jU3x[x]) jU3x[x] = bR0x.ext[x]
                }
                return OS4W[fl2x](j9a, jU3x || bR0x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cCG9x = +(new Date);
        return function (bo0x, fl2x) {
            if (!bo0x) return "";
            fl2x = fl2x || "ck_" + cCG9x++;
            Ny3x[fl2x] = bo0x;
            return fl2x
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), eA1x = {}, bVr1x = {};
    a8i.Ky2x = TrimPath.seed;
    a8i.cd0x = function () {
        var bVq1x = function (C9t) {
            return !a8i.iF3x ? "" : a8i.iF3x(C9t)
        };
        return function (fl2x, j9a, jU3x) {
            j9a = NEJ.X(NEJ.X({}, bVr1x), j9a);
            j9a.inline = bVq1x;
            jU3x = NEJ.X(NEJ.X({}, eA1x), jU3x);
            jU3x.rand = k9b.nW4a;
            jU3x.format = k9b.hY2x;
            jU3x.escape = k9b.dG1x;
            jU3x.inline = bVq1x;
            return TrimPath.merge(fl2x, j9a, jU3x)
        }
    }();
    a8i.eC1x = function (bo0x, cCD9u) {
        if (!bo0x) return "";
        var fl2x, F9w = a8i.B9s(bo0x);
        if (!!F9w) {
            fl2x = F9w.id;
            bo0x = F9w.value || F9w.innerText;
            if (!cCD9u) a8i.cM0x(F9w)
        }
        return TrimPath.parse(bo0x, fl2x)
    };
    a8i.dB1x = function (bH0x, fl2x, j9a, jU3x) {
        bH0x = a8i.B9s(bH0x);
        if (!!bH0x) bH0x.innerHTML = a8i.cd0x(fl2x, j9a, jU3x);
        return this
    };
    a8i.cEW9N = function (bz0x) {
        NEJ.X(eA1x, bz0x)
    };
    a8i.cCy9p = function (bz0x) {
        NEJ.X(bVr1x, bz0x)
    };
    c9h("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dw1x = NEJ.P("nej.p"), O9F = window, lo4s = dw1x.In1x, bVm1x = lo4s.ipad || lo4s.iphone;
    if (!bVm1x && !!O9F.requestAnimationFrame && !!O9F.cancelRequestAnimationFrame) return;
    var kt3x = dw1x.dt1x.prefix.pro;
    if (!bVm1x && !!O9F[kt3x + "RequestAnimationFrame"] && !!O9F[kt3x + "CancelRequestAnimationFrame"]) {
        O9F.requestAnimationFrame = O9F[kt3x + "RequestAnimationFrame"];
        O9F.cancelRequestAnimationFrame = O9F[kt3x + "CancelRequestAnimationFrame"];
        return
    }
    var bam8e = lo4s.desktop ? 80 : lo4s.ios ? 50 : 30;
    O9F.requestAnimationFrame = function (cA0x) {
        return window.setTimeout(function () {
            try {
                cA0x(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / bam8e)
    };
    O9F.cancelRequestAnimationFrame = function (C9t) {
        window.clearTimeout(C9t);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, k9b = c9h("nej.u"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), be0x = c9h("nej.h"),
        cY1x = c9h("nej.x"), bak8c = c9h("nej.ut.j.cb"), gg2x;
    if (!!a8i.rV6P) return;
    a8i.rV6P = cY1x.rV6P = function () {
        var R9I = {}, gF2x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d9g) {
            var C9t = decodeURIComponent(d9g.target), u9l = d9g.type.toLowerCase();
            var dy1x = R9I[C9t + "-on" + u9l];
            if (!!dy1x) {
                try {
                    dy1x(d9g)
                } catch (e) {
                }
                return
            }
            var cQ0x = R9I[C9t + "-tgt"];
            if (!!cQ0x && gF2x.test(u9l)) {
                bVi1x(cQ0x, d9g)
            }
        };
        var bkg0x = function (e9f) {
            var bH0x = a8i.B9s(e9f.parent) || document.body, dW1x = a8i.cd0x(gg2x, e9f);
            bH0x.insertAdjacentHTML(!e9f.hidden ? "beforeEnd" : "afterBegin", dW1x)
        };
        var bVi1x = function (C9t, d9g) {
            var u9l = d9g.type.toLowerCase();
            requestAnimationFrame(function () {
                h9c.z9q(C9t, u9l)
            })
        };
        var cCq9h = function (hW2x) {
            return !!hW2x && !!hW2x.inited && !!hW2x.inited()
        };
        var PA4E = function (C9t) {
            var bs0x = [document.embeds[C9t], a8i.B9s(C9t), document[C9t], window[C9t]], r9i = k9b.eH1x(bs0x, cCq9h),
                hW2x = bs0x[r9i], bkG1x = C9t + "-count";
            R9I[bkG1x]++;
            if (!!hW2x || R9I[bkG1x] > 100) {
                R9I[C9t](hW2x);
                delete R9I[C9t];
                delete R9I[bkG1x];
                return
            }
            window.setTimeout(PA4E.f9e(null, C9t), 300)
        };
        var cCp9g = function (e9f) {
            var C9t = e9f.id, cm0x = e9f.params;
            if (!cm0x) {
                cm0x = {};
                e9f.params = cm0x
            }
            var hI2x = cm0x.flashvars || "";
            hI2x += (!hI2x ? "" : "&") + ("id=" + C9t);
            if (!e9f.hidden && (!!e9f.target || be0x.bet9k(cm0x.wmode))) {
                var hO2x = a8i.lD4H(e9f.target) || a8i.lD4H(e9f.parent), baf8X = k9b.bbY8Q();
                bak8c["cb" + baf8X] = bVi1x.f9e(null, hO2x);
                hI2x += "&onevent=nej.ut.j.cb.cb" + baf8X;
                R9I[C9t + "-tgt"] = hO2x
            }
            cm0x.flashvars = hI2x;
            k9b.eH1x(e9f, function (D9u, K9B) {
                if (k9b.gJ2x(D9u) && K9B != "onready") {
                    R9I[C9t + "-" + K9B] = D9u
                }
            })
        };
        return function (e9f) {
            e9f = NEJ.X({}, e9f);
            if (!e9f.src) return;
            var C9t = "flash_" + k9b.bbY8Q();
            e9f.id = C9t;
            cCp9g(e9f);
            bkg0x(e9f);
            if (!e9f.onready) return;
            R9I[C9t] = e9f.onready;
            R9I[C9t + "-count"] = 0;
            PA4E(C9t)
        }
    }();
    gg2x = a8i.eC1x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cY1x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, iw3x = c9h("nej.c"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), O9F = c9h("nej.ut.j"),
        bak8c = c9h("nej.ut.j.cb"), R9I = {}, gK2x = +(new Date), blJ1x;
    if (!!O9F.blL1x) return;
    bak8c["ld" + gK2x] = function (K9B, cJ0x) {
        var jP3x = R9I[K9B];
        if (!jP3x) return;
        delete R9I[K9B];
        jP3x.uL7E({status: 200, result: cJ0x})
    };
    bak8c["er" + gK2x] = function (K9B, ey1x) {
        var jP3x = R9I[K9B];
        if (!jP3x) return;
        delete R9I[K9B];
        jP3x.uL7E({status: ey1x || 0})
    };
    O9F.blL1x = NEJ.C();
    blJ1x = O9F.blL1x.N9E(O9F.JX2x);
    blJ1x.cq0x = function (e9f) {
        var hW2x = R9I.flash;
        if (k9b.eJ1x(hW2x)) {
            hW2x.push(this.cq0x.f9e(this, e9f));
            return
        }
        if (!hW2x) {
            R9I.flash = [this.cq0x.f9e(this, e9f)];
            a8i.rV6P({
                hidden: !0, src: iw3x.B9s("ajax.swf"), onready: function (hW2x) {
                    if (!hW2x) return;
                    var i9b = R9I.flash;
                    R9I.flash = hW2x;
                    k9b.nj4n(i9b, function (dy1x) {
                        try {
                            dy1x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.AE9v = "swf-" + k9b.nW4a();
        R9I[this.AE9v] = this;
        var j9a = NEJ.EX({url: "", data: null, method: "GET"}, e9f.request);
        j9a.key = this.AE9v;
        j9a.headers = e9f.headers;
        j9a.onerror = "nej.ut.j.cb.er" + gK2x;
        j9a.onloaded = "nej.ut.j.cb.ld" + gK2x;
        var bVf1x = iw3x.cti7b(j9a.url);
        if (!!bVf1x) j9a.policyURL = bVf1x;
        hW2x.request(j9a)
    };
    blJ1x.kl3x = function () {
        delete R9I[this.AE9v];
        this.uL7E({status: 0});
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, be0x = c9h("nej.h");
    be0x.bVe1x = function () {
        var df1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kF3x) {
            kF3x = kF3x || "";
            if (df1x.test(kF3x)) return RegExp.$1;
            return "*"
        }
    }();
    be0x.bmf1x = function (j9a) {
        return j9a
    };
    be0x.bmg1x = function (bab8T, e9f) {
        if (!bab8T.postMessage) return;
        e9f = e9f || bb0x;
        bab8T.postMessage(be0x.bmf1x(e9f.data), be0x.bVe1x(e9f.origin))
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), O9F = c9h("nej.ut"), b9i;
    if (!!O9F.fJ2x) return;
    O9F.fJ2x = NEJ.C();
    b9i = O9F.fJ2x.N9E(O9F.cK0x);
    b9i.cy0x = function () {
        this.S0x = {};
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.PF4J = a8i.B9s(e9f.element) || window;
        this.bVd1x(e9f.event);
        this.cCe9V();
        this.z9q("oninit")
    };
    b9i.bC0x = function () {
        var Fq0x = function (D9u, K9B, bz0x) {
            if (!k9b.eJ1x(D9u)) {
                k9b.bbZ8R(this.PF4J, K9B)
            }
            delete bz0x[K9B]
        };
        return function () {
            this.bF0x();
            k9b.eH1x(this.S0x, Fq0x, this);
            delete this.PF4J
        }
    }();
    b9i.ZX8P = function (F9w, u9l) {
        F9w = a8i.B9s(F9w);
        return F9w == this.PF4J && (!u9l || !!this.S0x["on" + u9l])
    };
    b9i.bVd1x = function (d9g) {
        if (k9b.fD2x(d9g)) {
            var V0x = "on" + d9g;
            if (!this.S0x[V0x]) {
                this.S0x[V0x] = this.cBW9N.f9e(this, d9g)
            }
            this.bVb1x(d9g);
            return
        }
        if (k9b.eJ1x(d9g)) {
            k9b.bd0x(d9g, this.bVd1x, this)
        }
    };
    b9i.bVb1x = function (u9l) {
        var d9g = "on" + u9l, dy1x = this.PF4J[d9g], bUY1x = this.S0x[d9g];
        if (dy1x != bUY1x) {
            this.ZV8N(u9l);
            if (!!dy1x && dy1x != br0x) this.bUX1x(u9l, dy1x);
            this.PF4J[d9g] = bUY1x
        }
    };
    b9i.bUX1x = function (u9l, dy1x, cBP9G) {
        var i9b = this.S0x[u9l];
        if (!i9b) {
            i9b = [];
            this.S0x[u9l] = i9b
        }
        if (k9b.gJ2x(dy1x)) {
            !cBP9G ? i9b.push(dy1x) : i9b.unshift(dy1x)
        }
    };
    b9i.ZV8N = function (u9l, dy1x) {
        var i9b = this.S0x[u9l];
        if (!i9b || !i9b.length) return;
        if (!dy1x) {
            delete this.S0x[u9l];
            return
        }
        k9b.nj4n(i9b, function (D9u, r9i, KI2x) {
            if (dy1x === D9u) {
                KI2x.splice(r9i, 1);
                return !0
            }
        })
    };
    b9i.cBW9N = function (u9l, d9g) {
        d9g = d9g || {noargs: !0};
        d9g.type = u9l;
        this.z9q("ondispatch", d9g);
        if (!!d9g.stopped) return;
        k9b.bd0x(this.S0x[u9l], function (dy1x) {
            try {
                dy1x(d9g)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b9i.cCe9V = function () {
        var bpf2x = function (d9g) {
            var bf0x = d9g.args, u9l = bf0x[1].toLowerCase();
            if (this.ZX8P(bf0x[0], u9l)) {
                d9g.stopped = !0;
                this.bVb1x(u9l);
                this.bUX1x(u9l, bf0x[2], bf0x[3]);
                this.z9q("oneventadd", {type: u9l, listener: bf0x[2]})
            }
        };
        var cBM9D = function (d9g) {
            var bf0x = d9g.args, u9l = bf0x[1].toLowerCase();
            if (this.ZX8P(bf0x[0], u9l)) {
                d9g.stopped = !0;
                this.ZV8N(u9l, bf0x[2])
            }
        };
        var bkB1x = function (d9g) {
            var bf0x = d9g.args, u9l = (bf0x[1] || "").toLowerCase();
            if (this.ZX8P(bf0x[0])) {
                if (!!u9l) {
                    this.ZV8N(u9l);
                    return
                }
                k9b.eH1x(this.S0x, function (D9u, K9B) {
                    if (k9b.eJ1x(D9u)) {
                        this.ZV8N(K9B)
                    }
                }, this)
            }
        };
        var cBK9B = function (d9g) {
            var bf0x = d9g.args, u9l = bf0x[1].toLowerCase();
            if (this.ZX8P(bf0x[0], u9l)) {
                d9g.stopped = !0;
                bf0x[0]["on" + u9l].apply(bf0x[0], bf0x.slice(2))
            }
        };
        return function () {
            if (!!this.cBJ9A) return;
            this.cBJ9A = true;
            h9c.s9j = h9c.s9j.eG1x(bpf2x.f9e(this));
            h9c.mI4M = h9c.mI4M.eG1x(cBM9D.f9e(this));
            h9c.hi2x = h9c.hi2x.eG1x(bkB1x.f9e(this));
            h9c.z9q = h9c.z9q.eG1x(cBK9B.f9e(this))
        }
    }()
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p"), be0x = c9h("nej.h"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        I9z = c9h("nej.ut");
    if (O9F.na4e.trident) return;
    if (!!window.postMessage) {
        be0x.bmf1x = be0x.bmf1x.eG1x(function (d9g) {
            d9g.stopped = !0;
            d9g.value = JSON.stringify(d9g.args[0])
        });
        return
    }
    var K9B = "MSG|", ki3x = [];
    var cBD9u = function () {
        var V0x = unescape(window.name || "").trim();
        if (!V0x || V0x.indexOf(K9B) != 0) return;
        window.name = "";
        var m9d = k9b.VG6A(V0x.replace(K9B, ""), "|"), kF3x = (m9d.origin || "").toLowerCase();
        if (!!kF3x && kF3x != "*" && location.href.toLowerCase().indexOf(kF3x) != 0) return;
        h9c.z9q(window, "message", {
            data: JSON.parse(m9d.data || "null"),
            source: window.frames[m9d.self] || m9d.self,
            origin: be0x.bVe1x(m9d.ref || document.referrer)
        })
    };
    var cBC9t = function () {
        var ZJ7C;
        var cBB9s = function (bz0x, r9i, i9b) {
            if (k9b.dj1x(ZJ7C, bz0x.w) < 0) {
                ZJ7C.push(bz0x.w);
                i9b.splice(r9i, 1);
                bz0x.w.name = bz0x.d
            }
        };
        return function () {
            ZJ7C = [];
            k9b.nj4n(ki3x, cBB9s);
            ZJ7C = null
        }
    }();
    be0x.bmg1x = function () {
        var cBv9m = function (j9a) {
            var m9d = {};
            j9a = j9a || bb0x;
            m9d.origin = j9a.origin || "";
            m9d.ref = location.href;
            m9d.self = j9a.source;
            m9d.data = JSON.stringify(j9a.data);
            return K9B + k9b.vb7U(m9d, "|", !0)
        };
        return be0x.bmg1x.eG1x(function (d9g) {
            d9g.stopped = !0;
            var bf0x = d9g.args;
            ki3x.unshift({w: bf0x[0], d: escape(cBv9m(bf0x[1]))})
        })
    }();
    I9z.fJ2x.A9r({element: window, event: "message"});
    window.setInterval(cBC9t, 100);
    window.setInterval(cBD9u, 20)
})();
(function () {
    var c9h = NEJ.P, be0x = c9h("nej.h"), a8i = c9h("nej.e"), v9m = c9h("nej.j");
    v9m.cBu9l = function () {
        var gL2x = window.name || "_parent", cBj9a = {gx2x: window.top, gL2x: window, bH0x: window.parent};
        return function (cQ0x, e9f) {
            if (typeof cQ0x == "string") {
                cQ0x = cBj9a[cQ0x] || window.frames[cQ0x];
                if (!cQ0x) return this
            }
            var j9a = NEJ.X({origin: "*", source: gL2x}, e9f);
            be0x.bmg1x(cQ0x, j9a);
            return this
        }
    }()
})();
(function () {
    var c9h = NEJ.P, iw3x = c9h("nej.c"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), O9F = c9h("nej.ut.j"), R9I = {}, ZF7y;
    if (!!O9F.bqu2x) return;
    O9F.bqu2x = NEJ.C();
    ZF7y = O9F.bqu2x.N9E(O9F.JX2x);
    ZF7y.cy0x = function () {
        var eZ2x = "NEJ-AJAX-DATA:", Eo0x = !1;
        var bqV2x = function (d9g) {
            var j9a = d9g.data;
            if (j9a.indexOf(eZ2x) != 0) return;
            j9a = JSON.parse(j9a.replace(eZ2x, ""));
            var jP3x = R9I[j9a.key];
            if (!jP3x) return;
            delete R9I[j9a.key];
            j9a.result = decodeURIComponent(j9a.result || "");
            jP3x.uL7E(j9a)
        };
        var bqY2x = function () {
            if (!Eo0x) {
                Eo0x = !0;
                h9c.s9j(window, "message", bqV2x)
            }
        };
        return function () {
            this.cE0x();
            bqY2x()
        }
    }();
    ZF7y.cq0x = function (e9f) {
        var gm2x = e9f.request, jP3x = iw3x.cjy4C(gm2x.url), em1x = R9I[jP3x];
        if (k9b.eJ1x(em1x)) {
            em1x.push(this.cq0x.f9e(this, e9f));
            return
        }
        if (!em1x) {
            R9I[jP3x] = [this.cq0x.f9e(this, e9f)];
            a8i.bdX9O({
                src: jP3x, visible: !1, onload: function (d9g) {
                    var i9b = R9I[jP3x];
                    R9I[jP3x] = h9c.W0x(d9g).contentWindow;
                    k9b.nj4n(i9b, function (dy1x) {
                        try {
                            dy1x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.AE9v = "frm-" + k9b.nW4a();
        R9I[this.AE9v] = this;
        var j9a = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, gm2x);
        j9a.key = this.AE9v;
        j9a.headers = e9f.headers;
        v9m.cBu9l(R9I[jP3x], {data: j9a})
    };
    ZF7y.kl3x = function () {
        delete R9I[this.AE9v];
        this.uL7E({status: 0});
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, en1x = c9h("nej.g"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), O9F = c9h("nej.ut.j"), R9I = {}, KT2x;
    if (!!O9F.bre2x) return;
    O9F.bre2x = NEJ.C();
    KT2x = O9F.bre2x.N9E(O9F.JX2x);
    KT2x.cy0x = function () {
        var eZ2x = "NEJ-UPLOAD-RESULT:", Eo0x = !1;
        var bqV2x = function (d9g) {
            var j9a = d9g.data;
            if (j9a.indexOf(eZ2x) != 0) return;
            j9a = JSON.parse(j9a.replace(eZ2x, ""));
            var jP3x = R9I[j9a.key];
            if (!jP3x) return;
            delete R9I[j9a.key];
            jP3x.uL7E(decodeURIComponent(j9a.result))
        };
        var bqY2x = function () {
            if (!Eo0x) {
                Eo0x = !0;
                h9c.s9j(window, "message", bqV2x)
            }
        };
        return function () {
            this.cE0x();
            bqY2x()
        }
    }();
    KT2x.bC0x = function () {
        this.bF0x();
        a8i.cM0x(this.brf2x);
        delete this.brf2x;
        window.clearTimeout(this.ef1x);
        delete this.ef1x
    };
    KT2x.uL7E = function (cJ0x) {
        var Q9H;
        try {
            Q9H = JSON.parse(cJ0x);
            this.z9q("onload", Q9H)
        } catch (e) {
            this.z9q("onerror", {code: en1x.bYt2x, message: cJ0x})
        }
    };
    KT2x.cq0x = function () {
        var cBe9V = function () {
            var mp4t, cJ0x;
            try {
                var mp4t = this.brf2x.contentWindow.document.body, cJ0x = mp4t.innerText || mp4t.textContent
            } catch (e) {
                return
            }
            this.uL7E(cJ0x)
        };
        var bsr3x = function (X0x, fe2x, sH6B) {
            v9m.bm0x(X0x, {
                type: "json",
                method: "POST",
                cookie: sH6B,
                mode: parseInt(fe2x) || 0,
                onload: function (j9a) {
                    if (!this.ef1x) return;
                    this.z9q("onuploading", j9a);
                    this.ef1x = window.setTimeout(bsr3x.f9e(this, X0x, fe2x, sH6B), 1e3)
                }.f9e(this),
                onerror: function (ca0x) {
                    if (!this.ef1x) return;
                    this.ef1x = window.setTimeout(bsr3x.f9e(this, X0x, fe2x, sH6B), 1e3)
                }.f9e(this)
            })
        };
        return function (e9f) {
            var gm2x = e9f.request, oX5c = e9f.headers, fh2x = gm2x.data, V0x = "fom-" + k9b.nW4a();
            R9I[V0x] = this;
            fh2x.target = V0x;
            fh2x.method = "POST";
            fh2x.enctype = en1x.GS1x;
            fh2x.encoding = en1x.GS1x;
            var X0x = fh2x.action || "", lN4R = X0x.indexOf("?") <= 0 ? "?" : "&";
            fh2x.action = X0x + lN4R + "_proxy_=form";
            this.brf2x = a8i.bdX9O({
                name: V0x, onload: function (d9g) {
                    var em1x = h9c.W0x(d9g);
                    h9c.s9j(em1x, "load", cBe9V.f9e(this));
                    fh2x.submit();
                    var bUR1x = (fh2x.nej_query || bb0x).value;
                    if (!bUR1x) return;
                    var fe2x = (fh2x.nej_mode || bb0x).value, sH6B = (fh2x.nej_cookie || bb0x).value == "true";
                    this.ef1x = window.setTimeout(bsr3x.f9e(this, bUR1x, fe2x, sH6B), 100)
                }.f9e(this)
            })
        }
    }();
    KT2x.kl3x = function () {
        this.z9q("onerror", {code: en1x.ceZ3x, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, be0x = c9h("nej.h"), O9F = c9h("nej.ut.j");
    be0x.bqZ2x = function () {
        return new XMLHttpRequest
    };
    be0x.bsR3x = function (fe2x, ZD7w, e9f) {
        var bz0x = !!ZD7w ? {2: O9F.bre2x} : {2: O9F.bqu2x, 3: O9F.blL1x};
        return (bz0x[fe2x] || O9F.bbF8x).A9r(e9f)
    }
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p"), be0x = c9h("nej.h");
    if (O9F.na4e.trident) return;
    be0x.bqZ2x = function () {
        var Vg6a = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cAZ9Q = function () {
            for (var i = 0, l = Vg6a.length; i < l; i++) {
                try {
                    return new ActiveXObject(Vg6a[i])
                } catch (e) {
                }
            }
            return null
        };
        return be0x.bqZ2x.eG1x(function (d9g) {
            if (!!window.XMLHttpRequest) return;
            d9g.stopped = !0;
            d9g.value = cAZ9Q()
        })
    }();
    be0x.bsR3x = function () {
        var GJ1x = {0: 2, 1: 3};
        return be0x.bsR3x.eG1x(function (d9g) {
            var bf0x = d9g.args, fe2x = bf0x[0] || 0;
            bf0x[0] = !!bf0x[1] ? 2 : GJ1x[fe2x] || fe2x
        })
    }()
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, be0x = c9h("nej.h"), en1x = c9h("nej.g"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), O9F = c9h("nej.ut.j"), om4q = {}, IO1x = br0x;
    v9m.kl3x = function (fl2x) {
        var R9I = om4q[fl2x];
        if (!R9I) return this;
        R9I.req.kl3x();
        return this
    };
    v9m.ZA7t = function (dZ1x) {
        IO1x = dZ1x || br0x;
        return this
    };
    v9m.bm0x = function () {
        var jC3x = (location.protocol + "//" + location.host).toLowerCase();
        var cAU8M = function (X0x) {
            var kF3x = k9b.cDh9Y(X0x);
            return !!kF3x && kF3x != jC3x
        };
        var cAT8L = function (oX5c) {
            return (oX5c || bb0x)[en1x.zU9L] == en1x.GS1x
        };
        var cAQ8I = function (e9f) {
            var ZD7w = cAT8L(e9f.headers);
            if (!cAU8M(e9f.url) && !ZD7w) return O9F.bbF8x.A9r(e9f);
            return be0x.bsR3x(e9f.mode, ZD7w, e9f)
        };
        var Fq0x = function (fl2x) {
            var R9I = om4q[fl2x];
            if (!R9I) return;
            if (!!R9I.req) R9I.req.T0x();
            delete om4q[fl2x]
        };
        var bUP1x = function (fl2x, u9l) {
            var R9I = om4q[fl2x];
            if (!R9I) return;
            Fq0x(fl2x);
            try {
                var d9g = {type: u9l, result: arguments[2]};
                IO1x(d9g);
                if (!d9g.stopped) (R9I[u9l] || br0x)(d9g.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var ze8W = function (fl2x, j9a) {
            bUP1x(fl2x, "onload", j9a)
        };
        var AZ9Q = function (fl2x, ca0x) {
            bUP1x(fl2x, "onerror", ca0x)
        };
        return function (X0x, e9f) {
            e9f = e9f || {};
            var fl2x = k9b.nW4a(), R9I = {onload: e9f.onload || br0x, onerror: e9f.onerror || br0x};
            om4q[fl2x] = R9I;
            e9f.onload = ze8W.f9e(null, fl2x);
            e9f.onerror = AZ9Q.f9e(null, fl2x);
            if (!!e9f.query) {
                var lN4R = X0x.indexOf("?") < 0 ? "?" : "&", bv0x = e9f.query;
                if (k9b.lv4z(bv0x)) bv0x = k9b.cD0x(bv0x);
                if (!!bv0x) X0x += lN4R + bv0x
            }
            e9f.url = X0x;
            R9I.req = cAQ8I(e9f);
            R9I.req.bpN2x(e9f.data);
            return fl2x
        }
    }();
    v9m.hV2x = function (fh2x, e9f) {
        var dM1x = {
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
        NEJ.EX(dM1x, e9f);
        dM1x.data = fh2x;
        dM1x.method = "POST";
        dM1x.timeout = 0;
        dM1x.headers[en1x.zU9L] = en1x.GS1x;
        return v9m.bm0x(fh2x.action, dM1x)
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, en1x = c9h("nej.g"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        O9F = c9h("nej.ut.j"), mK4O, gN2x = 6e4;
    if (!!O9F.Qq4u) return;
    O9F.Qq4u = NEJ.C();
    mK4O = O9F.Qq4u.N9E(I9z.cK0x);
    mK4O.cy0x = function () {
        this.cE0x();
        this.Qs4w = {onerror: this.cAM8E.f9e(this), onloaded: this.cAL8D.f9e(this)};
        if (!this.constructor.S0x) this.constructor.S0x = {loaded: {}}
    };
    mK4O.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.KW2x = e9f.version;
        this.bwX4b = e9f.timeout;
        this.Qs4w.version = this.KW2x;
        this.Qs4w.timeout = this.bwX4b
    };
    mK4O.bUO1x = function (K9B) {
        delete this.constructor.S0x[K9B]
    };
    mK4O.Be9V = function (K9B) {
        return this.constructor.S0x[K9B]
    };
    mK4O.bUN1x = function (K9B, j9a) {
        this.constructor.S0x[K9B] = j9a
    };
    mK4O.Zn7g = br0x;
    mK4O.bUK1x = function (gm2x) {
        h9c.hi2x(gm2x)
    };
    mK4O.bxG4K = function (gm2x) {
        gm2x.src = this.kG3x;
        document.head.appendChild(gm2x)
    };
    mK4O.Bf9W = function () {
        var R9I = this.Be9V(this.kG3x);
        if (!R9I) return;
        window.clearTimeout(R9I.timer);
        this.bUK1x(R9I.request);
        delete R9I.bind;
        delete R9I.timer;
        delete R9I.request;
        this.bUO1x(this.kG3x);
        this.Be9V("loaded")[this.kG3x] = !0
    };
    mK4O.Zl7e = function (V0x) {
        var R9I = this.Be9V(this.kG3x);
        if (!R9I) return;
        var i9b = R9I.bind;
        this.Bf9W();
        if (!!i9b && i9b.length > 0) {
            var cC0x;
            while (i9b.length) {
                cC0x = i9b.shift();
                try {
                    cC0x.z9q(V0x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cC0x.T0x()
            }
        }
    };
    mK4O.dP1x = function (ca0x) {
        this.Zl7e("onerror", ca0x)
    };
    mK4O.bUI1x = function () {
        this.Zl7e("onloaded")
    };
    mK4O.cAn8f = function (X0x) {
        this.constructor.A9r(this.Qs4w).KX2x(X0x)
    };
    mK4O.bUF1x = function (ca0x) {
        var R9I = this.Be9V(this.wG8y);
        if (!R9I) return;
        if (!!ca0x) R9I.error++;
        R9I.loaded++;
        if (R9I.loaded < R9I.total) return;
        this.bUO1x(this.wG8y);
        this.z9q(R9I.error > 0 ? "onerror" : "onloaded")
    };
    mK4O.cAM8E = function (ca0x) {
        this.bUF1x(!0)
    };
    mK4O.cAL8D = function () {
        this.bUF1x()
    };
    mK4O.KX2x = function (X0x) {
        X0x = k9b.bts3x(X0x);
        if (!X0x) {
            this.z9q("onerror", {code: en1x.bwY4c, message: "请指定要载入的资源地址！"});
            return this
        }
        this.kG3x = X0x;
        if (!!this.KW2x) this.kG3x += (this.kG3x.indexOf("?") < 0 ? "?" : "&") + this.KW2x;
        if (this.Be9V("loaded")[this.kG3x]) {
            try {
                this.z9q("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T0x();
            return this
        }
        var R9I = this.Be9V(this.kG3x), gm2x;
        if (!!R9I) {
            R9I.bind.unshift(this);
            R9I.timer = window.clearTimeout(R9I.timer)
        } else {
            gm2x = this.Zn7g();
            R9I = {request: gm2x, bind: [this]};
            this.bUN1x(this.kG3x, R9I);
            h9c.s9j(gm2x, "load", this.bUI1x.f9e(this));
            h9c.s9j(gm2x, "error", this.dP1x.f9e(this, {code: en1x.biR0x, message: "无法加载指定资源文件[" + this.kG3x + "]！"}))
        }
        if (this.bwX4b != 0) R9I.timer = window.setTimeout(this.dP1x.f9e(this, {
            code: en1x.bCJ5O,
            message: "指定资源文件[" + this.kG3x + "]载入超时！"
        }), this.bwX4b || gN2x);
        if (!!gm2x) this.bxG4K(gm2x);
        this.z9q("onloading");
        return this
    };
    mK4O.bUD1x = function (i9b) {
        if (!i9b || !i9b.length) {
            this.z9q("onerror", {code: en1x.bwY4c, message: "请指定要载入的资源队列！"});
            return this
        }
        this.wG8y = k9b.nW4a();
        var R9I = {error: 0, loaded: 0, total: i9b.length};
        this.bUN1x(this.wG8y, R9I);
        for (var i = 0, l = i9b.length; i < l; i++) {
            if (!i9b[i]) {
                R9I.total--;
                continue
            }
            this.cAn8f(i9b[i])
        }
        this.z9q("onloading");
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), be0x = c9h("nej.h"), O9F = c9h("nej.ut.j"), QA4E;
    if (!!O9F.bgd9U) return;
    O9F.bgd9U = NEJ.C();
    QA4E = O9F.bgd9U.N9E(O9F.Qq4u);
    QA4E.Zn7g = function () {
        var eP2x = a8i.di1x("iframe");
        eP2x.width = 0;
        eP2x.height = 0;
        eP2x.style.display = "none";
        return eP2x
    };
    QA4E.bxG4K = function (gm2x) {
        gm2x.src = this.kG3x;
        document.body.appendChild(gm2x)
    };
    QA4E.dP1x = function (ca0x) {
        var eP2x = (this.Be9V(this.kG3x) || bb0x).request;
        this.Zl7e("onerror", ca0x);
        be0x.beo9f(eP2x)
    };
    QA4E.bUI1x = function () {
        var mp4t = null, eP2x = (this.Be9V(this.kG3x) || bb0x).request;
        try {
            mp4t = eP2x.contentWindow.document.body
        } catch (ex) {
        }
        this.Zl7e("onloaded", mp4t);
        be0x.beo9f(eP2x)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), O9F = c9h("nej.ut.j"), bgi9Z;
    if (!!O9F.Zd7W) return;
    O9F.Zd7W = NEJ.C();
    bgi9Z = O9F.Zd7W.N9E(O9F.Qq4u);
    bgi9Z.Zn7g = function () {
        return a8i.di1x("link")
    };
    bgi9Z.bxG4K = function (gm2x) {
        gm2x.href = this.kG3x;
        document.head.appendChild(gm2x)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), O9F = c9h("nej.ut.j"), Zc7V;
    if (!!O9F.Zb7U) return;
    O9F.Zb7U = NEJ.C();
    Zc7V = O9F.Zb7U.N9E(O9F.Qq4u);
    Zc7V.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.bUC1x = e9f.async;
        this.bgJ0x = e9f.charset;
        this.Qs4w.async = !1;
        this.Qs4w.charset = this.bgJ0x
    };
    Zc7V.Zn7g = function () {
        var gm2x = a8i.di1x("script");
        if (this.bUC1x != null) gm2x.async = !!this.bUC1x;
        if (this.bgJ0x != null) gm2x.charset = this.bgJ0x;
        return gm2x
    };
    Zc7V.bUK1x = function (gm2x) {
        a8i.cM0x(gm2x)
    }
})();
(function () {
    var c9h = NEJ.P, v9m = c9h("nej.j"), O9F = c9h("nej.ut.j");
    v9m.cAc8U = function (X0x, e9f) {
        O9F.Zb7U.A9r(e9f).KX2x(X0x);
        return this
    };
    v9m.cAa8S = function (i9b, e9f) {
        O9F.Zb7U.A9r(e9f).bUD1x(i9b);
        return this
    };
    v9m.cFc0x = function (X0x, e9f) {
        O9F.Zd7W.A9r(e9f).KX2x(X0x);
        return this
    };
    v9m.czY8Q = function (i9b, e9f) {
        O9F.Zd7W.A9r(e9f).bUD1x(i9b);
        return this
    };
    v9m.bUB1x = function (X0x, e9f) {
        O9F.bgd9U.A9r(e9f).KX2x(X0x);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        I9z = c9h("nej.ut"), R9I = {}, sZ6T = +(new Date) + "-";
    a8i.cX1x = function () {
        var cz0x = 0;
        var QI5N = function () {
            if (cz0x > 0) return;
            cz0x = 0;
            h9c.z9q(document, "templateready");
            h9c.hi2x(document, "templateready")
        };
        var YZ7S = function (gk2x, e9f) {
            var cS0x = a8i.t9k(gk2x, "src");
            if (!cS0x) return;
            e9f = e9f || bb0x;
            var ga2x = e9f.root;
            if (!ga2x) {
                ga2x = gk2x.ownerDocument.location.href
            } else {
                ga2x = k9b.bts3x(ga2x)
            }
            cS0x = cS0x.split(",");
            k9b.bd0x(cS0x, function (D9u, r9i, i9b) {
                i9b[r9i] = k9b.bts3x(D9u, ga2x)
            });
            return cS0x
        };
        var czR8J = function (gk2x, e9f) {
            if (!gk2x) return;
            var cS0x = YZ7S(gk2x, e9f);
            if (!!cS0x) v9m.czY8Q(cS0x, {version: a8i.t9k(gk2x, "version")});
            a8i.bQt9k(gk2x.value)
        };
        var czQ8I = function (D9u) {
            cz0x--;
            a8i.bQu9l(D9u);
            QI5N()
        };
        var czP8H = function (gk2x, e9f) {
            if (!gk2x) return;
            var cS0x = YZ7S(gk2x, e9f), fu2x = gk2x.value;
            if (!!cS0x) {
                cz0x++;
                var e9f = {version: a8i.t9k(gk2x, "version"), onloaded: czQ8I.f9e(null, fu2x)};
                window.setTimeout(v9m.cAa8S.f9e(v9m, cS0x, e9f), 0);
                return
            }
            a8i.bQu9l(fu2x)
        };
        var czO8G = function (mp4t) {
            cz0x--;
            a8i.cX1x(mp4t);
            QI5N()
        };
        var czN8F = function (gk2x, e9f) {
            if (!gk2x) return;
            var cS0x = YZ7S(gk2x, e9f)[0];
            if (!!cS0x) {
                cz0x++;
                var e9f = {version: a8i.t9k(gk2x, "version"), onloaded: czO8G};
                window.setTimeout(v9m.bUB1x.f9e(v9m, cS0x, e9f), 0)
            }
        };
        var czK8C = function (C9t, cJ0x) {
            cz0x--;
            a8i.Le2x(C9t, cJ0x || "");
            QI5N()
        };
        var czJ8B = function (gk2x, e9f) {
            if (!gk2x || !gk2x.id) return;
            var C9t = gk2x.id, cS0x = YZ7S(gk2x, e9f)[0];
            if (!!cS0x) {
                cz0x++;
                var X0x = cS0x + (cS0x.indexOf("?") < 0 ? "?" : "&") + (a8i.t9k(gk2x, "version") || ""),
                    e9f = {type: "text", method: "GET", onload: czK8C.f9e(null, C9t)};
                window.setTimeout(v9m.bm0x.f9e(v9m, X0x, e9f), 0)
            }
        };
        var czA8s = function (g9d, e9f) {
            var u9l = g9d.name.toLowerCase();
            switch (u9l) {
                case"jst":
                    a8i.eC1x(g9d, !0);
                    return;
                case"txt":
                    a8i.Le2x(g9d.id, g9d.value || "");
                    return;
                case"ntp":
                    a8i.jj3x(g9d.value || "", g9d.id);
                    return;
                case"js":
                    czP8H(g9d, e9f);
                    return;
                case"css":
                    czR8J(g9d, e9f);
                    return;
                case"html":
                    czN8F(g9d, e9f);
                    return;
                case"res":
                    czJ8B(g9d, e9f);
                    return
            }
        };
        I9z.fJ2x.A9r({element: document, event: "templateready", oneventadd: QI5N});
        return function (F9w, e9f) {
            F9w = a8i.B9s(F9w);
            if (!!F9w) {
                var i9b = F9w.tagName == "TEXTAREA" ? [F9w] : F9w.getElementsByTagName("textarea");
                k9b.bd0x(i9b, function (g9d) {
                    czA8s(g9d, e9f)
                });
                a8i.cM0x(F9w, !0)
            }
            QI5N();
            return this
        }
    }();
    a8i.Le2x = function (K9B, D9u) {
        R9I[K9B] = D9u || "";
        return this
    };
    a8i.iF3x = function (K9B) {
        return R9I[K9B] || ""
    };
    a8i.jj3x = function (F9w, K9B) {
        K9B = K9B || k9b.nW4a();
        F9w = a8i.B9s(F9w) || F9w;
        a8i.Le2x(sZ6T + K9B, F9w);
        a8i.mB4F(F9w);
        return K9B
    };
    a8i.dD1x = function (K9B) {
        if (!K9B) return null;
        K9B = sZ6T + K9B;
        var D9u = a8i.iF3x(K9B);
        if (!D9u) return null;
        if (k9b.fD2x(D9u)) {
            D9u = a8i.ow5B(D9u);
            a8i.Le2x(K9B, D9u)
        }
        return D9u.cloneNode(!0)
    };
    a8i.Bj9a = function () {
        var IO1x = function (D9u, K9B) {
            return K9B == "offset" || K9B == "limit"
        };
        return function (i9b, p9g, e9f) {
            var bs0x = [];
            if (!i9b || !i9b.length || !p9g) return bs0x;
            e9f = e9f || bb0x;
            var ds1x = i9b.length, kb3x = parseInt(e9f.offset) || 0,
                fT2x = Math.min(ds1x, kb3x + (parseInt(e9f.limit) || ds1x)),
                ct0x = {total: i9b.length, range: [kb3x, fT2x]};
            NEJ.X(ct0x, e9f, IO1x);
            for (var i = kb3x, cC0x; i < fT2x; i++) {
                ct0x.index = i;
                ct0x.data = i9b[i];
                cC0x = p9g.A9r(ct0x);
                var C9t = cC0x.Ee0x();
                R9I[C9t] = cC0x;
                cC0x.T0x = cC0x.T0x.eG1x(function (C9t, cC0x) {
                    delete R9I[C9t];
                    delete cC0x.T0x
                }.f9e(null, C9t, cC0x));
                bs0x.push(cC0x)
            }
            return bs0x
        }
    }();
    a8i.bUr1x = function (C9t) {
        return R9I[C9t]
    };
    a8i.cFd0x = function (ed1x, e9f) {
        e9f = e9f || bb0x;
        a8i.cX1x(e9f.tid || "template-box");
        h9c.s9j(document, "templateready", function () {
            ed1x.A9r().z9q("onshow", e9f)
        })
    };
    c9h("dbg").dumpTC = function () {
        return R9I
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        O9F = c9h("nej.ui"), b9i;
    if (!!O9F.el1x) return;
    O9F.el1x = NEJ.C();
    b9i = O9F.el1x.N9E(I9z.cK0x);
    b9i.cy0x = function () {
        this.cE0x();
        a8i.bQb9S();
        this.ch0x();
        this.bW0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.czv8n(e9f.clazz);
        this.bUo1x(e9f.parent)
    };
    b9i.bC0x = function () {
        this.bF0x();
        this.bUn1x();
        delete this.gh2x;
        a8i.mB4F(this.o9f);
        a8i.x9o(this.o9f, this.bjM0x);
        delete this.bjM0x
    };
    b9i.ch0x = br0x;
    b9i.bW0x = function () {
        if (!this.cf0x) this.Lm2x();
        this.o9f = a8i.dD1x(this.cf0x);
        if (!this.o9f) this.o9f = a8i.di1x("div", this.lX4b);
        a8i.y9p(this.o9f, this.lX4b)
    };
    b9i.Lm2x = br0x;
    b9i.czv8n = function (eb1x) {
        this.bjM0x = eb1x || "";
        a8i.y9p(this.o9f, this.bjM0x)
    };
    b9i.czl8d = function () {
        if (!this.lX4b) return;
        a8i.y9p(this.gh2x, this.lX4b + "-parent")
    };
    b9i.bUn1x = function () {
        if (!this.lX4b) return;
        a8i.x9o(this.gh2x, this.lX4b + "-parent")
    };
    b9i.lE4I = function () {
        return this.o9f
    };
    b9i.bUo1x = function (bH0x) {
        if (!this.o9f) return this;
        this.bUn1x();
        if (k9b.gJ2x(bH0x)) {
            this.gh2x = bH0x(this.o9f)
        } else {
            this.gh2x = a8i.B9s(bH0x);
            if (!!this.gh2x) this.gh2x.appendChild(this.o9f)
        }
        this.czl8d();
        return this
    };
    b9i.J9A = function () {
        if (!this.gh2x || !this.o9f || this.o9f.parentNode == this.gh2x) return this;
        this.gh2x.appendChild(this.o9f);
        return this
    };
    b9i.bt0x = function () {
        a8i.mB4F(this.o9f);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), k9b = c9h("nej.u"), be0x = c9h("nej.h"),
        O9F = c9h("nej.ui"), wt7m, bUk1x;
    if (!!O9F.Rq5v) return;
    O9F.Rq5v = NEJ.C();
    wt7m = O9F.Rq5v.N9E(O9F.el1x);
    bUk1x = O9F.Rq5v.cs0x;
    wt7m.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.xF8x("oncontentready", e9f.oncontentready || this.czh8Z.f9e(this));
        this.cze8W = !!e9f.nohack;
        this.czd8V = !!e9f.destroyable;
        this.Lo2x(e9f.content)
    };
    wt7m.bC0x = function () {
        this.z9q("onbeforerecycle");
        this.bF0x();
        this.YC7v();
        this.Lo2x("");
        a8i.eY2x(this.o9f, {top: "", left: ""})
    };
    wt7m.czh8Z = br0x;
    wt7m.Lw2x = br0x;
    wt7m.YC7v = function () {
        a8i.mB4F(this.o9f);
        if (!!this.nR4V) {
            this.nR4V = be0x.bhZ0x(this.o9f);
            delete this.nR4V
        }
    };
    wt7m.Lo2x = function (bo0x) {
        if (!this.o9f || !this.Bo9f || bo0x == null) return this;
        bo0x = bo0x || "";
        k9b.fD2x(bo0x) ? this.Bo9f.innerHTML = bo0x : this.Bo9f.appendChild(bo0x);
        this.z9q("oncontentready", this.Bo9f);
        return this
    };
    wt7m.gH2x = function (bi0x) {
        var D9u = bi0x.top;
        if (D9u != null) {
            D9u += "px";
            a8i.ba0x(this.o9f, "top", D9u);
            a8i.ba0x(this.nR4V, "top", D9u)
        }
        var D9u = bi0x.left;
        if (D9u != null) {
            D9u += "px";
            a8i.ba0x(this.o9f, "left", D9u);
            a8i.ba0x(this.nR4V, "left", D9u)
        }
        return this
    };
    wt7m.J9A = function () {
        a8i.ba0x(this.o9f, "visibility", "hidden");
        bUk1x.J9A.apply(this, arguments);
        this.Lw2x();
        a8i.ba0x(this.o9f, "visibility", "");
        if (!this.cze8W) {
            this.nR4V = be0x.nR4V(this.o9f)
        }
        return this
    };
    wt7m.bt0x = function () {
        this.czd8V ? this.T0x() : this.YC7v();
        return this
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, k9b = c9h("nej.u"), a8i = c9h("nej.e"), O9F = c9h("nej.ui"), Bp9g;
    if (!!O9F.Yu7n) return;
    O9F.Yu7n = NEJ.C();
    Bp9g = O9F.Yu7n.N9E(O9F.el1x);
    Bp9g.bl0x = function (e9f) {
        this.RP5U();
        this.bn0x(this.czc8U(e9f));
        this.cg0x.onbeforerecycle = this.T0x.f9e(this);
        this.oE5J = this.blR1x()
    };
    Bp9g.bC0x = function () {
        this.z9q("onbeforerecycle");
        this.bF0x();
        delete this.cg0x;
        a8i.mB4F(this.o9f);
        var Bs9j = this.oE5J;
        if (!!Bs9j) {
            delete this.oE5J;
            Bs9j.T0x()
        }
    };
    Bp9g.blR1x = br0x;
    Bp9g.czc8U = function (e9f) {
        var m9d = {};
        k9b.eH1x(e9f, function (p9g, K9B) {
            this.cg0x.hasOwnProperty(K9B) ? this.cg0x[K9B] = p9g : m9d[K9B] = p9g
        }, this);
        return m9d
    };
    Bp9g.RP5U = function () {
        this.cg0x = {clazz: "", parent: null, content: this.o9f, destroyable: !1, oncontentready: null, nohack: !1}
    };
    Bp9g.J9A = function () {
        if (!!this.oE5J) this.oE5J.J9A();
        this.z9q("onaftershow");
        return this
    };
    Bp9g.bt0x = function () {
        if (!!this.oE5J) this.oE5J.bt0x();
        return this
    }
})();
(function () {
    var c9h = NEJ.P, en1x = c9h("nej.g"), be0x = c9h("nej.h"), a8i = c9h("nej.e"), k9b = c9h("nej.u"),
        h9c = c9h("nej.v"), O9F = c9h("nej.ui"), RQ5V, bUj1x;
    if (!!O9F.LF2x) return;
    var iT3x = a8i.th6b(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + en1x.bmn1x + ");}");
    O9F.LF2x = NEJ.C();
    RQ5V = O9F.LF2x.N9E(O9F.el1x);
    bUj1x = O9F.LF2x.cs0x;
    RQ5V.bl0x = function (e9f) {
        this.bn0x(e9f);
        var bo0x = e9f.content || "&nbsp;";
        k9b.fD2x(bo0x) ? this.o9f.innerHTML = bo0x : this.o9f.appendChild(bo0x)
    };
    RQ5V.bC0x = function () {
        this.bF0x();
        this.o9f.innerHTML = "&nbsp;"
    };
    RQ5V.ch0x = function () {
        this.lX4b = iT3x
    };
    RQ5V.J9A = function () {
        be0x.bgW0x(this.o9f);
        bUj1x.J9A.apply(this, arguments);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), O9F = c9h("nej.ut"), wi7b;
    if (!!O9F.wd7W) return;
    O9F.wd7W = NEJ.C();
    wi7b = O9F.wd7W.N9E(O9F.cK0x);
    wi7b.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.cza8S = !!e9f.overflow;
        this.o9f = a8i.B9s(e9f.body);
        this.Bx9o = a8i.B9s(e9f.view) || a8i.bMf8X(this.o9f);
        this.bUh1x = a8i.B9s(e9f.mbar) || this.o9f;
        this.Yk7d = parseInt(e9f.direction) || 0;
        if (!!e9f.isRelative) {
            this.o9f.style.position = "relative";
            this.bnd1x = true;
            this.bnw1x()
        }
        this.bX0x([[document, "mouseup", this.bnG1x.f9e(this)], [document, "mousemove", this.bnK1x.f9e(this)], [this.bUh1x, "mousedown", this.Sf5k.f9e(this)]])
    };
    wi7b.bnw1x = function () {
        if (!!this.bnd1x) {
            this.LI2x = a8i.hS2x(this.o9f, this.Bx9o);
            this.LI2x.x -= parseInt(a8i.dh1x(this.o9f, "left")) || 0;
            this.LI2x.y -= parseInt(a8i.dh1x(this.o9f, "top")) || 0
        }
    };
    wi7b.bC0x = function () {
        this.bF0x();
        delete this.o9f;
        delete this.bUh1x;
        delete this.Bx9o
    };
    wi7b.bnR1x = function () {
        return {
            x: Math.max(this.Bx9o.clientWidth, this.Bx9o.scrollWidth) - this.o9f.offsetWidth,
            y: Math.max(this.Bx9o.clientHeight, this.Bx9o.scrollHeight) - this.o9f.offsetHeight
        }
    };
    wi7b.Sf5k = function (d9g) {
        h9c.bh0x(d9g);
        if (!!this.hP2x) return;
        this.hP2x = {x: h9c.jJ3x(d9g), y: h9c.mn4r(d9g)};
        this.bUg1x = this.bnR1x();
        this.z9q("ondragstart", d9g)
    };
    wi7b.bnK1x = function (d9g) {
        if (!this.hP2x) return;
        var bi0x = {x: h9c.jJ3x(d9g), y: h9c.mn4r(d9g)};
        var pV5a = bi0x.x - this.hP2x.x, qe5j = bi0x.y - this.hP2x.y, D9u = {
            top: (parseInt(a8i.dh1x(this.o9f, "top")) || 0) + qe5j,
            left: (parseInt(a8i.dh1x(this.o9f, "left")) || 0) + pV5a
        };
        if (this.bnd1x) {
            this.bnw1x();
            D9u.top = D9u.top + this.LI2x.y;
            D9u.left = D9u.left + this.LI2x.x
        }
        this.hP2x = bi0x;
        this.gH2x(D9u)
    };
    wi7b.bnG1x = function (d9g) {
        if (!this.hP2x) return;
        delete this.bUg1x;
        delete this.hP2x;
        this.z9q("ondragend", this.boL2x())
    };
    wi7b.gH2x = function (d9g) {
        if (!this.cza8S) {
            var bUf1x = this.bUg1x || this.bnR1x();
            d9g.top = Math.min(bUf1x.y, Math.max(0, d9g.top));
            d9g.left = Math.min(bUf1x.x, Math.max(0, d9g.left))
        }
        var cj0x = this.o9f.style;
        if (this.bnd1x) {
            this.bnw1x();
            d9g.top = d9g.top - this.LI2x.y;
            d9g.left = d9g.left - this.LI2x.x
        }
        if (this.Yk7d == 0 || this.Yk7d == 2) cj0x.top = d9g.top + "px";
        if (this.Yk7d == 0 || this.Yk7d == 1) cj0x.left = d9g.left + "px";
        this.z9q("onchange", d9g);
        return this
    };
    wi7b.boL2x = function () {
        return {left: parseInt(a8i.dh1x(this.o9f, "left")) || 0, top: parseInt(a8i.dh1x(this.o9f, "top")) || 0}
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = NEJ.P("nej.e"), h9c = NEJ.P("nej.v"), k9b = NEJ.P("nej.u"),
        I9z = NEJ.P("nej.ut"), O9F = NEJ.P("nej.ui"), iT3x, gg2x, b9i, L9C;
    if (!!O9F.Yd7W) return;
    O9F.Yd7W = NEJ.C();
    b9i = O9F.Yd7W.N9E(O9F.Rq5v);
    L9C = O9F.Yd7W.cs0x;
    b9i.cy0x = function () {
        this.st6n = {};
        this.kV3x = {onchange: this.bnK1x.f9e(this)};
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.cyP8H(e9f.mask);
        this.cyO8G(e9f.align);
        this.BF9w(e9f.title);
        if (!e9f.draggable) return;
        this.jd3x = I9z.wd7W.A9r(this.kV3x)
    };
    b9i.bC0x = function () {
        this.bF0x();
        delete this.qX5c;
        delete this.Ss5x;
        if (!!this.BG9x) {
            this.BG9x.T0x();
            delete this.BG9x
        }
        if (!!this.jd3x) {
            this.jd3x.T0x();
            delete this.jd3x
        }
    };
    b9i.ch0x = function () {
        this.lX4b = iT3x;
        this.cf0x = gg2x
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.dk1x(this.o9f);
        this.Bo9f = i9b[1];
        this.kV3x.mbar = i9b[0];
        this.kV3x.body = this.o9f;
        h9c.s9j(i9b[2], "mousedown", this.cyL8D.f9e(this));
        h9c.s9j(this.kV3x.mbar, "mousedown", this.Sf5k.f9e(this));
        this.bUb1x = a8i.dk1x(this.kV3x.mbar)[0]
    };
    b9i.cyL8D = function (d9g) {
        h9c.bh0x(d9g);
        this.z9q("onclose", d9g);
        if (!d9g.stopped) {
            this.bt0x()
        }
    };
    b9i.Sf5k = function (d9g) {
        h9c.z9q(document, "click")
    };
    b9i.bnK1x = function (d9g) {
        if (!this.nR4V) return;
        a8i.eY2x(this.nR4V, {top: d9g.top + "px", left: d9g.left + "px"})
    };
    b9i.Lw2x = function () {
        var ex1x = [function () {
            return 0
        }, function (nZ4d, mq4u, bi0x, K9B) {
            if (K9B == "top" && window.top != window.self) {
                var XZ7S = 0, EY0x = 0;
                if (top.g_topBarHeight) XZ7S = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) EY0x = top.g_bottomBarHeight;
                if (nZ4d.top <= XZ7S) {
                    var brc2x = Math.max(0, (mq4u.height - (XZ7S - nZ4d.top) - EY0x - bi0x.height) / 2);
                    return brc2x + XZ7S
                } else {
                    var brc2x = Math.max(0, (mq4u.height - EY0x - bi0x.height) / 2);
                    return brc2x + nZ4d.top
                }
            }
            return Math.max(0, nZ4d[K9B] + (mq4u[it3x[K9B]] - bi0x[it3x[K9B]]) / 2)
        }, function (nZ4d, mq4u, bi0x, K9B) {
            return nZ4d[K9B] + (mq4u[it3x[K9B]] - bi0x[it3x[K9B]])
        }], cyB8t = ["left", "top"], it3x = {left: "width", top: "height"};
        return function () {
            var D9u = {}, cj0x = this.o9f.style, jL3x = a8i.ox5C(), nZ4d = {left: jL3x.scrollLeft, top: jL3x.scrollTop},
                mq4u = {width: jL3x.clientWidth, height: jL3x.clientHeight},
                bi0x = {width: this.o9f.offsetWidth, height: this.o9f.offsetHeight},
                dq1x = {left: jL3x.clientWidth - this.o9f.offsetWidth, top: jL3x.clientHeight - this.o9f.offsetHeight};
            k9b.bd0x(cyB8t, function (K9B, r9i) {
                var dy1x = ex1x[this.qX5c[r9i]];
                if (!dy1x) return;
                D9u[K9B] = dy1x(nZ4d, mq4u, bi0x, K9B)
            }, this);
            this.gH2x(D9u)
        }
    }();
    b9i.cyz8r = function () {
        if (!this.BG9x) {
            if (!this.Ss5x) return;
            this.st6n.parent = this.gh2x;
            this.BG9x = this.Ss5x.A9r(this.st6n)
        }
        this.BG9x.J9A()
    };
    b9i.YC7v = function () {
        if (!!this.BG9x) this.BG9x.bt0x();
        L9C.YC7v.apply(this, arguments)
    };
    b9i.cyP8H = function (lh3x) {
        if (!!lh3x) {
            if (lh3x instanceof O9F.LF2x) {
                this.BG9x = lh3x;
                return
            }
            if (k9b.gJ2x(lh3x)) {
                this.Ss5x = lh3x;
                return
            }
            this.Ss5x = O9F.LF2x;
            if (k9b.fD2x(lh3x)) this.st6n.clazz = lh3x;
            return
        }
        this.Ss5x = null
    };
    b9i.BF9w = function (ep1x, dW1x) {
        if (!!this.bUb1x) {
            var bfl9c = !dW1x ? "innerText" : "innerHTML";
            this.bUb1x[bfl9c] = ep1x || "标题"
        }
        return this
    };
    b9i.cyO8G = function () {
        var df1x = /\s+/, cyy8q = {left: 0, center: 1, right: 2, auto: 3},
            cyx8p = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (oq4u) {
            this.qX5c = (oq4u || "").split(df1x);
            var ck0x = cyy8q[this.qX5c[0]];
            if (ck0x == null) ck0x = 1;
            this.qX5c[0] = ck0x;
            var ck0x = cyx8p[this.qX5c[1]];
            if (ck0x == null) ck0x = 1;
            this.qX5c[1] = ck0x;
            return this
        }
    }();
    b9i.J9A = function () {
        L9C.J9A.apply(this, arguments);
        this.cyz8r();
        return this
    };
    iT3x = a8i.th6b(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gg2x = a8i.jj3x('<div class="' + iT3x + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c9h = NEJ.P, k9b = c9h("nej.u"), O9F = c9h("nej.ui"), bsi2x;
    if (!!O9F.XV7O) return;
    O9F.XV7O = NEJ.C();
    bsi2x = O9F.XV7O.N9E(O9F.Yu7n);
    bsi2x.blR1x = function () {
        return O9F.Yd7W.A9r(this.cg0x)
    };
    bsi2x.RP5U = function () {
        O9F.XV7O.cs0x.RP5U.apply(this, arguments);
        this.cg0x.mask = null;
        this.cg0x.title = "标题";
        this.cg0x.align = "";
        this.cg0x.draggable = !1;
        this.cg0x.onclose = null
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), bc0x = c9h("nej.ui"), n9e = c9h("nm.l"), b9i, L9C;
    n9e.eo1x = NEJ.C();
    b9i = n9e.eo1x.N9E(bc0x.XV7O);
    b9i.bl0x = function (e9f) {
        e9f.clazz = "m-layer z-show " + (e9f.clazz || "");
        e9f.nohack = true;
        e9f.draggable = true;
        this.bn0x(e9f)
    };
    b9i.ea1x = function (g9d, bG0x) {
        if (!g9d) return;
        a8i.ba0x(g9d, "display", !bG0x ? "none" : "");
        g9d.lastChild.innerText = bG0x || ""
    };
    b9i.dT1x = function (gC2x, da1x, Sz5E, SD5I) {
        var ed1x = "js-lock";
        if (da1x === undefined) return a8i.bE0x(gC2x, ed1x);
        !da1x ? a8i.x9o(gC2x, ed1x) : a8i.y9p(gC2x, ed1x);
        gC2x.firstChild.innerText = !da1x ? Sz5E : SD5I
    };
    n9e.eo1x.J9A = function (e9f) {
        e9f = e9f || {};
        if (e9f.mask === undefined) e9f.mask = "m-mask";
        if (e9f.parent === undefined) e9f.parent = document.body;
        if (e9f.draggable === undefined) e9f.draggable = true;
        !!this.fj2x && this.fj2x.T0x();
        this.fj2x = this.A9r(e9f);
        this.fj2x.J9A(e9f);
        return this.fj2x
    };
    n9e.eo1x.bt0x = function () {
        !!this.fj2x && this.fj2x.T0x()
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), q9h = c9h("nm.d"),
        l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, L9C;
    n9e.btP3x = NEJ.C();
    b9i = n9e.btP3x.N9E(n9e.eo1x);
    L9C = n9e.btP3x.cs0x;
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        if (e9f.bubble === undefined) e9f.bubble = true;
        this.SH5M = e9f.bubble;
        this.qL5Q = e9f.message || ""
    };
    b9i.ch0x = function () {
        this.cf0x = a8i.jj3x('<div class="lyct f-cb f-tc"></div>')
    };
    b9i.bW0x = function () {
        this.ci0x();
        h9c.s9j(this.o9f, "click", this.cL0x.f9e(this))
    };
    b9i.cL0x = function (d9g) {
        var g9d = h9c.W0x(d9g, "d:action");
        if (!g9d) return;
        if (g9d.href) h9c.cn0x(d9g);
        if (a8i.t9k(g9d, "action") == "close") this.bt0x();
        if (this.SH5M === !1) h9c.tS7L(d9g);
        this.z9q("onaction", a8i.t9k(g9d, "action"))
    };
    b9i.J9A = function () {
        L9C.J9A.call(this);
        this.o9f.innerHTML = this.qL5Q
    };
    var gK2x = a8i.eC1x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l9c.nv4z = function () {
        var ei1x;
        var cC0x;
        var buA3x = function (eN2x, U0x) {
            if (k9b.gJ2x(eN2x, "function") && eN2x(U0x) != -1) cC0x.T0x()
        };
        var BK9B = function () {
            !!cC0x && cC0x.bt0x()
        };
        return function (e9f) {
            clearTimeout(ei1x);
            e9f = e9f || {};
            e9f.title = e9f.title || "提示";
            e9f.clazz = e9f.clazz || "";
            e9f.parent = e9f.parent || document.body;
            e9f.buttons = e9f.buttons || [];
            e9f.message = a8i.cd0x(gK2x, e9f);
            e9f.onaction = buA3x.f9e(null, e9f.action);
            if (e9f.mask === undefined) e9f.mask = true;
            if (e9f.draggable === undefined) e9f.draggable = true;
            !!cC0x && cC0x.T0x();
            cC0x = n9e.btP3x.A9r(e9f);
            cC0x.J9A();
            if (e9f.autoclose) ei1x = setTimeout(BK9B.f9e(null), 2e3);
            return cC0x
        }
    }();
    l9c.ft2x = function (e9f) {
        e9f = e9f || {};
        e9f.clazz = e9f.clazz || "m-layer-w1";
        e9f.buttons = [{klass: "u-btn2-2", action: "close", text: e9f.btntxt || "确定"}];
        var cC0x = l9c.nv4z(e9f);
        return cC0x
    };
    l9c.hu2x = function (e9f) {
        e9f = e9f || {};
        e9f.clazz = e9f.clazz || "m-layer-w2";
        e9f.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e9f.btnok || "确定",
            style: e9f.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e9f.btncc || "取消", style: e9f.ccstyle || ""}];
        var cC0x = l9c.nv4z(e9f);
        return cC0x
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u");
    a8i.cyw8o = function () {
        var gF2x = /[\r\n]/gi, R9I = {};
        var cyv8n = function (cN0x) {
            return (cN0x || "").replace(gF2x, "aa").length
        };
        var bTZ1x = function (C9t) {
            var bg0x = R9I[C9t], bTY0x = a8i.B9s(C9t), qJ5O = a8i.B9s(C9t + "-counter");
            if (!bTY0x || !bg0x) return;
            var d9g = {input: bTY0x.value};
            d9g.length = bg0x.onlength(d9g.input);
            d9g.delta = bg0x.max - d9g.length;
            bg0x.onchange(d9g);
            qJ5O.innerHTML = d9g.value || "剩余" + d9g.delta + "个字"
        };
        return function (F9w, e9f) {
            var C9t = a8i.lD4H(F9w);
            if (!C9t || !!R9I[C9t]) return;
            var bg0x = NEJ.X({}, e9f);
            bg0x.onchange = bg0x.onchange || br0x;
            bg0x.onlength = cyv8n;
            if (!bg0x.max) {
                var bTX0x = parseInt(a8i.gO2x(C9t, "maxlength")), bTW0x = parseInt(a8i.t9k(C9t, "maxLength"));
                bg0x.max = bTX0x || bTW0x || 100;
                if (!bTX0x && !!bTW0x) bg0x.onlength = k9b.fw2x
            }
            R9I[C9t] = bg0x;
            h9c.s9j(C9t, "input", bTZ1x.f9e(null, C9t));
            var g9d = a8i.Jh1x(C9t, {nid: bg0x.nid || "js-counter", clazz: bg0x.clazz});
            bg0x.xid = C9t + "-counter";
            g9d.id = bg0x.xid;
            bTZ1x(C9t)
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), be0x = c9h("nej.h");
    be0x.bwJ4N = function (F9w, eb1x) {
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, O9F = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), be0x = c9h("nej.h");
    if (O9F.na4e.trident) return;
    be0x.bwJ4N = function () {
        var R9I = {};
        var IC1x = function (d9g) {
            var dn1x = h9c.W0x(d9g);
            if (!!dn1x.value) return;
            a8i.ba0x(a8i.Jh1x(dn1x), "display", "none")
        };
        var Fb0x = function (d9g) {
            var dn1x = h9c.W0x(d9g);
            if (!!dn1x.value) return;
            a8i.ba0x(a8i.Jh1x(dn1x), "display", "")
        };
        var cyn8f = function (dn1x, eb1x) {
            var C9t = a8i.lD4H(dn1x), iQ3x = a8i.Jh1x(dn1x, {tag: "label", clazz: eb1x});
            iQ3x.htmlFor = C9t;
            var cJ0x = a8i.gO2x(dn1x, "placeholder") || "";
            iQ3x.innerText = cJ0x == "null" ? "" : cJ0x;
            var ce0x = dn1x.offsetHeight + "px";
            a8i.eY2x(iQ3x, {left: 0, display: !dn1x.value ? "" : "none"})
        };
        return be0x.bwJ4N.eG1x(function (d9g) {
            d9g.stopped = !0;
            var bf0x = d9g.args, dn1x = a8i.B9s(bf0x[0]);
            if (!!R9I[dn1x.id]) return;
            cyn8f(dn1x, bf0x[1]);
            R9I[dn1x.id] = !0;
            h9c.s9j(dn1x, "blur", Fb0x.f9e(null));
            h9c.s9j(dn1x, "focus", IC1x.f9e(null))
        })
    }()
})();
(function () {
    var c9h = NEJ.P, be0x = c9h("nej.h"), a8i = c9h("nej.e"), cY1x = c9h("nej.x");
    a8i.gu2x = cY1x.gu2x = function (F9w, eb1x) {
        be0x.bwJ4N(F9w, a8i.t9k(F9w, "holder") || eb1x || "js-placeholder");
        return this
    };
    cY1x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        O9F = c9h("nej.ut"), hN2x;
    if (!!O9F.SI5N) return;
    O9F.SI5N = NEJ.C();
    hN2x = O9F.SI5N.N9E(O9F.cK0x);
    hN2x.cy0x = function () {
        this.cE0x();
        this.DF0x = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hN2x.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.gt2x = document.forms[e9f.form] || a8i.B9s(e9f.form);
        this.bX0x([[this.gt2x, "keypress", this.cym8e.f9e(this)]]);
        this.qL5Q = e9f.message || {};
        this.qL5Q.pass = this.qL5Q.pass || "&nbsp;";
        var fe2x = this.pS5X(this.gt2x, "focusMode", 1);
        if (!isNaN(fe2x)) {
            this.bTS0x = {mode: fe2x, clazz: e9f.focus}
        }
        this.BL9C = e9f.holder;
        this.DF0x.tp.clazz = "js-mhd " + (e9f.tip || "js-tip");
        this.DF0x.ok.clazz = "js-mhd " + (e9f.pass || "js-pass");
        this.DF0x.er.clazz = "js-mhd " + (e9f.error || "js-error");
        this.bTR0x = e9f.invalid || "js-invalid";
        this.cyg8Y(e9f);
        this.gI2x();
        if (!!this.BN9E) this.BN9E.focus()
    };
    hN2x.bC0x = function () {
        this.bF0x();
        delete this.qL5Q;
        delete this.BN9E;
        delete this.DY0x;
        delete this.gt2x;
        delete this.bTP0x;
        delete this.SL5Q
    };
    hN2x.pS5X = function (g9d, wD8v, u9l) {
        var D9u = a8i.t9k(g9d, wD8v);
        switch (u9l) {
            case 1:
                return parseInt(D9u);
            case 2:
                return (D9u || "").toLowerCase() == "true";
            case 3:
                return this.bgj9a(D9u)
        }
        return D9u
    };
    hN2x.BO9F = function (D9u, u9l) {
        if (u9l == "date") return this.bgj9a(D9u);
        return parseInt(D9u)
    };
    hN2x.XL7E = function () {
        var kp3x = /^button|submit|reset|image|hidden|file$/i;
        return function (g9d) {
            g9d = this.B9s(g9d) || g9d;
            var u9l = g9d.type;
            return !!g9d.name && !kp3x.test(g9d.type || "")
        }
    }();
    hN2x.cyd8V = function () {
        var kp3x = /^hidden$/i;
        return function (g9d) {
            if (this.XL7E(g9d)) return !0;
            g9d = this.B9s(g9d) || g9d;
            var u9l = g9d.type || "";
            return kp3x.test(u9l)
        }
    }();
    hN2x.bgj9a = function () {
        var df1x = /[-\/]/;
        var cyc8U = function (D9u) {
            if (!D9u) return "";
            D9u = D9u.split(df1x);
            D9u.push(D9u.shift());
            return D9u.join("/")
        };
        return function (D9u) {
            if ((D9u || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cyc8U(D9u))
        }
    }();
    hN2x.cym8e = function (d9g) {
        if (d9g.keyCode != 13) return;
        this.z9q("onenter", d9g)
    };
    hN2x.cxV8N = function (C9t, V0x) {
        var rM6G = this.SL5Q[V0x], D9u = this.pS5X(C9t, V0x);
        if (!D9u || !rM6G) return;
        this.XK7D(C9t, rM6G);
        this.bgN0x(C9t, V0x, D9u)
    };
    hN2x.cxU8M = function (C9t, V0x) {
        try {
            var bTK0x = this.pS5X(C9t, V0x);
            if (!bTK0x) return;
            var D9u = new RegExp(bTK0x);
            this.bgN0x(C9t, V0x, D9u);
            this.XK7D(C9t, this.SL5Q[V0x])
        } catch (e) {
        }
    };
    hN2x.cxR8J = function (C9t, V0x) {
        var rM6G = this.SL5Q[V0x];
        if (!!rM6G && this.pS5X(C9t, V0x, 2)) this.XK7D(C9t, rM6G)
    };
    hN2x.bhx0x = function (C9t, V0x, D9u) {
        D9u = parseInt(D9u);
        if (isNaN(D9u)) return;
        this.bgN0x(C9t, V0x, D9u);
        this.XK7D(C9t, this.SL5Q[V0x])
    };
    hN2x.bTI0x = function (C9t, V0x) {
        this.bhx0x(C9t, V0x, this.pS5X(C9t, V0x))
    };
    hN2x.bTH0x = function (C9t, V0x) {
        this.bhx0x(C9t, V0x, a8i.gO2x(C9t, V0x))
    };
    hN2x.bTG0x = function (C9t, V0x, u9l) {
        var D9u = this.BO9F(this.pS5X(C9t, V0x), this.pS5X(C9t, "type"));
        this.bhx0x(C9t, V0x, D9u)
    };
    hN2x.cxJ8B = function () {
        var gF2x = /^input|textarea$/i;
        var IC1x = function (d9g) {
            this.qt5y(h9c.W0x(d9g))
        };
        var Fb0x = function (d9g) {
            var g9d = h9c.W0x(d9g);
            if (!this.pS5X(g9d, "ignore", 2)) {
                this.bTF0x(g9d)
            }
        };
        return function (g9d) {
            if (this.pS5X(g9d, "autoFocus", 2)) this.BN9E = g9d;
            var qv5A = a8i.gO2x(g9d, "placeholder");
            if (!!qv5A && qv5A != "null") a8i.gu2x(g9d, this.BL9C);
            if (!!this.bTS0x && gF2x.test(g9d.tagName)) a8i.mw4A(g9d, this.bTS0x);
            var C9t = a8i.lD4H(g9d);
            this.cxR8J(C9t, "required");
            this.cxV8N(C9t, "type");
            this.cxU8M(C9t, "pattern");
            this.bTH0x(C9t, "maxlength");
            this.bTH0x(C9t, "minlength");
            this.bTI0x(C9t, "maxLength");
            this.bTI0x(C9t, "minLength");
            this.bTG0x(C9t, "min");
            this.bTG0x(C9t, "max");
            var V0x = g9d.name;
            this.qL5Q[V0x + "-tip"] = this.pS5X(g9d, "tip");
            this.qL5Q[V0x + "-error"] = this.pS5X(g9d, "message");
            this.qt5y(g9d);
            var bx0x = this.DY0x[C9t], j9a = (bx0x || bb0x).data || bb0x, SS5X = this.pS5X(g9d, "counter", 2);
            if (SS5X && (j9a.maxlength || j9a.maxLength)) {
                a8i.cyw8o(C9t, {nid: this.DF0x.tp.nid, clazz: "js-counter"})
            }
            if (!!bx0x && gF2x.test(g9d.tagName)) {
                this.bX0x([[g9d, "focus", IC1x.f9e(this)], [g9d, "blur", Fb0x.f9e(this)]])
            } else if (this.pS5X(g9d, "focus", 2)) {
                this.bX0x([[g9d, "focus", IC1x.f9e(this)]])
            }
        }
    }();
    hN2x.cyg8Y = function () {
        var Fe0x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bgj9a(v))
            }
        };
        var cxH8z = {
            required: function (g9d) {
                var u9l = g9d.type, cxG8y = !g9d.value, cxA8s = (u9l == "checkbox" || u9l == "radio") && !g9d.checked;
                if (cxA8s || cxG8y) return -1
            }, type: function (g9d, e9f) {
                var df1x = this.bTP0x[e9f.type], fu2x = g9d.value.trim(), cxw8o = !!df1x.test && !df1x.test(fu2x),
                    cxu8m = k9b.gJ2x(df1x) && !df1x.call(this, fu2x);
                if (cxw8o || cxu8m) return -2
            }, pattern: function (g9d, e9f) {
                if (!e9f.pattern.test(g9d.value)) return -3
            }, maxlength: function (g9d, e9f) {
                if (g9d.value.length > e9f.maxlength) return -4
            }, minlength: function (g9d, e9f) {
                if (g9d.value.length < e9f.minlength) return -5
            }, maxLength: function (g9d, e9f) {
                if (k9b.fw2x(g9d.value) > e9f.maxLength) return -4
            }, minLength: function (g9d, e9f) {
                if (k9b.fw2x(g9d.value) < e9f.minLength) return -5
            }, min: function (g9d, e9f) {
                var gT2x = this.BO9F(g9d.value, e9f.type);
                if (isNaN(gT2x) || gT2x < e9f.min) return -6
            }, max: function (g9d, e9f) {
                var gT2x = this.BO9F(g9d.value, e9f.type);
                if (isNaN(gT2x) || gT2x > e9f.max) return -7
            }
        };
        return function (e9f) {
            this.bTP0x = NEJ.X(NEJ.X({}, Fe0x), e9f.type);
            this.SL5Q = NEJ.X(NEJ.X({}, cxH8z), e9f.attr)
        }
    }();
    hN2x.XK7D = function (C9t, zu8m) {
        if (!k9b.gJ2x(zu8m)) return;
        var bx0x = this.DY0x[C9t];
        if (!bx0x || !bx0x.func) {
            bx0x = bx0x || {};
            bx0x.func = [];
            this.DY0x[C9t] = bx0x
        }
        bx0x.func.push(zu8m)
    };
    hN2x.bgN0x = function (C9t, V0x, D9u) {
        if (!V0x) return;
        var bx0x = this.DY0x[C9t];
        if (!bx0x || !bx0x.data) {
            bx0x = bx0x || {};
            bx0x.data = {};
            this.DY0x[C9t] = bx0x
        }
        bx0x.data[V0x] = D9u
    };
    hN2x.bTF0x = function (g9d) {
        g9d = this.B9s(g9d) || g9d;
        var bx0x = this.DY0x[a8i.lD4H(g9d)];
        if (!g9d || !bx0x || !this.XL7E(g9d)) return !0;
        var m9d;
        k9b.eH1x(bx0x.func, function (ex1x) {
            m9d = ex1x.call(this, g9d, bx0x.data);
            return m9d != null
        }, this);
        if (m9d == null) {
            var d9g = {target: g9d, form: this.gt2x};
            this.z9q("oncheck", d9g);
            m9d = d9g.value
        }
        var d9g = {target: g9d, form: this.gt2x};
        if (m9d != null) {
            d9g.code = m9d;
            this.z9q("oninvalid", d9g);
            if (!d9g.stopped) {
                this.cxt8l(g9d, d9g.value || this.qL5Q[g9d.name + m9d])
            }
        } else {
            this.z9q("onvalid", d9g);
            if (!d9g.stopped) this.cxs8k(g9d, d9g.value)
        }
        return m9d == null
    };
    hN2x.zr8j = function () {
        var cxp8h = function (beB9s, beA9r) {
            return beB9s == beA9r ? "block" : "none"
        };
        var cxo8g = function (g9d, u9l, bG0x) {
            var qv5A = bTw0x.call(this, g9d, u9l);
            if (!qv5A && !!bG0x) qv5A = a8i.Jh1x(g9d, this.DF0x[u9l]);
            return qv5A
        };
        var bTw0x = function (g9d, u9l) {
            var qv5A;
            if (u9l == "tp") qv5A = a8i.B9s(g9d.name + "-tip");
            if (!qv5A) qv5A = a8i.H9y(g9d.parentNode, this.DF0x[u9l].nid)[0];
            return qv5A
        };
        return function (g9d, bG0x, u9l) {
            g9d = this.B9s(g9d) || g9d;
            if (!g9d) return;
            u9l == "er" ? a8i.y9p(g9d, this.bTR0x) : a8i.x9o(g9d, this.bTR0x);
            var qv5A = cxo8g.call(this, g9d, u9l, bG0x);
            if (!!qv5A && !!bG0x) qv5A.innerHTML = bG0x;
            k9b.eH1x(this.DF0x, function (D9u, K9B) {
                a8i.ba0x(bTw0x.call(this, g9d, K9B), "display", cxp8h(u9l, K9B))
            }, this)
        }
    }();
    hN2x.qt5y = function (g9d, bG0x) {
        this.zr8j(g9d, bG0x || this.qL5Q[g9d.name + "-tip"], "tp");
        return this
    };
    hN2x.cxs8k = function (g9d, bG0x) {
        this.zr8j(g9d, bG0x || this.qL5Q[g9d.name + "-pass"] || this.qL5Q.pass, "ok");
        return this
    };
    hN2x.cxt8l = function (g9d, bG0x) {
        this.zr8j(g9d, bG0x || this.qL5Q[g9d.name + "-error"], "er");
        return this
    };
    hN2x.iV3x = function () {
        var gF2x = /^(?:radio|checkbox)$/i;
        var cxl8d = function (D9u) {
            return D9u == null ? "" : D9u
        };
        var bTv0x = function (D9u, g9d) {
            if (gF2x.test(g9d.type || "")) {
                g9d.checked = D9u == g9d.value
            } else {
                g9d.value = cxl8d(D9u)
            }
        };
        return function (V0x, D9u) {
            var g9d = this.B9s(V0x);
            if (!g9d) return this;
            if (g9d.tagName == "SELECT" || !g9d.length) {
                bTv0x(D9u, g9d)
            } else {
                k9b.bd0x(g9d, bTv0x.f9e(null, D9u))
            }
            return this
        }
    }();
    hN2x.B9s = function (V0x) {
        return this.gt2x.elements[V0x]
    };
    hN2x.cFg0x = function () {
        return this.gt2x
    };
    hN2x.XA7t = function () {
        var gF2x = /^radio|checkbox$/i, kp3x = /^number|date$/;
        var cxf8X = function (bz0x, g9d) {
            var V0x = g9d.name, D9u = g9d.value, bx0x = bz0x[V0x], u9l = this.pS5X(g9d, "type");
            if (kp3x.test(u9l)) D9u = this.BO9F(D9u, u9l);
            if (gF2x.test(g9d.type) && !g9d.checked) {
                D9u = this.pS5X(g9d, "value");
                if (!D9u) return
            }
            if (!!bx0x) {
                if (!k9b.eJ1x(bx0x)) {
                    bx0x = [bx0x];
                    bz0x[V0x] = bx0x
                }
                bx0x.push(D9u)
            } else {
                bz0x[V0x] = D9u
            }
        };
        return function () {
            var m9d = {};
            k9b.bd0x(this.gt2x.elements, function (g9d) {
                if (this.cyd8V(g9d)) cxf8X.call(this, m9d, g9d)
            }, this);
            return m9d
        }
    }();
    hN2x.Ti5n = function () {
        var cxe8W = function (g9d) {
            if (this.XL7E(g9d)) this.qt5y(g9d)
        };
        return function () {
            this.gt2x.reset();
            k9b.bd0x(this.gt2x.elements, cxe8W, this);
            return this
        }
    }();
    hN2x.cFi0x = function () {
        this.gt2x.submit();
        return this
    };
    hN2x.gI2x = function () {
        var cxc8U = function (g9d) {
            if (this.XL7E(g9d)) this.cxJ8B(g9d)
        };
        return function () {
            this.DY0x = {};
            k9b.bd0x(this.gt2x.elements, cxc8U, this);
            return this
        }
    }();
    hN2x.cxb8T = function (g9d) {
        g9d = this.B9s(g9d) || g9d;
        if (!!g9d) return this.bTF0x(g9d);
        var m9d = !0;
        k9b.bd0x(this.gt2x.elements, function (g9d) {
            var jv3x = this.cxb8T(g9d);
            m9d = m9d && jv3x
        }, this);
        return m9d
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I9z = c9h("nej.ut"), k9b = c9h("nej.u"),
        l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, L9C;
    n9e.Xs6m = NEJ.C();
    b9i = n9e.Xs6m.N9E(n9e.eo1x);
    L9C = n9e.Xs6m.cs0x;
    b9i.bW0x = function () {
        this.ci0x();
        h9c.s9j(this.o9f, "click", this.cL0x.f9e(this));
        h9c.s9j(document, "mousewheel", this.Ax9o.f9e(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Ax9o.f9e(this))
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        if (e9f.jst) {
            this.o9f.innerHTML = a8i.cd0x(e9f.jst, e9f.data)
        } else if (e9f.ntp) {
            this.o9f.appendChild(a8i.dD1x(e9f.ntp))
        } else if (e9f.txt) {
            this.o9f.innerHTML = a8i.iF3x(e9f.txt)
        } else if (e9f.html) {
            this.o9f.innerHTML = e9f.html
        }
        var Tp5u = this.o9f.getElementsByTagName("form");
        if (Tp5u.length) {
            this.gt2x = I9z.SI5N.A9r({form: Tp5u[0]})
        }
        this.GN1x = a8i.dk1x(this.o9f)[0]
    };
    b9i.bC0x = function () {
        this.z9q("ondestroy");
        this.bF0x();
        this.o9f.innerHTML = "";
        delete this.GN1x
    };
    b9i.cL0x = function (d9g) {
        var g9d = h9c.W0x(d9g, "d:action"), j9a = this.gt2x ? this.gt2x.XA7t() : null,
            d9g = {action: a8i.t9k(g9d, "action")};
        if (j9a) d9g.data = j9a;
        if (d9g.action) {
            this.z9q("onaction", d9g);
            if (d9g.stopped) return;
            this.bt0x()
        }
    };
    b9i.Ax9o = function (d9g) {
        if (!this.GN1x) return;
        h9c.bh0x(d9g);
        var dq1x = d9g.wheelDelta || -d9g.detail;
        this.GN1x.scrollTop -= dq1x
    };
    l9c.kB3x = function (e9f) {
        e9f.destroyable = e9f.destroyable || true;
        e9f.title = e9f.title || "提示";
        e9f.draggable = true;
        e9f.parent = e9f.parent || document.body;
        e9f.mask = e9f.mask || true;
        var Bs9j = n9e.Xs6m.A9r(e9f);
        Bs9j.J9A();
        return Bs9j
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bTs0x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tv5A = {}, Hd1x = {};
    for (var i = 0, l = bTs0x.length, c; i < l; i++) {
        c = bTs0x.charAt(i);
        Tv5A[i] = c;
        Hd1x[c] = i
    }
    var cwZ8R = function (iB3x) {
        var r9i = 0, c, m9d = [];
        while (r9i < iB3x.length) {
            c = iB3x[r9i];
            if (c < 128) {
                m9d.push(String.fromCharCode(c));
                r9i++
            } else if (c > 191 && c < 224) {
                m9d.push(String.fromCharCode((c & 31) << 6 | iB3x[r9i + 1] & 63));
                r9i += 2
            } else {
                m9d.push(String.fromCharCode((c & 15) << 12 | (iB3x[r9i + 1] & 63) << 6 | iB3x[r9i + 2] & 63));
                r9i += 3
            }
        }
        return m9d.join("")
    };
    var cwX8P = function () {
        var hA2x = /\r\n/g;
        return function (j9a) {
            j9a = j9a.replace(hA2x, "\n");
            var m9d = [], mr4v = String.fromCharCode(237);
            if (mr4v.charCodeAt(0) < 0) for (var i = 0, l = j9a.length, c; i < l; i++) {
                c = j9a.charCodeAt(i);
                c > 0 ? m9d.push(c) : m9d.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j9a.length, c; i < l; i++) {
                c = j9a.charCodeAt(i);
                if (c < 128) m9d.push(c); else if (c > 127 && c < 2048) m9d.push(c >> 6 | 192, c & 63 | 128); else m9d.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return m9d
        }
    }();
    var Mf2x = function (iB3x) {
        var r9i = 0, m9d = [], fe2x = iB3x.length % 3;
        if (fe2x == 1) iB3x.push(0, 0);
        if (fe2x == 2) iB3x.push(0);
        while (r9i < iB3x.length) {
            m9d.push(Tv5A[iB3x[r9i] >> 2], Tv5A[(iB3x[r9i] & 3) << 4 | iB3x[r9i + 1] >> 4], Tv5A[(iB3x[r9i + 1] & 15) << 2 | iB3x[r9i + 2] >> 6], Tv5A[iB3x[r9i + 2] & 63]);
            r9i += 3
        }
        if (fe2x == 1) m9d[m9d.length - 1] = m9d[m9d.length - 2] = "=";
        if (fe2x == 2) m9d[m9d.length - 1] = "=";
        return m9d.join("")
    };
    var bTq0x = function () {
        var rJ6D = /\n|\r|=/g;
        return function (j9a) {
            var r9i = 0, m9d = [];
            j9a = j9a.replace(rJ6D, "");
            for (var i = 0, l = j9a.length; i < l; i += 4) m9d.push(Hd1x[j9a.charAt(i)] << 2 | Hd1x[j9a.charAt(i + 1)] >> 4, (Hd1x[j9a.charAt(i + 1)] & 15) << 4 | Hd1x[j9a.charAt(i + 2)] >> 2, (Hd1x[j9a.charAt(i + 2)] & 3) << 6 | Hd1x[j9a.charAt(i + 3)]);
            var bq0x = m9d.length, fe2x = j9a.length % 4;
            if (fe2x == 2) m9d = m9d.slice(0, bq0x - 2);
            if (fe2x == 3) m9d = m9d.slice(0, bq0x - 1);
            return m9d
        }
    }();
    p.cFj0x = function (j9a) {
        return cwZ8R(bTq0x(j9a))
    };
    p.cwT8L = function (j9a) {
        var iB3x = bTq0x(j9a), ds1x = iB3x.length, iw3x;
        var r9i = 0;
        while (iw3x = iB3x[r9i]) {
            if (iw3x > 128) {
                iB3x[r9i] = iw3x - 256
            }
            r9i++
        }
        return iB3x
    };
    p.cwS8K = function (j9a) {
        try {
            return window.btoa(j9a)
        } catch (ex) {
            return Mf2x(cwX8P(j9a))
        }
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), O9F = c9h("nej.p"),
        k9b = c9h("nej.u"), n9e = c9h("nm.l"), w9n = c9h("nm.w"), bD0x = c9h("nej.ui"), q9h = c9h("nm.d"),
        l9c = c9h("nm.x"), b9i, L9C;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n9e.bTn0x = NEJ.C();
    b9i = n9e.bTn0x.N9E(n9e.eo1x);
    b9i.ch0x = function () {
        this.cf0x = "m-download-layer"
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.H9y(this.o9f, "j-flag");
        this.bla1x = i9b[0];
        this.blw1x = i9b[1];
        this.bTm0x = i9b[2];
        v9m.bm0x("/client/version/get", {type: "json", onload: this.cwO7H.f9e(this)});
        if (O9F.In1x.mac) {
            a8i.x9o(this.bla1x.parentNode, "f-hide");
            a8i.y9p(this.blw1x.parentNode, "f-hide");
            a8i.y9p(this.bTm0x, "f-hide")
        } else {
            a8i.y9p(this.bla1x.parentNode, "f-hide");
            a8i.x9o(this.blw1x.parentNode, "f-hide");
            a8i.x9o(this.bTm0x, "f-hide")
        }
    };
    b9i.bl0x = function (e9f) {
        e9f.clazz = " m-layer-down";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "下载";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bn0x(e9f);
        this.bX0x([[this.o9f, "click", this.bT0x.f9e(this)]]);
        this.ew1x = TYPE_MAP[e9f.type];
        this.hb2x = e9f.id
    };
    b9i.bC0x = function () {
        this.bF0x()
    };
    b9i.Ca9R = function () {
        this.bt0x()
    };
    b9i.DJ0x = function (d9g) {
        this.z9q("onok", D9u);
        this.bt0x()
    };
    b9i.bT0x = function (d9g) {
        var g9d = h9c.W0x(d9g, "d:action");
        switch (a8i.t9k(g9d, "action")) {
            case"download":
                this.bt0x();
                window.open(a8i.t9k(g9d, "src"));
                break;
            case"orpheus":
                this.bt0x();
                location.href = "orpheus://" + k9b.cwS8K(JSON.stringify({
                    type: this.ew1x,
                    id: this.hb2x,
                    cmd: "download"
                }));
                break
        }
    };
    b9i.cwO7H = function (d9g) {
        if ((d9g || bb0x).code == 200) {
            this.KW2x = d9g.data;
            this.bla1x.innerText = "V" + this.KW2x.mac;
            this.blw1x.innerText = "V" + this.KW2x.pc
        }
    };
    l9c.Mk2x = function (e9f) {
        n9e.bTn0x.A9r(e9f).J9A()
    }
})();
(function () {
    var c9h = NEJ.P, l9c = c9h("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l9c.DM0x = FullscreenApi
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, k9b = c9h("nej.u"), q9h = c9h("nm.d"), bR0x = {};
    q9h.B9s = function (K9B) {
        return bR0x[K9B]
    };
    q9h.ng4k = function (K9B, bg0x) {
        bR0x[K9B] = bg0x
    };
    q9h.fo2x = function (j9a) {
        k9b.eH1x(j9a, function (p9g, K9B) {
            var bg0x = bR0x[K9B] || {};
            NEJ.X(bg0x, p9g);
            bR0x[K9B] = bg0x
        })
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, be0x = c9h("nej.h");
    be0x.Xj6d = function (K9B) {
        return localStorage.getItem(K9B)
    };
    be0x.Xi6c = function (K9B, D9u) {
        localStorage.setItem(K9B, D9u)
    };
    be0x.bmr1x = function (K9B) {
        localStorage.removeItem(K9B)
    };
    be0x.bms1x = function () {
        localStorage.clear()
    };
    be0x.cwN7G = function () {
        var m9d = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m9d.push(localStorage.key(i));
        return m9d
    };
    be0x.bmC1x = function () {
        (document.onstorageready || br0x)()
    };
    be0x.bmE1x = function () {
        return !0
    }
})();
(function () {
    var c9h = NEJ.P, O9F = c9h("nej.p"), iw3x = c9h("nej.c"), be0x = c9h("nej.h"), tE6y;
    if (O9F.na4e.trident || !!window.localStorage) return;
    var cwM7F = function () {
        var rX6R, ei1x;
        var bkg0x = function () {
            rX6R = document.createElement("div");
            NEJ.X(rX6R.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rX6R);
            rX6R.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iw3x.B9s("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var PA4E = function () {
            ei1x = window.clearTimeout(ei1x);
            var hW2x = rX6R.getElementsByTagName("object")[0];
            if (!!hW2x.initStorage) {
                delete rX6R;
                tE6y = hW2x;
                tE6y.initStorage("nej-storage");
                (document.onstorageready || br0x)();
                return
            }
            ei1x = window.setTimeout(PA4E, 500)
        };
        return function () {
            if (!!tE6y) return;
            bkg0x();
            PA4E()
        }
    }();
    be0x.Xj6d = be0x.Xj6d.eG1x(function (d9g) {
        d9g.stopped = !0;
        if (!tE6y) return;
        d9g.value = tE6y.getItem(d9g.args[0])
    });
    be0x.Xi6c = be0x.Xi6c.eG1x(function (d9g) {
        d9g.stopped = !0;
        if (!tE6y) return;
        var bf0x = d9g.args;
        tE6y.setItem(bf0x[0], bf0x[1])
    });
    be0x.bmr1x = be0x.bmr1x.eG1x(function (d9g) {
        d9g.stopped = !0;
        if (!tE6y) return;
        tE6y.removeItem(d9g.args[0])
    });
    be0x.bms1x = be0x.bms1x.eG1x(function (d9g) {
        d9g.stopped = !0;
        if (!!tE6y) tE6y.clear()
    });
    be0x.bmC1x = be0x.bmC1x.eG1x(function (d9g) {
        d9g.stopped = !0;
        cwM7F()
    });
    be0x.bmE1x = be0x.bmE1x.eG1x(function (d9g) {
        d9g.stopped = !0;
        d9g.value = !!tE6y
    })
})();
(function () {
    var c9h = NEJ.P, k9b = c9h("nej.u"), h9c = c9h("nej.v"), be0x = c9h("nej.h"), v9m = c9h("nej.j"),
        I9z = c9h("nej.ut"), R9I = {};
    v9m.vo7h = function (K9B, D9u) {
        var bTl0x = JSON.stringify(D9u);
        try {
            be0x.Xi6c(K9B, bTl0x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bTl0x != be0x.Xj6d(K9B)) R9I[K9B] = D9u;
        return this
    };
    v9m.tG6A = function (K9B) {
        var j9a = JSON.parse(be0x.Xj6d(K9B) || "null");
        return j9a == null ? R9I[K9B] : j9a
    };
    v9m.bTj0x = function (K9B, D9u) {
        var j9a = v9m.tG6A(K9B);
        if (j9a == null) {
            j9a = D9u;
            v9m.vo7h(K9B, j9a)
        }
        return j9a
    };
    v9m.Mn2x = function (K9B) {
        delete R9I[K9B];
        be0x.bmr1x(K9B);
        return this
    };
    v9m.cFk0x = function () {
        var bni1x = function (p9g, K9B, bz0x) {
            delete bz0x[K9B]
        };
        return function () {
            k9b.eH1x(R9I, bni1x);
            be0x.bms1x();
            return this
        }
    }();
    v9m.cFl0x = function (m9d) {
        m9d = m9d || {};
        k9b.bd0x(be0x.cwN7G(), function (K9B) {
            m9d[K9B] = v9m.tG6A(K9B)
        });
        return m9d
    };
    I9z.fJ2x.A9r({
        element: document, event: "storageready", oneventadd: function () {
            if (be0x.bmE1x()) {
                document.onstorageready()
            }
        }
    });
    var cwB7u = function () {
        var cwz7s = function (D9u, K9B, bz0x) {
            be0x.Xi6c(K9B, JSON.stringify(D9u));
            delete bz0x[K9B]
        };
        return function () {
            k9b.eH1x(R9I, cwz7s)
        }
    }();
    h9c.s9j(document, "storageready", cwB7u);
    be0x.bmC1x()
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), k9b = c9h("nej.u"), O9F = c9h("nej.ut"), Mq2x;
    if (!!O9F.bnJ1x) return;
    O9F.bnJ1x = NEJ.C();
    Mq2x = O9F.bnJ1x.N9E(O9F.cK0x);
    Mq2x.cy0x = function () {
        var gK2x = +(new Date), nf4j = "dat-" + gK2x;
        return function () {
            this.cE0x();
            var R9I = this.constructor[nf4j];
            if (!R9I) {
                R9I = {};
                this.constructor[nf4j] = R9I
            }
            this.S0x = R9I
        }
    }();
    Mq2x.B9s = function (K9B) {
        return this.S0x[K9B]
    };
    Mq2x.ng4k = function (K9B, D9u) {
        var ne4i = this.S0x[K9B];
        this.S0x[K9B] = D9u;
        h9c.z9q(localCache, "cachechange", {key: K9B, type: "set", oldValue: ne4i, newValue: D9u});
        return this
    };
    Mq2x.cM0x = function (K9B) {
        var ne4i = this.S0x[K9B];
        k9b.bbZ8R(this.S0x, K9B);
        h9c.z9q(localCache, "cachechange", {key: K9B, type: "delete", oldValue: ne4i, newValue: undefined});
        return ne4i
    };
    Mq2x.WZ6T = function (GF1x) {
        return NEJ.Q(this.S0x, GF1x)
    };
    window.localCache = O9F.bnJ1x.A9r();
    O9F.fJ2x.A9r({element: localCache, event: "cachechange"})
})();
(function () {
    var c9h = NEJ.P, fz2x = NEJ.R, br0x = NEJ.F, k9b = c9h("nej.u"), v9m = c9h("nej.j"), O9F = c9h("nej.ut"),
        nf4j = "dat-" + +(new Date), nd4h;
    if (!!O9F.boe1x) return;
    O9F.boe1x = NEJ.C();
    nd4h = O9F.boe1x.N9E(O9F.cK0x);
    nd4h.cy0x = function () {
        this.cE0x();
        this.S0x = this.constructor[nf4j];
        if (!this.S0x) {
            this.S0x = {};
            this.S0x[nf4j + "-l"] = {};
            this.constructor[nf4j] = this.S0x
        }
    };
    nd4h.ss6m = function (K9B) {
        return this.S0x[K9B]
    };
    nd4h.pK5P = function (K9B, D9u) {
        this.S0x[K9B] = D9u
    };
    nd4h.lB4F = function (K9B, kh3x) {
        var j9a = this.ss6m(K9B);
        if (j9a == null) {
            j9a = kh3x;
            this.pK5P(K9B, j9a)
        }
        return j9a
    };
    nd4h.cwy7r = function (K9B) {
        if (K9B != null) {
            delete this.S0x[K9B];
            return
        }
        k9b.eH1x(this.S0x, function (p9g, K9B) {
            if (K9B == nf4j + "-l") return;
            this.cwy7r(K9B)
        }, this)
    };
    nd4h.cFo0x = function (K9B) {
        if (!!v9m.Mn2x) return v9m.Mn2x(K9B)
    };
    nd4h.cwu7n = function (K9B) {
        if (!!v9m.tG6A) return v9m.tG6A(K9B)
    };
    nd4h.cwt7m = function (K9B, D9u) {
        if (!!v9m.vo7h) v9m.vo7h(K9B, D9u)
    };
    nd4h.Ez0x = function (K9B, kh3x) {
        var j9a = this.Ua6U(K9B);
        if (j9a == null) {
            j9a = kh3x;
            this.xj8b(K9B, j9a)
        }
        return j9a
    };
    nd4h.Ua6U = function (K9B) {
        var j9a = this.ss6m(K9B);
        if (j9a != null) return j9a;
        j9a = this.cwu7n(K9B);
        if (j9a != null) this.pK5P(K9B, j9a);
        return j9a
    };
    nd4h.xj8b = function (K9B, D9u) {
        this.cwt7m(K9B, D9u);
        this.pK5P(K9B, D9u)
    };
    nd4h.bSZ0x = function (K9B) {
        if (K9B != null) {
            delete this.S0x[K9B];
            if (!!v9m.Mn2x) v9m.Mn2x(K9B);
            return
        }
        k9b.eH1x(this.S0x, function (p9g, K9B) {
            if (K9B == nf4j + "-l") return;
            this.bSZ0x(K9B)
        }, this)
    };
    nd4h.cFp0x = function () {
        this.bSZ0x();
        return this
    };
    nd4h.cFq0x = function (K9B) {
        var j9a = this.S0x[nf4j + "-l"];
        delete j9a[K9B]
    };
    nd4h.bpH2x = function (K9B) {
        var j9a = this.S0x[nf4j + "-l"], bf0x = fz2x.slice.call(arguments, 1);
        k9b.bd0x(j9a[K9B], function (cA0x) {
            try {
                cA0x.apply(null, bf0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j9a[K9B]
    };
    nd4h.bpI2x = function (K9B, cA0x) {
        cA0x = cA0x || br0x;
        var i9b = this.S0x[nf4j + "-l"][K9B];
        if (!i9b) {
            i9b = [cA0x];
            this.S0x[nf4j + "-l"][K9B] = i9b;
            return !1
        }
        i9b.push(cA0x);
        return !0
    };
    nd4h.cwm7f = function (i9b, bi0x, fZ2x) {
        if (!i9b) return !1;
        bi0x = parseInt(bi0x) || 0;
        fZ2x = parseInt(fZ2x) || 0;
        if (!fZ2x) {
            if (!i9b.loaded) return !1;
            fZ2x = i9b.length
        }
        if (!!i9b.loaded) fZ2x = Math.min(fZ2x, i9b.length - bi0x);
        for (var i = 0; i < fZ2x; i++) if (!i9b[bi0x + i]) return !1;
        return !0
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, k9b = c9h("nej.u"), O9F = c9h("nej.ut"), b9i, L9C;
    if (!!O9F.Uk6e) return;
    O9F.Uk6e = NEJ.C();
    b9i = O9F.Uk6e.N9E(O9F.boe1x);
    L9C = O9F.Uk6e.cs0x;
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.wG8y = e9f.key || "id";
        this.bk0x = e9f.data || bb0x;
        this.cwk7d = !!e9f.autogc;
        this.cwj7c(e9f.id)
    };
    b9i.bC0x = function () {
        this.bF0x();
        if (!!this.ef1x) {
            this.bSX0x()
        }
    };
    b9i.cwj7c = function (C9t) {
        var R9I;
        if (!!C9t) {
            R9I = this.S0x[C9t];
            if (!R9I) {
                R9I = {};
                this.S0x[C9t] = R9I
            }
        }
        R9I = R9I || this.S0x;
        R9I.hash = R9I.hash || {};
        this.UB6v = R9I
    };
    b9i.bSX0x = function () {
        this.ef1x = window.clearTimeout(this.ef1x);
        var bz0x = {};
        k9b.eH1x(this.UB6v, function (i9b, K9B) {
            if (K9B == "hash") return;
            if (!k9b.eJ1x(i9b)) return;
            k9b.bd0x(i9b, function (p9g) {
                if (!p9g) return;
                bz0x[p9g[this.wG8y]] = !0
            }, this)
        }, this);
        k9b.eH1x(this.WK6E(), function (p9g, C9t, dR1x) {
            if (!bz0x[C9t]) {
                delete dR1x[C9t]
            }
        })
    };
    b9i.cwh7a = function () {
        if (!!this.ef1x) {
            this.ef1x = window.clearTimeout(this.ef1x)
        }
        this.ef1x = window.setTimeout(this.bSX0x.f9e(this), 150)
    };
    b9i.Cr9i = function (p9g, WC6w) {
        p9g = this.bSV0x(p9g, WC6w) || p9g;
        if (!p9g) return null;
        var K9B = p9g[this.wG8y];
        if (K9B != null) {
            var hZ3x = this.WK6E()[K9B];
            if (!!hZ3x) p9g = NEJ.X(hZ3x, p9g);
            this.WK6E()[K9B] = p9g
        }
        delete p9g.bSU0x;
        return p9g
    };
    b9i.bSV0x = br0x;
    b9i.bqX2x = function (K9B, p9g) {
        if (!p9g) return;
        if (!k9b.eJ1x(p9g)) {
            var i9b = this.hw2x(K9B), p9g = this.Cr9i(p9g, K9B);
            if (!!p9g) i9b.unshift(p9g);
            return
        }
        k9b.nj4n(p9g, this.bqX2x.f9e(this, K9B))
    };
    b9i.UQ6K = function (K9B, cB0x) {
        var i9b = this.hw2x(K9B);
        i9b.length = Math.max(i9b.length, cB0x);
        this.brd2x(K9B);
        return this
    };
    b9i.kw3x = function (K9B) {
        return this.hw2x(K9B).length
    };
    b9i.brd2x = function (K9B, oV5a) {
        this.hw2x(K9B).loaded = oV5a != !1;
        return this
    };
    b9i.Ww6q = function (K9B) {
        return !!this.hw2x(K9B).loaded
    };
    b9i.uQ7J = function (K9B, i9b) {
        this.uP7I(K9B);
        this.bse2x({key: K9B, offset: 0, limit: i9b.length + 1}, {list: i9b, total: i9b.length})
    };
    b9i.hw2x = function () {
        var FS0x = function (K9B) {
            return (K9B || "") + (!K9B ? "" : "-") + "list"
        };
        return function (K9B) {
            var K9B = FS0x(K9B), i9b = this.UB6v[K9B];
            if (!i9b) {
                i9b = [];
                this.UB6v[K9B] = i9b
            }
            return i9b
        }
    }();
    b9i.WK6E = function () {
        var dR1x = this.UB6v.hash;
        if (!dR1x) {
            dR1x = {};
            this.UB6v.hash = dR1x
        }
        return dR1x
    };
    b9i.bsl2x = function () {
        var FS0x = function (e9f) {
            return "r-" + e9f.key
        };
        return function (e9f) {
            var jf3x = NEJ.X({}, e9f), of4j = FS0x(jf3x);
            if (!this.bpI2x(of4j, this.z9q.f9e(this))) {
                jf3x.rkey = of4j;
                jf3x.onload = this.cwa7T.f9e(this, jf3x);
                this.z9q("dopullrefresh", jf3x)
            }
            return this
        }
    }();
    b9i.cwa7T = function (e9f, i9b) {
        this.bqX2x(e9f.key, i9b);
        this.bpH2x(e9f.rkey, "onpullrefresh", e9f)
    };
    b9i.lR4V = function () {
        var FS0x = function (e9f) {
            return "r-" + e9f.key + "-" + e9f.offset + "-" + e9f.limit
        };
        return function (e9f) {
            e9f = e9f || bb0x;
            var jf3x = {
                key: "" + e9f.key || "",
                ext: e9f.ext || null,
                data: e9f.data || null,
                offset: parseInt(e9f.offset) || 0,
                limit: parseInt(e9f.limit) || 0
            }, i9b = this.hw2x(jf3x.key);
            if (this.cwm7f(i9b, jf3x.offset, jf3x.limit)) {
                this.z9q("onlistload", jf3x);
                return this
            }
            var of4j = FS0x(jf3x);
            if (!this.bpI2x(of4j, this.z9q.f9e(this))) {
                jf3x.rkey = of4j;
                jf3x.onload = this.bse2x.f9e(this, jf3x);
                this.z9q("doloadlist", jf3x)
            }
            return this
        }
    }();
    b9i.bse2x = function () {
        var Fq0x = function (p9g, r9i, i9b) {
            if (!!p9g) {
                return !0
            }
            i9b.splice(r9i, 1)
        };
        return function (e9f, m9d) {
            e9f = e9f || bb0x;
            var K9B = e9f.key, bi0x = e9f.offset, bST0x = this.hw2x(K9B);
            var i9b = m9d || [];
            if (!k9b.eJ1x(i9b)) {
                i9b = m9d.result || m9d.list || [];
                var cB0x = parseInt(m9d.total);
                if (!isNaN(cB0x) || cB0x > i9b.length) {
                    this.UQ6K(K9B, cB0x)
                }
            }
            k9b.bd0x(i9b, function (p9g, r9i) {
                bST0x[bi0x + r9i] = this.Cr9i(p9g, K9B)
            }, this);
            if (i9b.length < e9f.limit) {
                this.brd2x(K9B);
                k9b.nj4n(bST0x, Fq0x)
            }
            this.bpH2x(e9f.rkey, "onlistload", e9f)
        }
    }();
    b9i.uP7I = function () {
        var Fq0x = function (p9g, r9i, i9b) {
            i9b.splice(r9i, 1)
        };
        return function (K9B) {
            var i9b = this.hw2x(K9B);
            k9b.nj4n(i9b, Fq0x);
            this.brd2x(K9B, !1);
            if (this.cwk7d) {
                this.cwh7a()
            }
            return this
        }
    }();
    b9i.bSS0x = function (p9g, WC6w) {
        return !p9g.bSU0x
    };
    b9i.eK2x = function (C9t) {
        return this.WK6E()[C9t]
    };
    b9i.cFt0x = function (C9t) {
        var p9g = this.eK2x(C9t);
        if (!!p9g) p9g.bSU0x = !0
    };
    b9i.Wt6n = function () {
        var FS0x = function (e9f) {
            return "r-" + e9f.key + "-" + e9f.id
        };
        return function (e9f) {
            e9f = e9f || bb0x;
            var C9t = e9f[this.wG8y], jf3x = {id: C9t, ext: e9f.ext, data: e9f.data || {}, key: "" + e9f.key || ""};
            p9g = this.eK2x(C9t);
            jf3x.data[this.wG8y] = C9t;
            if (!!p9g && this.bSS0x(p9g, jf3x.key)) {
                this.z9q("onitemload", jf3x);
                return this
            }
            var of4j = FS0x(jf3x);
            if (!this.bpI2x(of4j, this.z9q.f9e(this))) {
                jf3x.rkey = of4j;
                jf3x.onload = this.cvU7N.f9e(this, jf3x);
                this.z9q("doloaditem", jf3x)
            }
            return this
        }
    }();
    b9i.cvU7N = function (e9f, p9g) {
        e9f = e9f || bb0x;
        this.Cr9i(p9g, e9f.key);
        this.bpH2x(e9f.rkey, "onitemload", e9f)
    };
    b9i.jA3x = function (e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.xK8C.f9e(this, e9f);
        this.z9q("doadditem", e9f)
    };
    b9i.xK8C = function (e9f, p9g) {
        var K9B = e9f.key;
        p9g = this.Cr9i(p9g, K9B);
        if (!!p9g) {
            var eZ2x = 0, i9b = this.hw2x(K9B);
            if (!e9f.push) {
                eZ2x = -1;
                var bi0x = e9f.offset || 0;
                i9b.splice(bi0x, 0, p9g)
            } else if (i9b.loaded) {
                eZ2x = 1;
                i9b.push(p9g)
            } else {
                i9b.length++
            }
        }
        var d9g = {key: K9B, flag: eZ2x, data: p9g, action: "add", ext: e9f.ext};
        this.z9q("onitemadd", d9g);
        return d9g
    };
    b9i.MF2x = function (e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.btN3x.f9e(this, e9f);
        this.z9q("dodeleteitem", e9f)
    };
    b9i.btN3x = function (e9f, bSR0x) {
        var p9g, K9B = e9f.key;
        if (!!bSR0x) {
            p9g = this.eK2x(e9f.id) || null;
            var C9t = e9f.id, cvS7L = this.wG8y, i9b = this.hw2x(K9B), r9i = k9b.dj1x(i9b, function (hZ3x) {
                return !!hZ3x && hZ3x[cvS7L] == C9t
            });
            if (r9i >= 0) i9b.splice(r9i, 1)
        }
        var d9g = {key: K9B, data: p9g, action: "delete", ext: e9f.ext};
        this.z9q("onitemdelete", d9g);
        return d9g
    };
    b9i.Wq6k = function (e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.cvR7K.f9e(this, e9f);
        this.z9q("doupdateitem", e9f)
    };
    b9i.cvR7K = function (e9f, p9g) {
        var K9B = e9f.key;
        if (!!p9g) p9g = this.Cr9i(p9g, K9B);
        var d9g = {key: K9B, data: p9g, action: "update", ext: e9f.ext};
        this.z9q("onitemupdate", d9g);
        return d9g
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, k9b = c9h("nej.u"), O9F = c9h("nej.ut"), b9i;
    if (!!O9F.bun3x) return;
    O9F.bun3x = NEJ.C();
    b9i = O9F.bun3x.N9E(O9F.Uk6e);
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.bjK0x({
            doloadlist: this.Wp6j.f9e(this),
            doloaditem: this.buv3x.f9e(this),
            doadditem: this.bSQ0x.f9e(this),
            dodeleteitem: this.Wn6h.f9e(this),
            doupdateitem: this.Wm6g.f9e(this),
            dopullrefresh: this.bSP0x.f9e(this)
        })
    };
    b9i.Wp6j = br0x;
    b9i.bSP0x = br0x;
    b9i.buv3x = br0x;
    b9i.bSQ0x = br0x;
    b9i.Wn6h = br0x;
    b9i.Wm6g = br0x
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        I9z = c9h("nej.ut"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), b9i, L9C;
    q9h.hG2x = NEJ.C();
    b9i = q9h.hG2x.N9E(I9z.bun3x);
    b9i.cq0x = function () {
        var Ct9k = location.protocol + "//" + location.host;
        var cvN7G = function (bs0x, j9a) {
            var bz0x = {conf: {}, data: {}, urls: []};
            k9b.bd0x(bs0x, function (K9B, r9i, i9b) {
                var bg0x = q9h.B9s(K9B);
                if (!bg0x) return;
                var bvs3x = bSO0x(bg0x.url, j9a[K9B]);
                bz0x.urls.push(bvs3x);
                bz0x.conf[bvs3x] = bg0x;
                bz0x.data[bvs3x] = JSON.stringify(j9a[K9B] == null ? "" : j9a[K9B])
            });
            return bz0x
        };
        var bSO0x = function (X0x, j9a) {
            return X0x.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j9a[$2] || $1
            })
        };
        var bSN0x = function (bg0x, e9f, d9g) {
            h9c.z9q(window, "requesterror", d9g);
            if (!!d9g.stopped) return;
            var Cu9l = bg0x.onerror || e9f.onerror;
            if (k9b.fD2x(Cu9l)) {
                this.z9q(Cu9l, d9g, e9f)
            } else {
                (Cu9l || br0x).call(this, d9g, e9f)
            }
            var d9g = {result: d9g, option: e9f};
            this.z9q("onerror", d9g);
            if (!d9g.stopped) (bg0x.onmessage || br0x).call(this, d9g.result.code, d9g.result)
        };
        var bSL0x = function (Q9H, bg0x, e9f) {
            var m9d = Q9H;
            if (k9b.gJ2x(bg0x.format)) {
                m9d = bg0x.format.call(this, Q9H, e9f)
            }
            return m9d
        };
        var ze8W = function (Q9H, bg0x, e9f, ul7e) {
            if (k9b.gJ2x(bg0x.beforeload)) {
                bg0x.beforeload.call(this, Q9H, e9f, bg0x)
            }
            if (Q9H && Q9H.code != null && Q9H.code != 200) {
                bSN0x.call(this, bg0x, e9f, {
                    key: e9f.key,
                    code: Q9H.code,
                    message: Q9H.message || "",
                    captchaId: Q9H.captchaId,
                    ext: Q9H
                });
                return
            }
            var m9d = Q9H;
            if (!ul7e) {
                m9d = bSL0x.call(this, Q9H, bg0x, e9f)
            } else if (k9b.gJ2x(bg0x.format)) {
                var bvR3x = [];
                k9b.bd0x(ul7e.urls, function (X0x) {
                    bvR3x.push(bSL0x.call(this, Q9H[X0x], ul7e.conf[X0x], e9f))
                }, this);
                bvR3x.push(e9f);
                m9d = bg0x.format.apply(this, bvR3x)
            }
            var og4k = bg0x.onload || e9f.onload, bSK0x = bg0x.finaly || e9f.finaly || br0x;
            if (k9b.fD2x(og4k)) {
                bSK0x.call(this, this.z9q(og4k, m9d), e9f)
            } else {
                bSK0x.call(this, (og4k || br0x).call(this, m9d), e9f)
            }
        };
        var AZ9Q = function (bg0x, e9f, ca0x) {
            bSN0x.call(this, bg0x, e9f, {key: e9f.key, code: ca0x.code || -1, message: ca0x.message || ""})
        };
        return function (bg0x, e9f) {
            if (k9b.fD2x(bg0x)) {
                bg0x = q9h.B9s(bg0x)
            }
            delete e9f.value;
            (bg0x.filter || br0x).call(this, e9f, bg0x);
            var Q9H = e9f.value;
            if (!!Q9H) {
                ze8W.call(this, Q9H, bg0x, e9f);
                return
            }
            var X0x, j9a = e9f.data || bb0x, zS9J = {
                cookie: !0,
                type: bg0x.rtype || "json",
                method: bg0x.type || "POST",
                onerror: AZ9Q.f9e(this, bg0x, e9f),
                noescape: bg0x.noescape
            };
            if (k9b.eJ1x(bg0x.url)) {
                var ul7e = cvN7G(bg0x.url, j9a);
                X0x = Ct9k + "/api/batch";
                zS9J.data = k9b.cD0x(ul7e.data);
                zS9J.onload = ze8W.ev1x(this, bg0x, e9f, ul7e);
                zS9J.headers = {"batch-method": "POST"};
                delete ul7e.data
            } else {
                var kt3x = bg0x.url.indexOf(":") < 0 ? Ct9k : "";
                X0x = bSO0x(kt3x + bg0x.url, j9a);
                zS9J.data = k9b.cD0x(e9f.data);
                zS9J.onload = ze8W.ev1x(this, bg0x, e9f)
            }
            if (zS9J.method == "GET") zS9J.query = zS9J.data;
            return v9m.bm0x(X0x, zS9J)
        }
    }();
    b9i.HO1x = function () {
        var gF2x = /^get|list|pull$/i;
        return function (bSJ0x, e9f) {
            var K9B = e9f.key, bg0x = q9h.B9s(K9B.split("-")[0] + "-" + bSJ0x);
            if (gF2x.test(bSJ0x) && K9B.indexOf("post-") < 0) bg0x.type = "GET";
            this.cq0x(bg0x, e9f)
        }
    }();
    b9i.cFw0x = function (K9B, i9b) {
        var cB0x = i9b.length;
        this.bse2x({key: K9B, offset: 0, limit: cB0x + 1}, {list: i9b, total: cB0x})
    };
    b9i.Wp6j = function (e9f) {
        this.HO1x("list", e9f)
    };
    b9i.buv3x = function (e9f) {
        this.HO1x("get", e9f)
    };
    b9i.bSP0x = function (e9f) {
        this.HO1x("pull", e9f)
    };
    b9i.bSQ0x = function (e9f) {
        this.HO1x("add", e9f)
    };
    b9i.Wn6h = function (e9f) {
        this.HO1x("del", e9f)
    };
    b9i.Wm6g = function (e9f) {
        this.HO1x("update", e9f)
    };
    b9i.cvy7r = function (p9g) {
        this.Cr9i(p9g)
    };
    I9z.fJ2x.A9r({element: window, event: "requesterror"})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), I9z = c9h("nej.ut"), q9h = c9h("nm.d"), bwG4K = {},
        b9i, L9C;
    var uD7w = function (m9d, e9f) {
        m9d.conf = e9f.conf;
        return m9d
    };
    q9h.fo2x({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (Q9H, e9f) {
                return uD7w({mv: Q9H}, e9f)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (m9d, e9f) {
                if (!!m9d.songs && m9d.songs.length > 0) m9d.song = m9d.songs[0]; else m9d.song = bwG4K;
                delete m9d.songs;
                return uD7w(m9d, e9f)
            }, filter: function (e9f) {
                e9f.data.ids = "[" + e9f.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: uD7w},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: uD7w},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (m9d, e9f) {
                m9d.playlist = m9d.result;
                delete m9d.result;
                return uD7w(m9d, e9f)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: uD7w},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: uD7w},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: uD7w},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e9f) {
                var i9b = e9f.data.id.split("-");
                e9f.data.radioId = i9b[0];
                e9f.data.asc = i9b[1] == 2;
                e9f.data.limit = 1e3;
                delete e9f.data.id
            }, format: function (Q9H, e9f) {
                var cvx7q = {id: e9f.data.radioId, programs: Q9H.programs};
                return uD7w({djradio: cvx7q}, e9f)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: uD7w},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e9f) {
                e9f.data.lv = 0;
                e9f.data.tv = 0
            }, format: function (m9d, e9f) {
                var xz8r = {lyric: "", nolyric: true};
                if (m9d.code == 200 && m9d.lrc && m9d.lrc.lyric) {
                    xz8r.lyric = m9d.lrc.lyric;
                    xz8r.nolyric = false
                } else {
                    xz8r.nolyric = true
                }
                return uD7w({lyric: xz8r}, e9f)
            }
        }
    });
    q9h.xA8s = NEJ.C();
    b9i = q9h.xA8s.N9E(q9h.hG2x);
    b9i.cvw7p = function (u9l, cU0x) {
        return this.ss6m(this.Wh6b(u9l, cU0x))
    };
    b9i.Vf6Z = function (u9l, cU0x, e9f) {
        e9f = e9f || {};
        var j9a = this.ss6m(this.Wh6b(u9l, cU0x));
        if (j9a && (u9l != 13 && u9l != 19 || e9f.conf && e9f.conf.useCache)) {
            this.z9q("onresourceload", u9l, cU0x, j9a, e9f.conf);
            return
        }
        e9f.data = {id: cU0x};
        e9f.onload = this.cvv7o.f9e(this, u9l, cU0x);
        e9f.onerror = this.cvt7m.f9e(this, u9l, cU0x);
        this.cq0x("res-" + this.Cy9p(u9l) + "-get", e9f)
    };
    b9i.cvv7o = function (u9l, cU0x, m9d) {
        var j9a = m9d[this.Cy9p(u9l)];
        this.pK5P(this.Wh6b(u9l, cU0x), j9a);
        this.z9q("onresourceload", u9l, cU0x, j9a, m9d.conf)
    };
    b9i.cvt7m = function (u9l, cU0x, m9d, e9f) {
        if (m9d.code != 404) {
            this.z9q("onresourceerror", u9l, cU0x, m9d.code);
            return
        }
        this.pK5P(this.Wh6b(u9l, cU0x), bwG4K);
        this.z9q("onresourceload", u9l, cU0x, bwG4K, e9f.conf)
    };
    b9i.cFz0x = function (u9l, e9f) {
        this.cq0x("res-" + this.Cy9p(u9l) + "-play", e9f)
    };
    b9i.Wh6b = function (u9l, cU0x) {
        return "res-" + this.Cy9p(u9l) + "-" + cU0x
    };
    b9i.Cy9p = function (u9l) {
        var bz0x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz0x[u9l]
    };
    q9h.xA8s.MI2x = function (u9l, cU0x) {
        if (!this.fj2x) this.fj2x = q9h.xA8s.A9r({});
        return this.fj2x.cvw7p(u9l, cU0x)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        q9h = c9h("nm.d"), l9c = c9h("nm.x"), bfz9q = /^[1-9][0-9]*$/, b9i, L9C;
    var LOCAL_LOG_KEY = "local-log";
    q9h.fo2x({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    q9h.hT2x = NEJ.C();
    b9i = q9h.hT2x.N9E(q9h.hG2x);
    b9i.eS2x = function (U0x, bg0x) {
        if (!U0x || !bg0x) return;
        if (k9b.fD2x(bg0x)) {
            try {
                bg0x = JSON.parse(bg0x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a8i)
                }
            }
        }
        if (!k9b.lv4z(bg0x)) return;
        this.cq0x("bi-log", {data: {logs: JSON.stringify([{action: U0x, json: bg0x}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U0x + ", json=" + JSON.stringify(bg0x))
        }
    };
    b9i.Wd6X = function (oj4n) {
        if (!k9b.eJ1x(oj4n)) return;
        this.cq0x("bi-batch-log", {data: {logs: JSON.stringify(oj4n)}})
    };
    b9i.bSB0x = function (bg0x) {
        if (!bg0x || !bg0x.type || !bg0x.rid) return;
        var oo4s = bg0x.type;
        if (bfz9q.test(oo4s)) {
            oo4s = this.Cy9p(oo4s)
        }
        if (!oo4s) return;
        if (oo4s == "playlist") oo4s = "list";
        this.eS2x("search", {type: oo4s, id: bg0x.rid || null, keyword: bg0x.keyword || null})
    };
    b9i.Vm6g = function () {
        var cve7X = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bg0x) {
            if (!bg0x || !bg0x.type || !bg0x.rid) return;
            if (bg0x.play === undefined) bg0x.play = true;
            var oo4s = bg0x.type;
            if (bfz9q.test(oo4s)) {
                oo4s = this.Cy9p(oo4s)
            }
            if (!oo4s) return;
            if (oo4s == "playlist") oo4s = "list";
            var Q9H = {id: bg0x.rid, type: oo4s};
            if (oo4s == "song" && bg0x.source) {
                Q9H.source = this.bSy0x(bg0x.source);
                if (!!bg0x.sourceid) Q9H.sourceid = bg0x.sourceid
            }
            this.eS2x(!bg0x.play ? "addto" : "play", Q9H);
            if (oo4s == "song" && bg0x.hash && bg0x.hash.match(cve7X)) {
                this.eS2x(!bg0x.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b9i.bgh9Y = function (C9t, bA0x, ee1x, Ej0x) {
        var Q9H = {type: "song", wifi: 0, download: 0};
        var cuZ7S = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        Q9H.id = C9t;
        Q9H.time = Math.round(bA0x);
        Q9H.end = k9b.fD2x(Ej0x) ? Ej0x : cuZ7S[Ej0x] || "";
        if (ee1x && ee1x.fid) {
            Q9H.source = this.bSy0x(ee1x.fid);
            Q9H.sourceId = ee1x.fdata
        }
        this.eS2x("play", Q9H)
    };
    b9i.bSw0x = function (u9l, cU0x) {
        if (!u9l || !cU0x) return;
        if (bfz9q.test(u9l)) u9l = this.Cy9p(u9l);
        if (u9l != "playlist" && u9l != "dj") return;
        var bg0x = q9h.B9s("plus-" + u9l + "-count");
        if (!bg0x) return !1;
        this.cq0x(bg0x, {data: {id: cU0x}});
        var R9I = this.lB4F("play-hist-" + u9l, []);
        if (k9b.dj1x(R9I, cU0x) < 0) {
            R9I.push(cU0x);
            return !0
        }
        return !1
    };
    b9i.Cy9p = function (u9l) {
        var bz0x = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bz0x[u9l]
    };
    b9i.bSy0x = function (MM2x) {
        var bz0x = {
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
        return bz0x[MM2x]
    };
    b9i.bSu0x = function (hj2x) {
        var oj4n = this.Ez0x(LOCAL_LOG_KEY, []);
        oj4n.unshift(hj2x);
        if (oj4n.length > 200) {
            oj4n.length = 200
        }
        this.xj8b(LOCAL_LOG_KEY, oj4n)
    };
    b9i.cuR7K = function () {
        return this.Ua6U(LOCAL_LOG_KEY)
    };
    b9i.eq1x = function (Q9H) {
        this.eS2x("play", Q9H)
    };
    var bSt0x = q9h.hT2x.gf2x();
    l9c.rU6O = function () {
        bSt0x.eS2x.apply(bSt0x, arguments)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), v9m = c9h("nej.j"), I9z = c9h("nej.ut"),
        a8i = c9h("nej.e"), k9b = c9h("nej.u"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), q9h = c9h("nm.d");
    var FullscreenApi = l9c.DM0x || {};
    if (!q9h.xA8s) return;
    var R9I = q9h.xA8s.A9r({onresourceload: cuO7H});
    var us7l = q9h.hT2x.gf2x();

    function cuO7H(u9l, cU0x, j9a, bg0x) {
        var i9b = [];
        switch (parseInt(u9l)) {
            case 2:
                i9b = j9a;
                break;
            case 13:
                i9b = j9a.tracks;
                break;
            case 18:
                i9b.push(j9a);
                break;
            case 19:
                i9b = j9a.songs;
                break;
            case 21:
                if (j9a.mp && j9a.mp.fee && j9a.mp.pl <= 0) {
                    l9c.VD6x(j9a.data.id, j9a.mp.fee);
                    return
                }
                break
        }
        if (l9c.MT2x(i9b, true, null, u9l == 19 ? {source: "album", sourceid: cU0x} : null) == 0) {
            return
        }
        l9c.ft2x({clazz: "m-layer-w2", bubble: !1, message: bg0x.message})
    }

    function cuN7G(d9g, nQ4U, zf8X, eA1x) {
        eA1x = eA1x || {};
        if (d9g.action == "ok") {
            if (zf8X) {
                location.dispatch2("/payfee?songId=" + zf8X)
            } else {
                location.dispatch2("/payfee?fee=" + nQ4U || 1)
            }
            us7l.eS2x("click", {
                type: "tobuyvip",
                name: "box",
                source: eA1x.source || "song",
                sourceid: eA1x.sourceid || zf8X || 0
            })
        } else if (d9g.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zf8X);
            us7l.eS2x("click", {
                type: "tobuyone",
                name: "box",
                source: eA1x.source || "song",
                sourceid: eA1x.sourceid || zf8X || 0
            })
        }
    }

    function VO6I(bG0x) {
        l9c.ft2x({clazz: "m-layer-w2", bubble: !1, message: bG0x, btntxt: "知道了"})
    }

    function VN6H(bG0x, Q9H) {
        VO6I((Q9H || bb0x).toast || bG0x)
    }

    l9c.is3x = function (bG0x, C9t, u9l, cuL7E, bj0x) {
        bG0x = bG0x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cuL7E && bj0x && bj0x.privilege && bj0x.privilege.toast) {
            v9m.bm0x("/api/song/toast", {
                query: {id: bj0x.id},
                type: "json",
                onload: VN6H.f9e(this, bG0x),
                onerror: VN6H.f9e(this, bG0x)
            })
        } else if (C9t && u9l) {
            R9I.Vf6Z(u9l, C9t, {conf: {message: bG0x, useCache: u9l != 18}})
        } else {
            VO6I(bG0x)
        }
    };
    l9c.uq7j = function (nQ4U, zf8X, u9l, eA1x, nw4A) {
        var bR0x, oQ5V = "m-popup-info", bhO0x = "单首购买", bhS0x = "马上去开通", cT0x = "唱片公司要求，当前歌曲须付费使用。", bSs0x = true;
        try {
            bR0x = top.api.feeMessage || {}
        } catch (e) {
            bR0x = {}
        }
        if (nQ4U == 1 || nQ4U == 8 || nQ4U == 16) {
            if (u9l == "song") {
                oQ5V = "m-popup-song-buy";
                cT0x = bR0x["vip2"] || cT0x;
                bhS0x = bR0x["vip2button"] || "包月购买";
                bhO0x = bR0x["vip2link"] || bhO0x;
                if (nw4A && nw4A.flag !== undefined) {
                    var bs0x = nw4A.flag.toString(2).split("");
                    if (parseInt(bs0x.pop(), 10) == 1) {
                        bSs0x = false
                    }
                }
            } else {
                cT0x = bR0x["vip"] || cT0x
            }
        } else if (nQ4U == 4) {
            cT0x = bR0x["album"] || cT0x;
            bhS0x = "立即订购"
        } else {
            cT0x = bR0x["unknow"] || cT0x
        }
        l9c.kB3x({
            clazz: "m-layer-w5",
            html: a8i.cd0x(oQ5V, {songTxt: bhO0x, tip: cT0x, oktext: bhS0x, cctext: "以后再说", showSongText: bSs0x}),
            onaction: cuN7G.ev1x(null, nQ4U, zf8X, eA1x)
        })
    };
    l9c.bSr0x = function (hD2x, gl2x) {
        l9c.hu2x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u9l) {
                if (u9l == "ok") {
                    l9c.Mk2x({id: hD2x, type: gl2x})
                }
            }
        })
    };
    l9c.VD6x = function (kj3x, nQ4U) {
        var bR0x, cT0x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR0x = top.api.feeMessage || {}
        } catch (e) {
            bR0x = {}
        }
        if (nQ4U == 1 || nQ4U == 8) {
            cT0x = bR0x["vip"] || cT0x
        } else if (nQ4U == 4) {
            cT0x = bR0x["album"] || cT0x
        } else {
            cT0x = bR0x["unknow"] || cT0x
        }
        return l9c.kB3x({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a8i.cd0x("m-popup-info", {tip: cT0x, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d9g) {
                if (d9g.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kj3x);
                    us7l.eS2x("click", {type: "tobuyone", name: "box", source: "mv", sourceid: kj3x || 0})
                }
            }
        })
    };
    l9c.MT2x = function () {
        function compareFee(cuH7A, cuG7z) {
            var bz0x = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bz0x[cuH7A] || 0) - (bz0x[cuG7z] || 0)
        }

        return function (i9b, cT0x, sw6q, eA1x) {
            sw6q = sw6q || {};
            var zu8m = [], MS2x = {}, bSq0x = 0, bSp0x = 0, MR2x = null;
            if (!i9b || !i9b.length) return zu8m;
            k9b.bd0x(i9b, function (bj0x) {
                var fy2x = l9c.pO5T(bj0x);
                if (fy2x == 0) {
                    zu8m.push(bj0x)
                } else if (fy2x == 10) {
                    if (bj0x.privilege) {
                        bj0x.fee = bj0x.privilege.fee
                    }
                    if (compareFee(bj0x.fee, MS2x.fee) > 0) {
                        MS2x = bj0x
                    }
                } else if (fy2x == 11) {
                    ++bSq0x;
                    if (!sw6q.play) zu8m.push(bj0x)
                } else if (fy2x == 1e3) {
                    ++bSp0x;
                    if (!sw6q.download) zu8m.push(bj0x)
                } else if (fy2x == 100) {
                    MR2x = bj0x
                }
            });
            if (zu8m.length == 0 && cT0x) {
                if (bSq0x == i9b.length) {
                    var ue7X = i9b[0].privilege || {};
                    if (ue7X.payed) {
                        l9c.is3x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l9c.uq7j(ue7X.fee, null, null, eA1x)
                    }
                } else if (bSp0x == i9b.length) {
                    l9c.is3x("因版权方要求，该歌曲不支持下载")
                } else if (MS2x.id) {
                    l9c.uq7j(MS2x.fee, MS2x.id, null, eA1x, MS2x.privilege)
                } else {
                    if (MR2x && i9b.length == 1 && MR2x.privilege && MR2x.privilege.st < 0 && MR2x.privilege.toast) {
                        l9c.is3x(null, null, null, true, MR2x)
                    } else {
                        l9c.is3x()
                    }
                }
            }
            return zu8m
        }
    }();
    l9c.pO5T = function (bj0x) {
        if (!bj0x) return 0;
        var fy2x = bj0x.privilege;
        if (bj0x.program) return 0;
        if (window.GAbroad) return 100;
        if (fy2x) {
            if (fy2x.st != null && fy2x.st < 0) {
                return 100
            }
            if (fy2x.fee > 0 && fy2x.fee != 8 && fy2x.payed == 0 && fy2x.pl <= 0) return 10;
            if (fy2x.fee == 16) return 11;
            if ((fy2x.fee == 0 || fy2x.payed) && fy2x.pl > 0 && fy2x.dl == 0) return 1e3;
            if (fy2x.pl == 0 && fy2x.dl == 0) return 100;
            return 0
        } else {
            var ey1x = bj0x.status != null ? bj0x.status : bj0x.st != null ? bj0x.st : 0;
            if (bj0x.status >= 0) return 0;
            if (bj0x.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, fz2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), I9z = c9h("nej.ut"), w9n = c9h("nm.w"), b9i;
    if (!!w9n.bSn0x) return;
    var ck0x = ~[];
    ck0x = {
        bSm0x: ++ck0x,
        cuu7n: (![] + "")[ck0x],
        kx3x: ++ck0x,
        MN2x: (![] + "")[ck0x],
        VT6N: (ck0x[ck0x] + "")[ck0x],
        bSi0x: ++ck0x,
        cFD0x: ({} + "")[ck0x],
        ctS7L: (ck0x[ck0x] + "")[ck0x],
        ctO7H: (![] + "")[ck0x],
        Vw6q: ++ck0x,
        VV6P: (!"" + "")[ck0x],
        cFE0x: ++ck0x,
        CE9v: ++ck0x,
        bRS0x: ({} + "")[ck0x],
        xI8A: ++ck0x,
        ctx7q: ++ck0x,
        cFF0x: ++ck0x,
        cFG0x: ++ck0x
    };
    ck0x.ML2x = (ck0x.ML2x = ck0x + "")[ck0x.CE9v] + (ck0x.MK2x = ck0x.ML2x[ck0x.kx3x]) + (ck0x.VW6Q = (ck0x.GT1x + "")[ck0x.kx3x]) + (!ck0x + "")[ck0x.Vw6q] + (ck0x.GY1x = ck0x.ML2x[ck0x.xI8A]) + (ck0x.GT1x = (!"" + "")[ck0x.kx3x]) + (ctq7j = (!"" + "")[ck0x.bSi0x]) + ck0x.ML2x[ck0x.CE9v] + ck0x.GY1x + ck0x.MK2x + ck0x.GT1x;
    ck0x.VW6Q = ck0x.GT1x + (!"" + "")[ck0x.Vw6q] + ck0x.GY1x + ctq7j + ck0x.GT1x + ck0x.VW6Q;
    ck0x.GT1x = ck0x.bSm0x[ck0x.ML2x][ck0x.ML2x];
    w9n.bSn0x = ck0x
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), O9F = c9h("nej.ui"), b9i;
    if (!!O9F.Wa6U) return;
    var iT3x = a8i.th6b(".#<uispace>{position:absolute;background:#fff;}");
    O9F.Wa6U = NEJ.C();
    b9i = O9F.Wa6U.N9E(O9F.Rq5v);
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.bX0x([[document, "click", this.uc7V.f9e(this)]]);
        this.cto7h = !!e9f.nostop;
        this.bRM0x = {top: e9f.top, left: e9f.left}
    };
    b9i.bC0x = function () {
        delete this.ym8e;
        delete this.bkq0x;
        delete this.qX5c;
        delete this.bRK0x;
        delete this.We6Y;
        delete this.bRM0x;
        this.bF0x()
    };
    b9i.ch0x = function () {
        this.lX4b = iT3x
    };
    b9i.bW0x = function () {
        this.ci0x();
        this.Bo9f = this.o9f;
        h9c.s9j(this.o9f, "click", this.ctf7Y.f9e(this))
    };
    b9i.uc7V = function (d9g) {
        if (d9g.button != 2) this.bt0x()
    };
    b9i.ctf7Y = function (d9g) {
        if (this.cto7h) return;
        h9c.tS7L(d9g);
        var F9w = h9c.W0x(d9g);
        if (F9w.tagName == "A") h9c.cn0x(d9g)
    };
    b9i.cte7X = function () {
        var df1x = /\s+/i;
        return function (oq4u) {
            oq4u = (oq4u || "").trim().toLowerCase().split(df1x);
            oq4u[0] = oq4u[0] || "bottom";
            oq4u[1] = oq4u[1] || "left";
            this.qX5c = oq4u
        }
    }();
    b9i.csV6P = function (oq4u) {
        var m9d = {}, nG4K = this.bkq0x, cFI0x = a8i.ox5C(), cF0x = this.o9f.offsetWidth, ce0x = this.o9f.offsetHeight;
        switch (oq4u[0]) {
            case"top":
                m9d.top = nG4K.top - ce0x;
                m9d.left = oq4u[1] == "right" ? nG4K.left + nG4K.width - cF0x : nG4K.left;
                break;
            case"left":
                m9d.left = nG4K.left - cF0x;
                m9d.top = oq4u[1] == "bottom" ? nG4K.top + nG4K.height - ce0x : nG4K.top;
                break;
            case"right":
                m9d.left = nG4K.left + nG4K.width;
                m9d.top = oq4u[1] == "bottom" ? nG4K.top + nG4K.height - ce0x : nG4K.top;
                break;
            default:
                m9d.top = nG4K.top + nG4K.height;
                m9d.left = oq4u[1] == "right" ? nG4K.left + nG4K.width - cF0x : nG4K.left;
                break
        }
        return m9d
    };
    b9i.Lw2x = function () {
        if (!this.bRK0x) {
            this.gH2x(this.bRM0x);
            return
        }
        if (!!this.We6Y) {
            this.gH2x(this.ym8e);
            return
        }
        if (!!this.bkq0x) this.gH2x(this.csV6P(this.qX5c))
    };
    b9i.csI6C = function (F9w, dq1x, d9g) {
        dq1x = dq1x || bb0x;
        var bRE0x = a8i.ox5C(), cY1x = h9c.jJ3x(d9g) + (dq1x.left || 0), hz2x = h9c.mn4r(d9g) + (dq1x.top || 0),
            cF0x = F9w.offsetWidth + (dq1x.right || 0), ce0x = F9w.offsetHeight + (dq1x.bottom || 0),
            MH2x = bRE0x.scrollWidth, blg1x = bRE0x.scrollHeight, blj1x = cY1x + cF0x, bln1x = hz2x + ce0x;
        switch (this.qX5c[0]) {
            case"top":
                hz2x = bln1x > blg1x ? hz2x - ce0x : hz2x;
                if (this.qX5c[1] == "right") {
                    cY1x = cY1x - cF0x < 0 ? 0 : cY1x - cF0x
                } else {
                    cY1x = blj1x > MH2x ? MH2x - cF0x : cY1x
                }
                break;
            case"left":
                cY1x = blj1x > MH2x ? MH2x - cF0x : cY1x;
                if (this.qX5c[1] == "top") {
                    hz2x = bln1x > blg1x ? hz2x - ce0x : hz2x
                } else {
                    hz2x = hz2x - ce0x < 0 ? hz2x : hz2x - ce0x
                }
                break;
            case"right":
                cY1x = cY1x - cF0x < 0 ? 0 : cY1x - cF0x;
                if (this.qX5c[1] == "top") {
                    hz2x = bln1x > blg1x ? hz2x - ce0x : hz2x
                } else {
                    hz2x = hz2x - ce0x < 0 ? hz2x : hz2x - ce0x
                }
                break;
            default:
                hz2x = hz2x - ce0x < 0 ? hz2x : hz2x - ce0x;
                if (this.qX5c[1] == "left") {
                    cY1x = blj1x > MH2x ? MH2x - cF0x : cY1x
                } else {
                    cY1x = cY1x - cF0x < 0 ? 0 : cY1x - cF0x
                }
                break
        }
        return {top: hz2x, left: cY1x}
    };
    b9i.blv1x = function () {
        var csG6A = function (F9w, dq1x) {
            F9w = a8i.B9s(F9w);
            if (!F9w) return;
            dq1x = dq1x || bb0x;
            var bi0x = a8i.hS2x(F9w);
            return {
                top: bi0x.y - (dq1x.top || 0),
                left: bi0x.x - (dq1x.left || 0),
                width: F9w.offsetWidth + (dq1x.right || 0),
                height: F9w.offsetHeight + (dq1x.bottom || 0)
            }
        };
        return function (e9f) {
            e9f = e9f || bb0x;
            this.We6Y = e9f.event;
            this.cte7X(e9f.align);
            if (!!this.We6Y) this.ym8e = this.csI6C(e9f.target, e9f.delta, this.We6Y);
            this.bkq0x = csG6A(e9f.target, e9f.delta);
            this.bRK0x = !!e9f.fitable;
            this.J9A();
            return this
        }
    }()
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), O9F = c9h("nej.ui"), b9i,
        L9C;
    if (!!O9F.CF9w) return;
    O9F.CF9w = NEJ.C();
    b9i = O9F.CF9w.N9E(O9F.Yu7n);
    L9C = O9F.CF9w.cs0x;
    O9F.CF9w.cFK0x = function () {
        var csz6t = function (d9g, C9t, fM2x, ky3x, Vd6X) {
            var cC0x, K9B = C9t + "-i", R9I = fM2x.xQ8I, bRB0x = !!ky3x.noclear, bRz0x = !!ky3x.toggled;
            if (k9b.gJ2x(ky3x.onbeforeclick)) {
                var Wj6d = ky3x.noclear, csq6k = ky3x.toggled;
                try {
                    ky3x.onbeforeclick(ky3x)
                } catch (e) {
                }
                bRB0x = !!ky3x.noclear;
                bRz0x = !!ky3x.toggled;
                ky3x.toggled = csq6k;
                ky3x.noclear = Wj6d
            }
            var Gr0x = R9I[K9B];
            if (bRz0x && !!Gr0x) {
                Gr0x.bt0x();
                return
            }
            h9c.bh0x(d9g);
            if (!bRB0x) {
                h9c.z9q(document, "click");
                cC0x = fM2x.A9r(ky3x)
            } else {
                cC0x = fM2x.bVU1x(ky3x, !0)
            }
            R9I[K9B] = cC0x;
            cC0x.xF8x("onbeforerecycle", function () {
                delete R9I[K9B]
            });
            cC0x.blv1x(Vd6X)
        };
        return function (g9d, e9f) {
            g9d = a8i.B9s(g9d);
            if (!g9d) return this;
            if (!this.xQ8I) this.xQ8I = {};
            var C9t = a8i.lD4H(g9d);
            if (!!this.xQ8I[C9t]) return this;
            e9f = NEJ.X({}, e9f);
            var Vd6X = NEJ.EX({align: "", delta: null, fitable: !1}, e9f);
            Vd6X.target = C9t;
            e9f.destroyable = !0;
            if (!e9f.fixed) {
                Vd6X.fitable = !0;
                e9f.parent = document.body
            }
            this.xQ8I[C9t] = [C9t, e9f.event || "click", csz6t.ev1x(null, C9t, this, e9f, Vd6X)];
            h9c.s9j.apply(h9c, this.xQ8I[C9t]);
            return this
        }
    }();
    O9F.CF9w.cFM0x = function (g9d) {
        if (!this.xQ8I) return this;
        var C9t = a8i.lD4H(g9d), d9g = this.xQ8I[C9t];
        if (!d9g) return this;
        delete this.xQ8I[C9t];
        h9c.mI4M.apply(h9c, d9g);
        var cC0x = this.xQ8I[C9t + "-i"];
        if (!!cC0x) cC0x.bt0x();
        return this
    };
    b9i.blR1x = function () {
        return O9F.Wa6U.A9r(this.cg0x)
    };
    b9i.RP5U = function () {
        L9C.RP5U.apply(this, arguments);
        this.cg0x.top = null;
        this.cg0x.left = null;
        this.cg0x.nostop = !1
    };
    b9i.blv1x = function (e9f) {
        if (!!this.oE5J) this.oE5J.blv1x(e9f);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bc0x = c9h("nej.ui"), n9e = c9h("nm.l"), b9i, L9C;
    n9e.blV1x = NEJ.C();
    b9i = n9e.blV1x.N9E(bc0x.CF9w);
    b9i.bl0x = function (e9f) {
        e9f.nohack = true;
        this.bn0x(e9f)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), b9i, L9C;
    var FullscreenApi = l9c.DM0x || {};
    n9e.Z0x = NEJ.C();
    b9i = n9e.Z0x.N9E(n9e.blV1x);
    L9C = n9e.Z0x.cs0x;
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.ew1x = e9f.type || 1
    };
    b9i.bW0x = function () {
        this.ci0x();
        this.o9f = a8i.ow5B(this.cso6i());
        var i9b = a8i.dk1x(this.o9f);
        this.rn5s = i9b[0];
        this.cu0x = i9b[1]
    };
    b9i.cso6i = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b9i.Lw2x = function () {
        var D9u = {}, cj0x = this.o9f.style, jL3x = a8i.ox5C(), nZ4d = {left: jL3x.scrollLeft, top: jL3x.scrollTop},
            dq1x = {left: jL3x.clientWidth - this.o9f.offsetWidth, top: jL3x.clientHeight - this.o9f.offsetHeight};
        D9u.top = Math.max(0, nZ4d.top + dq1x.top / 2);
        D9u.left = Math.max(0, nZ4d.left + dq1x.left / 2);
        this.oE5J.gH2x(D9u)
    };
    b9i.J9A = function (e9f) {
        L9C.J9A.call(this);
        this.Lw2x();
        this.ew1x == 1 ? a8i.fm2x(this.rn5s, "u-icn-32", "u-icn-31") : a8i.fm2x(this.rn5s, "u-icn-31", "u-icn-32");
        this.cu0x.innerHTML = e9f.tip || ""
    };
    window.g_showTipCard = n9e.Z0x.J9A = function () {
        var ei1x;
        return function (e9f) {
            clearTimeout(ei1x);
            if (e9f.parent === undefined) e9f.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e9f.autoclose === undefined) e9f.autoclose = true;
            e9f.clazz = "m-sysmsg";
            !!this.fj2x && this.fj2x.T0x();
            this.fj2x = this.A9r(e9f);
            this.fj2x.J9A(e9f);
            if (e9f.autoclose) ei1x = setTimeout(this.bt0x.f9e(this), 2e3)
        }.f9e(n9e.Z0x)
    }();
    n9e.Z0x.bt0x = function () {
        !!this.fj2x && this.fj2x.bt0x()
    }
})();
(function () {
    var c9h = NEJ.P, v9m = c9h("nej.j"), k9b = c9h("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v9m.bm0x = v9m.bm0x.eG1x(function (d9g) {
            e9f = d9g.args[1];
            e9f.query = e9f.query || {};
            if (k9b.fD2x(e9f.query)) e9f.query = k9b.ht2x(e9f.query);
            e9f.query.ref = "mail"
        })
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, fz2x = NEJ.R, I9z = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), K9B = "playlist-tracks_", b9i;
    q9h.fo2x({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (Q9H, e9f) {
                this.csn6h(Q9H.playlist);
                return {total: 0, list: fz2x}
            }, onerror: function () {
                this.z9q("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (Q9H, e9f) {
                var nD4H = Q9H.playlist;
                nD4H.creator = GUser;
                nD4H.isHost = !0;
                nD4H.typeFlag = "playlist";
                return nD4H
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.if3x, "listchange", d9g)
            }, onmessage: function () {
                var mk4o = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (bY0x) {
                    n9e.Z0x.J9A({tip: mk4o[bY0x] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e9f) {
                e9f.id = e9f.data.pid
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.if3x, "listchange", d9g)
            }, onmessage: function () {
                var mk4o = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (bY0x) {
                    n9e.Z0x.J9A({tip: mk4o[bY0x] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e9f) {
                var eA1x = e9f.ext || {};
                e9f.ext = NEJ.X(eA1x, e9f.data);
                e9f.data = {id: e9f.ext.id}
            }, format: function (Q9H, e9f) {
                n9e.Z0x.J9A({tip: "收藏成功" + (Q9H.point > 0 ? ' 获得<em class="s-fc6">' + Q9H.point + "积分</em>" : "")});
                var p9g = e9f.ext;
                p9g.subscribedCount++;
                return p9g
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.csm6g, "listchange", d9g);
                h9c.z9q(q9h.csm6g, "itemchange", {attr: "subscribedCount", data: d9g.data})
            }, onmessage: function () {
                var mk4o = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (bY0x) {
                    n9e.Z0x.J9A({type: 2, tip: mk4o[bY0x] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e9f) {
                e9f.id = e9f.data.id = e9f.data.pid
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.if3x, "listchange", d9g)
            }, onmessage: function () {
                var mk4o = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (bY0x) {
                    n9e.Z0x.J9A({tip: mk4o[bY0x], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e9f) {
                var j9a = e9f.data, Wy6s = {};
                Wy6s["playlist-update-name"] = {id: j9a.id, name: j9a.name};
                Wy6s["playlist-update-tag"] = {id: j9a.id, tags: j9a.tags.join(";")};
                Wy6s["playlist-update-desc"] = {id: j9a.id, desc: j9a.description};
                e9f.data = Wy6s;
                e9f.ext = j9a
            },
            format: function (V0x, rh5m, UP6J, e9f) {
                if (V0x.code == 200 && rh5m.code == 200 && UP6J.code == 200) {
                    e9f.ext.allSuccess = true;
                    n9e.Z0x.J9A({tip: "保存成功"})
                } else if (V0x.code == 407 || rh5m.code == 407 || UP6J.code == 407) {
                    e9f.ext.allSuccess = false;
                    n9e.Z0x.J9A({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e9f.ext.allSuccess = false;
                    n9e.Z0x.J9A({type: 2, tip: "保存失败"})
                }
                return this.eK2x(e9f.ext.id)
            },
            finaly: function (d9g, e9f) {
                h9c.z9q(q9h.if3x, "listchange", d9g)
            },
            onmessage: function (bY0x) {
                n9e.Z0x.J9A({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (Q9H, e9f) {
                var p9g = this.eK2x(e9f.ext.id);
                if (Q9H.code == 200) p9g.name = e9f.ext.name;
                return Q9H
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (Q9H, e9f) {
                var p9g = this.eK2x(e9f.ext.id);
                if (Q9H.code == 200) p9g.tags = e9f.ext.tags;
                return Q9H
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (Q9H, e9f) {
                var p9g = this.eK2x(e9f.ext.id);
                if (Q9H.code == 200) p9g.description = e9f.ext.description;
                return Q9H
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e9f) {
                e9f.url = e9f.data.url;
                delete e9f.data.url
            }, format: function (Q9H, e9f) {
                n9e.Z0x.J9A({tip: "保存成功"});
                var p9g = this.eK2x(e9f.data.id);
                p9g.coverImgUrl = e9f.url;
                e9f.ext = p9g;
                return p9g
            }, onmessage: function (bY0x) {
                n9e.Z0x.J9A({type: 2, tip: "保存失败"})
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.if3x, "itemchange", {attr: "coverImgUrl", data: e9f.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (Q9H, e9f) {
                var nD4H = this.eK2x(e9f.data.id);
                if (!nD4H) return;
                nD4H.playCount++;
                h9c.z9q(q9h.if3x, "itemchange", {attr: "playcount", data: nD4H})
            }
        }
    });
    q9h.if3x = NEJ.C();
    b9i = q9h.if3x.N9E(q9h.hG2x);
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bRw0x = function () {
        var do1x = GUser.userId;
        this.lR4V({limit: 1001, key: "playlist_my-" + do1x, data: {offset: 0, limit: 1001, uid: do1x}})
    };
    b9i.csn6h = function (i9b) {
        var do1x = GUser.userId, iU3x = [], bRv0x = [];
        k9b.bd0x(i9b, function (p9g) {
            p9g.typeFlag = "playlist";
            if (p9g.creator && p9g.creator.userId == do1x) {
                if (p9g.specialType == 5) p9g.name = "我喜欢的音乐";
                p9g.isHost = !0;
                iU3x.push(p9g)
            } else {
                bRv0x.push(p9g)
            }
        });
        this.uQ7J("playlist_new-" + do1x, iU3x);
        this.uQ7J("playlist_fav-" + do1x, bRv0x)
    };
    b9i.csc6W = function (j9a) {
        this.cq0x("playlist-update-cover", {data: j9a})
    };
    b9i.cFN0x = function () {
        var UI6C = this.csa6U.B9s("host-plist");
        if (UI6C.length == 0) {
            return
        }
        if (UI6C.length == 1 && UI6C[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = UI6C.length; i < len; i++) {
            var p9g = UI6C[i];
            if (p9g.trackCount > 0) return p9g.id
        }
        return this.csa6U.B9s("host-plist")[0].id
    };
    b9i.crY6S = function (C9t) {
        if (GUser && GUser.userId > 0) {
            this.cq0x("playlist-upcount", {data: {id: C9t}})
        }
    };
    b9i.Eb0x = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b9i.cFO0x = function () {
        return GUser.userId
    };
    b9i.Ec0x = function (p9g) {
        if (p9g.userId == GUser.userId && p9g.specialType == 5) p9g.name = "我喜欢的音乐";
        h9c.z9q(this.constructor, "itemchange", {data: this.Cr9i(p9g)});
        return p9g
    };
    I9z.fJ2x.A9r({element: q9h.if3x, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c9h = NEJ.P, fz2x = NEJ.R, br0x = NEJ.F, bb0x = NEJ.O, I9z = c9h("nej.ut"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), b9i, L9C;
    q9h.fo2x({
        "program-get": {
            url: "/api/dj/program/detail", format: function (Q9H) {
                return Q9H.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e9f) {
                e9f.data.limit = 1e3;
                delete e9f.data.id
            }, format: function (Q9H, e9f) {
                var bRt0x = [], qf5k = Q9H.programs;
                if (qf5k) {
                    for (var i = 0, l = qf5k.length; i < l; i++) {
                        if (qf5k[i].programFeeType < 10 || qf5k[i].buyed) {
                            bRt0x.push(qf5k[i])
                        }
                    }
                }
                return bRt0x
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (Q9H, e9f) {
                return Q9H.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e9f) {
                e9f.ext = e9f.data;
                e9f.data = {id: e9f.ext.id};
                e9f.id = e9f.data.id
            }, format: function (Q9H, e9f) {
                n9e.Z0x.J9A({tip: "收藏成功"});
                var p9g = e9f.ext;
                p9g.subscribedCount++;
                p9g.subscribed = !0;
                return p9g
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.rb5g, "listchange", d9g)
            }, onmessage: function () {
                var mk4o = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (bY0x) {
                    n9e.Z0x.J9A({type: 2, tip: mk4o[bY0x] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d9g, e9f) {
                h9c.z9q(q9h.rb5g, "listchange", d9g)
            }, onmessage: function () {
                var mk4o = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (bY0x) {
                    l9c.bny1x({txt: mk4o[bY0x] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e9f) {
                var p9g = this.eK2x(e9f.data.id) || bb0x;
                e9f.ext = (p9g.listenerCount || 0) + 1
            }, format: function (Q9H, e9f) {
                var p9g = this.eK2x(e9f.data.id);
                if (!!p9g) {
                    p9g.listenerCount = Math.max(e9f.ext, p9g.listenerCount || 0)
                }
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.rb5g, "itemchange", {attr: "playCount", data: this.eK2x(e9f.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e9f) {
                e9f.data = {threadId: "A_DJ_1_" + e9f.id}
            }, format: function (Q9H, e9f) {
                var p9g = e9f.ext.data || this.eK2x(e9f.id);
                p9g.liked = true;
                p9g.likedCount++;
                e9f.ext.data = p9g;
                try {
                    top.player.setLike(p9g)
                } catch (e) {
                }
                return p9g
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.rb5g, "itemchange", {attr: "likedCount", data: e9f.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e9f) {
                e9f.data = {threadId: "A_DJ_1_" + e9f.id}
            }, format: function (Q9H, e9f) {
                var p9g = e9f.ext.data || this.eK2x(e9f.id);
                p9g.liked = false;
                p9g.likedCount--;
                e9f.ext.data = p9g;
                try {
                    top.player.setLike(p9g)
                } catch (e) {
                }
                return p9g
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.rb5g, "itemchange", {attr: "likedCount", data: e9f.ext.data})
            }
        }
    });
    q9h.rb5g = NEJ.C();
    b9i = q9h.rb5g.N9E(q9h.hG2x);
    b9i.cFP0x = function () {
        var do1x = GUser.userId;
        this.lR4V({limit: 1001, key: "program_fav-" + do1x, data: {offset: 0, limit: 1e3, uid: do1x}})
    };
    b9i.cFQ0x = function (dd1x) {
        var qh5m = dd1x[this.wG8y];
        l9c.crR6L(4, function (R9I) {
            R9I.uQ7J("track_program-" + qh5m, dd1x.songs)
        });
        delete dd1x.songs;
        var bO0x = dd1x.mainSong;
        l9c.crR6L(4, function (R9I) {
            R9I.uQ7J("track_program_main-" + qh5m, !bO0x ? [] : [bO0x])
        });
        dd1x.mainSong = (bO0x || bb0x).id
    };
    b9i.cFR0x = function (C9t) {
        var dd1x = this.eK2x(C9t), do1x = localCache.WZ6T("host.profile.userId");
        return !!dd1x && dd1x.dj.userId == do1x
    };
    b9i.cFS0x = function (C9t) {
        return !1
    };
    b9i.Ec0x = function (p9g) {
        h9c.z9q(this.constructor, "itemchange", {attr: "detail", data: this.Cr9i(p9g)});
        return p9g
    };
    b9i.crY6S = function (C9t) {
        this.cq0x("program-update-count", {data: {id: C9t}})
    };
    l9c.bRn0x = function (e9f) {
        var R9I = q9h.rb5g.A9r({
            onitemadd: function () {
                (e9f.onsuccess || br0x)()
            }, onerror: function () {
                (e9f.onerror || br0x)()
            }
        });
        if (e9f.data.liked) {
            R9I.uY7R(e9f.data)
        } else {
            R9I.oT5Y(e9f.data)
        }
    };
    b9i.oT5Y = function (dd1x) {
        if (!l9c.gM2x()) return;
        var ct0x = {ext: {}};
        if (k9b.lv4z(dd1x)) {
            ct0x.id = dd1x.id;
            ct0x.ext.data = dd1x
        } else {
            ct0x.id = dd1x
        }
        this.cq0x("program-like", ct0x)
    };
    b9i.uY7R = function (dd1x) {
        if (!l9c.gM2x()) return;
        var ct0x = {ext: {}};
        if (k9b.lv4z(dd1x)) {
            ct0x.id = dd1x.id;
            ct0x.ext.data = dd1x
        } else {
            ct0x.id = dd1x
        }
        this.cq0x("program-unlike", ct0x)
    };
    I9z.fJ2x.A9r({element: q9h.rb5g, event: ["listchange", "itemchange"]})
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, fz2x = NEJ.R, I9z = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), K9B = "playlist-tracks_",
        l9c = c9h("nm.x"), b9i;
    q9h.fo2x({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e9f) {
                e9f.data.c = JSON.stringify([{id: e9f.data.id}])
            }, format: function (Q9H, e9f) {
                var bj0x = l9c.Ev0x(Q9H.songs[0]);
                bj0x.privilege = Q9H.privileges[0];
                return bj0x
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e9f) {
                e9f.data.n = 1e3
            }, format: function (Q9H, e9f) {
                var hv2x = [];
                this.tP7I.Ec0x(Q9H.playlist);
                k9b.bd0x(Q9H.playlist.tracks, function (bO0x, r9i) {
                    var bRm0x = l9c.Ev0x(bO0x);
                    bRm0x.privilege = Q9H.privileges[r9i];
                    hv2x.push(bRm0x)
                }, this);
                return hv2x
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (Q9H, e9f) {
                var hv2x = [];
                k9b.bd0x(Q9H.songs, function (bj0x) {
                    hv2x.push(l9c.Ev0x(bj0x))
                });
                return hv2x
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e9f) {
                var bz0x = {}, j9a = e9f.data, crL6F = this.hw2x(e9f.key) || [];
                EA0x = [];
                k9b.bd0x(crL6F, function (bO0x) {
                    var C9t = k9b.lv4z(bO0x) ? bO0x.id : bO0x;
                    bz0x[C9t] = true
                });
                e9f.ext = [];
                k9b.bd0x(j9a.tracks, function (bO0x) {
                    var C9t = k9b.lv4z(bO0x) ? bO0x.id : bO0x;
                    if (!bz0x[C9t]) {
                        EA0x.push(C9t);
                        bz0x[C9t] = true;
                        e9f.ext.push(bO0x)
                    }
                });
                j9a.trackIds = JSON.stringify(EA0x);
                j9a.op = "add";
                if (!EA0x.length) {
                    e9f.value = {code: 502}
                }
            }, format: function (Q9H, e9f) {
                n9e.Z0x.J9A({tip: "已添加至歌单"});
                var nD4H = this.tP7I.eK2x(e9f.data.pid);
                if (!!Q9H.coverImgUrl) nD4H.coverImgUrl = Q9H.coverImgUrl;
                k9b.nj4n(e9f.ext, function (bO0x) {
                    this.xK8C(e9f, k9b.lv4z(bO0x) ? bO0x : null);
                    if (!!nD4H) nD4H.trackCount++
                }, this);
                h9c.z9q(q9h.if3x, "itemchange", {data: nD4H || {}, cmd: "add"});
                this.z9q("onaddsuccess");
                return null
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.xq8i, "listchange", {key: e9f.key, action: "refresh"});
                var qh5m = e9f.data.pid, cB0x = this.kw3x(e9f.key)
            }, onmessage: function () {
                var mk4o = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (bY0x) {
                    setTimeout(function () {
                        n9e.Z0x.J9A({tip: mk4o[bY0x] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e9f) {
                var j9a = e9f.data;
                e9f.ext = j9a.trackIds;
                j9a.trackIds = JSON.stringify(j9a.trackIds);
                j9a.op = "del"
            }, format: function (Q9H, e9f) {
                var nD4H = this.tP7I.eK2x(e9f.data.pid);
                k9b.bd0x(e9f.ext, function (C9t) {
                    this.btN3x({id: C9t, key: "track_playlist-" + e9f.data.pid}, !0);
                    if (!!nD4H) nD4H.trackCount = Math.max(0, nD4H.trackCount - 1)
                }, this);
                h9c.z9q(q9h.if3x, "itemchange", {data: nD4H || {}, cmd: "del"});
                return null
            }, finaly: function (d9g, e9f) {
                h9c.z9q(q9h.xq8i, "listchange", {key: e9f.key, action: "refresh"})
            }, onmessage: function (bY0x) {
                l9c.bny1x({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (Q9H, e9f) {
                return this.bRl0x.Ec0x(Q9H.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (Q9H, e9f) {
                var i9b = [];
                if (e9f.data.type == -1) {
                    if (Q9H.weekData && Q9H.weekData.length) {
                        e9f.data.type = 1
                    } else {
                        e9f.data.type = 0
                    }
                }
                if (e9f.data.type == 1) {
                    i9b = this.bRk0x(Q9H.weekData)
                } else {
                    i9b = this.bRk0x(Q9H.allData)
                }
                return i9b
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (Q9H, e9f) {
                var oj4n = [], i9b = Q9H.recommend || [];
                k9b.bd0x(i9b, function (bj0x, r9i) {
                    oj4n.push({
                        action: "recommendimpress",
                        json: {alg: bj0x.alg, scene: "user-song", position: r9i, id: bj0x.id}
                    })
                });
                this.kL3x.Wd6X(oj4n);
                e9f.limit = i9b.length;
                return i9b
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e9f) {
                e9f.data.lv = 0;
                e9f.data.tv = 0
            }, format: function (m9d, e9f) {
                return m9d
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    q9h.xq8i = NEJ.C();
    b9i = q9h.xq8i.N9E(q9h.hG2x);
    b9i.cy0x = function () {
        this.cE0x();
        this.tP7I = q9h.if3x.A9r();
        this.bRl0x = q9h.rb5g.A9r();
        this.kL3x = q9h.hT2x.A9r()
    };
    b9i.bRk0x = function (i9b) {
        var m9d = [], fq2x = 0;
        k9b.bd0x(i9b, function (p9g, r9i) {
            var bj0x = l9c.Ev0x(p9g.song);
            if (r9i == 0) {
                fq2x = p9g.score
            }
            bj0x.max = fq2x;
            bj0x.playCount = p9g.playCount;
            bj0x.score = p9g.score;
            m9d.push(bj0x)
        });
        return m9d
    };
    I9z.fJ2x.A9r({element: q9h.xq8i, event: ["listchange"]})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, cw0x = c9h("nm.pc");
    var bpz2x = {playlist: "A_PL_0_", dj: "A_DJ_1_", program: "A_DJ_1_", album: "R_AL_3_", song: "R_SO_4_"};
    var qu5z = function (bR0x) {
        var Ct9k = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bR0x), Ct9k)
    };
    var crI6C = function (ma4e) {
        var kF3x = "http://" + location.host + "/",
            Uy6s = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dQ1x = Uy6s.exec(ma4e);
        if (!dQ1x) return crH6B(ma4e);
        var gl2x = dQ1x[2], hD2x = dQ1x[3], do1x = dQ1x[4] || "", jn3x = "";
        switch (gl2x) {
            case"album":
                jn3x = "#/m/album/comment/?rid=" + bpz2x[gl2x] + hD2x + "&id=" + hD2x;
                break;
            case"playlist":
                jn3x = "#/m/playlist/comment/?rid=" + bpz2x[gl2x] + hD2x + "&id=" + hD2x;
                break;
            case"song":
            case"dj":
            case"program":
                jn3x = "#/m/song?rid=" + bpz2x[gl2x] + hD2x;
                break;
            case"event":
                jn3x = "#/m/friend/event/?id=" + hD2x + "&uid=" + do1x;
                break;
            case"user/home":
                jn3x = "#/m/personal/?uid=" + hD2x;
                break;
            case"mv":
                jn3x = "#/m2/mv/?id=" + hD2x;
                break;
            case"activity":
                jn3x = "#/m/friend/activity?id=" + hD2x;
                break;
            case"video":
                jn3x = "#/m2/mv/?id=" + hD2x + "&type=1";
                break;
            default:
                jn3x = "#/m/" + gl2x + "/?id=" + hD2x
        }
        return kF3x + jn3x
    };
    var crH6B = function (ma4e) {
        var crF6z = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dQ1x = crF6z.exec(ma4e);
        if (dQ1x) return "http://v.youku.com/v_show/id_" + dQ1x[1];
        return ma4e
    };
    cw0x.eq1x = function (gl2x, hD2x) {
        qu5z({name: "play", args: {type: gl2x, id: hD2x}})
    };
    cw0x.fC2x = function () {
        qu5z({name: "pause"})
    };
    cw0x.CN9E = function (ma4e) {
        qu5z({name: "open", args: {link: crI6C(ma4e)}})
    };
    cw0x.kT3x = function (gl2x, hD2x, cJ0x) {
        qu5z({name: "share", args: {type: gl2x, id: hD2x, shareContent: cJ0x}})
    };
    cw0x.bRi0x = function (gl2x, hD2x) {
        qu5z({name: "comment", args: {type: gl2x, id: hD2x}})
    };
    cw0x.crC6w = function () {
        qu5z({name: "init"})
    };
    cw0x.CP9G = function (ce0x) {
        qu5z({name: "setHeight", args: {height: ce0x}})
    };
    cw0x.ip3x = function (bG0x, Y0x) {
        qu5z({name: "toast", args: {message: bG0x || "", state: Y0x}})
    };
    cw0x.Fu0x = function (ma4e) {
        qu5z({name: "login", args: {link: ma4e}})
    };
    cw0x.bRh0x = function (CR9I) {
        qu5z({name: "topbar", args: {show: !!CR9I}})
    };
    cw0x.crA6u = function (bx0x) {
        qu5z({name: "refreshtopbar", args: {info: bx0x}})
    };
    cw0x.cry6s = function (bs0x, r9i) {
        qu5z({name: "big", args: {arr: bs0x, index: r9i}})
    };
    cw0x.Mk2x = function (cx0x) {
        qu5z({name: "download", args: {img: cx0x}})
    };
    cw0x.bRf0x = function (cru6o) {
        qu5z({name: "scrollable", args: {scrollable: cru6o}})
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d, d = (new J).d, e = (new J).d, f = (new J).d, g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15], l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]); else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74], e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g); else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g); else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]); else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
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
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]); else throw Error(b[146]); else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23], g = parseInt(b.charAt(d++), a[58]);
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
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
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
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {
                        }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }

                        var d = [c[21], c[141], B[6]], l = [], f = c[139], e = b[327], g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]), g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null, h = null, d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76], l = b[240], g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](), X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]), d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]), d = h[B[7]](b[354]), f = c[105];
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
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [], f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0); else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++) ; else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }

                    var z = Array.prototype.forEach, I = Array.prototype.map,
                        n = {e: M, j: !0, i: !0, h: !0, b: !0, a: !0};
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [], l = [];
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
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
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
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
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
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]), p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
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
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a:{
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
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
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta, f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]], e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
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
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0, t = {v: b[227]}, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({b: Xa, a: Ya})).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t), t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y), p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301], z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F); else {
                            var n = A.length, J = a[15], J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null; else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null; else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null; else if (null == D) ia = w; else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E), ja = f(xa), ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null; else if (G.length == a[15]) ka = b[0]; else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya; else {
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
                        l = Ca({ec: b[43], em: ga.message}), h = !1
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
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0, Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]], y = window[c[6]], N = a[16], T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158], L = a[158], ha = a[23], va = a[23], d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345], S = b[299], V = c[100], fa = a[91], ea = b[275], Ta = ea.length, sa = a[444],
                    ta = a[396], Ya = !1, Xa = !1, O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56], A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A), pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(), K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1; else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var bRe0x;
    var vm7f = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var crq6k = 0;
    var bRa0x = 0;
    var bQZ0x = 1;
    var bQY0x = 0;
    var brV2x = "";
    var bQX0x = "";
    var bQW0x = "";
    var WO6I = "";
    var WP6J = "";
    var bsk2x = "";
    var bQV0x = 0;
    var bQU0x = "";
    var Mu2x = "";
    var FV0x = 0;
    var bsA3x = ntes_get_domain();
    var bsB3x = null;
    var cFU0x = "//analytics.163.com";
    var cre6Y = function () {
    };

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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bsA3x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bsA3x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bsA3x
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
        var f = "", n = navigator;
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
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var crd6X = 0;
    var Ub6V = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Ub6V))
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
        var a = (1 << Ub6V) - 1;
        for (var b = 0; b < d.length * Ub6V; b += Ub6V) {
            c[b >> 5] |= (d.charCodeAt(b / Ub6V) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = crd6X ? "0123456789ABCDEF" : "0123456789abcdef";
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
        WO6I = "-";
        bsk2x = "-";
        WP6J = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            WO6I = b.width + "x" + b.height;
            bsk2x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                WO6I = f.width + "x" + f.height
            }
        }
        if (a.language) {
            WP6J = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                WP6J = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bQV0x = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cFV0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cre6Y;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bRe0x;
        brV2x = escape(a || document.location);
        bQX0x = escape(m || document.title);
        bQW0x = l === true ? "" : escape(l || document.referrer);
        bQU0x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bsB3x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bsB3x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (brV2x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bsB3x) {
                vm7f = fetch_visitor_hash();
                bRa0x = 1;
                ntes_set_cookie_long("_ntes_nnid", vm7f + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vm7f)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            vm7f = h.substr(0, o);
            FV0x = h.substr(o + 1, p - o - 1);
            if (FV0x == 0) {
                FV0x = (new Date).getTime();
                f = true
            }
            if (!vm7f) {
                vm7f = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", vm7f + "," + FV0x);
                ntes_set_cookie_long("_ntes_nuid", vm7f)
            }
            if (FV0x != 0 && b - FV0x > 365 * 86400 * 1e3) {
                FV0x = 0;
                ntes_set_cookie_long("_ntes_nnid", vm7f + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vm7f)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        Mu2x = c("P_INFO", "P_OINFO");
        Mu2x = Mu2x ? Mu2x.substr(0, Mu2x.indexOf("|")) : "";
        bQY0x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", vm7f, "&_nvtm=", crq6k, "&_nvsf=", bQZ0x, "&_nvfi=", bRa0x, "&_nlag=", WP6J, "&_nlmf=", bQV0x, "&_nres=", WO6I, "&_nscd=", bsk2x, "&_nstm=", bQY0x, "&_nurl=", brV2x, "&_ntit=", bQX0x, "&_nref=", bQW0x, "&_nfla=", bQU0x, "&_nssn=", Mu2x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bQZ0x = 0;
        neteaseTracker.callback = null
    }

    bRe0x = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}, l = d.lib = {}, s = function () {
    }, t = l.Base = {
        extend: function (a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        }, create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        }, init: function () {
        }, mixIn: function (a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        }, clone: function () {
            return this.init.prototype.extend(this)
        }
    }, r = l.WordArray = t.extend({
        init: function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        }, toString: function (a) {
            return (a || v).stringify(this)
        }, concat: function (a) {
            var c = this.words, e = a.words, j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        }, clamp: function () {
            var a = this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        }, clone: function () {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }), w = d.enc = {}, v = w.Hex = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    }, b = w.Latin1 = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    }, x = w.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        }, parse: function (a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }, q = l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
            this.j9a = new r.init;
            this.bQS0x = 0
        }, WU6O: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.j9a.concat(a);
            this.bQS0x += a.sigBytes
        }, Db0x: function (a) {
            var c = this.j9a, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bQT0x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bQR0x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.j9a = this.j9a.clone();
            return a
        }, bQT0x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.btq3x()
        }, update: function (a) {
            this.WU6O(a);
            this.Db0x();
            return this
        }, finalize: function (a) {
            a && this.WU6O(a);
            return this.WW6Q()
        }, blockSize: 16, btf3x: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, cqX6R: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this.bz0x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bz0x, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bz0x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
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

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        btq3x: function () {
            this.dR1x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bQR0x: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR1x.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
                t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12],
                D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, WW6Q: function () {
            var b = this.j9a, n = b.words, a = 8 * this.bQS0x, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Db0x();
            b = this.dR1x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dR1x = this.dR1x.clone();
            return b
        }
    });
    t.MD5 = v.btf3x(r);
    t.HmacMD5 = v.cqX6R(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this.btt3x, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.cqW6Q, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bQQ0x = e;
                this.K9B = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.btq3x()
            }, process: function (e) {
                this.WU6O(e);
                return this.Db0x()
            }, finalize: function (e) {
                e && this.WU6O(e);
                return this.WW6Q()
            }, keySize: 4, ivSize: 4, btt3x: 1, cqW6Q: 2, btf3x: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        WW6Q: function () {
            return this.Db0x(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bQP0x;
        c ? this.bQP0x = u : c = this.bQO0x;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bQK0x = e;
            this.bQP0x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bQK0x, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bQO0x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bQK0x, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bQO0x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this.bQQ0x == this.btt3x) var c = a.createEncryptor; else c = a.createDecryptor, this.bQT0x = 1;
            this.fe2x = c.call(a, this, b && b.words)
        }, bQR0x: function (a, b) {
            this.fe2x.processBlock(a, b)
        }, WW6Q: function () {
            var a = this.cfg.padding;
            if (this.bQQ0x == this.btt3x) {
                a.pad(this.j9a, this.blockSize);
                var b = this.Db0x(!0)
            } else b = this.Db0x(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
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
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.bex9o(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, bex9o: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.bex9o(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        btq3x: function () {
            for (var a = this.K9B, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cqL6F = d + 6) + 1), e = this.cqI6C = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cqG6A = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bQJ0x(a, b, this.cqI6C, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bQJ0x(a, c, this.cqG6A, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bQJ0x: function (a, b, c, d, e, j, l, f) {
            for (var m = this.cqL6F, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p.btf3x(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
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
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}

var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
    biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        console.log("liguoqinjim:" + a);
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c9h = NEJ.P, en1x = c9h("nej.g"), v9m = c9h("nej.j"), k9b = c9h("nej.u"), TV5a = c9h("nm.x.ek");
    TV5a.emj = {
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
    TV5a.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c9h = NEJ.P, en1x = c9h("nej.g"), v9m = c9h("nej.j"), k9b = c9h("nej.u"), TV5a = c9h("nm.x.ek"),
        l9c = c9h("nm.x");
    if (v9m.bm0x.redefine) return;
    window.GEnc = true;
    var bum3x = function (cqE6y) {
        var m9d = [];
        k9b.bd0x(cqE6y, function (cqC6w) {
            m9d.push(TV5a.emj[cqC6w])
        });
        return m9d.join("")
    };
    var cqA6u = v9m.bm0x;
    v9m.bm0x = function (X0x, e9f) {
        var j9a = {}, e9f = NEJ.X({}, e9f), lN4R = X0x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(X0x) && !(e9f.headers && e9f.headers[en1x.zU9L] == en1x.GS1x) && !e9f.noEnc) {
            if (lN4R != -1) {
                j9a = k9b.ht2x(X0x.substring(lN4R + 1));
                X0x = X0x.substring(0, lN4R)
            }
            if (e9f.query) {
                j9a = NEJ.X(j9a, k9b.fD2x(e9f.query) ? k9b.ht2x(e9f.query) : e9f.query)
            }
            if (e9f.data) {
                j9a = NEJ.X(j9a, k9b.fD2x(e9f.data) ? k9b.ht2x(e9f.data) : e9f.data)
            }
            // j9a["csrf_token"] = v9m.gz2x("__csrf");
            //liguoqinjim 
            var liguoqinjim1 = v9m.gz2x("__csrf");
            console.log("liguoqinjim csrf=" + liguoqinjim1);
            j9a["csrf_token"] = liguoqinjim1;
            X0x = X0x.replace("api", "weapi");
            e9f.method = "post";
            delete e9f.query;
            var bQz9q = window.asrsea(JSON.stringify(j9a), bum3x(["流泪", "强"]), bum3x(TV5a.md), bum3x(["爱心", "女孩", "惊恐", "大笑"]));
            e9f.data = k9b.cD0x({params: bQz9q.encText, encSecKey: bQz9q.encSecKey})
        }
        cqA6u(X0x, e9f)
    };
    v9m.bm0x.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
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
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), dw1x = c9h("nej.p"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), dE1x = c9h("nm.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), n9e = c9h("nm.l"),
        cw0x = c9h("nm.pc"), buQ3x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j9a = {
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
        }, cqg6a = function () {
            if (h9c && h9c.z9q) {
                h9c.dispatchEventalias = h9c.z9q
            }
        };
    cqg6a();
    l9c.buX3x = function (bO0x) {
        if (!bO0x || bO0x.copyrightId === undefined || !!bO0x.program) return false;
        if (window.GAbroad) {
            bO0x.fee = 0;
            return true
        }
        if (bO0x.status < 0) return true;
        var TQ5V;
        if (typeof GCopyrights !== "undefined") TQ5V = GCopyrights;
        try {
            if (!TQ5V && !!top.GCopyrights) TQ5V = top.GCopyrights
        } catch (e) {
        }
        if (TQ5V) {
            var r9i = k9b.dj1x(TQ5V, bO0x.copyrightId);
            if (r9i >= 0) return true
        }
        return false
    };
    l9c.bvh3x = function () {
        var Dk0x = /^\/m\/(song|album|artist|playlist|dj|search)\?/, xo8g = {
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
        }, cqe6Y = {
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
        var cpP6J = function (K9B, j9a, TN5S) {
            switch (K9B) {
                case"event":
                    j9a = j9a.split("|");
                    return "/event?id=" + j9a[0] + "&uid=" + j9a[1];
                case"searchsong":
                case"searchlyric":
                    var u9l = K9B == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j9a) + "&type=" + u9l;
                case"toplist":
                    return "/discover/toplist?id=" + j9a + "&_hash=songlist-" + TN5S;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + TN5S;
                    ;
                case"record":
                    j9a = j9a.split("|");
                    return "/user/songs/rank?id=" + j9a[0] + "&cat=" + j9a[1];
                    break;
                default:
                    return "/" + K9B + "?id=" + j9a + "&_hash=songlist-" + TN5S
            }
        };
        return function (ee1x, TN5S) {
            if (!ee1x) return null;
            var MM2x = ee1x.fid || (ee1x.type != 18 ? ee1x.type : null), bvp3x = ee1x.fdata || ee1x.rid,
                bQs9j = ee1x.page || ee1x.fhref;
            var K9B = xo8g[MM2x];
            if (!K9B) {
                var zH8z = (bQs9j || "").match(Dk0x);
                if (zH8z) K9B = zH8z[1]
            }
            if (!K9B) return null;
            return {title: cqe6Y[K9B], link: !xo8g[MM2x] ? bQs9j : cpP6J(K9B, bvp3x, TN5S), fid: MM2x, fdata: bvp3x}
        }
    }();
    l9c.Xd6X = function (kh3x) {
        var dp1x = kh3x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp1x = GUser;
        return dp1x
    };
    l9c.gM2x = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l9c.Mp2x = function () {
        var Dk0x = /#(.*?)$/;
        return function (gx2x) {
            var jC3x = gx2x === false ? location : top.location;
            return Dk0x.test(jC3x.href) ? RegExp.$1 : ""
        }
    }();
    l9c.Dn0x = function () {
        var Dp0x = a8i.di1x("audio"), cpL6F = Dp0x.canPlayType && Dp0x.canPlayType("audio/mpeg");
        if (cpL6F) return 2;
        var cpG6A = l9c.bwe3x().supported;
        if (cpG6A) return 1;
        return 0
    };
    l9c.bwe3x = function () {
        var go2x, bwf3x = !1, bwo4s = "";
        if (dw1x.dt1x.browser == "ie") {
            try {
                go2x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                go2x = null
            }
            if (go2x) {
                bwf3x = !0;
                bwo4s = go2x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                go2x = navigator.plugins["Shockwave Flash"];
                if (go2x) {
                    bwf3x = !0;
                    bwo4s = go2x.description
                }
            }
        }
        return {supported: bwf3x, version: bwo4s}
    };
    l9c.rC5H = function () {
        return "网易云音乐"
    };
    l9c.cpD6x = function () {
        return j9a
    };
    l9c.bQn9e = function (cJ0x) {
        var C9t = j9a[cJ0x];
        return C9t == null ? "" : buQ3x.replace("{ID}", C9t)
    };
    l9c.wv7o = function (bo0x, ed1x, Dq0x) {
        if (!bo0x) return "";
        if (!!Dq0x) {
            bo0x = l9c.cps6m(bo0x)
        }
        return l9c.Xg6a(l9c.cpr6l(bo0x, ed1x))
    };
    l9c.Xl6f = function () {
        var Uy6s = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bwL4P = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cpo6i = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, cpa6U = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var coU6O = function (dJ1x, bxa4e) {
            dJ1x = Mh2x(dJ1x);
            if (!!bxa4e) {
                dJ1x = dJ1x.replace(Uy6s.MLINE, "\n\n").replace(Uy6s.LING, "</br>")
            }
            dJ1x = l9c.Xg6a(dJ1x);
            return dJ1x
        };
        var Mh2x = function (bo0x) {
            return k9b.AU9L(cpo6i, bo0x)
        };
        return function (dJ1x, e9f, dF1x) {
            e9f = e9f || {};
            dF1x = dF1x || {};
            dF1x.actHash = {};
            var coT6N = !!e9f.parseLink, coR6L = !!e9f.parseAct, coP5U = e9f.linkTpl || bwL4P.LINK,
                coO5T = e9f.atTpl || bwL4P.AT, coN5S = e9f.atUrl || "/user/home?nickname=",
                coM5R = e9f.actTpl || bwL4P.ACT, bxa4e = !!e9f.keepSpace, bxT4X = e9f.linkKlass || "s-fc7";
            cGz0x = e9f.actBiJson || "";
            if (!dJ1x) return "";
            dJ1x = dJ1x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lw4A = cpa6U[coT6N + 2 * coR6L], df1x = Uy6s[lw4A], bs0x = null, jW3x = null, gv2x = 0, cGB0x = "",
                cGC0x = "";
            var pW5b = [];
            df1x.lastIndex = 0;
            while (bs0x = df1x.exec(dJ1x)) {
                var dQ1x = {html: "", before: bs0x.index - 1, after: bs0x.index + bs0x[0].length};
                if (bs0x[1]) {
                    var jW3x = bs0x[2].replace(/[^\x00-\xff]/g, "**");
                    if (jW3x.length < 4 || jW3x.length > 32) {
                    } else {
                        var DP0x = a8i.eC1x(coO5T);
                        dQ1x.html = a8i.cd0x(DP0x, {
                            value: Mh2x(bs0x[2]),
                            url: encodeURI(coN5S + bs0x[2]),
                            klass: bxT4X
                        });
                        pW5b.push(dQ1x)
                    }
                } else if (bs0x.length > 8 && bs0x[4]) {
                    var DP0x = a8i.eC1x(coP5U);
                    dQ1x.html = a8i.cd0x(DP0x, {value: Mh2x(bs0x[4]), url: bs0x[4], klass: bxT4X});
                    pW5b.push(dQ1x)
                } else {
                    var bPT8L = lw4A == "ACT_NOLINK" ? 4 : 9;
                    var DP0x = a8i.eC1x(coM5R);
                    dQ1x.html = a8i.cd0x(DP0x, {value: Mh2x(bs0x[bPT8L]), klass: bxT4X});
                    pW5b.push(dQ1x);
                    dF1x.actHash[bs0x[bPT8L].slice(1, -1)] = true
                }
            }
            var bfL9C = pW5b.length, kh3x = {before: dJ1x.length - 1, after: 0}, bfN9E = "";
            for (var i = 0; i <= bfL9C; i++) {
                var hy2x, fT2x;
                hy2x = (pW5b[i - 1] || kh3x).after;
                fT2x = (pW5b[i] || kh3x).before;
                if (fT2x >= hy2x && hy2x >= 0 && fT2x <= dJ1x.length - 1) {
                    bfN9E += coU6O(dJ1x.substring(hy2x, fT2x + 1), bxa4e)
                }
                if (pW5b[i]) {
                    bfN9E += pW5b[i].html
                }
            }
            return bfN9E
        }
    }();
    l9c.cps6m = function () {
        var df1x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bo0x) {
            return (bo0x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(df1x, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l9c.cpr6l = function () {
        var df1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ex1x = function (jW3x, ed1x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(jW3x) + '" class="' + (ed1x || "") + '">@' + jW3x + "</a>"
        };
        return function (bo0x, ed1x) {
            return (bo0x || "").replace(df1x, function ($0, $1) {
                return ex1x($1, ed1x)
            })
        }
    }();
    l9c.Xg6a = function () {
        var df1x = /\[(.*?)\]/g;
        return function (bo0x) {
            return (bo0x || "").replace(df1x, function ($1, $2) {
                var X0x = l9c.bQn9e($2);
                return !X0x ? $1 : '<img src="' + X0x + '"/>'
            })
        }
    }();
    l9c.BB9s = function (F9w, ed1x) {
        a8i.bE0x(F9w, ed1x) ? a8i.x9o(F9w, ed1x) : a8i.y9p(F9w, ed1x)
    };
    l9c.Ma2x = function (cQ0x, kF3x) {
        cQ0x = a8i.B9s(cQ0x);
        kF3x = a8i.B9s(kF3x);
        if (!cQ0x || !kF3x) return !1;
        for (kF3x = kF3x.parentNode; !!kF3x && kF3x != cQ0x; kF3x = kF3x.parentNode) ;
        return kF3x == cQ0x
    };
    l9c.lp4t = function () {
        var bPS8K = function (gT2x) {
            return (gT2x < 10 ? "0" : "") + gT2x
        };
        return function (kY3x) {
            kY3x = parseInt(kY3x) || 0;
            if (!kY3x) return "00:00";
            var yn8f = Math.floor(kY3x % 60), cow5B = Math.floor(kY3x / 60);
            return bPS8K(cow5B) + ":" + bPS8K(yn8f)
        }
    }();
    l9c.xV8N = function (fO2x, wJ8B) {
        if (!fO2x || fO2x.length == 0) return "";
        wJ8B = wJ8B || "/";
        var bs0x = [];
        for (var i = fO2x.length - 1; i >= 0; i--) {
            bs0x.unshift(fO2x[i].name)
        }
        return bs0x.join(wJ8B)
    };
    l9c.sd6X = function () {
        var Te5j = function (ij3x, ed1x, cQ0x, Xy7r) {
            var ex1x = Xy7r ? l9c.bgx9o : k9b.dG1x;
            if (!ij3x || !ij3x.name) return "";
            if (!ij3x.id) return '<span class="' + ed1x + '">' + ex1x(ij3x.name) + "</span>";
            return "<a" + (cQ0x ? ' target="_blank"' : "") + ' class="' + ed1x + '" href="/artist?id=' + ij3x.id + '" hidefocus="true">' + ex1x(ij3x.name) + "</a>"
        };
        return function (fO2x, V0x, wJ8B, cQ0x, bPP8H, Xy7r) {
            if (!fO2x || !fO2x.length) return "";
            wJ8B = wJ8B || "/";
            V0x = V0x || "";
            LY2x = "";
            var ep1x = [];
            for (var i = 0, i9b = [], sT6N = [], fL2x; i < fO2x.length; ++i) {
                ep1x.push(fO2x[i].name);
                if (!fO2x[i] || fO2x[i].id <= 0) {
                    sT6N.push(fO2x[i]);
                    continue
                }
                if (k9b.gJ2x(V0x)) {
                    fL2x = V0x(fO2x[i])
                } else {
                    fL2x = Te5j(fO2x[i], V0x, cQ0x, Xy7r)
                }
                if (fL2x && bPP8H && fO2x[i].tns && fO2x[i].tns.length > 0) {
                    LY2x = k9b.dG1x(fO2x[i].tns[0]);
                    fL2x += '<span class="s-fc8" title="' + LY2x + '"> - (' + LY2x + ")</span>"
                }
                !!fL2x && i9b.push(fL2x)
            }
            for (var i = 0, fL2x; i < sT6N.length; ++i) {
                if (k9b.gJ2x(V0x)) {
                    fL2x = V0x(sT6N[i])
                } else {
                    fL2x = Te5j(sT6N[i], V0x, cQ0x, Xy7r)
                }
                if (fL2x && bPP8H && sT6N[i].tns && sT6N[i].tns.length > 0) {
                    LY2x = k9b.dG1x(sT6N[i].tns[0]);
                    fL2x += '<span class="s-fc8" title="' + LY2x + '"> - (' + LY2x + ")</span>"
                }
                !!fL2x && i9b.push(fL2x)
            }
            return '<span title="' + ep1x.join(wJ8B) + '">' + i9b.join(wJ8B) + "</span>"
        }
    }();
    l9c.zy8q = function (fv2x, ql5q) {
        ql5q = ql5q || "86";
        return !!fv2x && (ql5q == "86" ? /^\d{11}$/ : /^\d+$/).test(fv2x)
    };
    l9c.cGD0x = function (fv2x) {
        if (!l9c.zy8q(fv2x)) return fv2x;
        return fv2x.substring(0, 3) + "****" + fv2x.substr(7)
    };
    l9c.kn3x = function () {
        var df1x = /^\s+$/g;
        return function (ii3x) {
            return !ii3x || df1x.test(ii3x)
        }
    }();
    l9c.SY5d = function () {
        var bgP0x = /[^\x00-\xfff]/g;
        return function (ii3x) {
            var cnX5c = ii3x.match(bgP0x) || [], ds1x = cnX5c.length;
            return ii3x.length + ds1x
        }
    }();
    l9c.Dv0x = function () {
        var bgP0x = /[^\x00-\xfff]/;
        return function (ii3x, eF1x) {
            for (var i = 0, len = ii3x.length; i < len && eF1x > 0; i++) {
                if (bgP0x.test(ii3x.charAt(i))) {
                    eF1x -= 2;
                    if (eF1x < 0) {
                        break
                    }
                } else {
                    eF1x -= 1
                }
            }
            return ii3x.substring(0, i)
        }
    }();
    l9c.Dw0x = function (ii3x, eF1x, SS5X) {
        eF1x = eF1x || 10;
        SS5X = SS5X || nej.p.dt1x.engine == "trident" && parseInt(nej.p.dt1x.release) < 5;
        if (SS5X && l9c.SY5d(ii3x) > eF1x) {
            return l9c.Dv0x(ii3x, eF1x) + "..."
        } else {
            return ii3x
        }
    };
    l9c.bPL8D = function (g9d) {
        return g9d === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g9d.type || g9d.href || ~g9d.tabIndex)
    };
    l9c.cnR5W = function (d9g, cQ0x) {
        if (!d9g || !cQ0x) return !0;
        var g9d, u9l = d9g.type.toLowerCase();
        if (u9l == "mouseout") {
            g9d = d9g.relatedTarget || d9g.toElement
        } else if (u9l == "mouseover") {
            g9d = d9g.relatedTarget || d9g.fromElement
        }
        return !g9d || g9d !== cQ0x && !l9c.Ma2x(cQ0x, g9d)
    };
    l9c.ts6m = function () {
        R9I = {};
        return function (g9d, eb1x) {
            var C9t = a8i.lD4H(g9d), K9B = "hover-" + C9t;
            if (!eb1x || !C9t || !!R9I[K9B]) return;
            R9I[K9B] = !0;
            h9c.s9j(C9t, "mouseover", function () {
                var bhi0x = a8i.H9y(g9d, "hshow") || [];
                var bhq0x = a8i.H9y(g9d, "icn-dislike") || [];
                a8i.y9p(C9t, "z-hover");
                a8i.ba0x(bhi0x[0], "display", "block");
                a8i.ba0x(bhq0x[0], "display", "block")
            });
            h9c.s9j(C9t, "mouseout", function () {
                var bhi0x = a8i.H9y(g9d, "hshow") || [];
                var bhq0x = a8i.H9y(g9d, "icn-dislike") || [];
                a8i.x9o(C9t, "z-hover");
                a8i.ba0x(bhi0x[0], "display", "none");
                a8i.ba0x(bhq0x[0], "display", "none")
            })
        }
    }();
    l9c.bPK8C = function () {
        var bz0x = {
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
        return function (ii3x) {
            return k9b.AU9L(bz0x, ii3x)
        }
    }();
    l9c.zw8o = function (bA0x) {
        if (k9b.ET0x(bA0x)) bA0x = bA0x.getTime();
        var eW2x = new Date, kg3x = eW2x.getTime() - bA0x;
        if (kg3x <= 6e4) return "刚刚";
        var nb4f = eW2x.getHours() * 36e5 + eW2x.getMinutes() * 6e4 + eW2x.getSeconds() * 1e3;
        if (kg3x <= nb4f) {
            if (kg3x < 36e5) {
                var ED0x = Math.floor(kg3x / 6e4);
                return ED0x + "分钟前"
            }
            return k9b.hY2x(bA0x, "HH:mm")
        } else {
            if (kg3x < nb4f + 864e5) {
                return "昨天" + k9b.hY2x(bA0x, "HH:mm")
            } else {
                var gD2x = eW2x.getFullYear(), SP5U = new Date(gD2x, 0, 1);
                var nb4f = eW2x.getTime() - SP5U.getTime();
                if (kg3x < nb4f) {
                    return k9b.hY2x(bA0x, "M月d日 HH:mm")
                }
                return k9b.hY2x(bA0x, "yyyy年M月d日")
            }
        }
    };
    l9c.cnO5T = function (bA0x) {
        if (k9b.ET0x(bA0x)) bA0x = bA0x.getTime();
        var eW2x = new Date, kg3x = eW2x.getTime() - bA0x;
        var nb4f = eW2x.getHours() * 36e5 + eW2x.getMinutes() * 6e4 + eW2x.getSeconds() * 1e3;
        if (kg3x <= nb4f) {
            return "今天" + k9b.hY2x(bA0x, "HH:mm")
        } else {
            if (kg3x < nb4f + 864e5) {
                return "昨天" + k9b.hY2x(bA0x, "HH:mm")
            } else {
                return k9b.hY2x(bA0x, "yy-MM-dd HH:mm")
            }
        }
    };
    l9c.cnM5R = function (bA0x) {
        if (k9b.ET0x(bA0x)) bA0x = bA0x.getTime();
        var eW2x = new Date, kg3x = eW2x.getTime() - bA0x;
        if (kg3x <= 6e4) return "刚刚";
        var nb4f = eW2x.getHours() * 36e5 + eW2x.getMinutes() * 6e4 + eW2x.getSeconds() * 1e3;
        if (kg3x <= nb4f) {
            if (kg3x < 36e5) {
                var ED0x = Math.floor(kg3x / 6e4);
                return ED0x + "分钟前"
            }
            return k9b.hY2x(bA0x, "HH:mm")
        } else {
            if (kg3x < nb4f + 864e5) {
                return "昨天" + k9b.hY2x(bA0x, "HH:mm")
            } else if (kg3x < nb4f + 864e5 * 6) {
                var gD2x = eW2x.getFullYear(), SP5U = new Date(gD2x, 0, 1);
                var nb4f = eW2x.getTime() - SP5U.getTime();
                if (kg3x < nb4f) {
                    return k9b.hY2x(bA0x, "M月d日 HH:mm")
                }
                return k9b.hY2x(bA0x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l9c.XM7F = function () {
        var df1x = /\{(.*?)\}/gi;
        return function (oQ5V, j9a) {
            return (oQ5V || "").replace(df1x, function ($1, $2) {
                var D9u = j9a[$2];
                return D9u == null ? $1 : D9u
            })
        }
    }();
    l9c.fo2x = function () {
        var bf0x = Array.prototype.slice.call(arguments, 0), oQ5V = bf0x.shift();
        if (oQ5V) {
            return oQ5V.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf0x.length ? bf0x[$2] : $1
            })
        }
        return ""
    };
    l9c.LS2x = function (i9b, ed1x, kt3x) {
        return "";
        kt3x = kt3x || " - ";
        if (i9b && i9b.length) {
            return kt3x + (!!ed1x ? '<span class="' + ed1x + '">' + i9b[0] + "</span>" : i9b[0])
        }
        return ""
    };
    l9c.bPE8w = function () {
        if (window.getSelection) {
            var sA6u = window.getSelection();
            if (sA6u && sA6u.focusNode && sA6u.focusNode.tagName) {
                var DA0x = a8i.dk1x(sA6u.focusNode);
                for (var i = 0, yc8U; i < DA0x.length; ++i) {
                    yc8U = DA0x[i].tagName;
                    if (!yc8U) continue;
                    yc8U = yc8U.toLowerCase();
                    if (yc8U == "textarea" || yc8U == "input") return !0
                }
            }
        } else if (document.selection) {
            var de1x = document.selection.createRange();
            if (de1x) {
                var g9d = de1x.parentElement();
                if (g9d && g9d.tagName) {
                    var yc8U = g9d.tagName.toLowerCase();
                    if (yc8U == "textarea" || yc8U == "input") return !0
                }
            }
        }
        return !1
    };
    l9c.Bv9m = function (fE2x) {
        if (/^[A-Z]\:\\/i.test(fE2x)) {
            fE2x = fE2x.split("\\")
        } else {
            fE2x = fE2x.split("/")
        }
        fE2x = fE2x[fE2x.length - 1];
        return fE2x
    };
    l9c.cny5D = function () {
        var Fe0x = [13, 17, 34, 19, 18, 21];
        return function (C9t) {
            var bs0x = (C9t || "").split("_");
            return {type: Fe0x[bs0x[2]] || -1, id: bs0x[3] || ""}
        }
    }();
    l9c.bPu8m = function (go2x) {
        if (!go2x) {
            return true
        }
        for (var k in go2x) {
            return false
        }
        return true
    };
    l9c.bik0x = function (dp1x) {
        if (!dp1x) {
            return ""
        }
        if (4 == dp1x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp1x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp1x.expertTags && dp1x.expertTags.length || !l9c.bPu8m(dp1x.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l9c.SC5H = function (hM2x) {
        if (!hM2x) return "";
        var ds1x = hM2x.length, il3x = [];
        il3x[0] = ds1x / 3 | 0;
        il3x[1] = il3x[0] + ((ds1x - il3x[0]) / 2 | 0);
        return hM2x.substring(0, il3x[0]) + hM2x.substring(il3x[0], il3x[1]).replace(/\d/g, "*") + hM2x.substring(il3x[1], ds1x)
    };
    l9c.cGE0x = function (r9i, cB0x) {
        return (r9i % cB0x + cB0x) % cB0x
    };
    l9c.biz0x = function () {
        var Fe0x = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (C9t) {
            var bs0x = (C9t || "").split("_"), m9d = {type: Fe0x[bs0x[2]] || -1, id: bs0x[3] || ""};
            if (m9d.type == "event") {
                m9d.uid = bs0x[4] || "";
                return "/" + m9d.type + "?id=" + m9d.id + "&uid=" + m9d.uid
            }
            return "/" + m9d.type + "?id=" + m9d.id
        }
    }();
    l9c.biC0x = function () {
        var Fe0x = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (C9t) {
            var bs0x = (C9t || "").split("_");
            return Fe0x[bs0x[2]] || "资源"
        }
    }();
    l9c.cnp5u = function (bv0x) {
        var qs = bv0x.length > 0 ? bv0x.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
            item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l9c.biF0x = function (nK4O, SA5F) {
        var XU7N = 0, ey1x = new Array;
        k9b.bd0x(nK4O, function (X0x, r9i) {
            var cx0x = a8i.di1x("img");
            cx0x.src = X0x;
            h9c.s9j(cx0x, "load", function (r9i, d9g) {
                ey1x[r9i] = 1;
                XU7N++;
                if (XU7N == nK4O.length) SA5F(nK4O, ey1x)
            }.f9e(this, r9i));
            h9c.s9j(cx0x, "error", function (d9g, r9i) {
                ey1x[r9i] = 0;
                XU7N++;
                if (XU7N == nK4O.length) SA5F(nK4O, ey1x)
            }.f9e(this, r9i))
        })
    };
    l9c.LQ2x = function (i9b, dZ1x) {
        var m9d = [];
        k9b.bd0x(i9b, function (p9g, r9i, P9G) {
            m9d.push(dZ1x(p9g, r9i, P9G))
        });
        return m9d
    };
    l9c.ZA7t = function (i9b, dZ1x, P9G) {
        var m9d = [];
        k9b.bd0x(i9b, function (p9g, r9i) {
            if (dZ1x.call(P9G, p9g, r9i, i9b)) {
                m9d.push(p9g)
            }
        });
        return m9d
    };
    l9c.bPq8i = function (bo0x) {
        return k9b.dG1x((bo0x || "").replace(/\s{2,}/g, " ").trim())
    };
    var cnn5s = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
    l9c.cnj5o = function (bo0x) {
        return k9b.AU9L(cnn5s, bo0x)
    };
    l9c.bja0x = function (bj0x) {
        if (bj0x.transNames && bj0x.transNames.length) {
            return bj0x.transNames[0]
        } else if (bj0x.alias && bj0x.alias.length) {
            return bj0x.alias[0]
        }
    };
    l9c.bjb0x = function (UP6J) {
        if (UP6J) {
            return UP6J.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l9c.bjc0x = function (g9d) {
        var g9d = a8i.B9s(g9d), cJ0x = g9d && g9d.getElementsByTagName("textarea")[0], K9B = a8i.t9k(g9d, "key"),
            bjd0x = a8i.t9k(g9d, "simple") == "1", cni5n = a8i.t9k(g9d, "pvnamed") == "1", cnh5m = q9h.xq8i.gf2x();
        if (!(g9d && cJ0x && K9B)) return;
        var XX7Q, bjk0x, Ya7T;
        XX7Q = a8i.H9y(a8i.B9s("m-playlist"), "j-img");
        k9b.bd0x(XX7Q, function (iS3x) {
            if (!Ya7T && a8i.t9k(iS3x, "key")) {
                Ya7T = a8i.t9k(iS3x, "key");
                iS3x.removeAttribute("data-key")
            }
        });
        XX7Q = a8i.H9y(a8i.B9s("m-playlist"), "m-info");
        k9b.bd0x(XX7Q, function (iS3x) {
            if (!bjk0x && iS3x.id && iS3x.id.indexOf("auto-id-") == 0) {
                bjk0x = iS3x.id.slice(8, 12)
            }
        });
        var D9u = cJ0x.value || cJ0x.defaultValue;
        if (Ya7T) {
            D9u = decodeURIComponent(k9b.cng5l(D9u, "param=" + bjk0x + Ya7T))
        }
        D9u = JSON.parse(D9u);
        if (cni5n) {
            l9c.cnf5k(D9u)
        }
        if (bjd0x) {
            D9u = l9c.Ev0x(D9u)
        }
        cnh5m.uQ7J(K9B, D9u);
        g9d.innerHTML = "";
        return K9B
    };
    l9c.cnd5i = function (pu5z) {
        if (!pu5z.onbeforelistload) {
            pu5z.onbeforelistload = function (d9g) {
                d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pu5z.onemptylist) {
            pu5z.onemptylist = function (d9g) {
                d9g.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pu5z.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pu5z
    };
    l9c.cnf5k = function (hv2x) {
        k9b.bd0x(hv2x, function (bO0x) {
            bO0x.privilege = bO0x.pv;
            delete bO0x.pv
        })
    };
    l9c.Ev0x = function (iq3x) {
        if (k9b.eJ1x(iq3x)) {
            var dF1x = [];
            k9b.bd0x(iq3x, function (bjd0x) {
                dF1x.push(bPm8e(bjd0x))
            });
            return dF1x
        } else {
            return bPm8e(iq3x)
        }

        function bPm8e(iq3x) {
            if (!iq3x) return null;
            var dF1x = {
                album: iq3x.al,
                alias: iq3x.alia || iq3x.ala || [],
                artists: iq3x.ar || [],
                commentThreadId: "R_SO_4_" + iq3x.id,
                copyrightId: iq3x.cp || 0,
                duration: iq3x.dt || 0,
                id: iq3x.id,
                mvid: iq3x.mv || 0,
                name: iq3x.name || "",
                cd: iq3x.cd,
                position: iq3x.no || 0,
                ringtone: iq3x.rt,
                rtUrl: iq3x.rtUrl,
                status: iq3x.st || 0,
                pstatus: iq3x.pst || 0,
                fee: iq3x.fee || 0,
                version: iq3x.v || 0,
                eq: iq3x.eq,
                songType: iq3x.t || 0,
                mst: iq3x.mst,
                score: iq3x.pop || 0,
                ftype: iq3x.ftype,
                rtUrls: iq3x.rtUrls,
                transNames: iq3x.tns,
                privilege: iq3x.privilege,
                lyrics: iq3x.lyrics
            };
            return dF1x
        }
    };
    l9c.cGF0x = function () {
        var g9d = a8i.ow5B('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g9d);
        h9c.s9j(g9d, "click", function (d9g) {
            h9c.bh0x(d9g);
            a8i.cM0x(g9d)
        })
    };
    l9c.iK3x = function (cz0x) {
        if (cz0x < 1e5) {
            return cz0x
        } else if (cz0x < 1e8) {
            return Math.floor(cz0x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cz0x / 1e7) / 10 + "亿"
        }
    };
    l9c.vt7m = function (cz0x, cJ0x) {
        return "<i>" + (cz0x ? "(" + cz0x + ")" : cJ0x) + "</i>"
    };
    l9c.bPl8d = function (u9l, id3x) {
        var e9f = {};
        if (!k9b.lv4z(id3x)) {
            return e9f
        }
        switch (parseInt(u9l)) {
            case 17:
                e9f.title = id3x.name;
                e9f.author = (id3x.radio || []).name;
                e9f.picUrl = id3x.coverUrl;
                e9f.category = id3x.radio.category;
                break;
            case 19:
                e9f.title = id3x.name;
                e9f.author = l9c.xV8N(id3x.artists);
                e9f.authors = l9c.xV8N(id3x.artists, " / ");
                e9f.picUrl = id3x.picUrl;
                break;
            case 13:
                e9f.title = id3x.name;
                e9f.author = (id3x.creator || []).nickname;
                e9f.picUrl = id3x.coverImgUrl;
                break;
            case 18:
                e9f.title = id3x.name;
                e9f.author = l9c.xV8N(id3x.artists);
                e9f.picUrl = (id3x.album || []).picUrl;
                break;
            case 20:
                e9f.title = id3x.name;
                e9f.author = "";
                e9f.picUrl = id3x.img1v1Url;
                break;
            case 21:
                e9f.title = id3x.name;
                e9f.author = id3x.artistName;
                e9f.authors = l9c.xV8N(id3x.artists, " / ");
                e9f.picUrl = id3x.newCover || id3x.cover;
                break;
            case 70:
                e9f.title = id3x.name;
                e9f.author = (id3x.dj || []).nickname;
                e9f.picUrl = id3x.picUrl;
                e9f.category = id3x.category;
                break;
            default:
                break
        }
        return e9f
    };
    l9c.bPj8b = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l9c.Sp5u = function (ex1x, oa4e, e9f) {
        var bJ0x, bf0x, m9d;
        var gN2x = null;
        var vL7E = 0;
        if (!e9f) e9f = {};
        var yg8Y = function () {
            vL7E = e9f.leading === false ? 0 : +(new Date);
            gN2x = null;
            m9d = ex1x.apply(bJ0x, bf0x);
            if (!gN2x) bJ0x = bf0x = null
        };
        return function () {
            var eW2x = +(new Date);
            if (!vL7E && e9f.leading === false) vL7E = eW2x;
            var FT0x = oa4e - (eW2x - vL7E);
            bJ0x = this;
            bf0x = arguments;
            if (FT0x <= 0 || FT0x > oa4e) {
                if (gN2x) {
                    clearTimeout(gN2x);
                    gN2x = null
                }
                vL7E = eW2x;
                m9d = ex1x.apply(bJ0x, bf0x);
                if (!gN2x) bJ0x = bf0x = null
            } else if (!gN2x && e9f.trailing !== false) {
                gN2x = setTimeout(yg8Y, FT0x)
            }
            return m9d
        }
    };
    l9c.LM2x = function (ex1x, oa4e, pd5i) {
        var gN2x, bf0x, bJ0x, Ds0x, m9d;
        var yg8Y = function () {
            var gv2x = new Date - Ds0x;
            if (gv2x < oa4e && gv2x >= 0) {
                gN2x = setTimeout(yg8Y, oa4e - gv2x)
            } else {
                gN2x = null;
                if (!pd5i) {
                    m9d = ex1x.apply(bJ0x, bf0x);
                    if (!gN2x) bJ0x = bf0x = null
                }
            }
        };
        return function () {
            bJ0x = this;
            bf0x = arguments;
            Ds0x = new Date;
            var Sc5h = pd5i && !gN2x;
            if (!gN2x) gN2x = setTimeout(yg8Y, oa4e);
            if (Sc5h) {
                m9d = ex1x.apply(bJ0x, bf0x);
                bJ0x = bf0x = null
            }
            return m9d
        }
    };
    l9c.Sa5f = function (g9d, hr2x) {
        if (g9d) {
            var g9d = g9d.firstElementChild;
            if (g9d) {
                g9d.firstElementChild && (g9d = g9d.firstElementChild);
                g9d.setAttribute("xlink:href", "/style/pc/svg/" + hr2x)
            }
        }
    };
    l9c.bPi8a = function (ep1x) {
        if (!ep1x || !ep1x.length) {
            return
        }
        ep1x = /^#(.+?)#$/.exec(ep1x)[1];
        ep1x = ep1x.replace(/\s/g, " ");
        v9m.bm0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k9b.cD0x({actname: ep1x}),
            onload: function (Q9H) {
                if (!Q9H || Q9H.code != 200 || !Q9H.act) {
                    n9e.Z0x.J9A({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + Q9H.act.actId)
                }
            },
            onerror: function (ca0x) {
                n9e.Z0x.J9A({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l9c.cmU5Z = function (ep1x) {
        if (!ep1x || !ep1x.length) {
            return
        }
        var RZ5e = location.host;
        ep1x = /^#(.+?)#$/.exec(ep1x)[1];
        ep1x = ep1x.replace(/\s/g, " ");
        v9m.bm0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k9b.cD0x({actname: ep1x}),
            onload: function (Q9H) {
                if (!Q9H || Q9H.code != 200 || !Q9H.act) {
                    cw0x.ip3x("该话题暂未创建")
                } else {
                    cw0x.CN9E(RZ5e + "/activity?id=" + Q9H.act.actId)
                }
            },
            onerror: function (ca0x) {
                cw0x.ip3x("操作失败，请稍后再试")
            }
        })
    };
    l9c.bkt0x = function (Al9c, rH6B) {
        if (!Al9c || !rH6B) return false;
        if (Al9c == rH6B) return true;
        return l9c.bkt0x(Al9c, rH6B.parentNode)
    };
    a8i.cH0x = function (bH0x, jh3x) {
        if (!bH0x) return null;
        if (!jh3x) return bH0x.firstChild;
        return a8i.H9y(bH0x, jh3x)[0]
    };
    l9c.bPh8Z = function (ii3x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ii3x)
    };
    l9c.bPd8V = function (ii3x, RV5a) {
        RV5a = RV5a || "86";
        if (RV5a == "86") return /^\d{11}$/.test(ii3x);
        return /^\d+$/.test(ii3x)
    };
    l9c.cGG0x = function (vW7P) {
        if (!vW7P) {
            return "0b"
        }
        var cmB5G = ["Bytes", "KB", "MB", "GB"];
        var bc0x = Math.floor(Math.log(vW7P) / Math.log(1024));
        return (vW7P / Math.pow(1024, Math.floor(bc0x))).toFixed(bc0x == 1 ? 0 : 1) + cmB5G[bc0x]
    };
    l9c.bOZ8R = function (dJ1x, fq2x, cmv5A) {
        if (!dJ1x) return dJ1x;
        var ds1x = k9b.fw2x(dJ1x);
        if (ds1x <= fq2x) return dJ1x;
        var bkS1x = ds1x - dJ1x.length, bkT1x = dJ1x.length - bkS1x;
        var fF2x = Math.ceil(fq2x / 2), cms5x = fq2x, bOW8O = 0;
        if (bkS1x < fF2x) fF2x = fq2x - bkS1x;
        if (bkT1x < fq2x) fq2x = bkT1x + Math.ceil((fq2x - bkT1x) / 2);
        while (fF2x <= fq2x) {
            bOW8O = k9b.fw2x(dJ1x.substr(0, fF2x));
            var bld1x = cms5x - bOW8O;
            if (bld1x == 0) break;
            if (bld1x == 1) {
                var cmp5u = k9b.fw2x(dJ1x.charAt(fF2x));
                if (cmp5u == 1) {
                    fF2x++;
                    break
                } else {
                    break
                }
            }
            fF2x += Math.floor(bld1x / 2)
        }
        return dJ1x.substr(0, fF2x) + (!!cmv5A ? "" : "...")
    };
    l9c.cmn5s = function (bq0x) {
        bq0x = bq0x || 10;
        var cN0x = "";
        for (var i = 0; i < bq0x; i++) {
            cN0x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cN0x
    };
    var cmj5o = /([A-Za-z0-9 \.\-\(\)\!\?])/, cmg5l = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        cmf5k = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bOQ8I = function (clQ5V) {
        var bq0x = k9b.AA9r(1, 5), clP5U = Math.random() < .5, iU3x = "";
        if (clQ5V) {
            if (clP5U) {
                while (bq0x >= 0) {
                    iU3x += cmf5k[k9b.AA9r(0, 500)];
                    bq0x--
                }
            } else {
                iU3x = l9c.cmn5s(bq0x)
            }
        } else {
            iU3x = k9b.Ph4l(bq0x)
        }
        return '<div class="soil">' + iU3x + "</div>"
    };
    l9c.bgx9o = function (es1x) {
        es1x = k9b.AR9I(es1x);
        try {
            var bq0x = es1x.length, r9i = k9b.AA9r(1, bq0x - 1);
            while (r9i < bq0x) {
                if (cmg5l.test(es1x.charAt(r9i))) {
                    return k9b.dG1x(es1x.slice(0, r9i)) + bOQ8I(true) + k9b.dG1x(es1x.slice(r9i))
                } else if (cmj5o.test(es1x.charAt(r9i))) {
                    return k9b.dG1x(es1x.slice(0, r9i)) + bOQ8I() + k9b.dG1x(es1x.slice(r9i))
                } else {
                    r9i++
                }
            }
            return k9b.dG1x(es1x)
        } catch (e) {
            return k9b.dG1x(es1x)
        }
    };
    l9c.Yz7s = function (lt4x, mL4P) {
        return "//nos.netease.com/" + lt4x + "/" + mL4P
    };
    l9c.clO5T = function (fE2x) {
        var dQ1x = /(.+)(\.[^\.]+$)/.exec(fE2x);
        return dQ1x ? {filename: dQ1x[1], suffix: dQ1x[2]} : {filename: fE2x || "", suffix: ""}
    };
    l9c.bON8F = function (bs0x, clF5K) {
        var dF1x = [];
        k9b.bd0x(bs0x, function (hZ3x) {
            dF1x.push(clF5K(hZ3x))
        });
        return dF1x
    };
    var clB5G = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l9c.bOI8A = function (yz8r) {
        var j9a = NEJ.X({}, yz8r);
        k9b.eH1x(yz8r, function (p9g, K9B) {
            var bOH8z = clB5G[K9B];
            if (bOH8z) {
                j9a[bOH8z] = p9g
            }
        });
        var RC5H = yz8r.creator || [];
        if (!k9b.eJ1x(RC5H)) {
            RC5H = [RC5H]
        }
        if (RC5H) {
            j9a.artists = [];
            k9b.bd0x(RC5H, function (p9g) {
                j9a.artists.push({name: p9g.nickname || p9g.userName, id: p9g.userId})
            })
        }
        if (!!yz8r.aliaName) {
            j9a.alias = [yz8r.aliaName]
        }
        if (!!yz8r.transName) {
            j9a.transNames = [yz8r.transName]
        }
        return j9a
    };
    l9c.clv5A = function (X0x) {
        return (X0x || "").replace(/^https?:/, "")
    };
    l9c.Ec0x = function (cN0x) {
        if (!k9b.fD2x(cN0x)) return cN0x;
        var dF1x = null;
        try {
            dF1x = JSON.parse(cN0x)
        } catch (_e) {
        }
        return dF1x
    };
    var cls5x = '<span class="s-fc7 f-tdn">${value}</span>';
    l9c.clo5t = function (cJ0x, tt6n, e9f) {
        e9f = e9f || {};
        if (!tt6n) {
            return k9b.dG1x(cJ0x)
        }
        cJ0x = k9b.AR9I(cJ0x);
        var pW5b = [], bs0x = null, UE6y = new RegExp(l9c.bPK8C(tt6n), "gi"), oQ5V = e9f.tpl || cls5x;
        while (bs0x = UE6y.exec(cJ0x)) {
            var dQ1x = {html: "", before: bs0x.index - 1, after: bs0x.index + bs0x[0].length};
            var DP0x = a8i.eC1x(oQ5V);
            dQ1x.html = a8i.cd0x(DP0x, {value: k9b.dG1x(bs0x[0])});
            pW5b.push(dQ1x)
        }
        var bfL9C = pW5b.length, kh3x = {before: cJ0x.length - 1, after: 0}, dF1x = "";
        for (var i = 0; i <= bfL9C; i++) {
            var hy2x, fT2x;
            hy2x = (pW5b[i - 1] || kh3x).after;
            fT2x = (pW5b[i] || kh3x).before;
            if (fT2x >= hy2x && hy2x >= 0 && fT2x <= cJ0x.length - 1) {
                dF1x += k9b.dG1x(cJ0x.substring(hy2x, fT2x + 1))
            }
            if (pW5b[i]) {
                dF1x += pW5b[i].html
            }
        }
        return dF1x
    };
    l9c.nP4T = function () {
        if (!window.WM) {
            var g9d = document.createElement("script");
            a8i.gO2x(g9d, "type", "text/javascript");
            a8i.gO2x(g9d, "src", "https://acstatic-dun.126.net/tool.min.js");
            g9d.onload = function (data) {
                initWatchman({
                    productNumber: "YD00000558929251", onload: function (instance) {
                        window.WM = instance
                    }
                })
            };
            document.body.appendChild(g9d)
        }
    };
    l9c.sx6r = function (og4k) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", og4k)
        }
    };
    l9c.De0x = function (og4k) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", og4k)
        }
    }
})();
(function () {
    var k9b = NEJ.P("nej.u");

    function clm5r() {
        var Dd0x = function (ic3x) {
            if (ic3x < -128) {
                return Dd0x(128 - (-128 - ic3x))
            } else if (ic3x >= -128 && ic3x <= 127) {
                return ic3x
            } else if (ic3x > 127) {
                return Dd0x(-129 + ic3x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var clj5o = function (ic3x, bi0x) {
            return Dd0x(ic3x + bi0x)
        };
        var cli5n = function (YE7x, bmx1x) {
            if (YE7x == null) {
                return null
            }
            if (bmx1x == null) {
                return YE7x
            }
            var qH5M = [];
            var clh5m = bmx1x.length;
            for (var i = 0, bq0x = YE7x.length; i < bq0x; i++) {
                qH5M[i] = clj5o(YE7x[i], bmx1x[i % clh5m])
            }
            return qH5M
        };
        var clg5l = function (YF7y) {
            if (YF7y == null) {
                return YF7y
            }
            var qH5M = [];
            var clf5k = YF7y.length;
            for (var i = 0, bq0x = clf5k; i < bq0x; i++) {
                qH5M[i] = Dd0x(0 - YF7y[i])
            }
            return qH5M
        };
        var cld5i = function (bmI1x, Rt5y) {
            bmI1x = Dd0x(bmI1x);
            Rt5y = Dd0x(Rt5y);
            return Dd0x(bmI1x ^ Rt5y)
        };
        var bOD8v = function (Rr5w, bmP1x) {
            if (Rr5w == null || bmP1x == null || Rr5w.length != bmP1x.length) {
                return Rr5w
            }
            var qH5M = [];
            var ckV5a = Rr5w.length;
            for (var i = 0, bq0x = ckV5a; i < bq0x; i++) {
                qH5M[i] = cld5i(Rr5w[i], bmP1x[i])
            }
            return qH5M
        };
        var bOA8s = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ckN5S = function (dw1x) {
            var Ln2x = [];
            Ln2x.push(bOA8s[dw1x >>> 4 & 15]);
            Ln2x.push(bOA8s[dw1x & 15]);
            return Ln2x.join("")
        };
        var bOz8r = function (vW7P) {
            var bq0x = vW7P.length;
            if (vW7P == null || bq0x < 0) {
                return new String("")
            }
            var Ln2x = [];
            for (var i = 0; i < bq0x; i++) {
                Ln2x.push(ckN5S(vW7P[i]))
            }
            return Ln2x.join("")
        };
        var bOy8q = function (YL7E) {
            if (YL7E == null || YL7E.length == 0) {
                return YL7E
            }
            var bnk1x = new String(YL7E);
            var qH5M = [];
            var bq0x = bnk1x.length / 2;
            var bi0x = 0;
            for (var i = 0; i < bq0x; i++) {
                var pp5u = parseInt(bnk1x.charAt(bi0x++), 16) << 4;
                var pq5v = parseInt(bnk1x.charAt(bi0x++), 16);
                qH5M[i] = Dd0x(pp5u + pq5v)
            }
            return qH5M
        };
        var bOv8n = function (cN0x) {
            if (cN0x == null || cN0x == undefined) {
                return cN0x
            }
            var Rk5p = encodeURIComponent(cN0x);
            var vW7P = [];
            var bOu8m = Rk5p.length;
            for (var i = 0; i < bOu8m; i++) {
                if (Rk5p.charAt(i) == "%") {
                    if (i + 2 < bOu8m) {
                        vW7P.push(bOy8q(Rk5p.charAt(++i) + "" + Rk5p.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vW7P.push(Rk5p.charCodeAt(i))
                }
            }
            return vW7P
        };
        var ckG4K = function (xk8c) {
            var bc0x = 0;
            bc0x += (xk8c[0] & 255) << 24;
            bc0x += (xk8c[1] & 255) << 16;
            bc0x += (xk8c[2] & 255) << 8;
            bc0x += xk8c[3] & 255;
            return bc0x
        };
        var cGL0x = function (bc0x) {
            var xk8c = [];
            xk8c[0] = bc0x >>> 24 & 255;
            xk8c[1] = bc0x >>> 16 & 255;
            xk8c[2] = bc0x >>> 8 & 255;
            xk8c[3] = bc0x & 255;
            return xk8c
        };
        var ckA4E = function (cS0x, bnC1x, bq0x) {
            var dF1x = [];
            if (cS0x == null || cS0x.length == 0) {
                return dF1x
            }
            if (cS0x.length < bq0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq0x; i++) {
                dF1x[i] = cS0x[bnC1x + i]
            }
            return dF1x
        };
        var bnD1x = function (cS0x, bnC1x, sa6U, ckz4D, bq0x) {
            if (cS0x == null || cS0x.length == 0) {
                return sa6U
            }
            if (sa6U == null) {
                throw new Error("1004")
            }
            if (cS0x.length < bq0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq0x; i++) {
                sa6U[ckz4D + i] = cS0x[bnC1x + i]
            }
            return sa6U
        };
        var cky4C = function (bq0x) {
            var bs0x = [];
            for (var i = 0; i < bq0x; i++) {
                bs0x[i] = 0
            }
            return bs0x
        };
        var ckw4A = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var Lh2x = 64;
        var YT7M = 64;
        var bOq8i = 4;
        var cks4w = function (qT5Y) {
            var bOp8h = [];
            if (qT5Y == null || qT5Y == undefined || qT5Y.length == 0) {
                return cky4C(YT7M)
            }
            if (qT5Y.length >= YT7M) {
                return ckA4E(qT5Y, 0, YT7M)
            } else {
                for (var i = 0; i < YT7M; i++) {
                    bOp8h[i] = qT5Y[i % qT5Y.length]
                }
            }
            return bOp8h
        };
        var ckq4u = function (YW7P) {
            if (YW7P == null || YW7P.length % Lh2x != 0) {
                throw new Error("1005")
            }
            var bog1x = [];
            var bi0x = 0;
            var ckp4t = YW7P.length / Lh2x;
            for (var i = 0; i < ckp4t; i++) {
                bog1x[i] = [];
                for (var j = 0; j < Lh2x; j++) {
                    bog1x[i][j] = YW7P[bi0x++]
                }
            }
            return bog1x
        };
        var cko4s = function (bOo8g) {
            var pp5u = bOo8g >>> 4 & 15;
            var pq5v = bOo8g & 15;
            var bi0x = pp5u * 16 + pq5v;
            return ckw4A[bi0x]
        };
        var bOk8c = function (boq2x) {
            if (boq2x == null) {
                return null
            }
            var bOj8b = [];
            for (var i = 0, bq0x = boq2x.length; i < bq0x; i++) {
                bOj8b[i] = cko4s(boq2x[i])
            }
            return bOj8b
        };
        var bOh8Z = function (Lb2x, qT5Y) {
            if (Lb2x == null) {
                return null
            }
            if (Lb2x.length == 0) {
                return []
            }
            if (Lb2x.length % Lh2x != 0) {
                throw new Error("1005")
            }
            qT5Y = cks4w(qT5Y);
            var boA2x = qT5Y;
            var boB2x = ckq4u(Lb2x);
            var QL5Q = [];
            var cjZ4d = boB2x.length;
            for (var i = 0; i < cjZ4d; i++) {
                var boO2x = bOk8c(boB2x[i]);
                boO2x = bOk8c(boO2x);
                var boR2x = bOD8v(boO2x, boA2x);
                var cjY4c = cli5n(boR2x, clg5l(boA2x));
                boR2x = bOD8v(cjY4c, qT5Y);
                bnD1x(boR2x, 0, QL5Q, i * Lh2x, Lh2x);
                boA2x = boB2x[i]
            }
            var bOg8Y = [];
            bnD1x(QL5Q, QL5Q.length - bOq8i, bOg8Y, 0, bOq8i);
            var bq0x = ckG4K(bOg8Y);
            if (bq0x > QL5Q.length) {
                throw new Error("1006")
            }
            var qH5M = [];
            bnD1x(QL5Q, 0, qH5M, 0, bq0x);
            return qH5M
        };
        var cjW4a = function (Za7T, K9B) {
            if (Za7T == null) {
                return null
            }
            var bOf8X = new String(Za7T);
            if (bOf8X.length == 0) {
                return []
            }
            var Lb2x = bOy8q(bOf8X);
            if (K9B == null || K9B == undefined) {
                throw new Error("1007")
            }
            var qT5Y = bOv8n(K9B);
            return bOh8Z(Lb2x, qT5Y)
        };
        this.cjT4X = function (Za7T, K9B) {
            var bpe2x = cjW4a(Za7T, K9B);
            var Em0x = new String(bOz8r(bpe2x));
            var zN8F = [];
            var bpt2x = Em0x.length / 2;
            var bi0x = 0;
            for (var i = 0; i < bpt2x; i++) {
                zN8F.push("%");
                zN8F.push(Em0x.charAt(bi0x++));
                zN8F.push(Em0x.charAt(bi0x++))
            }
            return zN8F.join("")
        };
        k9b.cng5l = function (bpu2x, K9B) {
            return k9b.cjS4W(k9b.cwT8L(bpu2x), K9B)
        };
        k9b.cjS4W = function (bpu2x, K9B) {
            var bpe2x = bOh8Z(bpu2x, bOv8n(K9B));
            var Em0x = new String(bOz8r(bpe2x));
            var zN8F = [];
            var bpt2x = Em0x.length / 2;
            var bi0x = 0;
            for (var i = 0; i < bpt2x; i++) {
                zN8F.push("%");
                zN8F.push(Em0x.charAt(bi0x++));
                zN8F.push(Em0x.charAt(bi0x++))
            }
            return zN8F.join("")
        }
    }

    window.settmusic = (new clm5r).cjT4X
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, I9z = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        q9h = c9h("nm.d"), l9c = c9h("nm.x"), K9B = "Search-tracks_", b9i;
    q9h.fo2x({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (Q9H) {
                return Q9H
            }, onerror: function (Q9H, e9f) {
                if (Q9H.code == 407) {
                    e9f.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e9f, bg0x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cjR4V(parseInt(e9f.data.type)) || "suggest",
                    keyword: e9f.data.s,
                    offset: e9f.offset
                })
            }, format: function (Q9H, e9f) {
                if (Q9H.abroad) {
                    try {
                        Q9H.result = JSON.parse(decodeURIComponent(settmusic(Q9H.result, q9h.sk)))
                    } catch (e) {
                    }
                }
                Q9H.result = Q9H.result || {};
                var i9b, cB0x, hK2x = [], pU5Z = e9f.data.s || "", fZ2x = e9f.data.limit,
                    u9l = parseInt(e9f.data.type) || 1, m9d = Q9H.result;
                switch (u9l) {
                    case 1:
                        i9b = this.bOc8U(m9d.songs, e9f.data.hlpretag, e9f.data.hlposttag);
                        cB0x = m9d.songCount;
                        break;
                    case 10:
                        i9b = m9d.albums;
                        cB0x = m9d.albumCount;
                        break;
                    case 100:
                        i9b = m9d.artists;
                        cB0x = m9d.artistCount;
                        break;
                    case 1e3:
                        i9b = m9d.playlists;
                        cB0x = m9d.playlistCount;
                        break;
                    case 1002:
                        i9b = m9d.userprofiles;
                        cB0x = m9d.userprofileCount;
                        break;
                    case 1004:
                        i9b = m9d.mvs;
                        cB0x = m9d.mvCount;
                        break;
                    case 1014:
                        i9b = l9c.bON8F(m9d.videos, l9c.bOI8A);
                        cB0x = m9d.videoCount;
                        break;
                    case 1006:
                        i9b = this.bOc8U(m9d.songs, e9f.data.hlpretag, e9f.data.hlposttag);
                        cB0x = m9d.songCount;
                        break;
                    case 1009:
                        var rf5k = m9d.djRadios;
                        if (!!rf5k) {
                            k9b.bd0x(rf5k, function (D9u, r9i, cjF4J) {
                                D9u.xid = D9u.id;
                                D9u.id = D9u.id + "_rad"
                            });
                            if (rf5k.length) {
                                this.uQ7J("radio_search-" + e9f.data.s, rf5k)
                            }
                        }
                        cB0x = Math.min(m9d.djprogramCount, 500);
                        i9b = m9d.djprograms || [];
                        if (e9f.data.isPub) {
                            k9b.nj4n(rf5k, function (D9u, r9i, cjF4J) {
                                D9u.stype = 1;
                                i9b.unshift(D9u)
                            });
                            cB0x = Math.min(i9b.length, 500)
                        }
                        break
                }
                this.z9q("onsearchload", Q9H);
                if (i9b && i9b.length) {
                    for (var i = 0; i < fZ2x; i++) {
                        if (i < i9b.length) {
                            hK2x.push(i9b[i])
                        } else {
                            hK2x.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cB0x || 0, pU5Z.length < 3 ? 500 : 5e3), list: hK2x}
            }, onerror: function (Q9H, e9f) {
                e9f.onload(e9f, []);
                if (k9b.gJ2x(e9f.onerror)) {
                    e9f.onerror(Q9H)
                }
            }
        }
    });
    q9h.Ew0x = NEJ.C();
    b9i = q9h.Ew0x.N9E(q9h.hG2x);
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.cjE4I = function (K9B, e9f) {
        if (!K9B) return;
        if (!!this.bNZ8R) v9m.kl3x(this.bNZ8R);
        this.bNZ8R = this.cq0x("search-suggest", NEJ.X({data: {s: K9B, limit: 8}}, e9f))
    };
    b9i.cjC4G = function (K9B, e9f) {
        if (!K9B) return;
        this.cq0x("search-multimatch", NEJ.X({data: {s: K9B}}, e9f))
    };
    b9i.bOc8U = function () {
        var cjA4E = function (hA2x, bNY8Q, bNX8P) {
            var cjw4A = hA2x.match(new RegExp(bNY8Q + "(.+?)" + bNX8P, "gi")), cz0x = 0;
            k9b.bd0x(cjw4A, function (p9g) {
                cz0x += p9g.replace(new RegExp(bNY8Q, "g"), "").replace(new RegExp(bNX8P, "g"), "").length
            });
            return cz0x
        };
        return function (jz3x, cjv4z, cju4y) {
            var bNW8O = [];
            k9b.bd0x(jz3x, function (bj0x, bc0x) {
                bj0x = l9c.Ev0x(bj0x);
                var Zt7m = bj0x.lyrics || [], ds1x = Zt7m.length, kb3x = 0, cB0x = 4, Zv7o = {l: 0, v: 0}, bqB2x;
                if (ds1x > 4) {
                    k9b.bd0x(Zt7m, function (hA2x, r9i) {
                        var bNV8N = cjA4E(hA2x, cjv4z, cju4y);
                        if (bNV8N > Zv7o.v) {
                            Zv7o.v = bNV8N;
                            Zv7o.l = r9i
                        }
                    });
                    kb3x = Zv7o.l;
                    kb3x = Math.max(kb3x, 0);
                    bqB2x = ds1x - kb3x - 4;
                    if (bqB2x < 0) kb3x += bqB2x;
                    bj0x.lrcAbstractEnd = kb3x + cB0x - 1
                } else {
                    bj0x.lrcAbstractEnd = ds1x - 1
                }
                bj0x.lrcAbstractStart = kb3x;
                bj0x.indexId = (Zt7m && Zt7m.length ? "L" : "NL") + bj0x.id;
                bNW8O.push(bj0x)
            });
            return bNW8O
        }
    }();
    b9i.cjR4V = function (u9l) {
        switch (u9l) {
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
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        v9m = c9h("nej.j"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), E9v = c9h("nm.m"), n9e = c9h("nm.l"),
        dx1x = c9h("nm.i"), M9D = c9h("nm.m.sch"), b9i, L9C;
    var Zw7p = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    M9D.Qo4s = NEJ.C();
    b9i = M9D.Qo4s.N9E(I9z.cK0x);
    b9i.cy0x = function (g9d) {
        this.cE0x();
        this.bW0x(g9d);
        this.S0x = q9h.Ew0x.gf2x()
    };
    b9i.bW0x = function (g9d) {
        this.o9f = g9d;
        var i9b = a8i.H9y(g9d, "j-flag");
        this.eU2x = i9b[0];
        this.bra2x = i9b[1];
        this.cr0x = i9b[2];
        this.nI4M = i9b[3];
        h9c.s9j(this.eU2x, "input", this.gi2x.f9e(this));
        h9c.s9j(this.eU2x, "keyup", this.gi2x.f9e(this));
        h9c.s9j(this.eU2x, "focus", this.gP2x.f9e(this));
        h9c.s9j(this.bra2x, "click", this.gP2x.f9e(this));
        h9c.s9j(this.eU2x, "blur", this.bri2x.f9e(this));
        h9c.s9j(this.cr0x, "click", this.Zy7r.f9e(this));
        h9c.s9j(this.o9f, "keydown", this.bry2x.f9e(this));
        h9c.s9j(this.o9f, "keypress", this.Zz7s.f9e(this));
        h9c.s9j(this.nI4M, "mouseover", this.Ql4p.f9e(this));
        h9c.s9j(this.nI4M, "mouseout", this.Ql4p.f9e(this));
        if (this.eU2x.value) {
            this.eU2x.value = ""
        }
        if (this.eU2x.style.opacity != null) {
            this.eU2x.style.opacity = 1
        }
    };
    b9i.gi2x = function (d9g) {
        if (d9g.type == "keyup" && d9g.keyCode == 8 || d9g.keyCode == 46) {
            this.Fj0x()
        } else if (d9g.type == "input" || d9g.type == "propertychange") {
            setTimeout(this.Fj0x.f9e(this), 0)
        }
    };
    b9i.gP2x = function () {
        this.yE8w(this.bra2x, !1);
        a8i.y9p(this.o9f, "m-srch-fcs");
        this.eU2x.focus();
        this.Fj0x();
        a8i.y9p((a8i.H9y("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b9i.bri2x = function () {
        if (!this.eU2x.value) {
            this.yE8w(this.bra2x, !0)
        }
        var Fm0x = a8i.H9y(this.nI4M, "slt");
        if (this.ZE7x(this.nI4M) && Fm0x.length > 0 && a8i.t9k(Fm0x[0], "type")) {
            var hr2x = Fm0x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hr2x)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eU2x.value})
            }
            this.bsd2x(Fm0x[0].href)
        }
        this.yE8w(this.nI4M, !1);
        a8i.x9o(this.o9f, "m-srch-fcs")
    };
    b9i.yE8w = function (g9d, mm4q) {
        a8i.ba0x(g9d, "display", !mm4q ? "none" : "")
    };
    b9i.ZE7x = function (g9d) {
        return a8i.dh1x(g9d, "display") != "none"
    };
    b9i.Fj0x = function () {
        var cjp4t = function (ii3x) {
            ii3x = k9b.AR9I(ii3x);
            var eF1x = this.o9f.clientWidth > 250 ? 41 : 17;
            if (l9c.SY5d(ii3x) > eF1x) {
                ii3x = l9c.Dv0x(ii3x, eF1x) + "..."
            }
            return k9b.dG1x(ii3x)
        };
        var ZH7A = function (m9d) {
            return m9d.songs && m9d.songs.length || m9d.albums && m9d.albums.length || m9d.artists && m9d.artists.length || m9d.playlists && m9d.playlists.length
        };
        var og4k = function (tt6n, d9g) {
            if (!l9c.bPL8D(this.eU2x) || l9c.kn3x(this.eU2x.value)) {
                this.yE8w(this.nI4M, !1);
                return
            }
            d9g.keyword = k9b.dG1x(tt6n);
            var dW1x = a8i.cd0x("m-search-suggest", d9g, {mark: l9c.clo5t.ev1x(this, tt6n), cutStr: cjp4t.f9e(this)}),
                uh7a = d9g.result.order;
            this.nI4M.innerHTML = dW1x;
            this.yE8w(this.nI4M, ZH7A(d9g.result) ? !0 : !1);
            if (!!uh7a && !!uh7a.length && Zw7p[uh7a[0]]) {
                this.bsn2x = {keyword: tt6n, type: Zw7p[uh7a[0]]}
            }
        };
        var cjo4s = function () {
            this.yE8w(this.nI4M, !1);
            return
        };
        return function () {
            var D9u = this.eU2x.value;
            if (l9c.kn3x(D9u)) {
                this.yE8w(this.nI4M, !1);
                return
            }
            this.S0x.cjE4I(D9u, {onload: og4k.f9e(this, D9u), onForbidden: cjo4s.f9e(this)})
        }
    }();
    b9i.Zz7s = function (d9g) {
        if (d9g.keyCode != 13) return;
        var Fm0x = a8i.H9y(this.nI4M, "slt");
        if (this.ZE7x(this.nI4M) && Fm0x.length > 0) {
            this.bsd2x(Fm0x[0].href);
            this.yE8w(this.nI4M, !1);
            return
        }
        this.Zy7r();
        this.yE8w(this.nI4M, !1)
    };
    b9i.bry2x = function (d9g) {
        if (!this.ZE7x(this.nI4M)) return;
        var i9b = a8i.H9y(this.nI4M, "xtag"), ds1x = i9b.length, r9i = k9b.dj1x(i9b, function (p9g) {
            return a8i.bE0x(p9g, "slt")
        });
        switch (d9g.keyCode) {
            case 38:
                if (r9i >= 0) a8i.x9o(i9b[r9i], "slt");
                a8i.y9p(i9b[r9i <= 0 ? ds1x - 1 : r9i - 1], "slt");
                break;
            case 40:
                if (r9i >= 0) a8i.x9o(i9b[r9i], "slt");
                a8i.y9p(i9b[(r9i + 1) % ds1x], "slt");
                break
        }
    };
    b9i.Ql4p = function (d9g) {
        if (!this.ZE7x(this.nI4M)) return;
        var Qf4j, F9w = h9c.W0x(d9g), i9b = a8i.H9y(this.nI4M, "xtag");
        if (F9w.tagName.toLowerCase() == "a") Qf4j = F9w; else if (F9w.parentNode.tagName.toLowerCase() == "a") Qf4j = F9w.parentNode;
        if (!Qf4j) return;
        k9b.bd0x(i9b, function (p9g) {
            a8i.x9o(p9g, "slt");
            a8i.t9k(p9g, "type", "")
        });
        if (d9g.type == "mouseout") return;
        a8i.y9p(Qf4j, "slt");
        a8i.t9k(Qf4j, "type", "mouse")
    };
    b9i.Zy7r = function () {
        var dR1x = location.hash, r9i = dR1x.indexOf("?"), bv0x = k9b.ht2x(dR1x.substring(r9i + 1));
        bv0x.s = this.eU2x.value;
        if (l9c.kn3x(bv0x.s)) return;
        if (!bv0x.type && this.bsn2x && this.bsn2x.keyword == bv0x.s) {
            bv0x.type = this.bsn2x.type
        }
        this.bsd2x("/search/#/?" + k9b.cD0x(bv0x));
        this.eU2x.blur()
    };
    b9i.bsd2x = function (X0x) {
        if (location.dispatch2) {
            location.dispatch2(X0x)
        } else {
            location.href = X0x
        }
    };
    M9D.Qo4s.cjn4r = function () {
        var i9b = a8i.H9y(document.body, "j-suggest");
        k9b.bd0x(i9b, function (p9g) {
            new M9D.Qo4s(p9g)
        })
    };
    M9D.Qo4s.cjn4r()
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, I9z = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        q9h = c9h("nm.d"), b9i;
    q9h.fo2x({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (Q9H) {
                return {total: Q9H.size || 0, list: Q9H.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (Q9H) {
                return {total: Q9H.size || 0, list: Q9H.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (Q9H) {
                return Q9H.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (Q9H, e9f) {
                if (e9f.offset == 0) {
                    var pT5Y = Q9H.data[0];
                    this.z9q("onfirstload", pT5Y);
                    Q9H.data.splice(0, 1);
                    return Q9H.data
                } else {
                    return Q9H.data
                }
            }
        }
    });
    q9h.Fy0x = NEJ.C();
    b9i = q9h.Fy0x.N9E(q9h.hG2x);
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bsC3x = function () {
        var sZ6T = "LOCAL_FLAG";
        return function (u9l, cjm4q) {
            var j9a = this.Ez0x(sZ6T, {});
            if (j9a[u9l]) {
                return true
            } else {
                if (!cjm4q) {
                    j9a[u9l] = true;
                    this.xj8b(sZ6T, j9a)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), O9F = c9h("nej.ut"), bsE3x;
    if (!!O9F.oi4m) return;
    O9F.oi4m = NEJ.C();
    bsE3x = O9F.oi4m.N9E(O9F.cK0x);
    bsE3x.bl0x = function () {
        var cjk4o = function (d9g) {
            d9g.matched = d9g.source == d9g.target
        };
        return function (e9f) {
            e9f.oncheck = e9f.oncheck || cjk4o;
            this.bn0x(e9f);
            this.bU0x = e9f.list;
            this.jp3x = e9f.dataset || "id";
            this.kU3x = e9f.selected || "js-selected"
        }
    }();
    bsE3x.nS4W = function (D9u) {
        var F9w, d9g = {target: D9u};
        k9b.bd0x(this.bU0x, function (g9d) {
            delete d9g.matched;
            d9g.source = a8i.t9k(g9d, this.jp3x);
            this.z9q("oncheck", d9g);
            if (!d9g.matched) {
                a8i.x9o(g9d, this.kU3x)
            } else {
                F9w = g9d;
                a8i.y9p(g9d, this.kU3x)
            }
        }, this);
        return F9w
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), O9F = c9h("nej.ut"), qb5g;
    if (!!O9F.dg1x) return;
    O9F.dg1x = NEJ.C();
    qb5g = O9F.dg1x.N9E(O9F.cK0x);
    qb5g.cy0x = function () {
        this.jb3x = {};
        this.cE0x();
        this.bL0x()
    };
    qb5g.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.btb3x = e9f.umi || "";
        this.Cz9q = e9f.dispatcher;
        this.KP2x = e9f.composite || bb0x;
        this.bjK0x({
            onshow: this.fa2x.f9e(this),
            onhide: this.ko3x.f9e(this),
            onrefresh: this.eE1x.f9e(this),
            onmessage: this.qG5L.f9e(this),
            onbeforehide: this.cjj4n.f9e(this)
        })
    };
    qb5g.bC0x = function () {
        delete this.btb3x;
        this.jb3x = {};
        this.bF0x()
    };
    qb5g.uw7p = function (d9g) {
        if (!!d9g) d9g.stopped = !0
    };
    qb5g.bL0x = br0x;
    qb5g.fa2x = br0x;
    qb5g.ko3x = br0x;
    qb5g.eE1x = br0x;
    qb5g.qG5L = br0x;
    qb5g.cjj4n = br0x;
    qb5g.ni4m = function (mV4Z, bG0x, fe2x) {
        this.Cz9q.btr3x({to: mV4Z, mode: fe2x || 0, data: bG0x, from: this.btb3x})
    };
    qb5g.cGP0x = function (u9l, j9a) {
        this.Cz9q.Cv9m(u9l, {from: this.btb3x, data: j9a})
    };
    qb5g.cGQ0x = function () {
        this.Cz9q.mP4T.apply(this.Cz9q, arguments)
    };
    qb5g.cjg4k = function () {
        return this.jb3x
    };
    a8i.ZI7B = function () {
        if (!!window.dispatcher) {
            dispatcher.bNR8J.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c9h = NEJ.P, br0x = NEJ.F, bb0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), O9F = c9h("nej.ut"), zQ9H;
    if (!!O9F.du1x) return;
    O9F.du1x = NEJ.C();
    zQ9H = O9F.du1x.N9E(O9F.dg1x);
    zQ9H.cje4i = function (e9f) {
        var bH0x;
        if (!bH0x) {
            var j9a = e9f.input || bb0x;
            bH0x = a8i.B9s(j9a.parent)
        }
        if (!bH0x) {
            var j9a = e9f.data || bb0x;
            bH0x = a8i.B9s(j9a.parent)
        }
        if (!bH0x) {
            bH0x = a8i.B9s(e9f.parent)
        }
        return bH0x
    };
    zQ9H.fa2x = function (e9f) {
        var bH0x = this.cje4i(e9f);
        if (!!bH0x && !!this.o9f) bH0x.appendChild(this.o9f);
        this.gG2x(e9f);
        this.bNQ8I("onshow", e9f);
        this.eE1x(e9f)
    };
    zQ9H.eE1x = function (e9f) {
        this.ge2x(e9f);
        this.bNQ8I("onrefresh", e9f)
    };
    zQ9H.ko3x = function () {
        this.lj3x();
        this.cjc4g();
        a8i.mB4F(this.o9f)
    };
    zQ9H.bNP8H = function () {
        var gF2x = /^onshow|onrefresh|delay$/;
        return function (cl0x) {
            return gF2x.test(cl0x)
        }
    }();
    zQ9H.bNO8G = br0x;
    zQ9H.bNQ8I = function () {
        var bNN8F = function (bv0x, e9f, cl0x, qh5m) {
            if (this.bNP8H(qh5m)) return;
            if (!!bv0x) cl0x += (cl0x.indexOf("?") > 1 ? "&" : "?") + bv0x;
            var dn1x = this.bNO8G(qh5m, e9f) || {};
            dn1x.location = e9f;
            dn1x.parent = this.jb3x[qh5m];
            this.Cz9q.iy3x(cl0x, {input: dn1x})
        };
        return function (u9l, e9f) {
            if (!e9f.nodelay) {
                if (!!this.KP2x.delay) return;
                var bNM8E = this.KP2x[u9l] || bb0x;
                if (bNM8E.delay) return
            }
            var bv0x = k9b.cD0x(e9f.param) || "";
            if (u9l == "onrefresh") {
                k9b.eH1x(this.KP2x, bNN8F.f9e(this, bv0x, e9f))
            }
            k9b.eH1x(bNM8E, bNN8F.f9e(this, bv0x, e9f))
        }
    }();
    zQ9H.cjc4g = function () {
        var BK9B = function (cl0x, qh5m) {
            if (!this.bNP8H(qh5m)) this.Cz9q.bt0x(cl0x)
        };
        return function () {
            k9b.eH1x(this.KP2x, BK9B, this);
            k9b.eH1x(this.KP2x.onshow, BK9B, this);
            k9b.eH1x(this.KP2x.onrefresh, BK9B, this)
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I9z = c9h("nej.ut"), v9m = c9h("nej.j"),
        k9b = c9h("nej.u"), E9v = c9h("nm.m"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), b9i, L9C;
    E9v.PV4Z = NEJ.C();
    b9i = E9v.PV4Z.N9E(I9z.cK0x);
    b9i.cy0x = function () {
        this.cE0x();
        this.o9f = a8i.B9s("g-topbar");
        var i9b = a8i.H9y(this.o9f, "j-tflag");
        this.but3x = i9b[0];
        this.Go0x = i9b[1];
        this.bNL8D = i9b[2];
        this.buC3x = i9b[3];
        this.ciT4X = I9z.oi4m.A9r({list: this.but3x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.buM3x = I9z.oi4m.A9r({list: this.buC3x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bX0x([[this.o9f, "click", this.PT4X.f9e(this)], [this.Go0x, "click", this.cL0x.f9e(this)], [this.Go0x, "mouseout", this.bNJ8B.f9e(this, 0)], [this.Go0x, "mouseover", this.bNJ8B.f9e(this, 1)]]);
        window.scrollTopbar = this.ciQ4U.f9e(this);
        window.matchNav = this.bNG8y.f9e(this);
        window.polling = this.uJ7C.f9e(this);
        this.buV3x = q9h.Fy0x.A9r();
        this.ciN4R();
        this.KM2x();
        var bv0x = k9b.ht2x(location.href.split("?")[1]) || {};
        if (bv0x.market) {
            a8i.B9s("topbar-download-link").href = "/download?market=" + bv0x.market
        }
        var bve3x = a8i.H9y(this.o9f, "j-showoff");
        if (bve3x && !this.buV3x.bsC3x("newMvSearch")) {
            a8i.x9o(bve3x[0], "f-hide");
            window.setTimeout(function () {
                a8i.y9p(bve3x[0], "f-hide")
            }, 5e3)
        }
        l9c.nP4T()
    };
    b9i.uJ7C = function (d9g) {
        var dR1x = l9c.Mp2x();
        if (!/^\/msg/.test(dR1x)) {
            var xx8p = 0;
            xx8p += d9g.comment;
            xx8p += d9g.forward;
            xx8p += d9g.msg;
            xx8p += d9g.notice;
            if (xx8p > 0) {
                xx8p = xx8p > 99 ? "99+" : xx8p;
                this.PN4R.innerText = xx8p;
                this.KL2x.innerText = xx8p;
                a8i.x9o(this.PN4R, "f-hide");
                a8i.x9o(this.KL2x, "f-hide");
                this.ZR8J = true
            } else {
                a8i.y9p(this.PN4R, "f-hide");
                a8i.y9p(this.KL2x, "f-hide");
                this.ZR8J = false
            }
            var eV2x = "/at";
            if (d9g.notice) eV2x = "/notify";
            if (d9g.comment) eV2x = "/comment";
            if (d9g.msg > 0) eV2x = "/private";
            if (d9g.forward > 0) eV2x = "/at";
            this.KL2x.parentNode.href = "/msg/#" + eV2x
        } else {
            this.KL2x.parentNode.href = "javascript:;";
            a8i.y9p(this.PN4R, "f-hide");
            a8i.y9p(this.KL2x, "f-hide");
            this.ZR8J = false
        }
        var i9b = a8i.H9y(this.but3x, "j-t");
        if (!/^\/friend/.test(dR1x)) {
            if (i9b && i9b.length) {
                a8i.ba0x(i9b[0], "display", d9g.event > 0 ? "" : "none")
            }
        } else {
            a8i.ba0x(i9b[0], "display", "none")
        }
    };
    b9i.cL0x = function (d9g) {
        var g9d = h9c.W0x(d9g, "d:action");
        if (g9d) {
            switch (a8i.t9k(g9d, "action")) {
                case"login":
                    h9c.cn0x(d9g);
                    var u9l = a8i.t9k(g9d, "type");
                    if (u9l) {
                        if (u9l == "sina" || u9l == "tencent") {
                            this.Cs9j = g9d.href;
                            l9c.De0x(this.kS3x.f9e(this))
                        } else top.login(u9l == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h9c.cn0x(d9g);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.buV3x.bsC3x("storeNew")) {
                        a8i.y9p(this.cGR0x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.buV3x.bsC3x("levelNew")) {
                        a8i.y9p(this.cGT0x, "f-vhide")
                    }
                    break
            }
        }
    };
    b9i.kS3x = function (cG0x) {
        this.Cs9j += "&checkToken=" + cG0x || "";
        top.open(this.Cs9j)
    };
    b9i.PT4X = function (d9g) {
        var g9d = h9c.W0x(d9g, "d:action");
        if (!g9d) return;
        var U0x = a8i.t9k(g9d, "action");
        switch (U0x) {
            case"bilog":
                var bvA3x = a8i.t9k(g9d, "logAction"), bvE3x = a8i.t9k(g9d, "logJson");
                window.log(bvA3x, bvE3x);
                break
        }
    };
    b9i.bNJ8B = function (KJ2x, d9g) {
        if (this.bvM3x) {
            this.bvM3x.style.display = !KJ2x ? "none" : "";
            (KJ2x || !this.ZR8J ? a8i.y9p : a8i.x9o).call(window, this.PN4R, "f-hide")
        }
    };
    b9i.ciQ4U = function (gb2x) {
        a8i.ba0x(this.o9f, "top", -gb2x + "px")
    };
    b9i.bNG8y = function (eV2x, ciK4O) {
        this.ciT4X.nS4W(eV2x);
        if (eV2x == "discover") {
            a8i.y9p(this.bNL8D, "f-hide");
            a8i.x9o(this.buC3x, "f-hide");
            window.g_topBarHeight = 105;
            this.buM3x.nS4W(ciK4O)
        } else {
            a8i.x9o(this.bNL8D, "f-hide");
            a8i.y9p(this.buC3x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b9i.ciN4R = function () {
        var em1x = a8i.B9s("g_iframe");
        if (!em1x) return;
        var gx2x = em1x.contentWindow.document.getElementById("g_top");
        this.bNG8y(a8i.t9k(gx2x, "module"), a8i.t9k(gx2x, "sub"))
    };
    var ZS8K = {}, bNF8x = /\/\/\w+/, ciI4M = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bNF8x, "") !== b.replace(bNF8x, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b9i.ciE4I = function (bae8W) {
        var ol4p = k9b.dj1x(ciI4M, function (D9u, K9B) {
            if (k9b.gJ2x(D9u)) {
                return D9u(bae8W[K9B], ZS8K[K9B])
            } else {
                return bae8W[K9B] !== ZS8K[K9B]
            }
        });
        ZS8K = bae8W;
        return bae8W[ol4p]
    };
    b9i.KM2x = function () {
        var dp1x = GUser || {}, ciD4H = GUserAcc || {};
        if (dp1x && dp1x.userId) {
            var bNC8u = NEJ.X(dp1x, ciD4H);
            if (this.ciE4I(bNC8u)) {
                a8i.dB1x(this.Go0x, "m-topbar-user-login", bNC8u)
            }
        } else {
            ZS8K = {};
            this.Go0x.innerHTML = a8i.iF3x("m-topbar-user-unlogin");
            var i9b = a8i.H9y(this.but3x, "j-t");
            a8i.ba0x(i9b[0], "display", "none")
        }
        a8i.x9o(this.Go0x, "f-hide");
        this.ZR8J = false;
        var i9b = a8i.H9y(this.Go0x, "j-uflag");
        if (dp1x && dp1x.userId) {
            this.PN4R = i9b.shift();
            this.bvM3x = i9b.shift();
            this.KL2x = i9b.shift()
        } else {
            this.bvM3x = i9b.shift()
        }
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), I9z = c9h("nej.ut"), q9h = c9h("nm.d"), b9i, L9C;
    q9h.fo2x({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (Q9H) {
                h9c.z9q(q9h.tU7N, "message", Q9H)
            }
        }
    });
    q9h.tU7N = NEJ.C();
    b9i = q9h.tU7N.N9E(q9h.hG2x);
    b9i.bag8Y = function () {
        this.cq0x("polling-get", {})
    };
    b9i.uW7P = function () {
        var ei1x;
        return function () {
            if (!!ei1x) return;
            ei1x = window.setInterval(this.bag8Y.f9e(this), 1e5);
            this.bag8Y()
        }
    }();
    I9z.fJ2x.A9r({event: "message", element: q9h.tU7N})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
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
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
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
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
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
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
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
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
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
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
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
        };
        EventEmitter.prototype.emit = function (name) {
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
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
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
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
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

        JSON.stringify = function (value, replacer, space) {
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
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
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
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "",
                ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "", data = pieces[5] || "",
                packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
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
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
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
        };
        Transport.prototype.onPacket = function (packet) {
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
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
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
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

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
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
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
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
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
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
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
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
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
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1],
                packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
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
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.bah8Z(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.bah8Z(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Pu4y.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bwI4M();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
                j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false,
                a = false, n, G, m = true, M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1", ag = [0, 0, 0], ab = null;
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
                            } catch (Z) {
                            }
                        }
                    }
                    return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
                }(), k = function () {
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
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
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
                            (function () {
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
                                O.onload = function () {
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
                    (function () {
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
                        var aa = {success: false, id: Y};
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
                B = {success: false, id: X};
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
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
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
                        (function () {
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
                    (function () {
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
                        (function () {
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
                } catch (Y) {
                }
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
                var Y = M.pv, X = Z.split(".");
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

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
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
                registerObject: function (ab, X, aa, Z) {
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
                            Z({success: false, id: ab})
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {success: false, id: ah};
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
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
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M, getFlashPlayerVersion: function () {
                    return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
                }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
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
                }, expressInstallCallback: function () {
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
    (function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                }, error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.hb2x = WebSocket.ciB4F++;
            WebSocket.bNB8t[self.hb2x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mg4k = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.bah8Z(function () {
                    WebSocket.pH5M.create(self.hb2x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pH5M.send(this.hb2x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pH5M.close(this.hb2x)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.mg4k)) {
                this.mg4k[type] = []
            }
            this.mg4k[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.mg4k)) return;
            var events = this.mg4k[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.mg4k[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.ciy4C = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bNA8s(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bNA8s("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.ciu4y("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bNA8s = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.ciu4y = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pH5M = null;
        WebSocket.bNB8t = {};
        WebSocket.Pu4y = [];
        WebSocket.ciB4F = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.bah8Z(function () {
                WebSocket.pH5M.loadManualPolicyFile(url)
            })
        };
        WebSocket.bwI4M = function () {
            if (WebSocket.pH5M) return;
            if (WebSocket.cit4x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cit4x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cio4s()) {
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
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cGV0x = function () {
            setTimeout(function () {
                WebSocket.pH5M = document.getElementById("webSocketFlash");
                WebSocket.pH5M.setCallerUrl(location.href);
                WebSocket.pH5M.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Pu4y.length; ++i) {
                    WebSocket.Pu4y[i]()
                }
                WebSocket.Pu4y = []
            }, 0)
        };
        WebSocket.cGX0x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.pH5M.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bNB8t[events[i].webSocketId].ciy4C(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cGZ0x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.ea1x = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bah8Z = function (task) {
            if (WebSocket.pH5M) {
                task()
            } else {
                WebSocket.Pu4y.push(task)
            }
        };
        WebSocket.cio4s = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bwI4M()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bwI4M()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {
        }

        XHR.prototype.post = function (data) {
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
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
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
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c9h = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
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
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c9h(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index, iframe;
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
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c9h = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.eg1x) this.eg1x = {};
        this.bNs8k = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.eg1x || !this.eg1x.error || isArray(this.eg1x.error) && !this.eg1x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.eg1x) return false;
        var handler = this.eg1x[type];
        if (!handler) return false;
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
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
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
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
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
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.eg1x) this.eg1x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.eg1x[type]) {
            this.eg1x[type] = listener
        } else if (isArray(this.eg1x[type])) {
            this.eg1x[type].push(listener)
        } else {
            this.eg1x[type] = [this.eg1x[type], listener]
        }
        if (isArray(this.eg1x[type]) && !this.eg1x[type].warned) {
            var m;
            if (this.bNs8k !== undefined) {
                m = this.bNs8k
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.eg1x[type].length > m) {
                this.eg1x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.eg1x[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
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
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.eg1x || !this.eg1x[type]) return this;
        var list = this.eg1x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.eg1x[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.eg1x = {};
            return this
        }
        var events = this.eg1x && this.eg1x[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.eg1x[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.eg1x) this.eg1x = {};
        if (!this.eg1x[type]) this.eg1x[type] = [];
        if (!isArray(this.eg1x[type])) {
            this.eg1x[type] = [this.eg1x[type]]
        }
        return this.eg1x[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

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
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
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
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
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
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
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
    var filterMessage = function (message) {
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
    var checkMessage = function (ids) {
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
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
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
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        l9c = c9h("nm.x"), dE1x = c9h("nm.u"), q9h = c9h("nm.d"), Pe4i = c9h("pomelo"), Y0x = 0, b9i, L9C;
    q9h.fo2x({
        "polling-init": {
            url: "/api/push/init", format: function (Q9H) {
                Y0x = 2;
                var tK7D = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j9a = Q9H.account || bb0x, do1x = GUser.userId;
                Pe4i.init(tK7D.host, tK7D.port, true, this.cig4k.f9e(this, {
                    user: do1x,
                    nonce: j9a.nonce,
                    domain: tK7D.domain,
                    productKey: tK7D.key,
                    signature: j9a.signature,
                    expire_time: j9a.expireTime
                }))
            }, onerror: function () {
                return this.bxq4u()
            }
        }
    });
    q9h.Cl9c = NEJ.C();
    b9i = q9h.Cl9c.N9E(q9h.hG2x);
    b9i.cy0x = function () {
        var qI5N = !1;
        return function (e9f) {
            if (!qI5N) {
                qI5N = !0
            }
            this.cE0x(e9f);
            Pe4i.on("specify", this.qG5L.f9e(this));
            Pe4i.on("broadcast", this.qG5L.f9e(this))
        }
    }();
    b9i.qG5L = function (d9g) {
        k9b.bd0x(d9g, function (bG0x) {
            h9c.z9q(q9h.Cl9c, "message", bG0x)
        }, this)
    };
    b9i.bxq4u = function () {
        var bA0x = 500;
        return function () {
            Y0x = 0;
            Pe4i.disconnect();
            if (bA0x > 6e4) bA0x = 500;
            bA0x *= 2
        }
    }();
    b9i.cig4k = function (e9f, ca0x) {
        if (!!ca0x) {
            return this.bxq4u()
        }
        Y0x = 3;
        Pe4i.registerAndBind(e9f, function (m9d) {
            if (m9d.code != 200) {
                return this.bxq4u()
            }
            Y0x = 4
        }.f9e(this))
    };
    b9i.cHb0x = function () {
        dE1x.chY4c.gf2x().cHd0x()
    };
    b9i.cHf0x = function () {
        dE1x.chY4c.gf2x().cHh0x()
    };
    b9i.bxM4Q = function () {
        var qI5N = !1;
        return function () {
            if (qI5N) return;
            qI5N = !0;
            this.cq0x("polling-init", {})
        }
    }();
    I9z.fJ2x.A9r({event: "message", element: q9h.Cl9c})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), dw1x = c9h("nej.p"),
        k9b = c9h("nej.u"), n9e = c9h("nm.l"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), cw0x = c9h("api"), b9i, L9C;
    var gg2x = a8i.jj3x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n9e.bxO4S = NEJ.C();
    b9i = n9e.bxO4S.N9E(n9e.eo1x);
    L9C = n9e.bxO4S.cs0x;
    b9i.bl0x = function (e9f) {
        e9f.title = "意见反馈";
        this.bn0x(e9f)
    };
    b9i.ch0x = function () {
        this.cf0x = gg2x
    };
    b9i.bW0x = function () {
        this.ci0x();
        this.hB2x = {};
        var Kw2x = a8i.H9y;
        var HP1x = h9c.s9j;
        this.hB2x.submit_btn = Kw2x(this.o9f, "u-btn2")[0];
        this.hB2x.cancle_btn = Kw2x(this.o9f, "u-btn2")[1];
        this.hB2x.prompt_msg = Kw2x(this.o9f, "u-err")[0];
        this.hB2x.zs = Kw2x(this.o9f, "zs")[0];
        a8i.ba0x(this.hB2x.zs, "display", "none");
        this.hB2x.fb_txt = Kw2x(this.o9f, "u-txt")[0];
        this.hB2x.contact = Kw2x(this.o9f, "u-txt")[1];
        a8i.gu2x(this.hB2x.fb_txt, "holder");
        a8i.gu2x(this.hB2x.contact, "holder");
        if (a8i.bE0x(this.hB2x.fb_txt.parentNode, "holder-parent")) {
            a8i.ba0x(this.hB2x.fb_txt.parentNode, "display", "block")
        }
        if (a8i.bE0x(this.hB2x.contact.parentNode, "holder-parent")) {
            a8i.ba0x(this.hB2x.contact.parentNode, "display", "block")
        }
        HP1x(this.hB2x.submit_btn, "click", this.chV4Z.f9e(this));
        HP1x(this.hB2x.cancle_btn, "click", this.chU4Y.f9e(this));
        HP1x(this.hB2x.prompt_msg, "msgShow", this.chS4W.f9e(this));
        HP1x(this.hB2x.fb_txt, "keyup", this.vj7c.f9e(this));
        HP1x(this.hB2x.fb_txt, "input", this.fP2x.f9e(this));
        HP1x(this.hB2x.contact, "keyup", this.chO4S.f9e(this));
        HP1x(this.hB2x.contact, "input", this.bNo8g.f9e(this));
        this.kL3x = q9h.hT2x.A9r()
    };
    b9i.chV4Z = function (d9g) {
        h9c.bh0x(d9g);
        if (this.cP0x()) return;
        var bo0x = this.hB2x.fb_txt.value.trim();
        var bq0x = bo0x.length;
        var e9f = {type: "json", method: "post", noEnc: true};
        var bNm8e = this.hB2x.contact.value.trim();
        var bav8n = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l9c.bwe3x(),
            contact: bNm8e
        };
        var j9a = {content: bo0x, client: "web", xInfo: JSON.stringify(bav8n)}, oj4n = this.kL3x.cuR7K();
        if (oj4n && oj4n.length) {
            j9a.log = oj4n.join("\n")
        }
        if (bq0x == 0) {
            this.hB2x.prompt_msg.innerHTML = "反馈内容不能为空";
            a8i.ba0x(this.hB2x.prompt_msg, "display", "block");
            return
        }
        if (bNm8e.length > 100) {
            this.hB2x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a8i.ba0x(this.hB2x.prompt_msg, "display", "block");
            return
        }
        this.cP0x(true);
        e9f.data = k9b.cD0x(j9a);
        e9f.onload = this.chE4I.f9e(this);
        e9f.onerror = this.iP3x.f9e(this);
        v9m.bm0x("/api/feedback/web", e9f)
    };
    b9i.fP2x = function (d9g) {
        var bq0x = this.hB2x.fb_txt.value.trim().length;
        if (bq0x > 0) a8i.ba0x(this.hB2x.prompt_msg, "display", "none");
        dw1x.dt1x.browser == "ie" && dw1x.dt1x.version < "7.0" ? setTimeout(this.gi2x.f9e(this), 0) : this.gi2x()
    };
    b9i.vj7c = function (d9g) {
        if (d9g.keyCode === 8) this.gi2x()
    };
    b9i.gi2x = function () {
        var bq0x = this.hB2x.fb_txt.value.trim().length;
        this.hB2x.zs.innerHTML = !bq0x ? "0/140" : bq0x + "/140"
    };
    b9i.bNo8g = function (d9g) {
        var bq0x = this.hB2x.contact.value.trim().length;
        if (bq0x > 0) a8i.ba0x(this.hB2x.prompt_msg, "display", "none")
    };
    b9i.chO4S = function (d9g) {
        if (d9g.keyCode === 8) this.bNo8g()
    };
    b9i.chU4Y = function (d9g) {
        h9c.cn0x(d9g);
        this.bt0x()
    };
    b9i.chS4W = function (d9g) {
        var g9d = h9c.W0x(d9g);
        g9d.innerHTML = "请输入反馈内容"
    };
    b9i.cHi0x = function (cHj0x) {
        var g9d = h9c.W0x(d9g);
        g9d.innerHTML = ""
    };
    b9i.chE4I = function (m9d) {
        this.cP0x(false);
        this.bt0x();
        n9e.Z0x.J9A({tip: "意见发送成功", autoclose: true})
    };
    b9i.iP3x = function (m9d) {
        this.cP0x(false);
        n9e.Z0x.J9A({tip: "意见发送失败", autoclose: true})
    };
    b9i.cP0x = function (da1x) {
        return this.dT1x(this.hB2x.submit_btn, da1x, "发送意见", "发送中...")
    };
    b9i.J9A = function () {
        L9C.J9A.call(this);
        this.cP0x(false);
        this.hB2x.fb_txt.value = "";
        this.hB2x.contact.value = "";
        a8i.ba0x(this.hB2x.prompt_msg, "display", "none");
        this.gi2x()
    };
    l9c.chu4y = function (e9f) {
        e9f = e9f || {};
        if (e9f.title === undefined) e9f.title = "意见反馈";
        n9e.bxO4S.J9A(e9f)
    };
    cw0x.feedback = l9c.feedback = l9c.chu4y
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, O9F = c9h("nej.ui"), b9i;
    if (!!O9F.yS8K) return;
    O9F.yS8K = NEJ.C();
    b9i = O9F.yS8K.N9E(O9F.el1x);
    b9i.cy0x = function () {
        this.hb2x = this.bNh8Z();
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.cp0x = e9f.index;
        this.gy2x = e9f.total;
        this.hE2x = e9f.range;
        this.gI2x(e9f.data)
    };
    b9i.bC0x = function () {
        this.bF0x();
        delete this.bk0x;
        delete this.cp0x;
        delete this.gy2x;
        delete this.hE2x
    };
    b9i.iz3x = br0x;
    b9i.bNh8Z = function () {
        var gK2x = +(new Date);
        return function () {
            return "itm-" + ++gK2x
        }
    }();
    b9i.Ee0x = function () {
        return this.hb2x
    };
    b9i.ib3x = function () {
        return this.bk0x
    };
    b9i.gI2x = function (j9a) {
        this.bk0x = j9a || {};
        this.iz3x(this.bk0x)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), O9F = c9h("nej.ui"), b9i, L9C;
    if (!!O9F.vq7j) return;
    O9F.vq7j = NEJ.C();
    b9i = O9F.vq7j.N9E(O9F.yS8K);
    L9C = O9F.vq7j.cs0x;
    b9i.bl0x = function (e9f) {
        this.chs4w = e9f.pkey || "id";
        this.bn0x(e9f)
    };
    b9i.DL0x = function (j9a) {
        this.z9q("ondelete", {ext: j9a, id: this.Ee0x(), data: this.ib3x(), body: this.lE4I()})
    };
    b9i.tC6w = function (j9a) {
        this.z9q("onupdate", {ext: j9a, id: this.Ee0x(), data: this.ib3x(), body: this.lE4I()})
    };
    b9i.gI2x = function (j9a) {
        L9C.gI2x.apply(this, arguments);
        this.hb2x = this.bk0x[this.chs4w] || this.bNh8Z()
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, fz2x = NEJ.R, a8i = c9h("nej.e"), k9b = c9h("nej.u"), O9F = c9h("nej.ui"), b9i, iT3x,
        bgn9e;
    if (!!O9F.bgr9i) return;
    O9F.bgr9i = NEJ.C();
    b9i = O9F.bgr9i.N9E(O9F.el1x);
    b9i.bl0x = function (e9f) {
        this.baz8r = NEJ.X({}, e9f);
        this.fN2x = NEJ.X({}, e9f);
        delete this.baz8r.onchange;
        this.fN2x.onchange = this.fY2x.f9e(this);
        this.bn0x(e9f);
        this.chr4v({number: e9f.number, label: e9f.label || bb0x})
    };
    b9i.bC0x = function () {
        this.bF0x();
        if (!!this.li3x) {
            this.li3x.T0x();
            delete this.li3x
        }
        delete this.baz8r;
        delete this.fN2x;
        this.chn4r();
        this.o9f.innerHTML = "&nbsp;"
    };
    b9i.ch0x = function () {
        this.lX4b = iT3x
    };
    b9i.chr4v = function (j9a) {
        a8i.dB1x(this.o9f, bgn9e, j9a);
        var gK2x = a8i.Ky2x();
        this.fN2x.list = a8i.H9y(this.o9f, "js-i-" + gK2x);
        this.fN2x.pbtn = (a8i.H9y(this.o9f, "js-p-" + gK2x) || fz2x)[0];
        this.fN2x.nbtn = (a8i.H9y(this.o9f, "js-n-" + gK2x) || fz2x)[0]
    };
    b9i.bW0x = function () {
        this.ci0x()
    };
    b9i.cHk0x = function (j9a) {
        return a8i.cd0x(bgn9e, j9a)
    };
    b9i.fY2x = function (d9g) {
        if (this.OP4T) return;
        var r9i = d9g.index, cB0x = d9g.total;
        this.OP4T = !0;
        this.OO4S(r9i, cB0x);
        k9b.bd0x(this.baB8t, function (ty6s) {
            ty6s.OO4S(r9i, cB0x)
        });
        this.OP4T = !1;
        this.z9q("onchange", d9g)
    };
    b9i.f9e = function (bH0x) {
        bH0x = a8i.B9s(bH0x);
        if (!bH0x) return this;
        var ct0x = NEJ.X({}, this.baz8r);
        ct0x.parent = bH0x;
        ct0x.index = this.tx6r();
        ct0x.total = this.kw3x();
        var ty6s = this.constructor.A9r(ct0x);
        ty6s.xF8x("onchange", this.fN2x.onchange);
        if (!this.baB8t) this.baB8t = [];
        this.baB8t.push(ty6s);
        return this
    };
    b9i.chn4r = function () {
        var bni1x = function (ty6s, r9i, i9b) {
            ty6s.T0x();
            i9b.splice(r9i, 1)
        };
        return function () {
            k9b.nj4n(this.baB8t, bni1x)
        }
    }();
    b9i.kN3x = function (r9i) {
        if (!this.li3x) return;
        this.li3x.kN3x(r9i)
    };
    b9i.tx6r = function () {
        if (!this.li3x) return 1;
        return this.li3x.tx6r()
    };
    b9i.kw3x = function () {
        if (!this.li3x) return 1;
        return this.li3x.kw3x()
    };
    b9i.OO4S = function (r9i, cB0x) {
        if (!this.li3x) return;
        this.li3x.OO4S(r9i, cB0x)
    };
    b9i.bgM0x = function (cB0x) {
        if (!this.li3x) return;
        this.li3x.bgM0x(cB0x)
    };
    iT3x = a8i.th6b(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bgn9e = a8i.eC1x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        O9F = c9h("nej.ut"), b9i;
    if (!!O9F.baE8w) return;
    O9F.baE8w = NEJ.C();
    b9i = O9F.baE8w.N9E(O9F.cK0x);
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.baI8A = e9f.pbtn;
        this.cr0x = e9f.nbtn;
        this.baJ8B = e9f.sbtn;
        this.baK8C = e9f.ebtn;
        this.jp3x = e9f.event || "click";
        this.kU3x = e9f.selected || "js-selected";
        this.or4v = e9f.disabled || "js-disabled";
        this.chl4p(e9f.list);
        this.OO4S(e9f.index || 1, e9f.total || 1)
    };
    b9i.bC0x = function () {
        this.bF0x();
        delete this.bU0x;
        delete this.jp3x;
        delete this.baI8A;
        delete this.cr0x;
        delete this.baJ8B;
        delete this.baK8C;
        delete this.bNd8V;
        delete this.gy2x;
        delete this.cp0x;
        delete this.kU3x;
        delete this.or4v
    };
    b9i.chl4p = function () {
        var bhb0x = function (g9d) {
            this.bU0x.push(g9d);
            this.bX0x([[g9d, this.jp3x, this.cv0x.ev1x(this, 0)]])
        };
        return function (i9b) {
            this.bU0x = [];
            this.bX0x([[this.baI8A, "click", this.cv0x.ev1x(this, -1)], [this.cr0x, "click", this.cv0x.ev1x(this, 1)], [this.baJ8B, "click", this.cv0x.ev1x(this, -2)], [this.baK8C, "click", this.cv0x.ev1x(this, 2)]]);
            k9b.bd0x(i9b, bhb0x, this)
        }
    }();
    b9i.Eh0x = function (g9d, r9i) {
        if (r9i == null) {
            g9d.innerText = "";
            a8i.ba0x(g9d, "display", "none");
            a8i.x9o(g9d, this.kU3x)
        } else {
            g9d.innerText = r9i;
            a8i.ba0x(g9d, "display", "");
            r9i == this.cp0x ? a8i.y9p(g9d, this.kU3x) : a8i.x9o(g9d, this.kU3x)
        }
    };
    b9i.bhh0x = function () {
        if (this.cp0x <= 1) {
            a8i.y9p(this.baI8A, this.or4v);
            a8i.y9p(this.baJ8B, this.or4v)
        } else {
            a8i.x9o(this.baI8A, this.or4v);
            a8i.x9o(this.baJ8B, this.or4v)
        }
        if (this.cp0x >= this.gy2x) {
            a8i.y9p(this.cr0x, this.or4v);
            a8i.y9p(this.baK8C, this.or4v)
        } else {
            a8i.x9o(this.cr0x, this.or4v);
            a8i.x9o(this.baK8C, this.or4v)
        }
    };
    b9i.baL8D = br0x;
    b9i.bhk0x = function () {
        this.baL8D();
        this.bhh0x();
        this.z9q("onchange", {last: this.bNd8V, total: this.gy2x, index: this.cp0x, ext: this.bhp0x})
    };
    b9i.bNa8S = function (r9i) {
        r9i = parseInt(r9i);
        if (isNaN(r9i) || this.gy2x == null) return !1;
        r9i = Math.max(1, Math.min(r9i, this.gy2x));
        this.bNd8V = this.cp0x;
        this.cp0x = r9i;
        return !0
    };
    b9i.bhu0x = function (cB0x) {
        cB0x = parseInt(cB0x);
        if (isNaN(cB0x) || cB0x < 1) return !1;
        this.gy2x = cB0x;
        return !0
    };
    b9i.cv0x = function (d9g, eZ2x) {
        h9c.cn0x(d9g);
        var F9w = h9c.W0x(d9g);
        if (!F9w || a8i.bE0x(F9w, this.kU3x) || a8i.bE0x(F9w, this.or4v)) return;
        var r9i = F9w.innerText;
        switch (eZ2x) {
            case 1:
            case-1:
                r9i = this.cp0x + eZ2x;
                break;
            case 2:
                r9i = this.gy2x;
                break;
            case-2:
                r9i = 1;
                break
        }
        this.kN3x(r9i)
    };
    b9i.tx6r = function () {
        return this.cp0x
    };
    b9i.kN3x = function (r9i) {
        var chb4f = this.cp0x;
        this.bNa8S(r9i);
        if (chb4f != this.cp0x) this.bhk0x();
        return this
    };
    b9i.kw3x = function () {
        return this.gy2x
    };
    b9i.UQ6K = function (cB0x) {
        if (this.bhu0x(cB0x) && this.cp0x != null) {
            this.cp0x = 1;
            this.bhk0x()
        }
        return this
    };
    b9i.bgM0x = function (cB0x) {
        if (this.bhu0x(cB0x)) {
            this.baL8D();
            this.bhh0x()
        }
        return this
    };
    b9i.OO4S = function (r9i, cB0x) {
        if (!this.bhu0x(cB0x) || !this.bNa8S(r9i)) return this;
        this.bhk0x();
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), cY1x = c9h("nej.x"), O9F = c9h("nej.ut"),
        b9i;
    if (!!O9F.Oq3x) return;
    O9F.Oq3x = NEJ.C();
    b9i = O9F.Oq3x.N9E(O9F.baE8w);
    b9i.cy0x = function () {
        this.cE0x();
        var g9d = a8i.di1x("span", "zdot");
        g9d.innerText = "...";
        this.baT8L = [g9d.cloneNode(true), g9d]
    };
    b9i.bC0x = function () {
        this.bF0x();
        this.bMY8Q()
    };
    b9i.bMY8Q = function () {
        a8i.mB4F(this.baT8L[0]);
        a8i.mB4F(this.baT8L[1])
    };
    b9i.baL8D = function () {
        this.bhp0x = {last: !1, first: !1, list: this.bU0x};
        this.bMY8Q();
        this.Eh0x(this.bU0x[0], 1);
        var bM0x = 1, bq0x = this.bU0x.length;
        if (this.gy2x < bq0x) {
            for (var qx5C; bM0x < bq0x; bM0x++) {
                qx5C = bM0x + 1;
                this.Eh0x(this.bU0x[bM0x], qx5C > this.gy2x ? null : qx5C)
            }
            return
        }
        if (this.cp0x > 1) {
            var cz0x = Math.floor((bq0x - 2) / 2), cgX4b = this.gy2x - bq0x + 2, hy2x = Math.max(2, this.cp0x - cz0x);
            if (this.gy2x >= bq0x) {
                hy2x = Math.min(hy2x, cgX4b)
            }
            if (hy2x > 2) {
                this.bU0x[0].insertAdjacentElement("afterEnd", this.baT8L[0]);
                this.bhp0x.first = !0
            }
            for (var r9i; ; bM0x++) {
                r9i = hy2x + bM0x - 1;
                if (r9i > this.cp0x) break;
                this.Eh0x(this.bU0x[bM0x], r9i)
            }
        }
        if (this.cp0x < this.gy2x) {
            var r9i, hy2x = this.cp0x + 1;
            for (var i = 0, l = bq0x - 2; ; i++, bM0x++) {
                r9i = hy2x + i;
                if (bM0x > l || r9i > this.gy2x) break;
                this.Eh0x(this.bU0x[bM0x], r9i)
            }
            if (r9i < this.gy2x) {
                this.bU0x[bM0x].insertAdjacentElement("beforeBegin", this.baT8L[1]);
                this.bhp0x.last = !0
            }
            if (r9i <= this.gy2x) {
                this.Eh0x(this.bU0x[bM0x++], this.gy2x)
            }
        }
        for (; bM0x < bq0x; bM0x++) {
            this.Eh0x(this.bU0x[bM0x])
        }
    };
    a8i.cgU4Y = cY1x.cgU4Y = function (bH0x, e9f) {
        var C9t = a8i.lD4H(bH0x);
        if (!C9t) return null;
        if (!O9F.bbR8J(C9t, O9F.Oq3x)) {
            e9f = e9f || {};
            var i9b = !e9f.clazz ? a8i.dk1x(C9t) : a8i.H9y(C9t, e9f.clazz);
            e9f.pbtn = i9b.shift();
            e9f.nbtn = i9b.pop();
            e9f.list = i9b;
            delete e9f.clazz
        }
        return O9F.bbR8J(C9t, O9F.Oq3x, e9f || bb0x)
    };
    cY1x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, fz2x = NEJ.R, a8i = c9h("nej.e"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        O9F = c9h("nej.ui"), b9i, L9C, gg2x;
    if (!!O9F.Ol3x) return;
    O9F.Ol3x = NEJ.C();
    b9i = O9F.Ol3x.N9E(O9F.bgr9i);
    L9C = O9F.Ol3x.cs0x;
    b9i.bl0x = function (e9f) {
        e9f.number = parseInt(e9f.number) || 9;
        this.bn0x(e9f);
        this.li3x = I9z.Oq3x.A9r(this.fN2x)
    };
    b9i.fY2x = function (d9g) {
        if (!!this.baz8r.noend) {
            var bMX8P = d9g.ext || bb0x, i9b = bMX8P.list || fz2x;
            if (bMX8P.last) {
                a8i.ba0x(i9b[i9b.length - 1], "display", "none")
            }
        }
        L9C.fY2x.apply(this, arguments)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        bc0x = c9h("nej.ui"), O9F = c9h("nej.ut"), b9i;
    if (!!O9F.baZ8R) return;
    O9F.baZ8R = NEJ.C();
    b9i = O9F.baZ8R.N9E(O9F.cK0x);
    b9i.bl0x = function (e9f) {
        this.ja3x = {};
        this.bn0x(e9f);
        this.im3x = a8i.B9s(e9f.parent);
        this.ff2x = {parent: this.im3x};
        this.pn5s = parseInt(e9f.limit) || 10;
        this.Ak9b = parseInt(e9f.first) || this.pn5s;
        this.cgP4T(e9f.item);
        this.cgN4R(e9f.cache || bb0x);
        this.cgL4P(e9f.pager || bb0x);
        this.gI2x()
    };
    b9i.bC0x = function () {
        this.z9q("onbeforerecycle");
        this.Od3x();
        this.bF0x();
        if (this.ja3x.clear) {
            this.S0x.uP7I(this.ja3x.key)
        }
        this.S0x.T0x();
        if (!!this.jx3x) {
            this.jx3x.T0x();
            delete this.jx3x
        }
        delete this.bMU8M;
        delete this.fN2x;
        delete this.bba8S;
        delete this.S0x;
        delete this.im3x;
        delete this.Ob3x;
        delete this.ff2x;
        delete this.ja3x
    };
    b9i.bMT8L = function () {
        var df1x = /\{(.*?)\}/gi, cgH4L = function (oQ5V, j9a) {
            return (oQ5V || "{id}{seed}").replace(df1x, function ($1, $2) {
                var D9u = j9a[$2];
                return D9u == null ? $1 : D9u
            })
        };
        return function (C9t) {
            var K9B = cgH4L(this.ff2x.jstIdTempalte, {id: C9t, seed: a8i.Ky2x()});
            if (!this.ff2x.jstIdType) {
                return a8i.B9s(K9B)
            } else if (this.ff2x.jstIdType == 1) {
                return (a8i.H9y(this.im3x, K9B) || [])[0]
            }
        }
    }();
    b9i.BJ9A = function (bM0x, bi0x, fZ2x, bq0x) {
        var m9d = {index: 1, total: 1};
        if (bi0x >= bM0x) {
            m9d.index = Math.floor((bi0x - bM0x) / fZ2x) + 2
        }
        if (bq0x > bM0x) {
            m9d.total = Math.ceil((bq0x - bM0x) / fZ2x) + 1
        }
        return m9d
    };
    b9i.bMQ8I = function (K9B) {
        delete this.Ob3x;
        this.Kd2x = K9B;
        this.bX0x([[this.im3x, "click", this.cgx4B.f9e(this)]])
    };
    b9i.cgP4T = function (p9g) {
        if (k9b.fD2x(p9g)) {
            this.bMQ8I(p9g);
            return
        }
        NEJ.X(this.ff2x, p9g);
        var ed1x = this.ff2x.klass;
        delete this.ff2x.klass;
        if (k9b.fD2x(ed1x)) {
            this.bMQ8I(ed1x);
            return
        }
        delete this.Kd2x;
        this.Ob3x = ed1x;
        this.ff2x.ondelete = this.z9q.f9e(this, "ondelete");
        this.ff2x.onupdate = this.z9q.f9e(this, "onupdate")
    };
    b9i.cgN4R = function (R9I) {
        var ed1x = R9I.klass, ky3x = NEJ.X({}, R9I);
        this.ja3x.key = ky3x.lkey;
        this.ja3x.data = ky3x.data || {};
        this.ja3x.clear = !!ky3x.clear;
        this.ff2x.pkey = ky3x.key || "id";
        ky3x.onlistload = this.biw0x.f9e(this);
        ky3x.onpullrefresh = this.cgw4A.f9e(this);
        if (!!ed1x && "onlistchange" in ed1x) {
            this.bX0x([[ed1x, "listchange", this.biA0x.f9e(this)]])
        } else {
            ky3x.onitemadd = this.bbb8T.f9e(this);
            ky3x.onitemdelete = this.bbc8U.f9e(this);
            ky3x.onitemupdate = this.bMN8F.f9e(this)
        }
        this.S0x = (ed1x || O9F.Uk6e).A9r(ky3x);
        if (R9I.total != null) {
            this.S0x.UQ6K(this.ja3x.key, R9I.total)
        }
        if (!!R9I.list) {
            this.S0x.uQ7J(this.ja3x.key, R9I.list)
        }
    };
    b9i.cgL4P = function (ty6s) {
        this.bMU8M = ty6s.klass || bc0x.Ol3x;
        this.fN2x = NEJ.X({}, ty6s);
        if (k9b.eJ1x(ty6s.parent)) {
            this.fN2x.parent = ty6s.parent[0];
            this.NV3x = ty6s.parent.slice(1);
            if (!this.NV3x || !this.NV3x.length) {
                delete this.NV3x
            }
        }
        delete this.fN2x.klass
    };
    b9i.Od3x = function () {
        var gF2x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z9q("onbeforelistclear", {parent: this.im3x});
            if (!!this.fK2x && this.fK2x.length > 0) {
                this.fK2x = this.Ob3x.T0x(this.fK2x);
                delete this.fK2x
            }
            if (gF2x.test(this.im3x.tagName)) {
                a8i.bPU9L(this.im3x)
            } else {
                this.im3x.innerHTML = ""
            }
        }
    }();
    b9i.biL0x = function (bbk8c) {
        if (!!this.fN2x.fixed) return;
        a8i.ba0x(this.fN2x.parent, "display", bbk8c);
        k9b.bd0x(this.NV3x, function (bH0x) {
            a8i.ba0x(bH0x, "display", bbk8c)
        }, this)
    };
    b9i.biQ0x = function () {
        var r9i = this.fN2x.index || 1;
        delete this.fN2x.index;
        if (!!this.jx3x) {
            r9i = this.jx3x.tx6r()
        }
        this.BD9u({last: r9i, index: r9i})
    };
    b9i.BD9u = function (d9g) {
        this.z9q("onpagechange", d9g)
    };
    b9i.bML8D = function (bi0x) {
        this.ja3x.offset = bi0x;
        this.Wp6j()
    };
    b9i.bMK8C = function (e9f) {
        return e9f
    };
    b9i.Wp6j = function () {
        this.NQ3x();
        var j9a = this.ja3x.data;
        j9a.offset = this.ja3x.offset;
        var pT5Y = j9a.offset == 0;
        j9a.total = pT5Y;
        this.ja3x.limit = pT5Y ? this.Ak9b : this.pn5s;
        j9a.limit = this.ja3x.limit;
        this.S0x.lR4V(this.bMK8C(NEJ.X({}, this.ja3x)))
    };
    b9i.biw0x = function (e9f) {
        if (e9f.key != this.ja3x.key || e9f.offset != this.ja3x.offset) return;
        this.bbo8g();
        var i9b = this.S0x.hw2x(e9f.key);
        if (!i9b || !i9b.length) {
            this.biX0x();
            return
        }
        var fZ2x = e9f.limit, bi0x = e9f.offset;
        if (this.biZ0x(i9b, bi0x, fZ2x)) return;
        this.z9q("onbeforelistrender", {list: i9b, offset: bi0x, parent: this.im3x});
        if (!!this.Kd2x) {
            this.ff2x.xlist = i9b;
            this.ff2x.beg = bi0x;
            this.ff2x.end = Math.min(i9b.length, bi0x + fZ2x) - 1;
            this.ff2x.act = "list";
            var dW1x = a8i.cd0x(this.Kd2x, this.ff2x);
            this.NO3x(dW1x)
        } else {
            this.ff2x.limit = fZ2x;
            this.ff2x.offset = bi0x;
            var hs2x = a8i.Bj9a(i9b, this.Ob3x, this.ff2x);
            this.NM3x(hs2x)
        }
        this.z9q("onafterlistrender", {list: i9b, offset: bi0x, parent: this.im3x})
    };
    b9i.cgw4A = function (e9f) {
        if (!this.bba8S) return;
        delete this.bba8S;
        this.bbo8g("onafterpullrefresh");
        this.gI2x()
    };
    b9i.bMJ8B = function (r9i, cB0x) {
        if (!!this.jx3x) {
            var xy8q = this.jx3x.tx6r(), cgn3x = this.jx3x.kw3x();
            if (xy8q > cB0x || cB0x != cgn3x) {
                this.jx3x.T0x();
                delete this.jx3x;
                this.BD9u({last: xy8q, index: Math.min(r9i, cB0x)});
                return !0
            }
        } else {
            this.fN2x.index = r9i;
            this.fN2x.total = cB0x;
            this.jx3x = this.bMU8M.A9r(this.fN2x);
            this.jx3x.xF8x("onchange", this.BD9u.f9e(this));
            k9b.bd0x(this.NV3x, function (bH0x) {
                this.jx3x.f9e(bH0x)
            }, this)
        }
    };
    b9i.bbw8o = function () {
        var gK2x = +(new Date);
        return function (j9a) {
            var C9t = j9a[this.ff2x.pkey];
            if (!C9t) {
                j9a["dirty-data"] = !0;
                j9a[this.ff2x.pkey] = "dirty-" + gK2x++
            }
            return j9a
        }
    }();
    b9i.bbz8r = function (j9a) {
        var C9t = j9a[this.ff2x.pkey];
        if (!!j9a["dirty-data"]) {
            delete j9a["dirty-data"];
            delete j9a[this.ff2x.pkey]
        }
        return C9t
    };
    b9i.bbA8s = function () {
        var cgl3x = function (kH3x, mp4t) {
            this.im3x.insertAdjacentElement(kH3x, mp4t)
        };
        return function (kH3x, j9a) {
            var KI2x = [j9a];
            if (!!this.Kd2x) {
                this.ff2x.xlist = KI2x;
                this.ff2x.beg = 0;
                this.ff2x.end = 0;
                this.ff2x.act = "add";
                this.NO3x(a8i.cd0x(this.Kd2x, this.ff2x), kH3x)
            } else {
                this.ff2x.limit = 1;
                this.ff2x.offset = 0;
                this.ff2x.parent = cgl3x.f9e(this, kH3x);
                var hs2x = a8i.Bj9a(KI2x, this.Ob3x, this.ff2x);
                this.ff2x.parent = this.im3x;
                this.NM3x(hs2x)
            }
        }
    }();
    b9i.NQ3x = br0x;
    b9i.bbo8g = function (V0x) {
        var d9g = {parent: this.im3x};
        this.z9q(V0x || "onafterlistload", d9g);
        if (!d9g.stopped) {
            a8i.mB4F(this.cu0x)
        }
    };
    b9i.biZ0x = br0x;
    b9i.bbB8t = function (bG0x, kH3x) {
        if (k9b.fD2x(bG0x)) {
            if (!this.cu0x) this.cu0x = a8i.di1x("div");
            this.cu0x.innerHTML = bG0x
        } else {
            this.cu0x = bG0x
        }
        this.im3x.insertAdjacentElement(kH3x || "beforeEnd", this.cu0x)
    };
    b9i.zr8j = function (V0x, kh3x, kH3x) {
        var d9g = {parent: this.im3x};
        this.z9q(V0x, d9g);
        if (!d9g.stopped) {
            this.bbB8t(d9g.value || kh3x, kH3x)
        }
    };
    b9i.biX0x = br0x;
    b9i.NO3x = br0x;
    b9i.NM3x = br0x;
    b9i.cgx4B = function () {
        var gF2x = /^(?:delete|update)$/;
        return function (d9g) {
            var g9d = h9c.W0x(d9g, "d:action");
            if (!g9d) return;
            var U0x = a8i.t9k(g9d, "action");
            if (!gF2x.test(U0x)) return;
            var C9t = a8i.t9k(g9d, "id");
            if (!C9t) return;
            var p9g = this.S0x.eK2x(C9t);
            if (!p9g) return;
            h9c.bh0x(d9g);
            this.z9q("on" + U0x, {data: p9g, id: p9g[this.ff2x.pkey], body: a8i.B9s(this.bMT8L(C9t))})
        }
    }();
    b9i.bbb8T = br0x;
    b9i.Wn6h = function (d9g) {
        var j9a = d9g.data || {}, e9f = {data: j9a, key: this.ja3x.key, id: j9a[this.ff2x.pkey]};
        this.z9q("onbeforedelete", e9f);
        this.S0x.MF2x(e9f)
    };
    b9i.bbc8U = br0x;
    b9i.Wm6g = function (d9g) {
        var j9a = d9g.data || {}, e9f = {data: j9a, key: this.ja3x.key};
        this.z9q("onbeforeupdate", e9f);
        this.S0x.Wq6k(e9f)
    };
    b9i.bMN8F = function (d9g) {
        this.NC3x(d9g, "onafterupdate");
        if (d9g.stopped) return;
        var C9t = d9g.data[this.ff2x.pkey];
        if (!!this.fK2x) {
            var p9g = a8i.bUr1x(C9t);
            if (!!p9g) p9g.gI2x(d9g.data)
        } else {
            var g9d = a8i.B9s(C9t + "" + a8i.Ky2x());
            if (!g9d) return;
            var i9b = this.S0x.hw2x(d9g.key), r9i = k9b.dj1x(i9b, d9g.data);
            if (r9i < 0) return;
            this.ff2x.list = i9b;
            this.ff2x.beg = r9i;
            this.ff2x.end = r9i;
            this.ff2x.act = "update";
            var dW1x = a8i.cd0x(this.Kd2x, this.ff2x);
            g9d.insertAdjacentHTML("afterEnd", dW1x);
            a8i.cM0x(g9d)
        }
    };
    b9i.NC3x = function (d9g, V0x) {
        var p9g = d9g.data;
        if (!p9g || p9g[this.ff2x.pkey] == null) {
            this.z9q("onerror", d9g);
            d9g.stopped = !0
        }
        if (!d9g.stopped) {
            this.z9q(V0x, d9g)
        }
    };
    b9i.bjr0x = br0x;
    b9i.bjs0x = br0x;
    b9i.biA0x = function (d9g) {
        if (d9g.key != this.ja3x.key) return;
        switch (d9g.action) {
            case"add":
                this.bbb8T(d9g);
                break;
            case"delete":
                this.bbc8U(d9g);
                break;
            case"update":
                this.bMN8F(d9g);
                break;
            case"refresh":
                this.gI2x();
                break;
            case"unshift":
                this.bjs0x(d9g.offset, d9g.limit);
                break;
            case"append":
                this.bjr0x(d9g.offset, d9g.limit);
                break
        }
    };
    b9i.py5D = function (p9g) {
        this.Wm6g({data: p9g})
    };
    b9i.mt4x = function (p9g) {
        this.Wn6h({data: p9g})
    };
    b9i.tl6f = function (p9g) {
        this.S0x.jA3x({data: p9g, key: this.ja3x.key})
    };
    b9i.tj6d = function () {
        return this.S0x
    };
    b9i.bjx0x = function (j9a) {
        this.bbA8s("afterBegin", this.bbw8o(j9a));
        return this.bbz8r(j9a)
    };
    b9i.bMH8z = function (j9a) {
        this.bbA8s("beforeEnd", this.bbw8o(j9a));
        return this.bbz8r(j9a)
    };
    b9i.gI2x = function () {
        this.Od3x();
        this.biQ0x()
    };
    b9i.cHm0x = function () {
        this.S0x.uP7I(this.ja3x.key);
        this.gI2x()
    };
    b9i.bsl2x = function () {
        if (!!this.bba8S) return;
        this.bba8S = !0;
        this.zr8j("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var i9b = this.S0x.hw2x(this.ja3x.key);
        if (i9b && i9b[0]) {
            this.ja3x.data.aftertime = i9b[0].eventTime || ""
        }
        this.S0x.bsl2x({key: this.ja3x.key, data: this.ja3x.data})
    };
    b9i.kw3x = function () {
        return this.S0x.kw3x(this.ja3x.key)
    };
    b9i.bMF8x = function () {
        return this.jx3x
    };
    b9i.Ww6q = function () {
        return this.S0x.Ww6q(this.ja3x.key)
    };
    b9i.cgd3x = function () {
        return this.fK2x
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, fz2x = NEJ.R, k9b = c9h("nej.u"), a8i = c9h("nej.e"), O9F = c9h("nej.ut"), b9i, L9C;
    if (!!O9F.kz3x) return;
    O9F.kz3x = NEJ.C();
    b9i = O9F.kz3x.N9E(O9F.baZ8R);
    L9C = O9F.kz3x.cs0x;
    b9i.BJ9A = function (bi0x, bq0x) {
        return L9C.BJ9A.call(this, this.Ak9b, bi0x, this.pn5s, bq0x)
    };
    b9i.bjI0x = function (r9i) {
        var bi0x = 0;
        if (r9i > 1) bi0x = this.Ak9b + (r9i - 2) * this.pn5s;
        return bi0x
    };
    b9i.BD9u = function (d9g) {
        L9C.BD9u.apply(this, arguments);
        if (!d9g.stopped) {
            this.bML8D(this.bjI0x(d9g.index))
        }
    };
    b9i.NQ3x = function () {
        this.Od3x();
        this.zr8j("onbeforelistload", "列表加载中...")
    };
    b9i.bbo8g = function () {
        L9C.bbo8g.apply(this, arguments);
        this.Od3x()
    };
    b9i.biZ0x = function (i9b, bi0x, fZ2x) {
        var bx0x = this.BJ9A(bi0x, i9b.length);
        if (this.bMJ8B(bx0x.index, bx0x.total)) return !0;
        this.biL0x(bx0x.total > 1 ? "" : "none")
    };
    b9i.biX0x = function () {
        this.zr8j("onemptylist", "没有列表数据！")
    };
    b9i.bbB8t = function (bG0x, kH3x) {
        if (!kH3x && k9b.fD2x(bG0x)) {
            this.im3x.innerHTML = bG0x;
            return
        }
        L9C.bbB8t.apply(this, arguments)
    };
    b9i.NO3x = function (dW1x) {
        this.im3x.innerHTML = dW1x
    };
    b9i.NM3x = function (hs2x) {
        this.fK2x = hs2x
    };
    b9i.bbb8T = function (d9g) {
        this.NC3x(d9g, "onafteradd");
        if (!d9g.stopped) this.gI2x()
    };
    b9i.bbc8U = function (d9g) {
        this.NC3x(d9g, "onafterdelete");
        if (!d9g.stopped) this.gI2x()
    };
    b9i.bjr0x = function (bi0x, fZ2x) {
        var r9i = 1;
        if (!!this.jx3x) {
            r9i = this.jx3x.tx6r()
        }
        var kb3x = this.bjI0x(r9i), fT2x = kb3x + (r9i > 1 ? this.pn5s : this.Ak9b);
        if (bi0x >= fT2x && !!this.jx3x) {
            var bx0x = this.BJ9A(0, this.kw3x());
            this.jx3x.bgM0x(bx0x.total);
            this.biL0x(bx0x.total > 1 ? "" : "none")
        } else {
            this.gI2x()
        }
    };
    b9i.bjs0x = function (bi0x, fZ2x) {
        var r9i = 1;
        if (!!this.jx3x) {
            r9i = this.jx3x.tx6r()
        }
        var kb3x = this.bjI0x(r9i), bx0x = this.BJ9A(kb3x, this.kw3x());
        this.BD9u({last: r9i, index: bx0x.index})
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I9z = c9h("nej.ut"),
        k9b = c9h("nej.u"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), w9n = c9h("nm.w"), fq2x = 40, b9i, L9C;
    w9n.bbI8A = NEJ.C();
    b9i = w9n.bbI8A.N9E(I9z.cK0x);
    L9C = w9n.bbI8A.cs0x;
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.Ns2x = e9f.inputer;
        this.bjL0x = e9f.tipper;
        this.bX0x([[this.Ns2x, "input", this.fP2x.f9e(this)]])
    };
    b9i.bC0x = function () {
        this.bF0x();
        this.JW2x(null, null)
    };
    b9i.fP2x = function (d9g) {
        if (d9g && d9g.type == "keyup" && (d9g.keyCode != 8 || d9g.keyCode != 68)) return;
        var V0x = this.Ns2x.value, cHo0x;
        if (l9c.SY5d(V0x) > fq2x) {
            this.Ns2x.value = l9c.Dv0x(V0x, fq2x);
            this.JW2x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f9e(this))
        } else if (V0x.indexOf("#") >= 0 || V0x.indexOf("@") >= 0) {
            this.JW2x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.JW2x(null, null);
            this.z9q("onchange", {value: V0x})
        }
    };
    b9i.cgb3x = function () {
        this.fP2x()
    };
    b9i.JW2x = function () {
        var C9t = 0;
        return function (dJ1x, bMD8v) {
            if (!!C9t) window.clearTimeout(C9t);
            if (!dJ1x) {
                a8i.y9p(this.bjL0x, "f-vhide");
                this.bMC8u = !1;
                return
            }
            this.bjL0x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dJ1x;
            a8i.x9o(this.bjL0x, "f-vhide");
            this.bMC8u = !0;
            if (k9b.gJ2x(bMD8v)) C9t = window.setTimeout(function () {
                this.JW2x(null, null);
                bMD8v()
            }.f9e(this), 1e3)
        }
    }();
    b9i.bMB8t = function () {
        if (this.bMC8u) return !1;
        if (l9c.kn3x(this.Ns2x.value)) {
            this.JW2x("歌单名不能为空");
            return !1
        }
        return !0
    };
    b9i.fX2x = function () {
        return this.Ns2x.value
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), n9e = c9h("nm.l"),
        w9n = c9h("nm.w"), bD0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, L9C;
    n9e.bbL8D = NEJ.C();
    b9i = n9e.bbL8D.N9E(n9e.eo1x);
    L9C = n9e.bbL8D.cs0x;
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.H9y(this.o9f, "j-flag");
        this.bbM8E = {inputer: i9b[0], tipper: i9b[1]};
        this.iJ3x = {onerror: this.bMz8r.f9e(this), onitemadd: this.bMz8r.f9e(this)};
        this.lA4E = i9b[2];
        h9c.s9j(i9b[2], "click", this.FL0x.f9e(this));
        h9c.s9j(i9b[3], "click", this.Ca9R.f9e(this));
        h9c.s9j(this.o9f, "keypress", this.bMy8q.f9e(this))
    };
    b9i.ch0x = function () {
        this.cf0x = "m-wgt-create"
    };
    b9i.bl0x = function (e9f) {
        e9f.clazz = " m-layer-w2";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "新建歌单";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bn0x(e9f);
        this.bbM8E.inputer.value = e9f.name || "";
        this.vR7K = w9n.bbI8A.A9r(this.bbM8E);
        this.vR7K.cgb3x();
        this.S0x = q9h.if3x.A9r(this.iJ3x);
        setTimeout(function () {
            this.bbM8E.inputer.focus()
        }.f9e(this), 0)
    };
    b9i.bC0x = function () {
        this.bF0x();
        if (this.vR7K) {
            this.vR7K.T0x();
            delete this.vR7K
        }
        this.tf6Z(!1);
        this.bbM8E.inputer.value = ""
    };
    b9i.tf6Z = function (Nm2x) {
        this.oz5E = Nm2x;
        if (Nm2x) {
            this.lA4E.innerHTML = "<i>新建中...</i>";
            a8i.y9p(this.lA4E, "u-btn2-dis")
        } else {
            this.lA4E.innerHTML = "<i>新 建</i>";
            a8i.x9o(this.lA4E, "u-btn2-dis")
        }
    };
    b9i.FL0x = function () {
        if (this.oz5E || !this.vR7K.bMB8t()) return;
        var ct0x = {key: "playlist_new-" + GUser.userId, data: {name: this.vR7K.fX2x()}, offset: 1};
        this.S0x.jA3x(ct0x);
        this.tf6Z(!0)
    };
    b9i.bMz8r = function (d9g) {
        var bY0x = (d9g.result || bb0x).code;
        if (!bY0x) {
            this.z9q("onsuccess", d9g.data)
        } else {
            this.z9q("onerror", d9g)
        }
        this.bt0x()
    };
    b9i.Ca9R = function () {
        this.bt0x()
    };
    b9i.bMy8q = function (d9g) {
        if (d9g.keyCode == 13) this.FL0x()
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        I9z = c9h("nej.ut"), v9m = c9h("nej.j"), l9c = c9h("nm.x"), q9h = c9h("nm.d"), n9e = c9h("nm.l"), b9i, L9C;
    n9e.bko0x = NEJ.C();
    b9i = n9e.bko0x.N9E(n9e.eo1x);
    L9C = n9e.bko0x.cs0x;
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.H9y(this.o9f, "j-flag");
        this.iM3x = {
            limit: 301,
            parent: i9b[1],
            cache: {klass: q9h.if3x, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bkr0x.f9e(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l9c.Dw0x, escape: k9b.dG1x}
        };
        this.iJ3x = {onsuccess: this.bbP8H.f9e(this), onerror: this.dP1x.f9e(this)};
        h9c.s9j(i9b[0], "click", this.FL0x.f9e(this));
        h9c.s9j(i9b[1], "click", this.kC3x.f9e(this))
    };
    b9i.ch0x = function () {
        this.cf0x = "m-wgt-subscribe"
    };
    b9i.bl0x = function (e9f) {
        e9f.parent = e9f.parent || document.body;
        e9f.clazz = " m-layer-w2";
        e9f.title = "添加到歌单";
        e9f.draggable = !0;
        e9f.mask = !0;
        this.bn0x(e9f);
        this.bbQ8I = (e9f.tracks || []).reverse();
        this.iM3x.item.size = this.bbQ8I.length;
        this.iJ3x.name = e9f.name || "";
        this.bMx8p = q9h.xq8i.A9r({onaddsuccess: this.Bh9Y.f9e(this)});
        this.tP7I = q9h.if3x.A9r({onlistload: this.cfQ3x.f9e(this)});
        this.tP7I.bRw0x();
        k9b.bd0x(this.bbQ8I, function (p9g, r9i, i9b) {
            if (!k9b.lv4z(p9g)) {
                i9b[r9i] = this.bMx8p.eK2x(p9g) || p9g
            }
        }, this)
    };
    b9i.cfQ3x = function () {
        if (this.dK1x) this.dK1x.T0x();
        this.dK1x = I9z.kz3x.A9r(this.iM3x)
    };
    b9i.FL0x = function () {
        this.bt0x();
        if (this.Gf0x) this.Gf0x.T0x();
        this.Gf0x = n9e.bbL8D.A9r(this.iJ3x);
        this.Gf0x.J9A()
    };
    b9i.kC3x = function () {
        var cfP3x = function (g9d) {
            while (g9d && g9d != document) {
                if (g9d.tagName.toLowerCase() == "li") {
                    return g9d
                }
                g9d = g9d.parentNode
            }
        };
        return function (d9g) {
            h9c.cn0x(d9g);
            var F9w = h9c.W0x(d9g), yG8y = cfP3x(F9w);
            if (!!yG8y && !a8i.bE0x(yG8y, "dis")) {
                this.bbP8H({id: a8i.t9k(yG8y, "id")})
            }
        }
    }();
    b9i.bbP8H = function (d9g) {
        var C9t = d9g.id;
        if (!C9t || !this.bbQ8I.length) return;
        this.bMx8p.jA3x({key: "track_playlist-" + C9t, data: {tracks: this.bbQ8I, pid: C9t}});
        this.bt0x()
    };
    b9i.Bh9Y = function () {
        this.z9q("onsuccess");
        n9e.Z0x.J9A({tip: "收藏成功"})
    };
    b9i.dP1x = function (d9g) {
        this.bt0x();
        this.z9q("onerror", d9g);
        var cT0x = "收藏失败";
        switch (d9g.code) {
            case 405:
                cT0x = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cT0x = "歌单数量超过限制";
                break;
            case 502:
                cT0x = "歌曲已经存在"
        }
        n9e.Z0x.J9A({tip: cT0x, type: 2})
    };
    b9i.bkr0x = function () {
        this.bt0x();
        n9e.Z0x.J9A({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l9c.mP4T = function (e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n9e.bko0x.J9A(e9f)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, dw1x = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), k9b = c9h("nej.u"), l9c = c9h("nm.x");
    var bkN1x, oV5a, X0x = decodeURIComponent(location.href),
        jP3x = /.+(https?:\/\/.+\/proxy.html)/.test(X0x) ? RegExp.$1 : "";
    if (!!jP3x) {
        v9m.vo7h("mail_proxy_url", jP3x)
    } else {
        jP3x = v9m.tG6A("mail_proxy_url") || "about:blank"
    }
    bkN1x = a8i.bdX9O({
        src: jP3x, onload: function () {
            oV5a = true
        }
    });
    var bMw8o = function () {
        v9m.gz2x("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var cfN3x = function () {
        if (dw1x.dt1x.browser == "ie" && parseInt(dw1x.dt1x.version) < 9) {
            l9c.ft2x({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l9c.JS1x = function (u9l, C9t, U0x) {
        if (!cfN3x()) return;
        bMw8o();
        if (U0x == "stop") {
            if (!oV5a) throw"proxy not loaded";
            bMw8o();
            bkN1x.contentWindow.location.replace(jP3x + "#" + k9b.cD0x({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            bkN1x.contentWindow.location.replace(jP3x + "#" + k9b.cD0x({
                to: "ifrmMusic",
                message: JSON.stringify({type: u9l, id: C9t, s: +(new Date), action: U0x})
            }))
        }
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        k9b = c9h("nej.u"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), q9h = c9h("nm.d");
    var kL3x = q9h.hT2x.A9r();
    var oB5G = q9h.xq8i.A9r({onlistload: cfL3x, onitemload: cfK3x, onerror: dP1x});
    var Gp0x = q9h.rb5g.A9r({onlistload: cfJ3x, onitemload: cfI3x, onerror: dP1x});
    var bMv8n = {};

    function wE8w(d9g) {
        var g9d = h9c.W0x(d9g, "d:resAction"), U0x = a8i.t9k(g9d, "resAction");
        if (g9d && (U0x == "play" || U0x == "addto")) {
            var u9l = parseInt(a8i.t9k(g9d, "resType"));
            bMu8m({
                action: U0x,
                type: u9l,
                id: a8i.t9k(g9d, "resId"),
                from: a8i.t9k(g9d, "resFrom"),
                data: a8i.t9k(g9d, "resData"),
                order: a8i.t9k(g9d, "resOrder"),
                node: g9d
            });
            if (u9l != 13) bMt8l(g9d)
        }
    }

    function bMu8m(bR0x) {
        var U0x = bR0x.action, u9l = bR0x.type, C9t = bR0x.id, ee1x = bR0x.from, j9a = bR0x.data, uh7a = bR0x.order,
            e9f = {
                limit: 1e3,
                offset: 0,
                data: {id: C9t},
                ext: {id: C9t, action: U0x, type: u9l, from: ee1x, data: j9a, node: bR0x.node}
            };
        if (U0x != "play" && U0x != "addto" || !u9l) return;
        if (window.GRef && GRef == "mail") {
            l9c.JS1x(u9l, C9t, U0x);
            return
        }
        switch (u9l) {
            case 13:
                e9f.key = "track_playlist-" + C9t;
                oB5G.lR4V(e9f);
                break;
            case 17:
                e9f.key = "program";
                e9f.id = C9t;
                Gp0x.Wt6n(e9f);
                if (U0x == "play") {
                    v9m.bm0x("/api/dj/program/listen", {query: {id: C9t}})
                }
                break;
            case 18:
                e9f.key = "track";
                e9f.id = C9t;
                oB5G.Wt6n(e9f);
                break;
            case 19:
                e9f.key = "track_album-" + C9t;
                oB5G.lR4V(e9f);
                break;
            case 24:
                e9f.key = "track_day";
                oB5G.lR4V(e9f);
                break;
            case 2:
                e9f.key = "track_artist_top-" + C9t;
                oB5G.lR4V(e9f);
                break;
            case 70:
                e9f.key = "program_djradio-" + C9t + "-" + uh7a;
                e9f.data.radioId = C9t;
                e9f.data.asc = uh7a == 2;
                Gp0x.lR4V(e9f);
                break
        }
    }

    function bMs8k(i9b) {
        var m9d = [];
        k9b.bd0x(i9b, function (p9g) {
            if (p9g.mainSong) {
                p9g.mainSong.program = p9g;
                m9d.push(p9g.mainSong);
                p9g.localupdatetime = +(new Date);
                oB5G.cvy7r(p9g.mainSong);
                p9g.mainTrackId = p9g.mainSong.id;
                delete p9g.mainSong
            } else {
                var bMr8j = oB5G.eK2x(p9g.mainTrackId);
                bMr8j && m9d.push(bMr8j)
            }
        });
        return m9d
    }

    function bbW8O(i9b, e9f) {
        var rJ6D = e9f.action == "play" && e9f.type != 17 && e9f.type != 18, fW2x = e9f.action == "play";
        if (!i9b.length) return;
        if (e9f.type == 19) {
            i9b = l9c.MT2x(i9b, true, {play: true}, {source: "album", sourceid: e9f.id})
        } else {
            i9b = l9c.MT2x(i9b, true, {play: true})
        }
        k9b.bd0x(i9b, function (p9g) {
            p9g.source = l9c.bvh3x({fid: e9f.from, fdata: e9f.data, type: e9f.type, rid: e9f.id}, p9g.id)
        });
        top.player.addTo(i9b, rJ6D, fW2x);
        kL3x.Vm6g({rid: e9f.id, type: e9f.type, hash: l9c.Mp2x(), play: fW2x, source: e9f.from, sourceid: e9f.data})
    }

    function cfL3x(d9g) {
        var eA1x = d9g.ext || {};
        i9b = oB5G.hw2x(d9g.key);
        bbW8O(i9b, eA1x);
        if (eA1x.type == 13 && eA1x.action == "play" && i9b && i9b.length > 0) {
            bMt8l(eA1x.node);
            v9m.bm0x("/api/playlist/update/playcount", {query: {id: eA1x.id}})
        }
    }

    function cfK3x(d9g) {
        var i9b = [oB5G.eK2x(d9g.id)], bj0x = i9b[0], ro5t = l9c.pO5T(bj0x), ue7X = bj0x.privilege || {};
        if (ro5t == 10) {
            l9c.uq7j(ue7X.fee || bj0x.fee, bj0x.id, "song", null, ue7X)
        } else if (ro5t == 100) {
            l9c.is3x(null, null, null, true, bj0x)
        } else if (ro5t == 11) {
            l9c.bSr0x(bj0x.id, 18)
        } else {
            bbW8O(i9b, d9g.ext)
        }
    }

    function cfJ3x(d9g) {
        var i9b = bMs8k(Gp0x.hw2x(d9g.key));
        bbW8O(i9b, d9g.ext)
    }

    function cfI3x(d9g) {
        var i9b = bMs8k([Gp0x.eK2x(d9g.id)]);
        bbW8O(i9b, d9g.ext)
    }

    function dP1x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bMt8l(g9d) {
        var u9l = a8i.t9k(g9d, "resType"), C9t = a8i.t9k(g9d, "resId"), K9B = u9l + "-" + C9t;
        if (bMv8n[K9B]) return;
        var bMq8i = a8i.B9s("play-count"), blu1x = a8i.H9y(g9d.parentNode, "nb"), MW2x = null;
        if (bMq8i) {
            MW2x = bMq8i
        } else {
            MW2x = !!blu1x && !!blu1x[0] ? blu1x[0] : null
        }
        if (MW2x) {
            var cz0x = MW2x.innerHTML;
            if (/^\d+$/.test(cz0x)) {
                MW2x.innerText = +cz0x + 1
            }
            bMv8n[K9B] = true
        }
    }

    l9c.cfB3x = function (g9d) {
        h9c.s9j(g9d || document.body, "click", wE8w.f9e(this))
    };
    l9c.cfA3x = function (U0x, u9l, C9t) {
        bMu8m({action: U0x, type: u9l, id: C9t})
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        I9z = c9h("nej.ut"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, L9C;
    q9h.fo2x({
        "share-all": {
            url: "/api/share/friends/resource", format: function (m9d, e9f) {
                this.cfx3x(m9d, e9f)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (m9d, e9f) {
                this.z9q("onshareall", e9f.result)
            }, onerror: function (m9d, e9f) {
                this.z9q("onshareall", e9f.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (m9d, e9f) {
                e9f.options.picUrl = m9d.picUrl;
                this.bMn8f(e9f.options, e9f.result)
            }, onerror: function (m9d, e9f) {
                this.z9q("onshareall", e9f.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (Q9H, e9f) {
                this.pK5P("vid_info-" + e9f.data.nosKey, Q9H);
                return Q9H
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e9f) {
            }, format: function (m9d, e9f) {
                e9f.data = e9f.data2;
                this.cq0x("share-all", e9f)
            }, onerror: "onshareerror"
        }
    });
    q9h.blC1x = NEJ.C();
    b9i = q9h.blC1x.N9E(q9h.hG2x);
    b9i.cfv3x = function () {
        var vG7z = function (Q9H, e9f) {
            e9f.times++;
            if (e9f.times > 10) {
                this.z9q("onvinfoerror", e9f.key, Q9H)
            } else {
                setTimeout(ex1x.f9e(this, e9f), e9f.times * 1e3)
            }
        };
        var yW8O = function (Q9H, e9f) {
            this.z9q("onvinfo", e9f.key, Q9H)
        };
        var ex1x = function (e9f) {
            var X0x = e9f.url;
            v9m.bm0x(X0x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yW8O.ev1x(this, e9f),
                onerror: vG7z.ev1x(this, e9f)
            })
        };
        return function (e9f) {
            e9f.times = 0;
            ex1x.call(this, e9f)
        }
    }();
    b9i.cHp0x = function () {
        var GK1x;
        var vG7z = function (Q9H, e9f) {
            if (Q9H.code > 0) {
                clearInterval(this.GL1x);
                this.z9q("onviderror", e9f.data.nosKey)
            }
        };
        var yW8O = function (K9B, Q9H) {
            if (Q9H.vid && Q9H.covers) {
                clearInterval(this.GL1x);
                this.z9q("onvid", K9B, Q9H)
            }
        };
        var ex1x = function (e9f) {
            if (+(new Date) - GK1x > 60 * 60 * 1e3) {
                clearInterval(this.GL1x);
                this.z9q("onviderror", e9f.data.nosKey);
                return
            }
            e9f.onload = yW8O.f9e(this, e9f.data.nosKey);
            e9f.onerror = vG7z.f9e(this);
            this.cq0x("vid-get", e9f)
        };
        return function (e9f) {
            if (!e9f || !e9f.data) return;
            GK1x = +(new Date);
            this.GL1x = clearInterval(this.GL1x);
            this.GL1x = setInterval(ex1x.f9e(this, e9f), 1e4);
            ex1x.apply(this, arguments)
        }
    }();
    b9i.cft3x = function () {
        this.GL1x = clearInterval(this.GL1x)
    };
    b9i.cfx3x = function (m9d, on4r) {
        if (m9d.event && on4r.snsTypes) {
            if (on4r.pics) {
                var bMm8e = [];
                for (var i = 0, len = on4r.pics.length; i < len; i++) {
                    bMm8e[i] = on4r.pics[i].originId
                }
                this.cq0x("share_img_compound", {data: {picIds: bMm8e.join(",")}, options: on4r, result: m9d})
            } else {
                on4r.picUrl = on4r.picUrl;
                this.bMn8f(on4r, m9d)
            }
        } else {
            this.z9q("onshareall", m9d)
        }
        var us7l = q9h.hT2x.A9r();
        us7l.eS2x(on4r.isPub ? "pubevent" : "shareevent", {id: m9d.id})
    };
    b9i.bMn8f = function (on4r, m9d) {
        var ct0x = {}, d9g = m9d.event || {};
        ct0x.eventid = d9g.id;
        ct0x.eventtype = d9g.type;
        on4r.picUrl && (ct0x.picUrl = on4r.picUrl);
        ct0x.snsTypes = on4r.snsTypes;
        ct0x.msg = on4r.data.msg || "";
        ct0x.type = on4r.data.type;
        on4r.data.id && (ct0x.id = on4r.data.id);
        if (ct0x.eventtype == 41) {
            var Q9H = l9c.Ec0x(d9g.json);
            ct0x.eventtype = 39;
            if (ct0x.msg) {
                ct0x.msg += "  "
            }
            ct0x.msg += "分享" + Q9H.video.creator.nickname + "的视频《" + Q9H.video.title + "》";
            delete ct0x.id
        }
        this.cq0x("share-sns", {data: ct0x, result: m9d})
    };
    b9i.cfr3x = function (e9f) {
        var j9a = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k9b.nW4a(5)
        };
        j9a = NEJ.EX(j9a, e9f);
        if (j9a.id < 0) {
            delete j9a.id;
            j9a.type = "noresource"
        }
        if (!j9a.threadId) {
            delete j9a.threadId
        }
        if (!j9a.actId) {
            delete j9a.actId
        }
        if (!j9a.pics) {
            delete j9a.pics
        } else {
            j9a.pics = JSON.stringify(j9a.pics)
        }
        this.cq0x("share-all", {
            data: j9a,
            snsTypes: e9f.snsTypes,
            picUrl: e9f.picUrl,
            pics: e9f.pics,
            isPub: e9f.isPub
        })
    };
    b9i.cfq3x = function (e9f) {
        this.cq0x("share-private", e9f)
    };
    b9i.cfp3x = function (e9f) {
        this.cq0x("video-submit", e9f)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        q9h = c9h("nm.d"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), b9i, L9C;
    var cfo3x = {40: !0};
    q9h.fo2x({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e9f) {
                e9f.data.getcounts = true;
                e9f.data.pagesize = e9f.data.limit;
                if (e9f.data.offset == 0) {
                    e9f.data.lasttime = -1
                }
                delete e9f.data.offset
            }, format: function (Q9H, e9f) {
                Q9H.event = l9c.ZA7t(Q9H.event, function (p9g, r9i) {
                    return !cfo3x[p9g.type]
                });
                this.cfn3x(Q9H.event);
                e9f.data.lasttime = Q9H.lasttime;
                if (Q9H.event.length) {
                    Q9H.event.length = e9f.limit
                }
                return {list: Q9H.event, total: Q9H.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (Q9H, e9f) {
                return {list: Q9H.events, total: Q9H.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e9f) {
                e9f.data.pagesize = 20
            }, format: function (Q9H, e9f) {
                return Q9H.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e9f) {
                if (e9f.data.offset == 0) {
                    e9f.data.time = -1
                }
                delete e9f.data.offset;
                e9f.data.getcounts = true
            }, format: function (Q9H, e9f) {
                e9f.data.time = Q9H.lasttime;
                var i9b = Q9H.events;
                if (Q9H.more && i9b.length < e9f.data.limit) {
                    i9b = this.JO1x(i9b, e9f.data.limit)
                }
                return {list: i9b, total: Q9H.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (m9d, e9f) {
                m9d.conf = e9f.conf;
                return m9d
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e9f, bg0x) {
                if (e9f.like) {
                    if (e9f.comment) {
                        bg0x.url = "/api/v1/comment/like"
                    } else {
                        bg0x.url = "/api/resource/like"
                    }
                    bg0x.onload = "oneventlike";
                    bg0x.onerror = "oneventlikeerr"
                } else {
                    if (e9f.comment) {
                        bg0x.url = "/api/v1/comment/unlike"
                    } else {
                        bg0x.url = "/api/resource/unlike"
                    }
                    bg0x.onload = "oneventunlike";
                    bg0x.onerror = "oneventunlikeerr"
                }
            }, format: function (m9d, e9f) {
                m9d.eid = e9f.eid;
                m9d.origin = e9f.origin;
                m9d.ext = e9f.ext;
                return m9d
            }, onmessage: function (bY0x, m9d) {
                if (bY0x == 250) {
                    n9e.Z0x.J9A({tip: m9d.message || m9d.msg || "点赞异常", type: 2});
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e9f, bg0x) {
                if (e9f.data.type == "nointer") {
                    bg0x.url = "/api/event/rcmd/reject"
                } else if (e9f.data.transcoding) {
                    bg0x.url = "/api/event/video/transcoding/delete"
                } else {
                    bg0x.url = "/api/event/delete"
                }
            }, format: function (m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e9f) {
                e9f.data.lasttime = e9f.data.lasttime || -1;
                e9f.data.pagesize = e9f.data.limit;
                e9f.data.getcounts = true;
                delete e9f.data.offset
            }, format: function (Q9H, e9f) {
                e9f.data.lasttime = Q9H.lasttime;
                var i9b = Q9H.events;
                if (Q9H.more) i9b = this.JO1x(i9b, e9f.data.pagesize);
                return {list: i9b, total: Q9H.size}
            }, onerror: "onlisterror"
        }
    });
    q9h.zd8V = NEJ.C();
    b9i = q9h.zd8V.N9E(q9h.hG2x);
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.blY1x = function (u9l, cU0x) {
        return u9l + "-" + cU0x
    };
    b9i.cHq0x = function (e9f) {
        this.cq0x("ievent-get", e9f)
    };
    b9i.cHr0x = function (e9f) {
        this.cq0x("ievent-new-get", e9f)
    };
    b9i.cHs0x = function (e9f) {
        this.cq0x("ievent-user-get", e9f)
    };
    b9i.cHt0x = function (u9l, cU0x) {
        return this.ss6m(this.blY1x(u9l, cU0x))
    };
    b9i.cHv0x = function (JM1x, e9f) {
        if (!JM1x || !JM1x.length) return;
        e9f = e9f || {};
        var bz0x = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, EA0x = [], bMj8b = [], j9a; i < JM1x.length; ++i) {
            j9a = JM1x[i];
            j9a = this.ss6m(this.blY1x(j9a.type, j9a.id));
            if (!j9a) {
                EA0x.push(JM1x[i].id);
                bMj8b.push(bz0x[JM1x[i].type] || 0)
            }
        }
        if (!EA0x.length) {
            this.z9q("oneventresload", e9f.conf);
            return
        }
        e9f.data = {ids: JSON.stringify(EA0x), types: JSON.stringify(bMj8b)};
        e9f.onload = this.cfg3x.f9e(this);
        this.cq0x("ievent-res-get", e9f)
    };
    b9i.cfg3x = function (m9d) {
        if (m9d.code != 200) {
            this.z9q("oneventreserror", m9d.code);
            return
        }
        var bz0x = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i9b = m9d.results; i < i9b.length; ++i) {
            this.pK5P(this.blY1x(bz0x[i9b[i].type], i9b[i].id), i9b[i])
        }
        this.z9q("oneventresload", m9d.conf)
    };
    b9i.bMi8a = function (j9a) {
        var K9B = "event-list";
        this.bqX2x(K9B, j9a);
        this.z9q("onitemadd", {key: K9B, action: "add", data: j9a, flag: -1})
    };
    b9i.oT5Y = function (e9f) {
        this.cq0x("ievent-like", e9f)
    };
    b9i.mt4x = function (e9f) {
        this.cq0x("ievent-delete", e9f)
    };
    b9i.JO1x = function (i9b, fZ2x) {
        for (var i = i9b.length; i < fZ2x; i++) i9b.push(null);
        return i9b
    };
    b9i.cfn3x = function (i9b) {
        var m9d = [];
        if (!i9b || !i9b.length) return;
        k9b.bd0x(i9b, function (d9g) {
            d9g.biData = this.bMh8Z(d9g)
        }, this)
    };
    b9i.bMh8Z = function () {
        var Zw7p = {32: "comment", 33: "activity", 34: "recomment_artist"},
            cfd3x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d9g) {
            var Q9H = {
                id: d9g.id,
                sourceid: d9g.user.userId,
                alg: d9g.rcmdInfo ? d9g.rcmdInfo.alg : null,
                contentType: Zw7p[d9g.type] || (k9b.dj1x(cfd3x, d9g.type) != -1 ? "user_event" : "other")
            };
            return Q9H
        }
    }();
    b9i.Hb1x = function (cfb3x, d9g) {
        var Q9H = this.bMh8Z(d9g);
        Q9H.actionType = cfb3x;
        if (window.log) log("eventclick", Q9H)
    };
    b9i.cKi1x = function (e9f) {
        this.cq0x("event_latest-list", e9f)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
        return a + b & 4294967295
    }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
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
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray,
                    sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
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

    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.su6o += contents;
        this.bq0x += contents.length;
        var length = this.su6o.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR1x, md5blk(this.su6o.substring(i - 64, i)))
        }
        this.su6o = this.su6o.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.su6o, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oG5L(tail, length);
        ret = hex(this.dR1x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.su6o = "";
        this.bq0x = 0;
        this.dR1x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.su6o, length: this.bq0x, hash: this.dR1x}
    };
    SparkMD5.prototype.setState = function (state) {
        this.su6o = state.buff;
        this.bq0x = state.length;
        this.dR1x = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dR1x;
        delete this.su6o;
        delete this.bq0x
    };
    SparkMD5.prototype.oG5L = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR1x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq0x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR1x, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.su6o.buffer, arr, true), length = buff.length, i;
        this.bq0x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR1x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.su6o = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.su6o, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oG5L(tail, length);
        ret = hex(this.dR1x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.su6o = new Uint8Array(0);
        this.bq0x = 0;
        this.dR1x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oG5L = SparkMD5.prototype.oG5L;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        en1x = c9h("nej.g"), k9b = c9h("nej.u"), fL2x = c9h("nej.n"), I9z = c9h("nej.ut"), l9c = c9h("nm.x"),
        q9h = c9h("nm.d"), iG3x = c9h("nm.x.nos"), w9n = c9h("nm.w");
    var ceX3x = 1024 * 256, ceW3x = 1024 * 1024 * 2, rk5p = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bMc8U = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br0x,
        rj5o = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        jE3x = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var om4q = {};
    var us7l = q9h.hT2x.A9r();
    iG3x.cHB0x = function () {
        return jE3x
    };
    var ceQ3x = function () {
        return k9b.nW4a(6) + +(new Date)
    };
    var JG1x = function (iH3x, e9f) {
        if (!om4q[e9f.taskId]) {
            return
        }
        (e9f.onuploading || br0x).call(this, iH3x)
    };
    var bmK1x = function (R9I) {
        var ceP3x = R9I.md5, cW1x = R9I.file, ceO3x = ceP3x + cW1x.size;
        return "nos_file_hash_" + ceO3x
    };
    var ceN3x = function (R9I) {
        var K9B = bmK1x(R9I), j9a = v9m.bTj0x(K9B, "{}");
        try {
            j9a = JSON.parse(j9a)
        } catch (e) {
            j9a = {}
        }
        return j9a
    };
    var ceM3x = function (R9I, e9f) {
        if (!R9I.md5) {
            return
        }
        var K9B = bmK1x(R9I), j9a = v9m.bTj0x(K9B, "{}");
        try {
            j9a = JSON.parse(j9a)
        } catch (e) {
            j9a = {}
        }
        NEJ.X(j9a, e9f);
        v9m.vo7h(K9B, JSON.stringify(j9a))
    };
    var ceI3x = function (R9I) {
        var K9B = bmK1x(R9I);
        v9m.Mn2x(K9B)
    };
    var ceF3x = function (R9I, eN2x) {
        var X0x = R9I.urls[Math.min(R9I.urlIndex, R9I.urls.length - 1)], cW1x = R9I.file, lt4x = R9I.bucket,
            mL4P = R9I.objectKey, cG0x = R9I.token, bJ0x = R9I.context, oX5c = {},
            Uf6Z = bMc8U.call(cW1x, R9I.beg, R9I.end),
            bv0x = {offset: R9I.beg, complete: R9I.lastChunk || false, version: "1.0"};
        if (bJ0x) {
            bv0x.context = bJ0x
        }
        oX5c["x-nos-token"] = cG0x;
        oX5c[en1x.zU9L] = cW1x.type;
        R9I.reqId = v9m.bm0x(X0x + "/" + lt4x + "/" + mL4P, {
            type: "json",
            method: "POST",
            headers: oX5c,
            query: bv0x,
            data: Uf6Z,
            onload: eN2x.onload,
            onerror: eN2x.onerror
        })
    };
    var ceE3x = function (m9d, R9I, e9f) {
        m9d = {
            code: 200,
            fileName: e9f.file.name,
            size: e9f.file.size,
            type: e9f.file.type,
            bucket: R9I.bucket,
            docId: R9I.docId,
            objectKey: R9I.objectKey,
            url: "//nos.netease.com/" + R9I.bucket + "/" + R9I.objectKey
        };
        ceI3x(R9I);
        if (!om4q[e9f.taskId]) {
            return
        }
        delete om4q[e9f.taskId];
        us7l.eS2x("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(m9d)});
        (e9f.onsuccess || br0x).call(this, m9d)
    };
    var ceC3x = function (m9d, e9f) {
        (e9f.onerror || br0x).call(this, m9d)
    };
    var cey3x = function (m9d, R9I, e9f) {
        R9I.context = m9d.context;
        R9I.beg = m9d.offset;
        var iH3x = R9I.beg / R9I.file.size;
        ceM3x(R9I, {
            bucket: R9I.bucket,
            objectKey: R9I.objectKey,
            token: R9I.token,
            context: R9I.context,
            beg: R9I.beg,
            updateTime: +(new Date)
        });
        iH3x = rj5o.DNS_GET + (rj5o.UPLOADED - rj5o.DNS_GET) * iH3x;
        JG1x(iH3x, e9f);
        if (R9I.lastChunk) {
            ceE3x(m9d, R9I, e9f)
        } else {
            bcm8e(R9I, e9f)
        }
    };
    var cew3x = function (m9d, R9I, e9f) {
        us7l.eS2x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m9d.data,
            body: m9d.extData,
            ext: JSON.stringify(R9I),
            timging: +(new Date) - R9I.chuckUploadStartTime
        });
        if (R9I.urlIndex < Math.max(R9I.urls.length - 1, 5)) {
            R9I.urlIndex++;
            bcm8e(R9I, e9f)
        } else {
            ceC3x(m9d, e9f)
        }
    };
    var bcm8e = function (R9I, e9f) {
        if (!R9I || R9I.step == -1) {
            return
        }
        R9I.end = R9I.beg + ceX3x;
        if (R9I.end >= R9I.file.size) {
            R9I.end = R9I.file.size;
            R9I.lastChunk = true
        }
        R9I.chuckUploadStartTime = +(new Date);
        ceF3x(R9I, {onload: cey3x.ev1x(this, R9I, e9f), onerror: cew3x.ev1x(this, R9I, e9f)})
    };
    var ces3x = function (m9d, R9I, e9f) {
        R9I.beg = m9d.offset;
        var iH3x = R9I.beg / R9I.file.size;
        iH3x = rj5o.DNS_GET + (rj5o.UPLOADED - rj5o.DNS_GET) * iH3x;
        JG1x(iH3x, e9f);
        bcm8e(R9I, e9f)
    };
    var ceo3x = function (m9d, R9I, e9f) {
        R9I.beg = 0;
        delete R9I.context;
        bnq1x(R9I, e9f)
    };
    var bLT8L = function (TS5X, R9I, e9f) {
        R9I.lastChunk = false;
        R9I.urls = TS5X;
        R9I.urlIndex = 0;
        JG1x(rj5o.DNS_GET, e9f);
        if (R9I.fromExist) {
            delete R9I.fromExist;
            var X0x = R9I.urls[Math.min(R9I.urlIndex, R9I.urls.length - 1)], lt4x = R9I.bucket, mL4P = R9I.objectKey,
                cG0x = R9I.token, bJ0x = R9I.context, oX5c = {}, bv0x = {context: bJ0x, version: "1.0"};
            oX5c["x-nos-token"] = cG0x;
            R9I.reqId = v9m.bm0x(X0x + "/" + lt4x + "/" + mL4P + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: oX5c,
                query: bv0x,
                onload: ces3x.ev1x(this, R9I, e9f),
                onerror: ceo3x.ev1x(this, R9I, e9f)
            })
        } else {
            R9I.beg = 0;
            bcm8e(R9I, e9f)
        }
    };
    var cem3x = function (m9d, R9I, e9f) {
        m9d.code = rk5p.DNS_ERROR;
        (e9f.onerror || br0x).call(this, m9d)
    };
    var bLS8K = function (j9a, e9f) {
        var m9d = j9a.result || {}, lt4x = m9d.bucket, mL4P = m9d.objectKey, cG0x = m9d.token, R9I = om4q[e9f.taskId];
        if (!lt4x || !mL4P || !cG0x || !R9I) {
            m9d.code = rk5p.TOKEN_ERROR;
            (e9f.onerror || br0x).call(this, m9d);
            return
        }
        R9I.bucket = lt4x;
        R9I.objectKey = mL4P;
        R9I.docId = m9d.docId;
        R9I.token = cG0x;
        JG1x(rj5o.TOKEN_GET, e9f);
        if (location.protocol == "https:") {
            bLT8L(["//nosup-hz1.127.net"], R9I, e9f)
        } else {
            R9I.reqId = iG3x.cei3x({
                bucket: lt4x,
                onload: bLT8L.ev1x(this, R9I, e9f),
                onerror: cem3x.ev1x(this, R9I, e9f)
            })
        }
        R9I.step = 1
    };
    var ceg3x = function (m9d, e9f) {
        m9d.code = rk5p.TOKEN_ERROR;
        (e9f.onerror || br0x).call(this, m9d)
    };
    var bnq1x = function (R9I, e9f) {
        var cW1x = e9f.file, eQ2x = cW1x.name || "", eA1x = eQ2x.split(".").pop();
        iG3x.bcs8k(NEJ.X({
            filename: eQ2x,
            ext: eA1x,
            onload: bLS8K.ev1x(this, e9f),
            onerror: ceg3x.ev1x(this, e9f)
        }, e9f, function (p9g) {
            return k9b.gJ2x(p9g) || k9b.lv4z(p9g)
        }))
    };
    var cef3x = function (R9I, e9f) {
        if (!R9I || R9I.step == -1) {
            return
        }
        R9I.md5 = R9I.spark.end();
        var Jy1x = ceN3x(R9I) || {}, lt4x = Jy1x.bucket, mL4P = Jy1x.objectKey, cG0x = Jy1x.token;
        if (!lt4x || !mL4P || !cG0x) {
            bnq1x(R9I, e9f)
        } else {
            R9I.context = Jy1x.context;
            R9I.beg = Jy1x.beg;
            R9I.fromExist = true;
            bLS8K({result: Jy1x}, e9f)
        }
    };
    var cec3x = function (Ia1x, R9I, e9f) {
        if (!R9I || R9I.step == -1) {
            return
        }
        R9I.beg = R9I.end;
        var iH3x = R9I.beg / R9I.file.size;
        iH3x = 0 + rj5o.MD5_DONE * iH3x;
        JG1x(iH3x, e9f);
        R9I.spark.append(Ia1x.result);
        if (R9I.lastChunk) {
            cef3x(R9I, e9f)
        } else {
            bLR8J(R9I, e9f)
        }
    };
    var cdX3x = function (m9d, R9I, e9f) {
        R9I.md5 = "";
        bnq1x(R9I, e9f)
    };
    var bLR8J = function (R9I, e9f) {
        if (!R9I || R9I.step == -1) {
            return
        }
        R9I.end = R9I.beg + ceW3x;
        if (R9I.end >= R9I.file.size) {
            R9I.end = R9I.file.size;
            R9I.lastChunk = true
        }
        var Ia1x = new FileReader;
        Ia1x.onload = cec3x.f9e(this, Ia1x, R9I, e9f);
        Ia1x.onerror = cdX3x.f9e(this, Ia1x, R9I, e9f);
        Ia1x.readAsArrayBuffer(bMc8U.call(R9I.file, R9I.beg, R9I.end))
    };
    iG3x.hV2x = function (e9f) {
        var cW1x = e9f.file, eQ2x = cW1x.name || "", eA1x = eQ2x.split(".").pop(), Id1x = ceQ3x();
        e9f.taskId = Id1x;
        om4q[Id1x] = {step: 0};
        JG1x(0, e9f);
        var R9I = om4q[Id1x];
        R9I.id = Id1x;
        R9I.file = cW1x;
        R9I.beg = 0;
        R9I.lastChunk = false;
        R9I.spark = new SparkMD5.ArrayBuffer;
        var cdU3x = e9f.onerror || br0x;
        e9f.onerror = function () {
            if (!om4q[Id1x]) {
                return
            }
            delete om4q[Id1x];
            cdU3x.apply(this, arguments)
        };
        us7l.eS2x("sysaction", {type: "nosuploadstart", location: location.href});
        bLR8J(R9I, e9f);
        return Id1x
    };
    iG3x.kl3x = function (C9t) {
        var R9I = om4q[C9t];
        if (R9I) {
            if (R9I.step == 0) {
                delete om4q[C9t]
            } else {
                R9I.step = -1;
                if (R9I.reqId) {
                    v9m.kl3x(R9I.reqId)
                }
                delete om4q[C9t]
            }
        }
    };
    iG3x.bcs8k = function () {
        var ze8W = function (m9d, e9f) {
            (e9f.onload || br0x).call(this, m9d)
        };
        var AZ9Q = function (m9d, e9f) {
            (e9f.onerror || br0x).call(this, m9d)
        };
        var bLN7G = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e9f) {
            var bcx8p = e9f.returnBody || bLN7G;
            if (k9b.lv4z(bcx8p)) {
                try {
                    JSON.stringify(bcx8p)
                } catch (e) {
                    bcx8p = bLN7G
                }
            }
            return v9m.bm0x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e9f.filename || "",
                    ext: e9f.ext || "",
                    type: e9f.type || jE3x.OTHER,
                    bucket: e9f.bucket || "",
                    local: e9f.local || false,
                    nos_product: e9f.nosProduct || 0,
                    return_body: bcx8p
                },
                onload: ze8W.ev1x(this, e9f),
                onerror: AZ9Q.ev1x(this, e9f)
            })
        }
    }();
    iG3x.cei3x = function () {
        var cdS3x = "//wanproxy.127.net/lbs";
        var ze8W = function (m9d, e9f) {
            if (m9d.lbs) {
            }
            var TS5X = m9d.upload;
            if (!TS5X || !TS5X.length) {
                AZ9Q(m9d, e9f)
            }
            (e9f.onload || br0x).call(this, TS5X)
        };
        var AZ9Q = function (m9d, e9f) {
            (e9f.onerror || br0x).call(this, m9d)
        };
        return function (e9f) {
            var lt4x = e9f.bucket;
            return v9m.bm0x(cdS3x, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: lt4x},
                onload: ze8W.ev1x(this, e9f),
                onerror: AZ9Q.ev1x(this, e9f)
            })
        }
    }();
    iG3x.bcy8q = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        cb0x = c9h("nej.ut"), bD0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), iG3x = c9h("nm.x.nos"),
        E9v = c9h("nm.m"), n9e = c9h("nm.l"), w9n = c9h("nm.w"), b9i, L9C;
    var gg2x = a8i.jj3x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w9n.Jw1x = NEJ.C();
    b9i = w9n.Jw1x.N9E(bD0x.el1x);
    b9i.ch0x = function () {
        this.cf0x = gg2x
    };
    b9i.bW0x = function () {
        this.ci0x();
        this.bI0x = this.o9f;
        this.hF2x = a8i.H9y(this.o9f, "j-file")[0];
        h9c.s9j(this.hF2x, "change", this.pv5A.f9e(this))
    };
    b9i.bl0x = function (e9f) {
        e9f = e9f || {};
        this.bn0x(e9f);
        this.hF2x.id = e9f.inputId || "";
        this.hF2x.accept = e9f.accept || "*";
        this.xs8k = e9f
    };
    b9i.bcH8z = function () {
        return a8i.lD4H(this.hF2x)
    };
    b9i.pv5A = function (d9g) {
        if (this.hF2x.value == "") return;
        var kQ3x = this.hF2x.value.split("\\"), eQ2x = kQ3x.length > 0 ? kQ3x[kQ3x.length - 1] : kQ3x[0],
            oU5Z = (this.hF2x.files || [{}])[0];
        var cm0x = {files: this.hF2x.files, filename: eQ2x, size: oU5Z.size, cancelUpload: false};
        this.z9q("onchange", cm0x);
        if (cm0x.cancelUpload) {
            this.hF2x.value = "";
            return
        }
        if (cm0x.stopped) {
            return
        }
        this.Tj5o()
    };
    b9i.Tj5o = function () {
        if (this.hF2x.value == "") return;
        var kQ3x = this.hF2x.value.split("\\"), eQ2x = kQ3x.length > 0 ? kQ3x[kQ3x.length - 1] : kQ3x[0],
            eA1x = (eQ2x.split(".") || []).pop(), oU5Z = (this.hF2x.files || [{}])[0],
            DO0x = (oU5Z.type || "").split("/").shift();
        if (oU5Z.size > 100 * 1024 * 1024) {
            return this.lZ4d("onerror", {code: -200})
        }
        this.z9q("onuploading", 0);
        this.bLM7F = iG3x.bcs8k(NEJ.X({
            onload: this.Tc5h.ev1x(this, eQ2x),
            onerror: this.lZ4d.f9e(this)
        }, this.xs8k, function (p9g) {
            return k9b.gJ2x(p9g) || k9b.lv4z(p9g)
        }))
    };
    b9i.Tc5h = function (bN0x, eQ2x) {
        var m9d = bN0x.result || {}, lt4x = m9d.bucket, mL4P = m9d.objectKey, cG0x = m9d.token;
        if (!lt4x || !mL4P || !cG0x) {
            bN0x.code = -100;
            this.lZ4d.call(this, bN0x);
            return
        }
        var oU5Z = (this.hF2x.files || [{}])[0];
        var hK2x = a8i.dk1x(this.bI0x);
        hK2x[0].value = mL4P;
        hK2x[1].value = cG0x;
        hK2x[2].value = "json";
        if (oU5Z.type && oU5Z.type.indexOf("audio") == 0) {
            hK2x[3].value = "audio/mpeg"
        } else {
            hK2x[3].value = oU5Z.type || ""
        }
        this.bI0x.action = "//nos.netease.com/" + lt4x;
        this.DS0x = m9d;
        this.qU5Z = eQ2x;
        this.z9q("onuploading", .2);
        this.hV2x()
    };
    b9i.hV2x = function () {
        this.bLM7F = v9m.hV2x(this.bI0x, {
            type: "json",
            onload: this.uK7D.f9e(this),
            onerror: this.lZ4d.f9e(this),
            onuploading: this.bcN9E.f9e(this)
        })
    };
    b9i.kl3x = function () {
        v9m.kl3x(this.bLM7F);
        this.bI0x.reset()
    };
    b9i.uK7D = function (bN0x) {
        var cG0x = this.DS0x, eQ2x = this.qU5Z, oU5Z = (this.hF2x.files || [{}])[0], kh3x = {
            code: 200,
            fileName: eQ2x,
            size: oU5Z.size,
            bucket: cG0x.bucket,
            docId: cG0x.docId,
            objectKey: cG0x.objectKey,
            url: "//nos.netease.com/" + cG0x.bucket + "/" + cG0x.objectKey
        };
        if (!bN0x) {
            bN0x = kh3x
        }
        if (!bN0x.code || bN0x.code == 200) {
            this.z9q("onsuccess", NEJ.X(kh3x, bN0x))
        } else {
            this.z9q("onerror", bN0x)
        }
        this.bI0x.reset()
    };
    b9i.lZ4d = function (bN0x) {
        this.z9q("onerror", bN0x);
        this.bI0x.reset()
    };
    b9i.bcN9E = function (iH3x) {
        this.z9q("onuploading", .2 + iH3x.loaded / iH3x.total * .8)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        cb0x = c9h("nej.ut"), bD0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), iG3x = c9h("nm.x.nos"),
        E9v = c9h("nm.m"), n9e = c9h("nm.l"), w9n = c9h("nm.w"), b9i, L9C;
    w9n.SK5P = NEJ.C();
    b9i = w9n.SK5P.N9E(cb0x.cK0x);
    b9i.bl0x = function (e9f) {
        e9f = e9f || {};
        this.bn0x(e9f);
        this.bcP9G = w9n.Jw1x.A9r(NEJ.X({
            parent: e9f.parent,
            onchange: this.pv5A.f9e(this),
            onuploading: this.z9q.f9e(this, "onuploading"),
            onsuccess: this.z9q.f9e(this, "onsuccess"),
            onerror: this.z9q.f9e(this, "onerror")
        }, e9f, function (p9g) {
            return k9b.gJ2x(p9g) || k9b.lv4z(p9g)
        }));
        if (e9f.multiple && iG3x.bcy8q()) {
            a8i.gO2x(this.bcP9G.bcH8z(), "multiple", true)
        }
        this.xs8k = e9f
    };
    b9i.pv5A = function (e9f) {
        var eQ2x = e9f.filename, eA1x = (eQ2x.split(".") || []).pop();
        this.bLJ7C = (e9f.files || [{}])[0];
        this.z9q("onchange", e9f);
        if (iG3x.bcy8q() && !e9f.stopped && !e9f.cancelUpload) {
            this.Tj5o(true);
            e9f.stopped = true
        }
    };
    b9i.bcH8z = function () {
        return this.bcP9G.bcH8z()
    };
    b9i.cdM3x = function () {
        return this.bLJ7C
    };
    b9i.Tj5o = function (eZ2x, cW1x) {
        cW1x = cW1x || this.bLJ7C;
        if (iG3x.bcy8q()) {
            this.bLI7B = iG3x.hV2x(NEJ.X({
                file: cW1x,
                local: this.xs8k.bucket && this.xs8k.bucket.length,
                onuploading: this.z9q.f9e(this, "onuploading"),
                onsuccess: this.z9q.f9e(this, "onsuccess"),
                onerror: this.z9q.f9e(this, "onerror")
            }, this.xs8k, function (p9g) {
                return k9b.gJ2x(p9g) || k9b.lv4z(p9g)
            }));
            return this.bLI7B
        } else if (!eZ2x) {
            this.bcP9G.Tj5o()
        }
    };
    b9i.kl3x = function (C9t) {
        C9t = C9t || this.bLI7B;
        if (C9t) {
            iG3x.kl3x(C9t)
        }
        this.bcP9G.kl3x()
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), en1x = c9h("nej.g"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), fL2x = c9h("nej.n"), I9z = c9h("nej.ut"), bc0x = c9h("nej.ui"), w9n = c9h("nm.w"),
        n9e = c9h("nm.l"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), M9D = c9h("nm.x.f"), iG3x = c9h("nm.x.nos"), b9i, L9C,
        bpb2x = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, bpc2x = 5 * 1024 * 1024, cHC0x = 80,
        bcS9J = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w9n.bLG7z = NEJ.C();
    b9i = w9n.bLG7z.N9E(I9z.wd7W);
    b9i.bnR1x = function () {
        return {x: this.Bx9o.clientWidth - this.o9f.offsetWidth, y: this.Bx9o.clientHeight - this.o9f.offsetHeight}
    };
    w9n.bpg2x = NEJ.C();
    b9i = w9n.bpg2x.N9E(bc0x.el1x);
    b9i.ch0x = function () {
        this.cf0x = "m-xwgt-share-upload"
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.H9y(this.o9f, "j-flag");
        this.bcU9L = i9b.shift();
        this.Jm1x = i9b.shift();
        this.RO5T = i9b.shift();
        this.bLF7y = {
            onchange: this.bLE7x.ev1x(this, 0),
            onerror: this.dP1x.f9e(this),
            onsuccess: this.sK6E.f9e(this),
            multiple: true,
            parent: this.Jm1x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bpE2x = {
            onchange: this.bLE7x.ev1x(this, 1),
            onerror: this.dP1x.f9e(this),
            onsuccess: this.sK6E.f9e(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cdF3x = w9n.SK5P.A9r(this.bLF7y)
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.bpE2x.parent = e9f.button;
        this.Jl1x && this.Jl1x.T0x();
        this.Jl1x = w9n.SK5P.A9r(this.bpE2x);
        this.o9f.style.display = "none";
        if (!!this.fc2x) {
            for (var i = this.fc2x.length - 1; i >= 0; i--) {
                a8i.cM0x(this.fc2x[i].element, false);
                if (this.fc2x[i].dragger) this.fc2x[i].dragger.T0x()
            }
        }
        this.fc2x = [];
        if (this.BZ9Q) {
            clearTimeout(this.BZ9Q)
        }
        this.bcV9M(0);
        this.RF5K = 0;
        this.bX0x([[this.bLF7y.parent, "click", this.bLD7w.f9e(this)], [this.bpE2x.parent, "click", this.bLD7w.f9e(this)]])
    };
    b9i.bC0x = function () {
        h9c.hi2x(this.sO6I, "click");
        if (!!this.fc2x) {
            for (var i = this.fc2x.length - 1; i >= 0; i--) {
                a8i.cM0x(this.fc2x[i].element, false);
                if (this.fc2x[i].dragger) this.fc2x[i].dragger.T0x()
            }
        }
        this.fc2x = [];
        if (this.BZ9Q) {
            clearTimeout(this.BZ9Q)
        }
        this.BZ9Q = 0;
        this.Jl1x && this.Jl1x.T0x();
        delete this.Jl1x;
        this.bF0x()
    };
    b9i.bLD7w = function (d9g) {
        if (!iG3x.bcy8q() && this.fc2x.doing) {
            h9c.bh0x(d9g)
        }
    };
    b9i.bLE7x = function (e9f, r9i) {
        var nu4y = e9f.files, gY2x;
        e9f.stopped = true;
        if (!nu4y) {
            if (e9f.filename) {
                nu4y = [{name: e9f.filename, isIE: true}]
            }
        }
        for (var i = 0, len = nu4y.length; i < len; i++) {
            if (!bcS9J.test(nu4y[i].name)) {
                this.bpX2x({path: nu4y[i].name, index: r9i, status: -4, fail: "这不是<br>图片"})
            } else if (nu4y[i].size > bpc2x) {
                this.bpY2x(-3);
                this.bpX2x({path: nu4y[i].name, index: r9i, status: -3, fail: "上传<br>失败"})
            } else {
                this.bpX2x({path: nu4y[i].name, file: nu4y[i], index: r9i, status: 0})
            }
        }
    };
    b9i.bpX2x = function (sQ6K) {
        if (this.fc2x.length >= 9) {
            this.bpY2x(-10, 3e3, this.bLC7v.f9e(this));
            return
        }
        this.cdC3x(sQ6K);
        this.fc2x.push(sQ6K);
        if (!!this.fc2x.length) {
            this.o9f.style.display = ""
        }
        if (this.fc2x.length >= 9) {
            this.Jm1x.style.display = "none"
        } else {
            this.Jm1x.style.display = ""
        }
        this.Jj1x()
    };
    b9i.Jj1x = function () {
        var bqh2x = -1, bLB7u = 0;
        for (var i = 0, l = this.fc2x.length; i < l; i++) {
            if (this.fc2x[i].status == 1) {
                return
            }
            if (this.fc2x[i].status == 0 && bqh2x < 0) {
                bqh2x = i
            }
            if (this.fc2x[i].status == 2 || this.fc2x[i].status < 0) {
                bLB7u++
            }
        }
        var p9g = this.fc2x[bqh2x];
        if (p9g) {
            (p9g.index == 0 ? this.cdF3x : this.Jl1x).Tj5o(false, p9g.file);
            p9g.status = 1;
            this.fc2x.doing = p9g;
            this.z9q("onstartupload", {})
        } else if (bLB7u == this.fc2x.length) {
            this.z9q("onfinishupload", {})
        }
    };
    b9i.bqm2x = function () {
        return this.fc2x.doing || {}
    };
    b9i.dP1x = function (d9g) {
        var sQ6K = this.bqm2x();
        sQ6K.status = -4;
        sQ6K.fail = "上传<br>失败";
        this.bLy7r(sQ6K);
        this.fc2x.doing = null;
        this.Jj1x()
    };
    b9i.sK6E = function (d9g) {
        var sQ6K = this.bqm2x(), dQ1x = d9g.fileName.match(bcS9J);
        sQ6K.picUrl = d9g.url;
        v9m.bm0x("/upload/event/img/v1", {
            query: {imgid: d9g.docId, format: dQ1x[1]},
            type: "json",
            onload: this.bLx7q.f9e(this),
            onerror: this.bLx7q.f9e(this)
        })
    };
    b9i.bLx7q = function (d9g) {
        if (d9g && d9g.code == 200 && d9g.picInfo) {
            var sQ6K = this.bqm2x();
            sQ6K.status = 2;
            var bx0x = NEJ.X({}, d9g.picInfo);
            bx0x.originId = bx0x.originIdStr;
            bx0x.squareId = bx0x.squareIdStr;
            bx0x.rectangleId = bx0x.rectangleIdStr;
            bx0x.pcSquareId = bx0x.pcSquareIdStr;
            bx0x.pcRectangleId = bx0x.pcRectangleIdStr;
            bx0x.originJpgId = bx0x.originJpgIdStr || bx0x.originJpgId;
            sQ6K.picInfo = bx0x;
            this.bLy7r(sQ6K);
            this.fc2x.doing = null;
            this.Jj1x()
        } else {
            this.dP1x(d9g)
        }
    };
    b9i.bpY2x = function (r9i, kY3x, eN2x) {
        if (this.RF5K < r9i) {
            return
        }
        if (this.BZ9Q) {
            clearTimeout(this.BZ9Q);
            this.BZ9Q = 0
        }
        if (kY3x) {
            this.RO5T.innerText = bpb2x[r9i * 1];
            this.RF5K = r9i;
            this.BZ9Q = setTimeout(this.bcV9M.f9e(this, r9i, eN2x), kY3x)
        } else {
            this.RO5T.innerText = bpb2x[r9i];
            this.RF5K = r9i
        }
        this.RO5T.style.display = ""
    };
    b9i.bcV9M = function (r9i, eN2x) {
        if (r9i && this.RF5K !== r9i) {
            return
        }
        this.RF5K = 0;
        this.RO5T.innerText = bpb2x[0];
        this.RO5T.style.display = "none";
        eN2x && eN2x()
    };
    b9i.cdC3x = function (cW1x) {
        var j9a = {};
        if (cW1x.fail) {
            j9a.fail = cW1x.fail
        }
        var dW1x = a8i.cd0x("m-xwgt-share-upload-preview", j9a);
        cW1x.element = a8i.ow5B(dW1x);
        h9c.s9j(a8i.H9y(cW1x.element, "del")[0], "mousedown", this.cds3x.f9e(this, cW1x), false);
        this.bcU9L.insertBefore(cW1x.element, this.bcU9L.lastElementChild);
        cW1x.dragger = w9n.bLG7z.A9r({
            view: this.bcU9L.parentNode,
            body: cW1x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Sf5k.f9e(this, cW1x),
            onchange: this.cdr3x.f9e(this, cW1x),
            ondragend: this.bnG1x.f9e(this, cW1x)
        })
    };
    b9i.bLy7r = function (cW1x) {
        if (!cW1x || !cW1x.element) {
            return false
        }
        var j9a = {};
        if (cW1x.fail) {
            j9a.fail = cW1x.fail
        } else {
            j9a.url = cW1x.picUrl
        }
        a8i.y9p(cW1x.element, "z-fail");
        cW1x.element.firstChild.outerHTML = a8i.cd0x("m-xwgt-share-upload-preview-img", j9a)
    };
    b9i.Sf5k = function (p9g, kH3x) {
        a8i.y9p(p9g.element, "z-sel")
    };
    b9i.cdr3x = function (p9g, kH3x) {
        var cHG0x, gv2x = this.fc2x.length - 1, ol4p;
        for (var i = gv2x; i >= 0; i--) {
            a8i.x9o(this.fc2x[i].element, "z-jump");
            if (this.fc2x[i] == p9g) {
                ol4p = i
            } else {
                a8i.eY2x(this.fc2x[i].element, {left: "", top: ""})
            }
        }
        var Ru5z = {x: 46 + 92 * (ol4p % 5) + kH3x.left, y: 46 + 92 * (ol4p / 5 >> 0) + kH3x.top};
        var bqw2x = Ru5z.x / 92 >> 0, bqz2x = Ru5z.y / 92 >> 0, zB8t = Math.max(0, Math.min(gv2x, bqz2x * 5 + bqw2x));
        if (zB8t == ol4p) {
            return
        }
        var cdo3x = zB8t < ol4p;
        for (var i = Math.min(zB8t, ol4p); i <= Math.max(zB8t, ol4p); i++) {
            if (i !== ol4p) {
                var bLw7p = i % 5;
                if (cdo3x) {
                    if (bLw7p == 4) {
                        a8i.eY2x(this.fc2x[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a8i.eY2x(this.fc2x[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bLw7p == 0) {
                        a8i.eY2x(this.fc2x[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a8i.eY2x(this.fc2x[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b9i.bnG1x = function (p9g, kH3x) {
        var cHH0x, gv2x = this.fc2x.length - 1, ol4p;
        for (var i = gv2x; i >= 0; i--) {
            a8i.eY2x(this.fc2x[i].element, {left: "", top: ""});
            if (this.fc2x[i] == p9g) {
                ol4p = i
            }
        }
        a8i.x9o(p9g.element, "z-sel");
        var Ru5z = {x: 46 + 92 * (ol4p % 5) + kH3x.left, y: 46 + 92 * (ol4p / 5 >> 0) + kH3x.top};
        var bqw2x = Ru5z.x / 92 >> 0, bqz2x = Ru5z.y / 92 >> 0, zB8t = Math.max(0, Math.min(gv2x, bqz2x * 5 + bqw2x));
        if (zB8t == ol4p) {
            return
        }
        this.bcU9L.insertBefore(p9g.element, (this.fc2x[zB8t + (zB8t > ol4p ? 1 : 0)] || {}).element || this.Jm1x);
        this.fc2x.splice(ol4p, 1);
        this.fc2x.splice(zB8t, 0, p9g)
    };
    b9i.cds3x = function (p9g, d9g) {
        a8i.cM0x(p9g.element, false);
        if (p9g.dragger) p9g.dragger.T0x();
        delete p9g.dragger;
        var r9i = -1;
        for (var i = this.fc2x.length - 1; i >= 0; i--) {
            if (this.fc2x[i] == p9g) {
                r9i = i;
                break
            }
        }
        this.fc2x.splice(r9i, r9i >= 0 ? 1 : 0);
        delete p9g;
        if (this.fc2x.length >= 9) {
            this.Jm1x.style.display = "none"
        } else {
            this.Jm1x.style.display = ""
        }
        if (!this.fc2x.length) {
            this.o9f.style.display = "none";
            this.bcV9M(0)
        } else {
            this.bLC7v()
        }
        if (this.fc2x.doing == p9g) {
            this.fc2x.doing = null
        }
        this.Jj1x()
    };
    b9i.bLC7v = function () {
        var bLu7n = false;
        for (var i = 0, len = this.fc2x.length; i < len; i++) {
            if (this.fc2x[i].status == -3) {
                bLu7n = true
            }
        }
        if (bLu7n) {
            this.bpY2x(-3)
        } else {
            this.bcV9M(-3)
        }
    };
    b9i.Rs5x = function () {
        var dF1x = [];
        for (var i = this.fc2x.length - 1; i >= 0; i--) {
            if (this.fc2x[i].status == 2) {
                dF1x.unshift(this.fc2x[i].picInfo)
            }
        }
        return dF1x
    };
    I9z.fJ2x.A9r({element: w9n.bpg2x, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, fz2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        bc0x = c9h("nej.ui"), O9F = c9h("nej.ut"), b9i, L9C;
    if (!!O9F.nt4x) return;
    O9F.nt4x = NEJ.C();
    b9i = O9F.nt4x.N9E(O9F.baZ8R);
    L9C = O9F.nt4x.cs0x;
    b9i.bl0x = function (e9f) {
        this.cdk3x(e9f.more);
        this.EF0x = a8i.B9s(e9f.sbody);
        this.cdj3x = e9f.fixScrollPosition;
        this.bX0x([[this.EF0x, "scroll", this.cdf3x.f9e(this)]]);
        var dq1x = e9f.delta;
        if (dq1x == null) dq1x = 30;
        this.Re5j = Math.max(0, dq1x);
        var cz0x = parseInt(e9f.count) || 0;
        this.jG3x = Math.max(0, cz0x);
        var gT2x = parseInt(e9f.number) || 0;
        if (gT2x > 1 && gT2x <= cz0x) {
            this.BO9F = gT2x
        }
        this.bn0x(e9f)
    };
    b9i.bC0x = function () {
        this.bF0x();
        delete this.AS9J;
        delete this.EF0x;
        delete this.sW6Q;
        delete this.bdg9X
    };
    b9i.BJ9A = function (bi0x, bq0x) {
        var bM0x = this.Ak9b + (this.jG3x - 1) * this.pn5s, fZ2x = this.jG3x * this.pn5s;
        return L9C.BJ9A.call(this, bM0x, bi0x, fZ2x, bq0x)
    };
    b9i.cdk3x = function (bdh9Y) {
        this.AS9J = a8i.B9s(bdh9Y);
        this.bX0x([[this.AS9J, "click", this.pl5q.f9e(this)]])
    };
    b9i.brp2x = function (F9w) {
        F9w = F9w || {};
        if (this.sW6Q || !F9w) return;
        if (!F9w.scrollHeight) F9w = a8i.ox5C();
        var bi0x = a8i.hS2x(this.im3x, this.cdj3x ? F9w : null),
            dq1x = bi0x.y + this.im3x.offsetHeight - F9w.scrollTop - F9w.clientHeight,
            brr2x = F9w.scrollHeight <= F9w.clientHeight;
        if (dq1x <= this.Re5j || brr2x && !this.sW6Q) {
            this.pl5q()
        }
    };
    b9i.cdf3x = function (d9g) {
        if (this.sW6Q) return;
        this.brp2x(h9c.W0x(d9g))
    };
    b9i.BD9u = function (d9g) {
        L9C.BD9u.apply(this, arguments);
        if (!d9g.stopped) {
            this.Od3x();
            var bi0x = 0;
            if (d9g.index > 1) {
                bi0x = this.Ak9b + ((d9g.index - 1) * this.jG3x - 1) * this.pn5s
            }
            this.hP2x = bi0x;
            this.pl5q()
        }
    };
    b9i.bMK8C = function (e9f) {
        if (!!this.BO9F) {
            var dq1x = e9f.offset > 0 ? this.pn5s : this.Ak9b, fZ2x = dq1x + this.pn5s * (this.BO9F - 1);
            this.hP2x = e9f.offset + fZ2x;
            e9f.data.limit = fZ2x;
            e9f.limit = fZ2x;
            delete this.BO9F
        }
        return e9f
    };
    b9i.biw0x = function (e9f) {
        delete this.bdg9X;
        L9C.biw0x.apply(this, arguments);
        this.bLr7k()
    };
    b9i.biA0x = function (d9g) {
        if (d9g.key != this.ja3x.key) return;
        switch (d9g.action) {
            case"refresh":
            case"append":
                delete this.bdg9X;
                break
        }
        L9C.biA0x.apply(this, arguments)
    };
    b9i.NQ3x = function () {
        this.zr8j("onbeforelistload", "列表加载中...");
        a8i.ba0x(this.AS9J, "display", "none")
    };
    b9i.biZ0x = function (i9b, bi0x, fZ2x) {
        var bq0x = i9b.length, brz2x = i9b.loaded ? bi0x + fZ2x >= bq0x : bi0x + fZ2x > bq0x;
        this.hP2x = Math.min(this.hP2x, bq0x);
        a8i.ba0x(this.AS9J, "display", brz2x ? "none" : "");
        if (brz2x) this.sW6Q = !0;
        if (this.jG3x > 0) {
            var bx0x = this.BJ9A(bi0x, i9b.length);
            if (this.bMJ8B(bx0x.index, bx0x.total)) return !0;
            var dq1x = this.Ak9b - this.pn5s, gT2x = this.jG3x * this.pn5s;
            this.sW6Q = (bi0x + fZ2x - dq1x) % gT2x == 0 || brz2x;
            a8i.ba0x(this.AS9J, "display", this.sW6Q ? "none" : "");
            this.biL0x(this.sW6Q && bx0x.total > 1 ? "" : "none")
        }
    };
    b9i.biX0x = function () {
        this.hP2x = 0;
        this.sW6Q = !0;
        this.zr8j("onemptylist", "没有列表数据！")
    };
    b9i.NO3x = function (dW1x, kH3x) {
        this.im3x.insertAdjacentHTML(kH3x || "beforeEnd", dW1x)
    };
    b9i.NM3x = function (hs2x) {
        this.fK2x = this.fK2x || [];
        if (k9b.eJ1x(hs2x)) {
            fz2x.push.apply(this.fK2x, hs2x)
        } else {
            this.fK2x.push(hs2x)
        }
    };
    b9i.bbb8T = function (d9g) {
        a8i.mB4F(this.cu0x);
        this.NC3x(d9g, "onafteradd");
        var eZ2x = d9g.flag;
        if (d9g.stopped || !eZ2x) return;
        if (this.jG3x > 0) {
            this.biQ0x();
            return
        }
        this.hP2x += 1;
        eZ2x == -1 ? this.bjx0x(d9g.data) : this.bMH8z(d9g.data)
    };
    b9i.bbc8U = function (d9g) {
        this.NC3x(d9g, "onafterdelete");
        if (d9g.stopped) return;
        if (this.jG3x > 0) {
            this.biQ0x();
            return
        }
        var C9t = d9g.data[this.ff2x.pkey];
        if (!!this.fK2x) {
            var p9g = a8i.bUr1x(C9t), r9i = k9b.dj1x(this.fK2x, p9g);
            if (r9i >= 0) {
                this.fK2x.splice(r9i, 1);
                this.hP2x -= 1
            }
            if (!!p9g) p9g.T0x()
        } else {
            var g9d = a8i.B9s(this.bMT8L(C9t));
            if (!!g9d) this.hP2x -= 1;
            a8i.cM0x(g9d)
        }
        if (this.hP2x <= 0) this.pl5q()
    };
    b9i.bjr0x = function (bi0x, fZ2x) {
        if (bi0x != this.hP2x) return;
        if (this.Ww6q()) {
            this.sW6Q = !1;
            this.bLr7k()
        }
    };
    b9i.bjs0x = function (bi0x, fZ2x) {
        if (bi0x != 0) return;
        var KI2x = this.S0x.hw2x(this.ja3x.key);
        for (var i = fZ2x - 1; i >= 0; i--) {
            this.bjx0x(KI2x[i])
        }
    };
    b9i.bLr7k = function () {
        var F9w = this.EF0x;
        if (!F9w || this.sW6Q) return;
        this.brp2x(this.EF0x)
    };
    b9i.gI2x = function () {
        delete this.sW6Q;
        L9C.gI2x.apply(this, arguments)
    };
    b9i.pl5q = function () {
        if (!!this.bdg9X) return;
        this.bdg9X = !0;
        var bi0x = this.hP2x;
        this.hP2x += bi0x == 0 ? this.Ak9b : this.pn5s;
        this.bML8D(bi0x)
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), cY1x = c9h("nej.x"),
        O9F = c9h("nej.ut"), b9i;
    if (!!O9F.EQ0x) return;
    O9F.EQ0x = NEJ.C();
    b9i = O9F.EQ0x.N9E(O9F.cK0x);
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.jp3x = e9f.event || "click";
        this.kU3x = e9f.selected || "js-selected";
        this.or4v = e9f.disabled || "js-disabled";
        this.bLq7j = !!e9f.inverse;
        this.ccT3x(e9f.list);
        this.QZ5e(e9f.index || 0)
    };
    b9i.bC0x = function () {
        var ccS3x = function (g9d) {
            this.brS2x(g9d, !1)
        };
        return function () {
            this.bF0x();
            k9b.bd0x(this.bU0x, ccS3x, this);
            delete this.bU0x;
            delete this.jp3x;
            delete this.cp0x;
            delete this.or4v;
            delete this.kU3x;
            delete this.bLq7j
        }
    }();
    b9i.ccT3x = function () {
        var bhb0x = function (p9g) {
            if (!p9g) return;
            this.bU0x.push(p9g);
            var r9i = this.bU0x.length - 1, dy1x = this.brT2x[r9i];
            if (!dy1x) {
                dy1x = this.QZ5e.f9e(this, r9i);
                this.brT2x[r9i] = dy1x
            }
            this.bX0x([[p9g, this.jp3x, dy1x]])
        };
        return function (i9b) {
            this.bU0x = [];
            if (!this.brT2x) this.brT2x = [];
            k9b.bd0x(i9b, bhb0x, this)
        }
    }();
    b9i.brS2x = function (F9w, ccR3x) {
        !!ccR3x && !this.bLq7j ? a8i.y9p(F9w, this.kU3x) : a8i.x9o(F9w, this.kU3x)
    };
    b9i.QZ5e = function (r9i, QP5U, j9a) {
        var F9w = this.bU0x[r9i];
        if (QP5U != !0 && (r9i == this.cp0x || !F9w || a8i.bE0x(F9w, this.or4v))) {
            h9c.cn0x(arguments[1]);
            return this
        }
        var d9g = {index: r9i, last: this.cp0x, list: this.lR4V(), data: j9a || a8i.t9k(F9w, "value")};
        this.cp0x = r9i;
        F9w = this.bU0x[d9g.last];
        if (!!F9w) this.brS2x(F9w, !1);
        F9w = this.bU0x[this.cp0x];
        this.brS2x(F9w, !0);
        this.z9q("onchange", d9g);
        if (!d9g.nostop) h9c.cn0x(arguments[1]);
        return this
    };
    b9i.tx6r = function () {
        return this.cp0x
    };
    b9i.lR4V = function () {
        return this.bU0x
    };
    a8i.ccO3x = cY1x.ccO3x = function (bH0x, e9f) {
        var C9t = a8i.lD4H(bH0x);
        if (!C9t) return null;
        if (!O9F.bbR8J(C9t, O9F.EQ0x)) {
            e9f = e9f || {};
            e9f.list = !e9f.clazz ? a8i.dk1x(C9t) : a8i.H9y(C9t, e9f.clazz);
            delete e9f.clazz
        }
        return O9F.bbR8J(C9t, O9F.EQ0x, e9f || bb0x)
    };
    cY1x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, k9b = c9h("nej.u"), v9m = c9h("nej.j"), l9c = c9h("nm.x");
    var SETTING_KEY = "player-setting";
    var ns4w = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    ns4w = v9m.tG6A(SETTING_KEY) || ns4w;
    l9c.bsc2x = function () {
        return ns4w
    };
    l9c.EW0x = function (EX0x) {
        if (EX0x) {
            ns4w = EX0x;
            v9m.vo7h(SETTING_KEY, EX0x)
        }
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), I9z = c9h("nej.ut"),
        l9c = c9h("nm.x"), q9h = c9h("nm.d"), hj2x = c9h("nm.w.player.log");
    var kL3x = q9h.hT2x.A9r();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var hg2x = function (u9l, bG0x, ro5t) {
        var cJ0x = l9c.fo2x("{0} {1} {2}", k9b.hY2x(new Date, "yyyy-MM-dd HH:mm:ss"), u9l, bG0x);
        if (ro5t == LogLevel.ERROR) {
            kL3x.eS2x("playerror", {message: bG0x})
        }
        if (ro5t >= LogLevel.INFO) {
            kL3x.bSu0x(cJ0x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cJ0x)
        }
    };
    hj2x.cc0x = function () {
        hg2x("PLAY_ERROR", l9c.fo2x.apply(null, arguments), LogLevel.ERROR)
    };
    hj2x.qn5s = function () {
        hg2x("PLAY_INFO", l9c.fo2x.apply(null, arguments), LogLevel.INFO)
    };
    hj2x.cHI0x = function () {
        hg2x("PLAY_DEBUG", l9c.fo2x.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), I9z = c9h("nej.ut"), k9b = c9h("nej.u"), w9n = c9h("nm.w"),
        eN2x = c9h("flash.cb");
    var eg1x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Fc0x, bdl9c, vI7B;
    w9n.ccK3x = function (u9l, cA0x) {
        if (u9l != "flash") {
            if (!Fc0x) {
                Fc0x = a8i.di1x("audio");
                k9b.bd0x(eg1x, function (u9l) {
                    h9c.s9j(Fc0x, u9l, onMediaCallBack)
                })
            }
            if (Fc0x && Fc0x.canPlayType && Fc0x.canPlayType("audio/mpeg")) {
                cA0x(new MediaWrap("audio"));
                return
            }
        }
        if (!bdl9c) {
            a8i.rV6P({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (hW2x) {
                    bdl9c = hW2x;
                    k9b.bd0x(eg1x, function (u9l) {
                        eN2x[u9l] = onMediaCallBack;
                        bdl9c.addCallback(u9l, "flash.cb." + u9l)
                    });
                    cA0x(new MediaWrap("flash"))
                }.f9e(this)
            })
        } else {
            cA0x(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Ff0x) {
        var gR2x;
        I9z.fJ2x.A9r({element: this, event: eg1x.concat(["interrupt", "recover"])});
        gR2x = Ff0x == "audio" ? Fc0x : bdl9c;
        this.type = Ff0x;
        this.destroy = function () {
        };
        this.setSrc = function (X0x) {
            if (vI7B != this) {
                var gv2x = vI7B;
                if (gv2x) {
                    gv2x.interrupt()
                }
                vI7B = this
            }
            if (Ff0x == "flash") {
                gR2x.setSrc(X0x)
            } else {
                gR2x.src = X0x
            }
        };
        this.play = function () {
            if (vI7B != this) {
                var gv2x = vI7B;
                if (gv2x) {
                    gv2x.interrupt();
                    vI7B = this;
                    this.recover()
                } else {
                    vI7B = this
                }
            }
            if (Ff0x == "flash") {
                gR2x.as_play()
            } else {
                gR2x.play()
            }
        };
        this.pause = function () {
            if (vI7B != this) return;
            if (Ff0x == "flash") {
                gR2x.as_pause()
            } else {
                gR2x.pause()
            }
        };
        this.load = function () {
            if (vI7B != this) return;
            if (Ff0x == "flash") {
                gR2x.as_load()
            } else {
                gR2x.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return gR2x
        };
        var pr5w = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k9b.bd0x(pr5w, function (V0x) {
            var QF5K = "get" + V0x, QC4G = "set" + V0x;
            if (Ff0x == "flash") {
                if (!this[QF5K]) {
                    this[QF5K] = function () {
                        return gR2x[QF5K]()
                    }
                }
                if (!this[QC4G]) {
                    this[QC4G] = function (value) {
                        gR2x[QC4G](value)
                    }
                }
            } else {
                var bLm7f = V0x.slice(0, 1).toLowerCase() + V0x.slice(1);
                if (!this[QF5K]) {
                    this[QF5K] = function () {
                        return gR2x[bLm7f]
                    }
                }
                if (!this[QC4G]) {
                    this[QC4G] = function (value) {
                        gR2x[bLm7f] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d9g) {
        if (vI7B) {
            h9c.z9q(vI7B, d9g.type, d9g)
        }
    }
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), v9m = c9h("nej.j"), I9z = c9h("nej.ut"), dw1x = c9h("nej.p"),
        w9n = c9h("nm.w"), l9c = c9h("nm.x"), hj2x = c9h("nm.w.player.log"), b9i;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bLl7e = false;
    w9n.fR2x = NEJ.C();
    b9i = w9n.fR2x.N9E(I9z.cK0x);
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.cO0x = {};
        this.bdo9f(e9f.media);
        v9m.bm0x("/api/cdns", {
            type: "json", onload: function (d9g) {
                if (d9g.code) {
                    this.qV5a = d9g.data
                }
            }.f9e(this)
        })
    };
    b9i.bC0x = function () {
        this.bF0x();
        delete this.cO0x
    };
    b9i.bdp9g = function (bj0x) {
        if (!bj0x) return;
        var wn7g = this.cO0x.volume;
        if (this.dS1x) {
            this.dS1x.pause()
        }
        this.cO0x = {time: 0, id: bj0x.id, duration: bj0x.duration / 1e3, play: this.cO0x.play, stalledRetryCount: 0};
        if (wn7g != null) {
            this.cO0x.volume = wn7g
        }
        this.cO0x.loadState = LoadState.LOAD_START;
        this.bLk7d(bj0x.id);
        hj2x.qn5s("play song id: {0}", bj0x.id)
    };
    b9i.eq1x = function () {
        if (this.cO0x.error) {
            this.cO0x.error = null;
            if (this.cO0x.error == ErrorType.INFO_GET_ERR || this.bLj7c()) {
                this.bLi7b()
            } else {
                this.Qk4o()
            }
        } else {
            if (this.dS1x) {
                this.dS1x.play()
            }
        }
        this.cO0x.play = true;
        this.qp5u("play")
    };
    b9i.fC2x = function () {
        if (this.dS1x) {
            this.dS1x.pause()
        }
        this.cO0x.play = false;
        this.qp5u("pause")
    };
    b9i.po5t = function (bA0x) {
        if (this.dS1x) {
            this.dS1x.setCurrentTime(bA0x)
        }
        this.cO0x.time = bA0x;
        hj2x.qn5s("seek to: {0}", bA0x)
    };
    b9i.btl3x = function () {
        return this.cO0x.duration || 0
    };
    b9i.wc7V = function () {
        return !!this.cO0x.play
    };
    b9i.mA4E = function (Qi4m) {
        this.cO0x.volume = Qi4m;
        if (this.dS1x) {
            this.dS1x.setVolume(Qi4m)
        }
    };
    b9i.bdt9k = function () {
        return this.cO0x.time
    };
    b9i.bdo9f = function (u9l) {
        w9n.ccK3x(u9l, function (gR2x) {
            this.dS1x = gR2x;
            hj2x.qn5s("media loaded: {0}", gR2x.type);
            this.bX0x([[this.dS1x, "loadedmetadata", this.ccA3x.f9e(this)], [this.dS1x, "ended", this.ccv3x.f9e(this)], [this.dS1x, "waiting", this.xR8J.f9e(this)], [this.dS1x, "play", this.vZ7S.f9e(this)], [this.dS1x, "pause", this.btB3x.f9e(this)], [this.dS1x, "playing", this.Pi4m.f9e(this)], [this.dS1x, "timeupdate", this.cct3x.f9e(this)], [this.dS1x, "progress", this.qA5F.f9e(this)], [this.dS1x, "stalled", this.btK3x.f9e(this)], [this.dS1x, "interrupt", this.fC2x.f9e(this)], [this.dS1x, "recover", this.ccr3x.f9e(this)], [this.dS1x, "error", this.dP1x.f9e(this)]]);
            if (this.cO0x) {
                if (this.cO0x.loadState == LoadState.LOAD_START || this.cO0x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.btO3x();
                    if (this.cO0x.volume != null) {
                        this.dS1x.setVolume(this.cO0x.volume)
                    }
                }
            }
        }.f9e(this))
    };
    b9i.ccn2x = function (u9l) {
        this.JR1x();
        this.dS1x.destroy();
        this.cO0x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.xR8J();
        this.bdo9f(u9l);
        hj2x.qn5s("switch media")
    };
    b9i.cHJ0x = function () {
        return this.dS1x
    };
    b9i.bLk7d = function () {
        this.xR8J();
        v9m.bm0x("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cO0x.id]), br: DEFAULT_BR},
            onload: this.bKT7M.f9e(this),
            onerror: this.bKT7M.f9e(this)
        })
    };
    b9i.bKT7M = function (d9g) {
        if (d9g.code == 200 && d9g.data && d9g.data.length) {
            var bx0x = d9g.data[0];
            if (!bx0x.url) {
                this.cO0x.error = ErrorType.INFO_GET_ERR;
                this.qp5u("error", {code: this.cO0x.error});
                return
            }
            this.cO0x.playUrl = bx0x.url;
            this.cO0x.expireTime = (new Date).getTime() + bx0x.expi * 1e3;
            this.btO3x()
        } else {
            this.cO0x.error = ErrorType.INFO_GET_ERR;
            this.qp5u("error", {code: this.cO0x.error});
            hj2x.cc0x("info load error")
        }
    };
    b9i.btO3x = function () {
        if (this.dS1x) {
            var X0x = this.cO0x.playUrl;
            if (this.cO0x.time > 0 && (this.cO0x.loadState == LoadState.IN_RE_GET_URL || this.cO0x.loadState == LoadState.IN_RE_GET_URL)) {
                X0x += "#t=" + this.cO0x.time
            }
            this.dS1x.setSrc(X0x);
            hj2x.qn5s("load mp3: {0},loadState: {1}.", X0x, this.cO0x.loadState)
        }
    };
    b9i.bKS7L = function () {
        if (/#t=(\d+)$/.test(this.dS1x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b9i.Qk4o = function () {
        var bA0x = parseInt(this.cO0x.time) || 0, ccc2x = this.bKS7L();
        if (bA0x === ccc2x) {
            this.dS1x.load()
        } else {
            this.dS1x.setSrc(this.cO0x.playUrl + "#t=" + bA0x)
        }
        this.cO0x.loadState = LoadState.IN_RELOAD;
        this.xR8J();
        hj2x.qn5s("reload from: {0}", bA0x)
    };
    b9i.bLi7b = function () {
        this.cO0x.loadState = LoadState.IN_RE_GET_URL;
        this.bLk7d()
    };
    b9i.bKR7K = function () {
        var tq6k = getHost(this.cO0x.playUrl);
        if (tq6k) {
            for (var i = 0; i < this.qV5a.length; i++) {
                var il3x = this.qV5a[i] || [], r9i = il3x.indexOf(tq6k);
                if (r9i >= 0 && il3x.length > 1) {
                    return il3x[(r9i + 1) % il3x.length]
                }
            }
        }

        function getHost(X0x) {
            if (CDN_HOST_REG.test(X0x)) return RegExp.$1
        }
    };
    b9i.cca2x = function () {
        this.cO0x.playUrl = this.cO0x.playUrl.replace(CDN_HOST_REG, this.bKR7K());
        this.cO0x.loadState = LoadState.IN_SWITCH_CDN;
        this.btO3x();
        this.xR8J()
    };
    b9i.ccA3x = function () {
        if (this.cO0x.loadState == LoadState.LOAD_START) {
            this.cO0x.loadState = LoadState.LOADED_META;
            if (this.dS1x.type == "audio") {
                this.cO0x.duration = this.dS1x.getDuration()
            }
            this.qp5u("loadedmeta", {duration: this.cO0x.duration})
        } else {
            this.cO0x.loadState = LoadState.LOADED_META
        }
        if (this.cO0x.play) {
            this.dS1x.play()
        } else {
            this.dS1x.pause()
        }
        if (this.cO0x.time && parseInt(this.cO0x.time) != this.bKS7L()) {
            this.dS1x.setCurrentTime(this.cO0x.time)
        }
        this.IR1x();
        this.Pi4m();
        bLl7e = true;
        hj2x.qn5s("loaded meta")
    };
    b9i.ccv3x = function () {
        this.cO0x.ended = true;
        this.qp5u("ended")
    };
    b9i.xR8J = function () {
        if (!this.cO0x.waiting) {
            this.cO0x.waiting = true;
            this.cO0x.waitTimestamp = +(new Date);
            this.qp5u("waiting")
        }
    };
    b9i.Pi4m = function () {
        this.cO0x.waiting = false;
        this.cO0x.waitTimestamp = 0;
        this.qp5u("playing")
    };
    b9i.vZ7S = function () {
        this.qp5u("play")
    };
    b9i.btB3x = function () {
        this.qp5u("pause")
    };
    b9i.cct3x = function () {
        if (this.cO0x.loadState != LoadState.LOADED_META) return;
        var bA0x = this.dS1x.getCurrentTime();
        if (this.cO0x.waiting && bA0x > this.cO0x.time) {
            this.Pi4m()
        }
        this.cO0x.time = bA0x;
        this.qp5u("timeupdate", {time: this.cO0x.time, duration: this.cO0x.duration})
    };
    b9i.qA5F = function (d9g) {
        if (this.cO0x.loadState != LoadState.LOADED_META) return;
        var m9d = {};
        if (d9g.data) {
            m9d.total = d9g.data.total;
            m9d.loaded = d9g.data.loaded
        } else {
            var Aj9a = this.dS1x.getBuffered(), bA0x = this.dS1x.getCurrentTime(), oV5a = 0;
            for (var i = 0; i < Aj9a.length; i++) {
                if (bA0x > Aj9a.start(i) && bA0x < Aj9a.end(i)) {
                    oV5a = Aj9a.end(i);
                    break
                }
            }
            m9d.total = this.cO0x.duration;
            m9d.loaded = Math.min(oV5a, m9d.total)
        }
        this.qp5u("progress", m9d)
    };
    b9i.IR1x = function () {
        if (this.cO0x.retry) {
            clearTimeout(this.cO0x.retry.tid);
            this.cO0x.retry = null
        }
    };
    b9i.dP1x = function () {
        var ca0x = this.dS1x.getError();
        hj2x.cc0x("media error code: {0}, netState: {1}", ca0x.code, this.dS1x.getNetworkState());
        if (ca0x.code == MediaError.MEDIA_ERR_NETWORK || ca0x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var EX0x = l9c.bsc2x();
            if (!this.cO0x.retry) {
                this.cO0x.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cO0x.retry.tid)
            }
            if (this.cO0x.retry.level == RetryLevel.NONE) {
                if (this.bLj7c()) {
                    this.cO0x.retry.level = RetryLevel.GET_URL;
                    this.bLi7b();
                    hj2x.qn5s("Url expired, get url.")
                } else {
                    this.cO0x.retry.level = RetryLevel.RELOAD;
                    this.cO0x.retry.tid = setTimeout(this.Qk4o.f9e(this), 3e3);
                    hj2x.qn5s("Reload mp3 3s later.")
                }
            } else if (this.cO0x.retry.level == RetryLevel.GET_URL) {
                this.cO0x.retry.level = RetryLevel.RELOAD;
                this.cO0x.retry.tid = setTimeout(this.Qk4o.f9e(this), 3e3);
                hj2x.qn5s("Reload mp3 3s later.")
            } else if (this.cO0x.retry.level == RetryLevel.RELOAD) {
                this.cO0x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bKR7K()) {
                    this.cO0x.retry.tid = setTimeout(this.cca2x.f9e(this), 5e3);
                    hj2x.qn5s("Switch CDN 5s later.")
                } else {
                    this.cO0x.retry.tid = setTimeout(this.Qk4o.f9e(this), 5e3);
                    hj2x.qn5s("Reload mp3 5s later.")
                }
            } else if (!bLl7e && this.dS1x.type == "audio" && !EX0x.useFlash && !dw1x.In1x.mac && l9c.bwe3x().supported) {
                EX0x.useFlash = true;
                l9c.EW0x(EX0x);
                this.ccn2x("flash")
            } else {
                this.IR1x();
                this.fC2x();
                this.cO0x.error = ErrorType.NET_ERR;
                this.qp5u("error", {code: this.cO0x.error});
                hj2x.cc0x("error can not retry.")
            }
        } else {
            this.IR1x();
            this.fC2x();
            this.cO0x.error = ErrorType.UNKNOWN_ERR;
            this.qp5u("error", {code: this.cO0x.error});
            hj2x.cc0x("error can not retry.")
        }
    };
    b9i.btK3x = function () {
        var hO2x = 0, bKQ7J = 5e3;
        return function () {
            this.xR8J();
            clearTimeout(hO2x);
            setTimeout(function () {
                var eW2x = +(new Date);
                if (this.cO0x.waiting && eW2x - this.cO0x.waitTimestamp >= bKQ7J && this.cO0x.stalledRetryCount < MAX_STALLED_RETRY) {
                    hj2x.qn5s("stalled too long retry.");
                    this.cO0x.stalledRetryCount++;
                    this.Qk4o()
                }
            }.f9e(this), bKQ7J);
            hj2x.qn5s("stalled")
        }
    }();
    b9i.bLj7c = function () {
        var eW2x = +(new Date);
        return eW2x > this.cO0x.expireTime
    };
    b9i.ccr3x = function () {
        var bA0x = parseInt(this.cO0x.time) || 0;
        this.dS1x.setSrc(this.cO0x.playUrl + "#t=" + bA0x);
        this.cO0x.loadState = LoadState.IN_RELOAD;
        this.xR8J();
        hj2x.qn5s("recover from: {0}", bA0x)
    };
    b9i.qp5u = function (U0x, j9a) {
        h9c.z9q(w9n.fR2x, "playaction", {action: U0x, data: j9a || {}})
    };
    I9z.fJ2x.A9r({element: w9n.fR2x, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c9h = NEJ.P, h9c = c9h("nej.v"), I9z = c9h("nej.ut"), w9n = c9h("nm.w"), b9i;
    w9n.FR0x = NEJ.C();
    b9i = w9n.FR0x.N9E(w9n.fR2x);
    L9C = w9n.FR0x.cs0x;
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.cbY2x = function (bO0x) {
        this.bdp9g(bO0x);
        this.eq1x()
    };
    b9i.bup3x = function () {
        this.fC2x()
    };
    b9i.wE8w = function (d9g) {
        if (d9g.action == "play") {
            this.fC2x()
        }
    };
    b9i.qp5u = function (U0x, j9a) {
        h9c.z9q(w9n.FR0x, "tmpplayaction", {action: U0x, data: j9a || {}, tmp: true})
    };
    b9i.tw6q = function () {
        return this.cO0x
    };
    I9z.fJ2x.A9r({element: w9n.FR0x, event: ["tmpplayaction"]})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), fL2x = c9h("nej.n"),
        v9m = c9h("nej.j"), I9z = c9h("nej.ut"), bc0x = c9h("nej.ui"), w9n = c9h("nm.w"), n9e = c9h("nm.l"),
        ld3x = c9h("nm.c"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, L9C,
        bdE9v = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var buw3x = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    w9n.bux3x = NEJ.C();
    b9i = w9n.bux3x.N9E(bc0x.el1x);
    b9i.cy0x = function (e9f) {
        this.cE0x(e9f);
        var i9b = a8i.H9y(this.o9f, "j-flag");
        this.cHK0x = i9b.shift();
        this.cbP2x = i9b.shift();
        this.IP1x = i9b.shift();
        this.buE3x = i9b.shift();
        this.buH3x = [i9b.shift(), i9b.shift(), i9b.shift(), i9b.shift(), i9b.shift(), i9b.shift()];
        this.bdJ9A = i9b.shift();
        this.bKK7D = i9b.shift();
        this.rE6y = {list: this.buH3x, selected: "z-curr", onchange: this.bKJ7C.f9e(this)};
        h9c.s9j(this.IP1x, "input", this.bdL9C.f9e(this));
        h9c.s9j(this.IP1x, "propertychange", this.bdL9C.f9e(this));
        h9c.s9j(this.IP1x, "keyup", this.bdL9C.f9e(this));
        h9c.s9j(this.cbP2x, "click", this.bdL9C.f9e(this));
        h9c.s9j(this.bdJ9A, "click", this.cL0x.f9e(this));
        h9c.s9j(this.bKK7D, "click", function () {
            this.z9q("oncancel", {})
        }.f9e(this));
        this.S0x = q9h.Ew0x.gf2x();
        this.Oh3x = top.nm.w.FR0x.gf2x();
        I9z.fJ2x.A9r({element: top.nm.w.FR0x, event: ["tmpplayaction"]});
        this.st6n = {limit: 100, offset: 0, parent: this.bdJ9A, onbeforelistload: this.qE5J.f9e(this)};
        q9h.sk = "fuck" + a8i.t9k(this.buE3x, "xname") + "458";
        h9c.s9j(top.nm.w.FR0x, "tmpplayaction", this.wE8w.f9e(this))
    };
    b9i.ch0x = function () {
        this.cf0x = "m-xwgt-publish-search"
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        if (!!this.BY9P) {
            this.BY9P.T0x();
            delete this.BY9P
        }
        this.rE6y.index = buw3x[e9f.type || "song"];
        this.BY9P = I9z.EQ0x.A9r(this.rE6y);
        this.IP1x.value = "";
        this.IP1x.focus();
        this.vr7k = "";
        this.cHO0x = 0;
        if (e9f.showMV == true) {
            this.buH3x[buw3x["mv"]].parentNode.style.display = "";
            a8i.y9p(this.buE3x, "srchtab-1")
        } else {
            this.buH3x[buw3x["mv"]].parentNode.style.display = "none";
            a8i.x9o(this.buE3x, "srchtab-1")
        }
        if (!!this.dK1x) {
            this.dK1x = this.dK1x.T0x()
        }
        if (e9f.hideBack) {
            a8i.y9p(this.bKK7D.parentNode, "f-hide")
        }
    };
    b9i.bC0x = function () {
        this.Oh3x.bup3x();
        this.bF0x()
    };
    b9i.bdL9C = function () {
        var value = this.IP1x.value.trim();
        if (value && value.length) {
            if (value != this.vr7k) {
                this.vr7k = value;
                this.bKJ7C({index: this.BY9P.tx6r()})
            }
        } else {
            if (this.dK1x) {
                this.dK1x = this.dK1x.T0x()
            }
        }
        this.vr7k = value
    };
    b9i.cL0x = function () {
        var cbI2x = function (F9w) {
            return a8i.bE0x(F9w, "sitm") || a8i.bE0x(F9w, "itm") || a8i.bE0x(F9w, "mv-item")
        }, cbG2x = function (F9w) {
            return a8i.bE0x(F9w, "ply")
        }, bKG7z = function () {
            n9e.Z0x.J9A({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, cbE2x = function () {
            n9e.Z0x.J9A({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, bvi3x = function (bj0x) {
            if (bj0x && bj0x.privilege && bj0x.privilege.toast) {
                v9m.bm0x("/api/song/toast", {
                    query: {id: bj0x.id},
                    type: "json",
                    onload: VN6H.f9e(this),
                    onerror: VN6H.f9e(this)
                })
            } else {
                VO6I()
            }
        }, VN6H = function (Q9H) {
            VO6I((Q9H || bb0x).toast)
        }, VO6I = function (bG0x) {
            n9e.Z0x.J9A({type: 2, tip: bG0x || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d9g) {
            var Gk0x = h9c.W0x(d9g, cbG2x), i9b = h9c.W0x(d9g, cbI2x), ey1x = this.Oh3x.tw6q();
            if (!!i9b) {
                h9c.bh0x(d9g);
                this.NZ3x = a8i.t9k(i9b, "id");
                this.NX3x = a8i.t9k(i9b, "type");
                if (this.NX3x == 18) {
                    var bO0x = this.S0x.eK2x(this.NZ3x), ro5t = l9c.pO5T(bO0x);
                    if (!Gk0x) {
                        if (ro5t == 10) {
                            bKG7z();
                            return
                        } else if (ro5t == 100) {
                            bvi3x(bO0x);
                            return
                        }
                    } else {
                        if (ro5t == 10) {
                            bKG7z();
                            return
                        } else if (ro5t == 100) {
                            bvi3x(bO0x);
                            return
                        } else if (ro5t == 11) {
                            cbE2x();
                            return
                        } else {
                            a8i.x9o(this.Ce9V, "z-pause z-loading");
                            if (Gk0x == this.Ce9V && ey1x.play && !ey1x.ended) {
                                this.Oh3x.bup3x()
                            } else {
                                this.Ce9V = Gk0x;
                                this.Oh3x.cbY2x(bO0x)
                            }
                            return
                        }
                    }
                } else if (this.NX3x == 70) {
                    if (a8i.bE0x(i9b, "z-noprogram")) {
                        n9e.Z0x.J9A({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.cbD2x()
            }
        }
    }();
    b9i.cbD2x = function () {
        var id3x = this.S0x.eK2x(this.NZ3x), sL6F = l9c.bPl8d(this.NX3x, id3x);
        sL6F.title = sL6F.title || "";
        sL6F.author = sL6F.author || "";
        sL6F.picUrl = sL6F.picUrl || "";
        sL6F.authors = sL6F.authors || "";
        if (this.NX3x == 70) {
            this.NZ3x = this.NZ3x.slice(0, -4)
        }
        this.z9q("onfinish", {id: this.NZ3x, type: this.NX3x, data: sL6F})
    };
    b9i.wE8w = function (d9g) {
        var j9a = d9g.data;
        if (!this.Ce9V) {
            return
        }
        switch (d9g.action) {
            case"play":
                a8i.fm2x(this.Ce9V, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a8i.x9o(this.Ce9V, "z-pause z-loading");
                break;
            case"error":
                n9e.Z0x.J9A({type: 2, tip: "试听遇到问题，播放失败"});
                a8i.x9o(this.Ce9V, "z-pause z-loading");
                break;
            case"playing":
                a8i.fm2x(this.Ce9V, "z-loading", "z-pause");
                break;
            case"waiting":
                a8i.fm2x(this.Ce9V, "z-pause", "z-loading");
                break
        }
    };
    b9i.cbC2x = function (d9g) {
        if (d9g.result.code == 407) {
            this.bdJ9A.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.bdJ9A.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b9i.bKJ7C = function (d9g) {
        if (!this.vr7k || d9g.index < 0 || d9g.index > 5) {
            return
        }
        this.Oh3x.bup3x();
        var bg0x = bdE9v[d9g.index], e9f = NEJ.X({}, this.st6n);
        e9f.cache = {klass: q9h.Ew0x, clear: true, onerror: this.cbC2x.f9e(this)};
        e9f.cache.lkey = "search-publish-" + bg0x.type + "-" + this.vr7k;
        e9f.item = {klass: bg0x.item, getRestrictLevel: l9c.pO5T, dur2time: l9c.lp4t};
        if (!e9f.cache.data) {
            e9f.cache.data = {}
        }
        e9f.cache.data.s = this.vr7k;
        e9f.cache.data.type = bg0x.type;
        e9f.cache.data.isPub = true;
        if (bg0x.type == 1) {
            e9f.cache.data.hlpretag = '<span class="s-fc7">';
            e9f.cache.data.hlposttag = "</span>"
        }
        e9f.onemptylist = this.cbx2x.f9e(this, this.vr7k);
        if (!!this.Gs0x) this.S0x.uP7I(this.Gs0x);
        if (!!this.dK1x) {
            this.dK1x = this.dK1x.T0x()
        }
        this.dK1x = I9z.nt4x.A9r(e9f);
        this.Gs0x = e9f.cache.lkey
    };
    b9i.qE5J = function (d9g) {
        d9g.value = a8i.iF3x("m-publish-search-loading")
    };
    b9i.cbx2x = function (K9B, d9g) {
        a8i.dB1x(d9g.parent, "m-publish-emtpy-message", {key: K9B});
        d9g.stopped = true
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), dw1x = c9h("nej.p"), v9m = c9h("nej.j"),
        cb0x = c9h("nej.ut"), bD0x = c9h("nej.ui"), w9n = c9h("nm.w"), b9i, L9C;
    var cbw2x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w9n.Gu0x = NEJ.C();
    b9i = w9n.Gu0x.N9E(bD0x.el1x);
    var gg2x = a8i.eC1x("m-wgt-receiverInput");
    var cbr2x = a8i.eC1x("m-wgt-receiverList");
    var iT3x = a8i.th6b(cbw2x);
    var cbq2x = a8i.eC1x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b9i.cy0x = function (e9f) {
        this.bk0x = [];
        this.xm8e = e9f.receiver || null;
        this.cbo2x = e9f.unique || false;
        this.nm4q = e9f.err;
        this.bKB7u(this.bKA7t, e9f.uid);
        this.cE0x(e9f)
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.Ne2x();
        this.VH6B();
        this.bdY9P();
        if (e9f.receiver) this.bwc3x(e9f.receiver.nickname, e9f.receiver.userId);
        a8i.ba0x(this.BL9C, "display", "block");
        a8i.ba0x(this.bwd3x, "cursor", "text");
        a8i.ba0x(this.BL9C, "cursor", "text")
    };
    b9i.ch0x = function () {
        var j9a = this.bKz7s();
        this.cf0x = a8i.jj3x(a8i.cd0x(gg2x, {receiver: this.xm8e, users: j9a}));
        this.lX4b = iT3x
    };
    b9i.bW0x = function () {
        this.ci0x();
        var bS0x = a8i.H9y(this.o9f, "j-flag");
        var hs2x = a8i.H9y(this.o9f, "j-item");
        this.bwd3x = bS0x[0];
        this.bKx7q = bS0x[1];
        this.eh1x = bS0x[2];
        this.BL9C = bS0x[3];
        this.bee9V = bS0x[4];
        this.bwt4x = bS0x[5];
        this.fK2x = hs2x;
        a8i.y9p(this.fK2x[0], "j-selected");
        h9c.s9j(this.eh1x, "keyup", this.bww4A.f9e(this));
        h9c.s9j(this.eh1x, "keydown", this.UX6R.f9e(this));
        h9c.s9j(this.eh1x, "focus", this.lq4u.f9e(this));
        h9c.s9j(this.bee9V, "click", this.cbe2x.f9e(this));
        h9c.s9j(this.bwd3x, "click", this.cbb2x.f9e(this));
        h9c.s9j(document.body, "click", this.pb5g.f9e(this));
        h9c.s9j(this.eh1x, "input", this.fP2x.f9e(this));
        h9c.s9j(this.eh1x, "blur", this.nV4Z.f9e(this))
    };
    b9i.bC0x = function (e9f) {
        h9c.mI4M(document.body, "click", this.pb5g.f9e(this));
        this.bF0x();
        this.bdY9P();
        this.cba2x();
        this.pb5g()
    };
    b9i.bww4A = function (d9g) {
        h9c.bh0x(d9g);
        var ka3x = d9g.keyCode || d9g.which;
        var bo0x = this.eh1x.value;
        var bq0x = this.fK2x.length;
        var sf6Z = a8i.H9y(this.o9f, "j-selected")[0];
        switch (ka3x) {
            case 13:
                var lm3x = a8i.gO2x(sf6Z, "data-username");
                var ik3x = a8i.gO2x(sf6Z, "data-userId");
                this.bwc3x(lm3x, ik3x);
                this.pb5g();
                this.eh1x.value = "";
                break;
            case 38:
                var r9i = a8i.gO2x(sf6Z, "data-index") - 1 < 0 ? bq0x - 1 : a8i.gO2x(sf6Z, "data-index") - 1;
                a8i.x9o(sf6Z, "j-selected");
                a8i.y9p(this.fK2x[r9i], "j-selected");
                break;
            case 40:
                var r9i = parseInt(a8i.gO2x(sf6Z, "data-index")) + 1 >= bq0x ? 0 : parseInt(a8i.gO2x(sf6Z, "data-index")) + 1;
                a8i.x9o(sf6Z, "j-selected");
                a8i.y9p(this.fK2x[r9i], "j-selected");
                break;
            default:
                this.xH8z()
        }
    };
    b9i.UX6R = function (d9g) {
        var ka3x = d9g.keyCode || d9g.which;
        var bo0x = this.eh1x.value;
        var r9i = a8i.H9y(this.o9f, "j-receiver").length - 1;
        if (ka3x === 8 && bo0x === "") this.caZ2x(r9i)
    };
    b9i.fP2x = function (d9g) {
        var bo0x = this.eh1x.value;
        if (bo0x.length > 10) {
            this.eh1x.value = bo0x.substring(0, 10);
            return
        }
        dw1x.dt1x.browser == "ie" && dw1x.dt1x.version < "7.0" ? setTimeout(this.bwP4T.f9e(this), 0) : this.bwP4T();
        this.VH6B()
    };
    b9i.lq4u = function () {
        if (this.bk0x[0]) this.xH8z(); else this.bKB7u(this.caW2x);
        a8i.ba0x(this.BL9C, "display", "none")
    };
    b9i.nV4Z = function () {
        var bq0x = a8i.H9y(this.o9f, "j-receiver").length;
        if (this.eh1x.value.trim() == "" && bq0x <= 0) a8i.ba0x(this.BL9C, "display", "block")
    };
    b9i.bwc3x = function (lm3x, ik3x) {
        var IE1x = this.Tr5w();
        if (IE1x.length >= 10) {
            this.ea1x();
            return
        }
        var bc0x;
        for (bc0x = 0; bc0x < IE1x.length; bc0x++) {
            if (IE1x[bc0x] == ik3x) {
                this.pb5g();
                return
            }
        }
        if (!lm3x || !ik3x) return;
        var g9d = a8i.dD1x(a8i.jj3x(a8i.cd0x(cbq2x, {username: lm3x, userId: ik3x})));
        var bH0x = this.bKx7q.parentNode;
        if (this.cbo2x) {
            this.bdY9P()
        }
        bH0x.insertBefore(g9d, this.bKx7q);
        this.eh1x.value = "";
        var bq0x = a8i.H9y(this.o9f, "j-receiver").length;
        if (bq0x > 1) a8i.ba0x(this.BL9C, "display", "none");
        this.bwP4T();
        this.VH6B()
    };
    b9i.bdY9P = function () {
        var Ta5f = a8i.H9y(this.o9f, "j-receiver");
        var bc0x;
        if (Ta5f.length > 0) {
            for (bc0x = 0; bc0x < Ta5f.length; bc0x++) {
                a8i.cM0x(Ta5f[bc0x], false)
            }
        }
    };
    b9i.cba2x = function () {
        this.eh1x.value = ""
    };
    b9i.caZ2x = function (r9i) {
        this.ea1x(!0);
        var Ta5f = a8i.H9y(this.o9f, "j-receiver");
        a8i.cM0x(Ta5f[r9i], false);
        this.VH6B()
    };
    b9i.xH8z = function () {
        var bo0x = this.eh1x.value;
        var bv0x = bo0x.trim().toLowerCase();
        var j9a;
        bv0x = bv0x.replace(/\[/g, "\\[");
        bv0x = bv0x.replace(/\]/g, "\\]");
        j9a = this.bKz7s(bv0x);
        this.caU2x(j9a)
    };
    b9i.pb5g = function (d9g) {
        a8i.ba0x(this.bee9V, "display", "none")
    };
    b9i.ea1x = function (dM1x) {
        if (dM1x && this.nm4q) {
            a8i.ba0x(this.nm4q, "display", "none");
            return
        }
        if (this.nm4q) a8i.ba0x(this.nm4q, "display", "block")
    };
    b9i.cbe2x = function (d9g) {
        h9c.cn0x(d9g);
        var bP0x = d9g.target || d9g.srcElement;
        if (a8i.bE0x(bP0x, "j-flag")) return;
        var bH0x = bP0x.nodeName.toLowerCase() == "a" ? bP0x.parentNode : bP0x.parentNode.parentNode;
        var lm3x = a8i.gO2x(bH0x, "data-username");
        var ik3x = a8i.gO2x(bH0x, "data-userId");
        this.bwc3x(lm3x, ik3x);
        this.pb5g();
        a8i.ba0x(this.BL9C, "display", "none")
    };
    b9i.cbb2x = function (d9g) {
        h9c.bh0x(d9g);
        var bP0x = d9g.target || d9g.srcElement;
        if (a8i.bE0x(bP0x.parentNode, "j-receiver")) {
            a8i.cM0x(bP0x.parentNode, false);
            this.ea1x(!0);
            this.VH6B()
        } else this.eh1x.focus()
    };
    b9i.bwP4T = function () {
        this.bwt4x.innerHTML = this.eh1x.value;
        var cF0x = this.bwt4x.offsetWidth + 2;
        a8i.ba0x(this.eh1x, "width", cF0x + "px")
    };
    b9i.VH6B = function () {
        var bep9g = a8i.hS2x(this.eh1x, this.o9f).y;
        var bKt7m = Math.floor((bep9g - 8) / 27);
        if (bKt7m < 0) return;
        a8i.ba0x(this.bwd3x, "height", 19 + bKt7m * 29 + "px")
    };
    b9i.Ne2x = function () {
        var px5C = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < px5C.length; i++) {
            a8i.ba0x(this.bwt4x, px5C[i], a8i.dh1x(this.eh1x, px5C[i]))
        }
    };
    b9i.bKB7u = function (cA0x, C9t) {
        var do1x = C9t ? C9t : window.GUser.userId;
        var X0x = "/api/user/getfollows/" + do1x;
        var gm2x = v9m.bm0x(X0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cA0x.f9e(this),
            onerror: function (j9a) {
                this.bk0x = []
            },
            onbeforerequest: function (j9a) {
            }
        })
    };
    b9i.bKA7t = function (j9a) {
        this.bk0x = JSON.parse(j9a).follow || [];
        var C9t = GUser.userId;
        for (var i = 0; i < this.bk0x.length; i++) {
            if (this.bk0x[i].userId == C9t) {
                this.bk0x.splice(i, 1);
                continue
            }
            this.bk0x[i].avatarUrl = this.bk0x[i].avatarUrl + "?param=30y30"
        }
    };
    b9i.caW2x = function (j9a) {
        if (this.bk0x[0]) return;
        this.bKA7t(j9a);
        this.xH8z()
    };
    b9i.bKz7s = function (bv0x) {
        var bv0x = bv0x ? bv0x : "";
        this.bk0x = this.bk0x[0] ? this.bk0x : [];
        var bq0x = this.bk0x.length;
        var RH5M = this.Tr5w();
        var tW7P = [];
        var Ry5D, Ro5t, bxt4x;
        if (!this.bk0x[0]) return tW7P;
        for (var bc0x = 0; bc0x < bq0x; bc0x++) {
            bxt4x = false;
            for (var v9m = 0; v9m < RH5M.length; v9m++) {
                if (this.bk0x[bc0x].userId == RH5M[v9m]) {
                    bxt4x = true;
                    break
                }
            }
            if (bxt4x) continue;
            Ry5D = this.bk0x[bc0x].nickname.toLowerCase().search(bv0x);
            Ro5t = this.bk0x[bc0x].py ? this.bk0x[bc0x].py.toLowerCase().search(bv0x) : -1;
            if (Ry5D !== -1 || Ro5t != -1) tW7P.push(this.bk0x[bc0x])
        }
        return tW7P
    };
    b9i.caU2x = function (j9a) {
        a8i.dB1x(this.bee9V, cbr2x, {users: j9a});
        a8i.y9p(a8i.H9y(this.o9f, "j-item")[0], "j-selected");
        this.fK2x = a8i.H9y(this.o9f, "j-item");
        a8i.ba0x(this.bee9V, "display", "block")
    };
    b9i.Tr5w = function () {
        var tW7P = a8i.H9y(this.o9f, "j-receiver") || [];
        var ik3x = [];
        for (var i = 0; i < tW7P.length; i++) {
            ik3x.push(a8i.gO2x(tW7P[i], "data-id"))
        }
        return ik3x
    };
    b9i.cHR0x = function () {
        var ik3x = this.Tr5w();
        var tW7P = [];
        for (var i = 0; i < ik3x.length; i++) {
            for (var j = 0; j < this.bk0x.length; j++) {
                if (ik3x[i] == this.bk0x[j].userId) tW7P.push(this.bk0x[j])
            }
        }
        return tW7P
    };
    b9i.caN2x = function () {
        this.bdY9P()
    };
    w9n.Gu0x.J9A = function (e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n9e.oO5T.J9A({title: "登录"});
            return
        }
        e9f = e9f || {};
        if (e9f.parent === undefined) e9f.parent = document.body;
        !!this.fj2x && this.fj2x.T0x();
        this.fj2x = this.A9r(e9f)
    };
    w9n.Gu0x.bt0x = function () {
        !!this.fj2x && this.fj2x.T0x()
    };
    w9n.Gu0x.Hf1x = function () {
        return this.pb5g()
    };
    w9n.Gu0x.cHS0x = function () {
        return this.xH8z()
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), l9c = c9h("nm.x"), n9e = c9h("nm.l"),
        b9i, L9C;
    n9e.IB1x = NEJ.C();
    b9i = n9e.IB1x.N9E(n9e.blV1x);
    L9C = n9e.IB1x.cs0x;
    b9i.bl0x = function () {
        var Hi1x;
        var caI2x = function (D9u, K9B) {
            Hi1x = Hi1x || [];
            if (K9B != "18") Hi1x.push({key: K9B, value: D9u})
        };
        return function (e9f) {
            this.bn0x(e9f);
            if (e9f.upwards) {
                a8i.y9p(this.o9f, "m-emts-up")
            } else {
                a8i.x9o(this.o9f, "m-emts-up")
            }
            if (e9f.rightwards) {
                a8i.y9p(this.o9f, "m-emts-right")
            } else {
                a8i.x9o(this.o9f, "m-emts-right")
            }
            if (!Hi1x) {
                var bz0x = l9c.cpD6x();
                k9b.eH1x(bz0x, caI2x)
            }
            var bq0x = Hi1x.length;
            Hi1x.splice(bq0x - 2, 0, {key: "18", value: "186"});
            this.beD9u = Hi1x;
            this.caG2x = !!e9f.autoHide
        }
    }();
    b9i.ch0x = function () {
        this.cf0x = "ntp-portrait"
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.H9y(this.o9f, "j-flag");
        this.bK0x = i9b[0];
        this.caF2x = i9b[1];
        this.caC2x = i9b[2];
        this.caB2x = i9b[3];
        h9c.s9j(this.bK0x, "click", this.yK8C.f9e(this));
        h9c.s9j(this.caF2x, "click", this.Hp1x.f9e(this, 1));
        h9c.s9j(this.caB2x, "click", this.Hp1x.f9e(this, 2))
    };
    b9i.bfw9n = function (r9i) {
        this.beF9w = r9i;
        var bi0x = (r9i - 1) * 50;
        var i9b = this.beD9u.slice(bi0x, Math.min(bi0x + 50, this.beD9u.length));
        this.bK0x.innerHTML = a8i.cd0x("jst-portrait", {plist: i9b}, {purl: l9c.bQn9e});
        this.caC2x.innerText = r9i + "/" + Math.ceil(this.beD9u.length / 50)
    };
    b9i.Hp1x = function (r9i) {
        var caz2x = Math.ceil(this.beD9u.length / 50);
        if (r9i == 1 && this.beF9w == 1 || r9i == 2 && this.beF9w == caz2x) return;
        r9i == 1 ? this.bfw9n(this.beF9w - 1) : this.bfw9n(this.beF9w + 1)
    };
    b9i.yK8C = function (d9g) {
        var F9w = h9c.W0x(d9g, "d:text");
        if (!F9w) return;
        var d9g = {url: a8i.t9k(F9w, "url"), text: a8i.t9k(F9w, "text")};
        this.z9q("onselect", d9g);
        if (this.caG2x && !d9g.stopped) {
            this.bt0x()
        }
    };
    b9i.J9A = function () {
        L9C.J9A.call(this);
        this.bfw9n(1)
    }
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), k9b = c9h("nej.u"), dw1x = c9h("nej.p"), be0x = c9h("nej.h"),
        I9z = c9h("nej.ut"), kp3x = /^[#?]+/, Fi0x = /#(.*?)$/, yl8d = window,
        bfB9s = !history.pushState || dw1x.In1x.android || !history.auto;
    var beH9y = function (X0x, bfE9v) {
        yl8d.history[!bfE9v ? "pushState" : "replaceState"](null, document.title, X0x)
    };
    var beM9D = function () {
        return location.parse(yl8d.location.href)
    };
    beH9y = beH9y.eG1x(function (d9g) {
        if (!bfB9s) return;
        var bf0x = d9g.args;
        d9g.stopped = !0;
        X0x = bf0x[0].replace(kp3x, "");
        !bf0x[1] ? yl8d.location.hash = X0x : yl8d.location.replace("#" + X0x)
    });
    beM9D = beM9D.eG1x(function (d9g) {
        if (!bfB9s) return;
        d9g.stopped = !0;
        var dR1x = Fi0x.test(yl8d.location.href) ? RegExp.$1 : "";
        d9g.value = location.parse(dR1x.replace(kp3x, ""))
    });
    location.redirect = function (X0x, bfE9v) {
        beH9y(X0x, bfE9v);
        return this
    };
    location.active = function () {
        var ei1x, X0x, jC3x, da1x, SA5F;
        var bfG9x = function (hr2x) {
            if (!!da1x) {
                da1x = !1;
                return
            }
            var d9g = {oldValue: jC3x, newValue: beM9D()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h9c.z9q(location, "beforeurlchange", d9g);
                if (d9g.stopped) {
                    if (!!jC3x) {
                        da1x = !0;
                        beH9y(jC3x.href, !0)
                    }
                    return
                }
            }
            X0x = yl8d.location.href;
            jC3x = d9g.newValue;
            h9c.z9q(location, "urlchange", jC3x);
            be0x.bic0x(jC3x.href)
        };
        var bKo7h = function () {
            if (X0x != yl8d.location.href) bfG9x();
            ei1x = requestAnimationFrame(bKo7h)
        };
        return function (bJ0x) {
            if (!!SA5F) return this;
            SA5F = !0;
            yl8d = bJ0x || window;
            if (bfB9s && "onhashchange" in window && dw1x.na4e.trident2) {
                h9c.s9j(yl8d, "hashchange", bfG9x);
                bfG9x()
            } else if (!ei1x) {
                ei1x = requestAnimationFrame(bKo7h)
            }
            return this
        }
    }();
    location.parse = function () {
        var gF2x = /^https?:\/\/.*?\//i, kp3x = /[?#]/;
        return function (X0x) {
            var m9d = {href: X0x};
            X0x = (X0x || "").replace(gF2x, "/").split(kp3x);
            var cz0x = 1;
            if (X0x[0] == "/" && (X0x[1] || "").indexOf("/") == 0) cz0x = 2;
            m9d.path = X0x.splice(0, cz0x).join("?");
            m9d.query = k9b.ht2x(X0x.join("&"));
            return m9d
        }
    }();
    location.same = function (X0x) {
        return beM9D().href == X0x
    };
    I9z.fJ2x.A9r({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), gr2x = c9h("nm.ut");
    gr2x.vz7s = function (es1x) {
        var hc2x = {text: "", start: 0, end: 0};
        if (es1x.setSelectionRange) {
            hc2x.start = es1x.selectionStart;
            hc2x.end = es1x.selectionEnd;
            hc2x.text = hc2x.start != hc2x.end ? es1x.value.substring(hc2x.start, hc2x.end) : ""
        } else if (document.selection) {
            var i, beX9O = document.selection.createRange(), yM8E = document.body.createTextRange();
            yM8E.moveToElementText(es1x);
            hc2x.text = beX9O.text;
            hc2x.bookmark = beX9O.getBookmark();
            for (i = 0; yM8E.compareEndPoints("StartToStart", beX9O) < 0 && beX9O.moveStart("character", -1) !== 0; i++) {
                if (es1x.value.charAt(i) == "\n") {
                    i++
                }
            }
            hc2x.start = i;
            hc2x.end = hc2x.text.length + hc2x.start
        }
        return hc2x
    };
    gr2x.beY9P = function (es1x, hc2x) {
        var yM8E;
        if (!hc2x) {
            hc2x = {text: "", start: 0, end: 0}
        }
        es1x.focus();
        if (es1x.setSelectionRange) {
            es1x.setSelectionRange(hc2x.start, hc2x.end)
        } else if (es1x.createTextRange) {
            yM8E = es1x.createTextRange();
            if (es1x.value.length === hc2x.start) {
                yM8E.collapse(false);
                yM8E.select()
            } else {
                yM8E.moveToBookmark(hc2x.bookmark);
                yM8E.select()
            }
        }
    };
    gr2x.Is1x = function (es1x, hc2x, cJ0x) {
        var hc2x = hc2x || {text: "", start: 0, end: 0};
        var bfT9K, bKk7d, yM8E, UF6z, bKj7c, bKh7a, HF1x;
        this.beY9P(es1x, hc2x);
        if (es1x.setSelectionRange) {
            bfT9K = es1x.value;
            bKk7d = bfT9K.substring(0, hc2x.start) + cJ0x + bfT9K.substring(hc2x.end);
            bKj7c = bKh7a = hc2x.start + cJ0x.length;
            HF1x = es1x.scrollTop;
            es1x.value = bKk7d;
            if (es1x.scrollTop != HF1x) {
                es1x.scrollTop = HF1x
            }
            es1x.setSelectionRange(bKj7c, bKh7a)
        } else if (es1x.createTextRange) {
            UF6z = document.selection.createRange();
            UF6z.text = cJ0x;
            UF6z.setEndPoint("StartToEnd", UF6z);
            UF6z.select()
        }
        h9c.z9q(es1x, "keyup")
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), dw1x = c9h("nej.p"), k9b = c9h("nej.u"),
        cb0x = c9h("nej.ut"), w9n = c9h("nm.w"), gr2x = c9h("nm.ut"), b9i;
    w9n.bJZ7S = NEJ.C();
    b9i = w9n.bJZ7S.N9E(cb0x.cK0x);
    b9i.cy0x = function (e9f) {
        this.cE0x(e9f)
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.gp2x = e9f.txt;
        this.HI1x = e9f.sgtsContainer;
        this.bJX7Q = e9f.sgtsList[0];
        this.bfd9U = e9f.sgtsItem;
        this.oA5F = e9f.rangeData;
        this.Io1x = e9f.atIndex;
        a8i.y9p(this.bfd9U[0], "selected-item");
        this.Pw4A()
    };
    b9i.bC0x = function () {
        this.bF0x();
        h9c.mI4M(document.body, "keyup", this.bJT7M.f9e(this));
        h9c.mI4M(document.body, "click", this.bJQ7J.f9e(this))
    };
    b9i.Pw4A = function () {
        this.bX0x([[document.body, "keyup", this.bJT7M.f9e(this)], [document.body, "click", this.bJQ7J.f9e(this)], [this.gp2x, "keydown", this.bJO7H.f9e(this)], [this.gp2x, "keypress", this.bJO7H.f9e(this)], [this.bJX7Q, "click", this.bJK7D.f9e(this)], [this.bJX7Q, "mouseover", this.HQ1x.f9e(this)]])
    };
    b9i.HQ1x = function (d9g) {
        var bP0x = h9c.W0x(d9g);
        var p9g = a8i.H9y(this.HI1x, "selected-item");
        if (a8i.bE0x(bP0x, "j-sgt")) {
            a8i.x9o(p9g[0], "selected-item");
            a8i.y9p(bP0x, "selected-item")
        }
    };
    b9i.bJT7M = function (d9g) {
        var p9g = a8i.H9y(this.HI1x, "selected-item");
        var bq0x = this.bfd9U.length;
        var ka3x = d9g.keyCode || d9g.which;
        var r9i, j9a;
        switch (ka3x) {
            case 38:
                r9i = a8i.gO2x(p9g[0], "data-index") - 1 < 0 ? bq0x - 1 : a8i.gO2x(p9g[0], "data-index") - 1;
                a8i.x9o(p9g[0], "selected-item");
                a8i.y9p(this.bfd9U[r9i], "selected-item");
                break;
            case 40:
                r9i = parseInt(a8i.gO2x(p9g[0], "data-index")) + 1 >= bq0x ? 0 : parseInt(a8i.gO2x(p9g[0], "data-index")) + 1;
                a8i.x9o(p9g[0], "selected-item");
                a8i.y9p(this.bfd9U[r9i], "selected-item");
                break;
            case 13:
                this.bJK7D(d9g);
                break;
            case 27:
                this.pb5g();
                break;
            case 32:
                var bo0x = this.gp2x.value;
                var r9i = gr2x.vz7s(this.gp2x);
                if (bo0x.charAt(r9i.start - 1) !== " ") return;
                this.pb5g();
                break
        }
    };
    b9i.bJO7H = function (d9g) {
        var ka3x = d9g.keyCode || d9g.which;
        if (ka3x === 13 || ka3x === 38 || ka3x === 40) {
            h9c.cn0x(d9g);
            d9g.keyCode = 0;
            d9g.which = 0;
            d9g.returnvalue = false
        }
    };
    b9i.bJQ7J = function (d9g) {
        var bP0x = d9g.target || d9g.srcElement;
        if (bP0x === this.gp2x) return;
        this.pb5g()
    };
    b9i.bJK7D = function (d9g) {
        h9c.bh0x(d9g);
        var p9g = a8i.H9y(this.HI1x, "selected-item")[0];
        var sf6Z = d9g.target || d9g.srcElement;
        var u9l = d9g.type;
        if (a8i.bE0x(sf6Z, "lst")) return;
        if (u9l == "click") {
            a8i.x9o(p9g, "selected-item");
            a8i.y9p(sf6Z, "selected-item")
        } else sf6Z = p9g;
        var j9a = sf6Z.innerHTML + " ";
        this.pb5g();
        var hc2x = this.oA5F;
        hc2x.start = this.Io1x + 1;
        if (dw1x.dt1x.browser == "ie" && dw1x.dt1x.version < "9.0") {
            this.gp2x.value = this.gp2x.value.substring(0, hc2x.start) + this.gp2x.value.substring(hc2x.end, this.gp2x.value.length);
            hc2x.end = hc2x.start
        }
        gr2x.Is1x(this.gp2x, hc2x, j9a);
        h9c.z9q(this.gp2x, "keyup")
    };
    b9i.pb5g = function (d9g) {
        if (!!this.HI1x) a8i.ba0x(this.HI1x, "display", "none");
        this.T0x()
    };
    b9i.xH8z = function (d9g) {
        if (!!this.HI1x) a8i.ba0x(this.HI1x, "display", "block")
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), w9n = c9h("nm.w"),
        cb0x = c9h("nej.ut"), bD0x = c9h("nej.ui"), b9i;
    var bZI2x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bZH2x = a8i.eC1x("m-wgt-atlist");
    var iT3x = a8i.th6b(bZI2x);
    w9n.bJJ7C = NEJ.C();
    b9i = w9n.bJJ7C.N9E(bD0x.el1x);
    b9i.cy0x = function (e9f) {
        this.fN2x = {};
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.fN2x.txt = a8i.B9s(e9f.target);
        this.fN2x.data = e9f.data;
        this.fN2x.offset = e9f.offset;
        this.fN2x.rangeData = e9f.rangeData;
        this.fN2x.atIndex = e9f.atIndex;
        this.bZB2x(e9f);
        this.bn0x(e9f);
        this.fN2x.sgtsContainer = this.o9f;
        this.fN2x.sgtsList = a8i.H9y(this.o9f, "lst");
        this.fN2x.sgtsItem = a8i.H9y(this.o9f, "f-thide");
        this.Ti5n(e9f);
        this.bZA2x = w9n.bJZ7S.A9r(this.fN2x)
    };
    b9i.bC0x = function (e9f) {
        this.bF0x();
        this.bZA2x.T0x()
    };
    b9i.ch0x = function () {
        this.lX4b = iT3x
    };
    b9i.bW0x = function () {
        this.ci0x()
    };
    b9i.bZB2x = function (e9f) {
        this.o9f = a8i.dD1x(a8i.jj3x(a8i.cd0x(bZH2x, e9f.data)))
    };
    b9i.Ti5n = function (e9f) {
        var bJH7A = a8i.H9y(this.o9f, "selected-item")[0];
        if (bJH7A) a8i.x9o(bJH7A, "selected-item");
        var cY1x = e9f.offset.x + "px";
        var hz2x = e9f.offset.y + "px";
        a8i.ba0x(this.o9f, "left", cY1x);
        a8i.ba0x(this.o9f, "top", hz2x)
    }
})();
(function () {
    var c9h = NEJ.P, v9m = c9h("nej.j"), gr2x = c9h("nm.ut");
    gr2x.bJG7z = function (bo0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var df1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var KB2x = bo0x.match(df1x) || [];
        for (var bc0x = 0; bc0x < KB2x.length; bc0x++) {
            KB2x[bc0x] = KB2x[bc0x].split("@")[1]
        }
        KB2x = KB2x.reverse();
        var ik3x = GUser.userId;
        var bZw2x = v9m.tG6A("mentioners" + ik3x) || [];
        var kc3x = KB2x.concat(bZw2x);
        if (kc3x.length > 10) kc3x = kc3x.slice(0, 10);
        v9m.vo7h("mentioners" + ik3x, kc3x)
    };
    gr2x.bZp2x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var ik3x = GUser.userId;
        return v9m.tG6A("mentioners" + ik3x) || []
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), dw1x = c9h("nej.p"), v9m = c9h("nej.j"),
        k9b = c9h("nej.u"), cb0x = c9h("nej.ut"), w9n = c9h("nm.w"), gr2x = c9h("nm.ut"), l9c = c9h("nm.x"), b9i;
    var FullscreenApi = l9c.DM0x || {};
    w9n.bJD7w = NEJ.C();
    b9i = w9n.bJD7w.N9E(cb0x.cK0x);
    b9i.cy0x = function (e9f) {
        this.cE0x(e9f);
        this.bJC7v()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.gp2x = e9f.txt;
        this.o9f = e9f.body;
        this.bJA7t = e9f.before;
        this.OP4T = e9f.flag;
        this.bZi2x = e9f.after;
        this.rv5A = [];
        if (dw1x.dt1x.browser != "ie") {
            setTimeout(function () {
                this.ml4p()
            }.f9e(this), 0)
        }
        this.Pw4A()
    };
    b9i.bC0x = function () {
        this.bF0x();
        if (this.vk7d) this.vk7d.T0x();
        delete this.vk7d
    };
    b9i.Pw4A = function () {
        this.bX0x([[this.gp2x, "keyup", this.bJx7q.f9e(this, this.gp2x)], [this.gp2x, "click", this.bJx7q.f9e(this, this.gp2x)], [this.gp2x, "focus", this.ml4p.f9e(this)]])
    };
    b9i.ml4p = function (d9g) {
        this.oA5F = gr2x.vz7s(this.gp2x)
    };
    b9i.bJC7v = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do1x = window.GUser.userId;
        var X0x = "/api/user/getfollows/" + do1x;
        var gm2x = v9m.bm0x(X0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j9a) {
                window.GFollowers = JSON.parse(j9a).follow
            }.f9e(this),
            onerror: function (j9a) {
            },
            onbeforerequest: function (j9a) {
            }
        })
    };
    b9i.bJw7p = function (index) {
        var D9u = this.gp2x.value, bi0x, bgQ0x, bgR0x, Vl6f;
        this.bJA7t.innerHTML = k9b.dG1x(D9u.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mr4v = a8i.H9y(this.bJA7t, "j-test");
        for (var bc0x = 0; bc0x < mr4v.length; bc0x++) {
            mr4v[bc0x].innerText = " "
        }
        this.OP4T.innerHTML = D9u.charAt(index);
        this.bZi2x.innerHTML = k9b.dG1x(D9u.substr(index + 1, D9u.length));
        Vl6f = parseInt(a8i.dh1x(this.gp2x, "lineHeight"));
        a8i.ba0x(this.o9f, "display", "block");
        bgQ0x = a8i.hS2x(this.OP4T, this.o9f);
        bgR0x = a8i.hS2x(this.gp2x);
        a8i.ba0x(this.o9f, "display", "none");
        var cY1x = bgQ0x.x + bgR0x.x;
        var hz2x = bgQ0x.y + bgR0x.y + Vl6f;
        bi0x = {x: cY1x, y: hz2x};
        this.bYZ2x(bi0x)
    };
    b9i.bJx7q = function (es1x, d9g) {
        h9c.cn0x(d9g);
        var es1x = es1x;
        var D9u = es1x.value;
        var bq0x = D9u.length;
        var r9i = gr2x.vz7s(es1x).start;
        var bJu7n = 0;
        var ka3x = d9g.keyCode || d9g.which;
        var kc3x;
        this.oA5F = gr2x.vz7s(es1x);
        var bJq7j = false;
        for (var i = 1; i < 20; i++) {
            kc3x = r9i - i;
            if (D9u.charAt(kc3x) === " ") break;
            if (D9u.charAt(kc3x) === "@") {
                bJq7j = true;
                this.Io1x = bJu7n = kc3x;
                break
            }
        }
        if (bJq7j && d9g.shiftKey === false && ka3x !== 38 && ka3x !== 40) {
            if (ka3x !== 27 && ka3x !== 13) {
                this.vk7d ? this.vk7d.T0x() : null;
                this.bJw7p(bJu7n)
            }
        } else if (ka3x !== 38 && ka3x !== 40 && d9g.keyCode !== 32) {
            this.vk7d ? this.vk7d.T0x() : null
        }
    };
    b9i.bYZ2x = function (bi0x) {
        var bi0x = bi0x;
        var j9a = this.vv7o();
        var e9f = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi0x,
            data: j9a,
            target: this.gp2x,
            rangeData: this.oA5F,
            atIndex: this.Io1x
        };
        this.vk7d ? this.vk7d.T0x() : null;
        this.vk7d = w9n.bJJ7C.A9r(e9f)
    };
    b9i.vv7o = function () {
        var bYI2x = gr2x.vz7s(this.gp2x).start;
        var bYH2x = this.Io1x + 1;
        var bJm7f = gr2x.bZp2x() || [];
        var bJl7e = [];
        var bv0x = this.gp2x.value.substring(bYH2x, bYI2x).toLowerCase();
        bv0x = bv0x.replace(/\[/g, "\\[");
        bv0x = bv0x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.rv5A = window.GFollowers[0] ? window.GFollowers : []
        } else this.rv5A = [];
        if (!this.rv5A[0]) this.bJC7v();
        for (var bc0x = 0; bc0x < bJm7f.length; bc0x++) {
            for (var v9m = 0; v9m < this.rv5A.length; v9m++) {
                if (this.rv5A[v9m].nickname == bJm7f[bc0x]) bJl7e.push(this.rv5A[v9m])
            }
        }
        this.rv5A = k9b.crf6Z(this.rv5A, bJl7e, {union: true, begin: true});
        var bYC2x = this.rv5A.length;
        var bfn9e = [];
        var Ry5D, Ro5t;
        if (!this.rv5A[0]) return {suggests: bfn9e};
        for (var i = 0; i < bYC2x; i++) {
            Ry5D = this.rv5A[i].nickname.toLowerCase().search(bv0x);
            Ro5t = this.rv5A[i].py ? this.rv5A[i].py.toLowerCase().search(bv0x) : -1;
            if (Ry5D !== -1 || Ro5t != -1) bfn9e.push(this.rv5A[i]);
            if (bfn9e.length === 10) break
        }
        return {suggests: bfn9e}
    };
    b9i.PB4F = function () {
        var hc2x = this.oA5F || {text: "", start: 0, end: 0};
        h9c.z9q(this.gp2x, "focus");
        gr2x.Is1x(this.gp2x, hc2x, "@");
        this.oA5F = gr2x.vz7s(this.gp2x);
        this.Io1x = hc2x.start;
        this.bJw7p(this.Io1x)
    };
    b9i.Hf1x = function () {
        if (this.vk7d) this.vk7d.T0x()
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), w9n = c9h("nm.w"),
        cb0x = c9h("nej.ut"), bD0x = c9h("nej.ui"), b9i;
    var bYB2x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bYz2x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gg2x = a8i.jj3x(bYz2x);
    var iT3x = a8i.th6b(bYB2x);
    w9n.Uo6i = NEJ.C();
    b9i = w9n.Uo6i.N9E(bD0x.el1x);
    b9i.cy0x = function (e9f) {
        this.fN2x = {};
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f);
        this.fN2x.txt = a8i.B9s(e9f.target);
        this.Ne2x();
        this.US6M = w9n.bJD7w.A9r(this.fN2x)
    };
    b9i.bC0x = function (e9f) {
        this.bF0x();
        this.US6M.T0x()
    };
    b9i.ch0x = function () {
        this.cf0x = gg2x;
        this.lX4b = iT3x
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.dk1x(a8i.B9s(this.o9f));
        this.fN2x.body = this.o9f;
        this.fN2x.before = i9b[0];
        this.fN2x.flag = i9b[1];
        this.fN2x.after = i9b[2]
    };
    b9i.Ne2x = function () {
        var px5C = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < px5C.length; i++) {
            if (px5C[i] === "width" && a8i.dh1x(this.fN2x.txt, px5C[i]) == "100%") {
                var bYy2x = this.fN2x.txt.offsetWidth;
                if (!bYy2x) {
                    setTimeout(function () {
                        a8i.ba0x(this.o9f, px5C[i], this.fN2x.txt.offsetWidth + "px")
                    }.f9e(this), 300)
                } else {
                    a8i.ba0x(this.o9f, px5C[i], this.fN2x.txt.offsetWidth + "px")
                }
                continue
            }
            a8i.ba0x(this.o9f, px5C[i], a8i.dh1x(this.fN2x.txt, px5C[i]))
        }
    };
    b9i.PB4F = function () {
        this.US6M.PB4F()
    };
    b9i.Hf1x = function () {
        this.US6M.Hf1x()
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, fz2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), I9z = c9h("nej.ut"), ld3x = c9h("nm.c"), R9I = {}, b9i;
    if (!!ld3x.bht0x) return;
    ld3x.bht0x = NEJ.C();
    b9i = ld3x.bht0x.N9E(I9z.cK0x);
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f)
    };
    b9i.bC0x = function () {
        this.bF0x()
    };
    b9i.HT1x = function (fl2x, cA0x, bfk9b) {
        if (R9I[fl2x]) {
            this.gw2x("register commonJST[" + fl2x + "] duplicate");
            return
        }
        if (!k9b.gJ2x(cA0x)) {
            cA0x = ctl.comJST.bYq2x(fl2x, cA0x, bfk9b)
        }
        R9I[fl2x] = cA0x
    };
    b9i.bYo2x = function (bfi9Z) {
        if (k9b.eJ1x(bfi9Z)) {
            k9b.bd0x(bfi9Z, function (p9g) {
                ctl.comJST.HT1x.apply(this, p9g)
            }, this)
        } else if (k9b.lv4z(bfi9Z)) {
            k9b.eH1x(bfi9Z, function (fu2x, K9B) {
                ctl.comJST.HT1x(K9B, fu2x)
            })
        }
    };
    b9i.bYq2x = function (fl2x, vY7R, bfk9b) {
        vY7R = vY7R || {};
        NEJ.X(vY7R, {comJST: this.mZ4d});
        if (vY7R.resetDataName && !k9b.eJ1x(vY7R.resetDataName)) {
            vY7R.resetDataName = [vY7R.resetDataName]
        }
        return function () {
            var j9a = arguments[0], jU3x = arguments[1];
            if (vY7R.resetDataName) {
                var kc3x = {};
                for (var i = 0, ii = vY7R.resetDataName.length; i < ii; i++) {
                    kc3x[vY7R.resetDataName[i]] = arguments[i]
                }
                j9a = kc3x;
                jU3x = arguments[ii]
            }
            NEJ.X(j9a, vY7R, dZ1x);
            if (bfk9b) {
                jU3x = jU3x || {};
                NEJ.X(jU3x, bfk9b)
            }
            return a8i.cd0x(fl2x, j9a, jU3x)
        }
    };
    b9i.mZ4d = function (fl2x) {
        if (!R9I[fl2x]) {
            this.gw2x("commonJST[" + fl2x + "] is unregister");
            return ""
        } else {
            return R9I[fl2x].apply(null, fz2x.slice.call(arguments, 1))
        }
    };
    b9i.dump = function () {
        return R9I
    };
    b9i.gw2x = function (bYm2x) {
        if (console && console.log) {
            console.log(bYm2x)
        }
    };
    var dZ1x = function (fu2x, K9B) {
        return K9B == "resetDataName"
    };
    c9h("ctl").comJST = ld3x.bht0x.gf2x();
    a8i.cCy9p({comJST: c9h("ctl").comJST.mZ4d})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, br0x = NEJ.F, fz2x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), I9z = c9h("nej.ut"), ld3x = c9h("nm.c"), l9c = c9h("nm.x"), R9I = {}, b9i;
    if (!!ld3x.bhH0x) return;
    ld3x.bhH0x = NEJ.C();
    b9i = ld3x.bhH0x.N9E(I9z.cK0x);
    b9i.cy0x = function () {
        this.cE0x();
        var e9f = {
            "com-mv-artists": function (fO2x, eb1x, QY5d, bhJ0x) {
                return a8i.cd0x("com-mv-artists", {
                    artists: fO2x,
                    clazz: eb1x,
                    boxClazz: bhJ0x,
                    mark: QY5d || function (cN0x) {
                        return cN0x
                    },
                    escape: k9b.dG1x,
                    comJST: ctl.comJST.mZ4d
                })
            },
            "com-album-artists": function (fO2x, eb1x, QY5d, bhJ0x) {
                return a8i.cd0x("com-album-artists", {
                    artists: fO2x,
                    clazz: eb1x,
                    boxClazz: bhJ0x,
                    mark: QY5d || function (cN0x) {
                        return cN0x
                    },
                    escape: k9b.dG1x,
                    comJST: ctl.comJST.mZ4d
                })
            },
            "com-artists-title": {resetDataName: ["artists"], escape: k9b.dG1x},
            "com-user-type": function (dp1x, eb1x, lL4P, xi8a, bJf7Y) {
                return a8i.cd0x("com-user-type", {
                    x: dp1x,
                    clazz: eb1x || "",
                    clazz2: typeof bJf7Y == "undefined" ? "icn" : bJf7Y,
                    before: lL4P || "",
                    after: xi8a || "",
                    isEmptyObject: l9c.bPu8m
                })
            }
        };
        for (var C9t in e9f) {
            ctl.comJST.HT1x(C9t, e9f[C9t])
        }
    };
    b9i.bl0x = function (e9f) {
        this.bn0x(e9f)
    };
    b9i.bC0x = function () {
        this.bF0x()
    };
    c9h("ctl").comJSTUtil = ld3x.bhH0x.gf2x()
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, a8i = c9h("nej.e"), dw1x = c9h("nej.p"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        I9z = c9h("nej.ut"), v9m = c9h("nej.j"), w9n = c9h("nm.w"), gr2x = c9h("nm.ut"), q9h = c9h("nm.d"),
        l9c = c9h("nm.x"), n9e = c9h("nm.l"), bhM0x = [2, 3], ed1x = ["sn", "db"], b9i, L9C, bYh2x = {
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
        }, bfc9T = {
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
        }, bJd7W = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        }, bYf2x = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, HD1x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        }, FullscreenApi = l9c.DM0x || {};
    n9e.oC5H = NEJ.C();
    b9i = n9e.oC5H.N9E(n9e.eo1x);
    L9C = n9e.oC5H.cs0x;
    b9i.bl0x = function (e9f) {
        if (e9f.onclose === undefined) {
            e9f.onclose = this.bJc7V.f9e(this)
        }
        this.bn0x(e9f);
        this.zt8l = e9f.isPub;
        this.jD3x = e9f.rid || -1;
        this.ew1x = e9f.type || -1;
        this.bib0x = e9f.purl;
        this.NF3x = e9f.name || "";
        this.Oc3x = e9f.author || "";
        this.bif0x = e9f.authors || "";
        this.beW9N = e9f.actId;
        this.beU9L = e9f.actName;
        this.bJb7U = e9f.title;
        this.beS9J = {};
        this.bXX1x = e9f.mesg || "";
        this.bXT1x = e9f.placeholder || "说点什么吧";
        this.bio0x = e9f.hideTip;
        this.bXS1x = e9f.videoJumpUrl;
        var i9b, eW2x = +(new Date);
        try {
            i9b = top.localCache.B9s("user") || {}
        } catch (e) {
            i9b = {}
        }
        for (var i = 0, i9b = i9b.bindings || [], cG0x; i < i9b.length; ++i) {
            cG0x = !i9b[i].tokenJsonStr ? null : JSON.parse(i9b[i].tokenJsonStr);
            if (!cG0x || cG0x.expires_in === undefined) continue;
            var beO9F = parseInt(cG0x.expires_in), beN9E = parseInt(i9b[i].refreshTime),
                bXR1x = (beO9F + beN9E) * 1e3 - 5 * 60 * 1e3;
            if (bXR1x > eW2x) this.beS9J[i9b[i].type] = !0
        }
        this.xm8e = w9n.Gu0x.A9r({parent: this.beK9B, err: this.bIR7K});
        if (this.hC2x) {
            this.hC2x.T0x()
        }
        this.hC2x = w9n.Uo6i.A9r({parent: document.body, target: this.ez1x});
        if (this.ew1x == 24 || this.ew1x == 21 || this.ew1x == 41 || this.Hq1x()) {
            this.yP8H.style.display = "none"
        } else {
            this.yP8H.style.display = "";
            this.oK5P = w9n.bpg2x.A9r({
                parent: this.biI0x,
                button: this.yP8H,
                onstartupload: this.bIQ7J.f9e(this, true),
                onfinishupload: this.bIQ7J.f9e(this, false)
            })
        }
        if (this.Hq1x()) {
            this.pJ5O.innerText = "";
            a8i.y9p(this.pJ5O, "info-video");
            a8i.y9p(this.biN0x, "f-hide")
        } else {
            a8i.x9o(this.biN0x, "f-hide")
        }
    };
    b9i.bC0x = function () {
        this.bF0x();
        if (this.xm8e) {
            this.xm8e.T0x();
            delete this.xm8e
        }
        if (this.hC2x) {
            this.hC2x.T0x();
            delete this.hC2x
        }
        if (this.oK5P) {
            this.oK5P.T0x();
            delete this.oK5P
        }
        if (this.my4C) {
            this.my4C.T0x();
            delete this.my4C
        }
    };
    b9i.ch0x = function () {
        this.cf0x = "m-wgt-sharewin"
    };
    b9i.bW0x = function () {
        this.ci0x();
        this.bIP7I = a8i.dk1x(this.o9f)[0];
        var bu0x = a8i.H9y(this.o9f, "j-flag");
        this.ra5f = bu0x.shift();
        this.bIR7K = bu0x.shift();
        this.beK9B = bu0x.shift();
        this.ez1x = bu0x.shift();
        this.pJ5O = bu0x.shift();
        this.biS0x = bu0x.shift();
        this.bXL1x = bu0x.shift();
        this.yP8H = bu0x.shift();
        this.cu0x = bu0x.shift();
        this.biI0x = bu0x.shift();
        this.CK9B = bu0x.shift();
        this.cHX0x = bu0x.shift();
        this.biN0x = bu0x.shift();
        this.ek1x = bu0x.shift();
        this.bez9q = a8i.H9y(this.biN0x, "j-t");
        this.BY9P = I9z.EQ0x.A9r({list: a8i.dk1x(this.ra5f), selected: "z-slt", onchange: this.biY0x.f9e(this)});
        if (dw1x.dt1x.browser == "ie" && dw1x.dt1x.version < "8.0") {
            a8i.ba0x(this.beK9B, "position", "relative");
            a8i.ba0x(this.beK9B, "zIndex", "10")
        }
        h9c.s9j(window, "snsbind", this.Sd5i.f9e(this));
        h9c.s9j(this.ez1x, "input", this.fP2x.f9e(this));
        h9c.s9j(this.ez1x, "keyup", this.vj7c.f9e(this));
        h9c.s9j(this.o9f, "click", this.cL0x.f9e(this));
        this.S0x = q9h.blC1x.A9r();
        this.S0x.s9j("onshareall", this.bev9m.f9e(this, 0));
        this.S0x.s9j("onshareerror", this.iP3x.f9e(this));
        this.S0x.s9j("onshareprivate", this.bev9m.f9e(this, 1));
        this.ber9i = q9h.zd8V.A9r();
        this.gw2x = q9h.hT2x.A9r();
        try {
            this.Sq5v = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Sq5v) {
            this.Sq5v = HD1x;
            v9m.bm0x("/api/event/user/permission", {
                type: "json", onload: function (d9g) {
                    if (d9g.code == 200) {
                        this.Sq5v = NEJ.EX(HD1x, d9g)
                    }
                }.f9e(this)
            })
        }
        l9c.nP4T()
    };
    b9i.biY0x = function (d9g) {
        d9g.index == 0 ? a8i.x9o(this.bIP7I, "m-plshare") : a8i.y9p(this.bIP7I, "m-plshare");
        this.beK9B.style.display = d9g.index == 0 ? "none" : "";
        this.bXL1x.style.display = d9g.index == 0 ? "" : "none";
        this.yP8H.style.display = d9g.index == 0 ? "" : "none";
        if (this.ew1x == 24 || this.ew1x == 21) {
            this.yP8H.style.display = "none"
        }
        this.bIR7K.style.display = "none";
        this.ez1x.value = "";
        this.cc0x();
        this.GX1x();
        if (d9g.index == 0) {
            var cF0x = a8i.dh1x(this.ez1x, "width");
            if (cF0x == "auto" || !cF0x) {
                return
            } else {
                if (this.hC2x) {
                    this.hC2x.T0x()
                }
                this.hC2x = w9n.Uo6i.A9r({parent: document.body, target: this.ez1x})
            }
            this.biI0x.style.display = ""
        } else {
            if (this.hC2x) {
                this.hC2x.T0x();
                delete this.hC2x
            }
            this.biI0x.style.display = "none"
        }
    };
    b9i.cL0x = function (d9g) {
        var g9d = h9c.W0x(d9g, "d:action");
        if (!g9d) return;
        if (a8i.t9k(g9d, "action") == "search") {
            h9c.cn0x(d9g)
        } else if (a8i.t9k(g9d, "default") === undefined) {
            h9c.cn0x(d9g)
        }
        switch (a8i.t9k(g9d, "action")) {
            case"txt":
                this.ml4p();
                break;
            case"search":
                if (this.Hq1x()) {
                    top.location.href = this.bXS1x
                } else if (this.zt8l && this.ew1x != 24) {
                    if (this.my4C) {
                        this.my4C.T0x()
                    }
                    this.my4C = w9n.bux3x.A9r({
                        parent: this.o9f.parentNode,
                        onfinish: this.bje0x.f9e(this),
                        oncancel: this.bXJ1x.f9e(this)
                    });
                    this.bjg0x = true;
                    this.o9f.style.display = "none";
                    this.GV1x(this.jD3x < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case"at":
                h9c.tS7L(d9g);
                !!this.hp2x && this.hp2x.bt0x();
                this.hC2x.PB4F();
                this.gi2x();
                break;
            case"emot":
                h9c.tS7L(d9g);
                !!this.hC2x && this.hC2x.Hf1x();
                if (!this.hp2x) {
                    this.hp2x = n9e.IB1x.A9r({parent: this.biS0x});
                    this.hp2x.s9j("onselect", this.yK8C.f9e(this))
                }
                this.hp2x.J9A();
                break;
            case"upload":
                break;
            case"sns":
                h9c.bh0x(d9g);
                var bjj0x, bv0x, u9l = a8i.t9k(g9d, "type");
                if (!this.beS9J[u9l]) {
                    bjj0x = g9d.href.split("?");
                    bv0x = k9b.ht2x(bjj0x[1]);
                    bv0x["csrf_token"] = v9m.gz2x("__csrf");
                    top.open(bjj0x[0] + "?" + k9b.cD0x(bv0x));
                    return
                }
                var bz0x = {2: "sn", 3: "db", 4: "rr"};
                l9c.BB9s(g9d, "u-slg-" + bz0x[u9l] + "-gray");
                break;
            case"close":
                !!this.hp2x && this.hp2x.bt0x();
                this.bJc7V();
                break;
            case"share":
                h9c.bh0x(d9g);
                if (this.Hq1x()) {
                    if (!a8i.bE0x(g9d, "u-btn2-2-dis")) {
                        this.bXI1x()
                    }
                } else if (a8i.bE0x(g9d, "u-btn2-2-dis")) {
                    if (!this.Sq5v.pubEventWithoutResource && this.jD3x < 0) {
                        this.bXG1x()
                    } else {
                    }
                } else if (this.jD3x < 0 && !this.ez1x.value && this.oK5P && this.oK5P.Rs5x().length == 0) {
                    n9e.Z0x.J9A({type: 2, tip: "请输入内容"})
                } else {
                    this.bXE1x()
                }
                break
        }
    };
    b9i.bXG1x = function () {
        var tZ7S = 0, bjo0x = function () {
            if (tZ7S % 2) {
                a8i.x9o(this.pJ5O, "z-show")
            } else {
                a8i.y9p(this.pJ5O, "z-show")
            }
            tZ7S++;
            if (tZ7S > 5) {
                clearInterval(ei1x)
            }
        }, ei1x;
        return function () {
            tZ7S = 0;
            clearInterval(ei1x);
            ei1x = setInterval(bjo0x.f9e(this), 200)
        }
    }();
    b9i.Sd5i = function (m9d) {
        m9d = m9d.result;
        this.beS9J[m9d.type] = !0;
        var r9i = k9b.dj1x(bhM0x, m9d.type), cj0x = "u-slg-" + ed1x[r9i] + "-gray";
        a8i.x9o(this.bez9q[r9i], cj0x)
    };
    b9i.bje0x = function (bx0x) {
        var j9a = bx0x.data;
        this.jD3x = bx0x.id;
        this.ew1x = bx0x.type;
        this.o9f.style.display = "";
        this.GV1x(this.bJb7U);
        this.my4C && this.my4C.T0x();
        this.bjg0x = false;
        this.bib0x = j9a.picUrl;
        this.NF3x = j9a.title || "";
        this.Oc3x = j9a.author || "";
        this.bif0x = j9a.authors || "";
        this.bXC1x();
        this.ben9e()
    };
    b9i.bXJ1x = function () {
        this.my4C && this.my4C.T0x();
        this.o9f.style.display = "";
        this.GV1x(this.bJb7U);
        this.bjg0x = false;
        this.ben9e()
    };
    b9i.yK8C = function (d9g) {
        var bo0x = "[" + d9g.text + "]";
        gr2x.Is1x(this.ez1x, this.oA5F, bo0x);
        this.gi2x()
    };
    b9i.fP2x = function (d9g) {
        dw1x.dt1x.browser == "ie" && dw1x.dt1x.version < "7.0" ? setTimeout(this.gi2x.f9e(this), 0) : this.gi2x()
    };
    b9i.vj7c = function (d9g) {
        this.ml4p();
        if (d9g.keyCode == 8) this.gi2x()
    };
    b9i.gi2x = function () {
        this.ml4p();
        this.GX1x()
    };
    b9i.GX1x = function () {
        var bq0x = Math.ceil(k9b.fw2x(this.ez1x.value.trim()) / 2);
        this.cu0x.innerText = 140 - bq0x;
        bq0x > 140 ? a8i.fm2x(this.cu0x, "s-fc4", "s-fc6") : a8i.fm2x(this.cu0x, "s-fc6", "s-fc4")
    };
    b9i.bXE1x = function () {
        if (this.cP0x()) return;
        if (k9b.fw2x(this.ez1x.value.trim()) > 280) {
            this.cc0x("字数超过140个字符");
            return
        }
        l9c.sx6r(this.bXA1x.f9e(this))
    };
    b9i.bXA1x = function (cG0x) {
        var u9l = this.BY9P.tx6r(), j9a;
        if (u9l == 0) {
            for (var i = 0, IF1x = []; i < this.bez9q.length; ++i) {
                if (!a8i.bE0x(this.bez9q[i], "u-slg-" + ed1x[i] + "-gray")) IF1x.push(bhM0x[i])
            }
            this.cP0x(!0);
            j9a = {
                id: this.jD3x,
                msg: this.ez1x.value.trim(),
                type: this.bem9d(this.ew1x),
                picUrl: this.bib0x,
                snsTypes: IF1x.join(","),
                isPub: this.zt8l,
                checkToken: cG0x || ""
            };
            if (this.beW9N > 0) {
                j9a.actId = this.beW9N;
                if (this.beU9L) {
                    j9a.msg = "#" + this.beU9L + "#" + j9a.msg
                }
            }
            var nN4R = this.oK5P && this.oK5P.Rs5x();
            if (nN4R && nN4R.length) {
                j9a.pics = nN4R
            }
            this.S0x.cfr3x(j9a)
        } else {
            var tW7P = this.xm8e.Tr5w();
            if (tW7P.length <= 0) {
                this.cc0x("请至少选择一位好友");
                return
            }
            this.S0x.cfq3x({
                data: {
                    id: this.jD3x,
                    msg: this.ez1x.value.trim(),
                    type: this.bem9d(this.ew1x == 41 ? 39 : this.ew1x),
                    userIds: "[" + tW7P.join(",") + "]",
                    checkToken: cG0x || ""
                }
            })
        }
    };
    b9i.bXI1x = function () {
        if (this.cP0x()) {
            return
        }
        this.gw2x.eS2x("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k9b.fw2x(this.ez1x.value.trim()) > 280) {
            this.cc0x("字数超过140个字符");
            return
        }
        l9c.sx6r(this.bXz1x.bind(this))
    };
    b9i.bXz1x = function (cG0x) {
        this.cP0x(!0);
        var j9a = {msg: this.ez1x.value.trim() || "", type: "video", checkToken: cG0x || ""},
            bXv1x = {videoId: this.jD3x};
        if (this.beW9N > 0) {
            j9a.actId = this.beW9N;
            if (this.beU9L) {
                j9a.msg = "#" + this.beU9L + "#" + j9a.msg
            }
        }
        j9a.videoinfo = JSON.stringify(bXv1x);
        this.S0x.cfp3x({data: {videoId: this.jD3x, commit: true}, data2: j9a, snsTypes: ""})
    };
    b9i.bev9m = function (u9l, m9d) {
        this.cP0x(!1);
        this.bt0x();
        if (!this.bio0x) {
            if (this.Hq1x()) {
                n9e.Z0x.J9A({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                n9e.Z0x.J9A({
                    tip: "分享成功" + (m9d.point > 0 ? ' 获得<em class="s-fc6">' + m9d.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h9c.z9q(n9e.oC5H, "sharesuccess", {isPrivate: u9l, rid: this.jD3x, rtype: this.ew1x, data: m9d.event});
        this.z9q("onshare")
    };
    b9i.iP3x = function (m9d) {
        this.cP0x(!1);
        var bG0x = "分享失败";
        if (m9d.code) {
            switch (m9d.code) {
                case 250:
                    bG0x = m9d.message || m9d.msg || (this.zt8l ? "发布异常" : "分享异常");
                    break;
                case 404:
                    bG0x = "分享的资源不存在";
                    break;
                case 407:
                    bG0x = "输入内容包含有关键字";
                    break;
                case 408:
                    bG0x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bG0x = m9d.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l9c.ft2x({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.cc0x(bG0x)
    };
    b9i.ml4p = function () {
        this.oA5F = gr2x.vz7s(this.ez1x)
    };
    b9i.cc0x = function (bG0x) {
        this.ea1x(this.ek1x, bG0x)
    };
    b9i.cP0x = function (da1x) {
        return this.dT1x(this.CK9B, da1x, "分享", "分享中...")
    };
    b9i.bem9d = function (ic3x) {
        return bYh2x[ic3x] || ""
    };
    b9i.bXu1x = function () {
        var es1x, uN7G = this.bem9d(this.ew1x);
        this.pJ5O.style.display = "";
        if (this.jD3x < 0) {
            this.pJ5O.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.NF3x) {
                this.pJ5O.style.display = "none";
                return
            }
            var bej9a = this.zt8l && this.ew1x != 24;
            es1x = (bfc9T[uN7G] ? bfc9T[uN7G] + "：" : "") + this.NF3x + (bJd7W[uN7G] || " ") + (uN7G == "mv" || uN7G == "album" ? this.bif0x || this.Oc3x : this.Oc3x);
            a8i.dB1x(this.pJ5O, "m-xwgt-share-infobar", {canChange: bej9a, info: es1x});
            if (bej9a) {
                a8i.x9o(this.pJ5O, "z-dis")
            } else {
                a8i.y9p(this.pJ5O, "z-dis")
            }
        }
        a8i.x9o(this.pJ5O, "info-video")
    };
    b9i.bXC1x = function () {
        var uN7G = this.bem9d(this.ew1x),
            es1x = (bfc9T[uN7G] ? bfc9T[uN7G] + "：" : "") + this.NF3x + (bJd7W[uN7G] || " ") + (uN7G == "mv" || uN7G == "album" ? this.bif0x || this.Oc3x : this.Oc3x);
        bej9a = this.zt8l && this.ew1x != 24;
        if (this.Hq1x()) {
        } else {
            a8i.x9o(this.pJ5O, "info-video");
            a8i.dB1x(this.pJ5O, "m-xwgt-share-infobar", {canChange: bej9a, isPub: this.zt8l, info: es1x})
        }
    };
    b9i.bXr1x = function () {
        var II1x = this.ez1x.value;
        if (this.zt8l) {
            if (!!this.bjg0x) {
                return !!II1x && !!II1x.length || !!this.oK5P && this.oK5P.Rs5x().length > 0
            } else {
                return !(this.jD3x < 0) || !!II1x && !!II1x.length || !!this.oK5P && this.oK5P.Rs5x().length > 0
            }
        } else {
            return !!II1x && !!II1x.length || !!this.oK5P && this.oK5P.Rs5x().length > 0
        }
    };
    b9i.ben9e = function () {
        var bIG7z = false;
        if (!this.zt8l || this.Sq5v.pubEventWithoutResource || !(this.jD3x < 0)) {
            bIG7z = true
        }
        if (bIG7z) {
            a8i.x9o(this.CK9B, "u-btn2-2-dis")
        } else {
            a8i.y9p(this.CK9B, "u-btn2-2-dis")
        }
    };
    b9i.bIQ7J = function (bjH0x) {
        if (bjH0x) {
            a8i.y9p(this.CK9B, "u-btn2-2-dis")
        } else {
            this.ben9e()
        }
    };
    b9i.bJc7V = function (d9g) {
        if (d9g) {
            d9g.stopped = true
        }
        if (this.bXr1x()) {
            l9c.hu2x({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (U0x) {
                    if (U0x == "ok") {
                        this.z9q("forceclose", {});
                        this.bt0x();
                        h9c.z9q(n9e.oC5H, "shareclose", {})
                    }
                }.f9e(this)
            })
        } else {
            this.z9q("forceclose", {});
            this.bt0x();
            h9c.z9q(n9e.oC5H, "shareclose", {})
        }
    };
    b9i.GV1x = function (ep1x, dW1x) {
        this.oE5J.BF9w(ep1x, dW1x)
    };
    b9i.beh9Y = function (u9l) {
        this.gw2x.eS2x("page", {type: u9l})
    };
    b9i.Hq1x = function () {
        return this.ew1x == 39
    };
    b9i.J9A = function () {
        var bXm1x = function (p9g, r9i) {
            var cj0x = "u-slg-" + ed1x[r9i] + "-gray";
            !this.beS9J[bhM0x[r9i]] ? a8i.y9p(p9g, cj0x) : a8i.x9o(p9g, cj0x)
        };
        return function () {
            L9C.J9A.call(this);
            this.o9f.style.display = "";
            this.cc0x();
            this.cP0x(!1);
            this.BY9P.QZ5e(0);
            this.ez1x.focus();
            this.ez1x.value = this.bXX1x || "";
            this.ez1x.placeholder = this.bXT1x || "";
            if (!this.Hq1x()) {
                this.bXu1x()
            } else {
                a8i.y9p(this.pJ5O, "info-video");
                a8i.dB1x(this.pJ5O, "m-xwgt-share-videobar", {title: this.NF3x, picUrl: this.bib0x})
            }
            this.gi2x();
            this.xm8e.caN2x();
            k9b.bd0x(this.bez9q, bXm1x, this);
            this.ml4p();
            if (this.zt8l) {
                this.ra5f.style.display = "none"
            } else {
                this.ra5f.style.display = ""
            }
            this.ben9e()
        }
    }();
    b9i.bt0x = function (d9g) {
        L9C.bt0x.call(this);
        !!this.hp2x && this.hp2x.bt0x();
        if (this.xm8e) {
            this.xm8e.T0x();
            delete this.xm8e
        }
        if (this.hC2x) {
            this.hC2x.T0x();
            delete this.hC2x
        }
        if (this.oK5P) {
            this.oK5P.T0x();
            delete this.oK5P
        }
        if (this.bIC7v) {
            this.bIC7v = this.bIC7v.T0x()
        }
        if (this.my4C) {
            this.my4C.T0x();
            delete this.my4C
        }
    };
    l9c.kT3x = function (e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e9f.title === undefined) {
            e9f.title = "分享"
        }
        if (e9f.actId && e9f.type != 39) {
            var u9l = bYf2x[e9f.resourceType], bV0x = e9f.resourceJson, id3x;
            if (k9b.fD2x(bV0x)) {
                try {
                    bV0x = JSON.parse(bV0x)
                } catch (e) {
                }
            }
            if (u9l) {
                id3x = l9c.bPl8d(u9l, bV0x);
                e9f.name = id3x.title;
                e9f.author = id3x.author;
                e9f.picUrl = id3x.picUrl;
                e9f.type = u9l;
                e9f.rid = (bV0x || []).id
            }
        }
        n9e.oC5H.J9A(e9f)
    };
    I9z.fJ2x.A9r({element: n9e.oC5H, event: ["sharesuccess", "shareclose"]})
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), n9e = c9h("nm.l"),
        w9n = c9h("nm.w"), bD0x = c9h("nej.ui"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), b9i, L9C;
    n9e.bdU9L = NEJ.C();
    b9i = n9e.bdU9L.N9E(n9e.eo1x);
    L9C = n9e.bdU9L.cs0x;
    b9i.cy0x = function () {
        this.cE0x()
    };
    b9i.bW0x = function () {
        this.ci0x();
        var i9b = a8i.H9y(this.o9f, "j-flag");
        h9c.s9j(i9b[0], "click", this.DJ0x.f9e(this))
    };
    b9i.ch0x = function () {
        this.cf0x = "m-import-ok"
    };
    b9i.bl0x = function (e9f) {
        e9f.parent = e9f.parent || document.body;
        e9f.title = "歌曲同步完成";
        this.bn0x(e9f)
    };
    b9i.bC0x = function () {
        this.bF0x()
    };
    b9i.DJ0x = function (d9g) {
        this.bt0x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b9i.Ca9R = function () {
        this.bt0x()
    };
    b9i.bMy8q = function (d9g) {
        if (d9g.keyCode == 13) this.FL0x()
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), O9F = c9h("nej.p"),
        k9b = c9h("nej.u"), n9e = c9h("nm.l"), w9n = c9h("nm.w"), bD0x = c9h("nej.ui"), q9h = c9h("nm.d"),
        l9c = c9h("nm.x"), b9i, L9C;
    n9e.bIB7u = NEJ.C();
    b9i = n9e.bIB7u.N9E(n9e.eo1x);
    b9i.ch0x = function () {
        this.cf0x = "m-programtips-layer"
    };
    b9i.bW0x = function () {
        this.ci0x();
        this.bU0x = a8i.H9y(this.o9f, "j-flag")
    };
    b9i.bl0x = function (e9f) {
        if (e9f.inner) {
            var innerNode = a8i.H9y(this.o9f, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e9f.inner
            }
        }
        e9f.clazz = " m-layer-programtips " + (e9f.clazz || "");
        e9f.parent = e9f.parent || document.body;
        e9f.title = e9f.title || "付费内容提示";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bn0x(e9f);
        this.hb2x = e9f.id;
        this.bXh1x = e9f.radiotype;
        this.kG3x = location.protocol + "//" + (this.bjQ0x() || "music.163.com") + "/m/" + this.bXh1x + "?id=" + this.hb2x;
        this.kG3x = e9f.url || this.kG3x;
        this.bXf1x()
    };
    b9i.bC0x = function () {
        this.bF0x()
    };
    b9i.Ca9R = function () {
        this.bt0x()
    };
    b9i.DJ0x = function (d9g) {
        this.z9q("onok", D9u);
        this.bt0x()
    };
    l9c.bjU0x = function (e9f) {
        n9e.bIB7u.A9r(e9f).J9A()
    };
    b9i.bXf1x = function () {
        v9m.bm0x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k9b.cD0x({url: this.kG3x, size: 180}),
            onload: function (j9a) {
                if (j9a.code == 200) {
                    this.bXd1x(j9a.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.f9e(this)
        })
    };
    b9i.bjQ0x = function () {
        var RZ5e = location.host;
        if (RZ5e.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b9i.bXd1x = function (jT3x) {
        this.bU0x[0].style.backgroundImage = "url(" + jT3x + ")"
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), dw1x = c9h("nej.p"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        I9z = c9h("nej.ut"), v9m = c9h("nej.j"), q9h = c9h("nm.d"), l9c = c9h("nm.x"), E9v = c9h("nm.m"),
        n9e = c9h("nm.l"), M9D = c9h("nm.m.f"), b9i, L9C;
    E9v.dg1x = NEJ.C();
    b9i = E9v.dg1x.N9E(I9z.du1x);
    b9i.bL0x = function () {
        var qI5N = !1;
        return function () {
            if (qI5N) return;
            qI5N = !0;
            this.bQ0x();
            if (top == self) {
                return
            }
            this.tH7A = a8i.B9s("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bIx7q()
            }
            I9z.fJ2x.A9r({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bX0x([[window, "scroll", this.Ch9Y.f9e(this)], [document, "keyup", this.bXa1x.f9e(this)], [document.body, "click", this.uc7V.f9e(this)], [document, "mouseup", this.bWW1x.f9e(this)], [this.tH7A, "click", this.NR3x.f9e(this)], [q9h.tU7N, "message", this.uJ7C.f9e(this)]]);
            l9c.cfB3x(document.body);
            this.Ch9Y();
            if (this.Cf9W !== false && typeof GUser !== "undefined" && GUser.userId > 0) q9h.tU7N.gf2x().uW7P();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dw1x.dt1x.browser == "ie" && parseInt(dw1x.dt1x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var he2x = top.player.getPlaying();
                    if (he2x && he2x.track && he2x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + he2x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.yN8F.f9e(this);
            this.ke3x = q9h.hT2x.A9r();
            window.log = this.hg2x.f9e(this);
            var sP6J = location.search;
            if (sP6J) {
                var bv0x = sP6J.substr(sP6J.indexOf("?") + 1), go2x = k9b.ht2x(bv0x);
                if (go2x && go2x["_hash"]) location.hash = go2x["_hash"]
            }
        }
    }();
    b9i.bXa1x = function (d9g) {
        var g9d = h9c.W0x(d9g);
        try {
            if (d9g.keyCode == 80 && l9c.bPE8w() || ["textarea", "input"].indexOf(g9d.tagName.toLowerCase()) >= 0) return;
            h9c.z9q(top.document, "keyup", {ctrlKey: d9g.ctrlKey, keyCode: d9g.keyCode})
        } catch (e) {
        }
    };
    b9i.uc7V = function (d9g) {
        var g9d = h9c.W0x(d9g);
        if (g9d && g9d.tagName == "INPUT") return;
        var g9d = h9c.W0x(d9g, "d:pid");
        if (g9d) {
            h9c.cn0x(d9g);
            var qh5m = a8i.t9k(g9d, "pid"), Cb9S = a8i.t9k(g9d, "ptype"), U0x = a8i.t9k(g9d, "action") || "play";
            switch (U0x) {
                case"subscribe":
                    l9c.mP4T({tracks: [qh5m]});
                    break
            }
        }
        g9d = h9c.W0x(d9g, "d:resAction");
        if (g9d && g9d.className.indexOf("-dis") == -1) {
            var cU0x = a8i.t9k(g9d, "resId"), u9l = a8i.t9k(g9d, "resType"), bkh0x = a8i.t9k(g9d, "resRadiotype"),
                bki0x = a8i.t9k(g9d, "resRadioid"), ee1x = a8i.t9k(g9d, "resFrom"), j9a = a8i.t9k(g9d, "resData"),
                U0x = a8i.t9k(g9d, "resAction"), bvi3x = a8i.t9k(g9d, "resCopyright"),
                bdO9F = a8i.t9k(g9d, "resAuditstatus");
            if (U0x != "log" && U0x != "bilog") h9c.cn0x(d9g);
            switch (U0x) {
                case"log":
                    j9a = (j9a || "").split("|");
                    if (!!j9a[0]) {
                        var bg0x = {id: cU0x, alg: j9a[2] || "itembased", scene: j9a[3], position: j9a[1] || 0};
                        if (!!j9a[4]) bg0x.srcid = j9a[4];
                        window.log(j9a[0], bg0x)
                    }
                    break;
                case"bilog":
                    var bvA3x = a8i.t9k(g9d, "logAction"), bvE3x = a8i.t9k(g9d, "logJson");
                    window.log(bvA3x, bvE3x);
                    break;
                case"share":
                    if (bdO9F && bdO9F == 1) {
                        l9c.is3x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cU0x, u9l, a8i.t9k(g9d, "resPic"), a8i.t9k(g9d, "resName"), a8i.t9k(g9d, "resAuthor"), a8i.t9k(g9d, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (u9l == 18) {
                        var ro5t = a8i.t9k(g9d, "resLevel"), nQ4U = a8i.t9k(g9d, "resFee");
                        if (ro5t == 10) {
                            l9c.uq7j(nQ4U, cU0x, "song");
                            break
                        }
                        l9c.mP4T({tracks: [cU0x]})
                    }
                    break;
                case"download":
                    l9c.Mk2x({id: cU0x, type: u9l});
                    break;
                case"programtips":
                    if (bdO9F && bdO9F == 1) {
                        l9c.is3x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l9c.bjU0x({id: bki0x, radiotype: bkh0x})
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d9g)
        } catch (e) {
        }
    };
    b9i.bWW1x = function (d9g) {
        try {
            h9c.z9q(top.document, "mouseup")
        } catch (e) {
        }
    };
    b9i.Ch9Y = function () {
        var bWV1x = function () {
            var ce0x = window.innerHeight;
            if (!k9b.tJ7C(ce0x)) ce0x = (document.documentElement || document.body).clientHeight;
            return ce0x
        };
        return function (d9g) {
            if (!this.tH7A) return;
            var bdM9D = bWV1x(), gb2x = document.documentElement.scrollTop || document.body.scrollTop;
            a8i.ba0x(this.tH7A, "display", gb2x > 0 ? "" : "none");
            if (dw1x.dt1x.browser == "ie" && dw1x.dt1x.version < "7.0") {
                var gx2x = Math.min(document.body.clientHeight, bdM9D + gb2x) - 204;
                a8i.ba0x(this.tH7A, "top", gx2x + "px")
            }
        }
    }();
    b9i.NR3x = function (d9g) {
        h9c.cn0x(d9g);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b9i.yN8F = function () {
        var bkm0x = function (d9g) {
            h9c.z9q(window, "share", d9g)
        };
        return function (cU0x, u9l, zo8g, V0x, Gc0x, FZ0x) {
            l9c.kT3x({
                rid: cU0x,
                type: u9l,
                purl: zo8g,
                name: V0x,
                author: Gc0x,
                authors: FZ0x,
                onshare: bkm0x.f9e(this)
            })
        }
    }();
    b9i.hg2x = function (U0x, bg0x) {
        try {
            top.log(U0x, bg0x)
        } catch (e) {
            if (U0x.indexOf("new|") == 0) {
                return this.ke3x.eS2x(U0x.slice(4), bg0x)
            }
            switch (U0x) {
                case"play":
                    this.ke3x.eq1x(bg0x);
                    break;
                case"search":
                    this.ke3x.bSB0x(bg0x);
                    break;
                default:
                    this.ke3x.eS2x(U0x, bg0x)
            }
        }
    };
    b9i.bIx7q = function () {
        var bdK9B, bks0x = false, bs0x = [45, 60];
        var bWS1x = function (bG0x) {
            if (bG0x.title != "MailBoxImport") return;
            var Q9H = JSON.parse(bG0x.content || "null") || bb0x;
            if (Q9H.status == 10) {
                n9e.bdU9L.A9r().J9A();
                window.clearTimeout(bdK9B)
            }
        };
        var og4k = function (d9g) {
            if (d9g.code == 200) {
                if (d9g.status == 1) {
                    h9c.s9j(q9h.Cl9c, "message", bWS1x.f9e(this));
                    q9h.Cl9c.A9r().bxM4Q();
                    bks0x = true
                } else {
                    if (bks0x) {
                        if (d9g.status == 10) {
                            n9e.bdU9L.A9r().J9A();
                            h9c.hi2x(q9h.Cl9c, "message");
                            window.clearTimeout(bdK9B);
                            bks0x = false
                        }
                    } else {
                        window.clearTimeout(bdK9B)
                    }
                }
            }
        };
        return function () {
            var tB6v = bs0x.shift() * 1e3;
            v9m.bm0x("/api/musicbox/mail/status", {type: "json", method: "get", onload: og4k.f9e(this)});
            if (tB6v) {
                bdK9B = window.setTimeout(arguments.callee, tB6v)
            }
        }
    }();
    b9i.uJ7C = function (d9g) {
        try {
            top.polling(d9g)
        } catch (e) {
        }
    }
})()