![micro-api-playground](https://socialify.git.ci/Romain-Portanguen/micro-api-playground/image?font=Raleway&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark)

<h3 align="center">
Micro API playground 🚧
</h3>

<p align="center">
<img src="https://img.shields.io/badge/-Typescript-05122A?style=plastic&amp;logo=Typescript&amp;color=2B343B" alt="shields">
<img src="https://img.shields.io/badge/-Nodejs-05122A?style=plastic&amp;logo=Nodejs&amp;color=2B343B" alt="shields">
</p>

**Micro API Playground** is a Node.js app for managing a book collection. This API allows creating, retrieving, updating, and deleting books entries in a PostgreSQL database.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- PostgreSQL

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Romain-Portanguen/micro-api-playground.git
    cd micro-api-playground
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file at the root of the project (view the `.env.example` file):

    ```bash
    touch .env
    ```

4. Initialize the database:

    ```bash
    npm run reset:db
    npm run seed:db
    ```

## Running the Application

To run the application in development mode, use:

```bash
npm start
```

The application will be available at <http://localhost:4000>.

## API Documentation

Swagger API documentation is available at <http://localhost:4000/api-docs>.

## npm Scripts

- **build** : Compiles TypeScript code to JavaScript in the dist folder.
- **reset:db** : Resets the database.
- **seed:db** : Seeds the database with test data.
- **start** : Starts the application.
- **test** : Runs unit tests with Jest.

## Project Structure

```bash
src
├── @types
│   └── faker.d.ts
├── app.ts
├── config
│   ├── database.ts
│   └── swagger.ts
├── controllers
│   └── bookController.ts
├── middlewares
│   ├── errorHandler.ts
│   └── validateRequest.ts
├── models
│   └── book.ts
├── routes
│   └── bookRoutes.ts
├── script
│   ├── resetDatabase.ts
│   └── seedDatabase.ts
├── server.ts
├── services
│   └── bookService.ts
├── tests
│   └── bookController.test.ts
└── utils
    └── logger.ts
```

## Tests

Unit tests are written using Jest. To run the tests, use:

```bash
npm test
```

## Author

Romain Portanguen

## License

This project is licensed under the ISC License. See the LICENSE file for details.
