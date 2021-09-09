// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxlength: 255 },
    description: { type: String, default: '', maxlength: 600 },
    image: { type: String, default: '', maxlength: 255 },
    createAd: { type: Date, default: Date.now },

});