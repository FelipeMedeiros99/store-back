// pacotes externos
import { Router } from "express";

// pacotes internos
import cadastroProdutoController from "../controllers/cadastroProdutoController.js";
import validaDadosProdutoMiddleware from "../middlewares/validaDadosProdutoMiddleware.js";
import validarTokenMiddleware from "../middlewares/validarTokenMiddleware.js";

const cadastrarProdutoRouter = Router();

cadastrarProdutoRouter.post("/cadastrar-produto", validarTokenMiddleware, validaDadosProdutoMiddleware, cadastroProdutoController);

export default cadastrarProdutoRouter;