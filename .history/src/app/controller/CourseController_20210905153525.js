const e = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => { //1 course thì không cần ngoặc tròn bao nó
                res.render('courses/show', { course });
            })
            .catch(next);
        // res.send('COURSE DETAIL - ' + req.params.slug);
    }
}

module.exports = new CourseController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do