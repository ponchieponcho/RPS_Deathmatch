const io = require('socket.io')();
const port = 8000;

let users = [];

io.on('connection', (socket) => {
  console.log('Client id: ',socket.id)
  io.emit('clientid', socket.id)
  socket.on('ferret', function (name, fn) {
    fn('woot');

  socket.on('disconnect', () => io.emit('user disconnected'))
  });

})

io.on('username', username => {
  console.log('emitted username: ',username);
    users.push({userid:socket.id, username:username})
    console.log('users:', users)
})

io.listen(port);
console.log('Listening on port ', port);