// modulos externos
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

// modulos internos
import db from "../banco.js";

export default async function criarCarrinhoUsuarioMiddleware(req, res, next){
    dotenv.config()
    const {dadosUsuarioToken:dadosUsuario, body} = req;

    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    try{
        // verificando se o usuário já possui carrinho
        const carrinhoUsuario = await db.collection(CARRINHOSBANCO).findOne({"email": dadosUsuario.email})
        
        // criando caso não exista
        if(carrinhoUsuario===null){
            await db.collection(CARRINHOSBANCO).insertOne({
                "email": dadosUsuario.email,
                "produtos": [body.idProduto]
            })

            return res.status(201).send("Produto adicionado ao carrinho")
        }

        next()

    }catch(e){
        res.status(404).send(`Erro ao adicionar produto ao carrinho: \n${e}`)
    }
}