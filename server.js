const io = require('socket.io')();
const port = 8000;

let users = [];

io.on('connection', (socket) => {
  console.log('Client id: ',socket.id)
  io.emit('clientid', socket.id)
  socket.on('username', username => {
    console.log('emitted username: ',username);
    users.push({userid:socket.id, username:username})
    console.log('users:', users)
  })
})

io.on('disconnect', function () {
  io.emit('User Disconnected');
});

io.listen(port);
console.log('Listening on port ', port);