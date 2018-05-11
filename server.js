const io = require('socket.io')();
const Game = require('./Game')
const port = 8000;

let users = [];
let i = 0;
// randomize a room name?

let game = new Game();

let interval;

let countDown = (socket, status) => {
    console.log('status', status)
  let num = 10;
  if (status === true) {
    interval = setInterval( () => {
      if (num >= 0) {
      io.emit('countdown-numbers', num)
      num--;
        } 
      }, 1000)
  } else if (status === false) { 
    clearInterval(interval)
    interval = null;
    io.emit('countdown-numbers', 'false')
    }
}
  
//  if (status === true) {
//   interval(num);
//  } else if (status === false) {
//     clearInterval(interval())
//     io.emit('countdown-numbers', 'false')
//  }


// let countDown = (socket, status) => {
//   console.log('status', status)
//  if (status === true) {
//     io.emit('countdown-numbers', 10)
//  } else if (status === false) {
//     io.emit('countdown-numbers', '')
//  }
// }

// let countDown = (socket, status) => { 
//   console.log('status', status)
//  if (status === true) {
//   io.emit('countdown-numbers', 'true')
//  } else if (status === false) {
//   io.emit('countdown-numbers', 'false')

//  }
// }

io.on('connection', (socket) => {
  console.log('Socket id: ',socket.id)
  io.emit('current-users', users)
  socket.emit('clientid', socket.id)
  
  socket.on('join-game', (user) => {
    // users.push(user)
    game.addUser(user)
    io.emit('current-users', game.users)
  })

  socket.on('user-ready', (id, status) => {
    let theuser = users.find((user) => user.id === id)
    theuser.ready = status;
    if(status === true) {
      i++
    } else {
      i--
    }
    console.log('number of users:', i)
    io.emit('current-users', users)

    for (let user of users) {
        if(i === users.length){
          console.log('all users ready')
          countDown(socket, true)
        }
        else {
          console.log('users are not ready')
          countDown(socket, false)
        }
      }
    })

  socket.on('disconnect', () => {
    console.log(`Disconnected ${socket.id}`)
    let removeduser = users.filter( user => user.id !== socket.id)
    users = removeduser;
    io.emit('current-users', users)
  })

  socket.on('test', () => console.log('Test worked!'))
})


io.listen(port);
console.log('Listening on port ', port);