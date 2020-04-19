const express = require('express')
const router = express.Router();

const { getbootCamps, createbootCamp, ubdatebootCamp, deletebootCamp, getbootCamp, getBootcampsInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
// Include other resource routers
const courseRouter = require('./courses');

const advancedResults = require('../middleware/advancedResults');
const Bootcamp = require('../models/Bootcamp');

const { protect } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/:id/photo').put(protect, bootcampPhotoUpload)

router
    .route('/')
    .get(advancedResults(Bootcamp, 'courses'), getbootCamps)
    .post(protect, createbootCamp)

router
    .route('/:id')
    .get(getbootCamp)
    //.put(protect, ubdatebootCamp)
    .delete(protect, deletebootCamp);



module.exports = router;