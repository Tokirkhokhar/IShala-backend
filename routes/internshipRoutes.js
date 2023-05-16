const express = require("express")
const {createInternship, updateInternship, deleteInternship,getInternship,getStaticInternship,getComapnyInternship} = require("../controller/internController")

const route = express.Router()

route.get('/',getInternship)
route.get('/:id',getStaticInternship)
route.post("/create",createInternship)
route.post("/update/:id",updateInternship)
route.post("/delete/:id",deleteInternship)
route.post('/:id',getComapnyInternship)

module.exports = route

 