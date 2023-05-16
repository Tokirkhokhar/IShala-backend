const asyncHandler = require("express-async-handler")

const Employeedetails = require("../model/employeedetailsModel")

const createDetails = asyncHandler(async (req, res) => {
    const user = await Employeedetails.create(req.body)
    res.status(200).json(user)
})

module.exports = {
    createDetails
}