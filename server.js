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

  socket.on('user-ready', (id, status) => {
    game.changeReadyStatus(id, status)
    io.emit('current-users', game.users)
    let start = (num) => {
      if ( num > 0) {
        io.emit('countdown-numbers', num)
        } 
        else if (num === 0) {

          let sendOpponent = (oneUsername, oneId, twoUsername, twoId) => {
            
            console.log(`******Emiting your-opponent to: ${oneId}******`)
            io.to(`${oneId}`).emit('your-opponent', twoUsername);
            io.to(`${oneId}`).emit('push-to-choice');

            // io.to(oneId).emit('choice-countdown');

            console.log(`******Emiting your-opponent to: ${twoId}******`)
            io.to(`${twoId}`).emit('your-opponent', oneUsername);
            io.to(`${twoId}`).emit('push-to-choice');

            // io.to(twoId).emit('choice-countdown');
          }

          let sendWait = (playerID) => {
            io.to(playerID).emit('waiting');
          }

          let sendWin = (playerID) => {
            io.to(playerID).emit('you-win');
            io.emit('push-to-end-screen')
          }

          game.handlePairUp(game.users)
          game.vsStart(game.tournament, sendOpponent, sendWait, sendWin)
          // io.emit('push-to-choice')

        }
       }
    game.startCountdown(start)
    })

  socket.on('user-selection', (id, selection) => {
    console.log('selection',selection)
  //   game.changeSelection(id, selection)
  //   io.emit('current-users', game.users)
  // console.log(game.users)
})


  socket.on('disconnect', () => {
    game.removeUser(socket.id)
    io.emit('current-users', game.users)
  })

  socket.on('test', () => console.log('Test worked!'))
})

io.listen(port);
console.log('Listening on port ', port);