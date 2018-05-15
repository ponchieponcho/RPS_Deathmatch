import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class GameOverPage extends Component {

componentDidMount() {
  
}

masterReset() {
  this.props.socket.emit('master-reset')
}

 render() {
  return (
    <div>
    <span>Game Over! The winner is {this.props.winner} </span>
    <button onClick={() => this.masterReset()}>Restart</button>
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    winner: state.winner,
    socket: state.socket
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GameOverPage));

