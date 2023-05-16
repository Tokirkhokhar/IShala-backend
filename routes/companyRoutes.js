const express = require("express");
const { signupEmployee, loginEmployee,getEmployeeDetails } = require("../controller/companyController");

const route = express.Router();

route.post("/signup",signupEmployee)
route.post("/login",loginEmployee)
// route.post("/details",getEmployeeDetails)


module.exports = route

