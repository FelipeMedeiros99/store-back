// modulos externos
import {Router} from 'express';

// modulos internos
import adicionarCarrinhoController from '../controllers/adicionarCarrinhoController.js';
import validarTokenMiddleware from "../middlewares/validarTokenMiddleware.js";
import validarDadosProdutoCarrinhoMiddleware from '../middlewares/validarDadosProdutoCarrinhoMiddleware.js';
import criarCarrinhoUsuarioMiddleware from '../middlewares/criarCarrinhoUsuarioMiddleware.js';

const adicionarCarrinhoRouter = Router();

adicionarCarrinhoRouter.put("/adicionar-carrinho", 
                            validarTokenMiddleware, 
                            validarDadosProdutoCarrinhoMiddleware,
                            criarCarrinhoUsuarioMiddleware,
                            adicionarCarrinhoController);

export default adicionarCarrinhoRouter;