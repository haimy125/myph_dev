const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String, },
    image: { type: String, },
    videoId: { type: String, required: true, },
    level: { type: String, },
    slug: { type: String, slug: 'name', unique: true }, //khi gặp unique = true thì mongoose-slug-generator không cho dữ liệu trùng, nó như primary-key vậy đó.
    //unique: true khi trùng sẽ tự thêm chuỗi id ngắn vào nên đảm bảo không trùng trường slug
}, {
    timestamps: true, //tìm hiểu nó. nó dùng để tự định nghĩa ngày tạo ra và ngày update ý
    // timestamps: { createdAt: 'addedAt', updatedAt: 'modifiedAt' },
}, );

module.exports = mongoose.model('Course', Course);