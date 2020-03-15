const express = require('express')
const router = express.Router();

const { getbootCamps, createbootCamp, ubdatebootCamp, deletebootCamp, getbootCamp } = require('../controllers/bootcamps');

router
    .route('/')
    .get(getbootCamps)
    .post(createbootCamp)

router
    .route('/:id')
    //.put(ubdatebootCamp)
    .delete(deletebootCamp)
    .get(getbootCamp)


module.exports = router;