const mongoose = require("mongoose")
const validators = require("mongoose-validate")
const bcpt = require('bcryptjs')
const JWT = require('jsonwebtoken')

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        // validate: [validateEmail, "please fill a valid Email address"],l
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        // required:[true,"The E-mail field cannot be empty."]
    },

    password: {
        type: String,
        trim : true,
        required: [true, "Please enter your password"],
        min: 2,
        max: 50

    },
    Contact: {
        type: Number,
        trim: true,
        required: [true, "Please enter your contact number"],
        min: 10
    },

    Resume_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Resume"
    },

    firstName: {
        type: String,
        trim : true,
        required: [true, "Please enter your first name"],
        
    },

    lastName: {
        type: String,
        trim : true,
        required: [true, "Please enter your last name"],
       
    },


}, { timestamps: true })

userSchema.pre('save', async function(){
        const solt = await bcpt.genSalt(10)
        this.password = await bcpt.hash(this.password,solt)
})

userSchema.methods.genToken = function(){
    return JWT.sign({email:this.email,id: this._id},process.env.JWT_SECRET,{expiresIn:"5d"})

}

module.exports = mongoose.model("User",userSchema)