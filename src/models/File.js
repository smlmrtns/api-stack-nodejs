const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

File.virtual('url').get(function() {
    let path = encodeURIComponent(this.path);
    return `http://localhost:8000/files/${path}`;
});

module.exports = mongoose.model('File', File);