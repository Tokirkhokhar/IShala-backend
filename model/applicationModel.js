const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    Internship_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    application_status: {
      type: String,
      enum: ["Applied", "Pending", "Seen"],
      default: "Applied",
    },
    // applied_date: {
    //    type: Date,
    //    required: true
    // },
    cover_letter: {
      type: [String],
      required: true,
    },
    Availability: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
