const io = require('socket.io')();
const Game = require('./Game')
const port = 8000;

let game = new Game();

io.on('connection', (socket) => {
  console.log('Socket id: ',socket.id)
  // console.log(game.users)
  io.emit('current-users', game.users)
  socket.emit('clientid', socket.id)
  
  socket.on('join-game', (user) => { 
    game.addUser(user)
    io.emit('current-users', game.users)
  })

  // socket.on('user-ready', (id, status) => {
  //   game.changeReadyStatus(id, status)
  //   io.emit('current-users', game.users)
  //   let start = (num) => {
  //     if ( num > 0) {
  //       io.emit('countdown-numbers', num)
  //       } 
  //       else if (num === 0) {
  //         console.log('push')
  //         io.emit('push-to-choice')
  //       }
  //      }
  //   game.startCountdown(start)
    
  //   })

    socket.on('user-ready', (id, status) => {
      game.changeReadyStatus(id, status)
      io.emit('current-users', game.users)
      if (game.numOfReadyUsers === game.users.length) {
        io.emit('readybutton')
      }
      
      })

  socket.on('disconnect', () => {
    game.removeUser(socket.id)
    io.emit('current-users', game.users)
  })

  socket.on('test', () => console.log('Test worked!'))
})

io.listen(port);
console.log('Listening on port ', port);