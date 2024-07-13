import db from "../banco.js";

/**
 * verifica se o email está cadastrado no banco de dados
 */
export default async function localizarUsuarioBancoDados(req, res, next){
    const {body: dados} = req;
    try{
        const dadosUsuarioBanco = await db.collection("store-clients").findOne({"email": dados.email});
        if(dadosUsuarioBanco==null){
            return res.status(401).send("Usuário não encontrado");
        }
        req.dadosUsuarioBanco = dadosUsuarioBanco;
        next();
    }catch(e){
        res.status(401).send(`Erro ao tentar localizar usuário: ${e}`);
    }

}