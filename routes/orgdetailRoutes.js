const express =  require("express")
const {createOrgdetails} = require("../controller/orgdetailController")
const route = express.Router()

route.post("/org",createOrgdetails)

module.exports = route