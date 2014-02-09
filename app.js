var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'));

var doge_texts = ['plz', 'lol', 'such node', 
                  'such binary', 'how data', 'emits event', 
                  'doge socket', 'many socket', 'coins?'];
function get_doge_text() {
    var items = doge_texts;
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

io.on('connection', function(socket){
    socket.on('get-doge-plz', function(data) {
       socket.emit('plz', get_doge_text());
    });

    fs.readFile(__dirname + '/images/doge.jpg', function(err, data){
        if (err) return done(err);
        socket.emit('doge', data);
    });
});

server.listen(3001);
