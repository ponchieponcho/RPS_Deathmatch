import React from 'react';

let Login = (props) =>
    <div className="loginpage-container hide-on-mobile">
    <p>Pick a username: <input type="text" onChange={ event => props.handleUsernameInput(event.target.value)} /></p>
    <button onClick={() => props.emitUsername()}>Set username</button>
    </div>    

export default Login;
