var carbonDiOxide = function (socket) {
    var value = setInterval(getRandomIntInclusive, 10000, socket);
};

// Function for generating random value between 350 and 2000
 function getRandomIntInclusive(socket) {
    var min = 350;
    var max = 5000;
    min = Math.ceil(min);
    max = Math.floor(max);
    var data = Math.floor(Math.random() * (max - min +1)) + min;
    var jsondata = JSON.parse(data);
    socket.emit('res_carbon_add',jsondata);
};

//carbonDiOxide();

module.exports = {carbonDiOxide};