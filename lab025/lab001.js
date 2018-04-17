/*
 * description : 判断设备是否安装微信
 */
// define("version", "6.2.0.2886");
// define("resolution", "720*1280");
// define("requireVersion", "1.5.0.2865");

//获取当前主控设备对象
var device = Device.getMain();

//获取当前主控设备已安装的APP包名，ret为Array对象
var ret = device.getInstalledAPKList();

//判断"com.tencent.mm"是否存在于ret中
if (ret.indexOf("com.tencent.mm") >= 0) {
    print("该设备存在微信");
} else {
    print("该设备不存在微信");
}