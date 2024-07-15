import Joi from "joi";

const produtoSchema = Joi.object({
    "nome": Joi.string().min(1).required(),
    "preco": Joi.number().required(),
    "descricao": Joi.string().min(3).required(),
    "imagem": Joi.string().uri().required(),
    "especificacoes": Joi.array().items(Joi.string()).required()
})


export default produtoSchema
