import express from 'express';
import { userController } from '../controllers/usersController.js';
import { ROUTES } from '../utils/constants.js';

const userRoutes = express.Router();

userRoutes
  .route(ROUTES.BASE)
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { userRoutes };
