$(function () {
    $btn1 = $("#btn1");


    var a = '{"rid":"R_SO_4_186016","offset":"60","total":"false","limit":"20","csrf_token":""}';
    var b = '0CoJUm6Qyw8W8jud';

    $btn1.click(function () {
        var c = CryptoJS.enc.Utf8.parse(b);
        var d = CryptoJS.enc.Utf8.parse("0102030405060708");
        var e = CryptoJS.enc.Utf8.parse(a);
        var f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        var b_liguoqinjim = f.toString();
        console.log(b_liguoqinjim);
    });
});

//a="{"rid":"R_SO_4_186016","offset":"60","total":"false","limit":"20","csrf_token":""}",b="0CoJUm6Qyw8W8jud"

//key:varc=CryptoJS.enc.Utf8.parse(b)
//

//ivCryptoJS.enc.Utf8.parse("0102030405060708")
//工作模式CBC

//结果
//gHPVST6jk9PvEgIDjnZzQuIztycxh3ejAG+RWP5JSyz1R3iKTyH5wF1LA5ULecu9d2cbAhpuYK0ecFuqCK5PEeSWS00U3hzB9mg0fSYOxVVT7m0YlSBNRqWhnZU7wKDT


