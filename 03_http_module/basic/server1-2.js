/*
	여러 서버를 한번에 실행할 수도 있다.
*/
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.write("<h2>나는 서버 1번이야!</h2>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중 입니다.");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.write("<h2>나는 서버 2번이야!</h2>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8081, () => {
    console.log("8081번 포트에서 서버 대기중 입니다.");
  });
