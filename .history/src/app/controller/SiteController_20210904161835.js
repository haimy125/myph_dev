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
                // res.status(404).json({ error: 'error' });
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