process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
  console.log("실행됩니다!");
}, 2000);
/*
예기치 못한 에러 Error: 서버를 고장내주마!
    at Timeout._onTimeout (/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/error/error4.js:6:9)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
실행됩니다!
예기치 못한 에러 Error: 서버를 고장내주마!
    at Timeout._onTimeout (/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/error/error4.js:6:9)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
예기치 못한 에러 Error: 서버를 고장내주마!
    at Timeout._onTimeout (/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/error/error4.js:6:9)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
예기치 못한 에러 Error: 서버를 고장내주마!
    at Timeout._onTimeout (/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/error/error4.js:6:9)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
*/
