const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
type:String,
required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
        password:{
            type:String,
            required:true
        },
        roles:{
            type:String,
            default:'Normal',
            required:true,
        }
    }
,{timestamps:true})


const LOGIN = mongoose.model("login", userSchema);

module.exports = LOGIN;