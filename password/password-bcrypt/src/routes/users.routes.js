import { Router } from "express";
import { createHash, inValidPassword } from "../utils";

const router = Router();

router.post("/login", (req,res) => {
    const loginForm = req.body;
  

    // pasamos el hast antes de que se guarde en DB
    loginForm.password = createHash(loginForm.password);
    console.log(loginForm)

    req.session.email = loginForm.email;
    console.log(req.session)
    
   res.send("peticion login")

   // verificar contraseña
   if (inValidPassword(loginForm.password,user)) {
    return req.render({error:"credenciales invalidas"});
   }
});


router.get("/profile", (req,res) => {
    console.log(req.session);
    if (req.session.email) {
        res.send(`welcome ${req.session.email}`)
    }else{
        res.send("you need to login");
    }
   
});


router.get("/logout", (req,res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send("no se pudo cerrar la sesión");
            
        }else{
            res.send("sesion finalizada");
        }
     
    })
    console.log(req.session);
    res.send(`welcome ${req.session.email}`)
});





export {router as usersRouter}