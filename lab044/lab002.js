var fs = require('fs');

//异步方法
fs.writeFile('data/message1.txt', '这是第一行',function(err){
    if(err) console.log('写文件操作失败');
    else console.log('写文件操作成功');
});

//同步方法
fs.writeFileSync('data/message2.txt','这是第一行');