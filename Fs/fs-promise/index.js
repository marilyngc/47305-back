const fs = require("fs");

const rutaArchivo = "ejemploPromesas.txt";

const operacions = async() => {
try{
 // escribimos contenido en el archivo
 const result = await  fs.promises.writeFile(rutaArchivo,"contenido del archivo");
 console.log(result);
 // Leer el archivo
 const content = await fs.promises.readFile(rutaArchivo,"utf-8");
console.log( "Content:", content);

// Eliminar archivo
await  fs.promises.unlink(rutaArchivo);
console.log("Archivo eliminado")
}catch(error){
console.log("ERROR:", error.message);
}
};
operacions();