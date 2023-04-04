import express from 'express';
import { termController } from '../controllers/termsController.js';
import { ROUTES } from '../utils/constants.js';

const termRoutes = express.Router();

termRoutes
  .route(ROUTES.BASE)
  .get(termController.getAllTerms)
  .post(termController.createNewTerm)
  .patch(termController.updateTerm)
  .delete(termController.deleteTerm);

export { termRoutes };
