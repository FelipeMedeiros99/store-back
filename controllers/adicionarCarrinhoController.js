// modulos externos
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

// modulos internos
import db from "../banco.js";

export default async function adicionarCarrinhoController(req, res, next){
    dotenv.config()
    const {token} = req;
    const {body} = req;
    const CHAVESECRETA = process.env.CHAVESECRETA;
    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    try{
        const dadosUsuario = jwt.verify(token, CHAVESECRETA)
        req.dadosUsuario = dadosUsuario;

        // verificando se o usuário já possui carrinho
        const carrinhoUsuario = await db.collection(CARRINHOSBANCO).findOne({"email": dadosUsuario.email})
        
        // criando caso não exista
        if(carrinhoUsuario===null){
            await db.collection(CARRINHOSBANCO).insertOne({
                "email": dadosUsuario.email,
                "produtos": [body.idProduto]
            })
        }
        next()

    }catch(e){
        res.status(404).send(`Erro ao criar carrinho para o usuário: \n${e}`)
    }
}