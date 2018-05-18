import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import {actionUpdateUsername, actionUpdateWinner, actionUpdateRunning, actionUpdateStatus} from '../actions/users'
import Login from '../components/Login';

class LoginPage extends Component {

componentDidMount() {
  this.props.socket.on('push-to-choice', () => {
  console.log('pushing to choice')
    this.props.history.push("/choose")
  })

  this.props.socket.on('you-lost', () => {
    console.log('pushing to lost')
    this.props.history.push("/lost");
  })

  this.props.socket.on('you-won-round', () => {
    console.log('pushing to won-round')
    this.props.history.push("/won_round");
  })

  this.props.socket.on('game-over', (winnerName) => {
    this.props.updateStatus('gameover')
    this.props.updateWinner(winnerName);
    console.log('pushing to game_over')
    this.props.history.push("/game_over");
  })

  this.props.socket.on('running-flag', (status) => {
    this.props.updateRunning(status);
    console.log('changing ready flag')
  })

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
    <div className="content-container">
      <Login handleUsernameInput = {this.props.handleUsernameInput} />
      {this.props.isRunning === false ? 
      <div className="footer" onClick={() => this.emitUsername()}>
        <span className="footer-submit">SUBMIT</span>
        <i className="fas fa-angle-right"></i>
      </div> 
      :
      <div className="footer">
        <span className="footer-nextgame">WAITING FOR NEXT GAME</span>
    </div> 
      }
  </div>
  )
  }
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    username: state.username,
    ready: state.ready,
    id: state.id,
    isRunning: state.isRunning
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleUsernameInput: (input) => {
        dispatch(actionUpdateUsername(input)) },
    updateWinner: (id) => {
      dispatch(actionUpdateWinner(id)) },
    updateRunning: (status) => {
      dispatch(actionUpdateRunning(status)) },
    updateStatus: (status) => {
        dispatch(actionUpdateStatus(status)) } 
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));
