const http = require ("http");

const port = 8080;  // o 3000


const server = http.createServer((request,response) => {
        console.log("peticion recibida de un cliente");

        // repsuesta del servidor
        response.end("Su petición fue recibida en el servidor");
});

server.listen(port,() => console.log("servidor corriendo"));
