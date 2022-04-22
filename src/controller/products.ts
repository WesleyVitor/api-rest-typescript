import { Request, Response } from "express";
import { Product, ProductModel } from "../model/product";
import { badRequest, internalServerError, notFound } from "../service/util";
const insertProduct = (req: Request, res: Response) => {
  {
    const product = req.body;
    if (!product) {
      return badRequest(res, "Produto Invalido");
    }
    if (!product.name) {
      return badRequest(res, "Informe o nome");
    }
    if (!(parseFloat(product.price) > 0)) {
      return badRequest(res, "Informe o Preço");
    }
  }

  const product = req.body as Product;
  return ProductModel.insertProduct(product)
    .then(() => res.status(200).json({ msg: "OK" }))
    .catch((err) => internalServerError(res, err));
};

const updateProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if (!(parseFloat(id.toString()) > 0)) {
      return badRequest(res, "Informe o identificador");
    }
    const product = req.body;
    if (!product) {
      return badRequest(res, "Produto Invalido");
    }
    if (!product.name) {
      return badRequest(res, "Informe o nome");
    }
    if (!(parseFloat(product.price) > 0)) {
      return badRequest(res, "Informe o Preço");
    }

    const productSaved = await ProductModel.getProduct(id);
    if (!productSaved) {
      return notFound(res);
    }
  }

  const product = req.body as Product;
  return ProductModel.updateProduct(product)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => internalServerError(res, err));
};

const listProducts = ({}: Request, res: Response) => {
  ProductModel.listProducts()
    .then((products) => {
      if (products) {
        return res.status(200).json(products);
      } else {
        return notFound(res);
      }
    })
    .catch((err) => internalServerError(res, err));
};

const getProduct = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if (!(parseFloat(id.toString()) > 0)) {
      return badRequest(res, "Informe o identificador");
    }
  }

  ProductModel.getProduct(id)
    .then((product) => {
      if (product) {
        return res.json(product);
      } else {
        return notFound(res);
      }
    })
    .catch((err) => internalServerError(res, err));
};

const deleteProduct = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if (!(parseFloat(id.toString()) > 0)) {
      return badRequest(res, "Informe o identificador");
    }
  }

  ProductModel.deleteProduct(id)
    .then((product) => {
      if (product) {
        return res.json(product);
      } else {
        return notFound(res);
      }
    })
    .catch((err) => internalServerError(res, err));
};

export const productController = {
  insertProduct,
  listProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
