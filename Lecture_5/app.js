const http = require('http');
const requestHandler = require('./user')
const server = http.createServer(requestHandler);
const port = 4000
server.listen(port,() => {
    console.log(`Server is listening on the address http://localhost:${port}`)
})
