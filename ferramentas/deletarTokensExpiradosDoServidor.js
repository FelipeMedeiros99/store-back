//modulos externos
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// modulos internos 
import db from "../banco.js";

export default async function deletarTokensExpiradosDoServidor() {
    dotenv.config();
    const CHAVESECRETA = process.env.CHAVESECRETA;
    const TOKENSBANCO = process.env.TOKENSBANCO;

    function validaToken(token) {
        try{
            jwt.verify(token, CHAVESECRETA)
            return false
        }catch(e){
            return true
        }
    }
    
    try {
        const objetosToken = await db.collection(TOKENSBANCO).find({}).toArray();
        let tokensExpirados = objetosToken.filter((objetoToken) => validaToken(objetoToken.token));
        
        console.log(tokensExpirados)
        let idsExpirados = tokensExpirados.map((objetoToken)=>objetoToken._id);

        // console.log(tokensExpirados)

        // deletando token
        await db.collection(TOKENSBANCO).deleteMany({
            _id: {$in: idsExpirados}
        });

    } catch (e) {
        console.log("Erro ao deletar tokens: ", e);
    }
}
