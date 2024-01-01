const Employee = require('../models/employee.model')
const EmployeeModel = require('../models/employee.model')

// get all employee list
exports.getEmployeeList = (req, res) =>{
    
    EmployeeModel.getAllEmployees((err, employees) =>{
        if(err){
            res.json(err)
        }
        res.json(employees)
    })
}

// get employee by id
exports.getEmployeeById = (req, res) =>{

    const {id} = req.params
    Employee.getEmployeeById(id, (err, employee)=>{
        if(err){
            res.json(err)
        }
        res.json(employee)
    })
}

// create employee
exports.createEmployee = (req, res) =>{


 
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({success: false, message: 'Please fill all fields'})
    }else{
        // validate input for first_name, last_name, email, phone, organization, designation, salary
        if(!req.body.first_name){
            res.status(400).send({success: false, message: 'Please fill first_name field'})
        } else if(!req.body.last_name){
            res.status(400).send({success: false, message: 'Please fill last_name field'})
        }
        else if(!req.body.email){
            res.status(400).send({success: false, message: 'Please fill email field'})
        }
        else if(!req.body.phone){
            res.status(400).send({success: false, message: 'Please fill phone field'})
        }
        else if(!req.body.organization){
            res.status(400).send({success: false, message: 'Please fill organization field'})
        }
        else if(!req.body.designation){
            res.status(400).send({success: false, message: 'Please fill designation field'})
        }
        else if(!req.body.salary){
            res.status(400).send({success: false, message: 'Please fill salary field'})
        }
        else{
            const employee = new Employee(req.body)
            Employee.createEmployee(employee, (err, employee)=>{
                if(err){
                    res.json(err)
                }
                res.json({success: true, message: 'Employee created successfully', data: employee})
            })
        }
        // const employee = new Employee(req.body)
        // Employee.createEmployee(employee, (err, employee)=>{
        //     if(err){
        //         res.json(err)
        //     }
        //     res.json({success: true, message: 'Employee created successfully', data: employee})
        // })
    }

    
}

// update employee
exports.updateEmployee = (req, res) =>{
    const {id} = req.params
    Employee.updateEmployee(id, req.body, (err, employee)=>{
        if(err){
            res.json(err)
        }
        res.json({success: true, message: 'Employee updated successfully', data: employee})
    })
}

// delete employee
exports.deleteEmployee = (req, res) =>{
    const {id} = req.params
    Employee.deleteEmployee(id, (err, employee)=>{
        if(err){
            res.json(err)
        }
        res.json({success: true, message: 'Employee deleted successfully', data: employee})
    })
}