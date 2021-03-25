// var.js
const odd = "홀수입니다.";
const even = "짝수입니다.";

// module.exports = {
//   odd,
//   even,
// };

console.log(module.exports === exports); // true

exports.odd = odd;
exports.even = even;
