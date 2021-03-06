var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    
    socket.on('username', (username, msg) => {
      io.emit('username', username , msg);
    });
    socket.on('disconnect', (username) => {
      io.emit('disconnect', username);
      
    });
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
  
    });
  });


http.listen((process.env.PORT || 5000), () => {
    console.log('listening on *:5000');
});