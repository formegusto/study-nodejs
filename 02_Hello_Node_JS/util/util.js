const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated되었으니, 더 이상 사용하지 마세요!");
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
/*
  3
  (node:13055) DeprecationWarning: dontUseMe 함수는 deprecated되었으니, 더 이상 사용하지 마세요!
  (Use `node --trace-deprecation ...` to show where the warning was created)
  UZTuCJ8pGm0abCZvJ9QoMOqX4kE2GPcFaWLG17olZTXy2NZjOdt7QXJNa6ZA4llq2puQsTdhLig/rBo5+xMi/w==
*/
