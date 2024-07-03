import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';
import sequelize from './config/database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use('/api', bookRoutes);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

export default app;
