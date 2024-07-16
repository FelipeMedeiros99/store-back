import jwt from "jsonwebtoken"
import dotenv from "dotenv"
/**
 * retorna um token com base em um objeto inserido
 * @param {Object} objeto - objeto que será encriptado
 * @returns - token
 */
export default function criarToken(objeto){
    dotenv.config()
    const CHAVESECRETA = process.env.CHAVESECRETA
    const token = jwt.sign(objeto, CHAVESECRETA, {expiresIn: 60*25})
    return token
}