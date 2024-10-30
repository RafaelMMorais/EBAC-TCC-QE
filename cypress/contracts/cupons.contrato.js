const Joi = require ('joi')

const cuponsSchema = Joi.object({
    cupons: Joi.array().items({
        
    })
})

export default cuponsSchema