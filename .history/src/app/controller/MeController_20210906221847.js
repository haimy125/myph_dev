const e = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses'));

    }
}

module.exports = new MeController();
//exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do