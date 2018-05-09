import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import ReadyPage from './ReadyPage';
import LoginPage from './LoginPage';
import Game from './Game';

class App extends Component {
 
  componentDidMount() {
    this.props.socket.on('connect', () => {
      this.props.socket.on('clientid', id => {
        this.setState({userId:id})
        console.log('Socket id: ',id)
        localStorage.setItem('id',id)
      })
    })
    }

SmartLoginPage = () => {
  return (<LoginPage socket={this.props.socket}/>)
}

SmartReadyPage = () => {
  return (<ReadyPage socket={this.props.socket}/>)
}

 render() {

  return (
    <div>
    <Game socket={this.props.socket}/>
    <Router>
      <Switch>
      <Route path="/login" exact component={this.SmartLoginPage}/>
      <Route path="/readyup" exact component={this.SmartReadyPage} />
      </Switch>
    </Router>
    </div>
  );
}
}

export default App;