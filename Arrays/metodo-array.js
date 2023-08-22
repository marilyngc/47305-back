// MAP: crea un arreglo a partir de otro arreglo,con el mismo
//numero de elementos, pero a cada elemento le aplicamos una operacion 

const numbers = [1,2,3,4,5];
 const duplicateNumbers = numbers.map((elem) => {return elem*2});
 console.log("numbers:", numbers);
 console.log("duplicateNumbers:", duplicateNumbers );

 // Objetos

 const users = [
    {name:"pepe",age:20},
    {name:"andrea",age:22},
    {name:"mac",age:54},
];

// aqui creamos un array de nombres
const usersNames = users.map((elem) =>  elem.name);
console.log("usersNames:",usersNames);

// Luego aqui podemos convertilor en objeto
const usersNames2 = users.map((elem) =>  {return {nombre:elem.name}});
console.log("usersNames2:",usersNames2);

// ---------------------


// FIND: devolver el prier elemento del arreglo que cumpla un criterio
const users2 = [
    {name:"pepe",age:20},
    {name:"andrea",age:22},
    {name:"macn",age:54},
    {name:"andrea",age:40},
];
                                                           // or
const userAndrea = users2.find((elem) => elem.name === "andrea" || " no se encontró");
console.log("userAndrea", userAndrea);
//NOTA: si no encuntra el elemento, find devuelve underfined

// ---------------------

// FILTER: devuelve todos los elementos dentro de un array que cumpla una codicion
const usersAndrea = users2.filter((elem) => elem.name === "andrea");
console.log("usersAndrea", usersAndrea);

// Si queremos que nos muestre los elementos que tengo una letra
const  usersWordN = users2.filter((elem) => elem.name.includes("n"));
console.log("usersWordN:", usersWordN); 

// ---------------------

// REDUCE: reduce todos lps elementos de un array a un unico valor

const array = [1,2,3,4,5];

// let total = 0;
// for(let i = 0; i < array.length; i++){    => Esta es la forma clasica/ basica
//     total += array[i];
// };
// console.log(total);

const total = array.reduce((acc,curr) => acc+=curr,0);
console.log(total);


// 0 : iniciamos en 0
// ACC: acumulador
//Curr: el elemento que iteramos



const cart = [
    {name:"Libro" , price:200},
    {name:"maleta" , price:265},
    {name:"lapiz" , price:508},
    {name:"mochila" , price:700},
    {name:"papel" , price:50},
];

const totalCart = cart.reduce((acc,curr) => acc+=curr.price,0);
console.log("totalCart", totalCart);

const newCart = cart.filter((elem) => elem.name !== "Maleta");
console.log("newCart" , newCart)

// ---------------------


//SOME: devuelve true, si alguno de los elementos del array cumple 
// una condicion. sino devuelve false

const andreaExists = users2.some((elem) => elem.name === "Andrea");
console.log("andreaExists", andreaExists);

