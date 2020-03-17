const ErrorResponse = require('../utilities/errorResponse')
const Bootcamp = require('../models/Bootcamp')

//@desc       get all bootCamps
//@route      GET/api/v1/bootcamps
//@access     public

exports.getbootCamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json({ sucess: true, count: bootcamp.length, data: bootcamp })
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
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id} `, 404));
        }
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id} `, 404));

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
        res.status(400).json({ success: false, msg: `bad request` })
    }
}
// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updatebootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!bootcamp) {
            res.status(400).json({ success: false, msg: `not found` });
        }
        req.status(200).json({ success: true, data: bootcamp });
    } catch (error) {
        res.status(400).json({ success: false, msg: `bad request` });

    }


}
// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deletebootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if (!bootcamp) {
            res.status(400).json({ success: false, msg: `bad request` });
        }
        req.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, msg: `bad request` });

    }
}