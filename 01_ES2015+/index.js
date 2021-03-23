if (true) {
  var x = 1;
}
console.log(x);

// if (true) {
//   let y = 3;
// }
// console.log(y); // ReferenceError: y is not defined

const a = 0;
// a = 1; // TypeError: Assignment to constant variable.

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 ${result2} 입니다.`;
console.log(string2); // 1 더하기 2는 3 입니다.

var sayNode = function () {
  console.log("Node");
};
var es = "ES";

const newObject = {
  sayJS() {
    // 메서드 축약 표현
    console.log("JS");
  },
  sayNode, // 프로퍼티 축약
  [es + 6]: "Fantastic", // 키
};
newObject.sayJS();
newObject.sayNode();
console.log(newObject.ES6);

var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    const that = this;
    this.friends.forEach(function (friend) {
      // 안에서 일반 함수로 호출되어서
      // this는 전역 객체를 가리킨다
      // 그래서 변수로 넘겨주는 방식을 사용한다.
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

var relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    this.friends.forEach((friend) => {
      // 상위 스코프에서 this를 찾는다.
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();

const candyMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const {
  getCandy,
  status: { count },
} = candyMachine;

console.log(getCandy);
console.log(count);

const array = ["nodeJS", {}, 10, true];
const [node, obj, , bool] = array;
console.log(node, obj, bool);

class Human {
  constructor(type) {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    console.log("h-a-a-a-m");
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    console.log(`${this.name} ${this.lastName}`);
  }
}

const newZero = new Zero("human", "Zero", "Cho");
console.log(Human.isHuman(newZero)); // true

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});
// 다른 코드가 들어갈 수 있다.
// promise
//   .then((message) => {
//     // resolve 시 실행
//     console.log(message);
//   })
//   .catch((message) => {
//     // reject 시 실행
//     console.log(message);
//   })
//   .finally(() => {
//     // 여부에 상관 없이 실행
//     console.log("무조건");
//   });

promise
  .then((msg) => {
    return new Promise((resolve, reject) => {
      console.log(msg);
      resolve("성공2");
    });
  })
  .then((msg) => {
    return new Promise((resolve, reject) => {
      console.log(msg);
      resolve("성공3");
    });
  })
  .then((msg) => {
    return new Promise((resolve, reject) => {
      console.log(msg);
      reject("이제 실패1");
    });
  })
  .catch((msg) => {
    return new Promise((resolve, reject) => {
      reject("이제 실패2");
    });
  })
  .catch((msg) => {
    console.log(msg);
  })
  .finally(() => {
    console.log("나는 마지막");
  });

// 성공
// 성공2
// 성공3
// 이제 실패2
// 나는 마지막

// const promise1 = Promise.resolve("성공1");
// const promise2 = Promise.resolve("성공2");
// Promise.all([promise1, promise2])
//   .then((result) => {
//     console.log(result); // [ '성공1', '성공2' ]
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // const failPromise = Promise.reject("실패!");
// async function promiseTest() {
//   try {
//     const successMsg = await Promise.resolve("성공!");
//     console.log(successMsg);

//     await Promise.reject("실패!");
//   } catch (error) {
//     console.log(error);
//   }
// }
// promiseTest();

// const promise1 = Promise.resolve("성공1");
// const promise2 = Promise.resolve("성공2");
// (async () => {
//   for await (_promise of [promise1, promise2]) {
//     console.log(_promise);
//   }
// })();

// async function findAndSaveUser(Users) {}
// findAndSaveUser().then(() => {
//   console.log("끝!");
// });
// // 또는
// (async () => {
//   const result = await findAndSaveUser();
//   console.log("끝!");
// })();
