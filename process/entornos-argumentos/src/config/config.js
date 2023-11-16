import dotenv from "dotenv";

// aqui le decimos que .env utilizar
const pathEnv = path.join(__dirname,"../.env.development");
dotenv.config({
    path:pathEnv
}); // process.env

export const config = {
    server:{
        port:process.env.PORT,
        secretToken:process.env.SECRECT_TOKEN,
        store:process.env.STORE
    },
    mongo:{},
    github:{},
}

console.log(config);