

let testPasados = 0 ;
let totalTest = 3;

//función para testear
const login = (name,password) => {
    //escenario 1
    if (password === "") {
        return "no se a proporcionado un password";
    }
    //escenario 1
    if (name === "") {
        return "no se ha proporcionado un usuario";
    }
    return "logueado";
};

// 1. crear las pruebas para los diferentes escenarios
//escenario 1.
console.log(`1. Si se pasa un password vacío, la funcion debe consologuear("no se a proporcionado un password")`);
let result1 = login("usuario1","");
if (result1 === "no se a proporcionado un password") {
    console.log(`---> Test1 pasó`);
    testPasados++;
}else{
    console.log(`---> Test1 NO pasó`);
};

//escenario 2
console.log(`2. si se pasa un usuario vacío, la funcion debe consologuear("no se ha proporcionado un usuario")`);
let result2 = login("","password");
if (result2 === "no se ha proporcionado un usuario") {
    console.log(`---> Test2 pasó`);
    testPasados++;
}else{
    console.log(`---> Test2 NO pasó`);
};


//escenario 3
console.log(`3. si el usuario y contraseña coinciden,  consologuear("logueado")`);
let result3 = login("coderUser","password1213");
if (result3 === "logueado") {
    console.log(`---> Test3 pasó`);
    testPasados++;
}else{
    console.log(`---> Test3 NO pasó`);
};

//resultados
if (testPasados === totalTest) {
    console.log("se completaron los test")
}else{
    console.log(`test pasados: ${testPasados} de ${totalTest} tests`);
}