import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import WelcomeUser from '../components/WelcomeUser';
import ReadyToggle from '../components/ReadyToggle';
import ReadyMsg from '../components/ReadyMsg';

import {actionUpdateReady} from '../actions/users';

class ReadyPage extends Component {

togglePlayerReady = () => {
  if (this.props.ready === false) {
    this.props.dispatch(actionUpdateReady(true))
  } else {
    this.props.dispatch(actionUpdateReady(false))
  }
}

 render() {
  return (
    <div>
    <WelcomeUser name={this.props.username}/>
    <ReadyMsg ready={this.props.ready}/>
    <ReadyToggle togglePlayerReady={this.togglePlayerReady} />
  </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    ready: state.ready,
    username: state.username
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ReadyPage));

