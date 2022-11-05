let express = require('express');
let app = express();

console.log("Hello World")

app.get('/', function (req, res) { // app.METHOD(PATH, HANDLER). Handler is a function with (req, res) param
    res.send('Hello Express') // sending the string to '/' directory
  })

module.exports = app;
