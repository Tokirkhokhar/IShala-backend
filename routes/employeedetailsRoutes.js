const express = require("express")

const {createDetails} = require("../controller/employeedetailsController")

const route = express.Router();

route.post("/create",createDetails)

module.exports = route