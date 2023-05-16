const mongoose = require("mongoose")

const orgSchema = new mongoose.Schema({
    Organization_name :{
       type : String,
       required : [true,"please enter the organization name"]
    },
    Organization_description :{
        type : String,
        required : [true,"please enter the Organization description"]
    },
     website_URL :{
        type : String,
        // required : ["please enter the website url"]
     }

},{timestamps : true})

module.exports = mongoose.model("Organization",orgSchema)