// diccionario: definir los tipos de errores

export const EError = {
    DATABASE_ERROR:1,// errores referentes a base de datos
    AUTH_ERROR:2, //errores referentes a autenticacion
    INVALID_BODY_JSON:3, // errores en el json del body
    INVALID_PARAM:4, // referente en caso de mandar mal un dato en los endpoints
};
