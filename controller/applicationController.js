const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const Application = require("../model/applicationModel");

const createApplication = asyncHandler(async (req, res) => {
  const capp = await Application.create(req.body);
  res.status(200).json(capp);
});

const updateApplication = asyncHandler(async (req, res) => {
  const uapp = await Application.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(uapp);
});

const getApplication = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const uapp = await Application.find({ user_id: id }).populate({
    path: "Internship_id",
    populate: {
      path: "companyId",
      select: "Name",
    },
    select: "Name Internship_Name TotalNoOfApplicants",
  });

  res.status(200).json(uapp);
});

const getCoverLetter = asyncHandler(async (req, res) => {
  // console.log(req.params.id);
  const letter = await Application.findById(req.params.id);

  res.status(200).json(letter);
});

module.exports = {
  createApplication,
  updateApplication,
  getApplication,
  getCoverLetter,
};
