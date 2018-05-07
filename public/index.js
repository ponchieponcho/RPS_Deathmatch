var socket;

function setup() {
  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}