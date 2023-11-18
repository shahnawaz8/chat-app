// index.js

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const connect = require('./db')
const User = require('./user');
const Chat = require('./chat');

const app = express();
const server = http.createServer(app);
const io = socketIO(server,{
    cors: {
      origin: "http://localhost:3000"
    }
  });

app.get('/', (req, res) => {
  return res.send('working...')
});

io.on('connection', (socket) => {
  console.log('A user connected',socket.id);
  

  // Handle events from the client
  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);

    // Broadcast the message to all connected clients
    io.emit('send message', msg);
  });
  socket.on('message from', (msg) => {
    console.log('Message: id' + msg);

    // Broadcast the message to all connected clients
    console.log('message come from'+ msg.message)
    io.emit(msg.sender, msg.message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


server.listen(process.env.PORT || 8080, () => {
    connect();
    console.log('Server listening on http:/c/localhost:8080');
});
