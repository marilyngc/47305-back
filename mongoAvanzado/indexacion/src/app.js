import express from "express";
import {connectDB} from "./config/dbConnection.js"
import { usersModel } from "./models/users.model.js";

const port = 8080;
const app = express();

app.listen(port,() => console.log("server working"));

// conectamos base de datos
connectDB();

// usamos los modelos en las rutas
app.get("/", async(req,res) =>{
    try {
      const result =  await  usersModel.find({email:"fpitchers7@jiathis.com"}).explain("executionStats");
      res.json({status:"succes",data:result});
    } catch (error) {
        res.json({status:"error"})
    }
})