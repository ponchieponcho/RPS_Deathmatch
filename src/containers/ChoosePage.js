import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Options from '../components/Options';
import ChoiceCountdown from '../components/ChoiceCountdown';

import {actionUpdateSelection, 
      actionUpdateChoiceCountdown,
      actionUpdateStatus} from '../actions/users';

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
  
  this.props.socket.on('change-status', (status) => {
    console.log('Status recieved', status)
    this.props.changeStatus(status)
  })

  this.props.socket.emit('game-start', true)
}

render() {
  return (
    <div className="choose-page-container">
      <div className="vs">
        <span className="vs-text">VS {this.props.opponent}</span>
        <span>{this.props.status === 'tied' ? <div>You Tied...Choose Again</div>: <div></div>}</span>
     </div>
    <Options handleSelection={this.props.handleSelection}/>
    {this.props.choice_countdown > 1 ? <ChoiceCountdown choice_countdown={this.props.choice_countdown}/> : <div></div>}
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
    username: state.username,
    status: state.status
    };
}

let mapDispatchToProps = (dispatch) => {
  return {
      handleSelection: (sel) => {
        dispatch(actionUpdateSelection(sel))},
      choiceCountdown: (num) => {
        dispatch(actionUpdateChoiceCountdown(num))},
      changeStatus: (status) => {
        dispatch(actionUpdateStatus(status))}
    } 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChoosePage));

