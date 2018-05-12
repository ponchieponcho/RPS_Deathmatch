import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Options from '../components/Options';

import {actionUpdateSelection} from '../actions/users';

class ChoosePage extends Component {

componentDidMount() {
  //start countdown for user choice
  //once countdown is done, send results to server
  //push user to WIN or LOSE screen
}

 render() {
  return (
    <Options handleSelection={this.props.handleSelection}/>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    selection: state.selection
  };
}

let mapDispatchToProps = (dispatch) => {
  return {handleSelection: (sel) => {
    dispatch(actionUpdateSelection(sel))
  }} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChoosePage));

