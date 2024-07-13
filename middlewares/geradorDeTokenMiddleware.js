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
        // verificando se não existe token ativo e
        token = await db.collection(TOKENSBANCO).findOne({'email': dados.email})
        if(token!==null){
            req.token = token
            return next()
        }

        // criando token novo caso não tenha cadastrado
        token=criarToken(dados)
        req.token = token

        // armazenar no banco 
        await db.collection(TOKENSBANCO).insertOne({"email":dados.email, "token": token})
        next()  

    }catch(e){
        res.status(404).send(`Erro ao verificar token existente: ${e}`)
    }
}