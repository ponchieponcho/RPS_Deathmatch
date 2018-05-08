import React, { Component } from 'react';

class StartPage extends Component {


componentDidMount() {
  
  }

 render() {
  let {users} = this.state.users

  return (
    <div>
      <p>... has joined the room</p>
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
