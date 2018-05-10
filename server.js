const io = require('socket.io')();
const port = 8000;

let users = [];
let i = 0;
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
    let theuser = users.find((user) => user.id === id)
    theuser.ready = status;
    if(status === true) {
      i++
    } else {
      i--
    }
    console.log(i)
    io.emit('current-users', users)
    for (let user of users) {
      if(user.ready === true) {
        if(i === users.length){
          console.log('all users ready')
        } else {
          console.log('user are not ready')
        }
      }
    }
    })

    
  socket.on('disconnect', () => {
    io.emit('user disconnected')
  })

  socket.on('test', () => console.log('Test worked!'))
})


io.listen(port);
console.log('Listening on port ', port);