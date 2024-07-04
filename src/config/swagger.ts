import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Book API',
      version: '1.0.0',
      description: 'API for managing a collection of books',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
