import { Router } from "express";

// importamos la capa de controller
import { ToysControl } from "../controller/toys.controller.js";

const router = Router();

// no ejecutamos los metodos del controlador (getToys()) solo getToys
router.get("/", ToysControl.getToys);

router.post("/", ToysControl.saveToys);


export {router as toysRouter}