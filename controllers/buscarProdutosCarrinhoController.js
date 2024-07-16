import dotenv from "dotenv";

import db from "../banco.js";

export default async function buscarProdutosCarrinhoController(req, res){
    dotenv.config()
    const {carrinhoUsuario} = req;
    const PRODUTOSBANCO = process.env.PRODUTOSBANCO;
    try{
        const produtos = await db.collection(PRODUTOSBANCO).find({"id": {$in: carrinhoUsuario.produtos}}).toArray();
        res.status(200).send(produtos);
    }catch(e){
        res.status(404).send(`Erro ao buscar produtos: ${e}`);
    }
}