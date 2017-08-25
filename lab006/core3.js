(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Ex0x) {
        if (!Ex0x || !Ex0x.length) return null;
        var Ua1x = window;
        for (var a = Ex0x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Ua1x = Ua1x[a[i]] = Ua1x[a[i]] || {}, i++) ;
        return Ua1x
    };
    NEJ.Q = function (bL0x, Ex0x) {
        bL0x = bL0x || NEJ.O;
        var bs0x = Ex0x.split(".");
        for (var i = 0, l = bs0x.length; i < l; i++) {
            bL0x = bL0x[bs0x[i]];
            if (!bL0x) break
        }
        return bL0x
    };
    NEJ.C = function () {
        var bNZ3x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bJc2x = function (A9r, bv0x) {
            for (var x in bv0x) if (A9r == bv0x[x]) return x;
            return null
        };
        var brK8C = {cl0x: 0, bk0x: 1, bE0x: 2, bR0x: 3, bJ0x: 4, eX1x: 5, jX3x: 6, eh1x: 7},
            tg6a = {cr0x: 0, bl0x: 1, bH0x: 2, cb0x: 3, bM0x: 4, gC2x: 5, kA3x: 6, fO2x: 7};
        return function () {
            var fl1x = function () {
                this.bJD2x();
                return this.cl0x.apply(this, arguments)
            };
            fl1x.prototype.bJD2x = NEJ.F;
            fl1x.prototype.cl0x = NEJ.F;
            fl1x.O9F = function (Az9q, bsx8p) {
                if (bNZ3x(Az9q)) return;
                if (bsx8p == null || !!bsx8p) NEJ.X(this, Az9q, bNZ3x);
                this.bOV4Z = Az9q;
                this.ch0x = Az9q.prototype;
                var bD0x = function () {
                };
                bD0x.prototype = Az9q.prototype;
                this.prototype = new bD0x;
                var Cv0x = this.prototype;
                Cv0x.constructor = this;
                var dO1x;
                for (var x in brK8C) {
                    dO1x = bJc2x(brK8C[x], tg6a);
                    if (!dO1x || !this.ch0x[x]) continue;
                    Cv0x[x] = function (T9K) {
                        return function () {
                            this[T9K].apply(this, arguments)
                        }
                    }(dO1x)
                }
                var DK0x = {};
                for (var x in tg6a) {
                    dO1x = bJc2x(tg6a[x], brK8C);
                    if (!dO1x || !this.ch0x[dO1x]) continue;
                    DK0x[dO1x] = Az9q;
                    Cv0x[x] = function (T9K) {
                        return function () {
                            var m9d, bD0x = this.brA8s[T9K], Yx2x = bD0x.prototype[T9K];
                            this.brA8s[T9K] = bD0x.bOV4Z || Az9q;
                            if (!!Yx2x) m9d = Yx2x.apply(this, arguments);
                            this.brA8s[T9K] = Az9q;
                            return m9d
                        }
                    }(dO1x)
                }
                Cv0x.bJD2x = function () {
                    this.brA8s = NEJ.X({}, DK0x)
                };
                Cv0x.cyF2x = Cv0x.cr0x;
                return Cv0x
            };
            return fl1x
        }
    }();
    NEJ.X = function (gf2x, bN0x, dC1x) {
        if (!gf2x || !bN0x) return gf2x;
        dC1x = dC1x || NEJ.F;
        for (var x in bN0x) {
            if (bN0x.hasOwnProperty(x) && !dC1x(bN0x[x], x)) gf2x[x] = bN0x[x]
        }
        return gf2x
    };
    NEJ.EX = function (gf2x, bN0x) {
        if (!gf2x || !bN0x) return gf2x;
        for (var x in gf2x) {
            if (gf2x.hasOwnProperty(x) && bN0x[x] != null) gf2x[x] = bN0x[x]
        }
        return gf2x
    };
    var ET0x = Function.prototype;
    ET0x.ed1x = function (lP3x, bqH8z) {
        var f = NEJ.F, bqH8z = bqH8z || f, lP3x = lP3x || f, dc1x = this;
        return function () {
            var d9g = {args: NEJ.R.slice.call(arguments, 0)};
            lP3x(d9g);
            if (!d9g.stopped) {
                d9g.value = dc1x.apply(this, d9g.args);
                bqH8z(d9g)
            }
            return d9g.value
        }
    };
    ET0x.g9d = function () {
        var bg0x = arguments, gf2x = arguments[0], bqF8x = this;
        return function () {
            var vb7U = NEJ.R.slice.call(bg0x, 1);
            NEJ.R.push.apply(vb7U, arguments);
            return bqF8x.apply(gf2x || window, vb7U)
        }
    };
    ET0x.dT1x = function () {
        var bg0x = arguments, gf2x = NEJ.R.shift.call(bg0x), bqF8x = this;
        return function () {
            NEJ.R.push.apply(arguments, bg0x);
            return bqF8x.apply(gf2x || window, arguments)
        }
    };
    var ET0x = String.prototype;
    if (!ET0x.trim) {
        ET0x.trim = function () {
            var cO0x = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cO0x, "")
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
    var c9h = NEJ.P, X0x = NEJ.O, M9D = c9h("nej.p"), Sc4g = window.navigator.platform,
        sv5A = window.navigator.userAgent;
    var kc3x = {mac: Sc4g, win: Sc4g, linux: Sc4g, ipad: sv5A, ipod: sv5A, iphone: Sc4g, android: sv5A};
    M9D.WC2x = kc3x;
    for (var x in kc3x) kc3x[x] = (new RegExp(x, "i")).test(kc3x[x]);
    kc3x.ios = kc3x.ipad || kc3x.iphone || kc3x.ipod;
    kc3x.tablet = kc3x.ipad;
    kc3x.desktop = kc3x.mac || kc3x.win || kc3x.linux && !kc3x.android;
    var hL2x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    M9D.cS0x = hL2x;
    if (/msie\s+(.*?);/i.test(sv5A) || /trident\/.+rv:([\d\.]+)/i.test(sv5A)) {
        hL2x.engine = "trident";
        hL2x.browser = "ie";
        hL2x.version = RegExp.$1;
        hL2x.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var nU4Y = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        hL2x.release = nU4Y[document.documentMode] || nU4Y[parseInt(hL2x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sv5A)) {
        hL2x.engine = "webkit";
        hL2x.release = RegExp.$1 || "";
        hL2x.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sv5A)) {
        hL2x.engine = "gecko";
        hL2x.release = RegExp.$1 || "";
        hL2x.browser = "firefox";
        hL2x.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(sv5A)) hL2x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sv5A)) {
        hL2x.engine = "presto";
        hL2x.release = RegExp.$1 || "";
        hL2x.browser = "opera";
        hL2x.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(sv5A)) hL2x.version = RegExp.$1 || ""
    }
    if (hL2x.browser == "unknow") {
        var nU4Y = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nU4Y.length, T9K; i < l; i++) {
            T9K = nU4Y[i] == "safari" ? "version" : nU4Y[i];
            if ((new RegExp(T9K + "/(.*?)(?=\\s|$)", "i")).test(sv5A)) {
                hL2x.browser = nU4Y[i];
                hL2x.version = RegExp.$1.trim();
                break
            }
        }
    }
    M9D.bvF9w = {};
    var Xr2x = hL2x.engine != "trident";
    M9D.mE4I = {
        gecko: hL2x.engine != "gecko",
        webkit: hL2x.engine != "webkit",
        presto: hL2x.engine != "presto",
        trident0: Xr2x || hL2x.release > "2.0",
        trident1: Xr2x || hL2x.release < "6.0",
        trident2: Xr2x || hL2x.release > "3.0",
        trident: Xr2x || hL2x.release >= "6.0"
    }
})();
(function () {
    var iH2x = NEJ.P("nej.c"), Q9H = {};
    var bqq8i = function () {
        var cO0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V9M) {
            V9M = V9M || "";
            if (cO0x.test(V9M)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Ng3x = function () {
        var bxB0x = function (j9a, bv0x) {
            if (!j9a || !j9a.length) return;
            for (var i = 0, l = j9a.length, kr3x; i < l; i++) {
                kr3x = j9a[i];
                if (kr3x.indexOf("://") > 0) bv0x[bqq8i(kr3x)] = kr3x
            }
        };
        var bc0x = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bN0x) {
            iH2x.Ff0x("root", bN0x.root || "/res/");
            var bqf8X, fu1x = iH2x.z9q("root");
            for (var x in bc0x) {
                bqf8X = bc0x[x];
                iH2x.Ff0x(x, bN0x[bqf8X.name] || fu1x + bqf8X.dft)
            }
            var xV8N = bN0x.p_csrf;
            if (xV8N == !0) {
                xV8N = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            iH2x.Ff0x("csrf", NEJ.EX({cookie: "", param: ""}, xV8N));
            Q9H.frames = {};
            bxB0x(bN0x.p_frame, Q9H.frames);
            Q9H.flashs = {};
            bxB0x(bN0x.p_flash, Q9H.flashs)
        }
    }();
    iH2x.Ff0x = function (J9A, A9r) {
        Q9H[J9A] = A9r
    };
    iH2x.z9q = function (J9A) {
        return Q9H[J9A]
    };
    iH2x.bPd4h = function (V9M) {
        var ur7k = bqq8i(V9M);
        return Q9H.frames[ur7k] || ur7k + "/res/nej_proxy_frame.html"
    };
    iH2x.bPf4j = function (V9M) {
        return Q9H.flashs[bqq8i(V9M)]
    };
    Ng3x(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c9h = NEJ.P, M9D = c9h("nej.p"), iH2x = c9h("nej.c"), bN0x = window.NEJ_CONF || NEJ.O;
    if (M9D.mE4I.trident) return;
    iH2x.Ff0x("storage.swf", bN0x.storage || iH2x.z9q("root") + "nej_storage.swf");
    if (M9D.cS0x.release < "4.0") {
        iH2x.Ff0x("blank.png", bN0x.blank || iH2x.z9q("root") + "nej_blank.gif")
    }
    var j9a = bN0x.xdr, fX2x = /^(https?:\/\/.*?)(?=\/|$)/i, jo3x = /[\/?=&]/i;
    var brR8J = function (V9M) {
        return (fX2x.test(V9M) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!j9a && !!j9a.length) for (var i = j9a.length - 1, V9M, J9A; i >= 0; i--) {
        V9M = j9a[i];
        J9A = brR8J(V9M);
        if (!!J9A) iH2x.Ff0x(J9A, V9M)
    }
    iH2x.cyA2x = function (V9M) {
        var J9A = brR8J(V9M);
        if (!J9A) {
            if (jo3x.test(V9M)) {
                J9A = location.protocol + "//" + location.host
            } else if (V9M.indexOf("://") < 0) {
                J9A = location.protocol + "//" + V9M
            } else {
                J9A = V9M
            }
        }
        return iH2x.z9q(J9A) || J9A + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c9h = NEJ.P, iH2x = c9h("nej.c"), M9D = c9h("nej.g"), gb2x = +(new Date);
    M9D.cyz2x = 1e4 - gb2x;
    M9D.bqd8V = 10001 - gb2x;
    M9D.cyx2x = 10002 - gb2x;
    M9D.byJ0x = 10003 - gb2x;
    M9D.bPp4t = 10004 - gb2x;
    M9D.cyv2x = 10005 - gb2x;
    M9D.bpW8O = 10006 - gb2x;
    M9D.bPK4O = 10007 - gb2x;
    M9D.wF8x = "Content-Type";
    M9D.cyr2x = "text/plain";
    M9D.By9p = "multipart/form-data";
    M9D.bPM4Q = "application/x-www-form-urlencoded";
    M9D.bpR8J = iH2x.z9q("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c9h = NEJ.P, fc1x = NEJ.R, M9D = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        bb0x = c9h("nej.h");
    var kZ3x = M9D.cS0x.prefix, bxQ0x = M9D.bvF9w,
        bPP4T = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, bPU4Y = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, PI3x = {
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
    var Ng3x = function () {
        var sm5r = bb0x.bBG1x();
        bxQ0x.css3d = !!sm5r && sm5r.m41 != null;
        var cO0x = /-([a-z])/g;
        for (var x in PI3x) {
            PI3x[bCP1x(x)] = PI3x[x]
        }
    };
    var bCP1x = function () {
        var cO0x = /-([a-z])/g;
        return function (T9K) {
            T9K = T9K || "";
            return T9K.replace(cO0x, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bCR1x = function (T9K) {
        return (!bxQ0x.css3d ? bPP4T : bPU4Y)[T9K]
    };
    var bDk1x = function () {
        var cO0x = /\s+/;
        return function (fl1x) {
            fl1x = (fl1x || "").trim();
            return !!fl1x ? fl1x.split(cO0x) : null
        }
    }();
    var XE2x = function (E9v, t9k, fl1x) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return;
        k9b.be0x(bDk1x(fl1x), function (dJ1x) {
            E9v.classList[t9k](dJ1x)
        })
    };
    bb0x.Fl0x = function (j9a) {
        return fc1x.slice.call(j9a, 0)
    };
    bb0x.bpK8C = function (E9v) {
        return bb0x.Fl0x(E9v.children)
    };
    bb0x.bpJ8B = function (E9v, fl1x) {
        return bb0x.Fl0x(E9v.getElementsByClassName(fl1x))
    };
    bb0x.bpI8A = function (E9v, Fm0x) {
        XE2x(E9v, "add", Fm0x)
    };
    bb0x.bpF8x = function (E9v, Fo0x) {
        XE2x(E9v, "remove", Fo0x)
    };
    bb0x.Jv2x = function (E9v, Fo0x, Fm0x) {
        XE2x(E9v, "remove", Fo0x);
        XE2x(E9v, "add", Fm0x)
    };
    bb0x.bpC8u = function (E9v, fl1x) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return !1;
        var j9a = E9v.classList;
        if (!j9a || !j9a.length) return !1;
        return k9b.cU0x(bDk1x(fl1x), function (dJ1x) {
            return j9a.contains(dJ1x)
        }) >= 0
    };
    bb0x.bpA8s = function (E9v, dJ1x) {
    };
    bb0x.bpw8o = function (E9v) {
    };
    bb0x.bpv8n = function (fy1x, mT4X) {
        fy1x.selectionEnd = mT4X.end || 0;
        fy1x.selectionStart = mT4X.start || 0;
        fy1x.focus()
    };
    bb0x.bpt8l = function (fy1x) {
        return {end: fy1x.selectionEnd, start: fy1x.selectionStart}
    };
    bb0x.bpm8e = function () {
        var Cz0x = function (dJ1x, d9g) {
            var E9v = h9c.U9L(d9g);
            if (!E9v.value) a8i.w9n(E9v, dJ1x)
        };
        var Fs1x = function (dJ1x, d9g) {
            a8i.y9p(h9c.U9L(d9g), dJ1x)
        };
        return function (E9v, eE1x, dJ1x) {
            if (eE1x == 1) {
                h9c.s9j(E9v, "blur", Cz0x.g9d(null, dJ1x))
            }
            if (eE1x == 1 || eE1x == -1) {
                h9c.s9j(E9v, "focus", Fs1x.g9d(null, dJ1x))
            }
        }
    }();
    bb0x.bpj8b = function (G9x) {
        return (new XMLSerializer).serializeToString(G9x) || ""
    };
    bb0x.bpi8a = function (yc8U) {
        var fu1x = (new DOMParser).parseFromString(yc8U, "text/xml").documentElement;
        return fu1x.nodeName == "parsererror" ? null : fu1x
    };
    bb0x.bpf8X = function (E9v) {
    };
    bb0x.mR4V = function (E9v) {
        return null
    };
    bb0x.bpb8T = function (E9v) {
        return null
    };
    bb0x.bpa8S = function (dG1x) {
    };
    bb0x.boY8Q = function () {
        var bg0x = bb0x.Fl0x(arguments);
        bg0x[0] = a8i.z9q(bg0x[0]);
        if (!bg0x[0]) return null;
        bg0x[1] = (bg0x[1] || "").toLowerCase();
        if (!bg0x[1]) return null;
        return bg0x
    };
    bb0x.xX8P = function () {
        var vy7r = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, it2x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bQe4i = function (t9k) {
            return (kZ3x.evt || kZ3x.pro) + t9k
        };
        return function () {
            var bg0x = bb0x.boY8Q.apply(bb0x, arguments);
            if (!bg0x) return;
            var Vu2x = it2x[bg0x[1]], VV2x = vy7r[bg0x[1]];
            if (!!Vu2x) {
                bg0x[4] = bg0x[1];
                bg0x[1] = bQe4i(Vu2x)
            } else if (!!VV2x) {
                var T9K = "on" + bg0x[1];
                if (!(T9K in bg0x[0])) {
                    bg0x[4] = bg0x[1];
                    bg0x[1] = VV2x
                }
            }
            return bg0x
        }
    }();
    bb0x.boP8H = function () {
        var bg0x = arguments;
        bg0x[0].addEventListener(bg0x[1], bg0x[2], !!bg0x[3])
    };
    bb0x.Yr2x = function () {
        var bg0x = arguments;
        bg0x[0].removeEventListener(bg0x[1], bg0x[2], !!bg0x[3])
    };
    bb0x.boM8E = function (E9v, t9k, e9f) {
        var d9g = document.createEvent("Event");
        d9g.initEvent(t9k, !0, !0);
        NEJ.X(d9g, e9f);
        E9v.dispatchEvent(d9g)
    };
    bb0x.bBG1x = function () {
        var fX2x = /\((.*?)\)/, jo3x = /\s*,\s*/, j9a = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Yu2x = function (sm5r) {
            var im2x = {};
            if (fX2x.test(sm5r || "")) {
                k9b.be0x(RegExp.$1.split(jo3x), function (A9r, r9i) {
                    im2x[j9a[r9i]] = A9r || ""
                })
            }
            return im2x
        };
        return function (sm5r) {
            if (!!window.CSSMatrix) return new CSSMatrix(sm5r);
            var T9K = kZ3x.clz + "CSSMatrix";
            if (!!window[T9K]) return new window[T9K](sm5r || "");
            return Yu2x(sm5r)
        }
    }();
    bb0x.bLG3x = function () {
        var cO0x = /\{(.*?)\}/g;
        return function (T9K, bv0x) {
            bv0x = bv0x || o;
            var pl4p = bCR1x(T9K);
            return !pl4p ? "" : pl4p.replace(cO0x, function ($1, $2) {
                var bs0x = $2.split("|");
                return bv0x[bs0x[0]] || bs0x[1] || "0"
            })
        }
    }();
    bb0x.boH8z = function (E9v, T9K, A9r) {
        E9v.style[bb0x.bNV3x(T9K)] = A9r
    };
    bb0x.bNV3x = function () {
        var cO0x = /^[a-z]/, boG8y = kZ3x.css;
        var bQf4j = function (T9K) {
            return T9K.replace(cO0x, function ($1) {
                return boG8y + $1.toUpperCase()
            })
        };
        return function (T9K) {
            T9K = bCP1x(T9K);
            var bQi4m = bb0x.bQk4o(T9K, PI3x);
            return bQi4m ? bQf4j(T9K) : T9K
        }
    }();
    bb0x.bQk4o = function () {
        var cO0x = /^([a-z]+?)[A-Z]/;
        return function (T9K, bv0x) {
            if (!bv0x[T9K]) {
                if (cO0x.test(T9K)) T9K = RegExp.$1
            }
            return !!bv0x[T9K]
        }
    }();
    bb0x.bQl4p = function () {
        var cO0x = /\$<(.*?)>/gi, boG8y = "-" + kZ3x.css.toLowerCase() + "-";
        return function (jt3x) {
            return jt3x.replace(cO0x, function ($1, $2) {
                var eG1x = $2, bs0x = eG1x.split("|"), pl4p = bCR1x(bs0x[0]);
                if (!!pl4p) {
                    return bb0x.bLG3x(bs0x[0], k9b.hq2x(bs0x[1]))
                }
                return !bb0x.bQm4q(eG1x, PI3x) ? eG1x : boG8y + eG1x
            })
        }
    }();
    bb0x.bQm4q = function (T9K, bv0x) {
        return !!bv0x[T9K]
    };
    bb0x.bot8l = function (cd0x, jt3x) {
        cd0x.textContent = jt3x
    };
    bb0x.bos8k = function (cd0x, jt3x) {
        var wS8K = cd0x.sheet, bp0x = wS8K.cssRules.length;
        wS8K.insertRule(jt3x, bp0x);
        return wS8K.cssRules[bp0x]
    };
    bb0x.cyf2x = function (E9v, e9f) {
    };
    bb0x.ZZ3x = function (bam3x) {
        return (bam3x || "").toLowerCase() != "transparent"
    };
    bb0x.bQn4r = function (E9v) {
    };
    bb0x.boh8Z = function (E9v, T9K) {
        if (!!E9v.getAttribute) return E9v.getAttribute(T9K);
        return ""
    };
    bb0x.RF4J = function (fe1x) {
        a8i.cK0x(fe1x)
    };
    Ng3x()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), M9D = c9h("nej.p"), bb0x = c9h("nej.h");
    if (M9D.mE4I.trident0) return;
    var gb2x = +(new Date);
    Q9H = {};
    bb0x.bpA8s = bb0x.bpA8s.ed1x(function (d9g) {
        d9g.stopped = !0;
        var bg0x = d9g.args, C9t = a8i.kH3x(bg0x[0]), J9A = "hover-" + C9t;
        if (!C9t || !!Q9H[J9A]) return;
        Q9H[J9A] = !0;
        h9c.s9j(C9t, "mouseenter", a8i.y9p.g9d(a8i, C9t, bg0x[1]));
        h9c.s9j(C9t, "mouseleave", a8i.w9n.g9d(a8i, C9t, bg0x[1]))
    });
    bb0x.bpw8o = function () {
        var cyd2x = function () {
        };
        return bb0x.bpw8o.ed1x(function (d9g) {
            d9g.stopped = !0;
            var E9v = d9g.args[0], C9t = "fixed-" + a8i.kH3x(E9v);
            if (!!Q9H[C9t]) return;
            var bc0x = {};
            Q9H[C9t] = bc0x
        })
    }();
    bb0x.bpf8X = bb0x.bpf8X.ed1x(function (d9g) {
        d9g.stopped = !0;
        var E9v = d9g.args[0], cd0x = E9v.style, bLh3x = a8i.oE4I();
        cd0x.width = bLh3x.scrollWidth + "px";
        cd0x.height = bLh3x.scrollHeight + "px"
    });
    bb0x.mR4V = bb0x.mR4V.ed1x(function (d9g) {
        d9g.stopped = !0;
        var E9v = d9g.args[0], kd3x = Q9H[E9v.msk];
        if (!kd3x) {
            E9v.msk = gb2x++;
            kd3x = a8i.cT0x("iframe");
            kd3x.style.position = "absolute";
            Q9H[E9v.msk] = kd3x
        }
        d9g.value = kd3x;
        var cd0x = kd3x.style;
        cd0x.top = (parseInt(a8i.da1x(E9v, "top")) || 0) + "px";
        cd0x.left = (parseInt(a8i.da1x(E9v, "left")) || 0) + "px";
        cd0x.width = E9v.offsetWidth + "px";
        cd0x.height = E9v.offsetHeight + "px";
        E9v.insertAdjacentElement("beforeBegin", kd3x)
    });
    bb0x.bpb8T = bb0x.bpb8T.ed1x(function (d9g) {
        d9g.stopped = !0;
        var kd3x = Q9H[d9g.args[0].msk];
        if (!!kd3x) a8i.mm3x(kd3x)
    })
})();
(function () {
    var c9h = NEJ.P, M9D = c9h("nej.p"), a8i = c9h("nej.e"), bb0x = c9h("nej.h");
    if (M9D.mE4I.trident1) return;
    bb0x.xX8P = function () {
        var vy7r = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bb0x.xX8P.ed1x(function (d9g) {
            var bg0x = bb0x.boY8Q.apply(bb0x, d9g.args);
            if (!bg0x) {
                d9g.stopped = !0;
                return
            }
            var t9k = vy7r[bg0x[1]];
            if (!!t9k && ("on" + t9k).toLowerCase() in bg0x[0]) {
                bg0x[4] = bg0x[1];
                bg0x[1] = t9k;
                d9g.stopped = !0;
                d9g.value = bg0x
            }
        })
    }();
    bb0x.ZZ3x = function (bam3x) {
        return !0
    };
    bb0x.RF4J = bb0x.RF4J.ed1x(function (d9g) {
        d9g.stopped = !0;
        var fe1x = d9g.args[0];
        a8i.Y0x(fe1x, "display", "none");
        try {
            fe1x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, M9D = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        bb0x = c9h("nej.h"), bnO7H = {};
    if (M9D.mE4I.trident) return;
    bb0x.Fl0x = bb0x.Fl0x.ed1x(function (d9g) {
        d9g.stopped = !0;
        var j9a = d9g.args[0];
        if (!j9a) {
            d9g.value = null;
            return
        }
        var r9i = 0, m9d = [];
        while (!!j9a[r9i]) {
            m9d.push(j9a[r9i++])
        }
        d9g.value = m9d
    });
    bb0x.bpK8C = bb0x.bpK8C.ed1x(function (d9g) {
        d9g.stopped = !0;
        var bs0x = [];
        k9b.be0x(d9g.args[0].childNodes, function (f9e) {
            if (f9e.nodeType == 1) bs0x.push(f9e)
        });
        d9g.value = bs0x
    });
    bb0x.bpJ8B = bb0x.bpJ8B.ed1x(function (d9g) {
        var E9v = d9g.args[0];
        if (!!E9v.getElementsByClassName) return;
        d9g.stopped = !0;
        var m9d = [], bnN7G = new RegExp("(\\s|^)(?:" + d9g.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k9b.be0x(E9v.getElementsByTagName("*"), function (f9e) {
            if (bnN7G.test(f9e.className)) m9d.push(f9e)
        });
        d9g.value = m9d
    });
    bb0x.bpv8n = bb0x.bpv8n.ed1x(function (d9g) {
        var fy1x = d9g.args[0], mT4X = d9g.args[1];
        if (fy1x.selectionStart == null) {
            d9g.stopped = !0;
            var cI0x = fy1x.createTextRange();
            cI0x.collapse(!0);
            cI0x.moveStart("character", mT4X.start);
            cI0x.moveEnd("character", mT4X.end - mT4X.start);
            cI0x.select();
            fy1x.focus()
        }
    });
    bb0x.bpt8l = bb0x.bpt8l.ed1x(function (d9g) {
        var fy1x = d9g.args[0];
        fy1x.focus();
        if (fy1x.selectionStart == null) {
            d9g.stopped = !0;
            var bww9n = document.selection.createRange();
            var bwy9p = fy1x.createTextRange();
            bwy9p.moveToBookmark(bww9n.getBookmark());
            var bny7r = fy1x.createTextRange();
            bny7r.collapse(!0);
            bny7r.setEndPoint("EndToStart", bwy9p);
            var iD2x = bny7r.text.length;
            d9g.value = {start: iD2x, end: iD2x + bww9n.text.length}
        }
    });
    bb0x.bpj8b = bb0x.bpj8b.ed1x(function (d9g) {
        if (!!window.XMLSerializer) return;
        d9g.stopped = !0;
        var E9v = d9g.args[0];
        d9g.value = E9v.xml != null ? E9v.xml : E9v.outHTML
    });
    bb0x.bpi8a = function () {
        var MT3x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bQo4s = function () {
            try {
                for (var i = 0, l = MT3x.length; i < l; i++) return new ActiveXObject(MT3x[i])
            } catch (ex) {
                return null
            }
        };
        return bb0x.bpi8a.ed1x(function (d9g) {
            if (!!window.DOMParser) return;
            d9g.stopped = !0;
            var mI4M = bQo4s();
            if (!!mI4M && mI4M.loadXML(d9g.args[0]) && !mI4M.parseError.errorCode) d9g.value = mI4M.documentElement
        })
    }();
    bb0x.xX8P = function () {
        var it2x = {input: "propertychange", load: "readystatechange"};
        for (var x in it2x) bnO7H[it2x[x]] = !0;
        var bQq4u = function (E9v, t9k) {
            if ("on" + t9k in E9v) return null;
            return it2x[t9k] || ""
        };
        var bQr4v = function (t9k, dc1x) {
            var dq1x = dc1x;
            switch (t9k) {
                case"readystatechange":
                    dq1x = function (d9g) {
                        var E9v = h9c.U9L(d9g) || this;
                        if (E9v.readyState == "loaded" || E9v.readyState == "complete") {
                            d9g.target = E9v;
                            dc1x.call(E9v, d9g)
                        }
                    };
                    break;
                case"propertychange":
                    dq1x = function (d9g) {
                        var E9v = h9c.U9L(d9g) || this;
                        if ("value" in E9v && d9g.propertyName == "value") {
                            d9g.target = E9v;
                            dc1x.call(E9v, d9g)
                        }
                    };
                    break
            }
            return dq1x
        };
        return bb0x.xX8P.ed1x(function (d9g) {
            var bg0x = bb0x.boY8Q.apply(bb0x, d9g.args);
            if (!bg0x) {
                d9g.stopped = !0;
                return
            }
            var t9k = bQq4u(bg0x[0], bg0x[1]);
            if (!!t9k) {
                d9g.stopped = !0;
                bg0x[4] = bg0x[1];
                bg0x[1] = t9k;
                if (!!bg0x[2]) {
                    bg0x[5] = bg0x[2];
                    bg0x[2] = bQr4v(bg0x[1], bg0x[2])
                }
                d9g.value = bg0x
            }
        }, function (d9g) {
            var bg0x = d9g.value;
            if (!bg0x[0] || !k9b.fY2x(bg0x[2])) return;
            if (!k9b.fY2x(bg0x[5])) bg0x[5] = bg0x[2];
            bg0x[2] = bg0x[2].g9d(bg0x[0])
        })
    }();
    bb0x.boP8H = bb0x.boP8H.ed1x(function (d9g) {
        var bg0x = d9g.args;
        if (!!bnO7H[bg0x[1]] || !document.addEventListener) {
            d9g.stopped = !0;
            bg0x[0].attachEvent("on" + bg0x[1], bg0x[2])
        }
    });
    bb0x.Yr2x = bb0x.Yr2x.ed1x(function (d9g) {
        var bg0x = d9g.args;
        if (!!bnO7H[bg0x[1]] || !document.removeEventListener) {
            d9g.stopped = !0;
            bg0x[0].detachEvent("on" + bg0x[1], bg0x[2])
        }
    });
    bb0x.boM8E = bb0x.boM8E.ed1x(function (d9g) {
        if (!document.createEvent) {
            d9g.stopped = !0;
            var bg0x = d9g.args, bzK0x = document.createEventObject();
            NEJ.X(bzK0x, bg0x[2]);
            try {
                bg0x[0].fireEvent("on" + bg0x[1], bzK0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bb0x.boH8z = bb0x.boH8z.ed1x(function (d9g) {
        var bg0x = d9g.args, T9K = bg0x[1].toLowerCase();
        if (T9K == "opacity" && !(T9K in document.body.style)) {
            bg0x[1] = "filter";
            bg0x[2] = "alpha(opacity=" + bg0x[2] * 100 + ")"
        }
    });
    bb0x.bot8l = function () {
        var fd1x = 30;
        return bb0x.bot8l.ed1x(function (d9g) {
            var E9v = d9g.args[0];
            if (!E9v.styleSheet) return;
            d9g.stopped = !0;
            var jt3x = d9g.args[1];
            var j9a = document.styleSheets;
            if (j9a.length > fd1x) {
                E9v = j9a[fd1x];
                jt3x = E9v.cssText + jt3x
            } else {
                E9v = E9v.styleSheet
            }
            E9v.cssText = jt3x
        })
    }();
    bb0x.bos8k = bb0x.bos8k.ed1x(function (d9g) {
        var bg0x = d9g.args, wS8K = bg0x[0].sheet;
        if (!!wS8K) return;
        d9g.stopped = !0;
        var wS8K = bg0x[0].styleSheet, bp0x = wS8K.rules.length, bs0x = bg0x[1].split(/[\{\}]/);
        wS8K.addRule(bs0x[0], bs0x[1], bp0x);
        d9g.value = wS8K.rules[bp0x]
    });
    bb0x.bpm8e = function () {
        var Cz0x = function (dJ1x, d9g) {
            a8i.w9n(h9c.U9L(d9g), dJ1x)
        };
        return bb0x.bpm8e.ed1x(function (d9g) {
            if (M9D.cS0x.release >= "4.0") return;
            var bg0x = d9g.args;
            if (bg0x[1] != 1) {
                h9c.s9j(bg0x[0], "blur", Cz0x.g9d(null, bg0x[2]));
                bg0x[1] = -1
            }
        })
    }();
    bb0x.ZZ3x = function (bam3x) {
        return !0
    };
    bb0x.boh8Z = bb0x.boh8Z.ed1x(function (d9g) {
        var bg0x = d9g.args, f9e = (bg0x[0].attributes || X0x)[bg0x[1]];
        if (!!f9e) {
            d9g.stopped = !0;
            d9g.value = f9e.value
        }
    }, function (d9g) {
        var bg0x = d9g.args;
        if (bg0x[1] == "maxlength" && d9g.value == 2147483647) d9g.value = ""
    });
    if (M9D.cS0x.release < 5) {
        bb0x.bpa8S = function () {
            var eU1x, fe1x, jr3x = [], bnq7j = "cb-" + +(new Date),
                bi0x = '<script>parent.nej.h["' + bnq7j + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bDj1x = function () {
                eU1x = window.clearTimeout(eU1x);
                if (!jr3x.length) return;
                var dG1x = jr3x.shift();
                try {
                    var uv7o = fe1x.contentWindow.document;
                    uv7o.open();
                    uv7o.write("<head><title>");
                    uv7o.write(document.title);
                    uv7o.write("</title>");
                    uv7o.write(bi0x.replace("#<HASH>", encodeURIComponent(dG1x)));
                    uv7o.write("</head><body></body>");
                    if (location.hostname != document.domain) uv7o.domain = document.domain;
                    uv7o.close();
                    bb0x[bnq7j] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jr3x.unshift(dG1x)
                }
                eU1x = window.setTimeout(bDj1x, 50)
            };
            return bb0x.bpa8S.ed1x(function (d9g) {
                d9g.stopped = !0;
                var dG1x = d9g.args[0];
                if (!!bb0x[bnq7j] || !fe1x && !dG1x) return;
                jr3x.push(dG1x);
                if (!fe1x) fe1x = a8i.UL1x();
                bDj1x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), bb0x = c9h("nej.h"), M9D = c9h("nej.p"), Vj2x = M9D.bvF9w;
    if (M9D.mE4I.gecko) return;
    var Ng3x = function () {
        Vj2x.css3d = Vj2x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (hW2x, E9v) {
            if (!hW2x || !E9v) return;
            switch (hW2x) {
                case"beforeEnd":
                    this.appendChild(E9v);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(E9v, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(E9v) : this.insertBefore(E9v, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E9v) : this.parentNode.insertBefore(E9v, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bi0x) {
                this.textContent = bi0x
            })
        }
    };
    bb0x.xX8P = function () {
        var fX2x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bb0x.xX8P.ed1x(function (d9g) {
            var bg0x = d9g.args;
            if (fX2x.test(bg0x[1] || "")) {
                d9g.stopped = !0;
                d9g.value = bg0x
            }
        })
    }();
    bb0x.bQn4r = function () {
        var bQs4w = function (d9g) {
            h9c.bh0x(d9g);
            h9c.U9L(d9g).control.click()
        };
        return function (E9v) {
            h9c.s9j(E9v, "click", bQs4w)
        }
    }();
    Ng3x()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), bb0x = c9h("nej.h");
    var WS2x = function () {
        var nU4Y = !!document.body.classList;
        return function () {
            return nU4Y
        }
    }();
    var bKN3x = function () {
        var cO0x = /\s+/g;
        return function (fl1x) {
            fl1x = (fl1x || "").trim();
            return !fl1x ? null : new RegExp("(\\s|^)(?:" + fl1x.replace(cO0x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    bb0x.Jv2x = bb0x.Jv2x.ed1x(function (d9g) {
        if (WS2x()) return;
        d9g.stopped = !0;
        var bg0x = d9g.args, E9v = a8i.z9q(bg0x[0]);
        if (!E9v || !bg0x[1] && !bg0x[2]) return;
        var fl1x = E9v.className || "";
        var Fm0x = " " + (bg0x[2] || ""), Fo0x = bKN3x((bg0x[1] || "") + Fm0x);
        !!Fo0x && (fl1x = fl1x.replace(Fo0x, "$1"));
        E9v.className = (fl1x + Fm0x).replace(/\s+/g, " ").trim()
    });
    bb0x.bpI8A = bb0x.bpI8A.ed1x(function (d9g) {
        if (WS2x()) return;
        d9g.stopped = !0;
        var bg0x = d9g.args;
        bb0x.Jv2x(bg0x[0], "", bg0x[1])
    });
    bb0x.bpF8x = bb0x.bpF8x.ed1x(function (d9g) {
        if (WS2x()) return;
        d9g.stopped = !0;
        var bg0x = d9g.args;
        bb0x.Jv2x(bg0x[0], bg0x[1], "")
    });
    bb0x.bpC8u = bb0x.bpC8u.ed1x(function (d9g) {
        if (WS2x()) return;
        d9g.stopped = !0;
        var bg0x = d9g.args, E9v = a8i.z9q(bg0x[0]);
        if (!E9v) {
            d9g.value = !1;
            return
        }
        var cO0x = bKN3x(bg0x[1]);
        d9g.value = !cO0x ? !1 : cO0x.test(E9v.className || "")
    })
})();
(function () {
    var c9h = NEJ.P, M9D = c9h("nej.p"), bb0x = c9h("nej.h");
    if (M9D.mE4I.webkit) return;
    bb0x.ZZ3x = function (bam3x) {
        return !0
    }
})();
(function () {
    var c9h = NEJ.P, bb0x = c9h("nej.h"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        cN0x = c9h("nej.x"), Q9H = {};
    var bLw3x = function (E9v) {
        E9v = a8i.z9q(E9v);
        if (!E9v || !Q9H[E9v.id]) return;
        var Xo2x = !0, C9t = E9v.id;
        k9b.ek1x(Q9H[C9t], function () {
            Xo2x = !1;
            return !0
        });
        if (Xo2x) delete Q9H[C9t]
    };
    h9c.s9j = cN0x.s9j = function () {
        var bQy4C = function () {
            var bg0x = bb0x.xX8P.apply(bb0x, arguments);
            if (!bg0x || !bg0x[2]) return;
            var tI6C = a8i.kH3x(bg0x[0]), oe4i = Q9H[tI6C] || {};
            Q9H[tI6C] = oe4i;
            tI6C = bg0x[4] || bg0x[1];
            var yY9P = oe4i[tI6C] || [];
            oe4i[tI6C] = yY9P;
            yY9P.push({type: bg0x[1], func: bg0x[2], capt: !!bg0x[3], sfun: bg0x[5] || bg0x[2]});
            return bg0x.slice(0, 4)
        };
        return function () {
            var bg0x = bQy4C.apply(null, arguments);
            if (!!bg0x) bb0x.boP8H.apply(bb0x, bg0x);
            return this
        }
    }();
    h9c.mB4F = cN0x.mB4F = function () {
        var bQz4D = function () {
            var vb7U = arguments, tI6C = a8i.kH3x(vb7U[0]), oe4i = Q9H[tI6C], t9k = (vb7U[1] || "").toLowerCase(),
                d9g = vb7U[2];
            if (!oe4i || !t9k || !d9g) return;
            oe4i = oe4i[t9k];
            if (!oe4i) return;
            var bQH5M = !!vb7U[3], r9i = k9b.cU0x(oe4i, function (it2x) {
                return d9g == it2x.sfun && bQH5M == it2x.capt
            });
            if (r9i < 0) return;
            var it2x = oe4i.splice(r9i, 1)[0];
            return !it2x ? null : [a8i.z9q(tI6C), it2x.type, it2x.func, it2x.capt]
        };
        return function () {
            var bg0x = bQz4D.apply(null, arguments);
            if (!!bg0x) {
                bb0x.Yr2x.apply(bb0x, bg0x);
                bLw3x(bg0x[0])
            }
            return this
        }
    }();
    h9c.hE2x = cN0x.hE2x = function () {
        var bux9o = function () {
            var vb7U = arguments, tI6C = a8i.kH3x(vb7U[0]), oe4i = Q9H[tI6C], yY9P = (vb7U[1] || "").toLowerCase();
            if (!oe4i || !yY9P) return;
            var E9v = a8i.z9q(tI6C);
            k9b.mq3x(oe4i[yY9P], function (it2x, r9i, j9a) {
                bb0x.Yr2x(E9v, it2x.type, it2x.func, it2x.capt);
                j9a.splice(r9i, 1)
            });
            delete oe4i[yY9P]
        };
        var bQI5N = function (E9v) {
            E9v = a8i.z9q(E9v);
            if (!E9v) return;
            var C9t = E9v.id;
            k9b.ek1x(Q9H[C9t], function (j9a, t9k) {
                bux9o(C9t, t9k)
            });
            delete Q9H[C9t]
        };
        return function (E9v, t9k) {
            !t9k ? bQI5N(E9v) : bux9o(E9v, t9k);
            bLw3x(E9v);
            return this
        }
    }();
    h9c.U9L = function () {
        var bmy7r;
        var FV1x = function (T9K, E9v) {
            var bs0x = T9K.split(":");
            if (bs0x.length > 1) {
                if (!bmy7r) bmy7r = {c: a8i.bB0x, d: a8i.u9l, a: a8i.fT2x};
                var FZ1x = bmy7r[bs0x[0]];
                if (!!FZ1x) return !!FZ1x(E9v, bs0x[1]);
                T9K = bs0x[1]
            }
            return !!a8i.fT2x(E9v, T9K) || !!a8i.u9l(E9v, T9K) || a8i.bB0x(E9v, T9K)
        };
        return function (d9g) {
            if (!d9g) return null;
            var E9v = d9g.target || d9g.srcElement, dC1x = arguments[1];
            if (!dC1x) return E9v;
            if (k9b.fg1x(dC1x)) dC1x = FV1x.g9d(null, dC1x);
            if (k9b.fY2x(dC1x)) {
                while (E9v) {
                    if (!!dC1x(E9v)) return E9v;
                    E9v = E9v.parentNode
                }
                return null
            }
            return E9v
        }
    }();
    h9c.bh0x = function (d9g) {
        h9c.sn5s(d9g);
        h9c.cf0x(d9g);
        return this
    };
    h9c.sn5s = function (d9g) {
        if (!!d9g) {
            !!d9g.stopPropagation ? d9g.stopPropagation() : d9g.cancelBubble = !0
        }
        return this
    };
    h9c.cf0x = function (d9g) {
        if (!!d9g) {
            !!d9g.preventDefault ? d9g.preventDefault() : d9g.returnValue = !1
        }
        return this
    };
    h9c.cxT2x = function () {
        var pQ4U = !1;
        var bRf5k = function () {
            if (pQ4U) return;
            pQ4U = !0;
            h9c.s9j(document, "click", bRj5o, !0)
        };
        var bRj5o = function (d9g) {
            var E9v = h9c.U9L(d9g), bRk5p = a8i.u9l(E9v, "stopped");
            if (bRk5p == "true") {
                h9c.bh0x(d9g);
                a8i.u9l(E9v, "stopped", "false")
            }
        };
        return function (d9g) {
            if (!d9g) return;
            if (d9g.type == "click") {
                h9c.bh0x(d9g);
                return
            }
            bRf5k();
            a8i.u9l(h9c.U9L(d9g), "stopped", "true")
        }
    }();
    h9c.kJ3x = function (d9g) {
        return d9g.pageX != null ? d9g.pageX : d9g.clientX + a8i.oE4I().scrollLeft
    };
    h9c.nH4L = function (d9g) {
        return d9g.pageY != null ? d9g.pageY : d9g.clientY + a8i.oE4I().scrollTop
    };
    h9c.x9o = cN0x.x9o = function (E9v, t9k, e9f) {
        var bg0x = bb0x.xX8P(E9v, t9k);
        if (!!bg0x) bb0x.boM8E(bg0x[0], bg0x[1], e9f);
        return this
    };
    c9h("dbg").dumpEV = function () {
        return Q9H
    };
    cN0x.isChange = !0
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
    var c9h = NEJ.P, M9D = c9h("nej.p");
    if (M9D.mE4I.trident0) return;
    JSON.parse = JSON.parse.ed1x(function (d9g) {
        var cC0x = d9g.args[0] || "";
        if (cC0x.length >= 5e5) {
            d9g.stopped = !0;
            d9g.value = eval("(" + cC0x + ")")
        }
    })
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, dP1x = c9h("nej.g"), a8i = c9h("nej.e"), k9b = c9h("nej.u"),
        h9c = c9h("nej.v"), bb0x = c9h("nej.h"), cN0x = c9h("nej.x"), Gg1x, bmb7U = {},
        Q9H = document.createDocumentFragment();
    a8i.kH3x = cN0x.kH3x = function (E9v) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return;
        var C9t = !!E9v.id ? E9v.id : "auto-id-" + k9b.RC4G(16);
        E9v.id = C9t;
        if (a8i.z9q(C9t) != E9v) bmb7U[C9t] = E9v;
        return C9t
    };
    a8i.z9q = cN0x.z9q = function (E9v) {
        var f9e = bmb7U["" + E9v];
        if (!!f9e) return f9e;
        if (!k9b.fg1x(E9v) && !k9b.un7g(E9v)) return E9v;
        return document.getElementById(E9v)
    };
    a8i.cQ0x = cN0x.cQ0x = function (E9v, dJ1x) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return null;
        var j9a = bb0x.bpK8C(E9v);
        if (!!dJ1x) k9b.mq3x(j9a, function (f9e, r9i) {
            if (!a8i.bB0x(f9e, dJ1x)) j9a.splice(r9i, 1)
        });
        return j9a
    };
    a8i.I9z = cN0x.I9z = function (E9v, fl1x) {
        E9v = a8i.z9q(E9v);
        return !E9v ? null : bb0x.bpJ8B(E9v, fl1x.trim())
    };
    a8i.bKo2x = cN0x.bKo2x = function (E9v) {
        E9v = a8i.z9q(E9v);
        if (!!E9v) {
            E9v = E9v.parentNode;
            while (!!E9v) {
                if (E9v.scrollHeight > E9v.clientHeight) break;
                E9v = E9v.parentNode
            }
            if (!!E9v) return E9v
        }
        var oe4i = document.body.scrollHeight, yY9P = document.documentElement.scrollHeight;
        return yY9P >= oe4i ? document.documentElement : document.body
    };
    a8i.oE4I = function () {
        var bKE3x = function (j9a) {
            var m9d = 0;
            k9b.be0x(j9a, function (gn2x) {
                if (!gn2x) return;
                if (!m9d) {
                    m9d = gn2x
                } else {
                    m9d = Math.min(m9d, gn2x)
                }
            });
            return m9d
        };
        return function (uv7o) {
            var Gi1x = uv7o || document, zf9W = Gi1x.body, zh9Y = Gi1x.documentElement, m9d = {
                scrollTop: Math.max(zf9W.scrollTop, zh9Y.scrollTop),
                scrollLeft: Math.max(zf9W.scrollLeft, zh9Y.scrollLeft),
                clientWidth: bKE3x([zf9W.clientWidth, zf9W.offsetWidth, zh9Y.clientWidth, zh9Y.offsetWidth]),
                clientHeight: bKE3x([zf9W.clientHeight, zf9W.offsetHeight, zh9Y.clientHeight, zh9Y.offsetHeight])
            };
            m9d.scrollWidth = Math.max(m9d.clientWidth, zf9W.scrollWidth, zh9Y.scrollWidth);
            m9d.scrollHeight = Math.max(m9d.clientHeight, zf9W.scrollHeight, zh9Y.scrollHeight);
            return m9d
        }
    }();
    a8i.cxN2x = function (fd1x, nX4b) {
        var m9d = NEJ.X({}, nX4b), bMt3x = fd1x.width / fd1x.height, RG4K = nX4b.width / nX4b.height;
        if (bMt3x > RG4K && nX4b.height > fd1x.height) {
            m9d.height = fd1x.height;
            m9d.width = m9d.height * RG4K
        }
        if (bMt3x < RG4K && nX4b.width > fd1x.width) {
            m9d.width = fd1x.width;
            m9d.height = m9d.width / RG4K
        }
        return m9d
    };
    a8i.cxM2x = function () {
        var cO0x = /\s+/;
        var tx6r = {
            left: function () {
                return 0
            }, center: function (gM2x, nX4b) {
                return (gM2x.width - nX4b.width) / 2
            }, right: function (gM2x, nX4b) {
                return gM2x.width - nX4b.width
            }, top: function () {
                return 0
            }, middle: function (gM2x, nX4b) {
                return (gM2x.height - nX4b.height) / 2
            }, bottom: function (gM2x, nX4b) {
                return gM2x.height - nX4b.height
            }
        };
        return function (gM2x, nX4b, ni4m) {
            var m9d = {}, bs0x = (ni4m || "").split(cO0x), gl2x = tx6r[bs0x[1]] || tx6r.middle,
                gG2x = tx6r[bs0x[0]] || tx6r.center;
            m9d.top = gl2x(gM2x, nX4b);
            m9d.left = gG2x(gM2x, nX4b);
            return m9d
        }
    }();
    a8i.sf5k = cN0x.sf5k = function (E9v, dJ1x) {
        bb0x.bpA8s(E9v, dJ1x || a8i.u9l(E9v, "hover") || "js-hover");
        return this
    };
    a8i.Gn1x = cN0x.Gn1x = function (E9v) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return;
        bb0x.bpw8o(E9v)
    };
    a8i.bRM5R = cN0x.bRM5R = function () {
        var Q9H = {}, buN9E = 2;
        var bSp5u = function (C9t, dJ1x, d9g) {
            Q9H[C9t] = [h9c.kJ3x(d9g), h9c.nH4L(d9g)];
            a8i.y9p(C9t, dJ1x)
        };
        var bSK5P = function (C9t, dJ1x, d9g) {
            var bG0x = Q9H[C9t];
            if (!k9b.en1x(bG0x)) return;
            var bTd6X = Math.abs(h9c.kJ3x(d9g) - bG0x[0]), bTm6g = Math.abs(h9c.nH4L(d9g) - bG0x[1]);
            if (bTd6X > buN9E || bTm6g > buN9E) blk7d(C9t, dJ1x)
        };
        var blk7d = function (C9t, dJ1x) {
            if (k9b.en1x(Q9H[C9t])) {
                Q9H[C9t] = -1;
                a8i.w9n(C9t, dJ1x)
            }
        };
        return function (E9v, dJ1x) {
            var C9t = a8i.kH3x(E9v);
            if (!C9t || Q9H[C9t] != null) return;
            Q9H[C9t] = -1;
            dJ1x = dJ1x || a8i.u9l(C9t, "highlight") || "js-highlight";
            h9c.s9j(C9t, "touchstart", bSp5u.g9d(null, C9t, dJ1x));
            h9c.s9j(document, "touchmove", bSK5P.g9d(null, C9t, dJ1x));
            h9c.s9j(document, "touchend", blk7d.g9d(null, C9t, dJ1x));
            h9c.s9j(document, "touchcancel", blk7d.g9d(null, C9t, dJ1x))
        }
    }();
    a8i.zt9k = cN0x.zt9k = function () {
        var bTp6j = function (C9t, dJ1x, bTH6B) {
            var E9v = a8i.z9q(C9t), d9g = {clazz: dJ1x, target: E9v};
            if (a8i.bB0x(E9v, dJ1x)) {
                d9g.toggled = !1;
                a8i.w9n(E9v, dJ1x)
            } else {
                d9g.toggled = !0;
                a8i.y9p(E9v, dJ1x)
            }
            bTH6B.call(null, d9g)
        };
        return function (E9v, e9f) {
            E9v = a8i.z9q(E9v);
            if (!!E9v) {
                var im2x = {ontoggle: bn0x, clazz: "js-toggle", element: E9v.parentNode};
                if (k9b.fg1x(e9f)) {
                    var f9e = a8i.z9q(e9f);
                    !!f9e ? im2x.element = f9e : im2x.clazz = e9f
                } else {
                    NEJ.EX(im2x, e9f);
                    im2x.element = a8i.z9q(im2x.element)
                }
                var C9t = a8i.kH3x(im2x.element);
                h9c.s9j(E9v, "click", bTp6j.g9d(null, C9t, im2x.clazz, im2x.ontoggle || bn0x))
            }
            return this
        }
    }();
    a8i.lI3x = cN0x.lI3x = function (E9v, e9f) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return;
        var eE1x = 0, dJ1x = "js-focus";
        if (k9b.un7g(e9f)) {
            eE1x = e9f
        } else if (k9b.fg1x(e9f)) {
            dJ1x = e9f
        } else if (k9b.kI3x(e9f)) {
            eE1x = e9f.mode || eE1x;
            dJ1x = e9f.clazz || dJ1x
        }
        var A9r = parseInt(a8i.u9l(E9v, "mode"));
        if (!isNaN(A9r)) eE1x = A9r;
        A9r = a8i.u9l(E9v, "focus");
        if (!!A9r) dJ1x = A9r;
        bb0x.bpm8e(E9v, eE1x, dJ1x);
        return this
    };
    a8i.cT0x = function () {
        var bv0x = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fa1x, fl1x, bD0x) {
            var E9v = document.createElement(fa1x);
            NEJ.X(E9v, bv0x[fa1x.toLowerCase()]);
            if (!!fl1x) E9v.className = fl1x;
            bD0x = a8i.z9q(bD0x);
            if (!!bD0x) bD0x.appendChild(E9v);
            return E9v
        }
    }();
    a8i.UL1x = function () {
        var bUA6u = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bUZ6T = function (T9K) {
            T9K = T9K.trim();
            if (!T9K) return a8i.cT0x("iframe");
            var fe1x;
            try {
                fe1x = document.createElement('<iframe name="' + T9K + '"></iframe>');
                fe1x.frameBorder = 0
            } catch (e) {
                fe1x = a8i.cT0x("iframe");
                fe1x.name = T9K
            }
            return fe1x
        };
        return function (e9f) {
            e9f = e9f || X0x;
            var fe1x = bUZ6T(e9f.name || "");
            if (!e9f.visible) fe1x.style.display = "none";
            if (k9b.fY2x(e9f.onload)) h9c.s9j(fe1x, "load", function (d9g) {
                if (!fe1x.src) return;
                h9c.hE2x(fe1x, "load");
                e9f.onload(d9g)
            });
            var bD0x = e9f.parent;
            if (k9b.fY2x(bD0x)) {
                try {
                    bD0x(fe1x)
                } catch (e) {
                }
            } else {
                (a8i.z9q(bD0x) || document.body).appendChild(fe1x)
            }
            var dv1x = e9f.src || bUA6u();
            window.setTimeout(function () {
                fe1x.src = dv1x
            }, 0);
            return fe1x
        }
    }();
    a8i.cK0x = cN0x.cK0x = function () {
        var byT0x = function (Jz2x) {
            Jz2x.src = dP1x.bpR8J
        };
        var bAl0x = function (uF7y) {
            uF7y.src = "about:blank"
        };
        return function (E9v, bVu6o) {
            E9v = a8i.z9q(E9v);
            if (!E9v) return this;
            if (!bVu6o) h9c.hE2x(E9v);
            delete bmb7U[E9v.id];
            var fa1x = E9v.tagName;
            if (fa1x == "IFRAME") {
                bAl0x(E9v)
            } else if (fa1x == "IMG") {
                byT0x(E9v)
            } else if (!!E9v.getElementsByTagName) {
                k9b.be0x(E9v.getElementsByTagName("img"), byT0x);
                k9b.be0x(E9v.getElementsByTagName("iframe"), bAl0x)
            }
            if (!!E9v.parentNode) {
                E9v.parentNode.removeChild(E9v)
            }
            return this
        }
    }();
    a8i.mm3x = cN0x.mm3x = function (E9v) {
        E9v = a8i.z9q(E9v);
        if (!!E9v) Q9H.appendChild(E9v);
        return this
    };
    a8i.bBo0x = cN0x.bBo0x = function (E9v) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return;
        k9b.mq3x(E9v.childNodes, function (f9e) {
            a8i.cK0x(f9e)
        })
    };
    a8i.Gv1x = cN0x.Gv1x = function () {
        var dJ1x, fX2x = /\s+/;
        var bVA6u = function () {
            if (!!dJ1x) return;
            dJ1x = a8i.rX5c(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a8i.bCi1x()
        };
        return function (E9v, e9f) {
            E9v = a8i.z9q(E9v);
            if (!E9v) return;
            bVA6u();
            e9f = e9f || X0x;
            var bD0x = E9v.parentNode;
            if (!a8i.bB0x(bD0x, dJ1x)) {
                bD0x = a8i.cT0x("span", dJ1x);
                E9v.insertAdjacentElement("beforeBegin", bD0x);
                bD0x.appendChild(E9v)
            }
            var bCA1x = e9f.nid || "", f9e = a8i.I9z(bD0x, bCA1x || dJ1x + "-show")[0];
            if (!f9e) {
                var dD1x = ((e9f.clazz || "") + " " + bCA1x).trim();
                dD1x = dJ1x + "-show" + (!dD1x ? "" : " ") + dD1x;
                f9e = a8i.cT0x(e9f.tag || "span", dD1x);
                bD0x.appendChild(f9e)
            }
            var dD1x = e9f.clazz;
            if (!!dD1x) {
                dD1x = (dD1x || "").trim().split(fX2x)[0] + "-parent";
                a8i.y9p(bD0x, dD1x)
            }
            return f9e
        }
    }();
    a8i.u9l = cN0x.u9l = function () {
        var bkR7K = {}, fa1x = "data-", cO0x = /\-(.{1})/gi;
        var Ev0x = function (E9v) {
            var C9t = a8i.kH3x(E9v);
            if (!!bkR7K[C9t]) return;
            var bv0x = {};
            k9b.be0x(E9v.attributes, function (f9e) {
                var J9A = f9e.nodeName;
                if (J9A.indexOf(fa1x) != 0) return;
                J9A = J9A.replace(fa1x, "").replace(cO0x, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bv0x[J9A] = f9e.nodeValue || ""
            });
            bkR7K[C9t] = bv0x
        };
        return function (E9v, J9A, A9r) {
            E9v = a8i.z9q(E9v);
            if (!E9v) return null;
            var TN1x = E9v.dataset;
            if (!TN1x) {
                Ev0x(E9v);
                TN1x = bkR7K[E9v.id]
            }
            if (A9r !== undefined) TN1x[J9A] = A9r;
            return TN1x[J9A]
        }
    }();
    a8i.fT2x = cN0x.fT2x = function (E9v, T9K, A9r) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return "";
        if (A9r !== undefined && !!E9v.setAttribute) E9v.setAttribute(T9K, A9r);
        return bb0x.boh8Z(E9v, T9K)
    };
    a8i.mG4K = function (dy1x) {
        var qi5n = document.createElement("div");
        qi5n.innerHTML = dy1x;
        var j9a = a8i.cQ0x(qi5n);
        return j9a.length > 1 ? qi5n : j9a[0]
    };
    a8i.bVF6z = cN0x.bVF6z = function (E9v) {
        E9v = a8i.z9q(E9v);
        return !E9v ? "" : bb0x.bpj8b(E9v)
    };
    a8i.bIP2x = function (yc8U) {
        yc8U = (yc8U || "").trim();
        return !yc8U ? null : bb0x.bpi8a(yc8U)
    };
    a8i.bVJ6D = function (cL0x, t9k) {
        cL0x = cL0x || "";
        switch (t9k) {
            case"xml":
                cL0x = a8i.bIP2x(cL0x);
                break;
            case"json":
                try {
                    cL0x = JSON.parse(cL0x)
                } catch (ex) {
                    cL0x = null
                }
                break
        }
        return cL0x
    };
    a8i.hR2x = cN0x.hR2x = function () {
        var bWc6W = function (E9v) {
            return E9v == document.body || E9v == document.documentElement
        };
        return function (dH1x, nK4O) {
            dH1x = a8i.z9q(dH1x);
            if (!dH1x) return null;
            nK4O = a8i.z9q(nK4O) || null;
            var m9d = {x: 0, y: 0}, bkL7E, df1x, TP1x;
            while (!!dH1x && dH1x != nK4O) {
                bkL7E = bWc6W(dH1x);
                df1x = bkL7E ? 0 : dH1x.scrollLeft;
                TP1x = parseInt(a8i.da1x(dH1x, "borderLeftWidth")) || 0;
                m9d.x += dH1x.offsetLeft + TP1x - df1x;
                df1x = bkL7E ? 0 : dH1x.scrollTop;
                TP1x = parseInt(a8i.da1x(dH1x, "borderTopWidth")) || 0;
                m9d.y += dH1x.offsetTop + TP1x - df1x;
                dH1x = dH1x.offsetParent
            }
            return m9d
        }
    }();
    a8i.mL4P = cN0x.mL4P = function (E9v) {
        var bj0x = a8i.hR2x(E9v);
        window.scrollTo(bj0x.x, bj0x.y);
        return this
    };
    a8i.cxo2x = function (sm5r) {
        sm5r = (sm5r || "").trim();
        return bb0x.bBG1x(sm5r)
    };
    a8i.bXo6i = cN0x.bXo6i = function (E9v, T9K, bv0x) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return this;
        var A9r = bb0x.bLG3x(T9K, bv0x);
        if (!A9r) return this;
        a8i.Y0x(E9v, "transform", A9r);
        return this
    };
    a8i.fB1x = cN0x.fB1x = function (E9v, bv0x) {
        E9v = a8i.z9q(E9v);
        if (!!E9v) k9b.ek1x(bv0x, function (A9r, T9K) {
            a8i.Y0x(E9v, T9K, A9r)
        });
        return this
    };
    a8i.bXA6u = cN0x.bXA6u = function (fy1x, e9f) {
        fy1x = a8i.z9q(fy1x);
        if (!fy1x) return {start: 0, end: 0};
        if (k9b.un7g(e9f)) e9f = {start: e9f, end: e9f};
        if (e9f != null) {
            if (e9f.end == null) e9f.end = e9f.start || 0;
            bb0x.bpv8n(fy1x, e9f)
        } else {
            e9f = bb0x.bpt8l(fy1x)
        }
        return e9f
    };
    a8i.Y0x = cN0x.Y0x = function (E9v, T9K, A9r) {
        E9v = a8i.z9q(E9v);
        if (!!E9v) bb0x.boH8z(E9v, T9K, A9r);
        return this
    };
    a8i.da1x = cN0x.da1x = function (E9v, T9K) {
        E9v = a8i.z9q(E9v);
        if (!E9v) return "";
        var gv2x = !window.getComputedStyle ? E9v.currentStyle || X0x : window.getComputedStyle(E9v, null);
        return gv2x[bb0x.bNV3x(T9K)] || ""
    };
    a8i.bNb3x = function () {
        var cO0x = /[\s\r\n]+/gi;
        return function (cd0x) {
            cd0x = (cd0x || "").trim().replace(cO0x, " ");
            if (!cd0x) return;
            var f9e = a8i.cT0x("style");
            document.head.appendChild(f9e);
            bb0x.bot8l(f9e, bb0x.bQl4p(cd0x));
            return f9e
        }
    }();
    a8i.bNh3x = function (wo8g) {
        try {
            wo8g = wo8g.trim();
            if (!!wo8g) return (new Function(wo8g))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a8i.rX5c = function () {
        var cO0x = /#<.*?>/g, gb2x = +(new Date);
        return function (jt3x) {
            if (!Gg1x) Gg1x = [];
            var fl1x = "auto-" + gb2x++;
            Gg1x.push(jt3x.replace(cO0x, fl1x));
            return fl1x
        }
    }();
    a8i.bCi1x = function () {
        if (!!Gg1x) {
            a8i.bNb3x(Gg1x.join(""));
            Gg1x = null
        }
        return this
    };
    a8i.cxh2x = function (cd0x, jt3x) {
        cd0x = a8i.z9q(cd0x);
        return !cd0x ? null : bb0x.bos8k(cd0x, jt3x)
    };
    a8i.y9p = cN0x.y9p = function () {
        bb0x.bpI8A.apply(bb0x, arguments);
        return this
    };
    a8i.w9n = cN0x.w9n = function () {
        bb0x.bpF8x.apply(bb0x, arguments);
        return this
    };
    a8i.ev1x = cN0x.ev1x = function () {
        bb0x.Jv2x.apply(bb0x, arguments);
        return this
    };
    a8i.bB0x = cN0x.bB0x = function () {
        return bb0x.bpC8u.apply(bb0x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cN0x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, fc1x = NEJ.R, bn0x = NEJ.F, a8i = c9h("nej.e"), bb0x = c9h("nej.h"),
        k9b = c9h("nej.u");
    var Da0x = function (i9b, t9k) {
        try {
            t9k = t9k.toLowerCase();
            if (i9b === null) return t9k == "null";
            if (i9b === undefined) return t9k == "undefined";
            return X0x.toString.call(i9b).toLowerCase() == "[object " + t9k + "]"
        } catch (e) {
            return !1
        }
    };
    k9b.fY2x = function (i9b) {
        return Da0x(i9b, "function")
    };
    k9b.fg1x = function (i9b) {
        return Da0x(i9b, "string")
    };
    k9b.un7g = function (i9b) {
        return Da0x(i9b, "number")
    };
    k9b.cxg2x = function (i9b) {
        return Da0x(i9b, "boolean")
    };
    k9b.Gx1x = function (i9b) {
        return Da0x(i9b, "date")
    };
    k9b.en1x = function (i9b) {
        return Da0x(i9b, "array")
    };
    k9b.kI3x = function (i9b) {
        return Da0x(i9b, "object")
    };
    k9b.fj1x = function () {
        var cO0x = /[^\x00-\xfff]/g;
        return function (bi0x) {
            return ("" + (bi0x || "")).replace(cO0x, "**").length
        }
    }();
    k9b.cU0x = function (j9a, q9h) {
        var dC1x = k9b.fY2x(q9h) ? q9h : function (A9r) {
            return A9r === q9h
        }, r9i = k9b.ek1x(j9a, dC1x);
        return r9i != null ? r9i : -1
    };
    k9b.cxf2x = function () {
        var btP9G;
        var JK2x = function (j9a, no4s, nJ4N) {
            if (no4s > nJ4N) return -1;
            var DS0x = Math.ceil((no4s + nJ4N) / 2), m9d = btP9G(j9a[DS0x], DS0x, j9a);
            if (m9d == 0) return DS0x;
            if (m9d < 0) return JK2x(j9a, no4s, DS0x - 1);
            return JK2x(j9a, DS0x + 1, nJ4N)
        };
        return function (j9a, FZ1x) {
            btP9G = FZ1x || bn0x;
            return JK2x(j9a, 0, j9a.length - 1)
        }
    }();
    k9b.mq3x = function (j9a, dq1x, ig2x) {
        if (!j9a || !j9a.length || !k9b.fY2x(dq1x)) return null;
        for (var i = j9a.length - 1; i >= 0; i--) if (!!dq1x.call(ig2x, j9a[i], i, j9a)) return i;
        return null
    };
    k9b.be0x = function (j9a, dq1x, ig2x) {
        if (!j9a || !j9a.length || !k9b.fY2x(dq1x)) return this;
        if (!!j9a.forEach) {
            j9a.forEach(dq1x, ig2x);
            return this
        }
        for (var i = 0, l = j9a.length; i < l; i++) dq1x.call(ig2x, j9a[i], i, j9a);
        return this
    };
    k9b.ek1x = function (j9a, dq1x, ig2x) {
        if (!j9a || !k9b.fY2x(dq1x)) return null;
        if (j9a.length != null) {
            if (j9a.length > 0) for (var i = 0, l = j9a.length; i < l; i++) if (!!dq1x.call(ig2x, j9a[i], i, j9a)) return i
        }
        if (k9b.kI3x(j9a)) {
            for (var x in j9a) if (j9a.hasOwnProperty(x) && !!dq1x.call(ig2x, j9a[x], x, j9a)) return x
        }
        return null
    };
    k9b.bXY7R = function (ii2x, bYv7o, e9f) {
        ii2x = ii2x || [];
        e9f = e9f || X0x;
        var bwZ9Q = !!e9f.union, uW7P = !!e9f.begin, Ud1x = e9f.compare, bYD7w = bwZ9Q && uW7P ? k9b.mq3x : k9b.be0x;
        bYD7w(bYv7o, function (q9h) {
            if (!!Ud1x) Ud1x = Ud1x.dT1x(q9h);
            var r9i = k9b.cU0x(ii2x, Ud1x || q9h);
            if (r9i >= 0) ii2x.splice(r9i, 1);
            if (bwZ9Q) ii2x[uW7P ? "unshift" : "push"](q9h)
        });
        return ii2x
    };
    k9b.AN9E = function (bv0x, bi0x) {
        if (!bv0x || !bi0x || !bi0x.replace) return bi0x || "";
        return bi0x.replace(bv0x.r, function ($1) {
            var m9d = bv0x[!bv0x.i ? $1.toLowerCase() : $1];
            return m9d != null ? m9d : $1
        })
    };
    k9b.dI1x = function () {
        var bv0x = {
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
        return function (bi0x) {
            return k9b.AN9E(bv0x, bi0x)
        }
    }();
    k9b.JW2x = function () {
        var bv0x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bi0x) {
            return k9b.AN9E(bv0x, bi0x)
        }
    }();
    k9b.iL2x = function () {
        var bv0x = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, bYE7x = ["上午", "下午"],
            bYF7y = ["A.M.", "P.M."], bkl7e = ["日", "一", "二", "三", "四", "五", "六"],
            bYP7I = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            bYQ7J = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var JZ2x = function (gj2x) {
            gj2x = parseInt(gj2x) || 0;
            return (gj2x < 10 ? "0" : "") + gj2x
        };
        var bYX7Q = function (oI4M) {
            return oI4M < 12 ? 0 : 1
        };
        return function (bz0x, GF1x, bZc7V) {
            if (!bz0x || !GF1x) return "";
            bz0x = k9b.UV2x(bz0x);
            bv0x.yyyy = bz0x.getFullYear();
            bv0x.yy = ("" + bv0x.yyyy).substr(2);
            bv0x.M = bz0x.getMonth() + 1;
            bv0x.MM = JZ2x(bv0x.M);
            bv0x.eM = bYQ7J[bv0x.M - 1];
            bv0x.cM = bYP7I[bv0x.M - 1];
            bv0x.d = bz0x.getDate();
            bv0x.dd = JZ2x(bv0x.d);
            bv0x.H = bz0x.getHours();
            bv0x.HH = JZ2x(bv0x.H);
            bv0x.m = bz0x.getMinutes();
            bv0x.mm = JZ2x(bv0x.m);
            bv0x.s = bz0x.getSeconds();
            bv0x.ss = JZ2x(bv0x.s);
            bv0x.ms = bz0x.getMilliseconds();
            bv0x.w = bkl7e[bz0x.getDay()];
            var bCh1x = bYX7Q(bv0x.H);
            bv0x.ct = bYE7x[bCh1x];
            bv0x.et = bYF7y[bCh1x];
            if (!!bZc7V) {
                bv0x.H = bv0x.H % 12
            }
            return k9b.AN9E(bv0x, GF1x)
        }
    }();
    k9b.UV2x = function (bz0x) {
        var cD0x = bz0x;
        if (k9b.fg1x(bz0x)) cD0x = new Date(Date.parse(bz0x));
        if (!k9b.Gx1x(bz0x)) cD0x = new Date(bz0x);
        return cD0x
    };
    k9b.Gn1x = function (bZF7y, bZK7D) {
        return (new Number(bZF7y)).toFixed(bZK7D)
    };
    k9b.bjY7R = function () {
        var fX2x = /([^\/:])\/.*$/, jo3x = /\/[^\/]+$/, CW0x = /[#\?]/, bjU7N = location.href.split(/[?#]/)[0],
            ry5D = document.createElement("a");
        var bjR7K = function (lF3x) {
            return (lF3x || "").indexOf("://") > 0
        };
        var bFc1x = function (lF3x) {
            return (lF3x || "").split(CW0x)[0].replace(jo3x, "/")
        };
        var cau7n = function (lF3x, fu1x) {
            if (lF3x.indexOf("/") == 0) return fu1x.replace(fX2x, "$1") + lF3x;
            return bFc1x(fu1x) + lF3x
        };
        bjU7N = bFc1x(bjU7N);
        return function (lF3x, fu1x) {
            lF3x = (lF3x || "").trim();
            if (!bjR7K(fu1x)) fu1x = bjU7N;
            if (!lF3x) return fu1x;
            if (bjR7K(lF3x)) return lF3x;
            lF3x = cau7n(lF3x, fu1x);
            ry5D.href = lF3x;
            lF3x = ry5D.href;
            return bjR7K(lF3x) ? lF3x : ry5D.getAttribute("href", 4)
        }
    }();
    k9b.cax7q = function () {
        var cO0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V9M) {
            if (cO0x.test(V9M || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k9b.bFA1x = function (G9x, im2x) {
        if (!G9x) return im2x;
        var T9K = G9x.tagName.toLowerCase(), j9a = a8i.cQ0x(G9x);
        if (!j9a || !j9a.length) {
            im2x[T9K] = G9x.textContent || G9x.text || "";
            return im2x
        }
        var dO1x = {};
        im2x[T9K] = dO1x;
        k9b.be0x(j9a, function (f9e) {
            k9b.bFA1x(f9e, dO1x)
        });
        return im2x
    };
    k9b.cwJ2x = function (yc8U) {
        try {
            return k9b.bFA1x(a8i.bIP2x(yc8U), {})
        } catch (ex) {
            return null
        }
    };
    k9b.bFZ2x = function (hG2x, Kn2x) {
        var im2x = {};
        k9b.be0x((hG2x || "").split(Kn2x), function (T9K) {
            var VD2x = T9K.split("=");
            if (!VD2x || !VD2x.length) return;
            var J9A = VD2x.shift();
            if (!J9A) return;
            im2x[decodeURIComponent(J9A)] = decodeURIComponent(VD2x.join("="))
        });
        return im2x
    };
    k9b.vq7j = function (gf2x, Kn2x, cbh7a) {
        if (!gf2x) return "";
        var bs0x = [];
        for (var x in gf2x) {
            bs0x.push(encodeURIComponent(x) + "=" + (!!cbh7a ? encodeURIComponent(gf2x[x]) : gf2x[x]))
        }
        return bs0x.join(Kn2x || ",")
    };
    k9b.hq2x = function (bw0x) {
        return k9b.bFZ2x(bw0x, "&")
    };
    k9b.dd1x = function (gf2x) {
        return k9b.vq7j(gf2x, "&", !0)
    };
    k9b.cwH2x = function (gf2x) {
        return bb0x.Fl0x(gf2x)
    };
    k9b.cwC2x = function (j9a, dC1x) {
        var m9d = {};
        k9b.be0x(j9a, function (q9h) {
            var J9A = q9h;
            if (!!dC1x) {
                J9A = dC1x(q9h)
            }
            m9d[J9A] = q9h
        });
        return m9d
    };
    k9b.cwB2x = function (gj2x, fV2x) {
        var cbX7Q = ("" + gj2x).length, ccj7c = Math.max(1, parseInt(fV2x) || 0), df1x = ccj7c - cbX7Q;
        if (df1x > 0) {
            gj2x = (new Array(df1x + 1)).join("0") + gj2x
        }
        return "" + gj2x
    };
    k9b.VN2x = function (gf2x, T9K) {
        if (!k9b.en1x(T9K)) {
            try {
                delete gf2x[T9K]
            } catch (e) {
                gf2x[T9K] = undefined
            }
            return this
        }
        k9b.be0x(T9K, k9b.VN2x.g9d(k9b, gf2x));
        return this
    };
    k9b.RC4G = function () {
        var bLU3x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bp0x) {
            bp0x = bp0x || 10;
            var m9d = [];
            for (var i = 0, bLX3x; i < bp0x; ++i) {
                bLX3x = Math.floor(Math.random() * bLU3x.length);
                m9d.push(bLU3x.charAt(bLX3x))
            }
            return m9d.join("")
        }
    }();
    k9b.Ku2x = function (fL2x, fd1x) {
        return Math.floor(Math.random() * (fd1x - fL2x) + fL2x)
    };
    k9b.nk4o = function (bp0x) {
        bp0x = Math.max(0, Math.min(bp0x || 8, 30));
        var fL2x = Math.pow(10, bp0x - 1), fd1x = fL2x * 10;
        return k9b.Ku2x(fL2x, fd1x).toString()
    };
    k9b.VU2x = function () {
        var gb2x = +(new Date);
        return function () {
            return "" + gb2x++
        }
    }()
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, fc1x = NEJ.R, bn0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        M9D = c9h("nej.ut"), nC4G;
    if (!!M9D.cy0x) return;
    M9D.cy0x = NEJ.C();
    nC4G = M9D.cy0x.prototype;
    M9D.cy0x.B9s = function (e9f) {
        e9f = e9f || {};
        var co0x = !!this.AJ9A && this.AJ9A.shift();
        if (!co0x) {
            co0x = new this(e9f);
            this.ccE8w = (this.ccE8w || 0) + 1
        }
        co0x.bk0x(e9f);
        return co0x
    };
    M9D.cy0x.S9J = function () {
        var KF2x = function (q9h, r9i, j9a) {
            q9h.S9J();
            j9a.splice(r9i, 1)
        };
        return function (co0x) {
            if (!co0x) return null;
            if (!k9b.en1x(co0x)) {
                if (!(co0x instanceof this)) {
                    var fl1x = co0x.constructor;
                    if (!!fl1x.S9J) fl1x.S9J(co0x);
                    return null
                }
                if (co0x == this.eM1x) delete this.eM1x;
                if (co0x == this.AD9u) delete this.AD9u;
                co0x.bE0x();
                if (!this.AJ9A) this.AJ9A = [];
                if (k9b.cU0x(this.AJ9A, co0x) < 0) {
                    this.AJ9A.push(co0x)
                }
                return null
            }
            k9b.mq3x(co0x, KF2x, this)
        }
    }();
    M9D.cy0x.fW2x = function (e9f) {
        e9f = e9f || {};
        if (!this.eM1x) this.eM1x = this.B9s(e9f);
        return this.eM1x
    };
    M9D.cy0x.ccK8C = function (e9f, qT5Y) {
        e9f = e9f || {};
        if (!!qT5Y && !!this.AD9u) {
            this.AD9u.S9J();
            delete this.AD9u
        }
        if (!this.AD9u) {
            this.AD9u = this.B9s(e9f)
        } else {
            this.AD9u.bk0x(e9f)
        }
        return this.AD9u
    };
    nC4G.cl0x = function () {
        var gb2x = +(new Date);
        return function () {
            this.id = gb2x++;
            this.kW3x = {};
            this.btn9e = {}
        }
    }();
    nC4G.bk0x = function (e9f) {
        this.bjc6W(e9f)
    };
    nC4G.bE0x = function () {
        this.hE2x();
        this.GT1x()
    };
    nC4G.bT0x = function () {
        var gb2x = +(new Date);
        var ccL8D = function (bg0x) {
            if (!bg0x || bg0x.length < 3) return;
            this.btn9e["de-" + gb2x++] = bg0x;
            h9c.s9j.apply(h9c, bg0x)
        };
        return function (j9a) {
            k9b.be0x(j9a, ccL8D, this)
        }
    }();
    nC4G.GT1x = function () {
        var ccT8L = function (bg0x, J9A, bv0x) {
            delete bv0x[J9A];
            h9c.mB4F.apply(h9c, bg0x)
        };
        return function () {
            k9b.ek1x(this.btn9e, ccT8L)
        }
    }();
    nC4G.cwt2x = function (dC1x) {
        dC1x = dC1x || bn0x;
        k9b.ek1x(this, function (Dl0x, J9A, bv0x) {
            if (!!Dl0x && !!Dl0x.S9J && !dC1x(Dl0x)) {
                delete bv0x[J9A];
                Dl0x.S9J()
            }
        })
    };
    nC4G.S9J = function () {
        this.constructor.S9J(this)
    };
    nC4G.bvN9E = function (t9k) {
        var d9g = this.kW3x[t9k.toLowerCase()];
        return !!d9g && d9g !== bn0x
    };
    nC4G.s9j = function (t9k, d9g) {
        this.vk7d.apply(this, arguments);
        return this
    };
    nC4G.mB4F = function (t9k, d9g) {
        var t9k = (t9k || "").toLowerCase(), dE1x = this.kW3x[t9k];
        if (!k9b.en1x(dE1x)) {
            if (dE1x == d9g) delete this.kW3x[t9k];
            return
        }
        k9b.mq3x(dE1x, function (eJ1x, r9i, j9a) {
            if (eJ1x == d9g) j9a.splice(r9i, 1)
        })
    };
    nC4G.vk7d = function (t9k, d9g) {
        if (!!t9k && k9b.fY2x(d9g)) this.kW3x[t9k.toLowerCase()] = d9g;
        return this
    };
    nC4G.bjc6W = function () {
        var cdl8d = function (d9g, t9k) {
            this.vk7d(t9k, d9g)
        };
        return function (dE1x) {
            k9b.ek1x(dE1x, cdl8d, this);
            return this
        }
    }();
    nC4G.hE2x = function () {
        var biR6L = function (d9g, t9k) {
            this.hE2x(t9k)
        };
        return function (t9k) {
            var t9k = (t9k || "").toLowerCase();
            if (!!t9k) {
                delete this.kW3x[t9k]
            } else {
                k9b.ek1x(this.kW3x, biR6L, this)
            }
            return this
        }
    }();
    nC4G.biJ6D = function (t9k, d9g) {
        if (!t9k || !k9b.fY2x(d9g)) return this;
        t9k = t9k.toLowerCase();
        var dE1x = this.kW3x[t9k];
        if (!dE1x) {
            this.kW3x[t9k] = d9g;
            return this
        }
        if (!k9b.en1x(dE1x)) {
            this.kW3x[t9k] = [dE1x]
        }
        this.kW3x[t9k].push(d9g);
        return this
    };
    nC4G.x9o = function (t9k) {
        var d9g = this.kW3x[(t9k || "").toLowerCase()];
        if (!d9g) return this;
        var bg0x = fc1x.slice.call(arguments, 1);
        if (!k9b.en1x(d9g)) return d9g.apply(this, bg0x);
        k9b.be0x(d9g, function (dc1x) {
            try {
                dc1x.apply(this, bg0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    M9D.Xz2x = function () {
        var Q9H = {};
        return function (C9t, fl1x, e9f) {
            var eK1x = fl1x.cdo8g;
            if (!eK1x) {
                eK1x = k9b.RC4G(10);
                fl1x.cdo8g = eK1x
            }
            var J9A = C9t + "-" + eK1x, co0x = Q9H[J9A];
            if (!!e9f && !co0x) {
                co0x = fl1x.B9s(e9f);
                co0x.S9J = co0x.S9J.ed1x(function (d9g) {
                    delete Q9H[J9A];
                    delete co0x.S9J
                });
                Q9H[J9A] = co0x
            }
            return co0x
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gN2x = function () {
        var cD0x = new Date, cdt8l = +cD0x, biw6q = 864e5;
        var cdv8n = function (T9K) {
            var pZ5e = document.cookie, rK5P = "\\b" + T9K + "=", Yn2x = pZ5e.search(rK5P);
            if (Yn2x < 0) return "";
            Yn2x += rK5P.length - 2;
            var zS9J = pZ5e.indexOf(";", Yn2x);
            if (zS9J < 0) zS9J = pZ5e.length;
            return pZ5e.substring(Yn2x, zS9J) || ""
        };
        return function (T9K, i9b) {
            if (i9b === undefined) return cdv8n(T9K);
            if (u.fg1x(i9b)) {
                if (!!i9b) {
                    document.cookie = T9K + "=" + i9b + ";";
                    return i9b
                }
                i9b = {expires: -100}
            }
            i9b = i9b || o;
            var pZ5e = T9K + "=" + (i9b.value || "") + ";";
            delete i9b.value;
            if (i9b.expires !== undefined) {
                cD0x.setTime(cdt8l + i9b.expires * biw6q);
                i9b.expires = cD0x.toGMTString()
            }
            pZ5e += u.vq7j(i9b, ";");
            document.cookie = pZ5e
        }
    }()
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, iH2x = c9h("nej.c"), dP1x = c9h("nej.g"), a8i = c9h("nej.e"), v9m = c9h("nej.j"),
        H9y = c9h("nej.ut"), M9D = c9h("nej.ut.j"), k9b = c9h("nej.u"), b8h;
    if (!!M9D.Hd1x) return;
    M9D.Hd1x = NEJ.C();
    b8h = M9D.Hd1x.O9F(H9y.cy0x);
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.oS4W = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.oS4W, e9f);
        var xV8N = iH2x.z9q("csrf");
        if ((/^\/[^\/]/.test(this.oS4W.url) || this.oS4W.url.indexOf(location.protocol + "//" + location.host) == 0) && !!xV8N.cookie && !!xV8N.param) {
            var bw0x = encodeURIComponent(xV8N.param) + "=" + encodeURIComponent(v9m.gN2x(xV8N.cookie) || ""),
                Kn2x = this.oS4W.url.indexOf("?") < 0 ? "?" : "&";
            this.oS4W.url += Kn2x + bw0x
        }
        this.YJ3x = e9f.headers || {};
        var bi0x = this.YJ3x[dP1x.wF8x];
        if (bi0x == null) this.YJ3x[dP1x.wF8x] = dP1x.bPM4Q
    };
    b8h.bE0x = function () {
        this.bH0x();
        delete this.zL9C;
        delete this.oS4W;
        delete this.YJ3x
    };
    b8h.cdO8G = function (bi0x) {
        var bv0x = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.oS4W.noescape) {
            return k9b.AN9E(bv0x, bi0x)
        } else {
            return bi0x
        }
    };
    b8h.sI5N = function (d9g) {
        var dZ1x = d9g.status;
        if (dZ1x == -1) {
            this.x9o("onerror", {code: dP1x.byJ0x, message: "请求[" + this.oS4W.url + "]超时！"});
            return
        }
        if (("" + dZ1x).indexOf("2") != 0) {
            this.x9o("onerror", {
                data: dZ1x,
                code: dP1x.bpW8O,
                message: "服务器返回异常状态[" + dZ1x + "]!",
                extData: d9g.result
            });
            return
        }
        this.x9o("onload", a8i.bVJ6D(this.cdO8G(d9g.result), this.oS4W.type))
    };
    b8h.ck0x = bn0x;
    b8h.bid6X = function (i9b) {
        var V9M = this.oS4W.url;
        if (!V9M) {
            this.x9o("onerror", {code: dP1x.bqd8V, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.oS4W.data = i9b == null ? null : i9b;
            var d9g = {request: this.oS4W, headers: this.YJ3x};
            try {
                this.x9o("onbeforerequest", d9g)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ck0x(d9g)
        } catch (e) {
            this.x9o("onerror", {code: dP1x.bpW8O, message: "请求[" + V9M + "]失败:" + e.message + "！"})
        }
        return this
    };
    b8h.jk3x = bn0x
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, bb0x = c9h("nej.h"), dP1x = c9h("nej.g"), k9b = c9h("nej.u"), M9D = c9h("nej.ut.j"),
        Q9H = {}, LD2x;
    if (!!M9D.Zo3x) return;
    M9D.Zo3x = NEJ.C();
    LD2x = M9D.Zo3x.O9F(M9D.Hd1x);
    LD2x.bE0x = function () {
        this.bH0x();
        window.clearTimeout(this.dL1x);
        delete this.dL1x;
        try {
            this.qI5N.onreadystatechange = bn0x;
            this.qI5N.abort()
        } catch (e) {
        }
        delete this.qI5N
    };
    LD2x.ck0x = function () {
        var cew8o = function (A9r, J9A) {
            this.qI5N.setRequestHeader(J9A, A9r)
        };
        return function (e9f) {
            var fD1x = e9f.request, nG4K = e9f.headers;
            this.qI5N = bb0x.bhP6J();
            if (nG4K[dP1x.wF8x] === dP1x.By9p) {
                delete nG4K[dP1x.wF8x];
                this.qI5N.upload.onprogress = this.hr2x.g9d(this, 1);
                if (fD1x.data.tagName === "FORM") fD1x.data = new FormData(fD1x.data)
            }
            this.qI5N.onreadystatechange = this.hr2x.g9d(this, 2);
            if (fD1x.timeout != 0) {
                this.dL1x = window.setTimeout(this.hr2x.g9d(this, 3), fD1x.timeout)
            }
            this.qI5N.open(fD1x.method, fD1x.url, !fD1x.sync);
            k9b.ek1x(nG4K, cew8o, this);
            if (!!this.oS4W.cookie && "withCredentials" in this.qI5N) this.qI5N.withCredentials = !0;
            this.qI5N.send(fD1x.data)
        }
    }();
    LD2x.hr2x = function (t9k) {
        switch (t9k) {
            case 1:
                this.x9o("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qI5N.readyState == 4) this.sI5N({
                    status: this.qI5N.status,
                    result: this.qI5N.responseText || ""
                });
                break;
            case 3:
                this.sI5N({status: -1});
                break
        }
    };
    LD2x.jk3x = function () {
        this.sI5N({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var LJ2x = {}, ZW3x = [], bFY2x = /\s+/g, gb2x = +(new Date), Ho1x, bN0x, lB3x;
    var Df0x = function () {
        var fX2x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, jo3x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            CW0x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bhC6w = /^new\s+/,
            cfL8D = /['"]/;
        var cfO8G = function (A9r) {
            if (fX2x.test(A9r)) return;
            A9r = A9r.split(".")[0].trim();
            if (!A9r || cfL8D.test(A9r)) return;
            A9r = A9r.replace(bhC6w, "");
            try {
                if (CW0x.test(A9r)) return;
                lB3x[A9r] = 1
            } catch (e) {
            }
        };
        return function (bi0x) {
            bi0x = bi0x || "";
            if (!bi0x || fX2x.test(bi0x)) return;
            var bs0x = bi0x.split(jo3x);
            for (var i = 0, l = bs0x.length; i < l; i++) cfO8G(bs0x[i])
        }
    }();
    var cfV8N = function (dm1x) {
        if (dm1x[2] != "in") throw"bad for loop statement: " + dm1x.join(" ");
        ZW3x.push(dm1x[1]);
        Df0x(dm1x[3]);
        return "var __HASH__" + dm1x[1] + " = " + dm1x[3] + "," + dm1x[1] + "," + dm1x[1] + "_count=0;" + "if (!!__HASH__" + dm1x[1] + ")" + "for(var " + dm1x[1] + "_key in __HASH__" + dm1x[1] + "){" + dm1x[1] + " = __HASH__" + dm1x[1] + "[" + dm1x[1] + "_key];" + "if (typeof(" + dm1x[1] + ')=="function") continue;' + dm1x[1] + "_count++;"
    };
    var cgl8d = function () {
        var dm1x = ZW3x[ZW3x.length - 1];
        return "}; if(!__HASH__" + dm1x + "||!" + dm1x + "_count){"
    };
    var cgp8h = function () {
        ZW3x.pop();
        return "};"
    };
    var cgr8j = function (dm1x) {
        if (dm1x[2] != "as") throw"bad for list loop statement: " + dm1x.join(" ");
        var Mu2x = dm1x[1].split("..");
        if (Mu2x.length > 1) {
            Df0x(Mu2x[0]);
            Df0x(Mu2x[1]);
            return "for(var " + dm1x[3] + "," + dm1x[3] + "_index=0," + dm1x[3] + "_beg=" + Mu2x[0] + "," + dm1x[3] + "_end=" + Mu2x[1] + "," + dm1x[3] + "_length=parseInt(" + dm1x[3] + "_end-" + dm1x[3] + "_beg+1);" + dm1x[3] + "_index<" + dm1x[3] + "_length;" + dm1x[3] + "_index++){" + dm1x[3] + " = " + dm1x[3] + "_beg+" + dm1x[3] + "_index;"
        } else {
            Df0x(dm1x[1]);
            return "for(var __LIST__" + dm1x[3] + " = " + dm1x[1] + "," + dm1x[3] + "," + dm1x[3] + "_index=0," + dm1x[3] + "_length=__LIST__" + dm1x[3] + ".length;" + dm1x[3] + "_index<" + dm1x[3] + "_length;" + dm1x[3] + "_index++){" + dm1x[3] + " = __LIST__" + dm1x[3] + "[" + dm1x[3] + "_index];"
        }
    };
    var cgs8k = function (dm1x) {
        if (!dm1x || !dm1x.length) return;
        dm1x.shift();
        var T9K = dm1x[0].split("(")[0];
        return "var " + T9K + " = function" + dm1x.join("").replace(T9K, "") + "{var __OUT=[];"
    };
    var cgu8m = function (dm1x) {
        if (!dm1x[1]) throw"bad include statement: " + dm1x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bhi6c = function (kZ3x, dm1x) {
        Df0x(dm1x.slice(1).join(" "));
        return kZ3x
    };
    var cgv8n = function (dm1x) {
        return bhi6c("if(", dm1x)
    };
    var cgw8o = function (dm1x) {
        return bhi6c("}else if(", dm1x)
    };
    var cgy8q = function (dm1x) {
        return bhi6c("var ", dm1x)
    };
    bN0x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cgv8n, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cgw8o, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cfV8N, pmin: 3},
            forelse: {pfix: cgl8d},
            "/for": {pfix: cgp8h},
            list: {pfix: cgr8j, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cgy8q, sfix: ";"},
            macro: {pfix: cgs8k},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    Ho1x = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Ho1x = null
                }
            },
            inline: {pfix: cgu8m, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (kZ3x) {
                return (kZ3x || "") + "" + gb2x
            }, "default": function (A9r, kw3x) {
                return A9r || kw3x
            }
        }
    };
    var cgz8r = function () {
        var cgA8s = /\\([\{\}])/g;
        return function (bi0x, iJ2x) {
            bi0x = bi0x.replace(cgA8s, "$1");
            var dm1x = bi0x.slice(1, -1).split(bFY2x), bc0x = bN0x.def[dm1x[0]];
            if (!bc0x) {
                Sh4l(bi0x, iJ2x);
                return
            }
            if (!!bc0x.pmin && bc0x.pmin >= dm1x.length) throw"Statement needs more parameters:" + bi0x;
            iJ2x.push(!!bc0x.pfix && typeof bc0x.pfix != "string" ? bc0x.pfix(dm1x) : bc0x.pfix || "");
            if (!!bc0x.sfix) {
                if (dm1x.length <= 1) {
                    if (!!bc0x.pdft) iJ2x.push(bc0x.pdft)
                } else {
                    for (var i = 1, l = dm1x.length; i < l; i++) {
                        if (i > 1) iJ2x.push(" ");
                        iJ2x.push(dm1x[i])
                    }
                }
                iJ2x.push(bc0x.sfix)
            }
        }
    }();
    var bME3x = function (HB1x, iJ2x) {
        if (!HB1x || !HB1x.length) return;
        if (HB1x.length == 1) {
            var bgV6P = HB1x.pop();
            Df0x(bgV6P);
            iJ2x.push(bgV6P == "" ? '""' : bgV6P);
            return
        }
        var bgT6N = HB1x.pop().split(":");
        iJ2x.push("__MDF['" + bgT6N.shift() + "'](");
        bME3x(HB1x, iJ2x);
        if (bgT6N.length > 0) {
            var bg0x = bgT6N.join(":");
            Df0x(bg0x);
            iJ2x.push("," + bg0x)
        }
        iJ2x.push(")")
    };
    var Sh4l = function (bi0x, iJ2x) {
        if (!bi0x) return;
        var uo7h = bi0x.split("\n");
        if (!uo7h || !uo7h.length) return;
        for (var i = 0, l = uo7h.length, hb2x; i < l; i++) {
            hb2x = uo7h[i];
            if (!!Ho1x) {
                hb2x = hb2x.trim();
                if (!hb2x) continue
            }
            cgD8v(hb2x, iJ2x);
            if (!!Ho1x && i < l - 1) iJ2x.push("__OUT.push('\\n');")
        }
    };
    var cgD8v = function () {
        var cgV8N = /\|\|/g, cgW8O = /#@@#/g;
        return function (bi0x, iJ2x) {
            var MY3x = "}", Ne3x = -1, bp0x = bi0x.length, uW7P, gE2x, HO1x, Te4i, Nm3x;
            while (Ne3x + MY3x.length < bp0x) {
                uW7P = "${";
                gE2x = "}";
                HO1x = bi0x.indexOf(uW7P, Ne3x + MY3x.length);
                if (HO1x < 0) break;
                if (bi0x.charAt(HO1x + 2) == "%") {
                    uW7P = "${%";
                    gE2x = "%}"
                }
                Te4i = bi0x.indexOf(gE2x, HO1x + uW7P.length);
                if (Te4i < 0) break;
                Tm4q(bi0x.substring(Ne3x + MY3x.length, HO1x), iJ2x);
                Nm3x = bi0x.substring(HO1x + uW7P.length, Te4i).replace(cgV8N, "#@@#").split("|");
                for (var i = 0, l = Nm3x.length; i < l; Nm3x[i] = Nm3x[i].replace(cgW8O, "||"), i++) ;
                iJ2x.push("__OUT.push(");
                bME3x(Nm3x, iJ2x);
                iJ2x.push(");");
                MY3x = gE2x;
                Ne3x = Te4i
            }
            Tm4q(bi0x.substring(Ne3x + MY3x.length), iJ2x)
        }
    }();
    var Tm4q = function () {
        var bv0x = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cgX8P = function (bi0x) {
            return (bi0x || "").replace(bv0x.r, function ($1) {
                return bv0x[$1] || $1
            })
        };
        return function (bi0x, iJ2x) {
            if (!bi0x) return;
            iJ2x.push("__OUT.push('" + cgX8P(bi0x) + "');")
        }
    }();
    var cgZ8R = function () {
        var chc8U = /\t/g, che8W = /\n/g, chf8X = /\r\n?/g;
        var bvi9Z = function (bi0x, uW7P) {
            var r9i = bi0x.indexOf("}", uW7P + 1);
            while (bi0x.charAt(r9i - 1) == "\\") {
                r9i = bi0x.indexOf("}", r9i + 1)
            }
            return r9i
        };
        var chi8a = function () {
            var bs0x = [], Ch0x = arguments[0];
            for (var x in Ch0x) {
                x = (x || "").trim();
                if (!x) continue;
                bs0x.push(x + "=$v('" + x + "')")
            }
            return bs0x.length > 0 ? "var " + bs0x.join(",") + ";" : ""
        };
        return function (bi0x) {
            lB3x = {};
            bi0x = bi0x.replace(chf8X, "\n").replace(chc8U, "    ");
            var qs5x = ["if(!__CTX) return '';", ""];
            qs5x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qs5x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qs5x.push("__OUT=[];");
            var Ck0x = -1, bp0x = bi0x.length;
            var mA4E, HU1x, Nx3x, Nz3x, yZ9Q, NC3x, bfS6M, NG3x;
            while (Ck0x + 1 < bp0x) {
                mA4E = Ck0x;
                mA4E = bi0x.indexOf("{", mA4E + 1);
                while (mA4E >= 0) {
                    HU1x = bvi9Z(bi0x, mA4E);
                    Nx3x = bi0x.substring(mA4E, HU1x);
                    Nz3x = Nx3x.match(bN0x.blk);
                    if (!!Nz3x) {
                        yZ9Q = Nz3x[1].length + 1;
                        NC3x = bi0x.indexOf("}", mA4E + yZ9Q);
                        if (NC3x >= 0) {
                            bfS6M = NC3x - mA4E - yZ9Q <= 0 ? "{/" + Nz3x[1] + "}" : Nx3x.substr(yZ9Q + 1);
                            yZ9Q = bi0x.indexOf(bfS6M, NC3x + 1);
                            if (yZ9Q >= 0) {
                                Sh4l(bi0x.substring(Ck0x + 1, mA4E), qs5x);
                                NG3x = bi0x.substring(NC3x + 1, yZ9Q);
                                switch (Nz3x[1]) {
                                    case"cdata":
                                        Tm4q(NG3x, qs5x);
                                        break;
                                    case"minify":
                                        Tm4q(NG3x.replace(che8W, " ").replace(bFY2x, " "), qs5x);
                                        break;
                                    case"eval":
                                        if (!!NG3x) qs5x.push("__OUT.push((function(){" + NG3x + "})());");
                                        break
                                }
                                mA4E = Ck0x = yZ9Q + bfS6M.length - 1
                            }
                        }
                    } else if (bi0x.charAt(mA4E - 1) != "$" && bi0x.charAt(mA4E - 1) != "\\" && Nx3x.substr(Nx3x.charAt(1) == "/" ? 2 : 1).search(bN0x.tag) == 0) {
                        break
                    }
                    mA4E = bi0x.indexOf("{", mA4E + 1)
                }
                if (mA4E < 0) break;
                HU1x = bvi9Z(bi0x, mA4E);
                if (HU1x < 0) break;
                Sh4l(bi0x.substring(Ck0x + 1, mA4E), qs5x);
                cgz8r(bi0x.substring(mA4E, HU1x + 1), qs5x);
                Ck0x = HU1x
            }
            Sh4l(bi0x.substring(Ck0x + 1), qs5x);
            qs5x.push(';return __OUT.join("");');
            qs5x[1] = chi8a(lB3x);
            lB3x = null;
            return new Function("__CTX", "__MDF", qs5x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gb2x
    };
    TrimPath.merge = function () {
        var NT3x = {};
        TrimPath.dump = function () {
            return {func: NT3x, text: LJ2x}
        };
        return function (eK1x, i9b, iV2x) {
            try {
                i9b = i9b || {};
                if (!NT3x[eK1x] && !LJ2x[eK1x]) return "";
                if (!NT3x[eK1x]) {
                    NT3x[eK1x] = cgZ8R(LJ2x[eK1x]);
                    delete LJ2x[eK1x]
                }
                if (!!iV2x) {
                    for (var x in bN0x.ext) if (!iV2x[x]) iV2x[x] = bN0x.ext[x]
                }
                return NT3x[eK1x](i9b, iV2x || bN0x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var chx8p = +(new Date);
        return function (bi0x, eK1x) {
            if (!bi0x) return "";
            eK1x = eK1x || "ck_" + chx8p++;
            LJ2x[eK1x] = bi0x;
            return eK1x
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), ez1x = {};
    a8i.If1x = TrimPath.seed;
    a8i.bP0x = function () {
        var byO0x = function (C9t) {
            return !a8i.hY2x ? "" : a8i.hY2x(C9t)
        };
        return function (eK1x, i9b, iV2x) {
            i9b = i9b || {};
            i9b.inline = byO0x;
            iV2x = NEJ.X(NEJ.X({}, ez1x), iV2x);
            iV2x.rand = k9b.nk4o;
            iV2x.format = k9b.iL2x;
            iV2x.escape = k9b.dI1x;
            iV2x.inline = byO0x;
            return TrimPath.merge(eK1x, i9b, iV2x)
        }
    }();
    a8i.em1x = function (bi0x, cih9Y) {
        if (!bi0x) return "";
        var eK1x, E9v = a8i.z9q(bi0x);
        if (!!E9v) {
            eK1x = E9v.id;
            bi0x = E9v.value || E9v.innerText;
            if (!cih9Y) a8i.cK0x(E9v)
        }
        return TrimPath.parse(bi0x, eK1x)
    };
    a8i.dK1x = function (bD0x, eK1x, i9b, iV2x) {
        bD0x = a8i.z9q(bD0x);
        if (!!bD0x) bD0x.innerHTML = a8i.bP0x(eK1x, i9b, iV2x);
        return this
    };
    a8i.cvH1x = function (bv0x) {
        NEJ.X(ez1x, bv0x)
    };
    c9h("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var cP0x = NEJ.P("nej.p"), M9D = window, kc3x = cP0x.WC2x, bAr0x = kc3x.ipad || kc3x.iphone;
    if (!bAr0x && !!M9D.requestAnimationFrame && !!M9D.cancelRequestAnimationFrame) return;
    var kZ3x = cP0x.cS0x.prefix.pro;
    if (!bAr0x && !!M9D[kZ3x + "RequestAnimationFrame"] && !!M9D[kZ3x + "CancelRequestAnimationFrame"]) {
        M9D.requestAnimationFrame = M9D[kZ3x + "RequestAnimationFrame"];
        M9D.cancelRequestAnimationFrame = M9D[kZ3x + "CancelRequestAnimationFrame"];
        return
    }
    var Um1x = kc3x.desktop ? 80 : kc3x.ios ? 50 : 30;
    M9D.requestAnimationFrame = function (dq1x) {
        return window.setTimeout(function () {
            try {
                dq1x(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / Um1x)
    };
    M9D.cancelRequestAnimationFrame = function (C9t) {
        window.clearTimeout(C9t);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, k9b = c9h("nej.u"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), bb0x = c9h("nej.h"),
        cN0x = c9h("nej.x"), Uy1x = c9h("nej.ut.j.cb"), gh2x;
    if (!!a8i.qr5w) return;
    a8i.qr5w = cN0x.qr5w = function () {
        var Q9H = {}, fX2x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d9g) {
            var C9t = decodeURIComponent(d9g.target), t9k = d9g.type.toLowerCase();
            var dc1x = Q9H[C9t + "-on" + t9k];
            if (!!dc1x) {
                try {
                    dc1x(d9g)
                } catch (e) {
                }
                return
            }
            var cH0x = Q9H[C9t + "-tgt"];
            if (!!cH0x && fX2x.test(t9k)) {
                bBA1x(cH0x, d9g)
            }
        };
        var bfs6m = function (e9f) {
            var bD0x = a8i.z9q(e9f.parent) || document.body, dy1x = a8i.bP0x(gh2x, e9f);
            bD0x.insertAdjacentHTML(!e9f.hidden ? "beforeEnd" : "afterBegin", dy1x)
        };
        var bBA1x = function (C9t, d9g) {
            var t9k = d9g.type.toLowerCase();
            requestAnimationFrame(function () {
                h9c.x9o(C9t, t9k)
            })
        };
        var ciC9t = function (gZ2x) {
            return !!gZ2x && !!gZ2x.inited && !!gZ2x.inited()
        };
        var Oj3x = function (C9t) {
            var bs0x = [document.embeds[C9t], a8i.z9q(C9t), document[C9t], window[C9t]], r9i = k9b.ek1x(bs0x, ciC9t),
                gZ2x = bs0x[r9i], bff5k = C9t + "-count";
            Q9H[bff5k]++;
            if (!!gZ2x || Q9H[bff5k] > 100) {
                Q9H[C9t](gZ2x);
                delete Q9H[C9t];
                delete Q9H[bff5k];
                return
            }
            window.setTimeout(Oj3x.g9d(null, C9t), 300)
        };
        var cjo9f = function (e9f) {
            var C9t = e9f.id, fU2x = e9f.params;
            if (!fU2x) {
                fU2x = {};
                e9f.params = fU2x
            }
            var lB3x = fU2x.flashvars || "";
            lB3x += (!lB3x ? "" : "&") + ("id=" + C9t);
            if (!e9f.hidden && (!!e9f.target || bb0x.ZZ3x(fU2x.wmode))) {
                var hg2x = a8i.kH3x(e9f.target) || a8i.kH3x(e9f.parent), UI1x = k9b.VU2x();
                Uy1x["cb" + UI1x] = bBA1x.g9d(null, hg2x);
                lB3x += "&onevent=nej.ut.j.cb.cb" + UI1x;
                Q9H[C9t + "-tgt"] = hg2x
            }
            fU2x.flashvars = lB3x;
            k9b.ek1x(e9f, function (A9r, J9A) {
                if (k9b.fY2x(A9r) && J9A != "onready") {
                    Q9H[C9t + "-" + J9A] = A9r
                }
            })
        };
        return function (e9f) {
            e9f = NEJ.X({}, e9f);
            if (!e9f.src) return;
            var C9t = "flash_" + k9b.VU2x();
            e9f.id = C9t;
            cjo9f(e9f);
            bfs6m(e9f);
            if (!e9f.onready) return;
            Q9H[C9t] = e9f.onready;
            Q9H[C9t + "-count"] = 0;
            Oj3x(C9t)
        }
    }();
    gh2x = a8i.em1x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cN0x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, iH2x = c9h("nej.c"), a8i = c9h("nej.e"), k9b = c9h("nej.u"), M9D = c9h("nej.ut.j"),
        Uy1x = c9h("nej.ut.j.cb"), Q9H = {}, gb2x = +(new Date), bfa5f;
    if (!!M9D.beW5b) return;
    Uy1x["ld" + gb2x] = function (J9A, cL0x) {
        var jf3x = Q9H[J9A];
        if (!jf3x) return;
        delete Q9H[J9A];
        jf3x.sI5N({status: 200, result: cL0x})
    };
    Uy1x["er" + gb2x] = function (J9A, dZ1x) {
        var jf3x = Q9H[J9A];
        if (!jf3x) return;
        delete Q9H[J9A];
        jf3x.sI5N({status: dZ1x || 0})
    };
    M9D.beW5b = NEJ.C();
    bfa5f = M9D.beW5b.O9F(M9D.Hd1x);
    bfa5f.ck0x = function (e9f) {
        var gZ2x = Q9H.flash;
        if (k9b.en1x(gZ2x)) {
            gZ2x.push(this.ck0x.g9d(this, e9f));
            return
        }
        if (!gZ2x) {
            Q9H.flash = [this.ck0x.g9d(this, e9f)];
            a8i.qr5w({
                hidden: !0, src: iH2x.z9q("ajax.swf"), onready: function (gZ2x) {
                    if (!gZ2x) return;
                    var j9a = Q9H.flash;
                    Q9H.flash = gZ2x;
                    k9b.mq3x(j9a, function (dc1x) {
                        try {
                            dc1x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.zL9C = "swf-" + k9b.nk4o();
        Q9H[this.zL9C] = this;
        var i9b = NEJ.EX({url: "", data: null, method: "GET"}, e9f.request);
        i9b.key = this.zL9C;
        i9b.headers = e9f.headers;
        i9b.onerror = "nej.ut.j.cb.er" + gb2x;
        i9b.onloaded = "nej.ut.j.cb.ld" + gb2x;
        var bDo1x = iH2x.bPf4j(i9b.url);
        if (!!bDo1x) i9b.policyURL = bDo1x;
        gZ2x.request(i9b)
    };
    bfa5f.jk3x = function () {
        delete Q9H[this.zL9C];
        this.sI5N({status: 0});
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bb0x = c9h("nej.h");
    bb0x.bDU1x = function () {
        var cO0x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (hH2x) {
            hH2x = hH2x || "";
            if (cO0x.test(hH2x)) return RegExp.$1;
            return "*"
        }
    }();
    bb0x.beT5Y = function (i9b) {
        return i9b
    };
    bb0x.beS5X = function (bFh1x, e9f) {
        if (!bFh1x.postMessage) return;
        e9f = e9f || X0x;
        bFh1x.postMessage(bb0x.beT5Y(e9f.data), bb0x.bDU1x(e9f.origin))
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), M9D = c9h("nej.ut"), b8h;
    if (!!M9D.fv1x) return;
    M9D.fv1x = NEJ.C();
    b8h = M9D.fv1x.O9F(M9D.cy0x);
    b8h.cl0x = function () {
        this.R9I = {};
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.Ot3x = a8i.z9q(e9f.element) || window;
        this.bFJ1x(e9f.event);
        this.cjQ9H();
        this.x9o("oninit")
    };
    b8h.bE0x = function () {
        var AS9J = function (A9r, J9A, bv0x) {
            if (!k9b.en1x(A9r)) {
                k9b.VN2x(this.Ot3x, J9A)
            }
            delete bv0x[J9A]
        };
        return function () {
            this.bH0x();
            k9b.ek1x(this.R9I, AS9J, this);
            delete this.Ot3x
        }
    }();
    b8h.Vg2x = function (E9v, t9k) {
        E9v = a8i.z9q(E9v);
        return E9v == this.Ot3x && (!t9k || !!this.R9I["on" + t9k])
    };
    b8h.bFJ1x = function (d9g) {
        if (k9b.fg1x(d9g)) {
            var T9K = "on" + d9g;
            if (!this.R9I[T9K]) {
                this.R9I[T9K] = this.cjS9J.g9d(this, d9g)
            }
            this.bHx2x(d9g);
            return
        }
        if (k9b.en1x(d9g)) {
            k9b.be0x(d9g, this.bFJ1x, this)
        }
    };
    b8h.bHx2x = function (t9k) {
        var d9g = "on" + t9k, dc1x = this.Ot3x[d9g], bHz2x = this.R9I[d9g];
        if (dc1x != bHz2x) {
            this.Vo2x(t9k);
            if (!!dc1x && dc1x != bn0x) this.bIj2x(t9k, dc1x);
            this.Ot3x[d9g] = bHz2x
        }
    };
    b8h.bIj2x = function (t9k, dc1x, ckx9o) {
        var j9a = this.R9I[t9k];
        if (!j9a) {
            j9a = [];
            this.R9I[t9k] = j9a
        }
        if (k9b.fY2x(dc1x)) {
            !ckx9o ? j9a.push(dc1x) : j9a.unshift(dc1x)
        }
    };
    b8h.Vo2x = function (t9k, dc1x) {
        var j9a = this.R9I[t9k];
        if (!j9a || !j9a.length) return;
        if (!dc1x) {
            delete this.R9I[t9k];
            return
        }
        k9b.mq3x(j9a, function (A9r, r9i, Ix1x) {
            if (dc1x === A9r) {
                Ix1x.splice(r9i, 1);
                return !0
            }
        })
    };
    b8h.cjS9J = function (t9k, d9g) {
        d9g = d9g || {noargs: !0};
        d9g.type = t9k;
        this.x9o("ondispatch", d9g);
        if (!!d9g.stopped) return;
        k9b.be0x(this.R9I[t9k], function (dc1x) {
            try {
                dc1x(d9g)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b8h.cjQ9H = function () {
        var beG5L = function (d9g) {
            var bg0x = d9g.args, t9k = bg0x[1].toLowerCase();
            if (this.Vg2x(bg0x[0], t9k)) {
                d9g.stopped = !0;
                this.bHx2x(t9k);
                this.bIj2x(t9k, bg0x[2], bg0x[3]);
                this.x9o("oneventadd", {type: t9k, listener: bg0x[2]})
            }
        };
        var clp9g = function (d9g) {
            var bg0x = d9g.args, t9k = bg0x[1].toLowerCase();
            if (this.Vg2x(bg0x[0], t9k)) {
                d9g.stopped = !0;
                this.Vo2x(t9k, bg0x[2])
            }
        };
        var biR6L = function (d9g) {
            var bg0x = d9g.args, t9k = (bg0x[1] || "").toLowerCase();
            if (this.Vg2x(bg0x[0])) {
                if (!!t9k) {
                    this.Vo2x(t9k);
                    return
                }
                k9b.ek1x(this.R9I, function (A9r, J9A) {
                    if (k9b.en1x(A9r)) {
                        this.Vo2x(J9A)
                    }
                }, this)
            }
        };
        var clr9i = function (d9g) {
            var bg0x = d9g.args, t9k = bg0x[1].toLowerCase();
            if (this.Vg2x(bg0x[0], t9k)) {
                d9g.stopped = !0;
                bg0x[0]["on" + t9k].apply(bg0x[0], bg0x.slice(2))
            }
        };
        return function () {
            if (!!this.cls9j) return;
            this.cls9j = true;
            h9c.s9j = h9c.s9j.ed1x(beG5L.g9d(this));
            h9c.mB4F = h9c.mB4F.ed1x(clp9g.g9d(this));
            h9c.hE2x = h9c.hE2x.ed1x(biR6L.g9d(this));
            h9c.x9o = h9c.x9o.ed1x(clr9i.g9d(this))
        }
    }()
})();
(function () {
    var c9h = NEJ.P, M9D = c9h("nej.p"), bb0x = c9h("nej.h"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        H9y = c9h("nej.ut");
    if (M9D.mE4I.trident) return;
    if (!!window.postMessage) {
        bb0x.beT5Y = bb0x.beT5Y.ed1x(function (d9g) {
            d9g.stopped = !0;
            d9g.value = JSON.stringify(d9g.args[0])
        });
        return
    }
    var J9A = "MSG|", jr3x = [];
    var clt9k = function () {
        var T9K = unescape(window.name || "").trim();
        if (!T9K || T9K.indexOf(J9A) != 0) return;
        window.name = "";
        var m9d = k9b.bFZ2x(T9K.replace(J9A, ""), "|"), hH2x = (m9d.origin || "").toLowerCase();
        if (!!hH2x && hH2x != "*" && location.href.toLowerCase().indexOf(hH2x) != 0) return;
        h9c.x9o(window, "message", {
            data: JSON.parse(m9d.data || "null"),
            source: window.frames[m9d.self] || m9d.self,
            origin: bb0x.bDU1x(m9d.ref || document.referrer)
        })
    };
    var clB9s = function () {
        var VH2x;
        var clR9I = function (bv0x, r9i, j9a) {
            if (k9b.cU0x(VH2x, bv0x.w) < 0) {
                VH2x.push(bv0x.w);
                j9a.splice(r9i, 1);
                bv0x.w.name = bv0x.d
            }
        };
        return function () {
            VH2x = [];
            k9b.mq3x(jr3x, clR9I);
            VH2x = null
        }
    }();
    bb0x.beS5X = function () {
        var clT9K = function (i9b) {
            var m9d = {};
            i9b = i9b || X0x;
            m9d.origin = i9b.origin || "";
            m9d.ref = location.href;
            m9d.self = i9b.source;
            m9d.data = JSON.stringify(i9b.data);
            return J9A + k9b.vq7j(m9d, "|", !0)
        };
        return bb0x.beS5X.ed1x(function (d9g) {
            d9g.stopped = !0;
            var bg0x = d9g.args;
            jr3x.unshift({w: bg0x[0], d: escape(clT9K(bg0x[1]))})
        })
    }();
    H9y.fv1x.B9s({element: window, event: "message"});
    window.setInterval(clB9s, 100);
    window.setInterval(clt9k, 20)
})();
(function () {
    var c9h = NEJ.P, bb0x = c9h("nej.h"), a8i = c9h("nej.e"), v9m = c9h("nej.j");
    v9m.cms0x = function () {
        var iy2x = window.name || "_parent", cmG0x = {gl2x: window.top, iy2x: window, bD0x: window.parent};
        return function (cH0x, e9f) {
            if (typeof cH0x == "string") {
                cH0x = cmG0x[cH0x] || window.frames[cH0x];
                if (!cH0x) return this
            }
            var i9b = NEJ.X({origin: "*", source: iy2x}, e9f);
            bb0x.beS5X(cH0x, i9b);
            return this
        }
    }()
})();
(function () {
    var c9h = NEJ.P, iH2x = c9h("nej.c"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), M9D = c9h("nej.ut.j"), Q9H = {}, VS2x;
    if (!!M9D.beh5m) return;
    M9D.beh5m = NEJ.C();
    VS2x = M9D.beh5m.O9F(M9D.Hd1x);
    VS2x.cl0x = function () {
        var ew1x = "NEJ-AJAX-DATA:", Ev0x = !1;
        var bee5j = function (d9g) {
            var i9b = d9g.data;
            if (i9b.indexOf(ew1x) != 0) return;
            i9b = JSON.parse(i9b.replace(ew1x, ""));
            var jf3x = Q9H[i9b.key];
            if (!jf3x) return;
            delete Q9H[i9b.key];
            i9b.result = decodeURIComponent(i9b.result || "");
            jf3x.sI5N(i9b)
        };
        var bdY5d = function () {
            if (!Ev0x) {
                Ev0x = !0;
                h9c.s9j(window, "message", bee5j)
            }
        };
        return function () {
            this.cr0x();
            bdY5d()
        }
    }();
    VS2x.ck0x = function (e9f) {
        var fD1x = e9f.request, jf3x = iH2x.bPd4h(fD1x.url), uF7y = Q9H[jf3x];
        if (k9b.en1x(uF7y)) {
            uF7y.push(this.ck0x.g9d(this, e9f));
            return
        }
        if (!uF7y) {
            Q9H[jf3x] = [this.ck0x.g9d(this, e9f)];
            a8i.UL1x({
                src: jf3x, visible: !1, onload: function (d9g) {
                    var j9a = Q9H[jf3x];
                    Q9H[jf3x] = h9c.U9L(d9g).contentWindow;
                    k9b.mq3x(j9a, function (dc1x) {
                        try {
                            dc1x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.zL9C = "frm-" + k9b.nk4o();
        Q9H[this.zL9C] = this;
        var i9b = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, fD1x);
        i9b.key = this.zL9C;
        i9b.headers = e9f.headers;
        v9m.cms0x(Q9H[jf3x], {data: i9b})
    };
    VS2x.jk3x = function () {
        delete Q9H[this.zL9C];
        this.sI5N({status: 0});
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, dP1x = c9h("nej.g"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), M9D = c9h("nej.ut.j"), Q9H = {}, IE1x;
    if (!!M9D.bdU5Z) return;
    M9D.bdU5Z = NEJ.C();
    IE1x = M9D.bdU5Z.O9F(M9D.Hd1x);
    IE1x.cl0x = function () {
        var ew1x = "NEJ-UPLOAD-RESULT:", Ev0x = !1;
        var bee5j = function (d9g) {
            var i9b = d9g.data;
            if (i9b.indexOf(ew1x) != 0) return;
            i9b = JSON.parse(i9b.replace(ew1x, ""));
            var jf3x = Q9H[i9b.key];
            if (!jf3x) return;
            delete Q9H[i9b.key];
            jf3x.sI5N(decodeURIComponent(i9b.result))
        };
        var bdY5d = function () {
            if (!Ev0x) {
                Ev0x = !0;
                h9c.s9j(window, "message", bee5j)
            }
        };
        return function () {
            this.cr0x();
            bdY5d()
        }
    }();
    IE1x.bE0x = function () {
        this.bH0x();
        a8i.cK0x(this.bdR5W);
        delete this.bdR5W;
        window.clearTimeout(this.dL1x);
        delete this.dL1x
    };
    IE1x.sI5N = function (cL0x) {
        var P9G;
        try {
            P9G = JSON.parse(cL0x);
            this.x9o("onload", P9G)
        } catch (e) {
            this.x9o("onerror", {code: dP1x.bPp4t, message: cL0x})
        }
    };
    IE1x.ck0x = function () {
        var cmH0x = function () {
            var lH3x, cL0x;
            try {
                var lH3x = this.bdR5W.contentWindow.document.body, cL0x = lH3x.innerText || lH3x.textContent
            } catch (e) {
                return
            }
            this.sI5N(cL0x)
        };
        var bdF5K = function (V9M, eE1x, pZ5e) {
            v9m.br0x(V9M, {
                type: "json",
                method: "POST",
                cookie: pZ5e,
                mode: parseInt(eE1x) || 0,
                onload: function (i9b) {
                    if (!this.dL1x) return;
                    this.x9o("onuploading", i9b);
                    this.dL1x = window.setTimeout(bdF5K.g9d(this, V9M, eE1x, pZ5e), 1e3)
                }.g9d(this),
                onerror: function (bQ0x) {
                    if (!this.dL1x) return;
                    this.dL1x = window.setTimeout(bdF5K.g9d(this, V9M, eE1x, pZ5e), 1e3)
                }.g9d(this)
            })
        };
        return function (e9f) {
            var fD1x = e9f.request, nG4K = e9f.headers, eC1x = fD1x.data, T9K = "fom-" + k9b.nk4o();
            Q9H[T9K] = this;
            eC1x.target = T9K;
            eC1x.method = "POST";
            eC1x.enctype = dP1x.By9p;
            eC1x.encoding = dP1x.By9p;
            var V9M = eC1x.action || "", lo3x = V9M.indexOf("?") <= 0 ? "?" : "&";
            eC1x.action = V9M + lo3x + "_proxy_=form";
            this.bdR5W = a8i.UL1x({
                name: T9K, onload: function (d9g) {
                    var uF7y = h9c.U9L(d9g);
                    h9c.s9j(uF7y, "load", cmH0x.g9d(this));
                    eC1x.submit();
                    var bOg3x = (eC1x.nej_query || X0x).value;
                    if (!bOg3x) return;
                    var eE1x = (eC1x.nej_mode || X0x).value, pZ5e = (eC1x.nej_cookie || X0x).value == "true";
                    this.dL1x = window.setTimeout(bdF5K.g9d(this, bOg3x, eE1x, pZ5e), 100)
                }.g9d(this)
            })
        }
    }();
    IE1x.jk3x = function () {
        this.x9o("onerror", {code: dP1x.bPK4O, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bb0x = c9h("nej.h"), M9D = c9h("nej.ut.j");
    bb0x.bhP6J = function () {
        return new XMLHttpRequest
    };
    bb0x.bdz5E = function (eE1x, Wo2x, e9f) {
        var bv0x = !!Wo2x ? {2: M9D.bdU5Z} : {2: M9D.beh5m, 3: M9D.beW5b};
        return (bv0x[eE1x] || M9D.Zo3x).B9s(e9f)
    }
})();
(function () {
    var c9h = NEJ.P, M9D = c9h("nej.p"), bb0x = c9h("nej.h");
    if (M9D.mE4I.trident) return;
    bb0x.bhP6J = function () {
        var MT3x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cmN0x = function () {
            for (var i = 0, l = MT3x.length; i < l; i++) {
                try {
                    return new ActiveXObject(MT3x[i])
                } catch (e) {
                }
            }
            return null
        };
        return bb0x.bhP6J.ed1x(function (d9g) {
            if (!!window.XMLHttpRequest) return;
            d9g.stopped = !0;
            d9g.value = cmN0x()
        })
    }();
    bb0x.bdz5E = function () {
        var DK0x = {0: 2, 1: 3};
        return bb0x.bdz5E.ed1x(function (d9g) {
            var bg0x = d9g.args, eE1x = bg0x[0] || 0;
            bg0x[0] = !!bg0x[1] ? 2 : DK0x[eE1x] || eE1x
        })
    }()
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, bb0x = c9h("nej.h"), dP1x = c9h("nej.g"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), M9D = c9h("nej.ut.j"), mV4Z = {}, FV1x = bn0x;
    v9m.jk3x = function (eK1x) {
        var Q9H = mV4Z[eK1x];
        if (!Q9H) return this;
        Q9H.req.jk3x();
        return this
    };
    v9m.Wt2x = function (dC1x) {
        FV1x = dC1x || bn0x;
        return this
    };
    v9m.br0x = function () {
        var iQ2x = (location.protocol + "//" + location.host).toLowerCase();
        var cmX0x = function (V9M) {
            var hH2x = k9b.cax7q(V9M);
            return !!hH2x && hH2x != iQ2x
        };
        var cmY0x = function (nG4K) {
            return (nG4K || X0x)[dP1x.wF8x] == dP1x.By9p
        };
        var cnp0x = function (e9f) {
            var Wo2x = cmY0x(e9f.headers);
            if (!cmX0x(e9f.url) && !Wo2x) return M9D.Zo3x.B9s(e9f);
            return bb0x.bdz5E(e9f.mode, Wo2x, e9f)
        };
        var AS9J = function (eK1x) {
            var Q9H = mV4Z[eK1x];
            if (!Q9H) return;
            if (!!Q9H.req) Q9H.req.S9J();
            delete mV4Z[eK1x]
        };
        var btX9O = function (eK1x, t9k) {
            var Q9H = mV4Z[eK1x];
            if (!Q9H) return;
            AS9J(eK1x);
            try {
                var d9g = {type: t9k, result: arguments[2]};
                FV1x(d9g);
                if (!d9g.stopped) (Q9H[t9k] || bn0x)(d9g.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var wX8P = function (eK1x, i9b) {
            btX9O(eK1x, "onload", i9b)
        };
        var yB8t = function (eK1x, bQ0x) {
            btX9O(eK1x, "onerror", bQ0x)
        };
        return function (V9M, e9f) {
            e9f = e9f || {};
            var eK1x = k9b.nk4o(), Q9H = {onload: e9f.onload || bn0x, onerror: e9f.onerror || bn0x};
            mV4Z[eK1x] = Q9H;
            e9f.onload = wX8P.g9d(null, eK1x);
            e9f.onerror = yB8t.g9d(null, eK1x);
            if (!!e9f.query) {
                var lo3x = V9M.indexOf("?") < 0 ? "?" : "&", bw0x = e9f.query;
                if (k9b.kI3x(bw0x)) bw0x = k9b.dd1x(bw0x);
                if (!!bw0x) V9M += lo3x + bw0x
            }
            e9f.url = V9M;
            Q9H.req = cnp0x(e9f);
            Q9H.req.bid6X(e9f.data);
            return eK1x
        }
    }();
    v9m.gp2x = function (eC1x, e9f) {
        var gz2x = {
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
        NEJ.EX(gz2x, e9f);
        gz2x.data = eC1x;
        gz2x.method = "POST";
        gz2x.timeout = 0;
        gz2x.headers[dP1x.wF8x] = dP1x.By9p;
        return v9m.br0x(eC1x.action, gz2x)
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, dP1x = c9h("nej.g"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        M9D = c9h("nej.ut.j"), lT3x, jn3x = 6e4;
    if (!!M9D.PC3x) return;
    M9D.PC3x = NEJ.C();
    lT3x = M9D.PC3x.O9F(H9y.cy0x);
    lT3x.cl0x = function () {
        this.cr0x();
        this.PD3x = {onerror: this.cnq0x.g9d(this), onloaded: this.cnv0x.g9d(this)};
        if (!this.constructor.R9I) this.constructor.R9I = {loaded: {}}
    };
    lT3x.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.IP1x = e9f.version;
        this.bdf5k = e9f.timeout;
        this.PD3x.version = this.IP1x;
        this.PD3x.timeout = this.bdf5k
    };
    lT3x.bwR9I = function (J9A) {
        delete this.constructor.R9I[J9A]
    };
    lT3x.yP9G = function (J9A) {
        return this.constructor.R9I[J9A]
    };
    lT3x.bxA0x = function (J9A, i9b) {
        this.constructor.R9I[J9A] = i9b
    };
    lT3x.Xd2x = bn0x;
    lT3x.bxC0x = function (fD1x) {
        h9c.hE2x(fD1x)
    };
    lT3x.bdc5h = function (fD1x) {
        fD1x.src = this.kG3x;
        document.head.appendChild(fD1x)
    };
    lT3x.yU9L = function () {
        var Q9H = this.yP9G(this.kG3x);
        if (!Q9H) return;
        window.clearTimeout(Q9H.timer);
        this.bxC0x(Q9H.request);
        delete Q9H.bind;
        delete Q9H.timer;
        delete Q9H.request;
        this.bwR9I(this.kG3x);
        this.yP9G("loaded")[this.kG3x] = !0
    };
    lT3x.Xn2x = function (T9K) {
        var Q9H = this.yP9G(this.kG3x);
        if (!Q9H) return;
        var j9a = Q9H.bind;
        this.yU9L();
        if (!!j9a && j9a.length > 0) {
            var co0x;
            while (j9a.length) {
                co0x = j9a.shift();
                try {
                    co0x.x9o(T9K, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                co0x.S9J()
            }
        }
    };
    lT3x.ei1x = function (bQ0x) {
        this.Xn2x("onerror", bQ0x)
    };
    lT3x.byw0x = function () {
        this.Xn2x("onloaded")
    };
    lT3x.col0x = function (V9M) {
        this.constructor.B9s(this.PD3x).IS1x(V9M)
    };
    lT3x.byB0x = function (bQ0x) {
        var Q9H = this.yP9G(this.uk7d);
        if (!Q9H) return;
        if (!!bQ0x) Q9H.error++;
        Q9H.loaded++;
        if (Q9H.loaded < Q9H.total) return;
        this.bwR9I(this.uk7d);
        this.x9o(Q9H.error > 0 ? "onerror" : "onloaded")
    };
    lT3x.cnq0x = function (bQ0x) {
        this.byB0x(!0)
    };
    lT3x.cnv0x = function () {
        this.byB0x()
    };
    lT3x.IS1x = function (V9M) {
        V9M = k9b.bjY7R(V9M);
        if (!V9M) {
            this.x9o("onerror", {code: dP1x.bqd8V, message: "请指定要载入的资源地址！"});
            return this
        }
        this.kG3x = V9M;
        if (!!this.IP1x) this.kG3x += (this.kG3x.indexOf("?") < 0 ? "?" : "&") + this.IP1x;
        if (this.yP9G("loaded")[this.kG3x]) {
            try {
                this.x9o("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S9J();
            return this
        }
        var Q9H = this.yP9G(this.kG3x), fD1x;
        if (!!Q9H) {
            Q9H.bind.unshift(this);
            Q9H.timer = window.clearTimeout(Q9H.timer)
        } else {
            fD1x = this.Xd2x();
            Q9H = {request: fD1x, bind: [this]};
            this.bxA0x(this.kG3x, Q9H);
            h9c.s9j(fD1x, "load", this.byw0x.g9d(this));
            h9c.s9j(fD1x, "error", this.ei1x.g9d(this, {code: dP1x.bpW8O, message: "无法加载指定资源文件[" + this.kG3x + "]！"}))
        }
        if (this.bdf5k != 0) Q9H.timer = window.setTimeout(this.ei1x.g9d(this, {
            code: dP1x.byJ0x,
            message: "指定资源文件[" + this.kG3x + "]载入超时！"
        }), this.bdf5k || jn3x);
        if (!!fD1x) this.bdc5h(fD1x);
        this.x9o("onloading");
        return this
    };
    lT3x.byF0x = function (j9a) {
        if (!j9a || !j9a.length) {
            this.x9o("onerror", {code: dP1x.bqd8V, message: "请指定要载入的资源队列！"});
            return this
        }
        this.uk7d = k9b.nk4o();
        var Q9H = {error: 0, loaded: 0, total: j9a.length};
        this.bxA0x(this.uk7d, Q9H);
        for (var i = 0, l = j9a.length; i < l; i++) {
            if (!j9a[i]) {
                Q9H.total--;
                continue
            }
            this.col0x(j9a[i])
        }
        this.x9o("onloading");
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), bb0x = c9h("nej.h"), M9D = c9h("nej.ut.j"), PT3x;
    if (!!M9D.bcN5S) return;
    M9D.bcN5S = NEJ.C();
    PT3x = M9D.bcN5S.O9F(M9D.PC3x);
    PT3x.Xd2x = function () {
        var fe1x = a8i.cT0x("iframe");
        fe1x.width = 0;
        fe1x.height = 0;
        fe1x.style.display = "none";
        return fe1x
    };
    PT3x.bdc5h = function (fD1x) {
        fD1x.src = this.kG3x;
        document.body.appendChild(fD1x)
    };
    PT3x.ei1x = function (bQ0x) {
        var fe1x = (this.yP9G(this.kG3x) || X0x).request;
        this.Xn2x("onerror", bQ0x);
        bb0x.RF4J(fe1x)
    };
    PT3x.byw0x = function () {
        var lH3x = null, fe1x = (this.yP9G(this.kG3x) || X0x).request;
        try {
            lH3x = fe1x.contentWindow.document.body
        } catch (ex) {
        }
        this.Xn2x("onloaded", lH3x);
        bb0x.RF4J(fe1x)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), M9D = c9h("nej.ut.j"), bcA5F;
    if (!!M9D.XF2x) return;
    M9D.XF2x = NEJ.C();
    bcA5F = M9D.XF2x.O9F(M9D.PC3x);
    bcA5F.Xd2x = function () {
        return a8i.cT0x("link")
    };
    bcA5F.bdc5h = function (fD1x) {
        fD1x.href = this.kG3x;
        document.head.appendChild(fD1x)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), M9D = c9h("nej.ut.j"), XP2x;
    if (!!M9D.XU2x) return;
    M9D.XU2x = NEJ.C();
    XP2x = M9D.XU2x.O9F(M9D.PC3x);
    XP2x.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.bzm0x = e9f.async;
        this.bcn5s = e9f.charset;
        this.PD3x.async = !1;
        this.PD3x.charset = this.bcn5s
    };
    XP2x.Xd2x = function () {
        var fD1x = a8i.cT0x("script");
        if (this.bzm0x != null) fD1x.async = !!this.bzm0x;
        if (this.bcn5s != null) fD1x.charset = this.bcn5s;
        return fD1x
    };
    XP2x.bxC0x = function (fD1x) {
        a8i.cK0x(fD1x)
    }
})();
(function () {
    var c9h = NEJ.P, v9m = c9h("nej.j"), M9D = c9h("nej.ut.j");
    v9m.coM0x = function (V9M, e9f) {
        M9D.XU2x.B9s(e9f).IS1x(V9M);
        return this
    };
    v9m.coP0x = function (j9a, e9f) {
        M9D.XU2x.B9s(e9f).byF0x(j9a);
        return this
    };
    v9m.cuG1x = function (V9M, e9f) {
        M9D.XF2x.B9s(e9f).IS1x(V9M);
        return this
    };
    v9m.cpe0x = function (j9a, e9f) {
        M9D.XF2x.B9s(e9f).byF0x(j9a);
        return this
    };
    v9m.bBm0x = function (V9M, e9f) {
        M9D.bcN5S.B9s(e9f).IS1x(V9M);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        H9y = c9h("nej.ut"), Q9H = {}, rU5Z = +(new Date) + "-";
    a8i.cE0x = function () {
        var ct0x = 0;
        var Qi4m = function () {
            if (ct0x > 0) return;
            ct0x = 0;
            h9c.x9o(document, "templateready");
            h9c.hE2x(document, "templateready")
        };
        var Yl2x = function (fy1x, e9f) {
            var dv1x = a8i.u9l(fy1x, "src");
            if (!dv1x) return;
            e9f = e9f || X0x;
            var fu1x = e9f.root;
            if (!fu1x) {
                fu1x = fy1x.ownerDocument.location.href
            } else {
                fu1x = k9b.bjY7R(fu1x)
            }
            dv1x = dv1x.split(",");
            k9b.be0x(dv1x, function (A9r, r9i, j9a) {
                j9a[r9i] = k9b.bjY7R(A9r, fu1x)
            });
            return dv1x
        };
        var cph0x = function (fy1x, e9f) {
            if (!fy1x) return;
            var dv1x = Yl2x(fy1x, e9f);
            if (!!dv1x) v9m.cpe0x(dv1x, {version: a8i.u9l(fy1x, "version")});
            a8i.bNb3x(fy1x.value)
        };
        var cpo0x = function (A9r) {
            ct0x--;
            a8i.bNh3x(A9r);
            Qi4m()
        };
        var cqn0x = function (fy1x, e9f) {
            if (!fy1x) return;
            var dv1x = Yl2x(fy1x, e9f), eG1x = fy1x.value;
            if (!!dv1x) {
                ct0x++;
                var e9f = {version: a8i.u9l(fy1x, "version"), onloaded: cpo0x.g9d(null, eG1x)};
                window.setTimeout(v9m.coP0x.g9d(v9m, dv1x, e9f), 0);
                return
            }
            a8i.bNh3x(eG1x)
        };
        var cqK0x = function (lH3x) {
            ct0x--;
            a8i.cE0x(lH3x);
            Qi4m()
        };
        var cqS0x = function (fy1x, e9f) {
            if (!fy1x) return;
            var dv1x = Yl2x(fy1x, e9f)[0];
            if (!!dv1x) {
                ct0x++;
                var e9f = {version: a8i.u9l(fy1x, "version"), onloaded: cqK0x};
                window.setTimeout(v9m.bBm0x.g9d(v9m, dv1x, e9f), 0)
            }
        };
        var cqT0x = function (C9t, cL0x) {
            ct0x--;
            a8i.Ja2x(C9t, cL0x || "");
            Qi4m()
        };
        var cqX0x = function (fy1x, e9f) {
            if (!fy1x || !fy1x.id) return;
            var C9t = fy1x.id, dv1x = Yl2x(fy1x, e9f)[0];
            if (!!dv1x) {
                ct0x++;
                var V9M = dv1x + (dv1x.indexOf("?") < 0 ? "?" : "&") + (a8i.u9l(fy1x, "version") || ""),
                    e9f = {type: "text", method: "GET", onload: cqT0x.g9d(null, C9t)};
                window.setTimeout(v9m.br0x.g9d(v9m, V9M, e9f), 0)
            }
        };
        var cqY0x = function (f9e, e9f) {
            var t9k = f9e.name.toLowerCase();
            switch (t9k) {
                case"jst":
                    a8i.em1x(f9e, !0);
                    return;
                case"txt":
                    a8i.Ja2x(f9e.id, f9e.value || "");
                    return;
                case"ntp":
                    a8i.ie2x(f9e.value || "", f9e.id);
                    return;
                case"js":
                    cqn0x(f9e, e9f);
                    return;
                case"css":
                    cph0x(f9e, e9f);
                    return;
                case"html":
                    cqS0x(f9e, e9f);
                    return;
                case"res":
                    cqX0x(f9e, e9f);
                    return
            }
        };
        H9y.fv1x.B9s({element: document, event: "templateready", oneventadd: Qi4m});
        return function (E9v, e9f) {
            E9v = a8i.z9q(E9v);
            if (!!E9v) {
                var j9a = E9v.tagName == "TEXTAREA" ? [E9v] : E9v.getElementsByTagName("textarea");
                k9b.be0x(j9a, function (f9e) {
                    cqY0x(f9e, e9f)
                });
                a8i.cK0x(E9v, !0)
            }
            Qi4m();
            return this
        }
    }();
    a8i.Ja2x = function (J9A, A9r) {
        Q9H[J9A] = A9r || "";
        return this
    };
    a8i.hY2x = function (J9A) {
        return Q9H[J9A] || ""
    };
    a8i.ie2x = function (E9v, J9A) {
        J9A = J9A || k9b.nk4o();
        E9v = a8i.z9q(E9v) || E9v;
        a8i.Ja2x(rU5Z + J9A, E9v);
        a8i.mm3x(E9v);
        return J9A
    };
    a8i.dt1x = function (J9A) {
        if (!J9A) return null;
        J9A = rU5Z + J9A;
        var A9r = a8i.hY2x(J9A);
        if (!A9r) return null;
        if (k9b.fg1x(A9r)) {
            A9r = a8i.mG4K(A9r);
            a8i.Ja2x(J9A, A9r)
        }
        return A9r.cloneNode(!0)
    };
    a8i.AK9B = function () {
        var FV1x = function (A9r, J9A) {
            return J9A == "offset" || J9A == "limit"
        };
        return function (j9a, q9h, e9f) {
            var bs0x = [];
            if (!j9a || !j9a.length || !q9h) return bs0x;
            e9f = e9f || X0x;
            var du1x = j9a.length, ji3x = parseInt(e9f.offset) || 0,
                gE2x = Math.min(du1x, ji3x + (parseInt(e9f.limit) || du1x)),
                cm0x = {total: j9a.length, range: [ji3x, gE2x]};
            NEJ.X(cm0x, e9f, FV1x);
            for (var i = ji3x, co0x; i < gE2x; i++) {
                cm0x.index = i;
                cm0x.data = j9a[i];
                co0x = q9h.B9s(cm0x);
                var C9t = co0x.Cn0x();
                Q9H[C9t] = co0x;
                co0x.S9J = co0x.S9J.ed1x(function (C9t, co0x) {
                    delete Q9H[C9t];
                    delete co0x.S9J
                }.g9d(null, C9t, co0x));
                bs0x.push(co0x)
            }
            return bs0x
        }
    }();
    a8i.bDC1x = function (C9t) {
        return Q9H[C9t]
    };
    a8i.cun1x = function (dD1x, e9f) {
        e9f = e9f || X0x;
        a8i.cE0x(e9f.tid || "template-box");
        h9c.s9j(document, "templateready", function () {
            dD1x.B9s().x9o("onshow", e9f)
        })
    };
    c9h("dbg").dumpTC = function () {
        return Q9H
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        M9D = c9h("nej.ui"), b8h;
    if (!!M9D.eo1x) return;
    M9D.eo1x = NEJ.C();
    b8h = M9D.eo1x.O9F(H9y.cy0x);
    b8h.cl0x = function () {
        this.cr0x();
        a8i.bCi1x();
        this.bZ0x();
        this.bR0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.crc0x(e9f.clazz);
        this.bEN1x(e9f.parent)
    };
    b8h.bE0x = function () {
        this.bH0x();
        this.bEP1x();
        delete this.fC1x;
        a8i.mm3x(this.o9f);
        a8i.w9n(this.o9f, this.bbP5U);
        delete this.bbP5U
    };
    b8h.bZ0x = bn0x;
    b8h.bR0x = function () {
        if (!this.ca0x) this.YH3x();
        this.o9f = a8i.dt1x(this.ca0x);
        if (!this.o9f) this.o9f = a8i.cT0x("div", this.kT3x);
        a8i.y9p(this.o9f, this.kT3x)
    };
    b8h.YH3x = bn0x;
    b8h.crc0x = function (dJ1x) {
        this.bbP5U = dJ1x || "";
        a8i.y9p(this.o9f, this.bbP5U)
    };
    b8h.crh0x = function () {
        if (!this.kT3x) return;
        a8i.y9p(this.fC1x, this.kT3x + "-parent")
    };
    b8h.bEP1x = function () {
        if (!this.kT3x) return;
        a8i.w9n(this.fC1x, this.kT3x + "-parent")
    };
    b8h.ko3x = function () {
        return this.o9f
    };
    b8h.bEN1x = function (bD0x) {
        if (!this.o9f) return this;
        this.bEP1x();
        if (k9b.fY2x(bD0x)) {
            this.fC1x = bD0x(this.o9f)
        } else {
            this.fC1x = a8i.z9q(bD0x);
            if (!!this.fC1x) this.fC1x.appendChild(this.o9f)
        }
        this.crh0x();
        return this
    };
    b8h.N9E = function () {
        if (!this.fC1x || !this.o9f || this.o9f.parentNode == this.fC1x) return this;
        this.fC1x.appendChild(this.o9f);
        return this
    };
    b8h.bq0x = function () {
        a8i.mm3x(this.o9f);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), k9b = c9h("nej.u"), bb0x = c9h("nej.h"),
        M9D = c9h("nej.ui"), vs7l, bGw2x;
    if (!!M9D.Qw4A) return;
    M9D.Qw4A = NEJ.C();
    vs7l = M9D.Qw4A.O9F(M9D.eo1x);
    bGw2x = M9D.Qw4A.ch0x;
    vs7l.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.vk7d("oncontentready", e9f.oncontentready || this.crH1x.g9d(this));
        this.crR1x = !!e9f.nohack;
        this.csb1x = !!e9f.destroyable;
        this.Jh2x(e9f.content)
    };
    vs7l.bE0x = function () {
        this.x9o("onbeforerecycle");
        this.bH0x();
        this.Zg3x();
        this.Jh2x("");
        a8i.fB1x(this.o9f, {top: "", left: ""})
    };
    vs7l.crH1x = bn0x;
    vs7l.Jn2x = bn0x;
    vs7l.Zg3x = function () {
        a8i.mm3x(this.o9f);
        if (!!this.mR4V) {
            this.mR4V = bb0x.bpb8T(this.o9f);
            delete this.mR4V
        }
    };
    vs7l.Jh2x = function (bi0x) {
        if (!this.o9f || !this.Am9d || bi0x == null) return this;
        bi0x = bi0x || "";
        k9b.fg1x(bi0x) ? this.Am9d.innerHTML = bi0x : this.Am9d.appendChild(bi0x);
        this.x9o("oncontentready", this.Am9d);
        return this
    };
    vs7l.fZ2x = function (bj0x) {
        var A9r = bj0x.top;
        if (A9r != null) {
            A9r += "px";
            a8i.Y0x(this.o9f, "top", A9r);
            a8i.Y0x(this.mR4V, "top", A9r)
        }
        var A9r = bj0x.left;
        if (A9r != null) {
            A9r += "px";
            a8i.Y0x(this.o9f, "left", A9r);
            a8i.Y0x(this.mR4V, "left", A9r)
        }
        return this
    };
    vs7l.N9E = function () {
        a8i.Y0x(this.o9f, "visibility", "hidden");
        bGw2x.N9E.apply(this, arguments);
        this.Jn2x();
        a8i.Y0x(this.o9f, "visibility", "");
        if (!this.crR1x) {
            this.mR4V = bb0x.mR4V(this.o9f)
        }
        return this
    };
    vs7l.bq0x = function () {
        this.csb1x ? this.S9J() : this.Zg3x();
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, k9b = c9h("nej.u"), a8i = c9h("nej.e"), M9D = c9h("nej.ui"), Al9c;
    if (!!M9D.Zp3x) return;
    M9D.Zp3x = NEJ.C();
    Al9c = M9D.Zp3x.O9F(M9D.eo1x);
    Al9c.bk0x = function (e9f) {
        this.QS4W();
        this.bl0x(this.csr1x(e9f));
        this.bS0x.onbeforerecycle = this.S9J.g9d(this);
        this.nY4c = this.bbf4j()
    };
    Al9c.bE0x = function () {
        this.x9o("onbeforerecycle");
        this.bH0x();
        delete this.bS0x;
        a8i.mm3x(this.o9f);
        var zY9P = this.nY4c;
        if (!!zY9P) {
            delete this.nY4c;
            zY9P.S9J()
        }
    };
    Al9c.bbf4j = bn0x;
    Al9c.csr1x = function (e9f) {
        var m9d = {};
        k9b.ek1x(e9f, function (q9h, J9A) {
            this.bS0x.hasOwnProperty(J9A) ? this.bS0x[J9A] = q9h : m9d[J9A] = q9h
        }, this);
        return m9d
    };
    Al9c.QS4W = function () {
        this.bS0x = {clazz: "", parent: null, content: this.o9f, destroyable: !1, oncontentready: null, nohack: !1}
    };
    Al9c.N9E = function () {
        if (!!this.nY4c) this.nY4c.N9E();
        this.x9o("onaftershow");
        return this
    };
    Al9c.bq0x = function () {
        if (!!this.nY4c) this.nY4c.bq0x();
        return this
    }
})();
(function () {
    var c9h = NEJ.P, dP1x = c9h("nej.g"), bb0x = c9h("nej.h"), a8i = c9h("nej.e"), k9b = c9h("nej.u"),
        h9c = c9h("nej.v"), M9D = c9h("nej.ui"), QX4b, bLg3x;
    if (!!M9D.Jo2x) return;
    var hX2x = a8i.rX5c(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dP1x.bpR8J + ");}");
    M9D.Jo2x = NEJ.C();
    QX4b = M9D.Jo2x.O9F(M9D.eo1x);
    bLg3x = M9D.Jo2x.ch0x;
    QX4b.bk0x = function (e9f) {
        this.bl0x(e9f);
        var bi0x = e9f.content || "&nbsp;";
        k9b.fg1x(bi0x) ? this.o9f.innerHTML = bi0x : this.o9f.appendChild(bi0x)
    };
    QX4b.bE0x = function () {
        this.bH0x();
        this.o9f.innerHTML = "&nbsp;"
    };
    QX4b.bZ0x = function () {
        this.kT3x = hX2x
    };
    QX4b.N9E = function () {
        bb0x.bpf8X(this.o9f);
        bLg3x.N9E.apply(this, arguments);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), M9D = c9h("nej.ut"), uQ7J;
    if (!!M9D.wi7b) return;
    M9D.wi7b = NEJ.C();
    uQ7J = M9D.wi7b.O9F(M9D.cy0x);
    uQ7J.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.csy1x = !!e9f.overflow;
        this.o9f = a8i.z9q(e9f.body);
        this.zG9x = a8i.z9q(e9f.view) || a8i.bKo2x(this.o9f);
        this.bMf3x = a8i.z9q(e9f.mbar) || this.o9f;
        this.ZK3x = parseInt(e9f.direction) || 0;
        if (!!e9f.isRelative) {
            this.o9f.style.position = "relative";
            this.baZ4d = true;
            this.baX4b()
        }
        this.bT0x([[document, "mouseup", this.baV4Z.g9d(this)], [document, "mousemove", this.baU4Y.g9d(this)], [this.bMf3x, "mousedown", this.Rc4g.g9d(this)]])
    };
    uQ7J.baX4b = function () {
        if (!!this.baZ4d) {
            this.Jq2x = a8i.hR2x(this.o9f, this.zG9x);
            this.Jq2x.x -= parseInt(a8i.da1x(this.o9f, "left")) || 0;
            this.Jq2x.y -= parseInt(a8i.da1x(this.o9f, "top")) || 0
        }
    };
    uQ7J.bE0x = function () {
        this.bH0x();
        delete this.o9f;
        delete this.bMf3x;
        delete this.zG9x
    };
    uQ7J.baP4T = function () {
        return {
            x: Math.max(this.zG9x.clientWidth, this.zG9x.scrollWidth) - this.o9f.offsetWidth,
            y: Math.max(this.zG9x.clientHeight, this.zG9x.scrollHeight) - this.o9f.offsetHeight
        }
    };
    uQ7J.Rc4g = function (d9g) {
        h9c.bh0x(d9g);
        if (!!this.ia2x) return;
        this.ia2x = {x: h9c.kJ3x(d9g), y: h9c.nH4L(d9g)};
        this.bNn3x = this.baP4T();
        this.x9o("ondragstart", d9g)
    };
    uQ7J.baU4Y = function (d9g) {
        if (!this.ia2x) return;
        var bj0x = {x: h9c.kJ3x(d9g), y: h9c.nH4L(d9g)};
        var rV5a = bj0x.x - this.ia2x.x, rW5b = bj0x.y - this.ia2x.y, A9r = {
            top: (parseInt(a8i.da1x(this.o9f, "top")) || 0) + rW5b,
            left: (parseInt(a8i.da1x(this.o9f, "left")) || 0) + rV5a
        };
        if (this.baZ4d) {
            this.baX4b();
            A9r.top = A9r.top + this.Jq2x.y;
            A9r.left = A9r.left + this.Jq2x.x
        }
        this.ia2x = bj0x;
        this.fZ2x(A9r)
    };
    uQ7J.baV4Z = function (d9g) {
        if (!this.ia2x) return;
        delete this.bNn3x;
        delete this.ia2x;
        this.x9o("ondragend", this.baL4P())
    };
    uQ7J.fZ2x = function (d9g) {
        if (!this.csy1x) {
            var bOd3x = this.bNn3x || this.baP4T();
            d9g.top = Math.min(bOd3x.y, Math.max(0, d9g.top));
            d9g.left = Math.min(bOd3x.x, Math.max(0, d9g.left))
        }
        var cd0x = this.o9f.style;
        if (this.baZ4d) {
            this.baX4b();
            d9g.top = d9g.top - this.Jq2x.y;
            d9g.left = d9g.left - this.Jq2x.x
        }
        if (this.ZK3x == 0 || this.ZK3x == 2) cd0x.top = d9g.top + "px";
        if (this.ZK3x == 0 || this.ZK3x == 1) cd0x.left = d9g.left + "px";
        this.x9o("onchange", d9g);
        return this
    };
    uQ7J.baL4P = function () {
        return {left: parseInt(a8i.da1x(this.o9f, "left")) || 0, top: parseInt(a8i.da1x(this.o9f, "top")) || 0}
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = NEJ.P("nej.e"), h9c = NEJ.P("nej.v"), k9b = NEJ.P("nej.u"),
        H9y = NEJ.P("nej.ut"), M9D = NEJ.P("nej.ui"), hX2x, gh2x, b8h, K9B;
    if (!!M9D.baj3x) return;
    M9D.baj3x = NEJ.C();
    b8h = M9D.baj3x.O9F(M9D.Qw4A);
    K9B = M9D.baj3x.ch0x;
    b8h.cl0x = function () {
        this.ql5q = {};
        this.jD3x = {onchange: this.baU4Y.g9d(this)};
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.csD1x(e9f.mask);
        this.csI1x(e9f.align);
        this.zp9g(e9f.title);
        if (!e9f.draggable) return;
        this.iW2x = H9y.wi7b.B9s(this.jD3x)
    };
    b8h.bE0x = function () {
        this.bH0x();
        delete this.pI4M;
        delete this.Oq3x;
        if (!!this.zo9f) {
            this.zo9f.S9J();
            delete this.zo9f
        }
        if (!!this.iW2x) {
            this.iW2x.S9J();
            delete this.iW2x
        }
    };
    b8h.bZ0x = function () {
        this.kT3x = hX2x;
        this.ca0x = gh2x
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.cQ0x(this.o9f);
        this.Am9d = j9a[1];
        this.jD3x.mbar = j9a[0];
        this.jD3x.body = this.o9f;
        h9c.s9j(j9a[2], "mousedown", this.csM1x.g9d(this));
        h9c.s9j(this.jD3x.mbar, "mousedown", this.Rc4g.g9d(this));
        this.btT9K = a8i.cQ0x(this.jD3x.mbar)[0]
    };
    b8h.csM1x = function (d9g) {
        h9c.bh0x(d9g);
        this.x9o("onclose", d9g);
        if (!d9g.stopped) {
            this.bq0x()
        }
    };
    b8h.Rc4g = function (d9g) {
        h9c.x9o(document, "click")
    };
    b8h.baU4Y = function (d9g) {
        if (!this.mR4V) return;
        a8i.fB1x(this.mR4V, {top: d9g.top + "px", left: d9g.left + "px"})
    };
    b8h.Jn2x = function () {
        var eJ1x = [function () {
            return 0
        }, function (nd4h, Bv9m, bj0x, J9A) {
            if (J9A == "top" && window.top != window.self) {
                var bar3x = 0, BA9r = 0;
                if (top.g_topBarHeight) bar3x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) BA9r = top.g_bottomBarHeight;
                if (nd4h.top <= bar3x) {
                    var bay4C = Math.max(0, (Bv9m.height - (bar3x - nd4h.top) - BA9r - bj0x.height) / 2);
                    return bay4C + bar3x
                } else {
                    var bay4C = Math.max(0, (Bv9m.height - BA9r - bj0x.height) / 2);
                    return bay4C + nd4h.top
                }
            }
            return Math.max(0, nd4h[J9A] + (Bv9m[hB2x[J9A]] - bj0x[hB2x[J9A]]) / 2)
        }, function (nd4h, Bv9m, bj0x, J9A) {
            return nd4h[J9A] + (Bv9m[hB2x[J9A]] - bj0x[hB2x[J9A]])
        }], csN1x = ["left", "top"], hB2x = {left: "width", top: "height"};
        return function () {
            var A9r = {}, cd0x = this.o9f.style, iI2x = a8i.oE4I(), nd4h = {left: iI2x.scrollLeft, top: iI2x.scrollTop},
                Bv9m = {width: iI2x.clientWidth, height: iI2x.clientHeight},
                bj0x = {width: this.o9f.offsetWidth, height: this.o9f.offsetHeight},
                df1x = {left: iI2x.clientWidth - this.o9f.offsetWidth, top: iI2x.clientHeight - this.o9f.offsetHeight};
            k9b.be0x(csN1x, function (J9A, r9i) {
                var dc1x = eJ1x[this.pI4M[r9i]];
                if (!dc1x) return;
                A9r[J9A] = dc1x(nd4h, Bv9m, bj0x, J9A)
            }, this);
            this.fZ2x(A9r)
        }
    }();
    b8h.ctj1x = function () {
        if (!this.zo9f) {
            if (!this.Oq3x) return;
            this.ql5q.parent = this.fC1x;
            this.zo9f = this.Oq3x.B9s(this.ql5q)
        }
        this.zo9f.N9E()
    };
    b8h.Zg3x = function () {
        if (!!this.zo9f) this.zo9f.bq0x();
        K9B.Zg3x.apply(this, arguments)
    };
    b8h.csD1x = function (kd3x) {
        if (!!kd3x) {
            if (kd3x instanceof M9D.Jo2x) {
                this.zo9f = kd3x;
                return
            }
            if (k9b.fY2x(kd3x)) {
                this.Oq3x = kd3x;
                return
            }
            this.Oq3x = M9D.Jo2x;
            if (k9b.fg1x(kd3x)) this.ql5q.clazz = kd3x;
            return
        }
        this.Oq3x = null
    };
    b8h.zp9g = function (eF1x, dy1x) {
        if (!!this.btT9K) {
            var Yx2x = !dy1x ? "innerText" : "innerHTML";
            this.btT9K[Yx2x] = eF1x || "标题"
        }
        return this
    };
    b8h.csI1x = function () {
        var cO0x = /\s+/, ctI1x = {left: 0, center: 1, right: 2, auto: 3},
            ctO1x = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (ni4m) {
            this.pI4M = (ni4m || "").split(cO0x);
            var dO1x = ctI1x[this.pI4M[0]];
            if (dO1x == null) dO1x = 1;
            this.pI4M[0] = dO1x;
            var dO1x = ctO1x[this.pI4M[1]];
            if (dO1x == null) dO1x = 1;
            this.pI4M[1] = dO1x;
            return this
        }
    }();
    b8h.N9E = function () {
        K9B.N9E.apply(this, arguments);
        this.ctj1x();
        return this
    };
    hX2x = a8i.rX5c(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gh2x = a8i.ie2x('<div class="' + hX2x + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c9h = NEJ.P, k9b = c9h("nej.u"), M9D = c9h("nej.ui"), baB4F;
    if (!!M9D.ban3x) return;
    M9D.ban3x = NEJ.C();
    baB4F = M9D.ban3x.O9F(M9D.Zp3x);
    baB4F.bbf4j = function () {
        return M9D.baj3x.B9s(this.bS0x)
    };
    baB4F.QS4W = function () {
        M9D.ban3x.ch0x.QS4W.apply(this, arguments);
        this.bS0x.mask = null;
        this.bS0x.title = "标题";
        this.bS0x.align = "";
        this.bS0x.draggable = !1;
        this.bS0x.onclose = null
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), bd0x = c9h("nej.ui"), n9e = c9h("nm.l"), b8h, K9B;
    n9e.dW1x = NEJ.C();
    b8h = n9e.dW1x.O9F(bd0x.ban3x);
    b8h.bk0x = function (e9f) {
        e9f.clazz = "m-layer z-show " + (e9f.clazz || "");
        e9f.nohack = true;
        e9f.draggable = true;
        this.bl0x(e9f)
    };
    b8h.dw1x = function (f9e, bF0x) {
        if (!f9e) return;
        a8i.Y0x(f9e, "display", !bF0x ? "none" : "");
        f9e.lastChild.innerText = bF0x || ""
    };
    b8h.dM1x = function (go2x, cF0x, Rx4B, Rw4A) {
        var dD1x = "js-lock";
        if (cF0x === undefined) return a8i.bB0x(go2x, dD1x);
        !cF0x ? a8i.w9n(go2x, dD1x) : a8i.y9p(go2x, dD1x);
        go2x.firstChild.innerText = !cF0x ? Rx4B : Rw4A
    };
    n9e.dW1x.N9E = function (e9f) {
        e9f = e9f || {};
        if (e9f.mask === undefined) e9f.mask = "m-mask";
        if (e9f.parent === undefined) e9f.parent = document.body;
        if (e9f.draggable === undefined) e9f.draggable = true;
        !!this.eM1x && this.eM1x.S9J();
        this.eM1x = this.B9s(e9f);
        this.eM1x.N9E(e9f);
        return this.eM1x
    };
    n9e.dW1x.bq0x = function () {
        !!this.eM1x && this.eM1x.S9J()
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), p9g = c9h("nm.d"),
        l9c = c9h("nm.x"), n9e = c9h("nm.l"), b8h, K9B;
    n9e.baH4L = NEJ.C();
    b8h = n9e.baH4L.O9F(n9e.dW1x);
    K9B = n9e.baH4L.ch0x;
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        if (e9f.bubble === undefined) e9f.bubble = true;
        this.Rm4q = e9f.bubble;
        this.pv4z = e9f.message || ""
    };
    b8h.bZ0x = function () {
        this.ca0x = a8i.ie2x('<div class="lyct f-cb f-tc"></div>')
    };
    b8h.bR0x = function () {
        this.cb0x();
        h9c.s9j(this.o9f, "click", this.cw0x.g9d(this))
    };
    b8h.cw0x = function (d9g) {
        var f9e = h9c.U9L(d9g, "d:action");
        if (!f9e) return;
        if (f9e.href) h9c.cf0x(d9g);
        if (a8i.u9l(f9e, "action") == "close") this.bq0x();
        if (this.Rm4q === !1) h9c.sn5s(d9g);
        this.x9o("onaction", a8i.u9l(f9e, "action"))
    };
    b8h.N9E = function () {
        K9B.N9E.call(this);
        this.o9f.innerHTML = this.pv4z
    };
    var gb2x = a8i.em1x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l9c.ms3x = function () {
        var eU1x;
        var co0x;
        var baK4O = function (gc2x, W9N) {
            if (k9b.fY2x(gc2x, "function") && gc2x(W9N) != -1) co0x.S9J()
        };
        var yH8z = function () {
            !!co0x && co0x.bq0x()
        };
        return function (e9f) {
            clearTimeout(eU1x);
            e9f = e9f || {};
            e9f.title = e9f.title || "提示";
            e9f.clazz = e9f.clazz || "";
            e9f.parent = e9f.parent || document.body;
            e9f.buttons = e9f.buttons || [];
            e9f.message = a8i.bP0x(gb2x, e9f);
            e9f.onaction = baK4O.g9d(null, e9f.action);
            if (e9f.mask === undefined) e9f.mask = true;
            if (e9f.draggable === undefined) e9f.draggable = true;
            !!co0x && co0x.S9J();
            co0x = n9e.baH4L.B9s(e9f);
            co0x.N9E();
            if (e9f.autoclose) eU1x = setTimeout(yH8z.g9d(null), 2e3);
            return co0x
        }
    }();
    l9c.fb1x = function (e9f) {
        e9f = e9f || {};
        e9f.clazz = e9f.clazz || "m-layer-w1";
        e9f.buttons = [{klass: "u-btn2-2", action: "close", text: e9f.btntxt || "确定"}];
        var co0x = l9c.ms3x(e9f);
        return co0x
    };
    l9c.gQ2x = function (e9f) {
        e9f = e9f || {};
        e9f.clazz = e9f.clazz || "m-layer-w2";
        e9f.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e9f.btnok || "确定",
            style: e9f.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e9f.btncc || "取消", style: e9f.ccstyle || ""}];
        var co0x = l9c.ms3x(e9f);
        return co0x
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u");
    a8i.ctM1x = function () {
        var fX2x = /[\r\n]/gi, Q9H = {};
        var ctK1x = function (cC0x) {
            return (cC0x || "").replace(fX2x, "aa").length
        };
        var bzQ0x = function (C9t) {
            var bc0x = Q9H[C9t], bzS0x = a8i.z9q(C9t), wR8J = a8i.z9q(C9t + "-counter");
            if (!bzS0x || !bc0x) return;
            var d9g = {input: bzS0x.value};
            d9g.length = bc0x.onlength(d9g.input);
            d9g.delta = bc0x.max - d9g.length;
            bc0x.onchange(d9g);
            wR8J.innerHTML = d9g.value || "剩余" + d9g.delta + "个字"
        };
        return function (E9v, e9f) {
            var C9t = a8i.kH3x(E9v);
            if (!C9t || !!Q9H[C9t]) return;
            var bc0x = NEJ.X({}, e9f);
            bc0x.onchange = bc0x.onchange || bn0x;
            bc0x.onlength = ctK1x;
            if (!bc0x.max) {
                var bzX0x = parseInt(a8i.fT2x(C9t, "maxlength")), bzZ0x = parseInt(a8i.u9l(C9t, "maxLength"));
                bc0x.max = bzX0x || bzZ0x || 100;
                if (!bzX0x && !!bzZ0x) bc0x.onlength = k9b.fj1x
            }
            Q9H[C9t] = bc0x;
            h9c.s9j(C9t, "input", bzQ0x.g9d(null, C9t));
            var f9e = a8i.Gv1x(C9t, {nid: bc0x.nid || "js-counter", clazz: bc0x.clazz});
            bc0x.xid = C9t + "-counter";
            f9e.id = bc0x.xid;
            bzQ0x(C9t)
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), bb0x = c9h("nej.h");
    bb0x.baQ4U = function (E9v, dJ1x) {
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, M9D = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"), bb0x = c9h("nej.h");
    if (M9D.mE4I.trident) return;
    bb0x.baQ4U = function () {
        var Q9H = {};
        var Fs1x = function (d9g) {
            var cV0x = h9c.U9L(d9g);
            if (!!cV0x.value) return;
            a8i.Y0x(a8i.Gv1x(cV0x), "display", "none")
        };
        var Cz0x = function (d9g) {
            var cV0x = h9c.U9L(d9g);
            if (!!cV0x.value) return;
            a8i.Y0x(a8i.Gv1x(cV0x), "display", "")
        };
        var ctH1x = function (cV0x, dJ1x) {
            var C9t = a8i.kH3x(cV0x), jB3x = a8i.Gv1x(cV0x, {tag: "label", clazz: dJ1x});
            jB3x.htmlFor = C9t;
            var cL0x = a8i.fT2x(cV0x, "placeholder") || "";
            jB3x.innerText = cL0x == "null" ? "" : cL0x;
            var cq0x = cV0x.offsetHeight + "px";
            a8i.fB1x(jB3x, {left: 0, display: !cV0x.value ? "" : "none"})
        };
        return bb0x.baQ4U.ed1x(function (d9g) {
            d9g.stopped = !0;
            var bg0x = d9g.args, cV0x = a8i.z9q(bg0x[0]);
            if (!!Q9H[cV0x.id]) return;
            ctH1x(cV0x, bg0x[1]);
            Q9H[cV0x.id] = !0;
            h9c.s9j(cV0x, "blur", Cz0x.g9d(null));
            h9c.s9j(cV0x, "focus", Fs1x.g9d(null))
        })
    }()
})();
(function () {
    var c9h = NEJ.P, bb0x = c9h("nej.h"), a8i = c9h("nej.e"), cN0x = c9h("nej.x");
    a8i.fI1x = cN0x.fI1x = function (E9v, dJ1x) {
        bb0x.baQ4U(E9v, a8i.u9l(E9v, "holder") || dJ1x || "js-placeholder");
        return this
    };
    cN0x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        M9D = c9h("nej.ut"), ha2x;
    if (!!M9D.Rg4k) return;
    M9D.Rg4k = NEJ.C();
    ha2x = M9D.Rg4k.O9F(M9D.cy0x);
    ha2x.cl0x = function () {
        this.cr0x();
        this.DB0x = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    ha2x.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.fG1x = document.forms[e9f.form] || a8i.z9q(e9f.form);
        this.bT0x([[this.fG1x, "keypress", this.ctG1x.g9d(this)]]);
        this.pv4z = e9f.message || {};
        this.pv4z.pass = this.pv4z.pass || "&nbsp;";
        var eE1x = this.oK4O(this.fG1x, "focusMode", 1);
        if (!isNaN(eE1x)) {
            this.bBL1x = {mode: eE1x, clazz: e9f.focus}
        }
        this.yp8h = e9f.holder;
        this.DB0x.tp.clazz = "js-mhd " + (e9f.tip || "js-tip");
        this.DB0x.ok.clazz = "js-mhd " + (e9f.pass || "js-pass");
        this.DB0x.er.clazz = "js-mhd " + (e9f.error || "js-error");
        this.bBX1x = e9f.invalid || "js-invalid";
        this.ctF1x(e9f);
        this.fR2x();
        if (!!this.yk8c) this.yk8c.focus()
    };
    ha2x.bE0x = function () {
        this.bH0x();
        delete this.pv4z;
        delete this.yk8c;
        delete this.DU0x;
        delete this.fG1x;
        delete this.bCj1x;
        delete this.Rf4j
    };
    ha2x.oK4O = function (f9e, Eb0x, t9k) {
        var A9r = a8i.u9l(f9e, Eb0x);
        switch (t9k) {
            case 1:
                return parseInt(A9r);
            case 2:
                return (A9r || "").toLowerCase() == "true";
            case 3:
                return this.bbc4g(A9r)
        }
        return A9r
    };
    ha2x.yd8V = function (A9r, t9k) {
        if (t9k == "date") return this.bbc4g(A9r);
        return parseInt(A9r)
    };
    ha2x.ZI3x = function () {
        var jo3x = /^button|submit|reset|image|hidden|file$/i;
        return function (f9e) {
            f9e = this.z9q(f9e) || f9e;
            var t9k = f9e.type;
            return !!f9e.name && !jo3x.test(f9e.type || "")
        }
    }();
    ha2x.ctE1x = function () {
        var jo3x = /^hidden$/i;
        return function (f9e) {
            if (this.ZI3x(f9e)) return !0;
            f9e = this.z9q(f9e) || f9e;
            var t9k = f9e.type || "";
            return jo3x.test(t9k)
        }
    }();
    ha2x.bbc4g = function () {
        var cO0x = /[-\/]/;
        var ctD1x = function (A9r) {
            if (!A9r) return "";
            A9r = A9r.split(cO0x);
            A9r.push(A9r.shift());
            return A9r.join("/")
        };
        return function (A9r) {
            if ((A9r || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(ctD1x(A9r))
        }
    }();
    ha2x.ctG1x = function (d9g) {
        if (d9g.keyCode != 13) return;
        this.x9o("onenter", d9g)
    };
    ha2x.ctC1x = function (C9t, T9K) {
        var qZ5e = this.Rf4j[T9K], A9r = this.oK4O(C9t, T9K);
        if (!A9r || !qZ5e) return;
        this.ZE3x(C9t, qZ5e);
        this.bbi4m(C9t, T9K, A9r)
    };
    ha2x.ctA1x = function (C9t, T9K) {
        try {
            var bDx1x = this.oK4O(C9t, T9K);
            if (!bDx1x) return;
            var A9r = new RegExp(bDx1x);
            this.bbi4m(C9t, T9K, A9r);
            this.ZE3x(C9t, this.Rf4j[T9K])
        } catch (e) {
        }
    };
    ha2x.ctz1x = function (C9t, T9K) {
        var qZ5e = this.Rf4j[T9K];
        if (!!qZ5e && this.oK4O(C9t, T9K, 2)) this.ZE3x(C9t, qZ5e)
    };
    ha2x.bbj4n = function (C9t, T9K, A9r) {
        A9r = parseInt(A9r);
        if (isNaN(A9r)) return;
        this.bbi4m(C9t, T9K, A9r);
        this.ZE3x(C9t, this.Rf4j[T9K])
    };
    ha2x.bDI1x = function (C9t, T9K) {
        this.bbj4n(C9t, T9K, this.oK4O(C9t, T9K))
    };
    ha2x.bDL1x = function (C9t, T9K) {
        this.bbj4n(C9t, T9K, a8i.fT2x(C9t, T9K))
    };
    ha2x.bDO1x = function (C9t, T9K, t9k) {
        var A9r = this.yd8V(this.oK4O(C9t, T9K), this.oK4O(C9t, "type"));
        this.bbj4n(C9t, T9K, A9r)
    };
    ha2x.ctw1x = function () {
        var fX2x = /^input|textarea$/i;
        var Fs1x = function (d9g) {
            this.oN4R(h9c.U9L(d9g))
        };
        var Cz0x = function (d9g) {
            var f9e = h9c.U9L(d9g);
            if (!this.oK4O(f9e, "ignore", 2)) {
                this.bDV1x(f9e)
            }
        };
        return function (f9e) {
            if (this.oK4O(f9e, "autoFocus", 2)) this.yk8c = f9e;
            var pg4k = a8i.fT2x(f9e, "placeholder");
            if (!!pg4k && pg4k != "null") a8i.fI1x(f9e, this.yp8h);
            if (!!this.bBL1x && fX2x.test(f9e.tagName)) a8i.lI3x(f9e, this.bBL1x);
            var C9t = a8i.kH3x(f9e);
            this.ctz1x(C9t, "required");
            this.ctC1x(C9t, "type");
            this.ctA1x(C9t, "pattern");
            this.bDL1x(C9t, "maxlength");
            this.bDL1x(C9t, "minlength");
            this.bDI1x(C9t, "maxLength");
            this.bDI1x(C9t, "minLength");
            this.bDO1x(C9t, "min");
            this.bDO1x(C9t, "max");
            var T9K = f9e.name;
            this.pv4z[T9K + "-tip"] = this.oK4O(f9e, "tip");
            this.pv4z[T9K + "-error"] = this.oK4O(f9e, "message");
            this.oN4R(f9e);
            var bt0x = this.DU0x[C9t], i9b = (bt0x || X0x).data || X0x, QP4T = this.oK4O(f9e, "counter", 2);
            if (QP4T && (i9b.maxlength || i9b.maxLength)) {
                a8i.ctM1x(C9t, {nid: this.DB0x.tp.nid, clazz: "js-counter"})
            }
            if (!!bt0x && fX2x.test(f9e.tagName)) {
                this.bT0x([[f9e, "focus", Fs1x.g9d(this)], [f9e, "blur", Cz0x.g9d(this)]])
            } else if (this.oK4O(f9e, "focus", 2)) {
                this.bT0x([[f9e, "focus", Fs1x.g9d(this)]])
            }
        }
    }();
    ha2x.ctF1x = function () {
        var EO0x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bbc4g(v))
            }
        };
        var ctv1x = {
            required: function (f9e) {
                var t9k = f9e.type, ctu1x = !f9e.value, ctt1x = (t9k == "checkbox" || t9k == "radio") && !f9e.checked;
                if (ctt1x || ctu1x) return -1
            }, type: function (f9e, e9f) {
                var cO0x = this.bCj1x[e9f.type], eG1x = f9e.value.trim(), cts1x = !!cO0x.test && !cO0x.test(eG1x),
                    ctr1x = k9b.fY2x(cO0x) && !cO0x.call(this, eG1x);
                if (cts1x || ctr1x) return -2
            }, pattern: function (f9e, e9f) {
                if (!e9f.pattern.test(f9e.value)) return -3
            }, maxlength: function (f9e, e9f) {
                if (f9e.value.length > e9f.maxlength) return -4
            }, minlength: function (f9e, e9f) {
                if (f9e.value.length < e9f.minlength) return -5
            }, maxLength: function (f9e, e9f) {
                if (k9b.fj1x(f9e.value) > e9f.maxLength) return -4
            }, minLength: function (f9e, e9f) {
                if (k9b.fj1x(f9e.value) < e9f.minLength) return -5
            }, min: function (f9e, e9f) {
                var gj2x = this.yd8V(f9e.value, e9f.type);
                if (isNaN(gj2x) || gj2x < e9f.min) return -6
            }, max: function (f9e, e9f) {
                var gj2x = this.yd8V(f9e.value, e9f.type);
                if (isNaN(gj2x) || gj2x > e9f.max) return -7
            }
        };
        return function (e9f) {
            this.bCj1x = NEJ.X(NEJ.X({}, EO0x), e9f.type);
            this.Rf4j = NEJ.X(NEJ.X({}, ctv1x), e9f.attr)
        }
    }();
    ha2x.ZE3x = function (C9t, xS8K) {
        if (!k9b.fY2x(xS8K)) return;
        var bt0x = this.DU0x[C9t];
        if (!bt0x || !bt0x.func) {
            bt0x = bt0x || {};
            bt0x.func = [];
            this.DU0x[C9t] = bt0x
        }
        bt0x.func.push(xS8K)
    };
    ha2x.bbi4m = function (C9t, T9K, A9r) {
        if (!T9K) return;
        var bt0x = this.DU0x[C9t];
        if (!bt0x || !bt0x.data) {
            bt0x = bt0x || {};
            bt0x.data = {};
            this.DU0x[C9t] = bt0x
        }
        bt0x.data[T9K] = A9r
    };
    ha2x.bDV1x = function (f9e) {
        f9e = this.z9q(f9e) || f9e;
        var bt0x = this.DU0x[a8i.kH3x(f9e)];
        if (!f9e || !bt0x || !this.ZI3x(f9e)) return !0;
        var m9d;
        k9b.ek1x(bt0x.func, function (eJ1x) {
            m9d = eJ1x.call(this, f9e, bt0x.data);
            return m9d != null
        }, this);
        if (m9d == null) {
            var d9g = {target: f9e, form: this.fG1x};
            this.x9o("oncheck", d9g);
            m9d = d9g.value
        }
        var d9g = {target: f9e, form: this.fG1x};
        if (m9d != null) {
            d9g.code = m9d;
            this.x9o("oninvalid", d9g);
            if (!d9g.stopped) {
                this.ctq1x(f9e, d9g.value || this.pv4z[f9e.name + m9d])
            }
        } else {
            this.x9o("onvalid", d9g);
            if (!d9g.stopped) this.cto1x(f9e, d9g.value)
        }
        return m9d == null
    };
    ha2x.xR8J = function () {
        var ctn1x = function (Vu2x, VV2x) {
            return Vu2x == VV2x ? "block" : "none"
        };
        var ctl1x = function (f9e, t9k, bF0x) {
            var pg4k = bFV1x.call(this, f9e, t9k);
            if (!pg4k && !!bF0x) pg4k = a8i.Gv1x(f9e, this.DB0x[t9k]);
            return pg4k
        };
        var bFV1x = function (f9e, t9k) {
            var pg4k;
            if (t9k == "tp") pg4k = a8i.z9q(f9e.name + "-tip");
            if (!pg4k) pg4k = a8i.I9z(f9e.parentNode, this.DB0x[t9k].nid)[0];
            return pg4k
        };
        return function (f9e, bF0x, t9k) {
            f9e = this.z9q(f9e) || f9e;
            if (!f9e) return;
            t9k == "er" ? a8i.y9p(f9e, this.bBX1x) : a8i.w9n(f9e, this.bBX1x);
            var pg4k = ctl1x.call(this, f9e, t9k, bF0x);
            if (!!pg4k && !!bF0x) pg4k.innerHTML = bF0x;
            k9b.ek1x(this.DB0x, function (A9r, J9A) {
                a8i.Y0x(bFV1x.call(this, f9e, J9A), "display", ctn1x(t9k, J9A))
            }, this)
        }
    }();
    ha2x.oN4R = function (f9e, bF0x) {
        this.xR8J(f9e, bF0x || this.pv4z[f9e.name + "-tip"], "tp");
        return this
    };
    ha2x.cto1x = function (f9e, bF0x) {
        this.xR8J(f9e, bF0x || this.pv4z[f9e.name + "-pass"] || this.pv4z.pass, "ok");
        return this
    };
    ha2x.ctq1x = function (f9e, bF0x) {
        this.xR8J(f9e, bF0x || this.pv4z[f9e.name + "-error"], "er");
        return this
    };
    ha2x.hS2x = function () {
        var fX2x = /^(?:radio|checkbox)$/i;
        var ctk1x = function (A9r) {
            return A9r == null ? "" : A9r
        };
        var bGg2x = function (A9r, f9e) {
            if (fX2x.test(f9e.type || "")) {
                f9e.checked = A9r == f9e.value
            } else {
                f9e.value = ctk1x(A9r)
            }
        };
        return function (T9K, A9r) {
            var f9e = this.z9q(T9K);
            if (!f9e) return this;
            if (f9e.tagName == "SELECT" || !f9e.length) {
                bGg2x(A9r, f9e)
            } else {
                k9b.be0x(f9e, bGg2x.g9d(null, A9r))
            }
            return this
        }
    }();
    ha2x.z9q = function (T9K) {
        return this.fG1x.elements[T9K]
    };
    ha2x.ctU1x = function () {
        return this.fG1x
    };
    ha2x.YQ3x = function () {
        var fX2x = /^radio|checkbox$/i, jo3x = /^number|date$/;
        var cti1x = function (bv0x, f9e) {
            var T9K = f9e.name, A9r = f9e.value, bt0x = bv0x[T9K], t9k = this.oK4O(f9e, "type");
            if (jo3x.test(t9k)) A9r = this.yd8V(A9r, t9k);
            if (fX2x.test(f9e.type) && !f9e.checked) {
                A9r = this.oK4O(f9e, "value");
                if (!A9r) return
            }
            if (!!bt0x) {
                if (!k9b.en1x(bt0x)) {
                    bt0x = [bt0x];
                    bv0x[T9K] = bt0x
                }
                bt0x.push(A9r)
            } else {
                bv0x[T9K] = A9r
            }
        };
        return function () {
            var m9d = {};
            k9b.be0x(this.fG1x.elements, function (f9e) {
                if (this.ctE1x(f9e)) cti1x.call(this, m9d, f9e)
            }, this);
            return m9d
        }
    }();
    ha2x.Jd2x = function () {
        var cth1x = function (f9e) {
            if (this.ZI3x(f9e)) this.oN4R(f9e)
        };
        return function () {
            this.fG1x.reset();
            k9b.be0x(this.fG1x.elements, cth1x, this);
            return this
        }
    }();
    ha2x.ctV1x = function () {
        this.fG1x.submit();
        return this
    };
    ha2x.fR2x = function () {
        var ctf1x = function (f9e) {
            if (this.ZI3x(f9e)) this.ctw1x(f9e)
        };
        return function () {
            this.DU0x = {};
            k9b.be0x(this.fG1x.elements, ctf1x, this);
            return this
        }
    }();
    ha2x.cte1x = function (f9e) {
        f9e = this.z9q(f9e) || f9e;
        if (!!f9e) return this.bDV1x(f9e);
        var m9d = !0;
        k9b.be0x(this.fG1x.elements, function (f9e) {
            var kk3x = this.cte1x(f9e);
            m9d = m9d && kk3x
        }, this);
        return m9d
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), H9y = c9h("nej.ut"), k9b = c9h("nej.u"),
        l9c = c9h("nm.x"), n9e = c9h("nm.l"), b8h, K9B;
    n9e.Ys2x = NEJ.C();
    b8h = n9e.Ys2x.O9F(n9e.dW1x);
    K9B = n9e.Ys2x.ch0x;
    b8h.bR0x = function () {
        this.cb0x();
        h9c.s9j(this.o9f, "click", this.cw0x.g9d(this));
        h9c.s9j(document, "mousewheel", this.yg8Y.g9d(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.yg8Y.g9d(this))
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        if (e9f.jst) {
            this.o9f.innerHTML = a8i.bP0x(e9f.jst, e9f.data)
        } else if (e9f.ntp) {
            this.o9f.appendChild(a8i.dt1x(e9f.ntp))
        } else if (e9f.txt) {
            this.o9f.innerHTML = a8i.hY2x(e9f.txt)
        } else if (e9f.html) {
            this.o9f.innerHTML = e9f.html
        }
        var Qm4q = this.o9f.getElementsByTagName("form");
        if (Qm4q.length) {
            this.fG1x = H9y.Rg4k.B9s({form: Qm4q[0]})
        }
        this.BN0x = a8i.cQ0x(this.o9f)[0]
    };
    b8h.bE0x = function () {
        this.x9o("ondestroy");
        this.bH0x();
        this.o9f.innerHTML = "";
        delete this.BN0x
    };
    b8h.cw0x = function (d9g) {
        var f9e = h9c.U9L(d9g, "d:action"), i9b = this.fG1x ? this.fG1x.YQ3x() : null,
            d9g = {action: a8i.u9l(f9e, "action")};
        if (i9b) d9g.data = i9b;
        if (d9g.action) {
            this.x9o("onaction", d9g);
            if (d9g.stopped) return;
            this.bq0x()
        }
    };
    b8h.yg8Y = function (d9g) {
        if (!this.BN0x) return;
        h9c.bh0x(d9g);
        var df1x = d9g.wheelDelta || -d9g.detail;
        this.BN0x.scrollTop -= df1x
    };
    l9c.js3x = function (e9f) {
        e9f.destroyable = e9f.destroyable || true;
        e9f.title = e9f.title || "提示";
        e9f.draggable = true;
        e9f.parent = document.body;
        e9f.mask = e9f.mask || true;
        var zY9P = n9e.Ys2x.B9s(e9f);
        zY9P.N9E();
        return zY9P
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bJS2x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ql4p = {}, BR0x = {};
    for (var i = 0, l = bJS2x.length, c; i < l; i++) {
        c = bJS2x.charAt(i);
        Ql4p[i] = c;
        BR0x[c] = i
    }
    var csS1x = function (iR2x) {
        var r9i = 0, c, m9d = [];
        while (r9i < iR2x.length) {
            c = iR2x[r9i];
            if (c < 128) {
                m9d.push(String.fromCharCode(c));
                r9i++
            } else if (c > 191 && c < 224) {
                m9d.push(String.fromCharCode((c & 31) << 6 | iR2x[r9i + 1] & 63));
                r9i += 2
            } else {
                m9d.push(String.fromCharCode((c & 15) << 12 | (iR2x[r9i + 1] & 63) << 6 | iR2x[r9i + 2] & 63));
                r9i += 3
            }
        }
        return m9d.join("")
    };
    var csR1x = function () {
        var hb2x = /\r\n/g;
        return function (i9b) {
            i9b = i9b.replace(hb2x, "\n");
            var m9d = [], nU4Y = String.fromCharCode(237);
            if (nU4Y.charCodeAt(0) < 0) for (var i = 0, l = i9b.length, c; i < l; i++) {
                c = i9b.charCodeAt(i);
                c > 0 ? m9d.push(c) : m9d.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = i9b.length, c; i < l; i++) {
                c = i9b.charCodeAt(i);
                if (c < 128) m9d.push(c); else if (c > 127 && c < 2048) m9d.push(c >> 6 | 192, c & 63 | 128); else m9d.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return m9d
        }
    }();
    var IZ2x = function (iR2x) {
        var r9i = 0, m9d = [], eE1x = iR2x.length % 3;
        if (eE1x == 1) iR2x.push(0, 0);
        if (eE1x == 2) iR2x.push(0);
        while (r9i < iR2x.length) {
            m9d.push(Ql4p[iR2x[r9i] >> 2], Ql4p[(iR2x[r9i] & 3) << 4 | iR2x[r9i + 1] >> 4], Ql4p[(iR2x[r9i + 1] & 15) << 2 | iR2x[r9i + 2] >> 6], Ql4p[iR2x[r9i + 2] & 63]);
            r9i += 3
        }
        if (eE1x == 1) m9d[m9d.length - 1] = m9d[m9d.length - 2] = "=";
        if (eE1x == 2) m9d[m9d.length - 1] = "=";
        return m9d.join("")
    };
    var csQ1x = function () {
        var qT5Y = /\n|\r|=/g;
        return function (i9b) {
            var r9i = 0, m9d = [];
            i9b = i9b.replace(qT5Y, "");
            for (var i = 0, l = i9b.length; i < l; i += 4) m9d.push(BR0x[i9b.charAt(i)] << 2 | BR0x[i9b.charAt(i + 1)] >> 4, (BR0x[i9b.charAt(i + 1)] & 15) << 4 | BR0x[i9b.charAt(i + 2)] >> 2, (BR0x[i9b.charAt(i + 2)] & 3) << 6 | BR0x[i9b.charAt(i + 3)]);
            var bp0x = m9d.length, eE1x = i9b.length % 4;
            if (eE1x == 2) m9d = m9d.slice(0, bp0x - 2);
            if (eE1x == 3) m9d = m9d.slice(0, bp0x - 1);
            return m9d
        }
    }();
    p.ctX1x = function (i9b) {
        return csS1x(csQ1x(i9b))
    };
    p.csJ1x = function (i9b) {
        try {
            return window.btoa(i9b)
        } catch (ex) {
            return IZ2x(csR1x(i9b))
        }
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), M9D = c9h("nej.p"),
        k9b = c9h("nej.u"), n9e = c9h("nm.l"), D9u = c9h("nm.w"), bI0x = c9h("nej.ui"), p9g = c9h("nm.d"),
        l9c = c9h("nm.x"), b8h, K9B;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n9e.bLt3x = NEJ.C();
    b8h = n9e.bLt3x.O9F(n9e.dW1x);
    b8h.bZ0x = function () {
        this.ca0x = "m-download-layer"
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.I9z(this.o9f, "j-flag");
        this.bcd5i = j9a[0];
        this.bce5j = j9a[1];
        this.bLJ3x = j9a[2];
        v9m.br0x("/client/version/get", {type: "json", onload: this.csH1x.g9d(this)});
        if (M9D.WC2x.mac) {
            a8i.w9n(this.bcd5i.parentNode, "f-hide");
            a8i.y9p(this.bce5j.parentNode, "f-hide");
            a8i.y9p(this.bLJ3x, "f-hide")
        } else {
            a8i.y9p(this.bcd5i.parentNode, "f-hide");
            a8i.w9n(this.bce5j.parentNode, "f-hide");
            a8i.w9n(this.bLJ3x, "f-hide")
        }
    };
    b8h.bk0x = function (e9f) {
        e9f.clazz = " m-layer-down";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "下载";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bl0x(e9f);
        this.bT0x([[this.o9f, "click", this.bO0x.g9d(this)]]);
        this.el1x = TYPE_MAP[e9f.type];
        this.gy2x = e9f.id
    };
    b8h.bE0x = function () {
        this.bH0x()
    };
    b8h.yD8v = function () {
        this.bq0x()
    };
    b8h.Cr0x = function (d9g) {
        this.x9o("onok", A9r);
        this.bq0x()
    };
    b8h.bO0x = function (d9g) {
        var f9e = h9c.U9L(d9g, "d:action");
        switch (a8i.u9l(f9e, "action")) {
            case"download":
                this.bq0x();
                window.open(a8i.u9l(f9e, "src"));
                break;
            case"orpheus":
                this.bq0x();
                location.href = "orpheus://" + k9b.csJ1x(JSON.stringify({
                    type: this.el1x,
                    id: this.gy2x,
                    cmd: "download"
                }));
                break
        }
    };
    b8h.csH1x = function (d9g) {
        if ((d9g || X0x).code == 200) {
            this.IP1x = d9g.data;
            this.bcd5i.innerText = "V" + this.IP1x.mac;
            this.bce5j.innerText = "V" + this.IP1x.pc
        }
    };
    l9c.Yc2x = function (e9f) {
        n9e.bLt3x.B9s(e9f).N9E()
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, k9b = c9h("nej.u"), p9g = c9h("nm.d"), bN0x = {};
    p9g.z9q = function (J9A) {
        return bN0x[J9A]
    };
    p9g.oG4K = function (J9A, bc0x) {
        bN0x[J9A] = bc0x
    };
    p9g.eP1x = function (i9b) {
        k9b.ek1x(i9b, function (q9h, J9A) {
            var bc0x = bN0x[J9A] || {};
            NEJ.X(bc0x, q9h);
            bN0x[J9A] = bc0x
        })
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, bb0x = c9h("nej.h");
    bb0x.XZ2x = function (J9A) {
        return localStorage.getItem(J9A)
    };
    bb0x.XY2x = function (J9A, A9r) {
        localStorage.setItem(J9A, A9r)
    };
    bb0x.bci5n = function (J9A) {
        localStorage.removeItem(J9A)
    };
    bb0x.bck5p = function () {
        localStorage.clear()
    };
    bb0x.csG1x = function () {
        var m9d = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m9d.push(localStorage.key(i));
        return m9d
    };
    bb0x.bcl5q = function () {
        (document.onstorageready || bn0x)()
    };
    bb0x.bcp5u = function () {
        return !0
    }
})();
(function () {
    var c9h = NEJ.P, M9D = c9h("nej.p"), iH2x = c9h("nej.c"), bb0x = c9h("nej.h"), rO5T;
    if (M9D.mE4I.trident || !!window.localStorage) return;
    var csF1x = function () {
        var qi5n, eU1x;
        var bfs6m = function () {
            qi5n = document.createElement("div");
            NEJ.X(qi5n.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qi5n);
            qi5n.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iH2x.z9q("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Oj3x = function () {
            eU1x = window.clearTimeout(eU1x);
            var gZ2x = qi5n.getElementsByTagName("object")[0];
            if (!!gZ2x.initStorage) {
                delete qi5n;
                rO5T = gZ2x;
                rO5T.initStorage("nej-storage");
                (document.onstorageready || bn0x)();
                return
            }
            eU1x = window.setTimeout(Oj3x, 500)
        };
        return function () {
            if (!!rO5T) return;
            bfs6m();
            Oj3x()
        }
    }();
    bb0x.XZ2x = bb0x.XZ2x.ed1x(function (d9g) {
        d9g.stopped = !0;
        if (!rO5T) return;
        d9g.value = rO5T.getItem(d9g.args[0])
    });
    bb0x.XY2x = bb0x.XY2x.ed1x(function (d9g) {
        d9g.stopped = !0;
        if (!rO5T) return;
        var bg0x = d9g.args;
        rO5T.setItem(bg0x[0], bg0x[1])
    });
    bb0x.bci5n = bb0x.bci5n.ed1x(function (d9g) {
        d9g.stopped = !0;
        if (!rO5T) return;
        rO5T.removeItem(d9g.args[0])
    });
    bb0x.bck5p = bb0x.bck5p.ed1x(function (d9g) {
        d9g.stopped = !0;
        if (!!rO5T) rO5T.clear()
    });
    bb0x.bcl5q = bb0x.bcl5q.ed1x(function (d9g) {
        d9g.stopped = !0;
        csF1x()
    });
    bb0x.bcp5u = bb0x.bcp5u.ed1x(function (d9g) {
        d9g.stopped = !0;
        d9g.value = !!rO5T
    })
})();
(function () {
    var c9h = NEJ.P, k9b = c9h("nej.u"), h9c = c9h("nej.v"), bb0x = c9h("nej.h"), v9m = c9h("nej.j"),
        H9y = c9h("nej.ut"), Q9H = {};
    v9m.uN7G = function (J9A, A9r) {
        var bOh3x = JSON.stringify(A9r);
        try {
            bb0x.XY2x(J9A, bOh3x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bOh3x != bb0x.XZ2x(J9A)) Q9H[J9A] = A9r;
        return this
    };
    v9m.sF5K = function (J9A) {
        var i9b = JSON.parse(bb0x.XZ2x(J9A) || "null");
        return i9b == null ? Q9H[J9A] : i9b
    };
    v9m.brS8K = function (J9A, A9r) {
        var i9b = v9m.sF5K(J9A);
        if (i9b == null) {
            i9b = A9r;
            v9m.uN7G(J9A, i9b)
        }
        return i9b
    };
    v9m.PY3x = function (J9A) {
        delete Q9H[J9A];
        bb0x.bci5n(J9A);
        return this
    };
    v9m.cua1x = function () {
        var bcB5G = function (q9h, J9A, bv0x) {
            delete bv0x[J9A]
        };
        return function () {
            k9b.ek1x(Q9H, bcB5G);
            bb0x.bck5p();
            return this
        }
    }();
    v9m.cub1x = function (m9d) {
        m9d = m9d || {};
        k9b.be0x(bb0x.csG1x(), function (J9A) {
            m9d[J9A] = v9m.sF5K(J9A)
        });
        return m9d
    };
    H9y.fv1x.B9s({
        element: document, event: "storageready", oneventadd: function () {
            if (bb0x.bcp5u()) {
                document.onstorageready()
            }
        }
    });
    var csC1x = function () {
        var csB1x = function (A9r, J9A, bv0x) {
            bb0x.XY2x(J9A, JSON.stringify(A9r));
            delete bv0x[J9A]
        };
        return function () {
            k9b.ek1x(Q9H, csB1x)
        }
    }();
    h9c.s9j(document, "storageready", csC1x);
    bb0x.bcl5q()
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), k9b = c9h("nej.u"), M9D = c9h("nej.ut"), IT1x;
    if (!!M9D.bcQ5V) return;
    M9D.bcQ5V = NEJ.C();
    IT1x = M9D.bcQ5V.O9F(M9D.cy0x);
    IT1x.cl0x = function () {
        var gb2x = +(new Date), mj3x = "dat-" + gb2x;
        return function () {
            this.cr0x();
            var Q9H = this.constructor[mj3x];
            if (!Q9H) {
                Q9H = {};
                this.constructor[mj3x] = Q9H
            }
            this.R9I = Q9H
        }
    }();
    IT1x.z9q = function (J9A) {
        return this.R9I[J9A]
    };
    IT1x.oG4K = function (J9A, A9r) {
        var lK3x = this.R9I[J9A];
        this.R9I[J9A] = A9r;
        h9c.x9o(localCache, "cachechange", {key: J9A, type: "set", oldValue: lK3x, newValue: A9r});
        return this
    };
    IT1x.cK0x = function (J9A) {
        var lK3x = this.R9I[J9A];
        k9b.VN2x(this.R9I, J9A);
        h9c.x9o(localCache, "cachechange", {key: J9A, type: "delete", oldValue: lK3x, newValue: undefined});
        return lK3x
    };
    IT1x.Xs2x = function (Ex0x) {
        return NEJ.Q(this.R9I, Ex0x)
    };
    window.localCache = M9D.bcQ5V.B9s();
    M9D.fv1x.B9s({element: localCache, event: "cachechange"})
})();
(function () {
    var c9h = NEJ.P, fc1x = NEJ.R, bn0x = NEJ.F, k9b = c9h("nej.u"), v9m = c9h("nej.j"), M9D = c9h("nej.ut"),
        mj3x = "dat-" + +(new Date), ml3x;
    if (!!M9D.bcU5Z) return;
    M9D.bcU5Z = NEJ.C();
    ml3x = M9D.bcU5Z.O9F(M9D.cy0x);
    ml3x.cl0x = function () {
        this.cr0x();
        this.R9I = this.constructor[mj3x];
        if (!this.R9I) {
            this.R9I = {};
            this.R9I[mj3x + "-l"] = {};
            this.constructor[mj3x] = this.R9I
        }
    };
    ml3x.pY5d = function (J9A) {
        return this.R9I[J9A]
    };
    ml3x.oB4F = function (J9A, A9r) {
        this.R9I[J9A] = A9r
    };
    ml3x.ky3x = function (J9A, kw3x) {
        var i9b = this.pY5d(J9A);
        if (i9b == null) {
            i9b = kw3x;
            this.oB4F(J9A, i9b)
        }
        return i9b
    };
    ml3x.csA1x = function (J9A) {
        if (J9A != null) {
            delete this.R9I[J9A];
            return
        }
        k9b.ek1x(this.R9I, function (q9h, J9A) {
            if (J9A == mj3x + "-l") return;
            this.csA1x(J9A)
        }, this)
    };
    ml3x.cuc1x = function (J9A) {
        if (!!v9m.PY3x) return v9m.PY3x(J9A)
    };
    ml3x.csx1x = function (J9A) {
        if (!!v9m.sF5K) return v9m.sF5K(J9A)
    };
    ml3x.csw1x = function (J9A, A9r) {
        if (!!v9m.uN7G) v9m.uN7G(J9A, A9r)
    };
    ml3x.DP0x = function (J9A, kw3x) {
        var i9b = this.PK3x(J9A);
        if (i9b == null) {
            i9b = kw3x;
            this.uE7x(J9A, i9b)
        }
        return i9b
    };
    ml3x.PK3x = function (J9A) {
        var i9b = this.pY5d(J9A);
        if (i9b != null) return i9b;
        i9b = this.csx1x(J9A);
        if (i9b != null) this.oB4F(J9A, i9b);
        return i9b
    };
    ml3x.uE7x = function (J9A, A9r) {
        this.csw1x(J9A, A9r);
        this.oB4F(J9A, A9r)
    };
    ml3x.bvR9I = function (J9A) {
        if (J9A != null) {
            delete this.R9I[J9A];
            if (!!v9m.PY3x) v9m.PY3x(J9A);
            return
        }
        k9b.ek1x(this.R9I, function (q9h, J9A) {
            if (J9A == mj3x + "-l") return;
            this.bvR9I(J9A)
        }, this)
    };
    ml3x.cud1x = function () {
        this.bvR9I();
        return this
    };
    ml3x.cue1x = function (J9A) {
        var i9b = this.R9I[mj3x + "-l"];
        delete i9b[J9A]
    };
    ml3x.bdl5q = function (J9A) {
        var i9b = this.R9I[mj3x + "-l"], bg0x = fc1x.slice.call(arguments, 1);
        k9b.be0x(i9b[J9A], function (dq1x) {
            try {
                dq1x.apply(null, bg0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete i9b[J9A]
    };
    ml3x.bdm5r = function (J9A, dq1x) {
        dq1x = dq1x || bn0x;
        var j9a = this.R9I[mj3x + "-l"][J9A];
        if (!j9a) {
            j9a = [dq1x];
            this.R9I[mj3x + "-l"][J9A] = j9a;
            return !1
        }
        j9a.push(dq1x);
        return !0
    };
    ml3x.csp1x = function (j9a, bj0x, fV2x) {
        if (!j9a) return !1;
        bj0x = parseInt(bj0x) || 0;
        fV2x = parseInt(fV2x) || 0;
        if (!fV2x) {
            if (!j9a.loaded) return !1;
            fV2x = j9a.length
        }
        if (!!j9a.loaded) fV2x = Math.min(fV2x, j9a.length - bj0x);
        for (var i = 0; i < fV2x; i++) if (!j9a[bj0x + i]) return !1;
        return !0
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, k9b = c9h("nej.u"), M9D = c9h("nej.ut"), b8h, K9B;
    if (!!M9D.Pz3x) return;
    M9D.Pz3x = NEJ.C();
    b8h = M9D.Pz3x.O9F(M9D.bcU5Z);
    K9B = M9D.Pz3x.ch0x;
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.uk7d = e9f.key || "id";
        this.ba0x = e9f.data || X0x;
        this.csn1x = !!e9f.autogc;
        this.csm1x(e9f.id)
    };
    b8h.bE0x = function () {
        this.bH0x();
        if (!!this.dL1x) {
            this.bxx0x()
        }
    };
    b8h.csm1x = function (C9t) {
        var Q9H;
        if (!!C9t) {
            Q9H = this.R9I[C9t];
            if (!Q9H) {
                Q9H = {};
                this.R9I[C9t] = Q9H
            }
        }
        Q9H = Q9H || this.R9I;
        Q9H.hash = Q9H.hash || {};
        this.Py3x = Q9H
    };
    b8h.bxx0x = function () {
        this.dL1x = window.clearTimeout(this.dL1x);
        var bv0x = {};
        k9b.ek1x(this.Py3x, function (j9a, J9A) {
            if (J9A == "hash") return;
            if (!k9b.en1x(j9a)) return;
            k9b.be0x(j9a, function (q9h) {
                if (!q9h) return;
                bv0x[q9h[this.uk7d]] = !0
            }, this)
        }, this);
        k9b.ek1x(this.WN2x(), function (q9h, C9t, dG1x) {
            if (!bv0x[C9t]) {
                delete dG1x[C9t]
            }
        })
    };
    b8h.csl1x = function () {
        if (!!this.dL1x) {
            this.dL1x = window.clearTimeout(this.dL1x)
        }
        this.dL1x = window.setTimeout(this.bxx0x.g9d(this), 150)
    };
    b8h.yT9K = function (q9h, WJ2x) {
        q9h = this.byb0x(q9h, WJ2x) || q9h;
        if (!q9h) return null;
        var J9A = q9h[this.uk7d];
        if (J9A != null) {
            var hA2x = this.WN2x()[J9A];
            if (!!hA2x) q9h = NEJ.X(hA2x, q9h);
            this.WN2x()[J9A] = q9h
        }
        delete q9h.byf0x;
        return q9h
    };
    b8h.byb0x = bn0x;
    b8h.bdq5v = function (J9A, q9h) {
        if (!q9h) return;
        if (!k9b.en1x(q9h)) {
            var j9a = this.gU2x(J9A), q9h = this.yT9K(q9h, J9A);
            if (!!q9h) j9a.unshift(q9h);
            return
        }
        k9b.mq3x(q9h, this.bdq5v.g9d(this, J9A))
    };
    b8h.Pr3x = function (J9A, cp0x) {
        var j9a = this.gU2x(J9A);
        j9a.length = Math.max(j9a.length, cp0x);
        this.bdr5w(J9A);
        return this
    };
    b8h.jA3x = function (J9A) {
        return this.gU2x(J9A).length
    };
    b8h.bdr5w = function (J9A, og4k) {
        this.gU2x(J9A).loaded = og4k != !1;
        return this
    };
    b8h.WB2x = function (J9A) {
        return !!this.gU2x(J9A).loaded
    };
    b8h.so5t = function (J9A, j9a) {
        this.tY7R(J9A);
        this.bds5x({key: J9A, offset: 0, limit: j9a.length + 1}, {list: j9a, total: j9a.length})
    };
    b8h.gU2x = function () {
        var AO9F = function (J9A) {
            return (J9A || "") + (!J9A ? "" : "-") + "list"
        };
        return function (J9A) {
            var J9A = AO9F(J9A), j9a = this.Py3x[J9A];
            if (!j9a) {
                j9a = [];
                this.Py3x[J9A] = j9a
            }
            return j9a
        }
    }();
    b8h.WN2x = function () {
        var dG1x = this.Py3x.hash;
        if (!dG1x) {
            dG1x = {};
            this.Py3x.hash = dG1x
        }
        return dG1x
    };
    b8h.bdt5y = function () {
        var AO9F = function (e9f) {
            return "r-" + e9f.key
        };
        return function (e9f) {
            var id2x = NEJ.X({}, e9f), mW4a = AO9F(id2x);
            if (!this.bdm5r(mW4a, this.x9o.g9d(this))) {
                id2x.rkey = mW4a;
                id2x.onload = this.csj1x.g9d(this, id2x);
                this.x9o("dopullrefresh", id2x)
            }
            return this
        }
    }();
    b8h.csj1x = function (e9f, j9a) {
        this.bdq5v(e9f.key, j9a);
        this.bdl5q(e9f.rkey, "onpullrefresh", e9f)
    };
    b8h.ns4w = function () {
        var AO9F = function (e9f) {
            return "r-" + e9f.key + "-" + e9f.offset + "-" + e9f.limit
        };
        return function (e9f) {
            e9f = e9f || X0x;
            var id2x = {
                key: "" + e9f.key || "",
                ext: e9f.ext || null,
                data: e9f.data || null,
                offset: parseInt(e9f.offset) || 0,
                limit: parseInt(e9f.limit) || 0
            }, j9a = this.gU2x(id2x.key);
            if (this.csp1x(j9a, id2x.offset, id2x.limit)) {
                this.x9o("onlistload", id2x);
                return this
            }
            var mW4a = AO9F(id2x);
            if (!this.bdm5r(mW4a, this.x9o.g9d(this))) {
                id2x.rkey = mW4a;
                id2x.onload = this.bds5x.g9d(this, id2x);
                this.x9o("doloadlist", id2x)
            }
            return this
        }
    }();
    b8h.bds5x = function () {
        var AS9J = function (q9h, r9i, j9a) {
            if (!!q9h) {
                return !0
            }
            j9a.splice(r9i, 1)
        };
        return function (e9f, m9d) {
            e9f = e9f || X0x;
            var J9A = e9f.key, bj0x = e9f.offset, bzs0x = this.gU2x(J9A);
            var j9a = m9d || [];
            if (!k9b.en1x(j9a)) {
                j9a = m9d.result || m9d.list || [];
                var cp0x = parseInt(m9d.total);
                if (!isNaN(cp0x) || cp0x > j9a.length) {
                    this.Pr3x(J9A, cp0x)
                }
            }
            k9b.be0x(j9a, function (q9h, r9i) {
                bzs0x[bj0x + r9i] = this.yT9K(q9h, J9A)
            }, this);
            if (j9a.length < e9f.limit) {
                this.bdr5w(J9A);
                k9b.mq3x(bzs0x, AS9J)
            }
            this.bdl5q(e9f.rkey, "onlistload", e9f)
        }
    }();
    b8h.tY7R = function () {
        var AS9J = function (q9h, r9i, j9a) {
            j9a.splice(r9i, 1)
        };
        return function (J9A) {
            var j9a = this.gU2x(J9A);
            k9b.mq3x(j9a, AS9J);
            this.bdr5w(J9A, !1);
            if (this.csn1x) {
                this.csl1x()
            }
            return this
        }
    }();
    b8h.bzJ0x = function (q9h, WJ2x) {
        return !q9h.byf0x
    };
    b8h.eg1x = function (C9t) {
        return this.WN2x()[C9t]
    };
    b8h.cuf1x = function (C9t) {
        var q9h = this.eg1x(C9t);
        if (!!q9h) q9h.byf0x = !0
    };
    b8h.Wu2x = function () {
        var AO9F = function (e9f) {
            return "r-" + e9f.key + "-" + e9f.id
        };
        return function (e9f) {
            e9f = e9f || X0x;
            var C9t = e9f[this.uk7d], id2x = {id: C9t, ext: e9f.ext, data: e9f.data || {}, key: "" + e9f.key || ""};
            q9h = this.eg1x(C9t);
            id2x.data[this.uk7d] = C9t;
            if (!!q9h && this.bzJ0x(q9h, id2x.key)) {
                this.x9o("onitemload", id2x);
                return this
            }
            var mW4a = AO9F(id2x);
            if (!this.bdm5r(mW4a, this.x9o.g9d(this))) {
                id2x.rkey = mW4a;
                id2x.onload = this.csh1x.g9d(this, id2x);
                this.x9o("doloaditem", id2x)
            }
            return this
        }
    }();
    b8h.csh1x = function (e9f, q9h) {
        e9f = e9f || X0x;
        this.yT9K(q9h, e9f.key);
        this.bdl5q(e9f.rkey, "onitemload", e9f)
    };
    b8h.iM2x = function (e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.xM8E.g9d(this, e9f);
        this.x9o("doadditem", e9f)
    };
    b8h.xM8E = function (e9f, q9h) {
        var J9A = e9f.key;
        q9h = this.yT9K(q9h, J9A);
        if (!!q9h) {
            var ew1x = 0, j9a = this.gU2x(J9A);
            if (!e9f.push) {
                ew1x = -1;
                var bj0x = e9f.offset || 0;
                j9a.splice(bj0x, 0, q9h)
            } else if (j9a.loaded) {
                ew1x = 1;
                j9a.push(q9h)
            } else {
                j9a.length++
            }
        }
        var d9g = {key: J9A, flag: ew1x, data: q9h, action: "add", ext: e9f.ext};
        this.x9o("onitemadd", d9g);
        return d9g
    };
    b8h.II1x = function (e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.bdw5B.g9d(this, e9f);
        this.x9o("dodeleteitem", e9f)
    };
    b8h.bdw5B = function (e9f, bAv0x) {
        var q9h, J9A = e9f.key;
        if (!!bAv0x) {
            q9h = this.eg1x(e9f.id) || null;
            var C9t = e9f.id, csf1x = this.uk7d, j9a = this.gU2x(J9A), r9i = k9b.cU0x(j9a, function (hA2x) {
                return !!hA2x && hA2x[csf1x] == C9t
            });
            if (r9i >= 0) j9a.splice(r9i, 1)
        }
        var d9g = {key: J9A, data: q9h, action: "delete", ext: e9f.ext};
        this.x9o("onitemdelete", d9g);
        return d9g
    };
    b8h.Wp2x = function (e9f) {
        e9f = NEJ.X({}, e9f);
        e9f.onload = this.cse1x.g9d(this, e9f);
        this.x9o("doupdateitem", e9f)
    };
    b8h.cse1x = function (e9f, q9h) {
        var J9A = e9f.key;
        if (!!q9h) q9h = this.yT9K(q9h, J9A);
        var d9g = {key: J9A, data: q9h, action: "update", ext: e9f.ext};
        this.x9o("onitemupdate", d9g);
        return d9g
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, k9b = c9h("nej.u"), M9D = c9h("nej.ut"), b8h;
    if (!!M9D.bdA5F) return;
    M9D.bdA5F = NEJ.C();
    b8h = M9D.bdA5F.O9F(M9D.Pz3x);
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.bjc6W({
            doloadlist: this.Wk2x.g9d(this),
            doloaditem: this.bdE5J.g9d(this),
            doadditem: this.bBp0x.g9d(this),
            dodeleteitem: this.Wi2x.g9d(this),
            doupdateitem: this.Wh2x.g9d(this),
            dopullrefresh: this.bBz1x.g9d(this)
        })
    };
    b8h.Wk2x = bn0x;
    b8h.bBz1x = bn0x;
    b8h.bdE5J = bn0x;
    b8h.bBp0x = bn0x;
    b8h.Wi2x = bn0x;
    b8h.Wh2x = bn0x
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        H9y = c9h("nej.ut"), l9c = c9h("nm.x"), p9g = c9h("nm.d"), b8h, K9B;
    p9g.gW2x = NEJ.C();
    b8h = p9g.gW2x.O9F(H9y.bdA5F);
    b8h.ck0x = function () {
        var Pf3x = location.protocol + "//" + location.host;
        var csd1x = function (bs0x, i9b) {
            var bv0x = {conf: {}, data: {}, urls: []};
            k9b.be0x(bs0x, function (J9A, r9i, j9a) {
                var bc0x = p9g.z9q(J9A);
                if (!bc0x) return;
                var bdL5Q = bBI1x(bc0x.url, i9b[J9A]);
                bv0x.urls.push(bdL5Q);
                bv0x.conf[bdL5Q] = bc0x;
                bv0x.data[bdL5Q] = JSON.stringify(i9b[J9A] == null ? "" : i9b[J9A])
            });
            return bv0x
        };
        var bBI1x = function (V9M, i9b) {
            return V9M.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return i9b[$2] || $1
            })
        };
        var bBJ1x = function (bc0x, e9f, d9g) {
            h9c.x9o(window, "requesterror", d9g);
            if (!!d9g.stopped) return;
            var IG1x = bc0x.onerror || e9f.onerror;
            if (k9b.fg1x(IG1x)) {
                this.x9o(IG1x, d9g, e9f)
            } else {
                (IG1x || bn0x).call(this, d9g, e9f)
            }
            var d9g = {result: d9g, option: e9f};
            this.x9o("onerror", d9g);
            if (!d9g.stopped) (bc0x.onmessage || bn0x).call(this, d9g.result.code, d9g.result)
        };
        var bBM1x = function (P9G, bc0x, e9f) {
            var m9d = P9G;
            if (k9b.fY2x(bc0x.format)) {
                m9d = bc0x.format.call(this, P9G, e9f)
            }
            return m9d
        };
        var wX8P = function (P9G, bc0x, e9f, tg6a) {
            if (k9b.fY2x(bc0x.beforeload)) {
                bc0x.beforeload.call(this, P9G, e9f, bc0x)
            }
            if (P9G && P9G.code != null && P9G.code != 200) {
                bBJ1x.call(this, bc0x, e9f, {
                    key: e9f.key,
                    code: P9G.code,
                    message: P9G.message || "",
                    captchaId: P9G.captchaId,
                    ext: P9G
                });
                return
            }
            var m9d = P9G;
            if (!tg6a) {
                m9d = bBM1x.call(this, P9G, bc0x, e9f)
            } else if (k9b.fY2x(bc0x.format)) {
                var bdP5U = [];
                k9b.be0x(tg6a.urls, function (V9M) {
                    bdP5U.push(bBM1x.call(this, P9G[V9M], tg6a.conf[V9M], e9f))
                }, this);
                bdP5U.push(e9f);
                m9d = bc0x.format.apply(this, bdP5U)
            }
            var tT7M = bc0x.onload || e9f.onload, bBY1x = bc0x.finaly || e9f.finaly || bn0x;
            if (k9b.fg1x(tT7M)) {
                bBY1x.call(this, this.x9o(tT7M, m9d), e9f)
            } else {
                bBY1x.call(this, (tT7M || bn0x).call(this, m9d), e9f)
            }
        };
        var yB8t = function (bc0x, e9f, bQ0x) {
            bBJ1x.call(this, bc0x, e9f, {key: e9f.key, code: bQ0x.code || -1, message: bQ0x.message || ""})
        };
        return function (bc0x, e9f) {
            if (k9b.fg1x(bc0x)) {
                bc0x = p9g.z9q(bc0x)
            }
            delete e9f.value;
            (bc0x.filter || bn0x).call(this, e9f, bc0x);
            var P9G = e9f.value;
            if (!!P9G) {
                wX8P.call(this, P9G, bc0x, e9f);
                return
            }
            var V9M, i9b = e9f.data || X0x, xj8b = {
                cookie: !0,
                type: bc0x.rtype || "json",
                method: bc0x.type || "POST",
                onerror: yB8t.g9d(this, bc0x, e9f),
                noescape: bc0x.noescape
            };
            if (k9b.en1x(bc0x.url)) {
                var tg6a = csd1x(bc0x.url, i9b);
                V9M = Pf3x + "/api/batch";
                xj8b.data = k9b.dd1x(tg6a.data);
                xj8b.onload = wX8P.dT1x(this, bc0x, e9f, tg6a);
                xj8b.headers = {"batch-method": "POST"};
                delete tg6a.data
            } else {
                var kZ3x = bc0x.url.indexOf(":") < 0 ? Pf3x : "";
                V9M = bBI1x(kZ3x + bc0x.url, i9b);
                xj8b.data = k9b.dd1x(e9f.data);
                xj8b.onload = wX8P.dT1x(this, bc0x, e9f)
            }
            if (xj8b.method == "GET") xj8b.query = xj8b.data;
            return v9m.br0x(V9M, xj8b)
        }
    }();
    b8h.BM0x = function () {
        var fX2x = /^get|list|pull$/i;
        return function (bCf1x, e9f) {
            var J9A = e9f.key, bc0x = p9g.z9q(J9A.split("-")[0] + "-" + bCf1x);
            if (fX2x.test(bCf1x) && J9A.indexOf("post-") < 0) bc0x.type = "GET";
            this.ck0x(bc0x, e9f)
        }
    }();
    b8h.cug1x = function (J9A, j9a) {
        var cp0x = j9a.length;
        this.bds5x({key: J9A, offset: 0, limit: cp0x + 1}, {list: j9a, total: cp0x})
    };
    b8h.Wk2x = function (e9f) {
        this.BM0x("list", e9f)
    };
    b8h.bdE5J = function (e9f) {
        this.BM0x("get", e9f)
    };
    b8h.bBz1x = function (e9f) {
        this.BM0x("pull", e9f)
    };
    b8h.bBp0x = function (e9f) {
        this.BM0x("add", e9f)
    };
    b8h.Wi2x = function (e9f) {
        this.BM0x("del", e9f)
    };
    b8h.Wh2x = function (e9f) {
        this.BM0x("update", e9f)
    };
    b8h.csa1x = function (q9h) {
        this.yT9K(q9h)
    };
    H9y.fv1x.B9s({element: window, event: "requesterror"})
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), H9y = c9h("nej.ut"), p9g = c9h("nm.d"), bei5n = {},
        b8h, K9B;
    var tQ7J = function (m9d, e9f) {
        m9d.conf = e9f.conf;
        return m9d
    };
    p9g.eP1x({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (P9G, e9f) {
                return tQ7J({mv: P9G}, e9f)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (m9d, e9f) {
                if (!!m9d.songs && m9d.songs.length > 0) m9d.song = m9d.songs[0]; else m9d.song = bei5n;
                delete m9d.songs;
                return tQ7J(m9d, e9f)
            }, filter: function (e9f) {
                e9f.data.ids = "[" + e9f.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: tQ7J},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: tQ7J},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (m9d, e9f) {
                m9d.playlist = m9d.result;
                delete m9d.result;
                return tQ7J(m9d, e9f)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: tQ7J},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: tQ7J},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: tQ7J},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e9f) {
                var j9a = e9f.data.id.split("-");
                e9f.data.radioId = j9a[0];
                e9f.data.asc = j9a[1] == 2;
                e9f.data.limit = 1e3;
                delete e9f.data.id
            }, format: function (P9G, e9f) {
                var crZ1x = {id: e9f.data.radioId, programs: P9G.programs};
                return tQ7J({djradio: crZ1x}, e9f)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: tQ7J},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e9f) {
                e9f.data.lv = 0;
                e9f.data.tv = 0
            }, format: function (m9d, e9f) {
                var uh7a = {lyric: "", nolyric: true};
                if (m9d.code == 200 && m9d.lrc && m9d.lrc.lyric) {
                    uh7a.lyric = m9d.lrc.lyric;
                    uh7a.nolyric = false
                } else {
                    uh7a.nolyric = true
                }
                return tQ7J({lyric: uh7a}, e9f)
            }
        }
    });
    p9g.ui7b = NEJ.C();
    b8h = p9g.ui7b.O9F(p9g.gW2x);
    b8h.crV1x = function (t9k, cJ0x) {
        return this.pY5d(this.VR2x(t9k, cJ0x))
    };
    b8h.OW3x = function (t9k, cJ0x, e9f) {
        e9f = e9f || {};
        var i9b = this.pY5d(this.VR2x(t9k, cJ0x));
        if (i9b && (t9k != 13 && t9k != 19 || e9f.conf && e9f.conf.useCache)) {
            this.x9o("onresourceload", t9k, cJ0x, i9b, e9f.conf);
            return
        }
        e9f.data = {id: cJ0x};
        e9f.onload = this.crU1x.g9d(this, t9k, cJ0x);
        e9f.onerror = this.crS1x.g9d(this, t9k, cJ0x);
        this.ck0x("res-" + this.zd9U(t9k) + "-get", e9f)
    };
    b8h.crU1x = function (t9k, cJ0x, m9d) {
        var i9b = m9d[this.zd9U(t9k)];
        this.oB4F(this.VR2x(t9k, cJ0x), i9b);
        this.x9o("onresourceload", t9k, cJ0x, i9b, m9d.conf)
    };
    b8h.crS1x = function (t9k, cJ0x, m9d, e9f) {
        if (m9d.code != 404) {
            this.x9o("onresourceerror", t9k, cJ0x, m9d.code);
            return
        }
        this.oB4F(this.VR2x(t9k, cJ0x), bei5n);
        this.x9o("onresourceload", t9k, cJ0x, bei5n, e9f.conf)
    };
    b8h.cuh1x = function (t9k, e9f) {
        this.ck0x("res-" + this.zd9U(t9k) + "-play", e9f)
    };
    b8h.VR2x = function (t9k, cJ0x) {
        return "res-" + this.zd9U(t9k) + "-" + cJ0x
    };
    b8h.zd9U = function (t9k) {
        var bv0x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv0x[t9k]
    };
    p9g.ui7b.IC1x = function (t9k, cJ0x) {
        if (!this.eM1x) this.eM1x = p9g.ui7b.B9s({});
        return this.eM1x.crV1x(t9k, cJ0x)
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        p9g = c9h("nm.d"), bel5q = /^[1-9][0-9]*$/, b8h, K9B;
    var LOCAL_LOG_KEY = "local-log";
    p9g.eP1x({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    p9g.hQ2x = NEJ.C();
    b8h = p9g.hQ2x.O9F(p9g.gW2x);
    b8h.gd2x = function (W9N, bc0x) {
        if (!W9N || !bc0x) return;
        if (k9b.fg1x(bc0x)) {
            try {
                bc0x = JSON.parse(bc0x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a8i)
                }
            }
        }
        if (!k9b.kI3x(bc0x)) return;
        this.ck0x("bi-log", {data: {logs: JSON.stringify([{action: W9N, json: bc0x}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W9N + ", json=" + JSON.stringify(bc0x))
        }
    };
    b8h.VK2x = function (mY4c) {
        if (!k9b.en1x(mY4c)) return;
        this.ck0x("bi-batch-log", {data: {logs: JSON.stringify(mY4c)}})
    };
    b8h.bDJ1x = function (bc0x) {
        if (!bc0x || !bc0x.type || !bc0x.rid) return;
        var mZ4d = bc0x.type;
        if (bel5q.test(mZ4d)) {
            mZ4d = this.zd9U(mZ4d)
        }
        if (!mZ4d) return;
        if (mZ4d == "playlist") mZ4d = "list";
        this.gd2x("search", {type: mZ4d, id: bc0x.rid || null, keyword: bc0x.keyword || null})
    };
    b8h.OS3x = function () {
        var crQ1x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bc0x) {
            if (!bc0x || !bc0x.type || !bc0x.rid) return;
            if (bc0x.play === undefined) bc0x.play = true;
            var mZ4d = bc0x.type;
            if (bel5q.test(mZ4d)) {
                mZ4d = this.zd9U(mZ4d)
            }
            if (!mZ4d) return;
            if (mZ4d == "playlist") mZ4d = "list";
            var P9G = {id: bc0x.rid, type: mZ4d};
            if (mZ4d == "song" && bc0x.source) {
                P9G.source = this.bDT1x(bc0x.source);
                if (!!bc0x.sourceid) P9G.sourceid = bc0x.sourceid
            }
            this.gd2x(!bc0x.play ? "addto" : "play", P9G);
            if (mZ4d == "song" && bc0x.hash && bc0x.hash.match(crQ1x)) {
                this.gd2x(!bc0x.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b8h.beC5H = function (C9t, bz0x, dH1x, CA0x) {
        var P9G = {type: "song", wifi: 0, download: 0};
        var crP1x = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        P9G.id = C9t;
        P9G.time = Math.round(bz0x);
        P9G.end = k9b.fg1x(CA0x) ? CA0x : crP1x[CA0x] || "";
        if (dH1x && dH1x.fid) {
            P9G.source = this.bDT1x(dH1x.fid);
            P9G.sourceId = dH1x.fdata
        }
        this.gd2x("play", P9G)
    };
    b8h.bEE1x = function (t9k, cJ0x) {
        if (!t9k || !cJ0x) return;
        if (bel5q.test(t9k)) t9k = this.zd9U(t9k);
        if (t9k != "playlist" && t9k != "dj") return;
        var bc0x = p9g.z9q("plus-" + t9k + "-count");
        if (!bc0x) return !1;
        this.ck0x(bc0x, {data: {id: cJ0x}});
        var Q9H = this.ky3x("play-hist-" + t9k, []);
        if (k9b.cU0x(Q9H, cJ0x) < 0) {
            Q9H.push(cJ0x);
            return !0
        }
        return !1
    };
    b8h.zd9U = function (t9k) {
        var bv0x = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bv0x[t9k]
    };
    b8h.bDT1x = function (Iw1x) {
        var bv0x = {
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
        return bv0x[Iw1x]
    };
    b8h.crL1x = function (gT2x) {
        var mY4c = this.DP0x(LOCAL_LOG_KEY, []);
        mY4c.unshift(gT2x);
        if (mY4c.length > 200) {
            mY4c.length = 200
        }
        this.uE7x(LOCAL_LOG_KEY, mY4c)
    };
    b8h.crI1x = function () {
        return this.PK3x(LOCAL_LOG_KEY)
    };
    b8h.eB1x = function (P9G) {
        this.gd2x("play", P9G)
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), v9m = c9h("nej.j"), H9y = c9h("nej.ut"),
        a8i = c9h("nej.e"), k9b = c9h("nej.u"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), p9g = c9h("nm.d");
    if (!p9g.ui7b) return;
    var Q9H = p9g.ui7b.B9s({onresourceload: crG1x});
    var ww8o = p9g.hQ2x.fW2x();

    function crG1x(t9k, cJ0x, i9b, bc0x) {
        var j9a = [];
        switch (parseInt(t9k)) {
            case 2:
                j9a = i9b;
                break;
            case 13:
                j9a = i9b.tracks;
                break;
            case 18:
                j9a.push(i9b);
                break;
            case 19:
                j9a = i9b.songs;
                break;
            case 21:
                if (i9b.mp && i9b.mp.fee && i9b.mp.pl <= 0) {
                    l9c.beI5N(i9b.data.id, i9b.mp.fee);
                    return
                }
                break
        }
        if (l9c.Iv1x(j9a, true, null, t9k == 19 ? {source: "album", sourceid: cJ0x} : null) == 0) {
            return
        }
        l9c.fb1x({clazz: "m-layer-w2", bubble: !1, message: bc0x.message})
    }

    function crE1x(d9g, qG5L, wn8f, ez1x) {
        ez1x = ez1x || {};
        if (d9g.action == "ok") {
            if (wn8f) {
                location.dispatch2("/payfee?songId=" + wn8f)
            } else {
                location.dispatch2("/payfee?fee=" + qG5L || 1)
            }
            ww8o.gd2x("click", {
                type: "tobuyvip",
                name: "box",
                source: ez1x.source || "song",
                sourceid: ez1x.sourceid || wn8f || 0
            })
        } else if (d9g.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + wn8f);
            ww8o.gd2x("click", {
                type: "tobuyone",
                name: "box",
                source: ez1x.source || "song",
                sourceid: ez1x.sourceid || wn8f || 0
            })
        }
    }

    function OC3x(bF0x) {
        l9c.fb1x({clazz: "m-layer-w2", bubble: !1, message: bF0x, btntxt: "知道了"})
    }

    function OB3x(bF0x, P9G) {
        OC3x((P9G || X0x).toast || bF0x)
    }

    l9c.hZ2x = function (bF0x, C9t, t9k, crD1x, bf0x) {
        bF0x = bF0x || "由于版权保护，您所在的地区暂时无法使用。";
        if (crD1x && bf0x && bf0x.privilege && bf0x.privilege.toast) {
            v9m.br0x("/api/song/toast", {
                query: {id: bf0x.id},
                type: "json",
                onload: OB3x.g9d(this, bF0x),
                onerror: OB3x.g9d(this, bF0x)
            })
        } else if (C9t && t9k) {
            Q9H.OW3x(t9k, C9t, {conf: {message: bF0x, useCache: t9k != 18}})
        } else {
            OC3x(bF0x)
        }
    };
    l9c.sH5M = function (qG5L, wn8f, t9k, ez1x, mh3x) {
        var bN0x, pl4p = "m-popup-info", beL5Q = "单首购买", beP5U = "马上去开通", cA0x = "唱片公司要求，当前歌曲须付费使用。", bGE2x = true;
        try {
            bN0x = top.api.feeMessage || {}
        } catch (e) {
            bN0x = {}
        }
        if (qG5L == 1 || qG5L == 8 || qG5L == 16) {
            if (t9k == "song") {
                pl4p = "m-popup-song-buy";
                cA0x = bN0x["vip2"] || cA0x;
                beP5U = bN0x["vip2button"] || "包月购买";
                beL5Q = bN0x["vip2link"] || beL5Q;
                if (mh3x && mh3x.flag !== undefined) {
                    var bs0x = mh3x.flag.toString(2).split("");
                    if (parseInt(bs0x.pop(), 10) == 1) {
                        bGE2x = false
                    }
                }
            } else {
                cA0x = bN0x["vip"] || cA0x
            }
        } else if (qG5L == 4) {
            cA0x = bN0x["album"] || cA0x;
            beP5U = "立即订购"
        } else {
            cA0x = bN0x["unknow"] || cA0x
        }
        l9c.js3x({
            clazz: "m-layer-w5",
            html: a8i.bP0x(pl4p, {songTxt: beL5Q, tip: cA0x, oktext: beP5U, cctext: "以后再说", showSongText: bGE2x}),
            onaction: crE1x.dT1x(null, qG5L, wn8f, ez1x)
        })
    };
    l9c.bGM2x = function (hj2x, hc2x) {
        l9c.gQ2x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t9k) {
                if (t9k == "ok") {
                    l9c.Yc2x({id: hj2x, type: hc2x})
                }
            }
        })
    };
    l9c.beI5N = function (oc4g, qG5L) {
        var bN0x, cA0x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bN0x = top.api.feeMessage || {}
        } catch (e) {
            bN0x = {}
        }
        if (qG5L == 1 || qG5L == 8) {
            cA0x = bN0x["vip"] || cA0x
        } else if (qG5L == 4) {
            cA0x = bN0x["album"] || cA0x
        } else {
            cA0x = bN0x["unknow"] || cA0x
        }
        return l9c.js3x({
            clazz: "m-layer-w5",
            html: a8i.bP0x("m-popup-info", {tip: cA0x, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d9g) {
                if (d9g.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + oc4g);
                    ww8o.gd2x("click", {type: "tobuyone", name: "box", source: "mv", sourceid: oc4g || 0})
                }
            }
        })
    };
    l9c.Iv1x = function () {
        function compareFee(crB1x, crA1x) {
            var bv0x = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bv0x[crB1x] || 0) - (bv0x[crA1x] || 0)
        }

        return function (j9a, cA0x, tk6e, ez1x) {
            tk6e = tk6e || {};
            var xS8K = [], Ip1x = {}, bIm2x = 0, bIp2x = 0, Io1x = null;
            if (!j9a || !j9a.length) return xS8K;
            k9b.be0x(j9a, function (bf0x) {
                var eY1x = l9c.om4q(bf0x);
                if (eY1x == 0) {
                    xS8K.push(bf0x)
                } else if (eY1x == 10) {
                    if (bf0x.privilege) {
                        bf0x.fee = bf0x.privilege.fee
                    }
                    if (compareFee(bf0x.fee, Ip1x.fee) > 0) {
                        Ip1x = bf0x
                    }
                } else if (eY1x == 11) {
                    ++bIm2x;
                    if (!tk6e.play) xS8K.push(bf0x)
                } else if (eY1x == 1e3) {
                    ++bIp2x;
                    if (!tk6e.download) xS8K.push(bf0x)
                } else if (eY1x == 100) {
                    Io1x = bf0x
                }
            });
            if (xS8K.length == 0 && cA0x) {
                if (bIm2x == j9a.length) {
                    var sa5f = j9a[0].privilege || {};
                    if (sa5f.payed) {
                        l9c.hZ2x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l9c.sH5M(sa5f.fee, null, null, ez1x)
                    }
                } else if (bIp2x == j9a.length) {
                    l9c.hZ2x("因版权方要求，该歌曲不支持下载")
                } else if (Ip1x.id) {
                    l9c.sH5M(Ip1x.fee, Ip1x.id, null, ez1x, Ip1x.privilege)
                } else {
                    if (Io1x && j9a.length == 1 && Io1x.privilege && Io1x.privilege.st < 0 && Io1x.privilege.toast) {
                        l9c.hZ2x(null, null, null, true, Io1x)
                    } else {
                        l9c.hZ2x()
                    }
                }
            }
            return xS8K
        }
    }();
    l9c.om4q = function (bf0x) {
        if (!bf0x) return 0;
        var eY1x = bf0x.privilege;
        if (bf0x.program) return 0;
        if (window.GAbroad) return 100;
        if (eY1x) {
            if (eY1x.st != null && eY1x.st < 0) {
                return 100
            }
            if (eY1x.fee > 0 && eY1x.fee != 8 && eY1x.payed == 0 && eY1x.pl <= 0) return 10;
            if (eY1x.fee == 16) return 11;
            if ((eY1x.fee == 0 || eY1x.payed) && eY1x.pl > 0 && eY1x.dl == 0) return 1e3;
            if (eY1x.pl == 0 && eY1x.dl == 0) return 100;
            return 0
        } else {
            var dZ1x = bf0x.status != null ? bf0x.status : bf0x.st != null ? bf0x.st : 0;
            if (bf0x.status >= 0) return 0;
            if (bf0x.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), M9D = c9h("nej.ui"), b8h;
    if (!!M9D.UT1x) return;
    var hX2x = a8i.rX5c(".#<uispace>{position:absolute;background:#fff;}");
    M9D.UT1x = NEJ.C();
    b8h = M9D.UT1x.O9F(M9D.Qw4A);
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.bT0x([[document, "click", this.rY5d.g9d(this)]]);
        this.crx1x = !!e9f.nostop;
        this.bJr2x = {top: e9f.top, left: e9f.left}
    };
    b8h.bE0x = function () {
        delete this.xy8q;
        delete this.beR5W;
        delete this.pI4M;
        delete this.bJR2x;
        delete this.UR1x;
        delete this.bJr2x;
        this.bH0x()
    };
    b8h.bZ0x = function () {
        this.kT3x = hX2x
    };
    b8h.bR0x = function () {
        this.cb0x();
        this.Am9d = this.o9f;
        h9c.s9j(this.o9f, "click", this.crv1x.g9d(this))
    };
    b8h.rY5d = function (d9g) {
        if (d9g.button != 2) this.bq0x()
    };
    b8h.crv1x = function (d9g) {
        if (this.crx1x) return;
        h9c.sn5s(d9g);
        var E9v = h9c.U9L(d9g);
        if (E9v.tagName == "A") h9c.cf0x(d9g)
    };
    b8h.crt1x = function () {
        var cO0x = /\s+/i;
        return function (ni4m) {
            ni4m = (ni4m || "").trim().toLowerCase().split(cO0x);
            ni4m[0] = ni4m[0] || "bottom";
            ni4m[1] = ni4m[1] || "left";
            this.pI4M = ni4m
        }
    }();
    b8h.crs1x = function (ni4m) {
        var m9d = {}, mw3x = this.beR5W, cuj1x = a8i.oE4I(), dl1x = this.o9f.offsetWidth, cq0x = this.o9f.offsetHeight;
        switch (ni4m[0]) {
            case"top":
                m9d.top = mw3x.top - cq0x;
                m9d.left = ni4m[1] == "right" ? mw3x.left + mw3x.width - dl1x : mw3x.left;
                break;
            case"left":
                m9d.left = mw3x.left - dl1x;
                m9d.top = ni4m[1] == "bottom" ? mw3x.top + mw3x.height - cq0x : mw3x.top;
                break;
            case"right":
                m9d.left = mw3x.left + mw3x.width;
                m9d.top = ni4m[1] == "bottom" ? mw3x.top + mw3x.height - cq0x : mw3x.top;
                break;
            default:
                m9d.top = mw3x.top + mw3x.height;
                m9d.left = ni4m[1] == "right" ? mw3x.left + mw3x.width - dl1x : mw3x.left;
                break
        }
        return m9d
    };
    b8h.Jn2x = function () {
        if (!this.bJR2x) {
            this.fZ2x(this.bJr2x);
            return
        }
        if (!!this.UR1x) {
            this.fZ2x(this.xy8q);
            return
        }
        if (!!this.beR5W) this.fZ2x(this.crs1x(this.pI4M))
    };
    b8h.crq1x = function (E9v, df1x, d9g) {
        df1x = df1x || X0x;
        var bKK3x = a8i.oE4I(), cN0x = h9c.kJ3x(d9g) + (df1x.left || 0), gH2x = h9c.nH4L(d9g) + (df1x.top || 0),
            dl1x = E9v.offsetWidth + (df1x.right || 0), cq0x = E9v.offsetHeight + (df1x.bottom || 0),
            Im1x = bKK3x.scrollWidth, bfd5i = bKK3x.scrollHeight, bfe5j = cN0x + dl1x, bfi6c = gH2x + cq0x;
        switch (this.pI4M[0]) {
            case"top":
                gH2x = bfi6c > bfd5i ? gH2x - cq0x : gH2x;
                if (this.pI4M[1] == "right") {
                    cN0x = cN0x - dl1x < 0 ? 0 : cN0x - dl1x
                } else {
                    cN0x = bfe5j > Im1x ? Im1x - dl1x : cN0x
                }
                break;
            case"left":
                cN0x = bfe5j > Im1x ? Im1x - dl1x : cN0x;
                if (this.pI4M[1] == "top") {
                    gH2x = bfi6c > bfd5i ? gH2x - cq0x : gH2x
                } else {
                    gH2x = gH2x - cq0x < 0 ? gH2x : gH2x - cq0x
                }
                break;
            case"right":
                cN0x = cN0x - dl1x < 0 ? 0 : cN0x - dl1x;
                if (this.pI4M[1] == "top") {
                    gH2x = bfi6c > bfd5i ? gH2x - cq0x : gH2x
                } else {
                    gH2x = gH2x - cq0x < 0 ? gH2x : gH2x - cq0x
                }
                break;
            default:
                gH2x = gH2x - cq0x < 0 ? gH2x : gH2x - cq0x;
                if (this.pI4M[1] == "left") {
                    cN0x = bfe5j > Im1x ? Im1x - dl1x : cN0x
                } else {
                    cN0x = cN0x - dl1x < 0 ? 0 : cN0x - dl1x
                }
                break
        }
        return {top: gH2x, left: cN0x}
    };
    b8h.bfj6d = function () {
        var cro1x = function (E9v, df1x) {
            E9v = a8i.z9q(E9v);
            if (!E9v) return;
            df1x = df1x || X0x;
            var bj0x = a8i.hR2x(E9v);
            return {
                top: bj0x.y - (df1x.top || 0),
                left: bj0x.x - (df1x.left || 0),
                width: E9v.offsetWidth + (df1x.right || 0),
                height: E9v.offsetHeight + (df1x.bottom || 0)
            }
        };
        return function (e9f) {
            e9f = e9f || X0x;
            this.UR1x = e9f.event;
            this.crt1x(e9f.align);
            if (!!this.UR1x) this.xy8q = this.crq1x(e9f.target, e9f.delta, this.UR1x);
            this.beR5W = cro1x(e9f.target, e9f.delta);
            this.bJR2x = !!e9f.fitable;
            this.N9E();
            return this
        }
    }()
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), M9D = c9h("nej.ui"), b8h,
        K9B;
    if (!!M9D.zB9s) return;
    M9D.zB9s = NEJ.C();
    b8h = M9D.zB9s.O9F(M9D.Zp3x);
    K9B = M9D.zB9s.ch0x;
    M9D.zB9s.cuk1x = function () {
        var crl1x = function (d9g, C9t, fl1x, jq3x, Oi3x) {
            var co0x, J9A = C9t + "-i", Q9H = fl1x.wp8h, bLY3x = !!jq3x.noclear, bMb3x = !!jq3x.toggled;
            if (k9b.fY2x(jq3x.onbeforeclick)) {
                var UE1x = jq3x.noclear, crj0x = jq3x.toggled;
                try {
                    jq3x.onbeforeclick(jq3x)
                } catch (e) {
                }
                bLY3x = !!jq3x.noclear;
                bMb3x = !!jq3x.toggled;
                jq3x.toggled = crj0x;
                jq3x.noclear = UE1x
            }
            var Dl0x = Q9H[J9A];
            if (bMb3x && !!Dl0x) {
                Dl0x.bq0x();
                return
            }
            h9c.bh0x(d9g);
            if (!bLY3x) {
                h9c.x9o(document, "click");
                co0x = fl1x.B9s(jq3x)
            } else {
                co0x = fl1x.ccK8C(jq3x, !0)
            }
            Q9H[J9A] = co0x;
            co0x.vk7d("onbeforerecycle", function () {
                delete Q9H[J9A]
            });
            co0x.bfj6d(Oi3x)
        };
        return function (f9e, e9f) {
            f9e = a8i.z9q(f9e);
            if (!f9e) return this;
            if (!this.wp8h) this.wp8h = {};
            var C9t = a8i.kH3x(f9e);
            if (!!this.wp8h[C9t]) return this;
            e9f = NEJ.X({}, e9f);
            var Oi3x = NEJ.EX({align: "", delta: null, fitable: !1}, e9f);
            Oi3x.target = C9t;
            e9f.destroyable = !0;
            if (!e9f.fixed) {
                Oi3x.fitable = !0;
                e9f.parent = document.body
            }
            this.wp8h[C9t] = [C9t, e9f.event || "click", crl1x.dT1x(null, C9t, this, e9f, Oi3x)];
            h9c.s9j.apply(h9c, this.wp8h[C9t]);
            return this
        }
    }();
    M9D.zB9s.cul1x = function (f9e) {
        if (!this.wp8h) return this;
        var C9t = a8i.kH3x(f9e), d9g = this.wp8h[C9t];
        if (!d9g) return this;
        delete this.wp8h[C9t];
        h9c.mB4F.apply(h9c, d9g);
        var co0x = this.wp8h[C9t + "-i"];
        if (!!co0x) co0x.bq0x();
        return this
    };
    b8h.bbf4j = function () {
        return M9D.UT1x.B9s(this.bS0x)
    };
    b8h.QS4W = function () {
        K9B.QS4W.apply(this, arguments);
        this.bS0x.top = null;
        this.bS0x.left = null;
        this.bS0x.nostop = !1
    };
    b8h.bfj6d = function (e9f) {
        if (!!this.nY4c) this.nY4c.bfj6d(e9f);
        return this
    }
})();
(function () {
    var c9h = NEJ.P, bd0x = c9h("nej.ui"), n9e = c9h("nm.l"), b8h, K9B;
    n9e.bfn6h = NEJ.C();
    b8h = n9e.bfn6h.O9F(bd0x.zB9s);
    b8h.bk0x = function (e9f) {
        e9f.nohack = true;
        this.bl0x(e9f)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), n9e = c9h("nm.l"), b8h, K9B;
    n9e.Z0x = NEJ.C();
    b8h = n9e.Z0x.O9F(n9e.bfn6h);
    K9B = n9e.Z0x.ch0x;
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.el1x = e9f.type || 1
    };
    b8h.bR0x = function () {
        this.cb0x();
        this.o9f = a8i.mG4K(this.crg0x());
        var j9a = a8i.cQ0x(this.o9f);
        this.pk4o = j9a[0];
        this.ci0x = j9a[1]
    };
    b8h.crg0x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b8h.Jn2x = function () {
        var A9r = {}, cd0x = this.o9f.style, iI2x = a8i.oE4I(), nd4h = {left: iI2x.scrollLeft, top: iI2x.scrollTop},
            df1x = {left: iI2x.clientWidth - this.o9f.offsetWidth, top: iI2x.clientHeight - this.o9f.offsetHeight};
        A9r.top = Math.max(0, nd4h.top + df1x.top / 2);
        A9r.left = Math.max(0, nd4h.left + df1x.left / 2);
        this.nY4c.fZ2x(A9r)
    };
    b8h.N9E = function (e9f) {
        K9B.N9E.call(this);
        this.Jn2x();
        this.el1x == 1 ? a8i.ev1x(this.pk4o, "u-icn-32", "u-icn-31") : a8i.ev1x(this.pk4o, "u-icn-31", "u-icn-32");
        this.ci0x.innerHTML = e9f.tip || ""
    };
    window.g_showTipCard = n9e.Z0x.N9E = function () {
        var eU1x;
        return function (e9f) {
            clearTimeout(eU1x);
            if (e9f.parent === undefined) e9f.parent = document.body;
            if (e9f.autoclose === undefined) e9f.autoclose = true;
            e9f.clazz = "m-sysmsg";
            !!this.eM1x && this.eM1x.S9J();
            this.eM1x = this.B9s(e9f);
            this.eM1x.N9E(e9f);
            if (e9f.autoclose) eU1x = setTimeout(this.bq0x.g9d(this), 2e3)
        }.g9d(n9e.Z0x)
    }();
    n9e.Z0x.bq0x = function () {
        !!this.eM1x && this.eM1x.bq0x()
    }
})();
(function () {
    var c9h = NEJ.P, v9m = c9h("nej.j"), k9b = c9h("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v9m.br0x = v9m.br0x.ed1x(function (d9g) {
            e9f = d9g.args[1];
            e9f.query = e9f.query || {};
            if (k9b.fg1x(e9f.query)) e9f.query = k9b.hq2x(e9f.query);
            e9f.query.ref = "mail"
        })
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, fc1x = NEJ.R, H9y = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), p9g = c9h("nm.d"), n9e = c9h("nm.l"), J9A = "playlist-tracks_", b8h;
    p9g.eP1x({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (P9G, e9f) {
                this.crf0x(P9G.playlist);
                return {total: 0, list: fc1x}
            }, onerror: function () {
                this.x9o("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (P9G, e9f) {
                var iS2x = P9G.playlist;
                iS2x.creator = GUser;
                iS2x.isHost = !0;
                iS2x.typeFlag = "playlist";
                return iS2x
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.hn2x, "listchange", d9g)
            }, onmessage: function () {
                var lr3x = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cc0x) {
                    n9e.Z0x.N9E({tip: lr3x[cc0x] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e9f) {
                e9f.id = e9f.data.pid
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.hn2x, "listchange", d9g)
            }, onmessage: function () {
                var lr3x = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cc0x) {
                    n9e.Z0x.N9E({tip: lr3x[cc0x] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e9f) {
                var ez1x = e9f.ext || {};
                e9f.ext = NEJ.X(ez1x, e9f.data);
                e9f.data = {id: e9f.ext.id}
            }, format: function (P9G, e9f) {
                n9e.Z0x.N9E({tip: "收藏成功" + (P9G.point > 0 ? ' 获得<em class="s-fc6">' + P9G.point + "积分</em>" : "")});
                var q9h = e9f.ext;
                q9h.subscribedCount++;
                return q9h
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.cre0x, "listchange", d9g);
                h9c.x9o(p9g.cre0x, "itemchange", {attr: "subscribedCount", data: d9g.data})
            }, onmessage: function () {
                var lr3x = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (cc0x) {
                    n9e.Z0x.N9E({type: 2, tip: lr3x[cc0x] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e9f) {
                e9f.id = e9f.data.id = e9f.data.pid
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.hn2x, "listchange", d9g)
            }, onmessage: function () {
                var lr3x = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cc0x) {
                    n9e.Z0x.N9E({tip: lr3x[cc0x], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e9f) {
                var i9b = e9f.data, Uv1x = {};
                Uv1x["playlist-update-name"] = {id: i9b.id, name: i9b.name};
                Uv1x["playlist-update-tag"] = {id: i9b.id, tags: i9b.tags.join(";")};
                Uv1x["playlist-update-desc"] = {id: i9b.id, desc: i9b.description};
                e9f.data = Uv1x;
                e9f.ext = i9b
            },
            format: function (T9K, pa4e, Oc3x, e9f) {
                if (T9K.code == 200 && pa4e.code == 200 && Oc3x.code == 200) {
                    e9f.ext.allSuccess = true;
                    n9e.Z0x.N9E({tip: "保存成功"})
                } else if (T9K.code == 407 || pa4e.code == 407 || Oc3x.code == 407) {
                    e9f.ext.allSuccess = false;
                    n9e.Z0x.N9E({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e9f.ext.allSuccess = false;
                    n9e.Z0x.N9E({type: 2, tip: "保存失败"})
                }
                return this.eg1x(e9f.ext.id)
            },
            finaly: function (d9g, e9f) {
                h9c.x9o(p9g.hn2x, "listchange", d9g)
            },
            onmessage: function (cc0x) {
                n9e.Z0x.N9E({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (P9G, e9f) {
                var q9h = this.eg1x(e9f.ext.id);
                if (P9G.code == 200) q9h.name = e9f.ext.name;
                return P9G
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (P9G, e9f) {
                var q9h = this.eg1x(e9f.ext.id);
                if (P9G.code == 200) q9h.tags = e9f.ext.tags;
                return P9G
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (P9G, e9f) {
                var q9h = this.eg1x(e9f.ext.id);
                if (P9G.code == 200) q9h.description = e9f.ext.description;
                return P9G
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e9f) {
                e9f.url = e9f.data.url;
                delete e9f.data.url
            }, format: function (P9G, e9f) {
                n9e.Z0x.N9E({tip: "保存成功"});
                var q9h = this.eg1x(e9f.data.id);
                q9h.coverImgUrl = e9f.url;
                e9f.ext = q9h;
                return q9h
            }, onmessage: function (cc0x) {
                n9e.Z0x.N9E({type: 2, tip: "保存失败"})
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.hn2x, "itemchange", {attr: "coverImgUrl", data: e9f.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (P9G, e9f) {
                var iS2x = this.eg1x(e9f.data.id);
                if (!iS2x) return;
                iS2x.playCount++;
                h9c.x9o(p9g.hn2x, "itemchange", {attr: "playcount", data: iS2x})
            }
        }
    });
    p9g.hn2x = NEJ.C();
    b8h = p9g.hn2x.O9F(p9g.gW2x);
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.brP8H = function () {
        var cW1x = GUser.userId;
        this.ns4w({limit: 1001, key: "playlist_my-" + cW1x, data: {offset: 0, limit: 1001, uid: cW1x}})
    };
    b8h.crf0x = function (j9a) {
        var cW1x = GUser.userId, iZ2x = [], brU8M = [];
        k9b.be0x(j9a, function (q9h) {
            q9h.typeFlag = "playlist";
            if (q9h.creator && q9h.creator.userId == cW1x) {
                if (q9h.specialType == 5) q9h.name = "我喜欢的音乐";
                q9h.isHost = !0;
                iZ2x.push(q9h)
            } else {
                brU8M.push(q9h)
            }
        });
        this.so5t("playlist_new-" + cW1x, iZ2x);
        this.so5t("playlist_fav-" + cW1x, brU8M)
    };
    b8h.crd0x = function (i9b) {
        this.ck0x("playlist-update-cover", {data: i9b})
    };
    b8h.cum1x = function () {
        var Ob3x = this.cra0x.z9q("host-plist");
        if (Ob3x.length == 0) {
            return
        }
        if (Ob3x.length == 1 && Ob3x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Ob3x.length; i < len; i++) {
            var q9h = Ob3x[i];
            if (q9h.trackCount > 0) return q9h.id
        }
        return this.cra0x.z9q("host-plist")[0].id
    };
    b8h.cqZ0x = function (C9t) {
        if (GUser && GUser.userId > 0) {
            this.ck0x("playlist-upcount", {data: {id: C9t}})
        }
    };
    b8h.Bi9Z = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b8h.cuo1x = function () {
        return GUser.userId
    };
    b8h.bfA6u = function (q9h) {
        if (q9h.userId == GUser.userId && q9h.specialType == 5) q9h.name = "我喜欢的音乐";
        h9c.x9o(this.constructor, "itemchange", {data: this.yT9K(q9h)});
        return q9h
    };
    H9y.fv1x.B9s({element: p9g.hn2x, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c9h = NEJ.P, fc1x = NEJ.R, bn0x = NEJ.F, X0x = NEJ.O, H9y = c9h("nej.ut"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), l9c = c9h("nm.x"), p9g = c9h("nm.d"), n9e = c9h("nm.l"), b8h, K9B;
    p9g.eP1x({
        "program-get": {
            url: "/api/dj/program/detail", format: function (P9G) {
                return P9G.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e9f) {
                e9f.data.limit = 1e3;
                delete e9f.data.id
            }, format: function (P9G, e9f) {
                var bsE8w = [], zQ9H = P9G.programs;
                if (zQ9H) {
                    for (var i = 0, l = zQ9H.length; i < l; i++) {
                        if (zQ9H[i].programFeeType < 10 || zQ9H[i].buyed) {
                            bsE8w.push(zQ9H[i])
                        }
                    }
                }
                return bsE8w
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (P9G, e9f) {
                return P9G.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e9f) {
                e9f.ext = e9f.data;
                e9f.data = {id: e9f.ext.id};
                e9f.id = e9f.data.id
            }, format: function (P9G, e9f) {
                n9e.Z0x.N9E({tip: "收藏成功"});
                var q9h = e9f.ext;
                q9h.subscribedCount++;
                q9h.subscribed = !0;
                return q9h
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.oZ4d, "listchange", d9g)
            }, onmessage: function () {
                var lr3x = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (cc0x) {
                    n9e.Z0x.N9E({type: 2, tip: lr3x[cc0x] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d9g, e9f) {
                h9c.x9o(p9g.oZ4d, "listchange", d9g)
            }, onmessage: function () {
                var lr3x = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (cc0x) {
                    l9c.bfB6v({txt: lr3x[cc0x] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e9f) {
                var q9h = this.eg1x(e9f.data.id) || X0x;
                e9f.ext = (q9h.listenerCount || 0) + 1
            }, format: function (P9G, e9f) {
                var q9h = this.eg1x(e9f.data.id);
                if (!!q9h) {
                    q9h.listenerCount = Math.max(e9f.ext, q9h.listenerCount || 0)
                }
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.oZ4d, "itemchange", {attr: "playCount", data: this.eg1x(e9f.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e9f) {
                e9f.data = {threadId: "A_DJ_1_" + e9f.id}
            }, format: function (P9G, e9f) {
                var q9h = e9f.ext.data || this.eg1x(e9f.id);
                q9h.liked = true;
                q9h.likedCount++;
                e9f.ext.data = q9h;
                try {
                    top.player.setLike(q9h)
                } catch (e) {
                }
                return q9h
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.oZ4d, "itemchange", {attr: "likedCount", data: e9f.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e9f) {
                e9f.data = {threadId: "A_DJ_1_" + e9f.id}
            }, format: function (P9G, e9f) {
                var q9h = e9f.ext.data || this.eg1x(e9f.id);
                q9h.liked = false;
                q9h.likedCount--;
                e9f.ext.data = q9h;
                try {
                    top.player.setLike(q9h)
                } catch (e) {
                }
                return q9h
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.oZ4d, "itemchange", {attr: "likedCount", data: e9f.ext.data})
            }
        }
    });
    p9g.oZ4d = NEJ.C();
    b8h = p9g.oZ4d.O9F(p9g.gW2x);
    b8h.cup1x = function () {
        var cW1x = GUser.userId;
        this.ns4w({limit: 1001, key: "program_fav-" + cW1x, data: {offset: 0, limit: 1e3, uid: cW1x}})
    };
    b8h.cuq1x = function (cR0x) {
        var oi4m = cR0x[this.uk7d];
        l9c.cqU0x(4, function (Q9H) {
            Q9H.so5t("track_program-" + oi4m, cR0x.songs)
        });
        delete cR0x.songs;
        var bK0x = cR0x.mainSong;
        l9c.cqU0x(4, function (Q9H) {
            Q9H.so5t("track_program_main-" + oi4m, !bK0x ? [] : [bK0x])
        });
        cR0x.mainSong = (bK0x || X0x).id
    };
    b8h.cur1x = function (C9t) {
        var cR0x = this.eg1x(C9t), cW1x = localCache.Xs2x("host.profile.userId");
        return !!cR0x && cR0x.dj.userId == cW1x
    };
    b8h.cus1x = function (C9t) {
        return !1
    };
    b8h.bfA6u = function (q9h) {
        h9c.x9o(this.constructor, "itemchange", {attr: "detail", data: this.yT9K(q9h)});
        return q9h
    };
    b8h.cqZ0x = function (C9t) {
        this.ck0x("program-update-count", {data: {id: C9t}})
    };
    l9c.buw9n = function (e9f) {
        var Q9H = p9g.oZ4d.B9s({
            onitemadd: function () {
                (e9f.onsuccess || bn0x)()
            }, onerror: function () {
                (e9f.onerror || bn0x)()
            }
        });
        if (e9f.data.liked) {
            Q9H.NX3x(e9f.data)
        } else {
            Q9H.uT7M(e9f.data)
        }
    };
    b8h.uT7M = function (cR0x) {
        if (!l9c.gY2x()) return;
        var cm0x = {ext: {}};
        if (k9b.kI3x(cR0x)) {
            cm0x.id = cR0x.id;
            cm0x.ext.data = cR0x
        } else {
            cm0x.id = cR0x
        }
        this.ck0x("program-like", cm0x)
    };
    b8h.NX3x = function (cR0x) {
        if (!l9c.gY2x()) return;
        var cm0x = {ext: {}};
        if (k9b.kI3x(cR0x)) {
            cm0x.id = cR0x.id;
            cm0x.ext.data = cR0x
        } else {
            cm0x.id = cR0x
        }
        this.ck0x("program-unlike", cm0x)
    };
    H9y.fv1x.B9s({element: p9g.oZ4d, event: ["listchange", "itemchange"]})
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, fc1x = NEJ.R, H9y = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), p9g = c9h("nm.d"), n9e = c9h("nm.l"), l9c = c9h("nm.x"), J9A = "playlist-tracks_",
        l9c = c9h("nm.x"), b8h;
    p9g.eP1x({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e9f) {
                e9f.data.c = JSON.stringify([{id: e9f.data.id}])
            }, format: function (P9G, e9f) {
                var bf0x = l9c.Bx9o(P9G.songs[0]);
                bf0x.privilege = P9G.privileges[0];
                return bf0x
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e9f) {
                e9f.data.n = 1e3
            }, format: function (P9G, e9f) {
                var gJ2x = [];
                this.rH5M.bfA6u(P9G.playlist);
                k9b.be0x(P9G.playlist.tracks, function (bK0x, r9i) {
                    var buW9N = l9c.Bx9o(bK0x);
                    buW9N.privilege = P9G.privileges[r9i];
                    gJ2x.push(buW9N)
                }, this);
                return gJ2x
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (P9G, e9f) {
                var gJ2x = [];
                k9b.be0x(P9G.songs, function (bf0x) {
                    gJ2x.push(l9c.Bx9o(bf0x))
                });
                return gJ2x
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e9f) {
                var bv0x = {}, i9b = e9f.data, cqR0x = this.gU2x(e9f.key) || [];
                BF9w = [];
                k9b.be0x(cqR0x, function (bK0x) {
                    var C9t = k9b.kI3x(bK0x) ? bK0x.id : bK0x;
                    bv0x[C9t] = true
                });
                e9f.ext = [];
                k9b.be0x(i9b.tracks, function (bK0x) {
                    var C9t = k9b.kI3x(bK0x) ? bK0x.id : bK0x;
                    if (!bv0x[C9t]) {
                        BF9w.push(C9t);
                        bv0x[C9t] = true;
                        e9f.ext.push(bK0x)
                    }
                });
                i9b.trackIds = JSON.stringify(BF9w);
                i9b.op = "add";
                if (!BF9w.length) {
                    e9f.value = {code: 502}
                }
            }, format: function (P9G, e9f) {
                n9e.Z0x.N9E({tip: "已添加至歌单"});
                var iS2x = this.rH5M.eg1x(e9f.data.pid);
                if (!!P9G.coverImgUrl) iS2x.coverImgUrl = P9G.coverImgUrl;
                k9b.mq3x(e9f.ext, function (bK0x) {
                    this.xM8E(e9f, k9b.kI3x(bK0x) ? bK0x : null);
                    if (!!iS2x) iS2x.trackCount++
                }, this);
                h9c.x9o(p9g.hn2x, "itemchange", {data: iS2x || {}, cmd: "add"});
                this.x9o("onaddsuccess");
                return null
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.uU7N, "listchange", {key: e9f.key, action: "refresh"});
                var oi4m = e9f.data.pid, cp0x = this.jA3x(e9f.key)
            }, onmessage: function () {
                var lr3x = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (cc0x) {
                    setTimeout(function () {
                        n9e.Z0x.N9E({tip: lr3x[cc0x] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e9f) {
                var i9b = e9f.data;
                e9f.ext = i9b.trackIds;
                i9b.trackIds = JSON.stringify(i9b.trackIds);
                i9b.op = "del"
            }, format: function (P9G, e9f) {
                var iS2x = this.rH5M.eg1x(e9f.data.pid);
                k9b.be0x(e9f.ext, function (C9t) {
                    this.bdw5B({id: C9t, key: "track_playlist-" + e9f.data.pid}, !0);
                    if (!!iS2x) iS2x.trackCount = Math.max(0, iS2x.trackCount - 1)
                }, this);
                h9c.x9o(p9g.hn2x, "itemchange", {data: iS2x || {}, cmd: "del"});
                return null
            }, finaly: function (d9g, e9f) {
                h9c.x9o(p9g.uU7N, "listchange", {key: e9f.key, action: "refresh"})
            }, onmessage: function (cc0x) {
                l9c.bfB6v({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (P9G, e9f) {
                return this.bvC9t.bfA6u(P9G.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (P9G, e9f) {
                var j9a = [];
                if (e9f.data.type == -1) {
                    if (P9G.weekData && P9G.weekData.length) {
                        e9f.data.type = 1
                    } else {
                        e9f.data.type = 0
                    }
                }
                if (e9f.data.type == 1) {
                    j9a = this.bvD9u(P9G.weekData)
                } else {
                    j9a = this.bvD9u(P9G.allData)
                }
                return j9a
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (P9G, e9f) {
                var mY4c = [], j9a = P9G.recommend || [];
                k9b.be0x(j9a, function (bf0x, r9i) {
                    mY4c.push({
                        action: "recommendimpress",
                        json: {alg: bf0x.alg, scene: "user-song", position: r9i, id: bf0x.id}
                    })
                });
                this.kF3x.VK2x(mY4c);
                e9f.limit = j9a.length;
                return j9a
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
    p9g.uU7N = NEJ.C();
    b8h = p9g.uU7N.O9F(p9g.gW2x);
    b8h.cl0x = function () {
        this.cr0x();
        this.rH5M = p9g.hn2x.B9s();
        this.bvC9t = p9g.oZ4d.B9s();
        this.kF3x = p9g.hQ2x.B9s()
    };
    b8h.bvD9u = function (j9a) {
        var m9d = [], fd1x = 0;
        k9b.be0x(j9a, function (q9h, r9i) {
            var bf0x = l9c.Bx9o(q9h.song);
            if (r9i == 0) {
                fd1x = q9h.score
            }
            bf0x.max = fd1x;
            bf0x.playCount = q9h.playCount;
            bf0x.score = q9h.score;
            m9d.push(bf0x)
        });
        return m9d
    };
    H9y.fv1x.B9s({element: p9g.uU7N, event: ["listchange"]})
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
    var bvL9C;
    var tO7H = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cqQ0x = 0;
    var bwa9R = 0;
    var bwd9U = 1;
    var bwj9a = 0;
    var bfD6x = "";
    var bwo9f = "";
    var bwu9l = "";
    var Uk1x = "";
    var Uf1x = "";
    var bfI6C = "";
    var bwL9C = 0;
    var bwO9F = "";
    var Ib1x = "";
    var BT0x = 0;
    var bfM6G = ntes_get_domain();
    var bfN6H = null;
    var cuu1x = "//analytics.163.com";
    var cqO0x = function () {
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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfM6G
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfM6G
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfM6G
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

    var cqL0x = 0;
    var NH3x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * NH3x))
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
        var a = (1 << NH3x) - 1;
        for (var b = 0; b < d.length * NH3x; b += NH3x) {
            c[b >> 5] |= (d.charCodeAt(b / NH3x) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cqL0x ? "0123456789ABCDEF" : "0123456789abcdef";
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
        Uk1x = "-";
        bfI6C = "-";
        Uf1x = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            Uk1x = b.width + "x" + b.height;
            bfI6C = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Uk1x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Uf1x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Uf1x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bwL9C = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cuv1x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cqO0x;
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
        var e = k || bvL9C;
        bfD6x = escape(a || document.location);
        bwo9f = escape(m || document.title);
        bwu9l = l === true ? "" : escape(l || document.referrer);
        bwO9F = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfN6H == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfN6H = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bfD6x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfN6H) {
                tO7H = fetch_visitor_hash();
                bwa9R = 1;
                ntes_set_cookie_long("_ntes_nnid", tO7H + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tO7H)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            tO7H = h.substr(0, o);
            BT0x = h.substr(o + 1, p - o - 1);
            if (BT0x == 0) {
                BT0x = (new Date).getTime();
                f = true
            }
            if (!tO7H) {
                tO7H = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tO7H + "," + BT0x);
                ntes_set_cookie_long("_ntes_nuid", tO7H)
            }
            if (BT0x != 0 && b - BT0x > 365 * 86400 * 1e3) {
                BT0x = 0;
                ntes_set_cookie_long("_ntes_nnid", tO7H + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tO7H)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        Ib1x = c("P_INFO", "P_OINFO");
        Ib1x = Ib1x ? Ib1x.substr(0, Ib1x.indexOf("|")) : "";
        bwj9a = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tO7H, "&_nvtm=", cqQ0x, "&_nvsf=", bwd9U, "&_nvfi=", bwa9R, "&_nlag=", Uf1x, "&_nlmf=", bwL9C, "&_nres=", Uk1x, "&_nscd=", bfI6C, "&_nstm=", bwj9a, "&_nurl=", bfD6x, "&_ntit=", bwo9f, "&_nref=", bwu9l, "&_nfla=", bwO9F, "&_nssn=", Ib1x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bwd9U = 0;
        neteaseTracker.callback = null
    }

    bvL9C = "iad";
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
            this.i9b = new r.init;
            this.bxM0x = 0
        }, TO1x: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.i9b.concat(a);
            this.bxM0x += a.sigBytes
        }, Ad9U: function (a) {
            var c = this.i9b, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bxE0x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bxP0x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.i9b = this.i9b.clone();
            return a
        }, bxE0x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.bfW6Q()
        }, update: function (a) {
            this.TO1x(a);
            this.Ad9U();
            return this
        }, finalize: function (a) {
            a && this.TO1x(a);
            return this.TC4G()
        }, blockSize: 16, bfT6N: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, cqJ0x: function (a) {
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
            var l = d.words, p = d.sigBytes, t = this.bv0x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bv0x, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bv0x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
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
        bfW6Q: function () {
            this.dG1x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bxP0x: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dG1x.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
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
        }, TC4G: function () {
            var b = this.i9b, n = b.words, a = 8 * this.bxM0x, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Ad9U();
            b = this.dG1x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dG1x = this.dG1x.clone();
            return b
        }
    });
    t.MD5 = v.bfT6N(r);
    t.HmacMD5 = v.cqJ0x(r)
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
                return this.create(this.bgb6V, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.cqI0x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.byk0x = e;
                this.J9A = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.bfW6Q()
            }, process: function (e) {
                this.TO1x(e);
                return this.Ad9U()
            }, finalize: function (e) {
                e && this.TO1x(e);
                return this.TC4G()
            }, keySize: 4, ivSize: 4, bgb6V: 1, cqI0x: 2, bfT6N: function (e) {
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
        TC4G: function () {
            return this.Ad9U(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.byl0x;
        c ? this.byl0x = u : c = this.bym0x;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.byn0x = e;
            this.byl0x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.byn0x, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bym0x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.byn0x, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bym0x = d
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
            if (this.byk0x == this.bgb6V) var c = a.createEncryptor; else c = a.createDecryptor, this.bxE0x = 1;
            this.eE1x = c.call(a, this, b && b.words)
        }, bxP0x: function (a, b) {
            this.eE1x.processBlock(a, b)
        }, TC4G: function () {
            var a = this.cfg.padding;
            if (this.byk0x == this.bgb6V) {
                a.pad(this.i9b, this.blockSize);
                var b = this.Ad9U(!0)
            } else b = this.Ad9U(!0), a.unpad(b);
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
            b = this.Yu2x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, Yu2x: function (a, b) {
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
            c = this.Yu2x(c, l.format);
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
        bfW6Q: function () {
            for (var a = this.J9A, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cqG0x = d + 6) + 1), e = this.cqE0x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cqw0x = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.byr0x(a, b, this.cqE0x, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.byr0x(a, c, this.cqw0x, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, byr0x: function (a, b, c, d, e, j, l, f) {
            for (var m = this.cqG0x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
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
    u.AES = p.bfT6N(d)
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
        var c = CryptoJS.enc.Utf8.parse(b);
        var d = CryptoJS.enc.Utf8.parse("0102030405060708");
        var e = CryptoJS.enc.Utf8.parse(a);
        var f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        //liguoqinjim 标记
        var liguoqinjim = 1;

        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c9h = NEJ.P, dP1x = c9h("nej.g"), v9m = c9h("nej.j"), k9b = c9h("nej.u"), Nt3x = c9h("nm.x.ek");
    Nt3x.emj = {
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
    Nt3x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c9h = NEJ.P, dP1x = c9h("nej.g"), v9m = c9h("nej.j"), k9b = c9h("nej.u"), Nt3x = c9h("nm.x.ek"),
        l9c = c9h("nm.x");
    if (v9m.br0x.redefine) return;
    window.GEnc = true;
    var bgh6b = function (cqv0x) {
        var m9d = [];
        k9b.be0x(cqv0x, function (cqu0x) {
            m9d.push(Nt3x.emj[cqu0x])
        });
        return m9d.join("")
    };
    var cqr0x = v9m.br0x;
    v9m.br0x = function (V9M, e9f) {
        var i9b = {}, e9f = NEJ.X({}, e9f), lo3x = V9M.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V9M) && !(e9f.headers && e9f.headers[dP1x.wF8x] == dP1x.By9p) && !e9f.noEnc) {
            if (lo3x != -1) {
                i9b = k9b.hq2x(V9M.substring(lo3x + 1));
                V9M = V9M.substring(0, lo3x)
            }
            if (e9f.query) {
                i9b = NEJ.X(i9b, k9b.fg1x(e9f.query) ? k9b.hq2x(e9f.query) : e9f.query)
            }
            if (e9f.data) {
                i9b = NEJ.X(i9b, k9b.fg1x(e9f.data) ? k9b.hq2x(e9f.data) : e9f.data)
            }
            i9b["csrf_token"] = v9m.gN2x("__csrf");
            V9M = V9M.replace("api", "weapi");
            e9f.method = "post";
            delete e9f.query;
            var byE0x = window.asrsea(JSON.stringify(i9b), bgh6b(["流泪", "强"]), bgh6b(Nt3x.md), bgh6b(["爱心", "女孩", "惊恐", "大笑"]));
            e9f.data = k9b.dd1x({params: byE0x.encText, encSecKey: byE0x.encSecKey})
        }
        cqr0x(V9M, e9f)
    };
    v9m.br0x.redefine = true
})();
(function () {
    window.setTimeout(function () {
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
(function () {
})();
(function () {
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), cP0x = c9h("nej.p"), k9b = c9h("nej.u"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), di1x = c9h("nm.u"), l9c = c9h("nm.x"), p9g = c9h("nm.d"), n9e = c9h("nm.l"),
        bgm6g = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", i9b = {
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
        }, cqq0x = function () {
            if (h9c && h9c.x9o) {
                h9c.dispatchEventalias = h9c.x9o
            }
        };
    cqq0x();
    l9c.bgo6i = function (bK0x) {
        if (!bK0x || bK0x.copyrightId === undefined || !!bK0x.program) return false;
        if (window.GAbroad) {
            bK0x.fee = 0;
            return true
        }
        if (bK0x.status < 0) return true;
        var No3x;
        if (typeof GCopyrights !== "undefined") No3x = GCopyrights;
        try {
            if (!No3x && !!top.GCopyrights) No3x = top.GCopyrights
        } catch (e) {
        }
        if (No3x) {
            var r9i = k9b.cU0x(No3x, bK0x.copyrightId);
            if (r9i >= 0) return true
        }
        return false
    };
    l9c.bgp6j = function () {
        var Ao9f = /^\/m\/(song|album|artist|playlist|dj|search)\?/, vy7r = {
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
        }, cqp0x = {
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
        var cqm0x = function (J9A, i9b, Nh3x) {
            switch (J9A) {
                case"event":
                    i9b = i9b.split("|");
                    return "/event?id=" + i9b[0] + "&uid=" + i9b[1];
                case"searchsong":
                case"searchlyric":
                    var t9k = J9A == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(i9b) + "&type=" + t9k;
                case"toplist":
                    return "/discover/toplist?id=" + i9b + "&_hash=songlist-" + Nh3x;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Nh3x;
                    ;
                case"record":
                    i9b = i9b.split("|");
                    return "/user/songs/rank?id=" + i9b[0] + "&cat=" + i9b[1];
                    break;
                default:
                    return "/" + J9A + "?id=" + i9b + "&_hash=songlist-" + Nh3x
            }
        };
        return function (dH1x, Nh3x) {
            if (!dH1x) return null;
            var Iw1x = dH1x.fid || (dH1x.type != 18 ? dH1x.type : null), bgz6t = dH1x.fdata || dH1x.rid,
                bzI0x = dH1x.page || dH1x.fhref;
            var J9A = vy7r[Iw1x];
            if (!J9A) {
                var wv8n = (bzI0x || "").match(Ao9f);
                if (wv8n) J9A = wv8n[1]
            }
            if (!J9A) return null;
            return {title: cqp0x[J9A], link: !vy7r[Iw1x] ? bzI0x : cqm0x(J9A, bgz6t, Nh3x), fid: Iw1x, fdata: bgz6t}
        }
    }();
    l9c.SW4a = function (kw3x) {
        var dj1x = kw3x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dj1x = GUser;
        return dj1x
    };
    l9c.gY2x = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l9c.HL1x = function () {
        var Ao9f = /#(.*?)$/;
        return function (gl2x) {
            var iQ2x = gl2x === false ? location : top.location;
            return Ao9f.test(iQ2x.href) ? RegExp.$1 : ""
        }
    }();
    l9c.Ay9p = function () {
        var AB9s = a8i.cT0x("audio"), cqk0x = AB9s.canPlayType && AB9s.canPlayType("audio/mpeg");
        if (cqk0x) return 2;
        var cqj0x = l9c.bgD6x().supported;
        if (cqj0x) return 1;
        return 0
    };
    l9c.bgD6x = function () {
        var gf2x, bgE6y = !1, bgF6z = "";
        if (cP0x.cS0x.browser == "ie") {
            try {
                gf2x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gf2x = null
            }
            if (gf2x) {
                bgE6y = !0;
                bgF6z = gf2x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gf2x = navigator.plugins["Shockwave Flash"];
                if (gf2x) {
                    bgE6y = !0;
                    bgF6z = gf2x.description
                }
            }
        }
        return {supported: bgE6y, version: bgF6z}
    };
    l9c.qP5U = function () {
        return "网易云音乐"
    };
    l9c.cqc0x = function () {
        return i9b
    };
    l9c.bAU0x = function (cL0x) {
        var C9t = i9b[cL0x];
        return C9t == null ? "" : bgm6g.replace("{ID}", C9t)
    };
    l9c.tE6y = function (bi0x, dD1x, HE1x) {
        if (!bi0x) return "";
        if (!!HE1x) {
            bi0x = l9c.cqb0x(bi0x)
        }
        return l9c.SA4E(l9c.cqa0x(bi0x, dD1x))
    };
    l9c.bgK6E = function () {
        var MI3x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bgM6G = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cpU0x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, cpT0x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cpK0x = function (dp1x, bgO6I) {
            dp1x = HC1x(dp1x);
            if (!!bgO6I) {
                dp1x = dp1x.replace(MI3x.MLINE, "\n\n").replace(MI3x.LING, "</br>")
            }
            dp1x = l9c.SA4E(dp1x);
            return dp1x
        };
        var HC1x = function (bi0x) {
            return k9b.AN9E(cpU0x, bi0x)
        };
        return function (dp1x, e9f, ee1x) {
            e9f = e9f || {};
            ee1x = ee1x || {};
            ee1x.actHash = {};
            var cpI0x = !!e9f.parseLink, cpH0x = !!e9f.parseAct, cpG0x = e9f.linkTpl || bgM6G.LINK,
                cpE0x = e9f.atTpl || bgM6G.AT, cpD0x = e9f.actTpl || bgM6G.ACT, bgO6I = !!e9f.keepSpace,
                bhc6W = e9f.linkKlass || "s-fc7";
            cuA1x = e9f.actBiJson || "";
            if (!dp1x) return "";
            dp1x = dp1x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kE3x = cpT0x[cpI0x + 2 * cpH0x], cO0x = MI3x[kE3x], bs0x = null, lm3x = null, gA2x = 0, cuB1x = "",
                cuC1x = "";
            var AF9w = [];
            cO0x.lastIndex = 0;
            while (bs0x = cO0x.exec(dp1x)) {
                var fr1x = {html: "", before: bs0x.index - 1, after: bs0x.index + bs0x[0].length};
                if (bs0x[1]) {
                    var lm3x = bs0x[2].replace(/[^\x00-\xff]/g, "**");
                    if (lm3x.length < 4 || lm3x.length > 32) {
                    } else {
                        var Mz2x = a8i.em1x(cpE0x);
                        fr1x.html = a8i.bP0x(Mz2x, {
                            value: HC1x(bs0x[2]),
                            url: encodeURI("/user/home?nickname=" + bs0x[2]),
                            klass: bhc6W
                        });
                        AF9w.push(fr1x)
                    }
                } else if (bs0x.length > 8 && bs0x[4]) {
                    var Mz2x = a8i.em1x(cpG0x);
                    fr1x.html = a8i.bP0x(Mz2x, {value: HC1x(bs0x[4]), url: encodeURI(bs0x[4]), klass: bhc6W});
                    AF9w.push(fr1x)
                } else {
                    var bCt1x = kE3x == "ACT_NOLINK" ? 4 : 9;
                    var Mz2x = a8i.em1x(cpD0x);
                    fr1x.html = a8i.bP0x(Mz2x, {value: HC1x(bs0x[bCt1x]), klass: bhc6W});
                    AF9w.push(fr1x);
                    ee1x.actHash[bs0x[bCt1x].slice(1, -1)] = true
                }
            }
            var cps0x = AF9w.length, kw3x = {before: dp1x.length - 1, after: 0}, bhk6e = "";
            for (var i = 0; i <= cps0x; i++) {
                var iD2x, gE2x;
                iD2x = (AF9w[i - 1] || kw3x).after;
                gE2x = (AF9w[i] || kw3x).before;
                if (gE2x >= iD2x && iD2x >= 0 && gE2x <= dp1x.length - 1) {
                    bhk6e += cpK0x(dp1x.substring(iD2x, gE2x + 1), bgO6I)
                }
                if (AF9w[i]) {
                    bhk6e += AF9w[i].html
                }
            }
            return bhk6e
        }
    }();
    l9c.cqb0x = function () {
        var cO0x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bi0x) {
            return (bi0x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cO0x, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l9c.cqa0x = function () {
        var cO0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eJ1x = function (lm3x, dD1x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lm3x) + '" class="' + (dD1x || "") + '">@' + lm3x + "</a>"
        };
        return function (bi0x, dD1x) {
            return (bi0x || "").replace(cO0x, function ($0, $1) {
                return eJ1x($1, dD1x)
            })
        }
    }();
    l9c.SA4E = function () {
        var cO0x = /\[(.*?)\]/g;
        return function (bi0x) {
            return (bi0x || "").replace(cO0x, function ($1, $2) {
                var V9M = l9c.bAU0x($2);
                return !V9M ? $1 : '<img src="' + V9M + '"/>'
            })
        }
    }();
    l9c.zt9k = function (E9v, dD1x) {
        a8i.bB0x(E9v, dD1x) ? a8i.w9n(E9v, dD1x) : a8i.y9p(E9v, dD1x)
    };
    l9c.Hr1x = function (cH0x, hH2x) {
        cH0x = a8i.z9q(cH0x);
        hH2x = a8i.z9q(hH2x);
        if (!cH0x || !hH2x) return !1;
        for (hH2x = hH2x.parentNode; !!hH2x && hH2x != cH0x; hH2x = hH2x.parentNode) ;
        return hH2x == cH0x
    };
    l9c.lD3x = function () {
        var bCF1x = function (gj2x) {
            return (gj2x < 10 ? "0" : "") + gj2x
        };
        return function (jF3x) {
            jF3x = parseInt(jF3x) || 0;
            if (!jF3x) return "00:00";
            var Mi2x = Math.floor(jF3x % 60), cpr0x = Math.floor(jF3x / 60);
            return bCF1x(cpr0x) + ":" + bCF1x(Mi2x)
        }
    }();
    l9c.xk8c = function (fn1x, vv7o) {
        if (!fn1x || fn1x.length == 0) return "";
        vv7o = vv7o || "/";
        var bs0x = [];
        for (var i = fn1x.length - 1; i >= 0; i--) {
            bs0x.unshift(fn1x[i].name)
        }
        return bs0x.join(vv7o)
    };
    l9c.pK4O = function () {
        var Mg2x = function (hs2x, dD1x, cH0x) {
            if (!hs2x || !hs2x.name) return "";
            if (!hs2x.id) return '<span class="' + dD1x + '">' + k9b.dI1x(hs2x.name) + "</span>";
            return "<a" + (cH0x ? ' target="_blank"' : "") + ' class="' + dD1x + '" href="/artist?id=' + hs2x.id + '" hidefocus="true">' + k9b.dI1x(hs2x.name) + "</a>"
        };
        return function (fn1x, T9K, vv7o, cH0x, bDz1x) {
            if (!fn1x || !fn1x.length) return "";
            vv7o = vv7o || "/";
            T9K = T9K || "";
            Hq1x = "";
            var eF1x = [];
            for (var i = 0, j9a = [], rm5r = [], ff1x; i < fn1x.length; ++i) {
                eF1x.push(fn1x[i].name);
                if (!fn1x[i] || fn1x[i].id <= 0) {
                    rm5r.push(fn1x[i]);
                    continue
                }
                if (k9b.fY2x(T9K)) {
                    ff1x = T9K(fn1x[i])
                } else {
                    ff1x = Mg2x(fn1x[i], T9K, cH0x)
                }
                if (ff1x && bDz1x && fn1x[i].tns && fn1x[i].tns.length > 0) {
                    Hq1x = k9b.dI1x(fn1x[i].tns[0]);
                    ff1x += '<span class="s-fc8" title="' + Hq1x + '"> - (' + Hq1x + ")</span>"
                }
                !!ff1x && j9a.push(ff1x)
            }
            for (var i = 0, ff1x; i < rm5r.length; ++i) {
                if (k9b.fY2x(T9K)) {
                    ff1x = T9K(rm5r[i])
                } else {
                    ff1x = Mg2x(rm5r[i], T9K, cH0x)
                }
                if (ff1x && bDz1x && rm5r[i].tns && rm5r[i].tns.length > 0) {
                    Hq1x = k9b.dI1x(rm5r[i].tns[0]);
                    ff1x += '<span class="s-fc8" title="' + Hq1x + '"> - (' + Hq1x + ")</span>"
                }
                !!ff1x && j9a.push(ff1x)
            }
            return '<span title="' + eF1x.join(vv7o) + '">' + j9a.join(vv7o) + "</span>"
        }
    }();
    l9c.wa7T = function (eT1x, ox4B) {
        ox4B = ox4B || "86";
        return !!eT1x && (ox4B == "86" ? /^\d{11}$/ : /^\d+$/).test(eT1x)
    };
    l9c.cuD1x = function (eT1x) {
        if (!l9c.wa7T(eT1x)) return eT1x;
        return eT1x.substring(0, 3) + "****" + eT1x.substr(7)
    };
    l9c.iT2x = function () {
        var cO0x = /^\s+$/g;
        return function (hG2x) {
            return !hG2x || cO0x.test(hG2x)
        }
    }();
    l9c.Hp1x = function () {
        var bhw6q = /[^\x00-\xfff]/g;
        return function (hG2x) {
            var cpm0x = hG2x.match(bhw6q) || [], du1x = cpm0x.length;
            return hG2x.length + du1x
        }
    }();
    l9c.At9k = function () {
        var bhw6q = /[^\x00-\xfff]/;
        return function (hG2x, gn2x) {
            for (var i = 0, len = hG2x.length; i < len && gn2x > 0; i++) {
                if (bhw6q.test(hG2x.charAt(i))) {
                    gn2x -= 2;
                    if (gn2x < 0) {
                        break
                    }
                } else {
                    gn2x -= 1
                }
            }
            return hG2x.substring(0, i)
        }
    }();
    l9c.Ar9i = function (hG2x, gn2x, QP4T) {
        gn2x = gn2x || 10;
        QP4T = QP4T || nej.p.cS0x.engine == "trident" && parseInt(nej.p.cS0x.release) < 5;
        if (QP4T && l9c.Hp1x(hG2x) > gn2x) {
            return l9c.At9k(hG2x, gn2x) + "..."
        } else {
            return hG2x
        }
    };
    l9c.bEI1x = function (f9e) {
        return f9e === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f9e.type || f9e.href || ~f9e.tabIndex)
    };
    l9c.cpl0x = function (d9g, cH0x) {
        if (!d9g || !cH0x) return !0;
        var f9e, t9k = d9g.type.toLowerCase();
        if (t9k == "mouseout") {
            f9e = d9g.relatedTarget || d9g.toElement
        } else if (t9k == "mouseover") {
            f9e = d9g.relatedTarget || d9g.fromElement
        }
        return !f9e || f9e !== cH0x && !l9c.Hr1x(cH0x, f9e)
    };
    l9c.sf5k = function () {
        Q9H = {};
        return function (f9e, dJ1x) {
            var C9t = a8i.kH3x(f9e), J9A = "hover-" + C9t;
            if (!dJ1x || !C9t || !!Q9H[J9A]) return;
            Q9H[J9A] = !0;
            h9c.s9j(C9t, "mouseover", function () {
                var bhF6z = a8i.I9z(f9e, "hshow") || [];
                var bhG6A = a8i.I9z(f9e, "icn-dislike") || [];
                a8i.y9p(C9t, "z-hover");
                a8i.Y0x(bhF6z[0], "display", "block");
                a8i.Y0x(bhG6A[0], "display", "block")
            });
            h9c.s9j(C9t, "mouseout", function () {
                var bhF6z = a8i.I9z(f9e, "hshow") || [];
                var bhG6A = a8i.I9z(f9e, "icn-dislike") || [];
                a8i.w9n(C9t, "z-hover");
                a8i.Y0x(bhF6z[0], "display", "none");
                a8i.Y0x(bhG6A[0], "display", "none")
            })
        }
    }();
    l9c.bEO1x = function () {
        var bv0x = {
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
        return function (hG2x) {
            return k9b.AN9E(bv0x, hG2x)
        }
    }();
    l9c.tw6q = function (bz0x) {
        if (k9b.Gx1x(bz0x)) bz0x = bz0x.getTime();
        var fN2x = new Date, mX4b = fN2x.getTime() - bz0x;
        if (mX4b <= 6e4) return "刚刚";
        var qC5H = fN2x.getHours() * 36e5 + fN2x.getMinutes() * 6e4 + fN2x.getSeconds() * 1e3;
        if (mX4b <= qC5H) {
            if (mX4b < 36e5) {
                var LV2x = Math.floor(mX4b / 6e4);
                return LV2x + "分钟前"
            }
            return k9b.iL2x(bz0x, "HH:mm")
        } else {
            if (mX4b < qC5H + 864e5) {
                return "昨天" + k9b.iL2x(bz0x, "HH:mm")
            } else {
                var gi2x = fN2x.getFullYear(), bhH6B = new Date(gi2x, 0, 1);
                var qC5H = fN2x.getTime() - bhH6B.getTime();
                if (mX4b < qC5H) {
                    return k9b.iL2x(bz0x, "M月d日 HH:mm")
                }
                return k9b.iL2x(bz0x, "yyyy年M月d日")
            }
        }
    };
    l9c.cpk0x = function (bz0x) {
        if (k9b.Gx1x(bz0x)) bz0x = bz0x.getTime();
        var fN2x = new Date, mX4b = fN2x.getTime() - bz0x;
        var qC5H = fN2x.getHours() * 36e5 + fN2x.getMinutes() * 6e4 + fN2x.getSeconds() * 1e3;
        if (mX4b <= qC5H) {
            return "今天" + k9b.iL2x(bz0x, "HH:mm")
        } else {
            if (mX4b < qC5H + 864e5) {
                return "昨天" + k9b.iL2x(bz0x, "HH:mm")
            } else {
                return k9b.iL2x(bz0x, "yy-MM-dd HH:mm")
            }
        }
    };
    l9c.cpj0x = function (bz0x) {
        if (k9b.Gx1x(bz0x)) bz0x = bz0x.getTime();
        var fN2x = new Date, mX4b = fN2x.getTime() - bz0x;
        if (mX4b <= 6e4) return "刚刚";
        var qC5H = fN2x.getHours() * 36e5 + fN2x.getMinutes() * 6e4 + fN2x.getSeconds() * 1e3;
        if (mX4b <= qC5H) {
            if (mX4b < 36e5) {
                var LV2x = Math.floor(mX4b / 6e4);
                return LV2x + "分钟前"
            }
            return k9b.iL2x(bz0x, "HH:mm")
        } else {
            if (mX4b < qC5H + 864e5) {
                return "昨天" + k9b.iL2x(bz0x, "HH:mm")
            } else if (mX4b < qC5H + 864e5 * 6) {
                var gi2x = fN2x.getFullYear(), bhH6B = new Date(gi2x, 0, 1);
                var qC5H = fN2x.getTime() - bhH6B.getTime();
                if (mX4b < qC5H) {
                    return k9b.iL2x(bz0x, "M月d日 HH:mm")
                }
                return k9b.iL2x(bz0x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l9c.ZP3x = function () {
        var cO0x = /\{(.*?)\}/gi;
        return function (pl4p, i9b) {
            return (pl4p || "").replace(cO0x, function ($1, $2) {
                var A9r = i9b[$2];
                return A9r == null ? $1 : A9r
            })
        }
    }();
    l9c.eP1x = function () {
        var bg0x = Array.prototype.slice.call(arguments, 0), pl4p = bg0x.shift();
        if (pl4p) {
            return pl4p.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bg0x.length ? bg0x[$2] : $1
            })
        }
        return ""
    };
    l9c.Hl1x = function (j9a, dD1x, kZ3x) {
        return "";
        kZ3x = kZ3x || " - ";
        if (j9a && j9a.length) {
            return kZ3x + (!!dD1x ? '<span class="' + dD1x + '">' + j9a[0] + "</span>" : j9a[0])
        }
        return ""
    };
    l9c.bFG1x = function () {
        if (window.getSelection) {
            var qy5D = window.getSelection();
            if (qy5D && qy5D.focusNode && qy5D.focusNode.tagName) {
                var Ai9Z = a8i.cQ0x(qy5D.focusNode);
                for (var i = 0, xC8u; i < Ai9Z.length; ++i) {
                    xC8u = Ai9Z[i].tagName;
                    if (!xC8u) continue;
                    xC8u = xC8u.toLowerCase();
                    if (xC8u == "textarea" || xC8u == "input") return !0
                }
            }
        } else if (document.selection) {
            var cI0x = document.selection.createRange();
            if (cI0x) {
                var f9e = cI0x.parentElement();
                if (f9e && f9e.tagName) {
                    var xC8u = f9e.tagName.toLowerCase();
                    if (xC8u == "textarea" || xC8u == "input") return !0
                }
            }
        }
        return !1
    };
    l9c.Ah9Y = function (fw1x) {
        if (/^[A-Z]\:\\/i.test(fw1x)) {
            fw1x = fw1x.split("\\")
        } else {
            fw1x = fw1x.split("/")
        }
        fw1x = fw1x[fw1x.length - 1];
        return fw1x
    };
    l9c.cpi0x = function () {
        var EO0x = [13, 17, 34, 19, 18, 21];
        return function (C9t) {
            var bs0x = (C9t || "").split("_");
            return {type: EO0x[bs0x[2]] || -1, id: bs0x[3] || ""}
        }
    }();
    l9c.bhJ6D = function (dj1x) {
        if (4 == dj1x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dj1x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dj1x.expertTags && dj1x.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l9c.LL2x = function (hN2x) {
        if (!hN2x) return "";
        var du1x = hN2x.length, hu2x = [];
        hu2x[0] = du1x / 3 | 0;
        hu2x[1] = hu2x[0] + ((du1x - hu2x[0]) / 2 | 0);
        return hN2x.substring(0, hu2x[0]) + hN2x.substring(hu2x[0], hu2x[1]).replace(/\d/g, "*") + hN2x.substring(hu2x[1], du1x)
    };
    l9c.cuF1x = function (r9i, cp0x) {
        return (r9i % cp0x + cp0x) % cp0x
    };
    l9c.bGV2x = function () {
        var EO0x = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (C9t) {
            var bs0x = (C9t || "").split("_"), m9d = {type: EO0x[bs0x[2]] || -1, id: bs0x[3] || ""};
            if (m9d.type == "event") {
                m9d.uid = bs0x[4] || "";
                return "/" + m9d.type + "?id=" + m9d.id + "&uid=" + m9d.uid
            }
            return "/" + m9d.type + "?id=" + m9d.id
        }
    }();
    l9c.bHa2x = function () {
        var EO0x = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (C9t) {
            var bs0x = (C9t || "").split("_");
            return EO0x[bs0x[2]] || "资源"
        }
    }();
    l9c.cpb0x = function (bw0x) {
        var qs = bw0x.length > 0 ? bw0x.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
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
    l9c.bHk2x = function (sG5L, LK2x) {
        var ZG3x = 0, dZ1x = new Array;
        k9b.be0x(sG5L, function (V9M, r9i) {
            var de1x = a8i.cT0x("img");
            de1x.src = V9M;
            h9c.s9j(de1x, "load", function (r9i, d9g) {
                dZ1x[r9i] = 1;
                ZG3x++;
                if (ZG3x == sG5L.length) LK2x(sG5L, dZ1x)
            }.g9d(this, r9i));
            h9c.s9j(de1x, "error", function (d9g, r9i) {
                dZ1x[r9i] = 0;
                ZG3x++;
                if (ZG3x == sG5L.length) LK2x(sG5L, dZ1x)
            }.g9d(this, r9i))
        })
    };
    l9c.ZD3x = function (j9a, dC1x) {
        var m9d = [];
        k9b.be0x(j9a, function (q9h, r9i, ig2x) {
            m9d.push(dC1x(q9h, r9i, ig2x))
        });
        return m9d
    };
    l9c.Wt2x = function (j9a, dC1x, ig2x) {
        var m9d = [];
        k9b.be0x(j9a, function (q9h, r9i) {
            if (dC1x.call(ig2x, q9h, r9i, j9a)) {
                m9d.push(q9h)
            }
        });
        return m9d
    };
    l9c.coV0x = function (bi0x) {
        return k9b.dI1x((bi0x || "").replace(/\s{2,}/g, " ").trim())
    };
    l9c.bhM6G = function (bf0x) {
        if (bf0x.transNames && bf0x.transNames.length) {
            return bf0x.transNames[0]
        } else if (bf0x.alias && bf0x.alias.length) {
            return bf0x.alias[0]
        }
    };
    l9c.bhN6H = function (Oc3x) {
        if (Oc3x) {
            return Oc3x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l9c.bhV6P = function (f9e) {
        var f9e = a8i.z9q(f9e), cL0x = f9e && f9e.getElementsByTagName("textarea")[0], J9A = a8i.u9l(f9e, "key"),
            bhY6S = a8i.u9l(f9e, "simple") == "1", bIB2x = p9g.uU7N.fW2x();
        if (!(f9e && cL0x && J9A)) return;
        if (bhY6S) {
            bIB2x.so5t(J9A, l9c.Bx9o(JSON.parse(cL0x.value)))
        } else {
            bIB2x.so5t(J9A, JSON.parse(cL0x.value || cL0x.defaultValue))
        }
        f9e.innerHTML = "";
        return J9A
    };
    l9c.coQ0x = function (oH4L) {
        if (!oH4L.onbeforelistload) {
            oH4L.onbeforelistload = function (d9g) {
                d9g.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oH4L.onemptylist) {
            oH4L.onemptylist = function (d9g) {
                d9g.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oH4L.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oH4L
    };
    l9c.Bx9o = function (hx2x) {
        if (k9b.en1x(hx2x)) {
            var ee1x = [];
            k9b.be0x(hx2x, function (bhY6S) {
                ee1x.push(bIS2x(bhY6S))
            });
            return ee1x
        } else {
            return bIS2x(hx2x)
        }

        function bIS2x(hx2x) {
            if (!hx2x) return null;
            var ee1x = {
                album: hx2x.al,
                alias: hx2x.alia || hx2x.ala || [],
                artists: hx2x.ar || [],
                commentThreadId: "R_SO_4_" + hx2x.id,
                copyrightId: hx2x.cp || 0,
                duration: hx2x.dt || 0,
                id: hx2x.id,
                mvid: hx2x.mv || 0,
                name: hx2x.name || "",
                cd: hx2x.cd,
                position: hx2x.no || 0,
                ringtone: hx2x.rt,
                rtUrl: hx2x.rtUrl,
                status: hx2x.st || 0,
                pstatus: hx2x.pst || 0,
                fee: hx2x.fee || 0,
                version: hx2x.v || 0,
                eq: hx2x.eq,
                songType: hx2x.t || 0,
                mst: hx2x.mst,
                score: hx2x.pop || 0,
                ftype: hx2x.ftype,
                rtUrls: hx2x.rtUrls,
                transNames: hx2x.tns,
                privilege: hx2x.privilege,
                lyrics: hx2x.lyrics
            };
            return ee1x
        }
    };
    l9c.cuH1x = function () {
        var f9e = a8i.mG4K('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f9e);
        h9c.s9j(f9e, "click", function (d9g) {
            h9c.bh0x(d9g);
            a8i.cK0x(f9e)
        })
    };
    l9c.kO3x = function (ct0x) {
        if (ct0x < 1e5) {
            return ct0x
        } else {
            return Math.floor(ct0x / 1e4) + "万"
        }
    };
    l9c.tf6Z = function (ct0x, cL0x) {
        return "<i>" + (ct0x ? "(" + ct0x + ")" : cL0x) + "</i>"
    };
    l9c.bJi2x = function (t9k, hp2x) {
        var e9f = {};
        if (!k9b.kI3x(hp2x)) {
            return e9f
        }
        switch (parseInt(t9k)) {
            case 17:
                e9f.title = hp2x.name;
                e9f.author = (hp2x.radio || []).name;
                e9f.picUrl = hp2x.coverUrl;
                e9f.category = hp2x.radio.category;
                break;
            case 19:
                e9f.title = hp2x.name;
                e9f.author = l9c.xk8c(hp2x.artists);
                e9f.authors = l9c.xk8c(hp2x.artists, " / ");
                e9f.picUrl = hp2x.picUrl;
                break;
            case 13:
                e9f.title = hp2x.name;
                e9f.author = (hp2x.creator || []).nickname;
                e9f.picUrl = hp2x.coverImgUrl;
                break;
            case 18:
                e9f.title = hp2x.name;
                e9f.author = l9c.xk8c(hp2x.artists);
                e9f.picUrl = (hp2x.album || []).picUrl;
                break;
            case 20:
                e9f.title = hp2x.name;
                e9f.author = "";
                e9f.picUrl = hp2x.img1v1Url;
                break;
            case 21:
                e9f.title = hp2x.name;
                e9f.author = hp2x.artistName;
                e9f.authors = l9c.xk8c(hp2x.artists, " / ");
                e9f.picUrl = hp2x.newCover || hp2x.cover;
                break;
            case 70:
                e9f.title = hp2x.name;
                e9f.author = (hp2x.dj || []).nickname;
                e9f.picUrl = hp2x.picUrl;
                e9f.category = hp2x.category;
                break;
            default:
                break
        }
        return e9f
    };
    l9c.bJm2x = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l9c.coO0x = function (eJ1x, vd7W, e9f) {
        var bL0x, bg0x, m9d;
        var jn3x = null;
        var Ly2x = 0;
        if (!e9f) e9f = {};
        var YV3x = function () {
            Ly2x = e9f.leading === false ? 0 : +(new Date);
            jn3x = null;
            m9d = eJ1x.apply(bL0x, bg0x);
            if (!jn3x) bL0x = bg0x = null
        };
        return function () {
            var fN2x = +(new Date);
            if (!Ly2x && e9f.leading === false) Ly2x = fN2x;
            var bif6Z = vd7W - (fN2x - Ly2x);
            bL0x = this;
            bg0x = arguments;
            if (bif6Z <= 0 || bif6Z > vd7W) {
                if (jn3x) {
                    clearTimeout(jn3x);
                    jn3x = null
                }
                Ly2x = fN2x;
                m9d = eJ1x.apply(bL0x, bg0x);
                if (!jn3x) bL0x = bg0x = null
            } else if (!jn3x && e9f.trailing !== false) {
                jn3x = setTimeout(YV3x, bif6Z)
            }
            return m9d
        }
    };
    l9c.bJW2x = function (eJ1x, vd7W, qg5l) {
        var jn3x, bg0x, bL0x, Lr2x, m9d;
        var YV3x = function () {
            var gA2x = new Date - Lr2x;
            if (gA2x < vd7W && gA2x >= 0) {
                jn3x = setTimeout(YV3x, vd7W - gA2x)
            } else {
                jn3x = null;
                if (!qg5l) {
                    m9d = eJ1x.apply(bL0x, bg0x);
                    if (!jn3x) bL0x = bg0x = null
                }
            }
        };
        return function () {
            bL0x = this;
            bg0x = arguments;
            Lr2x = new Date;
            var bii6c = qg5l && !jn3x;
            if (!jn3x) jn3x = setTimeout(YV3x, vd7W);
            if (bii6c) {
                m9d = eJ1x.apply(bL0x, bg0x);
                bL0x = bg0x = null
            }
            return m9d
        }
    };
    l9c.Lp2x = function (f9e, hi2x) {
        if (f9e) {
            var f9e = f9e.firstElementChild;
            if (f9e) {
                f9e.firstElementChild && (f9e = f9e.firstElementChild);
                f9e.setAttribute("xlink:href", "/style/pc/svg/" + hi2x)
            }
        }
    };
    l9c.bKy3x = function (eF1x) {
        if (!eF1x || !eF1x.length) {
            return
        }
        eF1x = /^#(.+?)#$/.exec(eF1x)[1];
        eF1x = eF1x.replace(/\s/g, " ");
        v9m.br0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k9b.dd1x({actname: eF1x}),
            onload: function (P9G) {
                if (!P9G || P9G.code != 200 || !P9G.act) {
                    n9e.Z0x.N9E({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + P9G.act.actId)
                }
            },
            onerror: function (bQ0x) {
                n9e.Z0x.N9E({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l9c.bij6d = function (Ln2x, vS7L) {
        if (!Ln2x || !vS7L) return false;
        if (Ln2x == vS7L) return true;
        return l9c.bij6d(Ln2x, vS7L.parentNode)
    };
    a8i.fk1x = function (bD0x, kV3x) {
        if (!bD0x) return null;
        if (!kV3x) return bD0x.firstChild;
        return a8i.I9z(bD0x, kV3x)[0]
    };
    l9c.coN0x = function (hG2x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hG2x)
    };
    l9c.cuI1x = function (tG6A) {
        if (!tG6A) {
            return "0b"
        }
        var coL0x = ["Bytes", "KB", "MB", "GB"];
        var bd0x = Math.floor(Math.log(tG6A) / Math.log(1024));
        return (tG6A / Math.pow(1024, Math.floor(bd0x))).toFixed(bd0x == 1 ? 0 : 1) + coL0x[bd0x]
    };
    l9c.bLo3x = function (dp1x, fd1x, coI0x) {
        if (!dp1x) return dp1x;
        var du1x = k9b.fj1x(dp1x);
        if (du1x <= fd1x) return dp1x;
        var biy6s = du1x - dp1x.length, biz6t = dp1x.length - biy6s;
        var fL2x = Math.ceil(fd1x / 2), coG0x = fd1x, bLB3x = 0;
        if (biy6s < fL2x) fL2x = fd1x - biy6s;
        if (biz6t < fd1x) fd1x = biz6t + Math.ceil((fd1x - biz6t) / 2);
        while (fL2x <= fd1x) {
            bLB3x = k9b.fj1x(dp1x.substr(0, fL2x));
            var biA6u = coG0x - bLB3x;
            if (biA6u == 0) break;
            if (biA6u == 1) {
                var coC0x = k9b.fj1x(dp1x.charAt(fL2x));
                if (coC0x == 1) {
                    fL2x++;
                    break
                } else {
                    break
                }
            }
            fL2x += Math.floor(biA6u / 2)
        }
        return dp1x.substr(0, fL2x) + (!!coI0x ? "" : "...")
    }
})();
(function () {
    function coB0x() {
        var zV9M = function (ju3x) {
            if (ju3x < -128) {
                return zV9M(128 - (-128 - ju3x))
            } else if (ju3x >= -128 && ju3x <= 127) {
                return ju3x
            } else if (ju3x > 127) {
                return zV9M(-129 + ju3x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var coA0x = function (ju3x, bj0x) {
            return zV9M(ju3x + bj0x)
        };
        var coy0x = function (XJ2x, biG6A) {
            if (XJ2x == null) {
                return null
            }
            if (biG6A == null) {
                return XJ2x
            }
            var oY4c = [];
            var cox0x = biG6A.length;
            for (var i = 0, bp0x = XJ2x.length; i < bp0x; i++) {
                oY4c[i] = coA0x(XJ2x[i], biG6A[i % cox0x])
            }
            return oY4c
        };
        var cow0x = function (XB2x) {
            if (XB2x == null) {
                return XB2x
            }
            var oY4c = [];
            var cov0x = XB2x.length;
            for (var i = 0, bp0x = cov0x; i < bp0x; i++) {
                oY4c[i] = zV9M(0 - XB2x[i])
            }
            return oY4c
        };
        var cou0x = function (biH6B, Lb2x) {
            biH6B = zV9M(biH6B);
            Lb2x = zV9M(Lb2x);
            return zV9M(biH6B ^ Lb2x)
        };
        var bNd3x = function (KZ2x, biN6H) {
            if (KZ2x == null || biN6H == null || KZ2x.length != biN6H.length) {
                return KZ2x
            }
            var oY4c = [];
            var cos0x = KZ2x.length;
            for (var i = 0, bp0x = cos0x; i < bp0x; i++) {
                oY4c[i] = cou0x(KZ2x[i], biN6H[i])
            }
            return oY4c
        };
        var bNM3x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cor0x = function (cP0x) {
            var GY1x = [];
            GY1x.push(bNM3x[cP0x >>> 4 & 15]);
            GY1x.push(bNM3x[cP0x & 15]);
            return GY1x.join("")
        };
        var coo0x = function (tG6A) {
            var bp0x = tG6A.length;
            if (tG6A == null || bp0x < 0) {
                return new String("")
            }
            var GY1x = [];
            for (var i = 0; i < bp0x; i++) {
                GY1x.push(cor0x(tG6A[i]))
            }
            return GY1x.join("")
        };
        var bNX3x = function (Xj2x) {
            if (Xj2x == null || Xj2x.length == 0) {
                return Xj2x
            }
            var biP6J = new String(Xj2x);
            var oY4c = [];
            var bp0x = biP6J.length / 2;
            var bj0x = 0;
            for (var i = 0; i < bp0x; i++) {
                var nJ4N = parseInt(biP6J.charAt(bj0x++), 16) << 4;
                var no4s = parseInt(biP6J.charAt(bj0x++), 16);
                oY4c[i] = zV9M(nJ4N + no4s)
            }
            return oY4c
        };
        var con0x = function (cC0x) {
            if (cC0x == null || cC0x == undefined) {
                return cC0x
            }
            var KW2x = encodeURIComponent(cC0x);
            var tG6A = [];
            var brM8E = KW2x.length;
            for (var i = 0; i < brM8E; i++) {
                if (KW2x.charAt(i) == "%") {
                    if (i + 2 < brM8E) {
                        tG6A.push(bNX3x(KW2x.charAt(++i) + "" + KW2x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    tG6A.push(KW2x.charCodeAt(i))
                }
            }
            return tG6A
        };
        var com0x = function (uM7F) {
            var bd0x = 0;
            bd0x += (uM7F[0] & 255) << 24;
            bd0x += (uM7F[1] & 255) << 16;
            bd0x += (uM7F[2] & 255) << 8;
            bd0x += uM7F[3] & 255;
            return bd0x
        };
        var cuJ1x = function (bd0x) {
            var uM7F = [];
            uM7F[0] = bd0x >>> 24 & 255;
            uM7F[1] = bd0x >>> 16 & 255;
            uM7F[2] = bd0x >>> 8 & 255;
            uM7F[3] = bd0x & 255;
            return uM7F
        };
        var cok0x = function (dv1x, bja6U, bp0x) {
            var ee1x = [];
            if (dv1x == null || dv1x.length == 0) {
                return ee1x
            }
            if (dv1x.length < bp0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bp0x; i++) {
                ee1x[i] = dv1x[bja6U + i]
            }
            return ee1x
        };
        var bjg6a = function (dv1x, bja6U, qL5Q, coh0x, bp0x) {
            if (dv1x == null || dv1x.length == 0) {
                return qL5Q
            }
            if (qL5Q == null) {
                throw new Error("1004")
            }
            if (dv1x.length < bp0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bp0x; i++) {
                qL5Q[coh0x + i] = dv1x[bja6U + i]
            }
            return qL5Q
        };
        var cog0x = function (bp0x) {
            var bs0x = [];
            for (var i = 0; i < bp0x; i++) {
                bs0x[i] = 0
            }
            return bs0x
        };
        var cof0x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var GQ1x = 64;
        var Wj2x = 64;
        var bsq8i = 4;
        var coe0x = function (pq4u) {
            var bsB8t = [];
            if (pq4u == null || pq4u == undefined || pq4u.length == 0) {
                return cog0x(Wj2x)
            }
            if (pq4u.length >= Wj2x) {
                return cok0x(pq4u, 0, Wj2x)
            } else {
                for (var i = 0; i < Wj2x; i++) {
                    bsB8t[i] = pq4u[i % pq4u.length]
                }
            }
            return bsB8t
        };
        var coc0x = function (Wb2x) {
            if (Wb2x == null || Wb2x.length % GQ1x != 0) {
                throw new Error("1005")
            }
            var bjw6q = [];
            var bj0x = 0;
            var cob0x = Wb2x.length / GQ1x;
            for (var i = 0; i < cob0x; i++) {
                bjw6q[i] = [];
                for (var j = 0; j < GQ1x; j++) {
                    bjw6q[i][j] = Wb2x[bj0x++]
                }
            }
            return bjw6q
        };
        var coa0x = function (btb9S) {
            var nJ4N = btb9S >>> 4 & 15;
            var no4s = btb9S & 15;
            var bj0x = nJ4N * 16 + no4s;
            return cof0x[bj0x]
        };
        var btl9c = function (bjx6r) {
            if (bjx6r == null) {
                return null
            }
            var bto9f = [];
            for (var i = 0, bp0x = bjx6r.length; i < bp0x; i++) {
                bto9f[i] = coa0x(bjx6r[i])
            }
            return bto9f
        };
        var cnY0x = function (GN1x, pq4u) {
            if (GN1x == null) {
                return null
            }
            if (GN1x.length == 0) {
                return []
            }
            if (GN1x.length % GQ1x != 0) {
                throw new Error("1005")
            }
            pq4u = coe0x(pq4u);
            var bjz6t = pq4u;
            var bjA6u = coc0x(GN1x);
            var Kt2x = [];
            var cnX0x = bjA6u.length;
            for (var i = 0; i < cnX0x; i++) {
                var bjG7z = btl9c(bjA6u[i]);
                bjG7z = btl9c(bjG7z);
                var bjO7H = bNd3x(bjG7z, bjz6t);
                var cnV0x = coy0x(bjO7H, cow0x(bjz6t));
                bjO7H = bNd3x(cnV0x, pq4u);
                bjg6a(bjO7H, 0, Kt2x, i * GQ1x, GQ1x);
                bjz6t = bjA6u[i]
            }
            var bub9S = [];
            bjg6a(Kt2x, Kt2x.length - bsq8i, bub9S, 0, bsq8i);
            var bp0x = com0x(bub9S);
            if (bp0x > Kt2x.length) {
                throw new Error("1006")
            }
            var oY4c = [];
            bjg6a(Kt2x, 0, oY4c, 0, bp0x);
            return oY4c
        };
        var cnU0x = function (Vr2x, J9A) {
            if (Vr2x == null) {
                return null
            }
            var buv9m = new String(Vr2x);
            if (buv9m.length == 0) {
                return []
            }
            var GN1x = bNX3x(buv9m);
            if (J9A == null || J9A == undefined) {
                throw new Error("1007")
            }
            var pq4u = con0x(J9A);
            return cnY0x(GN1x, pq4u)
        };
        this.cnT0x = function (Vr2x, J9A) {
            var cnS0x = cnU0x(Vr2x, J9A);
            var bjZ7S = new String(coo0x(cnS0x));
            var UN1x = [];
            var cnR0x = bjZ7S.length / 2;
            var bj0x = 0;
            for (var i = 0; i < cnR0x; i++) {
                UN1x.push("%");
                UN1x.push(bjZ7S.charAt(bj0x++));
                UN1x.push(bjZ7S.charAt(bj0x++))
            }
            return UN1x.join("")
        }
    }

    window.settmusic = (new coB0x).cnT0x
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, H9y = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        p9g = c9h("nm.d"), l9c = c9h("nm.x"), J9A = "Search-tracks_", b8h;
    p9g.eP1x({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (P9G) {
                return P9G
            }, onerror: function (P9G, e9f) {
                if (P9G.code == 407) {
                    e9f.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e9f, bc0x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cnQ0x(parseInt(e9f.data.type)) || "suggest",
                    keyword: e9f.data.s,
                    offset: e9f.offset
                })
            }, format: function (P9G, e9f) {
                if (P9G.abroad) {
                    try {
                        P9G.result = JSON.parse(decodeURIComponent(settmusic(P9G.result, p9g.sk)))
                    } catch (e) {
                    }
                }
                P9G.result = P9G.result || {};
                var j9a, cp0x, jW3x = [], sW6Q = e9f.data.s || "", fV2x = e9f.data.limit,
                    t9k = parseInt(e9f.data.type) || 1, m9d = P9G.result;
                switch (t9k) {
                    case 1:
                        j9a = this.buP9G(m9d.songs, e9f.data.hlpretag, e9f.data.hlposttag);
                        cp0x = m9d.songCount;
                        break;
                    case 10:
                        j9a = m9d.albums;
                        cp0x = m9d.albumCount;
                        break;
                    case 100:
                        j9a = m9d.artists;
                        cp0x = m9d.artistCount;
                        break;
                    case 1e3:
                        j9a = m9d.playlists;
                        cp0x = m9d.playlistCount;
                        break;
                    case 1002:
                        j9a = m9d.userprofiles;
                        cp0x = m9d.userprofileCount;
                        break;
                    case 1004:
                        j9a = m9d.mvs;
                        cp0x = m9d.mvCount;
                        break;
                    case 1006:
                        j9a = this.buP9G(m9d.songs, e9f.data.hlpretag, e9f.data.hlposttag);
                        cp0x = m9d.songCount;
                        break;
                    case 1009:
                        var pA4E = m9d.djRadios;
                        if (!!pA4E) {
                            k9b.be0x(pA4E, function (A9r, r9i, cnO0x) {
                                A9r.xid = A9r.id;
                                A9r.id = A9r.id + "_rad"
                            });
                            if (pA4E.length) {
                                this.so5t("radio_search-" + e9f.data.s, pA4E)
                            }
                        }
                        cp0x = Math.min(m9d.djprogramCount, 500);
                        j9a = m9d.djprograms || [];
                        if (e9f.data.isPub) {
                            k9b.mq3x(pA4E, function (A9r, r9i, cnO0x) {
                                A9r.stype = 1;
                                j9a.unshift(A9r)
                            });
                            cp0x = Math.min(j9a.length, 500)
                        }
                        break
                }
                this.x9o("onsearchload", P9G);
                if (j9a && j9a.length) {
                    for (var i = 0; i < fV2x; i++) {
                        if (i < j9a.length) {
                            jW3x.push(j9a[i])
                        } else {
                            jW3x.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cp0x || 0, sW6Q.length < 3 ? 500 : 5e3), list: jW3x}
            }, onerror: function (P9G, e9f) {
                e9f.onload(e9f, []);
                if (k9b.fY2x(e9f.onerror)) {
                    e9f.onerror(P9G)
                }
            }
        }
    });
    p9g.DV0x = NEJ.C();
    b8h = p9g.DV0x.O9F(p9g.gW2x);
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.cnL0x = function (J9A, e9f) {
        if (!J9A) return;
        if (!!this.bvo9f) v9m.jk3x(this.bvo9f);
        this.bvo9f = this.ck0x("search-suggest", NEJ.X({data: {s: J9A, limit: 8}}, e9f))
    };
    b8h.cnK0x = function (J9A, e9f) {
        if (!J9A) return;
        this.ck0x("search-multimatch", NEJ.X({data: {s: J9A}}, e9f))
    };
    b8h.buP9G = function () {
        var cnI0x = function (hb2x, bvw9n, bvy9p) {
            var cnF0x = hb2x.match(new RegExp(bvw9n + "(.+?)" + bvy9p, "gi")), ct0x = 0;
            k9b.be0x(cnF0x, function (q9h) {
                ct0x += q9h.replace(new RegExp(bvw9n, "g"), "").replace(new RegExp(bvy9p, "g"), "").length
            });
            return ct0x
        };
        return function (iB2x, cnE0x, cnB0x) {
            var bvM9D = [];
            k9b.be0x(iB2x, function (bf0x, bd0x) {
                bf0x = l9c.Bx9o(bf0x);
                var UB1x = bf0x.lyrics || [], du1x = UB1x.length, ji3x = 0, cp0x = 4, UA1x = {l: 0, v: 0}, bkq7j;
                if (du1x > 4) {
                    k9b.be0x(UB1x, function (hb2x, r9i) {
                        var bwb9S = cnI0x(hb2x, cnE0x, cnB0x);
                        if (bwb9S > UA1x.v) {
                            UA1x.v = bwb9S;
                            UA1x.l = r9i
                        }
                    });
                    ji3x = UA1x.l;
                    ji3x = Math.max(ji3x, 0);
                    bkq7j = du1x - ji3x - 4;
                    if (bkq7j < 0) ji3x += bkq7j;
                    bf0x.lrcAbstractEnd = ji3x + cp0x - 1
                } else {
                    bf0x.lrcAbstractEnd = du1x - 1
                }
                bf0x.lrcAbstractStart = ji3x;
                bf0x.indexId = (UB1x && UB1x.length ? "L" : "NL") + bf0x.id;
                bvM9D.push(bf0x)
            });
            return bvM9D
        }
    }();
    b8h.cnQ0x = function (t9k) {
        switch (t9k) {
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
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        v9m = c9h("nej.j"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), F9w = c9h("nm.m"), n9e = c9h("nm.l"),
        cY1x = c9h("nm.i"), L9C = c9h("nm.m.sch"), b8h, K9B;
    var Ut1x = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    L9C.JR2x = NEJ.C();
    b8h = L9C.JR2x.O9F(H9y.cy0x);
    b8h.cl0x = function (f9e) {
        this.cr0x();
        this.bR0x(f9e);
        this.R9I = p9g.DV0x.fW2x()
    };
    b8h.bR0x = function (f9e) {
        this.o9f = f9e;
        var j9a = a8i.I9z(f9e, "j-flag");
        this.eu1x = j9a[0];
        this.bkA7t = j9a[1];
        this.ce0x = j9a[2];
        this.mo3x = j9a[3];
        h9c.s9j(this.eu1x, "input", this.fE1x.g9d(this));
        h9c.s9j(this.eu1x, "keyup", this.fE1x.g9d(this));
        h9c.s9j(this.eu1x, "focus", this.ga2x.g9d(this));
        h9c.s9j(this.bkA7t, "click", this.ga2x.g9d(this));
        h9c.s9j(this.eu1x, "blur", this.bkD7w.g9d(this));
        h9c.s9j(this.ce0x, "click", this.TY1x.g9d(this));
        h9c.s9j(this.o9f, "keydown", this.bkE7x.g9d(this));
        h9c.s9j(this.o9f, "keypress", this.TV1x.g9d(this));
        h9c.s9j(this.mo3x, "mouseover", this.JL2x.g9d(this));
        h9c.s9j(this.mo3x, "mouseout", this.JL2x.g9d(this));
        if (this.eu1x.value) {
            this.eu1x.value = ""
        }
        if (this.eu1x.style.opacity != null) {
            this.eu1x.style.opacity = 1
        }
    };
    b8h.fE1x = function (d9g) {
        if (d9g.type == "keyup" && d9g.keyCode == 8 || d9g.keyCode == 46) {
            this.EA0x()
        } else if (d9g.type == "input" || d9g.type == "propertychange") {
            setTimeout(this.EA0x.g9d(this), 0)
        }
    };
    b8h.ga2x = function () {
        this.vL7E(this.bkA7t, !1);
        a8i.y9p(this.o9f, "m-srch-fcs");
        this.eu1x.focus();
        this.EA0x();
        a8i.y9p(a8i.I9z("g-topbar", "j-showoff")[0], "f-hide")
    };
    b8h.bkD7w = function () {
        if (!this.eu1x.value) {
            this.vL7E(this.bkA7t, !0)
        }
        var ED0x = a8i.I9z(this.mo3x, "slt");
        if (this.TT1x(this.mo3x) && ED0x.length > 0 && a8i.u9l(ED0x[0], "type")) {
            var hi2x = ED0x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hi2x)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eu1x.value})
            }
            this.bkP7I(ED0x[0].href)
        }
        this.vL7E(this.mo3x, !1);
        a8i.w9n(this.o9f, "m-srch-fcs")
    };
    b8h.vL7E = function (f9e, li3x) {
        a8i.Y0x(f9e, "display", !li3x ? "none" : "")
    };
    b8h.TT1x = function (f9e) {
        return a8i.da1x(f9e, "display") != "none"
    };
    b8h.EA0x = function () {
        var EJ0x = function (tn6h, cL0x) {
            if (!cL0x) return;
            return cL0x.replace(new RegExp(l9c.bEO1x(tn6h), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cnA0x = function (hG2x) {
            var gn2x = this.o9f.clientWidth > 250 ? 41 : 17;
            if (l9c.Hp1x(hG2x) > gn2x) {
                return l9c.At9k(hG2x, gn2x) + "..."
            } else {
                return hG2x
            }
        };
        var Tw4A = function (m9d) {
            return m9d.songs && m9d.songs.length || m9d.albums && m9d.albums.length || m9d.artists && m9d.artists.length || m9d.playlists && m9d.playlists.length
        };
        var tT7M = function (tn6h, d9g) {
            if (!l9c.bEI1x(this.eu1x) || l9c.iT2x(this.eu1x.value)) {
                this.vL7E(this.mo3x, !1);
                return
            }
            d9g.keyword = k9b.dI1x(tn6h);
            var dy1x = a8i.bP0x("m-search-suggest", d9g, {mark: EJ0x.g9d(this, tn6h), cutStr: cnA0x.g9d(this)}),
                sd5i = d9g.result.order;
            this.mo3x.innerHTML = dy1x;
            this.vL7E(this.mo3x, Tw4A(d9g.result) ? !0 : !1);
            if (!!sd5i && !!sd5i.length && Ut1x[sd5i[0]]) {
                this.bkY7R = {keyword: tn6h, type: Ut1x[sd5i[0]]}
            }
        };
        var cnz0x = function () {
            this.vL7E(this.mo3x, !1);
            return
        };
        return function () {
            var A9r = this.eu1x.value;
            if (l9c.iT2x(A9r)) {
                this.vL7E(this.mo3x, !1);
                return
            }
            this.R9I.cnL0x(A9r, {onload: tT7M.g9d(this, A9r), onForbidden: cnz0x.g9d(this)})
        }
    }();
    b8h.TV1x = function (d9g) {
        if (d9g.keyCode != 13) return;
        var ED0x = a8i.I9z(this.mo3x, "slt");
        if (this.TT1x(this.mo3x) && ED0x.length > 0) {
            this.bkP7I(ED0x[0].href);
            this.vL7E(this.mo3x, !1);
            return
        }
        this.TY1x();
        this.vL7E(this.mo3x, !1)
    };
    b8h.bkE7x = function (d9g) {
        if (!this.TT1x(this.mo3x)) return;
        var j9a = a8i.I9z(this.mo3x, "xtag"), du1x = j9a.length, r9i = k9b.cU0x(j9a, function (q9h) {
            return a8i.bB0x(q9h, "slt")
        });
        switch (d9g.keyCode) {
            case 38:
                if (r9i >= 0) a8i.w9n(j9a[r9i], "slt");
                a8i.y9p(j9a[r9i <= 0 ? du1x - 1 : r9i - 1], "slt");
                break;
            case 40:
                if (r9i >= 0) a8i.w9n(j9a[r9i], "slt");
                a8i.y9p(j9a[(r9i + 1) % du1x], "slt");
                break
        }
    };
    b8h.JL2x = function (d9g) {
        if (!this.TT1x(this.mo3x)) return;
        var JB2x, E9v = h9c.U9L(d9g), j9a = a8i.I9z(this.mo3x, "xtag");
        if (E9v.tagName.toLowerCase() == "a") JB2x = E9v; else if (E9v.parentNode.tagName.toLowerCase() == "a") JB2x = E9v.parentNode;
        if (!JB2x) return;
        k9b.be0x(j9a, function (q9h) {
            a8i.w9n(q9h, "slt");
            a8i.u9l(q9h, "type", "")
        });
        if (d9g.type == "mouseout") return;
        a8i.y9p(JB2x, "slt");
        a8i.u9l(JB2x, "type", "mouse")
    };
    b8h.TY1x = function () {
        var dG1x = location.hash, r9i = dG1x.indexOf("?"), bw0x = k9b.hq2x(dG1x.substring(r9i + 1));
        bw0x.s = this.eu1x.value;
        if (l9c.iT2x(bw0x.s)) return;
        if (!bw0x.type && this.bkY7R && this.bkY7R.keyword == bw0x.s) {
            bw0x.type = this.bkY7R.type
        }
        this.bkP7I("/search/#/?" + k9b.dd1x(bw0x));
        this.eu1x.blur()
    };
    b8h.bkP7I = function (V9M) {
        if (location.dispatch2) {
            location.dispatch2(V9M)
        } else {
            location.href = V9M
        }
    };
    L9C.JR2x.cny0x = function () {
        var j9a = a8i.I9z(document.body, "j-suggest");
        k9b.be0x(j9a, function (q9h) {
            new L9C.JR2x(q9h)
        })
    };
    L9C.JR2x.cny0x()
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, H9y = c9h("nej.ut"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        p9g = c9h("nm.d"), b8h;
    p9g.eP1x({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (P9G) {
                return {total: P9G.size || 0, list: P9G.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (P9G) {
                return {total: P9G.size || 0, list: P9G.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (P9G) {
                return P9G.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (P9G, e9f) {
                if (e9f.offset == 0) {
                    var oj4n = P9G.data[0];
                    this.x9o("onfirstload", oj4n);
                    P9G.data.splice(0, 1);
                    return P9G.data
                } else {
                    return P9G.data
                }
            }
        }
    });
    p9g.AQ9H = NEJ.C();
    b8h = p9g.AQ9H.O9F(p9g.gW2x);
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.bla7T = function () {
        var rU5Z = "LOCAL_FLAG";
        return function (t9k, cnx0x) {
            var i9b = this.DP0x(rU5Z, {});
            if (i9b[t9k]) {
                return true
            } else {
                if (!cnx0x) {
                    i9b[t9k] = true;
                    this.uE7x(rU5Z, i9b)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), M9D = c9h("nej.ut"), blb7U;
    if (!!M9D.ob4f) return;
    M9D.ob4f = NEJ.C();
    blb7U = M9D.ob4f.O9F(M9D.cy0x);
    blb7U.bk0x = function () {
        var cnu0x = function (d9g) {
            d9g.matched = d9g.source == d9g.target
        };
        return function (e9f) {
            e9f.oncheck = e9f.oncheck || cnu0x;
            this.bl0x(e9f);
            this.bV0x = e9f.list;
            this.ih2x = e9f.dataset || "id";
            this.jL3x = e9f.selected || "js-selected"
        }
    }();
    blb7U.nZ4d = function (A9r) {
        var E9v, d9g = {target: A9r};
        k9b.be0x(this.bV0x, function (f9e) {
            delete d9g.matched;
            d9g.source = a8i.u9l(f9e, this.ih2x);
            this.x9o("oncheck", d9g);
            if (!d9g.matched) {
                a8i.w9n(f9e, this.jL3x)
            } else {
                E9v = f9e;
                a8i.y9p(f9e, this.jL3x)
            }
        }, this);
        return E9v
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), M9D = c9h("nej.ut"), oO4S;
    if (!!M9D.cM0x) return;
    M9D.cM0x = NEJ.C();
    oO4S = M9D.cM0x.O9F(M9D.cy0x);
    oO4S.cl0x = function () {
        this.iF2x = {};
        this.cr0x();
        this.bJ0x()
    };
    oO4S.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.bld7W = e9f.umi || "";
        this.zl9c = e9f.dispatcher;
        this.Gr1x = e9f.composite || X0x;
        this.bjc6W({
            onshow: this.eX1x.g9d(this),
            onhide: this.jX3x.g9d(this),
            onrefresh: this.eh1x.g9d(this),
            onmessage: this.qA5F.g9d(this),
            onbeforehide: this.cnr0x.g9d(this)
        })
    };
    oO4S.bE0x = function () {
        delete this.bld7W;
        this.iF2x = {};
        this.bH0x()
    };
    oO4S.tD6x = function (d9g) {
        if (!!d9g) d9g.stopped = !0
    };
    oO4S.bJ0x = bn0x;
    oO4S.eX1x = bn0x;
    oO4S.jX3x = bn0x;
    oO4S.eh1x = bn0x;
    oO4S.qA5F = bn0x;
    oO4S.cnr0x = bn0x;
    oO4S.pS5X = function (nK4O, bF0x, eE1x) {
        this.zl9c.bli7b({to: nK4O, mode: eE1x || 0, data: bF0x, from: this.bld7W})
    };
    oO4S.cuL1x = function (t9k, i9b) {
        this.zl9c.zi9Z(t9k, {from: this.bld7W, data: i9b})
    };
    oO4S.cuM1x = function () {
        this.zl9c.lV3x.apply(this.zl9c, arguments)
    };
    oO4S.cnm0x = function () {
        return this.iF2x
    };
    a8i.SX4b = function () {
        if (!!window.dispatcher) {
            dispatcher.bzL0x.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c9h = NEJ.P, bn0x = NEJ.F, X0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), M9D = c9h("nej.ut"), wE8w;
    if (!!M9D.dn1x) return;
    M9D.dn1x = NEJ.C();
    wE8w = M9D.dn1x.O9F(M9D.cM0x);
    wE8w.cnl0x = function (e9f) {
        var bD0x;
        if (!bD0x) {
            var i9b = e9f.input || X0x;
            bD0x = a8i.z9q(i9b.parent)
        }
        if (!bD0x) {
            var i9b = e9f.data || X0x;
            bD0x = a8i.z9q(i9b.parent)
        }
        if (!bD0x) {
            bD0x = a8i.z9q(e9f.parent)
        }
        return bD0x
    };
    wE8w.eX1x = function (e9f) {
        var bD0x = this.cnl0x(e9f);
        if (!!bD0x && !!this.o9f) bD0x.appendChild(this.o9f);
        this.gC2x(e9f);
        this.bzW0x("onshow", e9f);
        this.eh1x(e9f)
    };
    wE8w.eh1x = function (e9f) {
        this.fO2x(e9f);
        this.bzW0x("onrefresh", e9f)
    };
    wE8w.jX3x = function () {
        this.kA3x();
        this.cni0x();
        a8i.mm3x(this.o9f)
    };
    wE8w.bzY0x = function () {
        var fX2x = /^onshow|onrefresh|delay$/;
        return function (bY0x) {
            return fX2x.test(bY0x)
        }
    }();
    wE8w.bAg0x = bn0x;
    wE8w.bzW0x = function () {
        var bAj0x = function (bw0x, e9f, bY0x, oi4m) {
            if (this.bzY0x(oi4m)) return;
            if (!!bw0x) bY0x += (bY0x.indexOf("?") > 1 ? "&" : "?") + bw0x;
            var cV0x = this.bAg0x(oi4m, e9f) || {};
            cV0x.location = e9f;
            cV0x.parent = this.iF2x[oi4m];
            this.zl9c.il2x(bY0x, {input: cV0x})
        };
        return function (t9k, e9f) {
            if (!e9f.nodelay) {
                if (!!this.Gr1x.delay) return;
                var bAq0x = this.Gr1x[t9k] || X0x;
                if (bAq0x.delay) return
            }
            var bw0x = k9b.dd1x(e9f.param) || "";
            if (t9k == "onrefresh") {
                k9b.ek1x(this.Gr1x, bAj0x.g9d(this, bw0x, e9f))
            }
            k9b.ek1x(bAq0x, bAj0x.g9d(this, bw0x, e9f))
        }
    }();
    wE8w.cni0x = function () {
        var yH8z = function (bY0x, oi4m) {
            if (!this.bzY0x(oi4m)) this.zl9c.bq0x(bY0x)
        };
        return function () {
            k9b.ek1x(this.Gr1x, yH8z, this);
            k9b.ek1x(this.Gr1x.onshow, yH8z, this);
            k9b.ek1x(this.Gr1x.onrefresh, yH8z, this)
        }
    }()
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), H9y = c9h("nej.ut"), v9m = c9h("nej.j"),
        k9b = c9h("nej.u"), F9w = c9h("nm.m"), l9c = c9h("nm.x"), p9g = c9h("nm.d"), b8h, K9B;
    F9w.Rk4o = NEJ.C();
    b8h = F9w.Rk4o.O9F(H9y.cy0x);
    b8h.cl0x = function () {
        this.cr0x();
        this.o9f = a8i.z9q("g-topbar");
        var j9a = a8i.I9z(this.o9f, "j-tflag");
        this.blo7h = j9a[0];
        this.BG9x = j9a[1];
        this.bAM0x = j9a[2];
        this.blq7j = j9a[3];
        this.cnd0x = H9y.ob4f.B9s({list: this.blo7h.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bls7l = H9y.ob4f.B9s({list: this.blq7j.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bT0x([[this.o9f, "click", this.Rh4l.g9d(this)], [this.BG9x, "click", this.cw0x.g9d(this)], [this.BG9x, "mouseout", this.bAZ0x.g9d(this, 0)], [this.BG9x, "mouseover", this.bAZ0x.g9d(this, 1)]]);
        window.scrollTopbar = this.cna0x.g9d(this);
        window.matchNav = this.bBl0x.g9d(this);
        window.polling = this.tL7E.g9d(this);
        this.blz7s = p9g.AQ9H.B9s();
        this.cmZ0x();
        this.Gq1x();
        var bw0x = k9b.hq2x(location.href.split("?")[1]) || {};
        if (bw0x.market) {
            a8i.z9q("topbar-download-link").href = "/download?market=" + bw0x.market
        }
        var blD7w = a8i.I9z(this.o9f, "j-showoff");
        if (blD7w && !this.blz7s.bla7T("newMvSearch")) {
            a8i.w9n(blD7w[0], "f-hide");
            window.setTimeout(function () {
                a8i.y9p(blD7w[0], "f-hide")
            }, 5e3)
        }
    };
    b8h.tL7E = function (d9g) {
        var dG1x = l9c.HL1x();
        if (!/^\/msg/.test(dG1x)) {
            var ul7e = 0;
            ul7e += d9g.comment;
            ul7e += d9g.forward;
            ul7e += d9g.msg;
            ul7e += d9g.notice;
            if (ul7e > 0) {
                ul7e = ul7e > 99 ? "99+" : ul7e;
                this.QN4R.innerText = ul7e;
                this.ES0x.innerText = ul7e;
                a8i.w9n(this.QN4R, "f-hide");
                a8i.w9n(this.ES0x, "f-hide");
                this.Sv4z = true
            } else {
                a8i.y9p(this.QN4R, "f-hide");
                a8i.y9p(this.ES0x, "f-hide");
                this.Sv4z = false
            }
            var et1x = "/at";
            if (d9g.notice) et1x = "/notify";
            if (d9g.comment) et1x = "/comment";
            if (d9g.msg > 0) et1x = "/private";
            if (d9g.forward > 0) et1x = "/at";
            this.ES0x.parentNode.href = "/msg/#" + et1x
        } else {
            this.ES0x.parentNode.href = "javascript:;";
            a8i.y9p(this.QN4R, "f-hide");
            a8i.y9p(this.ES0x, "f-hide");
            this.Sv4z = false
        }
        var j9a = a8i.I9z(this.blo7h, "j-t");
        if (!/^\/friend/.test(dG1x)) {
            if (j9a && j9a.length) {
                a8i.Y0x(j9a[0], "display", d9g.event > 0 ? "" : "none")
            }
        } else {
            a8i.Y0x(j9a[0], "display", "none")
        }
    };
    b8h.cw0x = function (d9g) {
        var f9e = h9c.U9L(d9g, "d:action");
        if (f9e) {
            switch (a8i.u9l(f9e, "action")) {
                case"login":
                    h9c.cf0x(d9g);
                    var t9k = a8i.u9l(f9e, "type");
                    if (t9k) {
                        if (t9k == "sina" || t9k == "tencent") top.open(f9e.href); else top.login(t9k == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h9c.cf0x(d9g);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.blz7s.bla7T("storeNew")) {
                        a8i.y9p(this.cuN1x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.blz7s.bla7T("levelNew")) {
                        a8i.y9p(this.cuO1x, "f-vhide")
                    }
                    break
            }
        }
    };
    b8h.Rh4l = function (d9g) {
        var f9e = h9c.U9L(d9g, "d:action");
        if (!f9e) return;
        var W9N = a8i.u9l(f9e, "action");
        switch (W9N) {
            case"bilog":
                var blH7A = a8i.u9l(f9e, "logAction"), blI7B = a8i.u9l(f9e, "logJson");
                window.log(blH7A, blI7B);
                break
        }
    };
    b8h.bAZ0x = function (xo8g, d9g) {
        if (this.blK7D) {
            this.blK7D.style.display = !xo8g ? "none" : "";
            (xo8g || !this.Sv4z ? a8i.y9p : a8i.w9n).call(window, this.QN4R, "f-hide")
        }
    };
    b8h.cna0x = function (fS2x) {
        a8i.Y0x(this.o9f, "top", -fS2x + "px")
    };
    b8h.bBl0x = function (et1x, cmW0x) {
        this.cnd0x.nZ4d(et1x);
        if (et1x == "discover") {
            a8i.y9p(this.bAM0x, "f-hide");
            a8i.w9n(this.blq7j, "f-hide");
            window.g_topBarHeight = 105;
            this.bls7l.nZ4d(cmW0x)
        } else {
            a8i.w9n(this.bAM0x, "f-hide");
            a8i.y9p(this.blq7j, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b8h.cmZ0x = function () {
        var uF7y = a8i.z9q("g_iframe");
        if (!uF7y) return;
        var gl2x = uF7y.contentWindow.document.getElementById("g_top");
        this.bBl0x(a8i.u9l(gl2x, "module"), a8i.u9l(gl2x, "sub"))
    };
    var RW4a = {}, bBR1x = /\/\/\w+/, cmV0x = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bBR1x, "") !== b.replace(bBR1x, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b8h.cmU0x = function (RS4W) {
        var mN4R = k9b.cU0x(cmV0x, function (A9r, J9A) {
            if (k9b.fY2x(A9r)) {
                return A9r(RS4W[J9A], RW4a[J9A])
            } else {
                return RS4W[J9A] !== RW4a[J9A]
            }
        });
        RW4a = RS4W;
        return RS4W[mN4R]
    };
    b8h.Gq1x = function () {
        var dj1x = GUser || {}, cmT0x = GUserAcc || {};
        if (dj1x && dj1x.userId) {
            var bCd1x = NEJ.X(dj1x, cmT0x);
            if (this.cmU0x(bCd1x)) {
                a8i.dK1x(this.BG9x, "m-topbar-user-login", bCd1x)
            }
        } else {
            RW4a = {};
            this.BG9x.innerHTML = a8i.hY2x("m-topbar-user-unlogin");
            var j9a = a8i.I9z(this.blo7h, "j-t");
            a8i.Y0x(j9a[0], "display", "none")
        }
        a8i.w9n(this.BG9x, "f-hide");
        this.Sv4z = false;
        var j9a = a8i.I9z(this.BG9x, "j-uflag");
        if (dj1x && dj1x.userId) {
            this.QN4R = j9a.shift();
            this.blK7D = j9a.shift();
            this.ES0x = j9a.shift()
        } else {
            this.blK7D = j9a.shift()
        }
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), H9y = c9h("nej.ut"), p9g = c9h("nm.d"), b8h, K9B;
    p9g.eP1x({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (P9G) {
                h9c.x9o(p9g.sp5u, "message", P9G)
            }
        }
    });
    p9g.sp5u = NEJ.C();
    b8h = p9g.sp5u.O9F(p9g.gW2x);
    b8h.RK4O = function () {
        this.ck0x("polling-get", {})
    };
    b8h.ue7X = function () {
        var eU1x;
        return function () {
            if (!!eU1x) return;
            eU1x = window.setInterval(this.RK4O.g9d(this), 1e5);
            this.RK4O()
        }
    }();
    H9y.fv1x.B9s({event: "message", element: p9g.sp5u})
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
            WebSocket.RJ4N(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.RJ4N(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.PX3x.length = 0;
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
                    WebSocket.blS7L();
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
            self.gy2x = WebSocket.cmS0x++;
            WebSocket.bCr1x[self.gy2x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kW3x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.RJ4N(function () {
                    WebSocket.oq4u.create(self.gy2x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oq4u.send(this.gy2x, encodeURIComponent(data));
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
            WebSocket.oq4u.close(this.gy2x)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.kW3x)) {
                this.kW3x[type] = []
            }
            this.kW3x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.kW3x)) return;
            var events = this.kW3x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.kW3x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cmR0x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bCw1x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bCw1x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cmQ0x("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bCw1x = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.cmQ0x = function (type, data) {
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
        WebSocket.oq4u = null;
        WebSocket.bCr1x = {};
        WebSocket.PX3x = [];
        WebSocket.cmS0x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.RJ4N(function () {
                WebSocket.oq4u.loadManualPolicyFile(url)
            })
        };
        WebSocket.blS7L = function () {
            if (WebSocket.oq4u) return;
            if (WebSocket.cmP0x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cmP0x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cmO0x()) {
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
        WebSocket.cuP1x = function () {
            setTimeout(function () {
                WebSocket.oq4u = document.getElementById("webSocketFlash");
                WebSocket.oq4u.setCallerUrl(location.href);
                WebSocket.oq4u.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.PX3x.length; ++i) {
                    WebSocket.PX3x[i]()
                }
                WebSocket.PX3x = []
            }, 0)
        };
        WebSocket.cuQ1x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oq4u.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bCr1x[events[i].webSocketId].cmR0x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cuR1x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dw1x = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.RJ4N = function (task) {
            if (WebSocket.oq4u) {
                task()
            } else {
                WebSocket.PX3x.push(task)
            }
        };
        WebSocket.cmO0x = function () {
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
                    WebSocket.blS7L()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.blS7L()
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
        if (!this.dE1x) this.dE1x = {};
        this.bCL1x = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dE1x || !this.dE1x.error || isArray(this.dE1x.error) && !this.dE1x.error.length) {
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
        if (!this.dE1x) return false;
        var handler = this.dE1x[type];
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
        if (!this.dE1x) this.dE1x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dE1x[type]) {
            this.dE1x[type] = listener
        } else if (isArray(this.dE1x[type])) {
            this.dE1x[type].push(listener)
        } else {
            this.dE1x[type] = [this.dE1x[type], listener]
        }
        if (isArray(this.dE1x[type]) && !this.dE1x[type].warned) {
            var m;
            if (this.bCL1x !== undefined) {
                m = this.bCL1x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dE1x[type].length > m) {
                this.dE1x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dE1x[type].length);
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
        if (!this.dE1x || !this.dE1x[type]) return this;
        var list = this.dE1x[type];
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
            delete this.dE1x[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dE1x = {};
            return this
        }
        var events = this.dE1x && this.dE1x[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dE1x[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dE1x) this.dE1x = {};
        if (!this.dE1x[type]) this.dE1x[type] = [];
        if (!isArray(this.dE1x[type])) {
            this.dE1x[type] = [this.dE1x[type]]
        }
        return this.dE1x[type]
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
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        l9c = c9h("nm.x"), di1x = c9h("nm.u"), p9g = c9h("nm.d"), PO3x = c9h("pomelo"), do1x = 0, b8h, K9B;
    p9g.eP1x({
        "polling-init": {
            url: "/api/push/init", format: function (P9G) {
                do1x = 2;
                var sk5p = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, i9b = P9G.account || X0x, cW1x = GUser.userId;
                PO3x.init(sk5p.host, sk5p.port, true, this.cmI0x.g9d(this, {
                    user: cW1x,
                    nonce: i9b.nonce,
                    domain: sk5p.domain,
                    productKey: sk5p.key,
                    signature: i9b.signature,
                    expire_time: i9b.expireTime
                }))
            }, onerror: function () {
                return this.bmc7V()
            }
        }
    });
    p9g.yX9O = NEJ.C();
    b8h = p9g.yX9O.O9F(p9g.gW2x);
    b8h.cl0x = function () {
        var pQ4U = !1;
        return function (e9f) {
            if (!pQ4U) {
                pQ4U = !0
            }
            this.cr0x(e9f);
            PO3x.on("specify", this.qA5F.g9d(this));
            PO3x.on("broadcast", this.qA5F.g9d(this))
        }
    }();
    b8h.qA5F = function (d9g) {
        k9b.be0x(d9g, function (bF0x) {
            h9c.x9o(p9g.yX9O, "message", bF0x)
        }, this)
    };
    b8h.bmc7V = function () {
        var bz0x = 500;
        return function () {
            do1x = 0;
            PO3x.disconnect();
            if (bz0x > 6e4) bz0x = 500;
            bz0x *= 2
        }
    }();
    b8h.cmI0x = function (e9f, bQ0x) {
        if (!!bQ0x) {
            return this.bmc7V()
        }
        do1x = 3;
        PO3x.registerAndBind(e9f, function (m9d) {
            if (m9d.code != 200) {
                return this.bmc7V()
            }
            do1x = 4
        }.g9d(this))
    };
    b8h.cuS1x = function () {
        di1x.cmF0x.fW2x().cuT1x()
    };
    b8h.cuU1x = function () {
        di1x.cmF0x.fW2x().cuV1x()
    };
    b8h.bmg7Z = function () {
        var pQ4U = !1;
        return function () {
            if (pQ4U) return;
            pQ4U = !0;
            this.ck0x("polling-init", {})
        }
    }();
    H9y.fv1x.B9s({event: "message", element: p9g.yX9O})
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"), cP0x = c9h("nej.p"),
        k9b = c9h("nej.u"), n9e = c9h("nm.l"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), dh1x = c9h("api"), b8h, K9B;
    var gh2x = a8i.ie2x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n9e.bmh7a = NEJ.C();
    b8h = n9e.bmh7a.O9F(n9e.dW1x);
    K9B = n9e.bmh7a.ch0x;
    b8h.bk0x = function (e9f) {
        e9f.title = "意见反馈";
        this.bl0x(e9f)
    };
    b8h.bZ0x = function () {
        this.ca0x = gh2x
    };
    b8h.bR0x = function () {
        this.cb0x();
        this.gK2x = {};
        var Gf1x = a8i.I9z;
        var CS0x = h9c.s9j;
        this.gK2x.submit_btn = Gf1x(this.o9f, "u-btn2")[0];
        this.gK2x.cancle_btn = Gf1x(this.o9f, "u-btn2")[1];
        this.gK2x.prompt_msg = Gf1x(this.o9f, "u-err")[0];
        this.gK2x.zs = Gf1x(this.o9f, "zs")[0];
        a8i.Y0x(this.gK2x.zs, "display", "none");
        this.gK2x.fb_txt = Gf1x(this.o9f, "u-txt")[0];
        this.gK2x.contact = Gf1x(this.o9f, "u-txt")[1];
        a8i.fI1x(this.gK2x.fb_txt, "holder");
        a8i.fI1x(this.gK2x.contact, "holder");
        if (a8i.bB0x(this.gK2x.fb_txt.parentNode, "holder-parent")) {
            a8i.Y0x(this.gK2x.fb_txt.parentNode, "display", "block")
        }
        if (a8i.bB0x(this.gK2x.contact.parentNode, "holder-parent")) {
            a8i.Y0x(this.gK2x.contact.parentNode, "display", "block")
        }
        CS0x(this.gK2x.submit_btn, "click", this.cmB0x.g9d(this));
        CS0x(this.gK2x.cancle_btn, "click", this.cmA0x.g9d(this));
        CS0x(this.gK2x.prompt_msg, "msgShow", this.cmz0x.g9d(this));
        CS0x(this.gK2x.fb_txt, "keyup", this.ty6s.g9d(this));
        CS0x(this.gK2x.fb_txt, "input", this.fo1x.g9d(this));
        CS0x(this.gK2x.contact, "keyup", this.bOi3x.g9d(this));
        CS0x(this.gK2x.contact, "input", this.bEe1x.g9d(this));
        this.kF3x = p9g.hQ2x.B9s()
    };
    b8h.cmB0x = function (d9g) {
        h9c.bh0x(d9g);
        if (this.cv0x()) return;
        var bi0x = this.gK2x.fb_txt.value.trim();
        var bp0x = bi0x.length;
        var e9f = {type: "json", method: "post", noEnc: true};
        var bEq1x = this.gK2x.contact.value.trim();
        var ZH3x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l9c.bgD6x(),
            contact: bEq1x
        };
        var i9b = {content: bi0x, client: "web", xInfo: JSON.stringify(ZH3x)}, mY4c = this.kF3x.crI1x();
        if (mY4c && mY4c.length) {
            i9b.log = mY4c.join("\n")
        }
        if (bp0x == 0) {
            this.gK2x.prompt_msg.innerHTML = "反馈内容不能为空";
            a8i.Y0x(this.gK2x.prompt_msg, "display", "block");
            return
        }
        if (bEq1x.length > 100) {
            this.gK2x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a8i.Y0x(this.gK2x.prompt_msg, "display", "block");
            return
        }
        this.cv0x(true);
        e9f.data = k9b.dd1x(i9b);
        e9f.onload = this.cmt0x.g9d(this);
        e9f.onerror = this.hU2x.g9d(this);
        v9m.br0x("/api/feedback/web", e9f)
    };
    b8h.fo1x = function (d9g) {
        var bp0x = this.gK2x.fb_txt.value.trim().length;
        if (bp0x > 0) a8i.Y0x(this.gK2x.prompt_msg, "display", "none");
        cP0x.cS0x.browser == "ie" && cP0x.cS0x.version < "7.0" ? setTimeout(this.fE1x.g9d(this), 0) : this.fE1x()
    };
    b8h.ty6s = function (d9g) {
        if (d9g.keyCode === 8) this.fE1x()
    };
    b8h.fE1x = function () {
        var bp0x = this.gK2x.fb_txt.value.trim().length;
        this.gK2x.zs.innerHTML = !bp0x ? "0/140" : bp0x + "/140"
    };
    b8h.bEe1x = function (d9g) {
        var bp0x = this.gK2x.contact.value.trim().length;
        if (bp0x > 0) a8i.Y0x(this.gK2x.prompt_msg, "display", "none")
    };
    b8h.bOi3x = function (d9g) {
        if (d9g.keyCode === 8) this.bEe1x()
    };
    b8h.cmA0x = function (d9g) {
        h9c.cf0x(d9g);
        this.bq0x()
    };
    b8h.cmz0x = function (d9g) {
        var f9e = h9c.U9L(d9g);
        f9e.innerHTML = "请输入反馈内容"
    };
    b8h.cuW1x = function (cuX1x) {
        var f9e = h9c.U9L(d9g);
        f9e.innerHTML = ""
    };
    b8h.cmt0x = function (m9d) {
        this.cv0x(false);
        this.bq0x();
        n9e.Z0x.N9E({tip: "意见发送成功", autoclose: true})
    };
    b8h.hU2x = function (m9d) {
        this.cv0x(false);
        n9e.Z0x.N9E({tip: "意见发送失败", autoclose: true})
    };
    b8h.cv0x = function (cF0x) {
        return this.dM1x(this.gK2x.submit_btn, cF0x, "发送意见", "发送中...")
    };
    b8h.N9E = function () {
        K9B.N9E.call(this);
        this.cv0x(false);
        this.gK2x.fb_txt.value = "";
        this.gK2x.contact.value = "";
        a8i.Y0x(this.gK2x.prompt_msg, "display", "none");
        this.fE1x()
    };
    l9c.cmq9h = function (e9f) {
        e9f = e9f || {};
        if (e9f.title === undefined) e9f.title = "意见反馈";
        n9e.bmh7a.N9E(e9f)
    };
    dh1x.feedback = l9c.feedback = l9c.cmq9h
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, M9D = c9h("nej.ui"), b8h;
    if (!!M9D.wd7W) return;
    M9D.wd7W = NEJ.C();
    b8h = M9D.wd7W.O9F(M9D.eo1x);
    b8h.cl0x = function () {
        this.gy2x = this.bEM1x();
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.cn0x = e9f.index;
        this.fQ2x = e9f.total;
        this.gL2x = e9f.range;
        this.fR2x(e9f.data)
    };
    b8h.bE0x = function () {
        this.bH0x();
        delete this.ba0x;
        delete this.cn0x;
        delete this.fQ2x;
        delete this.gL2x
    };
    b8h.hk2x = bn0x;
    b8h.bEM1x = function () {
        var gb2x = +(new Date);
        return function () {
            return "itm-" + ++gb2x
        }
    }();
    b8h.Cn0x = function () {
        return this.gy2x
    };
    b8h.hh2x = function () {
        return this.ba0x
    };
    b8h.fR2x = function (i9b) {
        this.ba0x = i9b || {};
        this.hk2x(this.ba0x)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), M9D = c9h("nej.ui"), b8h, K9B;
    if (!!M9D.sb5g) return;
    M9D.sb5g = NEJ.C();
    b8h = M9D.sb5g.O9F(M9D.wd7W);
    K9B = M9D.sb5g.ch0x;
    b8h.bk0x = function (e9f) {
        this.cmp9g = e9f.pkey || "id";
        this.bl0x(e9f)
    };
    b8h.Dp0x = function (i9b) {
        this.x9o("ondelete", {ext: i9b, id: this.Cn0x(), data: this.hh2x(), body: this.ko3x()})
    };
    b8h.OQ3x = function (i9b) {
        this.x9o("onupdate", {ext: i9b, id: this.Cn0x(), data: this.hh2x(), body: this.ko3x()})
    };
    b8h.fR2x = function (i9b) {
        K9B.fR2x.apply(this, arguments);
        this.gy2x = this.ba0x[this.cmp9g] || this.bEM1x()
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, fc1x = NEJ.R, a8i = c9h("nej.e"), k9b = c9h("nej.u"), M9D = c9h("nej.ui"), b8h, hX2x,
        bms7l;
    if (!!M9D.bmt7m) return;
    M9D.bmt7m = NEJ.C();
    b8h = M9D.bmt7m.O9F(M9D.eo1x);
    b8h.bk0x = function (e9f) {
        this.Zd3x = NEJ.X({}, e9f);
        this.fz1x = NEJ.X({}, e9f);
        delete this.Zd3x.onchange;
        this.fz1x.onchange = this.ge2x.g9d(this);
        this.bl0x(e9f);
        this.cmo9f({number: e9f.number, label: e9f.label || X0x})
    };
    b8h.bE0x = function () {
        this.bH0x();
        if (!!this.jZ3x) {
            this.jZ3x.S9J();
            delete this.jZ3x
        }
        delete this.Zd3x;
        delete this.fz1x;
        this.cmn9e();
        this.o9f.innerHTML = "&nbsp;"
    };
    b8h.bZ0x = function () {
        this.kT3x = hX2x
    };
    b8h.cmo9f = function (i9b) {
        a8i.dK1x(this.o9f, bms7l, i9b);
        var gb2x = a8i.If1x();
        this.fz1x.list = a8i.I9z(this.o9f, "js-i-" + gb2x);
        this.fz1x.pbtn = (a8i.I9z(this.o9f, "js-p-" + gb2x) || fc1x)[0];
        this.fz1x.nbtn = (a8i.I9z(this.o9f, "js-n-" + gb2x) || fc1x)[0]
    };
    b8h.bR0x = function () {
        this.cb0x()
    };
    b8h.cuY1x = function (i9b) {
        return a8i.bP0x(bms7l, i9b)
    };
    b8h.ge2x = function (d9g) {
        if (this.Or3x) return;
        var r9i = d9g.index, cp0x = d9g.total;
        this.Or3x = !0;
        this.Ol3x(r9i, cp0x);
        k9b.be0x(this.Yo2x, function (rS5X) {
            rS5X.Ol3x(r9i, cp0x)
        });
        this.Or3x = !1;
        this.x9o("onchange", d9g)
    };
    b8h.g9d = function (bD0x) {
        bD0x = a8i.z9q(bD0x);
        if (!bD0x) return this;
        var cm0x = NEJ.X({}, this.Zd3x);
        cm0x.parent = bD0x;
        cm0x.index = this.rR5W();
        cm0x.total = this.jA3x();
        var rS5X = this.constructor.B9s(cm0x);
        rS5X.vk7d("onchange", this.fz1x.onchange);
        if (!this.Yo2x) this.Yo2x = [];
        this.Yo2x.push(rS5X);
        return this
    };
    b8h.cmn9e = function () {
        var bcB5G = function (rS5X, r9i, j9a) {
            rS5X.S9J();
            j9a.splice(r9i, 1)
        };
        return function () {
            k9b.mq3x(this.Yo2x, bcB5G)
        }
    }();
    b8h.jP3x = function (r9i) {
        if (!this.jZ3x) return;
        this.jZ3x.jP3x(r9i)
    };
    b8h.rR5W = function () {
        if (!this.jZ3x) return 1;
        return this.jZ3x.rR5W()
    };
    b8h.jA3x = function () {
        if (!this.jZ3x) return 1;
        return this.jZ3x.jA3x()
    };
    b8h.Ol3x = function (r9i, cp0x) {
        if (!this.jZ3x) return;
        this.jZ3x.Ol3x(r9i, cp0x)
    };
    b8h.bmz7s = function (cp0x) {
        if (!this.jZ3x) return;
        this.jZ3x.bmz7s(cp0x)
    };
    hX2x = a8i.rX5c(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bms7l = a8i.em1x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        M9D = c9h("nej.ut"), b8h;
    if (!!M9D.XW2x) return;
    M9D.XW2x = NEJ.C();
    b8h = M9D.XW2x.O9F(M9D.cy0x);
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.Xx2x = e9f.pbtn;
        this.ce0x = e9f.nbtn;
        this.Xq2x = e9f.sbtn;
        this.Xp2x = e9f.ebtn;
        this.ih2x = e9f.event || "click";
        this.jL3x = e9f.selected || "js-selected";
        this.mJ4N = e9f.disabled || "js-disabled";
        this.cml9c(e9f.list);
        this.Ol3x(e9f.index || 1, e9f.total || 1)
    };
    b8h.bE0x = function () {
        this.bH0x();
        delete this.bV0x;
        delete this.ih2x;
        delete this.Xx2x;
        delete this.ce0x;
        delete this.Xq2x;
        delete this.Xp2x;
        delete this.bHl2x;
        delete this.fQ2x;
        delete this.cn0x;
        delete this.jL3x;
        delete this.mJ4N
    };
    b8h.cml9c = function () {
        var bmE7x = function (f9e) {
            this.bV0x.push(f9e);
            this.bT0x([[f9e, this.ih2x, this.cG0x.dT1x(this, 0)]])
        };
        return function (j9a) {
            this.bV0x = [];
            this.bT0x([[this.Xx2x, "click", this.cG0x.dT1x(this, -1)], [this.ce0x, "click", this.cG0x.dT1x(this, 1)], [this.Xq2x, "click", this.cG0x.dT1x(this, -2)], [this.Xp2x, "click", this.cG0x.dT1x(this, 2)]]);
            k9b.be0x(j9a, bmE7x, this)
        }
    }();
    b8h.DT0x = function (f9e, r9i) {
        if (r9i == null) {
            f9e.innerText = "";
            a8i.Y0x(f9e, "display", "none");
            a8i.w9n(f9e, this.jL3x)
        } else {
            f9e.innerText = r9i;
            a8i.Y0x(f9e, "display", "");
            r9i == this.cn0x ? a8i.y9p(f9e, this.jL3x) : a8i.w9n(f9e, this.jL3x)
        }
    };
    b8h.bmG7z = function () {
        if (this.cn0x <= 1) {
            a8i.y9p(this.Xx2x, this.mJ4N);
            a8i.y9p(this.Xq2x, this.mJ4N)
        } else {
            a8i.w9n(this.Xx2x, this.mJ4N);
            a8i.w9n(this.Xq2x, this.mJ4N)
        }
        if (this.cn0x >= this.fQ2x) {
            a8i.y9p(this.ce0x, this.mJ4N);
            a8i.y9p(this.Xp2x, this.mJ4N)
        } else {
            a8i.w9n(this.ce0x, this.mJ4N);
            a8i.w9n(this.Xp2x, this.mJ4N)
        }
    };
    b8h.WV2x = bn0x;
    b8h.bmL7E = function () {
        this.WV2x();
        this.bmG7z();
        this.x9o("onchange", {last: this.bHl2x, total: this.fQ2x, index: this.cn0x, ext: this.bmO7H})
    };
    b8h.bIl2x = function (r9i) {
        r9i = parseInt(r9i);
        if (isNaN(r9i) || this.fQ2x == null) return !1;
        r9i = Math.max(1, Math.min(r9i, this.fQ2x));
        this.bHl2x = this.cn0x;
        this.cn0x = r9i;
        return !0
    };
    b8h.bmQ7J = function (cp0x) {
        cp0x = parseInt(cp0x);
        if (isNaN(cp0x) || cp0x < 1) return !1;
        this.fQ2x = cp0x;
        return !0
    };
    b8h.cG0x = function (d9g, ew1x) {
        h9c.cf0x(d9g);
        var E9v = h9c.U9L(d9g);
        if (!E9v || a8i.bB0x(E9v, this.jL3x) || a8i.bB0x(E9v, this.mJ4N)) return;
        var r9i = E9v.innerText;
        switch (ew1x) {
            case 1:
            case-1:
                r9i = this.cn0x + ew1x;
                break;
            case 2:
                r9i = this.fQ2x;
                break;
            case-2:
                r9i = 1;
                break
        }
        this.jP3x(r9i)
    };
    b8h.rR5W = function () {
        return this.cn0x
    };
    b8h.jP3x = function (r9i) {
        var cmk9b = this.cn0x;
        this.bIl2x(r9i);
        if (cmk9b != this.cn0x) this.bmL7E();
        return this
    };
    b8h.jA3x = function () {
        return this.fQ2x
    };
    b8h.Pr3x = function (cp0x) {
        if (this.bmQ7J(cp0x) && this.cn0x != null) {
            this.cn0x = 1;
            this.bmL7E()
        }
        return this
    };
    b8h.bmz7s = function (cp0x) {
        if (this.bmQ7J(cp0x)) {
            this.WV2x();
            this.bmG7z()
        }
        return this
    };
    b8h.Ol3x = function (r9i, cp0x) {
        if (!this.bmQ7J(cp0x) || !this.bIl2x(r9i)) return this;
        this.bmL7E();
        return this
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), cN0x = c9h("nej.x"), M9D = c9h("nej.ut"), b8h;
    if (!!M9D.NN3x) return;
    M9D.NN3x = NEJ.C();
    b8h = M9D.NN3x.O9F(M9D.XW2x);
    b8h.cl0x = function () {
        this.cr0x();
        var f9e = a8i.cT0x("span", "zdot");
        f9e.innerText = "...";
        this.WE2x = [f9e.cloneNode(true), f9e]
    };
    b8h.bE0x = function () {
        this.bH0x();
        this.bIO2x()
    };
    b8h.bIO2x = function () {
        a8i.mm3x(this.WE2x[0]);
        a8i.mm3x(this.WE2x[1])
    };
    b8h.WV2x = function () {
        this.bmO7H = {last: !1, first: !1, list: this.bV0x};
        this.bIO2x();
        this.DT0x(this.bV0x[0], 1);
        var bG0x = 1, bp0x = this.bV0x.length;
        if (this.fQ2x < bp0x) {
            for (var ps4w; bG0x < bp0x; bG0x++) {
                ps4w = bG0x + 1;
                this.DT0x(this.bV0x[bG0x], ps4w > this.fQ2x ? null : ps4w)
            }
            return
        }
        if (this.cn0x > 1) {
            var ct0x = Math.floor((bp0x - 2) / 2), cmj9a = this.fQ2x - bp0x + 2, iD2x = Math.max(2, this.cn0x - ct0x);
            if (this.fQ2x >= bp0x) {
                iD2x = Math.min(iD2x, cmj9a)
            }
            if (iD2x > 2) {
                this.bV0x[0].insertAdjacentElement("afterEnd", this.WE2x[0]);
                this.bmO7H.first = !0
            }
            for (var r9i; ; bG0x++) {
                r9i = iD2x + bG0x - 1;
                if (r9i > this.cn0x) break;
                this.DT0x(this.bV0x[bG0x], r9i)
            }
        }
        if (this.cn0x < this.fQ2x) {
            var r9i, iD2x = this.cn0x + 1;
            for (var i = 0, l = bp0x - 2; ; i++, bG0x++) {
                r9i = iD2x + i;
                if (bG0x > l || r9i > this.fQ2x) break;
                this.DT0x(this.bV0x[bG0x], r9i)
            }
            if (r9i < this.fQ2x) {
                this.bV0x[bG0x].insertAdjacentElement("beforeBegin", this.WE2x[1]);
                this.bmO7H.last = !0
            }
            if (r9i <= this.fQ2x) {
                this.DT0x(this.bV0x[bG0x++], this.fQ2x)
            }
        }
        for (; bG0x < bp0x; bG0x++) {
            this.DT0x(this.bV0x[bG0x])
        }
    };
    a8i.cmf9W = cN0x.cmf9W = function (bD0x, e9f) {
        var C9t = a8i.kH3x(bD0x);
        if (!C9t) return null;
        if (!M9D.Xz2x(C9t, M9D.NN3x)) {
            e9f = e9f || {};
            var j9a = !e9f.clazz ? a8i.cQ0x(C9t) : a8i.I9z(C9t, e9f.clazz);
            e9f.pbtn = j9a.shift();
            e9f.nbtn = j9a.pop();
            e9f.list = j9a;
            delete e9f.clazz
        }
        return M9D.Xz2x(C9t, M9D.NN3x, e9f || X0x)
    };
    cN0x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, fc1x = NEJ.R, a8i = c9h("nej.e"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        M9D = c9h("nej.ui"), b8h, K9B, gh2x;
    if (!!M9D.NF3x) return;
    M9D.NF3x = NEJ.C();
    b8h = M9D.NF3x.O9F(M9D.bmt7m);
    K9B = M9D.NF3x.ch0x;
    b8h.bk0x = function (e9f) {
        e9f.number = parseInt(e9f.number) || 9;
        this.bl0x(e9f);
        this.jZ3x = H9y.NN3x.B9s(this.fz1x)
    };
    b8h.ge2x = function (d9g) {
        if (!!this.Zd3x.noend) {
            var bJa2x = d9g.ext || X0x, j9a = bJa2x.list || fc1x;
            if (bJa2x.last) {
                a8i.Y0x(j9a[j9a.length - 1], "display", "none")
            }
        }
        K9B.ge2x.apply(this, arguments)
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        bd0x = c9h("nej.ui"), M9D = c9h("nej.ut"), b8h;
    if (!!M9D.VM2x) return;
    M9D.VM2x = NEJ.C();
    b8h = M9D.VM2x.O9F(M9D.cy0x);
    b8h.bk0x = function (e9f) {
        this.iv2x = {};
        this.bl0x(e9f);
        this.if2x = a8i.z9q(e9f.parent);
        this.eN1x = {parent: this.if2x};
        this.qK5P = parseInt(e9f.limit) || 10;
        this.wU8M = parseInt(e9f.first) || this.qK5P;
        this.cme9V(e9f.item);
        this.cmd9U(e9f.cache || X0x);
        this.cmc9T(e9f.pager || X0x);
        this.fR2x()
    };
    b8h.bE0x = function () {
        this.x9o("onbeforerecycle");
        this.Nn3x();
        this.bH0x();
        if (this.iv2x.clear) {
            this.R9I.tY7R(this.iv2x.key)
        }
        this.R9I.S9J();
        if (!!this.iz2x) {
            this.iz2x.S9J();
            delete this.iz2x
        }
        delete this.bJT2x;
        delete this.fz1x;
        delete this.Vs2x;
        delete this.R9I;
        delete this.if2x;
        delete this.Ni3x;
        delete this.eN1x;
        delete this.iv2x
    };
    b8h.bKb2x = function () {
        var cO0x = /\{(.*?)\}/gi, clZ9Q = function (pl4p, i9b) {
            return (pl4p || "{id}{seed}").replace(cO0x, function ($1, $2) {
                var A9r = i9b[$2];
                return A9r == null ? $1 : A9r
            })
        };
        return function (C9t) {
            var J9A = clZ9Q(this.eN1x.jstIdTempalte, {id: C9t, seed: a8i.If1x()});
            if (!this.eN1x.jstIdType) {
                return a8i.z9q(J9A)
            } else if (this.eN1x.jstIdType == 1) {
                return (a8i.I9z(this.if2x, J9A) || [])[0]
            }
        }
    }();
    b8h.yv8n = function (bG0x, bj0x, fV2x, bp0x) {
        var m9d = {index: 1, total: 1};
        if (bj0x >= bG0x) {
            m9d.index = Math.floor((bj0x - bG0x) / fV2x) + 2
        }
        if (bp0x > bG0x) {
            m9d.total = Math.ceil((bp0x - bG0x) / fV2x) + 1
        }
        return m9d
    };
    b8h.bKg2x = function (J9A) {
        delete this.Ni3x;
        this.FL1x = J9A;
        this.bT0x([[this.if2x, "click", this.clY9P.g9d(this)]])
    };
    b8h.cme9V = function (q9h) {
        if (k9b.fg1x(q9h)) {
            this.bKg2x(q9h);
            return
        }
        NEJ.X(this.eN1x, q9h);
        var dD1x = this.eN1x.klass;
        delete this.eN1x.klass;
        if (k9b.fg1x(dD1x)) {
            this.bKg2x(dD1x);
            return
        }
        delete this.FL1x;
        this.Ni3x = dD1x;
        this.eN1x.ondelete = this.x9o.g9d(this, "ondelete");
        this.eN1x.onupdate = this.x9o.g9d(this, "onupdate")
    };
    b8h.cmd9U = function (Q9H) {
        var dD1x = Q9H.klass, jq3x = NEJ.X({}, Q9H);
        this.iv2x.key = jq3x.lkey;
        this.iv2x.data = jq3x.data || {};
        this.iv2x.clear = !!jq3x.clear;
        this.eN1x.pkey = jq3x.key || "id";
        jq3x.onlistload = this.bni7b.g9d(this);
        jq3x.onpullrefresh = this.clX9O.g9d(this);
        if (!!dD1x && "onlistchange" in dD1x) {
            this.bT0x([[dD1x, "listchange", this.bnm7f.g9d(this)]])
        } else {
            jq3x.onitemadd = this.Vd2x.g9d(this);
            jq3x.onitemdelete = this.Vc2x.g9d(this);
            jq3x.onitemupdate = this.bKH3x.g9d(this)
        }
        this.R9I = (dD1x || M9D.Pz3x).B9s(jq3x);
        if (Q9H.total != null) {
            this.R9I.Pr3x(this.iv2x.key, Q9H.total)
        }
        if (!!Q9H.list) {
            this.R9I.so5t(this.iv2x.key, Q9H.list)
        }
    };
    b8h.cmc9T = function (rS5X) {
        this.bJT2x = rS5X.klass || bd0x.NF3x;
        this.fz1x = NEJ.X({}, rS5X);
        if (k9b.en1x(rS5X.parent)) {
            this.fz1x.parent = rS5X.parent[0];
            this.Nb3x = rS5X.parent.slice(1);
            if (!this.Nb3x || !this.Nb3x.length) {
                delete this.Nb3x
            }
        }
        delete this.fz1x.klass
    };
    b8h.Nn3x = function () {
        var fX2x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.x9o("onbeforelistclear", {parent: this.if2x});
            if (!!this.fh1x && this.fh1x.length > 0) {
                this.fh1x = this.Ni3x.S9J(this.fh1x);
                delete this.fh1x
            }
            if (fX2x.test(this.if2x.tagName)) {
                a8i.bBo0x(this.if2x)
            } else {
                this.if2x.innerHTML = ""
            }
        }
    }();
    b8h.bnn7g = function (UP1x) {
        if (!!this.fz1x.fixed) return;
        a8i.Y0x(this.fz1x.parent, "display", UP1x);
        k9b.be0x(this.Nb3x, function (bD0x) {
            a8i.Y0x(bD0x, "display", UP1x)
        }, this)
    };
    b8h.bnp7i = function () {
        var r9i = this.fz1x.index || 1;
        delete this.fz1x.index;
        if (!!this.iz2x) {
            r9i = this.iz2x.rR5W()
        }
        this.ys8k({last: r9i, index: r9i})
    };
    b8h.ys8k = function (d9g) {
        this.x9o("onpagechange", d9g)
    };
    b8h.bLe3x = function (bj0x) {
        this.iv2x.offset = bj0x;
        this.Wk2x()
    };
    b8h.bLf3x = function (e9f) {
        return e9f
    };
    b8h.Wk2x = function () {
        this.MU3x();
        var i9b = this.iv2x.data;
        i9b.offset = this.iv2x.offset;
        var oj4n = i9b.offset == 0;
        i9b.total = oj4n;
        this.iv2x.limit = oj4n ? this.wU8M : this.qK5P;
        i9b.limit = this.iv2x.limit;
        this.R9I.ns4w(this.bLf3x(NEJ.X({}, this.iv2x)))
    };
    b8h.bni7b = function (e9f) {
        if (e9f.key != this.iv2x.key || e9f.offset != this.iv2x.offset) return;
        this.Uc1x();
        var j9a = this.R9I.gU2x(e9f.key);
        if (!j9a || !j9a.length) {
            this.bnw7p();
            return
        }
        var fV2x = e9f.limit, bj0x = e9f.offset;
        if (this.bnx7q(j9a, bj0x, fV2x)) return;
        this.x9o("onbeforelistrender", {list: j9a, offset: bj0x, parent: this.if2x});
        if (!!this.FL1x) {
            this.eN1x.xlist = j9a;
            this.eN1x.beg = bj0x;
            this.eN1x.end = Math.min(j9a.length, bj0x + fV2x) - 1;
            this.eN1x.act = "list";
            var dy1x = a8i.bP0x(this.FL1x, this.eN1x);
            this.MN3x(dy1x)
        } else {
            this.eN1x.limit = fV2x;
            this.eN1x.offset = bj0x;
            var gx2x = a8i.AK9B(j9a, this.Ni3x, this.eN1x);
            this.MJ3x(gx2x)
        }
        this.x9o("onafterlistrender", {list: j9a, offset: bj0x, parent: this.if2x})
    };
    b8h.clX9O = function (e9f) {
        if (!this.Vs2x) return;
        delete this.Vs2x;
        this.Uc1x("onafterpullrefresh");
        this.fR2x()
    };
    b8h.bLz3x = function (r9i, cp0x) {
        if (!!this.iz2x) {
            var zS9J = this.iz2x.rR5W(), clW9N = this.iz2x.jA3x();
            if (zS9J > cp0x || cp0x != clW9N) {
                this.iz2x.S9J();
                delete this.iz2x;
                this.ys8k({last: zS9J, index: Math.min(r9i, cp0x)});
                return !0
            }
        } else {
            this.fz1x.index = r9i;
            this.fz1x.total = cp0x;
            this.iz2x = this.bJT2x.B9s(this.fz1x);
            this.iz2x.vk7d("onchange", this.ys8k.g9d(this));
            k9b.be0x(this.Nb3x, function (bD0x) {
                this.iz2x.g9d(bD0x)
            }, this)
        }
    };
    b8h.Tt4x = function () {
        var gb2x = +(new Date);
        return function (i9b) {
            var C9t = i9b[this.eN1x.pkey];
            if (!C9t) {
                i9b["dirty-data"] = !0;
                i9b[this.eN1x.pkey] = "dirty-" + gb2x++
            }
            return i9b
        }
    }();
    b8h.Ts4w = function (i9b) {
        var C9t = i9b[this.eN1x.pkey];
        if (!!i9b["dirty-data"]) {
            delete i9b["dirty-data"];
            delete i9b[this.eN1x.pkey]
        }
        return C9t
    };
    b8h.Tl4p = function () {
        var clV9M = function (jM3x, lH3x) {
            this.if2x.insertAdjacentElement(jM3x, lH3x)
        };
        return function (jM3x, i9b) {
            var Ix1x = [i9b];
            if (!!this.FL1x) {
                this.eN1x.xlist = Ix1x;
                this.eN1x.beg = 0;
                this.eN1x.end = 0;
                this.eN1x.act = "add";
                this.MN3x(a8i.bP0x(this.FL1x, this.eN1x), jM3x)
            } else {
                this.eN1x.limit = 1;
                this.eN1x.offset = 0;
                this.eN1x.parent = clV9M.g9d(this, jM3x);
                var gx2x = a8i.AK9B(Ix1x, this.Ni3x, this.eN1x);
                this.eN1x.parent = this.if2x;
                this.MJ3x(gx2x)
            }
        }
    }();
    b8h.MU3x = bn0x;
    b8h.Uc1x = function (T9K) {
        var d9g = {parent: this.if2x};
        this.x9o(T9K || "onafterlistload", d9g);
        if (!d9g.stopped) {
            a8i.mm3x(this.ci0x)
        }
    };
    b8h.bnx7q = bn0x;
    b8h.Ti4m = function (bF0x, jM3x) {
        if (k9b.fg1x(bF0x)) {
            if (!this.ci0x) this.ci0x = a8i.cT0x("div");
            this.ci0x.innerHTML = bF0x
        } else {
            this.ci0x = bF0x
        }
        this.if2x.insertAdjacentElement(jM3x || "beforeEnd", this.ci0x)
    };
    b8h.xR8J = function (T9K, kw3x, jM3x) {
        var d9g = {parent: this.if2x};
        this.x9o(T9K, d9g);
        if (!d9g.stopped) {
            this.Ti4m(d9g.value || kw3x, jM3x)
        }
    };
    b8h.bnw7p = bn0x;
    b8h.MN3x = bn0x;
    b8h.MJ3x = bn0x;
    b8h.clY9P = function () {
        var fX2x = /^(?:delete|update)$/;
        return function (d9g) {
            var f9e = h9c.U9L(d9g, "d:action");
            if (!f9e) return;
            var W9N = a8i.u9l(f9e, "action");
            if (!fX2x.test(W9N)) return;
            var C9t = a8i.u9l(f9e, "id");
            if (!C9t) return;
            var q9h = this.R9I.eg1x(C9t);
            if (!q9h) return;
            h9c.bh0x(d9g);
            this.x9o("on" + W9N, {data: q9h, id: q9h[this.eN1x.pkey], body: a8i.z9q(this.bKb2x(C9t))})
        }
    }();
    b8h.Vd2x = bn0x;
    b8h.Wi2x = function (d9g) {
        var i9b = d9g.data || {}, e9f = {data: i9b, key: this.iv2x.key, id: i9b[this.eN1x.pkey]};
        this.x9o("onbeforedelete", e9f);
        this.R9I.II1x(e9f)
    };
    b8h.Vc2x = bn0x;
    b8h.Wh2x = function (d9g) {
        var i9b = d9g.data || {}, e9f = {data: i9b, key: this.iv2x.key};
        this.x9o("onbeforeupdate", e9f);
        this.R9I.Wp2x(e9f)
    };
    b8h.bKH3x = function (d9g) {
        this.Mt2x(d9g, "onafterupdate");
        if (d9g.stopped) return;
        var C9t = d9g.data[this.eN1x.pkey];
        if (!!this.fh1x) {
            var q9h = a8i.bDC1x(C9t);
            if (!!q9h) q9h.fR2x(d9g.data)
        } else {
            var f9e = a8i.z9q(C9t + "" + a8i.If1x());
            if (!f9e) return;
            var j9a = this.R9I.gU2x(d9g.key), r9i = k9b.cU0x(j9a, d9g.data);
            if (r9i < 0) return;
            this.eN1x.list = j9a;
            this.eN1x.beg = r9i;
            this.eN1x.end = r9i;
            this.eN1x.act = "update";
            var dy1x = a8i.bP0x(this.FL1x, this.eN1x);
            f9e.insertAdjacentHTML("afterEnd", dy1x);
            a8i.cK0x(f9e)
        }
    };
    b8h.Mt2x = function (d9g, T9K) {
        var q9h = d9g.data;
        if (!q9h || q9h[this.eN1x.pkey] == null) {
            this.x9o("onerror", d9g);
            d9g.stopped = !0
        }
        if (!d9g.stopped) {
            this.x9o(T9K, d9g)
        }
    };
    b8h.bnH7A = bn0x;
    b8h.bnI7B = bn0x;
    b8h.bnm7f = function (d9g) {
        if (d9g.key != this.iv2x.key) return;
        switch (d9g.action) {
            case"add":
                this.Vd2x(d9g);
                break;
            case"delete":
                this.Vc2x(d9g);
                break;
            case"update":
                this.bKH3x(d9g);
                break;
            case"refresh":
                this.fR2x();
                break;
            case"unshift":
                this.bnI7B(d9g.offset, d9g.limit);
                break;
            case"append":
                this.bnH7A(d9g.offset, d9g.limit);
                break
        }
    };
    b8h.oM4Q = function (q9h) {
        this.Wh2x({data: q9h})
    };
    b8h.lq3x = function (q9h) {
        this.Wi2x({data: q9h})
    };
    b8h.rk5p = function (q9h) {
        this.R9I.iM2x({data: q9h, key: this.iv2x.key})
    };
    b8h.rj5o = function () {
        return this.R9I
    };
    b8h.bnL7E = function (i9b) {
        this.Tl4p("afterBegin", this.Tt4x(i9b));
        return this.Ts4w(i9b)
    };
    b8h.bMy3x = function (i9b) {
        this.Tl4p("beforeEnd", this.Tt4x(i9b));
        return this.Ts4w(i9b)
    };
    b8h.fR2x = function () {
        this.Nn3x();
        this.bnp7i()
    };
    b8h.cuZ1x = function () {
        this.R9I.tY7R(this.iv2x.key);
        this.fR2x()
    };
    b8h.bdt5y = function () {
        if (!!this.Vs2x) return;
        this.Vs2x = !0;
        this.xR8J("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R9I.bdt5y({key: this.iv2x.key, data: this.iv2x.data})
    };
    b8h.jA3x = function () {
        return this.R9I.jA3x(this.iv2x.key)
    };
    b8h.bMD3x = function () {
        return this.iz2x
    };
    b8h.WB2x = function () {
        return this.R9I.WB2x(this.iv2x.key)
    };
    b8h.clS9J = function () {
        return this.fh1x
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, fc1x = NEJ.R, k9b = c9h("nej.u"), a8i = c9h("nej.e"), M9D = c9h("nej.ut"), b8h, K9B;
    if (!!M9D.iG2x) return;
    M9D.iG2x = NEJ.C();
    b8h = M9D.iG2x.O9F(M9D.VM2x);
    K9B = M9D.iG2x.ch0x;
    b8h.yv8n = function (bj0x, bp0x) {
        return K9B.yv8n.call(this, this.wU8M, bj0x, this.qK5P, bp0x)
    };
    b8h.bnP7I = function (r9i) {
        var bj0x = 0;
        if (r9i > 1) bj0x = this.wU8M + (r9i - 2) * this.qK5P;
        return bj0x
    };
    b8h.ys8k = function (d9g) {
        K9B.ys8k.apply(this, arguments);
        if (!d9g.stopped) {
            this.bLe3x(this.bnP7I(d9g.index))
        }
    };
    b8h.MU3x = function () {
        this.Nn3x();
        this.xR8J("onbeforelistload", "列表加载中...")
    };
    b8h.Uc1x = function () {
        K9B.Uc1x.apply(this, arguments);
        this.Nn3x()
    };
    b8h.bnx7q = function (j9a, bj0x, fV2x) {
        var bt0x = this.yv8n(bj0x, j9a.length);
        if (this.bLz3x(bt0x.index, bt0x.total)) return !0;
        this.bnn7g(bt0x.total > 1 ? "" : "none")
    };
    b8h.bnw7p = function () {
        this.xR8J("onemptylist", "没有列表数据！")
    };
    b8h.Ti4m = function (bF0x, jM3x) {
        if (!jM3x && k9b.fg1x(bF0x)) {
            this.if2x.innerHTML = bF0x;
            return
        }
        K9B.Ti4m.apply(this, arguments)
    };
    b8h.MN3x = function (dy1x) {
        this.if2x.innerHTML = dy1x
    };
    b8h.MJ3x = function (gx2x) {
        this.fh1x = gx2x
    };
    b8h.Vd2x = function (d9g) {
        this.Mt2x(d9g, "onafteradd");
        if (!d9g.stopped) this.fR2x()
    };
    b8h.Vc2x = function (d9g) {
        this.Mt2x(d9g, "onafterdelete");
        if (!d9g.stopped) this.fR2x()
    };
    b8h.bnH7A = function (bj0x, fV2x) {
        var r9i = 1;
        if (!!this.iz2x) {
            r9i = this.iz2x.rR5W()
        }
        var ji3x = this.bnP7I(r9i), gE2x = ji3x + (r9i > 1 ? this.qK5P : this.wU8M);
        if (bj0x >= gE2x && !!this.iz2x) {
            var bt0x = this.yv8n(0, this.jA3x());
            this.iz2x.bmz7s(bt0x.total);
            this.bnn7g(bt0x.total > 1 ? "" : "none")
        } else {
            this.fR2x()
        }
    };
    b8h.bnI7B = function (bj0x, fV2x) {
        var r9i = 1;
        if (!!this.iz2x) {
            r9i = this.iz2x.rR5W()
        }
        var ji3x = this.bnP7I(r9i), bt0x = this.yv8n(ji3x, this.jA3x());
        this.ys8k({last: r9i, index: bt0x.index})
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), H9y = c9h("nej.ut"),
        k9b = c9h("nej.u"), l9c = c9h("nm.x"), p9g = c9h("nm.d"), D9u = c9h("nm.w"), fd1x = 40, b8h, K9B;
    D9u.Sk4o = NEJ.C();
    b8h = D9u.Sk4o.O9F(H9y.cy0x);
    K9B = D9u.Sk4o.ch0x;
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.Mj2x = e9f.inputer;
        this.bod8V = e9f.tipper;
        this.bT0x([[this.Mj2x, "input", this.fo1x.g9d(this)]])
    };
    b8h.bE0x = function () {
        this.bH0x();
        this.FE1x(null, null)
    };
    b8h.fo1x = function (d9g) {
        if (d9g && d9g.type == "keyup" && (d9g.keyCode != 8 || d9g.keyCode != 68)) return;
        var T9K = this.Mj2x.value, cvb1x;
        if (l9c.Hp1x(T9K) > fd1x) {
            this.Mj2x.value = l9c.At9k(T9K, fd1x);
            this.FE1x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g9d(this))
        } else if (T9K.indexOf("#") >= 0 || T9K.indexOf("@") >= 0) {
            this.FE1x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.FE1x(null, null);
            this.x9o("onchange", {value: T9K})
        }
    };
    b8h.clQ9H = function () {
        this.fo1x()
    };
    b8h.FE1x = function () {
        var C9t = 0;
        return function (dp1x, bNo3x) {
            if (!!C9t) window.clearTimeout(C9t);
            if (!dp1x) {
                a8i.y9p(this.bod8V, "f-vhide");
                this.bNr3x = !1;
                return
            }
            this.bod8V.innerHTML = '<i class="u-icn u-icn-25"></i>' + dp1x;
            a8i.w9n(this.bod8V, "f-vhide");
            this.bNr3x = !0;
            if (k9b.fY2x(bNo3x)) C9t = window.setTimeout(function () {
                this.FE1x(null, null);
                bNo3x()
            }.g9d(this), 1e3)
        }
    }();
    b8h.bNI3x = function () {
        if (this.bNr3x) return !1;
        if (l9c.iT2x(this.Mj2x.value)) {
            this.FE1x("歌单名不能为空");
            return !1
        }
        return !0
    };
    b8h.fs1x = function () {
        return this.Mj2x.value
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), n9e = c9h("nm.l"),
        D9u = c9h("nm.w"), bI0x = c9h("nej.ui"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), b8h, K9B;
    n9e.RN4R = NEJ.C();
    b8h = n9e.RN4R.O9F(n9e.dW1x);
    K9B = n9e.RN4R.ch0x;
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.I9z(this.o9f, "j-flag");
        this.RI4M = {inputer: j9a[0], tipper: j9a[1]};
        this.gV2x = {onerror: this.bNW3x.g9d(this), onitemadd: this.bNW3x.g9d(this)};
        this.oU4Y = j9a[2];
        h9c.s9j(j9a[2], "click", this.Bp9g.g9d(this));
        h9c.s9j(j9a[3], "click", this.yD8v.g9d(this));
        h9c.s9j(this.o9f, "keypress", this.bOb3x.g9d(this))
    };
    b8h.bZ0x = function () {
        this.ca0x = "m-wgt-create"
    };
    b8h.bk0x = function (e9f) {
        e9f.clazz = " m-layer-w2";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "新建歌单";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bl0x(e9f);
        this.RI4M.inputer.value = e9f.name || "";
        this.tu6o = D9u.Sk4o.B9s(this.RI4M);
        this.tu6o.clQ9H();
        this.R9I = p9g.hn2x.B9s(this.gV2x);
        setTimeout(function () {
            this.RI4M.inputer.focus()
        }.g9d(this), 0)
    };
    b8h.bE0x = function () {
        this.bH0x();
        if (this.tu6o) {
            this.tu6o.S9J();
            delete this.tu6o
        }
        this.rh5m(!1);
        this.RI4M.inputer.value = ""
    };
    b8h.rh5m = function (LO2x) {
        this.nS4W = LO2x;
        if (LO2x) {
            this.oU4Y.innerHTML = "<i>新建中...</i>";
            a8i.y9p(this.oU4Y, "u-btn2-dis")
        } else {
            this.oU4Y.innerHTML = "<i>新 建</i>";
            a8i.w9n(this.oU4Y, "u-btn2-dis")
        }
    };
    b8h.Bp9g = function () {
        if (this.nS4W || !this.tu6o.bNI3x()) return;
        var cm0x = {key: "playlist_new-" + GUser.userId, data: {name: this.tu6o.fs1x()}, offset: 1};
        this.R9I.iM2x(cm0x);
        this.rh5m(!0)
    };
    b8h.bNW3x = function (d9g) {
        var cc0x = (d9g.result || X0x).code;
        if (!cc0x) {
            this.x9o("onsuccess", d9g.data)
        } else {
            this.x9o("onerror", d9g)
        }
        this.bq0x()
    };
    b8h.yD8v = function () {
        this.bq0x()
    };
    b8h.bOb3x = function (d9g) {
        if (d9g.keyCode == 13) this.Bp9g()
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        H9y = c9h("nej.ut"), v9m = c9h("nej.j"), l9c = c9h("nm.x"), p9g = c9h("nm.d"), n9e = c9h("nm.l"), b8h, K9B;
    n9e.bog8Y = NEJ.C();
    b8h = n9e.bog8Y.O9F(n9e.dW1x);
    K9B = n9e.bog8Y.ch0x;
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.I9z(this.o9f, "j-flag");
        this.hP2x = {
            limit: 301,
            parent: j9a[1],
            cache: {klass: p9g.hn2x, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bok8c.g9d(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l9c.Ar9i, escape: k9b.dI1x}
        };
        this.gV2x = {onsuccess: this.bag3x.g9d(this), onerror: this.ei1x.g9d(this)};
        h9c.s9j(j9a[0], "click", this.Bp9g.g9d(this));
        h9c.s9j(j9a[1], "click", this.ly3x.g9d(this))
    };
    b8h.bZ0x = function () {
        this.ca0x = "m-wgt-subscribe"
    };
    b8h.bk0x = function (e9f) {
        e9f.parent = e9f.parent || document.body;
        e9f.clazz = " m-layer-w2";
        e9f.title = "添加到歌单";
        e9f.draggable = !0;
        e9f.mask = !0;
        this.bl0x(e9f);
        this.bad3x = (e9f.tracks || []).reverse();
        this.hP2x.item.size = this.bad3x.length;
        this.gV2x.name = e9f.name || "";
        this.bsf8X = p9g.uU7N.B9s({onaddsuccess: this.xZ8R.g9d(this)});
        this.rH5M = p9g.hn2x.B9s({onlistload: this.clP9G.g9d(this)});
        this.rH5M.brP8H();
        k9b.be0x(this.bad3x, function (q9h, r9i, j9a) {
            if (!k9b.kI3x(q9h)) {
                j9a[r9i] = this.bsf8X.eg1x(q9h) || q9h
            }
        }, this)
    };
    b8h.clP9G = function () {
        if (this.ds1x) this.ds1x.S9J();
        this.ds1x = H9y.iG2x.B9s(this.hP2x)
    };
    b8h.Bp9g = function () {
        this.bq0x();
        if (this.BD9u) this.BD9u.S9J();
        this.BD9u = n9e.RN4R.B9s(this.gV2x);
        this.BD9u.N9E()
    };
    b8h.ly3x = function () {
        var clO9F = function (f9e) {
            while (f9e && f9e != document) {
                if (f9e.tagName.toLowerCase() == "li") {
                    return f9e
                }
                f9e = f9e.parentNode
            }
        };
        return function (d9g) {
            h9c.cf0x(d9g);
            var E9v = h9c.U9L(d9g), bon8f = clO9F(E9v);
            if (!!bon8f && !a8i.bB0x(bon8f, "dis")) {
                this.bag3x({id: a8i.u9l(bon8f, "id")})
            }
        }
    }();
    b8h.bag3x = function (d9g) {
        var C9t = d9g.id;
        if (!C9t || !this.bad3x.length) return;
        this.bsf8X.iM2x({key: "track_playlist-" + C9t, data: {tracks: this.bad3x, pid: C9t}});
        this.bq0x()
    };
    b8h.xZ8R = function () {
        this.x9o("onsuccess");
        n9e.Z0x.N9E({tip: "收藏成功"})
    };
    b8h.ei1x = function (d9g) {
        this.bq0x();
        this.x9o("onerror", d9g);
        var cA0x = "收藏失败";
        switch (d9g.code) {
            case 405:
                cA0x = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cA0x = "歌单数量超过限制";
                break;
            case 502:
                cA0x = "歌曲已经存在"
        }
        n9e.Z0x.N9E({tip: cA0x, type: 2})
    };
    b8h.bok8c = function () {
        this.bq0x();
        n9e.Z0x.N9E({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l9c.lV3x = function (e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n9e.bog8Y.N9E(e9f)
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, cP0x = c9h("nej.p"), a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        v9m = c9h("nej.j"), k9b = c9h("nej.u"), l9c = c9h("nm.x");
    var boo8g, og4k, V9M = decodeURIComponent(location.href),
        jf3x = /.+(http:\/\/.+\/proxy.html)/.test(V9M) ? RegExp.$1 : "";
    if (!!jf3x) {
        v9m.uN7G("mail_proxy_url", jf3x)
    } else {
        jf3x = v9m.sF5K("mail_proxy_url") || "about:blank"
    }
    boo8g = a8i.UL1x({
        src: jf3x, onload: function () {
            og4k = true
        }
    });
    var bss8k = function () {
        v9m.gN2x("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var clN9E = function () {
        if (cP0x.cS0x.browser == "ie" && parseInt(cP0x.cS0x.version) < 9) {
            l9c.fb1x({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l9c.Lz2x = function (t9k, C9t, W9N) {
        if (!clN9E()) return;
        bss8k();
        if (W9N == "stop") {
            if (!og4k) throw"proxy not loaded";
            bss8k();
            boo8g.contentWindow.location.replace(jf3x + "#" + k9b.dd1x({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            boo8g.contentWindow.location.replace(jf3x + "#" + k9b.dd1x({
                to: "ifrmMusic",
                message: JSON.stringify({type: t9k, id: C9t, s: +(new Date), action: W9N})
            }))
        }
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        k9b = c9h("nej.u"), l9c = c9h("nm.x"), n9e = c9h("nm.l"), p9g = c9h("nm.d");
    var kF3x = p9g.hQ2x.B9s();
    var oh4l = p9g.uU7N.B9s({onlistload: clL9C, onitemload: clK9B, onerror: ei1x});
    var BL0x = p9g.oZ4d.B9s({onlistload: clJ9A, onitemload: clI9z, onerror: ei1x});
    var bsJ8B = {};

    function vo7h(d9g) {
        var f9e = h9c.U9L(d9g, "d:resAction"), W9N = a8i.u9l(f9e, "resAction");
        if (f9e && (W9N == "play" || W9N == "addto")) {
            var t9k = parseInt(a8i.u9l(f9e, "resType"));
            bsL9C({
                action: W9N,
                type: t9k,
                id: a8i.u9l(f9e, "resId"),
                from: a8i.u9l(f9e, "resFrom"),
                data: a8i.u9l(f9e, "resData"),
                order: a8i.u9l(f9e, "resOrder"),
                node: f9e
            });
            if (t9k != 13) bsP9G(f9e)
        }
    }

    function bsL9C(bN0x) {
        var W9N = bN0x.action, t9k = bN0x.type, C9t = bN0x.id, dH1x = bN0x.from, i9b = bN0x.data, sd5i = bN0x.order,
            e9f = {
                limit: 1e3,
                offset: 0,
                data: {id: C9t},
                ext: {id: C9t, action: W9N, type: t9k, from: dH1x, data: i9b, node: bN0x.node}
            };
        if (W9N != "play" && W9N != "addto" || !t9k) return;
        if (window.GRef && GRef == "mail") {
            l9c.Lz2x(t9k, C9t, W9N);
            return
        }
        switch (t9k) {
            case 13:
                e9f.key = "track_playlist-" + C9t;
                oh4l.ns4w(e9f);
                break;
            case 17:
                e9f.key = "program";
                e9f.id = C9t;
                BL0x.Wu2x(e9f);
                if (W9N == "play") {
                    v9m.br0x("/api/dj/program/listen", {query: {id: C9t}})
                }
                break;
            case 18:
                e9f.key = "track";
                e9f.id = C9t;
                oh4l.Wu2x(e9f);
                break;
            case 19:
                e9f.key = "track_album-" + C9t;
                oh4l.ns4w(e9f);
                break;
            case 24:
                e9f.key = "track_day";
                oh4l.ns4w(e9f);
                break;
            case 2:
                e9f.key = "track_artist_top-" + C9t;
                oh4l.ns4w(e9f);
                break;
            case 70:
                e9f.key = "program_djradio-" + C9t + "-" + sd5i;
                e9f.data.radioId = C9t;
                e9f.data.asc = sd5i == 2;
                BL0x.ns4w(e9f);
                break
        }
    }

    function bsQ9H(j9a) {
        var m9d = [];
        k9b.be0x(j9a, function (q9h) {
            if (q9h.mainSong) {
                q9h.mainSong.program = q9h;
                m9d.push(q9h.mainSong);
                q9h.localupdatetime = +(new Date);
                oh4l.csa1x(q9h.mainSong);
                q9h.mainTrackId = q9h.mainSong.id;
                delete q9h.mainSong
            } else {
                var bsV9M = oh4l.eg1x(q9h.mainTrackId);
                bsV9M && m9d.push(bsV9M)
            }
        });
        return m9d
    }

    function ZM3x(j9a, e9f) {
        var qT5Y = e9f.action == "play" && e9f.type != 17 && e9f.type != 18, eW1x = e9f.action == "play";
        if (!j9a.length) return;
        if (e9f.type == 19) {
            j9a = l9c.Iv1x(j9a, true, {play: true}, {source: "album", sourceid: e9f.id})
        } else {
            j9a = l9c.Iv1x(j9a, true, {play: true})
        }
        k9b.be0x(j9a, function (q9h) {
            q9h.source = l9c.bgp6j({fid: e9f.from, fdata: e9f.data, type: e9f.type, rid: e9f.id}, q9h.id)
        });
        top.player.addTo(j9a, qT5Y, eW1x);
        kF3x.OS3x({rid: e9f.id, type: e9f.type, hash: l9c.HL1x(), play: eW1x, source: e9f.from, sourceid: e9f.data})
    }

    function clL9C(d9g) {
        var ez1x = d9g.ext || {};
        j9a = oh4l.gU2x(d9g.key);
        ZM3x(j9a, ez1x);
        if (ez1x.type == 13 && ez1x.action == "play" && j9a && j9a.length > 0) {
            bsP9G(ez1x.node);
            v9m.br0x("/api/playlist/update/playcount", {query: {id: ez1x.id}})
        }
    }

    function clK9B(d9g) {
        var j9a = [oh4l.eg1x(d9g.id)], bf0x = j9a[0], pj4n = l9c.om4q(bf0x), sa5f = bf0x.privilege || {};
        if (pj4n == 10) {
            l9c.sH5M(sa5f.fee || bf0x.fee, bf0x.id, "song", null, sa5f)
        } else if (pj4n == 100) {
            l9c.hZ2x(null, null, null, true, bf0x)
        } else if (pj4n == 11) {
            l9c.bGM2x(bf0x.id, 18)
        } else {
            ZM3x(j9a, d9g.ext)
        }
    }

    function clJ9A(d9g) {
        var j9a = bsQ9H(BL0x.gU2x(d9g.key));
        ZM3x(j9a, d9g.ext)
    }

    function clI9z(d9g) {
        var j9a = bsQ9H([BL0x.eg1x(d9g.id)]);
        ZM3x(j9a, d9g.ext)
    }

    function ei1x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bsP9G(f9e) {
        var t9k = a8i.u9l(f9e, "resType"), C9t = a8i.u9l(f9e, "resId"), J9A = t9k + "-" + C9t;
        if (bsJ8B[J9A]) return;
        var btm9d = a8i.z9q("play-count"), boy8q = a8i.I9z(f9e.parentNode, "nb"), Lo2x = null;
        if (btm9d) {
            Lo2x = btm9d
        } else {
            Lo2x = !!boy8q && !!boy8q[0] ? boy8q[0] : null
        }
        if (Lo2x) {
            var ct0x = Lo2x.innerHTML;
            if (/^\d+$/.test(ct0x)) {
                Lo2x.innerText = +ct0x + 1
            }
            bsJ8B[J9A] = true
        }
    }

    l9c.clH9y = function (f9e) {
        h9c.s9j(f9e || document.body, "click", vo7h.g9d(this))
    };
    l9c.clF9w = function (W9N, t9k, C9t) {
        bsL9C({action: W9N, type: t9k, id: C9t})
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        H9y = c9h("nej.ut"), p9g = c9h("nm.d"), b8h, K9B;
    p9g.eP1x({
        "share-all": {
            url: "/api/share/friends/resource", format: function (m9d, e9f) {
                this.clE9v(m9d, e9f)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (m9d, e9f) {
                this.x9o("onshareall", e9f.result)
            }, onerror: function (m9d, e9f) {
                this.x9o("onshareall", e9f.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (m9d, e9f) {
                e9f.options.picUrl = m9d.picUrl;
                this.btM9D(e9f.options, e9f.result)
            }, onerror: function (m9d, e9f) {
                this.x9o("onshareall", e9f.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (P9G, e9f) {
                this.oB4F("vid_info-" + e9f.data.nosKey, P9G);
                return P9G
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e9f) {
            }, format: function (m9d, e9f) {
                e9f.data = e9f.data2;
                this.ck0x("share-all", e9f)
            }, onerror: "onshareerror"
        }
    });
    p9g.boN8F = NEJ.C();
    b8h = p9g.boN8F.O9F(p9g.gW2x);
    b8h.clC9t = function () {
        var ss5x = function (P9G, e9f) {
            e9f.times++;
            if (e9f.times > 10) {
                this.x9o("onvinfoerror", e9f.key, P9G)
            } else {
                setTimeout(eJ1x.g9d(this, e9f), e9f.times * 1e3)
            }
        };
        var xl8d = function (P9G, e9f) {
            this.x9o("onvinfo", e9f.key, P9G)
        };
        var eJ1x = function (e9f) {
            var V9M = e9f.url;
            v9m.br0x(V9M + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xl8d.dT1x(this, e9f),
                onerror: ss5x.dT1x(this, e9f)
            })
        };
        return function (e9f) {
            e9f.times = 0;
            eJ1x.call(this, e9f)
        }
    }();
    b8h.cvd1x = function () {
        var KX2x;
        var ss5x = function (P9G, e9f) {
            if (P9G.code > 0) {
                clearInterval(this.Cb0x);
                this.x9o("onviderror", e9f.data.nosKey)
            }
        };
        var xl8d = function (J9A, P9G) {
            if (P9G.vid && P9G.covers) {
                clearInterval(this.Cb0x);
                this.x9o("onvid", J9A, P9G)
            }
        };
        var eJ1x = function (e9f) {
            if (+(new Date) - KX2x > 60 * 60 * 1e3) {
                clearInterval(this.Cb0x);
                this.x9o("onviderror", e9f.data.nosKey);
                return
            }
            e9f.onload = xl8d.g9d(this, e9f.data.nosKey);
            e9f.onerror = ss5x.g9d(this);
            this.ck0x("vid-get", e9f)
        };
        return function (e9f) {
            if (!e9f || !e9f.data) return;
            KX2x = +(new Date);
            this.Cb0x = clearInterval(this.Cb0x);
            this.Cb0x = setInterval(eJ1x.g9d(this, e9f), 1e4);
            eJ1x.apply(this, arguments)
        }
    }();
    b8h.clA9r = function () {
        this.Cb0x = clearInterval(this.Cb0x)
    };
    b8h.clE9v = function (m9d, mF4J) {
        if (m9d.event && mF4J.snsTypes) {
            if (mF4J.pics) {
                var buf9W = [];
                for (var i = 0, len = mF4J.pics.length; i < len; i++) {
                    buf9W[i] = mF4J.pics[i].originId
                }
                this.ck0x("share_img_compound", {data: {picIds: buf9W.join(",")}, options: mF4J, result: m9d})
            } else {
                mF4J.picUrl = mF4J.picUrl;
                this.btM9D(mF4J, m9d)
            }
        } else {
            this.x9o("onshareall", m9d)
        }
        var ww8o = p9g.hQ2x.B9s();
        ww8o.gd2x(mF4J.isPub ? "pubevent" : "shareevent", {id: m9d.id})
    };
    b8h.btM9D = function (mF4J, m9d) {
        var cm0x = {};
        cm0x.eventid = m9d.event.id;
        cm0x.eventtype = m9d.event.type;
        mF4J.picUrl && (cm0x.picUrl = mF4J.picUrl);
        cm0x.snsTypes = mF4J.snsTypes;
        cm0x.msg = mF4J.data.msg || "";
        cm0x.type = mF4J.data.type;
        mF4J.data.id && (cm0x.id = mF4J.data.id);
        this.ck0x("share-sns", {data: cm0x, result: m9d})
    };
    b8h.clz9q = function (e9f) {
        var i9b = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k9b.nk4o(5)
        };
        i9b = NEJ.EX(i9b, e9f);
        if (!(i9b.id > 0)) {
            delete i9b.id;
            i9b.type = "noresource"
        }
        if (!i9b.threadId) {
            delete i9b.threadId
        }
        if (!i9b.actId) {
            delete i9b.actId
        }
        if (!i9b.pics) {
            delete i9b.pics
        } else {
            i9b.pics = JSON.stringify(i9b.pics)
        }
        this.ck0x("share-all", {
            data: i9b,
            snsTypes: e9f.snsTypes,
            picUrl: e9f.picUrl,
            pics: e9f.pics,
            isPub: e9f.isPub
        })
    };
    b8h.cly9p = function (e9f) {
        this.ck0x("share-private", e9f)
    };
    b8h.clx9o = function (e9f) {
        this.ck0x("video-submit", e9f)
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, h9c = c9h("nej.v"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        p9g = c9h("nm.d"), l9c = c9h("nm.x"), b8h, K9B;
    var clw9n = {40: !0};
    p9g.eP1x({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e9f) {
                e9f.data.getcounts = true;
                e9f.data.pagesize = e9f.data.limit;
                if (e9f.data.offset == 0) {
                    e9f.data.lasttime = -1
                }
                delete e9f.data.offset
            }, format: function (P9G, e9f) {
                P9G.event = l9c.Wt2x(P9G.event, function (q9h, r9i) {
                    return !clw9n[q9h.type]
                });
                this.clv9m(P9G.event);
                e9f.data.lasttime = P9G.lasttime;
                if (P9G.event.length) {
                    P9G.event.length = e9f.limit
                }
                return {list: P9G.event, total: P9G.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (P9G, e9f) {
                return {list: P9G.events, total: P9G.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e9f) {
                e9f.data.pagesize = 20
            }, format: function (P9G, e9f) {
                return P9G.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e9f) {
                e9f.data.time = -1;
                e9f.data.getcounts = true
            }, format: function (P9G, e9f) {
                P9G.events.length = e9f.limit;
                return {list: P9G.events, total: P9G.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (m9d, e9f) {
                m9d.conf = e9f.conf;
                return m9d
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e9f, bc0x) {
                if (e9f.like) {
                    if (e9f.comment) {
                        bc0x.url = "/api/v1/comment/like"
                    } else {
                        bc0x.url = "/api/resource/like"
                    }
                    bc0x.onload = "oneventlike";
                    bc0x.onerror = "oneventlikeerr"
                } else {
                    if (e9f.comment) {
                        bc0x.url = "/api/v1/comment/unlike"
                    } else {
                        bc0x.url = "/api/resource/unlike"
                    }
                    bc0x.onload = "oneventunlike";
                    bc0x.onerror = "oneventunlikeerr"
                }
            }, format: function (m9d, e9f) {
                m9d.eid = e9f.eid;
                m9d.origin = e9f.origin;
                m9d.ext = e9f.ext;
                return m9d
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (m9d, e9f) {
                m9d.id = e9f.data.id;
                return m9d
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e9f, bc0x) {
                if (e9f.data.type == "nointer") {
                    bc0x.url = "/api/event/rcmd/reject"
                } else if (e9f.data.transcoding) {
                    bc0x.url = "/api/event/video/transcoding/delete"
                } else {
                    bc0x.url = "/api/event/delete"
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
            }, format: function (P9G, e9f) {
                e9f.data.lasttime = P9G.lasttime;
                var j9a = P9G.events;
                if (P9G.more) j9a = this.clu9l(j9a, e9f.data.pagesize);
                return {list: j9a, total: P9G.size}
            }, onerror: "onlisterror"
        }
    });
    p9g.yz8r = NEJ.C();
    b8h = p9g.yz8r.O9F(p9g.gW2x);
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.boT8L = function (t9k, cJ0x) {
        return t9k + "-" + cJ0x
    };
    b8h.cve1x = function (e9f) {
        this.ck0x("ievent-get", e9f)
    };
    b8h.cvg1x = function (e9f) {
        this.ck0x("ievent-new-get", e9f)
    };
    b8h.cvh1x = function (e9f) {
        this.ck0x("ievent-user-get", e9f)
    };
    b8h.cvi1x = function (t9k, cJ0x) {
        return this.pY5d(this.boT8L(t9k, cJ0x))
    };
    b8h.cvj1x = function (Fw1x, e9f) {
        if (!Fw1x || !Fw1x.length) return;
        e9f = e9f || {};
        var bv0x = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, BF9w = [], buX9O = [], i9b; i < Fw1x.length; ++i) {
            i9b = Fw1x[i];
            i9b = this.pY5d(this.boT8L(i9b.type, i9b.id));
            if (!i9b) {
                BF9w.push(Fw1x[i].id);
                buX9O.push(bv0x[Fw1x[i].type] || 0)
            }
        }
        if (!BF9w.length) {
            this.x9o("oneventresload", e9f.conf);
            return
        }
        e9f.data = {ids: JSON.stringify(BF9w), types: JSON.stringify(buX9O)};
        e9f.onload = this.clo9f.g9d(this);
        this.ck0x("ievent-res-get", e9f)
    };
    b8h.clo9f = function (m9d) {
        if (m9d.code != 200) {
            this.x9o("oneventreserror", m9d.code);
            return
        }
        var bv0x = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, j9a = m9d.results; i < j9a.length; ++i) {
            this.oB4F(this.boT8L(bv0x[j9a[i].type], j9a[i].id), j9a[i])
        }
        this.x9o("oneventresload", m9d.conf)
    };
    b8h.bvf9W = function (i9b) {
        var J9A = "event-list";
        this.bdq5v(J9A, i9b);
        this.x9o("onitemadd", {key: J9A, action: "add", data: i9b, flag: -1})
    };
    b8h.uT7M = function (e9f) {
        this.ck0x("ievent-like", e9f)
    };
    b8h.lq3x = function (e9f) {
        this.ck0x("ievent-delete", e9f)
    };
    b8h.clu9l = function (j9a, fV2x) {
        for (var i = j9a.length; i < fV2x; i++) j9a.push(null);
        return j9a
    };
    b8h.clv9m = function (j9a) {
        var m9d = [];
        if (!j9a || !j9a.length) return;
        k9b.be0x(j9a, function (d9g) {
            d9g.biData = this.bvg9X(d9g)
        }, this)
    };
    b8h.bvg9X = function () {
        var Ut1x = {32: "comment", 33: "activity", 34: "recomment_artist"},
            clm9d = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d9g) {
            var P9G = {
                id: d9g.id,
                sourceid: d9g.user.userId,
                alg: d9g.rcmdInfo ? d9g.rcmdInfo.alg : null,
                contentType: Ut1x[d9g.type] || (k9b.cU0x(clm9d, d9g.type) != -1 ? "user_event" : "other")
            };
            return P9G
        }
    }();
    b8h.Cs0x = function (cll9c, d9g) {
        var P9G = this.bvg9X(d9g);
        P9G.actionType = cll9c;
        if (window.log) log("eventclick", P9G)
    };
    b8h.cvk1x = function (e9f) {
        this.ck0x("event_latest-list", e9f)
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
        this.qa5f += contents;
        this.bp0x += contents.length;
        var length = this.qa5f.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dG1x, md5blk(this.qa5f.substring(i - 64, i)))
        }
        this.qa5f = this.qa5f.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.qa5f, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.nO4S(tail, length);
        ret = hex(this.dG1x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.qa5f = "";
        this.bp0x = 0;
        this.dG1x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.qa5f, length: this.bp0x, hash: this.dG1x}
    };
    SparkMD5.prototype.setState = function (state) {
        this.qa5f = state.buff;
        this.bp0x = state.length;
        this.dG1x = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dG1x;
        delete this.qa5f;
        delete this.bp0x
    };
    SparkMD5.prototype.nO4S = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dG1x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bp0x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dG1x, tail)
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
        var buff = concatenateArrayBuffers(this.qa5f.buffer, arr, true), length = buff.length, i;
        this.bp0x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dG1x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qa5f = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.qa5f, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.nO4S(tail, length);
        ret = hex(this.dG1x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.qa5f = new Uint8Array(0);
        this.bp0x = 0;
        this.dG1x = [1732584193, -271733879, -1732584194, 271733878];
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
    SparkMD5.ArrayBuffer.prototype.nO4S = SparkMD5.prototype.nO4S;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, a8i = c9h("nej.e"), h9c = c9h("nej.v"), v9m = c9h("nej.j"),
        dP1x = c9h("nej.g"), k9b = c9h("nej.u"), ff1x = c9h("nej.n"), H9y = c9h("nej.ut"), l9c = c9h("nm.x"),
        p9g = c9h("nm.d"), iN2x = c9h("nm.x.nos"), D9u = c9h("nm.w");
    var clj9a = 1024 * 256, cli9Z = 1024 * 1024 * 2, pw4A = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bvK9B = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bn0x,
        py4C = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        oC4G = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var mV4Z = {};
    var ww8o = p9g.hQ2x.B9s();
    iN2x.cvl1x = function () {
        return oC4G
    };
    var clg9X = function () {
        return k9b.nk4o(6) + +(new Date)
    };
    var Fu1x = function (jy3x, e9f) {
        if (!mV4Z[e9f.taskId]) {
            return
        }
        (e9f.onuploading || bn0x).call(this, jy3x)
    };
    var bpd8V = function (Q9H) {
        var cle9V = Q9H.md5, dU1x = Q9H.file, cld9U = cle9V + dU1x.size;
        return "nos_file_hash_" + cld9U
    };
    var clc9T = function (Q9H) {
        var J9A = bpd8V(Q9H), i9b = v9m.brS8K(J9A, "{}");
        try {
            i9b = JSON.parse(i9b)
        } catch (e) {
            i9b = {}
        }
        return i9b
    };
    var clb9S = function (Q9H, e9f) {
        if (!Q9H.md5) {
            return
        }
        var J9A = bpd8V(Q9H), i9b = v9m.brS8K(J9A, "{}");
        try {
            i9b = JSON.parse(i9b)
        } catch (e) {
            i9b = {}
        }
        NEJ.X(i9b, e9f);
        v9m.uN7G(J9A, JSON.stringify(i9b))
    };
    var cla9R = function (Q9H) {
        var J9A = bpd8V(Q9H);
        v9m.PY3x(J9A)
    };
    var ckZ9Q = function (Q9H, gc2x) {
        var V9M = Q9H.urls[Math.min(Q9H.urlIndex, Q9H.urls.length - 1)], dU1x = Q9H.file, kX3x = Q9H.bucket,
            nb4f = Q9H.objectKey, ep1x = Q9H.token, bL0x = Q9H.context, nG4K = {},
            JJ2x = bvK9B.call(dU1x, Q9H.beg, Q9H.end),
            bw0x = {offset: Q9H.beg, complete: Q9H.lastChunk || false, version: "1.0"};
        if (bL0x) {
            bw0x.context = bL0x
        }
        nG4K["x-nos-token"] = ep1x;
        nG4K[dP1x.wF8x] = dU1x.type;
        Q9H.reqId = v9m.br0x(V9M + "/" + kX3x + "/" + nb4f, {
            type: "json",
            method: "POST",
            headers: nG4K,
            query: bw0x,
            data: JJ2x,
            onload: gc2x.onload,
            onerror: gc2x.onerror
        })
    };
    var ckY9P = function (m9d, Q9H, e9f) {
        m9d = {
            code: 200,
            fileName: e9f.file.name,
            size: e9f.file.size,
            type: e9f.file.type,
            bucket: Q9H.bucket,
            docId: Q9H.docId,
            objectKey: Q9H.objectKey,
            url: "//nos.netease.com/" + Q9H.bucket + "/" + Q9H.objectKey
        };
        cla9R(Q9H);
        if (!mV4Z[e9f.taskId]) {
            return
        }
        delete mV4Z[e9f.taskId];
        ww8o.gd2x("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(m9d)});
        (e9f.onsuccess || bn0x).call(this, m9d)
    };
    var ckX9O = function (m9d, e9f) {
        (e9f.onerror || bn0x).call(this, m9d)
    };
    var ckW9N = function (m9d, Q9H, e9f) {
        Q9H.context = m9d.context;
        Q9H.beg = m9d.offset;
        var jy3x = Q9H.beg / Q9H.file.size;
        clb9S(Q9H, {
            bucket: Q9H.bucket,
            objectKey: Q9H.objectKey,
            token: Q9H.token,
            context: Q9H.context,
            beg: Q9H.beg,
            updateTime: +(new Date)
        });
        jy3x = py4C.DNS_GET + (py4C.UPLOADED - py4C.DNS_GET) * jy3x;
        Fu1x(jy3x, e9f);
        if (Q9H.lastChunk) {
            ckY9P(m9d, Q9H, e9f)
        } else {
            Tc4g(Q9H, e9f)
        }
    };
    var ckU9L = function (m9d, Q9H, e9f) {
        ww8o.gd2x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m9d.data,
            body: m9d.extData,
            ext: JSON.stringify(Q9H),
            timging: +(new Date) - Q9H.chuckUploadStartTime
        });
        if (Q9H.urlIndex < Math.max(Q9H.urls.length - 1, 5)) {
            Q9H.urlIndex++;
            Tc4g(Q9H, e9f)
        } else {
            ckX9O(m9d, e9f)
        }
    };
    var Tc4g = function (Q9H, e9f) {
        if (!Q9H || Q9H.step == -1) {
            return
        }
        Q9H.end = Q9H.beg + clj9a;
        if (Q9H.end >= Q9H.file.size) {
            Q9H.end = Q9H.file.size;
            Q9H.lastChunk = true
        }
        Q9H.chuckUploadStartTime = +(new Date);
        ckZ9Q(Q9H, {onload: ckW9N.dT1x(this, Q9H, e9f), onerror: ckU9L.dT1x(this, Q9H, e9f)})
    };
    var ckT9K = function (m9d, Q9H, e9f) {
        Q9H.beg = m9d.offset;
        var jy3x = Q9H.beg / Q9H.file.size;
        jy3x = py4C.DNS_GET + (py4C.UPLOADED - py4C.DNS_GET) * jy3x;
        Fu1x(jy3x, e9f);
        Tc4g(Q9H, e9f)
    };
    var ckS9J = function (m9d, Q9H, e9f) {
        Q9H.beg = 0;
        delete Q9H.context;
        bpG8y(Q9H, e9f)
    };
    var bxe0x = function (QJ4N, Q9H, e9f) {
        Q9H.lastChunk = false;
        Q9H.urls = QJ4N;
        Q9H.urlIndex = 0;
        Fu1x(py4C.DNS_GET, e9f);
        if (Q9H.fromExist) {
            delete Q9H.fromExist;
            var V9M = Q9H.urls[Math.min(Q9H.urlIndex, Q9H.urls.length - 1)], kX3x = Q9H.bucket, nb4f = Q9H.objectKey,
                ep1x = Q9H.token, bL0x = Q9H.context, nG4K = {}, bw0x = {context: bL0x, version: "1.0"};
            nG4K["x-nos-token"] = ep1x;
            Q9H.reqId = v9m.br0x(V9M + "/" + kX3x + "/" + nb4f + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: nG4K,
                query: bw0x,
                onload: ckT9K.dT1x(this, Q9H, e9f),
                onerror: ckS9J.dT1x(this, Q9H, e9f)
            })
        } else {
            Q9H.beg = 0;
            Tc4g(Q9H, e9f)
        }
    };
    var ckQ9H = function (m9d, Q9H, e9f) {
        m9d.code = pw4A.DNS_ERROR;
        (e9f.onerror || bn0x).call(this, m9d)
    };
    var bxp0x = function (i9b, e9f) {
        var m9d = i9b.result || {}, kX3x = m9d.bucket, nb4f = m9d.objectKey, ep1x = m9d.token, Q9H = mV4Z[e9f.taskId];
        if (!kX3x || !nb4f || !ep1x || !Q9H) {
            m9d.code = pw4A.TOKEN_ERROR;
            (e9f.onerror || bn0x).call(this, m9d);
            return
        }
        Q9H.bucket = kX3x;
        Q9H.objectKey = nb4f;
        Q9H.docId = m9d.docId;
        Q9H.token = ep1x;
        Fu1x(py4C.TOKEN_GET, e9f);
        if (location.protocol == "https:") {
            bxe0x(["//nosup-hz1.127.net"], Q9H, e9f)
        } else {
            Q9H.reqId = iN2x.ckP9G({
                bucket: kX3x,
                onload: bxe0x.dT1x(this, Q9H, e9f),
                onerror: ckQ9H.dT1x(this, Q9H, e9f)
            })
        }
        Q9H.step = 1
    };
    var ckO9F = function (m9d, e9f) {
        m9d.code = pw4A.TOKEN_ERROR;
        (e9f.onerror || bn0x).call(this, m9d)
    };
    var bpG8y = function (Q9H, e9f) {
        var dU1x = e9f.file, eS1x = dU1x.name || "", ez1x = eS1x.split(".").pop();
        iN2x.Yf2x(NEJ.X({
            filename: eS1x,
            ext: ez1x,
            onload: bxp0x.dT1x(this, e9f),
            onerror: ckO9F.dT1x(this, e9f)
        }, e9f, function (q9h) {
            return k9b.fY2x(q9h) || k9b.kI3x(q9h)
        }))
    };
    var ckN9E = function (Q9H, e9f) {
        if (!Q9H || Q9H.step == -1) {
            return
        }
        Q9H.md5 = Q9H.spark.end();
        var Fj0x = clc9T(Q9H) || {}, kX3x = Fj0x.bucket, nb4f = Fj0x.objectKey, ep1x = Fj0x.token;
        if (!kX3x || !nb4f || !ep1x) {
            bpG8y(Q9H, e9f)
        } else {
            Q9H.context = Fj0x.context;
            Q9H.beg = Fj0x.beg;
            Q9H.fromExist = true;
            bxp0x({result: Fj0x}, e9f)
        }
    };
    var ckL9C = function (Dc0x, Q9H, e9f) {
        if (!Q9H || Q9H.step == -1) {
            return
        }
        Q9H.beg = Q9H.end;
        var jy3x = Q9H.beg / Q9H.file.size;
        jy3x = 0 + py4C.MD5_DONE * jy3x;
        Fu1x(jy3x, e9f);
        Q9H.spark.append(Dc0x.result);
        if (Q9H.lastChunk) {
            ckN9E(Q9H, e9f)
        } else {
            bxI0x(Q9H, e9f)
        }
    };
    var ckK9B = function (m9d, Q9H, e9f) {
        Q9H.md5 = "";
        bpG8y(Q9H, e9f)
    };
    var bxI0x = function (Q9H, e9f) {
        if (!Q9H || Q9H.step == -1) {
            return
        }
        Q9H.end = Q9H.beg + cli9Z;
        if (Q9H.end >= Q9H.file.size) {
            Q9H.end = Q9H.file.size;
            Q9H.lastChunk = true
        }
        var Dc0x = new FileReader;
        Dc0x.onload = ckL9C.g9d(this, Dc0x, Q9H, e9f);
        Dc0x.onerror = ckK9B.g9d(this, Dc0x, Q9H, e9f);
        Dc0x.readAsArrayBuffer(bvK9B.call(Q9H.file, Q9H.beg, Q9H.end))
    };
    iN2x.gp2x = function (e9f) {
        var dU1x = e9f.file, eS1x = dU1x.name || "", ez1x = eS1x.split(".").pop(), De0x = clg9X();
        e9f.taskId = De0x;
        mV4Z[De0x] = {step: 0};
        Fu1x(0, e9f);
        var Q9H = mV4Z[De0x];
        Q9H.id = De0x;
        Q9H.file = dU1x;
        Q9H.beg = 0;
        Q9H.lastChunk = false;
        Q9H.spark = new SparkMD5.ArrayBuffer;
        var ckJ9A = e9f.onerror || bn0x;
        e9f.onerror = function () {
            if (!mV4Z[De0x]) {
                return
            }
            delete mV4Z[De0x];
            ckJ9A.apply(this, arguments)
        };
        ww8o.gd2x("sysaction", {type: "nosuploadstart", location: location.href});
        bxI0x(Q9H, e9f);
        return De0x
    };
    iN2x.jk3x = function (C9t) {
        var Q9H = mV4Z[C9t];
        if (Q9H) {
            if (Q9H.step == 0) {
                delete mV4Z[C9t]
            } else {
                Q9H.step = -1;
                if (Q9H.reqId) {
                    v9m.jk3x(Q9H.reqId)
                }
                delete mV4Z[C9t]
            }
        }
    };
    iN2x.Yf2x = function () {
        var wX8P = function (m9d, e9f) {
            (e9f.onload || bn0x).call(this, m9d)
        };
        var yB8t = function (m9d, e9f) {
            (e9f.onerror || bn0x).call(this, m9d)
        };
        var bxS0x = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e9f) {
            var UX2x = e9f.returnBody || bxS0x;
            if (k9b.kI3x(UX2x)) {
                try {
                    JSON.stringify(UX2x)
                } catch (e) {
                    UX2x = bxS0x
                }
            }
            return v9m.br0x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e9f.filename || "",
                    ext: e9f.ext || "",
                    type: e9f.type || oC4G.OTHER,
                    bucket: e9f.bucket || "",
                    local: e9f.local || false,
                    nos_product: e9f.nosProduct || 0,
                    return_body: UX2x
                },
                onload: wX8P.dT1x(this, e9f),
                onerror: yB8t.dT1x(this, e9f)
            })
        }
    }();
    iN2x.ckP9G = function () {
        var ckI9z = "//wanproxy.127.net/lbs";
        var wX8P = function (m9d, e9f) {
            if (m9d.lbs) {
            }
            var QJ4N = m9d.upload;
            if (!QJ4N || !QJ4N.length) {
                yB8t(m9d, e9f)
            }
            (e9f.onload || bn0x).call(this, QJ4N)
        };
        var yB8t = function (m9d, e9f) {
            (e9f.onerror || bn0x).call(this, m9d)
        };
        return function (e9f) {
            var kX3x = e9f.bucket;
            return v9m.br0x(ckI9z, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: kX3x},
                onload: wX8P.dT1x(this, e9f),
                onerror: yB8t.dT1x(this, e9f)
            })
        }
    }();
    iN2x.UF1x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        cg0x = c9h("nej.ut"), bI0x = c9h("nej.ui"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), iN2x = c9h("nm.x.nos"),
        F9w = c9h("nm.m"), n9e = c9h("nm.l"), D9u = c9h("nm.w"), b8h, K9B;
    var gh2x = a8i.ie2x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    D9u.byh0x = NEJ.C();
    b8h = D9u.byh0x.O9F(bI0x.eo1x);
    b8h.bZ0x = function () {
        this.ca0x = gh2x
    };
    b8h.bR0x = function () {
        this.cb0x();
        this.by0x = this.o9f;
        this.gP2x = a8i.I9z(this.o9f, "j-file")[0];
        h9c.s9j(this.gP2x, "change", this.re5j.g9d(this))
    };
    b8h.bk0x = function (e9f) {
        e9f = e9f || {};
        this.bl0x(e9f);
        this.gP2x.accept = e9f.accept || "*";
        this.uB7u = e9f
    };
    b8h.Uo1x = function () {
        return a8i.kH3x(this.gP2x)
    };
    b8h.re5j = function (d9g) {
        if (this.gP2x.value == "") return;
        var jT3x = this.gP2x.value.split("\\"), eS1x = jT3x.length > 0 ? jT3x[jT3x.length - 1] : jT3x[0],
            np4t = (this.gP2x.files || [{}])[0];
        var fU2x = {files: this.gP2x.files, filename: eS1x, size: np4t.size, cancelUpload: false};
        this.x9o("onchange", fU2x);
        if (fU2x.cancelUpload) {
            this.gP2x.value = "";
            return
        }
        if (fU2x.stopped) {
            return
        }
        this.Op3x()
    };
    b8h.Op3x = function () {
        if (this.gP2x.value == "") return;
        var jT3x = this.gP2x.value.split("\\"), eS1x = jT3x.length > 0 ? jT3x[jT3x.length - 1] : jT3x[0],
            ez1x = (eS1x.split(".") || []).pop(), np4t = (this.gP2x.files || [{}])[0],
            Ds0x = (np4t.type || "").split("/").shift();
        if (np4t.size > 100 * 1024 * 1024) {
            return this.mf3x("onerror", {code: -200})
        }
        this.x9o("onuploading", 0);
        this.byz0x = iN2x.Yf2x(NEJ.X({
            onload: this.Og3x.dT1x(this, eS1x),
            onerror: this.mf3x.g9d(this)
        }, this.uB7u, function (q9h) {
            return k9b.fY2x(q9h) || k9b.kI3x(q9h)
        }))
    };
    b8h.Og3x = function (bW0x, eS1x) {
        var m9d = bW0x.result || {}, kX3x = m9d.bucket, nb4f = m9d.objectKey, ep1x = m9d.token;
        if (!kX3x || !nb4f || !ep1x) {
            bW0x.code = -100;
            this.mf3x.call(this, bW0x);
            return
        }
        var np4t = (this.gP2x.files || [{}])[0];
        var jW3x = a8i.cQ0x(this.by0x);
        jW3x[0].value = nb4f;
        jW3x[1].value = ep1x;
        if (np4t.type && np4t.type.indexOf("audio") == 0) {
            jW3x[3].value = "audio/mpeg"
        } else {
            jW3x[3].value = np4t.type || ""
        }
        this.by0x.action = "//nos.netease.com/" + kX3x;
        this.Dw0x = m9d;
        this.pP4T = eS1x;
        this.x9o("onuploading", .2);
        this.gp2x()
    };
    b8h.gp2x = function () {
        this.byz0x = v9m.gp2x(this.by0x, {
            type: "json",
            onload: this.sQ5V.g9d(this),
            onerror: this.mf3x.g9d(this),
            onuploading: this.TR1x.g9d(this)
        })
    };
    b8h.jk3x = function () {
        v9m.jk3x(this.byz0x);
        this.by0x.reset()
    };
    b8h.sQ5V = function (bW0x) {
        var ep1x = this.Dw0x, eS1x = this.pP4T, np4t = (this.gP2x.files || [{}])[0], kw3x = {
            code: 200,
            fileName: eS1x,
            size: np4t.size,
            bucket: ep1x.bucket,
            docId: ep1x.docId,
            objectKey: ep1x.objectKey,
            url: "//nos.netease.com/" + ep1x.bucket + "/" + ep1x.objectKey
        };
        if (!bW0x) {
            bW0x = kw3x
        }
        if (!bW0x.code || bW0x.code == 200) {
            this.x9o("onsuccess", NEJ.X(kw3x, bW0x))
        } else {
            this.x9o("onerror", bW0x)
        }
        this.by0x.reset()
    };
    b8h.mf3x = function (bW0x) {
        this.x9o("onerror", bW0x);
        this.by0x.reset()
    };
    b8h.TR1x = function (jy3x) {
        this.x9o("onuploading", .2 + jy3x.loaded / jy3x.total * .8)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"),
        cg0x = c9h("nej.ut"), bI0x = c9h("nej.ui"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), iN2x = c9h("nm.x.nos"),
        F9w = c9h("nm.m"), n9e = c9h("nm.l"), D9u = c9h("nm.w"), b8h, K9B;
    D9u.NW3x = NEJ.C();
    b8h = D9u.NW3x.O9F(cg0x.cy0x);
    b8h.bk0x = function (e9f) {
        e9f = e9f || {};
        this.bl0x(e9f);
        this.Sw4A = D9u.byh0x.B9s(NEJ.X({
            parent: e9f.parent,
            onchange: this.re5j.g9d(this),
            onuploading: this.x9o.g9d(this, "onuploading"),
            onsuccess: this.x9o.g9d(this, "onsuccess"),
            onerror: this.x9o.g9d(this, "onerror")
        }, e9f, function (q9h) {
            return k9b.fY2x(q9h) || k9b.kI3x(q9h)
        }));
        if (e9f.multiple && iN2x.UF1x()) {
            a8i.fT2x(this.Sw4A.Uo1x(), "multiple", true)
        }
        this.uB7u = e9f
    };
    b8h.re5j = function (e9f) {
        var eS1x = e9f.filename, ez1x = (eS1x.split(".") || []).pop();
        this.byK0x = (e9f.files || [{}])[0];
        this.x9o("onchange", e9f);
        if (iN2x.UF1x() && !e9f.stopped && !e9f.cancelUpload) {
            this.Op3x(true);
            e9f.stopped = true
        }
    };
    b8h.Uo1x = function () {
        return this.Sw4A.Uo1x()
    };
    b8h.ckG9x = function () {
        return this.byK0x
    };
    b8h.Op3x = function (ew1x, dU1x) {
        dU1x = dU1x || this.byK0x;
        if (iN2x.UF1x()) {
            this.byQ0x = iN2x.gp2x(NEJ.X({
                file: dU1x,
                local: this.uB7u.bucket && this.uB7u.bucket.length,
                onuploading: this.x9o.g9d(this, "onuploading"),
                onsuccess: this.x9o.g9d(this, "onsuccess"),
                onerror: this.x9o.g9d(this, "onerror")
            }, this.uB7u, function (q9h) {
                return k9b.fY2x(q9h) || k9b.kI3x(q9h)
            }));
            return this.byQ0x
        } else if (!ew1x) {
            this.Sw4A.Op3x()
        }
    };
    b8h.jk3x = function (C9t) {
        C9t = C9t || this.byQ0x;
        if (C9t) {
            iN2x.jk3x(C9t)
        }
        this.Sw4A.jk3x()
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), dP1x = c9h("nej.g"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        v9m = c9h("nej.j"), ff1x = c9h("nej.n"), H9y = c9h("nej.ut"), bd0x = c9h("nej.ui"), D9u = c9h("nm.w"),
        n9e = c9h("nm.l"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), L9C = c9h("nm.x.f"), iN2x = c9h("nm.x.nos"), b8h, K9B,
        bqk8c = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, bqm8e = 5 * 1024 * 1024, cvq1x = 80,
        byZ0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D9u.bzb0x = NEJ.C();
    b8h = D9u.bzb0x.O9F(H9y.wi7b);
    b8h.baP4T = function () {
        return {x: this.zG9x.clientWidth - this.o9f.offsetWidth, y: this.zG9x.clientHeight - this.o9f.offsetHeight}
    };
    D9u.bqn8f = NEJ.C();
    b8h = D9u.bqn8f.O9F(bd0x.eo1x);
    b8h.bZ0x = function () {
        this.ca0x = "m-xwgt-share-upload"
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.I9z(this.o9f, "j-flag");
        this.YD3x = j9a.shift();
        this.Fe0x = j9a.shift();
        this.My2x = j9a.shift();
        this.bzt0x = {
            onchange: this.bzC0x.dT1x(this, 0),
            onerror: this.ei1x.g9d(this),
            onsuccess: this.sy5D.g9d(this),
            multiple: true,
            parent: this.Fe0x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bqr8j = {
            onchange: this.bzC0x.dT1x(this, 1),
            onerror: this.ei1x.g9d(this),
            onsuccess: this.sy5D.g9d(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.ckD9u = D9u.NW3x.B9s(this.bzt0x)
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.bqr8j.parent = e9f.button;
        this.Fc0x && this.Fc0x.S9J();
        this.Fc0x = D9u.NW3x.B9s(this.bqr8j);
        this.o9f.style.display = "none";
        if (!!this.eA1x) {
            for (var i = this.eA1x.length - 1; i >= 0; i--) {
                a8i.cK0x(this.eA1x[i].element, false);
                if (this.eA1x[i].dragger) this.eA1x[i].dragger.S9J()
            }
        }
        this.eA1x = [];
        if (this.zR9I) {
            clearTimeout(this.zR9I)
        }
        this.VF2x(0);
        this.KS2x = 0;
        this.bT0x([[this.bzt0x.parent, "click", this.bzV0x.g9d(this)], [this.bqr8j.parent, "click", this.bzV0x.g9d(this)]])
    };
    b8h.bE0x = function () {
        h9c.hE2x(this.rL5Q, "click");
        if (!!this.eA1x) {
            for (var i = this.eA1x.length - 1; i >= 0; i--) {
                a8i.cK0x(this.eA1x[i].element, false);
                if (this.eA1x[i].dragger) this.eA1x[i].dragger.S9J()
            }
        }
        this.eA1x = [];
        if (this.zR9I) {
            clearTimeout(this.zR9I)
        }
        this.zR9I = 0;
        this.Fc0x && this.Fc0x.S9J();
        delete this.Fc0x;
        this.bH0x()
    };
    b8h.bzV0x = function (d9g) {
        if (!iN2x.UF1x() && this.eA1x.doing) {
            h9c.bh0x(d9g)
        }
    };
    b8h.bzC0x = function (e9f, r9i) {
        var rJ5O = e9f.files, io2x;
        e9f.stopped = true;
        if (!rJ5O) {
            if (e9f.filename) {
                rJ5O = [{name: e9f.filename, isIE: true}]
            }
        }
        for (var i = 0, len = rJ5O.length; i < len; i++) {
            if (!byZ0x.test(rJ5O[i].name)) {
                this.bqt8l({path: rJ5O[i].name, index: r9i, status: -4, fail: "这不是<br>图片"})
            } else if (rJ5O[i].size > bqm8e) {
                this.bqv8n(-3);
                this.bqt8l({path: rJ5O[i].name, index: r9i, status: -3, fail: "上传<br>失败"})
            } else {
                this.bqt8l({path: rJ5O[i].name, file: rJ5O[i], index: r9i, status: 0})
            }
        }
    };
    b8h.bqt8l = function (rD5I) {
        if (this.eA1x.length >= 9) {
            this.bqv8n(-10, 3e3, this.bAk0x.g9d(this));
            return
        }
        this.ckC9t(rD5I);
        this.eA1x.push(rD5I);
        if (!!this.eA1x.length) {
            this.o9f.style.display = ""
        }
        if (this.eA1x.length >= 9) {
            this.Fe0x.style.display = "none"
        } else {
            this.Fe0x.style.display = ""
        }
        this.EY0x()
    };
    b8h.EY0x = function () {
        var bqG8y = -1, bAs0x = 0;
        for (var i = 0, l = this.eA1x.length; i < l; i++) {
            if (this.eA1x[i].status == 1) {
                return
            }
            if (this.eA1x[i].status == 0 && bqG8y < 0) {
                bqG8y = i
            }
            if (this.eA1x[i].status == 2 || this.eA1x[i].status < 0) {
                bAs0x++
            }
        }
        var q9h = this.eA1x[bqG8y];
        if (q9h) {
            (q9h.index == 0 ? this.ckD9u : this.Fc0x).Op3x(false, q9h.file);
            q9h.status = 1;
            this.eA1x.doing = q9h;
            this.x9o("onstartupload", {})
        } else if (bAs0x == this.eA1x.length) {
            this.x9o("onfinishupload", {})
        }
    };
    b8h.bqL8D = function () {
        return this.eA1x.doing || {}
    };
    b8h.ei1x = function (d9g) {
        var rD5I = this.bqL8D();
        rD5I.status = -4;
        rD5I.fail = "上传<br>失败";
        this.bAx0x(rD5I);
        this.eA1x.doing = null;
        this.EY0x()
    };
    b8h.sy5D = function (d9g) {
        var rD5I = this.bqL8D(), fr1x = d9g.fileName.match(byZ0x);
        rD5I.picUrl = d9g.url;
        v9m.br0x("/upload/event/img/v1", {
            query: {imgid: d9g.docId, format: fr1x[1]},
            type: "json",
            onload: this.bAB0x.g9d(this),
            onerror: this.bAB0x.g9d(this)
        })
    };
    b8h.bAB0x = function (d9g) {
        if (d9g && d9g.code == 200 && d9g.picInfo) {
            var rD5I = this.bqL8D();
            rD5I.status = 2;
            var bt0x = NEJ.X({}, d9g.picInfo);
            bt0x.originId = bt0x.originIdStr;
            bt0x.squareId = bt0x.squareIdStr;
            bt0x.rectangleId = bt0x.rectangleIdStr;
            bt0x.pcSquareId = bt0x.pcSquareIdStr;
            bt0x.pcRectangleId = bt0x.pcRectangleIdStr;
            bt0x.originJpgId = bt0x.originJpgIdStr || bt0x.originJpgId;
            rD5I.picInfo = bt0x;
            this.bAx0x(rD5I);
            this.eA1x.doing = null;
            this.EY0x()
        } else {
            this.ei1x(d9g)
        }
    };
    b8h.bqv8n = function (r9i, jF3x, gc2x) {
        if (this.KS2x < r9i) {
            return
        }
        if (this.zR9I) {
            clearTimeout(this.zR9I);
            this.zR9I = 0
        }
        if (jF3x) {
            this.My2x.innerText = bqk8c[r9i * 1];
            this.KS2x = r9i;
            this.zR9I = setTimeout(this.VF2x.g9d(this, r9i, gc2x), jF3x)
        } else {
            this.My2x.innerText = bqk8c[r9i];
            this.KS2x = r9i
        }
        this.My2x.style.display = ""
    };
    b8h.VF2x = function (r9i, gc2x) {
        if (r9i && this.KS2x !== r9i) {
            return
        }
        this.KS2x = 0;
        this.My2x.innerText = bqk8c[0];
        this.My2x.style.display = "none";
        gc2x && gc2x()
    };
    b8h.ckC9t = function (dU1x) {
        var i9b = {};
        if (dU1x.fail) {
            i9b.fail = dU1x.fail
        }
        var dy1x = a8i.bP0x("m-xwgt-share-upload-preview", i9b);
        dU1x.element = a8i.mG4K(dy1x);
        h9c.s9j(a8i.I9z(dU1x.element, "del")[0], "mousedown", this.ckB9s.g9d(this, dU1x), false);
        this.YD3x.insertBefore(dU1x.element, this.YD3x.lastElementChild);
        dU1x.dragger = D9u.bzb0x.B9s({
            view: this.YD3x.parentNode,
            body: dU1x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Rc4g.g9d(this, dU1x),
            onchange: this.ckz9q.g9d(this, dU1x),
            ondragend: this.baV4Z.g9d(this, dU1x)
        })
    };
    b8h.bAx0x = function (dU1x) {
        if (!dU1x || !dU1x.element) {
            return false
        }
        var i9b = {};
        if (dU1x.fail) {
            i9b.fail = dU1x.fail
        } else {
            i9b.url = dU1x.picUrl
        }
        a8i.y9p(dU1x.element, "z-fail");
        dU1x.element.firstChild.outerHTML = a8i.bP0x("m-xwgt-share-upload-preview-img", i9b)
    };
    b8h.Rc4g = function (q9h, jM3x) {
        a8i.y9p(q9h.element, "z-sel")
    };
    b8h.ckz9q = function (q9h, jM3x) {
        var cvu1x, gA2x = this.eA1x.length - 1, mN4R;
        for (var i = gA2x; i >= 0; i--) {
            a8i.w9n(this.eA1x[i].element, "z-jump");
            if (this.eA1x[i] == q9h) {
                mN4R = i
            } else {
                a8i.fB1x(this.eA1x[i].element, {left: "", top: ""})
            }
        }
        var Qb3x = {x: 46 + 92 * (mN4R % 5) + jM3x.left, y: 46 + 92 * (mN4R / 5 >> 0) + jM3x.top};
        var brp8h = Qb3x.x / 92 >> 0, brq8i = Qb3x.y / 92 >> 0, xE8w = Math.max(0, Math.min(gA2x, brq8i * 5 + brp8h));
        if (xE8w == mN4R) {
            return
        }
        var ckv9m = xE8w < mN4R;
        for (var i = Math.min(xE8w, mN4R); i <= Math.max(xE8w, mN4R); i++) {
            if (i !== mN4R) {
                var bBb0x = i % 5;
                if (ckv9m) {
                    if (bBb0x == 4) {
                        a8i.fB1x(this.eA1x[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a8i.fB1x(this.eA1x[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bBb0x == 0) {
                        a8i.fB1x(this.eA1x[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a8i.fB1x(this.eA1x[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b8h.baV4Z = function (q9h, jM3x) {
        var cvw1x, gA2x = this.eA1x.length - 1, mN4R;
        for (var i = gA2x; i >= 0; i--) {
            a8i.fB1x(this.eA1x[i].element, {left: "", top: ""});
            if (this.eA1x[i] == q9h) {
                mN4R = i
            }
        }
        a8i.w9n(q9h.element, "z-sel");
        var Qb3x = {x: 46 + 92 * (mN4R % 5) + jM3x.left, y: 46 + 92 * (mN4R / 5 >> 0) + jM3x.top};
        var brp8h = Qb3x.x / 92 >> 0, brq8i = Qb3x.y / 92 >> 0, xE8w = Math.max(0, Math.min(gA2x, brq8i * 5 + brp8h));
        if (xE8w == mN4R) {
            return
        }
        this.YD3x.insertBefore(q9h.element, (this.eA1x[xE8w + (xE8w > mN4R ? 1 : 0)] || {}).element || this.Fe0x);
        this.eA1x.splice(mN4R, 1);
        this.eA1x.splice(xE8w, 0, q9h)
    };
    b8h.ckB9s = function (q9h, d9g) {
        a8i.cK0x(q9h.element, false);
        if (q9h.dragger) q9h.dragger.S9J();
        delete q9h.dragger;
        var r9i = -1;
        for (var i = this.eA1x.length - 1; i >= 0; i--) {
            if (this.eA1x[i] == q9h) {
                r9i = i;
                break
            }
        }
        this.eA1x.splice(r9i, r9i >= 0 ? 1 : 0);
        delete q9h;
        if (this.eA1x.length >= 9) {
            this.Fe0x.style.display = "none"
        } else {
            this.Fe0x.style.display = ""
        }
        if (!this.eA1x.length) {
            this.o9f.style.display = "none";
            this.VF2x(0)
        } else {
            this.bAk0x()
        }
        if (this.eA1x.doing == q9h) {
            this.eA1x.doing = null
        }
        this.EY0x()
    };
    b8h.bAk0x = function () {
        var bBh0x = false;
        for (var i = 0, len = this.eA1x.length; i < len; i++) {
            if (this.eA1x[i].status == -3) {
                bBh0x = true
            }
        }
        if (bBh0x) {
            this.bqv8n(-3)
        } else {
            this.VF2x(-3)
        }
    };
    b8h.MD3x = function () {
        var ee1x = [];
        for (var i = this.eA1x.length - 1; i >= 0; i--) {
            if (this.eA1x[i].status == 2) {
                ee1x.unshift(this.eA1x[i].picInfo)
            }
        }
        return ee1x
    };
    H9y.fv1x.B9s({element: D9u.bqn8f, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, fc1x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        bd0x = c9h("nej.ui"), M9D = c9h("nej.ut"), b8h, K9B;
    if (!!M9D.nl4p) return;
    M9D.nl4p = NEJ.C();
    b8h = M9D.nl4p.O9F(M9D.VM2x);
    K9B = M9D.nl4p.ch0x;
    b8h.bk0x = function (e9f) {
        this.ckt9k(e9f.more);
        this.TW1x = a8i.z9q(e9f.sbody);
        this.bT0x([[this.TW1x, "scroll", this.ckq9h.g9d(this)]]);
        var df1x = e9f.delta;
        if (df1x == null) df1x = 30;
        this.KJ2x = Math.max(0, df1x);
        var ct0x = parseInt(e9f.count) || 0;
        this.iO2x = Math.max(0, ct0x);
        var gj2x = parseInt(e9f.number) || 0;
        if (gj2x > 1 && gj2x <= ct0x) {
            this.yd8V = gj2x
        }
        this.bl0x(e9f)
    };
    b8h.bE0x = function () {
        this.bH0x();
        delete this.Aq9h;
        delete this.TW1x;
        delete this.rq5v;
        delete this.ZT3x
    };
    b8h.yv8n = function (bj0x, bp0x) {
        var bG0x = this.wU8M + (this.iO2x - 1) * this.qK5P, fV2x = this.iO2x * this.qK5P;
        return K9B.yv8n.call(this, bG0x, bj0x, fV2x, bp0x)
    };
    b8h.ckt9k = function (YK3x) {
        this.Aq9h = a8i.z9q(YK3x);
        this.bT0x([[this.Aq9h, "click", this.nq4u.g9d(this)]])
    };
    b8h.brw8o = function (E9v) {
        E9v = E9v || {};
        if (this.rq5v || !E9v) return;
        if (!E9v.scrollHeight) E9v = a8i.oE4I();
        var bj0x = a8i.hR2x(this.if2x), df1x = bj0x.y + this.if2x.offsetHeight - E9v.scrollTop - E9v.clientHeight,
            brx8p = E9v.scrollHeight <= E9v.clientHeight;
        if (df1x <= this.KJ2x || brx8p && !this.rq5v) {
            this.nq4u()
        }
    };
    b8h.ckq9h = function (d9g) {
        if (this.rq5v) return;
        this.brw8o(h9c.U9L(d9g))
    };
    b8h.ys8k = function (d9g) {
        K9B.ys8k.apply(this, arguments);
        if (!d9g.stopped) {
            this.Nn3x();
            var bj0x = 0;
            if (d9g.index > 1) {
                bj0x = this.wU8M + ((d9g.index - 1) * this.iO2x - 1) * this.qK5P
            }
            this.ia2x = bj0x;
            this.nq4u()
        }
    };
    b8h.bLf3x = function (e9f) {
        if (!!this.yd8V) {
            var df1x = e9f.offset > 0 ? this.qK5P : this.wU8M, fV2x = df1x + this.qK5P * (this.yd8V - 1);
            this.ia2x = e9f.offset + fV2x;
            e9f.data.limit = fV2x;
            e9f.limit = fV2x;
            delete this.yd8V
        }
        return e9f
    };
    b8h.bni7b = function (e9f) {
        delete this.ZT3x;
        K9B.bni7b.apply(this, arguments);
        this.bBH1x()
    };
    b8h.bnm7f = function (d9g) {
        if (d9g.key != this.iv2x.key) return;
        switch (d9g.action) {
            case"refresh":
            case"append":
                delete this.ZT3x;
                break
        }
        K9B.bnm7f.apply(this, arguments)
    };
    b8h.MU3x = function () {
        this.xR8J("onbeforelistload", "列表加载中...");
        a8i.Y0x(this.Aq9h, "display", "none")
    };
    b8h.bnx7q = function (j9a, bj0x, fV2x) {
        var bp0x = j9a.length, brC8u = j9a.loaded ? bj0x + fV2x >= bp0x : bj0x + fV2x > bp0x;
        this.ia2x = Math.min(this.ia2x, bp0x);
        a8i.Y0x(this.Aq9h, "display", brC8u ? "none" : "");
        if (brC8u) this.rq5v = !0;
        if (this.iO2x > 0) {
            var bt0x = this.yv8n(bj0x, j9a.length);
            if (this.bLz3x(bt0x.index, bt0x.total)) return !0;
            var df1x = this.wU8M - this.qK5P, gj2x = this.iO2x * this.qK5P;
            this.rq5v = (bj0x + fV2x - df1x) % gj2x == 0 || brC8u;
            a8i.Y0x(this.Aq9h, "display", this.rq5v ? "none" : "");
            this.bnn7g(this.rq5v && bt0x.total > 1 ? "" : "none")
        }
    };
    b8h.bnw7p = function () {
        this.ia2x = 0;
        this.rq5v = !0;
        this.xR8J("onemptylist", "没有列表数据！")
    };
    b8h.MN3x = function (dy1x, jM3x) {
        this.if2x.insertAdjacentHTML(jM3x || "beforeEnd", dy1x)
    };
    b8h.MJ3x = function (gx2x) {
        this.fh1x = this.fh1x || [];
        if (k9b.en1x(gx2x)) {
            fc1x.push.apply(this.fh1x, gx2x)
        } else {
            this.fh1x.push(gx2x)
        }
    };
    b8h.Vd2x = function (d9g) {
        a8i.mm3x(this.ci0x);
        this.Mt2x(d9g, "onafteradd");
        var ew1x = d9g.flag;
        if (d9g.stopped || !ew1x) return;
        if (this.iO2x > 0) {
            this.bnp7i();
            return
        }
        this.ia2x += 1;
        ew1x == -1 ? this.bnL7E(d9g.data) : this.bMy3x(d9g.data)
    };
    b8h.Vc2x = function (d9g) {
        this.Mt2x(d9g, "onafterdelete");
        if (d9g.stopped) return;
        if (this.iO2x > 0) {
            this.bnp7i();
            return
        }
        var C9t = d9g.data[this.eN1x.pkey];
        if (!!this.fh1x) {
            var q9h = a8i.bDC1x(C9t), r9i = k9b.cU0x(this.fh1x, q9h);
            if (r9i >= 0) {
                this.fh1x.splice(r9i, 1);
                this.ia2x -= 1
            }
            if (!!q9h) q9h.S9J()
        } else {
            var f9e = a8i.z9q(this.bKb2x(C9t));
            if (!!f9e) this.ia2x -= 1;
            a8i.cK0x(f9e)
        }
        if (this.ia2x <= 0) this.nq4u()
    };
    b8h.bnH7A = function (bj0x, fV2x) {
        if (bj0x != this.ia2x) return;
        if (this.WB2x()) {
            this.rq5v = !1;
            this.bBH1x()
        }
    };
    b8h.bnI7B = function (bj0x, fV2x) {
        if (bj0x != 0) return;
        var Ix1x = this.R9I.gU2x(this.iv2x.key);
        for (var i = fV2x - 1; i >= 0; i--) {
            this.bnL7E(Ix1x[i])
        }
    };
    b8h.bBH1x = function () {
        var E9v = this.TW1x;
        if (!E9v || this.rq5v) return;
        this.brw8o(this.TW1x)
    };
    b8h.fR2x = function () {
        delete this.rq5v;
        K9B.fR2x.apply(this, arguments)
    };
    b8h.nq4u = function () {
        if (!!this.ZT3x) return;
        this.ZT3x = !0;
        var bj0x = this.ia2x;
        this.ia2x += bj0x == 0 ? this.wU8M : this.qK5P;
        this.bLe3x(bj0x)
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), cN0x = c9h("nej.x"),
        M9D = c9h("nej.ut"), b8h;
    if (!!M9D.Ez0x) return;
    M9D.Ez0x = NEJ.C();
    b8h = M9D.Ez0x.O9F(M9D.cy0x);
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.ih2x = e9f.event || "click";
        this.jL3x = e9f.selected || "js-selected";
        this.mJ4N = e9f.disabled || "js-disabled";
        this.bBK1x = !!e9f.inverse;
        this.ckp9g(e9f.list);
        this.Kf2x(e9f.index || 0)
    };
    b8h.bE0x = function () {
        var cko9f = function (f9e) {
            this.brE8w(f9e, !1)
        };
        return function () {
            this.bH0x();
            k9b.be0x(this.bV0x, cko9f, this);
            delete this.bV0x;
            delete this.ih2x;
            delete this.cn0x;
            delete this.mJ4N;
            delete this.jL3x;
            delete this.bBK1x
        }
    }();
    b8h.ckp9g = function () {
        var bmE7x = function (q9h) {
            if (!q9h) return;
            this.bV0x.push(q9h);
            var r9i = this.bV0x.length - 1, dc1x = this.brJ8B[r9i];
            if (!dc1x) {
                dc1x = this.Kf2x.g9d(this, r9i);
                this.brJ8B[r9i] = dc1x
            }
            this.bT0x([[q9h, this.ih2x, dc1x]])
        };
        return function (j9a) {
            this.bV0x = [];
            if (!this.brJ8B) this.brJ8B = [];
            k9b.be0x(j9a, bmE7x, this)
        }
    }();
    b8h.brE8w = function (E9v, ckn9e) {
        !!ckn9e && !this.bBK1x ? a8i.y9p(E9v, this.jL3x) : a8i.w9n(E9v, this.jL3x)
    };
    b8h.Kf2x = function (r9i, Li2x, i9b) {
        var E9v = this.bV0x[r9i];
        if (Li2x != !0 && (r9i == this.cn0x || !E9v || a8i.bB0x(E9v, this.mJ4N))) {
            h9c.cf0x(arguments[1]);
            return this
        }
        var d9g = {index: r9i, last: this.cn0x, list: this.ns4w(), data: i9b || a8i.u9l(E9v, "value")};
        this.cn0x = r9i;
        E9v = this.bV0x[d9g.last];
        if (!!E9v) this.brE8w(E9v, !1);
        E9v = this.bV0x[this.cn0x];
        this.brE8w(E9v, !0);
        this.x9o("onchange", d9g);
        if (!d9g.nostop) h9c.cf0x(arguments[1]);
        return this
    };
    b8h.rR5W = function () {
        return this.cn0x
    };
    b8h.ns4w = function () {
        return this.bV0x
    };
    a8i.ckm9d = cN0x.ckm9d = function (bD0x, e9f) {
        var C9t = a8i.kH3x(bD0x);
        if (!C9t) return null;
        if (!M9D.Xz2x(C9t, M9D.Ez0x)) {
            e9f = e9f || {};
            e9f.list = !e9f.clazz ? a8i.cQ0x(C9t) : a8i.I9z(C9t, e9f.clazz);
            delete e9f.clazz
        }
        return M9D.Xz2x(C9t, M9D.Ez0x, e9f || X0x)
    };
    cN0x.isChange = !0
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, k9b = c9h("nej.u"), v9m = c9h("nej.j"), l9c = c9h("nm.x");
    var SETTING_KEY = "player-setting";
    var mk3x = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    mk3x = v9m.sF5K(SETTING_KEY) || mk3x;
    l9c.bhR6L = function () {
        return mk3x
    };
    l9c.EK0x = function (EL0x) {
        if (EL0x) {
            mk3x = EL0x;
            v9m.uN7G(SETTING_KEY, EL0x)
        }
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), H9y = c9h("nej.ut"),
        l9c = c9h("nm.x"), p9g = c9h("nm.d"), gT2x = c9h("nm.w.player.log");
    var kF3x = p9g.hQ2x.B9s();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var mc3x = function (t9k, bF0x, pj4n) {
        var cL0x = l9c.eP1x("{0} {1} {2}", k9b.iL2x(new Date, "yyyy-MM-dd HH:mm:ss"), t9k, bF0x);
        if (pj4n == LogLevel.ERROR) {
            kF3x.gd2x("playerror", {message: bF0x})
        }
        if (pj4n >= LogLevel.INFO) {
            kF3x.crL1x(cL0x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cL0x)
        }
    };
    gT2x.bU0x = function () {
        mc3x("PLAY_ERROR", l9c.eP1x.apply(null, arguments), LogLevel.ERROR)
    };
    gT2x.oz4D = function () {
        mc3x("PLAY_INFO", l9c.eP1x.apply(null, arguments), LogLevel.INFO)
    };
    gT2x.cvy1x = function () {
        mc3x("PLAY_DEBUG", l9c.eP1x.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), H9y = c9h("nej.ut"), k9b = c9h("nej.u"), D9u = c9h("nm.w"),
        gc2x = c9h("flash.cb");
    var dE1x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var EQ0x, bab3x, tJ6D;
    D9u.ckk9b = function (t9k, dq1x) {
        if (t9k != "flash") {
            if (!EQ0x) {
                EQ0x = a8i.cT0x("audio");
                k9b.be0x(dE1x, function (t9k) {
                    h9c.s9j(EQ0x, t9k, onMediaCallBack)
                })
            }
            if (EQ0x && EQ0x.canPlayType && EQ0x.canPlayType("audio/mpeg")) {
                dq1x(new MediaWrap("audio"));
                return
            }
        }
        if (!bab3x) {
            a8i.qr5w({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (gZ2x) {
                    bab3x = gZ2x;
                    k9b.be0x(dE1x, function (t9k) {
                        gc2x[t9k] = onMediaCallBack;
                        bab3x.addCallback(t9k, "flash.cb." + t9k)
                    });
                    dq1x(new MediaWrap("flash"))
                }.g9d(this)
            })
        } else {
            dq1x(new MediaWrap("flash"))
        }
    };

    function MediaWrap(EG0x) {
        var lX3x;
        H9y.fv1x.B9s({element: this, event: dE1x.concat(["interrupt", "recover"])});
        lX3x = EG0x == "audio" ? EQ0x : bab3x;
        this.type = EG0x;
        this.destroy = function () {
        };
        this.setSrc = function (V9M) {
            if (tJ6D != this) {
                var gA2x = tJ6D;
                if (gA2x) {
                    gA2x.interrupt()
                }
                tJ6D = this
            }
            if (EG0x == "flash") {
                lX3x.setSrc(V9M)
            } else {
                lX3x.src = V9M
            }
        };
        this.play = function () {
            if (tJ6D != this) {
                var gA2x = tJ6D;
                if (gA2x) {
                    gA2x.interrupt();
                    tJ6D = this;
                    this.recover()
                } else {
                    tJ6D = this
                }
            }
            if (EG0x == "flash") {
                lX3x.as_play()
            } else {
                lX3x.play()
            }
        };
        this.pause = function () {
            if (tJ6D != this) return;
            if (EG0x == "flash") {
                lX3x.as_pause()
            } else {
                lX3x.pause()
            }
        };
        this.load = function () {
            if (tJ6D != this) return;
            if (EG0x == "flash") {
                lX3x.as_load()
            } else {
                lX3x.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return lX3x
        };
        var nN4R = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k9b.be0x(nN4R, function (T9K) {
            var Qk4o = "get" + T9K, QO4S = "set" + T9K;
            if (EG0x == "flash") {
                if (!this[Qk4o]) {
                    this[Qk4o] = function () {
                        return lX3x[Qk4o]()
                    }
                }
                if (!this[QO4S]) {
                    this[QO4S] = function (value) {
                        lX3x[QO4S](value)
                    }
                }
            } else {
                var bCB1x = T9K.slice(0, 1).toLowerCase() + T9K.slice(1);
                if (!this[Qk4o]) {
                    this[Qk4o] = function () {
                        return lX3x[bCB1x]
                    }
                }
                if (!this[QO4S]) {
                    this[QO4S] = function (value) {
                        lX3x[bCB1x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d9g) {
        if (tJ6D) {
            h9c.x9o(tJ6D, d9g.type, d9g)
        }
    }
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), v9m = c9h("nej.j"), H9y = c9h("nej.ut"), cP0x = c9h("nej.p"),
        D9u = c9h("nm.w"), l9c = c9h("nm.x"), gT2x = c9h("nm.w.player.log"), b8h;
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
    var bCC1x = false;
    D9u.fp1x = NEJ.C();
    b8h = D9u.fp1x.O9F(H9y.cy0x);
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.cs0x = {};
        this.RA4E(e9f.media);
        v9m.br0x("/api/cdns", {
            type: "json", onload: function (d9g) {
                if (d9g.code) {
                    this.pT5Y = d9g.data
                }
            }.g9d(this)
        })
    };
    b8h.bE0x = function () {
        this.bH0x();
        delete this.cs0x
    };
    b8h.VT2x = function (bf0x) {
        if (!bf0x) return;
        var Aw9n = this.cs0x.volume;
        if (this.dz1x) {
            this.dz1x.pause()
        }
        this.cs0x = {time: 0, id: bf0x.id, duration: bf0x.duration / 1e3, play: this.cs0x.play, stalledRetryCount: 0};
        if (Aw9n != null) {
            this.cs0x.volume = Aw9n
        }
        this.cs0x.loadState = LoadState.LOAD_START;
        this.bCX1x(bf0x.id);
        gT2x.oz4D("play song id: {0}", bf0x.id)
    };
    b8h.eB1x = function () {
        if (this.cs0x.error) {
            this.cs0x.error = null;
            if (this.cs0x.error == ErrorType.INFO_GET_ERR || this.bDb1x()) {
                this.bDh1x()
            } else {
                this.Kr2x()
            }
        } else {
            if (this.dz1x) {
                this.dz1x.play()
            }
        }
        this.cs0x.play = true;
        this.ok4o("play")
    };
    b8h.fx1x = function () {
        if (this.dz1x) {
            this.dz1x.pause()
        }
        this.cs0x.play = false;
        this.ok4o("pause")
    };
    b8h.nV4Z = function (bz0x) {
        if (this.dz1x) {
            this.dz1x.setCurrentTime(bz0x)
        }
        this.cs0x.time = bz0x;
        gT2x.oz4D("seek to: {0}", bz0x)
    };
    b8h.bru8m = function () {
        return this.cs0x.duration || 0
    };
    b8h.vp7i = function () {
        return !!this.cs0x.play
    };
    b8h.lO3x = function (Lj2x) {
        this.cs0x.volume = Lj2x;
        if (this.dz1x) {
            this.dz1x.setVolume(Lj2x)
        }
    };
    b8h.brt8l = function () {
        return this.cs0x.time
    };
    b8h.RA4E = function (t9k) {
        D9u.ckk9b(t9k, function (lX3x) {
            this.dz1x = lX3x;
            gT2x.oz4D("media loaded: {0}", lX3x.type);
            this.bT0x([[this.dz1x, "loadedmetadata", this.cki9Z.g9d(this)], [this.dz1x, "ended", this.ckh9Y.g9d(this)], [this.dz1x, "waiting", this.we7X.g9d(this)], [this.dz1x, "play", this.sJ5O.g9d(this)], [this.dz1x, "pause", this.brm8e.g9d(this)], [this.dz1x, "playing", this.Pi3x.g9d(this)], [this.dz1x, "timeupdate", this.ckg9X.g9d(this)], [this.dz1x, "progress", this.rA5F.g9d(this)], [this.dz1x, "stalled", this.bre8W.g9d(this)], [this.dz1x, "interrupt", this.fx1x.g9d(this)], [this.dz1x, "recover", this.ckd9U.g9d(this)], [this.dz1x, "error", this.ei1x.g9d(this)]]);
            if (this.cs0x) {
                if (this.cs0x.loadState == LoadState.LOAD_START || this.cs0x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bra8S();
                    if (this.cs0x.volume != null) {
                        this.dz1x.setVolume(this.cs0x.volume)
                    }
                }
            }
        }.g9d(this))
    };
    b8h.ckc9T = function (t9k) {
        this.GT1x();
        this.dz1x.destroy();
        this.cs0x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.we7X();
        this.RA4E(t9k);
        gT2x.oz4D("switch media")
    };
    b8h.cvA1x = function () {
        return this.dz1x
    };
    b8h.bCX1x = function () {
        this.we7X();
        v9m.br0x("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cs0x.id]), br: DEFAULT_BR},
            onload: this.bEf1x.g9d(this),
            onerror: this.bEf1x.g9d(this)
        })
    };
    b8h.bEf1x = function (d9g) {
        if (d9g.code == 200 && d9g.data && d9g.data.length) {
            var bt0x = d9g.data[0];
            if (!bt0x.url) {
                this.cs0x.error = ErrorType.INFO_GET_ERR;
                this.ok4o("error", {code: this.cs0x.error});
                return
            }
            this.cs0x.playUrl = bt0x.url;
            this.cs0x.expireTime = (new Date).getTime() + bt0x.expi * 1e3;
            this.bra8S()
        } else {
            this.cs0x.error = ErrorType.INFO_GET_ERR;
            this.ok4o("error", {code: this.cs0x.error});
            gT2x.bU0x("info load error")
        }
    };
    b8h.bra8S = function () {
        if (this.dz1x) {
            var V9M = this.cs0x.playUrl;
            if (this.cs0x.time > 0 && (this.cs0x.loadState == LoadState.IN_RE_GET_URL || this.cs0x.loadState == LoadState.IN_RE_GET_URL)) {
                V9M += "#t=" + this.cs0x.time
            }
            this.dz1x.setSrc(V9M);
            gT2x.oz4D("load mp3: {0},loadState: {1}.", V9M, this.cs0x.loadState)
        }
    };
    b8h.bEg1x = function () {
        if (/#t=(\d+)$/.test(this.dz1x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b8h.Kr2x = function () {
        var bz0x = parseInt(this.cs0x.time) || 0, cjZ9Q = this.bEg1x();
        if (bz0x === cjZ9Q) {
            this.dz1x.load()
        } else {
            this.dz1x.setSrc(this.cs0x.playUrl + "#t=" + bz0x)
        }
        this.cs0x.loadState = LoadState.IN_RELOAD;
        this.we7X();
        gT2x.oz4D("reload from: {0}", bz0x)
    };
    b8h.bDh1x = function () {
        this.cs0x.loadState = LoadState.IN_RE_GET_URL;
        this.bCX1x()
    };
    b8h.bEn1x = function () {
        var ur7k = getHost(this.cs0x.playUrl);
        if (ur7k) {
            for (var i = 0; i < this.pT5Y.length; i++) {
                var hu2x = this.pT5Y[i] || [], r9i = hu2x.indexOf(ur7k);
                if (r9i >= 0 && hu2x.length > 1) {
                    return hu2x[(r9i + 1) % hu2x.length]
                }
            }
        }

        function getHost(V9M) {
            if (CDN_HOST_REG.test(V9M)) return RegExp.$1
        }
    };
    b8h.cjU9L = function () {
        this.cs0x.playUrl = this.cs0x.playUrl.replace(CDN_HOST_REG, this.bEn1x());
        this.cs0x.loadState = LoadState.IN_SWITCH_CDN;
        this.bra8S();
        this.we7X()
    };
    b8h.cki9Z = function () {
        if (this.cs0x.loadState == LoadState.LOAD_START) {
            this.cs0x.loadState = LoadState.LOADED_META;
            if (this.dz1x.type == "audio") {
                this.cs0x.duration = this.dz1x.getDuration()
            }
            this.ok4o("loadedmeta", {duration: this.cs0x.duration})
        } else {
            this.cs0x.loadState = LoadState.LOADED_META
        }
        if (this.cs0x.play) {
            this.dz1x.play()
        } else {
            this.dz1x.pause()
        }
        if (this.cs0x.time && parseInt(this.cs0x.time) != this.bEg1x()) {
            this.dz1x.setCurrentTime(this.cs0x.time)
        }
        this.EV0x();
        this.Pi3x();
        bCC1x = true;
        gT2x.oz4D("loaded meta")
    };
    b8h.ckh9Y = function () {
        this.cs0x.ended = true;
        this.ok4o("ended")
    };
    b8h.we7X = function () {
        if (!this.cs0x.waiting) {
            this.cs0x.waiting = true;
            this.cs0x.waitTimestamp = +(new Date);
            this.ok4o("waiting")
        }
    };
    b8h.Pi3x = function () {
        this.cs0x.waiting = false;
        this.cs0x.waitTimestamp = 0;
        this.ok4o("playing")
    };
    b8h.sJ5O = function () {
        this.ok4o("play")
    };
    b8h.brm8e = function () {
        this.ok4o("pause")
    };
    b8h.ckg9X = function () {
        if (this.cs0x.loadState != LoadState.LOADED_META) return;
        var bz0x = this.dz1x.getCurrentTime();
        if (this.cs0x.waiting && bz0x > this.cs0x.time) {
            this.Pi3x()
        }
        this.cs0x.time = bz0x;
        this.ok4o("timeupdate", {time: this.cs0x.time, duration: this.cs0x.duration})
    };
    b8h.rA5F = function (d9g) {
        if (this.cs0x.loadState != LoadState.LOADED_META) return;
        var m9d = {};
        if (d9g.data) {
            m9d.total = d9g.data.total;
            m9d.loaded = d9g.data.loaded
        } else {
            var wZ8R = this.dz1x.getBuffered(), bz0x = this.dz1x.getCurrentTime(), og4k = 0;
            for (var i = 0; i < wZ8R.length; i++) {
                if (bz0x > wZ8R.start(i) && bz0x < wZ8R.end(i)) {
                    og4k = wZ8R.end(i);
                    break
                }
            }
            m9d.total = this.cs0x.duration;
            m9d.loaded = Math.min(og4k, m9d.total)
        }
        this.ok4o("progress", m9d)
    };
    b8h.EV0x = function () {
        if (this.cs0x.retry) {
            clearTimeout(this.cs0x.retry.tid);
            this.cs0x.retry = null
        }
    };
    b8h.ei1x = function () {
        var bQ0x = this.dz1x.getError();
        gT2x.bU0x("media error code: {0}, netState: {1}", bQ0x.code, this.dz1x.getNetworkState());
        if (bQ0x.code == MediaError.MEDIA_ERR_NETWORK || bQ0x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var EL0x = l9c.bhR6L();
            if (!this.cs0x.retry) {
                this.cs0x.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cs0x.retry.tid)
            }
            if (this.cs0x.retry.level == RetryLevel.NONE) {
                if (this.bDb1x()) {
                    this.cs0x.retry.level = RetryLevel.GET_URL;
                    this.bDh1x();
                    gT2x.oz4D("Url expired, get url.")
                } else {
                    this.cs0x.retry.level = RetryLevel.RELOAD;
                    this.cs0x.retry.tid = setTimeout(this.Kr2x.g9d(this), 3e3);
                    gT2x.oz4D("Reload mp3 3s later.")
                }
            } else if (this.cs0x.retry.level == RetryLevel.GET_URL) {
                this.cs0x.retry.level = RetryLevel.RELOAD;
                this.cs0x.retry.tid = setTimeout(this.Kr2x.g9d(this), 3e3);
                gT2x.oz4D("Reload mp3 3s later.")
            } else if (this.cs0x.retry.level == RetryLevel.RELOAD) {
                this.cs0x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bEn1x()) {
                    this.cs0x.retry.tid = setTimeout(this.cjU9L.g9d(this), 5e3);
                    gT2x.oz4D("Switch CDN 5s later.")
                } else {
                    this.cs0x.retry.tid = setTimeout(this.Kr2x.g9d(this), 5e3);
                    gT2x.oz4D("Reload mp3 5s later.")
                }
            } else if (!bCC1x && this.dz1x.type == "audio" && !EL0x.useFlash && !cP0x.WC2x.mac && l9c.bgD6x().supported) {
                EL0x.useFlash = true;
                l9c.EK0x(EL0x);
                this.ckc9T("flash")
            } else {
                this.EV0x();
                this.fx1x();
                this.cs0x.error = ErrorType.NET_ERR;
                this.ok4o("error", {code: this.cs0x.error});
                gT2x.bU0x("error can not retry.")
            }
        } else {
            this.EV0x();
            this.fx1x();
            this.cs0x.error = ErrorType.UNKNOWN_ERR;
            this.ok4o("error", {code: this.cs0x.error});
            gT2x.bU0x("error can not retry.")
        }
    };
    b8h.bre8W = function () {
        var hg2x = 0, bEz1x = 5e3;
        return function () {
            this.we7X();
            clearTimeout(hg2x);
            setTimeout(function () {
                var fN2x = +(new Date);
                if (this.cs0x.waiting && fN2x - this.cs0x.waitTimestamp >= bEz1x && this.cs0x.stalledRetryCount < MAX_STALLED_RETRY) {
                    gT2x.oz4D("stalled too long retry.");
                    this.cs0x.stalledRetryCount++;
                    this.Kr2x()
                }
            }.g9d(this), bEz1x);
            gT2x.oz4D("stalled")
        }
    }();
    b8h.bDb1x = function () {
        var fN2x = +(new Date);
        return fN2x > this.cs0x.expireTime
    };
    b8h.ckd9U = function () {
        var bz0x = parseInt(this.cs0x.time) || 0;
        this.dz1x.setSrc(this.cs0x.playUrl + "#t=" + bz0x);
        this.cs0x.loadState = LoadState.IN_RELOAD;
        this.we7X();
        gT2x.oz4D("recover from: {0}", bz0x)
    };
    b8h.ok4o = function (W9N, i9b) {
        h9c.x9o(D9u.fp1x, "playaction", {action: W9N, data: i9b || {}})
    };
    H9y.fv1x.B9s({element: D9u.fp1x, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c9h = NEJ.P, h9c = c9h("nej.v"), H9y = c9h("nej.ut"), D9u = c9h("nm.w"), b8h;
    D9u.Ec0x = NEJ.C();
    b8h = D9u.Ec0x.O9F(D9u.fp1x);
    K9B = D9u.Ec0x.ch0x;
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.cjT9K = function (bK0x) {
        this.VT2x(bK0x);
        this.eB1x()
    };
    b8h.bqP8H = function () {
        this.fx1x()
    };
    b8h.vo7h = function (d9g) {
        if (d9g.action == "play") {
            this.fx1x()
        }
    };
    b8h.ok4o = function (W9N, i9b) {
        h9c.x9o(D9u.Ec0x, "tmpplayaction", {action: W9N, data: i9b || {}, tmp: true})
    };
    b8h.rB5G = function () {
        return this.cs0x
    };
    H9y.fv1x.B9s({element: D9u.Ec0x, event: ["tmpplayaction"]})
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), ff1x = c9h("nej.n"),
        v9m = c9h("nej.j"), H9y = c9h("nej.ut"), bd0x = c9h("nej.ui"), D9u = c9h("nm.w"), n9e = c9h("nm.l"),
        jG3x = c9h("nm.c"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), b8h, K9B,
        YU3x = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var bqE8w = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    D9u.bqC8u = NEJ.C();
    b8h = D9u.bqC8u.O9F(bd0x.eo1x);
    b8h.cl0x = function (e9f) {
        this.cr0x(e9f);
        var j9a = a8i.I9z(this.o9f, "j-flag");
        this.cvC1x = j9a.shift();
        this.cjR9I = j9a.shift();
        this.EZ0x = j9a.shift();
        this.bqB8t = j9a.shift();
        this.bqy8q = [j9a.shift(), j9a.shift(), j9a.shift(), j9a.shift(), j9a.shift(), j9a.shift()];
        this.TL1x = j9a.shift();
        this.bFf1x = j9a.shift();
        this.qp5u = {list: this.bqy8q, selected: "z-curr", onchange: this.bFi1x.g9d(this)};
        h9c.s9j(this.EZ0x, "input", this.TX1x.g9d(this));
        h9c.s9j(this.EZ0x, "propertychange", this.TX1x.g9d(this));
        h9c.s9j(this.EZ0x, "keyup", this.TX1x.g9d(this));
        h9c.s9j(this.cjR9I, "click", this.TX1x.g9d(this));
        h9c.s9j(this.TL1x, "click", this.cw0x.g9d(this));
        h9c.s9j(this.bFf1x, "click", function () {
            this.x9o("oncancel", {})
        }.g9d(this));
        this.R9I = p9g.DV0x.fW2x();
        this.Kx2x = top.nm.w.Ec0x.fW2x();
        H9y.fv1x.B9s({element: top.nm.w.Ec0x, event: ["tmpplayaction"]});
        this.ql5q = {limit: 100, offset: 0, parent: this.TL1x, onbeforelistload: this.pR5W.g9d(this)};
        p9g.sk = "fuck" + a8i.u9l(this.bqB8t, "xname") + "458";
        h9c.s9j(top.nm.w.Ec0x, "tmpplayaction", this.vo7h.g9d(this))
    };
    b8h.bZ0x = function () {
        this.ca0x = "m-xwgt-publish-search"
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        if (!!this.zT9K) {
            this.zT9K.S9J();
            delete this.zT9K
        }
        this.qp5u.index = bqE8w[e9f.type || "song"];
        this.zT9K = H9y.Ez0x.B9s(this.qp5u);
        this.EZ0x.value = "";
        this.EZ0x.focus();
        this.su5z = "";
        this.cvD1x = 0;
        if (e9f.showMV == true) {
            this.bqy8q[bqE8w["mv"]].parentNode.style.display = "";
            a8i.y9p(this.bqB8t, "srchtab-1")
        } else {
            this.bqy8q[bqE8w["mv"]].parentNode.style.display = "none";
            a8i.w9n(this.bqB8t, "srchtab-1")
        }
        if (!!this.ds1x) {
            this.ds1x = this.ds1x.S9J()
        }
        if (e9f.hideBack) {
            a8i.y9p(this.bFf1x.parentNode, "f-hide")
        }
    };
    b8h.bE0x = function () {
        this.Kx2x.bqP8H();
        this.bH0x()
    };
    b8h.TX1x = function () {
        var value = this.EZ0x.value.trim();
        if (value && value.length) {
            if (value != this.su5z) {
                this.su5z = value;
                this.bFi1x({index: this.zT9K.rR5W()})
            }
        } else {
            if (this.ds1x) {
                this.ds1x = this.ds1x.S9J()
            }
        }
        this.su5z = value
    };
    b8h.cw0x = function () {
        var cjP9G = function (E9v) {
            return a8i.bB0x(E9v, "sitm") || a8i.bB0x(E9v, "itm") || a8i.bB0x(E9v, "mv-item")
        }, cjO9F = function (E9v) {
            return a8i.bB0x(E9v, "ply")
        }, bFL1x = function () {
            n9e.Z0x.N9E({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, cjK9B = function () {
            n9e.Z0x.N9E({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, bqs8k = function (bf0x) {
            if (bf0x && bf0x.privilege && bf0x.privilege.toast) {
                v9m.br0x("/api/song/toast", {
                    query: {id: bf0x.id},
                    type: "json",
                    onload: OB3x.g9d(this),
                    onerror: OB3x.g9d(this)
                })
            } else {
                OC3x()
            }
        }, OB3x = function (P9G) {
            OC3x((P9G || X0x).toast)
        }, OC3x = function (bF0x) {
            n9e.Z0x.N9E({type: 2, tip: bF0x || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d9g) {
            var DM0x = h9c.U9L(d9g, cjO9F), j9a = h9c.U9L(d9g, cjP9G), dZ1x = this.Kx2x.rB5G();
            if (!!j9a) {
                h9c.bh0x(d9g);
                this.Ms2x = a8i.u9l(j9a, "id");
                this.Mx2x = a8i.u9l(j9a, "type");
                if (this.Mx2x == 18) {
                    var bK0x = this.R9I.eg1x(this.Ms2x), pj4n = l9c.om4q(bK0x);
                    if (!DM0x) {
                        if (pj4n == 10) {
                            bFL1x();
                            return
                        } else if (pj4n == 100) {
                            bqs8k(bK0x);
                            return
                        }
                    } else {
                        if (pj4n == 10) {
                            bFL1x();
                            return
                        } else if (pj4n == 100) {
                            bqs8k(bK0x);
                            return
                        } else if (pj4n == 11) {
                            cjK9B();
                            return
                        } else {
                            a8i.w9n(this.zO9F, "z-pause z-loading");
                            if (DM0x == this.zO9F && dZ1x.play && !dZ1x.ended) {
                                this.Kx2x.bqP8H()
                            } else {
                                this.zO9F = DM0x;
                                this.Kx2x.cjT9K(bK0x)
                            }
                            return
                        }
                    }
                } else if (this.Mx2x == 70) {
                    if (a8i.bB0x(j9a, "z-noprogram")) {
                        n9e.Z0x.N9E({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.cjJ9A()
            }
        }
    }();
    b8h.cjJ9A = function () {
        var hp2x = this.R9I.eg1x(this.Ms2x), rN5S = l9c.bJi2x(this.Mx2x, hp2x);
        rN5S.title = rN5S.title || "";
        rN5S.author = rN5S.author || "";
        rN5S.picUrl = rN5S.picUrl || "";
        rN5S.authors = rN5S.authors || "";
        if (this.Mx2x == 70) {
            this.Ms2x = this.Ms2x.slice(0, -4)
        }
        this.x9o("onfinish", {id: this.Ms2x, type: this.Mx2x, data: rN5S})
    };
    b8h.vo7h = function (d9g) {
        var i9b = d9g.data;
        if (!this.zO9F) {
            return
        }
        switch (d9g.action) {
            case"play":
                a8i.ev1x(this.zO9F, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a8i.w9n(this.zO9F, "z-pause z-loading");
                break;
            case"error":
                n9e.Z0x.N9E({type: 2, tip: "试听遇到问题，播放失败"});
                a8i.w9n(this.zO9F, "z-pause z-loading");
                break;
            case"playing":
                a8i.ev1x(this.zO9F, "z-loading", "z-pause");
                break;
            case"waiting":
                a8i.ev1x(this.zO9F, "z-pause", "z-loading");
                break
        }
    };
    b8h.cjI9z = function (d9g) {
        if (d9g.result.code == 407) {
            this.TL1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.TL1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b8h.bFi1x = function (d9g) {
        if (!this.su5z || d9g.index < 0 || d9g.index > 5) {
            return
        }
        this.Kx2x.bqP8H();
        var bc0x = YU3x[d9g.index], e9f = NEJ.X({}, this.ql5q);
        e9f.cache = {klass: p9g.DV0x, clear: true, onerror: this.cjI9z.g9d(this)};
        e9f.cache.lkey = "search-publish-" + bc0x.type + "-" + this.su5z;
        e9f.item = {klass: bc0x.item, getRestrictLevel: l9c.om4q, dur2time: l9c.lD3x};
        if (!e9f.cache.data) {
            e9f.cache.data = {}
        }
        e9f.cache.data.s = this.su5z;
        e9f.cache.data.type = bc0x.type;
        e9f.cache.data.isPub = true;
        if (bc0x.type == 1) {
            e9f.cache.data.hlpretag = '<span class="s-fc7">';
            e9f.cache.data.hlposttag = "</span>"
        }
        e9f.onemptylist = this.cjH9y.g9d(this, this.su5z);
        if (!!this.DI0x) this.R9I.tY7R(this.DI0x);
        if (!!this.ds1x) {
            this.ds1x = this.ds1x.S9J()
        }
        this.ds1x = H9y.nl4p.B9s(e9f);
        this.DI0x = e9f.cache.lkey
    };
    b8h.pR5W = function (d9g) {
        d9g.value = a8i.hY2x("m-publish-search-loading")
    };
    b8h.cjH9y = function (J9A, d9g) {
        a8i.dK1x(d9g.parent, "m-publish-emtpy-message", {key: J9A});
        d9g.stopped = true
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), cP0x = c9h("nej.p"), v9m = c9h("nej.j"),
        cg0x = c9h("nej.ut"), bI0x = c9h("nej.ui"), D9u = c9h("nm.w"), b8h, K9B;
    var cjG9x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D9u.DH0x = NEJ.C();
    b8h = D9u.DH0x.O9F(bI0x.eo1x);
    var gh2x = a8i.em1x("m-wgt-receiverInput");
    var cjF9w = a8i.em1x("m-wgt-receiverList");
    var hX2x = a8i.rX5c(cjG9x);
    var cjD9u = a8i.em1x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b8h.cl0x = function (e9f) {
        this.ba0x = [];
        this.uL7E = e9f.receiver || null;
        this.cjC9t = e9f.unique || false;
        this.mn3x = e9f.err;
        this.bHb2x(this.bHf2x, e9f.uid);
        this.cr0x(e9f)
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.Np3x();
        this.NE3x();
        this.RH4L();
        if (e9f.receiver) this.bqh8Z(e9f.receiver.nickname, e9f.receiver.userId);
        a8i.Y0x(this.yp8h, "display", "block");
        a8i.Y0x(this.bqg8Y, "cursor", "text");
        a8i.Y0x(this.yp8h, "cursor", "text")
    };
    b8h.bZ0x = function () {
        var i9b = this.bHC2x();
        this.ca0x = a8i.ie2x(a8i.bP0x(gh2x, {receiver: this.uL7E, users: i9b}));
        this.kT3x = hX2x
    };
    b8h.bR0x = function () {
        this.cb0x();
        var bx0x = a8i.I9z(this.o9f, "j-flag");
        var gx2x = a8i.I9z(this.o9f, "j-item");
        this.bqg8Y = bx0x[0];
        this.bHG2x = bx0x[1];
        this.dF1x = bx0x[2];
        this.yp8h = bx0x[3];
        this.SD4H = bx0x[4];
        this.bqb8T = bx0x[5];
        this.fh1x = gx2x;
        a8i.y9p(this.fh1x[0], "j-selected");
        h9c.s9j(this.dF1x, "keyup", this.bqa8S.g9d(this));
        h9c.s9j(this.dF1x, "keydown", this.NU3x.g9d(this));
        h9c.s9j(this.dF1x, "focus", this.ke3x.g9d(this));
        h9c.s9j(this.SD4H, "click", this.cjA9r.g9d(this));
        h9c.s9j(this.bqg8Y, "click", this.cjz9q.g9d(this));
        h9c.s9j(document.body, "click", this.nz4D.g9d(this));
        h9c.s9j(this.dF1x, "input", this.fo1x.g9d(this));
        h9c.s9j(this.dF1x, "blur", this.op4t.g9d(this))
    };
    b8h.bE0x = function (e9f) {
        h9c.mB4F(document.body, "click", this.nz4D.g9d(this));
        this.bH0x();
        this.RH4L();
        this.cjx9o();
        this.nz4D()
    };
    b8h.bqa8S = function (d9g) {
        h9c.bh0x(d9g);
        var iU2x = d9g.keyCode || d9g.which;
        var bi0x = this.dF1x.value;
        var bp0x = this.fh1x.length;
        var qW5b = a8i.I9z(this.o9f, "j-selected")[0];
        switch (iU2x) {
            case 13:
                var jY3x = a8i.fT2x(qW5b, "data-username");
                var hv2x = a8i.fT2x(qW5b, "data-userId");
                this.bqh8Z(jY3x, hv2x);
                this.nz4D();
                this.dF1x.value = "";
                break;
            case 38:
                var r9i = a8i.fT2x(qW5b, "data-index") - 1 < 0 ? bp0x - 1 : a8i.fT2x(qW5b, "data-index") - 1;
                a8i.w9n(qW5b, "j-selected");
                a8i.y9p(this.fh1x[r9i], "j-selected");
                break;
            case 40:
                var r9i = parseInt(a8i.fT2x(qW5b, "data-index")) + 1 >= bp0x ? 0 : parseInt(a8i.fT2x(qW5b, "data-index")) + 1;
                a8i.w9n(qW5b, "j-selected");
                a8i.y9p(this.fh1x[r9i], "j-selected");
                break;
            default:
                this.uw7p()
        }
    };
    b8h.NU3x = function (d9g) {
        var iU2x = d9g.keyCode || d9g.which;
        var bi0x = this.dF1x.value;
        var r9i = a8i.I9z(this.o9f, "j-receiver").length - 1;
        if (iU2x === 8 && bi0x === "") this.cjv9m(r9i)
    };
    b8h.fo1x = function (d9g) {
        var bi0x = this.dF1x.value;
        if (bi0x.length > 10) {
            this.dF1x.value = bi0x.substring(0, 10);
            return
        }
        cP0x.cS0x.browser == "ie" && cP0x.cS0x.version < "7.0" ? setTimeout(this.bpT8L.g9d(this), 0) : this.bpT8L();
        this.NE3x()
    };
    b8h.ke3x = function () {
        if (this.ba0x[0]) this.uw7p(); else this.bHb2x(this.cju9l);
        a8i.Y0x(this.yp8h, "display", "none")
    };
    b8h.op4t = function () {
        var bp0x = a8i.I9z(this.o9f, "j-receiver").length;
        if (this.dF1x.value.trim() == "" && bp0x <= 0) a8i.Y0x(this.yp8h, "display", "block")
    };
    b8h.bqh8Z = function (jY3x, hv2x) {
        var Fi0x = this.OV3x();
        if (Fi0x.length >= 10) {
            this.dw1x();
            return
        }
        var bd0x;
        for (bd0x = 0; bd0x < Fi0x.length; bd0x++) {
            if (Fi0x[bd0x] == hv2x) {
                this.nz4D();
                return
            }
        }
        if (!jY3x || !hv2x) return;
        var f9e = a8i.dt1x(a8i.ie2x(a8i.bP0x(cjD9u, {username: jY3x, userId: hv2x})));
        var bD0x = this.bHG2x.parentNode;
        if (this.cjC9t) {
            this.RH4L()
        }
        bD0x.insertBefore(f9e, this.bHG2x);
        this.dF1x.value = "";
        var bp0x = a8i.I9z(this.o9f, "j-receiver").length;
        if (bp0x > 1) a8i.Y0x(this.yp8h, "display", "none");
        this.bpT8L();
        this.NE3x()
    };
    b8h.RH4L = function () {
        var OX3x = a8i.I9z(this.o9f, "j-receiver");
        var bd0x;
        if (OX3x.length > 0) {
            for (bd0x = 0; bd0x < OX3x.length; bd0x++) {
                a8i.cK0x(OX3x[bd0x], false)
            }
        }
    };
    b8h.cjx9o = function () {
        this.dF1x.value = ""
    };
    b8h.cjv9m = function (r9i) {
        this.dw1x(!0);
        var OX3x = a8i.I9z(this.o9f, "j-receiver");
        a8i.cK0x(OX3x[r9i], false);
        this.NE3x()
    };
    b8h.uw7p = function () {
        var bi0x = this.dF1x.value;
        var bw0x = bi0x.trim().toLowerCase();
        var i9b;
        bw0x = bw0x.replace(/\[/g, "\\[");
        bw0x = bw0x.replace(/\]/g, "\\]");
        i9b = this.bHC2x(bw0x);
        this.cjr9i(i9b)
    };
    b8h.nz4D = function (d9g) {
        a8i.Y0x(this.SD4H, "display", "none")
    };
    b8h.dw1x = function (gz2x) {
        if (gz2x && this.mn3x) {
            a8i.Y0x(this.mn3x, "display", "none");
            return
        }
        if (this.mn3x) a8i.Y0x(this.mn3x, "display", "block")
    };
    b8h.cjA9r = function (d9g) {
        h9c.cf0x(d9g);
        var cZ1x = d9g.target || d9g.srcElement;
        if (a8i.bB0x(cZ1x, "j-flag")) return;
        var bD0x = cZ1x.nodeName.toLowerCase() == "a" ? cZ1x.parentNode : cZ1x.parentNode.parentNode;
        var jY3x = a8i.fT2x(bD0x, "data-username");
        var hv2x = a8i.fT2x(bD0x, "data-userId");
        this.bqh8Z(jY3x, hv2x);
        this.nz4D();
        a8i.Y0x(this.yp8h, "display", "none")
    };
    b8h.cjz9q = function (d9g) {
        h9c.bh0x(d9g);
        var cZ1x = d9g.target || d9g.srcElement;
        if (a8i.bB0x(cZ1x.parentNode, "j-receiver")) {
            a8i.cK0x(cZ1x.parentNode, false);
            this.dw1x(!0);
            this.NE3x()
        } else this.dF1x.focus()
    };
    b8h.bpT8L = function () {
        this.bqb8T.innerHTML = this.dF1x.value;
        var dl1x = this.bqb8T.offsetWidth + 2;
        a8i.Y0x(this.dF1x, "width", dl1x + "px")
    };
    b8h.NE3x = function () {
        var Wr2x = a8i.hR2x(this.dF1x, this.o9f).y;
        var bJv2x = Math.floor((Wr2x - 8) / 27);
        if (bJv2x < 0) return;
        a8i.Y0x(this.bqg8Y, "height", 19 + bJv2x * 29 + "px")
    };
    b8h.Np3x = function () {
        var pF4J = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pF4J.length; i++) {
            a8i.Y0x(this.bqb8T, pF4J[i], a8i.da1x(this.dF1x, pF4J[i]))
        }
    };
    b8h.bHb2x = function (dq1x, C9t) {
        var cW1x = C9t ? C9t : window.GUser.userId;
        var V9M = "/api/user/getfollows/" + cW1x;
        var fD1x = v9m.br0x(V9M, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dq1x.g9d(this),
            onerror: function (i9b) {
                this.ba0x = []
            },
            onbeforerequest: function (i9b) {
            }
        })
    };
    b8h.bHf2x = function (i9b) {
        this.ba0x = JSON.parse(i9b).follow || [];
        var C9t = GUser.userId;
        for (var i = 0; i < this.ba0x.length; i++) {
            if (this.ba0x[i].userId == C9t) {
                this.ba0x.splice(i, 1);
                continue
            }
            this.ba0x[i].avatarUrl = this.ba0x[i].avatarUrl + "?param=30y30"
        }
    };
    b8h.cju9l = function (i9b) {
        if (this.ba0x[0]) return;
        this.bHf2x(i9b);
        this.uw7p()
    };
    b8h.bHC2x = function (bw0x) {
        var bw0x = bw0x ? bw0x : "";
        this.ba0x = this.ba0x[0] ? this.ba0x : [];
        var bp0x = this.ba0x.length;
        var Pb3x = this.OV3x();
        var sh5m = [];
        var Pl3x, Pn3x, bpO8G;
        if (!this.ba0x[0]) return sh5m;
        for (var bd0x = 0; bd0x < bp0x; bd0x++) {
            bpO8G = false;
            for (var v9m = 0; v9m < Pb3x.length; v9m++) {
                if (this.ba0x[bd0x].userId == Pb3x[v9m]) {
                    bpO8G = true;
                    break
                }
            }
            if (bpO8G) continue;
            Pl3x = this.ba0x[bd0x].nickname.toLowerCase().search(bw0x);
            Pn3x = this.ba0x[bd0x].py ? this.ba0x[bd0x].py.toLowerCase().search(bw0x) : -1;
            if (Pl3x !== -1 || Pn3x != -1) sh5m.push(this.ba0x[bd0x])
        }
        return sh5m
    };
    b8h.cjr9i = function (i9b) {
        a8i.dK1x(this.SD4H, cjF9w, {users: i9b});
        a8i.y9p(a8i.I9z(this.o9f, "j-item")[0], "j-selected");
        this.fh1x = a8i.I9z(this.o9f, "j-item");
        a8i.Y0x(this.SD4H, "display", "block")
    };
    b8h.OV3x = function () {
        var sh5m = a8i.I9z(this.o9f, "j-receiver") || [];
        var hv2x = [];
        for (var i = 0; i < sh5m.length; i++) {
            hv2x.push(a8i.fT2x(sh5m[i], "data-id"))
        }
        return hv2x
    };
    b8h.cvE1x = function () {
        var hv2x = this.OV3x();
        var sh5m = [];
        for (var i = 0; i < hv2x.length; i++) {
            for (var j = 0; j < this.ba0x.length; j++) {
                if (hv2x[i] == this.ba0x[j].userId) sh5m.push(this.ba0x[j])
            }
        }
        return sh5m
    };
    b8h.cjp9g = function () {
        this.RH4L()
    };
    D9u.DH0x.N9E = function (e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n9e.od4h.N9E({title: "登录"});
            return
        }
        e9f = e9f || {};
        if (e9f.parent === undefined) e9f.parent = document.body;
        !!this.eM1x && this.eM1x.S9J();
        this.eM1x = this.B9s(e9f)
    };
    D9u.DH0x.bq0x = function () {
        !!this.eM1x && this.eM1x.S9J()
    };
    D9u.DH0x.CZ0x = function () {
        return this.nz4D()
    };
    D9u.DH0x.cvF1x = function () {
        return this.uw7p()
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), k9b = c9h("nej.u"), h9c = c9h("nej.v"), l9c = c9h("nm.x"), n9e = c9h("nm.l"),
        b8h, K9B;
    n9e.Fk0x = NEJ.C();
    b8h = n9e.Fk0x.O9F(n9e.bfn6h);
    K9B = n9e.Fk0x.ch0x;
    b8h.bk0x = function () {
        var CX0x;
        var cjm9d = function (A9r, J9A) {
            CX0x = CX0x || [];
            if (J9A != "18") CX0x.push({key: J9A, value: A9r})
        };
        return function (e9f) {
            this.bl0x(e9f);
            if (e9f.upwards) {
                a8i.y9p(this.o9f, "m-emts-up")
            } else {
                a8i.w9n(this.o9f, "m-emts-up")
            }
            if (e9f.rightwards) {
                a8i.y9p(this.o9f, "m-emts-right")
            } else {
                a8i.w9n(this.o9f, "m-emts-right")
            }
            if (!CX0x) {
                var bv0x = l9c.cqc0x();
                k9b.ek1x(bv0x, cjm9d)
            }
            var bp0x = CX0x.length;
            CX0x.splice(bp0x - 2, 0, {key: "18", value: "186"});
            this.YS3x = CX0x;
            this.cjk9b = !!e9f.autoHide
        }
    }();
    b8h.bZ0x = function () {
        this.ca0x = "ntp-portrait"
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.I9z(this.o9f, "j-flag");
        this.bC0x = j9a[0];
        this.cjj9a = j9a[1];
        this.cji9Z = j9a[2];
        this.cjg9X = j9a[3];
        h9c.s9j(this.bC0x, "click", this.wG8y.g9d(this));
        h9c.s9j(this.cjj9a, "click", this.CU0x.g9d(this, 1));
        h9c.s9j(this.cjg9X, "click", this.CU0x.g9d(this, 2))
    };
    b8h.bpE8w = function (r9i) {
        this.RL4P = r9i;
        var bj0x = (r9i - 1) * 50;
        var j9a = this.YS3x.slice(bj0x, Math.min(bj0x + 50, this.YS3x.length));
        this.bC0x.innerHTML = a8i.bP0x("jst-portrait", {plist: j9a}, {purl: l9c.bAU0x});
        this.cji9Z.innerText = r9i + "/" + Math.ceil(this.YS3x.length / 50)
    };
    b8h.CU0x = function (r9i) {
        var cjf9W = Math.ceil(this.YS3x.length / 50);
        if (r9i == 1 && this.RL4P == 1 || r9i == 2 && this.RL4P == cjf9W) return;
        r9i == 1 ? this.bpE8w(this.RL4P - 1) : this.bpE8w(this.RL4P + 1)
    };
    b8h.wG8y = function (d9g) {
        var E9v = h9c.U9L(d9g, "d:text");
        if (!E9v) return;
        var d9g = {url: a8i.u9l(E9v, "url"), text: a8i.u9l(E9v, "text")};
        this.x9o("onselect", d9g);
        if (this.cjk9b && !d9g.stopped) {
            this.bq0x()
        }
    };
    b8h.N9E = function () {
        K9B.N9E.call(this);
        this.bpE8w(1)
    }
})();
(function () {
    var c9h = NEJ.P, h9c = c9h("nej.v"), k9b = c9h("nej.u"), cP0x = c9h("nej.p"), bb0x = c9h("nej.h"),
        H9y = c9h("nej.ut"), jo3x = /^[#?]+/, CW0x = /#(.*?)$/, wL8D = window,
        bpy8q = !history.pushState || cP0x.WC2x.android || !history.auto;
    var Sa4e = function (V9M, bps8k) {
        wL8D.history[!bps8k ? "pushState" : "replaceState"](null, document.title, V9M)
    };
    var Sj4n = function () {
        return location.parse(wL8D.location.href)
    };
    Sa4e = Sa4e.ed1x(function (d9g) {
        if (!bpy8q) return;
        var bg0x = d9g.args;
        d9g.stopped = !0;
        V9M = bg0x[0].replace(jo3x, "");
        !bg0x[1] ? wL8D.location.hash = V9M : wL8D.location.replace("#" + V9M)
    });
    Sj4n = Sj4n.ed1x(function (d9g) {
        if (!bpy8q) return;
        d9g.stopped = !0;
        var dG1x = CW0x.test(wL8D.location.href) ? RegExp.$1 : "";
        d9g.value = location.parse(dG1x.replace(jo3x, ""))
    });
    location.redirect = function (V9M, bps8k) {
        Sa4e(V9M, bps8k);
        return this
    };
    location.active = function () {
        var eU1x, V9M, iQ2x, cF0x, LK2x;
        var bpr8j = function (hi2x) {
            if (!!cF0x) {
                cF0x = !1;
                return
            }
            var d9g = {oldValue: iQ2x, newValue: Sj4n()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h9c.x9o(location, "beforeurlchange", d9g);
                if (d9g.stopped) {
                    if (!!iQ2x) {
                        cF0x = !0;
                        Sa4e(iQ2x.href, !0)
                    }
                    return
                }
            }
            V9M = wL8D.location.href;
            iQ2x = d9g.newValue;
            h9c.x9o(location, "urlchange", iQ2x);
            bb0x.bpa8S(iQ2x.href)
        };
        var bLq3x = function () {
            if (V9M != wL8D.location.href) bpr8j();
            eU1x = requestAnimationFrame(bLq3x)
        };
        return function (bL0x) {
            if (!!LK2x) return this;
            LK2x = !0;
            wL8D = bL0x || window;
            if (bpy8q && "onhashchange" in window && cP0x.mE4I.trident2) {
                h9c.s9j(wL8D, "hashchange", bpr8j);
                bpr8j()
            } else if (!eU1x) {
                eU1x = requestAnimationFrame(bLq3x)
            }
            return this
        }
    }();
    location.parse = function () {
        var fX2x = /^https?:\/\/.*?\//i, jo3x = /[?#]/;
        return function (V9M) {
            var m9d = {href: V9M};
            V9M = (V9M || "").replace(fX2x, "/").split(jo3x);
            var ct0x = 1;
            if (V9M[0] == "/" && (V9M[1] || "").indexOf("/") == 0) ct0x = 2;
            m9d.path = V9M.splice(0, ct0x).join("?");
            m9d.query = k9b.hq2x(V9M.join("&"));
            return m9d
        }
    }();
    location.same = function (V9M) {
        return Sj4n().href == V9M
    };
    H9y.fv1x.B9s({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), fK2x = c9h("nm.ut");
    fK2x.tM7F = function (eQ1x) {
        var gw2x = {text: "", start: 0, end: 0};
        if (eQ1x.setSelectionRange) {
            gw2x.start = eQ1x.selectionStart;
            gw2x.end = eQ1x.selectionEnd;
            gw2x.text = gw2x.start != gw2x.end ? eQ1x.value.substring(gw2x.start, gw2x.end) : ""
        } else if (document.selection) {
            var i, Tq4u = document.selection.createRange(), xF8x = document.body.createTextRange();
            xF8x.moveToElementText(eQ1x);
            gw2x.text = Tq4u.text;
            gw2x.bookmark = Tq4u.getBookmark();
            for (i = 0; xF8x.compareEndPoints("StartToStart", Tq4u) < 0 && Tq4u.moveStart("character", -1) !== 0; i++) {
                if (eQ1x.value.charAt(i) == "\n") {
                    i++
                }
            }
            gw2x.start = i;
            gw2x.end = gw2x.text.length + gw2x.start
        }
        return gw2x
    };
    fK2x.TE1x = function (eQ1x, gw2x) {
        var xF8x;
        if (!gw2x) {
            gw2x = {text: "", start: 0, end: 0}
        }
        eQ1x.focus();
        if (eQ1x.setSelectionRange) {
            eQ1x.setSelectionRange(gw2x.start, gw2x.end)
        } else if (eQ1x.createTextRange) {
            xF8x = eQ1x.createTextRange();
            if (eQ1x.value.length === gw2x.start) {
                xF8x.collapse(false);
                xF8x.select()
            } else {
                xF8x.moveToBookmark(gw2x.bookmark);
                xF8x.select()
            }
        }
    };
    fK2x.Fq0x = function (eQ1x, gw2x, cL0x) {
        var gw2x = gw2x || {text: "", start: 0, end: 0};
        var bpo8g, bLP3x, xF8x, JQ2x, bLR3x, bLS3x, CK0x;
        this.TE1x(eQ1x, gw2x);
        if (eQ1x.setSelectionRange) {
            bpo8g = eQ1x.value;
            bLP3x = bpo8g.substring(0, gw2x.start) + cL0x + bpo8g.substring(gw2x.end);
            bLR3x = bLS3x = gw2x.start + cL0x.length;
            CK0x = eQ1x.scrollTop;
            eQ1x.value = bLP3x;
            if (eQ1x.scrollTop != CK0x) {
                eQ1x.scrollTop = CK0x
            }
            eQ1x.setSelectionRange(bLR3x, bLS3x)
        } else if (eQ1x.createTextRange) {
            JQ2x = document.selection.createRange();
            JQ2x.text = cL0x;
            JQ2x.setEndPoint("StartToEnd", JQ2x);
            JQ2x.select()
        }
        h9c.x9o(eQ1x, "keyup")
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), cP0x = c9h("nej.p"), k9b = c9h("nej.u"),
        cg0x = c9h("nej.ut"), D9u = c9h("nm.w"), fK2x = c9h("nm.ut"), b8h;
    D9u.bLW3x = NEJ.C();
    b8h = D9u.bLW3x.O9F(cg0x.cy0x);
    b8h.cl0x = function (e9f) {
        this.cr0x(e9f)
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.fH1x = e9f.txt;
        this.CH0x = e9f.sgtsContainer;
        this.bMa3x = e9f.sgtsList[0];
        this.Uh1x = e9f.sgtsItem;
        this.nu4y = e9f.rangeData;
        this.Ft1x = e9f.atIndex;
        a8i.y9p(this.Uh1x[0], "selected-item");
        this.Ke2x()
    };
    b8h.bE0x = function () {
        this.bH0x();
        h9c.mB4F(document.body, "keyup", this.bMk3x.g9d(this));
        h9c.mB4F(document.body, "click", this.bMl3x.g9d(this))
    };
    b8h.Ke2x = function () {
        this.bT0x([[document.body, "keyup", this.bMk3x.g9d(this)], [document.body, "click", this.bMl3x.g9d(this)], [this.fH1x, "keydown", this.bMo3x.g9d(this)], [this.fH1x, "keypress", this.bMo3x.g9d(this)], [this.bMa3x, "click", this.bMp3x.g9d(this)], [this.bMa3x, "mouseover", this.CE0x.g9d(this)]])
    };
    b8h.CE0x = function (d9g) {
        var cZ1x = h9c.U9L(d9g);
        var q9h = a8i.I9z(this.CH0x, "selected-item");
        if (a8i.bB0x(cZ1x, "j-sgt")) {
            a8i.w9n(q9h[0], "selected-item");
            a8i.y9p(cZ1x, "selected-item")
        }
    };
    b8h.bMk3x = function (d9g) {
        var q9h = a8i.I9z(this.CH0x, "selected-item");
        var bp0x = this.Uh1x.length;
        var iU2x = d9g.keyCode || d9g.which;
        var r9i, i9b;
        switch (iU2x) {
            case 38:
                r9i = a8i.fT2x(q9h[0], "data-index") - 1 < 0 ? bp0x - 1 : a8i.fT2x(q9h[0], "data-index") - 1;
                a8i.w9n(q9h[0], "selected-item");
                a8i.y9p(this.Uh1x[r9i], "selected-item");
                break;
            case 40:
                r9i = parseInt(a8i.fT2x(q9h[0], "data-index")) + 1 >= bp0x ? 0 : parseInt(a8i.fT2x(q9h[0], "data-index")) + 1;
                a8i.w9n(q9h[0], "selected-item");
                a8i.y9p(this.Uh1x[r9i], "selected-item");
                break;
            case 13:
                this.bMp3x(d9g);
                break;
            case 27:
                this.nz4D();
                break;
            case 32:
                var bi0x = this.fH1x.value;
                var r9i = fK2x.tM7F(this.fH1x);
                if (bi0x.charAt(r9i.start - 1) !== " ") return;
                this.nz4D();
                break
        }
    };
    b8h.bMo3x = function (d9g) {
        var iU2x = d9g.keyCode || d9g.which;
        if (iU2x === 13 || iU2x === 38 || iU2x === 40) {
            h9c.cf0x(d9g);
            d9g.keyCode = 0;
            d9g.which = 0;
            d9g.returnvalue = false
        }
    };
    b8h.bMl3x = function (d9g) {
        var cZ1x = d9g.target || d9g.srcElement;
        if (cZ1x === this.fH1x) return;
        this.nz4D()
    };
    b8h.bMp3x = function (d9g) {
        h9c.bh0x(d9g);
        var q9h = a8i.I9z(this.CH0x, "selected-item")[0];
        var qW5b = d9g.target || d9g.srcElement;
        var t9k = d9g.type;
        if (a8i.bB0x(qW5b, "lst")) return;
        if (t9k == "click") {
            a8i.w9n(q9h, "selected-item");
            a8i.y9p(qW5b, "selected-item")
        } else qW5b = q9h;
        var i9b = qW5b.innerHTML + " ";
        this.nz4D();
        var gw2x = this.nu4y;
        gw2x.start = this.Ft1x + 1;
        if (cP0x.cS0x.browser == "ie" && cP0x.cS0x.version < "9.0") {
            this.fH1x.value = this.fH1x.value.substring(0, gw2x.start) + this.fH1x.value.substring(gw2x.end, this.fH1x.value.length);
            gw2x.end = gw2x.start
        }
        fK2x.Fq0x(this.fH1x, gw2x, i9b);
        h9c.x9o(this.fH1x, "keyup")
    };
    b8h.nz4D = function (d9g) {
        if (!!this.CH0x) a8i.Y0x(this.CH0x, "display", "none");
        this.S9J()
    };
    b8h.uw7p = function (d9g) {
        if (!!this.CH0x) a8i.Y0x(this.CH0x, "display", "block")
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), D9u = c9h("nm.w"),
        cg0x = c9h("nej.ut"), bI0x = c9h("nej.ui"), b8h;
    var cjd9U = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cjc9T = a8i.em1x("m-wgt-atlist");
    var hX2x = a8i.rX5c(cjd9U);
    D9u.bMx3x = NEJ.C();
    b8h = D9u.bMx3x.O9F(bI0x.eo1x);
    b8h.cl0x = function (e9f) {
        this.fz1x = {};
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.fz1x.txt = a8i.z9q(e9f.target);
        this.fz1x.data = e9f.data;
        this.fz1x.offset = e9f.offset;
        this.fz1x.rangeData = e9f.rangeData;
        this.fz1x.atIndex = e9f.atIndex;
        this.cjb9S(e9f);
        this.bl0x(e9f);
        this.fz1x.sgtsContainer = this.o9f;
        this.fz1x.sgtsList = a8i.I9z(this.o9f, "lst");
        this.fz1x.sgtsItem = a8i.I9z(this.o9f, "f-thide");
        this.Jd2x(e9f);
        this.cja9R = D9u.bLW3x.B9s(this.fz1x)
    };
    b8h.bE0x = function (e9f) {
        this.bH0x();
        this.cja9R.S9J()
    };
    b8h.bZ0x = function () {
        this.kT3x = hX2x
    };
    b8h.bR0x = function () {
        this.cb0x()
    };
    b8h.cjb9S = function (e9f) {
        this.o9f = a8i.dt1x(a8i.ie2x(a8i.bP0x(cjc9T, e9f.data)))
    };
    b8h.Jd2x = function (e9f) {
        var bMB3x = a8i.I9z(this.o9f, "selected-item")[0];
        if (bMB3x) a8i.w9n(bMB3x, "selected-item");
        var cN0x = e9f.offset.x + "px";
        var gH2x = e9f.offset.y + "px";
        a8i.Y0x(this.o9f, "left", cN0x);
        a8i.Y0x(this.o9f, "top", gH2x)
    }
})();
(function () {
    var c9h = NEJ.P, v9m = c9h("nej.j"), fK2x = c9h("nm.ut");
    fK2x.bMC3x = function (bi0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cO0x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Fv1x = bi0x.match(cO0x) || [];
        for (var bd0x = 0; bd0x < Fv1x.length; bd0x++) {
            Fv1x[bd0x] = Fv1x[bd0x].split("@")[1]
        }
        Fv1x = Fv1x.reverse();
        var hv2x = GUser.userId;
        var ciZ9Q = v9m.sF5K("mentioners" + hv2x) || [];
        var jd3x = Fv1x.concat(ciZ9Q);
        if (jd3x.length > 10) jd3x = jd3x.slice(0, 10);
        v9m.uN7G("mentioners" + hv2x, jd3x)
    };
    fK2x.ciX9O = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hv2x = GUser.userId;
        return v9m.sF5K("mentioners" + hv2x) || []
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), cP0x = c9h("nej.p"), v9m = c9h("nej.j"),
        k9b = c9h("nej.u"), cg0x = c9h("nej.ut"), D9u = c9h("nm.w"), fK2x = c9h("nm.ut"), b8h;
    D9u.bMP3x = NEJ.C();
    b8h = D9u.bMP3x.O9F(cg0x.cy0x);
    b8h.cl0x = function (e9f) {
        this.cr0x(e9f);
        this.bMQ3x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.fH1x = e9f.txt;
        this.o9f = e9f.body;
        this.bMU3x = e9f.before;
        this.Or3x = e9f.flag;
        this.ciW9N = e9f.after;
        this.po4s = [];
        if (cP0x.cS0x.browser != "ie") {
            setTimeout(function () {
                this.lc3x()
            }.g9d(this), 0)
        }
        this.Ke2x()
    };
    b8h.bE0x = function () {
        this.bH0x();
        if (this.th6b) this.th6b.S9J();
        delete this.th6b
    };
    b8h.Ke2x = function () {
        this.bT0x([[this.fH1x, "keyup", this.bNi3x.g9d(this, this.fH1x)], [this.fH1x, "click", this.bNi3x.g9d(this, this.fH1x)], [this.fH1x, "focus", this.lc3x.g9d(this)]])
    };
    b8h.lc3x = function (d9g) {
        this.nu4y = fK2x.tM7F(this.fH1x)
    };
    b8h.bMQ3x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cW1x = window.GUser.userId;
        var V9M = "/api/user/getfollows/" + cW1x;
        var fD1x = v9m.br0x(V9M, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (i9b) {
                window.GFollowers = JSON.parse(i9b).follow
            }.g9d(this),
            onerror: function (i9b) {
            },
            onbeforerequest: function (i9b) {
            }
        })
    };
    b8h.bNj3x = function (index) {
        var A9r = this.fH1x.value, bj0x, boS8K, boR8J, KD2x;
        this.bMU3x.innerHTML = k9b.dI1x(A9r.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nU4Y = a8i.I9z(this.bMU3x, "j-test");
        for (var bd0x = 0; bd0x < nU4Y.length; bd0x++) {
            nU4Y[bd0x].innerText = " "
        }
        this.Or3x.innerHTML = A9r.charAt(index);
        this.ciW9N.innerHTML = k9b.dI1x(A9r.substr(index + 1, A9r.length));
        KD2x = parseInt(a8i.da1x(this.fH1x, "lineHeight"));
        a8i.Y0x(this.o9f, "display", "block");
        boS8K = a8i.hR2x(this.Or3x, this.o9f);
        boR8J = a8i.hR2x(this.fH1x);
        a8i.Y0x(this.o9f, "display", "none");
        var cN0x = boS8K.x + boR8J.x;
        var gH2x = boS8K.y + boR8J.y + KD2x;
        bj0x = {x: cN0x, y: gH2x};
        this.ciV9M(bj0x)
    };
    b8h.bNi3x = function (eQ1x, d9g) {
        h9c.cf0x(d9g);
        var eQ1x = eQ1x;
        var A9r = eQ1x.value;
        var bp0x = A9r.length;
        var r9i = fK2x.tM7F(eQ1x).start;
        var bNp3x = 0;
        var iU2x = d9g.keyCode || d9g.which;
        var jd3x;
        this.nu4y = fK2x.tM7F(eQ1x);
        var bNq3x = false;
        for (var i = 1; i < 20; i++) {
            jd3x = r9i - i;
            if (A9r.charAt(jd3x) === " ") break;
            if (A9r.charAt(jd3x) === "@") {
                bNq3x = true;
                this.Ft1x = bNp3x = jd3x;
                break
            }
        }
        if (bNq3x && d9g.shiftKey === false && iU2x !== 38 && iU2x !== 40) {
            if (iU2x !== 27 && iU2x !== 13) {
                this.th6b ? this.th6b.S9J() : null;
                this.bNj3x(bNp3x)
            }
        } else if (iU2x !== 38 && iU2x !== 40 && d9g.keyCode !== 32) {
            this.th6b ? this.th6b.S9J() : null
        }
    };
    b8h.ciV9M = function (bj0x) {
        var bj0x = bj0x;
        var i9b = this.yw8o();
        var e9f = {
            parent: document.body,
            offset: bj0x,
            data: i9b,
            target: this.fH1x,
            rangeData: this.nu4y,
            atIndex: this.Ft1x
        };
        this.th6b ? this.th6b.S9J() : null;
        this.th6b = D9u.bMx3x.B9s(e9f)
    };
    b8h.yw8o = function () {
        var ciU9L = fK2x.tM7F(this.fH1x).start;
        var ciT9K = this.Ft1x + 1;
        var bNF3x = fK2x.ciX9O() || [];
        var bNG3x = [];
        var bw0x = this.fH1x.value.substring(ciT9K, ciU9L).toLowerCase();
        bw0x = bw0x.replace(/\[/g, "\\[");
        bw0x = bw0x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.po4s = window.GFollowers[0] ? window.GFollowers : []
        } else this.po4s = [];
        if (!this.po4s[0]) this.bMQ3x();
        for (var bd0x = 0; bd0x < bNF3x.length; bd0x++) {
            for (var v9m = 0; v9m < this.po4s.length; v9m++) {
                if (this.po4s[v9m].nickname == bNF3x[bd0x]) bNG3x.push(this.po4s[v9m])
            }
        }
        this.po4s = k9b.bXY7R(this.po4s, bNG3x, {union: true, begin: true});
        var ciS9J = this.po4s.length;
        var WI2x = [];
        var Pl3x, Pn3x;
        if (!this.po4s[0]) return {suggests: WI2x};
        for (var i = 0; i < ciS9J; i++) {
            Pl3x = this.po4s[i].nickname.toLowerCase().search(bw0x);
            Pn3x = this.po4s[i].py ? this.po4s[i].py.toLowerCase().search(bw0x) : -1;
            if (Pl3x !== -1 || Pn3x != -1) WI2x.push(this.po4s[i]);
            if (WI2x.length === 10) break
        }
        return {suggests: WI2x}
    };
    b8h.KL2x = function () {
        var gw2x = this.nu4y || {text: "", start: 0, end: 0};
        h9c.x9o(this.fH1x, "focus");
        fK2x.Fq0x(this.fH1x, gw2x, "@");
        this.nu4y = fK2x.tM7F(this.fH1x);
        this.Ft1x = gw2x.start;
        this.bNj3x(this.Ft1x)
    };
    b8h.CZ0x = function () {
        if (this.th6b) this.th6b.S9J()
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), h9c = c9h("nej.v"), k9b = c9h("nej.u"), v9m = c9h("nej.j"), D9u = c9h("nm.w"),
        cg0x = c9h("nej.ut"), bI0x = c9h("nej.ui"), b8h;
    var ciP9G = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var ciN9E = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gh2x = a8i.ie2x(ciN9E);
    var hX2x = a8i.rX5c(ciP9G);
    D9u.KM2x = NEJ.C();
    b8h = D9u.KM2x.O9F(bI0x.eo1x);
    b8h.cl0x = function (e9f) {
        this.fz1x = {};
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f);
        this.fz1x.txt = a8i.z9q(e9f.target);
        this.Np3x();
        this.KP2x = D9u.bMP3x.B9s(this.fz1x)
    };
    b8h.bE0x = function (e9f) {
        this.bH0x();
        this.KP2x.S9J()
    };
    b8h.bZ0x = function () {
        this.ca0x = gh2x;
        this.kT3x = hX2x
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.cQ0x(a8i.z9q(this.o9f));
        this.fz1x.body = this.o9f;
        this.fz1x.before = j9a[0];
        this.fz1x.flag = j9a[1];
        this.fz1x.after = j9a[2]
    };
    b8h.Np3x = function () {
        var pF4J = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pF4J.length; i++) {
            if (pF4J[i] === "width" && a8i.da1x(this.fz1x.txt, pF4J[i]) == "100%") {
                a8i.Y0x(this.o9f, pF4J[i], this.fz1x.txt.offsetWidth + "px");
                continue
            }
            a8i.Y0x(this.o9f, pF4J[i], a8i.da1x(this.fz1x.txt, pF4J[i]))
        }
    };
    b8h.KL2x = function () {
        this.KP2x.KL2x()
    };
    b8h.CZ0x = function () {
        this.KP2x.CZ0x()
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, fc1x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), H9y = c9h("nej.ut"), jG3x = c9h("nm.c"), Q9H = {}, b8h;
    if (!!jG3x.boO8G) return;
    jG3x.boO8G = NEJ.C();
    b8h = jG3x.boO8G.O9F(H9y.cy0x);
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f)
    };
    b8h.bE0x = function () {
        this.bH0x()
    };
    b8h.Cf0x = function (eK1x, dq1x, XS2x) {
        if (Q9H[eK1x]) {
            this.hJ2x("register commonJST[" + eK1x + "] duplicate");
            return
        }
        if (!k9b.fY2x(dq1x)) {
            dq1x = ctl.comJST.ciM9D(eK1x, dq1x, XS2x)
        }
        Q9H[eK1x] = dq1x
    };
    b8h.ciK9B = function (Yp2x) {
        if (k9b.en1x(Yp2x)) {
            k9b.be0x(Yp2x, function (q9h) {
                ctl.comJST.Cf0x.apply(this, q9h)
            }, this)
        } else if (k9b.kI3x(Yp2x)) {
            k9b.ek1x(Yp2x, function (eG1x, J9A) {
                ctl.comJST.Cf0x(J9A, eG1x)
            })
        }
    };
    b8h.ciM9D = function (eK1x, st5y, XS2x) {
        st5y = st5y || {};
        NEJ.X(st5y, {comJST: this.nW4a});
        if (st5y.resetDataName && !k9b.en1x(st5y.resetDataName)) {
            st5y.resetDataName = [st5y.resetDataName]
        }
        return function () {
            var i9b = arguments[0], iV2x = arguments[1];
            if (st5y.resetDataName) {
                var jd3x = {};
                for (var i = 0, ii = st5y.resetDataName.length; i < ii; i++) {
                    jd3x[st5y.resetDataName[i]] = arguments[i]
                }
                i9b = jd3x;
                iV2x = arguments[ii]
            }
            NEJ.X(i9b, st5y, dC1x);
            if (XS2x) {
                iV2x = iV2x || {};
                NEJ.X(iV2x, XS2x)
            }
            return a8i.bP0x(eK1x, i9b, iV2x)
        }
    };
    b8h.nW4a = function (eK1x) {
        if (!Q9H[eK1x]) {
            this.hJ2x("commonJST[" + eK1x + "] is unregister");
            return ""
        } else {
            return Q9H[eK1x].apply(null, fc1x.slice.call(arguments, 1))
        }
    };
    b8h.dump = function () {
        return Q9H
    };
    b8h.hJ2x = function (ciz9q) {
        if (console && console.log) {
            console.log(ciz9q)
        }
    };
    var dC1x = function (eG1x, J9A) {
        return J9A == "resetDataName"
    };
    c9h("ctl").comJST = jG3x.boO8G.fW2x()
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, bn0x = NEJ.F, fc1x = NEJ.R, a8i = c9h("nej.e"), h9c = c9h("nej.v"),
        k9b = c9h("nej.u"), H9y = c9h("nej.ut"), jG3x = c9h("nm.c"), Q9H = {}, b8h;
    if (!!jG3x.boL8D) return;
    jG3x.boL8D = NEJ.C();
    b8h = jG3x.boL8D.O9F(H9y.cy0x);
    b8h.cl0x = function () {
        this.cr0x();
        var e9f = {
            "com-mv-artists": function (fn1x, dJ1x, EJ0x, boJ8B) {
                return a8i.bP0x("com-mv-artists", {
                    artists: fn1x,
                    clazz: dJ1x,
                    boxClazz: boJ8B,
                    mark: EJ0x || function (cC0x) {
                        return cC0x
                    },
                    escape: k9b.dI1x,
                    comJST: ctl.comJST.nW4a
                })
            }, "com-album-artists": function (fn1x, dJ1x, EJ0x, boJ8B) {
                return a8i.bP0x("com-album-artists", {
                    artists: fn1x,
                    clazz: dJ1x,
                    boxClazz: boJ8B,
                    mark: EJ0x || function (cC0x) {
                        return cC0x
                    },
                    escape: k9b.dI1x,
                    comJST: ctl.comJST.nW4a
                })
            }, "com-artists-title": {resetDataName: ["artists"], escape: k9b.dI1x}
        };
        for (var C9t in e9f) {
            ctl.comJST.Cf0x(C9t, e9f[C9t])
        }
    };
    b8h.bk0x = function (e9f) {
        this.bl0x(e9f)
    };
    b8h.bE0x = function () {
        this.bH0x()
    };
    c9h("ctl").comJSTUtil = jG3x.boL8D.fW2x()
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, a8i = c9h("nej.e"), cP0x = c9h("nej.p"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        H9y = c9h("nej.ut"), v9m = c9h("nej.j"), D9u = c9h("nm.w"), fK2x = c9h("nm.ut"), p9g = c9h("nm.d"),
        l9c = c9h("nm.x"), n9e = c9h("nm.l"), boI8A = [2, 3], dD1x = ["sn", "db"], b8h, K9B, ciw9n = {
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
        }, Yy2x = {
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
        }, brY8Q = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        }, ciu9l = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, BV0x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    n9e.xp8h = NEJ.C();
    b8h = n9e.xp8h.O9F(n9e.dW1x);
    K9B = n9e.xp8h.ch0x;
    b8h.bk0x = function (e9f) {
        if (e9f.onclose === undefined) {
            e9f.onclose = this.bsc8U.g9d(this)
        }
        this.bl0x(e9f);
        this.ym8e = e9f.isPub;
        this.ja2x = e9f.rid || -1;
        this.el1x = e9f.type || -1;
        this.box8p = e9f.purl;
        this.Lt2x = e9f.name || "";
        this.Lw2x = e9f.author || "";
        this.bow8o = e9f.authors || "";
        this.Zt3x = e9f.actId;
        this.Zw3x = e9f.actName;
        this.bsr8j = e9f.title;
        this.ZC3x = {};
        this.cit9k = e9f.mesg || "";
        this.cis9j = e9f.placeholder || "说点什么吧";
        this.bov8n = e9f.hideTip;
        this.cip9g = e9f.videoDescription;
        this.cio9f = e9f.videoJumpUrl;
        var j9a, fN2x = +(new Date);
        try {
            j9a = top.localCache.z9q("user") || {}
        } catch (e) {
            j9a = {}
        }
        for (var i = 0, j9a = j9a.bindings || [], ep1x; i < j9a.length; ++i) {
            ep1x = !j9a[i].tokenJsonStr ? null : JSON.parse(j9a[i].tokenJsonStr);
            if (!ep1x || ep1x.expires_in === undefined) continue;
            var ZR3x = parseInt(ep1x.expires_in), ZS3x = parseInt(j9a[i].refreshTime),
                cij9a = (ZR3x + ZS3x) * 1e3 - 5 * 60 * 1e3;
            if (cij9a > fN2x) this.ZC3x[j9a[i].type] = !0
        }
        this.uL7E = D9u.DH0x.B9s({parent: this.ZV3x, err: this.bsG8y});
        if (this.gI2x) {
            this.gI2x.S9J()
        }
        this.gI2x = D9u.KM2x.B9s({parent: document.body, target: this.eO1x});
        if (this.el1x == 24 || this.el1x == 21 || this.BB9s()) {
            this.xI8A.style.display = "none"
        } else {
            this.xI8A.style.display = "";
            this.nv4z = D9u.bqn8f.B9s({
                parent: this.bol8d,
                button: this.xI8A,
                onstartupload: this.bsU9L.g9d(this, true),
                onfinishupload: this.bsU9L.g9d(this, false)
            })
        }
        if (this.BB9s()) {
            this.oL4P.innerText = "";
            a8i.y9p(this.oL4P, "info-video");
            a8i.y9p(this.boi8a, "f-hide")
        } else {
            a8i.w9n(this.boi8a, "f-hide")
        }
    };
    b8h.bE0x = function () {
        this.bH0x();
        if (this.uL7E) {
            this.uL7E.S9J();
            delete this.uL7E
        }
        if (this.gI2x) {
            this.gI2x.S9J();
            delete this.gI2x
        }
        if (this.nv4z) {
            this.nv4z.S9J();
            delete this.nv4z
        }
        if (this.lN3x) {
            this.lN3x.S9J();
            delete this.lN3x
        }
    };
    b8h.bZ0x = function () {
        this.ca0x = "m-wgt-sharewin"
    };
    b8h.bR0x = function () {
        this.cb0x();
        this.btg9X = a8i.cQ0x(this.o9f)[0];
        var bo0x = a8i.I9z(this.o9f, "j-flag");
        this.oV4Z = bo0x.shift();
        this.bsG8y = bo0x.shift();
        this.ZV3x = bo0x.shift();
        this.eO1x = bo0x.shift();
        this.oL4P = bo0x.shift();
        this.boe8W = bo0x.shift();
        this.cii9Z = bo0x.shift();
        this.xI8A = bo0x.shift();
        this.ci0x = bo0x.shift();
        this.bol8d = bo0x.shift();
        this.xY8Q = bo0x.shift();
        this.cvJ1x = bo0x.shift();
        this.boi8a = bo0x.shift();
        this.ef1x = bo0x.shift();
        this.RT4X = a8i.I9z(this.boi8a, "j-t");
        this.zT9K = H9y.Ez0x.B9s({list: a8i.cQ0x(this.oV4Z), selected: "z-slt", onchange: this.bnX7Q.g9d(this)});
        if (cP0x.cS0x.browser == "ie" && cP0x.cS0x.version < "8.0") {
            a8i.Y0x(this.ZV3x, "position", "relative");
            a8i.Y0x(this.ZV3x, "zIndex", "10")
        }
        h9c.s9j(window, "snsbind", this.Md2x.g9d(this));
        h9c.s9j(this.eO1x, "input", this.fo1x.g9d(this));
        h9c.s9j(this.eO1x, "keyup", this.ty6s.g9d(this));
        h9c.s9j(this.o9f, "click", this.cw0x.g9d(this));
        this.R9I = p9g.boN8F.B9s();
        this.R9I.s9j("onshareall", this.RX4b.g9d(this, 0));
        this.R9I.s9j("onshareerror", this.hU2x.g9d(this));
        this.R9I.s9j("onshareprivate", this.RX4b.g9d(this, 1));
        this.RZ4d = p9g.yz8r.B9s();
        this.hJ2x = p9g.hQ2x.B9s();
        try {
            this.Mf2x = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Mf2x) {
            this.Mf2x = BV0x;
            v9m.br0x("/api/event/user/permission", {
                type: "json", onload: function (d9g) {
                    if (d9g.code == 200) {
                        this.Mf2x = NEJ.EX(BV0x, d9g)
                    }
                }.g9d(this)
            })
        }
    };
    b8h.bnX7Q = function (d9g) {
        d9g.index == 0 ? a8i.w9n(this.btg9X, "m-plshare") : a8i.y9p(this.btg9X, "m-plshare");
        this.ZV3x.style.display = d9g.index == 0 ? "none" : "";
        this.cii9Z.style.display = d9g.index == 0 ? "" : "none";
        this.xI8A.style.display = d9g.index == 0 ? "" : "none";
        if (this.el1x == 24 || this.el1x == 21) {
            this.xI8A.style.display = "none"
        }
        this.bsG8y.style.display = "none";
        this.eO1x.value = "";
        this.bU0x();
        this.Bg9X();
        if (d9g.index == 0) {
            var dl1x = a8i.da1x(this.eO1x, "width");
            if (dl1x == "auto" || !dl1x) {
                return
            } else {
                if (this.gI2x) {
                    this.gI2x.S9J()
                }
                this.gI2x = D9u.KM2x.B9s({parent: document.body, target: this.eO1x})
            }
            this.bol8d.style.display = ""
        } else {
            if (this.gI2x) {
                this.gI2x.S9J();
                delete this.gI2x
            }
            this.bol8d.style.display = "none"
        }
    };
    b8h.cw0x = function (d9g) {
        var f9e = h9c.U9L(d9g, "d:action");
        if (!f9e) return;
        if (a8i.u9l(f9e, "action") == "search") {
            h9c.cf0x(d9g)
        } else if (a8i.u9l(f9e, "default") === undefined) {
            h9c.cf0x(d9g)
        }
        switch (a8i.u9l(f9e, "action")) {
            case"txt":
                this.lc3x();
                break;
            case"search":
                if (this.BB9s()) {
                    top.location.href = this.cio9f
                } else if (this.ym8e && this.el1x != 24) {
                    if (this.lN3x) {
                        this.lN3x.S9J()
                    }
                    this.lN3x = D9u.bqC8u.B9s({
                        parent: this.o9f.parentNode,
                        onfinish: this.bnT7M.g9d(this),
                        oncancel: this.cig9X.g9d(this)
                    });
                    this.bnR7K = true;
                    this.o9f.style.display = "none";
                    this.Bf9W(this.ja2x > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case"at":
                h9c.sn5s(d9g);
                !!this.gD2x && this.gD2x.bq0x();
                this.gI2x.KL2x();
                this.fE1x();
                break;
            case"emot":
                h9c.sn5s(d9g);
                !!this.gI2x && this.gI2x.CZ0x();
                if (!this.gD2x) {
                    this.gD2x = n9e.Fk0x.B9s({parent: this.boe8W});
                    this.gD2x.s9j("onselect", this.wG8y.g9d(this))
                }
                this.gD2x.N9E();
                break;
            case"upload":
                break;
            case"sns":
                h9c.bh0x(d9g);
                var bnM7F, bw0x, t9k = a8i.u9l(f9e, "type");
                if (!this.ZC3x[t9k]) {
                    bnM7F = f9e.href.split("?");
                    bw0x = k9b.hq2x(bnM7F[1]);
                    bw0x["csrf_token"] = v9m.gN2x("__csrf");
                    top.open(bnM7F[0] + "?" + k9b.dd1x(bw0x));
                    return
                }
                var bv0x = {2: "sn", 3: "db", 4: "rr"};
                l9c.zt9k(f9e, "u-slg-" + bv0x[t9k] + "-gray");
                break;
            case"close":
                !!this.gD2x && this.gD2x.bq0x();
                this.bsc8U();
                break;
            case"share":
                h9c.bh0x(d9g);
                if (this.BB9s()) {
                    if (!a8i.bB0x(f9e, "u-btn2-2-dis")) {
                        this.cid9U()
                    }
                } else if (a8i.bB0x(f9e, "u-btn2-2-dis")) {
                    if (!this.Mf2x.pubEventWithoutResource && !(this.ja2x > 0)) {
                        this.cib9S()
                    } else {
                    }
                } else if (!(this.ja2x > 0) && !this.eO1x.value && this.nv4z && this.nv4z.MD3x().length == 0) {
                    n9e.Z0x.N9E({type: 2, tip: "请输入内容"})
                } else {
                    this.chY9P()
                }
                break
        }
    };
    b8h.cib9S = function () {
        var rM5R = 0, bnJ7C = function () {
            if (rM5R % 2) {
                a8i.w9n(this.oL4P, "z-show")
            } else {
                a8i.y9p(this.oL4P, "z-show")
            }
            rM5R++;
            if (rM5R > 5) {
                clearInterval(eU1x)
            }
        }, eU1x;
        return function () {
            rM5R = 0;
            clearInterval(eU1x);
            eU1x = setInterval(bnJ7C.g9d(this), 200)
        }
    }();
    b8h.Md2x = function (m9d) {
        m9d = m9d.result;
        this.ZC3x[m9d.type] = !0;
        var r9i = k9b.cU0x(boI8A, m9d.type), cd0x = "u-slg-" + dD1x[r9i] + "-gray";
        a8i.w9n(this.RT4X[r9i], cd0x)
    };
    b8h.bnT7M = function (bt0x) {
        var i9b = bt0x.data;
        this.ja2x = bt0x.id;
        this.el1x = bt0x.type;
        this.o9f.style.display = "";
        this.Bf9W(this.bsr8j);
        this.lN3x && this.lN3x.S9J();
        this.bnR7K = false;
        this.box8p = i9b.picUrl;
        this.Lt2x = i9b.title || "";
        this.Lw2x = i9b.author || "";
        this.bow8o = i9b.authors || "";
        this.chX9O();
        this.SL4P()
    };
    b8h.cig9X = function () {
        this.lN3x && this.lN3x.S9J();
        this.o9f.style.display = "";
        this.Bf9W(this.bsr8j);
        this.bnR7K = false;
        this.SL4P()
    };
    b8h.wG8y = function (d9g) {
        var bi0x = "[" + d9g.text + "]";
        fK2x.Fq0x(this.eO1x, this.nu4y, bi0x);
        this.fE1x()
    };
    b8h.fo1x = function (d9g) {
        cP0x.cS0x.browser == "ie" && cP0x.cS0x.version < "7.0" ? setTimeout(this.fE1x.g9d(this), 0) : this.fE1x()
    };
    b8h.ty6s = function (d9g) {
        this.lc3x();
        if (d9g.keyCode == 8) this.fE1x()
    };
    b8h.fE1x = function () {
        this.lc3x();
        this.Bg9X()
    };
    b8h.Bg9X = function () {
        var bp0x = Math.ceil(k9b.fj1x(this.eO1x.value.trim()) / 2);
        this.ci0x.innerText = 140 - bp0x;
        bp0x > 140 ? a8i.ev1x(this.ci0x, "s-fc4", "s-fc6") : a8i.ev1x(this.ci0x, "s-fc6", "s-fc4")
    };
    b8h.chY9P = function () {
        if (this.cv0x()) return;
        if (k9b.fj1x(this.eO1x.value.trim()) > 280) {
            this.bU0x("字数超过140个字符");
            return
        }
        var t9k = this.zT9K.rR5W(), i9b;
        if (t9k == 0) {
            for (var i = 0, FF1x = []; i < this.RT4X.length; ++i) {
                if (!a8i.bB0x(this.RT4X[i], "u-slg-" + dD1x[i] + "-gray")) FF1x.push(boI8A[i])
            }
            this.cv0x(!0);
            i9b = {
                id: this.ja2x,
                msg: this.eO1x.value.trim(),
                type: this.SU4Y(this.el1x),
                picUrl: this.box8p,
                snsTypes: FF1x.join(","),
                isPub: this.ym8e
            };
            if (this.Zt3x > 0) {
                i9b.actId = this.Zt3x;
                if (this.Zw3x) {
                    i9b.msg = "#" + this.Zw3x + "#" + i9b.msg
                }
            }
            var mO4S = this.nv4z && this.nv4z.MD3x();
            if (mO4S && mO4S.length) {
                i9b.pics = mO4S
            }
            this.R9I.clz9q(i9b)
        } else {
            var sh5m = this.uL7E.OV3x();
            if (sh5m.length <= 0) {
                this.bU0x("请至少选择一位好友");
                return
            }
            this.R9I.cly9p({
                data: {
                    id: this.ja2x,
                    msg: this.eO1x.value.trim(),
                    type: this.SU4Y(this.el1x),
                    userIds: "[" + sh5m.join(",") + "]"
                }
            })
        }
    };
    b8h.cid9U = function () {
        if (this.cv0x()) {
            return
        }
        this.hJ2x.gd2x("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k9b.fj1x(this.eO1x.value.trim()) > 280) {
            this.bU0x("字数超过140个字符");
            return
        }
        this.cv0x(!0);
        var i9b = {msg: this.eO1x.value.trim() || this.cip9g || "", type: "video"}, chW9N = {videoId: this.ja2x};
        if (this.Zt3x > 0) {
            i9b.actId = this.Zt3x;
            if (this.Zw3x) {
                i9b.msg = "#" + this.Zw3x + "#" + i9b.msg
            }
        }
        i9b.videoinfo = JSON.stringify(chW9N);
        this.R9I.clx9o({data: {videoId: this.ja2x, commit: true}, data2: i9b, snsTypes: ""})
    };
    b8h.RX4b = function (t9k, m9d) {
        this.cv0x(!1);
        this.bq0x();
        if (!this.bov8n) {
            if (this.BB9s()) {
                n9e.Z0x.N9E({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                n9e.Z0x.N9E({
                    tip: "分享成功" + (m9d.point > 0 ? ' 获得<em class="s-fc6">' + m9d.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h9c.x9o(n9e.xp8h, "sharesuccess", {isPrivate: t9k, rid: this.ja2x, rtype: this.el1x, data: m9d.event});
        this.x9o("onshare")
    };
    b8h.hU2x = function (m9d) {
        this.cv0x(!1);
        var bF0x = "分享失败";
        if (m9d.code) {
            switch (m9d.code) {
                case 404:
                    bF0x = "分享的资源不存在";
                    break;
                case 407:
                    bF0x = "输入内容包含有关键字";
                    break;
                case 408:
                    bF0x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF0x = m9d.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l9c.fb1x({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.bU0x(bF0x)
    };
    b8h.lc3x = function () {
        this.nu4y = fK2x.tM7F(this.eO1x)
    };
    b8h.bU0x = function (bF0x) {
        this.dw1x(this.ef1x, bF0x)
    };
    b8h.cv0x = function (cF0x) {
        return this.dM1x(this.xY8Q, cF0x, "分享", "分享中...")
    };
    b8h.SU4Y = function (ju3x) {
        return ciw9n[ju3x] || ""
    };
    b8h.chT9K = function () {
        var eQ1x, sw5B = this.SU4Y(this.el1x);
        this.oL4P.style.display = "";
        if (this.ja2x <= 0) {
            this.oL4P.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Lt2x) {
                this.oL4P.style.display = "none";
                return
            }
            var Tk4o = this.ym8e && this.el1x != 24;
            eQ1x = (Yy2x[sw5B] ? Yy2x[sw5B] + "：" : "") + this.Lt2x + (brY8Q[sw5B] || " ") + (sw5B == "mv" || sw5B == "album" ? this.bow8o || this.Lw2x : this.Lw2x);
            a8i.dK1x(this.oL4P, "m-xwgt-share-infobar", {canChange: Tk4o, info: eQ1x});
            if (Tk4o) {
                a8i.w9n(this.oL4P, "z-dis")
            } else {
                a8i.y9p(this.oL4P, "z-dis")
            }
        }
        a8i.w9n(this.oL4P, "info-video")
    };
    b8h.chX9O = function () {
        var sw5B = this.SU4Y(this.el1x),
            eQ1x = (Yy2x[sw5B] ? Yy2x[sw5B] + "：" : "") + this.Lt2x + (brY8Q[sw5B] || " ") + (sw5B == "mv" || sw5B == "album" ? this.bow8o || this.Lw2x : this.Lw2x);
        Tk4o = this.ym8e && this.el1x != 24;
        if (this.BB9s()) {
        } else {
            a8i.w9n(this.oL4P, "info-video");
            a8i.dK1x(this.oL4P, "m-xwgt-share-infobar", {canChange: Tk4o, isPub: this.ym8e, info: eQ1x})
        }
    };
    b8h.chS9J = function () {
        var FG1x = this.eO1x.value;
        if (this.ym8e) {
            if (!!this.bnR7K) {
                return !!FG1x && !!FG1x.length || !!this.nv4z && this.nv4z.MD3x().length > 0
            } else {
                return this.ja2x > 0 || !!FG1x && !!FG1x.length || !!this.nv4z && this.nv4z.MD3x().length > 0
            }
        } else {
            return !!FG1x && !!FG1x.length || !!this.nv4z && this.nv4z.MD3x().length > 0
        }
    };
    b8h.SL4P = function () {
        var buU9L = false;
        if (!this.ym8e || this.Mf2x.pubEventWithoutResource || this.ja2x > 0) {
            buU9L = true
        }
        if (buU9L) {
            a8i.w9n(this.xY8Q, "u-btn2-2-dis")
        } else {
            a8i.y9p(this.xY8Q, "u-btn2-2-dis")
        }
    };
    b8h.bsU9L = function (bnC7v) {
        if (bnC7v) {
            a8i.y9p(this.xY8Q, "u-btn2-2-dis")
        } else {
            this.SL4P()
        }
    };
    b8h.bsc8U = function (d9g) {
        if (d9g) {
            d9g.stopped = true
        }
        if (this.chS9J()) {
            l9c.gQ2x({
                title: "提示", message: "是否退出本次编辑？", btnok: "退出", action: function (W9N) {
                    if (W9N == "ok") {
                        this.x9o("forceclose", {});
                        this.bq0x()
                    }
                }.g9d(this)
            })
        } else {
            this.x9o("forceclose", {});
            this.bq0x()
        }
    };
    b8h.Bf9W = function (eF1x, dy1x) {
        this.nY4c.zp9g(eF1x, dy1x)
    };
    b8h.Tr4v = function (t9k) {
        this.hJ2x.gd2x("page", {type: t9k})
    };
    b8h.BB9s = function () {
        return this.el1x == 39
    };
    b8h.N9E = function () {
        var chR9I = function (q9h, r9i) {
            var cd0x = "u-slg-" + dD1x[r9i] + "-gray";
            !this.ZC3x[boI8A[r9i]] ? a8i.y9p(q9h, cd0x) : a8i.w9n(q9h, cd0x)
        };
        return function () {
            K9B.N9E.call(this);
            this.o9f.style.display = "";
            this.bU0x();
            this.cv0x(!1);
            this.zT9K.Kf2x(0);
            this.eO1x.focus();
            this.eO1x.value = this.cit9k || "";
            this.eO1x.placeholder = this.cis9j || "";
            if (!this.BB9s()) {
                this.chT9K()
            } else {
                a8i.y9p(this.oL4P, "info-video");
                a8i.dK1x(this.oL4P, "m-xwgt-share-videobar", {title: this.Lt2x, picUrl: this.box8p})
            }
            this.fE1x();
            this.uL7E.cjp9g();
            k9b.be0x(this.RT4X, chR9I, this);
            this.lc3x();
            if (this.ym8e) {
                this.oV4Z.style.display = "none"
            } else {
                this.oV4Z.style.display = ""
            }
            this.SL4P()
        }
    }();
    b8h.bq0x = function (d9g) {
        K9B.bq0x.call(this);
        !!this.gD2x && this.gD2x.bq0x();
        if (this.uL7E) {
            this.uL7E.S9J();
            delete this.uL7E
        }
        if (this.gI2x) {
            this.gI2x.S9J();
            delete this.gI2x
        }
        if (this.nv4z) {
            this.nv4z.S9J();
            delete this.nv4z
        }
        if (this.buZ9Q) {
            this.buZ9Q = this.buZ9Q.S9J()
        }
        if (this.lN3x) {
            this.lN3x.S9J();
            delete this.lN3x
        }
    };
    l9c.ln3x = function (e9f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e9f.title === undefined) {
            e9f.title = "分享"
        }
        if (e9f.actId && e9f.type != 39) {
            var t9k = ciu9l[e9f.resourceType], dk1x = e9f.resourceJson, hp2x;
            if (k9b.fg1x(dk1x)) {
                try {
                    dk1x = JSON.parse(dk1x)
                } catch (e) {
                }
            }
            if (t9k) {
                hp2x = l9c.bJi2x(t9k, dk1x);
                e9f.name = hp2x.title;
                e9f.author = hp2x.author;
                e9f.picUrl = hp2x.picUrl;
                e9f.type = t9k;
                e9f.rid = (dk1x || []).id
            }
        }
        n9e.xp8h.N9E(e9f)
    };
    H9y.fv1x.B9s({element: n9e.xp8h, event: ["sharesuccess"]})
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), n9e = c9h("nm.l"),
        D9u = c9h("nm.w"), bI0x = c9h("nej.ui"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), b8h, K9B;
    n9e.Tu4y = NEJ.C();
    b8h = n9e.Tu4y.O9F(n9e.dW1x);
    K9B = n9e.Tu4y.ch0x;
    b8h.cl0x = function () {
        this.cr0x()
    };
    b8h.bR0x = function () {
        this.cb0x();
        var j9a = a8i.I9z(this.o9f, "j-flag");
        h9c.s9j(j9a[0], "click", this.Cr0x.g9d(this))
    };
    b8h.bZ0x = function () {
        this.ca0x = "m-import-ok"
    };
    b8h.bk0x = function (e9f) {
        e9f.parent = e9f.parent || document.body;
        e9f.title = "歌曲同步完成";
        this.bl0x(e9f)
    };
    b8h.bE0x = function () {
        this.bH0x()
    };
    b8h.Cr0x = function (d9g) {
        this.bq0x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b8h.yD8v = function () {
        this.bq0x()
    };
    b8h.bOb3x = function (d9g) {
        if (d9g.keyCode == 13) this.Bp9g()
    }
})();
(function () {
    var c9h = NEJ.P, X0x = NEJ.O, h9c = c9h("nej.v"), a8i = c9h("nej.e"), v9m = c9h("nej.j"), M9D = c9h("nej.p"),
        k9b = c9h("nej.u"), n9e = c9h("nm.l"), D9u = c9h("nm.w"), bI0x = c9h("nej.ui"), p9g = c9h("nm.d"),
        l9c = c9h("nm.x"), b8h, K9B;
    n9e.bvh9Y = NEJ.C();
    b8h = n9e.bvh9Y.O9F(n9e.dW1x);
    b8h.bZ0x = function () {
        this.ca0x = "m-programtips-layer"
    };
    b8h.bR0x = function () {
        this.cb0x();
        this.bV0x = a8i.I9z(this.o9f, "j-flag")
    };
    b8h.bk0x = function (e9f) {
        e9f.clazz = " m-layer-programtips";
        e9f.parent = e9f.parent || document.body;
        e9f.title = "付费内容提示";
        e9f.draggable = !0;
        e9f.destroyalbe = !0;
        e9f.mask = true;
        this.bl0x(e9f);
        this.gy2x = e9f.id;
        this.chQ9H = e9f.radiotype;
        this.kG3x = location.protocol + "//" + (this.chP9G() || "music.163.com") + "/m/" + this.chQ9H + "?id=" + this.gy2x;
        this.chN9E()
    };
    b8h.bE0x = function () {
        this.bH0x()
    };
    b8h.yD8v = function () {
        this.bq0x()
    };
    b8h.Cr0x = function (d9g) {
        this.x9o("onok", A9r);
        this.bq0x()
    };
    l9c.bvp9g = function (e9f) {
        n9e.bvh9Y.B9s(e9f).N9E()
    };
    b8h.chN9E = function () {
        v9m.br0x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k9b.dd1x({url: this.kG3x, size: 180}),
            onload: function (i9b) {
                if (i9b.code == 200) {
                    this.chL9C(i9b.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g9d(this)
        })
    };
    b8h.chP9G = function () {
        var chK9B = location.host;
        if (chK9B.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b8h.chL9C = function (jR3x) {
        this.bV0x[0].style.backgroundImage = "url(" + jR3x + ")"
    }
})();
(function () {
    var c9h = NEJ.P, a8i = c9h("nej.e"), cP0x = c9h("nej.p"), h9c = c9h("nej.v"), k9b = c9h("nej.u"),
        H9y = c9h("nej.ut"), v9m = c9h("nej.j"), p9g = c9h("nm.d"), l9c = c9h("nm.x"), F9w = c9h("nm.m"),
        n9e = c9h("nm.l"), L9C = c9h("nm.m.f"), b8h, K9B;
    F9w.cM0x = NEJ.C();
    b8h = F9w.cM0x.O9F(H9y.dn1x);
    b8h.bJ0x = function () {
        var pQ4U = !1;
        return function () {
            if (pQ4U) return;
            pQ4U = !0;
            this.bM0x();
            if (top == self) {
                return
            }
            this.ru5z = a8i.z9q("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bvx9o()
            }
            H9y.fv1x.B9s({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bT0x([[window, "scroll", this.yo8g.g9d(this)], [document, "keyup", this.chI9z.g9d(this)], [document.body, "click", this.rY5d.g9d(this)], [document, "mouseup", this.chH9y.g9d(this)], [this.ru5z, "click", this.MS3x.g9d(this)], [p9g.sp5u, "message", this.tL7E.g9d(this)]]);
            l9c.clH9y(document.body);
            this.yo8g();
            if (this.yq8i !== false && typeof GUser !== "undefined" && GUser.userId > 0) p9g.sp5u.fW2x().ue7X();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cP0x.cS0x.browser == "ie" && parseInt(cP0x.cS0x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gv2x = top.player.getPlaying();
                    if (gv2x && gv2x.track && gv2x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gv2x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.xn8f.g9d(this);
            this.kh3x = p9g.hQ2x.B9s();
            window.log = this.mc3x.g9d(this);
            var rK5P = location.search;
            if (rK5P) {
                var bw0x = rK5P.substr(rK5P.indexOf("?") + 1), gf2x = k9b.hq2x(bw0x);
                if (gf2x && gf2x["_hash"]) location.hash = gf2x["_hash"]
            }
        }
    }();
    b8h.chI9z = function (d9g) {
        var f9e = h9c.U9L(d9g);
        try {
            if (d9g.keyCode == 80 && l9c.bFG1x() || ["textarea", "input"].indexOf(f9e.tagName.toLowerCase()) >= 0) return;
            h9c.x9o(top.document, "keyup", {ctrlKey: d9g.ctrlKey, keyCode: d9g.keyCode})
        } catch (e) {
        }
    };
    b8h.rY5d = function (d9g) {
        var f9e = h9c.U9L(d9g);
        if (f9e && f9e.tagName == "INPUT") return;
        var f9e = h9c.U9L(d9g, "d:pid");
        if (f9e) {
            h9c.cf0x(d9g);
            var oi4m = a8i.u9l(f9e, "pid"), yr8j = a8i.u9l(f9e, "ptype"), W9N = a8i.u9l(f9e, "action") || "play";
            switch (W9N) {
                case"subscribe":
                    l9c.lV3x({tracks: [oi4m]});
                    break
            }
        }
        f9e = h9c.U9L(d9g, "d:resAction");
        if (f9e && f9e.className.indexOf("-dis") == -1) {
            var cJ0x = a8i.u9l(f9e, "resId"), t9k = a8i.u9l(f9e, "resType"), bnv7o = a8i.u9l(f9e, "resRadiotype"),
                bnt7m = a8i.u9l(f9e, "resRadioid"), dH1x = a8i.u9l(f9e, "resFrom"), i9b = a8i.u9l(f9e, "resData"),
                W9N = a8i.u9l(f9e, "resAction"), bqs8k = a8i.u9l(f9e, "resCopyright"),
                Uq1x = a8i.u9l(f9e, "resAuditstatus");
            if (W9N != "log" && W9N != "bilog") h9c.cf0x(d9g);
            switch (W9N) {
                case"log":
                    i9b = (i9b || "").split("|");
                    if (!!i9b[0]) {
                        var bc0x = {id: cJ0x, alg: i9b[2] || "itembased", scene: i9b[3], position: i9b[1] || 0};
                        if (!!i9b[4]) bc0x.srcid = i9b[4];
                        window.log(i9b[0], bc0x)
                    }
                    break;
                case"bilog":
                    var blH7A = a8i.u9l(f9e, "logAction"), blI7B = a8i.u9l(f9e, "logJson");
                    window.log(blH7A, blI7B);
                    break;
                case"share":
                    if (Uq1x && Uq1x == 1) {
                        l9c.hZ2x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cJ0x, t9k, a8i.u9l(f9e, "resPic"), a8i.u9l(f9e, "resName"), a8i.u9l(f9e, "resAuthor"), a8i.u9l(f9e, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (t9k == 18) {
                        var pj4n = a8i.u9l(f9e, "resLevel"), qG5L = a8i.u9l(f9e, "resFee");
                        if (pj4n == 10) {
                            l9c.sH5M(qG5L, cJ0x, "song");
                            break
                        }
                        l9c.lV3x({tracks: [cJ0x]})
                    }
                    break;
                case"download":
                    l9c.Yc2x({id: cJ0x, type: t9k});
                    break;
                case"programtips":
                    if (Uq1x && Uq1x == 1) {
                        l9c.hZ2x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l9c.bvp9g({id: bnt7m, radiotype: bnv7o})
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
    b8h.chH9y = function (d9g) {
        try {
            h9c.x9o(top.document, "mouseup")
        } catch (e) {
        }
    };
    b8h.yo8g = function () {
        var chF9w = function () {
            var cq0x = window.innerHeight;
            if (!k9b.un7g(cq0x)) cq0x = (document.documentElement || document.body).clientHeight;
            return cq0x
        };
        return function (d9g) {
            if (!this.ru5z) return;
            var Us1x = chF9w(), fS2x = document.documentElement.scrollTop || document.body.scrollTop;
            a8i.Y0x(this.ru5z, "display", fS2x > 0 ? "" : "none");
            if (cP0x.cS0x.browser == "ie" && cP0x.cS0x.version < "7.0") {
                var gl2x = Math.min(document.body.clientHeight, Us1x + fS2x) - 204;
                a8i.Y0x(this.ru5z, "top", gl2x + "px")
            }
        }
    }();
    b8h.MS3x = function (d9g) {
        h9c.cf0x(d9g);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b8h.xn8f = function () {
        var bnr7k = function (d9g) {
            h9c.x9o(window, "share", d9g)
        };
        return function (cJ0x, t9k, EI0x, T9K, MZ3x, Na3x) {
            l9c.ln3x({
                rid: cJ0x,
                type: t9k,
                purl: EI0x,
                name: T9K,
                author: MZ3x,
                authors: Na3x,
                onshare: bnr7k.g9d(this)
            })
        }
    }();
    b8h.mc3x = function (W9N, bc0x) {
        try {
            top.log(W9N, bc0x)
        } catch (e) {
            switch (W9N) {
                case"play":
                    this.kh3x.eB1x(bc0x);
                    break;
                case"search":
                    this.kh3x.bDJ1x(bc0x);
                    break;
                default:
                    this.kh3x.gd2x(W9N, bc0x)
            }
        }
    };
    b8h.bvx9o = function () {
        var UK1x, bno7h = false, bs0x = [45, 60];
        var chE9v = function (bF0x) {
            if (bF0x.title != "MailBoxImport") return;
            var P9G = JSON.parse(bF0x.content || "null") || X0x;
            if (P9G.status == 10) {
                n9e.Tu4y.B9s().N9E();
                window.clearTimeout(UK1x)
            }
        };
        var tT7M = function (d9g) {
            if (d9g.code == 200) {
                if (d9g.status == 1) {
                    h9c.s9j(p9g.yX9O, "message", chE9v.g9d(this));
                    p9g.yX9O.B9s().bmg7Z();
                    bno7h = true
                } else {
                    if (bno7h) {
                        if (d9g.status == 10) {
                            n9e.Tu4y.B9s().N9E();
                            h9c.hE2x(p9g.yX9O, "message");
                            window.clearTimeout(UK1x);
                            bno7h = false
                        }
                    } else {
                        window.clearTimeout(UK1x)
                    }
                }
            }
        };
        return function () {
            var rw5B = bs0x.shift() * 1e3;
            v9m.br0x("/api/musicbox/mail/status", {type: "json", method: "get", onload: tT7M.g9d(this)});
            if (rw5B) {
                UK1x = window.setTimeout(arguments.callee, rw5B)
            }
        }
    }();
    b8h.tL7E = function (d9g) {
        try {
            top.polling(d9g)
        } catch (e) {
        }
    }
})()