const fs = require("fs").promises;
const constants = require("fs").constants;

fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    return Promise.reject("이미 폴더 있음"); // 두번째 실행부터 동작
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("폴더 없음");
      return fs.mkdir("./folder"); // 첫 타이밍에 성공
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 만들기 성공");
    return fs.open("./folder/file.js", "w");
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공", fd);
    fs.rename("./folder/file.js", "./folder/newfile.js");
  })
  .then(() => {
    console.log("이름 바꾸기 성공!");
  })
  .catch((err) => {
    console.error(err);
  });
/*
    폴더 없음
    폴더 만들기 성공
    빈 파일 만들기 성공 FileHandle {
    close: [Function: close],
    [Symbol(kHandle)]: FileHandle {},
    [Symbol(kFd)]: 23,
    [Symbol(kRefs)]: 1,
    [Symbol(kClosePromise)]: null
    }
    이름 바꾸기 성공!
*/
