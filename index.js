var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('username', (username) => {
    
      io.emit('username', username);

    });
    socket.once
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
  
    });
  });


  app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));