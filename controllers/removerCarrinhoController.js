// modulos externos
import dotenv from "dotenv"

// modulos internos
import db from "../banco.js";

export default async function removerCarrinhoController(req, res){
    dotenv.config()
    const {body, dadosUsuarioToken:dadosUsuario} = req;
    const CARRINHOSBANCO = process.env.CARRINHOSBANCO;
    try{
        
        // buscando dados do carrinho
        let dadosCarrinho = await db.collection(CARRINHOSBANCO).findOne({"email": dadosUsuario.email})
        
        // verificando se produto está no carrinho do usuário
        const produtoJaEstaNoCarrinho = dadosCarrinho.produtos.includes(body.idProduto)

        //removendo produto caso exista no carrinho
        if(produtoJaEstaNoCarrinho){
            dadosCarrinho = await db.collection(CARRINHOSBANCO).findOneAndUpdate({"email": dadosUsuario.email}, 
                {
                    $pull: {"produtos": body.idProduto}
                },
                {returnDocument: 'after'}
            )
            // enviando os produtos após removido
            return res.status(200).send(dadosCarrinho);
        }
        
       
    }catch(e){
        res.status(404).send(`Erro ao adicionar produto ao carrinho: \n${e}`)
    }
}