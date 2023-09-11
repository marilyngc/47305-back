import {Router} from "express";

const router = Router();

// GET /api/pets
// POST /api/pets
// DELETE /api/pets/:petId
// PUT /api/pets/:petId

let pets = [];

// middlerare de endpoint
const isAdmin = (req,res,next) => {
    console.log("Ejecutando middleware...");
    if(userRole === "user"){
        res.send("No tienes permisos")
    }else{
        req.isAdmin=true;
        next(); // hacemos que pase a las rutas 
    }
};

// /api/pets/
router.get("/",(req,res) => {
 res.json({data:pets});
});

// POST
router.post("/",isAdmin,(req,res) => {
     const petsInfo = req.body;
     console.log("petInfo:" , petsInfo)
    // res.send("Mascota recibida")

    if (!petsInfo.name) {
        return res.json({message:"Informacion incompleta"})
    }

     // mandamos los datos al array
     pets.push(petsInfo);
     res.json({message:"mascota creada"});
});

// DELETE
router.delete("/:petId",(req,res) => {
    res.json({message:"endpoint put pets"});
});

// PUT
router.put("/:petId",(req,res) => {
    res.json({message:"endpoint delete pets"});
});



export {router as petsRouter }