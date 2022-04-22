import { describe, test, expect } from "@jest/globals";
import supertest from "supertest";
import app from "../src/server";
describe("API root suite", () => {
  test("should return object with value of msg key ok baby", async () => {
    const response = await supertest(app).get("/");
    expect(response.body.msg).toBe("Ok Baby");
  });
});
