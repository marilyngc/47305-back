import express, { response } from "express";

const port = 8080;
const app = express();

app.use(express.json()); // para poder recibir informacion adicional en el body

app.listen(port, () => console.log("server workink"));

// routes

let users = [];

app.get("/api/users", (require, response) => {
  response.status(200).json({ data: users });
});

// crear usuario
app.post("/api/users", (require, response) => {
  const newUser = require.body; // podemos simular que el usuario ingresa dicho datos en el body
  console.log(newUser); // vemos lo que nos ingresó el usuario
  users.push(newUser);
  response.json({ message: "usuario creado" });
});

// actualizar usuario
app.put("/api/users/:userId", (require, response) => {
  const userId = parseInt(require.params.userId); // recordemos que se crea como string
  const newInfo = require.body;
  const userIndex = users.findIndex((u) => u.id === userId);
  console.log(userId);
  if (userIndex >= 0) {
    const newUsers = [...users];
    newUsers[userIndex] = newInfo;
    users = newUsers;

    response.json({ message: "usuario actualizado" });
  } else {
    response
      .status(404)
      .json({ message: "el usuario con id solicitado no existe" });
  }
});

// eliminar usuario
app.delete("/api/users/:userId", (require, response) => {
  const userId = parseInt(require.params.userId); // recordemos que se crea como string

  const userIndex = users.findIndex(u => u.id === userId);
  console.log(userIndex);
  if (userIndex >= 0) {
    const newUsers = users.filter(u => u.id !== userId);

    users = newUsers;

    response.json({ message: "usuario eliminado" });
  } else {
    response
      .status(404)
      .json({ message: "el usuario con id solicitado no existe" });
  }
});
