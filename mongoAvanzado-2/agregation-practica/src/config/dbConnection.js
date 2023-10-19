import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://Marilyn:bKFBJlXjAWVtcyb7@maricluster.3nfwgsn.mongodb.net/pizzeriaDB?retryWrites=true&w=majority") 
    } catch (error) {
        console.log(`hubo un error al conectar la base de datos ${error.message}`)
    }
};