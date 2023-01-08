import Routes from "../routes/userRoutes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";
// const useSwaggerSpy = jest.fn();
const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock("express", () => {
  return () => ({
    use: useSpy,
    listen: listenSpy,
  });
});
describe("should test app configuration", () => {
  require("../app");
  test("should test swagger", () => {
    expect(useSpy).toHaveBeenCalledWith(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  });
  test("should test Routes", () => {
    expect(useSpy).toHaveBeenCalledWith(Routes);
  });
  test("should test listen", () => {
    expect(listenSpy).toHaveBeenCalledWith(3001);
  });
});
