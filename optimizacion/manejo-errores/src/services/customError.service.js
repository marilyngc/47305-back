

export class CustomError{
    static createError ({name ="Error",cause,message,errorCode = 1 }) {
        // genera un objeto
        const error = new Error(message,{cause});
        error.name = name;
        error.code = errorCode;
        console.log("customError",error);
       //lanzamos error
       throw error;
    };
};