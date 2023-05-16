const mongoose = require("mongoose")
const asynchandler = require("express-async-handler")
require("dotenv").config()
const connectDb = asynchandler(async (req, res) => {
     try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected : ${conn.connection.host}`);

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})

module.exports = connectDb