/**
 * Created by admin on 2017/4/10.
 */

version_str = "{Version: 1002}";
console.log(version_str);

//正则表达式
var str = "Visit Runoob!";
var n = str.search(/Runoob/i);
console.log("n="+n);

var a = str.match(/Runoob/i);
console.log("a=",a[0]);

version = version_str.match(/\d+/g);
console.log(version);