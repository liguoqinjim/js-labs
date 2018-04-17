/*
 * version : 6.2.0.2886
 * resolution : 720*1280
 * description : 通过聊天软件发送应用名称，打开对应的应用
 */

//打印出消息是哪个app发送，和消息内容，并根据消息内容启动应用
function runApp(dev, app, text) {
    //打印出是哪个app发送的信息
    print(app)
    //打印出具体的消息内容
    print(text)
    //根据收到的信息特点处理信息，以获取有效内容
    var textToArray = text.split(': ')
    print(textToArray[1]);
    //根据消息内容启动对应的应用
    if(textToArray[1]=="设置"){
        dev.runApp("com.android.settings");
    }
    if(textToArray[1]=="相机"){
        dev.runApp("com.android.camera");
    }
    if(textToArray[1]=="联系人"){
        dev.runApp("com.android.contacts");
    }
    if(textToArray[1]=="短信"){
        dev.runApp("com.android.mms");
    }
}

var device = Device.searchObject(sigmaConst.DevSelectOne);

//设置消息内容为'相机'的消息过滤
var notification = new Notification(device, sigmaConst.Any,sigmaConst.Any);
//设置监听器，当收到对应消息是会启动对应的回调函数，启动相应的应用
notification.setListener(runApp);