import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class ChoosePage extends Component {

  componentDidMount() {
    //start countdown for user choice
    //once countdown is done, send results to server
    //push user to WIN or LOSE screen
  }
  
 render() {
  return (
    <div className="choice-container">
      
    <input type="radio" id="rockChoice"
     name="selection" value="rock"/>
    <label for="rockChoice">Rock</label>

    <input type="radio" id="paperChoice"
     name="selection" value="paper"/>
    <label for="paperChoice">Paper</label>

    <input type="radio" id="scissorChoice"
     name="selection" value="scissor"/>
    <label for="scissorChoice">Paper</label>

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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ChoosePage));

