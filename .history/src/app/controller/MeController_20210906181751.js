const e = require('express');
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class MeController {
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
}

module.exports = new MeController();
//exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do