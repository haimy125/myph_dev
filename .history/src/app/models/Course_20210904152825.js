// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' },
    body: String,
    date: Date
});