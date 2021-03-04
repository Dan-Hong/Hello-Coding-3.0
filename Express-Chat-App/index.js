const express = require('express');
const socket = require('socket.io');
const app = express();
const server = app.listen(8080, () => {
  console.log("Server created");
});
const io = socket(server);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    io.sockets.emit('message', message);
  });
});