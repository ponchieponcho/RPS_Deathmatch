import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TotalUsers from '../components/TotalUsers';
import WelcomeUser from '../components/WelcomeUser';
import ReadyButton from '../components/ReadyButton';

class ReadyPage extends Component {
constructor(props) {
  super(props);
  this.state = {
    users: []
  }
}

componentDidMount() {
  this.props.socket.on('current-users', allUsers => {
    this.setState({users: allUsers})
  })
}

 render() {
  return (
    <div>
    <WelcomeUser />
    <TotalUsers users={this.state.users}/>
    <ReadyButton />
  </div>
  );
}
}

export default withRouter(ReadyPage);
