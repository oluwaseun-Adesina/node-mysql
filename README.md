# Project Name

## Description

This project is a web application that allows users to manage employees. It provides features such as adding new employees, viewing employee details, updating employee information, and deleting employees.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm
- MySQL

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:
    ```
    git clone https://github.com/username/projectname.git
    ```
2. Navigate to the project directory:
    ```
    cd projectname
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Create a `.env` file in the root directory of the project, and add your database configuration:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=database_name
    ```
5. Run the application:
    ```
    npm start
    ```

## Connecting the Database

The application uses MySQL for data storage. The database connection is configured in the `db.config.js` file. You need to set your database host, user, password, and database name in the `.env` file.

## Built With

- [Node.js](https://nodejs.org/) - The runtime environment
- [Express.js](https://expressjs.com/) - The web framework used
- [MySQL](https://www.mysql.com/) - The database used

## Authors

- **Your Name** - *Initial work* - [Oluwaseun Adesina](https://github.com/oluwaseun-Adesina)
