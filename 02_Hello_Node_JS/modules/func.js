// func.js
// require 함수 안에 불러온 모듈의 경로를 적는다.
// var.js의 module.exports에 담겨 있던 객체를 불러와
// func.js에서 사용하는 모습이다.
const { odd, even } = require("./var");

const checkOddOrEven = (num) => (num % 2 ? odd : even);

// module.exports에는 객체만 대입해야 하는 것이 아니라, 함수나 변수를 대입해도 된다.
module.exports = checkOddOrEven;
