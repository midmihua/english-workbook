import express from 'express';
import { userController } from '../controllers/usersController.js';
import { verifyJWT } from '../middleware/verifyJWT.js';
import { ROUTES } from '../utils/constants.js';

const userRoutes = express.Router();

userRoutes.use(verifyJWT);

userRoutes
  .route(ROUTES.USERS.BASE)
  .get(userController.getAllUsers)
  .post(userController.createNewUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { userRoutes };
