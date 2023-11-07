import passport from "passport";
import localStrategy from "passport-local";
import {createHash, inValidPassword} from "../utils.js";
import {usersModel} from "../persistence/mongo/models/users.model.js";



// localStrategy: userName y password
export const initializePassport = () => {
    // estrategia para registrar a los usuarios
    passport.use("signupLocalStrategy",new localStrategy(
        //recibe dos parametros
        {
            // definimos dos propiedades
            passReqToCallBack:true,
            userNameField:"email" // ahora el campo userName es igual al campo email
        },
        async(req,userName,password,done) => {
            // done: sirve para indicarle a mi servidor si el proceso de autenticacion finzalizó de forma correcta o si tiene un error
            const {first_name} = req.body;
            try {
                const user = await usersModel.findOne({email:userName});
                if (user) {
                    // el usuario ya está registrado
                    // null: no hubo error
                    // false: recibe el usuario que se va identificar(en este caso no se registró)
                    return done(null,false);
                }
                // el usuario no está registrado
                const newUser = {
                    first_name,
                    email:userName,
                    passport: createHash(password)
                };
                console.log(newUser);
                const userCreate= await usersModel.create(newUser);
                return done(null,userCreate);

            } catch (error) {
               return done(error);
            }
        }
    ));
};