import { expect, test, describe } from "@jest/globals";
import { ProductModel } from "../../../src/model/product";
import { prismaMock } from "../../lib/contextSingleton";
//import { randomUUID } from "crypto";

describe("Function Model Products ", () => {
  test("Should update a existed product", async () => {
    let createdAt = new Date();
    let updatedAt = new Date();

    const product = {
      id: 1,
      createdAt,
      updatedAt,
      name: "Cadeira",
      price: 56.4,
    };

    prismaMock.product.update.mockResolvedValue(product);

    await expect(ProductModel.updateProduct(product)).resolves.toEqual({
      id: 1,
      createdAt,
      updatedAt,
      name: "Cadeira",
      price: 56.4,
    });
  });

  test("Should return a array of products", async () => {
    prismaMock.product.findMany.mockResolvedValue([
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "Cadeira",
        price: 56.4,
      },
    ]);
    await expect(ProductModel.listProducts()).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        }),
      ])
    );
  });
});
