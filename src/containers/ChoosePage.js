import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Options from '../components/Options';
import ChoiceCountdown from '../components/ChoiceCountdown';

import {actionUpdateSelection} from '../actions/users';

class ChoosePage extends Component {

componentDidMount() {
  this.props.socket.on('choice-countdown', () => {

  })
}

 render() {
  return (
    <div>
      You VS {this.props.opponent}
    <ChoiceCountdown choice_countdown={this.props.choice_countdown}/>
    <Options handleSelection={this.props.handleSelection}/>
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    selection: state.selection,
    choice_countdown: state.choice_countdown,
    opponent: state.opponent,
    socket: state.socket
    };
}

let mapDispatchToProps = (dispatch) => {
  return {handleSelection: (sel) => {
    dispatch(actionUpdateSelection(sel))}
  } 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChoosePage));

