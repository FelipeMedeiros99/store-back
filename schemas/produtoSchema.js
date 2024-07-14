import Joi from "joi";

const produtoSchema = Joi.object({
    "nome": Joi.string().min(1).required(),
    "preco": Joi.number().required(),
    "id": Joi.string().min(13).required(),
    "descricao": Joi.string().min(3).required(),
    "especificacoes": Joi.array().items(Joi.string()).required()
})


export default produtoSchema
