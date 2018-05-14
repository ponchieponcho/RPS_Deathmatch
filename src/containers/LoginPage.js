import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import {actionUpdateUsername} from '../actions/users'
import Login from '../components/Login';

class LoginPage extends Component {

componentDidMount() {
  this.props.socket.on('push-to-choice', () => 
    this.props.history.push("/choose")
  )
}

emitUsername = () => {
  if (this.props.username) {
    let user = {
      username: this.props.username,
      id: this.props.id,
      selection: null,
      ready: this.props.ready,
      status: null
    }
    this.props.socket.emit('join-game', user)
    this.props.history.push("/readyup");
  } else {
    console.log('Cannot submit a blank username')
  }
}

 render() {
  return (
  <Login 
   handleUsernameInput = {this.props.handleUsernameInput} 
   emitUsername = {this.emitUsername} 
  /> 
  )
  }
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    username: state.username,
    ready: state.ready,
    id: state.id
  };
}

let mapDispatchToProps = (dispatch) => {
  return {handleUsernameInput: (input) => {
        dispatch(actionUpdateUsername(input))
  } }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
