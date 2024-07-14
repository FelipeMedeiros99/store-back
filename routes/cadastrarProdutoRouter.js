// pacotes externos
import { Router } from "express";

// pacotes internos
import cadastroProdutoController from "../controllers/cadastroProdutoController.js";

const cadastrarProdutoRouter = Router();

cadastrarProdutoRouter.post("/cadastrar-produto", cadastroProdutoController);

export default cadastrarProdutoRouter;