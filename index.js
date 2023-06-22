const express = require('express');
const socket = require('socket.io');
const app = express();

var server = app.listen('4000', function() {
    console.log('Server running on http://localhost:4000');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', function(socket) {
    console.log('User Connected : ' + socket.id);

    socket.on('join', function(roomName) {
        var rooms = io.sockets.adapter.rooms;
        var room = rooms.get(roomName);
    });
});
