//pacotes externos
import dotenv from "dotenv";
// pacotes internos
import db from "../banco.js";

export default async function loginController(req, res){
    const {dadosUsuarioBanco, token} = req;
    dotenv.config();
    const PRODUTOSBANCO = process.env.PRODUTOSBANCO;
    let admin = false;


    try{
        const produtos = await db.collection(PRODUTOSBANCO).find({}).toArray();
        if(dadosUsuarioBanco.nome==="admin"){
            admin = true;
        }
        res.status(200).send({produtos, admin, token});
    }catch(e){
        res.status(404).send(`Erro ao efetuar login: ${e}`);
    }
}