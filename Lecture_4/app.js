//console.log("Hello world")
//const { writeFileSync } = require('fs');
const http = require('http');
const fs = require('fs');
function requestListener(req,resp){
    console.log(req.url,req.method,req.headers)
    if(req.url === '/')
   { resp.setHeader('Content-Type','text/html');
    resp.write('<html>')
    resp.write('<head><title>Complete Coding</head></title>')
    resp.write('<body><h1>Enter your details</h1>');
    resp.write('<form action="/submit-details" method="POST" >')
    resp.write('<input type="text" name="username" placeholder="Enter your name" ><br>')
    resp.write('<label for="Male" >Male</label>')
    resp.write('<input type="radio" id="male" name="gender" value = "male" >')
    resp.write('<label for="FeMale" >FeMale</label>')
    resp.write('<input type="radio" id="female" name="gender" value = "female" >')
    resp.write('<input type="submit" value="submit">')
    resp.write('</form>')
    resp.write('</body>');
    resp.write('</html>')
    return resp.end()
}
else if(req.url.toLowerCase() === '/submit-details' && req.method==="POST"){
    fs.writeFileSync('user-details.txt',"Prashant Jain");
    resp.statusCode = 302;
    resp.setHeader('Location','/');
  //  return res.end();

}
    
        resp.setHeader('Content-Type','text/html');
    resp.write('<html>')
    resp.write('<head><title>Complete Coding</head></title>')
    resp.write('<body><h1>Like / Share / Subscribe</h1><h2>My name is Anchal</h2></body>')
    resp.write('</html>')
    resp.end()
    
}
const server = http.createServer(requestListener);
const port = 4000
server.listen(port,() => {
    console.log(`Server is listening on the address http://localhost:${port}`)
})
/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {
    fs.writeFileSync('user.txt', 'Prashant Jain');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});*/