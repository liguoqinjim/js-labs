$(function () {
    $btn1 = $("#btn1");


    var a = '{"rid":"R_SO_4_186016","offset":"20","total":"false","limit":"20","csrf_token":""}';
    var b = '0CoJUm6Qyw8W8jud';

    $btn1.click(function () {
        var c = CryptoJS.enc.Utf8.parse(b);
        console.log(c);
        var d = CryptoJS.enc.Utf8.parse("0102030405060708");
        console.log(d);
        var e = CryptoJS.enc.Utf8.parse(a);
        console.log(e);
        var f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC,
        });
        console.log(f);
        var b_liguoqinjim = f.toString(CryptoJS.enc.Base64);
        console.log(b_liguoqinjim);
    });


    //测试加密
    $btn3 = $("#btn3")
    $btn3.click(function () {
        var str = "helloworld";
        var key = "xphone123";
        var iv = "0102030405060708";

        str = CryptoJS.enc.Utf8.parse(str);
        key = CryptoJS.enc.Utf8.parse(key);
        iv = CryptoJS.enc.Utf8.parse(iv);

        var f = CryptoJS.AES.encrypt(str,key,{
            iv : iv,
            mode :CryptoJS.mode.CBC,

        });
        var text = CryptoJS.enc.Base64.stringify(f.ciphertext);
        console.log(text);

        //解密
        var w = CryptoJS.AES.decrypt(f,key,{
            iv : iv,
            mode :CryptoJS.mode.CBC
        });
        console.log(w.toString(CryptoJS.enc.Utf8));
    });
});

//a="{"rid":"R_SO_4_186016","offset":"60","total":"false","limit":"20","csrf_token":""}",b="0CoJUm6Qyw8W8jud"

//key:varc=CryptoJS.enc.Utf8.parse(b)
//

//ivCryptoJS.enc.Utf8.parse("0102030405060708")
//工作模式CBC

//结果
//gHPVST6jk9PvEgIDjnZzQuIztycxh3ejAG+RWP5JSyz1R3iKTyH5wF1LA5ULecu9d2cbAhpuYK0ecFuqCK5PEeSWS00U3hzB9mg0fSYOxVVT7m0YlSBNRqWhnZU7wKDT


