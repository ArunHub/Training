const express = require('express');

const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (request, response)=>{
    response.send('<h1>Company didnt provide breakfast</h1>')
})
app.get('/index', (request, response)=>{
    response.sendFile(__dirname+'/public/index.html')
})
app.get('/', (request, response)=>{
    response.send('<h1>Company didnt provide breakfast</h1>')
})

app.listen(3000, ()=>{
    console.log("Express app is running on  port: 3000");
})