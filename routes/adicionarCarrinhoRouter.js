// modulos externos
import {Router} from 'express';

// modulos internos
import adicionarOuRemoverCarrinhoController from '../controllers/adicionarOuRemoverCarrinhoController.js';
import validarTokenMiddleware from "../middlewares/validarTokenMiddleware.js";
import validarDadosProdutoCarrinhoMiddleware from '../middlewares/validarDadosProdutoCarrinhoMiddleware.js';
import criarCarrinhoUsuarioMiddleware from '../middlewares/criarCarrinhoUsuarioMiddleware.js';

const adicionarCarrinhoRouter = Router();

adicionarCarrinhoRouter.put("/adicionar-carrinho", 
                            validarTokenMiddleware, 
                            validarDadosProdutoCarrinhoMiddleware,
                            criarCarrinhoUsuarioMiddleware,
                            adicionarOuRemoverCarrinhoController);

export default adicionarCarrinhoRouter;