import { Router } from "express";
import { productRoutes } from "./products";
import {authRoutes} from './auth';
export const apiRouter = Router();

apiRouter.use("/products", productRoutes);
apiRouter.use("/auth", authRoutes);