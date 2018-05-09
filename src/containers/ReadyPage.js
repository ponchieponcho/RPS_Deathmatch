import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TotalUsers from '../components/TotalUsers';
import WelcomeUser from '../components/WelcomeUser';
import ReadyButton from '../components/ReadyButton';

class ReadyPage extends Component {

componentDidMount() {
  }

 render() {
  return (
    <div>
    <WelcomeUser />
    <TotalUsers />
    <ReadyButton />
  </div>
  );
}
}

export default withRouter(ReadyPage);
