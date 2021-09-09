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

    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/{{req.body.videoId}}.jpg`;
        const course = new Course(formData);
        course.save();
        res.send('course save');
    }
}

module.exports = new CourseController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do