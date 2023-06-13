const { Router } = require('express');
const { authRoute } = require('./auth.route');
const { profileroute } = require('./profile.route');
const { checkAuth } = require('../middleware/check-auth');
const indexRouter = Router()

indexRouter.use('/auth',authRoute)

indexRouter.use('/user',checkAuth,profileroute)

module.exports = {
    indexRouter
}