import produtoSchema from "../schemas/produtoSchema.js";
import filtrarErrosDeSchema from "../ferramentas/filtrarErrosDeSchemas.js"
export default async function validaDadosProdutoMiddleware(req, res, next){
    const {body: dadosProduto} = req;
    try{
       await produtoSchema.validateAsync(dadosProduto)
       next()
    }catch(e){
        const erroFiltrado = filtrarErrosDeSchema(e)
        res.status(406).send()
    }

}