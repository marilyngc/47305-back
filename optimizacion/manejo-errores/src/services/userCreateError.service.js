export const userCreateError = (user) => {
    // en caso de que el usuario no me pasa bien la informacion
    return`
        Todos los campos son obligatorios:
       Listado de campos obligatorios:
       name: este campo es tipo string, y se recibió ${user.name},
       lastname: este campo es tipo string, y se recibió ${user.lastname}
       age: este campo debe ser de tipo numerico, y se recibio ${user.age},
       email: este campo debe ser tipo string, y se recibió ${user.email}
    `
};