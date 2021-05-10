jest.mock("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { isLoggedIn, isNotLoggedIn, verifyToken } = require("./middlewares");

// describe는 테스트를 그룹화해주는 역할을 한다.
// test 함수와 마찬가지로, 첫 번째 인수로는 설명, 두 번째 인수 함수는
// 그룹에 대한 내용이다.

// 실제 코드에서는 익스프레스가 req,res 객체와 next 함수를 인수로 넣었기에 사용할 수 있지만
// 테스트 환경에서는?
// 과감하게 가짜 객체와 함수를 만들어 넣으면 된다.
// 테스트의 역할은 코드나 함수가 제대로 실행되는지를 검사하고 값이 일치하는지를 검사하는 것이므로,
// 테스트 코드의 객체가 실제 익스프레스 객체가 아니어도 된다.
// 이렇게 가짜 객체, 가짜 함수는 넣는 행위를
// 모킹(mocking)이라고 한다.

describe("isLoggedIn", () => {
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();
  test("로그인되어 있으면 isLoggedIn이 next를 호출해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });

  test("로그인되어 있지 않으면 isLoggedIn이 에러를 응답해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    isLoggedIn(req, res, next);
    expect(res.status).toBeCalledWith(403);
    expect(res.send).toBeCalledWith("로그인 필요");
  });
});

describe("isNotLoggedIn", () => {
  const res = {
    redirect: jest.fn(),
  };
  const next = jest.fn();
  test("로그인되어 있으면 isNotLoggedIn이 에러를 응답해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isNotLoggedIn(req, res, next);
    expect(res.redirect).toBeCalledTimes(1);
  });
  test("로그인되어 있지 않으면 isNotLoggedIn이 next를 호출해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    isNotLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });
});
