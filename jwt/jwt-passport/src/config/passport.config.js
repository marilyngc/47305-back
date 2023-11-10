import passport from "passport";
import jwt, { ExtractJwt } from "passport-jwt";
import {PRIVATE_KEY} from "../utils.js";

const JWTStrategy = jwt.Strategy;
const extractJWT = jwt.ExtractJwt; // extraer el token(cookie,query params,body,headers)

export const initializePassport = () => {
    passport.use("jwtAuth" ,new JWTStrategy(
        {
            // extraer la información del token
            jwtFromRequest: extractJWT.fromExtractors([cookieExtractor]),
            secretOrKey:PRIVATE_KEY
        },
        async (jwtPayload,done) => {
            try {
               return done(null,jwtPayload);// req.user = informacion almacenada dentro del token
            } catch (error) {
                return done(error);
            }
        }
    ))
}

// funcion para extracion el token de la cookie
const cookieExtractor = (req) => { // req?.cookies
    if(req && req.cookies){
      token = req.cookies["cookieToken"];// cookieToken está en utils.js
    }else{
        token = null;
    }

    return token; // pasa a initializePassport()
}