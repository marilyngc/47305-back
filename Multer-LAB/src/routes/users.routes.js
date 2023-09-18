import {Router} from "express";

const router = Router();

// GET /api/users
// POST /api/users
// DELETE /api/users/:userId
// PUT /api/users/:userId

let users = [];

// middleware de routes
router.use(function(req,res,next){
    console.log("peticion recibida");
    // console.log(req);
    next(); // objeto que da la continuidad de la ejecucion  => si no lo ponemos, se queda procesando 
});

// /api/users/
router.get("/",(req,res) => {
 res.json({data:users});
});

// POST
router.post("/",(req,res) => {
    res.json({message:"endpoint post users"});
});

// DELETE
router.delete("/:userId",(req,res) => {
    res.json({message:"endpoint put users"});
});

// PUT
router.put("/:userId",(req,res) => {
    res.json({message:"endpoint delete users"});
});



export {router as usersRouter }