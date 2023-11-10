import express from "express";
import { generateToken, validateToken } from "./utils.js";
import { __dirname } from "./utils.js";
import path from "path";
import cookieParser from "cookie-parser";

const port = 8080;
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/publics")));



app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.post("/login", (req,res)=>{
    const user = req.body;
    const token = generateToken(user);
    // guarda la cookie en su almacenamiento de cookie
    res.cookie("cookieToken",token).json({status:"success", message:"login exitoso"});
});

app.get("/profile", validateToken , (req,res)=>{
    res.send("bienvenido");
});