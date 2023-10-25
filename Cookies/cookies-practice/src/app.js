import express from "express";
import cookieParser from "cookie-parser";
 

const port = 8080;

const app = express();



//middleware
app.use(cookieParser("calveCookiesCoder")); // clave de la cookie

app.listen(port,()=>console.log("Server working"));

// ruta para crear una cookie
app.get("/setCookie", (req,res) => {
    // cookie(nombreCookie, valorCookie, tiempoDeVida,options)
    res.cookie("galleta1","oreo",{masAge:5000}).send("cookie creada");
});
app.get("/setCookie2", (req,res) => {
    // cookie(nombreCookie, valorCookie, tiempoDeVida,options)
    res.cookie("galleta2","Ritz",{masAge:5000}).send("cookie creada");
});

// ruta para leer las cookies que vienen del cliente
app.get("/getCookie", (req,res) => {
    console.log(req.cookies);
    res.send("cookies recibidas");
});



//ruta para elminar las cookies
app.get("/delete-cookie",(req,res) =>{
    // ponemos el nombre de la galleta a eliminar
    res.clearCookie("galleta2").send("la cookie se eliminó");
})

//ruta cookie firmada
app.get("/set-signedCookie", (req,res) => {
    // signed: es cuando el usuario hace un cambio y automaticamente rechaza la cookie (osea la firma)
    res.cookie("userData",{email:"pepe@gmail.com",role:"user"},{signed:true}).send("cookie creada");
});

// ruta para ver las cookies firmadas
app.get("/get-signedCookie",(req,res) => {
    console.log(req.signedCookies);
    res.send("cookies recibidas")
})