const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    resetToken:{
        type:String,
        default:""
    },
},{timestamps:true});

// creating model
const User  = new mongoose.model("User", userSchema);

module.exports = User;