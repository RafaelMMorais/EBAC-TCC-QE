const Joi = require ('joi')

const cuponsSchema = Joi.object({
    cupons: Joi.array().items({
        code: Joi.string().required(),
        amount: Joi.string().required(),
        discount_type: Joi.string().required(),
        description: Joi.string().required()
    }),
    quantidade: Joi.number().required()
})

export default cuponsSchema