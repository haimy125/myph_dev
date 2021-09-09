// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxlength: 255, required: true },
    description: { type: String, default: '', maxlength: 600 },
    image: { type: String, default: '', maxlength: 255 },
    slug: { type: String, default: '' },
    videoId: { type: String, default: '', maxlength: 255 },
    level: { type: String, default: '', maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);