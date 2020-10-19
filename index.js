var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('username', (username) => {
    
      io.emit('username', username);

    });
    
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
  
    });
  });


http.listen(80, () => {
    console.log('listening on *:80');
});