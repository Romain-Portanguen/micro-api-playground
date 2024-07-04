import { Router } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validateRequest';
import bookController from '../controllers/bookController';

const router = Router();
const { createBook, getBooks, updateBook, deleteBook } = bookController;

router.post(
  '/',
  [
    body('title').isString().notEmpty(),
    body('author').isString().notEmpty(),
    body('publishedDate').isISO8601().toDate(),
  ],
  validateRequest,
  createBook
);

router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;