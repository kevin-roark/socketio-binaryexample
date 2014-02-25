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

    var dogeTimes = [];
    var dogeToSend = 10;
    var sendDogeTime;

    function sendDoge() {
      fs.readFile(__dirname + '/images/doge.jpg', function(err, data){
        if (err) return done(err);
        sendDogeTime = new Date().getTime();
        socket.emit('doge', data);
      });
    };

    // immediately on connection send the client a doge image!!
    sendDoge();

    socket.on('got-doge-take-another', function(buf) {
      var receivedTime = new Date().getTime();
      var sendTime = receivedTime - sendDogeTime;
      console.log('took ' + sendTime + ' ms to send and receive doge image');
      dogeTimes.push(sendTime);
      if (dogeTimes.length < dogeToSend) {
        sendDoge();
      }
      else {
        var sumTimes = 0;
        for (var i=0; i<dogeTimes.length; i++) { sumTimes += dogeTimes[i];}
        var avgTime = sumTimes / dogeTimes.length;
        console.log('average time to send and receive: ' + avgTime + ' ms');
      }
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
