import React, { Component } from 'react';
import {connect} from 'react-redux';

import TotalUsers from '../components/TotalUsers';
import ReadyCountdown from '../components/ReadyCountdown';
import ChoiceCountdown from '../components/ChoiceCountdown';


import {actionUpdateUsers,
        actionUpdateCountdown} from '../actions/users';

class Game extends Component {

  componentDidMount() {

    this.props.socket.on('current-users', allUsers => {
      this.props.dispatch(actionUpdateUsers(allUsers))
    })

    this.props.socket.on('countdown-numbers', number => {
      this.props.dispatch(actionUpdateCountdown(number))
    })

  }

 render() {
  return (
    <div>
    {this.props.countdown === 1 ? <div></div> : <ReadyCountdown countdown={this.props.countdown}/>}
    <ChoiceCountdown choice_countdown={this.props.choice_countdown}/>
    <TotalUsers />
    </div>
  );
  }

}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    countdown: state.countdown,
    choice_countdown: state.choice_countdown
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
