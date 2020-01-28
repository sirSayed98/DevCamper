const fs = require('fs');
const url = require('url')
function handle(path, res) {
    fs.readFile(path, null, (err, data) => {
        if (err) {
            res.end('cannot read file')
        }
        else {
            res.end(data)
        }
    })
}

function route(req, res) {
    const path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            handle('index.html', res)
            break;
        default:
            res.end('Error 404 not found')
            break;
    }
}
module.exports = route;