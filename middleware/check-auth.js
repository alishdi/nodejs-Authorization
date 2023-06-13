const { userModel } = require("../model/user.model");
const { verifyToken } = require("../utils/jwt");

async function checkAuth(req, res, next) {
    try {
        console.log(req.headers.authorization);
        const authorization = req?.headers?.authorization;
        const [bearer, token] = authorization?.split(" ");
        if (bearer && bearer.toLowerCase() === "bearer") {
            if (token) {
                const verifyResult = verifyToken(token)
                const { email } = verifyResult
                
                const user = await userModel.findOne({ email })
                req.isAuthenticated = !!user
               
                if (!user) throw { status: 404, message: 'not found user account login againّ'}

                req.user = {
                    fullName: user.fullName,
                    email: user.email
                }
                return next()
            }
            throw { status: 404, message: 'login againّ' }

        }
        throw { status: 404, message: 'authorization failed please login again' }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkAuth
}