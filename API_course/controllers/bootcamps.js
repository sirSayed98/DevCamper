const Bootcamp = require('../models/Bootcamp')

//@desc       get all bootCamps
//@route      GET/api/v1/bootcamps
//@access     public

exports.getbootCamps = (req, res, next) => {
    res.status(200).json({
        sucess: true,
        msg: 'list of bootcamps'
    })
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getbootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `get bootcamp id : ${req.params.id}` });
}



// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createbootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    }
    catch (err) {
        res.status(400).json({ success: false })
    }
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updatebootCamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update bootcamp: ${req.params.id}` });
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deletebootCamp = (req, res, next) => {
    res.status(200).json({
        success: true, msg: 'delete is done'
    });
}