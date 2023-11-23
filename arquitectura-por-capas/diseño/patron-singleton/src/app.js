import { MongoSingleton } from "./mongoSingleton.js";



// crea la intancia de la clase
//new MongoSingleton();
const firtsInstance = MongoSingleton.getInstance();

// en poyectos grandes se puede tener varios archivos y en esos varios podriamos crear conecciones a la base de datos en cualquier punto sin darnos cuenta
const secondInstance =  MongoSingleton.getInstance();
const thridInstance =  new MongoSingleton();