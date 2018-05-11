import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './styles/styles.css';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';
import openSocket from 'socket.io-client';
import { UPDATE_USERNAME,
        UPDATE_USERS,
        UPDATE_READY,
        UPDATE_ID,
        UPDATE_COUNTDOWN } from './actions/users'

const socket = openSocket('http://localhost:8000');

let initialState = {
    users: [],
    ready: false,
    username: '',
    socket: socket,
    selection: null,
    id:'',
    countdown: ''
};

let reducer = (oldState = initialState, action) => {
    switch (action.type) {

        case UPDATE_USERNAME:
        // console.log('TRIGGERED ACTION: UPDATE_USERNAME')
        let username = action.payload;
        return {...oldState, username: username}
       
        case UPDATE_USERS:
        // console.log('TRIGGERED ACTION: UPDATE_USERS')
        let users = action.payload;
        return {...oldState, users: users}

        case UPDATE_READY:
        // console.log('TRIGGERED ACTION: UPDATE_READY')
        let ready = action.payload;
        socket.emit('user-ready', oldState.id, ready)
        return {...oldState, ready: ready}

        case UPDATE_ID:
        // console.log('TRIGGERED ACTION: UPDATE_USERS')
        let id = action.payload;
        return {...oldState, id: id}

        case UPDATE_COUNTDOWN:
        console.log('TRIGGERED ACTION: UPDATE_COUNTDOWN')
        let countdown = action.payload;
        return {...oldState, countdown: countdown}

        default:
        return oldState;
    }
}

let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let TopLevel = () => 
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(<TopLevel />, document.getElementById('root'));

registerServiceWorker();
