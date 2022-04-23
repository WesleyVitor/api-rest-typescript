import { describe, test, expect } from "@jest/globals";
import supertest from "supertest";
import app from "../../../src/server";
describe("GET /products", () => {
  test("Should return status 200", async () => {
    const response = await supertest(app)
      .get("/api/v1/products/")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
  });
});

describe("GET /products/id", () => {
  describe("If found object", () => {
    test.todo("Should return status 200");
  });
  describe("If not found object", () => {
    test.todo("Should return status 404");
  });
  test.todo("Should return status 500");
});
