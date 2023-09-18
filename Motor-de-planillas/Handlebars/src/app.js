import  express  from "express";
import {engine} from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";
import { viewsRouter } from "./routes/views.routes.js";
import { userInfo } from "os";

const port = 8080;
const app = express();

app.listen(port,()=> console.log("server working"));


// confuguracion de motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname,"/views")); // => /src/views




// routes
app.use(viewsRouter);


