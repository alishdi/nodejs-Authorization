const { Router } = require('express');
const { getProfile } = require('../controller/profile.contorller');

const profileroute = Router()

profileroute.get('/profile',getProfile)

module.exports = {
    profileroute
}