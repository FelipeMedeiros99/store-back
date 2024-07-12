// modulos internos
import filtrarErrosDeSchemas from "../ferramentas/filtrarErrosDeSchemas.js";
import cadastroSchema from "../schemas/cadastroSchema.js"

export default async function validaDadosCadastroMiddleware(req, res, next){
    const {body: dadosDeCadastro} = req;

    try{
        // validando os dados
        await cadastroSchema.validateAsync(dadosDeCadastro, {abortEarly: false})
        next()

    }catch(e){
        // filtrando os erros, caso existam
        const mensagemErro = filtrarErrosDeSchemas(e);
        res.status(406).send(`Dados inválidos: ${mensagemErro||e}`);
    }


}