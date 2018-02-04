var express = require('express');
var router = express.Router();

var dataModel = require('../model/data');

router.get('/', function(req, res, next) {
    console.log("Inside /");
    dataModel.carbonDiOxide(function () {
        res.render('index');
    });

});

io.on('connection', function(socket) {
        //console.log("Inside routes/carbon");
        socket.on('req_carbon_add', function () {
                dataModel.carbonDiOxide(socket);
                //console.log("Inside routes/index");
        });
});


module.exports = router;
