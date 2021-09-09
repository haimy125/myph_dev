module.exports = {
    mutiMongooseToObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject())
    }
};