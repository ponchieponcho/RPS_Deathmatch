import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import ReadyPage from './ReadyPage';
import LoginPage from './LoginPage';
import ChoosePage from './ChoosePage';
import WaitPage from './WaitPage';
import Game from './Game';


import { actionUpdateId } from '../actions/users';

class App extends Component {
 
componentDidMount() {
  this.props.socket.on('connect', () => {
    this.props.socket.on('clientid', id => {
      console.log('Socket id: ',id)
      this.props.dispatch(actionUpdateId(id))
    })
 
  })
  }

 render() {
  return (
    <div>
    <Game />
    <Router>
      <Switch>
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/readyup" exact component={ReadyPage} />
      <Route path="/choose" exact component={ChoosePage} />
      <Route path="/wait" exact component={WaitPage} />
      </Switch>
    </Router>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
