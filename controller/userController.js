const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const bcpt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const userSignup = asyncHandler(async (req, res) => {
  //console.log(req.body);
  //  const solt =await bcpt.genSalt(10)
  //  req.body.password = await bcpt.hash(req.body.password,solt)
  const user = await User.create(req.body)
  res.status(200).send(user)
})

const userLogin = asyncHandler(async (req, res) => {
  //const user = await User.findById(req.params.Id)j
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400)
    throw new Error("Invalid email or password")
  }

  const user = await User.findOne({email})
  console.log(email,password);
  if (user && bcpt.compare(req.body.password, user.password)) {
    res.status(200).json({
      email: user.email,
      Fname : user.firstName,
      token: user.genToken(),
      isAuth : true
    })
  }
  else {
    res.status(400).json({
      isAuth : false,
      msg : "invalid details"
    })
  }
})


module.exports = {
  userSignup,
  userLogin
}
