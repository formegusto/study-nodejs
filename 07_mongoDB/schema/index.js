const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    // 몽고디비 쿼리 내용을 확인할 수 있는 명령어
    mongoose.set("debug", true);
  }
  mongoose.connect(
    // 'mongodb://아이디:비밀번호@localhost:27017/admin'
    "mongodb://formegusto:395789@localhost:27017/admin",
    {
      // 데이터 베이스
      dbName: "nodejs",
      // 안 넣어도 되지만 안 넣으면 콘솔에 에러 메시지 뜸
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.error("몽고디비 연결 에러", error);
      } else {
        console.error("몽고디비 연결 성공");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("몽고디비 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.");
  connect();
});

module.exports = connect;
