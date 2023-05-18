const express = require("express");
const {
  createApplication,
  updateApplication,
  getApplication,
  getCoverLetter,
  getApplicationByInternshipId,
} = require("../controller/applicationController");
const route = express.Router();

route.post("/createapp", createApplication);
route.post("/updateapp/:id", updateApplication);
route.get("/app/:id", getApplication);
route.get("/cov/:id", getCoverLetter);
route.get("/byInternship/:id", getApplicationByInternshipId);

module.exports = route;
