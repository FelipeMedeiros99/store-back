// ----------- modulos externos -----------------
import { Router } from "express";

// ----------- modulos internos -----------------
import cadastroController from "../controllers/cadastroController.js";
import validaDadosCadastroMiddleware from "../middlewares/validaDadosCadastroMiddleware.js";

// ------------ configurando rota ---------------

const cadastroRouter = Router();
cadastroRouter.post("/cadastro", validaDadosCadastroMiddleware, cadastroController);
export default cadastroRouter;