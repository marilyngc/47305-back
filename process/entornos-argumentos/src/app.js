import express from "express";
import {config} from "./config/config.js";

const port = config.server.port;
const app = express();

app.listen(port,() => console.log(`server working on ${port}`))