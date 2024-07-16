// modulos externos
import dotenv from "dotenv"

// modulos internos
import db from "../banco.js";

export default async function adicionarOuRemoverCarrinhoController(req, res){
    dotenv.config()
    const {body, dadosUsuario} = req;
    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    try{
    
        req.dadosUsuario = dadosUsuario;
    
        // buscando dados do carrinho
        const dadosCarrinho = await db.collection(CARRINHOSBANCO).findOne({"email": dadosUsuario.email})
        
        // verificando se produto está no carrinho do usuário
        const produtoJaEstaNoCarrinho = dadosCarrinho.produtos.includes(body.idProduto)

        //removendo produto caso exista no carrinho
        if(produtoJaEstaNoCarrinho){
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