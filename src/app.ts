import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(bodyParser.json());
app.use('/api', bookRoutes);
app.use(errorHandler);

export default app;
