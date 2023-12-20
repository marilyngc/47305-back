export const userIdParamError = (userId) => {
    // en caso de que el usuario no me pasa bien la informacion
    return`
      El id del usuario debe ser un dato numerico, pero se recibió ${userId}
    `
};