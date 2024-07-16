// modulos externos
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

// modulos internos
import db from "../banco.js";

export default async function criarCarrinhoUsuarioMiddleware(req, res, next){
    dotenv.config()
    const {token} = req;
    const {body} = req;
    const CHAVESECRETA = process.env.CHAVESECRETA;
    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    try{
        const dadosUsuario = jwt.verify(token, CHAVESECRETA)
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


        // buscando dados do carrinho
        const dadosCarrinho = await db.collection(CARRINHOSBANCO).findOne({"email": dadosUsuario.email})
        
        const produtoJaEstaNoCarrinho = dadosCarrinho.produtos.includes(body.idProduto)

        if(produtoJaEstaNoCarrinho){
            //removendo produto
            await db.collection(CARRINHOSBANCO).updateOne({"email": dadosUsuario.email}, 
                {
                    $pull: {"produtos": body.idProduto}
                }
            )

            return res.status(200).send("Produto removido do carrinho");
        }
        
        // adicionando produto 
        await db.collection(CARRINHOSBANCO).updateOne({"email": dadosUsuario.email}, 
            {
                $push: {"produtos": body.idProduto}
            }
        )
        
        //salvando no banco de dados 
        return res.status(200).send("Produto adicionado ao carrinho")

    }catch(e){
        res.status(404).send(`Erro ao adicionar produto ao carrinho: \n${e}`)
    }
}