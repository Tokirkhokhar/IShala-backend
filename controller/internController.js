const mongoose = require("mongoose");
const asynHandler = require("express-async-handler");
const Internship = require("../model/internshipModel");

const getInternship = asynHandler(async (req, res) => {
  const internship = await Internship.find().populate("companyId", "Name");
  res.status(200).json(internship);
});

const getComapnyInternship = asynHandler(async (req, res) => {
  const id = req.params.id;
  const internship = await Internship.find({ company_id: id });
  res.status(200).json(internship);
});

const getStaticInternship = asynHandler(async (req, res) => {
  const id = req.params.id;
  const internship = await Internship.findById(id).populate("companyId", [
    "Name",
    "About_company",
  ]);
  res.status(200).json(internship);
});

const createInternship = asynHandler(async (req, res) => {
  try {
    await Internship.create(req.body);
    return res.status(200).json({ message: "internship added successfully " });
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
});

const updateInternship = asynHandler(async (req, res) => {
  const updatei = await Internship.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatei);
  // console.log("Internship is updated")
});

const deleteInternship = asynHandler(async (req, res) => {
  const deletei = await Internship.findByIdAndDelete(req.params.id);
  res.status(200).json(deletei);
  // console.log("internship is deleted")
});

module.exports = {
  createInternship,
  updateInternship,
  deleteInternship,
  getInternship,
  getStaticInternship,
  getComapnyInternship,
};
