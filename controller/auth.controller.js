const { loginValidation, registerValidationSchema } = require("../middleware/auth.validation");
const { userModel } = require("../model/user.model");
const { hashPassword, copmarePassword } = require('../utils/auth.hashPass');
const { signToken } = require("../utils/jwt");

async function register(req, res, next) {
    try {
        await registerValidationSchema.validateAsync(req.body)
        const { fullName, email, password } = req.body;
        const user = await userModel.create({
            fullName,
            email,
            password: hashPassword(password)
        })
        res.send(user)
    } catch (error) {
        next(error)
    }
}
async function login(req, res, next) {
    try {
        await loginValidation.validateAsync(req.body)
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        if (!user) {
            throw { status: 404, message: 'not found user' }
        }
        if (copmarePassword(password, user.password)) {
            const token = signToken({ id: user._id, email: user.email })
            res.send({ token, msg: 'Login SuccesFully' })
        } else {
            throw {
                status: 404,
                message: 'email or password is incorrect'
            }
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}



module.exports = {
    register, login
}