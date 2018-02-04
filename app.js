const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');


var app = express();
var http = require('http').Server(app);

// making it global so that we can use it in routes
global.io = require('socket.io')(http);

io.on('connection', function(socket) {
    socket.on('initialized', function () {
        console.log('A socket initialized!');
    });
});

// Server listening
http.listen(3000, function(){
    console.log('CO2 is now listening on 3000!');
});

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());

//
var index = require('./routes/index');

// --- Controllers STARTs ------
app.use('/', index);
//----- Controllers ENDs ------


// catch 404 and forward to error handler
app.use(function(req, res) {
  var err = new Error('Not Found');
  err.status = 404;
});

module.exports = app;