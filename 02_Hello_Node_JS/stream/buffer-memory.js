const fs = require("fs");

console.log("before: ", process.memoryUsage().rss);

const data1 = fs.readFileSync("./big.txt");
fs.writeFileSync("./big2.txt", data1);
console.log("buffer: ", process.memoryUsage().rss);

/*
    before:  19705856
    buffer:  1010786304
*/
