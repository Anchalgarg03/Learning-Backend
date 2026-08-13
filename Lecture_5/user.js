//console.log("Hello world")
//const { writeFileSync } = require('fs');

const fs = require('fs');
const requestHandler = (req,resp) => {
    console.log(req.url,req.method)
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
         fs.writeFileSync('user.txt',JSON.stringify(bodyObject))

    })
   
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
module.exports = requestHandler;
