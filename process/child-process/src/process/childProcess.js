// vamos a tener la operación compleja
const operationCompleja = () => {
    let result = 0;
    for(let i = 0; i < 5e9 ; i++){
        result += i;
    }
    return result;
};

// on( ) escucha atraves de un evento
process.on("message", () => {
    const result = operationCompleja();
    // lo mandamos al padre (app.js)
    process.send(result)
})