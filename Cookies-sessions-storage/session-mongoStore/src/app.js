 
import  express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import path from "path";
import {__dirname} from "./utils.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { connectDB } from "./config/dbConnection.js";

import {viewsRouter} from "./routes/views.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

// middlewares
app.use(express.json()); // para leer archivos json
app.use(express.urlencoded({extended:true})); // para leer formualrios
app.use(cookieParser("claveCookies")); // poner clave a las coockies (parsear)

//configuracion de session
app.use(session({
    //agregar almacenamieton de session de mongo
    store:MongoStore.create({
ttl:60,
mongoUrl:connectDB()
    }),
    //ttl: tiempo de vida de la session en segundos
   //store: al usarlo le estamos diciendo a session que no itulice la memoria edl servidor si no que utilice el nuevo sistema de almacenamiento(fileStorage)
    // la contraseña 
    secret:"claveSession",
    // estas dos propiedades me van a dejar guardar los datos en las sesiones y mantener actualizados los datos
    resave:true,
    saveUninitialized:true
}))

// configuracion handlebars
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

// escuchamos el puerto
app.listen(port, () => console.log(`server working on port ${port}`));


//routes
app.use(viewsRouter);
app.use("/api/users", usersRouter);