const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

{
  /* <Buffer ec a0 80 eb 8a 94 20 eb 85 b8 ed 83 9c ed 97 8c ec 9e 85 eb 8b 88 eb 8b a4 2e>
저는 노태헌입니다. */
}
