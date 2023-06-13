const bcrypt = require('bcrypt');

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}
function copmarePassword(password, hashed) {

    return bcrypt.compareSync(password, hashed)
}


module.exports = {
    hashPassword,
    copmarePassword
}