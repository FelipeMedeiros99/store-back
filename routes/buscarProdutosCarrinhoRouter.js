import { Router } from "express";
import buscarProdutosCarrinhoController from "../controllers/buscarProdutosCarrinhoController.js";

const buscarProdutosCarrinhoRouter = Router();

buscarProdutosCarrinhoRouter.get("/produtos-carrinho", buscarProdutosCarrinhoController);

export default buscarProdutosCarrinhoRouter;