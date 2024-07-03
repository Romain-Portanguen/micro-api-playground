import sequelize from '../config/database';
import Book from '../models/book';

const resetDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database has been reset.');

    await Book.bulkCreate([
      { title: 'Book 1', author: 'Author 1', publishedDate: new Date('2021-01-01') },
      { title: 'Book 2', author: 'Author 2', publishedDate: new Date('2022-02-02') },
    ]);

    console.log('Initial data has been inserted.');
  } catch (error) {
    console.error('Failed to reset database:', error);
  } finally {
    await sequelize.close();
  }
};

resetDatabase();
