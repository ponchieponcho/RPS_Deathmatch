import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      inputUsername: '',
      userId: ''
    }
  }

componentDidMount() {
  socket.on('connect', () => {
    socket.on('clientid', data => {
      this.setState({userId:data})
    })
  })
  }

emitUsername() {
  if (this.state.inputUsername) {
    this.setState({userName: this.state.inputUsername})
    socket.emit('username', this.state.inputUsername)
  } else {
    console.log('Cannot submit a blank username')
  }
}

 render() {
  return (
    <div className="App">
    <p>Pick a username: <input type="text" onChange={ event => this.setState({ inputUsername: event.target.value })} /></p>
    <button onClick={() => this.emitUsername()}>Set username</button>
    </div>    
  );
}
}

export default LoginPage;
