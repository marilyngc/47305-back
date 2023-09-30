import express from "express";
import { usersRouter } from "./routes/users.routes.js";
import { connectDB } from "./config/dbConnection.js";


const port = 8080;
const app = express();

// middlewares
app.use(express.json()); // para que reciba todo en formato json
app.listen(port, () => console.log(`Serve working on port ${port}`));


// conexión de base de datos
connectDB();

// routes
app.use("/api/users", usersRouter);