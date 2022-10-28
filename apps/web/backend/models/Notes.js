const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    secretKey: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    authorUsername: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('note', NoteSchema);