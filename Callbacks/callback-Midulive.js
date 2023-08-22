// se llama callback  porque es un llamado del contenido
function modify (array,callback){
    // hacemos algo..
    array.push("midu");

    //despues de hacer algo..
    // asincronico => el setTimeout tambien es una callback
    setTimeout(function () {
        callback(array) // Al callback le puedes pasar parametros
    },3000)

}

const names = ["gartiel","susana",];

modify(names,function(array){
    console.log(`Ahora el largo del array es: ${array.length}`) ;
})


// CALLBACK es una funcion que se pasa como argumento para ser utilizada luego 
// de que la funcion principal finalice
// NO es asincronico 