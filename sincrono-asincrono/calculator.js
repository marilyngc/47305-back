

function sum (num1,num2){
    return new Promise((resolve,reject) =>{
        const result = num1 + num2;
        if (num1===0 || num2 === 0) {
           return reject("operacion innecesaria");
        } if(result < 0 ){
            return reject("La calculadora solo debe devolver valores positivos");
        }
        resolve(result);
    });

};

function subtraction (num1,num2) {

    const result = num1 - num2;

    return new Promise((resolve,reject) => {

        if(num1  === 0 || num2 === 0){
            return reject("Operacion invalida");
        }
        if(result < 0){
            return reject("La calculadora solo debe devolver valores positivos");
        }

         resolve(result);

       

        
    })
}

function multiplication(num1,num2){
    const result = num1 * num2;

    return new Promise((resolve,reject) => {
  

        if(num1 < 0 || num2 < 0 ){
            return reject("Los productos tiene que ser positivo");
        }if(result < 0){
            reject("La calculadora solo devuelve valores positivos");
        }
        resolve(result);
    })
};


const calculate = async () => {
    try {
        const getSum = await sum(10,5);
        console.log(getSum);
        const getSubtraction = await subtraction(10,1);
        console.log(getSubtraction);
        const getMultiplication = await multiplication(2,0);
        console.log(getMultiplication);
    } catch (error) {
        console.log(error);
    }
};
calculate();