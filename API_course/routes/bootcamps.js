const express = require('express')
const router = express.Router();

const { getbootCamps } = require('../controllers/bootcamps');

router.route('/')
    .get(getbootCamps)
//  .post(createboot camp)

// router.route('/:id')
//     .put(ubdatebootcamp)
//     .delete(deletebootcamp)
//     .get(bootcamp)
module.exports = router;