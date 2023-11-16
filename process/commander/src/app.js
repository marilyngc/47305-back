import {Command} from "commander";

const program = new Command();

program
.option("-nombrDelParametro <propiedadPort>","Descripcion del para metro","valor por defecto")
.option("--base <baseDeDatos>","tipo de base de datos","mongo")
// asignamos parametros obligatorios
.requiredOption(
    "-u <user>",
    "usuario que utiliza la aplicacion",
    "El argumento de usuario es obligatorio" // al ser obligatorio no tiene un valor por defecto
)

// vamos a parcearlas
program.parse();
console.log("argumentos",program.opts());