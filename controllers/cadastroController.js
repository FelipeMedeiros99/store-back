// modulos externos
import dotenv from "dotenv";
import bcrypt from "bcrypt"

// modulos internos
import db from "../banco.js";


// configurando controller 
export default async function cadastroController(req, res){
 
    // pegando dados da requisição
    let {body} = req;

    // nome do banco
    const USUARIOSBANCO = process.env.USUARIOSBANCO
    
    // apagando confirmação de senha
    delete body.confirmar 
    
    try{

        // criptografando senha
        body.senha = await bcrypt.hash(body.senha, 10)
        
        // salvando dados
        await db.collection(USUARIOSBANCO).insertOne(body)

        // enviando confirmação de cadastro
        res.sendStatus(201)

    }catch(e){
        console.log(`Erro ao salvar usuario`, e)
        res.status(400).send(e)
    }
}