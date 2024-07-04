import express from 'express';
import bookRoutes from './routes/bookRoutes';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandler';
import { setupSwagger } from './config/swagger';

const app = express();
setupSwagger(app);

app.use(bodyParser.json());
app.use(express.json());
app.use('/api', bookRoutes);
app.use(errorHandler);

export default app;
