const express = require('express');
const {
    getCourses,
    getCourse,
    addCourse

} = require('../controllers/courses');

const Course = require('../models/Course');

const router = express.Router({ mergeParams: true });//to add => /bootcamps/:id/courses/

router
    .route('/')
    .get(getCourses)
    .post(addCourse)
router.route('/:id').get(getCourse);
module.exports = router;