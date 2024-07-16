import { Router } from "express";

import limparCarrinhoControler from "../controllers/limparCarrinhoControler.js";
import validarTokenMiddleware from "../middlewares/validarTokenMiddleware.js";

const limparCarrinhoRouter = Router();

limparCarrinhoRouter.delete("/produtos-carrinho", 
                            validarTokenMiddleware, 
                            limparCarrinhoControler)

export default limparCarrinhoRouter;