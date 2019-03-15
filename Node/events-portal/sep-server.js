const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiReq = require('request');
const employees = require('./dummy-data');
const session = require('express-session');

const app = express();

const eventsBaseUrl = 'http://localhost:9091/api/events';
let appSession;
app.set('views', './views'); // set public / global variable
app.set('view engine', 'pug');

app.use(morgan('dev')); // login logger
app.use(bodyParser.json()); //middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public')); // static middleware
app.use(session({
    secret: 'syne-blr-dev',
    resave: false,
    saveUninitialized: true
}))

// ROUTES


app.get('/', (request, response) => {
    response.render('index', {
        title: 'welcome to synechron events portal',
        subTitle: 'no breakfast provided'
    })
})

app.get('/login', (request, response)=>{
    response.render('login', {
        title: 'synechron Login page',
        subTitle: 'no breakfast provided'
    })
})

app.post('/login', (request, response) => {
    let body = {
        name: request.body.name,
        password: request.body.password
    }

    let options = {
        url: 'http://localhost:9091/syneauth',
        form: body,
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        }
    }

    apiReq.post(options, (err, res, body)=>{
        if(err){
            console.log('eeeeeee',err);
            
            response.send(err)
        }
        console.log('ressssssssssss',res.body);
        console.log('sssssssssssssss',body);
        console.log('secret',request.session.secret);
        
        appSession = request.session;
        appSession.token = JSON.parse(body).token;
        response.redirect('/home');
    })
})

app.get('/home', (request, response) => {
    response.render('home', {
        title: 'Attending Node js training',
        subTitle: 'on saturday but no breakfast'
    })
})

app.get('/events', (request, response) => {
    let options = {
        url: eventsBaseUrl,
        headers: {
            "x-access-token": appSession.token 
        }
    }
    apiReq.get(options, (err, res, body) => {
       
        if (err) {
            return err;
        } else {
            
            response.render('events', {
                title: 'womens events on 8thmarch',
                subTitle: 'on saturday but no breakfast',
                events: JSON.parse(body)
            })
        }
    })
})

app.get('/events/new', (request, response) => {
    response.render('newevent', {
        title: 'Register new events',
        subTitle: 'on saturday but no breakfast'
    })
})

app.post('/register', (request, response) => {
    let options = {
        method: "POST",
        body: request.body,
        json: true,
        url: eventsBaseUrl
    }
    apiReq.post(options, (err, res, body)=>{
        if (err) {
            response.redirect('/newevent');
        }
        response.redirect("/events");
    })
})

app.get('/employees', (request, response) => {
    response.render('employees', {
        title: 'Morgal and wells ppl',
        subTitle: 'on saturday but no breakfast',
        employees: employees
    })
})

app.get('/events/:id', (request, response) => {
    apiReq.get(eventsBaseUrl+`/${request.params.id}`, (err, res, body) => {
        if (err) {
            return err;
        } else {
            response.render('events-details', {
                title: 'deatils : ',
                event: JSON.parse((body))
            })
        }
    })

})

app.get('/about', (request, response) => {
    response.render('about', {
        title: 'Nothing to say',
        subTitle: 'on saturday but no breakfast'
    })
})

app.get('/contact', (request, response) => {
    response.render('contact', {
        title: 'contact synechron',
        subTitle: 'on saturday but no breakfast'
    })
})

app.listen(3001, () => {
    console.log("sep app is running on  port: 3001");
})