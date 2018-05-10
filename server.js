const io = require('socket.io')();
const port = 8000;

let users = [];
// randomize a room name?

io.on('connection', (socket) => {
  console.log('Socket id: ',socket.id)
  io.emit('current-users', users)
  socket.emit('clientid', socket.id)
  
  socket.on('join-game', (user) => {
    users.push(user)
    io.emit('current-users', users)
  })

  socket.on('user-ready', (id, status) => {
    console.log(id)
    // console.log(status)
    let theuser = users.find((user) => user.id === id)
    theuser.ready = status;
    io.emit('current-users', users)
  })
  // if (user.id === id) {
      //   user.ready = status
      //   console.log(users)
      // }
    
  socket.on('disconnect', () => {
    io.emit('user disconnected')
  })

  socket.on('test', () => console.log('Test worked!'))
})


io.listen(port);
console.log('Listening on port ', port);