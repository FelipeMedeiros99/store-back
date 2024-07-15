export default async function validaUsuarioAdmMiddleware(req, res, next){
    const {dadosTokenServidor} = req;
    try{
        if(dadosTokenServidor.email!=="admin@gmail.com"){
            return res.status(401).send("Operação permitida somente para administradores")
        }
        next()

    }catch(e){
        res.status(404).send(`Erro ao validar adm`)
    }

}