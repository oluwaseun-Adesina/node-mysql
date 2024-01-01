var dbConnection = require('../../config/db.config')

var Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all employee
Employee.getAllEmployees = (result) => {
    dbConnection.query('SELECT * FROM employee', (err, res) =>{
        if(err){
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get employee by id
Employee.getEmployeeById = (id, result) =>{
    dbConnection.query('SELECT * FROM employee WHERE id=?', id, (err, res)=>{
        if(err){
            result(null, err)
        }else{
            result(null, res)
        }  
    })
}

Employee.createEmployee = ( body, result) =>{
    // dbConnection.query('INSERT INTO ')
    dbConnection.query('INSERT INTO employee SET ?', body, (err, res)=>{
        if(err){
            result(null, err)
        }else{
            result(null, res)
        }
    })
}

Employee.updateEmployee = (id, employee, result) =>{
    dbConnection.query('UPDATE employee SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=? WHERE id=?', [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], (err, res)=>{
        if(err){
            result(null, err)
        }else{
            result(null, res)
        }
    })
}

Employee.deleteEmployee = (id, result) =>{
    dbConnection.query('DELETE FROM employee WHERE id=?', [id], (err, res)=>{
        if(err){
            result(null, err)
        }else{
            result(null, res)
        }
    })
}
module.exports = Employee;