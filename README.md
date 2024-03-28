# Ecommerce-Back-End

## Description

In this application I created an API for an Ecommerce Site using Sequelize (ORM) and Express (Node.js Framework). Express helped build the routes for handling HTTP requests to my server for creating notes (POST request), fetching saved notes (GET request), and deleting notes (DELETE request). Sequelize helped me create data models that would map to my Database. This API is useful for enacting CRUD operatoins for the data from this Ecommerce Site. I also used dotenv to hide my Database credentials from the code.

### Take-Aways

- My motivation for this project was to increase my knowledge in server side code by using express to mange requests to my server, and Sequelize for object relational mapping.

- The problem my Ecommerce API solves is that it allows for the server and database to speak to one another and for external requests to access the Ecommerce Database.

- I learned about Node.js frameworks like Express to handle server requests and Sequelize (ORM) to handle the mapping to the mySQL Database.

## Installation

### Clone the Repository

```bash
git clone <repository_url>
```

### Navigate to the Project Directory

```bash
cd e-commerce-backend
```

### Install Dependencies
```bash
npm install
```

### Set up Environment Variables

- Create a .env file in the project root.
- Add the following variables to the .env file:

```
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
```

### Initialize the Database

- Use schema.sql in the db folder to create the database using MySQL shell commands.

## Usage

This appilcation is a Eccomerce API.

- Seed the Database by running `npm run seed` in your CLI
- Start the Server by running `npm start` in your CLI
- Using Insomnia or another API Client you can send GET, POST, PUT, and DELETE requests to the given endpoints from http://localhost:3001 to manipulate and read data from our Ecommerce database.

### Endpoints and Requests

#### Categories

- GET /api/categories: Get all categories.
- GET /api/categories/:id: Get a single category by ID.
- POST /api/categories: Create a new category.
- PUT /api/categories/:id: Update a category by ID.
- DELETE /api/categories/:id: Delete a category by ID.

#### Products

- GET /api/products: Get all products.
- GET /api/products/:id: Get a single product by ID.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update a product by ID.
- DELETE /api/products/:id: Delete a product by ID.

#### Tags

- GET /api/tags: Get all tags.
- GET /api/tags/:id: Get a single tag by ID.
- POST /api/tags: Create a new tag.
- PUT /api/tags/:id: Update a tag by ID.
- DELETE /api/tags/:id: Delete a tag by ID.


### Demo of the Application

Check out the application functionality in action: 

*Click the gif to view the full video from Google Drive*

[![Demo of the Application](images/demo.gif)](https://drive.google.com/file/d/1LMWZeoS0gkrzx14pSf4oakkeq4jFsN0Q/view)

## Credits

### Documentation

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/docs/latest/api/)
- [Sequelize](https://sequelize.org/)

## Dependencies

- [Sequelize](https://www.npmjs.com/package/sequelize)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Insomnia](https://insomnia.rest/)


## License

Please refer to license in the repo.