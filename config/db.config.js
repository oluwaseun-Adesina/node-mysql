const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

dbConnection.connect(function(error){
    if(error) throw error;
    console.log('Database connected Successfullly')
})

module.exports = dbConnection;