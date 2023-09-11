// FS es una libreria de nodejs
const fs = require("fs");
try{
// verificar si un archivo existe
const fileExist = fs.existsSync("archivo.txt"); // ponemos la ruta dondeexiste el archivo
console.log("fileExist:", fileExist);

if (fs.existsSync("archivo.txt")) {
  console.log("Existe");

  // escribir contenido dentro del archivo
  const rutaArchivo = "archivo.txt";
  const contenidoArchivo = "este es mi primer texto";
  fs.writeFileSync(rutaArchivo, contenidoArchivo); // Solo manda contenido string
  console.log("Archivo escrito");

  // leer contenido de un archivo
  const content = fs.readFileSync("archivo2.txt", "utf-8"); // utf-8 devuelve un string
  console.log("content:", content);

  // eliminar un archivo
  fs.unlinkSync("archivo2.txt");
  console.log("Archivo eliminado");
} else {
    console.log("No existe");
  }
} catch(error){
    console.log("ERROR:",error.message);
}


