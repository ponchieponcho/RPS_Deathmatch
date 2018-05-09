import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Login from '../components/Login';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      inputUsername: '',
      userId: ''
    }
  }

emitUsername = () => {
  if (this.state.userName) {
    localStorage.setItem('username', this.state.userName);
    let user = {
      username: localStorage.getItem('username'),
      id: localStorage.getItem('id'),
      selection: null
    }
    this.props.socket.emit('join-game', user)
    this.props.history.push("/readyup");
  } else {
    console.log('Cannot submit a blank username')
  }
}

handleUsernameInput = (input) => {
  this.setState({userName: input})
}

 render() {
  return (
  <Login 
   handleUsernameInput = {this.handleUsernameInput} 
   emitUsername = {this.emitUsername} 
  /> 
  );
}
}

export default withRouter(LoginPage);
