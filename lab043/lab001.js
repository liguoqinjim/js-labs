var esprima = require('esprima');
var program = 'const answer = 42';

result = esprima.tokenize(program);
console.log(result);