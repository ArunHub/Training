const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require("jsonwebtoken");
const config = require("./config");
const mongojs = require("mongojs");
const db = mongojs("synechron");

app.set("syneSecret", config.secret);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.get('/getemployees', (request, response) => {
    db.employee.find({}, function (err, list) {
        if (err) console.log('eeeeeeee', err);
        response.send(list);
    });
});

app.post('/user', (request, response) => {
    let obj = {
        username: 'arun',
        isManager: true,
    }
    response.send(obj);
});

app.post('/empauth', (request, response) => {
    let username = request.body.username;

    db.employee.findOne({
        'username': username
    }, function (err, user) {
        try {
            if (err || null) {
                response.json({
                    success: false,
                    message: 'User is not found in database. Please register before login.'
                });
                response.send(err);
            }

            if (request.headers.bearer === 'token' && username === user.username) {
                let token = jwt.sign(user, app.get('syneSecret'), {
                    expiresIn: 500
                })

                response.json({
                    success: true,
                    message: 'token successfully created. Store for future reference',
                    token
                });
            } else {
                console.log('elseeeeeeeeeeeee')
                response.json({
                    success: false,
                    message: 'Access denied'
                });
            }
        } catch (error) {
            console.error('Db connection error:', error);
        } 
    });

})

app.get('/', (req, res) => res.send('Hello World!'));
app.get('*', (req, res) => res.send('Error occured'));

app.listen(8888, () => console.log(`Example app listening on port 8888!`));