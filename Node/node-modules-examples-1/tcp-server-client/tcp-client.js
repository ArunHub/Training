const net = require('net');

let client = new net.Socket();
client.connect(9800, '127.0.0.1');

client.on('data', data=>{
    client.write('I am in bangalore synechron');
    console.log(data.toString());
    
})

client.on('close', ()=> {
    console.log('connection closed from client side successfully');
    
})