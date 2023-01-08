// import userRoutes from '../../routes/userRoutes'
"use strict";
import {
  getUsers,
  getWeather,
  getUserLocationWeather,
} from "../../controllers/userController";
const getSpy = jest.fn();

jest.doMock("express", () => {
  return {
    Router() {
      return {
        get: getSpy,
      };
    },
  };
});

describe("should test router", () => {
  test("should test get users", () => {
    require("../../routes/userRoutes");
    expect(getSpy).toHaveBeenCalledWith("/users", getUsers);
  });
  test("should test get user by id", () => {
    require("../../routes/userRoutes");
    expect(getSpy).toHaveBeenCalledWith("/weather/:location", getWeather);
  });
  test("should test weather by location", () => {
    require("../../routes/userRoutes");
    expect(getSpy).toHaveBeenCalledWith(
      "/user/weather/:id",
      getUserLocationWeather
    );
  });
  require("../../models/userModel");
  test("should Test User Model", () => {
  const UserModel = require("./../../models/userModel");
    console.log("test work");
  });
});
