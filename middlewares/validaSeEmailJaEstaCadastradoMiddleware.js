import db from "../banco.js";

export default async function validaSeEmailJaEstaCadastradoMiddleware(req, res, next){
    const {body:dados} = req;

    try{
        const usuario = await db.collection("store-clients").findOne({"email": dados.email})
        if(usuario !== null){
            return res.status(401).send("Este email já está cadastrado")
        }
        next()
    }catch(e){
        res.status(404).send(`Erro ao verificar se email já está cadastrado: \n${e}`)
    }

}