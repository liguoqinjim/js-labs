/**
 * Created by admin on 2017/1/23.
 */

var a = "0102030405060708";
for (var c = a.length, e = [], j = 0; j < c; j++) {
    e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
    // console.log((a.charCodeAt(j) & 255) << 24 - 8 * (j % 4));
}
console.log(e);

c = undefined;
w = c ? 1:2;
console.log("w=",w);