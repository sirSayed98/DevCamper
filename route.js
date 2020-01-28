const fs = require('fs');
function route(path, res) {
    fs.readFile(path, null, (err, data) => {
        if (err) {
            res.end('cannot read file')
        }
        else {
            res.end(data)
        }
    })

}
module.exports = route;