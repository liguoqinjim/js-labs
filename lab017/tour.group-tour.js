!function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var a = n(1), o = n(2), r = n(14), s = i(r), l = n(53), c = n(52), d = window.pageData,
        u = (0, a.createStore)(o.reducers, {
            status: d.status,
            adType: d.adType,
            startDate: d.startDate,
            isLogin: d.isLogin,
            productId: d.productId,
            brandId: d.brandId,
            productType: d.productType,
            classBrandId: d.classBrandId,
            destGroupId: d.destGroupId,
            destGroupName: d.destGroupName,
            proMode: d.proMode,
            tagType: d.tagType,
            bookCityCode: d.bookCityCode,
            departCityCode: d.departCityCode,
            backCityCode: d.backCityCode,
            teamCityName: d.teamCityName,
            isSupportMultipleJourney: d.isSupportMultipleJourney,
            multiJourneyBaseInfos: d.multiJourneyBaseInfos,
            journeyId: d.journeyId,
            defaultJourneyId: d.defaultJourneyId,
            defaultJourneyType: d.defaultJourneyType,
            defaultJourneyDetail: d.defaultJourneyDetail,
            operateFlag: d.operateFlag,
            calendar: null,
            departDate: "",
            retailCity: d.signInfo && d.signInfo.company,
            adult: 2,
            child: 0,
            freeChild: 0,
            departCity: {code: d.departCityCode, name: d.departCityName},
            backCity: {code: d.backCityCode, name: d.backCityName},
            hotDepartCities: d.recommendCityList,
            allDepartCities: d.departCityList,
            allBackCities: d.backCityObj,
            allBookCities: d.bookCityObj,
            connection: d.connection,
            includeCombinedPrice: d.includeCombinedPrice,
            connectionDesc: d.connectionDesc,
            connectionIntroduction: d.connectionIntroduction,
            connectionNotice: d.connectionNotice,
            poiId: d.poiId,
            destination: d.destination
        });
    (0, c.add)("INITIALIZED", u.getState()), u.subscribe(function (e) {
        (0, c.add)(e.type, e.data)
    }), s["default"].init(), l.detailModule.init()
}, function (e, t) {
    "use strict";

    function n(e, t) {
        return r || (r = !0, f.addRedecuer(e)), t && (s = Object.assign({}, t)), f
    }

    function i() {
        if (r) return f;
        throw new Error("store hasn't been created!")
    }

    function a(e) {
        for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
            var a = t[i];
            "function" == typeof e[a] && (n[a] = e[a])
        }
        var o = Object.keys(n);
        return function () {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1], i = !1, a = Object.assign({}, e), r = 0; r < o.length; r++) {
                var s = o[r], l = n[s], c = e[s], d = l(c, t);
                a[s] = d, i = i || d !== c
            }
            return i ? a : e
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r = !1, s = {}, l = {}, c = "all", d = !1, u = function () {
        return s
    }, f = {
        getState: function (e) {
            return e ? s[e] : s
        }, subscribe: function (e, t) {
            if (t && !t.startsWith("change:") && (t = "change:" + t), "function" != typeof e) throw new Error("Expected listener to be a function.");
            t = t || c, l[t] = l[t] || [], ~l[t].indexOf(e) || l[t].push(e)
        }, unsubscribe: function (e, t) {
            var n;
            if ("function" != typeof e) throw new Error("Expected listener to be a function.");
            t = t || c, l[t] && (n = l[t].indexOf(e)) && l[t].splice(n, 1)
        }, dispatch: function (e) {
            var t, n;
            if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, t = u(s, e)
            } finally {
                d = !1
            }
            if (t && t !== s) {
                var i = !1, a = {};
                if (n = s, s = t, Object.keys(s).forEach(function (e) {
                        if (n[e] !== s[e]) {
                            var t = l["change:" + e];
                            a[e] = s[e], i = i || !0, t && t.forEach(function (e) {
                                e()
                            })
                        }
                    }), i) {
                    var o = l[c];
                    o && o.forEach(function (t) {
                        t({type: e.type, data: a})
                    })
                }
            }
            return e
        }, addRedecuer: function (e) {
            switch ("undefined" == typeof e ? "undefined" : o(e)) {
                case"function":
                    u = e;
                    break;
                case"object":
                    u = a(e);
                    break;
                default:
                    throw new Error("Expected reducer to be a function.")
            }
        }
    };
    t.createStore = n, t.getStore = i, t.combineReducer = a
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.reducers = void 0;
    var a = n(1), o = n(3), r = n(5), s = i(r), l = n(7), c = n(9), d = i(c);
    t.reducers = (0, a.combineReducer)(Object.assign({}, o.commonReducers, s["default"], l.detailReducers, d["default"]))
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.commonReducers = void 0;
    var a = n(4), o = i(a);
    t.commonReducers = {
        isLogin: function (e, t) {
            return t.type === o.CHANGE_LOGIN_STATUS ? t.data : e
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.CHANGE_LOGIN_STATUS = "CHANGE_LOGIN_STATUS"
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = n(6), o = i(a);
    t["default"] = {
        calendar: function (e, t) {
            return t.type === o.LOAD_CALENDAR ? t.data : e
        }, originCalendar: function (e, t) {
            return t.type === o.LOAD_ORIGIN_CALENDAR ? t.data : e
        }, roomBudget: function (e, t) {
            return t.type === o.LOAD_CALENDAR_ROOM_BUDGET ? t.data : e
        }, departDate: function (e, t) {
            return t.type === o.CHANGE_DEPART_DATE ? t.data : e
        }, departCity: function (e, t) {
            return t.type === o.CHANGE_DEPART_CITY && t.data && t.data.code && t.data.code !== e.code ? t.data : e
        }, backCity: function (e, t) {
            return t.type === o.CHANGE_BACK_CITY && t.data && t.data.code ? t.data : e
        }, adult: function (e, t) {
            return t.type === o.CHANGE_ADULT ? t.data : e
        }, child: function (e, t) {
            return t.type === o.CHANGE_CHILD ? t.data : e
        }, freeChild: function (e, t) {
            return t.type === o.CHANGE_FREE_CHILD ? t.data : e
        }, departDateTarget: function (e, t) {
            return t.type === o.CHANGE_DEPART_DATE_TARGET ? t.data : e
        }, duration: function (e, t) {
            return t.type === o.CHANGE_JOURNEY_DAY ? t.data : e
        }, status: function (e, t) {
            return t.type === o.CHANGE_PRODUCT_STATUS && e != t.data ? t.data : e
        }, currentJourney: function (e, t) {
            return t.type === o.CHANG_DETAIL_JOURNEY ? t.data : e
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.LOAD_CALENDAR = "LOAD_CALENDAR", t.LOAD_ORIGIN_CALENDAR = "LOAD_ORIGIN_CALENDAR", t.LOAD_CALENDAR_ROOM_BUDGET = "LOAD_CALENDAR_ROOM_BUDGET", t.CHANGE_DEPART_DATE = "CHANGE_DEPART_DATE", t.CHANGE_DEPART_CITY = "CHANGE_DEPART_CITY", t.CHANGE_BACK_CITY = "CHANGE_BACK_CITY", t.CHANGE_ADULT = "CHANGE_ADULT", t.CHANGE_CHILD = "CHANGE_CHILD", t.CHANGE_FREE_CHILD = "CHANGE_FREE_CHILD", t.CHANGE_DEPART_DATE_TARGET = "CHANGE_DEPART_DATE_TARGET", t.CHANGE_PRODUCT_STATUS = "CHANGE_PRODUCT_STATUS", t.CHANGE_JOURNEY_DAY = "CHANGE_JOURNEY_DAY"
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.detailReducers = void 0;
    var a = n(8), o = i(a);
    t.detailReducers = {
        currentJourney: function (e, t) {
            return t.type === o.CHANG_DETAIL_JOURNEY ? t.data : e
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.LOAD_COMMENT = "LOAD_COMMENT", t.CHANGE_COMMENT_FILTER = "CHANGE_COMMENT_FILTER", t.CHANG_DETAIL_JOURNEY = "CHANG_DETAIL_JOURNEY"
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(10);
    t["default"] = {
        supplier: function (e, t) {
            return t.type === i.actions.LOAD_SUPPLIER ? t.data : e
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.actions = void 0;
    var a = n(11), o = i(a), r = n(12), s = i(r), l = n(6), c = i(l), d = n(13), u = i(d);
    t.actions = Object.assign({}, o, c, u, s)
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.CHANGE_LOGIN_STATUS = "CHANGE_LOGIN_STATUS"
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.LOAD_SUPPLIER = "LOAD_SUPPLIER", t.LOAD_BRAND_INFO = "LOAD_BRAND_INFO"
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.LOAD_COMMENT = "LOAD_COMMENT", t.CHANGE_COMMENT_FILTER = "CHANGE_COMMENT_FILTER", t.CHANG_DETAIL_JOURNEY = "CHANG_DETAIL_JOURNEY"
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        return $("<div />").append(e.html).addClass("calendar-mask").css(e.offset).css({
            "-webkit-transform": "scale(" + K + ")",
            transform: "scale(" + K + ")"
        })
    }

    function r() {
        function e(e) {
            var t = Math.min(e / Y, 1), n = m * Math.pow(t, 2) + y * t + d, i = g * Math.pow(t, 2) + b * t + u;
            return 1 !== t && {left: n, top: i}
        }

        function t() {
            var o = e(i), r = Math.max(K - i / Y, q);
            o ? (a.css(o).width(l * r).height(c * r).children().css({
                "-webkit-transform": "scale(" + r + ")",
                transform: "scale(" + r + ")"
            }), i += z, setTimeout(t, z)) : n()
        }

        function n() {
            a.remove(), x["default"].enable(), D["default"].flash(), D["default"].update(), V = !1, N.length && r()
        }

        var i = 0, a = void 0, s = void 0, l = void 0, c = void 0, d = void 0, u = void 0, f = void 0, p = void 0,
            h = void 0, v = void 0, m = void 0, y = void 0, g = void 0, b = void 0;
        V || (s = N.shift(), s && s.offset && (a = o(s), a.appendTo("body"), l = a.width(), c = a.height(), B = U.offset(), d = s.offset.left, u = s.offset.top, h = B.left + 70 + l, v = B.top + 12 - c * W / 2, f = (d + h) / 2, p = Math.min(u, v) - 100, m = d - 2 * f + h, y = 2 * (f - d), g = u - 2 * p + v, b = 2 * (p - u), V = !0, x["default"].disable(), t()))
    }

    function s(e, t) {
        var n = u.layer.open({
            type: 1,
            title: !1,
            content: '<div class="dialog-error"><div class="dialog-close"></div><i class="icon"></i>' + e + "</div>",
            area: ["400px", "auto"],
            btn: !1,
            closeBtn: !1,
            success: function (e) {
                e.on("click", ".dialog-close", function () {
                    u.layer.close(n)
                })
            },
            end: function () {
                t && t()
            }
        })
    }

    function l() {
        var e = H.offset();
        if (!e) return !1;
        var t = H.height(), n = L.scrollTop(), i = L.height();
        return Object.assign({}, e, {inView: e.top >= n && e.top + t <= n + i})
    }

    function c() {
        var e = l();
        e && (e.inView || L.scrollTop(e.top - 50), D["default"].flash())
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var d = n(1), u = n(15), f = n(16), p = n(18), h = n(6), v = a(h), m = n(19), y = i(m), g = n(20), b = a(g),
        _ = n(21), x = i(_), j = n(27), w = i(j), C = n(32), D = i(C), k = n(36), T = i(k), I = n(41), M = i(I),
        S = n(49), O = i(S), E = n(51), A = i(E), P = n(52), J = void 0, N = [], L = $(window), R = $(document),
        F = void 0, H = void 0, G = void 0, V = !1, B = void 0, U = void 0, z = 13, Y = 700, W = .5, K = .9, q = .5;
    t["default"] = {
        init: function () {
            J = (0, d.getStore)();
            var e = J.getState("status");
            F = $("#J_Calendar"), H = $("#J_ResourceDate"), U = H, G = $("#J_Form"), 2 != e && (this.initCalendar(), this.initCity(), this.initDate(), this.initTourist(), this.initInstallmentTip(), this.initPriceTip(), O["default"].init({couponReceiveUrl: y["default"].url.couponReceive}), 1 == J.getState("productType") && M["default"].init(J.getState("startDate"))), this.initGallery(), this.initStarTip(), this.initPromotionTip(), this.initJourney(), this.initRecommend(), this.initFeature(), this.initQr(), this.initFavorite(), this.initService(), this.bind();
            var t = {};
            2 != e && 1 == J.getState("productType") && (t.supplier = 1, t.productId = J.getState("productId"), t.destGroupId = J.getState("destGroupId"), t.destGroupName = J.getState("destGroupName")), b.fetch(y["default"].url.aggregation, t)
        }, bind: function () {
            var e = this;
            J.subscribe(function () {
                if ("calendar" === J.getState("departDateTarget")) {
                    var e = J.getState("departDate"), t = F.find('[data-date="' + e + '"]');
                    N.push({date: e, offset: t.offset(), html: t.clone()}), r()
                }
            }, "change:departDate"), J.subscribe(function () {
                var e = J.getState("calendar"), t = J.getState("allDepartCities");
                e && e.length || J.dispatch({type: v.CHANGE_PRODUCT_STATUS, data: t && t.length > 1 ? 3 : 2})
            }, "change:calendar"), J.subscribe(function () {
                e.update()
            }, "change:status"), $(".J_Submit").click(function () {
                return e.submit()
            }), $(".J_SubmitDetail").click(function () {
                return e.submit(!0)
            })
        }, submit: function (e) {
            function t(e, t) {
                G.find("[name=" + e + "]").val(t)
            }

            if (0 != J.getState("status")) return !1;
            var n = J.getState("departDate");
            if (!n) return e ? (c(), D["default"].showDatePicker(), R.trigger("customclick", "date")) : s("请选择日期", c), !1;
            var i = {begin_date: "departDate", user_num: "adult", child_count: "child"};
            for (var a in i) t(a, J.getState(i[a]));
            return 2 == J.getState("proMode") && (t("normalChildCount", J.getState("child")), t("freeChildCount", J.getState("freeChild"))), G.find("[name=from_url]").val(location.href), G.attr("action", y["default"].url.submit({productId: J.getState("productId")})), (0, P.send)(), G.submit(), !0
        }, update: function () {
            var e = J.getState("status"), t = $("#J_ResourcePrice");
            3 == e ? (t.html('\n                <div class="resource-section-item resource-price-item resource-price-saleout">\n                    <div class="resource-price-empty"><strong>当前出发城市暂时无法销售~</strong></div>\n                    <div class="resource-price-other">看看其他出发城市吧</div>\n                </div>\n            '), $(".J_Submit").addClass("disabled"), $("#J_basisInstallment").remove()) : 2 == e && (t.html('\n                <div class="resource-section-item resource-price-item resource-price-saleout">\n                    <div class="resource-price-empty"><strong>当前线路暂时无法销售~</strong></div>\n                    <div class="resource-price-other">可以看看其他相似线路</div>\n                </div>\n            '), $(".J_Submit").addClass("disabled"), $("#J_basisInstallment").remove())
        }, initGallery: function () {
            new f.Gallery("#J_Gallery", {autoChange: !0})
        }, initCalendar: function () {
            x["default"].init({calendarUrl: y["default"].url.calendar})
        }, initCity: function () {
            w["default"].init({pageUrl: y["default"].url.page})
        }, initDate: function () {
            D["default"].init()
        }, initTourist: function () {
            T["default"].init()
        }, initPriceTip: function () {
            var e = $("#J_ResourcePriceTip"), t = $("#" + e.data("for")), n = $("#J_ResourcePromotionPriceTip"),
                i = $("#" + n.data("for"));
            new p.Tip(e, {
                content: $("<div />").append(t.removeClass("tip-content")).html(),
                dialog: {tipsOffset: [10, -27]}
            }), new p.Tip(n, {
                content: $("<div />").append(i.removeClass("tip-content")).html(),
                dialog: {area: ["380px", "auto"], tipsOffset: [10, -27]}
            })
        }, initInstallmentTip: function () {
            new p.Tip($("#J_basisInstallmentMore"), {
                content: $("#T_basisInstallmentTip").html(),
                dialog: {tipsOffset: [10, -2]}
            })
        }, initPromotionTip: function () {
            new p.Tip($("#J_basisPromotionMore"), {
                type: "click",
                content: $("#T_basisPromotionTip").html(),
                dialog: {area: ["290px", "auto"], tipsOffset: [0, -20]}
            })
        }, initRecommend: function () {
            var e = $("#J_ResourceRecommend"), t = e.find(".resource-section-content"),
                n = e.find(".resource-recommend-content-outer"), i = e.find(".resource-recommend-content-inner"),
                a = e.find(".resource-recommend-expand"), o = 72, r = i.height(), s = !1;
            n.height() < r && (e.addClass("fixed").height(o), n.height(o).css("max-height", "none"), a.show(), t.hover(function () {
                n.height(r), e.addClass("expanded"), s = !0
            }, function () {
                n.height(o), e.removeClass("expanded"), s = !1
            }))
        }, initJourney: function () {
            var e = $("#J_ResourceJourney"), t = e.find(".resource-section-content"),
                n = e.find(".resource-section-content-inner"), i = n.children().toArray(), a = t.height(),
                o = n.height();
            if (a < o) {
                n.clone().append('<a href="javascript:;" class="resource-journey-less">收起</a>').addClass("more").appendTo(t), n.addClass("less"), n.append('<a href="javascript:;" class="resource-journey-more" mm="点击_头部区_基本信息__行程概要_展开行程概要">...详细</a>');
                do $(i.pop()).remove(); while (a < n.height());
                e.on("click", ".resource-journey-less", function () {
                    e.removeClass("expand")
                }).on("click", ".resource-journey-more", function () {
                    e.addClass("expand")
                })
            }
        }, initFeature: function () {
            var e = $("#J_basisFeature"), t = e.find(".J_basisFeatureInner"), n = e.find(".J_basisFeatureList"),
                i = t.height(), a = n.height(), o = !1, r = "收起<i></i>", s = "更多<i></i>";
            i < a && $("<div />").addClass("resource-feature-more").html(s).click(function () {
                o ? (t.height(i), $(this).html(s).removeClass("expand"), o = !1) : (t.height(a), $(this).html(r).addClass("expand"), o = !0)
            }).appendTo(t), t.find(".J_basisFeatureItem").each(function () {
                var e = $(this);
                new p.Tip(e, {type: "click", content: e.find("script").html(), dialog: {tipsOffset: [10, -27]}})
            })
        }, initQr: function () {
            $(".J_QR").hover(function () {
                $(this).addClass("expand")
            }, function () {
                $(this).removeClass("expand")
            })
        }, initFavorite: function () {
            A["default"].init({
                checkFavoriteStateUrl: y["default"].url.checkFavoriteState,
                addFavoriteUrl: y["default"].url.addFavorite,
                removeFavoriteUrl: y["default"].url.removeFavorite
            })
        }, initService: function () {
            function e(e) {
                e && e.url && ($(".J_Service").attr({
                    href: e.url,
                    target: "_blank"
                }).show(), window.showHeadTuniuChat ? window.showHeadTuniuChat(e) : window.showHeadTuniuChat = e)
            }

            window.getKefuData ? window.getKefuData(e) : (window.sidebarCallbacks = window.sidebarCallbacks || [], window.sidebarCallbacks.push(e))
        }, initStarTip: function () {
            new p.Tip($("#J_basisStar"), {
                content: $("#T_basisStarTip").html(),
                dialog: {area: ["400px", "auto"], tipsOffset: [10, -27]}
            })
        }
    }
}, function (e, t) {
    /*!

  @Name：layer v2.4 弹层组件
  @Author：贤心
  @Site：http://layer.layui.com
  @License：LGPL

  */
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = {
        getPath: function () {
            var e = document.scripts, t = e[e.length - 1], n = t.src;
            if (!t.getAttribute("merge")) return n.substring(0, n.lastIndexOf("/") + 1)
        }(),
        enter: function (e) {
            13 === e.keyCode && e.preventDefault()
        },
        config: {},
        end: {},
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"]
    }, r = {
        v: "2.4",
        ie6: !!window.ActiveXObject && !window.XMLHttpRequest,
        index: 0,
        path: o.getPath,
        config: function (e, t) {
            var i = 0;
            return e = e || {}, r.cache = o.config = n.extend(o.config, e), r.path = o.config.path || r.path, "string" == typeof e.extend && (e.extend = [e.extend]), r.use("skin/layer.css", e.extend && e.extend.length > 0 ? function a() {
                var n = e.extend;
                r.use(n[n[i] ? i : i - 1], i < n.length ? function () {
                    return ++i, a
                }() : t)
            }() : t), this
        },
        use: function (e, t, i) {
            var a = n("head")[0], e = e.replace(/\s/g, ""), o = /\.css$/.test(e),
                s = document.createElement(o ? "link" : "script"), l = "layui_layer_" + e.replace(/\.|\//g, "");
            if (r.path) return o && (s.rel = "stylesheet"), s[o ? "href" : "src"] = /^http:\/\//.test(e) ? e : r.path + e, s.id = l, n("#" + l)[0] || a.appendChild(s), function c() {
                (o ? 1989 === parseInt(n("#" + l).css("width")) : r[i || l]) ? function () {
                    t && t();
                    try {
                        o || a.removeChild(s)
                    } catch (e) {
                    }
                }() : setTimeout(c, 100)
            }(), this
        },
        ready: function (e, t) {
            var i = "function" == typeof e;
            return i && (t = e), r.config(n.extend(o.config, function () {
                return i ? {} : {path: e}
            }()), t), this
        },
        alert: function (e, t, i) {
            var a = "function" == typeof t;
            return a && (i = t), r.open(n.extend({content: e, yes: i}, a ? {} : t))
        },
        confirm: function (e, t, i, a) {
            var s = "function" == typeof t;
            return s && (a = i, i = t), r.open(n.extend({content: e, btn: o.btn, yes: i, btn2: a}, s ? {} : t))
        },
        msg: function (e, t, i) {
            var a = "function" == typeof t, s = o.config.skin, c = (s ? s + " " + s + "-msg" : "") || "layui-layer-msg",
                d = l.anim.length - 1;
            return a && (i = t), r.open(n.extend({
                content: e,
                time: 3e3,
                shade: !1,
                skin: c,
                title: !1,
                closeBtn: !1,
                btn: !1,
                end: i
            }, a && !o.config.skin ? {skin: c + " layui-layer-hui", shift: d} : function () {
                return t = t || {}, (t.icon === -1 || void 0 === t.icon && !o.config.skin) && (t.skin = c + " " + (t.skin || "layui-layer-hui")), t
            }()))
        },
        load: function (e, t) {
            return r.open(n.extend({type: 3, icon: e || 0, shade: .01}, t))
        },
        tips: function (e, t, i) {
            return r.open(n.extend({
                type: 4,
                content: [e, t],
                closeBtn: !1,
                time: 3e3,
                shade: !1,
                fix: !1,
                maxWidth: 210
            }, i))
        }
    }, s = function (e) {
        var t = this;
        t.index = ++r.index, t.config = n.extend({}, t.config, o.config, e), t.creat()
    };
    s.pt = s.prototype;
    var l = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    l.anim = ["layer-anim", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], s.pt.config = {
        type: 0,
        shade: .3,
        fix: !0,
        move: l[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        shift: 0,
        icon: -1,
        scrollbar: !0,
        tips: 2
    }, s.pt.vessel = function (e, t) {
        var n = this, i = n.index, r = n.config, s = r.zIndex + i, c = "object" === a(r.title),
            d = r.maxmin && (1 === r.type || 2 === r.type),
            u = r.title ? '<div class="layui-layer-title" style="' + (c ? r.title[1] : "") + '">' + (c ? r.title[0] : r.title) + "</div>" : "";
        return r.zIndex = s, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + i + '" times="' + i + '" style="' + ("z-index:" + (s - 1) + "; background-color:" + (r.shade[1] || "#000") + "; opacity:" + (r.shade[0] || r.shade) + "; filter:alpha(opacity=" + (100 * r.shade[0] || 100 * r.shade) + ");") + '"></div>' : "", '<div class="' + l[0] + (" layui-layer-" + o.type[r.type]) + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") + '" id="' + l[0] + i + '" type="' + o.type[r.type] + '" times="' + i + '" showtime="' + r.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + s + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fix ? "" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : u) + '<div id="' + (r.id || "") + '" class="layui-layer-content' + (0 == r.type && r.icon !== -1 ? " layui-layer-padding" : "") + (3 == r.type ? " layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (2 == r.type || 4 == r.type || 1 == r.type && e ? "" : r.content || "") + '</div><span class="layui-layer-setwin">' + function () {
            var e = d ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
            return r.closeBtn && (e += '<a class="layui-layer-ico ' + l[7] + " " + l[7] + (r.title ? r.closeBtn : 4 == r.type ? "1" : "2") + '" href="javascript:;"></a>'), e
        }() + "</span>" + (r.btn ? function () {
            var e = "";
            "string" == typeof r.btn && (r.btn = [r.btn]);
            for (var t = 0, n = r.btn.length; t < n; t++) e += '<a class="' + l[6] + t + '">' + r.btn[t] + "</a>";
            return '<div class="' + l[6] + '">' + e + "</div>"
        }() : "") + "</div>"], u), n
    }, s.pt.creat = function () {
        var e = this, t = e.config, s = e.index, c = t.content,
            d = "object" === ("undefined" == typeof c ? "undefined" : a(c));
        if (!n("#" + t.id)[0]) {
            switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.type) {
                case 0:
                    t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
                    break;
                case 2:
                    var c = t.content = d ? t.content : [t.content || "http://layer.layui.com", "auto"];
                    t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + l[4] + s + '" name="' + l[4] + s + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
                    break;
                case 3:
                    t.title = !1, t.closeBtn = !1, t.icon === -1 && 0 === t.icon, r.closeAll("loading");
                    break;
                case 4:
                    d || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = n("<div />").append(t.content[0], '<i class="layui-layer-TipsG"></i>')[0], t.title = !1, t.tips = "object" === a(t.tips) ? t.tips : [t.tips, !0], t.tipsMore || r.closeAll("tips")
            }
            e.vessel(d, function (i, a) {
                n("body").append(i[0]), d ? function () {
                    2 == t.type || 4 == t.type ? function () {
                        var e = n(i[1]);
                        e.find(".layui-layer-content").append(t.content), n("body").append(e)
                    }() : function () {
                        c.parents("." + l[0])[0] || (c.show().addClass("layui-layer-wrap").wrap(i[1]), n("#" + l[0] + s).find("." + l[5]).before(a))
                    }()
                }() : n("body").append(i[1]), e.layero = n("#" + l[0] + s), t.scrollbar || l.html.css("overflow", "hidden").attr("layer-full", s)
            }).auto(s), 2 == t.type && r.ie6 && e.layero.find("iframe").attr("src", c[0]), n(document).off("keydown", o.enter).on("keydown", o.enter), e.layero.on("keydown", function (e) {
                n(document).off("keydown", o.enter)
            }), 4 == t.type ? e.tips() : e.offset(), t.fix && i.on("resize", function () {
                e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(s), 4 == t.type && e.tips()
            }), t.time <= 0 || setTimeout(function () {
                r.close(e.index)
            }, t.time), e.move().callback(), l.anim[t.shift] && e.layero.addClass(l.anim[t.shift])
        }
    }, s.pt.auto = function (e) {
        function t(e) {
            e = r.find(e), e.height(s[1] - c - d - 2 * (0 | parseFloat(e.css("padding"))))
        }

        var a = this, o = a.config, r = n("#" + l[0] + e);
        "" === o.area[0] && o.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && o.btn && r.width(r.innerWidth()), r.outerWidth() > o.maxWidth && r.width(o.maxWidth));
        var s = [r.innerWidth(), r.innerHeight()], c = r.find(l[1]).outerHeight() || 0,
            d = r.find("." + l[6]).outerHeight() || 0;
        switch (o.type) {
            case 2:
                t("iframe");
                break;
            default:
                "" === o.area[1] ? o.fix && s[1] >= i.height() && (s[1] = i.height(), t("." + l[5])) : t("." + l[5])
        }
        return a
    }, s.pt.offset = function () {
        var e = this, t = e.config, n = e.layero, o = [n.outerWidth(), n.outerHeight()], r = "object" === a(t.offset);
        e.offsetTop = (i.height() - o[1]) / 2, e.offsetLeft = (i.width() - o[0]) / 2, r ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && (e.offsetTop = t.offset, "rb" === t.offset && (e.offsetTop = i.height() - o[1], e.offsetLeft = i.width() - o[0])), t.fix || (e.offsetTop = /%$/.test(e.offsetTop) ? i.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? i.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += i.scrollTop(), e.offsetLeft += i.scrollLeft()), n.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    }, s.pt.tips = function () {
        var e = this, t = e.config, a = e.layero, o = [a.outerWidth(), a.outerHeight()], r = n(t.follow);
        r[0] || (r = n("body"));
        var s = {width: r.outerWidth(), height: r.outerHeight(), top: r.offset().top, left: r.offset().left},
            c = a.find(".layui-layer-TipsG"), d = t.tips[0];
        t.tips[1] || c.remove();
        var u = t.tipsOffset, f = t.arrowOffset || [0, 0], p = 10, h = 10;
        u && ("number" == typeof u ? p = u : u && u.length && (p = void 0 === u[0] ? p : u[0], h = void 0 === u[1] ? h : u[1])), s.autoLeft = function () {
            t.disableAutoLeft !== !0 && s.left + o[0] - i.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], c.css({
                right: 12,
                left: "auto"
            })) : s.tipLeft = s.left + h
        }, s.where = [function () {
            s.autoLeft(), s.tipTop = s.top - o[1] - p, c.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
        }, function () {
            s.tipLeft = s.left + s.width + h, s.tipTop = s.top, c.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
        }, function () {
            s.autoLeft(), s.tipTop = s.top + s.height + p, c.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css({
                "border-right-color": t.tips[1],
                left: s.left + s.width / 2 - s.tipLeft + f[0]
            })
        }, function () {
            s.tipLeft = s.left - o[0] - h, s.tipTop = s.top, c.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
        }], s.where[d - 1](), a.find("." + l[5]).css({
            "background-color": t.tips[1],
            "padding-right": t.closeBtn ? "30px" : ""
        }), a.css({left: s.tipLeft - (t.fix ? i.scrollLeft() : 0), top: s.tipTop - (t.fix ? i.scrollTop() : 0)})
    }, s.pt.move = function () {
        var e = this, t = e.config, a = {
            setY: 0, moveLayer: function () {
                var e = a.layero, t = parseInt(e.css("margin-left")), n = parseInt(a.move.css("left"));
                0 === t || (n -= t), "fixed" !== e.css("position") && (n -= e.parent().offset().left, a.setY = 0), e.css({
                    left: n,
                    top: parseInt(a.move.css("top")) - a.setY
                })
            }
        }, o = e.layero.find(t.move);
        return t.move && o.attr("move", "ok"), o.css({cursor: t.move ? "move" : "auto"}), n(t.move).on("mousedown", function (e) {
            if (e.preventDefault(), "ok" === n(this).attr("move")) {
                a.ismove = !0, a.layero = n(this).parents("." + l[0]);
                var o = a.layero.offset().left, r = a.layero.offset().top, s = a.layero.outerWidth() - 6,
                    c = a.layero.outerHeight() - 6;
                n("#layui-layer-moves")[0] || n("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + o + "px; top:" + r + "px; width:" + s + "px; height:" + c + 'px; z-index:2147483584"></div>'), a.move = n("#layui-layer-moves"), t.moveType && a.move.css({visibility: "hidden"}), a.moveX = e.pageX - a.move.position().left, a.moveY = e.pageY - a.move.position().top, "fixed" !== a.layero.css("position") || (a.setY = i.scrollTop())
            }
        }), n(document).mousemove(function (e) {
            if (a.ismove) {
                var n = e.pageX - a.moveX, o = e.pageY - a.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    a.setY = i.scrollTop();
                    var r = i.width() - a.move.outerWidth(), s = a.setY;
                    n < 0 && (n = 0), n > r && (n = r), o < s && (o = s), o > i.height() - a.move.outerHeight() + a.setY && (o = i.height() - a.move.outerHeight() + a.setY)
                }
                a.move.css({left: n, top: o}), t.moveType && a.moveLayer(), n = o = r = s = null
            }
        }).mouseup(function () {
            try {
                a.ismove && (a.moveLayer(), a.move.remove(), t.moveEnd && t.moveEnd()), a.ismove = !1
            } catch (e) {
                a.ismove = !1
            }
        }), e
    }, s.pt.callback = function () {
        function e() {
            var e = a.cancel && a.cancel(t.index, i);
            e === !1 || r.close(t.index)
        }

        var t = this, i = t.layero, a = t.config;
        t.openLayer(), a.success && (2 == a.type ? i.find("iframe").on("load", function () {
            a.success(i, t.index)
        }) : a.success(i, t.index)), r.ie6 && t.IE6(i), i.find("." + l[6]).children("a").on("click", function () {
            var e = n(this).index();
            if (0 === e) a.yes ? a.yes(t.index, i) : a.btn1 ? a.btn1(t.index, i) : r.close(t.index); else {
                var o = a["btn" + (e + 1)] && a["btn" + (e + 1)](t.index, i);
                o === !1 || r.close(t.index)
            }
        }), i.find("." + l[7]).on("click", e), a.shadeClose && n("#layui-layer-shade" + t.index).on("click", function () {
            r.close(t.index)
        }), i.find(".layui-layer-min").on("click", function () {
            var e = a.min && a.min(i);
            e === !1 || r.min(t.index, a)
        }), i.find(".layui-layer-max").on("click", function () {
            n(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(i)) : (r.full(t.index, a), setTimeout(function () {
                a.full && a.full(i)
            }, 100))
        }), a.end && (o.end[t.index] = a.end)
    }, o.reselect = function () {
        n.each(n("select"), function (e, t) {
            var i = n(this);
            i.parents("." + l[0])[0] || 1 == i.attr("layer") && n("." + l[0]).length < 1 && i.removeAttr("layer").show(), i = null
        })
    }, s.pt.IE6 = function (e) {
        function t() {
            e.css({top: o + (a.config.fix ? i.scrollTop() : 0)})
        }

        var a = this, o = e.offset().top;
        t(), i.scroll(t), n("select").each(function (e, t) {
            var i = n(this);
            i.parents("." + l[0])[0] || "none" === i.css("display") || i.attr({layer: "1"}).hide(), i = null
        })
    }, s.pt.openLayer = function () {
        var e = this;
        r.zIndex = e.config.zIndex, r.setTop = function (e) {
            var t = function () {
                r.zIndex++, e.css("z-index", r.zIndex + 1)
            };
            return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex
        }
    }, o.record = function (e) {
        var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({area: t})
    }, o.rescollbar = function (e) {
        l.html.attr("layer-full") == e && (l.html[0].style.removeProperty ? l.html[0].style.removeProperty("overflow") : l.html[0].style.removeAttribute("overflow"), l.html.removeAttr("layer-full"))
    }, window.layer = r, r.getChildFrame = function (e, t) {
        return t = t || n("." + l[4]).attr("times"), n("#" + l[0] + t).find("iframe").contents().find(e)
    }, r.getFrameIndex = function (e) {
        return n("#" + e).parents("." + l[4]).attr("times")
    }, r.iframeAuto = function (e) {
        if (e) {
            var t = r.getChildFrame("html", e).outerHeight(), i = n("#" + l[0] + e),
                a = i.find(l[1]).outerHeight() || 0, o = i.find("." + l[6]).outerHeight() || 0;
            i.css({height: t + a + o}), i.find("iframe").css({height: t})
        }
    }, r.iframeSrc = function (e, t) {
        n("#" + l[0] + e).find("iframe").attr("src", t)
    }, r.style = function (e, t) {
        var i = n("#" + l[0] + e), a = i.attr("type"), r = i.find(l[1]).outerHeight() || 0,
            s = i.find("." + l[6]).outerHeight() || 0;
        a !== o.type[1] && a !== o.type[2] || (i.css(t), a === o.type[2] && i.find("iframe").css({height: parseFloat(t.height) - r - s}))
    }, r.min = function (e, t) {
        var i = n("#" + l[0] + e), a = i.find(l[1]).outerHeight() || 0;
        o.record(i), r.style(e, {
            width: 180,
            height: a,
            overflow: "hidden"
        }), i.find(".layui-layer-min").hide(), "page" === i.attr("type") && i.find(l[4]).hide(), o.rescollbar(e)
    }, r.restore = function (e) {
        var t = n("#" + l[0] + e), i = t.attr("area").split(",");
        t.attr("type");
        r.style(e, {
            width: parseFloat(i[0]),
            height: parseFloat(i[1]),
            top: parseFloat(i[2]),
            left: parseFloat(i[3]),
            overflow: "visible"
        }), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(l[4]).show(), o.rescollbar(e)
    }, r.full = function (e) {
        var t, a = n("#" + l[0] + e);
        o.record(a), l.html.attr("layer-full") || l.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t), t = setTimeout(function () {
            var t = "fixed" === a.css("position");
            r.style(e, {
                top: t ? 0 : i.scrollTop(),
                left: t ? 0 : i.scrollLeft(),
                width: i.width(),
                height: i.height()
            }), a.find(".layui-layer-min").hide()
        }, 100)
    }, r.title = function (e, t) {
        var i = n("#" + l[0] + (t || r.index)).find(l[1]);
        i.html(e)
    }, r.close = function (e) {
        var t = n("#" + l[0] + e), i = t.attr("type");
        if (t[0]) {
            if (i === o.type[1] && "object" === t.attr("conType")) {
                t.children(":not(." + l[5] + ")").remove();
                for (var a = 0; a < 2; a++) t.find(".layui-layer-wrap").unwrap().hide()
            } else {
                if (i === o.type[2]) try {
                    var s = n("#" + l[4] + e)[0];
                    s.contentWindow.document.write(""), s.contentWindow.close(), t.find("." + l[5])[0].removeChild(s)
                } catch (c) {
                }
                t[0].innerHTML = "", t.remove()
            }
            n("#layui-layer-moves, #layui-layer-shade" + e).remove(), r.ie6 && o.reselect(), o.rescollbar(e), n(document).off("keydown", o.enter), "function" == typeof o.end[e] && o.end[e](), delete o.end[e]
        }
    }, r.closeAll = function (e) {
        n.each(n("." + l[0]), function () {
            var t = n(this), i = e ? t.attr("type") === e : 1;
            i && r.close(t.attr("times")), i = null
        })
    };
    var c = r.cache || {}, d = function (e) {
        return c.skin ? " " + c.skin + " " + c.skin + "-" + e : ""
    };
    r.prompt = function (e, t) {
        e = e || {}, "function" == typeof e && (t = e);
        var i,
            a = 2 == e.formType ? '<textarea class="layui-layer-input">' + (e.value || "") + "</textarea>" : function () {
                return '<input type="' + (1 == e.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (e.value || "") + '">'
            }();
        return r.open(n.extend({
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            content: a,
            skin: "layui-layer-prompt" + d("prompt"),
            success: function (e) {
                i = e.find(".layui-layer-input"), i.focus()
            },
            yes: function (n) {
                var a = i.val();
                "" === a ? i.focus() : a.length > (e.maxlength || 500) ? r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", i, {tips: 1}) : t && t(a, n, i)
            }
        }, e))
    }, r.tab = function (e) {
        e = e || {};
        var t = e.tab || {};
        return r.open(n.extend({
            type: 1, skin: "layui-layer-tab" + d("tab"), title: function () {
                var e = t.length, n = 1, i = "";
                if (e > 0) for (i = '<span class="layui-layer-tabnow">' + t[0].title + "</span>"; n < e; n++) i += "<span>" + t[n].title + "</span>";
                return i
            }(), content: '<ul class="layui-layer-tabmain">' + function () {
                var e = t.length, n = 1, i = "";
                if (e > 0) for (i = '<li class="layui-layer-tabli xubox_tab_layer">' + (t[0].content || "no content") + "</li>"; n < e; n++) i += '<li class="layui-layer-tabli">' + (t[n].content || "no  content") + "</li>";
                return i
            }() + "</ul>", success: function (t) {
                var i = t.find(".layui-layer-title").children(), a = t.find(".layui-layer-tabmain").children();
                i.on("mousedown", function (t) {
                    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    var i = n(this), o = i.index();
                    i.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"), a.eq(o).show().siblings().hide(), "function" == typeof e.change && e.change(o)
                })
            }
        }, e))
    }, r.photos = function (e, t, i) {
        function a(e, t, n) {
            var i = new Image;
            return i.src = e, i.complete ? t(i) : (i.onload = function () {
                i.onload = null, t(i)
            }, void(i.onerror = function (e) {
                i.onerror = null, n(e)
            }))
        }

        var o = {};
        if (e = e || {}, e.photos) {
            var s = e.photos.constructor === Object, l = s ? e.photos : {}, c = l.data || [], u = l.start || 0;
            if (o.imgIndex = (0 | u) + 1, e.img = e.img || "img", s) {
                if (0 === c.length) return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
            } else {
                var f = n(e.photos), p = function () {
                    c = [], f.find(e.img).each(function (e) {
                        var t = n(this);
                        t.attr("layer-index", e), c.push({
                            alt: t.attr("alt"),
                            pid: t.attr("layer-pid"),
                            src: t.attr("layer-src") || t.attr("src"),
                            thumb: t.attr("src")
                        })
                    })
                };
                if (p(), 0 === c.length) return;
                if (t || f.on("click", e.img, function () {
                        var t = n(this), i = t.attr("layer-index");
                        r.photos(n.extend(e, {photos: {start: i, data: c, tab: e.tab}, full: e.full}), !0), p()
                    }), !t) return
            }
            o.imgprev = function (e) {
                o.imgIndex--, o.imgIndex < 1 && (o.imgIndex = c.length), o.tabimg(e)
            }, o.imgnext = function (e, t) {
                o.imgIndex++, o.imgIndex > c.length && (o.imgIndex = 1, t) || o.tabimg(e)
            }, o.keyup = function (e) {
                if (!o.end) {
                    var t = e.keyCode;
                    e.preventDefault(), 37 === t ? o.imgprev(!0) : 39 === t ? o.imgnext(!0) : 27 === t && r.close(o.index)
                }
            }, o.tabimg = function (t) {
                c.length <= 1 || (l.start = o.imgIndex - 1, r.close(o.index), r.photos(e, !0, t))
            }, o.event = function () {
                o.bigimg.hover(function () {
                    o.imgsee.show()
                }, function () {
                    o.imgsee.hide()
                }), o.bigimg.find(".layui-layer-imgprev").on("click", function (e) {
                    e.preventDefault(), o.imgprev()
                }), o.bigimg.find(".layui-layer-imgnext").on("click", function (e) {
                    e.preventDefault(), o.imgnext()
                }), n(document).on("keyup", o.keyup)
            }, o.loadi = r.load(1, {shade: !("shade" in e) && .9, scrollbar: !1}), a(c[u].src, function (t) {
                r.close(o.loadi), o.index = r.open(n.extend({
                    type: 1,
                    area: function () {
                        var i = [t.width, t.height], a = [n(window).width() - 50, n(window).height() - 50];
                        return !e.full && i[0] > a[0] && (i[0] = a[0], i[1] = i[0] * t.height / t.width), [i[0] + "px", i[1] + "px"]
                    }(),
                    title: !1,
                    shade: .9,
                    shadeClose: !0,
                    closeBtn: !1,
                    move: ".layui-layer-phimg img",
                    moveType: 1,
                    scrollbar: !1,
                    moveOut: !0,
                    shift: 5 * Math.random() | 0,
                    skin: "layui-layer-photos" + d("photos"),
                    content: '<div class="layui-layer-phimg"><img src="' + c[u].src + '" alt="' + (c[u].alt || "") + '" layer-pid="' + c[u].pid + '"><div class="layui-layer-imgsee">' + (c.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (i ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (c[u].alt || "") + "</a><em>" + o.imgIndex + "/" + c.length + "</em></span></div></div></div>",
                    success: function (t, n) {
                        o.bigimg = t.find(".layui-layer-phimg"), o.imgsee = t.find(".layui-layer-imguide,.layui-layer-imgbar"), o.event(t), e.tab && e.tab(c[u], t)
                    },
                    end: function () {
                        o.end = !0, n(document).off("keyup", o.keyup)
                    }
                }, e))
            }, function () {
                r.close(o.loadi), r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
                    time: 3e4,
                    btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
                    yes: function () {
                        c.length > 1 && o.imgnext(!0, !0)
                    }
                })
            })
        }
    }, o.run = function () {
        n = jQuery, i = n(window), l.html = n("html"), r.open = function (e) {
            var t = new s(e);
            return t.index
        }
    }, o.run(), t.layer = r
}, function (e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        d.push(e)
    }

    function r(e) {
        var t = d.indexOf(e);
        ~t && d.splice(t, 1)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Gallery = void 0;
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), l = n(17), c = 1, d = [], u = {
        showNav: !0,
        direction: c,
        navDirection: c,
        thumbWidth: 108,
        thumbHeight: 50,
        galleryWidth: 500,
        galleryHeight: 282,
        navOffset: 4,
        navAmountInView: 4,
        navMinLimit: 1,
        selectors: {},
        classNames: {}
    }, f = 5e3, p = 700, h = {
        displayBox: ".gallery-display-box",
        photoItem: ".gallery-photo",
        videoCover: ".gallery-video-cover",
        videoButton: ".gallery-video-button",
        navContainer: ".gallery-nav",
        navPrev: ".gallery-prev",
        navNext: ".gallery-next",
        navMask: ".gallery-mask",
        navList: ".gallery-nav-list"
    }, v = {photoActive: "gallery-photo-active"}, m = function () {
        function e(t) {
            var n = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(this, e), this.option = Object.assign({}, u, i), this.container = $(t), this.selectors = {}, this.classNames = {}, 0 !== this.container.length && (Object.keys(h).forEach(function (e) {
                n.selectors[e] = n.option.selectors[e] || h[e]
            }), Object.keys(v).forEach(function (e) {
                n.classNames[e] = n.option.classNames[e] || v[e]
            }), this.option.pictures ? this.pictures = this.option.pictures.slice() : this.pictures = this.collectPictures(), this.length = this.pictures.length, this.length <= 1 || (this.containerWidth = this.option.galleryWidth, this.containerHeight = this.option.galleryHeight, this.currentIndex = 0, this.nextIndex = 0, this.timer = null, this.navVisible = !1, this.navChanging = !1, this.displayChanging = !1, this.changing = !1, this.hovering = !1, this.videoPlaying = !1, this.option.direction == c ? (this.positionProperty = "left", this.displayChangeStep = this.option.galleryWidth) : (this.positionProperty = "top", this.displayChangeStep = this.option.galleryHeight), this.option.navDirection == c ? (this.navPositionProperty = "left", this.thumbChangeStep = this.option.thumbWidth) : (this.navPositionProperty = "top", this.thumbChangeStep = this.option.thumbHeight), this.initialize(), this.initializeDisplay(), this.length > this.option.navMinLimit && this.option.showNav && this.initializeNav(), this.option.autoChange && this.startAutoChange(), o(this)))
        }

        return s(e, [{
            key: "initialize", value: function () {
                var e = this;
                this.container.hover(function () {
                    e.hovering = !0, e.stopAutoChange()
                }, function () {
                    e.hovering = !1, e.startAutoChange()
                })
            }
        }, {
            key: "collectPictures", value: function () {
                return this.container.find(this.selectors.photoItem).map(function () {
                    var e = $(this);
                    return {
                        picture: e.data("src"),
                        thumb: e.data("thumb"),
                        type: e.data("type"),
                        video: e.data("video"),
                        loaded: !1,
                        element: e
                    }
                }).toArray()
            }
        }, {
            key: "getPicture", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return this.pictures[e]
            }
        }, {
            key: "getNextIndex", value: function () {
                return (this.currentIndex + 1) % this.length
            }
        }, {
            key: "getPrevIndex", value: function () {
                return (this.length + this.currentIndex - 1) % this.length
            }
        }, {
            key: "startAutoChange", value: function () {
                this.stopAutoChange(), this.autoChange()
            }
        }, {
            key: "stopAutoChange", value: function () {
                clearTimeout(this.timer)
            }
        }, {
            key: "autoChange", value: function () {
                var e = this;
                this.videoPlaying || (this.timer = setTimeout(function () {
                    e.change(e.getNextIndex())
                }, f))
            }
        }, {
            key: "change", value: function (e, t) {
                this.changing || e == this.currentIndex || (t || (t = e < this.currentIndex ? -1 : 1), this.nextIndex = e, this.changing = !0, this.videoPlaying = !1, this.changeDisplay(t), this.option.showNav && this.changeNav(), this.currentIndex = this.nextIndex)
            }
        }, {
            key: "endChange", value: function () {
                this.displayChanging || this.navChanging || (this.changing = !1, this.hovering || this.startAutoChange())
            }
        }, {
            key: "initializeNav", value: function () {
                var e, t, n = this, i = this;
                this.container.find(this.selectors.navContainer).length && (e = this.container.find(this.selectors.navList), t = e.children(), this.option.navDirection == c ? e.width(this.length * this.option.thumbWidth) : e.height(this.length * this.option.thumbHeight), this.pictures.forEach(function (e, i) {
                    t.eq(i).click(function () {
                        this.change(i)
                    }.bind(n))
                }), this.container.find(this.selectors.navPrev).click(function () {
                    i.change(i.getPrevIndex(), -1)
                }), this.container.find(this.selectors.navNext).click(function () {
                    i.change(i.getNextIndex(), 1)
                }))
            }
        }, {
            key: "changeNav", value: function () {
                var e, t, n = this, a = this.container.find(this.selectors.navList),
                    o = this.container.find(this.selectors.navMask);
                e = Math.max(0, this.nextIndex - this.option.navAmountInView + 1) * this.thumbChangeStep, t = this.thumbChangeStep * this.nextIndex - e, n.navChanging = !0, o.animate(i({}, this.navPositionProperty, t + this.option.navOffset), p), a.animate(i({}, this.navPositionProperty, -e), p, function () {
                    n.navChanging = !1, n.endChange()
                })
            }
        }, {
            key: "initializeDisplay", value: function () {
                var e = this, t = this, n = this.currentIndex, i = this.containerWidth;
                this.container.find(this.selectors.photoItem).each(function (e) {
                    $(this).css(t.positionProperty, n == e ? 0 : -i)
                }), this.pictures.forEach(function (t) {
                    switch (t.type) {
                        case"video":
                            e.initializeVideo(t)
                    }
                })
            }
        }, {
            key: "createVideo", value: function (e, t, n) {
                return $("<iframe />").attr({frameborder: 0, scrolling: "no", width: t, height: n, src: e})
            }
        }, {
            key: "initializeVideo", value: function (e) {
                function t() {
                    r.resetVideo(e)
                }

                var n = {f: e.video, c: 0, b: 1, p: 1, i: e.picture, e: 0, loaded: "ckLoadedHandler"},
                    i = this.option.galleryWidth, a = this.option.galleryHeight, o = [e.video], r = this,
                    s = e.element.find(this.selectors.videoCover), c = e.element.find(this.selectors.videoButton),
                    d = $("<div />").width(i).height(a);
                d.hide().appendTo(e.element), e.videoContainer = d, e.videoCover = s, window.playerstop = t, c.click(function () {
                    e.videoObject || (l.CKobject.embed(cdnConfig.url + "/site/static/js/plugins/ckplayer/6.8/ckplayer.swf", d[0], "J_Player", i, a, !1, n, o), e.videoObject = l.CKobject.getObjectById("J_Player")), s.hide(), d.show(), $.isPlainObject(e.videoObject) && e.videoObject.videoPlay(), r.videoPlaying = !0, r.stopAutoChange()
                })
            }
        }, {
            key: "resetVideo", value: function (e) {
                e.videoCover.show(), e.videoContainer.hide(), $.isPlainObject(e.videoObject) ? (e.videoObject.videoPause(), e.videoObject.videoSeek(0)) : e.videoObject = null
            }
        }, {
            key: "changeDisplay", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = this,
                    n = this.positionProperty, a = this.getPicture(this.currentIndex),
                    o = this.getPicture(this.nextIndex);
                this.displayChanging = !0, o.element.css(n, e * this.containerWidth), "video" === a.type && this.resetVideo(a), a.element.addClass(this.classNames.photoActive), o.element.addClass(this.classNames.photoActive), this.container.find(this.selectors.displayBox).stop(!0, !0).animate(i({}, n, -this.containerWidth * e), p, function () {
                    $(this).css(n, 0), o.element.css(n, 0), a.element.css(n, -t.containerWidth).removeClass(t.classNames.photoActive), t.displayChanging = !1, t.endChange()
                })
            }
        }, {
            key: "destroy", value: function () {
                r(this)
            }
        }]), e
    }();
    m.create = function () {
        return new (Function.prototype.bind.apply(m.apply, [null].concat(Array.prototype.slice.call(arguments))))
    }, t.Gallery = m
}, function (module, exports) {
    "use strict";

    function ckcpt() {
        var e = "";
        return e
    }

    function ckstyle() {
        var e = {
            cpath: "",
            language: "",
            flashvars: "",
            setup: "1,1,1,1,1,2,0,1,2,0,0,1,200,0,2,1,0,1,1,1,1,10,3,0,1,2,3000,0,0,0,0,1,1,1,1,1,1,250,0,90,0,0,0",
            pm_bg: "0x000000,100,230,180",
            mylogo: "logo.swf",
            pm_mylogo: "1,1,-100,-55",
            logo: "cklogo.png",
            pm_logo: "2,0,-100,20",
            control_rel: "related.swf,ckplayer/related.xml,0",
            control_pv: "Preview.swf,105,2000",
            pm_repc: "",
            pm_spac: "|",
            pm_fpac: "file->f",
            pm_advtime: "2,0,-110,10,0,300,0",
            pm_advstatus: "1,2,2,-200,-40",
            pm_advjp: "1,1,2,2,-100,-40",
            pm_padvc: "2,0,-13,-13",
            pm_advms: "2,2,-46,-67",
            pm_zip: "1,1,-20,-8,1,0,0",
            pm_advmarquee: "1,2,50,-70,50,20,0,0x000000,50,0,20,1,30,2000",
            pm_glowfilter: "1,0x01485d, 100, 6, 3, 10, 1, 0, 0",
            advmarquee: escape('{a href="http://www.ckplayer.com"}{font color="#FFFFFF" size="12" face="Microsoft YaHei"}这里可以放文字广告，播放器默认使用这里设置的广告内容，如果不想在这里使用可以清空这里的内容，如果想在页面中实时定义滚动文字广告内容，可以清空这里的内容，然后在页面中设置广告函数。{/font}{/a}'),
            mainfuntion: "",
            flashplayer: "",
            calljs: "ckplayer_status,ckadjump,playerstop,ckmarqueeadv",
            myweb: escape(""),
            cpt_lights: "1",
            cpt_share: "ckplayer/share.xml",
            cpt_list: ckcpt()
        };
        return e
    }

    Object.defineProperty(exports, "__esModule", {value: !0});
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, CKobject = {
        _K_: function (e) {
            return "string" == typeof e ? document.getElementById(e) : e
        },
        _T_: !1,
        _M_: !1,
        _G_: !1,
        _Y_: !1,
        _I_: null,
        _J_: 0,
        _O_: {},
        uaMatch: function (e, t, n, i, a, o, r, s, l) {
            var c = t.exec(e);
            return null != c ? {b: "IE", v: c[2] || "0"} : (c = n.exec(e), null != c ? {
                b: c[1] || "",
                v: c[2] || "0"
            } : (c = i.exec(e), null != c ? {
                b: c[1] || "",
                v: c[2] || "0"
            } : (c = a.exec(e), null != c ? {
                b: c[1] || "",
                v: c[2] || "0"
            } : (c = o.exec(e), null != c ? {
                b: c[2] || "",
                v: c[1] || "0"
            } : (c = r.exec(e), null != c ? {
                b: c[1] || "",
                v: c[2] || "0"
            } : (c = s.exec(e), null != c ? {
                b: c[1] || "",
                v: c[2] || "0"
            } : (c = l.exec(e), null != c ? {b: c[1] || "", v: c[2] || "0"} : {b: "unknown", v: "0"})))))))
        },
        browser: function () {
            var e = navigator.userAgent, t = /(msie\s|trident.*rv:)([\w.]+)/, n = /(firefox)\/([\w.]+)/,
                i = /(opera).+version\/([\w.]+)/, a = /(chrome)\/([\w.]+)/, o = /version\/([\w.]+).*(safari)/,
                r = /(safari)\/([\w.]+)/, s = /(mozilla)\/([\w.]+)/, l = /(mobile)\/([\w.]+)/, c = e.toLowerCase(),
                d = this.uaMatch(c, t, n, i, a, o, r, s, l);
            if (d.b) var u = d.b, f = d.v;
            return {B: u, V: f}
        },
        Platform: function () {
            var e = "", t = navigator.userAgent, n = (navigator.appVersion, {
                iPhone: t.indexOf("iPhone") > -1 || t.indexOf("Mac") > -1,
                iPad: t.indexOf("iPad") > -1,
                ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
                webKit: t.indexOf("AppleWebKit") > -1,
                trident: t.indexOf("Trident") > -1,
                gecko: t.indexOf("Gecko") > -1 && t.indexOf("KHTML") == -1,
                presto: t.indexOf("Presto") > -1,
                mobile: !!t.match(/AppleWebKit.*Mobile.*/) || !!t.match(/AppleWebKit/),
                webApp: t.indexOf("Safari") == -1
            });
            for (var i in n) if (n[i]) {
                e = i;
                break
            }
            return e
        },
        isHTML5: function () {
            return !!document.createElement("video").canPlayType
        },
        getType: function () {
            return this._T_
        },
        getVideo: function () {
            var e = "", t = this._E_.v;
            if (t && t.length > 1) for (var n = 0; n < t.length; n++) {
                var i = t[n].split("->");
                i.length >= 1 && "" != i[0] && (e += '<source src="' + i[0] + '"'), i.length >= 2 && "" != i[1] && (e += ' type="' + i[1] + '"'), e += ">"
            }
            return e
        },
        getVars: function (e) {
            var t = this._A_;
            return "undefined" == typeof t ? null : e in t ? t[e] : null
        },
        getParams: function () {
            var e = "";
            return this._A_ && (1 == parseInt(this.getVars("p")) && (e += ' autoplay="autoplay"'), 1 == parseInt(this.getVars("e")) && (e += ' loop="loop"'), 2 == parseInt(this.getVars("p")) && (e += ' preload="metadata"'), this.getVars("i") && (e += ' poster="' + this.getVars("i") + '"')), e
        },
        getpath: function (e) {
            var t = "CDEFGHIJKLMNOPQRSTUVWXYZcdefghijklmnopqrstuvwxyz", n = e.substr(0, 1);
            if (t.indexOf(n) > -1 && (e.substr(0, 4) == n + "://" || e.substr(0, 4) == n + ":\\")) return e;
            var i = unescape(window.location.href).replace("file:///", ""), a = parseInt(document.location.port),
                o = document.location.protocol + "//" + document.location.hostname, r = "", s = "", l = "", c = 0,
                d = unescape(e).split("//");
            d.length > 0 && (r = d[0] + "//");
            var u = "http|https|ftp|rtsp|mms|ftp|rtmp|file", f = u.split("|");
            80 != a && a && (o += ":" + a);
            for (var p = 0; p < f.length; p++) if (f[p] + "://" == r) {
                c = 1;
                break
            }
            if (0 == c) if ("/" == e.substr(0, 1)) l = o + e; else {
                s = i.substring(0, i.lastIndexOf("/") + 1).replace("\\", "/");
                var n = e.replace("../", "./"), o = n.split("./"), h = o.length, d = n.replace("./", ""),
                    v = s.split("/"), m = v.length - h;
                for (p = 0; p < m; p++) l += v[p] + "/";
                l += d
            } else l = e;
            return l
        },
        getXhr: function () {
            var e;
            try {
                e = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
                try {
                    e = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {
                    e = !1
                }
            }
            return e || "undefined" == typeof XMLHttpRequest || (e = new XMLHttpRequest), e
        },
        getX: function getX() {
            var f = "ckstyle()";
            this.getVars("x") && 1 != parseInt(this.getVars("c")) && (f = this.getVars("x") + "()");
            try {
                "object" == _typeof(eval(f)) && (this._X_ = eval(f))
            } catch (e) {
                try {
                    "object" == _typeof(eval(ckstyle)) && (this._X_ = ckstyle())
                } catch (e) {
                    this._X_ = ckstyle()
                }
            }
        },
        getSn: function (e, t) {
            return t >= 0 ? this._X_[e].split(",")[t] : this._X_[e];
        },
        getUrl: function (e, t) {
            var n = this, i = ["get", "utf-8"];
            if (e && 2 == e.length) {
                var a = e[0], o = e[1].split("/");
                o.length >= 2 && (i[0] = o[1]), o.length >= 3 && (i[1] = o[2]), this.ajax(i[0], i[1], a, function (e) {
                    if (e && "error" != e) {
                        var i = "", a = e;
                        if (e.indexOf("}") > -1) {
                            for (var o = e.split("}"), r = 0; r < o.length - 1; r++) {
                                i += o[r] + "}";
                                var s = o[r].replace("{", "").split("->");
                                2 == s.length && (n._A_[s[0]] = s[1])
                            }
                            a = o[o.length - 1]
                        }
                        n._E_.v = a.split(","), t ? n.showHtml5() : (n.changeParams(i), n.newAdr())
                    }
                })
            }
        },
        getflashvars: function (e) {
            var t = "", n = 0;
            if (e) for (var i in e) n > 0 && (t += "&"), "f" == i && e[i] && !this.getSn("pm_repc", -1) && (e[i] = this.getpath(e[i]), e[i].indexOf("&") > -1 && (e[i] = encodeURIComponent(e[i]))), "y" == i && e[i] && (e[i] = this.getpath(e[i])), t += i + "=" + e[i], n++;
            return t
        },
        getparam: function (e) {
            var t = "", n = "",
                i = {allowScriptAccess: "always", allowFullScreen: !0, quality: "high", bgcolor: "#000"};
            if (e) for (var a in e) i[a] = e[a];
            for (var o in i) t += o + '="' + i[o] + '" ', n += '<param name="' + o + '" value="' + i[o] + '" />';
            return t = t.replace("movie=", "src="), {w: t, v: n}
        },
        getObjectById: function (e) {
            var t = this;
            if (t._T_) return t._V_ = t._K_(e), t;
            var n = null, i = t._K_(e), a = "embed";
            if (i && "OBJECT" == i.nodeName) if ("undefined" != typeof i.SetVariable) n = i; else {
                var o = i.getElementsByTagName(a)[0];
                o && (n = o)
            }
            return n
        },
        ajax: function (e, t, n, i) {
            var a = this.getXhr(), o = [], r = "";
            "get" == e ? (r = n.indexOf("?") > -1 ? n + "&t=" + (new Date).getTime() : n + "?t=" + (new Date).getTime(), a.open("get", r)) : (o = n.split("?"), n = o[0], r = o[1], a.open("post", n, !0)), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.setRequestHeader("charset", t), "post" == e ? a.send(r) : a.send(null), a.onreadystatechange = function () {
                if (4 == a.readyState) {
                    var e = a.responseText;
                    i("" != e ? e : null)
                }
            }
        },
        addListener: function addListener(e, f) {
            var o = this._V_;
            switch (e) {
                case"time":
                    e = "timeupdate", this.AT = f, f = this.addListenerTime;
                    break;
                case"totaltime":
                    return void(this.ATAll = f)
            }
            if ("string" == typeof f && (f = eval(f)), o.addEventListener) try {
                o.addEventListener(e, f, !1)
            } catch (e) {
                this.getNot()
            } else if (o.attachEvent) try {
                o.attachEvent("on" + e, f)
            } catch (e) {
                this.getNot()
            } else o["on" + e] = f
        },
        removeListener: function removeListener(e, f) {
            var o = this._V_;
            switch (e) {
                case"time":
                    e = "timeupdate", this.AT = null;
                    break;
                case"totaltime":
                    return void(this.ATAll = null)
            }
            if ("string" == typeof f && (f = eval(f)), o.removeEventListener) try {
                o.removeEventListener(e, f, !1)
            } catch (e) {
                this.getNot()
            } else if (o.detachEvent) try {
                o.detachEvent("on" + e, f)
            } catch (e) {
                this.getNot()
            } else o["on" + e] = null
        },
        Flash: function () {
            var e = !1, t = 0;
            if (document.all || this.browser().B.toLowerCase().indexOf("ie") > -1) try {
                var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                e = !0;
                var i = n.GetVariable("$version");
                t = parseInt(i.split(" ")[1].split(",")[0])
            } catch (a) {
            } else if (navigator.plugins && navigator.plugins.length > 0) {
                var n = navigator.plugins["Shockwave Flash"];
                if (n) {
                    e = !0;
                    for (var o = n.description.split(" "), r = 0; r < o.length; ++r) isNaN(parseInt(o[r])) || (t = parseInt(o[r]))
                }
            }
            return {f: e, v: t}
        },
        embed: function (e, t, n, i, a, o, r, s, l, c) {
            var d = ["all"];
            o ? this.isHTML5() ? this.embedHTML5(t, n, i, a, s, r, d, c) : this.embedSWF(e, t, n, i, a, r, l) : this.Flash().f && parseInt(this.Flash().v) > 10 ? this.embedSWF(e, t, n, i, a, r, l) : this.isHTML5() ? this.embedHTML5(t, n, i, a, s, r, d, c) : this.embedSWF(e, t, n, i, a, r, l)
        },
        embedSWF: function (e, t, n, i, a, o, r) {
            n || (n = "ckplayer_a1"), r || (r = {
                bgcolor: "#FFF",
                allowFullScreen: !0,
                allowScriptAccess: "always",
                wmode: "transparent"
            }), this._A_ = o, this.getX();
            var s = "undefined", l = !1, c = document, u = "http://www.macromedia.com/go/getflashplayer",
                f = '<a href="' + u + '" target="_blank">请点击此处下载安装最新的flash插件</a>',
                p = {w: "您的网页不符合w3c标准，无法显示播放器", f: "您没有安装flash插件，无法播放视频，" + f, v: "您的flash插件版本过低，无法播放视频，" + f},
                h = _typeof(c.getElementById) != s && _typeof(c.getElementsByTagName) != s && _typeof(c.createElement) != s,
                v = 'id="' + n + '" name="' + n + '" ', m = "", y = "";
            r.movie = e, r.flashvars = this.getflashvars(o), i == -1 && (d = !0, this._K_(t).style.width = "100%", i = "100%"), m += '<object pluginspage="http://www.macromedia.com/go/getflashplayer" ', m += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ', m += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" ', m += 'width="' + i + '" ', m += 'height="' + a + '" ', m += v, m += 'align="middle">', m += this.getparam(r).v, m += "<embed ", m += this.getparam(r).w, m += ' width="' + i + '" height="' + a + '" name="' + n + '" id="' + n + '" align="middle" ' + v, m += 'type="application/x-shockwave-flash" pluginspage="' + u + '" />', m += "</object>", h ? this.Flash().f ? this.Flash().v < 11 ? (y = p.v, l = !0) : (y = m, this._T_ = !1) : (y = p.f, l = !0) : (y = p.w, l = !0), y && (this._K_(t).innerHTML = y), l && (this._K_(t).style.color = "#0066cc", this._K_(t).style.lineHeight = this._K_(t).style.height, this._K_(t).style.textAlign = "center")
        },
        embedHTML5: function (e, t, n, i, a, o, r, s) {
            this._E_ = {c: e, p: t, w: n, h: i, v: a, s: r, j: !(void 0 != s && !s)}, this._A_ = o, this.getX();
            var l = this.browser().B, c = this.browser().V, d = c.split("."), u = d[0], f = l + c, p = l + u, h = "",
                v = !1, m = this.Flash().f, y = !1;
            r || (r = ["iPad", "iPhone", "ios"]);
            for (var g = 0; g < r.length; g++) {
                if (h = r[g], "all" == h.toLowerCase()) {
                    v = !0;
                    break
                }
                if ("all+false" == h.toLowerCase() && !m) {
                    v = !0;
                    break
                }
                if (h.indexOf("+") > -1 ? (h = h.split("+")[0], y = !0) : y = !1, this.Platform() == h || f == h || p == h || l == h) {
                    if (!y) {
                        v = !0;
                        break
                    }
                    if (!m) {
                        v = !0;
                        break
                    }
                }
            }
            if (v) {
                if (a) {
                    var b = a[0].split("->");
                    if (b && 2 == b.length && b[1].indexOf("ajax") > -1) return void this.getUrl(b, !0)
                }
                this.showHtml5()
            }
        },
        status: function status() {
            this._H_ = parseInt(this.getSn("setup", 20));
            var f = "ckplayer_status";
            "" != this.getSn("calljs", 0) && (f = this.getSn("calljs", 0));
            try {
                if ("function" == typeof eval(f)) return this._L_ = eval(f), this._M_ = !0, !0
            } catch (e) {
                try {
                    if ("function" == typeof eval(ckplayer_status)) return this._L_ = ckplayer_status, this._M_ = !0, !0
                } catch (e) {
                    return !1
                }
            }
            return !1
        },
        showHtml5: function showHtml5() {
            var C = this, p = C._E_.p, a = C._E_.v, c = C._E_.c, j = "", b = !1, s = this._E_.v, w = C._E_.w,
                h = C._E_.h, d = !1, r = "";
            1 == s.length && (r = ' src="' + s[0].split("->")[0] + '"'), w == -1 && (d = !0, C._K_(c).style.width = "100%", w = "100%"), w.toString().indexOf("%") > -1 && (w = "100%"), h.toString().indexOf("%") > -1 && (h = "100%"), C._E_.j && (j = ' controls="controls"');
            var v = "<video" + j + r + ' id="' + p + '" width="' + w + '" height="' + h + '"' + C.getParams() + " webkit-playsinline>" + C.getVideo() + "</video>";
            if (C._K_(c).innerHTML = v, C._K_(c).style.backgroundColor = "#000", C._V_ = C._K_(p), d || (C._K_(c).style.width = C._E_.w.toString().indexOf("%") > -1 ? C._K_(c).offsetWidth * parseInt(C._E_.w) * .01 + "px" : C._V_.width + "px", C._K_(c).style.height = C._E_.h.toString().indexOf("%") > -1 ? C._K_(c).offsetHeight * parseInt(C._E_.h) * .01 + "px" : C._V_.height + "px"), C._P_ = !1, C._T_ = !0, "" != C.getVars("loaded")) {
                var f = C.getVars("loaded") + "()";
                try {
                    "function" == typeof eval(f) && eval(f)
                } catch (e) {
                    try {
                        "function" == typeof eval(loadedHandler) && loadedHandler()
                    } catch (e) {
                    }
                }
            }
            C.status(), C.addListener("play", C.playHandler), C.addListener("pause", C.playHandler), C.addListener("error", C.errorHandler), C.addListener("emptied", C.errorHandler), C.addListener("loadedmetadata", C.loadedMetadataHandler), C.addListener("ended", C.endedHandler), C.addListener("volumechange", C.volumeChangeHandler), ("" != C.getVars("m") && null != C.getVars("m") || parseInt(C.getSn("setup", 0)) > 0) && (C._K_(c).style.cursor = "pointer"), ("" != C.getVars("m") && null != C.getVars("m") || 1 == parseInt(C.getSn("setup", 1))) && C.addListener("click", C.html5Click)
        },
        addListenerTime: function () {
            var e = CKobject;
            e.AT && e.AT(e._V_.currentTime)
        },
        videoPlay: function () {
            this._T_ && this._V_.play()
        },
        videoPause: function () {
            this._T_ && this._V_.pause()
        },
        playOrPause: function () {
            this._T_ && (this._V_.paused ? this._V_.play() : this._V_.pause())
        },
        fastNext: function () {
            this._T_ && (this._V_.currentTime = this._V_.currentTime + 10)
        },
        fastBack: function () {
            this._T_ && (this._V_.currentTime = this._V_.currentTime - 10)
        },
        changeVolume: function (e) {
            e < 0 || e > 100 || this._T_ && (this._V_.volume = .01 * e)
        },
        videoSeek: function (e) {
            this._T_ && (this._V_.currentTime = e)
        },
        newAddress: function (e) {
            var t = [];
            if (e && (t = this.isHtml5New(e), t && this._T_)) {
                this.changeParams(e);
                var n = t[0].split("->");
                if (n && 2 == n.length && n[1].indexOf("ajax") > -1) return void this.getUrl(n, !1);
                this._E_.v = t, this.newAdr()
            }
        },
        quitFullScreen: function () {
            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        },
        changeStatus: function (e) {
            this._H_ = e
        },
        newAdr: function () {
            var e = this._E_.v;
            this._V_.pause(), 1 == e.length ? this._V_.src = e[0].split("->")[0] : this._V_.innerHTML = this.getVideo(), this._V_.load()
        },
        isHtml5New: function (e) {
            if (e.indexOf("html5") == -1) return !1;
            for (var t = e.replace(/{/g, ""), n = t.split("}"), i = "", a = 0; a < n.length; a++) if (n[a].indexOf("html5") > -1) {
                i = n[a].replace("html5->", "").split(",");
                break
            }
            return i
        },
        changeParams: function (e) {
            if (e) for (var t = e.replace(/{/g, ""), n = t.split("}"), i = 0; i < n.length; i++) {
                var a = n[i].split("->");
                if (2 == a.length) switch (a[0]) {
                    case"p":
                        1 == parseInt(a[1]) ? this._V_.autoplay = !0 : 2 == parseInt(a[1]) ? this._V_.preload = "metadata" : (this._V_.autoplay = !1, null != this._I_ && (clearInterval(this._I_), this._I_ = null));
                        break;
                    case"e":
                        1 == parseInt(a[1]) ? this._V_.loop = !0 : this._V_.loop = !1;
                        break;
                    case"i":
                        this._V_.poster = a[1]
                }
            }
        },
        frontAdPause: function (e) {
            this.getNot()
        },
        frontAdUnload: function () {
            this.getNot()
        },
        changeFace: function (e) {
            this.getNot()
        },
        plugin: function (e, t, n, i, a, o, r) {
            this.getNot()
        },
        videoClear: function () {
            this.getNot()
        },
        videoBrightness: function (e) {
            this.getNot()
        },
        videoContrast: function (e) {
            this.getNot()
        },
        videoSaturation: function (e) {
            this.getNot()
        },
        videoSetHue: function (e) {
            this.getNot()
        },
        videoWAndH: function (e, t) {
            this.getNot()
        },
        videoWHXY: function (e, t, n, i) {
            this.getNot()
        },
        changeFlashvars: function (e) {
            this.getNot()
        },
        changeMyObject: function (e, t) {
            this.getNot()
        },
        getMyObject: function (e, t) {
            this.getNot()
        },
        changeeFace: function () {
            this.getNot()
        },
        changeStyle: function (e, t) {
            this.getNot()
        },
        promptLoad: function () {
            this.getNot()
        },
        promptUnload: function () {
            this.getNot()
        },
        marqueeLoad: function (e, t) {
            this.getNot()
        },
        marqueeClose: function (e) {
            this.getNot()
        },
        videoError: function (e) {
            this.getNot()
        },
        formatUrl: function (e) {
            this.getNot()
        },
        sendJS: function (e) {
            this.getNot()
        },
        plugAttribute: function (e) {
            this.getNot()
        },
        errorTextShow: function (e) {
            this.getNot()
        },
        openUrl: function (e) {
            window.open(e)
        },
        jsonParse: function (e) {
            this.getNot()
        },
        promptShow: function (e, t, n) {
            this.getNot()
        },
        screenShot: function (e, t, n, i, a) {
            this.getNot()
        },
        fullScreen: function () {
            this.getNot()
        },
        allowFull: function () {
            this.getNot()
        },
        loadButton: function () {
            this.getNot()
        },
        getFile: function () {
            this.getNot()
        },
        textBoxShow: function () {
            this.getNot()
        },
        loadElement: function () {
            this.getNot()
        },
        textBoxClose: function () {
            this.getNot()
        },
        textBoxTween: function () {
            this.getNot()
        },
        getNot: function () {
            var e = "The ckplayer's API for HTML5 does not exist";
            return e
        },
        volumeChangeHandler: function () {
            var e = CKobject;
            e._V_.muted ? (e.returnStatus("volumechange:0", 1), e._O_.volume = 0, e._O_.mute = !0) : (e._O_.mute = !1, e._O_.volume = 100 * e._V_.volume, e.returnStatus("volumechange:" + 100 * e._V_.volume, 1))
        },
        endedHandler: function endedHandler() {
            var C = CKobject, e = parseInt(C.getVars("e"));
            if (C.returnStatus("ended", 1), C._I_ && (clearInterval(C._I_), C._I_ = null), 0 == e || 4 == e || 6 == e) {
                6 == e && this.quitFullScreen();
                var f = "playerstop()";
                "" != C.getSn("calljs", 2) && (f = C.getSn("calljs", 2) + "()");
                try {
                    if ("function" == typeof eval(f)) return void eval(f)
                } catch (e) {
                    try {
                        if ("function" == typeof eval(playerstop)) return void playerstop()
                    } catch (e) {
                        return
                    }
                }
            }
        },
        loadedMetadataHandler: function () {
            var e = CKobject;
            e.returnStatus("loadedmetadata", 1), e._O_.totalTime = e._V_.duration, e._O_.width = e._V_.width, e._O_.height = e._V_.height, e._O_.awidth = e._V_.videoWidth, e._O_.aheight = e._V_.videoHeight, e._V_.defaultMuted ? (e.returnStatus("volumechange:0", 1), e._O_.mute = !0, e._O_.volume = 0) : (e._O_.mute = !1, e._O_.volume = 100 * e._V_.volume, e.returnStatus("volumechange:" + 100 * e._V_.volume, 1)), 1 == parseInt(e.getVars("p")) && e.playHandler(), e.ATAll && e.ATAll(e._V_.duration)
        },
        errorHandler: function () {
            CKobject.returnStatus("error", 1)
        },
        playHandler: function () {
            var e = CKobject;
            if (e._V_.paused) e.returnStatus("pause", 1), e.addO("play", !1), null != e._I_ && (clearInterval(e._I_), e._I_ = null); else {
                if (e.returnStatus("play", 1), e.addO("play", !0), e._P_ || (e.returnStatus("play", 1), e._P_ = !0), e._I_ = setInterval(e.playTime, parseInt(e.getSn("setup", 37))), !e._G_) {
                    e._G_ = !0;
                    for (var t in e._A_) if ("g" == t && e._A_[t]) {
                        var n = parseInt(e._A_[t]);
                        e.videoSeek(n)
                    }
                }
                if (!e._Y_) {
                    e._Y_ = !0;
                    for (var t in e._A_) if ("j" == t && e._A_[t]) {
                        var i = parseInt(e._A_[t]);
                        i > 0 ? e._J_ = i : e._J_ = parseInt(e._O_.totalTime) + i
                    }
                }
            }
        },
        html5Click: function () {
            var e = CKobject;
            "" != e.getVars("m") && null != e.getVars("m") && window.open(e.getVars("m"))
        },
        returnStatus: function (e, t) {
            var n = e;
            3 == this._H_ && (n = this._E_.p + "->" + n), this._M_ && t <= this._H_ && this._L_(n)
        },
        addO: function (e, t) {
            this._O_[e] = t
        },
        getStatus: function () {
            return this._O_
        },
        playTime: function () {
            var e = CKobject, t = e._V_.currentTime;
            e._O_.time = t, e._J_ > 0 && t > e._J_ && (e._J_ = 0, e.videoSeek(e._O_.totaltime)), e.returnStatus("time:" + t, 1)
        }
    };
    exports.CKobject = CKobject
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a() {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.createTip = t.Tip = void 0;
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(15), s = function () {
        function e(t, n) {
            i(this, e), this._id = (new Date).getTime() + "" + Math.random(), this.$target = t, this.options = Object.assign({
                delay: 100,
                type: "hover"
            }, n), this.dialogOptions = Object.assign({
                type: 4,
                tips: 3,
                shift: 0,
                shade: !1,
                fix: !1,
                closeBtn: !1,
                skin: "layui-layer-rim",
                area: ["300px", "auto"],
                tipsOffset: [10, -27]
            }, this.options.dialog), this.dialogOptions.content = [this.getContent(), this.$target], this.options.delay && this.options.hoverIncludeTip && (this.dialogOptions.success = function (e) {
                var t = this;
                e.hover(function () {
                    clearTimeout(t.timer)
                }, this.close.bind(this))
            }.bind(this)), "click" === this.options.type && (this.dialogOptions.success = function (e) {
                e.click(function (e) {
                    e.stopPropagation()
                })
            }), this.dialog = null, this.timer = null, this.visible = !1, this.bind()
        }

        return o(e, [{
            key: "bind", value: function () {
                switch (this.options.type) {
                    case"click":
                        this.$target.click(this.toggle.bind(this)).click(function (e) {
                            $(document).trigger("customclick", this._id), e.stopPropagation()
                        }.bind(this)), $(document).click(this.close.bind(this)).on("customclick", function (e, t) {
                            t !== this._id && this.close()
                        }.bind(this));
                        break;
                    case"hover":
                    default:
                        this.$target.hover(this.open.bind(this), this.close.bind(this))
                }
            }
        }, {
            key: "getContent", value: function () {
                return "function" == typeof this.options.content ? this.options.content() : this.options.content
            }
        }, {
            key: "toggle", value: function () {
                this.visible ? this.close() : this.open()
            }
        }, {
            key: "open", value: function () {
                var e = this;
                $.isFunction(this.options.width) && (this.dialogOptions.area[0] = this.options.width() + "px"), this.options.delay && "click" !== this.options.type ? (clearTimeout(this.timer), this.timer = setTimeout(function () {
                    e.visible || (e.dialog = r.layer.open(e.dialogOptions), e.visible = !0)
                }, this.options.delay)) : (this.dialog = r.layer.open(this.dialogOptions), this.$target.addClass("expand"), this.visible = !0)
            }
        }, {
            key: "close", value: function () {
                var e = this;
                this.options.delay && this.options.hoverIncludeTip ? (clearTimeout(this.timer), this.timer = setTimeout(function () {
                    r.layer.close(e.dialog), e.visible = !1
                }, this.options.delay)) : (r.layer.close(this.dialog), this.$target.removeClass("expand"), clearTimeout(this.timer), this.visible = !1)
            }
        }]), e
    }();
    t.Tip = s, t.createTip = a
}, function (e, t) {
    "use strict";

    function n() {
        var e = location.href, t = /\brefresh\b/.test(e);
        return !t && window.pageData && (t = !!window.pageData.refresh), t
    }

    function i(e) {
        return n() && (e += e.indexOf("?") === -1 ? "?" : "&", e += a), e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = "refresh=1", o = window.siteHost || "http://www.tuniu.com";
    t["default"] = {
        host: o, url: {
            submit: function (e) {
                return o + "/book/" + e.productId + "/step1"
            }, calendar: function () {
                return "/tour/api/calendar"
            }, getJourneyById: function () {
                return i("/tour/api/journeyInfo")
            }, visa: function (e) {
                var t = ["/papi/product/visa"];
                return ["productId", "bookCityCode", "departCityCode"].every(function (n) {
                    if (e[n]) return t.push("/" + e[n]), !0
                }), i(t.join(""))
            }, upgrade: function (e) {
                var t = ["/papi/product/upgrade"];
                return ["productId", "bookCityCode", "departCityCode"].every(function (n) {
                    if (e[n]) return t.push("/" + e[n]), !0
                }), i(t.join(""))
            }, visaSend: function () {
                return i("/papi/product/visaSend")
            }, visaPrint: function (e) {
                var t = Object.keys(e).map(function (t) {
                    var n = e[t];
                    return !!n && (Array.isArray(n) ? t + "=" + n.map(function (e) {
                        return e.id + ":" + e.name
                    }).join(",") : t + "=" + n)
                }).filter(function (e) {
                    return e
                }).join("&");
                return o + "/tn?r=visa/VisaDetail/ShowEmailTemplate&" + t
            }, couponReceive: function (e) {
                return i("/papi/product/couponReceive/" + e.couponId)
            }, remarkStatus: function () {
                return i("/papi/product/remarkStatus")
            }, remarkList: function () {
                return i("/papi/product/remarkList")
            }, comment: function () {
                return "/package/api/comment"
            }, recommend: function () {
                return "/package/api/recommend"
            }, guide: function (e) {
                return i(["/papi/product/guide", e.productId].join("/"))
            }, retail: function (e) {
                return i(["/papi/product/retail", e.bookCode].join("/"))
            }, login: function () {
                return "http://www.tuniu.com/u/login"
            }, loginDialog: function () {
                var e = location.host, t = e.split(".")[0];
                return "https://passport.tuniu.com/login/iframe?origin=" + encodeURIComponent("http://www.tuniu.com/ssoConnect/Iframe?reload=detail&domain=" + t)
            }, ask: function (e) {
                return i(["/papi/product/ask", e.productId].join("/"))
            }, checkName: function (e) {
                return i(["/papi/product/checkName", e.identify].join("/"))
            }, addAsk: function () {
                return i("/papi/product/addAsk")
            }, qa: function () {
                return i("/papi/product/qa")
            }, related: function () {
                return i("/papi/product/related")
            }, checkFavoriteState: function () {
                return i("/papi/product/checkFavoriteState")
            }, addFavorite: function () {
                return i("/papi/product/addFavorite")
            }, removeFavorite: function () {
                return i("/papi/product/removeFavorite")
            }, supplier: function () {
                return i("/papi/product/supplier")
            }, aggregation: function () {
                return i("/papi/product/aggregation")
            }, page: function (e) {
                var t = ["/tour", e.productId, e.bookCity, e.departCity, e.backCity].join("/");
                return e.userTel && (t += "?user_tel=" + e.userTel), i(t)
            }, trace: function () {
                return "/xapi/track"
            }
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a(e) {
        var t = e.displayDestGroupName || "该类";
        return e.rows.map(function (e) {
            var n = (e.satisfactionInfo || [])[0];
            return n && (e.statis = Math.round(100 * (n.satisfactionNum || 0)), e.deltaSign = 0 == n.satisfactionDifference ? 0 : n.satisfactionDifference / Math.abs(n.satisfactionDifference), e.delta = Math.round(Math.abs(1e3 * n.satisfactionDifference) || 0) / 10, e.adType = n.adType, e.displayDestGroupName = t), e
        }).filter(function (e) {
            return e.statis
        })
    }

    function o(e, t) {
        $.ajax({
            url: e(), data: t, success: function (e) {
                e && e.success && e.data && e.data.supplier && (0, r.getStore)().dispatch({
                    type: l.LOAD_SUPPLIER,
                    data: a(e.data.supplier)
                })
            }
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.fetch = o;
    var r = n(1), s = n(12), l = i(s)
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e) {
        return K.lastIndex = 0, K.exec(String(e))
    }

    function r(e) {
        return q.lastIndex = 0, q.exec(String(e))
    }

    function s(e) {
        var t = X.getState("calendar");
        return t.some(function (t) {
            return t.departDate === e
        })
    }

    function l(e) {
        return String(e).replace(/\-/g, "/")
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        e = String(e);
        for (var n = Math.max(t - e.length, 0); n > 0; n--) e = "0" + e;
        return e
    }

    function d(e) {
        return [e.getFullYear(), c(e.getMonth() + 1), c(e.getDate())].join(G)
    }

    function u(e) {
        return "string" == typeof e && (e = new Date(l(e))), [e.getFullYear(), c(e.getMonth() + 1)].join(G)
    }

    function f() {
        var e = X.getState("departDate"), t = p();
        return e <= t.end && e >= t.start
    }

    function p() {
        var e = {}, t = [], n = l(te + "-01"), i = new Date(n), a = new Date(n), o = void 0, r = void 0;
        for (i.setDate(i.getDate() - i.getDay()), a = new Date(i.getTime()), a.setDate(a.getDate() + V - 1), e.start = d(i), e.end = d(a), o = new Date(l(e.start)); o <= a;) r = d(o), t.push({
            fullDate: r,
            year: o.getFullYear(),
            month: o.getMonth(),
            date: o.getDate(),
            isInCurrentMonth: ~r.indexOf(te)
        }), o.setDate(o.getDate() + 1);
        return e.all = t, e
    }

    function h() {
        var e = p(), t = {};
        return X.getState("calendar").filter(function (t) {
            return t.departDate >= e.start && t.departDate <= e.end
        }).forEach(function (e) {
            t[e.departDate] = e
        }), {all: e.all, date: t}
    }

    function v() {
        var e = X.getState("calendar");
        return Z = {}, e && e.forEach(function (e) {
            var t = u(e.departDate);
            e.isRealTimePrice ? Z[t] || (Z[t] = 1 / 0) : Z[t] = Math.min(e.startPrice, Z[t] || 1 / 0)
        }), Z
    }

    function m() {
        var e = X.getState("calendar");
        if (e && e.length) return u(e[0].departDate)
    }

    function y() {
        var e, t, n = [], i = new Date(l(ee + "-01"));
        for (t = 0; t < U; t++) e = u(i), e >= ne && e <= ie && n.push({
            month: e,
            price: Z[e]
        }), i.setMonth(i.getMonth() + 1);
        return n
    }

    function g(e) {
        var t = new Date(l(ee + "-01"));
        return t.setMonth(t.getMonth() + e), u(t)
    }

    function b(e, t) {
        var n = o(e), i = o(t), a = n[1], r = n[2], s = i[1], l = i[2];
        return 12 * (a - s) + (r - l)
    }

    function _(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = new Date(l(e + "-01"));
        return n.setMonth(n.getMonth() + t), u(n)
    }

    function x(e) {
        var t = b(e, Q), n = Math.floor(t / U), i = new Date(l(Q + "-01"));
        return i.setMonth(i.getMonth() + n * U), u(i)
    }

    function j(e) {
        var t = X.getState("calendar"), n = null;
        return t && t.length && t.some(function (t) {
            if (t.departDate === e) return n = t, !0
        }), n
    }

    function w() {
        var e = X.getState("calendar")[0];
        return e ? u(e.departDate) : null
    }

    function C() {
        var e = X.getState("calendar"), t = e[e.length - 1];
        return t ? u(t.departDate) : _(ne, 3)
    }

    function D(e) {
        return !!(o(e) && e >= ne && e <= ie) && (te = e, !0)
    }

    function k() {
        oe.removeClass("loading").find(".calendar-loading-mask").remove()
    }

    function T(e) {
        return (ae || []).filter(function (t) {
            var n = t.planDate;
            return !Array.isArray(n) || !n.length || n.some(function (t) {
                return e === t
            })
        })
    }

    function I(e) {
        return e && e.forEach(function (e) {
            if (e) {
                var t = T(e.departDate), n = e.strategyIndex, i = (e.strategyDtos || [])[n] || {};
                e.isPromotion = t.some(function (e) {
                    return 14 === e.type
                }), e.promotionPrice = i.coupon, e.promotions = t
            }
        }), e
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var M = n(1), S = n(22), O = n(15), E = n(6), A = a(E), P = n(23), J = i(P), N = n(24), L = i(N), R = n(25),
        F = i(R), H = n(26), G = "-", V = 42, B = d(new Date), U = 4, z = S.template.compile(F["default"]), Y = 200,
        W = void 0, K = /^(\d{4})\-(\d{2})$/, q = /^(\d{4})\-(\d{2})\-(\d{2})$/, X = void 0, Z = void 0, Q = void 0,
        ee = void 0, te = void 0, ne = void 0, ie = void 0, ae = [], oe = void 0, re = void 0, se = void 0, le = !1;
    t["default"] = {
        init: function (e) {
            var t = this;
            W = e, oe = $("#J_Calendar"), X = (0, M.getStore)(), X.subscribe(function () {
                t.load()
            }, "change:calendar"), X.subscribe(function () {
                f() || (te = u(new Date(l(X.getState("departDate")))), ee = x(te)), t.render()
            }, "change:departDate"), Q = u(new Date), this.fetch()
        }, bind: function () {
            var e = this;
            oe.on("click", ".calendar-date-enabled", function (t) {
                e.changeDepart($(this).data("date")), (0, H.record)("点击_头部区_价格日历_团期日历_选择团期", t)
            }).on("mouseenter", ".calendar-date-enabled", function () {
                var t = $(this), n = t.data("date");
                clearTimeout(se), se = setTimeout(function () {
                    e.showDateDetail(n, t)
                }, Y)
            }).on("mouseleave", ".calendar-date-enabled", function () {
                clearTimeout(se), e.hideDateDetail($(this).data("date"))
            }).on("click", ".calendar-month", function (t) {
                e.changeMonth($(this).data("month")), (0, H.record)("点击_头部区_价格日历_团期月份_切换月份", t)
            }).on("click", ".calendar-prev", function () {
                e.goNextMonth(-1)
            }).on("click", ".calendar-next", function () {
                e.goNextMonth()
            }), b(ie, ne) <= 3 ? oe.find(".calendar-prev, .calendar-next").remove() : oe.find(".calendar-prev, .calendar-next").show()
        }, fetch: function (e) {
            var t = void 0, n = {
                productId: X.getState("productId"),
                bookCityCode: X.getState("bookCityCode") || void 0,
                departCityCode: X.getState("departCityCode") || void 0,
                backCityCode: X.getState("backCityCode") || void 0
            };
            e = e || 0, t = W.calendarUrl(), $.ajax({dataType: "json", url: t, data: n}).done(function (e) {
                var t = {};
                e && e.success && e.data && (t = e.data), ae = t.promotions || [], X.dispatch({
                    type: A.LOAD_CALENDAR_ROOM_BUDGET,
                    data: t.roomAddBudget || {}
                }), X.dispatch({type: A.LOAD_ORIGIN_CALENDAR, data: t}), X.dispatch({
                    type: A.LOAD_CALENDAR,
                    data: I(t.calendars) || []
                })
            }).fail(function () {
                e <= 5 ? this.fetch(e + 1) : X.dispatch({type: A.LOAD_CALENDAR, data: []})
            }.bind(this))
        }, load: function () {
            window.PERFORMANCE && window.d && (window.PERFORMANCE.r = (new Date).getTime() - window.d.getTime()), te = m() || Q, ee = x(te), Z = v(), ne = w() || Q, ie = C() || Q, ee = ee < ne ? ne : ee, oe.removeClass("loading"), this.bind(), this.render(), k()
        }, changeMonth: function (e) {
            D(e) && this.render()
        }, goNextMonth: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            D(_(te, e)) && (this.changeMonthGroup(e), this.render())
        }, changeMonthGroup: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = b(te, ee), n = void 0;
            t < 4 && t >= 0 || (n = g(e), n < ne && (n = ne), n > ie && (n = ie), ee = n)
        }, changeDepart: function (e) {
            !le && r(e) && s(e) && (X.dispatch({
                type: A.CHANGE_DEPART_DATE_TARGET,
                data: "calendar"
            }), X.dispatch({type: A.CHANGE_DEPART_DATE, data: e}))
        }, render: function () {
            this.renderMonth(), this.renderDate()
        }, renderMonth: function () {
            te <= ne ? oe.find(".calendar-prev").addClass("calendar-prev-disabled") : oe.find(".calendar-prev").removeClass("calendar-prev-disabled"), te >= ie ? oe.find(".calendar-next").addClass("calendar-next-disabled") : oe.find(".calendar-next").removeClass("calendar-next-disabled"), oe.find(".calendar-months").html(S.template.compile(J["default"])({
                list: y(),
                current: te,
                nonEmptyMonth: Z,
                infinity: 1 / 0
            }))
        }, renderDate: function () {
            var e = h();
            e.current = X.getState("departDate"), e.today = B, oe.find(".calendar-dates").html(S.template.compile(L["default"])(e))
        }, hideDateDetail: function () {
            O.layer.close(re)
        }, showDateDetail: function (e, t) {
            var n = j(e);
            n && (n.roomBudget = X.getState("roomBudget")[e], this.openDateDetail(n, t))
        }, openDateDetail: function (e, t) {
            re = O.layer.open({
                type: 4,
                skin: "layui-layer-rim",
                area: ["auto", "auto"],
                content: [z(Object.assign({}, e)), t],
                tips: 3,
                shade: !1,
                fix: !1,
                closeBtn: !1,
                tipsOffset: [-1, -1]
            })
        }, disable: function () {
            le = !0
        }, enable: function () {
            le = !1
        }
    }
}, function (e, t) {
    "use strict";

    /*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
    function n(e) {
        return e.replace(j, "").replace(w, ",").replace(C, "").replace(D, "").replace(k, "").split(T)
    }

    function i(e) {
        return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }

    function a(e, t) {
        function a(e) {
            return f += e.split(/\n/).length - 1, d && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), e && (e = v[1] + i(e) + v[2] + "\n"), e
        }

        function o(e) {
            var i = f;
            if (c ? e = c(e, t) : r && (e = e.replace(/\n/g, function () {
                    return f++, "$line=" + f + ";"
                })), 0 === e.indexOf("=")) {
                var a = u && !/^=[=#]/.test(e);
                if (e = e.replace(/^=[=#]?|[\s;]*$/g, ""), a) {
                    var o = e.replace(/\s*\([^\)]+\)/, "");
                    m[o] || /^(include|print)$/.test(o) || (e = "$escape(" + e + ")")
                } else e = "$string(" + e + ")";
                e = v[1] + e + v[2]
            }
            return r && (e = "$line=" + i + ";" + e), _(n(e), function (e) {
                if (e && !p[e]) {
                    var t;
                    t = "print" === e ? b : "include" === e ? x : m[e] ? "$utils." + e : y[e] ? "$helpers." + e : "$data." + e, j += e + "=" + t + ",", p[e] = !0
                }
            }), e + "\n"
        }

        var r = t.debug, s = t.openTag, l = t.closeTag, c = t.parser, d = t.compress, u = t.escape, f = 1,
            p = {$data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1}, h = "".trim,
            v = h ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            g = h ? "$out+=text;return $out;" : "$out.push(text);",
            b = "function(){var text=''.concat.apply('',arguments);" + g + "}",
            x = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + g + "}",
            j = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (r ? "$line=0," : ""), w = v[0],
            C = "return new String(" + v[3] + ");";
        _(e.split(s), function (e) {
            e = e.split(l);
            var t = e[0], n = e[1];
            1 === e.length ? w += a(t) : (w += o(t), n && (w += a(n)))
        });
        var D = j + w + C;
        r && (D = "try{" + D + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + i(e) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var k = new Function("$data", "$filename", D);
            return k.prototype = m, k
        } catch (T) {
            throw T.temp = "function anonymous($data,$filename) {" + D + "}", T
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r = function (e, t) {
        return "string" == typeof t ? b(t, {filename: e}) : c(e, t)
    };
    r.version = "3.0.0", r.config = function (e, t) {
        s[e] = t
    };
    var s = r.defaults = {openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null},
        l = r.cache = {};
    r.render = function (e, t) {
        return b(e, t)
    };
    var c = r.renderFile = function (e, t) {
        var n = r.get(e) || g({filename: e, name: "Render Error", message: "Template not found"});
        return t ? n(t) : n
    };
    r.get = function (e) {
        var t;
        if (l[e]) t = l[e]; else if ("object" == ("undefined" == typeof document ? "undefined" : o(document))) {
            var n = document.getElementById(e);
            if (n) {
                var i = (n.value || n.innerHTML).replace(/^\s*|\s*$/g, "");
                t = b(i, {filename: e})
            }
        }
        return t
    };
    var d = function $(e, t) {
        return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : o(e), "number" === t ? e += "" : e = "function" === t ? $(e.call(e)) : ""), e
    }, u = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, f = function (e) {
        return u[e]
    }, p = function (e) {
        return d(e).replace(/&(?![\w#]+;)|[<>"']/g, f)
    }, h = Array.isArray || function (e) {
        return "[object Array]" === {}.toString.call(e)
    }, v = function (e, t) {
        var n, i;
        if (h(e)) for (n = 0, i = e.length; i > n; n++) t.call(e, e[n], n, e); else for (n in e) t.call(e, e[n], n)
    }, m = r.utils = {$helpers: {}, $include: c, $string: d, $escape: p, $each: v};
    r.helper = function (e, t) {
        y[e] = t
    };
    var y = r.helpers = m.$helpers;
    r.onerror = function (e) {
        var t = "Template Error\n\n";
        for (var n in e) t += "<" + n + ">\n" + e[n] + "\n\n";
        "object" == ("undefined" == typeof console ? "undefined" : o(console)) && console.error(t)
    };
    var g = function (e) {
            return r.onerror(e), function () {
                return "{Template Error}"
            }
        }, b = r.compile = function (e, t) {
            function n(n) {
                try {
                    return new r(n, o) + ""
                } catch (i) {
                    return t.debug ? g(i)() : (t.debug = !0, b(e, t)(n))
                }
            }

            t = t || {};
            for (var i in s) void 0 === t[i] && (t[i] = s[i]);
            var o = t.filename;
            try {
                var r = a(e, t)
            } catch (c) {
                return c.filename = o || "anonymous", c.name = "Syntax Error", g(c)
            }
            return n.prototype = r.prototype, n.toString = function () {
                return r.toString()
            }, o && t.cache && (l[o] = n), n
        }, _ = m.$each,
        x = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        j = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        w = /[^\w$]+/g, C = new RegExp(["\\b" + x.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        D = /^\d[^,]*|,\d[^,]*/g, k = /^,+|,+$/g, T = /^$|,+/, I = r;
    t.template = I
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<ul>\n    <% for (var i = 0; i < list.length; i++) { %>\n        <% var item = list[i] %>\n        <li data-month="<%= item.month %>"\n            class="calendar-month\n            <% if (item.month === current) { %>calendar-month-active<% } %>\n            <% if (!item.price) { %>calendar-month-empty<% } %>">\n            <div class="calendar-month-date"><%= item.month.replace(\'-\', \'年\') + \'月\' %></div>\n            <% if (item.price) { %>\n                <% if (item.price < infinity) { %>\n                    <div class="calendar-month-price">&yen;<%= item.price %>起</div>\n                <% } else { %>\n                    <div class="calendar-month-price">实时计价</div>\n                <% } %>\n            <% } else { %>\n                <div class="calendar-month-none-price">无团期</div>\n            <% } %>\n        </li>\n    <% } %>\n</ul>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = "\n    <ul>\n        <% var weeks = ['sun', 'mon', 'tue', 'mon', 'thu', 'fri', 'sat']; %>\n        <% for(var i = 0; i < all.length; i++) { %>\n            <%\n                var currentDateObj = all[i];\n                var currentDate = currentDateObj.fullDate;\n                var dateObj = date[currentDate];\n            %>\n            <li data-date=\"<%= currentDate %>\"\n                class=\"calendar-date\n                    calendar-date-<%= weeks[i % 7] %>\n                    <%= (dateObj && currentDateObj.isInCurrentMonth) ? 'calendar-date-enabled' : ''%>\n                    <%= (currentDate === current && currentDateObj.isInCurrentMonth) ? 'calendar-date-active' : ''%>\n                    <%= currentDateObj.isInCurrentMonth ? '' : 'calendar-date-other'%>\">\n                <span class=\"calendar-date-number\">\n                    <%\n                    if (currentDate == today) {\n                        %>今天<%\n                    } else if (currentDate == backDate) {\n                        %>归来<%\n                    } else { %>\n                        <%= currentDateObj.date %>\n                    <% } %>\n                </span>\n                <% if (currentDateObj.isInCurrentMonth) { %>\n                    <div class=\"calendar-date-tag\">\n                        <% if (dateObj && dateObj.isPromotion) { %>\n                            <span class=\"calendar-date-tag-item calendar-date-tag-promotion\"></span>\n                        <% } %>\n                        <% if (dateObj && dateObj.setGroupFlag && dateObj.setGroupFlag === 1) { %>\n                            <span class=\"calendar-date-tag-item calendar-date-tag-tie\"></span>\n                        <% } %>\n                    </div>\n                    <div class=\"calendar-date-group\">\n                        <% if(dateObj && dateObj.setGroupFlag === 2 && dateObj.flightTicketType == 1) {%>\n                            已成团\n                        <% } %>\n                    </div>\n\n                    <div class=\"calendar-date-content\">\n                        <% if (dateObj) { %>\n                            <div class=\"calendar-date-rest\">\n                                <% if(dateObj.setGroupFlag === 2 && dateObj.flightTicketType != 1) {%>\n                                    已成团\n                                <% } %>\n                                <% if (dateObj.flightTicketType == 2) { %>\n                                    <% if (dateObj.isRealTimePrice != 1) { %>\n                                        实时\n                                    <% } else { %>\n                                        &nbsp;\n                                    <% } %>\n                                <% } else if (dateObj.stockInfo && dateObj.stockInfo.stockNum > 0) { %>\n                                    <% if(dateObj.flightTicketType == 1) { %>\n                                        位置有\n                                    <% } else if (dateObj.stockInfo.stockNum <= 9) { %>\n                                        余<%= dateObj.stockInfo.stockNum %>\n                                    <% } else { %>\n                                        充足\n                                    <% } %>\n                                <% } else { %>\n                                    &nbsp;\n                                <% } %>\n                            </div>\n                            <% if (dateObj.isRealTimePrice == 1) { %>\n                                <div class=\"calendar-date-price\">实时计价</div>\n                            <% } else {%>\n                                <div class=\"calendar-date-price\">&yen;<%= dateObj.startPrice %>起</div>\n                            <% } %>\n                        <% } %>\n                    </div>\n                <% } %>\n            </li>\n        <% } %>\n\n    </ul>\n"
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<div class="calendar-detail">\n    <div class="calendar-detail-price">\n        <% if (isRealTimePrice) { %>\n            实时计价\n        <% } else { %>\n            <% if (tuniuPrice) { %>\n                <span>成人价：<strong>&yen;<%= tuniuPrice %></strong></span>\n            <% } %>\n\n            <% if(excludeChildFlag) { %>\n                <span>不支持儿童预订</span>\n            <% } else if(tuniuChildPrice) { %>\n                <span>儿童价：<strong>&yen;<%= tuniuChildPrice %></strong></span>\n            <% } %>\n\n            <% if (roomBudget) { %>\n                <span>单房差：<strong>&yen;<%= roomBudget %></strong></span>\n            <% } %>\n        <% } %>\n\n    </div>\n\n    <% if (isRealTimePrice != 1 && startPrice != tuniuPrice) { %>\n        <div class="calendar-detail-favor">\n            <%\n                var maxCoupon = strategyDtos && strategyDtos.length && strategyDtos[0].coupon || 0;\n                var cutPrice = tuniuPrice - startPrice - maxCoupon;\n            %>\n            *最低优惠价 <strong>&yen;<%= startPrice %></strong> = 途牛成人价 &yen;<%= tuniuPrice %>\n            <% if(cutPrice) {%>\n                - 最大优惠金额 &yen;<%= cutPrice %>\n            <%}%>\n            <%if(maxCoupon) {%>\n                - *抵用券 &yen;<%= maxCoupon%>\n            <%}%>\n        </div>\n    <% } %>\n\n    <% if (isRealTimePrice != 1 && flightTicketType == 2) { %>\n        <div class="calendar-detail-real">\n            本起价对应的机票为实时机票，预订过程中可能会发生价格或位置的变更，请以占位价格为准。\n        </div>\n    <% } %>\n\n    <% if (isRealTimePrice == 1) { %>\n        <div class="calendar-detail-real">\n            当前团期为实时计价团期，预订过程中会根据您所选择的出游项目和优惠活动实时计算价格。\n        </div>\n    <% } %>\n\n    <% if (promotions && promotions.length) { %>\n        <div class="calendar-detail-activity">\n            <div class="calendar-detail-activity-title">团期可选优惠活动：</div>\n            <div class="calendar-detail-activity-list">\n                <% for (var i = 0; i < promotions.length; i++) { %>\n                    <div class="calendar-detail-activity-item"><span><%= promotions[i].name %></span></div>\n                <% } %>\n            </div>\n        </div>\n    <% } %>\n    <% if (deadLineTime) { %>\n        <div class="calendar-detail-deadline">\n            本团期报名截止时间：<%= deadLineTime %>前\n        </div>\n    <% } %>\n    <% if (setGroupFlag) { %>\n        <div class="calendar-detail-tip">\n        <%= setGroupFlag === 1 ? \'*本团期铁定成团，不发团有赔偿\' : setGroupFlag === 2 ? isGroupTips : \'\'%>\n        </div>\n    <% } %>\n</div>\n'
}, function (e, t) {
    "use strict";

    function n(e, t) {
        return
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.record = n
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r() {
        var e = A.getState("departCity") || {}, t = A.getState("allBackCities") || {}, n = t[e.code];
        return n || []
    }

    function s() {
        var e = A.getState("departCity").code;
        return (A.getState("allBookCities") || {})[e] || e || 0
    }

    function l() {
        var e = $("#J_Form [name=tel_reg]");
        window.location = P.pageUrl({
            productId: A.getState("productId"),
            bookCity: s(),
            departCity: A.getState("departCity").code,
            backCity: A.getState("backCity").code,
            userTel: e.length && e.val() || ""
        })
    }

    function c(e, t) {
        var n = void 0;
        return t && (n = t.filter(function (t) {
            return t.code == e
        }).map(function (e) {
            return Object.assign({}, e)
        }), n = n[0]), n || null
    }

    function d(e, t) {
        var n = !1;
        return e && t && t.pinyin && (n = ~e.indexOf(t.pinyin.slice(0, 1).toUpperCase())), !!n
    }

    function u() {
        N.forEach(function (e) {
            return e.hideDrop()
        })
    }

    function f(e, t) {
        var n = new J(e, t);
        return N.push(n), n
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var p = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), h = n(1), v = n(22), m = n(18), y = n(6), g = a(y), b = n(28), _ = i(b), x = n(29), j = i(x), w = n(30),
        C = i(w), D = n(31), k = i(D), T = n(26), I = ["ABCDEFG", "HIJKL", "MNOPQRST", "UVWXYZ"],
        M = v.template.compile(_["default"]), S = v.template.compile(j["default"]),
        O = v.template.compile(C["default"]), E = v.template.compile(k["default"]), A = void 0, P = void 0;
    t["default"] = {
        init: function (e) {
            var t = $("#J_ResourceDepartCity"), n = $("#J_ResourceBackCity"), i = $("#J_ResourceBackCityRow"),
                a = $("#J_ResourceCombine"), o = ($("#J_ResourceTeamCity"), void 0), s = void 0, c = void 0;
            P = e, A = (0, h.getStore)(), t.length && (o = f(t, {
                selected: A.getState("departCity"), data: function () {
                    return A.getState("allDepartCities")
                }, hotData: function () {
                    return A.getState("hotDepartCities")
                }, onchange: function (e) {
                    A.dispatch({type: g.CHANGE_DEPART_CITY, data: e}), (0, T.record)("点击_头部区_人数/日期/城市区_出发城市_切换出发城市")
                }
            })), n.length && (s = f(n, {
                type: "back", noTab: !0, selected: A.getState("backCity"), data: function () {
                    return r()
                }, onchange: function (e) {
                    A.dispatch({type: g.CHANGE_BACK_CITY, data: e}), (0, T.record)("点击_头部区_人数/日期/城市区_出发城市_切换归来城市")
                }
            })), c = A.getState("connection"), (3 == A.getState("includeCombinedPrice") || c && 1 == c.isSupportConnection) && new m.Tip(a, {
                type: "click",
                content: function () {
                    var e = void 0, t = void 0;
                    return 3 == A.getState("includeCombinedPrice") ? (e = {
                        connectionDesc: A.getState("connectionDesc"),
                        connectionIntroduction: A.getState("connectionIntroduction"),
                        connectionNotice: A.getState("connectionNotice")
                    }, t = E) : c.isFreeCombined ? (e = {
                        connectionDesc: c.connectDesc,
                        connectionIntroduction: c.connectIntroduction,
                        connectionNotice: c.connectNotice
                    }, t = E) : (e = {connection: c}, t = O), t(e)
                },
                dialog: {area: ["500px", "auto"], tipsOffset: [10, -265], arrowOffset: [-75, 0], disableAutoLeft: !0}
            }), A.subscribe(function () {
                var e = r();
                o && o.set(A.getState("departCity")), e && e.length && (1 === e.length ? (A.dispatch({
                    type: g.CHANGE_BACK_CITY,
                    data: e[0]
                }), i.hide()) : (s.updateTotal(e.length), s.reload(), i.show()))
            }, "change:departCity"), A.subscribe(function () {
                l()
            }, "change:backCity");
            var d = r();
            d && d.length > 1 && (s.updateTotal(d.length), s.reload(), A.getState("backCity") && s.set(A.getState("backCity")), i.show())
        }
    };
    var J = function () {
        function e(t, n) {
            o(this, e), this.options = n || {}, this.$container = $(t), this.$drop = this.$container.find(".resource-city-drop"), this.$selected = this.$container.find(".resource-city-more-selected"), this.$dropTab = this.$drop.find(".resource-city-drop-head"), this.$dropList = this.$drop.find(".resource-city-drop-list"), this.dropInited = !1, this.currentTab = this.getDefaultTab(), this.value = n.selected ? Object.assign({}, n.selected) : null, this.options.noTab === !0 && this.$dropTab.remove(), this.bind()
        }

        return p(e, [{
            key: "bind", value: function () {
                var e = this, t = $(document);
                t.click(function () {
                    e.hideDrop()
                }).on("customclick", function (t, n) {
                    "city" !== n && e.hideDrop()
                }), this.$container.on("click", function (e) {
                    t.trigger("customclick", "city"), e.stopPropagation()
                }).hover(function () {
                }, function () {
                }).on("click", ".resource-city-more-label", function () {
                    e.toggleDrop()
                }).on("click", ".resource-city-drop-tab-item", function () {
                    e.changeTab($(this).data("tab"))
                }).on("click", ".resource-city-drop-city-item", function () {
                    e.change($(this).data("code")), e.hideDrop()
                })
            }
        }, {
            key: "set", value: function (e) {
                e && e.code && e.name && (this.value = Object.assign({}, e), this.update())
            }
        }, {
            key: "reload", value: function () {
                this.value = null, this.currentTab = this.getDefaultTab(), this.update(), this.render()
            }
        }, {
            key: "getCityList", value: function () {
                return this.options.data && this.options.data() || []
            }
        }, {
            key: "getHotList", value: function () {
                return this.options.hotData && this.options.hotData() || []
            }
        }, {
            key: "getCityName", value: function () {
                return this.value ? this.value.name : "请选择"
            }
        }, {
            key: "getCurrentGroupData", value: function () {
                var e = this, t = void 0;
                return this.options.noTab === !0 ? this.getCityList() : t = "hot" === this.currentTab ? this.getHotList() : this.getCityList().filter(function (t) {
                    return d(e.currentTab, t)
                }).sort(function (e, t) {
                    return e.pinyin > t.pinyin ? 1 : -1
                })
            }
        }, {
            key: "render", value: function () {
                this.options.noTab !== !0 && this.renderTab(), this.renderCity()
            }
        }, {
            key: "getAllTabs", value: function () {
                var e = {}, t = this.getCityList(), n = this.getHotList();
                t && t.forEach(function (t) {
                    I.some(function (n) {
                        if (d(n, t)) return e[n] = (e[n] || 0) + 1, !0
                    })
                });
                var i = I.filter(function (t) {
                    return e[t]
                });
                return n && n.length && (i = ["hot"].concat(i)), i
            }
        }, {
            key: "getDefaultTab", value: function () {
                return this.getAllTabs()[0]
            }
        }, {
            key: "renderTab", value: function () {
                var e = this.getAllTabs();
                this.$dropTab.html(M({list: e, current: this.currentTab || e[0]}))
            }
        }, {
            key: "renderCity", value: function () {
                this.$dropList.html(S({list: this.getCurrentGroupData(), current: this.value || {code: -1}}))
            }
        }, {
            key: "changeTab", value: function (e) {
                this.currentTab = e, this.render()
            }
        }, {
            key: "change", value: function (e) {
                this.options && this.options.onchange && this.options.onchange(c(e, this.getCityList()))
            }
        }, {
            key: "update", value: function () {
                this.$selected.html(this.getCityName())
            }
        }, {
            key: "updateTotal", value: function (e) {
                this.$container.find(".resource-city-more-total").text(e)
            }
        }, {
            key: "toggleDrop", value: function () {
                this.$container.hasClass("expand") ? this.hideDrop() : this.showDrop()
            }
        }, {
            key: "showDrop", value: function () {
                u(), this.render(), this.dropInited = !0, this.$container.addClass("expand")
            }
        }, {
            key: "hideDrop", value: function () {
                this.$container.removeClass("expand")
            }
        }]), e
    }(), N = []
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = "\n<ul class=\"resource-city-drop-tab\">\n    <% for (var i = 0; i < list.length; i++) { %>\n        <li class=\"resource-city-drop-tab-item <%= current == list[i] ? 'active' : ''%>\" data-tab=\"<%= list[i] %>\"><%= list[i] == 'hot' ? '推荐城市' : list[i] %></li>\n    <% } %>\n</ul>\n"
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<ul class="resource-city-drop-city-city">\n<% for (var i = 0; i < list.length; i++) {%>\n    <% var item = list[i]%>\n    <li class="resource-city-drop-city-item <%= current.code == item.code ? \'selected\' : \'\'%>" data-code="<%= item.code %>">\n        <div class="resource-city-drop-city-name"><%= item.name %></div>\n        <div class="resource-city-drop-city-price"><strong>&yen;<%= item.price %></strong>起</div>\n    </li>\n<%}%>\n</ul>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<div class="resource-combine-detail">\n    <% if (connection.connectDesc) { %>\n        <div class="resource-combine-detail-head"><%= connection.connectDesc %>：</div>\n    <% } %>\n    <div class="resource-combine-detail-body">\n        <dl class="resource-combine-detail-cities">\n            <% var areaList = connection.connectCityList || [] %>\n            <% for (var areaIndex = 0, areaLength = areaList.length; areaIndex < areaLength; areaIndex++) { %>\n                <% var areaData = areaList[areaIndex] %>\n                <% if (areaData && areaData.cityList && areaData.cityList.length) { %>\n                    <dt><%= areaData.areaName %>：</dt>\n                    <dd>\n                        <% for (var cityIndex = 0; cityIndex < areaData.cityList.length; cityIndex++) { %>\n                            <span><%= areaData.cityList[cityIndex] %></span>\n                        <% } %>\n                    </dd>\n                <% } %>\n            <% } %>\n        </dl>\n        <% if (connection.connectIntroduction) { %>\n            <div class="resouce-combine-detail-tip">\n                <%= connection.connectIntroduction %>。\n            </div>\n        <% } %>\n        <% if (connection.connectTips) { %>\n            <div class="resouce-combine-detail-tip">\n                * <%= connection.connectTips %>。\n            </div>\n        <% } %>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<div class="resource-combine-detail">\n    <% if (connectionDesc) { %>\n        <div class="resource-combine-detail-head"><%= connectionDesc %>：</div>\n    <% } %>\n    <div class="resource-combine-detail-body">\n        <% if (connectionIntroduction) { %>\n            <div class="resource-combine-detail-title">什么是联运交通？</div>\n            <div class="resource-combine-detail-desc"><%= connectionIntroduction %></div>\n        <% } %>\n        <% if (connectionNotice) { %>\n            <div class="resource-combine-detail-title">预订须知</div>\n            <div class="resource-combine-detail-desc"><%=# connectionNotice.replace(/\\n/g, \'<br />\') %></div>\n        <% } %>\n    </div>\n</div>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a() {
        var e = T.offset(), t = (T.width(), D.width());
        return e.top += T.height() + 10, e.arrowLeft = 28, e.left + 650 > t && (e.arrowLeft = e.arrowLeft + e.left + 650 - t, e.left = e.left - (e.left + 650 - t)), e
    }

    function o() {
        var e = {};
        return j.getState("calendar").forEach(function (t) {
            e[t.departDate] = !0
        }), e
    }

    function r() {
        return (j.getState("calendar")[0] || {}).departDate
    }

    function s(e) {
        var t = j.getState("calendar"), n = null;
        return t && t.length && t.some(function (t) {
            if (t.departDate === e) return n = t, !0
        }), n
    }

    function l(e) {
        var t = j.getState("multiJourneyBaseInfos") || [], n = t.filter(function (t) {
            return t.resId === e
        })[0];
        return n
    }

    function c(e) {
        var t = l(e);
        return t ? t.dayDuration : 1
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var d = n(1), u = (n(22), n(33)), f = i(u), p = n(8), h = i(p), v = n(34), m = i(v), y = n(35), g = n(26),
        b = m.getYMDDate(new Date), _ = 4, x = 200, j = void 0, w = !1, C = void 0, D = $(window), k = void 0,
        T = void 0, I = void 0, M = void 0;
    t["default"] = {
        init: function () {
            var e = this;
            j = (0, d.getStore)(), T = $("#J_ResourceDate"), k = $("#J_ResourceApplication"), I = T.find(".resource-date-selected"), M = (0, y.createDatePanel)(), j.subscribe(function () {
                e.bind(), e.update()
            }, "change:calendar")
        }, bind: function () {
            var e = $(document), t = this;
            e.click(function () {
                t.hideDatePicker()
            }).on("customclick", function (e, n) {
                "date" !== n && t.hideDatePicker()
            }), T.click(function (n) {
                t.toggleDatePicker(), e.trigger("customclick", "date"), n.stopPropagation()
            }), k.find("[data-role=button]").click(function () {
                if (C) {
                    j.dispatch({type: h.CHANG_DETAIL_JOURNEY, data: C.journeyId});
                    var e = $("#J_DetailMultiRoute").offset();
                    e && D.scrollTop(e.top)
                }
            })
        }, change: function (e) {
            j.dispatch({type: f.CHANGE_DEPART_DATE_TARGET, data: "date"}), j.dispatch({
                type: f.CHANGE_DEPART_DATE,
                data: e
            }), this.update(), (0, g.record)("点击_头部区_人数/日期/城市区_出游日期_选择出游日期")
        }, update: function () {
            var e = s(j.getState("departDate"));
            if (e) {
                var t = e.resId, n = e.departDate, i = m.getNextDate(n, c(t));
                I.html([m.formateDate(n, "MM/DD"), " ", m.getWeek(n), "出发", " -- ", m.formateDate(i, "MM/DD"), " ", m.getWeek(i), "返回"].join("")), j.getState("isSupportMultipleJourney") && (C = l(t), C ? k.show().find("[data-role=label]").text(C.journeyName + " - " + C.journeyAbstractDesc) : k.hide().find("[data-role=label]").text(""))
            }
        }, toggleDatePicker: function () {
            w ? this.hideDatePicker() : this.showDatePicker()
        }, showDatePicker: function () {
            var e = this, t = j.getState("departDate") || r() || b, n = new Date(m.justifyDate(t));
            M.open({
                type: 2,
                year: n.getFullYear(),
                month: n.getMonth(),
                current: j.getState("departDate"),
                dateList: o(),
                min: m.getNowDate(),
                onChange: function (t) {
                    e.change(t)
                }
            }, a()), w = !0
        }, hideDatePicker: function () {
            M.close(), w = !1
        }, flash: function () {
            function e() {
                n % 2 ? T.addClass("flashed") : T.removeClass("flashed"), (n % 2 !== 0 || n < _) && (n++, t())
            }

            function t() {
                setTimeout(e, x)
            }

            var n = 1;
            e()
        }
    }
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.LOAD_CALENDAR = "LOAD_CALENDAR", t.LOAD_CALENDAR_ROOM_BUDGET = "LOAD_CALENDAR_ROOM_BUDGET", t.CHANGE_DEPART_DATE = "CHANGE_DEPART_DATE", t.CHANGE_DEPART_CITY = "CHANGE_DEPART_CITY", t.CHANGE_BACK_CITY = "CHANGE_BACK_CITY", t.CHANGE_ADULT = "CHANGE_ADULT", t.CHANGE_CHILD = "CHANGE_CHILD", t.CHANGE_FREE_CHILD = "CHANGE_FREE_CHILD", t.CHANGE_DEPART_DATE_TARGET = "CHANGE_DEPART_DATE_TARGET", t.CHANGE_PRODUCT_STATUS = "CHANGE_PRODUCT_STATUS", t.CHANGE_JOURNEY_DAY = "CHANGE_JOURNEY_DAY"
}, function (e, t) {
    "use strict";

    function n(e) {
        return String(e).replace(/\-/g, "/")
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        e = String(e);
        for (var n = Math.max(t - e.length, 0); n > 0; n--) e = "0" + e;
        return e
    }

    function a(e) {
        return [e.getFullYear(), i(e.getMonth() + 1), i(e.getDate())].join(p)
    }

    function o(e) {
        return "string" == typeof e && (e = new Date(n(e))), [e.getFullYear(), i(e.getMonth() + 1)].join(p)
    }

    function r() {
        return a(new Date)
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "周";
        return "string" == typeof e && (e = new Date(n(e))), t + h[e.getDay()]
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
        return "string" == typeof e && (e = new Date(n(e))), t.replace(/YYYY/g, e.getFullYear()).replace(/MM/g, i(e.getMonth() + 1)).replace(/DD/g, i(e.getDate()))
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return "string" == typeof e && (e = new Date(n(e))), e.setDate(e.getDate() + t - 1), a(e)
    }

    function d(e) {
        var t = void 0;
        return t = "string" == typeof e ? new Date(n(e)) : e
    }

    function u(e, t) {
        var n = {};
        return e = d(e), t = d(t), v.reduce(function (e, t) {
            return n[t.property] = e % t.unit, parseInt(e / t.unit, 10)
        }, e - t || 0), n
    }

    function f(e) {
        var t = /(?=^.{5,255}$)(^([\w\!\#\$\%\&\'\*\+\-\.\/\?\^\_\`\{\|\}\~]+)@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9\-]+)$)/;
        return t.test(String(e))
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var p = "-", h = ["日", "一", "二", "三", "四", "五", "六"],
        v = [{unit: 1e3, property: "millsecond"}, {unit: 60, property: "second"}, {
            unit: 60,
            property: "minute"
        }, {unit: 24, property: "hour"}, {unit: 1, property: "day"}];
    t.str2Date = d, t.justifyDate = n, t.justifyNumber = i, t.getYMDate = o, t.getYMDDate = a, t.getNowDate = r, t.getWeek = s, t.formateDate = l, t.getNextDate = c, t.getDeltaDate = u, t.checkEmail = f
}, function (e, t) {
    "use strict";

    function n(e) {
        return "function" == typeof e
    }

    function i(e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }

    function a(e) {
        return "string" == typeof e ? new Date(e.replace(/\-/g, "/")) : e
    }

    function o(e, t) {
        for (t = t || 2, e = parseInt(e) + ""; e.length < t;) e = "0" + e;
        return e
    }

    function r(e) {
        return e.getFullYear() + "-" + o(e.getMonth() + 1) + "-" + o(e.getDate())
    }

    function s(e, t) {
        return "string" == typeof e && (e = a(e)), "string" == typeof t && (t = a(t)), Math.floor((t - e) / 864e5)
    }

    function l(e, t) {
        var n = new Date(e, t, 1), i = n.getDay();
        return 0 !== i ? n.setDate(1 - i) : n.setDate(-6), r(n)
    }

    function c(e, t, n) {
        var i = new Date(e, t + 1, 0), a = i.getDay();
        return 6 !== a && i.setDate(i.getDate() + 6 - a), s(n, i) < 41 && i.setDate(i.getDate() + 7), r(i)
    }

    function d(e, t) {
        var n = new Date(e, t, 1);
        return r(n)
    }

    function u(e, t) {
        var n = new Date(e, t + 1, 0);
        return r(n)
    }

    function f() {
        return r(new Date)
    }

    function p() {
        this.init()
    }

    function h(e, t) {
        var n, i = a(t.current || new Date);
        this.config = {}, this.set($.extend({}, b, t)), this.__fullDate = r(i), this.__year = i.getFullYear(), this.__month = i.getMonth(), this.__date = i.getDate(), t.dateList && $.isArray(t.dateList) && (n = {}, $.each(t.dateList, function (e, t) {
            n[t] = !0
        }), this.__dateList = n), this.set("min", t.min || r(new Date)), this.set("max", t.max), this.__panel = _(), this.__target = $(e), this.init()
    }

    function v(e, t) {
        return new h(e, t || {})
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var m = '<div class="dp-panel"><span class="dp-arrow"><i></i></span><div class="dp-btns"><div class="dp-btn dp-prev">&lt;</div><div class="dp-btn dp-next">&gt;</div></div><div class="dp-wrap"></div></div>',
        y = '<div class="dp-box"><div class="dp-month">{month}</div><div class="dp-days"><div class="dp-weeks"><div class="dp-week dp-weekend">日</div><div class="dp-week">一</div><div class="dp-week">二</div><div class="dp-week">三</div><div class="dp-week">四</div><div class="dp-week">五</div><div class="dp-week dp-weekend">六</div></div><div class="dp-cale">{cale}</div></div></div>',
        g = {type: 1, year: 2015, month: 6};
    p.prototype = {
        init: function () {
            var e = this, t = $(m);
            this.hovered = !1, this.prevBtn = t.find(".dp-prev"), this.nextBtn = t.find(".dp-next"), this.monthTit = t.find(".dp-month"), this.caleWrap = t.find(".dp-wrap"), this.wrap = t, this.config = {
                type: 1,
                year: 2015,
                month: 6
            }, t.on("click", ".dp-date-item", function (t) {
                e.select($(t.currentTarget).data("date")), e.hovered = !1, e.wrap.hide()
            }), t.on("mousedown", function (e) {
                e.stopPropagation(), e.preventDefault()
            }).hover(function () {
                e.hovered = !0
            }, function () {
                e.hovered = !1
            }), this.nextBtn.click(function () {
                e.nextMonth()
            }), this.prevBtn.click(function () {
                e.prevMonth()
            }), t.appendTo("body")
        }, open: function (e, t) {
            this.set(e), this.render(), this.show(t)
        }, show: function (e) {
            var t = 0;
            this.wrap.css({
                left: e.left,
                top: e.top
            }).show(), this.wrap.find(".dp-arrow").css({left: e.arrowLeft}), this.caleWrap.find(".dp-box").each(function (e) {
                t += $(this).width()
            }), this.caleWrap.width(t)
        }, position: function (e) {
            e && this.wrap.css({left: e.left, top: e.top})
        }, close: function () {
            this.hovered || this.wrap.hide()
        }, select: function (e) {
            var t, i, o, r;
            t = a(e), i = t.getMonth(), o = this.get("month"), r = this.get("onChange"), this.set("current", e), r && n(r) && r(e), i < o || i > o + this.get("type") - 1 ? this.goMonth(t.getFullYear(), t.getMonth()) : this.updateView()
        }, goMonth: function (e, t) {
            this.set("year", e), this.set("month", t), this.render()
        }, prevMonth: function () {
            var e = new Date(this.get("year"), this.get("month") - this.get("type"), 1);
            this.goMonth(e.getFullYear(), e.getMonth())
        }, nextMonth: function () {
            var e = new Date(this.get("year"), this.get("month") + this.get("type"), 1);
            this.goMonth(e.getFullYear(), e.getMonth())
        }, set: function (e, t) {
            "string" == typeof e && void 0 !== t ? this.config[e] = t : this.config = $.extend({}, g, e)
        }, get: function (e) {
            return this.config[e]
        }, render: function () {
            switch (this.get("type")) {
                case 1:
                    this.renderSingleBox();
                    break;
                default:
                    this.renderMultiBox()
            }
        }, getMonthTit: function (e, t) {
            return (e || this.get("year")) + "年" + ((void 0 === t ? this.get("month") : t) + 1) + "月"
        }, renderSingleBox: function () {
            var e = this.get("year"), t = this.get("month"), n = l(e, t), i = c(e, t, n),
                a = this.buildSingleView(n, i);
            this.caleWrap.removeClass("dp-multi").html(a)
        }, buildSingleView: function (e, t) {
            var n = a(e), i = f(), o = e, s = this.get("min"), l = this.get("max"), c = this.get("current"),
                d = this.get("dateList"), u = [], p = 1, h = y;
            for (u.push('<div class="dp-dates">'); o <= t;) u.push('<div class="dp-date '), o === i && u.push(" dp-now"), o === c && u.push(" dp-selected"), u.push('">'), o < s || t && o > t || l && o > l || d && !d[o] ? u.push('<span class="dp-date-disabled"><i>' + (o == i ? "今天" : n.getDate()) + "</i></span>") : u.push('<a class="dp-date-item" data-date="' + o + '" href="javascript:;"><i>' + (o == i ? "今天" : n.getDate()) + "</i></a>"), u.push("</div>"), n.setDate(n.getDate() + 1), o = r(n), p++;
            return u.push("</div>"), h.replace(/\{month\}/, this.getMonthTit()).replace(/\{cale\}/, u.join(""))
        }, renderMultiBox: function () {
            var e = this.get("type");
            this.caleWrap.empty();
            for (var t = 0; t < e; t++) this.caleWrap.append(this.buildMultiSingleView(this.get("year"), this.get("month") + t));
            this.caleWrap.addClass("dp-multi").children().first().addClass("dp-box-l").end().last().addClass("dp-box-r")
        }, buildMultiSingleView: function (e, t) {
            var n, i, o = l(e, t), s = c(e, t, o), p = d(e, t), h = u(e, t), v = a(p), m = v.getFullYear(),
                g = v.getMonth(), b = this.get("current"), _ = this.get("min"), x = this.get("max"),
                j = this.get("dateList"), w = a(o), C = f(), D = o, k = [], T = 1, I = y;
            for (k.push('<div class="dp-dates">'); D <= s;) n = D < _ || s && D > s || x && D > x || j && !j[D], i = D >= p && D <= h, k.push('<div class="dp-date'), D === C && k.push(" dp-now"), D === b && D >= p && D <= h && k.push(" dp-selected"), n ? k.push(" dp-disabled") : k.push(" dp-enabled"), i || k.push(" dp-other"), k.push('">'), i ? n ? k.push('<span class="dp-date-disabled"><i>' + (D == C ? "今天" : w.getDate()) + "</i></span>") : k.push('<a class="dp-date-item" data-date="' + D + '" href="javascript:;"><i>' + (D == C ? "今天" : w.getDate()) + "</i></a>") : k.push('<span class="dp-date-disabled"></span>'), k.push("</div>"), w.setDate(w.getDate() + 1), D = r(w), T++;
            return k.push("</div>"), I.replace(/\{month\}/, this.getMonthTit(m, g)).replace(/\{cale\}/, k.join(""))
        }, updateView: function () {
            this.caleWrap.find(".dp-selected").removeClass("dp-selected").end().find("[data-date=" + this.get("current") + "]").parent().addClass("dp-selected")
        }
    };
    var b = {type: 2};
    h.prototype = {
        init: function () {
            var e = this;
            this.__target.on("focus", function () {
                e.open()
            }).on("blur", function () {
                e.close()
            }).on("change", function () {
                e.__fullDate = this.value
            }).prop({readonly: !0})
        }, open: function () {
            var e = this, t = this.__target.offset(), n = (this.get("onChange") || function () {
            }, this.get("min")), i = this.get("max");
            t.top = t.top + this.__target.outerHeight(), this.getSelected(), this.__panel.open({
                type: this.config.type,
                year: this.__year,
                month: this.__month,
                current: this.__fullDate,
                dateList: this.__dateList,
                min: $.isFunction(n) ? n() : n,
                max: $.isFunction(i) ? i() : i,
                onChange: function (t) {
                    e.select(t)
                }
            }, t)
        }, close: function () {
            this.__panel.close()
        }, getSelected: function () {
            var e = this.__target.val() || this.__fullDate, t = a(e);
            this.__fullDate = e, this.__year = t.getFullYear(), this.__month = t.getMonth(), this.__date = t.getDate()
        }, select: function (e) {
            var t = a(e), n = this.get("onChange") || function () {
            };
            t !== this.__fullDate && (this.__fullDate = e, this.__year = t.getFullYear(), this.__month = t.getMonth(), this.__date = t.getDate(), this.__target.val(e).trigger("change"), n(e)), this.__target.blur(), this.close()
        }, set: function (e, t) {
            "string" == typeof e ? t && (this.config[e] = t) : this.config = $.extend({}, b, e)
        }, get: function (e) {
            return this.config[e]
        }
    };
    var _ = i(function () {
        return new p
    });
    $.fn.datePicker = function () {
        var e = arguments;
        return this.each(function () {
            var t, n = e[0];
            "string" == typeof n ? (t = $(this).data("datePicker"), t && $.isFunction(t[n]) && t[n].apply(t, Array.prototype.slice.call(e, 1))) : $(this).data("datePicker", v($(this), n))
        })
    }, t.createDatePicker = v, t.createDatePanel = _
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o() {
        var e = k.getState("originCalendar");
        return e ? e.childPriceTip : ""
    }

    function r(e) {
        return $(E(e)).appendTo(T.find(".resource-section-content"))
    }

    function s() {
        return $(A()).appendTo(T.find(".resource-section-content"))
    }

    function l() {
        var e = k.getState("departDate");
        return k.getState("calendar").filter(function (t) {
            return t.departDate === e
        })[0]
    }

    function c(e) {
        var t = k.getState("adult"), n = k.getState("child"), i = 0;
        switch (e) {
            case"adult":
                i = f() ? t + n > 1 ? 0 : t : 1;
                break;
            case"child":
                i = f() ? t + n > 1 ? 0 : n : 0;
                break;
            case"freeChild":
                i = 0
        }
        return i
    }

    function d(e) {
        var t = 0;
        switch (e) {
            case"adult":
                t = 99;
                break;
            case"child":
                t = u() ? 4 * k.getState("adult") : 20;
                break;
            case"freeChild":
                t = u() ? 1 * k.getState("adult") : 0
        }
        return t
    }

    function u() {
        return 2 == k.getState("proMode")
    }

    function f() {
        return 11 == k.getState("tagType")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var p = n(1), h = n(22), v = n(15), m = n(33), y = a(m), g = n(37), b = n(26), _ = n(38), x = i(_), j = n(39),
        w = i(j), C = n(40), D = i(C), k = void 0, T = void 0, I = void 0, M = void 0, S = void 0, O = void 0,
        E = h.template.compile(x["default"]), A = h.template.compile(w["default"]),
        P = h.template.compile(D["default"]);
    t["default"] = {
        init: function () {
            k = (0, p.getStore)(), T = $("#J_ResourceTourist"), I = $("#J_ResourceCustom"), k.subscribe(function () {
                this.initSelect()
            }.bind(this), "change:calendar"), k.subscribe(function () {
                this.initSelect()
            }.bind(this), "change:departDate"), k.subscribe(function () {
                M && M.set(k.getState("adult")), this.toggleCustom(), this.updateRelation()
            }.bind(this), "change:adult"), k.subscribe(function () {
                S && S.set(k.getState("child")), this.updateRelation()
            }.bind(this), "change:child"), k.subscribe(function () {
                O && O.set(k.getState("freeChild")), this.updateRelation()
            }.bind(this), "change:freeChild"), k.getState("calendar") && this.initSelect()
        }, initSelect: function () {
            this.initAdult(), this.initChild(), this.initFreeChild()
        }, initAdult: function () {
            M && M.remove(), T.find(".resource-tourist-adult").remove();
            var e = l(), t = r({type: "adult", price: e && e.tuniuPrice, isReal: e && e.isRealTimePrice});
            M = (0, g.createNumberSelect)(t.find(".number-select"), {
                min: c("adult"),
                max: d("adult"),
                autoSet: !1,
                defaultValue: k.getState("adult"),
                onchange: this.changeAdult.bind(this)
            })
        }, initChild: function () {
            S && S.remove(), T.find(".resource-tourist-child").remove();
            var e = l(), t = void 0;
            e && e.excludeChildFlag ? (t = s(), S = null) : (t = r({
                type: "child",
                price: e && e.tuniuChildPrice,
                isTrain: u(),
                isReal: e && e.isRealTimePrice,
                childTip: o()
            }), S = (0, g.createNumberSelect)(t.find(".number-select"), {
                min: c("child"),
                max: d("child"),
                autoSet: !1,
                defaultValue: k.getState("child"),
                onchange: this.changeChild.bind(this)
            })), t && !function () {
                var e = t.find(".J_ResourceChildTip"), n = void 0;
                e.hover(function () {
                    n = v.layer.open({
                        type: 4,
                        skin: "layui-layer-rim",
                        area: ["200px", "auto"],
                        content: [P({content: e.data("tip")}), e],
                        tips: 3,
                        shade: !1,
                        fix: !1,
                        closeBtn: !1,
                        tipsOffset: [10, -27]
                    })
                }, function () {
                    v.layer.close(n)
                })
            }()
        }, initFreeChild: function () {
            if (O && O.remove(), T.find(".resource-tourist-freechild").remove(), u()) {
                var e = (l(), r({type: "freeChild", price: 0}));
                O = (0, g.createNumberSelect)(e.find(".number-select"), {
                    min: c("freeChild"),
                    max: d("freeChild"),
                    autoSet: !1,
                    defaultValue: k.getState("freeChild"),
                    onchange: this.changeFreeChild.bind(this)
                }), e && !function () {
                    var t = e.find(".J_ResourceFreeChildTip"), n = void 0;
                    t.hover(function () {
                        n = v.layer.open({
                            type: 4,
                            skin: "layui-layer-rim",
                            area: ["200px", "auto"],
                            content: [P({content: t.data("tip")}), t],
                            tips: 3,
                            shade: !1,
                            fix: !1,
                            closeBtn: !1,
                            tipsOffset: [10, -27]
                        })
                    }, function () {
                        v.layer.close(n)
                    })
                }()
            }
        }, changeAdult: function (e) {
            k.dispatch({type: y.CHANGE_ADULT, data: e}), (0, b.record)("点击_头部区_人数/日期/城市区_出游人数_选择成人数")
        }, changeChild: function (e) {
            k.dispatch({type: y.CHANGE_CHILD, data: e}), (0, b.record)("点击_头部区_人数/日期/城市区_出游人数_选择儿童数")
        }, changeFreeChild: function (e) {
            k.dispatch({type: y.CHANGE_FREE_CHILD, data: e}), (0, b.record)("点击_头部区_人数/日期/城市区_出游人数_选择免票儿童数")
        }, updateRelation: function () {
            f() && (M && M.config({min: c("adult")}), S && S.config({min: c("child")})), u() && (S && S.config({max: d("child")}), O && O.config({max: d("freeChild")}))
        }, toggleCustom: function () {
            k.getState("adult") >= 10 ? this.showCustom() : this.hideCustom()
        }, showCustom: function () {
            I.show()
        }, hideCustom: function () {
            I.hide()
        }
    }
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        l.forEach(function (t) {
            t === e ? t.showDrop() : t.hideDrop()
        })
    }

    function a(e, t) {
        var n = new c(e, t);
        return l.push(n), n
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = {
        min: -(1 / 0),
        max: 1 / 0,
        minus: !0,
        plus: !0,
        defaultValue: 1,
        autoSet: !0,
        selectors: {minus: ".number-select-minus", plus: ".number-select-plus"},
        drop: {enable: !1}
    }, s = "disabled", l = [], c = function () {
        function e(t, i) {
            n(this, e), this.$container = $(t), this.options = Object.assign({}, r, i), this.value = this.options.defaultValue, this.minusDisabled = !1, this.plusDisabled = !1, this.disabled = !1, this.init(), this.bind(), this.update(), this.updateView()
        }

        return o(e, [{
            key: "init", value: function () {
                this.initDrop()
            }
        }, {
            key: "initDrop", value: function () {
                this.isDropEnabled() && this.$container.append('<div class="number-select-drop"></div>')
            }
        }, {
            key: "isDropEnabled", value: function () {
                return (this.options.drop || {}).enable === !0
            }
        }, {
            key: "showDrop", value: function () {
                var e = this.$container.find(".number-select-drop");
                e.show(), e.scrollTop(0);
                var t = e.find(".active").position();
                t && e.scrollTop(t.top)
            }
        }, {
            key: "hideDrop", value: function () {
                this.$container.find(".number-select-drop").hide()
            }
        }, {
            key: "bind", value: function () {
                var e = this;
                this.$container.on("click", this.options.selectors.minus, this.minus.bind(this)).on("click", this.options.selectors.plus, this.plus.bind(this)).on("change", "input", function (e) {
                    this.change(e.target.value)
                }.bind(this)), this.isDropEnabled() && ($(document).click(function () {
                    e.hideDrop()
                }), this.$container.on("focus", "input", function () {
                    e.disabled || i(e)
                }).on("click", "input", function (e) {
                    e.stopPropagation()
                }), this.$container.on("click", ".number-select-drop-item", function (t) {
                    t.stopPropagation(), e.change(parseInt($(this).data("value"))), e.hideDrop()
                }))
            }
        }, {
            key: "set", value: function (e) {
                this.value = e, this.update(), this.updateView()
            }
        }, {
            key: "excuteCallback", value: function (e) {
                try {
                    this.options.onchange && this.options.onchange(e)
                } catch (t) {
                }
            }
        }, {
            key: "changeNumber", value: function (e) {
                this.excuteCallback(e), this.options.autoSet && this.set(e)
            }
        }, {
            key: "config", value: function (e, t) {
                var n = {};
                t ? n[e] = t : n = e, this.options = Object.assign({}, this.options, n), this.update(), this.updateView()
            }
        }, {
            key: "plus", value: function () {
                this.disabled || this.plusDisabled || this.changeNumber(this.value + 1)
            }
        }, {
            key: "minus", value: function () {
                this.disabled || this.minusDisabled || this.changeNumber(this.value - 1)
            }
        }, {
            key: "change", value: function (e) {
                this.disabled || (e = parseInt(e, 10), !isNaN(e) && e !== this.value && e >= this.options.min && e <= this.options.max ? this.changeNumber(e) : this.updateView())
            }
        }, {
            key: "update", value: function () {
                var e = !1;
                this.minusDisabled = this.value <= this.options.min, this.plusDisabled = this.value >= this.options.max, this.value < this.options.min && (this.value = this.options.min, e = !0), this.value > this.options.max && (this.value = this.options.max, e = !0), e && this.excuteCallback(this.value)
            }
        }, {
            key: "updateView", value: function () {
                var e = this.disabled, t = e || this.minusDisabled, n = e || this.plusDisabled;
                this.buildDrop(), this.$container.find(this.options.selectors.minus)[t ? "addClass" : "removeClass"](s).end().find(this.options.selectors.plus)[n ? "addClass" : "removeClass"](s).end().find("input").prop("disabled", !!e).val(this.value)
            }
        }, {
            key: "buildDrop", value: function () {
                if (this.isDropEnabled()) {
                    var e = this.options.max, t = this.value, n = void 0, i = [];
                    for (n = this.options.min; n <= e; n++) i.push('<div class="number-select-drop-item', t == n ? " active" : "", '" data-value="', n, '">', n, "</div>");
                    this.$container.find(".number-select-drop").html(i.join(""))
                }
            }
        }, {
            key: "remove", value: function () {
                this.$container && (this.$container.remove(), this.$container = null), this.options = null
            }
        }, {
            key: "disable", value: function () {
                this.disabled = !0, this.updateView()
            }
        }, {
            key: "enable", value: function () {
                this.disabled = !1, this.updateView()
            }
        }]), e
    }();
    t.NumberSelect = c, t.createNumberSelect = a
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<div class="resource-tourist-item resource-tourist-<%= type.toLowerCase() %>">\n    <div class="number-select">\n        <div class="number-select-button number-select-minus">\n            <i class="number-select-button-line-horizital"></i>\n        </div>\n        <div class="number-select-button number-select-plus">\n            <i class="number-select-button-line-vertical"></i>\n            <i class="number-select-button-line-horizital"></i>\n        </div>\n        <div class="number-select-input">\n            <input type="text" name="number-select" value="<%= number %>">\n        </div>\n    </div>\n    <% if (type === \'adult\') { %>\n        <div class="resource-tourist-price">\n            <% if (isReal) { %><span><strong>实时计价</strong></span>/<% } else if (price) { %><span>&yen;<strong><%= price %></strong></span>/<% } %>成人\n        </div>\n    <% } %>\n\n    <% if (type === \'child\') { %>\n        <div class="resource-tourist-price">\n            <% if (isReal) { %><span><strong>实时计价</strong></span>/<% } else if (price) { %><span>&yen;<strong><%= price %></strong></span>/<% } %>\n            <% if (isTrain) { %>\n                儿童 <i class="J_ResourceChildTip" data-tip="身高标准1.2-1.5米，含儿童价火车票，含当地旅游车位费和导游服务费，不占床，不含住宿费和门票；身高标准0.8-1.19米，免火车票，含当地旅游车位费和导游服务费，不占床，不含住宿费和门票。">儿童标准</i>\n            <% } else { %>\n                儿童 <i class="J_ResourceChildTip" data-tip="<%=# childTip %>">儿童标准</i>\n            <% } %>\n        </div>\n    <% } %>\n\n    <% if (type === \'freeChild\') { %>\n        <div class="resource-tourist-price">\n            免票儿童<i class="J_ResourceFreeChildTip" data-tip="身高标准1.2-1.5米，含儿童价火车票，含当地旅游车位费和导游服务费，不占床，不含住宿费和门票；身高标准0.8-1.19米，免火车票，含当地旅游车位费和导游服务费，不占床，不含住宿费和门票。">（1.2米以下免车票）</i>\n        </div>\n    <% } %>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<div class="resource-tourist-item resource-tourist-child">\n    <div class="resource-tourist-price">\n        <i class="J_ResourceChildTip" data-tip="儿童标准：身高0.8~1.2米（含），不占床，只包含座位费，其余产生费用自理。">此团期不支持儿童出游</i>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = '\n<div class="resource-tourist-child-tip">\n    <%=# content %>\n</div>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a(e) {
        var t = p.getState("supplier"), n = void 0, i = e || p.getState("departDate");
        return n = (t || []).filter(function (e) {
            return ~(e.departureDates || []).indexOf(i)
        })[0], 1 == p.getState("isSupportMultipleJourney") || n || (n = (t || [])[0]), n && n.statis || (n = null), n
    }

    function o(e) {
        var t = a(e);
        if (t) {
            var n = b(Object.assign({destName: p.getState("destGroupName")}, t));
            v.html(n), h.show(), u.isNeedReception() && t.groundOperatorsName && (y.html("接待服务由<strong>" + (t.groundOperatorsName || "") + "</strong>提供"), m.show())
        } else h.hide(), m.hide();
        g.trigger("resize")
    }

    function r(e) {
        p = (0, s.getStore)(), p.subscribe(function () {
            o(e)
        }, "change:supplier"), 1 == p.getState("isSupportMultipleJourney") && p.subscribe(o, "change:departDate")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = n(1), l = n(42), c = i(l), d = n(47), u = i(d), f = n(48), p = void 0, h = $("#J_ResourceSupplier"),
        v = $("#J_ResourceSupplierContent"), m = $("#J_ResourceReception"), y = $("#J_ResourceReceptionContent"),
        g = $(window), b = c.compile(f.supplierTemplate, {client: !0, compileDebug: !1});
    t["default"] = {init: r}
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a(e, n) {
        var i;
        if ("/" == e.charAt(0)) i = t.resolveInclude(e.replace(/^\/*/, ""), n.root || "/", !0); else {
            if (!n.filename) throw new Error("`include` use relative path requires the 'filename' option.");
            i = t.resolveInclude(e, n.filename)
        }
        return i
    }

    function o(e, n) {
        var i, a = e.filename, o = arguments.length > 1;
        if (e.cache) {
            if (!a) throw new Error("cache option requires a filename");
            if (i = t.cache.get(a)) return i;
            o || (n = y.readFileSync(a).toString().replace(D, ""))
        } else if (!o) {
            if (!a) throw new Error("Internal EJS error: no file name or template provided");
            n = y.readFileSync(a).toString().replace(D, "")
        }
        return i = t.compile(n, e), e.cache && t.cache.set(a, i), i
    }

    function r(e, t) {
        var n = h.shallowCopy({}, t);
        return n.filename = a(e, n), o(n)
    }

    function s(e, t) {
        var n, i, o = h.shallowCopy({}, t);
        n = a(e, o), i = y.readFileSync(n).toString().replace(D, ""), o.filename = n;
        var r = new d(i, o);
        return r.generateSource(), {source: r.source, filename: n, template: i}
    }

    function l(e, t, n, i) {
        var a = t.split("\n"), o = Math.max(i - 3, 0), r = Math.min(a.length, i + 3),
            s = a.slice(o, r).map(function (e, t) {
                var n = t + o + 1;
                return (n == i ? " >> " : "    ") + n + "| " + e
            }).join("\n");
        throw e.path = n, e.message = (n || "ejs") + ":" + i + "\n" + s + "\n\n" + e.message, e
    }

    function c(e, t) {
        w.forEach(function (n) {
            "undefined" != typeof e[n] && (t[n] = e[n])
        })
    }

    function d(e, n) {
        n = n || {};
        var i = {};
        this.templateText = e, this.mode = null, this.truncate = !1, this.currentLine = 1, this.source = "", this.dependencies = [], i.client = n.client || !0, i.escapeFunction = n.escape || h.escapeXML, i.compileDebug = n.compileDebug !== !1, i.debug = !!n.debug, i.filename = n.filename, i.delimiter = n.delimiter || t.delimiter || _, i.strict = n.strict || !1, i.context = n.context, i.cache = n.cache || !1, i.rmWhitespace = n.rmWhitespace, i.root = n.root, i.localsName = n.localsName || t.localsName || x, i.strict ? i._with = !1 : i._with = "undefined" == typeof n._with || n._with, this.opts = i, this.regex = this.createRegex()
    }

    var u = n(43), f = i(u), p = n(45), h = i(p), v = n(46), m = i(v), y = {}, g = !1, b = m.version, _ = "%",
        x = "locals", j = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",
        w = ["cache", "filename", "delimiter", "scope", "context", "debug", "compileDebug", "client", "_with", "root", "rmWhitespace", "strict", "localsName"],
        C = /;\s*$/, D = /^\uFEFF/;
    t.cache = h.cache, t.localsName = x, t.resolveInclude = function (e, t, n) {
        var i = f.dirname, a = f.extname, o = f.resolve, r = o(n ? t : i(t), e), s = a(e);
        return s || (r += ".ejs"), r
    }, t.compile = function (e, t) {
        var n;
        return t && t.scope && (g || (console.warn("`scope` option is deprecated and will be removed in EJS 3"), g = !0), t.context || (t.context = t.scope), delete t.scope), n = new d(e, t), n.compile()
    }, t.render = function (e, t, n) {
        var i = t || {}, a = n || {};
        return 2 == arguments.length && c(i, a), o(a, e)(i)
    }, t.renderFile = function () {
        var e, t = Array.prototype.slice.call(arguments), n = t.shift(), i = t.pop(), a = t.shift() || {},
            r = t.pop() || {};
        r = h.shallowCopy({}, r), 3 == arguments.length && (a.settings && a.settings["view options"] ? c(a.settings["view options"], r) : c(a, r)), r.filename = n;
        try {
            e = o(r)(a)
        } catch (s) {
            return i(s)
        }
        return i(null, e)
    }, t.clearCache = function () {
        t.cache.reset()
    }, d.modes = {
        EVAL: "eval",
        ESCAPED: "escaped",
        RAW: "raw",
        COMMENT: "comment",
        LITERAL: "literal"
    }, d.prototype = {
        createRegex: function () {
            var e = j, t = h.escapeRegExpChars(this.opts.delimiter);
            return e = e.replace(/%/g, t), new RegExp(e)
        }, compile: function () {
            var e, t, n = this.opts, i = "", a = "", o = n.escapeFunction;
            this.source || (this.generateSource(), i += "  var __output = [], __append = __output.push.bind(__output);\n", n._with !== !1 && (i += "  with (" + n.localsName + " || {}) {\n", a += "  }\n"), a += '  return __output.join("");\n', this.source = i + this.source + a), e = n.compileDebug ? "var __line = 1\n  , __lines = " + JSON.stringify(this.templateText) + "\n  , __filename = " + (n.filename ? JSON.stringify(n.filename) : "undefined") + ";\ntry {\n" + this.source + "} catch (e) {\n  rethrow(e, __lines, __filename, __line);\n}\n" : this.source, n.debug && console.log(e), n.client && (e = "escape = escape || " + o.toString() + ";\n" + e, n.compileDebug && (e = "rethrow = rethrow || " + l.toString() + ";\n" + e)), n.strict && (e = '"use strict";\n' + e);
            try {
                t = new Function(n.localsName + ", escape, include, rethrow", e)
            } catch (s) {
                throw s instanceof SyntaxError && (n.filename && (s.message += " in " + n.filename), s.message += " while compiling ejs"), s
            }
            if (n.client) return t.dependencies = this.dependencies, function () {
                return t.apply(n.context, Array.from(arguments))
            };
            var c = function (e) {
                var i = function (t, i) {
                    var a = h.shallowCopy({}, e);
                    return i && (a = h.shallowCopy(a, i)), r(t, n)(a)
                };
                return t.apply(n.context, [e || {}, o, i, l])
            };
            return c.dependencies = this.dependencies, c
        }, generateSource: function () {
            var e = this.opts;
            e.rmWhitespace && (this.templateText = this.templateText.replace(/\r/g, "").replace(/^\s+|\s+$/gm, "")), this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
            var n = this, i = this.parseTemplateText(), a = this.opts.delimiter;
            i && i.length && i.forEach(function (e, o) {
                var r, l, c, d, u, f;
                if (0 === e.indexOf("<" + a) && 0 !== e.indexOf("<" + a + a) && (l = i[o + 2], l != a + ">" && l != "-" + a + ">" && l != "_" + a + ">")) throw new Error('Could not find matching close tag for "' + e + '".');
                return (c = e.match(/^\s*include\s+(\S+)/)) && (r = i[o - 1], r && (r == "<" + a || r == "<" + a + "-" || r == "<" + a + "_")) ? (d = h.shallowCopy({}, n.opts), u = s(c[1], d), f = n.opts.compileDebug ? "    ; (function(){\n      var __line = 1\n      , __lines = " + JSON.stringify(u.template) + "\n      , __filename = " + JSON.stringify(u.filename) + ";\n      try {\n" + u.source + "      } catch (e) {\n        rethrow(e, __lines, __filename, __line);\n      }\n    ; }).call(this)\n" : "    ; (function(){\n" + u.source + "    ; }).call(this)\n", n.source += f, void n.dependencies.push(t.resolveInclude(c[1], d.filename))) : void n.scanLine(e)
            })
        }, parseTemplateText: function () {
            for (var e, t = this.templateText, n = this.regex, i = n.exec(t), a = []; i;) e = i.index, 0 !== e && (a.push(t.substring(0, e)), t = t.slice(e)), a.push(i[0]), t = t.slice(i[0].length), i = n.exec(t);
            return t && a.push(t), a
        }, scanLine: function (e) {
            function t() {
                n.truncate ? (e = e.replace(/^(?:\r\n|\r|\n)/, ""), n.truncate = !1) : n.opts.rmWhitespace && (e = e.replace(/^\n/, "")), e && (e = e.replace(/\\/g, "\\\\"), e = e.replace(/\n/g, "\\n"), e = e.replace(/\r/g, "\\r"), e = e.replace(/"/g, '\\"'), n.source += '    ; __append("' + e + '")\n')
            }

            var n = this, i = this.opts.delimiter, a = 0;
            switch (a = e.split("\n").length - 1, e) {
                case"<" + i:
                case"<" + i + "_":
                    this.mode = d.modes.EVAL;
                    break;
                case"<" + i + "=":
                    this.mode = d.modes.ESCAPED;
                    break;
                case"<" + i + "-":
                    this.mode = d.modes.RAW;
                    break;
                case"<" + i + "#":
                    this.mode = d.modes.COMMENT;
                    break;
                case"<" + i + i:
                    this.mode = d.modes.LITERAL, this.source += '    ; __append("' + e.replace("<" + i + i, "<" + i) + '")\n';
                    break;
                case i + i + ">":
                    this.mode = d.modes.LITERAL, this.source += '    ; __append("' + e.replace(i + i + ">", i + ">") + '")\n';
                    break;
                case i + ">":
                case"-" + i + ">":
                case"_" + i + ">":
                    this.mode == d.modes.LITERAL && t(), this.mode = null, this.truncate = 0 === e.indexOf("-") || 0 === e.indexOf("_");
                    break;
                default:
                    if (this.mode) {
                        switch (this.mode) {
                            case d.modes.EVAL:
                            case d.modes.ESCAPED:
                            case d.modes.RAW:
                                e.lastIndexOf("//") > e.lastIndexOf("\n") && (e += "\n")
                        }
                        switch (this.mode) {
                            case d.modes.EVAL:
                                this.source += "    ; " + e + "\n";
                                break;
                            case d.modes.ESCAPED:
                                this.source += "    ; __append(escape(" + e.replace(C, "").trim() + "))\n";
                                break;
                            case d.modes.RAW:
                                this.source += "    ; __append(" + e.replace(C, "").trim() + ")\n";
                                break;
                            case d.modes.COMMENT:
                                break;
                            case d.modes.LITERAL:
                                t()
                        }
                    } else t()
            }
            n.opts.compileDebug && a && (this.currentLine += a, this.source += "    ; __line = " + this.currentLine + "\n")
        }
    }, t.escapeXML = h.escapeXML, t.__express = t.renderFile, t.VERSION = b
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0, i = e.length - 1; i >= 0; i--) {
            var a = e[i];
            "." === a ? e.splice(i, 1) : ".." === a ? (e.splice(i, 1), n++) : n && (e.splice(i, 1), n--)
        }
        if (t) for (; n--; n) e.unshift("..");
        return e
    }

    function a(e, t) {
        if (e.filter) return e.filter(t);
        for (var n = [], i = 0; i < e.length; i++) t(e[i], i, e) && n.push(e[i]);
        return n
    }

    var o = n(44), r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, s = function (e) {
        return r.exec(e).slice(1)
    };
    t.resolve = function () {
        for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
            var r = n >= 0 ? arguments[n] : o.process.cwd();
            if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
            r && (e = r + "/" + e, t = "/" === r.charAt(0))
        }
        return e = i(a(e.split("/"), function (e) {
            return !!e
        }), !t).join("/"), (t ? "/" : "") + e || "."
    }, t.normalize = function (e) {
        var n = t.isAbsolute(e), o = "/" === l(e, -1);
        return e = i(a(e.split("/"), function (e) {
            return !!e
        }), !n).join("/"), e || n || (e = "."), e && o && (e += "/"), (n ? "/" : "") + e
    }, t.isAbsolute = function (e) {
        return "/" === e.charAt(0)
    }, t.join = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return t.normalize(a(e, function (e, t) {
            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
            return e
        }).join("/"))
    }, t.relative = function (e, n) {
        function i(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++) ;
            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
            return t > n ? [] : e.slice(t, n - t + 1)
        }

        e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
        for (var a = i(e.split("/")), o = i(n.split("/")), r = Math.min(a.length, o.length), s = r, l = 0; l < r; l++) if (a[l] !== o[l]) {
            s = l;
            break
        }
        for (var c = [], l = s; l < a.length; l++) c.push("..");
        return c = c.concat(o.slice(s)), c.join("/")
    }, t.sep = "/", t.delimiter = ":", t.dirname = function (e) {
        var t = s(e), n = t[0], i = t[1];
        return n || i ? (i && (i = i.substr(0, i.length - 1)), n + i) : "."
    }, t.basename = function (e, t) {
        var n = s(e)[2];
        return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
    }, t.extname = function (e) {
        return s(e)[3]
    };
    var l = "b" === "ab".substr(-1) ? function (e, t, n) {
        return e.substr(t, n)
    } : function (e, t, n) {
        return t < 0 && (t = e.length + t), e.substr(t, n)
    }
}, function (e, t) {
    "use strict";

    function n() {
        if (!r) {
            r = !0;
            for (var e, t = o.length; t;) {
                e = o, o = [];
                for (var n = -1; ++n < t;) e[n]();
                t = o.length
            }
            r = !1
        }
    }

    function i() {
    }

    var a = e.exports = {}, o = [], r = !1;
    a.nextTick = function (e) {
        o.push(e), r || setTimeout(n, 0)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = i, a.addListener = i, a.once = i, a.off = i, a.removeListener = i, a.removeAllListeners = i, a.emit = i, a.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, a.cwd = function () {
        return "/"
    }, a.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, a.umask = function () {
        return 0
    }
}, function (e, t) {
    "use strict";
    var n = /[|\\{}()[\]^$+*?.]/g;
    t.escapeRegExpChars = function (e) {
        return e ? String(e).replace(n, "\\$&") : ""
    };
    var i = 'var _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n';
    t.escapeXML = new Function("markup", "\n    return markup == undefined\n    ? ''\n    : String(markup).replace(_MATCH_HTML, encode_char);\n"), t.escapeXML.toString = function () {
        return Function.prototype.toString.call(this) + ";\n" + i
    }, t.shallowCopy = function (e, t) {
        t = t || {};
        for (var n in t) e[n] = t[n];
        return e
    }, t.cache = {
        _data: {}, set: function (e, t) {
            this._data[e] = t
        }, get: function (e) {
            return this._data[e]
        }, reset: function () {
            this._data = {}
        }
    }
}, function (e, t) {
    "use strict";
    e.exports = {
        name: "ejs",
        description: "Embedded JavaScript templates",
        keywords: ["template", "engine", "ejs"],
        version: "2.5.2",
        author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
        contributors: ["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],
        license: "Apache-2.0",
        main: "./lib/ejs.js",
        repository: {type: "git", url: "git://github.com/mde/ejs.git"},
        bugs: "https://github.com/mde/ejs/issues",
        homepage: "https://github.com/mde/ejs",
        dependencies: {},
        devDependencies: {
            browserify: "^13.0.1",
            eslint: "^3.0.0",
            istanbul: "~0.4.3",
            jake: "^8.0.0",
            jsdoc: "^3.4.0",
            "lru-cache": "^4.0.1",
            mocha: "^3.0.2",
            rimraf: "^2.2.8",
            "uglify-js": "^2.6.2"
        },
        engines: {node: ">=0.10.0"},
        scripts: {
            test: "mocha",
            coverage: "istanbul cover node_modules/mocha/bin/_mocha",
            doc: "rimraf out && jsdoc -c jsdoc.json lib/* docs/jsdoc/*",
            devdoc: "rimraf out && jsdoc -p -c jsdoc.json lib/* docs/jsdoc/*"
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a() {
        var e = {1: "A", 2: "D"};
        return e[(0, s.getStore)().getState("adType")]
    }

    function o() {
        return 2 === (0, s.getStore)().getState("brandId")
    }

    function r() {
        return "D" === a() || "A" === a() && o()
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.getProductStockType = a, t.isNiuZhuan = o, t.isNeedReception = r;
    var s = n(1), l = n(19);
    i(l)
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.supplierTemplate = "\n<div class=\"resource-supplier-content\">\n    <div class=\"resource-supplier-name\">\n        <strong><%= aggregationCompanyName %></strong>\n    </div>\n    <div class=\"resource-supplier-statis\">\n        该品牌在<%= displayDestGroupName %>目的地满意度 <strong><%= statis %>%</strong>\n        <% if (delta != 0) { %>\n            <i>⎜</i>\n            <%= deltaSign > 0 ? '高' : (deltaSign < 0 ? '低' : '等') %>于<%= displayDestGroupName %>平均满意度 <span><%= delta %>%</span>\n        <% } %>\n    </div>\n</div>\n"
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        j = y.layer.open({
            type: 1,
            title: !1,
            closeBtn: !1,
            content: $("#T_couponsDetail").html(),
            area: ["960px", "auto"],
            btn: !1,
            success: function (t) {
                r(t, e)
            }
        })
    }

    function o() {
        s(), y.layer.close(j)
    }

    function r(e, t) {
        w = e, C = w.find(".J_couponMore"), D = w.find(".J_couponDetail"), l(), t && u(t)
    }

    function s() {
        c(), w = null, C = null, D = null
    }

    function l() {
        w.on("click", ".J_couponClose", o), w.find(".J_couponItem").each(function (e) {
            var t = $(this), n = t.data("id");
            t.find(".coupon-more");
            t.on("click", ".J_couponButton", function () {
                u(n)
            })
        }), D.click(function (e) {
            e.stopPropagation()
        }), C.click(function (e) {
            var t = $(this).data("id"), n = D.filter("[data-id=" + t + "]");
            n.is(":visible") ? ($(this).removeClass("expand"), n.hide()) : (C.removeClass("expand"), $(this).addClass("expand"), D.hide(), n.show()), e.stopPropagation()
        }), $(document).on("click", d)
    }

    function c() {
        $(document).off("click", d)
    }

    function d() {
        C && C.removeClass("expand"), D && D.hide()
    }

    function u(e) {
        (0, b["default"])().then(function () {
            f(e)
        })["catch"](function (e) {
        })
    }

    function f(e) {
        $.ajax({
            url: _.couponReceiveUrl({couponId: e}), dataType: "json", success: function (e) {
                e && e.success ? h() : v(e && e.message)
            }, error: function (e) {
                v(e && e.message)
            }
        })
    }

    function p(e) {
        var t = y.layer.open({
            type: 1,
            title: !1,
            time: 1500,
            content: e,
            area: ["400px", "auto"],
            btn: !1,
            closeBtn: !1,
            success: function (e) {
                e.on("click", ".dialog-close", function () {
                    y.layer.close(t)
                })
            }
        })
    }

    function h(e) {
        p('<div class="dialog-success"><div class="dialog-close"></div><i class="icon"></i>' + (e || "优惠券发放并绑定成功") + "</div>")
    }

    function v(e) {
        p('<div class="dialog-error"><div class="dialog-close"></div><i class="icon"></i>' + (e || "优惠券领取失败，请稍后重试。") + "</div>")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var m = n(1), y = n(15), g = n(50), b = i(g), _ = ($(window), void 0), x = void 0, j = void 0, w = void 0,
        C = void 0, D = void 0;
    t["default"] = {
        init: function (e) {
            _ = e, x = (0, m.getStore)(), $(".J_DetailCouponItem").click(function () {
                a()
            })
        }
    }
}, function (e, t, n) {
    "use strict";

    function i() {
        var e = location.host.split(".")[0];
        return "https://passport.tuniu.com/login/iframe?origin=" + encodeURIComponent("http://www.tuniu.com/ssoConnect/Iframe?reload=detail&domain=" + e)
    }

    function a() {
        return new Promise(function (e, t) {
            var n = s.layer.open({
                type: 2,
                title: !1,
                content: [i(), "no"],
                area: ["375px", "350px"],
                btn: !1,
                close: function () {
                    t()
                }
            });
            window[l] = function () {
                window[l] = null, e(), s.layer.close(n)
            }
        })
    }

    function o() {
        return r()["catch"](function () {
            return a()
        })
    }

    function r() {
        return new Promise(function (e, t) {
            $.ajax({
                url: "/tour/api/user", success: function (n) {
                    n && n.success && n.data && n.data.login ? e() : t()
                }, error: function () {
                    t()
                }
            })
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.loginP = t.isLoginP = void 0;
    var s = n(15), l = "detailLoginCallback";
    t["default"] = o, t.isLoginP = r, t.loginP = o
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a() {
        return {
            productId: g.getState("productId"),
            productType: g.getState("productType"),
            bookCityCode: g.getState("bookCityCode")
        }
    }

    function o(e) {
        $.ajax({url: e.url, data: a(), success: e.success, error: e.error})
    }

    function r() {
        o({
            url: y.checkFavoriteStateUrl(), success: function (e) {
                e && e.data && e.data.isCollected ? c() : d()
            }, error: function () {
                d()
            }
        })
    }

    function s() {
        o({
            url: y.addFavoriteUrl(), success: function (e) {
                e && e.data && e.data.isSuccess ? (c(), u({msg: "添加收藏成功"})) : u({type: "error", msg: "添加收藏失败，请重试"})
            }, error: function () {
                u({type: "error", msg: "添加收藏失败，请重试"})
            }
        })
    }

    function l() {
        o({
            url: y.removeFavoriteUrl(), success: function (e) {
                e && e.data && e.data.isSuccess ? (d(), u({msg: "删除收藏成功"})) : u({type: "error", msg: "删除收藏失败，请重试"})
            }, error: function () {
                u({type: "error", msg: "删除收藏失败，请重试"})
            }
        })
    }

    function c() {
        _ = !0, b.addClass("active").find(".J_FavoriteLabel").text("已收藏")
    }

    function d() {
        _ = !1, b.removeClass("active").find(".J_FavoriteLabel").text("收藏")
    }

    function u(e) {
        var t = h.layer.open({
            type: 1,
            title: !1,
            time: void 0 === e.time ? 1500 : e.time,
            content: '<div class="dialog-' + (e.type || "success") + '"><div class="dialog-close"></div><i class="icon"></i>' + e.msg + "</div>",
            area: ["400px", "auto"],
            btn: !1,
            closeBtn: !1,
            success: function (e) {
                e.on("click", ".dialog-close", function () {
                    h.layer.close(t)
                })
            }
        })
    }

    function f() {
        b.click(function () {
            m.loginP().then(function () {
                _ ? l() : s()
            })["catch"](function (e) {
            })
        });
        var e = $(".weixin_dialog");
        $(".resource-button-weixin").click(function (t) {
            t.stopPropagation(), e.toggleClass("active")
        }), e.on("click", function (e) {
            e.stopPropagation()
        }), $(document).click(function () {
            e.removeClass("active")
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var p = n(1), h = n(15), v = n(50), m = i(v), y = void 0, g = ($(window), void 0), b = void 0, _ = !1;
    t["default"] = {
        init: function (e) {
            y = e, g = (0, p.getStore)(), b = $(".J_Favorite"), m.isLoginP().then(function () {
                r()
            })["catch"](function () {
            }), f()
        }
    }
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        return !!e && f.indexOf(e) !== -1
    }

    function o(e) {
        var t = Object.assign({}, e.originCalendar), n = t.calendars;
        return Array.isArray(n) && (t.calendars = n.map(function (e) {
            var t = Object.assign({}, e);
            return delete t.promotions, t
        })), {originCalendar: t}
    }

    function r(e, t) {
        a(e) && (t = Object.assign({}, t), "LOAD_ORIGIN_CALENDAR" === e && (t = o(t)), u.push({
            action: e,
            data: t,
            time: Date.now()
        }))
    }

    function s() {
        var e = (0, d.getStore)();
        e && $.ajax({
            url: c["default"].url.trace(),
            type: "post",
            data: {
                type: "tour",
                productId: e.getState("productId"),
                productType: e.getState("productType"),
                actions: JSON.stringify(u)
            },
            success: function () {
                u.length = 0
            }
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.add = r, t.send = s;
    var l = n(19), c = i(l), d = n(1), u = [],
        f = ["INITIALIZED", "LOAD_ORIGIN_CALENDAR", "CHANGE_DEPART_DATE", "CHANGE_DEPART_CITY", "CHANGE_BACK_CITY", "CHANGE_ADULT", "CHANGE_CHILD", "CHANGE_FREE_CHILD", "CHANGE_PRODUCT_STATUS", "CHANGE_LOGIN_STATUS", "CHANG_DETAIL_JOURNEY", "LOAD_SUPPLIER"]
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.detailModule = void 0;
    var o = n(1), r = n(54), s = n(55), l = n(56), c = a(l), d = n(12), u = (a(d), n(47)), f = a(u), p = n(57),
        h = n(72), v = n(73), m = i(v), y = n(92), g = n(96), b = n(19), _ = i(b), x = n(78), j = n(84), w = i(j),
        C = n(87), D = i(C), k = n(90), T = i(k), I = ($(window), {
            init: function () {
                var e = $("#J_DetailTab"), t = e.height();
                (0, r.createFixer)(e, {range: {bottom: $("#J_Detail")}}), (0, s.createScrollTaber)(e, {offset: t}), this.initFavor(), this.initRoute(), 0 == (0, o.getStore)().getState("isSupportMultipleJourney") && (this.initVisa(), this.initGuide(), this.initUpgrade(), h.featureModule.init({journeyId: (0, o.getStore)().getState("defaultJourneyId")}), new m["default"]({journeyId: (0, o.getStore)().getState("defaultJourneyId")}).bind());
                var n = window.commentModule;
                n && n.init({
                    el: "#J_Comment",
                    productId: (0, o.getStore)().getState("productId"),
                    tab: {product: !1}
                }), y.advisoryModule.init({qaUrl: _["default"].url.qa}), g.relativeModule.init({
                    relatedUrl: _["default"].url.related,
                    mainHost: _["default"].host
                })
            }, initFavor: function () {
                $(".J_DetailFavorItem").each(function () {
                    var e = $(this);
                    e.on("click", ".detail-favor-more", function () {
                        e.addClass("expand")
                    }).on("click", ".detail-favor-less", function () {
                        e.removeClass("expand")
                    })
                })
            }, initRoute: function () {
                p.routeModule.init({
                    isNeedReception: f.isNeedReception,
                    getJourneyUrl: _["default"].url.getJourneyById,
                    guideUrl: _["default"].url.guide,
                    visaUrl: _["default"].url.visa
                })
            }, initUpgrade: function () {
                var e = $(".J_DetailUpgrade");
                c.on(e, function () {
                    c.off(e);
                    var t = new T["default"]({$el: e});
                    x.fetchUpgrade.fetch(function (e) {
                        t.load(e), t.render((0, o.getStore)().getState("defaultJourneyId"))
                    }, function () {
                        t.remove()
                    })
                })
            }, initVisa: function () {
                var e = $(".J_DetailVisa");
                c.on(e, function () {
                    c.off(e);
                    var t = new w["default"]({$el: e});
                    x.fetchVisa.fetch(function (e) {
                        t.load(e), t.render()
                    }, function () {
                        t.remove()
                    })
                })
            }, initGuide: function () {
                var e = $(".J_Guide");
                c.on(e, function () {
                    c.off(e);
                    var t = new D["default"]({$el: e});
                    x.fetchGuide.fetch(function (e) {
                        t.load(e), t.render()
                    }, function () {
                        t.remove()
                    })
                })
            }
        });
    t.detailModule = I
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        var t = e.offset() || {left: 0, top: 0}, n = e.width() || 0, i = e.height() || 0;
        return {left: t.left, right: t.left + n, top: t.top, bottom: t.top + i, width: n, height: i}
    }

    function a(e, t) {
        var n = new h(e, t);
        return p.push(n), n
    }

    function o(e) {
        e && e instanceof h ? e.update() : p.forEach(function (e) {
            e.update()
        })
    }

    function r() {
        clearTimeout(v), v = setTimeout(s, 150)
    }

    function s() {
        p.forEach(function (e) {
            e.update()
        })
    }

    function l() {
        clearTimeout(m), m = setTimeout(c, 10)
    }

    function c() {
        var e = u.scrollTop(), t = u.scrollLeft();
        p.forEach(function (n) {
            n.position(e, t)
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var d = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), u = ({
        range: {left: "", right: "", top: self, bottom: ""},
        offset: {left: 0, right: 0, top: 0, bottom: 0}
    }, $(window)), f = $("body"), p = [], h = function () {
        function e(t) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            n(this, e), t = $(t), this.fixed = !1, this.inited = !1, this.disabled = !1, this.range = null, this.$element = t, this.$target = t.children(":first-child"), this.originPosition = this._getOriginRectInfo(), this.originStyle = {
                position: this.$target.css("position"),
                left: this.$target.css("left"),
                top: this.$target.css("top")
            }, this.rangeRef = Object.assign({
                left: t,
                right: t,
                top: t,
                bottom: t
            }, a.range), this.ctx = a.ctx || f, this.offset = a.offset || {}, this.rangeOffset = a.rangeOffset || {}, void 0 === this.offset.left && (this.offset.left = this.originPosition.left - i(this.rangeRef.left).left), this.offset = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.offset), this.rangeOffset = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.rangeOffset), t.is(":visible") && this.position()
        }

        return d(e, [{
            key: "_getOriginRectInfo", value: function () {
                var e = this.$element.offset() || {left: 0, top: 0}, t = this.$target.width() || 0,
                    n = this.$target.height() || 0;
                return {left: e.left, right: e.left + t, top: e.top, bottom: e.top + n, width: t, height: n}
            }
        }, {
            key: "_updateOriginPosition", value: function () {
                this.originPosition = this._getOriginRectInfo()
            }
        }, {
            key: "_updateRange", value: function () {
                var e = this, t = {};
                return ["left", "right", "top", "bottom"].forEach(function (n) {
                    t[n] = i(e.rangeRef[n])[n] + e.rangeOffset[n]
                }), this.range = t, t
            }
        }, {
            key: "_update", value: function () {
                this._updateOriginPosition(), this._updateRange(), this.inited = !0
            }
        }, {
            key: "update", value: function () {
                this.disabled || (this._update(), this.position())
            }
        }, {
            key: "position", value: function (e, t) {
                this.inited === !1 && this._update(), e = void 0 === e ? u.scrollTop() : e, t = void 0 === t ? u.scrollLeft() : t;
                var n = this.originPosition, i = this.range, a = this.offset.top;
                e += a, e > i.top && e <= i.bottom ? this.$target.css({
                    position: "fixed",
                    left: i.left + this.offset.left - t,
                    top: Math.min(a, i.bottom - (e - a + n.height))
                }).addClass("fixed") : this.fixed || (this.fixed = !1, this.$target.css(this.originStyle).removeClass("fixed"))
            }
        }, {
            key: "disable", value: function () {
                this.disabled = !0
            }
        }, {
            key: "enable", value: function () {
                this.disabled = !1
            }
        }]), e
    }(), v = void 0, m = void 0;
    u.on("resize", function (e, t) {
        "FIXER" !== t && r()
    }).on("scroll", function (e, t) {
        "FIXER" !== t && l()
    }), t.createFixer = a, t.updateFixer = o
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        var n = new c(e, t);
        return l.push(n), n
    }

    function a(e) {
        instance && instance instanceof Fixer ? instance.update() : l.forEach(function (e) {
            e.update()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = $(window), s = $("body"), l = [], c = function () {
        function e(t, i) {
            n(this, e), t = $(t), this.inited = !1, this.disabled = !1, this.visible = !1, this.options = Object.assign({
                offset: 0,
                ctx: s,
                attr: "data-rel",
                firstDefault: !0
            }, i), this.firstDefault = this.options.firstDefault, this.$element = t;
            var a = this.options.ctx, o = this.options.attr;
            this.tabs = t.find("[" + o + "]").toArray().map(function (e) {
                return e = $(e), {$tab: e, $target: a.find(e.attr(o)), offset: {left: 0, top: 0, width: 0, height: 0}}
            }).filter(function (e) {
                return !!e.$target.length || void e.$tab.remove()
            }), this.update(), this.bind()
        }

        return o(e, [{
            key: "bind", value: function () {
                var e = this.options.offset;
                this.tabs.forEach(function (t) {
                    t.$tab.click(function () {
                        t.active || r.scrollTop(t.offset.top - e)
                    })
                })
            }
        }, {
            key: "isAvailable", value: function () {
                return !this.disabled && this.visible
            }
        }, {
            key: "_updateVisibility", value: function () {
                this.visible = this.$element.is(":visible")
            }
        }, {
            key: "_updateTabs", value: function () {
                this.isAvailable() && (this.tabs = this.tabs.filter(function (e) {
                    return !(!e.$target || !e.$target[0].parentNode) || (e.$tab.remove(), !1)
                }))
            }
        }, {
            key: "_update", value: function () {
                this.isAvailable() && (this.tabs.forEach(function (e) {
                    Object.assign(e.offset, e.$target.offset()), e.offset.width = e.$target.outerWidth(), e.offset.height = e.$target.outerHeight(), e.offset.right = e.offset.left + e.offset.width, e.offset.bottom = e.offset.top + e.offset.height
                }), this.tabs.sort(function (e, t) {
                    return e.offset.top - t.offset.top
                }), this.inited = !0)
            }
        }, {
            key: "_position", value: function (e) {
                var t = this;
                if (this.isAvailable()) {
                    var n = this.options.offset;
                    e = void 0 === e ? r.scrollTop() : e;
                    var i = this.tabs.reduce(function (i, a) {
                        return i === !0 || (i = i || a.offset.top, e + n > i && e + n <= a.offset.bottom ? (t.active(a), !0) : a.offset.bottom)
                    }, 0);
                    i !== !0 && (this.firstDefault ? this.active(this.tabs[0]) : this.deactive())
                }
            }
        }, {
            key: "update", value: function () {
                this._updateVisibility(), this._updateTabs(), this._update(), this._position()
            }
        }, {
            key: "position", value: function (e) {
                this.inited === !1 && (this._updateVisibility(), this._updateTabs(), this._update()), this._position(e)
            }
        }, {
            key: "active", value: function (e) {
                e && this.tabs.forEach(function (t) {
                    e === t ? (t.$tab.addClass("active"), t.active = !0) : (t.$tab.removeClass("active"), t.active = !1)
                })
            }
        }, {
            key: "deactive", value: function () {
                this.tabs.forEach(function (e) {
                    e.$tab.removeClass("active"), e.active = !1
                })
            }
        }, {
            key: "disable", value: function () {
                this.disabled = !0
            }
        }, {
            key: "enable", value: function () {
                this.disabled = !1
            }
        }]), e
    }();
    r.on("resize", function () {
        l.forEach(function (e) {
            e.update()
        })
    }).on("scroll resize", function () {
        var e = r.scrollTop();
        l.forEach(function (t) {
            t.position(e)
        })
    }), t.createScrollTaber = i, t.updateScrollTaber = a
}, function (e, t) {
    "use strict";

    function n(e, t) {
        f.push({target: e, callback: t}), d && (d = !1, c.on("resize", a).on("resize scroll", r), a(), r())
    }

    function i(e) {
        var t = -1;
        f.some(function (n, i) {
            if (n.target === e) return t = i, !0
        }), t !== -1 && f.splice(t, 1), 0 === f.length && (d = !0, c.off("resize", a).off("resize scroll", r))
    }

    function a() {
        clearTimeout(p), p = setTimeout(o, l)
    }

    function o() {
        u = c.height(), f.forEach(function (e) {
            e.visible = e.target.is(":visible"), e.offset = e.target.offset(), e.width = e.target.width(), e.height = e.target.height()
        })
    }

    function r() {
        clearTimeout(h), h = setTimeout(s, l)
    }

    function s() {
        var e = c.scrollTop(), t = !1;
        f.filter(function (n) {
            return !!(n.visible && n.offset && n.offset.top < u + e && n.offset.top + n.height > e) && (t = !0, !0)
        }).forEach(function (e) {
            e.callback && e.callback()
        }), t && c.trigger("resize")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var l = 150, c = $(window), d = !0, u = void 0, f = [], p = void 0, h = void 0;
    t.bind = n, t.unbind = i, t.on = n, t.off = i
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a() {
        L = !0, S.addClass("expand")
    }

    function o() {
        L = !1, S.removeClass("expand")
    }

    function r() {
        L ? o() : a()
    }

    function s() {
        C.click(o), S.click(function (e) {
            e.stopPropagation()
        }).on("click", ".journey-nav-select", r).on("click", ".journey-nav-item", o);
        var e = T.find(".journey-tab-item");
        e.length > 7 && (e.filter(":gt(5)").addClass("more"), T.addClass("more").on("click", ".J_JourneyTabMore", function () {
            N ? (T.removeClass("expand"), N = !1) : (T.addClass("expand"), N = !0), w.trigger("resize")
        }))
    }

    function l(e) {
        e.find("img").each(function () {
            var e = $(this), t = e.data("src");
            y.on(e, function () {
                var n = new Image;
                n.onload = function () {
                    e.prop("src", t).parent().addClass("loaded"), y.off(e), w.trigger("resize")
                }, n.onerror = function () {
                    e.parent().addClass("loaded"), y.off(e), w.trigger("resize")
                }, n.src = t, e.src = t
            })
        })
    }

    function c(e) {
        e.find(".item-label-fixed").each(function () {
            var e = $(this), t = e.find(".item-label-inner"), n = e.height(), i = t.height();
            n < i && (t.height(n), e.addClass("fold"), e.on("click", ".item-label-more", function () {
                e.addClass("expand"), t.height(i), w.trigger("resize")
            }).on("click", ".item-label-less", function () {
                e.removeClass("expand"), t.height(n), w.trigger("resize")
            }))
        }), w.trigger("resize")
    }

    function d(e) {
        var t = e.find(".J_Journey3RouteTab");
        (0, b.createTaber)(t, {ctx: e})
    }

    function u(e) {
        var t = F;
        return t[e]
    }

    function f() {
        if (!k.isNeedReception()) {
            var e = D.getState("supplier");
            $(".J_DetailSupplier:not(.loaded-supplier)").each(function () {
                var t = $(this), n = t.data("id");
                if (n) {
                    var i = (e || []).filter(function (e) {
                        return e.resId == n
                    })[0];
                    if (i) {
                        var a = "<strong>" + i.aggregationCompanyName + "</strong>";
                        a += "（该品牌在" + i.displayDestGroupName + "目的地满意度<strong>" + i.statis + "%</strong>", 0 != i.delta && (a += "，", a += i.deltaSign > 0 ? "高" : i.deltaSign < 0 ? "低" : "等", a += "于" + i.displayDestGroupName + "平均满意度 <span>" + i.delta + "%</span>"), a += "）", t.find(".J_DetailSupplierContent").html(a), t.show()
                    }
                }
                t.addClass("loaded-supplier")
            })
        }
    }

    function p() {
        if (k.isNeedReception()) {
            var e = D.getState("supplier");
            $(".J_DetailReception:not(.loaded-reception)").each(function () {
                var t = $(this), n = t.data("id");
                if (n) {
                    var i = (e || []).filter(function (e) {
                        return e.resId == n
                    })[0];
                    if (i && i.groundOperatorsName) {
                        var a = "接待服务由 <strong>" + (i.groundOperatorsName || "") + "</strong> 提供";
                        t.find(".J_DetailReceptionContent").html(a), t.show()
                    }
                }
                t.addClass("loaded-reception")
            })
        }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.routeModule = void 0;
    var h = n(1), v = n(8), m = (i(v), n(56)), y = i(m), g = n(54), b = n(58), _ = n(55), x = n(59), j = n(65),
        w = $(window), C = $(document), D = void 0, k = void 0, T = void 0, I = void 0, M = void 0, S = void 0,
        O = void 0, E = void 0, A = void 0, P = void 0, J = void 0, N = !1, L = !1, R = [], F = void 0, H = {
            init: function (e) {
                k = e, D = (0, h.getStore)(), T = $("#J_MultiJourneyTab"), I = T.find(".journey-tab-list"), M = $("#J_DetailMultiRoute"), S = $("#J_MultiJourneyNav"), O = S.find("[data-rel]"), E = $("#J_MultiJourneySelect"), A = T.height(), P = I.height(), J = $("#J_DetailTab").height(), F = {}, F[D.getState("defaultJourneyId")] = {journeyFourDetail: D.getState("defaultJourneyDetail")}, s(), D.getState("isSupportMultipleJourney") ? this.initMulti() : this.initSingle()
            }, initSingle: function () {
                var e = $(".J_DetailRoute"), t = e.data("id"), n = u(t);
                if (3 == D.getState("defaultJourneyType")) x.journey4Module.init(e, n && n.journeyFourDetail, {tabHeight: J}).init(); else {
                    var i = $(".J_DetailRoute"), a = $(".J_DetailJourney"), o = i.find(".J_JourneyNav"),
                        r = i.find(".J_JourneyTab");
                    (0, _.createScrollTaber)(o, {offset: J}), (0, b.createTaber)(r), (0, g.createFixer)(o, {
                        range: {
                            top: a,
                            bottom: a,
                            left: i,
                            right: i
                        }, offset: {top: J + 10}, ctx: i
                    });
                    c($("#J_Detail")), d(i), l(i)
                }
            }, initMulti: function () {
                I.find("[data-rel]").toArray().forEach(function (e, t) {
                    e = $(e);
                    var n = e.data("id"), i = u(n);
                    t > 0 && (i = null);
                    var a = new j.Journey(Object.assign({}, k, {journeyId: n, data: i}));
                    R.push(a);
                    var o = function () {
                        $(this);
                        a.activate(), R.forEach(function (e) {
                            e.isRendered() && e.journeyId != n && e.hide()
                        }), w.trigger("resize")
                    };
                    e.click(o), O.filter('[data-rel="' + e.data("rel") + '"]').click(function () {
                        w.scrollTop($(".J_multiContainer").offset().top - J + 5), o.call(this)
                    }), a.isLoaded() && a.bind(0 == t)
                }), D.subscribe(function () {
                    var e = D.getState("currentJourney");
                    R.forEach(function (t) {
                        t.journeyId == e ? t.activate() : t.isRendered() && t.hide()
                    })
                }, "change:currentJourney"), D.getState("supplier") ? (f(), p()) : D.subscribe(function () {
                    f(), p(), w.trigger("resize")
                }, "change:supplier")
            }
        };
    t.routeModule = H
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        var n = new l(e, t);
        return o.push(n), n
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = [], r = $("body"), s = $(window), l = function () {
        function e(t, i) {
            n(this, e), t = $(t), this.disabled = !1, this.options = Object.assign({selectFirst: !0, ctx: r}, i);
            var a = this.options.ctx;
            this.$element = t, this.tabs = t.find("[data-rel]").toArray().map(function (e) {
                return e = $(e), {$tab: e, $target: a.find(e.data("rel"))}
            }).filter(function (e) {
                return e.$target.length
            }), this.options.selectFirst && this.active(this.tabs[0]), this.bind()
        }

        return a(e, [{
            key: "bind", value: function () {
                var e = this;
                this.tabs.forEach(function (t) {
                    t.$tab.click(function () {
                        t.active || this.active(t)
                    }.bind(e))
                })
            }
        }, {
            key: "active", value: function (e) {
                e && (this.tabs.forEach(function (t) {
                    e === t ? (t.$tab.addClass("active"), t.$target.addClass("active"), t.active = !0) : (t.$tab.removeClass("active"), t.$target.removeClass("active"), t.active = !1)
                }), $.isFunction(this.options.onactive) && this.options.onactive(e), s.trigger("resize"))
            }
        }]), e
    }();
    t.createTaber = i
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
        D || (window.initializeMapModule = function () {
            if (D = !0, window.initializeMapModule = null, C.length) for (; C.length;) {
                var e = C.pop();
                e.callback(r(e.$element))
            }
            if (C.length) for (; C.length;) {
                var t = C.pop();
                t.callback(r(t.$element))
            }
        }, $('<script src="http://maps.google.cn/maps/api/js?sensor=false&callback=initializeMapModule" defer sync></script>').appendTo("head"))
    }

    function r(e, t) {
        return D ? e && e[0] ? new _.Map(e[0]) : void 0 : (C.push({$element: e, callback: t}), o(), null)
    }

    function s(e) {
        for (var t = C.length - 1; t >= 0; t--) C[t] && C[t].$element === e && C.splice(t, 1)
    }

    function l(e) {
        var t = [];
        return 1 == e.scheduleType && (e.detail || []).reduce(function (e, t) {
            var n = (t.data || []).reduce(function (e, t) {
                return 1 == t.moduleTypeValue && (t.data || []).reduce(function (e, t) {
                    return t.latitude && t.longitude && e.push(t), e
                }, e), e
            }, []);
            return e.push({day: t.day, cid: t.cid, list: n}), e
        }, t), t.filter(function (e) {
            return e.list.length
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.journey4Module = void 0;
    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, d = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), u = n(42), f = i(u), p = n(15), h = n(16), v = n(56), m = i(v), y = n(54), g = n(58), b = n(55), _ = n(60),
        x = n(62), j = n(64), w = $(window), C = ($(document), []), D = !1,
        k = f.compile(j.spotDetailTemplate, {client: !0, compileDebug: !1}), T = function () {
            function e(t, n, i) {
                a(this, e), this.valid = !(!n || "object" !== ("undefined" == typeof n ? "undefined" : c(n))), this.$element = t, this.data = n || {}, this.options = Object.assign({tabHeight: 0}, i), this.isResourceType = 2 == this.data.scheduleType, this.currentDayId = null, this.inited = !1, this.resList = null, this.navFixer = null
            }

            return d(e, [{
                key: "init", value: function () {
                    if (this.valid) {
                        this.inited = !0, this.resList = (this.data.detail || []).reduce(function (e, t) {
                            return e[t.cid] = t, (t.data || []).forEach(function (t) {
                                e[t.cid] = t, (t.data || []).forEach(function (t) {
                                    e[t.cid] = t
                                })
                            }), e
                        }, {}), this.smallMapData = l(this.data);
                        var e = this.$element.find(".J_JourneyNav"), t = this.$element.find(".J_DetailJourney");
                        (0, b.createScrollTaber)(e, Object.assign({
                            ctx: this.$element,
                            offset: this.options.tabHeight
                        }, this.options.scrollTaber));
                        if (!this.isResourceType) {
                            (0, b.createScrollTaber)(e, {
                                ctx: this.$element,
                                offset: this.options.tabHeight,
                                attr: "data-sub-rel"
                            })
                        }
                        if (this.navFixer = (0, y.createFixer)(e, Object.assign({
                                range: {
                                    top: t,
                                    bottom: t,
                                    left: this.$element,
                                    right: this.$element
                                }, offset: {top: this.options.tabHeight + 32}, ctx: this.$element
                            }, this.options.fixer)), !this.isResourceType) {
                            var n = this.$element.find(".J_Journey4RouteTab");
                            n.length && (0, g.createTaber)(n, {ctx: this.$element});
                            var i = this.$element.find(".J_DetailRouteBrief"), a = i.find(".J_DetailRouteBriefBox"),
                                o = i.find(".J_DetailRouteBriefInner"), s = a.height(), c = o.height();
                            this.initDownToolbar(), s < c && i.addClass("fold"), s > c && a.height(c), this.briefMinHeight = s, this.briefMaxHeight = c, this.$brief = i, this.$briefBox = a, this.$briefInner = o, this.smallMapData && this.smallMapData.length && (this.$mapDay = this.$element.find(".J_DetailJourneyMapDay"), this.$mapSmall = this.$element.find(".J_DetailJourneyMapSmall"), this.$mapSmall.length && this.setSmallMap(r(this.$mapSmall, this.setSmallMap.bind(this))))
                        }
                        this.$element.find("img").each(function () {
                            var e = $(this), t = e.data("src");
                            t && m.on(e, function () {
                                var n = new Image;
                                n.onload = function () {
                                    e.prop("src", t).parent().addClass("loaded"), m.off(e), w.trigger("resize")
                                }, n.onerror = function () {
                                    e.parent().addClass("loaded"), m.off(e), w.trigger("resize")
                                }, n.src = t, e.src = t
                            })
                        }), this.bind()
                    }
                }
            }, {
                key: "bind", value: function () {
                    var e = this;
                    this.$element.on("click", ".J_ViewMap", function () {
                    }).on("click", ".J_ViewDetail", function (t) {
                        var n = $(t.currentTarget).data("id");
                        if (n) {
                            var i = e.getResDataByCid(n);
                            i && e.openDetailDialog(i)
                        }
                    }).on("click", ".J_DetailRouteBriefMore", function () {
                        e.$briefBox.height(e.briefMaxHeight), e.$brief.addClass("expand"), w.trigger("resize")
                    }).on("click", ".J_DetailRouteBriefLess", function () {
                        e.$briefBox.height(e.briefMinHeight), e.$brief.removeClass("expand"), w.trigger("resize")
                    }).on("click", ".J_DetailJourneyMapPrev", function () {
                        e.prevMapDay()
                    }).on("click", ".J_DetailJourneyMapNext", function () {
                        e.nextMapDay()
                    }).on("click", ".J_DetailJourneyMapView", function () {
                        D && (0, x.openBigMap)(e.data, e.resList, e.currentDayId)
                    })
                }
            }, {
                key: "initDownToolbar", value: function () {
                    function e() {
                        var e = i.offset();
                        e && e.top < w.scrollTop() ? a.show() : a.hide()
                    }

                    function t() {
                        clearTimeout(n), n = setTimeout(e, 10)
                    }

                    var n = void 0, i = this.$element.find(".J_DetailRouteBrief"),
                        a = this.$element.find(".J_SideDownload, .J_SidePrint");
                    a.hide(), w.on("scroll", t)
                }
            }, {
                key: "setSmallMap", value: function (e) {
                    e && (this.$mapSmall.removeClass("loading"), this.map = e, this.loadMap())
                }
            }, {
                key: "loadMap", value: function (e) {
                    if (e = e || this.getCurrentDay()) {
                        var t = this.getDayResForMap(e);
                        this.currentDayId = e.cid, this.map.load(t), this.updateMapTab(e)
                    }
                }
            }, {
                key: "getResDataByCid", value: function (e) {
                    var t = null;
                    return this.resList && (t = this.resList[e] || null), t
                }
            }, {
                key: "getDayResForMap", value: function (e) {
                    return e && e.list ? e.list.map(function (e) {
                        return {moduleType: "spot", title: e.title, latitude: e.latitude, longitude: e.longitude}
                    }) : []
                }
            }, {
                key: "getCurrentDay", value: function (e) {
                    var t = void 0;
                    return e = e || this.currentDayId, t = e ? this.smallMapData.filter(function (t) {
                        return t.cid == e
                    })[0] : this.smallMapData[0]
                }
            }, {
                key: "getCurrentDayIndex", value: function () {
                    var e = this, t = 0;
                    return this.currentDayId && this.smallMapData.some(function (n, i) {
                        if (n.cid === e.currentDayId) return t = i, !0
                    }), t
                }
            }, {
                key: "getDayDataByIndex", value: function (e) {
                    return this.smallMapData[e || 0]
                }
            }, {
                key: "updateMapTab", value: function (e) {
                    e = e || this.getCurrentDay(), this.$mapDay.text("第" + e.day + "天")
                }
            }, {
                key: "prevMapDay", value: function () {
                    var e = this.getCurrentDayIndex();
                    if (!(e <= 0)) {
                        var t = this.getDayDataByIndex(e - 1);
                        t && this.loadMap(t)
                    }
                }
            }, {
                key: "nextMapDay", value: function () {
                    var e = this.getCurrentDayIndex();
                    if (!(e >= this.smallMapData.length - 1)) {
                        var t = this.getDayDataByIndex(e + 1);
                        t && this.loadMap(t)
                    }
                }
            }, {
                key: "enable", value: function () {
                    this.inited ? this.isResourceType || this.map || this.setSmallMap(r(this.$mapSmall, this.setSmallMap.bind(this))) : this.init(), this.navFixer && this.navFixer.update(), this.navFixer && this.navFixer.enable()
                }
            }, {
                key: "disable", value: function () {
                    this.isResourceType || this.map || s(this.$mapSmall), this.navFixer && this.navFixer.disable()
                }
            }, {
                key: "openDetailDialog", value: function (e) {
                    var t = p.layer.open({
                        title: !1,
                        type: 1,
                        content: k({data: e}),
                        closeBtn: !1,
                        btns: 0,
                        btn: !1,
                        area: ["830px", "440px"],
                        success: function (e) {
                            setTimeout(function () {
                                new h.Gallery(e.find(".J_DialogGallery"), {autoChange: !0})
                            }, 1), e.find(".J_DialogClose").click(function () {
                                p.layer.close(t)
                            })
                        }
                    })
                }
            }]), e
        }(), I = {
            init: function (e, t, n) {
                return new T(e, t, n)
            }
        };
    t.journey4Module = I
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Map = void 0;
    var a = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(61), r = "latitude", s = "longitude", l = function () {
        function e(t, n) {
            i(this, e), this.element = t, this.map = null, this.visible = !1, this.activedMarker = null, this.markers = [], this.option = n || {}
        }

        return a(e, [{
            key: "createMap", value: function () {
                return new google.maps.Map(this.element, {
                    zoom: 1,
                    maxZoom: 16,
                    minZoom: 1,
                    mapTypeControl: !1,
                    streetViewControl: !1,
                    scaleControl: !0
                })
            }
        }, {
            key: "getMap", value: function () {
                return this.map || (this.map = this.createMap()), this.map
            }
        }, {
            key: "getBound", value: function () {
                var e = this.resList, t = 0, n = 90, i = -180, a = 180;
                if (e && e) return e.forEach(function (e) {
                    t = Math.max(e[r], t), n = Math.min(e[r], n), a = Math.min(e[s], a), i = Math.max(e[s], i)
                }), new google.maps.LatLngBounds(new google.maps.LatLng(n, a), new google.maps.LatLng(t, i))
            }
        }, {
            key: "resize", value: function () {
                var e = this.getBound();
                google.maps.event.trigger(this.map, "resize"), this.map.setCenter(e.getCenter()), this.map.fitBounds(e)
            }
        }, {
            key: "renderMarker", value: function (e) {
                var t = (0, o.createMarker)({
                    serial: 1,
                    type: e.moduleType,
                    name: e.title,
                    latitude: e.latitude,
                    longitude: e.longitude
                });
                return t.id = e.id, t.setMap(this.map), this.markers.push(t), t
            }
        }, {
            key: "bindMarkerEvent", value: function (e, t) {
                var n = this;
                e.addListener("click", function () {
                    n.activateMarker(e), n.option && n.option.onMarkerActive && n.option.onMarkerActive(t)
                }), e.addListener("mouseenter", function () {
                    this.hightlight(), this.moveToTop()
                }), e.addListener("mouseleave", function () {
                    this.removeHightlight(), this.restoreZIndex()
                })
            }
        }, {
            key: "clearAllMarker", value: function () {
                for (var e, t = this.markers; t.length;) e = t.pop(), e.setMap(null)
            }
        }, {
            key: "activateMarker", value: function (e) {
                this.activedMarker && (this.activedMarker.deactivate(), this.activedMarker = null), e && (this.activedMarker = e, e.activate())
            }
        }, {
            key: "activateMarkerById", value: function (e) {
                var t = this.getMarkerById(e);
                t && this.activateMarker(t)
            }
        }, {
            key: "getMarkerById", value: function (e) {
                return this.markers.filter(function (t) {
                    return t.id == e
                })[0]
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.resList;
                this.activeSpot;
                t && t && (this.getMap(), this.clearAllMarker(), this.map.fitBounds(this.getBound()), t.forEach(function (t, n) {
                    e.bindMarkerEvent(e.renderMarker(Object.assign({}, t, {serial: n + 1})), t)
                }))
            }
        }, {
            key: "load", value: function (e) {
                this.resList = e, this.render()
            }
        }]), e
    }();
    t.Map = l
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function o() {
        return f ? f : f = function (e) {
            function t(e) {
                n(this, t);
                var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return a.data = e, a.active = !!e.active, e.active = !1, a.element = null, a.typeClassName = "jmap-spot-" + e.type, a.hightlightClassName = "jmap-spot-" + e.type + "-hightlight", a.activeClassName = "jmap-spot-" + a.data.type + "-active", a
            }

            return a(t, e), s(t, [{
                key: "onAdd", value: function () {
                    var e = this,
                        t = '<div class="jmap-spot ' + this.typeClassName + '"><div class="jmap-win-box"><i class="jmap-win-arrow"></i><div class="jmap-win-content">' + this.data.name + '</div></div><div class="jmap-marker"></div></div>',
                        n = this.getPanes(), i = $(t), a = i.clone().css({opacity: 0, filter: "alpha(opacity=0)"});
                    this.element = i, this.mask = a, a.find(".jmap-win-box, .jmap-marker").on("click", function () {
                        google.maps.event.trigger(e, "click")
                    }).on("mouseenter", function () {
                        google.maps.event.trigger(e, "mouseenter")
                    }).on("mouseleave", function () {
                        google.maps.event.trigger(e, "mouseleave")
                    }), this.active && this.activateBySelf(), n.markerLayer.appendChild(i[0]), n.floatPane.appendChild(a[0])
                }
            }, {
                key: "draw", value: function () {
                    this.setPosition(this.data[d], this.data[u])
                }
            }, {
                key: "onRemove", value: function () {
                    this.element.remove(), this.mask.remove(), this.element = null, this.mask = null
                }
            }, {
                key: "setZIndex", value: function (e) {
                    this.element && (e = e || 1, this.element.css("z-index", e), this.mask.css("z-index", e))
                }
            }, {
                key: "moveToTop", value: function () {
                    this.setZIndex(999)
                }
            }, {
                key: "restoreZIndex", value: function () {
                    this.setZIndex(1)
                }
            }, {
                key: "setPosition", value: function (e, t) {
                    if (this.element) {
                        var n = this.getProjection(), i = n.fromLatLngToDivPixel(new google.maps.LatLng(e, t)),
                            a = {top: i.y - c - 28 + "px", left: i.x - this.element.width() / 2 + l / 2 - 1 + "px"};
                        this.element.css(a), this.mask.css(a)
                    }
                }
            }, {
                key: "activate", value: function () {
                    this.active = !0, this.element && this.element.addClass(this.activeClassName), this.moveToTop()
                }
            }, {
                key: "activateBySelf", value: function () {
                    this.activate(), $(window).trigger("mapMarkerActivated", this.data)
                }
            }, {
                key: "deactivate", value: function () {
                    this.active = !1, this.element && this.element.removeClass(this.activeClassName), this.restoreZIndex()
                }
            }, {
                key: "deactivateBySelf", value: function () {
                    this.deactivate(), $(window).trigger("mapMarkerDeactivated", this.data)
                }
            }, {
                key: "hightlight", value: function () {
                    this.element && this.element.addClass(this.hightlightClassName)
                }
            }, {
                key: "removeHightlight", value: function () {
                    this.element && this.element.removeClass(this.hightlightClassName)
                }
            }]), t
        }(google.maps.OverlayView)
    }

    function r(e) {
        return new (o())(e)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    t.createMarker = r;
    var l = 43, c = 43, d = "latitude", u = "longitude", f = void 0
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a(e) {
        var t;
        return v.some(function (n) {
            if (n.cid == e || n.data && n.data.some(function (t) {
                    return t.cid == e
                })) return t = n, !0
        }), t
    }

    function o(e) {
        return e ? (e.data || []).reduce(function (t, n) {
            return (n.data || []).forEach(function (n) {
                n.latitude && n.longitude && t.push({
                    moduleType: "spot",
                    cid: n.cid,
                    id: n.cid,
                    dayId: e.cid,
                    title: n.title,
                    latitude: n.latitude,
                    longitude: n.longitude
                })
            }), t
        }, []) : []
    }

    function r() {
        return b.find(".map-sub-item").data("nav-id")
    }

    function s(e) {
        function t(e, t) {
            if (e) {
                var i = a(e);
                if (i) {
                    var r = o(i);
                    if (r.length) return s.load(r), t || (t = r[0].cid), n(e, t), void s.activateMarkerById(t)
                }
                n(e, t)
            }
        }

        function n(e, t) {
            b.find(".map-nav-active").removeClass("map-nav-active").end().find(".map-nav-sub").hide();
            var n = b.find(".map-main-item[data-nav-id=" + e + "]").addClass("map-nav-active").siblings(".map-nav-sub").show();
            n.find(".map-sub-item").removeClass("map-nav-active").filter("[data-sub-id=" + t + "]").addClass("map-nav-active"), n.end().closest(".map-nav-sub").show()
        }

        function i(e) {
            e && e.cid && e.dayId && t(e.dayId, e.cid)
        }

        var s = new c.Map(e.find(".J_MapDetail")[0], {onMarkerActive: i});
        b = e.find(".J_MapDetailJourney"), e.on("click", ".map-nav-item", function () {
            t($(this).data("nav-id"))
        }).on("click", ".map-sub-item", function () {
            t($(this).data("nav-id"), $(this).data("sub-id"))
        }).on("click", ".J_MapDetailClose", function () {
            d.layer.close(g)
        }), y && (b.find(".map-sub-item[data-nav-id=" + y + "]").length || (y = null)), t(y || r())
    }

    function l(e, t, n) {
        v = e.detail, m = t, y = n, g = d.layer.open({
            type: 1,
            title: !1,
            closeBtn: !1,
            content: h({data: v, scheduleType: e.scheduleType}),
            area: ["1000px", "600px"],
            btn: !1,
            success: s
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.openBigMap = l;
    var c = n(60), d = n(15), u = n(42), f = i(u), p = n(63),
        h = f.compile(p.mapDialogTemplate, {client: !0, compileDebug: !1}), v = void 0, m = void 0, y = void 0,
        g = void 0, b = void 0
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.mapDialogTemplate = '\n<div class="map-detail">\n    <div class="J_MapDetailClose map-detail-close"></div>\n    <div class="J_MapDetail map-detail-map"></div>\n    <div class="map-detail-journey">\n    <div class="J_MapDetailJourney map-nav">\n      <ul class="map-nav-main">\n        <% if (scheduleType == 1) { %>\n          <% for (var journeyIndex = 0, list; journeyIndex < data.length; journeyIndex++) { %>\n            <% if (data[journeyIndex] && (list = data[journeyIndex][\'data\']) && list.length) { %>\n                <% for (var isBlank = true, moduleIndex = 0; moduleIndex < list.length; moduleIndex++) {\n                    var moduleData = list[moduleIndex];\n                    if (moduleData.data && moduleData.data.length) {\n                        isBlank = !moduleData.data.filter(function(resData) {\n                            return resData && resData.latitude && resData.longitude\n                        }).length;\n                        if (!isBlank) {\n                            break;\n                        }\n                    }\n                } %>\n                <% if (!isBlank) { %>\n                    <li>\n                        <div class="map-nav-item map-main-item" data-nav-id="<%= data[journeyIndex][\'cid\'] %>">\n                          <div class="map-nav-label" title="第<%= data[journeyIndex][\'day\'] %>天">第<%= data[journeyIndex][\'day\'] %>天</div>\n                          <i class="map-nav-icon-serial"><span>D<%= data[journeyIndex][\'day\'] %></span></i>\n                        </div>\n                        <ul class="map-nav-sub">\n                          <% var itemIndex = 1;%>\n                          <% for (var moduleIndex = 0; moduleIndex < list.length; moduleIndex++) { %>\n                              <% var moduleData = list[moduleIndex] %>\n                              <% if (moduleData) { %>\n                                  <% if (moduleData.data && moduleData.data.length) { %>\n                                      <% for(var resIndex = 0; resIndex <  moduleData.data.length; resIndex++) { %>\n                                          <% var resData = moduleData.data[resIndex] %>\n                                          <% if (resData && resData.latitude && resData.longitude) { %>\n                                              <li>\n                                                <div class="map-nav-item map-sub-item" data-nav-id="<%= data[journeyIndex][\'cid\'] %>" data-sub-id="<%= resData[\'cid\'] %>">\n                                                  <div class="map-nav-label" title="<%= resData[\'title\'] %>"><%= resData[\'title\'] %></div>\n                                                  <i class="map-nav-icon-serial"><span><%= itemIndex++ %></span></i>\n                                                </div>\n                                              </li>\n                                          <% } %>\n                                      <% } %>\n                                  <% } %>\n                              <% } %>\n                          <% } %>\n                        </ul>\n                    </li>\n                <% } %>\n            <% } %>\n          <% } %>\n        <% } %>\n      </ul>\n    </div>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.spotDetailTemplate = '\n<div class="detail-dialog">\n    <!-- dialog head S -->\n    <div class="detail-dialog-head">\n        <div class="detail-dialog-title"><%= data.title %></div>\n        <div class="J_DialogClose detail-dialog-close"></div>\n    </div>\n    <!-- dialog head E -->\n    <div class="detail-dialog-body">\n        <div class="detail-dialog-gallery">\n            <% if (data.picture && data.picture.length) { %>\n                <div class="J_DialogGallery gallery">\n                    <div class="gallery-display">\n                        <ul class="gallery-display-box">\n                            <% if (data.picture && data.picture.length) { %>\n                                <% for(var i = 0, len = data.picture.length, item; i < data.picture.length && (item = data.picture[i]); i++) { %>\n                                <li class="gallery-photo<% if (i === 0) { %> gallery-photo-active<% } %>" data-src="<%= item.url %>" data-thumb="<%= item.url %>">\n                                    <img src="<%= item.url %>" alt="<%= item.title %>">\n                                </li>\n                                <% } %>\n                            <% } %>\n                        </ul>\n                    </div>\n                    <div class="gallery-nav">\n                        <div class="gallery-prev"><i class="icon"></i></div>\n                        <div class="gallery-next"><i class="icon"></i></div>\n                        <div class="gallery-thumbs">\n                            <div class="gallery-mask"></div>\n                            <div class="gallery-nav-box">\n                                <ul class="gallery-nav-list">\n                                    <% if (data.picture && data.picture.length) { %>\n                                        <% for(var i = 0, len = data.picture.length, item; i < data.picture.length && (item = data.picture[i]); i++) { %>\n                                        <li class="gallery-thumb"><img src="<%= item.url %>" alt="<%= item.title %>"></li>\n                                        <% } %>\n                                    <% } %>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            <% } %>\n        </div>\n\n        <div class="detail-dialog-info">\n            <div class="detail-dialog-info-box">\n                <div class="detail-dialog-info-title">\n                    景点介绍<i class="icon detail-content-icon-note"></i>\n                </div>\n                <% if (data.beenCount && data.beenCount != 0) { %>\n                    <div class="detail-dialog-info-item">\n                        <i class="icon detail-content-icon-person"></i>\n                        <strong class="detail-dialog-info-strong"><%= data.beenCount %></strong>人去过\n                    </div>\n                <% } %>\n                <% if (data.times != 0) { %>\n                    <div class="detail-dialog-info-item">\n                        <i class="icon detail-content-icon-clock"></i> 游玩时长:\n                        <%= data.times %>\n                    </div>\n                <% } %>\n                <% if (data.opened) { %>\n                    <div class="detail-dialog-info-item">\n                        <i class="icon detail-content-icon-calendar"></i> 开放时间:\n                        <%= data.opened %>\n                    </div>\n                <% } %>\n                <% if (data.telephone) { %>\n                    <div class="detail-dialog-info-item">\n                        <i class="icon detail-content-icon-telphone"></i> 电话号码:\n                        <%= data.telephone %>\n                    </div>\n                <% } %>\n                <% if (data.address) { %>\n                    <div class="detail-dialog-info-item">\n                        <i class="icon detail-content-icon-location"></i> 景点地址:\n                        <%= data.address %>\n                    </div>\n                <% } %>\n                <% if (data.content) { %>\n                    <div class="detail-dialog-info-desc">\n                        <%- data.content %>\n                    </div>\n                <% } %>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e) {
        if (document.cookie.length > 0) {
            var t = document.cookie.indexOf(e + "=");
            if (t != -1) {
                t = t + e.length + 1;
                var n = document.cookie.indexOf(";", t);
                return n == -1 && (n = document.cookie.length), unescape(document.cookie.substring(t, n))
            }
        }
        return ""
    }

    function s(e) {
        e.find("img").each(function () {
            var e = $(this), t = e.data("src");
            R.on(e, function () {
                var n = new Image;
                n.onload = function () {
                    e.prop("src", t).parent().addClass("loaded"), R.off(e), te.trigger("resize")
                }, n.onerror = function () {
                    e.parent().addClass("loaded"), R.off(e), te.trigger("resize")
                }, n.src = t, e.src = t
            })
        })
    }

    function l(e) {
        e.find(".item-label-fixed").each(function () {
            var e = $(this), t = e.find(".item-label-inner"), n = e.height(), i = t.height();
            n < i && (t.height(n), e.addClass("fold"), e.on("click", ".item-label-more", function () {
                e.addClass("expand"), t.height(i), te.trigger("resize")
            }).on("click", ".item-label-less", function () {
                e.removeClass("expand"), t.height(n), te.trigger("resize")
            }))
        }), te.trigger("resize")
    }

    function c(e) {
        var t = e.find(".J_Journey3RouteTab");
        (0, G.createTaber)(t, {ctx: e})
    }

    function d(e) {
        var t = e && e.journeyFourDetail;
        return t && "object" == ("undefined" == typeof t ? "undefined" : p(t)) && (t.detail || []).forEach(function (e, t) {
            e.cid = "d" + t, (e.data || []).forEach(function (t, n) {
                t.cid = e.cid + "-m" + n, (t.data || []).forEach(function (e, n) {
                    return e.cid = t.cid + "-s" + n
                })
            })
        }), e
    }

    function u(e) {
        var t = "", n = (e || []).filter(function (e) {
            return 15 === e.type && e.desc
        });
        if (n.length) try {
            var i = JSON.parse(n[0] && n[0].desc);
            t = i && i.modules
        } catch (a) {
        } else n = (e || []).filter(function (e) {
            return 12 === e.type && e.desc
        }), n.length && (t = n[0] && n[0].desc);
        return t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.Journey = void 0;
    var f = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, h = n(1), v = n(42), m = a(v), y = n(66), g = n(68), b = n(69), _ = n(70), x = n(71), j = n(72), w = n(73),
        C = i(w), D = n(79), k = n(80), T = n(81), I = n(82), M = n(83), S = n(84), O = i(S), E = n(87), A = i(E),
        P = n(90), J = i(P), N = n(78), L = n(56), R = a(L), F = n(59), H = n(54), G = n(58), V = n(55), B = 1, U = 3,
        z = 4, Y = 5, W = void 0, K = void 0, q = void 0, X = void 0, Z = void 0, Q = $("#J_MultiJourneyTab"),
        ee = Q.find(".journey-tab-list"), te = $(window), ne = void 0, ie = void 0;
    t.Journey = function () {
        function e(t) {
            o(this, e), this.status = B, this.config = t, this.journeyId = t.journeyId, this.$tab = ee.find(".journey-tab-item").filter('[data-id="' + this.journeyId + '"]'), this.rel = this.$tab.data("rel"), this.journeyIns = null, this.active = !1, this.journeyData = null, W = $("#J_MultiJourneyNav"), K = W.find("[data-rel]"), q = $("#J_DetailTab").height(), X = $("#J_DetailMultiRoute"), Z = $("#J_MultiJourneySelect"), ne = (0, h.getStore)(), ie = ne.getState("multiJourneyBaseInfos"), t.data && (this.journeyData = t.data, this.status = z), $(this.rel).length && (this.status = Y)
        }

        return f(e, [{
            key: "initVisa", value: function () {
                R.off(this.$visa);
                var e = new O["default"]({$el: this.$visa});
                N.fetchVisa.fetch(function (t) {
                    e.load(t), e.render()
                }, function () {
                    e.remove()
                })
            }
        }, {
            key: "initGuide", value: function () {
                R.off(this.$guide);
                var e = new A["default"]({$el: this.$guide});
                N.fetchGuide.fetch(function (t) {
                    e.load(t), e.render()
                }, function () {
                    e.remove()
                })
            }
        }, {
            key: "initUpgrade", value: function () {
                var e = this;
                R.off(this.$upgrade);
                var t = new J["default"]({$el: this.$upgrade});
                N.fetchUpgrade.fetch(function (n) {
                    t.load(n), t.render(e.journeyId)
                }, function () {
                    t.remove()
                })
            }
        }, {
            key: "activate", value: function () {
                var e = this;
                e.active = !0, e.journeyData ? (e.isRendered() || e.render(), e.show()) : e.fetch()
            }
        }, {
            key: "show", value: function () {
                var e = this.journeyIns;
                ["$tab", "$target", "$floatTab"].forEach(function (t) {
                    return e[t].addClass("active")
                }), e.enable(), Z.text(e.label)
            }
        }, {
            key: "hide", value: function () {
                var e = this.journeyIns;
                ["$tab", "$target", "$floatTab"].forEach(function (t) {
                    return e[t].removeClass("active")
                }), e.disable()
            }
        }, {
            key: "fetch", value: function (e) {
                var t = this;
                $.ajax({
                    url: t.config.getJourneyUrl(),
                    data: t.getJourneyReqParams(t.journeyId),
                    beforeSend: function () {
                        t.startLoading()
                    }
                }).done(function (e) {
                    e && e.success && e.data && e.data.journeyDetail && t.load(d(e.data.journeyDetail))
                }).always(function () {
                    t.stopLoading()
                })
            }
        }, {
            key: "load", value: function (e) {
                this.journeyData = e, this.status = z, this.active && this.render()
            }
        }, {
            key: "render", value: function () {
                var e = this, t = e.createRender(g.multiJourneyTemplate), n = e.createRender(b.featureTemplate),
                    i = e.createRender(_.journeyTemplate), a = e.createRender(x.feeTemplate),
                    o = e.createRender(D.policyTemplate), s = e.createRender(T.journey4Template),
                    l = e.createRender(k.journeyOldTemplate), c = e.createRender(I.journey4PhotoTemplate),
                    d = e.createRender(M.journey4ResourceTemplate), f = {
                        helper: y.helper,
                        cdn: {cdnHost: window.cdnConfig && window.cdnConfig.url || "http://img1.tuniucdn.com"}
                    }, p = t(Object.assign({}, f, {
                        journeyDetail: e.journeyData,
                        journeyInfo: (ie || []).filter(function (t) {
                            return t.journeyId == e.journeyId
                        })[0] || {},
                        data: {
                            bookCityCode: ne.getState("bookCityCode"),
                            productId: ne.getState("productId"),
                            productType: ne.getState("productType"),
                            classBrandId: ne.getState("classBrandId"),
                            operateFlag: ne.getState("operateFlag"),
                            teamCityName: ne.getState("teamCityName")
                        },
                        isSupportMultipleJourney: (ie || []).length > 1,
                        journey4Scene: e.journeyData && e.journeyData.journeyFourDetail,
                        characteristic: u(e.journeyData && e.journeyData.tourRecommend),
                        cityCodeFromCookie: r("tuniuuser_citycode")
                    }), null, function (e, t) {
                        switch (e) {
                            case"feature":
                                return n(Object.assign({}, f, t));
                            case"journey":
                                return i(Object.assign({}, f, t), null, function (e, t) {
                                    switch (e) {
                                        case"journey4":
                                            return s(Object.assign({}, f, t), null, function (e, t) {
                                                if ("journey4Resource" == e) return d(Object.assign({}, f, t), null, function (e, t) {
                                                    if ("journey4Photo" == e) return c(Object.assign({}, f, t))
                                                })
                                            });
                                        case"journeyOld":
                                            return l(Object.assign({}, f, t))
                                    }
                                });
                            case"fee":
                                return a(Object.assign({}, f, t));
                            case"policy":
                                return o(Object.assign({}, f, t))
                        }
                    });
                $(".J_multiContainer").append($('<div class="J_journey' + this.journeyId + '"></div>')), $(".J_journey" + this.journeyId).html(p), this.status = Y, this.bind(!0)
            }
        }, {
            key: "bind", value: function (e) {
                var t = this;
                t.initSupplier(), t.initReception(), t.$visa = $(".J_DetailVisa").filter('[data-id="' + t.journeyId + '"]'), t.$guide = $(".J_Guide").filter('[data-id="' + t.journeyId + '"]'), t.$upgrade = $(".J_DetailUpgrade").filter('[data-id="' + t.journeyId + '"]'), R.on(t.$visa, t.initVisa.bind(t)), R.on(t.$guide, t.initGuide.bind(t)), R.on(t.$upgrade, t.initUpgrade.bind(t)), 3 == ne.getState("defaultJourneyType") ? t.journeyIns = t.initOneJourney4(t.journeyData) : t.journeyIns = t.initOneJourney3(), e && t.show()
            }
        }, {
            key: "initOneJourney3", value: function () {
                function e() {
                    return v ? (m && m.update(), y && y.update(), g && g.update(), void(b && b.update())) : (v = !0, l(a), c(d), f.length && (m = (0, H.createFixer)(f, {
                        range: {
                            top: f,
                            bottom: a,
                            left: X,
                            right: X
                        }, offset: {top: h, left: 0}, ctx: a
                    }), h += f.height(), y = (0, V.createScrollTaber)(f, {
                        offset: h,
                        ctx: a
                    })), g = (0, H.createFixer)(r, {
                        range: {top: u, bottom: u, left: a, right: a},
                        offset: {top: h + 10},
                        ctx: a
                    }), void(b = (0, V.createScrollTaber)(r, {offset: h})))
                }

                function t() {
                    m && m.disable(), y && y.disable(), g && g.disable(), b && b.disable()
                }

                function n() {
                    e(), p.prepend(W), m && m.enable(), y && y.enable(), g && g.enable(), b && b.enable()
                }

                var i = this.$tab.data("rel"), a = $(i), o = K.filter('[data-rel="' + i + '"]'),
                    r = a.find(".J_JourneyNav"), d = a.find(".J_DetailRoute"), u = a.find(".J_DetailJourney"),
                    f = a.find(".J_JourneyTab"), p = (a.find(".J_JourneyRouteTab"), f.find(".section-box-toolbar")),
                    h = q, v = !1, m = void 0, y = void 0, g = void 0, b = void 0;
                return s(a), {
                    $tab: this.$tab,
                    $floatTab: o,
                    $target: a,
                    id: this.journeyId,
                    label: o.text(),
                    disable: t,
                    enable: n
                }
            }
        }, {
            key: "initOneJourney4", value: function (e) {
                function t() {
                    c || (c = !0, r.length && (d = (0, H.createFixer)(r, {
                        range: {top: r, bottom: a, left: X, right: X},
                        offset: {top: q, left: 0},
                        ctx: a
                    }), u = (0, V.createScrollTaber)(r, {
                        offset: l,
                        ctx: a
                    }))), s.prepend(W), f.enable(), d && d.update(), u && u.update(), d && d.enable(), u && u.enable()
                }

                function n() {
                    f.disable(), d && d.disable(), u && u.disable()
                }

                var i = this.$tab.data("rel"), a = $(i), o = K.filter('[data-rel="' + i + '"]'),
                    r = a.find(".J_JourneyTab"), s = r.find(".section-box-toolbar"), l = q, c = !1, d = void 0,
                    u = void 0;
                r.length && (l += r.height());
                var f = F.journey4Module.init(a, e && e.journeyFourDetail, {tabHeight: l});
                return j.featureModule.init({journeyId: this.journeyId}), new C["default"]({journeyId: this.journeyId}).bind(), {
                    $tab: this.$tab,
                    $floatTab: o,
                    $target: a,
                    id: this.journeyId,
                    label: o.text(),
                    disable: n,
                    enable: t
                }
            }
        }, {
            key: "initSupplier", value: function () {
                if (!this.config.isNeedReception()) {
                    var e = ne.getState("supplier");
                    e && $(".J_DetailSupplier:not(.loaded-supplier)").each(function () {
                        var t = $(this), n = t.data("id");
                        if (n) {
                            var i = (e || []).filter(function (e) {
                                return e.resId == n
                            })[0];
                            if (i) {
                                var a = "<strong>" + i.aggregationCompanyName + "</strong>";
                                a += "（该品牌在" + i.displayDestGroupName + "目的地满意度<strong>" + i.statis + "%</strong>", 0 != i.delta && (a += "，", a += i.deltaSign > 0 ? "高" : i.deltaSign < 0 ? "低" : "等", a += "于" + i.displayDestGroupName + "平均满意度 <span>" + i.delta + "%</span>"), a += "）", t.find(".J_DetailSupplierContent").html(a), t.show()
                            }
                        }
                        t.addClass("loaded-supplier")
                    })
                }
            }
        }, {
            key: "initReception", value: function () {
                if (this.config.isNeedReception()) {
                    var e = ne.getState("supplier");
                    e && $(".J_DetailReception:not(.loaded-reception)").each(function () {
                        var t = $(this), n = t.data("id");
                        if (n) {
                            var i = (e || []).filter(function (e) {
                                return e.resId == n
                            })[0];
                            if (i && i.groundOperatorsName) {
                                var a = "接待服务由 <strong>" + (i.groundOperatorsName || "") + "</strong> 提供";
                                t.find(".J_DetailReceptionContent").html(a), t.show()
                            }
                        }
                        t.addClass("loaded-reception")
                    })
                }
            }
        }, {
            key: "loadGuide", value: function (e) {
                this.guide.load(e), this.isRendered() && this.active && this.renderGuide()
            }
        }, {
            key: "renderGuide", value: function () {
                this.guide.isLoaded() && !this.guide.isRendered() && (this.guide.render(), this.append(this.guide), this.guide.bind())
            }
        }, {
            key: "getJourneyReqParams", value: function () {
                return {
                    productId: ne.getState("productId"),
                    journeyId: this.journeyId,
                    bookCity: ne.getState("bookCityCode"),
                    departCity: ne.getState("departCityCode"),
                    backCity: ne.getState("backCityCode")
                }
            }
        }, {
            key: "startLoading", value: function () {
                $(".J_journeyLoading").show().css({height: $(".J_MultiDetailJourney.active").height()})
            }
        }, {
            key: "stopLoading", value: function () {
                $(".J_journeyLoading").hide(), te.trigger("resize")
            }
        }, {
            key: "createRender", value: function (e) {
                return m.compile(e, {client: !0, compileDebug: !1})
            }
        }, {
            key: "isLoading", value: function () {
                return this.status == U
            }
        }, {
            key: "isLoaded", value: function () {
                return this.status >= z
            }
        }, {
            key: "isRendered", value: function () {
                return this.status >= Y
            }
        }]), e
    }()
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.helper = void 0;
    var a = n(67), o = i(a);
    t.helper = {
        removeHtmlTag: function (e) {
            return String(e).replace(/<[a-zA-Z\/][^<>]*>/g, "")
        }, trimBoundBr: function (e) {
            return "string" == typeof e && e ? e.replace(/\s/g, "").replace(/^(<br\/?>)+/, "").replace(/(<br\/?>)+$/, "") : e
        }, resizeImage: function (e, t, n, i, a) {
            var o = /^(.*?)(_w\d+_h\d+_c\d+_t\d+)*\.([\w]+)$/, r = void 0;
            return t = t || 0, n = n || 0, i = i || 0, a = a || 0, (r = o.exec(e)) ? [r[1], "_", ["w" + t, "h" + n, "c" + i, "t" + a].join("_"), ".", r[3]].join("") : e
        }, nb2br: function (e) {
            return e = e || "", e.replace(/\n+?/gm, "<br>")
        }, calculateDuration: function (e, t) {
            if (e && t) {
                var n = /^(\d+):(\d+)$/, i = n.exec(e);
                n.lastIndex = 0;
                var a = n.exec(t);
                if (i && a) return 60 * parseInt(a[1], 10) + parseInt(a[2], 10) - 60 * parseInt(i[1], 10) - parseInt(i[2], 10)
            }
            return 0
        }, wrap: function (e) {
            return e
        }, empty: function (e) {
            function t(e) {
                return o.isString(e) ? !e.replace(/^\s*|\s*$/g, "") : o.isNumber(e) ? !e : o.isBoolean(e) ? e : Array.isArray(e) ? e.every(t) : o.isEmpty(e)
            }

            return t(e)
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    (function () {
        var n = this || window, a = n._, o = {}, r = Array.prototype, s = Object.prototype, l = Function.prototype,
            c = r.push, d = r.slice, u = r.concat, f = s.toString, p = s.hasOwnProperty, h = r.forEach, v = r.map,
            m = r.reduce, y = r.reduceRight, g = r.filter, b = r.every, _ = r.some, x = r.indexOf, j = r.lastIndexOf,
            w = Array.isArray, C = Object.keys, D = l.bind, k = function G(e) {
                return e instanceof G ? e : this instanceof G ? void(this._wrapped = e) : new G(e)
            };
        "undefined" != typeof e && e.exports && (t = e.exports = k), t._ = k, k.VERSION = "1.6.0";
        var T = k.each = k.forEach = function (e, t, n) {
            if (null == e) return e;
            if (h && e.forEach === h) e.forEach(t, n); else if (e.length === +e.length) {
                for (var i = 0, a = e.length; i < a; i++) if (t.call(n, e[i], i, e) === o) return
            } else for (var r = k.keys(e), i = 0, a = r.length; i < a; i++) if (t.call(n, e[r[i]], r[i], e) === o) return;
            return e
        };
        k.map = k.collect = function (e, t, n) {
            var i = [];
            return null == e ? i : v && e.map === v ? e.map(t, n) : (T(e, function (e, a, o) {
                i.push(t.call(n, e, a, o))
            }), i)
        };
        var I = "Reduce of empty array with no initial value";
        k.reduce = k.foldl = k.inject = function (e, t, n, i) {
            var a = arguments.length > 2;
            if (null == e && (e = []), m && e.reduce === m) return i && (t = k.bind(t, i)), a ? e.reduce(t, n) : e.reduce(t);
            if (T(e, function (e, o, r) {
                    a ? n = t.call(i, n, e, o, r) : (n = e, a = !0)
                }), !a) throw new TypeError(I);
            return n
        }, k.reduceRight = k.foldr = function (e, t, n, i) {
            var a = arguments.length > 2;
            if (null == e && (e = []), y && e.reduceRight === y) return i && (t = k.bind(t, i)), a ? e.reduceRight(t, n) : e.reduceRight(t);
            var o = e.length;
            if (o !== +o) {
                var r = k.keys(e);
                o = r.length
            }
            if (T(e, function (s, l, c) {
                    l = r ? r[--o] : --o, a ? n = t.call(i, n, e[l], l, c) : (n = e[l], a = !0)
                }), !a) throw new TypeError(I);
            return n
        }, k.find = k.detect = function (e, t, n) {
            var i;
            return $(e, function (e, a, o) {
                if (t.call(n, e, a, o)) return i = e, !0
            }), i
        }, k.filter = k.select = function (e, t, n) {
            var i = [];
            return null == e ? i : g && e.filter === g ? e.filter(t, n) : (T(e, function (e, a, o) {
                t.call(n, e, a, o) && i.push(e)
            }), i)
        }, k.reject = function (e, t, n) {
            return k.filter(e, function (e, i, a) {
                return !t.call(n, e, i, a)
            }, n)
        }, k.every = k.all = function (e, t, n) {
            t || (t = k.identity);
            var i = !0;
            return null == e ? i : b && e.every === b ? e.every(t, n) : (T(e, function (e, a, r) {
                if (!(i = i && t.call(n, e, a, r))) return o
            }), !!i)
        };
        var $ = k.some = k.any = function (e, t, n) {
            t || (t = k.identity);
            var i = !1;
            return null == e ? i : _ && e.some === _ ? e.some(t, n) : (T(e, function (e, a, r) {
                if (i || (i = t.call(n, e, a, r))) return o
            }), !!i)
        };
        k.contains = k.include = function (e, t) {
            return null != e && (x && e.indexOf === x ? e.indexOf(t) != -1 : $(e, function (e) {
                return e === t
            }))
        }, k.invoke = function (e, t) {
            var n = d.call(arguments, 2), i = k.isFunction(t);
            return k.map(e, function (e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, k.pluck = function (e, t) {
            return k.map(e, k.property(t))
        }, k.where = function (e, t) {
            return k.filter(e, k.matches(t))
        }, k.findWhere = function (e, t) {
            return k.find(e, k.matches(t))
        }, k.max = function (e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var i = -(1 / 0), a = -(1 / 0);
            return T(e, function (e, o, r) {
                var s = t ? t.call(n, e, o, r) : e;
                s > a && (i = e, a = s)
            }), i
        }, k.min = function (e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            var i = 1 / 0, a = 1 / 0;
            return T(e, function (e, o, r) {
                var s = t ? t.call(n, e, o, r) : e;
                s < a && (i = e, a = s)
            }), i
        }, k.shuffle = function (e) {
            var t, n = 0, i = [];
            return T(e, function (e) {
                t = k.random(n++), i[n - 1] = i[t], i[t] = e
            }), i
        }, k.sample = function (e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = k.values(e)), e[k.random(e.length - 1)]) : k.shuffle(e).slice(0, Math.max(0, t))
        };
        var M = function (e) {
            return null == e ? k.identity : k.isFunction(e) ? e : k.property(e)
        };
        k.sortBy = function (e, t, n) {
            return t = M(t), k.pluck(k.map(e, function (e, i, a) {
                return {value: e, index: i, criteria: t.call(n, e, i, a)}
            }).sort(function (e, t) {
                var n = e.criteria, i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (n < i || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var S = function (e) {
            return function (t, n, i) {
                var a = {};
                return n = M(n), T(t, function (o, r) {
                    var s = n.call(i, o, r, t);
                    e(a, s, o)
                }), a
            }
        };
        k.groupBy = S(function (e, t, n) {
            k.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), k.indexBy = S(function (e, t, n) {
            e[t] = n
        }), k.countBy = S(function (e, t) {
            k.has(e, t) ? e[t]++ : e[t] = 1
        }), k.sortedIndex = function (e, t, n, i) {
            n = M(n);
            for (var a = n.call(i, t), o = 0, r = e.length; o < r;) {
                var s = o + r >>> 1;
                n.call(i, e[s]) < a ? o = s + 1 : r = s
            }
            return o
        }, k.toArray = function (e) {
            return e ? k.isArray(e) ? d.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
        }, k.size = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
        }, k.first = k.head = k.take = function (e, t, n) {
            if (null != e) return null == t || n ? e[0] : t < 0 ? [] : d.call(e, 0, t)
        }, k.initial = function (e, t, n) {
            return d.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, k.last = function (e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : d.call(e, Math.max(e.length - t, 0))
        }, k.rest = k.tail = k.drop = function (e, t, n) {
            return d.call(e, null == t || n ? 1 : t)
        }, k.compact = function (e) {
            return k.filter(e, k.identity)
        };
        var O = function V(e, t, n) {
            return t && k.every(e, k.isArray) ? u.apply(n, e) : (T(e, function (e) {
                k.isArray(e) || k.isArguments(e) ? t ? c.apply(n, e) : V(e, t, n) : n.push(e)
            }), n)
        };
        k.flatten = function (e, t) {
            return O(e, t, [])
        }, k.without = function (e) {
            return k.difference(e, d.call(arguments, 1))
        }, k.partition = function (e, t) {
            var n = [], i = [];
            return T(e, function (e) {
                (t(e) ? n : i).push(e)
            }), [n, i]
        }, k.uniq = k.unique = function (e, t, n, i) {
            k.isFunction(t) && (i = n, n = t, t = !1);
            var a = n ? k.map(e, n, i) : e, o = [], r = [];
            return T(a, function (n, i) {
                (t ? i && r[r.length - 1] === n : k.contains(r, n)) || (r.push(n), o.push(e[i]))
            }), o
        }, k.union = function () {
            return k.uniq(k.flatten(arguments, !0))
        }, k.intersection = function (e) {
            var t = d.call(arguments, 1);
            return k.filter(k.uniq(e), function (e) {
                return k.every(t, function (t) {
                    return k.contains(t, e)
                })
            })
        }, k.difference = function (e) {
            var t = u.apply(r, d.call(arguments, 1));
            return k.filter(e, function (e) {
                return !k.contains(t, e)
            })
        }, k.zip = function () {
            for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; n < e; n++) t[n] = k.pluck(arguments, "" + n);
            return t
        }, k.object = function (e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, a = e.length; i < a; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, k.indexOf = function (e, t, n) {
            if (null == e) return -1;
            var i = 0, a = e.length;
            if (n) {
                if ("number" != typeof n) return i = k.sortedIndex(e, t), e[i] === t ? i : -1;
                i = n < 0 ? Math.max(0, a + n) : n
            }
            if (x && e.indexOf === x) return e.indexOf(t, n);
            for (; i < a; i++) if (e[i] === t) return i;
            return -1
        }, k.lastIndexOf = function (e, t, n) {
            if (null == e) return -1;
            var i = null != n;
            if (j && e.lastIndexOf === j) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var a = i ? n : e.length; a--;) if (e[a] === t) return a;
            return -1
        }, k.range = function (e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), a = 0, o = new Array(i); a < i;) o[a++] = e, e += n;
            return o
        };
        var E = function () {
        };
        k.bind = function (e, t) {
            var n, i;
            if (D && e.bind === D) return D.apply(e, d.call(arguments, 1));
            if (!k.isFunction(e)) throw new TypeError;
            return n = d.call(arguments, 2), i = function () {
                if (!(this instanceof i)) return e.apply(t, n.concat(d.call(arguments)));
                E.prototype = e.prototype;
                var a = new E;
                E.prototype = null;
                var o = e.apply(a, n.concat(d.call(arguments)));
                return Object(o) === o ? o : a
            }
        }, k.partial = function (e) {
            var t = d.call(arguments, 1);
            return function () {
                for (var n = 0, i = t.slice(), a = 0, o = i.length; a < o; a++) i[a] === k && (i[a] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, k.bindAll = function (e) {
            var t = d.call(arguments, 1);
            if (0 === t.length) throw new Error("bindAll must be passed function names");
            return T(t, function (t) {
                e[t] = k.bind(e[t], e)
            }), e
        }, k.memoize = function (e, t) {
            var n = {};
            return t || (t = k.identity), function () {
                var i = t.apply(this, arguments);
                return k.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
            }
        }, k.delay = function (e, t) {
            var n = d.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, k.defer = function (e) {
            return k.delay.apply(k, [e, 1].concat(d.call(arguments, 1)))
        }, k.throttle = function (e, t, n) {
            var i, a, o, r = null, s = 0;
            n || (n = {});
            var l = function () {
                s = n.leading === !1 ? 0 : k.now(), r = null, o = e.apply(i, a), i = a = null
            };
            return function () {
                var c = k.now();
                s || n.leading !== !1 || (s = c);
                var d = t - (c - s);
                return i = this, a = arguments, d <= 0 ? (clearTimeout(r), r = null, s = c, o = e.apply(i, a), i = a = null) : r || n.trailing === !1 || (r = setTimeout(l, d)), o
            }
        }, k.debounce = function (e, t, n) {
            var i, a, o, r, s, l = function c() {
                var l = k.now() - r;
                l < t ? i = setTimeout(c, t - l) : (i = null, n || (s = e.apply(o, a), o = a = null))
            };
            return function () {
                o = this, a = arguments, r = k.now();
                var c = n && !i;
                return i || (i = setTimeout(l, t)), c && (s = e.apply(o, a), o = a = null), s
            }
        }, k.once = function (e) {
            var t, n = !1;
            return function () {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, k.wrap = function (e, t) {
            return k.partial(t, e)
        }, k.compose = function () {
            var e = arguments;
            return function () {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, k.after = function (e, t) {
            return function () {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, k.keys = function (e) {
            if (!k.isObject(e)) return [];
            if (C) return C(e);
            var t = [];
            for (var n in e) k.has(e, n) && t.push(n);
            return t
        }, k.values = function (e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), a = 0; a < n; a++) i[a] = e[t[a]];
            return i
        }, k.pairs = function (e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), a = 0; a < n; a++) i[a] = [t[a], e[t[a]]];
            return i
        }, k.invert = function (e) {
            for (var t = {}, n = k.keys(e), i = 0, a = n.length; i < a; i++) t[e[n[i]]] = n[i];
            return t
        }, k.functions = k.methods = function (e) {
            var t = [];
            for (var n in e) k.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, k.extend = function (e) {
            return T(d.call(arguments, 1), function (t) {
                if (t) for (var n in t) e[n] = t[n]
            }), e
        }, k.pick = function (e) {
            var t = {}, n = u.apply(r, d.call(arguments, 1));
            return T(n, function (n) {
                n in e && (t[n] = e[n])
            }), t
        }, k.omit = function (e) {
            var t = {}, n = u.apply(r, d.call(arguments, 1));
            for (var i in e) k.contains(n, i) || (t[i] = e[i]);
            return t
        }, k.defaults = function (e) {
            return T(d.call(arguments, 1), function (t) {
                if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }, k.clone = function (e) {
            return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
        }, k.tap = function (e, t) {
            return t(e), e
        };
        var A = function B(e, t, n, a) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
            var o = f.call(e);
            if (o != f.call(t)) return !1;
            switch (o) {
                case"[object String]":
                    return e == String(t);
                case"[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case"[object Date]":
                case"[object Boolean]":
                    return +e == +t;
                case"[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != ("undefined" == typeof e ? "undefined" : i(e)) || "object" != ("undefined" == typeof t ? "undefined" : i(t))) return !1;
            for (var r = n.length; r--;) if (n[r] == e) return a[r] == t;
            var s = e.constructor, l = t.constructor;
            if (s !== l && !(k.isFunction(s) && s instanceof s && k.isFunction(l) && l instanceof l) && "constructor" in e && "constructor" in t) return !1;
            n.push(e), a.push(t);
            var c = 0, d = !0;
            if ("[object Array]" == o) {
                if (c = e.length, d = c == t.length) for (; c-- && (d = B(e[c], t[c], n, a));) ;
            } else {
                for (var u in e) if (k.has(e, u) && (c++, !(d = k.has(t, u) && B(e[u], t[u], n, a)))) break;
                if (d) {
                    for (u in t) if (k.has(t, u) && !c--) break;
                    d = !c
                }
            }
            return n.pop(), a.pop(), d
        };
        k.isEqual = function (e, t) {
            return A(e, t, [], [])
        }, k.isEmpty = function (e) {
            if (null == e) return !0;
            if (k.isArray(e) || k.isString(e)) return 0 === e.length;
            for (var t in e) if (k.has(e, t)) return !1;
            return !0
        }, k.isElement = function (e) {
            return !(!e || 1 !== e.nodeType)
        }, k.isArray = w || function (e) {
            return "[object Array]" == f.call(e)
        }, k.isObject = function (e) {
            return e === Object(e)
        }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
            k["is" + e] = function (t) {
                return f.call(t) == "[object " + e + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function (e) {
            return !(!e || !k.has(e, "callee"))
        }), k.isFunction = function (e) {
            return "function" == typeof e
        }, k.isFinite = function (e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, k.isNaN = function (e) {
            return k.isNumber(e) && e != +e
        }, k.isBoolean = function (e) {
            return e === !0 || e === !1 || "[object Boolean]" == f.call(e)
        }, k.isNull = function (e) {
            return null === e
        }, k.isUndefined = function (e) {
            return void 0 === e
        }, k.has = function (e, t) {
            return p.call(e, t)
        }, k.noConflict = function () {
            return n._ = a, this
        }, k.identity = function (e) {
            return e
        }, k.constant = function (e) {
            return function () {
                return e
            }
        }, k.property = function (e) {
            return function (t) {
                return t[e]
            }
        }, k.matches = function (e) {
            return function (t) {
                if (t === e) return !0;
                for (var n in e) if (e[n] !== t[n]) return !1;
                return !0
            }
        }, k.times = function (e, t, n) {
            for (var i = Array(Math.max(0, e)), a = 0; a < e; a++) i[a] = t.call(n, a);
            return i
        }, k.random = function (e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, k.now = Date.now || function () {
            return (new Date).getTime()
        };
        var P = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
        P.unescape = k.invert(P.escape);
        var J = {
            escape: new RegExp("[" + k.keys(P.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + k.keys(P.unescape).join("|") + ")", "g")
        };
        k.each(["escape", "unescape"], function (e) {
            k[e] = function (t) {
                return null == t ? "" : ("" + t).replace(J[e], function (t) {
                    return P[e][t]
                })
            }
        }), k.result = function (e, t) {
            if (null != e) {
                var n = e[t];
                return k.isFunction(n) ? n.call(e) : n
            }
        }, k.mixin = function (e) {
            T(k.functions(e), function (t) {
                var n = k[t] = e[t];
                k.prototype[t] = function () {
                    var e = [this._wrapped];
                    return c.apply(e, arguments), H.call(this, n.apply(k, e))
                }
            })
        };
        var N = 0;
        k.uniqueId = function (e) {
            var t = ++N + "";
            return e ? e + t : t
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
            R = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
            F = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        k.template = function (e, t, n) {
            var i;
            n = k.defaults({}, n, k.templateSettings);
            var a = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
                o = 0, r = "__p+='";
            e.replace(a, function (t, n, i, a, s) {
                return r += e.slice(o, s).replace(F, function (e) {
                    return "\\" + R[e]
                }), n && (r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), a && (r += "';\n" + a + "\n__p+='"), o = s + t.length, t
            }), r += "';\n", n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", r)
            } catch (s) {
                throw s.source = r, s
            }
            if (t) return i(t, k);
            var l = function (e) {
                return i.call(this, e, k)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", l
        }, k.chain = function (e) {
            return k(e).chain()
        };
        var H = function (e) {
            return this._chain ? k(e).chain() : e
        };
        return k.mixin(k), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            var t = r[e];
            k.prototype[e] = function () {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], H.call(this, n)
            }
        }), T(["concat", "join", "slice"], function (e) {
            var t = r[e];
            k.prototype[e] = function () {
                return H.call(this, t.apply(this._wrapped, arguments))
            }
        }), k.extend(k.prototype, {
            chain: function () {
                return this._chain = !0, this
            }, value: function () {
                return this._wrapped
            }
        }), k
    }).call(void 0)
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.multiJourneyTemplate = '<div class="J_MultiDetailJourney journey-multi-item active %>" id="J_MultiJourney<%= journeyInfo.journeyId %>">\n\n    <div class="journey-multi-brief">\n        <div class="journey-multi-brief-row">\n            <div class="journey-multi-brief-row-title">行程天数：</div>\n            <div class="journey-multi-brief-row-content"><%= journeyInfo.dayDuration %>天<%= journeyInfo.nightDuration? journeyInfo.nightDuration + \'晚\': \'\' %></div>\n        </div>\n        <div class="journey-multi-brief-row">\n            <div class="journey-multi-brief-row-title">适用团期：</div>\n            <div class="journey-multi-brief-row-content">\n                <% if (journeyInfo.planDate && journeyInfo.planDate.length) { %>\n                    <%= journeyInfo.planDate.join(\'、\') %>\n                <% } else { %>\n                    暂无适用团期\n                <% } %>\n            </div>\n        </div>\n        <div class="J_DetailSupplier journey-multi-brief-row journey-multi-brief-supplier" data-id="<%= journeyInfo.resId %>">\n            <div class="journey-multi-brief-row-title">产品品牌：</div>\n            <div class="J_DetailSupplierContent journey-multi-brief-row-content"></div>\n        </div>\n        <div class="J_DetailReception journey-multi-brief-row journey-multi-brief-reception" data-id="<%= journeyInfo.resId %>">\n            <div class="journey-multi-brief-row-title">接&ensp;待&ensp;社：</div>\n            <div class="J_DetailReceptionContent journey-multi-brief-row-content"></div>\n        </div>\n    </div>\n\n    <div class="J_JourneyTab journey-multi-tab">\n        <div class="section-box-toolbar">\n            <ul class="section-box-tab">\n                <li class="active" data-rel=".J_DetailFeature" mm="点击_详情区_线路介绍_多行程_导航栏_查看产品特色">\n                    <a href="javascript:;">产品特色</a>\n                </li>\n                <li data-rel=".J_DetailRoute" mm="点击_详情区_线路介绍_多行程_导航栏_查看详细行程">\n                    <a href="javascript:;">详细行程</a>\n                </li>\n                <% if (journeyDetail.schemeResIds && journeyDetail.schemeResIds.length) { %>\n                <li data-rel=".J_DetailUpgrade" mm="点击_详情区_线路介绍_多行程_导航栏_查看产品升级">\n                    <a href="javascript:;">产品升级</a>\n                </li>\n                <% } %>\n                <li data-rel=".J_DetailFee" mm="点击_详情区_线路介绍_多行程_导航栏_查看费用说明">\n                    <a href="javascript:;">费用说明</a>\n                </li>\n                <li data-rel=".J_DetailPolicy" mm="点击_详情区_线路介绍_多行程_导航栏_查看预订须知">\n                    <a href="javascript:;">预订须知</a>\n                </li>\n                <% if (journeyDetail.visaResIds && journeyDetail.visaResIds.length) { %>\n                    <li data-rel=".J_DetailVisa" mm="点击_详情区_线路介绍_多行程_导航栏_查看签证信息">\n                        <a href="javascript:;">签证信息</a>\n                    </li>\n                <% } %>\n                <% if (journeyDetail.guideIds && journeyDetail.guideIds.length) { %>\n                <li class="last" data-rel=".J_Guide" mm="点击_详情区_导航栏_查看线路导游">\n                    <a href="javascript:;">线路导游</a>\n                </li>\n                <% } %>\n            </ul>\n        </div>\n    </div>\n\n    <%- include(\'feature\', {\n        journey: journeyDetail,\n        journeyInfo: journeyInfo,\n        isSupportMultipleJourney: isSupportMultipleJourney,\n        teamCityName: data.teamCityName,\n        productType: data.productType,\n        classBrandId: data.classBrandId,\n        helper: helper,\n        noImage: false,\n        characteristic: characteristic\n    }) %>\n\n    <%- include(\'journey\', {\n        productId: data.productId,\n        journey: journeyDetail,\n        isSupportMultipleJourney: isSupportMultipleJourney,\n        journeyId: journeyInfo.journeyId,\n        journey4Id: journey4Scene.journeyId || \'\',\n        bookCityCode: data.bookCityCode,\n        cityCodeFromCookie: cityCodeFromCookie,\n        helper: helper,\n        noImage: false\n    }) %>\n\n    <% if (journeyDetail.schemeResIds && journeyDetail.schemeResIds.length) { %>\n        <div class="J_DetailUpgrade section-loading" data-id="<%= journeyInfo.journeyId %>"></div>\n    <% } %>\n\n    <%- include(\'fee\', {\n        journey: journeyDetail,\n        helper: helper\n    }) %>\n\n    <%- include(\'policy\', {\n        journeyId: journeyInfo.journeyId,\n        journey: journeyDetail,\n        operateFlag: data.operateFlag,\n        helper: helper\n    }) %>\n\n    <% if (journeyDetail.visaResIds && journeyDetail.visaResIds.length) { %>\n        <div class="J_DetailVisa section-loading" data-id="<%= journeyInfo.journeyId %>"></div>\n    <% } %>\n\n    <% if (journeyDetail.guideIds && journeyDetail.guideIds.length) { %>\n        <div class="J_Guide section-loading" data-id="<%= journeyInfo.journeyId %>"></div>\n    <% } %>\n</div>'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.featureTemplate = '<%\nvar TEAM_TYPE_MAP = {\n    0: \'出发地成团\',\n    1: \'目的地成团\',\n    2: \'中转地联运\',\n    3: \'无\'\n};\nvar TRAFFIC_TYPE_MAP = {\n    1: \'飞机\',\n    2: \'火车卧铺\',\n    3: \'火车硬卧\',\n    4: \'火车软座\',\n    5: \'火车硬座\',\n    6: \'汽车\',\n    7: \'邮轮\',\n    8: \'火车\',\n    9: \'动车组\',\n    10: \'游船\',\n    11: \'高铁二等座\',\n    12: \'高铁一等座\',\n    13: \'高铁商务座\',\n    14: \'自行安排\'\n};\nvar RECOMMEND_TYPE_MAP = {\n    1: \'用餐安排\',\n    2: \'住宿安排\',\n    3: \'行程安排\',\n    4: \'游玩安排\',\n    5: \'购物安排\',\n    6: \'娱乐安排\',\n    7: \'贴心赠送\',\n    9: \'特别优惠\',\n    10: \'重要提示\',\n    11: \'交通信息\',\n    15: \'产品特色\',\n    13: \'其他信息\'\n};\nvar STANDARD_TYPES = [1, 2, 3, 4, 5, 6, 7];\nvar OTHER_TYPES = [9, 10, 11, 13];\nvar standardList = (journey.tourRecommend || []).filter(function(item) {\n    return ~STANDARD_TYPES.indexOf(item.type) && item.desc;\n})\nvar isPrint = false;\n\nif (typeof printMode == \'boolean\') {\n    isPrint = printMode;\n}\n\nvar tCityName = TEAM_TYPE_MAP[journey.teamType];\nif (journey.teamType == 0) {\n    tCityName = teamCityName ? (teamCityName + \'成团\') : \'\';\n} else if(journey.teamType == 1) {\n    tCityName = (journey.agglomerateName || \'目的地\') + \'成团\';\n}\n\n%>\n\n<div class="J_DetailFeature section-box detail-feature" data-id="<%= journeyInfo.journeyId %>">\n    <% if (isSupportMultipleJourney == 0) { %>\n        <div class="section-box-head">\n            <h2>产品特色</h2>\n        </div>\n    <% } %>\n    <div class="section-box-body">\n        <% if (!(productType == 8 && classBrandId != 20)) { %>\n            <div class="section-box-title">\n                <h3>产品概要</h3>\n            </div>\n\n            <div class="section-box-content">\n                <div class="detail-feature-brief">\n                    <% if (journeyInfo.dayDuration) { %>\n                        <div class="detail-feature-brief-item">\n                            行程天数：<strong><%= journeyInfo.dayDuration %>天<%= journeyInfo.nightDuration? journeyInfo.nightDuration + \'晚\': \'\' %></strong>\n                        </div>\n                    <% } %>\n                    <% if (tCityName) { %>\n                        <div class="detail-feature-brief-item">\n                            成团地点：<strong><%= tCityName %></strong>\n                        </div>\n                    <% } %>\n                    <% if (journey.destination) { %>\n                        <div class="detail-feature-brief-item">\n                            目的地：<strong><%= journey.destination %></strong>\n                        </div>\n                    <% } %>\n                    <% if ((journey.trafficGo && ~journey.trafficGo) || (journey.trafficBack && ~journey.trafficBack)) { %>\n                        <div class="detail-feature-brief-item">\n                            往返交通：<strong><%= TRAFFIC_TYPE_MAP[journey.trafficGo] %>/<%= TRAFFIC_TYPE_MAP[journey.trafficBack]%></strong>\n                        </div>\n                    <% } %>\n                    <% if (!isPrint && journey.defaultDeadline && (journey.defaultDeadline.deadLineDate || journey.defaultDeadline.deadLineHour)) { %>\n                        <div class="detail-feature-brief-item">\n                            报名截止时间：<strong>团期前<%= journey.defaultDeadline.deadLineDate %>天<%= journey.defaultDeadline.deadLineHour %>点</strong>\n                            <% if (journey.deadline && Object.keys(journey.deadline).length) { %>\n                                <a class="J_DetailFeatureDeadline" href="javascript:;" mm="点击_详情区_产品特色_产品概要_查看报名截止时间">查看全部报名截止时间<i class="icon"></i></a>\n\n                                <% var deadlineKeys = Object.keys(journey.deadline).filter(function(key) {\n                                    var deadline = journey.deadline[key];\n                                    return deadline && deadline.deadLineTime;\n                                }); %>\n                                <div class="detail-feature-deadline">\n                                    <i class="detail-feature-deadline-arrow"></i>\n                                    <div class="detail-feature-deadline-inner">\n                                        <div class="detail-feature-deadline-left">\n                                            <div class="thead">\n                                                <table>\n                                                    <thead>\n                                                        <tr>\n                                                            <th class="col-1">出发团期</th>\n                                                            <th class="col-2">报名截止时间</th>\n                                                        </tr>\n                                                    </thead>\n                                                </table>\n                                            </div>\n                                            <div class="tbody">\n                                                <table>\n                                                    <tbody>\n                                                        <% for (var index = 0; index < deadlineKeys.length; index++) { %>\n                                                            <% if (index % 2 === 0) { %>\n                                                                <% var deadline = deadlineKeys[index] %>\n                                                                <tr class="<%= index % 4 !== 0 ? \'even\' : \'\'%>">\n                                                                    <td class="col-1"><%= deadline %></td>\n                                                                    <td class="col-2"><%= journey.deadline[deadline].deadLineTime %>点之前</td>\n                                                                </tr>\n                                                            <% } %>\n                                                        <% } %>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                        <div class="detail-feature-deadline-right">\n                                            <div class="thead">\n                                                <table>\n                                                    <thead>\n                                                        <tr>\n                                                            <th class="col-1">出发团期</th>\n                                                            <th class="col-2">报名截止时间</th>\n                                                        </tr>\n                                                    </thead>\n                                                </table>\n                                            </div>\n                                            <div class="tbody">\n                                                <table>\n                                                    <tbody>\n                                                    <% for (var index = 0; index < deadlineKeys.length; index++) { %>\n                                                        <% if (index % 2 === 1) { %>\n                                                            <% var deadline = deadlineKeys[index] %>\n                                                            <tr class="<%= (index - 1) % 4 !== 0 ? \'even\' : \'\'%>">\n                                                                <td class="col-1"><%= deadline %></td>\n                                                                <td class="col-2"><%= journey.deadline[deadline].deadLineTime %>点之前</td>\n                                                            </tr>\n                                                        <% } %>\n                                                    <% } %>\n                                                    </tbody>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            <% } %>\n                        </div>\n                    <% } %>\n                    <% if (productType != 2 && isSupportMultipleJourney == 0) { %>\n                        <div class="detail-feature-brief-item">\n                            组团形式：\n                            <strong>\n                                <% if (journey.independentTeam == 0 || journey.independentTeam == 2) { %>\n                                    <% if(journey.joinGroupItem == 1){ %>\n                                        联合发团；本产品与其他旅行社联合发团。\n                                        <% var joinGroupItemInfo = journey.joinGroupItemInfo || {} %>\n                                        <%= Object.keys(joinGroupItemInfo)\n                                                .map(function(key) {return joinGroupItemInfo[key]})\n                                                .filter(function(info) {return info})\n                                                .join(\'\')\n                                        %>\n                                    <% } else if (journey.joinGroupItem == 0){ %>\n                                        联合发团；本产品与其他旅行社联合发团。\n                                    <% } %>\n                                <% } else if(journey.independentTeam == 1) { %>\n                                    途牛独家发团；本产品为途牛独家发团产品，只接受途牛客人参团。\n                                <% } %>\n                            </strong>\n                        </div>\n\n                        <% if (!helper.empty(journey.importantAddition)) { %>\n                            <div class="detail-feature-brief-item">\n                                附加说明：\n                                <strong>\n                                    <%= journey.importantAddition.join(\'\') %>\n                                </strong>\n                            </div>\n                        <% } %>\n\n                    <% } %>\n                </div>\n            </div>\n        <% } %>\n\n        <div class="section-box-title">\n            <h3>产品特色</h3>\n        </div>\n\n        <% if (Array.isArray(characteristic) && characteristic.length) { %>\n            <% for (var i = 0; i < characteristic.length; i++) {%>\n                <% var character = characteristic[i] %>\n                <% if (helper.removeHtmlTag(character.title) || helper.removeHtmlTag(character.content)) { %>\n                    <div class="section-box-content">\n                        <% if (character.title) { %>\n                            <strong><%= character.title %></strong><br>\n                        <% } %>\n                        <%- (character.content || \'\').replace(/[\\n\\r]+?/g, \'<br>\') %>\n                    </div>\n                <% } %>\n                <% if (character.imgs && !noImage) { %>\n                    <% var imgs = character.imgs.split(\',\') %>\n                    <% if(imgs && imgs.length) { %>\n                        <div class="detail-feature-photos">\n                            <% var photoLength = imgs.length; %>\n                            <% photoLength = photoLength > 4 ? 4 : (photoLength == 3 ? 2 : photoLength) %>\n                            <% var photoStep = photoLength === 3 ? 3 : 2 %>\n                            <div class="detail-feature-photo detail-feature-photo-<%= photoLength %>">\n\n                                <% if (photoLength === 1) { %>\n                                    <div class="detail-feature-photo-item">\n                                        <div class="detail-feature-photo-item-inner">\n                                            <% if (isPrint) { %>\n                                                <img src="<%= helper.resizeImage(imgs[0], 1536) %>">\n                                            <% } else { %>\n                                                <img src="<%= cdn.cdnHost %>/static/img/2016/common/placeholder.png" data-src="<%= helper.resizeImage(imgs[0], 1536) %>">\n                                            <% } %>\n                                        </div>\n                                    </div>\n                                <% } else { %>\n                                    <% imgs.forEach(function(photo, photoIndex) { %>\n                                        <% if(photoIndex < photoLength) { %>\n                                            <div class="detail-feature-photo-item">\n                                                <div class="detail-feature-photo-item-inner">\n                                                    <% if (isPrint) { %>\n                                                        <img src="<%= helper.resizeImage(photo, 450, 300, 1) %>">\n                                                    <% } else { %>\n                                                        <img src="<%= cdn.cdnHost %>/static/img/2016/common/placeholder.png" data-src="<%= helper.resizeImage(photo, 450, 300, 1) %>">\n                                                    <% } %>\n                                                </div>\n                                            </div>\n                                            <% if ((photoIndex + 1) % photoStep === 0) { %>\n                                                <div class="detail-feature-photo-sep"></div>\n                                            <% } %>\n                                        <% } %>\n                                    <% }); %>\n                                <% } %>\n\n                            </div>\n                        </div>\n                    <% } %>\n                <% } %>\n            <% } %>\n        <% } else if(typeof characteristic === \'string\' && characteristic) { %>\n            <div class="section-box-content">\n                <%- characteristic.replace(/[\\n\\r]+?/g, \'<br>\') %>\n            </div>\n        <% } %>\n\n        <% if (standardList.length) { %>\n            <div class="section-box-title">\n                <h3>接待标准</h3>\n            </div>\n            <div class="section-box-content">\n                <% for (var i = 0; i < standardList.length; i++) { %>\n                    <p class="item-label">\n                        <strong><span class="dot">•</span><%= RECOMMEND_TYPE_MAP[standardList[i].type] %>：</strong><%- helper.nb2br(standardList[i].desc) %>\n                    </p>\n                <% } %>\n            </div>\n        <% } %>\n\n        <% (journey.tourRecommend || []).filter(function(item) { %>\n            <% if (~OTHER_TYPES.indexOf(item.type) && helper.removeHtmlTag(item.desc).replace(/(\\s|&nbsp;)+/g, \'\')) { %>\n                <div class="section-box-title">\n                    <h3><%= RECOMMEND_TYPE_MAP[item.type] %></h3>\n                </div>\n                <div class="section-box-content">\n                    <%- helper.nb2br(item.desc) %>\n                </div>\n            <% } %>\n        <% }) %>\n\n    </div>\n</div>\n\n';
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.journeyTemplate = '<% var downloadUrl %>\n<% var printUrl %>\n<div class="J_DetailRoute section-box detail-route detail-route<%= parseInt(journey.journeyType) + 1 %>" data-id="<%= journeyId %>">\n    <div class="section-box-head">\n        <% if (isSupportMultipleJourney) { %>\n            <h2>详细行程</h2>\n        <% } else { %>\n            <h2>线路介绍</h2>\n        <% } %>\n    </div>\n    <div class="section-box-body">\n\n        <% if (journey.tourTrafficInfo && !helper.empty(journey.tourTrafficInfo.departBusInfo)) { %>\n            <% var busList = journey.tourTrafficInfo.departBusInfo.filter(function(busInfo) {\n                return Object.keys(busInfo || {}).some(function(item) {\n                    return busInfo[item];\n                });\n            }) %>\n            <% if(busList.length) { %>\n            <div class="section-box-title">\n                <h3>发车信息\n                    <% if (journey.tourTrafficInfo.departInfo) { %>\n                        <span>* <%= journey.tourTrafficInfo.departInfo %></span>\n                    <% } %>\n                </h3>\n            </div>\n            <div class="section-box-content detail-depart">\n                <table>\n                    <thead>\n                        <tr>\n                            <th class="col-1">发车时间</th>\n                            <th class="col-2">发车地点</th>\n                            <th class="col-3">返回地点</th>\n                            <th class="col-4">备注</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <% journey.tourTrafficInfo.departBusInfo.forEach(function(bus) { %>\n                            <tr>\n                                <td class="col-1"><%= bus.departTime %></td>\n                                <td class="col-2"><%= bus.departPlace %></td>\n                                <td class="col-3"><%= bus.backPlace %></td>\n                                <td class="col-4"><%= bus.departRemark %></td>\n                            </tr>\n                        <% }) %>\n                    </tbody>\n                </table>\n            </div>\n            <% } %>\n        <% } %>\n\n        <% if (journey.journeyType == 3) { %>\n            <% downloadUrl = \'/tour/journey/download/\' + productId + \'/\' + journey4Id + \'?noImage=1&b=\' + bookCityCode + \'&bc=\' + cityCodeFromCookie %>\n            <% printUrl = \'/tour/journey/print/\' + productId + \'/\' + journey4Id + \'?noImage=1&b=\' + bookCityCode + \'&bc=\' + cityCodeFromCookie %>\n            <div class="detail-route-download">\n                <a class="download" href="<%= downloadUrl %>" target="_blank" m="点击_详情区_线路介绍_下载行程">下载行程</a>\n                <a class="print" href="<%= printUrl %>" target="_blank" m="点击_详情区_线路介绍_打印行程">打印行程</a>\n            </div>\n        <% } else { %>\n            <div class="detail-route-download">\n                <% if (journey.journeyType == 2) { %>\n                    <% if (journey.scheduleFile && journey.scheduleFile.filePath) { %>\n                        <% downloadUrl = journey.scheduleFile.filePath %>\n                        <a href="<%= downloadUrl %>" target="_blank" m="点击_详情区_线路介绍_下载行程"><i class="icon"></i>下载行程</a>\n                    <% } %>\n                <% } else { %>\n                    <% downloadUrl = host.main + \'/tn?r=detail/tourV3/DownloadJourneyInfo&id=\' + productId %>\n                    <a href="<%= downloadUrl %>" target="_blank" m="点击_详情区_线路介绍_下载行程"><i class="icon"></i>下载行程</a>\n                <% } %>\n            </div>\n        <% } %>\n\n\n        <% switch(parseInt(journey.journeyType)) {\n            case 0:\n            %>\n                <%- include(\'journeyOld\') %>\n            <%\n                break;\n            case 3:\n            %>\n                <%- include(\'journey4\', {\n                    journey: journey,\n                    downloadUrl: downloadUrl,\n                    printUrl: printUrl\n                }) %>\n            <%\n                break;\n            %>\n        <% }%>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.feeTemplate = '<%\nvar formatTitle = function(str) {\n    if(typeof str === \'string\') {\n        switch(str.length) {\n            case 2:\n                str = str.split(\'\').join(\'&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;\');\n                break;\n            case 3:\n                str = str.split(\'\').join(\'&ensp;&ensp;\');\n                break;\n        }\n    }\n    return str;\n}\n%>\n\n<% if (!helper.empty(journey.costInclude) ||\n    !helper.empty(journey.costExclude) ||\n    !helper.empty(journey.activeRecommend) ||\n    !helper.empty(journey.activeRecommend)) { %>\n    <div class="J_DetailFee section-box detail-upgrade">\n        <div class="section-box-head">\n            <h2>费用说明</h2>\n        </div>\n        <div class="section-box-body">\n            <% if (!helper.empty(journey.costInclude)) { %>\n                <div class="section-box-title">\n                    <h3>费用包含</h3>\n                </div>\n                <div class="section-box-content">\n                    <% if (typeof journey.costInclude === \'string\') { %>\n                        <%- helper.nb2br(journey.costInclude) %>\n                    <% } else { %>\n                        <% journey.costInclude.forEach(function(inItem) { %>\n                            <% var itemValue = inItem.content;\n                                itemValue = Array.isArray(itemValue) ? itemValue.join(\'；\') : itemValue; %>\n                            <% if (itemValue) { %>\n                            <p class="item-label">\n                                <strong><span class="dot">•</span><%- formatTitle(inItem.title) %>：</strong>\n                                <%= itemValue %>\n                            </p>\n                            <% } %>\n                        <% }) %>\n                    <% } %>\n                </div>\n            <% } %>\n\n            <% if (!helper.empty(journey.costExclude)) { %>\n                <div class="section-box-title">\n                    <h3>费用不包含</h3>\n                </div>\n                <div class="section-box-content">\n                    <% if (typeof journey.costExclude === \'string\') { %>\n                        <%- helper.nb2br(journey.costExclude) %>\n                    <% } else { %>\n                        <% journey.costExclude.forEach(function(exItem) { %>\n                            <% var itemValue = exItem.content;\n                            itemValue = Array.isArray(itemValue) ? itemValue.join(\'；\') : itemValue; %>\n                            <% if (itemValue) { %>\n                            <p class="item-label">\n                                <strong><span class="dot">•</span><%- formatTitle(exItem.title) %>：</strong>\n                                <%= itemValue %>\n                            </p>\n                            <% } %>\n                        <% }) %>\n                    <% } %>\n                </div>\n            <% } %>\n\n            <% var hasShop = !helper.empty(journey.shopRecommend) %>\n            <% if (hasShop) { %>\n                <div class="section-box-title">\n                    <h3>购物推荐</h3>\n                </div>\n                <div class="section-box-content">\n                    <table class="detail-upgrade-shopping">\n                        <thead>\n                            <tr>\n                                <th class="col-1">名称</th>\n                                <th class="col-2">营业产品</th>\n                                <th class="col-3">说明</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <% journey.shopRecommend.forEach(function(shop, shopIndex) { %>\n                                <tr<%= shopIndex % 2 == 1 ? \' class="even"\' : \'\' %>>\n                                    <td><%= shop.name %></td>\n                                    <td><%= shop.remark %></td>\n                                    <td><%= shop.desc %></td>\n                                </tr>\n                            <% }) %>\n                        </tbody>\n                    </table>\n                </div>\n            <% } %>\n\n            <% var hasActivity = !helper.empty(journey.activeRecommend) %>\n            <% if (hasActivity) { %>\n                <div class="section-box-title">\n                    <h3>活动推荐</h3>\n                </div>\n                <div class="section-box-content">\n                    <table class="detail-upgrade-activity">\n                        <thead>\n                            <tr>\n                                <th class="col-1">活动名称</th>\n                                <th class="col-2">参考价格</th>\n                                <th class="col-3">详细说明</th>\n                                <th class="col-4">备注</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <% journey.activeRecommend.forEach(function(activity, shopIndex) { %>\n                                <tr<%= shopIndex % 2 == 1 ? \' class="even"\' : \'\' %>>\n                                    <td><%= activity.name %></td>\n                                    <td><%= activity.priceStr %></td>\n                                    <td><%= activity.desc %></td>\n                                    <td><%= activity.remark %></td>\n                                </tr>\n                            <% }) %>\n                        </tbody>\n                    </table>\n                </div>\n            <% } %>\n\n            <% if (hasShop || hasActivity) { %>\n                <div class="section-box-content">\n                    <div class="detail-upgrade-tip">推荐说明：*所有推荐项目均是建议性项目，客人应本着"自愿自费"的原则酌情参加。</div>\n                </div>\n            <% } %>\n\n        </div>\n    </div>\n<% } %>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.featureModule = void 0;
    var a = n(56), o = i(a), r = $(window), s = void 0, l = void 0, c = {
        init: function (e) {
            s = e, l = $(".J_DetailFeature").filter('[data-id="' + s.journeyId + '"]'), this.bind()
        }, bind: function () {
            l.find("img").each(function () {
                var e = $(this), t = e.data("src");
                o.on(e, function () {
                    var n = new Image;
                    n.onload = function () {
                        e.prop("src", t).parent().addClass("loaded"), o.off(e), r.trigger("resize")
                    }, n.src = t, n.onerror = function () {
                        e.parent().addClass("loaded"), o.off(e), r.trigger("resize")
                    }
                })
            }), l.find(".J_DetailFeatureDeadline").each(function () {
                var e = $(this), t = e.parent(), n = t.find(".detail-feature-deadline"),
                    i = t.find(".detail-feature-deadline-arrow");
                e.click(function (a) {
                    if (a.stopPropagation(), t.hasClass("expand")) t.removeClass("expand"); else {
                        var o = e.position() || {left: 0, top: 0};
                        n.css({top: o.top + t.height() + 7}), i.css({left: o.left + e.width() / 2}), t.addClass("expand")
                    }
                }), n.click(function (e) {
                    e.stopPropagation()
                }), $(document).click(function () {
                    t.removeClass("expand")
                })
            })
        }
    };
    t.featureModule = c
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
        return window.cityList ? (s(), void("function" == typeof e && e())) : void $.ajax({
            url: "/papi/getCityList",
            data: {},
            success: function (t) {
                s(), t && t.success && (window.cityList = t.data), "function" == typeof e && e()
            }
        })
    }

    function r() {
        var e = $(".retail-box");
        e.length && e.addClass("loading")
    }

    function s() {
        var e = $(".retail-box");
        e.length && e.removeClass("loading")
    }

    function l(e) {
        var t = p.template.compile(m.detailRetailTemplate);
        return t({data: e})
    }

    function c() {
        var e = void 0;
        e = h.layer.open({
            type: 1,
            title: !1,
            closeBtn: !1,
            content: l(C),
            area: ["700px", "540px"],
            btn: !1,
            success: function (t) {
                v.retailCityModule.init({bookCityCode: D}), t.on("click", ".retail-box-close", function () {
                    h.layer.close(e)
                }).on("click", ".retail-location-label", function () {
                    $(this).parent().toggleClass("expand")
                }).on("click", ".retail-city-drop-city-name", function (e) {
                    var n = $(this);
                    D = n.data("code"), d(D, function () {
                        t.find(".retail-box").parent().html(l(C)), v.retailCityModule.init({bookCityCode: D})
                    }), (0, x.record)("点击_详情区_预订须知_签约门市_切换城市", e)
                })
            }
        })
    }

    function d(e, t) {
        r(), _.fetchRetail.setBookCode(e), _.fetchRetail.fetch(function (e) {
            C = e, o(t)
        }, function () {
            C = [], o(t)
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), f = n(1), p = n(22), h = n(15), v = n(74), m = n(76), y = n(77), g = n(56), b = i(g), _ = n(78), x = n(26),
        j = ($(window), void 0), w = void 0, C = void 0, D = void 0, k = function () {
            function e(t) {
                a(this, e), j = t, w = (0, f.getStore)(), D = w.getState("bookCityCode"), this.$container = $(".J_DetailPolicy").filter('[data-id="' + j.journeyId + '"]'), this.$retailName = this.$container.find(".J_retailName")
            }

            return u(e, [{
                key: "bind", value: function () {
                    var e = this;
                    e.$container.find("[data-role=fold-box]").each(function () {
                        (0, y.createAutoFold)($(this))
                    }), e.$container.parent().on("click", ".J_retailView", function () {
                        C ? c() : d(D, c)
                    }), b.on(e.$retailName, e._initRetail.bind(e))
                }
            }, {
                key: "_initRetail", value: function () {
                    var e = this;
                    b.off(e.$retailName), _.fetchRetail.setBookCode(D), _.fetchRetail.fetch(function (t) {
                        e.$retailName.find("a").find("span").text(t[0] && t[0].name).end().show()
                    })
                }
            }]), e
        }();
    t["default"] = k
}, function (e, t, n) {
    "use strict";

    function i(e) {
        var t = "推荐城市", n = [], i = {}, a = [t];
        e.Hot.forEach(function (e) {
            i[t] || (i[t] = []), i[t].push(e)
        }), n.push(i);
        var o = function (t) {
            var i = e.cityLetter[t], o = {};
            a[t] = "";
            for (var r in i) {
                var s = i[r];
                a[t] += r.toUpperCase(), s.forEach(function (e) {
                    o[e.districtName] || (o[e.districtName] = []), e.code == p && (h = e.name), o[e.districtName].push(e)
                })
            }
            n.push(o)
        };
        for (var r in e.cityLetter) o(r);
        return {data: n, tabHead: a, bookCityName: h}
    }

    function a() {
        f.html(d(i(window.cityList))), o()
    }

    function o() {
        (0, l.createTaber)(f.find(".retail-city-drop-tab"), {ctx: f.find(".retail-city-drop-list")})
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.retailCityModule = void 0;
    var r = n(1), s = n(22), l = (n(15), n(58)), c = n(75), d = s.template.compile(c.retailCityTemplate), u = void 0,
        f = void 0, p = void 0, h = void 0, v = {
            init: function (e) {
                f = $("#J_retailCity"), p = e.bookCityCode, u = (0, r.getStore)(), f.length && window.cityList && a()
            }
        };
    t.retailCityModule = v
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.retailCityTemplate = '\n<div class="retail-location-label">\n    <i class="r-icon-loc"></i><span class="retail-city-selected"><%= bookCityName %></span><i class="r-icon-down"></i>\n</div>\n<div class="retail-city-drop">\n    <div class="retail-city-drop-head">\n        <ul class="retail-city-drop-tab">\n            <% for (var i = 0; i < tabHead.length; i++) { %>\n                <li class="retail-city-drop-tab-item" data-rel=".J_retailTab<%= i %>"><%= tabHead[i] %></li>\n            <% } %>\n        </ul>\n    </div>\n    <div class="retail-city-drop-list">\n        <% for (var j = 0; j < data.length; j++) {\n            var cityItem = data[j]; %>\n            <dl class="retail-city-drop-city-city J_retailTab<%= j %>">\n                <% for (var key in cityItem) {\n                    var cityArea = cityItem[key] %>\n                    <dt><%= key %></dt>\n                    <dd class="retail-city-drop-city-item">\n                        <% for (var k = 0; k < cityArea.length; k++) { %>\n                        <span class="retail-city-drop-city-name <%= cityArea[k].name == bookCityName? \'active\': \'\' %>" data-code="<%= cityArea[k].code %>" data-name="<%= cityArea[k].name %>"><%= cityArea[k].name %></span>\n                        <% } %>\n                    </dd>\n                <% } %>\n            </dl>\n        <%}%>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailRetailTemplate = '\n<div class="retail-box">\n    <div class="retail-box-close">\n    </div>\n    <div class="retail-box-head">\n        查看途牛门市\n        <div class="retail-location" id="J_retailCity">\n        </div>\n    </div>\n    <div class="retail-box-body">\n        <% if(data && data.length) { %>\n        <div class="retail-list">\n            <ul>\n                <% for(var i = 0; i < data.length; i++) {\n                    var retailItem = data[i]; %>\n                <li>\n                    <span class="retail-item-num"><%= i+1 %></span>\n                    <div class="retail-item-content">\n                        <p class="retail-item-title"><%= retailItem.name %></p>\n                        <dl class="retail-item-info">\n                            <dt>门市电话：</dt>\n                            <dd><%= retailItem.tel %></dd>\n                            <dt>营业时间：</dt>\n                            <dd><%= retailItem.openTime %></dd>\n                            <dt>门市地址：</dt>\n                            <dd><%= retailItem.address %></dd>\n                        </dl>\n                    </div>\n                </li>\n                <% } %>\n            </ul>\n        </div>\n        <% } else { %>\n        <div class="retail-nf">\n            <div class="retail-nf-bg"></div>\n            <p class="retail-nf-tips">呃~当前城市暂未开通途牛门市</p>\n            <p class="retail-nf-tips">请选择查看您附近城市的门市</p>\n        </div>\n        <% } %>\n        <div class="retail-list-loading">\n            <i class="retail-list-loading-bg"></i>\n            <i class="retail-list-loading-img"></i>\n        </div>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        return "expand" == e ? $('<a class="button-more" href="javascript:;">展开全部<i class="icon"></i></a>') : $('<a class="button-less" href="javascript:;">收起全部<i class="icon"></i></a>')
    }

    function a(e, t) {
        var n = new d(e, t);
        return r.push(n), n
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = [], s = $(window), l = 0, c = "autoFold", d = function () {
        function e(t, i) {
            n(this, e), this.originHeight = 0, this.expandHeight = 0, this.buttonInited = !1, this.inited = !1, this.expanded = !1, this.$element = t, this.id = "AUTOFOLD_" + ++l, this.$inner = t.find("[data-role=fold-box-inner]"), this.$more = null, this.$less = null, this.update()
        }

        return o(e, [{
            key: "init", value: function () {
                this.originHeight = this.$inner.height(), this.inited = !0
            }
        }, {
            key: "initButton", value: function () {
                this.$more = i("expand"), this.$less = i("fold"), this.bindButton(), this.buttonInited = !0
            }
        }, {
            key: "bindButton", value: function () {
                this.$more.click(this.expand.bind(this)), this.$less.click(this.fold.bind(this))
            }
        }, {
            key: "showButton", value: function () {
                this.buttonInited || this.initButton(), this.$more.appendTo(this.$element), this.$less.appendTo(this.$element), this.updateButton()
            }
        }, {
            key: "hideButton", value: function () {
                this.buttonInited && (this.$more.remove(), this.$less.remove())
            }
        }, {
            key: "updateButton", value: function () {
                this.buttonInited && (this.expanded ? (this.$more.hide(), this.$less.show()) : (this.$more.show(), this.$less.hide()))
            }
        }, {
            key: "update", value: function () {
                this.$element.is(":visible") && (this.inited || this.init(), this.expandHeight = this.$inner[0].scrollHeight, this.$inner.css("max-height", "none"), this.expandHeight > this.originHeight ? (this.showButton(), this.updateContent(), this.$element.addClass("fold")) : (this.hideButton(), this.$inner.height(this.expandHeight), this.$element.removeClass("fold")), s.trigger("resize", c))
            }
        }, {
            key: "updateContent", value: function () {
                this.expanded ? this.$inner.height(this.expandHeight) : this.$inner.height(this.originHeight)
            }
        }, {
            key: "expand", value: function () {
                this.expanded = !0, this.updateContent(), this.updateButton()
            }
        }, {
            key: "fold", value: function () {
                this.expanded = !1, this.updateContent(), this.updateButton()
            }
        }]), e
    }();
    s.on("resize", function (e, t) {
        t !== c && r.forEach(function (e) {
            return e.update()
        })
    }), t.createAutoFold = a
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.fetchRetail = t.fetchUpgrade = t.fetchGuide = t.fetchVisa = void 0;
    var a = n(1), o = n(19), r = i(o), s = {
        guideData: null, guideLoaded: !1, fetch: function (e, t) {
            var n = this;
            return n.guideData ? void e(n.guideData) : n.guideLoaded ? void(t && t()) : void $.ajax({
                dataType: "json",
                url: r["default"].url.guide({productId: (0, a.getStore)().getState("productId")}),
                beforeSend: function () {
                },
                complete: function () {
                    n.guideLoaded = !0
                },
                success: function (i) {
                    i && i.success ? (e(i.data), n.guideData = i.data) : t && t()
                }
            })
        }
    }, l = {
        visaData: null, visaLoaded: !1, fetch: function (e, t) {
            var n = this;
            if (n.visaData) return void e(n.visaData);
            if (n.visaLoaded) return void(t && t());
            var i = (0, a.getStore)();
            $.ajax({
                dataType: "json",
                url: r["default"].url.visa({
                    productId: i.getState("productId"),
                    bookCityCode: i.getState("bookCityCode") || void 0,
                    departCityCode: i.getState("departCityCode") || void 0
                })
            }).done(function (i) {
                i && i.success && i.data ? (e(i.data), n.visaData = i.data) : t && t()
            }).fail(function () {
                t && t()
            }).always(function () {
                n.visaLoaded = !0
            })
        }
    }, c = {
        upgradeData: null, upgradeLoaded: !1, fetch: function (e, t) {
            var n = this;
            if (n.upgradeData) return void e(n.upgradeData);
            if (n.upgradeLoaded) return void(t && t());
            var i = (0, a.getStore)();
            $.ajax({
                dataType: "json",
                url: r["default"].url.upgrade({
                    productId: i.getState("productId"),
                    bookCityCode: i.getState("bookCityCode") || void 0,
                    departCityCode: i.getState("departCityCode") || void 0
                })
            }).done(function (i) {
                i && i.success && i.data ? (e(i.data), n.upgradeData = i.data) : t && t()
            }).fail(function () {
                t && t()
            }).always(function () {
                n.upgradeLoaded = !0
            })
        }
    }, d = {
        retailData: {}, bookCityCode: 0, setBookCode: function (e) {
            this.bookCityCode = e
        }, fetch: function (e, t) {
            var n = this;
            return n.retailData[n.bookCityCode] ? void e(n.retailData[n.bookCityCode]) : void $.ajax({
                dataType: "json",
                url: r["default"].url.retail({bookCode: n.bookCityCode}),
                success: function (i) {
                    i && i.success && i.data ? (e(i.data), n.retailData[n.bookCityCode] = i.data) : t && t()
                },
                error: function (e, n) {
                    t && t()
                }
            })
        }
    };
    t.fetchVisa = l, t.fetchGuide = s, t.fetchUpgrade = c, t.fetchRetail = d
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.policyTemplate = '<%\nvar ITEM_NAME_MAP = {\n    trafficInfos: \'交&#12288;&#12288;通\',\n    accInfos: \'住&#12288;&#12288;宿\',\n    mealInfos: \'团队用餐\',\n    tour: \'游&#12288;&#12288;览\',\n    shopping: \'购&#12288;&#12288;物\',\n    diffPrice: \'差价说明\',\n    departureNotice: \'出团通知\',\n    suggestionFeedback: \'意见反馈\',\n    activityArrangment: \'活动说明\',\n    abroadNotice: \'注意事项\',\n    specialTerms: \'特别约定\',\n    selfDriveAttentions: \'自驾须知\',\n    orderAttentions: \'预订须知\',\n    warmAttention: \'温馨提示\'\n};\n\nvar SIGN_ICON_MAP = {\n    online: \'online\',\n    fax: \'fax\',\n    toDoor: \'visit\',\n    salesroom: \'retail\'\n}\n\nvar bookNotice = journey.bookNotice || [];\n\n// type 0:出行须知 1:特殊人群限制 2:安全提示\nvar hasOut = bookNotice.some(function(item) {\n    return item.type === 0 && item.content && item.content.length;\n});\n\nvar isPrint = false;\n\nif (typeof printMode == \'boolean\') {\n    isPrint = printMode;\n}\n\nvar formatTitle = function(str) {\n    if(typeof str === \'string\' && str.length === 2) {\n        str = str.split(\'\').join(\'&#12288;&#12288;\');\n    }\n    return str;\n}\n\n%>\n\n<div class="J_DetailPolicy section-box detail-policy" data-id="<%= journeyId %>">\n    <div class="section-box-head">\n        <h2>预订须知</h2>\n    </div>\n    <div class="section-box-body">\n        <% if (hasOut) { %>\n            <div class="section-box-title">\n                <h3>出行须知</h3>\n            </div>\n            <div class="section-box-content fold-box" data-role="fold-box">\n                <div class="fold-box-inner" data-role="fold-box-inner">\n                    <% bookNotice.forEach(function(item) { %>\n                        <% var itemValue = item.content;\n                        itemValue = Array.isArray(itemValue) ? itemValue.join(\'<br>\') : itemValue; %>\n                        <% if (item.type === 0 && !helper.empty(itemValue)) { %>\n                            <div class="item-label">\n                                <strong><span class="dot">•</span><%- formatTitle(item.title) %>：</strong>\n                                <%- itemValue %>\n                            </div>\n                        <% } %>\n                    <% }) %>\n                </div>\n            </div>\n        <% } %>\n\n        <% if (!helper.empty(journey.contractLoseInfos)) { %>\n            <div class="section-box-title">\n                <h3>违约责任提示</h3>\n            </div>\n            <div class="section-box-content fold-box" data-role="fold-box">\n                <div class="fold-box-inner" data-role="fold-box-inner">\n                    <p>旅游者在出发前提出解除合同的，应当按下列标准承担退团损失：</p>\n                    <% (journey.contractLoseInfos || []).forEach(function(info) {\n                        if(!helper.empty(info.regionList)) {\n                            info.regionList.forEach(function(region) { %>\n                                <div>\n                                    <span class="dot">•</span>\n                                    <%= region.content %>\n                                </div>\n                            <% }) %>\n                        <% } %>\n                    <% }) %>\n                </div>\n            </div>\n        <% } %>\n\n        <% if (isPrint !== true) { %>\n            <% var specialData = bookNotice.filter(function(item) {\n                    return item.type === 1;\n                })\n                if(specialData.length && !helper.empty(specialData[0].content)) { %>\n            <div class="section-box-title">\n                <h3>特殊限制</h3>\n            </div>\n            <div class="section-box-content fold-box" data-role="fold-box">\n                <div class="fold-box-inner" data-role="fold-box-inner">\n                    <div>\n                        <p>\n                            <%- specialData[0].content.join(\'<br>\') %>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <% } %>\n\n            <div class="section-box-title">\n                <h3>签约方式</h3>\n            </div>\n            <div class="section-box-content">\n                <div class="detail-policy-sign">\n                    <ul>\n                        <li>\n                            <div class="detail-policy-sign-item">\n                                <div class="detail-policy-sign-icon">\n                                    <i class="icon detail-policy-sign-icon-online"></i>\n                                </div>\n                                <div class="detail-policy-sign-title">\n                                    <strong>在线签约</strong>\n                                </div>\n                                <div class="detail-policy-sign-desc">\n                                    通过在线签约页面进行签约，付款成功后，将通过电子邮件接收电子版合同，与门市签约及传真签约同等有效。\n                                </div>\n                            </div>\n                        </li>\n                        <% if(!operateFlag) { %>\n                        <li>\n                            <div class="detail-policy-sign-item">\n                                <div class="detail-policy-sign-icon">\n                                    <i class="icon detail-policy-sign-icon-fax"></i>\n                                </div>\n                                <div class="detail-policy-sign-title">\n                                    <strong>传真签约</strong>\n                                </div>\n                                <div class="detail-policy-sign-desc">\n                                    双方在合同上签字盖章后，通过传真进行签约。如涉及签证材料需要快递，请在快件中注明订单号，以便工作人员及时处理。\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class="detail-policy-sign-item">\n                                <div class="detail-policy-sign-icon">\n                                    <i class="icon detail-policy-sign-icon-visit"></i>\n                                </div>\n                                <div class="detail-policy-sign-title">\n                                    <strong>上门签约</strong>\n                                </div>\n                                <div class="detail-policy-sign-desc">\n                                    途牛专业团队为您提供上门签约收团款收出境材料服务。支持POS刷卡支付。上海外环区域以内10元/单，万元以上团款首次签约免服务费。具体详询客服人员。\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class="detail-policy-sign-item">\n                                <div class="detail-policy-sign-icon">\n                                    <i class="icon detail-policy-sign-icon-retail"></i>\n                                </div>\n                                <div class="detail-policy-sign-title">\n                                    <strong>门市签约</strong>\n                                </div>\n                                <div class="detail-policy-sign-desc">\n                                    在门市进行签约付款。\n                                        推荐门市：<br>\n                                        <div class="J_retailName">\n                                            <a class="retail-name" href="javascript:;"><i class="icon detail-policy-sign-icon-location"></i>&nbsp;<span></span></a>\n                                        </div>\n                                        <a class="detail-policy-sign-view J_retailView" href="javascript:;" mm="点击_详情区_预订须知_查看全部门市">查看全部门市</a>\n                                </div>\n                            </div>\n                        </li>\n                        <% } %>\n                    </ul>\n                </div>\n            </div>\n\n            <div class="section-box-title">\n                <h3>付款方式</h3>\n            </div>\n\n            <div class="section-box-content">\n                <div class="item-with-title">\n                   <span class="dot">•</span>\n                   <div class="item-title"><strong>网上支付：</strong></div>\n                   <p>\n                       （1）网上银行：支持以下开通网上银行的储蓄卡及信用卡：中国工商银行、建设银行、中国银行、交通银行、中国农业银行、招商银行、中国光大银行、兴业银行、中国民生银行、中信银行、上海浦东发展银行、广东发展银行、南京银行、宁波银行、平安银行、北京银行、中国邮政储蓄银行<br>（2）信用卡：无需开通网上银行，支持大额支付，包括：中国工商银行、建设银行、中国银行、中国农业银行、招商银行、中国光大银行、兴业银行、中国民生银行、中信银行、上海浦东发展银行、广东发展银行、平安银行、上海银行<br>（3）第三方支付：第三方支付：支付宝、快钱、财付通、银联在线\n                   </p>\n               </div>\n               <div class="item-with-title">\n                   <span class="dot">•</span>\n                   <div class="item-title"><strong>门市支付：</strong></div>\n                   <p>\n                       门市现金付款、转账支票、刷卡。\n                   </p>\n               </div>\n               <div class="item-with-title">\n                   <span class="dot">•</span>\n                   <div class="item-title"><strong>对公汇款：</strong></div>\n                   <p>\n                       通过银行将相关款项汇至指定账户。\n                   </p>\n               </div>\n            </div>\n\n            <% var safeData = bookNotice.filter(function(item) {\n                    return item.type === 2;\n                })\n                if(safeData.length && !helper.empty(safeData[0].content)) { %>\n            <div class="section-box-title">\n                <h3>安全提示</h3>\n            </div>\n            <div class="section-box-content fold-box" data-role="fold-box">\n                <div class="fold-box-inner" data-role="fold-box-inner">\n                        <div class="item-with-title">\n                            <p>\n                                <%- safeData[0].content.join(\'<br>\') %>\n                            </p>\n                        </div>\n                </div>\n            </div>\n            <div class="section-box-content">\n                <div class="item-with-title">\n                    <span class="dot">•</span>\n                    <div class="item-title"><strong>安全须知、文明公约：</strong></div>\n                    <p>\n                        为普及旅游安全知识及旅游文明公约，使您的旅程顺利圆满完成，特拟定安全须知：\n                        <%- [\n                                {url: journey.safetyInstruction, name: \'安全须知\'},\n                                {url: journey.civilizationConvention, name: \'文明公约\'}\n                            ].filter(function(item) { return item.url; } )\n                            .map(function(item) { return \'<a href="\' + item.url + \'">《\' + item.name + \'》</a>\'})\n                            .join(\'、\')\n                        %>\n                        。\n                    </p>\n                </div>\n            </div>\n            <% } %>\n        <% } %>\n    </div>\n</div>\n';
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.journeyOldTemplate = '<div class="section-box-title">\n    <h3>行程明细<span>* 以下行程仅供参考，最终行程可能会根据实际情况进行微调，敬请以签约行程为准。</span></h3>\n</div>\n\n<% if (!helper.empty(journey.journeySummary)) { %>\n    <div class="section-box-content">\n        <div class="detail-route-brief">\n            <h4>沿途景点：</h4>\n            <% journey.journeySummary.forEach(function(item, index) { %>\n                <p><strong>第<%= index + 1 %>天</strong><%= item.join(\'、\') %></p>\n            <% }) %>\n        </div>\n    </div>\n<% } %>\n\n<div class="section-box-content">\n\n    <div class="J_DetailJourney detail-journey">\n\n        <div class="detail-journey-dot"></div>\n\n        <% if (!helper.empty(journey.journeySummary)) { %>\n            <div class="J_JourneyNav detail-journey-nav">\n                <ul>\n                    <% journey.journeySummary.forEach(function(item, index) { %>\n                        <li <% if (index === 0) { %> class="active"<% } %> data-rel="#J_JourneyDay<%= index + 1%>">第<%= index + 1%>天</li>\n                    <% }) %>\n                </ul>\n            </div>\n        <% } %>\n\n        <% if (!helper.empty(journey.journeyDescJson)) { %>\n\n            <% journey.journeyDescJson.forEach(function(oneJourney, journeyIndex) { %>\n                <div id="J_JourneyDay<%= journeyIndex + 1 %>">\n                    <div class="detail-journey-head">\n                        <i class="icon detail-journey-day">D<%= journeyIndex + 1 %></i>\n                        <%- oneJourney.journeyDescription.replace(/{(\\w+)}/g, \'<i class="icon detail-journey-transport-$1"></i>\') %>\n                    </div>\n                    <div class="detail-journey-seprate-solid"></div>\n\n                    <div class="detail-journey-title">行程描述</div>\n                    <div class="detail-journey-desc"><%- helper.trimBoundBr(helper.nb2br(oneJourney.journeyInfor)) %></div>\n                    <div class="detail-journey-seprate"></div>\n\n                    <% (oneJourney.journeyPeriodsTimeList || []).forEach(function(period) { %>\n                        <% if (period.journeyTime) {%>\n                            <div class="detail-journey-title">\n                                <i class="icon detail-journey-label-time"></i>\n                                <% if (period.journeyTime && !helper.empty(helper.removeHtmlTag(period.journeyTime))) { %>\n                                    <i class="detail-journey-time"><%- period.journeyTime %></i>\n                                <% } %>\n                            </div>\n                        <% } %>\n\n                        <% (period.journeyTimeInfor || []).forEach(function(timeInfo) { %>\n\n                            <% if (timeInfo.elementType == \'TimeDesc\' ||\n                                timeInfo.elementType == \'SubtitleText\') { %>\n                                <div class="detail-journey-desc"><%- timeInfo.elementInfor %></div>\n                            <% } else if (timeInfo.elementType == \'Subtitle\') { %>\n                                <div class="detail-journey-title"><%- timeInfo.elementInfor %></div>\n                            <% } else if (timeInfo.elementType == \'photo\') { %>\n                                <div class="detail-journey-photos">\n                                    <% var photoLength = timeInfo.elementInfor.length; %>\n                                    <% photoLength = photoLength > 4 ? 4 : (photoLength == 3 ? 2 : photoLength) %>\n                                    <div class="detail-journey-photo detail-journey-photo-<%= photoLength %>">\n                                        <% timeInfo.elementInfor.forEach(function(photo, photoIndex) { %>\n                                            <% if (photoIndex < photoLength) { %>\n                                                <div class="detail-journey-photo-item">\n                                                    <div class="detail-journey-photo-item-inner">\n                                                        <img src="<%= cdn.cdnHost %>/static/img/2016/common/placeholder.png" data-src="<%= helper.resizeImage(photo.strBigPicUrl, 500, 280, 1) %>"\n                                                        alt="<%= photo.strPicDesc %>">\n                                                    </div>\n                                                </div>\n                                                <% if ((photoIndex + 1) % 2 === 0) { %>\n                                                    <div class="detail-feature-photo-sep"></div>\n                                                <% } %>\n                                            <% } %>\n                                        <% }) %>\n                                    </div>\n                                </div>\n                            <% } %>\n\n                        <% })%>\n\n                    <% }) %>\n\n                    <% if (Array.isArray(oneJourney.foodAndStays)) { %>\n                        <div class="detail-journey-seprate"></div>\n                        <% oneJourney.foodAndStays.forEach(function(oneItem) { %>\n                            <% if (oneItem) { %>\n                                <% if (oneItem.elementType == \'food\') { %>\n                                    <div class="detail-journey-title"><i class="icon detail-journey-label-dinner"></i>餐饮</div>\n                                    <div class="detail-journey-list">\n                                        <%- oneItem.elementInfor %>\n                                    </div>\n                                    <div class="detail-journey-seprate"></div>\n                                <% } else if (oneItem.elementType == \'hotel\') { %>\n                                    <div class="detail-journey-title"><i class="icon detail-journey-label-hotel"></i>住宿</div>\n                                    <div class="detail-journey-list">\n                                        <%- oneItem.elementInfor %>\n                                    </div>\n                                    <div class="detail-journey-seprate"></div>\n                                <% } %>\n                            <% } %>\n                        <% }) %>\n                    <% } %>\n\n\n\n                    <% if (oneJourney.shops && oneJourney.shops.length) { %>\n                        <div class="detail-journey-title"><i class="icon detail-journey-label-shopping"></i>购物点信息<span>*如因游客购物造成时间延长，延长时间不计入旅行社的客观安排停留时间</span></div>\n                        <div class="detail-journey-table">\n                            <table>\n                                <thead>\n                                    <tr>\n                                        <th class="col-1">名称</th>\n                                        <th class="col-2">营业产品</th>\n                                        <th class="col-3">停留时间</th>\n                                        <th class="col-4">说明</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <% oneJourney.shops.forEach(function(shop, shopIndex) { %>\n                                        <tr class="<%= shopIndex % 2 == 1 ? \'even\': \'\'%>">\n                                            <td><%- shop.shopName %></td>\n                                            <td><%- shop.mainBussinessProduct %></td>\n                                            <td><%= shop.waitTime %></td>\n                                            <td><%- shop.description %></td>\n                                        </tr>\n                                    <% }) %>\n                                </tbody>\n                            </table>\n                        </div>\n                    <% } %>\n\n                </div>\n            <% }) %>\n\n        <% } %>\n\n    </div>\n</div>\n\n<% if(journey.scheduleRemark) { %>\n    <div class="detail-note">\n        <div class="detail-note-head">行程附注<i class="icon"></i></div>\n        <div class="detail-note-body">\n            *请注意以下行程补充事项：\n        </div>\n        <div class="detail-note-body">\n            <%- journey.scheduleRemark %>\n        </div>\n    </div>\n<% } %>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.journey4Template = '\n<%\nvar trafficTypeMap = {\n    1: \'none\',\n    2: \'plane\',\n    3: \'boat\',\n    4: \'train\',\n    5: \'car\',\n    6: \'other\'\n}\n\nvar moduleTypeMap = {\n    1: \'scenic\',\n    2: \'hotel\',\n    3: \'traffic\',\n    4: \'food\',\n    5: \'shopping\',\n    6: \'activity\',\n    7: \'reminder\',\n    8: \'note\'\n}\n\nvar moduleIconMap = {\n    1: \'spot\',\n    2: \'hotel\',\n    3: \'transport\',\n    4: \'dinner\',\n    5: \'shopping\',\n    6: \'activity\',\n    7: \'note\',\n    8: \'note\'\n}\n\nvar moduleDurationMap = {\n    1: \'建议时间\',\n    2: \'建议时间\',\n    3: \'建议时间\',\n    4: \'建议时间\',\n    5: \'建议时间\',\n    6: \'建议时间\',\n    7: \'建议时间\',\n    8: \'建议时间\'\n}\n\nvar resourceList = [1, 2];\nvar journeyData = journey.journeyFourDetail || {};\n\nvar spotGroups = [];\n\nvar notDownloadMode = !(typeof printMode === \'boolean\' && printMode === true);\n\nif (journeyData.scheduleType == 1) {\n    (journeyData.detail || []).reduce(function(list, dayItem) {\n        (dayItem.data || []).reduce(function(list, moduleItem) {\n            if (moduleItem.moduleTypeValue == 1) {\n                (moduleItem.data || []).reduce(function(list, resource) {\n                    if (resource.latitude && resource.longitude) {\n                        list.push(resource);\n                    }\n                    return list;\n                }, list);\n            }\n            return list;\n        }, list)\n        return list;\n    }, spotGroups);\n}\n%>\n\n<% if (journeyData.scheduleType == 1 && notDownloadMode) { %>\n    <div class="detail-journey-tab">\n        <ul class="J_Journey4RouteTab">\n            <li class="active" data-rel=".J_DetailRouteDetail">行程明细<i class="icon"></i></li>\n            <li class="seprate"></li>\n            <li data-rel=".J_DetailRouteCalendar">日历模式<i class="icon"></i></li>\n        </ul>\n        <span>* 以下行程仅供参考，最终行程可能会根据实际情况进行微调，敬请以签约行程为准。</span>\n    </div>\n\n    <div class="J_DetailRouteCalendar section-box-content detail-journey-4-summary">\n        <div class="detail-journey-table">\n            <table>\n                <thead>\n                    <tr>\n                        <th class="col-1">时间</th>\n                        <th class="col-2">行程</th>\n                        <th class="col-3">游玩景点</th>\n                        <th class="col-4">住宿</th>\n                        <th class="col-5">用餐</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <% (journeyData.detail || []).forEach(function(dayItem, dayIndex) { %>\n                        <% var resources = {} %>\n                        <% (dayItem.data || []).forEach(function(resource, resourceIndex) {\n                            var moduleType = resource.moduleTypeValue;\n                            resources[moduleType] = resources[moduleType] || [];\n                            if (moduleType == 1 || moduleType == 2) {\n                                resources[moduleType] = resources[moduleType].concat(resource.data || []);\n                            } else if (moduleType == 4 || moduleType == 5 || moduleType == 6) {\n                                resources[moduleType].push(resource);\n                            }\n                        })%>\n                        <tr class="<%= dayIndex % 2 == 1 ? \'even\': \'\'%>">\n                            <td>第<%- dayItem.day %>天</td>\n                            <td>\n                                <% (dayItem.traffic || []).forEach(function(trafficItem) { %>\n                                    <%= trafficItem.from %>\n                                    <% if (trafficItem.to) { %>\n                                        - <%= trafficItem.to %>\n                                    <% } %>\n                                <% }) %>\n                            </td>\n                            <% [1, 2, 4].forEach(function(moduleType) { %>\n                                <td>\n                                    <% if (moduleType == 4) { %>\n                                        <%- helper.nb2br(((journeyData.overview || [])[dayIndex] || {})[\'food\']) %>\n                                    <% } else { %>\n                                        <%- (resources[moduleType] || []).map(function(item) {return item.title}).join(\'<br>\') %>\n                                    <% } %>\n                                </td>\n                            <% }) %>\n                        </tr>\n                    <% })%>\n                </tbody>\n            </table>\n        </div>\n    </div>\n<% } %>\n\n<div class="J_DetailRouteDetail section-box-content detail-journey-4-detail active">\n    <% if (journeyData.scheduleType == 1 && notDownloadMode) { %>\n        <div class="section-box-content detail-route4-brief-box<% if (true || !spotGroups.length || !notDownloadMode) { %> detail-route4-brief-nomap<% } %>">\n            <div class="J_DetailRouteBrief detail-route-brief">\n                <div class="J_DetailRouteBriefBox detail-route-brief-box">\n                    <div class="J_DetailRouteBriefInner detail-route-brief-inner">\n                        <h4>沿途景点：</h4>\n                        <% (journeyData.detail || []).forEach(function(dayItem, dayIndex) { %>\n                            <p><strong>第<%= dayItem.day %>天</strong>\n                                <%\n                                    var trafficDesc = (dayItem.traffic || []).reduce(function(sum, trafficItem) {\n                                            if (trafficItem.from) sum.push(trafficItem.from);\n                                            if (trafficItem.to) sum.push(trafficItem.to);\n                                            return sum;\n                                        }, []);\n                                %>\n                                <%= trafficDesc.join(\'、\') %>\n                            </p>\n                        <% }) %>\n                    </div>\n                </div>\n                <a class="J_DetailRouteBriefMore detail-route-brief-more" href="javascript:;">展开全部<i class="icon"></i></a>\n                <a class="J_DetailRouteBriefLess detail-route-brief-less" href="javascript:;">收起全部<i class="icon"></i></a>\n            </div>\n\n            <% if (false && spotGroups.length && notDownloadMode) { %>\n                <div class="detail-route-map">\n                    <div class="detail-route-map-head">\n                        <div class="detail-route-map-day">\n                            <div class="J_DetailJourneyMapPrev detail-route-map-day-prev"><i class="icon"></i></div>\n                            <div class="J_DetailJourneyMapNext detail-route-map-day-next"><i class="icon"></i></div>\n                            <div class="J_DetailJourneyMapDay detail-route-map-day-label">正在加载...</div>\n                        </div>\n                        <div class="J_DetailJourneyMapView detail-route-map-button">\n                            <i class="icon"></i>查看大图\n                        </div>\n                    </div>\n                    <div class="detail-route-map-body">\n                        <div class="J_DetailJourneyMapSmall detail-route-map-box loading"></div>\n                    </div>\n                </div>\n            <% } %>\n        </div>\n    <% } %>\n\n    <div class="J_DetailJourney detail-journey detail-journey-4">\n\n        <div class="detail-journey-dot"></div>\n\n        <% if (notDownloadMode) { %>\n            <div class="J_JourneyNav detail-journey-4-nav">\n                <div class="detail-journey-4-nav-box">\n                    <div class="detail-journey-4-nav-inner">\n                        <ul class="detail-journey-4-nav-list">\n                            <% //1:time  2:resource %>\n                            <% if (journeyData.scheduleType == 1) { %>\n                                <% (journeyData.detail || []).forEach(function(dayItem, dayIndex) { %>\n                                    <li class="detail-journey-4-nav-group" data-rel=".J_JourneyItem<%= dayItem.cid %>">\n                                        <div class="detail-journey-4-nav-group-label"><span>第<%= dayItem.day %>天</span><i class="icon"></i></div>\n                                        <ul class="detail-journey-4-nav-sub">\n                                            <% (dayItem.data || []).forEach(function(resource) { %>\n                                                <% if (~resourceList.indexOf(resource.moduleTypeValue)) { %>\n                                                    <% if (resource.data && resource.data.length) { %>\n                                                        <% resource.data.forEach(function(item) { %>\n                                                            <li class="detail-journey-4-nav-sub-item" data-sub-rel=".J_JourneyItem<%= item.cid %>"><span><%= item.title %></span><i class="icon"></i></li>\n                                                        <% })%>\n                                                    <% } %>\n                                                <% } %>\n                                            <% }) %>\n                                        </ul>\n                                    </li>\n                                <% }) %>\n                            <% } else if (journeyData.scheduleType == 2 && journeyData.detail && journeyData.detail.length) { %>\n                                <% ((journeyData.detail[0] || {}).data || []).forEach(function(resource) { %>\n                                    <% if (~resourceList.indexOf(resource.moduleTypeValue)) { %>\n                                        <% if (resource.data && resource.data.length) { %>\n                                            <% resource.data.forEach(function(item) { %>\n                                                <li class="detail-journey-4-nav-group" data-rel=".J_JourneyItem<%= item.cid %>">\n                                                    <div class="detail-journey-4-nav-group-label"><span><%= item.title %></span><i class="icon"></i></div>\n                                                </li>\n                                            <% })%>\n                                        <% } %>\n                                    <% } %>\n                                <% }) %>\n                            <% } %>\n                        </ul>\n\n                        <% if (typeof downloadUrl !== \'undefined\') { %>\n                            <a class="J_SideDownload side-download" href="<%= downloadUrl %>" target="_blank" m="点击_详情区_线路介绍_下载行程"><i></i>下载</a>\n                        <% } %>\n                        <% if (typeof printUrl !== \'undefined\') { %>\n                            <a class="J_SidePrint side-print" href="<%= printUrl %>" target="_blank" m="点击_详情区_线路介绍_打印行程"><i></i>打印</a>\n                        <% } %>\n                    </div>\n                </div>\n            </div>\n        <% } %>\n\n\n        <% if (journeyData.scheduleType == 1) { %>\n            <% (journeyData.detail || []).forEach(function(dayItem, dayIndex) { %>\n                <div class="J_JourneyItem<%= dayItem.cid %>">\n                    <div class="detail-journey-head">\n                        <i class="icon detail-journey-day">D<%= dayItem.day %></i>\n                        <strong>第<%= dayItem.day %>天</strong>\n\n                        <% (dayItem.traffic || []).forEach(function(trafficItem) { %>\n                            <strong><%= trafficItem.from %></strong>\n                            <% if (trafficItem.to) { %>\n                                <% if (trafficItem.meanValue == 6) { %>\n                                    -\n                                <% } else { %>\n                                    <i class="icon detail-journey-transport-<%= trafficTypeMap[trafficItem.meanValue] %>"></i>\n                                <% } %>\n                                <strong><%= trafficItem.to %></strong>\n                            <% } %>\n                        <% }) %>\n                    </div>\n                    <div class="detail-journey-seprate-solid"></div>\n\n                    <%- include(\'journey4Resource\', {\n                        journeyData: dayItem || {},\n                        trafficTypeMap: trafficTypeMap,\n                        moduleTypeMap: moduleTypeMap,\n                        resourceList: resourceList,\n                        moduleIconMap: moduleIconMap,\n                        moduleDurationMap: moduleDurationMap,\n                        scheduleType: journeyData.scheduleType,\n                        noImage: typeof noImage == \'undefined\' ? false : noImage\n                    }) %>\n\n                </div>\n            <% }) %>\n        <% } else { %>\n            <%- include(\'journey4Resource\', {\n                journeyData: (journeyData.detail || [])[0] || {},\n                trafficTypeMap: trafficTypeMap,\n                moduleTypeMap: moduleTypeMap,\n                resourceList: resourceList,\n                moduleIconMap: moduleIconMap,\n                moduleDurationMap: moduleDurationMap,\n                scheduleType: journeyData.scheduleType,\n                noImage: typeof noImage == \'undefined\' ? false : noImage\n            }) %>\n        <% } %>\n    </div>\n</div>\n\n<%\nvar notes = (journeyData.detail || []).reduce(function(allNotes, dayItem) {\n    var dayNotes = (dayItem.data || []).reduce(function(sum, moduleItem) {\n        if (moduleItem.moduleTypeValue == 8) {\n            sum.push(moduleItem);\n        }\n        return sum;\n    }, []);\n\n    return allNotes.concat(dayNotes);\n}, []);\n%>\n\n<%  var noteArr = [];\n    if (notes.length) {\n        noteArr = notes.map(function(note) {\n            return helper.nb2br(note.content);\n        });\n    }\n    %>\n<% if (noteArr.join(\'\')) { %>\n    <div class="detail-note">\n        <div class="detail-note-head">行程附注<i class="icon"></i></div>\n        <div class="detail-note-body">\n            <%- noteArr.join(\'<br>\') %>\n        </div>\n    </div>\n<% } %>\n\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.journey4PhotoTemplate = '\n\n<%\n\nvar photoLength = Array.isArray(pictures) ? pictures.length : 0,\n    photoStep = 3;\n\nif (photoLength % 3 === 0) {\n    photoStep = 3;\n} else if (photoLength % 2 === 0) {\n    photoStep = 2;\n} else if (photoLength === 1) {\n    photoStep = 2;\n}\n\n%>\n\n<% if(photoLength) { %>\n    <div class="detail-journey-photos">\n        <div class="detail-journey-photo detail-journey-photo-<%= photoStep %>">\n            <% pictures.forEach(function(photo, photoIndex) { %>\n                <% if(photoIndex < photoLength) { %>\n                    <div\n                        <% if (hasDetail) { %>\n                            class="J_ViewDetail detail-journey-photo-item detail-journey-photo-item-clickable"\n                            data-id="<%= cid %>"\n                        <% } else { %>\n                            class="detail-journey-photo-item"\n                        <% } %>\n                    >\n                        <div class="detail-journey-photo-item-inner">\n                            <img src="<%= cdn.cdnHost %>/static/img/2016/common/placeholder-4x3.png"\n                                data-src="<%= helper.resizeImage(photo.url, 640, 480, 1) %>"\n                                alt="<%= photo.pic_title %>">\n                            <% if (photo.title) { %>\n                                <div class="detail-journey-photo-item-mask"></div>\n                                <div class="detail-journey-photo-item-title"><%= photo.title %></div>\n                            <% } %>\n                        </div>\n                    </div>\n                    <% if ((photoIndex + 1) % photoStep === 0) { %>\n                        <div class="detail-feature-photo-sep"></div>\n                    <% } %>\n                <% } %>\n            <% }) %>\n        </div>\n    </div>\n<% } %>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.journey4ResourceTemplate = '\n<%\nvar resourceLength = (journeyData.data || []).length;\n\nvar hotelLevelMap = {\n    1: \'一星级\',\n    2: \'二星级\',\n    3: \'三星级\',\n    4: \'四星级\',\n    5: \'五星级\'\n};\n\nvar mealTypeMap = {\n    breakfast: \'早餐\',\n    lunch: \'午餐\',\n    dinner: \'晚餐\',\n    allDay: \'全天用餐\'\n}\n\n\nfunction isSpotAvailable(spot) {\n    if (spot &&\n        spot.poiId &&\n        spot.latitude &&\n        spot.longitude &&\n        spot.picture &&\n        spot.picture.length) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction isEmpty(value) {\n    function _isEmpty(value) {\n        switch (typeof value) {\n            case \'string\':\n                return !value;\n            case \'number\':\n                return !value;\n            case \'bollean\':\n                return value;\n            default:\n                if(Array.isArray(value)) {\n                    return value.every(_isEmpty);\n                } else {\n                    return !Object.keys(value || {}).length;\n                }\n        }\n    }\n    return _isEmpty(value);\n}\n\nfunction isFoodEmpty(resData) {\n    return isEmpty((resData || {}).hasInfoList);\n}\n\nfunction isResourceEmpty(resData) {\n    var emptyFlag = false;\n    switch (parseInt((resData || {}).moduleTypeValue, 10)) {\n        case 4:\n            emptyFlag = isFoodEmpty(resData)\n            break;\n        case 8:\n            emptyFlag = true;\n            break;\n    }\n\n    return emptyFlag;\n}\n\n%>\n\n<% (journeyData.data || []).forEach(function(resource, resourceIndex) { %>\n    <% var resourceType = resource.moduleTypeValue %>\n    <% if (isResourceEmpty(resource)) { return; }%>\n    <div class="J_JourneyItem<%= resource.cid %>">\n        <% var subResourceLength = (resource.data || []).length %>\n        <div class="detail-journey-title">\n\n            <i class="icon detail-journey-label-<%= moduleIconMap[resourceType] %>"></i>\n\n            <% if (resourceType == 4) { %>\n                <% if (resource.moment) { %>\n                    <i class="detail-journey-time"><%= resource.moment %></i>\n                <% } %>\n            <% } else if ((resource.moment || resource.period) && String(resource.moment || resource.period) != \'00:00\') { %>\n                <i class="detail-journey-time"><%= resource.moment || resource.period %></i>\n            <% } %>\n\n            <% if (resourceType == 1) {%>\n                景点 · <%- (resource.data || []).map(function(scenic) {\n                    return isSpotAvailable(scenic) ? \'<a class="J_ViewDetail" data-id="\' + scenic.cid + \'" href="javascript:;">\' + scenic.title + \'</a>\' : scenic.title\n                }).join(\' - \')%>\n                <% if(resource.data && resource.data.length == 1) {%>\n                    <% if(resource.data[0].labels && resource.data[0].labels.length) { %>\n                        <%  resource.data[0].labels.forEach(function (item) { %>\n                            <span class="label"><%= item %></span>       \n                        <% })%>\n                    <% } %>     \n                <% } %>\n            <% } else if (resourceType == 2) { %>\n                住宿 · <%- (resource.data || []).map(function(hotel) {\n                    var title = hotel.title;\n                    if (hotel.starName) {\n                        title += \'<span class="detail-journey-star">\' + (hotelLevelMap[hotel.starName] || hotel.starName)  + \'</span>\'\n                    }\n                    return title;\n                }).join(resource.relative == 1 ? \'<span class="detail-journey-relative">和</span>\' : \'<span class="detail-journey-relative">或</span>\')%>\n            <% } else if (resourceType == 3) { %>\n                <% // traffic %>\n                <% if (resource.from) { %>\n                    <strong><%= resource.from %></strong>\n                <% } %>\n                <% if (resource.to) { %>\n                    <% if (resource.meanValue == 6) { %>\n                        -\n                    <% } else { %>\n                        <i class="icon detail-journey-transport-<%= trafficTypeMap[resource.meanValue] %>"></i>\n                    <% } %>\n                    <strong><%= resource.to %></strong>\n                <% } %>\n            <% } else if (resourceType == 4) { %>\n                <% // food %>\n                <%- (resource.hasInfoList).map(function(dinner) {\n                    return mealTypeMap[dinner.type] + \'：\' + (dinner.has == 0 ? \'敬请自理\' : \'已含\')\n                }).join(\'<i class="meal-sep">；</i>\') %>\n            <% } else if (resourceType == 5) { %>\n                <% // shopping %>\n                购物店信息<span><%= resource.reminder %></span>\n            <% } else if (resourceType == 6) { %>\n                <% // activity %>\n                自由活动\n            <% } else if (resourceType == 7) {%>\n                <% // reminder %>\n                <%= resource.type || \'温馨提醒\' %>\n            <% } else if (resourceType == 8) {%>\n                <% // note %>\n            <% } else { %>\n                <%= resource.title %>\n            <% } %>\n\n        </div>\n\n        <% if (resourceType == 6 && resource.title) { %>\n            <div class="detail-journey-title-sub">\n                <%= resource.title %>\n            </div>\n        <% } %>\n\n        <% if (resource.times) { %>\n            <div class="detail-journey-duration"><%= moduleDurationMap[resourceType] %>：<%= resource.times %></div>\n        <% } %>\n\n        <% if (resourceType == 4 && resource.title) { %>\n            <div class="detail-journey-title-sub">\n                <%= resource.title %>\n            </div>\n        <% } %>\n\n        <% if (resource.content) { %>\n            <div class="detail-journey-desc"><%- helper.nb2br(resource.content) %></div>\n        <% } %>\n\n        <% if (resource.poiDescription) { %>\n            <div class="detail-journey-desc"><%- helper.nb2br(resource.poiDescription) %></div>\n        <% } %>\n\n        <% if (resourceType == 5 && resource.data && resource.data.length) { %>\n            <div class="detail-journey-desc detail-journey-shopping-list">\n                <table>\n                    <thead>\n                        <tr>\n                            <th class="col-1">名称</th>\n                            <th class="col-2">营业产品</th>\n                            <th class="col-3">停留时间</th>\n                            <th class="col-4">说明</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <% resource.data.forEach(function(item) { %>\n                            <tr>\n                                <td class="col-1"><%= item.title %></td>\n                                <td class="col-2"><%= item.product %></td>\n                                <td class="col-3"><%= item.times %></td>\n                                <td class="col-4"><%= item.instruction %></td>\n                            </tr>\n                        <% }) %>\n                    </tbody>\n                </table>\n            </div>\n        <% } %>\n\n        <%- include(\'journey4Photo\', {\n            pictures: resource.picture,\n            hasDetail: false,\n            cid: \'\'\n        }) %>\n\n        <% if (resourceType == 1 && resource.data && resource.data.length) { %>\n            <% resource.data.forEach(function(item) { %>\n                <div class="J_JourneyItem<%= item.cid %>">\n                    <% if (subResourceLength > 1) { %>\n                        <div class="detail-journey-title-sub">\n                            景点 ·\n                            <% if (isSpotAvailable(item)) { %>\n                                <a class="J_ViewDetail" href="javascript:;" data-id="<%= item.cid %>"><%= item.title %></a>\n                            <% } else { %>\n                                <%= item.title %>\n                            <% } %>\n                            <% if (item.labels && item.labels.length) { %>\n                                <% item.labels.forEach(function (msg) { %>\n                                    <span class="label"><%= msg %></span>    \n                                <% })%>\n                            <% } %>\n                        </div>\n                    <% } %>\n\n                    <% if (scheduleType != 1) { %>\n                        <ul class="detail-journey-list">\n                            <% if (item.times) { %>\n                                <li><i class="icon detail-journey-icon-smile"></i>建议时间：<%= item.times %></li>\n                            <% } %>\n                            <% if (item.opened) { %>\n                                <li><i class="icon detail-journey-icon-clock"></i>开放时间：<%= item.opened %></li>\n                            <% } %>\n                            <% if (item.address) { %>\n                                <li class="single"><i class="icon detail-journey-icon-marker"></i>景点地址：<%= item.address %></li>\n                            <% } %>\n                        </ul>\n                    <% } else { %>\n                        <ul class="detail-journey-list">\n                            <% if (item.times) { %>\n                                <li><i class="icon detail-journey-icon-clock"></i>游玩时长：约<%= item.times %></li>\n                            <% } %>\n                        </ul>\n                    <% } %>\n\n\n                    <% if (item.content) { %>\n                        <div class="detail-journey-desc"><%- helper.nb2br(item.content) %></div>\n                    <% } %>\n\n                    <%- include(\'journey4Photo\', {\n                        pictures: item.picture,\n                        hasDetail: isSpotAvailable(item),\n                        cid: item.cid\n                    }) %>\n                </div>\n            <% })%>\n        <% } %>\n\n\n        <% if (resourceType == 2 && resource.data && resource.data.length) { %>\n            <% var hotelAmount = resource.data.length; %>\n            <% resource.data.filter(function(item){\n                var rooms = false;\n                if (item && Array.isArray(item.room) && item.room.length) {\n                    rooms = item.room.filter(function(room) {\n                        return room && (room.title || room.description || room.picture && room.picture.length)\n                    });\n                }\n                return rooms && rooms.length >= 1;\n            }).forEach(function(item) { %>\n                <div class="J_JourneyItem<%= item.cid %>">\n\n                    <div class="detail-journey-title-sub">\n                        <% if (hotelAmount > 1) { %>\n                            房型介绍 · <%= item.title %>\n                        <% } else { %>\n                            房型介绍\n                        <% } %>\n                    </div>\n\n                    <% item.room.forEach(function(room) { %>\n                        <% if (room.title) { %>\n                            <div class="detail-journey-title-3"><%= room.title %></div>\n                        <% } %>\n\n                        <% if (room.description) { %>\n                            <div class="detail-journey-desc"><%- room.description %></div>\n                        <% } %>\n\n                        <%- include(\'journey4Photo\', {\n                            pictures: room.picture,\n                            hasDetail: false,\n                            cid: \'\'\n                        }) %>\n\n                    <% })%>\n\n                </div>\n            <% })%>\n        <% } %>\n\n\n        <% if (resource.remark) { %>\n            <div class="detail-journey-desc">备注：<%- helper.nb2br(resource.remark) %></div>\n        <% } %>\n\n        <% if (resourceIndex < resourceLength - 1) { %>\n            <div class="detail-journey-seprate"></div>\n        <% } %>\n    </div>\n<% }) %>\n';
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        O = b.layer.open({
            type: 1,
            title: !1,
            closeBtn: !1,
            content: J({dialogType: t}),
            area: ["700px", "auto"],
            btn: !1,
            success: e
        })
    }

    function r() {
        o(c, "send")
    }

    function s() {
        o(d, "print")
    }

    function l() {
        b.layer.close(O)
    }

    function c(e) {
        u(e, "send")
    }

    function d(e) {
        u(e, "print")
    }

    function u(e, t) {
        function n(e) {
            c.css("visibility", "visible").find("strong").text(e.join("；"))
        }

        function i() {
            c.css("visibility", "hidden").find("strong").text("")
        }

        function a() {
            var e = r.filter(".active").toArray().map(function (e) {
                return {id: $(e).data("id"), name: $(e).data("name")}
            });
            return {groupCode: e, email: s.val(), productId: E.getState("productId"), productName: P, resId: A}
        }

        function o() {
            if (d) {
                var e = f(a(), t);
                e === !0 ? i() : n(e)
            }
        }

        var r = e.find(".J_VisaPersonType"), s = e.find(".J_VisaEmail"), c = e.find(".J_DialogError"), d = !1;
        r.click(function () {
            var e = $(this);
            e.hasClass("active") ? e.removeClass("active") : e.addClass("active"), o()
        }), s.on("change", o), e.on("click", ".J_VisaCancel, .J_VisaClose", l).on("click", ".J_VisaSend", function () {
            var e = a(), o = f(e, t);
            "send" === t ? (d = !0, $(this).attr({href: "javascript:;"}).removeAttr("target"), o === !0 ? p(e) : n(o)) : o === !0 ? (i(), $(this).attr({
                href: k["default"].url.visaPrint(e),
                target: "_blank"
            })) : n(o)
        })
    }

    function f(e, t) {
        var n = [];
        return e.groupCode && 0 != e.groupCode.length || n.push("请选择您的身份类型"), "send" === t && (e.email ? (0, x.checkEmail)(e.email) === !1 && n.push("请输入正确的邮箱") : n.push("请输入您常用的邮箱")), 0 === n.length || n
    }

    function p(e) {
        $.ajax({
            url: k["default"].url.visaSend(),
            dataType: "json",
            data: {d: JSON.stringify(e)},
            type: "post",
            success: function (e) {
                e.success ? h() : v(e && e.message)
            },
            error: function () {
                v()
            }
        })
    }

    function h() {
        var e = b.layer.open({
            type: 1,
            title: !1,
            time: 3e3,
            content: '<div class="dialog-success"><div class="dialog-close"></div><i class="icon"></i>材料已经发送至您的邮箱，请注意查收。</div>',
            area: ["400px", "auto"],
            btn: !1,
            closeBtn: !1,
            success: function (t) {
                t.on("click", ".dialog-close", function () {
                    b.layer.close(e)
                })
            },
            end: l
        })
    }

    function v(e) {
        var t = b.layer.open({
            type: 1,
            title: !1,
            content: '<div class="dialog-error"><div class="dialog-close"></div><i class="icon"></i>' + (e || "材料发送失败，请稍后重试。") + "</div>",
            area: ["400px", "auto"],
            btn: !1,
            closeBtn: !1,
            success: function (e) {
                e.on("click", ".dialog-close", function () {
                    b.layer.close(t)
                })
            }
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var m = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), y = n(1), g = n(22), b = n(15), _ = n(58), x = n(34), j = n(85), w = n(86), C = n(78), D = n(19), k = i(D),
        T = 1, I = 4, M = 5, S = $(window), O = void 0, E = void 0, A = void 0, P = void 0,
        J = g.template.compile(w.detailVisaDialogTemplate), N = function () {
            function e(t) {
                a(this, e), this.status = T, this.visaData = null, this.$el = t.$el, E = (0, y.getStore)()
            }

            return m(e, [{
                key: "load", value: function (e) {
                    this.visaData = e, this.status = I
                }
            }, {
                key: "render", value: function () {
                    var e = g.template.compile(j.detailVisaTemplate), t = this.$el.data("id"), n = [],
                        i = this.visaData.filter(function (e) {
                            return (e.visaResIdAndJourneyId || []).filter(function (e) {
                                return e.journeyId == t && (!~n.indexOf(e.resId) && n.push(e.resId), !0)
                            }).length
                        });
                    i = i.filter(function (e) {
                        return e.visaInfo && ~n.indexOf(e.visaInfo.id)
                    }), this.$el.append(e({
                        data: i,
                        journeyId: t
                    })).removeClass("section-loading"), this.status = M, this.initRetail(), this.bind()
                }
            }, {
                key: "initRetail", value: function () {
                    var e = $(".J_retailName");
                    C.fetchRetail.setBookCode(E.getState("bookCityCode")), C.fetchRetail.fetch(function (t) {
                        e.find(".J_retailTxt").text(t[0] && t[0].name).end().show()
                    })
                }
            }, {
                key: "bind", value: function () {
                    this.$el.find(".J_DetailVisaBlock").each(function () {
                        var e = $(this);
                        e.find(".J_VisaTab").each(function () {
                            (0, _.createTaber)($(this), {ctx: e})
                        }).end().find(".J_DetailVisaDeadline").each(function () {
                            var e = $(this), t = e.parent(), n = t.find(".detail-visa-deadline");
                            e.click(function (e) {
                                e.stopPropagation(), t.hasClass("expand") ? t.removeClass("expand") : t.addClass("expand")
                            }), n.click(function (e) {
                                e.stopPropagation()
                            }), $(document).click(function () {
                                t.removeClass("expand")
                            })
                        }).end().find(".J_DetailVisaSend").click(function () {
                            A = $(this).data("id"), P = $(this).data("name"), r()
                        }).end().find(".J_DetailVisaPrint").click(function () {
                            A = $(this).data("id"), P = $(this).data("name"), s()
                        })
                    })
                }
            }, {
                key: "remove", value: function () {
                    this.$el.remove(), S.trigger("resize")
                }
            }, {
                key: "isLoaded", value: function () {
                    return this.status >= I
                }
            }, {
                key: "isRendered", value: function () {
                    return this.status >= M
                }
            }]), e
        }();
    t["default"] = N
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailVisaTemplate = '\n<% var materialTypeMap = {0: \'原件\',1: \'复印件\',2: \'扫描件\',3: \'电子件\'} %>\n<% var deadline %>\n<div class="section-box detail-visa">\n    <div class="section-box-head">\n        <h2>签证信息</h2>\n    </div>\n    <div class="section-box-body">\n\n        <% for (var i = 0; i < data.length; i++) { %>\n            <div class="J_DetailVisaBlock">\n                <% var visa = data[i]; %>\n                <% var visaInfo = visa.visaInfo; %>\n                <% var deadlines = (visa.deadline || {})[journeyId]; %>\n                <div class="section-box-title">\n                    <h3><%= visaInfo.name %></h3>\n                </div>\n\n                <div class="section-box-content">\n                    <div class="detail-visa-info">\n\n                        <% if (visaInfo.visaCityName) { %>\n                            <div class="detail-visa-info-item">\n                                所属领区：<strong><%= visaInfo.visaCityName %></strong>\n                            </div>\n                        <% } %>\n                        <% if (visaInfo.enterCountryTimes) { %>\n                            <div class="detail-visa-info-item">\n                                入境次数：<strong><%= visaInfo.enterCountryTimes %></strong>\n                            </div>\n                        <% } %>\n                        <% if (visaInfo.longestResidenceTime) { %>\n                            <div class="detail-visa-info-item">\n                                停留天数：<strong><%= visaInfo.longestResidenceTime %></strong>\n                            </div>\n                        <% } %>\n                        <% if (visaInfo.handleTimeDuration) { %>\n                            <div class="detail-visa-info-item">\n                                办理时长：<strong><% if (visaInfo.handleTimeDuration == 0) { %>以实际情况为准<% } else { %>材料齐全后预计<%= visaInfo.handleTimeDuration %>个工作日<% } %></strong>\n                            </div>\n                        <% } %>\n                        <% if (deadlines && deadlines.length && (deadline = deadlines[0])) { %>\n                            <div class="detail-visa-info-item single-row">\n                                材料收取截止时间：<strong>出发<%= deadline.visaEndDay ? \'前\' + deadline.visaEndDay : \'当\'%>天的<%= deadline.visaEndOclock %>点</strong>\n                                <% if (deadlines.length > 1) { %>\n                                    <a class="J_DetailVisaDeadline detail-visa-time-more" href="javascript:;" mm="点击_详情区_签证信息_查看全部截止时间">查看全部截止时间<i class="icon"></i></a>\n                                    <div class="detail-visa-deadline">\n                                        <i class="detail-visa-deadline-arrow"></i>\n                                        <div class="detail-visa-deadline-inner">\n                                            <div class="detail-visa-deadline-left">\n                                                <div class="thead">\n                                                    <table>\n                                                        <thead>\n                                                            <tr>\n                                                                <th class="col-1">出发团期</th>\n                                                                <th class="col-2">收取材料截止时间</th>\n                                                            </tr>\n                                                        </thead>\n                                                    </table>\n                                                </div>\n                                                <div class="tbody">\n                                                    <table>\n                                                        <tbody>\n                                                            <% for (var index = 0; index < deadlines.length; index++) { %>\n                                                                <% if (index % 2 === 0) { %>\n                                                                    <% deadline = deadlines[index] %>\n                                                                    <tr class="<%= index % 4 !== 0 ? \'even\' : \'\'%>">\n                                                                        <td class="col-1"><%= deadline.departsDate %></td>\n                                                                        <td class="col-2"><%= deadline.visaEndTime%>&nbsp;&nbsp;<%= deadline.visaEndOclock %>点之前</td>\n                                                                    </tr>\n                                                                <% } %>\n                                                            <% } %>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                            <div class="detail-visa-deadline-right">\n                                                <div class="thead">\n                                                    <table>\n                                                        <thead>\n                                                            <tr>\n                                                                <th class="col-1">出发团期</th>\n                                                                <th class="col-2">收取材料截止时间</th>\n                                                            </tr>\n                                                        </thead>\n                                                    </table>\n                                                </div>\n                                                <div class="tbody">\n                                                    <table>\n                                                        <tbody>\n                                                        <% for (var index = 0; index < deadlines.length; index++) { %>\n                                                            <% if (index % 2 === 1) { %>\n                                                                <% deadline = deadlines[index] %>\n                                                                <tr class="<%= (index - 1) % 4 !== 0 ? \'even\' : \'\'%>">\n                                                                    <td class="col-1"><%= deadline.departsDate %></td>\n                                                                    <td class="col-2"><%= deadline.visaEndTime%>&nbsp;&nbsp;<%= deadline.visaEndOclock %>点之前</td>\n                                                                </tr>\n                                                            <% } %>\n                                                        <% } %>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                <% } %>\n                            </div>\n                        <% } %>\n                        <% if (visaInfo.acceptanceScope) { %>\n                            <div class="detail-visa-info-item single-row">\n                                受理范围：<strong><%= visaInfo.acceptanceScope %></strong>\n                            </div>\n                        <% } %>\n                    </div>\n                </div>\n\n                <div class="J_VisaTab section-box-toolbar">\n                    <ul class="section-box-tab">\n                        <% for (var h = 0; h < visaInfo.customerPropertyNames.length; h++) { %>\n                            <li<% if (h === 0) { %> class="active"<% } %> data-rel=".J_DetailVisa<%= visaInfo.customerPropertyNames[h].code %>">\n                                <a href="javascript:;"><%= visaInfo.customerPropertyNames[h].name %></a>\n                            </li>\n                        <% } %>\n                    </ul>\n\n                    <div class="detail-visa-button">\n                        <a class="J_DetailVisaSend detail-visa-button-mail" data-id="<%= visaInfo.id %>" data-name="<%= visaInfo.name %>" href="javascript:;" mm="点击_详情区_签证信息_发送材料"><i class="icon"></i>发送到我的邮箱</a>\n                        <a class="J_DetailVisaPrint detail-visa-button-print" data-id="<%= visaInfo.id %>" data-name="<%= visaInfo.name %>" href="javascript:;" mm="点击_详情区_签证信息_打印材料"><i class="icon"></i>打印材料</a>\n                    </div>\n                </div>\n\n                <div class="section-box-content detail-visa-material">\n                    <% var visaMaterial = visa.visaMaterial %>\n                    <% for (var h = 0; h < visaInfo.customerPropertyNames.length; h++) { %>\n                        <% var personType = visaInfo.customerPropertyNames[h].code %>\n\n                        <div class="J_DetailVisa<%= personType %> detail-visa-block<%= h == 0 ? \' active\' : \'\' %>">\n                            <div class="detail-visa-material-head">\n                                <table>\n                                    <thead>\n                                        <tr>\n                                            <th class="col-1">所需材料</th>\n                                            <th class="col-2">材料类型</th>\n                                            <th class="col-3">描述</th>\n                                        </tr>\n                                    </thead>\n                                </table>\n                            </div>\n                            <div class="detail-visa-material-body">\n                                <table>\n                                    <tbody>\n                                    <% for (var materialIndex = 0; materialIndex < visaMaterial.length; materialIndex++) { %>\n                                        <% var material = visaMaterial[materialIndex] %>\n                                        <% if (material.personnenlType == personType) { %>\n                                            <tr>\n                                                <td class="col-1"><%= material.customName %></td>\n                                                <td class="col-2"><%= materialTypeMap[material.materialType] %></td>\n                                                <td class="col-3">\n                                                    <%=# material.materialDesc %>\n                                                    <% if (material.attachments && material.attachments.length) { %>\n                                                        <% for (var attachmentIndex = 0; attachmentIndex < material.attachments.length; attachmentIndex++) { %>\n                                                            <div class="detail-visa-material-attachment">\n                                                                <a href="<%= material.attachments[attachmentIndex].attachmentPath %>" mm="点击_详情区_签证信息_查看材料模板"><%= material.attachments[attachmentIndex].attachmentName %></a>\n                                                            </div>\n                                                        <% } %>\n                                                    <% } %>\n                                                </td>\n                                            </tr>\n                                        <% } %>\n                                    <% } %>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    <% } %>\n                </div>\n\n            </div>\n        <% } %>\n\n\n        <div class="section-box-title">\n            <h3>签证须知</h3>\n        </div>\n\n        <div class="section-box-content">\n            <div class="item-with-title">\n                <span class="dot">•</span>\n                <div class="item-title"><strong>注意事项：</strong></div>\n                <p>\n                    当您在线提交订单成功后，可在会员中心提交材料扫描件。<br>\n                    请确保护照有效期：本次旅游归国至少还有6个月以上有效期，且尚有签证所需空白签证页。\n                </p>\n            </div>\n            <% for (var i = 0; i < data.length; i++) { %>\n                <% var visa = data[i]; %>\n                <% var visaInfo = visa.visaInfo; %>\n                <% if (visaInfo.bookNotice) { %>\n                    <div class="item-with-title">\n                        <span class="dot">•</span>\n                        <div class="item-title"><strong><%= visaInfo.customName %>办理须知：</strong></div>\n                        <p><%=# (visaInfo.bookNotice || \'\').replace(/[\\n\\r]+/g, \'<br>\') %></p>\n                    </div>\n                <% } %>\n            <% } %>\n        </div>\n\n\n        <div class="section-box-title">\n            <h3>材料递交方式</h3>\n        </div>\n\n        <div class="section-box-content">\n\n            <div class="item-with-title">\n                <span class="dot">•</span>\n                <div class="item-title"><strong>快递材料至途牛门市，具体门市请在下单时选择</strong></div>\n            </div>\n            <div class="J_retailName retail-name item-with-title">\n                <span class="dot">•</span>\n                <div class="item-title"><strong>亲自到途牛门市当面递交材料</strong></div>\n                <p>为您推荐门市：\n                    <a href="javascript:;"><i class="icon detail-visa-retail-location"></i>&nbsp;<span class="J_retailTxt"></span></a>\n                    <a class="detail-visa-retail-view J_retailView" href="javascript:;" mm="点击_详情区_签证信息_查看送签门市">查看全部门市</a>\n                </p>\n            </div>\n        </div>\n\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailVisaDialogTemplate = '\n<div class="dialog dialog-visa">\n    <div class="J_VisaClose dialog-close"></div>\n    <% if (dialogType == \'send\') { %>\n        <div class="dialog-head">将材料发送到您的邮箱</div>\n    <% } else { %>\n        <div class="dialog-head">打印签证材料</div>\n    <% } %>\n    <div class="dialog-body">\n        <div class="dialog-row">请选择身份类型</div>\n        <div class="dialog-row">\n            <div class="J_VisaPersonType dialog-checkbox" data-id="2" data-name="在职人员"><i class="icon"></i>在职人员</div>\n            <div class="J_VisaPersonType dialog-checkbox" data-id="3" data-name="退休人员"><i class="icon"></i>退休人员</div>\n            <div class="J_VisaPersonType dialog-checkbox" data-id="4" data-name="自由职业者"><i class="icon"></i>自由职业者</div>\n            <div class="J_VisaPersonType dialog-checkbox" data-id="5" data-name="学龄前儿童"><i class="icon"></i>学龄前儿童</div>\n            <div class="J_VisaPersonType dialog-checkbox" data-id="6" data-name="在校学生"><i class="icon"></i>在校学生</div>\n            <div class="J_VisaPersonType dialog-checkbox" data-id="7" data-name="无业人员"><i class="icon"></i>无业人员</div>\n        </div>\n        <% if (dialogType === \'send\') { %>\n            <div class="dialog-row dialog-row-input">\n                <div class="dialog-input">\n                    <div class="dialog-label">请输入您常用的邮箱：</div>\n                    <div class="dialog-input-ctrl">\n                        <input class="J_VisaEmail" type="text" name="email">\n                    </div>\n                </div>\n            </div>\n        <% } %>\n        <div class="J_DialogError dialog-row dialog-error-tip">\n            <i class="icon"></i>&nbsp;<strong></strong>\n        </div>\n        <div class="dialog-row dialog-buttons">\n            <a class="J_VisaCancel dialog-button dialog-cancel" href="javascript:;">取消</a>\n            <% if (dialogType == \'send\') { %>\n                <a class="J_VisaSend dialog-button dialog-send" href="javascript:;">发送</a>\n            <% } else { %>\n                <a class="J_VisaSend dialog-button dialog-send" href="javascript:;">打印</a>\n            <% } %>\n        </div>\n        \n    </div>\n</div>\n'
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), o = n(22), r = n(18), s = n(88), l = n(89), c = 1, d = 4, u = 5, f = o.template.compile(l.detailGuideTemplate),
        p = $(window), h = function () {
            function e(t) {
                i(this, e), this.status = c, this.allGuideData = null, this.$el = t.$el
            }

            return a(e, [{
                key: "load", value: function (e) {
                    this.allGuideData = e, this.status = d
                }
            }, {
                key: "getGuideData", value: function (e) {
                    return (this.allGuideData.journeyGuides || []).filter(function (t) {
                        return t && t.journeyId == e && t.tourGuides && t.tourGuides.length
                    })[0]
                }
            }, {
                key: "render", value: function () {
                    var e = this.$el.data("id"), t = this.getGuideData(e);
                    t ? (this.$el.append(f({
                        data: t,
                        tip: this.allGuideData.tips,
                        guideEntranceUrl: this.allGuideData.guideEntranceUrl || ""
                    })).removeClass("section-loading").addClass("loaded-guide"), this.bind()) : this.remove(), p.trigger("resize")
                }
            }, {
                key: "bind", value: function () {
                    (0, s.createGallery)(this.$el.find(".J_GuideGallery")), this.$el.find(".J_guideTip").each(function () {
                        var e = $(this), t = void 0;
                        (t = e[0]) && (t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth) && new r.Tip(e, {
                            content: e.siblings(".J_guideTipContent").html(),
                            dialog: {tipsOffset: [10, -30], area: ["280px", "auto"]}
                        })
                    })
                }
            }, {
                key: "remove", value: function () {
                    this.$el.remove(), p.trigger("resize")
                }
            }, {
                key: "isLoaded", value: function () {
                    return this.status >= d
                }
            }, {
                key: "isRendered", value: function () {
                    return this.status >= u
                }
            }]), e
        }();
    t["default"] = h
}, function (e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        return e.find("[data-role=item]").toArray().map(function (e) {
            return e = $(e), {$element: e}
        })
    }

    function a(e) {
        e.forEach(function (e) {
            e.width = e.$element.outerWidth(!0), e.height = e.$element.outerHeight(!0)
        })
    }

    function o(e) {
        e = Object.assign({}, e);
        for (var t in e) e.hasOwnProperty(t) && (e[t] = -e[t]);
        return e
    }

    function r(e, t) {
        var n = new d(e, t);
        return l.push(n), n
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var s = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), l = [], c = $(window), d = function () {
        function e(t, i) {
            n(this, e), this.options = Object.assign({direction: "h"}, i), this.children = null, this.size = null, this.prevDisabled = !0, this.nextDisabled = !0, this.position = {
                left: 0,
                top: 0
            }, this.$container = t, this.$list = null, this.$prev = null, this.$next = null, this.init(), this.bind()
        }

        return s(e, [{
            key: "init", value: function () {
                this.options.direction;
                this.$list = this.$container.find("[data-role=list]"), this.$prev = this.$container.find("[data-role=prev]"), this.$next = this.$container.find("[data-role=next]"), this.children = i(this.$list), this.updateSize(), this.updateState(), this.updateView()
            }
        }, {
            key: "update", value: function () {
                this.updateSize(), this.move(0)
            }
        }, {
            key: "updateSize", value: function () {
                var e = this.options.direction, t = "h" === e ? "width" : "height";
                a(this.children), this.size = {
                    width: this.$container.width(),
                    height: this.$container.height()
                }, this.$list[t](this.children.reduce(function (e, n) {
                    return n[t] + e
                }, 0)), this.listSize = {
                    width: this.$list.width(),
                    height: this.$list.height()
                }, this.listSize[t] <= this.size[t] ? (this.$prev.hide(), this.$next.hide()) : (this.$prev.show(), this.$next.show())
            }
        }, {
            key: "updatePosition", value: function (e) {
                var t = this.options.direction, n = "h" === t ? "left" : "top", i = "h" === t ? "width" : "height",
                    a = 0, o = this.position[n];
                e > 0 && (o += this.size[i]), this.children.some(function (t, n) {
                    var i = a + t.width;
                    return 1 === e && o >= a && o < i ? (a = i, !0) : e === -1 && o > a && o <= i || (a = i, !1)
                }), e > 0 && (a -= this.size[i]), this.listSize[i] - a < this.size[i] && (a = this.listSize[i] - this.size[i]);
                var r = {};
                r[n] = a, this.position = Object.assign({left: 0, top: 0}, r)
            }
        }, {
            key: "updateState", value: function () {
                var e = this.options.direction, t = "h" === e ? "left" : "top", n = "h" === e ? "width" : "height",
                    i = this.position, a = this.size, o = this.listSize;
                i[t] <= 0 ? this.prevDisabled = !0 : this.prevDisabled = !1, i[t] + a[n] >= o[n] ? this.nextDisabled = !0 : this.nextDisabled = !1
            }
        }, {
            key: "updateView", value: function () {
                this.prevDisabled ? this.$prev.addClass("disabled") : this.$prev.removeClass("disabled"), this.nextDisabled ? this.$next.addClass("disabled") : this.$next.removeClass("disabled")
            }
        }, {
            key: "bind", value: function () {
                var e = this;
                this.$prev.click(function () {
                    e.prevDisabled || e.move(-1)
                }), this.$next.click(function () {
                    e.nextDisabled || e.move(1)
                })
            }
        }, {
            key: "move", value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                0 === e ? this.$list.css(o(this.position)) : (this.updatePosition(e), this.updateState(), this.updateView(), this.$list.stop(!0, !0).animate(o(this.position), 700))
            }
        }]), e
    }();
    c.on("resize", function () {
        l.forEach(function (e) {
            return e.update()
        })
    }), t.createGallery = r
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailGuideTemplate = '\n<div class="section-box detail-guide">\n    <div class="section-box-head">\n        <h2>线路导游</h2>\n    </div>\n    <div class="section-box-body">\n\n        <div class="J_GuideGallery guide-wrap">\n            <div class="guide-button guide-prev" data-role="prev" mm="点击_详情区_线路导游_切换查看导游"><i class="icon"></i></div>\n            <div class="guide-button guide-next" data-role="next" mm="点击_详情区_线路导游_切换查看导游"><i class="icon"></i></div>\n            <div class="guide-box">\n                <ul class="guide-list" data-role="list">\n                    <% for(var guideIndex = 0; guideIndex < data.tourGuides.length; guideIndex++) { %>\n                        <% var guide = data.tourGuides[guideIndex] %>\n                        <li class="guide-item" data-role="item">\n                            <div class="guide-inner">\n                                <% if (guide.level == 1) { %>\n                                    <div class="guide-medal"></div>\n                                <% } %>\n\n                                <div class="guide-photo">\n                                    <% if (guide.guidesHomeUrl) { %>\n                                        <a href="<%= guide.guidesHomeUrl %>" target="_blank">\n                                            <img src="<%= guide.guideImage %>" alt="<%= guide.guideName %>">\n                                        </a>\n                                    <% } else { %>\n                                        <img src="<%= guide.guideImage %>" alt="<%= guide.guideName %>">\n                                    <% } %>\n                                </div>\n\n                                <div class="guide-info">\n                                    <div class="guide-name">\n                                        <%= guide.guideName %>\n                                        <% if (guide.guideSex == 1) { %>\n                                            <i class="icon icon-gender-male"></i>\n                                        <% } else { %>\n                                            <i class="icon icon-gender-female"></i>\n                                        <% } %>\n                                    </div>\n\n                                    <div class="guide-profile">\n                                        <% if (guide.guideSatisfaction) { %>\n                                            <span>满意度 <strong><%= guide.guideSatisfaction %>%</strong></span>\n                                        <% } else { %>\n                                            <span>满意度 <em>暂无</em></span>\n                                        <% } %>\n                                        <span class="guide-sep"></span>\n                                        <span>带团年限 <strong><%= guide.workingTime %></strong></span>\n                                    </div>\n\n                                    <% if (guide.languages) { %>\n                                        <div class="guide-desc guide-language">\n                                            <div class="guide-label">擅长语言：</div>\n                                            <div class="guide-content" title="<%= guide.languages %>"><%= guide.languages %></div>\n                                        </div>\n                                    <% } %>\n\n                                    <% if (guide.departDate) { %>\n                                        <div class="guide-desc guide-depart-date">\n                                            <div class="guide-label">分配团期：</div>\n                                            <div class="J_guideTip guide-content"><%= guide.departDate %></div>\n                                            <script class="J_guideTipContent" type="text/template">\n                                                <div class="guide-detail guide-depart-date-detail">\n                                                    <%= guide.departDate %>\n                                                </div>\n                                            </script>\n                                        </div>\n                                    <% } %>\n\n                                    <% if (guide.honors) { %>\n                                        <div class="guide-desc guide-award">\n                                            <div class="guide-label">荣誉成就：</div>\n                                            <div class="J_guideTip guide-content"><%= guide.honors %></div>\n                                            <script class="J_guideTipContent" type="text/template">\n                                                <div class="guide-detail guide-award-detail">\n                                                    <%= guide.honors %>\n                                                </div>\n                                            </script>\n                                        </div>\n                                    <% } %>\n\n                                </div>\n\n                                <% if (guide.guidesHomeUrl) { %>\n                                    <a class="guide-home" href="<%= guide.guidesHomeUrl %>" target="_blank">查看详情</a>\n                                <% } %>\n\n                            </div>\n\n                        </li>\n                    <% } %>\n                </ul>\n            </div>\n        </div>\n\n        <% if (tip) { %>\n            <div class="section-box-content">\n                <div class="guide-tip"><%= tip %></div>\n                <% if(guideEntranceUrl) { %>\n                    <a class="guide-channel" href="<%= guideEntranceUrl%>" target="_blank">更多途牛导游 ></a>\n                <% } %>\n            </div>\n        <% } %>\n\n    </div>\n</div>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(22), s = n(18), l = n(91), c = n(19), d = (i(c), 2), u = 5, f = 6, p = $(window), h = function () {
        function e(t) {
            a(this, e), this.data = null, this.currentData = null, this.$el = t.$el, this.status = d
        }

        return o(e, [{
            key: "load", value: function (e) {
                this.data = e, this.status = u
            }
        }, {
            key: "render", value: function (e) {
                if (!(this.status < u)) {
                    var t = this, n = r.template.compile(l.detailUpgradeTemplate);
                    t.currentData = t.data[Number(e)] || null, t.currentData && t.$el ? (t.$el.append(n({
                        data: t.currentData,
                        journeyId: t.journeyId
                    })).removeClass("section-loading"), t.bind(), p.trigger("resize")) : t.remove(), this.status = f
                }
            }
        }, {
            key: "remove", value: function () {
                this.$el.remove(), p.trigger("resize")
            }
        }, {
            key: "bind", value: function () {
                var e = this;
                e.$el.find(".J_UpgradeItem").each(function () {
                    var e = $(this), t = e.parent(), n = e.siblings(".J_UpgradeDetail");
                    n.length && (n.remove().show(), new s.Tip(e, {
                        type: "click",
                        content: $("<div />").append(n[0]).html(),
                        dialog: {tipsOffset: [0, -20]},
                        width: function () {
                            return t.outerWidth()
                        }
                    }))
                })
            }
        }, {
            key: "isLoaded", value: function () {
                return this.status >= u
            }
        }, {
            key: "isRendered", value: function () {
                return this.status >= f
            }
        }]), e
    }();
    t["default"] = h
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailUpgradeTemplate = '\n<% var upgrades = data %>\n<div class="section-box detail-upgrade">\n    <div class="section-box-head">\n        <h2>产品升级</h2>\n    </div>\n    <div class="section-box-body">\n        <div class="detail-upgrade-title">下单时选择您需要的升级方案：</div>\n        <div class="section-box-content detail-upgrade-list">\n            <table>\n                <thead>\n                    <tr>\n                        <th class="detail-upgrade-col-1">方案</th>\n                        <th class="detail-upgrade-col-2">项目</th>\n                        <th class="detail-upgrade-col-3">说明</th>\n                        <th class="detail-upgrade-col-4">价格</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <% for (var upgradeIndex = 0; upgradeIndex < upgrades.length; upgradeIndex++) { %>\n                        <% var upgrade = upgrades[upgradeIndex] %>\n                        <tr<%= upgradeIndex % 2 == 1 ? \'class="even"\' : \'\'%>>\n                            <td>方案<%= upgradeIndex + 1 %></td>\n                            <td><%= upgrade.type %></td>\n                            <td><%= upgrade.remark %></td>\n                            <td>\n                                <div class="J_UpgradeItem detail-upgrade-price">\n                                    <% var first = upgrade.datePrices[0] %>\n                                    <span class="detail-upgrade-price-selected">&yen;<%= first.price %>/成人 <% if (first.excludeChildFlag != 1) { %>&yen;<%= first.childPrice %>/儿童<% } else { %>&nbsp;不支持儿童<% } %></span>\n                                    <i class="icon"></i>\n                                </div>\n                                    <div class="J_UpgradeDetail detail-upgrade-price-list">\n                                    <% for (var priceIndex = 0; priceIndex < upgrade.datePrices.length; priceIndex++) { %>\n                                        <% var price = upgrade.datePrices[priceIndex] %>\n                                        <div class="detail-upgrade-price-item"><span><%= price.departDate %></span> &yen;<%= price.price %>/成人<% if (price.excludeChildFlag != 1) { %>   &yen;<%= price.childPrice %>/儿童  <% } else { %>&nbsp;&nbsp;不支持儿童<% } %></div>\n                                    <% } %>\n                                </div>\n                            </td>\n                        </tr>\n                    <% } %>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a() {
        x.forEach(function (e) {
            h.off(e)
        }), o()
    }

    function o() {
        s(function (e) {
            l(e), d(e)
        })
    }

    function r() {
        x.forEach(function (e) {
            return e.remove()
        }), _.trigger("resize")
    }

    function s(e) {
        $.ajax({
            dataType: "json", url: b.qaUrl(), data: M, success: function (t) {
                t && t.success && t.data ? e(t.data) : r()
            }, error: function (e, t) {
                r()
            }
        })
    }

    function l(e) {
        T = f.template.compile(y.advisoryLayoutTemplate), x.forEach(function (t) {
            t.append(T({data: e})).removeClass("section-loading")
        }), c()
    }

    function c() {
        D = k.find(".J_qaContent"), C = k.find(".pagination");
        var e = k.find(".advisory-category-list"), t = k.find(".advisory-search-input"),
            n = k.find(".advisory-search-btn");
        e.on("click", "li", function () {
            var e = $(this);
            e.hasClass("active") || (e.addClass("active").siblings().removeClass("active"), M.page = 1, M.type = e.data("type"), M.search = "", t.val(""), s(d))
        }), n.click(function () {
            M.page = 1, M.search = t.val(), s(d)
        })
    }

    function d(e) {
        D.html(I({data: e})), e && e.askCount > 0 ? (C.show(), w ? (w.reload({
            current: M.page,
            total: Math.ceil(e.askCount / M.limit)
        }), w.render()) : w = (0, v.createPagination)(C, {
            current: M.page,
            total: Math.ceil(e.askCount / M.limit),
            onchange: function (e) {
                M.page = e, s(d), (0, m.record)("点击_详情区_在线问答_翻页查看提问")
            }
        })) : C.hide()
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.advisoryModule = void 0;
    var u = n(1), f = n(22), p = (n(15), n(56)), h = i(p), v = n(93), m = n(26), y = n(94), g = n(95), b = void 0,
        _ = $(window), x = void 0, j = void 0, w = void 0, C = void 0, D = void 0, k = $("#J_detailAdvisory"),
        T = f.template.compile(y.advisoryLayoutTemplate), I = f.template.compile(g.advisoryContentTemplate),
        M = {productId: null, page: 1, limit: 5, type: null, search: ""}, S = {
            init: function (e) {
                b = e, j = (0, u.getStore)(), M.productId = j.getState("productId"), x = k.toArray().map(function (e) {
                    return $(e)
                }), x.forEach(function (e) {
                    h.on(e, a)
                })
            }
        };
    t.advisoryModule = S
}, function (e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        var n = new d(e, t);
        return s.push(n), n
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.createPagination = void 0;
    var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(), r = n(22), s = [],
        l = '\n<div class="pagination-box">\n    <span class="pagination-item pagination-prev<%= current === 1 ? \' disabled\' : \'\' %>">&lt;</span>\n    <% for (var page = min; page <= max; page++) { %>\n        <span class="pagination-item pagination-page<%= current === page ? \' active\' : \'\' %>"\n            <% if (current !== page) { %>data-page="<%= page %>"<% } %>><%= page %></span>\n    <% } %>\n    <% if (more) { %>\n        <span class="pagination-item pagination-more">•••</span>\n    <% } %>\n    <% if (last) { %>\n        <span class="pagination-item pagination-page" data-page="<%= total %>"><%= total %></span>\n    <% } %>\n    <span class="pagination-item pagination-next<%= current === total ? \' disabled\' : \'\' %>">&gt;</span>\n</div>\n',
        c = r.template.compile(l), d = function () {
            function e(t, n) {
                i(this, e), this.current = n.current || 1, this.total = n.total || 1, this.offset = 2, this.$element = t, this.options = Object.assign({}, n), this.bind(), this.render()
            }

            return o(e, [{
                key: "bind", value: function () {
                    var e = this;
                    this.$element.on("click", ".pagination-prev", function () {
                        e.change(e.current - 1)
                    }).on("click", ".pagination-next", function () {
                        e.change(e.current + 1)
                    }).on("click", ".pagination-page", function () {
                        e.change($(this).data("page"))
                    })
                }
            }, {
                key: "change", value: function (e) {
                    e = parseInt(e), e && this.current !== e && e > 0 && e <= this.total && (this.current = e, this.render(), this.options.onchange && this.options.onchange(e))
                }
            }, {
                key: "params", value: function () {
                    var e = this.current, t = this.total, n = this.offset, i = Math.max(e - n, 1),
                        a = Math.min(t, i + 2 * n);
                    return i = Math.max(a - 2 * n, 1), {current: e, total: t, min: i, max: a, more: a < t, last: a !== t}
                }
            }, {
                key: "render", value: function () {
                    this.$element.html(c(this.params()))
                }
            }, {
                key: "reload", value: function (e) {
                    this.current = e.current || this.current, this.total = e.total || this.total, this.offset = e.offset || this.offset, this.options = Object.assign({}, this.options, e)
                }
            }]), e
        }();
    t.createPagination = a
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.advisoryLayoutTemplate = '\n<div class="section-box advisory">\n    <div class="section-box-head">\n        <h2>在线问答</h2>\n    </div>\n    <div class="section-box-body">\n        <div class="advisory-head">\n            <div class="advisory-category">\n                <span>问题分类：</span>\n                <ul class="advisory-category-list">\n                    <li class="advisory-category-item active"><a href="javascript:;">全部</a></li>\n                    <% if(data && data.questionNameArray) {\n                        for (var i = 0; i < data.questionNameArray.length; i++) { %>\n                            <li class="advisory-category-item" data-type="<%= data.questionNameArray[i].id %>"><a href="javascript:;"><%= data.questionNameArray[i].question_name %></a></li>\n                    <% } } %>\n                </ul>\n            </div>\n\n            <div class="advisory-search">\n                <input class="advisory-search-input" type="text" name="advisory-search-input" placeholder="请输入问题">\n                <a class="advisory-search-btn" href="javascript:;">搜索</a>\n                <a class="advisory-search-detail" href="http://www.tuniu.com/u/ask" rel="nofollow" target="_blank">查看我的提问 <i>&gt;</i></a>\n            </div>\n        </div>\n\n        <div class="advisory-content J_qaContent">\n        </div>\n\n        <div class="pagination">\n        </div>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.advisoryContentTemplate = '\n<% if (data.routeAsk && data.routeAsk.length) { %>\n<ul>\n    <% for (var j = 0; j < data.routeAsk.length; j++) {\n        var qaItem = data.routeAsk[j]; %>\n    <li>\n        <div class="advisory-content-item">\n            <span class="advisory-content-title"><i class="advisory-content-icon-ask"></i>咨询问题：</span>\n            <p>\n                <%= qaItem.content %>\n            </p>\n            <span class="advisory-content-time"><%= qaItem.adddate %></span>\n        </div>\n        <div class="advisory-content-item">\n            <span class="advisory-content-title"><i class="advisory-content-icon-answer"></i>途牛客服：</span>\n            <p>\n                <%= qaItem.answer %>\n            </p>\n            <span class="advisory-content-time"><%= qaItem.last_reply_time %></span>\n        </div>\n    </li>\n    <% } %>\n</ul>\n<% } else { %>\n<div class="J_noQuestion">暂无该产品问答！对本产品有任何疑问，请在此进行提问。我们的工作人员将尽快回复您。</div>\n<% } %>\n'
}, function (e, t, n) {
    "use strict";

    function i(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function a() {
        g.off(w), g.off(D), o()
    }

    function o() {
        $.ajax({
            dataType: "json",
            url: x.relatedUrl(),
            data: {
                productId: T.getState("productId"),
                productType: T.getState("productType"),
                bookCode: T.getState("bookCityCode"),
                poiId: I
            },
            success: function (e) {
                e && e.success && e.data ? (S = e.data.recommend || [], S.forEach(function (e, t) {
                    e.showIndex = t + 1
                }), u(e.data)) : d()
            },
            error: function (e, t) {
                d()
            }
        })
    }

    function r() {
        S.length <= 8 ? c(k, S) : (c(k, l(O, 8)), O = (O + 8) % S.length)
    }

    function s() {
        S.length <= 4 ? c(C, S) : (c(C, l(E, 4)), E = (E + 4) % S.length)
    }

    function l(e, t) {
        for (var n = S.length, i = [], a = e; a < e + t; a++) i.push(S[a % n]);
        return i
    }

    function c(e, t) {
        e.html(A({data: t}))
    }

    function d() {
        w.remove(), D.remove(), j.trigger("resize")
    }

    function u(e) {
        var t = h.template.compile(b.detailRelativeTemplate);
        w.append(t({
            status: T.getState("status"),
            data: e,
            destination: M,
            poiId: I,
            year: (new Date).getFullYear(),
            host: x.mainHost
        })).removeClass("section-loading"), k = D.find(".J_productList"), C = w.find(".J_productList"), e.recommend && e.recommend.length ? (r(), s(), D.removeClass("section-loading")) : D.remove(), j.trigger("resize"), f()
    }

    function f() {
        (0, v.createTaber)($("#J_localTab"), {
            ctx: $(".J_localContent"), onactive: function (e) {
                var t = $(".J_proTypeName"), n = $(".J_proTypeLink");
                t.text(e.$tab.text()), n.attr("href", n.attr("href").replace(/\/\w+-0-0\/$/, "/" + e.$tab.data("type") + "-0-0/"))
            }
        }), w.find(".J_relativeGallery").each(function () {
            (0, m.createGallery)($(this))
        }), S.length > 4 && w.find(".J_productMore").show().click(s), S.length > 8 && D.find(".J_productMore").show().click(r)
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.relativeModule = void 0;
    var p = n(1), h = n(22), v = n(58), m = n(88), y = n(56), g = i(y), b = n(97), _ = n(98), x = void 0, j = $(window),
        w = void 0, C = void 0, D = void 0, k = void 0, T = void 0, I = void 0, M = void 0, S = void 0, O = 0, E = 0,
        A = h.template.compile(_.detailProductTemplate), P = {
            init: function (e) {
                x = e, T = (0, p.getStore)(), w = $("#J_detailRelative"), D = $("#J_detailRecommend"), I = T.getState("poiId"), M = T.getState("destination"), g.on(w, a), g.on(D, a)
            }
        };
    t.relativeModule = P
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailRelativeTemplate = '\n<div class="section-box relative">\n    <div class="section-box-head">\n        <h2>相关产品</h2>\n    </div>\n    <div class="section-box-body">\n        <% if (status == 0 && data.recommend && data.recommend.length) { %>\n            <div class="section-box-title">\n                <h3>为您推荐其他相似线路</h3>\n                <a class="J_productMore relative-pro-refresh" href="javascript:;" mm="点击_相关产品_相似产品_换一换">换一换 <i></i></a>\n            </div>\n            <div class="J_productList section-box-content relative-pro-list"></div>\n        <% } %>\n        <% if (data.favorite && data.favorite.length) { %>\n            <div class="section-box-title">\n                <h3>猜你喜欢</h3>\n            </div>\n            <div class="section-box-content">\n                <div class="J_relativeGallery detail-relative-wrap">\n                    <div class="detail-relative-btn detail-relative-prev" data-role="prev" mm="点击_详情区_相关产品_切换猜你喜欢产品"><i class="icon"></i></div>\n                    <div class="detail-relative-btn detail-relative-next" data-role="next" mm="点击_详情区_相关产品_切换猜你喜欢产品"><i class="icon"></i></div>\n                    <div class="detail-relative-box">\n                        <ul class="relative-pro-list gallery-list" data-role="list">\n                            <% for (var j = 0, jLen = data.favorite.length; j < jLen; j++) {\n                                var favoriteItem = data.favorite[j]; %>\n                            <li data-role="item">\n                                <a href="/tour/<%= favoriteItem.productId %>" target="_blank" mm="点击_详情区_相关产品_查看猜你喜欢产品">\n                                    <div class="relative-pro-pic">\n                                        <img src="<%= favoriteItem.picUrl %>" alt="<%= favoriteItem.productName %>" />\n                                        <div class="relative-pro-des">\n                                            <p>\n                                                <%= favoriteItem.productName %>\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class="relative-pro-info">\n                                        <div class="relative-pro-price">\n                                            <span>￥<b><%= favoriteItem.price %></b></span>起\n                                        </div>\n                                        <div class="relative-pro-satis">\n                                            满意度：<%= favoriteItem.satisfaction %>%\n                                        </div>\n                                    </div>\n                                </a>\n                            </li>\n                            <% } %>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        <% } %>\n        <% if ((data.localPlay && data.localPlay.length) || (data.ticket && data.ticket.length)) { %>\n            <div class="section-box-title">\n                <h3><%= destination %>&nbsp;<b class="J_proTypeName">当地玩乐</b></h3>\n                <div class="relative-play" id="J_localTab">\n                    <% if (data.localPlay && data.localPlay.length) { %>\n                    <span class="active" data-rel=".J_localPlay" data-type="local" mm="点击_详情区_相关产品_选择当地玩乐">当地玩乐</span>\n                    <% } %>\n                    <% if (data.ticket && data.ticket.length) { %>\n                    <span data-rel=".J_ticket" data-type="ticket" mm="点击_详情区_相关产品_选择门票">门票</span>\n                    <% } %>\n                </div>\n                <a class="relative-pro-more J_proTypeLink" href="<%= host %>/g<%= poiId %>/local-0-0/" target="_blank" mm="点击_详情区_相关产品_查看更多当地玩乐">查看更多 <i>&gt;</i></a>\n            </div>\n            <div class="section-box-content J_localContent">\n                <% if (data.localPlay && data.localPlay.length) { %>\n                <ul class="relative-pro-list J_localPlay">\n                    <% for (var k = 0, kLen = data.localPlay.length; k < kLen; k++) {\n                        var localItem = data.localPlay[k]; %>\n                    <li>\n                        <a href="<%= host %>/tours/<%= localItem.productId %>" target="_blank" mm="点击_详情区_相关产品_当地玩乐_查看当地玩乐">\n                            <div class="relative-pro-pic">\n                                <img src="<%= localItem.picUrl %>" alt="<%= localItem.productName %>" />\n                                <% if(localItem.productName) { %>\n                                <div class="relative-pro-des">\n                                    <p>\n                                        <%= localItem.productName %>\n                                    </p>\n                                </div>\n                                <% } %>\n                            </div>\n                            <div class="relative-pro-info">\n                                <div class="relative-pro-price">\n                                    <span>￥<b><%= +localItem.price %></b></span>起\n                                </div>\n                                <div class="relative-pro-satis">\n                                    满意度：<%= (+localItem.satisfaction) * 100 %>%\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <% } %>\n                </ul>\n                <% } %>\n                <% if (data.ticket && data.ticket.length) { %>\n                <ul class="relative-pro-list J_ticket">\n                    <% for (var l = 0, lLen = data.ticket.length; l < lLen; l++) {\n                        var ticketItem = data.ticket[l]; %>\n                    <li>\n                        <a href="http://menpiao.tuniu.com/t_<%= ticketItem.productId %>" target="_blank" mm="点击_详情区_相关产品_当地玩乐_查看门票产品">\n                            <div class="relative-pro-pic">\n                                <img src="<%= ticketItem.picUrl %>" alt="<%= ticketItem.productName %>" />\n                                <% if(ticketItem.productName) { %>\n                                <div class="relative-pro-des">\n                                    <p>\n                                        <%= ticketItem.productName %>\n                                    </p>\n                                </div>\n                                <% } %>\n                            </div>\n                            <div class="relative-pro-info">\n                                <div class="relative-pro-price">\n                                    <span>￥<b><%= +ticketItem.price %></b></span>起\n                                </div>\n                                <div class="relative-pro-satis">\n                                    满意度：<%= (+ticketItem.satisfaction) * 100 %>%\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <% } %>\n                </ul>\n                <% } %>\n            </div>\n        <% } %>\n        <% if (data.strategy && data.strategy.url && data.strategy.url != "") { %>\n            <div class="section-box-title">\n                <h3><%= destination %>&nbsp;攻略&amp;游记</h3>\n            </div>\n            <div class="section-box-content">\n                <div class="relative-strategy">\n                    <div class="relative-strategy-pic" >\n                        <a href="<%= host %><%= data.strategy.url %>" target="_blank" mm="点击_详情区_相关产品_攻略&游记_查看攻略">\n                            <img src="<%= data.strategy.img %>" alt="旅游攻略" />\n                            <div class="relative-strategy-pic-name"><p><%= destination %></p><span></span></div>\n                        </a>\n                    </div>\n                    <div class="relative-strategy-info">\n                        <span class="relative-strategy-info-title"><%= year %>旅游攻略</span>\n                        <span class="relative-strategy-info-des" title="<%= destination %>"><%= destination %></span>\n                        <a class="relative-strategy-info-download" href="<%= host %><%= data.strategy.url %>" target="_blank" mm="点击_详情区_相关产品_攻略&游记_查看攻略">查看详情</a>\n                    </div>\n                </div>\n                <% if (data.strategy.travelNote && data.strategy.travelNote.length) { %>\n                <ul class="relative-travels-list">\n                    <% for (var m = 0, mLen = data.strategy.travelNote.length; m < mLen; m++) {\n                        var noteItem = data.strategy.travelNote[m]; %>\n                    <li>\n                        <a href="<%= host %>/trips/<%= noteItem.tripsId %>" target="_blank" mm="点击_详情区_相关产品_攻略&游记_查看游记">\n                            <div class="relative-travels-pic">\n                                <img src="<%= noteItem.tripsImageUrl %>" alt="<%= noteItem.tripsTitle %>" />\n                                <div class="relative-travels-des">\n                                    <p>\n                                        <%= noteItem.tripsTitle %>\n                                    </p>\n                                </div>\n                            </div>\n                        </a>\n                    </li>\n                    <% } %>\n                </ul>\n                <% } %>\n            </div>\n        <% } %>\n        <% if (data.history && data.history.length) { %>\n            <div class="section-box-title">\n                <h3>我的浏览记录</h3>\n            </div>\n            <div class="section-box-content">\n                <div class="J_relativeGallery detail-relative-wrap">\n                    <div class="detail-relative-btn detail-relative-prev" data-role="prev" mm="点击_详情区_相关产品_浏览记录_切换已浏览产品"><i class="icon"></i></div>\n                    <div class="detail-relative-btn detail-relative-next" data-role="next" mm="点击_详情区_相关产品_浏览记录_切换已浏览产品"><i class="icon"></i></div>\n                    <div class="detail-relative-box">\n                        <ul class="relative-pro-list gallery-list" data-role="list">\n                        <% for (var n = 0, nLen = data.history.length; n < nLen; n++) {\n                            var historyItem = data.history[n]; %>\n                            <li data-role="item">\n                                <a href="/tour/<%= historyItem.productId %>" target="_blank" mm="点击_详情区_相关产品_浏览记录_查看已浏览产品">\n                                    <div class="relative-pro-pic">\n                                        <img src="<%= historyItem.picUrl %>" alt="<%= historyItem.productName %>" />\n                                        <div class="relative-pro-des">\n                                            <p>\n                                                <%= historyItem.productName %>\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class="relative-pro-info">\n                                        <div class="relative-pro-price">\n                                            <span>￥<b><%= historyItem.price %></b></span>起\n                                        </div>\n                                        <div class="relative-pro-satis">\n                                            满意度：<%= historyItem.satisfaction %>%\n                                        </div>\n                                    </div>\n                                </a>\n                            </li>\n                            <% } %>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        <% } %>\n    </div>\n</div>\n'
}, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.detailProductTemplate = '\n<ul class="product-list">\n    <% for (var index = 0; index < data.length; index++) { %>\n        <% var product = data[index] %>\n        <li class="product-item">\n            <a class="product-link" href="/tour/<%= product.productId %>" target="_blank" m="点击_相关产品_相似产品_<%= product.showIndex %>_<%= product.productId %>">\n                <div class="product-picture">\n                    <img src="<%= product.picUrl %>" alt="<%= product.productName %>" />\n                    <div class="product-name">\n                        <p><%= product.productName %></p>\n                    </div>\n                </div>\n                <div class="product-info">\n                    <div class="product-price">\n                        <span>￥<b><%= product.price %></b></span> 起\n                    </div>\n                    <div class="product-satisfication">\n                        满意度：<%= product.satisfaction || 100 %>%\n                    </div>\n                </div>\n            </a>\n        </li>\n    <% }%>\n</ul>\n'
}]);