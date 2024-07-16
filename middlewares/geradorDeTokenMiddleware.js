// modulos externos
import dotenv from "dotenv";

// modulos internos
import db from "../banco.js";
import criarToken from "../ferramentas/criarToken.js"

export default async function geradorDeTokenMiddleware(req, res, next){
    dotenv.config();
    const TOKENSBANCO = process.env.TOKENSBANCO;
    const {body:dados} = req;
    let token;
    try{
        // deletando caso haja um token antigo em uso
        await db.collection(TOKENSBANCO).deleteOne({'email': dados.email})
        if(token!==null){
            req.token = token
        }

        // removendo senha, por segurança
        delete dados.senha
        // criando token novo
        token=criarToken(dados)
        req.token = token

        // armazenar no banco 
        await db.collection(TOKENSBANCO).insertOne({"email":dados.email, "token": token})
        next()  

    }catch(e){
        res.status(404).send(`Erro ao verificar token existente: ${e}`)
    }
}