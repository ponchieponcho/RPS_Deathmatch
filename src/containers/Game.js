import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actionUpdateUsers} from '../actions/users';

import TotalUsers from '../components/TotalUsers';

class Game extends Component {

  componentDidMount() {
    this.props.socket.on('current-users', allUsers => {
      this.props.dispatch(actionUpdateUsers(allUsers))
    })
  }

 render() {
  return (
    <TotalUsers />
  );
  }

}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
