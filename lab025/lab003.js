/*
 * version : 6.2.0.2886
 * resolution : 720*1280
 * description :将所有手机上的通知栏消息保存到当前目录下的tmp/notification.txt中
 */
define("version", "6.2.0.2886");
define("resolution", "720*1280");
define('verbose',2)
define("requireVersion", "1.5.0.2865");

function printArrayObjects(y) {
    var cont = "";
    for (var i = 0; i < y.length; ++i) {
        var line = "";
        for (var j in y[i]) {
            if (j == "device") {
                ct = y[i][j].getName();
            } else {
                ct = y[i][j];
            }
            line += (line == "" ? "" : ", ") + j + ":" + ct;
        }
        cont += "[" + i + "]: { " + line + "  }\n";
    }
    return cont;
}

var file = "/tmp/notifications.txt"
var fs = require('fs');
var ntfn = new Notification(sigmaConst.ANY, sigmaConst.ANY, sigmaConst.ANY);
var gn = ntfn.getNotification();
var cont = printArrayObjects(gn);
try {
    fs.write(file, cont, {binary:false});
    print("File \"" + file + "\" saved.");
} catch (e) {
    print("Error: " + e);
}