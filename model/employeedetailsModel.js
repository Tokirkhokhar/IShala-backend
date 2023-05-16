const mongoose = require("mongoose")

const employeeDetailsSchema = new mongoose.Schema({
 
    Email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
    },
  FirstName :{
    type: String,
    trim : true,
    required: [true, "Please enter your first name"],
  },
  LastName :{
    type: String,
    trim : true,
    required: [true, "Please enter your last name"],
  },
  Contact :{
        type: Number,
        trim: true,
        required: [true, "Please enter your contact number"],
        min: 10
  }

},{timestamps : true})

module.exports = mongoose.model("Employeedetails",employeeDetailsSchema)