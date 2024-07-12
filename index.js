// -------------- modulos externos -------------
import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

// -------------- modulos internos ------------------


// ------------ configurações servidor ---------------
dotenv.config();
const app = express();
app.use(cors());
app.use(json());


// ------------- configuração de porta --------------------
app.listen(process.env.PORT, ()=>{console.log("Servidor on")});