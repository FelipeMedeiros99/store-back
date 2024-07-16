import dotenv from "dotenv"

import db from "../banco.js";

export default async function buscarProdutosDoCarrinhoNoBancoMiddleware(req, res, next){
    dotenv.config()
    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    const {dadosUsuarioToken} = req;
    
    try{
        // buscando carrinho do usuário
        const carrinhoUsuario = await db.collection(CARRINHOSBANCO).findOne({"email": dadosUsuarioToken.email})
        req.carrinhoUsuario = carrinhoUsuario;
        next();
    }catch(e){
        res.status(404).send(`Erro ao buscar dados do carrinho: ${e}`)
    }   
}