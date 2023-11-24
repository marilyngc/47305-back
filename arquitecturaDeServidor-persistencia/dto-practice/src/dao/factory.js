import {config} from "../config/config.js";


let contactsDao;
let productsDao;
let cartsDao;
const persistence = config.sever.persistence;

switch(persistence){
    //primer caso
    case "memory":{
        // importamos la clase
        const {ContactsMemory} = await import("./managers/memory/contacts.memory.js")
        // const {ProductsMemory} = await import("./managers/memory/products.memory.js")
        
    // ASIGNAMOS UNA NUEVA INSTANCIA A BASE DE LA CLASE
    contactsDao = new ContactsMemory();
    break;
    };


    //segundo caso
    case "mongo":{
        const {connectDB}= await import("../config/dbConnection.js")
        connectDB();
        // importamos la clase
        const {ContactsMongo} = await import("./managers/mongo/contacts.mongo.js")

        
    // ASIGNAMOS UNA NUEVA INSTANCIA A BASE DE LA CLASE
    contactsDao = new ContactsMongo();
    break;
    };
    
}

export {contactsDao,productsDao,cartsDao};