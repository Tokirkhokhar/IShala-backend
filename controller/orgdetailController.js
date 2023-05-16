const mongoose = require("mongoose")
const Organization = require("../model/orgdetailModel")
const asyncHandler = require("express-async-handler")


const createOrgdetails = asyncHandler(async(req,res)=>{
   const detail = await Organization.create(req.body)
   res.status(200).json(detail)
})

module.exports = {
    createOrgdetails
}