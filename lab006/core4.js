(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (ET1x) {
        if (!ET1x || !ET1x.length) return null;
        var baC8u = window;
        for (var a = ET1x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; baC8u = baC8u[a[i]] = baC8u[a[i]] || {}, i++) ;
        return baC8u
    };
    NEJ.Q = function (bM1x, ET1x) {
        bM1x = bM1x || NEJ.O;
        var bs1x = ET1x.split(".");
        for (var i = 0, l = bs1x.length; i < l; i++) {
            bM1x = bM1x[bs1x[i]];
            if (!bM1x) break
        }
        return bM1x
    };
    NEJ.C = function () {
        var bMJ9A = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bEk7d = function (C1x, bu1x) {
            for (var x in bu1x) if (C1x == bu1x[x]) return x;
            return null
        };
        var btH4L = {cq1x: 0, bj1x: 1, bA1x: 2, bR1x: 3, bG1x: 4, eF3x: 5, jD4H: 6, ei2x: 7},
            tC8u = {cu1x: 0, bk1x: 1, bF1x: 2, cc1x: 3, bL1x: 4, gd3x: 5, ki5n: 6, fR3x: 7};
        return function () {
            var fn3x = function () {
                this.bEU7N();
                return this.cq1x.apply(this, arguments)
            };
            fn3x.prototype.bEU7N = NEJ.F;
            fn3x.prototype.cq1x = NEJ.F;
            fn3x.O1x = function (Bu0x, bNB0x) {
                if (bMJ9A(Bu0x)) return;
                if (bNB0x == null || !!bNB0x) NEJ.X(this, Bu0x, bMJ9A);
                this.bQP1x = Bu0x;
                this.cj1x = Bu0x.prototype;
                var bE1x = function () {
                };
                bE1x.prototype = Bu0x.prototype;
                this.prototype = new bE1x;
                var Ew1x = this.prototype;
                Ew1x.constructor = this;
                var dS2x;
                for (var x in btH4L) {
                    dS2x = bEk7d(btH4L[x], tC8u);
                    if (!dS2x || !this.cj1x[x]) continue;
                    Ew1x[x] = function (T1x) {
                        return function () {
                            this[T1x].apply(this, arguments)
                        }
                    }(dS2x)
                }
                var CN0x = {};
                for (var x in tC8u) {
                    dS2x = bEk7d(tC8u[x], btH4L);
                    if (!dS2x || !this.cj1x[dS2x]) continue;
                    CN0x[dS2x] = Bu0x;
                    Ew1x[x] = function (T1x) {
                        return function () {
                            var o0x, bE1x = this.btC4G[T1x], bbN9E = bE1x.prototype[T1x];
                            this.btC4G[T1x] = bE1x.bQP1x || Bu0x;
                            if (!!bbN9E) o0x = bbN9E.apply(this, arguments);
                            this.btC4G[T1x] = Bu0x;
                            return o0x
                        }
                    }(dS2x)
                }
                Ew1x.bEU7N = function () {
                    this.btC4G = NEJ.X({}, CN0x)
                };
                Ew1x.cBT1x = Ew1x.cu1x;
                return Ew1x
            };
            return fn3x
        }
    }();
    NEJ.X = function (fM3x, bP1x, dG2x) {
        if (!fM3x || !bP1x) return fM3x;
        dG2x = dG2x || NEJ.F;
        for (var x in bP1x) {
            if (bP1x.hasOwnProperty(x) && !dG2x(bP1x[x], x)) fM3x[x] = bP1x[x]
        }
        return fM3x
    };
    NEJ.EX = function (fM3x, bP1x) {
        if (!fM3x || !bP1x) return fM3x;
        for (var x in fM3x) {
            if (fM3x.hasOwnProperty(x) && bP1x[x] != null) fM3x[x] = bP1x[x]
        }
        return fM3x
    };
    var HZ2x = Function.prototype;
    HZ2x.ek3x = function (kC5H, KW3x) {
        var f = NEJ.F, KW3x = KW3x || f, kC5H = kC5H || f, dg2x = this;
        return function () {
            var d0x = {args: NEJ.R.slice.call(arguments, 0)};
            kC5H(d0x);
            if (!d0x.stopped) {
                d0x.value = dg2x.apply(this, d0x.args);
                KW3x(d0x)
            }
            return d0x.value
        }
    };
    HZ2x.g0x = function () {
        var bg1x = arguments, fM3x = arguments[0], btx4B = this;
        return function () {
            var va8S = NEJ.R.slice.call(bg1x, 1);
            NEJ.R.push.apply(va8S, arguments);
            return btx4B.apply(fM3x || window, va8S)
        }
    };
    HZ2x.eb2x = function () {
        var bg1x = arguments, fM3x = NEJ.R.shift.call(bg1x), btx4B = this;
        return function () {
            NEJ.R.push.apply(arguments, bg1x);
            return btx4B.apply(fM3x || window, arguments)
        }
    };
    var HZ2x = String.prototype;
    if (!HZ2x.trim) {
        HZ2x.trim = function () {
            var cS2x = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cS2x, "")
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
    var c0x = NEJ.P, Y1x = NEJ.O, N1x = c0x("nej.p"), bbI9z = window.navigator.platform,
        sJ7C = window.navigator.userAgent;
    var kj5o = {mac: bbI9z, win: bbI9z, linux: bbI9z, ipad: sJ7C, ipod: sJ7C, iphone: bbI9z, android: sJ7C};
    N1x.bbH9y = kj5o;
    for (var x in kj5o) kj5o[x] = (new RegExp(x, "i")).test(kj5o[x]);
    kj5o.ios = kj5o.ipad || kj5o.iphone || kj5o.ipod;
    kj5o.tablet = kj5o.ipad;
    kj5o.desktop = kj5o.mac || kj5o.win || kj5o.linux && !kj5o.android;
    var hS4W = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    N1x.dk2x = hS4W;
    if (/msie\s+(.*?);/i.test(sJ7C) || /trident\/.+rv:([\d\.]+)/i.test(sJ7C)) {
        hS4W.engine = "trident";
        hS4W.browser = "ie";
        hS4W.version = RegExp.$1;
        hS4W.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var or6l = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        hS4W.release = or6l[document.documentMode] || or6l[parseInt(hS4W.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sJ7C)) {
        hS4W.engine = "webkit";
        hS4W.release = RegExp.$1 || "";
        hS4W.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sJ7C)) {
        hS4W.engine = "gecko";
        hS4W.release = RegExp.$1 || "";
        hS4W.browser = "firefox";
        hS4W.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(sJ7C)) hS4W.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sJ7C)) {
        hS4W.engine = "presto";
        hS4W.release = RegExp.$1 || "";
        hS4W.browser = "opera";
        hS4W.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(sJ7C)) hS4W.version = RegExp.$1 || ""
    }
    if (hS4W.browser == "unknow") {
        var or6l = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = or6l.length, T1x; i < l; i++) {
            T1x = or6l[i] == "safari" ? "version" : or6l[i];
            if ((new RegExp(T1x + "/(.*?)(?=\\s|$)", "i")).test(sJ7C)) {
                hS4W.browser = or6l[i];
                hS4W.version = RegExp.$1.trim();
                break
            }
        }
    }
    N1x.bOH0x = {};
    var bbE9v = hS4W.engine != "trident";
    N1x.mp5u = {
        gecko: hS4W.engine != "gecko",
        webkit: hS4W.engine != "webkit",
        presto: hS4W.engine != "presto",
        trident0: bbE9v || hS4W.release > "2.0",
        trident1: bbE9v || hS4W.release < "6.0",
        trident2: bbE9v || hS4W.release > "3.0",
        trident: bbE9v || hS4W.release >= "6.0"
    }
})();
(function () {
    var hT4X = NEJ.P("nej.c"), Q1x = {};
    var bto4s = function () {
        var cS2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (W1x) {
            W1x = W1x || "";
            if (cS2x.test(W1x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var RL5Q = function () {
        var bPI0x = function (i0x, bu1x) {
            if (!i0x || !i0x.length) return;
            for (var i = 0, l = i0x.length, kZ5e; i < l; i++) {
                kZ5e = i0x[i];
                if (kZ5e.indexOf("://") > 0) bu1x[bto4s(kZ5e)] = kZ5e
            }
        };
        var bd1x = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bP1x) {
            hT4X.FM1x("root", bP1x.root || "/res/");
            var bsS4W, fz3x = hT4X.z1x("root");
            for (var x in bd1x) {
                bsS4W = bd1x[x];
                hT4X.FM1x(x, bP1x[bsS4W.name] || fz3x + bsS4W.dft)
            }
            var Bc0x = bP1x.p_csrf;
            if (Bc0x == !0) {
                Bc0x = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            hT4X.FM1x("csrf", NEJ.EX({cookie: "", param: ""}, Bc0x));
            Q1x.frames = {};
            bPI0x(bP1x.p_frame, Q1x.frames);
            Q1x.flashs = {};
            bPI0x(bP1x.p_flash, Q1x.flashs)
        }
    }();
    hT4X.FM1x = function (J1x, C1x) {
        Q1x[J1x] = C1x
    };
    hT4X.z1x = function (J1x) {
        return Q1x[J1x]
    };
    hT4X.bQQ1x = function (W1x) {
        var uK8C = bto4s(W1x);
        return Q1x.frames[uK8C] || uK8C + "/res/nej_proxy_frame.html"
    };
    hT4X.bQX1x = function (W1x) {
        return Q1x.flashs[bto4s(W1x)]
    };
    RL5Q(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c0x = NEJ.P, N1x = c0x("nej.p"), hT4X = c0x("nej.c"), bP1x = window.NEJ_CONF || NEJ.O;
    if (N1x.mp5u.trident) return;
    hT4X.FM1x("storage.swf", bP1x.storage || hT4X.z1x("root") + "nej_storage.swf");
    if (N1x.dk2x.release < "4.0") {
        hT4X.FM1x("blank.png", bP1x.blank || hT4X.z1x("root") + "nej_blank.gif")
    }
    var i0x = bP1x.xdr, gf3x = /^(https?:\/\/.*?)(?=\/|$)/i, js4w = /[\/?=&]/i;
    var bNn9e = function (W1x) {
        return (gf3x.test(W1x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i0x && !!i0x.length) for (var i = i0x.length - 1, W1x, J1x; i >= 0; i--) {
        W1x = i0x[i];
        J1x = bNn9e(W1x);
        if (!!J1x) hT4X.FM1x(J1x, W1x)
    }
    hT4X.cBO1x = function (W1x) {
        var J1x = bNn9e(W1x);
        if (!J1x) {
            if (js4w.test(W1x)) {
                J1x = location.protocol + "//" + location.host
            } else if (W1x.indexOf("://") < 0) {
                J1x = location.protocol + "//" + W1x
            } else {
                J1x = W1x
            }
        }
        return hT4X.z1x(J1x) || J1x + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c0x = NEJ.P, hT4X = c0x("nej.c"), N1x = c0x("nej.g"), gi3x = +(new Date);
    N1x.cBN1x = 1e4 - gi3x;
    N1x.bsJ4N = 10001 - gi3x;
    N1x.cBL1x = 10002 - gi3x;
    N1x.bxF5K = 10003 - gi3x;
    N1x.bRc1x = 10004 - gi3x;
    N1x.cBJ1x = 10005 - gi3x;
    N1x.bsB4F = 10006 - gi3x;
    N1x.bRh1x = 10007 - gi3x;
    N1x.yj9a = "Content-Type";
    N1x.cBF1x = "text/plain";
    N1x.Co0x = "multipart/form-data";
    N1x.bRl1x = "application/x-www-form-urlencoded";
    N1x.bsp4t = hT4X.z1x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c0x = NEJ.P, fh3x = NEJ.R, N1x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        bc1x = c0x("nej.h");
    var lu5z = N1x.dk2x.prefix, bux5C = N1x.bOH0x,
        bRm1x = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, bRn1x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, MI3x = {
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
    var RL5Q = function () {
        var rW7P = bc1x.bzB6v();
        bux5C.css3d = !!rW7P && rW7P.m41 != null;
        var cS2x = /-([a-z])/g;
        for (var x in MI3x) {
            MI3x[bAE6y(x)] = MI3x[x]
        }
    };
    var bAE6y = function () {
        var cS2x = /-([a-z])/g;
        return function (T1x) {
            T1x = T1x || "";
            return T1x.replace(cS2x, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bAN6H = function (T1x) {
        return (!bux5C.css3d ? bRm1x : bRn1x)[T1x]
    };
    var bCH7A = function () {
        var cS2x = /\s+/;
        return function (fn3x) {
            fn3x = (fn3x || "").trim();
            return !!fn3x ? fn3x.split(cS2x) : null
        }
    }();
    var bbn9e = function (F1x, t1x, fn3x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return;
        k0x.bb1x(bCH7A(fn3x), function (dL2x) {
            F1x.classList[t1x](dL2x)
        })
    };
    bc1x.FP1x = function (i0x) {
        return fh3x.slice.call(i0x, 0)
    };
    bc1x.brZ4d = function (F1x) {
        return bc1x.FP1x(F1x.children)
    };
    bc1x.brY4c = function (F1x, fn3x) {
        return bc1x.FP1x(F1x.getElementsByClassName(fn3x))
    };
    bc1x.brV4Z = function (F1x, FQ1x) {
        bbn9e(F1x, "add", FQ1x)
    };
    bc1x.brM4Q = function (F1x, FR1x) {
        bbn9e(F1x, "remove", FR1x)
    };
    bc1x.On4r = function (F1x, FR1x, FQ1x) {
        bbn9e(F1x, "remove", FR1x);
        bbn9e(F1x, "add", FQ1x)
    };
    bc1x.brv4z = function (F1x, fn3x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return !1;
        var i0x = F1x.classList;
        if (!i0x || !i0x.length) return !1;
        return k0x.cV2x(bCH7A(fn3x), function (dL2x) {
            return i0x.contains(dL2x)
        }) >= 0
    };
    bc1x.bqZ4d = function (F1x, dL2x) {
    };
    bc1x.bqX4b = function (F1x) {
    };
    bc1x.bqS4W = function (fH3x, mS5X) {
        fH3x.selectionEnd = mS5X.end || 0;
        fH3x.selectionStart = mS5X.start || 0;
        fH3x.focus()
    };
    bc1x.bqE4I = function (fH3x) {
        return {end: fH3x.selectionEnd, start: fH3x.selectionStart}
    };
    bc1x.bqD4H = function () {
        var DL1x = function (dL2x, d0x) {
            var F1x = h0x.U1x(d0x);
            if (!F1x.value) a9j.v1x(F1x, dL2x)
        };
        var Gb1x = function (dL2x, d0x) {
            a9j.x1x(h0x.U1x(d0x), dL2x)
        };
        return function (F1x, eQ3x, dL2x) {
            if (eQ3x == 1) {
                h0x.s0x(F1x, "blur", DL1x.g0x(null, dL2x))
            }
            if (eQ3x == 1 || eQ3x == -1) {
                h0x.s0x(F1x, "focus", Gb1x.g0x(null, dL2x))
            }
        }
    }();
    bc1x.bqv4z = function (H1x) {
        return (new XMLSerializer).serializeToString(H1x) || ""
    };
    bc1x.bqr4v = function (Ao0x) {
        var fz3x = (new DOMParser).parseFromString(Ao0x, "text/xml").documentElement;
        return fz3x.nodeName == "parsererror" ? null : fz3x
    };
    bc1x.bqq4u = function (F1x) {
    };
    bc1x.nk6e = function (F1x) {
        return null
    };
    bc1x.bqp4t = function (F1x) {
        return null
    };
    bc1x.bqo4s = function (dN2x) {
    };
    bc1x.bqi4m = function () {
        var bg1x = bc1x.FP1x(arguments);
        bg1x[0] = a9j.z1x(bg1x[0]);
        if (!bg1x[0]) return null;
        bg1x[1] = (bg1x[1] || "").toLowerCase();
        if (!bg1x[1]) return null;
        return bg1x
    };
    bc1x.Ah0x = function () {
        var vw8o = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, iF4J = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bRo1x = function (t1x) {
            return (lu5z.evt || lu5z.pro) + t1x
        };
        return function () {
            var bg1x = bc1x.bqi4m.apply(bc1x, arguments);
            if (!bg1x) return;
            var baP8H = iF4J[bg1x[1]], baO8G = vw8o[bg1x[1]];
            if (!!baP8H) {
                bg1x[4] = bg1x[1];
                bg1x[1] = bRo1x(baP8H)
            } else if (!!baO8G) {
                var T1x = "on" + bg1x[1];
                if (!(T1x in bg1x[0])) {
                    bg1x[4] = bg1x[1];
                    bg1x[1] = baO8G
                }
            }
            return bg1x
        }
    }();
    bc1x.bqd4h = function () {
        var bg1x = arguments;
        bg1x[0].addEventListener(bg1x[1], bg1x[2], !!bg1x[3])
    };
    bc1x.baM8E = function () {
        var bg1x = arguments;
        bg1x[0].removeEventListener(bg1x[1], bg1x[2], !!bg1x[3])
    };
    bc1x.bpY4c = function (F1x, t1x, e0x) {
        var d0x = document.createEvent("Event");
        d0x.initEvent(t1x, !0, !0);
        NEJ.X(d0x, e0x);
        F1x.dispatchEvent(d0x)
    };
    bc1x.bzB6v = function () {
        var gf3x = /\((.*?)\)/, js4w = /\s*,\s*/, i0x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var baL8D = function (rW7P) {
            var iB4F = {};
            if (gf3x.test(rW7P || "")) {
                k0x.bb1x(RegExp.$1.split(js4w), function (C1x, r0x) {
                    iB4F[i0x[r0x]] = C1x || ""
                })
            }
            return iB4F
        };
        return function (rW7P) {
            if (!!window.CSSMatrix) return new CSSMatrix(rW7P);
            var T1x = lu5z.clz + "CSSMatrix";
            if (!!window[T1x]) return new window[T1x](rW7P || "");
            return baL8D(rW7P)
        }
    }();
    bc1x.bIP8H = function () {
        var cS2x = /\{(.*?)\}/g;
        return function (T1x, bu1x) {
            bu1x = bu1x || o;
            var pw6q = bAN6H(T1x);
            return !pw6q ? "" : pw6q.replace(cS2x, function ($1, $2) {
                var bs1x = $2.split("|");
                return bu1x[bs1x[0]] || bs1x[1] || "0"
            })
        }
    }();
    bc1x.bpV4Z = function (F1x, T1x, C1x) {
        F1x.style[bc1x.bMn9e(T1x)] = C1x
    };
    bc1x.bMn9e = function () {
        var cS2x = /^[a-z]/, bpU4Y = lu5z.css;
        var bRp1x = function (T1x) {
            return T1x.replace(cS2x, function ($1) {
                return bpU4Y + $1.toUpperCase()
            })
        };
        return function (T1x) {
            T1x = bAE6y(T1x);
            var bRz2x = bc1x.bRA2x(T1x, MI3x);
            return bRz2x ? bRp1x(T1x) : T1x
        }
    }();
    bc1x.bRA2x = function () {
        var cS2x = /^([a-z]+?)[A-Z]/;
        return function (T1x, bu1x) {
            if (!bu1x[T1x]) {
                if (cS2x.test(T1x)) T1x = RegExp.$1
            }
            return !!bu1x[T1x]
        }
    }();
    bc1x.bRB2x = function () {
        var cS2x = /\$<(.*?)>/gi, bpU4Y = "-" + lu5z.css.toLowerCase() + "-";
        return function (jw4A) {
            return jw4A.replace(cS2x, function ($1, $2) {
                var ez3x = $2, bs1x = ez3x.split("|"), pw6q = bAN6H(bs1x[0]);
                if (!!pw6q) {
                    return bc1x.bIP8H(bs1x[0], k0x.hx4B(bs1x[1]))
                }
                return !bc1x.bRE2x(ez3x, MI3x) ? ez3x : bpU4Y + ez3x
            })
        }
    }();
    bc1x.bRE2x = function (T1x, bu1x) {
        return !!bu1x[T1x]
    };
    bc1x.bpP3x = function (ce1x, jw4A) {
        ce1x.textContent = jw4A
    };
    bc1x.bpO3x = function (ce1x, jw4A) {
        var xM9D = ce1x.sheet, bm1x = xM9D.cssRules.length;
        xM9D.insertRule(jw4A, bm1x);
        return xM9D.cssRules[bm1x]
    };
    bc1x.cBs0x = function (F1x, e0x) {
    };
    bc1x.baI8A = function (baH8z) {
        return (baH8z || "").toLowerCase() != "transparent"
    };
    bc1x.bRL2x = function (F1x) {
    };
    bc1x.bpF3x = function (F1x, T1x) {
        if (!!F1x.getAttribute) return F1x.getAttribute(T1x);
        return ""
    };
    bc1x.baD8v = function (fj3x) {
        a9j.cC2x(fj3x)
    };
    RL5Q()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), N1x = c0x("nej.p"), bc1x = c0x("nej.h");
    if (N1x.mp5u.trident0) return;
    var gi3x = +(new Date);
    Q1x = {};
    bc1x.bqZ4d = bc1x.bqZ4d.ek3x(function (d0x) {
        d0x.stopped = !0;
        var bg1x = d0x.args, D1x = a9j.la5f(bg1x[0]), J1x = "hover-" + D1x;
        if (!D1x || !!Q1x[J1x]) return;
        Q1x[J1x] = !0;
        h0x.s0x(D1x, "mouseenter", a9j.x1x.g0x(a9j, D1x, bg1x[1]));
        h0x.s0x(D1x, "mouseleave", a9j.v1x.g0x(a9j, D1x, bg1x[1]))
    });
    bc1x.bqX4b = function () {
        var cBq0x = function () {
        };
        return bc1x.bqX4b.ek3x(function (d0x) {
            d0x.stopped = !0;
            var F1x = d0x.args[0], D1x = "fixed-" + a9j.la5f(F1x);
            if (!!Q1x[D1x]) return;
            var bd1x = {};
            Q1x[D1x] = bd1x
        })
    }();
    bc1x.bqq4u = bc1x.bqq4u.ek3x(function (d0x) {
        d0x.stopped = !0;
        var F1x = d0x.args[0], ce1x = F1x.style, bFH8z = a9j.pb6V();
        ce1x.width = bFH8z.scrollWidth + "px";
        ce1x.height = bFH8z.scrollHeight + "px"
    });
    bc1x.nk6e = bc1x.nk6e.ek3x(function (d0x) {
        d0x.stopped = !0;
        var F1x = d0x.args[0], kw5B = Q1x[F1x.msk];
        if (!kw5B) {
            F1x.msk = gi3x++;
            kw5B = a9j.cX2x("iframe");
            kw5B.style.position = "absolute";
            Q1x[F1x.msk] = kw5B
        }
        d0x.value = kw5B;
        var ce1x = kw5B.style;
        ce1x.top = (parseInt(a9j.dc2x(F1x, "top")) || 0) + "px";
        ce1x.left = (parseInt(a9j.dc2x(F1x, "left")) || 0) + "px";
        ce1x.width = F1x.offsetWidth + "px";
        ce1x.height = F1x.offsetHeight + "px";
        F1x.insertAdjacentElement("beforeBegin", kw5B)
    });
    bc1x.bqp4t = bc1x.bqp4t.ek3x(function (d0x) {
        d0x.stopped = !0;
        var kw5B = Q1x[d0x.args[0].msk];
        if (!!kw5B) a9j.mJ5O(kw5B)
    })
})();
(function () {
    var c0x = NEJ.P, N1x = c0x("nej.p"), a9j = c0x("nej.e"), bc1x = c0x("nej.h");
    if (N1x.mp5u.trident1) return;
    bc1x.Ah0x = function () {
        var vw8o = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bc1x.Ah0x.ek3x(function (d0x) {
            var bg1x = bc1x.bqi4m.apply(bc1x, d0x.args);
            if (!bg1x) {
                d0x.stopped = !0;
                return
            }
            var t1x = vw8o[bg1x[1]];
            if (!!t1x && ("on" + t1x).toLowerCase() in bg1x[0]) {
                bg1x[4] = bg1x[1];
                bg1x[1] = t1x;
                d0x.stopped = !0;
                d0x.value = bg1x
            }
        })
    }();
    bc1x.baI8A = function (baH8z) {
        return !0
    };
    bc1x.baD8v = bc1x.baD8v.ek3x(function (d0x) {
        d0x.stopped = !0;
        var fj3x = d0x.args[0];
        a9j.Z1x(fj3x, "display", "none");
        try {
            fj3x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, N1x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        bc1x = c0x("nej.h"), bpC3x = {};
    if (N1x.mp5u.trident) return;
    bc1x.FP1x = bc1x.FP1x.ek3x(function (d0x) {
        d0x.stopped = !0;
        var i0x = d0x.args[0];
        if (!i0x) {
            d0x.value = null;
            return
        }
        var r0x = 0, o0x = [];
        while (!!i0x[r0x]) {
            o0x.push(i0x[r0x++])
        }
        d0x.value = o0x
    });
    bc1x.brZ4d = bc1x.brZ4d.ek3x(function (d0x) {
        d0x.stopped = !0;
        var bs1x = [];
        k0x.bb1x(d0x.args[0].childNodes, function (f0x) {
            if (f0x.nodeType == 1) bs1x.push(f0x)
        });
        d0x.value = bs1x
    });
    bc1x.brY4c = bc1x.brY4c.ek3x(function (d0x) {
        var F1x = d0x.args[0];
        if (!!F1x.getElementsByClassName) return;
        d0x.stopped = !0;
        var o0x = [], bpB3x = new RegExp("(\\s|^)(?:" + d0x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k0x.bb1x(F1x.getElementsByTagName("*"), function (f0x) {
            if (bpB3x.test(f0x.className)) o0x.push(f0x)
        });
        d0x.value = o0x
    });
    bc1x.bqS4W = bc1x.bqS4W.ek3x(function (d0x) {
        var fH3x = d0x.args[0], mS5X = d0x.args[1];
        if (fH3x.selectionStart == null) {
            d0x.stopped = !0;
            var cN2x = fH3x.createTextRange();
            cN2x.collapse(!0);
            cN2x.moveStart("character", mS5X.start);
            cN2x.moveEnd("character", mS5X.end - mS5X.start);
            cN2x.select();
            fH3x.focus()
        }
    });
    bc1x.bqE4I = bc1x.bqE4I.ek3x(function (d0x) {
        var fH3x = d0x.args[0];
        fH3x.focus();
        if (fH3x.selectionStart == null) {
            d0x.stopped = !0;
            var bJC9t = document.selection.createRange();
            var buq5v = fH3x.createTextRange();
            buq5v.moveToBookmark(bJC9t.getBookmark());
            var bpx3x = fH3x.createTextRange();
            bpx3x.collapse(!0);
            bpx3x.setEndPoint("EndToStart", buq5v);
            var io4s = bpx3x.text.length;
            d0x.value = {start: io4s, end: io4s + bJC9t.text.length}
        }
    });
    bc1x.bqv4z = bc1x.bqv4z.ek3x(function (d0x) {
        if (!!window.XMLSerializer) return;
        d0x.stopped = !0;
        var F1x = d0x.args[0];
        d0x.value = F1x.xml != null ? F1x.xml : F1x.outHTML
    });
    bc1x.bqr4v = function () {
        var Lz3x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bRP2x = function () {
            try {
                for (var i = 0, l = Lz3x.length; i < l; i++) return new ActiveXObject(Lz3x[i])
            } catch (ex) {
                return null
            }
        };
        return bc1x.bqr4v.ek3x(function (d0x) {
            if (!!window.DOMParser) return;
            d0x.stopped = !0;
            var nt6n = bRP2x();
            if (!!nt6n && nt6n.loadXML(d0x.args[0]) && !nt6n.parseError.errorCode) d0x.value = nt6n.documentElement
        })
    }();
    bc1x.Ah0x = function () {
        var iF4J = {input: "propertychange", load: "readystatechange"};
        for (var x in iF4J) bpC3x[iF4J[x]] = !0;
        var bRQ2x = function (F1x, t1x) {
            if ("on" + t1x in F1x) return null;
            return iF4J[t1x] || ""
        };
        var bSq2x = function (t1x, dg2x) {
            var dw2x = dg2x;
            switch (t1x) {
                case"readystatechange":
                    dw2x = function (d0x) {
                        var F1x = h0x.U1x(d0x) || this;
                        if (F1x.readyState == "loaded" || F1x.readyState == "complete") {
                            d0x.target = F1x;
                            dg2x.call(F1x, d0x)
                        }
                    };
                    break;
                case"propertychange":
                    dw2x = function (d0x) {
                        var F1x = h0x.U1x(d0x) || this;
                        if ("value" in F1x && d0x.propertyName == "value") {
                            d0x.target = F1x;
                            dg2x.call(F1x, d0x)
                        }
                    };
                    break
            }
            return dw2x
        };
        return bc1x.Ah0x.ek3x(function (d0x) {
            var bg1x = bc1x.bqi4m.apply(bc1x, d0x.args);
            if (!bg1x) {
                d0x.stopped = !0;
                return
            }
            var t1x = bRQ2x(bg1x[0], bg1x[1]);
            if (!!t1x) {
                d0x.stopped = !0;
                bg1x[4] = bg1x[1];
                bg1x[1] = t1x;
                if (!!bg1x[2]) {
                    bg1x[5] = bg1x[2];
                    bg1x[2] = bSq2x(bg1x[1], bg1x[2])
                }
                d0x.value = bg1x
            }
        }, function (d0x) {
            var bg1x = d0x.value;
            if (!bg1x[0] || !k0x.gb3x(bg1x[2])) return;
            if (!k0x.gb3x(bg1x[5])) bg1x[5] = bg1x[2];
            bg1x[2] = bg1x[2].g0x(bg1x[0])
        })
    }();
    bc1x.bqd4h = bc1x.bqd4h.ek3x(function (d0x) {
        var bg1x = d0x.args;
        if (!!bpC3x[bg1x[1]] || !document.addEventListener) {
            d0x.stopped = !0;
            bg1x[0].attachEvent("on" + bg1x[1], bg1x[2])
        }
    });
    bc1x.baM8E = bc1x.baM8E.ek3x(function (d0x) {
        var bg1x = d0x.args;
        if (!!bpC3x[bg1x[1]] || !document.removeEventListener) {
            d0x.stopped = !0;
            bg1x[0].detachEvent("on" + bg1x[1], bg1x[2])
        }
    });
    bc1x.bpY4c = bc1x.bpY4c.ek3x(function (d0x) {
        if (!document.createEvent) {
            d0x.stopped = !0;
            var bg1x = d0x.args, byQ6K = document.createEventObject();
            NEJ.X(byQ6K, bg1x[2]);
            try {
                bg1x[0].fireEvent("on" + bg1x[1], byQ6K)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bc1x.bpV4Z = bc1x.bpV4Z.ek3x(function (d0x) {
        var bg1x = d0x.args, T1x = bg1x[1].toLowerCase();
        if (T1x == "opacity" && !(T1x in document.body.style)) {
            bg1x[1] = "filter";
            bg1x[2] = "alpha(opacity=" + bg1x[2] * 100 + ")"
        }
    });
    bc1x.bpP3x = function () {
        var fl3x = 30;
        return bc1x.bpP3x.ek3x(function (d0x) {
            var F1x = d0x.args[0];
            if (!F1x.styleSheet) return;
            d0x.stopped = !0;
            var jw4A = d0x.args[1];
            var i0x = document.styleSheets;
            if (i0x.length > fl3x) {
                F1x = i0x[fl3x];
                jw4A = F1x.cssText + jw4A
            } else {
                F1x = F1x.styleSheet
            }
            F1x.cssText = jw4A
        })
    }();
    bc1x.bpO3x = bc1x.bpO3x.ek3x(function (d0x) {
        var bg1x = d0x.args, xM9D = bg1x[0].sheet;
        if (!!xM9D) return;
        d0x.stopped = !0;
        var xM9D = bg1x[0].styleSheet, bm1x = xM9D.rules.length, bs1x = bg1x[1].split(/[\{\}]/);
        xM9D.addRule(bs1x[0], bs1x[1], bm1x);
        d0x.value = xM9D.rules[bm1x]
    });
    bc1x.bqD4H = function () {
        var DL1x = function (dL2x, d0x) {
            a9j.v1x(h0x.U1x(d0x), dL2x)
        };
        return bc1x.bqD4H.ek3x(function (d0x) {
            if (N1x.dk2x.release >= "4.0") return;
            var bg1x = d0x.args;
            if (bg1x[1] != 1) {
                h0x.s0x(bg1x[0], "blur", DL1x.g0x(null, bg1x[2]));
                bg1x[1] = -1
            }
        })
    }();
    bc1x.baI8A = function (baH8z) {
        return !0
    };
    bc1x.bpF3x = bc1x.bpF3x.ek3x(function (d0x) {
        var bg1x = d0x.args, f0x = (bg1x[0].attributes || Y1x)[bg1x[1]];
        if (!!f0x) {
            d0x.stopped = !0;
            d0x.value = f0x.value
        }
    }, function (d0x) {
        var bg1x = d0x.args;
        if (bg1x[1] == "maxlength" && d0x.value == 2147483647) d0x.value = ""
    });
    if (N1x.dk2x.release < 5) {
        bc1x.bqo4s = function () {
            var eD3x, fj3x, jB4F = [], bpq3x = "cb-" + +(new Date),
                bl1x = '<script>parent.nej.h["' + bpq3x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCO7H = function () {
                eD3x = window.clearTimeout(eD3x);
                if (!jB4F.length) return;
                var dN2x = jB4F.shift();
                try {
                    var ve8W = fj3x.contentWindow.document;
                    ve8W.open();
                    ve8W.write("<head><title>");
                    ve8W.write(document.title);
                    ve8W.write("</title>");
                    ve8W.write(bl1x.replace("#<HASH>", encodeURIComponent(dN2x)));
                    ve8W.write("</head><body></body>");
                    if (location.hostname != document.domain) ve8W.domain = document.domain;
                    ve8W.close();
                    bc1x[bpq3x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jB4F.unshift(dN2x)
                }
                eD3x = window.setTimeout(bCO7H, 50)
            };
            return bc1x.bqo4s.ek3x(function (d0x) {
                d0x.stopped = !0;
                var dN2x = d0x.args[0];
                if (!!bc1x[bpq3x] || !fj3x && !dN2x) return;
                jB4F.push(dN2x);
                if (!fj3x) fj3x = a9j.baA8s();
                bCO7H()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), bc1x = c0x("nej.h"), N1x = c0x("nej.p"), baz8r = N1x.bOH0x;
    if (N1x.mp5u.gecko) return;
    var RL5Q = function () {
        baz8r.css3d = baz8r.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (im4q, F1x) {
            if (!im4q || !F1x) return;
            switch (im4q) {
                case"beforeEnd":
                    this.appendChild(F1x);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(F1x, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(F1x) : this.insertBefore(F1x, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F1x) : this.parentNode.insertBefore(F1x, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bl1x) {
                this.textContent = bl1x
            })
        }
    };
    bc1x.Ah0x = function () {
        var gf3x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bc1x.Ah0x.ek3x(function (d0x) {
            var bg1x = d0x.args;
            if (gf3x.test(bg1x[1] || "")) {
                d0x.stopped = !0;
                d0x.value = bg1x
            }
        })
    }();
    bc1x.bRL2x = function () {
        var bSM2x = function (d0x) {
            h0x.bh1x(d0x);
            h0x.U1x(d0x).control.click()
        };
        return function (F1x) {
            h0x.s0x(F1x, "click", bSM2x)
        }
    }();
    RL5Q()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bc1x = c0x("nej.h");
    var bax8p = function () {
        var or6l = !!document.body.classList;
        return function () {
            return or6l
        }
    }();
    var bFR8J = function () {
        var cS2x = /\s+/g;
        return function (fn3x) {
            fn3x = (fn3x || "").trim();
            return !fn3x ? null : new RegExp("(\\s|^)(?:" + fn3x.replace(cS2x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    bc1x.On4r = bc1x.On4r.ek3x(function (d0x) {
        if (bax8p()) return;
        d0x.stopped = !0;
        var bg1x = d0x.args, F1x = a9j.z1x(bg1x[0]);
        if (!F1x || !bg1x[1] && !bg1x[2]) return;
        var fn3x = F1x.className || "";
        var FQ1x = " " + (bg1x[2] || ""), FR1x = bFR8J((bg1x[1] || "") + FQ1x);
        !!FR1x && (fn3x = fn3x.replace(FR1x, "$1"));
        F1x.className = (fn3x + FQ1x).replace(/\s+/g, " ").trim()
    });
    bc1x.brV4Z = bc1x.brV4Z.ek3x(function (d0x) {
        if (bax8p()) return;
        d0x.stopped = !0;
        var bg1x = d0x.args;
        bc1x.On4r(bg1x[0], "", bg1x[1])
    });
    bc1x.brM4Q = bc1x.brM4Q.ek3x(function (d0x) {
        if (bax8p()) return;
        d0x.stopped = !0;
        var bg1x = d0x.args;
        bc1x.On4r(bg1x[0], bg1x[1], "")
    });
    bc1x.brv4z = bc1x.brv4z.ek3x(function (d0x) {
        if (bax8p()) return;
        d0x.stopped = !0;
        var bg1x = d0x.args, F1x = a9j.z1x(bg1x[0]);
        if (!F1x) {
            d0x.value = !1;
            return
        }
        var cS2x = bFR8J(bg1x[1]);
        d0x.value = !cS2x ? !1 : cS2x.test(F1x.className || "")
    })
})();
(function () {
    var c0x = NEJ.P, N1x = c0x("nej.p"), bc1x = c0x("nej.h");
    if (N1x.mp5u.webkit) return;
    bc1x.baI8A = function (baH8z) {
        return !0
    }
})();
(function () {
    var c0x = NEJ.P, bc1x = c0x("nej.h"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        cT2x = c0x("nej.x"), Q1x = {};
    var bJh8Z = function (F1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x || !Q1x[F1x.id]) return;
        var bat8l = !0, D1x = F1x.id;
        k0x.eq3x(Q1x[D1x], function () {
            bat8l = !1;
            return !0
        });
        if (bat8l) delete Q1x[D1x]
    };
    h0x.s0x = cT2x.s0x = function () {
        var bTs2x = function () {
            var bg1x = bc1x.Ah0x.apply(bc1x, arguments);
            if (!bg1x || !bg1x[2]) return;
            var tu8m = a9j.la5f(bg1x[0]), ok6e = Q1x[tu8m] || {};
            Q1x[tu8m] = ok6e;
            tu8m = bg1x[4] || bg1x[1];
            var zq9h = ok6e[tu8m] || [];
            ok6e[tu8m] = zq9h;
            zq9h.push({type: bg1x[1], func: bg1x[2], capt: !!bg1x[3], sfun: bg1x[5] || bg1x[2]});
            return bg1x.slice(0, 4)
        };
        return function () {
            var bg1x = bTs2x.apply(null, arguments);
            if (!!bg1x) bc1x.bqd4h.apply(bc1x, bg1x);
            return this
        }
    }();
    h0x.mt5y = cT2x.mt5y = function () {
        var bTL2x = function () {
            var va8S = arguments, tu8m = a9j.la5f(va8S[0]), ok6e = Q1x[tu8m], t1x = (va8S[1] || "").toLowerCase(),
                d0x = va8S[2];
            if (!ok6e || !t1x || !d0x) return;
            ok6e = ok6e[t1x];
            if (!ok6e) return;
            var bTN2x = !!va8S[3], r0x = k0x.cV2x(ok6e, function (iF4J) {
                return d0x == iF4J.sfun && bTN2x == iF4J.capt
            });
            if (r0x < 0) return;
            var iF4J = ok6e.splice(r0x, 1)[0];
            return !iF4J ? null : [a9j.z1x(tu8m), iF4J.type, iF4J.func, iF4J.capt]
        };
        return function () {
            var bg1x = bTL2x.apply(null, arguments);
            if (!!bg1x) {
                bc1x.baM8E.apply(bc1x, bg1x);
                bJh8Z(bg1x[0])
            }
            return this
        }
    }();
    h0x.hw4A = cT2x.hw4A = function () {
        var bOp0x = function () {
            var va8S = arguments, tu8m = a9j.la5f(va8S[0]), ok6e = Q1x[tu8m], zq9h = (va8S[1] || "").toLowerCase();
            if (!ok6e || !zq9h) return;
            var F1x = a9j.z1x(tu8m);
            k0x.mq5v(ok6e[zq9h], function (iF4J, r0x, i0x) {
                bc1x.baM8E(F1x, iF4J.type, iF4J.func, iF4J.capt);
                i0x.splice(r0x, 1)
            });
            delete ok6e[zq9h]
        };
        var bTO2x = function (F1x) {
            F1x = a9j.z1x(F1x);
            if (!F1x) return;
            var D1x = F1x.id;
            k0x.eq3x(Q1x[D1x], function (i0x, t1x) {
                bOp0x(D1x, t1x)
            });
            delete Q1x[D1x]
        };
        return function (F1x, t1x) {
            !t1x ? bTO2x(F1x) : bOp0x(F1x, t1x);
            bJh8Z(F1x);
            return this
        }
    }();
    h0x.U1x = function () {
        var boV3x;
        var Gm1x = function (T1x, F1x) {
            var bs1x = T1x.split(":");
            if (bs1x.length > 1) {
                if (!boV3x) boV3x = {c: a9j.bz1x, d: a9j.u1x, a: a9j.fU3x};
                var Gn1x = boV3x[bs1x[0]];
                if (!!Gn1x) return !!Gn1x(F1x, bs1x[1]);
                T1x = bs1x[1]
            }
            return !!a9j.fU3x(F1x, T1x) || !!a9j.u1x(F1x, T1x) || a9j.bz1x(F1x, T1x)
        };
        return function (d0x) {
            if (!d0x) return null;
            var F1x = d0x.target || d0x.srcElement, dG2x = arguments[1];
            if (!dG2x) return F1x;
            if (k0x.fx3x(dG2x)) dG2x = Gm1x.g0x(null, dG2x);
            if (k0x.gb3x(dG2x)) {
                while (F1x) {
                    if (!!dG2x(F1x)) return F1x;
                    F1x = F1x.parentNode
                }
                return null
            }
            return F1x
        }
    }();
    h0x.bh1x = function (d0x) {
        h0x.rX7Q(d0x);
        h0x.ci1x(d0x);
        return this
    };
    h0x.rX7Q = function (d0x) {
        if (!!d0x) {
            !!d0x.stopPropagation ? d0x.stopPropagation() : d0x.cancelBubble = !0
        }
        return this
    };
    h0x.ci1x = function (d0x) {
        if (!!d0x) {
            !!d0x.preventDefault ? d0x.preventDefault() : d0x.returnValue = !1
        }
        return this
    };
    h0x.cBg0x = function () {
        var pE6y = !1;
        var bUb2x = function () {
            if (pE6y) return;
            pE6y = !0;
            h0x.s0x(document, "click", bUr2x, !0)
        };
        var bUr2x = function (d0x) {
            var F1x = h0x.U1x(d0x), bUA2x = a9j.u1x(F1x, "stopped");
            if (bUA2x == "true") {
                h0x.bh1x(d0x);
                a9j.u1x(F1x, "stopped", "false")
            }
        };
        return function (d0x) {
            if (!d0x) return;
            if (d0x.type == "click") {
                h0x.bh1x(d0x);
                return
            }
            bUb2x();
            a9j.u1x(h0x.U1x(d0x), "stopped", "true")
        }
    }();
    h0x.jS5X = function (d0x) {
        return d0x.pageX != null ? d0x.pageX : d0x.clientX + a9j.pb6V().scrollLeft
    };
    h0x.mh5m = function (d0x) {
        return d0x.pageY != null ? d0x.pageY : d0x.clientY + a9j.pb6V().scrollTop
    };
    h0x.y1x = cT2x.y1x = function (F1x, t1x, e0x) {
        var bg1x = bc1x.Ah0x(F1x, t1x);
        if (!!bg1x) bc1x.bpY4c(bg1x[0], bg1x[1], e0x);
        return this
    };
    c0x("dbg").dumpEV = function () {
        return Q1x
    };
    cT2x.isChange = !0
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
    var c0x = NEJ.P, N1x = c0x("nej.p");
    if (N1x.mp5u.trident0) return;
    JSON.parse = JSON.parse.ek3x(function (d0x) {
        var cz1x = d0x.args[0] || "";
        if (cz1x.length >= 5e5) {
            d0x.stopped = !0;
            d0x.value = eval("(" + cz1x + ")")
        }
    })
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, dU2x = c0x("nej.g"), a9j = c0x("nej.e"), k0x = c0x("nej.u"),
        h0x = c0x("nej.v"), bc1x = c0x("nej.h"), cT2x = c0x("nej.x"), Gs1x, boA3x = {},
        Q1x = document.createDocumentFragment();
    a9j.la5f = cT2x.la5f = function (F1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return;
        var D1x = !!F1x.id ? F1x.id : "auto-id-" + k0x.MK3x(16);
        F1x.id = D1x;
        if (a9j.z1x(D1x) != F1x) boA3x[D1x] = F1x;
        return D1x
    };
    a9j.z1x = cT2x.z1x = function (F1x) {
        var f0x = boA3x["" + F1x];
        if (!!f0x) return f0x;
        if (!k0x.fx3x(F1x) && !k0x.vz8r(F1x)) return F1x;
        return document.getElementById(F1x)
    };
    a9j.cU2x = cT2x.cU2x = function (F1x, dL2x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return null;
        var i0x = bc1x.brZ4d(F1x);
        if (!!dL2x) k0x.mq5v(i0x, function (f0x, r0x) {
            if (!a9j.bz1x(f0x, dL2x)) i0x.splice(r0x, 1)
        });
        return i0x
    };
    a9j.I1x = cT2x.I1x = function (F1x, fn3x) {
        F1x = a9j.z1x(F1x);
        return !F1x ? null : bc1x.brY4c(F1x, fn3x.trim())
    };
    a9j.bHO8G = cT2x.bHO8G = function (F1x) {
        F1x = a9j.z1x(F1x);
        if (!!F1x) {
            F1x = F1x.parentNode;
            while (!!F1x) {
                if (F1x.scrollHeight > F1x.clientHeight) break;
                F1x = F1x.parentNode
            }
            if (!!F1x) return F1x
        }
        var ok6e = document.body.scrollHeight, zq9h = document.documentElement.scrollHeight;
        return zq9h >= ok6e ? document.documentElement : document.body
    };
    a9j.pb6V = function () {
        var bIO8G = function (i0x) {
            var o0x = 0;
            k0x.bb1x(i0x, function (fv3x) {
                if (!fv3x) return;
                if (!o0x) {
                    o0x = fv3x
                } else {
                    o0x = Math.min(o0x, fv3x)
                }
            });
            return o0x
        };
        return function (ve8W) {
            var Gv2x = ve8W || document, yX9O = Gv2x.body, yW9N = Gv2x.documentElement, o0x = {
                scrollTop: Math.max(yX9O.scrollTop, yW9N.scrollTop),
                scrollLeft: Math.max(yX9O.scrollLeft, yW9N.scrollLeft),
                clientWidth: bIO8G([yX9O.clientWidth, yX9O.offsetWidth, yW9N.clientWidth, yW9N.offsetWidth]),
                clientHeight: bIO8G([yX9O.clientHeight, yX9O.offsetHeight, yW9N.clientHeight, yW9N.offsetHeight])
            };
            o0x.scrollWidth = Math.max(o0x.clientWidth, yX9O.scrollWidth, yW9N.scrollWidth);
            o0x.scrollHeight = Math.max(o0x.clientHeight, yX9O.scrollHeight, yW9N.scrollHeight);
            return o0x
        }
    }();
    a9j.cBa0x = function (fl3x, og6a) {
        var o0x = NEJ.X({}, og6a), bLP9G = fl3x.width / fl3x.height, bac8U = og6a.width / og6a.height;
        if (bLP9G > bac8U && og6a.height > fl3x.height) {
            o0x.height = fl3x.height;
            o0x.width = o0x.height * bac8U
        }
        if (bLP9G < bac8U && og6a.width > fl3x.width) {
            o0x.width = fl3x.width;
            o0x.height = o0x.width / bac8U
        }
        return o0x
    };
    a9j.cAZ0x = function () {
        var cS2x = /\s+/;
        var tz8r = {
            left: function () {
                return 0
            }, center: function (gN4R, og6a) {
                return (gN4R.width - og6a.width) / 2
            }, right: function (gN4R, og6a) {
                return gN4R.width - og6a.width
            }, top: function () {
                return 0
            }, middle: function (gN4R, og6a) {
                return (gN4R.height - og6a.height) / 2
            }, bottom: function (gN4R, og6a) {
                return gN4R.height - og6a.height
            }
        };
        return function (gN4R, og6a, mW5b) {
            var o0x = {}, bs1x = (mW5b || "").split(cS2x), gq3x = tz8r[bs1x[1]] || tz8r.middle,
                gO4S = tz8r[bs1x[0]] || tz8r.center;
            o0x.top = gq3x(gN4R, og6a);
            o0x.left = gO4S(gN4R, og6a);
            return o0x
        }
    }();
    a9j.se7X = cT2x.se7X = function (F1x, dL2x) {
        bc1x.bqZ4d(F1x, dL2x || a9j.u1x(F1x, "hover") || "js-hover");
        return this
    };
    a9j.Gz2x = cT2x.Gz2x = function (F1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return;
        bc1x.bqX4b(F1x)
    };
    a9j.bVc2x = cT2x.bVc2x = function () {
        var Q1x = {}, btM4Q = 2;
        var bVm2x = function (D1x, dL2x, d0x) {
            Q1x[D1x] = [h0x.jS5X(d0x), h0x.mh5m(d0x)];
            a9j.x1x(D1x, dL2x)
        };
        var bVz2x = function (D1x, dL2x, d0x) {
            var bH1x = Q1x[D1x];
            if (!k0x.eu3x(bH1x)) return;
            var bVP3x = Math.abs(h0x.jS5X(d0x) - bH1x[0]), bVR3x = Math.abs(h0x.mh5m(d0x) - bH1x[1]);
            if (bVP3x > btM4Q || bVR3x > btM4Q) bnp3x(D1x, dL2x)
        };
        var bnp3x = function (D1x, dL2x) {
            if (k0x.eu3x(Q1x[D1x])) {
                Q1x[D1x] = -1;
                a9j.v1x(D1x, dL2x)
            }
        };
        return function (F1x, dL2x) {
            var D1x = a9j.la5f(F1x);
            if (!D1x || Q1x[D1x] != null) return;
            Q1x[D1x] = -1;
            dL2x = dL2x || a9j.u1x(D1x, "highlight") || "js-highlight";
            h0x.s0x(D1x, "touchstart", bVm2x.g0x(null, D1x, dL2x));
            h0x.s0x(document, "touchmove", bVz2x.g0x(null, D1x, dL2x));
            h0x.s0x(document, "touchend", bnp3x.g0x(null, D1x, dL2x));
            h0x.s0x(document, "touchcancel", bnp3x.g0x(null, D1x, dL2x))
        }
    }();
    a9j.yH9y = cT2x.yH9y = function () {
        var bVU3x = function (D1x, dL2x, bWh3x) {
            var F1x = a9j.z1x(D1x), d0x = {clazz: dL2x, target: F1x};
            if (a9j.bz1x(F1x, dL2x)) {
                d0x.toggled = !1;
                a9j.v1x(F1x, dL2x)
            } else {
                d0x.toggled = !0;
                a9j.x1x(F1x, dL2x)
            }
            bWh3x.call(null, d0x)
        };
        return function (F1x, e0x) {
            F1x = a9j.z1x(F1x);
            if (!!F1x) {
                var iB4F = {ontoggle: bo1x, clazz: "js-toggle", element: F1x.parentNode};
                if (k0x.fx3x(e0x)) {
                    var f0x = a9j.z1x(e0x);
                    !!f0x ? iB4F.element = f0x : iB4F.clazz = e0x
                } else {
                    NEJ.EX(iB4F, e0x);
                    iB4F.element = a9j.z1x(iB4F.element)
                }
                var D1x = a9j.la5f(iB4F.element);
                h0x.s0x(F1x, "click", bVU3x.g0x(null, D1x, iB4F.clazz, iB4F.ontoggle || bo1x))
            }
            return this
        }
    }();
    a9j.mK5P = cT2x.mK5P = function (F1x, e0x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return;
        var eQ3x = 0, dL2x = "js-focus";
        if (k0x.vz8r(e0x)) {
            eQ3x = e0x
        } else if (k0x.fx3x(e0x)) {
            dL2x = e0x
        } else if (k0x.kW5b(e0x)) {
            eQ3x = e0x.mode || eQ3x;
            dL2x = e0x.clazz || dL2x
        }
        var C1x = parseInt(a9j.u1x(F1x, "mode"));
        if (!isNaN(C1x)) eQ3x = C1x;
        C1x = a9j.u1x(F1x, "focus");
        if (!!C1x) dL2x = C1x;
        bc1x.bqD4H(F1x, eQ3x, dL2x);
        return this
    };
    a9j.cX2x = function () {
        var bu1x = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fe3x, fn3x, bE1x) {
            var F1x = document.createElement(fe3x);
            NEJ.X(F1x, bu1x[fe3x.toLowerCase()]);
            if (!!fn3x) F1x.className = fn3x;
            bE1x = a9j.z1x(bE1x);
            if (!!bE1x) bE1x.appendChild(F1x);
            return F1x
        }
    }();
    a9j.baA8s = function () {
        var bWy3x = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bWZ3x = function (T1x) {
            T1x = T1x.trim();
            if (!T1x) return a9j.cX2x("iframe");
            var fj3x;
            try {
                fj3x = document.createElement('<iframe name="' + T1x + '"></iframe>');
                fj3x.frameBorder = 0
            } catch (e) {
                fj3x = a9j.cX2x("iframe");
                fj3x.name = T1x
            }
            return fj3x
        };
        return function (e0x) {
            e0x = e0x || Y1x;
            var fj3x = bWZ3x(e0x.name || "");
            if (!e0x.visible) fj3x.style.display = "none";
            if (k0x.gb3x(e0x.onload)) h0x.s0x(fj3x, "load", function (d0x) {
                if (!fj3x.src) return;
                h0x.hw4A(fj3x, "load");
                e0x.onload(d0x)
            });
            var bE1x = e0x.parent;
            if (k0x.gb3x(bE1x)) {
                try {
                    bE1x(fj3x)
                } catch (e) {
                }
            } else {
                (a9j.z1x(bE1x) || document.body).appendChild(fj3x)
            }
            var dz2x = e0x.src || bWy3x();
            window.setTimeout(function () {
                fj3x.src = dz2x
            }, 0);
            return fj3x
        }
    }();
    a9j.cC2x = cT2x.cC2x = function () {
        var bzf6Z = function (Oz4D) {
            Oz4D.src = dU2x.bsp4t
        };
        var bzx6r = function (uC8u) {
            uC8u.src = "about:blank"
        };
        return function (F1x, bXl3x) {
            F1x = a9j.z1x(F1x);
            if (!F1x) return this;
            if (!bXl3x) h0x.hw4A(F1x);
            delete boA3x[F1x.id];
            var fe3x = F1x.tagName;
            if (fe3x == "IFRAME") {
                bzx6r(F1x)
            } else if (fe3x == "IMG") {
                bzf6Z(F1x)
            } else if (!!F1x.getElementsByTagName) {
                k0x.bb1x(F1x.getElementsByTagName("img"), bzf6Z);
                k0x.bb1x(F1x.getElementsByTagName("iframe"), bzx6r)
            }
            if (!!F1x.parentNode) {
                F1x.parentNode.removeChild(F1x)
            }
            return this
        }
    }();
    a9j.mJ5O = cT2x.mJ5O = function (F1x) {
        F1x = a9j.z1x(F1x);
        if (!!F1x) Q1x.appendChild(F1x);
        return this
    };
    a9j.bAB6v = cT2x.bAB6v = function (F1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return;
        k0x.mq5v(F1x.childNodes, function (f0x) {
            a9j.cC2x(f0x)
        })
    };
    a9j.GJ2x = cT2x.GJ2x = function () {
        var dL2x, gf3x = /\s+/;
        var bXD3x = function () {
            if (!!dL2x) return;
            dL2x = a9j.so7h(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a9j.bAZ6T()
        };
        return function (F1x, e0x) {
            F1x = a9j.z1x(F1x);
            if (!F1x) return;
            bXD3x();
            e0x = e0x || Y1x;
            var bE1x = F1x.parentNode;
            if (!a9j.bz1x(bE1x, dL2x)) {
                bE1x = a9j.cX2x("span", dL2x);
                F1x.insertAdjacentElement("beforeBegin", bE1x);
                bE1x.appendChild(F1x)
            }
            var bCE7x = e0x.nid || "", f0x = a9j.I1x(bE1x, bCE7x || dL2x + "-show")[0];
            if (!f0x) {
                var dK2x = ((e0x.clazz || "") + " " + bCE7x).trim();
                dK2x = dL2x + "-show" + (!dK2x ? "" : " ") + dK2x;
                f0x = a9j.cX2x(e0x.tag || "span", dK2x);
                bE1x.appendChild(f0x)
            }
            var dK2x = e0x.clazz;
            if (!!dK2x) {
                dK2x = (dK2x || "").trim().split(gf3x)[0] + "-parent";
                a9j.x1x(bE1x, dK2x)
            }
            return f0x
        }
    }();
    a9j.u1x = cT2x.u1x = function () {
        var bmN3x = {}, fe3x = "data-", cS2x = /\-(.{1})/gi;
        var Dt1x = function (F1x) {
            var D1x = a9j.la5f(F1x);
            if (!!bmN3x[D1x]) return;
            var bu1x = {};
            k0x.bb1x(F1x.attributes, function (f0x) {
                var J1x = f0x.nodeName;
                if (J1x.indexOf(fe3x) != 0) return;
                J1x = J1x.replace(fe3x, "").replace(cS2x, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bu1x[J1x] = f0x.nodeValue || ""
            });
            bmN3x[D1x] = bu1x
        };
        return function (F1x, J1x, C1x) {
            F1x = a9j.z1x(F1x);
            if (!F1x) return null;
            var Zq8i = F1x.dataset;
            if (!Zq8i) {
                Dt1x(F1x);
                Zq8i = bmN3x[F1x.id]
            }
            if (C1x !== undefined) Zq8i[J1x] = C1x;
            return Zq8i[J1x]
        }
    }();
    a9j.fU3x = cT2x.fU3x = function (F1x, T1x, C1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return "";
        if (C1x !== undefined && !!F1x.setAttribute) F1x.setAttribute(T1x, C1x);
        return bc1x.bpF3x(F1x, T1x)
    };
    a9j.nl6f = function (dD2x) {
        var qK7D = document.createElement("div");
        qK7D.innerHTML = dD2x;
        var i0x = a9j.cU2x(qK7D);
        return i0x.length > 1 ? qK7D : i0x[0]
    };
    a9j.bXY3x = cT2x.bXY3x = function (F1x) {
        F1x = a9j.z1x(F1x);
        return !F1x ? "" : bc1x.bqv4z(F1x)
    };
    a9j.bFz7s = function (Ao0x) {
        Ao0x = (Ao0x || "").trim();
        return !Ao0x ? null : bc1x.bqr4v(Ao0x)
    };
    a9j.bYg3x = function (cJ2x, t1x) {
        cJ2x = cJ2x || "";
        switch (t1x) {
            case"xml":
                cJ2x = a9j.bFz7s(cJ2x);
                break;
            case"json":
                try {
                    cJ2x = JSON.parse(cJ2x)
                } catch (ex) {
                    cJ2x = null
                }
                break
        }
        return cJ2x
    };
    a9j.hM4Q = cT2x.hM4Q = function () {
        var bZr3x = function (F1x) {
            return F1x == document.body || F1x == document.documentElement
        };
        return function (dP2x, oe6Y) {
            dP2x = a9j.z1x(dP2x);
            if (!dP2x) return null;
            oe6Y = a9j.z1x(oe6Y) || null;
            var o0x = {x: 0, y: 0}, bmx3x, dm2x, Zn8f;
            while (!!dP2x && dP2x != oe6Y) {
                bmx3x = bZr3x(dP2x);
                dm2x = bmx3x ? 0 : dP2x.scrollLeft;
                Zn8f = parseInt(a9j.dc2x(dP2x, "borderLeftWidth")) || 0;
                o0x.x += dP2x.offsetLeft + Zn8f - dm2x;
                dm2x = bmx3x ? 0 : dP2x.scrollTop;
                Zn8f = parseInt(a9j.dc2x(dP2x, "borderTopWidth")) || 0;
                o0x.y += dP2x.offsetTop + Zn8f - dm2x;
                dP2x = dP2x.offsetParent
            }
            return o0x
        }
    }();
    a9j.mH5M = cT2x.mH5M = function (F1x) {
        var bf1x = a9j.hM4Q(F1x);
        window.scrollTo(bf1x.x, bf1x.y);
        return this
    };
    a9j.cAy0x = function (rW7P) {
        rW7P = (rW7P || "").trim();
        return bc1x.bzB6v(rW7P)
    };
    a9j.bZu3x = cT2x.bZu3x = function (F1x, T1x, bu1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return this;
        var C1x = bc1x.bIP8H(T1x, bu1x);
        if (!C1x) return this;
        a9j.Z1x(F1x, "transform", C1x);
        return this
    };
    a9j.ff3x = cT2x.ff3x = function (F1x, bu1x) {
        F1x = a9j.z1x(F1x);
        if (!!F1x) k0x.eq3x(bu1x, function (C1x, T1x) {
            a9j.Z1x(F1x, T1x, C1x)
        });
        return this
    };
    a9j.bZy3x = cT2x.bZy3x = function (fH3x, e0x) {
        fH3x = a9j.z1x(fH3x);
        if (!fH3x) return {start: 0, end: 0};
        if (k0x.vz8r(e0x)) e0x = {start: e0x, end: e0x};
        if (e0x != null) {
            if (e0x.end == null) e0x.end = e0x.start || 0;
            bc1x.bqS4W(fH3x, e0x)
        } else {
            e0x = bc1x.bqE4I(fH3x)
        }
        return e0x
    };
    a9j.Z1x = cT2x.Z1x = function (F1x, T1x, C1x) {
        F1x = a9j.z1x(F1x);
        if (!!F1x) bc1x.bpV4Z(F1x, T1x, C1x);
        return this
    };
    a9j.dc2x = cT2x.dc2x = function (F1x, T1x) {
        F1x = a9j.z1x(F1x);
        if (!F1x) return "";
        var gx4B = !window.getComputedStyle ? F1x.currentStyle || Y1x : window.getComputedStyle(F1x, null);
        return gx4B[bc1x.bMn9e(T1x)] || ""
    };
    a9j.bMw9n = function () {
        var cS2x = /[\s\r\n]+/gi;
        return function (ce1x) {
            ce1x = (ce1x || "").trim().replace(cS2x, " ");
            if (!ce1x) return;
            var f0x = a9j.cX2x("style");
            document.head.appendChild(f0x);
            bc1x.bpP3x(f0x, bc1x.bRB2x(ce1x));
            return f0x
        }
    }();
    a9j.bMx9o = function (xb9S) {
        try {
            xb9S = xb9S.trim();
            if (!!xb9S) return (new Function(xb9S))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a9j.so7h = function () {
        var cS2x = /#<.*?>/g, gi3x = +(new Date);
        return function (jw4A) {
            if (!Gs1x) Gs1x = [];
            var fn3x = "auto-" + gi3x++;
            Gs1x.push(jw4A.replace(cS2x, fn3x));
            return fn3x
        }
    }();
    a9j.bAZ6T = function () {
        if (!!Gs1x) {
            a9j.bMw9n(Gs1x.join(""));
            Gs1x = null
        }
        return this
    };
    a9j.cAv0x = function (ce1x, jw4A) {
        ce1x = a9j.z1x(ce1x);
        return !ce1x ? null : bc1x.bpO3x(ce1x, jw4A)
    };
    a9j.x1x = cT2x.x1x = function () {
        bc1x.brV4Z.apply(bc1x, arguments);
        return this
    };
    a9j.v1x = cT2x.v1x = function () {
        bc1x.brM4Q.apply(bc1x, arguments);
        return this
    };
    a9j.eT3x = cT2x.eT3x = function () {
        bc1x.On4r.apply(bc1x, arguments);
        return this
    };
    a9j.bz1x = cT2x.bz1x = function () {
        return bc1x.brv4z.apply(bc1x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cT2x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, fh3x = NEJ.R, bo1x = NEJ.F, a9j = c0x("nej.e"), bc1x = c0x("nej.h"),
        k0x = c0x("nej.u");
    var Cv0x = function (j0x, t1x) {
        try {
            t1x = t1x.toLowerCase();
            if (j0x === null) return t1x == "null";
            if (j0x === undefined) return t1x == "undefined";
            return Y1x.toString.call(j0x).toLowerCase() == "[object " + t1x + "]"
        } catch (e) {
            return !1
        }
    };
    k0x.gb3x = function (j0x) {
        return Cv0x(j0x, "function")
    };
    k0x.fx3x = function (j0x) {
        return Cv0x(j0x, "string")
    };
    k0x.vz8r = function (j0x) {
        return Cv0x(j0x, "number")
    };
    k0x.cAu0x = function (j0x) {
        return Cv0x(j0x, "boolean")
    };
    k0x.GO2x = function (j0x) {
        return Cv0x(j0x, "date")
    };
    k0x.eu3x = function (j0x) {
        return Cv0x(j0x, "array")
    };
    k0x.kW5b = function (j0x) {
        return Cv0x(j0x, "object")
    };
    k0x.fc3x = function () {
        var cS2x = /[^\x00-\xfff]/g;
        return function (bl1x) {
            return ("" + (bl1x || "")).replace(cS2x, "**").length
        }
    }();
    k0x.cV2x = function (i0x, q0x) {
        var dG2x = k0x.gb3x(q0x) ? q0x : function (C1x) {
            return C1x === q0x
        }, r0x = k0x.eq3x(i0x, dG2x);
        return r0x != null ? r0x : -1
    };
    k0x.cAq0x = function () {
        var bQb0x;
        var Pz4D = function (i0x, ob6V, oa6U) {
            if (ob6V > oa6U) return -1;
            var Di1x = Math.ceil((ob6V + oa6U) / 2), o0x = bQb0x(i0x[Di1x], Di1x, i0x);
            if (o0x == 0) return Di1x;
            if (o0x < 0) return Pz4D(i0x, ob6V, Di1x - 1);
            return Pz4D(i0x, Di1x + 1, oa6U)
        };
        return function (i0x, Gn1x) {
            bQb0x = Gn1x || bo1x;
            return Pz4D(i0x, 0, i0x.length - 1)
        }
    }();
    k0x.mq5v = function (i0x, dw2x, iw4A) {
        if (!i0x || !i0x.length || !k0x.gb3x(dw2x)) return null;
        for (var i = i0x.length - 1; i >= 0; i--) if (!!dw2x.call(iw4A, i0x[i], i, i0x)) return i;
        return null
    };
    k0x.bb1x = function (i0x, dw2x, iw4A) {
        if (!i0x || !i0x.length || !k0x.gb3x(dw2x)) return this;
        if (!!i0x.forEach) {
            i0x.forEach(dw2x, iw4A);
            return this
        }
        for (var i = 0, l = i0x.length; i < l; i++) dw2x.call(iw4A, i0x[i], i, i0x);
        return this
    };
    k0x.eq3x = function (i0x, dw2x, iw4A) {
        if (!i0x || !k0x.gb3x(dw2x)) return null;
        if (i0x.length != null) {
            if (i0x.length > 0) for (var i = 0, l = i0x.length; i < l; i++) if (!!dw2x.call(iw4A, i0x[i], i, i0x)) return i
        }
        if (k0x.kW5b(i0x)) {
            for (var x in i0x) if (i0x.hasOwnProperty(x) && !!dw2x.call(iw4A, i0x[x], x, i0x)) return x
        }
        return null
    };
    k0x.cal4p = function (ix4B, caA4E, e0x) {
        ix4B = ix4B || [];
        e0x = e0x || Y1x;
        var bwI5N = !!e0x.union, uN8F = !!e0x.begin, Zi8a = e0x.compare, caB4F = bwI5N && uN8F ? k0x.mq5v : k0x.bb1x;
        caB4F(caA4E, function (q0x) {
            if (!!Zi8a) Zi8a = Zi8a.eb2x(q0x);
            var r0x = k0x.cV2x(ix4B, Zi8a || q0x);
            if (r0x >= 0) ix4B.splice(r0x, 1);
            if (bwI5N) ix4B[uN8F ? "unshift" : "push"](q0x)
        });
        return ix4B
    };
    k0x.Em1x = function (bu1x, bl1x) {
        if (!bu1x || !bl1x || !bl1x.replace) return bl1x || "";
        return bl1x.replace(bu1x.r, function ($1) {
            var o0x = bu1x[!bu1x.i ? $1.toLowerCase() : $1];
            return o0x != null ? o0x : $1
        })
    };
    k0x.dI2x = function () {
        var bu1x = {
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
        return function (bl1x) {
            return k0x.Em1x(bu1x, bl1x)
        }
    }();
    k0x.GS2x = function () {
        var bu1x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bl1x) {
            return k0x.Em1x(bu1x, bl1x)
        }
    }();
    k0x.iV4Z = function () {
        var bu1x = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, caY4c = ["上午", "下午"],
            cbh4l = ["A.M.", "P.M."], blI2x = ["日", "一", "二", "三", "四", "五", "六"],
            cbk4o = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cbP4T = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Qo4s = function (gs3x) {
            gs3x = parseInt(gs3x) || 0;
            return (gs3x < 10 ? "0" : "") + gs3x
        };
        var cbZ4d = function (oL6F) {
            return oL6F < 12 ? 0 : 1
        };
        return function (by1x, GX2x, ccm4q) {
            if (!by1x || !GX2x) return "";
            by1x = k0x.YU8M(by1x);
            bu1x.yyyy = by1x.getFullYear();
            bu1x.yy = ("" + bu1x.yyyy).substr(2);
            bu1x.M = by1x.getMonth() + 1;
            bu1x.MM = Qo4s(bu1x.M);
            bu1x.eM = cbP4T[bu1x.M - 1];
            bu1x.cM = cbk4o[bu1x.M - 1];
            bu1x.d = by1x.getDate();
            bu1x.dd = Qo4s(bu1x.d);
            bu1x.H = by1x.getHours();
            bu1x.HH = Qo4s(bu1x.H);
            bu1x.m = by1x.getMinutes();
            bu1x.mm = Qo4s(bu1x.m);
            bu1x.s = by1x.getSeconds();
            bu1x.ss = Qo4s(bu1x.s);
            bu1x.ms = by1x.getMilliseconds();
            bu1x.w = blI2x[by1x.getDay()];
            var bAS6M = cbZ4d(bu1x.H);
            bu1x.ct = caY4c[bAS6M];
            bu1x.et = cbh4l[bAS6M];
            if (!!ccm4q) {
                bu1x.H = bu1x.H % 12
            }
            return k0x.Em1x(bu1x, GX2x)
        }
    }();
    k0x.YU8M = function (by1x) {
        var cL2x = by1x;
        if (k0x.fx3x(by1x)) cL2x = new Date(Date.parse(by1x));
        if (!k0x.GO2x(by1x)) cL2x = new Date(by1x);
        return cL2x
    };
    k0x.Gz2x = function (ccn4r, ccy4C) {
        return (new Number(ccn4r)).toFixed(ccy4C)
    };
    k0x.blt2x = function () {
        var gf3x = /([^\/:])\/.*$/, js4w = /\/[^\/]+$/, Cd0x = /[#\?]/, blr2x = location.href.split(/[?#]/)[0],
            rC7v = document.createElement("a");
        var blo2x = function (lF5K) {
            return (lF5K || "").indexOf("://") > 0
        };
        var bDe7X = function (lF5K) {
            return (lF5K || "").split(Cd0x)[0].replace(js4w, "/")
        };
        var ccQ4U = function (lF5K, fz3x) {
            if (lF5K.indexOf("/") == 0) return fz3x.replace(gf3x, "$1") + lF5K;
            return bDe7X(fz3x) + lF5K
        };
        blr2x = bDe7X(blr2x);
        return function (lF5K, fz3x) {
            lF5K = (lF5K || "").trim();
            if (!blo2x(fz3x)) fz3x = blr2x;
            if (!lF5K) return fz3x;
            if (blo2x(lF5K)) return lF5K;
            lF5K = ccQ4U(lF5K, fz3x);
            rC7v.href = lF5K;
            lF5K = rC7v.href;
            return blo2x(lF5K) ? lF5K : rC7v.getAttribute("href", 4)
        }
    }();
    k0x.ccV4Z = function () {
        var cS2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (W1x) {
            if (cS2x.test(W1x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k0x.bER7K = function (H1x, iB4F) {
        if (!H1x) return iB4F;
        var T1x = H1x.tagName.toLowerCase(), i0x = a9j.cU2x(H1x);
        if (!i0x || !i0x.length) {
            iB4F[T1x] = H1x.textContent || H1x.text || "";
            return iB4F
        }
        var dS2x = {};
        iB4F[T1x] = dS2x;
        k0x.bb1x(i0x, function (f0x) {
            k0x.bER7K(f0x, dS2x)
        });
        return iB4F
    };
    k0x.czT0x = function (Ao0x) {
        try {
            return k0x.bER7K(a9j.bFz7s(Ao0x), {})
        } catch (ex) {
            return null
        }
    };
    k0x.bFo7h = function (hW4a, QF5K) {
        var iB4F = {};
        k0x.bb1x((hW4a || "").split(QF5K), function (T1x) {
            var YP7I = T1x.split("=");
            if (!YP7I || !YP7I.length) return;
            var J1x = YP7I.shift();
            if (!J1x) return;
            iB4F[decodeURIComponent(J1x)] = decodeURIComponent(YP7I.join("="))
        });
        return iB4F
    };
    k0x.uZ8R = function (fM3x, QF5K, cep5u) {
        //liguoqinjim

        if (!fM3x) {
            var result2 = "";
            return result2;
        }
        var bs1x = [];
        for (var x in fM3x) {
            var a = x;
            var b = encodeURIComponent(x);
            var c = !!cep5u;
            var d = encodeURIComponent(fM3x[x]);
            var e = (!!cep5u ? encodeURIComponent(fM3x[x]) : fM3x[x])
            bs1x.push(encodeURIComponent(x) + "=" + (!!cep5u ? encodeURIComponent(fM3x[x]) : fM3x[x]))
        }

        var result = bs1x.join(QF5K || ",");
        return result;
    };
    k0x.hx4B = function (bw1x) {
        return k0x.bFo7h(bw1x, "&")
    };
    k0x.db2x = function (fM3x) {
        return k0x.uZ8R(fM3x, "&", !0)
    };
    k0x.czR0x = function (fM3x) {
        return bc1x.FP1x(fM3x)
    };
    k0x.czQ0x = function (i0x, dG2x) {
        var o0x = {};
        k0x.bb1x(i0x, function (q0x) {
            var J1x = q0x;
            if (!!dG2x) {
                J1x = dG2x(q0x)
            }
            o0x[J1x] = q0x
        });
        return o0x
    };
    k0x.czP0x = function (gs3x, gc3x) {
        var cer5w = ("" + gs3x).length, cev5A = Math.max(1, parseInt(gc3x) || 0), dm2x = cev5A - cer5w;
        if (dm2x > 0) {
            gs3x = (new Array(dm2x + 1)).join("0") + gs3x
        }
        return "" + gs3x
    };
    k0x.YG7z = function (fM3x, T1x) {
        if (!k0x.eu3x(T1x)) {
            try {
                delete fM3x[T1x]
            } catch (e) {
                fM3x[T1x] = undefined
            }
            return this
        }
        k0x.bb1x(T1x, k0x.YG7z.g0x(k0x, fM3x));
        return this
    };
    k0x.MK3x = function () {
        var bKP9G = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bm1x) {
            bm1x = bm1x || 10;
            var o0x = [];
            for (var i = 0, bLb9S; i < bm1x; ++i) {
                bLb9S = Math.floor(Math.random() * bKP9G.length);
                o0x.push(bKP9G.charAt(bLb9S))
            }
            return o0x.join("")
        }
    }();
    k0x.zK0x = function (fQ3x, fl3x) {
        return Math.floor(Math.random() * (fl3x - fQ3x) + fQ3x)
    };
    k0x.nh6b = function (bm1x) {
        bm1x = Math.max(0, Math.min(bm1x || 8, 30));
        var fQ3x = Math.pow(10, bm1x - 1), fl3x = fQ3x * 10;
        return k0x.zK0x(fQ3x, fl3x).toString()
    };
    k0x.YF7y = function () {
        var gi3x = +(new Date);
        return function () {
            return "" + gi3x++
        }
    }()
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, fh3x = NEJ.R, bo1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        N1x = c0x("nej.ut"), nX6R;
    if (!!N1x.cy1x) return;
    N1x.cy1x = NEJ.C();
    nX6R = N1x.cy1x.prototype;
    N1x.cy1x.A1x = function (e0x) {
        e0x = e0x || {};
        var cs1x = !!this.zJ0x && this.zJ0x.shift();
        if (!cs1x) {
            cs1x = new this(e0x);
            this.ceB5G = (this.ceB5G || 0) + 1
        }
        cs1x.bj1x(e0x);
        return cs1x
    };
    N1x.cy1x.S1x = function () {
        var Rr5w = function (q0x, r0x, i0x) {
            q0x.S1x();
            i0x.splice(r0x, 1)
        };
        return function (cs1x) {
            if (!cs1x) return null;
            if (!k0x.eu3x(cs1x)) {
                if (!(cs1x instanceof this)) {
                    var fn3x = cs1x.constructor;
                    if (!!fn3x.S1x) fn3x.S1x(cs1x);
                    return null
                }
                if (cs1x == this.eR3x) delete this.eR3x;
                if (cs1x == this.zD0x) delete this.zD0x;
                cs1x.bA1x();
                if (!this.zJ0x) this.zJ0x = [];
                if (k0x.cV2x(this.zJ0x, cs1x) < 0) {
                    this.zJ0x.push(cs1x)
                }
                return null
            }
            k0x.mq5v(cs1x, Rr5w, this)
        }
    }();
    N1x.cy1x.fX3x = function (e0x) {
        e0x = e0x || {};
        if (!this.eR3x) this.eR3x = this.A1x(e0x);
        return this.eR3x
    };
    N1x.cy1x.ceN5S = function (e0x, qX7Q) {
        e0x = e0x || {};
        if (!!qX7Q && !!this.zD0x) {
            this.zD0x.S1x();
            delete this.zD0x
        }
        if (!this.zD0x) {
            this.zD0x = this.A1x(e0x)
        } else {
            this.zD0x.bj1x(e0x)
        }
        return this.zD0x
    };
    nX6R.cq1x = function () {
        var gi3x = +(new Date);
        return function () {
            this.id = gi3x++;
            this.lk5p = {};
            this.bQs0x = {}
        }
    }();
    nX6R.bj1x = function (e0x) {
        this.bkF2x(e0x)
    };
    nX6R.bA1x = function () {
        this.hw4A();
        this.He2x()
    };
    nX6R.bS1x = function () {
        var gi3x = +(new Date);
        var cff5k = function (bg1x) {
            if (!bg1x || bg1x.length < 3) return;
            this.bQs0x["de-" + gi3x++] = bg1x;
            h0x.s0x.apply(h0x, bg1x)
        };
        return function (i0x) {
            k0x.bb1x(i0x, cff5k, this)
        }
    }();
    nX6R.He2x = function () {
        var cfh5m = function (bg1x, J1x, bu1x) {
            delete bu1x[J1x];
            h0x.mt5y.apply(h0x, bg1x)
        };
        return function () {
            k0x.eq3x(this.bQs0x, cfh5m)
        }
    }();
    nX6R.czD0x = function (dG2x) {
        dG2x = dG2x || bo1x;
        k0x.eq3x(this, function (Cq0x, J1x, bu1x) {
            if (!!Cq0x && !!Cq0x.S1x && !dG2x(Cq0x)) {
                delete bu1x[J1x];
                Cq0x.S1x()
            }
        })
    };
    nX6R.S1x = function () {
        this.constructor.S1x(this)
    };
    nX6R.bvW5b = function (t1x) {
        var d0x = this.lk5p[t1x.toLowerCase()];
        return !!d0x && d0x !== bo1x
    };
    nX6R.s0x = function (t1x, d0x) {
        this.vk8c.apply(this, arguments);
        return this
    };
    nX6R.mt5y = function (t1x, d0x) {
        var t1x = (t1x || "").toLowerCase(), dO2x = this.lk5p[t1x];
        if (!k0x.eu3x(dO2x)) {
            if (dO2x == d0x) delete this.lk5p[t1x];
            return
        }
        k0x.mq5v(dO2x, function (eB3x, r0x, i0x) {
            if (eB3x == d0x) i0x.splice(r0x, 1)
        })
    };
    nX6R.vk8c = function (t1x, d0x) {
        if (!!t1x && k0x.gb3x(d0x)) this.lk5p[t1x.toLowerCase()] = d0x;
        return this
    };
    nX6R.bkF2x = function () {
        var cgW5b = function (d0x, t1x) {
            this.vk8c(t1x, d0x)
        };
        return function (dO2x) {
            k0x.eq3x(dO2x, cgW5b, this);
            return this
        }
    }();
    nX6R.hw4A = function () {
        var bkt2x = function (d0x, t1x) {
            this.hw4A(t1x)
        };
        return function (t1x) {
            var t1x = (t1x || "").toLowerCase();
            if (!!t1x) {
                delete this.lk5p[t1x]
            } else {
                k0x.eq3x(this.lk5p, bkt2x, this)
            }
            return this
        }
    }();
    nX6R.bkp2x = function (t1x, d0x) {
        if (!t1x || !k0x.gb3x(d0x)) return this;
        t1x = t1x.toLowerCase();
        var dO2x = this.lk5p[t1x];
        if (!dO2x) {
            this.lk5p[t1x] = d0x;
            return this
        }
        if (!k0x.eu3x(dO2x)) {
            this.lk5p[t1x] = [dO2x]
        }
        this.lk5p[t1x].push(d0x);
        return this
    };
    nX6R.y1x = function (t1x) {
        var d0x = this.lk5p[(t1x || "").toLowerCase()];
        if (!d0x) return this;
        var bg1x = fh3x.slice.call(arguments, 1);
        if (!k0x.eu3x(d0x)) return d0x.apply(this, bg1x);
        k0x.bb1x(d0x, function (dg2x) {
            try {
                dg2x.apply(this, bg1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N1x.Yw7p = function () {
        var Q1x = {};
        return function (D1x, fn3x, e0x) {
            var eP3x = fn3x.che5j;
            if (!eP3x) {
                eP3x = k0x.MK3x(10);
                fn3x.che5j = eP3x
            }
            var J1x = D1x + "-" + eP3x, cs1x = Q1x[J1x];
            if (!!e0x && !cs1x) {
                cs1x = fn3x.A1x(e0x);
                cs1x.S1x = cs1x.S1x.ek3x(function (d0x) {
                    delete Q1x[J1x];
                    delete cs1x.S1x
                });
                Q1x[J1x] = cs1x
            }
            return cs1x
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gQ4U = function () {
        var cL2x = new Date, chf5k = +cL2x, bkf2x = 864e5;
        var chI6C = function (T1x) {
            var rj7c = document.cookie, rT7M = "\\b" + T1x + "=", Yv7o = rj7c.search(rT7M);
            if (Yv7o < 0) return "";
            Yv7o += rT7M.length - 2;
            var yO9F = rj7c.indexOf(";", Yv7o);
            if (yO9F < 0) yO9F = rj7c.length;
            return rj7c.substring(Yv7o, yO9F) || ""
        };
        return function (T1x, j0x) {
            if (j0x === undefined) return chI6C(T1x);
            if (u.fx3x(j0x)) {
                if (!!j0x) {
                    document.cookie = T1x + "=" + j0x + ";";
                    return j0x
                }
                j0x = {expires: -100}
            }
            j0x = j0x || o;
            var rj7c = T1x + "=" + (j0x.value || "") + ";";
            delete j0x.value;
            if (j0x.expires !== undefined) {
                cL2x.setTime(chf5k + j0x.expires * bkf2x);
                j0x.expires = cL2x.toGMTString()
            }
            rj7c += u.uZ8R(j0x, ";");
            document.cookie = rj7c
        }
    }()
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, hT4X = c0x("nej.c"), dU2x = c0x("nej.g"), a9j = c0x("nej.e"), w1x = c0x("nej.j"),
        G1x = c0x("nej.ut"), N1x = c0x("nej.ut.j"), k0x = c0x("nej.u"), b0x;
    if (!!N1x.Hl2x) return;
    N1x.Hl2x = NEJ.C();
    b0x = N1x.Hl2x.O1x(G1x.cy1x);
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.pa6U = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.pa6U, e0x);
        var Bc0x = hT4X.z1x("csrf");
        if ((/^\/[^\/]/.test(this.pa6U.url) || this.pa6U.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Bc0x.cookie && !!Bc0x.param) {
            var bw1x = encodeURIComponent(Bc0x.param) + "=" + encodeURIComponent(w1x.gQ4U(Bc0x.cookie) || ""),
                QF5K = this.pa6U.url.indexOf("?") < 0 ? "?" : "&";
            this.pa6U.url += QF5K + bw1x
        }
        this.Yt7m = e0x.headers || {};
        var bl1x = this.Yt7m[dU2x.yj9a];
        if (bl1x == null) this.Yt7m[dU2x.yj9a] = dU2x.bRl1x
    };
    b0x.bA1x = function () {
        this.bF1x();
        delete this.yz9q;
        delete this.pa6U;
        delete this.Yt7m
    };
    b0x.ciT6N = function (bl1x) {
        var bu1x = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.pa6U.noescape) {
            return k0x.Em1x(bu1x, bl1x)
        } else {
            return bl1x
        }
    };
    b0x.ue8W = function (d0x) {
        var eg2x = d0x.status;
        if (eg2x == -1) {
            this.y1x("onerror", {code: dU2x.bxF5K, message: "请求[" + this.pa6U.url + "]超时！"});
            return
        }
        if (("" + eg2x).indexOf("2") != 0) {
            this.y1x("onerror", {
                data: eg2x,
                code: dU2x.bsB4F,
                message: "服务器返回异常状态[" + eg2x + "]!",
                extData: d0x.result
            });
            return
        }
        this.y1x("onload", a9j.bYg3x(this.ciT6N(d0x.result), this.pa6U.type))
    };
    b0x.ch1x = bo1x;
    b0x.bjX2x = function (j0x) {
        var W1x = this.pa6U.url;
        if (!W1x) {
            this.y1x("onerror", {code: dU2x.bsJ4N, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.pa6U.data = j0x == null ? null : j0x;
            var d0x = {request: this.pa6U, headers: this.Yt7m};
            try {
                this.y1x("onbeforerequest", d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ch1x(d0x)
        } catch (e) {
            this.y1x("onerror", {code: dU2x.bsB4F, message: "请求[" + W1x + "]失败:" + e.message + "！"})
        }
        return this
    };
    b0x.jy4C = bo1x
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, bc1x = c0x("nej.h"), dU2x = c0x("nej.g"), k0x = c0x("nej.u"), N1x = c0x("nej.ut.j"),
        Q1x = {}, Sf5k;
    if (!!N1x.Yr7k) return;
    N1x.Yr7k = NEJ.C();
    Sf5k = N1x.Yr7k.O1x(N1x.Hl2x);
    Sf5k.bA1x = function () {
        this.bF1x();
        window.clearTimeout(this.dQ2x);
        delete this.dQ2x;
        try {
            this.qr7k.onreadystatechange = bo1x;
            this.qr7k.abort()
        } catch (e) {
        }
        delete this.qr7k
    };
    Sf5k.ch1x = function () {
        var cjf6Z = function (C1x, J1x) {
            this.qr7k.setRequestHeader(J1x, C1x)
        };
        return function (e0x) {
            var fJ3x = e0x.request, nQ6K = e0x.headers;
            this.qr7k = bc1x.bjO2x();
            if (nQ6K[dU2x.yj9a] === dU2x.Co0x) {
                delete nQ6K[dU2x.yj9a];
                this.qr7k.upload.onprogress = this.hy4C.g0x(this, 1);
                if (fJ3x.data.tagName === "FORM") fJ3x.data = new FormData(fJ3x.data)
            }
            this.qr7k.onreadystatechange = this.hy4C.g0x(this, 2);
            if (fJ3x.timeout != 0) {
                this.dQ2x = window.setTimeout(this.hy4C.g0x(this, 3), fJ3x.timeout)
            }
            this.qr7k.open(fJ3x.method, fJ3x.url, !fJ3x.sync);
            k0x.eq3x(nQ6K, cjf6Z, this);
            if (!!this.pa6U.cookie && "withCredentials" in this.qr7k) this.qr7k.withCredentials = !0;
            this.qr7k.send(fJ3x.data)
        }
    }();
    Sf5k.hy4C = function (t1x) {
        switch (t1x) {
            case 1:
                this.y1x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qr7k.readyState == 4) this.ue8W({
                    status: this.qr7k.status,
                    result: this.qr7k.responseText || ""
                });
                break;
            case 3:
                this.ue8W({status: -1});
                break
        }
    };
    Sf5k.jy4C = function () {
        this.ue8W({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Sw5B = {}, Yn7g = [], bFx7q = /\s+/g, gi3x = +(new Date), Ho2x, bP1x, ma5f;
    var Ch0x = function () {
        var gf3x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, js4w = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Cd0x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bjo1x = /^new\s+/,
            cji6c = /['"]/;
        var cjs6m = function (C1x) {
            if (gf3x.test(C1x)) return;
            C1x = C1x.split(".")[0].trim();
            if (!C1x || cji6c.test(C1x)) return;
            C1x = C1x.replace(bjo1x, "");
            try {
                if (Cd0x.test(C1x)) return;
                ma5f[C1x] = 1
            } catch (e) {
            }
        };
        return function (bl1x) {
            bl1x = bl1x || "";
            if (!bl1x || gf3x.test(bl1x)) return;
            var bs1x = bl1x.split(js4w);
            for (var i = 0, l = bs1x.length; i < l; i++) cjs6m(bs1x[i])
        }
    }();
    var cjt6n = function (dv2x) {
        if (dv2x[2] != "in") throw"bad for loop statement: " + dv2x.join(" ");
        Yn7g.push(dv2x[1]);
        Ch0x(dv2x[3]);
        return "var __HASH__" + dv2x[1] + " = " + dv2x[3] + "," + dv2x[1] + "," + dv2x[1] + "_count=0;" + "if (!!__HASH__" + dv2x[1] + ")" + "for(var " + dv2x[1] + "_key in __HASH__" + dv2x[1] + "){" + dv2x[1] + " = __HASH__" + dv2x[1] + "[" + dv2x[1] + "_key];" + "if (typeof(" + dv2x[1] + ')=="function") continue;' + dv2x[1] + "_count++;"
    };
    var cju6o = function () {
        var dv2x = Yn7g[Yn7g.length - 1];
        return "}; if(!__HASH__" + dv2x + "||!" + dv2x + "_count){"
    };
    var cjv6p = function () {
        Yn7g.pop();
        return "};"
    };
    var cjw6q = function (dv2x) {
        if (dv2x[2] != "as") throw"bad for list loop statement: " + dv2x.join(" ");
        var KD3x = dv2x[1].split("..");
        if (KD3x.length > 1) {
            Ch0x(KD3x[0]);
            Ch0x(KD3x[1]);
            return "for(var " + dv2x[3] + "," + dv2x[3] + "_index=0," + dv2x[3] + "_beg=" + KD3x[0] + "," + dv2x[3] + "_end=" + KD3x[1] + "," + dv2x[3] + "_length=parseInt(" + dv2x[3] + "_end-" + dv2x[3] + "_beg+1);" + dv2x[3] + "_index<" + dv2x[3] + "_length;" + dv2x[3] + "_index++){" + dv2x[3] + " = " + dv2x[3] + "_beg+" + dv2x[3] + "_index;"
        } else {
            Ch0x(dv2x[1]);
            return "for(var __LIST__" + dv2x[3] + " = " + dv2x[1] + "," + dv2x[3] + "," + dv2x[3] + "_index=0," + dv2x[3] + "_length=__LIST__" + dv2x[3] + ".length;" + dv2x[3] + "_index<" + dv2x[3] + "_length;" + dv2x[3] + "_index++){" + dv2x[3] + " = __LIST__" + dv2x[3] + "[" + dv2x[3] + "_index];"
        }
    };
    var cjx6r = function (dv2x) {
        if (!dv2x || !dv2x.length) return;
        dv2x.shift();
        var T1x = dv2x[0].split("(")[0];
        return "var " + T1x + " = function" + dv2x.join("").replace(T1x, "") + "{var __OUT=[];"
    };
    var cjB6v = function (dv2x) {
        if (!dv2x[1]) throw"bad include statement: " + dv2x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bja1x = function (lu5z, dv2x) {
        Ch0x(dv2x.slice(1).join(" "));
        return lu5z
    };
    var cjC6w = function (dv2x) {
        return bja1x("if(", dv2x)
    };
    var cjD6x = function (dv2x) {
        return bja1x("}else if(", dv2x)
    };
    var cjE6y = function (dv2x) {
        return bja1x("var ", dv2x)
    };
    bP1x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cjC6w, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cjD6x, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cjt6n, pmin: 3},
            forelse: {pfix: cju6o},
            "/for": {pfix: cjv6p},
            list: {pfix: cjw6q, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cjE6y, sfix: ";"},
            macro: {pfix: cjx6r},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    Ho2x = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Ho2x = null
                }
            },
            inline: {pfix: cjB6v, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (lu5z) {
                return (lu5z || "") + "" + gi3x
            }, "default": function (C1x, kY5d) {
                return C1x || kY5d
            }
        }
    };
    var cjF6z = function () {
        var cjU6O = /\\([\{\}])/g;
        return function (bl1x, iQ4U) {
            bl1x = bl1x.replace(cjU6O, "$1");
            var dv2x = bl1x.slice(1, -1).split(bFx7q), bd1x = bP1x.def[dv2x[0]];
            if (!bd1x) {
                Yb7U(bl1x, iQ4U);
                return
            }
            if (!!bd1x.pmin && bd1x.pmin >= dv2x.length) throw"Statement needs more parameters:" + bl1x;
            iQ4U.push(!!bd1x.pfix && typeof bd1x.pfix != "string" ? bd1x.pfix(dv2x) : bd1x.pfix || "");
            if (!!bd1x.sfix) {
                if (dv2x.length <= 1) {
                    if (!!bd1x.pdft) iQ4U.push(bd1x.pdft)
                } else {
                    for (var i = 1, l = dv2x.length; i < l; i++) {
                        if (i > 1) iQ4U.push(" ");
                        iQ4U.push(dv2x[i])
                    }
                }
                iQ4U.push(bd1x.sfix)
            }
        }
    }();
    var bMI9z = function (Hy2x, iQ4U) {
        if (!Hy2x || !Hy2x.length) return;
        if (Hy2x.length == 1) {
            var biG1x = Hy2x.pop();
            Ch0x(biG1x);
            iQ4U.push(biG1x == "" ? '""' : biG1x);
            return
        }
        var biv1x = Hy2x.pop().split(":");
        iQ4U.push("__MDF['" + biv1x.shift() + "'](");
        bMI9z(Hy2x, iQ4U);
        if (biv1x.length > 0) {
            var bg1x = biv1x.join(":");
            Ch0x(bg1x);
            iQ4U.push("," + bg1x)
        }
        iQ4U.push(")")
    };
    var Yb7U = function (bl1x, iQ4U) {
        if (!bl1x) return;
        var vV8N = bl1x.split("\n");
        if (!vV8N || !vV8N.length) return;
        for (var i = 0, l = vV8N.length, hd4h; i < l; i++) {
            hd4h = vV8N[i];
            if (!!Ho2x) {
                hd4h = hd4h.trim();
                if (!hd4h) continue
            }
            cjV6P(hd4h, iQ4U);
            if (!!Ho2x && i < l - 1) iQ4U.push("__OUT.push('\\n');")
        }
    };
    var cjV6P = function () {
        var ckd6X = /\|\|/g, ckg6a = /#@@#/g;
        return function (bl1x, iQ4U) {
            var Lg3x = "}", Lh3x = -1, bm1x = bl1x.length, uN8F, gG4K, HC2x, XO7H, Lj3x;
            while (Lh3x + Lg3x.length < bm1x) {
                uN8F = "${";
                gG4K = "}";
                HC2x = bl1x.indexOf(uN8F, Lh3x + Lg3x.length);
                if (HC2x < 0) break;
                if (bl1x.charAt(HC2x + 2) == "%") {
                    uN8F = "${%";
                    gG4K = "%}"
                }
                XO7H = bl1x.indexOf(gG4K, HC2x + uN8F.length);
                if (XO7H < 0) break;
                XK7D(bl1x.substring(Lh3x + Lg3x.length, HC2x), iQ4U);
                Lj3x = bl1x.substring(HC2x + uN8F.length, XO7H).replace(ckd6X, "#@@#").split("|");
                for (var i = 0, l = Lj3x.length; i < l; Lj3x[i] = Lj3x[i].replace(ckg6a, "||"), i++) ;
                iQ4U.push("__OUT.push(");
                bMI9z(Lj3x, iQ4U);
                iQ4U.push(");");
                Lg3x = gG4K;
                Lh3x = XO7H
            }
            XK7D(bl1x.substring(Lh3x + Lg3x.length), iQ4U)
        }
    }();
    var XK7D = function () {
        var bu1x = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var ckh6b = function (bl1x) {
            return (bl1x || "").replace(bu1x.r, function ($1) {
                return bu1x[$1] || $1
            })
        };
        return function (bl1x, iQ4U) {
            if (!bl1x) return;
            iQ4U.push("__OUT.push('" + ckh6b(bl1x) + "');")
        }
    }();
    var ckk6e = function () {
        var ckr6l = /\t/g, ckx6r = /\n/g, ckS6M = /\r\n?/g;
        var bve5j = function (bl1x, uN8F) {
            var r0x = bl1x.indexOf("}", uN8F + 1);
            while (bl1x.charAt(r0x - 1) == "\\") {
                r0x = bl1x.indexOf("}", r0x + 1)
            }
            return r0x
        };
        var clX7Q = function () {
            var bs1x = [], Fq1x = arguments[0];
            for (var x in Fq1x) {
                x = (x || "").trim();
                if (!x) continue;
                bs1x.push(x + "=$v('" + x + "')")
            }
            return bs1x.length > 0 ? "var " + bs1x.join(",") + ";" : ""
        };
        return function (bl1x) {
            ma5f = {};
            bl1x = bl1x.replace(ckS6M, "\n").replace(ckr6l, "    ");
            var qC7v = ["if(!__CTX) return '';", ""];
            qC7v.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qC7v.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qC7v.push("__OUT=[];");
            var FC1x = -1, bm1x = bl1x.length;
            var mF5K, HF2x, Lu3x, Ly3x, zG0x, LA3x, bhI1x, LH3x;
            while (FC1x + 1 < bm1x) {
                mF5K = FC1x;
                mF5K = bl1x.indexOf("{", mF5K + 1);
                while (mF5K >= 0) {
                    HF2x = bve5j(bl1x, mF5K);
                    Lu3x = bl1x.substring(mF5K, HF2x);
                    Ly3x = Lu3x.match(bP1x.blk);
                    if (!!Ly3x) {
                        zG0x = Ly3x[1].length + 1;
                        LA3x = bl1x.indexOf("}", mF5K + zG0x);
                        if (LA3x >= 0) {
                            bhI1x = LA3x - mF5K - zG0x <= 0 ? "{/" + Ly3x[1] + "}" : Lu3x.substr(zG0x + 1);
                            zG0x = bl1x.indexOf(bhI1x, LA3x + 1);
                            if (zG0x >= 0) {
                                Yb7U(bl1x.substring(FC1x + 1, mF5K), qC7v);
                                LH3x = bl1x.substring(LA3x + 1, zG0x);
                                switch (Ly3x[1]) {
                                    case"cdata":
                                        XK7D(LH3x, qC7v);
                                        break;
                                    case"minify":
                                        XK7D(LH3x.replace(ckx6r, " ").replace(bFx7q, " "), qC7v);
                                        break;
                                    case"eval":
                                        if (!!LH3x) qC7v.push("__OUT.push((function(){" + LH3x + "})());");
                                        break
                                }
                                mF5K = FC1x = zG0x + bhI1x.length - 1
                            }
                        }
                    } else if (bl1x.charAt(mF5K - 1) != "$" && bl1x.charAt(mF5K - 1) != "\\" && Lu3x.substr(Lu3x.charAt(1) == "/" ? 2 : 1).search(bP1x.tag) == 0) {
                        break
                    }
                    mF5K = bl1x.indexOf("{", mF5K + 1)
                }
                if (mF5K < 0) break;
                HF2x = bve5j(bl1x, mF5K);
                if (HF2x < 0) break;
                Yb7U(bl1x.substring(FC1x + 1, mF5K), qC7v);
                cjF6z(bl1x.substring(mF5K, HF2x + 1), qC7v);
                FC1x = HF2x
            }
            Yb7U(bl1x.substring(FC1x + 1), qC7v);
            qC7v.push(';return __OUT.join("");');
            qC7v[1] = clX7Q(ma5f);
            ma5f = null;
            return new Function("__CTX", "__MDF", qC7v.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gi3x
    };
    TrimPath.merge = function () {
        var LL3x = {};
        TrimPath.dump = function () {
            return {func: LL3x, text: Sw5B}
        };
        return function (eP3x, j0x, jh4l) {
            try {
                j0x = j0x || {};
                if (!LL3x[eP3x] && !Sw5B[eP3x]) return "";
                if (!LL3x[eP3x]) {
                    LL3x[eP3x] = ckk6e(Sw5B[eP3x]);
                    delete Sw5B[eP3x]
                }
                if (!!jh4l) {
                    for (var x in bP1x.ext) if (!jh4l[x]) jh4l[x] = bP1x.ext[x]
                }
                return LL3x[eP3x](j0x, jh4l || bP1x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var clY7R = +(new Date);
        return function (bl1x, eP3x) {
            if (!bl1x) return "";
            eP3x = eP3x || "ck_" + clY7R++;
            Sw5B[eP3x] = bl1x;
            return eP3x
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), eG3x = {}, byX6R = {};
    a9j.HL2x = TrimPath.seed;
    a9j.bW1x = function () {
        var bzj6d = function (D1x) {
            return !a9j.hZ4d ? "" : a9j.hZ4d(D1x)
        };
        return function (eP3x, j0x, jh4l) {
            j0x = NEJ.X(NEJ.X({}, byX6R), j0x);
            j0x.inline = bzj6d;
            jh4l = NEJ.X(NEJ.X({}, eG3x), jh4l);
            jh4l.rand = k0x.nh6b;
            jh4l.format = k0x.iV4Z;
            jh4l.escape = k0x.dI2x;
            jh4l.inline = bzj6d;
            return TrimPath.merge(eP3x, j0x, jh4l)
        }
    }();
    a9j.ep3x = function (bl1x, cms7l) {
        if (!bl1x) return "";
        var eP3x, F1x = a9j.z1x(bl1x);
        if (!!F1x) {
            eP3x = F1x.id;
            bl1x = F1x.value || F1x.innerText;
            if (!cms7l) a9j.cC2x(F1x)
        }
        return TrimPath.parse(bl1x, eP3x)
    };
    a9j.dJ2x = function (bE1x, eP3x, j0x, jh4l) {
        bE1x = a9j.z1x(bE1x);
        if (!!bE1x) bE1x.innerHTML = a9j.bW1x(eP3x, j0x, jh4l);
        return this
    };
    a9j.cyU0x = function (bu1x) {
        NEJ.X(eG3x, bu1x)
    };
    a9j.cmT7M = function (bu1x) {
        NEJ.X(byX6R, bu1x)
    };
    c0x("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dh2x = NEJ.P("nej.p"), N1x = window, kj5o = dh2x.bbH9y, bAk6e = kj5o.ipad || kj5o.iphone;
    if (!bAk6e && !!N1x.requestAnimationFrame && !!N1x.cancelRequestAnimationFrame) return;
    var lu5z = dh2x.dk2x.prefix.pro;
    if (!bAk6e && !!N1x[lu5z + "RequestAnimationFrame"] && !!N1x[lu5z + "CancelRequestAnimationFrame"]) {
        N1x.requestAnimationFrame = N1x[lu5z + "RequestAnimationFrame"];
        N1x.cancelRequestAnimationFrame = N1x[lu5z + "CancelRequestAnimationFrame"];
        return
    }
    var Xw7p = kj5o.desktop ? 80 : kj5o.ios ? 50 : 30;
    N1x.requestAnimationFrame = function (dw2x) {
        return window.setTimeout(function () {
            try {
                dw2x(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / Xw7p)
    };
    N1x.cancelRequestAnimationFrame = function (D1x) {
        window.clearTimeout(D1x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, k0x = c0x("nej.u"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), bc1x = c0x("nej.h"),
        cT2x = c0x("nej.x"), Xv7o = c0x("nej.ut.j.cb"), gn3x;
    if (!!a9j.rx7q) return;
    a9j.rx7q = cT2x.rx7q = function () {
        var Q1x = {}, gf3x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d0x) {
            var D1x = decodeURIComponent(d0x.target), t1x = d0x.type.toLowerCase();
            var dg2x = Q1x[D1x + "-on" + t1x];
            if (!!dg2x) {
                try {
                    dg2x(d0x)
                } catch (e) {
                }
                return
            }
            var cH2x = Q1x[D1x + "-tgt"];
            if (!!cH2x && gf3x.test(t1x)) {
                bAV6P(cH2x, d0x)
            }
        };
        var bhm1x = function (e0x) {
            var bE1x = a9j.z1x(e0x.parent) || document.body, dD2x = a9j.bW1x(gn3x, e0x);
            bE1x.insertAdjacentHTML(!e0x.hidden ? "beforeEnd" : "afterBegin", dD2x)
        };
        var bAV6P = function (D1x, d0x) {
            var t1x = d0x.type.toLowerCase();
            requestAnimationFrame(function () {
                h0x.y1x(D1x, t1x)
            })
        };
        var cnC7v = function (hl4p) {
            return !!hl4p && !!hl4p.inited && !!hl4p.inited()
        };
        var Ma3x = function (D1x) {
            var bs1x = [document.embeds[D1x], a9j.z1x(D1x), document[D1x], window[D1x]], r0x = k0x.eq3x(bs1x, cnC7v),
                hl4p = bs1x[r0x], bhi1x = D1x + "-count";
            Q1x[bhi1x]++;
            if (!!hl4p || Q1x[bhi1x] > 100) {
                Q1x[D1x](hl4p);
                delete Q1x[D1x];
                delete Q1x[bhi1x];
                return
            }
            window.setTimeout(Ma3x.g0x(null, D1x), 300)
        };
        var cos7l = function (e0x) {
            var D1x = e0x.id, fY3x = e0x.params;
            if (!fY3x) {
                fY3x = {};
                e0x.params = fY3x
            }
            var ma5f = fY3x.flashvars || "";
            ma5f += (!ma5f ? "" : "&") + ("id=" + D1x);
            if (!e0x.hidden && (!!e0x.target || bc1x.baI8A(fY3x.wmode))) {
                var hg4k = a9j.la5f(e0x.target) || a9j.la5f(e0x.parent), Xr7k = k0x.YF7y();
                Xv7o["cb" + Xr7k] = bAV6P.g0x(null, hg4k);
                ma5f += "&onevent=nej.ut.j.cb.cb" + Xr7k;
                Q1x[D1x + "-tgt"] = hg4k
            }
            fY3x.flashvars = ma5f;
            k0x.eq3x(e0x, function (C1x, J1x) {
                if (k0x.gb3x(C1x) && J1x != "onready") {
                    Q1x[D1x + "-" + J1x] = C1x
                }
            })
        };
        return function (e0x) {
            e0x = NEJ.X({}, e0x);
            if (!e0x.src) return;
            var D1x = "flash_" + k0x.YF7y();
            e0x.id = D1x;
            cos7l(e0x);
            bhm1x(e0x);
            if (!e0x.onready) return;
            Q1x[D1x] = e0x.onready;
            Q1x[D1x + "-count"] = 0;
            Ma3x(D1x)
        }
    }();
    gn3x = a9j.ep3x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cT2x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, hT4X = c0x("nej.c"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), N1x = c0x("nej.ut.j"),
        Xv7o = c0x("nej.ut.j.cb"), Q1x = {}, gi3x = +(new Date), bhd0x;
    if (!!N1x.bgZ0x) return;
    Xv7o["ld" + gi3x] = function (J1x, cJ2x) {
        var jc4g = Q1x[J1x];
        if (!jc4g) return;
        delete Q1x[J1x];
        jc4g.ue8W({status: 200, result: cJ2x})
    };
    Xv7o["er" + gi3x] = function (J1x, eg2x) {
        var jc4g = Q1x[J1x];
        if (!jc4g) return;
        delete Q1x[J1x];
        jc4g.ue8W({status: eg2x || 0})
    };
    N1x.bgZ0x = NEJ.C();
    bhd0x = N1x.bgZ0x.O1x(N1x.Hl2x);
    bhd0x.ch1x = function (e0x) {
        var hl4p = Q1x.flash;
        if (k0x.eu3x(hl4p)) {
            hl4p.push(this.ch1x.g0x(this, e0x));
            return
        }
        if (!hl4p) {
            Q1x.flash = [this.ch1x.g0x(this, e0x)];
            a9j.rx7q({
                hidden: !0, src: hT4X.z1x("ajax.swf"), onready: function (hl4p) {
                    if (!hl4p) return;
                    var i0x = Q1x.flash;
                    Q1x.flash = hl4p;
                    k0x.mq5v(i0x, function (dg2x) {
                        try {
                            dg2x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.yz9q = "swf-" + k0x.nh6b();
        Q1x[this.yz9q] = this;
        var j0x = NEJ.EX({url: "", data: null, method: "GET"}, e0x.request);
        j0x.key = this.yz9q;
        j0x.headers = e0x.headers;
        j0x.onerror = "nej.ut.j.cb.er" + gi3x;
        j0x.onloaded = "nej.ut.j.cb.ld" + gi3x;
        var bDn7g = hT4X.bQX1x(j0x.url);
        if (!!bDn7g) j0x.policyURL = bDn7g;
        hl4p.request(j0x)
    };
    bhd0x.jy4C = function () {
        delete Q1x[this.yz9q];
        this.ue8W({status: 0});
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bc1x = c0x("nej.h");
    bc1x.bEa7T = function () {
        var cS2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (jL5Q) {
            jL5Q = jL5Q || "";
            if (cS2x.test(jL5Q)) return RegExp.$1;
            return "*"
        }
    }();
    bc1x.bgY0x = function (j0x) {
        return j0x
    };
    bc1x.bgP0x = function (bFm7f, e0x) {
        if (!bFm7f.postMessage) return;
        e0x = e0x || Y1x;
        bFm7f.postMessage(bc1x.bgY0x(e0x.data), bc1x.bEa7T(e0x.origin))
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), N1x = c0x("nej.ut"), b0x;
    if (!!N1x.fu3x) return;
    N1x.fu3x = NEJ.C();
    b0x = N1x.fu3x.O1x(N1x.cy1x);
    b0x.cq1x = function () {
        this.R1x = {};
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.Mr3x = a9j.z1x(e0x.element) || window;
        this.bFy7r(e0x.event);
        this.cox7q();
        this.y1x("oninit")
    };
    b0x.bA1x = function () {
        var Ep1x = function (C1x, J1x, bu1x) {
            if (!k0x.eu3x(C1x)) {
                k0x.YG7z(this.Mr3x, J1x)
            }
            delete bu1x[J1x]
        };
        return function () {
            this.bF1x();
            k0x.eq3x(this.R1x, Ep1x, this);
            delete this.Mr3x
        }
    }();
    b0x.Xj7c = function (F1x, t1x) {
        F1x = a9j.z1x(F1x);
        return F1x == this.Mr3x && (!t1x || !!this.R1x["on" + t1x])
    };
    b0x.bFy7r = function (d0x) {
        if (k0x.fx3x(d0x)) {
            var T1x = "on" + d0x;
            if (!this.R1x[T1x]) {
                this.R1x[T1x] = this.coy7r.g0x(this, d0x)
            }
            this.bGm8e(d0x);
            return
        }
        if (k0x.eu3x(d0x)) {
            k0x.bb1x(d0x, this.bFy7r, this)
        }
    };
    b0x.bGm8e = function (t1x) {
        var d0x = "on" + t1x, dg2x = this.Mr3x[d0x], bGo8g = this.R1x[d0x];
        if (dg2x != bGo8g) {
            this.Xh7a(t1x);
            if (!!dg2x && dg2x != bo1x) this.bIh8Z(t1x, dg2x);
            this.Mr3x[d0x] = bGo8g
        }
    };
    b0x.bIh8Z = function (t1x, dg2x, coz7s) {
        var i0x = this.R1x[t1x];
        if (!i0x) {
            i0x = [];
            this.R1x[t1x] = i0x
        }
        if (k0x.gb3x(dg2x)) {
            !coz7s ? i0x.push(dg2x) : i0x.unshift(dg2x)
        }
    };
    b0x.Xh7a = function (t1x, dg2x) {
        var i0x = this.R1x[t1x];
        if (!i0x || !i0x.length) return;
        if (!dg2x) {
            delete this.R1x[t1x];
            return
        }
        k0x.mq5v(i0x, function (C1x, r0x, HW2x) {
            if (dg2x === C1x) {
                HW2x.splice(r0x, 1);
                return !0
            }
        })
    };
    b0x.coy7r = function (t1x, d0x) {
        d0x = d0x || {noargs: !0};
        d0x.type = t1x;
        this.y1x("ondispatch", d0x);
        if (!!d0x.stopped) return;
        k0x.bb1x(this.R1x[t1x], function (dg2x) {
            try {
                dg2x(d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b0x.cox7q = function () {
        var bgu0x = function (d0x) {
            var bg1x = d0x.args, t1x = bg1x[1].toLowerCase();
            if (this.Xj7c(bg1x[0], t1x)) {
                d0x.stopped = !0;
                this.bGm8e(t1x);
                this.bIh8Z(t1x, bg1x[2], bg1x[3]);
                this.y1x("oneventadd", {type: t1x, listener: bg1x[2]})
            }
        };
        var coB7u = function (d0x) {
            var bg1x = d0x.args, t1x = bg1x[1].toLowerCase();
            if (this.Xj7c(bg1x[0], t1x)) {
                d0x.stopped = !0;
                this.Xh7a(t1x, bg1x[2])
            }
        };
        var bkt2x = function (d0x) {
            var bg1x = d0x.args, t1x = (bg1x[1] || "").toLowerCase();
            if (this.Xj7c(bg1x[0])) {
                if (!!t1x) {
                    this.Xh7a(t1x);
                    return
                }
                k0x.eq3x(this.R1x, function (C1x, J1x) {
                    if (k0x.eu3x(C1x)) {
                        this.Xh7a(J1x)
                    }
                }, this)
            }
        };
        var coX7Q = function (d0x) {
            var bg1x = d0x.args, t1x = bg1x[1].toLowerCase();
            if (this.Xj7c(bg1x[0], t1x)) {
                d0x.stopped = !0;
                bg1x[0]["on" + t1x].apply(bg1x[0], bg1x.slice(2))
            }
        };
        return function () {
            if (!!this.coY7R) return;
            this.coY7R = true;
            h0x.s0x = h0x.s0x.ek3x(bgu0x.g0x(this));
            h0x.mt5y = h0x.mt5y.ek3x(coB7u.g0x(this));
            h0x.hw4A = h0x.hw4A.ek3x(bkt2x.g0x(this));
            h0x.y1x = h0x.y1x.ek3x(coX7Q.g0x(this))
        }
    }()
})();
(function () {
    var c0x = NEJ.P, N1x = c0x("nej.p"), bc1x = c0x("nej.h"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        G1x = c0x("nej.ut");
    if (N1x.mp5u.trident) return;
    if (!!window.postMessage) {
        bc1x.bgY0x = bc1x.bgY0x.ek3x(function (d0x) {
            d0x.stopped = !0;
            d0x.value = JSON.stringify(d0x.args[0])
        });
        return
    }
    var J1x = "MSG|", jB4F = [];
    var cpx8p = function () {
        var T1x = unescape(window.name || "").trim();
        if (!T1x || T1x.indexOf(J1x) != 0) return;
        window.name = "";
        var o0x = k0x.bFo7h(T1x.replace(J1x, ""), "|"), jL5Q = (o0x.origin || "").toLowerCase();
        if (!!jL5Q && jL5Q != "*" && location.href.toLowerCase().indexOf(jL5Q) != 0) return;
        h0x.y1x(window, "message", {
            data: JSON.parse(o0x.data || "null"),
            source: window.frames[o0x.self] || o0x.self,
            origin: bc1x.bEa7T(o0x.ref || document.referrer)
        })
    };
    var cpI8A = function () {
        var WY7R;
        var cpK8C = function (bu1x, r0x, i0x) {
            if (k0x.cV2x(WY7R, bu1x.w) < 0) {
                WY7R.push(bu1x.w);
                i0x.splice(r0x, 1);
                bu1x.w.name = bu1x.d
            }
        };
        return function () {
            WY7R = [];
            k0x.mq5v(jB4F, cpK8C);
            WY7R = null
        }
    }();
    bc1x.bgP0x = function () {
        var cpO8G = function (j0x) {
            var o0x = {};
            j0x = j0x || Y1x;
            o0x.origin = j0x.origin || "";
            o0x.ref = location.href;
            o0x.self = j0x.source;
            o0x.data = JSON.stringify(j0x.data);
            return J1x + k0x.uZ8R(o0x, "|", !0)
        };
        return bc1x.bgP0x.ek3x(function (d0x) {
            d0x.stopped = !0;
            var bg1x = d0x.args;
            jB4F.unshift({w: bg1x[0], d: escape(cpO8G(bg1x[1]))})
        })
    }();
    G1x.fu3x.A1x({element: window, event: "message"});
    window.setInterval(cpI8A, 100);
    window.setInterval(cpx8p, 20)
})();
(function () {
    var c0x = NEJ.P, bc1x = c0x("nej.h"), a9j = c0x("nej.e"), w1x = c0x("nej.j");
    w1x.cpQ8I = function () {
        var iG4K = window.name || "_parent", cqd8V = {gq3x: window.top, iG4K: window, bE1x: window.parent};
        return function (cH2x, e0x) {
            if (typeof cH2x == "string") {
                cH2x = cqd8V[cH2x] || window.frames[cH2x];
                if (!cH2x) return this
            }
            var j0x = NEJ.X({origin: "*", source: iG4K}, e0x);
            bc1x.bgP0x(cH2x, j0x);
            return this
        }
    }()
})();
(function () {
    var c0x = NEJ.P, hT4X = c0x("nej.c"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        w1x = c0x("nej.j"), N1x = c0x("nej.ut.j"), Q1x = {}, WS6M;
    if (!!N1x.bfO0x) return;
    N1x.bfO0x = NEJ.C();
    WS6M = N1x.bfO0x.O1x(N1x.Hl2x);
    WS6M.cq1x = function () {
        var eK3x = "NEJ-AJAX-DATA:", Dt1x = !1;
        var bfM0x = function (d0x) {
            var j0x = d0x.data;
            if (j0x.indexOf(eK3x) != 0) return;
            j0x = JSON.parse(j0x.replace(eK3x, ""));
            var jc4g = Q1x[j0x.key];
            if (!jc4g) return;
            delete Q1x[j0x.key];
            j0x.result = decodeURIComponent(j0x.result || "");
            jc4g.ue8W(j0x)
        };
        var bfH0x = function () {
            if (!Dt1x) {
                Dt1x = !0;
                h0x.s0x(window, "message", bfM0x)
            }
        };
        return function () {
            this.cu1x();
            bfH0x()
        }
    }();
    WS6M.ch1x = function (e0x) {
        var fJ3x = e0x.request, jc4g = hT4X.bQQ1x(fJ3x.url), uC8u = Q1x[jc4g];
        if (k0x.eu3x(uC8u)) {
            uC8u.push(this.ch1x.g0x(this, e0x));
            return
        }
        if (!uC8u) {
            Q1x[jc4g] = [this.ch1x.g0x(this, e0x)];
            a9j.baA8s({
                src: jc4g, visible: !1, onload: function (d0x) {
                    var i0x = Q1x[jc4g];
                    Q1x[jc4g] = h0x.U1x(d0x).contentWindow;
                    k0x.mq5v(i0x, function (dg2x) {
                        try {
                            dg2x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.yz9q = "frm-" + k0x.nh6b();
        Q1x[this.yz9q] = this;
        var j0x = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, fJ3x);
        j0x.key = this.yz9q;
        j0x.headers = e0x.headers;
        w1x.cpQ8I(Q1x[jc4g], {data: j0x})
    };
    WS6M.jy4C = function () {
        delete Q1x[this.yz9q];
        this.ue8W({status: 0});
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, dU2x = c0x("nej.g"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        w1x = c0x("nej.j"), N1x = c0x("nej.ut.j"), Q1x = {}, Id2x;
    if (!!N1x.bfx0x) return;
    N1x.bfx0x = NEJ.C();
    Id2x = N1x.bfx0x.O1x(N1x.Hl2x);
    Id2x.cq1x = function () {
        var eK3x = "NEJ-UPLOAD-RESULT:", Dt1x = !1;
        var bfM0x = function (d0x) {
            var j0x = d0x.data;
            if (j0x.indexOf(eK3x) != 0) return;
            j0x = JSON.parse(j0x.replace(eK3x, ""));
            var jc4g = Q1x[j0x.key];
            if (!jc4g) return;
            delete Q1x[j0x.key];
            jc4g.ue8W(decodeURIComponent(j0x.result))
        };
        var bfH0x = function () {
            if (!Dt1x) {
                Dt1x = !0;
                h0x.s0x(window, "message", bfM0x)
            }
        };
        return function () {
            this.cu1x();
            bfH0x()
        }
    }();
    Id2x.bA1x = function () {
        this.bF1x();
        a9j.cC2x(this.bfw0x);
        delete this.bfw0x;
        window.clearTimeout(this.dQ2x);
        delete this.dQ2x
    };
    Id2x.ue8W = function (cJ2x) {
        var P1x;
        try {
            P1x = JSON.parse(cJ2x);
            this.y1x("onload", P1x)
        } catch (e) {
            this.y1x("onerror", {code: dU2x.bRc1x, message: cJ2x})
        }
    };
    Id2x.ch1x = function () {
        var cqe8W = function () {
            var lQ5V, cJ2x;
            try {
                var lQ5V = this.bfw0x.contentWindow.document.body, cJ2x = lQ5V.innerText || lQ5V.textContent
            } catch (e) {
                return
            }
            this.ue8W(cJ2x)
        };
        var bfp0x = function (W1x, eQ3x, rj7c) {
            w1x.bp1x(W1x, {
                type: "json",
                method: "POST",
                cookie: rj7c,
                mode: parseInt(eQ3x) || 0,
                onload: function (j0x) {
                    if (!this.dQ2x) return;
                    this.y1x("onuploading", j0x);
                    this.dQ2x = window.setTimeout(bfp0x.g0x(this, W1x, eQ3x, rj7c), 1e3)
                }.g0x(this),
                onerror: function (bU1x) {
                    if (!this.dQ2x) return;
                    this.dQ2x = window.setTimeout(bfp0x.g0x(this, W1x, eQ3x, rj7c), 1e3)
                }.g0x(this)
            })
        };
        return function (e0x) {
            var fJ3x = e0x.request, nQ6K = e0x.headers, eS3x = fJ3x.data, T1x = "fom-" + k0x.nh6b();
            Q1x[T1x] = this;
            eS3x.target = T1x;
            eS3x.method = "POST";
            eS3x.enctype = dU2x.Co0x;
            eS3x.encoding = dU2x.Co0x;
            var W1x = eS3x.action || "", lS5X = W1x.indexOf("?") <= 0 ? "?" : "&";
            eS3x.action = W1x + lS5X + "_proxy_=form";
            this.bfw0x = a9j.baA8s({
                name: T1x, onload: function (d0x) {
                    var uC8u = h0x.U1x(d0x);
                    h0x.s0x(uC8u, "load", cqe8W.g0x(this));
                    eS3x.submit();
                    var bPz0x = (eS3x.nej_query || Y1x).value;
                    if (!bPz0x) return;
                    var eQ3x = (eS3x.nej_mode || Y1x).value, rj7c = (eS3x.nej_cookie || Y1x).value == "true";
                    this.dQ2x = window.setTimeout(bfp0x.g0x(this, bPz0x, eQ3x, rj7c), 100)
                }.g0x(this)
            })
        }
    }();
    Id2x.jy4C = function () {
        this.y1x("onerror", {code: dU2x.bRh1x, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bc1x = c0x("nej.h"), N1x = c0x("nej.ut.j");
    bc1x.bjO2x = function () {
        return new XMLHttpRequest
    };
    bc1x.bfo0x = function (eQ3x, WI6C, e0x) {
        var bu1x = !!WI6C ? {2: N1x.bfx0x} : {2: N1x.bfO0x, 3: N1x.bgZ0x};
        return (bu1x[eQ3x] || N1x.Yr7k).A1x(e0x)
    }
})();
(function () {
    var c0x = NEJ.P, N1x = c0x("nej.p"), bc1x = c0x("nej.h");
    if (N1x.mp5u.trident) return;
    bc1x.bjO2x = function () {
        var Lz3x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cqn8f = function () {
            for (var i = 0, l = Lz3x.length; i < l; i++) {
                try {
                    return new ActiveXObject(Lz3x[i])
                } catch (e) {
                }
            }
            return null
        };
        return bc1x.bjO2x.ek3x(function (d0x) {
            if (!!window.XMLHttpRequest) return;
            d0x.stopped = !0;
            d0x.value = cqn8f()
        })
    }();
    bc1x.bfo0x = function () {
        var CN0x = {0: 2, 1: 3};
        return bc1x.bfo0x.ek3x(function (d0x) {
            var bg1x = d0x.args, eQ3x = bg1x[0] || 0;
            bg1x[0] = !!bg1x[1] ? 2 : CN0x[eQ3x] || eQ3x
        })
    }()
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, bc1x = c0x("nej.h"), dU2x = c0x("nej.g"), k0x = c0x("nej.u"),
        w1x = c0x("nej.j"), N1x = c0x("nej.ut.j"), ni6c = {}, Gm1x = bo1x;
    w1x.jy4C = function (eP3x) {
        var Q1x = ni6c[eP3x];
        if (!Q1x) return this;
        Q1x.req.jy4C();
        return this
    };
    w1x.WH6B = function (dG2x) {
        Gm1x = dG2x || bo1x;
        return this
    };
    w1x.bp1x = function () {
        var iZ4d = (location.protocol + "//" + location.host).toLowerCase();
        var cqo8g = function (W1x) {
            var jL5Q = k0x.ccV4Z(W1x);
            return !!jL5Q && jL5Q != iZ4d
        };
        var cqP8H = function (nQ6K) {
            return (nQ6K || Y1x)[dU2x.yj9a] == dU2x.Co0x
        };
        var crm8e = function (e0x) {
            var WI6C = cqP8H(e0x.headers);
            if (!cqo8g(e0x.url) && !WI6C) return N1x.Yr7k.A1x(e0x);
            return bc1x.bfo0x(e0x.mode, WI6C, e0x)
        };
        var Ep1x = function (eP3x) {
            var Q1x = ni6c[eP3x];
            if (!Q1x) return;
            if (!!Q1x.req) Q1x.req.S1x();
            delete ni6c[eP3x]
        };
        var buF5K = function (eP3x, t1x) {
            var Q1x = ni6c[eP3x];
            if (!Q1x) return;
            Ep1x(eP3x);
            try {
                var d0x = {type: t1x, result: arguments[2]};
                Gm1x(d0x);
                if (!d0x.stopped) (Q1x[t1x] || bo1x)(d0x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var wL9C = function (eP3x, j0x) {
            buF5K(eP3x, "onload", j0x)
        };
        var Ad0x = function (eP3x, bU1x) {
            buF5K(eP3x, "onerror", bU1x)
        };
        return function (W1x, e0x) {
            e0x = e0x || {};
            var eP3x = k0x.nh6b(), Q1x = {onload: e0x.onload || bo1x, onerror: e0x.onerror || bo1x};
            ni6c[eP3x] = Q1x;
            e0x.onload = wL9C.g0x(null, eP3x);
            e0x.onerror = Ad0x.g0x(null, eP3x);
            if (!!e0x.query) {
                var lS5X = W1x.indexOf("?") < 0 ? "?" : "&", bw1x = e0x.query;
                if (k0x.kW5b(bw1x)) bw1x = k0x.db2x(bw1x);
                if (!!bw1x) W1x += lS5X + bw1x
            }
            e0x.url = W1x;
            Q1x.req = crm8e(e0x);
            Q1x.req.bjX2x(e0x.data);
            return eP3x
        }
    }();
    w1x.gr3x = function (eS3x, e0x) {
        var gK4O = {
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
        NEJ.EX(gK4O, e0x);
        gK4O.data = eS3x;
        gK4O.method = "POST";
        gK4O.timeout = 0;
        gK4O.headers[dU2x.yj9a] = dU2x.Co0x;
        return w1x.bp1x(eS3x.action, gK4O)
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, dU2x = c0x("nej.g"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        N1x = c0x("nej.ut.j"), lZ5e, ju4y = 6e4;
    if (!!N1x.MX3x) return;
    N1x.MX3x = NEJ.C();
    lZ5e = N1x.MX3x.O1x(G1x.cy1x);
    lZ5e.cq1x = function () {
        this.cu1x();
        this.MY3x = {onerror: this.crQ8I.g0x(this), onloaded: this.crS8K.g0x(this)};
        if (!this.constructor.R1x) this.constructor.R1x = {loaded: {}}
    };
    lZ5e.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.Ij2x = e0x.version;
        this.beV0x = e0x.timeout;
        this.MY3x.version = this.Ij2x;
        this.MY3x.timeout = this.beV0x
    };
    lZ5e.bxC5H = function (J1x) {
        delete this.constructor.R1x[J1x]
    };
    lZ5e.AE0x = function (J1x) {
        return this.constructor.R1x[J1x]
    };
    lZ5e.bxW6Q = function (J1x, j0x) {
        this.constructor.R1x[J1x] = j0x
    };
    lZ5e.WC6w = bo1x;
    lZ5e.byj6d = function (fJ3x) {
        h0x.hw4A(fJ3x)
    };
    lZ5e.beM0x = function (fJ3x) {
        fJ3x.src = this.kH5M;
        document.head.appendChild(fJ3x)
    };
    lZ5e.AH0x = function () {
        var Q1x = this.AE0x(this.kH5M);
        if (!Q1x) return;
        window.clearTimeout(Q1x.timer);
        this.byj6d(Q1x.request);
        delete Q1x.bind;
        delete Q1x.timer;
        delete Q1x.request;
        this.bxC5H(this.kH5M);
        this.AE0x("loaded")[this.kH5M] = !0
    };
    lZ5e.WA6u = function (T1x) {
        var Q1x = this.AE0x(this.kH5M);
        if (!Q1x) return;
        var i0x = Q1x.bind;
        this.AH0x();
        if (!!i0x && i0x.length > 0) {
            var cs1x;
            while (i0x.length) {
                cs1x = i0x.shift();
                try {
                    cs1x.y1x(T1x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cs1x.S1x()
            }
        }
    };
    lZ5e.er3x = function (bU1x) {
        this.WA6u("onerror", bU1x)
    };
    lZ5e.byR6L = function () {
        this.WA6u("onloaded")
    };
    lZ5e.csh8Z = function (W1x) {
        this.constructor.A1x(this.MY3x).Ip2x(W1x)
    };
    lZ5e.bze6Y = function (bU1x) {
        var Q1x = this.AE0x(this.uM8E);
        if (!Q1x) return;
        if (!!bU1x) Q1x.error++;
        Q1x.loaded++;
        if (Q1x.loaded < Q1x.total) return;
        this.bxC5H(this.uM8E);
        this.y1x(Q1x.error > 0 ? "onerror" : "onloaded")
    };
    lZ5e.crQ8I = function (bU1x) {
        this.bze6Y(!0)
    };
    lZ5e.crS8K = function () {
        this.bze6Y()
    };
    lZ5e.Ip2x = function (W1x) {
        W1x = k0x.blt2x(W1x);
        if (!W1x) {
            this.y1x("onerror", {code: dU2x.bsJ4N, message: "请指定要载入的资源地址！"});
            return this
        }
        this.kH5M = W1x;
        if (!!this.Ij2x) this.kH5M += (this.kH5M.indexOf("?") < 0 ? "?" : "&") + this.Ij2x;
        if (this.AE0x("loaded")[this.kH5M]) {
            try {
                this.y1x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S1x();
            return this
        }
        var Q1x = this.AE0x(this.kH5M), fJ3x;
        if (!!Q1x) {
            Q1x.bind.unshift(this);
            Q1x.timer = window.clearTimeout(Q1x.timer)
        } else {
            fJ3x = this.WC6w();
            Q1x = {request: fJ3x, bind: [this]};
            this.bxW6Q(this.kH5M, Q1x);
            h0x.s0x(fJ3x, "load", this.byR6L.g0x(this));
            h0x.s0x(fJ3x, "error", this.er3x.g0x(this, {code: dU2x.bsB4F, message: "无法加载指定资源文件[" + this.kH5M + "]！"}))
        }
        if (this.beV0x != 0) Q1x.timer = window.setTimeout(this.er3x.g0x(this, {
            code: dU2x.bxF5K,
            message: "指定资源文件[" + this.kH5M + "]载入超时！"
        }), this.beV0x || ju4y);
        if (!!fJ3x) this.beM0x(fJ3x);
        this.y1x("onloading");
        return this
    };
    lZ5e.bzi6c = function (i0x) {
        if (!i0x || !i0x.length) {
            this.y1x("onerror", {code: dU2x.bsJ4N, message: "请指定要载入的资源队列！"});
            return this
        }
        this.uM8E = k0x.nh6b();
        var Q1x = {error: 0, loaded: 0, total: i0x.length};
        this.bxW6Q(this.uM8E, Q1x);
        for (var i = 0, l = i0x.length; i < l; i++) {
            if (!i0x[i]) {
                Q1x.total--;
                continue
            }
            this.csh8Z(i0x[i])
        }
        this.y1x("onloading");
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), bc1x = c0x("nej.h"), N1x = c0x("nej.ut.j"), Nl3x;
    if (!!N1x.beG9x) return;
    N1x.beG9x = NEJ.C();
    Nl3x = N1x.beG9x.O1x(N1x.MX3x);
    Nl3x.WC6w = function () {
        var fj3x = a9j.cX2x("iframe");
        fj3x.width = 0;
        fj3x.height = 0;
        fj3x.style.display = "none";
        return fj3x
    };
    Nl3x.beM0x = function (fJ3x) {
        fJ3x.src = this.kH5M;
        document.body.appendChild(fJ3x)
    };
    Nl3x.er3x = function (bU1x) {
        var fj3x = (this.AE0x(this.kH5M) || Y1x).request;
        this.WA6u("onerror", bU1x);
        bc1x.baD8v(fj3x)
    };
    Nl3x.byR6L = function () {
        var lQ5V = null, fj3x = (this.AE0x(this.kH5M) || Y1x).request;
        try {
            lQ5V = fj3x.contentWindow.document.body
        } catch (ex) {
        }
        this.WA6u("onloaded", lQ5V);
        bc1x.baD8v(fj3x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), N1x = c0x("nej.ut.j"), beB9s;
    if (!!N1x.Wu6o) return;
    N1x.Wu6o = NEJ.C();
    beB9s = N1x.Wu6o.O1x(N1x.MX3x);
    beB9s.WC6w = function () {
        return a9j.cX2x("link")
    };
    beB9s.beM0x = function (fJ3x) {
        fJ3x.href = this.kH5M;
        document.head.appendChild(fJ3x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), N1x = c0x("nej.ut.j"), Ws6m;
    if (!!N1x.Wr6l) return;
    N1x.Wr6l = NEJ.C();
    Ws6m = N1x.Wr6l.O1x(N1x.MX3x);
    Ws6m.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.bzC6w = e0x.async;
        this.bes9j = e0x.charset;
        this.MY3x.async = !1;
        this.MY3x.charset = this.bes9j
    };
    Ws6m.WC6w = function () {
        var fJ3x = a9j.cX2x("script");
        if (this.bzC6w != null) fJ3x.async = !!this.bzC6w;
        if (this.bes9j != null) fJ3x.charset = this.bes9j;
        return fJ3x
    };
    Ws6m.byj6d = function (fJ3x) {
        a9j.cC2x(fJ3x)
    }
})();
(function () {
    var c0x = NEJ.P, w1x = c0x("nej.j"), N1x = c0x("nej.ut.j");
    w1x.csy8q = function (W1x, e0x) {
        N1x.Wr6l.A1x(e0x).Ip2x(W1x);
        return this
    };
    w1x.csB8t = function (i0x, e0x) {
        N1x.Wr6l.A1x(e0x).bzi6c(i0x);
        return this
    };
    w1x.cxO0x = function (W1x, e0x) {
        N1x.Wu6o.A1x(e0x).Ip2x(W1x);
        return this
    };
    w1x.ctL9C = function (i0x, e0x) {
        N1x.Wu6o.A1x(e0x).bzi6c(i0x);
        return this
    };
    w1x.bAA6u = function (W1x, e0x) {
        N1x.beG9x.A1x(e0x).Ip2x(W1x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), w1x = c0x("nej.j"),
        G1x = c0x("nej.ut"), Q1x = {}, rR7K = +(new Date) + "-";
    a9j.cI2x = function () {
        var cB1x = 0;
        var Nt4x = function () {
            if (cB1x > 0) return;
            cB1x = 0;
            h0x.y1x(document, "templateready");
            h0x.hw4A(document, "templateready")
        };
        var Wp6j = function (fH3x, e0x) {
            var dz2x = a9j.u1x(fH3x, "src");
            if (!dz2x) return;
            e0x = e0x || Y1x;
            var fz3x = e0x.root;
            if (!fz3x) {
                fz3x = fH3x.ownerDocument.location.href
            } else {
                fz3x = k0x.blt2x(fz3x)
            }
            dz2x = dz2x.split(",");
            k0x.bb1x(dz2x, function (C1x, r0x, i0x) {
                i0x[r0x] = k0x.blt2x(C1x, fz3x)
            });
            return dz2x
        };
        var cub9S = function (fH3x, e0x) {
            if (!fH3x) return;
            var dz2x = Wp6j(fH3x, e0x);
            if (!!dz2x) w1x.ctL9C(dz2x, {version: a9j.u1x(fH3x, "version")});
            a9j.bMw9n(fH3x.value)
        };
        var cue9V = function (C1x) {
            cB1x--;
            a9j.bMx9o(C1x);
            Nt4x()
        };
        var cuj9a = function (fH3x, e0x) {
            if (!fH3x) return;
            var dz2x = Wp6j(fH3x, e0x), ez3x = fH3x.value;
            if (!!dz2x) {
                cB1x++;
                var e0x = {version: a9j.u1x(fH3x, "version"), onloaded: cue9V.g0x(null, ez3x)};
                window.setTimeout(w1x.csB8t.g0x(w1x, dz2x, e0x), 0);
                return
            }
            a9j.bMx9o(ez3x)
        };
        var cuk9b = function (lQ5V) {
            cB1x--;
            a9j.cI2x(lQ5V);
            Nt4x()
        };
        var cul9c = function (fH3x, e0x) {
            if (!fH3x) return;
            var dz2x = Wp6j(fH3x, e0x)[0];
            if (!!dz2x) {
                cB1x++;
                var e0x = {version: a9j.u1x(fH3x, "version"), onloaded: cuk9b};
                window.setTimeout(w1x.bAA6u.g0x(w1x, dz2x, e0x), 0)
            }
        };
        var cuo9f = function (D1x, cJ2x) {
            cB1x--;
            a9j.It2x(D1x, cJ2x || "");
            Nt4x()
        };
        var cuu9l = function (fH3x, e0x) {
            if (!fH3x || !fH3x.id) return;
            var D1x = fH3x.id, dz2x = Wp6j(fH3x, e0x)[0];
            if (!!dz2x) {
                cB1x++;
                var W1x = dz2x + (dz2x.indexOf("?") < 0 ? "?" : "&") + (a9j.u1x(fH3x, "version") || ""),
                    e0x = {type: "text", method: "GET", onload: cuo9f.g0x(null, D1x)};
                window.setTimeout(w1x.bp1x.g0x(w1x, W1x, e0x), 0)
            }
        };
        var cuY9P = function (f0x, e0x) {
            var t1x = f0x.name.toLowerCase();
            switch (t1x) {
                case"jst":
                    a9j.ep3x(f0x, !0);
                    return;
                case"txt":
                    a9j.It2x(f0x.id, f0x.value || "");
                    return;
                case"ntp":
                    a9j.il4p(f0x.value || "", f0x.id);
                    return;
                case"js":
                    cuj9a(f0x, e0x);
                    return;
                case"css":
                    cub9S(f0x, e0x);
                    return;
                case"html":
                    cul9c(f0x, e0x);
                    return;
                case"res":
                    cuu9l(f0x, e0x);
                    return
            }
        };
        G1x.fu3x.A1x({element: document, event: "templateready", oneventadd: Nt4x});
        return function (F1x, e0x) {
            F1x = a9j.z1x(F1x);
            if (!!F1x) {
                var i0x = F1x.tagName == "TEXTAREA" ? [F1x] : F1x.getElementsByTagName("textarea");
                k0x.bb1x(i0x, function (f0x) {
                    cuY9P(f0x, e0x)
                });
                a9j.cC2x(F1x, !0)
            }
            Nt4x();
            return this
        }
    }();
    a9j.It2x = function (J1x, C1x) {
        Q1x[J1x] = C1x || "";
        return this
    };
    a9j.hZ4d = function (J1x) {
        return Q1x[J1x] || ""
    };
    a9j.il4p = function (F1x, J1x) {
        J1x = J1x || k0x.nh6b();
        F1x = a9j.z1x(F1x) || F1x;
        a9j.It2x(rR7K + J1x, F1x);
        a9j.mJ5O(F1x);
        return J1x
    };
    a9j.dj2x = function (J1x) {
        if (!J1x) return null;
        J1x = rR7K + J1x;
        var C1x = a9j.hZ4d(J1x);
        if (!C1x) return null;
        if (k0x.fx3x(C1x)) {
            C1x = a9j.nl6f(C1x);
            a9j.It2x(J1x, C1x)
        }
        return C1x.cloneNode(!0)
    };
    a9j.yI9z = function () {
        var Gm1x = function (C1x, J1x) {
            return J1x == "offset" || J1x == "limit"
        };
        return function (i0x, q0x, e0x) {
            var bs1x = [];
            if (!i0x || !i0x.length || !q0x) return bs1x;
            e0x = e0x || Y1x;
            var do2x = i0x.length, jm4q = parseInt(e0x.offset) || 0,
                gG4K = Math.min(do2x, jm4q + (parseInt(e0x.limit) || do2x)),
                cr1x = {total: i0x.length, range: [jm4q, gG4K]};
            NEJ.X(cr1x, e0x, Gm1x);
            for (var i = jm4q, cs1x; i < gG4K; i++) {
                cr1x.index = i;
                cr1x.data = i0x[i];
                cs1x = q0x.A1x(cr1x);
                var D1x = cs1x.BB0x();
                Q1x[D1x] = cs1x;
                cs1x.S1x = cs1x.S1x.ek3x(function (D1x, cs1x) {
                    delete Q1x[D1x];
                    delete cs1x.S1x
                }.g0x(null, D1x, cs1x));
                bs1x.push(cs1x)
            }
            return bs1x
        }
    }();
    a9j.bDi7b = function (D1x) {
        return Q1x[D1x]
    };
    a9j.cxy0x = function (dK2x, e0x) {
        e0x = e0x || Y1x;
        a9j.cI2x(e0x.tid || "template-box");
        h0x.s0x(document, "templateready", function () {
            dK2x.A1x().y1x("onshow", e0x)
        })
    };
    c0x("dbg").dumpTC = function () {
        return Q1x
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        N1x = c0x("nej.ui"), b0x;
    if (!!N1x.ef2x) return;
    N1x.ef2x = NEJ.C();
    b0x = N1x.ef2x.O1x(G1x.cy1x);
    b0x.cq1x = function () {
        this.cu1x();
        a9j.bAZ6T();
        this.bZ1x();
        this.bR1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.cvb9S(e0x.clazz);
        this.bEA7t(e0x.parent)
    };
    b0x.bA1x = function () {
        this.bF1x();
        this.bEE7x();
        delete this.fG3x;
        a9j.mJ5O(this.m0x);
        a9j.v1x(this.m0x, this.bdx9o);
        delete this.bdx9o
    };
    b0x.bZ1x = bo1x;
    b0x.bR1x = function () {
        if (!this.cb1x) this.Wc6W();
        this.m0x = a9j.dj2x(this.cb1x);
        if (!this.m0x) this.m0x = a9j.cX2x("div", this.lh5m);
        a9j.x1x(this.m0x, this.lh5m)
    };
    b0x.Wc6W = bo1x;
    b0x.cvb9S = function (dL2x) {
        this.bdx9o = dL2x || "";
        a9j.x1x(this.m0x, this.bdx9o)
    };
    b0x.cvC9t = function () {
        if (!this.lh5m) return;
        a9j.x1x(this.fG3x, this.lh5m + "-parent")
    };
    b0x.bEE7x = function () {
        if (!this.lh5m) return;
        a9j.v1x(this.fG3x, this.lh5m + "-parent")
    };
    b0x.kV5a = function () {
        return this.m0x
    };
    b0x.bEA7t = function (bE1x) {
        if (!this.m0x) return this;
        this.bEE7x();
        if (k0x.gb3x(bE1x)) {
            this.fG3x = bE1x(this.m0x)
        } else {
            this.fG3x = a9j.z1x(bE1x);
            if (!!this.fG3x) this.fG3x.appendChild(this.m0x)
        }
        this.cvC9t();
        return this
    };
    b0x.M1x = function () {
        if (!this.fG3x || !this.m0x || this.m0x.parentNode == this.fG3x) return this;
        this.fG3x.appendChild(this.m0x);
        return this
    };
    b0x.br1x = function () {
        a9j.mJ5O(this.m0x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), k0x = c0x("nej.u"), bc1x = c0x("nej.h"),
        N1x = c0x("nej.ui"), uy8q, bFY8Q;
    if (!!N1x.NC4G) return;
    N1x.NC4G = NEJ.C();
    uy8q = N1x.NC4G.O1x(N1x.ef2x);
    bFY8Q = N1x.NC4G.cj1x;
    uy8q.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.vk8c("oncontentready", e0x.oncontentready || this.cvD9u.g0x(this));
        this.cvQ9H = !!e0x.nohack;
        this.cvR9I = !!e0x.destroyable;
        this.Iv2x(e0x.content)
    };
    uy8q.bA1x = function () {
        this.y1x("onbeforerecycle");
        this.bF1x();
        this.VY6S();
        this.Iv2x("");
        a9j.ff3x(this.m0x, {top: "", left: ""})
    };
    uy8q.cvD9u = bo1x;
    uy8q.Iw2x = bo1x;
    uy8q.VY6S = function () {
        a9j.mJ5O(this.m0x);
        if (!!this.nk6e) {
            this.nk6e = bc1x.bqp4t(this.m0x);
            delete this.nk6e
        }
    };
    uy8q.Iv2x = function (bl1x) {
        if (!this.m0x || !this.yN9E || bl1x == null) return this;
        bl1x = bl1x || "";
        k0x.fx3x(bl1x) ? this.yN9E.innerHTML = bl1x : this.yN9E.appendChild(bl1x);
        this.y1x("oncontentready", this.yN9E);
        return this
    };
    uy8q.ge3x = function (bf1x) {
        var C1x = bf1x.top;
        if (C1x != null) {
            C1x += "px";
            a9j.Z1x(this.m0x, "top", C1x);
            a9j.Z1x(this.nk6e, "top", C1x)
        }
        var C1x = bf1x.left;
        if (C1x != null) {
            C1x += "px";
            a9j.Z1x(this.m0x, "left", C1x);
            a9j.Z1x(this.nk6e, "left", C1x)
        }
        return this
    };
    uy8q.M1x = function () {
        a9j.Z1x(this.m0x, "visibility", "hidden");
        bFY8Q.M1x.apply(this, arguments);
        this.Iw2x();
        a9j.Z1x(this.m0x, "visibility", "");
        if (!this.cvQ9H) {
            this.nk6e = bc1x.nk6e(this.m0x)
        }
        return this
    };
    uy8q.br1x = function () {
        this.cvR9I ? this.S1x() : this.VY6S();
        return this
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, k0x = c0x("nej.u"), a9j = c0x("nej.e"), N1x = c0x("nej.ui"), yP9G;
    if (!!N1x.VW6Q) return;
    N1x.VW6Q = NEJ.C();
    yP9G = N1x.VW6Q.O1x(N1x.ef2x);
    yP9G.bj1x = function (e0x) {
        this.NJ4N();
        this.bk1x(this.cwc9T(e0x));
        this.bT1x.onbeforerecycle = this.S1x.g0x(this);
        this.nK6E = this.bdf9W()
    };
    yP9G.bA1x = function () {
        this.y1x("onbeforerecycle");
        this.bF1x();
        delete this.bT1x;
        a9j.mJ5O(this.m0x);
        var zs9j = this.nK6E;
        if (!!zs9j) {
            delete this.nK6E;
            zs9j.S1x()
        }
    };
    yP9G.bdf9W = bo1x;
    yP9G.cwc9T = function (e0x) {
        var o0x = {};
        k0x.eq3x(e0x, function (q0x, J1x) {
            this.bT1x.hasOwnProperty(J1x) ? this.bT1x[J1x] = q0x : o0x[J1x] = q0x
        }, this);
        return o0x
    };
    yP9G.NJ4N = function () {
        this.bT1x = {clazz: "", parent: null, content: this.m0x, destroyable: !1, oncontentready: null, nohack: !1}
    };
    yP9G.M1x = function () {
        if (!!this.nK6E) this.nK6E.M1x();
        this.y1x("onaftershow");
        return this
    };
    yP9G.br1x = function () {
        if (!!this.nK6E) this.nK6E.br1x();
        return this
    }
})();
(function () {
    var c0x = NEJ.P, dU2x = c0x("nej.g"), bc1x = c0x("nej.h"), a9j = c0x("nej.e"), k0x = c0x("nej.u"),
        h0x = c0x("nej.v"), N1x = c0x("nej.ui"), NL4P, bLm9d;
    if (!!N1x.Iy2x) return;
    var ip4t = a9j.so7h(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dU2x.bsp4t + ");}");
    N1x.Iy2x = NEJ.C();
    NL4P = N1x.Iy2x.O1x(N1x.ef2x);
    bLm9d = N1x.Iy2x.cj1x;
    NL4P.bj1x = function (e0x) {
        this.bk1x(e0x);
        var bl1x = e0x.content || "&nbsp;";
        k0x.fx3x(bl1x) ? this.m0x.innerHTML = bl1x : this.m0x.appendChild(bl1x)
    };
    NL4P.bA1x = function () {
        this.bF1x();
        this.m0x.innerHTML = "&nbsp;"
    };
    NL4P.bZ1x = function () {
        this.lh5m = ip4t
    };
    NL4P.M1x = function () {
        bc1x.bqq4u(this.m0x);
        bLm9d.M1x.apply(this, arguments);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), N1x = c0x("nej.ut"), vo8g;
    if (!!N1x.vg8Y) return;
    N1x.vg8Y = NEJ.C();
    vo8g = N1x.vg8Y.O1x(N1x.cy1x);
    vo8g.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.cwf9W = !!e0x.overflow;
        this.m0x = a9j.z1x(e0x.body);
        this.zy9p = a9j.z1x(e0x.view) || a9j.bHO8G(this.m0x);
        this.bMr9i = a9j.z1x(e0x.mbar) || this.m0x;
        this.VQ6K = parseInt(e0x.direction) || 0;
        if (!!e0x.isRelative) {
            this.m0x.style.position = "relative";
            this.bcX9O = true;
            this.bcQ9H()
        }
        this.bS1x([[document, "mouseup", this.bcK9B.g0x(this)], [document, "mousemove", this.bcJ9A.g0x(this)], [this.bMr9i, "mousedown", this.NW4a.g0x(this)]])
    };
    vo8g.bcQ9H = function () {
        if (!!this.bcX9O) {
            this.IC2x = a9j.hM4Q(this.m0x, this.zy9p);
            this.IC2x.x -= parseInt(a9j.dc2x(this.m0x, "left")) || 0;
            this.IC2x.y -= parseInt(a9j.dc2x(this.m0x, "top")) || 0
        }
    };
    vo8g.bA1x = function () {
        this.bF1x();
        delete this.m0x;
        delete this.bMr9i;
        delete this.zy9p
    };
    vo8g.bcz9q = function () {
        return {
            x: Math.max(this.zy9p.clientWidth, this.zy9p.scrollWidth) - this.m0x.offsetWidth,
            y: Math.max(this.zy9p.clientHeight, this.zy9p.scrollHeight) - this.m0x.offsetHeight
        }
    };
    vo8g.NW4a = function (d0x) {
        h0x.bh1x(d0x);
        if (!!this.hj4n) return;
        this.hj4n = {x: h0x.jS5X(d0x), y: h0x.mh5m(d0x)};
        this.bNK0x = this.bcz9q();
        this.y1x("ondragstart", d0x)
    };
    vo8g.bcJ9A = function (d0x) {
        if (!this.hj4n) return;
        var bf1x = {x: h0x.jS5X(d0x), y: h0x.mh5m(d0x)};
        var sd7W = bf1x.x - this.hj4n.x, sk7d = bf1x.y - this.hj4n.y, C1x = {
            top: (parseInt(a9j.dc2x(this.m0x, "top")) || 0) + sk7d,
            left: (parseInt(a9j.dc2x(this.m0x, "left")) || 0) + sd7W
        };
        if (this.bcX9O) {
            this.bcQ9H();
            C1x.top = C1x.top + this.IC2x.y;
            C1x.left = C1x.left + this.IC2x.x
        }
        this.hj4n = bf1x;
        this.ge3x(C1x)
    };
    vo8g.bcK9B = function (d0x) {
        if (!this.hj4n) return;
        delete this.bNK0x;
        delete this.hj4n;
        this.y1x("ondragend", this.bcx9o())
    };
    vo8g.ge3x = function (d0x) {
        if (!this.cwf9W) {
            var bPa0x = this.bNK0x || this.bcz9q();
            d0x.top = Math.min(bPa0x.y, Math.max(0, d0x.top));
            d0x.left = Math.min(bPa0x.x, Math.max(0, d0x.left))
        }
        var ce1x = this.m0x.style;
        if (this.bcX9O) {
            this.bcQ9H();
            d0x.top = d0x.top - this.IC2x.y;
            d0x.left = d0x.left - this.IC2x.x
        }
        if (this.VQ6K == 0 || this.VQ6K == 2) ce1x.top = d0x.top + "px";
        if (this.VQ6K == 0 || this.VQ6K == 1) ce1x.left = d0x.left + "px";
        this.y1x("onchange", d0x);
        return this
    };
    vo8g.bcx9o = function () {
        return {left: parseInt(a9j.dc2x(this.m0x, "left")) || 0, top: parseInt(a9j.dc2x(this.m0x, "top")) || 0}
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = NEJ.P("nej.e"), h0x = NEJ.P("nej.v"), k0x = NEJ.P("nej.u"),
        G1x = NEJ.P("nej.ut"), N1x = NEJ.P("nej.ui"), ip4t, gn3x, b0x, K1x;
    if (!!N1x.VI6C) return;
    N1x.VI6C = NEJ.C();
    b0x = N1x.VI6C.O1x(N1x.NC4G);
    K1x = N1x.VI6C.cj1x;
    b0x.cq1x = function () {
        this.rc7V = {};
        this.jM5R = {onchange: this.bcJ9A.g0x(this)};
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.cwh9Y(e0x.mask);
        this.cxc9T(e0x.align);
        this.Ag0x(e0x.title);
        if (!e0x.draggable) return;
        this.jl4p = G1x.vg8Y.A1x(this.jM5R)
    };
    b0x.bA1x = function () {
        this.bF1x();
        delete this.qf7Y;
        delete this.Ob4f;
        if (!!this.AX0x) {
            this.AX0x.S1x();
            delete this.AX0x
        }
        if (!!this.jl4p) {
            this.jl4p.S1x();
            delete this.jl4p
        }
    };
    b0x.bZ1x = function () {
        this.lh5m = ip4t;
        this.cb1x = gn3x
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.cU2x(this.m0x);
        this.yN9E = i0x[1];
        this.jM5R.mbar = i0x[0];
        this.jM5R.body = this.m0x;
        h0x.s0x(i0x[2], "mousedown", this.cxe9V.g0x(this));
        h0x.s0x(this.jM5R.mbar, "mousedown", this.NW4a.g0x(this));
        this.buL5Q = a9j.cU2x(this.jM5R.mbar)[0]
    };
    b0x.cxe9V = function (d0x) {
        h0x.bh1x(d0x);
        this.y1x("onclose", d0x);
        if (!d0x.stopped) {
            this.br1x()
        }
    };
    b0x.NW4a = function (d0x) {
        h0x.y1x(document, "click")
    };
    b0x.bcJ9A = function (d0x) {
        if (!this.nk6e) return;
        a9j.ff3x(this.nk6e, {top: d0x.top + "px", left: d0x.left + "px"})
    };
    b0x.Iw2x = function () {
        var eB3x = [function () {
            return 0
        }, function (mT5Y, ES1x, bf1x, J1x) {
            if (J1x == "top" && window.top != window.self) {
                var VE6y = 0, EW1x = 0;
                if (top.g_topBarHeight) VE6y = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) EW1x = top.g_bottomBarHeight;
                if (mT5Y.top <= VE6y) {
                    var bck9b = Math.max(0, (ES1x.height - (VE6y - mT5Y.top) - EW1x - bf1x.height) / 2);
                    return bck9b + VE6y
                } else {
                    var bck9b = Math.max(0, (ES1x.height - EW1x - bf1x.height) / 2);
                    return bck9b + mT5Y.top
                }
            }
            return Math.max(0, mT5Y[J1x] + (ES1x[hO4S[J1x]] - bf1x[hO4S[J1x]]) / 2)
        }, function (mT5Y, ES1x, bf1x, J1x) {
            return mT5Y[J1x] + (ES1x[hO4S[J1x]] - bf1x[hO4S[J1x]])
        }], cxb9S = ["left", "top"], hO4S = {left: "width", top: "height"};
        return function () {
            var C1x = {}, ce1x = this.m0x.style, iS4W = a9j.pb6V(), mT5Y = {left: iS4W.scrollLeft, top: iS4W.scrollTop},
                ES1x = {width: iS4W.clientWidth, height: iS4W.clientHeight},
                bf1x = {width: this.m0x.offsetWidth, height: this.m0x.offsetHeight},
                dm2x = {left: iS4W.clientWidth - this.m0x.offsetWidth, top: iS4W.clientHeight - this.m0x.offsetHeight};
            k0x.bb1x(cxb9S, function (J1x, r0x) {
                var dg2x = eB3x[this.qf7Y[r0x]];
                if (!dg2x) return;
                C1x[J1x] = dg2x(mT5Y, ES1x, bf1x, J1x)
            }, this);
            this.ge3x(C1x)
        }
    }();
    b0x.cxa9R = function () {
        if (!this.AX0x) {
            if (!this.Ob4f) return;
            this.rc7V.parent = this.fG3x;
            this.AX0x = this.Ob4f.A1x(this.rc7V)
        }
        this.AX0x.M1x()
    };
    b0x.VY6S = function () {
        if (!!this.AX0x) this.AX0x.br1x();
        K1x.VY6S.apply(this, arguments)
    };
    b0x.cwh9Y = function (kw5B) {
        if (!!kw5B) {
            if (kw5B instanceof N1x.Iy2x) {
                this.AX0x = kw5B;
                return
            }
            if (k0x.gb3x(kw5B)) {
                this.Ob4f = kw5B;
                return
            }
            this.Ob4f = N1x.Iy2x;
            if (k0x.fx3x(kw5B)) this.rc7V.clazz = kw5B;
            return
        }
        this.Ob4f = null
    };
    b0x.Ag0x = function (eM3x, dD2x) {
        if (!!this.buL5Q) {
            var bbN9E = !dD2x ? "innerText" : "innerHTML";
            this.buL5Q[bbN9E] = eM3x || "标题"
        }
        return this
    };
    b0x.cxc9T = function () {
        var cS2x = /\s+/, cwZ9Q = {left: 0, center: 1, right: 2, auto: 3},
            cwY9P = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (mW5b) {
            this.qf7Y = (mW5b || "").split(cS2x);
            var dS2x = cwZ9Q[this.qf7Y[0]];
            if (dS2x == null) dS2x = 1;
            this.qf7Y[0] = dS2x;
            var dS2x = cwY9P[this.qf7Y[1]];
            if (dS2x == null) dS2x = 1;
            this.qf7Y[1] = dS2x;
            return this
        }
    }();
    b0x.M1x = function () {
        K1x.M1x.apply(this, arguments);
        this.cxa9R();
        return this
    };
    ip4t = a9j.so7h(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gn3x = a9j.il4p('<div class="' + ip4t + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c0x = NEJ.P, k0x = c0x("nej.u"), N1x = c0x("nej.ui"), bcj9a;
    if (!!N1x.VC6w) return;
    N1x.VC6w = NEJ.C();
    bcj9a = N1x.VC6w.O1x(N1x.VW6Q);
    bcj9a.bdf9W = function () {
        return N1x.VI6C.A1x(this.bT1x)
    };
    bcj9a.NJ4N = function () {
        N1x.VC6w.cj1x.NJ4N.apply(this, arguments);
        this.bT1x.mask = null;
        this.bT1x.title = "标题";
        this.bT1x.align = "";
        this.bT1x.draggable = !1;
        this.bT1x.onclose = null
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), ba1x = c0x("nej.ui"), n0x = c0x("nm.l"), b0x, K1x;
    n0x.dZ2x = NEJ.C();
    b0x = n0x.dZ2x.O1x(ba1x.VC6w);
    b0x.bj1x = function (e0x) {
        e0x.clazz = "m-layer z-show " + (e0x.clazz || "");
        e0x.nohack = true;
        e0x.draggable = true;
        this.bk1x(e0x)
    };
    b0x.dA2x = function (f0x, bC1x) {
        if (!f0x) return;
        a9j.Z1x(f0x, "display", !bC1x ? "none" : "");
        f0x.lastChild.innerText = bC1x || ""
    };
    b0x.dF2x = function (gh3x, cK2x, Of4j, Oi4m) {
        var dK2x = "js-lock";
        if (cK2x === undefined) return a9j.bz1x(gh3x, dK2x);
        !cK2x ? a9j.v1x(gh3x, dK2x) : a9j.x1x(gh3x, dK2x);
        gh3x.firstChild.innerText = !cK2x ? Of4j : Oi4m
    };
    n0x.dZ2x.M1x = function (e0x) {
        e0x = e0x || {};
        if (e0x.mask === undefined) e0x.mask = "m-mask";
        if (e0x.parent === undefined) e0x.parent = document.body;
        if (e0x.draggable === undefined) e0x.draggable = true;
        !!this.eR3x && this.eR3x.S1x();
        this.eR3x = this.A1x(e0x);
        this.eR3x.M1x(e0x);
        return this.eR3x
    };
    n0x.dZ2x.br1x = function () {
        !!this.eR3x && this.eR3x.S1x()
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, K1x;
    n0x.bcf9W = NEJ.C();
    b0x = n0x.bcf9W.O1x(n0x.dZ2x);
    K1x = n0x.bcf9W.cj1x;
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        if (e0x.bubble === undefined) e0x.bubble = true;
        this.Ok4o = e0x.bubble;
        this.pm6g = e0x.message || ""
    };
    b0x.bZ1x = function () {
        this.cb1x = a9j.il4p('<div class="lyct f-cb f-tc"></div>')
    };
    b0x.bR1x = function () {
        this.cc1x();
        h0x.s0x(this.m0x, "click", this.cA1x.g0x(this))
    };
    b0x.cA1x = function (d0x) {
        var f0x = h0x.U1x(d0x, "d:action");
        if (!f0x) return;
        if (f0x.href) h0x.ci1x(d0x);
        if (a9j.u1x(f0x, "action") == "close") this.br1x();
        if (this.Ok4o === !1) h0x.rX7Q(d0x);
        this.y1x("onaction", a9j.u1x(f0x, "action"))
    };
    b0x.M1x = function () {
        K1x.M1x.call(this);
        this.m0x.innerHTML = this.pm6g
    };
    var gi3x = a9j.ep3x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l0x.mx5C = function () {
        var eD3x;
        var cs1x;
        var bbZ9Q = function (gj3x, V1x) {
            if (k0x.gb3x(gj3x, "function") && gj3x(V1x) != -1) cs1x.S1x()
        };
        var Bq0x = function () {
            !!cs1x && cs1x.br1x()
        };
        return function (e0x) {
            clearTimeout(eD3x);
            e0x = e0x || {};
            e0x.title = e0x.title || "提示";
            e0x.clazz = e0x.clazz || "";
            e0x.parent = e0x.parent || document.body;
            e0x.buttons = e0x.buttons || [];
            e0x.message = a9j.bW1x(gi3x, e0x);
            e0x.onaction = bbZ9Q.g0x(null, e0x.action);
            if (e0x.mask === undefined) e0x.mask = true;
            if (e0x.draggable === undefined) e0x.draggable = true;
            !!cs1x && cs1x.S1x();
            cs1x = n0x.bcf9W.A1x(e0x);
            cs1x.M1x();
            if (e0x.autoclose) eD3x = setTimeout(Bq0x.g0x(null), 2e3);
            return cs1x
        }
    }();
    l0x.eW3x = function (e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w1";
        e0x.buttons = [{klass: "u-btn2-2", action: "close", text: e0x.btntxt || "确定"}];
        var cs1x = l0x.mx5C(e0x);
        return cs1x
    };
    l0x.gC4G = function (e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w2";
        e0x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e0x.btnok || "确定",
            style: e0x.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e0x.btncc || "取消", style: e0x.ccstyle || ""}];
        var cs1x = l0x.mx5C(e0x);
        return cs1x
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u");
    a9j.cwX9O = function () {
        var gf3x = /[\r\n]/gi, Q1x = {};
        var cwW9N = function (cz1x) {
            return (cz1x || "").replace(gf3x, "aa").length
        };
        var bzJ6D = function (D1x) {
            var bd1x = Q1x[D1x], bzQ6K = a9j.z1x(D1x), yy9p = a9j.z1x(D1x + "-counter");
            if (!bzQ6K || !bd1x) return;
            var d0x = {input: bzQ6K.value};
            d0x.length = bd1x.onlength(d0x.input);
            d0x.delta = bd1x.max - d0x.length;
            bd1x.onchange(d0x);
            yy9p.innerHTML = d0x.value || "剩余" + d0x.delta + "个字"
        };
        return function (F1x, e0x) {
            var D1x = a9j.la5f(F1x);
            if (!D1x || !!Q1x[D1x]) return;
            var bd1x = NEJ.X({}, e0x);
            bd1x.onchange = bd1x.onchange || bo1x;
            bd1x.onlength = cwW9N;
            if (!bd1x.max) {
                var bAa6U = parseInt(a9j.fU3x(D1x, "maxlength")), bAc6W = parseInt(a9j.u1x(D1x, "maxLength"));
                bd1x.max = bAa6U || bAc6W || 100;
                if (!bAa6U && !!bAc6W) bd1x.onlength = k0x.fc3x
            }
            Q1x[D1x] = bd1x;
            h0x.s0x(D1x, "input", bzJ6D.g0x(null, D1x));
            var f0x = a9j.GJ2x(D1x, {nid: bd1x.nid || "js-counter", clazz: bd1x.clazz});
            bd1x.xid = D1x + "-counter";
            f0x.id = bd1x.xid;
            bzJ6D(D1x)
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bc1x = c0x("nej.h");
    bc1x.btA4E = function (F1x, dL2x) {
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, N1x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), bc1x = c0x("nej.h");
    if (N1x.mp5u.trident) return;
    bc1x.btA4E = function () {
        var Q1x = {};
        var Gb1x = function (d0x) {
            var cW2x = h0x.U1x(d0x);
            if (!!cW2x.value) return;
            a9j.Z1x(a9j.GJ2x(cW2x), "display", "none")
        };
        var DL1x = function (d0x) {
            var cW2x = h0x.U1x(d0x);
            if (!!cW2x.value) return;
            a9j.Z1x(a9j.GJ2x(cW2x), "display", "")
        };
        var cwU9L = function (cW2x, dL2x) {
            var D1x = a9j.la5f(cW2x), jR5W = a9j.GJ2x(cW2x, {tag: "label", clazz: dL2x});
            jR5W.htmlFor = D1x;
            var cJ2x = a9j.fU3x(cW2x, "placeholder") || "";
            jR5W.innerText = cJ2x == "null" ? "" : cJ2x;
            var cg1x = cW2x.offsetHeight + "px";
            a9j.ff3x(jR5W, {left: 0, display: !cW2x.value ? "" : "none"})
        };
        return bc1x.btA4E.ek3x(function (d0x) {
            d0x.stopped = !0;
            var bg1x = d0x.args, cW2x = a9j.z1x(bg1x[0]);
            if (!!Q1x[cW2x.id]) return;
            cwU9L(cW2x, bg1x[1]);
            Q1x[cW2x.id] = !0;
            h0x.s0x(cW2x, "blur", DL1x.g0x(null));
            h0x.s0x(cW2x, "focus", Gb1x.g0x(null))
        })
    }()
})();
(function () {
    var c0x = NEJ.P, bc1x = c0x("nej.h"), a9j = c0x("nej.e"), cT2x = c0x("nej.x");
    a9j.fP3x = cT2x.fP3x = function (F1x, dL2x) {
        bc1x.btA4E(F1x, a9j.u1x(F1x, "holder") || dL2x || "js-placeholder");
        return this
    };
    cT2x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        N1x = c0x("nej.ut"), hb4f;
    if (!!N1x.Os4w) return;
    N1x.Os4w = NEJ.C();
    hb4f = N1x.Os4w.O1x(N1x.cy1x);
    hb4f.cq1x = function () {
        this.cu1x();
        this.CR0x = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hb4f.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.fS3x = document.forms[e0x.form] || a9j.z1x(e0x.form);
        this.bS1x([[this.fS3x, "keypress", this.cwT9K.g0x(this)]]);
        this.pm6g = e0x.message || {};
        this.pm6g.pass = this.pm6g.pass || "&nbsp;";
        var eQ3x = this.oQ6K(this.fS3x, "focusMode", 1);
        if (!isNaN(eQ3x)) {
            this.bBv6p = {mode: eQ3x, clazz: e0x.focus}
        }
        this.Bo0x = e0x.holder;
        this.CR0x.tp.clazz = "js-mhd " + (e0x.tip || "js-tip");
        this.CR0x.ok.clazz = "js-mhd " + (e0x.pass || "js-pass");
        this.CR0x.er.clazz = "js-mhd " + (e0x.error || "js-error");
        this.bBN7G = e0x.invalid || "js-invalid";
        this.cwQ9H(e0x);
        this.ga3x();
        if (!!this.Bl0x) this.Bl0x.focus()
    };
    hb4f.bA1x = function () {
        this.bF1x();
        delete this.pm6g;
        delete this.Bl0x;
        delete this.Dh1x;
        delete this.fS3x;
        delete this.bCv7o;
        delete this.Ov4z
    };
    hb4f.oQ6K = function (f0x, Dm1x, t1x) {
        var C1x = a9j.u1x(f0x, Dm1x);
        switch (t1x) {
            case 1:
                return parseInt(C1x);
            case 2:
                return (C1x || "").toLowerCase() == "true";
            case 3:
                return this.btc4g(C1x)
        }
        return C1x
    };
    hb4f.Bh0x = function (C1x, t1x) {
        if (t1x == "date") return this.btc4g(C1x);
        return parseInt(C1x)
    };
    hb4f.Vv6p = function () {
        var js4w = /^button|submit|reset|image|hidden|file$/i;
        return function (f0x) {
            f0x = this.z1x(f0x) || f0x;
            var t1x = f0x.type;
            return !!f0x.name && !js4w.test(f0x.type || "")
        }
    }();
    hb4f.cwP9G = function () {
        var js4w = /^hidden$/i;
        return function (f0x) {
            if (this.Vv6p(f0x)) return !0;
            f0x = this.z1x(f0x) || f0x;
            var t1x = f0x.type || "";
            return js4w.test(t1x)
        }
    }();
    hb4f.btc4g = function () {
        var cS2x = /[-\/]/;
        var cwO9F = function (C1x) {
            if (!C1x) return "";
            C1x = C1x.split(cS2x);
            C1x.push(C1x.shift());
            return C1x.join("/")
        };
        return function (C1x) {
            if ((C1x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cwO9F(C1x))
        }
    }();
    hb4f.cwT9K = function (d0x) {
        if (d0x.keyCode != 13) return;
        this.y1x("onenter", d0x)
    };
    hb4f.cwN9E = function (D1x, T1x) {
        var ri7b = this.Ov4z[T1x], C1x = this.oQ6K(D1x, T1x);
        if (!C1x || !ri7b) return;
        this.Vu6o(D1x, ri7b);
        this.bsm4q(D1x, T1x, C1x)
    };
    hb4f.cwM9D = function (D1x, T1x) {
        try {
            var bDj7c = this.oQ6K(D1x, T1x);
            if (!bDj7c) return;
            var C1x = new RegExp(bDj7c);
            this.bsm4q(D1x, T1x, C1x);
            this.Vu6o(D1x, this.Ov4z[T1x])
        } catch (e) {
        }
    };
    hb4f.cwL9C = function (D1x, T1x) {
        var ri7b = this.Ov4z[T1x];
        if (!!ri7b && this.oQ6K(D1x, T1x, 2)) this.Vu6o(D1x, ri7b)
    };
    hb4f.brP4T = function (D1x, T1x, C1x) {
        C1x = parseInt(C1x);
        if (isNaN(C1x)) return;
        this.bsm4q(D1x, T1x, C1x);
        this.Vu6o(D1x, this.Ov4z[T1x])
    };
    hb4f.bDo7h = function (D1x, T1x) {
        this.brP4T(D1x, T1x, this.oQ6K(D1x, T1x))
    };
    hb4f.bDw7p = function (D1x, T1x) {
        this.brP4T(D1x, T1x, a9j.fU3x(D1x, T1x))
    };
    hb4f.bDQ7J = function (D1x, T1x, t1x) {
        var C1x = this.Bh0x(this.oQ6K(D1x, T1x), this.oQ6K(D1x, "type"));
        this.brP4T(D1x, T1x, C1x)
    };
    hb4f.cwK9B = function () {
        var gf3x = /^input|textarea$/i;
        var Gb1x = function (d0x) {
            this.pi6c(h0x.U1x(d0x))
        };
        var DL1x = function (d0x) {
            var f0x = h0x.U1x(d0x);
            if (!this.oQ6K(f0x, "ignore", 2)) {
                this.bEx7q(f0x)
            }
        };
        return function (f0x) {
            if (this.oQ6K(f0x, "autoFocus", 2)) this.Bl0x = f0x;
            var qc7V = a9j.fU3x(f0x, "placeholder");
            if (!!qc7V && qc7V != "null") a9j.fP3x(f0x, this.Bo0x);
            if (!!this.bBv6p && gf3x.test(f0x.tagName)) a9j.mK5P(f0x, this.bBv6p);
            var D1x = a9j.la5f(f0x);
            this.cwL9C(D1x, "required");
            this.cwN9E(D1x, "type");
            this.cwM9D(D1x, "pattern");
            this.bDw7p(D1x, "maxlength");
            this.bDw7p(D1x, "minlength");
            this.bDo7h(D1x, "maxLength");
            this.bDo7h(D1x, "minLength");
            this.bDQ7J(D1x, "min");
            this.bDQ7J(D1x, "max");
            var T1x = f0x.name;
            this.pm6g[T1x + "-tip"] = this.oQ6K(f0x, "tip");
            this.pm6g[T1x + "-error"] = this.oQ6K(f0x, "message");
            this.pi6c(f0x);
            var bv1x = this.Dh1x[D1x], j0x = (bv1x || Y1x).data || Y1x, OB4F = this.oQ6K(f0x, "counter", 2);
            if (OB4F && (j0x.maxlength || j0x.maxLength)) {
                a9j.cwX9O(D1x, {nid: this.CR0x.tp.nid, clazz: "js-counter"})
            }
            if (!!bv1x && gf3x.test(f0x.tagName)) {
                this.bS1x([[f0x, "focus", Gb1x.g0x(this)], [f0x, "blur", DL1x.g0x(this)]])
            } else if (this.oQ6K(f0x, "focus", 2)) {
                this.bS1x([[f0x, "focus", Gb1x.g0x(this)]])
            }
        }
    }();
    hb4f.cwQ9H = function () {
        var Eg1x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.btc4g(v))
            }
        };
        var cwI9z = {
            required: function (f0x) {
                var t1x = f0x.type, cwH9y = !f0x.value, cwF9w = (t1x == "checkbox" || t1x == "radio") && !f0x.checked;
                if (cwF9w || cwH9y) return -1
            }, type: function (f0x, e0x) {
                var cS2x = this.bCv7o[e0x.type], ez3x = f0x.value.trim(), cwE9v = !!cS2x.test && !cS2x.test(ez3x),
                    cwD9u = k0x.gb3x(cS2x) && !cS2x.call(this, ez3x);
                if (cwE9v || cwD9u) return -2
            }, pattern: function (f0x, e0x) {
                if (!e0x.pattern.test(f0x.value)) return -3
            }, maxlength: function (f0x, e0x) {
                if (f0x.value.length > e0x.maxlength) return -4
            }, minlength: function (f0x, e0x) {
                if (f0x.value.length < e0x.minlength) return -5
            }, maxLength: function (f0x, e0x) {
                if (k0x.fc3x(f0x.value) > e0x.maxLength) return -4
            }, minLength: function (f0x, e0x) {
                if (k0x.fc3x(f0x.value) < e0x.minLength) return -5
            }, min: function (f0x, e0x) {
                var gs3x = this.Bh0x(f0x.value, e0x.type);
                if (isNaN(gs3x) || gs3x < e0x.min) return -6
            }, max: function (f0x, e0x) {
                var gs3x = this.Bh0x(f0x.value, e0x.type);
                if (isNaN(gs3x) || gs3x > e0x.max) return -7
            }
        };
        return function (e0x) {
            this.bCv7o = NEJ.X(NEJ.X({}, Eg1x), e0x.type);
            this.Ov4z = NEJ.X(NEJ.X({}, cwI9z), e0x.attr)
        }
    }();
    hb4f.Vu6o = function (D1x, xk9b) {
        if (!k0x.gb3x(xk9b)) return;
        var bv1x = this.Dh1x[D1x];
        if (!bv1x || !bv1x.func) {
            bv1x = bv1x || {};
            bv1x.func = [];
            this.Dh1x[D1x] = bv1x
        }
        bv1x.func.push(xk9b)
    };
    hb4f.bsm4q = function (D1x, T1x, C1x) {
        if (!T1x) return;
        var bv1x = this.Dh1x[D1x];
        if (!bv1x || !bv1x.data) {
            bv1x = bv1x || {};
            bv1x.data = {};
            this.Dh1x[D1x] = bv1x
        }
        bv1x.data[T1x] = C1x
    };
    hb4f.bEx7q = function (f0x) {
        f0x = this.z1x(f0x) || f0x;
        var bv1x = this.Dh1x[a9j.la5f(f0x)];
        if (!f0x || !bv1x || !this.Vv6p(f0x)) return !0;
        var o0x;
        k0x.eq3x(bv1x.func, function (eB3x) {
            o0x = eB3x.call(this, f0x, bv1x.data);
            return o0x != null
        }, this);
        if (o0x == null) {
            var d0x = {target: f0x, form: this.fS3x};
            this.y1x("oncheck", d0x);
            o0x = d0x.value
        }
        var d0x = {target: f0x, form: this.fS3x};
        if (o0x != null) {
            d0x.code = o0x;
            this.y1x("oninvalid", d0x);
            if (!d0x.stopped) {
                this.cwC9t(f0x, d0x.value || this.pm6g[f0x.name + o0x])
            }
        } else {
            this.y1x("onvalid", d0x);
            if (!d0x.stopped) this.cwB9s(f0x, d0x.value)
        }
        return o0x == null
    };
    hb4f.xg9X = function () {
        var cwA9r = function (baP8H, baO8G) {
            return baP8H == baO8G ? "block" : "none"
        };
        var cwz9q = function (f0x, t1x, bC1x) {
            var qc7V = bGa8S.call(this, f0x, t1x);
            if (!qc7V && !!bC1x) qc7V = a9j.GJ2x(f0x, this.CR0x[t1x]);
            return qc7V
        };
        var bGa8S = function (f0x, t1x) {
            var qc7V;
            if (t1x == "tp") qc7V = a9j.z1x(f0x.name + "-tip");
            if (!qc7V) qc7V = a9j.I1x(f0x.parentNode, this.CR0x[t1x].nid)[0];
            return qc7V
        };
        return function (f0x, bC1x, t1x) {
            f0x = this.z1x(f0x) || f0x;
            if (!f0x) return;
            t1x == "er" ? a9j.x1x(f0x, this.bBN7G) : a9j.v1x(f0x, this.bBN7G);
            var qc7V = cwz9q.call(this, f0x, t1x, bC1x);
            if (!!qc7V && !!bC1x) qc7V.innerHTML = bC1x;
            k0x.eq3x(this.CR0x, function (C1x, J1x) {
                a9j.Z1x(bGa8S.call(this, f0x, J1x), "display", cwA9r(t1x, J1x))
            }, this)
        }
    }();
    hb4f.pi6c = function (f0x, bC1x) {
        this.xg9X(f0x, bC1x || this.pm6g[f0x.name + "-tip"], "tp");
        return this
    };
    hb4f.cwB9s = function (f0x, bC1x) {
        this.xg9X(f0x, bC1x || this.pm6g[f0x.name + "-pass"] || this.pm6g.pass, "ok");
        return this
    };
    hb4f.cwC9t = function (f0x, bC1x) {
        this.xg9X(f0x, bC1x || this.pm6g[f0x.name + "-error"], "er");
        return this
    };
    hb4f.ih4l = function () {
        var gf3x = /^(?:radio|checkbox)$/i;
        var cwy9p = function (C1x) {
            return C1x == null ? "" : C1x
        };
        var bGp8h = function (C1x, f0x) {
            if (gf3x.test(f0x.type || "")) {
                f0x.checked = C1x == f0x.value
            } else {
                f0x.value = cwy9p(C1x)
            }
        };
        return function (T1x, C1x) {
            var f0x = this.z1x(T1x);
            if (!f0x) return this;
            if (f0x.tagName == "SELECT" || !f0x.length) {
                bGp8h(C1x, f0x)
            } else {
                k0x.bb1x(f0x, bGp8h.g0x(null, C1x))
            }
            return this
        }
    }();
    hb4f.z1x = function (T1x) {
        return this.fS3x.elements[T1x]
    };
    hb4f.czB0x = function () {
        return this.fS3x
    };
    hb4f.Vn6h = function () {
        var gf3x = /^radio|checkbox$/i, js4w = /^number|date$/;
        var cwl9c = function (bu1x, f0x) {
            var T1x = f0x.name, C1x = f0x.value, bv1x = bu1x[T1x], t1x = this.oQ6K(f0x, "type");
            if (js4w.test(t1x)) C1x = this.Bh0x(C1x, t1x);
            if (gf3x.test(f0x.type) && !f0x.checked) {
                C1x = this.oQ6K(f0x, "value");
                if (!C1x) return
            }
            if (!!bv1x) {
                if (!k0x.eu3x(bv1x)) {
                    bv1x = [bv1x];
                    bu1x[T1x] = bv1x
                }
                bv1x.push(C1x)
            } else {
                bu1x[T1x] = C1x
            }
        };
        return function () {
            var o0x = {};
            k0x.bb1x(this.fS3x.elements, function (f0x) {
                if (this.cwP9G(f0x)) cwl9c.call(this, o0x, f0x)
            }, this);
            return o0x
        }
    }();
    hb4f.IT2x = function () {
        var cwk9b = function (f0x) {
            if (this.Vv6p(f0x)) this.pi6c(f0x)
        };
        return function () {
            this.fS3x.reset();
            k0x.bb1x(this.fS3x.elements, cwk9b, this);
            return this
        }
    }();
    hb4f.cxl9c = function () {
        this.fS3x.submit();
        return this
    };
    hb4f.ga3x = function () {
        var cwd9U = function (f0x) {
            if (this.Vv6p(f0x)) this.cwK9B(f0x)
        };
        return function () {
            this.Dh1x = {};
            k0x.bb1x(this.fS3x.elements, cwd9U, this);
            return this
        }
    }();
    hb4f.cwb9S = function (f0x) {
        f0x = this.z1x(f0x) || f0x;
        if (!!f0x) return this.bEx7q(f0x);
        var o0x = !0;
        k0x.bb1x(this.fS3x.elements, function (f0x) {
            var ku5z = this.cwb9S(f0x);
            o0x = o0x && ku5z
        }, this);
        return o0x
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), G1x = c0x("nej.ut"), k0x = c0x("nej.u"),
        l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, K1x;
    n0x.Vj6d = NEJ.C();
    b0x = n0x.Vj6d.O1x(n0x.dZ2x);
    K1x = n0x.Vj6d.cj1x;
    b0x.bR1x = function () {
        this.cc1x();
        h0x.s0x(this.m0x, "click", this.cA1x.g0x(this));
        h0x.s0x(document, "mousewheel", this.AO0x.g0x(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.AO0x.g0x(this))
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        if (e0x.jst) {
            this.m0x.innerHTML = a9j.bW1x(e0x.jst, e0x.data)
        } else if (e0x.ntp) {
            this.m0x.appendChild(a9j.dj2x(e0x.ntp))
        } else if (e0x.txt) {
            this.m0x.innerHTML = a9j.hZ4d(e0x.txt)
        } else if (e0x.html) {
            this.m0x.innerHTML = e0x.html
        }
        var OQ4U = this.m0x.getElementsByTagName("form");
        if (OQ4U.length) {
            this.fS3x = G1x.Os4w.A1x({form: OQ4U[0]})
        }
        this.Fb1x = a9j.cU2x(this.m0x)[0]
    };
    b0x.bA1x = function () {
        this.y1x("ondestroy");
        this.bF1x();
        this.m0x.innerHTML = "";
        delete this.Fb1x
    };
    b0x.cA1x = function (d0x) {
        var f0x = h0x.U1x(d0x, "d:action"), j0x = this.fS3x ? this.fS3x.Vn6h() : null,
            d0x = {action: a9j.u1x(f0x, "action")};
        if (j0x) d0x.data = j0x;
        if (d0x.action) {
            this.y1x("onaction", d0x);
            if (d0x.stopped) return;
            this.br1x()
        }
    };
    b0x.AO0x = function (d0x) {
        if (!this.Fb1x) return;
        h0x.bh1x(d0x);
        var dm2x = d0x.wheelDelta || -d0x.detail;
        this.Fb1x.scrollTop -= dm2x
    };
    l0x.jH4L = function (e0x) {
        e0x.destroyable = e0x.destroyable || true;
        e0x.title = e0x.title || "提示";
        e0x.draggable = true;
        e0x.parent = document.body;
        e0x.mask = e0x.mask || true;
        var zs9j = n0x.Vj6d.A1x(e0x);
        zs9j.M1x();
        return zs9j
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bJJ9A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", OS4W = {}, Fm1x = {};
    for (var i = 0, l = bJJ9A.length, c; i < l; i++) {
        c = bJJ9A.charAt(i);
        OS4W[i] = c;
        Fm1x[c] = i
    }
    var cwa9R = function (hH4L) {
        var r0x = 0, c, o0x = [];
        while (r0x < hH4L.length) {
            c = hH4L[r0x];
            if (c < 128) {
                o0x.push(String.fromCharCode(c));
                r0x++
            } else if (c > 191 && c < 224) {
                o0x.push(String.fromCharCode((c & 31) << 6 | hH4L[r0x + 1] & 63));
                r0x += 2
            } else {
                o0x.push(String.fromCharCode((c & 15) << 12 | (hH4L[r0x + 1] & 63) << 6 | hH4L[r0x + 2] & 63));
                r0x += 3
            }
        }
        return o0x.join("")
    };
    var cvZ9Q = function () {
        var hd4h = /\r\n/g;
        return function (j0x) {
            j0x = j0x.replace(hd4h, "\n");
            var o0x = [], or6l = String.fromCharCode(237);
            if (or6l.charCodeAt(0) < 0) for (var i = 0, l = j0x.length, c; i < l; i++) {
                c = j0x.charCodeAt(i);
                c > 0 ? o0x.push(c) : o0x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j0x.length, c; i < l; i++) {
                c = j0x.charCodeAt(i);
                if (c < 128) o0x.push(c); else if (c > 127 && c < 2048) o0x.push(c >> 6 | 192, c & 63 | 128); else o0x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return o0x
        }
    }();
    var IU2x = function (hH4L) {
        var r0x = 0, o0x = [], eQ3x = hH4L.length % 3;
        if (eQ3x == 1) hH4L.push(0, 0);
        if (eQ3x == 2) hH4L.push(0);
        while (r0x < hH4L.length) {
            o0x.push(OS4W[hH4L[r0x] >> 2], OS4W[(hH4L[r0x] & 3) << 4 | hH4L[r0x + 1] >> 4], OS4W[(hH4L[r0x + 1] & 15) << 2 | hH4L[r0x + 2] >> 6], OS4W[hH4L[r0x + 2] & 63]);
            r0x += 3
        }
        if (eQ3x == 1) o0x[o0x.length - 1] = o0x[o0x.length - 2] = "=";
        if (eQ3x == 2) o0x[o0x.length - 1] = "=";
        return o0x.join("")
    };
    var bLi9Z = function () {
        var qX7Q = /\n|\r|=/g;
        return function (j0x) {
            var r0x = 0, o0x = [];
            j0x = j0x.replace(qX7Q, "");
            for (var i = 0, l = j0x.length; i < l; i += 4) o0x.push(Fm1x[j0x.charAt(i)] << 2 | Fm1x[j0x.charAt(i + 1)] >> 4, (Fm1x[j0x.charAt(i + 1)] & 15) << 4 | Fm1x[j0x.charAt(i + 2)] >> 2, (Fm1x[j0x.charAt(i + 2)] & 3) << 6 | Fm1x[j0x.charAt(i + 3)]);
            var bm1x = o0x.length, eQ3x = j0x.length % 4;
            if (eQ3x == 2) o0x = o0x.slice(0, bm1x - 2);
            if (eQ3x == 3) o0x = o0x.slice(0, bm1x - 1);
            return o0x
        }
    }();
    p.cxp9g = function (j0x) {
        return cwa9R(bLi9Z(j0x))
    };
    p.cvX9O = function (j0x) {
        var hH4L = bLi9Z(j0x), do2x = hH4L.length, hT4X;
        var r0x = 0;
        while (hT4X = hH4L[r0x]) {
            if (hT4X > 128) {
                hH4L[r0x] = hT4X - 256
            }
            r0x++
        }
        return hH4L
    };
    p.cvW9N = function (j0x) {
        try {
            return window.btoa(j0x)
        } catch (ex) {
            return IU2x(cvZ9Q(j0x))
        }
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), w1x = c0x("nej.j"), N1x = c0x("nej.p"),
        k0x = c0x("nej.u"), n0x = c0x("nm.l"), B1x = c0x("nm.w"), bD1x = c0x("nej.ui"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), b0x, K1x;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n0x.bLU9L = NEJ.C();
    b0x = n0x.bLU9L.O1x(n0x.dZ2x);
    b0x.bZ1x = function () {
        this.cb1x = "m-download-layer"
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.I1x(this.m0x, "j-flag");
        this.boI3x = i0x[0];
        this.boE3x = i0x[1];
        this.bMk9b = i0x[2];
        w1x.bp1x("/client/version/get", {type: "json", onload: this.cvV9M.g0x(this)});
        if (N1x.bbH9y.mac) {
            a9j.v1x(this.boI3x.parentNode, "f-hide");
            a9j.x1x(this.boE3x.parentNode, "f-hide");
            a9j.x1x(this.bMk9b, "f-hide")
        } else {
            a9j.x1x(this.boI3x.parentNode, "f-hide");
            a9j.v1x(this.boE3x.parentNode, "f-hide");
            a9j.v1x(this.bMk9b, "f-hide")
        }
    };
    b0x.bj1x = function (e0x) {
        e0x.clazz = " m-layer-down";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "下载";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bk1x(e0x);
        this.bS1x([[this.m0x, "click", this.bQ1x.g0x(this)]]);
        this.en3x = TYPE_MAP[e0x.type];
        this.gH4L = e0x.id
    };
    b0x.bA1x = function () {
        this.bF1x()
    };
    b0x.zg9X = function () {
        this.br1x()
    };
    b0x.BO0x = function (d0x) {
        this.y1x("onok", C1x);
        this.br1x()
    };
    b0x.bQ1x = function (d0x) {
        var f0x = h0x.U1x(d0x, "d:action");
        switch (a9j.u1x(f0x, "action")) {
            case"download":
                this.br1x();
                window.open(a9j.u1x(f0x, "src"));
                break;
            case"orpheus":
                this.br1x();
                location.href = "orpheus://" + k0x.cvW9N(JSON.stringify({
                    type: this.en3x,
                    id: this.gH4L,
                    cmd: "download"
                }));
                break
        }
    };
    b0x.cvV9M = function (d0x) {
        if ((d0x || Y1x).code == 200) {
            this.Ij2x = d0x.data;
            this.boI3x.innerText = "V" + this.Ij2x.mac;
            this.boE3x.innerText = "V" + this.Ij2x.pc
        }
    };
    l0x.Vf6Z = function (e0x) {
        n0x.bLU9L.A1x(e0x).M1x()
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, k0x = c0x("nej.u"), p0x = c0x("nm.d"), bP1x = {};
    p0x.z1x = function (J1x) {
        return bP1x[J1x]
    };
    p0x.my5D = function (J1x, bd1x) {
        bP1x[J1x] = bd1x
    };
    p0x.eY3x = function (j0x) {
        k0x.eq3x(j0x, function (q0x, J1x) {
            var bd1x = bP1x[J1x] || {};
            NEJ.X(bd1x, q0x);
            bP1x[J1x] = bd1x
        })
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, bc1x = c0x("nej.h");
    bc1x.Vd6X = function (J1x) {
        return localStorage.getItem(J1x)
    };
    bc1x.Vc6W = function (J1x, C1x) {
        localStorage.setItem(J1x, C1x)
    };
    bc1x.bob3x = function (J1x) {
        localStorage.removeItem(J1x)
    };
    bc1x.boa3x = function () {
        localStorage.clear()
    };
    bc1x.cvU9L = function () {
        var o0x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o0x.push(localStorage.key(i));
        return o0x
    };
    bc1x.bnY3x = function () {
        (document.onstorageready || bo1x)()
    };
    bc1x.bnX3x = function () {
        return !0
    }
})();
(function () {
    var c0x = NEJ.P, N1x = c0x("nej.p"), hT4X = c0x("nej.c"), bc1x = c0x("nej.h"), sB7u;
    if (N1x.mp5u.trident || !!window.localStorage) return;
    var cvS9J = function () {
        var qK7D, eD3x;
        var bhm1x = function () {
            qK7D = document.createElement("div");
            NEJ.X(qK7D.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qK7D);
            qK7D.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + hT4X.z1x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Ma3x = function () {
            eD3x = window.clearTimeout(eD3x);
            var hl4p = qK7D.getElementsByTagName("object")[0];
            if (!!hl4p.initStorage) {
                delete qK7D;
                sB7u = hl4p;
                sB7u.initStorage("nej-storage");
                (document.onstorageready || bo1x)();
                return
            }
            eD3x = window.setTimeout(Ma3x, 500)
        };
        return function () {
            if (!!sB7u) return;
            bhm1x();
            Ma3x()
        }
    }();
    bc1x.Vd6X = bc1x.Vd6X.ek3x(function (d0x) {
        d0x.stopped = !0;
        if (!sB7u) return;
        d0x.value = sB7u.getItem(d0x.args[0])
    });
    bc1x.Vc6W = bc1x.Vc6W.ek3x(function (d0x) {
        d0x.stopped = !0;
        if (!sB7u) return;
        var bg1x = d0x.args;
        sB7u.setItem(bg1x[0], bg1x[1])
    });
    bc1x.bob3x = bc1x.bob3x.ek3x(function (d0x) {
        d0x.stopped = !0;
        if (!sB7u) return;
        sB7u.removeItem(d0x.args[0])
    });
    bc1x.boa3x = bc1x.boa3x.ek3x(function (d0x) {
        d0x.stopped = !0;
        if (!!sB7u) sB7u.clear()
    });
    bc1x.bnY3x = bc1x.bnY3x.ek3x(function (d0x) {
        d0x.stopped = !0;
        cvS9J()
    });
    bc1x.bnX3x = bc1x.bnX3x.ek3x(function (d0x) {
        d0x.stopped = !0;
        d0x.value = !!sB7u
    })
})();
(function () {
    var c0x = NEJ.P, k0x = c0x("nej.u"), h0x = c0x("nej.v"), bc1x = c0x("nej.h"), w1x = c0x("nej.j"),
        G1x = c0x("nej.ut"), Q1x = {};
    w1x.vT8L = function (J1x, C1x) {
        var bPT0x = JSON.stringify(C1x);
        try {
            bc1x.Vc6W(J1x, bPT0x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bPT0x != bc1x.Vd6X(J1x)) Q1x[J1x] = C1x;
        return this
    };
    w1x.us8k = function (J1x) {
        var j0x = JSON.parse(bc1x.Vd6X(J1x) || "null");
        return j0x == null ? Q1x[J1x] : j0x
    };
    w1x.bQp0x = function (J1x, C1x) {
        var j0x = w1x.us8k(J1x);
        if (j0x == null) {
            j0x = C1x;
            w1x.vT8L(J1x, j0x)
        }
        return j0x
    };
    w1x.Pd4h = function (J1x) {
        delete Q1x[J1x];
        bc1x.bob3x(J1x);
        return this
    };
    w1x.cxq9h = function () {
        var bnu3x = function (q0x, J1x, bu1x) {
            delete bu1x[J1x]
        };
        return function () {
            k0x.eq3x(Q1x, bnu3x);
            bc1x.boa3x();
            return this
        }
    }();
    w1x.cxr9i = function (o0x) {
        o0x = o0x || {};
        k0x.bb1x(bc1x.cvU9L(), function (J1x) {
            o0x[J1x] = w1x.us8k(J1x)
        });
        return o0x
    };
    G1x.fu3x.A1x({
        element: document, event: "storageready", oneventadd: function () {
            if (bc1x.bnX3x()) {
                document.onstorageready()
            }
        }
    });
    var cvM9D = function () {
        var cvL9C = function (C1x, J1x, bu1x) {
            bc1x.Vc6W(J1x, JSON.stringify(C1x));
            delete bu1x[J1x]
        };
        return function () {
            k0x.eq3x(Q1x, cvL9C)
        }
    }();
    h0x.s0x(document, "storageready", cvM9D);
    bc1x.bnY3x()
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), k0x = c0x("nej.u"), N1x = c0x("nej.ut"), IY2x;
    if (!!N1x.bms3x) return;
    N1x.bms3x = NEJ.C();
    IY2x = N1x.bms3x.O1x(N1x.cy1x);
    IY2x.cq1x = function () {
        var gi3x = +(new Date), mg5l = "dat-" + gi3x;
        return function () {
            this.cu1x();
            var Q1x = this.constructor[mg5l];
            if (!Q1x) {
                Q1x = {};
                this.constructor[mg5l] = Q1x
            }
            this.R1x = Q1x
        }
    }();
    IY2x.z1x = function (J1x) {
        return this.R1x[J1x]
    };
    IY2x.my5D = function (J1x, C1x) {
        var me5j = this.R1x[J1x];
        this.R1x[J1x] = C1x;
        h0x.y1x(localCache, "cachechange", {key: J1x, type: "set", oldValue: me5j, newValue: C1x});
        return this
    };
    IY2x.cC2x = function (J1x) {
        var me5j = this.R1x[J1x];
        k0x.YG7z(this.R1x, J1x);
        h0x.y1x(localCache, "cachechange", {key: J1x, type: "delete", oldValue: me5j, newValue: undefined});
        return me5j
    };
    IY2x.UP6J = function (ET1x) {
        return NEJ.Q(this.R1x, ET1x)
    };
    window.localCache = N1x.bms3x.A1x();
    N1x.fu3x.A1x({element: localCache, event: "cachechange"})
})();
(function () {
    var c0x = NEJ.P, fh3x = NEJ.R, bo1x = NEJ.F, k0x = c0x("nej.u"), w1x = c0x("nej.j"), N1x = c0x("nej.ut"),
        mg5l = "dat-" + +(new Date), mc5h;
    if (!!N1x.bml3x) return;
    N1x.bml3x = NEJ.C();
    mc5h = N1x.bml3x.O1x(N1x.cy1x);
    mc5h.cq1x = function () {
        this.cu1x();
        this.R1x = this.constructor[mg5l];
        if (!this.R1x) {
            this.R1x = {};
            this.R1x[mg5l + "-l"] = {};
            this.constructor[mg5l] = this.R1x
        }
    };
    mc5h.qs7l = function (J1x) {
        return this.R1x[J1x]
    };
    mc5h.oT6N = function (J1x, C1x) {
        this.R1x[J1x] = C1x
    };
    mc5h.kB5G = function (J1x, kY5d) {
        var j0x = this.qs7l(J1x);
        if (j0x == null) {
            j0x = kY5d;
            this.oT6N(J1x, j0x)
        }
        return j0x
    };
    mc5h.cvJ9A = function (J1x) {
        if (J1x != null) {
            delete this.R1x[J1x];
            return
        }
        k0x.eq3x(this.R1x, function (q0x, J1x) {
            if (J1x == mg5l + "-l") return;
            this.cvJ9A(J1x)
        }, this)
    };
    mc5h.cxs9j = function (J1x) {
        if (!!w1x.Pd4h) return w1x.Pd4h(J1x)
    };
    mc5h.cvG9x = function (J1x) {
        if (!!w1x.us8k) return w1x.us8k(J1x)
    };
    mc5h.cvF9w = function (J1x, C1x) {
        if (!!w1x.vT8L) w1x.vT8L(J1x, C1x)
    };
    mc5h.CY1x = function (J1x, kY5d) {
        var j0x = this.Pp4t(J1x);
        if (j0x == null) {
            j0x = kY5d;
            this.vy8q(J1x, j0x)
        }
        return j0x
    };
    mc5h.Pp4t = function (J1x) {
        var j0x = this.qs7l(J1x);
        if (j0x != null) return j0x;
        j0x = this.cvG9x(J1x);
        if (j0x != null) this.oT6N(J1x, j0x);
        return j0x
    };
    mc5h.vy8q = function (J1x, C1x) {
        this.cvF9w(J1x, C1x);
        this.oT6N(J1x, C1x)
    };
    mc5h.bwm5r = function (J1x) {
        if (J1x != null) {
            delete this.R1x[J1x];
            if (!!w1x.Pd4h) w1x.Pd4h(J1x);
            return
        }
        k0x.eq3x(this.R1x, function (q0x, J1x) {
            if (J1x == mg5l + "-l") return;
            this.bwm5r(J1x)
        }, this)
    };
    mc5h.cxt9k = function () {
        this.bwm5r();
        return this
    };
    mc5h.cxu9l = function (J1x) {
        var j0x = this.R1x[mg5l + "-l"];
        delete j0x[J1x]
    };
    mc5h.bmc3x = function (J1x) {
        var j0x = this.R1x[mg5l + "-l"], bg1x = fh3x.slice.call(arguments, 1);
        k0x.bb1x(j0x[J1x], function (dw2x) {
            try {
                dw2x.apply(null, bg1x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j0x[J1x]
    };
    mc5h.blT2x = function (J1x, dw2x) {
        dw2x = dw2x || bo1x;
        var i0x = this.R1x[mg5l + "-l"][J1x];
        if (!i0x) {
            i0x = [dw2x];
            this.R1x[mg5l + "-l"][J1x] = i0x;
            return !1
        }
        i0x.push(dw2x);
        return !0
    };
    mc5h.cvB9s = function (i0x, bf1x, gc3x) {
        if (!i0x) return !1;
        bf1x = parseInt(bf1x) || 0;
        gc3x = parseInt(gc3x) || 0;
        if (!gc3x) {
            if (!i0x.loaded) return !1;
            gc3x = i0x.length
        }
        if (!!i0x.loaded) gc3x = Math.min(gc3x, i0x.length - bf1x);
        for (var i = 0; i < gc3x; i++) if (!i0x[bf1x + i]) return !1;
        return !0
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, k0x = c0x("nej.u"), N1x = c0x("nej.ut"), b0x, K1x;
    if (!!N1x.Pr4v) return;
    N1x.Pr4v = NEJ.C();
    b0x = N1x.Pr4v.O1x(N1x.bml3x);
    K1x = N1x.Pr4v.cj1x;
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.uM8E = e0x.key || "id";
        this.bi1x = e0x.data || Y1x;
        this.cvz9q = !!e0x.autogc;
        this.cvy9p(e0x.id)
    };
    b0x.bA1x = function () {
        this.bF1x();
        if (!!this.dQ2x) {
            this.bxM6G()
        }
    };
    b0x.cvy9p = function (D1x) {
        var Q1x;
        if (!!D1x) {
            Q1x = this.R1x[D1x];
            if (!Q1x) {
                Q1x = {};
                this.R1x[D1x] = Q1x
            }
        }
        Q1x = Q1x || this.R1x;
        Q1x.hash = Q1x.hash || {};
        this.Px4B = Q1x
    };
    b0x.bxM6G = function () {
        this.dQ2x = window.clearTimeout(this.dQ2x);
        var bu1x = {};
        k0x.eq3x(this.Px4B, function (i0x, J1x) {
            if (J1x == "hash") return;
            if (!k0x.eu3x(i0x)) return;
            k0x.bb1x(i0x, function (q0x) {
                if (!q0x) return;
                bu1x[q0x[this.uM8E]] = !0
            }, this)
        }, this);
        k0x.eq3x(this.UG6A(), function (q0x, D1x, dN2x) {
            if (!bu1x[D1x]) {
                delete dN2x[D1x]
            }
        })
    };
    b0x.cvx9o = function () {
        if (!!this.dQ2x) {
            this.dQ2x = window.clearTimeout(this.dQ2x)
        }
        this.dQ2x = window.setTimeout(this.bxM6G.g0x(this), 150)
    };
    b0x.yM9D = function (q0x, UE6y) {
        q0x = this.byx6r(q0x, UE6y) || q0x;
        if (!q0x) return null;
        var J1x = q0x[this.uM8E];
        if (J1x != null) {
            var hQ4U = this.UG6A()[J1x];
            if (!!hQ4U) q0x = NEJ.X(hQ4U, q0x);
            this.UG6A()[J1x] = q0x
        }
        delete q0x.byz6t;
        return q0x
    };
    b0x.byx6r = bo1x;
    b0x.bkN2x = function (J1x, q0x) {
        if (!q0x) return;
        if (!k0x.eu3x(q0x)) {
            var i0x = this.gV4Z(J1x), q0x = this.yM9D(q0x, J1x);
            if (!!q0x) i0x.unshift(q0x);
            return
        }
        k0x.mq5v(q0x, this.bkN2x.g0x(this, J1x))
    };
    b0x.PD4H = function (J1x, co1x) {
        var i0x = this.gV4Z(J1x);
        i0x.length = Math.max(i0x.length, co1x);
        this.bkH2x(J1x);
        return this
    };
    b0x.jp4t = function (J1x) {
        return this.gV4Z(J1x).length
    };
    b0x.bkH2x = function (J1x, nA6u) {
        this.gV4Z(J1x).loaded = nA6u != !1;
        return this
    };
    b0x.UB6v = function (J1x) {
        return !!this.gV4Z(J1x).loaded
    };
    b0x.uc8U = function (J1x, i0x) {
        this.tT8L(J1x);
        this.bky2x({key: J1x, offset: 0, limit: i0x.length + 1}, {list: i0x, total: i0x.length})
    };
    b0x.gV4Z = function () {
        var Ek1x = function (J1x) {
            return (J1x || "") + (!J1x ? "" : "-") + "list"
        };
        return function (J1x) {
            var J1x = Ek1x(J1x), i0x = this.Px4B[J1x];
            if (!i0x) {
                i0x = [];
                this.Px4B[J1x] = i0x
            }
            return i0x
        }
    }();
    b0x.UG6A = function () {
        var dN2x = this.Px4B.hash;
        if (!dN2x) {
            dN2x = {};
            this.Px4B.hash = dN2x
        }
        return dN2x
    };
    b0x.bks2x = function () {
        var Ek1x = function (e0x) {
            return "r-" + e0x.key
        };
        return function (e0x) {
            var ir4v = NEJ.X({}, e0x), nd6X = Ek1x(ir4v);
            if (!this.blT2x(nd6X, this.y1x.g0x(this))) {
                ir4v.rkey = nd6X;
                ir4v.onload = this.cvv9m.g0x(this, ir4v);
                this.y1x("dopullrefresh", ir4v)
            }
            return this
        }
    }();
    b0x.cvv9m = function (e0x, i0x) {
        this.bkN2x(e0x.key, i0x);
        this.bmc3x(e0x.rkey, "onpullrefresh", e0x)
    };
    b0x.kG5L = function () {
        var Ek1x = function (e0x) {
            return "r-" + e0x.key + "-" + e0x.offset + "-" + e0x.limit
        };
        return function (e0x) {
            e0x = e0x || Y1x;
            var ir4v = {
                key: "" + e0x.key || "",
                ext: e0x.ext || null,
                data: e0x.data || null,
                offset: parseInt(e0x.offset) || 0,
                limit: parseInt(e0x.limit) || 0
            }, i0x = this.gV4Z(ir4v.key);
            if (this.cvB9s(i0x, ir4v.offset, ir4v.limit)) {
                this.y1x("onlistload", ir4v);
                return this
            }
            var nd6X = Ek1x(ir4v);
            if (!this.blT2x(nd6X, this.y1x.g0x(this))) {
                ir4v.rkey = nd6X;
                ir4v.onload = this.bky2x.g0x(this, ir4v);
                this.y1x("doloadlist", ir4v)
            }
            return this
        }
    }();
    b0x.bky2x = function () {
        var Ep1x = function (q0x, r0x, i0x) {
            if (!!q0x) {
                return !0
            }
            i0x.splice(r0x, 1)
        };
        return function (e0x, o0x) {
            e0x = e0x || Y1x;
            var J1x = e0x.key, bf1x = e0x.offset, bzH6B = this.gV4Z(J1x);
            var i0x = o0x || [];
            if (!k0x.eu3x(i0x)) {
                i0x = o0x.result || o0x.list || [];
                var co1x = parseInt(o0x.total);
                if (!isNaN(co1x) || co1x > i0x.length) {
                    this.PD4H(J1x, co1x)
                }
            }
            k0x.bb1x(i0x, function (q0x, r0x) {
                bzH6B[bf1x + r0x] = this.yM9D(q0x, J1x)
            }, this);
            if (i0x.length < e0x.limit) {
                this.bkH2x(J1x);
                k0x.mq5v(bzH6B, Ep1x)
            }
            this.bmc3x(e0x.rkey, "onlistload", e0x)
        }
    }();
    b0x.tT8L = function () {
        var Ep1x = function (q0x, r0x, i0x) {
            i0x.splice(r0x, 1)
        };
        return function (J1x) {
            var i0x = this.gV4Z(J1x);
            k0x.mq5v(i0x, Ep1x);
            this.bkH2x(J1x, !1);
            if (this.cvz9q) {
                this.cvx9o()
            }
            return this
        }
    }();
    b0x.bzI6C = function (q0x, UE6y) {
        return !q0x.byz6t
    };
    b0x.eo3x = function (D1x) {
        return this.UG6A()[D1x]
    };
    b0x.cxv9m = function (D1x) {
        var q0x = this.eo3x(D1x);
        if (!!q0x) q0x.byz6t = !0
    };
    b0x.Uu6o = function () {
        var Ek1x = function (e0x) {
            return "r-" + e0x.key + "-" + e0x.id
        };
        return function (e0x) {
            e0x = e0x || Y1x;
            var D1x = e0x[this.uM8E], ir4v = {id: D1x, ext: e0x.ext, data: e0x.data || {}, key: "" + e0x.key || ""};
            q0x = this.eo3x(D1x);
            ir4v.data[this.uM8E] = D1x;
            if (!!q0x && this.bzI6C(q0x, ir4v.key)) {
                this.y1x("onitemload", ir4v);
                return this
            }
            var nd6X = Ek1x(ir4v);
            if (!this.blT2x(nd6X, this.y1x.g0x(this))) {
                ir4v.rkey = nd6X;
                ir4v.onload = this.cvt9k.g0x(this, ir4v);
                this.y1x("doloaditem", ir4v)
            }
            return this
        }
    }();
    b0x.cvt9k = function (e0x, q0x) {
        e0x = e0x || Y1x;
        this.yM9D(q0x, e0x.key);
        this.bmc3x(e0x.rkey, "onitemload", e0x)
    };
    b0x.iO4S = function (e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.xa9R.g0x(this, e0x);
        this.y1x("doadditem", e0x)
    };
    b0x.xa9R = function (e0x, q0x) {
        var J1x = e0x.key;
        q0x = this.yM9D(q0x, J1x);
        if (!!q0x) {
            var eK3x = 0, i0x = this.gV4Z(J1x);
            if (!e0x.push) {
                eK3x = -1;
                var bf1x = e0x.offset || 0;
                i0x.splice(bf1x, 0, q0x)
            } else if (i0x.loaded) {
                eK3x = 1;
                i0x.push(q0x)
            } else {
                i0x.length++
            }
        }
        var d0x = {key: J1x, flag: eK3x, data: q0x, action: "add", ext: e0x.ext};
        this.y1x("onitemadd", d0x);
        return d0x
    };
    b0x.Jd2x = function (e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.bjp1x.g0x(this, e0x);
        this.y1x("dodeleteitem", e0x)
    };
    b0x.bjp1x = function (e0x, bAn6h) {
        var q0x, J1x = e0x.key;
        if (!!bAn6h) {
            q0x = this.eo3x(e0x.id) || null;
            var D1x = e0x.id, cvp9g = this.uM8E, i0x = this.gV4Z(J1x), r0x = k0x.cV2x(i0x, function (hQ4U) {
                return !!hQ4U && hQ4U[cvp9g] == D1x
            });
            if (r0x >= 0) i0x.splice(r0x, 1)
        }
        var d0x = {key: J1x, data: q0x, action: "delete", ext: e0x.ext};
        this.y1x("onitemdelete", d0x);
        return d0x
    };
    b0x.Us6m = function (e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.cvo9f.g0x(this, e0x);
        this.y1x("doupdateitem", e0x)
    };
    b0x.cvo9f = function (e0x, q0x) {
        var J1x = e0x.key;
        if (!!q0x) q0x = this.yM9D(q0x, J1x);
        var d0x = {key: J1x, data: q0x, action: "update", ext: e0x.ext};
        this.y1x("onitemupdate", d0x);
        return d0x
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, k0x = c0x("nej.u"), N1x = c0x("nej.ut"), b0x;
    if (!!N1x.biQ1x) return;
    N1x.biQ1x = NEJ.C();
    b0x = N1x.biQ1x.O1x(N1x.Pr4v);
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.bkF2x({
            doloadlist: this.Ur6l.g0x(this),
            doloaditem: this.biK1x.g0x(this),
            doadditem: this.bAM6G.g0x(this),
            dodeleteitem: this.Uo6i.g0x(this),
            doupdateitem: this.Un6h.g0x(this),
            dopullrefresh: this.bAU6O.g0x(this)
        })
    };
    b0x.Ur6l = bo1x;
    b0x.bAU6O = bo1x;
    b0x.biK1x = bo1x;
    b0x.bAM6G = bo1x;
    b0x.Uo6i = bo1x;
    b0x.Un6h = bo1x
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, k0x = c0x("nej.u"), h0x = c0x("nej.v"), w1x = c0x("nej.j"),
        G1x = c0x("nej.ut"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), b0x, K1x;
    p0x.he4i = NEJ.C();
    b0x = p0x.he4i.O1x(G1x.biQ1x);
    b0x.ch1x = function () {
        var PO4S = location.protocol + "//" + location.host;
        var cvm9d = function (bs1x, j0x) {
            var bu1x = {conf: {}, data: {}, urls: []};
            k0x.bb1x(bs1x, function (J1x, r0x, i0x) {
                var bd1x = p0x.z1x(J1x);
                if (!bd1x) return;
                var bil1x = bBx6r(bd1x.url, j0x[J1x]);
                bu1x.urls.push(bil1x);
                bu1x.conf[bil1x] = bd1x;
                bu1x.data[bil1x] = JSON.stringify(j0x[J1x] == null ? "" : j0x[J1x])
            });
            return bu1x
        };
        var bBx6r = function (W1x, j0x) {
            return W1x.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j0x[$2] || $1
            })
        };
        var bBI7B = function (bd1x, e0x, d0x) {
            h0x.y1x(window, "requesterror", d0x);
            if (!!d0x.stopped) return;
            var Jg2x = bd1x.onerror || e0x.onerror;
            if (k0x.fx3x(Jg2x)) {
                this.y1x(Jg2x, d0x, e0x)
            } else {
                (Jg2x || bo1x).call(this, d0x, e0x)
            }
            var d0x = {result: d0x, option: e0x};
            this.y1x("onerror", d0x);
            if (!d0x.stopped) (bd1x.onmessage || bo1x).call(this, d0x.result.code, d0x.result)
        };
        var bBM7F = function (P1x, bd1x, e0x) {
            var o0x = P1x;
            if (k0x.gb3x(bd1x.format)) {
                o0x = bd1x.format.call(this, P1x, e0x)
            }
            return o0x
        };
        var wL9C = function (P1x, bd1x, e0x, tC8u) {
            if (k0x.gb3x(bd1x.beforeload)) {
                bd1x.beforeload.call(this, P1x, e0x, bd1x)
            }
            if (P1x && P1x.code != null && P1x.code != 200) {
                bBI7B.call(this, bd1x, e0x, {
                    key: e0x.key,
                    code: P1x.code,
                    message: P1x.message || "",
                    captchaId: P1x.captchaId,
                    ext: P1x
                });
                return
            }
            var o0x = P1x;
            if (!tC8u) {
                o0x = bBM7F.call(this, P1x, bd1x, e0x)
            } else if (k0x.gb3x(bd1x.format)) {
                var bij1x = [];
                k0x.bb1x(tC8u.urls, function (W1x) {
                    bij1x.push(bBM7F.call(this, P1x[W1x], tC8u.conf[W1x], e0x))
                }, this);
                bij1x.push(e0x);
                o0x = bd1x.format.apply(this, bij1x)
            }
            var to8g = bd1x.onload || e0x.onload, bBV7O = bd1x.finaly || e0x.finaly || bo1x;
            if (k0x.fx3x(to8g)) {
                bBV7O.call(this, this.y1x(to8g, o0x), e0x)
            } else {
                bBV7O.call(this, (to8g || bo1x).call(this, o0x), e0x)
            }
        };
        var Ad0x = function (bd1x, e0x, bU1x) {
            bBI7B.call(this, bd1x, e0x, {key: e0x.key, code: bU1x.code || -1, message: bU1x.message || ""})
        };
        return function (bd1x, e0x) {
            if (k0x.fx3x(bd1x)) {
                bd1x = p0x.z1x(bd1x)
            }
            delete e0x.value;
            (bd1x.filter || bo1x).call(this, e0x, bd1x);
            var P1x = e0x.value;
            if (!!P1x) {
                wL9C.call(this, P1x, bd1x, e0x);
                return
            }
            var W1x, j0x = e0x.data || Y1x, xB9s = {
                cookie: !0,
                type: bd1x.rtype || "json",
                method: bd1x.type || "POST",
                onerror: Ad0x.g0x(this, bd1x, e0x),
                noescape: bd1x.noescape
            };
            if (k0x.eu3x(bd1x.url)) {
                var tC8u = cvm9d(bd1x.url, j0x);
                W1x = PO4S + "/api/batch";
                xB9s.data = k0x.db2x(tC8u.data);
                xB9s.onload = wL9C.eb2x(this, bd1x, e0x, tC8u);
                xB9s.headers = {"batch-method": "POST"};
                delete tC8u.data
            } else {
                var lu5z = bd1x.url.indexOf(":") < 0 ? PO4S : "";
                W1x = bBx6r(lu5z + bd1x.url, j0x);
                xB9s.data = k0x.db2x(e0x.data);
                xB9s.onload = wL9C.eb2x(this, bd1x, e0x)
            }
            if (xB9s.method == "GET") xB9s.query = xB9s.data;
            return w1x.bp1x(W1x, xB9s)
        }
    }();
    b0x.Fz1x = function () {
        var gf3x = /^get|list|pull$/i;
        return function (bCk7d, e0x) {
            var J1x = e0x.key, bd1x = p0x.z1x(J1x.split("-")[0] + "-" + bCk7d);
            if (gf3x.test(bCk7d) && J1x.indexOf("post-") < 0) bd1x.type = "GET";
            this.ch1x(bd1x, e0x)
        }
    }();
    b0x.cxw9n = function (J1x, i0x) {
        var co1x = i0x.length;
        this.bky2x({key: J1x, offset: 0, limit: co1x + 1}, {list: i0x, total: co1x})
    };
    b0x.Ur6l = function (e0x) {
        this.Fz1x("list", e0x)
    };
    b0x.biK1x = function (e0x) {
        this.Fz1x("get", e0x)
    };
    b0x.bAU6O = function (e0x) {
        this.Fz1x("pull", e0x)
    };
    b0x.bAM6G = function (e0x) {
        this.Fz1x("add", e0x)
    };
    b0x.Uo6i = function (e0x) {
        this.Fz1x("del", e0x)
    };
    b0x.Un6h = function (e0x) {
        this.Fz1x("update", e0x)
    };
    b0x.cvk9b = function (q0x) {
        this.yM9D(q0x)
    };
    G1x.fu3x.A1x({element: window, event: "requesterror"})
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), G1x = c0x("nej.ut"), p0x = c0x("nm.d"), bic1x = {},
        b0x, K1x;
    var ti8a = function (o0x, e0x) {
        o0x.conf = e0x.conf;
        return o0x
    };
    p0x.eY3x({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (P1x, e0x) {
                return ti8a({mv: P1x}, e0x)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (o0x, e0x) {
                if (!!o0x.songs && o0x.songs.length > 0) o0x.song = o0x.songs[0]; else o0x.song = bic1x;
                delete o0x.songs;
                return ti8a(o0x, e0x)
            }, filter: function (e0x) {
                e0x.data.ids = "[" + e0x.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: ti8a},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: ti8a},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (o0x, e0x) {
                o0x.playlist = o0x.result;
                delete o0x.result;
                return ti8a(o0x, e0x)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: ti8a},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: ti8a},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: ti8a},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e0x) {
                var i0x = e0x.data.id.split("-");
                e0x.data.radioId = i0x[0];
                e0x.data.asc = i0x[1] == 2;
                e0x.data.limit = 1e3;
                delete e0x.data.id
            }, format: function (P1x, e0x) {
                var cvj9a = {id: e0x.data.radioId, programs: P1x.programs};
                return ti8a({djradio: cvj9a}, e0x)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: ti8a},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            }, format: function (o0x, e0x) {
                var vY8Q = {lyric: "", nolyric: true};
                if (o0x.code == 200 && o0x.lrc && o0x.lrc.lyric) {
                    vY8Q.lyric = o0x.lrc.lyric;
                    vY8Q.nolyric = false
                } else {
                    vY8Q.nolyric = true
                }
                return ti8a({lyric: vY8Q}, e0x)
            }
        }
    });
    p0x.vA8s = NEJ.C();
    b0x = p0x.vA8s.O1x(p0x.he4i);
    b0x.cvf9W = function (t1x, cP2x) {
        return this.qs7l(this.Uj6d(t1x, cP2x))
    };
    b0x.PR4V = function (t1x, cP2x, e0x) {
        e0x = e0x || {};
        var j0x = this.qs7l(this.Uj6d(t1x, cP2x));
        if (j0x && (t1x != 13 && t1x != 19 || e0x.conf && e0x.conf.useCache)) {
            this.y1x("onresourceload", t1x, cP2x, j0x, e0x.conf);
            return
        }
        e0x.data = {id: cP2x};
        e0x.onload = this.cvc9T.g0x(this, t1x, cP2x);
        e0x.onerror = this.cva9R.g0x(this, t1x, cP2x);
        this.ch1x("res-" + this.As0x(t1x) + "-get", e0x)
    };
    b0x.cvc9T = function (t1x, cP2x, o0x) {
        var j0x = o0x[this.As0x(t1x)];
        this.oT6N(this.Uj6d(t1x, cP2x), j0x);
        this.y1x("onresourceload", t1x, cP2x, j0x, o0x.conf)
    };
    b0x.cva9R = function (t1x, cP2x, o0x, e0x) {
        if (o0x.code != 404) {
            this.y1x("onresourceerror", t1x, cP2x, o0x.code);
            return
        }
        this.oT6N(this.Uj6d(t1x, cP2x), bic1x);
        this.y1x("onresourceload", t1x, cP2x, bic1x, e0x.conf)
    };
    b0x.cxz0x = function (t1x, e0x) {
        this.ch1x("res-" + this.As0x(t1x) + "-play", e0x)
    };
    b0x.Uj6d = function (t1x, cP2x) {
        return "res-" + this.As0x(t1x) + "-" + cP2x
    };
    b0x.As0x = function (t1x) {
        var bu1x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bu1x[t1x]
    };
    p0x.vA8s.Jj2x = function (t1x, cP2x) {
        if (!this.eR3x) this.eR3x = p0x.vA8s.A1x({});
        return this.eR3x.cvf9W(t1x, cP2x)
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        p0x = c0x("nm.d"), bhg0x = /^[1-9][0-9]*$/, b0x, K1x;
    var LOCAL_LOG_KEY = "local-log";
    p0x.eY3x({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    p0x.hY4c = NEJ.C();
    b0x = p0x.hY4c.O1x(p0x.he4i);
    b0x.gm3x = function (V1x, bd1x) {
        if (!V1x || !bd1x) return;
        if (k0x.fx3x(bd1x)) {
            try {
                bd1x = JSON.parse(bd1x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a9j)
                }
            }
        }
        if (!k0x.kW5b(bd1x)) return;
        this.ch1x("bi-log", {data: {logs: JSON.stringify([{action: V1x, json: bd1x}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + V1x + ", json=" + JSON.stringify(bd1x))
        }
    };
    b0x.Ue6Y = function (nn6h) {
        if (!k0x.eu3x(nn6h)) return;
        this.ch1x("bi-batch-log", {data: {logs: JSON.stringify(nn6h)}})
    };
    b0x.bDE7x = function (bd1x) {
        if (!bd1x || !bd1x.type || !bd1x.rid) return;
        var nf6Z = bd1x.type;
        if (bhg0x.test(nf6Z)) {
            nf6Z = this.As0x(nf6Z)
        }
        if (!nf6Z) return;
        if (nf6Z == "playlist") nf6Z = "list";
        this.gm3x("search", {type: nf6Z, id: bd1x.rid || null, keyword: bd1x.keyword || null})
    };
    b0x.Qa4e = function () {
        var cuX9O = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bd1x) {
            if (!bd1x || !bd1x.type || !bd1x.rid) return;
            if (bd1x.play === undefined) bd1x.play = true;
            var nf6Z = bd1x.type;
            if (bhg0x.test(nf6Z)) {
                nf6Z = this.As0x(nf6Z)
            }
            if (!nf6Z) return;
            if (nf6Z == "playlist") nf6Z = "list";
            var P1x = {id: bd1x.rid, type: nf6Z};
            if (nf6Z == "song" && bd1x.source) {
                P1x.source = this.bEd7W(bd1x.source);
                if (!!bd1x.sourceid) P1x.sourceid = bd1x.sourceid
            }
            this.gm3x(!bd1x.play ? "addto" : "play", P1x);
            if (nf6Z == "song" && bd1x.hash && bd1x.hash.match(cuX9O)) {
                this.gm3x(!bd1x.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b0x.bgF0x = function (D1x, by1x, dP2x, Ce0x) {
        var P1x = {type: "song", wifi: 0, download: 0};
        var cuV9M = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        P1x.id = D1x;
        P1x.time = Math.round(by1x);
        P1x.end = k0x.fx3x(Ce0x) ? Ce0x : cuV9M[Ce0x] || "";
        if (dP2x && dP2x.fid) {
            P1x.source = this.bEd7W(dP2x.fid);
            P1x.sourceId = dP2x.fdata
        }
        this.gm3x("play", P1x)
    };
    b0x.bEz7s = function (t1x, cP2x) {
        if (!t1x || !cP2x) return;
        if (bhg0x.test(t1x)) t1x = this.As0x(t1x);
        if (t1x != "playlist" && t1x != "dj") return;
        var bd1x = p0x.z1x("plus-" + t1x + "-count");
        if (!bd1x) return !1;
        this.ch1x(bd1x, {data: {id: cP2x}});
        var Q1x = this.kB5G("play-hist-" + t1x, []);
        if (k0x.cV2x(Q1x, cP2x) < 0) {
            Q1x.push(cP2x);
            return !0
        }
        return !1
    };
    b0x.As0x = function (t1x) {
        var bu1x = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bu1x[t1x]
    };
    b0x.bEd7W = function (Jn2x) {
        var bu1x = {
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
        return bu1x[Jn2x]
    };
    b0x.cuU9L = function (ha4e) {
        var nn6h = this.CY1x(LOCAL_LOG_KEY, []);
        nn6h.unshift(ha4e);
        if (nn6h.length > 200) {
            nn6h.length = 200
        }
        this.vy8q(LOCAL_LOG_KEY, nn6h)
    };
    b0x.cuR9I = function () {
        return this.Pp4t(LOCAL_LOG_KEY)
    };
    b0x.ey3x = function (P1x) {
        this.gm3x("play", P1x)
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), w1x = c0x("nej.j"), G1x = c0x("nej.ut"),
        a9j = c0x("nej.e"), k0x = c0x("nej.u"), n0x = c0x("nm.l"), l0x = c0x("nm.x"), p0x = c0x("nm.d");
    if (!p0x.vA8s) return;
    var Q1x = p0x.vA8s.A1x({onresourceload: cuP9G});
    var yc9T = p0x.hY4c.fX3x();

    function cuP9G(t1x, cP2x, j0x, bd1x) {
        var i0x = [];
        switch (parseInt(t1x)) {
            case 2:
                i0x = j0x;
                break;
            case 13:
                i0x = j0x.tracks;
                break;
            case 18:
                i0x.push(j0x);
                break;
            case 19:
                i0x = j0x.songs;
                break;
            case 21:
                if (j0x.mp && j0x.mp.fee && j0x.mp.pl <= 0) {
                    l0x.bfP0x(j0x.data.id, j0x.mp.fee);
                    return
                }
                break
        }
        if (l0x.Jq2x(i0x, true, null, t1x == 19 ? {source: "album", sourceid: cP2x} : null) == 0) {
            return
        }
        l0x.eW3x({clazz: "m-layer-w2", bubble: !1, message: bd1x.message})
    }

    function cuN9E(d0x, qR7K, yh9Y, eG3x) {
        eG3x = eG3x || {};
        if (d0x.action == "ok") {
            if (yh9Y) {
                location.dispatch2("/payfee?songId=" + yh9Y)
            } else {
                location.dispatch2("/payfee?fee=" + qR7K || 1)
            }
            yc9T.gm3x("click", {
                type: "tobuyvip",
                name: "box",
                source: eG3x.source || "song",
                sourceid: eG3x.sourceid || yh9Y || 0
            })
        } else if (d0x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yh9Y);
            yc9T.gm3x("click", {
                type: "tobuyone",
                name: "box",
                source: eG3x.source || "song",
                sourceid: eG3x.sourceid || yh9Y || 0
            })
        }
    }

    function Qq4u(bC1x) {
        l0x.eW3x({clazz: "m-layer-w2", bubble: !1, message: bC1x, btntxt: "知道了"})
    }

    function Qt5y(bC1x, P1x) {
        Qq4u((P1x || Y1x).toast || bC1x)
    }

    l0x.in4r = function (bC1x, D1x, t1x, cuM9D, be1x) {
        bC1x = bC1x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cuM9D && be1x && be1x.privilege && be1x.privilege.toast) {
            w1x.bp1x("/api/song/toast", {
                query: {id: be1x.id},
                type: "json",
                onload: Qt5y.g0x(this, bC1x),
                onerror: Qt5y.g0x(this, bC1x)
            })
        } else if (D1x && t1x) {
            Q1x.PR4V(t1x, D1x, {conf: {message: bC1x, useCache: t1x != 18}})
        } else {
            Qq4u(bC1x)
        }
    };
    l0x.sX8P = function (qR7K, yh9Y, t1x, eG3x, mf5k) {
        var bP1x, pw6q = "m-popup-info", beL9C = "单首购买", beI9z = "马上去开通", cE2x = "唱片公司要求，当前歌曲须付费使用。", bGB8t = true;
        try {
            bP1x = top.api.feeMessage || {}
        } catch (e) {
            bP1x = {}
        }
        if (qR7K == 1 || qR7K == 8 || qR7K == 16) {
            if (t1x == "song") {
                pw6q = "m-popup-song-buy";
                cE2x = bP1x["vip2"] || cE2x;
                beI9z = bP1x["vip2button"] || "包月购买";
                beL9C = bP1x["vip2link"] || beL9C;
                if (mf5k && mf5k.flag !== undefined) {
                    var bs1x = mf5k.flag.toString(2).split("");
                    if (parseInt(bs1x.pop(), 10) == 1) {
                        bGB8t = false
                    }
                }
            } else {
                cE2x = bP1x["vip"] || cE2x
            }
        } else if (qR7K == 4) {
            cE2x = bP1x["album"] || cE2x;
            beI9z = "立即订购"
        } else {
            cE2x = bP1x["unknow"] || cE2x
        }
        l0x.jH4L({
            clazz: "m-layer-w5",
            html: a9j.bW1x(pw6q, {songTxt: beL9C, tip: cE2x, oktext: beI9z, cctext: "以后再说", showSongText: bGB8t}),
            onaction: cuN9E.eb2x(null, qR7K, yh9Y, eG3x)
        })
    };
    l0x.bGN8F = function (hs4w, hi4m) {
        l0x.gC4G({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t1x) {
                if (t1x == "ok") {
                    l0x.Vf6Z({id: hs4w, type: hi4m})
                }
            }
        })
    };
    l0x.bfP0x = function (on6h, qR7K) {
        var bP1x, cE2x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bP1x = top.api.feeMessage || {}
        } catch (e) {
            bP1x = {}
        }
        if (qR7K == 1 || qR7K == 8) {
            cE2x = bP1x["vip"] || cE2x
        } else if (qR7K == 4) {
            cE2x = bP1x["album"] || cE2x
        } else {
            cE2x = bP1x["unknow"] || cE2x
        }
        return l0x.jH4L({
            clazz: "m-layer-w5",
            html: a9j.bW1x("m-popup-info", {tip: cE2x, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d0x) {
                if (d0x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + on6h);
                    yc9T.gm3x("click", {type: "tobuyone", name: "box", source: "mv", sourceid: on6h || 0})
                }
            }
        })
    };
    l0x.Jq2x = function () {
        function compareFee(cuL9C, cuK9B) {
            var bu1x = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bu1x[cuL9C] || 0) - (bu1x[cuK9B] || 0)
        }

        return function (i0x, cE2x, sR8J, eG3x) {
            sR8J = sR8J || {};
            var xk9b = [], Jz2x = {}, bIA8s = 0, bIB8t = 0, JA2x = null;
            if (!i0x || !i0x.length) return xk9b;
            k0x.bb1x(i0x, function (be1x) {
                var eZ3x = l0x.pj6d(be1x);
                if (eZ3x == 0) {
                    xk9b.push(be1x)
                } else if (eZ3x == 10) {
                    if (be1x.privilege) {
                        be1x.fee = be1x.privilege.fee
                    }
                    if (compareFee(be1x.fee, Jz2x.fee) > 0) {
                        Jz2x = be1x
                    }
                } else if (eZ3x == 11) {
                    ++bIA8s;
                    if (!sR8J.play) xk9b.push(be1x)
                } else if (eZ3x == 1e3) {
                    ++bIB8t;
                    if (!sR8J.download) xk9b.push(be1x)
                } else if (eZ3x == 100) {
                    JA2x = be1x
                }
            });
            if (xk9b.length == 0 && cE2x) {
                if (bIA8s == i0x.length) {
                    var su7n = i0x[0].privilege || {};
                    if (su7n.payed) {
                        l0x.in4r("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l0x.sX8P(su7n.fee, null, null, eG3x)
                    }
                } else if (bIB8t == i0x.length) {
                    l0x.in4r("因版权方要求，该歌曲不支持下载")
                } else if (Jz2x.id) {
                    l0x.sX8P(Jz2x.fee, Jz2x.id, null, eG3x, Jz2x.privilege)
                } else {
                    if (JA2x && i0x.length == 1 && JA2x.privilege && JA2x.privilege.st < 0 && JA2x.privilege.toast) {
                        l0x.in4r(null, null, null, true, JA2x)
                    } else {
                        l0x.in4r()
                    }
                }
            }
            return xk9b
        }
    }();
    l0x.pj6d = function (be1x) {
        if (!be1x) return 0;
        var eZ3x = be1x.privilege;
        if (be1x.program) return 0;
        if (window.GAbroad) return 100;
        if (eZ3x) {
            if (eZ3x.st != null && eZ3x.st < 0) {
                return 100
            }
            if (eZ3x.fee > 0 && eZ3x.fee != 8 && eZ3x.payed == 0 && eZ3x.pl <= 0) return 10;
            if (eZ3x.fee == 16) return 11;
            if ((eZ3x.fee == 0 || eZ3x.payed) && eZ3x.pl > 0 && eZ3x.dl == 0) return 1e3;
            if (eZ3x.pl == 0 && eZ3x.dl == 0) return 100;
            return 0
        } else {
            var eg2x = be1x.status != null ? be1x.status : be1x.st != null ? be1x.st : 0;
            if (be1x.status >= 0) return 0;
            if (be1x.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), N1x = c0x("nej.ui"), b0x;
    if (!!N1x.TQ6K) return;
    var ip4t = a9j.so7h(".#<uispace>{position:absolute;background:#fff;}");
    N1x.TQ6K = NEJ.C();
    b0x = N1x.TQ6K.O1x(N1x.NC4G);
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.bS1x([[document, "click", this.rB7u.g0x(this)]]);
        this.cuI9z = !!e0x.nostop;
        this.bJH9y = {top: e0x.top, left: e0x.left}
    };
    b0x.bA1x = function () {
        delete this.yw9n;
        delete this.beb9S;
        delete this.qf7Y;
        delete this.bJM9D;
        delete this.TN6H;
        delete this.bJH9y;
        this.bF1x()
    };
    b0x.bZ1x = function () {
        this.lh5m = ip4t
    };
    b0x.bR1x = function () {
        this.cc1x();
        this.yN9E = this.m0x;
        h0x.s0x(this.m0x, "click", this.cuG9x.g0x(this))
    };
    b0x.rB7u = function (d0x) {
        if (d0x.button != 2) this.br1x()
    };
    b0x.cuG9x = function (d0x) {
        if (this.cuI9z) return;
        h0x.rX7Q(d0x);
        var F1x = h0x.U1x(d0x);
        if (F1x.tagName == "A") h0x.ci1x(d0x)
    };
    b0x.cuF9w = function () {
        var cS2x = /\s+/i;
        return function (mW5b) {
            mW5b = (mW5b || "").trim().toLowerCase().split(cS2x);
            mW5b[0] = mW5b[0] || "bottom";
            mW5b[1] = mW5b[1] || "left";
            this.qf7Y = mW5b
        }
    }();
    b0x.cuD9u = function (mW5b) {
        var o0x = {}, mr5w = this.beb9S, cxA0x = a9j.pb6V(), cR2x = this.m0x.offsetWidth, cg1x = this.m0x.offsetHeight;
        switch (mW5b[0]) {
            case"top":
                o0x.top = mr5w.top - cg1x;
                o0x.left = mW5b[1] == "right" ? mr5w.left + mr5w.width - cR2x : mr5w.left;
                break;
            case"left":
                o0x.left = mr5w.left - cR2x;
                o0x.top = mW5b[1] == "bottom" ? mr5w.top + mr5w.height - cg1x : mr5w.top;
                break;
            case"right":
                o0x.left = mr5w.left + mr5w.width;
                o0x.top = mW5b[1] == "bottom" ? mr5w.top + mr5w.height - cg1x : mr5w.top;
                break;
            default:
                o0x.top = mr5w.top + mr5w.height;
                o0x.left = mW5b[1] == "right" ? mr5w.left + mr5w.width - cR2x : mr5w.left;
                break
        }
        return o0x
    };
    b0x.Iw2x = function () {
        if (!this.bJM9D) {
            this.ge3x(this.bJH9y);
            return
        }
        if (!!this.TN6H) {
            this.ge3x(this.yw9n);
            return
        }
        if (!!this.beb9S) this.ge3x(this.cuD9u(this.qf7Y))
    };
    b0x.cuA9r = function (F1x, dm2x, d0x) {
        dm2x = dm2x || Y1x;
        var bLB9s = a9j.pb6V(), cT2x = h0x.jS5X(d0x) + (dm2x.left || 0), gP4T = h0x.mh5m(d0x) + (dm2x.top || 0),
            cR2x = F1x.offsetWidth + (dm2x.right || 0), cg1x = F1x.offsetHeight + (dm2x.bottom || 0),
            JD2x = bLB9s.scrollWidth, bdF9w = bLB9s.scrollHeight, bdA9r = cT2x + cR2x, bdv9m = gP4T + cg1x;
        switch (this.qf7Y[0]) {
            case"top":
                gP4T = bdv9m > bdF9w ? gP4T - cg1x : gP4T;
                if (this.qf7Y[1] == "right") {
                    cT2x = cT2x - cR2x < 0 ? 0 : cT2x - cR2x
                } else {
                    cT2x = bdA9r > JD2x ? JD2x - cR2x : cT2x
                }
                break;
            case"left":
                cT2x = bdA9r > JD2x ? JD2x - cR2x : cT2x;
                if (this.qf7Y[1] == "top") {
                    gP4T = bdv9m > bdF9w ? gP4T - cg1x : gP4T
                } else {
                    gP4T = gP4T - cg1x < 0 ? gP4T : gP4T - cg1x
                }
                break;
            case"right":
                cT2x = cT2x - cR2x < 0 ? 0 : cT2x - cR2x;
                if (this.qf7Y[1] == "top") {
                    gP4T = bdv9m > bdF9w ? gP4T - cg1x : gP4T
                } else {
                    gP4T = gP4T - cg1x < 0 ? gP4T : gP4T - cg1x
                }
                break;
            default:
                gP4T = gP4T - cg1x < 0 ? gP4T : gP4T - cg1x;
                if (this.qf7Y[1] == "left") {
                    cT2x = bdA9r > JD2x ? JD2x - cR2x : cT2x
                } else {
                    cT2x = cT2x - cR2x < 0 ? 0 : cT2x - cR2x
                }
                break
        }
        return {top: gP4T, left: cT2x}
    };
    b0x.bdt9k = function () {
        var cuz9q = function (F1x, dm2x) {
            F1x = a9j.z1x(F1x);
            if (!F1x) return;
            dm2x = dm2x || Y1x;
            var bf1x = a9j.hM4Q(F1x);
            return {
                top: bf1x.y - (dm2x.top || 0),
                left: bf1x.x - (dm2x.left || 0),
                width: F1x.offsetWidth + (dm2x.right || 0),
                height: F1x.offsetHeight + (dm2x.bottom || 0)
            }
        };
        return function (e0x) {
            e0x = e0x || Y1x;
            this.TN6H = e0x.event;
            this.cuF9w(e0x.align);
            if (!!this.TN6H) this.yw9n = this.cuA9r(e0x.target, e0x.delta, this.TN6H);
            this.beb9S = cuz9q(e0x.target, e0x.delta);
            this.bJM9D = !!e0x.fitable;
            this.M1x();
            return this
        }
    }()
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), N1x = c0x("nej.ui"), b0x,
        K1x;
    if (!!N1x.AQ0x) return;
    N1x.AQ0x = NEJ.C();
    b0x = N1x.AQ0x.O1x(N1x.VW6Q);
    K1x = N1x.AQ0x.cj1x;
    N1x.AQ0x.cxB0x = function () {
        var cux9o = function (d0x, D1x, fn3x, jx4B, QN5S) {
            var cs1x, J1x = D1x + "-i", Q1x = fn3x.yf9W, bME9v = !!jx4B.noclear, bMF9w = !!jx4B.toggled;
            if (k0x.gb3x(jx4B.onbeforeclick)) {
                var TG6A = jx4B.noclear, cuw9n = jx4B.toggled;
                try {
                    jx4B.onbeforeclick(jx4B)
                } catch (e) {
                }
                bME9v = !!jx4B.noclear;
                bMF9w = !!jx4B.toggled;
                jx4B.toggled = cuw9n;
                jx4B.noclear = TG6A
            }
            var Cq0x = Q1x[J1x];
            if (bMF9w && !!Cq0x) {
                Cq0x.br1x();
                return
            }
            h0x.bh1x(d0x);
            if (!bME9v) {
                h0x.y1x(document, "click");
                cs1x = fn3x.A1x(jx4B)
            } else {
                cs1x = fn3x.ceN5S(jx4B, !0)
            }
            Q1x[J1x] = cs1x;
            cs1x.vk8c("onbeforerecycle", function () {
                delete Q1x[J1x]
            });
            cs1x.bdt9k(QN5S)
        };
        return function (f0x, e0x) {
            f0x = a9j.z1x(f0x);
            if (!f0x) return this;
            if (!this.yf9W) this.yf9W = {};
            var D1x = a9j.la5f(f0x);
            if (!!this.yf9W[D1x]) return this;
            e0x = NEJ.X({}, e0x);
            var QN5S = NEJ.EX({align: "", delta: null, fitable: !1}, e0x);
            QN5S.target = D1x;
            e0x.destroyable = !0;
            if (!e0x.fixed) {
                QN5S.fitable = !0;
                e0x.parent = document.body
            }
            this.yf9W[D1x] = [D1x, e0x.event || "click", cux9o.eb2x(null, D1x, this, e0x, QN5S)];
            h0x.s0x.apply(h0x, this.yf9W[D1x]);
            return this
        }
    }();
    N1x.AQ0x.cxC0x = function (f0x) {
        if (!this.yf9W) return this;
        var D1x = a9j.la5f(f0x), d0x = this.yf9W[D1x];
        if (!d0x) return this;
        delete this.yf9W[D1x];
        h0x.mt5y.apply(h0x, d0x);
        var cs1x = this.yf9W[D1x + "-i"];
        if (!!cs1x) cs1x.br1x();
        return this
    };
    b0x.bdf9W = function () {
        return N1x.TQ6K.A1x(this.bT1x)
    };
    b0x.NJ4N = function () {
        K1x.NJ4N.apply(this, arguments);
        this.bT1x.top = null;
        this.bT1x.left = null;
        this.bT1x.nostop = !1
    };
    b0x.bdt9k = function (e0x) {
        if (!!this.nK6E) this.nK6E.bdt9k(e0x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, ba1x = c0x("nej.ui"), n0x = c0x("nm.l"), b0x, K1x;
    n0x.bcH9y = NEJ.C();
    b0x = n0x.bcH9y.O1x(ba1x.AQ0x);
    b0x.bj1x = function (e0x) {
        e0x.nohack = true;
        this.bk1x(e0x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), n0x = c0x("nm.l"), b0x, K1x;
    n0x.X1x = NEJ.C();
    b0x = n0x.X1x.O1x(n0x.bcH9y);
    K1x = n0x.X1x.cj1x;
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.en3x = e0x.type || 1
    };
    b0x.bR1x = function () {
        this.cc1x();
        this.m0x = a9j.nl6f(this.cut9k());
        var i0x = a9j.cU2x(this.m0x);
        this.pq6k = i0x[0];
        this.ck1x = i0x[1]
    };
    b0x.cut9k = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b0x.Iw2x = function () {
        var C1x = {}, ce1x = this.m0x.style, iS4W = a9j.pb6V(), mT5Y = {left: iS4W.scrollLeft, top: iS4W.scrollTop},
            dm2x = {left: iS4W.clientWidth - this.m0x.offsetWidth, top: iS4W.clientHeight - this.m0x.offsetHeight};
        C1x.top = Math.max(0, mT5Y.top + dm2x.top / 2);
        C1x.left = Math.max(0, mT5Y.left + dm2x.left / 2);
        this.nK6E.ge3x(C1x)
    };
    b0x.M1x = function (e0x) {
        K1x.M1x.call(this);
        this.Iw2x();
        this.en3x == 1 ? a9j.eT3x(this.pq6k, "u-icn-32", "u-icn-31") : a9j.eT3x(this.pq6k, "u-icn-31", "u-icn-32");
        this.ck1x.innerHTML = e0x.tip || ""
    };
    window.g_showTipCard = n0x.X1x.M1x = function () {
        var eD3x;
        return function (e0x) {
            clearTimeout(eD3x);
            if (e0x.parent === undefined) e0x.parent = document.body;
            if (e0x.autoclose === undefined) e0x.autoclose = true;
            e0x.clazz = "m-sysmsg";
            !!this.eR3x && this.eR3x.S1x();
            this.eR3x = this.A1x(e0x);
            this.eR3x.M1x(e0x);
            if (e0x.autoclose) eD3x = setTimeout(this.br1x.g0x(this), 2e3)
        }.g0x(n0x.X1x)
    }();
    n0x.X1x.br1x = function () {
        !!this.eR3x && this.eR3x.br1x()
    }
})();
(function () {
    var c0x = NEJ.P, w1x = c0x("nej.j"), k0x = c0x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        w1x.bp1x = w1x.bp1x.ek3x(function (d0x) {
            e0x = d0x.args[1];
            e0x.query = e0x.query || {};
            if (k0x.fx3x(e0x.query)) e0x.query = k0x.hx4B(e0x.query);
            e0x.query.ref = "mail"
        })
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, fh3x = NEJ.R, G1x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        w1x = c0x("nej.j"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), J1x = "playlist-tracks_", b0x;
    p0x.eY3x({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (P1x, e0x) {
                this.cus9j(P1x.playlist);
                return {total: 0, list: fh3x}
            }, onerror: function () {
                this.y1x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (P1x, e0x) {
                var mA5F = P1x.playlist;
                mA5F.creator = GUser;
                mA5F.isHost = !0;
                mA5F.typeFlag = "playlist";
                return mA5F
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.ht4x, "listchange", d0x)
            }, onmessage: function () {
                var mb5g = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cd1x) {
                    n0x.X1x.M1x({tip: mb5g[cd1x] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e0x) {
                e0x.id = e0x.data.pid
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.ht4x, "listchange", d0x)
            }, onmessage: function () {
                var mb5g = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cd1x) {
                    n0x.X1x.M1x({tip: mb5g[cd1x] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e0x) {
                var eG3x = e0x.ext || {};
                e0x.ext = NEJ.X(eG3x, e0x.data);
                e0x.data = {id: e0x.ext.id}
            }, format: function (P1x, e0x) {
                n0x.X1x.M1x({tip: "收藏成功" + (P1x.point > 0 ? ' 获得<em class="s-fc6">' + P1x.point + "积分</em>" : "")});
                var q0x = e0x.ext;
                q0x.subscribedCount++;
                return q0x
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.cur9i, "listchange", d0x);
                h0x.y1x(p0x.cur9i, "itemchange", {attr: "subscribedCount", data: d0x.data})
            }, onmessage: function () {
                var mb5g = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (cd1x) {
                    n0x.X1x.M1x({type: 2, tip: mb5g[cd1x] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e0x) {
                e0x.id = e0x.data.id = e0x.data.pid
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.ht4x, "listchange", d0x)
            }, onmessage: function () {
                var mb5g = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cd1x) {
                    n0x.X1x.M1x({tip: mb5g[cd1x], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e0x) {
                var j0x = e0x.data, TD6x = {};
                TD6x["playlist-update-name"] = {id: j0x.id, name: j0x.name};
                TD6x["playlist-update-tag"] = {id: j0x.id, tags: j0x.tags.join(";")};
                TD6x["playlist-update-desc"] = {id: j0x.id, desc: j0x.description};
                e0x.data = TD6x;
                e0x.ext = j0x
            },
            format: function (T1x, pt6n, QS5X, e0x) {
                if (T1x.code == 200 && pt6n.code == 200 && QS5X.code == 200) {
                    e0x.ext.allSuccess = true;
                    n0x.X1x.M1x({tip: "保存成功"})
                } else if (T1x.code == 407 || pt6n.code == 407 || QS5X.code == 407) {
                    e0x.ext.allSuccess = false;
                    n0x.X1x.M1x({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e0x.ext.allSuccess = false;
                    n0x.X1x.M1x({type: 2, tip: "保存失败"})
                }
                return this.eo3x(e0x.ext.id)
            },
            finaly: function (d0x, e0x) {
                h0x.y1x(p0x.ht4x, "listchange", d0x)
            },
            onmessage: function (cd1x) {
                n0x.X1x.M1x({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (P1x, e0x) {
                var q0x = this.eo3x(e0x.ext.id);
                if (P1x.code == 200) q0x.name = e0x.ext.name;
                return P1x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (P1x, e0x) {
                var q0x = this.eo3x(e0x.ext.id);
                if (P1x.code == 200) q0x.tags = e0x.ext.tags;
                return P1x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (P1x, e0x) {
                var q0x = this.eo3x(e0x.ext.id);
                if (P1x.code == 200) q0x.description = e0x.ext.description;
                return P1x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e0x) {
                e0x.url = e0x.data.url;
                delete e0x.data.url
            }, format: function (P1x, e0x) {
                n0x.X1x.M1x({tip: "保存成功"});
                var q0x = this.eo3x(e0x.data.id);
                q0x.coverImgUrl = e0x.url;
                e0x.ext = q0x;
                return q0x
            }, onmessage: function (cd1x) {
                n0x.X1x.M1x({type: 2, tip: "保存失败"})
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.ht4x, "itemchange", {attr: "coverImgUrl", data: e0x.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (P1x, e0x) {
                var mA5F = this.eo3x(e0x.data.id);
                if (!mA5F) return;
                mA5F.playCount++;
                h0x.y1x(p0x.ht4x, "itemchange", {attr: "playcount", data: mA5F})
            }
        }
    });
    p0x.ht4x = NEJ.C();
    b0x = p0x.ht4x.O1x(p0x.he4i);
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bPJ0x = function () {
        var cY2x = GUser.userId;
        this.kG5L({limit: 1001, key: "playlist_my-" + cY2x, data: {offset: 0, limit: 1001, uid: cY2x}})
    };
    b0x.cus9j = function (i0x) {
        var cY2x = GUser.userId, ig4k = [], bQg0x = [];
        k0x.bb1x(i0x, function (q0x) {
            q0x.typeFlag = "playlist";
            if (q0x.creator && q0x.creator.userId == cY2x) {
                if (q0x.specialType == 5) q0x.name = "我喜欢的音乐";
                q0x.isHost = !0;
                ig4k.push(q0x)
            } else {
                bQg0x.push(q0x)
            }
        });
        this.uc8U("playlist_new-" + cY2x, ig4k);
        this.uc8U("playlist_fav-" + cY2x, bQg0x)
    };
    b0x.cuq9h = function (j0x) {
        this.ch1x("playlist-update-cover", {data: j0x})
    };
    b0x.cxD0x = function () {
        var QT5Y = this.cun9e.z1x("host-plist");
        if (QT5Y.length == 0) {
            return
        }
        if (QT5Y.length == 1 && QT5Y[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = QT5Y.length; i < len; i++) {
            var q0x = QT5Y[i];
            if (q0x.trackCount > 0) return q0x.id
        }
        return this.cun9e.z1x("host-plist")[0].id
    };
    b0x.cum9d = function (D1x) {
        if (GUser && GUser.userId > 0) {
            this.ch1x("playlist-upcount", {data: {id: D1x}})
        }
    };
    b0x.EH1x = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b0x.cxE0x = function () {
        return GUser.userId
    };
    b0x.bcn9e = function (q0x) {
        if (q0x.userId == GUser.userId && q0x.specialType == 5) q0x.name = "我喜欢的音乐";
        h0x.y1x(this.constructor, "itemchange", {data: this.yM9D(q0x)});
        return q0x
    };
    G1x.fu3x.A1x({element: p0x.ht4x, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c0x = NEJ.P, fh3x = NEJ.R, bo1x = NEJ.F, Y1x = NEJ.O, G1x = c0x("nej.ut"), h0x = c0x("nej.v"),
        k0x = c0x("nej.u"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), b0x, K1x;
    p0x.eY3x({
        "program-get": {
            url: "/api/dj/program/detail", format: function (P1x) {
                return P1x.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e0x) {
                e0x.data.limit = 1e3;
                delete e0x.data.id
            }, format: function (P1x, e0x) {
                var buo5t = [], ou6o = P1x.programs;
                if (ou6o) {
                    for (var i = 0, l = ou6o.length; i < l; i++) {
                        if (ou6o[i].programFeeType < 10 || ou6o[i].buyed) {
                            buo5t.push(ou6o[i])
                        }
                    }
                }
                return buo5t
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (P1x, e0x) {
                return P1x.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e0x) {
                e0x.ext = e0x.data;
                e0x.data = {id: e0x.ext.id};
                e0x.id = e0x.data.id
            }, format: function (P1x, e0x) {
                n0x.X1x.M1x({tip: "收藏成功"});
                var q0x = e0x.ext;
                q0x.subscribedCount++;
                q0x.subscribed = !0;
                return q0x
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.py6s, "listchange", d0x)
            }, onmessage: function () {
                var mb5g = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (cd1x) {
                    n0x.X1x.M1x({type: 2, tip: mb5g[cd1x] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d0x, e0x) {
                h0x.y1x(p0x.py6s, "listchange", d0x)
            }, onmessage: function () {
                var mb5g = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (cd1x) {
                    l0x.bcl9c({txt: mb5g[cd1x] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e0x) {
                var q0x = this.eo3x(e0x.data.id) || Y1x;
                e0x.ext = (q0x.listenerCount || 0) + 1
            }, format: function (P1x, e0x) {
                var q0x = this.eo3x(e0x.data.id);
                if (!!q0x) {
                    q0x.listenerCount = Math.max(e0x.ext, q0x.listenerCount || 0)
                }
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.py6s, "itemchange", {attr: "playCount", data: this.eo3x(e0x.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e0x) {
                e0x.data = {threadId: "A_DJ_1_" + e0x.id}
            }, format: function (P1x, e0x) {
                var q0x = e0x.ext.data || this.eo3x(e0x.id);
                q0x.liked = true;
                q0x.likedCount++;
                e0x.ext.data = q0x;
                try {
                    top.player.setLike(q0x)
                } catch (e) {
                }
                return q0x
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.py6s, "itemchange", {attr: "likedCount", data: e0x.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e0x) {
                e0x.data = {threadId: "A_DJ_1_" + e0x.id}
            }, format: function (P1x, e0x) {
                var q0x = e0x.ext.data || this.eo3x(e0x.id);
                q0x.liked = false;
                q0x.likedCount--;
                e0x.ext.data = q0x;
                try {
                    top.player.setLike(q0x)
                } catch (e) {
                }
                return q0x
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.py6s, "itemchange", {attr: "likedCount", data: e0x.ext.data})
            }
        }
    });
    p0x.py6s = NEJ.C();
    b0x = p0x.py6s.O1x(p0x.he4i);
    b0x.cxF0x = function () {
        var cY2x = GUser.userId;
        this.kG5L({limit: 1001, key: "program_fav-" + cY2x, data: {offset: 0, limit: 1e3, uid: cY2x}})
    };
    b0x.cxG0x = function (cO2x) {
        var ph6b = cO2x[this.uM8E];
        l0x.cui9Z(4, function (Q1x) {
            Q1x.uc8U("track_program-" + ph6b, cO2x.songs)
        });
        delete cO2x.songs;
        var bI1x = cO2x.mainSong;
        l0x.cui9Z(4, function (Q1x) {
            Q1x.uc8U("track_program_main-" + ph6b, !bI1x ? [] : [bI1x])
        });
        cO2x.mainSong = (bI1x || Y1x).id
    };
    b0x.cxH0x = function (D1x) {
        var cO2x = this.eo3x(D1x), cY2x = localCache.UP6J("host.profile.userId");
        return !!cO2x && cO2x.dj.userId == cY2x
    };
    b0x.cxI0x = function (D1x) {
        return !1
    };
    b0x.bcn9e = function (q0x) {
        h0x.y1x(this.constructor, "itemchange", {attr: "detail", data: this.yM9D(q0x)});
        return q0x
    };
    b0x.cum9d = function (D1x) {
        this.ch1x("program-update-count", {data: {id: D1x}})
    };
    l0x.buY5d = function (e0x) {
        var Q1x = p0x.py6s.A1x({
            onitemadd: function () {
                (e0x.onsuccess || bo1x)()
            }, onerror: function () {
                (e0x.onerror || bo1x)()
            }
        });
        if (e0x.data.liked) {
            Q1x.QZ5e(e0x.data)
        } else {
            Q1x.xA9r(e0x.data)
        }
    };
    b0x.xA9r = function (cO2x) {
        if (!l0x.hk4o()) return;
        var cr1x = {ext: {}};
        if (k0x.kW5b(cO2x)) {
            cr1x.id = cO2x.id;
            cr1x.ext.data = cO2x
        } else {
            cr1x.id = cO2x
        }
        this.ch1x("program-like", cr1x)
    };
    b0x.QZ5e = function (cO2x) {
        if (!l0x.hk4o()) return;
        var cr1x = {ext: {}};
        if (k0x.kW5b(cO2x)) {
            cr1x.id = cO2x.id;
            cr1x.ext.data = cO2x
        } else {
            cr1x.id = cO2x
        }
        this.ch1x("program-unlike", cr1x)
    };
    G1x.fu3x.A1x({element: p0x.py6s, event: ["listchange", "itemchange"]})
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, fh3x = NEJ.R, G1x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        w1x = c0x("nej.j"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), l0x = c0x("nm.x"), J1x = "playlist-tracks_",
        l0x = c0x("nm.x"), b0x;
    p0x.eY3x({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e0x) {
                e0x.data.c = JSON.stringify([{id: e0x.data.id}])
            }, format: function (P1x, e0x) {
                var be1x = l0x.Fn1x(P1x.songs[0]);
                be1x.privilege = P1x.privileges[0];
                return be1x
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e0x) {
                e0x.data.n = 1e3
            }, format: function (P1x, e0x) {
                var gR4V = [];
                this.rS7L.bcn9e(P1x.playlist);
                k0x.bb1x(P1x.playlist.tracks, function (bI1x, r0x) {
                    var bvM5R = l0x.Fn1x(bI1x);
                    bvM5R.privilege = P1x.privileges[r0x];
                    gR4V.push(bvM5R)
                }, this);
                return gR4V
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (P1x, e0x) {
                var gR4V = [];
                k0x.bb1x(P1x.songs, function (be1x) {
                    gR4V.push(l0x.Fn1x(be1x))
                });
                return gR4V
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e0x) {
                var bu1x = {}, j0x = e0x.data, cud9U = this.gV4Z(e0x.key) || [];
                Fy1x = [];
                k0x.bb1x(cud9U, function (bI1x) {
                    var D1x = k0x.kW5b(bI1x) ? bI1x.id : bI1x;
                    bu1x[D1x] = true
                });
                e0x.ext = [];
                k0x.bb1x(j0x.tracks, function (bI1x) {
                    var D1x = k0x.kW5b(bI1x) ? bI1x.id : bI1x;
                    if (!bu1x[D1x]) {
                        Fy1x.push(D1x);
                        bu1x[D1x] = true;
                        e0x.ext.push(bI1x)
                    }
                });
                j0x.trackIds = JSON.stringify(Fy1x);
                j0x.op = "add";
                if (!Fy1x.length) {
                    e0x.value = {code: 502}
                }
            }, format: function (P1x, e0x) {
                n0x.X1x.M1x({tip: "已添加至歌单"});
                var mA5F = this.rS7L.eo3x(e0x.data.pid);
                if (!!P1x.coverImgUrl) mA5F.coverImgUrl = P1x.coverImgUrl;
                k0x.mq5v(e0x.ext, function (bI1x) {
                    this.xa9R(e0x, k0x.kW5b(bI1x) ? bI1x : null);
                    if (!!mA5F) mA5F.trackCount++
                }, this);
                h0x.y1x(p0x.ht4x, "itemchange", {data: mA5F || {}, cmd: "add"});
                this.y1x("onaddsuccess");
                return null
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.vv8n, "listchange", {key: e0x.key, action: "refresh"});
                var ph6b = e0x.data.pid, co1x = this.jp4t(e0x.key)
            }, onmessage: function () {
                var mb5g = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (cd1x) {
                    setTimeout(function () {
                        n0x.X1x.M1x({tip: mb5g[cd1x] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e0x) {
                var j0x = e0x.data;
                e0x.ext = j0x.trackIds;
                j0x.trackIds = JSON.stringify(j0x.trackIds);
                j0x.op = "del"
            }, format: function (P1x, e0x) {
                var mA5F = this.rS7L.eo3x(e0x.data.pid);
                k0x.bb1x(e0x.ext, function (D1x) {
                    this.bjp1x({id: D1x, key: "track_playlist-" + e0x.data.pid}, !0);
                    if (!!mA5F) mA5F.trackCount = Math.max(0, mA5F.trackCount - 1)
                }, this);
                h0x.y1x(p0x.ht4x, "itemchange", {data: mA5F || {}, cmd: "del"});
                return null
            }, finaly: function (d0x, e0x) {
                h0x.y1x(p0x.vv8n, "listchange", {key: e0x.key, action: "refresh"})
            }, onmessage: function (cd1x) {
                l0x.bcl9c({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (P1x, e0x) {
                return this.bwd5i.bcn9e(P1x.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (P1x, e0x) {
                var i0x = [];
                if (e0x.data.type == -1) {
                    if (P1x.weekData && P1x.weekData.length) {
                        e0x.data.type = 1
                    } else {
                        e0x.data.type = 0
                    }
                }
                if (e0x.data.type == 1) {
                    i0x = this.bwf5k(P1x.weekData)
                } else {
                    i0x = this.bwf5k(P1x.allData)
                }
                return i0x
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (P1x, e0x) {
                var nn6h = [], i0x = P1x.recommend || [];
                k0x.bb1x(i0x, function (be1x, r0x) {
                    nn6h.push({
                        action: "recommendimpress",
                        json: {alg: be1x.alg, scene: "user-song", position: r0x, id: be1x.id}
                    })
                });
                this.ky5D.Ue6Y(nn6h);
                e0x.limit = i0x.length;
                return i0x
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            }, format: function (o0x, e0x) {
                return o0x
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    p0x.vv8n = NEJ.C();
    b0x = p0x.vv8n.O1x(p0x.he4i);
    b0x.cq1x = function () {
        this.cu1x();
        this.rS7L = p0x.ht4x.A1x();
        this.bwd5i = p0x.py6s.A1x();
        this.ky5D = p0x.hY4c.A1x()
    };
    b0x.bwf5k = function (i0x) {
        var o0x = [], fl3x = 0;
        k0x.bb1x(i0x, function (q0x, r0x) {
            var be1x = l0x.Fn1x(q0x.song);
            if (r0x == 0) {
                fl3x = q0x.score
            }
            be1x.max = fl3x;
            be1x.playCount = q0x.playCount;
            be1x.score = q0x.score;
            o0x.push(be1x)
        });
        return o0x
    };
    G1x.fu3x.A1x({element: p0x.vv8n, event: ["listchange"]})
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
    var bwk5p;
    var tv8n = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cuc9T = 0;
    var bwx5C = 0;
    var bwD5I = 1;
    var bwE5J = 0;
    var bsq4u = "";
    var bwS5X = "";
    var bwT5Y = "";
    var TA5F = "";
    var Tw5B = "";
    var bpI3x = "";
    var bxs5x = 0;
    var bxt5y = "";
    var JL2x = "";
    var BC0x = 0;
    var boN3x = ntes_get_domain();
    var boh3x = null;
    var cxJ0x = "//analytics.163.com";
    var ctZ9Q = function () {
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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + boN3x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + boN3x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + boN3x
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

    var ctX9O = 0;
    var Ro5t = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Ro5t))
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
        var a = (1 << Ro5t) - 1;
        for (var b = 0; b < d.length * Ro5t; b += Ro5t) {
            c[b >> 5] |= (d.charCodeAt(b / Ro5t) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = ctX9O ? "0123456789ABCDEF" : "0123456789abcdef";
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
        TA5F = "-";
        bpI3x = "-";
        Tw5B = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            TA5F = b.width + "x" + b.height;
            bpI3x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                TA5F = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Tw5B = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Tw5B = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bxs5x = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cxL0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || ctZ9Q;
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
        var e = k || bwk5p;
        bsq4u = escape(a || document.location);
        bwS5X = escape(m || document.title);
        bwT5Y = l === true ? "" : escape(l || document.referrer);
        bxt5y = ntes_get_flashver();
        var b = (new Date).getTime();
        if (boh3x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            boh3x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bsq4u.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (boh3x) {
                tv8n = fetch_visitor_hash();
                bwx5C = 1;
                ntes_set_cookie_long("_ntes_nnid", tv8n + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tv8n)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            tv8n = h.substr(0, o);
            BC0x = h.substr(o + 1, p - o - 1);
            if (BC0x == 0) {
                BC0x = (new Date).getTime();
                f = true
            }
            if (!tv8n) {
                tv8n = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tv8n + "," + BC0x);
                ntes_set_cookie_long("_ntes_nuid", tv8n)
            }
            if (BC0x != 0 && b - BC0x > 365 * 86400 * 1e3) {
                BC0x = 0;
                ntes_set_cookie_long("_ntes_nnid", tv8n + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tv8n)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        JL2x = c("P_INFO", "P_OINFO");
        JL2x = JL2x ? JL2x.substr(0, JL2x.indexOf("|")) : "";
        bwE5J = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tv8n, "&_nvtm=", cuc9T, "&_nvsf=", bwD5I, "&_nvfi=", bwx5C, "&_nlag=", Tw5B, "&_nlmf=", bxs5x, "&_nres=", TA5F, "&_nscd=", bpI3x, "&_nstm=", bwE5J, "&_nurl=", bsq4u, "&_ntit=", bwS5X, "&_nref=", bwT5Y, "&_nfla=", bxt5y, "&_nssn=", JL2x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bwD5I = 0;
        neteaseTracker.callback = null
    }

    bwk5p = "iad";
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
            this.j0x = new r.init;
            this.byt6n = 0
        }, Tr5w: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.j0x.concat(a);
            this.byt6n += a.sigBytes
        }, Be0x: function (a) {
            var c = this.j0x, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.byr6l, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.byv6p(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.j0x = this.j0x.clone();
            return a
        }, byr6l: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.blD2x()
        }, update: function (a) {
            this.Tr5w(a);
            this.Be0x();
            return this
        }, finalize: function (a) {
            a && this.Tr5w(a);
            return this.To5t()
        }, blockSize: 16, bmH3x: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, ctO9F: function (a) {
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
            var l = d.words, p = d.sigBytes, t = this.bu1x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bu1x, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bu1x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
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
        blD2x: function () {
            this.dN2x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, byv6p: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dN2x.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
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
        }, To5t: function () {
            var b = this.j0x, n = b.words, a = 8 * this.byt6n, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Be0x();
            b = this.dN2x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dN2x = this.dN2x.clone();
            return b
        }
    });
    t.MD5 = v.bmH3x(r);
    t.HmacMD5 = v.ctO9F(r)
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
                return this.create(this.blv2x, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.ctN9E, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.byI6C = e;
                this.J1x = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.blD2x()
            }, process: function (e) {
                this.Tr5w(e);
                return this.Be0x()
            }, finalize: function (e) {
                e && this.Tr5w(e);
                return this.To5t()
            }, keySize: 4, ivSize: 4, blv2x: 1, ctN9E: 2, bmH3x: function (e) {
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
        To5t: function () {
            return this.Be0x(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.byJ6D;
        c ? this.byJ6D = u : c = this.byL6F;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.byM6G = e;
            this.byJ6D = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.byM6G, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.byL6F = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.byM6G, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.byL6F = d
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
            if (this.byI6C == this.blv2x) var c = a.createEncryptor; else c = a.createDecryptor, this.byr6l = 1;
            this.eQ3x = c.call(a, this, b && b.words)
        }, byv6p: function (a, b) {
            this.eQ3x.processBlock(a, b)
        }, To5t: function () {
            var a = this.cfg.padding;
            if (this.byI6C == this.blv2x) {
                a.pad(this.j0x, this.blockSize);
                var b = this.Be0x(!0)
            } else b = this.Be0x(!0), a.unpad(b);
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
            b = this.baL8D(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, baL8D: function (a, b) {
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
            c = this.baL8D(c, l.format);
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
        blD2x: function () {
            for (var a = this.J1x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.ctK9B = d + 6) + 1), e = this.ctJ9A = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.ctI9z = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.byO6I(a, b, this.ctJ9A, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.byO6I(a, c, this.ctI9z, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, byO6I: function (a, b, c, d, e, j, l, f) {
            for (var m = this.ctK9B, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
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
    u.AES = p.bmH3x(d)
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

        //liguoqinjim
        h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f);
        console.log("liguoqinjim");
        console.log("d=" + d);
        console.log(h);
        return h;
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c0x = NEJ.P, dU2x = c0x("nej.g"), w1x = c0x("nej.j"), k0x = c0x("nej.u"), RB5G = c0x("nm.x.ek");
    RB5G.emj = {
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
    RB5G.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c0x = NEJ.P, dU2x = c0x("nej.g"), w1x = c0x("nej.j"), k0x = c0x("nej.u"), RB5G = c0x("nm.x.ek"),
        l0x = c0x("nm.x");
    if (w1x.bp1x.redefine) return;
    window.GEnc = true;
    var blb2x = function (ctF9w) {
        var o0x = [];
        k0x.bb1x(ctF9w, function (ctD9u) {
            o0x.push(RB5G.emj[ctD9u])
        });
        return o0x.join("")
    };
    var ctC9t = w1x.bp1x;
    w1x.bp1x = function (W1x, e0x) {
        var j0x = {}, e0x = NEJ.X({}, e0x), lS5X = W1x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(W1x) && !(e0x.headers && e0x.headers[dU2x.yj9a] == dU2x.Co0x) && !e0x.noEnc) {
            if (lS5X != -1) {
                j0x = k0x.hx4B(W1x.substring(lS5X + 1));
                W1x = W1x.substring(0, lS5X)
            }
            if (e0x.query) {
                j0x = NEJ.X(j0x, k0x.fx3x(e0x.query) ? k0x.hx4B(e0x.query) : e0x.query)
            }
            if (e0x.data) {
                j0x = NEJ.X(j0x, k0x.fx3x(e0x.data) ? k0x.hx4B(e0x.data) : e0x.data)
            }
            j0x["csrf_token"] = w1x.gQ4U("__csrf");
            W1x = W1x.replace("api", "weapi");
            e0x.method = "post";
            delete e0x.query;
            var bzl6f = window.asrsea(JSON.stringify(j0x), blb2x(["流泪", "强"]), blb2x(RB5G.md), blb2x(["爱心", "女孩", "惊恐", "大笑"]));

            //liguoqinjim
            var liguoqinjim1 = k0x.db2x({params: bzl6f.encText, encSecKey: bzl6f.encSecKey})
            e0x.data = liguoqinjim1
        }
        ctC9t(W1x, e0x)
    };
    w1x.bp1x.redefine = true
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
    var c0x = NEJ.P, a9j = c0x("nej.e"), dh2x = c0x("nej.p"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        w1x = c0x("nej.j"), dr2x = c0x("nm.u"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), n0x = c0x("nm.l"),
        bkq2x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j0x = {
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
        }, ctv9m = function () {
            if (h0x && h0x.y1x) {
                h0x.dispatchEventalias = h0x.y1x
            }
        };
    ctv9m();
    l0x.bkk2x = function (bI1x) {
        if (!bI1x || bI1x.copyrightId === undefined || !!bI1x.program) return false;
        if (window.GAbroad) {
            bI1x.fee = 0;
            return true
        }
        if (bI1x.status < 0) return true;
        var RD5I;
        if (typeof GCopyrights !== "undefined") RD5I = GCopyrights;
        try {
            if (!RD5I && !!top.GCopyrights) RD5I = top.GCopyrights
        } catch (e) {
        }
        if (RD5I) {
            var r0x = k0x.cV2x(RD5I, bI1x.copyrightId);
            if (r0x >= 0) return true
        }
        return false
    };
    l0x.bka2x = function () {
        var yT9K = /^\/m\/(song|album|artist|playlist|dj|search)\?/, vw8o = {
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
        }, ctu9l = {
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
        var ctt9k = function (J1x, j0x, RE5J) {
            switch (J1x) {
                case"event":
                    j0x = j0x.split("|");
                    return "/event?id=" + j0x[0] + "&uid=" + j0x[1];
                case"searchsong":
                case"searchlyric":
                    var t1x = J1x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j0x) + "&type=" + t1x;
                case"toplist":
                    return "/discover/toplist?id=" + j0x + "&_hash=songlist-" + RE5J;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + RE5J;
                    ;
                case"record":
                    j0x = j0x.split("|");
                    return "/user/songs/rank?id=" + j0x[0] + "&cat=" + j0x[1];
                    break;
                default:
                    return "/" + J1x + "?id=" + j0x + "&_hash=songlist-" + RE5J
            }
        };
        return function (dP2x, RE5J) {
            if (!dP2x) return null;
            var Jn2x = dP2x.fid || (dP2x.type != 18 ? dP2x.type : null), bjL2x = dP2x.fdata || dP2x.rid,
                bzS6M = dP2x.page || dP2x.fhref;
            var J1x = vw8o[Jn2x];
            if (!J1x) {
                var wA9r = (bzS6M || "").match(yT9K);
                if (wA9r) J1x = wA9r[1]
            }
            if (!J1x) return null;
            return {title: ctu9l[J1x], link: !vw8o[Jn2x] ? bzS6M : ctt9k(J1x, bjL2x, RE5J), fid: Jn2x, fdata: bjL2x}
        }
    }();
    l0x.bjx1x = function (kY5d) {
        var df2x = kY5d;
        if (typeof GUser !== "undefined" && GUser.userId > 0) df2x = GUser;
        return df2x
    };
    l0x.hk4o = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l0x.JV3x = function () {
        var yT9K = /#(.*?)$/;
        return function (gq3x) {
            var iZ4d = gq3x === false ? location : top.location;
            return yT9K.test(iZ4d.href) ? RegExp.$1 : ""
        }
    }();
    l0x.AZ0x = function () {
        var AW0x = a9j.cX2x("audio"), ctn8f = AW0x.canPlayType && AW0x.canPlayType("audio/mpeg");
        if (ctn8f) return 2;
        var ctm8e = l0x.biM1x().supported;
        if (ctm8e) return 1;
        return 0
    };
    l0x.biM1x = function () {
        var fM3x, biL1x = !1, biu1x = "";
        if (dh2x.dk2x.browser == "ie") {
            try {
                fM3x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                fM3x = null
            }
            if (fM3x) {
                biL1x = !0;
                biu1x = fM3x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                fM3x = navigator.plugins["Shockwave Flash"];
                if (fM3x) {
                    biL1x = !0;
                    biu1x = fM3x.description
                }
            }
        }
        return {supported: biL1x, version: biu1x}
    };
    l0x.qt7m = function () {
        return "网易云音乐"
    };
    l0x.ctd8V = function () {
        return j0x
    };
    l0x.bAJ6D = function (cJ2x) {
        var D1x = j0x[cJ2x];
        return D1x == null ? "" : bkq2x.replace("{ID}", D1x)
    };
    l0x.wx9o = function (bl1x, dK2x, JW3x) {
        if (!bl1x) return "";
        if (!!JW3x) {
            bl1x = l0x.ctb8T(bl1x)
        }
        return l0x.Ti5n(l0x.cta8S(bl1x, dK2x))
    };
    l0x.bib1x = function () {
        var RI5N = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bhA1x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, csZ8R = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, csX8P = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var csW8O = function (du2x, bhp1x) {
            du2x = JY3x(du2x);
            if (!!bhp1x) {
                du2x = du2x.replace(RI5N.MLINE, "\n\n").replace(RI5N.LING, "</br>")
            }
            du2x = l0x.Ti5n(du2x);
            return du2x
        };
        var JY3x = function (bl1x) {
            return k0x.Em1x(csZ8R, bl1x)
        };
        return function (du2x, e0x, eh2x) {
            e0x = e0x || {};
            eh2x = eh2x || {};
            eh2x.actHash = {};
            var csV8N = !!e0x.parseLink, csR8J = !!e0x.parseAct, csM8E = e0x.linkTpl || bhA1x.LINK,
                csL8D = e0x.atTpl || bhA1x.AT, csI8A = e0x.actTpl || bhA1x.ACT, bhp1x = !!e0x.keepSpace,
                bgE0x = e0x.linkKlass || "s-fc7";
            cxR0x = e0x.actBiJson || "";
            if (!du2x) return "";
            du2x = du2x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kI5N = csX8P[csV8N + 2 * csR8J], cS2x = RI5N[kI5N], bs1x = null, lp5u = null, gJ4N = 0, cxS0x = "",
                cxT0x = "";
            var zl9c = [];
            cS2x.lastIndex = 0;
            while (bs1x = cS2x.exec(du2x)) {
                var fd3x = {html: "", before: bs1x.index - 1, after: bs1x.index + bs1x[0].length};
                if (bs1x[1]) {
                    var lp5u = bs1x[2].replace(/[^\x00-\xff]/g, "**");
                    if (lp5u.length < 4 || lp5u.length > 32) {
                    } else {
                        var RS5X = a9j.ep3x(csL8D);
                        fd3x.html = a9j.bW1x(RS5X, {
                            value: JY3x(bs1x[2]),
                            url: encodeURI("/user/home?nickname=" + bs1x[2]),
                            klass: bgE0x
                        });
                        zl9c.push(fd3x)
                    }
                } else if (bs1x.length > 8 && bs1x[4]) {
                    var RS5X = a9j.ep3x(csM8E);
                    fd3x.html = a9j.bW1x(RS5X, {value: JY3x(bs1x[4]), url: encodeURI(bs1x[4]), klass: bgE0x});
                    zl9c.push(fd3x)
                } else {
                    var bCI7B = kI5N == "ACT_NOLINK" ? 4 : 9;
                    var RS5X = a9j.ep3x(csI8A);
                    fd3x.html = a9j.bW1x(RS5X, {value: JY3x(bs1x[bCI7B]), klass: bgE0x});
                    zl9c.push(fd3x);
                    eh2x.actHash[bs1x[bCI7B].slice(1, -1)] = true
                }
            }
            var csD8v = zl9c.length, kY5d = {before: du2x.length - 1, after: 0}, beA9r = "";
            for (var i = 0; i <= csD8v; i++) {
                var io4s, gG4K;
                io4s = (zl9c[i - 1] || kY5d).after;
                gG4K = (zl9c[i] || kY5d).before;
                if (gG4K >= io4s && io4s >= 0 && gG4K <= du2x.length - 1) {
                    beA9r += csW8O(du2x.substring(io4s, gG4K + 1), bhp1x)
                }
                if (zl9c[i]) {
                    beA9r += zl9c[i].html
                }
            }
            return beA9r
        }
    }();
    l0x.ctb8T = function () {
        var cS2x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bl1x) {
            return (bl1x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cS2x, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l0x.cta8S = function () {
        var cS2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eB3x = function (lp5u, dK2x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lp5u) + '" class="' + (dK2x || "") + '">@' + lp5u + "</a>"
        };
        return function (bl1x, dK2x) {
            return (bl1x || "").replace(cS2x, function ($0, $1) {
                return eB3x($1, dK2x)
            })
        }
    }();
    l0x.Ti5n = function () {
        var cS2x = /\[(.*?)\]/g;
        return function (bl1x) {
            return (bl1x || "").replace(cS2x, function ($1, $2) {
                var W1x = l0x.bAJ6D($2);
                return !W1x ? $1 : '<img src="' + W1x + '"/>'
            })
        }
    }();
    l0x.yH9y = function (F1x, dK2x) {
        a9j.bz1x(F1x, dK2x) ? a9j.v1x(F1x, dK2x) : a9j.x1x(F1x, dK2x)
    };
    l0x.Kd3x = function (cH2x, jL5Q) {
        cH2x = a9j.z1x(cH2x);
        jL5Q = a9j.z1x(jL5Q);
        if (!cH2x || !jL5Q) return !1;
        for (jL5Q = jL5Q.parentNode; !!jL5Q && jL5Q != cH2x; jL5Q = jL5Q.parentNode) ;
        return jL5Q == cH2x
    };
    l0x.kQ5V = function () {
        var bCS7L = function (gs3x) {
            return (gs3x < 10 ? "0" : "") + gs3x
        };
        return function (jK4O) {
            jK4O = parseInt(jK4O) || 0;
            if (!jK4O) return "00:00";
            var wH9y = Math.floor(jK4O % 60), csC8u = Math.floor(jK4O / 60);
            return bCS7L(csC8u) + ":" + bCS7L(wH9y)
        }
    }();
    l0x.wJ9A = function (ft3x, uU8M) {
        if (!ft3x || ft3x.length == 0) return "";
        uU8M = uU8M || "/";
        var bs1x = [];
        for (var i = ft3x.length - 1; i >= 0; i--) {
            bs1x.unshift(ft3x[i].name)
        }
        return bs1x.join(uU8M)
    };
    l0x.rL7E = function () {
        var Sg5l = function (hp4t, dK2x, cH2x, Ta5f) {
            var eB3x = Ta5f ? l0x.bDA7t : k0x.dI2x;
            if (!hp4t || !hp4t.name) return "";
            if (!hp4t.id) return '<span class="' + dK2x + '">' + eB3x(hp4t.name) + "</span>";
            return "<a" + (cH2x ? ' target="_blank"' : "") + ' class="' + dK2x + '" href="/artist?id=' + hp4t.id + '" hidefocus="true">' + eB3x(hp4t.name) + "</a>"
        };
        return function (ft3x, T1x, uU8M, cH2x, bDC7v, Ta5f) {
            if (!ft3x || !ft3x.length) return "";
            uU8M = uU8M || "/";
            T1x = T1x || "";
            Ki3x = "";
            var eM3x = [];
            for (var i = 0, i0x = [], rQ7J = [], fo3x; i < ft3x.length; ++i) {
                eM3x.push(ft3x[i].name);
                if (!ft3x[i] || ft3x[i].id <= 0) {
                    rQ7J.push(ft3x[i]);
                    continue
                }
                if (k0x.gb3x(T1x)) {
                    fo3x = T1x(ft3x[i])
                } else {
                    fo3x = Sg5l(ft3x[i], T1x, cH2x, Ta5f)
                }
                if (fo3x && bDC7v && ft3x[i].tns && ft3x[i].tns.length > 0) {
                    Ki3x = k0x.dI2x(ft3x[i].tns[0]);
                    fo3x += '<span class="s-fc8" title="' + Ki3x + '"> - (' + Ki3x + ")</span>"
                }
                !!fo3x && i0x.push(fo3x)
            }
            for (var i = 0, fo3x; i < rQ7J.length; ++i) {
                if (k0x.gb3x(T1x)) {
                    fo3x = T1x(rQ7J[i])
                } else {
                    fo3x = Sg5l(rQ7J[i], T1x, cH2x, Ta5f)
                }
                if (fo3x && bDC7v && rQ7J[i].tns && rQ7J[i].tns.length > 0) {
                    Ki3x = k0x.dI2x(rQ7J[i].tns[0]);
                    fo3x += '<span class="s-fc8" title="' + Ki3x + '"> - (' + Ki3x + ")</span>"
                }
                !!fo3x && i0x.push(fo3x)
            }
            return '<span title="' + eM3x.join(uU8M) + '">' + i0x.join(uU8M) + "</span>"
        }
    }();
    l0x.xe9V = function (fa3x, oB6v) {
        oB6v = oB6v || "86";
        return !!fa3x && (oB6v == "86" ? /^\d{11}$/ : /^\d+$/).test(fa3x)
    };
    l0x.cxV0x = function (fa3x) {
        if (!l0x.xe9V(fa3x)) return fa3x;
        return fa3x.substring(0, 3) + "****" + fa3x.substr(7)
    };
    l0x.jq4u = function () {
        var cS2x = /^\s+$/g;
        return function (hW4a) {
            return !hW4a || cS2x.test(hW4a)
        }
    }();
    l0x.Sm5r = function () {
        var btw4A = /[^\x00-\xfff]/g;
        return function (hW4a) {
            var csv8n = hW4a.match(btw4A) || [], do2x = csv8n.length;
            return hW4a.length + do2x
        }
    }();
    l0x.zN0x = function () {
        var btw4A = /[^\x00-\xfff]/;
        return function (hW4a, fv3x) {
            for (var i = 0, len = hW4a.length; i < len && fv3x > 0; i++) {
                if (btw4A.test(hW4a.charAt(i))) {
                    fv3x -= 2;
                    if (fv3x < 0) {
                        break
                    }
                } else {
                    fv3x -= 1
                }
            }
            return hW4a.substring(0, i)
        }
    }();
    l0x.zP0x = function (hW4a, fv3x, OB4F) {
        fv3x = fv3x || 10;
        OB4F = OB4F || nej.p.dk2x.engine == "trident" && parseInt(nej.p.dk2x.release) < 5;
        if (OB4F && l0x.Sm5r(hW4a) > fv3x) {
            return l0x.zN0x(hW4a, fv3x) + "..."
        } else {
            return hW4a
        }
    };
    l0x.bEI7B = function (f0x) {
        return f0x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f0x.type || f0x.href || ~f0x.tabIndex)
    };
    l0x.csp8h = function (d0x, cH2x) {
        if (!d0x || !cH2x) return !0;
        var f0x, t1x = d0x.type.toLowerCase();
        if (t1x == "mouseout") {
            f0x = d0x.relatedTarget || d0x.toElement
        } else if (t1x == "mouseover") {
            f0x = d0x.relatedTarget || d0x.fromElement
        }
        return !f0x || f0x !== cH2x && !l0x.Kd3x(cH2x, f0x)
    };
    l0x.se7X = function () {
        Q1x = {};
        return function (f0x, dL2x) {
            var D1x = a9j.la5f(f0x), J1x = "hover-" + D1x;
            if (!dL2x || !D1x || !!Q1x[J1x]) return;
            Q1x[J1x] = !0;
            h0x.s0x(D1x, "mouseover", function () {
                var brO4S = a9j.I1x(f0x, "hshow") || [];
                var brp4t = a9j.I1x(f0x, "icn-dislike") || [];
                a9j.x1x(D1x, "z-hover");
                a9j.Z1x(brO4S[0], "display", "block");
                a9j.Z1x(brp4t[0], "display", "block")
            });
            h0x.s0x(D1x, "mouseout", function () {
                var brO4S = a9j.I1x(f0x, "hshow") || [];
                var brp4t = a9j.I1x(f0x, "icn-dislike") || [];
                a9j.v1x(D1x, "z-hover");
                a9j.Z1x(brO4S[0], "display", "none");
                a9j.Z1x(brp4t[0], "display", "none")
            })
        }
    }();
    l0x.bES7L = function () {
        var bu1x = {
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
        return function (hW4a) {
            return k0x.Em1x(bu1x, hW4a)
        }
    }();
    l0x.xN9E = function (by1x) {
        if (k0x.GO2x(by1x)) by1x = by1x.getTime();
        var fT3x = new Date, nr6l = fT3x.getTime() - by1x;
        if (nr6l <= 6e4) return "刚刚";
        var qY7R = fT3x.getHours() * 36e5 + fT3x.getMinutes() * 6e4 + fT3x.getSeconds() * 1e3;
        if (nr6l <= qY7R) {
            if (nr6l < 36e5) {
                var So5t = Math.floor(nr6l / 6e4);
                return So5t + "分钟前"
            }
            return k0x.iV4Z(by1x, "HH:mm")
        } else {
            if (nr6l < qY7R + 864e5) {
                return "昨天" + k0x.iV4Z(by1x, "HH:mm")
            } else {
                var gt3x = fT3x.getFullYear(), bjh1x = new Date(gt3x, 0, 1);
                var qY7R = fT3x.getTime() - bjh1x.getTime();
                if (nr6l < qY7R) {
                    return k0x.iV4Z(by1x, "M月d日 HH:mm")
                }
                return k0x.iV4Z(by1x, "yyyy年M月d日")
            }
        }
    };
    l0x.csk8c = function (by1x) {
        if (k0x.GO2x(by1x)) by1x = by1x.getTime();
        var fT3x = new Date, nr6l = fT3x.getTime() - by1x;
        var qY7R = fT3x.getHours() * 36e5 + fT3x.getMinutes() * 6e4 + fT3x.getSeconds() * 1e3;
        if (nr6l <= qY7R) {
            return "今天" + k0x.iV4Z(by1x, "HH:mm")
        } else {
            if (nr6l < qY7R + 864e5) {
                return "昨天" + k0x.iV4Z(by1x, "HH:mm")
            } else {
                return k0x.iV4Z(by1x, "yy-MM-dd HH:mm")
            }
        }
    };
    l0x.csj8b = function (by1x) {
        if (k0x.GO2x(by1x)) by1x = by1x.getTime();
        var fT3x = new Date, nr6l = fT3x.getTime() - by1x;
        if (nr6l <= 6e4) return "刚刚";
        var qY7R = fT3x.getHours() * 36e5 + fT3x.getMinutes() * 6e4 + fT3x.getSeconds() * 1e3;
        if (nr6l <= qY7R) {
            if (nr6l < 36e5) {
                var So5t = Math.floor(nr6l / 6e4);
                return So5t + "分钟前"
            }
            return k0x.iV4Z(by1x, "HH:mm")
        } else {
            if (nr6l < qY7R + 864e5) {
                return "昨天" + k0x.iV4Z(by1x, "HH:mm")
            } else if (nr6l < qY7R + 864e5 * 6) {
                var gt3x = fT3x.getFullYear(), bjh1x = new Date(gt3x, 0, 1);
                var qY7R = fT3x.getTime() - bjh1x.getTime();
                if (nr6l < qY7R) {
                    return k0x.iV4Z(by1x, "M月d日 HH:mm")
                }
                return k0x.iV4Z(by1x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l0x.SP5U = function () {
        var cS2x = /\{(.*?)\}/gi;
        return function (pw6q, j0x) {
            return (pw6q || "").replace(cS2x, function ($1, $2) {
                var C1x = j0x[$2];
                return C1x == null ? $1 : C1x
            })
        }
    }();
    l0x.eY3x = function () {
        var bg1x = Array.prototype.slice.call(arguments, 0), pw6q = bg1x.shift();
        if (pw6q) {
            return pw6q.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bg1x.length ? bg1x[$2] : $1
            })
        }
        return ""
    };
    l0x.Kk3x = function (i0x, dK2x, lu5z) {
        return "";
        lu5z = lu5z || " - ";
        if (i0x && i0x.length) {
            return lu5z + (!!dK2x ? '<span class="' + dK2x + '">' + i0x[0] + "</span>" : i0x[0])
        }
        return ""
    };
    l0x.bFU8M = function () {
        if (window.getSelection) {
            var re7X = window.getSelection();
            if (re7X && re7X.focusNode && re7X.focusNode.tagName) {
                var AA0x = a9j.cU2x(re7X.focusNode);
                for (var i = 0, yi9Z; i < AA0x.length; ++i) {
                    yi9Z = AA0x[i].tagName;
                    if (!yi9Z) continue;
                    yi9Z = yi9Z.toLowerCase();
                    if (yi9Z == "textarea" || yi9Z == "input") return !0
                }
            }
        } else if (document.selection) {
            var cN2x = document.selection.createRange();
            if (cN2x) {
                var f0x = cN2x.parentElement();
                if (f0x && f0x.tagName) {
                    var yi9Z = f0x.tagName.toLowerCase();
                    if (yi9Z == "textarea" || yi9Z == "input") return !0
                }
            }
        }
        return !1
    };
    l0x.AN0x = function (fk3x) {
        if (/^[A-Z]\:\\/i.test(fk3x)) {
            fk3x = fk3x.split("\\")
        } else {
            fk3x = fk3x.split("/")
        }
        fk3x = fk3x[fk3x.length - 1];
        return fk3x
    };
    l0x.csi8a = function () {
        var Eg1x = [13, 17, 34, 19, 18, 21];
        return function (D1x) {
            var bs1x = (D1x || "").split("_");
            return {type: Eg1x[bs1x[2]] || -1, id: bs1x[3] || ""}
        }
    }();
    l0x.bGw8o = function (fM3x) {
        if (!fM3x) {
            return true
        }
        for (var k in fM3x) {
            return false
        }
        return true
    };
    l0x.bcI9z = function (df2x) {
        if (!df2x) {
            return ""
        }
        if (4 == df2x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (df2x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (df2x.expertTags && df2x.expertTags.length || !l0x.bGw8o(df2x.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l0x.Sx5C = function (gW4a) {
        if (!gW4a) return "";
        var do2x = gW4a.length, hB4F = [];
        hB4F[0] = do2x / 3 | 0;
        hB4F[1] = hB4F[0] + ((do2x - hB4F[0]) / 2 | 0);
        return gW4a.substring(0, hB4F[0]) + gW4a.substring(hB4F[0], hB4F[1]).replace(/\d/g, "*") + gW4a.substring(hB4F[1], do2x)
    };
    l0x.cxW0x = function (r0x, co1x) {
        return (r0x % co1x + co1x) % co1x
    };
    l0x.bGX8P = function () {
        var Eg1x = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (D1x) {
            var bs1x = (D1x || "").split("_"), o0x = {type: Eg1x[bs1x[2]] || -1, id: bs1x[3] || ""};
            if (o0x.type == "event") {
                o0x.uid = bs1x[4] || "";
                return "/" + o0x.type + "?id=" + o0x.id + "&uid=" + o0x.uid
            }
            return "/" + o0x.type + "?id=" + o0x.id
        }
    }();
    l0x.bGZ8R = function () {
        var Eg1x = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (D1x) {
            var bs1x = (D1x || "").split("_");
            return Eg1x[bs1x[2]] || "资源"
        }
    }();
    l0x.csg8Y = function (bw1x) {
        var qs = bw1x.length > 0 ? bw1x.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
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
    l0x.bHG8y = function (sS8K, Sy5D) {
        var SL5Q = 0, eg2x = new Array;
        k0x.bb1x(sS8K, function (W1x, r0x) {
            var dn2x = a9j.cX2x("img");
            dn2x.src = W1x;
            h0x.s0x(dn2x, "load", function (r0x, d0x) {
                eg2x[r0x] = 1;
                SL5Q++;
                if (SL5Q == sS8K.length) Sy5D(sS8K, eg2x)
            }.g0x(this, r0x));
            h0x.s0x(dn2x, "error", function (d0x, r0x) {
                eg2x[r0x] = 0;
                SL5Q++;
                if (SL5Q == sS8K.length) Sy5D(sS8K, eg2x)
            }.g0x(this, r0x))
        })
    };
    l0x.SJ5O = function (i0x, dG2x) {
        var o0x = [];
        k0x.bb1x(i0x, function (q0x, r0x, iw4A) {
            o0x.push(dG2x(q0x, r0x, iw4A))
        });
        return o0x
    };
    l0x.WH6B = function (i0x, dG2x, iw4A) {
        var o0x = [];
        k0x.bb1x(i0x, function (q0x, r0x) {
            if (dG2x.call(iw4A, q0x, r0x, i0x)) {
                o0x.push(q0x)
            }
        });
        return o0x
    };
    l0x.csf8X = function (bl1x) {
        return k0x.dI2x((bl1x || "").replace(/\s{2,}/g, " ").trim())
    };
    l0x.bjZ2x = function (be1x) {
        if (be1x.transNames && be1x.transNames.length) {
            return be1x.transNames[0]
        } else if (be1x.alias && be1x.alias.length) {
            return be1x.alias[0]
        }
    };
    l0x.blz2x = function (QS5X) {
        if (QS5X) {
            return QS5X.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l0x.bnU3x = function (f0x) {
        var f0x = a9j.z1x(f0x), cJ2x = f0x && f0x.getElementsByTagName("textarea")[0], J1x = a9j.u1x(f0x, "key"),
            bcT9K = a9j.u1x(f0x, "simple") == "1", csc8U = a9j.u1x(f0x, "pvnamed") == "1", csa8S = p0x.vv8n.fX3x();
        if (!(f0x && cJ2x && J1x)) return;
        var SI5N, blQ2x, SM5R;
        SI5N = a9j.I1x(a9j.z1x("m-playlist"), "j-img");
        k0x.bb1x(SI5N, function (iE4I) {
            if (!SM5R && a9j.u1x(iE4I, "key")) {
                SM5R = a9j.u1x(iE4I, "key");
                iE4I.removeAttribute("data-key")
            }
        });
        SI5N = a9j.I1x(a9j.z1x("m-playlist"), "m-info");
        k0x.bb1x(SI5N, function (iE4I) {
            if (!blQ2x && iE4I.id && iE4I.id.indexOf("auto-id-") == 0) {
                blQ2x = iE4I.id.slice(8, 12)
            }
        });
        var C1x = cJ2x.value || cJ2x.defaultValue;
        if (SM5R) {
            C1x = decodeURIComponent(k0x.crW8O(C1x, "param=" + blQ2x + SM5R))
        }
        C1x = JSON.parse(C1x);
        if (csc8U) {
            l0x.crV8N(C1x)
        }
        if (bcT9K) {
            C1x = l0x.Fn1x(C1x)
        }
        csa8S.uc8U(J1x, C1x);
        f0x.innerHTML = "";
        return J1x
    };
    l0x.crU8M = function (oE6y) {
        if (!oE6y.onbeforelistload) {
            oE6y.onbeforelistload = function (d0x) {
                d0x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oE6y.onemptylist) {
            oE6y.onemptylist = function (d0x) {
                d0x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oE6y.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oE6y
    };
    l0x.crV8N = function (gR4V) {
        k0x.bb1x(gR4V, function (bI1x) {
            bI1x.privilege = bI1x.pv;
            delete bI1x.pv
        })
    };
    l0x.Fn1x = function (hz4D) {
        if (k0x.eu3x(hz4D)) {
            var eh2x = [];
            k0x.bb1x(hz4D, function (bcT9K) {
                eh2x.push(bJS9J(bcT9K))
            });
            return eh2x
        } else {
            return bJS9J(hz4D)
        }

        function bJS9J(hz4D) {
            if (!hz4D) return null;
            var eh2x = {
                album: hz4D.al,
                alias: hz4D.alia || hz4D.ala || [],
                artists: hz4D.ar || [],
                commentThreadId: "R_SO_4_" + hz4D.id,
                copyrightId: hz4D.cp || 0,
                duration: hz4D.dt || 0,
                id: hz4D.id,
                mvid: hz4D.mv || 0,
                name: hz4D.name || "",
                cd: hz4D.cd,
                position: hz4D.no || 0,
                ringtone: hz4D.rt,
                rtUrl: hz4D.rtUrl,
                status: hz4D.st || 0,
                pstatus: hz4D.pst || 0,
                fee: hz4D.fee || 0,
                version: hz4D.v || 0,
                eq: hz4D.eq,
                songType: hz4D.t || 0,
                mst: hz4D.mst,
                score: hz4D.pop || 0,
                ftype: hz4D.ftype,
                rtUrls: hz4D.rtUrls,
                transNames: hz4D.tns,
                privilege: hz4D.privilege,
                lyrics: hz4D.lyrics
            };
            return eh2x
        }
    };
    l0x.cxX0x = function () {
        var f0x = a9j.nl6f('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f0x);
        h0x.s0x(f0x, "click", function (d0x) {
            h0x.bh1x(d0x);
            a9j.cC2x(f0x)
        })
    };
    l0x.kE5J = function (cB1x) {
        if (cB1x < 1e5) {
            return cB1x
        } else {
            return Math.floor(cB1x / 1e4) + "万"
        }
    };
    l0x.sK7D = function (cB1x, cJ2x) {
        return "<i>" + (cB1x ? "(" + cB1x + ")" : cJ2x) + "</i>"
    };
    l0x.bKQ9H = function (t1x, hu4y) {
        var e0x = {};
        if (!k0x.kW5b(hu4y)) {
            return e0x
        }
        switch (parseInt(t1x)) {
            case 17:
                e0x.title = hu4y.name;
                e0x.author = (hu4y.radio || []).name;
                e0x.picUrl = hu4y.coverUrl;
                e0x.category = hu4y.radio.category;
                break;
            case 19:
                e0x.title = hu4y.name;
                e0x.author = l0x.wJ9A(hu4y.artists);
                e0x.authors = l0x.wJ9A(hu4y.artists, " / ");
                e0x.picUrl = hu4y.picUrl;
                break;
            case 13:
                e0x.title = hu4y.name;
                e0x.author = (hu4y.creator || []).nickname;
                e0x.picUrl = hu4y.coverImgUrl;
                break;
            case 18:
                e0x.title = hu4y.name;
                e0x.author = l0x.wJ9A(hu4y.artists);
                e0x.picUrl = (hu4y.album || []).picUrl;
                break;
            case 20:
                e0x.title = hu4y.name;
                e0x.author = "";
                e0x.picUrl = hu4y.img1v1Url;
                break;
            case 21:
                e0x.title = hu4y.name;
                e0x.author = hu4y.artistName;
                e0x.authors = l0x.wJ9A(hu4y.artists, " / ");
                e0x.picUrl = hu4y.newCover || hu4y.cover;
                break;
            case 70:
                e0x.title = hu4y.name;
                e0x.author = (hu4y.dj || []).nickname;
                e0x.picUrl = hu4y.picUrl;
                e0x.category = hu4y.category;
                break;
            default:
                break
        }
        return e0x
    };
    l0x.bLf9W = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l0x.crR8J = function (eB3x, vS8K, e0x) {
        var bM1x, bg1x, o0x;
        var ju4y = null;
        var Ss5x = 0;
        if (!e0x) e0x = {};
        var SX5c = function () {
            Ss5x = e0x.leading === false ? 0 : +(new Date);
            ju4y = null;
            o0x = eB3x.apply(bM1x, bg1x);
            if (!ju4y) bM1x = bg1x = null
        };
        return function () {
            var fT3x = +(new Date);
            if (!Ss5x && e0x.leading === false) Ss5x = fT3x;
            var bcv9m = vS8K - (fT3x - Ss5x);
            bM1x = this;
            bg1x = arguments;
            if (bcv9m <= 0 || bcv9m > vS8K) {
                if (ju4y) {
                    clearTimeout(ju4y);
                    ju4y = null
                }
                Ss5x = fT3x;
                o0x = eB3x.apply(bM1x, bg1x);
                if (!ju4y) bM1x = bg1x = null
            } else if (!ju4y && e0x.trailing !== false) {
                ju4y = setTimeout(SX5c, bcv9m)
            }
            return o0x
        }
    };
    l0x.Sj5o = function (eB3x, vS8K, rm7f) {
        var ju4y, bg1x, bM1x, Sh5m, o0x;
        var SX5c = function () {
            var gJ4N = new Date - Sh5m;
            if (gJ4N < vS8K && gJ4N >= 0) {
                ju4y = setTimeout(SX5c, vS8K - gJ4N)
            } else {
                ju4y = null;
                if (!rm7f) {
                    o0x = eB3x.apply(bM1x, bg1x);
                    if (!ju4y) bM1x = bg1x = null
                }
            }
        };
        return function () {
            bM1x = this;
            bg1x = arguments;
            Sh5m = new Date;
            var bdD9u = rm7f && !ju4y;
            if (!ju4y) ju4y = setTimeout(SX5c, vS8K);
            if (bdD9u) {
                o0x = eB3x.apply(bM1x, bg1x);
                bM1x = bg1x = null
            }
            return o0x
        }
    };
    l0x.Se5j = function (f0x, hq4u) {
        if (f0x) {
            var f0x = f0x.firstElementChild;
            if (f0x) {
                f0x.firstElementChild && (f0x = f0x.firstElementChild);
                f0x.setAttribute("xlink:href", "/style/pc/svg/" + hq4u)
            }
        }
    };
    l0x.bMi9Z = function (eM3x) {
        if (!eM3x || !eM3x.length) {
            return
        }
        eM3x = /^#(.+?)#$/.exec(eM3x)[1];
        eM3x = eM3x.replace(/\s/g, " ");
        w1x.bp1x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k0x.db2x({actname: eM3x}),
            onload: function (P1x) {
                if (!P1x || P1x.code != 200 || !P1x.act) {
                    n0x.X1x.M1x({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + P1x.act.actId)
                }
            },
            onerror: function (bU1x) {
                n0x.X1x.M1x({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l0x.bdH9y = function (Sb5g, yq9h) {
        if (!Sb5g || !yq9h) return false;
        if (Sb5g == yq9h) return true;
        return l0x.bdH9y(Sb5g, yq9h.parentNode)
    };
    a9j.cn1x = function (bE1x, iT4X) {
        if (!bE1x) return null;
        if (!iT4X) return bE1x.firstChild;
        return a9j.I1x(bE1x, iT4X)[0]
    };
    l0x.bMz9q = function (hW4a) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hW4a)
    };
    l0x.bMD9u = function (hW4a, Sa5f) {
        Sa5f = Sa5f || "86";
        if (Sa5f == "86") return /^\d{11}$/.test(hW4a);
        return /^\d+$/.test(hW4a)
    };
    l0x.cxY0x = function (sU8M) {
        if (!sU8M) {
            return "0b"
        }
        var crP8H = ["Bytes", "KB", "MB", "GB"];
        var ba1x = Math.floor(Math.log(sU8M) / Math.log(1024));
        return (sU8M / Math.pow(1024, Math.floor(ba1x))).toFixed(ba1x == 1 ? 0 : 1) + crP8H[ba1x]
    };
    l0x.bMK9B = function (du2x, fl3x, crO8G) {
        if (!du2x) return du2x;
        var do2x = k0x.fc3x(du2x);
        if (do2x <= fl3x) return du2x;
        var bel9c = do2x - du2x.length, beW0x = du2x.length - bel9c;
        var fQ3x = Math.ceil(fl3x / 2), crM8E = fl3x, bNo9f = 0;
        if (bel9c < fQ3x) fQ3x = fl3x - bel9c;
        if (beW0x < fl3x) fl3x = beW0x + Math.ceil((fl3x - beW0x) / 2);
        while (fQ3x <= fl3x) {
            bNo9f = k0x.fc3x(du2x.substr(0, fQ3x));
            var bfQ0x = crM8E - bNo9f;
            if (bfQ0x == 0) break;
            if (bfQ0x == 1) {
                var crL8D = k0x.fc3x(du2x.charAt(fQ3x));
                if (crL8D == 1) {
                    fQ3x++;
                    break
                } else {
                    break
                }
            }
            fQ3x += Math.floor(bfQ0x / 2)
        }
        return du2x.substr(0, fQ3x) + (!!crO8G ? "" : "...")
    };
    l0x.crI8A = function (bm1x) {
        bm1x = bm1x || 10;
        var cz1x = "";
        for (var i = 0; i < bm1x; i++) {
            cz1x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cz1x
    };
    var crH8z = /([A-Za-z0-9 \.\-\(\)\!\?])/, crG8y = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        crF8x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bNN0x = function (crE8w) {
        var bm1x = k0x.zK0x(1, 5), crB8t = Math.random() < .5, ig4k = "";
        if (crE8w) {
            if (crB8t) {
                while (bm1x >= 0) {
                    ig4k += crF8x[k0x.zK0x(0, 500)];
                    bm1x--
                }
            } else {
                ig4k = l0x.crI8A(bm1x)
            }
        } else {
            ig4k = k0x.MK3x(bm1x)
        }
        return '<div class="soil">' + ig4k + "</div>"
    };
    l0x.bDA7t = function (dV2x) {
        dV2x = k0x.GS2x(dV2x);
        try {
            var bm1x = dV2x.length, r0x = k0x.zK0x(1, bm1x - 1);
            while (r0x < bm1x) {
                if (crG8y.test(dV2x.charAt(r0x))) {
                    return k0x.dI2x(dV2x.slice(0, r0x)) + bNN0x(true) + k0x.dI2x(dV2x.slice(r0x))
                } else if (crH8z.test(dV2x.charAt(r0x))) {
                    return k0x.dI2x(dV2x.slice(0, r0x)) + bNN0x() + k0x.dI2x(dV2x.slice(r0x))
                } else {
                    r0x++
                }
            }
            return k0x.dI2x(dV2x)
        } catch (e) {
            return k0x.dI2x(dV2x)
        }
    };
    l0x.bhG1x = function (kn5s, lP5U) {
        return "//nos.netease.com/" + kn5s + "/" + lP5U
    };
    l0x.crA8s = function (fk3x) {
        var fd3x = /(.+)(\.[^\.]+$)/.exec(fk3x);
        return fd3x ? {filename: fd3x[1], suffix: fd3x[2]} : {filename: fk3x || "", suffix: ""}
    }
})();
(function () {
    var k0x = NEJ.P("nej.u");

    function crz8r() {
        var Ab0x = function (jt4x) {
            if (jt4x < -128) {
                return Ab0x(128 - (-128 - jt4x))
            } else if (jt4x >= -128 && jt4x <= 127) {
                return jt4x
            } else if (jt4x > 127) {
                return Ab0x(-129 + jt4x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cry8q = function (jt4x, bf1x) {
            return Ab0x(jt4x + bf1x)
        };
        var crw8o = function (Th5m, bit1x) {
            if (Th5m == null) {
                return null
            }
            if (bit1x == null) {
                return Th5m
            }
            var qe7X = [];
            var crv8n = bit1x.length;
            for (var i = 0, bm1x = Th5m.length; i < bm1x; i++) {
                qe7X[i] = cry8q(Th5m[i], bit1x[i % crv8n])
            }
            return qe7X
        };
        var cru8m = function (Tm5r) {
            if (Tm5r == null) {
                return Tm5r
            }
            var qe7X = [];
            var crs8k = Tm5r.length;
            for (var i = 0, bm1x = crs8k; i < bm1x; i++) {
                qe7X[i] = Ab0x(0 - Tm5r[i])
            }
            return qe7X
        };
        var crr8j = function (bmg3x, Ry5D) {
            bmg3x = Ab0x(bmg3x);
            Ry5D = Ab0x(Ry5D);
            return Ab0x(bmg3x ^ Ry5D)
        };
        var bQL1x = function (Rx5C, bmM3x) {
            if (Rx5C == null || bmM3x == null || Rx5C.length != bmM3x.length) {
                return Rx5C
            }
            var qe7X = [];
            var crp8h = Rx5C.length;
            for (var i = 0, bm1x = crp8h; i < bm1x; i++) {
                qe7X[i] = crr8j(Rx5C[i], bmM3x[i])
            }
            return qe7X
        };
        var btV5a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cro8g = function (dh2x) {
            var JN2x = [];
            JN2x.push(btV5a[dh2x >>> 4 & 15]);
            JN2x.push(btV5a[dh2x & 15]);
            return JN2x.join("")
        };
        var bue5j = function (sU8M) {
            var bm1x = sU8M.length;
            if (sU8M == null || bm1x < 0) {
                return new String("")
            }
            var JN2x = [];
            for (var i = 0; i < bm1x; i++) {
                JN2x.push(cro8g(sU8M[i]))
            }
            return JN2x.join("")
        };
        var bul5q = function (Tv5A) {
            if (Tv5A == null || Tv5A.length == 0) {
                return Tv5A
            }
            var bqh4l = new String(Tv5A);
            var qe7X = [];
            var bm1x = bqh4l.length / 2;
            var bf1x = 0;
            for (var i = 0; i < bm1x; i++) {
                var oa6U = parseInt(bqh4l.charAt(bf1x++), 16) << 4;
                var ob6V = parseInt(bqh4l.charAt(bf1x++), 16);
                qe7X[i] = Ab0x(oa6U + ob6V)
            }
            return qe7X
        };
        var bur5w = function (cz1x) {
            if (cz1x == null || cz1x == undefined) {
                return cz1x
            }
            var Re5j = encodeURIComponent(cz1x);
            var sU8M = [];
            var buw5B = Re5j.length;
            for (var i = 0; i < buw5B; i++) {
                if (Re5j.charAt(i) == "%") {
                    if (i + 2 < buw5B) {
                        sU8M.push(bul5q(Re5j.charAt(++i) + "" + Re5j.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    sU8M.push(Re5j.charCodeAt(i))
                }
            }
            return sU8M
        };
        var crn8f = function (uL8D) {
            var ba1x = 0;
            ba1x += (uL8D[0] & 255) << 24;
            ba1x += (uL8D[1] & 255) << 16;
            ba1x += (uL8D[2] & 255) << 8;
            ba1x += uL8D[3] & 255;
            return ba1x
        };
        var cxZ0x = function (ba1x) {
            var uL8D = [];
            uL8D[0] = ba1x >>> 24 & 255;
            uL8D[1] = ba1x >>> 16 & 255;
            uL8D[2] = ba1x >>> 8 & 255;
            uL8D[3] = ba1x & 255;
            return uL8D
        };
        var crl8d = function (dz2x, btG4K, bm1x) {
            var eh2x = [];
            if (dz2x == null || dz2x.length == 0) {
                return eh2x
            }
            if (dz2x.length < bm1x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm1x; i++) {
                eh2x[i] = dz2x[btG4K + i]
            }
            return eh2x
        };
        var bbY9P = function (dz2x, btG4K, qS7L, crk8c, bm1x) {
            if (dz2x == null || dz2x.length == 0) {
                return qS7L
            }
            if (qS7L == null) {
                throw new Error("1004")
            }
            if (dz2x.length < bm1x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm1x; i++) {
                qS7L[crk8c + i] = dz2x[btG4K + i]
            }
            return qS7L
        };
        var cri8a = function (bm1x) {
            var bs1x = [];
            for (var i = 0; i < bm1x; i++) {
                bs1x[i] = 0
            }
            return bs1x
        };
        var crf8X = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var JF2x = 64;
        var TC6w = 64;
        var buZ5e = 4;
        var cre8W = function (qb7U) {
            var bvh5m = [];
            if (qb7U == null || qb7U == undefined || qb7U.length == 0) {
                return cri8a(TC6w)
            }
            if (qb7U.length >= TC6w) {
                return crl8d(qb7U, 0, TC6w)
            } else {
                for (var i = 0; i < TC6w; i++) {
                    bvh5m[i] = qb7U[i % qb7U.length]
                }
            }
            return bvh5m
        };
        var crc8U = function (TS6M) {
            if (TS6M == null || TS6M.length % JF2x != 0) {
                throw new Error("1005")
            }
            var beD9u = [];
            var bf1x = 0;
            var cqZ8R = TS6M.length / JF2x;
            for (var i = 0; i < cqZ8R; i++) {
                beD9u[i] = [];
                for (var j = 0; j < JF2x; j++) {
                    beD9u[i][j] = TS6M[bf1x++]
                }
            }
            return beD9u
        };
        var cqY8Q = function (bvH5M) {
            var oa6U = bvH5M >>> 4 & 15;
            var ob6V = bvH5M & 15;
            var bf1x = oa6U * 16 + ob6V;
            return crf8X[bf1x]
        };
        var bvI5N = function (beJ9A) {
            if (beJ9A == null) {
                return null
            }
            var bvO5T = [];
            for (var i = 0, bm1x = beJ9A.length; i < bm1x; i++) {
                bvO5T[i] = cqY8Q(beJ9A[i])
            }
            return bvO5T
        };
        var bvU5Z = function (Jy2x, qb7U) {
            if (Jy2x == null) {
                return null
            }
            if (Jy2x.length == 0) {
                return []
            }
            if (Jy2x.length % JF2x != 0) {
                throw new Error("1005")
            }
            qb7U = cre8W(qb7U);
            var bfd0x = qb7U;
            var bfm0x = crc8U(Jy2x);
            var Qr4v = [];
            var cqV8N = bfm0x.length;
            for (var i = 0; i < cqV8N; i++) {
                var bgj0x = bvI5N(bfm0x[i]);
                bgj0x = bvI5N(bgj0x);
                var bgv0x = bQL1x(bgj0x, bfd0x);
                var cqU8M = crw8o(bgv0x, cru8m(bfd0x));
                bgv0x = bQL1x(cqU8M, qb7U);
                bbY9P(bgv0x, 0, Qr4v, i * JF2x, JF2x);
                bfd0x = bfm0x[i]
            }
            var bwn5s = [];
            bbY9P(Qr4v, Qr4v.length - buZ5e, bwn5s, 0, buZ5e);
            var bm1x = crn8f(bwn5s);
            if (bm1x > Qr4v.length) {
                throw new Error("1006")
            }
            var qe7X = [];
            bbY9P(Qr4v, 0, qe7X, 0, bm1x);
            return qe7X
        };
        var cqT8L = function (Ub6V, J1x) {
            if (Ub6V == null) {
                return null
            }
            var bwy5D = new String(Ub6V);
            if (bwy5D.length == 0) {
                return []
            }
            var Jy2x = bul5q(bwy5D);
            if (J1x == null || J1x == undefined) {
                throw new Error("1007")
            }
            var qb7U = bur5w(J1x);
            return bvU5Z(Jy2x, qb7U)
        };
        this.cqS8K = function (Ub6V, J1x) {
            var bhk1x = cqT8L(Ub6V, J1x);
            var Ee1x = new String(bue5j(bhk1x));
            var xx9o = [];
            var bhr1x = Ee1x.length / 2;
            var bf1x = 0;
            for (var i = 0; i < bhr1x; i++) {
                xx9o.push("%");
                xx9o.push(Ee1x.charAt(bf1x++));
                xx9o.push(Ee1x.charAt(bf1x++))
            }
            return xx9o.join("")
        };
        k0x.crW8O = function (bhJ1x, J1x) {
            return k0x.cqR8J(k0x.cvX9O(bhJ1x), J1x)
        };
        k0x.cqR8J = function (bhJ1x, J1x) {
            var bhk1x = bvU5Z(bhJ1x, bur5w(J1x));
            var Ee1x = new String(bue5j(bhk1x));
            var xx9o = [];
            var bhr1x = Ee1x.length / 2;
            var bf1x = 0;
            for (var i = 0; i < bhr1x; i++) {
                xx9o.push("%");
                xx9o.push(Ee1x.charAt(bf1x++));
                xx9o.push(Ee1x.charAt(bf1x++))
            }
            return xx9o.join("")
        }
    }

    window.settmusic = (new crz8r).cqS8K
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, G1x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), w1x = c0x("nej.j"),
        p0x = c0x("nm.d"), l0x = c0x("nm.x"), J1x = "Search-tracks_", b0x;
    p0x.eY3x({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (P1x) {
                return P1x
            }, onerror: function (P1x, e0x) {
                if (P1x.code == 407) {
                    e0x.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e0x, bd1x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cqO8G(parseInt(e0x.data.type)) || "suggest",
                    keyword: e0x.data.s,
                    offset: e0x.offset
                })
            }, format: function (P1x, e0x) {
                if (P1x.abroad) {
                    try {
                        P1x.result = JSON.parse(decodeURIComponent(settmusic(P1x.result, p0x.sk)))
                    } catch (e) {
                    }
                }
                P1x.result = P1x.result || {};
                var i0x, co1x, iR4V = [], ty8q = e0x.data.s || "", gc3x = e0x.data.limit,
                    t1x = parseInt(e0x.data.type) || 1, o0x = P1x.result;
                switch (t1x) {
                    case 1:
                        i0x = this.bxv5A(o0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                        co1x = o0x.songCount;
                        break;
                    case 10:
                        i0x = o0x.albums;
                        co1x = o0x.albumCount;
                        break;
                    case 100:
                        i0x = o0x.artists;
                        co1x = o0x.artistCount;
                        break;
                    case 1e3:
                        i0x = o0x.playlists;
                        co1x = o0x.playlistCount;
                        break;
                    case 1002:
                        i0x = o0x.userprofiles;
                        co1x = o0x.userprofileCount;
                        break;
                    case 1004:
                        i0x = o0x.mvs;
                        co1x = o0x.mvCount;
                        break;
                    case 1006:
                        i0x = this.bxv5A(o0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                        co1x = o0x.songCount;
                        break;
                    case 1009:
                        var pZ7S = o0x.djRadios;
                        if (!!pZ7S) {
                            k0x.bb1x(pZ7S, function (C1x, r0x, cqL8D) {
                                C1x.xid = C1x.id;
                                C1x.id = C1x.id + "_rad"
                            });
                            if (pZ7S.length) {
                                this.uc8U("radio_search-" + e0x.data.s, pZ7S)
                            }
                        }
                        co1x = Math.min(o0x.djprogramCount, 500);
                        i0x = o0x.djprograms || [];
                        if (e0x.data.isPub) {
                            k0x.mq5v(pZ7S, function (C1x, r0x, cqL8D) {
                                C1x.stype = 1;
                                i0x.unshift(C1x)
                            });
                            co1x = Math.min(i0x.length, 500)
                        }
                        break
                }
                this.y1x("onsearchload", P1x);
                if (i0x && i0x.length) {
                    for (var i = 0; i < gc3x; i++) {
                        if (i < i0x.length) {
                            iR4V.push(i0x[i])
                        } else {
                            iR4V.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(co1x || 0, ty8q.length < 3 ? 500 : 5e3), list: iR4V}
            }, onerror: function (P1x, e0x) {
                e0x.onload(e0x, []);
                if (k0x.gb3x(e0x.onerror)) {
                    e0x.onerror(P1x)
                }
            }
        }
    });
    p0x.Es1x = NEJ.C();
    b0x = p0x.Es1x.O1x(p0x.he4i);
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.cqK8C = function (J1x, e0x) {
        if (!J1x) return;
        if (!!this.bxK6E) w1x.jy4C(this.bxK6E);
        this.bxK6E = this.ch1x("search-suggest", NEJ.X({data: {s: J1x, limit: 8}}, e0x))
    };
    b0x.cqJ8B = function (J1x, e0x) {
        if (!J1x) return;
        this.ch1x("search-multimatch", NEJ.X({data: {s: J1x}}, e0x))
    };
    b0x.bxv5A = function () {
        var cqG8y = function (hd4h, bxQ6K, bxR6L) {
            var cqF8x = hd4h.match(new RegExp(bxQ6K + "(.+?)" + bxR6L, "gi")), cB1x = 0;
            k0x.bb1x(cqF8x, function (q0x) {
                cB1x += q0x.replace(new RegExp(bxQ6K, "g"), "").replace(new RegExp(bxR6L, "g"), "").length
            });
            return cB1x
        };
        return function (iN4R, cqC8u, cqx8p) {
            var bya6U = [];
            k0x.bb1x(iN4R, function (be1x, ba1x) {
                be1x = l0x.Fn1x(be1x);
                var Uv6p = be1x.lyrics || [], do2x = Uv6p.length, jm4q = 0, co1x = 4, Ux6r = {l: 0, v: 0}, bkO2x;
                if (do2x > 4) {
                    k0x.bb1x(Uv6p, function (hd4h, r0x) {
                        var byo6i = cqG8y(hd4h, cqC8u, cqx8p);
                        if (byo6i > Ux6r.v) {
                            Ux6r.v = byo6i;
                            Ux6r.l = r0x
                        }
                    });
                    jm4q = Ux6r.l;
                    jm4q = Math.max(jm4q, 0);
                    bkO2x = do2x - jm4q - 4;
                    if (bkO2x < 0) jm4q += bkO2x;
                    be1x.lrcAbstractEnd = jm4q + co1x - 1
                } else {
                    be1x.lrcAbstractEnd = do2x - 1
                }
                be1x.lrcAbstractStart = jm4q;
                be1x.indexId = (Uv6p && Uv6p.length ? "L" : "NL") + be1x.id;
                bya6U.push(be1x)
            });
            return bya6U
        }
    }();
    b0x.cqO8G = function (t1x) {
        switch (t1x) {
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
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        w1x = c0x("nej.j"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), E1x = c0x("nm.m"), n0x = c0x("nm.l"),
        di2x = c0x("nm.i"), L1x = c0x("nm.m.sch"), b0x, K1x;
    var UF6z = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    L1x.Py4C = NEJ.C();
    b0x = L1x.Py4C.O1x(G1x.cy1x);
    b0x.cq1x = function (f0x) {
        this.cu1x();
        this.bR1x(f0x);
        this.R1x = p0x.Es1x.fX3x()
    };
    b0x.bR1x = function (f0x) {
        this.m0x = f0x;
        var i0x = a9j.I1x(f0x, "j-flag");
        this.eC3x = i0x[0];
        this.blq2x = i0x[1];
        this.cf1x = i0x[2];
        this.mI5N = i0x[3];
        h0x.s0x(this.eC3x, "input", this.fF3x.g0x(this));
        h0x.s0x(this.eC3x, "keyup", this.fF3x.g0x(this));
        h0x.s0x(this.eC3x, "focus", this.gk3x.g0x(this));
        h0x.s0x(this.blq2x, "click", this.gk3x.g0x(this));
        h0x.s0x(this.eC3x, "blur", this.blx2x.g0x(this));
        h0x.s0x(this.cf1x, "click", this.UJ6D.g0x(this));
        h0x.s0x(this.m0x, "keydown", this.blA2x.g0x(this));
        h0x.s0x(this.m0x, "keypress", this.UO6I.g0x(this));
        h0x.s0x(this.mI5N, "mouseover", this.Po4s.g0x(this));
        h0x.s0x(this.mI5N, "mouseout", this.Po4s.g0x(this));
        if (this.eC3x.value) {
            this.eC3x.value = ""
        }
        if (this.eC3x.style.opacity != null) {
            this.eC3x.style.opacity = 1
        }
    };
    b0x.fF3x = function (d0x) {
        if (d0x.type == "keyup" && d0x.keyCode == 8 || d0x.keyCode == 46) {
            this.EY1x()
        } else if (d0x.type == "input" || d0x.type == "propertychange") {
            setTimeout(this.EY1x.g0x(this), 0)
        }
    };
    b0x.gk3x = function () {
        this.wY9P(this.blq2x, !1);
        a9j.x1x(this.m0x, "m-srch-fcs");
        this.eC3x.focus();
        this.EY1x();
        a9j.x1x(a9j.I1x("g-topbar", "j-showoff")[0], "f-hide")
    };
    b0x.blx2x = function () {
        if (!this.eC3x.value) {
            this.wY9P(this.blq2x, !0)
        }
        var Fa1x = a9j.I1x(this.mI5N, "slt");
        if (this.UQ6K(this.mI5N) && Fa1x.length > 0 && a9j.u1x(Fa1x[0], "type")) {
            var hq4u = Fa1x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hq4u)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eC3x.value})
            }
            this.bmC3x(Fa1x[0].href)
        }
        this.wY9P(this.mI5N, !1);
        a9j.v1x(this.m0x, "m-srch-fcs")
    };
    b0x.wY9P = function (f0x, lo5t) {
        a9j.Z1x(f0x, "display", !lo5t ? "none" : "")
    };
    b0x.UQ6K = function (f0x) {
        return a9j.dc2x(f0x, "display") != "none"
    };
    b0x.EY1x = function () {
        var Fl1x = function (tL8D, cJ2x) {
            if (!cJ2x) return;
            return cJ2x.replace(new RegExp(l0x.bES7L(tL8D), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cqu8m = function (hW4a) {
            var fv3x = this.m0x.clientWidth > 250 ? 41 : 17;
            if (l0x.Sm5r(hW4a) > fv3x) {
                return l0x.zN0x(hW4a, fv3x) + "..."
            } else {
                return hW4a
            }
        };
        var US6M = function (o0x) {
            return o0x.songs && o0x.songs.length || o0x.albums && o0x.albums.length || o0x.artists && o0x.artists.length || o0x.playlists && o0x.playlists.length
        };
        var to8g = function (tL8D, d0x) {
            if (!l0x.bEI7B(this.eC3x) || l0x.jq4u(this.eC3x.value)) {
                this.wY9P(this.mI5N, !1);
                return
            }
            d0x.keyword = k0x.dI2x(tL8D);
            var dD2x = a9j.bW1x("m-search-suggest", d0x, {mark: Fl1x.g0x(this, tL8D), cutStr: cqu8m.g0x(this)}),
                rO7H = d0x.result.order;
            this.mI5N.innerHTML = dD2x;
            this.wY9P(this.mI5N, US6M(d0x.result) ? !0 : !1);
            if (!!rO7H && !!rO7H.length && UF6z[rO7H[0]]) {
                this.bnk3x = {keyword: tL8D, type: UF6z[rO7H[0]]}
            }
        };
        var cqt8l = function () {
            this.wY9P(this.mI5N, !1);
            return
        };
        return function () {
            var C1x = this.eC3x.value;
            if (l0x.jq4u(C1x)) {
                this.wY9P(this.mI5N, !1);
                return
            }
            this.R1x.cqK8C(C1x, {onload: to8g.g0x(this, C1x), onForbidden: cqt8l.g0x(this)})
        }
    }();
    b0x.UO6I = function (d0x) {
        if (d0x.keyCode != 13) return;
        var Fa1x = a9j.I1x(this.mI5N, "slt");
        if (this.UQ6K(this.mI5N) && Fa1x.length > 0) {
            this.bmC3x(Fa1x[0].href);
            this.wY9P(this.mI5N, !1);
            return
        }
        this.UJ6D();
        this.wY9P(this.mI5N, !1)
    };
    b0x.blA2x = function (d0x) {
        if (!this.UQ6K(this.mI5N)) return;
        var i0x = a9j.I1x(this.mI5N, "xtag"), do2x = i0x.length, r0x = k0x.cV2x(i0x, function (q0x) {
            return a9j.bz1x(q0x, "slt")
        });
        switch (d0x.keyCode) {
            case 38:
                if (r0x >= 0) a9j.v1x(i0x[r0x], "slt");
                a9j.x1x(i0x[r0x <= 0 ? do2x - 1 : r0x - 1], "slt");
                break;
            case 40:
                if (r0x >= 0) a9j.v1x(i0x[r0x], "slt");
                a9j.x1x(i0x[(r0x + 1) % do2x], "slt");
                break
        }
    };
    b0x.Po4s = function (d0x) {
        if (!this.UQ6K(this.mI5N)) return;
        var Pg4k, F1x = h0x.U1x(d0x), i0x = a9j.I1x(this.mI5N, "xtag");
        if (F1x.tagName.toLowerCase() == "a") Pg4k = F1x; else if (F1x.parentNode.tagName.toLowerCase() == "a") Pg4k = F1x.parentNode;
        if (!Pg4k) return;
        k0x.bb1x(i0x, function (q0x) {
            a9j.v1x(q0x, "slt");
            a9j.u1x(q0x, "type", "")
        });
        if (d0x.type == "mouseout") return;
        a9j.x1x(Pg4k, "slt");
        a9j.u1x(Pg4k, "type", "mouse")
    };
    b0x.UJ6D = function () {
        var dN2x = location.hash, r0x = dN2x.indexOf("?"), bw1x = k0x.hx4B(dN2x.substring(r0x + 1));
        bw1x.s = this.eC3x.value;
        if (l0x.jq4u(bw1x.s)) return;
        if (!bw1x.type && this.bnk3x && this.bnk3x.keyword == bw1x.s) {
            bw1x.type = this.bnk3x.type
        }
        this.bmC3x("/search/#/?" + k0x.db2x(bw1x));
        this.eC3x.blur()
    };
    b0x.bmC3x = function (W1x) {
        if (location.dispatch2) {
            location.dispatch2(W1x)
        } else {
            location.href = W1x
        }
    };
    L1x.Py4C.cqs8k = function () {
        var i0x = a9j.I1x(document.body, "j-suggest");
        k0x.bb1x(i0x, function (q0x) {
            new L1x.Py4C(q0x)
        })
    };
    L1x.Py4C.cqs8k()
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, G1x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), w1x = c0x("nej.j"),
        p0x = c0x("nm.d"), b0x;
    p0x.eY3x({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (P1x) {
                return {total: P1x.size || 0, list: P1x.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (P1x) {
                return {total: P1x.size || 0, list: P1x.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (P1x) {
                return P1x.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (P1x, e0x) {
                if (e0x.offset == 0) {
                    var oF6z = P1x.data[0];
                    this.y1x("onfirstload", oF6z);
                    P1x.data.splice(0, 1);
                    return P1x.data
                } else {
                    return P1x.data
                }
            }
        }
    });
    p0x.Fx1x = NEJ.C();
    b0x = p0x.Fx1x.O1x(p0x.he4i);
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bpp3x = function () {
        var rR7K = "LOCAL_FLAG";
        return function (t1x, cqr8j) {
            var j0x = this.CY1x(rR7K, {});
            if (j0x[t1x]) {
                return true
            } else {
                if (!cqr8j) {
                    j0x[t1x] = true;
                    this.vy8q(rR7K, j0x)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), N1x = c0x("nej.ut"), bpD3x;
    if (!!N1x.nN6H) return;
    N1x.nN6H = NEJ.C();
    bpD3x = N1x.nN6H.O1x(N1x.cy1x);
    bpD3x.bj1x = function () {
        var cqq8i = function (d0x) {
            d0x.matched = d0x.source == d0x.target
        };
        return function (e0x) {
            e0x.oncheck = e0x.oncheck || cqq8i;
            this.bk1x(e0x);
            this.bN1x = e0x.list;
            this.iC4G = e0x.dataset || "id";
            this.jJ4N = e0x.selected || "js-selected"
        }
    }();
    bpD3x.nO6I = function (C1x) {
        var F1x, d0x = {target: C1x};
        k0x.bb1x(this.bN1x, function (f0x) {
            delete d0x.matched;
            d0x.source = a9j.u1x(f0x, this.iC4G);
            this.y1x("oncheck", d0x);
            if (!d0x.matched) {
                a9j.v1x(f0x, this.jJ4N)
            } else {
                F1x = f0x;
                a9j.x1x(f0x, this.jJ4N)
            }
        }, this);
        return F1x
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), N1x = c0x("nej.ut"), oR6L;
    if (!!N1x.cQ2x) return;
    N1x.cQ2x = NEJ.C();
    oR6L = N1x.cQ2x.O1x(N1x.cy1x);
    oR6L.cq1x = function () {
        this.ik4o = {};
        this.cu1x();
        this.bG1x()
    };
    oR6L.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.bqJ4N = e0x.umi || "";
        this.zz9q = e0x.dispatcher;
        this.IO2x = e0x.composite || Y1x;
        this.bkF2x({
            onshow: this.eF3x.g0x(this),
            onhide: this.jD4H.g0x(this),
            onrefresh: this.ei2x.g0x(this),
            onmessage: this.pV7O.g0x(this),
            onbeforehide: this.cqp8h.g0x(this)
        })
    };
    oR6L.bA1x = function () {
        delete this.bqJ4N;
        this.ik4o = {};
        this.bF1x()
    };
    oR6L.tY8Q = function (d0x) {
        if (!!d0x) d0x.stopped = !0
    };
    oR6L.bG1x = bo1x;
    oR6L.eF3x = bo1x;
    oR6L.jD4H = bo1x;
    oR6L.ei2x = bo1x;
    oR6L.pV7O = bo1x;
    oR6L.cqp8h = bo1x;
    oR6L.mn5s = function (oe6Y, bC1x, eQ3x) {
        this.zz9q.brh4l({to: oe6Y, mode: eQ3x || 0, data: bC1x, from: this.bqJ4N})
    };
    oR6L.cyb0x = function (t1x, j0x) {
        this.zz9q.zu9l(t1x, {from: this.bqJ4N, data: j0x})
    };
    oR6L.cyc0x = function () {
        this.zz9q.lH5M.apply(this.zz9q, arguments)
    };
    oR6L.cqm8e = function () {
        return this.ik4o
    };
    a9j.Vq6k = function () {
        if (!!window.dispatcher) {
            dispatcher.bBb6V.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c0x = NEJ.P, bo1x = NEJ.F, Y1x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), N1x = c0x("nej.ut"), wB9s;
    if (!!N1x.de2x) return;
    N1x.de2x = NEJ.C();
    wB9s = N1x.de2x.O1x(N1x.cQ2x);
    wB9s.cql8d = function (e0x) {
        var bE1x;
        if (!bE1x) {
            var j0x = e0x.input || Y1x;
            bE1x = a9j.z1x(j0x.parent)
        }
        if (!bE1x) {
            var j0x = e0x.data || Y1x;
            bE1x = a9j.z1x(j0x.parent)
        }
        if (!bE1x) {
            bE1x = a9j.z1x(e0x.parent)
        }
        return bE1x
    };
    wB9s.eF3x = function (e0x) {
        var bE1x = this.cql8d(e0x);
        if (!!bE1x && !!this.m0x) bE1x.appendChild(this.m0x);
        this.gd3x(e0x);
        this.bBl6f("onshow", e0x);
        this.ei2x(e0x)
    };
    wB9s.ei2x = function (e0x) {
        this.fR3x(e0x);
        this.bBl6f("onrefresh", e0x)
    };
    wB9s.jD4H = function () {
        this.ki5n();
        this.cqk8c();
        a9j.mJ5O(this.m0x)
    };
    wB9s.bBw6q = function () {
        var gf3x = /^onshow|onrefresh|delay$/;
        return function (bY1x) {
            return gf3x.test(bY1x)
        }
    }();
    wB9s.bBz6t = bo1x;
    wB9s.bBl6f = function () {
        var bBH7A = function (bw1x, e0x, bY1x, ph6b) {
            if (this.bBw6q(ph6b)) return;
            if (!!bw1x) bY1x += (bY1x.indexOf("?") > 1 ? "&" : "?") + bw1x;
            var cW2x = this.bBz6t(ph6b, e0x) || {};
            cW2x.location = e0x;
            cW2x.parent = this.ik4o[ph6b];
            this.zz9q.hN4R(bY1x, {input: cW2x})
        };
        return function (t1x, e0x) {
            if (!e0x.nodelay) {
                if (!!this.IO2x.delay) return;
                var bBJ7C = this.IO2x[t1x] || Y1x;
                if (bBJ7C.delay) return
            }
            var bw1x = k0x.db2x(e0x.param) || "";
            if (t1x == "onrefresh") {
                k0x.eq3x(this.IO2x, bBH7A.g0x(this, bw1x, e0x))
            }
            k0x.eq3x(bBJ7C, bBH7A.g0x(this, bw1x, e0x))
        }
    }();
    wB9s.cqk8c = function () {
        var Bq0x = function (bY1x, ph6b) {
            if (!this.bBw6q(ph6b)) this.zz9q.br1x(bY1x)
        };
        return function () {
            k0x.eq3x(this.IO2x, Bq0x, this);
            k0x.eq3x(this.IO2x.onshow, Bq0x, this);
            k0x.eq3x(this.IO2x.onrefresh, Bq0x, this)
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), G1x = c0x("nej.ut"), w1x = c0x("nej.j"),
        k0x = c0x("nej.u"), E1x = c0x("nm.m"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), b0x, K1x;
    E1x.OC4G = NEJ.C();
    b0x = E1x.OC4G.O1x(G1x.cy1x);
    b0x.cq1x = function () {
        this.cu1x();
        this.m0x = a9j.z1x("g-topbar");
        var i0x = a9j.I1x(this.m0x, "j-tflag");
        this.brK4O = i0x[0];
        this.Cb0x = i0x[1];
        this.bBO7H = i0x[2];
        this.bsb4f = i0x[3];
        this.cqj8b = G1x.nN6H.A1x({list: this.brK4O.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bsF4J = G1x.nN6H.A1x({list: this.bsb4f.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bS1x([[this.m0x, "click", this.Ow4A.g0x(this)], [this.Cb0x, "click", this.cA1x.g0x(this)], [this.Cb0x, "mouseout", this.bCa7T.g0x(this, 0)], [this.Cb0x, "mouseover", this.bCa7T.g0x(this, 1)]]);
        window.scrollTopbar = this.cqi8a.g0x(this);
        window.matchNav = this.bCd7W.g0x(this);
        window.polling = this.uk8c.g0x(this);
        this.bth4l = p0x.Fx1x.A1x();
        this.cqh8Z();
        this.II2x();
        var bw1x = k0x.hx4B(location.href.split("?")[1]) || {};
        if (bw1x.market) {
            a9j.z1x("topbar-download-link").href = "/download?market=" + bw1x.market
        }
        var bcb9S = a9j.I1x(this.m0x, "j-showoff");
        if (bcb9S && !this.bth4l.bpp3x("newMvSearch")) {
            a9j.v1x(bcb9S[0], "f-hide");
            window.setTimeout(function () {
                a9j.x1x(bcb9S[0], "f-hide")
            }, 5e3)
        }
    };
    b0x.uk8c = function (d0x) {
        var dN2x = l0x.JV3x();
        if (!/^\/msg/.test(dN2x)) {
            var vD8v = 0;
            vD8v += d0x.comment;
            vD8v += d0x.forward;
            vD8v += d0x.msg;
            vD8v += d0x.notice;
            if (vD8v > 0) {
                vD8v = vD8v > 99 ? "99+" : vD8v;
                this.Oh4l.innerText = vD8v;
                this.IH2x.innerText = vD8v;
                a9j.v1x(this.Oh4l, "f-hide");
                a9j.v1x(this.IH2x, "f-hide");
                this.VB6v = true
            } else {
                a9j.x1x(this.Oh4l, "f-hide");
                a9j.x1x(this.IH2x, "f-hide");
                this.VB6v = false
            }
            var eE3x = "/at";
            if (d0x.notice) eE3x = "/notify";
            if (d0x.comment) eE3x = "/comment";
            if (d0x.msg > 0) eE3x = "/private";
            if (d0x.forward > 0) eE3x = "/at";
            this.IH2x.parentNode.href = "/msg/#" + eE3x
        } else {
            this.IH2x.parentNode.href = "javascript:;";
            a9j.x1x(this.Oh4l, "f-hide");
            a9j.x1x(this.IH2x, "f-hide");
            this.VB6v = false
        }
        var i0x = a9j.I1x(this.brK4O, "j-t");
        if (!/^\/friend/.test(dN2x)) {
            if (i0x && i0x.length) {
                a9j.Z1x(i0x[0], "display", d0x.event > 0 ? "" : "none")
            }
        } else {
            a9j.Z1x(i0x[0], "display", "none")
        }
    };
    b0x.cA1x = function (d0x) {
        var f0x = h0x.U1x(d0x, "d:action");
        if (f0x) {
            switch (a9j.u1x(f0x, "action")) {
                case"login":
                    h0x.ci1x(d0x);
                    var t1x = a9j.u1x(f0x, "type");
                    if (t1x) {
                        if (t1x == "sina" || t1x == "tencent") top.open(f0x.href); else top.login(t1x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h0x.ci1x(d0x);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.bth4l.bpp3x("storeNew")) {
                        a9j.x1x(this.cyd0x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.bth4l.bpp3x("levelNew")) {
                        a9j.x1x(this.cye0x, "f-vhide")
                    }
                    break
            }
        }
    };
    b0x.Ow4A = function (d0x) {
        var f0x = h0x.U1x(d0x, "d:action");
        if (!f0x) return;
        var V1x = a9j.u1x(f0x, "action");
        switch (V1x) {
            case"bilog":
                var bct9k = a9j.u1x(f0x, "logAction"), bcF9w = a9j.u1x(f0x, "logJson");
                window.log(bct9k, bcF9w);
                break
        }
    };
    b0x.bCa7T = function (IA2x, d0x) {
        if (this.bdc9T) {
            this.bdc9T.style.display = !IA2x ? "none" : "";
            (IA2x || !this.VB6v ? a9j.x1x : a9j.v1x).call(window, this.Oh4l, "f-hide")
        }
    };
    b0x.cqi8a = function (fL3x) {
        a9j.Z1x(this.m0x, "top", -fL3x + "px")
    };
    b0x.bCd7W = function (eE3x, cqc8U) {
        this.cqj8b.nO6I(eE3x);
        if (eE3x == "discover") {
            a9j.x1x(this.bBO7H, "f-hide");
            a9j.v1x(this.bsb4f, "f-hide");
            window.g_topBarHeight = 105;
            this.bsF4J.nO6I(cqc8U)
        } else {
            a9j.v1x(this.bBO7H, "f-hide");
            a9j.x1x(this.bsb4f, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b0x.cqh8Z = function () {
        var uC8u = a9j.z1x("g_iframe");
        if (!uC8u) return;
        var gq3x = uC8u.contentWindow.document.getElementById("g_top");
        this.bCd7W(a9j.u1x(gq3x, "module"), a9j.u1x(gq3x, "sub"))
    };
    var VU6O = {}, bDc7V = /\/\/\w+/, cqb8T = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bDc7V, "") !== b.replace(bDc7V, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b0x.cqa8S = function (VV6P) {
        var ng6a = k0x.cV2x(cqb8T, function (C1x, J1x) {
            if (k0x.gb3x(C1x)) {
                return C1x(VV6P[J1x], VU6O[J1x])
            } else {
                return VV6P[J1x] !== VU6O[J1x]
            }
        });
        VU6O = VV6P;
        return VV6P[ng6a]
    };
    b0x.II2x = function () {
        var df2x = GUser || {}, cpZ8R = GUserAcc || {};
        if (df2x && df2x.userId) {
            var bDl7e = NEJ.X(df2x, cpZ8R);
            if (this.cqa8S(bDl7e)) {
                a9j.dJ2x(this.Cb0x, "m-topbar-user-login", bDl7e)
            }
        } else {
            VU6O = {};
            this.Cb0x.innerHTML = a9j.hZ4d("m-topbar-user-unlogin");
            var i0x = a9j.I1x(this.brK4O, "j-t");
            a9j.Z1x(i0x[0], "display", "none")
        }
        a9j.v1x(this.Cb0x, "f-hide");
        this.VB6v = false;
        var i0x = a9j.I1x(this.Cb0x, "j-uflag");
        if (df2x && df2x.userId) {
            this.Oh4l = i0x.shift();
            this.bdc9T = i0x.shift();
            this.IH2x = i0x.shift()
        } else {
            this.bdc9T = i0x.shift()
        }
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), G1x = c0x("nej.ut"), p0x = c0x("nm.d"), b0x, K1x;
    p0x.eY3x({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (P1x) {
                h0x.y1x(p0x.rw7p, "message", P1x)
            }
        }
    });
    p0x.rw7p = NEJ.C();
    b0x = p0x.rw7p.O1x(p0x.he4i);
    b0x.VX6R = function () {
        this.ch1x("polling-get", {})
    };
    b0x.uu8m = function () {
        var eD3x;
        return function () {
            if (!!eD3x) return;
            eD3x = window.setInterval(this.VX6R.g0x(this), 1e5);
            this.VX6R()
        }
    }();
    G1x.fu3x.A1x({event: "message", element: p0x.rw7p})
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
            WebSocket.Wa6U(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.Wa6U(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.NF4J.length = 0;
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
                    WebSocket.bdu9l();
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
            self.gH4L = WebSocket.cpY8Q++;
            WebSocket.bDL7E[self.gH4L] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lk5p = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.Wa6U(function () {
                    WebSocket.oS6M.create(self.gH4L, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oS6M.send(this.gH4L, encodeURIComponent(data));
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
            WebSocket.oS6M.close(this.gH4L)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lk5p)) {
                this.lk5p[type] = []
            }
            this.lk5p[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lk5p)) return;
            var events = this.lk5p[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lk5p[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cpX8P = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bEb7U(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bEb7U("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cpV8N("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bEb7U = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.cpV8N = function (type, data) {
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
        WebSocket.oS6M = null;
        WebSocket.bDL7E = {};
        WebSocket.NF4J = [];
        WebSocket.cpY8Q = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.Wa6U(function () {
                WebSocket.oS6M.loadManualPolicyFile(url)
            })
        };
        WebSocket.bdu9l = function () {
            if (WebSocket.oS6M) return;
            if (WebSocket.cpU8M) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cpU8M
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cpT8L()) {
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
        WebSocket.cyf0x = function () {
            setTimeout(function () {
                WebSocket.oS6M = document.getElementById("webSocketFlash");
                WebSocket.oS6M.setCallerUrl(location.href);
                WebSocket.oS6M.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.NF4J.length; ++i) {
                    WebSocket.NF4J[i]()
                }
                WebSocket.NF4J = []
            }, 0)
        };
        WebSocket.cyg0x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oS6M.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bDL7E[events[i].webSocketId].cpX8P(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cyh0x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dA2x = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Wa6U = function (task) {
            if (WebSocket.oS6M) {
                task()
            } else {
                WebSocket.NF4J.push(task)
            }
        };
        WebSocket.cpT8L = function () {
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
                    WebSocket.bdu9l()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bdu9l()
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
        HTMLFile.prototype.c0x = function (data, doc) {
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
                self.c0x(msg)
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
        JSONPPolling.prototype.c0x = function (msg) {
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
        if (!this.dO2x) this.dO2x = {};
        this.bEv7o = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dO2x || !this.dO2x.error || isArray(this.dO2x.error) && !this.dO2x.error.length) {
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
        if (!this.dO2x) return false;
        var handler = this.dO2x[type];
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
        if (!this.dO2x) this.dO2x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dO2x[type]) {
            this.dO2x[type] = listener
        } else if (isArray(this.dO2x[type])) {
            this.dO2x[type].push(listener)
        } else {
            this.dO2x[type] = [this.dO2x[type], listener]
        }
        if (isArray(this.dO2x[type]) && !this.dO2x[type].warned) {
            var m;
            if (this.bEv7o !== undefined) {
                m = this.bEv7o
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dO2x[type].length > m) {
                this.dO2x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dO2x[type].length);
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
        if (!this.dO2x || !this.dO2x[type]) return this;
        var list = this.dO2x[type];
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
            delete this.dO2x[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dO2x = {};
            return this
        }
        var events = this.dO2x && this.dO2x[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dO2x[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dO2x) this.dO2x = {};
        if (!this.dO2x[type]) this.dO2x[type] = [];
        if (!isArray(this.dO2x[type])) {
            this.dO2x[type] = [this.dO2x[type]]
        }
        return this.dO2x[type]
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
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        l0x = c0x("nm.x"), dr2x = c0x("nm.u"), p0x = c0x("nm.d"), Nx4B = c0x("pomelo"), dt2x = 0, b0x, K1x;
    p0x.eY3x({
        "polling-init": {
            url: "/api/push/init", format: function (P1x) {
                dt2x = 2;
                var rt7m = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j0x = P1x.account || Y1x, cY2x = GUser.userId;
                Nx4B.init(rt7m.host, rt7m.port, true, this.cpM8E.g0x(this, {
                    user: cY2x,
                    nonce: j0x.nonce,
                    domain: rt7m.domain,
                    productKey: rt7m.key,
                    signature: j0x.signature,
                    expire_time: j0x.expireTime
                }))
            }, onerror: function () {
                return this.bea9R()
            }
        }
    });
    p0x.yA9r = NEJ.C();
    b0x = p0x.yA9r.O1x(p0x.he4i);
    b0x.cq1x = function () {
        var pE6y = !1;
        return function (e0x) {
            if (!pE6y) {
                pE6y = !0
            }
            this.cu1x(e0x);
            Nx4B.on("specify", this.pV7O.g0x(this));
            Nx4B.on("broadcast", this.pV7O.g0x(this))
        }
    }();
    b0x.pV7O = function (d0x) {
        k0x.bb1x(d0x, function (bC1x) {
            h0x.y1x(p0x.yA9r, "message", bC1x)
        }, this)
    };
    b0x.bea9R = function () {
        var by1x = 500;
        return function () {
            dt2x = 0;
            Nx4B.disconnect();
            if (by1x > 6e4) by1x = 500;
            by1x *= 2
        }
    }();
    b0x.cpM8E = function (e0x, bU1x) {
        if (!!bU1x) {
            return this.bea9R()
        }
        dt2x = 3;
        Nx4B.registerAndBind(e0x, function (o0x) {
            if (o0x.code != 200) {
                return this.bea9R()
            }
            dt2x = 4
        }.g0x(this))
    };
    b0x.cyi0x = function () {
        dr2x.cpJ8B.fX3x().cyj0x()
    };
    b0x.cyk0x = function () {
        dr2x.cpJ8B.fX3x().cyl0x()
    };
    b0x.beC9t = function () {
        var pE6y = !1;
        return function () {
            if (pE6y) return;
            pE6y = !0;
            this.ch1x("polling-init", {})
        }
    }();
    G1x.fu3x.A1x({event: "message", element: p0x.yA9r})
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), w1x = c0x("nej.j"), dh2x = c0x("nej.p"),
        k0x = c0x("nej.u"), n0x = c0x("nm.l"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), dp2x = c0x("api"), b0x, K1x;
    var gn3x = a9j.il4p('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n0x.beH9y = NEJ.C();
    b0x = n0x.beH9y.O1x(n0x.dZ2x);
    K1x = n0x.beH9y.cj1x;
    b0x.bj1x = function (e0x) {
        e0x.title = "意见反馈";
        this.bk1x(e0x)
    };
    b0x.bZ1x = function () {
        this.cb1x = gn3x
    };
    b0x.bR1x = function () {
        this.cc1x();
        this.gS4W = {};
        var Io2x = a9j.I1x;
        var Dk1x = h0x.s0x;
        this.gS4W.submit_btn = Io2x(this.m0x, "u-btn2")[0];
        this.gS4W.cancle_btn = Io2x(this.m0x, "u-btn2")[1];
        this.gS4W.prompt_msg = Io2x(this.m0x, "u-err")[0];
        this.gS4W.zs = Io2x(this.m0x, "zs")[0];
        a9j.Z1x(this.gS4W.zs, "display", "none");
        this.gS4W.fb_txt = Io2x(this.m0x, "u-txt")[0];
        this.gS4W.contact = Io2x(this.m0x, "u-txt")[1];
        a9j.fP3x(this.gS4W.fb_txt, "holder");
        a9j.fP3x(this.gS4W.contact, "holder");
        if (a9j.bz1x(this.gS4W.fb_txt.parentNode, "holder-parent")) {
            a9j.Z1x(this.gS4W.fb_txt.parentNode, "display", "block")
        }
        if (a9j.bz1x(this.gS4W.contact.parentNode, "holder-parent")) {
            a9j.Z1x(this.gS4W.contact.parentNode, "display", "block")
        }
        Dk1x(this.gS4W.submit_btn, "click", this.cpG8y.g0x(this));
        Dk1x(this.gS4W.cancle_btn, "click", this.cpF8x.g0x(this));
        Dk1x(this.gS4W.prompt_msg, "msgShow", this.cpE8w.g0x(this));
        Dk1x(this.gS4W.fb_txt, "keyup", this.uv8n.g0x(this));
        Dk1x(this.gS4W.fb_txt, "input", this.fr3x.g0x(this));
        Dk1x(this.gS4W.contact, "keyup", this.cpA8s.g0x(this));
        Dk1x(this.gS4W.contact, "input", this.bFF8x.g0x(this));
        this.ky5D = p0x.hY4c.A1x()
    };
    b0x.cpG8y = function (d0x) {
        h0x.bh1x(d0x);
        if (this.cw1x()) return;
        var bl1x = this.gS4W.fb_txt.value.trim();
        var bm1x = bl1x.length;
        var e0x = {type: "json", method: "post", noEnc: true};
        var bFJ8B = this.gS4W.contact.value.trim();
        var WD6x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l0x.biM1x(),
            contact: bFJ8B
        };
        var j0x = {content: bl1x, client: "web", xInfo: JSON.stringify(WD6x)}, nn6h = this.ky5D.cuR9I();
        if (nn6h && nn6h.length) {
            j0x.log = nn6h.join("\n")
        }
        if (bm1x == 0) {
            this.gS4W.prompt_msg.innerHTML = "反馈内容不能为空";
            a9j.Z1x(this.gS4W.prompt_msg, "display", "block");
            return
        }
        if (bFJ8B.length > 100) {
            this.gS4W.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a9j.Z1x(this.gS4W.prompt_msg, "display", "block");
            return
        }
        this.cw1x(true);
        e0x.data = k0x.db2x(j0x);
        e0x.onload = this.cpz8r.g0x(this);
        e0x.onerror = this.ie4i.g0x(this);
        w1x.bp1x("/api/feedback/web", e0x)
    };
    b0x.fr3x = function (d0x) {
        var bm1x = this.gS4W.fb_txt.value.trim().length;
        if (bm1x > 0) a9j.Z1x(this.gS4W.prompt_msg, "display", "none");
        dh2x.dk2x.browser == "ie" && dh2x.dk2x.version < "7.0" ? setTimeout(this.fF3x.g0x(this), 0) : this.fF3x()
    };
    b0x.uv8n = function (d0x) {
        if (d0x.keyCode === 8) this.fF3x()
    };
    b0x.fF3x = function () {
        var bm1x = this.gS4W.fb_txt.value.trim().length;
        this.gS4W.zs.innerHTML = !bm1x ? "0/140" : bm1x + "/140"
    };
    b0x.bFF8x = function (d0x) {
        var bm1x = this.gS4W.contact.value.trim().length;
        if (bm1x > 0) a9j.Z1x(this.gS4W.prompt_msg, "display", "none")
    };
    b0x.cpA8s = function (d0x) {
        if (d0x.keyCode === 8) this.bFF8x()
    };
    b0x.cpF8x = function (d0x) {
        h0x.ci1x(d0x);
        this.br1x()
    };
    b0x.cpE8w = function (d0x) {
        var f0x = h0x.U1x(d0x);
        f0x.innerHTML = "请输入反馈内容"
    };
    b0x.cym0x = function (cyn0x) {
        var f0x = h0x.U1x(d0x);
        f0x.innerHTML = ""
    };
    b0x.cpz8r = function (o0x) {
        this.cw1x(false);
        this.br1x();
        n0x.X1x.M1x({tip: "意见发送成功", autoclose: true})
    };
    b0x.ie4i = function (o0x) {
        this.cw1x(false);
        n0x.X1x.M1x({tip: "意见发送失败", autoclose: true})
    };
    b0x.cw1x = function (cK2x) {
        return this.dF2x(this.gS4W.submit_btn, cK2x, "发送意见", "发送中...")
    };
    b0x.M1x = function () {
        K1x.M1x.call(this);
        this.cw1x(false);
        this.gS4W.fb_txt.value = "";
        this.gS4W.contact.value = "";
        a9j.Z1x(this.gS4W.prompt_msg, "display", "none");
        this.fF3x()
    };
    l0x.cpu8m = function (e0x) {
        e0x = e0x || {};
        if (e0x.title === undefined) e0x.title = "意见反馈";
        n0x.beH9y.M1x(e0x)
    };
    dp2x.feedback = l0x.feedback = l0x.cpu8m
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, N1x = c0x("nej.ui"), b0x;
    if (!!N1x.wl9c) return;
    N1x.wl9c = NEJ.C();
    b0x = N1x.wl9c.O1x(N1x.ef2x);
    b0x.cq1x = function () {
        this.gH4L = this.bGn8f();
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.ct1x = e0x.index;
        this.fW3x = e0x.total;
        this.gT4X = e0x.range;
        this.ga3x(e0x.data)
    };
    b0x.bA1x = function () {
        this.bF1x();
        delete this.bi1x;
        delete this.ct1x;
        delete this.fW3x;
        delete this.gT4X
    };
    b0x.hD4H = bo1x;
    b0x.bGn8f = function () {
        var gi3x = +(new Date);
        return function () {
            return "itm-" + ++gi3x
        }
    }();
    b0x.BB0x = function () {
        return this.gH4L
    };
    b0x.hm4q = function () {
        return this.bi1x
    };
    b0x.ga3x = function (j0x) {
        this.bi1x = j0x || {};
        this.hD4H(this.bi1x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), N1x = c0x("nej.ui"), b0x, K1x;
    if (!!N1x.uo8g) return;
    N1x.uo8g = NEJ.C();
    b0x = N1x.uo8g.O1x(N1x.wl9c);
    K1x = N1x.uo8g.cj1x;
    b0x.bj1x = function (e0x) {
        this.cpt8l = e0x.pkey || "id";
        this.bk1x(e0x)
    };
    b0x.DK1x = function (j0x) {
        this.y1x("ondelete", {ext: j0x, id: this.BB0x(), data: this.hm4q(), body: this.kV5a()})
    };
    b0x.st7m = function (j0x) {
        this.y1x("onupdate", {ext: j0x, id: this.BB0x(), data: this.hm4q(), body: this.kV5a()})
    };
    b0x.ga3x = function (j0x) {
        K1x.ga3x.apply(this, arguments);
        this.gH4L = this.bi1x[this.cpt8l] || this.bGn8f()
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, fh3x = NEJ.R, a9j = c0x("nej.e"), k0x = c0x("nej.u"), N1x = c0x("nej.ui"), b0x, ip4t,
        beY0x;
    if (!!N1x.beZ0x) return;
    N1x.beZ0x = NEJ.C();
    b0x = N1x.beZ0x.O1x(N1x.ef2x);
    b0x.bj1x = function (e0x) {
        this.WE6y = NEJ.X({}, e0x);
        this.fq3x = NEJ.X({}, e0x);
        delete this.WE6y.onchange;
        this.fq3x.onchange = this.fE3x.g0x(this);
        this.bk1x(e0x);
        this.cps8k({number: e0x.number, label: e0x.label || Y1x})
    };
    b0x.bA1x = function () {
        this.bF1x();
        if (!!this.km5r) {
            this.km5r.S1x();
            delete this.km5r
        }
        delete this.WE6y;
        delete this.fq3x;
        this.cpr8j();
        this.m0x.innerHTML = "&nbsp;"
    };
    b0x.bZ1x = function () {
        this.lh5m = ip4t
    };
    b0x.cps8k = function (j0x) {
        a9j.dJ2x(this.m0x, beY0x, j0x);
        var gi3x = a9j.HL2x();
        this.fq3x.list = a9j.I1x(this.m0x, "js-i-" + gi3x);
        this.fq3x.pbtn = (a9j.I1x(this.m0x, "js-p-" + gi3x) || fh3x)[0];
        this.fq3x.nbtn = (a9j.I1x(this.m0x, "js-n-" + gi3x) || fh3x)[0]
    };
    b0x.bR1x = function () {
        this.cc1x()
    };
    b0x.cyo0x = function (j0x) {
        return a9j.bW1x(beY0x, j0x)
    };
    b0x.fE3x = function (d0x) {
        if (this.MP3x) return;
        var r0x = d0x.index, co1x = d0x.total;
        this.MP3x = !0;
        this.MO3x(r0x, co1x);
        k0x.bb1x(this.WM6G, function (sn7g) {
            sn7g.MO3x(r0x, co1x)
        });
        this.MP3x = !1;
        this.y1x("onchange", d0x)
    };
    b0x.g0x = function (bE1x) {
        bE1x = a9j.z1x(bE1x);
        if (!bE1x) return this;
        var cr1x = NEJ.X({}, this.WE6y);
        cr1x.parent = bE1x;
        cr1x.index = this.sl7e();
        cr1x.total = this.jp4t();
        var sn7g = this.constructor.A1x(cr1x);
        sn7g.vk8c("onchange", this.fq3x.onchange);
        if (!this.WM6G) this.WM6G = [];
        this.WM6G.push(sn7g);
        return this
    };
    b0x.cpr8j = function () {
        var bnu3x = function (sn7g, r0x, i0x) {
            sn7g.S1x();
            i0x.splice(r0x, 1)
        };
        return function () {
            k0x.mq5v(this.WM6G, bnu3x)
        }
    }();
    b0x.jX5c = function (r0x) {
        if (!this.km5r) return;
        this.km5r.jX5c(r0x)
    };
    b0x.sl7e = function () {
        if (!this.km5r) return 1;
        return this.km5r.sl7e()
    };
    b0x.jp4t = function () {
        if (!this.km5r) return 1;
        return this.km5r.jp4t()
    };
    b0x.MO3x = function (r0x, co1x) {
        if (!this.km5r) return;
        this.km5r.MO3x(r0x, co1x)
    };
    b0x.bft0x = function (co1x) {
        if (!this.km5r) return;
        this.km5r.bft0x(co1x)
    };
    ip4t = a9j.so7h(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    beY0x = a9j.ep3x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        N1x = c0x("nej.ut"), b0x;
    if (!!N1x.WO6I) return;
    N1x.WO6I = NEJ.C();
    b0x = N1x.WO6I.O1x(N1x.cy1x);
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.WX7Q = e0x.pbtn;
        this.cf1x = e0x.nbtn;
        this.Xa7T = e0x.sbtn;
        this.Xd7W = e0x.ebtn;
        this.iC4G = e0x.event || "click";
        this.jJ4N = e0x.selected || "js-selected";
        this.mV5a = e0x.disabled || "js-disabled";
        this.cpp8h(e0x.list);
        this.MO3x(e0x.index || 1, e0x.total || 1)
    };
    b0x.bA1x = function () {
        this.bF1x();
        delete this.bN1x;
        delete this.iC4G;
        delete this.WX7Q;
        delete this.cf1x;
        delete this.Xa7T;
        delete this.Xd7W;
        delete this.bJF9w;
        delete this.fW3x;
        delete this.ct1x;
        delete this.jJ4N;
        delete this.mV5a
    };
    b0x.cpp8h = function () {
        var bgk0x = function (f0x) {
            this.bN1x.push(f0x);
            this.bS1x([[f0x, this.iC4G, this.cp1x.eb2x(this, 0)]])
        };
        return function (i0x) {
            this.bN1x = [];
            this.bS1x([[this.WX7Q, "click", this.cp1x.eb2x(this, -1)], [this.cf1x, "click", this.cp1x.eb2x(this, 1)], [this.Xa7T, "click", this.cp1x.eb2x(this, -2)], [this.Xd7W, "click", this.cp1x.eb2x(this, 2)]]);
            k0x.bb1x(i0x, bgk0x, this)
        }
    }();
    b0x.Eo1x = function (f0x, r0x) {
        if (r0x == null) {
            f0x.innerText = "";
            a9j.Z1x(f0x, "display", "none");
            a9j.v1x(f0x, this.jJ4N)
        } else {
            f0x.innerText = r0x;
            a9j.Z1x(f0x, "display", "");
            r0x == this.ct1x ? a9j.x1x(f0x, this.jJ4N) : a9j.v1x(f0x, this.jJ4N)
        }
    };
    b0x.bgm0x = function () {
        if (this.ct1x <= 1) {
            a9j.x1x(this.WX7Q, this.mV5a);
            a9j.x1x(this.Xa7T, this.mV5a)
        } else {
            a9j.v1x(this.WX7Q, this.mV5a);
            a9j.v1x(this.Xa7T, this.mV5a)
        }
        if (this.ct1x >= this.fW3x) {
            a9j.x1x(this.cf1x, this.mV5a);
            a9j.x1x(this.Xd7W, this.mV5a)
        } else {
            a9j.v1x(this.cf1x, this.mV5a);
            a9j.v1x(this.Xd7W, this.mV5a)
        }
    };
    b0x.Xf7Y = bo1x;
    b0x.bgB0x = function () {
        this.Xf7Y();
        this.bgm0x();
        this.y1x("onchange", {last: this.bJF9w, total: this.fW3x, index: this.ct1x, ext: this.bgI0x})
    };
    b0x.bKd9U = function (r0x) {
        r0x = parseInt(r0x);
        if (isNaN(r0x) || this.fW3x == null) return !1;
        r0x = Math.max(1, Math.min(r0x, this.fW3x));
        this.bJF9w = this.ct1x;
        this.ct1x = r0x;
        return !0
    };
    b0x.bgK0x = function (co1x) {
        co1x = parseInt(co1x);
        if (isNaN(co1x) || co1x < 1) return !1;
        this.fW3x = co1x;
        return !0
    };
    b0x.cp1x = function (d0x, eK3x) {
        h0x.ci1x(d0x);
        var F1x = h0x.U1x(d0x);
        if (!F1x || a9j.bz1x(F1x, this.jJ4N) || a9j.bz1x(F1x, this.mV5a)) return;
        var r0x = F1x.innerText;
        switch (eK3x) {
            case 1:
            case-1:
                r0x = this.ct1x + eK3x;
                break;
            case 2:
                r0x = this.fW3x;
                break;
            case-2:
                r0x = 1;
                break
        }
        this.jX5c(r0x)
    };
    b0x.sl7e = function () {
        return this.ct1x
    };
    b0x.jX5c = function (r0x) {
        var cpn7g = this.ct1x;
        this.bKd9U(r0x);
        if (cpn7g != this.ct1x) this.bgB0x();
        return this
    };
    b0x.jp4t = function () {
        return this.fW3x
    };
    b0x.PD4H = function (co1x) {
        if (this.bgK0x(co1x) && this.ct1x != null) {
            this.ct1x = 1;
            this.bgB0x()
        }
        return this
    };
    b0x.bft0x = function (co1x) {
        if (this.bgK0x(co1x)) {
            this.Xf7Y();
            this.bgm0x()
        }
        return this
    };
    b0x.MO3x = function (r0x, co1x) {
        if (!this.bgK0x(co1x) || !this.bKd9U(r0x)) return this;
        this.bgB0x();
        return this
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), cT2x = c0x("nej.x"), N1x = c0x("nej.ut"), b0x;
    if (!!N1x.Mp3x) return;
    N1x.Mp3x = NEJ.C();
    b0x = N1x.Mp3x.O1x(N1x.WO6I);
    b0x.cq1x = function () {
        this.cu1x();
        var f0x = a9j.cX2x("span", "zdot");
        f0x.innerText = "...";
        this.Xl7e = [f0x.cloneNode(true), f0x]
    };
    b0x.bA1x = function () {
        this.bF1x();
        this.bKT9K()
    };
    b0x.bKT9K = function () {
        a9j.mJ5O(this.Xl7e[0]);
        a9j.mJ5O(this.Xl7e[1])
    };
    b0x.Xf7Y = function () {
        this.bgI0x = {last: !1, first: !1, list: this.bN1x};
        this.bKT9K();
        this.Eo1x(this.bN1x[0], 1);
        var bH1x = 1, bm1x = this.bN1x.length;
        if (this.fW3x < bm1x) {
            for (var pP7I; bH1x < bm1x; bH1x++) {
                pP7I = bH1x + 1;
                this.Eo1x(this.bN1x[bH1x], pP7I > this.fW3x ? null : pP7I)
            }
            return
        }
        if (this.ct1x > 1) {
            var cB1x = Math.floor((bm1x - 2) / 2), cpm7f = this.fW3x - bm1x + 2, io4s = Math.max(2, this.ct1x - cB1x);
            if (this.fW3x >= bm1x) {
                io4s = Math.min(io4s, cpm7f)
            }
            if (io4s > 2) {
                this.bN1x[0].insertAdjacentElement("afterEnd", this.Xl7e[0]);
                this.bgI0x.first = !0
            }
            for (var r0x; ; bH1x++) {
                r0x = io4s + bH1x - 1;
                if (r0x > this.ct1x) break;
                this.Eo1x(this.bN1x[bH1x], r0x)
            }
        }
        if (this.ct1x < this.fW3x) {
            var r0x, io4s = this.ct1x + 1;
            for (var i = 0, l = bm1x - 2; ; i++, bH1x++) {
                r0x = io4s + i;
                if (bH1x > l || r0x > this.fW3x) break;
                this.Eo1x(this.bN1x[bH1x], r0x)
            }
            if (r0x < this.fW3x) {
                this.bN1x[bH1x].insertAdjacentElement("beforeBegin", this.Xl7e[1]);
                this.bgI0x.last = !0
            }
            if (r0x <= this.fW3x) {
                this.Eo1x(this.bN1x[bH1x++], this.fW3x)
            }
        }
        for (; bH1x < bm1x; bH1x++) {
            this.Eo1x(this.bN1x[bH1x])
        }
    };
    a9j.cpl7e = cT2x.cpl7e = function (bE1x, e0x) {
        var D1x = a9j.la5f(bE1x);
        if (!D1x) return null;
        if (!N1x.Yw7p(D1x, N1x.Mp3x)) {
            e0x = e0x || {};
            var i0x = !e0x.clazz ? a9j.cU2x(D1x) : a9j.I1x(D1x, e0x.clazz);
            e0x.pbtn = i0x.shift();
            e0x.nbtn = i0x.pop();
            e0x.list = i0x;
            delete e0x.clazz
        }
        return N1x.Yw7p(D1x, N1x.Mp3x, e0x || Y1x)
    };
    cT2x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, fh3x = NEJ.R, a9j = c0x("nej.e"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        N1x = c0x("nej.ui"), b0x, K1x, gn3x;
    if (!!N1x.Ml3x) return;
    N1x.Ml3x = NEJ.C();
    b0x = N1x.Ml3x.O1x(N1x.beZ0x);
    K1x = N1x.Ml3x.cj1x;
    b0x.bj1x = function (e0x) {
        e0x.number = parseInt(e0x.number) || 9;
        this.bk1x(e0x);
        this.km5r = G1x.Mp3x.A1x(this.fq3x)
    };
    b0x.fE3x = function (d0x) {
        if (!!this.WE6y.noend) {
            var bLh9Y = d0x.ext || Y1x, i0x = bLh9Y.list || fh3x;
            if (bLh9Y.last) {
                a9j.Z1x(i0x[i0x.length - 1], "display", "none")
            }
        }
        K1x.fE3x.apply(this, arguments)
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        ba1x = c0x("nej.ui"), N1x = c0x("nej.ut"), b0x;
    if (!!N1x.Xm7f) return;
    N1x.Xm7f = NEJ.C();
    b0x = N1x.Xm7f.O1x(N1x.cy1x);
    b0x.bj1x = function (e0x) {
        this.iI4M = {};
        this.bk1x(e0x);
        this.is4w = a9j.z1x(e0x.parent);
        this.eU3x = {parent: this.is4w};
        this.nS6M = parseInt(e0x.limit) || 10;
        this.wC9t = parseInt(e0x.first) || this.nS6M;
        this.cpk7d(e0x.item);
        this.cpj7c(e0x.cache || Y1x);
        this.cpi7b(e0x.pager || Y1x);
        this.ga3x()
    };
    b0x.bA1x = function () {
        this.y1x("onbeforerecycle");
        this.Me3x();
        this.bF1x();
        if (this.iI4M.clear) {
            this.R1x.tT8L(this.iI4M.key)
        }
        this.R1x.S1x();
        if (!!this.iL4P) {
            this.iL4P.S1x();
            delete this.iL4P
        }
        delete this.bMg9X;
        delete this.fq3x;
        delete this.Xq7j;
        delete this.R1x;
        delete this.is4w;
        delete this.LY3x;
        delete this.eU3x;
        delete this.iI4M
    };
    b0x.bMm9d = function () {
        var cS2x = /\{(.*?)\}/gi, cpg7Z = function (pw6q, j0x) {
            return (pw6q || "{id}{seed}").replace(cS2x, function ($1, $2) {
                var C1x = j0x[$2];
                return C1x == null ? $1 : C1x
            })
        };
        return function (D1x) {
            var J1x = cpg7Z(this.eU3x.jstIdTempalte, {id: D1x, seed: a9j.HL2x()});
            if (!this.eU3x.jstIdType) {
                return a9j.z1x(J1x)
            } else if (this.eU3x.jstIdType == 1) {
                return (a9j.I1x(this.is4w, J1x) || [])[0]
            }
        }
    }();
    b0x.zo9f = function (bH1x, bf1x, gc3x, bm1x) {
        var o0x = {index: 1, total: 1};
        if (bf1x >= bH1x) {
            o0x.index = Math.floor((bf1x - bH1x) / gc3x) + 2
        }
        if (bm1x > bH1x) {
            o0x.total = Math.ceil((bm1x - bH1x) / gc3x) + 1
        }
        return o0x
    };
    b0x.bMv9m = function (J1x) {
        delete this.LY3x;
        this.HN2x = J1x;
        this.bS1x([[this.is4w, "click", this.cpf7Y.g0x(this)]])
    };
    b0x.cpk7d = function (q0x) {
        if (k0x.fx3x(q0x)) {
            this.bMv9m(q0x);
            return
        }
        NEJ.X(this.eU3x, q0x);
        var dK2x = this.eU3x.klass;
        delete this.eU3x.klass;
        if (k0x.fx3x(dK2x)) {
            this.bMv9m(dK2x);
            return
        }
        delete this.HN2x;
        this.LY3x = dK2x;
        this.eU3x.ondelete = this.y1x.g0x(this, "ondelete");
        this.eU3x.onupdate = this.y1x.g0x(this, "onupdate")
    };
    b0x.cpj7c = function (Q1x) {
        var dK2x = Q1x.klass, jx4B = NEJ.X({}, Q1x);
        this.iI4M.key = jx4B.lkey;
        this.iI4M.data = jx4B.data || {};
        this.iI4M.clear = !!jx4B.clear;
        this.eU3x.pkey = jx4B.key || "id";
        jx4B.onlistload = this.bhy1x.g0x(this);
        jx4B.onpullrefresh = this.cpe7X.g0x(this);
        if (!!dK2x && "onlistchange" in dK2x) {
            this.bS1x([[dK2x, "listchange", this.bhC1x.g0x(this)]])
        } else {
            jx4B.onitemadd = this.Xz7s.g0x(this);
            jx4B.onitemdelete = this.XB7u.g0x(this);
            jx4B.onitemupdate = this.bMH9y.g0x(this)
        }
        this.R1x = (dK2x || N1x.Pr4v).A1x(jx4B);
        if (Q1x.total != null) {
            this.R1x.PD4H(this.iI4M.key, Q1x.total)
        }
        if (!!Q1x.list) {
            this.R1x.uc8U(this.iI4M.key, Q1x.list)
        }
    };
    b0x.cpi7b = function (sn7g) {
        this.bMg9X = sn7g.klass || ba1x.Ml3x;
        this.fq3x = NEJ.X({}, sn7g);
        if (k0x.eu3x(sn7g.parent)) {
            this.fq3x.parent = sn7g.parent[0];
            this.LC3x = sn7g.parent.slice(1);
            if (!this.LC3x || !this.LC3x.length) {
                delete this.LC3x
            }
        }
        delete this.fq3x.klass
    };
    b0x.Me3x = function () {
        var gf3x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.y1x("onbeforelistclear", {parent: this.is4w});
            if (!!this.fp3x && this.fp3x.length > 0) {
                this.fp3x = this.LY3x.S1x(this.fp3x);
                delete this.fp3x
            }
            if (gf3x.test(this.is4w.tagName)) {
                a9j.bAB6v(this.is4w)
            } else {
                this.is4w.innerHTML = ""
            }
        }
    }();
    b0x.bhL1x = function (XE7x) {
        if (!!this.fq3x.fixed) return;
        a9j.Z1x(this.fq3x.parent, "display", XE7x);
        k0x.bb1x(this.LC3x, function (bE1x) {
            a9j.Z1x(bE1x, "display", XE7x)
        }, this)
    };
    b0x.bhR1x = function () {
        var r0x = this.fq3x.index || 1;
        delete this.fq3x.index;
        if (!!this.iL4P) {
            r0x = this.iL4P.sl7e()
        }
        this.zF0x({last: r0x, index: r0x})
    };
    b0x.zF0x = function (d0x) {
        this.y1x("onpagechange", d0x)
    };
    b0x.bNe9V = function (bf1x) {
        this.iI4M.offset = bf1x;
        this.Ur6l()
    };
    b0x.bNf9W = function (e0x) {
        return e0x
    };
    b0x.Ur6l = function () {
        this.Lt3x();
        var j0x = this.iI4M.data;
        j0x.offset = this.iI4M.offset;
        var oF6z = j0x.offset == 0;
        j0x.total = oF6z;
        this.iI4M.limit = oF6z ? this.wC9t : this.nS6M;
        j0x.limit = this.iI4M.limit;
        this.R1x.kG5L(this.bNf9W(NEJ.X({}, this.iI4M)))
    };
    b0x.bhy1x = function (e0x) {
        if (e0x.key != this.iI4M.key || e0x.offset != this.iI4M.offset) return;
        this.XH7A();
        var i0x = this.R1x.gV4Z(e0x.key);
        if (!i0x || !i0x.length) {
            this.bhT1x();
            return
        }
        var gc3x = e0x.limit, bf1x = e0x.offset;
        if (this.bhW1x(i0x, bf1x, gc3x)) return;
        this.y1x("onbeforelistrender", {list: i0x, offset: bf1x, parent: this.is4w});
        if (!!this.HN2x) {
            this.eU3x.xlist = i0x;
            this.eU3x.beg = bf1x;
            this.eU3x.end = Math.min(i0x.length, bf1x + gc3x) - 1;
            this.eU3x.act = "list";
            var dD2x = a9j.bW1x(this.HN2x, this.eU3x);
            this.Lm3x(dD2x)
        } else {
            this.eU3x.limit = gc3x;
            this.eU3x.offset = bf1x;
            var gI4M = a9j.yI9z(i0x, this.LY3x, this.eU3x);
            this.Ll3x(gI4M)
        }
        this.y1x("onafterlistrender", {list: i0x, offset: bf1x, parent: this.is4w})
    };
    b0x.cpe7X = function (e0x) {
        if (!this.Xq7j) return;
        delete this.Xq7j;
        this.XH7A("onafterpullrefresh");
        this.ga3x()
    };
    b0x.bND0x = function (r0x, co1x) {
        if (!!this.iL4P) {
            var yO9F = this.iL4P.sl7e(), cpd7W = this.iL4P.jp4t();
            if (yO9F > co1x || co1x != cpd7W) {
                this.iL4P.S1x();
                delete this.iL4P;
                this.zF0x({last: yO9F, index: Math.min(r0x, co1x)});
                return !0
            }
        } else {
            this.fq3x.index = r0x;
            this.fq3x.total = co1x;
            this.iL4P = this.bMg9X.A1x(this.fq3x);
            this.iL4P.vk8c("onchange", this.zF0x.g0x(this));
            k0x.bb1x(this.LC3x, function (bE1x) {
                this.iL4P.g0x(bE1x)
            }, this)
        }
    };
    b0x.XN7G = function () {
        var gi3x = +(new Date);
        return function (j0x) {
            var D1x = j0x[this.eU3x.pkey];
            if (!D1x) {
                j0x["dirty-data"] = !0;
                j0x[this.eU3x.pkey] = "dirty-" + gi3x++
            }
            return j0x
        }
    }();
    b0x.XR7K = function (j0x) {
        var D1x = j0x[this.eU3x.pkey];
        if (!!j0x["dirty-data"]) {
            delete j0x["dirty-data"];
            delete j0x[this.eU3x.pkey]
        }
        return D1x
    };
    b0x.XS7L = function () {
        var cpc7V = function (jY5d, lQ5V) {
            this.is4w.insertAdjacentElement(jY5d, lQ5V)
        };
        return function (jY5d, j0x) {
            var HW2x = [j0x];
            if (!!this.HN2x) {
                this.eU3x.xlist = HW2x;
                this.eU3x.beg = 0;
                this.eU3x.end = 0;
                this.eU3x.act = "add";
                this.Lm3x(a9j.bW1x(this.HN2x, this.eU3x), jY5d)
            } else {
                this.eU3x.limit = 1;
                this.eU3x.offset = 0;
                this.eU3x.parent = cpc7V.g0x(this, jY5d);
                var gI4M = a9j.yI9z(HW2x, this.LY3x, this.eU3x);
                this.eU3x.parent = this.is4w;
                this.Ll3x(gI4M)
            }
        }
    }();
    b0x.Lt3x = bo1x;
    b0x.XH7A = function (T1x) {
        var d0x = {parent: this.is4w};
        this.y1x(T1x || "onafterlistload", d0x);
        if (!d0x.stopped) {
            a9j.mJ5O(this.ck1x)
        }
    };
    b0x.bhW1x = bo1x;
    b0x.XT7M = function (bC1x, jY5d) {
        if (k0x.fx3x(bC1x)) {
            if (!this.ck1x) this.ck1x = a9j.cX2x("div");
            this.ck1x.innerHTML = bC1x
        } else {
            this.ck1x = bC1x
        }
        this.is4w.insertAdjacentElement(jY5d || "beforeEnd", this.ck1x)
    };
    b0x.xg9X = function (T1x, kY5d, jY5d) {
        var d0x = {parent: this.is4w};
        this.y1x(T1x, d0x);
        if (!d0x.stopped) {
            this.XT7M(d0x.value || kY5d, jY5d)
        }
    };
    b0x.bhT1x = bo1x;
    b0x.Lm3x = bo1x;
    b0x.Ll3x = bo1x;
    b0x.cpf7Y = function () {
        var gf3x = /^(?:delete|update)$/;
        return function (d0x) {
            var f0x = h0x.U1x(d0x, "d:action");
            if (!f0x) return;
            var V1x = a9j.u1x(f0x, "action");
            if (!gf3x.test(V1x)) return;
            var D1x = a9j.u1x(f0x, "id");
            if (!D1x) return;
            var q0x = this.R1x.eo3x(D1x);
            if (!q0x) return;
            h0x.bh1x(d0x);
            this.y1x("on" + V1x, {data: q0x, id: q0x[this.eU3x.pkey], body: a9j.z1x(this.bMm9d(D1x))})
        }
    }();
    b0x.Xz7s = bo1x;
    b0x.Uo6i = function (d0x) {
        var j0x = d0x.data || {}, e0x = {data: j0x, key: this.iI4M.key, id: j0x[this.eU3x.pkey]};
        this.y1x("onbeforedelete", e0x);
        this.R1x.Jd2x(e0x)
    };
    b0x.XB7u = bo1x;
    b0x.Un6h = function (d0x) {
        var j0x = d0x.data || {}, e0x = {data: j0x, key: this.iI4M.key};
        this.y1x("onbeforeupdate", e0x);
        this.R1x.Us6m(e0x)
    };
    b0x.bMH9y = function (d0x) {
        this.Le3x(d0x, "onafterupdate");
        if (d0x.stopped) return;
        var D1x = d0x.data[this.eU3x.pkey];
        if (!!this.fp3x) {
            var q0x = a9j.bDi7b(D1x);
            if (!!q0x) q0x.ga3x(d0x.data)
        } else {
            var f0x = a9j.z1x(D1x + "" + a9j.HL2x());
            if (!f0x) return;
            var i0x = this.R1x.gV4Z(d0x.key), r0x = k0x.cV2x(i0x, d0x.data);
            if (r0x < 0) return;
            this.eU3x.list = i0x;
            this.eU3x.beg = r0x;
            this.eU3x.end = r0x;
            this.eU3x.act = "update";
            var dD2x = a9j.bW1x(this.HN2x, this.eU3x);
            f0x.insertAdjacentHTML("afterEnd", dD2x);
            a9j.cC2x(f0x)
        }
    };
    b0x.Le3x = function (d0x, T1x) {
        var q0x = d0x.data;
        if (!q0x || q0x[this.eU3x.pkey] == null) {
            this.y1x("onerror", d0x);
            d0x.stopped = !0
        }
        if (!d0x.stopped) {
            this.y1x(T1x, d0x)
        }
    };
    b0x.bir1x = bo1x;
    b0x.biT1x = bo1x;
    b0x.bhC1x = function (d0x) {
        if (d0x.key != this.iI4M.key) return;
        switch (d0x.action) {
            case"add":
                this.Xz7s(d0x);
                break;
            case"delete":
                this.XB7u(d0x);
                break;
            case"update":
                this.bMH9y(d0x);
                break;
            case"refresh":
                this.ga3x();
                break;
            case"unshift":
                this.biT1x(d0x.offset, d0x.limit);
                break;
            case"append":
                this.bir1x(d0x.offset, d0x.limit);
                break
        }
    };
    b0x.pc6W = function (q0x) {
        this.Un6h({data: q0x})
    };
    b0x.lK5P = function (q0x) {
        this.Uo6i({data: q0x})
    };
    b0x.ry7r = function (q0x) {
        this.R1x.iO4S({data: q0x, key: this.iI4M.key})
    };
    b0x.rv7o = function () {
        return this.R1x
    };
    b0x.biX1x = function (j0x) {
        this.XS7L("afterBegin", this.XN7G(j0x));
        return this.XR7K(j0x)
    };
    b0x.bPU0x = function (j0x) {
        this.XS7L("beforeEnd", this.XN7G(j0x));
        return this.XR7K(j0x)
    };
    b0x.ga3x = function () {
        this.Me3x();
        this.bhR1x()
    };
    b0x.cyq0x = function () {
        this.R1x.tT8L(this.iI4M.key);
        this.ga3x()
    };
    b0x.bks2x = function () {
        if (!!this.Xq7j) return;
        this.Xq7j = !0;
        this.xg9X("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R1x.bks2x({key: this.iI4M.key, data: this.iI4M.data})
    };
    b0x.jp4t = function () {
        return this.R1x.jp4t(this.iI4M.key)
    };
    b0x.bQe0x = function () {
        return this.iL4P
    };
    b0x.UB6v = function () {
        return this.R1x.UB6v(this.iI4M.key)
    };
    b0x.coZ7S = function () {
        return this.fp3x
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, fh3x = NEJ.R, k0x = c0x("nej.u"), a9j = c0x("nej.e"), N1x = c0x("nej.ut"), b0x, K1x;
    if (!!N1x.iK4O) return;
    N1x.iK4O = NEJ.C();
    b0x = N1x.iK4O.O1x(N1x.Xm7f);
    K1x = N1x.iK4O.cj1x;
    b0x.zo9f = function (bf1x, bm1x) {
        return K1x.zo9f.call(this, this.wC9t, bf1x, this.nS6M, bm1x)
    };
    b0x.bjg1x = function (r0x) {
        var bf1x = 0;
        if (r0x > 1) bf1x = this.wC9t + (r0x - 2) * this.nS6M;
        return bf1x
    };
    b0x.zF0x = function (d0x) {
        K1x.zF0x.apply(this, arguments);
        if (!d0x.stopped) {
            this.bNe9V(this.bjg1x(d0x.index))
        }
    };
    b0x.Lt3x = function () {
        this.Me3x();
        this.xg9X("onbeforelistload", "列表加载中...")
    };
    b0x.XH7A = function () {
        K1x.XH7A.apply(this, arguments);
        this.Me3x()
    };
    b0x.bhW1x = function (i0x, bf1x, gc3x) {
        var bv1x = this.zo9f(bf1x, i0x.length);
        if (this.bND0x(bv1x.index, bv1x.total)) return !0;
        this.bhL1x(bv1x.total > 1 ? "" : "none")
    };
    b0x.bhT1x = function () {
        this.xg9X("onemptylist", "没有列表数据！")
    };
    b0x.XT7M = function (bC1x, jY5d) {
        if (!jY5d && k0x.fx3x(bC1x)) {
            this.is4w.innerHTML = bC1x;
            return
        }
        K1x.XT7M.apply(this, arguments)
    };
    b0x.Lm3x = function (dD2x) {
        this.is4w.innerHTML = dD2x
    };
    b0x.Ll3x = function (gI4M) {
        this.fp3x = gI4M
    };
    b0x.Xz7s = function (d0x) {
        this.Le3x(d0x, "onafteradd");
        if (!d0x.stopped) this.ga3x()
    };
    b0x.XB7u = function (d0x) {
        this.Le3x(d0x, "onafterdelete");
        if (!d0x.stopped) this.ga3x()
    };
    b0x.bir1x = function (bf1x, gc3x) {
        var r0x = 1;
        if (!!this.iL4P) {
            r0x = this.iL4P.sl7e()
        }
        var jm4q = this.bjg1x(r0x), gG4K = jm4q + (r0x > 1 ? this.nS6M : this.wC9t);
        if (bf1x >= gG4K && !!this.iL4P) {
            var bv1x = this.zo9f(0, this.jp4t());
            this.iL4P.bft0x(bv1x.total);
            this.bhL1x(bv1x.total > 1 ? "" : "none")
        } else {
            this.ga3x()
        }
    };
    b0x.biT1x = function (bf1x, gc3x) {
        var r0x = 1;
        if (!!this.iL4P) {
            r0x = this.iL4P.sl7e()
        }
        var jm4q = this.bjg1x(r0x), bv1x = this.zo9f(jm4q, this.jp4t());
        this.zF0x({last: r0x, index: bv1x.index})
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), G1x = c0x("nej.ut"),
        k0x = c0x("nej.u"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), B1x = c0x("nm.w"), fl3x = 40, b0x, K1x;
    B1x.Yh7a = NEJ.C();
    b0x = B1x.Yh7a.O1x(G1x.cy1x);
    K1x = B1x.Yh7a.cj1x;
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.KA3x = e0x.inputer;
        this.bjn1x = e0x.tipper;
        this.bS1x([[this.KA3x, "input", this.fr3x.g0x(this)]])
    };
    b0x.bA1x = function () {
        this.bF1x();
        this.Hp2x(null, null)
    };
    b0x.fr3x = function (d0x) {
        if (d0x && d0x.type == "keyup" && (d0x.keyCode != 8 || d0x.keyCode != 68)) return;
        var T1x = this.KA3x.value, cys0x;
        if (l0x.Sm5r(T1x) > fl3x) {
            this.KA3x.value = l0x.zN0x(T1x, fl3x);
            this.Hp2x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g0x(this))
        } else if (T1x.indexOf("#") >= 0 || T1x.indexOf("@") >= 0) {
            this.Hp2x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Hp2x(null, null);
            this.y1x("onchange", {value: T1x})
        }
    };
    b0x.coW7P = function () {
        this.fr3x()
    };
    b0x.Hp2x = function () {
        var D1x = 0;
        return function (du2x, bQy0x) {
            if (!!D1x) window.clearTimeout(D1x);
            if (!du2x) {
                a9j.x1x(this.bjn1x, "f-vhide");
                this.bQD1x = !1;
                return
            }
            this.bjn1x.innerHTML = '<i class="u-icn u-icn-25"></i>' + du2x;
            a9j.v1x(this.bjn1x, "f-vhide");
            this.bQD1x = !0;
            if (k0x.gb3x(bQy0x)) D1x = window.setTimeout(function () {
                this.Hp2x(null, null);
                bQy0x()
            }.g0x(this), 1e3)
        }
    }();
    b0x.bQI1x = function () {
        if (this.bQD1x) return !1;
        if (l0x.jq4u(this.KA3x.value)) {
            this.Hp2x("歌单名不能为空");
            return !1
        }
        return !0
    };
    b0x.fB3x = function () {
        return this.KA3x.value
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), w1x = c0x("nej.j"), n0x = c0x("nm.l"),
        B1x = c0x("nm.w"), bD1x = c0x("nej.ui"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K1x;
    n0x.Yi7b = NEJ.C();
    b0x = n0x.Yi7b.O1x(n0x.dZ2x);
    K1x = n0x.Yi7b.cj1x;
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.I1x(this.m0x, "j-flag");
        this.Yk7d = {inputer: i0x[0], tipper: i0x[1]};
        this.ic4g = {onerror: this.btT5Y.g0x(this), onitemadd: this.btT5Y.g0x(this)};
        this.kx5C = i0x[2];
        h0x.s0x(i0x[2], "click", this.BM0x.g0x(this));
        h0x.s0x(i0x[3], "click", this.zg9X.g0x(this));
        h0x.s0x(this.m0x, "keypress", this.buc5h.g0x(this))
    };
    b0x.bZ1x = function () {
        this.cb1x = "m-wgt-create"
    };
    b0x.bj1x = function (e0x) {
        e0x.clazz = " m-layer-w2";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "新建歌单";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bk1x(e0x);
        this.Yk7d.inputer.value = e0x.name || "";
        this.tI8A = B1x.Yh7a.A1x(this.Yk7d);
        this.tI8A.coW7P();
        this.R1x = p0x.ht4x.A1x(this.ic4g);
        setTimeout(function () {
            this.Yk7d.inputer.focus()
        }.g0x(this), 0)
    };
    b0x.bA1x = function () {
        this.bF1x();
        if (this.tI8A) {
            this.tI8A.S1x();
            delete this.tI8A
        }
        this.sz7s(!1);
        this.Yk7d.inputer.value = ""
    };
    b0x.sz7s = function (SA5F) {
        this.od6X = SA5F;
        if (SA5F) {
            this.kx5C.innerHTML = "<i>新建中...</i>";
            a9j.x1x(this.kx5C, "u-btn2-dis")
        } else {
            this.kx5C.innerHTML = "<i>新 建</i>";
            a9j.v1x(this.kx5C, "u-btn2-dis")
        }
    };
    b0x.BM0x = function () {
        if (this.od6X || !this.tI8A.bQI1x()) return;
        var cr1x = {key: "playlist_new-" + GUser.userId, data: {name: this.tI8A.fB3x()}, offset: 1};
        this.R1x.iO4S(cr1x);
        this.sz7s(!0)
    };
    b0x.btT5Y = function (d0x) {
        var cd1x = (d0x.result || Y1x).code;
        if (!cd1x) {
            this.y1x("onsuccess", d0x.data)
        } else {
            this.y1x("onerror", d0x)
        }
        this.br1x()
    };
    b0x.zg9X = function () {
        this.br1x()
    };
    b0x.buc5h = function (d0x) {
        if (d0x.keyCode == 13) this.BM0x()
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        G1x = c0x("nej.ut"), w1x = c0x("nej.j"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), b0x, K1x;
    n0x.bjU2x = NEJ.C();
    b0x = n0x.bjU2x.O1x(n0x.dZ2x);
    K1x = n0x.bjU2x.cj1x;
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.I1x(this.m0x, "j-flag");
        this.ia4e = {
            limit: 301,
            parent: i0x[1],
            cache: {klass: p0x.ht4x, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bjW2x.g0x(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l0x.zP0x, escape: k0x.dI2x}
        };
        this.ic4g = {onsuccess: this.Ys7l.g0x(this), onerror: this.er3x.g0x(this)};
        h0x.s0x(i0x[0], "click", this.BM0x.g0x(this));
        h0x.s0x(i0x[1], "click", this.lx5C.g0x(this))
    };
    b0x.bZ1x = function () {
        this.cb1x = "m-wgt-subscribe"
    };
    b0x.bj1x = function (e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.clazz = " m-layer-w2";
        e0x.title = "添加到歌单";
        e0x.draggable = !0;
        e0x.mask = !0;
        this.bk1x(e0x);
        this.Yu7n = (e0x.tracks || []).reverse();
        this.ia4e.item.size = this.Yu7n.length;
        this.ic4g.name = e0x.name || "";
        this.buD5I = p0x.vv8n.A1x({onaddsuccess: this.Bs0x.g0x(this)});
        this.rS7L = p0x.ht4x.A1x({onlistload: this.coV7O.g0x(this)});
        this.rS7L.bPJ0x();
        k0x.bb1x(this.Yu7n, function (q0x, r0x, i0x) {
            if (!k0x.kW5b(q0x)) {
                i0x[r0x] = this.buD5I.eo3x(q0x) || q0x
            }
        }, this)
    };
    b0x.coV7O = function () {
        if (this.dy2x) this.dy2x.S1x();
        this.dy2x = G1x.iK4O.A1x(this.ia4e)
    };
    b0x.BM0x = function () {
        this.br1x();
        if (this.Ca0x) this.Ca0x.S1x();
        this.Ca0x = n0x.Yi7b.A1x(this.ic4g);
        this.Ca0x.M1x()
    };
    b0x.lx5C = function () {
        var coU7N = function (f0x) {
            while (f0x && f0x != document) {
                if (f0x.tagName.toLowerCase() == "li") {
                    return f0x
                }
                f0x = f0x.parentNode
            }
        };
        return function (d0x) {
            h0x.ci1x(d0x);
            var F1x = h0x.U1x(d0x), bkc2x = coU7N(F1x);
            if (!!bkc2x && !a9j.bz1x(bkc2x, "dis")) {
                this.Ys7l({id: a9j.u1x(bkc2x, "id")})
            }
        }
    }();
    b0x.Ys7l = function (d0x) {
        var D1x = d0x.id;
        if (!D1x || !this.Yu7n.length) return;
        this.buD5I.iO4S({key: "track_playlist-" + D1x, data: {tracks: this.Yu7n, pid: D1x}});
        this.br1x()
    };
    b0x.Bs0x = function () {
        this.y1x("onsuccess");
        n0x.X1x.M1x({tip: "收藏成功"})
    };
    b0x.er3x = function (d0x) {
        this.br1x();
        this.y1x("onerror", d0x);
        var cE2x = "收藏失败";
        switch (d0x.code) {
            case 405:
                cE2x = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cE2x = "歌单数量超过限制";
                break;
            case 502:
                cE2x = "歌曲已经存在"
        }
        n0x.X1x.M1x({tip: cE2x, type: 2})
    };
    b0x.bjW2x = function () {
        this.br1x();
        n0x.X1x.M1x({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l0x.lH5M = function (e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n0x.bjU2x.M1x(e0x)
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, dh2x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"),
        w1x = c0x("nej.j"), k0x = c0x("nej.u"), l0x = c0x("nm.x");
    var bkh2x, nA6u, W1x = decodeURIComponent(location.href),
        jc4g = /.+(https?:\/\/.+\/proxy.html)/.test(W1x) ? RegExp.$1 : "";
    if (!!jc4g) {
        w1x.vT8L("mail_proxy_url", jc4g)
    } else {
        jc4g = w1x.us8k("mail_proxy_url") || "about:blank"
    }
    bkh2x = a9j.baA8s({
        src: jc4g, onload: function () {
            nA6u = true
        }
    });
    var buU5Z = function () {
        w1x.gQ4U("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var coT7M = function () {
        if (dh2x.dk2x.browser == "ie" && parseInt(dh2x.dk2x.version) < 9) {
            l0x.eW3x({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l0x.RN5S = function (t1x, D1x, V1x) {
        if (!coT7M()) return;
        buU5Z();
        if (V1x == "stop") {
            if (!nA6u) throw"proxy not loaded";
            buU5Z();
            bkh2x.contentWindow.location.replace(jc4g + "#" + k0x.db2x({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            bkh2x.contentWindow.location.replace(jc4g + "#" + k0x.db2x({
                to: "ifrmMusic",
                message: JSON.stringify({type: t1x, id: D1x, s: +(new Date), action: V1x})
            }))
        }
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), w1x = c0x("nej.j"),
        k0x = c0x("nej.u"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), p0x = c0x("nm.d");
    var ky5D = p0x.hY4c.A1x();
    var of6Z = p0x.vv8n.A1x({onlistload: coS7L, onitemload: coR7K, onerror: er3x});
    var Cj0x = p0x.py6s.A1x({onlistload: coQ7J, onitemload: coP7I, onerror: er3x});
    var bvk5p = {};

    function uB8t(d0x) {
        var f0x = h0x.U1x(d0x, "d:resAction"), V1x = a9j.u1x(f0x, "resAction");
        if (f0x && (V1x == "play" || V1x == "addto")) {
            var t1x = parseInt(a9j.u1x(f0x, "resType"));
            bvo5t({
                action: V1x,
                type: t1x,
                id: a9j.u1x(f0x, "resId"),
                from: a9j.u1x(f0x, "resFrom"),
                data: a9j.u1x(f0x, "resData"),
                order: a9j.u1x(f0x, "resOrder"),
                node: f0x
            });
            if (t1x != 13) bvp5u(f0x)
        }
    }

    function bvo5t(bP1x) {
        var V1x = bP1x.action, t1x = bP1x.type, D1x = bP1x.id, dP2x = bP1x.from, j0x = bP1x.data, rO7H = bP1x.order,
            e0x = {
                limit: 1e3,
                offset: 0,
                data: {id: D1x},
                ext: {id: D1x, action: V1x, type: t1x, from: dP2x, data: j0x, node: bP1x.node}
            };
        if (V1x != "play" && V1x != "addto" || !t1x) return;
        if (window.GRef && GRef == "mail") {
            l0x.RN5S(t1x, D1x, V1x);
            return
        }
        switch (t1x) {
            case 13:
                e0x.key = "track_playlist-" + D1x;
                of6Z.kG5L(e0x);
                break;
            case 17:
                e0x.key = "program";
                e0x.id = D1x;
                Cj0x.Uu6o(e0x);
                if (V1x == "play") {
                    w1x.bp1x("/api/dj/program/listen", {query: {id: D1x}})
                }
                break;
            case 18:
                e0x.key = "track";
                e0x.id = D1x;
                of6Z.Uu6o(e0x);
                break;
            case 19:
                e0x.key = "track_album-" + D1x;
                of6Z.kG5L(e0x);
                break;
            case 24:
                e0x.key = "track_day";
                of6Z.kG5L(e0x);
                break;
            case 2:
                e0x.key = "track_artist_top-" + D1x;
                of6Z.kG5L(e0x);
                break;
            case 70:
                e0x.key = "program_djradio-" + D1x + "-" + rO7H;
                e0x.data.radioId = D1x;
                e0x.data.asc = rO7H == 2;
                Cj0x.kG5L(e0x);
                break
        }
    }

    function bvq5v(i0x) {
        var o0x = [];
        k0x.bb1x(i0x, function (q0x) {
            if (q0x.mainSong) {
                q0x.mainSong.program = q0x;
                o0x.push(q0x.mainSong);
                q0x.localupdatetime = +(new Date);
                of6Z.cvk9b(q0x.mainSong);
                q0x.mainTrackId = q0x.mainSong.id;
                delete q0x.mainSong
            } else {
                var bvt5y = of6Z.eo3x(q0x.mainTrackId);
                bvt5y && o0x.push(bvt5y)
            }
        });
        return o0x
    }

    function YC7v(i0x, e0x) {
        var qX7Q = e0x.action == "play" && e0x.type != 17 && e0x.type != 18, fy3x = e0x.action == "play";
        if (!i0x.length) return;
        if (e0x.type == 19) {
            i0x = l0x.Jq2x(i0x, true, {play: true}, {source: "album", sourceid: e0x.id})
        } else {
            i0x = l0x.Jq2x(i0x, true, {play: true})
        }
        k0x.bb1x(i0x, function (q0x) {
            q0x.source = l0x.bka2x({fid: e0x.from, fdata: e0x.data, type: e0x.type, rid: e0x.id}, q0x.id)
        });
        top.player.addTo(i0x, qX7Q, fy3x);
        ky5D.Qa4e({rid: e0x.id, type: e0x.type, hash: l0x.JV3x(), play: fy3x, source: e0x.from, sourceid: e0x.data})
    }

    function coS7L(d0x) {
        var eG3x = d0x.ext || {};
        i0x = of6Z.gV4Z(d0x.key);
        YC7v(i0x, eG3x);
        if (eG3x.type == 13 && eG3x.action == "play" && i0x && i0x.length > 0) {
            bvp5u(eG3x.node);
            w1x.bp1x("/api/playlist/update/playcount", {query: {id: eG3x.id}})
        }
    }

    function coR7K(d0x) {
        var i0x = [of6Z.eo3x(d0x.id)], be1x = i0x[0], pJ6D = l0x.pj6d(be1x), su7n = be1x.privilege || {};
        if (pJ6D == 10) {
            l0x.sX8P(su7n.fee || be1x.fee, be1x.id, "song", null, su7n)
        } else if (pJ6D == 100) {
            l0x.in4r(null, null, null, true, be1x)
        } else if (pJ6D == 11) {
            l0x.bGN8F(be1x.id, 18)
        } else {
            YC7v(i0x, d0x.ext)
        }
    }

    function coQ7J(d0x) {
        var i0x = bvq5v(Cj0x.gV4Z(d0x.key));
        YC7v(i0x, d0x.ext)
    }

    function coP7I(d0x) {
        var i0x = bvq5v([Cj0x.eo3x(d0x.id)]);
        YC7v(i0x, d0x.ext)
    }

    function er3x() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bvp5u(f0x) {
        var t1x = a9j.u1x(f0x, "resType"), D1x = a9j.u1x(f0x, "resId"), J1x = t1x + "-" + D1x;
        if (bvk5p[J1x]) return;
        var bvD5I = a9j.z1x("play-count"), bkI2x = a9j.I1x(f0x.parentNode, "nb"), Rk5p = null;
        if (bvD5I) {
            Rk5p = bvD5I
        } else {
            Rk5p = !!bkI2x && !!bkI2x[0] ? bkI2x[0] : null
        }
        if (Rk5p) {
            var cB1x = Rk5p.innerHTML;
            if (/^\d+$/.test(cB1x)) {
                Rk5p.innerText = +cB1x + 1
            }
            bvk5p[J1x] = true
        }
    }

    l0x.coO7H = function (f0x) {
        h0x.s0x(f0x || document.body, "click", uB8t.g0x(this))
    };
    l0x.coN7G = function (V1x, t1x, D1x) {
        bvo5t({action: V1x, type: t1x, id: D1x})
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), w1x = c0x("nej.j"),
        G1x = c0x("nej.ut"), p0x = c0x("nm.d"), b0x, K1x;
    p0x.eY3x({
        "share-all": {
            url: "/api/share/friends/resource", format: function (o0x, e0x) {
                this.coM7F(o0x, e0x)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (o0x, e0x) {
                this.y1x("onshareall", e0x.result)
            }, onerror: function (o0x, e0x) {
                this.y1x("onshareall", e0x.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (o0x, e0x) {
                e0x.options.picUrl = o0x.picUrl;
                this.bvP5U(e0x.options, e0x.result)
            }, onerror: function (o0x, e0x) {
                this.y1x("onshareall", e0x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (P1x, e0x) {
                this.oT6N("vid_info-" + e0x.data.nosKey, P1x);
                return P1x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e0x) {
            }, format: function (o0x, e0x) {
                e0x.data = e0x.data2;
                this.ch1x("share-all", e0x)
            }, onerror: "onshareerror"
        }
    });
    p0x.ble2x = NEJ.C();
    b0x = p0x.ble2x.O1x(p0x.he4i);
    b0x.coL7E = function () {
        var tA8s = function (P1x, e0x) {
            e0x.times++;
            if (e0x.times > 10) {
                this.y1x("onvinfoerror", e0x.key, P1x)
            } else {
                setTimeout(eB3x.g0x(this, e0x), e0x.times * 1e3)
            }
        };
        var xl9c = function (P1x, e0x) {
            this.y1x("onvinfo", e0x.key, P1x)
        };
        var eB3x = function (e0x) {
            var W1x = e0x.url;
            w1x.bp1x(W1x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xl9c.eb2x(this, e0x),
                onerror: tA8s.eb2x(this, e0x)
            })
        };
        return function (e0x) {
            e0x.times = 0;
            eB3x.call(this, e0x)
        }
    }();
    b0x.cyt0x = function () {
        var QI5N;
        var tA8s = function (P1x, e0x) {
            if (P1x.code > 0) {
                clearInterval(this.Cz0x);
                this.y1x("onviderror", e0x.data.nosKey)
            }
        };
        var xl9c = function (J1x, P1x) {
            if (P1x.vid && P1x.covers) {
                clearInterval(this.Cz0x);
                this.y1x("onvid", J1x, P1x)
            }
        };
        var eB3x = function (e0x) {
            if (+(new Date) - QI5N > 60 * 60 * 1e3) {
                clearInterval(this.Cz0x);
                this.y1x("onviderror", e0x.data.nosKey);
                return
            }
            e0x.onload = xl9c.g0x(this, e0x.data.nosKey);
            e0x.onerror = tA8s.g0x(this);
            this.ch1x("vid-get", e0x)
        };
        return function (e0x) {
            if (!e0x || !e0x.data) return;
            QI5N = +(new Date);
            this.Cz0x = clearInterval(this.Cz0x);
            this.Cz0x = setInterval(eB3x.g0x(this, e0x), 1e4);
            eB3x.apply(this, arguments)
        }
    }();
    b0x.coJ7C = function () {
        this.Cz0x = clearInterval(this.Cz0x)
    };
    b0x.coM7F = function (o0x, mR5W) {
        if (o0x.event && mR5W.snsTypes) {
            if (mR5W.pics) {
                var bwl5q = [];
                for (var i = 0, len = mR5W.pics.length; i < len; i++) {
                    bwl5q[i] = mR5W.pics[i].originId
                }
                this.ch1x("share_img_compound", {data: {picIds: bwl5q.join(",")}, options: mR5W, result: o0x})
            } else {
                mR5W.picUrl = mR5W.picUrl;
                this.bvP5U(mR5W, o0x)
            }
        } else {
            this.y1x("onshareall", o0x)
        }
        var yc9T = p0x.hY4c.A1x();
        yc9T.gm3x(mR5W.isPub ? "pubevent" : "shareevent", {id: o0x.id})
    };
    b0x.bvP5U = function (mR5W, o0x) {
        var cr1x = {};
        cr1x.eventid = o0x.event.id;
        cr1x.eventtype = o0x.event.type;
        mR5W.picUrl && (cr1x.picUrl = mR5W.picUrl);
        cr1x.snsTypes = mR5W.snsTypes;
        cr1x.msg = mR5W.data.msg || "";
        cr1x.type = mR5W.data.type;
        mR5W.data.id && (cr1x.id = mR5W.data.id);
        this.ch1x("share-sns", {data: cr1x, result: o0x})
    };
    b0x.coH7A = function (e0x) {
        var j0x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k0x.nh6b(5)
        };
        j0x = NEJ.EX(j0x, e0x);
        if (!(j0x.id > 0)) {
            delete j0x.id;
            j0x.type = "noresource"
        }
        if (!j0x.threadId) {
            delete j0x.threadId
        }
        if (!j0x.actId) {
            delete j0x.actId
        }
        if (!j0x.pics) {
            delete j0x.pics
        } else {
            j0x.pics = JSON.stringify(j0x.pics)
        }
        this.ch1x("share-all", {
            data: j0x,
            snsTypes: e0x.snsTypes,
            picUrl: e0x.picUrl,
            pics: e0x.pics,
            isPub: e0x.isPub
        })
    };
    b0x.coG7z = function (e0x) {
        this.ch1x("share-private", e0x)
    };
    b0x.coF7y = function (e0x) {
        this.ch1x("video-submit", e0x)
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K1x;
    var coE7x = {40: !0};
    p0x.eY3x({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e0x) {
                e0x.data.getcounts = true;
                e0x.data.pagesize = e0x.data.limit;
                if (e0x.data.offset == 0) {
                    e0x.data.lasttime = -1
                }
                delete e0x.data.offset
            }, format: function (P1x, e0x) {
                P1x.event = l0x.WH6B(P1x.event, function (q0x, r0x) {
                    return !coE7x[q0x.type]
                });
                this.coD7w(P1x.event);
                e0x.data.lasttime = P1x.lasttime;
                if (P1x.event.length) {
                    P1x.event.length = e0x.limit
                }
                return {list: P1x.event, total: P1x.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (P1x, e0x) {
                return {list: P1x.events, total: P1x.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e0x) {
                e0x.data.pagesize = 20
            }, format: function (P1x, e0x) {
                return P1x.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e0x) {
                e0x.data.time = -1;
                e0x.data.getcounts = true
            }, format: function (P1x, e0x) {
                P1x.events.length = e0x.limit;
                return {list: P1x.events, total: P1x.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (o0x, e0x) {
                o0x.conf = e0x.conf;
                return o0x
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e0x, bd1x) {
                if (e0x.like) {
                    if (e0x.comment) {
                        bd1x.url = "/api/v1/comment/like"
                    } else {
                        bd1x.url = "/api/resource/like"
                    }
                    bd1x.onload = "oneventlike";
                    bd1x.onerror = "oneventlikeerr"
                } else {
                    if (e0x.comment) {
                        bd1x.url = "/api/v1/comment/unlike"
                    } else {
                        bd1x.url = "/api/resource/unlike"
                    }
                    bd1x.onload = "oneventunlike";
                    bd1x.onerror = "oneventunlikeerr"
                }
            }, format: function (o0x, e0x) {
                o0x.eid = e0x.eid;
                o0x.origin = e0x.origin;
                o0x.ext = e0x.ext;
                return o0x
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (o0x, e0x) {
                o0x.id = e0x.data.id;
                return o0x
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e0x, bd1x) {
                if (e0x.data.type == "nointer") {
                    bd1x.url = "/api/event/rcmd/reject"
                } else if (e0x.data.transcoding) {
                    bd1x.url = "/api/event/video/transcoding/delete"
                } else {
                    bd1x.url = "/api/event/delete"
                }
            }, format: function (o0x, e0x) {
                o0x.id = e0x.data.id;
                return o0x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (o0x, e0x) {
                o0x.id = e0x.data.id;
                return o0x
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e0x) {
                e0x.data.lasttime = e0x.data.lasttime || -1;
                e0x.data.pagesize = e0x.data.limit;
                e0x.data.getcounts = true;
                delete e0x.data.offset
            }, format: function (P1x, e0x) {
                e0x.data.lasttime = P1x.lasttime;
                var i0x = P1x.events;
                if (P1x.more) i0x = this.coC7v(i0x, e0x.data.pagesize);
                return {list: i0x, total: P1x.size}
            }, onerror: "onlisterror"
        }
    });
    p0x.zb9S = NEJ.C();
    b0x = p0x.zb9S.O1x(p0x.he4i);
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.blN2x = function (t1x, cP2x) {
        return t1x + "-" + cP2x
    };
    b0x.cyu0x = function (e0x) {
        this.ch1x("ievent-get", e0x)
    };
    b0x.cyv0x = function (e0x) {
        this.ch1x("ievent-new-get", e0x)
    };
    b0x.cyx0x = function (e0x) {
        this.ch1x("ievent-user-get", e0x)
    };
    b0x.cyy0x = function (t1x, cP2x) {
        return this.qs7l(this.blN2x(t1x, cP2x))
    };
    b0x.cyz0x = function (GR2x, e0x) {
        if (!GR2x || !GR2x.length) return;
        e0x = e0x || {};
        var bu1x = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, Fy1x = [], bxd5i = [], j0x; i < GR2x.length; ++i) {
            j0x = GR2x[i];
            j0x = this.qs7l(this.blN2x(j0x.type, j0x.id));
            if (!j0x) {
                Fy1x.push(GR2x[i].id);
                bxd5i.push(bu1x[GR2x[i].type] || 0)
            }
        }
        if (!Fy1x.length) {
            this.y1x("oneventresload", e0x.conf);
            return
        }
        e0x.data = {ids: JSON.stringify(Fy1x), types: JSON.stringify(bxd5i)};
        e0x.onload = this.cov7o.g0x(this);
        this.ch1x("ievent-res-get", e0x)
    };
    b0x.cov7o = function (o0x) {
        if (o0x.code != 200) {
            this.y1x("oneventreserror", o0x.code);
            return
        }
        var bu1x = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i0x = o0x.results; i < i0x.length; ++i) {
            this.oT6N(this.blN2x(bu1x[i0x[i].type], i0x[i].id), i0x[i])
        }
        this.y1x("oneventresload", o0x.conf)
    };
    b0x.bxi5n = function (j0x) {
        var J1x = "event-list";
        this.bkN2x(J1x, j0x);
        this.y1x("onitemadd", {key: J1x, action: "add", data: j0x, flag: -1})
    };
    b0x.xA9r = function (e0x) {
        this.ch1x("ievent-like", e0x)
    };
    b0x.lK5P = function (e0x) {
        this.ch1x("ievent-delete", e0x)
    };
    b0x.coC7v = function (i0x, gc3x) {
        for (var i = i0x.length; i < gc3x; i++) i0x.push(null);
        return i0x
    };
    b0x.coD7w = function (i0x) {
        var o0x = [];
        if (!i0x || !i0x.length) return;
        k0x.bb1x(i0x, function (d0x) {
            d0x.biData = this.bxk5p(d0x)
        }, this)
    };
    b0x.bxk5p = function () {
        var UF6z = {32: "comment", 33: "activity", 34: "recomment_artist"},
            cou7n = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d0x) {
            var P1x = {
                id: d0x.id,
                sourceid: d0x.user.userId,
                alg: d0x.rcmdInfo ? d0x.rcmdInfo.alg : null,
                contentType: UF6z[d0x.type] || (k0x.cV2x(cou7n, d0x.type) != -1 ? "user_event" : "other")
            };
            return P1x
        }
    }();
    b0x.CO0x = function (cot7m, d0x) {
        var P1x = this.bxk5p(d0x);
        P1x.actionType = cot7m;
        if (window.log) log("eventclick", P1x)
    };
    b0x.cyA0x = function (e0x) {
        this.ch1x("event_latest-list", e0x)
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
        this.qk7d += contents;
        this.bm1x += contents.length;
        var length = this.qk7d.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dN2x, md5blk(this.qk7d.substring(i - 64, i)))
        }
        this.qk7d = this.qk7d.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.qk7d, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oj6d(tail, length);
        ret = hex(this.dN2x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.qk7d = "";
        this.bm1x = 0;
        this.dN2x = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.qk7d, length: this.bm1x, hash: this.dN2x}
    };
    SparkMD5.prototype.setState = function (state) {
        this.qk7d = state.buff;
        this.bm1x = state.length;
        this.dN2x = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dN2x;
        delete this.qk7d;
        delete this.bm1x
    };
    SparkMD5.prototype.oj6d = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dN2x, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bm1x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dN2x, tail)
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
        var buff = concatenateArrayBuffers(this.qk7d.buffer, arr, true), length = buff.length, i;
        this.bm1x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dN2x, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qk7d = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.qk7d, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oj6d(tail, length);
        ret = hex(this.dN2x);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.qk7d = new Uint8Array(0);
        this.bm1x = 0;
        this.dN2x = [1732584193, -271733879, -1732584194, 271733878];
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
    SparkMD5.ArrayBuffer.prototype.oj6d = SparkMD5.prototype.oj6d;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), w1x = c0x("nej.j"),
        dU2x = c0x("nej.g"), k0x = c0x("nej.u"), fo3x = c0x("nej.n"), G1x = c0x("nej.ut"), l0x = c0x("nm.x"),
        p0x = c0x("nm.d"), iW4a = c0x("nm.x.nos"), B1x = c0x("nm.w");
    var coq7j = 1024 * 256, cop7i = 1024 * 1024 * 2, pD6x = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bxI6C = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bo1x,
        pC6w = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        jA4E = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var ni6c = {};
    var yc9T = p0x.hY4c.A1x();
    iW4a.cyC0x = function () {
        return jA4E
    };
    var com7f = function () {
        return k0x.nh6b(6) + +(new Date)
    };
    var GP2x = function (ib4f, e0x) {
        if (!ni6c[e0x.taskId]) {
            return
        }
        (e0x.onuploading || bo1x).call(this, ib4f)
    };
    var bmA3x = function (Q1x) {
        var col7e = Q1x.md5, cM2x = Q1x.file, cok7d = col7e + cM2x.size;
        return "nos_file_hash_" + cok7d
    };
    var coj7c = function (Q1x) {
        var J1x = bmA3x(Q1x), j0x = w1x.bQp0x(J1x, "{}");
        try {
            j0x = JSON.parse(j0x)
        } catch (e) {
            j0x = {}
        }
        return j0x
    };
    var coh7a = function (Q1x, e0x) {
        if (!Q1x.md5) {
            return
        }
        var J1x = bmA3x(Q1x), j0x = w1x.bQp0x(J1x, "{}");
        try {
            j0x = JSON.parse(j0x)
        } catch (e) {
            j0x = {}
        }
        NEJ.X(j0x, e0x);
        w1x.vT8L(J1x, JSON.stringify(j0x))
    };
    var cog7Z = function (Q1x) {
        var J1x = bmA3x(Q1x);
        w1x.Pd4h(J1x)
    };
    var cof7Y = function (Q1x, gj3x) {
        var W1x = Q1x.urls[Math.min(Q1x.urlIndex, Q1x.urls.length - 1)], cM2x = Q1x.file, kn5s = Q1x.bucket,
            lP5U = Q1x.objectKey, ex3x = Q1x.token, bM1x = Q1x.context, nQ6K = {},
            Oc4g = bxI6C.call(cM2x, Q1x.beg, Q1x.end),
            bw1x = {offset: Q1x.beg, complete: Q1x.lastChunk || false, version: "1.0"};
        if (bM1x) {
            bw1x.context = bM1x
        }
        nQ6K["x-nos-token"] = ex3x;
        nQ6K[dU2x.yj9a] = cM2x.type;
        Q1x.reqId = w1x.bp1x(W1x + "/" + kn5s + "/" + lP5U, {
            type: "json",
            method: "POST",
            headers: nQ6K,
            query: bw1x,
            data: Oc4g,
            onload: gj3x.onload,
            onerror: gj3x.onerror
        })
    };
    var coe7X = function (o0x, Q1x, e0x) {
        o0x = {
            code: 200,
            fileName: e0x.file.name,
            size: e0x.file.size,
            type: e0x.file.type,
            bucket: Q1x.bucket,
            docId: Q1x.docId,
            objectKey: Q1x.objectKey,
            url: "//nos.netease.com/" + Q1x.bucket + "/" + Q1x.objectKey
        };
        cog7Z(Q1x);
        if (!ni6c[e0x.taskId]) {
            return
        }
        delete ni6c[e0x.taskId];
        yc9T.gm3x("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(o0x)});
        (e0x.onsuccess || bo1x).call(this, o0x)
    };
    var coc7V = function (o0x, e0x) {
        (e0x.onerror || bo1x).call(this, o0x)
    };
    var coa7T = function (o0x, Q1x, e0x) {
        Q1x.context = o0x.context;
        Q1x.beg = o0x.offset;
        var ib4f = Q1x.beg / Q1x.file.size;
        coh7a(Q1x, {
            bucket: Q1x.bucket,
            objectKey: Q1x.objectKey,
            token: Q1x.token,
            context: Q1x.context,
            beg: Q1x.beg,
            updateTime: +(new Date)
        });
        ib4f = pC6w.DNS_GET + (pC6w.UPLOADED - pC6w.DNS_GET) * ib4f;
        GP2x(ib4f, e0x);
        if (Q1x.lastChunk) {
            coe7X(o0x, Q1x, e0x)
        } else {
            ZJ8B(Q1x, e0x)
        }
    };
    var cnZ7S = function (o0x, Q1x, e0x) {
        yc9T.gm3x("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o0x.data,
            body: o0x.extData,
            ext: JSON.stringify(Q1x),
            timging: +(new Date) - Q1x.chuckUploadStartTime
        });
        if (Q1x.urlIndex < Math.max(Q1x.urls.length - 1, 5)) {
            Q1x.urlIndex++;
            ZJ8B(Q1x, e0x)
        } else {
            coc7V(o0x, e0x)
        }
    };
    var ZJ8B = function (Q1x, e0x) {
        if (!Q1x || Q1x.step == -1) {
            return
        }
        Q1x.end = Q1x.beg + coq7j;
        if (Q1x.end >= Q1x.file.size) {
            Q1x.end = Q1x.file.size;
            Q1x.lastChunk = true
        }
        Q1x.chuckUploadStartTime = +(new Date);
        cof7Y(Q1x, {onload: coa7T.eb2x(this, Q1x, e0x), onerror: cnZ7S.eb2x(this, Q1x, e0x)})
    };
    var cnY7R = function (o0x, Q1x, e0x) {
        Q1x.beg = o0x.offset;
        var ib4f = Q1x.beg / Q1x.file.size;
        ib4f = pC6w.DNS_GET + (pC6w.UPLOADED - pC6w.DNS_GET) * ib4f;
        GP2x(ib4f, e0x);
        ZJ8B(Q1x, e0x)
    };
    var cnX7Q = function (o0x, Q1x, e0x) {
        Q1x.beg = 0;
        delete Q1x.context;
        bnS3x(Q1x, e0x)
    };
    var byD6x = function (Ns4w, Q1x, e0x) {
        Q1x.lastChunk = false;
        Q1x.urls = Ns4w;
        Q1x.urlIndex = 0;
        GP2x(pC6w.DNS_GET, e0x);
        if (Q1x.fromExist) {
            delete Q1x.fromExist;
            var W1x = Q1x.urls[Math.min(Q1x.urlIndex, Q1x.urls.length - 1)], kn5s = Q1x.bucket, lP5U = Q1x.objectKey,
                ex3x = Q1x.token, bM1x = Q1x.context, nQ6K = {}, bw1x = {context: bM1x, version: "1.0"};
            nQ6K["x-nos-token"] = ex3x;
            Q1x.reqId = w1x.bp1x(W1x + "/" + kn5s + "/" + lP5U + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: nQ6K,
                query: bw1x,
                onload: cnY7R.eb2x(this, Q1x, e0x),
                onerror: cnX7Q.eb2x(this, Q1x, e0x)
            })
        } else {
            Q1x.beg = 0;
            ZJ8B(Q1x, e0x)
        }
    };
    var cnV7O = function (o0x, Q1x, e0x) {
        o0x.code = pD6x.DNS_ERROR;
        (e0x.onerror || bo1x).call(this, o0x)
    };
    var byG6A = function (j0x, e0x) {
        var o0x = j0x.result || {}, kn5s = o0x.bucket, lP5U = o0x.objectKey, ex3x = o0x.token, Q1x = ni6c[e0x.taskId];
        if (!kn5s || !lP5U || !ex3x || !Q1x) {
            o0x.code = pD6x.TOKEN_ERROR;
            (e0x.onerror || bo1x).call(this, o0x);
            return
        }
        Q1x.bucket = kn5s;
        Q1x.objectKey = lP5U;
        Q1x.docId = o0x.docId;
        Q1x.token = ex3x;
        GP2x(pC6w.TOKEN_GET, e0x);
        if (location.protocol == "https:") {
            byD6x(["//nosup-hz1.127.net"], Q1x, e0x)
        } else {
            Q1x.reqId = iW4a.cnS7L({
                bucket: kn5s,
                onload: byD6x.eb2x(this, Q1x, e0x),
                onerror: cnV7O.eb2x(this, Q1x, e0x)
            })
        }
        Q1x.step = 1
    };
    var cnR7K = function (o0x, e0x) {
        o0x.code = pD6x.TOKEN_ERROR;
        (e0x.onerror || bo1x).call(this, o0x)
    };
    var bnS3x = function (Q1x, e0x) {
        var cM2x = e0x.file, eV3x = cM2x.name || "", eG3x = eV3x.split(".").pop();
        iW4a.ZV8N(NEJ.X({
            filename: eV3x,
            ext: eG3x,
            onload: byG6A.eb2x(this, e0x),
            onerror: cnR7K.eb2x(this, e0x)
        }, e0x, function (q0x) {
            return k0x.gb3x(q0x) || k0x.kW5b(q0x)
        }))
    };
    var cnQ7J = function (Q1x, e0x) {
        if (!Q1x || Q1x.step == -1) {
            return
        }
        Q1x.md5 = Q1x.spark.end();
        var Gw2x = coj7c(Q1x) || {}, kn5s = Gw2x.bucket, lP5U = Gw2x.objectKey, ex3x = Gw2x.token;
        if (!kn5s || !lP5U || !ex3x) {
            bnS3x(Q1x, e0x)
        } else {
            Q1x.context = Gw2x.context;
            Q1x.beg = Gw2x.beg;
            Q1x.fromExist = true;
            byG6A({result: Gw2x}, e0x)
        }
    };
    var cnP7I = function (DA1x, Q1x, e0x) {
        if (!Q1x || Q1x.step == -1) {
            return
        }
        Q1x.beg = Q1x.end;
        var ib4f = Q1x.beg / Q1x.file.size;
        ib4f = 0 + pC6w.MD5_DONE * ib4f;
        GP2x(ib4f, e0x);
        Q1x.spark.append(DA1x.result);
        if (Q1x.lastChunk) {
            cnQ7J(Q1x, e0x)
        } else {
            byZ6T(Q1x, e0x)
        }
    };
    var cnM7F = function (o0x, Q1x, e0x) {
        Q1x.md5 = "";
        bnS3x(Q1x, e0x)
    };
    var byZ6T = function (Q1x, e0x) {
        if (!Q1x || Q1x.step == -1) {
            return
        }
        Q1x.end = Q1x.beg + cop7i;
        if (Q1x.end >= Q1x.file.size) {
            Q1x.end = Q1x.file.size;
            Q1x.lastChunk = true
        }
        var DA1x = new FileReader;
        DA1x.onload = cnP7I.g0x(this, DA1x, Q1x, e0x);
        DA1x.onerror = cnM7F.g0x(this, DA1x, Q1x, e0x);
        DA1x.readAsArrayBuffer(bxI6C.call(Q1x.file, Q1x.beg, Q1x.end))
    };
    iW4a.gr3x = function (e0x) {
        var cM2x = e0x.file, eV3x = cM2x.name || "", eG3x = eV3x.split(".").pop(), DC1x = com7f();
        e0x.taskId = DC1x;
        ni6c[DC1x] = {step: 0};
        GP2x(0, e0x);
        var Q1x = ni6c[DC1x];
        Q1x.id = DC1x;
        Q1x.file = cM2x;
        Q1x.beg = 0;
        Q1x.lastChunk = false;
        Q1x.spark = new SparkMD5.ArrayBuffer;
        var cnL7E = e0x.onerror || bo1x;
        e0x.onerror = function () {
            if (!ni6c[DC1x]) {
                return
            }
            delete ni6c[DC1x];
            cnL7E.apply(this, arguments)
        };
        yc9T.gm3x("sysaction", {type: "nosuploadstart", location: location.href});
        byZ6T(Q1x, e0x);
        return DC1x
    };
    iW4a.jy4C = function (D1x) {
        var Q1x = ni6c[D1x];
        if (Q1x) {
            if (Q1x.step == 0) {
                delete ni6c[D1x]
            } else {
                Q1x.step = -1;
                if (Q1x.reqId) {
                    w1x.jy4C(Q1x.reqId)
                }
                delete ni6c[D1x]
            }
        }
    };
    iW4a.ZV8N = function () {
        var wL9C = function (o0x, e0x) {
            (e0x.onload || bo1x).call(this, o0x)
        };
        var Ad0x = function (o0x, e0x) {
            (e0x.onerror || bo1x).call(this, o0x)
        };
        var bzg6a = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e0x) {
            var bag8Y = e0x.returnBody || bzg6a;
            if (k0x.kW5b(bag8Y)) {
                try {
                    JSON.stringify(bag8Y)
                } catch (e) {
                    bag8Y = bzg6a
                }
            }
            return w1x.bp1x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e0x.filename || "",
                    ext: e0x.ext || "",
                    type: e0x.type || jA4E.OTHER,
                    bucket: e0x.bucket || "",
                    local: e0x.local || false,
                    nos_product: e0x.nosProduct || 0,
                    return_body: bag8Y
                },
                onload: wL9C.eb2x(this, e0x),
                onerror: Ad0x.eb2x(this, e0x)
            })
        }
    }();
    iW4a.cnS7L = function () {
        var cnK7D = "//wanproxy.127.net/lbs";
        var wL9C = function (o0x, e0x) {
            if (o0x.lbs) {
            }
            var Ns4w = o0x.upload;
            if (!Ns4w || !Ns4w.length) {
                Ad0x(o0x, e0x)
            }
            (e0x.onload || bo1x).call(this, Ns4w)
        };
        var Ad0x = function (o0x, e0x) {
            (e0x.onerror || bo1x).call(this, o0x)
        };
        return function (e0x) {
            var kn5s = e0x.bucket;
            return w1x.bp1x(cnK7D, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: kn5s},
                onload: wL9C.eb2x(this, e0x),
                onerror: Ad0x.eb2x(this, e0x)
            })
        }
    }();
    iW4a.bai8a = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), w1x = c0x("nej.j"),
        bX1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), iW4a = c0x("nm.x.nos"),
        E1x = c0x("nm.m"), n0x = c0x("nm.l"), B1x = c0x("nm.w"), b0x, K1x;
    var gn3x = a9j.il4p('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    B1x.bzn6h = NEJ.C();
    b0x = B1x.bzn6h.O1x(bD1x.ef2x);
    b0x.bZ1x = function () {
        this.cb1x = gn3x
    };
    b0x.bR1x = function () {
        this.cc1x();
        this.bx1x = this.m0x;
        this.gU4Y = a9j.I1x(this.m0x, "j-file")[0];
        h0x.s0x(this.gU4Y, "change", this.qw7p.g0x(this))
    };
    b0x.bj1x = function (e0x) {
        e0x = e0x || {};
        this.bk1x(e0x);
        this.gU4Y.accept = e0x.accept || "*";
        this.uA8s = e0x
    };
    b0x.baj8b = function () {
        return a9j.la5f(this.gU4Y)
    };
    b0x.qw7p = function (d0x) {
        if (this.gU4Y.value == "") return;
        var jN5S = this.gU4Y.value.split("\\"), eV3x = jN5S.length > 0 ? jN5S[jN5S.length - 1] : jN5S[0],
            om6g = (this.gU4Y.files || [{}])[0];
        var fY3x = {files: this.gU4Y.files, filename: eV3x, size: om6g.size, cancelUpload: false};
        this.y1x("onchange", fY3x);
        if (fY3x.cancelUpload) {
            this.gU4Y.value = "";
            return
        }
        if (fY3x.stopped) {
            return
        }
        this.MB3x()
    };
    b0x.MB3x = function () {
        if (this.gU4Y.value == "") return;
        var jN5S = this.gU4Y.value.split("\\"), eV3x = jN5S.length > 0 ? jN5S[jN5S.length - 1] : jN5S[0],
            eG3x = (eV3x.split(".") || []).pop(), om6g = (this.gU4Y.files || [{}])[0],
            DQ1x = (om6g.type || "").split("/").shift();
        if (om6g.size > 100 * 1024 * 1024) {
            return this.mC5H("onerror", {code: -200})
        }
        this.y1x("onuploading", 0);
        this.bzM6G = iW4a.ZV8N(NEJ.X({
            onload: this.MA3x.eb2x(this, eV3x),
            onerror: this.mC5H.g0x(this)
        }, this.uA8s, function (q0x) {
            return k0x.gb3x(q0x) || k0x.kW5b(q0x)
        }))
    };
    b0x.MA3x = function (bO1x, eV3x) {
        var o0x = bO1x.result || {}, kn5s = o0x.bucket, lP5U = o0x.objectKey, ex3x = o0x.token;
        if (!kn5s || !lP5U || !ex3x) {
            bO1x.code = -100;
            this.mC5H.call(this, bO1x);
            return
        }
        var om6g = (this.gU4Y.files || [{}])[0];
        var iR4V = a9j.cU2x(this.bx1x);
        iR4V[0].value = lP5U;
        iR4V[1].value = ex3x;
        if (om6g.type && om6g.type.indexOf("audio") == 0) {
            iR4V[3].value = "audio/mpeg"
        } else {
            iR4V[3].value = om6g.type || ""
        }
        this.bx1x.action = "//nos.netease.com/" + kn5s;
        this.DU1x = o0x;
        this.pv6p = eV3x;
        this.y1x("onuploading", .2);
        this.gr3x()
    };
    b0x.gr3x = function () {
        this.bzM6G = w1x.gr3x(this.bx1x, {
            type: "json",
            onload: this.ta8S.g0x(this),
            onerror: this.mC5H.g0x(this),
            onuploading: this.bal8d.g0x(this)
        })
    };
    b0x.jy4C = function () {
        w1x.jy4C(this.bzM6G);
        this.bx1x.reset()
    };
    b0x.ta8S = function (bO1x) {
        var ex3x = this.DU1x, eV3x = this.pv6p, om6g = (this.gU4Y.files || [{}])[0], kY5d = {
            code: 200,
            fileName: eV3x,
            size: om6g.size,
            bucket: ex3x.bucket,
            docId: ex3x.docId,
            objectKey: ex3x.objectKey,
            url: "//nos.netease.com/" + ex3x.bucket + "/" + ex3x.objectKey
        };
        if (!bO1x) {
            bO1x = kY5d
        }
        if (!bO1x.code || bO1x.code == 200) {
            this.y1x("onsuccess", NEJ.X(kY5d, bO1x))
        } else {
            this.y1x("onerror", bO1x)
        }
        this.bx1x.reset()
    };
    b0x.mC5H = function (bO1x) {
        this.y1x("onerror", bO1x);
        this.bx1x.reset()
    };
    b0x.bal8d = function (ib4f) {
        this.y1x("onuploading", .2 + ib4f.loaded / ib4f.total * .8)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), w1x = c0x("nej.j"),
        bX1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), iW4a = c0x("nm.x.nos"),
        E1x = c0x("nm.m"), n0x = c0x("nm.l"), B1x = c0x("nm.w"), b0x, K1x;
    B1x.Mk3x = NEJ.C();
    b0x = B1x.Mk3x.O1x(bX1x.cy1x);
    b0x.bj1x = function (e0x) {
        e0x = e0x || {};
        this.bk1x(e0x);
        this.bap8h = B1x.bzn6h.A1x(NEJ.X({
            parent: e0x.parent,
            onchange: this.qw7p.g0x(this),
            onuploading: this.y1x.g0x(this, "onuploading"),
            onsuccess: this.y1x.g0x(this, "onsuccess"),
            onerror: this.y1x.g0x(this, "onerror")
        }, e0x, function (q0x) {
            return k0x.gb3x(q0x) || k0x.kW5b(q0x)
        }));
        if (e0x.multiple && iW4a.bai8a()) {
            a9j.fU3x(this.bap8h.baj8b(), "multiple", true)
        }
        this.uA8s = e0x
    };
    b0x.qw7p = function (e0x) {
        var eV3x = e0x.filename, eG3x = (eV3x.split(".") || []).pop();
        this.bAe6Y = (e0x.files || [{}])[0];
        this.y1x("onchange", e0x);
        if (iW4a.bai8a() && !e0x.stopped && !e0x.cancelUpload) {
            this.MB3x(true);
            e0x.stopped = true
        }
    };
    b0x.baj8b = function () {
        return this.bap8h.baj8b()
    };
    b0x.cnJ7C = function () {
        return this.bAe6Y
    };
    b0x.MB3x = function (eK3x, cM2x) {
        cM2x = cM2x || this.bAe6Y;
        if (iW4a.bai8a()) {
            this.bAl6f = iW4a.gr3x(NEJ.X({
                file: cM2x,
                local: this.uA8s.bucket && this.uA8s.bucket.length,
                onuploading: this.y1x.g0x(this, "onuploading"),
                onsuccess: this.y1x.g0x(this, "onsuccess"),
                onerror: this.y1x.g0x(this, "onerror")
            }, this.uA8s, function (q0x) {
                return k0x.gb3x(q0x) || k0x.kW5b(q0x)
            }));
            return this.bAl6f
        } else if (!eK3x) {
            this.bap8h.MB3x()
        }
    };
    b0x.jy4C = function (D1x) {
        D1x = D1x || this.bAl6f;
        if (D1x) {
            iW4a.jy4C(D1x)
        }
        this.bap8h.jy4C()
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), dU2x = c0x("nej.g"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        w1x = c0x("nej.j"), fo3x = c0x("nej.n"), G1x = c0x("nej.ut"), ba1x = c0x("nej.ui"), B1x = c0x("nm.w"),
        n0x = c0x("nm.l"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), L1x = c0x("nm.x.f"), iW4a = c0x("nm.x.nos"), b0x, K1x,
        boR3x = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, boT3x = 5 * 1024 * 1024, cyH0x = 80,
        bAy6s = /\.(bmp|jpg|jpeg|png|gif)$/i;
    B1x.bAz6t = NEJ.C();
    b0x = B1x.bAz6t.O1x(G1x.vg8Y);
    b0x.bcz9q = function () {
        return {x: this.zy9p.clientWidth - this.m0x.offsetWidth, y: this.zy9p.clientHeight - this.m0x.offsetHeight}
    };
    B1x.bpr3x = NEJ.C();
    b0x = B1x.bpr3x.O1x(ba1x.ef2x);
    b0x.bZ1x = function () {
        this.cb1x = "m-xwgt-share-upload"
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.I1x(this.m0x, "j-flag");
        this.baE8w = i0x.shift();
        this.Gh1x = i0x.shift();
        this.Li3x = i0x.shift();
        this.bAH6B = {
            onchange: this.bAI6C.eb2x(this, 0),
            onerror: this.er3x.g0x(this),
            onsuccess: this.sY8Q.g0x(this),
            multiple: true,
            parent: this.Gh1x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bpQ3x = {
            onchange: this.bAI6C.eb2x(this, 1),
            onerror: this.er3x.g0x(this),
            onsuccess: this.sY8Q.g0x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cnH7A = B1x.Mk3x.A1x(this.bAH6B)
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.bpQ3x.parent = e0x.button;
        this.Gd1x && this.Gd1x.S1x();
        this.Gd1x = B1x.Mk3x.A1x(this.bpQ3x);
        this.m0x.style.display = "none";
        if (!!this.eI3x) {
            for (var i = this.eI3x.length - 1; i >= 0; i--) {
                a9j.cC2x(this.eI3x[i].element, false);
                if (this.eI3x[i].dragger) this.eI3x[i].dragger.S1x()
            }
        }
        this.eI3x = [];
        if (this.Ap0x) {
            clearTimeout(this.Ap0x)
        }
        this.baK8C(0);
        this.KL3x = 0;
        this.bS1x([[this.bAH6B.parent, "click", this.bAY6S.g0x(this)], [this.bpQ3x.parent, "click", this.bAY6S.g0x(this)]])
    };
    b0x.bA1x = function () {
        h0x.hw4A(this.rV7O, "click");
        if (!!this.eI3x) {
            for (var i = this.eI3x.length - 1; i >= 0; i--) {
                a9j.cC2x(this.eI3x[i].element, false);
                if (this.eI3x[i].dragger) this.eI3x[i].dragger.S1x()
            }
        }
        this.eI3x = [];
        if (this.Ap0x) {
            clearTimeout(this.Ap0x)
        }
        this.Ap0x = 0;
        this.Gd1x && this.Gd1x.S1x();
        delete this.Gd1x;
        this.bF1x()
    };
    b0x.bAY6S = function (d0x) {
        if (!iW4a.bai8a() && this.eI3x.doing) {
            h0x.bh1x(d0x)
        }
    };
    b0x.bAI6C = function (e0x, r0x) {
        var mw5B = e0x.files, hX4b;
        e0x.stopped = true;
        if (!mw5B) {
            if (e0x.filename) {
                mw5B = [{name: e0x.filename, isIE: true}]
            }
        }
        for (var i = 0, len = mw5B.length; i < len; i++) {
            if (!bAy6s.test(mw5B[i].name)) {
                this.bqf4j({path: mw5B[i].name, index: r0x, status: -4, fail: "这不是<br>图片"})
            } else if (mw5B[i].size > boT3x) {
                this.bqs4w(-3);
                this.bqf4j({path: mw5B[i].name, index: r0x, status: -3, fail: "上传<br>失败"})
            } else {
                this.bqf4j({path: mw5B[i].name, file: mw5B[i], index: r0x, status: 0})
            }
        }
    };
    b0x.bqf4j = function (sy7r) {
        if (this.eI3x.length >= 9) {
            this.bqs4w(-10, 3e3, this.bBn6h.g0x(this));
            return
        }
        this.cnG7z(sy7r);
        this.eI3x.push(sy7r);
        if (!!this.eI3x.length) {
            this.m0x.style.display = ""
        }
        if (this.eI3x.length >= 9) {
            this.Gh1x.style.display = "none"
        } else {
            this.Gh1x.style.display = ""
        }
        this.FX1x()
    };
    b0x.FX1x = function () {
        var bqR4V = -1, bBy6s = 0;
        for (var i = 0, l = this.eI3x.length; i < l; i++) {
            if (this.eI3x[i].status == 1) {
                return
            }
            if (this.eI3x[i].status == 0 && bqR4V < 0) {
                bqR4V = i
            }
            if (this.eI3x[i].status == 2 || this.eI3x[i].status < 0) {
                bBy6s++
            }
        }
        var q0x = this.eI3x[bqR4V];
        if (q0x) {
            (q0x.index == 0 ? this.cnH7A : this.Gd1x).MB3x(false, q0x.file);
            q0x.status = 1;
            this.eI3x.doing = q0x;
            this.y1x("onstartupload", {})
        } else if (bBy6s == this.eI3x.length) {
            this.y1x("onfinishupload", {})
        }
    };
    b0x.bqT4X = function () {
        return this.eI3x.doing || {}
    };
    b0x.er3x = function (d0x) {
        var sy7r = this.bqT4X();
        sy7r.status = -4;
        sy7r.fail = "上传<br>失败";
        this.bBC7v(sy7r);
        this.eI3x.doing = null;
        this.FX1x()
    };
    b0x.sY8Q = function (d0x) {
        var sy7r = this.bqT4X(), fd3x = d0x.fileName.match(bAy6s);
        sy7r.picUrl = d0x.url;
        w1x.bp1x("/upload/event/img/v1", {
            query: {imgid: d0x.docId, format: fd3x[1]},
            type: "json",
            onload: this.bBE7x.g0x(this),
            onerror: this.bBE7x.g0x(this)
        })
    };
    b0x.bBE7x = function (d0x) {
        if (d0x && d0x.code == 200 && d0x.picInfo) {
            var sy7r = this.bqT4X();
            sy7r.status = 2;
            var bv1x = NEJ.X({}, d0x.picInfo);
            bv1x.originId = bv1x.originIdStr;
            bv1x.squareId = bv1x.squareIdStr;
            bv1x.rectangleId = bv1x.rectangleIdStr;
            bv1x.pcSquareId = bv1x.pcSquareIdStr;
            bv1x.pcRectangleId = bv1x.pcRectangleIdStr;
            bv1x.originJpgId = bv1x.originJpgIdStr || bv1x.originJpgId;
            sy7r.picInfo = bv1x;
            this.bBC7v(sy7r);
            this.eI3x.doing = null;
            this.FX1x()
        } else {
            this.er3x(d0x)
        }
    };
    b0x.bqs4w = function (r0x, jK4O, gj3x) {
        if (this.KL3x < r0x) {
            return
        }
        if (this.Ap0x) {
            clearTimeout(this.Ap0x);
            this.Ap0x = 0
        }
        if (jK4O) {
            this.Li3x.innerText = boR3x[r0x * 1];
            this.KL3x = r0x;
            this.Ap0x = setTimeout(this.baK8C.g0x(this, r0x, gj3x), jK4O)
        } else {
            this.Li3x.innerText = boR3x[r0x];
            this.KL3x = r0x
        }
        this.Li3x.style.display = ""
    };
    b0x.baK8C = function (r0x, gj3x) {
        if (r0x && this.KL3x !== r0x) {
            return
        }
        this.KL3x = 0;
        this.Li3x.innerText = boR3x[0];
        this.Li3x.style.display = "none";
        gj3x && gj3x()
    };
    b0x.cnG7z = function (cM2x) {
        var j0x = {};
        if (cM2x.fail) {
            j0x.fail = cM2x.fail
        }
        var dD2x = a9j.bW1x("m-xwgt-share-upload-preview", j0x);
        cM2x.element = a9j.nl6f(dD2x);
        h0x.s0x(a9j.I1x(cM2x.element, "del")[0], "mousedown", this.cnE7x.g0x(this, cM2x), false);
        this.baE8w.insertBefore(cM2x.element, this.baE8w.lastElementChild);
        cM2x.dragger = B1x.bAz6t.A1x({
            view: this.baE8w.parentNode,
            body: cM2x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.NW4a.g0x(this, cM2x),
            onchange: this.cnD7w.g0x(this, cM2x),
            ondragend: this.bcK9B.g0x(this, cM2x)
        })
    };
    b0x.bBC7v = function (cM2x) {
        if (!cM2x || !cM2x.element) {
            return false
        }
        var j0x = {};
        if (cM2x.fail) {
            j0x.fail = cM2x.fail
        } else {
            j0x.url = cM2x.picUrl
        }
        a9j.x1x(cM2x.element, "z-fail");
        cM2x.element.firstChild.outerHTML = a9j.bW1x("m-xwgt-share-upload-preview-img", j0x)
    };
    b0x.NW4a = function (q0x, jY5d) {
        a9j.x1x(q0x.element, "z-sel")
    };
    b0x.cnD7w = function (q0x, jY5d) {
        var cyJ0x, gJ4N = this.eI3x.length - 1, ng6a;
        for (var i = gJ4N; i >= 0; i--) {
            a9j.v1x(this.eI3x[i].element, "z-jump");
            if (this.eI3x[i] == q0x) {
                ng6a = i
            } else {
                a9j.ff3x(this.eI3x[i].element, {left: "", top: ""})
            }
        }
        var QL5Q = {x: 46 + 92 * (ng6a % 5) + jY5d.left, y: 46 + 92 * (ng6a / 5 >> 0) + jY5d.top};
        var bqY4c = QL5Q.x / 92 >> 0, brd4h = QL5Q.y / 92 >> 0, yg9X = Math.max(0, Math.min(gJ4N, brd4h * 5 + bqY4c));
        if (yg9X == ng6a) {
            return
        }
        var cnz7s = yg9X < ng6a;
        for (var i = Math.min(yg9X, ng6a); i <= Math.max(yg9X, ng6a); i++) {
            if (i !== ng6a) {
                var bBQ7J = i % 5;
                if (cnz7s) {
                    if (bBQ7J == 4) {
                        a9j.ff3x(this.eI3x[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a9j.ff3x(this.eI3x[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bBQ7J == 0) {
                        a9j.ff3x(this.eI3x[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a9j.ff3x(this.eI3x[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b0x.bcK9B = function (q0x, jY5d) {
        var cyL0x, gJ4N = this.eI3x.length - 1, ng6a;
        for (var i = gJ4N; i >= 0; i--) {
            a9j.ff3x(this.eI3x[i].element, {left: "", top: ""});
            if (this.eI3x[i] == q0x) {
                ng6a = i
            }
        }
        a9j.v1x(q0x.element, "z-sel");
        var QL5Q = {x: 46 + 92 * (ng6a % 5) + jY5d.left, y: 46 + 92 * (ng6a / 5 >> 0) + jY5d.top};
        var bqY4c = QL5Q.x / 92 >> 0, brd4h = QL5Q.y / 92 >> 0, yg9X = Math.max(0, Math.min(gJ4N, brd4h * 5 + bqY4c));
        if (yg9X == ng6a) {
            return
        }
        this.baE8w.insertBefore(q0x.element, (this.eI3x[yg9X + (yg9X > ng6a ? 1 : 0)] || {}).element || this.Gh1x);
        this.eI3x.splice(ng6a, 1);
        this.eI3x.splice(yg9X, 0, q0x)
    };
    b0x.cnE7x = function (q0x, d0x) {
        a9j.cC2x(q0x.element, false);
        if (q0x.dragger) q0x.dragger.S1x();
        delete q0x.dragger;
        var r0x = -1;
        for (var i = this.eI3x.length - 1; i >= 0; i--) {
            if (this.eI3x[i] == q0x) {
                r0x = i;
                break
            }
        }
        this.eI3x.splice(r0x, r0x >= 0 ? 1 : 0);
        delete q0x;
        if (this.eI3x.length >= 9) {
            this.Gh1x.style.display = "none"
        } else {
            this.Gh1x.style.display = ""
        }
        if (!this.eI3x.length) {
            this.m0x.style.display = "none";
            this.baK8C(0)
        } else {
            this.bBn6h()
        }
        if (this.eI3x.doing == q0x) {
            this.eI3x.doing = null
        }
        this.FX1x()
    };
    b0x.bBn6h = function () {
        var bBU7N = false;
        for (var i = 0, len = this.eI3x.length; i < len; i++) {
            if (this.eI3x[i].status == -3) {
                bBU7N = true
            }
        }
        if (bBU7N) {
            this.bqs4w(-3)
        } else {
            this.baK8C(-3)
        }
    };
    b0x.PJ4N = function () {
        var eh2x = [];
        for (var i = this.eI3x.length - 1; i >= 0; i--) {
            if (this.eI3x[i].status == 2) {
                eh2x.unshift(this.eI3x[i].picInfo)
            }
        }
        return eh2x
    };
    G1x.fu3x.A1x({element: B1x.bpr3x, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, fh3x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        ba1x = c0x("nej.ui"), N1x = c0x("nej.ut"), b0x, K1x;
    if (!!N1x.mP5U) return;
    N1x.mP5U = NEJ.C();
    b0x = N1x.mP5U.O1x(N1x.Xm7f);
    K1x = N1x.mP5U.cj1x;
    b0x.bj1x = function (e0x) {
        this.cnw7p(e0x.more);
        this.bbg9X = a9j.z1x(e0x.sbody);
        this.bS1x([[this.bbg9X, "scroll", this.cnv7o.g0x(this)]]);
        var dm2x = e0x.delta;
        if (dm2x == null) dm2x = 30;
        this.NP4T = Math.max(0, dm2x);
        var cB1x = parseInt(e0x.count) || 0;
        this.iX4b = Math.max(0, cB1x);
        var gs3x = parseInt(e0x.number) || 0;
        if (gs3x > 1 && gs3x <= cB1x) {
            this.Bh0x = gs3x
        }
        this.bk1x(e0x)
    };
    b0x.bA1x = function () {
        this.bF1x();
        delete this.AP0x;
        delete this.bbg9X;
        delete this.rU7N;
        delete this.bbi9Z
    };
    b0x.zo9f = function (bf1x, bm1x) {
        var bH1x = this.wC9t + (this.iX4b - 1) * this.nS6M, gc3x = this.iX4b * this.nS6M;
        return K1x.zo9f.call(this, bH1x, bf1x, gc3x, bm1x)
    };
    b0x.cnw7p = function (bbm9d) {
        this.AP0x = a9j.z1x(bbm9d);
        this.bS1x([[this.AP0x, "click", this.oq6k.g0x(this)]])
    };
    b0x.brU4Y = function (F1x) {
        F1x = F1x || {};
        if (this.rU7N || !F1x) return;
        if (!F1x.scrollHeight) F1x = a9j.pb6V();
        var bf1x = a9j.hM4Q(this.is4w), dm2x = bf1x.y + this.is4w.offsetHeight - F1x.scrollTop - F1x.clientHeight,
            bsa4e = F1x.scrollHeight <= F1x.clientHeight;
        if (dm2x <= this.NP4T || bsa4e && !this.rU7N) {
            this.oq6k()
        }
    };
    b0x.cnv7o = function (d0x) {
        if (this.rU7N) return;
        this.brU4Y(h0x.U1x(d0x))
    };
    b0x.zF0x = function (d0x) {
        K1x.zF0x.apply(this, arguments);
        if (!d0x.stopped) {
            this.Me3x();
            var bf1x = 0;
            if (d0x.index > 1) {
                bf1x = this.wC9t + ((d0x.index - 1) * this.iX4b - 1) * this.nS6M
            }
            this.hj4n = bf1x;
            this.oq6k()
        }
    };
    b0x.bNf9W = function (e0x) {
        if (!!this.Bh0x) {
            var dm2x = e0x.offset > 0 ? this.nS6M : this.wC9t, gc3x = dm2x + this.nS6M * (this.Bh0x - 1);
            this.hj4n = e0x.offset + gc3x;
            e0x.data.limit = gc3x;
            e0x.limit = gc3x;
            delete this.Bh0x
        }
        return e0x
    };
    b0x.bhy1x = function (e0x) {
        delete this.bbi9Z;
        K1x.bhy1x.apply(this, arguments);
        this.bCF7y()
    };
    b0x.bhC1x = function (d0x) {
        if (d0x.key != this.iI4M.key) return;
        switch (d0x.action) {
            case"refresh":
            case"append":
                delete this.bbi9Z;
                break
        }
        K1x.bhC1x.apply(this, arguments)
    };
    b0x.Lt3x = function () {
        this.xg9X("onbeforelistload", "列表加载中...");
        a9j.Z1x(this.AP0x, "display", "none")
    };
    b0x.bhW1x = function (i0x, bf1x, gc3x) {
        var bm1x = i0x.length, bsv4z = i0x.loaded ? bf1x + gc3x >= bm1x : bf1x + gc3x > bm1x;
        this.hj4n = Math.min(this.hj4n, bm1x);
        a9j.Z1x(this.AP0x, "display", bsv4z ? "none" : "");
        if (bsv4z) this.rU7N = !0;
        if (this.iX4b > 0) {
            var bv1x = this.zo9f(bf1x, i0x.length);
            if (this.bND0x(bv1x.index, bv1x.total)) return !0;
            var dm2x = this.wC9t - this.nS6M, gs3x = this.iX4b * this.nS6M;
            this.rU7N = (bf1x + gc3x - dm2x) % gs3x == 0 || bsv4z;
            a9j.Z1x(this.AP0x, "display", this.rU7N ? "none" : "");
            this.bhL1x(this.rU7N && bv1x.total > 1 ? "" : "none")
        }
    };
    b0x.bhT1x = function () {
        this.hj4n = 0;
        this.rU7N = !0;
        this.xg9X("onemptylist", "没有列表数据！")
    };
    b0x.Lm3x = function (dD2x, jY5d) {
        this.is4w.insertAdjacentHTML(jY5d || "beforeEnd", dD2x)
    };
    b0x.Ll3x = function (gI4M) {
        this.fp3x = this.fp3x || [];
        if (k0x.eu3x(gI4M)) {
            fh3x.push.apply(this.fp3x, gI4M)
        } else {
            this.fp3x.push(gI4M)
        }
    };
    b0x.Xz7s = function (d0x) {
        a9j.mJ5O(this.ck1x);
        this.Le3x(d0x, "onafteradd");
        var eK3x = d0x.flag;
        if (d0x.stopped || !eK3x) return;
        if (this.iX4b > 0) {
            this.bhR1x();
            return
        }
        this.hj4n += 1;
        eK3x == -1 ? this.biX1x(d0x.data) : this.bPU0x(d0x.data)
    };
    b0x.XB7u = function (d0x) {
        this.Le3x(d0x, "onafterdelete");
        if (d0x.stopped) return;
        if (this.iX4b > 0) {
            this.bhR1x();
            return
        }
        var D1x = d0x.data[this.eU3x.pkey];
        if (!!this.fp3x) {
            var q0x = a9j.bDi7b(D1x), r0x = k0x.cV2x(this.fp3x, q0x);
            if (r0x >= 0) {
                this.fp3x.splice(r0x, 1);
                this.hj4n -= 1
            }
            if (!!q0x) q0x.S1x()
        } else {
            var f0x = a9j.z1x(this.bMm9d(D1x));
            if (!!f0x) this.hj4n -= 1;
            a9j.cC2x(f0x)
        }
        if (this.hj4n <= 0) this.oq6k()
    };
    b0x.bir1x = function (bf1x, gc3x) {
        if (bf1x != this.hj4n) return;
        if (this.UB6v()) {
            this.rU7N = !1;
            this.bCF7y()
        }
    };
    b0x.biT1x = function (bf1x, gc3x) {
        if (bf1x != 0) return;
        var HW2x = this.R1x.gV4Z(this.iI4M.key);
        for (var i = gc3x - 1; i >= 0; i--) {
            this.biX1x(HW2x[i])
        }
    };
    b0x.bCF7y = function () {
        var F1x = this.bbg9X;
        if (!F1x || this.rU7N) return;
        this.brU4Y(this.bbg9X)
    };
    b0x.ga3x = function () {
        delete this.rU7N;
        K1x.ga3x.apply(this, arguments)
    };
    b0x.oq6k = function () {
        if (!!this.bbi9Z) return;
        this.bbi9Z = !0;
        var bf1x = this.hj4n;
        this.hj4n += bf1x == 0 ? this.wC9t : this.nS6M;
        this.bNe9V(bf1x)
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), cT2x = c0x("nej.x"),
        N1x = c0x("nej.ut"), b0x;
    if (!!N1x.EX1x) return;
    N1x.EX1x = NEJ.C();
    b0x = N1x.EX1x.O1x(N1x.cy1x);
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.iC4G = e0x.event || "click";
        this.jJ4N = e0x.selected || "js-selected";
        this.mV5a = e0x.disabled || "js-disabled";
        this.bCL7E = !!e0x.inverse;
        this.cnq7j(e0x.list);
        this.Mf3x(e0x.index || 0)
    };
    b0x.bA1x = function () {
        var cnp7i = function (f0x) {
            this.btd4h(f0x, !1)
        };
        return function () {
            this.bF1x();
            k0x.bb1x(this.bN1x, cnp7i, this);
            delete this.bN1x;
            delete this.iC4G;
            delete this.ct1x;
            delete this.mV5a;
            delete this.jJ4N;
            delete this.bCL7E
        }
    }();
    b0x.cnq7j = function () {
        var bgk0x = function (q0x) {
            if (!q0x) return;
            this.bN1x.push(q0x);
            var r0x = this.bN1x.length - 1, dg2x = this.btf4j[r0x];
            if (!dg2x) {
                dg2x = this.Mf3x.g0x(this, r0x);
                this.btf4j[r0x] = dg2x
            }
            this.bS1x([[q0x, this.iC4G, dg2x]])
        };
        return function (i0x) {
            this.bN1x = [];
            if (!this.btf4j) this.btf4j = [];
            k0x.bb1x(i0x, bgk0x, this)
        }
    }();
    b0x.btd4h = function (F1x, cno7h) {
        !!cno7h && !this.bCL7E ? a9j.x1x(F1x, this.jJ4N) : a9j.v1x(F1x, this.jJ4N)
    };
    b0x.Mf3x = function (r0x, Rz5E, j0x) {
        var F1x = this.bN1x[r0x];
        if (Rz5E != !0 && (r0x == this.ct1x || !F1x || a9j.bz1x(F1x, this.mV5a))) {
            h0x.ci1x(arguments[1]);
            return this
        }
        var d0x = {index: r0x, last: this.ct1x, list: this.kG5L(), data: j0x || a9j.u1x(F1x, "value")};
        this.ct1x = r0x;
        F1x = this.bN1x[d0x.last];
        if (!!F1x) this.btd4h(F1x, !1);
        F1x = this.bN1x[this.ct1x];
        this.btd4h(F1x, !0);
        this.y1x("onchange", d0x);
        if (!d0x.nostop) h0x.ci1x(arguments[1]);
        return this
    };
    b0x.sl7e = function () {
        return this.ct1x
    };
    b0x.kG5L = function () {
        return this.bN1x
    };
    a9j.cnn7g = cT2x.cnn7g = function (bE1x, e0x) {
        var D1x = a9j.la5f(bE1x);
        if (!D1x) return null;
        if (!N1x.Yw7p(D1x, N1x.EX1x)) {
            e0x = e0x || {};
            e0x.list = !e0x.clazz ? a9j.cU2x(D1x) : a9j.I1x(D1x, e0x.clazz);
            delete e0x.clazz
        }
        return N1x.Yw7p(D1x, N1x.EX1x, e0x || Y1x)
    };
    cT2x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, k0x = c0x("nej.u"), w1x = c0x("nej.j"), l0x = c0x("nm.x");
    var SETTING_KEY = "player-setting";
    var mv5A = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    mv5A = w1x.us8k(SETTING_KEY) || mv5A;
    l0x.bti4m = function () {
        return mv5A
    };
    l0x.Fi1x = function (Fj1x) {
        if (Fj1x) {
            mv5A = Fj1x;
            w1x.vT8L(SETTING_KEY, Fj1x)
        }
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), G1x = c0x("nej.ut"),
        l0x = c0x("nm.x"), p0x = c0x("nm.d"), ha4e = c0x("nm.w.player.log");
    var ky5D = p0x.hY4c.A1x();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var ml5q = function (t1x, bC1x, pJ6D) {
        var cJ2x = l0x.eY3x("{0} {1} {2}", k0x.iV4Z(new Date, "yyyy-MM-dd HH:mm:ss"), t1x, bC1x);
        if (pJ6D == LogLevel.ERROR) {
            ky5D.gm3x("playerror", {message: bC1x})
        }
        if (pJ6D >= LogLevel.INFO) {
            ky5D.cuU9L(cJ2x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cJ2x)
        }
    };
    ha4e.bV1x = function () {
        ml5q("PLAY_ERROR", l0x.eY3x.apply(null, arguments), LogLevel.ERROR)
    };
    ha4e.oz6t = function () {
        ml5q("PLAY_INFO", l0x.eY3x.apply(null, arguments), LogLevel.INFO)
    };
    ha4e.cyN0x = function () {
        ml5q("PLAY_DEBUG", l0x.eY3x.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), G1x = c0x("nej.ut"), k0x = c0x("nej.u"), B1x = c0x("nm.w"),
        gj3x = c0x("flash.cb");
    var dO2x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Fo1x, bbF9w, sN7G;
    B1x.cnl7e = function (t1x, dw2x) {
        if (t1x != "flash") {
            if (!Fo1x) {
                Fo1x = a9j.cX2x("audio");
                k0x.bb1x(dO2x, function (t1x) {
                    h0x.s0x(Fo1x, t1x, onMediaCallBack)
                })
            }
            if (Fo1x && Fo1x.canPlayType && Fo1x.canPlayType("audio/mpeg")) {
                dw2x(new MediaWrap("audio"));
                return
            }
        }
        if (!bbF9w) {
            a9j.rx7q({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (hl4p) {
                    bbF9w = hl4p;
                    k0x.bb1x(dO2x, function (t1x) {
                        gj3x[t1x] = onMediaCallBack;
                        bbF9w.addCallback(t1x, "flash.cb." + t1x)
                    });
                    dw2x(new MediaWrap("flash"))
                }.g0x(this)
            })
        } else {
            dw2x(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Fs1x) {
        var lG5L;
        G1x.fu3x.A1x({element: this, event: dO2x.concat(["interrupt", "recover"])});
        lG5L = Fs1x == "audio" ? Fo1x : bbF9w;
        this.type = Fs1x;
        this.destroy = function () {
        };
        this.setSrc = function (W1x) {
            if (sN7G != this) {
                var gJ4N = sN7G;
                if (gJ4N) {
                    gJ4N.interrupt()
                }
                sN7G = this
            }
            if (Fs1x == "flash") {
                lG5L.setSrc(W1x)
            } else {
                lG5L.src = W1x
            }
        };
        this.play = function () {
            if (sN7G != this) {
                var gJ4N = sN7G;
                if (gJ4N) {
                    gJ4N.interrupt();
                    sN7G = this;
                    this.recover()
                } else {
                    sN7G = this
                }
            }
            if (Fs1x == "flash") {
                lG5L.as_play()
            } else {
                lG5L.play()
            }
        };
        this.pause = function () {
            if (sN7G != this) return;
            if (Fs1x == "flash") {
                lG5L.as_pause()
            } else {
                lG5L.pause()
            }
        };
        this.load = function () {
            if (sN7G != this) return;
            if (Fs1x == "flash") {
                lG5L.as_load()
            } else {
                lG5L.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return lG5L
        };
        var os6m = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k0x.bb1x(os6m, function (T1x) {
            var LQ3x = "get" + T1x, RW5b = "set" + T1x;
            if (Fs1x == "flash") {
                if (!this[LQ3x]) {
                    this[LQ3x] = function () {
                        return lG5L[LQ3x]()
                    }
                }
                if (!this[RW5b]) {
                    this[RW5b] = function (value) {
                        lG5L[RW5b](value)
                    }
                }
            } else {
                var bDR7K = T1x.slice(0, 1).toLowerCase() + T1x.slice(1);
                if (!this[LQ3x]) {
                    this[LQ3x] = function () {
                        return lG5L[bDR7K]
                    }
                }
                if (!this[RW5b]) {
                    this[RW5b] = function (value) {
                        lG5L[bDR7K] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d0x) {
        if (sN7G) {
            h0x.y1x(sN7G, d0x.type, d0x)
        }
    }
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), w1x = c0x("nej.j"), G1x = c0x("nej.ut"), dh2x = c0x("nej.p"),
        B1x = c0x("nm.w"), l0x = c0x("nm.x"), ha4e = c0x("nm.w.player.log"), b0x;
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
    var bDZ7S = false;
    B1x.fw3x = NEJ.C();
    b0x = B1x.fw3x.O1x(G1x.cy1x);
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.cv1x = {};
        this.bbK9B(e0x.media);
        w1x.bp1x("/api/cdns", {
            type: "json", onload: function (d0x) {
                if (d0x.code) {
                    this.pS7L = d0x.data
                }
            }.g0x(this)
        })
    };
    b0x.bA1x = function () {
        this.bF1x();
        delete this.cv1x
    };
    b0x.YL7E = function (be1x) {
        if (!be1x) return;
        var Bt0x = this.cv1x.volume;
        if (this.dB2x) {
            this.dB2x.pause()
        }
        this.cv1x = {time: 0, id: be1x.id, duration: be1x.duration / 1e3, play: this.cv1x.play, stalledRetryCount: 0};
        if (Bt0x != null) {
            this.cv1x.volume = Bt0x
        }
        this.cv1x.loadState = LoadState.LOAD_START;
        this.bEp7i(be1x.id);
        ha4e.oz6t("play song id: {0}", be1x.id)
    };
    b0x.ey3x = function () {
        if (this.cv1x.error) {
            this.cv1x.error = null;
            if (this.cv1x.error == ErrorType.INFO_GET_ERR || this.bEq7j()) {
                this.bEt7m()
            } else {
                this.Kr3x()
            }
        } else {
            if (this.dB2x) {
                this.dB2x.play()
            }
        }
        this.cv1x.play = true;
        this.oN6H("play")
    };
    b0x.fC3x = function () {
        if (this.dB2x) {
            this.dB2x.pause()
        }
        this.cv1x.play = false;
        this.oN6H("pause")
    };
    b0x.ot6n = function (by1x) {
        if (this.dB2x) {
            this.dB2x.setCurrentTime(by1x)
        }
        this.cv1x.time = by1x;
        ha4e.oz6t("seek to: {0}", by1x)
    };
    b0x.btB4F = function () {
        return this.cv1x.duration || 0
    };
    b0x.uD8v = function () {
        return !!this.cv1x.play
    };
    b0x.lA5F = function (KP3x) {
        this.cv1x.volume = KP3x;
        if (this.dB2x) {
            this.dB2x.setVolume(KP3x)
        }
    };
    b0x.btz4D = function () {
        return this.cv1x.time
    };
    b0x.bbK9B = function (t1x) {
        B1x.cnl7e(t1x, function (lG5L) {
            this.dB2x = lG5L;
            ha4e.oz6t("media loaded: {0}", lG5L.type);
            this.bS1x([[this.dB2x, "loadedmetadata", this.cnk7d.g0x(this)], [this.dB2x, "ended", this.cng7Z.g0x(this)], [this.dB2x, "waiting", this.yv9m.g0x(this)], [this.dB2x, "play", this.sO7H.g0x(this)], [this.dB2x, "pause", this.btm4q.g0x(this)], [this.dB2x, "playing", this.Nu4y.g0x(this)], [this.dB2x, "timeupdate", this.cnf7Y.g0x(this)], [this.dB2x, "progress", this.sc7V.g0x(this)], [this.dB2x, "stalled", this.btl4p.g0x(this)], [this.dB2x, "interrupt", this.fC3x.g0x(this)], [this.dB2x, "recover", this.cne7X.g0x(this)], [this.dB2x, "error", this.er3x.g0x(this)]]);
            if (this.cv1x) {
                if (this.cv1x.loadState == LoadState.LOAD_START || this.cv1x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.btk4o();
                    if (this.cv1x.volume != null) {
                        this.dB2x.setVolume(this.cv1x.volume)
                    }
                }
            }
        }.g0x(this))
    };
    b0x.cnd7W = function (t1x) {
        this.He2x();
        this.dB2x.destroy();
        this.cv1x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yv9m();
        this.bbK9B(t1x);
        ha4e.oz6t("switch media")
    };
    b0x.cyP0x = function () {
        return this.dB2x
    };
    b0x.bEp7i = function () {
        this.yv9m();
        w1x.bp1x("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cv1x.id]), br: DEFAULT_BR},
            onload: this.bFa7T.g0x(this),
            onerror: this.bFa7T.g0x(this)
        })
    };
    b0x.bFa7T = function (d0x) {
        if (d0x.code == 200 && d0x.data && d0x.data.length) {
            var bv1x = d0x.data[0];
            if (!bv1x.url) {
                this.cv1x.error = ErrorType.INFO_GET_ERR;
                this.oN6H("error", {code: this.cv1x.error});
                return
            }
            this.cv1x.playUrl = bv1x.url;
            this.cv1x.expireTime = (new Date).getTime() + bv1x.expi * 1e3;
            this.btk4o()
        } else {
            this.cv1x.error = ErrorType.INFO_GET_ERR;
            this.oN6H("error", {code: this.cv1x.error});
            ha4e.bV1x("info load error")
        }
    };
    b0x.btk4o = function () {
        if (this.dB2x) {
            var W1x = this.cv1x.playUrl;
            if (this.cv1x.time > 0 && (this.cv1x.loadState == LoadState.IN_RE_GET_URL || this.cv1x.loadState == LoadState.IN_RE_GET_URL)) {
                W1x += "#t=" + this.cv1x.time
            }
            this.dB2x.setSrc(W1x);
            ha4e.oz6t("load mp3: {0},loadState: {1}.", W1x, this.cv1x.loadState)
        }
    };
    b0x.bFb7U = function () {
        if (/#t=(\d+)$/.test(this.dB2x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b0x.Kr3x = function () {
        var by1x = parseInt(this.cv1x.time) || 0, cnb7U = this.bFb7U();
        if (by1x === cnb7U) {
            this.dB2x.load()
        } else {
            this.dB2x.setSrc(this.cv1x.playUrl + "#t=" + by1x)
        }
        this.cv1x.loadState = LoadState.IN_RELOAD;
        this.yv9m();
        ha4e.oz6t("reload from: {0}", by1x)
    };
    b0x.bEt7m = function () {
        this.cv1x.loadState = LoadState.IN_RE_GET_URL;
        this.bEp7i()
    };
    b0x.bFf7Y = function () {
        var uK8C = getHost(this.cv1x.playUrl);
        if (uK8C) {
            for (var i = 0; i < this.pS7L.length; i++) {
                var hB4F = this.pS7L[i] || [], r0x = hB4F.indexOf(uK8C);
                if (r0x >= 0 && hB4F.length > 1) {
                    return hB4F[(r0x + 1) % hB4F.length]
                }
            }
        }

        function getHost(W1x) {
            if (CDN_HOST_REG.test(W1x)) return RegExp.$1
        }
    };
    b0x.cmZ7S = function () {
        this.cv1x.playUrl = this.cv1x.playUrl.replace(CDN_HOST_REG, this.bFf7Y());
        this.cv1x.loadState = LoadState.IN_SWITCH_CDN;
        this.btk4o();
        this.yv9m()
    };
    b0x.cnk7d = function () {
        if (this.cv1x.loadState == LoadState.LOAD_START) {
            this.cv1x.loadState = LoadState.LOADED_META;
            if (this.dB2x.type == "audio") {
                this.cv1x.duration = this.dB2x.getDuration()
            }
            this.oN6H("loadedmeta", {duration: this.cv1x.duration})
        } else {
            this.cv1x.loadState = LoadState.LOADED_META
        }
        if (this.cv1x.play) {
            this.dB2x.play()
        } else {
            this.dB2x.pause()
        }
        if (this.cv1x.time && parseInt(this.cv1x.time) != this.bFb7U()) {
            this.dB2x.setCurrentTime(this.cv1x.time)
        }
        this.FJ1x();
        this.Nu4y();
        bDZ7S = true;
        ha4e.oz6t("loaded meta")
    };
    b0x.cng7Z = function () {
        this.cv1x.ended = true;
        this.oN6H("ended")
    };
    b0x.yv9m = function () {
        if (!this.cv1x.waiting) {
            this.cv1x.waiting = true;
            this.cv1x.waitTimestamp = +(new Date);
            this.oN6H("waiting")
        }
    };
    b0x.Nu4y = function () {
        this.cv1x.waiting = false;
        this.cv1x.waitTimestamp = 0;
        this.oN6H("playing")
    };
    b0x.sO7H = function () {
        this.oN6H("play")
    };
    b0x.btm4q = function () {
        this.oN6H("pause")
    };
    b0x.cnf7Y = function () {
        if (this.cv1x.loadState != LoadState.LOADED_META) return;
        var by1x = this.dB2x.getCurrentTime();
        if (this.cv1x.waiting && by1x > this.cv1x.time) {
            this.Nu4y()
        }
        this.cv1x.time = by1x;
        this.oN6H("timeupdate", {time: this.cv1x.time, duration: this.cv1x.duration})
    };
    b0x.sc7V = function (d0x) {
        if (this.cv1x.loadState != LoadState.LOADED_META) return;
        var o0x = {};
        if (d0x.data) {
            o0x.total = d0x.data.total;
            o0x.loaded = d0x.data.loaded
        } else {
            var yo9f = this.dB2x.getBuffered(), by1x = this.dB2x.getCurrentTime(), nA6u = 0;
            for (var i = 0; i < yo9f.length; i++) {
                if (by1x > yo9f.start(i) && by1x < yo9f.end(i)) {
                    nA6u = yo9f.end(i);
                    break
                }
            }
            o0x.total = this.cv1x.duration;
            o0x.loaded = Math.min(nA6u, o0x.total)
        }
        this.oN6H("progress", o0x)
    };
    b0x.FJ1x = function () {
        if (this.cv1x.retry) {
            clearTimeout(this.cv1x.retry.tid);
            this.cv1x.retry = null
        }
    };
    b0x.er3x = function () {
        var bU1x = this.dB2x.getError();
        ha4e.bV1x("media error code: {0}, netState: {1}", bU1x.code, this.dB2x.getNetworkState());
        if (bU1x.code == MediaError.MEDIA_ERR_NETWORK || bU1x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Fj1x = l0x.bti4m();
            if (!this.cv1x.retry) {
                this.cv1x.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cv1x.retry.tid)
            }
            if (this.cv1x.retry.level == RetryLevel.NONE) {
                if (this.bEq7j()) {
                    this.cv1x.retry.level = RetryLevel.GET_URL;
                    this.bEt7m();
                    ha4e.oz6t("Url expired, get url.")
                } else {
                    this.cv1x.retry.level = RetryLevel.RELOAD;
                    this.cv1x.retry.tid = setTimeout(this.Kr3x.g0x(this), 3e3);
                    ha4e.oz6t("Reload mp3 3s later.")
                }
            } else if (this.cv1x.retry.level == RetryLevel.GET_URL) {
                this.cv1x.retry.level = RetryLevel.RELOAD;
                this.cv1x.retry.tid = setTimeout(this.Kr3x.g0x(this), 3e3);
                ha4e.oz6t("Reload mp3 3s later.")
            } else if (this.cv1x.retry.level == RetryLevel.RELOAD) {
                this.cv1x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bFf7Y()) {
                    this.cv1x.retry.tid = setTimeout(this.cmZ7S.g0x(this), 5e3);
                    ha4e.oz6t("Switch CDN 5s later.")
                } else {
                    this.cv1x.retry.tid = setTimeout(this.Kr3x.g0x(this), 5e3);
                    ha4e.oz6t("Reload mp3 5s later.")
                }
            } else if (!bDZ7S && this.dB2x.type == "audio" && !Fj1x.useFlash && !dh2x.bbH9y.mac && l0x.biM1x().supported) {
                Fj1x.useFlash = true;
                l0x.Fi1x(Fj1x);
                this.cnd7W("flash")
            } else {
                this.FJ1x();
                this.fC3x();
                this.cv1x.error = ErrorType.NET_ERR;
                this.oN6H("error", {code: this.cv1x.error});
                ha4e.bV1x("error can not retry.")
            }
        } else {
            this.FJ1x();
            this.fC3x();
            this.cv1x.error = ErrorType.UNKNOWN_ERR;
            this.oN6H("error", {code: this.cv1x.error});
            ha4e.bV1x("error can not retry.")
        }
    };
    b0x.btl4p = function () {
        var hg4k = 0, bFr7k = 5e3;
        return function () {
            this.yv9m();
            clearTimeout(hg4k);
            setTimeout(function () {
                var fT3x = +(new Date);
                if (this.cv1x.waiting && fT3x - this.cv1x.waitTimestamp >= bFr7k && this.cv1x.stalledRetryCount < MAX_STALLED_RETRY) {
                    ha4e.oz6t("stalled too long retry.");
                    this.cv1x.stalledRetryCount++;
                    this.Kr3x()
                }
            }.g0x(this), bFr7k);
            ha4e.oz6t("stalled")
        }
    }();
    b0x.bEq7j = function () {
        var fT3x = +(new Date);
        return fT3x > this.cv1x.expireTime
    };
    b0x.cne7X = function () {
        var by1x = parseInt(this.cv1x.time) || 0;
        this.dB2x.setSrc(this.cv1x.playUrl + "#t=" + by1x);
        this.cv1x.loadState = LoadState.IN_RELOAD;
        this.yv9m();
        ha4e.oz6t("recover from: {0}", by1x)
    };
    b0x.oN6H = function (V1x, j0x) {
        h0x.y1x(B1x.fw3x, "playaction", {action: V1x, data: j0x || {}})
    };
    G1x.fu3x.A1x({element: B1x.fw3x, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c0x = NEJ.P, h0x = c0x("nej.v"), G1x = c0x("nej.ut"), B1x = c0x("nm.w"), b0x;
    B1x.Fd1x = NEJ.C();
    b0x = B1x.Fd1x.O1x(B1x.fw3x);
    K1x = B1x.Fd1x.cj1x;
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.cmY7R = function (bI1x) {
        this.YL7E(bI1x);
        this.ey3x()
    };
    b0x.btg4k = function () {
        this.fC3x()
    };
    b0x.uB8t = function (d0x) {
        if (d0x.action == "play") {
            this.fC3x()
        }
    };
    b0x.oN6H = function (V1x, j0x) {
        h0x.y1x(B1x.Fd1x, "tmpplayaction", {action: V1x, data: j0x || {}, tmp: true})
    };
    b0x.sb7U = function () {
        return this.cv1x
    };
    G1x.fu3x.A1x({element: B1x.Fd1x, event: ["tmpplayaction"]})
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), fo3x = c0x("nej.n"),
        w1x = c0x("nej.j"), G1x = c0x("nej.ut"), ba1x = c0x("nej.ui"), B1x = c0x("nm.w"), n0x = c0x("nm.l"),
        ka5f = c0x("nm.c"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K1x,
        bbA9r = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var btb4f = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    B1x.bta4e = NEJ.C();
    b0x = B1x.bta4e.O1x(ba1x.ef2x);
    b0x.cq1x = function (e0x) {
        this.cu1x(e0x);
        var i0x = a9j.I1x(this.m0x, "j-flag");
        this.cyR0x = i0x.shift();
        this.cmV7O = i0x.shift();
        this.FN1x = i0x.shift();
        this.bsX4b = i0x.shift();
        this.bsT4X = [i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift(), i0x.shift()];
        this.bbs9j = i0x.shift();
        this.bGb8T = i0x.shift();
        this.qn7g = {list: this.bsT4X, selected: "z-curr", onchange: this.bGi8a.g0x(this)};
        h0x.s0x(this.FN1x, "input", this.bbr9i.g0x(this));
        h0x.s0x(this.FN1x, "propertychange", this.bbr9i.g0x(this));
        h0x.s0x(this.FN1x, "keyup", this.bbr9i.g0x(this));
        h0x.s0x(this.cmV7O, "click", this.bbr9i.g0x(this));
        h0x.s0x(this.bbs9j, "click", this.cA1x.g0x(this));
        h0x.s0x(this.bGb8T, "click", function () {
            this.y1x("oncancel", {})
        }.g0x(this));
        this.R1x = p0x.Es1x.fX3x();
        this.Mc3x = top.nm.w.Fd1x.fX3x();
        G1x.fu3x.A1x({element: top.nm.w.Fd1x, event: ["tmpplayaction"]});
        this.rc7V = {limit: 100, offset: 0, parent: this.bbs9j, onbeforelistload: this.pp6j.g0x(this)};
        p0x.sk = "fuck" + a9j.u1x(this.bsX4b, "xname") + "458";
        h0x.s0x(top.nm.w.Fd1x, "tmpplayaction", this.uB8t.g0x(this))
    };
    b0x.bZ1x = function () {
        this.cb1x = "m-xwgt-publish-search"
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        if (!!this.AV0x) {
            this.AV0x.S1x();
            delete this.AV0x
        }
        this.qn7g.index = btb4f[e0x.type || "song"];
        this.AV0x = G1x.EX1x.A1x(this.qn7g);
        this.FN1x.value = "";
        this.FN1x.focus();
        this.sW8O = "";
        this.cyT0x = 0;
        if (e0x.showMV == true) {
            this.bsT4X[btb4f["mv"]].parentNode.style.display = "";
            a9j.x1x(this.bsX4b, "srchtab-1")
        } else {
            this.bsT4X[btb4f["mv"]].parentNode.style.display = "none";
            a9j.v1x(this.bsX4b, "srchtab-1")
        }
        if (!!this.dy2x) {
            this.dy2x = this.dy2x.S1x()
        }
        if (e0x.hideBack) {
            a9j.x1x(this.bGb8T.parentNode, "f-hide")
        }
    };
    b0x.bA1x = function () {
        this.Mc3x.btg4k();
        this.bF1x()
    };
    b0x.bbr9i = function () {
        var value = this.FN1x.value.trim();
        if (value && value.length) {
            if (value != this.sW8O) {
                this.sW8O = value;
                this.bGi8a({index: this.AV0x.sl7e()})
            }
        } else {
            if (this.dy2x) {
                this.dy2x = this.dy2x.S1x()
            }
        }
        this.sW8O = value
    };
    b0x.cA1x = function () {
        var cmR7K = function (F1x) {
            return a9j.bz1x(F1x, "sitm") || a9j.bz1x(F1x, "itm") || a9j.bz1x(F1x, "mv-item")
        }, cmQ7J = function (F1x) {
            return a9j.bz1x(F1x, "ply")
        }, bGL8D = function () {
            n0x.X1x.M1x({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, cmN7G = function () {
            n0x.X1x.M1x({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, bsc4g = function (be1x) {
            if (be1x && be1x.privilege && be1x.privilege.toast) {
                w1x.bp1x("/api/song/toast", {
                    query: {id: be1x.id},
                    type: "json",
                    onload: Qt5y.g0x(this),
                    onerror: Qt5y.g0x(this)
                })
            } else {
                Qq4u()
            }
        }, Qt5y = function (P1x) {
            Qq4u((P1x || Y1x).toast)
        }, Qq4u = function (bC1x) {
            n0x.X1x.M1x({type: 2, tip: bC1x || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d0x) {
            var EV1x = h0x.U1x(d0x, cmQ7J), i0x = h0x.U1x(d0x, cmR7K), eg2x = this.Mc3x.sb7U();
            if (!!i0x) {
                h0x.bh1x(d0x);
                this.MW3x = a9j.u1x(i0x, "id");
                this.Nc3x = a9j.u1x(i0x, "type");
                if (this.Nc3x == 18) {
                    var bI1x = this.R1x.eo3x(this.MW3x), pJ6D = l0x.pj6d(bI1x);
                    if (!EV1x) {
                        if (pJ6D == 10) {
                            bGL8D();
                            return
                        } else if (pJ6D == 100) {
                            bsc4g(bI1x);
                            return
                        }
                    } else {
                        if (pJ6D == 10) {
                            bGL8D();
                            return
                        } else if (pJ6D == 100) {
                            bsc4g(bI1x);
                            return
                        } else if (pJ6D == 11) {
                            cmN7G();
                            return
                        } else {
                            a9j.v1x(this.AT0x, "z-pause z-loading");
                            if (EV1x == this.AT0x && eg2x.play && !eg2x.ended) {
                                this.Mc3x.btg4k()
                            } else {
                                this.AT0x = EV1x;
                                this.Mc3x.cmY7R(bI1x)
                            }
                            return
                        }
                    }
                } else if (this.Nc3x == 70) {
                    if (a9j.bz1x(i0x, "z-noprogram")) {
                        n0x.X1x.M1x({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.cmM7F()
            }
        }
    }();
    b0x.cmM7F = function () {
        var hu4y = this.R1x.eo3x(this.MW3x), rM7F = l0x.bKQ9H(this.Nc3x, hu4y);
        rM7F.title = rM7F.title || "";
        rM7F.author = rM7F.author || "";
        rM7F.picUrl = rM7F.picUrl || "";
        rM7F.authors = rM7F.authors || "";
        if (this.Nc3x == 70) {
            this.MW3x = this.MW3x.slice(0, -4)
        }
        this.y1x("onfinish", {id: this.MW3x, type: this.Nc3x, data: rM7F})
    };
    b0x.uB8t = function (d0x) {
        var j0x = d0x.data;
        if (!this.AT0x) {
            return
        }
        switch (d0x.action) {
            case"play":
                a9j.eT3x(this.AT0x, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a9j.v1x(this.AT0x, "z-pause z-loading");
                break;
            case"error":
                n0x.X1x.M1x({type: 2, tip: "试听遇到问题，播放失败"});
                a9j.v1x(this.AT0x, "z-pause z-loading");
                break;
            case"playing":
                a9j.eT3x(this.AT0x, "z-loading", "z-pause");
                break;
            case"waiting":
                a9j.eT3x(this.AT0x, "z-pause", "z-loading");
                break
        }
    };
    b0x.cmL7E = function (d0x) {
        if (d0x.result.code == 407) {
            this.bbs9j.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.bbs9j.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b0x.bGi8a = function (d0x) {
        if (!this.sW8O || d0x.index < 0 || d0x.index > 5) {
            return
        }
        this.Mc3x.btg4k();
        var bd1x = bbA9r[d0x.index], e0x = NEJ.X({}, this.rc7V);
        e0x.cache = {klass: p0x.Es1x, clear: true, onerror: this.cmL7E.g0x(this)};
        e0x.cache.lkey = "search-publish-" + bd1x.type + "-" + this.sW8O;
        e0x.item = {klass: bd1x.item, getRestrictLevel: l0x.pj6d, dur2time: l0x.kQ5V};
        if (!e0x.cache.data) {
            e0x.cache.data = {}
        }
        e0x.cache.data.s = this.sW8O;
        e0x.cache.data.type = bd1x.type;
        e0x.cache.data.isPub = true;
        if (bd1x.type == 1) {
            e0x.cache.data.hlpretag = '<span class="s-fc7">';
            e0x.cache.data.hlposttag = "</span>"
        }
        e0x.onemptylist = this.cmK7D.g0x(this, this.sW8O);
        if (!!this.ER1x) this.R1x.tT8L(this.ER1x);
        if (!!this.dy2x) {
            this.dy2x = this.dy2x.S1x()
        }
        this.dy2x = G1x.mP5U.A1x(e0x);
        this.ER1x = e0x.cache.lkey
    };
    b0x.pp6j = function (d0x) {
        d0x.value = a9j.hZ4d("m-publish-search-loading")
    };
    b0x.cmK7D = function (J1x, d0x) {
        a9j.dJ2x(d0x.parent, "m-publish-emtpy-message", {key: J1x});
        d0x.stopped = true
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), dh2x = c0x("nej.p"), w1x = c0x("nej.j"),
        bX1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), B1x = c0x("nm.w"), b0x, K1x;
    var cmI7B = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    B1x.EN1x = NEJ.C();
    b0x = B1x.EN1x.O1x(bD1x.ef2x);
    var gn3x = a9j.ep3x("m-wgt-receiverInput");
    var cmG7z = a9j.ep3x("m-wgt-receiverList");
    var ip4t = a9j.so7h(cmI7B);
    var cmF7y = a9j.ep3x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b0x.cq1x = function (e0x) {
        this.bi1x = [];
        this.vc8U = e0x.receiver || null;
        this.cmE7x = e0x.unique || false;
        this.mj5o = e0x.err;
        this.bIp8h(this.bIt8l, e0x.uid);
        this.cu1x(e0x)
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.OA4E();
        this.OJ4N();
        this.bbf9W();
        if (e0x.receiver) this.brB4F(e0x.receiver.nickname, e0x.receiver.userId);
        a9j.Z1x(this.Bo0x, "display", "block");
        a9j.Z1x(this.brr4v, "cursor", "text");
        a9j.Z1x(this.Bo0x, "cursor", "text")
    };
    b0x.bZ1x = function () {
        var j0x = this.bIT8L();
        this.cb1x = a9j.il4p(a9j.bW1x(gn3x, {receiver: this.vc8U, users: j0x}));
        this.lh5m = ip4t
    };
    b0x.bR1x = function () {
        this.cc1x();
        var bK1x = a9j.I1x(this.m0x, "j-flag");
        var gI4M = a9j.I1x(this.m0x, "j-item");
        this.brr4v = bK1x[0];
        this.bJg8Y = bK1x[1];
        this.dM2x = bK1x[2];
        this.Bo0x = bK1x[3];
        this.bbc8U = bK1x[4];
        this.brm4q = bK1x[5];
        this.fp3x = gI4M;
        a9j.x1x(this.fp3x[0], "j-selected");
        h0x.s0x(this.dM2x, "keyup", this.brl4p.g0x(this));
        h0x.s0x(this.dM2x, "keydown", this.Qe4i.g0x(this));
        h0x.s0x(this.dM2x, "focus", this.kg5l.g0x(this));
        h0x.s0x(this.bbc8U, "click", this.cmC7v.g0x(this));
        h0x.s0x(this.brr4v, "click", this.cmB7u.g0x(this));
        h0x.s0x(document.body, "click", this.op6j.g0x(this));
        h0x.s0x(this.dM2x, "input", this.fr3x.g0x(this));
        h0x.s0x(this.dM2x, "blur", this.oU6O.g0x(this))
    };
    b0x.bA1x = function (e0x) {
        h0x.mt5y(document.body, "click", this.op6j.g0x(this));
        this.bF1x();
        this.bbf9W();
        this.cmz7s();
        this.op6j()
    };
    b0x.brl4p = function (d0x) {
        h0x.bh1x(d0x);
        var jj4n = d0x.keyCode || d0x.which;
        var bl1x = this.dM2x.value;
        var bm1x = this.fp3x.length;
        var qj7c = a9j.I1x(this.m0x, "j-selected")[0];
        switch (jj4n) {
            case 13:
                var kq5v = a9j.fU3x(qj7c, "data-username");
                var hC4G = a9j.fU3x(qj7c, "data-userId");
                this.brB4F(kq5v, hC4G);
                this.op6j();
                this.dM2x.value = "";
                break;
            case 38:
                var r0x = a9j.fU3x(qj7c, "data-index") - 1 < 0 ? bm1x - 1 : a9j.fU3x(qj7c, "data-index") - 1;
                a9j.v1x(qj7c, "j-selected");
                a9j.x1x(this.fp3x[r0x], "j-selected");
                break;
            case 40:
                var r0x = parseInt(a9j.fU3x(qj7c, "data-index")) + 1 >= bm1x ? 0 : parseInt(a9j.fU3x(qj7c, "data-index")) + 1;
                a9j.v1x(qj7c, "j-selected");
                a9j.x1x(this.fp3x[r0x], "j-selected");
                break;
            default:
                this.vr8j()
        }
    };
    b0x.Qe4i = function (d0x) {
        var jj4n = d0x.keyCode || d0x.which;
        var bl1x = this.dM2x.value;
        var r0x = a9j.I1x(this.m0x, "j-receiver").length - 1;
        if (jj4n === 8 && bl1x === "") this.cmy7r(r0x)
    };
    b0x.fr3x = function (d0x) {
        var bl1x = this.dM2x.value;
        if (bl1x.length > 10) {
            this.dM2x.value = bl1x.substring(0, 10);
            return
        }
        dh2x.dk2x.browser == "ie" && dh2x.dk2x.version < "7.0" ? setTimeout(this.bqK4O.g0x(this), 0) : this.bqK4O();
        this.OJ4N()
    };
    b0x.kg5l = function () {
        if (this.bi1x[0]) this.vr8j(); else this.bIp8h(this.cmx7q);
        a9j.Z1x(this.Bo0x, "display", "none")
    };
    b0x.oU6O = function () {
        var bm1x = a9j.I1x(this.m0x, "j-receiver").length;
        if (this.dM2x.value.trim() == "" && bm1x <= 0) a9j.Z1x(this.Bo0x, "display", "block")
    };
    b0x.brB4F = function (kq5v, hC4G) {
        var FZ1x = this.RM5R();
        if (FZ1x.length >= 10) {
            this.dA2x();
            return
        }
        var ba1x;
        for (ba1x = 0; ba1x < FZ1x.length; ba1x++) {
            if (FZ1x[ba1x] == hC4G) {
                this.op6j();
                return
            }
        }
        if (!kq5v || !hC4G) return;
        var f0x = a9j.dj2x(a9j.il4p(a9j.bW1x(cmF7y, {username: kq5v, userId: hC4G})));
        var bE1x = this.bJg8Y.parentNode;
        if (this.cmE7x) {
            this.bbf9W()
        }
        bE1x.insertBefore(f0x, this.bJg8Y);
        this.dM2x.value = "";
        var bm1x = a9j.I1x(this.m0x, "j-receiver").length;
        if (bm1x > 1) a9j.Z1x(this.Bo0x, "display", "none");
        this.bqK4O();
        this.OJ4N()
    };
    b0x.bbf9W = function () {
        var RT5Y = a9j.I1x(this.m0x, "j-receiver");
        var ba1x;
        if (RT5Y.length > 0) {
            for (ba1x = 0; ba1x < RT5Y.length; ba1x++) {
                a9j.cC2x(RT5Y[ba1x], false)
            }
        }
    };
    b0x.cmz7s = function () {
        this.dM2x.value = ""
    };
    b0x.cmy7r = function (r0x) {
        this.dA2x(!0);
        var RT5Y = a9j.I1x(this.m0x, "j-receiver");
        a9j.cC2x(RT5Y[r0x], false);
        this.OJ4N()
    };
    b0x.vr8j = function () {
        var bl1x = this.dM2x.value;
        var bw1x = bl1x.trim().toLowerCase();
        var j0x;
        bw1x = bw1x.replace(/\[/g, "\\[");
        bw1x = bw1x.replace(/\]/g, "\\]");
        j0x = this.bIT8L(bw1x);
        this.cmw7p(j0x)
    };
    b0x.op6j = function (d0x) {
        a9j.Z1x(this.bbc8U, "display", "none")
    };
    b0x.dA2x = function (gK4O) {
        if (gK4O && this.mj5o) {
            a9j.Z1x(this.mj5o, "display", "none");
            return
        }
        if (this.mj5o) a9j.Z1x(this.mj5o, "display", "block")
    };
    b0x.cmC7v = function (d0x) {
        h0x.ci1x(d0x);
        var da2x = d0x.target || d0x.srcElement;
        if (a9j.bz1x(da2x, "j-flag")) return;
        var bE1x = da2x.nodeName.toLowerCase() == "a" ? da2x.parentNode : da2x.parentNode.parentNode;
        var kq5v = a9j.fU3x(bE1x, "data-username");
        var hC4G = a9j.fU3x(bE1x, "data-userId");
        this.brB4F(kq5v, hC4G);
        this.op6j();
        a9j.Z1x(this.Bo0x, "display", "none")
    };
    b0x.cmB7u = function (d0x) {
        h0x.bh1x(d0x);
        var da2x = d0x.target || d0x.srcElement;
        if (a9j.bz1x(da2x.parentNode, "j-receiver")) {
            a9j.cC2x(da2x.parentNode, false);
            this.dA2x(!0);
            this.OJ4N()
        } else this.dM2x.focus()
    };
    b0x.bqK4O = function () {
        this.brm4q.innerHTML = this.dM2x.value;
        var cR2x = this.brm4q.offsetWidth + 2;
        a9j.Z1x(this.dM2x, "width", cR2x + "px")
    };
    b0x.OJ4N = function () {
        var baT8L = a9j.hM4Q(this.dM2x, this.m0x).y;
        var bLn9e = Math.floor((baT8L - 8) / 27);
        if (bLn9e < 0) return;
        a9j.Z1x(this.brr4v, "height", 19 + bLn9e * 29 + "px")
    };
    b0x.OA4E = function () {
        var oD6x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < oD6x.length; i++) {
            a9j.Z1x(this.brm4q, oD6x[i], a9j.dc2x(this.dM2x, oD6x[i]))
        }
    };
    b0x.bIp8h = function (dw2x, D1x) {
        var cY2x = D1x ? D1x : window.GUser.userId;
        var W1x = "/api/user/getfollows/" + cY2x;
        var fJ3x = w1x.bp1x(W1x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dw2x.g0x(this),
            onerror: function (j0x) {
                this.bi1x = []
            },
            onbeforerequest: function (j0x) {
            }
        })
    };
    b0x.bIt8l = function (j0x) {
        this.bi1x = JSON.parse(j0x).follow || [];
        var D1x = GUser.userId;
        for (var i = 0; i < this.bi1x.length; i++) {
            if (this.bi1x[i].userId == D1x) {
                this.bi1x.splice(i, 1);
                continue
            }
            this.bi1x[i].avatarUrl = this.bi1x[i].avatarUrl + "?param=30y30"
        }
    };
    b0x.cmx7q = function (j0x) {
        if (this.bi1x[0]) return;
        this.bIt8l(j0x);
        this.vr8j()
    };
    b0x.bIT8L = function (bw1x) {
        var bw1x = bw1x ? bw1x : "";
        this.bi1x = this.bi1x[0] ? this.bi1x : [];
        var bm1x = this.bi1x.length;
        var Ky3x = this.RM5R();
        var rF7y = [];
        var KC3x, KH3x, bqa4e;
        if (!this.bi1x[0]) return rF7y;
        for (var ba1x = 0; ba1x < bm1x; ba1x++) {
            bqa4e = false;
            for (var w1x = 0; w1x < Ky3x.length; w1x++) {
                if (this.bi1x[ba1x].userId == Ky3x[w1x]) {
                    bqa4e = true;
                    break
                }
            }
            if (bqa4e) continue;
            KC3x = this.bi1x[ba1x].nickname.toLowerCase().search(bw1x);
            KH3x = this.bi1x[ba1x].py ? this.bi1x[ba1x].py.toLowerCase().search(bw1x) : -1;
            if (KC3x !== -1 || KH3x != -1) rF7y.push(this.bi1x[ba1x])
        }
        return rF7y
    };
    b0x.cmw7p = function (j0x) {
        a9j.dJ2x(this.bbc8U, cmG7z, {users: j0x});
        a9j.x1x(a9j.I1x(this.m0x, "j-item")[0], "j-selected");
        this.fp3x = a9j.I1x(this.m0x, "j-item");
        a9j.Z1x(this.bbc8U, "display", "block")
    };
    b0x.RM5R = function () {
        var rF7y = a9j.I1x(this.m0x, "j-receiver") || [];
        var hC4G = [];
        for (var i = 0; i < rF7y.length; i++) {
            hC4G.push(a9j.fU3x(rF7y[i], "data-id"))
        }
        return hC4G
    };
    b0x.cyV0x = function () {
        var hC4G = this.RM5R();
        var rF7y = [];
        for (var i = 0; i < hC4G.length; i++) {
            for (var j = 0; j < this.bi1x.length; j++) {
                if (hC4G[i] == this.bi1x[j].userId) rF7y.push(this.bi1x[j])
            }
        }
        return rF7y
    };
    b0x.cmt7m = function () {
        this.bbf9W()
    };
    B1x.EN1x.M1x = function (e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n0x.oo6i.M1x({title: "登录"});
            return
        }
        e0x = e0x || {};
        if (e0x.parent === undefined) e0x.parent = document.body;
        !!this.eR3x && this.eR3x.S1x();
        this.eR3x = this.A1x(e0x)
    };
    B1x.EN1x.br1x = function () {
        !!this.eR3x && this.eR3x.S1x()
    };
    B1x.EN1x.El1x = function () {
        return this.op6j()
    };
    B1x.EN1x.cyW0x = function () {
        return this.vr8j()
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), l0x = c0x("nm.x"), n0x = c0x("nm.l"),
        b0x, K1x;
    n0x.Gf1x = NEJ.C();
    b0x = n0x.Gf1x.O1x(n0x.bcH9y);
    K1x = n0x.Gf1x.cj1x;
    b0x.bj1x = function () {
        var Ej1x;
        var cmr7k = function (C1x, J1x) {
            Ej1x = Ej1x || [];
            if (J1x != "18") Ej1x.push({key: J1x, value: C1x})
        };
        return function (e0x) {
            this.bk1x(e0x);
            if (e0x.upwards) {
                a9j.x1x(this.m0x, "m-emts-up")
            } else {
                a9j.v1x(this.m0x, "m-emts-up")
            }
            if (e0x.rightwards) {
                a9j.x1x(this.m0x, "m-emts-right")
            } else {
                a9j.v1x(this.m0x, "m-emts-right")
            }
            if (!Ej1x) {
                var bu1x = l0x.ctd8V();
                k0x.eq3x(bu1x, cmr7k)
            }
            var bm1x = Ej1x.length;
            Ej1x.splice(bm1x - 2, 0, {key: "18", value: "186"});
            this.baG8y = Ej1x;
            this.cmq7j = !!e0x.autoHide
        }
    }();
    b0x.bZ1x = function () {
        this.cb1x = "ntp-portrait"
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.I1x(this.m0x, "j-flag");
        this.bJ1x = i0x[0];
        this.cmp7i = i0x[1];
        this.cmo7h = i0x[2];
        this.cml7e = i0x[3];
        h0x.s0x(this.bJ1x, "click", this.xX9O.g0x(this));
        h0x.s0x(this.cmp7i, "click", this.Ef1x.g0x(this, 1));
        h0x.s0x(this.cml7e, "click", this.Ef1x.g0x(this, 2))
    };
    b0x.bpA3x = function (r0x) {
        this.baB8t = r0x;
        var bf1x = (r0x - 1) * 50;
        var i0x = this.baG8y.slice(bf1x, Math.min(bf1x + 50, this.baG8y.length));
        this.bJ1x.innerHTML = a9j.bW1x("jst-portrait", {plist: i0x}, {purl: l0x.bAJ6D});
        this.cmo7h.innerText = r0x + "/" + Math.ceil(this.baG8y.length / 50)
    };
    b0x.Ef1x = function (r0x) {
        var cmj7c = Math.ceil(this.baG8y.length / 50);
        if (r0x == 1 && this.baB8t == 1 || r0x == 2 && this.baB8t == cmj7c) return;
        r0x == 1 ? this.bpA3x(this.baB8t - 1) : this.bpA3x(this.baB8t + 1)
    };
    b0x.xX9O = function (d0x) {
        var F1x = h0x.U1x(d0x, "d:text");
        if (!F1x) return;
        var d0x = {url: a9j.u1x(F1x, "url"), text: a9j.u1x(F1x, "text")};
        this.y1x("onselect", d0x);
        if (this.cmq7j && !d0x.stopped) {
            this.br1x()
        }
    };
    b0x.M1x = function () {
        K1x.M1x.call(this);
        this.bpA3x(1)
    }
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), k0x = c0x("nej.u"), dh2x = c0x("nej.p"), bc1x = c0x("nej.h"),
        G1x = c0x("nej.ut"), js4w = /^[#?]+/, Cd0x = /#(.*?)$/, xW9N = window,
        bpf3x = !history.pushState || dh2x.bbH9y.android || !history.auto;
    var bas8k = function (W1x, bpb3x) {
        xW9N.history[!bpb3x ? "pushState" : "replaceState"](null, document.title, W1x)
    };
    var baq8i = function () {
        return location.parse(xW9N.location.href)
    };
    bas8k = bas8k.ek3x(function (d0x) {
        if (!bpf3x) return;
        var bg1x = d0x.args;
        d0x.stopped = !0;
        W1x = bg1x[0].replace(js4w, "");
        !bg1x[1] ? xW9N.location.hash = W1x : xW9N.location.replace("#" + W1x)
    });
    baq8i = baq8i.ek3x(function (d0x) {
        if (!bpf3x) return;
        d0x.stopped = !0;
        var dN2x = Cd0x.test(xW9N.location.href) ? RegExp.$1 : "";
        d0x.value = location.parse(dN2x.replace(js4w, ""))
    });
    location.redirect = function (W1x, bpb3x) {
        bas8k(W1x, bpb3x);
        return this
    };
    location.active = function () {
        var eD3x, W1x, iZ4d, cK2x, Sy5D;
        var boW3x = function (hq4u) {
            if (!!cK2x) {
                cK2x = !1;
                return
            }
            var d0x = {oldValue: iZ4d, newValue: baq8i()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h0x.y1x(location, "beforeurlchange", d0x);
                if (d0x.stopped) {
                    if (!!iZ4d) {
                        cK2x = !0;
                        bas8k(iZ4d.href, !0)
                    }
                    return
                }
            }
            W1x = xW9N.location.href;
            iZ4d = d0x.newValue;
            h0x.y1x(location, "urlchange", iZ4d);
            bc1x.bqo4s(iZ4d.href)
        };
        var bMR9I = function () {
            if (W1x != xW9N.location.href) boW3x();
            eD3x = requestAnimationFrame(bMR9I)
        };
        return function (bM1x) {
            if (!!Sy5D) return this;
            Sy5D = !0;
            xW9N = bM1x || window;
            if (bpf3x && "onhashchange" in window && dh2x.mp5u.trident2) {
                h0x.s0x(xW9N, "hashchange", boW3x);
                boW3x()
            } else if (!eD3x) {
                eD3x = requestAnimationFrame(bMR9I)
            }
            return this
        }
    }();
    location.parse = function () {
        var gf3x = /^https?:\/\/.*?\//i, js4w = /[?#]/;
        return function (W1x) {
            var o0x = {href: W1x};
            W1x = (W1x || "").replace(gf3x, "/").split(js4w);
            var cB1x = 1;
            if (W1x[0] == "/" && (W1x[1] || "").indexOf("/") == 0) cB1x = 2;
            o0x.path = W1x.splice(0, cB1x).join("?");
            o0x.query = k0x.hx4B(W1x.join("&"));
            return o0x
        }
    }();
    location.same = function (W1x) {
        return baq8i().href == W1x
    };
    G1x.fu3x.A1x({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), fO3x = c0x("nm.ut");
    fO3x.sZ8R = function (dV2x) {
        var gB4F = {text: "", start: 0, end: 0};
        if (dV2x.setSelectionRange) {
            gB4F.start = dV2x.selectionStart;
            gB4F.end = dV2x.selectionEnd;
            gB4F.text = gB4F.start != gB4F.end ? dV2x.value.substring(gB4F.start, gB4F.end) : ""
        } else if (document.selection) {
            var i, bao8g = document.selection.createRange(), xS9J = document.body.createTextRange();
            xS9J.moveToElementText(dV2x);
            gB4F.text = bao8g.text;
            gB4F.bookmark = bao8g.getBookmark();
            for (i = 0; xS9J.compareEndPoints("StartToStart", bao8g) < 0 && bao8g.moveStart("character", -1) !== 0; i++) {
                if (dV2x.value.charAt(i) == "\n") {
                    i++
                }
            }
            gB4F.start = i;
            gB4F.end = gB4F.text.length + gB4F.start
        }
        return gB4F
    };
    fO3x.ban8f = function (dV2x, gB4F) {
        var xS9J;
        if (!gB4F) {
            gB4F = {text: "", start: 0, end: 0}
        }
        dV2x.focus();
        if (dV2x.setSelectionRange) {
            dV2x.setSelectionRange(gB4F.start, gB4F.end)
        } else if (dV2x.createTextRange) {
            xS9J = dV2x.createTextRange();
            if (dV2x.value.length === gB4F.start) {
                xS9J.collapse(false);
                xS9J.select()
            } else {
                xS9J.moveToBookmark(gB4F.bookmark);
                xS9J.select()
            }
        }
    };
    fO3x.Gq1x = function (dV2x, gB4F, cJ2x) {
        var gB4F = gB4F || {text: "", start: 0, end: 0};
        var boL3x, bNq9h, xS9J, Mx3x, bNs9j, bNt9k, DX1x;
        this.ban8f(dV2x, gB4F);
        if (dV2x.setSelectionRange) {
            boL3x = dV2x.value;
            bNq9h = boL3x.substring(0, gB4F.start) + cJ2x + boL3x.substring(gB4F.end);
            bNs9j = bNt9k = gB4F.start + cJ2x.length;
            DX1x = dV2x.scrollTop;
            dV2x.value = bNq9h;
            if (dV2x.scrollTop != DX1x) {
                dV2x.scrollTop = DX1x
            }
            dV2x.setSelectionRange(bNs9j, bNt9k)
        } else if (dV2x.createTextRange) {
            Mx3x = document.selection.createRange();
            Mx3x.text = cJ2x;
            Mx3x.setEndPoint("StartToEnd", Mx3x);
            Mx3x.select()
        }
        h0x.y1x(dV2x, "keyup")
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), dh2x = c0x("nej.p"), k0x = c0x("nej.u"),
        bX1x = c0x("nej.ut"), B1x = c0x("nm.w"), fO3x = c0x("nm.ut"), b0x;
    B1x.bNy0x = NEJ.C();
    b0x = B1x.bNy0x.O1x(bX1x.cy1x);
    b0x.cq1x = function (e0x) {
        this.cu1x(e0x)
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.fV3x = e0x.txt;
        this.DP1x = e0x.sgtsContainer;
        this.bNC0x = e0x.sgtsList[0];
        this.bak8c = e0x.sgtsItem;
        this.ol6f = e0x.rangeData;
        this.Gt2x = e0x.atIndex;
        a9j.x1x(this.bak8c[0], "selected-item");
        this.MJ3x()
    };
    b0x.bA1x = function () {
        this.bF1x();
        h0x.mt5y(document.body, "keyup", this.bNZ0x.g0x(this));
        h0x.mt5y(document.body, "click", this.bOh0x.g0x(this))
    };
    b0x.MJ3x = function () {
        this.bS1x([[document.body, "keyup", this.bNZ0x.g0x(this)], [document.body, "click", this.bOh0x.g0x(this)], [this.fV3x, "keydown", this.bOm0x.g0x(this)], [this.fV3x, "keypress", this.bOm0x.g0x(this)], [this.bNC0x, "click", this.bOn0x.g0x(this)], [this.bNC0x, "mouseover", this.DG1x.g0x(this)]])
    };
    b0x.DG1x = function (d0x) {
        var da2x = h0x.U1x(d0x);
        var q0x = a9j.I1x(this.DP1x, "selected-item");
        if (a9j.bz1x(da2x, "j-sgt")) {
            a9j.v1x(q0x[0], "selected-item");
            a9j.x1x(da2x, "selected-item")
        }
    };
    b0x.bNZ0x = function (d0x) {
        var q0x = a9j.I1x(this.DP1x, "selected-item");
        var bm1x = this.bak8c.length;
        var jj4n = d0x.keyCode || d0x.which;
        var r0x, j0x;
        switch (jj4n) {
            case 38:
                r0x = a9j.fU3x(q0x[0], "data-index") - 1 < 0 ? bm1x - 1 : a9j.fU3x(q0x[0], "data-index") - 1;
                a9j.v1x(q0x[0], "selected-item");
                a9j.x1x(this.bak8c[r0x], "selected-item");
                break;
            case 40:
                r0x = parseInt(a9j.fU3x(q0x[0], "data-index")) + 1 >= bm1x ? 0 : parseInt(a9j.fU3x(q0x[0], "data-index")) + 1;
                a9j.v1x(q0x[0], "selected-item");
                a9j.x1x(this.bak8c[r0x], "selected-item");
                break;
            case 13:
                this.bOn0x(d0x);
                break;
            case 27:
                this.op6j();
                break;
            case 32:
                var bl1x = this.fV3x.value;
                var r0x = fO3x.sZ8R(this.fV3x);
                if (bl1x.charAt(r0x.start - 1) !== " ") return;
                this.op6j();
                break
        }
    };
    b0x.bOm0x = function (d0x) {
        var jj4n = d0x.keyCode || d0x.which;
        if (jj4n === 13 || jj4n === 38 || jj4n === 40) {
            h0x.ci1x(d0x);
            d0x.keyCode = 0;
            d0x.which = 0;
            d0x.returnvalue = false
        }
    };
    b0x.bOh0x = function (d0x) {
        var da2x = d0x.target || d0x.srcElement;
        if (da2x === this.fV3x) return;
        this.op6j()
    };
    b0x.bOn0x = function (d0x) {
        h0x.bh1x(d0x);
        var q0x = a9j.I1x(this.DP1x, "selected-item")[0];
        var qj7c = d0x.target || d0x.srcElement;
        var t1x = d0x.type;
        if (a9j.bz1x(qj7c, "lst")) return;
        if (t1x == "click") {
            a9j.v1x(q0x, "selected-item");
            a9j.x1x(qj7c, "selected-item")
        } else qj7c = q0x;
        var j0x = qj7c.innerHTML + " ";
        this.op6j();
        var gB4F = this.ol6f;
        gB4F.start = this.Gt2x + 1;
        if (dh2x.dk2x.browser == "ie" && dh2x.dk2x.version < "9.0") {
            this.fV3x.value = this.fV3x.value.substring(0, gB4F.start) + this.fV3x.value.substring(gB4F.end, this.fV3x.value.length);
            gB4F.end = gB4F.start
        }
        fO3x.Gq1x(this.fV3x, gB4F, j0x);
        h0x.y1x(this.fV3x, "keyup")
    };
    b0x.op6j = function (d0x) {
        if (!!this.DP1x) a9j.Z1x(this.DP1x, "display", "none");
        this.S1x()
    };
    b0x.vr8j = function (d0x) {
        if (!!this.DP1x) a9j.Z1x(this.DP1x, "display", "block")
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), w1x = c0x("nej.j"), B1x = c0x("nm.w"),
        bX1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), b0x;
    var cmi7b = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cmg7Z = a9j.ep3x("m-wgt-atlist");
    var ip4t = a9j.so7h(cmi7b);
    B1x.bOt0x = NEJ.C();
    b0x = B1x.bOt0x.O1x(bD1x.ef2x);
    b0x.cq1x = function (e0x) {
        this.fq3x = {};
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.fq3x.txt = a9j.z1x(e0x.target);
        this.fq3x.data = e0x.data;
        this.fq3x.offset = e0x.offset;
        this.fq3x.rangeData = e0x.rangeData;
        this.fq3x.atIndex = e0x.atIndex;
        this.clV7O(e0x);
        this.bk1x(e0x);
        this.fq3x.sgtsContainer = this.m0x;
        this.fq3x.sgtsList = a9j.I1x(this.m0x, "lst");
        this.fq3x.sgtsItem = a9j.I1x(this.m0x, "f-thide");
        this.IT2x(e0x);
        this.clS7L = B1x.bNy0x.A1x(this.fq3x)
    };
    b0x.bA1x = function (e0x) {
        this.bF1x();
        this.clS7L.S1x()
    };
    b0x.bZ1x = function () {
        this.lh5m = ip4t
    };
    b0x.bR1x = function () {
        this.cc1x()
    };
    b0x.clV7O = function (e0x) {
        this.m0x = a9j.dj2x(a9j.il4p(a9j.bW1x(cmg7Z, e0x.data)))
    };
    b0x.IT2x = function (e0x) {
        var bOA0x = a9j.I1x(this.m0x, "selected-item")[0];
        if (bOA0x) a9j.v1x(bOA0x, "selected-item");
        var cT2x = e0x.offset.x + "px";
        var gP4T = e0x.offset.y + "px";
        a9j.Z1x(this.m0x, "left", cT2x);
        a9j.Z1x(this.m0x, "top", gP4T)
    }
})();
(function () {
    var c0x = NEJ.P, w1x = c0x("nej.j"), fO3x = c0x("nm.ut");
    fO3x.bOC0x = function (bl1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cS2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Gu2x = bl1x.match(cS2x) || [];
        for (var ba1x = 0; ba1x < Gu2x.length; ba1x++) {
            Gu2x[ba1x] = Gu2x[ba1x].split("@")[1]
        }
        Gu2x = Gu2x.reverse();
        var hC4G = GUser.userId;
        var clQ7J = w1x.us8k("mentioners" + hC4G) || [];
        var jg4k = Gu2x.concat(clQ7J);
        if (jg4k.length > 10) jg4k = jg4k.slice(0, 10);
        w1x.vT8L("mentioners" + hC4G, jg4k)
    };
    fO3x.clP7I = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hC4G = GUser.userId;
        return w1x.us8k("mentioners" + hC4G) || []
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), dh2x = c0x("nej.p"), w1x = c0x("nej.j"),
        k0x = c0x("nej.u"), bX1x = c0x("nej.ut"), B1x = c0x("nm.w"), fO3x = c0x("nm.ut"), b0x;
    B1x.bPk0x = NEJ.C();
    b0x = B1x.bPk0x.O1x(bX1x.cy1x);
    b0x.cq1x = function (e0x) {
        this.cu1x(e0x);
        this.bPn0x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.fV3x = e0x.txt;
        this.m0x = e0x.body;
        this.bPo0x = e0x.before;
        this.MP3x = e0x.flag;
        this.clO7H = e0x.after;
        this.pz6t = [];
        if (dh2x.dk2x.browser != "ie") {
            setTimeout(function () {
                this.lf5k()
            }.g0x(this), 0)
        }
        this.MJ3x()
    };
    b0x.bA1x = function () {
        this.bF1x();
        if (this.tl8d) this.tl8d.S1x();
        delete this.tl8d
    };
    b0x.MJ3x = function () {
        this.bS1x([[this.fV3x, "keyup", this.bPF0x.g0x(this, this.fV3x)], [this.fV3x, "click", this.bPF0x.g0x(this, this.fV3x)], [this.fV3x, "focus", this.lf5k.g0x(this)]])
    };
    b0x.lf5k = function (d0x) {
        this.ol6f = fO3x.sZ8R(this.fV3x)
    };
    b0x.bPn0x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cY2x = window.GUser.userId;
        var W1x = "/api/user/getfollows/" + cY2x;
        var fJ3x = w1x.bp1x(W1x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j0x) {
                window.GFollowers = JSON.parse(j0x).follow
            }.g0x(this),
            onerror: function (j0x) {
            },
            onbeforerequest: function (j0x) {
            }
        })
    };
    b0x.bPG0x = function (index) {
        var C1x = this.fV3x.value, bf1x, bog3x, bof3x, Nh3x;
        this.bPo0x.innerHTML = k0x.dI2x(C1x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var or6l = a9j.I1x(this.bPo0x, "j-test");
        for (var ba1x = 0; ba1x < or6l.length; ba1x++) {
            or6l[ba1x].innerText = " "
        }
        this.MP3x.innerHTML = C1x.charAt(index);
        this.clO7H.innerHTML = k0x.dI2x(C1x.substr(index + 1, C1x.length));
        Nh3x = parseInt(a9j.dc2x(this.fV3x, "lineHeight"));
        a9j.Z1x(this.m0x, "display", "block");
        bog3x = a9j.hM4Q(this.MP3x, this.m0x);
        bof3x = a9j.hM4Q(this.fV3x);
        a9j.Z1x(this.m0x, "display", "none");
        var cT2x = bog3x.x + bof3x.x;
        var gP4T = bog3x.y + bof3x.y + Nh3x;
        bf1x = {x: cT2x, y: gP4T};
        this.clL7E(bf1x)
    };
    b0x.bPF0x = function (dV2x, d0x) {
        h0x.ci1x(d0x);
        var dV2x = dV2x;
        var C1x = dV2x.value;
        var bm1x = C1x.length;
        var r0x = fO3x.sZ8R(dV2x).start;
        var bPL0x = 0;
        var jj4n = d0x.keyCode || d0x.which;
        var jg4k;
        this.ol6f = fO3x.sZ8R(dV2x);
        var bPR0x = false;
        for (var i = 1; i < 20; i++) {
            jg4k = r0x - i;
            if (C1x.charAt(jg4k) === " ") break;
            if (C1x.charAt(jg4k) === "@") {
                bPR0x = true;
                this.Gt2x = bPL0x = jg4k;
                break
            }
        }
        if (bPR0x && d0x.shiftKey === false && jj4n !== 38 && jj4n !== 40) {
            if (jj4n !== 27 && jj4n !== 13) {
                this.tl8d ? this.tl8d.S1x() : null;
                this.bPG0x(bPL0x)
            }
        } else if (jj4n !== 38 && jj4n !== 40 && d0x.keyCode !== 32) {
            this.tl8d ? this.tl8d.S1x() : null
        }
    };
    b0x.clL7E = function (bf1x) {
        var bf1x = bf1x;
        var j0x = this.tm8e();
        var e0x = {
            parent: document.body,
            offset: bf1x,
            data: j0x,
            target: this.fV3x,
            rangeData: this.ol6f,
            atIndex: this.Gt2x
        };
        this.tl8d ? this.tl8d.S1x() : null;
        this.tl8d = B1x.bOt0x.A1x(e0x)
    };
    b0x.tm8e = function () {
        var clK7D = fO3x.sZ8R(this.fV3x).start;
        var clF7y = this.Gt2x + 1;
        var bPV0x = fO3x.clP7I() || [];
        var bPX0x = [];
        var bw1x = this.fV3x.value.substring(clF7y, clK7D).toLowerCase();
        bw1x = bw1x.replace(/\[/g, "\\[");
        bw1x = bw1x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pz6t = window.GFollowers[0] ? window.GFollowers : []
        } else this.pz6t = [];
        if (!this.pz6t[0]) this.bPn0x();
        for (var ba1x = 0; ba1x < bPV0x.length; ba1x++) {
            for (var w1x = 0; w1x < this.pz6t.length; w1x++) {
                if (this.pz6t[w1x].nickname == bPV0x[ba1x]) bPX0x.push(this.pz6t[w1x])
            }
        }
        this.pz6t = k0x.cal4p(this.pz6t, bPX0x, {union: true, begin: true});
        var clE7x = this.pz6t.length;
        var ZP8H = [];
        var KC3x, KH3x;
        if (!this.pz6t[0]) return {suggests: ZP8H};
        for (var i = 0; i < clE7x; i++) {
            KC3x = this.pz6t[i].nickname.toLowerCase().search(bw1x);
            KH3x = this.pz6t[i].py ? this.pz6t[i].py.toLowerCase().search(bw1x) : -1;
            if (KC3x !== -1 || KH3x != -1) ZP8H.push(this.pz6t[i]);
            if (ZP8H.length === 10) break
        }
        return {suggests: ZP8H}
    };
    b0x.Ny4C = function () {
        var gB4F = this.ol6f || {text: "", start: 0, end: 0};
        h0x.y1x(this.fV3x, "focus");
        fO3x.Gq1x(this.fV3x, gB4F, "@");
        this.ol6f = fO3x.sZ8R(this.fV3x);
        this.Gt2x = gB4F.start;
        this.bPG0x(this.Gt2x)
    };
    b0x.El1x = function () {
        if (this.tl8d) this.tl8d.S1x()
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), w1x = c0x("nej.j"), B1x = c0x("nm.w"),
        bX1x = c0x("nej.ut"), bD1x = c0x("nej.ui"), b0x;
    var clD7w = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var clC7v = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gn3x = a9j.il4p(clC7v);
    var ip4t = a9j.so7h(clD7w);
    B1x.NG4K = NEJ.C();
    b0x = B1x.NG4K.O1x(bD1x.ef2x);
    b0x.cq1x = function (e0x) {
        this.fq3x = {};
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x);
        this.fq3x.txt = a9j.z1x(e0x.target);
        this.OA4E();
        this.NH4L = B1x.bPk0x.A1x(this.fq3x)
    };
    b0x.bA1x = function (e0x) {
        this.bF1x();
        this.NH4L.S1x()
    };
    b0x.bZ1x = function () {
        this.cb1x = gn3x;
        this.lh5m = ip4t
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.cU2x(a9j.z1x(this.m0x));
        this.fq3x.body = this.m0x;
        this.fq3x.before = i0x[0];
        this.fq3x.flag = i0x[1];
        this.fq3x.after = i0x[2]
    };
    b0x.OA4E = function () {
        var oD6x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < oD6x.length; i++) {
            if (oD6x[i] === "width" && a9j.dc2x(this.fq3x.txt, oD6x[i]) == "100%") {
                var clz7s = this.fq3x.txt.offsetWidth;
                if (!clz7s) {
                    setTimeout(function () {
                        a9j.Z1x(this.m0x, oD6x[i], this.fq3x.txt.offsetWidth + "px")
                    }.g0x(this), 300)
                } else {
                    a9j.Z1x(this.m0x, oD6x[i], this.fq3x.txt.offsetWidth + "px")
                }
                continue
            }
            a9j.Z1x(this.m0x, oD6x[i], a9j.dc2x(this.fq3x.txt, oD6x[i]))
        }
    };
    b0x.Ny4C = function () {
        this.NH4L.Ny4C()
    };
    b0x.El1x = function () {
        this.NH4L.El1x()
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, fh3x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"),
        k0x = c0x("nej.u"), G1x = c0x("nej.ut"), ka5f = c0x("nm.c"), Q1x = {}, b0x;
    if (!!ka5f.bnH3x) return;
    ka5f.bnH3x = NEJ.C();
    b0x = ka5f.bnH3x.O1x(G1x.cy1x);
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x)
    };
    b0x.bA1x = function () {
        this.bF1x()
    };
    b0x.Dq1x = function (eP3x, dw2x, ZN8F) {
        if (Q1x[eP3x]) {
            this.hR4V("register commonJST[" + eP3x + "] duplicate");
            return
        }
        if (!k0x.gb3x(dw2x)) {
            dw2x = ctl.comJST.clx7q(eP3x, dw2x, ZN8F)
        }
        Q1x[eP3x] = dw2x
    };
    b0x.clu7n = function (ZI8A) {
        if (k0x.eu3x(ZI8A)) {
            k0x.bb1x(ZI8A, function (q0x) {
                ctl.comJST.Dq1x.apply(this, q0x)
            }, this)
        } else if (k0x.kW5b(ZI8A)) {
            k0x.eq3x(ZI8A, function (ez3x, J1x) {
                ctl.comJST.Dq1x(J1x, ez3x)
            })
        }
    };
    b0x.clx7q = function (eP3x, tn8f, ZN8F) {
        tn8f = tn8f || {};
        NEJ.X(tn8f, {comJST: this.na5f});
        if (tn8f.resetDataName && !k0x.eu3x(tn8f.resetDataName)) {
            tn8f.resetDataName = [tn8f.resetDataName]
        }
        return function () {
            var j0x = arguments[0], jh4l = arguments[1];
            if (tn8f.resetDataName) {
                var jg4k = {};
                for (var i = 0, ii = tn8f.resetDataName.length; i < ii; i++) {
                    jg4k[tn8f.resetDataName[i]] = arguments[i]
                }
                j0x = jg4k;
                jh4l = arguments[ii]
            }
            NEJ.X(j0x, tn8f, dG2x);
            if (ZN8F) {
                jh4l = jh4l || {};
                NEJ.X(jh4l, ZN8F)
            }
            return a9j.bW1x(eP3x, j0x, jh4l)
        }
    };
    b0x.na5f = function (eP3x) {
        if (!Q1x[eP3x]) {
            this.hR4V("commonJST[" + eP3x + "] is unregister");
            return ""
        } else {
            return Q1x[eP3x].apply(null, fh3x.slice.call(arguments, 1))
        }
    };
    b0x.dump = function () {
        return Q1x
    };
    b0x.hR4V = function (clt7m) {
        if (console && console.log) {
            console.log(clt7m)
        }
    };
    var dG2x = function (ez3x, J1x) {
        return J1x == "resetDataName"
    };
    c0x("ctl").comJST = ka5f.bnH3x.fX3x();
    a9j.cmT7M({comJST: c0x("ctl").comJST.na5f})
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, bo1x = NEJ.F, fh3x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"),
        k0x = c0x("nej.u"), G1x = c0x("nej.ut"), ka5f = c0x("nm.c"), l0x = c0x("nm.x"), Q1x = {}, b0x;
    if (!!ka5f.bnx3x) return;
    ka5f.bnx3x = NEJ.C();
    b0x = ka5f.bnx3x.O1x(G1x.cy1x);
    b0x.cq1x = function () {
        this.cu1x();
        var e0x = {
            "com-mv-artists": function (ft3x, dL2x, Fl1x, bnl3x) {
                return a9j.bW1x("com-mv-artists", {
                    artists: ft3x,
                    clazz: dL2x,
                    boxClazz: bnl3x,
                    mark: Fl1x || function (cz1x) {
                        return cz1x
                    },
                    escape: k0x.dI2x,
                    comJST: ctl.comJST.na5f
                })
            },
            "com-album-artists": function (ft3x, dL2x, Fl1x, bnl3x) {
                return a9j.bW1x("com-album-artists", {
                    artists: ft3x,
                    clazz: dL2x,
                    boxClazz: bnl3x,
                    mark: Fl1x || function (cz1x) {
                        return cz1x
                    },
                    escape: k0x.dI2x,
                    comJST: ctl.comJST.na5f
                })
            },
            "com-artists-title": {resetDataName: ["artists"], escape: k0x.dI2x},
            "com-user-type": function (df2x, dL2x, kC5H, KW3x, btL4P) {
                return a9j.bW1x("com-user-type", {
                    x: df2x,
                    clazz: dL2x || "",
                    clazz2: typeof btL4P == "undefined" ? "icn" : btL4P,
                    before: kC5H || "",
                    after: KW3x || "",
                    isEmptyObject: l0x.bGw8o
                })
            }
        };
        for (var D1x in e0x) {
            ctl.comJST.Dq1x(D1x, e0x[D1x])
        }
    };
    b0x.bj1x = function (e0x) {
        this.bk1x(e0x)
    };
    b0x.bA1x = function () {
        this.bF1x()
    };
    c0x("ctl").comJSTUtil = ka5f.bnx3x.fX3x()
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, a9j = c0x("nej.e"), dh2x = c0x("nej.p"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        G1x = c0x("nej.ut"), w1x = c0x("nej.j"), B1x = c0x("nm.w"), fO3x = c0x("nm.ut"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), n0x = c0x("nm.l"), bnh3x = [2, 3], dK2x = ["sn", "db"], b0x, K1x, cls7l = {
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
        }, ZB8t = {
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
        }, btS5X = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        }, clp7i = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, Dg1x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    n0x.xz9q = NEJ.C();
    b0x = n0x.xz9q.O1x(n0x.dZ2x);
    K1x = n0x.xz9q.cj1x;
    b0x.bj1x = function (e0x) {
        if (e0x.onclose === undefined) {
            e0x.onclose = this.btY5d.g0x(this)
        }
        this.bk1x(e0x);
        this.zv9m = e0x.isPub;
        this.jk4o = e0x.rid || -1;
        this.en3x = e0x.type || -1;
        this.bmX3x = e0x.purl;
        this.OL4P = e0x.name || "";
        this.OM4Q = e0x.author || "";
        this.bmP3x = e0x.authors || "";
        this.Zu8m = e0x.actId;
        this.Zt8l = e0x.actName;
        this.buu5z = e0x.title;
        this.Zp8h = {};
        this.clo7h = e0x.mesg || "";
        this.cln7g = e0x.placeholder || "说点什么吧";
        this.bmw3x = e0x.hideTip;
        this.clm7f = e0x.videoJumpUrl;
        var i0x, fT3x = +(new Date);
        try {
            i0x = top.localCache.z1x("user") || {}
        } catch (e) {
            i0x = {}
        }
        for (var i = 0, i0x = i0x.bindings || [], ex3x; i < i0x.length; ++i) {
            ex3x = !i0x[i].tokenJsonStr ? null : JSON.parse(i0x[i].tokenJsonStr);
            if (!ex3x || ex3x.expires_in === undefined) continue;
            var Zm8e = parseInt(ex3x.expires_in), Zl8d = parseInt(i0x[i].refreshTime),
                cll7e = (Zm8e + Zl8d) * 1e3 - 5 * 60 * 1e3;
            if (cll7e > fT3x) this.Zp8h[i0x[i].type] = !0
        }
        this.vc8U = B1x.EN1x.A1x({parent: this.Zj8b, err: this.buM5R});
        if (this.gM4Q) {
            this.gM4Q.S1x()
        }
        this.gM4Q = B1x.NG4K.A1x({parent: document.body, target: this.dY2x});
        if (this.en3x == 24 || this.en3x == 21 || this.CU0x()) {
            this.xt9k.style.display = "none"
        } else {
            this.xt9k.style.display = "";
            this.oi6c = B1x.bpr3x.A1x({
                parent: this.bmd3x,
                button: this.xt9k,
                onstartupload: this.buW5b.g0x(this, true),
                onfinishupload: this.buW5b.g0x(this, false)
            })
        }
        if (this.CU0x()) {
            this.pg6a.innerText = "";
            a9j.x1x(this.pg6a, "info-video");
            a9j.x1x(this.bmb3x, "f-hide")
        } else {
            a9j.v1x(this.bmb3x, "f-hide")
        }
    };
    b0x.bA1x = function () {
        this.bF1x();
        if (this.vc8U) {
            this.vc8U.S1x();
            delete this.vc8U
        }
        if (this.gM4Q) {
            this.gM4Q.S1x();
            delete this.gM4Q
        }
        if (this.oi6c) {
            this.oi6c.S1x();
            delete this.oi6c
        }
        if (this.lY5d) {
            this.lY5d.S1x();
            delete this.lY5d
        }
    };
    b0x.bZ1x = function () {
        this.cb1x = "m-wgt-sharewin"
    };
    b0x.bR1x = function () {
        this.cc1x();
        this.bva5f = a9j.cU2x(this.m0x)[0];
        var bq1x = a9j.I1x(this.m0x, "j-flag");
        this.pF6z = bq1x.shift();
        this.buM5R = bq1x.shift();
        this.Zj8b = bq1x.shift();
        this.dY2x = bq1x.shift();
        this.pg6a = bq1x.shift();
        this.blP2x = bq1x.shift();
        this.clk7d = bq1x.shift();
        this.xt9k = bq1x.shift();
        this.ck1x = bq1x.shift();
        this.bmd3x = bq1x.shift();
        this.zc9T = bq1x.shift();
        this.cyZ0x = bq1x.shift();
        this.bmb3x = bq1x.shift();
        this.dR2x = bq1x.shift();
        this.YZ8R = a9j.I1x(this.bmb3x, "j-t");
        this.AV0x = G1x.EX1x.A1x({list: a9j.cU2x(this.pF6z), selected: "z-slt", onchange: this.blB2x.g0x(this)});
        if (dh2x.dk2x.browser == "ie" && dh2x.dk2x.version < "8.0") {
            a9j.Z1x(this.Zj8b, "position", "relative");
            a9j.Z1x(this.Zj8b, "zIndex", "10")
        }
        h0x.s0x(window, "snsbind", this.Qp4t.g0x(this));
        h0x.s0x(this.dY2x, "input", this.fr3x.g0x(this));
        h0x.s0x(this.dY2x, "keyup", this.uv8n.g0x(this));
        h0x.s0x(this.m0x, "click", this.cA1x.g0x(this));
        this.R1x = p0x.ble2x.A1x();
        this.R1x.s0x("onshareall", this.YX8P.g0x(this, 0));
        this.R1x.s0x("onshareerror", this.ie4i.g0x(this));
        this.R1x.s0x("onshareprivate", this.YX8P.g0x(this, 1));
        this.YW8O = p0x.zb9S.A1x();
        this.hR4V = p0x.hY4c.A1x();
        try {
            this.Qy5D = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Qy5D) {
            this.Qy5D = Dg1x;
            w1x.bp1x("/api/event/user/permission", {
                type: "json", onload: function (d0x) {
                    if (d0x.code == 200) {
                        this.Qy5D = NEJ.EX(Dg1x, d0x)
                    }
                }.g0x(this)
            })
        }
    };
    b0x.blB2x = function (d0x) {
        d0x.index == 0 ? a9j.v1x(this.bva5f, "m-plshare") : a9j.x1x(this.bva5f, "m-plshare");
        this.Zj8b.style.display = d0x.index == 0 ? "none" : "";
        this.clk7d.style.display = d0x.index == 0 ? "" : "none";
        this.xt9k.style.display = d0x.index == 0 ? "" : "none";
        if (this.en3x == 24 || this.en3x == 21) {
            this.xt9k.style.display = "none"
        }
        this.buM5R.style.display = "none";
        this.dY2x.value = "";
        this.bV1x();
        this.CA0x();
        if (d0x.index == 0) {
            var cR2x = a9j.dc2x(this.dY2x, "width");
            if (cR2x == "auto" || !cR2x) {
                return
            } else {
                if (this.gM4Q) {
                    this.gM4Q.S1x()
                }
                this.gM4Q = B1x.NG4K.A1x({parent: document.body, target: this.dY2x})
            }
            this.bmd3x.style.display = ""
        } else {
            if (this.gM4Q) {
                this.gM4Q.S1x();
                delete this.gM4Q
            }
            this.bmd3x.style.display = "none"
        }
    };
    b0x.cA1x = function (d0x) {
        var f0x = h0x.U1x(d0x, "d:action");
        if (!f0x) return;
        if (a9j.u1x(f0x, "action") == "search") {
            h0x.ci1x(d0x)
        } else if (a9j.u1x(f0x, "default") === undefined) {
            h0x.ci1x(d0x)
        }
        switch (a9j.u1x(f0x, "action")) {
            case"txt":
                this.lf5k();
                break;
            case"search":
                if (this.CU0x()) {
                    top.location.href = this.clm7f
                } else if (this.zv9m && this.en3x != 24) {
                    if (this.lY5d) {
                        this.lY5d.S1x()
                    }
                    this.lY5d = B1x.bta4e.A1x({
                        parent: this.m0x.parentNode,
                        onfinish: this.blj2x.g0x(this),
                        oncancel: this.clg6a.g0x(this)
                    });
                    this.blf2x = true;
                    this.m0x.style.display = "none";
                    this.Cy0x(this.jk4o < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case"at":
                h0x.rX7Q(d0x);
                !!this.gF4J && this.gF4J.br1x();
                this.gM4Q.Ny4C();
                this.fF3x();
                break;
            case"emot":
                h0x.rX7Q(d0x);
                !!this.gM4Q && this.gM4Q.El1x();
                if (!this.gF4J) {
                    this.gF4J = n0x.Gf1x.A1x({parent: this.blP2x});
                    this.gF4J.s0x("onselect", this.xX9O.g0x(this))
                }
                this.gF4J.M1x();
                break;
            case"upload":
                break;
            case"sns":
                h0x.bh1x(d0x);
                var blc2x, bw1x, t1x = a9j.u1x(f0x, "type");
                if (!this.Zp8h[t1x]) {
                    blc2x = f0x.href.split("?");
                    bw1x = k0x.hx4B(blc2x[1]);
                    bw1x["csrf_token"] = w1x.gQ4U("__csrf");
                    top.open(blc2x[0] + "?" + k0x.db2x(bw1x));
                    return
                }
                var bu1x = {2: "sn", 3: "db", 4: "rr"};
                l0x.yH9y(f0x, "u-slg-" + bu1x[t1x] + "-gray");
                break;
            case"close":
                !!this.gF4J && this.gF4J.br1x();
                this.btY5d();
                break;
            case"share":
                h0x.bh1x(d0x);
                if (this.CU0x()) {
                    if (!a9j.bz1x(f0x, "u-btn2-2-dis")) {
                        this.clf6Z()
                    }
                } else if (a9j.bz1x(f0x, "u-btn2-2-dis")) {
                    if (!this.Qy5D.pubEventWithoutResource && this.jk4o < 0) {
                        this.cld6X()
                    } else {
                    }
                } else if (this.jk4o < 0 && !this.dY2x.value && this.oi6c && this.oi6c.PJ4N().length == 0) {
                    n0x.X1x.M1x({type: 2, tip: "请输入内容"})
                } else {
                    this.clc6W()
                }
                break
        }
    };
    b0x.cld6X = function () {
        var sf7Y = 0, bkX2x = function () {
            if (sf7Y % 2) {
                a9j.v1x(this.pg6a, "z-show")
            } else {
                a9j.x1x(this.pg6a, "z-show")
            }
            sf7Y++;
            if (sf7Y > 5) {
                clearInterval(eD3x)
            }
        }, eD3x;
        return function () {
            sf7Y = 0;
            clearInterval(eD3x);
            eD3x = setInterval(bkX2x.g0x(this), 200)
        }
    }();
    b0x.Qp4t = function (o0x) {
        o0x = o0x.result;
        this.Zp8h[o0x.type] = !0;
        var r0x = k0x.cV2x(bnh3x, o0x.type), ce1x = "u-slg-" + dK2x[r0x] + "-gray";
        a9j.v1x(this.YZ8R[r0x], ce1x)
    };
    b0x.blj2x = function (bv1x) {
        var j0x = bv1x.data;
        this.jk4o = bv1x.id;
        this.en3x = bv1x.type;
        this.m0x.style.display = "";
        this.Cy0x(this.buu5z);
        this.lY5d && this.lY5d.S1x();
        this.blf2x = false;
        this.bmX3x = j0x.picUrl;
        this.OL4P = j0x.title || "";
        this.OM4Q = j0x.author || "";
        this.bmP3x = j0x.authors || "";
        this.cla6U();
        this.YK7D()
    };
    b0x.clg6a = function () {
        this.lY5d && this.lY5d.S1x();
        this.m0x.style.display = "";
        this.Cy0x(this.buu5z);
        this.blf2x = false;
        this.YK7D()
    };
    b0x.xX9O = function (d0x) {
        var bl1x = "[" + d0x.text + "]";
        fO3x.Gq1x(this.dY2x, this.ol6f, bl1x);
        this.fF3x()
    };
    b0x.fr3x = function (d0x) {
        dh2x.dk2x.browser == "ie" && dh2x.dk2x.version < "7.0" ? setTimeout(this.fF3x.g0x(this), 0) : this.fF3x()
    };
    b0x.uv8n = function (d0x) {
        this.lf5k();
        if (d0x.keyCode == 8) this.fF3x()
    };
    b0x.fF3x = function () {
        this.lf5k();
        this.CA0x()
    };
    b0x.CA0x = function () {
        var bm1x = Math.ceil(k0x.fc3x(this.dY2x.value.trim()) / 2);
        this.ck1x.innerText = 140 - bm1x;
        bm1x > 140 ? a9j.eT3x(this.ck1x, "s-fc4", "s-fc6") : a9j.eT3x(this.ck1x, "s-fc6", "s-fc4")
    };
    b0x.clc6W = function () {
        if (this.cw1x()) return;
        if (k0x.fc3x(this.dY2x.value.trim()) > 280) {
            this.bV1x("字数超过140个字符");
            return
        }
        var t1x = this.AV0x.sl7e(), j0x;
        if (t1x == 0) {
            for (var i = 0, Hd2x = []; i < this.YZ8R.length; ++i) {
                if (!a9j.bz1x(this.YZ8R[i], "u-slg-" + dK2x[i] + "-gray")) Hd2x.push(bnh3x[i])
            }
            this.cw1x(!0);
            j0x = {
                id: this.jk4o,
                msg: this.dY2x.value.trim(),
                type: this.YJ7C(this.en3x),
                picUrl: this.bmX3x,
                snsTypes: Hd2x.join(","),
                isPub: this.zv9m
            };
            if (this.Zu8m > 0) {
                j0x.actId = this.Zu8m;
                if (this.Zt8l) {
                    j0x.msg = "#" + this.Zt8l + "#" + j0x.msg
                }
            }
            var np6j = this.oi6c && this.oi6c.PJ4N();
            if (np6j && np6j.length) {
                j0x.pics = np6j
            }
            this.R1x.coH7A(j0x)
        } else {
            var rF7y = this.vc8U.RM5R();
            if (rF7y.length <= 0) {
                this.bV1x("请至少选择一位好友");
                return
            }
            this.R1x.coG7z({
                data: {
                    id: this.jk4o,
                    msg: this.dY2x.value.trim(),
                    type: this.YJ7C(this.en3x),
                    userIds: "[" + rF7y.join(",") + "]"
                }
            })
        }
    };
    b0x.clf6Z = function () {
        if (this.cw1x()) {
            return
        }
        this.hR4V.gm3x("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k0x.fc3x(this.dY2x.value.trim()) > 280) {
            this.bV1x("字数超过140个字符");
            return
        }
        this.cw1x(!0);
        var j0x = {msg: this.dY2x.value.trim() || "", type: "video"}, ckZ6T = {videoId: this.jk4o};
        if (this.Zu8m > 0) {
            j0x.actId = this.Zu8m;
            if (this.Zt8l) {
                j0x.msg = "#" + this.Zt8l + "#" + j0x.msg
            }
        }
        j0x.videoinfo = JSON.stringify(ckZ6T);
        this.R1x.coF7y({data: {videoId: this.jk4o, commit: true}, data2: j0x, snsTypes: ""})
    };
    b0x.YX8P = function (t1x, o0x) {
        this.cw1x(!1);
        this.br1x();
        if (!this.bmw3x) {
            if (this.CU0x()) {
                n0x.X1x.M1x({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                n0x.X1x.M1x({
                    tip: "分享成功" + (o0x.point > 0 ? ' 获得<em class="s-fc6">' + o0x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h0x.y1x(n0x.xz9q, "sharesuccess", {isPrivate: t1x, rid: this.jk4o, rtype: this.en3x, data: o0x.event});
        this.y1x("onshare")
    };
    b0x.ie4i = function (o0x) {
        this.cw1x(!1);
        var bC1x = "分享失败";
        if (o0x.code) {
            switch (o0x.code) {
                case 404:
                    bC1x = "分享的资源不存在";
                    break;
                case 407:
                    bC1x = "输入内容包含有关键字";
                    break;
                case 408:
                    bC1x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bC1x = o0x.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l0x.eW3x({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.bV1x(bC1x)
    };
    b0x.lf5k = function () {
        this.ol6f = fO3x.sZ8R(this.dY2x)
    };
    b0x.bV1x = function (bC1x) {
        this.dA2x(this.dR2x, bC1x)
    };
    b0x.cw1x = function (cK2x) {
        return this.dF2x(this.zc9T, cK2x, "分享", "分享中...")
    };
    b0x.YJ7C = function (jt4x) {
        return cls7l[jt4x] || ""
    };
    b0x.ckY6S = function () {
        var dV2x, sH7A = this.YJ7C(this.en3x);
        this.pg6a.style.display = "";
        if (this.jk4o < 0) {
            this.pg6a.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.OL4P) {
                this.pg6a.style.display = "none";
                return
            }
            var YD7w = this.zv9m && this.en3x != 24;
            dV2x = (ZB8t[sH7A] ? ZB8t[sH7A] + "：" : "") + this.OL4P + (btS5X[sH7A] || " ") + (sH7A == "mv" || sH7A == "album" ? this.bmP3x || this.OM4Q : this.OM4Q);
            a9j.dJ2x(this.pg6a, "m-xwgt-share-infobar", {canChange: YD7w, info: dV2x});
            if (YD7w) {
                a9j.v1x(this.pg6a, "z-dis")
            } else {
                a9j.x1x(this.pg6a, "z-dis")
            }
        }
        a9j.v1x(this.pg6a, "info-video")
    };
    b0x.cla6U = function () {
        var sH7A = this.YJ7C(this.en3x),
            dV2x = (ZB8t[sH7A] ? ZB8t[sH7A] + "：" : "") + this.OL4P + (btS5X[sH7A] || " ") + (sH7A == "mv" || sH7A == "album" ? this.bmP3x || this.OM4Q : this.OM4Q);
        YD7w = this.zv9m && this.en3x != 24;
        if (this.CU0x()) {
        } else {
            a9j.v1x(this.pg6a, "info-video");
            a9j.dJ2x(this.pg6a, "m-xwgt-share-infobar", {canChange: YD7w, isPub: this.zv9m, info: dV2x})
        }
    };
    b0x.ckP6J = function () {
        var Hf2x = this.dY2x.value;
        if (this.zv9m) {
            if (!!this.blf2x) {
                return !!Hf2x && !!Hf2x.length || !!this.oi6c && this.oi6c.PJ4N().length > 0
            } else {
                return !(this.jk4o < 0) || !!Hf2x && !!Hf2x.length || !!this.oi6c && this.oi6c.PJ4N().length > 0
            }
        } else {
            return !!Hf2x && !!Hf2x.length || !!this.oi6c && this.oi6c.PJ4N().length > 0
        }
    };
    b0x.YK7D = function () {
        var bws5x = false;
        if (!this.zv9m || this.Qy5D.pubEventWithoutResource || !(this.jk4o < 0)) {
            bws5x = true
        }
        if (bws5x) {
            a9j.v1x(this.zc9T, "u-btn2-2-dis")
        } else {
            a9j.x1x(this.zc9T, "u-btn2-2-dis")
        }
    };
    b0x.buW5b = function (bkz2x) {
        if (bkz2x) {
            a9j.x1x(this.zc9T, "u-btn2-2-dis")
        } else {
            this.YK7D()
        }
    };
    b0x.btY5d = function (d0x) {
        if (d0x) {
            d0x.stopped = true
        }
        if (this.ckP6J()) {
            l0x.gC4G({
                title: "提示", message: "是否退出本次编辑？", btnok: "退出", action: function (V1x) {
                    if (V1x == "ok") {
                        this.y1x("forceclose", {});
                        this.br1x()
                    }
                }.g0x(this)
            })
        } else {
            this.y1x("forceclose", {});
            this.br1x()
        }
    };
    b0x.Cy0x = function (eM3x, dD2x) {
        this.nK6E.Ag0x(eM3x, dD2x)
    };
    b0x.YB7u = function (t1x) {
        this.hR4V.gm3x("page", {type: t1x})
    };
    b0x.CU0x = function () {
        return this.en3x == 39
    };
    b0x.M1x = function () {
        var ckN6H = function (q0x, r0x) {
            var ce1x = "u-slg-" + dK2x[r0x] + "-gray";
            !this.Zp8h[bnh3x[r0x]] ? a9j.x1x(q0x, ce1x) : a9j.v1x(q0x, ce1x)
        };
        return function () {
            K1x.M1x.call(this);
            this.m0x.style.display = "";
            this.bV1x();
            this.cw1x(!1);
            this.AV0x.Mf3x(0);
            this.dY2x.focus();
            this.dY2x.value = this.clo7h || "";
            this.dY2x.placeholder = this.cln7g || "";
            if (!this.CU0x()) {
                this.ckY6S()
            } else {
                a9j.x1x(this.pg6a, "info-video");
                a9j.dJ2x(this.pg6a, "m-xwgt-share-videobar", {title: this.OL4P, picUrl: this.bmX3x})
            }
            this.fF3x();
            this.vc8U.cmt7m();
            k0x.bb1x(this.YZ8R, ckN6H, this);
            this.lf5k();
            if (this.zv9m) {
                this.pF6z.style.display = "none"
            } else {
                this.pF6z.style.display = ""
            }
            this.YK7D()
        }
    }();
    b0x.br1x = function (d0x) {
        K1x.br1x.call(this);
        !!this.gF4J && this.gF4J.br1x();
        if (this.vc8U) {
            this.vc8U.S1x();
            delete this.vc8U
        }
        if (this.gM4Q) {
            this.gM4Q.S1x();
            delete this.gM4Q
        }
        if (this.oi6c) {
            this.oi6c.S1x();
            delete this.oi6c
        }
        if (this.bwB5G) {
            this.bwB5G = this.bwB5G.S1x()
        }
        if (this.lY5d) {
            this.lY5d.S1x();
            delete this.lY5d
        }
    };
    l0x.mM5R = function (e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e0x.title === undefined) {
            e0x.title = "分享"
        }
        if (e0x.actId && e0x.type != 39) {
            var t1x = clp7i[e0x.resourceType], cm1x = e0x.resourceJson, hu4y;
            if (k0x.fx3x(cm1x)) {
                try {
                    cm1x = JSON.parse(cm1x)
                } catch (e) {
                }
            }
            if (t1x) {
                hu4y = l0x.bKQ9H(t1x, cm1x);
                e0x.name = hu4y.title;
                e0x.author = hu4y.author;
                e0x.picUrl = hu4y.picUrl;
                e0x.type = t1x;
                e0x.rid = (cm1x || []).id
            }
        }
        n0x.xz9q.M1x(e0x)
    };
    G1x.fu3x.A1x({element: n0x.xz9q, event: ["sharesuccess"]})
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), w1x = c0x("nej.j"), n0x = c0x("nm.l"),
        B1x = c0x("nm.w"), bD1x = c0x("nej.ui"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K1x;
    n0x.Yy7r = NEJ.C();
    b0x = n0x.Yy7r.O1x(n0x.dZ2x);
    K1x = n0x.Yy7r.cj1x;
    b0x.cq1x = function () {
        this.cu1x()
    };
    b0x.bR1x = function () {
        this.cc1x();
        var i0x = a9j.I1x(this.m0x, "j-flag");
        h0x.s0x(i0x[0], "click", this.BO0x.g0x(this))
    };
    b0x.bZ1x = function () {
        this.cb1x = "m-import-ok"
    };
    b0x.bj1x = function (e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.title = "歌曲同步完成";
        this.bk1x(e0x)
    };
    b0x.bA1x = function () {
        this.bF1x()
    };
    b0x.BO0x = function (d0x) {
        this.br1x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b0x.zg9X = function () {
        this.br1x()
    };
    b0x.buc5h = function (d0x) {
        if (d0x.keyCode == 13) this.BM0x()
    }
})();
(function () {
    var c0x = NEJ.P, Y1x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), w1x = c0x("nej.j"), N1x = c0x("nej.p"),
        k0x = c0x("nej.u"), n0x = c0x("nm.l"), B1x = c0x("nm.w"), bD1x = c0x("nej.ui"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), b0x, K1x;
    n0x.bwJ5O = NEJ.C();
    b0x = n0x.bwJ5O.O1x(n0x.dZ2x);
    b0x.bZ1x = function () {
        this.cb1x = "m-programtips-layer"
    };
    b0x.bR1x = function () {
        this.cc1x();
        this.bN1x = a9j.I1x(this.m0x, "j-flag")
    };
    b0x.bj1x = function (e0x) {
        e0x.clazz = " m-layer-programtips";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "付费内容提示";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bk1x(e0x);
        this.gH4L = e0x.id;
        this.ckJ6D = e0x.radiotype;
        this.kH5M = location.protocol + "//" + (this.ckI6C() || "music.163.com") + "/m/" + this.ckJ6D + "?id=" + this.gH4L;
        this.ckE6y()
    };
    b0x.bA1x = function () {
        this.bF1x()
    };
    b0x.zg9X = function () {
        this.br1x()
    };
    b0x.BO0x = function (d0x) {
        this.y1x("onok", C1x);
        this.br1x()
    };
    l0x.bwP5U = function (e0x) {
        n0x.bwJ5O.A1x(e0x).M1x()
    };
    b0x.ckE6y = function () {
        w1x.bp1x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k0x.db2x({url: this.kH5M, size: 180}),
            onload: function (j0x) {
                if (j0x.code == 200) {
                    this.ckD6x(j0x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g0x(this)
        })
    };
    b0x.ckI6C = function () {
        var ckC6w = location.host;
        if (ckC6w.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b0x.ckD6x = function (kd5i) {
        this.bN1x[0].style.backgroundImage = "url(" + kd5i + ")"
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), dh2x = c0x("nej.p"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        G1x = c0x("nej.ut"), w1x = c0x("nej.j"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), E1x = c0x("nm.m"),
        n0x = c0x("nm.l"), L1x = c0x("nm.m.f"), b0x, K1x;
    E1x.cQ2x = NEJ.C();
    b0x = E1x.cQ2x.O1x(G1x.de2x);
    b0x.bG1x = function () {
        var pE6y = !1;
        return function () {
            if (pE6y) return;
            pE6y = !0;
            this.bL1x();
            if (top == self) {
                return
            }
            this.sr7k = a9j.z1x("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bwV5a()
            }
            G1x.fu3x.A1x({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bS1x([[window, "scroll", this.yB9s.g0x(this)], [document, "keyup", this.ckB6v.g0x(this)], [document.body, "click", this.rB7u.g0x(this)], [document, "mouseup", this.ckA6u.g0x(this)], [this.sr7k, "click", this.RV5a.g0x(this)], [p0x.rw7p, "message", this.uk8c.g0x(this)]]);
            l0x.coO7H(document.body);
            this.yB9s();
            if (this.Br0x !== false && typeof GUser !== "undefined" && GUser.userId > 0) p0x.rw7p.fX3x().uu8m();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dh2x.dk2x.browser == "ie" && parseInt(dh2x.dk2x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gx4B = top.player.getPlaying();
                    if (gx4B && gx4B.track && gx4B.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gx4B.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.xc9T.g0x(this);
            this.ko5t = p0x.hY4c.A1x();
            window.log = this.ml5q.g0x(this);
            var rT7M = location.search;
            if (rT7M) {
                var bw1x = rT7M.substr(rT7M.indexOf("?") + 1), fM3x = k0x.hx4B(bw1x);
                if (fM3x && fM3x["_hash"]) location.hash = fM3x["_hash"]
            }
        }
    }();
    b0x.ckB6v = function (d0x) {
        var f0x = h0x.U1x(d0x);
        try {
            if (d0x.keyCode == 80 && l0x.bFU8M() || ["textarea", "input"].indexOf(f0x.tagName.toLowerCase()) >= 0) return;
            h0x.y1x(top.document, "keyup", {ctrlKey: d0x.ctrlKey, keyCode: d0x.keyCode})
        } catch (e) {
        }
    };
    b0x.rB7u = function (d0x) {
        var f0x = h0x.U1x(d0x);
        if (f0x && f0x.tagName == "INPUT") return;
        var f0x = h0x.U1x(d0x, "d:pid");
        if (f0x) {
            h0x.ci1x(d0x);
            var ph6b = a9j.u1x(f0x, "pid"), Bg0x = a9j.u1x(f0x, "ptype"), V1x = a9j.u1x(f0x, "action") || "play";
            switch (V1x) {
                case"subscribe":
                    l0x.lH5M({tracks: [ph6b]});
                    break
            }
        }
        f0x = h0x.U1x(d0x, "d:resAction");
        if (f0x && f0x.className.indexOf("-dis") == -1) {
            var cP2x = a9j.u1x(f0x, "resId"), t1x = a9j.u1x(f0x, "resType"), bjR2x = a9j.u1x(f0x, "resRadiotype"),
                bjP2x = a9j.u1x(f0x, "resRadioid"), dP2x = a9j.u1x(f0x, "resFrom"), j0x = a9j.u1x(f0x, "resData"),
                V1x = a9j.u1x(f0x, "resAction"), bsc4g = a9j.u1x(f0x, "resCopyright"),
                Yq7j = a9j.u1x(f0x, "resAuditstatus");
            if (V1x != "log" && V1x != "bilog") h0x.ci1x(d0x);
            switch (V1x) {
                case"log":
                    j0x = (j0x || "").split("|");
                    if (!!j0x[0]) {
                        var bd1x = {id: cP2x, alg: j0x[2] || "itembased", scene: j0x[3], position: j0x[1] || 0};
                        if (!!j0x[4]) bd1x.srcid = j0x[4];
                        window.log(j0x[0], bd1x)
                    }
                    break;
                case"bilog":
                    var bct9k = a9j.u1x(f0x, "logAction"), bcF9w = a9j.u1x(f0x, "logJson");
                    window.log(bct9k, bcF9w);
                    break;
                case"share":
                    if (Yq7j && Yq7j == 1) {
                        l0x.in4r("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cP2x, t1x, a9j.u1x(f0x, "resPic"), a9j.u1x(f0x, "resName"), a9j.u1x(f0x, "resAuthor"), a9j.u1x(f0x, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (t1x == 18) {
                        var pJ6D = a9j.u1x(f0x, "resLevel"), qR7K = a9j.u1x(f0x, "resFee");
                        if (pJ6D == 10) {
                            l0x.sX8P(qR7K, cP2x, "song");
                            break
                        }
                        l0x.lH5M({tracks: [cP2x]})
                    }
                    break;
                case"download":
                    l0x.Vf6Z({id: cP2x, type: t1x});
                    break;
                case"programtips":
                    if (Yq7j && Yq7j == 1) {
                        l0x.in4r("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l0x.bwP5U({id: bjP2x, radiotype: bjR2x})
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d0x)
        } catch (e) {
        }
    };
    b0x.ckA6u = function (d0x) {
        try {
            h0x.y1x(top.document, "mouseup")
        } catch (e) {
        }
    };
    b0x.yB9s = function () {
        var ckz6t = function () {
            var cg1x = window.innerHeight;
            if (!k0x.vz8r(cg1x)) cg1x = (document.documentElement || document.body).clientHeight;
            return cg1x
        };
        return function (d0x) {
            if (!this.sr7k) return;
            var Yp7i = ckz6t(), fL3x = document.documentElement.scrollTop || document.body.scrollTop;
            a9j.Z1x(this.sr7k, "display", fL3x > 0 ? "" : "none");
            if (dh2x.dk2x.browser == "ie" && dh2x.dk2x.version < "7.0") {
                var gq3x = Math.min(document.body.clientHeight, Yp7i + fL3x) - 204;
                a9j.Z1x(this.sr7k, "top", gq3x + "px")
            }
        }
    }();
    b0x.RV5a = function (d0x) {
        h0x.ci1x(d0x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b0x.xc9T = function () {
        var bjE1x = function (d0x) {
            h0x.y1x(window, "share", d0x)
        };
        return function (cP2x, t1x, BP0x, T1x, SB5G, SE5J) {
            l0x.mM5R({
                rid: cP2x,
                type: t1x,
                purl: BP0x,
                name: T1x,
                author: SB5G,
                authors: SE5J,
                onshare: bjE1x.g0x(this)
            })
        }
    }();
    b0x.ml5q = function (V1x, bd1x) {
        try {
            top.log(V1x, bd1x)
        } catch (e) {
            switch (V1x) {
                case"play":
                    this.ko5t.ey3x(bd1x);
                    break;
                case"search":
                    this.ko5t.bDE7x(bd1x);
                    break;
                default:
                    this.ko5t.gm3x(V1x, bd1x)
            }
        }
    };
    b0x.bwV5a = function () {
        var Yl7e, bjv1x = false, bs1x = [45, 60];
        var cku6o = function (bC1x) {
            if (bC1x.title != "MailBoxImport") return;
            var P1x = JSON.parse(bC1x.content || "null") || Y1x;
            if (P1x.status == 10) {
                n0x.Yy7r.A1x().M1x();
                window.clearTimeout(Yl7e)
            }
        };
        var to8g = function (d0x) {
            if (d0x.code == 200) {
                if (d0x.status == 1) {
                    h0x.s0x(p0x.yA9r, "message", cku6o.g0x(this));
                    p0x.yA9r.A1x().beC9t();
                    bjv1x = true
                } else {
                    if (bjv1x) {
                        if (d0x.status == 10) {
                            n0x.Yy7r.A1x().M1x();
                            h0x.hw4A(p0x.yA9r, "message");
                            window.clearTimeout(Yl7e);
                            bjv1x = false
                        }
                    } else {
                        window.clearTimeout(Yl7e)
                    }
                }
            }
        };
        return function () {
            var sC7v = bs1x.shift() * 1e3;
            w1x.bp1x("/api/musicbox/mail/status", {type: "json", method: "get", onload: to8g.g0x(this)});
            if (sC7v) {
                Yl7e = window.setTimeout(arguments.callee, sC7v)
            }
        }
    }();
    b0x.uk8c = function (d0x) {
        try {
            top.polling(d0x)
        } catch (e) {
        }
    }
})()