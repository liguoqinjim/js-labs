const fs = require('fs');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const data = fs.readFileSync('data/test.html', 'utf-8');
console.log(data);

const dom = new JSDOM(data, {runScripts: 'dangerously'});
console.log(dom.window);