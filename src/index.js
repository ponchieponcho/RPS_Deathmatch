import React from 'react';
import ReactDOM from 'react-dom';
// import {connect, Provider} from 'react-redux';
// import {createStore} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
