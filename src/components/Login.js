import React from 'react';

let Login = (props) =>
    <div className="loginpage-container">
    <li><span>Pick a username:</span></li>
    <li><input type="text" maxLength="14" onChange={ event => props.handleUsernameInput(event.target.value)} /></li>
    </div>    

export default Login;
