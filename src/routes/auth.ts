import {Router} from 'express';
import {authController} from '../controller/auth';
export const authRoutes = Router()

authRoutes.use("/login", authController.login);

