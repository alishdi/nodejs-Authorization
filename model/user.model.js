const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullName: { type: String, required: true, trim: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, minLength: 5, required: true }
},
    {
        timestamps: true
    }
)

const userModel = model('user', userSchema)

module.exports = {
    userModel
}