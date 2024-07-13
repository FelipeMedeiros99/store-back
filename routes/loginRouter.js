// pacotes externos
import {Router} from "express";

// pacotes internos 
import validaDadosDeLoginMiddleware from "../middlewares/validaDadosDeLoginMiddleware.js"
import loginController from "../controllers/loginController.js";
import localizarUsuarioBancoDados from "../middlewares/localizarUsuarioBancoDados.js";

// configurações do roteador
const loginRouter = Router();

loginRouter.post("/login", validaDadosDeLoginMiddleware, localizarUsuarioBancoDados, loginController);

export default loginRouter;