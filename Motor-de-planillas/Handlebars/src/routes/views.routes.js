import { Router } from "express";

const router = Router();

const users  = [

    {nombre:"Pepe", apellido:"perez", edad:20, correo:"pepe@gmail.com", telefono:"+9287244"},

    {nombre:"Ana", apellido:"Diaz", edad:30, correo:"ana@gmail.com", telefono:"+2347682"},

    {nombre:"Maria", apellido:"gomez", edad:35, correo:"maria@gmail.com", telefono:"+9817231"},

    {nombre:"Camila", apellido:"morales", edad:18, correo:"camila@gmail.com", telefono:"+0297812"},

    {nombre:"Juan", apellido:"castro", edad:27, correo:"juan@gmail.com", telefono:"+9827422"},

]

router.get("/",(req,res)=>{
    res.render("home");
});


// http://localhost:8080/contact
router.get("/contact",(req,res)=>{
    res.render("contact");
});

router.get("/profile",(req,res)=>{
    const ramdonNumber = Math.floor(Math.random()*users.length); // => redondeamos hacia bajo
    const user = users[ramdonNumber]; // => nos devuelve el numero que se encuntra en el array
    console.log("user", user);
    res.render("profile",user);
});
export {router as viewsRouter};