// Using Node.js `require()`
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxlength: 255, required: true, },
    description: { type: String, default: '', maxlength: 600 },
    image: { type: String, default: '', maxlength: 255 },
    videoId: { type: String, default: '', maxlength: 255, required: true, },
    level: { type: String, default: '', maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true }, //khi gặp unique = true thì mongoose-slug-generator không cho dữ liệu trùng, nó như primary-key vậy đó.
    //unique: true khi trùng sẽ tự thêm chuỗi id ngắn vào nên đảm bảo không trùng trường slug
}, {
    timestamp: true, //tìm hiểu nó. nó dùng để tự định nghĩa ngày tạo ra và ngày update ý
}, );

module.exports = mongoose.model('Course', Course);