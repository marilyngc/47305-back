const numbers = [1,2,3,4];
// map: crea un arreglo a partir de un arreglo original,con el mismo numero de elementos,
// pero cada elemento modificado

const add = (num) => num+1;

const newArray1 = numbers.map((elem) => add(elem)) // output: [2,3,4,5];
console.log("nuevo arreglo 1", newArray1);

const newArray2 = numbers.map((num) => num*2 ) // output: [2,4,6,8]
console.log("nuevo arreglo 2", newArray2);
