const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Company = require("../model/companyModel");
const Internship = require("../model/internshipModel");
const JWT = require("jsonwebtoken");
const bcpt = require("bcryptjs");

const signupEmployee = asyncHandler(async (req, res) => {
  const user = await Company.create(req.body);
  res.status(200).json(user);
});

// const getEmployeeDetails = asyncHandler(async(req,res)=>{
//     const user = await Company.create(req.body)
//     res.status(200).json(user)
//     console.log(user)
// })

const loginEmployee = asyncHandler(async (req, res) => {
  //    const user = await Company.findOne({Email, Password})
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    res.send(400);
    throw new Error("Please enter the correct email and password");
  }
  //l

  const user = await Company.findOne({ Email });
  if (user && (await bcpt.compare(req.body.Password, user.Password))) {
    res.status(200).json({ ...user._doc, token: user.genToken() });
  } else {
    res.status(400).json("Invalid details");
  }
});

const getInternshipByCompanyId = asyncHandler(async (req, res) => {
  const { companyId } = req.params;
  const internships = await Internship.find({ companyId });
  if (internships.length) return res.status(200).json({ internships });
  else return res.status(200).json({ internships: [] });
});

module.exports = {
  signupEmployee,
  loginEmployee,
  getInternshipByCompanyId,
};
