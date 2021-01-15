const mongoose = require('mongoose')
//creation of person schema
let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age : Number,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:String,
    
    },
    { collection: "userData" }
    )

module.exports = mongoose.model("User",userSchema)