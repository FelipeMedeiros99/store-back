// modulos externos
import dotenv from "dotenv";

// modulos internos
import db from "../banco.js";
import jwt from "jsonwebtoken";

export default async function validarTokenMiddleware(req, res, next){
    dotenv.config();
    const TOKENSBANCO = process.env.TOKENSBANCO;
    const CHAVESECRETA = process.env.CHAVESECRETA;
    const {headers} = req;
    try{
        // pegando o token
        const token = headers.authorization?.replace("Bearer ", "");
        
        
        // validando se token foi enviado
        if(token===undefined){
            return res.status(401).send("Headers precisa conter Bearer token");
        }
        
        // buscando token no servidor
        const dadosTokenServidor = await db.collection(TOKENSBANCO).findOne({token})
        if(dadosTokenServidor===null){
            return res.status(401).send("Seu token expirou, faça login novamente")
        }

        // salvando dados do token
        req.dadosUsuarioToken = jwt.decode(token, CHAVESECRETA)
        req.token = token
        next()

    }catch(e){
        res.status(404).send(`Erro ao validar token: ${e}`);
    }
}