import mongoose from "mongoose";

const usersCollection = "users"; // nombre de la coleccion

// creamos esquemas
const userSchema = new mongoose.Schema({
    first_name:{
        type:String, // va hacer tipo string
        require:true, // campo obligatorio
    },
    last_name:String, // CAMPO OPCIONAL DE TIPO STRING
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true // para que sea unico
    },
    role:String,
    courses:{
        type:[{}], // array de objetos
    }
});

// el modelo nos sirve para realizar operaciones sobre la coleccion users
export const usersModel = mongoose.model(usersCollection, userSchema);
// lo importamos en routes