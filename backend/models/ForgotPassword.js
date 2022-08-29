const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const fpSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('fpassword', fpSchema);