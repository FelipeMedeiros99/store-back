import bcrypt from "bcrypt";
import dotenv from "dotenv";

/** 
 * valida se a senha está correta
*/
export default async function validarSeSenhaConfereMiddleware(req, res, next){
    dotenv.config()
    const HASH = process.env.HASH
    const {dadosUsuarioBanco, body:dados} = req;

    try{
        const match = await bcrypt.compare(dados, dadosUsuarioBanco);
        if(!match){
            return res.status(401).send("Senha incorreta")
        }
        next();
    }catch(e){
        res.status(404).send(`Erro ao validar senha: ${e}`);
    };
};