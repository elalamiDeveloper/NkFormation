import express from 'express';

import {
  getAllClients,
  createClient,
  getClientById,
  updateClientById,
  deleteClientById,
} from '../controllers/clientsControllers.js';

const router = express.Router();

router.route('/').get(getAllClients).post(createClient);

router
  .route('/:id')
  .get(getClientById)
  .patch(updateClientById)
  .delete(deleteClientById);

export { router as clientsRouter };
