import express from "express";
import { engine } from "express-handlebars";
import { connectDB } from "./config/dbConnection.js";
import path from "path";
 import {__dirname} from "../utils.js";
 import {studentsModel} from "./model/students.model.js"


const port = 8080;

const app = express();

 

app.listen(port,()=>console.log("Servidor ok"));

// conectams la base de datos
connectDB();



// configuracion de handlebars
app.engine(`.hbs`, engine({extname: `.hbs`}));
app.set(`view engine`, `.hbs`);
app.set(`views`, path.join(__dirname,"/views"));


//routes
app.get("/", async (req,res) => {
try {
    const {page} = req.query;
    const result = await studentsModel.paginate({},{limit:5,page:1,lean:parseInt(page)})
    res.render("home",result);
} catch (error) {
    res.send(error.message)
}
})