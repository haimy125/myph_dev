const e = require('express');
const Course = require('../models/Course');
const { mutiMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    index(req, res, next) {
        //2 cách viết
        // Course.find({}, function(err, course) {
        //     if (!err) {
        //         res.json(course);
        //     } else {
        //         next(err);
        //         // res.status(404).json({ error: 'error' });//thường lỗi sẽ dùng next để đẩy ra 1 chỗ cụ thể để xử lý, chứ không cần ở đâu cũng hiện dòng error
        //     }
        // });

        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject()) //toObject để biến trở về object bth chứ không phải contrustor
                res.render('home', {
                    // course: course
                    courses: mutiMongooseToObject(courses) //viết vầy nó cũng hiểu như dòng trên, là mình đang truyền course
                });
            })
            // .catch(error => next(err));
            .catch(next); //viết này giống với cách viết ở trên
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do