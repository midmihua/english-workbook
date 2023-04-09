import express from 'express';
import { authController } from '../controllers/authController.js';
import { loginLimiter } from '../middleware/loginLimiter.js';
import { ROUTES } from '../utils/constants.js';

const authRoutes = express.Router();

authRoutes.route(ROUTES.AUTH.BASE).post(loginLimiter, authController.login);

authRoutes.route(ROUTES.AUTH.LOGOUT).post(authController.logout);

authRoutes.route(ROUTES.AUTH.REFRESH).get(authController.refresh);

export { authRoutes };
