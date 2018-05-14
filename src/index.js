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
        UPDATE_COUNTDOWN,
        UPDATE_SELECTION,
        UPDATE_OPPONENT,
        UPDATE_WINNER,
        RESET_STATE } from './actions/users'

const socket = openSocket('http://localhost:8000');

let initialState = {
    users: [],
    ready: false,
    username: '',
    socket: socket,
    selection: null,
    status: null,
    id:'',
    countdown: '',
    choice_countdown: '',
    opponent: '',
    winner: ''
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
        // console.log('TRIGGERED ACTION: UPDATE_COUNTDOWN')
        let countdown = action.payload;
        return {...oldState, countdown: countdown}

        case UPDATE_SELECTION:
        console.log('TRIGGERED ACTION: UPDATE_SELECTION')
        let selection = action.payload;
        socket.emit('user-selection', oldState.id, selection)
        return {...oldState, selection: selection}

        case UPDATE_OPPONENT:
        console.log('TRIGGERED ACTION: UPDATE_OPPONENT')
        let opponent = action.payload;
        return {...oldState, opponent: opponent}

        case UPDATE_WINNER:
        console.log('TRIGGERED ACTION: UPDATE_WINNER')
        let winner = action.payload;
        return {...oldState, winner: winner}

        case RESET_STATE:
        console.log('TRIGGERED ACTION: RESET_STATE')
        let initialState = {
            users: [],
            ready: false,
            username: '',
            socket: socket,
            selection: null,
            status: null,
            id: action.payload,
            countdown: '',
            choice_countdown: '',
            opponent: ''
        };
        return initialState;

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
