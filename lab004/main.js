/**
 * Created by admin on 2017/4/11.
 */

var $text1 = $('#text1');
var $text2 = $('#text2');

$('#btn1').click(function () {
    console.log("text1:" + $text1.val());
    localStorage.setItem("text1",$text1.val());
});

$('#btn2').click(function (){
    text2 = localStorage.getItem("text1");
    console.log("text2="+text2);
    $text2.val(text2);
});