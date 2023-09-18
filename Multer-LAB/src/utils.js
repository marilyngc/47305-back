import path from 'path';

import { fileURLToPath } from 'url';
import multer from "multer";
 

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

// VENTAJA => evita muchos errores sobre las rutas de los archivos cuando trabajamos con otros programadores


// MULTER => Indica donde se guardan los archivos que se suben (se usa para imagenes y otros formatos 
// que no pueden ser alamcenados en JSON)

// Diskstorage => significa almacenamiento en memoria
const storage = multer.diskStorage({
    // destinatario: carpeta donde se guardan los archivos

    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"../public/img"));
    },

    // filename: con que nombre vamos a guardar el archivo
    filename:function(req,file,cb){
        cb(null,`${Date.now()} - ${file.originalname}`)
        // Date.now nos asegura a que no se repita el nombre del archivo
    }
});

// creamos la funcion middleware para subir las imagenes, que utilizaremos e las diferentes rutas
export const uploader = multer({storage}); 