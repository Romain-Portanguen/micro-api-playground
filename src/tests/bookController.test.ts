import request from 'supertest';
import app from '../app';
import sequelize from '../config/database';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Book Controller', () => {
  it('should create a new book', async () => {
    const response = await request(app)
      .post('/api/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2023-01-01'
      });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Book');
  });

  it('should get all books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
