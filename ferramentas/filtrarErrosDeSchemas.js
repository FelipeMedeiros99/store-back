export default function filtrarErrosDeSchemas(erro){
    const mensagensErroFiltradas = erro.details.map((err)=>err.message)
    return mensagensErroFiltradas
}
