import { Router } from "express";
import { productController } from "../controller/products";

export const productRoutes = Router();
productRoutes.post("/", productController.insertProduct);
productRoutes.get("/", productController.listProducts);
productRoutes.get("/:id", productController.getProduct);
productRoutes.delete("/:id", productController.deleteProduct);
productRoutes.put("/:id", productController.updateProduct);
