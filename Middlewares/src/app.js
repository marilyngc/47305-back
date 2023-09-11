import  express  from "express";
import { usersRouter } from "./routes/users.routes.js";
import { petsRouter } from "./routes/pets.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=> console.log("server working"));

// para que los clientes accedan a los archivos publicos
app.use(express.static("public")); 

// Middleware
app.use(express.json()); // actua como un intermedario de esa peticion que estaria haciendo el cliente


// para formularios así no duelve undefined
app.use(express.urlencoded({extended:true}));


// vinculamos el archivo route
app.use("/api/users",usersRouter);

app.use("/api/pets",petsRouter);