import dotenv from "dotenv";

import db from "../banco.js";



export default async function limparCarrinhoControler(req, res){
    const {dadosUsuarioToken} = req;
    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    const {email} = dadosUsuarioToken;
    try{
        await db.collection(CARRINHOSBANCO).updateOne({email}, {$set: {produtos: []}})
        res.sendStatus(200);
    }catch(e){
        res.status(404).send(`Erro ao limpar carrinho: ${e}`)
    }
}