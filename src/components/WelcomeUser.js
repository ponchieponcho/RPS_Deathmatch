import React from 'react';

let WelcomeUser = (props) => {
    let name = localStorage.getItem('username');

    return (
        <p>Welcome, {name}!</p>
    )
};
  
export default WelcomeUser;
