const mysql = require('mysql')


const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_mysql",
})

dbConnection.connect(function(error){
    if(error) throw error;
    console.log('Database connected Successfullly')
})

module.exports = dbConnection;