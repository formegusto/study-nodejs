//path.js
const path = require("path");

const string = __filename;

console.log(path.sep);
// 경로 구분자
console.log(path.delimiter);
// 환경 변수의 구분자
console.log("--------------------------");
console.log(path.dirname(string));
// 파일이 위치한 폴더 경로
console.log(path.extname(string));
// 파일의 확장자
console.log(path.basename(string));
// 파일의 이름을 표시하고,
console.log(path.basename(string, path.extname(string)));
// 파일의 이름만 표시하려면 두번째에 확장자명을 넣어준다
console.log("--------------------------");
console.log(path.parse(string));
// 파일 경로를 root, dir, base, ext, name 으로 분리한다.
console.log(
  path.format({
    dir: "c:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
);
// path.parse() 한 객체를 파일 경로로 합친다.
console.log(path.normalize("C://users\\\\zerocho\\path.js"));
// /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환한다.
console.log("--------------------------");
console.log(path.isAbsolute("C:\\"));
// 파일의 경로가 절대 경로인지 상대경로인지를 true나 false로 알린다.
console.log(path.isAbsolute("./home"));
console.log(path.relative("C:\\users\\zerocho\\path.js", "C:\\"));
// 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알린다.
console.log(path.join(__dirname, "..", ".."));
// 하나의 경로로 합친다.
console.log(path.resolve(__dirname, ".."));
/*
  join과의 차이점은 /를 만나면 path.resolve는 절대 경로로 인식해서 앞의 경로를 무시하고 path.join은 상대 경로로 처리한다.
*/
