const io = require('socket.io')();
const port = 8000;

let users = [];
// randomize a room name?

io.on('connection', (socket) => {
  console.log('Socket id: ',socket.id)

  io.emit('clientid', socket.id)
  
  socket.on('userinfo', (user) => {
    users.push(user)
    console.log(users)
  })

  socket.on('disconnect', () => {
    io.emit('user disconnected')
  })

})


io.listen(port);
console.log('Listening on port ', port);