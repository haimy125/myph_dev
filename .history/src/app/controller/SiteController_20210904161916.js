const e = require('express');
const Course = require('../models/Course');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({}, function(err, course) {
            if (!err) {
                res.json(course);
            } else {
                next(err);
                // res.status(404).json({ error: 'error' });//thường lỗi sẽ dùng next để đẩy ra 1 chỗ cụ thể để xử lý, chứ không cần ở đâu cũng hiện dòng error
            }
        });
        // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController(); //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do