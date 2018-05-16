import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Game from './Game';
import Header from '../components/Header';
import ReadyPage from './ReadyPage';
import LoginPage from './LoginPage';
import ChoosePage from './ChoosePage';
import WaitPage from './WaitPage';
import LostPage from './LostPage';
import WonRoundPage from './WonRoundPage';
import GameOverPage from './GameOverPage';

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
    <div className="app-container">
        <Router>
          <div className="router-container">
            <Game />
            <div className="mobile-container hide-on-desktop">
            <Header />
            <Switch>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/readyup" exact component={ReadyPage} />
            <Route path="/choose" exact component={ChoosePage} />
            <Route path="/wait" exact component={WaitPage} />
            <Route path="/lost" exact component={LostPage} />
            <Route path="/won_round" exact component={WonRoundPage} />
            <Route path="/game_over" exact component={GameOverPage} />
            </Switch>
            </div>
          </div>
        </Router>
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket,
    state: state
  };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
