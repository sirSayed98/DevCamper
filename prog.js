const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', null, (err, data) => {
        if (err) {
            res.end('cannot read file')
        }
        else {
            res.end(data)
        }
    })

})
server.listen(3000, '127.0.0.1', () => {
    console.log('server running')
}) 