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
      {this.props.countdown === 1 ? <div></div> : <ReadyCountdown countdown={this.props.countdown}/>}
      <TotalUsers />
    </div>
  );
  }

}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    countdown: state.countdown,
    id: state.id
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Game));
