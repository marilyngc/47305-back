import { Router } from "express";
import { usersModel } from "../models/users.model.js";  


const router = Router();


router.get("/",async (req,res)=>{
try {
   const users =  await usersModel.find(); // este me devuelve los usuarios
    res.json({status:"success",data:users})


} catch (error) {
    console.log(error.message);
    res.json({status:"success", message:"no se pudo obtener los usuarios"});
}
    

});

router.post("/", async (req,res) => {
    try {
        const userInfo = req.body; // recibimos los datos en el body
        const userCreate =  await usersModel.create(userInfo); // este me devuelve los usuarios
        res.json({status:"success",data:userCreate});
    
    } catch (error) {
        console.log(error.message);
        res.json({status:"success", message:"no se pudo obtener los usuarios"});
    }
})

export {router as usersRouter};