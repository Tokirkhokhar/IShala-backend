const mongoose = require("mongoose");

const internSchema = mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },

    internshipName: {
      type: String,
      required: [true, "Please enter this filed"],
    },
    internshipType: {
      type: String,
    },

    location: {
      type: String,
      required: [true, "Please enter location"],
    },
    duration: {
      type: String,
      required: [true, "Please enter duration"],
    },
    startDate: {
      type: String,
      required: [true, "Enter the starting date"],
    },
    stipend: {
      type: String,
      required: [true, "Enter Internship Stipend"],
    },
    applyBy: {
      type: Date,
      // required : [true,"Enter the last date"],
    },
    requiredSkills: {
      type: [String],
      required: [true, "Enter the required Skills"],
    },
    learningSkillsByInternshala: {
      type: [String],
    },
    whocanapply: {
      type: [String],
      // required : [true,"Enter Eligibility"]
    },
    perks: {
      type: [String],
    },
    aboutInternship: {
      type: [String],
    },
    // About_company :{
    //     type :[String]
    //  },
    additionalInformation: {
      type: [String],
    },
    totalNoOfApplicants: {
      type: Number,
      //required : [true,"Please enter total No. of applicants"]
    },
    noOfOpening: {
      type: Number,
      required: [true, "Enter total No. of openings"],
    },
    islive: {
      type: Boolean,
      // required:[true,"Enter status of internship"],
      default: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Internship", internSchema);
