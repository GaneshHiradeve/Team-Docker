import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
    ,file:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    },
    branch:{
        type:String
    },
    role:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
 
})

export const User=mongoose.model('User',UserSchema)