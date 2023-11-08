import { Router } from "express";
import passport from "passport";
import {config} from "../config/config.js";

const router = Router();

// Rutas de registro
router.post("/signup", passport.authenticate("signupLocalStrategy",{
    // a donde vamos a redireccionar a nuestro usuario si hay un error
    failureRedirect:"/api/sessions/fail-signup"
}),
    async(req,res) => {
        res.render({message:"usuario registrado correctamente"});
    }
 );

router.get("/fail-signup",(req,res)=>{
    res.render("signupView",{error:"No se pudo registrar el usuario"});
});


// Ruta de registro con gitHub
router.get("/signup-github", passport.authenticate("signupGithubStrategy"))
router.get(config.github.callbackUrl, passport.authenticate("signupGithubStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
})),async (req,res) => {
    res.redirect("/profile");
}


// Rutas de login
router.post("/login", passport.authenticate("loginLocalStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}) , async(req,res)=>{
    res.redirect("/profile");
});

router.get("/fail-login",(req,res)=>{
    res.render("loginView",{error:"No se pudo iniciar sesion para este usuario"});
});

router.get("/logout", async(req,res)=>{
    try {
        req.session.destroy(err=>{
            if(err) return res.render("profileView",{error:"No se pudo cerrar la sesion"});
            res.redirect("/");
        })
    } catch (error) {
        res.render("signupView",{error:"No se pudo registrar el usuario"});
    }
});

export {router as sessionsRouter};