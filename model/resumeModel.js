const mongoose = require("mongoose")

const resumeSchema = mongoose.Schema({
    Location: {
        type: String,
        required: [true, "Please enter your location"]
    },
    Contact: {
        type: Number,
        trim : true,
        required: [true, "Please enter your contact number"],
        min: 10
    },
    Education: {
        type: String,
        required: [true, "Please enter your education"],

    },

    Jobs: {
        type: [String]
    },
    Internships: {
        type: [String]
    },
    Courses: {
        type: [String]
    },

    Projects: {
        type: [Object]
    },

    Skills:{
        type : [String],
        required : [true,"Enter your skills"]

    },

    Portfolio_or_works :{
        type : [String]
    },
    Accomplishments:{
        type :[String]
    }


}, { timestamps: true })


module.exports = mongoose.model("Resume", resumeSchema)
