const express = require('express')
const router = express.Router();

const { getbootCamps, createbootCamp, ubdatebootCamp, deletebootCamp, getbootCamp, getBootcampsInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);
// Include other resource routers
const courseRouter = require('./courses');
// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/:id/photo').put(bootcampPhotoUpload)

router
    .route('/')
    .get(getbootCamps)
    .post(createbootCamp)

router
    .route('/:id')
    .get(getbootCamp)
    //.put(ubdatebootCamp)
    .delete(deletebootCamp)



module.exports = router;