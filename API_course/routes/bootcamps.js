const express = require('express')
const router = express.Router();

const { getbootCamps, createbootCamp, ubdatebootCamp, deletebootCamp, getbootCamp } = require('../controllers/bootcamps');

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