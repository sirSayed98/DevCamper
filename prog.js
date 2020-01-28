const http = require('http');

const route = require('./route')

const server = http.createServer(route)
server.listen(3000, '127.0.0.1', () => {
    console.log('server running ....')
})

