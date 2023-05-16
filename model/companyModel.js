const mongoose = require("mongoose")
const bcrpt = require("bcryptjs")
const JWT = require("jsonwebtoken")

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const companySchema = mongoose.Schema({
     Email :{
          type : String,
          trim : true,
          unique : true,
          required : [true,"Email address is required"],
          validate : [validateEmail,"please fill a valid Email address"],
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
     },

     Password : {
        type: String,
        //trim :true,
        required: [true, "Please enter your password"],
        min: 2,
        max: 50
     },
     First_name:{
          type : String,
          required :[true,"Please enter your first name"]
     },
     Last_name:{
      type : String,
      required :[true,"Please enter your last name"]
     },
    Name:{
      type : String,
      // trim : true,
      // required:[true,"Please enter company name"]
         
    },
    Contact: {
        type: Number,
        //trim:true,
        required: [true, "Please enter your contact number"],
        min: 10
    },
     About_company: {
        type:String,
      //   required:[true,"Please fill this field"]
       
     },
     details:{
       type:String,
      //  required:[true,"Please enter the details of company"]
     },
     Location :{
        type : String,
      //   trim : true,
      //   required:[true,"Please enter the loaction"]
     },
     perks :{
        type : String,
      //   required:[true,""]
     },
     addditional_information:{
        type:String
     }
},{timestamps:true})

companySchema.pre('save',async function(){
   const salt = await bcrpt.genSalt(10)
   this.Password = await bcrpt.hash(this.Password,salt)

})

companySchema.methods.genToken = function(){
   return JWT.sign({Email:this.Email,id:this._id},process.env.JWT_SECRET,{expiresIn:"5d"})
}

module.exports = mongoose.model('Company',companySchema)




