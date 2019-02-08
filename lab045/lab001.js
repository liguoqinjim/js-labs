var Buffer = require('buffer/').Buffer;

temp = "6255299cce5c4dc3ae0b9047025236c2SHATYO2019-01-14";
e = new Uint8Array(64);
e.__proto__ = Buffer.prototype;
e.write(temp, 0, 64, "utf-8");
console.log("e=", e);

e[48] = 128;



e.forEach(function (i) {
    console.log(i);
});