import { dbQuery, dbQueryFirst } from "../service/db";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export type Product = {
  id: number;
  name: string;
  price: number;
};
const insertProduct = async (product: Product) => {
  await prisma.product.create({
    data: product,
  });
};

const updateProduct = async (product: Product) => {
  await dbQuery(`UPDATE product SET name = ?, price = ? WHERE id = ?`, [
    product.name,
    product.price,
    product.id,
  ]);
  return getProduct(product.id);
};

const listProducts = async () => {
  const values = await dbQuery("SELECT * FROM product");
  return values as Product[];
};

const getProduct = async (id: number) => {
  const product = await dbQueryFirst("SELECT * FROM product WHERE id=?", [id]);
  return (product as Product) || undefined;
};

const deleteProduct = async (id: number) => {
  const product = await getProduct(id);
  await dbQueryFirst("DELETE FROM product WHERE id=?", [id]);

  return (product as Product) || undefined;
};

export const ProductModel = {
  insertProduct,
  listProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
