// modulos externos
import Joi from "joi";

// modulos internos

const cadastroSchema = Joi.object({
    "nome": Joi.string().min(3).required(),
    "email": Joi.string().email().required(),
    "senha": Joi.string().pattern(new RegExp(`^[^//s]{6, 30}$`)).required(),
    "confirmar": Joi.string().valid(new ref("senha")).required()
})

