import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import StartPage from './StartPage';

class App extends Component {

 render() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={LoginPage}/>
      <Route path="/main" exact component={StartPage} />
      </Switch>
    </Router>
  );
}
}

export default App;
