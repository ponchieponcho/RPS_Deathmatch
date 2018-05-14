import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class GameOverPage extends Component {

componentDidMount() {
  
}

 render() {
  return (
    <div>
    Game Over! The winner is {this.props.winner}
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    winner: state.winner
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GameOverPage));

