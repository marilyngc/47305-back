import { Router } from "express";
import { contactsDao } from "../dao-practice/dao/index.js";



const router = Router();


router.get("/", async(req,res) => {
    // entrega todo el listado
  const result = await contactsDao.getAll();
  res.json({data:result})
});


export {router as contactsRouter}