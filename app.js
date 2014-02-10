var express = require('express');
var app = express();
var fs = require('fs');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/client'));

var doge_texts = ['plz', 'lol', 'such node', 
                  'such binary', 'how data', 'cool event',
                  'doge socket', 'many socket', 'coins?',
                  'wow', 'so image', 'am doge',
                  'elite connect'
];

function get_doge_text() {
    var items = doge_texts;
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

io.on('connection', function(socket) {

    // immediately on connection send the client a doge image!!
    fs.readFile(__dirname + '/images/doge.jpg', function(err, data){
        if (err) return done(err);
        socket.emit('doge', data);
    });

    // when the client asks for doge text, we give it to them (as binary just to show it off)
    socket.on('get-doge-plz', function(data) {
       socket.emit('plz', new Buffer(get_doge_text(), 'utf8'));
    });

    // when the client sends a file, log it here just to see that we get it
    socket.on('send-file', function(buf) {
        console.log(buf.toString('utf8'));
    });
});

server.listen(3001);
