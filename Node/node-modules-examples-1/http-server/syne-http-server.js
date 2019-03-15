const http = require('http');
const fs = require('fs');
const  server = http.createServer((request, response)=>{
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    switch (request.method) {
        case "GET":
            if (request.url==='/index') {                
                let streamFs = fs.createReadStream(__dirname + "/public/index.html", 'utf8');
                streamFs.pipe(response);
            }else if (request.url==='/about') {
                let streamFs = fs.createReadStream(__dirname + "/public/about.html", 'utf8');
                streamFs.pipe(response);
            }else{
                let streamFs = fs.createReadStream(__dirname + "/public/about.html", 'utf8');
                streamFs.pipe(response); 
            }
            break;
    
        default:
            break;
    }
    // response.setHeader('content-type', 'text/html');
    // response.write('welcome to saturday weekend mode');
    // response.end();
})

server.listen(9090, () => {
    console.log('server listening at port : 9090');    
})