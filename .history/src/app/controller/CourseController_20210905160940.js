const e = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => { //1 course thì không cần ngoặc tròn bao nó
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
        // res.send('COURSE DETAIL - ' + req.params.slug);
    }

    //[create] /courses/create
    create(req, res, next) {
        req.send('courses')
    }
}

module.exports = new CourseController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do