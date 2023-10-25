
import  express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import path from "path";
import {__dirname} from "./utils.js";


import {viewsRouter} from "./routes/views.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

// middlewares
app.use(express.json()); // para leer archivos json
app.use(express.urlencoded({extended:true})); // para leer formualrios
app.use(cookieParser("claveCookies")); // poner clave a las coockies (parsear)


// configuracion handlebars
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

// escuchamos el puerto
app.listen(port, () => console.log(`server working on port ${port}`));


//routes
app.use(viewsRouter);
app.use("/api/users", usersRouter);