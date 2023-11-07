import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

//recibimosla contraseña igual al formulario
export const createHash = (password) => {
   return  bcrypt.hashSync(password,bcrypt.genSaltSync()); // esta instruccion me genera un hash
};

// comparamos el password con la que está en DB
export const inValidPassword = (password,user) => {
     return bcrypt.compareSync(password,user.password);
};
