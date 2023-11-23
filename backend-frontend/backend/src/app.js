import { Express } from "express";
import cors from "cors";

const port = 8080;

const app = Express();

// req.query

app.use(express.urlencoded({extended:true}));
app.use(express.json())
// para poder recibir peticiones de otros dominios diferentes al backend
app.use(cors());

app.listen(port,() => console.log("server listening"));


const students = [
    {
        first_name :"juan",
        email:"jugando@gmail.com"
    },
    {
        first_name :"maria",
        email:"maria@gmail.com"
    },
];

app.get("/student",(req,res) => {
    res.json({students})
})