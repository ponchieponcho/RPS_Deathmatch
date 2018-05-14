import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class WaitPage extends Component {

componentDidMount() {
  
}

 render() {
  return (
    <div>
    Waiting on opponent
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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(WaitPage));

