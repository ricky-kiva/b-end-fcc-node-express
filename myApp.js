require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")

app.use('/public', express.static(__dirname + '/public')) // express static to access public file such css

app.use(function logger(req, res, next) { // Make a logger middleware using express().use
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get('/', function (req, res) { // app.METHOD(PATH, HANDLER). Handler is a function with (req, res) param
    res.sendFile(__dirname + "/views/index.html") // HANDLER.res.sendFile will send file from given path as it's param
})

app.get('/', function (req, res) { // app.METHOD(PATH, HANDLER). Handler is a function with (req, res) param
    res.send('Hello Express') // sending the string to '/' directory
})

app.get('/json', function (req, res) { // get a json request to the route '/json'

    let message = "Hello json";

    if (process.env.MESSAGE_STYLE === 'uppercase') { // take environment variable value to make a logic
        message = message.toUpperCase();
    }

    res.json({
        "message": message // the requested json
    })
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res, next) => {
    res.send({time: req.time});
})

module.exports = app;
