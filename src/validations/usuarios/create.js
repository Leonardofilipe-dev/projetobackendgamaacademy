const {validate, Joi} = require("express-validation")

// validação - colocando nome, e-mail e senha como obrigatório

module.exports = validate({
   

    body:Joi.object({
    user_name:Joi.string().required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(8).required()

    }),
})