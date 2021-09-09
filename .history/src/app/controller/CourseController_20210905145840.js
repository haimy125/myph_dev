const e = require('express');
const Course = require('../models/Course');
const { mutiMongooseToObject } = require('../../util/mongoose');
class CourseController {
    //[GET] /courses/:slug
    show(req, res) {


        res.send('COURSE DETAIL - ' + req.params.slug);
    }
}

module.exports = new CourseController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do