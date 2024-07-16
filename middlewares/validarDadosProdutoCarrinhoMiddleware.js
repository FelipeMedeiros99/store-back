import produtoCarrinhoSchema from "../schemas/produtoCarrinhoSchema.js";
import filtrarErrosDeSchema from "../ferramentas/filtrarErrosDeSchemas.js"

export default async function validarDadosProdutoCarrinhoMiddleware(req, res, next){
    const {body:dadosProduto} = req;
    try{
        await produtoCarrinhoSchema.validateAsync(dadosProduto)
        next()
    }catch(e){
        const erro = filtrarErrosDeSchema(e)
        res.status(404).send(`Erro ao validar id do produto: ${erro || e}`)
    }
}