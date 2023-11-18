// capa de control

// importar la capa de servicio
import { ToysService } from "../service/toys.service.js";

export class ToysControl {
    // usamos static para poder llamarlos directamente para no crear una instancia
    static getToys = (req,res) => {
        // tomamos los toys
        const result = ToysService.getToys();
        // le respondemos a los clientes
        res.json({status:"succes",data:result});
    };

      // usamos static para poder llamarlos directamente para no crear una instancia
    static saveToys = (req,res) => {
        // guardamos los toys
        const toyInfo = req.body;
    
        // llamamos al servicio
        const result = ToysService.saveToys(toyInfo);
           // le respondemos a los clientes
           res.json({status:"succes",data:result});
    }
};