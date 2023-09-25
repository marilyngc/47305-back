// se usa el la terminal

show dbs // para identificar en que base estoy
use miPrimerBase // creamos la base
db; //
db.createCollection("products");// crear coleccion
db.createCollection("users");
show collections; // ver las colecciones que tengo
db.products.insertOne({name:"Rose",price:200}); // crear UN objeto
db.products.insertMany([{name:"Violet",price:150},{name:"girasol",price:300}]);// crear varios objetos
db.products.find(); // mostrar todo el arreglo de objetos que tengo