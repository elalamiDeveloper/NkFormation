import express from 'express';

import { getAllClients } from '../controllers/clientsControllers.js';

const router = express.Router();

router.route('/').get(getAllClients);

export { router as clientsRouter };
