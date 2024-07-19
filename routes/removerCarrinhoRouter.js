// modulos externos
import {Router} from 'express';

// modulos internos
import removerCarrinhoController from '../controllers/removerCarrinhoController.js';
import validarTokenMiddleware from "../middlewares/validarTokenMiddleware.js";
import validarDadosProdutoCarrinhoMiddleware from '../middlewares/validarDadosProdutoCarrinhoMiddleware.js';
import criarCarrinhoUsuarioMiddleware from '../middlewares/criarCarrinhoUsuarioMiddleware.js';

const removerCarrinhoRouter = Router();

removerCarrinhoRouter.delete("/remover-carrinho", 
                            validarTokenMiddleware, 
                            validarDadosProdutoCarrinhoMiddleware,
                            criarCarrinhoUsuarioMiddleware,
                            removerCarrinhoController);

export default removerCarrinhoRouter;