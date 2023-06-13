const jwt = require("jsonwebtoken");
const secret = 'hnvf923847q8pprt4ecgbhuy7esvgnju684za3465ytrxs4578@00d(_*^%3dsdds';

function signToken(payload) {

    return jwt.sign(payload, secret, {
        expiresIn: 1000 * 60 * 60 * 24 * 30
    })
}
function verifyToken(token) {
    return jwt.verify(token, secret)

}

module.exports={
    signToken,verifyToken
}