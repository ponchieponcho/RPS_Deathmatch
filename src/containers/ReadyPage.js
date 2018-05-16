import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import WelcomeUser from '../components/WelcomeUser';
import ReadyToggle from '../components/ReadyToggle';
import ReadyMsg from '../components/ReadyMsg';

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
      <WelcomeUser name={this.props.username}/>
      <ReadyMsg ready={this.props.ready}/>
      {this.props.users.length < 2 ? <span><li>Waiting on one</li><li>more opponent...</li></span> : <ReadyToggle togglePlayerReady={this.togglePlayerReady} />}
  </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    ready: state.ready,
    username: state.username,
    socket: state.socket,
    users: state.users
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ReadyPage));

