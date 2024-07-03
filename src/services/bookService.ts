import Book from '../models/book';

export class BookService {
  async createBook(data: Partial<Book>) {
    return Book.create(data);
  }

  async getBooks() {
    return Book.findAll();
  }

  async getBookById(id: number) {
    return Book.findByPk(id);
  }

  async updateBook(id: number, data: Partial<Book>) {
    const book = await Book.findByPk(id);
    if (book) {
      return book.update(data);
    }
    return null;
  }

  async deleteBook(id: number) {
    const book = await Book.findByPk(id);
    if (book) {
      return book.destroy();
    }
    return null;
  }
}

export default new BookService();
