console.log("Hello world")
const http = require('http');
function requestListener(req,resp){
    console.log(req)
    process.exit()
}
const server = http.createServer(requestListener);
const port = 4000
server.listen(port,() => {
    console.log(`Server is listening on the address http://localhost:${port}`)
})