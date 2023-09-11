import {Router} from "express";

const router = Router();

// GET /api/pets
// POST /api/pets
// DELETE /api/pets/:petId
// PUT /api/pets/:petId

let pets = [];

// /api/pets/
router.get("/",(req,res) => {
 res.json({data:pets});
});

// POST
router.post("/",(req,res) => {
    res.json({message:"endpoint post pets"});
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