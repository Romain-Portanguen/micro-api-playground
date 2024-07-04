import { Request, Response } from 'express';
import bookService from '../services/bookService';
import logger from '../utils/logger';

export class BookController {
  async createBook(req: Request, res: Response) {
    try {
      const book = await bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error: any) {
      logger.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async getBooks(req: Request, res: Response) {
    try {
      const books = await bookService.getBooks();
      res.status(200).json(books);
    } catch (error: any) {
      logger.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async getBookById(req: Request, res: Response) {
    try {
      const book = await bookService.getBookById(parseInt(req.params.id, 10));
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error: any) {
      logger.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async updateBook(req: Request, res: Response) {
    try {
      const book = await bookService.updateBook(parseInt(req.params.id, 10), req.body);
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error: any) {
      logger.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const book = await bookService.deleteBook(parseInt(req.params.id, 10));
      if (book) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error: any) {
      logger.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BookController();
