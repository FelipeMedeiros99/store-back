import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const BANCO = process.env.BANCO;
const mongoClient = new MongoClient(BANCO);
let db;
try{
    await mongoClient.connect()
    db = mongoClient.db("meu-banco")
    console.log("Banco de dados conectado")
    
}catch(e){
    console.log(`Erro ao conectar ao banco: ${e}`)
}

export default db