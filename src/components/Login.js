import React from 'react';

let Login = (props) =>
    <div className="loginpage-container">
    <li><span>Pick a username:</span></li>
    <li><input type="text" onChange={ event => props.handleUsernameInput(event.target.value)} /></li>
    <li><button onClick={() => props.emitUsername()}>Set username</button></li>
    </div>    

export default Login;
