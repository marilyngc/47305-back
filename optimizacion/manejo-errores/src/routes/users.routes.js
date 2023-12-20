import { Router } from "express";
import { UsersControllers } from "../controllers/users.controller.js";



const router = Router();

let users = [];

router.post("/", UsersControllers.createUser);
router.post("/:uid",UsersControllers.getUser)



export {router as usersRouter};