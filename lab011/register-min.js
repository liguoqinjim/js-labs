var nameVerify = !1
    , passwordVerify = !1
    , passwordVerifyAG = !1
    , picCodeVerify = !1
    , phoneCodeVerify = !1
    , callback = ""
    , current = 0
    , Interval = 0
    , url = window.location.href.split("#")[0].toLocaleLowerCase()
    , REG_VALID = {
    vphone: /(^1[\d]{10}$)|(^00(((852|853)[\d]{8})|((88609)[\d]{8}))$)/,
    vemail: /^[0-9a-zA-Z_][_0-9a-zA-Z-\.]*@([0-9a-zA-Z][0-9a-zA-Z-]*\.){1,4}([a-zA-Z]{2,4})$/,
    phoneCode: /^[0-9a-zA-Z]{6}$/,
    CHINESE: /^1\d{10}$/,
    HONGKONG: /^0{0,1}[1,5,6,9](?:\d{7}|\d{8}|\d{12})$/,
    MACAU: /^6\d{7}$/,
    TAIWAN: /^0{0,1}[6,7,9](?:\d{7}|\d{8}|\d{10})$/,
    SOUTHKOREA: /^0{0,1}[7,1](?:\d{8}|\d{9})$/,
    JAPAN: /^0{0,1}[7,8,9](?:\d{8}|\d{9})$/,
    US: /^\d{10,12}$/,
    BRITISH: /^[347-9](\d{8,9}|\d{11,12})$/,
    AUSTRALIA: /^4\d{8,9}$/,
    SINGAPORE: /^[13689]\d{6,7}$/,
    MALAYSIA: /^1\d{8,9}$/,
    THAILAND: /^[13456789]\d{7,8}$/,
    VIETNAM: /^[1-9]\d{6,9}$/,
    PHILIPPINES: /^[24579](\d{7,9}|\d{12})$/,
    INDONESIA: /^[2-9]\d{7,11}$/,
    GERMANY: /^1(\d{5,6}|\d{9,12})$/,
    ITALY: /^[37]\d{8,11}$/,
    FRENCH: /^(\d{6}|\d{8,9})$/,
    RUSSIA: /^[13489]\d{9,11}$/,
    ZEALAND: /^[278]\d{7,9}$/,
    NETHERLANDS: /^6\d{8}$/,
    SWEDISH: /^[124-7](\d{8}|\d{10}|\d{12})$/,
    UKRAINE: /^[3-79]\d{8,9}$/
};
$(document).ready(function () {
    $("#MsgLogin").click(function () {
        $("#account_input").removeClass("account_inner").addClass("account_inner w_378");
        $("#account_input").attr("style", "position:relative; z-index:1");
        $("#login_email").attr("style", "width:130px; position: absolute; top:10px; left:210px;");
        $("#login_email").attr("placeholder", "\u8bf7\u8f93\u5165\u624b\u673a\u53f7");
        $("#box").show();
        window.clearInterval(Interval)
    });
    $("#AccountLogin").click(function () {
        $("#account_input").removeClass("account_inner w_378").addClass("account_inner");
        $("#account_input").attr("style", "");
        $("#login_email").attr("style", "width:312px;");
        $("#login_email").attr("placeholder", "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801");
        $("#box").hide();
        window.clearInterval(Interval)
    });
    $("#QRCodebtn").click(function () {
        Interval = window.setInterval("QRCode()", 1E3)
    });
    $("#user_Email").focus(function () {
        $(this).parent().parent().find(".reg_tips").html("\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7\uff0c\u5c06\u7528\u6765\u767b\u5f55\u3001\u627e\u56de\u5bc6\u7801\u3001\u5b89\u5168\u4e2d\u5fc3\u7ed1\u5b9a\u7b49").show();
        $(this).parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7\uff0c\u5c06\u7528\u6765\u767b\u5f55\u3001\u627e\u56de\u5bc6\u7801\u3001\u5b89\u5168\u4e2d\u5fc3\u7ed1\u5b9a\u7b49").show();
        $(this).parent().removeClass("error").addClass("now");
        $(this).parent().find("strong").hide()
    });
    $("#user_Email").blur(function () {
        CheckUserEmail()
    });
    $("#txt_pass").focus(function () {
        $(this).val();
        $(this).hide();
        $("#pass_tips").show();
        var a = $("#user_PassWord").length;
        $(this).parent().addClass("now");
        $(this).parent().removeClass("error").addClass("now");
        $(this).parent().find("strong").hide();
        0 == a ? $(this).after('\x3cinput type\x3d"password" id\x3d"user_PassWord" name\x3d"user_PassWord" class\x3d"text" maxlength\x3d"16" style\x3d"width:312px;" /\x3e') : $("#user_PassWord").show();
        $("#user_PassWord").focus()
    });
    $("#user_PassWord").live("focus", function () {
        $("#pass_tips").show();
        $(this).parent().parent().find(".reg_tips").html("\u5bc6\u7801\u4e3a6-16\u4e2a\u5b57\u7b26\uff0c\u53ef\u7531\u82f1\u6587\u3001\u6570\u5b57\u53ca\u7b26\u53f7\u7ec4\u6210\uff0c\u533a\u5206\u5927\u5c0f\u5199");
        $(this).parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u5bc6\u7801\u4e3a6-16\u4e2a\u5b57\u7b26\uff0c\u53ef\u7531\u82f1\u6587\u3001\u6570\u5b57\u53ca\u7b26\u53f7\u7ec4\u6210\uff0c\u533a\u5206\u5927\u5c0f\u5199");
        $(this).parent().addClass("now");
        $(this).parent().find("strong").hide()
    });
    $("#user_PassWord").live("blur", function () {
        CheckPassword();
        CheckPasswordAG()
    });
    $("#user_PassWord").live("keyup", function () {
        var a = $(this).val();
        5 < a.length ? (0 <= url.indexOf("newframe.aspx") ? $(".layer_strong").show() : $(".reg_strong").show(),
            checkPasswordStrong(a)) : 0 <= url.indexOf("newframe.aspx") ? $(".layer_strong").hide() : $(".reg_strong").hide()
    });
    $("#txt_pass2").focus(function () {
        $(this).val();
        $(this).hide();
        $("#pass_tips_ag").show();
        $(this).parent().removeClass("error").addClass("now");
        0 == $("#user_PassWord2").length ? $(this).after('\x3cinput type\x3d"password" id\x3d"user_PassWord2" name\x3d"user_PassWord2" class\x3d"text" maxlength\x3d"16" style\x3d"width:312px;" /\x3e') : $("#user_PassWord2").show();
        $("#user_PassWord2").focus()
    });
    $("#user_PassWord2").live("focus", function () {
        $("#pass_tips_ag").show();
        $(this).parent().parent().find(".reg_tips").html("\u8bf7\u518d\u6b21\u8f93\u5165\u767b\u5f55\u5bc6\u7801");
        $(this).parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u8bf7\u518d\u6b21\u8f93\u5165\u767b\u5f55\u5bc6\u7801");
        $(this).parent().addClass("now");
        $(this).parent().find("strong").hide()
    });
    $("#user_PassWord2").live("blur", function () {
        CheckPasswordAG()
    });
    $("#mobile_verifyCode").focus(function () {
        $(this).parent().parent().find(".reg_tips").html("\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801");
        $(this).parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801");
        $("#phoneVerify").show();
        $(this).parent().removeClass("error").addClass("now");
        $(this).parent().find(".reg_icon").show()
    });
    $("#mobile_verifyCode").blur(function () {
        var a = $("#mobile_verifyCode").val();
        $(this).parent().removeClass("now");
        "\u77ed\u4fe1\u9a8c\u8bc1\u7801" == a ? ($("#phoneVerify").hide(),
            $("#phoneVerify").html(""),
            $("#mobile_verifyCode").removeClass("cor1")) : (6 != a.length && ($("#phoneVerify").show(),
            $(this).parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\x3c/span\x3e'),
            $(this).parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef")),
        6 == a.length && ($("#phoneVerify").hide(),
            $("#phoneVerify").html(""),
            $(this).parent().removeClass("now")))
    });
    $("#get_verifyCode").click(function () {
        var a = $("#user_Email").val()
            , b = getNp();
        CheckPasswordAG();
        passwordVerifyAG && (checkIsNumber(a) && mobileValByNation(b, a) ? 2 == verify_mode ? "" == $("#sig").val() ? ($("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u5148\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1\x3c/span\x3e').show(),
            $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u5148\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1")) : SendCode(b, a) : SendCode(b, a) : ($("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\x3c/span\x3e'),
            $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef")))
    });
    $("#rcode").focus(function () {
        $("#pic_code_tips").show();
        $(this).parent().parent().find(".reg_tips").html("\u8bf7\u8f93\u5165\u56fe\u7247\u4e2d\u7684\u5b57\u7b26,\u4e0d\u533a\u5206\u5927\u5c0f\u5199");
        $(this).parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u8bf7\u8f93\u5165\u56fe\u7247\u4e2d\u7684\u5b57\u7b26,\u4e0d\u533a\u5206\u5927\u5c0f\u5199");
        $(this).parent().removeClass("error").addClass("now");
        $(this).parent().find("strong").hide()
    });
    $("#rcode").blur(function () {
        CheckCode()
    });
    $("#login_pwd_txt").focus(function () {
        console.log("liguoqnjim login_pwd_txt focus");
        $(this).hide();
        0 == $("#login_pwd").length ? $(this).after('\x3cinput type\x3d"password" id\x3d"login_pwd" name\x3d"login_pwd" class\x3d"text" style\x3d"width:312px;" /\x3e') : $("#login_pwd").show();
        $("#login_pwd").focus()
    });
    $("#flogin_pwd_txt").focus(function () {
        $(this).hide();
        0 == $("#login_pwd").length ? $(this).after('\x3cinput type\x3d"password" id\x3d"login_pwd" name\x3d"login_pwd" class\x3d"text" style\x3d"width:312px;"/\x3e') : $("#login_pwd").show();
        $("#login_pwd").focus()
    });
    $("#login_email").focus(function () {
        $(this).parent().addClass("now");
        $("#pwdmsg1").html("")
    });
    $("#login_email").blur(function () {
        var a = $(this).val();
        checkIsNumber(a) && ($("#account_input").removeClass("account_inner").addClass("account_inner w_378 m_phone"),
            $("#account_input").attr("style", "position:relative; z-index:1"),
            $(this).attr("style", "width:130px; position: absolute; top:10px; left:210px;"),
            $("#box").show());
        checkEmail(a) && ($("#account_input").removeClass("account_inner w_378 m_phone").addClass("account_inner"),
            $("#account_input").attr("style", ""),
            $(this).attr("style", "width:312px;"),
            $("#box").hide());
        $(this).parent().removeClass("now");
        "" == a || "\u90ae\u7bb1/\u624b\u673a\u53f7" == a ? ($(this).parent().find("strong").hide(),
            $(this).removeClass("cor1"),
            $("#pwdmsg").html(""),
            $("#reg_namemsg").html(""),
            $("#flogin_tips").html(""),
            $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"),
            $("#reg_namemsg").hide()) : ($(this).parent().find("strong").hide(),
            $("#reg_namemsg").hide(),
            $("#reg_namemsg").html(""),
            $("#pwdmsg").html(""),
            $("#flogin_tips").html(""),
            $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"));
        $("#flogin_tips").removeClass("layer_tips2").removeClass("layer_tips")
    });
    $("#login_pwd").live("focus", function () {
        $(this).parent().addClass("now")
    });
    $("#login_pwd").live("blur", function () {
        if (1001 != $("#type").val()) {
            var a = $(this).val();
            $(this).parent().removeClass("now");
            0 == a.length ? ($(this).hide(),
                $("#login_pwd_txt").show(),
                $("#flogin_pwd_txt").show(),
                $("#login_pwd_txt").removeClass("cor1"),
                $("#flogin_pwd_txt").removeClass("cor1"),
                $(this).parent().find("strong").hide(),
                $("#pwdmsg").html(""),
                $("#reg_pwdmsg").html(""),
                $("#flogin_tips").html(""),
                $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"),
                $("#flogin_tips").removeClass("layer_tips2").removeClass("layer_tips"),
                $("#reg_pwdmsg").hide()) : ($(".account_hint").html(""),
                $(this).parent().find("strong").hide(),
                $(this).addClass("cor1"),
                $("#reg_pwdmsg").html(""),
                $("#flogin_tips").html(""),
                $("#reg_pwdmsg").hide(),
                $("#pwdmsg").html(""),
                $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"),
                $("#flogin_tips").removeClass("layer_tips2").removeClass("layer_tips"))
        }
    });
    $("#code").focus(function () {
    });
    $("#code").blur(function () {
        var a = $(this).val();
        $("#pwdmsg").removeClass("account_hint2");
        $(this).parent().find(".account_icon").removeClass("account_icon2");
        $(this).parent().find(".layer_icon").removeClass("layer_ico2");
        $(this).parent().removeClass("now");
        if (0 == a.length || "\u9a8c\u8bc1\u7801" == a)
            $("#pwdmsg").html(""),
                $("#flogin_tips").html(""),
                $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"),
                $("#flogin_tips").removeClass("layer_tips2").removeClass("layer_tips"),
                $("#flogin_tips").html(""),
                $("#pwdmsg").html(""),
                $(this).removeClass("cor1"),
                $(this).parent().find("strong").hide();
        4 == a.length && (CheckCodeLogin(a) ? ($(this).addClass("cor1"),
            $(this).parent().find(".account_icon").removeAttr("style").attr("style", "display:block;"),
            $(this).parent().find(".layer_icon").removeClass("layer_icon2").removeAttr("style").attr("style", "display:block;"),
            $("#pwdmsg").html(""),
            $("#reg_namemsg").html(""),
            $("#flogin_tips").html(""),
            $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"),
            $("#flogin_tips").removeClass("layer_tips2").removeClass("layer_tips")) : ($("#flogin_tips").show(),
            $(this).parent().find(".account_icon").addClass("account_icon2"),
            $(this).parent().find(".account_icon").removeAttr("style").attr("style", "display:block;"),
            $(this).parent().find(".layer_icon").addClass("layer_icon2"),
            $(this).parent().find(".layer_icon").removeAttr("style").attr("style", "display:block;"),
            $("#pwdmsg").removeClass("account_hint2").removeClass("account_hint"),
            $("#flogin_tips").removeClass("layer_tips").removeClass("layer_tips2").html(""),
            $("#pwdmsg").html("")))
    });
    $("#reg_code").focus(function () {
        $("#reg_codemsg").show();
        $(this).parent().addClass("now");
        $("#reg_codemsg").html("\u8bf7\u8f93\u5165\u56fe\u7247\u4e2d\u7684\u5b57\u7b26\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199");
        $("#reg_login_code_tips").removeClass("reg_icon").removeClass("reg_icon2");
        $("#reg_login_code_tips").attr("style", "display:none;")
    });
    $("#reg_code").blur(function () {
        $(this).parent().removeClass("now");
        var a = $.trim($("#reg_code").val());
        0 == a.length || "\u9a8c\u8bc1\u7801" == a ? $(this).removeClass("cor1") : 4 > a.length ? ($("#reg_codemsg").show(),
            $("#reg_codemsg").html("\u8bf7\u8f93\u5165\u56fe\u7247\u4e2d\u7684\u5b57\u7b26\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199")) : CheckCodeLogin(a)
    });
    $("#msgBtn").click(function () {
        var a = getNp()
            , b = $("#login_email").val()
            , c = $("#mCode").val()
            , d = $("#vcode").val();
        if (checkEmail(b))
            $("#pwdmsg1").html("\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7");
        else if ("" == b || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == b)
            $("#pwdmsg1").html("\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7");
        else if (mobileValByNation(a, b))
            if ("" == c || "\u52a8\u6001\u5bc6\u7801" == c)
                $("#pwdmsg1").html("\u8bf7\u8f93\u5165\u52a8\u6001\u5bc6\u7801");
            else {
                $("#msgBtn").val("\u6b63\u5728\u767b\u5f55...");
                $("#msgBtn").attr("disabled", !0);
                var e = 0
                    , e = "1" == tongdun_open ? timestamp : 0;
                $.post("/MobileMsgLogin.aspx", {
                    mobile: b,
                    nationPrefix: a,
                    mCode: c,
                    vCode: "" != d || "undefined" != d ? d : "",
                    token: e
                }, function (a) {
                    if (3 == a.length) {
                        $("#vcode").val("");
                        document.getElementById("mImg").src = "/VerifyShow.aspx?d\x3d" + (new Date).toLocaleString();
                        $("#msgBtn").val("\u7acb\u5373\u767b\u5f55");
                        $("#msgBtn").attr("disabled", !1);
                        if (101 == a) {
                            $("#pwdmsg1").html("\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef");
                            return
                        }
                        if (104 == a) {
                            $("#pwdmsg1").html("\u52a8\u6001\u9a8c\u8bc1\u7801\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6");
                            $("#sig1").val("");
                            $("#csessionid1").val("");
                            $("#alitoken1").val("");
                            $("#scene1").val("");
                            nc1.reload();
                            return
                        }
                        if (105 == a) {
                            $("#pwdmsg1").html("\u52a8\u6001\u5bc6\u7801\u9519\u8bef");
                            $("#sig1").val("");
                            $("#csessionid1").val("");
                            $("#alitoken1").val("");
                            $("#scene1").val("");
                            nc1.reload();
                            return
                        }
                        if (106 == a) {
                            $("#pwdmsg1").html("\u8d26\u6237\u5df2\u6ce8\u9500\uff0c\u8bf7\u66f4\u6362\u5176\u4ed6\u624b\u673a\u53f7\u6ce8\u518c\u6216\u8054\u7cfb\u5ba2\u670d");
                            return
                        }
                        if (303 == a) {
                            $("#layer_img_code").show();
                            $("#pwdmsg1").html("\u4e3a\u4fdd\u969c\u60a8\u7684\u8d26\u53f7\u5b89\u5168\uff0c\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
                            return
                        }
                        if (302 == a) {
                            $("#pwdmsg1").html("\u60a8\u767b\u5f55\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                            return
                        }
                        if (500 == a) {
                            $("#pwdmsg1").html("\u7f51\u7edc\u5f02\u5e38");
                            return
                        }
                    }
                    0 <= a.indexOf("ResetPsd") && $("#pwdmsg1").html("\u60a8\u7684\u8d26\u53f7\u6709\u88ab\u5916\u661f\u4eba\u52ab\u6301\u7684\u98ce\u9669\uff0c\u5373\u5c06\u524d\u5f80\u4fee\u6539\u5bc6\u7801");
                    location.href = a
                })
            }
        else
            $("#pwdmsg1").html("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef")
    });
    $("#vcode").focus(function () {
        $("#pwdmsg1").html("");
        $(this).parent().find(".account_icon").attr("style", "display:none;");
        $(this).parent().find(".account_icon2").attr("style", "display:none;")
    });
    $("#vcode").blur(function () {
        var a = $(this).val();
        0 != a.length && "\u9a8c\u8bc1\u7801" != a || $("#pwdmsg1").html("\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801");
        4 == a.length && (CheckCodeLogin(a) ? ($(this).parent().find(".account_icon").removeAttr("style").attr("style", "display:block;"),
            $(this).parent().find(".account_icon2").removeClass("account_icon2").addClass("account_icon"),
            $(this).parent().find(".account_icon").removeAttr("style").attr("style", "display:block;")) : ($(this).parent().find(".account_icon").removeClass("account_icon").addClass("account_icon2"),
            $(this).parent().find(".account_icon2").removeAttr("style").attr("style", "display:block;"),
            $("#pwdmsg1").html("\u56fe\u7247\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef")))
    });
    $("#mCode").focus(function () {
        $("#pwdmsg1").html("")
    });
    $("#get_mcode").click(function () {
        $("#get_mcode").hide();
        $("#dis_get_vcode").html("\u53d1\u9001\u52a8\u6001\u5bc6\u7801");
        $("#dis_get_vcode").show();
        var a = $("#login_email").val()
            , b = getNp();
        if ("" == a || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == a)
            $("#dis_get_vcode").hide(),
                $("#get_mcode").show(),
                $("#pwdmsg1").html("\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7");
        else if (mobileValByNation(b, a)) {
            b = 0;
            "1" == tongdun_open && (b = timestamp);
            var c = $("#sig1").val();
            if ("" == c)
                $("#dis_get_vcode").hide(),
                    $("#get_mcode").show(),
                    $("#pwdmsg1").html("\u8bf7\u8fdb\u884c\u6ed1\u52a8\u9a8c\u8bc1");
            else {
                var d = $("#csessionid1").val()
                    , e = $("#alitoken1").val()
                    , g = $("#scene1").val();
                $.ajax({
                    type: "POST",
                    url: "/VerifyShow.aspx",
                    async: !1,
                    data: "_action\x3dsendMCode4MobileLogin\x26mobile\x3d" + a + "\x26nationPrefix\x3d" + getNp() + "\x26token\x3d" + b + "\x26csessionid\x3d" + d + "\x26alitoken\x3d" + e + "\x26sig\x3d" + c + "\x26scene\x3d" + g,
                    success: function (a) {
                        "200" == a ? ($("#pwdmsg1").html(""),
                            $("#get_mcode").hide(),
                            $("#dis_get_vcode").html("\u91cd\u65b0\u53d1\u9001\uff0860\uff09"),
                            $("#dis_get_vcode").show(),
                            ReadSendLoginCode(60)) : "106" == a ? ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#sig1").val(""),
                            $("#csessionid1").val(""),
                            $("#alitoken1").val(""),
                            $("#scene1").val(""),
                            nc1.reload(),
                            $("#pwdmsg1").html("\u91cd\u53d1\u65f6\u95f4\u672a\u5230\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")) : "107" == a ? ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#sig1").val(""),
                            $("#csessionid1").val(""),
                            $("#alitoken1").val(""),
                            $("#scene1").val(""),
                            nc1.reload(),
                            $("#pwdmsg1").html("\u4e24\u5c0f\u65f6\u5185\u53d1\u9001\u6b21\u6570\u8fbe\u5230\u4e0a\u9650\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")) : "301" == a ? ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#sig1").val(""),
                            $("#csessionid1").val(""),
                            $("#alitoken1").val(""),
                            $("#scene1").val(""),
                            nc1.reload(),
                            $("#pwdmsg1").html("\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")) : "400" == a ? ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#sig1").val(""),
                            $("#csessionid1").val(""),
                            $("#alitoken1").val(""),
                            $("#scene1").val(""),
                            nc1.reload(),
                            $("#pwdmsg1").html("\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")) : "401" == a ? ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#pwdmsg1").html("\u8be5\u8d26\u6237\u5df2\u6ce8\u9500\uff0c\u8bf7\u66f4\u6362\u5176\u4ed6\u624b\u673a\u53f7\u6216\u8054\u7cfb\u5ba2\u670d")) : "402" == a ? ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#pwdmsg1").html("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001")) : "403" == a ? ($("#sig1").val(""),
                            $("#csessionid1").val(""),
                            $("#alitoken1").val(""),
                            $("#scene1").val(""),
                            nc1.reload(),
                            $("#pwdmsg1").html("\u6ed1\u52a8\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")) : ($("#dis_get_vcode").hide(),
                            $("#get_mcode").show(),
                            $("#pwdmsg1").html("\u7f51\u7edc\u5f02\u5e38"))
                    }
                })
            }
        } else
            $("#dis_get_vcode").hide(),
                $("#get_mcode").show(),
                $("#pwdmsg1").html("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef")
    })
});

function sendLoginCode() {
    $("#get_mcode").hide();
    $("#dis_get_vcode").html("\u53d1\u9001\u52a8\u6001\u5bc6\u7801");
    $("#dis_get_vcode").show();
    var a = $("#login_email").val()
        , b = getNp();
    if ("" == a || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == a)
        $("#dis_get_vcode").hide(),
            $("#get_mcode").show(),
            $("#pwdmsg1").html("\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7");
    else if (mobileValByNation(b, a)) {
        b = 0;
        "1" == tongdun_open && (b = timestamp);
        var c = $("#sig1").val();
        if ("" == c)
            $("#dis_get_vcode").hide(),
                $("#get_mcode").show(),
                $("#pwdmsg1").html("\u8bf7\u8fdb\u884c\u6ed1\u52a8\u9a8c\u8bc1");
        else {
            var d = $("#csessionid1").val()
                , e = $("#alitoken1").val()
                , g = $("#scene1").val();
            $.ajax({
                type: "POST",
                url: "/VerifyShow.aspx",
                async: !1,
                data: "_action\x3dsendMCode4MobileLogin\x26mobile\x3d" + a + "\x26nationPrefix\x3d" + getNp() + "\x26token\x3d" + b + "\x26csessionid\x3d" + d + "\x26alitoken\x3d" + e + "\x26sig\x3d" + c + "\x26scene\x3d" + g,
                success: function (a) {
                    "200" == a ? ($("#pwdmsg1").html(""),
                        $("#get_mcode").hide(),
                        $("#dis_get_vcode").html("\u91cd\u65b0\u53d1\u9001\uff0860\uff09"),
                        $("#dis_get_vcode").show(),
                        ReadSendLoginCode(60)) : "106" == a ? ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#sig1").val(""),
                        $("#csessionid1").val(""),
                        $("#alitoken1").val(""),
                        $("#scene1").val(""),
                        nc1.reload(),
                        $("#pwdmsg1").html("\u91cd\u53d1\u65f6\u95f4\u672a\u5230\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")) : "107" == a ? ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#sig1").val(""),
                        $("#csessionid1").val(""),
                        $("#alitoken1").val(""),
                        $("#scene1").val(""),
                        nc1.reload(),
                        $("#pwdmsg1").html("\u4e24\u5c0f\u65f6\u5185\u53d1\u9001\u6b21\u6570\u8fbe\u5230\u4e0a\u9650\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")) : "301" == a ? ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#sig1").val(""),
                        $("#csessionid1").val(""),
                        $("#alitoken1").val(""),
                        $("#scene1").val(""),
                        nc1.reload(),
                        $("#pwdmsg1").html("\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")) : "400" == a ? ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#sig1").val(""),
                        $("#csessionid1").val(""),
                        $("#alitoken1").val(""),
                        $("#scene1").val(""),
                        nc1.reload(),
                        $("#pwdmsg1").html("\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")) : "401" == a ? ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#pwdmsg1").html("\u8be5\u8d26\u6237\u5df2\u6ce8\u9500\uff0c\u8bf7\u66f4\u6362\u5176\u4ed6\u624b\u673a\u53f7\u6216\u8054\u7cfb\u5ba2\u670d")) : "402" == a ? ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#pwdmsg1").html("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001")) : "403" == a ? ($("#sig1").val(""),
                        $("#csessionid1").val(""),
                        $("#alitoken1").val(""),
                        $("#scene1").val(""),
                        nc1.reload(),
                        $("#pwdmsg1").html("\u6ed1\u52a8\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")) : ($("#dis_get_vcode").hide(),
                        $("#get_mcode").show(),
                        $("#pwdmsg1").html("\u7f51\u7edc\u5f02\u5e38"))
                }
            })
        }
    } else
        $("#dis_get_vcode").hide(),
            $("#get_mcode").show(),
            $("#pwdmsg1").html("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef")
}

