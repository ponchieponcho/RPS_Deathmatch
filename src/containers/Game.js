import React, { Component } from 'react';
import TotalUsers from '../components/TotalUsers';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
     users:[],
     ready: localStorage.getItem('ready')
    }
  }

  componentDidMount() {
    this.props.socket.on('current-users', allUsers => {
      this.setState({users: allUsers})
    })
  }

 render() {
  return (
    <TotalUsers users={this.state.users} ready={this.state.ready}/>
  );
}
}

export default Game;
