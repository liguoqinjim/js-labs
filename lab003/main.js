/**
 * Created by admin on 2017/4/10.
 */

function say(a) {
    console.log("hello1" + a);
}
function say(a, b) {
    console.log("hello2" + a + b);
}

function test() {
    var str = '总共传了'+arguments.length+'个参数\n';
    for (var i = 0; i < arguments.length; i++) {
        str += '第' + (i + 1) + '个参数值：' + arguments[i] + '\n';
    }
    console.log(str);
}

function main() {
    say("xiaoming");
    say("xiaoming", "xiaolan");


    test("a");
    test("a","b");
    test("a","b","c");
}
main();