const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('user', UserSchema);