import winston from "winston";
import {__dirname} from "../utils.js";
import path from "path"

// crear loggen
const logger= winston.createLogger({
    //configuraciones
    //definimos transportes:sistema de muestra o alacenamiento de logs
    transports:[
        new winston.transports.Console({level:"warn"}),
        //donde se va a guardar los mensajes
        new winston.transports.File({filename:path.join(__dirname,"/logs/warnings.log")})
    ]
});



export {logger}