const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse(
  "http://www.taeheon.io/?page=3&limit=108&category=nodejs&category=javascript"
);
const query = querystring.parse(parsedUrl.query);
// url의 query 부분을 자바스크립트 객체로 분해한다.
console.log("querystring.parse(): ", query);
// 분해된 query 객체를 문자열로 다시 조립한다.
console.log("querystring.stringfy(): ", querystring.stringify(query));
