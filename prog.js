const http = require('http');
const url = require('url')
const route = require('./route')

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
            route('index.html', res)
            break;
        default:
            res.end('Error 404 not found')
            break;
    }


})
server.listen(3000, '127.0.0.1', () => {
    console.log('server running ....')
})

