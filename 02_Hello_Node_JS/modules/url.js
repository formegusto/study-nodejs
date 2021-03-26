const url = require("url");

const { URL } = url;
// WHATWG의 url
// username, password ,origin, searchParams 존재
const myURL = new URL(
  "http://www.naver.com/book/bookList.aspx?sercated=001001000#anchor"
);
console.log("new URL(): ", myURL);
console.log("url.format(): ", url.format(myURL));
console.log("-----------------------------------------");
// 기존 node url
const parsedUrl = url.parse(
  "http://www.naver.com/book/bookList.aspx?sercated=001001000#anchor"
);
console.log("url.parse(): ", parsedUrl);
console.log("url.format(): ", url.format(parsedUrl));
