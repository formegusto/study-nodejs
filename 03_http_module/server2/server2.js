const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./server2.html");

      //   console.log(data);
      //   console.log(data.toString());

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

      // 버퍼 전송
      res.end(data);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(error.message);
    }
  })
  .listen(8080, () => {
    console.log("Server Listening!");
  });
