
// Podemos usar los callback para saber cuando un proceso termina.

//callback:

const notificacion = () => "Proceso terminado"


// funcion proceso complejo

const functionCompleja = (callback) => {
    //proceso que toma un tiempo
    console.log("procesando imagenes..");
    setTimeout(()=>{
        //esperando a que termine el proceso
        callback();
    },3000);

}

// llamado de la funcion principal
functionCompleja(notificacion);

