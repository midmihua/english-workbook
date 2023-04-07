import express from 'express';
import { termController } from '../controllers/termsController.js';
import { ROUTES } from '../utils/constants.js';

const termRoutes = express.Router();

termRoutes
  .route(ROUTES.BASE)
  .get(termController.getAllTerms)
  .post(termController.createNewTerm)
  .patch(termController.updateTerm);

termRoutes
  .route(`${ROUTES.BASE}${ROUTES.TERMS.ID}`)
  .get(termController.getTermById)
  .delete(termController.deleteTerm);

export { termRoutes };
