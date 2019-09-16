var JSDOM = require('jsdom').JSDOM;
var Readability = require('./readability/index.js').Readability;
var fs = require('fs');


var doc = new JSDOM("<body>Here's a bunch of text</body>", {
    url: "https://www.example.com/the-page-i-got-the-source-from",
});
let reader = new Readability(doc.window.document);
let article = reader.parse();

console.log("article=", article);

//读取文件
//同步读取
var data = fs.readFileSync('data/3UC6nkQ_ydT9Fl-Il0SM2A.html', 'utf8');
var doc2 = new JSDOM(data,{});
let reader2 = new Readability(doc.window.document);
let article2 = reader2.parse();
console.log("article2=",article2);