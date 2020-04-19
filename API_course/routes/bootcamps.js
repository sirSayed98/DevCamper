const express = require('express')
const router = express.Router();

const { getbootCamps, createbootCamp, ubdatebootCamp, deletebootCamp, getbootCamp, getBootcampsInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
// Include other resource routers
const courseRouter = require('./courses');

const advancedResults = require('../middleware/advancedResults');
const Bootcamp = require('../models/Bootcamp');
// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/:id/photo').put(bootcampPhotoUpload)

router
    .route('/')
    .get(advancedResults(Bootcamp, 'courses'), getbootCamps)
    .post(createbootCamp)

router
    .route('/:id')
    .get(getbootCamp)
    //.put(ubdatebootCamp)
    .delete(deletebootCamp)



module.exports = router;