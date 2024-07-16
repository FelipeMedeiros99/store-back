// modulos externos
import { Router } from "express";

// modulos internos
import buscarProdutosCarrinhoController from "../controllers/buscarProdutosCarrinhoController.js";
import validarTokenMiddleware from "../middlewares/validarTokenMiddleware.js"
import buscarProdutosDoCarrinhoNoBancoMiddleware from "../middlewares/buscarProdutosDoCarrinhoNoBancoMiddleware.js";

const buscarProdutosCarrinhoRouter = Router();

buscarProdutosCarrinhoRouter.get("/produtos-carrinho", 
                                validarTokenMiddleware, 
                                buscarProdutosDoCarrinhoNoBancoMiddleware,
                                buscarProdutosCarrinhoController);

export default buscarProdutosCarrinhoRouter;