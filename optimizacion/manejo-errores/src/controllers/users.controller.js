import {CustomError} from "../services/customError.service.js";
import {EError} from "../enums/EError.js";
import {userCreateError} from "../services/userCreateError.service.js"
import {userIdParamError} from "../services/invalidParamError.service.js"

let users = [];

export class UsersControllers {
    static createUser = (req,res)=>{
        //recibimos la informacion del usuario edl body
        const {name, lastname,age,email}= req.body;
        if (!name || !lastname || !email) {
            CustomError.createError({
                name:"create user error",
                cause:userCreateError(req.body),
                message:"datos invalidos para crear el usuario",
                errorCode:EError.INVALID_BODY_JSON
            });
        }
        // los datos son correctos
        const newUser = {
            id:users.length + 1,
            name,
            lastname,
            age,
            email,
        };

        users.push(newUser);
        res.json({status:"success",message:"usuario creado",data:newUser})

    };
    
    static getUser = (req,res)=>{
        //recibimos la informacion del usuario edl body
      const userId = req.params.uid; // "palabra"
        if (Number.isNaN(parseInt(userId))) {
            CustomError.createError({
                name:"get user error",
                cause:userIdParamError(userId),
                message:"id invalido",
                errorCode:EError.INVALID_PARAM
            });
        }
        // los datos son correctos
       const user = user.find(u => u.id === parseInt(userId));

        users.push(newUser);
        res.json({status:"success",message:"usuario encontrado",data:user})

    };
}