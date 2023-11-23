import mongoose from "mongoose";


export class MongoSingleton{
    // propiedad de la clase
    static  #instance;
    constructor(){

        
    }


    static #connectionDB(){
        const connection =  mongoose.connect("mongodb+srv://Marilyn:bKFBJlXjAWVtcyb7@maricluster.3nfwgsn.mongodb.net/testsDB?retryWrites=true&w=majority");
        console.log("new connection ");
        return connection;
    
    }
    
    
    static getInstance(){
        // compramos si la instancia se asignó (osea si la base de datos está conectada)
        if (this.#instance) {
            console.log("Data base working");
            
            return this.#instance;
        }else{
            // se crea una nueva instancia
            this.#instance = this.#connectionDB();
            return this.#instance;
        }
    }
};

