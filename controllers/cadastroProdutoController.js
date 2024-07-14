// modulos externos
import dotenv from "dotenv";

// modulos internos
import db from "../banco.js";

export default async function cadastroProdutoController(req, res){
    dotenv.config();

    const {body:dadosProduto} = req;
    const PRODUTOSBANCO = process.env.PRODUTOSBANCO;
    
    try{
        await db.collection(PRODUTOSBANCO).insertOne(PRODUTOSBANCO);
    }catch(e){
        res.status(404).send(`Erro ao cadastrar produto: ${e}`);
    }
}