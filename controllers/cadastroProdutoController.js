// modulos externos
import dotenv from "dotenv";

// modulos internos
import db from "../banco.js";

export default async function cadastroProdutoController(req, res){
    dotenv.config();

    const {body:dadosProduto} = req;
    const PRODUTOSBANCO = process.env.PRODUTOSBANCO;
    
    try{
        await db.collection(PRODUTOSBANCO).insertOne({...dadosProduto, id: Date.now()});
        const produtos = await db.collection(PRODUTOSBANCO).find({}).toArray()
        res.status(200).send(produtos)
    }catch(e){
        res.status(404).send(`Erro ao cadastrar produto: ${e}`);
    }
}