const Bootcamp = require('../models/Bootcamp')

//@desc       get all bootCamps
//@route      GET/api/v1/bootcamps
//@access     public

exports.getbootCamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({ sucess: true, data: bootcamp })
    } catch (error) {
        res.status(200).json({ success: false, msg: 'bad request' })
    }

}
// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getbootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp) {
            res.status(400).json({ sucess: false, msg: "no existed id" })
        }
    } catch (error) {
        res.status(400).json({ sucess: false, msg: "bad request" })
    }
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