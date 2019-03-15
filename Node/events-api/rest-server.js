const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongojs = require('mongojs');
const jwt = require('jsonwebtoken');
const db = mongojs('events-portal', ['users']);

const eventRoutes = require('./event-router');
const config = require('./config');
const app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev')); 
app.set('syneSecret', config.secretKey);

app.post('/syneauth', (request, response) => {
    console.log('requestnody', request.body)
    db.users.findOne({ name: request.body.name }, (err, user) => {
    console.log('userrrrrrrr', user)
        
        if (err) {
            throw err;
        }
        if (!user) {
            response.json({
                success: false,
                message: "Access denied!. Please provide correct username"
            });
        } else if (user) {
    console.log('user.password', user.password)
    console.log('request.body.password', request.body.password)
            
            if (user.password !== request.body.password) {
                response.status(403).json({
                    success: false,
                    message: "Access denied!. Please provide correct password"
                });
            } else {
                let token = jwt.sign(user, app.get('syneSecret'), {
                    expiresIn: 2000
                });
                response.json({
                    success: true,
                    message: "token generated for future use",
                    token
                });
            }
        }
    })
})

app.use(function (req, res, next) {
    var token = { token: req.body.token || req.query.token || req.headers['x-access-token'] };
    console.log('tokennnnnnnnn',token)
    if (token.token) {
        jwt.verify(token.token, app.get('syneSecret'), function (err, decoded) {
            if (err) {
                res.send(res.json({ success: false, message: 'We are not able to verify the token!' }));
            } else {
                req.decoded = decoded;
                next();
            }
        });
 
    } else {
        res.status(403).json({
            "success": false,
            "message": 'Please provide the token for verification!'
        });
    }
});

app.use('/api/events', eventRoutes);

app.listen(9091, () => {
    console.log("listenning on port : 9091");
})
