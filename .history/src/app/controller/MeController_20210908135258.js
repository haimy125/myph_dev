const e = require('express');
const Course = require('../models/Course');
const { mutiMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {

        Course.countDocumentsDeleted()
            .then((deletedCount) => {
                console.log(deletedCount);
            })
            .catch(() => {});

        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutiMongooseToObject(courses)
            }))
            .catch(next);
    };
    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutiMongooseToObject(courses)
            }))
            .catch(next);
    };

}

module.exports = new MeController();
//exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do