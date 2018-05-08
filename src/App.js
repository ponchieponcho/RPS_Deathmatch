import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import StartPage from './StartPage';

class App extends Component {
 
  componentDidMount() {
    this.props.socket.on('connect', () => {
      this.props.socket.on('clientid', data => {
        this.setState({userId:data})
      })
    })
    }

 render() {
  let smartlogin = () => {
    return <LoginPage socket={this.props.socket}/>
  }

  return (
    <Router>
      <Switch>
      <Route path="/login" exact component={smartlogin}/>
      <Route path="/main" exact component={StartPage} />
      </Switch>
    </Router>
  );
}
}

export default App;
