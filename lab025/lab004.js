/*
 * version : 6.2.0.2886
 * resolution : 720*1280
 * description :通过找图接口在淘宝应用首页寻找聚划算的入口
 * 1.运行找图实例前，请先在设备中安装淘宝APP
 * 2.如需使用配置文件方式找图，请将压缩包resources.rar解压到当前用户的‘我的文档’文件夹下；目录结果应为：%我的文档%\resources\images\
 * 3.目标图片根据分辨率不同，存放到不同分别率文件下的应用目录中，不同分辨率目标图片应是对应分辨率设备使用tc截图功能截下的bmp图片上裁剪下来的，具体可参考实例
 * 4.配置文件详解如下
 * //注意：<>中内容为解说，在正式配置文件中不能存在！！！
 *
 * {
 *     "ResolutionMapFolder": {
 *         "DefaultSubFolder": "720x1280",
 *         "720*1280": "720x1280",
 *         "1080*1920": "1080x1920"
 *     },
 *     "IDMapImageFile": [
 *         {
 *             "ID": "juhuasuan",
 *             "APP": "taobao",
 *             "REGION": {
 *                 "x": 0,
 *                 "y": 0,
 *                 "width": 719,
 *                 "height": 1279
 *             },
 *             "IMAGEFILENAME": "ju.bmp"
 *         }
 *     ]
 * }
 */
define("version", "6.2.0.2886");
define("resolution", "720*1280");
define("requireVersion", "1.5.0.2865");

var device = Device.searchObject(sigmaConst.DevSelectOne);
print("当前分辨率："+device.width+"*"+device.height);
print("当前设备："+device.name)

/*
函数原型
Coord seekImage(String imageIDs, float sim)

在手机屏幕的指定矩形范围内，搜索指定图像，支持缩放
@param imageInfo: 图像信息对象
@param sim: 相似度，取值在范围[0.0f, 1.0f]

@return 找到图像的左上角坐标
**
*/

//配置参数
//目标图片ID，一个ID可以对应一个目标图片在不同分辨率下的图片，如果遇到未配置的分辨率会使用默认配置
//关于ID配置和文件存放，请参考《readme.txt》
var imageIDs = "juhuasuan";
//相似度
var sim = 0.6;
//启动淘宝应用，如果启动不成功不执行查找
if(device.runApp('com.taobao.taobao') == 0){
    //等待淘宝启动完成
    delay(10000);
    //开始查找
    var re = device.seekImage(imageIDs,sim)
    //判断是否找到目标，如找到，输出具体坐标，并点击，如未找到，输出返回值，和具体错误信息
    if(re != null){
        print("找到图片！！");
        print("坐标为："+"("+re.x+","+re.y+")");
        device.click(re.x,re.y);
    }else{
        print("未找到图片！！！");
        print("截图返回值："+re);
        print("具体的错误信息："+lastError());
    }
}else{
    print("淘宝应用启动失败");
}