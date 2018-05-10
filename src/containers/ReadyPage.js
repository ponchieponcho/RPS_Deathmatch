import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import TotalUsers from '../components/TotalUsers';
import WelcomeUser from '../components/WelcomeUser';
import ReadyToggle from '../components/ReadyToggle';
import ReadyMsg from '../components/ReadyMsg';

class ReadyPage extends Component {
constructor(props) {
  super(props);
  this.state = {
    ready: false
  }
}

togglePlayerReady = () => {
  if (this.state.ready === false) {
    this.setState({ready: true})
    localStorage.setItem('ready', true)
  } else {
    this.setState({ready: false})
    localStorage.setItem('ready', false)
  }
}

 render() {
  return (
    <div>
    <WelcomeUser />
    <ReadyMsg ready={this.state.ready}/>
    <ReadyToggle togglePlayerReady={this.togglePlayerReady} ready={this.state.ready} />
  </div>
  );
}
}

export default withRouter(ReadyPage);
