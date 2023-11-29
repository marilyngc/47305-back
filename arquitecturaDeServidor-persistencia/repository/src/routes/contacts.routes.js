import { Router } from "express";


import { contactsService } from "../repository/index.js";

const router = Router();


router.get("/", async(req,res) => {
  try {
      // entrega todo el listado
      const newContact = req.body;
   
      const result = await contactsService.getAll(newContact);
      res.json({data:result})
  } catch (error) {
    console.log(error)
  }
   
});


router.get("/:id", async (req,res) => {
  try {
    const userId = req.params.id;
    const result = await contactsService.getOne(userId);
   
  } catch (error) {
    
  }
})


export {router as contactsRouter}