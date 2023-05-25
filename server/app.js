import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { clientsRouter } from './routes/index.js';
import { globalErrorHandler } from './controllers/errorsControllers.js';
import { urlNotFoundError } from './middlewares/index.js';

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/v1/clients', clientsRouter);
app.all('*', urlNotFoundError);

// ERRORS Handling
app.use(globalErrorHandler);

export { app };
