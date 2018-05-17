import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import {actionUpdateStatus} from '../actions/users';

class WaitPage extends Component {

componentDidMount() {
  this.props.socket.on('wait-continue', (status) => {
    this.props.dispatch(actionUpdateStatus(status))
  })
}

 render() {
  return (
    <div className="wait-page-container">
    {this.props.status === 'wait-continue' ? <div>Next round is about to start...</div> : <div>Waiting on next round for opponent</div>}
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    status: state.status
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(WaitPage));

