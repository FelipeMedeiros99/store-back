// pacotes externos
import { Router } from "express";

// pacotes internos
import cadastroProdutoController from "../controllers/cadastroProdutoController.js";
import validaDadosProdutoMiddleware from "../middlewares/validaDadosProdutoMiddleware.js";

const cadastrarProdutoRouter = Router();

cadastrarProdutoRouter.post("/cadastrar-produto", validaDadosProdutoMiddleware, cadastroProdutoController);

export default cadastrarProdutoRouter;