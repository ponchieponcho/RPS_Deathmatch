import React from 'react';
import ReactDOM from 'react-dom';
// import {connect, Provider} from 'react-redux';
// import {createStore} from 'redux';
import './styles/styles.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

ReactDOM.render(<App socket={socket}/>, document.getElementById('root'));

registerServiceWorker();
