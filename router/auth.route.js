const { Router } = require('express');
const { login, register } = require('../controller/auth.controller');
const authRoute = Router()

authRoute.post('/login',login)
authRoute.post('/register',register)

module.exports = {
    authRoute
}