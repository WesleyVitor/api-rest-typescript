import { Router } from "express";
import { productController } from "../controller/products";
import { verifyJWT } from "../service/middleware";

export const productRoutes = Router();
productRoutes.post("/",verifyJWT, productController.insertProduct);
productRoutes.get("/",verifyJWT, productController.listProducts);
productRoutes.get("/:id",verifyJWT, productController.getProduct);
productRoutes.delete("/:id",verifyJWT, productController.deleteProduct);
productRoutes.put("/:id",verifyJWT, productController.updateProduct);
