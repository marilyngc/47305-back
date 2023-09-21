import express from "express";
import path from "path";
import {engine} from "express-handlebars";
import { __dirname } from "./utils.js";
import { viewsRouter } from "./routes/views.routes.js";
import { Server } from "socket.io";


const port = 8080;
const app = express();

//midlewares
app.use(express.json()); // recibir informacion json del cliente
app.use(express.static(path.join(__dirname,"/public"))); // chat/src/public


// servidor de http con express
const httpServer = app.listen(port,()=> console.log("server working"));

// servidor de websocket
const io = new Server(httpServer);


// confuguracion de motor de plantillas handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views")); // => /src/views


// routes
app.use(viewsRouter);