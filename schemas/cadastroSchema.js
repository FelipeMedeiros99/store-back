// modulos externos
import Joi from "joi";

// modulos internos

const cadastroSchema = Joi.object({
    "nome": Joi.string().min(3).required(),
    "email": Joi.string().email().required(),
    "senha": Joi.string().pattern(new RegExp(`^[a-zA-Z0-9!@#$%&*?]{6,30}$`)).required(),
    "confirmar": Joi.string().valid(Joi.ref("senha")).required()
});



export default cadastroSchema