const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big3.txt");
readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream: ", process.memoryUsage().rss);
});
/*
    before:  19697664
    stream:  70557696
*/
