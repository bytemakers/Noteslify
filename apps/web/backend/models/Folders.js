const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const FolderSchema = new Schema({
    title: {
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
    isDeleted: {
        type: Boolean,
        default: false
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'note',
        default: null
    }]
}, { timestamps: true });

module.exports = mongoose.model('folder', FolderSchema);