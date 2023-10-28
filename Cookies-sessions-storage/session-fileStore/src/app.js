
import  express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import path from "path";
import {__dirname} from "./utils.js";
import session from "express-session";
import FileStore from "session-file-store";

import {viewsRouter} from "./routes/views.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

// middlewares
app.use(express.json()); // para leer archivos json
app.use(express.urlencoded({extended:true})); // para leer formualrios
app.use(cookieParser("claveCookies")); // poner clave a las coockies (parsear)


//conectamos session con FileStore
const fileStore = FileStore(session);

//configuracion de session
app.use(session({
      //ttl: tiempo de vida de la session en segundos
   //retries: numero de veces que el servidor intenta leer el archivo con la session
   //path: ruta de la carpeta donde almacenaremos las sessiones
   //store: al usarlo le estamos diciendo a session que no itulice la memoria edl servidor si no que utilice el nuevo sistema de almacenamiento(fileStorage)
   store: new fileStore({
    ttl:60,
    retries:0,
    path:path.join(__dirname,"/sessions")
   }),
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