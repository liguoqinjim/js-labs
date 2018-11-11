var fs = require('fs');

fs.readFile('data/test.json', 'utf8', function (err, data) {
    console.log(data)
});

//同步读取
var data = fs.readFileSync('data/test.json', 'utf8');
console.log(data);