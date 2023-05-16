const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",require("./routes/userRoutes"))
app.use("/resume",require("./routes/resumeRoutes"))
app.use("/company",require("./routes/companyRoutes"))
app.use("/internship",require("./routes/internshipRoutes"))
app.use("/application",require("./routes/applicationRoutes"))
app.use("/prefrence",require("./routes/prefrenceRoutes"))
app.use("/employee",require("./routes/employeedetailsRoutes"))
app.use("/orgdetail",require("./routes/orgdetailRoutes"))

connectDb()

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server is created");
})

