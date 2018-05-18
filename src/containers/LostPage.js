import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import {actionUpdateStatus} from '../actions/users'

class LostPage extends Component {

componentDidMount() {
  this.props.updateStatus('lost')
}

 render() {
  return (
    <div className="lost-page-container">
    <div className="you-lost-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.74 75.59">
      <title>You Lost</title>
      <g id="Layer_2" data-name="Layer 2">
      <g id="Objects">
      <g id="youlost">
      <polygon className="cls-1" points="37.87 0.87 40.24 0 42.5 1.16 44.96 0.6 47.05 2.03 49.57 1.78 51.46 3.46 53.99 3.53 55.65 5.44 58.16 5.82 59.57 7.92 62.01 8.62 63.14 10.88 65.47 11.87 66.32 14.26 68.5 15.54 69.04 18.01 71.05 19.55 71.28 22.07 73.08 23.85 72.98 26.38 74.55 28.38 74.13 30.88 75.44 33.05 74.72 35.48 75.74 37.79 74.72 40.11 75.44 42.54 74.13 44.71 74.55 47.21 72.98 49.2 73.08 51.73 71.28 53.51 71.05 56.04 69.04 57.58 68.5 60.05 66.32 61.33 65.47 63.71 63.14 64.71 62.01 66.97 59.57 67.66 58.16 69.77 55.65 70.15 53.99 72.06 51.46 72.12 49.57 73.81 47.05 73.55 44.96 74.99 42.5 74.42 40.24 75.59 37.87 74.71 35.49 75.59 33.24 74.42 30.77 74.99 28.68 73.55 26.17 73.81 24.28 72.12 21.75 72.06 20.08 70.15 17.58 69.77 16.17 67.66 13.73 66.97 12.59 64.71 10.26 63.71 9.42 61.33 7.23 60.05 6.69 57.58 4.68 56.04 4.46 53.51 2.66 51.73 2.75 49.2 1.19 47.21 1.6 44.71 0.3 42.54 1.02 40.11 0 37.79 1.02 35.48 0.3 33.05 1.6 30.88 1.19 28.38 2.75 26.38 2.66 23.85 4.46 22.07 4.68 19.55 6.69 18.01 7.23 15.54 9.42 14.26 10.26 11.87 12.59 10.88 13.73 8.62 16.17 7.92 17.58 5.82 20.08 5.44 21.75 3.53 24.28 3.46 26.17 1.78 28.68 2.03 30.77 0.6 33.24 1.16 35.49 0 37.87 0.87"/>
      <path className="cls-2" d="M67.44,37.79A29.57,29.57,0,1,1,37.87,8.22,29.57,29.57,0,0,1,67.44,37.79Z"/>
      <path className="cls-3" d="M64.36,37.79A26.49,26.49,0,1,1,37.87,11.3,26.49,26.49,0,0,1,64.36,37.79Z"/>
      <circle className="cls-4" cx="28.51" cy="28.93" r="5.04"/>
      <path className="cls-4" d="M51.35,28.93a5,5,0,1,1-5-5A5,5,0,0,1,51.35,28.93Z"/>
      <path className="cls-5" d="M31.78,50.58s5.34-15.42,12.45,0"/>
      </g></g></g>
    </svg>
    </div>
    <span className="you-lost-text">
      <li>You lost!</li>
      <li>Please wait for the deathmatch to end...</li>
    </span>
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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LostPage));

