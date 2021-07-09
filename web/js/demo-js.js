"use strict";

const uri = "http://x.com:80/path/file.php?x=1&y=你好&z=s(a + b)#anchor";

const encodedURI = encodeURI(uri);
console.log(encodedURI);
const encodedURIComponent = encodeURIComponent(uri);
console.log(encodedURIComponent);

console.log(uri === decodeURI(encodedURI));
console.log(uri === decodeURIComponent(encodedURIComponent));

// 多次处理
console.log(encodeURI(encodedURI));
console.log(encodeURIComponent(encodedURIComponent));

// 多次处理过的数据需要多次还原
console.log(uri === decodeURI(decodeURI(encodeURI(encodedURI))));       // true
console.log(uri === decodeURIComponent(decodeURIComponent(encodeURIComponent(encodedURIComponent)))); // true

/** encodeURIComponent() 和 encodeURI 有以下几个不同点 */
var set1 = ";,/?:@&=+$";  // 保留字符
var set2 = "-_.!~*'()";   // 不转义字符
var set3 = "#";           // 数字标志
var set4 = "ABC abc 123"; // 字母数字字符和空格

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)