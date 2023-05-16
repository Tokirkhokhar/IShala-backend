const Resume = require("../model/resumeModel")
const asyncHandler = require('express-async-handler')

const createResume = asyncHandler(async (req, res) => {
        const resume = await Resume.create(req.body)
        res.status(200).json(resume)
})

const updateResume = asyncHandler(async (req, res) => {
    const resume = await Resume.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(resume)
})

module.exports = {
    createResume,
    updateResume
}
