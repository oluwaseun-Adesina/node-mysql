const express = require('express');
const app = express();
const port = process.env.PORT||3000;

app.use(express.json())
app.use(express.urlencoded({extended: false})) // for parsing application/x-www-form-urlencoded 

app.get("/",(req, res)=>{
    res.send("Hello World")
});

const employeeRoutes = require('./src/routes/employee.route')

app.use('/api/v1/employee', employeeRoutes)

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})