ReadSendLoginCode = function (a) {
    setTimeout(function () {
        a--;
        0 < a ? ($("#dis_get_vcode").html("\u91cd\u65b0\u53d1\u9001\uff08" + a + "\uff09"),
            ReadSendLoginCode(a)) : ($("#dis_get_vcode").html("\u91cd\u65b0\u53d1\u9001\uff0860\uff09"),
            $("#get_mcode").show(),
            $("#dis_get_vcode").hide(),
            $("#sig1").val(""),
            $("#csessionid1").val(""),
            $("#alitoken1").val(""),
            $("#scene1").val(""),
            $("#pwdmsg1").html(""),
            nc1.reload())
    }, 1E3)
}
;
CheckSubmit = function () {
    $("#np").val(getNp());
    var a = $("#verify_phone").is(":hidden");
    a || CheckMobileCode();
    phoneCodeVerify || CheckCode();
    var b = $("#checkbox").attr("checked")
        , c = $("#user_Email").val()
        , d = $("#user_PassWord").val()
        , e = $("#user_PassWord2").val()
        , g = $("#rcode").val()
        , h = $("#mobile_verifyCode").val()
        , k = getNp()
        , f = 0;
    if (0 == b || void 0 == b)
        alert("\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5927\u9ea6\u7f51\u4f1a\u5458\u670d\u52a1\u6761\u6b3e\uff0c\u5e76\u540c\u610f\u8be5\u6761\u6b3e"),
            f += 1;
    if (a)
        phoneCodeVerify = !0;
    else if ("" == h || "\u77ed\u4fe1\u9a8c\u8bc1\u7801" == h)
        $("#phoneVerify").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801\x3c/span\x3e'),
            $("#phoneVerify").show(),
            f += 1;
    if ("" == c || "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801" == c)
        $("#email_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801\x3c/span\x3e'),
            $("#email_tips").show(),
            f += 1;
    mobileValByNation(k, c) && a && nameVerify && ($("#verify_phone").show(),
        $("#phoneVerify").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801\x3c/span\x3e'),
        $("#phoneVerify").show(),
        f += 1);
    if ("" == d || void 0 == d)
        $("#pass_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801\x3c/span\x3e'),
            $("#pass_tips").show(),
            f += 1;
    if ("" == e || void 0 == e)
        $("#pass_tips_ag").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u786e\u8ba4\u767b\u5f55\u5bc6\u7801\x3c/span\x3e'),
            $("#pass_tips_ag").show(),
            f += 1;
    2 == verify_mode ? "" == $("#sig").val() && ($("#pic_code_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1\x3c/span\x3e'),
        $("#pic_code_tips").show(),
        f += 1) : "" == g || "\u9a8c\u8bc1\u7801" == g ? ($("#pic_code_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u56fe\u5f62\u9a8c\u8bc1\u7801\x3c/span\x3e'),
        $("#pic_code_tips").show(),
        f += 1) : 0 == picCodeVerify && ($("#pic_code_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u9519\u8bef\x3c/span\x3e'),
        $("#pic_code_tips").show(),
        $("#verify_img").attr("src", "verifyshow.aspx?d\x3d" + (new Date).toLocaleString()),
        f += 1);
    a = 0;
    "1" == tongdun_open && (a = timestamp);
    $.ajax({
        type: "POST",
        async: !1,
        url: "/VerifyShow.aspx",
        data: "_action\x3dMobileIsBindSafty\x26mobile\x3d" + $.trim($("#user_Email").val()) + "\x26nationCode\x3d" + getNp() + "\x26t\x3d" + a,
        success: function (a) {
            "100" == a ? ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8be5\u624b\u673a\u53f7\u5df2\u5360\u7528\uff0c\u8bf7\u66f4\u6362\u624b\u673a\u53f7\u518d\u6b21\u8fdb\u884c\u5c1d\u8bd5\x3c/span\x3e').show(),
                f += 1) : "301" == a && ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!\x3c/span\x3e').show(),
                f += 1)
        }
    });
    if (!(0 < f) && nameVerify && passwordVerify && passwordVerifyAG && picCodeVerify)
        if (phoneCodeVerify)
            "1" == tongdun_open ? $("#token").val(timestamp) : $("#token").val(0),
                $("#myform").submit();
        else
            return !1;
    else
        return !1
}
;
var flogin_reg = !1;
CheckSubmits = function () {
    var a = $("#verify_phone").is(":hidden")
        , b = $("#checkbox").attr("checked")
        , c = $("#user_Email").val()
        , d = $("#user_PassWord").val()
        , e = $("#user_PassWord2").val()
        , g = $("#rcode").val()
        , h = $("#mobile_verifyCode").val()
        , b = 0;
    if ("" == c || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == c)
        $("#user_Email").parent().addClass("error"),
            $("#user_Email").parent().find("strong").show(),
            b += 1;
    if ("" == d || void 0 == d)
        $("#txt_pass").parent().addClass("error"),
            $("#txt_pass").parent().find("strong").show(),
            b += 1;
    if ("" == e || void 0 == e)
        $("#txt_pass2").parent().addClass("error"),
            $("#txt_pass2").parent().find("strong").show(),
            b += 1;
    "" != h && "\u77ed\u4fe1\u9a8c\u8bc1\u7801" != h || !c.match(REG_VALID.vphone) || a || ($("#mobile_verifyCode").parent().addClass("error"),
        $("#mobile_verifyCode").parent().find("strong").show(),
        b += 1);
    "" == g || "\u9a8c\u8bc1\u7801" == g ? ($("#rcode").parent().addClass("error"),
        $("#rcode").parent().find("strong").show(),
        b += 1) : 0 == CheckCode() && ($("#verify_img").attr("src", "verifyshow.aspx?d\x3d" + (new Date).toLocaleString()),
        b += 1);
    a || "" == h || "\u77ed\u4fe1\u9a8c\u8bc1\u7801" == h || (phoneCodeVerify = h.match(REG_VALID.phoneCode));
    if (0 < b)
        return !1;
    a && (phoneCodeVerify = !0);
    phoneCodeVerify && (nameVerify && passwordVerify && passwordVerifyAG && picCodeVerify && phoneCodeVerify ? flogin_reg ? $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c") : (b = $("#checkbox").attr("checked"),
        0 == b || void 0 == b ? (alert("\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u5927\u9ea6\u7f51\u4f1a\u5458\u670d\u52a1\u6761\u6b3e\uff0c\u5e76\u540c\u610f\u8be5\u6761\u6b3e"),
            $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c")) : $.ajax({
            type: "POST",
            url: "/newframe.aspx",
            data: "_action\x3dReg\x26user_Email\x3d" + c + "\x26user_PassWord\x3d" + d + "\x26code\x3d" + g + "\x26mcode\x3d" + h + "\x26reffer\x3d" + callback,
            success: function (a) {
                $("#verify_img").attr("src", "/verifyshow.aspx?t\x3d" + (new Date).getTime());
                switch (a) {
                    case "101":
                        flogin_reg = !1;
                        $("#user_Email").parent().addClass("error");
                        $("#user_Email").parent().find("strong").show();
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801/\u90ae\u7bb1\u5730\u5740\x3c/span\x3e');
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801/\u90ae\u7bb1\u5730\u5740");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "102":
                        flogin_reg = !1;
                        $("#user_Email").parent().addClass("error");
                        $("#user_Email").parent().find("strong").show();
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a/\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e\x3c/span\x3e');
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a/\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "103":
                        flogin_reg = !1;
                        $("#user_Email").parent().addClass("error");
                        $("#user_Email").parent().find("strong").show();
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u96c5\u864e\u90ae\u7bb1\u5df2\u505c\u7528\uff0c\u8bf7\u4f7f\u7528\u5176\u4ed6\u90ae\u7bb1\x3c/span\x3e');
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u96c5\u864e\u90ae\u7bb1\u5df2\u505c\u7528\uff0c\u8bf7\u4f7f\u7528\u5176\u4ed6\u90ae\u7bb1");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "104":
                        flogin_reg = !1;
                        $("#rcode").parent().addClass("error");
                        $("#rcode").parent().find("strong").show();
                        $("#rcode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u9519\u8bef\x3c/span\x3e');
                        $("#rcode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u9a8c\u8bc1\u7801\u9519\u8bef");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "106":
                        flogin_reg = !1;
                        $("#mobile_verifyCode").parent().addClass("error");
                        $("#mobile_verifyCode").parent().find("strong").show();
                        $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165!\x3c/span\x3e');
                        $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165!");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "201":
                        flogin_reg = !1;
                        $("#user_Email").parent().addClass("error");
                        $("#user_Email").parent().find("strong").show();
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u53f7\u5df2\u88ab\u6ce8\u518c\x3c/span\x3e');
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a\u53f7\u5df2\u88ab\u6ce8\u518c");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "202":
                        e;
                        login_reg = !1;
                        $("#user_Email").parent().addClass("error");
                        $("#user_Email").parent().find("strong").show();
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u90ae\u7bb1\u5df2\u88ab\u6ce8\u518c\x3c/span\x3e');
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u90ae\u7bb1\u5df2\u88ab\u6ce8\u518c");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    case "500":
                        flogin_reg = !1;
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u65e0\u670d\u52a1\x3c/span\x3e');
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u65e0\u670d\u52a1");
                        $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c");
                        break;
                    default:
                        location.href = "/Pinless.aspx"
                }
            }
        })) : $("#flogin_btn").val("\u7acb\u5373\u6ce8\u518c"))
}
;
CheckUserEmail = function () {
    nameVerify = !1;
    var a = $("#user_Email").val();
    $("#user_Email").parent().removeClass("now");
    $("#user_Email").parent().find("strong").hide();
    if (void 0 == a || "" == a || null == a || "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801" == a)
        $("#email_tips").html("").hide(),
            $("#user_Email").removeClass("cor1");
    else {
        var b = checkEmail(a);
        b && ($("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u60a8\u4f7f\u7528\u624b\u673a\u53f7\u7801\u5b8c\u6210\u6ce8\u518c\x3c/span\x3e'),
            $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u60a8\u4f7f\u7528\u624b\u673a\u53f7\u7801\u5b8c\u6210\u6ce8\u518c"));
        var c = checkIsNumber(a);
        c || (b ? ($("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u60a8\u4f7f\u7528\u624b\u673a\u53f7\u7801\u5b8c\u6210\u6ce8\u518c\x3c/span\x3e'),
            $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u60a8\u4f7f\u7528\u624b\u673a\u53f7\u7801\u5b8c\u6210\u6ce8\u518c")) : ($("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e\x3c/span\x3e'),
            $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a\u683c\u5f0f\u4e0d\u6b63\u786e")));
        var d = 0;
        "1" == tongdun_open && (d = timestamp);
        if (c) {
            $("#user_Email").parent().find("strong").hide();
            var e = getNp();
            mobileValByNation(e, a) ? $.ajax({
                type: "POST",
                url: "/VerifyShow.aspx",
                data: "_action\x3dMobileIsBindSafty\x26mobile\x3d" + $.trim($("#user_Email").val()) + "\x26nationCode\x3d" + getNp() + "\x26t\x3d" + d,
                success: function (a) {
                    "100" == a ? checkUserStatus(e, $.trim($("#user_Email").val()), 0) : "301" == a ? ($("#verify_phone").hide(),
                        $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!\x3c/span\x3e'),
                        $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!")) : $.ajax({
                        type: "POST",
                        url: "/VerifyShow.aspx",
                        data: "_action\x3dCheckIsUser\x26nationPerfix\x3d" + e + "\x26email\x3d" + $.trim($("#user_Email").val()) + "\x26type\x3d1\x26t\x3d" + d,
                        success: function (a) {
                            "200" == a ? checkUserStatus(e, $.trim($("#user_Email").val()), 1) : "101" == a ? ($("#verify_phone").hide(),
                                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3efig\u9519\u8bef!\x3c/span\x3e'),
                                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("fig\u9519\u8bef!")) : "102" == a ? ($("#verify_phone").hide(),
                                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3eIP\u4e0d\u88ab\u5141\u8bb8\u8bbf\u95ee!\x3c/span\x3e'),
                                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("IP\u4e0d\u88ab\u5141\u8bb8\u8bbf\u95ee!")) : "103" == a ? ($("#verify_phone").hide(),
                                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef!\x3c/span\x3e'),
                                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef!")) : "301" == a ? ($("#verify_phone").hide(),
                                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!\x3c/span\x3e'),
                                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!")) : "400" == a ? (nameVerify = !0,
                                $("#email_tips").html("").hide(),
                                $("#user_Email").parent().find("strong").show(),
                                $("#user_Email").parent().removeClass("now"),
                                $("#verify_phone").show()) : "500" == a && ($("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u7f51\u7edc\u5f02\u5e38!\x3c/span\x3e'),
                                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u7f51\u7edc\u5f02\u5e38!"))
                        }
                    })
                }
            }) : ($("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef\x3c/span\x3e'),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef"))
        }
    }
}
;
CheckPassword = function () {
    passwordVerify = !1;
    var a = $("#user_PassWord").val();
    $("#user_PassWord").parent().removeClass("now");
    $("#user_PassWord").parent().find("strong").hide();
    "" == a || "\u767b\u5f55\u5bc6\u7801" == a ? ($("#user_PassWord").hide(),
        $(".reg_strong").hide(),
        $("#pass_tips").html("").hide(),
        $("#txt_pass").show(),
        $("#txt_pass").removeClass("cor1"),
        $("#user_PassWord").parent().find(".reg_icon").hide()) : ($("#user_PassWord").addClass("cor1"),
        6 > a.length ? ($(".reg_strong").hide(),
            $("#user_PassWord").parent().find("strong").hide(),
            $("#user_PassWord").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u5bc6\u7801\u957f\u5ea6\u9700\u57286-16\u4e2a\u5b57\u7b26\u4e4b\u95f4\x3c/span\x3e'),
            $("#user_PassWord").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u5bc6\u7801\u957f\u5ea6\u9700\u57286-16\u4e2a\u5b57\u7b26\u4e4b\u95f4")) : (passwordVerify = !0,
            $(".reg_strong").show(),
            $("#pass_tips").html("").hide(),
            $("#user_PassWord").parent().find("strong").show()))
}
;
CheckPasswordAG = function () {
    passwordVerifyAG = !1;
    var a = $("#user_PassWord").val()
        , b = $("#user_PassWord2").val();
    $("#user_PassWord2").parent().removeClass("now");
    $("#user_PassWord2").parent().find("strong").hide();
    null == b || "" == b ? ($("#txt_pass2").show(),
        $("#user_PassWord2").hide(),
        $("#pass_tips_ag").html("").hide(),
        $("#txt_pass2").removeClass("cor1"),
        $("#user_PassWord2").parent().find(".reg_icon").hide()) : ($("#user_PassWord2").addClass("cor1"),
        6 > b.length ? ($("#user_PassWord2").parent().find("strong").hide(),
            $("#user_PassWord2").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u5bc6\u7801\u957f\u5ea6\u9700\u57286-16\u4e2a\u5b57\u7b26\u4e4b\u95f4\x3c/span\x3e'),
            $("#user_PassWord2").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u5bc6\u7801\u957f\u5ea6\u9700\u57286-16\u4e2a\u5b57\u7b26\u4e4b\u95f4")) : b != a ? ($("#user_PassWord2").parent().find("strong").hide(),
            $("#user_PassWord2").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4\x3c/span\x3e'),
            $("#user_PassWord2").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4"),
            $("#pass_tips_ag").html('\x3cspan style\x3d"color:#f55732;"\x3e\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4\x3c/span\x3e')) : (passwordVerifyAG = !0,
            $("#pass_tips_ag").html("").hide(),
            $("#user_PassWord2").parent().find("strong").show()))
}
;
CheckCode = function () {
    picCodeVerify = !1;
    if (2 == verify_mode)
        return "" == $("#sig").val() ? ($("#rcode").parent().find("strong").hide(),
            $("#rcode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u57fa\u4e8e\u5bf9\u60a8\u5f53\u524d\u73af\u5883\u7684\u68c0\u6d4b\uff0c\u8bf7\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1\x3c/span\x3e'),
            $("#rcode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u57fa\u4e8e\u5bf9\u60a8\u5f53\u524d\u73af\u5883\u7684\u68c0\u6d4b\uff0c\u8bf7\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1"),
            !1) : picCodeVerify = !0;
    var a = $("#rcode").val();
    $("#rcode").parent().find("strong").hide();
    $("#rcode").parent().removeClass("now");
    var b = !1;
    if (0 == $.trim(a).length || "\u9a8c\u8bc1\u7801" == a)
        $("#pic_code_tips").html("").hide(),
            $("#rcode").removeClass("cor1"),
            $("#rcode").parent().find(".reg_icon").hide();
    0 < a.length && "\u9a8c\u8bc1\u7801" != a && (a = $.trim(a));
    4 == a.length && $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        async: !1,
        data: "_action\x3dCodeRex\x26code\x3d" + a,
        success: function (a) {
            1 == parseInt(a) ? (picCodeVerify = !0,
                $("#pic_code_tips").html("").hide(),
                $("#rcode").parent().find("strong").show(),
                b = !0) : ($("#rcode").parent().find("strong").hide(),
                $("#rcode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u9519\u8bef\x3c/span\x3e'),
                $("#rcode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u9a8c\u8bc1\u7801\u9519\u8bef"))
        }
    });
    return b
}
;
CheckCodeLogin = function (a) {
    if (4 != a.length)
        return !1;
    var b = !1;
    $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        async: !1,
        data: "_action\x3dCodeRex\x26code\x3d" + a,
        success: function (a) {
            $("#reg_login_code_tips").attr("style", "display:block;");
            1 == parseInt(a) ? (b = !0,
                $("#reg_codemsg").html(""),
                $("#reg_codemsg").hide(),
                $("#reg_code").parent().removeClass("now"),
                $("#reg_login_code_tips").removeClass("reg_icon2").addClass("reg_icon")) : ($("#reg_codemsg").show(),
                $("#reg_codemsg").html(""),
                $("#reg_codemsg").hide(),
                $("#reg_login_code_tips").removeClass("reg_icon").addClass("reg_icon2"))
        }
    });
    return b
}
;
var IsSendPhone = !1;
SendCode = function (a, b) {
    if (!IsSendPhone)
        if ($("#phoneVerify").show(),
                CheckCode()) {
            var c = $("#get_verifyCode").html()
                , d = $("#rcode").val();
            0 <= c.indexOf("\u91cd\u53d1") ? ($("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e120\u79d2\u5185\u4ec5\u80fd\u83b7\u53d6\u4e00\u6b21\u9a8c\u8bc1\u7801\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\x3c/span\x3e'),
                $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("120\u79d2\u5185\u4ec5\u80fd\u83b7\u53d6\u4e00\u6b21\u9a8c\u8bc1\u7801\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5")) : (c = "",
                c = "1" == tongdun_open ? "_action\x3dNewSendMobileCode\x26nationPerfix\x3d" + a + "\x26mobile\x3d" + b + "\x26pcode\x3d" + d + "\x26token\x3d" + timestamp : "_action\x3dNewSendMobileCode\x26nationPerfix\x3d" + a + "\x26mobile\x3d" + b + "\x26pcode\x3d" + d,
                IsSendPhone = !0,
                $.ajax({
                    type: "POST",
                    url: "/VerifyShow.aspx",
                    data: c,
                    success: function (a) {
                        a = a.split("_");
                        IsSendPhone = !1;
                        switch (a[0]) {
                            case "200":
                                1 == parseInt(a[1]) || 2 == parseInt(a[1]) || 0 == parseInt(a[1]) ? ($("#mobile_verifyCode").parent().parent().find(".reg_tips").html("\u60a8\u7684\u624b\u673a\u53f7\u8fd8\u6709" + a[1] + "\u6b21\u9a8c\u8bc1\u7801\u83b7\u53d6\u673a\u4f1a"),
                                    $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u60a8\u7684\u624b\u673a\u53f7\u8fd8\u6709" + a[1] + "\u6b21\u9a8c\u8bc1\u7801\u83b7\u53d6\u673a\u4f1a")) : ($("#mobile_verifyCode").parent().parent().find(".reg_tips").html("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\uff0c\u8bf7\u67e5\u6536\u77ed\u4fe1"),
                                    $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips2").addClass("layer_tips").html("\u9a8c\u8bc1\u7801\u5df2\u53d1\u9001\uff0c\u8bf7\u67e5\u6536\u77ed\u4fe1"));
                                ReadSend(119);
                                break;
                            case "106":
                                $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e120\u79d2\u5185\u4ec5\u80fd\u83b7\u53d6\u4e00\u6b21\u9a8c\u8bc1\u7801\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\x3c/span\x3e');
                                $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("120\u79d2\u5185\u4ec5\u80fd\u83b7\u53d6\u4e00\u6b21\u9a8c\u8bc1\u7801\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                                ReadSend(parseInt(a[1]));
                                break;
                            case "109":
                                $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u60a8\u7533\u8bf7\u83b7\u53d6\u9a8c\u8bc1\u7801\u7684\u6b21\u6570\u8fc7\u591a\uff0c\u8bf7\u660e\u5929\u518d\u8bd5\x3c/span\x3e');
                                $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u60a8\u7533\u8bf7\u83b7\u53d6\u9a8c\u8bc1\u7801\u7684\u6b21\u6570\u8fc7\u591a\uff0c\u8bf7\u660e\u5929\u518d\u8bd5");
                                break;
                            case "300":
                                $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u56fe\u5f62\u9a8c\u8bc1\u7801\x3c/span\x3e');
                                $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u56fe\u5f62\u9a8c\u8bc1\u7801");
                                break;
                            case "301":
                                document.getElementById("verify_img").src = "/VerifyShow.aspx?d\x3d" + (new Date).toLocaleString();
                                $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u60a8\u6240\u5728\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\x3c/span\x3e');
                                $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u60a8\u767b\u5f55\u7684\u73af\u5883\u6709\u98ce\u9669\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5");
                                break;
                            case "1001":
                                $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff0c\u4e0e\u5bf9\u5e94\u56fd\u9645\u5b57\u51a0\u4e0d\u7b26\x3c/span\x3e');
                                $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff0c\u4e0e\u5bf9\u5e94\u56fd\u9645\u5b57\u51a0\u4e0d\u7b26");
                                break;
                            default:
                                $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u7cfb\u7edf\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\x3c/span\x3e'),
                                    $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u7cfb\u7edf\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")
                        }
                    }
                }))
        } else
            $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u586b\u5165\u6b63\u786e\u7684\u56fe\u5f62\u9a8c\u8bc1\u7801\x3c/span\x3e')
}
;
ReadSend = function (a) {
    setTimeout(function () {
        a--;
        0 < a ? ($("#get_verifyCode").html(a + "\u79d2\u540e\u70b9\u6b64\u91cd\u53d1"),
            ReadSend(a)) : ($("#get_verifyCode").html("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
            $("#phoneVerify").html(""),
            $("#phoneVerify").hide())
    }, 1E3)
}
;
CheckMobileCode = function () {
    var a = $("#mobile_verifyCode").val()
        , b = $("#user_Email").val()
        , c = getNp();
    $("#mobile_verifyCode").parent().find("strong").hide();
    $("#mobile_verifyCode").parent().removeClass("now");
    if ("\u77ed\u4fe1\u9a8c\u8bc1\u7801" == a || 0 == a.length)
        return $("#phoneVerify").show(),
            $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801\x3c/span\x3e'),
            $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801"),
            $("#mobile_verifyCode").removeClass("cor1"),
            !1;
    if (6 == a.length && checkIsNumber(b))
        if (mobileValByNation(c, b))
            $.ajax({
                type: "POST",
                url: "/VerifyShow.aspx",
                async: !1,
                data: "_action\x3dNewCheckMobile\x26code\x3d" + a + "\x26mobile\x3d" + b + "\x26nationPerfix\x3d" + c,
                success: function (a) {
                    if ("1" != a)
                        return $("#phoneVerify").show(),
                            $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\u6216\u5df2\u5931\u6548\x3c/span\x3e'),
                            $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\u6216\u5df2\u5931\u6548"),
                            !1;
                    phoneCodeVerify = !0;
                    $("#phoneVerify").html("").hide();
                    $("#mobile_verifyCode").parent().find("strong").show();
                    return !0
                }
            });
        else
            return !1;
    else
        return $("#phoneVerify").show(),
            $("#mobile_verifyCode").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\x3c/span\x3e'),
            $("#mobile_verifyCode").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef"),
            !1
}
;

function checkYahooEmail(a) {
    if (void 0 != a || "" != a)
        if (a = a.toLowerCase(),
            0 < a.indexOf("@yahoo.com.cn") || 0 < a.indexOf("@yahoo.cn"))
            return !0;
    return !1
}

function checkIsNumber(a) {
    return $.isNumeric(a) ? !0 : !1
}

function checkEmail(a) {
    return 0 <= a.indexOf("@") ? !0 : !1
}

function checkPasswordStrong(a) {
    var b = 0;
    a.match(/[a-z]/g) && b++;
    a.match(/[0-9]/g) && b++;
    a.match(/[A-Z]/g) && b++;
    a.match(/(.[^a-zA-Z0-9])/g) && b++;
    4 < b && (b = 4);
    1 == b ? ($("#strong_1").addClass("on"),
        $("#strong_2").removeClass("on"),
        $("#strong_3").removeClass("on")) : 2 == b || 3 <= b && 6 <= a.length && 8 >= a.length ? ($("#strong_1").removeClass("on"),
        $("#strong_2").addClass("on"),
        $("#strong_3").removeClass("on")) : 3 <= b && 8 < a.length && ($("#strong_1").removeClass("on"),
        $("#strong_2").removeClass("on"),
        $("#strong_3").addClass("on"))
}

function getEmailWebURL(a) {
    if ("" == a)
        return "";
    var b = null;
    $.ajax({
        url: "/data/maillWebURL.xml?" + new Date,
        timeout: 3E3,
        type: "GET",
        data: {},
        async: !1,
        dataType: "xml",
        error: function (a) {
        },
        success: function (c) {
            $(c).find("mailWebURL \x3e node").each(function () {
                var c = $(this).attr("EName").toLowerCase();
                if (-1 != a.toLowerCase().indexOf(c))
                    return b = "http://" + $(this).attr("URL").toLowerCase()
            })
        },
        complete: function () {
        }
    });
    null == b && (b = "mailto:" + a);
    return b
}

var isSubmit = !1;
FrSubmit = function () {
    if (!isSubmit) {
        var a = $("#login_email").val()
            , b = $("#login_pwd").val()
            , c = $("#code").val();
        console.log("liguoqinjim.a=" + a);
        console.log("liguoqinjim.b=" + b);
        console.log("liguoqnijim.c=" + c);
        if ("" == a || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == a) {
            $(".account_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8d26\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\x3c/span\x3e');
            $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740/\u624b\u673a\u53f7");
        }
        else if ("" == b || void 0 == b) {
            $(".account_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\x3c/span\x3e');
            $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u8bf7\u8f93\u5165\u60a8\u7684\u767b\u5f55\u5bc6\u7801");
        }
        else if (HasSensitiveStr(a))
            $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u8d26\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),
                $("#login_email").html("");
        else if (b = "1" == tongdun_open ? timestamp : 0,
            3 <= codenum)
            if (2 == verify_mode) {
                if ("" == $("#sig").val())
                    return $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u57fa\u4e8e\u5bf9\u60a8\u5f53\u524d\u73af\u5883\u7684\u68c0\u6d4b\uff0c\u8bf7\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1"),
                        !1;
                enterKeyDown = isSubmit = !0;
                $("#pwdmsg").removeClass().addClass("account_site").html("");
                $(".account_tips").html("");
                $("#codemsg").html("");
                $("#nationperfix").val(getNp());
                $("#token").val(b);
                $("#subbtn").val("\u6b63\u5728\u767b\u5f55...");
                $("#subbtn").attr("disabled", !0);
                $("#login_pwd_txt").val(a);
                $("#dlform").submit()
            } else if ("" == c || "\u9a8c\u8bc1\u7801" == c)
                $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
            else if (0 == $("#code").length && (enterKeyDown = isSubmit = !0,
                    $(".account_tips").html(""),
                    $("#codemsg").html(""),
                    $("#nationperfix").val(getNp()),
                    $("#token").val(b),
                    $("#subbtn").val("\u6b63\u5728\u767b\u5f55..."),
                    $("#subbtn").attr("disabled", !0),
                    $("#login_pwd_txt").val(a),
                    $("#dlform").submit()),
                1 == CheckCodeLogin(c))
                enterKeyDown = isSubmit = !0,
                    $(".account_tips").html(""),
                    $("#codemsg").html(""),
                    $("#nationperfix").val(getNp()),
                    $("#token").val(b),
                    $("#subbtn").val("\u6b63\u5728\u767b\u5f55..."),
                    $("#subbtn").attr("disabled", !0),
                    $("#login_pwd_txt").val(a),
                    $("#dlform").submit();
            else
                return $(".account_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u9519\u8bef\x3c/span\x3e'),
                    $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u9a8c\u8bc1\u7801\u9519\u8bef"),
                    $("#cImg").attr("src", "verifyshow.aspx?d\x3d" + (new Date).toLocaleString()),
                    !1;
        else
            isSubmit = enterKeyDown = !0,
                $(".account_tips").html(""),
                $("#codemsg").html(""),
                $("#nationperfix").val(getNp()),
                $("#token").val(b),
                $("#subbtn").val("\u6b63\u5728\u767b\u5f55..."),
                $("#subbtn").attr("disabled", !0),
                $("#login_pwd_txt").val(a),
                $("#dlform").submit()
    }
}
;

function checkSeafty(a, b, c) {
    var d = !1;
    "" != c && "\u9a8c\u8bc1\u7801" != c ? d = !0 : $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        async: !1,
        data: "_action\x3dVerifyIp\x26nationPrefix\x3d" + getNp() + "\x26account\x3d" + a,
        success: function (a) {
            0 < a ? $.ajax({
                type: "POST",
                url: "/VerifyShow.aspx",
                async: !1,
                data: "_action\x3dVerifyAccount",
                success: function (c) {
                    0 < c && c != a ? 0 == b ? ($("#normalCode").attr("style", "display:block;"),
                        $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u4e3a\u4fdd\u8bc1\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
                        d = !1) : 1 == b && ($("#aliCode").attr("style", "display:block; position:relative;z-index:1111;"),
                        $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u4e3a\u4fdd\u8bc1\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1"),
                        d = !1) : 0 >= c ? 0 == b ? ($("#normalCode").attr("style", "display:block;"),
                        $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u4e3a\u4fdd\u8bc1\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
                        d = !1) : 1 == b && ($("#aliCode").attr("style", "display:block; position:relative;z-index:1111;"),
                        $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u4e3a\u4fdd\u8bc1\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1"),
                        d = !1) : d = !0
                }
            }) : 0 == b ? ($("#normalCode").attr("style", "display:block;"),
                $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u4e3a\u4fdd\u8bc1\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"),
                d = !1) : 1 == b && ($("#aliCode").attr("style", "display:block; position:relative;z-index:1111;"),
                $("#pwdmsg").removeClass("account_hint").addClass("account_hint2").html("\u4e3a\u4fdd\u8bc1\u60a8\u7684\u8d26\u6237\u5b89\u5168\uff0c\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1"),
                d = !1)
        }
    });
    return d
}

FrSubmits = function () {
    $("#flogin_btn_login").val("\u8bf7\u7a0d\u5019...");
    $("#flogin_tips").removeClass("layer_tips").removeClass("layer_tips2");
    if (isSubmit)
        $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
    else {
        var a = $("#showCaptcha").is(":hidden")
            , b = $("#login_email").val()
            , c = $("#login_pwd").val()
            , d = $("#code").val();
        if ("" == b || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == b)
            $("#flogin_tips").removeClass(".layer_tips").addClass("layer_tips2").html("\u8bf7\u8f93\u5165\u90ae\u7bb1\u5730\u5740/\u624b\u673a\u53f7\u7801"),
                $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
        else if ("" == c || void 0 == c)
            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u8f93\u5165\u60a8\u7684\u767b\u5f55\u5bc6\u7801"),
                $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
        else if (c = EnStr(c),
                HasSensitiveStr(b))
            $("#flogin_tips").removeClass(".layer_tips").addClass("layer_tips2").html("\u8d26\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),
                $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
        else {
            if (!a) {
                if ("" == d || "\u9a8c\u8bc1\u7801" == d) {
                    $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801");
                    $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                    return
                }
                if (0 == CheckCodeLogin(d)) {
                    $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                    $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("\u9a8c\u8bc1\u7801\u9519\u8bef");
                    $("#cImg").attr("src", "verifyshow.aspx?d\x3d" + (new Date).toLocaleString());
                    return
                }
            }
            isSubmit = !0;
            "\u9a8c\u8bc1\u7801" == d && (d = "");
            $.ajax({
                type: "POST",
                url: "/newframe.aspx",
                cache: !1,
                data: "_action\x3dV3DoPost\x26login_email\x3d" + b + "\x26login_pwd\x3d" + c + "\x26code\x3d" + d,
                success: function (a) {
                    a = a.split("_");
                    switch (parseInt(a[0])) {
                        case 101:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 102:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 103:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 104:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 105:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#showCaptcha").show();
                            $("#cImg").attr("src", "verifyshow.aspx?d\x3d" + (new Date).toLocaleString());
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 106:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 200:
                            $("#flogin_tips").removeClass("layer_tips").removeClass("layer_tips2");
                            location.href = "http://passport.damai.cn/Bridge.aspx?_action\x3dBridge_lif\x26_b_callback\x3d" + callback;
                            break;
                        case 201:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 202:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 203:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        case 204:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + "");
                            $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55");
                            isSubmit = !1;
                            break;
                        default:
                            $("#flogin_tips").removeClass("layer_tips").addClass("layer_tips2").html("" + a[1] + ""),
                                $("#flogin_btn_login").val("\u7acb\u5373\u767b\u5f55"),
                                isSubmit = !1
                    }
                }
            })
        }
    }
}
;

function ClearLoginInput() {
    $("#login_email").val("");
    $("#login_pwd").val("");
    $("#code").val("")
}

RegUser = function () {
    window.location.href = "/reg.aspx"
}
;
var QRCode_Suc = !0;

function QRCode() {
    if (QRCode_Suc) {
        QRCode_Suc = !1;
        var a = 0;
        "1" == tongdun_open && (a = timestamp);
        $.ajax({
            type: "POST",
            url: "/VerifyShow.aspx",
            cache: !1,
            data: "_action\x3dgetQRCodeState\x26token\x3d" + a,
            success: function (a) {
                if (1 == parseInt(a)) {
                    window.clearInterval(Interval);
                    if ("" == callback || null == callback)
                        callback = "http://www.damai.cn";
                    window.setTimeout("ToURL('" + callback + "')", 1E3)
                } else
                    2 == parseInt(a) ? $(".code_con .code_tips").html('\x3cspan class\x3d"code_suc"\x3e\u626b\u63cf\u6210\u529f\uff0c\u53bb\u624b\u673a\u4e0a\u786e\u8ba4\u767b\u5f55\x3c/span\x3e') : parseInt(a);
                QRCode_Suc = !0
            }
        })
    }
}

function ToURL(a) {
    window.location.href = a
}

var IsRegLogin = !1;

function reg_login() {
    $("#reg_namemsg").html("");
    $("#reg_pwdmsg").html("");
    $("#reg_codemsg").html("");
    $("#reg_namemsg").hide();
    $("#reg_codemsg").hide();
    $("#reg_pwdmsg").hide();
    if (!IsRegLogin) {
        var a = $("#login_email").val()
            , b = $("#login_pwd").val()
            , c = $("#reg_code").val();
        "\u9a8c\u8bc1\u7801" == c && (c = "");
        if ("" == a || "\u90ae\u7bb1/\u624b\u673a\u53f7\u7801" == a)
            $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801/\u90ae\u7bb1\u5730\u5740\x3c/span\x3e'),
                $("#reg_namemsg").show();
        else if ("" == b || void 0 == b)
            $("#reg_pwdmsg").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u60a8\u7684\u767b\u5f55\u5bc6\u7801\x3c/span\x3e'),
                $("#reg_pwdmsg").show();
        else if (HasSensitiveStr(a))
            $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8d26\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\x3c/span\x3e'),
                $("#reg_namemsg").show();
        else if (0 == $("#regLoginCode").is(":hidden")) {
            if ("" == c)
                return $("#reg_codemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\x3c/span\x3e'),
                    $("#reg_codemsg").show(),
                    !1;
            if (CheckCodeLogin(c))
                IsRegLogin = !0,
                    regSub(a, b, c);
            else
                return $("#reg_codemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e\u9a8c\u8bc1\u7801\u9519\u8bef\x3c/span\x3e'),
                    $("#reg_codemsg").show(),
                    $("#cImg").attr("src", "verifyshow.aspx?d\x3d" + (new Date).toLocaleString()),
                    !1
        } else
            IsRegLogin = !0,
                regSub(a, b, c)
    }
}

function regSub(a, b, c) {
    $("#reg_login_btn").val("\u8bf7\u7a0d\u540e....");
    var d = DeUrl($("#reurl").val())
        , e = parseInt(Simple(encodeURIComponent(b)));
    b = EnStr(encodeURIComponent(b));
    $.ajax({
        type: "POST",
        url: "/reg.aspx",
        cache: !1,
        data: "_action\x3dreg_login\x26login_email\x3d" + a + "\x26login_pwd\x3d" + encodeURIComponent(b) + "\x26code\x3d" + c + "\x26type\x3d0",
        success: function (a) {
            $("#cImg").attr("src", "/verifyshow.aspx?t\x3d" + (new Date).getTime());
            IsRegLogin = !1;
            a = a.split("_");
            switch (parseInt(a[0])) {
                case 101:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_namemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 102:
                    $("#reg_pwdmsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_pwdmsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 103:
                    $("#reg_codemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_codemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 104:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_namemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    0 > a[1].indexOf("\u5c1d\u8bd5") && ($("#regLoginCode").hide(),
                        $("#reg_code").val(""),
                        $("#reg_login_code_tips").hide());
                    break;
                case 105:
                    $("#regLoginCode").show();
                    $("#reg_codemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_code").val("");
                    $("reg_login_code_tips").hide();
                    $("#reg_codemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 106:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_namemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    0 > a[1].indexOf("\u5c1d\u8bd5") && ($("#regLoginCode").hide(),
                        $("#reg_code").val(""),
                        $("#reg_login_code_tips").hide());
                    break;
                case 200:
                    $("#reg_namemsg").html("");
                    $("#reg_pwdmsg").html("");
                    $("#reg_codemsg").html("");
                    window.location.href = "/safetytip.aspx?ru\x3d" + d + "\x26simple\x3d" + e;
                    break;
                case 201:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_namemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 202:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_namemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 203:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e");
                    $("#reg_namemsg").show();
                    $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55");
                    break;
                case 204:
                    $("#reg_namemsg").html('\x3cspan style\x3d"color:#f55732;"\x3e' + a[1] + "\x3c/span\x3e"),
                        $("#reg_namemsg").show(),
                        $("#reg_login_btn").val("\u7acb\u5373\u767b\u5f55")
            }
            $("#reg_code").parent().find("strong").hide();
            $("#reg_code").val("")
        }
    })
}

var scanEmail = function (a) {
    a.substring(a.lastIndexOf("@") + 1);
    a = getEmailWebURL(lastUrlNode);
    window.open(a, "_blank", "")
};
LoadCode = function () {
    if ("" == $("#imgcode").html()) {
        var a = (new Date).getMilliseconds() + RndNum(5);
        $("#imgcode").html('\x3cimg src\x3d"/VerifyShow.aspx?d\x3d' + a + '"  id\x3d"verifyid" onclick\x3d"this.src\x3d\'/VerifyShow.aspx?d\x3d\'+new Date().getMilliseconds()+RndNum(5)" style\x3d"width: 95px; height: 30px;cursor:pointer; " alt\x3d"\u70b9\u51fb\u83b7\u53d6\u9a8c\u8bc1\u7801"/\x3e')
    }
}
;

function RndNum(a) {
    for (var b = "", c = 0; c < a; c++)
        b += Math.floor(10 * Math.random());
    return b
}

RefreshQRCode = function () {
    $(".code_con .code_tips").html('\u7528\x3ca href\x3d"http://mobile.damai.cn/" target\x3d"_blank"\x3e\u5927\u9ea6\u624b\u673a\u5ba2\u6237\u7aef\x3c/a\x3e\u626b\u7801\u5feb\u901f\u767b\u5f55');
    document.getElementById("QRCodeImg").src = "/VerifyShow.aspx?_action\x3dQRCode\x26d\x3d" + (new Date).toLocaleString()
}
;
DeUrl = function (a) {
    var b = "";
    $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        async: !1,
        data: "_action\x3dDeUrlString\x26url\x3d" + a,
        success: function (a) {
            b = a
        }
    });
    return b
}
;
EnStr = function (a) {
    var b = "";
    $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        async: !1,
        data: "_action\x3dEnStr\x26str\x3d" + a,
        success: function (a) {
            b = a
        }
    });
    return b
}
;
Simple = function (a) {
    var b = "";
    $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        async: !1,
        data: "_action\x3dsimpleStr\x26pwd\x3d" + a,
        success: function (a) {
            b = a
        }
    });
    return b
}
;
HasSensitiveStr = function (a) {
    var b = !1;
    a = a.toLocaleLowerCase();
    for (var c = "\x3c \x3e img src script alert iframe .html http https ' + \"".split(" "), d = 0; d < c.length; d++)
        if (0 <= a.indexOf(c[d])) {
            b = !0;
            break
        }
    return b
}
;

function getparams() {
    var a = $("#user_Email").val()
        , b = getNp();
    return $.md5("mobile\x3d" + a + "|nationCode\x3d" + b + "damaiainia1b2c3d4e5f6").toUpperCase()
}

function mobileValByNation(a, b) {
    switch (a) {
        case "86":
            return b.match(REG_VALID.CHINESE);
        case "852":
            return REG_VALID.HONGKONG.test(b);
        case "853":
            return REG_VALID.MACAU.test(b);
        case "886":
            return REG_VALID.TAIWAN.test(b);
        case "82":
            return REG_VALID.SOUTHKOREA.test(b);
        case "81":
            return REG_VALID.JAPAN.test(b);
        case "1":
            return REG_VALID.US.test(b);
        case "44":
            return REG_VALID.BRITISH.test(b);
        case "61":
            return REG_VALID.AUSTRALIA.test(b);
        case "65":
            return REG_VALID.SINGAPORE.test(b);
        case "60":
            return REG_VALID.MALAYSIA.test(b);
        case "66":
            return REG_VALID.THAILAND.test(b);
        case "84":
            return REG_VALID.VIETNAM.test(b);
        case "63":
            return REG_VALID.PHILIPPINES.test(b);
        case "62":
            return REG_VALID.INDONESIA.test(b);
        case "49":
            return REG_VALID.GERMANY.test(b);
        case "39":
            return REG_VALID.ITALY.test(b);
        case "33":
            return REG_VALID.FRENCH.test(b);
        case "7":
            return REG_VALID.RUSSIA.test(b);
        case "64":
            return REG_VALID.ZEALAND.test(b);
        case "31":
            return REG_VALID.NETHERLANDS.test(b);
        case "46":
            return REG_VALID.SWEDISH.test(b);
        case "380":
            return REG_VALID.UKRAINE.test(b);
        default:
            return !1
    }
}

function getNp() {
    var a = document.getElementById("select").getElementsByTagName("h3")[0].getElementsByTagName("b")[1].innerHTML;
    return a = a.substring(1)
}

function select_change(a) {
    a = $("#user_Email").val();
    "" != a && "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801" != a && CheckUserEmail()
}

function checkUserStatus(a, b, c) {
    $.ajax({
        type: "POST",
        url: "/VerifyShow.aspx",
        data: "_action\x3dcheckUserStatus\x26nationPrefix\x3d" + a + "\x26account\x3d" + b,
        success: function (a) {
            "0" == a ? ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef!\x3c/span\x3e'),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u53c2\u6570\u9519\u8bef\u6216\u4e0d\u5b8c\u6574!")) : "1" == a ? 1 == c ? ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html("\x3cspan style\x3d\"color:#f55732;\"\x3e\u8be5\u624b\u673a\u53f7\u5df2\u88ab\u6ce8\u518c\uff0c\u7acb\u5373\x3ca href\x3d'login.aspx'\x3e\u767b\u5f55\x3c/a\x3e\x3c/span\x3e"),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8be5\u624b\u673a\u53f7\u5df2\u88ab\u6ce8\u518c\uff0c\u7acb\u5373\x3ca href\x3d'login.aspx' class\x3d'c4'\x3e\u767b\u5f55\x3c/a\x3e")) : ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html("\x3cspan style\x3d\"color:#f55732;\"\x3e\u8be5\u624b\u673a\u53f7\u5df2\u7ed1\u5b9a\u5b89\u5168\u4e2d\u5fc3\uff0c\u7acb\u5373\x3ca href\x3d'login.aspx'\x3e\u767b\u5f55\x3c/a\x3e\u6216 \u66f4\u6362\u5176\u5b83\u624b\u673a\u53f7\u6ce8\u518c\x3c/span\x3e"),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8be5\u624b\u673a\u53f7\u5df2\u7ed1\u5b9a\u5b89\u5168\u4e2d\u5fc3\uff0c\u7acb\u5373\x3ca href\x3d'login.aspx'\x3e\u767b\u5f55\x3c/a\x3e \u6216\u66f4\u6362\u5176\u5b83\u624b\u673a\u53f7\u6ce8\u518c")) : "2" == a || "3" == a ? ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u8d26\u6237\u5df2\u6ce8\u9500\uff0c\u8bf7\u66f4\u6362\u5176\u4ed6\u624b\u673a\u53f7\u6ce8\u518c\u6216\u8054\u7cfb\u5ba2\u670d\x3c/span\x3e'),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8d26\u6237\u5df2\u6ce8\u9500\uff0c\u8bf7\u66f4\u6362\u5176\u4ed6\u624b\u673a\u53f7\u6ce8\u518c\u6216\u8054\u7cfb\u5ba2\u670d!")) : "200" == a ? 1 == c ? (nameVerify = !0,
                $("#email_tips").html("").hide(),
                $("#user_Email").parent().find("strong").show(),
                $("#user_Email").parent().removeClass("now"),
                $("#verify_phone").show()) : ($("#verify_phone").hide(),
                $("#user_Email").parent().parent().find(".reg_tips").html("\x3cspan style\x3d\"color:#f55732;\"\x3e\u8be5\u624b\u673a\u53f7\u5df2\u7ed1\u5b9a\u5b89\u5168\u4e2d\u5fc3\uff0c\u7acb\u5373\x3ca href\x3d'login.aspx'\x3e\u767b\u5f55\x3c/a\x3e\u6216 \u66f4\u6362\u5176\u5b83\u624b\u673a\u53f7\u6ce8\u518c\x3c/span\x3e"),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u8be5\u624b\u673a\u53f7\u5df2\u7ed1\u5b9a\u5b89\u5168\u4e2d\u5fc3\uff0c\u7acb\u5373\x3ca href\x3d'login.aspx'\x3e\u767b\u5f55\x3c/a\x3e \u6216\u66f4\u6362\u5176\u5b83\u624b\u673a\u53f7\u6ce8\u518c")) : "500" == a && ($("#user_Email").parent().parent().find(".reg_tips").html('\x3cspan style\x3d"color:#f55732;"\x3e\u7f51\u7edc\u5f02\u5e38!\x3c/span\x3e'),
                $("#user_Email").parent().parent().find(".layer_site").removeClass("layer_tips").addClass("layer_tips2").html("\u7f51\u7edc\u5f02\u5e38!"))
        }
    })
}

function cnzz(a) {
}
;