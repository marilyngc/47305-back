import { Router } from "express";
import { contactsDao } from "../dao-practice/dao/factory.js";
import { CreateContact } from "../dao/dto/createContact.dto.js";


const router = Router();


router.get("/", async(req,res) => {
  try {
      // entrega todo el listado
      const newContact = req.body;
      // entrega un nuevo objeto 
      const contactDTO = new CreateContact(newContact);
      console.log(contactDTO);
      const result = await contactsDao.getAll(contactDTO);
      res.json({data:result})
  } catch (error) {
    console.log(error)
  }
   
});


router.get("/:id", async (req,res) => {
  try {
    const userId = req.params.id;
    const result = await contactsDao.getOne(userId);
    
    const resultDTO = new GetContactDto(result);
    res.json({data:resultDTO })
  } catch (error) {
    
  }
})


export {router as contactsRouter}