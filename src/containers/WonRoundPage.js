import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class WonRoundPage extends Component {

componentDidMount() {
  
}

 render() {
  return (
    <div>
    You won the round! Please wait to face your next opponent.
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(WonRoundPage));

