import  express  from "express";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

app.listen(port,() => console.log("server working"));

app.use("api/users", usersRouter);