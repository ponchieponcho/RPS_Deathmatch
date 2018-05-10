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
    localStorage.setItem('ready', true)
    this.props.dispatch(actionUpdateReady(true))
  } else {
    localStorage.setItem('ready', false)
    this.props.dispatch(actionUpdateReady(false))
  }
}

 render() {
  return (
    <div>
    <WelcomeUser />
    <ReadyMsg ready={this.props.ready}/>
    <ReadyToggle togglePlayerReady={this.togglePlayerReady} />
  </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    ready: state.ready
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ReadyPage));

