import React from 'react';
import ReactDOM from 'react-dom';
// import {connect, Provider} from 'react-redux';
// import {createStore} from 'redux';
import './styles.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import openSocket from 'socket.io-client';
import './pixi_render.js';

const socket = openSocket('http://localhost:8000');

ReactDOM.render(<App socket={socket}/>, document.getElementById('root'));

registerServiceWorker();
