




// definir los callback => funciones que pasan otras funciones en parametros

const sum = (num1,num2) => num1 + num2 ;
const multiplit = (num1,num2) => num1 * num2 ;
const delet = (num1,num2) => num1 - num2 ;

// funcion receptora

const calcular = (num1,num2, callback) => {
    const result = callback(num1,num2);
   console.log("resultado:", result)
}

calcular(2,5,sum)
calcular(2,8,multiplit)
calcular(10,6,delet)





// funciones que vamos a pasar como argumentos: callback

const saludar = () => {
    return"hola"
}
const despedir = () => {
    return"chau"
}

//Crear funcion receptora
const functionReceptora = (name,functionAEjecutar) => {
    console.log("iniciando..");
    console.log("verificando variables");
    console.log("hola soy:",name);
    functionAEjecutar();
}

// ejecutamos la funcion principal y le pasamos el callback

functionReceptora("pepito",saludar);

functionReceptora("ana",despedir)














