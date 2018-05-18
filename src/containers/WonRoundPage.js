import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import {actionUpdateStatus} from '../actions/users'

class WonRoundPage extends Component {

componentDidMount() {
  // this.props.updateStatus('won-round')
}

 render() {
  return (
    <div className="wonround-page-container">
      <div className="you-won-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 90.22">
        <title>You Won</title>
        <g id="youwonid1" data-name="Layer 2">
            <g id="youwonid2" data-name="Objects">
                <polygon points="28.16 82.61 18.08 84.82 23.34 68.11 40.41 73.48 35.14 90.22 35.13 90.21 28.16 82.61" fill="#ef5b7f"/>
                <polygon points="34.34 89.36 39.43 73.18 38.95 73.03 33.95 88.93 34.34 89.36" fill="#f1f2f2"/>
                <polygon points="19.25 84.55 19.81 84.43 24.8 68.57 24.32 68.42 19.25 84.55" fill="#f1f2f2"/>
                <polygon points="47.84 82.61 57.92 84.82 52.66 68.11 35.59 73.48 40.86 90.22 40.87 90.21 47.84 82.61" fill="#ef5b7f"/>
                <polygon points="41.66 89.36 36.57 73.18 37.05 73.03 42.05 88.93 41.66 89.36" fill="#f1f2f2"/>
                <polygon points="56.76 84.55 56.19 84.43 51.2 68.57 51.68 68.42 56.76 84.55" fill="#f1f2f2"/>
                <polygon points="38 0.88 40.38 0 42.64 1.17 45.12 0.6 47.22 2.04 49.74 1.78 51.64 3.48 54.18 3.54 55.85 5.46 58.36 5.84 59.78 7.95 62.22 8.64 63.36 10.92 65.7 11.91 66.55 14.31 68.74 15.59 69.28 18.07 71.3 19.62 71.52 22.15 73.33 23.94 73.24 26.48 74.81 28.47 74.39 30.98 75.7 33.16 74.98 35.6 76 37.92 74.98 40.25 75.7 42.69 74.39 44.87 74.81 47.38 73.24 49.37 73.33 51.91 71.52 53.7 71.3 56.23 69.28 57.78 68.74 60.26 66.55 61.54 65.7 63.94 63.36 64.93 62.22 67.2 59.78 67.9 58.36 70.01 55.85 70.39 54.18 72.31 51.64 72.37 49.74 74.06 47.22 73.81 45.12 75.25 42.64 74.68 40.38 75.85 38 74.97 35.62 75.85 33.36 74.68 30.88 75.25 28.79 73.81 26.26 74.06 24.36 72.37 21.82 72.31 20.15 70.39 17.64 70.01 16.22 67.9 13.78 67.2 12.64 64.93 10.3 63.94 9.45 61.54 7.26 60.26 6.72 57.78 4.7 56.23 4.48 53.7 2.67 51.91 2.76 49.37 1.19 47.38 1.61 44.87 0.3 42.69 1.02 40.25 0 37.92 1.02 35.6 0.3 33.16 1.61 30.98 1.19 28.47 2.76 26.48 2.67 23.94 4.48 22.15 4.7 19.62 6.72 18.07 7.26 15.59 9.45 14.31 10.3 11.91 12.64 10.92 13.78 8.64 16.22 7.95 17.64 5.84 20.15 5.46 21.82 3.54 24.36 3.48 26.26 1.78 28.79 2.04 30.88 0.6 33.36 1.17 35.62 0 38 0.88" fill="#39b5ac"/>
                <path d="M67.67,37.92A29.67,29.67,0,1,1,38,8.25,29.67,29.67,0,0,1,67.67,37.92Z" fill="#39b5ac" stroke="#f1f2f2" strokeWidth="2"/>
                <path d="M64.58,37.92A26.58,26.58,0,1,1,38,11.34,26.59,26.59,0,0,1,64.58,37.92Z" fill="none" stroke="#f1f2f2" strokeLinecap="round" strokeDasharray="2 3"/>
                <path d="M30.69,27.84a3,3,0,1,1-3-3A3,3,0,0,1,30.69,27.84Z" fill="#fff" stroke="#f1f2f2" strokeWidth="2"/>
                <path d="M49.56,27.65a3,3,0,1,1-3-3A3,3,0,0,1,49.56,27.65Z" fill="#fff" stroke="#f1f2f2" strokeWidth="2"/>
                <path d="M48.63,44.1c-5.69,6.56-13,11.75-22,0" fill="none" stroke="#f1f2f2" strokeLinecap="round" strokeWidth="2"/>
            </g>
        </g>
      </svg>
      </div>
      <div className="you-lost-text ">
        <li>You won the round!</li>
        <li>Please wait to face your next opponent.</li>
      </div>
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    socket: state.socket
    };
}

let mapDispatchToProps = (dispatch) => {
  return { updateStatus: (status) => {
    dispatch(actionUpdateStatus(status)) } 
  } 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(WonRoundPage));

