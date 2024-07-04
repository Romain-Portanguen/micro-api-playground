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
    components: {
      schemas: {
        Book: {
          type: 'object',
          required: ['title', 'author', 'publishedDate'],
          properties: {
            id: {
              type: 'integer',
              description: 'The auto-generated id of the book',
            },
            title: {
              type: 'string',
              description: 'The title of the book',
            },
            author: {
              type: 'string',
              description: 'The author of the book',
            },
            publishedDate: {
              type: 'string',
              format: 'date',
              description: 'The publication date of the book',
            },
          },
          example: {
            id: 1,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            publishedDate: '1951-07-16',
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

export function setupSwagger(app: Express) {
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log("Swagger UI setup at /api-docs");
}
