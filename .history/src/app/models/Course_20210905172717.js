// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxlength: 255, required: true, },
    description: { type: String, default: '', maxlength: 600 },
    image: { type: String, default: '', maxlength: 255 },
    slug: { type: String, default: '' },
    videoId: { type: String, default: '', maxlength: 255, required: true, },
    level: { type: String, default: '', maxlength: 255 },
}, { timestamp: true });

module.exports = mongoose.model('Course', Course);