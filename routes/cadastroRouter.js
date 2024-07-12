// ----------- modulos externos -----------------
import { Router } from "express";

// ----------- modulos internos -----------------
import cadastroController from "../controllers/cadastroController.js";

// ------------ configurando rota ---------------

const cadastroRouter = Router();

cadastroRouter.post("/cadastro", cadastroController);

export default cadastroRouter;