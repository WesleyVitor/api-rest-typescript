import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};
const insertProduct = async (product: Product) => {
  await prisma.product.create({
    data: product,
  });
};

const updateProduct = async (product: Product) => {
  await prisma.product.update({
    data: {
      name: product.name,
      price: product.price,
    },
    where: {
      id: product.id,
    },
  });

  return getProduct(product.id);
};

const listProducts = async () => {
  const values = await prisma.product.findMany();
  return values as Product[];
};

const getProduct = async (id_product: number) => {
  const product = await prisma.product.findFirst({
    where: {
      id: id_product,
    },
  });

  return (product as Product) || undefined;
};

const deleteProduct = async (id_product: number) => {
  const product = await getProduct(id_product);
  //await dbQueryFirst("DELETE FROM product WHERE id=?", [id]);
  await prisma.product.delete({
    where: {
      id: id_product,
    },
  });
  return (product as Product) || undefined;
};

export const ProductModel = {
  insertProduct,
  listProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
