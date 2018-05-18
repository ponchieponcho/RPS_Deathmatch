import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import WelcomeUser from '../components/WelcomeUser';
import ReadyToggle from '../components/ReadyToggle';
import ReadyMsg from '../components/ReadyMsg';
import ReadyCountdownMobile from '../components/ReadyCountdownMobile';

import {actionUpdateReady} from '../actions/users';
import {actionUpdateOpponent} from '../actions/users';


class ReadyPage extends Component {

componentDidMount() {
  this.props.socket.on('your-opponent', opponent => {
    console.log(opponent)
    this.props.dispatch(actionUpdateOpponent(opponent))
  })

  this.props.socket.on('waiting', () => {
    this.props.history.push("/wait")
  })
}

togglePlayerReady = () => {
  if (this.props.ready === false) {
    this.props.dispatch(actionUpdateReady(true))
  } else if (this.props.ready === true){
    this.props.dispatch(actionUpdateReady(false))
  }
}

 render() {
  return (
    <div className="ready-page-container">
      <div className="ready-top">
        <WelcomeUser name={this.props.username}/>
        <ReadyMsg ready={this.props.ready}/>
      </div>
      <div className="ready-bottom">
      {this.props.users.length < 2 ? <span className="ready-toggle">Waiting on one more opponent...</span> : <ReadyToggle togglePlayerReady={this.togglePlayerReady} />}
      {this.props.countdown <= 1 ? <div className="ready-countdown-bottom"></div> : <div className="ready-countdown-bottom"><ReadyCountdownMobile countdown={this.props.countdown}/></div>}
      </div>
  </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    ready: state.ready,
    username: state.username,
    socket: state.socket,
    users: state.users,
    countdown: state.countdown
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ReadyPage));

