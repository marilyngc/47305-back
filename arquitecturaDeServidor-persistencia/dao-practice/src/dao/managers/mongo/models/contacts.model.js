import mongoose from "mongoose";

const contactsCollection = "contacts"; // nombre de la coleccion

// creamos esquemas
const contactSchema = new mongoose.Schema({
    first_name:{
        type:String, // va hacer tipo string
        require:true, // campo obligatorio
    },
   
    email:{
        type:String,
        require:true,
        unique:true // para que sea unico
    },
   
});

// el modelo nos sirve para realizar operaciones sobre la coleccion contacts
export const contactsModel = mongoose.model(contactsCollection, contactSchema);
// lo importamos en routes