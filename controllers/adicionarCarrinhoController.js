import jwt from "jsonwebtoken";
import dotenv from "dotenv"
export default async function adicionarCarrinhoController(req, res){
    const {token} = req;
    const CHAVESECRETA = process.env.CHAVESECRETA;
    try{
        const dadosUsuario = jwt.verify(token, CHAVESECRETA)
        console.log(dadosUsuario)
        res.sendStatus(200)

    }catch(e){
        res.status(404).send(`Erro ao adicionar produto ao carrinho: \n${e}`)
    }
}