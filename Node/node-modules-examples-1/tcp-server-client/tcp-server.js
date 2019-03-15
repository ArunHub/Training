const net = require('net');

const server = net.createServer();
server.on('connection', socket=>{
    let remoteAddress = `${socket.remoteAddress}: ${socket.remotePort}`;
    console.log(`New Connection from - ${remoteAddress}`);
    socket.on('data', data=>{
        console.log('Message received from Client is'+data.toString());
        socket.write('server received -' +data.toString());
    })
    socket.once('close', ()=>{
        console.log(`connection is closed by ${remoteAddress}`);
    })
    socket.on('error', err=>{
        console.log(err);        
    })
})

server.listen(9800, ()=>{
    console.log('synechron TCP is connecting on port : 9800');    
})