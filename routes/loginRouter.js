// pacotes externos
import {Router} from "express";

// pacotes internos 
import validaDadosDeLoginMiddleware from "../middlewares/validaDadosDeLoginMiddleware.js"
import localizarUsuarioBancoDados from "../middlewares/localizarUsuarioBancoDados.js";
import validarSeSenhaConfereMiddleware from "../middlewares/validarSeSenhaConfereMiddleware.js";
import geradorDeTokenMiddleware from "../middlewares/geradorDeTokenMiddleware.js";
import loginController from "../controllers/loginController.js";

// configurações do roteador
const loginRouter = Router();

loginRouter.post("/login", 
                validaDadosDeLoginMiddleware, 
                localizarUsuarioBancoDados, 
                validarSeSenhaConfereMiddleware,
                geradorDeTokenMiddleware,
                loginController);


export default loginRouter;