// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');


const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxlength: 255, required: true, },
    description: { type: String, default: '', maxlength: 600 },
    image: { type: String, default: '', maxlength: 255 },
    slug: { type: String, default: '' },
    videoId: { type: String, default: '', maxlength: 255, required: true, },
    level: { type: String, default: '', maxlength: 255 },
}, {
    timestamp: true, //tìm hiểu nó. nó dùng để tự định nghĩa ngày tạo ra và ngày update ý
});

module.exports = mongoose.model('Course', Course);