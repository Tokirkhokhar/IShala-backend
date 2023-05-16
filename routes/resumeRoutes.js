const express = require("express")
const route = express.Router()
const {createResume,updateResume} = require("../controller/resumeController")


route.post("/createresume",createResume)
route.put("/updateresume/:id",updateResume)


module.exports = route
