import jwt from "jsonwebtoken";


function validaToken(token){
    let resposta;
    jwt.verify(token, '1234', (erro, decoded)=>{
        if(erro){
            resposta = true
            clearInterval(validandoToken)

        }
        else{
            resposta =  false
        }
    })
    return resposta
}


let token = jwt.sign({"nome": "Felipe"}, '1234', {expiresIn: '5s'})

const validandoToken = setInterval(()=>{
    let resposta = validaToken(token)
    console.log(resposta)
}, 1000)