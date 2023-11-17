import dotenv from "dotenv";
import path from "path";
import {__dirname} from "../utils.js";


const program = new Command();

// especificamos los argumentos
program
.option("-mode <modo>","Modo o entorno de trabajo","development");
program.parse();
const args = program.opts();// valores de los argumentos
console.log("args",args)
const envMode = args.mode; // recibe valor de development o produccion

// aqui le decimos que .env utilizar
const pathEnv = envMode === "production" 
? path.join(__dirname,"../.env.production")
: path.join(__dirname,"../.env.development");


dotenv.config({
    path:pathEnv // archivos que vamos a usar (production o development)
}); // process.env

export const config = {
    server:{
        port:process.env.PORT,
        secretToken:process.env.SECRECT_TOKEN,
        store:process.env.STORE
    },
    mongo:{},
    github:{},
}

console.log(config);