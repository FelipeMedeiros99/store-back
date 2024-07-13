//  modulos externos
import dotenv from "dotenv";

// modulos externos
import db from "../banco.js";

export default async function validaSeEmailJaEstaCadastradoMiddleware(req, res, next){
    const {body:dados} = req;
    dotenv.config()
    const USUARIOBANCO = process.env.USUARIOBANCO

    try{
        const usuario = await db.collection(USUARIOBANCO).findOne({"email": dados.email})
        if(usuario !== null){
            return res.status(401).send("Este email já está cadastrado")
        }
        next()
    }catch(e){
        res.status(404).send(`Erro ao verificar se email já está cadastrado: \n${e}`)
    }

}