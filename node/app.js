const express = require('express');
const listen = require('socket.io');

const app = express();
const port = 3000;

app.get('/', ( _ ,res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = app.listen( port, () => {
    console.log('Express listening on port', port);
});

const io = listen(server);

io.on('connection', (socket) => {
    const username = color[ Math.floor(Math.random() * 6) ];
    socket.broadcast.emit( 'join',  {  username  } );

    socket.on('client message', (data) => {
        // 연결 된 모든 사람에게 표출 io.emit
        // 자기 자신 빼고 표출 socket.broadcast
        socket.broadcast.emit('server message', {
            message : data.message
        });
    });
});