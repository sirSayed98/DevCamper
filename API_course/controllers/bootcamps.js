//@desc       get all bootCamps
//@route      GET/api/v1/bootcamps
//@access     public

exports.getbootCamps = (req, res, next) => {
    res.status(200).json({
        sucess: true,
        msg: 'list of bootcamps'
    })
}