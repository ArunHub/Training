const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync(__dirname+'/synechronblrkey.pem'),
    cert: fs.readFileSync(__dirname+'/synechronblrcert.pem')
}

const server = https.createServer(options, (request, response)=>{
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    response.write('<h1>Lets check synecrhon securities network');
    response.end();
})

server.listen(8080, ()=>{
    console.log('synechrpon security server at port: 8080');
    
})