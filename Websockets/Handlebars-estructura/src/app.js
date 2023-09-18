import  express  from "express";
import {engine} from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";
import { viewsRouter } from "./routes/views.routes.js";
import { Server } from "socket.io";

const port = 8080;
const app = express();

// servidor de express con el protocola http
const httpServer =app.listen(port,()=> console.log("server working")); 

// servidor de websocket para el backend
const socketServer = new Server(httpServer);

// middlewares
app.use(express.static(path.join(__dirname,"public")))

// confuguracion de motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname,"/views")); // => /src/views




// routes
app.use(viewsRouter);

let msgHistory = []

// configuracion socket Server

socketServer.on("connection",(socket)=>{ // => socket hace referencia al cliente que se acaba de conectar
    console.log("Cliente conectado", socket.id)

    // recibir mensaje del cliente desde home.js
    socket.on("ClientMessage",(data) =>{
        console.log("data desde el cliente", data);
    });

    setTimeout(()=> {
  // enviar mensaje del servidor al cliente / lo podemos usar para decirle al cliente que su conexion fue exitosa
  socket.emit("msgServer","Hola, estoy desde un websocket por parte del servidor")
    },4000)


    // Para enviar mensaje a todos los clientes
    setTimeout(()=> {
  // enviar mensaje del servidor al cliente
  socketServer.emit("msgAllServer","Nueva promoción")
    },8000);

    // para recibir lo que teclea el cliente
    socket.on("msgKey",(data)=>{
        console.log("tecla desde el cliente: ", data);
    });

    socket.on("msgInput", (data) => {
        const msgItem = {
            socketId: socket.id,
            message:data
        };
        msgHistory.push(msgItem);
        console.log("msgItem", msgItem);
    });


    // enviar mensaje con el historial del chat
    socket.emit("messages", msgHistory);
});


