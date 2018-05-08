import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import StartPage from './StartPage';

class App extends Component {

  componentDidMount() {
    this.props.socket.on('connect', () => {
      this.props.socket.on('clientid', data => {
        this.setState({userId:data})
        //local storage?
      })
    })
    }

 render() {
  return (
    <Router>
      <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/main" exact component={StartPage} />
      </Switch>
    </Router>
  );
}
}

export default App;
