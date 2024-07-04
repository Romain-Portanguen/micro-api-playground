import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public publishedDate!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Book',
  }
);

export default Book;

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - publishedDate
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         publishedDate:
 *           type: string
 *           format: date
 *           description: The publication date of the book
 *       example:
 *         id: 1
 *         title: 'The Catcher in the Rye'
 *         author: 'J.D. Salinger'
 *         publishedDate: '1951-07-16'
 */
