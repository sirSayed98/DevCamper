const http = require('http');
const server = http.createServer((req, res) => {
    res.end('mya mya ya basha'); // print on page itself
   // console.log(res);

})
server.listen(3000, '127.0.0.1', () => {
    console.log('server running')
}) 