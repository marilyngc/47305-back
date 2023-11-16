console.log(process.argv); // me devielve dos arreglo / para agregar argumentos => $ node ./argumentos.js user admid@fs.com 8080 sql
const args = process.argv.slice(2); //  hacemos nuevo arreglo a apartir de la segunda posicion
console.log(args);

const port = args[2];

console.log(`Server working on the port ${port}`);