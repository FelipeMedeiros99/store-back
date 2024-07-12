// modulos externos
import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

// modulos internos
import db from "./banco.js";


// configurações iniciais
const app = express();
app.use(cors());
app.use(json());
dotenv.config();

app.listen(process.env.PORT, ()=>{console.log("Servidor on")});