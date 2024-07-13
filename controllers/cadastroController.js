// modulos externos
import dotenv from "dotenv";
import bcrypt from "bcrypt"

// modulos internos
import db from "../banco.js";


/** 
 * armazena os dados no banco de dados
*/
export default async function cadastroController(req, res){
 
    // pegando dados da requisição
    let {body} = req;
    
    // nome do banco
    const USUARIOSBANCO = process.env.USUARIOSBANCO
    const HASH = process.env.HASH
    
    // apagando confirmação de senha
    delete body.confirmar 
    
    try{

        // criptografando senha
        body.senha = await bcrypt.hash(body.senha, parseInt(HASH))
        
        // salvando dados
        await db.collection(USUARIOSBANCO).insertOne(body)

        // enviando confirmação de cadastro
        res.sendStatus(201)

    }catch(e){
        res.status(400).send(`Erro ao salvar usuario: \n ${e}`)
    }
}