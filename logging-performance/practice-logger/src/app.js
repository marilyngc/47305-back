import  express  from "express";
import {logger} from "./helpers/logger.js"



const port = 8080;
const app = express();

app.listen(port,() => console.log("server working"));


app.get("/", (req,res) => {
    logger.debug("este es un mensaje de debug");
    logger.error("este es un mensaje de error");
    res.send("peticion recibida");
});
