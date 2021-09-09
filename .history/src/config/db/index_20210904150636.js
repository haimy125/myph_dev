// Using Node.js `require()`
const mongoose = require('mongoose');

// // Using ES6 imports
// import mongoose from 'mongoose';

async function connect() { //muon dung await thi can thu vien async
    try {
        await mongoose.connect('mongodb://localhost:27017/myph_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failure');
    }

}

module.exports = { connect };