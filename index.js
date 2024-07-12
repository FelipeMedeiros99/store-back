// -------------- modulos externos -------------
import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

// -------------- modulos internos ------------------
import cadastroRouter from "./routes/cadastroRouter.js";

// ------------ configurações servidor ---------------
dotenv.config();
const app = express();
app.use(cors());
app.use(json());

// roteadores
app.use(cadastroRouter)

// ------------- configuração de porta --------------------
app.listen(process.env.PORT, ()=>{console.log("Servidor on")});