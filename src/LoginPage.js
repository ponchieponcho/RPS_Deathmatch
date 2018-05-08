import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      inputUsername: '',
      userId: ''
    }
  }

componentDidMount() {
  }

emitUsername() {
  if (this.state.inputUsername) {
    this.setState({userName: this.state.inputUsername})
    this.props.socket.emit('username', this.state.inputUsername)
  } else {
    console.log('Cannot submit a blank username')
  }
}

 render() {
  return (
    <div className="loginpage-container hide-on-mobile">
    <p>Pick a username: <input type="text" onChange={ event => this.setState({ inputUsername: event.target.value })} /></p>
    <button onClick={() => this.emitUsername()}>Set username</button>
    </div>    
  );
}
}

export default LoginPage;
