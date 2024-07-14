// -------------- modulos externos -------------
import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

// -------------- modulos internos ------------------
import cadastroRouter from "./routes/cadastroRouter.js";
import loginRouter from "./routes/loginRouter.js";
import deletarTokensExpiradosDoServidor from "./ferramentas/deletarTokensExpiradosDoServidor.js";

// ------------ configurações servidor ---------------
dotenv.config();
const app = express();
app.use(cors());
app.use(json());

// roteadores
app.use(cadastroRouter)
app.use(loginRouter)

// apagando tokens expirados
setInterval(deletarTokensExpiradosDoServidor, 1000)

// ------------- configuração de porta --------------------
app.listen(process.env.PORT, ()=>{console.log("Servidor on")});