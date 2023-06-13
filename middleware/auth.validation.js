const Joi = require('joi')

const loginValidation = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(20).required().pattern(/[a-zA-z0-9]{6,9}/)
    })

const registerValidationSchema =  Joi.object({
        email: Joi.string().email().required(),
        fullName: Joi.string().alphanum().min(5).max(30).required(),
        password: Joi.string().min(6).max(20).required().pattern(/[a-zA-z0-9]{6,9}/),
   
    })


module.exports = {
    loginValidation,
    registerValidationSchema
}