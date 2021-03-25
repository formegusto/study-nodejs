// require.js
console.log("require가 가장 위에 오지 않아도 된다.");

module.exports = "저를 찾아보세요.";

require("./var");

console.log("require.cache 입니다.");
console.log(require.cache);
/*
[Object: null prototype] {
  '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/require.js': Module {
    id: '.',
    path: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules',
    exports: '저를 찾아보세요.',
    parent: null,
    filename: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/require.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/node_modules',
      '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/node_modules',
      '/Users/formegusto/Desktop/formegusto/study/study-nodejs/node_modules',
      '/Users/formegusto/Desktop/formegusto/study/node_modules',
      '/Users/formegusto/Desktop/formegusto/node_modules',
      '/Users/formegusto/Desktop/node_modules',
      '/Users/formegusto/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/var.js': Module {
    id: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/var.js',
    path: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules',
    exports: { odd: '홀수입니다.', even: '짝수입니다.' },
    parent: Module {
      id: '.',
      path: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules',
      exports: '저를 찾아보세요.',
      parent: null,
      filename: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/require.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    filename: '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/var.js',
    loaded: true,
    children: [],
    paths: [
      '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/node_modules',
      '/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/node_modules',
      '/Users/formegusto/Desktop/formegusto/study/study-nodejs/node_modules',
      '/Users/formegusto/Desktop/formegusto/study/node_modules',
      '/Users/formegusto/Desktop/formegusto/node_modules',
      '/Users/formegusto/Desktop/node_modules',
      '/Users/formegusto/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  }
}
*/

console.log("require.main 입니다.");
console.log(require.main === module);
console.log(require.main.filename);
/*
true
/Users/formegusto/Desktop/formegusto/study/study-nodejs/02_Hello_Node_JS/modules/require.js
*/
