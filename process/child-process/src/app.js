import express from "express";
import {fork} from "child_process";
import path from "path";
import {__dirname} from "./utils.js";


const port = 8080;
const app = express();

app.listen(port,() => console.log(`server working on the ${port}`));




app.get("/", (req,res) => {
    res.send("Welcome")
});

app.get("/suma",(req,res) => {
    // creamos el hijo (childProcess.js)
    const child = fork(path.join(__dirname,"/process/childProcess.js"));
    // empezamos hacer la operación
    child.send("start"); // damos inicio al proceso hijo  

    // obtenemos el resultado del proceso hijo
    child.on("message", (result) => {
        res.send(`El resultado de ña suma es ${result}`)
    })
    })

 