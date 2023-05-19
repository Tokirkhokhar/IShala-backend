const express = require("express");
const {
  signupEmployee,
  loginEmployee,
  getInternshipByCompanyId,
} = require("../controller/companyController");

const route = express.Router();

route.post("/signup", signupEmployee);
route.post("/login", loginEmployee);
route.get("/getInternship/:companyId", getInternshipByCompanyId);
// route.post("/details",getEmployeeDetails)

module.exports = route;
