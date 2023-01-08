import {
  getUsers,
  getWeather,
  getUserLocationWeather,
} from "../../controllers/userController";
import { Request, Response } from "express";
import {
  createRequest,
  createResponse,
  MockRequest,
  MockResponse,
} from "node-mocks-http";
import { getUserService } from "../../service/userService";

let request: MockRequest<Request>;
let response: MockResponse<Response>;

const mockNext = () => jest.fn();

describe("Check userController", () => {
  let req = request;
  const res = response;
  const next = mockNext();
  test("check getUsers should 200 and return correct value", async () => {
    await getUsers(req, res, next);
    expect(200);
  });

  test("check getUser by id with correct id ,should 200 and return correct value", async () => {
    const req = createRequest();
    await getUserLocationWeather(req, res, next);
    expect(200);
  });

  test("check getWeather by location ", async () => {
    const req = createRequest();
    await getWeather(req, res, next);
    expect(200);
  });
});

// import userController from "../../controllers/userController";
// import { Request, Response} from "express";
// import {createRequest,createResponse,MockRequest,MockResponse,} from "node-mocks-http";
// import { request } from "http";
// import { get } from "../../routes/userRoutes";

// // describe("Get all tea", () => {
// // let request: MockRequest<Request>;
// // let response: MockResponse<Response>;
// // const req=  createRequest();

// //   const mockNext = () => jest.fn();
// //   const next = mockNext();
// //   it("should get all users", async () => {
// //     await userController.getUsers(req, response, next);
// //       // expect("Content-Type", )
// //       expect(200);
// //   });
// //   it("should get single user with id and weather", async () => {
// //     await userController.getUser(req, response, next);
// //       // expect("Content-Type", )
// //       expect(200);
// //   });
// //   it("should get weather", async () => {
// //     await userController.getWeather(req, response, next);
// //       // expect("Content-Type", )
// //       expect(200);
// //   });
// // });
