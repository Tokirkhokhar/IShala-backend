const mongoose = require("mongoose")

const prefrenceSchema = new mongoose.Schema({
  

},{timestamps : true})

module.exports = mongoose.model("Prefrence",prefrenceSchema)