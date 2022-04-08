import { Router } from "express";
import { productRoutes } from "./products";

export const apiRouter = Router();

apiRouter.use("/products", productRoutes);
