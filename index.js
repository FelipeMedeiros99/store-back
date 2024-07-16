// -------------- modulos externos -------------
import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

// -------------- modulos internos ------------------
import cadastroRouter from "./routes/cadastroRouter.js";
import loginRouter from "./routes/loginRouter.js";
import deletarTokensExpiradosDoServidor from "./ferramentas/deletarTokensExpiradosDoServidor.js";
import cadastrarProdutoRouter from "./routes/cadastrarProdutoRouter.js"
import adicionarCarrinhoRouter from "./routes/adicionarCarrinhoRouter.js";
import buscarProdutosCarrinhoRouter from "./routes/buscarProdutosCarrinhoRouter.js";
import limparCarrinhoRouter from "./routes/limparCarrinhoRouter.js";
// ------------ configurações servidor ---------------
dotenv.config();
const app = express();
app.use(cors());
app.use(json());

// roteadores
app.use(cadastroRouter);
app.use(loginRouter);
app.use(cadastrarProdutoRouter);
app.use(adicionarCarrinhoRouter);
app.use(buscarProdutosCarrinhoRouter);
app.use(limparCarrinhoRouter);

// apagando tokens expirados
setInterval(deletarTokensExpiradosDoServidor, 30000)

// ------------- configuração de porta --------------------
app.listen(process.env.PORT, ()=>{console.log("Servidor on")});