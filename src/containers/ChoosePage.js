import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Options from '../components/Options';
import ChoiceCountdown from '../components/ChoiceCountdown';

import {actionUpdateSelection, actionUpdateChoiceCountdown} from '../actions/users';

class ChoosePage extends Component {

componentDidMount() {
  this.props.socket.on('choice-countdown', () => {
    let num = 10
    let interval = null;
    interval = setInterval( () => {
      if (num >= 1) {
        this.props.choiceCountdown(num)
        num--;
      } else { 
        console.log('done')
        clearInterval(interval)
        this.props.socket.emit('fight')
        num = 10;
      }
    }, 1000)
  })
  
  this.props.socket.emit('game-start', true)
}

render() {
  return (
    <div className="choose-page-container">
      <div className="vs">
      <span className="vs-text">VS</span>
      <span>{this.props.opponent}</span>
     </div>
    <Options handleSelection={this.props.handleSelection}/>
    <ChoiceCountdown choice_countdown={this.props.choice_countdown}/>
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    selection: state.selection,
    choice_countdown: state.choice_countdown,
    opponent: state.opponent,
    socket: state.socket,
    username: state.username
    };
}

let mapDispatchToProps = (dispatch) => {
  return {
      handleSelection: (sel) => {
        dispatch(actionUpdateSelection(sel))},
      choiceCountdown: (num) => {
        dispatch(actionUpdateChoiceCountdown(num))}
    } 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChoosePage));

