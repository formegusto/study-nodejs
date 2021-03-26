const zlib = require("zlib");
const fs = require("fs");

const readStream = fs.createReadStream("./readme5.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./readme5.txt.gzip");

readStream.pipe(zlibStream).pipe(writeStream);
