import mongoose from "mongoose";



const usersCollection = "users";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        index:true ,// nos regresa la información mas rapido
        unique:true
        
    },
    gender:String
});

export const usersModel = mongoose.model(usersCollection,userSchema);