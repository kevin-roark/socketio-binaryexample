var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'));

io.on('connection', function(socket){
    socket.on('doge', function(data) {
       console.log('DOGEEEE');
    });

    fs.readFile(__dirname + '/images/doge.jpg', function(err, data){
        if (err) return done(err);
        socket.emit('plz', new Buffer('plz', 'utf8'));
        socket.emit('doge', data);
    });
});

server.listen(3001);
