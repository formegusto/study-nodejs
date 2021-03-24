const { odd, even } = require("./var");
const checkNumber = require("./func");

const checkStringOddOrEven = (str) => (str.length % 2 ? odd : even);

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));

// require 함수나, module 객체는 따로 선언하지 않았음에도 사용할 수 있다.
// 이들이 바로 노드에서 제공하는 내장 객체이기 때문이다.
