// importações externas

// importações locais
import filtrarErrosDeSchema from "../ferramentas/filtrarErrosDeSchemas.js";
import loginSchema from "../schemas/loginSchema.js";

export default async function loginController(req, res, next){
    const {body:dados} = req;
    try{
        await loginSchema.validateAsync(dados)
        next()

    }catch(e){
        const erro = filtrarErrosDeSchema(e);
        res.status(401).send(`Dados incorretos: ${erro||e}`);
    };
};
