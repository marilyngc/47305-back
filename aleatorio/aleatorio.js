// {
//     1:350,
//     2:450,
//     3:200,
//     ...
// }

// numero aleatorio entre 1 y 20
//Math.random()*20 //0.01 - 10.99
console.log(Math.random()*20); // 

// Math.ceil 0.2 = 1
//Math.floor 0.2 = 0
//Math.round 0.2 = 0; 0.6 = 1; 0.5 = 1
console.log(Math.ceil(Math.random()*20)); // 1-20


//Como evaluar si una propiedad existe dentro de un objeto?

const obj = {1:100,2:330};
// Primera forma: obj.hasOwnProperty("nameProperty")
// Segunda forma: obj["nombreProperty"]
// Tercera forma: obj.nameProperty => obj.name

for(let i=0; i<1000;i++){
    const numberAleatori= Math.ceil(Math.random()*20);
    console.log(numberAleatori);
};