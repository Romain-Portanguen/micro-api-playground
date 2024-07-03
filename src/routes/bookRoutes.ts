import { Router } from 'express';
import bookController from '../controllers/bookController';

const router = Router();

router.post('/books', bookController.createBook);
router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

export default router;
