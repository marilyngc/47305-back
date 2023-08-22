// Manejamos el resultado o los errores que se generen en la funcion principal
const functionCallback = (error,result) => {

    if(error){
        console.log(`hubo un error: ${error} `);
        
    }else{
        console.log(`This is the result: ${result}`)
    }
};

const functionPrincipal = (number1,number2, callback) => {

    if(typeof number1 !== "number"){
        callback("El argumento 1 debe ser un numero");
    }else{
        const resultSum = number1 + number2;
        callback(null,resultSum); //  Si todo sale bien, se pasa null como primer argumento para indicar que no hay errores.
    }
};

functionPrincipal(1,2,functionCallback)
// functionPrincipal("lucas",2,functionCallback)


//los callbacks a menudo siguen una convención en la que el primer argumento que se pasa al callback
// es utilizado para indicar si ha ocurrido un error. Si este primer argumento es null o undefined, 
//se asume que no hay errores y el segundo argumento (si está presente) contiene el resultado deseado.
// Si el primer argumento es algún valor distinto de null o undefined, 
//se interpreta como un error y el segundo argumento (el resultado) generalmente se ignora.