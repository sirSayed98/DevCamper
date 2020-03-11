const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        sucess: true,
        msg: 'list of bootcamps'
    })
})
module.exports = router;