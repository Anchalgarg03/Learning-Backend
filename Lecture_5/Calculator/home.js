const http = require('http')
function requestListener(req, resp) {
    console.log(req.url, req.method);
    if(req.url === "/Calculator"){
       resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input</title>
    <form action="/submit-details" method="POST" >
    <input type="number" name="first" placeholder="Enter first number">
    <h4>+</h4>
    <input type="number" name="second" placeholder="Enter second number">
    <br>
    <button>Submit</button>
    </form>
</head>
<body>
    
</body>
</html>`)
return resp.end();
    }
    else if(req.url.toLowerCase() === '/submit-details' && req.method==="POST"){
        const body = []
        req.on('data',chunk => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
             const params = new URLSearchParams(fullBody);
             const bodyObject = Object.fromEntries(params);
             console.log(bodyObject)
             const result = Number(bodyObject.first) + Number(bodyObject.second)
             console.log(result)
             //fs.writeFileSync('user.txt',JSON.stringify(bodyObject))
    
        })
    }
    

    resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <nav>
        <h1>Welcome to the home page</h1>
             <ul><a href="Calculator">Calculator</a></ui>
            
    </nav>
</head>
<body>
    
</body>
</html>`)
resp.end();
}
const server = http.createServer(requestListener);
const port = 3000;
server.listen(port,()=>{
    console.log(`Server is listening on the address http://localhost:${port}`)
})