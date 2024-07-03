import sequelize from '../config/database';
import Book from '../models/book';
import faker from 'faker';

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database has been reset.');

    const books = [];
    for (let i = 0; i < 25; i++) {
      books.push({
        title: faker.lorem.words(3),
        author: faker.name.findName(),
        publishedDate: faker.date.past(10).toISOString().split('T')[0],
      });
    }

    await Book.bulkCreate(books);

    console.log('Initial data has been inserted.');
  } catch (error) {
    console.error('Failed to seed database:', error);
  } finally {
    await sequelize.close();
  }
};

seedDatabase();
