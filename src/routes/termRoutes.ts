import express from 'express';
import { termController } from '../controllers/termsController.js';
import { verifyJWT } from '../middleware/verifyJWT.js';
import { ROUTES } from '../utils/constants.js';

const termRoutes = express.Router();

termRoutes.use(verifyJWT);

termRoutes
  .route(ROUTES.TERMS.BASE)
  .get(termController.getAllTerms)
  .post(termController.createNewTerm)
  .patch(termController.updateTerm);

termRoutes
  .route(ROUTES.TERMS.ID)
  .get(termController.getTermById)
  .delete(termController.deleteTerm);

export { termRoutes };
