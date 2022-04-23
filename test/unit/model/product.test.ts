import { expect, test, describe } from "@jest/globals";
import { ProductModel } from "../../../src/model/product";
import { prismaMock } from "../../lib/contextSingleton";
import { randomUUID } from "crypto";
describe("Function Model Products ", () => {
  test("Should create a new product", async () => {
    let createdAt = new Date();
    let updatedAt = new Date();
    let id = parseInt(randomUUID());
    const product = {
      id,
      createdAt,
      updatedAt,
      name: "Cadeira",
      price: 56.4,
    };
    prismaMock.product.create.mockResolvedValue(product);
    await expect(ProductModel.insertProduct(product)).resolves.toEqual({
      id,
      createdAt,
      updatedAt,
      name: "Cadeira",
      price: 56.4,
    });
  });
});
