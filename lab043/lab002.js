var fs = require('fs');
var esprima = require('esprima');

//读取js文件
fs.readFile('data/test.js', 'utf8', function (err, data) {
    result = esprima.tokenize(data);
    console.log(result);
});
