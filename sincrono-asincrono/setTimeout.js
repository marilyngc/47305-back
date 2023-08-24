
// dos personas, el primero hace una orden con una ensalada, una pasta
//y un jugo, y la segunda persona hace una orden de una ensalada, una carne y un jugo

// ensalada = 15min
//pasta = 30min
//carne = 50min
//jugo = 10min

//   Situacion SINCRONO
// console.log("ensalada lista"); // 15min
// console.log("pasta lista"); // 30min
// console.log("jugo listo"); // 10min
// console.log("ensalada lista"); // 15min
// console.log("carne lista"); // 50min
// console.log("jugo listo"); // 10min => 130 minutos parapoder tener el jugo del segundo usuario


// situación ASINCRONA


// primer usuario
setTimeout(() => {
    console.log("1. ensalada lista");
},1500);
setTimeout(() => {
   console.log("1. pasta lista");
},3000);
setTimeout(() => {
   console.log("1. jugo lista");
},1000);

// segundo usuario 
setTimeout(() => {
   console.log("2. ensalada lista");
},1500);
setTimeout(() => {
   console.log("2. carne lista");
},5000);
setTimeout(() => {
   console.log("2. jugo lista");
},1000);
