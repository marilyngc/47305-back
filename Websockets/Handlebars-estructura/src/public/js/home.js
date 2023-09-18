console.log("Archivo JS");
const socketClient = io();

// io hace referencia a "socket.io", se llama así por convención.
// La linea 2 permite instanciar el socket y guardarlo en la constante socketClient
// Dicho socket es el que utilizaremos para poder comunicarnos con el socket del servidor 
// (recordemos que, en este punto somos "clientes", porque representamos una vista)

// capturamos el id 
const inputElem = document.getElementById("imputField");
// captura de cada tecla que teclea el cliente 
inputElem.addEventListener("keydown",(e) =>{
    console.log(e.key);
    socketClient.emit("msgKey", inputElem.value);
    if (e.key === "Enter") {
        socketClient.emit("msgInput", inputElem.value);
    }
});

// cliente recibe el historial de mensajes
socketClient.on("messages",(historyData)=>{
    console.log(historyData)
});

// Aqui usamos "emit" para que el cliente se comunique con el servidor
socketClient.emit("ClientMessage","Hola, estoy desde un websocket por parte del cliente");

// recibo desde el servidor app.js
socketClient.on("msgServer",(data)=>{
    console.log("data desde eñ servidor: " , data);
});


// RECIBIR todo el mensaje del servidor
socketClient.on("msgAllServer",(data)=>{
    console.log("Mensaje general del servidor: " , data);
});