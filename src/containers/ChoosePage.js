import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Options from '../components/Options';

class ChoosePage extends Component {

componentDidMount() {
  //start countdown for user choice
  //once countdown is done, send results to server
  //push user to WIN or LOSE screen
}
  
 render() {
  return (
    <Options />
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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChoosePage));

