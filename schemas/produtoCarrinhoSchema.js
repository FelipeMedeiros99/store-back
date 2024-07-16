import Joi from "joi";

const produtoCarrinhoSchema = Joi.object({
    "idProduto": Joi.number().required().min(1000000000000)
});

export default produtoCarrinhoSchema