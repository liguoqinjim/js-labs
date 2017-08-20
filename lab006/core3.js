(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Ba0x) {
        if (!Ba0x || !Ba0x.length) return null;
        var XP6J = window;
        for (var a = Ba0x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; XP6J = XP6J[a[i]] = XP6J[a[i]] || {}, i++) ;
        return XP6J
    };
    NEJ.Q = function (bL1x, Ba0x) {
        bL1x = bL1x || NEJ.O;
        var bs0x = Ba0x.split(".");
        for (var i = 0, l = bs0x.length; i < l; i++) {
            bL1x = bL1x[bs0x[i]];
            if (!bL1x) break
        }
        return bL1x
    };
    NEJ.C = function () {
        var brD2x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var brJ2x = function (z0x, bv0x) {
            for (var x in bv0x) if (z0x == bv0x[x]) return x;
            return null
        };
        var blW0x = {cl1x: 0, bk0x: 1, bD0x: 2, bS1x: 3, bI1x: 4, eR2x: 5, jD3x: 6, ei2x: 7},
            sO6I = {cs1x: 0, bl0x: 1, bH0x: 2, cb1x: 3, bM1x: 4, gt2x: 5, km3x: 6, fO2x: 7};
        return function () {
            var fd2x = function () {
                this.bsD2x();
                return this.cl1x.apply(this, arguments)
            };
            fd2x.prototype.bsD2x = NEJ.F;
            fd2x.prototype.cl1x = NEJ.F;
            fd2x.O0x = function (xS9J, btb2x) {
                if (brD2x(xS9J)) return;
                if (btb2x == null || !!btb2x) NEJ.X(this, xS9J, brD2x);
                this.cix3x = xS9J;
                this.cg1x = xS9J.prototype;
                var bC0x = function () {
                };
                bC0x.prototype = xS9J.prototype;
                this.prototype = new bC0x;
                var Cz0x = this.prototype;
                Cz0x.constructor = this;
                var dR2x;
                for (var x in blW0x) {
                    dR2x = brJ2x(blW0x[x], sO6I);
                    if (!dR2x || !this.cg1x[x]) continue;
                    Cz0x[x] = function (T0x) {
                        return function () {
                            this[T0x].apply(this, arguments)
                        }
                    }(dR2x)
                }
                var Ek0x = {};
                for (var x in sO6I) {
                    dR2x = brJ2x(sO6I[x], blW0x);
                    if (!dR2x || !this.cg1x[dR2x]) continue;
                    Ek0x[dR2x] = xS9J;
                    Cz0x[x] = function (T0x) {
                        return function () {
                            var m0x, bC0x = this.bcZ7S[T0x], ZN6H = bC0x.prototype[T0x];
                            this.bcZ7S[T0x] = bC0x.cix3x || xS9J;
                            if (!!ZN6H) m0x = ZN6H.apply(this, arguments);
                            this.bcZ7S[T0x] = xS9J;
                            return m0x
                        }
                    }(dR2x)
                }
                Cz0x.bsD2x = function () {
                    this.bcZ7S = NEJ.X({}, Ek0x)
                };
                Cz0x.cxQ7J = Cz0x.cs1x;
                return Cz0x
            };
            return fd2x
        }
    }();
    NEJ.X = function (ga2x, bN1x, dD1x) {
        if (!ga2x || !bN1x) return ga2x;
        dD1x = dD1x || NEJ.F;
        for (var x in bN1x) {
            if (bN1x.hasOwnProperty(x) && !dD1x(bN1x[x], x)) ga2x[x] = bN1x[x]
        }
        return ga2x
    };
    NEJ.EX = function (ga2x, bN1x) {
        if (!ga2x || !bN1x) return ga2x;
        for (var x in ga2x) {
            if (ga2x.hasOwnProperty(x) && bN1x[x] != null) ga2x[x] = bN1x[x]
        }
        return ga2x
    };
    var IO2x = Function.prototype;
    IO2x.eb2x = function (lL4P, bfm8e) {
        var f = NEJ.F, bfm8e = bfm8e || f, lL4P = lL4P || f, de1x = this;
        return function () {
            var d0x = {args: NEJ.R.slice.call(arguments, 0)};
            lL4P(d0x);
            if (!d0x.stopped) {
                d0x.value = de1x.apply(this, d0x.args);
                bfm8e(d0x)
            }
            return d0x.value
        }
    };
    IO2x.g0x = function () {
        var bg0x = arguments, ga2x = arguments[0], bmn0x = this;
        return function () {
            var vj8b = NEJ.R.slice.call(bg0x, 1);
            NEJ.R.push.apply(vj8b, arguments);
            return bmn0x.apply(ga2x || window, vj8b)
        }
    };
    IO2x.dX2x = function () {
        var bg0x = arguments, ga2x = NEJ.R.shift.call(bg0x), bmn0x = this;
        return function () {
            NEJ.R.push.apply(arguments, bg0x);
            return bmn0x.apply(ga2x || window, arguments)
        }
    };
    var IO2x = String.prototype;
    if (!IO2x.trim) {
        IO2x.trim = function () {
            var cP1x = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cP1x, "")
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
    var c0x = NEJ.P, X0x = NEJ.O, N0x = c0x("nej.p"), ZG6A = window.navigator.platform,
        tu6o = window.navigator.userAgent;
    var kb3x = {mac: ZG6A, win: ZG6A, linux: ZG6A, ipad: tu6o, ipod: tu6o, iphone: ZG6A, android: tu6o};
    N0x.ZF6z = kb3x;
    for (var x in kb3x) kb3x[x] = (new RegExp(x, "i")).test(kb3x[x]);
    kb3x.ios = kb3x.ipad || kb3x.iphone || kb3x.ipod;
    kb3x.tablet = kb3x.ipad;
    kb3x.desktop = kb3x.mac || kb3x.win || kb3x.linux && !kb3x.android;
    var hD3x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    N0x.cT1x = hD3x;
    if (/msie\s+(.*?);/i.test(tu6o) || /trident\/.+rv:([\d\.]+)/i.test(tu6o)) {
        hD3x.engine = "trident";
        hD3x.browser = "ie";
        hD3x.version = RegExp.$1;
        hD3x.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var nG4K = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        hD3x.release = nG4K[document.documentMode] || nG4K[parseInt(hD3x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tu6o)) {
        hD3x.engine = "webkit";
        hD3x.release = RegExp.$1 || "";
        hD3x.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(tu6o)) {
        hD3x.engine = "gecko";
        hD3x.release = RegExp.$1 || "";
        hD3x.browser = "firefox";
        hD3x.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(tu6o)) hD3x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(tu6o)) {
        hD3x.engine = "presto";
        hD3x.release = RegExp.$1 || "";
        hD3x.browser = "opera";
        hD3x.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(tu6o)) hD3x.version = RegExp.$1 || ""
    }
    if (hD3x.browser == "unknow") {
        var nG4K = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nG4K.length, T0x; i < l; i++) {
            T0x = nG4K[i] == "safari" ? "version" : nG4K[i];
            if ((new RegExp(T0x + "/(.*?)(?=\\s|$)", "i")).test(tu6o)) {
                hD3x.browser = nG4K[i];
                hD3x.version = RegExp.$1.trim();
                break
            }
        }
    }
    N0x.buf3x = {};
    var ZC6w = hD3x.engine != "trident";
    N0x.mj4n = {
        gecko: hD3x.engine != "gecko",
        webkit: hD3x.engine != "webkit",
        presto: hD3x.engine != "presto",
        trident0: ZC6w || hD3x.release > "2.0",
        trident1: ZC6w || hD3x.release < "6.0",
        trident2: ZC6w || hD3x.release > "3.0",
        trident: ZC6w || hD3x.release >= "6.0"
    }
})();
(function () {
    var iD3x = NEJ.P("nej.c"), R0x = {};
    var bmA0x = function () {
        var cP1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V0x) {
            V0x = V0x || "";
            if (cP1x.test(V0x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var JD2x = function () {
        var bum3x = function (j0x, bv0x) {
            if (!j0x || !j0x.length) return;
            for (var i = 0, l = j0x.length, kB4F; i < l; i++) {
                kB4F = j0x[i];
                if (kB4F.indexOf("://") > 0) bv0x[bmA0x(kB4F)] = kB4F
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
        return function (bN1x) {
            iD3x.IH2x("root", bN1x.root || "/res/");
            var bjh9Y, fp2x = iD3x.x0x("root");
            for (var x in bc0x) {
                bjh9Y = bc0x[x];
                iD3x.IH2x(x, bN1x[bjh9Y.name] || fp2x + bjh9Y.dft)
            }
            var yh9Y = bN1x.p_csrf;
            if (yh9Y == !0) {
                yh9Y = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            iD3x.IH2x("csrf", NEJ.EX({cookie: "", param: ""}, yh9Y));
            R0x.frames = {};
            bum3x(bN1x.p_frame, R0x.frames);
            R0x.flashs = {};
            bum3x(bN1x.p_flash, R0x.flashs)
        }
    }();
    iD3x.IH2x = function (J0x, z0x) {
        R0x[J0x] = z0x
    };
    iD3x.x0x = function (J0x) {
        return R0x[J0x]
    };
    iD3x.bYI1x = function (V0x) {
        var ve8W = bmA0x(V0x);
        return R0x.frames[ve8W] || ve8W + "/res/nej_proxy_frame.html"
    };
    iD3x.cdd2x = function (V0x) {
        return R0x.flashs[bmA0x(V0x)]
    };
    JD2x(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c0x = NEJ.P, N0x = c0x("nej.p"), iD3x = c0x("nej.c"), bN1x = window.NEJ_CONF || NEJ.O;
    if (N0x.mj4n.trident) return;
    iD3x.IH2x("storage.swf", bN1x.storage || iD3x.x0x("root") + "nej_storage.swf");
    if (N0x.cT1x.release < "4.0") {
        iD3x.IH2x("blank.png", bN1x.blank || iD3x.x0x("root") + "nej_blank.gif")
    }
    var j0x = bN1x.xdr, fU2x = /^(https?:\/\/.*?)(?=\/|$)/i, jm3x = /[\/?=&]/i;
    var bvc3x = function (V0x) {
        return (fU2x.test(V0x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!j0x && !!j0x.length) for (var i = j0x.length - 1, V0x, J0x; i >= 0; i--) {
        V0x = j0x[i];
        J0x = bvc3x(V0x);
        if (!!J0x) iD3x.IH2x(J0x, V0x)
    }
    iD3x.cxD7w = function (V0x) {
        var J0x = bvc3x(V0x);
        if (!J0x) {
            if (jm3x.test(V0x)) {
                J0x = location.protocol + "//" + location.host
            } else if (V0x.indexOf("://") < 0) {
                J0x = location.protocol + "//" + V0x
            } else {
                J0x = V0x
            }
        }
        return iD3x.x0x(J0x) || J0x + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c0x = NEJ.P, iD3x = c0x("nej.c"), N0x = c0x("nej.g"), fW2x = +(new Date);
    N0x.cxz7s = 1e4 - fW2x;
    N0x.biQ9H = 10001 - fW2x;
    N0x.cxy7r = 10002 - fW2x;
    N0x.bvD3x = 10003 - fW2x;
    N0x.bPu8m = 10004 - fW2x;
    N0x.cxs7l = 10005 - fW2x;
    N0x.bmq0x = 10006 - fW2x;
    N0x.bQC8u = 10007 - fW2x;
    N0x.wK8C = "Content-Type";
    N0x.cxn7g = "text/plain";
    N0x.EB1x = "multipart/form-data";
    N0x.bTr0x = "application/x-www-form-urlencoded";
    N0x.bcA7t = iD3x.x0x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c0x = NEJ.P, eT2x = NEJ.R, N0x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        bb0x = c0x("nej.h");
    var kZ4d = N0x.cT1x.prefix, bwZ3x = N0x.buf3x,
        bUm0x = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, bWo0x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, QE4I = {
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
    var JD2x = function () {
        var sj6d = bb0x.byj4n();
        bwZ3x.css3d = !!sj6d && sj6d.m41 != null;
        var cP1x = /-([a-z])/g;
        for (var x in QE4I) {
            QE4I[byX4b(x)] = QE4I[x]
        }
    };
    var byX4b = function () {
        var cP1x = /-([a-z])/g;
        return function (T0x) {
            T0x = T0x || "";
            return T0x.replace(cP1x, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var byY4c = function (T0x) {
        return (!bwZ3x.css3d ? bUm0x : bWo0x)[T0x]
    };
    var bzW4a = function () {
        var cP1x = /\s+/;
        return function (fd2x) {
            fd2x = (fd2x || "").trim();
            return !!fd2x ? fd2x.split(cP1x) : null
        }
    }();
    var YY6S = function (E0x, t0x, fd2x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return;
        k0x.be0x(bzW4a(fd2x), function (dL1x) {
            E0x.classList[t0x](dL1x)
        })
    };
    bb0x.In2x = function (j0x) {
        return eT2x.slice.call(j0x, 0)
    };
    bb0x.bqA2x = function (E0x) {
        return bb0x.In2x(E0x.children)
    };
    bb0x.bqM2x = function (E0x, fd2x) {
        return bb0x.In2x(E0x.getElementsByClassName(fd2x))
    };
    bb0x.brn2x = function (E0x, Ik2x) {
        YY6S(E0x, "add", Ik2x)
    };
    bb0x.baQ7J = function (E0x, Ij2x) {
        YY6S(E0x, "remove", Ij2x)
    };
    bb0x.JP2x = function (E0x, Ij2x, Ik2x) {
        YY6S(E0x, "remove", Ij2x);
        YY6S(E0x, "add", Ik2x)
    };
    bb0x.bcY7R = function (E0x, fd2x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return !1;
        var j0x = E0x.classList;
        if (!j0x || !j0x.length) return !1;
        return k0x.cW1x(bzW4a(fd2x), function (dL1x) {
            return j0x.contains(dL1x)
        }) >= 0
    };
    bb0x.bdl7e = function (E0x, dL1x) {
    };
    bb0x.bdX8P = function (E0x) {
    };
    bb0x.bfj8b = function (fC2x, mG4K) {
        fC2x.selectionEnd = mG4K.end || 0;
        fC2x.selectionStart = mG4K.start || 0;
        fC2x.focus()
    };
    bb0x.bgg8Y = function (fC2x) {
        return {end: fC2x.selectionEnd, start: fC2x.selectionStart}
    };
    bb0x.bgC8u = function () {
        var AZ0x = function (dL1x, d0x) {
            var E0x = h0x.U0x(d0x);
            if (!E0x.value) a9j.w0x(E0x, dL1x)
        };
        var If2x = function (dL1x, d0x) {
            a9j.y0x(h0x.U0x(d0x), dL1x)
        };
        return function (E0x, eF2x, dL1x) {
            if (eF2x == 1) {
                h0x.q0x(E0x, "blur", AZ0x.g0x(null, dL1x))
            }
            if (eF2x == 1 || eF2x == -1) {
                h0x.q0x(E0x, "focus", If2x.g0x(null, dL1x))
            }
        }
    }();
    bb0x.biR9I = function (G0x) {
        return (new XMLSerializer).serializeToString(G0x) || ""
    };
    bb0x.bjz9q = function (yv9m) {
        var fp2x = (new DOMParser).parseFromString(yv9m, "text/xml").documentElement;
        return fp2x.nodeName == "parsererror" ? null : fp2x
    };
    bb0x.bjZ9Q = function (E0x) {
    };
    bb0x.mX4b = function (E0x) {
        return null
    };
    bb0x.bkw9n = function (E0x) {
        return null
    };
    bb0x.blD0x = function (dI1x) {
    };
    bb0x.blR0x = function () {
        var bg0x = bb0x.In2x(arguments);
        bg0x[0] = a9j.x0x(bg0x[0]);
        if (!bg0x[0]) return null;
        bg0x[1] = (bg0x[1] || "").toLowerCase();
        if (!bg0x[1]) return null;
        return bg0x
    };
    bb0x.yB9s = function () {
        var uH7A = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, ip3x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cln4r = function (t0x) {
            return (kZ4d.evt || kZ4d.pro) + t0x
        };
        return function () {
            var bg0x = bb0x.blR0x.apply(bb0x, arguments);
            if (!bg0x) return;
            var YB6v = ip3x[bg0x[1]], YA6u = uH7A[bg0x[1]];
            if (!!YB6v) {
                bg0x[4] = bg0x[1];
                bg0x[1] = cln4r(YB6v)
            } else if (!!YA6u) {
                var T0x = "on" + bg0x[1];
                if (!(T0x in bg0x[0])) {
                    bg0x[4] = bg0x[1];
                    bg0x[1] = YA6u
                }
            }
            return bg0x
        }
    }();
    bb0x.bnV1x = function () {
        var bg0x = arguments;
        bg0x[0].addEventListener(bg0x[1], bg0x[2], !!bg0x[3])
    };
    bb0x.Yy6s = function () {
        var bg0x = arguments;
        bg0x[0].removeEventListener(bg0x[1], bg0x[2], !!bg0x[3])
    };
    bb0x.boO1x = function (E0x, t0x, e0x) {
        var d0x = document.createEvent("Event");
        d0x.initEvent(t0x, !0, !0);
        NEJ.X(d0x, e0x);
        E0x.dispatchEvent(d0x)
    };
    bb0x.byj4n = function () {
        var fU2x = /\((.*?)\)/, jm3x = /\s*,\s*/, j0x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Yw6q = function (sj6d) {
            var hZ3x = {};
            if (fU2x.test(sj6d || "")) {
                k0x.be0x(RegExp.$1.split(jm3x), function (z0x, s0x) {
                    hZ3x[j0x[s0x]] = z0x || ""
                })
            }
            return hZ3x
        };
        return function (sj6d) {
            if (!!window.CSSMatrix) return new CSSMatrix(sj6d);
            var T0x = kZ4d.clz + "CSSMatrix";
            if (!!window[T0x]) return new window[T0x](sj6d || "");
            return Yw6q(sj6d)
        }
    }();
    bb0x.bzX4b = function () {
        var cP1x = /\{(.*?)\}/g;
        return function (T0x, bv0x) {
            bv0x = bv0x || o;
            var pw5B = byY4c(T0x);
            return !pw5B ? "" : pw5B.replace(cP1x, function ($1, $2) {
                var bs0x = $2.split("|");
                return bv0x[bs0x[0]] || bs0x[1] || "0"
            })
        }
    }();
    bb0x.baS7L = function (E0x, T0x, z0x) {
        E0x.style[bb0x.bzY4c(T0x)] = z0x
    };
    bb0x.bzY4c = function () {
        var cP1x = /^[a-z]/, bbb7U = kZ4d.css;
        var clC4G = function (T0x) {
            return T0x.replace(cP1x, function ($1) {
                return bbb7U + $1.toUpperCase()
            })
        };
        return function (T0x) {
            T0x = byX4b(T0x);
            var clD4H = bb0x.coh5m(T0x, QE4I);
            return clD4H ? clC4G(T0x) : T0x
        }
    }();
    bb0x.coh5m = function () {
        var cP1x = /^([a-z]+?)[A-Z]/;
        return function (T0x, bv0x) {
            if (!bv0x[T0x]) {
                if (cP1x.test(T0x)) T0x = RegExp.$1
            }
            return !!bv0x[T0x]
        }
    }();
    bb0x.coq5v = function () {
        var cP1x = /\$<(.*?)>/gi, bbb7U = "-" + kZ4d.css.toLowerCase() + "-";
        return function (jr3x) {
            return jr3x.replace(cP1x, function ($1, $2) {
                var eM2x = $2, bs0x = eM2x.split("|"), pw5B = byY4c(bs0x[0]);
                if (!!pw5B) {
                    return bb0x.bzX4b(bs0x[0], k0x.hk3x(bs0x[1]))
                }
                return !bb0x.cos5x(eM2x, QE4I) ? eM2x : bbb7U + eM2x
            })
        }
    }();
    bb0x.cos5x = function (T0x, bv0x) {
        return !!bv0x[T0x]
    };
    bb0x.bdw7p = function (cc1x, jr3x) {
        cc1x.textContent = jr3x
    };
    bb0x.beG8y = function (cc1x, jr3x) {
        var wZ8R = cc1x.sheet, bp0x = wZ8R.cssRules.length;
        wZ8R.insertRule(jr3x, bp0x);
        return wZ8R.cssRules[bp0x]
    };
    bb0x.cwp6j = function (E0x, e0x) {
    };
    bb0x.Yl6f = function (Yi6c) {
        return (Yi6c || "").toLowerCase() != "transparent"
    };
    bb0x.bOD7w = function (E0x) {
    };
    bb0x.bgU8M = function (E0x, T0x) {
        if (!!E0x.getAttribute) return E0x.getAttribute(T0x);
        return ""
    };
    bb0x.Yd6X = function (fb2x) {
        a9j.cF1x(fb2x)
    };
    JD2x()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), N0x = c0x("nej.p"), bb0x = c0x("nej.h");
    if (N0x.mj4n.trident0) return;
    var fW2x = +(new Date);
    R0x = {};
    bb0x.bdl7e = bb0x.bdl7e.eb2x(function (d0x) {
        d0x.stopped = !0;
        var bg0x = d0x.args, C0x = a9j.kJ4N(bg0x[0]), J0x = "hover-" + C0x;
        if (!C0x || !!R0x[J0x]) return;
        R0x[J0x] = !0;
        h0x.q0x(C0x, "mouseenter", a9j.y0x.g0x(a9j, C0x, bg0x[1]));
        h0x.q0x(C0x, "mouseleave", a9j.w0x.g0x(a9j, C0x, bg0x[1]))
    });
    bb0x.bdX8P = function () {
        var cwg6a = function () {
        };
        return bb0x.bdX8P.eb2x(function (d0x) {
            d0x.stopped = !0;
            var E0x = d0x.args[0], C0x = "fixed-" + a9j.kJ4N(E0x);
            if (!!R0x[C0x]) return;
            var bc0x = {};
            R0x[C0x] = bc0x
        })
    }();
    bb0x.bjZ9Q = bb0x.bjZ9Q.eb2x(function (d0x) {
        d0x.stopped = !0;
        var E0x = d0x.args[0], cc1x = E0x.style, bBI4M = a9j.oD5I();
        cc1x.width = bBI4M.scrollWidth + "px";
        cc1x.height = bBI4M.scrollHeight + "px"
    });
    bb0x.mX4b = bb0x.mX4b.eb2x(function (d0x) {
        d0x.stopped = !0;
        var E0x = d0x.args[0], kd3x = R0x[E0x.msk];
        if (!kd3x) {
            E0x.msk = fW2x++;
            kd3x = a9j.cV1x("iframe");
            kd3x.style.position = "absolute";
            R0x[E0x.msk] = kd3x
        }
        d0x.value = kd3x;
        var cc1x = kd3x.style;
        cc1x.top = (parseInt(a9j.dc1x(E0x, "top")) || 0) + "px";
        cc1x.left = (parseInt(a9j.dc1x(E0x, "left")) || 0) + "px";
        cc1x.width = E0x.offsetWidth + "px";
        cc1x.height = E0x.offsetHeight + "px";
        E0x.insertAdjacentElement("beforeBegin", kd3x)
    });
    bb0x.bkw9n = bb0x.bkw9n.eb2x(function (d0x) {
        d0x.stopped = !0;
        var kd3x = R0x[d0x.args[0].msk];
        if (!!kd3x) a9j.me4i(kd3x)
    })
})();
(function () {
    var c0x = NEJ.P, N0x = c0x("nej.p"), a9j = c0x("nej.e"), bb0x = c0x("nej.h");
    if (N0x.mj4n.trident1) return;
    bb0x.yB9s = function () {
        var uH7A = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bb0x.yB9s.eb2x(function (d0x) {
            var bg0x = bb0x.blR0x.apply(bb0x, d0x.args);
            if (!bg0x) {
                d0x.stopped = !0;
                return
            }
            var t0x = uH7A[bg0x[1]];
            if (!!t0x && ("on" + t0x).toLowerCase() in bg0x[0]) {
                bg0x[4] = bg0x[1];
                bg0x[1] = t0x;
                d0x.stopped = !0;
                d0x.value = bg0x
            }
        })
    }();
    bb0x.Yl6f = function (Yi6c) {
        return !0
    };
    bb0x.Yd6X = bb0x.Yd6X.eb2x(function (d0x) {
        d0x.stopped = !0;
        var fb2x = d0x.args[0];
        a9j.Y0x(fb2x, "display", "none");
        try {
            fb2x.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, N0x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        bb0x = c0x("nej.h"), bkc9T = {};
    if (N0x.mj4n.trident) return;
    bb0x.In2x = bb0x.In2x.eb2x(function (d0x) {
        d0x.stopped = !0;
        var j0x = d0x.args[0];
        if (!j0x) {
            d0x.value = null;
            return
        }
        var s0x = 0, m0x = [];
        while (!!j0x[s0x]) {
            m0x.push(j0x[s0x++])
        }
        d0x.value = m0x
    });
    bb0x.bqA2x = bb0x.bqA2x.eb2x(function (d0x) {
        d0x.stopped = !0;
        var bs0x = [];
        k0x.be0x(d0x.args[0].childNodes, function (f0x) {
            if (f0x.nodeType == 1) bs0x.push(f0x)
        });
        d0x.value = bs0x
    });
    bb0x.bqM2x = bb0x.bqM2x.eb2x(function (d0x) {
        var E0x = d0x.args[0];
        if (!!E0x.getElementsByClassName) return;
        d0x.stopped = !0;
        var m0x = [], bkn9e = new RegExp("(\\s|^)(?:" + d0x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k0x.be0x(E0x.getElementsByTagName("*"), function (f0x) {
            if (bkn9e.test(f0x.className)) m0x.push(f0x)
        });
        d0x.value = m0x
    });
    bb0x.bfj8b = bb0x.bfj8b.eb2x(function (d0x) {
        var fC2x = d0x.args[0], mG4K = d0x.args[1];
        if (fC2x.selectionStart == null) {
            d0x.stopped = !0;
            var cG1x = fC2x.createTextRange();
            cG1x.collapse(!0);
            cG1x.moveStart("character", mG4K.start);
            cG1x.moveEnd("character", mG4K.end - mG4K.start);
            cG1x.select();
            fC2x.focus()
        }
    });
    bb0x.bgg8Y = bb0x.bgg8Y.eb2x(function (d0x) {
        var fC2x = d0x.args[0];
        fC2x.focus();
        if (fC2x.selectionStart == null) {
            d0x.stopped = !0;
            var bBL4P = document.selection.createRange();
            var bBM4Q = fC2x.createTextRange();
            bBM4Q.moveToBookmark(bBL4P.getBookmark());
            var blj0x = fC2x.createTextRange();
            blj0x.collapse(!0);
            blj0x.setEndPoint("EndToStart", bBM4Q);
            var is3x = blj0x.text.length;
            d0x.value = {start: is3x, end: is3x + bBL4P.text.length}
        }
    });
    bb0x.biR9I = bb0x.biR9I.eb2x(function (d0x) {
        if (!!window.XMLSerializer) return;
        d0x.stopped = !0;
        var E0x = d0x.args[0];
        d0x.value = E0x.xml != null ? E0x.xml : E0x.outHTML
    });
    bb0x.bjz9q = function () {
        var KI2x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bPf8X = function () {
            try {
                for (var i = 0, l = KI2x.length; i < l; i++) return new ActiveXObject(KI2x[i])
            } catch (ex) {
                return null
            }
        };
        return bb0x.bjz9q.eb2x(function (d0x) {
            if (!!window.DOMParser) return;
            d0x.stopped = !0;
            var nb4f = bPf8X();
            if (!!nb4f && nb4f.loadXML(d0x.args[0]) && !nb4f.parseError.errorCode) d0x.value = nb4f.documentElement
        })
    }();
    bb0x.yB9s = function () {
        var ip3x = {input: "propertychange", load: "readystatechange"};
        for (var x in ip3x) bkc9T[ip3x[x]] = !0;
        var bPg8Y = function (E0x, t0x) {
            if ("on" + t0x in E0x) return null;
            return ip3x[t0x] || ""
        };
        var bPj8b = function (t0x, de1x) {
            var dv1x = de1x;
            switch (t0x) {
                case"readystatechange":
                    dv1x = function (d0x) {
                        var E0x = h0x.U0x(d0x) || this;
                        if (E0x.readyState == "loaded" || E0x.readyState == "complete") {
                            d0x.target = E0x;
                            de1x.call(E0x, d0x)
                        }
                    };
                    break;
                case"propertychange":
                    dv1x = function (d0x) {
                        var E0x = h0x.U0x(d0x) || this;
                        if ("value" in E0x && d0x.propertyName == "value") {
                            d0x.target = E0x;
                            de1x.call(E0x, d0x)
                        }
                    };
                    break
            }
            return dv1x
        };
        return bb0x.yB9s.eb2x(function (d0x) {
            var bg0x = bb0x.blR0x.apply(bb0x, d0x.args);
            if (!bg0x) {
                d0x.stopped = !0;
                return
            }
            var t0x = bPg8Y(bg0x[0], bg0x[1]);
            if (!!t0x) {
                d0x.stopped = !0;
                bg0x[4] = bg0x[1];
                bg0x[1] = t0x;
                if (!!bg0x[2]) {
                    bg0x[5] = bg0x[2];
                    bg0x[2] = bPj8b(bg0x[1], bg0x[2])
                }
                d0x.value = bg0x
            }
        }, function (d0x) {
            var bg0x = d0x.value;
            if (!bg0x[0] || !k0x.gl2x(bg0x[2])) return;
            if (!k0x.gl2x(bg0x[5])) bg0x[5] = bg0x[2];
            bg0x[2] = bg0x[2].g0x(bg0x[0])
        })
    }();
    bb0x.bnV1x = bb0x.bnV1x.eb2x(function (d0x) {
        var bg0x = d0x.args;
        if (!!bkc9T[bg0x[1]] || !document.addEventListener) {
            d0x.stopped = !0;
            bg0x[0].attachEvent("on" + bg0x[1], bg0x[2])
        }
    });
    bb0x.Yy6s = bb0x.Yy6s.eb2x(function (d0x) {
        var bg0x = d0x.args;
        if (!!bkc9T[bg0x[1]] || !document.removeEventListener) {
            d0x.stopped = !0;
            bg0x[0].detachEvent("on" + bg0x[1], bg0x[2])
        }
    });
    bb0x.boO1x = bb0x.boO1x.eb2x(function (d0x) {
        if (!document.createEvent) {
            d0x.stopped = !0;
            var bg0x = d0x.args, bBP4T = document.createEventObject();
            NEJ.X(bBP4T, bg0x[2]);
            try {
                bg0x[0].fireEvent("on" + bg0x[1], bBP4T)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bb0x.baS7L = bb0x.baS7L.eb2x(function (d0x) {
        var bg0x = d0x.args, T0x = bg0x[1].toLowerCase();
        if (T0x == "opacity" && !(T0x in document.body.style)) {
            bg0x[1] = "filter";
            bg0x[2] = "alpha(opacity=" + bg0x[2] * 100 + ")"
        }
    });
    bb0x.bdw7p = function () {
        var fa2x = 30;
        return bb0x.bdw7p.eb2x(function (d0x) {
            var E0x = d0x.args[0];
            if (!E0x.styleSheet) return;
            d0x.stopped = !0;
            var jr3x = d0x.args[1];
            var j0x = document.styleSheets;
            if (j0x.length > fa2x) {
                E0x = j0x[fa2x];
                jr3x = E0x.cssText + jr3x
            } else {
                E0x = E0x.styleSheet
            }
            E0x.cssText = jr3x
        })
    }();
    bb0x.beG8y = bb0x.beG8y.eb2x(function (d0x) {
        var bg0x = d0x.args, wZ8R = bg0x[0].sheet;
        if (!!wZ8R) return;
        d0x.stopped = !0;
        var wZ8R = bg0x[0].styleSheet, bp0x = wZ8R.rules.length, bs0x = bg0x[1].split(/[\{\}]/);
        wZ8R.addRule(bs0x[0], bs0x[1], bp0x);
        d0x.value = wZ8R.rules[bp0x]
    });
    bb0x.bgC8u = function () {
        var AZ0x = function (dL1x, d0x) {
            a9j.w0x(h0x.U0x(d0x), dL1x)
        };
        return bb0x.bgC8u.eb2x(function (d0x) {
            if (N0x.cT1x.release >= "4.0") return;
            var bg0x = d0x.args;
            if (bg0x[1] != 1) {
                h0x.q0x(bg0x[0], "blur", AZ0x.g0x(null, bg0x[2]));
                bg0x[1] = -1
            }
        })
    }();
    bb0x.Yl6f = function (Yi6c) {
        return !0
    };
    bb0x.bgU8M = bb0x.bgU8M.eb2x(function (d0x) {
        var bg0x = d0x.args, f0x = (bg0x[0].attributes || X0x)[bg0x[1]];
        if (!!f0x) {
            d0x.stopped = !0;
            d0x.value = f0x.value
        }
    }, function (d0x) {
        var bg0x = d0x.args;
        if (bg0x[1] == "maxlength" && d0x.value == 2147483647) d0x.value = ""
    });
    if (N0x.cT1x.release < 5) {
        bb0x.blD0x = function () {
            var eX2x, fb2x, js3x = [], bpq1x = "cb-" + +(new Date),
                bi0x = '<script>parent.nej.h["' + bpq1x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bBQ4U = function () {
                eX2x = window.clearTimeout(eX2x);
                if (!js3x.length) return;
                var dI1x = js3x.shift();
                try {
                    var ug7Z = fb2x.contentWindow.document;
                    ug7Z.open();
                    ug7Z.write("<head><title>");
                    ug7Z.write(document.title);
                    ug7Z.write("</title>");
                    ug7Z.write(bi0x.replace("#<HASH>", encodeURIComponent(dI1x)));
                    ug7Z.write("</head><body></body>");
                    if (location.hostname != document.domain) ug7Z.domain = document.domain;
                    ug7Z.close();
                    bb0x[bpq1x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    js3x.unshift(dI1x)
                }
                eX2x = window.setTimeout(bBQ4U, 50)
            };
            return bb0x.blD0x.eb2x(function (d0x) {
                d0x.stopped = !0;
                var dI1x = d0x.args[0];
                if (!!bb0x[bpq1x] || !fb2x && !dI1x) return;
                js3x.push(dI1x);
                if (!fb2x) fb2x = a9j.XR6L();
                bBQ4U()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), bb0x = c0x("nej.h"), N0x = c0x("nej.p"), XO6I = N0x.buf3x;
    if (N0x.mj4n.gecko) return;
    var JD2x = function () {
        XO6I.css3d = XO6I.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (hT3x, E0x) {
            if (!hT3x || !E0x) return;
            switch (hT3x) {
                case"beforeEnd":
                    this.appendChild(E0x);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(E0x, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(E0x) : this.insertBefore(E0x, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E0x) : this.parentNode.insertBefore(E0x, this.nextSibling);
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
    bb0x.yB9s = function () {
        var fU2x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bb0x.yB9s.eb2x(function (d0x) {
            var bg0x = d0x.args;
            if (fU2x.test(bg0x[1] || "")) {
                d0x.stopped = !0;
                d0x.value = bg0x
            }
        })
    }();
    bb0x.bOD7w = function () {
        var bQB8t = function (d0x) {
            h0x.bh0x(d0x);
            h0x.U0x(d0x).control.click()
        };
        return function (E0x) {
            h0x.q0x(E0x, "click", bQB8t)
        }
    }();
    JD2x()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bb0x = c0x("nej.h");
    var XG6A = function () {
        var nG4K = !!document.body.classList;
        return function () {
            return nG4K
        }
    }();
    var bCQ5V = function () {
        var cP1x = /\s+/g;
        return function (fd2x) {
            fd2x = (fd2x || "").trim();
            return !fd2x ? null : new RegExp("(\\s|^)(?:" + fd2x.replace(cP1x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    bb0x.JP2x = bb0x.JP2x.eb2x(function (d0x) {
        if (XG6A()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args, E0x = a9j.x0x(bg0x[0]);
        if (!E0x || !bg0x[1] && !bg0x[2]) return;
        var fd2x = E0x.className || "";
        var Ik2x = " " + (bg0x[2] || ""), Ij2x = bCQ5V((bg0x[1] || "") + Ik2x);
        !!Ij2x && (fd2x = fd2x.replace(Ij2x, "$1"));
        E0x.className = (fd2x + Ik2x).replace(/\s+/g, " ").trim()
    });
    bb0x.brn2x = bb0x.brn2x.eb2x(function (d0x) {
        if (XG6A()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args;
        bb0x.JP2x(bg0x[0], "", bg0x[1])
    });
    bb0x.baQ7J = bb0x.baQ7J.eb2x(function (d0x) {
        if (XG6A()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args;
        bb0x.JP2x(bg0x[0], bg0x[1], "")
    });
    bb0x.bcY7R = bb0x.bcY7R.eb2x(function (d0x) {
        if (XG6A()) return;
        d0x.stopped = !0;
        var bg0x = d0x.args, E0x = a9j.x0x(bg0x[0]);
        if (!E0x) {
            d0x.value = !1;
            return
        }
        var cP1x = bCQ5V(bg0x[1]);
        d0x.value = !cP1x ? !1 : cP1x.test(E0x.className || "")
    })
})();
(function () {
    var c0x = NEJ.P, N0x = c0x("nej.p"), bb0x = c0x("nej.h");
    if (N0x.mj4n.webkit) return;
    bb0x.Yl6f = function (Yi6c) {
        return !0
    }
})();
(function () {
    var c0x = NEJ.P, bb0x = c0x("nej.h"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        cO1x = c0x("nej.x"), R0x = {};
    var bCT5Y = function (E0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x || !R0x[E0x.id]) return;
        var XE6y = !0, C0x = E0x.id;
        k0x.dZ2x(R0x[C0x], function () {
            XE6y = !1;
            return !0
        });
        if (XE6y) delete R0x[C0x]
    };
    h0x.q0x = cO1x.q0x = function () {
        var bSk9b = function () {
            var bg0x = bb0x.yB9s.apply(bb0x, arguments);
            if (!bg0x || !bg0x[2]) return;
            var tb6V = a9j.kJ4N(bg0x[0]), nz4D = R0x[tb6V] || {};
            R0x[tb6V] = nz4D;
            tb6V = bg0x[4] || bg0x[1];
            var zc9T = nz4D[tb6V] || [];
            nz4D[tb6V] = zc9T;
            zc9T.push({type: bg0x[1], func: bg0x[2], capt: !!bg0x[3], sfun: bg0x[5] || bg0x[2]});
            return bg0x.slice(0, 4)
        };
        return function () {
            var bg0x = bSk9b.apply(null, arguments);
            if (!!bg0x) bb0x.bnV1x.apply(bb0x, bg0x);
            return this
        }
    }();
    h0x.mo4s = cO1x.mo4s = function () {
        var bSt9k = function () {
            var vj8b = arguments, tb6V = a9j.kJ4N(vj8b[0]), nz4D = R0x[tb6V], t0x = (vj8b[1] || "").toLowerCase(),
                d0x = vj8b[2];
            if (!nz4D || !t0x || !d0x) return;
            nz4D = nz4D[t0x];
            if (!nz4D) return;
            var bSS9J = !!vj8b[3], s0x = k0x.cW1x(nz4D, function (ip3x) {
                return d0x == ip3x.sfun && bSS9J == ip3x.capt
            });
            if (s0x < 0) return;
            var ip3x = nz4D.splice(s0x, 1)[0];
            return !ip3x ? null : [a9j.x0x(tb6V), ip3x.type, ip3x.func, ip3x.capt]
        };
        return function () {
            var bg0x = bSt9k.apply(null, arguments);
            if (!!bg0x) {
                bb0x.Yy6s.apply(bb0x, bg0x);
                bCT5Y(bg0x[0])
            }
            return this
        }
    }();
    h0x.iq3x = cO1x.iq3x = function () {
        var bDE5J = function () {
            var vj8b = arguments, tb6V = a9j.kJ4N(vj8b[0]), nz4D = R0x[tb6V], zc9T = (vj8b[1] || "").toLowerCase();
            if (!nz4D || !zc9T) return;
            var E0x = a9j.x0x(tb6V);
            k0x.mc4g(nz4D[zc9T], function (ip3x, s0x, j0x) {
                bb0x.Yy6s(E0x, ip3x.type, ip3x.func, ip3x.capt);
                j0x.splice(s0x, 1)
            });
            delete nz4D[zc9T]
        };
        var bTS0x = function (E0x) {
            E0x = a9j.x0x(E0x);
            if (!E0x) return;
            var C0x = E0x.id;
            k0x.dZ2x(R0x[C0x], function (j0x, t0x) {
                bDE5J(C0x, t0x)
            });
            delete R0x[C0x]
        };
        return function (E0x, t0x) {
            !t0x ? bTS0x(E0x) : bDE5J(E0x, t0x);
            bCT5Y(E0x);
            return this
        }
    }();
    h0x.U0x = function () {
        var bfY8Q;
        var Ha1x = function (T0x, E0x) {
            var bs0x = T0x.split(":");
            if (bs0x.length > 1) {
                if (!bfY8Q) bfY8Q = {c: a9j.bB0x, d: a9j.u0x, a: a9j.fX2x};
                var GY1x = bfY8Q[bs0x[0]];
                if (!!GY1x) return !!GY1x(E0x, bs0x[1]);
                T0x = bs0x[1]
            }
            return !!a9j.fX2x(E0x, T0x) || !!a9j.u0x(E0x, T0x) || a9j.bB0x(E0x, T0x)
        };
        return function (d0x) {
            if (!d0x) return null;
            var E0x = d0x.target || d0x.srcElement, dD1x = arguments[1];
            if (!dD1x) return E0x;
            if (k0x.fh2x(dD1x)) dD1x = Ha1x.g0x(null, dD1x);
            if (k0x.gl2x(dD1x)) {
                while (E0x) {
                    if (!!dD1x(E0x)) return E0x;
                    E0x = E0x.parentNode
                }
                return null
            }
            return E0x
        }
    }();
    h0x.bh0x = function (d0x) {
        h0x.sh6b(d0x);
        h0x.cd1x(d0x);
        return this
    };
    h0x.sh6b = function (d0x) {
        if (!!d0x) {
            !!d0x.stopPropagation ? d0x.stopPropagation() : d0x.cancelBubble = !0
        }
        return this
    };
    h0x.cd1x = function (d0x) {
        if (!!d0x) {
            !!d0x.preventDefault ? d0x.preventDefault() : d0x.returnValue = !1
        }
        return this
    };
    h0x.cvF6z = function () {
        var pd5i = !1;
        var bUn0x = function () {
            if (pd5i) return;
            pd5i = !0;
            h0x.q0x(document, "click", bUu0x, !0)
        };
        var bUu0x = function (d0x) {
            var E0x = h0x.U0x(d0x), bUD0x = a9j.u0x(E0x, "stopped");
            if (bUD0x == "true") {
                h0x.bh0x(d0x);
                a9j.u0x(E0x, "stopped", "false")
            }
        };
        return function (d0x) {
            if (!d0x) return;
            if (d0x.type == "click") {
                h0x.bh0x(d0x);
                return
            }
            bUn0x();
            a9j.u0x(h0x.U0x(d0x), "stopped", "true")
        }
    }();
    h0x.kj3x = function (d0x) {
        return d0x.pageX != null ? d0x.pageX : d0x.clientX + a9j.oD5I().scrollLeft
    };
    h0x.nj4n = function (d0x) {
        return d0x.pageY != null ? d0x.pageY : d0x.clientY + a9j.oD5I().scrollTop
    };
    h0x.B0x = cO1x.B0x = function (E0x, t0x, e0x) {
        var bg0x = bb0x.yB9s(E0x, t0x);
        if (!!bg0x) bb0x.boO1x(bg0x[0], bg0x[1], e0x);
        return this
    };
    c0x("dbg").dumpEV = function () {
        return R0x
    };
    cO1x.isChange = !0
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
    var c0x = NEJ.P, N0x = c0x("nej.p");
    if (N0x.mj4n.trident0) return;
    JSON.parse = JSON.parse.eb2x(function (d0x) {
        var cQ1x = d0x.args[0] || "";
        if (cQ1x.length >= 5e5) {
            d0x.stopped = !0;
            d0x.value = eval("(" + cQ1x + ")")
        }
    })
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, dP1x = c0x("nej.g"), a9j = c0x("nej.e"), k0x = c0x("nej.u"),
        h0x = c0x("nej.v"), bb0x = c0x("nej.h"), cO1x = c0x("nej.x"), GX1x, bkv9m = {},
        R0x = document.createDocumentFragment();
    a9j.kJ4N = cO1x.kJ4N = function (E0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return;
        var C0x = !!E0x.id ? E0x.id : "auto-id-" + k0x.Xb6V(16);
        E0x.id = C0x;
        if (a9j.x0x(C0x) != E0x) bkv9m[C0x] = E0x;
        return C0x
    };
    a9j.x0x = cO1x.x0x = function (E0x) {
        var f0x = bkv9m["" + E0x];
        if (!!f0x) return f0x;
        if (!k0x.fh2x(E0x) && !k0x.uG7z(E0x)) return E0x;
        return document.getElementById(E0x)
    };
    a9j.cS1x = cO1x.cS1x = function (E0x, dL1x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return null;
        var j0x = bb0x.bqA2x(E0x);
        if (!!dL1x) k0x.mc4g(j0x, function (f0x, s0x) {
            if (!a9j.bB0x(f0x, dL1x)) j0x.splice(s0x, 1)
        });
        return j0x
    };
    a9j.I0x = cO1x.I0x = function (E0x, fd2x) {
        E0x = a9j.x0x(E0x);
        return !E0x ? null : bb0x.bqM2x(E0x, fd2x.trim())
    };
    a9j.bEw5B = cO1x.bEw5B = function (E0x) {
        E0x = a9j.x0x(E0x);
        if (!!E0x) {
            E0x = E0x.parentNode;
            while (!!E0x) {
                if (E0x.scrollHeight > E0x.clientHeight) break;
                E0x = E0x.parentNode
            }
            if (!!E0x) return E0x
        }
        var nz4D = document.body.scrollHeight, zc9T = document.documentElement.scrollHeight;
        return zc9T >= nz4D ? document.documentElement : document.body
    };
    a9j.oD5I = function () {
        var bEz5E = function (j0x) {
            var m0x = 0;
            k0x.be0x(j0x, function (gf2x) {
                if (!gf2x) return;
                if (!m0x) {
                    m0x = gf2x
                } else {
                    m0x = Math.min(m0x, gf2x)
                }
            });
            return m0x
        };
        return function (ug7Z) {
            var GG1x = ug7Z || document, zx9o = GG1x.body, zy9p = GG1x.documentElement, m0x = {
                scrollTop: Math.max(zx9o.scrollTop, zy9p.scrollTop),
                scrollLeft: Math.max(zx9o.scrollLeft, zy9p.scrollLeft),
                clientWidth: bEz5E([zx9o.clientWidth, zx9o.offsetWidth, zy9p.clientWidth, zy9p.offsetWidth]),
                clientHeight: bEz5E([zx9o.clientHeight, zx9o.offsetHeight, zy9p.clientHeight, zy9p.offsetHeight])
            };
            m0x.scrollWidth = Math.max(m0x.clientWidth, zx9o.scrollWidth, zy9p.scrollWidth);
            m0x.scrollHeight = Math.max(m0x.clientHeight, zx9o.scrollHeight, zy9p.scrollHeight);
            return m0x
        }
    }();
    a9j.cvy6s = function (fa2x, nr4v) {
        var m0x = NEJ.X({}, nr4v), bEA5F = fa2x.width / fa2x.height, WP6J = nr4v.width / nr4v.height;
        if (bEA5F > WP6J && nr4v.height > fa2x.height) {
            m0x.height = fa2x.height;
            m0x.width = m0x.height * WP6J
        }
        if (bEA5F < WP6J && nr4v.width > fa2x.width) {
            m0x.width = fa2x.width;
            m0x.height = m0x.width / WP6J
        }
        return m0x
    };
    a9j.cvw6q = function () {
        var cP1x = /\s+/;
        var tv6p = {
            left: function () {
                return 0
            }, center: function (gC2x, nr4v) {
                return (gC2x.width - nr4v.width) / 2
            }, right: function (gC2x, nr4v) {
                return gC2x.width - nr4v.width
            }, top: function () {
                return 0
            }, middle: function (gC2x, nr4v) {
                return (gC2x.height - nr4v.height) / 2
            }, bottom: function (gC2x, nr4v) {
                return gC2x.height - nr4v.height
            }
        };
        return function (gC2x, nr4v, na4e) {
            var m0x = {}, bs0x = (na4e || "").split(cP1x), gg2x = tv6p[bs0x[1]] || tv6p.middle,
                gH2x = tv6p[bs0x[0]] || tv6p.center;
            m0x.top = gg2x(gC2x, nr4v);
            m0x.left = gH2x(gC2x, nr4v);
            return m0x
        }
    }();
    a9j.rR6L = cO1x.rR6L = function (E0x, dL1x) {
        bb0x.bdl7e(E0x, dL1x || a9j.u0x(E0x, "hover") || "js-hover");
        return this
    };
    a9j.Gs1x = cO1x.Gs1x = function (E0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return;
        bb0x.bdX8P(E0x)
    };
    a9j.bUP0x = cO1x.bUP0x = function () {
        var R0x = {}, bEB5G = 2;
        var bUV0x = function (C0x, dL1x, d0x) {
            R0x[C0x] = [h0x.kj3x(d0x), h0x.nj4n(d0x)];
            a9j.y0x(C0x, dL1x)
        };
        var bUW0x = function (C0x, dL1x, d0x) {
            var bE0x = R0x[C0x];
            if (!k0x.ep2x(bE0x)) return;
            var bVk0x = Math.abs(h0x.kj3x(d0x) - bE0x[0]), bWq0x = Math.abs(h0x.nj4n(d0x) - bE0x[1]);
            if (bVk0x > bEB5G || bWq0x > bEB5G) bbr7k(C0x, dL1x)
        };
        var bbr7k = function (C0x, dL1x) {
            if (k0x.ep2x(R0x[C0x])) {
                R0x[C0x] = -1;
                a9j.w0x(C0x, dL1x)
            }
        };
        return function (E0x, dL1x) {
            var C0x = a9j.kJ4N(E0x);
            if (!C0x || R0x[C0x] != null) return;
            R0x[C0x] = -1;
            dL1x = dL1x || a9j.u0x(C0x, "highlight") || "js-highlight";
            h0x.q0x(C0x, "touchstart", bUV0x.g0x(null, C0x, dL1x));
            h0x.q0x(document, "touchmove", bUW0x.g0x(null, C0x, dL1x));
            h0x.q0x(document, "touchend", bbr7k.g0x(null, C0x, dL1x));
            h0x.q0x(document, "touchcancel", bbr7k.g0x(null, C0x, dL1x))
        }
    }();
    a9j.zH9y = cO1x.zH9y = function () {
        var bWx0x = function (C0x, dL1x, bXN1x) {
            var E0x = a9j.x0x(C0x), d0x = {clazz: dL1x, target: E0x};
            if (a9j.bB0x(E0x, dL1x)) {
                d0x.toggled = !1;
                a9j.w0x(E0x, dL1x)
            } else {
                d0x.toggled = !0;
                a9j.y0x(E0x, dL1x)
            }
            bXN1x.call(null, d0x)
        };
        return function (E0x, e0x) {
            E0x = a9j.x0x(E0x);
            if (!!E0x) {
                var hZ3x = {ontoggle: bm0x, clazz: "js-toggle", element: E0x.parentNode};
                if (k0x.fh2x(e0x)) {
                    var f0x = a9j.x0x(e0x);
                    !!f0x ? hZ3x.element = f0x : hZ3x.clazz = e0x
                } else {
                    NEJ.EX(hZ3x, e0x);
                    hZ3x.element = a9j.x0x(hZ3x.element)
                }
                var C0x = a9j.kJ4N(hZ3x.element);
                h0x.q0x(E0x, "click", bWx0x.g0x(null, C0x, hZ3x.clazz, hZ3x.ontoggle || bm0x))
            }
            return this
        }
    }();
    a9j.ll4p = cO1x.ll4p = function (E0x, e0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return;
        var eF2x = 0, dL1x = "js-focus";
        if (k0x.uG7z(e0x)) {
            eF2x = e0x
        } else if (k0x.fh2x(e0x)) {
            dL1x = e0x
        } else if (k0x.li4m(e0x)) {
            eF2x = e0x.mode || eF2x;
            dL1x = e0x.clazz || dL1x
        }
        var z0x = parseInt(a9j.u0x(E0x, "mode"));
        if (!isNaN(z0x)) eF2x = z0x;
        z0x = a9j.u0x(E0x, "focus");
        if (!!z0x) dL1x = z0x;
        bb0x.bgC8u(E0x, eF2x, dL1x);
        return this
    };
    a9j.cV1x = function () {
        var bv0x = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (eY2x, fd2x, bC0x) {
            var E0x = document.createElement(eY2x);
            NEJ.X(E0x, bv0x[eY2x.toLowerCase()]);
            if (!!fd2x) E0x.className = fd2x;
            bC0x = a9j.x0x(bC0x);
            if (!!bC0x) bC0x.appendChild(E0x);
            return E0x
        }
    }();
    a9j.XR6L = function () {
        var bXO1x = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var caf1x = function (T0x) {
            T0x = T0x.trim();
            if (!T0x) return a9j.cV1x("iframe");
            var fb2x;
            try {
                fb2x = document.createElement('<iframe name="' + T0x + '"></iframe>');
                fb2x.frameBorder = 0
            } catch (e) {
                fb2x = a9j.cV1x("iframe");
                fb2x.name = T0x
            }
            return fb2x
        };
        return function (e0x) {
            e0x = e0x || X0x;
            var fb2x = caf1x(e0x.name || "");
            if (!e0x.visible) fb2x.style.display = "none";
            if (k0x.gl2x(e0x.onload)) h0x.q0x(fb2x, "load", function (d0x) {
                if (!fb2x.src) return;
                h0x.iq3x(fb2x, "load");
                e0x.onload(d0x)
            });
            var bC0x = e0x.parent;
            if (k0x.gl2x(bC0x)) {
                try {
                    bC0x(fb2x)
                } catch (e) {
                }
            } else {
                (a9j.x0x(bC0x) || document.body).appendChild(fb2x)
            }
            var dw1x = e0x.src || bXO1x();
            window.setTimeout(function () {
                fb2x.src = dw1x
            }, 0);
            return fb2x
        }
    }();
    a9j.cF1x = cO1x.cF1x = function () {
        var bHm6g = function (Mn3x) {
            Mn3x.src = dP1x.bcA7t
        };
        var bHz6t = function (tX7Q) {
            tX7Q.src = "about:blank"
        };
        return function (E0x, ccF2x) {
            E0x = a9j.x0x(E0x);
            if (!E0x) return this;
            if (!ccF2x) h0x.iq3x(E0x);
            delete bkv9m[E0x.id];
            var eY2x = E0x.tagName;
            if (eY2x == "IFRAME") {
                bHz6t(E0x)
            } else if (eY2x == "IMG") {
                bHm6g(E0x)
            } else if (!!E0x.getElementsByTagName) {
                k0x.be0x(E0x.getElementsByTagName("img"), bHm6g);
                k0x.be0x(E0x.getElementsByTagName("iframe"), bHz6t)
            }
            if (!!E0x.parentNode) {
                E0x.parentNode.removeChild(E0x)
            }
            return this
        }
    }();
    a9j.me4i = cO1x.me4i = function (E0x) {
        E0x = a9j.x0x(E0x);
        if (!!E0x) R0x.appendChild(E0x);
        return this
    };
    a9j.bHK6E = cO1x.bHK6E = function (E0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return;
        k0x.mc4g(E0x.childNodes, function (f0x) {
            a9j.cF1x(f0x)
        })
    };
    a9j.Gd1x = cO1x.Gd1x = function () {
        var dL1x, fU2x = /\s+/;
        var cdj2x = function () {
            if (!!dL1x) return;
            dL1x = a9j.rH6B(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a9j.bIc6W()
        };
        return function (E0x, e0x) {
            E0x = a9j.x0x(E0x);
            if (!E0x) return;
            cdj2x();
            e0x = e0x || X0x;
            var bC0x = E0x.parentNode;
            if (!a9j.bB0x(bC0x, dL1x)) {
                bC0x = a9j.cV1x("span", dL1x);
                E0x.insertAdjacentElement("beforeBegin", bC0x);
                bC0x.appendChild(E0x)
            }
            var bIO6I = e0x.nid || "", f0x = a9j.I0x(bC0x, bIO6I || dL1x + "-show")[0];
            if (!f0x) {
                var dE1x = ((e0x.clazz || "") + " " + bIO6I).trim();
                dE1x = dL1x + "-show" + (!dE1x ? "" : " ") + dE1x;
                f0x = a9j.cV1x(e0x.tag || "span", dE1x);
                bC0x.appendChild(f0x)
            }
            var dE1x = e0x.clazz;
            if (!!dE1x) {
                dE1x = (dE1x || "").trim().split(fU2x)[0] + "-parent";
                a9j.y0x(bC0x, dE1x)
            }
            return f0x
        }
    }();
    a9j.u0x = cO1x.u0x = function () {
        var bgv8n = {}, eY2x = "data-", cP1x = /\-(.{1})/gi;
        var CM0x = function (E0x) {
            var C0x = a9j.kJ4N(E0x);
            if (!!bgv8n[C0x]) return;
            var bv0x = {};
            k0x.be0x(E0x.attributes, function (f0x) {
                var J0x = f0x.nodeName;
                if (J0x.indexOf(eY2x) != 0) return;
                J0x = J0x.replace(eY2x, "").replace(cP1x, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bv0x[J0x] = f0x.nodeValue || ""
            });
            bgv8n[C0x] = bv0x
        };
        return function (E0x, J0x, z0x) {
            E0x = a9j.x0x(E0x);
            if (!E0x) return null;
            var Wd5i = E0x.dataset;
            if (!Wd5i) {
                CM0x(E0x);
                Wd5i = bgv8n[E0x.id]
            }
            if (z0x !== undefined) Wd5i[J0x] = z0x;
            return Wd5i[J0x]
        }
    }();
    a9j.fX2x = cO1x.fX2x = function (E0x, T0x, z0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return "";
        if (z0x !== undefined && !!E0x.setAttribute) E0x.setAttribute(T0x, z0x);
        return bb0x.bgU8M(E0x, T0x)
    };
    a9j.mM4Q = function (ds1x) {
        var qJ5O = document.createElement("div");
        qJ5O.innerHTML = ds1x;
        var j0x = a9j.cS1x(qJ5O);
        return j0x.length > 1 ? qJ5O : j0x[0]
    };
    a9j.cfQ2x = cO1x.cfQ2x = function (E0x) {
        E0x = a9j.x0x(E0x);
        return !E0x ? "" : bb0x.biR9I(E0x)
    };
    a9j.bJf6Z = function (yv9m) {
        yv9m = (yv9m || "").trim();
        return !yv9m ? null : bb0x.bjz9q(yv9m)
    };
    a9j.cgD3x = function (cK1x, t0x) {
        cK1x = cK1x || "";
        switch (t0x) {
            case"xml":
                cK1x = a9j.bJf6Z(cK1x);
                break;
            case"json":
                try {
                    cK1x = JSON.parse(cK1x)
                } catch (ex) {
                    cK1x = null
                }
                break
        }
        return cK1x
    };
    a9j.hM3x = cO1x.hM3x = function () {
        var cgH3x = function (E0x) {
            return E0x == document.body || E0x == document.documentElement
        };
        return function (dJ1x, nE4I) {
            dJ1x = a9j.x0x(dJ1x);
            if (!dJ1x) return null;
            nE4I = a9j.x0x(nE4I) || null;
            var m0x = {x: 0, y: 0}, bjt9k, dh1x, VW5b;
            while (!!dJ1x && dJ1x != nE4I) {
                bjt9k = cgH3x(dJ1x);
                dh1x = bjt9k ? 0 : dJ1x.scrollLeft;
                VW5b = parseInt(a9j.dc1x(dJ1x, "borderLeftWidth")) || 0;
                m0x.x += dJ1x.offsetLeft + VW5b - dh1x;
                dh1x = bjt9k ? 0 : dJ1x.scrollTop;
                VW5b = parseInt(a9j.dc1x(dJ1x, "borderTopWidth")) || 0;
                m0x.y += dJ1x.offsetTop + VW5b - dh1x;
                dJ1x = dJ1x.offsetParent
            }
            return m0x
        }
    }();
    a9j.mH4L = cO1x.mH4L = function (E0x) {
        var bj0x = a9j.hM3x(E0x);
        window.scrollTo(bj0x.x, bj0x.y);
        return this
    };
    a9j.cup6j = function (sj6d) {
        sj6d = (sj6d || "").trim();
        return bb0x.byj4n(sj6d)
    };
    a9j.cgL3x = cO1x.cgL3x = function (E0x, T0x, bv0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return this;
        var z0x = bb0x.bzX4b(T0x, bv0x);
        if (!z0x) return this;
        a9j.Y0x(E0x, "transform", z0x);
        return this
    };
    a9j.fz2x = cO1x.fz2x = function (E0x, bv0x) {
        E0x = a9j.x0x(E0x);
        if (!!E0x) k0x.dZ2x(bv0x, function (z0x, T0x) {
            a9j.Y0x(E0x, T0x, z0x)
        });
        return this
    };
    a9j.cgZ3x = cO1x.cgZ3x = function (fC2x, e0x) {
        fC2x = a9j.x0x(fC2x);
        if (!fC2x) return {start: 0, end: 0};
        if (k0x.uG7z(e0x)) e0x = {start: e0x, end: e0x};
        if (e0x != null) {
            if (e0x.end == null) e0x.end = e0x.start || 0;
            bb0x.bfj8b(fC2x, e0x)
        } else {
            e0x = bb0x.bgg8Y(fC2x)
        }
        return e0x
    };
    a9j.Y0x = cO1x.Y0x = function (E0x, T0x, z0x) {
        E0x = a9j.x0x(E0x);
        if (!!E0x) bb0x.baS7L(E0x, T0x, z0x);
        return this
    };
    a9j.dc1x = cO1x.dc1x = function (E0x, T0x) {
        E0x = a9j.x0x(E0x);
        if (!E0x) return "";
        var gq2x = !window.getComputedStyle ? E0x.currentStyle || X0x : window.getComputedStyle(E0x, null);
        return gq2x[bb0x.bzY4c(T0x)] || ""
    };
    a9j.bJo6i = function () {
        var cP1x = /[\s\r\n]+/gi;
        return function (cc1x) {
            cc1x = (cc1x || "").trim().replace(cP1x, " ");
            if (!cc1x) return;
            var f0x = a9j.cV1x("style");
            document.head.appendChild(f0x);
            bb0x.bdw7p(f0x, bb0x.coq5v(cc1x));
            return f0x
        }
    }();
    a9j.bJu6o = function (wP8H) {
        try {
            wP8H = wP8H.trim();
            if (!!wP8H) return (new Function(wP8H))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a9j.rH6B = function () {
        var cP1x = /#<.*?>/g, fW2x = +(new Date);
        return function (jr3x) {
            if (!GX1x) GX1x = [];
            var fd2x = "auto-" + fW2x++;
            GX1x.push(jr3x.replace(cP1x, fd2x));
            return fd2x
        }
    }();
    a9j.bIc6W = function () {
        if (!!GX1x) {
            a9j.bJo6i(GX1x.join(""));
            GX1x = null
        }
        return this
    };
    a9j.cuk6e = function (cc1x, jr3x) {
        cc1x = a9j.x0x(cc1x);
        return !cc1x ? null : bb0x.beG8y(cc1x, jr3x)
    };
    a9j.y0x = cO1x.y0x = function () {
        bb0x.brn2x.apply(bb0x, arguments);
        return this
    };
    a9j.w0x = cO1x.w0x = function () {
        bb0x.baQ7J.apply(bb0x, arguments);
        return this
    };
    a9j.eu2x = cO1x.eu2x = function () {
        bb0x.JP2x.apply(bb0x, arguments);
        return this
    };
    a9j.bB0x = cO1x.bB0x = function () {
        return bb0x.bcY7R.apply(bb0x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cO1x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, eT2x = NEJ.R, bm0x = NEJ.F, a9j = c0x("nej.e"), bb0x = c0x("nej.h"),
        k0x = c0x("nej.u");
    var Dd0x = function (i0x, t0x) {
        try {
            t0x = t0x.toLowerCase();
            if (i0x === null) return t0x == "null";
            if (i0x === undefined) return t0x == "undefined";
            return X0x.toString.call(i0x).toLowerCase() == "[object " + t0x + "]"
        } catch (e) {
            return !1
        }
    };
    k0x.gl2x = function (i0x) {
        return Dd0x(i0x, "function")
    };
    k0x.fh2x = function (i0x) {
        return Dd0x(i0x, "string")
    };
    k0x.uG7z = function (i0x) {
        return Dd0x(i0x, "number")
    };
    k0x.cuj6d = function (i0x) {
        return Dd0x(i0x, "boolean")
    };
    k0x.FK1x = function (i0x) {
        return Dd0x(i0x, "date")
    };
    k0x.ep2x = function (i0x) {
        return Dd0x(i0x, "array")
    };
    k0x.li4m = function (i0x) {
        return Dd0x(i0x, "object")
    };
    k0x.fe2x = function () {
        var cP1x = /[^\x00-\xfff]/g;
        return function (bi0x) {
            return ("" + (bi0x || "")).replace(cP1x, "**").length
        }
    }();
    k0x.cW1x = function (j0x, r0x) {
        var dD1x = k0x.gl2x(r0x) ? r0x : function (z0x) {
            return z0x === r0x
        }, s0x = k0x.dZ2x(j0x, dD1x);
        return s0x != null ? s0x : -1
    };
    k0x.cui6c = function () {
        var bKs6m;
        var OF3x = function (j0x, nV5a, nX5c) {
            if (nV5a > nX5c) return -1;
            var Ds0x = Math.ceil((nV5a + nX5c) / 2), m0x = bKs6m(j0x[Ds0x], Ds0x, j0x);
            if (m0x == 0) return Ds0x;
            if (m0x < 0) return OF3x(j0x, nV5a, Ds0x - 1);
            return OF3x(j0x, Ds0x + 1, nX5c)
        };
        return function (j0x, GY1x) {
            bKs6m = GY1x || bm0x;
            return OF3x(j0x, 0, j0x.length - 1)
        }
    }();
    k0x.mc4g = function (j0x, dv1x, ii3x) {
        if (!j0x || !j0x.length || !k0x.gl2x(dv1x)) return null;
        for (var i = j0x.length - 1; i >= 0; i--) if (!!dv1x.call(ii3x, j0x[i], i, j0x)) return i;
        return null
    };
    k0x.be0x = function (j0x, dv1x, ii3x) {
        if (!j0x || !j0x.length || !k0x.gl2x(dv1x)) return this;
        if (!!j0x.forEach) {
            j0x.forEach(dv1x, ii3x);
            return this
        }
        for (var i = 0, l = j0x.length; i < l; i++) dv1x.call(ii3x, j0x[i], i, j0x);
        return this
    };
    k0x.dZ2x = function (j0x, dv1x, ii3x) {
        if (!j0x || !k0x.gl2x(dv1x)) return null;
        if (j0x.length != null) {
            if (j0x.length > 0) for (var i = 0, l = j0x.length; i < l; i++) if (!!dv1x.call(ii3x, j0x[i], i, j0x)) return i
        }
        if (k0x.li4m(j0x)) {
            for (var x in j0x) if (j0x.hasOwnProperty(x) && !!dv1x.call(ii3x, j0x[x], x, j0x)) return x
        }
        return null
    };
    k0x.cks4w = function (ih3x, cky4C, e0x) {
        ih3x = ih3x || [];
        e0x = e0x || X0x;
        var bKI6C = !!e0x.union, uc7V = !!e0x.begin, Vr5w = e0x.compare, cna4e = bKI6C && uc7V ? k0x.mc4g : k0x.be0x;
        cna4e(cky4C, function (r0x) {
            if (!!Vr5w) Vr5w = Vr5w.dX2x(r0x);
            var s0x = k0x.cW1x(ih3x, Vr5w || r0x);
            if (s0x >= 0) ih3x.splice(s0x, 1);
            if (bKI6C) ih3x[uc7V ? "unshift" : "push"](r0x)
        });
        return ih3x
    };
    k0x.Dy0x = function (bv0x, bi0x) {
        if (!bv0x || !bi0x || !bi0x.replace) return bi0x || "";
        return bi0x.replace(bv0x.r, function ($1) {
            var m0x = bv0x[!bv0x.i ? $1.toLowerCase() : $1];
            return m0x != null ? m0x : $1
        })
    };
    k0x.dK1x = function () {
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
            return k0x.Dy0x(bv0x, bi0x)
        }
    }();
    k0x.PS4W = function () {
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
            return k0x.Dy0x(bv0x, bi0x)
        }
    }();
    k0x.iR3x = function () {
        var bv0x = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, cny4C = ["ä¸å", "ä¸å"],
            cob5g = ["A.M.", "P.M."], bbp7i = ["æ¥", "ä¸", "äº", "ä¸", "å", "äº", "å­"],
            cpS5X = ["ä¸", "äº", "ä¸", "å", "äº", "å­", "ä¸", "å«", "ä¹", "å", "åä¸", "åäº"],
            cpX5c = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Qe4i = function (fv2x) {
            fv2x = parseInt(fv2x) || 0;
            return (fv2x < 10 ? "0" : "") + fv2x
        };
        var csq6k = function (of5k) {
            return of5k < 12 ? 0 : 1
        };
        return function (by0x, Fw1x, csP6J) {
            if (!by0x || !Fw1x) return "";
            by0x = k0x.UZ5e(by0x);
            bv0x.yyyy = by0x.getFullYear();
            bv0x.yy = ("" + bv0x.yyyy).substr(2);
            bv0x.M = by0x.getMonth() + 1;
            bv0x.MM = Qe4i(bv0x.M);
            bv0x.eM = cpX5c[bv0x.M - 1];
            bv0x.cM = cpS5X[bv0x.M - 1];
            bv0x.d = by0x.getDate();
            bv0x.dd = Qe4i(bv0x.d);
            bv0x.H = by0x.getHours();
            bv0x.HH = Qe4i(bv0x.H);
            bv0x.m = by0x.getMinutes();
            bv0x.mm = Qe4i(bv0x.m);
            bv0x.s = by0x.getSeconds();
            bv0x.ss = Qe4i(bv0x.s);
            bv0x.ms = by0x.getMilliseconds();
            bv0x.w = bbp7i[by0x.getDay()];
            var bNz7s = csq6k(bv0x.H);
            bv0x.ct = cny4C[bNz7s];
            bv0x.et = cob5g[bNz7s];
            if (!!csP6J) {
                bv0x.H = bv0x.H % 12
            }
            return k0x.Dy0x(bv0x, Fw1x)
        }
    }();
    k0x.UZ5e = function (by0x) {
        var cE1x = by0x;
        if (k0x.fh2x(by0x)) cE1x = new Date(Date.parse(by0x));
        if (!k0x.FK1x(by0x)) cE1x = new Date(by0x);
        return cE1x
    };
    k0x.Gs1x = function (cto6i, ctj6d) {
        return (new Number(cto6i)).toFixed(ctj6d)
    };
    k0x.bdt7m = function () {
        var fU2x = /([^\/:])\/.*$/, jm3x = /\/[^\/]+$/, DP0x = /[#\?]/, bdG7z = location.href.split(/[?#]/)[0],
            rX6R = document.createElement("a");
        var bed8V = function (lk4o) {
            return (lk4o || "").indexOf("://") > 0
        };
        var bNE7x = function (lk4o) {
            return (lk4o || "").split(DP0x)[0].replace(jm3x, "/")
        };
        var ctg6a = function (lk4o, fp2x) {
            if (lk4o.indexOf("/") == 0) return fp2x.replace(fU2x, "$1") + lk4o;
            return bNE7x(fp2x) + lk4o
        };
        bdG7z = bNE7x(bdG7z);
        return function (lk4o, fp2x) {
            lk4o = (lk4o || "").trim();
            if (!bed8V(fp2x)) fp2x = bdG7z;
            if (!lk4o) return fp2x;
            if (bed8V(lk4o)) return lk4o;
            lk4o = ctg6a(lk4o, fp2x);
            rX6R.href = lk4o;
            lk4o = rX6R.href;
            return bed8V(lk4o) ? lk4o : rX6R.getAttribute("href", 4)
        }
    }();
    k0x.ctd6X = function () {
        var cP1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V0x) {
            if (cP1x.test(V0x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k0x.bNA7t = function (G0x, hZ3x) {
        if (!G0x) return hZ3x;
        var T0x = G0x.tagName.toLowerCase(), j0x = a9j.cS1x(G0x);
        if (!j0x || !j0x.length) {
            hZ3x[T0x] = G0x.textContent || G0x.text || "";
            return hZ3x
        }
        var dR2x = {};
        hZ3x[T0x] = dR2x;
        k0x.be0x(j0x, function (f0x) {
            k0x.bNA7t(f0x, dR2x)
        });
        return hZ3x
    };
    k0x.cvO6I = function (yv9m) {
        try {
            return k0x.bNA7t(a9j.bJf6Z(yv9m), {})
        } catch (ex) {
            return null
        }
    };
    k0x.bNy7r = function (hy3x, QC4G) {
        var hZ3x = {};
        k0x.be0x((hy3x || "").split(QC4G), function (T0x) {
            var UR5W = T0x.split("=");
            if (!UR5W || !UR5W.length) return;
            var J0x = UR5W.shift();
            if (!J0x) return;
            hZ3x[decodeURIComponent(J0x)] = decodeURIComponent(UR5W.join("="))
        });
        return hZ3x
    };
    k0x.ul7e = function (ga2x, QC4G, csV6P) {
        if (!ga2x) return "";
        var bs0x = [];
        for (var x in ga2x) {
            bs0x.push(encodeURIComponent(x) + "=" + (!!csV6P ? encodeURIComponent(ga2x[x]) : ga2x[x]))
        }
        return bs0x.join(QC4G || ",")
    };
    k0x.hk3x = function (bw0x) {
        return k0x.bNy7r(bw0x, "&")
    };
    k0x.da1x = function (ga2x) {
        return k0x.ul7e(ga2x, "&", !0)
    };
    k0x.ctv6p = function (ga2x) {
        return bb0x.In2x(ga2x)
    };
    k0x.ctw6q = function (j0x, dD1x) {
        var m0x = {};
        k0x.be0x(j0x, function (r0x) {
            var J0x = r0x;
            if (!!dD1x) {
                J0x = dD1x(r0x)
            }
            m0x[J0x] = r0x
        });
        return m0x
    };
    k0x.cty6s = function (fv2x, fY2x) {
        var csO6I = ("" + fv2x).length, csN6H = Math.max(1, parseInt(fY2x) || 0), dh1x = csN6H - csO6I;
        if (dh1x > 0) {
            fv2x = (new Array(dh1x + 1)).join("0") + fv2x
        }
        return "" + fv2x
    };
    k0x.UK5P = function (ga2x, T0x) {
        if (!k0x.ep2x(T0x)) {
            try {
                delete ga2x[T0x]
            } catch (e) {
                ga2x[T0x] = undefined
            }
            return this
        }
        k0x.be0x(T0x, k0x.UK5P.g0x(k0x, ga2x));
        return this
    };
    k0x.Xb6V = function () {
        var bNv7o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bp0x) {
            bp0x = bp0x || 10;
            var m0x = [];
            for (var i = 0, bNu7n; i < bp0x; ++i) {
                bNu7n = Math.floor(Math.random() * bNv7o.length);
                m0x.push(bNv7o.charAt(bNu7n))
            }
            return m0x.join("")
        }
    }();
    k0x.Jo2x = function (fH2x, fa2x) {
        return Math.floor(Math.random() * (fa2x - fH2x) + fH2x)
    };
    k0x.mL4P = function (bp0x) {
        bp0x = Math.max(0, Math.min(bp0x || 8, 30));
        var fH2x = Math.pow(10, bp0x - 1), fa2x = fH2x * 10;
        return k0x.Jo2x(fH2x, fa2x).toString()
    };
    k0x.UG5L = function () {
        var fW2x = +(new Date);
        return function () {
            return "" + fW2x++
        }
    }()
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, eT2x = NEJ.R, bm0x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        N0x = c0x("nej.ut"), nM5R;
    if (!!N0x.cz1x) return;
    N0x.cz1x = NEJ.C();
    nM5R = N0x.cz1x.prototype;
    N0x.cz1x.A0x = function (e0x) {
        e0x = e0x || {};
        var cp1x = !!this.Az9q && this.Az9q.shift();
        if (!cp1x) {
            cp1x = new this(e0x);
            this.csK6E = (this.csK6E || 0) + 1
        }
        cp1x.bk0x(e0x);
        return cp1x
    };
    N0x.cz1x.S0x = function () {
        var JR2x = function (r0x, s0x, j0x) {
            r0x.S0x();
            j0x.splice(s0x, 1)
        };
        return function (cp1x) {
            if (!cp1x) return null;
            if (!k0x.ep2x(cp1x)) {
                if (!(cp1x instanceof this)) {
                    var fd2x = cp1x.constructor;
                    if (!!fd2x.S0x) fd2x.S0x(cp1x);
                    return null
                }
                if (cp1x == this.eH2x) delete this.eH2x;
                if (cp1x == this.AC9t) delete this.AC9t;
                cp1x.bD0x();
                if (!this.Az9q) this.Az9q = [];
                if (k0x.cW1x(this.Az9q, cp1x) < 0) {
                    this.Az9q.push(cp1x)
                }
                return null
            }
            k0x.mc4g(cp1x, JR2x, this)
        }
    }();
    N0x.cz1x.fV2x = function (e0x) {
        e0x = e0x || {};
        if (!this.eH2x) this.eH2x = this.A0x(e0x);
        return this.eH2x
    };
    N0x.cz1x.csJ6D = function (e0x, qj5o) {
        e0x = e0x || {};
        if (!!qj5o && !!this.AC9t) {
            this.AC9t.S0x();
            delete this.AC9t
        }
        if (!this.AC9t) {
            this.AC9t = this.A0x(e0x)
        } else {
            this.AC9t.bk0x(e0x)
        }
        return this.AC9t
    };
    nM5R.cl1x = function () {
        var fW2x = +(new Date);
        return function () {
            this.id = fW2x++;
            this.kO4S = {};
            this.bNt7m = {}
        }
    }();
    nM5R.bk0x = function (e0x) {
        this.blv0x(e0x)
    };
    nM5R.bD0x = function () {
        this.iq3x();
        this.EM1x()
    };
    nM5R.bU1x = function () {
        var fW2x = +(new Date);
        var csr6l = function (bg0x) {
            if (!bg0x || bg0x.length < 3) return;
            this.bNt7m["de-" + fW2x++] = bg0x;
            h0x.q0x.apply(h0x, bg0x)
        };
        return function (j0x) {
            k0x.be0x(j0x, csr6l, this)
        }
    }();
    nM5R.EM1x = function () {
        var csm6g = function (bg0x, J0x, bv0x) {
            delete bv0x[J0x];
            h0x.mo4s.apply(h0x, bg0x)
        };
        return function () {
            k0x.dZ2x(this.bNt7m, csm6g)
        }
    }();
    nM5R.ctC6w = function (dD1x) {
        dD1x = dD1x || bm0x;
        k0x.dZ2x(this, function (Em0x, J0x, bv0x) {
            if (!!Em0x && !!Em0x.S0x && !dD1x(Em0x)) {
                delete bv0x[J0x];
                Em0x.S0x()
            }
        })
    };
    nM5R.S0x = function () {
        this.constructor.S0x(this)
    };
    nM5R.bNn7g = function (t0x) {
        var d0x = this.kO4S[t0x.toLowerCase()];
        return !!d0x && d0x !== bm0x
    };
    nM5R.q0x = function (t0x, d0x) {
        this.up7i.apply(this, arguments);
        return this
    };
    nM5R.mo4s = function (t0x, d0x) {
        var t0x = (t0x || "").toLowerCase(), dH1x = this.kO4S[t0x];
        if (!k0x.ep2x(dH1x)) {
            if (dH1x == d0x) delete this.kO4S[t0x];
            return
        }
        k0x.mc4g(dH1x, function (eB2x, s0x, j0x) {
            if (eB2x == d0x) j0x.splice(s0x, 1)
        })
    };
    nM5R.up7i = function (t0x, d0x) {
        if (!!t0x && k0x.gl2x(d0x)) this.kO4S[t0x.toLowerCase()] = d0x;
        return this
    };
    nM5R.blv0x = function () {
        var csj5o = function (d0x, t0x) {
            this.up7i(t0x, d0x)
        };
        return function (dH1x) {
            k0x.dZ2x(dH1x, csj5o, this);
            return this
        }
    }();
    nM5R.iq3x = function () {
        var bnf0x = function (d0x, t0x) {
            this.iq3x(t0x)
        };
        return function (t0x) {
            var t0x = (t0x || "").toLowerCase();
            if (!!t0x) {
                delete this.kO4S[t0x]
            } else {
                k0x.dZ2x(this.kO4S, bnf0x, this)
            }
            return this
        }
    }();
    nM5R.bng0x = function (t0x, d0x) {
        if (!t0x || !k0x.gl2x(d0x)) return this;
        t0x = t0x.toLowerCase();
        var dH1x = this.kO4S[t0x];
        if (!dH1x) {
            this.kO4S[t0x] = d0x;
            return this
        }
        if (!k0x.ep2x(dH1x)) {
            this.kO4S[t0x] = [dH1x]
        }
        this.kO4S[t0x].push(d0x);
        return this
    };
    nM5R.B0x = function (t0x) {
        var d0x = this.kO4S[(t0x || "").toLowerCase()];
        if (!d0x) return this;
        var bg0x = eT2x.slice.call(arguments, 1);
        if (!k0x.ep2x(d0x)) return d0x.apply(this, bg0x);
        k0x.be0x(d0x, function (de1x) {
            try {
                de1x.apply(this, bg0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N0x.TW5b = function () {
        var R0x = {};
        return function (C0x, fd2x, e0x) {
            var ez2x = fd2x.csh5m;
            if (!ez2x) {
                ez2x = k0x.Xb6V(10);
                fd2x.csh5m = ez2x
            }
            var J0x = C0x + "-" + ez2x, cp1x = R0x[J0x];
            if (!!e0x && !cp1x) {
                cp1x = fd2x.A0x(e0x);
                cp1x.S0x = cp1x.S0x.eb2x(function (d0x) {
                    delete R0x[J0x];
                    delete cp1x.S0x
                });
                R0x[J0x] = cp1x
            }
            return cp1x
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gG2x = function () {
        var cE1x = new Date, csg5l = +cE1x, boE1x = 864e5;
        var csf5k = function (T0x) {
            var qg5l = document.cookie, sd6X = "\\b" + T0x + "=", TO5T = qg5l.search(sd6X);
            if (TO5T < 0) return "";
            TO5T += sd6X.length - 2;
            var Ak9b = qg5l.indexOf(";", TO5T);
            if (Ak9b < 0) Ak9b = qg5l.length;
            return qg5l.substring(TO5T, Ak9b) || ""
        };
        return function (T0x, i0x) {
            if (i0x === undefined) return csf5k(T0x);
            if (u.fh2x(i0x)) {
                if (!!i0x) {
                    document.cookie = T0x + "=" + i0x + ";";
                    return i0x
                }
                i0x = {expires: -100}
            }
            i0x = i0x || o;
            var qg5l = T0x + "=" + (i0x.value || "") + ";";
            delete i0x.value;
            if (i0x.expires !== undefined) {
                cE1x.setTime(csg5l + i0x.expires * boE1x);
                i0x.expires = cE1x.toGMTString()
            }
            qg5l += u.ul7e(i0x, ";");
            document.cookie = qg5l
        }
    }()
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, iD3x = c0x("nej.c"), dP1x = c0x("nej.g"), a9j = c0x("nej.e"), v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"), N0x = c0x("nej.ut.j"), k0x = c0x("nej.u"), b0x;
    if (!!N0x.FE1x) return;
    N0x.FE1x = NEJ.C();
    b0x = N0x.FE1x.O0x(H0x.cz1x);
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.oy5D = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.oy5D, e0x);
        var yh9Y = iD3x.x0x("csrf");
        if ((/^\/[^\/]/.test(this.oy5D.url) || this.oy5D.url.indexOf(location.protocol + "//" + location.host) == 0) && !!yh9Y.cookie && !!yh9Y.param) {
            var bw0x = encodeURIComponent(yh9Y.param) + "=" + encodeURIComponent(v0x.gG2x(yh9Y.cookie) || ""),
                QC4G = this.oy5D.url.indexOf("?") < 0 ? "?" : "&";
            this.oy5D.url += QC4G + bw0x
        }
        this.TG5L = e0x.headers || {};
        var bi0x = this.TG5L[dP1x.wK8C];
        if (bi0x == null) this.TG5L[dP1x.wK8C] = dP1x.bTr0x
    };
    b0x.bD0x = function () {
        this.bH0x();
        delete this.Aa9R;
        delete this.oy5D;
        delete this.TG5L
    };
    b0x.csc5h = function (bi0x) {
        var bv0x = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.oy5D.noescape) {
            return k0x.Dy0x(bv0x, bi0x)
        } else {
            return bi0x
        }
    };
    b0x.sK6E = function (d0x) {
        var dY2x = d0x.status;
        if (dY2x == -1) {
            this.B0x("onerror", {code: dP1x.bvD3x, message: "è¯·æ±[" + this.oy5D.url + "]è¶æ¶ï¼"});
            return
        }
        if (("" + dY2x).indexOf("2") != 0) {
            this.B0x("onerror", {
                data: dY2x,
                code: dP1x.bmq0x,
                message: "æå¡å¨è¿åå¼å¸¸ç¶æ[" + dY2x + "]!",
                extData: d0x.result
            });
            return
        }
        this.B0x("onload", a9j.cgD3x(this.csc5h(d0x.result), this.oy5D.type))
    };
    b0x.cj1x = bm0x;
    b0x.bbf7Y = function (i0x) {
        var V0x = this.oy5D.url;
        if (!V0x) {
            this.B0x("onerror", {code: dP1x.biQ9H, message: "æ²¡æè¾å¥è¯·æ±å°åï¼"});
            return this
        }
        try {
            this.oy5D.data = i0x == null ? null : i0x;
            var d0x = {request: this.oy5D, headers: this.TG5L};
            try {
                this.B0x("onbeforerequest", d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cj1x(d0x)
        } catch (e) {
            this.B0x("onerror", {code: dP1x.bmq0x, message: "è¯·æ±[" + V0x + "]å¤±è´¥:" + e.message + "ï¼"})
        }
        return this
    };
    b0x.lh4l = bm0x
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, bb0x = c0x("nej.h"), dP1x = c0x("nej.g"), k0x = c0x("nej.u"), N0x = c0x("nej.ut.j"),
        R0x = {}, Mc3x;
    if (!!N0x.Tx5C) return;
    N0x.Tx5C = NEJ.C();
    Mc3x = N0x.Tx5C.O0x(N0x.FE1x);
    Mc3x.bD0x = function () {
        this.bH0x();
        window.clearTimeout(this.dN1x);
        delete this.dN1x;
        try {
            this.pZ5e.onreadystatechange = bm0x;
            this.pZ5e.abort()
        } catch (e) {
        }
        delete this.pZ5e
    };
    Mc3x.cj1x = function () {
        var csb5g = function (z0x, J0x) {
            this.pZ5e.setRequestHeader(J0x, z0x)
        };
        return function (e0x) {
            var fD2x = e0x.request, nA4E = e0x.headers;
            this.pZ5e = bb0x.bcF7y();
            if (nA4E[dP1x.wK8C] === dP1x.EB1x) {
                delete nA4E[dP1x.wK8C];
                this.pZ5e.upload.onprogress = this.hm3x.g0x(this, 1);
                if (fD2x.data.tagName === "FORM") fD2x.data = new FormData(fD2x.data)
            }
            this.pZ5e.onreadystatechange = this.hm3x.g0x(this, 2);
            if (fD2x.timeout != 0) {
                this.dN1x = window.setTimeout(this.hm3x.g0x(this, 3), fD2x.timeout)
            }
            this.pZ5e.open(fD2x.method, fD2x.url, !fD2x.sync);
            k0x.dZ2x(nA4E, csb5g, this);
            if (!!this.oy5D.cookie && "withCredentials" in this.pZ5e) this.pZ5e.withCredentials = !0;
            this.pZ5e.send(fD2x.data)
        }
    }();
    Mc3x.hm3x = function (t0x) {
        switch (t0x) {
            case 1:
                this.B0x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.pZ5e.readyState == 4) this.sK6E({
                    status: this.pZ5e.status,
                    result: this.pZ5e.responseText || ""
                });
                break;
            case 3:
                this.sK6E({status: -1});
                break
        }
    };
    Mc3x.lh4l = function () {
        this.sK6E({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Mp3x = {}, Tt5y = [], bNk7d = /\s+/g, fW2x = +(new Date), Gb1x, bN1x, lo4s;
    var CA0x = function () {
        var fU2x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, jm3x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            DP0x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, bdm7f = /^new\s+/,
            crW5b = /['"]/;
        var crQ5V = function (z0x) {
            if (fU2x.test(z0x)) return;
            z0x = z0x.split(".")[0].trim();
            if (!z0x || crW5b.test(z0x)) return;
            z0x = z0x.replace(bdm7f, "");
            try {
                if (DP0x.test(z0x)) return;
                lo4s[z0x] = 1
            } catch (e) {
            }
        };
        return function (bi0x) {
            bi0x = bi0x || "";
            if (!bi0x || fU2x.test(bi0x)) return;
            var bs0x = bi0x.split(jm3x);
            for (var i = 0, l = bs0x.length; i < l; i++) crQ5V(bs0x[i])
        }
    }();
    var crN5S = function (dm1x) {
        if (dm1x[2] != "in") throw"bad for loop statement: " + dm1x.join(" ");
        Tt5y.push(dm1x[1]);
        CA0x(dm1x[3]);
        return "var __HASH__" + dm1x[1] + " = " + dm1x[3] + "," + dm1x[1] + "," + dm1x[1] + "_count=0;" + "if (!!__HASH__" + dm1x[1] + ")" + "for(var " + dm1x[1] + "_key in __HASH__" + dm1x[1] + "){" + dm1x[1] + " = __HASH__" + dm1x[1] + "[" + dm1x[1] + "_key];" + "if (typeof(" + dm1x[1] + ')=="function") continue;' + dm1x[1] + "_count++;"
    };
    var crM5R = function () {
        var dm1x = Tt5y[Tt5y.length - 1];
        return "}; if(!__HASH__" + dm1x + "||!" + dm1x + "_count){"
    };
    var crJ5O = function () {
        Tt5y.pop();
        return "};"
    };
    var crG5L = function (dm1x) {
        if (dm1x[2] != "as") throw"bad for list loop statement: " + dm1x.join(" ");
        var MR3x = dm1x[1].split("..");
        if (MR3x.length > 1) {
            CA0x(MR3x[0]);
            CA0x(MR3x[1]);
            return "for(var " + dm1x[3] + "," + dm1x[3] + "_index=0," + dm1x[3] + "_beg=" + MR3x[0] + "," + dm1x[3] + "_end=" + MR3x[1] + "," + dm1x[3] + "_length=parseInt(" + dm1x[3] + "_end-" + dm1x[3] + "_beg+1);" + dm1x[3] + "_index<" + dm1x[3] + "_length;" + dm1x[3] + "_index++){" + dm1x[3] + " = " + dm1x[3] + "_beg+" + dm1x[3] + "_index;"
        } else {
            CA0x(dm1x[1]);
            return "for(var __LIST__" + dm1x[3] + " = " + dm1x[1] + "," + dm1x[3] + "," + dm1x[3] + "_index=0," + dm1x[3] + "_length=__LIST__" + dm1x[3] + ".length;" + dm1x[3] + "_index<" + dm1x[3] + "_length;" + dm1x[3] + "_index++){" + dm1x[3] + " = __LIST__" + dm1x[3] + "[" + dm1x[3] + "_index];"
        }
    };
    var crF5K = function (dm1x) {
        if (!dm1x || !dm1x.length) return;
        dm1x.shift();
        var T0x = dm1x[0].split("(")[0];
        return "var " + T0x + " = function" + dm1x.join("").replace(T0x, "") + "{var __OUT=[];"
    };
    var crA5F = function (dm1x) {
        if (!dm1x[1]) throw"bad include statement: " + dm1x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var beh8Z = function (kZ4d, dm1x) {
        CA0x(dm1x.slice(1).join(" "));
        return kZ4d
    };
    var crz5E = function (dm1x) {
        return beh8Z("if(", dm1x)
    };
    var crw5B = function (dm1x) {
        return beh8Z("}else if(", dm1x)
    };
    var crv5A = function (dm1x) {
        return beh8Z("var ", dm1x)
    };
    bN1x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: crz5E, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: crw5B, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: crN5S, pmin: 3},
            forelse: {pfix: crM5R},
            "/for": {pfix: crJ5O},
            list: {pfix: crG5L, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: crv5A, sfix: ";"},
            macro: {pfix: crF5K},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    Gb1x = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Gb1x = null
                }
            },
            inline: {pfix: crA5F, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (kZ4d) {
                return (kZ4d || "") + "" + fW2x
            }, "default": function (z0x, mq4u) {
                return z0x || mq4u
            }
        }
    };
    var cru5z = function () {
        var crn5s = /\\([\{\}])/g;
        return function (bi0x, iI3x) {
            bi0x = bi0x.replace(crn5s, "$1");
            var dm1x = bi0x.slice(1, -1).split(bNk7d), bc0x = bN1x.def[dm1x[0]];
            if (!bc0x) {
                SV4Z(bi0x, iI3x);
                return
            }
            if (!!bc0x.pmin && bc0x.pmin >= dm1x.length) throw"Statement needs more parameters:" + bi0x;
            iI3x.push(!!bc0x.pfix && typeof bc0x.pfix != "string" ? bc0x.pfix(dm1x) : bc0x.pfix || "");
            if (!!bc0x.sfix) {
                if (dm1x.length <= 1) {
                    if (!!bc0x.pdft) iI3x.push(bc0x.pdft)
                } else {
                    for (var i = 1, l = dm1x.length; i < l; i++) {
                        if (i > 1) iI3x.push(" ");
                        iI3x.push(dm1x[i])
                    }
                }
                iI3x.push(bc0x.sfix)
            }
        }
    }();
    var bMY7R = function (GB1x, iI3x) {
        if (!GB1x || !GB1x.length) return;
        if (GB1x.length == 1) {
            var bfp8h = GB1x.pop();
            CA0x(bfp8h);
            iI3x.push(bfp8h == "" ? '""' : bfp8h);
            return
        }
        var bfN8F = GB1x.pop().split(":");
        iI3x.push("__MDF['" + bfN8F.shift() + "'](");
        bMY7R(GB1x, iI3x);
        if (bfN8F.length > 0) {
            var bg0x = bfN8F.join(":");
            CA0x(bg0x);
            iI3x.push("," + bg0x)
        }
        iI3x.push(")")
    };
    var SV4Z = function (bi0x, iI3x) {
        if (!bi0x) return;
        var uv7o = bi0x.split("\n");
        if (!uv7o || !uv7o.length) return;
        for (var i = 0, l = uv7o.length, gW3x; i < l; i++) {
            gW3x = uv7o[i];
            if (!!Gb1x) {
                gW3x = gW3x.trim();
                if (!gW3x) continue
            }
            cra5f(gW3x, iI3x);
            if (!!Gb1x && i < l - 1) iI3x.push("__OUT.push('\\n');")
        }
    };
    var cra5f = function () {
        var cqY5d = /\|\|/g, cqX5c = /#@@#/g;
        return function (bi0x, iI3x) {
            var Nv3x = "}", NS3x = -1, bp0x = bi0x.length, uc7V, gy2x, Hh1x, SA4E, OK3x;
            while (NS3x + Nv3x.length < bp0x) {
                uc7V = "${";
                gy2x = "}";
                Hh1x = bi0x.indexOf(uc7V, NS3x + Nv3x.length);
                if (Hh1x < 0) break;
                if (bi0x.charAt(Hh1x + 2) == "%") {
                    uc7V = "${%";
                    gy2x = "%}"
                }
                SA4E = bi0x.indexOf(gy2x, Hh1x + uc7V.length);
                if (SA4E < 0) break;
                Sw4A(bi0x.substring(NS3x + Nv3x.length, Hh1x), iI3x);
                OK3x = bi0x.substring(Hh1x + uc7V.length, SA4E).replace(cqY5d, "#@@#").split("|");
                for (var i = 0, l = OK3x.length; i < l; OK3x[i] = OK3x[i].replace(cqX5c, "||"), i++) ;
                iI3x.push("__OUT.push(");
                bMY7R(OK3x, iI3x);
                iI3x.push(");");
                Nv3x = gy2x;
                NS3x = SA4E
            }
            Sw4A(bi0x.substring(NS3x + Nv3x.length), iI3x)
        }
    }();
    var Sw4A = function () {
        var bv0x = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cqW5b = function (bi0x) {
            return (bi0x || "").replace(bv0x.r, function ($1) {
                return bv0x[$1] || $1
            })
        };
        return function (bi0x, iI3x) {
            if (!bi0x) return;
            iI3x.push("__OUT.push('" + cqW5b(bi0x) + "');")
        }
    }();
    var cqV5a = function () {
        var cqR5W = /\t/g, cqO5T = /\n/g, cqM5R = /\r\n?/g;
        var bMR7K = function (bi0x, uc7V) {
            var s0x = bi0x.indexOf("}", uc7V + 1);
            while (bi0x.charAt(s0x - 1) == "\\") {
                s0x = bi0x.indexOf("}", s0x + 1)
            }
            return s0x
        };
        var cqK5P = function () {
            var bs0x = [], CL0x = arguments[0];
            for (var x in CL0x) {
                x = (x || "").trim();
                if (!x) continue;
                bs0x.push(x + "=$v('" + x + "')")
            }
            return bs0x.length > 0 ? "var " + bs0x.join(",") + ";" : ""
        };
        return function (bi0x) {
            lo4s = {};
            bi0x = bi0x.replace(cqM5R, "\n").replace(cqR5W, "    ");
            var pS5X = ["if(!__CTX) return '';", ""];
            pS5X.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            pS5X.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            pS5X.push("__OUT=[];");
            var CE0x = -1, bp0x = bi0x.length;
            var mu4y, HS1x, Ps3x, Pt3x, yE9v, Py4C, bjV9M, Pz4D;
            while (CE0x + 1 < bp0x) {
                mu4y = CE0x;
                mu4y = bi0x.indexOf("{", mu4y + 1);
                while (mu4y >= 0) {
                    HS1x = bMR7K(bi0x, mu4y);
                    Ps3x = bi0x.substring(mu4y, HS1x);
                    Pt3x = Ps3x.match(bN1x.blk);
                    if (!!Pt3x) {
                        yE9v = Pt3x[1].length + 1;
                        Py4C = bi0x.indexOf("}", mu4y + yE9v);
                        if (Py4C >= 0) {
                            bjV9M = Py4C - mu4y - yE9v <= 0 ? "{/" + Pt3x[1] + "}" : Ps3x.substr(yE9v + 1);
                            yE9v = bi0x.indexOf(bjV9M, Py4C + 1);
                            if (yE9v >= 0) {
                                SV4Z(bi0x.substring(CE0x + 1, mu4y), pS5X);
                                Pz4D = bi0x.substring(Py4C + 1, yE9v);
                                switch (Pt3x[1]) {
                                    case"cdata":
                                        Sw4A(Pz4D, pS5X);
                                        break;
                                    case"minify":
                                        Sw4A(Pz4D.replace(cqO5T, " ").replace(bNk7d, " "), pS5X);
                                        break;
                                    case"eval":
                                        if (!!Pz4D) pS5X.push("__OUT.push((function(){" + Pz4D + "})());");
                                        break
                                }
                                mu4y = CE0x = yE9v + bjV9M.length - 1
                            }
                        }
                    } else if (bi0x.charAt(mu4y - 1) != "$" && bi0x.charAt(mu4y - 1) != "\\" && Ps3x.substr(Ps3x.charAt(1) == "/" ? 2 : 1).search(bN1x.tag) == 0) {
                        break
                    }
                    mu4y = bi0x.indexOf("{", mu4y + 1)
                }
                if (mu4y < 0) break;
                HS1x = bMR7K(bi0x, mu4y);
                if (HS1x < 0) break;
                SV4Z(bi0x.substring(CE0x + 1, mu4y), pS5X);
                cru5z(bi0x.substring(mu4y, HS1x + 1), pS5X);
                CE0x = HS1x
            }
            SV4Z(bi0x.substring(CE0x + 1), pS5X);
            pS5X.push(';return __OUT.join("");');
            pS5X[1] = cqK5P(lo4s);
            lo4s = null;
            return new Function("__CTX", "__MDF", pS5X.join(""))
        }
    }();
    TrimPath.seed = function () {
        return fW2x
    };
    TrimPath.merge = function () {
        var PD4H = {};
        TrimPath.dump = function () {
            return {func: PD4H, text: Mp3x}
        };
        return function (ez2x, i0x, iX3x) {
            try {
                i0x = i0x || {};
                if (!PD4H[ez2x] && !Mp3x[ez2x]) return "";
                if (!PD4H[ez2x]) {
                    PD4H[ez2x] = cqV5a(Mp3x[ez2x]);
                    delete Mp3x[ez2x]
                }
                if (!!iX3x) {
                    for (var x in bN1x.ext) if (!iX3x[x]) iX3x[x] = bN1x.ext[x]
                }
                return PD4H[ez2x](i0x, iX3x || bN1x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cqJ5O = +(new Date);
        return function (bi0x, ez2x) {
            if (!bi0x) return "";
            ez2x = ez2x || "ck_" + cqJ5O++;
            Mp3x[ez2x] = bi0x;
            return ez2x
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), eL2x = {};
    a9j.Iq2x = TrimPath.seed;
    a9j.bQ1x = function () {
        var bMQ7J = function (C0x) {
            return !a9j.hY3x ? "" : a9j.hY3x(C0x)
        };
        return function (ez2x, i0x, iX3x) {
            i0x = i0x || {};
            i0x.inline = bMQ7J;
            iX3x = NEJ.X(NEJ.X({}, eL2x), iX3x);
            iX3x.rand = k0x.mL4P;
            iX3x.format = k0x.iR3x;
            iX3x.escape = k0x.dK1x;
            iX3x.inline = bMQ7J;
            return TrimPath.merge(ez2x, i0x, iX3x)
        }
    }();
    a9j.el2x = function (bi0x, cqF5K) {
        if (!bi0x) return "";
        var ez2x, E0x = a9j.x0x(bi0x);
        if (!!E0x) {
            ez2x = E0x.id;
            bi0x = E0x.value || E0x.innerText;
            if (!cqF5K) a9j.cF1x(E0x)
        }
        return TrimPath.parse(bi0x, ez2x)
    };
    a9j.dQ1x = function (bC0x, ez2x, i0x, iX3x) {
        bC0x = a9j.x0x(bC0x);
        if (!!bC0x) bC0x.innerHTML = a9j.bQ1x(ez2x, i0x, iX3x);
        return this
    };
    a9j.ctE6y = function (bv0x) {
        NEJ.X(eL2x, bv0x)
    };
    c0x("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var cM1x = NEJ.P("nej.p"), N0x = window, kb3x = cM1x.ZF6z, bMM7F = kb3x.ipad || kb3x.iphone;
    if (!bMM7F && !!N0x.requestAnimationFrame && !!N0x.cancelRequestAnimationFrame) return;
    var kZ4d = cM1x.cT1x.prefix.pro;
    if (!bMM7F && !!N0x[kZ4d + "RequestAnimationFrame"] && !!N0x[kZ4d + "CancelRequestAnimationFrame"]) {
        N0x.requestAnimationFrame = N0x[kZ4d + "RequestAnimationFrame"];
        N0x.cancelRequestAnimationFrame = N0x[kZ4d + "CancelRequestAnimationFrame"];
        return
    }
    var RU4Y = kb3x.desktop ? 80 : kb3x.ios ? 50 : 30;
    N0x.requestAnimationFrame = function (dv1x) {
        return window.setTimeout(function () {
            try {
                dv1x(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / RU4Y)
    };
    N0x.cancelRequestAnimationFrame = function (C0x) {
        window.clearTimeout(C0x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, k0x = c0x("nej.u"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), bb0x = c0x("nej.h"),
        cO1x = c0x("nej.x"), RT4X = c0x("nej.ut.j.cb"), gj2x;
    if (!!a9j.qr5w) return;
    a9j.qr5w = cO1x.qr5w = function () {
        var R0x = {}, fU2x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d0x) {
            var C0x = decodeURIComponent(d0x.target), t0x = d0x.type.toLowerCase();
            var de1x = R0x[C0x + "-on" + t0x];
            if (!!de1x) {
                try {
                    de1x(d0x)
                } catch (e) {
                }
                return
            }
            var cJ1x = R0x[C0x + "-tgt"];
            if (!!cJ1x && fU2x.test(t0x)) {
                bMH7A(cJ1x, d0x)
            }
        };
        var bmf0x = function (e0x) {
            var bC0x = a9j.x0x(e0x.parent) || document.body, ds1x = a9j.bQ1x(gj2x, e0x);
            bC0x.insertAdjacentHTML(!e0x.hidden ? "beforeEnd" : "afterBegin", ds1x)
        };
        var bMH7A = function (C0x, d0x) {
            var t0x = d0x.type.toLowerCase();
            requestAnimationFrame(function () {
                h0x.B0x(C0x, t0x)
            })
        };
        var cqu5z = function (gV3x) {
            return !!gV3x && !!gV3x.inited && !!gV3x.inited()
        };
        var Qm4q = function (C0x) {
            var bs0x = [document.embeds[C0x], a9j.x0x(C0x), document[C0x], window[C0x]], s0x = k0x.dZ2x(bs0x, cqu5z),
                gV3x = bs0x[s0x], bms0x = C0x + "-count";
            R0x[bms0x]++;
            if (!!gV3x || R0x[bms0x] > 100) {
                R0x[C0x](gV3x);
                delete R0x[C0x];
                delete R0x[bms0x];
                return
            }
            window.setTimeout(Qm4q.g0x(null, C0x), 300)
        };
        var cqp5u = function (e0x) {
            var C0x = e0x.id, go2x = e0x.params;
            if (!go2x) {
                go2x = {};
                e0x.params = go2x
            }
            var lo4s = go2x.flashvars || "";
            lo4s += (!lo4s ? "" : "&") + ("id=" + C0x);
            if (!e0x.hidden && (!!e0x.target || bb0x.Yl6f(go2x.wmode))) {
                var ha3x = a9j.kJ4N(e0x.target) || a9j.kJ4N(e0x.parent), RQ4U = k0x.UG5L();
                RT4X["cb" + RQ4U] = bMH7A.g0x(null, ha3x);
                lo4s += "&onevent=nej.ut.j.cb.cb" + RQ4U;
                R0x[C0x + "-tgt"] = ha3x
            }
            go2x.flashvars = lo4s;
            k0x.dZ2x(e0x, function (z0x, J0x) {
                if (k0x.gl2x(z0x) && J0x != "onready") {
                    R0x[C0x + "-" + J0x] = z0x
                }
            })
        };
        return function (e0x) {
            e0x = NEJ.X({}, e0x);
            if (!e0x.src) return;
            var C0x = "flash_" + k0x.UG5L();
            e0x.id = C0x;
            cqp5u(e0x);
            bmf0x(e0x);
            if (!e0x.onready) return;
            R0x[C0x] = e0x.onready;
            R0x[C0x + "-count"] = 0;
            Qm4q(C0x)
        }
    }();
    gj2x = a9j.el2x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cO1x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, iD3x = c0x("nej.c"), a9j = c0x("nej.e"), k0x = c0x("nej.u"), N0x = c0x("nej.ut.j"),
        RT4X = c0x("nej.ut.j.cb"), R0x = {}, fW2x = +(new Date), bnu0x;
    if (!!N0x.bnz0x) return;
    RT4X["ld" + fW2x] = function (J0x, cK1x) {
        var iU3x = R0x[J0x];
        if (!iU3x) return;
        delete R0x[J0x];
        iU3x.sK6E({status: 200, result: cK1x})
    };
    RT4X["er" + fW2x] = function (J0x, dY2x) {
        var iU3x = R0x[J0x];
        if (!iU3x) return;
        delete R0x[J0x];
        iU3x.sK6E({status: dY2x || 0})
    };
    N0x.bnz0x = NEJ.C();
    bnu0x = N0x.bnz0x.O0x(N0x.FE1x);
    bnu0x.cj1x = function (e0x) {
        var gV3x = R0x.flash;
        if (k0x.ep2x(gV3x)) {
            gV3x.push(this.cj1x.g0x(this, e0x));
            return
        }
        if (!gV3x) {
            R0x.flash = [this.cj1x.g0x(this, e0x)];
            a9j.qr5w({
                hidden: !0, src: iD3x.x0x("ajax.swf"), onready: function (gV3x) {
                    if (!gV3x) return;
                    var j0x = R0x.flash;
                    R0x.flash = gV3x;
                    k0x.mc4g(j0x, function (de1x) {
                        try {
                            de1x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Aa9R = "swf-" + k0x.mL4P();
        R0x[this.Aa9R] = this;
        var i0x = NEJ.EX({url: "", data: null, method: "GET"}, e0x.request);
        i0x.key = this.Aa9R;
        i0x.headers = e0x.headers;
        i0x.onerror = "nej.ut.j.cb.er" + fW2x;
        i0x.onloaded = "nej.ut.j.cb.ld" + fW2x;
        var bME7x = iD3x.cdd2x(i0x.url);
        if (!!bME7x) i0x.policyURL = bME7x;
        gV3x.request(i0x)
    };
    bnu0x.lh4l = function () {
        delete R0x[this.Aa9R];
        this.sK6E({status: 0});
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bb0x = c0x("nej.h");
    bb0x.bMD7w = function () {
        var cP1x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (hC3x) {
            hC3x = hC3x || "";
            if (cP1x.test(hC3x)) return RegExp.$1;
            return "*"
        }
    }();
    bb0x.bnW1x = function (i0x) {
        return i0x
    };
    bb0x.bnX1x = function (bMB7u, e0x) {
        if (!bMB7u.postMessage) return;
        e0x = e0x || X0x;
        bMB7u.postMessage(bb0x.bnW1x(e0x.data), bb0x.bMD7w(e0x.origin))
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), N0x = c0x("nej.ut"), b0x;
    if (!!N0x.fr2x) return;
    N0x.fr2x = NEJ.C();
    b0x = N0x.fr2x.O0x(N0x.cz1x);
    b0x.cl1x = function () {
        this.P0x = {};
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.Qt4x = a9j.x0x(e0x.element) || window;
        this.bMA7t(e0x.event);
        this.cqa5f();
        this.B0x("oninit")
    };
    b0x.bD0x = function () {
        var Bc0x = function (z0x, J0x, bv0x) {
            if (!k0x.ep2x(z0x)) {
                k0x.UK5P(this.Qt4x, J0x)
            }
            delete bv0x[J0x]
        };
        return function () {
            this.bH0x();
            k0x.dZ2x(this.P0x, Bc0x, this);
            delete this.Qt4x
        }
    }();
    b0x.RK4O = function (E0x, t0x) {
        E0x = a9j.x0x(E0x);
        return E0x == this.Qt4x && (!t0x || !!this.P0x["on" + t0x])
    };
    b0x.bMA7t = function (d0x) {
        if (k0x.fh2x(d0x)) {
            var T0x = "on" + d0x;
            if (!this.P0x[T0x]) {
                this.P0x[T0x] = this.cpW5b.g0x(this, d0x)
            }
            this.bMy7r(d0x);
            return
        }
        if (k0x.ep2x(d0x)) {
            k0x.be0x(d0x, this.bMA7t, this)
        }
    };
    b0x.bMy7r = function (t0x) {
        var d0x = "on" + t0x, de1x = this.Qt4x[d0x], bMx7q = this.P0x[d0x];
        if (de1x != bMx7q) {
            this.RH4L(t0x);
            if (!!de1x && de1x != bm0x) this.bMw7p(t0x, de1x);
            this.Qt4x[d0x] = bMx7q
        }
    };
    b0x.bMw7p = function (t0x, de1x, cpP5U) {
        var j0x = this.P0x[t0x];
        if (!j0x) {
            j0x = [];
            this.P0x[t0x] = j0x
        }
        if (k0x.gl2x(de1x)) {
            !cpP5U ? j0x.push(de1x) : j0x.unshift(de1x)
        }
    };
    b0x.RH4L = function (t0x, de1x) {
        var j0x = this.P0x[t0x];
        if (!j0x || !j0x.length) return;
        if (!de1x) {
            delete this.P0x[t0x];
            return
        }
        k0x.mc4g(j0x, function (z0x, s0x, IY2x) {
            if (de1x === z0x) {
                IY2x.splice(s0x, 1);
                return !0
            }
        })
    };
    b0x.cpW5b = function (t0x, d0x) {
        d0x = d0x || {noargs: !0};
        d0x.type = t0x;
        this.B0x("ondispatch", d0x);
        if (!!d0x.stopped) return;
        k0x.be0x(this.P0x[t0x], function (de1x) {
            try {
                de1x(d0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b0x.cqa5f = function () {
        var baP7I = function (d0x) {
            var bg0x = d0x.args, t0x = bg0x[1].toLowerCase();
            if (this.RK4O(bg0x[0], t0x)) {
                d0x.stopped = !0;
                this.bMy7r(t0x);
                this.bMw7p(t0x, bg0x[2], bg0x[3]);
                this.B0x("oneventadd", {type: t0x, listener: bg0x[2]})
            }
        };
        var cpO5T = function (d0x) {
            var bg0x = d0x.args, t0x = bg0x[1].toLowerCase();
            if (this.RK4O(bg0x[0], t0x)) {
                d0x.stopped = !0;
                this.RH4L(t0x, bg0x[2])
            }
        };
        var bnf0x = function (d0x) {
            var bg0x = d0x.args, t0x = (bg0x[1] || "").toLowerCase();
            if (this.RK4O(bg0x[0])) {
                if (!!t0x) {
                    this.RH4L(t0x);
                    return
                }
                k0x.dZ2x(this.P0x, function (z0x, J0x) {
                    if (k0x.ep2x(z0x)) {
                        this.RH4L(J0x)
                    }
                }, this)
            }
        };
        var cpH5M = function (d0x) {
            var bg0x = d0x.args, t0x = bg0x[1].toLowerCase();
            if (this.RK4O(bg0x[0], t0x)) {
                d0x.stopped = !0;
                bg0x[0]["on" + t0x].apply(bg0x[0], bg0x.slice(2))
            }
        };
        return function () {
            if (!!this.cpG5L) return;
            this.cpG5L = true;
            h0x.q0x = h0x.q0x.eb2x(baP7I.g0x(this));
            h0x.mo4s = h0x.mo4s.eb2x(cpO5T.g0x(this));
            h0x.iq3x = h0x.iq3x.eb2x(bnf0x.g0x(this));
            h0x.B0x = h0x.B0x.eb2x(cpH5M.g0x(this))
        }
    }()
})();
(function () {
    var c0x = NEJ.P, N0x = c0x("nej.p"), bb0x = c0x("nej.h"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        H0x = c0x("nej.ut");
    if (N0x.mj4n.trident) return;
    if (!!window.postMessage) {
        bb0x.bnW1x = bb0x.bnW1x.eb2x(function (d0x) {
            d0x.stopped = !0;
            d0x.value = JSON.stringify(d0x.args[0])
        });
        return
    }
    var J0x = "MSG|", js3x = [];
    var cpF5K = function () {
        var T0x = unescape(window.name || "").trim();
        if (!T0x || T0x.indexOf(J0x) != 0) return;
        window.name = "";
        var m0x = k0x.bNy7r(T0x.replace(J0x, ""), "|"), hC3x = (m0x.origin || "").toLowerCase();
        if (!!hC3x && hC3x != "*" && location.href.toLowerCase().indexOf(hC3x) != 0) return;
        h0x.B0x(window, "message", {
            data: JSON.parse(m0x.data || "null"),
            source: window.frames[m0x.self] || m0x.self,
            origin: bb0x.bMD7w(m0x.ref || document.referrer)
        })
    };
    var cpz5E = function () {
        var Ry4C;
        var cpy5D = function (bv0x, s0x, j0x) {
            if (k0x.cW1x(Ry4C, bv0x.w) < 0) {
                Ry4C.push(bv0x.w);
                j0x.splice(s0x, 1);
                bv0x.w.name = bv0x.d
            }
        };
        return function () {
            Ry4C = [];
            k0x.mc4g(js3x, cpy5D);
            Ry4C = null
        }
    }();
    bb0x.bnX1x = function () {
        var cpn5s = function (i0x) {
            var m0x = {};
            i0x = i0x || X0x;
            m0x.origin = i0x.origin || "";
            m0x.ref = location.href;
            m0x.self = i0x.source;
            m0x.data = JSON.stringify(i0x.data);
            return J0x + k0x.ul7e(m0x, "|", !0)
        };
        return bb0x.bnX1x.eb2x(function (d0x) {
            d0x.stopped = !0;
            var bg0x = d0x.args;
            js3x.unshift({w: bg0x[0], d: escape(cpn5s(bg0x[1]))})
        })
    }();
    H0x.fr2x.A0x({element: window, event: "message"});
    window.setInterval(cpz5E, 100);
    window.setInterval(cpF5K, 20)
})();
(function () {
    var c0x = NEJ.P, bb0x = c0x("nej.h"), a9j = c0x("nej.e"), v0x = c0x("nej.j");
    v0x.cpi5n = function () {
        var ix3x = window.name || "_parent", cph5m = {gg2x: window.top, ix3x: window, bC0x: window.parent};
        return function (cJ1x, e0x) {
            if (typeof cJ1x == "string") {
                cJ1x = cph5m[cJ1x] || window.frames[cJ1x];
                if (!cJ1x) return this
            }
            var i0x = NEJ.X({origin: "*", source: ix3x}, e0x);
            bb0x.bnX1x(cJ1x, i0x);
            return this
        }
    }()
})();
(function () {
    var c0x = NEJ.P, iD3x = c0x("nej.c"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        v0x = c0x("nej.j"), N0x = c0x("nej.ut.j"), R0x = {}, Ru4y;
    if (!!N0x.bbP7I) return;
    N0x.bbP7I = NEJ.C();
    Ru4y = N0x.bbP7I.O0x(N0x.FE1x);
    Ru4y.cl1x = function () {
        var eI2x = "NEJ-AJAX-DATA:", CM0x = !1;
        var bbW7P = function (d0x) {
            var i0x = d0x.data;
            if (i0x.indexOf(eI2x) != 0) return;
            i0x = JSON.parse(i0x.replace(eI2x, ""));
            var iU3x = R0x[i0x.key];
            if (!iU3x) return;
            delete R0x[i0x.key];
            i0x.result = decodeURIComponent(i0x.result || "");
            iU3x.sK6E(i0x)
        };
        var bcb7U = function () {
            if (!CM0x) {
                CM0x = !0;
                h0x.q0x(window, "message", bbW7P)
            }
        };
        return function () {
            this.cs1x();
            bcb7U()
        }
    }();
    Ru4y.cj1x = function (e0x) {
        var fD2x = e0x.request, iU3x = iD3x.bYI1x(fD2x.url), tX7Q = R0x[iU3x];
        if (k0x.ep2x(tX7Q)) {
            tX7Q.push(this.cj1x.g0x(this, e0x));
            return
        }
        if (!tX7Q) {
            R0x[iU3x] = [this.cj1x.g0x(this, e0x)];
            a9j.XR6L({
                src: iU3x, visible: !1, onload: function (d0x) {
                    var j0x = R0x[iU3x];
                    R0x[iU3x] = h0x.U0x(d0x).contentWindow;
                    k0x.mc4g(j0x, function (de1x) {
                        try {
                            de1x()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Aa9R = "frm-" + k0x.mL4P();
        R0x[this.Aa9R] = this;
        var i0x = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, fD2x);
        i0x.key = this.Aa9R;
        i0x.headers = e0x.headers;
        v0x.cpi5n(R0x[iU3x], {data: i0x})
    };
    Ru4y.lh4l = function () {
        delete R0x[this.Aa9R];
        this.sK6E({status: 0});
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, dP1x = c0x("nej.g"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        v0x = c0x("nej.j"), N0x = c0x("nej.ut.j"), R0x = {}, Ji2x;
    if (!!N0x.bcn7g) return;
    N0x.bcn7g = NEJ.C();
    Ji2x = N0x.bcn7g.O0x(N0x.FE1x);
    Ji2x.cl1x = function () {
        var eI2x = "NEJ-UPLOAD-RESULT:", CM0x = !1;
        var bbW7P = function (d0x) {
            var i0x = d0x.data;
            if (i0x.indexOf(eI2x) != 0) return;
            i0x = JSON.parse(i0x.replace(eI2x, ""));
            var iU3x = R0x[i0x.key];
            if (!iU3x) return;
            delete R0x[i0x.key];
            iU3x.sK6E(decodeURIComponent(i0x.result))
        };
        var bcb7U = function () {
            if (!CM0x) {
                CM0x = !0;
                h0x.q0x(window, "message", bbW7P)
            }
        };
        return function () {
            this.cs1x();
            bcb7U()
        }
    }();
    Ji2x.bD0x = function () {
        this.bH0x();
        a9j.cF1x(this.bco7h);
        delete this.bco7h;
        window.clearTimeout(this.dN1x);
        delete this.dN1x
    };
    Ji2x.sK6E = function (cK1x) {
        var Q0x;
        try {
            Q0x = JSON.parse(cK1x);
            this.B0x("onload", Q0x)
        } catch (e) {
            this.B0x("onerror", {code: dP1x.bPu8m, message: cK1x})
        }
    };
    Ji2x.cj1x = function () {
        var cpd5i = function () {
            var lG4K, cK1x;
            try {
                var lG4K = this.bco7h.contentWindow.document.body, cK1x = lG4K.innerText || lG4K.textContent
            } catch (e) {
                return
            }
            this.sK6E(cK1x)
        };
        var bcX7Q = function (V0x, eF2x, qg5l) {
            v0x.bo0x(V0x, {
                type: "json",
                method: "POST",
                cookie: qg5l,
                mode: parseInt(eF2x) || 0,
                onload: function (i0x) {
                    if (!this.dN1x) return;
                    this.B0x("onuploading", i0x);
                    this.dN1x = window.setTimeout(bcX7Q.g0x(this, V0x, eF2x, qg5l), 1e3)
                }.g0x(this),
                onerror: function (bP1x) {
                    if (!this.dN1x) return;
                    this.dN1x = window.setTimeout(bcX7Q.g0x(this, V0x, eF2x, qg5l), 1e3)
                }.g0x(this)
            })
        };
        return function (e0x) {
            var fD2x = e0x.request, nA4E = e0x.headers, eG2x = fD2x.data, T0x = "fom-" + k0x.mL4P();
            R0x[T0x] = this;
            eG2x.target = T0x;
            eG2x.method = "POST";
            eG2x.enctype = dP1x.EB1x;
            eG2x.encoding = dP1x.EB1x;
            var V0x = eG2x.action || "", lK4O = V0x.indexOf("?") <= 0 ? "?" : "&";
            eG2x.action = V0x + lK4O + "_proxy_=form";
            this.bco7h = a9j.XR6L({
                name: T0x, onload: function (d0x) {
                    var tX7Q = h0x.U0x(d0x);
                    h0x.q0x(tX7Q, "load", cpd5i.g0x(this));
                    eG2x.submit();
                    var bMq7j = (eG2x.nej_query || X0x).value;
                    if (!bMq7j) return;
                    var eF2x = (eG2x.nej_mode || X0x).value, qg5l = (eG2x.nej_cookie || X0x).value == "true";
                    this.dN1x = window.setTimeout(bcX7Q.g0x(this, bMq7j, eF2x, qg5l), 100)
                }.g0x(this)
            })
        }
    }();
    Ji2x.lh4l = function () {
        this.B0x("onerror", {code: dP1x.bQC8u, message: "å®¢æ·ç«¯ç»æ­¢æä»¶ä¸ä¼ "});
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bb0x = c0x("nej.h"), N0x = c0x("nej.ut.j");
    bb0x.bcF7y = function () {
        return new XMLHttpRequest
    };
    bb0x.bdh7a = function (eF2x, Rv4z, e0x) {
        var bv0x = !!Rv4z ? {2: N0x.bcn7g} : {2: N0x.bbP7I, 3: N0x.bnz0x};
        return (bv0x[eF2x] || N0x.Tx5C).A0x(e0x)
    }
})();
(function () {
    var c0x = NEJ.P, N0x = c0x("nej.p"), bb0x = c0x("nej.h");
    if (N0x.mj4n.trident) return;
    bb0x.bcF7y = function () {
        var KI2x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var coX5c = function () {
            for (var i = 0, l = KI2x.length; i < l; i++) {
                try {
                    return new ActiveXObject(KI2x[i])
                } catch (e) {
                }
            }
            return null
        };
        return bb0x.bcF7y.eb2x(function (d0x) {
            if (!!window.XMLHttpRequest) return;
            d0x.stopped = !0;
            d0x.value = coX5c()
        })
    }();
    bb0x.bdh7a = function () {
        var Ek0x = {0: 2, 1: 3};
        return bb0x.bdh7a.eb2x(function (d0x) {
            var bg0x = d0x.args, eF2x = bg0x[0] || 0;
            bg0x[0] = !!bg0x[1] ? 2 : Ek0x[eF2x] || eF2x
        })
    }()
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, bb0x = c0x("nej.h"), dP1x = c0x("nej.g"), k0x = c0x("nej.u"),
        v0x = c0x("nej.j"), N0x = c0x("nej.ut.j"), ne4i = {}, Ha1x = bm0x;
    v0x.lh4l = function (ez2x) {
        var R0x = ne4i[ez2x];
        if (!R0x) return this;
        R0x.req.lh4l();
        return this
    };
    v0x.Rx4B = function (dD1x) {
        Ha1x = dD1x || bm0x;
        return this
    };
    v0x.bo0x = function () {
        var iK3x = (location.protocol + "//" + location.host).toLowerCase();
        var coW5b = function (V0x) {
            var hC3x = k0x.ctd6X(V0x);
            return !!hC3x && hC3x != iK3x
        };
        var coT5Y = function (nA4E) {
            return (nA4E || X0x)[dP1x.wK8C] == dP1x.EB1x
        };
        var coQ5V = function (e0x) {
            var Rv4z = coT5Y(e0x.headers);
            if (!coW5b(e0x.url) && !Rv4z) return N0x.Tx5C.A0x(e0x);
            return bb0x.bdh7a(e0x.mode, Rv4z, e0x)
        };
        var Bc0x = function (ez2x) {
            var R0x = ne4i[ez2x];
            if (!R0x) return;
            if (!!R0x.req) R0x.req.S0x();
            delete ne4i[ez2x]
        };
        var bMo7h = function (ez2x, t0x) {
            var R0x = ne4i[ez2x];
            if (!R0x) return;
            Bc0x(ez2x);
            try {
                var d0x = {type: t0x, result: arguments[2]};
                Ha1x(d0x);
                if (!d0x.stopped) (R0x[t0x] || bm0x)(d0x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var vu8m = function (ez2x, i0x) {
            bMo7h(ez2x, "onload", i0x)
        };
        var xV9M = function (ez2x, bP1x) {
            bMo7h(ez2x, "onerror", bP1x)
        };
        return function (V0x, e0x) {
            e0x = e0x || {};
            var ez2x = k0x.mL4P(), R0x = {onload: e0x.onload || bm0x, onerror: e0x.onerror || bm0x};
            ne4i[ez2x] = R0x;
            e0x.onload = vu8m.g0x(null, ez2x);
            e0x.onerror = xV9M.g0x(null, ez2x);
            if (!!e0x.query) {
                var lK4O = V0x.indexOf("?") < 0 ? "?" : "&", bw0x = e0x.query;
                if (k0x.li4m(bw0x)) bw0x = k0x.da1x(bw0x);
                if (!!bw0x) V0x += lK4O + bw0x
            }
            e0x.url = V0x;
            R0x.req = coQ5V(e0x);
            R0x.req.bbf7Y(e0x.data);
            return ez2x
        }
    }();
    v0x.gI2x = function (eG2x, e0x) {
        var gw2x = {
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
        NEJ.EX(gw2x, e0x);
        gw2x.data = eG2x;
        gw2x.method = "POST";
        gw2x.timeout = 0;
        gw2x.headers[dP1x.wK8C] = dP1x.EB1x;
        return v0x.bo0x(eG2x.action, gw2x)
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, dP1x = c0x("nej.g"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        N0x = c0x("nej.ut.j"), lR4V, jk3x = 6e4;
    if (!!N0x.QT4X) return;
    N0x.QT4X = NEJ.C();
    lR4V = N0x.QT4X.O0x(H0x.cz1x);
    lR4V.cl1x = function () {
        this.cs1x();
        this.QS4W = {onerror: this.coO5T.g0x(this), onloaded: this.coN5S.g0x(this)};
        if (!this.constructor.P0x) this.constructor.P0x = {loaded: {}}
    };
    lR4V.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.IV2x = e0x.version;
        this.bfg8Y = e0x.timeout;
        this.QS4W.version = this.IV2x;
        this.QS4W.timeout = this.bfg8Y
    };
    lR4V.bMn7g = function (J0x) {
        delete this.constructor.P0x[J0x]
    };
    lR4V.xY9P = function (J0x) {
        return this.constructor.P0x[J0x]
    };
    lR4V.bMk7d = function (J0x, i0x) {
        this.constructor.P0x[J0x] = i0x
    };
    lR4V.RF4J = bm0x;
    lR4V.bMi7b = function (fD2x) {
        h0x.iq3x(fD2x)
    };
    lR4V.bfG8y = function (fD2x) {
        fD2x.src = this.kF4J;
        document.head.appendChild(fD2x)
    };
    lR4V.ye9V = function () {
        var R0x = this.xY9P(this.kF4J);
        if (!R0x) return;
        window.clearTimeout(R0x.timer);
        this.bMi7b(R0x.request);
        delete R0x.bind;
        delete R0x.timer;
        delete R0x.request;
        this.bMn7g(this.kF4J);
        this.xY9P("loaded")[this.kF4J] = !0
    };
    lR4V.RL4P = function (T0x) {
        var R0x = this.xY9P(this.kF4J);
        if (!R0x) return;
        var j0x = R0x.bind;
        this.ye9V();
        if (!!j0x && j0x.length > 0) {
            var cp1x;
            while (j0x.length) {
                cp1x = j0x.shift();
                try {
                    cp1x.B0x(T0x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cp1x.S0x()
            }
        }
    };
    lR4V.em2x = function (bP1x) {
        this.RL4P("onerror", bP1x)
    };
    lR4V.bMf7Y = function () {
        this.RL4P("onloaded")
    };
    lR4V.con5s = function (V0x) {
        this.constructor.A0x(this.QS4W).IM2x(V0x)
    };
    lR4V.bMd7W = function (bP1x) {
        var R0x = this.xY9P(this.uM7F);
        if (!R0x) return;
        if (!!bP1x) R0x.error++;
        R0x.loaded++;
        if (R0x.loaded < R0x.total) return;
        this.bMn7g(this.uM7F);
        this.B0x(R0x.error > 0 ? "onerror" : "onloaded")
    };
    lR4V.coO5T = function (bP1x) {
        this.bMd7W(!0)
    };
    lR4V.coN5S = function () {
        this.bMd7W()
    };
    lR4V.IM2x = function (V0x) {
        V0x = k0x.bdt7m(V0x);
        if (!V0x) {
            this.B0x("onerror", {code: dP1x.biQ9H, message: "è¯·æå®è¦è½½å¥çèµæºå°åï¼"});
            return this
        }
        this.kF4J = V0x;
        if (!!this.IV2x) this.kF4J += (this.kF4J.indexOf("?") < 0 ? "?" : "&") + this.IV2x;
        if (this.xY9P("loaded")[this.kF4J]) {
            try {
                this.B0x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S0x();
            return this
        }
        var R0x = this.xY9P(this.kF4J), fD2x;
        if (!!R0x) {
            R0x.bind.unshift(this);
            R0x.timer = window.clearTimeout(R0x.timer)
        } else {
            fD2x = this.RF4J();
            R0x = {request: fD2x, bind: [this]};
            this.bMk7d(this.kF4J, R0x);
            h0x.q0x(fD2x, "load", this.bMf7Y.g0x(this));
            h0x.q0x(fD2x, "error", this.em2x.g0x(this, {
                code: dP1x.bmq0x,
                message: "æ æ³å è½½æå®èµæºæä»¶[" + this.kF4J + "]ï¼"
            }))
        }
        if (this.bfg8Y != 0) R0x.timer = window.setTimeout(this.em2x.g0x(this, {
            code: dP1x.bvD3x,
            message: "æå®èµæºæä»¶[" + this.kF4J + "]è½½å¥è¶æ¶ï¼"
        }), this.bfg8Y || jk3x);
        if (!!fD2x) this.bfG8y(fD2x);
        this.B0x("onloading");
        return this
    };
    lR4V.bMc7V = function (j0x) {
        if (!j0x || !j0x.length) {
            this.B0x("onerror", {code: dP1x.biQ9H, message: "è¯·æå®è¦è½½å¥çèµæºéåï¼"});
            return this
        }
        this.uM7F = k0x.mL4P();
        var R0x = {error: 0, loaded: 0, total: j0x.length};
        this.bMk7d(this.uM7F, R0x);
        for (var i = 0, l = j0x.length; i < l; i++) {
            if (!j0x[i]) {
                R0x.total--;
                continue
            }
            this.con5s(j0x[i])
        }
        this.B0x("onloading");
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), bb0x = c0x("nej.h"), N0x = c0x("nej.ut.j"), Qy4C;
    if (!!N0x.bgP8H) return;
    N0x.bgP8H = NEJ.C();
    Qy4C = N0x.bgP8H.O0x(N0x.QT4X);
    Qy4C.RF4J = function () {
        var fb2x = a9j.cV1x("iframe");
        fb2x.width = 0;
        fb2x.height = 0;
        fb2x.style.display = "none";
        return fb2x
    };
    Qy4C.bfG8y = function (fD2x) {
        fD2x.src = this.kF4J;
        document.body.appendChild(fD2x)
    };
    Qy4C.em2x = function (bP1x) {
        var fb2x = (this.xY9P(this.kF4J) || X0x).request;
        this.RL4P("onerror", bP1x);
        bb0x.Yd6X(fb2x)
    };
    Qy4C.bMf7Y = function () {
        var lG4K = null, fb2x = (this.xY9P(this.kF4J) || X0x).request;
        try {
            lG4K = fb2x.contentWindow.document.body
        } catch (ex) {
        }
        this.RL4P("onloaded", lG4K);
        bb0x.Yd6X(fb2x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), N0x = c0x("nej.ut.j"), bgQ8I;
    if (!!N0x.RM4Q) return;
    N0x.RM4Q = NEJ.C();
    bgQ8I = N0x.RM4Q.O0x(N0x.QT4X);
    bgQ8I.RF4J = function () {
        return a9j.cV1x("link")
    };
    bgQ8I.bfG8y = function (fD2x) {
        fD2x.href = this.kF4J;
        document.head.appendChild(fD2x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), N0x = c0x("nej.ut.j"), RP4T;
    if (!!N0x.RR4V) return;
    N0x.RR4V = NEJ.C();
    RP4T = N0x.RR4V.O0x(N0x.QT4X);
    RP4T.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.bMb7U = e0x.async;
        this.bhp9g = e0x.charset;
        this.QS4W.async = !1;
        this.QS4W.charset = this.bhp9g
    };
    RP4T.RF4J = function () {
        var fD2x = a9j.cV1x("script");
        if (this.bMb7U != null) fD2x.async = !!this.bMb7U;
        if (this.bhp9g != null) fD2x.charset = this.bhp9g;
        return fD2x
    };
    RP4T.bMi7b = function (fD2x) {
        a9j.cF1x(fD2x)
    }
})();
(function () {
    var c0x = NEJ.P, v0x = c0x("nej.j"), N0x = c0x("nej.ut.j");
    v0x.cod5i = function (V0x, e0x) {
        N0x.RR4V.A0x(e0x).IM2x(V0x);
        return this
    };
    v0x.coc5h = function (j0x, e0x) {
        N0x.RR4V.A0x(e0x).bMc7V(j0x);
        return this
    };
    v0x.ctK6E = function (V0x, e0x) {
        N0x.RM4Q.A0x(e0x).IM2x(V0x);
        return this
    };
    v0x.coa5f = function (j0x, e0x) {
        N0x.RM4Q.A0x(e0x).bMc7V(j0x);
        return this
    };
    v0x.bLZ7S = function (V0x, e0x) {
        N0x.bgP8H.A0x(e0x).IM2x(V0x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"), R0x = {}, rf6Z = +(new Date) + "-";
    a9j.cC1x = function () {
        var ct1x = 0;
        var Qj4n = function () {
            if (ct1x > 0) return;
            ct1x = 0;
            h0x.B0x(document, "templateready");
            h0x.iq3x(document, "templateready")
        };
        var RV4Z = function (fC2x, e0x) {
            var dw1x = a9j.u0x(fC2x, "src");
            if (!dw1x) return;
            e0x = e0x || X0x;
            var fp2x = e0x.root;
            if (!fp2x) {
                fp2x = fC2x.ownerDocument.location.href
            } else {
                fp2x = k0x.bdt7m(fp2x)
            }
            dw1x = dw1x.split(",");
            k0x.be0x(dw1x, function (z0x, s0x, j0x) {
                j0x[s0x] = k0x.bdt7m(z0x, fp2x)
            });
            return dw1x
        };
        var cnT4X = function (fC2x, e0x) {
            if (!fC2x) return;
            var dw1x = RV4Z(fC2x, e0x);
            if (!!dw1x) v0x.coa5f(dw1x, {version: a9j.u0x(fC2x, "version")});
            a9j.bJo6i(fC2x.value)
        };
        var cnS4W = function (z0x) {
            ct1x--;
            a9j.bJu6o(z0x);
            Qj4n()
        };
        var cnR4V = function (fC2x, e0x) {
            if (!fC2x) return;
            var dw1x = RV4Z(fC2x, e0x), eM2x = fC2x.value;
            if (!!dw1x) {
                ct1x++;
                var e0x = {version: a9j.u0x(fC2x, "version"), onloaded: cnS4W.g0x(null, eM2x)};
                window.setTimeout(v0x.coc5h.g0x(v0x, dw1x, e0x), 0);
                return
            }
            a9j.bJu6o(eM2x)
        };
        var cnQ4U = function (lG4K) {
            ct1x--;
            a9j.cC1x(lG4K);
            Qj4n()
        };
        var cnP4T = function (fC2x, e0x) {
            if (!fC2x) return;
            var dw1x = RV4Z(fC2x, e0x)[0];
            if (!!dw1x) {
                ct1x++;
                var e0x = {version: a9j.u0x(fC2x, "version"), onloaded: cnQ4U};
                window.setTimeout(v0x.bLZ7S.g0x(v0x, dw1x, e0x), 0)
            }
        };
        var cnM4Q = function (C0x, cK1x) {
            ct1x--;
            a9j.Il2x(C0x, cK1x || "");
            Qj4n()
        };
        var cnL4P = function (fC2x, e0x) {
            if (!fC2x || !fC2x.id) return;
            var C0x = fC2x.id, dw1x = RV4Z(fC2x, e0x)[0];
            if (!!dw1x) {
                ct1x++;
                var V0x = dw1x + (dw1x.indexOf("?") < 0 ? "?" : "&") + (a9j.u0x(fC2x, "version") || ""),
                    e0x = {type: "text", method: "GET", onload: cnM4Q.g0x(null, C0x)};
                window.setTimeout(v0x.bo0x.g0x(v0x, V0x, e0x), 0)
            }
        };
        var cnC4G = function (f0x, e0x) {
            var t0x = f0x.name.toLowerCase();
            switch (t0x) {
                case"jst":
                    a9j.el2x(f0x, !0);
                    return;
                case"txt":
                    a9j.Il2x(f0x.id, f0x.value || "");
                    return;
                case"ntp":
                    a9j.ib3x(f0x.value || "", f0x.id);
                    return;
                case"js":
                    cnR4V(f0x, e0x);
                    return;
                case"css":
                    cnT4X(f0x, e0x);
                    return;
                case"html":
                    cnP4T(f0x, e0x);
                    return;
                case"res":
                    cnL4P(f0x, e0x);
                    return
            }
        };
        H0x.fr2x.A0x({element: document, event: "templateready", oneventadd: Qj4n});
        return function (E0x, e0x) {
            E0x = a9j.x0x(E0x);
            if (!!E0x) {
                var j0x = E0x.tagName == "TEXTAREA" ? [E0x] : E0x.getElementsByTagName("textarea");
                k0x.be0x(j0x, function (f0x) {
                    cnC4G(f0x, e0x)
                });
                a9j.cF1x(E0x, !0)
            }
            Qj4n();
            return this
        }
    }();
    a9j.Il2x = function (J0x, z0x) {
        R0x[J0x] = z0x || "";
        return this
    };
    a9j.hY3x = function (J0x) {
        return R0x[J0x] || ""
    };
    a9j.ib3x = function (E0x, J0x) {
        J0x = J0x || k0x.mL4P();
        E0x = a9j.x0x(E0x) || E0x;
        a9j.Il2x(rf6Z + J0x, E0x);
        a9j.me4i(E0x);
        return J0x
    };
    a9j.dt1x = function (J0x) {
        if (!J0x) return null;
        J0x = rf6Z + J0x;
        var z0x = a9j.hY3x(J0x);
        if (!z0x) return null;
        if (k0x.fh2x(z0x)) {
            z0x = a9j.mM4Q(z0x);
            a9j.Il2x(J0x, z0x)
        }
        return z0x.cloneNode(!0)
    };
    a9j.yr9i = function () {
        var Ha1x = function (z0x, J0x) {
            return J0x == "offset" || J0x == "limit"
        };
        return function (j0x, r0x, e0x) {
            var bs0x = [];
            if (!j0x || !j0x.length || !r0x) return bs0x;
            e0x = e0x || X0x;
            var dF1x = j0x.length, iV3x = parseInt(e0x.offset) || 0,
                gy2x = Math.min(dF1x, iV3x + (parseInt(e0x.limit) || dF1x)),
                cm1x = {total: j0x.length, range: [iV3x, gy2x]};
            NEJ.X(cm1x, e0x, Ha1x);
            for (var i = iV3x, cp1x; i < gy2x; i++) {
                cm1x.index = i;
                cm1x.data = j0x[i];
                cp1x = r0x.A0x(cm1x);
                var C0x = cp1x.AT0x();
                R0x[C0x] = cp1x;
                cp1x.S0x = cp1x.S0x.eb2x(function (C0x, cp1x) {
                    delete R0x[C0x];
                    delete cp1x.S0x
                }.g0x(null, C0x, cp1x));
                bs0x.push(cp1x)
            }
            return bs0x
        }
    }();
    a9j.bLQ7J = function (C0x) {
        return R0x[C0x]
    };
    a9j.ctL6F = function (dE1x, e0x) {
        e0x = e0x || X0x;
        a9j.cC1x(e0x.tid || "template-box");
        h0x.q0x(document, "templateready", function () {
            dE1x.A0x().B0x("onshow", e0x)
        })
    };
    c0x("dbg").dumpTC = function () {
        return R0x
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        N0x = c0x("nej.ui"), b0x;
    if (!!N0x.es2x) return;
    N0x.es2x = NEJ.C();
    b0x = N0x.es2x.O0x(H0x.cz1x);
    b0x.cl1x = function () {
        this.cs1x();
        a9j.bIc6W();
        this.bY1x();
        this.bS1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.cnx4B(e0x.clazz);
        this.bLO7H(e0x.parent)
    };
    b0x.bD0x = function () {
        this.bH0x();
        this.bLN7G();
        delete this.fA2x;
        a9j.me4i(this.o0x);
        a9j.w0x(this.o0x, this.blp0x);
        delete this.blp0x
    };
    b0x.bY1x = bm0x;
    b0x.bS1x = function () {
        if (!this.ca1x) this.Sc4g();
        this.o0x = a9j.dt1x(this.ca1x);
        if (!this.o0x) this.o0x = a9j.cV1x("div", this.kW4a);
        a9j.y0x(this.o0x, this.kW4a)
    };
    b0x.Sc4g = bm0x;
    b0x.cnx4B = function (dL1x) {
        this.blp0x = dL1x || "";
        a9j.y0x(this.o0x, this.blp0x)
    };
    b0x.cnn4r = function () {
        if (!this.kW4a) return;
        a9j.y0x(this.fA2x, this.kW4a + "-parent")
    };
    b0x.bLN7G = function () {
        if (!this.kW4a) return;
        a9j.w0x(this.fA2x, this.kW4a + "-parent")
    };
    b0x.kn3x = function () {
        return this.o0x
    };
    b0x.bLO7H = function (bC0x) {
        if (!this.o0x) return this;
        this.bLN7G();
        if (k0x.gl2x(bC0x)) {
            this.fA2x = bC0x(this.o0x)
        } else {
            this.fA2x = a9j.x0x(bC0x);
            if (!!this.fA2x) this.fA2x.appendChild(this.o0x)
        }
        this.cnn4r();
        return this
    };
    b0x.M0x = function () {
        if (!this.fA2x || !this.o0x || this.o0x.parentNode == this.fA2x) return this;
        this.fA2x.appendChild(this.o0x);
        return this
    };
    b0x.bq0x = function () {
        a9j.me4i(this.o0x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), k0x = c0x("nej.u"), bb0x = c0x("nej.h"),
        N0x = c0x("nej.ui"), uU7N, bLK7D;
    if (!!N0x.Pm3x) return;
    N0x.Pm3x = NEJ.C();
    uU7N = N0x.Pm3x.O0x(N0x.es2x);
    bLK7D = N0x.Pm3x.cg1x;
    uU7N.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.up7i("oncontentready", e0x.oncontentready || this.cnj4n.g0x(this));
        this.cng4k = !!e0x.nohack;
        this.cnf4j = !!e0x.destroyable;
        this.HK1x(e0x.content)
    };
    uU7N.bD0x = function () {
        this.B0x("onbeforerecycle");
        this.bH0x();
        this.Sr4v();
        this.HK1x("");
        a9j.fz2x(this.o0x, {top: "", left: ""})
    };
    uU7N.cnj4n = bm0x;
    uU7N.HI1x = bm0x;
    uU7N.Sr4v = function () {
        a9j.me4i(this.o0x);
        if (!!this.mX4b) {
            this.mX4b = bb0x.bkw9n(this.o0x);
            delete this.mX4b
        }
    };
    uU7N.HK1x = function (bi0x) {
        if (!this.o0x || !this.yI9z || bi0x == null) return this;
        bi0x = bi0x || "";
        k0x.fh2x(bi0x) ? this.yI9z.innerHTML = bi0x : this.yI9z.appendChild(bi0x);
        this.B0x("oncontentready", this.yI9z);
        return this
    };
    uU7N.fT2x = function (bj0x) {
        var z0x = bj0x.top;
        if (z0x != null) {
            z0x += "px";
            a9j.Y0x(this.o0x, "top", z0x);
            a9j.Y0x(this.mX4b, "top", z0x)
        }
        var z0x = bj0x.left;
        if (z0x != null) {
            z0x += "px";
            a9j.Y0x(this.o0x, "left", z0x);
            a9j.Y0x(this.mX4b, "left", z0x)
        }
        return this
    };
    uU7N.M0x = function () {
        a9j.Y0x(this.o0x, "visibility", "hidden");
        bLK7D.M0x.apply(this, arguments);
        this.HI1x();
        a9j.Y0x(this.o0x, "visibility", "");
        if (!this.cng4k) {
            this.mX4b = bb0x.mX4b(this.o0x)
        }
        return this
    };
    uU7N.bq0x = function () {
        this.cnf4j ? this.S0x() : this.Sr4v();
        return this
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, k0x = c0x("nej.u"), a9j = c0x("nej.e"), N0x = c0x("nej.ui"), yJ9A;
    if (!!N0x.Su4y) return;
    N0x.Su4y = NEJ.C();
    yJ9A = N0x.Su4y.O0x(N0x.es2x);
    yJ9A.bk0x = function (e0x) {
        this.OO3x();
        this.bl0x(this.cne4i(e0x));
        this.bR1x.onbeforerecycle = this.S0x.g0x(this);
        this.nS5X = this.bnL0x()
    };
    yJ9A.bD0x = function () {
        this.B0x("onbeforerecycle");
        this.bH0x();
        delete this.bR1x;
        a9j.me4i(this.o0x);
        var yM9D = this.nS5X;
        if (!!yM9D) {
            delete this.nS5X;
            yM9D.S0x()
        }
    };
    yJ9A.bnL0x = bm0x;
    yJ9A.cne4i = function (e0x) {
        var m0x = {};
        k0x.dZ2x(e0x, function (r0x, J0x) {
            this.bR1x.hasOwnProperty(J0x) ? this.bR1x[J0x] = r0x : m0x[J0x] = r0x
        }, this);
        return m0x
    };
    yJ9A.OO3x = function () {
        this.bR1x = {clazz: "", parent: null, content: this.o0x, destroyable: !1, oncontentready: null, nohack: !1}
    };
    yJ9A.M0x = function () {
        if (!!this.nS5X) this.nS5X.M0x();
        this.B0x("onaftershow");
        return this
    };
    yJ9A.bq0x = function () {
        if (!!this.nS5X) this.nS5X.bq0x();
        return this
    }
})();
(function () {
    var c0x = NEJ.P, dP1x = c0x("nej.g"), bb0x = c0x("nej.h"), a9j = c0x("nej.e"), k0x = c0x("nej.u"),
        h0x = c0x("nej.v"), N0x = c0x("nej.ui"), OG3x, bLJ7C;
    if (!!N0x.Hr1x) return;
    var hR3x = a9j.rH6B(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dP1x.bcA7t + ");}");
    N0x.Hr1x = NEJ.C();
    OG3x = N0x.Hr1x.O0x(N0x.es2x);
    bLJ7C = N0x.Hr1x.cg1x;
    OG3x.bk0x = function (e0x) {
        this.bl0x(e0x);
        var bi0x = e0x.content || "&nbsp;";
        k0x.fh2x(bi0x) ? this.o0x.innerHTML = bi0x : this.o0x.appendChild(bi0x)
    };
    OG3x.bD0x = function () {
        this.bH0x();
        this.o0x.innerHTML = "&nbsp;"
    };
    OG3x.bY1x = function () {
        this.kW4a = hR3x
    };
    OG3x.M0x = function () {
        bb0x.bjZ9Q(this.o0x);
        bLJ7C.M0x.apply(this, arguments);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), N0x = c0x("nej.ut"), uY7R;
    if (!!N0x.xc8U) return;
    N0x.xc8U = NEJ.C();
    uY7R = N0x.xc8U.O0x(N0x.cz1x);
    uY7R.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.cnc4g = !!e0x.overflow;
        this.o0x = a9j.x0x(e0x.body);
        this.za9R = a9j.x0x(e0x.view) || a9j.bEw5B(this.o0x);
        this.bLI7B = a9j.x0x(e0x.mbar) || this.o0x;
        this.SB4F = parseInt(e0x.direction) || 0;
        if (!!e0x.isRelative) {
            this.o0x.style.position = "relative";
            this.bpF1x = true;
            this.bpS1x()
        }
        this.bU1x([[document, "mouseup", this.bpU1x.g0x(this)], [document, "mousemove", this.bqa2x.g0x(this)], [this.bLI7B, "mousedown", this.Oq3x.g0x(this)]])
    };
    uY7R.bpS1x = function () {
        if (!!this.bpF1x) {
            this.Hl1x = a9j.hM3x(this.o0x, this.za9R);
            this.Hl1x.x -= parseInt(a9j.dc1x(this.o0x, "left")) || 0;
            this.Hl1x.y -= parseInt(a9j.dc1x(this.o0x, "top")) || 0
        }
    };
    uY7R.bD0x = function () {
        this.bH0x();
        delete this.o0x;
        delete this.bLI7B;
        delete this.za9R
    };
    uY7R.bqC2x = function () {
        return {
            x: Math.max(this.za9R.clientWidth, this.za9R.scrollWidth) - this.o0x.offsetWidth,
            y: Math.max(this.za9R.clientHeight, this.za9R.scrollHeight) - this.o0x.offsetHeight
        }
    };
    uY7R.Oq3x = function (d0x) {
        h0x.bh0x(d0x);
        if (!!this.hU3x) return;
        this.hU3x = {x: h0x.kj3x(d0x), y: h0x.nj4n(d0x)};
        this.bLH7A = this.bqC2x();
        this.B0x("ondragstart", d0x)
    };
    uY7R.bqa2x = function (d0x) {
        if (!this.hU3x) return;
        var bj0x = {x: h0x.kj3x(d0x), y: h0x.nj4n(d0x)};
        var ri6c = bj0x.x - this.hU3x.x, rj6d = bj0x.y - this.hU3x.y, z0x = {
            top: (parseInt(a9j.dc1x(this.o0x, "top")) || 0) + rj6d,
            left: (parseInt(a9j.dc1x(this.o0x, "left")) || 0) + ri6c
        };
        if (this.bpF1x) {
            this.bpS1x();
            z0x.top = z0x.top + this.Hl1x.y;
            z0x.left = z0x.left + this.Hl1x.x
        }
        this.hU3x = bj0x;
        this.fT2x(z0x)
    };
    uY7R.bpU1x = function (d0x) {
        if (!this.hU3x) return;
        delete this.bLH7A;
        delete this.hU3x;
        this.B0x("ondragend", this.bal7e())
    };
    uY7R.fT2x = function (d0x) {
        if (!this.cnc4g) {
            var bLG7z = this.bLH7A || this.bqC2x();
            d0x.top = Math.min(bLG7z.y, Math.max(0, d0x.top));
            d0x.left = Math.min(bLG7z.x, Math.max(0, d0x.left))
        }
        var cc1x = this.o0x.style;
        if (this.bpF1x) {
            this.bpS1x();
            d0x.top = d0x.top - this.Hl1x.y;
            d0x.left = d0x.left - this.Hl1x.x
        }
        if (this.SB4F == 0 || this.SB4F == 2) cc1x.top = d0x.top + "px";
        if (this.SB4F == 0 || this.SB4F == 1) cc1x.left = d0x.left + "px";
        this.B0x("onchange", d0x);
        return this
    };
    uY7R.bal7e = function () {
        return {left: parseInt(a9j.dc1x(this.o0x, "left")) || 0, top: parseInt(a9j.dc1x(this.o0x, "top")) || 0}
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = NEJ.P("nej.e"), h0x = NEJ.P("nej.v"), k0x = NEJ.P("nej.u"),
        H0x = NEJ.P("nej.ut"), N0x = NEJ.P("nej.ui"), hR3x, gj2x, b0x, K0x;
    if (!!N0x.SC4G) return;
    N0x.SC4G = NEJ.C();
    b0x = N0x.SC4G.O0x(N0x.Pm3x);
    K0x = N0x.SC4G.cg1x;
    b0x.cl1x = function () {
        this.qy5D = {};
        this.jC3x = {onchange: this.bqa2x.g0x(this)};
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.cmR4V(e0x.mask);
        this.cmQ4U(e0x.align);
        this.zh9Y(e0x.title);
        if (!e0x.draggable) return;
        this.iN3x = H0x.xc8U.A0x(this.jC3x)
    };
    b0x.bD0x = function () {
        this.bH0x();
        delete this.ph5m;
        delete this.NY3x;
        if (!!this.zj9a) {
            this.zj9a.S0x();
            delete this.zj9a
        }
        if (!!this.iN3x) {
            this.iN3x.S0x();
            delete this.iN3x
        }
    };
    b0x.bY1x = function () {
        this.kW4a = hR3x;
        this.ca1x = gj2x
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.cS1x(this.o0x);
        this.yI9z = j0x[1];
        this.jC3x.mbar = j0x[0];
        this.jC3x.body = this.o0x;
        h0x.q0x(j0x[2], "mousedown", this.cmN4R.g0x(this));
        h0x.q0x(this.jC3x.mbar, "mousedown", this.Oq3x.g0x(this));
        this.bLC7v = a9j.cS1x(this.jC3x.mbar)[0]
    };
    b0x.cmN4R = function (d0x) {
        h0x.bh0x(d0x);
        this.B0x("onclose", d0x);
        if (!d0x.stopped) {
            this.bq0x()
        }
    };
    b0x.Oq3x = function (d0x) {
        h0x.B0x(document, "click")
    };
    b0x.bqa2x = function (d0x) {
        if (!this.mX4b) return;
        a9j.fz2x(this.mX4b, {top: d0x.top + "px", left: d0x.left + "px"})
    };
    b0x.HI1x = function () {
        var eB2x = [function () {
            return 0
        }, function (mD4H, Bh0x, bj0x, J0x) {
            if (J0x == "top" && window.top != window.self) {
                var SJ4N = 0, Bo0x = 0;
                if (top.g_topBarHeight) SJ4N = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Bo0x = top.g_bottomBarHeight;
                if (mD4H.top <= SJ4N) {
                    var bci7b = Math.max(0, (Bh0x.height - (SJ4N - mD4H.top) - Bo0x - bj0x.height) / 2);
                    return bci7b + SJ4N
                } else {
                    var bci7b = Math.max(0, (Bh0x.height - Bo0x - bj0x.height) / 2);
                    return bci7b + mD4H.top
                }
            }
            return Math.max(0, mD4H[J0x] + (Bh0x[hx3x[J0x]] - bj0x[hx3x[J0x]]) / 2)
        }, function (mD4H, Bh0x, bj0x, J0x) {
            return mD4H[J0x] + (Bh0x[hx3x[J0x]] - bj0x[hx3x[J0x]])
        }], cmD4H = ["left", "top"], hx3x = {left: "width", top: "height"};
        return function () {
            var z0x = {}, cc1x = this.o0x.style, iM3x = a9j.oD5I(), mD4H = {left: iM3x.scrollLeft, top: iM3x.scrollTop},
                Bh0x = {width: iM3x.clientWidth, height: iM3x.clientHeight},
                bj0x = {width: this.o0x.offsetWidth, height: this.o0x.offsetHeight},
                dh1x = {left: iM3x.clientWidth - this.o0x.offsetWidth, top: iM3x.clientHeight - this.o0x.offsetHeight};
            k0x.be0x(cmD4H, function (J0x, s0x) {
                var de1x = eB2x[this.ph5m[s0x]];
                if (!de1x) return;
                z0x[J0x] = de1x(mD4H, Bh0x, bj0x, J0x)
            }, this);
            this.fT2x(z0x)
        }
    }();
    b0x.cmB4F = function () {
        if (!this.zj9a) {
            if (!this.NY3x) return;
            this.qy5D.parent = this.fA2x;
            this.zj9a = this.NY3x.A0x(this.qy5D)
        }
        this.zj9a.M0x()
    };
    b0x.Sr4v = function () {
        if (!!this.zj9a) this.zj9a.bq0x();
        K0x.Sr4v.apply(this, arguments)
    };
    b0x.cmR4V = function (kd3x) {
        if (!!kd3x) {
            if (kd3x instanceof N0x.Hr1x) {
                this.zj9a = kd3x;
                return
            }
            if (k0x.gl2x(kd3x)) {
                this.NY3x = kd3x;
                return
            }
            this.NY3x = N0x.Hr1x;
            if (k0x.fh2x(kd3x)) this.qy5D.clazz = kd3x;
            return
        }
        this.NY3x = null
    };
    b0x.zh9Y = function (eE2x, ds1x) {
        if (!!this.bLC7v) {
            var ZN6H = !ds1x ? "innerText" : "innerHTML";
            this.bLC7v[ZN6H] = eE2x || "æ é¢"
        }
        return this
    };
    b0x.cmQ4U = function () {
        var cP1x = /\s+/, cmA4E = {left: 0, center: 1, right: 2, auto: 3},
            cmz4D = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (na4e) {
            this.ph5m = (na4e || "").split(cP1x);
            var dR2x = cmA4E[this.ph5m[0]];
            if (dR2x == null) dR2x = 1;
            this.ph5m[0] = dR2x;
            var dR2x = cmz4D[this.ph5m[1]];
            if (dR2x == null) dR2x = 1;
            this.ph5m[1] = dR2x;
            return this
        }
    }();
    b0x.M0x = function () {
        K0x.M0x.apply(this, arguments);
        this.cmB4F();
        return this
    };
    hR3x = a9j.rH6B(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gj2x = a9j.ib3x('<div class="' + hR3x + '"><div class="zbar"><div class="zttl">æ é¢</div></div><div class="zcnt"></div><span class="zcls" title="å³é­çªä½">Ã</span></div>')
})();
(function () {
    var c0x = NEJ.P, k0x = c0x("nej.u"), N0x = c0x("nej.ui"), bcP7I;
    if (!!N0x.SK4O) return;
    N0x.SK4O = NEJ.C();
    bcP7I = N0x.SK4O.O0x(N0x.Su4y);
    bcP7I.bnL0x = function () {
        return N0x.SC4G.A0x(this.bR1x)
    };
    bcP7I.OO3x = function () {
        N0x.SK4O.cg1x.OO3x.apply(this, arguments);
        this.bR1x.mask = null;
        this.bR1x.title = "æ é¢";
        this.bR1x.align = "";
        this.bR1x.draggable = !1;
        this.bR1x.onclose = null
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bd0x = c0x("nej.ui"), n0x = c0x("nm.l"), b0x, K0x;
    n0x.dV2x = NEJ.C();
    b0x = n0x.dV2x.O0x(bd0x.SK4O);
    b0x.bk0x = function (e0x) {
        e0x.clazz = "m-layer z-show " + (e0x.clazz || "");
        e0x.nohack = true;
        e0x.draggable = true;
        this.bl0x(e0x)
    };
    b0x.dy1x = function (f0x, bF0x) {
        if (!f0x) return;
        a9j.Y0x(f0x, "display", !bF0x ? "none" : "");
        f0x.lastChild.innerText = bF0x || ""
    };
    b0x.dM1x = function (gd2x, cD1x, NC3x, NA3x) {
        var dE1x = "js-lock";
        if (cD1x === undefined) return a9j.bB0x(gd2x, dE1x);
        !cD1x ? a9j.w0x(gd2x, dE1x) : a9j.y0x(gd2x, dE1x);
        gd2x.firstChild.innerText = !cD1x ? NC3x : NA3x
    };
    n0x.dV2x.M0x = function (e0x) {
        e0x = e0x || {};
        if (e0x.mask === undefined) e0x.mask = "m-mask";
        if (e0x.parent === undefined) e0x.parent = document.body;
        if (e0x.draggable === undefined) e0x.draggable = true;
        !!this.eH2x && this.eH2x.S0x();
        this.eH2x = this.A0x(e0x);
        this.eH2x.M0x(e0x);
        return this.eH2x
    };
    n0x.dV2x.bq0x = function () {
        !!this.eH2x && this.eH2x.S0x()
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, K0x;
    n0x.bdz7s = NEJ.C();
    b0x = n0x.bdz7s.O0x(n0x.dV2x);
    K0x = n0x.bdz7s.cg1x;
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        if (e0x.bubble === undefined) e0x.bubble = true;
        this.Nz3x = e0x.bubble;
        this.oN5S = e0x.message || ""
    };
    b0x.bY1x = function () {
        this.ca1x = a9j.ib3x('<div class="lyct f-cb f-tc"></div>')
    };
    b0x.bS1x = function () {
        this.cb1x();
        h0x.q0x(this.o0x, "click", this.cw1x.g0x(this))
    };
    b0x.cw1x = function (d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (!f0x) return;
        if (f0x.href) h0x.cd1x(d0x);
        if (a9j.u0x(f0x, "action") == "close") this.bq0x();
        if (this.Nz3x === !1) h0x.sh6b(d0x);
        this.B0x("onaction", a9j.u0x(f0x, "action"))
    };
    b0x.M0x = function () {
        K0x.M0x.call(this);
        this.o0x.innerHTML = this.oN5S
    };
    var fW2x = a9j.el2x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l0x.ms4w = function () {
        var eX2x;
        var cp1x;
        var bdW8O = function (fZ2x, W0x) {
            if (k0x.gl2x(fZ2x, "function") && fZ2x(W0x) != -1) cp1x.S0x()
        };
        var zp9g = function () {
            !!cp1x && cp1x.bq0x()
        };
        return function (e0x) {
            clearTimeout(eX2x);
            e0x = e0x || {};
            e0x.title = e0x.title || "æç¤º";
            e0x.clazz = e0x.clazz || "";
            e0x.parent = e0x.parent || document.body;
            e0x.buttons = e0x.buttons || [];
            e0x.message = a9j.bQ1x(fW2x, e0x);
            e0x.onaction = bdW8O.g0x(null, e0x.action);
            if (e0x.mask === undefined) e0x.mask = true;
            if (e0x.draggable === undefined) e0x.draggable = true;
            !!cp1x && cp1x.S0x();
            cp1x = n0x.bdz7s.A0x(e0x);
            cp1x.M0x();
            if (e0x.autoclose) eX2x = setTimeout(zp9g.g0x(null), 2e3);
            return cp1x
        }
    }();
    l0x.eS2x = function (e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w1";
        e0x.buttons = [{klass: "u-btn2-2", action: "close", text: e0x.btntxt || "ç¡®å®"}];
        var cp1x = l0x.ms4w(e0x);
        return cp1x
    };
    l0x.gT3x = function (e0x) {
        e0x = e0x || {};
        e0x.clazz = e0x.clazz || "m-layer-w2";
        e0x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e0x.btnok || "ç¡®å®",
            style: e0x.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e0x.btncc || "åæ¶", style: e0x.ccstyle || ""}];
        var cp1x = l0x.ms4w(e0x);
        return cp1x
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u");
    a9j.cmy4C = function () {
        var fU2x = /[\r\n]/gi, R0x = {};
        var cmx4B = function (cQ1x) {
            return (cQ1x || "").replace(fU2x, "aa").length
        };
        var bLA7t = function (C0x) {
            var bc0x = R0x[C0x], bLz7s = a9j.x0x(C0x), xn8f = a9j.x0x(C0x + "-counter");
            if (!bLz7s || !bc0x) return;
            var d0x = {input: bLz7s.value};
            d0x.length = bc0x.onlength(d0x.input);
            d0x.delta = bc0x.max - d0x.length;
            bc0x.onchange(d0x);
            xn8f.innerHTML = d0x.value || "å©ä½" + d0x.delta + "ä¸ªå­"
        };
        return function (E0x, e0x) {
            var C0x = a9j.kJ4N(E0x);
            if (!C0x || !!R0x[C0x]) return;
            var bc0x = NEJ.X({}, e0x);
            bc0x.onchange = bc0x.onchange || bm0x;
            bc0x.onlength = cmx4B;
            if (!bc0x.max) {
                var bLy7r = parseInt(a9j.fX2x(C0x, "maxlength")), bLx7q = parseInt(a9j.u0x(C0x, "maxLength"));
                bc0x.max = bLy7r || bLx7q || 100;
                if (!bLy7r && !!bLx7q) bc0x.onlength = k0x.fe2x
            }
            R0x[C0x] = bc0x;
            h0x.q0x(C0x, "input", bLA7t.g0x(null, C0x));
            var f0x = a9j.Gd1x(C0x, {nid: bc0x.nid || "js-counter", clazz: bc0x.clazz});
            bc0x.xid = C0x + "-counter";
            f0x.id = bc0x.xid;
            bLA7t(C0x)
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), bb0x = c0x("nej.h");
    bb0x.bfe8W = function (E0x, dL1x) {
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, N0x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), bb0x = c0x("nej.h");
    if (N0x.mj4n.trident) return;
    bb0x.bfe8W = function () {
        var R0x = {};
        var If2x = function (d0x) {
            var cN1x = h0x.U0x(d0x);
            if (!!cN1x.value) return;
            a9j.Y0x(a9j.Gd1x(cN1x), "display", "none")
        };
        var AZ0x = function (d0x) {
            var cN1x = h0x.U0x(d0x);
            if (!!cN1x.value) return;
            a9j.Y0x(a9j.Gd1x(cN1x), "display", "")
        };
        var cmp4t = function (cN1x, dL1x) {
            var C0x = a9j.kJ4N(cN1x), jI3x = a9j.Gd1x(cN1x, {tag: "label", clazz: dL1x});
            jI3x.htmlFor = C0x;
            var cK1x = a9j.fX2x(cN1x, "placeholder") || "";
            jI3x.innerText = cK1x == "null" ? "" : cK1x;
            var cq1x = cN1x.offsetHeight + "px";
            a9j.fz2x(jI3x, {left: 0, display: !cN1x.value ? "" : "none"})
        };
        return bb0x.bfe8W.eb2x(function (d0x) {
            d0x.stopped = !0;
            var bg0x = d0x.args, cN1x = a9j.x0x(bg0x[0]);
            if (!!R0x[cN1x.id]) return;
            cmp4t(cN1x, bg0x[1]);
            R0x[cN1x.id] = !0;
            h0x.q0x(cN1x, "blur", AZ0x.g0x(null));
            h0x.q0x(cN1x, "focus", If2x.g0x(null))
        })
    }()
})();
(function () {
    var c0x = NEJ.P, bb0x = c0x("nej.h"), a9j = c0x("nej.e"), cO1x = c0x("nej.x");
    a9j.fB2x = cO1x.fB2x = function (E0x, dL1x) {
        bb0x.bfe8W(E0x, a9j.u0x(E0x, "holder") || dL1x || "js-placeholder");
        return this
    };
    cO1x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        N0x = c0x("nej.ut"), gZ3x;
    if (!!N0x.Ns3x) return;
    N0x.Ns3x = NEJ.C();
    gZ3x = N0x.Ns3x.O0x(N0x.cz1x);
    gZ3x.cl1x = function () {
        this.cs1x();
        this.BE0x = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    gZ3x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.fJ2x = document.forms[e0x.form] || a9j.x0x(e0x.form);
        this.bU1x([[this.fJ2x, "keypress", this.cmo4s.g0x(this)]]);
        this.oN5S = e0x.message || {};
        this.oN5S.pass = this.oN5S.pass || "&nbsp;";
        var eF2x = this.op5u(this.fJ2x, "focusMode", 1);
        if (!isNaN(eF2x)) {
            this.bLt7m = {mode: eF2x, clazz: e0x.focus}
        }
        this.zw9n = e0x.holder;
        this.BE0x.tp.clazz = "js-mhd " + (e0x.tip || "js-tip");
        this.BE0x.ok.clazz = "js-mhd " + (e0x.pass || "js-pass");
        this.BE0x.er.clazz = "js-mhd " + (e0x.error || "js-error");
        this.bLs7l = e0x.invalid || "js-invalid";
        this.cmi4m(e0x);
        this.fQ2x();
        if (!!this.zA9r) this.zA9r.focus()
    };
    gZ3x.bD0x = function () {
        this.bH0x();
        delete this.oN5S;
        delete this.zA9r;
        delete this.Cg0x;
        delete this.fJ2x;
        delete this.bLq7j;
        delete this.ML3x
    };
    gZ3x.op5u = function (f0x, Cq0x, t0x) {
        var z0x = a9j.u0x(f0x, Cq0x);
        switch (t0x) {
            case 1:
                return parseInt(z0x);
            case 2:
                return (z0x || "").toLowerCase() == "true";
            case 3:
                return this.bgR8J(z0x)
        }
        return z0x
    };
    gZ3x.zM9D = function (z0x, t0x) {
        if (t0x == "date") return this.bgR8J(z0x);
        return parseInt(z0x)
    };
    gZ3x.Tm5r = function () {
        var jm3x = /^button|submit|reset|image|hidden|file$/i;
        return function (f0x) {
            f0x = this.x0x(f0x) || f0x;
            var t0x = f0x.type;
            return !!f0x.name && !jm3x.test(f0x.type || "")
        }
    }();
    gZ3x.cmf4j = function () {
        var jm3x = /^hidden$/i;
        return function (f0x) {
            if (this.Tm5r(f0x)) return !0;
            f0x = this.x0x(f0x) || f0x;
            var t0x = f0x.type || "";
            return jm3x.test(t0x)
        }
    }();
    gZ3x.bgR8J = function () {
        var cP1x = /[-\/]/;
        var cme4i = function (z0x) {
            if (!z0x) return "";
            z0x = z0x.split(cP1x);
            z0x.push(z0x.shift());
            return z0x.join("/")
        };
        return function (z0x) {
            if ((z0x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cme4i(z0x))
        }
    }();
    gZ3x.cmo4s = function (d0x) {
        if (d0x.keyCode != 13) return;
        this.B0x("onenter", d0x)
    };
    gZ3x.clW4a = function (C0x, T0x) {
        var qI5N = this.ML3x[T0x], z0x = this.op5u(C0x, T0x);
        if (!z0x || !qI5N) return;
        this.Tv5A(C0x, qI5N);
        this.bhx9o(C0x, T0x, z0x)
    };
    gZ3x.clV4Z = function (C0x, T0x) {
        try {
            var bLl7e = this.op5u(C0x, T0x);
            if (!bLl7e) return;
            var z0x = new RegExp(bLl7e);
            this.bhx9o(C0x, T0x, z0x);
            this.Tv5A(C0x, this.ML3x[T0x])
        } catch (e) {
        }
    };
    gZ3x.clS4W = function (C0x, T0x) {
        var qI5N = this.ML3x[T0x];
        if (!!qI5N && this.op5u(C0x, T0x, 2)) this.Tv5A(C0x, qI5N)
    };
    gZ3x.bhW9N = function (C0x, T0x, z0x) {
        z0x = parseInt(z0x);
        if (isNaN(z0x)) return;
        this.bhx9o(C0x, T0x, z0x);
        this.Tv5A(C0x, this.ML3x[T0x])
    };
    gZ3x.bLj7c = function (C0x, T0x) {
        this.bhW9N(C0x, T0x, this.op5u(C0x, T0x))
    };
    gZ3x.bLi7b = function (C0x, T0x) {
        this.bhW9N(C0x, T0x, a9j.fX2x(C0x, T0x))
    };
    gZ3x.bLh7a = function (C0x, T0x, t0x) {
        var z0x = this.zM9D(this.op5u(C0x, T0x), this.op5u(C0x, "type"));
        this.bhW9N(C0x, T0x, z0x)
    };
    gZ3x.clK4O = function () {
        var fU2x = /^input|textarea$/i;
        var If2x = function (d0x) {
            this.oz5E(h0x.U0x(d0x))
        };
        var AZ0x = function (d0x) {
            var f0x = h0x.U0x(d0x);
            if (!this.op5u(f0x, "ignore", 2)) {
                this.bLg7Z(f0x)
            }
        };
        return function (f0x) {
            if (this.op5u(f0x, "autoFocus", 2)) this.zA9r = f0x;
            var pr5w = a9j.fX2x(f0x, "placeholder");
            if (!!pr5w && pr5w != "null") a9j.fB2x(f0x, this.zw9n);
            if (!!this.bLt7m && fU2x.test(f0x.tagName)) a9j.ll4p(f0x, this.bLt7m);
            var C0x = a9j.kJ4N(f0x);
            this.clS4W(C0x, "required");
            this.clW4a(C0x, "type");
            this.clV4Z(C0x, "pattern");
            this.bLi7b(C0x, "maxlength");
            this.bLi7b(C0x, "minlength");
            this.bLj7c(C0x, "maxLength");
            this.bLj7c(C0x, "minLength");
            this.bLh7a(C0x, "min");
            this.bLh7a(C0x, "max");
            var T0x = f0x.name;
            this.oN5S[T0x + "-tip"] = this.op5u(f0x, "tip");
            this.oN5S[T0x + "-error"] = this.op5u(f0x, "message");
            this.oz5E(f0x);
            var bt0x = this.Cg0x[C0x], i0x = (bt0x || X0x).data || X0x, Ml3x = this.op5u(f0x, "counter", 2);
            if (Ml3x && (i0x.maxlength || i0x.maxLength)) {
                a9j.cmy4C(C0x, {nid: this.BE0x.tp.nid, clazz: "js-counter"})
            }
            if (!!bt0x && fU2x.test(f0x.tagName)) {
                this.bU1x([[f0x, "focus", If2x.g0x(this)], [f0x, "blur", AZ0x.g0x(this)]])
            } else if (this.op5u(f0x, "focus", 2)) {
                this.bU1x([[f0x, "focus", If2x.g0x(this)]])
            }
        }
    }();
    gZ3x.cmi4m = function () {
        var CR0x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bgR8J(v))
            }
        };
        var clI4M = {
            required: function (f0x) {
                var t0x = f0x.type, clH4L = !f0x.value, clB4F = (t0x == "checkbox" || t0x == "radio") && !f0x.checked;
                if (clB4F || clH4L) return -1
            }, type: function (f0x, e0x) {
                var cP1x = this.bLq7j[e0x.type], eM2x = f0x.value.trim(), clx4B = !!cP1x.test && !cP1x.test(eM2x),
                    clv4z = k0x.gl2x(cP1x) && !cP1x.call(this, eM2x);
                if (clx4B || clv4z) return -2
            }, pattern: function (f0x, e0x) {
                if (!e0x.pattern.test(f0x.value)) return -3
            }, maxlength: function (f0x, e0x) {
                if (f0x.value.length > e0x.maxlength) return -4
            }, minlength: function (f0x, e0x) {
                if (f0x.value.length < e0x.minlength) return -5
            }, maxLength: function (f0x, e0x) {
                if (k0x.fe2x(f0x.value) > e0x.maxLength) return -4
            }, minLength: function (f0x, e0x) {
                if (k0x.fe2x(f0x.value) < e0x.minLength) return -5
            }, min: function (f0x, e0x) {
                var fv2x = this.zM9D(f0x.value, e0x.type);
                if (isNaN(fv2x) || fv2x < e0x.min) return -6
            }, max: function (f0x, e0x) {
                var fv2x = this.zM9D(f0x.value, e0x.type);
                if (isNaN(fv2x) || fv2x > e0x.max) return -7
            }
        };
        return function (e0x) {
            this.bLq7j = NEJ.X(NEJ.X({}, CR0x), e0x.type);
            this.ML3x = NEJ.X(NEJ.X({}, clI4M), e0x.attr)
        }
    }();
    gZ3x.Tv5A = function (C0x, wC8u) {
        if (!k0x.gl2x(wC8u)) return;
        var bt0x = this.Cg0x[C0x];
        if (!bt0x || !bt0x.func) {
            bt0x = bt0x || {};
            bt0x.func = [];
            this.Cg0x[C0x] = bt0x
        }
        bt0x.func.push(wC8u)
    };
    gZ3x.bhx9o = function (C0x, T0x, z0x) {
        if (!T0x) return;
        var bt0x = this.Cg0x[C0x];
        if (!bt0x || !bt0x.data) {
            bt0x = bt0x || {};
            bt0x.data = {};
            this.Cg0x[C0x] = bt0x
        }
        bt0x.data[T0x] = z0x
    };
    gZ3x.bLg7Z = function (f0x) {
        f0x = this.x0x(f0x) || f0x;
        var bt0x = this.Cg0x[a9j.kJ4N(f0x)];
        if (!f0x || !bt0x || !this.Tm5r(f0x)) return !0;
        var m0x;
        k0x.dZ2x(bt0x.func, function (eB2x) {
            m0x = eB2x.call(this, f0x, bt0x.data);
            return m0x != null
        }, this);
        if (m0x == null) {
            var d0x = {target: f0x, form: this.fJ2x};
            this.B0x("oncheck", d0x);
            m0x = d0x.value
        }
        var d0x = {target: f0x, form: this.fJ2x};
        if (m0x != null) {
            d0x.code = m0x;
            this.B0x("oninvalid", d0x);
            if (!d0x.stopped) {
                this.clu4y(f0x, d0x.value || this.oN5S[f0x.name + m0x])
            }
        } else {
            this.B0x("onvalid", d0x);
            if (!d0x.stopped) this.clt4x(f0x, d0x.value)
        }
        return m0x == null
    };
    gZ3x.wG8y = function () {
        var clq4u = function (YB6v, YA6u) {
            return YB6v == YA6u ? "block" : "none"
        };
        var clp4t = function (f0x, t0x, bF0x) {
            var pr5w = bKX7Q.call(this, f0x, t0x);
            if (!pr5w && !!bF0x) pr5w = a9j.Gd1x(f0x, this.BE0x[t0x]);
            return pr5w
        };
        var bKX7Q = function (f0x, t0x) {
            var pr5w;
            if (t0x == "tp") pr5w = a9j.x0x(f0x.name + "-tip");
            if (!pr5w) pr5w = a9j.I0x(f0x.parentNode, this.BE0x[t0x].nid)[0];
            return pr5w
        };
        return function (f0x, bF0x, t0x) {
            f0x = this.x0x(f0x) || f0x;
            if (!f0x) return;
            t0x == "er" ? a9j.y0x(f0x, this.bLs7l) : a9j.w0x(f0x, this.bLs7l);
            var pr5w = clp4t.call(this, f0x, t0x, bF0x);
            if (!!pr5w && !!bF0x) pr5w.innerHTML = bF0x;
            k0x.dZ2x(this.BE0x, function (z0x, J0x) {
                a9j.Y0x(bKX7Q.call(this, f0x, J0x), "display", clq4u(t0x, J0x))
            }, this)
        }
    }();
    gZ3x.oz5E = function (f0x, bF0x) {
        this.wG8y(f0x, bF0x || this.oN5S[f0x.name + "-tip"], "tp");
        return this
    };
    gZ3x.clt4x = function (f0x, bF0x) {
        this.wG8y(f0x, bF0x || this.oN5S[f0x.name + "-pass"] || this.oN5S.pass, "ok");
        return this
    };
    gZ3x.clu4y = function (f0x, bF0x) {
        this.wG8y(f0x, bF0x || this.oN5S[f0x.name + "-error"], "er");
        return this
    };
    gZ3x.hX3x = function () {
        var fU2x = /^(?:radio|checkbox)$/i;
        var clm4q = function (z0x) {
            return z0x == null ? "" : z0x
        };
        var bKW7P = function (z0x, f0x) {
            if (fU2x.test(f0x.type || "")) {
                f0x.checked = z0x == f0x.value
            } else {
                f0x.value = clm4q(z0x)
            }
        };
        return function (T0x, z0x) {
            var f0x = this.x0x(T0x);
            if (!f0x) return this;
            if (f0x.tagName == "SELECT" || !f0x.length) {
                bKW7P(z0x, f0x)
            } else {
                k0x.be0x(f0x, bKW7P.g0x(null, z0x))
            }
            return this
        }
    }();
    gZ3x.x0x = function (T0x) {
        return this.fJ2x.elements[T0x]
    };
    gZ3x.ctO6I = function () {
        return this.fJ2x
    };
    gZ3x.TI5N = function () {
        var fU2x = /^radio|checkbox$/i, jm3x = /^number|date$/;
        var clg4k = function (bv0x, f0x) {
            var T0x = f0x.name, z0x = f0x.value, bt0x = bv0x[T0x], t0x = this.op5u(f0x, "type");
            if (jm3x.test(t0x)) z0x = this.zM9D(z0x, t0x);
            if (fU2x.test(f0x.type) && !f0x.checked) {
                z0x = this.op5u(f0x, "value");
                if (!z0x) return
            }
            if (!!bt0x) {
                if (!k0x.ep2x(bt0x)) {
                    bt0x = [bt0x];
                    bv0x[T0x] = bt0x
                }
                bt0x.push(z0x)
            } else {
                bv0x[T0x] = z0x
            }
        };
        return function () {
            var m0x = {};
            k0x.be0x(this.fJ2x.elements, function (f0x) {
                if (this.cmf4j(f0x)) clg4k.call(this, m0x, f0x)
            }, this);
            return m0x
        }
    }();
    gZ3x.TJ5O = function () {
        var clf4j = function (f0x) {
            if (this.Tm5r(f0x)) this.oz5E(f0x)
        };
        return function () {
            this.fJ2x.reset();
            k0x.be0x(this.fJ2x.elements, clf4j, this);
            return this
        }
    }();
    gZ3x.ctQ6K = function () {
        this.fJ2x.submit();
        return this
    };
    gZ3x.fQ2x = function () {
        var cld4h = function (f0x) {
            if (this.Tm5r(f0x)) this.clK4O(f0x)
        };
        return function () {
            this.Cg0x = {};
            k0x.be0x(this.fJ2x.elements, cld4h, this);
            return this
        }
    }();
    gZ3x.clc4g = function (f0x) {
        f0x = this.x0x(f0x) || f0x;
        if (!!f0x) return this.bLg7Z(f0x);
        var m0x = !0;
        k0x.be0x(this.fJ2x.elements, function (f0x) {
            var kf3x = this.clc4g(f0x);
            m0x = m0x && kf3x
        }, this);
        return m0x
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), H0x = c0x("nej.ut"), k0x = c0x("nej.u"),
        l0x = c0x("nm.x"), n0x = c0x("nm.l"), b0x, K0x;
    n0x.TM5R = NEJ.C();
    b0x = n0x.TM5R.O0x(n0x.dV2x);
    K0x = n0x.TM5R.cg1x;
    b0x.bS1x = function () {
        this.cb1x();
        h0x.q0x(this.o0x, "click", this.cw1x.g0x(this));
        h0x.q0x(document, "mousewheel", this.Am9d.g0x(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Am9d.g0x(this))
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        if (e0x.jst) {
            this.o0x.innerHTML = a9j.bQ1x(e0x.jst, e0x.data)
        } else if (e0x.ntp) {
            this.o0x.appendChild(a9j.dt1x(e0x.ntp))
        } else if (e0x.txt) {
            this.o0x.innerHTML = a9j.hY3x(e0x.txt)
        } else if (e0x.html) {
            this.o0x.innerHTML = e0x.html
        }
        var Lx2x = this.o0x.getElementsByTagName("form");
        if (Lx2x.length) {
            this.fJ2x = H0x.Ns3x.A0x({form: Lx2x[0]})
        }
        this.DL0x = a9j.cS1x(this.o0x)[0]
    };
    b0x.bD0x = function () {
        this.B0x("ondestroy");
        this.bH0x();
        this.o0x.innerHTML = "";
        delete this.DL0x
    };
    b0x.cw1x = function (d0x) {
        var f0x = h0x.U0x(d0x, "d:action"), i0x = this.fJ2x ? this.fJ2x.TI5N() : null,
            d0x = {action: a9j.u0x(f0x, "action")};
        if (i0x) d0x.data = i0x;
        if (d0x.action) {
            this.B0x("onaction", d0x);
            if (d0x.stopped) return;
            this.bq0x()
        }
    };
    b0x.Am9d = function (d0x) {
        if (!this.DL0x) return;
        h0x.bh0x(d0x);
        var dh1x = d0x.wheelDelta || -d0x.detail;
        this.DL0x.scrollTop -= dh1x
    };
    l0x.jn3x = function (e0x) {
        e0x.destroyable = e0x.destroyable || true;
        e0x.title = e0x.title || "æç¤º";
        e0x.draggable = true;
        e0x.parent = document.body;
        e0x.mask = e0x.mask || true;
        var yM9D = n0x.TM5R.A0x(e0x);
        yM9D.M0x();
        return yM9D
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bKS7L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ls2x = {}, DU0x = {};
    for (var i = 0, l = bKS7L.length, c; i < l; i++) {
        c = bKS7L.charAt(i);
        Ls2x[i] = c;
        DU0x[c] = i
    }
    var cla4e = function (iL3x) {
        var s0x = 0, c, m0x = [];
        while (s0x < iL3x.length) {
            c = iL3x[s0x];
            if (c < 128) {
                m0x.push(String.fromCharCode(c));
                s0x++
            } else if (c > 191 && c < 224) {
                m0x.push(String.fromCharCode((c & 31) << 6 | iL3x[s0x + 1] & 63));
                s0x += 2
            } else {
                m0x.push(String.fromCharCode((c & 15) << 12 | (iL3x[s0x + 1] & 63) << 6 | iL3x[s0x + 2] & 63));
                s0x += 3
            }
        }
        return m0x.join("")
    };
    var ckY4c = function () {
        var gW3x = /\r\n/g;
        return function (i0x) {
            i0x = i0x.replace(gW3x, "\n");
            var m0x = [], nG4K = String.fromCharCode(237);
            if (nG4K.charCodeAt(0) < 0) for (var i = 0, l = i0x.length, c; i < l; i++) {
                c = i0x.charCodeAt(i);
                c > 0 ? m0x.push(c) : m0x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = i0x.length, c; i < l; i++) {
                c = i0x.charCodeAt(i);
                if (c < 128) m0x.push(c); else if (c > 127 && c < 2048) m0x.push(c >> 6 | 192, c & 63 | 128); else m0x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return m0x
        }
    }();
    var Fn1x = function (iL3x) {
        var s0x = 0, m0x = [], eF2x = iL3x.length % 3;
        if (eF2x == 1) iL3x.push(0, 0);
        if (eF2x == 2) iL3x.push(0);
        while (s0x < iL3x.length) {
            m0x.push(Ls2x[iL3x[s0x] >> 2], Ls2x[(iL3x[s0x] & 3) << 4 | iL3x[s0x + 1] >> 4], Ls2x[(iL3x[s0x + 1] & 15) << 2 | iL3x[s0x + 2] >> 6], Ls2x[iL3x[s0x + 2] & 63]);
            s0x += 3
        }
        if (eF2x == 1) m0x[m0x.length - 1] = m0x[m0x.length - 2] = "=";
        if (eF2x == 2) m0x[m0x.length - 1] = "=";
        return m0x.join("")
    };
    var ckX4b = function () {
        var qj5o = /\n|\r|=/g;
        return function (i0x) {
            var s0x = 0, m0x = [];
            i0x = i0x.replace(qj5o, "");
            for (var i = 0, l = i0x.length; i < l; i += 4) m0x.push(DU0x[i0x.charAt(i)] << 2 | DU0x[i0x.charAt(i + 1)] >> 4, (DU0x[i0x.charAt(i + 1)] & 15) << 4 | DU0x[i0x.charAt(i + 2)] >> 2, (DU0x[i0x.charAt(i + 2)] & 3) << 6 | DU0x[i0x.charAt(i + 3)]);
            var bp0x = m0x.length, eF2x = i0x.length % 4;
            if (eF2x == 2) m0x = m0x.slice(0, bp0x - 2);
            if (eF2x == 3) m0x = m0x.slice(0, bp0x - 1);
            return m0x
        }
    }();
    p.ctR6L = function (i0x) {
        return cla4e(ckX4b(i0x))
    };
    p.ckU4Y = function (i0x) {
        try {
            return window.btoa(i0x)
        } catch (ex) {
            return Fn1x(ckY4c(i0x))
        }
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), N0x = c0x("nej.p"),
        k0x = c0x("nej.u"), n0x = c0x("nm.l"), D0x = c0x("nm.w"), bK1x = c0x("nej.ui"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), b0x, K0x;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n0x.bKO7H = NEJ.C();
    b0x = n0x.bKO7H.O0x(n0x.dV2x);
    b0x.bY1x = function () {
        this.ca1x = "m-download-layer"
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.I0x(this.o0x, "j-flag");
        this.bmC0x = j0x[0];
        this.bmR0x = j0x[1];
        this.bKN7G = j0x[2];
        v0x.bo0x("/client/version/get", {type: "json", onload: this.ckQ4U.g0x(this)});
        if (N0x.ZF6z.mac) {
            a9j.w0x(this.bmC0x.parentNode, "f-hide");
            a9j.y0x(this.bmR0x.parentNode, "f-hide");
            a9j.y0x(this.bKN7G, "f-hide")
        } else {
            a9j.y0x(this.bmC0x.parentNode, "f-hide");
            a9j.w0x(this.bmR0x.parentNode, "f-hide");
            a9j.w0x(this.bKN7G, "f-hide")
        }
    };
    b0x.bk0x = function (e0x) {
        e0x.clazz = " m-layer-down";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "ä¸è½½";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bl0x(e0x);
        this.bU1x([[this.o0x, "click", this.bO1x.g0x(this)]]);
        this.eh2x = TYPE_MAP[e0x.type];
        this.gu2x = e0x.id
    };
    b0x.bD0x = function () {
        this.bH0x()
    };
    b0x.As9j = function () {
        this.bq0x()
    };
    b0x.Ec0x = function (d0x) {
        this.B0x("onok", z0x);
        this.bq0x()
    };
    b0x.bO1x = function (d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        switch (a9j.u0x(f0x, "action")) {
            case"download":
                this.bq0x();
                window.open(a9j.u0x(f0x, "src"));
                break;
            case"orpheus":
                this.bq0x();
                location.href = "orpheus://" + k0x.ckU4Y(JSON.stringify({
                    type: this.eh2x,
                    id: this.gu2x,
                    cmd: "download"
                }));
                break
        }
    };
    b0x.ckQ4U = function (d0x) {
        if ((d0x || X0x).code == 200) {
            this.IV2x = d0x.data;
            this.bmC0x.innerText = "V" + this.IV2x.mac;
            this.bmR0x.innerText = "V" + this.IV2x.pc
        }
    };
    l0x.TP5U = function (e0x) {
        n0x.bKO7H.A0x(e0x).M0x()
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, k0x = c0x("nej.u"), p0x = c0x("nm.d"), bN1x = {};
    p0x.x0x = function (J0x) {
        return bN1x[J0x]
    };
    p0x.oJ5O = function (J0x, bc0x) {
        bN1x[J0x] = bc0x
    };
    p0x.eO2x = function (i0x) {
        k0x.dZ2x(i0x, function (r0x, J0x) {
            var bc0x = bN1x[J0x] || {};
            NEJ.X(bc0x, r0x);
            bN1x[J0x] = bc0x
        })
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, bb0x = c0x("nej.h");
    bb0x.TQ5V = function (J0x) {
        return localStorage.getItem(J0x)
    };
    bb0x.TS5X = function (J0x, z0x) {
        localStorage.setItem(J0x, z0x)
    };
    bb0x.boh1x = function (J0x) {
        localStorage.removeItem(J0x)
    };
    bb0x.bom1x = function () {
        localStorage.clear()
    };
    bb0x.ckP4T = function () {
        var m0x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m0x.push(localStorage.key(i));
        return m0x
    };
    bb0x.bou1x = function () {
        (document.onstorageready || bm0x)()
    };
    bb0x.boz1x = function () {
        return !0
    }
})();
(function () {
    var c0x = NEJ.P, N0x = c0x("nej.p"), iD3x = c0x("nej.c"), bb0x = c0x("nej.h"), sf6Z;
    if (N0x.mj4n.trident || !!window.localStorage) return;
    var ckO4S = function () {
        var qJ5O, eX2x;
        var bmf0x = function () {
            qJ5O = document.createElement("div");
            NEJ.X(qJ5O.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qJ5O);
            qJ5O.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iD3x.x0x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Qm4q = function () {
            eX2x = window.clearTimeout(eX2x);
            var gV3x = qJ5O.getElementsByTagName("object")[0];
            if (!!gV3x.initStorage) {
                delete qJ5O;
                sf6Z = gV3x;
                sf6Z.initStorage("nej-storage");
                (document.onstorageready || bm0x)();
                return
            }
            eX2x = window.setTimeout(Qm4q, 500)
        };
        return function () {
            if (!!sf6Z) return;
            bmf0x();
            Qm4q()
        }
    }();
    bb0x.TQ5V = bb0x.TQ5V.eb2x(function (d0x) {
        d0x.stopped = !0;
        if (!sf6Z) return;
        d0x.value = sf6Z.getItem(d0x.args[0])
    });
    bb0x.TS5X = bb0x.TS5X.eb2x(function (d0x) {
        d0x.stopped = !0;
        if (!sf6Z) return;
        var bg0x = d0x.args;
        sf6Z.setItem(bg0x[0], bg0x[1])
    });
    bb0x.boh1x = bb0x.boh1x.eb2x(function (d0x) {
        d0x.stopped = !0;
        if (!sf6Z) return;
        sf6Z.removeItem(d0x.args[0])
    });
    bb0x.bom1x = bb0x.bom1x.eb2x(function (d0x) {
        d0x.stopped = !0;
        if (!!sf6Z) sf6Z.clear()
    });
    bb0x.bou1x = bb0x.bou1x.eb2x(function (d0x) {
        d0x.stopped = !0;
        ckO4S()
    });
    bb0x.boz1x = bb0x.boz1x.eb2x(function (d0x) {
        d0x.stopped = !0;
        d0x.value = !!sf6Z
    })
})();
(function () {
    var c0x = NEJ.P, k0x = c0x("nej.u"), h0x = c0x("nej.v"), bb0x = c0x("nej.h"), v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"), R0x = {};
    v0x.vr8j = function (J0x, z0x) {
        var bKM7F = JSON.stringify(z0x);
        try {
            bb0x.TS5X(J0x, bKM7F)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKM7F != bb0x.TQ5V(J0x)) R0x[J0x] = z0x;
        return this
    };
    v0x.sH6B = function (J0x) {
        var i0x = JSON.parse(bb0x.TQ5V(J0x) || "null");
        return i0x == null ? R0x[J0x] : i0x
    };
    v0x.bKL7E = function (J0x, z0x) {
        var i0x = v0x.sH6B(J0x);
        if (i0x == null) {
            i0x = z0x;
            v0x.vr8j(J0x, i0x)
        }
        return i0x
    };
    v0x.KY2x = function (J0x) {
        delete R0x[J0x];
        bb0x.boh1x(J0x);
        return this
    };
    v0x.ctS6M = function () {
        var bps1x = function (r0x, J0x, bv0x) {
            delete bv0x[J0x]
        };
        return function () {
            k0x.dZ2x(R0x, bps1x);
            bb0x.bom1x();
            return this
        }
    }();
    v0x.ctT6N = function (m0x) {
        m0x = m0x || {};
        k0x.be0x(bb0x.ckP4T(), function (J0x) {
            m0x[J0x] = v0x.sH6B(J0x)
        });
        return m0x
    };
    H0x.fr2x.A0x({
        element: document, event: "storageready", oneventadd: function () {
            if (bb0x.boz1x()) {
                document.onstorageready()
            }
        }
    });
    var ckG4K = function () {
        var ckC4G = function (z0x, J0x, bv0x) {
            bb0x.TS5X(J0x, JSON.stringify(z0x));
            delete bv0x[J0x]
        };
        return function () {
            k0x.dZ2x(R0x, ckC4G)
        }
    }();
    h0x.q0x(document, "storageready", ckG4K);
    bb0x.bou1x()
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), k0x = c0x("nej.u"), N0x = c0x("nej.ut"), Fd1x;
    if (!!N0x.bpR1x) return;
    N0x.bpR1x = NEJ.C();
    Fd1x = N0x.bpR1x.O0x(N0x.cz1x);
    Fd1x.cl1x = function () {
        var fW2x = +(new Date), mx4B = "dat-" + fW2x;
        return function () {
            this.cs1x();
            var R0x = this.constructor[mx4B];
            if (!R0x) {
                R0x = {};
                this.constructor[mx4B] = R0x
            }
            this.P0x = R0x
        }
    }();
    Fd1x.x0x = function (J0x) {
        return this.P0x[J0x]
    };
    Fd1x.oJ5O = function (J0x, z0x) {
        var lS4W = this.P0x[J0x];
        this.P0x[J0x] = z0x;
        h0x.B0x(localCache, "cachechange", {key: J0x, type: "set", oldValue: lS4W, newValue: z0x});
        return this
    };
    Fd1x.cF1x = function (J0x) {
        var lS4W = this.P0x[J0x];
        k0x.UK5P(this.P0x, J0x);
        h0x.B0x(localCache, "cachechange", {key: J0x, type: "delete", oldValue: lS4W, newValue: undefined});
        return lS4W
    };
    Fd1x.TU5Z = function (Ba0x) {
        return NEJ.Q(this.P0x, Ba0x)
    };
    window.localCache = N0x.bpR1x.A0x();
    N0x.fr2x.A0x({element: localCache, event: "cachechange"})
})();
(function () {
    var c0x = NEJ.P, eT2x = NEJ.R, bm0x = NEJ.F, k0x = c0x("nej.u"), v0x = c0x("nej.j"), N0x = c0x("nej.ut"),
        mx4B = "dat-" + +(new Date), mv4z;
    if (!!N0x.bqx2x) return;
    N0x.bqx2x = NEJ.C();
    mv4z = N0x.bqx2x.O0x(N0x.cz1x);
    mv4z.cl1x = function () {
        this.cs1x();
        this.P0x = this.constructor[mx4B];
        if (!this.P0x) {
            this.P0x = {};
            this.P0x[mx4B + "-l"] = {};
            this.constructor[mx4B] = this.P0x
        }
    };
    mv4z.qV5a = function (J0x) {
        return this.P0x[J0x]
    };
    mv4z.oK5P = function (J0x, z0x) {
        this.P0x[J0x] = z0x
    };
    mv4z.ko3x = function (J0x, mq4u) {
        var i0x = this.qV5a(J0x);
        if (i0x == null) {
            i0x = mq4u;
            this.oK5P(J0x, i0x)
        }
        return i0x
    };
    mv4z.ckz4D = function (J0x) {
        if (J0x != null) {
            delete this.P0x[J0x];
            return
        }
        k0x.dZ2x(this.P0x, function (r0x, J0x) {
            if (J0x == mx4B + "-l") return;
            this.ckz4D(J0x)
        }, this)
    };
    mv4z.ctV6P = function (J0x) {
        if (!!v0x.KY2x) return v0x.KY2x(J0x)
    };
    mv4z.ckx4B = function (J0x) {
        if (!!v0x.sH6B) return v0x.sH6B(J0x)
    };
    mv4z.cku4y = function (J0x, z0x) {
        if (!!v0x.vr8j) v0x.vr8j(J0x, z0x)
    };
    mv4z.Ej0x = function (J0x, mq4u) {
        var i0x = this.KN2x(J0x);
        if (i0x == null) {
            i0x = mq4u;
            this.vq8i(J0x, i0x)
        }
        return i0x
    };
    mv4z.KN2x = function (J0x) {
        var i0x = this.qV5a(J0x);
        if (i0x != null) return i0x;
        i0x = this.ckx4B(J0x);
        if (i0x != null) this.oK5P(J0x, i0x);
        return i0x
    };
    mv4z.vq8i = function (J0x, z0x) {
        this.cku4y(J0x, z0x);
        this.oK5P(J0x, z0x)
    };
    mv4z.bKB6v = function (J0x) {
        if (J0x != null) {
            delete this.P0x[J0x];
            if (!!v0x.KY2x) v0x.KY2x(J0x);
            return
        }
        k0x.dZ2x(this.P0x, function (r0x, J0x) {
            if (J0x == mx4B + "-l") return;
            this.bKB6v(J0x)
        }, this)
    };
    mv4z.ctW6Q = function () {
        this.bKB6v();
        return this
    };
    mv4z.ctY6S = function (J0x) {
        var i0x = this.P0x[mx4B + "-l"];
        delete i0x[J0x]
    };
    mv4z.baG7z = function (J0x) {
        var i0x = this.P0x[mx4B + "-l"], bg0x = eT2x.slice.call(arguments, 1);
        k0x.be0x(i0x[J0x], function (dv1x) {
            try {
                dv1x.apply(null, bg0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete i0x[J0x]
    };
    mv4z.baH7A = function (J0x, dv1x) {
        dv1x = dv1x || bm0x;
        var j0x = this.P0x[mx4B + "-l"][J0x];
        if (!j0x) {
            j0x = [dv1x];
            this.P0x[mx4B + "-l"][J0x] = j0x;
            return !1
        }
        j0x.push(dv1x);
        return !0
    };
    mv4z.cko4s = function (j0x, bj0x, fY2x) {
        if (!j0x) return !1;
        bj0x = parseInt(bj0x) || 0;
        fY2x = parseInt(fY2x) || 0;
        if (!fY2x) {
            if (!j0x.loaded) return !1;
            fY2x = j0x.length
        }
        if (!!j0x.loaded) fY2x = Math.min(fY2x, j0x.length - bj0x);
        for (var i = 0; i < fY2x; i++) if (!j0x[bj0x + i]) return !1;
        return !0
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, k0x = c0x("nej.u"), N0x = c0x("nej.ut"), b0x, K0x;
    if (!!N0x.KJ2x) return;
    N0x.KJ2x = NEJ.C();
    b0x = N0x.KJ2x.O0x(N0x.bqx2x);
    K0x = N0x.KJ2x.cg1x;
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.uM7F = e0x.key || "id";
        this.ba0x = e0x.data || X0x;
        this.ckn4r = !!e0x.autogc;
        this.ckl4p(e0x.id)
    };
    b0x.bD0x = function () {
        this.bH0x();
        if (!!this.dN1x) {
            this.bKy6s()
        }
    };
    b0x.ckl4p = function (C0x) {
        var R0x;
        if (!!C0x) {
            R0x = this.P0x[C0x];
            if (!R0x) {
                R0x = {};
                this.P0x[C0x] = R0x
            }
        }
        R0x = R0x || this.P0x;
        R0x.hash = R0x.hash || {};
        this.KF2x = R0x
    };
    b0x.bKy6s = function () {
        this.dN1x = window.clearTimeout(this.dN1x);
        var bv0x = {};
        k0x.dZ2x(this.KF2x, function (j0x, J0x) {
            if (J0x == "hash") return;
            if (!k0x.ep2x(j0x)) return;
            k0x.be0x(j0x, function (r0x) {
                if (!r0x) return;
                bv0x[r0x[this.uM7F]] = !0
            }, this)
        }, this);
        k0x.dZ2x(this.Uc5h(), function (r0x, C0x, dI1x) {
            if (!bv0x[C0x]) {
                delete dI1x[C0x]
            }
        })
    };
    b0x.cki4m = function () {
        if (!!this.dN1x) {
            this.dN1x = window.clearTimeout(this.dN1x)
        }
        this.dN1x = window.setTimeout(this.bKy6s.g0x(this), 150)
    };
    b0x.AB9s = function (r0x, Uf5k) {
        r0x = this.bKx6r(r0x, Uf5k) || r0x;
        if (!r0x) return null;
        var J0x = r0x[this.uM7F];
        if (J0x != null) {
            var hA3x = this.Uc5h()[J0x];
            if (!!hA3x) r0x = NEJ.X(hA3x, r0x);
            this.Uc5h()[J0x] = r0x
        }
        delete r0x.bKw6q;
        return r0x
    };
    b0x.bKx6r = bm0x;
    b0x.bby7r = function (J0x, r0x) {
        if (!r0x) return;
        if (!k0x.ep2x(r0x)) {
            var j0x = this.gR3x(J0x), r0x = this.AB9s(r0x, J0x);
            if (!!r0x) j0x.unshift(r0x);
            return
        }
        k0x.mc4g(r0x, this.bby7r.g0x(this, J0x))
    };
    b0x.Ks2x = function (J0x, co1x) {
        var j0x = this.gR3x(J0x);
        j0x.length = Math.max(j0x.length, co1x);
        this.bbX7Q(J0x);
        return this
    };
    b0x.jt3x = function (J0x) {
        return this.gR3x(J0x).length
    };
    b0x.bbX7Q = function (J0x, nq4u) {
        this.gR3x(J0x).loaded = nq4u != !1;
        return this
    };
    b0x.Uh5m = function (J0x) {
        return !!this.gR3x(J0x).loaded
    };
    b0x.rT6N = function (J0x, j0x) {
        this.tc6W(J0x);
        this.bcr7k({key: J0x, offset: 0, limit: j0x.length + 1}, {list: j0x, total: j0x.length})
    };
    b0x.gR3x = function () {
        var ED1x = function (J0x) {
            return (J0x || "") + (!J0x ? "" : "-") + "list"
        };
        return function (J0x) {
            var J0x = ED1x(J0x), j0x = this.KF2x[J0x];
            if (!j0x) {
                j0x = [];
                this.KF2x[J0x] = j0x
            }
            return j0x
        }
    }();
    b0x.Uc5h = function () {
        var dI1x = this.KF2x.hash;
        if (!dI1x) {
            dI1x = {};
            this.KF2x.hash = dI1x
        }
        return dI1x
    };
    b0x.bcC7v = function () {
        var ED1x = function (e0x) {
            return "r-" + e0x.key
        };
        return function (e0x) {
            var hN3x = NEJ.X({}, e0x), mT4X = ED1x(hN3x);
            if (!this.baH7A(mT4X, this.B0x.g0x(this))) {
                hN3x.rkey = mT4X;
                hN3x.onload = this.ckb4f.g0x(this, hN3x);
                this.B0x("dopullrefresh", hN3x)
            }
            return this
        }
    }();
    b0x.ckb4f = function (e0x, j0x) {
        this.bby7r(e0x.key, j0x);
        this.baG7z(e0x.rkey, "onpullrefresh", e0x)
    };
    b0x.nv4z = function () {
        var ED1x = function (e0x) {
            return "r-" + e0x.key + "-" + e0x.offset + "-" + e0x.limit
        };
        return function (e0x) {
            e0x = e0x || X0x;
            var hN3x = {
                key: "" + e0x.key || "",
                ext: e0x.ext || null,
                data: e0x.data || null,
                offset: parseInt(e0x.offset) || 0,
                limit: parseInt(e0x.limit) || 0
            }, j0x = this.gR3x(hN3x.key);
            if (this.cko4s(j0x, hN3x.offset, hN3x.limit)) {
                this.B0x("onlistload", hN3x);
                return this
            }
            var mT4X = ED1x(hN3x);
            if (!this.baH7A(mT4X, this.B0x.g0x(this))) {
                hN3x.rkey = mT4X;
                hN3x.onload = this.bcr7k.g0x(this, hN3x);
                this.B0x("doloadlist", hN3x)
            }
            return this
        }
    }();
    b0x.bcr7k = function () {
        var Bc0x = function (r0x, s0x, j0x) {
            if (!!r0x) {
                return !0
            }
            j0x.splice(s0x, 1)
        };
        return function (e0x, m0x) {
            e0x = e0x || X0x;
            var J0x = e0x.key, bj0x = e0x.offset, bKu6o = this.gR3x(J0x);
            var j0x = m0x || [];
            if (!k0x.ep2x(j0x)) {
                j0x = m0x.result || m0x.list || [];
                var co1x = parseInt(m0x.total);
                if (!isNaN(co1x) || co1x > j0x.length) {
                    this.Ks2x(J0x, co1x)
                }
            }
            k0x.be0x(j0x, function (r0x, s0x) {
                bKu6o[bj0x + s0x] = this.AB9s(r0x, J0x)
            }, this);
            if (j0x.length < e0x.limit) {
                this.bbX7Q(J0x);
                k0x.mc4g(bKu6o, Bc0x)
            }
            this.baG7z(e0x.rkey, "onlistload", e0x)
        }
    }();
    b0x.tc6W = function () {
        var Bc0x = function (r0x, s0x, j0x) {
            j0x.splice(s0x, 1)
        };
        return function (J0x) {
            var j0x = this.gR3x(J0x);
            k0x.mc4g(j0x, Bc0x);
            this.bbX7Q(J0x, !1);
            if (this.ckn4r) {
                this.cki4m()
            }
            return this
        }
    }();
    b0x.bKt6n = function (r0x, Uf5k) {
        return !r0x.bKw6q
    };
    b0x.ek2x = function (C0x) {
        return this.Uc5h()[C0x]
    };
    b0x.cub6V = function (C0x) {
        var r0x = this.ek2x(C0x);
        if (!!r0x) r0x.bKw6q = !0
    };
    b0x.Uk5p = function () {
        var ED1x = function (e0x) {
            return "r-" + e0x.key + "-" + e0x.id
        };
        return function (e0x) {
            e0x = e0x || X0x;
            var C0x = e0x[this.uM7F], hN3x = {id: C0x, ext: e0x.ext, data: e0x.data || {}, key: "" + e0x.key || ""};
            r0x = this.ek2x(C0x);
            hN3x.data[this.uM7F] = C0x;
            if (!!r0x && this.bKt6n(r0x, hN3x.key)) {
                this.B0x("onitemload", hN3x);
                return this
            }
            var mT4X = ED1x(hN3x);
            if (!this.baH7A(mT4X, this.B0x.g0x(this))) {
                hN3x.rkey = mT4X;
                hN3x.onload = this.cjV4Z.g0x(this, hN3x);
                this.B0x("doloaditem", hN3x)
            }
            return this
        }
    }();
    b0x.cjV4Z = function (e0x, r0x) {
        e0x = e0x || X0x;
        this.AB9s(r0x, e0x.key);
        this.baG7z(e0x.rkey, "onitemload", e0x)
    };
    b0x.iG3x = function (e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.xp8h.g0x(this, e0x);
        this.B0x("doadditem", e0x)
    };
    b0x.xp8h = function (e0x, r0x) {
        var J0x = e0x.key;
        r0x = this.AB9s(r0x, J0x);
        if (!!r0x) {
            var eI2x = 0, j0x = this.gR3x(J0x);
            if (!e0x.push) {
                eI2x = -1;
                var bj0x = e0x.offset || 0;
                j0x.splice(bj0x, 0, r0x)
            } else if (j0x.loaded) {
                eI2x = 1;
                j0x.push(r0x)
            } else {
                j0x.length++
            }
        }
        var d0x = {key: J0x, flag: eI2x, data: r0x, action: "add", ext: e0x.ext};
        this.B0x("onitemadd", d0x);
        return d0x
    };
    b0x.EK1x = function (e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.bdp7i.g0x(this, e0x);
        this.B0x("dodeleteitem", e0x)
    };
    b0x.bdp7i = function (e0x, bKr6l) {
        var r0x, J0x = e0x.key;
        if (!!bKr6l) {
            r0x = this.ek2x(e0x.id) || null;
            var C0x = e0x.id, cjT4X = this.uM7F, j0x = this.gR3x(J0x), s0x = k0x.cW1x(j0x, function (hA3x) {
                return !!hA3x && hA3x[cjT4X] == C0x
            });
            if (s0x >= 0) j0x.splice(s0x, 1)
        }
        var d0x = {key: J0x, data: r0x, action: "delete", ext: e0x.ext};
        this.B0x("onitemdelete", d0x);
        return d0x
    };
    b0x.Uo5t = function (e0x) {
        e0x = NEJ.X({}, e0x);
        e0x.onload = this.cjS4W.g0x(this, e0x);
        this.B0x("doupdateitem", e0x)
    };
    b0x.cjS4W = function (e0x, r0x) {
        var J0x = e0x.key;
        if (!!r0x) r0x = this.AB9s(r0x, J0x);
        var d0x = {key: J0x, data: r0x, action: "update", ext: e0x.ext};
        this.B0x("onitemupdate", d0x);
        return d0x
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, k0x = c0x("nej.u"), N0x = c0x("nej.ut"), b0x;
    if (!!N0x.bdx7q) return;
    N0x.bdx7q = NEJ.C();
    b0x = N0x.bdx7q.O0x(N0x.KJ2x);
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.blv0x({
            doloadlist: this.Up5u.g0x(this),
            doloaditem: this.bdB7u.g0x(this),
            doadditem: this.bKq6k.g0x(this),
            dodeleteitem: this.Ur5w.g0x(this),
            doupdateitem: this.Us5x.g0x(this),
            dopullrefresh: this.bKp6j.g0x(this)
        })
    };
    b0x.Up5u = bm0x;
    b0x.bKp6j = bm0x;
    b0x.bdB7u = bm0x;
    b0x.bKq6k = bm0x;
    b0x.Ur5w = bm0x;
    b0x.Us5x = bm0x
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), b0x, K0x;
    p0x.gX3x = NEJ.C();
    b0x = p0x.gX3x.O0x(H0x.bdx7q);
    b0x.cj1x = function () {
        var JW2x = location.protocol + "//" + location.host;
        var cjP4T = function (bs0x, i0x) {
            var bv0x = {conf: {}, data: {}, urls: []};
            k0x.be0x(bs0x, function (J0x, s0x, j0x) {
                var bc0x = p0x.x0x(J0x);
                if (!bc0x) return;
                var bec8U = bKo6i(bc0x.url, i0x[J0x]);
                bv0x.urls.push(bec8U);
                bv0x.conf[bec8U] = bc0x;
                bv0x.data[bec8U] = JSON.stringify(i0x[J0x] == null ? "" : i0x[J0x])
            });
            return bv0x
        };
        var bKo6i = function (V0x, i0x) {
            return V0x.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return i0x[$2] || $1
            })
        };
        var bKn6h = function (bc0x, e0x, d0x) {
            h0x.B0x(window, "requesterror", d0x);
            if (!!d0x.stopped) return;
            var ER1x = bc0x.onerror || e0x.onerror;
            if (k0x.fh2x(ER1x)) {
                this.B0x(ER1x, d0x, e0x)
            } else {
                (ER1x || bm0x).call(this, d0x, e0x)
            }
            var d0x = {result: d0x, option: e0x};
            this.B0x("onerror", d0x);
            if (!d0x.stopped) (bc0x.onmessage || bm0x).call(this, d0x.result.code, d0x.result)
        };
        var bKm6g = function (Q0x, bc0x, e0x) {
            var m0x = Q0x;
            if (k0x.gl2x(bc0x.format)) {
                m0x = bc0x.format.call(this, Q0x, e0x)
            }
            return m0x
        };
        var vu8m = function (Q0x, bc0x, e0x, sO6I) {
            if (k0x.gl2x(bc0x.beforeload)) {
                bc0x.beforeload.call(this, Q0x, e0x, bc0x)
            }
            if (Q0x && Q0x.code != null && Q0x.code != 200) {
                bKn6h.call(this, bc0x, e0x, {
                    key: e0x.key,
                    code: Q0x.code,
                    message: Q0x.message || "",
                    captchaId: Q0x.captchaId,
                    ext: Q0x
                });
                return
            }
            var m0x = Q0x;
            if (!sO6I) {
                m0x = bKm6g.call(this, Q0x, bc0x, e0x)
            } else if (k0x.gl2x(bc0x.format)) {
                var beo8g = [];
                k0x.be0x(sO6I.urls, function (V0x) {
                    beo8g.push(bKm6g.call(this, Q0x[V0x], sO6I.conf[V0x], e0x))
                }, this);
                beo8g.push(e0x);
                m0x = bc0x.format.apply(this, beo8g)
            }
            var tl6f = bc0x.onload || e0x.onload, bKl6f = bc0x.finaly || e0x.finaly || bm0x;
            if (k0x.fh2x(tl6f)) {
                bKl6f.call(this, this.B0x(tl6f, m0x), e0x)
            } else {
                bKl6f.call(this, (tl6f || bm0x).call(this, m0x), e0x)
            }
        };
        var xV9M = function (bc0x, e0x, bP1x) {
            bKn6h.call(this, bc0x, e0x, {key: e0x.key, code: bP1x.code || -1, message: bP1x.message || ""})
        };
        return function (bc0x, e0x) {
            if (k0x.fh2x(bc0x)) {
                bc0x = p0x.x0x(bc0x)
            }
            delete e0x.value;
            (bc0x.filter || bm0x).call(this, e0x, bc0x);
            var Q0x = e0x.value;
            if (!!Q0x) {
                vu8m.call(this, Q0x, bc0x, e0x);
                return
            }
            var V0x, i0x = e0x.data || X0x, vB8t = {
                cookie: !0,
                type: bc0x.rtype || "json",
                method: bc0x.type || "POST",
                onerror: xV9M.g0x(this, bc0x, e0x),
                noescape: bc0x.noescape
            };
            if (k0x.ep2x(bc0x.url)) {
                var sO6I = cjP4T(bc0x.url, i0x);
                V0x = JW2x + "/api/batch";
                vB8t.data = k0x.da1x(sO6I.data);
                vB8t.onload = vu8m.dX2x(this, bc0x, e0x, sO6I);
                vB8t.headers = {"batch-method": "POST"};
                delete sO6I.data
            } else {
                var kZ4d = bc0x.url.indexOf(":") < 0 ? JW2x : "";
                V0x = bKo6i(kZ4d + bc0x.url, i0x);
                vB8t.data = k0x.da1x(e0x.data);
                vB8t.onload = vu8m.dX2x(this, bc0x, e0x)
            }
            if (vB8t.method == "GET") vB8t.query = vB8t.data;
            return v0x.bo0x(V0x, vB8t)
        }
    }();
    b0x.Ey0x = function () {
        var fU2x = /^get|list|pull$/i;
        return function (bKj6d, e0x) {
            var J0x = e0x.key, bc0x = p0x.x0x(J0x.split("-")[0] + "-" + bKj6d);
            if (fU2x.test(bKj6d) && J0x.indexOf("post-") < 0) bc0x.type = "GET";
            this.cj1x(bc0x, e0x)
        }
    }();
    b0x.cuc6W = function (J0x, j0x) {
        var co1x = j0x.length;
        this.bcr7k({key: J0x, offset: 0, limit: co1x + 1}, {list: j0x, total: co1x})
    };
    b0x.Up5u = function (e0x) {
        this.Ey0x("list", e0x)
    };
    b0x.bdB7u = function (e0x) {
        this.Ey0x("get", e0x)
    };
    b0x.bKp6j = function (e0x) {
        this.Ey0x("pull", e0x)
    };
    b0x.bKq6k = function (e0x) {
        this.Ey0x("add", e0x)
    };
    b0x.Ur5w = function (e0x) {
        this.Ey0x("del", e0x)
    };
    b0x.Us5x = function (e0x) {
        this.Ey0x("update", e0x)
    };
    b0x.cjz3x = function (r0x) {
        this.AB9s(r0x)
    };
    H0x.fr2x.A0x({element: window, event: "requesterror"})
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), H0x = c0x("nej.ut"), p0x = c0x("nm.d"), beN8F = {},
        b0x, K0x;
    var tK6E = function (m0x, e0x) {
        m0x.conf = e0x.conf;
        return m0x
    };
    p0x.eO2x({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (Q0x, e0x) {
                return tK6E({mv: Q0x}, e0x)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (m0x, e0x) {
                if (!!m0x.songs && m0x.songs.length > 0) m0x.song = m0x.songs[0]; else m0x.song = beN8F;
                delete m0x.songs;
                return tK6E(m0x, e0x)
            }, filter: function (e0x) {
                e0x.data.ids = "[" + e0x.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: tK6E},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: tK6E},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (m0x, e0x) {
                m0x.playlist = m0x.result;
                delete m0x.result;
                return tK6E(m0x, e0x)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: tK6E},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: tK6E},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: tK6E},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e0x) {
                var j0x = e0x.data.id.split("-");
                e0x.data.radioId = j0x[0];
                e0x.data.asc = j0x[1] == 2;
                e0x.data.limit = 1e3;
                delete e0x.data.id
            }, format: function (Q0x, e0x) {
                var cjy3x = {id: e0x.data.radioId, programs: Q0x.programs};
                return tK6E({djradio: cjy3x}, e0x)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: tK6E},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            }, format: function (m0x, e0x) {
                var vh8Z = {lyric: "", nolyric: true};
                if (m0x.code == 200 && m0x.lrc && m0x.lrc.lyric) {
                    vh8Z.lyric = m0x.lrc.lyric;
                    vh8Z.nolyric = false
                } else {
                    vh8Z.nolyric = true
                }
                return tK6E({lyric: vh8Z}, e0x)
            }
        }
    });
    p0x.vg8Y = NEJ.C();
    b0x = p0x.vg8Y.O0x(p0x.gX3x);
    b0x.cjx3x = function (t0x, cH1x) {
        return this.qV5a(this.UB5G(t0x, cH1x))
    };
    b0x.JF2x = function (t0x, cH1x, e0x) {
        e0x = e0x || {};
        var i0x = this.qV5a(this.UB5G(t0x, cH1x));
        if (i0x && (t0x != 13 && t0x != 19 || e0x.conf && e0x.conf.useCache)) {
            this.B0x("onresourceload", t0x, cH1x, i0x, e0x.conf);
            return
        }
        e0x.data = {id: cH1x};
        e0x.onload = this.cjw3x.g0x(this, t0x, cH1x);
        e0x.onerror = this.cjv3x.g0x(this, t0x, cH1x);
        this.cj1x("res-" + this.Av9m(t0x) + "-get", e0x)
    };
    b0x.cjw3x = function (t0x, cH1x, m0x) {
        var i0x = m0x[this.Av9m(t0x)];
        this.oK5P(this.UB5G(t0x, cH1x), i0x);
        this.B0x("onresourceload", t0x, cH1x, i0x, m0x.conf)
    };
    b0x.cjv3x = function (t0x, cH1x, m0x, e0x) {
        if (m0x.code != 404) {
            this.B0x("onresourceerror", t0x, cH1x, m0x.code);
            return
        }
        this.oK5P(this.UB5G(t0x, cH1x), beN8F);
        this.B0x("onresourceload", t0x, cH1x, beN8F, e0x.conf)
    };
    b0x.cud6X = function (t0x, e0x) {
        this.cj1x("res-" + this.Av9m(t0x) + "-play", e0x)
    };
    b0x.UB5G = function (t0x, cH1x) {
        return "res-" + this.Av9m(t0x) + "-" + cH1x
    };
    b0x.Av9m = function (t0x) {
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
        return bv0x[t0x]
    };
    p0x.vg8Y.Fb1x = function (t0x, cH1x) {
        if (!this.eH2x) this.eH2x = p0x.vg8Y.A0x({});
        return this.eH2x.cjx3x(t0x, cH1x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"), bfO8G = /^[1-9][0-9]*$/, b0x, K0x;
    var LOCAL_LOG_KEY = "local-log";
    p0x.eO2x({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    p0x.hK3x = NEJ.C();
    b0x = p0x.hK3x.O0x(p0x.gX3x);
    b0x.gc2x = function (W0x, bc0x) {
        if (!W0x || !bc0x) return;
        if (k0x.fh2x(bc0x)) {
            try {
                bc0x = JSON.parse(bc0x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a9j)
                }
            }
        }
        if (!k0x.li4m(bc0x)) return;
        this.cj1x("bi-log", {data: {logs: JSON.stringify([{action: W0x, json: bc0x}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W0x + ", json=" + JSON.stringify(bc0x))
        }
    };
    b0x.UD5I = function (mR4V) {
        if (!k0x.ep2x(mR4V)) return;
        this.cj1x("bi-batch-log", {data: {logs: JSON.stringify(mR4V)}})
    };
    b0x.bKi6c = function (bc0x) {
        if (!bc0x || !bc0x.type || !bc0x.rid) return;
        var mI4M = bc0x.type;
        if (bfO8G.test(mI4M)) {
            mI4M = this.Av9m(mI4M)
        }
        if (!mI4M) return;
        if (mI4M == "playlist") mI4M = "list";
        this.gc2x("search", {type: mI4M, id: bc0x.rid || null, keyword: bc0x.keyword || null})
    };
    b0x.Jq2x = function () {
        var cji3x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bc0x) {
            if (!bc0x || !bc0x.type || !bc0x.rid) return;
            if (bc0x.play === undefined) bc0x.play = true;
            var mI4M = bc0x.type;
            if (bfO8G.test(mI4M)) {
                mI4M = this.Av9m(mI4M)
            }
            if (!mI4M) return;
            if (mI4M == "playlist") mI4M = "list";
            var Q0x = {id: bc0x.rid, type: mI4M};
            if (mI4M == "song" && bc0x.source) {
                Q0x.source = this.bKb6V(bc0x.source);
                if (!!bc0x.sourceid) Q0x.sourceid = bc0x.sourceid
            }
            this.gc2x(!bc0x.play ? "addto" : "play", Q0x);
            if (mI4M == "song" && bc0x.hash && bc0x.hash.match(cji3x)) {
                this.gc2x(!bc0x.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b0x.bgA8s = function (C0x, by0x, dJ1x, Ef0x) {
        var Q0x = {type: "song", wifi: 0, download: 0};
        var cje3x = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        Q0x.id = C0x;
        Q0x.time = Math.round(by0x);
        Q0x.end = k0x.fh2x(Ef0x) ? Ef0x : cje3x[Ef0x] || "";
        if (dJ1x && dJ1x.fid) {
            Q0x.source = this.bKb6V(dJ1x.fid);
            Q0x.sourceId = dJ1x.fdata
        }
        this.gc2x("play", Q0x)
    };
    b0x.bJY6S = function (t0x, cH1x) {
        if (!t0x || !cH1x) return;
        if (bfO8G.test(t0x)) t0x = this.Av9m(t0x);
        if (t0x != "playlist" && t0x != "dj") return;
        var bc0x = p0x.x0x("plus-" + t0x + "-count");
        if (!bc0x) return !1;
        this.cj1x(bc0x, {data: {id: cH1x}});
        var R0x = this.ko3x("play-hist-" + t0x, []);
        if (k0x.cW1x(R0x, cH1x) < 0) {
            R0x.push(cH1x);
            return !0
        }
        return !1
    };
    b0x.Av9m = function (t0x) {
        var bv0x = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bv0x[t0x]
    };
    b0x.bKb6V = function (Fg1x) {
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
        return bv0x[Fg1x]
    };
    b0x.ciZ3x = function (gS3x) {
        var mR4V = this.Ej0x(LOCAL_LOG_KEY, []);
        mR4V.unshift(gS3x);
        if (mR4V.length > 200) {
            mR4V.length = 200
        }
        this.vq8i(LOCAL_LOG_KEY, mR4V)
    };
    b0x.ciV3x = function () {
        return this.KN2x(LOCAL_LOG_KEY)
    };
    b0x.eA2x = function (Q0x) {
        this.gc2x("play", Q0x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), v0x = c0x("nej.j"), H0x = c0x("nej.ut"),
        a9j = c0x("nej.e"), k0x = c0x("nej.u"), n0x = c0x("nm.l"), l0x = c0x("nm.x"), p0x = c0x("nm.d");
    if (!p0x.vg8Y) return;
    var R0x = p0x.vg8Y.A0x({onresourceload: ciT3x});
    var wm8e = p0x.hK3x.fV2x();

    function ciT3x(t0x, cH1x, i0x, bc0x) {
        var j0x = [];
        switch (parseInt(t0x)) {
            case 2:
                j0x = i0x;
                break;
            case 13:
                j0x = i0x.tracks;
                break;
            case 18:
                j0x.push(i0x);
                break;
            case 19:
                j0x = i0x.songs;
                break;
            case 21:
                if (i0x.mp && i0x.mp.fee && i0x.mp.pl <= 0) {
                    l0x.bgY8Q(i0x.data.id, i0x.mp.fee);
                    return
                }
                break
        }
        if (l0x.Fl1x(j0x, true, null, t0x == 19 ? {source: "album", sourceid: cH1x} : null) == 0) {
            return
        }
        l0x.eS2x({clazz: "m-layer-w2", bubble: !1, message: bc0x.message})
    }

    function ciR3x(d0x, qB5G, ws8k, eL2x) {
        eL2x = eL2x || {};
        if (d0x.action == "ok") {
            if (ws8k) {
                location.dispatch2("/payfee?songId=" + ws8k)
            } else {
                location.dispatch2("/payfee?fee=" + qB5G || 1)
            }
            wm8e.gc2x("click", {
                type: "tobuyvip",
                name: "box",
                source: eL2x.source || "song",
                sourceid: eL2x.sourceid || ws8k || 0
            })
        } else if (d0x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + ws8k);
            wm8e.gc2x("click", {
                type: "tobuyone",
                name: "box",
                source: eL2x.source || "song",
                sourceid: eL2x.sourceid || ws8k || 0
            })
        }
    }

    function Rb4f(bF0x) {
        l0x.eS2x({clazz: "m-layer-w2", bubble: !1, message: bF0x, btntxt: "ç¥éäº"})
    }

    function QW4a(bF0x, Q0x) {
        Rb4f((Q0x || X0x).toast || bF0x)
    }

    l0x.hW3x = function (bF0x, C0x, t0x, ciP3x, bf0x) {
        bF0x = bF0x || "ç±äºçæä¿æ¤ï¼æ¨æå¨çå°åºææ¶æ æ³ä½¿ç¨ã";
        if (ciP3x && bf0x && bf0x.privilege && bf0x.privilege.toast) {
            v0x.bo0x("/api/song/toast", {
                query: {id: bf0x.id},
                type: "json",
                onload: QW4a.g0x(this, bF0x),
                onerror: QW4a.g0x(this, bF0x)
            })
        } else if (C0x && t0x) {
            R0x.JF2x(t0x, C0x, {conf: {message: bF0x, useCache: t0x != 18}})
        } else {
            Rb4f(bF0x)
        }
    };
    l0x.sN6H = function (qB5G, ws8k, t0x, eL2x, mw4A) {
        var bN1x, pw5B = "m-popup-info", bhY9P = "åé¦è´­ä¹°", bib9S = "é©¬ä¸å»å¼é",
            cA1x = "å±çå¬å¸è¦æ±ï¼å½åæ­æ²é¡»ä»è´¹ä½¿ç¨ã", bJV6P = true;
        try {
            bN1x = top.api.feeMessage || {}
        } catch (e) {
            bN1x = {}
        }
        if (qB5G == 1 || qB5G == 8 || qB5G == 16) {
            if (t0x == "song") {
                pw5B = "m-popup-song-buy";
                cA1x = bN1x["vip2"] || cA1x;
                bib9S = bN1x["vip2button"] || "åæè´­ä¹°";
                bhY9P = bN1x["vip2link"] || bhY9P;
                if (mw4A && mw4A.flag !== undefined) {
                    var bs0x = mw4A.flag.toString(2).split("");
                    if (parseInt(bs0x.pop(), 10) == 1) {
                        bJV6P = false
                    }
                }
            } else {
                cA1x = bN1x["vip"] || cA1x
            }
        } else if (qB5G == 4) {
            cA1x = bN1x["album"] || cA1x;
            bib9S = "ç«å³è®¢è´­"
        } else {
            cA1x = bN1x["unknow"] || cA1x
        }
        l0x.jn3x({
            clazz: "m-layer-w5",
            html: a9j.bQ1x(pw5B, {
                songTxt: bhY9P,
                tip: cA1x,
                oktext: bib9S,
                cctext: "ä»¥ååè¯´",
                showSongText: bJV6P
            }),
            onaction: ciR3x.dX2x(null, qB5G, ws8k, eL2x)
        })
    };
    l0x.bJU6O = function (hh3x, hc3x) {
        l0x.gT3x({
            title: "æç¤º",
            message: "å±çå¬å¸è¦æ±ï¼è¯¥æ­æ²é¡»ä¸è½½åæ­æ¾",
            btnok: "ä¸è½½",
            btncc: "åæ¶",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t0x) {
                if (t0x == "ok") {
                    l0x.TP5U({id: hh3x, type: hc3x})
                }
            }
        })
    };
    l0x.bgY8Q = function (nZ5e, qB5G) {
        var bN1x, cA1x = "å±çå¬å¸è¦æ±ï¼å½åæ­æ²é¡»ä»è´¹ä½¿ç¨ã";
        try {
            bN1x = top.api.feeMessage || {}
        } catch (e) {
            bN1x = {}
        }
        if (qB5G == 1 || qB5G == 8) {
            cA1x = bN1x["vip"] || cA1x
        } else if (qB5G == 4) {
            cA1x = bN1x["album"] || cA1x
        } else {
            cA1x = bN1x["unknow"] || cA1x
        }
        return l0x.jn3x({
            clazz: "m-layer-w5",
            html: a9j.bQ1x("m-popup-info", {tip: cA1x, oktext: "é©¬ä¸å»å¼é", cctext: "ä»¥ååè¯´"}),
            onaction: function (d0x) {
                if (d0x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nZ5e);
                    wm8e.gc2x("click", {type: "tobuyone", name: "box", source: "mv", sourceid: nZ5e || 0})
                }
            }
        })
    };
    l0x.Fl1x = function () {
        function compareFee(ciL3x, ciK3x) {
            var bv0x = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bv0x[ciL3x] || 0) - (bv0x[ciK3x] || 0)
        }

        return function (j0x, cA1x, te6Y, eL2x) {
            te6Y = te6Y || {};
            var wC8u = [], Fr1x = {}, bJT6N = 0, bJS6M = 0, Fs1x = null;
            if (!j0x || !j0x.length) return wC8u;
            k0x.be0x(j0x, function (bf0x) {
                var eW2x = l0x.ot5y(bf0x);
                if (eW2x == 0) {
                    wC8u.push(bf0x)
                } else if (eW2x == 10) {
                    if (bf0x.privilege) {
                        bf0x.fee = bf0x.privilege.fee
                    }
                    if (compareFee(bf0x.fee, Fr1x.fee) > 0) {
                        Fr1x = bf0x
                    }
                } else if (eW2x == 11) {
                    ++bJT6N;
                    if (!te6Y.play) wC8u.push(bf0x)
                } else if (eW2x == 1e3) {
                    ++bJS6M;
                    if (!te6Y.download) wC8u.push(bf0x)
                } else if (eW2x == 100) {
                    Fs1x = bf0x
                }
            });
            if (wC8u.length == 0 && cA1x) {
                if (bJT6N == j0x.length) {
                    var rg6a = j0x[0].privilege || {};
                    if (rg6a.payed) {
                        l0x.hW3x("å±çå¬å¸è¦æ±ï¼è¯¥æ­æ²é¡»ä¸è½½åæ­æ¾")
                    } else {
                        l0x.sN6H(rg6a.fee, null, null, eL2x)
                    }
                } else if (bJS6M == j0x.length) {
                    l0x.hW3x("å çææ¹è¦æ±ï¼è¯¥æ­æ²ä¸æ¯æä¸è½½")
                } else if (Fr1x.id) {
                    l0x.sN6H(Fr1x.fee, Fr1x.id, null, eL2x, Fr1x.privilege)
                } else {
                    if (Fs1x && j0x.length == 1 && Fs1x.privilege && Fs1x.privilege.st < 0 && Fs1x.privilege.toast) {
                        l0x.hW3x(null, null, null, true, Fs1x)
                    } else {
                        l0x.hW3x()
                    }
                }
            }
            return wC8u
        }
    }();
    l0x.ot5y = function (bf0x) {
        if (!bf0x) return 0;
        var eW2x = bf0x.privilege;
        if (bf0x.program) return 0;
        if (window.GAbroad) return 100;
        if (eW2x) {
            if (eW2x.st != null && eW2x.st < 0) {
                return 100
            }
            if (eW2x.fee > 0 && eW2x.fee != 8 && eW2x.payed == 0 && eW2x.pl <= 0) return 10;
            if (eW2x.fee == 16) return 11;
            if ((eW2x.fee == 0 || eW2x.payed) && eW2x.pl > 0 && eW2x.dl == 0) return 1e3;
            if (eW2x.pl == 0 && eW2x.dl == 0) return 100;
            return 0
        } else {
            var dY2x = bf0x.status != null ? bf0x.status : bf0x.st != null ? bf0x.st : 0;
            if (bf0x.status >= 0) return 0;
            if (bf0x.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), N0x = c0x("nej.ui"), b0x;
    if (!!N0x.UX5c) return;
    var hR3x = a9j.rH6B(".#<uispace>{position:absolute;background:#fff;}");
    N0x.UX5c = NEJ.C();
    b0x = N0x.UX5c.O0x(N0x.Pm3x);
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.bU1x([[document, "click", this.rb5g.g0x(this)]]);
        this.ciG3x = !!e0x.nostop;
        this.bJR6L = {top: e0x.top, left: e0x.left}
    };
    b0x.bD0x = function () {
        delete this.xa8S;
        delete this.bjU9L;
        delete this.ph5m;
        delete this.bJQ6K;
        delete this.Ve5j;
        delete this.bJR6L;
        this.bH0x()
    };
    b0x.bY1x = function () {
        this.kW4a = hR3x
    };
    b0x.bS1x = function () {
        this.cb1x();
        this.yI9z = this.o0x;
        h0x.q0x(this.o0x, "click", this.ciB3x.g0x(this))
    };
    b0x.rb5g = function (d0x) {
        if (d0x.button != 2) this.bq0x()
    };
    b0x.ciB3x = function (d0x) {
        if (this.ciG3x) return;
        h0x.sh6b(d0x);
        var E0x = h0x.U0x(d0x);
        if (E0x.tagName == "A") h0x.cd1x(d0x)
    };
    b0x.ciA3x = function () {
        var cP1x = /\s+/i;
        return function (na4e) {
            na4e = (na4e || "").trim().toLowerCase().split(cP1x);
            na4e[0] = na4e[0] || "bottom";
            na4e[1] = na4e[1] || "left";
            this.ph5m = na4e
        }
    }();
    b0x.ciu3x = function (na4e) {
        var m0x = {}, lW4a = this.bjU9L, cue6Y = a9j.oD5I(), dq1x = this.o0x.offsetWidth, cq1x = this.o0x.offsetHeight;
        switch (na4e[0]) {
            case"top":
                m0x.top = lW4a.top - cq1x;
                m0x.left = na4e[1] == "right" ? lW4a.left + lW4a.width - dq1x : lW4a.left;
                break;
            case"left":
                m0x.left = lW4a.left - dq1x;
                m0x.top = na4e[1] == "bottom" ? lW4a.top + lW4a.height - cq1x : lW4a.top;
                break;
            case"right":
                m0x.left = lW4a.left + lW4a.width;
                m0x.top = na4e[1] == "bottom" ? lW4a.top + lW4a.height - cq1x : lW4a.top;
                break;
            default:
                m0x.top = lW4a.top + lW4a.height;
                m0x.left = na4e[1] == "right" ? lW4a.left + lW4a.width - dq1x : lW4a.left;
                break
        }
        return m0x
    };
    b0x.HI1x = function () {
        if (!this.bJQ6K) {
            this.fT2x(this.bJR6L);
            return
        }
        if (!!this.Ve5j) {
            this.fT2x(this.xa8S);
            return
        }
        if (!!this.bjU9L) this.fT2x(this.ciu3x(this.ph5m))
    };
    b0x.chU3x = function (E0x, dh1x, d0x) {
        dh1x = dh1x || X0x;
        var bJE6y = a9j.oD5I(), cO1x = h0x.kj3x(d0x) + (dh1x.left || 0), gL2x = h0x.nj4n(d0x) + (dh1x.top || 0),
            dq1x = E0x.offsetWidth + (dh1x.right || 0), cq1x = E0x.offsetHeight + (dh1x.bottom || 0),
            FF1x = bJE6y.scrollWidth, bky9p = bJE6y.scrollHeight, bkC9t = cO1x + dq1x, bkK0x = gL2x + cq1x;
        switch (this.ph5m[0]) {
            case"top":
                gL2x = bkK0x > bky9p ? gL2x - cq1x : gL2x;
                if (this.ph5m[1] == "right") {
                    cO1x = cO1x - dq1x < 0 ? 0 : cO1x - dq1x
                } else {
                    cO1x = bkC9t > FF1x ? FF1x - dq1x : cO1x
                }
                break;
            case"left":
                cO1x = bkC9t > FF1x ? FF1x - dq1x : cO1x;
                if (this.ph5m[1] == "top") {
                    gL2x = bkK0x > bky9p ? gL2x - cq1x : gL2x
                } else {
                    gL2x = gL2x - cq1x < 0 ? gL2x : gL2x - cq1x
                }
                break;
            case"right":
                cO1x = cO1x - dq1x < 0 ? 0 : cO1x - dq1x;
                if (this.ph5m[1] == "top") {
                    gL2x = bkK0x > bky9p ? gL2x - cq1x : gL2x
                } else {
                    gL2x = gL2x - cq1x < 0 ? gL2x : gL2x - cq1x
                }
                break;
            default:
                gL2x = gL2x - cq1x < 0 ? gL2x : gL2x - cq1x;
                if (this.ph5m[1] == "left") {
                    cO1x = bkC9t > FF1x ? FF1x - dq1x : cO1x
                } else {
                    cO1x = cO1x - dq1x < 0 ? 0 : cO1x - dq1x
                }
                break
        }
        return {top: gL2x, left: cO1x}
    };
    b0x.bkL0x = function () {
        var chO3x = function (E0x, dh1x) {
            E0x = a9j.x0x(E0x);
            if (!E0x) return;
            dh1x = dh1x || X0x;
            var bj0x = a9j.hM3x(E0x);
            return {
                top: bj0x.y - (dh1x.top || 0),
                left: bj0x.x - (dh1x.left || 0),
                width: E0x.offsetWidth + (dh1x.right || 0),
                height: E0x.offsetHeight + (dh1x.bottom || 0)
            }
        };
        return function (e0x) {
            e0x = e0x || X0x;
            this.Ve5j = e0x.event;
            this.ciA3x(e0x.align);
            if (!!this.Ve5j) this.xa8S = this.chU3x(e0x.target, e0x.delta, this.Ve5j);
            this.bjU9L = chO3x(e0x.target, e0x.delta);
            this.bJQ6K = !!e0x.fitable;
            this.M0x();
            return this
        }
    }()
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), N0x = c0x("nej.ui"), b0x,
        K0x;
    if (!!N0x.Ah9Y) return;
    N0x.Ah9Y = NEJ.C();
    b0x = N0x.Ah9Y.O0x(N0x.Su4y);
    K0x = N0x.Ah9Y.cg1x;
    N0x.Ah9Y.cuh6b = function () {
        var chD3x = function (d0x, C0x, fd2x, jp3x, PB4F) {
            var cp1x, J0x = C0x + "-i", R0x = fd2x.xF9w, bJy6s = !!jp3x.noclear, bJw6q = !!jp3x.toggled;
            if (k0x.gl2x(jp3x.onbeforeclick)) {
                var Vv5A = jp3x.noclear, chx3x = jp3x.toggled;
                try {
                    jp3x.onbeforeclick(jp3x)
                } catch (e) {
                }
                bJy6s = !!jp3x.noclear;
                bJw6q = !!jp3x.toggled;
                jp3x.toggled = chx3x;
                jp3x.noclear = Vv5A
            }
            var Em0x = R0x[J0x];
            if (bJw6q && !!Em0x) {
                Em0x.bq0x();
                return
            }
            h0x.bh0x(d0x);
            if (!bJy6s) {
                h0x.B0x(document, "click");
                cp1x = fd2x.A0x(jp3x)
            } else {
                cp1x = fd2x.csJ6D(jp3x, !0)
            }
            R0x[J0x] = cp1x;
            cp1x.up7i("onbeforerecycle", function () {
                delete R0x[J0x]
            });
            cp1x.bkL0x(PB4F)
        };
        return function (f0x, e0x) {
            f0x = a9j.x0x(f0x);
            if (!f0x) return this;
            if (!this.xF9w) this.xF9w = {};
            var C0x = a9j.kJ4N(f0x);
            if (!!this.xF9w[C0x]) return this;
            e0x = NEJ.X({}, e0x);
            var PB4F = NEJ.EX({align: "", delta: null, fitable: !1}, e0x);
            PB4F.target = C0x;
            e0x.destroyable = !0;
            if (!e0x.fixed) {
                PB4F.fitable = !0;
                e0x.parent = document.body
            }
            this.xF9w[C0x] = [C0x, e0x.event || "click", chD3x.dX2x(null, C0x, this, e0x, PB4F)];
            h0x.q0x.apply(h0x, this.xF9w[C0x]);
            return this
        }
    }();
    N0x.Ah9Y.cul6f = function (f0x) {
        if (!this.xF9w) return this;
        var C0x = a9j.kJ4N(f0x), d0x = this.xF9w[C0x];
        if (!d0x) return this;
        delete this.xF9w[C0x];
        h0x.mo4s.apply(h0x, d0x);
        var cp1x = this.xF9w[C0x + "-i"];
        if (!!cp1x) cp1x.bq0x();
        return this
    };
    b0x.bnL0x = function () {
        return N0x.UX5c.A0x(this.bR1x)
    };
    b0x.OO3x = function () {
        K0x.OO3x.apply(this, arguments);
        this.bR1x.top = null;
        this.bR1x.left = null;
        this.bR1x.nostop = !1
    };
    b0x.bkL0x = function (e0x) {
        if (!!this.nS5X) this.nS5X.bkL0x(e0x);
        return this
    }
})();
(function () {
    var c0x = NEJ.P, bd0x = c0x("nej.ui"), n0x = c0x("nm.l"), b0x, K0x;
    n0x.blL0x = NEJ.C();
    b0x = n0x.blL0x.O0x(bd0x.Ah9Y);
    b0x.bk0x = function (e0x) {
        e0x.nohack = true;
        this.bl0x(e0x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), n0x = c0x("nm.l"), b0x, K0x;
    n0x.Z0x = NEJ.C();
    b0x = n0x.Z0x.O0x(n0x.blL0x);
    K0x = n0x.Z0x.cg1x;
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.eh2x = e0x.type || 1
    };
    b0x.bS1x = function () {
        this.cb1x();
        this.o0x = a9j.mM4Q(this.chu3x());
        var j0x = a9j.cS1x(this.o0x);
        this.oW5b = j0x[0];
        this.ch1x = j0x[1]
    };
    b0x.chu3x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b0x.HI1x = function () {
        var z0x = {}, cc1x = this.o0x.style, iM3x = a9j.oD5I(), mD4H = {left: iM3x.scrollLeft, top: iM3x.scrollTop},
            dh1x = {left: iM3x.clientWidth - this.o0x.offsetWidth, top: iM3x.clientHeight - this.o0x.offsetHeight};
        z0x.top = Math.max(0, mD4H.top + dh1x.top / 2);
        z0x.left = Math.max(0, mD4H.left + dh1x.left / 2);
        this.nS5X.fT2x(z0x)
    };
    b0x.M0x = function (e0x) {
        K0x.M0x.call(this);
        this.HI1x();
        this.eh2x == 1 ? a9j.eu2x(this.oW5b, "u-icn-32", "u-icn-31") : a9j.eu2x(this.oW5b, "u-icn-31", "u-icn-32");
        this.ch1x.innerHTML = e0x.tip || ""
    };
    n0x.Z0x.M0x = function () {
        var eX2x;
        return function (e0x) {
            clearTimeout(eX2x);
            if (e0x.parent === undefined) e0x.parent = document.body;
            if (e0x.autoclose === undefined) e0x.autoclose = true;
            e0x.clazz = "m-sysmsg";
            !!this.eH2x && this.eH2x.S0x();
            this.eH2x = this.A0x(e0x);
            this.eH2x.M0x(e0x);
            if (e0x.autoclose) eX2x = setTimeout(this.bq0x.g0x(this), 2e3)
        }
    }();
    n0x.Z0x.bq0x = function () {
        !!this.eH2x && this.eH2x.bq0x()
    }
})();
(function () {
    var c0x = NEJ.P, v0x = c0x("nej.j"), k0x = c0x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v0x.bo0x = v0x.bo0x.eb2x(function (d0x) {
            e0x = d0x.args[1];
            e0x.query = e0x.query || {};
            if (k0x.fh2x(e0x.query)) e0x.query = k0x.hk3x(e0x.query);
            e0x.query.ref = "mail"
        })
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, eT2x = NEJ.R, H0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        v0x = c0x("nej.j"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), J0x = "playlist-tracks_", b0x;
    p0x.eO2x({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (Q0x, e0x) {
                this.chs3x(Q0x.playlist);
                return {total: 0, list: eT2x}
            }, onerror: function () {
                this.B0x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (Q0x, e0x) {
                var iJ3x = Q0x.playlist;
                iJ3x.creator = GUser;
                iJ3x.isHost = !0;
                iJ3x.typeFlag = "playlist";
                return iJ3x
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.hr3x, "listchange", d0x)
            }, onmessage: function () {
                var lA4E = {
                    507: "æ­åæ°éè¶è¿ä¸éï¼",
                    405: "ä½ æä½å¤ªå¿«äºï¼è¯·ä¼æ¯ä¸ä¼åè¯ï¼",
                    406: "ä½ æä½å¤ªå¿«äºï¼è¯·ä¼æ¯ä¸ä¼åè¯ï¼"
                };
                return function (bZ1x) {
                    n0x.Z0x.M0x({tip: lA4E[bZ1x] || "åå»ºå¤±è´¥", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e0x) {
                e0x.id = e0x.data.pid
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.hr3x, "listchange", d0x)
            }, onmessage: function () {
                var lA4E = {
                    404: "æ­åä¸å­å¨ï¼",
                    405: "ä½ æä½å¤ªå¿«äºï¼è¯·ä¼æ¯ä¸ä¼åè¯ï¼",
                    406: "ä½ æä½å¤ªå¿«äºï¼è¯·ä¼æ¯ä¸ä¼åè¯ï¼"
                };
                return function (bZ1x) {
                    n0x.Z0x.M0x({tip: lA4E[bZ1x] || "å é¤å¤±è´¥", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e0x) {
                var eL2x = e0x.ext || {};
                e0x.ext = NEJ.X(eL2x, e0x.data);
                e0x.data = {id: e0x.ext.id}
            }, format: function (Q0x, e0x) {
                n0x.Z0x.M0x({tip: "æ¶èæå" + (Q0x.point > 0 ? ' è·å¾<em class="s-fc6">' + Q0x.point + "ç§¯å</em>" : "")});
                var r0x = e0x.ext;
                r0x.subscribedCount++;
                return r0x
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.chp3x, "listchange", d0x);
                h0x.B0x(p0x.chp3x, "itemchange", {attr: "subscribedCount", data: d0x.data})
            }, onmessage: function () {
                var lA4E = {
                    404: "æ­åä¸å­å¨ï¼",
                    501: "æ­åå·²ç»æ¶èï¼",
                    506: "æ­åæ¶èæ°éè¶è¿ä¸éï¼"
                };
                return function (bZ1x) {
                    n0x.Z0x.M0x({type: 2, tip: lA4E[bZ1x] || "æ¶èå¤±è´¥ï¼è¯·ç¨ååè¯ï¼"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e0x) {
                e0x.id = e0x.data.id = e0x.data.pid
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.hr3x, "listchange", d0x)
            }, onmessage: function () {
                var lA4E = {
                    404: "æ­åä¸å­å¨ï¼",
                    405: "ä½ æä½å¤ªå¿«äºï¼è¯·ä¼æ¯ä¸ä¼åè¯ï¼",
                    406: "ä½ æä½å¤ªå¿«äºï¼è¯·ä¼æ¯ä¸ä¼åè¯ï¼"
                };
                return function (bZ1x) {
                    n0x.Z0x.M0x({tip: lA4E[bZ1x], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e0x) {
                var i0x = e0x.data, Vx5C = {};
                Vx5C["playlist-update-name"] = {id: i0x.id, name: i0x.name};
                Vx5C["playlist-update-tag"] = {id: i0x.id, tags: i0x.tags.join(";")};
                Vx5C["playlist-update-desc"] = {id: i0x.id, desc: i0x.description};
                e0x.data = Vx5C;
                e0x.ext = i0x
            },
            format: function (T0x, pe5j, OV3x, e0x) {
                if (T0x.code == 200 && pe5j.code == 200 && OV3x.code == 200) {
                    e0x.ext.allSuccess = true;
                    n0x.Z0x.M0x({tip: "ä¿å­æå"})
                } else if (T0x.code == 407 || pe5j.code == 407 || OV3x.code == 407) {
                    e0x.ext.allSuccess = false;
                    n0x.Z0x.M0x({type: 2, tip: "è¾å¥åå®¹åå«å³é®å­"})
                } else {
                    e0x.ext.allSuccess = false;
                    n0x.Z0x.M0x({type: 2, tip: "ä¿å­å¤±è´¥"})
                }
                return this.ek2x(e0x.ext.id)
            },
            finaly: function (d0x, e0x) {
                h0x.B0x(p0x.hr3x, "listchange", d0x)
            },
            onmessage: function (bZ1x) {
                n0x.Z0x.M0x({type: 2, tip: "ä¿å­å¤±è´¥"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (Q0x, e0x) {
                var r0x = this.ek2x(e0x.ext.id);
                if (Q0x.code == 200) r0x.name = e0x.ext.name;
                return Q0x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (Q0x, e0x) {
                var r0x = this.ek2x(e0x.ext.id);
                if (Q0x.code == 200) r0x.tags = e0x.ext.tags;
                return Q0x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (Q0x, e0x) {
                var r0x = this.ek2x(e0x.ext.id);
                if (Q0x.code == 200) r0x.description = e0x.ext.description;
                return Q0x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e0x) {
                e0x.url = e0x.data.url;
                delete e0x.data.url
            }, format: function (Q0x, e0x) {
                n0x.Z0x.M0x({tip: "ä¿å­æå"});
                var r0x = this.ek2x(e0x.data.id);
                r0x.coverImgUrl = e0x.url;
                e0x.ext = r0x;
                return r0x
            }, onmessage: function (bZ1x) {
                n0x.Z0x.M0x({type: 2, tip: "ä¿å­å¤±è´¥"})
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.hr3x, "itemchange", {attr: "coverImgUrl", data: e0x.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (Q0x, e0x) {
                var iJ3x = this.ek2x(e0x.data.id);
                if (!iJ3x) return;
                iJ3x.playCount++;
                h0x.B0x(p0x.hr3x, "itemchange", {attr: "playcount", data: iJ3x})
            }
        }
    });
    p0x.hr3x = NEJ.C();
    b0x = p0x.hr3x.O0x(p0x.gX3x);
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bJr6l = function () {
        var cU1x = GUser.userId;
        this.nv4z({limit: 1001, key: "playlist_my-" + cU1x, data: {offset: 0, limit: 1001, uid: cU1x}})
    };
    b0x.chs3x = function (j0x) {
        var cU1x = GUser.userId, iP3x = [], bJp6j = [];
        k0x.be0x(j0x, function (r0x) {
            r0x.typeFlag = "playlist";
            if (r0x.creator && r0x.creator.userId == cU1x) {
                if (r0x.specialType == 5) r0x.name = "æåæ¬¢çé³ä¹";
                r0x.isHost = !0;
                iP3x.push(r0x)
            } else {
                bJp6j.push(r0x)
            }
        });
        this.rT6N("playlist_new-" + cU1x, iP3x);
        this.rT6N("playlist_fav-" + cU1x, bJp6j)
    };
    b0x.chi3x = function (i0x) {
        this.cj1x("playlist-update-cover", {data: i0x})
    };
    b0x.cun6h = function () {
        var OI3x = this.cgO3x.x0x("host-plist");
        if (OI3x.length == 0) {
            return
        }
        if (OI3x.length == 1 && OI3x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = OI3x.length; i < len; i++) {
            var r0x = OI3x[i];
            if (r0x.trackCount > 0) return r0x.id
        }
        return this.cgO3x.x0x("host-plist")[0].id
    };
    b0x.cgM3x = function (C0x) {
        if (GUser && GUser.userId > 0) {
            this.cj1x("playlist-upcount", {data: {id: C0x}})
        }
    };
    b0x.Dk0x = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b0x.cuo6i = function () {
        return GUser.userId
    };
    b0x.bnw0x = function (r0x) {
        if (r0x.userId == GUser.userId && r0x.specialType == 5) r0x.name = "æåæ¬¢çé³ä¹";
        h0x.B0x(this.constructor, "itemchange", {data: this.AB9s(r0x)});
        return r0x
    };
    H0x.fr2x.A0x({element: p0x.hr3x, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c0x = NEJ.P, eT2x = NEJ.R, bm0x = NEJ.F, X0x = NEJ.O, H0x = c0x("nej.ut"), h0x = c0x("nej.v"),
        k0x = c0x("nej.u"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), b0x, K0x;
    p0x.eO2x({
        "program-get": {
            url: "/api/dj/program/detail", format: function (Q0x) {
                return Q0x.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e0x) {
                e0x.data.limit = 1e3;
                delete e0x.data.id
            }, format: function (Q0x, e0x) {
                var bJj6d = [], zY9P = Q0x.programs;
                if (zY9P) {
                    for (var i = 0, l = zY9P.length; i < l; i++) {
                        if (zY9P[i].programFeeType < 10 || zY9P[i].buyed) {
                            bJj6d.push(zY9P[i])
                        }
                    }
                }
                return bJj6d
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (Q0x, e0x) {
                return Q0x.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e0x) {
                e0x.ext = e0x.data;
                e0x.data = {id: e0x.ext.id};
                e0x.id = e0x.data.id
            }, format: function (Q0x, e0x) {
                n0x.Z0x.M0x({tip: "æ¶èæå"});
                var r0x = e0x.ext;
                r0x.subscribedCount++;
                r0x.subscribed = !0;
                return r0x
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.pn5s, "listchange", d0x)
            }, onmessage: function () {
                var lA4E = {404: "èç®ä¸å­å¨ï¼", 501: "èç®å·²æ¶èï¼"};
                return function (bZ1x) {
                    n0x.Z0x.M0x({type: 2, tip: lA4E[bZ1x] || "æ¶èå¤±è´¥ï¼"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d0x, e0x) {
                h0x.B0x(p0x.pn5s, "listchange", d0x)
            }, onmessage: function () {
                var lA4E = {404: "èç®ä¸å­å¨ï¼", 502: "æ²¡ææ¶èæ­¤èç®ï¼"};
                return function (bZ1x) {
                    l0x.bnH0x({txt: lA4E[bZ1x] || "åæ¶æ¶èå¤±è´¥ï¼"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e0x) {
                var r0x = this.ek2x(e0x.data.id) || X0x;
                e0x.ext = (r0x.listenerCount || 0) + 1
            }, format: function (Q0x, e0x) {
                var r0x = this.ek2x(e0x.data.id);
                if (!!r0x) {
                    r0x.listenerCount = Math.max(e0x.ext, r0x.listenerCount || 0)
                }
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.pn5s, "itemchange", {attr: "playCount", data: this.ek2x(e0x.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e0x) {
                e0x.data = {threadId: "A_DJ_1_" + e0x.id}
            }, format: function (Q0x, e0x) {
                var r0x = e0x.ext.data || this.ek2x(e0x.id);
                r0x.liked = true;
                r0x.likedCount++;
                e0x.ext.data = r0x;
                try {
                    top.player.setLike(r0x)
                } catch (e) {
                }
                return r0x
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.pn5s, "itemchange", {attr: "likedCount", data: e0x.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e0x) {
                e0x.data = {threadId: "A_DJ_1_" + e0x.id}
            }, format: function (Q0x, e0x) {
                var r0x = e0x.ext.data || this.ek2x(e0x.id);
                r0x.liked = false;
                r0x.likedCount--;
                e0x.ext.data = r0x;
                try {
                    top.player.setLike(r0x)
                } catch (e) {
                }
                return r0x
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.pn5s, "itemchange", {attr: "likedCount", data: e0x.ext.data})
            }
        }
    });
    p0x.pn5s = NEJ.C();
    b0x = p0x.pn5s.O0x(p0x.gX3x);
    b0x.cur6l = function () {
        var cU1x = GUser.userId;
        this.nv4z({limit: 1001, key: "program_fav-" + cU1x, data: {offset: 0, limit: 1e3, uid: cU1x}})
    };
    b0x.cus6m = function (cR1x) {
        var oB5G = cR1x[this.uM7F];
        l0x.cgA3x(4, function (R0x) {
            R0x.rT6N("track_program-" + oB5G, cR1x.songs)
        });
        delete cR1x.songs;
        var bJ1x = cR1x.mainSong;
        l0x.cgA3x(4, function (R0x) {
            R0x.rT6N("track_program_main-" + oB5G, !bJ1x ? [] : [bJ1x])
        });
        cR1x.mainSong = (bJ1x || X0x).id
    };
    b0x.cuu6o = function (C0x) {
        var cR1x = this.ek2x(C0x), cU1x = localCache.TU5Z("host.profile.userId");
        return !!cR1x && cR1x.dj.userId == cU1x
    };
    b0x.cuv6p = function (C0x) {
        return !1
    };
    b0x.bnw0x = function (r0x) {
        h0x.B0x(this.constructor, "itemchange", {attr: "detail", data: this.AB9s(r0x)});
        return r0x
    };
    b0x.cgM3x = function (C0x) {
        this.cj1x("program-update-count", {data: {id: C0x}})
    };
    l0x.bJc6W = function (e0x) {
        var R0x = p0x.pn5s.A0x({
            onitemadd: function () {
                (e0x.onsuccess || bm0x)()
            }, onerror: function () {
                (e0x.onerror || bm0x)()
            }
        });
        if (e0x.data.liked) {
            R0x.Oy3x(e0x.data)
        } else {
            R0x.uF7y(e0x.data)
        }
    };
    b0x.uF7y = function (cR1x) {
        if (!l0x.hb3x()) return;
        var cm1x = {ext: {}};
        if (k0x.li4m(cR1x)) {
            cm1x.id = cR1x.id;
            cm1x.ext.data = cR1x
        } else {
            cm1x.id = cR1x
        }
        this.cj1x("program-like", cm1x)
    };
    b0x.Oy3x = function (cR1x) {
        if (!l0x.hb3x()) return;
        var cm1x = {ext: {}};
        if (k0x.li4m(cR1x)) {
            cm1x.id = cR1x.id;
            cm1x.ext.data = cR1x
        } else {
            cm1x.id = cR1x
        }
        this.cj1x("program-unlike", cm1x)
    };
    H0x.fr2x.A0x({element: p0x.pn5s, event: ["listchange", "itemchange"]})
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, eT2x = NEJ.R, H0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        v0x = c0x("nej.j"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), l0x = c0x("nm.x"), J0x = "playlist-tracks_",
        l0x = c0x("nm.x"), b0x;
    p0x.eO2x({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e0x) {
                e0x.data.c = JSON.stringify([{id: e0x.data.id}])
            }, format: function (Q0x, e0x) {
                var bf0x = l0x.Da0x(Q0x.songs[0]);
                bf0x.privilege = Q0x.privileges[0];
                return bf0x
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e0x) {
                e0x.data.n = 1e3
            }, format: function (Q0x, e0x) {
                var gJ2x = [];
                this.rB6v.bnw0x(Q0x.playlist);
                k0x.be0x(Q0x.playlist.tracks, function (bJ1x, s0x) {
                    var bJb6V = l0x.Da0x(bJ1x);
                    bJb6V.privilege = Q0x.privileges[s0x];
                    gJ2x.push(bJb6V)
                }, this);
                return gJ2x
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (Q0x, e0x) {
                var gJ2x = [];
                k0x.be0x(Q0x.songs, function (bf0x) {
                    gJ2x.push(l0x.Da0x(bf0x))
                });
                return gJ2x
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e0x) {
                var bv0x = {}, i0x = e0x.data, cgr3x = this.gR3x(e0x.key) || [];
                CX0x = [];
                k0x.be0x(cgr3x, function (bJ1x) {
                    var C0x = k0x.li4m(bJ1x) ? bJ1x.id : bJ1x;
                    bv0x[C0x] = true
                });
                e0x.ext = [];
                k0x.be0x(i0x.tracks, function (bJ1x) {
                    var C0x = k0x.li4m(bJ1x) ? bJ1x.id : bJ1x;
                    if (!bv0x[C0x]) {
                        CX0x.push(C0x);
                        bv0x[C0x] = true;
                        e0x.ext.push(bJ1x)
                    }
                });
                i0x.trackIds = JSON.stringify(CX0x);
                i0x.op = "add";
                if (!CX0x.length) {
                    e0x.value = {code: 502}
                }
            }, format: function (Q0x, e0x) {
                n0x.Z0x.M0x({tip: "å·²æ·»å è³æ­å"});
                var iJ3x = this.rB6v.ek2x(e0x.data.pid);
                if (!!Q0x.coverImgUrl) iJ3x.coverImgUrl = Q0x.coverImgUrl;
                k0x.mc4g(e0x.ext, function (bJ1x) {
                    this.xp8h(e0x, k0x.li4m(bJ1x) ? bJ1x : null);
                    if (!!iJ3x) iJ3x.trackCount++
                }, this);
                h0x.B0x(p0x.hr3x, "itemchange", {data: iJ3x || {}, cmd: "add"});
                this.B0x("onaddsuccess");
                return null
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.uC7v, "listchange", {key: e0x.key, action: "refresh"});
                var oB5G = e0x.data.pid, co1x = this.jt3x(e0x.key)
            }, onmessage: function () {
                var lA4E = {502: "æ­æ²å·²å­å¨ï¼", 505: "æ­åå·²æ»¡ï¼"};
                return function (bZ1x) {
                    setTimeout(function () {
                        n0x.Z0x.M0x({tip: lA4E[bZ1x] || "æ·»å å¤±è´¥ï¼è¯·ç¨ååè¯ï¼", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e0x) {
                var i0x = e0x.data;
                e0x.ext = i0x.trackIds;
                i0x.trackIds = JSON.stringify(i0x.trackIds);
                i0x.op = "del"
            }, format: function (Q0x, e0x) {
                var iJ3x = this.rB6v.ek2x(e0x.data.pid);
                k0x.be0x(e0x.ext, function (C0x) {
                    this.bdp7i({id: C0x, key: "track_playlist-" + e0x.data.pid}, !0);
                    if (!!iJ3x) iJ3x.trackCount = Math.max(0, iJ3x.trackCount - 1)
                }, this);
                h0x.B0x(p0x.hr3x, "itemchange", {data: iJ3x || {}, cmd: "del"});
                return null
            }, finaly: function (d0x, e0x) {
                h0x.B0x(p0x.uC7v, "listchange", {key: e0x.key, action: "refresh"})
            }, onmessage: function (bZ1x) {
                l0x.bnH0x({text: "æ­æ²å é¤å¤±è´¥ï¼"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (Q0x, e0x) {
                return this.bJa6U.bnw0x(Q0x.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (Q0x, e0x) {
                var j0x = [];
                if (e0x.data.type == -1) {
                    if (Q0x.weekData && Q0x.weekData.length) {
                        e0x.data.type = 1
                    } else {
                        e0x.data.type = 0
                    }
                }
                if (e0x.data.type == 1) {
                    j0x = this.bIZ6T(Q0x.weekData)
                } else {
                    j0x = this.bIZ6T(Q0x.allData)
                }
                return j0x
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (Q0x, e0x) {
                var mR4V = [], j0x = Q0x.recommend || [];
                k0x.be0x(j0x, function (bf0x, s0x) {
                    mR4V.push({
                        action: "recommendimpress",
                        json: {alg: bf0x.alg, scene: "user-song", position: s0x, id: bf0x.id}
                    })
                });
                this.kA4E.UD5I(mR4V);
                e0x.limit = j0x.length;
                return j0x
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e0x) {
                e0x.data.lv = 0;
                e0x.data.tv = 0
            }, format: function (m0x, e0x) {
                return m0x
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    p0x.uC7v = NEJ.C();
    b0x = p0x.uC7v.O0x(p0x.gX3x);
    b0x.cl1x = function () {
        this.cs1x();
        this.rB6v = p0x.hr3x.A0x();
        this.bJa6U = p0x.pn5s.A0x();
        this.kA4E = p0x.hK3x.A0x()
    };
    b0x.bIZ6T = function (j0x) {
        var m0x = [], fa2x = 0;
        k0x.be0x(j0x, function (r0x, s0x) {
            var bf0x = l0x.Da0x(r0x.song);
            if (s0x == 0) {
                fa2x = r0x.score
            }
            bf0x.max = fa2x;
            bf0x.playCount = r0x.playCount;
            bf0x.score = r0x.score;
            m0x.push(bf0x)
        });
        return m0x
    };
    H0x.fr2x.A0x({element: p0x.uC7v, event: ["listchange"]})
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
    var bIY6S;
    var sL6F = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cgf2x = 0;
    var bIX6R = 0;
    var bIW6Q = 1;
    var bIV6P = 0;
    var bpv1x = "";
    var bIT6N = "";
    var bIS6M = "";
    var VN5S = "";
    var VQ5V = "";
    var bpM1x = "";
    var bIQ6K = 0;
    var bIP6J = "";
    var FV1x = "";
    var CN0x = 0;
    var bqf2x = ntes_get_domain();
    var bqq2x = null;
    var cuw6q = "//analytics.163.com";
    var cfP2x = function () {
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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqf2x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqf2x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqf2x
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

    var cfO2x = 0;
    var Nj3x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Nj3x))
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
        var a = (1 << Nj3x) - 1;
        for (var b = 0; b < d.length * Nj3x; b += Nj3x) {
            c[b >> 5] |= (d.charCodeAt(b / Nj3x) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cfO2x ? "0123456789ABCDEF" : "0123456789abcdef";
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
        VN5S = "-";
        bpM1x = "-";
        VQ5V = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            VN5S = b.width + "x" + b.height;
            bpM1x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                VN5S = f.width + "x" + f.height
            }
        }
        if (a.language) {
            VQ5V = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                VQ5V = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bIQ6K = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cux6r(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cfP2x;
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
        var e = k || bIY6S;
        bpv1x = escape(a || document.location);
        bIT6N = escape(m || document.title);
        bIS6M = l === true ? "" : escape(l || document.referrer);
        bIP6J = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqq2x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqq2x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpv1x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqq2x) {
                sL6F = fetch_visitor_hash();
                bIX6R = 1;
                ntes_set_cookie_long("_ntes_nnid", sL6F + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", sL6F)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            sL6F = h.substr(0, o);
            CN0x = h.substr(o + 1, p - o - 1);
            if (CN0x == 0) {
                CN0x = (new Date).getTime();
                f = true
            }
            if (!sL6F) {
                sL6F = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", sL6F + "," + CN0x);
                ntes_set_cookie_long("_ntes_nuid", sL6F)
            }
            if (CN0x != 0 && b - CN0x > 365 * 86400 * 1e3) {
                CN0x = 0;
                ntes_set_cookie_long("_ntes_nnid", sL6F + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", sL6F)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        FV1x = c("P_INFO", "P_OINFO");
        FV1x = FV1x ? FV1x.substr(0, FV1x.indexOf("|")) : "";
        bIV6P = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", sL6F, "&_nvtm=", cgf2x, "&_nvsf=", bIW6Q, "&_nvfi=", bIX6R, "&_nlag=", VQ5V, "&_nlmf=", bIQ6K, "&_nres=", VN5S, "&_nscd=", bpM1x, "&_nstm=", bIV6P, "&_nurl=", bpv1x, "&_ntit=", bIT6N, "&_nref=", bIS6M, "&_nfla=", bIP6J, "&_nssn=", FV1x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bIW6Q = 0;
        neteaseTracker.callback = null
    }

    bIY6S = "iad";
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
            this.i0x = new r.init;
            this.bIM6G = 0
        }, Wm5r: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.i0x.concat(a);
            this.bIM6G += a.sigBytes
        }, zR9I: function (a) {
            var c = this.i0x, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bIN6H, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bIL6F(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.i0x = this.i0x.clone();
            return a
        }, bIN6H: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.bri2x()
        }, update: function (a) {
            this.Wm5r(a);
            this.zR9I();
            return this
        }, finalize: function (a) {
            a && this.Wm5r(a);
            return this.Ws5x()
        }, blockSize: 16, bqW2x: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, cfH2x: function (a) {
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
        bri2x: function () {
            this.dI1x = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bIL6F: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dI1x.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
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
        }, Ws5x: function () {
            var b = this.i0x, n = b.words, a = 8 * this.bIM6G, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.zR9I();
            b = this.dI1x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dI1x = this.dI1x.clone();
            return b
        }
    });
    t.MD5 = v.bqW2x(r);
    t.HmacMD5 = v.cfH2x(r)
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
                return this.create(this.brm2x, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.cfG2x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bIK6E = e;
                this.J0x = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.bri2x()
            }, process: function (e) {
                this.Wm5r(e);
                return this.zR9I()
            }, finalize: function (e) {
                e && this.Wm5r(e);
                return this.Ws5x()
            }, keySize: 4, ivSize: 4, brm2x: 1, cfG2x: 2, bqW2x: function (e) {
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
        Ws5x: function () {
            return this.zR9I(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bII6C;
        c ? this.bII6C = u : c = this.bIH6B;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bID6x = e;
            this.bII6C = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bID6x, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bIH6B = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bID6x, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bIH6B = d
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
            if (this.bIK6E == this.brm2x) var c = a.createEncryptor; else c = a.createDecryptor, this.bIN6H = 1;
            this.eF2x = c.call(a, this, b && b.words)
        }, bIL6F: function (a, b) {
            this.eF2x.processBlock(a, b)
        }, Ws5x: function () {
            var a = this.cfg.padding;
            if (this.bIK6E == this.brm2x) {
                a.pad(this.i0x, this.blockSize);
                var b = this.zR9I(!0)
            } else b = this.zR9I(!0), a.unpad(b);
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
            b = this.Yw6q(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, Yw6q: function (a, b) {
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
            c = this.Yw6q(c, l.format);
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
        bri2x: function () {
            for (var a = this.J0x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cfk2x = d + 6) + 1), e = this.cfi2x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cfd2x = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bIC6w(a, b, this.cfi2x, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bIC6w(a, c, this.cfd2x, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bIC6w: function (a, b, c, d, e, j, l, f) {
            for (var m = this.cfk2x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
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
    u.AES = p.bqW2x(d)
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
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c0x = NEJ.P, dP1x = c0x("nej.g"), v0x = c0x("nej.j"), k0x = c0x("nej.u"), Mi3x = c0x("nm.x.ek");
    Mi3x.emj = {
        "è²": "00e0b",
        "æµæ": "509f6",
        "è¿è¾¹": "259df",
        "å¼±": "8642d",
        "å´å": "bc356",
        "äº²": "62901",
        "å¼å¿": "477df",
        "å²ç": "22677",
        "æ¨ç¬": "ec152",
        "ç«": "b5ff6",
        "ç±ç": "8ace6",
        "å¹½çµ": "15bb7",
        "èç³": "b7251",
        "åæ": "52b3a",
        "å¤§å­": "b17a8",
        "åå­": "76aea",
        "ææ": "8a5aa",
        "éæ": "76d2e",
        "çµæ": "41762",
        "å¬é¸¡": "9ec4e",
        "ç±æ": "e341f",
        "ç¦æ­¢": "56135",
        "ç": "fccf6",
        "äº²äº²": "95280",
        "å": "104e0",
        "ç¤¼ç©": "312ec",
        "æ": "bda92",
        "å": "557c9",
        "çç": "38701",
        "é»ç³": "14af6",
        "æ": "c9d05",
        "æ": "c4f7f",
        "ç¤ºç±": "0c368",
        "æ±": "5b7a4",
        "å°é¸¡": "6bee2",
        "çè¦": "55932",
        "æå´": "575cc",
        "æ¶æ": "e10b4",
        "å£ç½©": "24d81",
        "åè": "3cfe4",
        "å¿ç¢": "875d3",
        "çæ°": "e8204",
        "å¯ç±": "7b97d",
        "é¬¼è¸": "def52",
        "è·³è": "741d5",
        "ç·å­©": "46b8e",
        "å¥¸ç¬": "289dc",
        "çª": "6935b",
        "å": "3ece0",
        "ä¾¿ä¾¿": "462db",
        "å¤æ": "0a22b",
        "å£è¯": "8e7",
        "æµæ³ª": "01000",
        "å¼º": "1",
        "ç±å¿": "0CoJU",
        "å¥³å­©": "m6Qyw",
        "ææ": "8W8ju",
        "å¤§ç¬": "d"
    };
    Mi3x.md = ["è²", "æµæ", "è¿è¾¹", "å¼±", "å´å", "äº²", "å¼å¿", "å²ç", "æ¨ç¬", "ç«", "ç±ç", "å¹½çµ", "èç³", "åæ", "å¤§å­", "åå­", "ææ", "éæ", "çµæ", "å¬é¸¡", "ç±æ", "ç¦æ­¢", "ç", "äº²äº²", "å", "ç¤¼ç©", "æ", "å", "çç", "é»ç³", "æ", "æ", "ç¤ºç±", "æ±", "å°é¸¡", "çè¦", "æå´", "æ¶æ", "å£ç½©", "åè", "å¿ç¢", "çæ°", "å¯ç±", "é¬¼è¸", "è·³è", "ç·å­©", "å¥¸ç¬", "çª", "å", "ä¾¿ä¾¿", "å¤æ", "å£è¯"]
})();
(function () {
    var c0x = NEJ.P, dP1x = c0x("nej.g"), v0x = c0x("nej.j"), k0x = c0x("nej.u"), Mi3x = c0x("nm.x.ek"),
        l0x = c0x("nm.x");
    if (v0x.bo0x.redefine) return;
    window.GEnc = true;
    var baJ7C = function (cfc2x) {
        var m0x = [];
        k0x.be0x(cfc2x, function (cfb2x) {
            m0x.push(Mi3x.emj[cfb2x])
        });
        return m0x.join("")
    };
    var ceY2x = v0x.bo0x;
    v0x.bo0x = function (V0x, e0x) {
        var i0x = {}, e0x = NEJ.X({}, e0x), lK4O = V0x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V0x) && !(e0x.headers && e0x.headers[dP1x.wK8C] == dP1x.EB1x) && !e0x.noEnc) {
            if (lK4O != -1) {
                i0x = k0x.hk3x(V0x.substring(lK4O + 1));
                V0x = V0x.substring(0, lK4O)
            }
            if (e0x.query) {
                i0x = NEJ.X(i0x, k0x.fh2x(e0x.query) ? k0x.hk3x(e0x.query) : e0x.query)
            }
            if (e0x.data) {
                i0x = NEJ.X(i0x, k0x.fh2x(e0x.data) ? k0x.hk3x(e0x.data) : e0x.data)
            }
            i0x["csrf_token"] = v0x.gG2x("__csrf");
            V0x = V0x.replace("api", "weapi");
            e0x.method = "post";
            delete e0x.query;
            var bIv6p = window.asrsea(JSON.stringify(i0x), baJ7C(["æµæ³ª", "å¼º"]), baJ7C(Mi3x.md), baJ7C(["ç±å¿", "å¥³å­©", "ææ", "å¤§ç¬"]));
            e0x.data = k0x.da1x({params: bIv6p.encText, encSecKey: bIv6p.encSecKey})
        }
        ceY2x(V0x, e0x)
    };
    v0x.bo0x.redefine = true
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
    var c0x = NEJ.P, a9j = c0x("nej.e"), cM1x = c0x("nej.p"), k0x = c0x("nej.u"), h0x = c0x("nej.v"),
        v0x = c0x("nej.j"), dj1x = c0x("nm.u"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), n0x = c0x("nm.l"),
        baR7K = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", i0x = {
            "å¤§ç¬": "86",
            "å¯ç±": "85",
            "æ¨ç¬": "359",
            "è²": "95",
            "äº²äº²": "363",
            "ææ": "96",
            "æµæ³ª": "356",
            "äº²": "362",
            "å": "352",
            "åä¼¤": "342",
            "å²ç": "343",
            "åè": "348",
            "æå´": "353",
            "æ": "361",
            "å¥¸ç¬": "341",
            "æ±": "97",
            "çè¦": "346",
            "æ¶æ": "354",
            "çç": "350",
            "å£ç½©": "351",
            "å¤§å­": "357",
            "æ": "355",
            "åæ": "115",
            "å¼å¿": "360",
            "é¬¼è¸": "94",
            "ç±ç": "87",
            "æµæ": "358",
            "ç±å¿": "33",
            "å¿ç¢": "34",
            "éæ": "303",
            "ææ": "309",
            "çæ°": "314",
            "ä¾¿ä¾¿": "89",
            "å¼º": "13",
            "å¼±": "372",
            "æ": "14",
            "çµæ": "379",
            "è·³è": "380",
            "ç¦æ­¢": "374",
            "è¿è¾¹": "262",
            "ç±æ": "106",
            "ç¤ºç±": "376",
            "å´å": "367",
            "ç": "81",
            "ç«": "78",
            "çª": "100",
            "åå­": "459",
            "å°é¸¡": "450",
            "å¬é¸¡": "461",
            "å¹½çµ": "116",
            "å£è¯": "411",
            "å¤æ": "101",
            "é»ç³": "52",
            "ç¤¼ç©": "107",
            "ç·å­©": "0",
            "å¥³å­©": "1",
            "èç³": "337",
            18: "186",
            "å": "312",
            "å": "313"
        }, ceU2x = function () {
            if (h0x && h0x.B0x) {
                h0x.dispatchEventalias = h0x.B0x
            }
        };
    ceU2x();
    l0x.baU7N = function (bJ1x) {
        if (!bJ1x || bJ1x.copyrightId === undefined || !!bJ1x.program) return false;
        if (window.GAbroad) {
            bJ1x.fee = 0;
            return true
        }
        if (bJ1x.status < 0) return true;
        var LF2x;
        if (typeof GCopyrights !== "undefined") LF2x = GCopyrights;
        try {
            if (!LF2x && !!top.GCopyrights) LF2x = top.GCopyrights
        } catch (e) {
        }
        if (LF2x) {
            var s0x = k0x.cW1x(LF2x, bJ1x.copyrightId);
            if (s0x >= 0) return true
        }
        return false
    };
    l0x.baZ7S = function () {
        var zG9x = /^\/m\/(song|album|artist|playlist|dj|search)\?/, uH7A = {
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
        }, ceS2x = {
            song: "åæ²",
            album: "ä¸è¾",
            artist: "æ­æ",
            playlist: "æ­å",
            dj: "çµå°èç®",
            searchsong: "åæ²æç´¢",
            searchlyric: "æ­è¯æç´¢",
            toplist: "æ¦å",
            event: "å¨æ",
            djradio: "çµå°",
            day: "æ¯æ¥æ­æ²æ¨è",
            record: "å¬æ­æè¡æ¦"
        };
        var ceQ2x = function (J0x, i0x, Lp2x) {
            switch (J0x) {
                case"event":
                    i0x = i0x.split("|");
                    return "/event?id=" + i0x[0] + "&uid=" + i0x[1];
                case"searchsong":
                case"searchlyric":
                    var t0x = J0x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(i0x) + "&type=" + t0x;
                case"toplist":
                    return "/discover/toplist?id=" + i0x + "&_hash=songlist-" + Lp2x;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Lp2x;
                    ;
                case"record":
                    i0x = i0x.split("|");
                    return "/user/songs/rank?id=" + i0x[0] + "&cat=" + i0x[1];
                    break;
                default:
                    return "/" + J0x + "?id=" + i0x + "&_hash=songlist-" + Lp2x
            }
        };
        return function (dJ1x, Lp2x) {
            if (!dJ1x) return null;
            var Fg1x = dJ1x.fid || (dJ1x.type != 18 ? dJ1x.type : null), bbh7a = dJ1x.fdata || dJ1x.rid,
                bIo6i = dJ1x.page || dJ1x.fhref;
            var J0x = uH7A[Fg1x];
            if (!J0x) {
                var xe8W = (bIo6i || "").match(zG9x);
                if (xe8W) J0x = xe8W[1]
            }
            if (!J0x) return null;
            return {title: ceS2x[J0x], link: !uH7A[Fg1x] ? bIo6i : ceQ2x(J0x, bbh7a, Lp2x), fid: Fg1x, fdata: bbh7a}
        }
    }();
    l0x.WM6G = function (mq4u) {
        var dk1x = mq4u;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dk1x = GUser;
        return dk1x
    };
    l0x.hb3x = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l0x.Gt1x = function () {
        var zG9x = /#(.*?)$/;
        return function (gg2x) {
            var iK3x = gg2x === false ? location : top.location;
            return zG9x.test(iK3x.href) ? RegExp.$1 : ""
        }
    }();
    l0x.zC9t = function () {
        var zB9s = a9j.cV1x("audio"), cet2x = zB9s.canPlayType && zB9s.canPlayType("audio/mpeg");
        if (cet2x) return 2;
        var cep2x = l0x.bbE7x().supported;
        if (cep2x) return 1;
        return 0
    };
    l0x.bbE7x = function () {
        var ga2x, bbF7y = !1, bbI7B = "";
        if (cM1x.cT1x.browser == "ie") {
            try {
                ga2x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                ga2x = null
            }
            if (ga2x) {
                bbF7y = !0;
                bbI7B = ga2x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                ga2x = navigator.plugins["Shockwave Flash"];
                if (ga2x) {
                    bbF7y = !0;
                    bbI7B = ga2x.description
                }
            }
        }
        return {supported: bbF7y, version: bbI7B}
    };
    l0x.pT5Y = function () {
        return "ç½æäºé³ä¹"
    };
    l0x.ceo2x = function () {
        return i0x
    };
    l0x.bIk6e = function (cK1x) {
        var C0x = i0x[cK1x];
        return C0x == null ? "" : baR7K.replace("{ID}", C0x)
    };
    l0x.sk6e = function (bi0x, dE1x, Gw1x) {
        if (!bi0x) return "";
        if (!!Gw1x) {
            bi0x = l0x.cel2x(bi0x)
        }
        return l0x.WX6R(l0x.cej2x(bi0x, dE1x))
    };
    l0x.bch7a = function () {
        var KA2x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@ï¼])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bcl7e = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cee2x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, ceb2x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cdZ2x = function (dp1x, bcz7s) {
            dp1x = GE1x(dp1x);
            if (!!bcz7s) {
                dp1x = dp1x.replace(KA2x.MLINE, "\n\n").replace(KA2x.LING, "</br>")
            }
            dp1x = l0x.WX6R(dp1x);
            return dp1x
        };
        var GE1x = function (bi0x) {
            return k0x.Dy0x(cee2x, bi0x)
        };
        return function (dp1x, e0x, ed2x) {
            e0x = e0x || {};
            ed2x = ed2x || {};
            ed2x.actHash = {};
            var cdY2x = !!e0x.parseLink, cdV2x = !!e0x.parseAct, cdU2x = e0x.linkTpl || bcl7e.LINK,
                cdS2x = e0x.atTpl || bcl7e.AT, cdR2x = e0x.actTpl || bcl7e.ACT, bcz7s = !!e0x.keepSpace,
                bcM7F = e0x.linkKlass || "s-fc7";
            cuA6u = e0x.actBiJson || "";
            if (!dp1x) return "";
            dp1x = dp1x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kC4G = ceb2x[cdY2x + 2 * cdV2x], cP1x = KA2x[kC4G], bs0x = null, kI4M = null, gA2x = 0, cuB6v = "",
                cuC6w = "";
            var zv9m = [];
            cP1x.lastIndex = 0;
            while (bs0x = cP1x.exec(dp1x)) {
                var fF2x = {html: "", before: bs0x.index - 1, after: bs0x.index + bs0x[0].length};
                if (bs0x[1]) {
                    var kI4M = bs0x[2].replace(/[^\x00-\xff]/g, "**");
                    if (kI4M.length < 4 || kI4M.length > 32) {
                    } else {
                        var Kf2x = a9j.el2x(cdS2x);
                        fF2x.html = a9j.bQ1x(Kf2x, {
                            value: GE1x(bs0x[2]),
                            url: encodeURI("/user/home?nickname=" + bs0x[2]),
                            klass: bcM7F
                        });
                        zv9m.push(fF2x)
                    }
                } else if (bs0x.length > 8 && bs0x[4]) {
                    var Kf2x = a9j.el2x(cdU2x);
                    fF2x.html = a9j.bQ1x(Kf2x, {value: GE1x(bs0x[4]), url: encodeURI(bs0x[4]), klass: bcM7F});
                    zv9m.push(fF2x)
                } else {
                    var bIb6V = kC4G == "ACT_NOLINK" ? 4 : 9;
                    var Kf2x = a9j.el2x(cdR2x);
                    fF2x.html = a9j.bQ1x(Kf2x, {value: GE1x(bs0x[bIb6V]), klass: bcM7F});
                    zv9m.push(fF2x);
                    ed2x.actHash[bs0x[bIb6V].slice(1, -1)] = true
                }
            }
            var cdH2x = zv9m.length, mq4u = {before: dp1x.length - 1, after: 0}, bdo7h = "";
            for (var i = 0; i <= cdH2x; i++) {
                var is3x, gy2x;
                is3x = (zv9m[i - 1] || mq4u).after;
                gy2x = (zv9m[i] || mq4u).before;
                if (gy2x >= is3x && is3x >= 0 && gy2x <= dp1x.length - 1) {
                    bdo7h += cdZ2x(dp1x.substring(is3x, gy2x + 1), bcz7s)
                }
                if (zv9m[i]) {
                    bdo7h += zv9m[i].html
                }
            }
            return bdo7h
        }
    }();
    l0x.cel2x = function () {
        var cP1x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bi0x) {
            return (bi0x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cP1x, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>ç½é¡µé¾æ¥</a>'
            })
        }
    }();
    l0x.cej2x = function () {
        var cP1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eB2x = function (kI4M, dE1x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(kI4M) + '" class="' + (dE1x || "") + '">@' + kI4M + "</a>"
        };
        return function (bi0x, dE1x) {
            return (bi0x || "").replace(cP1x, function ($0, $1) {
                return eB2x($1, dE1x)
            })
        }
    }();
    l0x.WX6R = function () {
        var cP1x = /\[(.*?)\]/g;
        return function (bi0x) {
            return (bi0x || "").replace(cP1x, function ($1, $2) {
                var V0x = l0x.bIk6e($2);
                return !V0x ? $1 : '<img src="' + V0x + '"/>'
            })
        }
    }();
    l0x.zH9y = function (E0x, dE1x) {
        a9j.bB0x(E0x, dE1x) ? a9j.w0x(E0x, dE1x) : a9j.y0x(E0x, dE1x)
    };
    l0x.JZ2x = function (cJ1x, hC3x) {
        cJ1x = a9j.x0x(cJ1x);
        hC3x = a9j.x0x(hC3x);
        if (!cJ1x || !hC3x) return !1;
        for (hC3x = hC3x.parentNode; !!hC3x && hC3x != cJ1x; hC3x = hC3x.parentNode) ;
        return hC3x == cJ1x
    };
    l0x.lM4Q = function () {
        var bIa6U = function (fv2x) {
            return (fv2x < 10 ? "0" : "") + fv2x
        };
        return function (jw3x) {
            jw3x = parseInt(jw3x) || 0;
            if (!jw3x) return "00:00";
            var JX2x = Math.floor(jw3x % 60), cdD2x = Math.floor(jw3x / 60);
            return bIa6U(cdD2x) + ":" + bIa6U(JX2x)
        }
    }();
    l0x.vG8y = function (fl2x, uq7j) {
        if (!fl2x || fl2x.length == 0) return "";
        uq7j = uq7j || "/";
        var bs0x = [];
        for (var i = fl2x.length - 1; i >= 0; i--) {
            bs0x.unshift(fl2x[i].name)
        }
        return bs0x.join(uq7j)
    };
    l0x.pf5k = function () {
        var JS2x = function (hi3x, dE1x, cJ1x) {
            if (!hi3x || !hi3x.name) return "";
            if (!hi3x.id) return '<span class="' + dE1x + '">' + k0x.dK1x(hi3x.name) + "</span>";
            return "<a" + (cJ1x ? ' target="_blank"' : "") + ' class="' + dE1x + '" href="/artist?id=' + hi3x.id + '" hidefocus="true">' + k0x.dK1x(hi3x.name) + "</a>"
        };
        return function (fl2x, T0x, uq7j, cJ1x, bHW6Q) {
            if (!fl2x || !fl2x.length) return "";
            uq7j = uq7j || "/";
            T0x = T0x || "";
            GK1x = "";
            var eE2x = [];
            for (var i = 0, j0x = [], re6Y = [], ff2x; i < fl2x.length; ++i) {
                eE2x.push(fl2x[i].name);
                if (!fl2x[i] || fl2x[i].id <= 0) {
                    re6Y.push(fl2x[i]);
                    continue
                }
                if (k0x.gl2x(T0x)) {
                    ff2x = T0x(fl2x[i])
                } else {
                    ff2x = JS2x(fl2x[i], T0x, cJ1x)
                }
                if (ff2x && bHW6Q && fl2x[i].tns && fl2x[i].tns.length > 0) {
                    GK1x = k0x.dK1x(fl2x[i].tns[0]);
                    ff2x += '<span class="s-fc8" title="' + GK1x + '"> - (' + GK1x + ")</span>"
                }
                !!ff2x && j0x.push(ff2x)
            }
            for (var i = 0, ff2x; i < re6Y.length; ++i) {
                if (k0x.gl2x(T0x)) {
                    ff2x = T0x(re6Y[i])
                } else {
                    ff2x = JS2x(re6Y[i], T0x, cJ1x)
                }
                if (ff2x && bHW6Q && re6Y[i].tns && re6Y[i].tns.length > 0) {
                    GK1x = k0x.dK1x(re6Y[i].tns[0]);
                    ff2x += '<span class="s-fc8" title="' + GK1x + '"> - (' + GK1x + ")</span>"
                }
                !!ff2x && j0x.push(ff2x)
            }
            return '<span title="' + eE2x.join(uq7j) + '">' + j0x.join(uq7j) + "</span>"
        }
    }();
    l0x.vQ8I = function (eZ2x) {
        return !!eZ2x && /^[0-9]{11}$/.test(eZ2x)
    };
    l0x.cuD6x = function (eZ2x) {
        if (!l0x.vQ8I(eZ2x)) return eZ2x;
        return eZ2x.substring(0, 3) + "****" + eZ2x.substr(7)
    };
    l0x.iY3x = function () {
        var cP1x = /^\s+$/g;
        return function (hy3x) {
            return !hy3x || cP1x.test(hy3x)
        }
    }();
    l0x.GN1x = function () {
        var bel8d = /[^\x00-\xfff]/g;
        return function (hy3x) {
            var cdv2x = hy3x.match(bel8d) || [], dF1x = cdv2x.length;
            return hy3x.length + dF1x
        }
    }();
    l0x.zr9i = function () {
        var bel8d = /[^\x00-\xfff]/;
        return function (hy3x, gf2x) {
            for (var i = 0, len = hy3x.length; i < len && gf2x > 0; i++) {
                if (bel8d.test(hy3x.charAt(i))) {
                    gf2x -= 2;
                    if (gf2x < 0) {
                        break
                    }
                } else {
                    gf2x -= 1
                }
            }
            return hy3x.substring(0, i)
        }
    }();
    l0x.zq9h = function (hy3x, gf2x, Ml3x) {
        gf2x = gf2x || 10;
        Ml3x = Ml3x || nej.p.cT1x.engine == "trident" && parseInt(nej.p.cT1x.release) < 5;
        if (Ml3x && l0x.GN1x(hy3x) > gf2x) {
            return l0x.zr9i(hy3x, gf2x) + "..."
        } else {
            return hy3x
        }
    };
    l0x.bHV6P = function (f0x) {
        return f0x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f0x.type || f0x.href || ~f0x.tabIndex)
    };
    l0x.cdt2x = function (d0x, cJ1x) {
        if (!d0x || !cJ1x) return !0;
        var f0x, t0x = d0x.type.toLowerCase();
        if (t0x == "mouseout") {
            f0x = d0x.relatedTarget || d0x.toElement
        } else if (t0x == "mouseover") {
            f0x = d0x.relatedTarget || d0x.fromElement
        }
        return !f0x || f0x !== cJ1x && !l0x.JZ2x(cJ1x, f0x)
    };
    l0x.rR6L = function () {
        R0x = {};
        return function (f0x, dL1x) {
            var C0x = a9j.kJ4N(f0x), J0x = "hover-" + C0x;
            if (!dL1x || !C0x || !!R0x[J0x]) return;
            R0x[J0x] = !0;
            h0x.q0x(C0x, "mouseover", function () {
                var beB8t = a9j.I0x(f0x, "hshow") || [];
                var beE8w = a9j.I0x(f0x, "icn-dislike") || [];
                a9j.y0x(C0x, "z-hover");
                a9j.Y0x(beB8t[0], "display", "block");
                a9j.Y0x(beE8w[0], "display", "block")
            });
            h0x.q0x(C0x, "mouseout", function () {
                var beB8t = a9j.I0x(f0x, "hshow") || [];
                var beE8w = a9j.I0x(f0x, "icn-dislike") || [];
                a9j.w0x(C0x, "z-hover");
                a9j.Y0x(beB8t[0], "display", "none");
                a9j.Y0x(beE8w[0], "display", "none")
            })
        }
    }();
    l0x.bHU6O = function () {
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
        return function (hy3x) {
            return k0x.Dy0x(bv0x, hy3x)
        }
    }();
    l0x.tm6g = function (by0x) {
        if (k0x.FK1x(by0x)) by0x = by0x.getTime();
        var fI2x = new Date, mB4F = fI2x.getTime() - by0x;
        if (mB4F <= 6e4) return "åå";
        var ql5q = fI2x.getHours() * 36e5 + fI2x.getMinutes() * 6e4 + fI2x.getSeconds() * 1e3;
        if (mB4F <= ql5q) {
            if (mB4F < 36e5) {
                var Js2x = Math.floor(mB4F / 6e4);
                return Js2x + "åéå"
            }
            return k0x.iR3x(by0x, "HH:mm")
        } else {
            if (mB4F < ql5q + 864e5) {
                return "æ¨å¤©" + k0x.iR3x(by0x, "HH:mm")
            } else {
                var gi2x = fI2x.getFullYear(), beT8L = new Date(gi2x, 0, 1);
                var ql5q = fI2x.getTime() - beT8L.getTime();
                if (mB4F < ql5q) {
                    return k0x.iR3x(by0x, "Mædæ¥ HH:mm")
                }
                return k0x.iR3x(by0x, "yyyyå¹´Mædæ¥")
            }
        }
    };
    l0x.cdp2x = function (by0x) {
        if (k0x.FK1x(by0x)) by0x = by0x.getTime();
        var fI2x = new Date, mB4F = fI2x.getTime() - by0x;
        var ql5q = fI2x.getHours() * 36e5 + fI2x.getMinutes() * 6e4 + fI2x.getSeconds() * 1e3;
        if (mB4F <= ql5q) {
            return "ä»å¤©" + k0x.iR3x(by0x, "HH:mm")
        } else {
            if (mB4F < ql5q + 864e5) {
                return "æ¨å¤©" + k0x.iR3x(by0x, "HH:mm")
            } else {
                return k0x.iR3x(by0x, "yy-MM-dd HH:mm")
            }
        }
    };
    l0x.cdn2x = function (by0x) {
        if (k0x.FK1x(by0x)) by0x = by0x.getTime();
        var fI2x = new Date, mB4F = fI2x.getTime() - by0x;
        if (mB4F <= 6e4) return "åå";
        var ql5q = fI2x.getHours() * 36e5 + fI2x.getMinutes() * 6e4 + fI2x.getSeconds() * 1e3;
        if (mB4F <= ql5q) {
            if (mB4F < 36e5) {
                var Js2x = Math.floor(mB4F / 6e4);
                return Js2x + "åéå"
            }
            return k0x.iR3x(by0x, "HH:mm")
        } else {
            if (mB4F < ql5q + 864e5) {
                return "æ¨å¤©" + k0x.iR3x(by0x, "HH:mm")
            } else if (mB4F < ql5q + 864e5 * 6) {
                var gi2x = fI2x.getFullYear(), beT8L = new Date(gi2x, 0, 1);
                var ql5q = fI2x.getTime() - beT8L.getTime();
                if (mB4F < ql5q) {
                    return k0x.iR3x(by0x, "Mædæ¥ HH:mm")
                }
                return k0x.iR3x(by0x, "yyyyå¹´Mædæ¥")
            } else {
                return "æè¿"
            }
        }
    };
    l0x.Jl2x = function () {
        var cP1x = /\{(.*?)\}/gi;
        return function (pw5B, i0x) {
            return (pw5B || "").replace(cP1x, function ($1, $2) {
                var z0x = i0x[$2];
                return z0x == null ? $1 : z0x
            })
        }
    }();
    l0x.eO2x = function () {
        var bg0x = Array.prototype.slice.call(arguments, 0), pw5B = bg0x.shift();
        if (pw5B) {
            return pw5B.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bg0x.length ? bg0x[$2] : $1
            })
        }
        return ""
    };
    l0x.GR1x = function (j0x, dE1x, kZ4d) {
        return "";
        kZ4d = kZ4d || " - ";
        if (j0x && j0x.length) {
            return kZ4d + (!!dE1x ? '<span class="' + dE1x + '">' + j0x[0] + "</span>" : j0x[0])
        }
        return ""
    };
    l0x.bHQ6K = function () {
        if (window.getSelection) {
            var qo5t = window.getSelection();
            if (qo5t && qo5t.focusNode && qo5t.focusNode.tagName) {
                var zm9d = a9j.cS1x(qo5t.focusNode);
                for (var i = 0, wk8c; i < zm9d.length; ++i) {
                    wk8c = zm9d[i].tagName;
                    if (!wk8c) continue;
                    wk8c = wk8c.toLowerCase();
                    if (wk8c == "textarea" || wk8c == "input") return !0
                }
            }
        } else if (document.selection) {
            var cG1x = document.selection.createRange();
            if (cG1x) {
                var f0x = cG1x.parentElement();
                if (f0x && f0x.tagName) {
                    var wk8c = f0x.tagName.toLowerCase();
                    if (wk8c == "textarea" || wk8c == "input") return !0
                }
            }
        }
        return !1
    };
    l0x.xO9F = function (fs2x) {
        if (/^[A-Z]\:\\/i.test(fs2x)) {
            fs2x = fs2x.split("\\")
        } else {
            fs2x = fs2x.split("/")
        }
        fs2x = fs2x[fs2x.length - 1];
        return fs2x
    };
    l0x.cdk2x = function () {
        var CR0x = [13, 17, 34, 19, 18, 21];
        return function (C0x) {
            var bs0x = (C0x || "").split("_");
            return {type: CR0x[bs0x[2]] || -1, id: bs0x[3] || ""}
        }
    }();
    l0x.bfy8q = function (dk1x) {
        if (4 == dk1x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dk1x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dk1x.expertTags && dk1x.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l0x.PY4c = function (fv2x) {
        fv2x += "";
        if (fv2x) {
            return fv2x.substr(0, 3) + "****" + fv2x.substr(fv2x.length - 4)
        }
    };
    l0x.cuE6y = function (s0x, co1x) {
        return (s0x % co1x + co1x) % co1x
    };
    l0x.bHP6J = function () {
        var CR0x = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (C0x) {
            var bs0x = (C0x || "").split("_"), m0x = {type: CR0x[bs0x[2]] || -1, id: bs0x[3] || ""};
            if (m0x.type == "event") {
                m0x.uid = bs0x[4] || "";
                return "/" + m0x.type + "?id=" + m0x.id + "&uid=" + m0x.uid
            }
            return "/" + m0x.type + "?id=" + m0x.id
        }
    }();
    l0x.bHO6I = function () {
        var CR0x = ["æ­å", "çµå°èç®", "å¨æ", "ä¸è¾", "åæ²", "MV", "ä¸æ æç« "];
        return function (C0x) {
            var bs0x = (C0x || "").split("_");
            return CR0x[bs0x[2]] || "èµæº"
        }
    }();
    l0x.cdg2x = function (bw0x) {
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
    l0x.bHN6H = function (tM6G, PL4P) {
        var Xo6i = 0, dY2x = new Array;
        k0x.be0x(tM6G, function (V0x, s0x) {
            var db1x = a9j.cV1x("img");
            db1x.src = V0x;
            h0x.q0x(db1x, "load", function (s0x, d0x) {
                dY2x[s0x] = 1;
                Xo6i++;
                if (Xo6i == tM6G.length) PL4P(tM6G, dY2x)
            }.g0x(this, s0x));
            h0x.q0x(db1x, "error", function (d0x, s0x) {
                dY2x[s0x] = 0;
                Xo6i++;
                if (Xo6i == tM6G.length) PL4P(tM6G, dY2x)
            }.g0x(this, s0x))
        })
    };
    l0x.Xq6k = function (j0x, dD1x) {
        var m0x = [];
        k0x.be0x(j0x, function (r0x, s0x, ii3x) {
            m0x.push(dD1x(r0x, s0x, ii3x))
        });
        return m0x
    };
    l0x.Rx4B = function (j0x, dD1x, ii3x) {
        var m0x = [];
        k0x.be0x(j0x, function (r0x, s0x) {
            if (dD1x.call(ii3x, r0x, s0x, j0x)) {
                m0x.push(r0x)
            }
        });
        return m0x
    };
    l0x.cde2x = function (bi0x) {
        return k0x.dK1x((bi0x || "").replace(/\s{2,}/g, " ").trim())
    };
    l0x.bgi8a = function (bf0x) {
        if (bf0x.transNames && bf0x.transNames.length) {
            return bf0x.transNames[0]
        } else if (bf0x.alias && bf0x.alias.length) {
            return bf0x.alias[0]
        }
    };
    l0x.bgj8b = function (OV3x) {
        if (OV3x) {
            return OV3x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l0x.bgo8g = function (f0x) {
        var f0x = a9j.x0x(f0x), cK1x = f0x && f0x.getElementsByTagName("textarea")[0], J0x = a9j.u0x(f0x, "key"),
            bgp8h = a9j.u0x(f0x, "simple") == "1", bHM6G = p0x.uC7v.fV2x();
        if (!(f0x && cK1x && J0x)) return;
        if (bgp8h) {
            bHM6G.rT6N(J0x, l0x.Da0x(JSON.parse(cK1x.value)))
        } else {
            bHM6G.rT6N(J0x, JSON.parse(cK1x.value || cK1x.defaultValue))
        }
        f0x.innerHTML = "";
        return J0x
    };
    l0x.cdc2x = function (ok5p) {
        if (!ok5p.onbeforelistload) {
            ok5p.onbeforelistload = function (d0x) {
                d0x.value = '<div class="u-load s-fc4"><i class="icn"></i> å è½½ä¸­...</div>'
            }
        }
        if (!ok5p.onemptylist) {
            ok5p.onemptylist = function (d0x) {
                d0x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (ok5p.emptyMsg || "ææ¶è¿æ²¡ææ°æ®") + "</h3></div>"
            }
        }
        return ok5p
    };
    l0x.Da0x = function (hu3x) {
        if (k0x.ep2x(hu3x)) {
            var ed2x = [];
            k0x.be0x(hu3x, function (bgp8h) {
                ed2x.push(bHL6F(bgp8h))
            });
            return ed2x
        } else {
            return bHL6F(hu3x)
        }

        function bHL6F(hu3x) {
            if (!hu3x) return null;
            var ed2x = {
                album: hu3x.al,
                alias: hu3x.alia || hu3x.ala || [],
                artists: hu3x.ar || [],
                commentThreadId: "R_SO_4_" + hu3x.id,
                copyrightId: hu3x.cp || 0,
                duration: hu3x.dt || 0,
                id: hu3x.id,
                mvid: hu3x.mv || 0,
                name: hu3x.name || "",
                cd: hu3x.cd,
                position: hu3x.no || 0,
                ringtone: hu3x.rt,
                rtUrl: hu3x.rtUrl,
                status: hu3x.st || 0,
                pstatus: hu3x.pst || 0,
                fee: hu3x.fee || 0,
                version: hu3x.v || 0,
                eq: hu3x.eq,
                songType: hu3x.t || 0,
                mst: hu3x.mst,
                score: hu3x.pop || 0,
                ftype: hu3x.ftype,
                rtUrls: hu3x.rtUrls,
                transNames: hu3x.tns,
                privilege: hu3x.privilege,
                lyrics: hu3x.lyrics
            };
            return ed2x
        }
    };
    l0x.cuF6z = function () {
        var f0x = a9j.mM4Q('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>åäº«æä¸å¼ï¼</h3>" + '<p>è¯·ç¹å»å³ä¸è§<br>éæ©<span class="s-fc5">âåäº«å°...â</span></p>' + "</div></div></div>");
        document.body.appendChild(f0x);
        h0x.q0x(f0x, "click", function (d0x) {
            h0x.bh0x(d0x);
            a9j.cF1x(f0x)
        })
    };
    l0x.kK4O = function (ct1x) {
        if (ct1x < 1e5) {
            return ct1x
        } else {
            return Math.floor(ct1x / 1e4) + "ä¸"
        }
    };
    l0x.sn6h = function (ct1x, cK1x) {
        return "<i>" + (ct1x ? "(" + ct1x + ")" : cK1x) + "</i>"
    };
    l0x.bHJ6D = function (t0x, ho3x) {
        var e0x = {};
        if (!k0x.li4m(ho3x)) {
            return e0x
        }
        switch (parseInt(t0x)) {
            case 17:
                e0x.title = ho3x.name;
                e0x.author = (ho3x.radio || []).name;
                e0x.picUrl = ho3x.coverUrl;
                e0x.category = ho3x.radio.category;
                break;
            case 19:
                e0x.title = ho3x.name;
                e0x.author = l0x.vG8y(ho3x.artists);
                e0x.authors = l0x.vG8y(ho3x.artists, " / ");
                e0x.picUrl = ho3x.picUrl;
                break;
            case 13:
                e0x.title = ho3x.name;
                e0x.author = (ho3x.creator || []).nickname;
                e0x.picUrl = ho3x.coverImgUrl;
                break;
            case 18:
                e0x.title = ho3x.name;
                e0x.author = l0x.vG8y(ho3x.artists);
                e0x.picUrl = (ho3x.album || []).picUrl;
                break;
            case 20:
                e0x.title = ho3x.name;
                e0x.author = "";
                e0x.picUrl = ho3x.img1v1Url;
                break;
            case 21:
                e0x.title = ho3x.name;
                e0x.author = ho3x.artistName;
                e0x.authors = l0x.vG8y(ho3x.artists, " / ");
                e0x.picUrl = ho3x.newCover || ho3x.cover;
                break;
            case 70:
                e0x.title = ho3x.name;
                e0x.author = (ho3x.dj || []).nickname;
                e0x.picUrl = ho3x.picUrl;
                e0x.category = ho3x.category;
                break;
            default:
                break
        }
        return e0x
    };
    l0x.bHH6B = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l0x.ccQ2x = function (eB2x, ud7W, e0x) {
        var bL1x, bg0x, m0x;
        var jk3x = null;
        var Oz3x = 0;
        if (!e0x) e0x = {};
        var Xz6t = function () {
            Oz3x = e0x.leading === false ? 0 : +(new Date);
            jk3x = null;
            m0x = eB2x.apply(bL1x, bg0x);
            if (!jk3x) bL1x = bg0x = null
        };
        return function () {
            var fI2x = +(new Date);
            if (!Oz3x && e0x.leading === false) Oz3x = fI2x;
            var bhb8T = ud7W - (fI2x - Oz3x);
            bL1x = this;
            bg0x = arguments;
            if (bhb8T <= 0 || bhb8T > ud7W) {
                if (jk3x) {
                    clearTimeout(jk3x);
                    jk3x = null
                }
                Oz3x = fI2x;
                m0x = eB2x.apply(bL1x, bg0x);
                if (!jk3x) bL1x = bg0x = null
            } else if (!jk3x && e0x.trailing !== false) {
                jk3x = setTimeout(Xz6t, bhb8T)
            }
            return m0x
        }
    };
    l0x.bHF6z = function (eB2x, ud7W, qx5C) {
        var jk3x, bg0x, bL1x, Ok3x, m0x;
        var Xz6t = function () {
            var gA2x = new Date - Ok3x;
            if (gA2x < ud7W && gA2x >= 0) {
                jk3x = setTimeout(Xz6t, ud7W - gA2x)
            } else {
                jk3x = null;
                if (!qx5C) {
                    m0x = eB2x.apply(bL1x, bg0x);
                    if (!jk3x) bL1x = bg0x = null
                }
            }
        };
        return function () {
            bL1x = this;
            bg0x = arguments;
            Ok3x = new Date;
            var bhk9b = qx5C && !jk3x;
            if (!jk3x) jk3x = setTimeout(Xz6t, ud7W);
            if (bhk9b) {
                m0x = eB2x.apply(bL1x, bg0x);
                bL1x = bg0x = null
            }
            return m0x
        }
    };
    l0x.Ob3x = function (f0x, hl3x) {
        if (f0x) {
            var f0x = f0x.firstElementChild;
            if (f0x) {
                f0x.firstElementChild && (f0x = f0x.firstElementChild);
                f0x.setAttribute("xlink:href", "/style/pc/svg/" + hl3x)
            }
        }
    };
    l0x.bHE6y = function (eE2x) {
        if (!eE2x || !eE2x.length) {
            return
        }
        eE2x = /^#(.+?)#$/.exec(eE2x)[1];
        eE2x = eE2x.replace(/\s/g, " ");
        v0x.bo0x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k0x.da1x({actname: eE2x}),
            onload: function (Q0x) {
                if (!Q0x || Q0x.code != 200 || !Q0x.act) {
                    n0x.Z0x.M0x({type: 2, tip: "è¯¥è¯é¢ææªåå»º"})
                } else {
                    location.dispatch2("/activity?id=" + Q0x.act.actId)
                }
            },
            onerror: function (bP1x) {
                n0x.Z0x.M0x({type: 2, tip: "æä½å¤±è´¥ï¼è¯·ç¨ååè¯"})
            }
        })
    };
    l0x.bhs9j = function (NW3x, wV8N) {
        if (!NW3x || !wV8N) return false;
        if (NW3x == wV8N) return true;
        return l0x.bhs9j(NW3x, wV8N.parentNode)
    };
    a9j.fw2x = function (bC0x, kT4X) {
        if (!bC0x) return null;
        if (!kT4X) return bC0x.firstChild;
        return a9j.I0x(bC0x, kT4X)[0]
    };
    l0x.ccH2x = function (hy3x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hy3x)
    };
    l0x.cuH6B = function (sE6y) {
        if (!sE6y) {
            return "0b"
        }
        var ccB2x = ["Bytes", "KB", "MB", "GB"];
        var bd0x = Math.floor(Math.log(sE6y) / Math.log(1024));
        return (sE6y / Math.pow(1024, Math.floor(bd0x))).toFixed(bd0x == 1 ? 0 : 1) + ccB2x[bd0x]
    };
    l0x.bHB6v = function (dp1x, fa2x, ccw2x) {
        if (!dp1x) return dp1x;
        var dF1x = k0x.fe2x(dp1x);
        if (dF1x <= fa2x) return dp1x;
        var bif9W = dF1x - dp1x.length, bii9Z = dp1x.length - bif9W;
        var fH2x = Math.ceil(fa2x / 2), ccp2x = fa2x, bHA6u = 0;
        if (bif9W < fH2x) fH2x = fa2x - bif9W;
        if (bii9Z < fa2x) fa2x = bii9Z + Math.ceil((fa2x - bii9Z) / 2);
        while (fH2x <= fa2x) {
            bHA6u = k0x.fe2x(dp1x.substr(0, fH2x));
            var bim9d = ccp2x - bHA6u;
            if (bim9d == 0) break;
            if (bim9d == 1) {
                var ccl2x = k0x.fe2x(dp1x.charAt(fH2x));
                if (ccl2x == 1) {
                    fH2x++;
                    break
                } else {
                    break
                }
            }
            fH2x += Math.floor(bim9d / 2)
        }
        return dp1x.substr(0, fH2x) + (!!ccw2x ? "" : "...")
    }
})();
(function () {
    function cch2x() {
        var zb9S = function (jg3x) {
            if (jg3x < -128) {
                return zb9S(128 - (-128 - jg3x))
            } else if (jg3x >= -128 && jg3x <= 127) {
                return jg3x
            } else if (jg3x > 127) {
                return zb9S(-129 + jg3x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var ccg2x = function (jg3x, bj0x) {
            return zb9S(jg3x + bj0x)
        };
        var ccf2x = function (XH6B, biB9s) {
            if (XH6B == null) {
                return null
            }
            if (biB9s == null) {
                return XH6B
            }
            var pH5M = [];
            var cce2x = biB9s.length;
            for (var i = 0, bp0x = XH6B.length; i < bp0x; i++) {
                pH5M[i] = ccg2x(XH6B[i], biB9s[i % cce2x])
            }
            return pH5M
        };
        var ccd2x = function (XK6E) {
            if (XK6E == null) {
                return XK6E
            }
            var pH5M = [];
            var ccc2x = XK6E.length;
            for (var i = 0, bp0x = ccc2x; i < bp0x; i++) {
                pH5M[i] = zb9S(0 - XK6E[i])
            }
            return pH5M
        };
        var ccb2x = function (biT9K, Mr3x) {
            biT9K = zb9S(biT9K);
            Mr3x = zb9S(Mr3x);
            return zb9S(biT9K ^ Mr3x)
        };
        var bHx6r = function (Mj3x, bjn9e) {
            if (Mj3x == null || bjn9e == null || Mj3x.length != bjn9e.length) {
                return Mj3x
            }
            var pH5M = [];
            var cbZ2x = Mj3x.length;
            for (var i = 0, bp0x = cbZ2x; i < bp0x; i++) {
                pH5M[i] = ccb2x(Mj3x[i], bjn9e[i])
            }
            return pH5M
        };
        var bHw6q = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cbX2x = function (cM1x) {
            var Hv1x = [];
            Hv1x.push(bHw6q[cM1x >>> 4 & 15]);
            Hv1x.push(bHw6q[cM1x & 15]);
            return Hv1x.join("")
        };
        var cbW2x = function (sE6y) {
            var bp0x = sE6y.length;
            if (sE6y == null || bp0x < 0) {
                return new String("")
            }
            var Hv1x = [];
            for (var i = 0; i < bp0x; i++) {
                Hv1x.push(cbX2x(sE6y[i]))
            }
            return Hv1x.join("")
        };
        var bHv6p = function (XY6S) {
            if (XY6S == null || XY6S.length == 0) {
                return XY6S
            }
            var bjT9K = new String(XY6S);
            var pH5M = [];
            var bp0x = bjT9K.length / 2;
            var bj0x = 0;
            for (var i = 0; i < bp0x; i++) {
                var nX5c = parseInt(bjT9K.charAt(bj0x++), 16) << 4;
                var nV5a = parseInt(bjT9K.charAt(bj0x++), 16);
                pH5M[i] = zb9S(nX5c + nV5a)
            }
            return pH5M
        };
        var cbS2x = function (cQ1x) {
            if (cQ1x == null || cQ1x == undefined) {
                return cQ1x
            }
            var Li2x = encodeURIComponent(cQ1x);
            var sE6y = [];
            var bHr6l = Li2x.length;
            for (var i = 0; i < bHr6l; i++) {
                if (Li2x.charAt(i) == "%") {
                    if (i + 2 < bHr6l) {
                        sE6y.push(bHv6p(Li2x.charAt(++i) + "" + Li2x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    sE6y.push(Li2x.charCodeAt(i))
                }
            }
            return sE6y
        };
        var cbE1x = function (tZ7S) {
            var bd0x = 0;
            bd0x += (tZ7S[0] & 255) << 24;
            bd0x += (tZ7S[1] & 255) << 16;
            bd0x += (tZ7S[2] & 255) << 8;
            bd0x += tZ7S[3] & 255;
            return bd0x
        };
        var cuL6F = function (bd0x) {
            var tZ7S = [];
            tZ7S[0] = bd0x >>> 24 & 255;
            tZ7S[1] = bd0x >>> 16 & 255;
            tZ7S[2] = bd0x >>> 8 & 255;
            tZ7S[3] = bd0x & 255;
            return tZ7S
        };
        var cbv1x = function (dw1x, bkg9X, bp0x) {
            var ed2x = [];
            if (dw1x == null || dw1x.length == 0) {
                return ed2x
            }
            if (dw1x.length < bp0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bp0x; i++) {
                ed2x[i] = dw1x[bkg9X + i]
            }
            return ed2x
        };
        var bkh9Y = function (dw1x, bkg9X, qK5P, cbt1x, bp0x) {
            if (dw1x == null || dw1x.length == 0) {
                return qK5P
            }
            if (qK5P == null) {
                throw new Error("1004")
            }
            if (dw1x.length < bp0x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bp0x; i++) {
                qK5P[cbt1x + i] = dw1x[bkg9X + i]
            }
            return qK5P
        };
        var cbp1x = function (bp0x) {
            var bs0x = [];
            for (var i = 0; i < bp0x; i++) {
                bs0x[i] = 0
            }
            return bs0x
        };
        var cbm1x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var HD1x = 64;
        var Yn6h = 64;
        var bHc6W = 4;
        var cbk1x = function (pG5L) {
            var bGZ6T = [];
            if (pG5L == null || pG5L == undefined || pG5L.length == 0) {
                return cbp1x(Yn6h)
            }
            if (pG5L.length >= Yn6h) {
                return cbv1x(pG5L, 0, Yn6h)
            } else {
                for (var i = 0; i < Yn6h; i++) {
                    bGZ6T[i] = pG5L[i % pG5L.length]
                }
            }
            return bGZ6T
        };
        var cbf1x = function (Yp6j) {
            if (Yp6j == null || Yp6j.length % HD1x != 0) {
                throw new Error("1005")
            }
            var bkD9u = [];
            var bj0x = 0;
            var cbe1x = Yp6j.length / HD1x;
            for (var i = 0; i < cbe1x; i++) {
                bkD9u[i] = [];
                for (var j = 0; j < HD1x; j++) {
                    bkD9u[i][j] = Yp6j[bj0x++]
                }
            }
            return bkD9u
        };
        var cbd1x = function (bGY6S) {
            var nX5c = bGY6S >>> 4 & 15;
            var nV5a = bGY6S & 15;
            var bj0x = nX5c * 16 + nV5a;
            return cbm1x[bj0x]
        };
        var bGW6Q = function (bkN0x) {
            if (bkN0x == null) {
                return null
            }
            var bGV6P = [];
            for (var i = 0, bp0x = bkN0x.length; i < bp0x; i++) {
                bGV6P[i] = cbd1x(bkN0x[i])
            }
            return bGV6P
        };
        var caW1x = function (HT1x, pG5L) {
            if (HT1x == null) {
                return null
            }
            if (HT1x.length == 0) {
                return []
            }
            if (HT1x.length % HD1x != 0) {
                throw new Error("1005")
            }
            pG5L = cbk1x(pG5L);
            var bld0x = pG5L;
            var blg0x = cbf1x(HT1x);
            var Pd3x = [];
            var caV1x = blg0x.length;
            for (var i = 0; i < caV1x; i++) {
                var blm0x = bGW6Q(blg0x[i]);
                blm0x = bGW6Q(blm0x);
                var blo0x = bHx6r(blm0x, bld0x);
                var caT1x = ccf2x(blo0x, ccd2x(bld0x));
                blo0x = bHx6r(caT1x, pG5L);
                bkh9Y(blo0x, 0, Pd3x, i * HD1x, HD1x);
                bld0x = blg0x[i]
            }
            var bGT6N = [];
            bkh9Y(Pd3x, Pd3x.length - bHc6W, bGT6N, 0, bHc6W);
            var bp0x = cbE1x(bGT6N);
            if (bp0x > Pd3x.length) {
                throw new Error("1006")
            }
            var pH5M = [];
            bkh9Y(Pd3x, 0, pH5M, 0, bp0x);
            return pH5M
        };
        var caR1x = function (YC6w, J0x) {
            if (YC6w == null) {
                return null
            }
            var bGS6M = new String(YC6w);
            if (bGS6M.length == 0) {
                return []
            }
            var HT1x = bHv6p(bGS6M);
            if (J0x == null || J0x == undefined) {
                throw new Error("1007")
            }
            var pG5L = cbS2x(J0x);
            return caW1x(HT1x, pG5L)
        };
        this.caK1x = function (YC6w, J0x) {
            var caI1x = caR1x(YC6w, J0x);
            var blF0x = new String(cbW2x(caI1x));
            var YF6z = [];
            var caB1x = blF0x.length / 2;
            var bj0x = 0;
            for (var i = 0; i < caB1x; i++) {
                YF6z.push("%");
                YF6z.push(blF0x.charAt(bj0x++));
                YF6z.push(blF0x.charAt(bj0x++))
            }
            return YF6z.join("")
        }
    }

    window.settmusic = (new cch2x).caK1x
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, H0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"),
        p0x = c0x("nm.d"), l0x = c0x("nm.x"), J0x = "Search-tracks_", b0x;
    p0x.eO2x({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (Q0x) {
                return Q0x
            }, onerror: function (Q0x, e0x) {
                if (Q0x.code == 407) {
                    e0x.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e0x, bc0x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cav1x(parseInt(e0x.data.type)) || "suggest",
                    keyword: e0x.data.s,
                    offset: e0x.offset
                })
            }, format: function (Q0x, e0x) {
                if (Q0x.abroad) {
                    try {
                        Q0x.result = JSON.parse(decodeURIComponent(settmusic(Q0x.result, p0x.sk)))
                    } catch (e) {
                    }
                }
                Q0x.result = Q0x.result || {};
                var j0x, co1x, mk4o = [], tA6u = e0x.data.s || "", fY2x = e0x.data.limit,
                    t0x = parseInt(e0x.data.type) || 1, m0x = Q0x.result;
                switch (t0x) {
                    case 1:
                        j0x = this.bGL6F(m0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                        co1x = m0x.songCount;
                        break;
                    case 10:
                        j0x = m0x.albums;
                        co1x = m0x.albumCount;
                        break;
                    case 100:
                        j0x = m0x.artists;
                        co1x = m0x.artistCount;
                        break;
                    case 1e3:
                        j0x = m0x.playlists;
                        co1x = m0x.playlistCount;
                        break;
                    case 1002:
                        j0x = m0x.userprofiles;
                        co1x = m0x.userprofileCount;
                        break;
                    case 1004:
                        j0x = m0x.mvs;
                        co1x = m0x.mvCount;
                        break;
                    case 1006:
                        j0x = this.bGL6F(m0x.songs, e0x.data.hlpretag, e0x.data.hlposttag);
                        co1x = m0x.songCount;
                        break;
                    case 1009:
                        var ps5x = m0x.djRadios;
                        if (!!ps5x) {
                            k0x.be0x(ps5x, function (z0x, s0x, cap1x) {
                                z0x.xid = z0x.id;
                                z0x.id = z0x.id + "_rad"
                            });
                            if (ps5x.length) {
                                this.rT6N("radio_search-" + e0x.data.s, ps5x)
                            }
                        }
                        co1x = Math.min(m0x.djprogramCount, 500);
                        j0x = m0x.djprograms || [];
                        if (e0x.data.isPub) {
                            k0x.mc4g(ps5x, function (z0x, s0x, cap1x) {
                                z0x.stype = 1;
                                j0x.unshift(z0x)
                            });
                            co1x = Math.min(j0x.length, 500)
                        }
                        break
                }
                this.B0x("onsearchload", Q0x);
                if (j0x && j0x.length) {
                    for (var i = 0; i < fY2x; i++) {
                        if (i < j0x.length) {
                            mk4o.push(j0x[i])
                        } else {
                            mk4o.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(co1x || 0, tA6u.length < 3 ? 500 : 5e3), list: mk4o}
            }, onerror: function (Q0x, e0x) {
                e0x.onload(e0x, []);
                if (k0x.gl2x(e0x.onerror)) {
                    e0x.onerror(Q0x)
                }
            }
        }
    });
    p0x.Bd0x = NEJ.C();
    b0x = p0x.Bd0x.O0x(p0x.gX3x);
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.cam1x = function (J0x, e0x) {
        if (!J0x) return;
        if (!!this.bGI6C) v0x.lh4l(this.bGI6C);
        this.bGI6C = this.cj1x("search-suggest", NEJ.X({data: {s: J0x, limit: 8}}, e0x))
    };
    b0x.caj1x = function (J0x, e0x) {
        if (!J0x) return;
        this.cj1x("search-multimatch", NEJ.X({data: {s: J0x}}, e0x))
    };
    b0x.bGL6F = function () {
        var cah1x = function (gW3x, bGF6z, bGE6y) {
            var bZZ1x = gW3x.match(new RegExp(bGF6z + "(.+?)" + bGE6y, "gi")), ct1x = 0;
            k0x.be0x(bZZ1x, function (r0x) {
                ct1x += r0x.replace(new RegExp(bGF6z, "g"), "").replace(new RegExp(bGE6y, "g"), "").length
            });
            return ct1x
        };
        return function (iA3x, bZV1x, bZK1x) {
            var bGz6t = [];
            k0x.be0x(iA3x, function (bf0x, bd0x) {
                bf0x = l0x.Da0x(bf0x);
                var YU6O = bf0x.lyrics || [], dF1x = YU6O.length, iV3x = 0, co1x = 4, YW6Q = {l: 0, v: 0}, bmT0x;
                if (dF1x > 4) {
                    k0x.be0x(YU6O, function (gW3x, s0x) {
                        var bGy5D = cah1x(gW3x, bZV1x, bZK1x);
                        if (bGy5D > YW6Q.v) {
                            YW6Q.v = bGy5D;
                            YW6Q.l = s0x
                        }
                    });
                    iV3x = YW6Q.l;
                    iV3x = Math.max(iV3x, 0);
                    bmT0x = dF1x - iV3x - 4;
                    if (bmT0x < 0) iV3x += bmT0x;
                    bf0x.lrcAbstractEnd = iV3x + co1x - 1
                } else {
                    bf0x.lrcAbstractEnd = dF1x - 1
                }
                bf0x.lrcAbstractStart = iV3x;
                bf0x.indexId = (YU6O && YU6O.length ? "L" : "NL") + bf0x.id;
                bGz6t.push(bf0x)
            });
            return bGz6t
        }
    }();
    b0x.cav1x = function (t0x) {
        switch (t0x) {
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
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        v0x = c0x("nej.j"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), F0x = c0x("nm.m"), n0x = c0x("nm.l"),
        cZ1x = c0x("nm.i"), L0x = c0x("nm.m.sch"), b0x, K0x;
    var YX6R = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    L0x.Rl4p = NEJ.C();
    b0x = L0x.Rl4p.O0x(H0x.cz1x);
    b0x.cl1x = function (f0x) {
        this.cs1x();
        this.bS1x(f0x);
        this.P0x = p0x.Bd0x.fV2x()
    };
    b0x.bS1x = function (f0x) {
        this.o0x = f0x;
        var j0x = a9j.I0x(f0x, "j-flag");
        this.ev2x = j0x[0];
        this.bnq0x = j0x[1];
        this.cf1x = j0x[2];
        this.ml4p = j0x[3];
        h0x.q0x(this.ev2x, "input", this.fx2x.g0x(this));
        h0x.q0x(this.ev2x, "keyup", this.fx2x.g0x(this));
        h0x.q0x(this.ev2x, "focus", this.fS2x.g0x(this));
        h0x.q0x(this.bnq0x, "click", this.fS2x.g0x(this));
        h0x.q0x(this.ev2x, "blur", this.bnA0x.g0x(this));
        h0x.q0x(this.cf1x, "click", this.Za6U.g0x(this));
        h0x.q0x(this.o0x, "keydown", this.bnC0x.g0x(this));
        h0x.q0x(this.o0x, "keypress", this.Zc6W.g0x(this));
        h0x.q0x(this.ml4p, "mouseover", this.Pj3x.g0x(this));
        h0x.q0x(this.ml4p, "mouseout", this.Pj3x.g0x(this));
        if (this.ev2x.value) {
            this.ev2x.value = ""
        }
        if (this.ev2x.style.opacity != null) {
            this.ev2x.style.opacity = 1
        }
    };
    b0x.fx2x = function (d0x) {
        if (d0x.type == "keyup" && d0x.keyCode == 8 || d0x.keyCode == 46) {
            this.Eb0x()
        } else if (d0x.type == "input" || d0x.type == "propertychange") {
            setTimeout(this.Eb0x.g0x(this), 0)
        }
    };
    b0x.fS2x = function () {
        this.wp8h(this.bnq0x, !1);
        a9j.y0x(this.o0x, "m-srch-fcs");
        this.ev2x.focus();
        this.Eb0x();
        a9j.y0x(a9j.I0x("g-topbar", "j-showoff")[0], "f-hide")
    };
    b0x.bnA0x = function () {
        if (!this.ev2x.value) {
            this.wp8h(this.bnq0x, !0)
        }
        var DV0x = a9j.I0x(this.ml4p, "slt");
        if (this.Zk6e(this.ml4p) && DV0x.length > 0 && a9j.u0x(DV0x[0], "type")) {
            var hl3x = DV0x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hl3x)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.ev2x.value})
            }
            this.bnP1x(DV0x[0].href)
        }
        this.wp8h(this.ml4p, !1);
        a9j.w0x(this.o0x, "m-srch-fcs")
    };
    b0x.wp8h = function (f0x, kQ4U) {
        a9j.Y0x(f0x, "display", !kQ4U ? "none" : "")
    };
    b0x.Zk6e = function (f0x) {
        return a9j.dc1x(f0x, "display") != "none"
    };
    b0x.Eb0x = function () {
        var Cw0x = function (sq6k, cK1x) {
            if (!cK1x) return;
            return cK1x.replace(new RegExp(l0x.bHU6O(sq6k), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var bZH1x = function (hy3x) {
            var gf2x = this.o0x.clientWidth > 250 ? 41 : 17;
            if (l0x.GN1x(hy3x) > gf2x) {
                return l0x.zr9i(hy3x, gf2x) + "..."
            } else {
                return hy3x
            }
        };
        var Zr6l = function (m0x) {
            return m0x.songs && m0x.songs.length || m0x.albums && m0x.albums.length || m0x.artists && m0x.artists.length || m0x.playlists && m0x.playlists.length
        };
        var tl6f = function (sq6k, d0x) {
            if (!l0x.bHV6P(this.ev2x) || l0x.iY3x(this.ev2x.value)) {
                this.wp8h(this.ml4p, !1);
                return
            }
            d0x.keyword = k0x.dK1x(sq6k);
            var ds1x = a9j.bQ1x("m-search-suggest", d0x, {mark: Cw0x.g0x(this, sq6k), cutStr: bZH1x.g0x(this)}),
                qX5c = d0x.result.order;
            this.ml4p.innerHTML = ds1x;
            this.wp8h(this.ml4p, Zr6l(d0x.result) ? !0 : !1);
            if (!!qX5c && !!qX5c.length && YX6R[qX5c[0]]) {
                this.boi1x = {keyword: sq6k, type: YX6R[qX5c[0]]}
            }
        };
        var bZz1x = function () {
            this.wp8h(this.ml4p, !1);
            return
        };
        return function () {
            var z0x = this.ev2x.value;
            if (l0x.iY3x(z0x)) {
                this.wp8h(this.ml4p, !1);
                return
            }
            this.P0x.cam1x(z0x, {onload: tl6f.g0x(this, z0x), onForbidden: bZz1x.g0x(this)})
        }
    }();
    b0x.Zc6W = function (d0x) {
        if (d0x.keyCode != 13) return;
        var DV0x = a9j.I0x(this.ml4p, "slt");
        if (this.Zk6e(this.ml4p) && DV0x.length > 0) {
            this.bnP1x(DV0x[0].href);
            this.wp8h(this.ml4p, !1);
            return
        }
        this.Za6U();
        this.wp8h(this.ml4p, !1)
    };
    b0x.bnC0x = function (d0x) {
        if (!this.Zk6e(this.ml4p)) return;
        var j0x = a9j.I0x(this.ml4p, "xtag"), dF1x = j0x.length, s0x = k0x.cW1x(j0x, function (r0x) {
            return a9j.bB0x(r0x, "slt")
        });
        switch (d0x.keyCode) {
            case 38:
                if (s0x >= 0) a9j.w0x(j0x[s0x], "slt");
                a9j.y0x(j0x[s0x <= 0 ? dF1x - 1 : s0x - 1], "slt");
                break;
            case 40:
                if (s0x >= 0) a9j.w0x(j0x[s0x], "slt");
                a9j.y0x(j0x[(s0x + 1) % dF1x], "slt");
                break
        }
    };
    b0x.Pj3x = function (d0x) {
        if (!this.Zk6e(this.ml4p)) return;
        var Lr2x, E0x = h0x.U0x(d0x), j0x = a9j.I0x(this.ml4p, "xtag");
        if (E0x.tagName.toLowerCase() == "a") Lr2x = E0x; else if (E0x.parentNode.tagName.toLowerCase() == "a") Lr2x = E0x.parentNode;
        if (!Lr2x) return;
        k0x.be0x(j0x, function (r0x) {
            a9j.w0x(r0x, "slt");
            a9j.u0x(r0x, "type", "")
        });
        if (d0x.type == "mouseout") return;
        a9j.y0x(Lr2x, "slt");
        a9j.u0x(Lr2x, "type", "mouse")
    };
    b0x.Za6U = function () {
        var dI1x = location.hash, s0x = dI1x.indexOf("?"), bw0x = k0x.hk3x(dI1x.substring(s0x + 1));
        bw0x.s = this.ev2x.value;
        if (l0x.iY3x(bw0x.s)) return;
        if (!bw0x.type && this.boi1x && this.boi1x.keyword == bw0x.s) {
            bw0x.type = this.boi1x.type
        }
        this.bnP1x("/search/#/?" + k0x.da1x(bw0x));
        this.ev2x.blur()
    };
    b0x.bnP1x = function (V0x) {
        if (location.dispatch2) {
            location.dispatch2(V0x)
        } else {
            location.href = V0x
        }
    };
    L0x.Rl4p.bZv1x = function () {
        var j0x = a9j.I0x(document.body, "j-suggest");
        k0x.be0x(j0x, function (r0x) {
            new L0x.Rl4p(r0x)
        })
    };
    L0x.Rl4p.bZv1x()
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, H0x = c0x("nej.ut"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), v0x = c0x("nej.j"),
        p0x = c0x("nm.d"), b0x;
    p0x.eO2x({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (Q0x) {
                return {total: Q0x.size || 0, list: Q0x.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (Q0x) {
                return {total: Q0x.size || 0, list: Q0x.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (Q0x) {
                return Q0x.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (Q0x, e0x) {
                if (e0x.offset == 0) {
                    var om5r = Q0x.data[0];
                    this.B0x("onfirstload", om5r);
                    Q0x.data.splice(0, 1);
                    return Q0x.data
                } else {
                    return Q0x.data
                }
            }
        }
    });
    p0x.Cb0x = NEJ.C();
    b0x = p0x.Cb0x.O0x(p0x.gX3x);
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.boD1x = function () {
        var rf6Z = "LOCAL_FLAG";
        return function (t0x, bZt1x) {
            var i0x = this.Ej0x(rf6Z, {});
            if (i0x[t0x]) {
                return true
            } else {
                if (!bZt1x) {
                    i0x[t0x] = true;
                    this.vq8i(rf6Z, i0x)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), N0x = c0x("nej.ut"), boF1x;
    if (!!N0x.nH4L) return;
    N0x.nH4L = NEJ.C();
    boF1x = N0x.nH4L.O0x(N0x.cz1x);
    boF1x.bk0x = function () {
        var bZr1x = function (d0x) {
            d0x.matched = d0x.source == d0x.target
        };
        return function (e0x) {
            e0x.oncheck = e0x.oncheck || bZr1x;
            this.bl0x(e0x);
            this.bV1x = e0x.list;
            this.im3x = e0x.dataset || "id";
            this.ju3x = e0x.selected || "js-selected"
        }
    }();
    boF1x.nt4x = function (z0x) {
        var E0x, d0x = {target: z0x};
        k0x.be0x(this.bV1x, function (f0x) {
            delete d0x.matched;
            d0x.source = a9j.u0x(f0x, this.im3x);
            this.B0x("oncheck", d0x);
            if (!d0x.matched) {
                a9j.w0x(f0x, this.ju3x)
            } else {
                E0x = f0x;
                a9j.y0x(f0x, this.ju3x)
            }
        }, this);
        return E0x
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), N0x = c0x("nej.ut"), oC5H;
    if (!!N0x.cL1x) return;
    N0x.cL1x = NEJ.C();
    oC5H = N0x.cL1x.O0x(N0x.cz1x);
    oC5H.cl1x = function () {
        this.iB3x = {};
        this.cs1x();
        this.bI1x()
    };
    oC5H.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.bpl1x = e0x.umi || "";
        this.yi9Z = e0x.dispatcher;
        this.IF2x = e0x.composite || X0x;
        this.blv0x({
            onshow: this.eR2x.g0x(this),
            onhide: this.jD3x.g0x(this),
            onrefresh: this.ei2x.g0x(this),
            onmessage: this.pR5W.g0x(this),
            onbeforehide: this.bZp1x.g0x(this)
        })
    };
    oC5H.bD0x = function () {
        delete this.bpl1x;
        this.iB3x = {};
        this.bH0x()
    };
    oC5H.to6i = function (d0x) {
        if (!!d0x) d0x.stopped = !0
    };
    oC5H.bI1x = bm0x;
    oC5H.eR2x = bm0x;
    oC5H.jD3x = bm0x;
    oC5H.ei2x = bm0x;
    oC5H.pR5W = bm0x;
    oC5H.bZp1x = bm0x;
    oC5H.pF5K = function (nE4I, bF0x, eF2x) {
        this.yi9Z.bpw1x({to: nE4I, mode: eF2x || 0, data: bF0x, from: this.bpl1x})
    };
    oC5H.cuO6I = function (t0x, i0x) {
        this.yi9Z.yf9W(t0x, {from: this.bpl1x, data: i0x})
    };
    oC5H.cuP6J = function () {
        this.yi9Z.ls4w.apply(this.yi9Z, arguments)
    };
    oC5H.bZg1x = function () {
        return this.iB3x
    };
    a9j.ZH6B = function () {
        if (!!window.dispatcher) {
            dispatcher.bGr5w.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c0x = NEJ.P, bm0x = NEJ.F, X0x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), N0x = c0x("nej.ut"), wX8P;
    if (!!N0x.dn1x) return;
    N0x.dn1x = NEJ.C();
    wX8P = N0x.dn1x.O0x(N0x.cL1x);
    wX8P.bZc1x = function (e0x) {
        var bC0x;
        if (!bC0x) {
            var i0x = e0x.input || X0x;
            bC0x = a9j.x0x(i0x.parent)
        }
        if (!bC0x) {
            var i0x = e0x.data || X0x;
            bC0x = a9j.x0x(i0x.parent)
        }
        if (!bC0x) {
            bC0x = a9j.x0x(e0x.parent)
        }
        return bC0x
    };
    wX8P.eR2x = function (e0x) {
        var bC0x = this.bZc1x(e0x);
        if (!!bC0x && !!this.o0x) bC0x.appendChild(this.o0x);
        this.gt2x(e0x);
        this.bGq5v("onshow", e0x);
        this.ei2x(e0x)
    };
    wX8P.ei2x = function (e0x) {
        this.fO2x(e0x);
        this.bGq5v("onrefresh", e0x)
    };
    wX8P.jD3x = function () {
        this.km3x();
        this.bZa1x();
        a9j.me4i(this.o0x)
    };
    wX8P.bGo5t = function () {
        var fU2x = /^onshow|onrefresh|delay$/;
        return function (bX1x) {
            return fU2x.test(bX1x)
        }
    }();
    wX8P.bGn5s = bm0x;
    wX8P.bGq5v = function () {
        var bGk5p = function (bw0x, e0x, bX1x, oB5G) {
            if (this.bGo5t(oB5G)) return;
            if (!!bw0x) bX1x += (bX1x.indexOf("?") > 1 ? "&" : "?") + bw0x;
            var cN1x = this.bGn5s(oB5G, e0x) || {};
            cN1x.location = e0x;
            cN1x.parent = this.iB3x[oB5G];
            this.yi9Z.id3x(bX1x, {input: cN1x})
        };
        return function (t0x, e0x) {
            if (!e0x.nodelay) {
                if (!!this.IF2x.delay) return;
                var bGj5o = this.IF2x[t0x] || X0x;
                if (bGj5o.delay) return
            }
            var bw0x = k0x.da1x(e0x.param) || "";
            if (t0x == "onrefresh") {
                k0x.dZ2x(this.IF2x, bGk5p.g0x(this, bw0x, e0x))
            }
            k0x.dZ2x(bGj5o, bGk5p.g0x(this, bw0x, e0x))
        }
    }();
    wX8P.bZa1x = function () {
        var zp9g = function (bX1x, oB5G) {
            if (!this.bGo5t(oB5G)) this.yi9Z.bq0x(bX1x)
        };
        return function () {
            k0x.dZ2x(this.IF2x, zp9g, this);
            k0x.dZ2x(this.IF2x.onshow, zp9g, this);
            k0x.dZ2x(this.IF2x.onrefresh, zp9g, this)
        }
    }()
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), H0x = c0x("nej.ut"), v0x = c0x("nej.j"),
        k0x = c0x("nej.u"), F0x = c0x("nm.m"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), b0x, K0x;
    F0x.LN3x = NEJ.C();
    b0x = F0x.LN3x.O0x(H0x.cz1x);
    b0x.cl1x = function () {
        this.cs1x();
        this.o0x = a9j.x0x("g-topbar");
        var j0x = a9j.I0x(this.o0x, "j-tflag");
        this.bqI2x = j0x[0];
        this.DA0x = j0x[1];
        this.bGi5n = j0x[2];
        this.bqN2x = j0x[3];
        this.bYH1x = H0x.nH4L.A0x({list: this.bqI2x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bqS2x = H0x.nH4L.A0x({list: this.bqN2x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bU1x([[this.o0x, "click", this.Kn2x.g0x(this)], [this.DA0x, "click", this.cw1x.g0x(this)], [this.DA0x, "mouseout", this.bGh5m.g0x(this, 0)], [this.DA0x, "mouseover", this.bGh5m.g0x(this, 1)]]);
        window.scrollTopbar = this.bYD1x.g0x(this);
        window.matchNav = this.bGe5j.g0x(this);
        window.polling = this.tQ6K.g0x(this);
        this.brb2x = p0x.Cb0x.A0x();
        this.bYB1x();
        this.IQ2x();
        var bw0x = k0x.hk3x(location.href.split("?")[1]) || {};
        if (bw0x.market) {
            a9j.x0x("topbar-download-link").href = "/download?market=" + bw0x.market
        }
        var brk2x = a9j.I0x(this.o0x, "j-showoff");
        if (brk2x && !this.brb2x.boD1x("newMvSearch")) {
            a9j.w0x(brk2x[0], "f-hide");
            window.setTimeout(function () {
                a9j.y0x(brk2x[0], "f-hide")
            }, 5e3)
        }
    };
    b0x.tQ6K = function (d0x) {
        var dI1x = l0x.Gt1x();
        if (!/^\/msg/.test(dI1x)) {
            var uZ7S = 0;
            uZ7S += d0x.comment;
            uZ7S += d0x.forward;
            uZ7S += d0x.msg;
            uZ7S += d0x.notice;
            if (uZ7S > 0) {
                uZ7S = uZ7S > 99 ? "99+" : uZ7S;
                this.Ql4p.innerText = uZ7S;
                this.IS2x.innerText = uZ7S;
                a9j.w0x(this.Ql4p, "f-hide");
                a9j.w0x(this.IS2x, "f-hide");
                this.ZV6P = true
            } else {
                a9j.y0x(this.Ql4p, "f-hide");
                a9j.y0x(this.IS2x, "f-hide");
                this.ZV6P = false
            }
            var et2x = "/at";
            if (d0x.notice) et2x = "/notify";
            if (d0x.comment) et2x = "/comment";
            if (d0x.msg > 0) et2x = "/private";
            if (d0x.forward > 0) et2x = "/at";
            this.IS2x.parentNode.href = "/msg/#" + et2x
        } else {
            this.IS2x.parentNode.href = "javascript:;";
            a9j.y0x(this.Ql4p, "f-hide");
            a9j.y0x(this.IS2x, "f-hide");
            this.ZV6P = false
        }
        var j0x = a9j.I0x(this.bqI2x, "j-t");
        if (!/^\/friend/.test(dI1x)) {
            if (j0x && j0x.length) {
                a9j.Y0x(j0x[0], "display", d0x.event > 0 ? "" : "none")
            }
        } else {
            a9j.Y0x(j0x[0], "display", "none")
        }
    };
    b0x.cw1x = function (d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (f0x) {
            switch (a9j.u0x(f0x, "action")) {
                case"login":
                    h0x.cd1x(d0x);
                    var t0x = a9j.u0x(f0x, "type");
                    if (t0x) {
                        if (t0x == "sina" || t0x == "tencent") top.open(f0x.href); else top.login(t0x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h0x.cd1x(d0x);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.brb2x.boD1x("storeNew")) {
                        a9j.y0x(this.cuS6M, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.brb2x.boD1x("levelNew")) {
                        a9j.y0x(this.cuW6Q, "f-vhide")
                    }
                    break
            }
        }
    };
    b0x.Kn2x = function (d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (!f0x) return;
        var W0x = a9j.u0x(f0x, "action");
        switch (W0x) {
            case"bilog":
                var bau7n = a9j.u0x(f0x, "logAction"), bay7r = a9j.u0x(f0x, "logJson");
                window.log(bau7n, bay7r);
                break
        }
    };
    b0x.bGh5m = function (xw9n, d0x) {
        if (this.baA7t) {
            this.baA7t.style.display = !xw9n ? "none" : "";
            (xw9n || !this.ZV6P ? a9j.y0x : a9j.w0x).call(window, this.Ql4p, "f-hide")
        }
    };
    b0x.bYD1x = function (fR2x) {
        a9j.Y0x(this.o0x, "top", -fR2x + "px")
    };
    b0x.bGe5j = function (et2x, bYu1x) {
        this.bYH1x.nt4x(et2x);
        if (et2x == "discover") {
            a9j.y0x(this.bGi5n, "f-hide");
            a9j.w0x(this.bqN2x, "f-hide");
            window.g_topBarHeight = 105;
            this.bqS2x.nt4x(bYu1x)
        } else {
            a9j.w0x(this.bGi5n, "f-hide");
            a9j.y0x(this.bqN2x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b0x.bYB1x = function () {
        var tX7Q = a9j.x0x("g_iframe");
        if (!tX7Q) return;
        var gg2x = tX7Q.contentWindow.document.getElementById("g_top");
        this.bGe5j(a9j.u0x(gg2x, "module"), a9j.u0x(gg2x, "sub"))
    };
    var ZW6Q = {}, bGa5f = /\/\/\w+/, bYr1x = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bGa5f, "") !== b.replace(bGa5f, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b0x.bYo1x = function (ZZ6T) {
        var mz4D = k0x.cW1x(bYr1x, function (z0x, J0x) {
            if (k0x.gl2x(z0x)) {
                return z0x(ZZ6T[J0x], ZW6Q[J0x])
            } else {
                return ZZ6T[J0x] !== ZW6Q[J0x]
            }
        });
        ZW6Q = ZZ6T;
        return ZZ6T[mz4D]
    };
    b0x.IQ2x = function () {
        var dk1x = GUser || {}, bYn1x = GUserAcc || {};
        if (dk1x && dk1x.userId) {
            var bFZ5e = NEJ.X(dk1x, bYn1x);
            if (this.bYo1x(bFZ5e)) {
                a9j.dQ1x(this.DA0x, "m-topbar-user-login", bFZ5e)
            }
        } else {
            ZW6Q = {};
            this.DA0x.innerHTML = a9j.hY3x("m-topbar-user-unlogin");
            var j0x = a9j.I0x(this.bqI2x, "j-t");
            a9j.Y0x(j0x[0], "display", "none")
        }
        a9j.w0x(this.DA0x, "f-hide");
        this.ZV6P = false;
        var j0x = a9j.I0x(this.DA0x, "j-uflag");
        if (dk1x && dk1x.userId) {
            this.Ql4p = j0x.shift();
            this.baA7t = j0x.shift();
            this.IS2x = j0x.shift()
        } else {
            this.baA7t = j0x.shift()
        }
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), H0x = c0x("nej.ut"), p0x = c0x("nm.d"), b0x, K0x;
    p0x.eO2x({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (Q0x) {
                h0x.B0x(p0x.rI6C, "message", Q0x)
            }
        }
    });
    p0x.rI6C = NEJ.C();
    b0x = p0x.rI6C.O0x(p0x.gX3x);
    b0x.baa6U = function () {
        this.cj1x("polling-get", {})
    };
    b0x.vn8f = function () {
        var eX2x;
        return function () {
            if (!!eX2x) return;
            eX2x = window.setInterval(this.baa6U.g0x(this), 1e5);
            this.baa6U()
        }
    }();
    H0x.fr2x.A0x({event: "message", element: p0x.rI6C})
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
                decoded += "ï¿½" + packet.length + "ï¿½" + packets[i]
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
            if (data.charAt(0) == "ï¿½") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "ï¿½") {
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
            WebSocket.bac6W(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.bac6W(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.OD3x.length = 0;
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
                    WebSocket.baX7Q();
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
            self.gu2x = WebSocket.bYl1x++;
            WebSocket.bFY5d[self.gu2x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.kO4S = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.bac6W(function () {
                    WebSocket.oL5Q.create(self.gu2x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oL5Q.send(this.gu2x, encodeURIComponent(data));
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
            WebSocket.oL5Q.close(this.gu2x)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.kO4S)) {
                this.kO4S[type] = []
            }
            this.kO4S[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.kO4S)) return;
            var events = this.kO4S[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.kO4S[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.bYj1x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFX5c(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFX5c("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bXY1x("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bFX5c = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.bXY1x = function (type, data) {
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
        WebSocket.oL5Q = null;
        WebSocket.bFY5d = {};
        WebSocket.OD3x = [];
        WebSocket.bYl1x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.bac6W(function () {
                WebSocket.oL5Q.loadManualPolicyFile(url)
            })
        };
        WebSocket.baX7Q = function () {
            if (WebSocket.oL5Q) return;
            if (WebSocket.bXX1x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bXX1x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bXV1x()) {
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
        WebSocket.cva6U = function () {
            setTimeout(function () {
                WebSocket.oL5Q = document.getElementById("webSocketFlash");
                WebSocket.oL5Q.setCallerUrl(location.href);
                WebSocket.oL5Q.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.OD3x.length; ++i) {
                    WebSocket.OD3x[i]()
                }
                WebSocket.OD3x = []
            }, 0)
        };
        WebSocket.cvc6W = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oL5Q.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFY5d[events[i].webSocketId].bYj1x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cve6Y = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dy1x = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bac6W = function (task) {
            if (WebSocket.oL5Q) {
                task()
            } else {
                WebSocket.OD3x.push(task)
            }
        };
        WebSocket.bXV1x = function () {
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
                    WebSocket.baX7Q()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.baX7Q()
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
        if (!this.dH1x) this.dH1x = {};
        this.bFS5X = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dH1x || !this.dH1x.error || isArray(this.dH1x.error) && !this.dH1x.error.length) {
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
        if (!this.dH1x) return false;
        var handler = this.dH1x[type];
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
        if (!this.dH1x) this.dH1x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dH1x[type]) {
            this.dH1x[type] = listener
        } else if (isArray(this.dH1x[type])) {
            this.dH1x[type].push(listener)
        } else {
            this.dH1x[type] = [this.dH1x[type], listener]
        }
        if (isArray(this.dH1x[type]) && !this.dH1x[type].warned) {
            var m;
            if (this.bFS5X !== undefined) {
                m = this.bFS5X
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dH1x[type].length > m) {
                this.dH1x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dH1x[type].length);
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
        if (!this.dH1x || !this.dH1x[type]) return this;
        var list = this.dH1x[type];
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
            delete this.dH1x[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dH1x = {};
            return this
        }
        var events = this.dH1x && this.dH1x[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dH1x[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dH1x) this.dH1x = {};
        if (!this.dH1x[type]) this.dH1x[type] = [];
        if (!isArray(this.dH1x[type])) {
            this.dH1x[type] = [this.dH1x[type]]
        }
        return this.dH1x[type]
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
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        l0x = c0x("nm.x"), dj1x = c0x("nm.u"), p0x = c0x("nm.d"), MX3x = c0x("pomelo"), do1x = 0, b0x, K0x;
    p0x.eO2x({
        "polling-init": {
            url: "/api/push/init", format: function (Q0x) {
                do1x = 2;
                var sa6U = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, i0x = Q0x.account || X0x, cU1x = GUser.userId;
                MX3x.init(sa6U.host, sa6U.port, true, this.bXP1x.g0x(this, {
                    user: cU1x,
                    nonce: i0x.nonce,
                    domain: sa6U.domain,
                    productKey: sa6U.key,
                    signature: i0x.signature,
                    expire_time: i0x.expireTime
                }))
            }, onerror: function () {
                return this.bbw7p()
            }
        }
    });
    p0x.zk9b = NEJ.C();
    b0x = p0x.zk9b.O0x(p0x.gX3x);
    b0x.cl1x = function () {
        var pd5i = !1;
        return function (e0x) {
            if (!pd5i) {
                pd5i = !0
            }
            this.cs1x(e0x);
            MX3x.on("specify", this.pR5W.g0x(this));
            MX3x.on("broadcast", this.pR5W.g0x(this))
        }
    }();
    b0x.pR5W = function (d0x) {
        k0x.be0x(d0x, function (bF0x) {
            h0x.B0x(p0x.zk9b, "message", bF0x)
        }, this)
    };
    b0x.bbw7p = function () {
        var by0x = 500;
        return function () {
            do1x = 0;
            MX3x.disconnect();
            if (by0x > 6e4) by0x = 500;
            by0x *= 2
        }
    }();
    b0x.bXP1x = function (e0x, bP1x) {
        if (!!bP1x) {
            return this.bbw7p()
        }
        do1x = 3;
        MX3x.registerAndBind(e0x, function (m0x) {
            if (m0x.code != 200) {
                return this.bbw7p()
            }
            do1x = 4
        }.g0x(this))
    };
    b0x.cvg6a = function () {
        dj1x.bXE0x.fV2x().cvh6b()
    };
    b0x.cvj6d = function () {
        dj1x.bXE0x.fV2x().cvk6e()
    };
    b0x.bbM7F = function () {
        var pd5i = !1;
        return function () {
            if (pd5i) return;
            pd5i = !0;
            this.cj1x("polling-init", {})
        }
    }();
    H0x.fr2x.A0x({event: "message", element: p0x.zk9b})
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), v0x = c0x("nej.j"), cM1x = c0x("nej.p"),
        k0x = c0x("nej.u"), n0x = c0x("nm.l"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), di1x = c0x("api"), b0x, K0x;
    var gj2x = a9j.ib3x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">ä»»ä½äº§åä¸­çé®é¢ï¼æ¬¢è¿åé¦ç»æä»¬</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="è¯·è¾å¥åé¦åå®¹"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="è¯·çä¸èç³»æ¹å¼ï¼çµè¯ãQQãé®ç®±ï¼" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>åå®¹ä¸è½ä¸ºç©ºï¼</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>åéæè§</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>å æ¶</i></a></div></div>');
    n0x.bbR7K = NEJ.C();
    b0x = n0x.bbR7K.O0x(n0x.dV2x);
    K0x = n0x.bbR7K.cg1x;
    b0x.bk0x = function (e0x) {
        e0x.title = "æè§åé¦";
        this.bl0x(e0x)
    };
    b0x.bY1x = function () {
        this.ca1x = gj2x
    };
    b0x.bS1x = function () {
        this.cb1x();
        this.gE2x = {};
        var IZ2x = a9j.I0x;
        var DB0x = h0x.q0x;
        this.gE2x.submit_btn = IZ2x(this.o0x, "u-btn2")[0];
        this.gE2x.cancle_btn = IZ2x(this.o0x, "u-btn2")[1];
        this.gE2x.prompt_msg = IZ2x(this.o0x, "u-err")[0];
        this.gE2x.zs = IZ2x(this.o0x, "zs")[0];
        a9j.Y0x(this.gE2x.zs, "display", "none");
        this.gE2x.fb_txt = IZ2x(this.o0x, "u-txt")[0];
        this.gE2x.contact = IZ2x(this.o0x, "u-txt")[1];
        a9j.fB2x(this.gE2x.fb_txt, "holder");
        a9j.fB2x(this.gE2x.contact, "holder");
        if (a9j.bB0x(this.gE2x.fb_txt.parentNode, "holder-parent")) {
            a9j.Y0x(this.gE2x.fb_txt.parentNode, "display", "block")
        }
        if (a9j.bB0x(this.gE2x.contact.parentNode, "holder-parent")) {
            a9j.Y0x(this.gE2x.contact.parentNode, "display", "block")
        }
        DB0x(this.gE2x.submit_btn, "click", this.bXy0x.g0x(this));
        DB0x(this.gE2x.cancle_btn, "click", this.bXx0x.g0x(this));
        DB0x(this.gE2x.prompt_msg, "msgShow", this.bXw0x.g0x(this));
        DB0x(this.gE2x.fb_txt, "keyup", this.tg6a.g0x(this));
        DB0x(this.gE2x.fb_txt, "input", this.fi2x.g0x(this));
        DB0x(this.gE2x.contact, "keyup", this.bXv0x.g0x(this));
        DB0x(this.gE2x.contact, "input", this.bFJ5O.g0x(this));
        this.kA4E = p0x.hK3x.A0x()
    };
    b0x.bXy0x = function (d0x) {
        h0x.bh0x(d0x);
        if (this.cu1x()) return;
        var bi0x = this.gE2x.fb_txt.value.trim();
        var bp0x = bi0x.length;
        var e0x = {type: "json", method: "post", noEnc: true};
        var bFI5N = this.gE2x.contact.value.trim();
        var ZY6S = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l0x.bbE7x(),
            contact: bFI5N
        };
        var i0x = {content: bi0x, client: "web", xInfo: JSON.stringify(ZY6S)}, mR4V = this.kA4E.ciV3x();
        if (mR4V && mR4V.length) {
            i0x.log = mR4V.join("\n")
        }
        if (bp0x == 0) {
            this.gE2x.prompt_msg.innerHTML = "åé¦åå®¹ä¸è½ä¸ºç©º";
            a9j.Y0x(this.gE2x.prompt_msg, "display", "block");
            return
        }
        if (bFI5N.length > 100) {
            this.gE2x.prompt_msg.innerHTML = "èç³»æ¹å¼æå¤åªè½è¾å¥100ä¸ªå­ç¬¦";
            a9j.Y0x(this.gE2x.prompt_msg, "display", "block");
            return
        }
        this.cu1x(true);
        e0x.data = k0x.da1x(i0x);
        e0x.onload = this.bXq0x.g0x(this);
        e0x.onerror = this.hS3x.g0x(this);
        v0x.bo0x("/api/feedback/web", e0x)
    };
    b0x.fi2x = function (d0x) {
        var bp0x = this.gE2x.fb_txt.value.trim().length;
        if (bp0x > 0) a9j.Y0x(this.gE2x.prompt_msg, "display", "none");
        cM1x.cT1x.browser == "ie" && cM1x.cT1x.version < "7.0" ? setTimeout(this.fx2x.g0x(this), 0) : this.fx2x()
    };
    b0x.tg6a = function (d0x) {
        if (d0x.keyCode === 8) this.fx2x()
    };
    b0x.fx2x = function () {
        var bp0x = this.gE2x.fb_txt.value.trim().length;
        this.gE2x.zs.innerHTML = !bp0x ? "0/140" : bp0x + "/140"
    };
    b0x.bFJ5O = function (d0x) {
        var bp0x = this.gE2x.contact.value.trim().length;
        if (bp0x > 0) a9j.Y0x(this.gE2x.prompt_msg, "display", "none")
    };
    b0x.bXv0x = function (d0x) {
        if (d0x.keyCode === 8) this.bFJ5O()
    };
    b0x.bXx0x = function (d0x) {
        h0x.cd1x(d0x);
        this.bq0x()
    };
    b0x.bXw0x = function (d0x) {
        var f0x = h0x.U0x(d0x);
        f0x.innerHTML = "è¯·è¾å¥åé¦åå®¹"
    };
    b0x.cvl6f = function (cvm6g) {
        var f0x = h0x.U0x(d0x);
        f0x.innerHTML = ""
    };
    b0x.bXq0x = function (m0x) {
        this.cu1x(false);
        this.bq0x();
        n0x.Z0x.M0x({tip: "æè§åéæå", autoclose: true})
    };
    b0x.hS3x = function (m0x) {
        this.cu1x(false);
        n0x.Z0x.M0x({tip: "æè§åéå¤±è´¥", autoclose: true})
    };
    b0x.cu1x = function (cD1x) {
        return this.dM1x(this.gE2x.submit_btn, cD1x, "åéæè§", "åéä¸­...")
    };
    b0x.M0x = function () {
        K0x.M0x.call(this);
        this.cu1x(false);
        this.gE2x.fb_txt.value = "";
        this.gE2x.contact.value = "";
        a9j.Y0x(this.gE2x.prompt_msg, "display", "none");
        this.fx2x()
    };
    l0x.bXm0x = function (e0x) {
        e0x = e0x || {};
        if (e0x.title === undefined) e0x.title = "æè§åé¦";
        n0x.bbR7K.M0x(e0x)
    };
    di1x.feedback = l0x.feedback = l0x.bXm0x
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, N0x = c0x("nej.ui"), b0x;
    if (!!N0x.xy9p) return;
    N0x.xy9p = NEJ.C();
    b0x = N0x.xy9p.O0x(N0x.es2x);
    b0x.cl1x = function () {
        this.gu2x = this.bFF5K();
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.cn1x = e0x.index;
        this.fN2x = e0x.total;
        this.gM2x = e0x.range;
        this.fQ2x(e0x.data)
    };
    b0x.bD0x = function () {
        this.bH0x();
        delete this.ba0x;
        delete this.cn1x;
        delete this.fN2x;
        delete this.gM2x
    };
    b0x.hn3x = bm0x;
    b0x.bFF5K = function () {
        var fW2x = +(new Date);
        return function () {
            return "itm-" + ++fW2x
        }
    }();
    b0x.AT0x = function () {
        return this.gu2x
    };
    b0x.hp3x = function () {
        return this.ba0x
    };
    b0x.fQ2x = function (i0x) {
        this.ba0x = i0x || {};
        this.hn3x(this.ba0x)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), N0x = c0x("nej.ui"), b0x, K0x;
    if (!!N0x.ru6o) return;
    N0x.ru6o = NEJ.C();
    b0x = N0x.ru6o.O0x(N0x.xy9p);
    K0x = N0x.ru6o.cg1x;
    b0x.bk0x = function (e0x) {
        this.bXk0x = e0x.pkey || "id";
        this.bl0x(e0x)
    };
    b0x.BV0x = function (i0x) {
        this.B0x("ondelete", {ext: i0x, id: this.AT0x(), data: this.hp3x(), body: this.kn3x()})
    };
    b0x.KC2x = function (i0x) {
        this.B0x("onupdate", {ext: i0x, id: this.AT0x(), data: this.hp3x(), body: this.kn3x()})
    };
    b0x.fQ2x = function (i0x) {
        K0x.fQ2x.apply(this, arguments);
        this.gu2x = this.ba0x[this.bXk0x] || this.bFF5K()
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, eT2x = NEJ.R, a9j = c0x("nej.e"), k0x = c0x("nej.u"), N0x = c0x("nej.ui"), b0x, hR3x,
        bcS7L;
    if (!!N0x.bcU7N) return;
    N0x.bcU7N = NEJ.C();
    b0x = N0x.bcU7N.O0x(N0x.es2x);
    b0x.bk0x = function (e0x) {
        this.ZT6N = NEJ.X({}, e0x);
        this.fE2x = NEJ.X({}, e0x);
        delete this.ZT6N.onchange;
        this.fE2x.onchange = this.gp2x.g0x(this);
        this.bl0x(e0x);
        this.bXj0x({number: e0x.number, label: e0x.label || X0x})
    };
    b0x.bD0x = function () {
        this.bH0x();
        if (!!this.kg3x) {
            this.kg3x.S0x();
            delete this.kg3x
        }
        delete this.ZT6N;
        delete this.fE2x;
        this.bXi0x();
        this.o0x.innerHTML = "&nbsp;"
    };
    b0x.bY1x = function () {
        this.kW4a = hR3x
    };
    b0x.bXj0x = function (i0x) {
        a9j.dQ1x(this.o0x, bcS7L, i0x);
        var fW2x = a9j.Iq2x();
        this.fE2x.list = a9j.I0x(this.o0x, "js-i-" + fW2x);
        this.fE2x.pbtn = (a9j.I0x(this.o0x, "js-p-" + fW2x) || eT2x)[0];
        this.fE2x.nbtn = (a9j.I0x(this.o0x, "js-n-" + fW2x) || eT2x)[0]
    };
    b0x.bS1x = function () {
        this.cb1x()
    };
    b0x.cvn6h = function (i0x) {
        return a9j.bQ1x(bcS7L, i0x)
    };
    b0x.gp2x = function (d0x) {
        if (this.MS3x) return;
        var s0x = d0x.index, co1x = d0x.total;
        this.MS3x = !0;
        this.MU3x(s0x, co1x);
        k0x.be0x(this.ZP6J, function (sg6a) {
            sg6a.MU3x(s0x, co1x)
        });
        this.MS3x = !1;
        this.B0x("onchange", d0x)
    };
    b0x.g0x = function (bC0x) {
        bC0x = a9j.x0x(bC0x);
        if (!bC0x) return this;
        var cm1x = NEJ.X({}, this.ZT6N);
        cm1x.parent = bC0x;
        cm1x.index = this.rJ6D();
        cm1x.total = this.jt3x();
        var sg6a = this.constructor.A0x(cm1x);
        sg6a.up7i("onchange", this.fE2x.onchange);
        if (!this.ZP6J) this.ZP6J = [];
        this.ZP6J.push(sg6a);
        return this
    };
    b0x.bXi0x = function () {
        var bps1x = function (sg6a, s0x, j0x) {
            sg6a.S0x();
            j0x.splice(s0x, 1)
        };
        return function () {
            k0x.mc4g(this.ZP6J, bps1x)
        }
    }();
    b0x.jA3x = function (s0x) {
        if (!this.kg3x) return;
        this.kg3x.jA3x(s0x)
    };
    b0x.rJ6D = function () {
        if (!this.kg3x) return 1;
        return this.kg3x.rJ6D()
    };
    b0x.jt3x = function () {
        if (!this.kg3x) return 1;
        return this.kg3x.jt3x()
    };
    b0x.MU3x = function (s0x, co1x) {
        if (!this.kg3x) return;
        this.kg3x.MU3x(s0x, co1x)
    };
    b0x.bdr7k = function (co1x) {
        if (!this.kg3x) return;
        this.kg3x.bdr7k(co1x)
    };
    hR3x = a9j.rH6B(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcS7L = a9j.el2x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"ä¸ä¸é¡µ"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"ä¸ä¸é¡µ"}</a>{/if}{/trim}')
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        N0x = c0x("nej.ut"), b0x;
    if (!!N0x.ZL6F) return;
    N0x.ZL6F = NEJ.C();
    b0x = N0x.ZL6F.O0x(N0x.cz1x);
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.ZK6E = e0x.pbtn;
        this.cf1x = e0x.nbtn;
        this.ZJ6D = e0x.sbtn;
        this.ZI6C = e0x.ebtn;
        this.im3x = e0x.event || "click";
        this.ju3x = e0x.selected || "js-selected";
        this.mW4a = e0x.disabled || "js-disabled";
        this.bXg0x(e0x.list);
        this.MU3x(e0x.index || 1, e0x.total || 1)
    };
    b0x.bD0x = function () {
        this.bH0x();
        delete this.bV1x;
        delete this.im3x;
        delete this.ZK6E;
        delete this.cf1x;
        delete this.ZJ6D;
        delete this.ZI6C;
        delete this.bFD5I;
        delete this.fN2x;
        delete this.cn1x;
        delete this.ju3x;
        delete this.mW4a
    };
    b0x.bXg0x = function () {
        var bdD7w = function (f0x) {
            this.bV1x.push(f0x);
            this.bU1x([[f0x, this.im3x, this.cI1x.dX2x(this, 0)]])
        };
        return function (j0x) {
            this.bV1x = [];
            this.bU1x([[this.ZK6E, "click", this.cI1x.dX2x(this, -1)], [this.cf1x, "click", this.cI1x.dX2x(this, 1)], [this.ZJ6D, "click", this.cI1x.dX2x(this, -2)], [this.ZI6C, "click", this.cI1x.dX2x(this, 2)]]);
            k0x.be0x(j0x, bdD7w, this)
        }
    }();
    b0x.Bn0x = function (f0x, s0x) {
        if (s0x == null) {
            f0x.innerText = "";
            a9j.Y0x(f0x, "display", "none");
            a9j.w0x(f0x, this.ju3x)
        } else {
            f0x.innerText = s0x;
            a9j.Y0x(f0x, "display", "");
            s0x == this.cn1x ? a9j.y0x(f0x, this.ju3x) : a9j.w0x(f0x, this.ju3x)
        }
    };
    b0x.bdH8z = function () {
        if (this.cn1x <= 1) {
            a9j.y0x(this.ZK6E, this.mW4a);
            a9j.y0x(this.ZJ6D, this.mW4a)
        } else {
            a9j.w0x(this.ZK6E, this.mW4a);
            a9j.w0x(this.ZJ6D, this.mW4a)
        }
        if (this.cn1x >= this.fN2x) {
            a9j.y0x(this.cf1x, this.mW4a);
            a9j.y0x(this.ZI6C, this.mW4a)
        } else {
            a9j.w0x(this.cf1x, this.mW4a);
            a9j.w0x(this.ZI6C, this.mW4a)
        }
    };
    b0x.ZD6x = bm0x;
    b0x.bdJ8B = function () {
        this.ZD6x();
        this.bdH8z();
        this.B0x("onchange", {last: this.bFD5I, total: this.fN2x, index: this.cn1x, ext: this.bdL8D})
    };
    b0x.bFC5H = function (s0x) {
        s0x = parseInt(s0x);
        if (isNaN(s0x) || this.fN2x == null) return !1;
        s0x = Math.max(1, Math.min(s0x, this.fN2x));
        this.bFD5I = this.cn1x;
        this.cn1x = s0x;
        return !0
    };
    b0x.bdN8F = function (co1x) {
        co1x = parseInt(co1x);
        if (isNaN(co1x) || co1x < 1) return !1;
        this.fN2x = co1x;
        return !0
    };
    b0x.cI1x = function (d0x, eI2x) {
        h0x.cd1x(d0x);
        var E0x = h0x.U0x(d0x);
        if (!E0x || a9j.bB0x(E0x, this.ju3x) || a9j.bB0x(E0x, this.mW4a)) return;
        var s0x = E0x.innerText;
        switch (eI2x) {
            case 1:
            case-1:
                s0x = this.cn1x + eI2x;
                break;
            case 2:
                s0x = this.fN2x;
                break;
            case-2:
                s0x = 1;
                break
        }
        this.jA3x(s0x)
    };
    b0x.rJ6D = function () {
        return this.cn1x
    };
    b0x.jA3x = function (s0x) {
        var bXd0x = this.cn1x;
        this.bFC5H(s0x);
        if (bXd0x != this.cn1x) this.bdJ8B();
        return this
    };
    b0x.jt3x = function () {
        return this.fN2x
    };
    b0x.Ks2x = function (co1x) {
        if (this.bdN8F(co1x) && this.cn1x != null) {
            this.cn1x = 1;
            this.bdJ8B()
        }
        return this
    };
    b0x.bdr7k = function (co1x) {
        if (this.bdN8F(co1x)) {
            this.ZD6x();
            this.bdH8z()
        }
        return this
    };
    b0x.MU3x = function (s0x, co1x) {
        if (!this.bdN8F(co1x) || !this.bFC5H(s0x)) return this;
        this.bdJ8B();
        return this
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), cO1x = c0x("nej.x"), N0x = c0x("nej.ut"), b0x;
    if (!!N0x.Jp2x) return;
    N0x.Jp2x = NEJ.C();
    b0x = N0x.Jp2x.O0x(N0x.ZL6F);
    b0x.cl1x = function () {
        this.cs1x();
        var f0x = a9j.cV1x("span", "zdot");
        f0x.innerText = "...";
        this.ZB6v = [f0x.cloneNode(true), f0x]
    };
    b0x.bD0x = function () {
        this.bH0x();
        this.bFB5G()
    };
    b0x.bFB5G = function () {
        a9j.me4i(this.ZB6v[0]);
        a9j.me4i(this.ZB6v[1])
    };
    b0x.ZD6x = function () {
        this.bdL8D = {last: !1, first: !1, list: this.bV1x};
        this.bFB5G();
        this.Bn0x(this.bV1x[0], 1);
        var bE0x = 1, bp0x = this.bV1x.length;
        if (this.fN2x < bp0x) {
            for (var pE5J; bE0x < bp0x; bE0x++) {
                pE5J = bE0x + 1;
                this.Bn0x(this.bV1x[bE0x], pE5J > this.fN2x ? null : pE5J)
            }
            return
        }
        if (this.cn1x > 1) {
            var ct1x = Math.floor((bp0x - 2) / 2), bWZ0x = this.fN2x - bp0x + 2, is3x = Math.max(2, this.cn1x - ct1x);
            if (this.fN2x >= bp0x) {
                is3x = Math.min(is3x, bWZ0x)
            }
            if (is3x > 2) {
                this.bV1x[0].insertAdjacentElement("afterEnd", this.ZB6v[0]);
                this.bdL8D.first = !0
            }
            for (var s0x; ; bE0x++) {
                s0x = is3x + bE0x - 1;
                if (s0x > this.cn1x) break;
                this.Bn0x(this.bV1x[bE0x], s0x)
            }
        }
        if (this.cn1x < this.fN2x) {
            var s0x, is3x = this.cn1x + 1;
            for (var i = 0, l = bp0x - 2; ; i++, bE0x++) {
                s0x = is3x + i;
                if (bE0x > l || s0x > this.fN2x) break;
                this.Bn0x(this.bV1x[bE0x], s0x)
            }
            if (s0x < this.fN2x) {
                this.bV1x[bE0x].insertAdjacentElement("beforeBegin", this.ZB6v[1]);
                this.bdL8D.last = !0
            }
            if (s0x <= this.fN2x) {
                this.Bn0x(this.bV1x[bE0x++], this.fN2x)
            }
        }
        for (; bE0x < bp0x; bE0x++) {
            this.Bn0x(this.bV1x[bE0x])
        }
    };
    a9j.bWY0x = cO1x.bWY0x = function (bC0x, e0x) {
        var C0x = a9j.kJ4N(bC0x);
        if (!C0x) return null;
        if (!N0x.TW5b(C0x, N0x.Jp2x)) {
            e0x = e0x || {};
            var j0x = !e0x.clazz ? a9j.cS1x(C0x) : a9j.I0x(C0x, e0x.clazz);
            e0x.pbtn = j0x.shift();
            e0x.nbtn = j0x.pop();
            e0x.list = j0x;
            delete e0x.clazz
        }
        return N0x.TW5b(C0x, N0x.Jp2x, e0x || X0x)
    };
    cO1x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, eT2x = NEJ.R, a9j = c0x("nej.e"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        N0x = c0x("nej.ui"), b0x, K0x, gj2x;
    if (!!N0x.JY2x) return;
    N0x.JY2x = NEJ.C();
    b0x = N0x.JY2x.O0x(N0x.bcU7N);
    K0x = N0x.JY2x.cg1x;
    b0x.bk0x = function (e0x) {
        e0x.number = parseInt(e0x.number) || 9;
        this.bl0x(e0x);
        this.kg3x = H0x.Jp2x.A0x(this.fE2x)
    };
    b0x.gp2x = function (d0x) {
        if (!!this.ZT6N.noend) {
            var bFz5E = d0x.ext || X0x, j0x = bFz5E.list || eT2x;
            if (bFz5E.last) {
                a9j.Y0x(j0x[j0x.length - 1], "display", "none")
            }
        }
        K0x.gp2x.apply(this, arguments)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        bd0x = c0x("nej.ui"), N0x = c0x("nej.ut"), b0x;
    if (!!N0x.Zt6n) return;
    N0x.Zt6n = NEJ.C();
    b0x = N0x.Zt6n.O0x(N0x.cz1x);
    b0x.bk0x = function (e0x) {
        this.iw3x = {};
        this.bl0x(e0x);
        this.ic3x = a9j.x0x(e0x.parent);
        this.eJ2x = {parent: this.ic3x};
        this.qm5r = parseInt(e0x.limit) || 10;
        this.wz8r = parseInt(e0x.first) || this.qm5r;
        this.bWV0x(e0x.item);
        this.bWT0x(e0x.cache || X0x);
        this.bWR0x(e0x.pager || X0x);
        this.fQ2x()
    };
    b0x.bD0x = function () {
        this.B0x("onbeforerecycle");
        this.Lu2x();
        this.bH0x();
        if (this.iw3x.clear) {
            this.P0x.tc6W(this.iw3x.key)
        }
        this.P0x.S0x();
        if (!!this.ir3x) {
            this.ir3x.S0x();
            delete this.ir3x
        }
        delete this.bFw5B;
        delete this.fE2x;
        delete this.Zq6k;
        delete this.P0x;
        delete this.ic3x;
        delete this.LM3x;
        delete this.eJ2x;
        delete this.iw3x
    };
    b0x.bFv5A = function () {
        var cP1x = /\{(.*?)\}/gi, bWO0x = function (pw5B, i0x) {
            return (pw5B || "{id}{seed}").replace(cP1x, function ($1, $2) {
                var z0x = i0x[$2];
                return z0x == null ? $1 : z0x
            })
        };
        return function (C0x) {
            var J0x = bWO0x(this.eJ2x.jstIdTempalte, {id: C0x, seed: a9j.Iq2x()});
            if (!this.eJ2x.jstIdType) {
                return a9j.x0x(J0x)
            } else if (this.eJ2x.jstIdType == 1) {
                return (a9j.I0x(this.ic3x, J0x) || [])[0]
            }
        }
    }();
    b0x.yj9a = function (bE0x, bj0x, fY2x, bp0x) {
        var m0x = {index: 1, total: 1};
        if (bj0x >= bE0x) {
            m0x.index = Math.floor((bj0x - bE0x) / fY2x) + 2
        }
        if (bp0x > bE0x) {
            m0x.total = Math.ceil((bp0x - bE0x) / fY2x) + 1
        }
        return m0x
    };
    b0x.bFu5z = function (J0x) {
        delete this.LM3x;
        this.IE2x = J0x;
        this.bU1x([[this.ic3x, "click", this.bWM0x.g0x(this)]])
    };
    b0x.bWV0x = function (r0x) {
        if (k0x.fh2x(r0x)) {
            this.bFu5z(r0x);
            return
        }
        NEJ.X(this.eJ2x, r0x);
        var dE1x = this.eJ2x.klass;
        delete this.eJ2x.klass;
        if (k0x.fh2x(dE1x)) {
            this.bFu5z(dE1x);
            return
        }
        delete this.IE2x;
        this.LM3x = dE1x;
        this.eJ2x.ondelete = this.B0x.g0x(this, "ondelete");
        this.eJ2x.onupdate = this.B0x.g0x(this, "onupdate")
    };
    b0x.bWT0x = function (R0x) {
        var dE1x = R0x.klass, jp3x = NEJ.X({}, R0x);
        this.iw3x.key = jp3x.lkey;
        this.iw3x.data = jp3x.data || {};
        this.iw3x.clear = !!jp3x.clear;
        this.eJ2x.pkey = jp3x.key || "id";
        jp3x.onlistload = this.beS8K.g0x(this);
        jp3x.onpullrefresh = this.bWL0x.g0x(this);
        if (!!dE1x && "onlistchange" in dE1x) {
            this.bU1x([[dE1x, "listchange", this.beV8N.g0x(this)]])
        } else {
            jp3x.onitemadd = this.Zn6h.g0x(this);
            jp3x.onitemdelete = this.Zm6g.g0x(this);
            jp3x.onitemupdate = this.bFr5w.g0x(this)
        }
        this.P0x = (dE1x || N0x.KJ2x).A0x(jp3x);
        if (R0x.total != null) {
            this.P0x.Ks2x(this.iw3x.key, R0x.total)
        }
        if (!!R0x.list) {
            this.P0x.rT6N(this.iw3x.key, R0x.list)
        }
    };
    b0x.bWR0x = function (sg6a) {
        this.bFw5B = sg6a.klass || bd0x.JY2x;
        this.fE2x = NEJ.X({}, sg6a);
        if (k0x.ep2x(sg6a.parent)) {
            this.fE2x.parent = sg6a.parent[0];
            this.Nt3x = sg6a.parent.slice(1);
            if (!this.Nt3x || !this.Nt3x.length) {
                delete this.Nt3x
            }
        }
        delete this.fE2x.klass
    };
    b0x.Lu2x = function () {
        var fU2x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.B0x("onbeforelistclear", {parent: this.ic3x});
            if (!!this.fc2x && this.fc2x.length > 0) {
                this.fc2x = this.LM3x.S0x(this.fc2x);
                delete this.fc2x
            }
            if (fU2x.test(this.ic3x.tagName)) {
                a9j.bHK6E(this.ic3x)
            } else {
                this.ic3x.innerHTML = ""
            }
        }
    }();
    b0x.bff8X = function (Zj6d) {
        if (!!this.fE2x.fixed) return;
        a9j.Y0x(this.fE2x.parent, "display", Zj6d);
        k0x.be0x(this.Nt3x, function (bC0x) {
            a9j.Y0x(bC0x, "display", Zj6d)
        }, this)
    };
    b0x.bfi8a = function () {
        var s0x = this.fE2x.index || 1;
        delete this.fE2x.index;
        if (!!this.ir3x) {
            s0x = this.ir3x.rJ6D()
        }
        this.ym9d({last: s0x, index: s0x})
    };
    b0x.ym9d = function (d0x) {
        this.B0x("onpagechange", d0x)
    };
    b0x.bFq5v = function (bj0x) {
        this.iw3x.offset = bj0x;
        this.Up5u()
    };
    b0x.bFp5u = function (e0x) {
        return e0x
    };
    b0x.Up5u = function () {
        this.Ow3x();
        var i0x = this.iw3x.data;
        i0x.offset = this.iw3x.offset;
        var om5r = i0x.offset == 0;
        i0x.total = om5r;
        this.iw3x.limit = om5r ? this.wz8r : this.qm5r;
        i0x.limit = this.iw3x.limit;
        this.P0x.nv4z(this.bFp5u(NEJ.X({}, this.iw3x)))
    };
    b0x.beS8K = function (e0x) {
        if (e0x.key != this.iw3x.key || e0x.offset != this.iw3x.offset) return;
        this.Zi6c();
        var j0x = this.P0x.gR3x(e0x.key);
        if (!j0x || !j0x.length) {
            this.bfr8j();
            return
        }
        var fY2x = e0x.limit, bj0x = e0x.offset;
        if (this.bfs8k(j0x, bj0x, fY2x)) return;
        this.B0x("onbeforelistrender", {list: j0x, offset: bj0x, parent: this.ic3x});
        if (!!this.IE2x) {
            this.eJ2x.xlist = j0x;
            this.eJ2x.beg = bj0x;
            this.eJ2x.end = Math.min(j0x.length, bj0x + fY2x) - 1;
            this.eJ2x.act = "list";
            var ds1x = a9j.bQ1x(this.IE2x, this.eJ2x);
            this.OT3x(ds1x)
        } else {
            this.eJ2x.limit = fY2x;
            this.eJ2x.offset = bj0x;
            var gx2x = a9j.yr9i(j0x, this.LM3x, this.eJ2x);
            this.Po3x(gx2x)
        }
        this.B0x("onafterlistrender", {list: j0x, offset: bj0x, parent: this.ic3x})
    };
    b0x.bWL0x = function (e0x) {
        if (!this.Zq6k) return;
        delete this.Zq6k;
        this.Zi6c("onafterpullrefresh");
        this.fQ2x()
    };
    b0x.bFo5t = function (s0x, co1x) {
        if (!!this.ir3x) {
            var Ak9b = this.ir3x.rJ6D(), bWC0x = this.ir3x.jt3x();
            if (Ak9b > co1x || co1x != bWC0x) {
                this.ir3x.S0x();
                delete this.ir3x;
                this.ym9d({last: Ak9b, index: Math.min(s0x, co1x)});
                return !0
            }
        } else {
            this.fE2x.index = s0x;
            this.fE2x.total = co1x;
            this.ir3x = this.bFw5B.A0x(this.fE2x);
            this.ir3x.up7i("onchange", this.ym9d.g0x(this));
            k0x.be0x(this.Nt3x, function (bC0x) {
                this.ir3x.g0x(bC0x)
            }, this)
        }
    };
    b0x.Zh6b = function () {
        var fW2x = +(new Date);
        return function (i0x) {
            var C0x = i0x[this.eJ2x.pkey];
            if (!C0x) {
                i0x["dirty-data"] = !0;
                i0x[this.eJ2x.pkey] = "dirty-" + fW2x++
            }
            return i0x
        }
    }();
    b0x.Zg6a = function (i0x) {
        var C0x = i0x[this.eJ2x.pkey];
        if (!!i0x["dirty-data"]) {
            delete i0x["dirty-data"];
            delete i0x[this.eJ2x.pkey]
        }
        return C0x
    };
    b0x.Ze6Y = function () {
        var bWB0x = function (jv3x, lG4K) {
            this.ic3x.insertAdjacentElement(jv3x, lG4K)
        };
        return function (jv3x, i0x) {
            var IY2x = [i0x];
            if (!!this.IE2x) {
                this.eJ2x.xlist = IY2x;
                this.eJ2x.beg = 0;
                this.eJ2x.end = 0;
                this.eJ2x.act = "add";
                this.OT3x(a9j.bQ1x(this.IE2x, this.eJ2x), jv3x)
            } else {
                this.eJ2x.limit = 1;
                this.eJ2x.offset = 0;
                this.eJ2x.parent = bWB0x.g0x(this, jv3x);
                var gx2x = a9j.yr9i(IY2x, this.LM3x, this.eJ2x);
                this.eJ2x.parent = this.ic3x;
                this.Po3x(gx2x)
            }
        }
    }();
    b0x.Ow3x = bm0x;
    b0x.Zi6c = function (T0x) {
        var d0x = {parent: this.ic3x};
        this.B0x(T0x || "onafterlistload", d0x);
        if (!d0x.stopped) {
            a9j.me4i(this.ch1x)
        }
    };
    b0x.bfs8k = bm0x;
    b0x.Zb6V = function (bF0x, jv3x) {
        if (k0x.fh2x(bF0x)) {
            if (!this.ch1x) this.ch1x = a9j.cV1x("div");
            this.ch1x.innerHTML = bF0x
        } else {
            this.ch1x = bF0x
        }
        this.ic3x.insertAdjacentElement(jv3x || "beforeEnd", this.ch1x)
    };
    b0x.wG8y = function (T0x, mq4u, jv3x) {
        var d0x = {parent: this.ic3x};
        this.B0x(T0x, d0x);
        if (!d0x.stopped) {
            this.Zb6V(d0x.value || mq4u, jv3x)
        }
    };
    b0x.bfr8j = bm0x;
    b0x.OT3x = bm0x;
    b0x.Po3x = bm0x;
    b0x.bWM0x = function () {
        var fU2x = /^(?:delete|update)$/;
        return function (d0x) {
            var f0x = h0x.U0x(d0x, "d:action");
            if (!f0x) return;
            var W0x = a9j.u0x(f0x, "action");
            if (!fU2x.test(W0x)) return;
            var C0x = a9j.u0x(f0x, "id");
            if (!C0x) return;
            var r0x = this.P0x.ek2x(C0x);
            if (!r0x) return;
            h0x.bh0x(d0x);
            this.B0x("on" + W0x, {data: r0x, id: r0x[this.eJ2x.pkey], body: a9j.x0x(this.bFv5A(C0x))})
        }
    }();
    b0x.Zn6h = bm0x;
    b0x.Ur5w = function (d0x) {
        var i0x = d0x.data || {}, e0x = {data: i0x, key: this.iw3x.key, id: i0x[this.eJ2x.pkey]};
        this.B0x("onbeforedelete", e0x);
        this.P0x.EK1x(e0x)
    };
    b0x.Zm6g = bm0x;
    b0x.Us5x = function (d0x) {
        var i0x = d0x.data || {}, e0x = {data: i0x, key: this.iw3x.key};
        this.B0x("onbeforeupdate", e0x);
        this.P0x.Uo5t(e0x)
    };
    b0x.bFr5w = function (d0x) {
        this.QA4E(d0x, "onafterupdate");
        if (d0x.stopped) return;
        var C0x = d0x.data[this.eJ2x.pkey];
        if (!!this.fc2x) {
            var r0x = a9j.bLQ7J(C0x);
            if (!!r0x) r0x.fQ2x(d0x.data)
        } else {
            var f0x = a9j.x0x(C0x + "" + a9j.Iq2x());
            if (!f0x) return;
            var j0x = this.P0x.gR3x(d0x.key), s0x = k0x.cW1x(j0x, d0x.data);
            if (s0x < 0) return;
            this.eJ2x.list = j0x;
            this.eJ2x.beg = s0x;
            this.eJ2x.end = s0x;
            this.eJ2x.act = "update";
            var ds1x = a9j.bQ1x(this.IE2x, this.eJ2x);
            f0x.insertAdjacentHTML("afterEnd", ds1x);
            a9j.cF1x(f0x)
        }
    };
    b0x.QA4E = function (d0x, T0x) {
        var r0x = d0x.data;
        if (!r0x || r0x[this.eJ2x.pkey] == null) {
            this.B0x("onerror", d0x);
            d0x.stopped = !0
        }
        if (!d0x.stopped) {
            this.B0x(T0x, d0x)
        }
    };
    b0x.bga8S = bm0x;
    b0x.bge8W = bm0x;
    b0x.beV8N = function (d0x) {
        if (d0x.key != this.iw3x.key) return;
        switch (d0x.action) {
            case"add":
                this.Zn6h(d0x);
                break;
            case"delete":
                this.Zm6g(d0x);
                break;
            case"update":
                this.bFr5w(d0x);
                break;
            case"refresh":
                this.fQ2x();
                break;
            case"unshift":
                this.bge8W(d0x.offset, d0x.limit);
                break;
            case"append":
                this.bga8S(d0x.offset, d0x.limit);
                break
        }
    };
    b0x.ow5B = function (r0x) {
        this.Us5x({data: r0x})
    };
    b0x.lB4F = function (r0x) {
        this.Ur5w({data: r0x})
    };
    b0x.si6c = function (r0x) {
        this.P0x.iG3x({data: r0x, key: this.iw3x.key})
    };
    b0x.se6Y = function () {
        return this.P0x
    };
    b0x.bgm8e = function (i0x) {
        this.Ze6Y("afterBegin", this.Zh6b(i0x));
        return this.Zg6a(i0x)
    };
    b0x.bFn5s = function (i0x) {
        this.Ze6Y("beforeEnd", this.Zh6b(i0x));
        return this.Zg6a(i0x)
    };
    b0x.fQ2x = function () {
        this.Lu2x();
        this.bfi8a()
    };
    b0x.cvo6i = function () {
        this.P0x.tc6W(this.iw3x.key);
        this.fQ2x()
    };
    b0x.bcC7v = function () {
        if (!!this.Zq6k) return;
        this.Zq6k = !0;
        this.wG8y("onbeforepullrefresh", "åè¡¨å·æ°ä¸­...", "afterBegin");
        this.P0x.bcC7v({key: this.iw3x.key, data: this.iw3x.data})
    };
    b0x.jt3x = function () {
        return this.P0x.jt3x(this.iw3x.key)
    };
    b0x.bFm5r = function () {
        return this.ir3x
    };
    b0x.Uh5m = function () {
        return this.P0x.Uh5m(this.iw3x.key)
    };
    b0x.bWr0x = function () {
        return this.fc2x
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, eT2x = NEJ.R, k0x = c0x("nej.u"), a9j = c0x("nej.e"), N0x = c0x("nej.ut"), b0x, K0x;
    if (!!N0x.io3x) return;
    N0x.io3x = NEJ.C();
    b0x = N0x.io3x.O0x(N0x.Zt6n);
    K0x = N0x.io3x.cg1x;
    b0x.yj9a = function (bj0x, bp0x) {
        return K0x.yj9a.call(this, this.wz8r, bj0x, this.qm5r, bp0x)
    };
    b0x.bgs8k = function (s0x) {
        var bj0x = 0;
        if (s0x > 1) bj0x = this.wz8r + (s0x - 2) * this.qm5r;
        return bj0x
    };
    b0x.ym9d = function (d0x) {
        K0x.ym9d.apply(this, arguments);
        if (!d0x.stopped) {
            this.bFq5v(this.bgs8k(d0x.index))
        }
    };
    b0x.Ow3x = function () {
        this.Lu2x();
        this.wG8y("onbeforelistload", "åè¡¨å è½½ä¸­...")
    };
    b0x.Zi6c = function () {
        K0x.Zi6c.apply(this, arguments);
        this.Lu2x()
    };
    b0x.bfs8k = function (j0x, bj0x, fY2x) {
        var bt0x = this.yj9a(bj0x, j0x.length);
        if (this.bFo5t(bt0x.index, bt0x.total)) return !0;
        this.bff8X(bt0x.total > 1 ? "" : "none")
    };
    b0x.bfr8j = function () {
        this.wG8y("onemptylist", "æ²¡æåè¡¨æ°æ®ï¼")
    };
    b0x.Zb6V = function (bF0x, jv3x) {
        if (!jv3x && k0x.fh2x(bF0x)) {
            this.ic3x.innerHTML = bF0x;
            return
        }
        K0x.Zb6V.apply(this, arguments)
    };
    b0x.OT3x = function (ds1x) {
        this.ic3x.innerHTML = ds1x
    };
    b0x.Po3x = function (gx2x) {
        this.fc2x = gx2x
    };
    b0x.Zn6h = function (d0x) {
        this.QA4E(d0x, "onafteradd");
        if (!d0x.stopped) this.fQ2x()
    };
    b0x.Zm6g = function (d0x) {
        this.QA4E(d0x, "onafterdelete");
        if (!d0x.stopped) this.fQ2x()
    };
    b0x.bga8S = function (bj0x, fY2x) {
        var s0x = 1;
        if (!!this.ir3x) {
            s0x = this.ir3x.rJ6D()
        }
        var iV3x = this.bgs8k(s0x), gy2x = iV3x + (s0x > 1 ? this.qm5r : this.wz8r);
        if (bj0x >= gy2x && !!this.ir3x) {
            var bt0x = this.yj9a(0, this.jt3x());
            this.ir3x.bdr7k(bt0x.total);
            this.bff8X(bt0x.total > 1 ? "" : "none")
        } else {
            this.fQ2x()
        }
    };
    b0x.bge8W = function (bj0x, fY2x) {
        var s0x = 1;
        if (!!this.ir3x) {
            s0x = this.ir3x.rJ6D()
        }
        var iV3x = this.bgs8k(s0x), bt0x = this.yj9a(iV3x, this.jt3x());
        this.ym9d({last: s0x, index: bt0x.index})
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), H0x = c0x("nej.ut"),
        k0x = c0x("nej.u"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), D0x = c0x("nm.w"), fa2x = 40, b0x, K0x;
    D0x.YT6N = NEJ.C();
    b0x = D0x.YT6N.O0x(H0x.cz1x);
    K0x = D0x.YT6N.cg1x;
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.JL2x = e0x.inputer;
        this.bgB8t = e0x.tipper;
        this.bU1x([[this.JL2x, "input", this.fi2x.g0x(this)]])
    };
    b0x.bD0x = function () {
        this.bH0x();
        this.Ii2x(null, null)
    };
    b0x.fi2x = function (d0x) {
        if (d0x && d0x.type == "keyup" && (d0x.keyCode != 8 || d0x.keyCode != 68)) return;
        var T0x = this.JL2x.value, cvp6j;
        if (l0x.GN1x(T0x) > fa2x) {
            this.JL2x.value = l0x.zr9i(T0x, fa2x);
            this.Ii2x("æ­ååä¸è½è¶è¿20ä¸ªæ±å­æ40ä¸ªè±æå­ç¬¦ï¼", arguments.callee.g0x(this))
        } else if (T0x.indexOf("#") >= 0 || T0x.indexOf("@") >= 0) {
            this.Ii2x("æ­ååä¸è½åå«å­ç¬¦â@âåâ#âï¼")
        } else {
            this.Ii2x(null, null);
            this.B0x("onchange", {value: T0x})
        }
    };
    b0x.bWn0x = function () {
        this.fi2x()
    };
    b0x.Ii2x = function () {
        var C0x = 0;
        return function (dp1x, bFf5k) {
            if (!!C0x) window.clearTimeout(C0x);
            if (!dp1x) {
                a9j.y0x(this.bgB8t, "f-vhide");
                this.bFe5j = !1;
                return
            }
            this.bgB8t.innerHTML = '<i class="u-icn u-icn-25"></i>' + dp1x;
            a9j.w0x(this.bgB8t, "f-vhide");
            this.bFe5j = !0;
            if (k0x.gl2x(bFf5k)) C0x = window.setTimeout(function () {
                this.Ii2x(null, null);
                bFf5k()
            }.g0x(this), 1e3)
        }
    }();
    b0x.bFd5i = function () {
        if (this.bFe5j) return !1;
        if (l0x.iY3x(this.JL2x.value)) {
            this.Ii2x("æ­ååä¸è½ä¸ºç©º");
            return !1
        }
        return !0
    };
    b0x.fu2x = function () {
        return this.JL2x.value
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), n0x = c0x("nm.l"),
        D0x = c0x("nm.w"), bK1x = c0x("nej.ui"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K0x;
    n0x.YQ6K = NEJ.C();
    b0x = n0x.YQ6K.O0x(n0x.dV2x);
    K0x = n0x.YQ6K.cg1x;
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.I0x(this.o0x, "j-flag");
        this.YP6J = {inputer: j0x[0], tipper: j0x[1]};
        this.gP2x = {onerror: this.bFc5h.g0x(this), onitemadd: this.bFc5h.g0x(this)};
        this.oQ5V = j0x[2];
        h0x.q0x(j0x[2], "click", this.Bb0x.g0x(this));
        h0x.q0x(j0x[3], "click", this.As9j.g0x(this));
        h0x.q0x(this.o0x, "keypress", this.bFb5g.g0x(this))
    };
    b0x.bY1x = function () {
        this.ca1x = "m-wgt-create"
    };
    b0x.bk0x = function (e0x) {
        e0x.clazz = " m-layer-w2";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "æ°å»ºæ­å";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bl0x(e0x);
        this.YP6J.inputer.value = e0x.name || "";
        this.tG6A = D0x.YT6N.A0x(this.YP6J);
        this.tG6A.bWn0x();
        this.P0x = p0x.hr3x.A0x(this.gP2x);
        setTimeout(function () {
            this.YP6J.inputer.focus()
        }.g0x(this), 0)
    };
    b0x.bD0x = function () {
        this.bH0x();
        if (this.tG6A) {
            this.tG6A.S0x();
            delete this.tG6A
        }
        this.rY6S(!1);
        this.YP6J.inputer.value = ""
    };
    b0x.rY6S = function (KX2x) {
        this.no4s = KX2x;
        if (KX2x) {
            this.oQ5V.innerHTML = "<i>æ°å»ºä¸­...</i>";
            a9j.y0x(this.oQ5V, "u-btn2-dis")
        } else {
            this.oQ5V.innerHTML = "<i>æ° å»º</i>";
            a9j.w0x(this.oQ5V, "u-btn2-dis")
        }
    };
    b0x.Bb0x = function () {
        if (this.no4s || !this.tG6A.bFd5i()) return;
        var cm1x = {key: "playlist_new-" + GUser.userId, data: {name: this.tG6A.fu2x()}, offset: 1};
        this.P0x.iG3x(cm1x);
        this.rY6S(!0)
    };
    b0x.bFc5h = function (d0x) {
        var bZ1x = (d0x.result || X0x).code;
        if (!bZ1x) {
            this.B0x("onsuccess", d0x.data)
        } else {
            this.B0x("onerror", d0x)
        }
        this.bq0x()
    };
    b0x.As9j = function () {
        this.bq0x()
    };
    b0x.bFb5g = function (d0x) {
        if (d0x.keyCode == 13) this.Bb0x()
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"), v0x = c0x("nej.j"), l0x = c0x("nm.x"), p0x = c0x("nm.d"), n0x = c0x("nm.l"), b0x, K0x;
    n0x.bhf9W = NEJ.C();
    b0x = n0x.bhf9W.O0x(n0x.dV2x);
    K0x = n0x.bhf9W.cg1x;
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.I0x(this.o0x, "j-flag");
        this.hL3x = {
            limit: 301,
            parent: j0x[1],
            cache: {klass: p0x.hr3x, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bhi9Z.g0x(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l0x.zq9h, escape: k0x.dK1x}
        };
        this.gP2x = {onsuccess: this.YK6E.g0x(this), onerror: this.em2x.g0x(this)};
        h0x.q0x(j0x[0], "click", this.Bb0x.g0x(this));
        h0x.q0x(j0x[1], "click", this.lp4t.g0x(this))
    };
    b0x.bY1x = function () {
        this.ca1x = "m-wgt-subscribe"
    };
    b0x.bk0x = function (e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.clazz = " m-layer-w2";
        e0x.title = "æ·»å å°æ­å";
        e0x.draggable = !0;
        e0x.mask = !0;
        this.bl0x(e0x);
        this.YJ6D = (e0x.tracks || []).reverse();
        this.hL3x.item.size = this.YJ6D.length;
        this.gP2x.name = e0x.name || "";
        this.bFa5f = p0x.uC7v.A0x({onaddsuccess: this.yx9o.g0x(this)});
        this.rB6v = p0x.hr3x.A0x({onlistload: this.bWb0x.g0x(this)});
        this.rB6v.bJr6l();
        k0x.be0x(this.YJ6D, function (r0x, s0x, j0x) {
            if (!k0x.li4m(r0x)) {
                j0x[s0x] = this.bFa5f.ek2x(r0x) || r0x
            }
        }, this)
    };
    b0x.bWb0x = function () {
        if (this.du1x) this.du1x.S0x();
        this.du1x = H0x.io3x.A0x(this.hL3x)
    };
    b0x.Bb0x = function () {
        this.bq0x();
        if (this.By0x) this.By0x.S0x();
        this.By0x = n0x.YQ6K.A0x(this.gP2x);
        this.By0x.M0x()
    };
    b0x.lp4t = function () {
        var bWa0x = function (f0x) {
            while (f0x && f0x != document) {
                if (f0x.tagName.toLowerCase() == "li") {
                    return f0x
                }
                f0x = f0x.parentNode
            }
        };
        return function (d0x) {
            h0x.cd1x(d0x);
            var E0x = h0x.U0x(d0x), bhz9q = bWa0x(E0x);
            if (!!bhz9q && !a9j.bB0x(bhz9q, "dis")) {
                this.YK6E({id: a9j.u0x(bhz9q, "id")})
            }
        }
    }();
    b0x.YK6E = function (d0x) {
        var C0x = d0x.id;
        if (!C0x || !this.YJ6D.length) return;
        this.bFa5f.iG3x({key: "track_playlist-" + C0x, data: {tracks: this.YJ6D, pid: C0x}});
        this.bq0x()
    };
    b0x.yx9o = function () {
        this.B0x("onsuccess");
        n0x.Z0x.M0x({tip: "æ¶èæå"})
    };
    b0x.em2x = function (d0x) {
        this.bq0x();
        this.B0x("onerror", d0x);
        var cA1x = "æ¶èå¤±è´¥";
        switch (d0x.code) {
            case 405:
                cA1x = "æä½è¿äºé¢ç¹ï¼åä¼æ¯ä¸ä¸åè¯å§";
                break;
            case 507:
                cA1x = "æ­åæ°éè¶è¿éå¶";
                break;
            case 502:
                cA1x = "æ­æ²å·²ç»å­å¨"
        }
        n0x.Z0x.M0x({tip: cA1x, type: 2})
    };
    b0x.bhi9Z = function () {
        this.bq0x();
        n0x.Z0x.M0x({tip: "åè¡¨ä¸è½½å¤±è´¥ï¼è¯·ç¨ååè¯", type: 2})
    };
    l0x.ls4w = function (e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n0x.bhf9W.M0x(e0x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, cM1x = c0x("nej.p"), a9j = c0x("nej.e"), h0x = c0x("nej.v"),
        v0x = c0x("nej.j"), k0x = c0x("nej.u"), l0x = c0x("nm.x");
    var bhH9y, nq4u, V0x = decodeURIComponent(location.href),
        iU3x = /.+(http:\/\/.+\/proxy.html)/.test(V0x) ? RegExp.$1 : "";
    if (!!iU3x) {
        v0x.vr8j("mail_proxy_url", iU3x)
    } else {
        iU3x = v0x.sH6B("mail_proxy_url") || "about:blank"
    }
    bhH9y = a9j.XR6L({
        src: iU3x, onload: function () {
            nq4u = true
        }
    });
    var bEZ5e = function () {
        v0x.gG2x("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var bVY0x = function () {
        if (cM1x.cT1x.browser == "ie" && parseInt(cM1x.cT1x.version) < 9) {
            l0x.eS2x({
                clazz: "m-layer-w2",
                message: "å½åæµè§å¨çæ¬è¿ä½ï¼ææ¶æ æ³ä½¿ç¨ï¼è¯·åçº§ååè¯ã"
            });
            return false
        }
        return true
    };
    l0x.Mg3x = function (t0x, C0x, W0x) {
        if (!bVY0x()) return;
        bEZ5e();
        if (W0x == "stop") {
            if (!nq4u) throw"proxy not loaded";
            bEZ5e();
            bhH9y.contentWindow.location.replace(iU3x + "#" + k0x.da1x({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            bhH9y.contentWindow.location.replace(iU3x + "#" + k0x.da1x({
                to: "ifrmMusic",
                message: JSON.stringify({type: t0x, id: C0x, s: +(new Date), action: W0x})
            }))
        }
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), v0x = c0x("nej.j"),
        k0x = c0x("nej.u"), l0x = c0x("nm.x"), n0x = c0x("nm.l"), p0x = c0x("nm.d");
    var kA4E = p0x.hK3x.A0x();
    var ns4w = p0x.uC7v.A0x({onlistload: bVO0x, onitemload: bVN0x, onerror: em2x});
    var BI0x = p0x.pn5s.A0x({onlistload: bVM0x, onitemload: bVK0x, onerror: em2x});
    var bEV5a = {};

    function tW6Q(d0x) {
        var f0x = h0x.U0x(d0x, "d:resAction"), W0x = a9j.u0x(f0x, "resAction");
        if (f0x && (W0x == "play" || W0x == "addto")) {
            var t0x = parseInt(a9j.u0x(f0x, "resType"));
            bET5Y({
                action: W0x,
                type: t0x,
                id: a9j.u0x(f0x, "resId"),
                from: a9j.u0x(f0x, "resFrom"),
                data: a9j.u0x(f0x, "resData"),
                order: a9j.u0x(f0x, "resOrder"),
                node: f0x
            });
            if (t0x != 13) bER5W(f0x)
        }
    }

    function bET5Y(bN1x) {
        var W0x = bN1x.action, t0x = bN1x.type, C0x = bN1x.id, dJ1x = bN1x.from, i0x = bN1x.data, qX5c = bN1x.order,
            e0x = {
                limit: 1e3,
                offset: 0,
                data: {id: C0x},
                ext: {id: C0x, action: W0x, type: t0x, from: dJ1x, data: i0x, node: bN1x.node}
            };
        if (W0x != "play" && W0x != "addto" || !t0x) return;
        if (window.GRef && GRef == "mail") {
            l0x.Mg3x(t0x, C0x, W0x);
            return
        }
        switch (t0x) {
            case 13:
                e0x.key = "track_playlist-" + C0x;
                ns4w.nv4z(e0x);
                break;
            case 17:
                e0x.key = "program";
                e0x.id = C0x;
                BI0x.Uk5p(e0x);
                if (W0x == "play") {
                    v0x.bo0x("/api/dj/program/listen", {query: {id: C0x}})
                }
                break;
            case 18:
                e0x.key = "track";
                e0x.id = C0x;
                ns4w.Uk5p(e0x);
                break;
            case 19:
                e0x.key = "track_album-" + C0x;
                ns4w.nv4z(e0x);
                break;
            case 24:
                e0x.key = "track_day";
                ns4w.nv4z(e0x);
                break;
            case 2:
                e0x.key = "track_artist_top-" + C0x;
                ns4w.nv4z(e0x);
                break;
            case 70:
                e0x.key = "program_djradio-" + C0x + "-" + qX5c;
                e0x.data.radioId = C0x;
                e0x.data.asc = qX5c == 2;
                BI0x.nv4z(e0x);
                break
        }
    }

    function bEN5S(j0x) {
        var m0x = [];
        k0x.be0x(j0x, function (r0x) {
            if (r0x.mainSong) {
                r0x.mainSong.program = r0x;
                m0x.push(r0x.mainSong);
                r0x.localupdatetime = +(new Date);
                ns4w.cjz3x(r0x.mainSong);
                r0x.mainTrackId = r0x.mainSong.id;
                delete r0x.mainSong
            } else {
                var bEL5Q = ns4w.ek2x(r0x.mainTrackId);
                bEL5Q && m0x.push(bEL5Q)
            }
        });
        return m0x
    }

    function YE6y(j0x, e0x) {
        var qj5o = e0x.action == "play" && e0x.type != 17 && e0x.type != 18, eU2x = e0x.action == "play";
        if (!j0x.length) return;
        if (e0x.type == 19) {
            j0x = l0x.Fl1x(j0x, true, {play: true}, {source: "album", sourceid: e0x.id})
        } else {
            j0x = l0x.Fl1x(j0x, true, {play: true})
        }
        k0x.be0x(j0x, function (r0x) {
            r0x.source = l0x.baZ7S({fid: e0x.from, fdata: e0x.data, type: e0x.type, rid: e0x.id}, r0x.id)
        });
        top.player.addTo(j0x, qj5o, eU2x);
        kA4E.Jq2x({rid: e0x.id, type: e0x.type, hash: l0x.Gt1x(), play: eU2x, source: e0x.from, sourceid: e0x.data})
    }

    function bVO0x(d0x) {
        var eL2x = d0x.ext || {};
        j0x = ns4w.gR3x(d0x.key);
        YE6y(j0x, eL2x);
        if (eL2x.type == 13 && eL2x.action == "play" && j0x && j0x.length > 0) {
            bER5W(eL2x.node);
            v0x.bo0x("/api/playlist/update/playcount", {query: {id: eL2x.id}})
        }
    }

    function bVN0x(d0x) {
        var j0x = [ns4w.ek2x(d0x.id)], bf0x = j0x[0], pc5h = l0x.ot5y(bf0x), rg6a = bf0x.privilege || {};
        if (pc5h == 10) {
            l0x.sN6H(rg6a.fee || bf0x.fee, bf0x.id, "song", null, rg6a)
        } else if (pc5h == 100) {
            l0x.hW3x(null, null, null, true, bf0x)
        } else if (pc5h == 11) {
            l0x.bJU6O(bf0x.id, 18)
        } else {
            YE6y(j0x, d0x.ext)
        }
    }

    function bVM0x(d0x) {
        var j0x = bEN5S(BI0x.gR3x(d0x.key));
        YE6y(j0x, d0x.ext)
    }

    function bVK0x(d0x) {
        var j0x = bEN5S([BI0x.ek2x(d0x.id)]);
        YE6y(j0x, d0x.ext)
    }

    function em2x() {
        top.player.tipPlay("æ æ³æ­æ¾ï¼é³ä¹å·²ä¸çº¿")
    }

    function bER5W(f0x) {
        var t0x = a9j.u0x(f0x, "resType"), C0x = a9j.u0x(f0x, "resId"), J0x = t0x + "-" + C0x;
        if (bEV5a[J0x]) return;
        var bEI5N = a9j.x0x("play-count"), bio9f = a9j.I0x(f0x.parentNode, "nb"), NB3x = null;
        if (bEI5N) {
            NB3x = bEI5N
        } else {
            NB3x = !!bio9f && !!bio9f[0] ? bio9f[0] : null
        }
        if (NB3x) {
            var ct1x = NB3x.innerHTML;
            if (/^\d+$/.test(ct1x)) {
                NB3x.innerText = +ct1x + 1
            }
            bEV5a[J0x] = true
        }
    }

    l0x.bVp0x = function (f0x) {
        h0x.q0x(f0x || document.body, "click", tW6Q.g0x(this))
    };
    l0x.bVo0x = function (W0x, t0x, C0x) {
        bET5Y({action: W0x, type: t0x, id: C0x})
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"),
        H0x = c0x("nej.ut"), p0x = c0x("nm.d"), b0x, K0x;
    p0x.eO2x({
        "share-all": {
            url: "/api/share/friends/resource", format: function (m0x, e0x) {
                this.bVn0x(m0x, e0x)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (m0x, e0x) {
                this.B0x("onshareall", e0x.result)
            }, onerror: function (m0x, e0x) {
                this.B0x("onshareall", e0x.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (m0x, e0x) {
                e0x.options.picUrl = m0x.picUrl;
                this.bEH5M(e0x.options, e0x.result)
            }, onerror: function (m0x, e0x) {
                this.B0x("onshareall", e0x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (Q0x, e0x) {
                this.oK5P("vid_info-" + e0x.data.nosKey, Q0x);
                return Q0x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e0x) {
            }, format: function (m0x, e0x) {
                e0x.data = e0x.data2;
                this.cj1x("share-all", e0x)
            }, onerror: "onshareerror"
        }
    });
    p0x.bix9o = NEJ.C();
    b0x = p0x.bix9o.O0x(p0x.gX3x);
    b0x.bVl0x = function () {
        var tr6l = function (Q0x, e0x) {
            e0x.times++;
            if (e0x.times > 10) {
                this.B0x("onvinfoerror", e0x.key, Q0x)
            } else {
                setTimeout(eB2x.g0x(this, e0x), e0x.times * 1e3)
            }
        };
        var vD8v = function (Q0x, e0x) {
            this.B0x("onvinfo", e0x.key, Q0x)
        };
        var eB2x = function (e0x) {
            var V0x = e0x.url;
            v0x.bo0x(V0x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: vD8v.dX2x(this, e0x),
                onerror: tr6l.dX2x(this, e0x)
            })
        };
        return function (e0x) {
            e0x.times = 0;
            eB2x.call(this, e0x)
        }
    }();
    b0x.cvq6k = function () {
        var OQ3x;
        var tr6l = function (Q0x, e0x) {
            if (Q0x.code > 0) {
                clearInterval(this.Cm0x);
                this.B0x("onviderror", e0x.data.nosKey)
            }
        };
        var vD8v = function (J0x, Q0x) {
            if (Q0x.vid && Q0x.covers) {
                clearInterval(this.Cm0x);
                this.B0x("onvid", J0x, Q0x)
            }
        };
        var eB2x = function (e0x) {
            if (+(new Date) - OQ3x > 60 * 60 * 1e3) {
                clearInterval(this.Cm0x);
                this.B0x("onviderror", e0x.data.nosKey);
                return
            }
            e0x.onload = vD8v.g0x(this, e0x.data.nosKey);
            e0x.onerror = tr6l.g0x(this);
            this.cj1x("vid-get", e0x)
        };
        return function (e0x) {
            if (!e0x || !e0x.data) return;
            OQ3x = +(new Date);
            this.Cm0x = clearInterval(this.Cm0x);
            this.Cm0x = setInterval(eB2x.g0x(this, e0x), 1e4);
            eB2x.apply(this, arguments)
        }
    }();
    b0x.bVj0x = function () {
        this.Cm0x = clearInterval(this.Cm0x)
    };
    b0x.bVn0x = function (m0x, mC4G) {
        if (m0x.event && mC4G.snsTypes) {
            if (mC4G.pics) {
                var bEE5J = [];
                for (var i = 0, len = mC4G.pics.length; i < len; i++) {
                    bEE5J[i] = mC4G.pics[i].originId
                }
                this.cj1x("share_img_compound", {data: {picIds: bEE5J.join(",")}, options: mC4G, result: m0x})
            } else {
                mC4G.picUrl = mC4G.picUrl;
                this.bEH5M(mC4G, m0x)
            }
        } else {
            this.B0x("onshareall", m0x)
        }
        var wm8e = p0x.hK3x.A0x();
        wm8e.gc2x(mC4G.isPub ? "pubevent" : "shareevent", {id: m0x.id})
    };
    b0x.bEH5M = function (mC4G, m0x) {
        var cm1x = {};
        cm1x.eventid = m0x.event.id;
        cm1x.eventtype = m0x.event.type;
        mC4G.picUrl && (cm1x.picUrl = mC4G.picUrl);
        cm1x.snsTypes = mC4G.snsTypes;
        cm1x.msg = mC4G.data.msg || "";
        cm1x.type = mC4G.data.type;
        mC4G.data.id && (cm1x.id = mC4G.data.id);
        this.cj1x("share-sns", {data: cm1x, result: m0x})
    };
    b0x.bVa0x = function (e0x) {
        var i0x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k0x.mL4P(5)
        };
        i0x = NEJ.EX(i0x, e0x);
        if (!(i0x.id > 0)) {
            delete i0x.id;
            i0x.type = "noresource"
        }
        if (!i0x.threadId) {
            delete i0x.threadId
        }
        if (!i0x.actId) {
            delete i0x.actId
        }
        if (!i0x.pics) {
            delete i0x.pics
        } else {
            i0x.pics = JSON.stringify(i0x.pics)
        }
        this.cj1x("share-all", {
            data: i0x,
            snsTypes: e0x.snsTypes,
            picUrl: e0x.picUrl,
            pics: e0x.pics,
            isPub: e0x.isPub
        })
    };
    b0x.bUZ0x = function (e0x) {
        this.cj1x("share-private", e0x)
    };
    b0x.bUX0x = function (e0x) {
        this.cj1x("video-submit", e0x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, h0x = c0x("nej.v"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K0x;
    var bUU0x = {40: !0};
    p0x.eO2x({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e0x) {
                e0x.data.getcounts = true;
                e0x.data.pagesize = e0x.data.limit;
                if (e0x.data.offset == 0) {
                    e0x.data.lasttime = -1
                }
                delete e0x.data.offset
            }, format: function (Q0x, e0x) {
                Q0x.event = l0x.Rx4B(Q0x.event, function (r0x, s0x) {
                    return !bUU0x[r0x.type]
                });
                this.bUT0x(Q0x.event);
                e0x.data.lasttime = Q0x.lasttime;
                if (Q0x.event.length) {
                    Q0x.event.length = e0x.limit
                }
                return {list: Q0x.event, total: Q0x.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (Q0x, e0x) {
                return {list: Q0x.events, total: Q0x.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e0x) {
                e0x.data.pagesize = 20
            }, format: function (Q0x, e0x) {
                return Q0x.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e0x) {
                e0x.data.time = -1;
                e0x.data.getcounts = true
            }, format: function (Q0x, e0x) {
                Q0x.events.length = e0x.limit;
                return {list: Q0x.events, total: Q0x.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (m0x, e0x) {
                m0x.conf = e0x.conf;
                return m0x
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e0x, bc0x) {
                if (e0x.like) {
                    if (e0x.comment) {
                        bc0x.url = "/api/v1/comment/like"
                    } else {
                        bc0x.url = "/api/resource/like"
                    }
                    bc0x.onload = "oneventlike";
                    bc0x.onerror = "oneventlikeerr"
                } else {
                    if (e0x.comment) {
                        bc0x.url = "/api/v1/comment/unlike"
                    } else {
                        bc0x.url = "/api/resource/unlike"
                    }
                    bc0x.onload = "oneventunlike";
                    bc0x.onerror = "oneventunlikeerr"
                }
            }, format: function (m0x, e0x) {
                m0x.eid = e0x.eid;
                m0x.origin = e0x.origin;
                m0x.ext = e0x.ext;
                return m0x
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (m0x, e0x) {
                m0x.id = e0x.data.id;
                return m0x
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e0x, bc0x) {
                if (e0x.data.type == "nointer") {
                    bc0x.url = "/api/event/rcmd/reject"
                } else if (e0x.data.transcoding) {
                    bc0x.url = "/api/event/video/transcoding/delete"
                } else {
                    bc0x.url = "/api/event/delete"
                }
            }, format: function (m0x, e0x) {
                m0x.id = e0x.data.id;
                return m0x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (m0x, e0x) {
                m0x.id = e0x.data.id;
                return m0x
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e0x) {
                e0x.data.lasttime = e0x.data.lasttime || -1;
                e0x.data.pagesize = e0x.data.limit;
                e0x.data.getcounts = true;
                delete e0x.data.offset
            }, format: function (Q0x, e0x) {
                e0x.data.lasttime = Q0x.lasttime;
                var j0x = Q0x.events;
                if (Q0x.more) j0x = this.bUR0x(j0x, e0x.data.pagesize);
                return {list: j0x, total: Q0x.size}
            }, onerror: "onlisterror"
        }
    });
    p0x.yG9x = NEJ.C();
    b0x = p0x.yG9x.O0x(p0x.gX3x);
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bji9Z = function (t0x, cH1x) {
        return t0x + "-" + cH1x
    };
    b0x.cvu6o = function (e0x) {
        this.cj1x("ievent-get", e0x)
    };
    b0x.cvv6p = function (e0x) {
        this.cj1x("ievent-new-get", e0x)
    };
    b0x.cvx6r = function (e0x) {
        this.cj1x("ievent-user-get", e0x)
    };
    b0x.cvz6t = function (t0x, cH1x) {
        return this.qV5a(this.bji9Z(t0x, cH1x))
    };
    b0x.cvA6u = function (HQ1x, e0x) {
        if (!HQ1x || !HQ1x.length) return;
        e0x = e0x || {};
        var bv0x = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, CX0x = [], bEv5A = [], i0x; i < HQ1x.length; ++i) {
            i0x = HQ1x[i];
            i0x = this.qV5a(this.bji9Z(i0x.type, i0x.id));
            if (!i0x) {
                CX0x.push(HQ1x[i].id);
                bEv5A.push(bv0x[HQ1x[i].type] || 0)
            }
        }
        if (!CX0x.length) {
            this.B0x("oneventresload", e0x.conf);
            return
        }
        e0x.data = {ids: JSON.stringify(CX0x), types: JSON.stringify(bEv5A)};
        e0x.onload = this.bUC0x.g0x(this);
        this.cj1x("ievent-res-get", e0x)
    };
    b0x.bUC0x = function (m0x) {
        if (m0x.code != 200) {
            this.B0x("oneventreserror", m0x.code);
            return
        }
        var bv0x = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, j0x = m0x.results; i < j0x.length; ++i) {
            this.oK5P(this.bji9Z(bv0x[j0x[i].type], j0x[i].id), j0x[i])
        }
        this.B0x("oneventresload", m0x.conf)
    };
    b0x.bEt5y = function (i0x) {
        var J0x = "event-list";
        this.bby7r(J0x, i0x);
        this.B0x("onitemadd", {key: J0x, action: "add", data: i0x, flag: -1})
    };
    b0x.uF7y = function (e0x) {
        this.cj1x("ievent-like", e0x)
    };
    b0x.lB4F = function (e0x) {
        this.cj1x("ievent-delete", e0x)
    };
    b0x.bUR0x = function (j0x, fY2x) {
        for (var i = j0x.length; i < fY2x; i++) j0x.push(null);
        return j0x
    };
    b0x.bUT0x = function (j0x) {
        var m0x = [];
        if (!j0x || !j0x.length) return;
        k0x.be0x(j0x, function (d0x) {
            d0x.biData = this.bEs5x(d0x)
        }, this)
    };
    b0x.bEs5x = function () {
        var YX6R = {32: "comment", 33: "activity", 34: "recomment_artist"},
            bUy0x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d0x) {
            var Q0x = {
                id: d0x.id,
                sourceid: d0x.user.userId,
                alg: d0x.rcmdInfo ? d0x.rcmdInfo.alg : null,
                contentType: YX6R[d0x.type] || (k0x.cW1x(bUy0x, d0x.type) != -1 ? "user_event" : "other")
            };
            return Q0x
        }
    }();
    b0x.CF0x = function (bUx0x, d0x) {
        var Q0x = this.bEs5x(d0x);
        Q0x.actionType = bUx0x;
        if (window.log) log("eventclick", Q0x)
    };
    b0x.cvD6x = function (e0x) {
        this.cj1x("event_latest-list", e0x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        v0x = c0x("nej.j"), bK1x = c0x("nej.ui"), l0x = c0x("nm.x"), L0x = c0x("nm.w"), b0x, K0x;
    L0x.Yu6o = NEJ.C();
    b0x = L0x.Yu6o.O0x(bK1x.es2x);
    K0x = L0x.Yu6o.cg1x;
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        var gC2x = e0x.box || X0x;
        a9j.fz2x(this.o0x, {
            position: "absolute",
            width: gC2x.width + "px",
            height: gC2x.height + "px",
            top: gC2x.top + "px",
            left: gC2x.left + "px"
        });
        window.uploader = this
    };
    b0x.bD0x = function () {
        this.bH0x()
    };
    b0x.lp4t = function (d0x) {
        this.B0x("onselect", d0x);
        console.log("select", d0x)
    };
    b0x.rN6H = function (d0x) {
        this.B0x("onprogress", d0x);
        console.log("progress", d0x)
    };
    b0x.tn6h = function (d0x) {
        if (d0x.code == 200) {
            this.B0x("oncomplete", d0x)
        } else {
            this.em2x(d0x)
        }
        console.log("complete", d0x)
    };
    b0x.em2x = function (d0x) {
        this.B0x("onerror", d0x);
        console.log("error", d0x)
    };
    b0x.gI2x = bm0x;
    b0x.bUs0x = bm0x
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"),
        bK1x = c0x("nej.ui"), l0x = c0x("nm.x"), L0x = c0x("nm.w"), fZ2x = c0x("cb"), b0x, K0x;
    L0x.bkb9S = NEJ.C();
    b0x = L0x.bkb9S.O0x(L0x.Yu6o);
    K0x = L0x.bkb9S.cg1x;
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        var J0x = k0x.mL4P(8), jh3x = "onselect" + J0x, kz4D = "onprogress" + J0x, bEp5u = "oncomplete" + J0x,
            bP1x = "onerror" + J0x;
        fZ2x[jh3x] = this.lp4t.g0x(this);
        fZ2x[kz4D] = this.rN6H.g0x(this);
        fZ2x[bEp5u] = this.tn6h.g0x(this);
        fZ2x[bP1x] = this.em2x.g0x(this);
        var bUl0x = "/style/swf/MusicUpload.swf?v=20150202",
            bv0x = {music: "é³é¢(*.mp3,*.m4a,*.x-m4a)", image: "*.jpg;*.jpeg;*.png;*.gif;"}, lo4s = {
                url: e0x.api,
                token: e0x.token,
                filter: bv0x[e0x.accept] || e0x.accept || e0x.flashAccept || "",
                multiple: e0x.multiple,
                error: "cb." + bP1x,
                select: "cb." + jh3x,
                progress: "cb." + kz4D,
                complete: "cb." + bEp5u
            };
        this.oL5Q = a9j.qr5w({
            src: bUl0x,
            hidden: false,
            parent: this.o0x,
            onready: this.JA2x.g0x(this),
            width: e0x.box.width,
            height: e0x.box.height,
            params: {flashvars: k0x.ul7e(lo4s, "&", false), allowscriptaccess: "always", wmode: "transparent"}
        })
    };
    b0x.bD0x = function () {
        this.bH0x();
        this.o0x.innerHTML = ""
    };
    b0x.JA2x = function (gV3x) {
        this.oL5Q = gV3x
    };
    b0x.gI2x = function (iz3x) {
        this.oL5Q.upload(iz3x)
    };
    b0x.bUs0x = function () {
        this.oL5Q.cancle()
    };
    b0x.qL5Q = function (Dl0x) {
        this.oL5Q.disable(Dl0x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, dP1x = c0x("nej.g"), a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        v0x = c0x("nej.j"), bK1x = c0x("nej.ui"), l0x = c0x("nm.x"), L0x = c0x("nm.w"), b0x, K0x;
    var hR3x = a9j.rH6B(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var gj2x = a9j.ib3x('<div class="' + hR3x + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L0x.bkm9d = NEJ.C();
    b0x = L0x.bkm9d.O0x(L0x.Yu6o);
    K0x = L0x.bkm9d.cg1x;
    b0x.bY1x = function () {
        this.kW4a = hR3x;
        this.ca1x = gj2x
    };
    b0x.bS1x = function () {
        this.cb1x();
        var bn0x = a9j.cS1x(this.o0x);
        this.bA0x = bn0x[0];
        h0x.q0x(this.bA0x.uploadfile, "change", this.xK9B.g0x(this))
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.bUk0x = e0x.api || "";
        this.Ym6g = e0x.multiple;
        this.bA0x.multiple = this.Ym6g ? "coverImgUrl" : "";
        this.bA0x.reset();
        this.Yj6d = [];
        this.Yh6b = {};
        var bv0x = {music: "audio/mp3,audio/x-m4a,audio/m4a", image: "image/*"};
        if (e0x.accept || e0x.htmlAccept) {
            this.bA0x.uploadfile.accept = bv0x[e0x.accept] || e0x.accept || e0x.htmlAccept
        }
        if (e0x.tipTitle) {
            this.bA0x.uploadfile.title = e0x.tipTitle
        }
    };
    b0x.bD0x = function () {
        this.bH0x();
        this.bkA9r();
        this.bA0x.reset();
        delete this.Yj6d;
        delete this.Yh6b;
        this.bA0x.uploadfile.accept = "*"
    };
    b0x.xK9B = function (d0x) {
        var bEm5r = this.bA0x.uploadfile.files, bEl5q = [];
        if (!this.Ym6g) {
            this.Yj6d = [];
            this.Yh6b = {}
        }
        for (var i = 0, ii = bEm5r.length; i < ii; i++) {
            var Yf6Z = this.bUg0x(bEm5r[i]);
            this.Yj6d.push(Yf6Z);
            this.Yh6b[Yf6Z.uuid] = Yf6Z;
            bEl5q.push(Yf6Z);
            if (!this.Ym6g) break
        }
        this.lp4t(bEl5q);
        this.bA0x.reset()
    };
    b0x.bkA9r = function () {
        if (this.bEi5n) {
            this.bEg5l = true;
            v0x.lh4l(this.Hy1x);
            this.bEg5l = false;
            delete this.bEi5n;
            delete this.Hy1x
        }
    };
    b0x.bUg0x = function (dz1x) {
        return {uuid: "file-" + +(new Date) + k0x.mL4P(5), name: dz1x.name, size: dz1x.size, refernce: dz1x}
    };
    b0x.gI2x = function (iz3x) {
        this.bkA9r();
        var dz1x = this.Ym6g ? this.Yh6b[iz3x] : this.Yj6d[0], i0x = new FormData, nA4E = {};
        if (dz1x) {
            nA4E[dP1x.wK8C] = dP1x.EB1x;
            i0x.append("fileupload", dz1x.refernce);
            this.bEi5n = dz1x;
            this.Hy1x = v0x.bo0x(this.bUk0x, {
                type: "json",
                method: "post",
                headers: nA4E,
                data: i0x,
                timeout: 0,
                onload: this.yO9F.g0x(this, iz3x),
                onerror: this.yO9F.g0x(this, iz3x),
                onuploading: this.bTW0x.g0x(this, iz3x)
            })
        }
    };
    b0x.yO9F = function (iz3x, d0x) {
        d0x.uuid = iz3x;
        if (d0x.code == 200) {
            this.tn6h(d0x)
        } else {
            if (!this.bEg5l) {
                this.em2x(d0x)
            }
        }
    };
    b0x.bTW0x = function (iz3x, d0x) {
        d0x.uuid = iz3x;
        this.rN6H(d0x)
    };
    b0x.bTV0x = function () {
        this.bkA9r()
    };
    b0x.qL5Q = function (Dl0x) {
        if (Dl0x) {
            this.bq0x()
        } else {
            this.M0x()
        }
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, L0x = c0x("nm.w"), bTT0x = typeof FormData != "undefined";
    L0x.DO0x = NEJ.C();
    L0x.DO0x.O0x(bTT0x ? L0x.bkm9d : L0x.bkb9S)
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), dP1x = c0x("nej.g"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        ff2x = c0x("nej.n"), H0x = c0x("nej.ut"), bd0x = c0x("nej.ui"), D0x = c0x("nm.w"), n0x = c0x("nm.l"),
        p0x = c0x("nm.d"), l0x = c0x("nm.x"), L0x = c0x("nm.x.f"), b0x, K0x, bkS0x = {
            0: "",
            "-1": "ä¸è½æ·»å éå¤å¾ç",
            "-10": "æå¤åªè½æ·»å 9å¼ ",
            "-3": "è¯·éæ©ä¸è¶è¿5Mçå¾ç"
        }, bkX0x = 5 * 1024 * 1024, cvG6A = 80, bTP0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D0x.bEd5i = NEJ.C();
    b0x = D0x.bEd5i.O0x(H0x.xc8U);
    b0x.bqC2x = function () {
        return {x: this.za9R.clientWidth - this.o0x.offsetWidth, y: this.za9R.clientHeight - this.o0x.offsetHeight}
    };
    D0x.blc0x = NEJ.C();
    b0x = D0x.blc0x.O0x(bd0x.es2x);
    b0x.bY1x = function () {
        this.ca1x = "m-xwgt-share-upload"
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.I0x(this.o0x, "j-flag");
        this.Ya6U = j0x.shift();
        this.DS0x = j0x.shift();
        this.La2x = j0x.shift();
        this.bTM0x = {
            onselect: this.bEc5h.dX2x(this, 0),
            onerror: this.em2x.g0x(this),
            oncomplete: this.tn6h.g0x(this),
            multiple: true,
            parent: this.DS0x,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "å¾ç(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {width: 60, height: 60, top: 0, left: 0},
            tipTitle: "ä¸ä¼ å¾ç"
        };
        this.bDY5d = {
            onselect: this.bEc5h.dX2x(this, 1),
            onerror: this.em2x.g0x(this),
            oncomplete: this.tn6h.g0x(this),
            multiple: true,
            parent: this.DS0x,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "å¾ç(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {width: 20, height: 20, top: 0, left: 0},
            tipTitle: "ä¸ä¼ å¾ç"
        };
        this.bTB0x = D0x.DO0x.A0x(this.bTM0x)
    };
    b0x.bD0x = function () {
        h0x.iq3x(this.rC6w, "click");
        if (!!this.fj2x) {
            for (var i = this.fj2x.length - 1; i >= 0; i--) {
                a9j.cF1x(this.fj2x[i].element, false);
                if (this.fj2x[i].dragger) this.fj2x[i].dragger.S0x()
            }
        }
        this.fj2x = [];
        this.XW6Q = {};
        if (this.yQ9H) {
            clearTimeout(this.yQ9H)
        }
        this.yQ9H = 0;
        this.Hx1x && this.Hx1x.S0x();
        delete this.Hx1x;
        this.bH0x()
    };
    b0x.bEc5h = function (j0x, s0x) {
        if (!j0x) return;
        for (var i = 0, len = j0x.length; i < len; i++) {
            if (!bTP0x.test(j0x[i].name)) {
                this.bly0x({path: j0x[i].name, index: s0x, uuid: j0x[i].uuid, status: -4, fail: "è¿ä¸æ¯<br>å¾ç"})
            } else if (j0x[i].size > bkX0x) {
                this.blA0x(-3);
                this.bly0x({path: j0x[i].name, index: s0x, uuid: j0x[i].uuid, status: -3, fail: "ä¸ä¼ <br>å¤±è´¥"})
            } else {
                this.bly0x({path: j0x[i].name, index: s0x, uuid: j0x[i].uuid, status: 0})
            }
        }
    };
    b0x.em2x = function (d0x) {
        var dz1x = this.XW6Q[d0x.uuid];
        dz1x.status = -4;
        dz1x.fail = "ä¸ä¼ <br>å¤±è´¥";
        this.bDP5U(dz1x);
        this.yS9J()
    };
    b0x.tn6h = function (d0x) {
        var dz1x = this.XW6Q[d0x.uuid];
        dz1x.status = 2;
        var bt0x = NEJ.X({}, d0x.picInfo);
        bt0x.originId = bt0x.originIdStr;
        bt0x.squareId = bt0x.squareIdStr;
        bt0x.rectangleId = bt0x.rectangleIdStr;
        bt0x.pcSquareId = bt0x.pcSquareIdStr;
        bt0x.pcRectangleId = bt0x.pcRectangleIdStr;
        bt0x.originJpgId = bt0x.originJpgIdStr || bt0x.originJpgId;
        dz1x.picInfo = bt0x;
        dz1x.picUrl = d0x.picInfo.pcSquareUrl;
        this.bDP5U(dz1x);
        this.yS9J()
    };
    b0x.bly0x = function (dz1x) {
        if (this.fj2x.length >= 9) {
            this.blA0x(-10, 3e3, this.bDL5Q.g0x(this));
            return
        }
        this.bTk9b(dz1x);
        this.fj2x.push(dz1x);
        this.XW6Q[dz1x.uuid] = dz1x;
        if (!!this.fj2x.length) {
            this.o0x.style.display = ""
        }
        if (this.fj2x.length >= 9) {
            this.DS0x.style.display = "none"
        } else {
            this.DS0x.style.display = ""
        }
        this.yS9J()
    };
    b0x.yS9J = function () {
        var blH0x = -1, bDH5M = 0;
        for (var i = 0, l = this.fj2x.length; i < l; i++) {
            if (this.fj2x[i].status == 1) {
                return
            }
            if (this.fj2x[i].status == 0 && blH0x < 0) {
                blH0x = i
            }
            if (this.fj2x[i].status == 2 || this.fj2x[i].status < 0) {
                bDH5M++
            }
        }
        var r0x = this.fj2x[blH0x];
        if (r0x) {
            (r0x.index == 0 ? this.bTB0x : this.Hx1x).gI2x(r0x.uuid);
            r0x.status = 1;
            this.B0x("onstartupload", {})
        } else if (bDH5M == this.fj2x.length) {
            this.B0x("onfinishupload", {})
        }
    };
    b0x.blA0x = function (s0x, jw3x, fZ2x) {
        if (this.Lz2x < s0x) {
            return
        }
        if (this.yQ9H) {
            clearTimeout(this.yQ9H);
            this.yQ9H = 0
        }
        if (jw3x) {
            this.La2x.innerText = bkS0x[s0x * 1];
            this.Lz2x = s0x;
            this.yQ9H = setTimeout(this.XV6P.g0x(this, s0x, fZ2x), jw3x)
        } else {
            this.La2x.innerText = bkS0x[s0x];
            this.Lz2x = s0x
        }
        this.La2x.style.display = ""
    };
    b0x.XV6P = function (s0x, fZ2x) {
        if (s0x && this.Lz2x !== s0x) {
            return
        }
        this.Lz2x = 0;
        this.La2x.innerText = bkS0x[0];
        this.La2x.style.display = "none";
        fZ2x && fZ2x()
    };
    b0x.bTk9b = function (dz1x) {
        var i0x = {};
        if (dz1x.fail) {
            i0x.fail = dz1x.fail
        }
        var ds1x = a9j.bQ1x("m-xwgt-share-upload-preview", i0x);
        dz1x.element = a9j.mM4Q(ds1x);
        h0x.q0x(a9j.I0x(dz1x.element, "del")[0], "mousedown", this.bTb9S.g0x(this, dz1x), false);
        this.Ya6U.insertBefore(dz1x.element, this.Ya6U.lastElementChild);
        dz1x.dragger = D0x.bEd5i.A0x({
            view: this.Ya6U.parentNode,
            body: dz1x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Oq3x.g0x(this, dz1x),
            onchange: this.bTa9R.g0x(this, dz1x),
            ondragend: this.bpU1x.g0x(this, dz1x)
        })
    };
    b0x.bDP5U = function (dz1x) {
        if (!dz1x || !dz1x.element) {
            return false
        }
        var i0x = {};
        if (dz1x.fail) {
            i0x.fail = dz1x.fail
        } else {
            i0x.url = dz1x.picUrl
        }
        a9j.y0x(dz1x.element, "z-fail");
        dz1x.element.firstChild.outerHTML = a9j.bQ1x("m-xwgt-share-upload-preview-img", i0x)
    };
    b0x.Oq3x = function (r0x, jv3x) {
        a9j.y0x(r0x.element, "z-sel")
    };
    b0x.bTa9R = function (r0x, jv3x) {
        var cvI6C, gA2x = this.fj2x.length - 1, mz4D;
        for (var i = gA2x; i >= 0; i--) {
            a9j.w0x(this.fj2x[i].element, "z-jump");
            if (this.fj2x[i] == r0x) {
                mz4D = i
            } else {
                a9j.fz2x(this.fj2x[i].element, {left: "", top: ""})
            }
        }
        var LL3x = {x: 46 + 92 * (mz4D % 5) + jv3x.left, y: 46 + 92 * (mz4D / 5 >> 0) + jv3x.top};
        var blX0x = LL3x.x / 92 >> 0, blY0x = LL3x.y / 92 >> 0, xu9l = Math.max(0, Math.min(gA2x, blY0x * 5 + blX0x));
        if (xu9l == mz4D) {
            return
        }
        var bSX9O = xu9l < mz4D;
        for (var i = Math.min(xu9l, mz4D); i <= Math.max(xu9l, mz4D); i++) {
            if (i !== mz4D) {
                var brp2x = i % 5;
                if (bSX9O) {
                    if (brp2x == 4) {
                        a9j.fz2x(this.fj2x[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a9j.fz2x(this.fj2x[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (brp2x == 0) {
                        a9j.fz2x(this.fj2x[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a9j.fz2x(this.fj2x[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b0x.bpU1x = function (r0x, jv3x) {
        var cvJ6D, gA2x = this.fj2x.length - 1, mz4D;
        for (var i = gA2x; i >= 0; i--) {
            a9j.fz2x(this.fj2x[i].element, {left: "", top: ""});
            if (this.fj2x[i] == r0x) {
                mz4D = i
            }
        }
        a9j.w0x(r0x.element, "z-sel");
        var LL3x = {x: 46 + 92 * (mz4D % 5) + jv3x.left, y: 46 + 92 * (mz4D / 5 >> 0) + jv3x.top};
        var blX0x = LL3x.x / 92 >> 0, blY0x = LL3x.y / 92 >> 0, xu9l = Math.max(0, Math.min(gA2x, blY0x * 5 + blX0x));
        if (xu9l == mz4D) {
            return
        }
        this.Ya6U.insertBefore(r0x.element, (this.fj2x[xu9l + (xu9l > mz4D ? 1 : 0)] || {}).element || this.DS0x);
        this.fj2x.splice(mz4D, 1);
        this.fj2x.splice(xu9l, 0, r0x)
    };
    b0x.bTb9S = function (r0x, d0x) {
        a9j.cF1x(r0x.element, false);
        if (r0x.dragger) r0x.dragger.S0x();
        delete r0x.dragger;
        var s0x = -1;
        for (var i = this.fj2x.length - 1; i >= 0; i--) {
            if (this.fj2x[i] == r0x) {
                s0x = i;
                break
            }
        }
        this.fj2x.splice(s0x, s0x >= 0 ? 1 : 0);
        delete r0x;
        if (this.fj2x.length >= 9) {
            this.DS0x.style.display = "none"
        } else {
            this.DS0x.style.display = ""
        }
        if (!this.fj2x.length) {
            this.o0x.style.display = "none";
            this.XV6P(0)
        } else {
            this.bDL5Q()
        }
        this.yS9J()
    };
    b0x.bDL5Q = function () {
        var bDB5G = false;
        for (var i = 0, len = this.fj2x.length; i < len; i++) {
            if (this.fj2x[i].status == -3) {
                bDB5G = true
            }
        }
        if (bDB5G) {
            this.blA0x(-3)
        } else {
            this.XV6P(-3)
        }
    };
    b0x.Mb3x = function () {
        var ed2x = [];
        for (var i = this.fj2x.length - 1; i >= 0; i--) {
            if (this.fj2x[i].status == 2) {
                ed2x.unshift(this.fj2x[i].picInfo)
            }
        }
        return ed2x
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.bDY5d.parent = e0x.button;
        this.Hx1x && this.Hx1x.S0x();
        this.Hx1x = D0x.DO0x.A0x(this.bDY5d);
        this.o0x.style.display = "none";
        if (!!this.fj2x) {
            for (var i = this.fj2x.length - 1; i >= 0; i--) {
                a9j.cF1x(this.fj2x[i].element, false);
                if (this.fj2x[i].dragger) this.fj2x[i].dragger.S0x()
            }
        }
        this.fj2x = [];
        this.XW6Q = {};
        if (this.yQ9H) {
            clearTimeout(this.yQ9H)
        }
        this.XV6P(0);
        this.Lz2x = 0
    };
    H0x.fr2x.A0x({element: D0x.blc0x, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, eT2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        bd0x = c0x("nej.ui"), N0x = c0x("nej.ut"), b0x, K0x;
    if (!!N0x.mQ4U) return;
    N0x.mQ4U = NEJ.C();
    b0x = N0x.mQ4U.O0x(N0x.Zt6n);
    K0x = N0x.mQ4U.cg1x;
    b0x.bk0x = function (e0x) {
        this.bSP9G(e0x.more);
        this.XQ6K = a9j.x0x(e0x.sbody);
        this.bU1x([[this.XQ6K, "scroll", this.bSO9F.g0x(this)]]);
        var dh1x = e0x.delta;
        if (dh1x == null) dh1x = 30;
        this.Mq3x = Math.max(0, dh1x);
        var ct1x = parseInt(e0x.count) || 0;
        this.iE3x = Math.max(0, ct1x);
        var fv2x = parseInt(e0x.number) || 0;
        if (fv2x > 1 && fv2x <= ct1x) {
            this.zM9D = fv2x
        }
        this.bl0x(e0x)
    };
    b0x.bD0x = function () {
        this.bH0x();
        delete this.yW9N;
        delete this.XQ6K;
        delete this.ry6s;
        delete this.XN6H
    };
    b0x.yj9a = function (bj0x, bp0x) {
        var bE0x = this.wz8r + (this.iE3x - 1) * this.qm5r, fY2x = this.iE3x * this.qm5r;
        return K0x.yj9a.call(this, bE0x, bj0x, fY2x, bp0x)
    };
    b0x.bSP9G = function (XL6F) {
        this.yW9N = a9j.x0x(XL6F);
        this.bU1x([[this.yW9N, "click", this.nO5T.g0x(this)]])
    };
    b0x.bmE0x = function (E0x) {
        E0x = E0x || {};
        if (this.ry6s || !E0x) return;
        if (!E0x.scrollHeight) E0x = a9j.oD5I();
        var bj0x = a9j.hM3x(this.ic3x), dh1x = bj0x.y + this.ic3x.offsetHeight - E0x.scrollTop - E0x.clientHeight,
            bmF0x = E0x.scrollHeight <= E0x.clientHeight;
        if (dh1x <= this.Mq3x || bmF0x && !this.ry6s) {
            this.nO5T()
        }
    };
    b0x.bSO9F = function (d0x) {
        if (this.ry6s) return;
        this.bmE0x(h0x.U0x(d0x))
    };
    b0x.ym9d = function (d0x) {
        K0x.ym9d.apply(this, arguments);
        if (!d0x.stopped) {
            this.Lu2x();
            var bj0x = 0;
            if (d0x.index > 1) {
                bj0x = this.wz8r + ((d0x.index - 1) * this.iE3x - 1) * this.qm5r
            }
            this.hU3x = bj0x;
            this.nO5T()
        }
    };
    b0x.bFp5u = function (e0x) {
        if (!!this.zM9D) {
            var dh1x = e0x.offset > 0 ? this.qm5r : this.wz8r, fY2x = dh1x + this.qm5r * (this.zM9D - 1);
            this.hU3x = e0x.offset + fY2x;
            e0x.data.limit = fY2x;
            e0x.limit = fY2x;
            delete this.zM9D
        }
        return e0x
    };
    b0x.beS8K = function (e0x) {
        delete this.XN6H;
        K0x.beS8K.apply(this, arguments);
        this.bDy5D()
    };
    b0x.beV8N = function (d0x) {
        if (d0x.key != this.iw3x.key) return;
        switch (d0x.action) {
            case"refresh":
            case"append":
                delete this.XN6H;
                break
        }
        K0x.beV8N.apply(this, arguments)
    };
    b0x.Ow3x = function () {
        this.wG8y("onbeforelistload", "åè¡¨å è½½ä¸­...");
        a9j.Y0x(this.yW9N, "display", "none")
    };
    b0x.bfs8k = function (j0x, bj0x, fY2x) {
        var bp0x = j0x.length, bmQ0x = j0x.loaded ? bj0x + fY2x >= bp0x : bj0x + fY2x > bp0x;
        this.hU3x = Math.min(this.hU3x, bp0x);
        a9j.Y0x(this.yW9N, "display", bmQ0x ? "none" : "");
        if (bmQ0x) this.ry6s = !0;
        if (this.iE3x > 0) {
            var bt0x = this.yj9a(bj0x, j0x.length);
            if (this.bFo5t(bt0x.index, bt0x.total)) return !0;
            var dh1x = this.wz8r - this.qm5r, fv2x = this.iE3x * this.qm5r;
            this.ry6s = (bj0x + fY2x - dh1x) % fv2x == 0 || bmQ0x;
            a9j.Y0x(this.yW9N, "display", this.ry6s ? "none" : "");
            this.bff8X(this.ry6s && bt0x.total > 1 ? "" : "none")
        }
    };
    b0x.bfr8j = function () {
        this.hU3x = 0;
        this.ry6s = !0;
        this.wG8y("onemptylist", "æ²¡æåè¡¨æ°æ®ï¼")
    };
    b0x.OT3x = function (ds1x, jv3x) {
        this.ic3x.insertAdjacentHTML(jv3x || "beforeEnd", ds1x)
    };
    b0x.Po3x = function (gx2x) {
        this.fc2x = this.fc2x || [];
        if (k0x.ep2x(gx2x)) {
            eT2x.push.apply(this.fc2x, gx2x)
        } else {
            this.fc2x.push(gx2x)
        }
    };
    b0x.Zn6h = function (d0x) {
        a9j.me4i(this.ch1x);
        this.QA4E(d0x, "onafteradd");
        var eI2x = d0x.flag;
        if (d0x.stopped || !eI2x) return;
        if (this.iE3x > 0) {
            this.bfi8a();
            return
        }
        this.hU3x += 1;
        eI2x == -1 ? this.bgm8e(d0x.data) : this.bFn5s(d0x.data)
    };
    b0x.Zm6g = function (d0x) {
        this.QA4E(d0x, "onafterdelete");
        if (d0x.stopped) return;
        if (this.iE3x > 0) {
            this.bfi8a();
            return
        }
        var C0x = d0x.data[this.eJ2x.pkey];
        if (!!this.fc2x) {
            var r0x = a9j.bLQ7J(C0x), s0x = k0x.cW1x(this.fc2x, r0x);
            if (s0x >= 0) {
                this.fc2x.splice(s0x, 1);
                this.hU3x -= 1
            }
            if (!!r0x) r0x.S0x()
        } else {
            var f0x = a9j.x0x(this.bFv5A(C0x));
            if (!!f0x) this.hU3x -= 1;
            a9j.cF1x(f0x)
        }
        if (this.hU3x <= 0) this.nO5T()
    };
    b0x.bga8S = function (bj0x, fY2x) {
        if (bj0x != this.hU3x) return;
        if (this.Uh5m()) {
            this.ry6s = !1;
            this.bDy5D()
        }
    };
    b0x.bge8W = function (bj0x, fY2x) {
        if (bj0x != 0) return;
        var IY2x = this.P0x.gR3x(this.iw3x.key);
        for (var i = fY2x - 1; i >= 0; i--) {
            this.bgm8e(IY2x[i])
        }
    };
    b0x.bDy5D = function () {
        var E0x = this.XQ6K;
        if (!E0x || this.ry6s) return;
        this.bmE0x(this.XQ6K)
    };
    b0x.fQ2x = function () {
        delete this.ry6s;
        K0x.fQ2x.apply(this, arguments)
    };
    b0x.nO5T = function () {
        if (!!this.XN6H) return;
        this.XN6H = !0;
        var bj0x = this.hU3x;
        this.hU3x += bj0x == 0 ? this.wz8r : this.qm5r;
        this.bFq5v(bj0x)
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), cO1x = c0x("nej.x"),
        N0x = c0x("nej.ut"), b0x;
    if (!!N0x.EF1x) return;
    N0x.EF1x = NEJ.C();
    b0x = N0x.EF1x.O0x(N0x.cz1x);
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.im3x = e0x.event || "click";
        this.ju3x = e0x.selected || "js-selected";
        this.mW4a = e0x.disabled || "js-disabled";
        this.bDx5C = !!e0x.inverse;
        this.bSF9w(e0x.list);
        this.MT3x(e0x.index || 0)
    };
    b0x.bD0x = function () {
        var bSB9s = function (f0x) {
            this.bmY0x(f0x, !1)
        };
        return function () {
            this.bH0x();
            k0x.be0x(this.bV1x, bSB9s, this);
            delete this.bV1x;
            delete this.im3x;
            delete this.cn1x;
            delete this.mW4a;
            delete this.ju3x;
            delete this.bDx5C
        }
    }();
    b0x.bSF9w = function () {
        var bdD7w = function (r0x) {
            if (!r0x) return;
            this.bV1x.push(r0x);
            var s0x = this.bV1x.length - 1, de1x = this.bnc0x[s0x];
            if (!de1x) {
                de1x = this.MT3x.g0x(this, s0x);
                this.bnc0x[s0x] = de1x
            }
            this.bU1x([[r0x, this.im3x, de1x]])
        };
        return function (j0x) {
            this.bV1x = [];
            if (!this.bnc0x) this.bnc0x = [];
            k0x.be0x(j0x, bdD7w, this)
        }
    }();
    b0x.bmY0x = function (E0x, bSA9r) {
        !!bSA9r && !this.bDx5C ? a9j.y0x(E0x, this.ju3x) : a9j.w0x(E0x, this.ju3x)
    };
    b0x.MT3x = function (s0x, MW3x, i0x) {
        var E0x = this.bV1x[s0x];
        if (MW3x != !0 && (s0x == this.cn1x || !E0x || a9j.bB0x(E0x, this.mW4a))) {
            h0x.cd1x(arguments[1]);
            return this
        }
        var d0x = {index: s0x, last: this.cn1x, list: this.nv4z(), data: i0x || a9j.u0x(E0x, "value")};
        this.cn1x = s0x;
        E0x = this.bV1x[d0x.last];
        if (!!E0x) this.bmY0x(E0x, !1);
        E0x = this.bV1x[this.cn1x];
        this.bmY0x(E0x, !0);
        this.B0x("onchange", d0x);
        if (!d0x.nostop) h0x.cd1x(arguments[1]);
        return this
    };
    b0x.rJ6D = function () {
        return this.cn1x
    };
    b0x.nv4z = function () {
        return this.bV1x
    };
    a9j.bSu9l = cO1x.bSu9l = function (bC0x, e0x) {
        var C0x = a9j.kJ4N(bC0x);
        if (!C0x) return null;
        if (!N0x.TW5b(C0x, N0x.EF1x)) {
            e0x = e0x || {};
            e0x.list = !e0x.clazz ? a9j.cS1x(C0x) : a9j.I0x(C0x, e0x.clazz);
            delete e0x.clazz
        }
        return N0x.TW5b(C0x, N0x.EF1x, e0x || X0x)
    };
    cO1x.isChange = !0
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, k0x = c0x("nej.u"), v0x = c0x("nej.j"), l0x = c0x("nm.x");
    var SETTING_KEY = "player-setting";
    var lU4Y = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    lU4Y = v0x.sH6B(SETTING_KEY) || lU4Y;
    l0x.bnl0x = function () {
        return lU4Y
    };
    l0x.AI9z = function (AJ9A) {
        if (AJ9A) {
            lU4Y = AJ9A;
            v0x.vr8j(SETTING_KEY, AJ9A)
        }
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), H0x = c0x("nej.ut"),
        l0x = c0x("nm.x"), p0x = c0x("nm.d"), gS3x = c0x("nm.w.player.log");
    var kA4E = p0x.hK3x.A0x();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var mm4q = function (t0x, bF0x, pc5h) {
        var cK1x = l0x.eO2x("{0} {1} {2}", k0x.iR3x(new Date, "yyyy-MM-dd HH:mm:ss"), t0x, bF0x);
        if (pc5h == LogLevel.ERROR) {
            kA4E.gc2x("playerror", {message: bF0x})
        }
        if (pc5h >= LogLevel.INFO) {
            kA4E.ciZ3x(cK1x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cK1x)
        }
    };
    gS3x.bT1x = function () {
        mm4q("PLAY_ERROR", l0x.eO2x.apply(null, arguments), LogLevel.ERROR)
    };
    gS3x.oc5h = function () {
        mm4q("PLAY_INFO", l0x.eO2x.apply(null, arguments), LogLevel.INFO)
    };
    gS3x.cvK6E = function () {
        mm4q("PLAY_DEBUG", l0x.eO2x.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), H0x = c0x("nej.ut"), k0x = c0x("nej.u"), D0x = c0x("nm.w"),
        fZ2x = c0x("flash.cb");
    var dH1x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var AO9F, XC6w, sD6x;
    D0x.bSr9i = function (t0x, dv1x) {
        if (t0x != "flash") {
            if (!AO9F) {
                AO9F = a9j.cV1x("audio");
                k0x.be0x(dH1x, function (t0x) {
                    h0x.q0x(AO9F, t0x, onMediaCallBack)
                })
            }
            if (AO9F && AO9F.canPlayType && AO9F.canPlayType("audio/mpeg")) {
                dv1x(new MediaWrap("audio"));
                return
            }
        }
        if (!XC6w) {
            a9j.qr5w({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (gV3x) {
                    XC6w = gV3x;
                    k0x.be0x(dH1x, function (t0x) {
                        fZ2x[t0x] = onMediaCallBack;
                        XC6w.addCallback(t0x, "flash.cb." + t0x)
                    });
                    dv1x(new MediaWrap("flash"))
                }.g0x(this)
            })
        } else {
            dv1x(new MediaWrap("flash"))
        }
    };

    function MediaWrap(AP9G) {
        var lD4H;
        H0x.fr2x.A0x({element: this, event: dH1x.concat(["interrupt", "recover"])});
        lD4H = AP9G == "audio" ? AO9F : XC6w;
        this.type = AP9G;
        this.destroy = function () {
        };
        this.setSrc = function (V0x) {
            if (sD6x != this) {
                var gA2x = sD6x;
                if (gA2x) {
                    gA2x.interrupt()
                }
                sD6x = this
            }
            if (AP9G == "flash") {
                lD4H.setSrc(V0x)
            } else {
                lD4H.src = V0x
            }
        };
        this.play = function () {
            if (sD6x != this) {
                var gA2x = sD6x;
                if (gA2x) {
                    gA2x.interrupt();
                    sD6x = this;
                    this.recover()
                } else {
                    sD6x = this
                }
            }
            if (AP9G == "flash") {
                lD4H.as_play()
            } else {
                lD4H.play()
            }
        };
        this.pause = function () {
            if (sD6x != this) return;
            if (AP9G == "flash") {
                lD4H.as_pause()
            } else {
                lD4H.pause()
            }
        };
        this.load = function () {
            if (sD6x != this) return;
            if (AP9G == "flash") {
                lD4H.as_load()
            } else {
                lD4H.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return lD4H
        };
        var nY5d = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k0x.be0x(nY5d, function (T0x) {
            var Oc3x = "get" + T0x, Od3x = "set" + T0x;
            if (AP9G == "flash") {
                if (!this[Oc3x]) {
                    this[Oc3x] = function () {
                        return lD4H[Oc3x]()
                    }
                }
                if (!this[Od3x]) {
                    this[Od3x] = function (value) {
                        lD4H[Od3x](value)
                    }
                }
            } else {
                var bDp5u = T0x.slice(0, 1).toLowerCase() + T0x.slice(1);
                if (!this[Oc3x]) {
                    this[Oc3x] = function () {
                        return lD4H[bDp5u]
                    }
                }
                if (!this[Od3x]) {
                    this[Od3x] = function (value) {
                        lD4H[bDp5u] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d0x) {
        if (sD6x) {
            h0x.B0x(sD6x, d0x.type, d0x)
        }
    }
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), v0x = c0x("nej.j"), H0x = c0x("nej.ut"), cM1x = c0x("nej.p"),
        D0x = c0x("nm.w"), l0x = c0x("nm.x"), gS3x = c0x("nm.w.player.log"), b0x;
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
    var bDl5q = false;
    D0x.fk2x = NEJ.C();
    b0x = D0x.fk2x.O0x(H0x.cz1x);
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.cr1x = {};
        this.XB6v(e0x.media);
        v0x.bo0x("/api/cdns", {
            type: "json", onload: function (d0x) {
                if (d0x.code) {
                    this.py5D = d0x.data
                }
            }.g0x(this)
        })
    };
    b0x.bD0x = function () {
        this.bH0x();
        delete this.cr1x
    };
    b0x.Xx6r = function (bf0x) {
        if (!bf0x) return;
        var ze9V = this.cr1x.volume;
        if (this.dB1x) {
            this.dB1x.pause()
        }
        this.cr1x = {time: 0, id: bf0x.id, duration: bf0x.duration / 1e3, play: this.cr1x.play, stalledRetryCount: 0};
        if (ze9V != null) {
            this.cr1x.volume = ze9V
        }
        this.cr1x.loadState = LoadState.LOAD_START;
        this.bDk5p(bf0x.id);
        gS3x.oc5h("play song id: {0}", bf0x.id)
    };
    b0x.eA2x = function () {
        if (this.cr1x.error) {
            this.cr1x.error = null;
            if (this.cr1x.error == ErrorType.INFO_GET_ERR || this.bDj5o()) {
                this.bDi5n()
            } else {
                this.OC3x()
            }
        } else {
            if (this.dB1x) {
                this.dB1x.play()
            }
        }
        this.cr1x.play = true;
        this.oe5j("play")
    };
    b0x.ft2x = function () {
        if (this.dB1x) {
            this.dB1x.pause()
        }
        this.cr1x.play = false;
        this.oe5j("pause")
    };
    b0x.nW5b = function (by0x) {
        if (this.dB1x) {
            this.dB1x.setCurrentTime(by0x)
        }
        this.cr1x.time = by0x;
        gS3x.oc5h("seek to: {0}", by0x)
    };
    b0x.boB1x = function () {
        return this.cr1x.duration || 0
    };
    b0x.ui7b = function () {
        return !!this.cr1x.play
    };
    b0x.lg4k = function (OR3x) {
        this.cr1x.volume = OR3x;
        if (this.dB1x) {
            this.dB1x.setVolume(OR3x)
        }
    };
    b0x.boH1x = function () {
        return this.cr1x.time
    };
    b0x.XB6v = function (t0x) {
        D0x.bSr9i(t0x, function (lD4H) {
            this.dB1x = lD4H;
            gS3x.oc5h("media loaded: {0}", lD4H.type);
            this.bU1x([[this.dB1x, "loadedmetadata", this.bRV9M.g0x(this)], [this.dB1x, "ended", this.bRU9L.g0x(this)], [this.dB1x, "waiting", this.wA8s.g0x(this)], [this.dB1x, "play", this.tP6J.g0x(this)], [this.dB1x, "pause", this.boQ1x.g0x(this)], [this.dB1x, "playing", this.Pl3x.g0x(this)], [this.dB1x, "timeupdate", this.bRS9J.g0x(this)], [this.dB1x, "progress", this.rN6H.g0x(this)], [this.dB1x, "stalled", this.boU1x.g0x(this)], [this.dB1x, "interrupt", this.ft2x.g0x(this)], [this.dB1x, "recover", this.bRR9I.g0x(this)], [this.dB1x, "error", this.em2x.g0x(this)]]);
            if (this.cr1x) {
                if (this.cr1x.loadState == LoadState.LOAD_START || this.cr1x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bpf1x();
                    if (this.cr1x.volume != null) {
                        this.dB1x.setVolume(this.cr1x.volume)
                    }
                }
            }
        }.g0x(this))
    };
    b0x.bRO9F = function (t0x) {
        this.EM1x();
        this.dB1x.destroy();
        this.cr1x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.wA8s();
        this.XB6v(t0x);
        gS3x.oc5h("switch media")
    };
    b0x.cvM6G = function () {
        return this.dB1x
    };
    b0x.bDk5p = function () {
        this.wA8s();
        v0x.bo0x("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cr1x.id]), br: DEFAULT_BR},
            onload: this.bCZ5e.g0x(this),
            onerror: this.bCZ5e.g0x(this)
        })
    };
    b0x.bCZ5e = function (d0x) {
        if (d0x.code == 200 && d0x.data && d0x.data.length) {
            var bt0x = d0x.data[0];
            if (!bt0x.url) {
                this.cr1x.error = ErrorType.INFO_GET_ERR;
                this.oe5j("error", {code: this.cr1x.error});
                return
            }
            this.cr1x.playUrl = bt0x.url;
            this.cr1x.expireTime = (new Date).getTime() + bt0x.expi * 1e3;
            this.bpf1x()
        } else {
            this.cr1x.error = ErrorType.INFO_GET_ERR;
            this.oe5j("error", {code: this.cr1x.error});
            gS3x.bT1x("info load error")
        }
    };
    b0x.bpf1x = function () {
        if (this.dB1x) {
            var V0x = this.cr1x.playUrl;
            if (this.cr1x.time > 0 && (this.cr1x.loadState == LoadState.IN_RE_GET_URL || this.cr1x.loadState == LoadState.IN_RE_GET_URL)) {
                V0x += "#t=" + this.cr1x.time
            }
            this.dB1x.setSrc(V0x);
            gS3x.oc5h("load mp3: {0},loadState: {1}.", V0x, this.cr1x.loadState)
        }
    };
    b0x.bCW5b = function () {
        if (/#t=(\d+)$/.test(this.dB1x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b0x.OC3x = function () {
        var by0x = parseInt(this.cr1x.time) || 0, bRD9u = this.bCW5b();
        if (by0x === bRD9u) {
            this.dB1x.load()
        } else {
            this.dB1x.setSrc(this.cr1x.playUrl + "#t=" + by0x)
        }
        this.cr1x.loadState = LoadState.IN_RELOAD;
        this.wA8s();
        gS3x.oc5h("reload from: {0}", by0x)
    };
    b0x.bDi5n = function () {
        this.cr1x.loadState = LoadState.IN_RE_GET_URL;
        this.bDk5p()
    };
    b0x.bCV5a = function () {
        var ve8W = getHost(this.cr1x.playUrl);
        if (ve8W) {
            for (var i = 0; i < this.py5D.length; i++) {
                var jJ3x = this.py5D[i] || [], s0x = jJ3x.indexOf(ve8W);
                if (s0x >= 0 && jJ3x.length > 1) {
                    return jJ3x[(s0x + 1) % jJ3x.length]
                }
            }
        }

        function getHost(V0x) {
            if (CDN_HOST_REG.test(V0x)) return RegExp.$1
        }
    };
    b0x.bRA9r = function () {
        this.cr1x.playUrl = this.cr1x.playUrl.replace(CDN_HOST_REG, this.bCV5a());
        this.cr1x.loadState = LoadState.IN_SWITCH_CDN;
        this.bpf1x();
        this.wA8s()
    };
    b0x.bRV9M = function () {
        if (this.cr1x.loadState == LoadState.LOAD_START) {
            this.cr1x.loadState = LoadState.LOADED_META;
            if (this.dB1x.type == "audio") {
                this.cr1x.duration = this.dB1x.getDuration()
            }
            this.oe5j("loadedmeta", {duration: this.cr1x.duration})
        } else {
            this.cr1x.loadState = LoadState.LOADED_META
        }
        if (this.cr1x.play) {
            this.dB1x.play()
        } else {
            this.dB1x.pause()
        }
        if (this.cr1x.time && parseInt(this.cr1x.time) != this.bCW5b()) {
            this.dB1x.setCurrentTime(this.cr1x.time)
        }
        this.EJ1x();
        this.Pl3x();
        bDl5q = true;
        gS3x.oc5h("loaded meta")
    };
    b0x.bRU9L = function () {
        this.cr1x.ended = true;
        this.oe5j("ended")
    };
    b0x.wA8s = function () {
        if (!this.cr1x.waiting) {
            this.cr1x.waiting = true;
            this.cr1x.waitTimestamp = +(new Date);
            this.oe5j("waiting")
        }
    };
    b0x.Pl3x = function () {
        this.cr1x.waiting = false;
        this.cr1x.waitTimestamp = 0;
        this.oe5j("playing")
    };
    b0x.tP6J = function () {
        this.oe5j("play")
    };
    b0x.boQ1x = function () {
        this.oe5j("pause")
    };
    b0x.bRS9J = function () {
        if (this.cr1x.loadState != LoadState.LOADED_META) return;
        var by0x = this.dB1x.getCurrentTime();
        if (this.cr1x.waiting && by0x > this.cr1x.time) {
            this.Pl3x()
        }
        this.cr1x.time = by0x;
        this.oe5j("timeupdate", {time: this.cr1x.time, duration: this.cr1x.duration})
    };
    b0x.rN6H = function (d0x) {
        if (this.cr1x.loadState != LoadState.LOADED_META) return;
        var m0x = {};
        if (d0x.data) {
            m0x.total = d0x.data.total;
            m0x.loaded = d0x.data.loaded
        } else {
            var wu8m = this.dB1x.getBuffered(), by0x = this.dB1x.getCurrentTime(), nq4u = 0;
            for (var i = 0; i < wu8m.length; i++) {
                if (by0x > wu8m.start(i) && by0x < wu8m.end(i)) {
                    nq4u = wu8m.end(i);
                    break
                }
            }
            m0x.total = this.cr1x.duration;
            m0x.loaded = Math.min(nq4u, m0x.total)
        }
        this.oe5j("progress", m0x)
    };
    b0x.EJ1x = function () {
        if (this.cr1x.retry) {
            clearTimeout(this.cr1x.retry.tid);
            this.cr1x.retry = null
        }
    };
    b0x.em2x = function () {
        var bP1x = this.dB1x.getError();
        gS3x.bT1x("media error code: {0}, netState: {1}", bP1x.code, this.dB1x.getNetworkState());
        if (bP1x.code == MediaError.MEDIA_ERR_NETWORK || bP1x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var AJ9A = l0x.bnl0x();
            if (!this.cr1x.retry) {
                this.cr1x.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cr1x.retry.tid)
            }
            if (this.cr1x.retry.level == RetryLevel.NONE) {
                if (this.bDj5o()) {
                    this.cr1x.retry.level = RetryLevel.GET_URL;
                    this.bDi5n();
                    gS3x.oc5h("Url expired, get url.")
                } else {
                    this.cr1x.retry.level = RetryLevel.RELOAD;
                    this.cr1x.retry.tid = setTimeout(this.OC3x.g0x(this), 3e3);
                    gS3x.oc5h("Reload mp3 3s later.")
                }
            } else if (this.cr1x.retry.level == RetryLevel.GET_URL) {
                this.cr1x.retry.level = RetryLevel.RELOAD;
                this.cr1x.retry.tid = setTimeout(this.OC3x.g0x(this), 3e3);
                gS3x.oc5h("Reload mp3 3s later.")
            } else if (this.cr1x.retry.level == RetryLevel.RELOAD) {
                this.cr1x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCV5a()) {
                    this.cr1x.retry.tid = setTimeout(this.bRA9r.g0x(this), 5e3);
                    gS3x.oc5h("Switch CDN 5s later.")
                } else {
                    this.cr1x.retry.tid = setTimeout(this.OC3x.g0x(this), 5e3);
                    gS3x.oc5h("Reload mp3 5s later.")
                }
            } else if (!bDl5q && this.dB1x.type == "audio" && !AJ9A.useFlash && !cM1x.ZF6z.mac && l0x.bbE7x().supported) {
                AJ9A.useFlash = true;
                l0x.AI9z(AJ9A);
                this.bRO9F("flash")
            } else {
                this.EJ1x();
                this.ft2x();
                this.cr1x.error = ErrorType.NET_ERR;
                this.oe5j("error", {code: this.cr1x.error});
                gS3x.bT1x("error can not retry.")
            }
        } else {
            this.EJ1x();
            this.ft2x();
            this.cr1x.error = ErrorType.UNKNOWN_ERR;
            this.oe5j("error", {code: this.cr1x.error});
            gS3x.bT1x("error can not retry.")
        }
    };
    b0x.boU1x = function () {
        var ha3x = 0, bCU5Z = 5e3;
        return function () {
            this.wA8s();
            clearTimeout(ha3x);
            setTimeout(function () {
                var fI2x = +(new Date);
                if (this.cr1x.waiting && fI2x - this.cr1x.waitTimestamp >= bCU5Z && this.cr1x.stalledRetryCount < MAX_STALLED_RETRY) {
                    gS3x.oc5h("stalled too long retry.");
                    this.cr1x.stalledRetryCount++;
                    this.OC3x()
                }
            }.g0x(this), bCU5Z);
            gS3x.oc5h("stalled")
        }
    }();
    b0x.bDj5o = function () {
        var fI2x = +(new Date);
        return fI2x > this.cr1x.expireTime
    };
    b0x.bRR9I = function () {
        var by0x = parseInt(this.cr1x.time) || 0;
        this.dB1x.setSrc(this.cr1x.playUrl + "#t=" + by0x);
        this.cr1x.loadState = LoadState.IN_RELOAD;
        this.wA8s();
        gS3x.oc5h("recover from: {0}", by0x)
    };
    b0x.oe5j = function (W0x, i0x) {
        h0x.B0x(D0x.fk2x, "playaction", {action: W0x, data: i0x || {}})
    };
    H0x.fr2x.A0x({element: D0x.fk2x, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c0x = NEJ.P, h0x = c0x("nej.v"), H0x = c0x("nej.ut"), D0x = c0x("nm.w"), b0x;
    D0x.Bg0x = NEJ.C();
    b0x = D0x.Bg0x.O0x(D0x.fk2x);
    K0x = D0x.Bg0x.cg1x;
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bRy9p = function (bJ1x) {
        this.Xx6r(bJ1x);
        this.eA2x()
    };
    b0x.bpA1x = function () {
        this.ft2x()
    };
    b0x.tW6Q = function (d0x) {
        if (d0x.action == "play") {
            this.ft2x()
        }
    };
    b0x.oe5j = function (W0x, i0x) {
        h0x.B0x(D0x.Bg0x, "tmpplayaction", {action: W0x, data: i0x || {}, tmp: true})
    };
    b0x.rV6P = function () {
        return this.cr1x
    };
    H0x.fr2x.A0x({element: D0x.Bg0x, event: ["tmpplayaction"]})
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), ff2x = c0x("nej.n"),
        v0x = c0x("nej.j"), H0x = c0x("nej.ut"), bd0x = c0x("nej.ui"), D0x = c0x("nm.w"), n0x = c0x("nm.l"),
        jH3x = c0x("nm.c"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K0x,
        Xl6f = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var bpG1x = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    D0x.bpI1x = NEJ.C();
    b0x = D0x.bpI1x.O0x(bd0x.es2x);
    b0x.cl1x = function (e0x) {
        this.cs1x(e0x);
        var j0x = a9j.I0x(this.o0x, "j-flag");
        this.cvN6H = j0x.shift();
        this.bRw9n = j0x.shift();
        this.GT1x = j0x.shift();
        this.bpO1x = j0x.shift();
        this.bpQ1x = [j0x.shift(), j0x.shift(), j0x.shift(), j0x.shift(), j0x.shift(), j0x.shift()];
        this.Xk6e = j0x.shift();
        this.bCS5X = j0x.shift();
        this.qp5u = {list: this.bpQ1x, selected: "z-curr", onchange: this.bCR5W.g0x(this)};
        h0x.q0x(this.GT1x, "input", this.Xj6d.g0x(this));
        h0x.q0x(this.GT1x, "propertychange", this.Xj6d.g0x(this));
        h0x.q0x(this.GT1x, "keyup", this.Xj6d.g0x(this));
        h0x.q0x(this.bRw9n, "click", this.Xj6d.g0x(this));
        h0x.q0x(this.Xk6e, "click", this.cw1x.g0x(this));
        h0x.q0x(this.bCS5X, "click", function () {
            this.B0x("oncancel", {})
        }.g0x(this));
        this.P0x = p0x.Bd0x.fV2x();
        this.Qu4y = top.nm.w.Bg0x.fV2x();
        H0x.fr2x.A0x({element: top.nm.w.Bg0x, event: ["tmpplayaction"]});
        this.qy5D = {limit: 100, offset: 0, parent: this.Xk6e, onbeforelistload: this.oR5W.g0x(this)};
        p0x.sk = "fuck" + a9j.u0x(this.bpO1x, "xname") + "458";
        h0x.q0x(top.nm.w.Bg0x, "tmpplayaction", this.tW6Q.g0x(this))
    };
    b0x.bY1x = function () {
        this.ca1x = "m-xwgt-publish-search"
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        if (!!this.zl9c) {
            this.zl9c.S0x();
            delete this.zl9c
        }
        this.qp5u.index = bpG1x[e0x.type || "song"];
        this.zl9c = H0x.EF1x.A0x(this.qp5u);
        this.GT1x.value = "";
        this.GT1x.focus();
        this.tE6y = "";
        this.cyl7e = 0;
        if (e0x.showMV == true) {
            this.bpQ1x[bpG1x["mv"]].parentNode.style.display = "";
            a9j.y0x(this.bpO1x, "srchtab-1")
        } else {
            this.bpQ1x[bpG1x["mv"]].parentNode.style.display = "none";
            a9j.w0x(this.bpO1x, "srchtab-1")
        }
        if (!!this.du1x) {
            this.du1x = this.du1x.S0x()
        }
        if (e0x.hideBack) {
            a9j.y0x(this.bCS5X.parentNode, "f-hide")
        }
    };
    b0x.bD0x = function () {
        this.Qu4y.bpA1x();
        this.bH0x()
    };
    b0x.Xj6d = function () {
        var value = this.GT1x.value.trim();
        if (value && value.length) {
            if (value != this.tE6y) {
                this.tE6y = value;
                this.bCR5W({index: this.zl9c.rJ6D()})
            }
        } else {
            if (this.du1x) {
                this.du1x = this.du1x.S0x()
            }
        }
        this.tE6y = value
    };
    b0x.cw1x = function () {
        var bRr9i = function (E0x) {
            return a9j.bB0x(E0x, "sitm") || a9j.bB0x(E0x, "itm") || a9j.bB0x(E0x, "mv-item")
        }, bRp9g = function (E0x) {
            return a9j.bB0x(E0x, "ply")
        }, bCM5R = function () {
            n0x.Z0x.M0x({type: 2, tip: "å åä½æ¹è¦æ±ï¼è¯¥èµæºéä»è´¹ä½¿ç¨"})
        }, bRl9c = function () {
            n0x.Z0x.M0x({type: 2, tip: "å åä½æ¹è¦æ±ï¼è¯¥èµæºéä¸è½½åæ­æ¾"})
        }, bqJ2x = function (bf0x) {
            if (bf0x && bf0x.privilege && bf0x.privilege.toast) {
                v0x.bo0x("/api/song/toast", {
                    query: {id: bf0x.id},
                    type: "json",
                    onload: QW4a.g0x(this),
                    onerror: QW4a.g0x(this)
                })
            } else {
                Rb4f()
            }
        }, QW4a = function (Q0x) {
            Rb4f((Q0x || X0x).toast)
        }, Rb4f = function (bF0x) {
            n0x.Z0x.M0x({type: 2, tip: bF0x || "å åä½æ¹è¦æ±ï¼è¯¥èµæºææ¶ä¸æ¶>_<"})
        };
        return function (d0x) {
            var Bp0x = h0x.U0x(d0x, bRp9g), j0x = h0x.U0x(d0x, bRr9i), dY2x = this.Qu4y.rV6P();
            if (!!j0x) {
                h0x.bh0x(d0x);
                this.Re4i = a9j.u0x(j0x, "id");
                this.Rh4l = a9j.u0x(j0x, "type");
                if (this.Rh4l == 18) {
                    var bJ1x = this.P0x.ek2x(this.Re4i), pc5h = l0x.ot5y(bJ1x);
                    if (!Bp0x) {
                        if (pc5h == 10) {
                            bCM5R();
                            return
                        } else if (pc5h == 100) {
                            bqJ2x(bJ1x);
                            return
                        }
                    } else {
                        if (pc5h == 10) {
                            bCM5R();
                            return
                        } else if (pc5h == 100) {
                            bqJ2x(bJ1x);
                            return
                        } else if (pc5h == 11) {
                            bRl9c();
                            return
                        } else {
                            a9j.w0x(this.zn9e, "z-pause z-loading");
                            if (Bp0x == this.zn9e && dY2x.play && !dY2x.ended) {
                                this.Qu4y.bpA1x()
                            } else {
                                this.zn9e = Bp0x;
                                this.Qu4y.bRy9p(bJ1x)
                            }
                            return
                        }
                    }
                } else if (this.Rh4l == 70) {
                    if (a9j.bB0x(j0x, "z-noprogram")) {
                        n0x.Z0x.M0x({type: 2, tip: "ä¸è½åäº«æ²¡æèç®ççµå°"});
                        return
                    }
                }
                this.bRk9b()
            }
        }
    }();
    b0x.bRk9b = function () {
        var ho3x = this.P0x.ek2x(this.Re4i), rF6z = l0x.bHJ6D(this.Rh4l, ho3x);
        rF6z.title = rF6z.title || "";
        rF6z.author = rF6z.author || "";
        rF6z.picUrl = rF6z.picUrl || "";
        rF6z.authors = rF6z.authors || "";
        if (this.Rh4l == 70) {
            this.Re4i = this.Re4i.slice(0, -4)
        }
        this.B0x("onfinish", {id: this.Re4i, type: this.Rh4l, data: rF6z})
    };
    b0x.tW6Q = function (d0x) {
        var i0x = d0x.data;
        if (!this.zn9e) {
            return
        }
        switch (d0x.action) {
            case"play":
                a9j.eu2x(this.zn9e, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a9j.w0x(this.zn9e, "z-pause z-loading");
                break;
            case"error":
                n0x.Z0x.M0x({type: 2, tip: "è¯å¬éå°é®é¢ï¼æ­æ¾å¤±è´¥"});
                a9j.w0x(this.zn9e, "z-pause z-loading");
                break;
            case"playing":
                a9j.eu2x(this.zn9e, "z-loading", "z-pause");
                break;
            case"waiting":
                a9j.eu2x(this.zn9e, "z-pause", "z-loading");
                break
        }
    };
    b0x.bRj9a = function (d0x) {
        if (d0x.result.code == 407) {
            this.Xk6e.innerHTML = '<div class="n-norlt s-fc1">æ ¹æ®ç¸å³æ³å¾æ³è§åæ¿ç­ï¼æç´¢ç»ææªäºæ¾ç¤º</div>';
            return
        }
        this.Xk6e.innerHTML = '<div class="n-norlt s-fc1">é¡µé¢åºéï¼è¯·ç¨ååè¯ï¼</div>'
    };
    b0x.bCR5W = function (d0x) {
        if (!this.tE6y || d0x.index < 0 || d0x.index > 5) {
            return
        }
        this.Qu4y.bpA1x();
        var bc0x = Xl6f[d0x.index], e0x = NEJ.X({}, this.qy5D);
        e0x.cache = {klass: p0x.Bd0x, clear: true, onerror: this.bRj9a.g0x(this)};
        e0x.cache.lkey = "search-publish-" + bc0x.type + "-" + this.tE6y;
        e0x.item = {klass: bc0x.item, getRestrictLevel: l0x.ot5y, dur2time: l0x.lM4Q};
        if (!e0x.cache.data) {
            e0x.cache.data = {}
        }
        e0x.cache.data.s = this.tE6y;
        e0x.cache.data.type = bc0x.type;
        e0x.cache.data.isPub = true;
        if (bc0x.type == 1) {
            e0x.cache.data.hlpretag = '<span class="s-fc7">';
            e0x.cache.data.hlposttag = "</span>"
        }
        e0x.onemptylist = this.bRi9Z.g0x(this, this.tE6y);
        if (!!this.Bt0x) this.P0x.tc6W(this.Bt0x);
        if (!!this.du1x) {
            this.du1x = this.du1x.S0x()
        }
        this.du1x = H0x.mQ4U.A0x(e0x);
        this.Bt0x = e0x.cache.lkey
    };
    b0x.oR5W = function (d0x) {
        d0x.value = a9j.hY3x("m-publish-search-loading")
    };
    b0x.bRi9Z = function (J0x, d0x) {
        a9j.dQ1x(d0x.parent, "m-publish-emtpy-message", {key: J0x});
        d0x.stopped = true
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), cM1x = c0x("nej.p"), v0x = c0x("nej.j"),
        ck1x = c0x("nej.ut"), bK1x = c0x("nej.ui"), D0x = c0x("nm.w"), b0x, K0x;
    var bRe9V = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D0x.Bv0x = NEJ.C();
    b0x = D0x.Bv0x.O0x(bK1x.es2x);
    var gj2x = a9j.el2x("m-wgt-receiverInput");
    var bRc9T = a9j.el2x("m-wgt-receiverList");
    var hR3x = a9j.rH6B(bRe9V);
    var bRb9S = a9j.el2x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="å é¤">&times;</a></div>');
    b0x.cl1x = function (e0x) {
        this.ba0x = [];
        this.um7f = e0x.receiver || null;
        this.bQX9O = e0x.unique || false;
        this.lX4b = e0x.err;
        this.bCE5J(this.bCD5I, e0x.uid);
        this.cs1x(e0x)
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.JG2x();
        this.JH2x();
        this.Xh6b();
        if (e0x.receiver) this.bav7o(e0x.receiver.nickname, e0x.receiver.userId);
        a9j.Y0x(this.zw9n, "display", "block");
        a9j.Y0x(this.baw7p, "cursor", "text");
        a9j.Y0x(this.zw9n, "cursor", "text")
    };
    b0x.bY1x = function () {
        var i0x = this.bCB5G();
        this.ca1x = a9j.ib3x(a9j.bQ1x(gj2x, {receiver: this.um7f, users: i0x}));
        this.kW4a = hR3x
    };
    b0x.bS1x = function () {
        this.cb1x();
        var bx0x = a9j.I0x(this.o0x, "j-flag");
        var gx2x = a9j.I0x(this.o0x, "j-item");
        this.baw7p = bx0x[0];
        this.bCz5E = bx0x[1];
        this.dG1x = bx0x[2];
        this.zw9n = bx0x[3];
        this.Xe6Y = bx0x[4];
        this.baC7v = bx0x[5];
        this.fc2x = gx2x;
        a9j.y0x(this.fc2x[0], "j-selected");
        h0x.q0x(this.dG1x, "keyup", this.baD7w.g0x(this));
        h0x.q0x(this.dG1x, "keydown", this.JQ2x.g0x(this));
        h0x.q0x(this.dG1x, "focus", this.kc3x.g0x(this));
        h0x.q0x(this.Xe6Y, "click", this.bQO9F.g0x(this));
        h0x.q0x(this.baw7p, "click", this.bQM9D.g0x(this));
        h0x.q0x(document.body, "click", this.nD4H.g0x(this));
        h0x.q0x(this.dG1x, "input", this.fi2x.g0x(this));
        h0x.q0x(this.dG1x, "blur", this.ox5C.g0x(this))
    };
    b0x.bD0x = function (e0x) {
        h0x.mo4s(document.body, "click", this.nD4H.g0x(this));
        this.bH0x();
        this.Xh6b();
        this.bQL9C();
        this.nD4H()
    };
    b0x.baD7w = function (d0x) {
        h0x.bh0x(d0x);
        var jb3x = d0x.keyCode || d0x.which;
        var bi0x = this.dG1x.value;
        var bp0x = this.fc2x.length;
        var qb5g = a9j.I0x(this.o0x, "j-selected")[0];
        switch (jb3x) {
            case 13:
                var jR3x = a9j.fX2x(qb5g, "data-username");
                var hs3x = a9j.fX2x(qb5g, "data-userId");
                this.bav7o(jR3x, hs3x);
                this.nD4H();
                this.dG1x.value = "";
                break;
            case 38:
                var s0x = a9j.fX2x(qb5g, "data-index") - 1 < 0 ? bp0x - 1 : a9j.fX2x(qb5g, "data-index") - 1;
                a9j.w0x(qb5g, "j-selected");
                a9j.y0x(this.fc2x[s0x], "j-selected");
                break;
            case 40:
                var s0x = parseInt(a9j.fX2x(qb5g, "data-index")) + 1 >= bp0x ? 0 : parseInt(a9j.fX2x(qb5g, "data-index")) + 1;
                a9j.w0x(qb5g, "j-selected");
                a9j.y0x(this.fc2x[s0x], "j-selected");
                break;
            default:
                this.us7l()
        }
    };
    b0x.JQ2x = function (d0x) {
        var jb3x = d0x.keyCode || d0x.which;
        var bi0x = this.dG1x.value;
        var s0x = a9j.I0x(this.o0x, "j-receiver").length - 1;
        if (jb3x === 8 && bi0x === "") this.bQK9B(s0x)
    };
    b0x.fi2x = function (d0x) {
        var bi0x = this.dG1x.value;
        if (bi0x.length > 10) {
            this.dG1x.value = bi0x.substring(0, 10);
            return
        }
        cM1x.cT1x.browser == "ie" && cM1x.cT1x.version < "7.0" ? setTimeout(this.baT7M.g0x(this), 0) : this.baT7M();
        this.JH2x()
    };
    b0x.kc3x = function () {
        if (this.ba0x[0]) this.us7l(); else this.bCE5J(this.bQG9x);
        a9j.Y0x(this.zw9n, "display", "none")
    };
    b0x.ox5C = function () {
        var bp0x = a9j.I0x(this.o0x, "j-receiver").length;
        if (this.dG1x.value.trim() == "" && bp0x <= 0) a9j.Y0x(this.zw9n, "display", "block")
    };
    b0x.bav7o = function (jR3x, hs3x) {
        var GF1x = this.Ko2x();
        if (GF1x.length >= 10) {
            this.dy1x();
            return
        }
        var bd0x;
        for (bd0x = 0; bd0x < GF1x.length; bd0x++) {
            if (GF1x[bd0x] == hs3x) {
                this.nD4H();
                return
            }
        }
        if (!jR3x || !hs3x) return;
        var f0x = a9j.dt1x(a9j.ib3x(a9j.bQ1x(bRb9S, {username: jR3x, userId: hs3x})));
        var bC0x = this.bCz5E.parentNode;
        if (this.bQX9O) {
            this.Xh6b()
        }
        bC0x.insertBefore(f0x, this.bCz5E);
        this.dG1x.value = "";
        var bp0x = a9j.I0x(this.o0x, "j-receiver").length;
        if (bp0x > 1) a9j.Y0x(this.zw9n, "display", "none");
        this.baT7M();
        this.JH2x()
    };
    b0x.Xh6b = function () {
        var Kp2x = a9j.I0x(this.o0x, "j-receiver");
        var bd0x;
        if (Kp2x.length > 0) {
            for (bd0x = 0; bd0x < Kp2x.length; bd0x++) {
                a9j.cF1x(Kp2x[bd0x], false)
            }
        }
    };
    b0x.bQL9C = function () {
        this.dG1x.value = ""
    };
    b0x.bQK9B = function (s0x) {
        this.dy1x(!0);
        var Kp2x = a9j.I0x(this.o0x, "j-receiver");
        a9j.cF1x(Kp2x[s0x], false);
        this.JH2x()
    };
    b0x.us7l = function () {
        var bi0x = this.dG1x.value;
        var bw0x = bi0x.trim().toLowerCase();
        var i0x;
        bw0x = bw0x.replace(/\[/g, "\\[");
        bw0x = bw0x.replace(/\]/g, "\\]");
        i0x = this.bCB5G(bw0x);
        this.bQF9w(i0x)
    };
    b0x.nD4H = function (d0x) {
        a9j.Y0x(this.Xe6Y, "display", "none")
    };
    b0x.dy1x = function (gw2x) {
        if (gw2x && this.lX4b) {
            a9j.Y0x(this.lX4b, "display", "none");
            return
        }
        if (this.lX4b) a9j.Y0x(this.lX4b, "display", "block")
    };
    b0x.bQO9F = function (d0x) {
        h0x.cd1x(d0x);
        var dd1x = d0x.target || d0x.srcElement;
        if (a9j.bB0x(dd1x, "j-flag")) return;
        var bC0x = dd1x.nodeName.toLowerCase() == "a" ? dd1x.parentNode : dd1x.parentNode.parentNode;
        var jR3x = a9j.fX2x(bC0x, "data-username");
        var hs3x = a9j.fX2x(bC0x, "data-userId");
        this.bav7o(jR3x, hs3x);
        this.nD4H();
        a9j.Y0x(this.zw9n, "display", "none")
    };
    b0x.bQM9D = function (d0x) {
        h0x.bh0x(d0x);
        var dd1x = d0x.target || d0x.srcElement;
        if (a9j.bB0x(dd1x.parentNode, "j-receiver")) {
            a9j.cF1x(dd1x.parentNode, false);
            this.dy1x(!0);
            this.JH2x()
        } else this.dG1x.focus()
    };
    b0x.baT7M = function () {
        this.baC7v.innerHTML = this.dG1x.value;
        var dq1x = this.baC7v.offsetWidth + 2;
        a9j.Y0x(this.dG1x, "width", dq1x + "px")
    };
    b0x.JH2x = function () {
        var WY6S = a9j.hM3x(this.dG1x, this.o0x).y;
        var bCu5z = Math.floor((WY6S - 8) / 27);
        if (bCu5z < 0) return;
        a9j.Y0x(this.baw7p, "height", 19 + bCu5z * 29 + "px")
    };
    b0x.JG2x = function () {
        var pt5y = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pt5y.length; i++) {
            a9j.Y0x(this.baC7v, pt5y[i], a9j.dc1x(this.dG1x, pt5y[i]))
        }
    };
    b0x.bCE5J = function (dv1x, C0x) {
        var cU1x = C0x ? C0x : window.GUser.userId;
        var V0x = "/api/user/getfollows/" + cU1x;
        var fD2x = v0x.bo0x(V0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dv1x.g0x(this),
            onerror: function (i0x) {
                this.ba0x = []
            },
            onbeforerequest: function (i0x) {
            }
        })
    };
    b0x.bCD5I = function (i0x) {
        this.ba0x = JSON.parse(i0x).follow || [];
        var C0x = GUser.userId;
        for (var i = 0; i < this.ba0x.length; i++) {
            if (this.ba0x[i].userId == C0x) {
                this.ba0x.splice(i, 1);
                continue
            }
            this.ba0x[i].avatarUrl = this.ba0x[i].avatarUrl + "?param=30y30"
        }
    };
    b0x.bQG9x = function (i0x) {
        if (this.ba0x[0]) return;
        this.bCD5I(i0x);
        this.us7l()
    };
    b0x.bCB5G = function (bw0x) {
        var bw0x = bw0x ? bw0x : "";
        this.ba0x = this.ba0x[0] ? this.ba0x : [];
        var bp0x = this.ba0x.length;
        var KB2x = this.Ko2x();
        var sb6V = [];
        var KD2x, KH2x, bbm7f;
        if (!this.ba0x[0]) return sb6V;
        for (var bd0x = 0; bd0x < bp0x; bd0x++) {
            bbm7f = false;
            for (var v0x = 0; v0x < KB2x.length; v0x++) {
                if (this.ba0x[bd0x].userId == KB2x[v0x]) {
                    bbm7f = true;
                    break
                }
            }
            if (bbm7f) continue;
            KD2x = this.ba0x[bd0x].nickname.toLowerCase().search(bw0x);
            KH2x = this.ba0x[bd0x].py ? this.ba0x[bd0x].py.toLowerCase().search(bw0x) : -1;
            if (KD2x !== -1 || KH2x != -1) sb6V.push(this.ba0x[bd0x])
        }
        return sb6V
    };
    b0x.bQF9w = function (i0x) {
        a9j.dQ1x(this.Xe6Y, bRc9T, {users: i0x});
        a9j.y0x(a9j.I0x(this.o0x, "j-item")[0], "j-selected");
        this.fc2x = a9j.I0x(this.o0x, "j-item");
        a9j.Y0x(this.Xe6Y, "display", "block")
    };
    b0x.Ko2x = function () {
        var sb6V = a9j.I0x(this.o0x, "j-receiver") || [];
        var hs3x = [];
        for (var i = 0; i < sb6V.length; i++) {
            hs3x.push(a9j.fX2x(sb6V[i], "data-id"))
        }
        return hs3x
    };
    b0x.cvQ6K = function () {
        var hs3x = this.Ko2x();
        var sb6V = [];
        for (var i = 0; i < hs3x.length; i++) {
            for (var j = 0; j < this.ba0x.length; j++) {
                if (hs3x[i] == this.ba0x[j].userId) sb6V.push(this.ba0x[j])
            }
        }
        return sb6V
    };
    b0x.bQA8s = function () {
        this.Xh6b()
    };
    D0x.Bv0x.M0x = function (e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n0x.np4t.M0x({title: "ç»å½"});
            return
        }
        e0x = e0x || {};
        if (e0x.parent === undefined) e0x.parent = document.body;
        !!this.eH2x && this.eH2x.S0x();
        this.eH2x = this.A0x(e0x)
    };
    D0x.Bv0x.bq0x = function () {
        !!this.eH2x && this.eH2x.S0x()
    };
    D0x.Bv0x.BQ0x = function () {
        return this.nD4H()
    };
    D0x.Bv0x.cvR6L = function () {
        return this.us7l()
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), k0x = c0x("nej.u"), h0x = c0x("nej.v"), l0x = c0x("nm.x"), n0x = c0x("nm.l"),
        b0x, K0x;
    n0x.GA1x = NEJ.C();
    b0x = n0x.GA1x.O0x(n0x.blL0x);
    K0x = n0x.GA1x.cg1x;
    b0x.bk0x = function () {
        var BT0x;
        var bQw8o = function (z0x, J0x) {
            BT0x = BT0x || [];
            if (J0x != "18") BT0x.push({key: J0x, value: z0x})
        };
        return function (e0x) {
            this.bl0x(e0x);
            if (e0x.upwards) {
                a9j.y0x(this.o0x, "m-emts-up")
            } else {
                a9j.w0x(this.o0x, "m-emts-up")
            }
            if (e0x.rightwards) {
                a9j.y0x(this.o0x, "m-emts-right")
            } else {
                a9j.w0x(this.o0x, "m-emts-right")
            }
            if (!BT0x) {
                var bv0x = l0x.ceo2x();
                k0x.dZ2x(bv0x, bQw8o)
            }
            var bp0x = BT0x.length;
            BT0x.splice(bp0x - 2, 0, {key: "18", value: "186"});
            this.WV6P = BT0x;
            this.bQv8n = !!e0x.autoHide
        }
    }();
    b0x.bY1x = function () {
        this.ca1x = "ntp-portrait"
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.I0x(this.o0x, "j-flag");
        this.bG0x = j0x[0];
        this.bQu8m = j0x[1];
        this.bQs8k = j0x[2];
        this.bQr8j = j0x[3];
        h0x.q0x(this.bG0x, "click", this.xj8b.g0x(this));
        h0x.q0x(this.bQu8m, "click", this.BW0x.g0x(this, 1));
        h0x.q0x(this.bQr8j, "click", this.BW0x.g0x(this, 2))
    };
    b0x.bbH7A = function (s0x) {
        this.WR6L = s0x;
        var bj0x = (s0x - 1) * 50;
        var j0x = this.WV6P.slice(bj0x, Math.min(bj0x + 50, this.WV6P.length));
        this.bG0x.innerHTML = a9j.bQ1x("jst-portrait", {plist: j0x}, {purl: l0x.bIk6e});
        this.bQs8k.innerText = s0x + "/" + Math.ceil(this.WV6P.length / 50)
    };
    b0x.BW0x = function (s0x) {
        var bQq8i = Math.ceil(this.WV6P.length / 50);
        if (s0x == 1 && this.WR6L == 1 || s0x == 2 && this.WR6L == bQq8i) return;
        s0x == 1 ? this.bbH7A(this.WR6L - 1) : this.bbH7A(this.WR6L + 1)
    };
    b0x.xj8b = function (d0x) {
        var E0x = h0x.U0x(d0x, "d:text");
        if (!E0x) return;
        var d0x = {url: a9j.u0x(E0x, "url"), text: a9j.u0x(E0x, "text")};
        this.B0x("onselect", d0x);
        if (this.bQv8n && !d0x.stopped) {
            this.bq0x()
        }
    };
    b0x.M0x = function () {
        K0x.M0x.call(this);
        this.bbH7A(1)
    }
})();
(function () {
    var c0x = NEJ.P, h0x = c0x("nej.v"), k0x = c0x("nej.u"), cM1x = c0x("nej.p"), bb0x = c0x("nej.h"),
        H0x = c0x("nej.ut"), jm3x = /^[#?]+/, DP0x = /#(.*?)$/, xi8a = window,
        bbO7H = !history.pushState || cM1x.ZF6z.android || !history.auto;
    var WO6I = function (V0x, bbQ7J) {
        xi8a.history[!bbQ7J ? "pushState" : "replaceState"](null, document.title, V0x)
    };
    var WN6H = function () {
        return location.parse(xi8a.location.href)
    };
    WO6I = WO6I.eb2x(function (d0x) {
        if (!bbO7H) return;
        var bg0x = d0x.args;
        d0x.stopped = !0;
        V0x = bg0x[0].replace(jm3x, "");
        !bg0x[1] ? xi8a.location.hash = V0x : xi8a.location.replace("#" + V0x)
    });
    WN6H = WN6H.eb2x(function (d0x) {
        if (!bbO7H) return;
        d0x.stopped = !0;
        var dI1x = DP0x.test(xi8a.location.href) ? RegExp.$1 : "";
        d0x.value = location.parse(dI1x.replace(jm3x, ""))
    });
    location.redirect = function (V0x, bbQ7J) {
        WO6I(V0x, bbQ7J);
        return this
    };
    location.active = function () {
        var eX2x, V0x, iK3x, cD1x, PL4P;
        var bbS7L = function (hl3x) {
            if (!!cD1x) {
                cD1x = !1;
                return
            }
            var d0x = {oldValue: iK3x, newValue: WN6H()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h0x.B0x(location, "beforeurlchange", d0x);
                if (d0x.stopped) {
                    if (!!iK3x) {
                        cD1x = !0;
                        WO6I(iK3x.href, !0)
                    }
                    return
                }
            }
            V0x = xi8a.location.href;
            iK3x = d0x.newValue;
            h0x.B0x(location, "urlchange", iK3x);
            bb0x.blD0x(iK3x.href)
        };
        var bCq5v = function () {
            if (V0x != xi8a.location.href) bbS7L();
            eX2x = requestAnimationFrame(bCq5v)
        };
        return function (bL1x) {
            if (!!PL4P) return this;
            PL4P = !0;
            xi8a = bL1x || window;
            if (bbO7H && "onhashchange" in window && cM1x.mj4n.trident2) {
                h0x.q0x(xi8a, "hashchange", bbS7L);
                bbS7L()
            } else if (!eX2x) {
                eX2x = requestAnimationFrame(bCq5v)
            }
            return this
        }
    }();
    location.parse = function () {
        var fU2x = /^https?:\/\/.*?\//i, jm3x = /[?#]/;
        return function (V0x) {
            var m0x = {href: V0x};
            V0x = (V0x || "").replace(fU2x, "/").split(jm3x);
            var ct1x = 1;
            if (V0x[0] == "/" && (V0x[1] || "").indexOf("/") == 0) ct1x = 2;
            m0x.path = V0x.splice(0, ct1x).join("?");
            m0x.query = k0x.hk3x(V0x.join("&"));
            return m0x
        }
    }();
    location.same = function (V0x) {
        return WN6H().href == V0x
    };
    H0x.fr2x.A0x({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), fK2x = c0x("nm.ut");
    fK2x.tL6F = function (ew2x) {
        var gk2x = {text: "", start: 0, end: 0};
        if (ew2x.setSelectionRange) {
            gk2x.start = ew2x.selectionStart;
            gk2x.end = ew2x.selectionEnd;
            gk2x.text = gk2x.start != gk2x.end ? ew2x.value.substring(gk2x.start, gk2x.end) : ""
        } else if (document.selection) {
            var i, WL6F = document.selection.createRange(), xb8T = document.body.createTextRange();
            xb8T.moveToElementText(ew2x);
            gk2x.text = WL6F.text;
            gk2x.bookmark = WL6F.getBookmark();
            for (i = 0; xb8T.compareEndPoints("StartToStart", WL6F) < 0 && WL6F.moveStart("character", -1) !== 0; i++) {
                if (ew2x.value.charAt(i) == "\n") {
                    i++
                }
            }
            gk2x.start = i;
            gk2x.end = gk2x.text.length + gk2x.start
        }
        return gk2x
    };
    fK2x.WK6E = function (ew2x, gk2x) {
        var xb8T;
        if (!gk2x) {
            gk2x = {text: "", start: 0, end: 0}
        }
        ew2x.focus();
        if (ew2x.setSelectionRange) {
            ew2x.setSelectionRange(gk2x.start, gk2x.end)
        } else if (ew2x.createTextRange) {
            xb8T = ew2x.createTextRange();
            if (ew2x.value.length === gk2x.start) {
                xb8T.collapse(false);
                xb8T.select()
            } else {
                xb8T.moveToBookmark(gk2x.bookmark);
                xb8T.select()
            }
        }
    };
    fK2x.Gr1x = function (ew2x, gk2x, cK1x) {
        var gk2x = gk2x || {text: "", start: 0, end: 0};
        var bce7X, bCp5u, xb8T, Ly2x, bCo5t, bCn5s, Ch0x;
        this.WK6E(ew2x, gk2x);
        if (ew2x.setSelectionRange) {
            bce7X = ew2x.value;
            bCp5u = bce7X.substring(0, gk2x.start) + cK1x + bce7X.substring(gk2x.end);
            bCo5t = bCn5s = gk2x.start + cK1x.length;
            Ch0x = ew2x.scrollTop;
            ew2x.value = bCp5u;
            if (ew2x.scrollTop != Ch0x) {
                ew2x.scrollTop = Ch0x
            }
            ew2x.setSelectionRange(bCo5t, bCn5s)
        } else if (ew2x.createTextRange) {
            Ly2x = document.selection.createRange();
            Ly2x.text = cK1x;
            Ly2x.setEndPoint("StartToEnd", Ly2x);
            Ly2x.select()
        }
        h0x.B0x(ew2x, "keyup")
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), cM1x = c0x("nej.p"), k0x = c0x("nej.u"),
        ck1x = c0x("nej.ut"), D0x = c0x("nm.w"), fK2x = c0x("nm.ut"), b0x;
    D0x.bCm5r = NEJ.C();
    b0x = D0x.bCm5r.O0x(ck1x.cz1x);
    b0x.cl1x = function (e0x) {
        this.cs1x(e0x)
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.fL2x = e0x.txt;
        this.Cj0x = e0x.sgtsContainer;
        this.bCl5q = e0x.sgtsList[0];
        this.WE5J = e0x.sgtsItem;
        this.ni4m = e0x.rangeData;
        this.Go1x = e0x.atIndex;
        a9j.y0x(this.WE5J[0], "selected-item");
        this.LO3x()
    };
    b0x.bD0x = function () {
        this.bH0x();
        h0x.mo4s(document.body, "keyup", this.bCk4o.g0x(this));
        h0x.mo4s(document.body, "click", this.bCi4m.g0x(this))
    };
    b0x.LO3x = function () {
        this.bU1x([[document.body, "keyup", this.bCk4o.g0x(this)], [document.body, "click", this.bCi4m.g0x(this)], [this.fL2x, "keydown", this.bCh4l.g0x(this)], [this.fL2x, "keypress", this.bCh4l.g0x(this)], [this.bCl5q, "click", this.bCg4k.g0x(this)], [this.bCl5q, "mouseover", this.Cn0x.g0x(this)]])
    };
    b0x.Cn0x = function (d0x) {
        var dd1x = h0x.U0x(d0x);
        var r0x = a9j.I0x(this.Cj0x, "selected-item");
        if (a9j.bB0x(dd1x, "j-sgt")) {
            a9j.w0x(r0x[0], "selected-item");
            a9j.y0x(dd1x, "selected-item")
        }
    };
    b0x.bCk4o = function (d0x) {
        var r0x = a9j.I0x(this.Cj0x, "selected-item");
        var bp0x = this.WE5J.length;
        var jb3x = d0x.keyCode || d0x.which;
        var s0x, i0x;
        switch (jb3x) {
            case 38:
                s0x = a9j.fX2x(r0x[0], "data-index") - 1 < 0 ? bp0x - 1 : a9j.fX2x(r0x[0], "data-index") - 1;
                a9j.w0x(r0x[0], "selected-item");
                a9j.y0x(this.WE5J[s0x], "selected-item");
                break;
            case 40:
                s0x = parseInt(a9j.fX2x(r0x[0], "data-index")) + 1 >= bp0x ? 0 : parseInt(a9j.fX2x(r0x[0], "data-index")) + 1;
                a9j.w0x(r0x[0], "selected-item");
                a9j.y0x(this.WE5J[s0x], "selected-item");
                break;
            case 13:
                this.bCg4k(d0x);
                break;
            case 27:
                this.nD4H();
                break;
            case 32:
                var bi0x = this.fL2x.value;
                var s0x = fK2x.tL6F(this.fL2x);
                if (bi0x.charAt(s0x.start - 1) !== " ") return;
                this.nD4H();
                break
        }
    };
    b0x.bCh4l = function (d0x) {
        var jb3x = d0x.keyCode || d0x.which;
        if (jb3x === 13 || jb3x === 38 || jb3x === 40) {
            h0x.cd1x(d0x);
            d0x.keyCode = 0;
            d0x.which = 0;
            d0x.returnvalue = false
        }
    };
    b0x.bCi4m = function (d0x) {
        var dd1x = d0x.target || d0x.srcElement;
        if (dd1x === this.fL2x) return;
        this.nD4H()
    };
    b0x.bCg4k = function (d0x) {
        h0x.bh0x(d0x);
        var r0x = a9j.I0x(this.Cj0x, "selected-item")[0];
        var qb5g = d0x.target || d0x.srcElement;
        var t0x = d0x.type;
        if (a9j.bB0x(qb5g, "lst")) return;
        if (t0x == "click") {
            a9j.w0x(r0x, "selected-item");
            a9j.y0x(qb5g, "selected-item")
        } else qb5g = r0x;
        var i0x = qb5g.innerHTML + " ";
        this.nD4H();
        var gk2x = this.ni4m;
        gk2x.start = this.Go1x + 1;
        if (cM1x.cT1x.browser == "ie" && cM1x.cT1x.version < "9.0") {
            this.fL2x.value = this.fL2x.value.substring(0, gk2x.start) + this.fL2x.value.substring(gk2x.end, this.fL2x.value.length);
            gk2x.end = gk2x.start
        }
        fK2x.Gr1x(this.fL2x, gk2x, i0x);
        h0x.B0x(this.fL2x, "keyup")
    };
    b0x.nD4H = function (d0x) {
        if (!!this.Cj0x) a9j.Y0x(this.Cj0x, "display", "none");
        this.S0x()
    };
    b0x.us7l = function (d0x) {
        if (!!this.Cj0x) a9j.Y0x(this.Cj0x, "display", "block")
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), D0x = c0x("nm.w"),
        ck1x = c0x("nej.ut"), bK1x = c0x("nej.ui"), b0x;
    var bQb8T = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bQa8S = a9j.el2x("m-wgt-atlist");
    var hR3x = a9j.rH6B(bQb8T);
    D0x.bCf4j = NEJ.C();
    b0x = D0x.bCf4j.O0x(bK1x.es2x);
    b0x.cl1x = function (e0x) {
        this.fE2x = {};
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.fE2x.txt = a9j.x0x(e0x.target);
        this.fE2x.data = e0x.data;
        this.fE2x.offset = e0x.offset;
        this.fE2x.rangeData = e0x.rangeData;
        this.fE2x.atIndex = e0x.atIndex;
        this.bPU8M(e0x);
        this.bl0x(e0x);
        this.fE2x.sgtsContainer = this.o0x;
        this.fE2x.sgtsList = a9j.I0x(this.o0x, "lst");
        this.fE2x.sgtsItem = a9j.I0x(this.o0x, "f-thide");
        this.TJ5O(e0x);
        this.bPR8J = D0x.bCm5r.A0x(this.fE2x)
    };
    b0x.bD0x = function (e0x) {
        this.bH0x();
        this.bPR8J.S0x()
    };
    b0x.bY1x = function () {
        this.kW4a = hR3x
    };
    b0x.bS1x = function () {
        this.cb1x()
    };
    b0x.bPU8M = function (e0x) {
        this.o0x = a9j.dt1x(a9j.ib3x(a9j.bQ1x(bQa8S, e0x.data)))
    };
    b0x.TJ5O = function (e0x) {
        var bCe4i = a9j.I0x(this.o0x, "selected-item")[0];
        if (bCe4i) a9j.w0x(bCe4i, "selected-item");
        var cO1x = e0x.offset.x + "px";
        var gL2x = e0x.offset.y + "px";
        a9j.Y0x(this.o0x, "left", cO1x);
        a9j.Y0x(this.o0x, "top", gL2x)
    }
})();
(function () {
    var c0x = NEJ.P, v0x = c0x("nej.j"), fK2x = c0x("nm.ut");
    fK2x.bCd4h = function (bi0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cP1x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Gn1x = bi0x.match(cP1x) || [];
        for (var bd0x = 0; bd0x < Gn1x.length; bd0x++) {
            Gn1x[bd0x] = Gn1x[bd0x].split("@")[1]
        }
        Gn1x = Gn1x.reverse();
        var hs3x = GUser.userId;
        var bPO8G = v0x.sH6B("mentioners" + hs3x) || [];
        var je3x = Gn1x.concat(bPO8G);
        if (je3x.length > 10) je3x = je3x.slice(0, 10);
        v0x.vr8j("mentioners" + hs3x, je3x)
    };
    fK2x.bPN8F = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hs3x = GUser.userId;
        return v0x.sH6B("mentioners" + hs3x) || []
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), cM1x = c0x("nej.p"), v0x = c0x("nej.j"),
        k0x = c0x("nej.u"), ck1x = c0x("nej.ut"), D0x = c0x("nm.w"), fK2x = c0x("nm.ut"), b0x;
    D0x.bCa4e = NEJ.C();
    b0x = D0x.bCa4e.O0x(ck1x.cz1x);
    b0x.cl1x = function (e0x) {
        this.cs1x(e0x);
        this.bBZ4d()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.fL2x = e0x.txt;
        this.o0x = e0x.body;
        this.bBY4c = e0x.before;
        this.MS3x = e0x.flag;
        this.bPB8t = e0x.after;
        this.pM5R = [];
        if (cM1x.cT1x.browser != "ie") {
            setTimeout(function () {
                this.lb4f()
            }.g0x(this), 0)
        }
        this.LO3x()
    };
    b0x.bD0x = function () {
        this.bH0x();
        if (this.tq6k) this.tq6k.S0x();
        delete this.tq6k
    };
    b0x.LO3x = function () {
        this.bU1x([[this.fL2x, "keyup", this.bBW4a.g0x(this, this.fL2x)], [this.fL2x, "click", this.bBW4a.g0x(this, this.fL2x)], [this.fL2x, "focus", this.lb4f.g0x(this)]])
    };
    b0x.lb4f = function (d0x) {
        this.ni4m = fK2x.tL6F(this.fL2x)
    };
    b0x.bBZ4d = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cU1x = window.GUser.userId;
        var V0x = "/api/user/getfollows/" + cU1x;
        var fD2x = v0x.bo0x(V0x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (i0x) {
                window.GFollowers = JSON.parse(i0x).follow
            }.g0x(this),
            onerror: function (i0x) {
            },
            onbeforerequest: function (i0x) {
            }
        })
    };
    b0x.bBV4Z = function (index) {
        var z0x = this.fL2x.value, bj0x, bdi7b, bdk7d, Mw3x;
        this.bBY4c.innerHTML = k0x.dK1x(z0x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nG4K = a9j.I0x(this.bBY4c, "j-test");
        for (var bd0x = 0; bd0x < nG4K.length; bd0x++) {
            nG4K[bd0x].innerText = " "
        }
        this.MS3x.innerHTML = z0x.charAt(index);
        this.bPB8t.innerHTML = k0x.dK1x(z0x.substr(index + 1, z0x.length));
        Mw3x = parseInt(a9j.dc1x(this.fL2x, "lineHeight"));
        a9j.Y0x(this.o0x, "display", "block");
        bdi7b = a9j.hM3x(this.MS3x, this.o0x);
        bdk7d = a9j.hM3x(this.fL2x);
        a9j.Y0x(this.o0x, "display", "none");
        var cO1x = bdi7b.x + bdk7d.x;
        var gL2x = bdi7b.y + bdk7d.y + Mw3x;
        bj0x = {x: cO1x, y: gL2x};
        this.bPv8n(bj0x)
    };
    b0x.bBW4a = function (ew2x, d0x) {
        h0x.cd1x(d0x);
        var ew2x = ew2x;
        var z0x = ew2x.value;
        var bp0x = z0x.length;
        var s0x = fK2x.tL6F(ew2x).start;
        var bBR4V = 0;
        var jb3x = d0x.keyCode || d0x.which;
        var je3x;
        this.ni4m = fK2x.tL6F(ew2x);
        var bBN4R = false;
        for (var i = 1; i < 20; i++) {
            je3x = s0x - i;
            if (z0x.charAt(je3x) === " ") break;
            if (z0x.charAt(je3x) === "@") {
                bBN4R = true;
                this.Go1x = bBR4V = je3x;
                break
            }
        }
        if (bBN4R && d0x.shiftKey === false && jb3x !== 38 && jb3x !== 40) {
            if (jb3x !== 27 && jb3x !== 13) {
                this.tq6k ? this.tq6k.S0x() : null;
                this.bBV4Z(bBR4V)
            }
        } else if (jb3x !== 38 && jb3x !== 40 && d0x.keyCode !== 32) {
            this.tq6k ? this.tq6k.S0x() : null
        }
    };
    b0x.bPv8n = function (bj0x) {
        var bj0x = bj0x;
        var i0x = this.zQ9H();
        var e0x = {
            parent: document.body,
            offset: bj0x,
            data: i0x,
            target: this.fL2x,
            rangeData: this.ni4m,
            atIndex: this.Go1x
        };
        this.tq6k ? this.tq6k.S0x() : null;
        this.tq6k = D0x.bCf4j.A0x(e0x)
    };
    b0x.zQ9H = function () {
        var bPc8U = fK2x.tL6F(this.fL2x).start;
        var bPb8T = this.Go1x + 1;
        var bBK4O = fK2x.bPN8F() || [];
        var bBJ4N = [];
        var bw0x = this.fL2x.value.substring(bPb8T, bPc8U).toLowerCase();
        bw0x = bw0x.replace(/\[/g, "\\[");
        bw0x = bw0x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pM5R = window.GFollowers[0] ? window.GFollowers : []
        } else this.pM5R = [];
        if (!this.pM5R[0]) this.bBZ4d();
        for (var bd0x = 0; bd0x < bBK4O.length; bd0x++) {
            for (var v0x = 0; v0x < this.pM5R.length; v0x++) {
                if (this.pM5R[v0x].nickname == bBK4O[bd0x]) bBJ4N.push(this.pM5R[v0x])
            }
        }
        this.pM5R = k0x.cks4w(this.pM5R, bBJ4N, {union: true, begin: true});
        var bOV8N = this.pM5R.length;
        var Wr5w = [];
        var KD2x, KH2x;
        if (!this.pM5R[0]) return {suggests: Wr5w};
        for (var i = 0; i < bOV8N; i++) {
            KD2x = this.pM5R[i].nickname.toLowerCase().search(bw0x);
            KH2x = this.pM5R[i].py ? this.pM5R[i].py.toLowerCase().search(bw0x) : -1;
            if (KD2x !== -1 || KH2x != -1) Wr5w.push(this.pM5R[i]);
            if (Wr5w.length === 10) break
        }
        return {suggests: Wr5w}
    };
    b0x.MJ3x = function () {
        var gk2x = this.ni4m || {text: "", start: 0, end: 0};
        h0x.B0x(this.fL2x, "focus");
        fK2x.Gr1x(this.fL2x, gk2x, "@");
        this.ni4m = fK2x.tL6F(this.fL2x);
        this.Go1x = gk2x.start;
        this.bBV4Z(this.Go1x)
    };
    b0x.BQ0x = function () {
        if (this.tq6k) this.tq6k.S0x()
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), h0x = c0x("nej.v"), k0x = c0x("nej.u"), v0x = c0x("nej.j"), D0x = c0x("nm.w"),
        ck1x = c0x("nej.ut"), bK1x = c0x("nej.ui"), b0x;
    var bOU8M = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bOT8L = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gj2x = a9j.ib3x(bOT8L);
    var hR3x = a9j.rH6B(bOU8M);
    D0x.MO3x = NEJ.C();
    b0x = D0x.MO3x.O0x(bK1x.es2x);
    b0x.cl1x = function (e0x) {
        this.fE2x = {};
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x);
        this.fE2x.txt = a9j.x0x(e0x.target);
        this.JG2x();
        this.MQ3x = D0x.bCa4e.A0x(this.fE2x)
    };
    b0x.bD0x = function (e0x) {
        this.bH0x();
        this.MQ3x.S0x()
    };
    b0x.bY1x = function () {
        this.ca1x = gj2x;
        this.kW4a = hR3x
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.cS1x(a9j.x0x(this.o0x));
        this.fE2x.body = this.o0x;
        this.fE2x.before = j0x[0];
        this.fE2x.flag = j0x[1];
        this.fE2x.after = j0x[2]
    };
    b0x.JG2x = function () {
        var pt5y = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pt5y.length; i++) {
            if (pt5y[i] === "width" && a9j.dc1x(this.fE2x.txt, pt5y[i]) == "100%") {
                a9j.Y0x(this.o0x, pt5y[i], this.fE2x.txt.offsetWidth + "px");
                continue
            }
            a9j.Y0x(this.o0x, pt5y[i], a9j.dc1x(this.fE2x.txt, pt5y[i]))
        }
    };
    b0x.MJ3x = function () {
        this.MQ3x.MJ3x()
    };
    b0x.BQ0x = function () {
        this.MQ3x.BQ0x()
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, eT2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"),
        k0x = c0x("nej.u"), H0x = c0x("nej.ut"), jH3x = c0x("nm.c"), R0x = {}, b0x;
    if (!!jH3x.bdF7y) return;
    jH3x.bdF7y = NEJ.C();
    b0x = jH3x.bdF7y.O0x(H0x.cz1x);
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x)
    };
    b0x.bD0x = function () {
        this.bH0x()
    };
    b0x.CC0x = function (ez2x, dv1x, Wp5u) {
        if (R0x[ez2x]) {
            this.hF3x("register commonJST[" + ez2x + "] duplicate");
            return
        }
        if (!k0x.gl2x(dv1x)) {
            dv1x = ctl.comJST.bOS8K(ez2x, dv1x, Wp5u)
        }
        R0x[ez2x] = dv1x
    };
    b0x.bOR8J = function (Wo5t) {
        if (k0x.ep2x(Wo5t)) {
            k0x.be0x(Wo5t, function (r0x) {
                ctl.comJST.CC0x.apply(this, r0x)
            }, this)
        } else if (k0x.li4m(Wo5t)) {
            k0x.dZ2x(Wo5t, function (eM2x, J0x) {
                ctl.comJST.CC0x(J0x, eM2x)
            })
        }
    };
    b0x.bOS8K = function (ez2x, tf6Z, Wp5u) {
        tf6Z = tf6Z || {};
        NEJ.X(tf6Z, {comJST: this.nl4p});
        if (tf6Z.resetDataName && !k0x.ep2x(tf6Z.resetDataName)) {
            tf6Z.resetDataName = [tf6Z.resetDataName]
        }
        return function () {
            var i0x = arguments[0], iX3x = arguments[1];
            if (tf6Z.resetDataName) {
                var je3x = {};
                for (var i = 0, ii = tf6Z.resetDataName.length; i < ii; i++) {
                    je3x[tf6Z.resetDataName[i]] = arguments[i]
                }
                i0x = je3x;
                iX3x = arguments[ii]
            }
            NEJ.X(i0x, tf6Z, dD1x);
            if (Wp5u) {
                iX3x = iX3x || {};
                NEJ.X(iX3x, Wp5u)
            }
            return a9j.bQ1x(ez2x, i0x, iX3x)
        }
    };
    b0x.nl4p = function (ez2x) {
        if (!R0x[ez2x]) {
            this.hF3x("commonJST[" + ez2x + "] is unregister");
            return ""
        } else {
            return R0x[ez2x].apply(null, eT2x.slice.call(arguments, 1))
        }
    };
    b0x.dump = function () {
        return R0x
    };
    b0x.hF3x = function (bOP8H) {
        if (console && console.log) {
            console.log(bOP8H)
        }
    };
    var dD1x = function (eM2x, J0x) {
        return J0x == "resetDataName"
    };
    c0x("ctl").comJST = jH3x.bdF7y.fV2x()
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, bm0x = NEJ.F, eT2x = NEJ.R, a9j = c0x("nej.e"), h0x = c0x("nej.v"),
        k0x = c0x("nej.u"), H0x = c0x("nej.ut"), jH3x = c0x("nm.c"), R0x = {}, b0x;
    if (!!jH3x.bdQ8I) return;
    jH3x.bdQ8I = NEJ.C();
    b0x = jH3x.bdQ8I.O0x(H0x.cz1x);
    b0x.cl1x = function () {
        this.cs1x();
        var e0x = {
            "com-mv-artists": function (fl2x, dL1x, Cw0x, bdR8J) {
                return a9j.bQ1x("com-mv-artists", {
                    artists: fl2x,
                    clazz: dL1x,
                    boxClazz: bdR8J,
                    mark: Cw0x || function (cQ1x) {
                        return cQ1x
                    },
                    escape: k0x.dK1x,
                    comJST: ctl.comJST.nl4p
                })
            }, "com-album-artists": function (fl2x, dL1x, Cw0x, bdR8J) {
                return a9j.bQ1x("com-album-artists", {
                    artists: fl2x,
                    clazz: dL1x,
                    boxClazz: bdR8J,
                    mark: Cw0x || function (cQ1x) {
                        return cQ1x
                    },
                    escape: k0x.dK1x,
                    comJST: ctl.comJST.nl4p
                })
            }, "com-artists-title": {resetDataName: ["artists"], escape: k0x.dK1x}
        };
        for (var C0x in e0x) {
            ctl.comJST.CC0x(C0x, e0x[C0x])
        }
    };
    b0x.bk0x = function (e0x) {
        this.bl0x(e0x)
    };
    b0x.bD0x = function () {
        this.bH0x()
    };
    c0x("ctl").comJSTUtil = jH3x.bdQ8I.fV2x()
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, a9j = c0x("nej.e"), cM1x = c0x("nej.p"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"), v0x = c0x("nej.j"), D0x = c0x("nm.w"), fK2x = c0x("nm.ut"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), n0x = c0x("nm.l"), bdT8L = [2, 3], dE1x = ["sn", "db"], b0x, K0x, bOO7H = {
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
        }, Wj5o = {
            djprogram: "èç®",
            album: "ä¸è¾",
            playlist: "æ­å",
            song: "åæ²",
            yunsong: "åæ²",
            artist: "æ­æ",
            mv: "MV",
            topic: "é³ä¹ä¸æ ",
            djradio: "çµå°",
            concert: "æ¼åº",
            video: "è§é¢"
        }, bBG4K = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        }, bOK7D = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, CK0x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "ç­çº§è¾¾å°Lv.4ï¼å³å¯æ·»å å¾ç"
        };
    n0x.wE8w = NEJ.C();
    b0x = n0x.wE8w.O0x(n0x.dV2x);
    K0x = n0x.wE8w.cg1x;
    b0x.bk0x = function (e0x) {
        if (e0x.onclose === undefined) {
            e0x.onclose = this.bBD4H.g0x(this)
        }
        this.bl0x(e0x);
        this.zT9K = e0x.isPub;
        this.iO3x = e0x.rid || -1;
        this.eh2x = e0x.type || -1;
        this.bei8a = e0x.purl;
        this.Np3x = e0x.name || "";
        this.Nq3x = e0x.author || "";
        this.bem8e = e0x.authors || "";
        this.Wi5n = e0x.actId;
        this.Wg5l = e0x.actName;
        this.bBB4F = e0x.title;
        this.Wf5k = {};
        this.bOw7p = e0x.mesg || "";
        this.bOv7o = e0x.placeholder || "è¯´ç¹ä»ä¹å§";
        this.bev8n = e0x.hideTip;
        this.bOs7l = e0x.videoDescription;
        this.bOq7j = e0x.videoJumpUrl;
        var j0x, fI2x = +(new Date);
        try {
            j0x = top.localCache.x0x("user") || {}
        } catch (e) {
            j0x = {}
        }
        for (var i = 0, j0x = j0x.bindings || [], fm2x; i < j0x.length; ++i) {
            fm2x = !j0x[i].tokenJsonStr ? null : JSON.parse(j0x[i].tokenJsonStr);
            if (!fm2x || fm2x.expires_in === undefined) continue;
            var Wc5h = parseInt(fm2x.expires_in), VY5d = parseInt(j0x[i].refreshTime),
                bOj7c = (Wc5h + VY5d) * 1e3 - 5 * 60 * 1e3;
            if (bOj7c > fI2x) this.Wf5k[j0x[i].type] = !0
        }
        this.um7f = D0x.Bv0x.A0x({parent: this.VX5c, err: this.bBu4y});
        if (this.gD2x) {
            this.gD2x.S0x()
        }
        this.gD2x = D0x.MO3x.A0x({parent: document.body, target: this.eN2x});
        if (this.eh2x == 24 || this.eh2x == 21 || this.CT0x()) {
            this.wr8j.style.display = "none"
        } else {
            this.wr8j.style.display = "";
            this.nn4r = D0x.blc0x.A0x({
                parent: this.beR8J,
                button: this.wr8j,
                onstartupload: this.bBt4x.g0x(this, true),
                onfinishupload: this.bBt4x.g0x(this, false)
            })
        }
        if (this.CT0x()) {
            this.oF5K.innerText = "";
            a9j.y0x(this.oF5K, "info-video");
            a9j.y0x(this.beU8M, "f-hide")
        } else {
            a9j.w0x(this.beU8M, "f-hide")
        }
    };
    b0x.bD0x = function () {
        this.bH0x();
        if (this.um7f) {
            this.um7f.S0x();
            delete this.um7f
        }
        if (this.gD2x) {
            this.gD2x.S0x();
            delete this.gD2x
        }
        if (this.nn4r) {
            this.nn4r.S0x();
            delete this.nn4r
        }
        if (this.lQ4U) {
            this.lQ4U.S0x();
            delete this.lQ4U
        }
    };
    b0x.bY1x = function () {
        this.ca1x = "m-wgt-sharewin"
    };
    b0x.bS1x = function () {
        this.cb1x();
        this.bBs4w = a9j.cS1x(this.o0x)[0];
        var bn0x = a9j.I0x(this.o0x, "j-flag");
        this.pv5A = bn0x.shift();
        this.bBu4y = bn0x.shift();
        this.VX5c = bn0x.shift();
        this.eN2x = bn0x.shift();
        this.oF5K = bn0x.shift();
        this.bfb8T = bn0x.shift();
        this.bNX7Q = bn0x.shift();
        this.wr8j = bn0x.shift();
        this.ch1x = bn0x.shift();
        this.beR8J = bn0x.shift();
        this.zX9O = bn0x.shift();
        this.cwt6n = bn0x.shift();
        this.beU8M = bn0x.shift();
        this.ea2x = bn0x.shift();
        this.VK5P = a9j.I0x(this.beU8M, "j-t");
        this.zl9c = H0x.EF1x.A0x({list: a9j.cS1x(this.pv5A), selected: "z-slt", onchange: this.bfh8Z.g0x(this)});
        if (cM1x.cT1x.browser == "ie" && cM1x.cT1x.version < "8.0") {
            a9j.Y0x(this.VX5c, "position", "relative");
            a9j.Y0x(this.VX5c, "zIndex", "10")
        }
        h0x.q0x(window, "snsbind", this.Oo3x.g0x(this));
        h0x.q0x(this.eN2x, "input", this.fi2x.g0x(this));
        h0x.q0x(this.eN2x, "keyup", this.tg6a.g0x(this));
        h0x.q0x(this.o0x, "click", this.cw1x.g0x(this));
        this.P0x = p0x.bix9o.A0x();
        this.P0x.q0x("onshareall", this.VJ5O.g0x(this, 0));
        this.P0x.q0x("onshareerror", this.hS3x.g0x(this));
        this.P0x.q0x("onshareprivate", this.VJ5O.g0x(this, 1));
        this.VI5N = p0x.yG9x.A0x();
        this.hF3x = p0x.hK3x.A0x();
        try {
            this.Ou3x = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Ou3x) {
            this.Ou3x = CK0x;
            v0x.bo0x("/api/event/user/permission", {
                type: "json", onload: function (d0x) {
                    if (d0x.code == 200) {
                        this.Ou3x = NEJ.EX(CK0x, d0x)
                    }
                }.g0x(this)
            })
        }
    };
    b0x.bfh8Z = function (d0x) {
        d0x.index == 0 ? a9j.w0x(this.bBs4w, "m-plshare") : a9j.y0x(this.bBs4w, "m-plshare");
        this.VX5c.style.display = d0x.index == 0 ? "none" : "";
        this.bNX7Q.style.display = d0x.index == 0 ? "" : "none";
        this.wr8j.style.display = d0x.index == 0 ? "" : "none";
        if (this.eh2x == 24 || this.eh2x == 21) {
            this.wr8j.style.display = "none"
        }
        this.bBu4y.style.display = "none";
        this.eN2x.value = "";
        this.bT1x();
        this.De0x();
        if (d0x.index == 0) {
            var dq1x = a9j.dc1x(this.eN2x, "width");
            if (dq1x == "auto" || !dq1x) {
                return
            } else {
                if (this.gD2x) {
                    this.gD2x.S0x()
                }
                this.gD2x = D0x.MO3x.A0x({parent: document.body, target: this.eN2x})
            }
            this.beR8J.style.display = ""
        } else {
            if (this.gD2x) {
                this.gD2x.S0x();
                delete this.gD2x
            }
            this.beR8J.style.display = "none"
        }
    };
    b0x.cw1x = function (d0x) {
        var f0x = h0x.U0x(d0x, "d:action");
        if (!f0x) return;
        if (a9j.u0x(f0x, "action") == "search") {
            h0x.cd1x(d0x)
        } else if (a9j.u0x(f0x, "default") === undefined) {
            h0x.cd1x(d0x)
        }
        switch (a9j.u0x(f0x, "action")) {
            case"txt":
                this.lb4f();
                break;
            case"search":
                if (this.CT0x()) {
                    top.location.href = this.bOq7j
                } else if (this.zT9K && this.eh2x != 24) {
                    if (this.lQ4U) {
                        this.lQ4U.S0x()
                    }
                    this.lQ4U = D0x.bpI1x.A0x({
                        parent: this.o0x.parentNode,
                        onfinish: this.bfo8g.g0x(this),
                        oncancel: this.bNO7H.g0x(this)
                    });
                    this.bfq8i = true;
                    this.o0x.style.display = "none";
                    this.Df0x(this.iO3x > 0 ? "æ´æ¢é³ä¹" : "æ·»å é³ä¹")
                }
                break;
            case"at":
                h0x.sh6b(d0x);
                !!this.gv2x && this.gv2x.bq0x();
                this.gD2x.MJ3x();
                this.fx2x();
                break;
            case"emot":
                h0x.sh6b(d0x);
                !!this.gD2x && this.gD2x.BQ0x();
                if (!this.gv2x) {
                    this.gv2x = n0x.GA1x.A0x({parent: this.bfb8T});
                    this.gv2x.q0x("onselect", this.xj8b.g0x(this))
                }
                this.gv2x.M0x();
                break;
            case"upload":
                break;
            case"sns":
                h0x.bh0x(d0x);
                var bft8l, bw0x, t0x = a9j.u0x(f0x, "type");
                if (!this.Wf5k[t0x]) {
                    bft8l = f0x.href.split("?");
                    bw0x = k0x.hk3x(bft8l[1]);
                    bw0x["csrf_token"] = v0x.gG2x("__csrf");
                    top.open(bft8l[0] + "?" + k0x.da1x(bw0x));
                    return
                }
                var bv0x = {2: "sn", 3: "db", 4: "rr"};
                l0x.zH9y(f0x, "u-slg-" + bv0x[t0x] + "-gray");
                break;
            case"close":
                !!this.gv2x && this.gv2x.bq0x();
                this.bBD4H();
                break;
            case"share":
                h0x.bh0x(d0x);
                if (this.CT0x()) {
                    if (!a9j.bB0x(f0x, "u-btn2-2-dis")) {
                        this.cth6b()
                    }
                } else if (a9j.bB0x(f0x, "u-btn2-2-dis")) {
                    if (!this.Ou3x.pubEventWithoutResource && !(this.iO3x > 0)) {
                        this.cte6Y()
                    } else {
                    }
                } else if (!(this.iO3x > 0) && !this.eN2x.value && this.nn4r && this.nn4r.Mb3x().length == 0) {
                    n0x.Z0x.M0x({type: 2, tip: "è¯·è¾å¥åå®¹"})
                } else {
                    this.cta6U()
                }
                break
        }
    };
    b0x.cte6Y = function () {
        var qZ5e = 0, bfA8s = function () {
            if (qZ5e % 2) {
                a9j.w0x(this.oF5K, "z-show")
            } else {
                a9j.y0x(this.oF5K, "z-show")
            }
            qZ5e++;
            if (qZ5e > 5) {
                clearInterval(eX2x)
            }
        }, eX2x;
        return function () {
            qZ5e = 0;
            clearInterval(eX2x);
            eX2x = setInterval(bfA8s.g0x(this), 200)
        }
    }();
    b0x.Oo3x = function (m0x) {
        m0x = m0x.result;
        this.Wf5k[m0x.type] = !0;
        var s0x = k0x.cW1x(bdT8L, m0x.type), cc1x = "u-slg-" + dE1x[s0x] + "-gray";
        a9j.w0x(this.VK5P[s0x], cc1x)
    };
    b0x.bfo8g = function (bt0x) {
        var i0x = bt0x.data;
        this.iO3x = bt0x.id;
        this.eh2x = bt0x.type;
        this.o0x.style.display = "";
        this.Df0x(this.bBB4F);
        this.lQ4U && this.lQ4U.S0x();
        this.bfq8i = false;
        this.bei8a = i0x.picUrl;
        this.Np3x = i0x.title || "";
        this.Nq3x = i0x.author || "";
        this.bem8e = i0x.authors || "";
        this.csZ6T();
        this.VG5L()
    };
    b0x.bNO7H = function () {
        this.lQ4U && this.lQ4U.S0x();
        this.o0x.style.display = "";
        this.Df0x(this.bBB4F);
        this.bfq8i = false;
        this.VG5L()
    };
    b0x.xj8b = function (d0x) {
        var bi0x = "[" + d0x.text + "]";
        fK2x.Gr1x(this.eN2x, this.ni4m, bi0x);
        this.fx2x()
    };
    b0x.fi2x = function (d0x) {
        cM1x.cT1x.browser == "ie" && cM1x.cT1x.version < "7.0" ? setTimeout(this.fx2x.g0x(this), 0) : this.fx2x()
    };
    b0x.tg6a = function (d0x) {
        this.lb4f();
        if (d0x.keyCode == 8) this.fx2x()
    };
    b0x.fx2x = function () {
        this.lb4f();
        this.De0x()
    };
    b0x.De0x = function () {
        var bp0x = Math.ceil(k0x.fe2x(this.eN2x.value.trim()) / 2);
        this.ch1x.innerText = 140 - bp0x;
        bp0x > 140 ? a9j.eu2x(this.ch1x, "s-fc4", "s-fc6") : a9j.eu2x(this.ch1x, "s-fc6", "s-fc4")
    };
    b0x.cta6U = function () {
        if (this.cu1x()) return;
        if (k0x.fe2x(this.eN2x.value.trim()) > 280) {
            this.bT1x("å­æ°è¶è¿140ä¸ªå­ç¬¦");
            return
        }
        var t0x = this.zl9c.rJ6D(), i0x;
        if (t0x == 0) {
            for (var i = 0, FJ1x = []; i < this.VK5P.length; ++i) {
                if (!a9j.bB0x(this.VK5P[i], "u-slg-" + dE1x[i] + "-gray")) FJ1x.push(bdT8L[i])
            }
            this.cu1x(!0);
            i0x = {
                id: this.iO3x,
                msg: this.eN2x.value.trim(),
                type: this.VF5K(this.eh2x),
                picUrl: this.bei8a,
                snsTypes: FJ1x.join(","),
                isPub: this.zT9K
            };
            if (this.Wi5n > 0) {
                i0x.actId = this.Wi5n;
                if (this.Wg5l) {
                    i0x.msg = "#" + this.Wg5l + "#" + i0x.msg
                }
            }
            var my4C = this.nn4r && this.nn4r.Mb3x();
            if (my4C && my4C.length) {
                i0x.pics = my4C
            }
            this.P0x.bVa0x(i0x)
        } else {
            var sb6V = this.um7f.Ko2x();
            if (sb6V.length <= 0) {
                this.bT1x("è¯·è³å°éæ©ä¸ä½å¥½å");
                return
            }
            this.P0x.bUZ0x({
                data: {
                    id: this.iO3x,
                    msg: this.eN2x.value.trim(),
                    type: this.VF5K(this.eh2x),
                    userIds: "[" + sb6V.join(",") + "]"
                }
            })
        }
    };
    b0x.cth6b = function () {
        if (this.cu1x()) {
            return
        }
        this.hF3x.gc2x("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k0x.fe2x(this.eN2x.value.trim()) > 280) {
            this.bT1x("å­æ°è¶è¿140ä¸ªå­ç¬¦");
            return
        }
        this.cu1x(!0);
        var i0x = {msg: this.eN2x.value.trim() || this.bOs7l || "", type: "video"}, csM6G = {videoId: this.iO3x};
        if (this.Wi5n > 0) {
            i0x.actId = this.Wi5n;
            if (this.Wg5l) {
                i0x.msg = "#" + this.Wg5l + "#" + i0x.msg
            }
        }
        i0x.videoinfo = JSON.stringify(csM6G);
        this.P0x.bUX0x({data: {videoId: this.iO3x, commit: true}, data2: i0x, snsTypes: ""})
    };
    b0x.VJ5O = function (t0x, m0x) {
        this.cu1x(!1);
        this.bq0x();
        if (!this.bev8n) {
            if (this.CT0x()) {
                n0x.Z0x.M0x({tip: "è§é¢å°å¨è½¬ç å®æåèªå¨ååº", autoclose: true})
            } else {
                n0x.Z0x.M0x({
                    tip: "åäº«æå" + (m0x.point > 0 ? ' è·å¾<em class="s-fc6">' + m0x.point + "ç§¯å</em>" : ""),
                    autoclose: true
                })
            }
        }
        h0x.B0x(n0x.wE8w, "sharesuccess", {isPrivate: t0x, rid: this.iO3x, rtype: this.eh2x, data: m0x.event});
        this.B0x("onshare")
    };
    b0x.hS3x = function (m0x) {
        this.cu1x(!1);
        var bF0x = "åäº«å¤±è´¥";
        if (m0x.code) {
            switch (m0x.code) {
                case 404:
                    bF0x = "åäº«çèµæºä¸å­å¨";
                    break;
                case 407:
                    bF0x = "è¾å¥åå®¹åå«æå³é®å­";
                    break;
                case 408:
                    bF0x = "åäº«å¤ªå¿«äºï¼è¿ä¼ååäº«å§";
                    break;
                case 315:
                    bF0x = m0x.message || "æ ¹æ®å¯¹æ¹è®¾ç½®ï¼ä½ æ²¡æè¯¥æä½æé";
                    break;
                case 329:
                    return l0x.eS2x({
                        clazz: "m-layer-w2",
                        btntxt: "ç¥éäº",
                        message: "å½åè´¦å·å­å¨è¾å¤æªå®æåå¸çè§é¢<br>è¯·ç¨ååè¯"
                    })
            }
        }
        this.bT1x(bF0x)
    };
    b0x.lb4f = function () {
        this.ni4m = fK2x.tL6F(this.eN2x)
    };
    b0x.bT1x = function (bF0x) {
        this.dy1x(this.ea2x, bF0x)
    };
    b0x.cu1x = function (cD1x) {
        return this.dM1x(this.zX9O, cD1x, "åäº«", "åäº«ä¸­...")
    };
    b0x.VF5K = function (jg3x) {
        return bOO7H[jg3x] || ""
    };
    b0x.csL6F = function () {
        var ew2x, tD6x = this.VF5K(this.eh2x);
        this.oF5K.style.display = "";
        if (this.iO3x <= 0) {
            this.oF5K.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">ç»å¨æéä¸é³ä¹</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Np3x) {
                this.oF5K.style.display = "none";
                return
            }
            var VE5J = this.zT9K && this.eh2x != 24;
            ew2x = (Wj5o[tD6x] ? Wj5o[tD6x] + "ï¼" : "") + this.Np3x + (bBG4K[tD6x] || " ") + (tD6x == "mv" || tD6x == "album" ? this.bem8e || this.Nq3x : this.Nq3x);
            a9j.dQ1x(this.oF5K, "m-xwgt-share-infobar", {canChange: VE5J, info: ew2x});
            if (VE5J) {
                a9j.w0x(this.oF5K, "z-dis")
            } else {
                a9j.y0x(this.oF5K, "z-dis")
            }
        }
        a9j.w0x(this.oF5K, "info-video")
    };
    b0x.csZ6T = function () {
        var tD6x = this.VF5K(this.eh2x),
            ew2x = (Wj5o[tD6x] ? Wj5o[tD6x] + "ï¼" : "") + this.Np3x + (bBG4K[tD6x] || " ") + (tD6x == "mv" || tD6x == "album" ? this.bem8e || this.Nq3x : this.Nq3x);
        VE5J = this.zT9K && this.eh2x != 24;
        if (this.CT0x()) {
        } else {
            a9j.w0x(this.oF5K, "info-video");
            a9j.dQ1x(this.oF5K, "m-xwgt-share-infobar", {canChange: VE5J, isPub: this.zT9K, info: ew2x})
        }
    };
    b0x.csI6C = function () {
        var FH1x = this.eN2x.value;
        if (this.zT9K) {
            if (!!this.bfq8i) {
                return !!FH1x && !!FH1x.length || !!this.nn4r && this.nn4r.Mb3x().length > 0
            } else {
                return this.iO3x > 0 || !!FH1x && !!FH1x.length || !!this.nn4r && this.nn4r.Mb3x().length > 0
            }
        } else {
            return !!FH1x && !!FH1x.length || !!this.nn4r && this.nn4r.Mb3x().length > 0
        }
    };
    b0x.VG5L = function () {
        var bBb4f = false;
        if (!this.zT9K || this.Ou3x.pubEventWithoutResource || this.iO3x > 0) {
            bBb4f = true
        }
        if (bBb4f) {
            a9j.w0x(this.zX9O, "u-btn2-2-dis")
        } else {
            a9j.y0x(this.zX9O, "u-btn2-2-dis")
        }
    };
    b0x.bBt4x = function (bfT8L) {
        if (bfT8L) {
            a9j.y0x(this.zX9O, "u-btn2-2-dis")
        } else {
            this.VG5L()
        }
    };
    b0x.bBD4H = function (d0x) {
        if (d0x) {
            d0x.stopped = true
        }
        if (this.csI6C()) {
            l0x.gT3x({
                title: "æç¤º", message: "æ¯å¦éåºæ¬æ¬¡ç¼è¾ï¼", btnok: "éåº", action: function (W0x) {
                    if (W0x == "ok") {
                        this.B0x("forceclose", {});
                        this.bq0x()
                    }
                }.g0x(this)
            })
        } else {
            this.B0x("forceclose", {});
            this.bq0x()
        }
    };
    b0x.Df0x = function (eE2x, ds1x) {
        this.nS5X.zh9Y(eE2x, ds1x)
    };
    b0x.VC5H = function (t0x) {
        this.hF3x.gc2x("page", {type: t0x})
    };
    b0x.CT0x = function () {
        return this.eh2x == 39
    };
    b0x.M0x = function () {
        var csk5p = function (r0x, s0x) {
            var cc1x = "u-slg-" + dE1x[s0x] + "-gray";
            !this.Wf5k[bdT8L[s0x]] ? a9j.y0x(r0x, cc1x) : a9j.w0x(r0x, cc1x)
        };
        return function () {
            K0x.M0x.call(this);
            this.o0x.style.display = "";
            this.bT1x();
            this.cu1x(!1);
            this.zl9c.MT3x(0);
            this.eN2x.focus();
            this.eN2x.value = this.bOw7p || "";
            this.eN2x.placeholder = this.bOv7o || "";
            if (!this.CT0x()) {
                this.csL6F()
            } else {
                a9j.y0x(this.oF5K, "info-video");
                a9j.dQ1x(this.oF5K, "m-xwgt-share-videobar", {title: this.Np3x, picUrl: this.bei8a})
            }
            this.fx2x();
            this.um7f.bQA8s();
            k0x.be0x(this.VK5P, csk5p, this);
            this.lb4f();
            if (this.zT9K) {
                this.pv5A.style.display = "none"
            } else {
                this.pv5A.style.display = ""
            }
            this.VG5L()
        }
    }();
    b0x.bq0x = function (d0x) {
        K0x.bq0x.call(this);
        !!this.gv2x && this.gv2x.bq0x();
        if (this.um7f) {
            this.um7f.S0x();
            delete this.um7f
        }
        if (this.gD2x) {
            this.gD2x.S0x();
            delete this.gD2x
        }
        if (this.nn4r) {
            this.nn4r.S0x();
            delete this.nn4r
        }
        if (this.bAV4Z) {
            this.bAV4Z = this.bAV4Z.S0x()
        }
        if (this.lQ4U) {
            this.lQ4U.S0x();
            delete this.lQ4U
        }
    };
    l0x.lJ4N = function (e0x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e0x.title === undefined) {
            e0x.title = "åäº«"
        }
        if (e0x.actId && e0x.type != 39) {
            var t0x = bOK7D[e0x.resourceType], dl1x = e0x.resourceJson, ho3x;
            if (k0x.fh2x(dl1x)) {
                try {
                    dl1x = JSON.parse(dl1x)
                } catch (e) {
                }
            }
            if (t0x) {
                ho3x = l0x.bHJ6D(t0x, dl1x);
                e0x.name = ho3x.title;
                e0x.author = ho3x.author;
                e0x.picUrl = ho3x.picUrl;
                e0x.type = t0x;
                e0x.rid = (dl1x || []).id
            }
        }
        n0x.wE8w.M0x(e0x)
    };
    H0x.fr2x.A0x({element: n0x.wE8w, event: ["sharesuccess"]})
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), n0x = c0x("nm.l"),
        D0x = c0x("nm.w"), bK1x = c0x("nej.ui"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), b0x, K0x;
    n0x.Vy5D = NEJ.C();
    b0x = n0x.Vy5D.O0x(n0x.dV2x);
    K0x = n0x.Vy5D.cg1x;
    b0x.cl1x = function () {
        this.cs1x()
    };
    b0x.bS1x = function () {
        this.cb1x();
        var j0x = a9j.I0x(this.o0x, "j-flag");
        h0x.q0x(j0x[0], "click", this.Ec0x.g0x(this))
    };
    b0x.bY1x = function () {
        this.ca1x = "m-import-ok"
    };
    b0x.bk0x = function (e0x) {
        e0x.parent = e0x.parent || document.body;
        e0x.title = "æ­æ²åæ­¥å®æ";
        this.bl0x(e0x)
    };
    b0x.bD0x = function () {
        this.bH0x()
    };
    b0x.Ec0x = function (d0x) {
        this.bq0x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b0x.As9j = function () {
        this.bq0x()
    };
    b0x.bFb5g = function (d0x) {
        if (d0x.keyCode == 13) this.Bb0x()
    }
})();
(function () {
    var c0x = NEJ.P, X0x = NEJ.O, h0x = c0x("nej.v"), a9j = c0x("nej.e"), v0x = c0x("nej.j"), N0x = c0x("nej.p"),
        k0x = c0x("nej.u"), n0x = c0x("nm.l"), D0x = c0x("nm.w"), bK1x = c0x("nej.ui"), p0x = c0x("nm.d"),
        l0x = c0x("nm.x"), b0x, K0x;
    n0x.bAU4Y = NEJ.C();
    b0x = n0x.bAU4Y.O0x(n0x.dV2x);
    b0x.bY1x = function () {
        this.ca1x = "m-programtips-layer"
    };
    b0x.bS1x = function () {
        this.cb1x();
        this.bV1x = a9j.I0x(this.o0x, "j-flag")
    };
    b0x.bk0x = function (e0x) {
        e0x.clazz = " m-layer-programtips";
        e0x.parent = e0x.parent || document.body;
        e0x.title = "ä»è´¹åå®¹æç¤º";
        e0x.draggable = !0;
        e0x.destroyalbe = !0;
        e0x.mask = true;
        this.bl0x(e0x);
        this.gu2x = e0x.id;
        this.crO5T = e0x.radiotype;
        this.kF4J = location.protocol + "//" + (this.crK5P() || "music.163.com") + "/m/" + this.crO5T + "?id=" + this.gu2x;
        this.crE5J()
    };
    b0x.bD0x = function () {
        this.bH0x()
    };
    b0x.As9j = function () {
        this.bq0x()
    };
    b0x.Ec0x = function (d0x) {
        this.B0x("onok", z0x);
        this.bq0x()
    };
    l0x.bAT4X = function (e0x) {
        n0x.bAU4Y.A0x(e0x).M0x()
    };
    b0x.crE5J = function () {
        v0x.bo0x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k0x.da1x({url: this.kF4J, size: 180}),
            onload: function (i0x) {
                if (i0x.code == 200) {
                    this.crm5r(i0x.qrcodeImageUrl)
                } else {
                    alert("äºç»´ç è·åå¤±è´¥")
                }
            }.g0x(this)
        })
    };
    b0x.crK5P = function () {
        var crg5l = location.host;
        if (crg5l.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b0x.crm5r = function (jL3x) {
        this.bV1x[0].style.backgroundImage = "url(" + jL3x + ")"
    }
})();
(function () {
    var c0x = NEJ.P, a9j = c0x("nej.e"), cM1x = c0x("nej.p"), h0x = c0x("nej.v"), k0x = c0x("nej.u"),
        H0x = c0x("nej.ut"), v0x = c0x("nej.j"), p0x = c0x("nm.d"), l0x = c0x("nm.x"), F0x = c0x("nm.m"),
        n0x = c0x("nm.l"), L0x = c0x("nm.m.f"), b0x, K0x;
    F0x.cL1x = NEJ.C();
    b0x = F0x.cL1x.O0x(H0x.dn1x);
    b0x.bI1x = function () {
        var pd5i = !1;
        return function () {
            if (pd5i) return;
            pd5i = !0;
            this.bM1x();
            if (top == self) {
                return
            }
            this.rp6j = a9j.x0x("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bAR4V()
            }
            H0x.fr2x.A0x({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bU1x([[window, "scroll", this.Ad9U.g0x(this)], [document, "keyup", this.cqI5N.g0x(this)], [document.body, "click", this.rb5g.g0x(this)], [document, "mouseup", this.cqE5J.g0x(this)], [this.rp6j, "click", this.Pi3x.g0x(this)], [p0x.rI6C, "message", this.tQ6K.g0x(this)]]);
            l0x.bVp0x(document.body);
            this.Ad9U();
            if (this.Ae9V !== false && typeof GUser !== "undefined" && GUser.userId > 0) p0x.rI6C.fV2x().vn8f();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cM1x.cT1x.browser == "ie" && parseInt(cM1x.cT1x.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "ç½æäºé³ä¹"
                } else {
                    var gq2x = top.player.getPlaying();
                    if (gq2x && gq2x.track && gq2x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gq2x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.xI9z.g0x(this);
            this.jX3x = p0x.hK3x.A0x();
            window.log = this.mm4q.g0x(this);
            var sd6X = location.search;
            if (sd6X) {
                var bw0x = sd6X.substr(sd6X.indexOf("?") + 1), ga2x = k0x.hk3x(bw0x);
                if (ga2x && ga2x["_hash"]) location.hash = ga2x["_hash"]
            }
        }
    }();
    b0x.cqI5N = function (d0x) {
        var f0x = h0x.U0x(d0x);
        try {
            if (d0x.keyCode == 80 && l0x.bHQ6K() || ["textarea", "input"].indexOf(f0x.tagName.toLowerCase()) >= 0) return;
            h0x.B0x(top.document, "keyup", {ctrlKey: d0x.ctrlKey, keyCode: d0x.keyCode})
        } catch (e) {
        }
    };
    b0x.rb5g = function (d0x) {
        var f0x = h0x.U0x(d0x);
        if (f0x && f0x.tagName == "INPUT") return;
        var f0x = h0x.U0x(d0x, "d:pid");
        if (f0x) {
            h0x.cd1x(d0x);
            var oB5G = a9j.u0x(f0x, "pid"), Af9W = a9j.u0x(f0x, "ptype"), W0x = a9j.u0x(f0x, "action") || "play";
            switch (W0x) {
                case"subscribe":
                    l0x.ls4w({tracks: [oB5G]});
                    break
            }
        }
        f0x = h0x.U0x(d0x, "d:resAction");
        if (f0x && f0x.className.indexOf("-dis") == -1) {
            var cH1x = a9j.u0x(f0x, "resId"), t0x = a9j.u0x(f0x, "resType"), bgw8o = a9j.u0x(f0x, "resRadiotype"),
                bgx8p = a9j.u0x(f0x, "resRadioid"), dJ1x = a9j.u0x(f0x, "resFrom"), i0x = a9j.u0x(f0x, "resData"),
                W0x = a9j.u0x(f0x, "resAction"), bqJ2x = a9j.u0x(f0x, "resCopyright"),
                Vu5z = a9j.u0x(f0x, "resAuditstatus");
            if (W0x != "log" && W0x != "bilog") h0x.cd1x(d0x);
            switch (W0x) {
                case"log":
                    i0x = (i0x || "").split("|");
                    if (!!i0x[0]) {
                        var bc0x = {id: cH1x, alg: i0x[2] || "itembased", scene: i0x[3], position: i0x[1] || 0};
                        if (!!i0x[4]) bc0x.srcid = i0x[4];
                        window.log(i0x[0], bc0x)
                    }
                    break;
                case"bilog":
                    var bau7n = a9j.u0x(f0x, "logAction"), bay7r = a9j.u0x(f0x, "logJson");
                    window.log(bau7n, bay7r);
                    break;
                case"share":
                    if (Vu5z && Vu5z == 1) {
                        l0x.hW3x("ç±äºçæé®é¢ï¼è¯¥èç®ææ¶æ æ³åäº«ã")
                    } else {
                        share(cH1x, t0x, a9j.u0x(f0x, "resPic"), a9j.u0x(f0x, "resName"), a9j.u0x(f0x, "resAuthor"), a9j.u0x(f0x, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (t0x == 18) {
                        var pc5h = a9j.u0x(f0x, "resLevel"), qB5G = a9j.u0x(f0x, "resFee");
                        if (pc5h == 10) {
                            l0x.sN6H(qB5G, cH1x, "song");
                            break
                        }
                        l0x.ls4w({tracks: [cH1x]})
                    }
                    break;
                case"download":
                    l0x.TP5U({id: cH1x, type: t0x});
                    break;
                case"programtips":
                    if (Vu5z && Vu5z == 1) {
                        l0x.hW3x("ç±äºçæé®é¢ï¼è¯¥èç®ææ¶æ æ³åäº«ã")
                    } else {
                        l0x.bAT4X({id: bgx8p, radiotype: bgw8o})
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
    b0x.cqE5J = function (d0x) {
        try {
            h0x.B0x(top.document, "mouseup")
        } catch (e) {
        }
    };
    b0x.Ad9U = function () {
        var cqy5D = function () {
            var cq1x = window.innerHeight;
            if (!k0x.uG7z(cq1x)) cq1x = (document.documentElement || document.body).clientHeight;
            return cq1x
        };
        return function (d0x) {
            if (!this.rp6j) return;
            var Vt5y = cqy5D(), fR2x = document.documentElement.scrollTop || document.body.scrollTop;
            a9j.Y0x(this.rp6j, "display", fR2x > 0 ? "" : "none");
            if (cM1x.cT1x.browser == "ie" && cM1x.cT1x.version < "7.0") {
                var gg2x = Math.min(document.body.clientHeight, Vt5y + fR2x) - 204;
                a9j.Y0x(this.rp6j, "top", gg2x + "px")
            }
        }
    }();
    b0x.Pi3x = function (d0x) {
        h0x.cd1x(d0x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b0x.xI9z = function () {
        var bgD8v = function (d0x) {
            h0x.B0x(window, "share", d0x)
        };
        return function (cH1x, t0x, Dv0x, T0x, Pw4A, Px4B) {
            l0x.lJ4N({
                rid: cH1x,
                type: t0x,
                purl: Dv0x,
                name: T0x,
                author: Pw4A,
                authors: Px4B,
                onshare: bgD8v.g0x(this)
            })
        }
    }();
    b0x.mm4q = function (W0x, bc0x) {
        try {
            top.log(W0x, bc0x)
        } catch (e) {
            switch (W0x) {
                case"play":
                    this.jX3x.eA2x(bc0x);
                    break;
                case"search":
                    this.jX3x.bKi6c(bc0x);
                    break;
                default:
                    this.jX3x.gc2x(W0x, bc0x)
            }
        }
    };
    b0x.bAR4V = function () {
        var Vq5v, bgK8C = false, bs0x = [45, 60];
        var cqx5C = function (bF0x) {
            if (bF0x.title != "MailBoxImport") return;
            var Q0x = JSON.parse(bF0x.content || "null") || X0x;
            if (Q0x.status == 10) {
                n0x.Vy5D.A0x().M0x();
                window.clearTimeout(Vq5v)
            }
        };
        var tl6f = function (d0x) {
            if (d0x.code == 200) {
                if (d0x.status == 1) {
                    h0x.q0x(p0x.zk9b, "message", cqx5C.g0x(this));
                    p0x.zk9b.A0x().bbM7F();
                    bgK8C = true
                } else {
                    if (bgK8C) {
                        if (d0x.status == 10) {
                            n0x.Vy5D.A0x().M0x();
                            h0x.iq3x(p0x.zk9b, "message");
                            window.clearTimeout(Vq5v);
                            bgK8C = false
                        }
                    } else {
                        window.clearTimeout(Vq5v)
                    }
                }
            }
        };
        return function () {
            var rU6O = bs0x.shift() * 1e3;
            v0x.bo0x("/api/musicbox/mail/status", {type: "json", method: "get", onload: tl6f.g0x(this)});
            if (rU6O) {
                Vq5v = window.setTimeout(arguments.callee, rU6O)
            }
        }
    }();
    b0x.tQ6K = function (d0x) {
        try {
            top.polling(d0x)
        } catch (e) {
        }
    }
})()
