// ----------- modulos externos -----------------
import { Router } from "express";

// ----------- modulos internos -----------------
import cadastroController from "../controllers/cadastroController.js";
import validaDadosCadastroMiddleware from "../middlewares/validaDadosCadastroMiddleware.js";
import validaSeEmailJaEstaCadastradoMiddleware from "../middlewares/validaSeEmailJaEstaCadastradoMiddleware.js";

// ------------ configurando rota ---------------

const cadastroRouter = Router();
cadastroRouter.post("/cadastro", 
                    validaDadosCadastroMiddleware, 
                    validaSeEmailJaEstaCadastradoMiddleware, 
                    cadastroController);
export default cadastroRouter;