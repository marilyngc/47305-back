import express from "express";

const port = 8080;
const app = express();


// Si desconozco el numero de cosas que se van a consultar con mi ruta
// lo mejor opcion es utilizar QUERIES
// Mientras que, si solo necesito un numoero especifico y reducido de parametros
// habria que optar por PARAMS

// Se pueden usar ambas para la misma consulta

app.listen(port,() => console.log("servidor funcionando"));



// req.query

app.use(express.urlencoded({extended:true}));

// creamos la ruta
app.get("/welcome",(request,response) =>{
    response.send("Petición recibida");
});

app.get("/user",(req,res)=>{
    res.send({name:"pepe",age:20});
});


const users = [
    {id:1, name:"pedro", age:15, gender:"male"},
    {id:2, name:"maria", age:30, gender:"female"},
    {id:3, name:"lucas", age:20, gender:"male"},
];

// /users  => para requirest params
// /users?gender=female => para requirest query
app.get("/users",(req,res)=>{

    console.log(req.query);
    // tomamos los generos
    const gender = req.query.gender;

    // si existe un genero en el array, filtramos
    if(gender){
        const user = users.filter(u => u.gender === gender);
        res.send(user);
    }else{
        res.send("No hay usuario con ese genero")
    }
    // aqui mandamos el array de odjetos
    res.send(users);
});

// req params 
// peticion del usuario por id  
app.get("/users/:userId",(req,res)=>{
   const id = parseInt(req.params.userId);
   console.log(id);

   const user = users.find(u => u.id === id);

   if (user) {
     res.send(user);
   } else {
     res.send("El usuario no existe");
   }

});


