const io = require('socket.io')();
const Game = require('./Game')
const port = 8000;

let game = new Game();

// let interval;

// let countDown = (socket, status) => {
//     console.log('status', status)
//   let num = 10;
//   if (status === true) {
//     interval = setInterval( () => {
//       if (num >= 0) {
//       io.emit('countdown-numbers', num)
//       num--;
//         } 
//       }, 1000)
//   } else if (status === false) { 
//     clearInterval(interval)
//     interval = null;
//     io.emit('countdown-numbers', 'false')
//     }
// }
 
io.on('connection', (socket) => {
  console.log('Socket id: ',socket.id)
  // console.log(game.users)
  io.emit('current-users', game.users)
  socket.emit('clientid', socket.id)
  
  socket.on('join-game', (user) => { 
    game.addUser(user)
    io.emit('current-users', game.users)
  })

  socket.on('user-ready', (id, status) => {
    game.changeReadyStatus(id, status)
    io.emit('current-users', game.users)
    game.startCountdown()
    })

  socket.on('disconnect', () => {
    game.removeUser(socket.id)
    io.emit('current-users', game.users)
  })

  socket.on('test', () => console.log('Test worked!'))
})

io.listen(port);
console.log('Listening on port ', port);