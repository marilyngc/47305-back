import express from "express";


import { contactsRouter } from "./routes/contacts.routes.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,() => console.log("server working"));



//routes
app.use("/api/contacts",contactsRouter);