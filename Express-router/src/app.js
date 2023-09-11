import  express  from "express";
import { usersRouter } from "./routes/users.routes.js";
import { petsRouter } from "./routes/pets.routes.js";

const port = 8080;
const app = express();

app.listen(port,()=> console.log("server working"));


// vinculamos el archivo route
app.use("/api/users",usersRouter);

app.use("/api/pets",petsRouter);