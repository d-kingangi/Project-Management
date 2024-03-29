import joi from 'joi';

export const registerUserSchema = joi.object({
    userName: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().required()
})