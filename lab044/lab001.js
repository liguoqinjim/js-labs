var fs = require('fs');

fs.readFile('data/test.json', 'utf8', function (err, data) {
    console.log(data)
});