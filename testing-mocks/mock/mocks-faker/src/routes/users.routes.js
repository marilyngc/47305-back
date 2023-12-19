import { Router } from "express";
import { generateUser } from "../helpers/mock.js";

const router = Router();

router.get("/", (req,res) => {
    const cantidad =parseInt( req.query.cant) || 10;
    let users = [];
    for(let i = 0; i <cantidad; i++){
        const newUser = generateUser();
        users.push(newUser);
    };
    res.json({status:"success", data:users});
});

export {router as usersRouter};