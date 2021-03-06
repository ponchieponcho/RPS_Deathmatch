import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";

import TotalUsers from '../components/TotalUsers';
import ReadyCountdown from '../components/ReadyCountdown';


import {actionUpdateUsers,
        actionUpdateCountdown,
        actionResetState} from '../actions/users';

class Game extends Component {

  componentDidMount() {

    this.props.socket.on('current-users', allUsers => {
      this.props.dispatch(actionUpdateUsers(allUsers))
    })

    this.props.socket.on('countdown-numbers', number => {
      this.props.dispatch(actionUpdateCountdown(number))
    })

    this.props.socket.on('reset-to-users', () => {
      this.props.dispatch(actionResetState(this.props.id))
      this.props.history.push("/");
      })

  }

 render() {
  return (
    <div className="desktop-container hide-on-mobile">
      <div className="users-list-container">
        <span>
          <span>Players</span>
        </span>
        <div className="all-users">
          <TotalUsers />
        </div>
      </div>
      <div className="logo-and-status-container">
          <div className="logo-container">
            <div className="logo"></div>
          </div>
          <div className="countdown-container">
            <div className="status-header">GAME STATUS</div>
            {this.props.isRunning === false ? <div className="running-desktop">[ Waiting for players to join ]</div> : <div className="running-desktop">[ RPS Deathmatch has started! ]</div>}
            {this.props.countdown <= 1 ? <div></div> : <ReadyCountdown countdown={this.props.countdown}/>}
            {this.props.winner === '' ?  <div></div>: <div className="winner-desktop">{this.props.winner} is the winner!</div> }
          </div>
      </div>
    </div>
  );
  }

}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    countdown: state.countdown,
    id: state.id,
    isRunning: state.isRunning,
    winner: state.winner
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Game));
