const ErrorResponse = require('../utilities/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

//@desc       Register User
//@route      GET/api/v1/auth/register
//@access     public
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    //create user
    const user = await User.create({
        name,
        email,
        password,
        role
    });
    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, data: user, token })

})