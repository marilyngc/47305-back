import express from "express"
import cluster from "cluster";
import os from "os";

// miestra los nucleos que procesa el procesador
console.log(os.cpus());

const cores = os.cpus().length;

const port = 8080;
const app= express();



    app.listen(port,() => console.log(`server working on port ${port} in the process ${process.pid}`));

    app.get("/", (req,res) => {
        res.send(`peticion recibida ${process.pid}`);
    })
    console.log(`new process ${process.pid}`);

    app.get("/sencilla",(req,res) => {
        let sum = 0;
        for(let i = 0 ; i < 10000; i++){
            sum += i;
        }
        res.json({status:"success", result:sum})
    });
    
    app.get("/compleja",(req,res) => {
        let sum = 0;
        for(let i = 0 ; i < 5e7; i++){//50M
            sum += i;
        }
        res.json({status:"success", result:sum})
    });

