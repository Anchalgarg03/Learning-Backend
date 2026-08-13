const http = require('http')
function requestListener(req, resp) {
    console.log(req.url, req.method);
    if(req.url === "/Home"){
        resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <h1 style="color: green;">Welcome to the home section</h1>
</head>
<body>
    
</body>
</html>`);
return resp.end();
    }
   else if(req.url === "/Men"){
        resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <h1 style="color: blue;">Welcome to the Men's section</h1>
</head>
<body>
    
</body>
</html>`);
return resp.end();
    }
    else if(req.url === "/WoMen"){
        resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <h1 style="color: pink;">Welcome to the WoMen's section</h1>
</head>
<body>
    
</body>
</html>`);
return resp.end();
    }
    else if(req.url === "/Kids"){
        resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <h1 style="color: Orange;">Welcome to the Kids section</h1>
</head>
<body>
    
</body>
</html>`);
return resp.end();
    }
    else if(req.url === "/Cart"){
        resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <h1 style="color: brown;">Welcome to the cart section</h1>
</head>
<body>
    
</body>
</html>`);
return resp.end();
    }

    resp.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Myntra</title>
    <nav>
        <ul>
             <li><a href="Home">Home</a></li>
            <li><a href="Men">Men</a></li>
            <li><a href="WoMen">Women</a></li>
            <li><a href="Kids">Kids</a></li>
           
            <li><a href="Cart">Cart</a></li>
        </ul>
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