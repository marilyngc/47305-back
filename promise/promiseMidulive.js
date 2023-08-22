// CALLBACK
const doAsyncStuffWithCallback = (number1,number2, callback) => {
    const result = number1 +  number2;
    return setTimeout(() => {
        callback(result);
    },1000);
};

doAsyncStuffWithCallback(1,3,(result)=> {
    console.log(result)
});



// promise
const doAsyncStuffWithPromise = (number1,number2) => {
    const result = number1 +  number2;

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(result)
        },2000);
    });
};

doAsyncStuffWithPromise(2,5)
.then(result => console.log(result))

