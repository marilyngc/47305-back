import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
    try {
       await mongoose.connect(config.mongo.url) ;
    } catch (error) {
        console.log(`hubo un error al conectar la base de datos ${error.message}`)
    }
};