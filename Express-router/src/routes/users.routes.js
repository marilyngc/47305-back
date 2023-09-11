import {Router} from "express";

const router = Router();

// GET /api/users
// POST /api/users
// DELETE /api/users/:userId
// PUT /api/users/:userId

let users = [];

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