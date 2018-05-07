import React, { Component } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{
        userID:'',
        userName:''
      }],
    }
  }

componentDidMount() {
  
  }

 render() {
  let {users} = this.state.users

  return (
    <div>
    <p>You reached the Start Page</p>
    <p>List of users:</p>
    {
      users.map(user => <div><p>{user.userID}</p><p>{user.userName}</p></div>)
    }
  </div>
  );
}
}

export default StartPage;
