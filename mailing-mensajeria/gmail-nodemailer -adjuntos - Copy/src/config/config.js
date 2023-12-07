import dotenv from "dotenv";
dotenv.config();


export const config = {
    server:{
        port:process.env.PORT,
        sessionKey:process.env.SECRET_SESSION
    },
    email:{
        account:process.env.GMAIL_ACCOUNT,
        password:process.env.GMAIL_PASSWORD

    }
}
